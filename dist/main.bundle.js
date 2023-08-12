"use strict";
(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([["main"],{

/***/ "./src/commentApi.js":
/*!***************************!*\
  !*** ./src/commentApi.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   apiLikes: () => (/* binding */ apiLikes),
/* harmony export */   displayComments: () => (/* binding */ displayComments),
/* harmony export */   getLikes: () => (/* binding */ getLikes),
/* harmony export */   postComments: () => (/* binding */ postComments),
/* harmony export */   postLikes: () => (/* binding */ postLikes)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return { value: void 0, done: !0 }; } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable || "" === iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } throw new TypeError(_typeof(iterable) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var commentList = document.querySelector('.commentList');
console.log(commentList);
var apiLikes = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ZkLkIUUV1lTLjqilepgf';
function displayComments(responseData, commentList) {
  for (var i = 0; i < responseData.length; i += 1) {
    var commentTitle = document.querySelector('.commentTitle');
    commentTitle.innerHTML = "<h2>Comments (".concat(responseData.length, ")</h2>");
    commentList = document.querySelector('.commentList');
    var commentDiv = document.createElement('div');
    commentDiv.innerHTML = "<p>".concat(responseData[i].username, ": ").concat(responseData[i].comment, "</p>");
    commentList.appendChild(commentDiv);
  }
}
var postComments = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(id, name, comment) {
    var response, responseBody;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return fetch("".concat(apiLikes, "/comments"), {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              item_id: id,
              username: name,
              comment: comment
            })
          });
        case 3:
          response = _context.sent;
          _context.next = 6;
          return response.text();
        case 6:
          responseBody = _context.sent;
          // Read the response body once

          if (response.ok) {
            console.log('Comment posted successfully');
          } else {
            console.error('Failed to post comment:', response.statusText);
          }
          return _context.abrupt("return", responseBody);
        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          console.error('An error occurred while posting the comment:', _context.t0);
          throw _context.t0;
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 11]]);
  }));
  return function postComments(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
function getLikes() {
  return _getLikes.apply(this, arguments);
}
function _getLikes() {
  _getLikes = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var response;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return fetch("".concat(apiLikes, "/likes"));
        case 2:
          response = _context2.sent;
          return _context2.abrupt("return", response.json());
        case 4:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _getLikes.apply(this, arguments);
}
function postLikes(_x4) {
  return _postLikes.apply(this, arguments);
}
function _postLikes() {
  _postLikes = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(id) {
    var response;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return fetch("".concat(apiLikes, "/likes"), {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              item_id: id
            })
          });
        case 2:
          response = _context3.sent;
          return _context3.abrupt("return", response.text());
        case 4:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _postLikes.apply(this, arguments);
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _commentApi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentApi.js */ "./src/commentApi.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return { value: void 0, done: !0 }; } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable || "" === iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } throw new TypeError(_typeof(iterable) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
// index.js


var pathImage;
function fetchApi() {
  return _fetchApi.apply(this, arguments);
}
function _fetchApi() {
  _fetchApi = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    var response, data;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return fetch('https://api.tvmaze.com/search/shows?q=girls');
        case 2:
          response = _context3.sent;
          _context3.next = 5;
          return response.json();
        case 5:
          data = _context3.sent;
          return _context3.abrupt("return", data);
        case 7:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _fetchApi.apply(this, arguments);
}
function loadImage() {
  return _loadImage.apply(this, arguments);
}
function _loadImage() {
  _loadImage = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
    var arr, _loop, i;
    return _regeneratorRuntime().wrap(function _callee7$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return fetchApi();
        case 2:
          arr = _context8.sent;
          _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop(i) {
            var divConatinerSingleImage, img, ContainerAllImages, containerLike, nameShow, nameShowparagraph, containerHearth, Hearth, likeCountElement, commentButton;
            return _regeneratorRuntime().wrap(function _loop$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
                case 0:
                  divConatinerSingleImage = document.createElement('div');
                  pathImage = arr[i].show.image.medium;
                  img = document.createElement('img');
                  ContainerAllImages = document.querySelector('.hero');
                  img.src = pathImage;
                  divConatinerSingleImage.appendChild(img);
                  ContainerAllImages.appendChild(divConatinerSingleImage);
                  containerLike = document.createElement('div');
                  containerLike.classList.add('containerLike');
                  nameShow = arr[i].show.name;
                  nameShowparagraph = document.createElement('p');
                  nameShowparagraph.textContent = nameShow;
                  containerLike.appendChild(nameShowparagraph);
                  divConatinerSingleImage.appendChild(containerLike);
                  containerHearth = document.createElement('div');
                  containerHearth.classList.add('containerHearth');
                  Hearth = document.createElement('span');
                  Hearth.classList.add('hearth');
                  Hearth.innerHTML = "<i class='bx bxs-heart'></i>";
                  Hearth.id = "show-".concat(i + 1);
                  containerHearth.appendChild(Hearth);
                  containerLike.appendChild(containerHearth);
                  likeCountElement = document.createElement('span');
                  likeCountElement.classList.add('likes_number');
                  likeCountElement.textContent = '0';
                  containerHearth.appendChild(likeCountElement);
                  commentButton = document.createElement('button');
                  commentButton.textContent = 'Comment';
                  containerLike.appendChild(commentButton);

                  // nessrine code

                  commentButton.addEventListener('click', /*#__PURE__*/function () {
                    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(e) {
                      var showInfo, showId, score, genres, premiered, summary, containerLike, imgPath, commentList, getComments, popupContainer, commentBtn, popup, closeIcon;
                      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                        while (1) switch (_context6.prev = _context6.next) {
                          case 0:
                            showInfo = arr[i].show;
                            showId = showInfo.id;
                            score = showInfo.score;
                            genres = showInfo.genres.join(', ');
                            premiered = showInfo.premiered;
                            summary = showInfo.summary;
                            containerLike = e.target.parentElement;
                            imgPath = containerLike.parentElement.querySelector('img').src;
                            commentList = document.querySelector('.commentList');
                            getComments = /*#__PURE__*/function () {
                              var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(itemId) {
                                var response, responseData;
                                return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                                  while (1) switch (_context4.prev = _context4.next) {
                                    case 0:
                                      _context4.prev = 0;
                                      _context4.next = 3;
                                      return fetch("".concat(_commentApi_js__WEBPACK_IMPORTED_MODULE_1__.apiLikes, "/comments?item_id=").concat(itemId));
                                    case 3:
                                      response = _context4.sent;
                                      if (response.ok) {
                                        _context4.next = 6;
                                        break;
                                      }
                                      throw new Error('Failed to fetch comments');
                                    case 6:
                                      _context4.next = 8;
                                      return response.json();
                                    case 8:
                                      responseData = _context4.sent;
                                      console.log('Successfully fetched comments:');
                                      (0,_commentApi_js__WEBPACK_IMPORTED_MODULE_1__.displayComments)(responseData, commentList);
                                      return _context4.abrupt("return", responseData);
                                    case 14:
                                      _context4.prev = 14;
                                      _context4.t0 = _context4["catch"](0);
                                      console.error('An error occurred while fetching comments:', _context4.t0);
                                      throw _context4.t0;
                                    case 18:
                                    case "end":
                                      return _context4.stop();
                                  }
                                }, _callee4, null, [[0, 14]]);
                              }));
                              return function getComments(_x3) {
                                return _ref4.apply(this, arguments);
                              };
                            }();
                            popupContainer = document.querySelector('.popupContainer');
                            popupContainer.innerHTML = "\n\n      <div class=\"popup\">\n      <div class='flex'>\n      <div class=\"popup-header\">\n      <i class=\"bx bx-x close-icon\"></i>\n      </div>\n      <div class=\"imageContainer\"><img src=\"".concat(imgPath, "\" /></div>\n      <div class=\"informations\">\n      <h1>").concat(nameShow, "</h1>\n      <hr>\n       ").concat(score !== undefined ? "<p>Score ".concat(score, "</p>") : '', "\n       ").concat(genres !== null ? "<p>Genres ".concat(genres, "</p>") : '', "\n       ").concat(premiered !== null ? "<p>Premiered ".concat(premiered, "</p>") : '', "\n       ").concat(summary !== null ? "<h2>Summary</h2><p> ".concat(summary, "</p>") : '', "\n      <form id='commentForm'>\n      <input id='commentName' type=\"text\" placeholder=\"Name\">\n      <textarea id='commentTextarea' placeholder=\"write a comment\"></textarea>\n      <button class='c'>Comment</button>\n      </form>\n      </div>\n      </div>\n      <div class=\"comments-section\">\n      <h2 class=\"commentTitle\">Comments</h2>\n      <hr>\n      <ul class=\"commentList\"></ul>\n      </div>\n      </div>\n \n        \n\n      ");
                            _context6.next = 14;
                            return getComments(showId);
                          case 14:
                            commentBtn = document.querySelector('.c');
                            commentBtn.addEventListener('click', /*#__PURE__*/function () {
                              var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(e) {
                                var commentList, commentName, commentText, displayComment;
                                return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                                  while (1) switch (_context5.prev = _context5.next) {
                                    case 0:
                                      e.preventDefault();
                                      commentList = document.querySelector('.commentList');
                                      commentName = document.getElementById('commentName').value;
                                      commentText = document.getElementById('commentTextarea').value;
                                      displayComment = document.createElement('div');
                                      displayComment.innerHTML = "\n\n      <li class='lis'>".concat(commentName, ": ").concat(commentText, " s</li>\n\n");
                                      commentList.appendChild(displayComment);
                                      _context5.next = 9;
                                      return (0,_commentApi_js__WEBPACK_IMPORTED_MODULE_1__.postComments)(showId, commentName, commentText);
                                    case 9:
                                    case "end":
                                      return _context5.stop();
                                  }
                                }, _callee5);
                              }));
                              return function (_x4) {
                                return _ref5.apply(this, arguments);
                              };
                            }());

                            // popup close
                            popup = document.querySelector('.popup');
                            closeIcon = document.querySelector('.close-icon');
                            closeIcon.addEventListener('click', function () {
                              popup.remove(); // Remove the popup from the DOM
                            });
                            // add eventListener to the comment button of popup
                          case 19:
                          case "end":
                            return _context6.stop();
                        }
                      }, _callee6);
                    }));
                    return function (_x2) {
                      return _ref3.apply(this, arguments);
                    };
                  }());
                case 30:
                case "end":
                  return _context7.stop();
              }
            }, _loop);
          });
          i = 0;
        case 5:
          if (!(i < arr.length)) {
            _context8.next = 10;
            break;
          }
          return _context8.delegateYield(_loop(i), "t0", 7);
        case 7:
          i += 1;
          _context8.next = 5;
          break;
        case 10:
        case "end":
          return _context8.stop();
      }
    }, _callee7);
  }));
  return _loadImage.apply(this, arguments);
}
var containerAllImages = document.querySelector('.hero'); // Select the parent element

containerAllImages.addEventListener('click', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(event) {
    var heartIcon, value, likeCountElement, currentCount;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          heartIcon = event.target.closest('.hearth');
          if (!heartIcon) {
            _context.next = 6;
            break;
          }
          _context.next = 4;
          return (0,_commentApi_js__WEBPACK_IMPORTED_MODULE_1__.postLikes)(heartIcon.id);
        case 4:
          value = _context.sent;
          if (value === 'Created' || value === '201') {
            likeCountElement = heartIcon.nextElementSibling;
            currentCount = parseInt(likeCountElement.innerText, 10);
            likeCountElement.innerText = currentCount + 1;
          }
        case 6:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());
function initializeLikes() {
  return _initializeLikes.apply(this, arguments);
}
function _initializeLikes() {
  _initializeLikes = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
    var likeButtons, likesData;
    return _regeneratorRuntime().wrap(function _callee9$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          likeButtons = document.querySelectorAll('.hearth');
          _context10.next = 3;
          return (0,_commentApi_js__WEBPACK_IMPORTED_MODULE_1__.getLikes)();
        case 3:
          likesData = _context10.sent;
          likeButtons.forEach( /*#__PURE__*/function () {
            var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(button) {
              var showId, likeData, likeCountElement;
              return _regeneratorRuntime().wrap(function _callee8$(_context9) {
                while (1) switch (_context9.prev = _context9.next) {
                  case 0:
                    button.addEventListener('click', function () {
                      button.style.color = 'red';
                    });
                    showId = button.id;
                    likeData = likesData.find(function (item) {
                      return item.item_id === showId;
                    });
                    if (likeData) {
                      likeCountElement = button.nextElementSibling;
                      likeCountElement.innerText = likeData.likes;
                    }
                  case 4:
                  case "end":
                    return _context9.stop();
                }
              }, _callee8);
            }));
            return function (_x5) {
              return _ref6.apply(this, arguments);
            };
          }());
        case 5:
        case "end":
          return _context10.stop();
      }
    }, _callee9);
  }));
  return _initializeLikes.apply(this, arguments);
}
_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
  return _regeneratorRuntime().wrap(function _callee2$(_context2) {
    while (1) switch (_context2.prev = _context2.next) {
      case 0:
        _context2.next = 2;
        return loadImage();
      case 2:
        _context2.next = 4;
        return initializeLikes();
      case 4:
      case "end":
        return _context2.stop();
    }
  }, _callee2);
}))();
var cardCounter = function cardCounter() {
  var cards = document.querySelectorAll('.containerLike');
  return cards.length;
};
setTimeout(function () {
  var show = document.getElementById('show');
  show.textContent = "shows (".concat(cardCounter(), ")");
}, 1000);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.hero {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 95%;
  margin-top: 5px;
}

.hearth {
  color: yellowgreen;
  font-size: 32px;
}

.containerHearth {
  flex-basis: 200px;
  display: flex;
  justify-content: flex-end;
}

img {
  width: 320px;
  margin-bottom: 20px;
  border-radius: 10px;
}

.containerLike {
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: center;
  margin-top: -20px;
  margin-bottom: 10px;
}

.containerLike button {
  margin-left: 25%;
}

#header {
  width: 150px;
  margin-top: 10px;
}

ul li {
  margin-left: 20px;
  background-color: grey;
  border-radius: 5px;
  padding: 5px;
  color: aquamarine;
}

header {
  background-color: aquamarine;
  border-radius: 10px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

ul {
  list-style-type: none;
  display: flex;
  justify-content: space-around;
}

body {
  background-color: bisque;
}

footer {
  width: 100%;
  background-color: grey;
  height: 90px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  font-family: sans-serif;
}

/* Style for the popup container */

.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px; /* Adjust padding as needed */
  box-sizing: border-box; /* Include padding in the width and height */
  overflow-y: scroll;
}

hr {
  margin: 0;
}

.informations {
  padding: 20px;
  max-width: 80%;
  border-radius: 8px;
  text-align: left;
  margin: 20px;
  margin-bottom: 100px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
}

.popup .informations p {
  font-weight: 800;
  background-color: #fff;
}

.popup .informations input {
  margin-bottom: 10px;
  padding: 10px;
}

.popup .informations textarea {
  margin-bottom: 10px;
  height: 100px;
  padding: 10px;
}

.popup .informations button {
  background-color: #007bff;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  color: #fff;
  width: fit-content;
}

.popup .informations button:hover {
  background-color: #0056b3;
}

.close-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 48px;
  cursor: pointer;
  color: #333;
}

.close-icon:hover {
  background-color: #bedcfc;
}

.commentList {
  background-color: bisque;
  display: block;
  padding: 10px;
  margin-bottom: 30px;
}

.commentList li {
  background-color: #fff;
  margin-left: 0;
  border-radius: 0%;
  border: 1px solid;
}

#commentForm {
  display: flex;
  flex-direction: column;
}

.flex {
  display: flex;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,eAAe;EACf,6BAA6B;EAC7B,UAAU;EACV,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,iBAAiB;EACjB,mBAAmB;EACnB,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,sBAAsB;EACtB,kBAAkB;EAClB,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,4BAA4B;EAC5B,mBAAmB;EACnB,WAAW;EACX,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,WAAW;EACX,sBAAsB;EACtB,YAAY;EACZ,mBAAmB;EACnB,aAAa;EACb,uBAAuB;EACvB,uBAAuB;AACzB;;AAEA,kCAAkC;;AAElC;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,aAAa,EAAE,6BAA6B;EAC5C,sBAAsB,EAAE,4CAA4C;EACpE,kBAAkB;AACpB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,aAAa;EACb,cAAc;EACd,kBAAkB;EAClB,gBAAgB;EAChB,YAAY;EACZ,oBAAoB;EACpB,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,aAAa;AACf;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;EACf,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,eAAe;EACf,eAAe;EACf,WAAW;AACb;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,wBAAwB;EACxB,cAAc;EACd,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;EACtB,cAAc;EACd,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;AACf","sourcesContent":[".hero {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-around;\r\n  width: 95%;\r\n  margin-top: 5px;\r\n}\r\n\r\n.hearth {\r\n  color: yellowgreen;\r\n  font-size: 32px;\r\n}\r\n\r\n.containerHearth {\r\n  flex-basis: 200px;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n}\r\n\r\nimg {\r\n  width: 320px;\r\n  margin-bottom: 20px;\r\n  border-radius: 10px;\r\n}\r\n\r\n.containerLike {\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-wrap: nowrap;\r\n  align-items: center;\r\n  margin-top: -20px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.containerLike button {\r\n  margin-left: 25%;\r\n}\r\n\r\n#header {\r\n  width: 150px;\r\n  margin-top: 10px;\r\n}\r\n\r\nul li {\r\n  margin-left: 20px;\r\n  background-color: grey;\r\n  border-radius: 5px;\r\n  padding: 5px;\r\n  color: aquamarine;\r\n}\r\n\r\nheader {\r\n  background-color: aquamarine;\r\n  border-radius: 10px;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n}\r\n\r\nul {\r\n  list-style-type: none;\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n\r\nbody {\r\n  background-color: bisque;\r\n}\r\n\r\nfooter {\r\n  width: 100%;\r\n  background-color: grey;\r\n  height: 90px;\r\n  border-radius: 10px;\r\n  display: flex;\r\n  justify-content: center;\r\n  font-family: sans-serif;\r\n}\r\n\r\n/* Style for the popup container */\r\n\r\n.popup {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: #fff;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  padding: 20px; /* Adjust padding as needed */\r\n  box-sizing: border-box; /* Include padding in the width and height */\r\n  overflow-y: scroll;\r\n}\r\n\r\nhr {\r\n  margin: 0;\r\n}\r\n\r\n.informations {\r\n  padding: 20px;\r\n  max-width: 80%;\r\n  border-radius: 8px;\r\n  text-align: left;\r\n  margin: 20px;\r\n  margin-bottom: 100px;\r\n  background-color: #fff;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.popup .informations p {\r\n  font-weight: 800;\r\n  background-color: #fff;\r\n}\r\n\r\n.popup .informations input {\r\n  margin-bottom: 10px;\r\n  padding: 10px;\r\n}\r\n\r\n.popup .informations textarea {\r\n  margin-bottom: 10px;\r\n  height: 100px;\r\n  padding: 10px;\r\n}\r\n\r\n.popup .informations button {\r\n  background-color: #007bff;\r\n  border: none;\r\n  padding: 6px 12px;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  color: #fff;\r\n  width: fit-content;\r\n}\r\n\r\n.popup .informations button:hover {\r\n  background-color: #0056b3;\r\n}\r\n\r\n.close-icon {\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 10px;\r\n  font-size: 48px;\r\n  cursor: pointer;\r\n  color: #333;\r\n}\r\n\r\n.close-icon:hover {\r\n  background-color: #bedcfc;\r\n}\r\n\r\n.commentList {\r\n  background-color: bisque;\r\n  display: block;\r\n  padding: 10px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.commentList li {\r\n  background-color: #fff;\r\n  margin-left: 0;\r\n  border-radius: 0%;\r\n  border: 1px solid;\r\n}\r\n\r\n#commentForm {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.flex {\r\n  display: flex;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLHVCQUF1Qix5QkFBeUIsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FB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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2NvbW1lbnRBcGkuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjb21tZW50TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50TGlzdCcpO1xuY29uc29sZS5sb2coY29tbWVudExpc3QpO1xuY29uc3QgYXBpTGlrZXMgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvWmtMa0lVVVYxbFRManFpbGVwZ2YnO1xuZnVuY3Rpb24gZGlzcGxheUNvbW1lbnRzKHJlc3BvbnNlRGF0YSwgY29tbWVudExpc3QpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXNwb25zZURhdGEubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBjb21tZW50VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudFRpdGxlJyk7XG4gICAgY29tbWVudFRpdGxlLmlubmVySFRNTCA9IGA8aDI+Q29tbWVudHMgKCR7cmVzcG9uc2VEYXRhLmxlbmd0aH0pPC9oMj5gO1xuICAgIGNvbW1lbnRMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnRMaXN0Jyk7XG4gICAgY29uc3QgY29tbWVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29tbWVudERpdi5pbm5lckhUTUwgPSBgPHA+JHtyZXNwb25zZURhdGFbaV0udXNlcm5hbWV9OiAke3Jlc3BvbnNlRGF0YVtpXS5jb21tZW50fTwvcD5gO1xuXG4gICAgY29tbWVudExpc3QuYXBwZW5kQ2hpbGQoY29tbWVudERpdik7XG4gIH1cbn1cblxuY29uc3QgcG9zdENvbW1lbnRzID0gYXN5bmMgKGlkLCBuYW1lLCBjb21tZW50KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHthcGlMaWtlc30vY29tbWVudHNgLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGl0ZW1faWQ6IGlkLCB1c2VybmFtZTogbmFtZSwgY29tbWVudCB9KSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlc3BvbnNlQm9keSA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTsgLy8gUmVhZCB0aGUgcmVzcG9uc2UgYm9keSBvbmNlXG5cbiAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgIGNvbnNvbGUubG9nKCdDb21tZW50IHBvc3RlZCBzdWNjZXNzZnVsbHknKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIHBvc3QgY29tbWVudDonLCByZXNwb25zZS5zdGF0dXNUZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzcG9uc2VCb2R5OyAvLyBSZXR1cm4gdGhlIHJlc3BvbnNlIGJvZHlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBwb3N0aW5nIHRoZSBjb21tZW50OicsIGVycm9yKTtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0TGlrZXMoKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YXBpTGlrZXN9L2xpa2VzYCk7XG4gIHJldHVybiByZXNwb25zZS5qc29uKCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHBvc3RMaWtlcyhpZCkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2FwaUxpa2VzfS9saWtlc2AsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBpdGVtX2lkOiBpZCB9KSxcbiAgfSk7XG4gIHJldHVybiByZXNwb25zZS50ZXh0KCk7XG59XG5cbmV4cG9ydCB7XG4gIHBvc3RDb21tZW50cywgcG9zdExpa2VzLCBnZXRMaWtlcywgYXBpTGlrZXMsIGRpc3BsYXlDb21tZW50cyxcbn07XG4iLCIvLyBpbmRleC5qc1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmltcG9ydCB7XG4gIHBvc3RDb21tZW50cywgcG9zdExpa2VzLCBnZXRMaWtlcywgYXBpTGlrZXMsIGRpc3BsYXlDb21tZW50cyxcbn0gZnJvbSAnLi9jb21tZW50QXBpLmpzJztcblxubGV0IHBhdGhJbWFnZTtcblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hBcGkoKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2VhcmNoL3Nob3dzP3E9Z2lybHMnKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGRhdGE7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGxvYWRJbWFnZSgpIHtcbiAgY29uc3QgYXJyID0gYXdhaXQgZmV0Y2hBcGkoKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBkaXZDb25hdGluZXJTaW5nbGVJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBhdGhJbWFnZSA9IGFycltpXS5zaG93LmltYWdlLm1lZGl1bTtcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjb25zdCBDb250YWluZXJBbGxJbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVybycpO1xuICAgIGltZy5zcmMgPSBwYXRoSW1hZ2U7XG4gICAgZGl2Q29uYXRpbmVyU2luZ2xlSW1hZ2UuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICBDb250YWluZXJBbGxJbWFnZXMuYXBwZW5kQ2hpbGQoZGl2Q29uYXRpbmVyU2luZ2xlSW1hZ2UpO1xuXG4gICAgY29uc3QgY29udGFpbmVyTGlrZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lckxpa2UuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyTGlrZScpO1xuICAgIGNvbnN0IG5hbWVTaG93ID0gYXJyW2ldLnNob3cubmFtZTtcbiAgICBjb25zdCBuYW1lU2hvd3BhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBuYW1lU2hvd3BhcmFncmFwaC50ZXh0Q29udGVudCA9IG5hbWVTaG93O1xuICAgIGNvbnRhaW5lckxpa2UuYXBwZW5kQ2hpbGQobmFtZVNob3dwYXJhZ3JhcGgpO1xuICAgIGRpdkNvbmF0aW5lclNpbmdsZUltYWdlLmFwcGVuZENoaWxkKGNvbnRhaW5lckxpa2UpO1xuXG4gICAgY29uc3QgY29udGFpbmVySGVhcnRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVySGVhcnRoLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lckhlYXJ0aCcpO1xuICAgIGNvbnN0IEhlYXJ0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBIZWFydGguY2xhc3NMaXN0LmFkZCgnaGVhcnRoJyk7XG4gICAgSGVhcnRoLmlubmVySFRNTCA9IFwiPGkgY2xhc3M9J2J4IGJ4cy1oZWFydCc+PC9pPlwiO1xuICAgIEhlYXJ0aC5pZCA9IGBzaG93LSR7aSArIDF9YDtcbiAgICBjb250YWluZXJIZWFydGguYXBwZW5kQ2hpbGQoSGVhcnRoKTtcbiAgICBjb250YWluZXJMaWtlLmFwcGVuZENoaWxkKGNvbnRhaW5lckhlYXJ0aCk7XG5cbiAgICBjb25zdCBsaWtlQ291bnRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGxpa2VDb3VudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbGlrZXNfbnVtYmVyJyk7XG4gICAgbGlrZUNvdW50RWxlbWVudC50ZXh0Q29udGVudCA9ICcwJztcbiAgICBjb250YWluZXJIZWFydGguYXBwZW5kQ2hpbGQobGlrZUNvdW50RWxlbWVudCk7XG5cbiAgICBjb25zdCBjb21tZW50QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29tbWVudEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDb21tZW50JztcbiAgICBjb250YWluZXJMaWtlLmFwcGVuZENoaWxkKGNvbW1lbnRCdXR0b24pO1xuXG4gICAgLy8gbmVzc3JpbmUgY29kZVxuXG4gICAgY29tbWVudEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XG4gICAgICBjb25zdCBzaG93SW5mbyA9IGFycltpXS5zaG93O1xuICAgICAgY29uc3Qgc2hvd0lkID0gc2hvd0luZm8uaWQ7XG4gICAgICBjb25zdCB7IHNjb3JlIH0gPSBzaG93SW5mbztcbiAgICAgIGNvbnN0IGdlbnJlcyA9IHNob3dJbmZvLmdlbnJlcy5qb2luKCcsICcpO1xuICAgICAgY29uc3QgeyBwcmVtaWVyZWQgfSA9IHNob3dJbmZvO1xuICAgICAgY29uc3QgeyBzdW1tYXJ5IH0gPSBzaG93SW5mbztcbiAgICAgIGNvbnN0IGNvbnRhaW5lckxpa2UgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgICAgY29uc3QgaW1nUGF0aCA9IGNvbnRhaW5lckxpa2UucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbWcnKS5zcmM7XG4gICAgICBjb25zdCBjb21tZW50TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50TGlzdCcpO1xuXG4gICAgICBjb25zdCBnZXRDb21tZW50cyA9IGFzeW5jIChpdGVtSWQpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2FwaUxpa2VzfS9jb21tZW50cz9pdGVtX2lkPSR7aXRlbUlkfWApO1xuXG4gICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggY29tbWVudHMnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCByZXNwb25zZURhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgY29uc29sZS5sb2coJ1N1Y2Nlc3NmdWxseSBmZXRjaGVkIGNvbW1lbnRzOicpO1xuXG4gICAgICAgICAgZGlzcGxheUNvbW1lbnRzKHJlc3BvbnNlRGF0YSwgY29tbWVudExpc3QpO1xuXG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlRGF0YTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBmZXRjaGluZyBjb21tZW50czonLCBlcnJvcik7XG4gICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHBvcHVwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwQ29udGFpbmVyJyk7XG4gICAgICBwb3B1cENvbnRhaW5lci5pbm5lckhUTUwgPSBgXG5cbiAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cFwiPlxuICAgICAgPGRpdiBjbGFzcz0nZmxleCc+XG4gICAgICA8ZGl2IGNsYXNzPVwicG9wdXAtaGVhZGVyXCI+XG4gICAgICA8aSBjbGFzcz1cImJ4IGJ4LXggY2xvc2UtaWNvblwiPjwvaT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImltYWdlQ29udGFpbmVyXCI+PGltZyBzcmM9XCIke2ltZ1BhdGh9XCIgLz48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJpbmZvcm1hdGlvbnNcIj5cbiAgICAgIDxoMT4ke25hbWVTaG93fTwvaDE+XG4gICAgICA8aHI+XG4gICAgICAgJHtzY29yZSAhPT0gdW5kZWZpbmVkID8gYDxwPlNjb3JlICR7c2NvcmV9PC9wPmAgOiAnJ31cbiAgICAgICAke2dlbnJlcyAhPT0gbnVsbCA/IGA8cD5HZW5yZXMgJHtnZW5yZXN9PC9wPmAgOiAnJ31cbiAgICAgICAke3ByZW1pZXJlZCAhPT0gbnVsbCA/IGA8cD5QcmVtaWVyZWQgJHtwcmVtaWVyZWR9PC9wPmAgOiAnJ31cbiAgICAgICAke3N1bW1hcnkgIT09IG51bGwgPyBgPGgyPlN1bW1hcnk8L2gyPjxwPiAke3N1bW1hcnl9PC9wPmAgOiAnJ31cbiAgICAgIDxmb3JtIGlkPSdjb21tZW50Rm9ybSc+XG4gICAgICA8aW5wdXQgaWQ9J2NvbW1lbnROYW1lJyB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTmFtZVwiPlxuICAgICAgPHRleHRhcmVhIGlkPSdjb21tZW50VGV4dGFyZWEnIHBsYWNlaG9sZGVyPVwid3JpdGUgYSBjb21tZW50XCI+PC90ZXh0YXJlYT5cbiAgICAgIDxidXR0b24gY2xhc3M9J2MnPkNvbW1lbnQ8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudHMtc2VjdGlvblwiPlxuICAgICAgPGgyIGNsYXNzPVwiY29tbWVudFRpdGxlXCI+Q29tbWVudHM8L2gyPlxuICAgICAgPGhyPlxuICAgICAgPHVsIGNsYXNzPVwiY29tbWVudExpc3RcIj48L3VsPlxuICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiBcbiAgICAgICAgXG5cbiAgICAgIGA7XG4gICAgICBhd2FpdCBnZXRDb21tZW50cyhzaG93SWQpO1xuICAgICAgY29uc3QgY29tbWVudEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jJyk7XG5cbiAgICAgIGNvbW1lbnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGNvbW1lbnRMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnRMaXN0Jyk7XG4gICAgICAgIGNvbnN0IGNvbW1lbnROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1lbnROYW1lJykudmFsdWU7XG4gICAgICAgIGNvbnN0IGNvbW1lbnRUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1lbnRUZXh0YXJlYScpLnZhbHVlO1xuICAgICAgICBjb25zdCBkaXNwbGF5Q29tbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXNwbGF5Q29tbWVudC5pbm5lckhUTUwgPSBgXG5cbiAgICAgIDxsaSBjbGFzcz0nbGlzJz4ke2NvbW1lbnROYW1lfTogJHtjb21tZW50VGV4dH0gczwvbGk+XG5cbmA7XG4gICAgICAgIGNvbW1lbnRMaXN0LmFwcGVuZENoaWxkKGRpc3BsYXlDb21tZW50KTtcbiAgICAgICAgYXdhaXQgcG9zdENvbW1lbnRzKHNob3dJZCwgY29tbWVudE5hbWUsIGNvbW1lbnRUZXh0KTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBwb3B1cCBjbG9zZVxuICAgICAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAnKTtcbiAgICAgIGNvbnN0IGNsb3NlSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1pY29uJyk7XG5cbiAgICAgIGNsb3NlSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcG9wdXAucmVtb3ZlKCk7IC8vIFJlbW92ZSB0aGUgcG9wdXAgZnJvbSB0aGUgRE9NXG4gICAgICB9KTtcbiAgICAgIC8vIGFkZCBldmVudExpc3RlbmVyIHRvIHRoZSBjb21tZW50IGJ1dHRvbiBvZiBwb3B1cFxuICAgIH0pO1xuICB9XG59XG5cbmNvbnN0IGNvbnRhaW5lckFsbEltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvJyk7IC8vIFNlbGVjdCB0aGUgcGFyZW50IGVsZW1lbnRcblxuY29udGFpbmVyQWxsSW1hZ2VzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGV2ZW50KSA9PiB7XG4gIGNvbnN0IGhlYXJ0SWNvbiA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuaGVhcnRoJyk7XG4gIGlmIChoZWFydEljb24pIHtcbiAgICBjb25zdCB2YWx1ZSA9IGF3YWl0IHBvc3RMaWtlcyhoZWFydEljb24uaWQpO1xuICAgIGlmICh2YWx1ZSA9PT0gJ0NyZWF0ZWQnIHx8IHZhbHVlID09PSAnMjAxJykge1xuICAgICAgY29uc3QgbGlrZUNvdW50RWxlbWVudCA9IGhlYXJ0SWNvbi5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICBjb25zdCBjdXJyZW50Q291bnQgPSBwYXJzZUludChsaWtlQ291bnRFbGVtZW50LmlubmVyVGV4dCwgMTApO1xuICAgICAgbGlrZUNvdW50RWxlbWVudC5pbm5lclRleHQgPSBjdXJyZW50Q291bnQgKyAxO1xuICAgIH1cbiAgfVxufSk7XG5cbmFzeW5jIGZ1bmN0aW9uIGluaXRpYWxpemVMaWtlcygpIHtcbiAgY29uc3QgbGlrZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhcnRoJyk7XG4gIGNvbnN0IGxpa2VzRGF0YSA9IGF3YWl0IGdldExpa2VzKCk7XG5cbiAgbGlrZUJ1dHRvbnMuZm9yRWFjaChhc3luYyAoYnV0dG9uKSA9PiB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgYnV0dG9uLnN0eWxlLmNvbG9yID0gJ3JlZCc7XG4gICAgfSk7XG4gICAgY29uc3Qgc2hvd0lkID0gYnV0dG9uLmlkO1xuICAgIGNvbnN0IGxpa2VEYXRhID0gbGlrZXNEYXRhLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaXRlbV9pZCA9PT0gc2hvd0lkKTtcbiAgICBpZiAobGlrZURhdGEpIHtcbiAgICAgIGNvbnN0IGxpa2VDb3VudEVsZW1lbnQgPSBidXR0b24ubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgbGlrZUNvdW50RWxlbWVudC5pbm5lclRleHQgPSBsaWtlRGF0YS5saWtlcztcbiAgICB9XG4gIH0pO1xufVxuXG4oYXN5bmMgKCkgPT4ge1xuICBhd2FpdCBsb2FkSW1hZ2UoKTtcbiAgYXdhaXQgaW5pdGlhbGl6ZUxpa2VzKCk7IC8vIFdhaXQgZm9yIHRoZSBsaWtlcyB0byBiZSBpbml0aWFsaXplZFxufSkoKTtcblxuY29uc3QgY2FyZENvdW50ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbnRhaW5lckxpa2UnKTtcbiAgcmV0dXJuIGNhcmRzLmxlbmd0aDtcbn07XG5zZXRUaW1lb3V0KCgpID0+IHtcbiAgY29uc3Qgc2hvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG93Jyk7XG4gIHNob3cudGV4dENvbnRlbnQgPSBgc2hvd3MgKCR7Y2FyZENvdW50ZXIoKX0pYDtcbn0sIDEwMDApOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuaGVybyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgd2lkdGg6IDk1JTtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5oZWFydGgge1xyXG4gIGNvbG9yOiB5ZWxsb3dncmVlbjtcclxuICBmb250LXNpemU6IDMycHg7XHJcbn1cclxuXHJcbi5jb250YWluZXJIZWFydGgge1xyXG4gIGZsZXgtYmFzaXM6IDIwMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5cclxuaW1nIHtcclxuICB3aWR0aDogMzIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyTGlrZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IC0yMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXJMaWtlIGJ1dHRvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcclxufVxyXG5cclxuI2hlYWRlciB7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbnVsIGxpIHtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgY29sb3I6IGFxdWFtYXJpbmU7XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxudWwge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XHJcbn1cclxuXHJcbmZvb3RlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcclxuICBoZWlnaHQ6IDkwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4vKiBTdHlsZSBmb3IgdGhlIHBvcHVwIGNvbnRhaW5lciAqL1xyXG5cclxuLnBvcHVwIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBwYWRkaW5nOiAyMHB4OyAvKiBBZGp1c3QgcGFkZGluZyBhcyBuZWVkZWQgKi9cclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiBJbmNsdWRlIHBhZGRpbmcgaW4gdGhlIHdpZHRoIGFuZCBoZWlnaHQgKi9cclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuXHJcbmhyIHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5pbmZvcm1hdGlvbnMge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnBvcHVwIC5pbmZvcm1hdGlvbnMgcCB7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ucG9wdXAgLmluZm9ybWF0aW9ucyBpbnB1dCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4ucG9wdXAgLmluZm9ybWF0aW9ucyB0ZXh0YXJlYSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5wb3B1cCAuaW5mb3JtYXRpb25zIGJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogI2ZmZjtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi5wb3B1cCAuaW5mb3JtYXRpb25zIGJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTZiMztcclxufVxyXG5cclxuLmNsb3NlLWljb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEwcHg7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbiAgZm9udC1zaXplOiA0OHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogIzMzMztcclxufVxyXG5cclxuLmNsb3NlLWljb246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiZWRjZmM7XHJcbn1cclxuXHJcbi5jb21tZW50TGlzdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLmNvbW1lbnRMaXN0IGxpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xyXG59XHJcblxyXG4jY29tbWVudEZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmZsZXgge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsVUFBVTtFQUNWLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsYUFBYTtFQUNiLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtBQUN6Qjs7QUFFQSxrQ0FBa0M7O0FBRWxDO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsYUFBYSxFQUFFLDZCQUE2QjtFQUM1QyxzQkFBc0IsRUFBRSw0Q0FBNEM7RUFDcEUsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsYUFBYTtBQUNmOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsZUFBZTtFQUNmLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsY0FBYztFQUNkLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5oZXJvIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIHdpZHRoOiA5NSU7XFxyXFxuICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5oZWFydGgge1xcclxcbiAgY29sb3I6IHllbGxvd2dyZWVuO1xcclxcbiAgZm9udC1zaXplOiAzMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVySGVhcnRoIHtcXHJcXG4gIGZsZXgtYmFzaXM6IDIwMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxufVxcclxcblxcclxcbmltZyB7XFxyXFxuICB3aWR0aDogMzIwcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lckxpa2Uge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZmxleC13cmFwOiBub3dyYXA7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogLTIwcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyTGlrZSBidXR0b24ge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcXHJcXG59XFxyXFxuXFxyXFxuI2hlYWRlciB7XFxyXFxuICB3aWR0aDogMTUwcHg7XFxyXFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG51bCBsaSB7XFxyXFxuICBtYXJnaW4tbGVmdDogMjBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBjb2xvcjogYXF1YW1hcmluZTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcclxcbiAgaGVpZ2h0OiA5MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTdHlsZSBmb3IgdGhlIHBvcHVwIGNvbnRhaW5lciAqL1xcclxcblxcclxcbi5wb3B1cCB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBwYWRkaW5nOiAyMHB4OyAvKiBBZGp1c3QgcGFkZGluZyBhcyBuZWVkZWQgKi9cXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIEluY2x1ZGUgcGFkZGluZyBpbiB0aGUgd2lkdGggYW5kIGhlaWdodCAqL1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG5ociB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5pbmZvcm1hdGlvbnMge1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIG1heC13aWR0aDogODAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIG1hcmdpbjogMjBweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwIC5pbmZvcm1hdGlvbnMgcCB7XFxyXFxuICBmb250LXdlaWdodDogODAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwIC5pbmZvcm1hdGlvbnMgaW5wdXQge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCAuaW5mb3JtYXRpb25zIHRleHRhcmVhIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwIC5pbmZvcm1hdGlvbnMgYnV0dG9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiA2cHggMTJweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAgLmluZm9ybWF0aW9ucyBidXR0b246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTZiMztcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLWljb24ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAxMHB4O1xcclxcbiAgcmlnaHQ6IDEwcHg7XFxyXFxuICBmb250LXNpemU6IDQ4cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBjb2xvcjogIzMzMztcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLWljb246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JlZGNmYztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRMaXN0IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50TGlzdCBsaSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDA7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwJTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xcclxcbn1cXHJcXG5cXHJcXG4jY29tbWVudEZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5mbGV4IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiXSwibmFtZXMiOlsiX3JlZ2VuZXJhdG9yUnVudGltZSIsImV4cG9ydHMiLCJPcCIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093biIsImhhc093blByb3BlcnR5IiwiZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJrZXkiLCJkZXNjIiwidmFsdWUiLCIkU3ltYm9sIiwiU3ltYm9sIiwiaXRlcmF0b3JTeW1ib2wiLCJpdGVyYXRvciIsImFzeW5jSXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwidG9TdHJpbmdUYWdTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImVyciIsIndyYXAiLCJpbm5lckZuIiwib3V0ZXJGbiIsInNlbGYiLCJ0cnlMb2NzTGlzdCIsInByb3RvR2VuZXJhdG9yIiwiR2VuZXJhdG9yIiwiZ2VuZXJhdG9yIiwiY3JlYXRlIiwiY29udGV4dCIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJmbiIsImFyZyIsInR5cGUiLCJjYWxsIiwiQ29udGludWVTZW50aW5lbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJOYXRpdmVJdGVyYXRvclByb3RvdHlwZSIsInZhbHVlcyIsIkdwIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIm1ldGhvZCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiUHJvbWlzZUltcGwiLCJpbnZva2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVjb3JkIiwicmVzdWx0IiwiX3R5cGVvZiIsIl9fYXdhaXQiLCJ0aGVuIiwidW53cmFwcGVkIiwiZXJyb3IiLCJwcmV2aW91c1Byb21pc2UiLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsInN0YXRlIiwiRXJyb3IiLCJkb25lIiwiZGVsZWdhdGUiLCJkZWxlZ2F0ZVJlc3VsdCIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsIm1ldGhvZE5hbWUiLCJ1bmRlZmluZWQiLCJUeXBlRXJyb3IiLCJpbmZvIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsImVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpdGVyYWJsZSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJsZW5ndGgiLCJpIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiZ2VuRnVuIiwiY3RvciIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwiaXRlciIsImtleXMiLCJ2YWwiLCJvYmplY3QiLCJyZXZlcnNlIiwicG9wIiwic2tpcFRlbXBSZXNldCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJyb290UmVjb3JkIiwicnZhbCIsImV4Y2VwdGlvbiIsImhhbmRsZSIsImxvYyIsImNhdWdodCIsImhhc0NhdGNoIiwiaGFzRmluYWxseSIsImZpbmFsbHlFbnRyeSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwidGhyb3duIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsIl9uZXh0IiwiX3Rocm93IiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJjb21tZW50TGlzdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbnNvbGUiLCJsb2ciLCJhcGlMaWtlcyIsImRpc3BsYXlDb21tZW50cyIsInJlc3BvbnNlRGF0YSIsImNvbW1lbnRUaXRsZSIsImlubmVySFRNTCIsImNvbmNhdCIsImNvbW1lbnREaXYiLCJjcmVhdGVFbGVtZW50IiwidXNlcm5hbWUiLCJjb21tZW50IiwiYXBwZW5kQ2hpbGQiLCJwb3N0Q29tbWVudHMiLCJfcmVmIiwiX2NhbGxlZSIsImlkIiwicmVzcG9uc2UiLCJyZXNwb25zZUJvZHkiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwiZmV0Y2giLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJpdGVtX2lkIiwidGV4dCIsIm9rIiwic3RhdHVzVGV4dCIsInQwIiwiX3giLCJfeDIiLCJfeDMiLCJnZXRMaWtlcyIsIl9nZXRMaWtlcyIsIl9jYWxsZWUyIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwianNvbiIsInBvc3RMaWtlcyIsIl94NCIsIl9wb3N0TGlrZXMiLCJfY2FsbGVlMyIsIl9jYWxsZWUzJCIsIl9jb250ZXh0MyIsInBhdGhJbWFnZSIsImZldGNoQXBpIiwiX2ZldGNoQXBpIiwiZGF0YSIsImxvYWRJbWFnZSIsIl9sb2FkSW1hZ2UiLCJfY2FsbGVlNyIsImFyciIsIl9sb29wIiwiX2NhbGxlZTckIiwiX2NvbnRleHQ4IiwiZGl2Q29uYXRpbmVyU2luZ2xlSW1hZ2UiLCJpbWciLCJDb250YWluZXJBbGxJbWFnZXMiLCJjb250YWluZXJMaWtlIiwibmFtZVNob3ciLCJuYW1lU2hvd3BhcmFncmFwaCIsImNvbnRhaW5lckhlYXJ0aCIsIkhlYXJ0aCIsImxpa2VDb3VudEVsZW1lbnQiLCJjb21tZW50QnV0dG9uIiwiX2xvb3AkIiwiX2NvbnRleHQ3Iiwic2hvdyIsImltYWdlIiwibWVkaXVtIiwic3JjIiwiY2xhc3NMaXN0IiwiYWRkIiwidGV4dENvbnRlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiX3JlZjMiLCJfY2FsbGVlNiIsImUiLCJzaG93SW5mbyIsInNob3dJZCIsInNjb3JlIiwiZ2VucmVzIiwicHJlbWllcmVkIiwic3VtbWFyeSIsImltZ1BhdGgiLCJnZXRDb21tZW50cyIsInBvcHVwQ29udGFpbmVyIiwiY29tbWVudEJ0biIsInBvcHVwIiwiY2xvc2VJY29uIiwiX2NhbGxlZTYkIiwiX2NvbnRleHQ2Iiwiam9pbiIsInRhcmdldCIsInBhcmVudEVsZW1lbnQiLCJfcmVmNCIsIl9jYWxsZWU0IiwiaXRlbUlkIiwiX2NhbGxlZTQkIiwiX2NvbnRleHQ0IiwiX3JlZjUiLCJfY2FsbGVlNSIsImNvbW1lbnROYW1lIiwiY29tbWVudFRleHQiLCJkaXNwbGF5Q29tbWVudCIsIl9jYWxsZWU1JCIsIl9jb250ZXh0NSIsInByZXZlbnREZWZhdWx0IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW1vdmUiLCJjb250YWluZXJBbGxJbWFnZXMiLCJldmVudCIsImhlYXJ0SWNvbiIsImN1cnJlbnRDb3VudCIsImNsb3Nlc3QiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJwYXJzZUludCIsImlubmVyVGV4dCIsImluaXRpYWxpemVMaWtlcyIsIl9pbml0aWFsaXplTGlrZXMiLCJfY2FsbGVlOSIsImxpa2VCdXR0b25zIiwibGlrZXNEYXRhIiwiX2NhbGxlZTkkIiwiX2NvbnRleHQxMCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJfcmVmNiIsIl9jYWxsZWU4IiwiYnV0dG9uIiwibGlrZURhdGEiLCJfY2FsbGVlOCQiLCJfY29udGV4dDkiLCJzdHlsZSIsImNvbG9yIiwiZmluZCIsIml0ZW0iLCJsaWtlcyIsIl94NSIsImNhcmRDb3VudGVyIiwiY2FyZHMiLCJzZXRUaW1lb3V0Il0sInNvdXJjZVJvb3QiOiIifQ==