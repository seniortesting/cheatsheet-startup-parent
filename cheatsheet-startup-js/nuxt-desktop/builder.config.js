const BUILD_NAME = 'NuxtElectron'
const PRODUCT_NAME = BUILD_NAME + 'App'
const PUBLISH_NAME = BUILD_NAME + ', Inc.'
const APP_ID = 'com.heapstack.electron'
const LICENSE_FILE = 'license_zh.txt'
const CHECK_UPDATE_URL = 'https://res.yitieyilu.com/release/demo/'
// 资源路径
const ICONS_DIR = 'build/icons/'
// windows installer
const windowsOS = {
  win: {
    icon: ICONS_DIR + 'win-icon.ico',
    publisherName: PUBLISH_NAME,
    target: [
      {
        target: 'nsis',
        arch: ['x64']
      }
    ]
  },
  nsis: {
    // no need to  restart installer with elevated permissions
    allowElevation: true,
    perMachine: true,
    oneClick: false,
    allowToChangeInstallationDirectory: true,
    deleteAppDataOnUninstall: true,
    runAfterFinish: true,
    createDesktopShortcut: true,
    createStartMenuShortcut: true,
    menuCategory: true,
    license: LICENSE_FILE
  }
}
// linux安装包配置
const linuxOS = {
  linux: {
    icon: ICONS_DIR,
    target: 'deb'
  }
}
// macOS安装包配置
const macOS = {
  mac: {
    target: 'dmg',
    icon: ICONS_DIR + 'con.icns'
  },
  dmg: {
    contents: [
      {
        x: 410,
        y: 150,
        type: 'link',
        path: '/Applications'
      },
      {
        x: 130,
        y: 150,
        type: 'file'
      }
    ]
  }
}

module.exports = {
  productName: PRODUCT_NAME,
  artifactName: '${name}-${os}-${arch}-${version}_${arch}.${ext}',
  appId: APP_ID,
  asar: true,
  forceCodeSigning: false,
  directories: {
    // "buildResources": "build",
    output: 'bin'
  },
  // 其他配置
  electronDownload: {
    strictSSL: false,
    isVerifyChecksum: false
  },
  detectUpdateChannel: true,
  generateUpdatesFilesForAllChannels: false,
  publish: [
    {
      provider: 'generic',
      url: CHECK_UPDATE_URL,
      channel: 'latest'
    }
  ],
  releaseInfo: {
    releaseNotesFile: 'release-notes.md'
  },
  // default files: https://www.electron.build/configuration/contents
  files: [
    'package.json',
    'license_zh.txt',
    {
      from: 'dist/main/',
      to: 'dist/main/'
    },
    {
      from: 'dist/renderer',
      to: 'dist/renderer/'
    },
    {
      from: 'src/resources/',
      to: 'dist/resources/'
    }
  ],
  ...windowsOS,
  ...linuxOS,
  ...macOS
}
