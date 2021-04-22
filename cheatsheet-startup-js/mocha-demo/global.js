// Bonus: global fixture, runs once before everything.
exports.mochaGlobalSetup = function () {
    require('console-stamp')(console);
    console.log(`mochaGlobalSetup`);
};
exports.mochaGlobalTeardown = function () {
    console.log(`mochaGlobalTeardown`);
};

// Root hook
exports.mochaHooks = {
    beforeEach(done) {
        console.log(`mochaHooks.beforeEach`);
        done();
    },
};
