// Generated by CoffeeScript 1.6.3
(function() {
  var $, Dialog, browserDialog, browserOrder, defaultSupport, _base;

  if (window.zooniverse == null) {
    window.zooniverse = {};
  }

  if ((_base = window.zooniverse).controllers == null) {
    _base.controllers = {};
  }

  Dialog = zooniverse.controllers.Dialog || require('./dialog');

  $ = window.jQuery;

  browserOrder = ['opera', 'chrome', 'safari', 'firefox', 'msie'];

  defaultSupport = {
    chrome: 22,
    firefox: 15,
    msie: 8,
    opera: 12.12,
    safari: 5
  };

  browserDialog = new Dialog({
    warning: true,
    content: '<p>This site probably won\'t work until you update your browser.</p>\n<p>We recommend installing the latest <a href="http://www.mozilla.org/firefox/" target="_blank">Mozilla Firefox</a> or <a href="http://www.google.com/chrome" target="_blank">Google Chrome</a>.</p>\n<p>If you use <a href="http://www.microsoft.com/windows/internet-explorer/" target="_blank">Microsoft Internet Explorer</a>, make sure you\'re running the latest version.</p>\n<p>If you can\'t install the latest Internet Explorer, try <a href="http://google.com/chromeframe" target="_blank">Chrome Frame</a>!</p>\n<p class="action"><button name="close-dialog">Understood</button></p>'
  });

  browserDialog.testAgent = function(agent) {
    var browser, matches, version, _ref, _ref1, _ref2, _ref3, _ref4;
    matches = {
      chrome: parseFloat((_ref = agent.match(/Chrom\w+\W+([\w|\.]+)/i)) != null ? _ref[1] : void 0),
      firefox: parseFloat((_ref1 = agent.match(/Firefox\W+([\w|\.]+)/i)) != null ? _ref1[1] : void 0),
      msie: parseFloat((_ref2 = agent.match(/MSIE\W+([\w|\.]+)/i)) != null ? _ref2[1] : void 0),
      opera: parseFloat((_ref3 = agent.match(/Opera.+Version\W+([\w|\.]+)/)) != null ? _ref3[1] : void 0),
      safari: parseFloat((_ref4 = agent.match(/Version\W+([\w|\.]+).+Safari/i)) != null ? _ref4[1] : void 0)
    };
    browser = ((function() {
      var _i, _len, _results;
      _results = [];
      for (_i = 0, _len = browserOrder.length; _i < _len; _i++) {
        browser = browserOrder[_i];
        if (matches[browser]) {
          _results.push(browser);
        }
      }
      return _results;
    })())[0];
    version = matches[browser];
    return {
      browser: browser,
      version: version
    };
  };

  browserDialog.check = function(customSupport) {
    var browser, support, version, _ref;
    if (customSupport == null) {
      customSupport = {};
    }
    support = $.extend({}, defaultSupport, customSupport);
    _ref = this.testAgent(navigator.userAgent), browser = _ref.browser, version = _ref.version;
    if (!browser) {
      return;
    }
    if (version < support[browser]) {
      return this.show();
    }
  };

  window.zooniverse.controllers.browserDialog = browserDialog;

  if (typeof module !== "undefined" && module !== null) {
    module.exports = browserDialog;
  }

}).call(this);
