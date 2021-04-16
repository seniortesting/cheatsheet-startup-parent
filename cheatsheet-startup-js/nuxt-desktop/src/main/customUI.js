import os from 'os'
import path from 'path'
import { Menu, app, BrowserWindow, dialog, crashReporter, ipcMain, session, shell, Tray } from 'electron'
import { autoUpdater } from 'electron-updater'
import i18n from './i18n'
// Menu Help -> 'learn more'
const learnMoreUrl = 'https://pingbook.top'
// Crash Report url
const submitIssueUrl = 'https://pingbook.top'
// System tray Help menu
const helpUrl = 'https://pingbook.top'
const messageChannel = 'message'
// const resourcePath = require('path').join(__dirname, '..', 'resources')
const appVersion = app.getVersion()
let appTray
const customUI = {
  openUrl (url) {
    const success = shell.openExternal(url)
    return success
  },
  openFile (filePath) {
    const success = shell.openItem(filePath)
    return success
  },
  openFileInFolder (filePath) {
    const success = shell.showItemInFolder(filePath)
    return success
  },
  moveFileInTrash (filePath) {
    const success = shell.moveItemToTrash(filePath)
    return success
  },
  createShortcut (path, shortCutDetail) {
    const success = shell.writeShortcutLink(path, shortCutDetail)
    return success
  },
  /* ------------------------------------------------------------------ */
  /* refer document: https://medium.freecodecamp.org/node-js-child-processes-everything-you-need-to-know-e69498fe970a */
  /**
   * execute command, exeCommand('start "" "iexplore" "http://google.com/"');
   * @param command
   */
  exeCommand (command) {
    // childprocess.exec(command, (error, stdout, stderr) => {
    //   if (error) {
    //     console.error(`exec error:${error}`)
    //     return
    //   }
    //   console.log(`execute command success: ${command}`)
    // })
  },
  storage: {
    // Refer: [electron-json-storage]
  },
  /**
   * back/forward
   * @param back
   * @private
   */
  historyGo (back) {
    const focusedWindow = BrowserWindow.getFocusedWindow()
    const webContents = focusedWindow.webContents
    if (webContents != null) {
      if (back) {
        webContents.goBack()
      } else {
        webContents.goForward()
      }
    }
  },
  /**
   * Send message to renderer thread
   * @param action
   * @param params
   * @private
   */
  sendAction (action, ...params) {
    const win = BrowserWindow.getAllWindows()[0]

    if (process.platform === 'darwin') {
      win.restore()
    }
    action = action || messageChannel
    win.webContents.send(action, ...params)
    // BrowserWindow.getFocusedWindow().webContents.send('message', message)
  },
  registerMainEvents () {
    ipcMain.on('toggle-badge-option', () => {
      // BadgeSettings.updateBadge(badgeCount, mainWindow)
    })

    ipcMain.on('update-badge', (event, messageCount) => {
      // webPage.send('tray', messageCount)
    })

    ipcMain.on('update-taskbar-icon', (event, data, text) => {
      // BadgeSettings.updateTaskbarIcon(data, text, mainWindow)
    })
  },
  sessionConfiguration () {
    // consider all urls for integrated authentication.
    session.defaultSession.allowNTLMCredentialsForDomains('*')

    const IEUserAgent = 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko'
    // Send all request with proxy url.
    const filter = {
      urls: ['https://*.letusign.com/*', '*://*.github.io']
    }

    session.defaultSession.webRequest.onBeforeSendHeaders(filter, function (details, callback) {
      details.requestHeaders['User-Agent'] = IEUserAgent
      details.requestHeaders.Referer = ''
      // callback({cancel: false, requestHeaders: details.requestHeaders})
    })
  },
  setApplicationMenu () {
    i18n.init()
    const self = this
    const menuTemplate = [
      {
        label: i18n.t('file'),
        submenu: [
          {
            label: i18n.t('quit'),
            accelerator: 'Ctrl+Q',
            click () {
              app.quit()
            }
          }
        ]
      },
      {
        label: i18n.t('view'),
        submenu: [
          {
            label: i18n.t('reload'),
            accelerator: 'Command+R',
            click (item, focusedWindow) {
              focusedWindow.reload()
            }
          },
          {
            label: i18n.t('full-screen'),
            accelerator: process.platform === 'darwin' ? 'Ctrl+Command+F' : 'F11',
            click (item, focusedWindow) {
              focusedWindow.setFullScreen(!focusedWindow.isFullScreen())
            }
          },
          {
            label: i18n.t('minimize'),
            accelerator: 'Command+M',
            role: 'minimize'
          },
          {
            type: 'separator'
          }
          // {
          //   label: 'Toggle Developer Tools',
          //   accelerator: 'Alt+Command+I',
          //   click (item, focusedWindow) {
          //     focusedWindow.webContents.toggleDevTools()
          //   }
          // }
        ]
      },
      {
        label: i18n.t('history'),
        submenu: [{
          label: i18n.t('back'),
          accelerator: process.platform === 'darwin' ? 'Command+Left' : 'Alt+Left',
          click (item, focusedWindow) {
            if (focusedWindow) {
              self.historyGo(true)
            }
          }
        }, {
          label: i18n.t('forward'),
          accelerator: process.platform === 'darwin' ? 'Command+Right' : 'Alt+Right',
          click (item, focusedWindow) {
            if (focusedWindow) {
              self.historyGo(false)
            }
          }
        }]
      },
      {
        label: i18n.t('help'),
        submenu: [
          {
            label: i18n.t('learn-more'),
            click: async () => {
              const body = `
                    <!-- Please succinctly describe your issue and steps to reproduce it. -->
                    ${i18n.t('name')}: ${app.getVersion()}
                    Electron Versoin: ${process.versions.electron}
                    Platform Information: ${process.platform} ${process.arch} ${os.release()}`
              console.log(body)
              await self.openUrl(learnMoreUrl)
            }
          },
          {
            type: 'separator'
          },
          {
            label: i18n.t('check-update'),
            click (item, focusedWindow) {
              setTimeout(() => {
                self.checkUpdates({})
              }, 2 * 1000)
            }
          },
          {
            label: i18n.t('about'),
            click (item, focusedWindow) {
              if (focusedWindow) {
              }
            }
          }
        ]
      }
    ]
    const newMenu = Menu.buildFromTemplate(menuTemplate)
    Menu.setApplicationMenu(newMenu)
  },
  createTray () {
    const self = this
    const trayIcon = path.join(global.__resources, (process.platform === 'darwin' ? 'icon.icns' : 'win-icon.ico'))
    appTray = new Tray(trayIcon)
    const contextMenu = Menu.buildFromTemplate([
      {
        label: i18n.t('quit'),
        click (menuItem, focusedWindow, event) {
          app.isQuitting = true
          app.quit()
        }
      },
      { type: 'separator' },
      {
        label: i18n.t('setting'),
        click (menuItem, focusedWindow, event) {
        }
      },
      {
        label: i18n.t('help'),
        click (menuItem, focusedWindow, event) {
          self.openUrl(helpUrl)
        }
      }
    ])
    appTray.setToolTip(i18n.t('name'))
    appTray.setContextMenu(contextMenu)

    appTray.on('click', (events, bounds) => {
      const mainWindow = BrowserWindow.getAllWindows()[0]
      mainWindow.show()
    })
    appTray.on('double-click', (events, bounds) => {
      const mainWindow = BrowserWindow.getAllWindows()[0]
      mainWindow.show()
    }
    )
    return appTray
  },
  displayTrayBalloon (title, content) {
    const appIconPath = path.join(global.__resources, (process.platform === 'darwin' ? 'icon.icns' : 'win-icon.ico'))
    if (appTray) {
      appTray.displayBalloon({ icon: appIconPath, title, content })
    }
  },
  createUpdates () {
    const self = this
    autoUpdater.autoDownload = false
    /**
     * send the window message
     * @param message
     */
    // checking the update
    autoUpdater.on('checking-for-update', () => {
      this.sendAction(null, i18n.t('update-checking'))
    })
    autoUpdater.on('update-available', (updateInfo) => {
      this.sendAction(null, i18n.t('update-available'))
      // "none", "info", "error", "question" or "warning".
      const title = i18n.t('update-title')
      const availableUpdateMessage = `${i18n.t('update-content')} ${i18n.t('name')} ${updateInfo.version},${i18n.t('update-content-detail')}`
      const dlgOptions = {
        type: 'question',
        buttons: [i18n.t('update-now'), i18n.t('update-skip')],
        defaultId: 0,
        title,
        message: availableUpdateMessage,
        detail: `${updateInfo.releaseNotes}`,
        checkboxLabel: i18n.t('update-checkbox'),
        checkboxChecked: false,
        noLink: true
      }
      self.displayTrayBalloon(title, availableUpdateMessage)
      dialog.showMessageBox(dlgOptions, (response) => {
        if (response === 0) {
          // log.info('Begin to download the package...')
          autoUpdater.downloadUpdate()
        } else {
          // updateMenuItem.enabled = true
          // updateMenuItem = null
        }
      })
    })

    autoUpdater.on('update-not-available', (info) => {
      this.sendAction(null, i18n.t('update-not-available'))
      // updateMenuItem.enabled = true
      // updateMenuItem = null
    })
    autoUpdater.on('error', (error) => {
      // mainWindow.webContents.send("message", 'Error in auto-updater. ' + err);
      dialog.showErrorBox('Error: ', error == null ? i18n.t('update-unexpected-error') : (error.stack || error).toString())
    })
    autoUpdater.on('download-progress', (progressObj) => {
      // let logMessage = 'Download speed: ' + progressObj.bytesPerSecond
      // logMessage = logMessage + ' - Downloaded ' + progressObj.percent + '%'
      // logMessage = logMessage + ' (' + progressObj.transferred + '/' + progressObj.total + ')'
      // log.info(logMessage)
    })
    autoUpdater.on('update-downloaded', (info) => {
      // Ask user to update the app
      // log.info('Update-downloaded event triggered,show the dialog for your permission to quit...')
      const dlgOptions = {
        type: 'question',
        title: i18n.t('update-downloaded-title'),
        buttons: [i18n.t('update-downloaded-download-now'), i18n.t('update-downloaded-remind-later')],
        message: `${i18n.t('update-downloaded-message')}${info.version}`,
        detail: i18n.t('update-downloaded-detail'),
        noLink: true
      }
      dialog.showMessageBox(dlgOptions, (response) => {
        if (response === 0) {
          // log.info('The button you had clicked is install and relaunch')
          app.isQuitting = true
          autoUpdater.quitAndInstall()
          // force app to quit. This is just a workaround, ideally autoUpdater.quitAndInstall() should relaunch the app.
          app.quit()
        }
      })
    })
  },
  checkUpdates (menuItem) {
    // let updateMenuItem
    // check updates
    if (process.env.NODE_ENV === 'production') {
      // updateMenuItem = menuItem
      // updateMenuItem.enabled = false
      autoUpdater.checkForUpdates()
    } else {
      dialog.showErrorBox(
        'Check Updates Warning',
        'You cannot use the update feature in development model!'
      )
    }
  },
  /**
   * crash report
   */
  crashHandler () {
    crashReporter.start({
      productName: `${i18n.t('name')} - ${appVersion}`,
      companyName: `${i18n.t('name')}, Inc.`,
      submitURL: submitIssueUrl,
      autoSubmit: true
    })
  }

}

export default customUI
