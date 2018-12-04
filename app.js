//app.js
const regeneratorRuntime = require('./lib/runtime.js');
const defaultGlobalData = require('./config/globalData');
const Conf = require('./config/index');
App({
  onLaunch: function () {
    console.log(defaultGlobalData);
  },
  globalData: {
    // userInfo: null,
    default: defaultGlobalData,
    config: Conf
  }
})