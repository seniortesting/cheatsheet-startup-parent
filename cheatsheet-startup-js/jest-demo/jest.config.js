const {join} = require('path')

const ROOT = process.cwd()
module.exports = {
    verbose: false,
    notify: true,
    notifyMode: 'always',
    globalSetup: join(ROOT, 'setup.js'),
    globalTeardown: join(ROOT, 'teardown.js')
}
