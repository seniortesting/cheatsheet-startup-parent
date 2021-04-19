// Bonus: global fixture, runs once before everything.
exports.mochaGlobalSetup = async function () {
    console.log(`${new Date().toLocaleString()}: mochaGlobalSetup`);
};
exports.mochaGlobalTeardown = async function () {
    console.log(`${new Date().toLocaleString()}: mochaGlobalTeardown`);
};

// Root hook
exports.mochaHooks = {
    beforeEach(done) {
        console.log(`${new Date().toLocaleString()}: mochaHooks.beforeEach`);
        done();
    },
};
