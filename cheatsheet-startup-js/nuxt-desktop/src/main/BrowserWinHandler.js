import { EventEmitter } from 'events'
import { BrowserWindow, app } from 'electron'
import customUI from './customUI'
import i18n from './i18n'

const isProduction = process.env.NODE_ENV === 'production'

export default class BrowserWinHandler {
  /**
     * @param [options] {object} - browser window options
     * @param [allowRecreate] {boolean}
     */
  constructor (options, allowRecreate = true) {
    this._eventEmitter = new EventEmitter()
    this.allowRecreate = allowRecreate
    this.options = options
    this.browserWindow = null
    this.appTray = null
    this._createInstance()
  }

  _createInstance () {
    // This method will be called when Electron has finished
    // initialization and is ready to create browser windows.
    // Some APIs can only be used after this event occurs.
    app.on('ready', () => {
      this._create()
    })

    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (!this.allowRecreate) { return }
    app.on('activate', () => this._recreate())
    // Add support for system tray
    app.on('window-all-closed', function () {
      // destory the tray icon
      if (this.appTray) { this.appTray.destroy() }
      // 在OSX中经常是用户虽然关闭了主窗口,但是仍然希望使用Menu Bar,因此这里不进行强行关闭
      if (process.platform !== 'darwin') {
        app.quit()
      }
    })
  }

  _create () {
    this.browserWindow = new BrowserWindow(
      {
        ...this.options,
        webPreferences: {
          ...this.options.webPreferences,
          webSecurity: isProduction, // disable on dev to allow loading local resources
          allowRunningInsecureContent: true,
          allowDisplayingInsecureContent: true,
          plugins: true, // BrowserWindow.addExtension
          defaultFontSize: 18, // default is 16
          defaultEncoding: 'UTF-8',
          nodeIntegration: true, // allow loading modules via the require () function
          devTools: !process.env.SPECTRON // disable on e2e test environment
        }
      }
    )
    /**
     * Walter Hu: application menu,auto update check, system tray
     *
     */
    customUI.setApplicationMenu()
    this.appTray = customUI.createTray()
    customUI.createUpdates()
    this.browserWindow.on('close', (event) => {
      // Dereference the window object
      // this.browserWindow = null
      app.isQuitting = true
      if (!app.isQuitting) {
        event.preventDefault()
        process.platform === 'darwin' ? app.hide() : this.browserWindow.hide()
        customUI.displayTrayBalloon('', i18n.t('tray-hide-message'))
      } else {
        app.quit()
      }
    })
    this.browserWindow.on('minimize', (event) => {
      event.preventDefault()
      process.platform === 'darwin' ? app.hide() : this.browserWindow.hide()
      customUI.displayTrayBalloon('', i18n.t('tray-hide-message'))
    })
    this.browserWindow.on('show', function () {
      // this.appTray.setHighlightMode('selection')
    })
    this.browserWindow.webContents.once('did-frame-finish-load', () => {
      // Initate auto-updates on MacOS and Windows
      // log.info('check updating when start the page...')
      customUI.checkUpdates()
    })
    this.browserWindow.webContents.on('crashed', function () {
      // crash report
    })
    // end
    this._eventEmitter.emit('created')
  }

  _recreate () {
    if (this.browserWindow === null) { this._create() }
  }

  /**
     * @callback onReadyCallback
     * @param {BrowserWindow}
     */

  /**
     *
     * @param callback {onReadyCallback}
     */
  onCreated (callback) {
    this._eventEmitter.once('created', () => {
      callback(this.browserWindow)
    })
  }

  /**
     *
     * @returns {Promise<BrowserWindow>}
     */
  created () {
    return new Promise((resolve) => {
      this._eventEmitter.once('created', () => {
        resolve(this.browserWindow)
      })
    })
  }
}
