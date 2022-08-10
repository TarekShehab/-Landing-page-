// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/app.js":[function(require,module,exports) {
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Section = /*#__PURE__*/function () {
  function Section(id, dataNav, title, contents) {
    _classCallCheck(this, Section);

    this.id = id;
    this.dataNav = dataNav;
    this.title = title;
    this.contents = contents;
    this.isActive = false;
  } // Create the section html element that will be viewed on the page


  _createClass(Section, [{
    key: "createContentSection",
    value: function createContentSection() {
      var sectionElement = document.createElement('section');
      sectionElement.setAttribute('id', this.id);
      sectionElement.setAttribute('data-nav', this.dataNav);

      if (this.isActive) {
        sectionElement.setAttribute('class', 'active-section');
      }

      var divElement = document.createElement('div');
      divElement.setAttribute('class', 'landing__container');
      sectionElement.appendChild(divElement);
      var h2Element = document.createElement('h2');
      h2Element.textContent = this.title;
      divElement.appendChild(h2Element);
      var collapseButton = document.createElement('button');
      collapseButton.type = 'button';
      collapseButton.id = 'collapse-button';
      collapseButton.textContent = '▼';
      h2Element.appendChild(collapseButton);
      var pElements = [];

      var _iterator = _createForOfIteratorHelper(this.contents),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var paragraph = _step.value;
          var pElement = document.createElement('p');
          pElement.textContent = paragraph;
          pElements.push(pElement);
          divElement.appendChild(pElement);
        } // Collpase functionality

      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      collapseButton.addEventListener('click', function () {
        // Uncollapsed => collapse
        if (collapseButton.textContent === '▼') {
          collapseButton.textContent = '►';

          var _iterator2 = _createForOfIteratorHelper(pElements),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var p = _step2.value;
              p.style.visibility = 'hidden';
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        } // Collapsed => Uncollapsed
        else {
          collapseButton.textContent = '▼';

          var _iterator3 = _createForOfIteratorHelper(pElements),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var _p = _step3.value;
              _p.style.visibility = 'visible';
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
      });
      return sectionElement;
    } // Add the section anchor to the navigation bar

  }, {
    key: "createAnchorInNavbar",
    value: function createAnchorInNavbar() {
      var _this = this;

      var listItemElement = document.createElement('li');
      listItemElement.setAttribute('class', 'menu__link');
      var anchorElement = document.createElement('a');
      anchorElement.setAttribute('id', this.id + 'anchor');
      anchorElement.addEventListener('click', function () {
        var section = document.getElementById(_this.id);
        section.scrollIntoView();
      });
      anchorElement.textContent = this.title;
      listItemElement.appendChild(anchorElement);
      navbarList.appendChild(listItemElement);
      return listItemElement;
    }
  }]);

  return Section;
}(); // Get the list that we will put the anchors in


var navbarList = document.getElementById('navbar__list'); // Get the navbar menu

var navbar = document.querySelector('.navbar__menu'); // Get the main that we add the sections to

var main = document.querySelector('main'); // Fake paragraphs for the sections

var paragraph1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.';
var paragraph2 = 'Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.'; // Create an array with all the sections that are supposedly fetched from a database xD

var section1 = new Section('section1', 'Section 1', 'Section 1', [paragraph1, paragraph2]);
var section2 = new Section('section2', 'Section 2', 'Section 2', [paragraph1, paragraph2]);
var section3 = new Section('section3', 'Section 3', 'Section 3', [paragraph1, paragraph2]);
var section4 = new Section('section4', 'Section 4', 'Section 4', [paragraph1, paragraph2]);
var section5 = new Section('section5', 'Section 5', 'Section 5', [paragraph1, paragraph2]);
var contentSections = [section1, section2, section3, section4, section5]; // Determine if an element is in the viewport

var isInViewport = function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  return rect.top + 150 >= 0 && //is top in viewport
  rect.left >= 0 && //is left in viewport
  rect.bottom - 150 <= (window.innerHeight || document.documentElement.clientHeight) && //is bottom in viewport
  rect.right <= (window.innerWidth || document.documentElement.clientWidth) //is right in viewport
  ;
}; // Add a scroll event listener to the document to highlight the section in the viewport


var activeSectionHandle = function activeSectionHandle(contentsections) {
  document.addEventListener('scroll', function () {
    var _iterator4 = _createForOfIteratorHelper(contentSections),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var section = _step4.value;
        var sectionHTML = document.getElementById(section.id);
        var anchorHTML = document.getElementById(section.id + 'anchor');
        console.log(anchorHTML);

        if (isInViewport(sectionHTML.querySelector('p'))) {
          section.isActive = true;
          sectionHTML.classList.add('active-section');
          anchorHTML.style.backgroundColor = 'black';
        } else {
          section.isActive = false;
          sectionHTML.classList.remove('active-section');
          anchorHTML.style.backgroundColor = 'white';
        }
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
  });
}; // Helper method that runs a callback method when user stops scrolling 


var onScrollStop = function onScrollStop(callback) {
  var isScrolling;
  window.addEventListener('scroll', function (e) {
    clearTimeout(isScrolling);
    isScrolling = setTimeout(function () {
      return callback();
    }, 150);
  }, false);
}; // Handle showing and hiding the navigation bar


var toggleNavbarHandle = function toggleNavbarHandle() {
  // Shows navigation bar when the user scrolls
  document.addEventListener('scroll', function () {
    navbar.style.visibility = 'visible';
  }); // Hide navigation bar after user stops scrolling

  onScrollStop(function () {
    setTimeout(function () {
      navbar.style.visibility = 'hidden';
    }, "1500");
  });
}; // Handle show/hide scroll-to-top button


var scrollToTopButtonHandle = function scrollToTopButtonHandle() {
  var doc = document.querySelector('html');
  var toTop = document.getElementById('scrollup-button');
  document.addEventListener('scroll', function () {
    if (window.scrollY >= doc.clientHeight / 2) {
      toTop.style.visibility = 'visible';
    } else {
      toTop.style.visibility = 'hidden';
    }
  });
}; // Populate the page with content sections, anchors, and add necessary event listeners


var buildApp = function buildApp() {
  var _iterator5 = _createForOfIteratorHelper(contentSections),
      _step5;

  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      var section = _step5.value;
      // Add the section on page
      var sectionHTML = section.createContentSection();
      main.appendChild(sectionHTML); // Add the section anchor in the navigation bar

      var listItemHTML = section.createAnchorInNavbar();
    } // Add scroll event listener to handle the active section task

  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }

  activeSectionHandle(contentSections); // Show/Hide navigation bar

  toggleNavbarHandle(); // Show/hide scroll to top button

  scrollToTopButtonHandle();
};

buildApp();
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63395" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/app.js"], null)
//# sourceMappingURL=/app.c3f9f951.js.map