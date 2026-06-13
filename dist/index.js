"use strict";

function _superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == typeof e || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function (t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function () { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __pow = Math.pow;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    });
  }
  return to;
};
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = value => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = value => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = x => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/index.ts
var index_exports = {};
__export(index_exports, {
  onLoad: () => onLoad,
  onUnload: () => onUnload
});
module.exports = __toCommonJS(index_exports);

// src/kettu.ts
var import_patcher = require("@vendetta/patcher");
var import_metro2 = require("@vendetta/metro");

// src/getPreviousMessage.ts
var import_metro = require("@vendetta/metro");
function getPreviousMessage(channelId) {
  var _a, _b, _c;
  const MessageStore = (0, import_metro.findByProps)("getMessage", "getMessages");
  const messages = (_a = MessageStore == null ? void 0 : MessageStore.getMessages) == null ? void 0 : _a.call(MessageStore, channelId);
  if (!messages) return null;
  const list = Array.isArray(messages) ? messages : (_b = messages._array) != null ? _b : Object.values(messages);
  return (_c = list.at(-1)) != null ? _c : null;
}
function editPreviousMessage(channelId, messageId, newContent) {
  const MessageActions = (0, import_metro.findByProps)("editMessage");
  if (!(MessageActions == null ? void 0 : MessageActions.editMessage)) return;
  MessageActions.editMessage(channelId, messageId, {
    content: newContent
  });
}
function getPreviousMessageSender(channelId) {
  var _a;
  const previousMessage = getPreviousMessage(channelId);
  return (_a = previousMessage == null ? void 0 : previousMessage.user) != null ? _a : null;
}

// node_modules/.pnpm/@supabase+postgrest-js@2.108.1/node_modules/@supabase/postgrest-js/dist/index.mjs
var DEFAULT_MAX_RETRIES = 3;
var getRetryDelay = attemptIndex => Math.min(1e3 * __pow(2, attemptIndex), 3e4);
var RETRYABLE_STATUS_CODES = [520, 503];
var RETRYABLE_METHODS = ["GET", "HEAD", "OPTIONS"];
var PostgrestError = /*#__PURE__*/function (_Error) {
  /**
  * @example
  * ```ts
  * import PostgrestError from '@supabase/postgrest-js'
  *
  * throw new PostgrestError({
  *   message: 'Row level security prevented the request',
  *   details: 'RLS denied the insert',
  *   hint: 'Check your policies',
  *   code: 'PGRST301',
  * })
  * ```
  */
  function PostgrestError(context) {
    var _this3;
    _classCallCheck(this, PostgrestError);
    _this3 = _callSuper(this, PostgrestError, [context.message]);
    _this3.name = "PostgrestError";
    _this3.details = context.details;
    _this3.hint = context.hint;
    _this3.code = context.code;
    return _this3;
  }
  _inherits(PostgrestError, _Error);
  return _createClass(PostgrestError, [{
    key: "toJSON",
    value: function toJSON() {
      return {
        name: this.name,
        message: this.message,
        details: this.details,
        hint: this.hint,
        code: this.code
      };
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(Error));
function sleep(ms, signal) {
  return new Promise(resolve => {
    if (signal === null || signal === void 0 ? void 0 : signal.aborted) {
      resolve();
      return;
    }
    const id = setTimeout(() => {
      signal === null || signal === void 0 || signal.removeEventListener("abort", onAbort);
      resolve();
    }, ms);
    function onAbort() {
      clearTimeout(id);
      resolve();
    }
    signal === null || signal === void 0 || signal.addEventListener("abort", onAbort);
  });
}
function shouldRetry(method, status, attemptCount, retryEnabled) {
  if (!retryEnabled || attemptCount >= DEFAULT_MAX_RETRIES) return false;
  if (!RETRYABLE_METHODS.includes(method)) return false;
  if (!RETRYABLE_STATUS_CODES.includes(status)) return false;
  return true;
}
var PostgrestBuilder = /*#__PURE__*/function () {
  /**
  * Creates a builder configured for a specific PostgREST request.
  *
  * @example Using supabase-js (recommended)
  * ```ts
  * import { createClient } from '@supabase/supabase-js'
  *
  * const supabase = createClient('https://xyzcompany.supabase.co', 'your-publishable-key')
  * const { data, error } = await supabase.from('users').select('*')
  * ```
  *
  * @category Database
  *
  * @example Standalone import for bundle-sensitive environments
  * ```ts
  * import { PostgrestQueryBuilder } from '@supabase/postgrest-js'
  *
  * const builder = new PostgrestQueryBuilder(
  *   new URL('https://xyzcompany.supabase.co/rest/v1/users'),
  *   { headers: new Headers({ apikey: 'your-publishable-key' }) }
  * )
  * ```
  */
  function PostgrestBuilder(builder) {
    _classCallCheck(this, PostgrestBuilder);
    var _builder$shouldThrowO, _builder$isMaybeSingl, _builder$shouldStripN, _builder$urlLengthLim, _builder$retry;
    this.shouldThrowOnError = false;
    this.retryEnabled = true;
    this.method = builder.method;
    this.url = builder.url;
    this.headers = new Headers(builder.headers);
    this.schema = builder.schema;
    this.body = builder.body;
    this.shouldThrowOnError = (_builder$shouldThrowO = builder.shouldThrowOnError) !== null && _builder$shouldThrowO !== void 0 ? _builder$shouldThrowO : false;
    this.signal = builder.signal;
    this.isMaybeSingle = (_builder$isMaybeSingl = builder.isMaybeSingle) !== null && _builder$isMaybeSingl !== void 0 ? _builder$isMaybeSingl : false;
    this.shouldStripNulls = (_builder$shouldStripN = builder.shouldStripNulls) !== null && _builder$shouldStripN !== void 0 ? _builder$shouldStripN : false;
    this.urlLengthLimit = (_builder$urlLengthLim = builder.urlLengthLimit) !== null && _builder$urlLengthLim !== void 0 ? _builder$urlLengthLim : 8e3;
    this.retryEnabled = (_builder$retry = builder.retry) !== null && _builder$retry !== void 0 ? _builder$retry : true;
    if (builder.fetch) this.fetch = builder.fetch;else this.fetch = fetch;
  }
  /**
  * If there's an error with the query, throwOnError will reject the promise by
  * throwing the error instead of returning it as part of a successful response.
  *
  * {@link https://github.com/supabase/supabase-js/issues/92}
  *
  * @category Database
  * @subcategory Using modifiers
  */
  return _createClass(PostgrestBuilder, [{
    key: "throwOnError",
    value: function throwOnError() {
      this.shouldThrowOnError = true;
      return this;
    }
    /**
    * Strip null values from the response data. Properties with `null` values
    * will be omitted from the returned JSON objects.
    *
    * Requires PostgREST 11.2.0+.
    *
    * {@link https://docs.postgrest.org/en/stable/references/api/resource_representation.html#stripped-nulls}
    *
    * @category Database
    * @subcategory Using modifiers
    *
    * @example With `select()`
    * ```ts
    * const { data, error } = await supabase
    *   .from('characters')
    *   .select()
    *   .stripNulls()
    * ```
    *
    * @exampleSql With `select()`
    * ```sql
    * create table
    *   characters (id int8 primary key, name text, bio text);
    *
    * insert into
    *   characters (id, name, bio)
    * values
    *   (1, 'Luke', null),
    *   (2, 'Leia', 'Princess of Alderaan');
    * ```
    *
    * @exampleResponse With `select()`
    * ```json
    * {
    *   "data": [
    *     {
    *       "id": 1,
    *       "name": "Luke"
    *     },
    *     {
    *       "id": 2,
    *       "name": "Leia",
    *       "bio": "Princess of Alderaan"
    *     }
    *   ],
    *   "status": 200,
    *   "statusText": "OK"
    * }
    * ```
    */
  }, {
    key: "stripNulls",
    value: function stripNulls() {
      if (this.headers.get("Accept") === "text/csv") throw new Error("stripNulls() cannot be used with csv()");
      this.shouldStripNulls = true;
      return this;
    }
    /**
    * Set an HTTP header on this single PostgREST request, overriding any header
    * with the same name set on the client.
    *
    * This is an advanced escape hatch for one-off needs (passing a custom
    * `Authorization` for a single query, attaching a tracing header, etc.).
    * Most callers do not need it: configure client-wide headers via the
    * `headers` option when constructing the client, and authentication via
    * Supabase Auth.
    *
    * @param name - HTTP header name
    * @param value - HTTP header value
    *
    * @category Database
    * @subcategory Using modifiers
    */
  }, {
    key: "setHeader",
    value: function setHeader(name, value) {
      this.headers = new Headers(this.headers);
      this.headers.set(name, value);
      return this;
    }
    /**
    * @category Database
    * @subcategory Using modifiers
    *
    * Configure retry behavior for this request.
    *
    * By default, retries are enabled for idempotent requests (GET, HEAD, OPTIONS)
    * that fail with network errors or specific HTTP status codes (503, 520).
    * Retries use exponential backoff (1s, 2s, 4s) with a maximum of 3 attempts.
    *
    * @param enabled - Whether to enable retries for this request
    *
    * @example
    * ```ts
    * // Disable retries for a specific query
    * const { data, error } = await supabase
    *   .from('users')
    *   .select()
    *   .retry(false)
    * ```
    */
  }, {
    key: "retry",
    value: function retry(enabled) {
      this.retryEnabled = enabled;
      return this;
    }
  }, {
    key: "then",
    value: function then(onfulfilled, onrejected) {
      var _this = this;
      if (this.schema === void 0) {} else if (["GET", "HEAD"].includes(this.method)) this.headers.set("Accept-Profile", this.schema);else this.headers.set("Content-Profile", this.schema);
      if (this.method !== "GET" && this.method !== "HEAD") this.headers.set("Content-Type", "application/json");
      if (this.shouldStripNulls) {
        const currentAccept = this.headers.get("Accept");
        if (currentAccept === "application/vnd.pgrst.object+json") this.headers.set("Accept", "application/vnd.pgrst.object+json;nulls=stripped");else if (!currentAccept || currentAccept === "application/json") this.headers.set("Accept", "application/vnd.pgrst.array+json;nulls=stripped");
      }
      const _fetch = this.fetch;
      const executeWithRetry = () => __async(this, null, function* () {
        let attemptCount = 0;
        while (true) {
          const headers = {};
          _this.headers.forEach((value, key) => {
            headers[key] = value;
          });
          if (attemptCount > 0) headers["X-Retry-Count"] = String(attemptCount);
          let res$1;
          try {
            res$1 = yield _fetch(_this.url.toString(), {
              method: _this.method,
              headers,
              body: JSON.stringify(_this.body, (_, value) => typeof value === "bigint" ? value.toString() : value),
              signal: _this.signal
            });
          } catch (fetchError) {
            if ((fetchError === null || fetchError === void 0 ? void 0 : fetchError.name) === "AbortError" || (fetchError === null || fetchError === void 0 ? void 0 : fetchError.code) === "ABORT_ERR") throw fetchError;
            if (!RETRYABLE_METHODS.includes(_this.method)) throw fetchError;
            if (_this.retryEnabled && attemptCount < DEFAULT_MAX_RETRIES) {
              const delay = getRetryDelay(attemptCount);
              attemptCount++;
              yield sleep(delay, _this.signal);
              continue;
            }
            throw fetchError;
          }
          if (shouldRetry(_this.method, res$1.status, attemptCount, _this.retryEnabled)) {
            var _res$headers$get, _res$headers;
            const retryAfterHeader = (_res$headers$get = (_res$headers = res$1.headers) === null || _res$headers === void 0 ? void 0 : _res$headers.get("Retry-After")) !== null && _res$headers$get !== void 0 ? _res$headers$get : null;
            const delay = retryAfterHeader !== null ? Math.max(0, parseInt(retryAfterHeader, 10) || 0) * 1e3 : getRetryDelay(attemptCount);
            yield res$1.text();
            attemptCount++;
            yield sleep(delay, _this.signal);
            continue;
          }
          return yield _this.processResponse(res$1);
        }
      });
      let res = executeWithRetry();
      if (!this.shouldThrowOnError) res = res.catch(fetchError => {
        var _fetchError$name2;
        let errorDetails = "";
        let hint = "";
        let code = "";
        const cause = fetchError === null || fetchError === void 0 ? void 0 : fetchError.cause;
        if (cause) {
          var _cause$message, _cause$code, _fetchError$name, _cause$name;
          const causeMessage = (_cause$message = cause === null || cause === void 0 ? void 0 : cause.message) !== null && _cause$message !== void 0 ? _cause$message : "";
          const causeCode = (_cause$code = cause === null || cause === void 0 ? void 0 : cause.code) !== null && _cause$code !== void 0 ? _cause$code : "";
          errorDetails = `${(_fetchError$name = fetchError === null || fetchError === void 0 ? void 0 : fetchError.name) !== null && _fetchError$name !== void 0 ? _fetchError$name : "FetchError"}: ${fetchError === null || fetchError === void 0 ? void 0 : fetchError.message}`;
          errorDetails += `

Caused by: ${(_cause$name = cause === null || cause === void 0 ? void 0 : cause.name) !== null && _cause$name !== void 0 ? _cause$name : "Error"}: ${causeMessage}`;
          if (causeCode) errorDetails += ` (${causeCode})`;
          if (cause === null || cause === void 0 ? void 0 : cause.stack) errorDetails += `
${cause.stack}`;
        } else {
          var _fetchError$stack;
          errorDetails = (_fetchError$stack = fetchError === null || fetchError === void 0 ? void 0 : fetchError.stack) !== null && _fetchError$stack !== void 0 ? _fetchError$stack : "";
        }
        const urlLength = this.url.toString().length;
        if ((fetchError === null || fetchError === void 0 ? void 0 : fetchError.name) === "AbortError" || (fetchError === null || fetchError === void 0 ? void 0 : fetchError.code) === "ABORT_ERR") {
          code = "";
          hint = "Request was aborted (timeout or manual cancellation)";
          if (urlLength > this.urlLengthLimit) hint += `. Note: Your request URL is ${urlLength} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`;
        } else if ((cause === null || cause === void 0 ? void 0 : cause.name) === "HeadersOverflowError" || (cause === null || cause === void 0 ? void 0 : cause.code) === "UND_ERR_HEADERS_OVERFLOW") {
          code = "";
          hint = "HTTP headers exceeded server limits (typically 16KB)";
          if (urlLength > this.urlLengthLimit) hint += `. Your request URL is ${urlLength} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`;
        }
        return {
          success: false,
          error: {
            message: `${(_fetchError$name2 = fetchError === null || fetchError === void 0 ? void 0 : fetchError.name) !== null && _fetchError$name2 !== void 0 ? _fetchError$name2 : "FetchError"}: ${fetchError === null || fetchError === void 0 ? void 0 : fetchError.message}`,
            details: errorDetails,
            hint,
            code
          },
          data: null,
          count: null,
          status: 0,
          statusText: ""
        };
      });
      return res.then(onfulfilled, onrejected);
    }
    /**
    * Process a fetch response and return the standardized postgrest response.
    */
  }, {
    key: "processResponse",
    value: function processResponse(res) {
      return __async(this, null, function* () {
        var _this2 = this;
        let error = null;
        let data = null;
        let count = null;
        let status = res.status;
        let statusText = res.statusText;
        if (res.ok) {
          var _this$headers$get2, _res$headers$get2;
          if (_this2.method !== "HEAD") {
            var _this$headers$get;
            const body = yield res.text();
            if (body === "") {} else if (_this2.headers.get("Accept") === "text/csv") data = body;else if (_this2.headers.get("Accept") && ((_this$headers$get = _this2.headers.get("Accept")) === null || _this$headers$get === void 0 ? void 0 : _this$headers$get.includes("application/vnd.pgrst.plan+text"))) data = body;else try {
              data = JSON.parse(body);
            } catch (_unused) {
              error = {
                message: body
              };
              data = null;
              if (_this2.shouldThrowOnError) throw new PostgrestError({
                message: body,
                details: "",
                hint: "",
                code: ""
              });
            }
          }
          const countHeader = (_this$headers$get2 = _this2.headers.get("Prefer")) === null || _this$headers$get2 === void 0 ? void 0 : _this$headers$get2.match(/count=(exact|planned|estimated)/);
          const contentRange = (_res$headers$get2 = res.headers.get("content-range")) === null || _res$headers$get2 === void 0 ? void 0 : _res$headers$get2.split("/");
          if (countHeader && contentRange && contentRange.length > 1) count = parseInt(contentRange[1]);
          if (_this2.isMaybeSingle && Array.isArray(data)) if (data.length > 1) {
            error = {
              code: "PGRST116",
              details: `Results contain ${data.length} rows, application/vnd.pgrst.object+json requires 1 row`,
              hint: null,
              message: "JSON object requested, multiple (or no) rows returned"
            };
            data = null;
            count = null;
            status = 406;
            statusText = "Not Acceptable";
          } else if (data.length === 1) data = data[0];else data = null;
        } else {
          const body = yield res.text();
          try {
            error = JSON.parse(body);
            if (Array.isArray(error) && res.status === 404) {
              data = [];
              error = null;
              status = 200;
              statusText = "OK";
            }
          } catch (_unused2) {
            if (res.status === 404 && body === "") {
              status = 204;
              statusText = "No Content";
            } else error = {
              message: body
            };
          }
          if (error && _this2.shouldThrowOnError) throw new PostgrestError(error);
        }
        return {
          success: error === null,
          error,
          data,
          count,
          status,
          statusText
        };
      });
    }
    /**
    * Override the type of the returned `data`.
    *
    * @typeParam NewResult - The new result type to override with
    * @deprecated Use overrideTypes<yourType, { merge: false }>() method at the end of your call chain instead
    *
    * @category Database
    * @subcategory Using modifiers
    */
  }, {
    key: "returns",
    value: function returns() {
      return this;
    }
    /**
    * Override the type of the returned `data` field in the response.
    *
    * @typeParam NewResult - The new type to cast the response data to
    * @typeParam Options - Optional type configuration (defaults to { merge: true })
    * @typeParam Options.merge - When true, merges the new type with existing return type. When false, replaces the existing types entirely (defaults to true)
    * @example
    * ```typescript
    * // Merge with existing types (default behavior)
    * const query = supabase
    *   .from('users')
    *   .select()
    *   .overrideTypes<{ custom_field: string }>()
    *
    * // Replace existing types completely
    * const replaceQuery = supabase
    *   .from('users')
    *   .select()
    *   .overrideTypes<{ id: number; name: string }, { merge: false }>()
    * ```
    * @returns A PostgrestBuilder instance with the new type
    *
    * @category Database
    * @subcategory Using modifiers
    *
    * @example Complete Override type of successful response
    * ```ts
    * const { data } = await supabase
    *   .from('countries')
    *   .select()
    *   .overrideTypes<Array<MyType>, { merge: false }>()
    * ```
    *
    * @exampleResponse Complete Override type of successful response
    * ```ts
    * let x: typeof data // MyType[]
    * ```
    *
    * @example Complete Override type of object response
    * ```ts
    * const { data } = await supabase
    *   .from('countries')
    *   .select()
    *   .maybeSingle()
    *   .overrideTypes<MyType, { merge: false }>()
    * ```
    *
    * @exampleResponse Complete Override type of object response
    * ```ts
    * let x: typeof data // MyType | null
    * ```
    *
    * @example Partial Override type of successful response
    * ```ts
    * const { data } = await supabase
    *   .from('countries')
    *   .select()
    *   .overrideTypes<Array<{ status: "A" | "B" }>>()
    * ```
    *
    * @exampleResponse Partial Override type of successful response
    * ```ts
    * let x: typeof data // Array<CountryRowProperties & { status: "A" | "B" }>
    * ```
    *
    * @example Partial Override type of object response
    * ```ts
    * const { data } = await supabase
    *   .from('countries')
    *   .select()
    *   .maybeSingle()
    *   .overrideTypes<{ status: "A" | "B" }>()
    * ```
    *
    * @exampleResponse Partial Override type of object response
    * ```ts
    * let x: typeof data // CountryRowProperties & { status: "A" | "B" } | null
    * ```
    *
    * @example Merge vs replace existing types
    * ```typescript
    * // Merge with existing types (default behavior)
    * const query = supabase
    *   .from('users')
    *   .select()
    *   .overrideTypes<{ custom_field: string }>()
    *
    * // Replace existing types completely
    * const replaceQuery = supabase
    *   .from('users')
    *   .select()
    *   .overrideTypes<{ id: number; name: string }, { merge: false }>()
    * ```
    */
  }, {
    key: "overrideTypes",
    value: function overrideTypes() {
      return this;
    }
  }]);
}();
var PostgrestTransformBuilder = /*#__PURE__*/function (_PostgrestBuilder) {
  function PostgrestTransformBuilder() {
    _classCallCheck(this, PostgrestTransformBuilder);
    return _callSuper(this, PostgrestTransformBuilder, arguments);
  }
  _inherits(PostgrestTransformBuilder, _PostgrestBuilder);
  return _createClass(PostgrestTransformBuilder, [{
    key: "throwOnError",
    value: function throwOnError() {
      return _superPropGet(PostgrestTransformBuilder, "throwOnError", this, 3)([]);
    }
    /**
    * Perform a SELECT on the query result.
    *
    * By default, `.insert()`, `.update()`, `.upsert()`, and `.delete()` do not
    * return modified rows. By calling this method, modified rows are returned in
    * `data`.
    *
    * @param columns - The columns to retrieve, separated by commas
    *
    * @category Database
    * @subcategory Using modifiers
    *
    * @example With `upsert()`
    * ```ts
    * const { data, error } = await supabase
    *   .from('characters')
    *   .upsert({ id: 1, name: 'Han Solo' })
    *   .select()
    * ```
    *
    * @exampleSql With `upsert()`
    * ```sql
    * create table
    *   characters (id int8 primary key, name text);
    *
    * insert into
    *   characters (id, name)
    * values
    *   (1, 'Han');
    * ```
    *
    * @exampleResponse With `upsert()`
    * ```json
    * {
    *   "data": [
    *     {
    *       "id": 1,
    *       "name": "Han Solo"
    *     }
    *   ],
    *   "status": 201,
    *   "statusText": "Created"
    * }
    * ```
    */
  }, {
    key: "select",
    value: function select(columns) {
      let quoted = false;
      const cleanedColumns = (columns !== null && columns !== void 0 ? columns : "*").split("").map(c => {
        if (/\s/.test(c) && !quoted) return "";
        if (c === '"') quoted = !quoted;
        return c;
      }).join("");
      this.url.searchParams.set("select", cleanedColumns);
      this.headers.append("Prefer", "return=representation");
      return this;
    }
    /**
    * Order the query result by `column`.
    *
    * You can call this method multiple times to order by multiple columns.
    *
    * You can order referenced tables, but it only affects the ordering of the
    * parent table if you use `!inner` in the query.
    *
    * @param column - The column to order by
    * @param options - Named parameters
    * @param options.ascending - If `true`, the result will be in ascending order
    * @param options.nullsFirst - If `true`, `null`s appear first. If `false`,
    * `null`s appear last.
    * @param options.referencedTable - Set this to order a referenced table by
    * its columns
    * @param options.foreignTable - Deprecated, use `options.referencedTable`
    * instead
    *
    * @category Database
    * @subcategory Using modifiers
    *
    * @example With `select()`
    * ```ts
    * const { data, error } = await supabase
    *   .from('characters')
    *   .select('id, name')
    *   .order('id', { ascending: false })
    * ```
    *
    * @exampleSql With `select()`
    * ```sql
    * create table
    *   characters (id int8 primary key, name text);
    *
    * insert into
    *   characters (id, name)
    * values
    *   (1, 'Luke'),
    *   (2, 'Leia'),
    *   (3, 'Han');
    * ```
    *
    * @exampleResponse With `select()`
    * ```json
    * {
    *   "data": [
    *     {
    *       "id": 3,
    *       "name": "Han"
    *     },
    *     {
    *       "id": 2,
    *       "name": "Leia"
    *     },
    *     {
    *       "id": 1,
    *       "name": "Luke"
    *     }
    *   ],
    *   "status": 200,
    *   "statusText": "OK"
    * }
    * ```
    *
    * @exampleDescription On a referenced table
    * Ordering with `referencedTable` doesn't affect the ordering of the
    * parent table.
    *
    * @example On a referenced table
    * ```ts
    *   const { data, error } = await supabase
    *     .from('orchestral_sections')
    *     .select(`
    *       name,
    *       instruments (
    *         name
    *       )
    *     `)
    *     .order('name', { referencedTable: 'instruments', ascending: false })
    *
    * ```
    *
    * @exampleSql On a referenced table
    * ```sql
    * create table
    *   orchestral_sections (id int8 primary key, name text);
    * create table
    *   instruments (
    *     id int8 primary key,
    *     section_id int8 not null references orchestral_sections,
    *     name text
    *   );
    *
    * insert into
    *   orchestral_sections (id, name)
    * values
    *   (1, 'strings'),
    *   (2, 'woodwinds');
    * insert into
    *   instruments (id, section_id, name)
    * values
    *   (1, 1, 'harp'),
    *   (2, 1, 'violin');
    * ```
    *
    * @exampleResponse On a referenced table
    * ```json
    * {
    *   "data": [
    *     {
    *       "name": "strings",
    *       "instruments": [
    *         {
    *           "name": "violin"
    *         },
    *         {
    *           "name": "harp"
    *         }
    *       ]
    *     },
    *     {
    *       "name": "woodwinds",
    *       "instruments": []
    *     }
    *   ],
    *   "status": 200,
    *   "statusText": "OK"
    * }
    * ```
    *
    * @exampleDescription Order parent table by a referenced table
    * Ordering with `referenced_table(col)` affects the ordering of the
    * parent table.
    *
    * @example Order parent table by a referenced table
    * ```ts
    *   const { data, error } = await supabase
    *     .from('instruments')
    *     .select(`
    *       name,
    *       section:orchestral_sections (
    *         name
    *       )
    *     `)
    *     .order('section(name)', { ascending: true })
    *
    * ```
    *
    * @exampleSql Order parent table by a referenced table
    * ```sql
    * create table
    *   orchestral_sections (id int8 primary key, name text);
    * create table
    *   instruments (
    *     id int8 primary key,
    *     section_id int8 not null references orchestral_sections,
    *     name text
    *   );
    *
    * insert into
    *   orchestral_sections (id, name)
    * values
    *   (1, 'strings'),
    *   (2, 'woodwinds');
    * insert into
    *   instruments (id, section_id, name)
    * values
    *   (1, 2, 'flute'),
    *   (2, 1, 'violin');
    * ```
    *
    * @exampleResponse Order parent table by a referenced table
    * ```json
    * {
    *   "data": [
    *     {
    *       "name": "violin",
    *       "orchestral_sections": {"name": "strings"}
    *     },
    *     {
    *       "name": "flute",
    *       "orchestral_sections": {"name": "woodwinds"}
    *     }
    *   ],
    *   "status": 200,
    *   "statusText": "OK"
    * }
    * ```
    */
  }, {
    key: "order",
    value: function order(column, {
      ascending = true,
      nullsFirst,
      foreignTable,
      referencedTable = foreignTable
    } = {}) {
      const key = referencedTable ? `${referencedTable}.order` : "order";
      const existingOrder = this.url.searchParams.get(key);
      this.url.searchParams.set(key, `${existingOrder ? `${existingOrder},` : ""}${column}.${ascending ? "asc" : "desc"}${nullsFirst === void 0 ? "" : nullsFirst ? ".nullsfirst" : ".nullslast"}`);
      return this;
    }
    /**
    * Limit the query result by `rows`.
    *
    * @param rows - The maximum number of rows to return
    * @param options - Named parameters
    * @param options.referencedTable - Set this to limit rows of referenced
    * tables instead of the parent table
    * @param options.foreignTable - Deprecated, use `options.referencedTable`
    * instead
    *
    * @category Database
    * @subcategory Using modifiers
    *
    * @example With `select()`
    * ```ts
    * const { data, error } = await supabase
    *   .from('characters')
    *   .select('name')
    *   .limit(1)
    * ```
    *
    * @exampleSql With `select()`
    * ```sql
    * create table
    *   characters (id int8 primary key, name text);
    *
    * insert into
    *   characters (id, name)
    * values
    *   (1, 'Luke'),
    *   (2, 'Leia'),
    *   (3, 'Han');
    * ```
    *
    * @exampleResponse With `select()`
    * ```json
    * {
    *   "data": [
    *     {
    *       "name": "Luke"
    *     }
    *   ],
    *   "status": 200,
    *   "statusText": "OK"
    * }
    * ```
    *
    * @example On a referenced table
    * ```ts
    * const { data, error } = await supabase
    *   .from('orchestral_sections')
    *   .select(`
    *     name,
    *     instruments (
    *       name
    *     )
    *   `)
    *   .limit(1, { referencedTable: 'instruments' })
    * ```
    *
    * @exampleSql On a referenced table
    * ```sql
    * create table
    *   orchestral_sections (id int8 primary key, name text);
    * create table
    *   instruments (
    *     id int8 primary key,
    *     section_id int8 not null references orchestral_sections,
    *     name text
    *   );
    *
    * insert into
    *   orchestral_sections (id, name)
    * values
    *   (1, 'strings');
    * insert into
    *   instruments (id, section_id, name)
    * values
    *   (1, 1, 'harp'),
    *   (2, 1, 'violin');
    * ```
    *
    * @exampleResponse On a referenced table
    * ```json
    * {
    *   "data": [
    *     {
    *       "name": "strings",
    *       "instruments": [
    *         {
    *           "name": "violin"
    *         }
    *       ]
    *     }
    *   ],
    *   "status": 200,
    *   "statusText": "OK"
    * }
    * ```
    */
  }, {
    key: "limit",
    value: function limit(rows, {
      foreignTable,
      referencedTable = foreignTable
    } = {}) {
      const key = typeof referencedTable === "undefined" ? "limit" : `${referencedTable}.limit`;
      this.url.searchParams.set(key, `${rows}`);
      return this;
    }
    /**
    * Limit the query result by starting at an offset `from` and ending at the offset `to`.
    * Only records within this range are returned.
    * This respects the query order and if there is no order clause the range could behave unexpectedly.
    * The `from` and `to` values are 0-based and inclusive: `range(1, 3)` will include the second, third
    * and fourth rows of the query.
    *
    * @param from - The starting index from which to limit the result
    * @param to - The last index to which to limit the result
    * @param options - Named parameters
    * @param options.referencedTable - Set this to limit rows of referenced
    * tables instead of the parent table
    * @param options.foreignTable - Deprecated, use `options.referencedTable`
    * instead
    *
    * @category Database
    * @subcategory Using modifiers
    *
    * @example With `select()`
    * ```ts
    * const { data, error } = await supabase
    *   .from('characters')
    *   .select('name')
    *   .range(0, 1)
    * ```
    *
    * @exampleSql With `select()`
    * ```sql
    * create table
    *   characters (id int8 primary key, name text);
    *
    * insert into
    *   characters (id, name)
    * values
    *   (1, 'Luke'),
    *   (2, 'Leia'),
    *   (3, 'Han');
    * ```
    *
    * @exampleResponse With `select()`
    * ```json
    * {
    *   "data": [
    *     {
    *       "name": "Luke"
    *     },
    *     {
    *       "name": "Leia"
    *     }
    *   ],
    *   "status": 200,
    *   "statusText": "OK"
    * }
    * ```
    */
  }, {
    key: "range",
    value: function range(from, to, {
      foreignTable,
      referencedTable = foreignTable
    } = {}) {
      const keyOffset = typeof referencedTable === "undefined" ? "offset" : `${referencedTable}.offset`;
      const keyLimit = typeof referencedTable === "undefined" ? "limit" : `${referencedTable}.limit`;
      this.url.searchParams.set(keyOffset, `${from}`);
      this.url.searchParams.set(keyLimit, `${to - from + 1}`);
      return this;
    }
    /**
    * Set the AbortSignal for the fetch request.
    *
    * @param signal - The AbortSignal to use for the fetch request
    *
    * @category Database
    * @subcategory Using modifiers
    *
    * @remarks
    * You can use this to set a timeout for the request.
    *
    * @exampleDescription Aborting requests in-flight
    * You can use an [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) to abort requests.
    * Note that `status` and `statusText` don't mean anything for aborted requests as the request wasn't fulfilled.
    *
    * @example Aborting requests in-flight
    * ```ts
    * const ac = new AbortController()
    *
    * const { data, error } = await supabase
    *   .from('very_big_table')
    *   .select()
    *   .abortSignal(ac.signal)
    *
    * // Abort the request after 100 ms
    * setTimeout(() => ac.abort(), 100)
    * ```
    *
    * @exampleResponse Aborting requests in-flight
    * ```json
    *   {
    *     "error": {
    *       "message": "AbortError: The user aborted a request.",
    *       "details": "",
    *       "hint": "The request was aborted locally via the provided AbortSignal.",
    *       "code": ""
    *     },
    *     "status": 0,
    *     "statusText": ""
    *   }
    *
    * ```
    *
    * @example Set a timeout
    * ```ts
    * const { data, error } = await supabase
    *   .from('very_big_table')
    *   .select()
    *   .abortSignal(AbortSignal.timeout(1000 /* ms *\/))
    * ```
    *
    * @exampleResponse Set a timeout
    * ```json
    *   {
    *     "error": {
    *       "message": "FetchError: The user aborted a request.",
    *       "details": "",
    *       "hint": "",
    *       "code": ""
    *     },
    *     "status": 400,
    *     "statusText": "Bad Request"
    *   }
    *
    * ```
    */
  }, {
    key: "abortSignal",
    value: function abortSignal(signal) {
      this.signal = signal;
      return this;
    }
    /**
    * Return `data` as a single object instead of an array of objects.
    *
    * Query result must be one row (e.g. using `.limit(1)`), otherwise this
    * returns an error.
    *
    * @category Database
    * @subcategory Using modifiers
    *
    * @example With `select()`
    * ```ts
    * const { data, error } = await supabase
    *   .from('characters')
    *   .select('name')
    *   .limit(1)
    *   .single()
    * ```
    *
    * @exampleSql With `select()`
    * ```sql
    * create table
    *   characters (id int8 primary key, name text);
    *
    * insert into
    *   characters (id, name)
    * values
    *   (1, 'Luke'),
    *   (2, 'Leia'),
    *   (3, 'Han');
    * ```
    *
    * @exampleResponse With `select()`
    * ```json
    * {
    *   "data": {
    *     "name": "Luke"
    *   },
    *   "status": 200,
    *   "statusText": "OK"
    * }
    * ```
    */
  }, {
    key: "single",
    value: function single() {
      this.headers.set("Accept", "application/vnd.pgrst.object+json");
      return this;
    }
    /**
    * Return `data` as a single object instead of an array of objects.
    *
    * Query result must be zero or one row (e.g. using `.limit(1)`), otherwise
    * this returns an error.
    *
    * @category Database
    * @subcategory Using modifiers
    *
    * @example With `select()`
    * ```ts
    * const { data, error } = await supabase
    *   .from('characters')
    *   .select()
    *   .eq('name', 'Katniss')
    *   .maybeSingle()
    * ```
    *
    * @exampleSql With `select()`
    * ```sql
    * create table
    *   characters (id int8 primary key, name text);
    *
    * insert into
    *   characters (id, name)
    * values
    *   (1, 'Luke'),
    *   (2, 'Leia'),
    *   (3, 'Han');
    * ```
    *
    * @exampleResponse With `select()`
    * ```json
    * {
    *   "status": 200,
    *   "statusText": "OK"
    * }
    * ```
    */
  }, {
    key: "maybeSingle",
    value: function maybeSingle() {
      this.isMaybeSingle = true;
      return this;
    }
    /**
    * Return `data` as a string in CSV format.
    *
    * @category Database
    * @subcategory Using modifiers
    *
    * @exampleDescription Return data as CSV
    * By default, the data is returned in JSON format, but can also be returned as Comma Separated Values.
    *
    * @example Return data as CSV
    * ```ts
    * const { data, error } = await supabase
    *   .from('characters')
    *   .select()
    *   .csv()
    * ```
    *
    * @exampleSql Return data as CSV
    * ```sql
    * create table
    *   characters (id int8 primary key, name text);
    *
    * insert into
    *   characters (id, name)
    * values
    *   (1, 'Luke'),
    *   (2, 'Leia'),
    *   (3, 'Han');
    * ```
    *
    * @exampleResponse Return data as CSV
    * ```json
    * {
    *   "data": "id,name\n1,Luke\n2,Leia\n3,Han",
    *   "status": 200,
    *   "statusText": "OK"
    * }
    * ```
    */
  }, {
    key: "csv",
    value: function csv() {
      this.headers.set("Accept", "text/csv");
      return this;
    }
    /**
    * Return `data` as an object in [GeoJSON](https://geojson.org) format.
    *
    * @category Database
    * @subcategory Using modifiers
    */
  }, {
    key: "geojson",
    value: function geojson() {
      this.headers.set("Accept", "application/geo+json");
      return this;
    }
    /**
    * Return `data` as the EXPLAIN plan for the query.
    *
    * You need to enable the
    * [db_plan_enabled](https://supabase.com/docs/guides/database/debugging-performance#enabling-explain)
    * setting before using this method.
    *
    * @param options - Named parameters
    *
    * @param options.analyze - If `true`, the query will be executed and the
    * actual run time will be returned
    *
    * @param options.verbose - If `true`, the query identifier will be returned
    * and `data` will include the output columns of the query
    *
    * @param options.settings - If `true`, include information on configuration
    * parameters that affect query planning
    *
    * @param options.buffers - If `true`, include information on buffer usage
    *
    * @param options.wal - If `true`, include information on WAL record generation
    *
    * @param options.format - The format of the output, can be `"text"` (default)
    * or `"json"`
    *
    * @category Database
    * @subcategory Using modifiers
    *
    * @exampleDescription Get the execution plan
    * By default, the data is returned in TEXT format, but can also be returned as JSON by using the `format` parameter.
    *
    * @example Get the execution plan
    * ```ts
    * const { data, error } = await supabase
    *   .from('characters')
    *   .select()
    *   .explain()
    * ```
    *
    * @exampleSql Get the execution plan
    * ```sql
    * create table
    *   characters (id int8 primary key, name text);
    *
    * insert into
    *   characters (id, name)
    * values
    *   (1, 'Luke'),
    *   (2, 'Leia'),
    *   (3, 'Han');
    * ```
    *
    * @exampleResponse Get the execution plan
    * ```js
    * Aggregate  (cost=33.34..33.36 rows=1 width=112)
    *   ->  Limit  (cost=0.00..18.33 rows=1000 width=40)
    *         ->  Seq Scan on characters  (cost=0.00..22.00 rows=1200 width=40)
    * ```
    *
    * @exampleDescription Get the execution plan with analyze and verbose
    * By default, the data is returned in TEXT format, but can also be returned as JSON by using the `format` parameter.
    *
    * @example Get the execution plan with analyze and verbose
    * ```ts
    * const { data, error } = await supabase
    *   .from('characters')
    *   .select()
    *   .explain({analyze:true,verbose:true})
    * ```
    *
    * @exampleSql Get the execution plan with analyze and verbose
    * ```sql
    * create table
    *   characters (id int8 primary key, name text);
    *
    * insert into
    *   characters (id, name)
    * values
    *   (1, 'Luke'),
    *   (2, 'Leia'),
    *   (3, 'Han');
    * ```
    *
    * @exampleResponse Get the execution plan with analyze and verbose
    * ```js
    * Aggregate  (cost=33.34..33.36 rows=1 width=112) (actual time=0.041..0.041 rows=1 loops=1)
    *   Output: NULL::bigint, count(ROW(characters.id, characters.name)), COALESCE(json_agg(ROW(characters.id, characters.name)), '[]'::json), NULLIF(current_setting('response.headers'::text, true), ''::text), NULLIF(current_setting('response.status'::text, true), ''::text)
    *   ->  Limit  (cost=0.00..18.33 rows=1000 width=40) (actual time=0.005..0.006 rows=3 loops=1)
    *         Output: characters.id, characters.name
    *         ->  Seq Scan on public.characters  (cost=0.00..22.00 rows=1200 width=40) (actual time=0.004..0.005 rows=3 loops=1)
    *               Output: characters.id, characters.name
    * Query Identifier: -4730654291623321173
    * Planning Time: 0.407 ms
    * Execution Time: 0.119 ms
    * ```
    */
  }, {
    key: "explain",
    value: function explain({
      analyze = false,
      verbose = false,
      settings = false,
      buffers = false,
      wal = false,
      format = "text"
    } = {}) {
      var _this$headers$get;
      const options = [analyze ? "analyze" : null, verbose ? "verbose" : null, settings ? "settings" : null, buffers ? "buffers" : null, wal ? "wal" : null].filter(Boolean).join("|");
      const forMediatype = (_this$headers$get = this.headers.get("Accept")) !== null && _this$headers$get !== void 0 ? _this$headers$get : "application/json";
      this.headers.set("Accept", `application/vnd.pgrst.plan+${format}; for="${forMediatype}"; options=${options};`);
      if (format === "json") return this;else return this;
    }
    /**
    * Dry-run this request: execute the query but discard the changes.
    *
    * Server-side, PostgREST runs the query inside a transaction and rolls it back
    * instead of committing. The response still contains the data that *would* have
    * been returned — `RETURNING` clauses execute and RLS, triggers, and constraints
    * are all evaluated — but no row is actually inserted, updated, or deleted.
    *
    * This affects only the single request it is chained to. The JS caller has no
    * handle on the transaction: supabase-js does not group multiple queries into
    * one transaction. For multi-statement transactional logic, use a database
    * function (`supabase.rpc(...)`).
    *
    * Sets the `Prefer: tx=rollback` header. See PostgREST's docs on transaction
    * preferences for the underlying mechanism.
    *
    * @category Database
    * @subcategory Using modifiers
    *
    * @example Validate an insert without persisting
    * ```ts
    * const { data, error } = await supabase
    *   .from('countries')
    *   .insert({ name: 'France' })
    *   .select()
    *   .rollback()
    * // `data` shows what would have been inserted; nothing is saved.
    * ```
    */
  }, {
    key: "rollback",
    value: function rollback() {
      this.headers.append("Prefer", "tx=rollback");
      return this;
    }
    /**
    * Override the type of the returned `data`.
    *
    * @typeParam NewResult - The new result type to override with
    * @deprecated Use overrideTypes<yourType, { merge: false }>() method at the end of your call chain instead
    *
    * @category Database
    * @subcategory Using modifiers
    *
    * @remarks
    * - Deprecated: use overrideTypes method instead
    *
    * @example Override type of successful response
    * ```ts
    * const { data } = await supabase
    *   .from('countries')
    *   .select()
    *   .returns<Array<MyType>>()
    * ```
    *
    * @exampleResponse Override type of successful response
    * ```js
    * let x: typeof data // MyType[]
    * ```
    *
    * @example Override type of object response
    * ```ts
    * const { data } = await supabase
    *   .from('countries')
    *   .select()
    *   .maybeSingle()
    *   .returns<MyType>()
    * ```
    *
    * @exampleResponse Override type of object response
    * ```js
    * let x: typeof data // MyType | null
    * ```
    */
  }, {
    key: "returns",
    value: function returns() {
      return this;
    }
    /**
    * Set the maximum number of rows that can be affected by the query.
    * Only available in PostgREST v13+ and only works with PATCH and DELETE methods.
    *
    * @param rows - The maximum number of rows that can be affected
    *
    * @category Database
    * @subcategory Using modifiers
    */
  }, {
    key: "maxAffected",
    value: function maxAffected(rows) {
      this.headers.append("Prefer", "handling=strict");
      this.headers.append("Prefer", `max-affected=${rows}`);
      return this;
    }
  }]);
}(PostgrestBuilder);
var PostgrestReservedCharsRegexp = /* @__PURE__ */new RegExp("[,()]");
var PostgrestFilterBuilder = /*#__PURE__*/function (_PostgrestTransformBu) {
  function PostgrestFilterBuilder() {
    _classCallCheck(this, PostgrestFilterBuilder);
    return _callSuper(this, PostgrestFilterBuilder, arguments);
  }
  _inherits(PostgrestFilterBuilder, _PostgrestTransformBu);
  return _createClass(PostgrestFilterBuilder, [{
    key: "throwOnError",
    value: function throwOnError() {
      return _superPropGet(PostgrestFilterBuilder, "throwOnError", this, 3)([]);
    }
    /**
    * Match only rows where `column` is equal to `value`.
    *
    * To check if the value of `column` is NULL, you should use `.is()` instead.
    *
    * @param column - The column to filter on
    * @param value - The value to filter with
    *
    * @category Database
    * @subcategory Using filters
    *
    * @example With `select()`
    * ```ts
    * const { data, error } = await supabase
    *   .from('characters')
    *   .select()
    *   .eq('name', 'Leia')
    * ```
    *
    * @exampleSql With `select()`
    * ```sql
    * create table
    *   characters (id int8 primary key, name text);
    *
    * insert into
    *   characters (id, name)
    * values
    *   (1, 'Luke'),
    *   (2, 'Leia'),
    *   (3, 'Han');
    * ```
    *
    * @exampleResponse With `select()`
    * ```json
    * {
    *   "data": [
    *     {
    *       "id": 2,
    *       "name": "Leia"
    *     }
    *   ],
    *   "status": 200,
    *   "statusText": "OK"
    * }
    * ```
    */
  }, {
    key: "eq",
    value: function eq(column, value) {
      this.url.searchParams.append(column, `eq.${value}`);
      return this;
    }
    /**
    * Match only rows where `column` is not equal to `value`.
    *
    * This filter does not include rows where `column` is `NULL`. To match null
    * values, use `.is(column, null)` instead.
    *
    * @param column - The column to filter on
    * @param value - The value to filter with
    *
    * @category Database
    * @subcategory Using filters
    *
    * @example With `select()`
    * ```ts
    * const { data, error } = await supabase
    *   .from('characters')
    *   .select()
    *   .neq('name', 'Leia')
    * ```
    *
    * @exampleSql With `select()`
    * ```sql
    * create table
    *   characters (id int8 primary key, name text);
    *
    * insert into
    *   characters (id, name)
    * values
    *   (1, 'Luke'),
    *   (2, 'Leia'),
    *   (3, 'Han');
    * ```
    *
    * @exampleResponse With `select()`
    * ```json
    * {
    *   "data": [
    *     {
    *       "id": 1,
    *       "name": "Luke"
    *     },
    *     {
    *       "id": 3,
    *       "name": "Han"
    *     }
    *   ],
    *   "status": 200,
    *   "statusText": "OK"
    * }
    * ```
    */
  }, {
    key: "neq",
    value: function neq(column, value) {
      this.url.searchParams.append(column, `neq.${value}`);
      return this;
    }
    /**
    * Match only rows where `column` is greater than `value`.
    *
    * @param column - The column to filter on
    * @param value - The value to filter with
    *
    * @category Database
    * @subcategory Using filters
    *
    * @exampleDescription With `select()`
    * When using [reserved words](https://www.postgresql.org/docs/current/sql-keywords-appendix.html) for column names you need
    * to add double quotes e.g. `.gt('"order"', 2)`
    *
    * @example With `select()`
    * ```ts
    * const { data, error } = await supabase
    *   .from('characters')
    *   .select()
    *   .gt('id', 2)
    * ```
    *
    * @exampleSql With `select()`
    * ```sql
    * create table
    *   characters (id int8 primary key, name text);
    *
    * insert into
    *   characters (id, name)
    * values
    *   (1, 'Luke'),
    *   (2, 'Leia'),
    *   (3, 'Han');
    * ```
    *
    * @exampleResponse With `select()`
    * ```json
    * {
    *   "data": [
    *     {
    *       "id": 3,
    *       "name": "Han"
    *     }
    *   ],
    *   "status": 200,
    *   "statusText": "OK"
    * }
    * ```
    */
  }, {
    key: "gt",
    value: function gt(column, value) {
      this.url.searchParams.append(column, `gt.${value}`);
      return this;
    }
    /**
    * Match only rows where `column` is greater than or equal to `value`.
    *
    * @param column - The column to filter on
    * @param value - The value to filter with
    *
    * @category Database
    * @subcategory Using filters
    *
    * @example With `select()`
    * ```ts
    * const { data, error } = await supabase
    *   .from('characters')
    *   .select()
    *   .gte('id', 2)
    * ```
    *
    * @exampleSql With `select()`
    * ```sql
    * create table
    *   characters (id int8 primary key, name text);
    *
    * insert into
    *   characters (id, name)
    * values
    *   (1, 'Luke'),
    *   (2, 'Leia'),
    *   (3, 'Han');
    * ```
    *
    * @exampleResponse With `select()`
    * ```json
    * {
    *   "data": [
    *     {
    *       "id": 2,
    *       "name": "Leia"
    *     },
    *     {
    *       "id": 3,
    *       "name": "Han"
    *     }
    *   ],
    *   "status": 200,
    *   "statusText": "OK"
    * }
    * ```
    */
  }, {
    key: "gte",
    value: function gte(column, value) {
      this.url.searchParams.append(column, `gte.${value}`);
      return this;
    }
    /**
    * Match only rows where `column` is less than `value`.
    *
    * @param column - The column to filter on
    * @param value - The value to filter with
    *
    * @category Database
    * @subcategory Using filters
    *
    * @example With `select()`
    * ```ts
    * const { data, error } = await supabase
    *   .from('characters')
    *   .select()
    *   .lt('id', 2)
    * ```
    *
    * @exampleSql With `select()`
    * ```sql
    * create table
    *   characters (id int8 primary key, name text);
    *
    * insert into
    *   characters (id, name)
    * values
    *   (1, 'Luke'),
    *   (2, 'Leia'),
    *   (3, 'Han');
    * ```
    *
    * @exampleResponse With `select()`
    * ```json
    * {
    *   "data": [
    *     {
    *       "id": 1,
    *       "name": "Luke"
    *     }
    *   ],
    *   "status": 200,
    *   "statusText": "OK"
    * }
    * ```
    */
  }, {
    key: "lt",
    value: function lt(column, value) {
      this.url.searchParams.append(column, `lt.${value}`);
      return this;
    }
    /**
    * Match only rows where `column` is less than or equal to `value`.
    *
    * @param column - The column to filter on
    * @param value - The value to filter with
    *
    * @category Database
    * @subcategory Using filters
    *
    * @example With `select()`
    * ```ts
    * const { data, error } = await supabase
    *   .from('characters')
    *   .select()
    *   .lte('id', 2)
    * ```
    *
    * @exampleSql With `select()`
    * ```sql
    * create table
    *   characters (id int8 primary key, name text);
    *
    * insert into
    *   characters (id, name)
    * values
    *   (1, 'Luke'),
    *   (2, 'Leia'),
    *   (3, 'Han');
    * ```
    *
    * @exampleResponse With `select()`
    * ```json
    * {
    *   "data": [
    *     {
    *       "id": 1,
    *       "name": "Luke"
    *     },
    *     {
    *       "id": 2,
    *       "name": "Leia"
    *     }
    *   ],
    *   "status": 200,
    *   "statusText": "OK"
    * }
    * ```
    */
  }, {
    key: "lte",
    value: function lte(column, value) {
      this.url.searchParams.append(column, `lte.${value}`);
      return this;
    }
    /**
    * Match only rows where `column` matches `pattern` case-sensitively.
    *
    * @param column - The column to filter on
    * @param pattern - The pattern to match with
    *
    * @category Database
    * @subcategory Using filters
    *
    * @example With `select()`
    * ```ts
    * const { data, error } = await supabase
    *   .from('characters')
    *   .select()
    *   .like('name', '%Lu%')
    * ```
    *
    * @exampleSql With `select()`
    * ```sql
    * create table
    *   characters (id int8 primary key, name text);
    *
    * insert into
    *   characters (id, name)
    * values
    *   (1, 'Luke'),
    *   (2, 'Leia'),
    *   (3, 'Han');
    * ```
    *
    * @exampleResponse With `select()`
    * ```json
    * {
    *   "data": [
    *     {
    *       "id": 1,
    *       "name": "Luke"
    *     }
    *   ],
    *   "status": 200,
    *   "statusText": "OK"
    * }
    * ```
    */
  }, {
    key: "like",
    value: function like(column, pattern) {
      this.url.searchParams.append(column, `like.${pattern}`);
      return this;
    }
    /**
    * Match only rows where `column` matches all of `patterns` case-sensitively.
    *
    * @param column - The column to filter on
    * @param patterns - The patterns to match with
    *
    * @category Database
    * @subcategory Using filters
    */
  }, {
    key: "likeAllOf",
    value: function likeAllOf(column, patterns) {
      this.url.searchParams.append(column, `like(all).{${patterns.join(",")}}`);
      return this;
    }
    /**
    * Match only rows where `column` matches any of `patterns` case-sensitively.
    *
    * @param column - The column to filter on
    * @param patterns - The patterns to match with
    *
    * @category Database
    * @subcategory Using filters
    */
  }, {
    key: "likeAnyOf",
    value: function likeAnyOf(column, patterns) {
      this.url.searchParams.append(column, `like(any).{${patterns.join(",")}}`);
      return this;
    }
    /**
    * Match only rows where `column` matches `pattern` case-insensitively.
    *
    * @param column - The column to filter on
    * @param pattern - The pattern to match with
    *
    * @category Database
    * @subcategory Using filters
    *
    * @example With `select()`
    * ```ts
    * const { data, error } = await supabase
    *   .from('characters')
    *   .select()
    *   .ilike('name', '%lu%')
    * ```
    *
    * @exampleSql With `select()`
    * ```sql
    * create table
    *   characters (id int8 primary key, name text);
    *
    * insert into
    *   characters (id, name)
    * values
    *   (1, 'Luke'),
    *   (2, 'Leia'),
    *   (3, 'Han');
    * ```
    *
    * @exampleResponse With `select()`
    * ```json
    * {
    *   "data": [
    *     {
    *       "id": 1,
    *       "name": "Luke"
    *     }
    *   ],
    *   "status": 200,
    *   "statusText": "OK"
    * }
    * ```
    */
  }, {
    key: "ilike",
    value: function ilike(column, pattern) {
      this.url.searchParams.append(column, `ilike.${pattern}`);
      return this;
    }
    /**
    * Match only rows where `column` matches all of `patterns` case-insensitively.
    *
    * @param column - The column to filter on
    * @param patterns - The patterns to match with
    *
    * @category Database
    * @subcategory Using filters
    */
  }, {
    key: "ilikeAllOf",
    value: function ilikeAllOf(column, patterns) {
      this.url.searchParams.append(column, `ilike(all).{${patterns.join(",")}}`);
      return this;
    }
    /**
    * Match only rows where `column` matches any of `patterns` case-insensitively.
    *
    * @param column - The column to filter on
    * @param patterns - The patterns to match with
    *
    * @category Database
    * @subcategory Using filters
    */
  }, {
    key: "ilikeAnyOf",
    value: function ilikeAnyOf(column, patterns) {
      this.url.searchParams.append(column, `ilike(any).{${patterns.join(",")}}`);
      return this;
    }
    /**
    * Match only rows where `column` matches the PostgreSQL regex `pattern`
    * case-sensitively (using the `~` operator).
    *
    * @param column - The column to filter on
    * @param pattern - The PostgreSQL regular expression pattern to match with
    */
  }, {
    key: "regexMatch",
    value: function regexMatch(column, pattern) {
      this.url.searchParams.append(column, `match.${pattern}`);
      return this;
    }
    /**
    * Match only rows where `column` matches the PostgreSQL regex `pattern`
    * case-insensitively (using the `~*` operator).
    *
    * @param column - The column to filter on
    * @param pattern - The PostgreSQL regular expression pattern to match with
    */
  }, {
    key: "regexIMatch",
    value: function regexIMatch(column, pattern) {
      this.url.searchParams.append(column, `imatch.${pattern}`);
      return this;
    }
    /**
    * Match only rows where `column` IS `value`.
    *
    * For non-boolean columns, this is only relevant for checking if the value of
    * `column` is NULL by setting `value` to `null`.
    *
    * For boolean columns, you can also set `value` to `true` or `false` and it
    * will behave the same way as `.eq()`.
    *
    * @param column - The column to filter on
    * @param value - The value to filter with
    *
    * @category Database
    * @subcategory Using filters
    *
    * @exampleDescription Checking for nullness, true or false
    * Using the `eq()` filter doesn't work when filtering for `null`.
    *
    * Instead, you need to use `is()`.
    *
    * @example Checking for nullness, true or false
    * ```ts
    * const { data, error } = await supabase
    *   .from('countries')
    *   .select()
    *   .is('name', null)
    * ```
    *
    * @exampleSql Checking for nullness, true or false
    * ```sql
    * create table
    *   countries (id int8 primary key, name text);
    *
    * insert into
    *   countries (id, name)
    * values
    *   (1, 'null'),
    *   (2, null);
    * ```
    *
    * @exampleResponse Checking for nullness, true or false
    * ```json
    * {
    *   "data": [
    *     {
    *       "id": 2,
    *       "name": "null"
    *     }
    *   ],
    *   "status": 200,
    *   "statusText": "OK"
    * }
    * ```
    */
  }, {
    key: "is",
    value: function is(column, value) {
      this.url.searchParams.append(column, `is.${value}`);
      return this;
    }
    /**
    * Match only rows where `column` IS DISTINCT FROM `value`.
    *
    * Unlike `.neq()`, this treats `NULL` as a comparable value. Two `NULL` values
    * are considered equal (not distinct), and comparing `NULL` with any non-NULL
    * value returns true (distinct).
    *
    * @param column - The column to filter on
    * @param value - The value to filter with
    */
  }, {
    key: "isDistinct",
    value: function isDistinct(column, value) {
      this.url.searchParams.append(column, `isdistinct.${value}`);
      return this;
    }
    /**
    * Match only rows where `column` is included in the `values` array.
    *
    * @param column - The column to filter on
    * @param values - The values array to filter with
    *
    * @category Database
    * @subcategory Using filters
    *
    * @example With `select()`
    * ```ts
    * const { data, error } = await supabase
    *   .from('characters')
    *   .select()
    *   .in('name', ['Leia', 'Han'])
    * ```
    *
    * @exampleSql With `select()`
    * ```sql
    * create table
    *   characters (id int8 primary key, name text);
    *
    * insert into
    *   characters (id, name)
    * values
    *   (1, 'Luke'),
    *   (2, 'Leia'),
    *   (3, 'Han');
    * ```
    *
    * @exampleResponse With `select()`
    * ```json
    * {
    *   "data": [
    *     {
    *       "id": 2,
    *       "name": "Leia"
    *     },
    *     {
    *       "id": 3,
    *       "name": "Han"
    *     }
    *   ],
    *   "status": 200,
    *   "statusText": "OK"
    * }
    * ```
    */
  }, {
    key: "in",
    value: function _in(column, values) {
      const cleanedValues = Array.from(new Set(values)).map(s => {
        if (typeof s === "string" && PostgrestReservedCharsRegexp.test(s)) return `"${s}"`;else return `${s}`;
      }).join(",");
      this.url.searchParams.append(column, `in.(${cleanedValues})`);
      return this;
    }
    /**
    * Match only rows where `column` is NOT included in the `values` array.
    *
    * @param column - The column to filter on
    * @param values - The values array to filter with
    */
  }, {
    key: "notIn",
    value: function notIn(column, values) {
      const cleanedValues = Array.from(new Set(values)).map(s => {
        if (typeof s === "string" && PostgrestReservedCharsRegexp.test(s)) return `"${s}"`;else return `${s}`;
      }).join(",");
      this.url.searchParams.append(column, `not.in.(${cleanedValues})`);
      return this;
    }
    /**
    * Only relevant for jsonb, array, and range columns. Match only rows where
    * `column` contains every element appearing in `value`.
    *
    * @param column - The jsonb, array, or range column to filter on
    * @param value - The jsonb, array, or range value to filter with
    *
    * @category Database
    * @subcategory Using filters
    *
    * @example On array columns
    * ```ts
    * const { data, error } = await supabase
    *   .from('issues')
    *   .select()
    *   .contains('tags', ['is:open', 'priority:low'])
    * ```
    *
    * @exampleSql On array columns
    * ```sql
    * create table
    *   issues (
    *     id int8 primary key,
    *     title text,
    *     tags text[]
    *   );
    *
    * insert into
    *   issues (id, title, tags)
    * values
    *   (1, 'Cache invalidation is not working', array['is:open', 'severity:high', 'priority:low']),
    *   (2, 'Use better names', array['is:open', 'severity:low', 'priority:medium']);
    * ```
    *
    * @exampleResponse On array columns
    * ```json
    * {
    *   "data": [
    *     {
    *       "title": "Cache invalidation is not working"
    *     }
    *   ],
    *   "status": 200,
    *   "statusText": "OK"
    * }
    * ```
    *
    * @exampleDescription On range columns
    * Postgres supports a number of [range
    * types](https://www.postgresql.org/docs/current/rangetypes.html). You
    * can filter on range columns using the string representation of range
    * values.
    *
    * @example On range columns
    * ```ts
    * const { data, error } = await supabase
    *   .from('reservations')
    *   .select()
    *   .contains('during', '[2000-01-01 13:00, 2000-01-01 13:30)')
    * ```
    *
    * @exampleSql On range columns
    * ```sql
    * create table
    *   reservations (
    *     id int8 primary key,
    *     room_name text,
    *     during tsrange
    *   );
    *
    * insert into
    *   reservations (id, room_name, during)
    * values
    *   (1, 'Emerald', '[2000-01-01 13:00, 2000-01-01 15:00)'),
    *   (2, 'Topaz', '[2000-01-02 09:00, 2000-01-02 10:00)');
    * ```
    *
    * @exampleResponse On range columns
    * ```json
    * {
    *   "data": [
    *     {
    *       "id": 1,
    *       "room_name": "Emerald",
    *       "during": "[\"2000-01-01 13:00:00\",\"2000-01-01 15:00:00\")"
    *     }
    *   ],
    *   "status": 200,
    *   "statusText": "OK"
    * }
    * ```
    *
    * @example On `jsonb` columns
    * ```ts
    * const { data, error } = await supabase
    *   .from('users')
    *   .select('name')
    *   .contains('address', { postcode: 90210 })
    * ```
    *
    * @exampleSql On `jsonb` columns
    * ```sql
    * create table
    *   users (
    *     id int8 primary key,
    *     name text,
    *     address jsonb
    *   );
    *
    * insert into
    *   users (id, name, address)
    * values
    *   (1, 'Michael', '{ "postcode": 90210, "street": "Melrose Place" }'),
    *   (2, 'Jane', '{}');
    * ```
    *
    * @exampleResponse On `jsonb` columns
    * ```json
    * {
    *   "data": [
    *     {
    *       "name": "Michael"
    *     }
    *   ],
    *   "status": 200,
    *   "statusText": "OK"
    * }
    * ```
    */
  }, {
    key: "contains",
    value: function contains(column, value) {
      if (typeof value === "string") this.url.searchParams.append(column, `cs.${value}`);else if (Array.isArray(value)) this.url.searchParams.append(column, `cs.{${value.join(",")}}`);else this.url.searchParams.append(column, `cs.${JSON.stringify(value)}`);
      return this;
    }
    /**
    * Only relevant for jsonb, array, and range columns. Match only rows where
    * every element appearing in `column` is contained by `value`.
    *
    * @param column - The jsonb, array, or range column to filter on
    * @param value - The jsonb, array, or range value to filter with
    *
    * @category Database
    * @subcategory Using filters
    *
    * @example On array columns
    * ```ts
    * const { data, error } = await supabase
    *   .from('classes')
    *   .select('name')
    *   .containedBy('days', ['monday', 'tuesday', 'wednesday', 'friday'])
    * ```
    *
    * @exampleSql On array columns
    * ```sql
    * create table
    *   classes (
    *     id int8 primary key,
    *     name text,
    *     days text[]
    *   );
    *
    * insert into
    *   classes (id, name, days)
    * values
    *   (1, 'Chemistry', array['monday', 'friday']),
    *   (2, 'History', array['monday', 'wednesday', 'thursday']);
    * ```
    *
    * @exampleResponse On array columns
    * ```json
    * {
    *   "data": [
    *     {
    *       "name": "Chemistry"
    *     }
    *   ],
    *   "status": 200,
    *   "statusText": "OK"
    * }
    * ```
    *
    * @exampleDescription On range columns
    * Postgres supports a number of [range
    * types](https://www.postgresql.org/docs/current/rangetypes.html). You
    * can filter on range columns using the string representation of range
    * values.
    *
    * @example On range columns
    * ```ts
    * const { data, error } = await supabase
    *   .from('reservations')
    *   .select()
    *   .containedBy('during', '[2000-01-01 00:00, 2000-01-01 23:59)')
    * ```
    *
    * @exampleSql On range columns
    * ```sql
    * create table
    *   reservations (
    *     id int8 primary key,
    *     room_name text,
    *     during tsrange
    *   );
    *
    * insert into
    *   reservations (id, room_name, during)
    * values
    *   (1, 'Emerald', '[2000-01-01 13:00, 2000-01-01 15:00)'),
    *   (2, 'Topaz', '[2000-01-02 09:00, 2000-01-02 10:00)');
    * ```
    *
    * @exampleResponse On range columns
    * ```json
    * {
    *   "data": [
    *     {
    *       "id": 1,
    *       "room_name": "Emerald",
    *       "during": "[\"2000-01-01 13:00:00\",\"2000-01-01 15:00:00\")"
    *     }
    *   ],
    *   "status": 200,
    *   "statusText": "OK"
    * }
    * ```
    *
    * @example On `jsonb` columns
    * ```ts
    * const { data, error } = await supabase
    *   .from('users')
    *   .select('name')
    *   .containedBy('address', {})
    * ```
    *
    * @exampleSql On `jsonb` columns
    * ```sql
    * create table
    *   users (
    *     id int8 primary key,
    *     name text,
    *     address jsonb
    *   );
    *
    * insert into
    *   users (id, name, address)
    * values
    *   (1, 'Michael', '{ "postcode": 90210, "street": "Melrose Place" }'),
    *   (2, 'Jane', '{}');
    * ```
    *
    * @exampleResponse On `jsonb` columns
    * ```json
    *   {
    *     "data": [
    *       {
    *         "name": "Jane"
    *       }
    *     ],
    *     "status": 200,
    *     "statusText": "OK"
    *   }
    *
    * ```
    */
  }, {
    key: "containedBy",
    value: function containedBy(column, value) {
      if (typeof value === "string") this.url.searchParams.append(column, `cd.${value}`);else if (Array.isArray(value)) this.url.searchParams.append(column, `cd.{${value.join(",")}}`);else this.url.searchParams.append(column, `cd.${JSON.stringify(value)}`);
      return this;
    }
    /**
    * Only relevant for range columns. Match only rows where every element in
    * `column` is greater than any element in `range`.
    *
    * @param column - The range column to filter on
    * @param range - The range to filter with
    *
    * @category Database
    * @subcategory Using filters
    *
    * @exampleDescription With `select()`
    * Postgres supports a number of [range
    * types](https://www.postgresql.org/docs/current/rangetypes.html). You
    * can filter on range columns using the string representation of range
    * values.
    *
    * @example With `select()`
    * ```ts
    * const { data, error } = await supabase
    *   .from('reservations')
    *   .select()
    *   .rangeGt('during', '[2000-01-02 08:00, 2000-01-02 09:00)')
    * ```
    *
    * @exampleSql With `select()`
    * ```sql
    * create table
    *   reservations (
    *     id int8 primary key,
    *     room_name text,
    *     during tsrange
    *   );
    *
    * insert into
    *   reservations (id, room_name, during)
    * values
    *   (1, 'Emerald', '[2000-01-01 13:00, 2000-01-01 15:00)'),
    *   (2, 'Topaz', '[2000-01-02 09:00, 2000-01-02 10:00)');
    * ```
    *
    * @exampleResponse With `select()`
    * ```json
    *   {
    *     "data": [
    *       {
    *         "id": 2,
    *         "room_name": "Topaz",
    *         "during": "[\"2000-01-02 09:00:00\",\"2000-01-02 10:00:00\")"
    *       }
    *     ],
    *     "status": 200,
    *     "statusText": "OK"
    *   }
    *
    * ```
    */
  }, {
    key: "rangeGt",
    value: function rangeGt(column, range) {
      this.url.searchParams.append(column, `sr.${range}`);
      return this;
    }
    /**
    * Only relevant for range columns. Match only rows where every element in
    * `column` is either contained in `range` or greater than any element in
    * `range`.
    *
    * @param column - The range column to filter on
    * @param range - The range to filter with
    *
    * @category Database
    * @subcategory Using filters
    *
    * @exampleDescription With `select()`
    * Postgres supports a number of [range
    * types](https://www.postgresql.org/docs/current/rangetypes.html). You
    * can filter on range columns using the string representation of range
    * values.
    *
    * @example With `select()`
    * ```ts
    * const { data, error } = await supabase
    *   .from('reservations')
    *   .select()
    *   .rangeGte('during', '[2000-01-02 08:30, 2000-01-02 09:30)')
    * ```
    *
    * @exampleSql With `select()`
    * ```sql
    * create table
    *   reservations (
    *     id int8 primary key,
    *     room_name text,
    *     during tsrange
    *   );
    *
    * insert into
    *   reservations (id, room_name, during)
    * values
    *   (1, 'Emerald', '[2000-01-01 13:00, 2000-01-01 15:00)'),
    *   (2, 'Topaz', '[2000-01-02 09:00, 2000-01-02 10:00)');
    * ```
    *
    * @exampleResponse With `select()`
    * ```json
    *   {
    *     "data": [
    *       {
    *         "id": 2,
    *         "room_name": "Topaz",
    *         "during": "[\"2000-01-02 09:00:00\",\"2000-01-02 10:00:00\")"
    *       }
    *     ],
    *     "status": 200,
    *     "statusText": "OK"
    *   }
    *
    * ```
    */
  }, {
    key: "rangeGte",
    value: function rangeGte(column, range) {
      this.url.searchParams.append(column, `nxl.${range}`);
      return this;
    }
    /**
    * Only relevant for range columns. Match only rows where every element in
    * `column` is less than any element in `range`.
    *
    * @param column - The range column to filter on
    * @param range - The range to filter with
    *
    * @category Database
    * @subcategory Using filters
    *
    * @exampleDescription With `select()`
    * Postgres supports a number of [range
    * types](https://www.postgresql.org/docs/current/rangetypes.html). You
    * can filter on range columns using the string representation of range
    * values.
    *
    * @example With `select()`
    * ```ts
    * const { data, error } = await supabase
    *   .from('reservations')
    *   .select()
    *   .rangeLt('during', '[2000-01-01 15:00, 2000-01-01 16:00)')
    * ```
    *
    * @exampleSql With `select()`
    * ```sql
    * create table
    *   reservations (
    *     id int8 primary key,
    *     room_name text,
    *     during tsrange
    *   );
    *
    * insert into
    *   reservations (id, room_name, during)
    * values
    *   (1, 'Emerald', '[2000-01-01 13:00, 2000-01-01 15:00)'),
    *   (2, 'Topaz', '[2000-01-02 09:00, 2000-01-02 10:00)');
    * ```
    *
    * @exampleResponse With `select()`
    * ```json
    * {
    *   "data": [
    *     {
    *       "id": 1,
    *       "room_name": "Emerald",
    *       "during": "[\"2000-01-01 13:00:00\",\"2000-01-01 15:00:00\")"
    *     }
    *   ],
    *   "status": 200,
    *   "statusText": "OK"
    * }
    * ```
    */
  }, {
    key: "rangeLt",
    value: function rangeLt(column, range) {
      this.url.searchParams.append(column, `sl.${range}`);
      return this;
    }
    /**
    * Only relevant for range columns. Match only rows where every element in
    * `column` is either contained in `range` or less than any element in
    * `range`.
    *
    * @param column - The range column to filter on
    * @param range - The range to filter with
    *
    * @category Database
    * @subcategory Using filters
    *
    * @exampleDescription With `select()`
    * Postgres supports a number of [range
    * types](https://www.postgresql.org/docs/current/rangetypes.html). You
    * can filter on range columns using the string representation of range
    * values.
    *
    * @example With `select()`
    * ```ts
    * const { data, error } = await supabase
    *   .from('reservations')
    *   .select()
    *   .rangeLte('during', '[2000-01-01 14:00, 2000-01-01 16:00)')
    * ```
    *
    * @exampleSql With `select()`
    * ```sql
    * create table
    *   reservations (
    *     id int8 primary key,
    *     room_name text,
    *     during tsrange
    *   );
    *
    * insert into
    *   reservations (id, room_name, during)
    * values
    *   (1, 'Emerald', '[2000-01-01 13:00, 2000-01-01 15:00)'),
    *   (2, 'Topaz', '[2000-01-02 09:00, 2000-01-02 10:00)');
    * ```
    *
    * @exampleResponse With `select()`
    * ```json
    *   {
    *     "data": [
    *       {
    *         "id": 1,
    *         "room_name": "Emerald",
    *         "during": "[\"2000-01-01 13:00:00\",\"2000-01-01 15:00:00\")"
    *       }
    *     ],
    *     "status": 200,
    *     "statusText": "OK"
    *   }
    *
    * ```
    */
  }, {
    key: "rangeLte",
    value: function rangeLte(column, range) {
      this.url.searchParams.append(column, `nxr.${range}`);
      return this;
    }
    /**
    * Only relevant for range columns. Match only rows where `column` is
    * mutually exclusive to `range` and there can be no element between the two
    * ranges.
    *
    * @param column - The range column to filter on
    * @param range - The range to filter with
    *
    * @category Database
    * @subcategory Using filters
    *
    * @exampleDescription With `select()`
    * Postgres supports a number of [range
    * types](https://www.postgresql.org/docs/current/rangetypes.html). You
    * can filter on range columns using the string representation of range
    * values.
    *
    * @example With `select()`
    * ```ts
    * const { data, error } = await supabase
    *   .from('reservations')
    *   .select()
    *   .rangeAdjacent('during', '[2000-01-01 12:00, 2000-01-01 13:00)')
    * ```
    *
    * @exampleSql With `select()`
    * ```sql
    * create table
    *   reservations (
    *     id int8 primary key,
    *     room_name text,
    *     during tsrange
    *   );
    *
    * insert into
    *   reservations (id, room_name, during)
    * values
    *   (1, 'Emerald', '[2000-01-01 13:00, 2000-01-01 15:00)'),
    *   (2, 'Topaz', '[2000-01-02 09:00, 2000-01-02 10:00)');
    * ```
    *
    * @exampleResponse With `select()`
    * ```json
    * {
    *   "data": [
    *     {
    *       "id": 1,
    *       "room_name": "Emerald",
    *       "during": "[\"2000-01-01 13:00:00\",\"2000-01-01 15:00:00\")"
    *     }
    *   ],
    *   "status": 200,
    *   "statusText": "OK"
    * }
    * ```
    */
  }, {
    key: "rangeAdjacent",
    value: function rangeAdjacent(column, range) {
      this.url.searchParams.append(column, `adj.${range}`);
      return this;
    }
    /**
    * Only relevant for array and range columns. Match only rows where
    * `column` and `value` have an element in common.
    *
    * @param column - The array or range column to filter on
    * @param value - The array or range value to filter with
    *
    * @category Database
    * @subcategory Using filters
    *
    * @example On array columns
    * ```ts
    * const { data, error } = await supabase
    *   .from('issues')
    *   .select('title')
    *   .overlaps('tags', ['is:closed', 'severity:high'])
    * ```
    *
    * @exampleSql On array columns
    * ```sql
    * create table
    *   issues (
    *     id int8 primary key,
    *     title text,
    *     tags text[]
    *   );
    *
    * insert into
    *   issues (id, title, tags)
    * values
    *   (1, 'Cache invalidation is not working', array['is:open', 'severity:high', 'priority:low']),
    *   (2, 'Use better names', array['is:open', 'severity:low', 'priority:medium']);
    * ```
    *
    * @exampleResponse On array columns
    * ```json
    * {
    *   "data": [
    *     {
    *       "title": "Cache invalidation is not working"
    *     }
    *   ],
    *   "status": 200,
    *   "statusText": "OK"
    * }
    * ```
    *
    * @exampleDescription On range columns
    * Postgres supports a number of [range
    * types](https://www.postgresql.org/docs/current/rangetypes.html). You
    * can filter on range columns using the string representation of range
    * values.
    *
    * @example On range columns
    * ```ts
    * const { data, error } = await supabase
    *   .from('reservations')
    *   .select()
    *   .overlaps('during', '[2000-01-01 12:45, 2000-01-01 13:15)')
    * ```
    *
    * @exampleSql On range columns
    * ```sql
    * create table
    *   reservations (
    *     id int8 primary key,
    *     room_name text,
    *     during tsrange
    *   );
    *
    * insert into
    *   reservations (id, room_name, during)
    * values
    *   (1, 'Emerald', '[2000-01-01 13:00, 2000-01-01 15:00)'),
    *   (2, 'Topaz', '[2000-01-02 09:00, 2000-01-02 10:00)');
    * ```
    *
    * @exampleResponse On range columns
    * ```json
    * {
    *   "data": [
    *     {
    *       "id": 1,
    *       "room_name": "Emerald",
    *       "during": "[\"2000-01-01 13:00:00\",\"2000-01-01 15:00:00\")"
    *     }
    *   ],
    *   "status": 200,
    *   "statusText": "OK"
    * }
    * ```
    */
  }, {
    key: "overlaps",
    value: function overlaps(column, value) {
      if (typeof value === "string") this.url.searchParams.append(column, `ov.${value}`);else this.url.searchParams.append(column, `ov.{${value.join(",")}}`);
      return this;
    }
    /**
    * Only relevant for text and tsvector columns. Match only rows where
    * `column` matches the query string in `query`.
    *
    * @param column - The text or tsvector column to filter on
    * @param query - The query text to match with
    * @param options - Named parameters
    * @param options.config - The text search configuration to use
    * @param options.type - Change how the `query` text is interpreted
    *
    * @category Database
    * @subcategory Using filters
    *
    * @remarks
    * - For more information, see [Postgres full text search](/docs/guides/database/full-text-search).
    *
    * @example Text search
    * ```ts
    * const result = await supabase
    *   .from("texts")
    *   .select("content")
    *   .textSearch("content", `'eggs' & 'ham'`, {
    *     config: "english",
    *   });
    * ```
    *
    * @exampleSql Text search
    * ```sql
    * create table texts (
    *   id      bigint
    *           primary key
    *           generated always as identity,
    *   content text
    * );
    *
    * insert into texts (content) values
    *     ('Four score and seven years ago'),
    *     ('The road goes ever on and on'),
    *     ('Green eggs and ham')
    * ;
    * ```
    *
    * @exampleResponse Text search
    * ```json
    * {
    *   "data": [
    *     {
    *       "content": "Green eggs and ham"
    *     }
    *   ],
    *   "status": 200,
    *   "statusText": "OK"
    * }
    * ```
    *
    * @exampleDescription Basic normalization
    * Uses PostgreSQL's `plainto_tsquery` function.
    *
    * @example Basic normalization
    * ```ts
    * const { data, error } = await supabase
    *   .from('quotes')
    *   .select('catchphrase')
    *   .textSearch('catchphrase', `'fat' & 'cat'`, {
    *     type: 'plain',
    *     config: 'english'
    *   })
    * ```
    *
    * @exampleDescription Full normalization
    * Uses PostgreSQL's `phraseto_tsquery` function.
    *
    * @example Full normalization
    * ```ts
    * const { data, error } = await supabase
    *   .from('quotes')
    *   .select('catchphrase')
    *   .textSearch('catchphrase', `'fat' & 'cat'`, {
    *     type: 'phrase',
    *     config: 'english'
    *   })
    * ```
    *
    * @exampleDescription Websearch
    * Uses PostgreSQL's `websearch_to_tsquery` function.
    * This function will never raise syntax errors, which makes it possible to use raw user-supplied input for search, and can be used
    * with advanced operators.
    *
    * - `unquoted text`: text not inside quote marks will be converted to terms separated by & operators, as if processed by plainto_tsquery.
    * - `"quoted text"`: text inside quote marks will be converted to terms separated by `<->` operators, as if processed by phraseto_tsquery.
    * - `OR`: the word “or” will be converted to the | operator.
    * - `-`: a dash will be converted to the ! operator.
    *
    * @example Websearch
    * ```ts
    * const { data, error } = await supabase
    *   .from('quotes')
    *   .select('catchphrase')
    *   .textSearch('catchphrase', `'fat or cat'`, {
    *     type: 'websearch',
    *     config: 'english'
    *   })
    * ```
    */
  }, {
    key: "textSearch",
    value: function textSearch(column, query, {
      config: config3,
      type
    } = {}) {
      let typePart = "";
      if (type === "plain") typePart = "pl";else if (type === "phrase") typePart = "ph";else if (type === "websearch") typePart = "w";
      const configPart = config3 === void 0 ? "" : `(${config3})`;
      this.url.searchParams.append(column, `${typePart}fts${configPart}.${query}`);
      return this;
    }
    /**
    * Match only rows where each column in `query` keys is equal to its
    * associated value. Shorthand for multiple `.eq()`s.
    *
    * @param query - The object to filter with, with column names as keys mapped
    * to their filter values
    *
    * @category Database
    * @subcategory Using filters
    *
    * @example With `select()`
    * ```ts
    * const { data, error } = await supabase
    *   .from('characters')
    *   .select('name')
    *   .match({ id: 2, name: 'Leia' })
    * ```
    *
    * @exampleSql With `select()`
    * ```sql
    * create table
    *   characters (id int8 primary key, name text);
    *
    * insert into
    *   characters (id, name)
    * values
    *   (1, 'Luke'),
    *   (2, 'Leia'),
    *   (3, 'Han');
    * ```
    *
    * @exampleResponse With `select()`
    * ```json
    * {
    *   "data": [
    *     {
    *       "name": "Leia"
    *     }
    *   ],
    *   "status": 200,
    *   "statusText": "OK"
    * }
    * ```
    */
  }, {
    key: "match",
    value: function match(query) {
      Object.entries(query).filter(([_, value]) => value !== void 0).forEach(([column, value]) => {
        this.url.searchParams.append(column, `eq.${value}`);
      });
      return this;
    }
    /**
    * Match only rows which doesn't satisfy the filter.
    *
    * Unlike most filters, `opearator` and `value` are used as-is and need to
    * follow [PostgREST
    * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
    * to make sure they are properly sanitized.
    *
    * @param column - The column to filter on
    * @param operator - The operator to be negated to filter with, following
    * PostgREST syntax
    * @param value - The value to filter with, following PostgREST syntax
    *
    * @category Database
    * @subcategory Using filters
    *
    * @remarks
    * not() expects you to use the raw PostgREST syntax for the filter values.
    *
    * ```ts
    * .not('id', 'in', '(5,6,7)')  // Use `()` for `in` filter
    * .not('arraycol', 'cs', '{"a","b"}')  // Use `cs` for `contains()`, `{}` for array values
    * ```
    *
    * @example With `select()`
    * ```ts
    * const { data, error } = await supabase
    *   .from('countries')
    *   .select()
    *   .not('name', 'is', null)
    * ```
    *
    * @exampleSql With `select()`
    * ```sql
    * create table
    *   countries (id int8 primary key, name text);
    *
    * insert into
    *   countries (id, name)
    * values
    *   (1, 'null'),
    *   (2, null);
    * ```
    *
    * @exampleResponse With `select()`
    * ```json
    *   {
    *     "data": [
    *       {
    *         "id": 1,
    *         "name": "null"
    *       }
    *     ],
    *     "status": 200,
    *     "statusText": "OK"
    *   }
    *
    * ```
    */
  }, {
    key: "not",
    value: function not(column, operator, value) {
      this.url.searchParams.append(column, `not.${operator}.${value}`);
      return this;
    }
    /**
    * Match only rows which satisfy at least one of the filters.
    *
    * Unlike most filters, `filters` is used as-is and needs to follow [PostgREST
    * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
    * to make sure it's properly sanitized.
    *
    * It's currently not possible to do an `.or()` filter across multiple tables.
    *
    * @param filters - The filters to use, following PostgREST syntax
    * @param options - Named parameters
    * @param options.referencedTable - Set this to filter on referenced tables
    * instead of the parent table
    * @param options.foreignTable - Deprecated, use `referencedTable` instead
    *
    * @category Database
    * @subcategory Using filters
    *
    * @remarks
    * or() expects you to use the raw PostgREST syntax for the filter names and values.
    *
    * ```ts
    * .or('id.in.(5,6,7), arraycol.cs.{"a","b"}')  // Use `()` for `in` filter, `{}` for array values and `cs` for `contains()`.
    * .or('id.in.(5,6,7), arraycol.cd.{"a","b"}')  // Use `cd` for `containedBy()`
    * ```
    *
    * @example With `select()`
    * ```ts
    * const { data, error } = await supabase
    *   .from('characters')
    *   .select('name')
    *   .or('id.eq.2,name.eq.Han')
    * ```
    *
    * @exampleSql With `select()`
    * ```sql
    * create table
    *   characters (id int8 primary key, name text);
    *
    * insert into
    *   characters (id, name)
    * values
    *   (1, 'Luke'),
    *   (2, 'Leia'),
    *   (3, 'Han');
    * ```
    *
    * @exampleResponse With `select()`
    * ```json
    * {
    *   "data": [
    *     {
    *       "name": "Leia"
    *     },
    *     {
    *       "name": "Han"
    *     }
    *   ],
    *   "status": 200,
    *   "statusText": "OK"
    * }
    * ```
    *
    * @example Use `or` with `and`
    * ```ts
    * const { data, error } = await supabase
    *   .from('characters')
    *   .select('name')
    *   .or('id.gt.3,and(id.eq.1,name.eq.Luke)')
    * ```
    *
    * @exampleSql Use `or` with `and`
    * ```sql
    * create table
    *   characters (id int8 primary key, name text);
    *
    * insert into
    *   characters (id, name)
    * values
    *   (1, 'Luke'),
    *   (2, 'Leia'),
    *   (3, 'Han');
    * ```
    *
    * @exampleResponse Use `or` with `and`
    * ```json
    * {
    *   "data": [
    *     {
    *       "name": "Luke"
    *     }
    *   ],
    *   "status": 200,
    *   "statusText": "OK"
    * }
    * ```
    *
    * @example Use `or` on referenced tables
    * ```ts
    * const { data, error } = await supabase
    *   .from('orchestral_sections')
    *   .select(`
    *     name,
    *     instruments!inner (
    *       name
    *     )
    *   `)
    *   .or('section_id.eq.1,name.eq.guzheng', { referencedTable: 'instruments' })
    * ```
    *
    * @exampleSql Use `or` on referenced tables
    * ```sql
    * create table
    *   orchestral_sections (id int8 primary key, name text);
    * create table
    *   instruments (
    *     id int8 primary key,
    *     section_id int8 not null references orchestral_sections,
    *     name text
    *   );
    *
    * insert into
    *   orchestral_sections (id, name)
    * values
    *   (1, 'strings'),
    *   (2, 'woodwinds');
    * insert into
    *   instruments (id, section_id, name)
    * values
    *   (1, 2, 'flute'),
    *   (2, 1, 'violin');
    * ```
    *
    * @exampleResponse Use `or` on referenced tables
    * ```json
    * {
    *   "data": [
    *     {
    *       "name": "strings",
    *       "instruments": [
    *         {
    *           "name": "violin"
    *         }
    *       ]
    *     }
    *   ],
    *   "status": 200,
    *   "statusText": "OK"
    * }
    * ```
    */
  }, {
    key: "or",
    value: function or(filters, {
      foreignTable,
      referencedTable = foreignTable
    } = {}) {
      const key = referencedTable ? `${referencedTable}.or` : "or";
      this.url.searchParams.append(key, `(${filters})`);
      return this;
    }
    /**
    * Match only rows which satisfy the filter. This is an escape hatch - you
    * should use the specific filter methods wherever possible.
    *
    * Unlike most filters, `opearator` and `value` are used as-is and need to
    * follow [PostgREST
    * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
    * to make sure they are properly sanitized.
    *
    * @param column - The column to filter on
    * @param operator - The operator to filter with, following PostgREST syntax
    * @param value - The value to filter with, following PostgREST syntax
    *
    * @category Database
    * @subcategory Using filters
    *
    * @remarks
    * filter() expects you to use the raw PostgREST syntax for the filter values.
    *
    * ```ts
    * .filter('id', 'in', '(5,6,7)')  // Use `()` for `in` filter
    * .filter('arraycol', 'cs', '{"a","b"}')  // Use `cs` for `contains()`, `{}` for array values
    * ```
    *
    * @example With `select()`
    * ```ts
    * const { data, error } = await supabase
    *   .from('characters')
    *   .select()
    *   .filter('name', 'in', '("Han","Yoda")')
    * ```
    *
    * @exampleSql With `select()`
    * ```sql
    * create table
    *   characters (id int8 primary key, name text);
    *
    * insert into
    *   characters (id, name)
    * values
    *   (1, 'Luke'),
    *   (2, 'Leia'),
    *   (3, 'Han');
    * ```
    *
    * @exampleResponse With `select()`
    * ```json
    * {
    *   "data": [
    *     {
    *       "id": 3,
    *       "name": "Han"
    *     }
    *   ],
    *   "status": 200,
    *   "statusText": "OK"
    * }
    * ```
    *
    * @example On a referenced table
    * ```ts
    * const { data, error } = await supabase
    *   .from('orchestral_sections')
    *   .select(`
    *     name,
    *     instruments!inner (
    *       name
    *     )
    *   `)
    *   .filter('instruments.name', 'eq', 'flute')
    * ```
    *
    * @exampleSql On a referenced table
    * ```sql
    * create table
    *   orchestral_sections (id int8 primary key, name text);
    * create table
    *    instruments (
    *     id int8 primary key,
    *     section_id int8 not null references orchestral_sections,
    *     name text
    *   );
    *
    * insert into
    *   orchestral_sections (id, name)
    * values
    *   (1, 'strings'),
    *   (2, 'woodwinds');
    * insert into
    *   instruments (id, section_id, name)
    * values
    *   (1, 2, 'flute'),
    *   (2, 1, 'violin');
    * ```
    *
    * @exampleResponse On a referenced table
    * ```json
    * {
    *   "data": [
    *     {
    *       "name": "woodwinds",
    *       "instruments": [
    *         {
    *           "name": "flute"
    *         }
    *       ]
    *     }
    *   ],
    *   "status": 200,
    *   "statusText": "OK"
    * }
    * ```
    */
  }, {
    key: "filter",
    value: function filter(column, operator, value) {
      this.url.searchParams.append(column, `${operator}.${value}`);
      return this;
    }
  }]);
}(PostgrestTransformBuilder);
var PostgrestQueryBuilder = /*#__PURE__*/function () {
  /**
  * Creates a query builder scoped to a Postgres table or view.
  *
  * @category Database
  *
  * @param url - The URL for the query
  * @param options - Named parameters
  * @param options.headers - Custom headers
  * @param options.schema - Postgres schema to use
  * @param options.fetch - Custom fetch implementation
  * @param options.urlLengthLimit - Maximum URL length before warning
  * @param options.retry - Enable automatic retries for transient errors (default: true)
  *
  * @example Using supabase-js (recommended)
  * ```ts
  * import { createClient } from '@supabase/supabase-js'
  *
  * const supabase = createClient('https://xyzcompany.supabase.co', 'your-publishable-key')
  * const { data, error } = await supabase.from('users').select('*')
  * ```
  *
  * @example Standalone import for bundle-sensitive environments
  * ```ts
  * import { PostgrestQueryBuilder } from '@supabase/postgrest-js'
  *
  * const query = new PostgrestQueryBuilder(
  *   new URL('https://xyzcompany.supabase.co/rest/v1/users'),
  *   { headers: { apikey: 'your-publishable-key' }, retry: true }
  * )
  * ```
  */
  function PostgrestQueryBuilder(url, {
    headers = {},
    schema,
    fetch: fetch$1,
    urlLengthLimit = 8e3,
    retry
  }) {
    _classCallCheck(this, PostgrestQueryBuilder);
    this.url = url;
    this.headers = new Headers(headers);
    this.schema = schema;
    this.fetch = fetch$1;
    this.urlLengthLimit = urlLengthLimit;
    this.retry = retry;
  }
  /**
  * Clone URL and headers to prevent shared state between operations.
  */
  return _createClass(PostgrestQueryBuilder, [{
    key: "cloneRequestState",
    value: function cloneRequestState() {
      return {
        url: new URL(this.url.toString()),
        headers: new Headers(this.headers)
      };
    }
    /**
    * Perform a SELECT query on the table or view.
    *
    * @param columns - The columns to retrieve, separated by commas. Columns can be renamed when returned with `customName:columnName`
    *
    * @param options - Named parameters
    *
    * @param options.head - When set to `true`, `data` will not be returned.
    * Useful if you only need the count.
    *
    * @param options.count - Count algorithm to use to count rows in the table or view.
    *
    * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
    * hood.
    *
    * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
    * statistics under the hood.
    *
    * `"estimated"`: Uses exact count for low numbers and planned count for high
    * numbers.
    *
    * @remarks
    * When using `count` with `.range()` or `.limit()`, the returned `count` is the total number of rows
    * that match your filters, not the number of rows in the current page. Use this to build pagination UI.
    
    * - By default, Supabase projects return a maximum of 1,000 rows. This setting can be changed in your project's [API settings](/dashboard/project/_/settings/api). It's recommended that you keep it low to limit the payload size of accidental or malicious requests. You can use `range()` queries to paginate through your data.
    * - `select()` can be combined with [Filters](/docs/reference/javascript/using-filters)
    * - `select()` can be combined with [Modifiers](/docs/reference/javascript/using-modifiers)
    * - `apikey` is a reserved keyword if you're using the [Supabase Platform](/docs/guides/platform) and [should be avoided as a column name](https://github.com/supabase/supabase/issues/5465). *
    * @category Database
    *
    * @example Getting your data
    * ```js
    * const { data, error } = await supabase
    *   .from('characters')
    *   .select()
    * ```
    *
    * @exampleSql Getting your data
    * ```sql
    * create table
    *   characters (id int8 primary key, name text);
    *
    * insert into
    *   characters (id, name)
    * values
    *   (1, 'Harry'),
    *   (2, 'Frodo'),
    *   (3, 'Katniss');
    * ```
    *
    * @exampleResponse Getting your data
    * ```json
    * {
    *   "data": [
    *     {
    *       "id": 1,
    *       "name": "Harry"
    *     },
    *     {
    *       "id": 2,
    *       "name": "Frodo"
    *     },
    *     {
    *       "id": 3,
    *       "name": "Katniss"
    *     }
    *   ],
    *   "status": 200,
    *   "statusText": "OK"
    * }
    * ```
    *
    * @exampleDescription Handling errors
    * The most useful field on a Postgres error is usually `hint` — when the database knows the fix, it puts the literal SQL there. For example, a permission-denied error (`code: '42501'`) arrives with a `hint` like `"Grant the required privileges to the current role with: GRANT SELECT ON public.characters TO anon;"`. Log the full `error` object so the hint isn't hidden behind `error.message`.
    *
    * @example Handling errors
    * ```js
    * const { data, error } = await supabase.from('characters').select()
    * if (error) {
    *   // Logs the full error: message, code, details, and hint.
    *   console.error(error)
    *   return
    * }
    * ```
    *
    * @exampleResponse Handling errors
    * ```json
    * {
    *   "error": {
    *     "code": "42501",
    *     "details": null,
    *     "hint": "Grant the required privileges to the current role with: GRANT SELECT ON public.characters TO anon;",
    *     "message": "permission denied for table characters"
    *   },
    *   "status": 401,
    *   "statusText": "Unauthorized"
    * }
    * ```
    *
    * @example Selecting specific columns
    * ```js
    * const { data, error } = await supabase
    *   .from('characters')
    *   .select('name')
    * ```
    *
    * @exampleSql Selecting specific columns
    * ```sql
    * create table
    *   characters (id int8 primary key, name text);
    *
    * insert into
    *   characters (id, name)
    * values
    *   (1, 'Frodo'),
    *   (2, 'Harry'),
    *   (3, 'Katniss');
    * ```
    *
    * @exampleResponse Selecting specific columns
    * ```json
    * {
    *   "data": [
    *     {
    *       "name": "Frodo"
    *     },
    *     {
    *       "name": "Harry"
    *     },
    *     {
    *       "name": "Katniss"
    *     }
    *   ],
    *   "status": 200,
    *   "statusText": "OK"
    * }
    * ```
    *
    * @exampleDescription Query referenced tables
    * If your database has foreign key relationships, you can query related tables too.
    *
    * @example Query referenced tables
    * ```js
    * const { data, error } = await supabase
    *   .from('orchestral_sections')
    *   .select(`
    *     name,
    *     instruments (
    *       name
    *     )
    *   `)
    * ```
    *
    * @exampleSql Query referenced tables
    * ```sql
    * create table
    *   orchestral_sections (id int8 primary key, name text);
    * create table
    *   instruments (
    *     id int8 primary key,
    *     section_id int8 not null references orchestral_sections,
    *     name text
    *   );
    *
    * insert into
    *   orchestral_sections (id, name)
    * values
    *   (1, 'strings'),
    *   (2, 'woodwinds');
    * insert into
    *   instruments (id, section_id, name)
    * values
    *   (1, 2, 'flute'),
    *   (2, 1, 'violin');
    * ```
    *
    * @exampleResponse Query referenced tables
    * ```json
    * {
    *   "data": [
    *     {
    *       "name": "strings",
    *       "instruments": [
    *         {
    *           "name": "violin"
    *         }
    *       ]
    *     },
    *     {
    *       "name": "woodwinds",
    *       "instruments": [
    *         {
    *           "name": "flute"
    *         }
    *       ]
    *     }
    *   ],
    *   "status": 200,
    *   "statusText": "OK"
    * }
    * ```
    *
    * @exampleDescription Query referenced tables with spaces in their names
    * If your table name contains spaces, you must use double quotes in the `select` statement to reference the table.
    *
    * @example Query referenced tables with spaces in their names
    * ```js
    * const { data, error } = await supabase
    *   .from('orchestral sections')
    *   .select(`
    *     name,
    *     "musical instruments" (
    *       name
    *     )
    *   `)
    * ```
    *
    * @exampleSql Query referenced tables with spaces in their names
    * ```sql
    * create table
    *   "orchestral sections" (id int8 primary key, name text);
    * create table
    *   "musical instruments" (
    *     id int8 primary key,
    *     section_id int8 not null references "orchestral sections",
    *     name text
    *   );
    *
    * insert into
    *   "orchestral sections" (id, name)
    * values
    *   (1, 'strings'),
    *   (2, 'woodwinds');
    * insert into
    *   "musical instruments" (id, section_id, name)
    * values
    *   (1, 2, 'flute'),
    *   (2, 1, 'violin');
    * ```
    *
    * @exampleResponse Query referenced tables with spaces in their names
    * ```json
    * {
    *   "data": [
    *     {
    *       "name": "strings",
    *       "musical instruments": [
    *         {
    *           "name": "violin"
    *         }
    *       ]
    *     },
    *     {
    *       "name": "woodwinds",
    *       "musical instruments": [
    *         {
    *           "name": "flute"
    *         }
    *       ]
    *     }
    *   ],
    *   "status": 200,
    *   "statusText": "OK"
    * }
    * ```
    *
    * @exampleDescription Query referenced tables through a join table
    * If you're in a situation where your tables are **NOT** directly
    * related, but instead are joined by a _join table_, you can still use
    * the `select()` method to query the related data. The join table needs
    * to have the foreign keys as part of its composite primary key.
    *
    * @example Query referenced tables through a join table
    * ```ts
    * const { data, error } = await supabase
    *   .from('users')
    *   .select(`
    *     name,
    *     teams (
    *       name
    *     )
    *   `)
    *   
    * ```
    *
    * @exampleSql Query referenced tables through a join table
    * ```sql
    * create table
    *   users (
    *     id int8 primary key,
    *     name text
    *   );
    * create table
    *   teams (
    *     id int8 primary key,
    *     name text
    *   );
    * -- join table
    * create table
    *   users_teams (
    *     user_id int8 not null references users,
    *     team_id int8 not null references teams,
    *     -- both foreign keys must be part of a composite primary key
    *     primary key (user_id, team_id)
    *   );
    *
    * insert into
    *   users (id, name)
    * values
    *   (1, 'Kiran'),
    *   (2, 'Evan');
    * insert into
    *   teams (id, name)
    * values
    *   (1, 'Green'),
    *   (2, 'Blue');
    * insert into
    *   users_teams (user_id, team_id)
    * values
    *   (1, 1),
    *   (1, 2),
    *   (2, 2);
    * ```
    *
    * @exampleResponse Query referenced tables through a join table
    * ```json
    *   {
    *     "data": [
    *       {
    *         "name": "Kiran",
    *         "teams": [
    *           {
    *             "name": "Green"
    *           },
    *           {
    *             "name": "Blue"
    *           }
    *         ]
    *       },
    *       {
    *         "name": "Evan",
    *         "teams": [
    *           {
    *             "name": "Blue"
    *           }
    *         ]
    *       }
    *     ],
    *     "status": 200,
    *     "statusText": "OK"
    *   }
    *   
    * ```
    *
    * @exampleDescription Query the same referenced table multiple times
    * If you need to query the same referenced table twice, use the name of the
    * joined column to identify which join to use. You can also give each
    * column an alias.
    *
    * @example Query the same referenced table multiple times
    * ```ts
    * const { data, error } = await supabase
    *   .from('messages')
    *   .select(`
    *     content,
    *     from:sender_id(name),
    *     to:receiver_id(name)
    *   `)
    *
    * // To infer types, use the name of the table (in this case `users`) and
    * // the name of the foreign key constraint.
    * const { data, error } = await supabase
    *   .from('messages')
    *   .select(`
    *     content,
    *     from:users!messages_sender_id_fkey(name),
    *     to:users!messages_receiver_id_fkey(name)
    *   `)
    * ```
    *
    * @exampleSql Query the same referenced table multiple times
    * ```sql
    *  create table
    *  users (id int8 primary key, name text);
    *
    *  create table
    *    messages (
    *      sender_id int8 not null references users,
    *      receiver_id int8 not null references users,
    *      content text
    *    );
    *
    *  insert into
    *    users (id, name)
    *  values
    *    (1, 'Kiran'),
    *    (2, 'Evan');
    *
    *  insert into
    *    messages (sender_id, receiver_id, content)
    *  values
    *    (1, 2, '👋');
    *  ```
    * ```
    *
    * @exampleResponse Query the same referenced table multiple times
    * ```json
    * {
    *   "data": [
    *     {
    *       "content": "👋",
    *       "from": {
    *         "name": "Kiran"
    *       },
    *       "to": {
    *         "name": "Evan"
    *       }
    *     }
    *   ],
    *   "status": 200,
    *   "statusText": "OK"
    * }
    * ```
    *
    * @exampleDescription Query nested foreign tables through a join table
    * You can use the result of a joined table to gather data in
    * another foreign table. With multiple references to the same foreign
    * table you must specify the column on which to conduct the join.
    *
    * @example Query nested foreign tables through a join table
    * ```ts
    *   const { data, error } = await supabase
    *     .from('games')
    *     .select(`
    *       game_id:id,
    *       away_team:teams!games_away_team_fkey (
    *         users (
    *           id,
    *           name
    *         )
    *       )
    *     `)
    *   
    * ```
    *
    * @exampleSql Query nested foreign tables through a join table
    * ```sql
    * ```sql
    * create table
    *   users (
    *     id int8 primary key,
    *     name text
    *   );
    * create table
    *   teams (
    *     id int8 primary key,
    *     name text
    *   );
    * -- join table
    * create table
    *   users_teams (
    *     user_id int8 not null references users,
    *     team_id int8 not null references teams,
    *
    *     primary key (user_id, team_id)
    *   );
    * create table
    *   games (
    *     id int8 primary key,
    *     home_team int8 not null references teams,
    *     away_team int8 not null references teams,
    *     name text
    *   );
    *
    * insert into users (id, name)
    * values
    *   (1, 'Kiran'),
    *   (2, 'Evan');
    * insert into
    *   teams (id, name)
    * values
    *   (1, 'Green'),
    *   (2, 'Blue');
    * insert into
    *   users_teams (user_id, team_id)
    * values
    *   (1, 1),
    *   (1, 2),
    *   (2, 2);
    * insert into
    *   games (id, home_team, away_team, name)
    * values
    *   (1, 1, 2, 'Green vs Blue'),
    *   (2, 2, 1, 'Blue vs Green');
    * ```
    *
    * @exampleResponse Query nested foreign tables through a join table
    * ```json
    *   {
    *     "data": [
    *       {
    *         "game_id": 1,
    *         "away_team": {
    *           "users": [
    *             {
    *               "id": 1,
    *               "name": "Kiran"
    *             },
    *             {
    *               "id": 2,
    *               "name": "Evan"
    *             }
    *           ]
    *         }
    *       },
    *       {
    *         "game_id": 2,
    *         "away_team": {
    *           "users": [
    *             {
    *               "id": 1,
    *               "name": "Kiran"
    *             }
    *           ]
    *         }
    *       }
    *     ],
    *     "status": 200,
    *     "statusText": "OK"
    *   }
    *   
    * ```
    *
    * @exampleDescription Filtering through referenced tables
    * If the filter on a referenced table's column is not satisfied, the referenced
    * table returns `[]` or `null` but the parent table is not filtered out.
    * If you want to filter out the parent table rows, use the `!inner` hint
    *
    * @example Filtering through referenced tables
    * ```ts
    * const { data, error } = await supabase
    *   .from('instruments')
    *   .select('name, orchestral_sections(*)')
    *   .eq('orchestral_sections.name', 'percussion')
    * ```
    *
    * @exampleSql Filtering through referenced tables
    * ```sql
    * create table
    *   orchestral_sections (id int8 primary key, name text);
    * create table
    *   instruments (
    *     id int8 primary key,
    *     section_id int8 not null references orchestral_sections,
    *     name text
    *   );
    *
    * insert into
    *   orchestral_sections (id, name)
    * values
    *   (1, 'strings'),
    *   (2, 'woodwinds');
    * insert into
    *   instruments (id, section_id, name)
    * values
    *   (1, 2, 'flute'),
    *   (2, 1, 'violin');
    * ```
    *
    * @exampleResponse Filtering through referenced tables
    * ```json
    * {
    *   "data": [
    *     {
    *       "name": "flute",
    *       "orchestral_sections": null
    *     },
    *     {
    *       "name": "violin",
    *       "orchestral_sections": null
    *     }
    *   ],
    *   "status": 200,
    *   "statusText": "OK"
    * }
    * ```
    *
    * @exampleDescription Querying referenced table with count
    * You can get the number of rows in a related table by using the
    * **count** property.
    *
    * @example Querying referenced table with count
    * ```ts
    * const { data, error } = await supabase
    *   .from('orchestral_sections')
    *   .select(`*, instruments(count)`)
    * ```
    *
    * @exampleSql Querying referenced table with count
    * ```sql
    * create table orchestral_sections (
    *   "id" "uuid" primary key default "extensions"."uuid_generate_v4"() not null,
    *   "name" text
    * );
    *
    * create table characters (
    *   "id" "uuid" primary key default "extensions"."uuid_generate_v4"() not null,
    *   "name" text,
    *   "section_id" "uuid" references public.orchestral_sections on delete cascade
    * );
    *
    * with section as (
    *   insert into orchestral_sections (name)
    *   values ('strings') returning id
    * )
    * insert into instruments (name, section_id) values
    * ('violin', (select id from section)),
    * ('viola', (select id from section)),
    * ('cello', (select id from section)),
    * ('double bass', (select id from section));
    * ```
    *
    * @exampleResponse Querying referenced table with count
    * ```json
    * [
    *   {
    *     "id": "693694e7-d993-4360-a6d7-6294e325d9b6",
    *     "name": "strings",
    *     "instruments": [
    *       {
    *         "count": 4
    *       }
    *     ]
    *   }
    * ]
    * ```
    *
    * @exampleDescription Querying with count option
    * You can get the number of rows by using the
    * [count](/docs/reference/javascript/select#parameters) option.
    *
    * @example Querying with count option
    * ```ts
    * const { count, error } = await supabase
    *   .from('characters')
    *   .select('*', { count: 'exact', head: true })
    * ```
    *
    * @exampleSql Querying with count option
    * ```sql
    * create table
    *   characters (id int8 primary key, name text);
    *
    * insert into
    *   characters (id, name)
    * values
    *   (1, 'Luke'),
    *   (2, 'Leia'),
    *   (3, 'Han');
    * ```
    *
    * @exampleResponse Querying with count option
    * ```json
    * {
    *   "count": 3,
    *   "status": 200,
    *   "statusText": "OK"
    * }
    * ```
    *
    * @exampleDescription Querying JSON data
    * You can select and filter data inside of
    * [JSON](/docs/guides/database/json) columns. Postgres offers some
    * [operators](/docs/guides/database/json#query-the-jsonb-data) for
    * querying JSON data.
    *
    * @example Querying JSON data
    * ```ts
    * const { data, error } = await supabase
    *   .from('users')
    *   .select(`
    *     id, name,
    *     address->city
    *   `)
    * ```
    *
    * @exampleSql Querying JSON data
    * ```sql
    * create table
    *   users (
    *     id int8 primary key,
    *     name text,
    *     address jsonb
    *   );
    *
    * insert into
    *   users (id, name, address)
    * values
    *   (1, 'Frodo', '{"city":"Hobbiton"}');
    * ```
    *
    * @exampleResponse Querying JSON data
    * ```json
    * {
    *   "data": [
    *     {
    *       "id": 1,
    *       "name": "Frodo",
    *       "city": "Hobbiton"
    *     }
    *   ],
    *   "status": 200,
    *   "statusText": "OK"
    * }
    * ```
    *
    * @exampleDescription Querying referenced table with inner join
    * If you don't want to return the referenced table contents, you can leave the parenthesis empty.
    * Like `.select('name, orchestral_sections!inner()')`.
    *
    * @example Querying referenced table with inner join
    * ```ts
    * const { data, error } = await supabase
    *   .from('instruments')
    *   .select('name, orchestral_sections!inner(name)')
    *   .eq('orchestral_sections.name', 'woodwinds')
    *   .limit(1)
    * ```
    *
    * @exampleSql Querying referenced table with inner join
    * ```sql
    * create table orchestral_sections (
    *   "id" "uuid" primary key default "extensions"."uuid_generate_v4"() not null,
    *   "name" text
    * );
    *
    * create table instruments (
    *   "id" "uuid" primary key default "extensions"."uuid_generate_v4"() not null,
    *   "name" text,
    *   "section_id" "uuid" references public.orchestral_sections on delete cascade
    * );
    *
    * with section as (
    *   insert into orchestral_sections (name)
    *   values ('woodwinds') returning id
    * )
    * insert into instruments (name, section_id) values
    * ('flute', (select id from section)),
    * ('clarinet', (select id from section)),
    * ('bassoon', (select id from section)),
    * ('piccolo', (select id from section));
    * ```
    *
    * @exampleResponse Querying referenced table with inner join
    * ```json
    * {
    *   "data": [
    *     {
    *       "name": "flute",
    *       "orchestral_sections": {"name": "woodwinds"}
    *     }
    *   ],
    *   "status": 200,
    *   "statusText": "OK"
    * }
    * ```
    *
    * @exampleDescription Switching schemas per query
    * In addition to setting the schema during initialization, you can also switch schemas on a per-query basis.
    * Make sure you've set up your [database privileges and API settings](/docs/guides/api/using-custom-schemas).
    *
    * @example Switching schemas per query
    * ```ts
    * const { data, error } = await supabase
    *   .schema('myschema')
    *   .from('mytable')
    *   .select()
    * ```
    *
    * @exampleSql Switching schemas per query
    * ```sql
    * create schema myschema;
    *
    * create table myschema.mytable (
    *   id uuid primary key default gen_random_uuid(),
    *   data text
    * );
    *
    * insert into myschema.mytable (data) values ('mydata');
    * ```
    *
    * @exampleResponse Switching schemas per query
    * ```json
    * {
    *   "data": [
    *     {
    *       "id": "4162e008-27b0-4c0f-82dc-ccaeee9a624d",
    *       "data": "mydata"
    *     }
    *   ],
    *   "status": 200,
    *   "statusText": "OK"
    * }
    * ```
    */
  }, {
    key: "select",
    value: function select(columns, options) {
      const {
        head = false,
        count
      } = options !== null && options !== void 0 ? options : {};
      const method = head ? "HEAD" : "GET";
      let quoted = false;
      const cleanedColumns = (columns !== null && columns !== void 0 ? columns : "*").split("").map(c => {
        if (/\s/.test(c) && !quoted) return "";
        if (c === '"') quoted = !quoted;
        return c;
      }).join("");
      const {
        url,
        headers
      } = this.cloneRequestState();
      url.searchParams.set("select", cleanedColumns);
      if (count) headers.append("Prefer", `count=${count}`);
      return new PostgrestFilterBuilder({
        method,
        url,
        headers,
        schema: this.schema,
        fetch: this.fetch,
        urlLengthLimit: this.urlLengthLimit,
        retry: this.retry
      });
    }
    /**
    * Perform an INSERT into the table or view.
    *
    * By default, inserted rows are not returned. To return it, chain the call
    * with `.select()`.
    *
    * @param values - The values to insert. Pass an object to insert a single row
    * or an array to insert multiple rows.
    *
    * @param options - Named parameters
    *
    * @param options.count - Count algorithm to use to count inserted rows.
    *
    * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
    * hood.
    *
    * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
    * statistics under the hood.
    *
    * `"estimated"`: Uses exact count for low numbers and planned count for high
    * numbers.
    *
    * @param options.defaultToNull - Make missing fields default to `null`.
    * Otherwise, use the default value for the column. Only applies for bulk
    * inserts.
    *
    * @category Database
    *
    * @example Create a record
    * ```ts
    * const { error } = await supabase
    *   .from('countries')
    *   .insert({ id: 1, name: 'Mordor' })
    * ```
    *
    * @exampleSql Create a record
    * ```sql
    * create table
    *   countries (id int8 primary key, name text);
    * ```
    *
    * @exampleResponse Create a record
    * ```json
    * {
    *   "status": 201,
    *   "statusText": "Created"
    * }
    * ```
    *
    * @exampleDescription Handling errors
    * `error.hint` from Postgres often contains the actionable fix (e.g. `"Grant the required privileges to the current role with: GRANT INSERT ON public.countries TO anon;"` for a `42501` permission-denied error). Log the full `error` object so it isn't hidden behind `error.message`.
    *
    * @example Handling errors
    * ```js
    * const { error } = await supabase.from('countries').insert({ id: 1, name: 'Mordor' })
    * if (error) console.error(error)
    * ```
    *
    * @example Create a record and return it
    * ```ts
    * const { data, error } = await supabase
    *   .from('countries')
    *   .insert({ id: 1, name: 'Mordor' })
    *   .select()
    * ```
    *
    * @exampleSql Create a record and return it
    * ```sql
    * create table
    *   countries (id int8 primary key, name text);
    * ```
    *
    * @exampleResponse Create a record and return it
    * ```json
    * {
    *   "data": [
    *     {
    *       "id": 1,
    *       "name": "Mordor"
    *     }
    *   ],
    *   "status": 201,
    *   "statusText": "Created"
    * }
    * ```
    *
    * @exampleDescription Bulk create
    * A bulk create operation is handled in a single transaction.
    * If any of the inserts fail, none of the rows are inserted.
    *
    * @example Bulk create
    * ```ts
    * const { error } = await supabase
    *   .from('countries')
    *   .insert([
    *     { id: 1, name: 'Mordor' },
    *     { id: 1, name: 'The Shire' },
    *   ])
    * ```
    *
    * @exampleSql Bulk create
    * ```sql
    * create table
    *   countries (id int8 primary key, name text);
    * ```
    *
    * @exampleResponse Bulk create
    * ```json
    * {
    *   "error": {
    *     "code": "23505",
    *     "details": "Key (id)=(1) already exists.",
    *     "hint": null,
    *     "message": "duplicate key value violates unique constraint \"countries_pkey\""
    *   },
    *   "status": 409,
    *   "statusText": "Conflict"
    * }
    * ```
    */
  }, {
    key: "insert",
    value: function insert(values, {
      count,
      defaultToNull = true
    } = {}) {
      var _this$fetch;
      const method = "POST";
      const {
        url,
        headers
      } = this.cloneRequestState();
      if (count) headers.append("Prefer", `count=${count}`);
      if (!defaultToNull) headers.append("Prefer", `missing=default`);
      if (Array.isArray(values)) {
        const columns = values.reduce((acc, x) => acc.concat(Object.keys(x)), []);
        if (columns.length > 0) {
          const uniqueColumns = [...new Set(columns)].map(column => `"${column}"`);
          url.searchParams.set("columns", uniqueColumns.join(","));
        }
      }
      return new PostgrestFilterBuilder({
        method,
        url,
        headers,
        schema: this.schema,
        body: values,
        fetch: (_this$fetch = this.fetch) !== null && _this$fetch !== void 0 ? _this$fetch : fetch,
        urlLengthLimit: this.urlLengthLimit,
        retry: this.retry
      });
    }
    /**
    * Perform an UPSERT on the table or view. Depending on the column(s) passed
    * to `onConflict`, `.upsert()` allows you to perform the equivalent of
    * `.insert()` if a row with the corresponding `onConflict` columns doesn't
    * exist, or if it does exist, perform an alternative action depending on
    * `ignoreDuplicates`.
    *
    * By default, upserted rows are not returned. To return it, chain the call
    * with `.select()`.
    *
    * @param values - The values to upsert with. Pass an object to upsert a
    * single row or an array to upsert multiple rows.
    *
    * @param options - Named parameters
    *
    * @param options.onConflict - Comma-separated UNIQUE column(s) to specify how
    * duplicate rows are determined. Two rows are duplicates if all the
    * `onConflict` columns are equal.
    *
    * @param options.ignoreDuplicates - If `true`, duplicate rows are ignored. If
    * `false`, duplicate rows are merged with existing rows.
    *
    * @param options.count - Count algorithm to use to count upserted rows.
    *
    * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
    * hood.
    *
    * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
    * statistics under the hood.
    *
    * `"estimated"`: Uses exact count for low numbers and planned count for high
    * numbers.
    *
    * @param options.defaultToNull - Make missing fields default to `null`.
    * Otherwise, use the default value for the column. This only applies when
    * inserting new rows, not when merging with existing rows under
    * `ignoreDuplicates: false`. This also only applies when doing bulk upserts.
    *
    * @example Upsert a single row using a unique key
    * ```ts
    * // Upserting a single row, overwriting based on the 'username' unique column
    * const { data, error } = await supabase
    *   .from('users')
    *   .upsert({ username: 'supabot' }, { onConflict: 'username' })
    *
    * // Example response:
    * // {
    * //   data: [
    * //     { id: 4, message: 'bar', username: 'supabot' }
    * //   ],
    * //   error: null
    * // }
    * ```
    *
    * @example Upsert with conflict resolution and exact row counting
    * ```ts
    * // Upserting and returning exact count
    * const { data, error, count } = await supabase
    *   .from('users')
    *   .upsert(
    *     {
    *       id: 3,
    *       message: 'foo',
    *       username: 'supabot'
    *     },
    *     {
    *       onConflict: 'username',
    *       count: 'exact'
    *     }
    *   )
    *
    * // Example response:
    * // {
    * //   data: [
    * //     {
    * //       id: 42,
    * //       handle: "saoirse",
    * //       display_name: "Saoirse"
    * //     }
    * //   ],
    * //   count: 1,
    * //   error: null
    * // }
    * ```
    *
    * @category Database
    *
    * @remarks
    * - Primary keys must be included in `values` to use upsert.
    *
    * @example Upsert your data
    * ```ts
    * const { data, error } = await supabase
    *   .from('instruments')
    *   .upsert({ id: 1, name: 'piano' })
    *   .select()
    * ```
    *
    * @exampleSql Upsert your data
    * ```sql
    * create table
    *   instruments (id int8 primary key, name text);
    *
    * insert into
    *   instruments (id, name)
    * values
    *   (1, 'harpsichord');
    * ```
    *
    * @exampleResponse Upsert your data
    * ```json
    * {
    *   "data": [
    *     {
    *       "id": 1,
    *       "name": "piano"
    *     }
    *   ],
    *   "status": 201,
    *   "statusText": "Created"
    * }
    * ```
    *
    * @exampleDescription Handling errors
    * `error.hint` from Postgres often contains the actionable fix (e.g. `"Grant the required privileges to the current role with: GRANT INSERT, UPDATE ON public.instruments TO anon;"` for a `42501` permission-denied error). Log the full `error` object so it isn't hidden behind `error.message`.
    *
    * @example Handling errors
    * ```js
    * const { data, error } = await supabase.from('instruments').upsert({ id: 1, name: 'piano' }).select()
    * if (error) console.error(error)
    * ```
    *
    * @example Bulk Upsert your data
    * ```ts
    * const { data, error } = await supabase
    *   .from('instruments')
    *   .upsert([
    *     { id: 1, name: 'piano' },
    *     { id: 2, name: 'harp' },
    *   ])
    *   .select()
    * ```
    *
    * @exampleSql Bulk Upsert your data
    * ```sql
    * create table
    *   instruments (id int8 primary key, name text);
    *
    * insert into
    *   instruments (id, name)
    * values
    *   (1, 'harpsichord');
    * ```
    *
    * @exampleResponse Bulk Upsert your data
    * ```json
    * {
    *   "data": [
    *     {
    *       "id": 1,
    *       "name": "piano"
    *     },
    *     {
    *       "id": 2,
    *       "name": "harp"
    *     }
    *   ],
    *   "status": 201,
    *   "statusText": "Created"
    * }
    * ```
    *
    * @exampleDescription Upserting into tables with constraints
    * In the following query, `upsert()` implicitly uses the `id`
    * (primary key) column to determine conflicts. If there is no existing
    * row with the same `id`, `upsert()` inserts a new row, which
    * will fail in this case as there is already a row with `handle` `"saoirse"`.
    * Using the `onConflict` option, you can instruct `upsert()` to use
    * another column with a unique constraint to determine conflicts.
    *
    * @example Upserting into tables with constraints
    * ```ts
    * const { data, error } = await supabase
    *   .from('users')
    *   .upsert({ id: 42, handle: 'saoirse', display_name: 'Saoirse' })
    *   .select()
    * ```
    *
    * @exampleSql Upserting into tables with constraints
    * ```sql
    * create table
    *   users (
    *     id int8 generated by default as identity primary key,
    *     handle text not null unique,
    *     display_name text
    *   );
    *
    * insert into
    *   users (id, handle, display_name)
    * values
    *   (1, 'saoirse', null);
    * ```
    *
    * @exampleResponse Upserting into tables with constraints
    * ```json
    * {
    *   "error": {
    *     "code": "23505",
    *     "details": "Key (handle)=(saoirse) already exists.",
    *     "hint": null,
    *     "message": "duplicate key value violates unique constraint \"users_handle_key\""
    *   },
    *   "status": 409,
    *   "statusText": "Conflict"
    * }
    * ```
    */
  }, {
    key: "upsert",
    value: function upsert(values, {
      onConflict,
      ignoreDuplicates = false,
      count,
      defaultToNull = true
    } = {}) {
      var _this$fetch2;
      const method = "POST";
      const {
        url,
        headers
      } = this.cloneRequestState();
      headers.append("Prefer", `resolution=${ignoreDuplicates ? "ignore" : "merge"}-duplicates`);
      if (onConflict !== void 0) url.searchParams.set("on_conflict", onConflict);
      if (count) headers.append("Prefer", `count=${count}`);
      if (!defaultToNull) headers.append("Prefer", "missing=default");
      if (Array.isArray(values)) {
        const columns = values.reduce((acc, x) => acc.concat(Object.keys(x)), []);
        if (columns.length > 0) {
          const uniqueColumns = [...new Set(columns)].map(column => `"${column}"`);
          url.searchParams.set("columns", uniqueColumns.join(","));
        }
      }
      return new PostgrestFilterBuilder({
        method,
        url,
        headers,
        schema: this.schema,
        body: values,
        fetch: (_this$fetch2 = this.fetch) !== null && _this$fetch2 !== void 0 ? _this$fetch2 : fetch,
        urlLengthLimit: this.urlLengthLimit,
        retry: this.retry
      });
    }
    /**
    * Perform an UPDATE on the table or view.
    *
    * By default, updated rows are not returned. To return it, chain the call
    * with `.select()` after filters.
    *
    * @param values - The values to update with
    *
    * @param options - Named parameters
    *
    * @param options.count - Count algorithm to use to count updated rows.
    *
    * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
    * hood.
    *
    * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
    * statistics under the hood.
    *
    * `"estimated"`: Uses exact count for low numbers and planned count for high
    * numbers.
    *
    * @category Database
    *
    * @remarks
    * - `update()` should always be combined with [Filters](/docs/reference/javascript/using-filters) to target the item(s) you wish to update.
    *
    * @example Updating your data
    * ```ts
    * const { error } = await supabase
    *   .from('instruments')
    *   .update({ name: 'piano' })
    *   .eq('id', 1)
    * ```
    *
    * @exampleSql Updating your data
    * ```sql
    * create table
    *   instruments (id int8 primary key, name text);
    *
    * insert into
    *   instruments (id, name)
    * values
    *   (1, 'harpsichord');
    * ```
    *
    * @exampleResponse Updating your data
    * ```json
    * {
    *   "status": 204,
    *   "statusText": "No Content"
    * }
    * ```
    *
    * @exampleDescription Handling errors
    * `error.hint` from Postgres often contains the actionable fix (e.g. `"Grant the required privileges to the current role with: GRANT UPDATE ON public.instruments TO anon;"` for a `42501` permission-denied error). Log the full `error` object so it isn't hidden behind `error.message`.
    *
    * @example Handling errors
    * ```js
    * const { error } = await supabase.from('instruments').update({ name: 'piano' }).eq('id', 1)
    * if (error) console.error(error)
    * ```
    *
    * @example Update a record and return it
    * ```ts
    * const { data, error } = await supabase
    *   .from('instruments')
    *   .update({ name: 'piano' })
    *   .eq('id', 1)
    *   .select()
    * ```
    *
    * @exampleSql Update a record and return it
    * ```sql
    * create table
    *   instruments (id int8 primary key, name text);
    *
    * insert into
    *   instruments (id, name)
    * values
    *   (1, 'harpsichord');
    * ```
    *
    * @exampleResponse Update a record and return it
    * ```json
    * {
    *   "data": [
    *     {
    *       "id": 1,
    *       "name": "piano"
    *     }
    *   ],
    *   "status": 200,
    *   "statusText": "OK"
    * }
    * ```
    *
    * @exampleDescription Updating JSON data
    * Postgres offers some
    * [operators](/docs/guides/database/json#query-the-jsonb-data) for
    * working with JSON data. Currently, it is only possible to update the entire JSON document.
    *
    * @example Updating JSON data
    * ```ts
    * const { data, error } = await supabase
    *   .from('users')
    *   .update({
    *     address: {
    *       street: 'Melrose Place',
    *       postcode: 90210
    *     }
    *   })
    *   .eq('address->postcode', 90210)
    *   .select()
    * ```
    *
    * @exampleSql Updating JSON data
    * ```sql
    * create table
    *   users (
    *     id int8 primary key,
    *     name text,
    *     address jsonb
    *   );
    *
    * insert into
    *   users (id, name, address)
    * values
    *   (1, 'Michael', '{ "postcode": 90210 }');
    * ```
    *
    * @exampleResponse Updating JSON data
    * ```json
    * {
    *   "data": [
    *     {
    *       "id": 1,
    *       "name": "Michael",
    *       "address": {
    *         "street": "Melrose Place",
    *         "postcode": 90210
    *       }
    *     }
    *   ],
    *   "status": 200,
    *   "statusText": "OK"
    * }
    * ```
    */
  }, {
    key: "update",
    value: function update(values, {
      count
    } = {}) {
      var _this$fetch3;
      const method = "PATCH";
      const {
        url,
        headers
      } = this.cloneRequestState();
      if (count) headers.append("Prefer", `count=${count}`);
      return new PostgrestFilterBuilder({
        method,
        url,
        headers,
        schema: this.schema,
        body: values,
        fetch: (_this$fetch3 = this.fetch) !== null && _this$fetch3 !== void 0 ? _this$fetch3 : fetch,
        urlLengthLimit: this.urlLengthLimit,
        retry: this.retry
      });
    }
    /**
    * Perform a DELETE on the table or view.
    *
    * By default, deleted rows are not returned. To return it, chain the call
    * with `.select()` after filters.
    *
    * @param options - Named parameters
    *
    * @param options.count - Count algorithm to use to count deleted rows.
    *
    * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
    * hood.
    *
    * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
    * statistics under the hood.
    *
    * `"estimated"`: Uses exact count for low numbers and planned count for high
    * numbers.
    *
    * @category Database
    *
    * @remarks
    * - `delete()` should always be combined with [filters](/docs/reference/javascript/using-filters) to target the item(s) you wish to delete.
    * - If you use `delete()` with filters and you have
    *   [RLS](/docs/learn/auth-deep-dive/auth-row-level-security) enabled, only
    *   rows visible through `SELECT` policies are deleted. Note that by default
    *   no rows are visible, so you need at least one `SELECT`/`ALL` policy that
    *   makes the rows visible.
    * - When using `delete().in()`, specify an array of values to target multiple rows with a single query. This is particularly useful for batch deleting entries that share common criteria, such as deleting users by their IDs. Ensure that the array you provide accurately represents all records you intend to delete to avoid unintended data removal.
    *
    * @example Delete a single record
    * ```ts
    * const response = await supabase
    *   .from('countries')
    *   .delete()
    *   .eq('id', 1)
    * ```
    *
    * @exampleSql Delete a single record
    * ```sql
    * create table
    *   countries (id int8 primary key, name text);
    *
    * insert into
    *   countries (id, name)
    * values
    *   (1, 'Mordor');
    * ```
    *
    * @exampleResponse Delete a single record
    * ```json
    * {
    *   "status": 204,
    *   "statusText": "No Content"
    * }
    * ```
    *
    * @exampleDescription Handling errors
    * `error.hint` from Postgres often contains the actionable fix (e.g. `"Grant the required privileges to the current role with: GRANT DELETE ON public.countries TO anon;"` for a `42501` permission-denied error). Log the full `error` object so it isn't hidden behind `error.message`.
    *
    * @example Handling errors
    * ```js
    * const { error } = await supabase.from('countries').delete().eq('id', 1)
    * if (error) console.error(error)
    * ```
    *
    * @example Delete a record and return it
    * ```ts
    * const { data, error } = await supabase
    *   .from('countries')
    *   .delete()
    *   .eq('id', 1)
    *   .select()
    * ```
    *
    * @exampleSql Delete a record and return it
    * ```sql
    * create table
    *   countries (id int8 primary key, name text);
    *
    * insert into
    *   countries (id, name)
    * values
    *   (1, 'Mordor');
    * ```
    *
    * @exampleResponse Delete a record and return it
    * ```json
    * {
    *   "data": [
    *     {
    *       "id": 1,
    *       "name": "Mordor"
    *     }
    *   ],
    *   "status": 200,
    *   "statusText": "OK"
    * }
    * ```
    *
    * @example Delete multiple records
    * ```ts
    * const response = await supabase
    *   .from('countries')
    *   .delete()
    *   .in('id', [1, 2, 3])
    * ```
    *
    * @exampleSql Delete multiple records
    * ```sql
    * create table
    *   countries (id int8 primary key, name text);
    *
    * insert into
    *   countries (id, name)
    * values
    *   (1, 'Rohan'), (2, 'The Shire'), (3, 'Mordor');
    * ```
    *
    * @exampleResponse Delete multiple records
    * ```json
    * {
    *   "status": 204,
    *   "statusText": "No Content"
    * }
    * ```
    */
  }, {
    key: "delete",
    value: function _delete({
      count
    } = {}) {
      var _this$fetch4;
      const method = "DELETE";
      const {
        url,
        headers
      } = this.cloneRequestState();
      if (count) headers.append("Prefer", `count=${count}`);
      return new PostgrestFilterBuilder({
        method,
        url,
        headers,
        schema: this.schema,
        fetch: (_this$fetch4 = this.fetch) !== null && _this$fetch4 !== void 0 ? _this$fetch4 : fetch,
        urlLengthLimit: this.urlLengthLimit,
        retry: this.retry
      });
    }
  }]);
}();
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o$1) {
    return typeof o$1;
  } : function (o$1) {
    return o$1 && "function" == typeof Symbol && o$1.constructor === Symbol && o$1 !== Symbol.prototype ? "symbol" : typeof o$1;
  }, _typeof(o);
}
function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _defineProperty(e, r, t) {
  return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r$1) {
      return Object.getOwnPropertyDescriptor(e, r$1).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function (r$1) {
      _defineProperty(e, r$1, t[r$1]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r$1) {
      Object.defineProperty(e, r$1, Object.getOwnPropertyDescriptor(t, r$1));
    });
  }
  return e;
}
var PostgrestClient = /*#__PURE__*/function () {
  /**
  * Creates a PostgREST client.
  *
  * @param url - URL of the PostgREST endpoint
  * @param options - Named parameters
  * @param options.headers - Custom headers
  * @param options.schema - Postgres schema to switch to
  * @param options.fetch - Custom fetch
  * @param options.timeout - Optional timeout in milliseconds for all requests. When set, requests will automatically abort after this duration to prevent indefinite hangs.
  * @param options.urlLengthLimit - Maximum URL length in characters before warnings/errors are triggered. Defaults to 8000.
  * @param options.retry - Enable or disable automatic retries for transient errors.
  *   When enabled, idempotent requests (GET, HEAD, OPTIONS) that fail with network
  *   errors or HTTP 503/520 responses will be automatically retried up to 3 times
  *   with exponential backoff (1s, 2s, 4s). Defaults to `true`.
  * @example Using supabase-js (recommended)
  * ```ts
  * import { createClient } from '@supabase/supabase-js'
  *
  * const supabase = createClient('https://xyzcompany.supabase.co', 'your-publishable-key')
  * const { data, error } = await supabase.from('profiles').select('*')
  * ```
  *
  * @category Database
  *
  * @remarks
  * - A `timeout` option (in milliseconds) can be set to automatically abort requests that take too long.
  * - A `urlLengthLimit` option (default: 8000) can be set to control when URL length warnings are included in error messages for aborted requests.
  *
  * @example Standalone import for bundle-sensitive environments
  * ```ts
  * import { PostgrestClient } from '@supabase/postgrest-js'
  *
  * const postgrest = new PostgrestClient('https://xyzcompany.supabase.co/rest/v1', {
  *   headers: { apikey: 'your-publishable-key' },
  *   schema: 'public',
  *   timeout: 30000, // 30 second timeout
  * })
  * ```
  */
  function PostgrestClient2(url, {
    headers = {},
    schema,
    fetch: fetch$1,
    timeout,
    urlLengthLimit = 8e3,
    retry
  } = {}) {
    _classCallCheck(this, PostgrestClient2);
    this.url = url;
    this.headers = new Headers(headers);
    this.schemaName = schema;
    this.urlLengthLimit = urlLengthLimit;
    const originalFetch = fetch$1 !== null && fetch$1 !== void 0 ? fetch$1 : globalThis.fetch;
    if (timeout !== void 0 && timeout > 0) this.fetch = (input, init) => {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), timeout);
      const existingSignal = init === null || init === void 0 ? void 0 : init.signal;
      if (existingSignal) {
        if (existingSignal.aborted) {
          clearTimeout(timeoutId);
          return originalFetch(input, init);
        }
        const abortHandler = () => {
          clearTimeout(timeoutId);
          controller.abort();
        };
        existingSignal.addEventListener("abort", abortHandler, {
          once: true
        });
        return originalFetch(input, _objectSpread2(_objectSpread2({}, init), {}, {
          signal: controller.signal
        })).finally(() => {
          clearTimeout(timeoutId);
          existingSignal.removeEventListener("abort", abortHandler);
        });
      }
      return originalFetch(input, _objectSpread2(_objectSpread2({}, init), {}, {
        signal: controller.signal
      })).finally(() => clearTimeout(timeoutId));
    };else this.fetch = originalFetch;
    this.retry = retry;
  }
  /**
  * Perform a query on a table or a view.
  *
  * @param relation - The table or view name to query
  *
  * @category Database
  */
  return _createClass(PostgrestClient2, [{
    key: "from",
    value: function from(relation) {
      if (!relation || typeof relation !== "string" || relation.trim() === "") throw new Error("Invalid relation name: relation must be a non-empty string.");
      return new PostgrestQueryBuilder(new URL(`${this.url}/${relation}`), {
        headers: new Headers(this.headers),
        schema: this.schemaName,
        fetch: this.fetch,
        urlLengthLimit: this.urlLengthLimit,
        retry: this.retry
      });
    }
    /**
    * Select a schema to query or perform an function (rpc) call.
    *
    * The schema needs to be on the list of exposed schemas inside Supabase.
    *
    * @param schema - The schema to query
    *
    * @category Database
    */
  }, {
    key: "schema",
    value: function schema(_schema) {
      return new PostgrestClient2(this.url, {
        headers: this.headers,
        schema: _schema,
        fetch: this.fetch,
        urlLengthLimit: this.urlLengthLimit,
        retry: this.retry
      });
    }
    /**
    * Perform a function call.
    *
    * @param fn - The function name to call
    * @param args - The arguments to pass to the function call
    * @param options - Named parameters
    * @param options.head - When set to `true`, `data` will not be returned.
    * Useful if you only need the count.
    * @param options.get - When set to `true`, the function will be called with
    * read-only access mode.
    * @param options.count - Count algorithm to use to count rows returned by the
    * function. Only applicable for [set-returning
    * functions](https://www.postgresql.org/docs/current/functions-srf.html).
    *
    * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
    * hood.
    *
    * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
    * statistics under the hood.
    *
    * `"estimated"`: Uses exact count for low numbers and planned count for high
    * numbers.
    *
    * @example
    * ```ts
    * // For cross-schema functions where type inference fails, use overrideTypes:
    * const { data } = await supabase
    *   .schema('schema_b')
    *   .rpc('function_a', {})
    *   .overrideTypes<{ id: string; user_id: string }[]>()
    * ```
    *
    * @category Database
    *
    * @example Call a Postgres function without arguments
    * ```ts
    * const { data, error } = await supabase.rpc('hello_world')
    * ```
    *
    * @exampleSql Call a Postgres function without arguments
    * ```sql
    * create function hello_world() returns text as $$
    *   select 'Hello world';
    * $$ language sql;
    * ```
    *
    * @exampleResponse Call a Postgres function without arguments
    * ```json
    * {
    *   "data": "Hello world",
    *   "status": 200,
    *   "statusText": "OK"
    * }
    * ```
    *
    * @example Call a Postgres function with arguments
    * ```ts
    * const { data, error } = await supabase.rpc('echo', { say: '👋' })
    * ```
    *
    * @exampleSql Call a Postgres function with arguments
    * ```sql
    * create function echo(say text) returns text as $$
    *   select say;
    * $$ language sql;
    * ```
    *
    * @exampleResponse Call a Postgres function with arguments
    * ```json
    *   {
    *     "data": "👋",
    *     "status": 200,
    *     "statusText": "OK"
    *   }
    *
    * ```
    *
    * @exampleDescription Bulk processing
    * You can process large payloads by passing in an array as an argument.
    *
    * @example Bulk processing
    * ```ts
    * const { data, error } = await supabase.rpc('add_one_each', { arr: [1, 2, 3] })
    * ```
    *
    * @exampleSql Bulk processing
    * ```sql
    * create function add_one_each(arr int[]) returns int[] as $$
    *   select array_agg(n + 1) from unnest(arr) as n;
    * $$ language sql;
    * ```
    *
    * @exampleResponse Bulk processing
    * ```json
    * {
    *   "data": [
    *     2,
    *     3,
    *     4
    *   ],
    *   "status": 200,
    *   "statusText": "OK"
    * }
    * ```
    *
    * @exampleDescription Call a Postgres function with filters
    * Postgres functions that return tables can also be combined with [Filters](/docs/reference/javascript/using-filters) and [Modifiers](/docs/reference/javascript/using-modifiers).
    *
    * @example Call a Postgres function with filters
    * ```ts
    * const { data, error } = await supabase
    *   .rpc('list_stored_countries')
    *   .eq('id', 1)
    *   .single()
    * ```
    *
    * @exampleSql Call a Postgres function with filters
    * ```sql
    * create table
    *   countries (id int8 primary key, name text);
    *
    * insert into
    *   countries (id, name)
    * values
    *   (1, 'Rohan'),
    *   (2, 'The Shire');
    *
    * create function list_stored_countries() returns setof countries as $$
    *   select * from countries;
    * $$ language sql;
    * ```
    *
    * @exampleResponse Call a Postgres function with filters
    * ```json
    * {
    *   "data": {
    *     "id": 1,
    *     "name": "Rohan"
    *   },
    *   "status": 200,
    *   "statusText": "OK"
    * }
    * ```
    *
    * @example Call a read-only Postgres function
    * ```ts
    * const { data, error } = await supabase.rpc('hello_world', undefined, { get: true })
    * ```
    *
    * @exampleSql Call a read-only Postgres function
    * ```sql
    * create function hello_world() returns text as $$
    *   select 'Hello world';
    * $$ language sql;
    * ```
    *
    * @exampleResponse Call a read-only Postgres function
    * ```json
    * {
    *   "data": "Hello world",
    *   "status": 200,
    *   "statusText": "OK"
    * }
    * ```
    */
  }, {
    key: "rpc",
    value: function rpc(fn, args = {}, {
      head = false,
      get = false,
      count
    } = {}) {
      var _this$fetch;
      let method;
      const url = new URL(`${this.url}/rpc/${fn}`);
      let body;
      const _isObject = v => v !== null && typeof v === "object" && (!Array.isArray(v) || v.some(_isObject));
      const _hasObjectArg = head && Object.values(args).some(_isObject);
      if (_hasObjectArg) {
        method = "POST";
        body = args;
      } else if (head || get) {
        method = head ? "HEAD" : "GET";
        Object.entries(args).filter(([_, value]) => value !== void 0).map(([name, value]) => [name, Array.isArray(value) ? `{${value.join(",")}}` : `${value}`]).forEach(([name, value]) => {
          url.searchParams.append(name, value);
        });
      } else {
        method = "POST";
        body = args;
      }
      const headers = new Headers(this.headers);
      if (_hasObjectArg) headers.set("Prefer", count ? `count=${count},return=minimal` : "return=minimal");else if (count) headers.set("Prefer", `count=${count}`);
      return new PostgrestFilterBuilder({
        method,
        url,
        headers,
        schema: this.schemaName,
        body,
        fetch: (_this$fetch = this.fetch) !== null && _this$fetch !== void 0 ? _this$fetch : fetch,
        urlLengthLimit: this.urlLengthLimit,
        retry: this.retry
      });
    }
  }]);
}();

// node_modules/.pnpm/@supabase+realtime-js@2.108.1/node_modules/@supabase/realtime-js/dist/module/lib/websocket-factory.js
var WebSocketFactory = /*#__PURE__*/function () {
  /**
   * Static-only utility – prevent instantiation.
   */
  function WebSocketFactory() {
    _classCallCheck(this, WebSocketFactory);
  }
  return _createClass(WebSocketFactory, null, [{
    key: "detectEnvironment",
    value: function detectEnvironment() {
      var _a;
      if (typeof WebSocket !== "undefined") {
        return {
          type: "native",
          wsConstructor: WebSocket
        };
      }
      const gt = globalThis;
      if (typeof globalThis !== "undefined" && typeof gt.WebSocket !== "undefined") {
        return {
          type: "native",
          wsConstructor: gt.WebSocket
        };
      }
      const gl = typeof window !== "undefined" ? window : void 0;
      if (gl && typeof gl.WebSocket !== "undefined") {
        return {
          type: "native",
          wsConstructor: gl.WebSocket
        };
      }
      if (typeof globalThis !== "undefined" && typeof gt.WebSocketPair !== "undefined" && typeof globalThis.WebSocket === "undefined") {
        return {
          type: "cloudflare",
          error: "Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",
          workaround: "Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."
        };
      }
      if (typeof globalThis !== "undefined" && gt.EdgeRuntime || typeof navigator !== "undefined" && ((_a = navigator.userAgent) === null || _a === void 0 ? void 0 : _a.includes("Vercel-Edge"))) {
        return {
          type: "unsupported",
          error: "Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",
          workaround: "Use serverless functions or a different deployment target for WebSocket functionality."
        };
      }
      const _process = globalThis["process"];
      if (_process) {
        const processVersions = _process["versions"];
        if (processVersions && processVersions["node"]) {
          const versionString = processVersions["node"];
          const nodeVersion = parseInt(versionString.replace(/^v/, "").split(".")[0]);
          if (nodeVersion >= 22) {
            if (typeof globalThis.WebSocket !== "undefined") {
              return {
                type: "native",
                wsConstructor: globalThis.WebSocket
              };
            }
            return {
              type: "unsupported",
              error: `Node.js ${nodeVersion} detected but native WebSocket not found.`,
              workaround: "Provide a WebSocket implementation via the transport option."
            };
          }
          return {
            type: "unsupported",
            error: `Node.js ${nodeVersion} detected without native WebSocket support.`,
            workaround: 'For Node.js < 22, install "ws" package and provide it via the transport option:\nimport ws from "ws"\nnew RealtimeClient(url, { transport: ws })'
          };
        }
      }
      return {
        type: "unsupported",
        error: "Unknown JavaScript runtime without WebSocket support.",
        workaround: "Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."
      };
    }
    /**
     * Returns the best available WebSocket constructor for the current runtime.
     *
     * @category Realtime
     *
     * @example Example with error handling
     * ```ts
     * try {
     *   const WS = WebSocketFactory.getWebSocketConstructor()
     *   const socket = new WS('wss://example.com/socket')
     * } catch (error) {
     *   console.error('WebSocket not available in this environment.', error)
     * }
     * ```
     */
  }, {
    key: "getWebSocketConstructor",
    value: function getWebSocketConstructor() {
      const env = this.detectEnvironment();
      if (env.wsConstructor) {
        return env.wsConstructor;
      }
      let errorMessage = env.error || "WebSocket not supported in this environment.";
      if (env.workaround) {
        errorMessage += `

Suggested solution: ${env.workaround}`;
      }
      throw new Error(errorMessage);
    }
    /**
     * Detects whether the runtime can establish WebSocket connections.
     *
     * @category Realtime
     *
     * @example Example in a Node.js script
     * ```ts
     * if (!WebSocketFactory.isWebSocketSupported()) {
     *   console.error('WebSockets are required for this script.')
     *   process.exitCode = 1
     * }
     * ```
     */
  }, {
    key: "isWebSocketSupported",
    value: function isWebSocketSupported() {
      try {
        const env = this.detectEnvironment();
        return env.type === "native" || env.type === "ws";
      } catch (_a) {
        return false;
      }
    }
  }]);
}();
var websocket_factory_default = WebSocketFactory;

// node_modules/.pnpm/@supabase+realtime-js@2.108.1/node_modules/@supabase/realtime-js/dist/module/lib/version.js
var version = "2.108.1";

// node_modules/.pnpm/@supabase+realtime-js@2.108.1/node_modules/@supabase/realtime-js/dist/module/lib/constants.js
var DEFAULT_VERSION = `realtime-js/${version}`;
var VSN_1_0_0 = "1.0.0";
var VSN_2_0_0 = "2.0.0";
var DEFAULT_VSN = VSN_2_0_0;
var DEFAULT_TIMEOUT = 1e4;
var MAX_PUSH_BUFFER_SIZE = 100;
var CHANNEL_STATES = {
  closed: "closed",
  errored: "errored",
  joined: "joined",
  joining: "joining",
  leaving: "leaving"
};
var CHANNEL_EVENTS = {
  close: "phx_close",
  error: "phx_error",
  join: "phx_join",
  reply: "phx_reply",
  leave: "phx_leave",
  access_token: "access_token"
};
var CONNECTION_STATE = {
  connecting: "connecting",
  open: "open",
  closing: "closing",
  closed: "closed"
};

// node_modules/.pnpm/@supabase+realtime-js@2.108.1/node_modules/@supabase/realtime-js/dist/module/lib/serializer.js
var Serializer = /*#__PURE__*/function () {
  function Serializer(allowedMetadataKeys) {
    _classCallCheck(this, Serializer);
    this.HEADER_LENGTH = 1;
    this.USER_BROADCAST_PUSH_META_LENGTH = 6;
    this.KINDS = {
      userBroadcastPush: 3,
      userBroadcast: 4
    };
    this.BINARY_ENCODING = 0;
    this.JSON_ENCODING = 1;
    this.BROADCAST_EVENT = "broadcast";
    this.allowedMetadataKeys = [];
    this.allowedMetadataKeys = allowedMetadataKeys !== null && allowedMetadataKeys !== void 0 ? allowedMetadataKeys : [];
  }
  return _createClass(Serializer, [{
    key: "encode",
    value: function encode(msg, callback) {
      if (msg.event === this.BROADCAST_EVENT && !(msg.payload instanceof ArrayBuffer) && typeof msg.payload.event === "string") {
        return callback(this._binaryEncodeUserBroadcastPush(msg));
      }
      let payload = [msg.join_ref, msg.ref, msg.topic, msg.event, msg.payload];
      return callback(JSON.stringify(payload));
    }
  }, {
    key: "_binaryEncodeUserBroadcastPush",
    value: function _binaryEncodeUserBroadcastPush(message) {
      var _a;
      if (this._isArrayBuffer((_a = message.payload) === null || _a === void 0 ? void 0 : _a.payload)) {
        return this._encodeBinaryUserBroadcastPush(message);
      } else {
        return this._encodeJsonUserBroadcastPush(message);
      }
    }
  }, {
    key: "_encodeBinaryUserBroadcastPush",
    value: function _encodeBinaryUserBroadcastPush(message) {
      var _a, _b;
      const userPayload = (_b = (_a = message.payload) === null || _a === void 0 ? void 0 : _a.payload) !== null && _b !== void 0 ? _b : new ArrayBuffer(0);
      return this._encodeUserBroadcastPush(message, this.BINARY_ENCODING, userPayload);
    }
  }, {
    key: "_encodeJsonUserBroadcastPush",
    value: function _encodeJsonUserBroadcastPush(message) {
      var _a, _b;
      const userPayload = (_b = (_a = message.payload) === null || _a === void 0 ? void 0 : _a.payload) !== null && _b !== void 0 ? _b : {};
      const encoder = new TextEncoder();
      const encodedUserPayload = encoder.encode(JSON.stringify(userPayload)).buffer;
      return this._encodeUserBroadcastPush(message, this.JSON_ENCODING, encodedUserPayload);
    }
  }, {
    key: "_encodeUserBroadcastPush",
    value: function _encodeUserBroadcastPush(message, encodingType, encodedPayload) {
      var _a, _b;
      const topic = message.topic;
      const ref = (_a = message.ref) !== null && _a !== void 0 ? _a : "";
      const joinRef = (_b = message.join_ref) !== null && _b !== void 0 ? _b : "";
      const userEvent = message.payload.event;
      const rest = this.allowedMetadataKeys ? this._pick(message.payload, this.allowedMetadataKeys) : {};
      const metadata = Object.keys(rest).length === 0 ? "" : JSON.stringify(rest);
      if (joinRef.length > 255) {
        throw new Error(`joinRef length ${joinRef.length} exceeds maximum of 255`);
      }
      if (ref.length > 255) {
        throw new Error(`ref length ${ref.length} exceeds maximum of 255`);
      }
      if (topic.length > 255) {
        throw new Error(`topic length ${topic.length} exceeds maximum of 255`);
      }
      if (userEvent.length > 255) {
        throw new Error(`userEvent length ${userEvent.length} exceeds maximum of 255`);
      }
      if (metadata.length > 255) {
        throw new Error(`metadata length ${metadata.length} exceeds maximum of 255`);
      }
      const metaLength = this.USER_BROADCAST_PUSH_META_LENGTH + joinRef.length + ref.length + topic.length + userEvent.length + metadata.length;
      const header = new ArrayBuffer(this.HEADER_LENGTH + metaLength);
      let view = new DataView(header);
      let offset = 0;
      view.setUint8(offset++, this.KINDS.userBroadcastPush);
      view.setUint8(offset++, joinRef.length);
      view.setUint8(offset++, ref.length);
      view.setUint8(offset++, topic.length);
      view.setUint8(offset++, userEvent.length);
      view.setUint8(offset++, metadata.length);
      view.setUint8(offset++, encodingType);
      Array.from(joinRef, char => view.setUint8(offset++, char.charCodeAt(0)));
      Array.from(ref, char => view.setUint8(offset++, char.charCodeAt(0)));
      Array.from(topic, char => view.setUint8(offset++, char.charCodeAt(0)));
      Array.from(userEvent, char => view.setUint8(offset++, char.charCodeAt(0)));
      Array.from(metadata, char => view.setUint8(offset++, char.charCodeAt(0)));
      var combined = new Uint8Array(header.byteLength + encodedPayload.byteLength);
      combined.set(new Uint8Array(header), 0);
      combined.set(new Uint8Array(encodedPayload), header.byteLength);
      return combined.buffer;
    }
  }, {
    key: "decode",
    value: function decode(rawPayload, callback) {
      if (this._isArrayBuffer(rawPayload)) {
        let result = this._binaryDecode(rawPayload);
        return callback(result);
      }
      if (typeof rawPayload === "string") {
        const jsonPayload = JSON.parse(rawPayload);
        const [join_ref, ref, topic, event, payload] = jsonPayload;
        return callback({
          join_ref,
          ref,
          topic,
          event,
          payload
        });
      }
      return callback({});
    }
  }, {
    key: "_binaryDecode",
    value: function _binaryDecode(buffer) {
      const view = new DataView(buffer);
      const kind = view.getUint8(0);
      const decoder = new TextDecoder();
      switch (kind) {
        case this.KINDS.userBroadcast:
          return this._decodeUserBroadcast(buffer, view, decoder);
      }
    }
  }, {
    key: "_decodeUserBroadcast",
    value: function _decodeUserBroadcast(buffer, view, decoder) {
      const topicSize = view.getUint8(1);
      const userEventSize = view.getUint8(2);
      const metadataSize = view.getUint8(3);
      const payloadEncoding = view.getUint8(4);
      let offset = this.HEADER_LENGTH + 4;
      const topic = decoder.decode(buffer.slice(offset, offset + topicSize));
      offset = offset + topicSize;
      const userEvent = decoder.decode(buffer.slice(offset, offset + userEventSize));
      offset = offset + userEventSize;
      const metadata = decoder.decode(buffer.slice(offset, offset + metadataSize));
      offset = offset + metadataSize;
      const payload = buffer.slice(offset, buffer.byteLength);
      const parsedPayload = payloadEncoding === this.JSON_ENCODING ? JSON.parse(decoder.decode(payload)) : payload;
      const data = {
        type: this.BROADCAST_EVENT,
        event: userEvent,
        payload: parsedPayload
      };
      if (metadataSize > 0) {
        data["meta"] = JSON.parse(metadata);
      }
      return {
        join_ref: null,
        ref: null,
        topic,
        event: this.BROADCAST_EVENT,
        payload: data
      };
    }
  }, {
    key: "_isArrayBuffer",
    value: function _isArrayBuffer(buffer) {
      var _a;
      return buffer instanceof ArrayBuffer || ((_a = buffer === null || buffer === void 0 ? void 0 : buffer.constructor) === null || _a === void 0 ? void 0 : _a.name) === "ArrayBuffer";
    }
  }, {
    key: "_pick",
    value: function _pick(obj, keys) {
      if (!obj || typeof obj !== "object") {
        return {};
      }
      return Object.fromEntries(Object.entries(obj).filter(([key]) => keys.includes(key)));
    }
  }]);
}();

// node_modules/.pnpm/@supabase+realtime-js@2.108.1/node_modules/@supabase/realtime-js/dist/module/lib/transformers.js
var PostgresTypes;
(function (PostgresTypes2) {
  PostgresTypes2["abstime"] = "abstime";
  PostgresTypes2["bool"] = "bool";
  PostgresTypes2["date"] = "date";
  PostgresTypes2["daterange"] = "daterange";
  PostgresTypes2["float4"] = "float4";
  PostgresTypes2["float8"] = "float8";
  PostgresTypes2["int2"] = "int2";
  PostgresTypes2["int4"] = "int4";
  PostgresTypes2["int4range"] = "int4range";
  PostgresTypes2["int8"] = "int8";
  PostgresTypes2["int8range"] = "int8range";
  PostgresTypes2["json"] = "json";
  PostgresTypes2["jsonb"] = "jsonb";
  PostgresTypes2["money"] = "money";
  PostgresTypes2["numeric"] = "numeric";
  PostgresTypes2["oid"] = "oid";
  PostgresTypes2["reltime"] = "reltime";
  PostgresTypes2["text"] = "text";
  PostgresTypes2["time"] = "time";
  PostgresTypes2["timestamp"] = "timestamp";
  PostgresTypes2["timestamptz"] = "timestamptz";
  PostgresTypes2["timetz"] = "timetz";
  PostgresTypes2["tsrange"] = "tsrange";
  PostgresTypes2["tstzrange"] = "tstzrange";
})(PostgresTypes || (PostgresTypes = {}));
var convertChangeData = (columns, record, options = {}) => {
  var _a;
  const skipTypes = (_a = options.skipTypes) !== null && _a !== void 0 ? _a : [];
  if (!record) {
    return {};
  }
  return Object.keys(record).reduce((acc, rec_key) => {
    acc[rec_key] = convertColumn(rec_key, columns, record, skipTypes);
    return acc;
  }, {});
};
var convertColumn = (columnName, columns, record, skipTypes) => {
  const column = columns.find(x => x.name === columnName);
  const colType = column === null || column === void 0 ? void 0 : column.type;
  const value = record[columnName];
  if (colType && !skipTypes.includes(colType)) {
    return convertCell(colType, value);
  }
  return noop(value);
};
var convertCell = (type, value) => {
  if (type.charAt(0) === "_") {
    const dataType = type.slice(1, type.length);
    return toArray(value, dataType);
  }
  switch (type) {
    case PostgresTypes.bool:
      return toBoolean(value);
    case PostgresTypes.float4:
    case PostgresTypes.float8:
    case PostgresTypes.int2:
    case PostgresTypes.int4:
    case PostgresTypes.int8:
    case PostgresTypes.numeric:
    case PostgresTypes.oid:
      return toNumber(value);
    case PostgresTypes.json:
    case PostgresTypes.jsonb:
      return toJson(value);
    case PostgresTypes.timestamp:
      return toTimestampString(value);
    // Format to be consistent with PostgREST
    case PostgresTypes.abstime:
    // To allow users to cast it based on Timezone
    case PostgresTypes.date:
    // To allow users to cast it based on Timezone
    case PostgresTypes.daterange:
    case PostgresTypes.int4range:
    case PostgresTypes.int8range:
    case PostgresTypes.money:
    case PostgresTypes.reltime:
    // To allow users to cast it based on Timezone
    case PostgresTypes.text:
    case PostgresTypes.time:
    // To allow users to cast it based on Timezone
    case PostgresTypes.timestamptz:
    // To allow users to cast it based on Timezone
    case PostgresTypes.timetz:
    // To allow users to cast it based on Timezone
    case PostgresTypes.tsrange:
    case PostgresTypes.tstzrange:
      return noop(value);
    default:
      return noop(value);
  }
};
var noop = value => {
  return value;
};
var toBoolean = value => {
  switch (value) {
    case "t":
      return true;
    case "f":
      return false;
    default:
      return value;
  }
};
var toNumber = value => {
  if (typeof value === "string") {
    const parsedValue = parseFloat(value);
    if (!Number.isNaN(parsedValue)) {
      return parsedValue;
    }
  }
  return value;
};
var toJson = value => {
  if (typeof value === "string") {
    try {
      return JSON.parse(value);
    } catch (_a) {
      return value;
    }
  }
  return value;
};
var toArray = (value, type) => {
  if (typeof value !== "string") {
    return value;
  }
  const lastIdx = value.length - 1;
  const closeBrace = value[lastIdx];
  const openBrace = value[0];
  if (openBrace === "{" && closeBrace === "}") {
    let arr;
    const valTrim = value.slice(1, lastIdx);
    try {
      arr = JSON.parse("[" + valTrim + "]");
    } catch (_) {
      arr = valTrim ? valTrim.split(",") : [];
    }
    return arr.map(val => convertCell(type, val));
  }
  return value;
};
var toTimestampString = value => {
  if (typeof value === "string") {
    return value.replace(" ", "T");
  }
  return value;
};
var httpEndpointURL = socketUrl => {
  const wsUrl = new URL(socketUrl);
  wsUrl.protocol = wsUrl.protocol.replace(/^ws/i, "http");
  wsUrl.pathname = wsUrl.pathname.replace(/\/+$/, "").replace(/\/socket\/websocket$/i, "").replace(/\/socket$/i, "").replace(/\/websocket$/i, "");
  if (wsUrl.pathname === "" || wsUrl.pathname === "/") {
    wsUrl.pathname = "/api/broadcast";
  } else {
    wsUrl.pathname = wsUrl.pathname + "/api/broadcast";
  }
  return wsUrl.href;
};

// node_modules/.pnpm/@supabase+phoenix@0.4.2/node_modules/@supabase/phoenix/priv/static/phoenix.mjs
var closure = value => {
  if (typeof value === "function") {
    return /** @type {() => T} */value;
  } else {
    let closure2 = function () {
      return value;
    };
    return closure2;
  }
};
var globalSelf = typeof self !== "undefined" ? self : null;
var phxWindow = typeof window !== "undefined" ? window : null;
var global2 = globalSelf || phxWindow || globalThis;
var DEFAULT_VSN2 = "2.0.0";
var DEFAULT_TIMEOUT2 = 1e4;
var WS_CLOSE_NORMAL = 1e3;
var SOCKET_STATES = /** @type {const} */
{
  connecting: 0,
  open: 1,
  closing: 2,
  closed: 3
};
var CHANNEL_STATES2 = /** @type {const} */
{
  closed: "closed",
  errored: "errored",
  joined: "joined",
  joining: "joining",
  leaving: "leaving"
};
var CHANNEL_EVENTS2 = /** @type {const} */
{
  close: "phx_close",
  error: "phx_error",
  join: "phx_join",
  reply: "phx_reply",
  leave: "phx_leave"
};
var TRANSPORTS = /** @type {const} */
{
  longpoll: "longpoll",
  websocket: "websocket"
};
var XHR_STATES = /** @type {const} */
{
  complete: 4
};
var AUTH_TOKEN_PREFIX = "base64url.bearer.phx.";
var Push = /*#__PURE__*/function () {
  /**
   * Initializes the Push
   * @param {Channel} channel - The Channel
   * @param {ChannelEvent} event - The event, for example `"phx_join"`
   * @param {() => Record<string, unknown>} payload - The payload, for example `{user_id: 123}`
   * @param {number} timeout - The push timeout in milliseconds
   */
  function Push(channel, event, payload, timeout) {
    _classCallCheck(this, Push);
    this.channel = channel;
    this.event = event;
    this.payload = payload || function () {
      return {};
    };
    this.receivedResp = null;
    this.timeout = timeout;
    this.timeoutTimer = null;
    this.recHooks = [];
    this.sent = false;
    this.ref = void 0;
  }
  /**
   *
   * @param {number} timeout
   */
  return _createClass(Push, [{
    key: "resend",
    value: function resend(timeout) {
      this.timeout = timeout;
      this.reset();
      this.send();
    }
    /**
     *
     */
  }, {
    key: "send",
    value: function send() {
      if (this.hasReceived("timeout")) {
        return;
      }
      this.startTimeout();
      this.sent = true;
      this.channel.socket.push({
        topic: this.channel.topic,
        event: this.event,
        payload: this.payload(),
        ref: this.ref,
        join_ref: this.channel.joinRef()
      });
    }
    /**
     *
     * @param {string} status
     * @param {(response: any) => void} callback
     */
  }, {
    key: "receive",
    value: function receive(status, callback) {
      if (this.hasReceived(status)) {
        callback(this.receivedResp.response);
      }
      this.recHooks.push({
        status,
        callback
      });
      return this;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.cancelRefEvent();
      this.ref = null;
      this.refEvent = null;
      this.receivedResp = null;
      this.sent = false;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.cancelRefEvent();
      this.cancelTimeout();
    }
    /**
     * @private
     */
  }, {
    key: "matchReceive",
    value: function matchReceive({
      status,
      response,
      _ref
    }) {
      this.recHooks.filter(h => h.status === status).forEach(h => h.callback(response));
    }
    /**
     * @private
     */
  }, {
    key: "cancelRefEvent",
    value: function cancelRefEvent() {
      if (!this.refEvent) {
        return;
      }
      this.channel.off(this.refEvent);
    }
  }, {
    key: "cancelTimeout",
    value: function cancelTimeout() {
      clearTimeout(this.timeoutTimer);
      this.timeoutTimer = null;
    }
  }, {
    key: "startTimeout",
    value: function startTimeout() {
      if (this.timeoutTimer) {
        this.cancelTimeout();
      }
      this.ref = this.channel.socket.makeRef();
      this.refEvent = this.channel.replyEventName(this.ref);
      this.channel.on(this.refEvent, payload => {
        this.cancelRefEvent();
        this.cancelTimeout();
        this.receivedResp = payload;
        this.matchReceive(payload);
      });
      this.timeoutTimer = setTimeout(() => {
        this.trigger("timeout", {});
      }, this.timeout);
    }
    /**
     * @private
     */
  }, {
    key: "hasReceived",
    value: function hasReceived(status) {
      return this.receivedResp && this.receivedResp.status === status;
    }
  }, {
    key: "trigger",
    value: function trigger(status, response) {
      this.channel.trigger(this.refEvent, {
        status,
        response
      });
    }
  }]);
}();
var Timer = /*#__PURE__*/function () {
  /**
  * @param {() => void} callback
  * @param {(tries: number) => number} timerCalc
  */
  function Timer(callback, timerCalc) {
    _classCallCheck(this, Timer);
    this.callback = callback;
    this.timerCalc = timerCalc;
    this.timer = void 0;
    this.tries = 0;
  }
  return _createClass(Timer, [{
    key: "reset",
    value: function reset() {
      this.tries = 0;
      clearTimeout(this.timer);
    }
    /**
     * Cancels any previous scheduleTimeout and schedules callback
     */
  }, {
    key: "scheduleTimeout",
    value: function scheduleTimeout() {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.tries = this.tries + 1;
        this.callback();
      }, this.timerCalc(this.tries + 1));
    }
  }]);
}();
var Channel = /*#__PURE__*/function () {
  /**
   * @param {string} topic
   * @param {Params | (() => Params)} params
   * @param {Socket} socket
   */
  function Channel(topic, params, socket) {
    _classCallCheck(this, Channel);
    this.state = CHANNEL_STATES2.closed;
    this.topic = topic;
    this.params = closure(params || {});
    this.socket = socket;
    this.bindings = [];
    this.bindingRef = 0;
    this.timeout = this.socket.timeout;
    this.joinedOnce = false;
    this.joinPush = new Push(this, CHANNEL_EVENTS2.join, this.params, this.timeout);
    this.pushBuffer = [];
    this.stateChangeRefs = [];
    this.rejoinTimer = new Timer(() => {
      if (this.socket.isConnected()) {
        this.rejoin();
      }
    }, this.socket.rejoinAfterMs);
    this.stateChangeRefs.push(this.socket.onError(() => this.rejoinTimer.reset()));
    this.stateChangeRefs.push(this.socket.onOpen(() => {
      this.rejoinTimer.reset();
      if (this.isErrored()) {
        this.rejoin();
      }
    }));
    this.joinPush.receive("ok", () => {
      this.state = CHANNEL_STATES2.joined;
      this.rejoinTimer.reset();
      this.pushBuffer.forEach(pushEvent => pushEvent.send());
      this.pushBuffer = [];
    });
    this.joinPush.receive("error", reason => {
      this.state = CHANNEL_STATES2.errored;
      if (this.socket.hasLogger()) this.socket.log("channel", `error ${this.topic}`, reason);
      if (this.socket.isConnected()) {
        this.rejoinTimer.scheduleTimeout();
      }
    });
    this.onClose(() => {
      this.rejoinTimer.reset();
      if (this.socket.hasLogger()) this.socket.log("channel", `close ${this.topic}`);
      this.state = CHANNEL_STATES2.closed;
      this.socket.remove(this);
    });
    this.onError(reason => {
      if (this.socket.hasLogger()) this.socket.log("channel", `error ${this.topic}`, reason);
      if (this.isJoining()) {
        this.joinPush.reset();
      }
      this.state = CHANNEL_STATES2.errored;
      if (this.socket.isConnected()) {
        this.rejoinTimer.scheduleTimeout();
      }
    });
    this.joinPush.receive("timeout", () => {
      if (this.socket.hasLogger()) this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout);
      let leavePush = new Push(this, CHANNEL_EVENTS2.leave, closure({}), this.timeout);
      leavePush.send();
      this.state = CHANNEL_STATES2.errored;
      this.joinPush.reset();
      if (this.socket.isConnected()) {
        this.rejoinTimer.scheduleTimeout();
      }
    });
    this.on(CHANNEL_EVENTS2.reply, (payload, ref) => {
      this.trigger(this.replyEventName(ref), payload);
    });
  }
  /**
   * Join the channel
   * @param {number} timeout
   * @returns {Push}
   */
  return _createClass(Channel, [{
    key: "join",
    value: function join(timeout = this.timeout) {
      if (this.joinedOnce) {
        throw new Error("tried to join multiple times. 'join' can only be called a single time per channel instance");
      } else {
        this.timeout = timeout;
        this.joinedOnce = true;
        this.rejoin();
        return this.joinPush;
      }
    }
    /**
     * Teardown the channel.
     *
     * Destroys and stops related timers.
     */
  }, {
    key: "teardown",
    value: function teardown() {
      this.pushBuffer.forEach(push => push.destroy());
      this.pushBuffer = [];
      this.rejoinTimer.reset();
      this.joinPush.destroy();
      this.state = CHANNEL_STATES2.closed;
      this.bindings = [];
    }
    /**
     * Hook into channel close
     * @param {ChannelBindingCallback} callback
     */
  }, {
    key: "onClose",
    value: function onClose(callback) {
      this.on(CHANNEL_EVENTS2.close, callback);
    }
    /**
     * Hook into channel errors
     * @param {ChannelOnErrorCallback} callback
     * @return {number}
     */
  }, {
    key: "onError",
    value: function onError(callback) {
      return this.on(CHANNEL_EVENTS2.error, reason => callback(reason));
    }
    /**
     * Subscribes on channel events
     *
     * Subscription returns a ref counter, which can be used later to
     * unsubscribe the exact event listener
     *
     * @example
     * const ref1 = channel.on("event", do_stuff)
     * const ref2 = channel.on("event", do_other_stuff)
     * channel.off("event", ref1)
     * // Since unsubscription, do_stuff won't fire,
     * // while do_other_stuff will keep firing on the "event"
     *
     * @param {string} event
     * @param {ChannelBindingCallback} callback
     * @returns {number} ref
     */
  }, {
    key: "on",
    value: function on(event, callback) {
      let ref = this.bindingRef++;
      this.bindings.push({
        event,
        ref,
        callback
      });
      return ref;
    }
    /**
     * Unsubscribes off of channel events
     *
     * Use the ref returned from a channel.on() to unsubscribe one
     * handler, or pass nothing for the ref to unsubscribe all
     * handlers for the given event.
     *
     * @example
     * // Unsubscribe the do_stuff handler
     * const ref1 = channel.on("event", do_stuff)
     * channel.off("event", ref1)
     *
     * // Unsubscribe all handlers from event
     * channel.off("event")
     *
     * @param {string} event
     * @param {number} [ref]
     */
  }, {
    key: "off",
    value: function off(event, ref) {
      this.bindings = this.bindings.filter(bind => {
        return !(bind.event === event && (typeof ref === "undefined" || ref === bind.ref));
      });
    }
    /**
     * @private
     */
  }, {
    key: "canPush",
    value: function canPush() {
      return this.socket.isConnected() && this.isJoined();
    }
    /**
     * Sends a message `event` to phoenix with the payload `payload`.
     * Phoenix receives this in the `handle_in(event, payload, socket)`
     * function. if phoenix replies or it times out (default 10000ms),
     * then optionally the reply can be received.
     *
     * @example
     * channel.push("event")
     *   .receive("ok", payload => console.log("phoenix replied:", payload))
     *   .receive("error", err => console.log("phoenix errored", err))
     *   .receive("timeout", () => console.log("timed out pushing"))
     * @param {string} event
     * @param {Object} payload
     * @param {number} [timeout]
     * @returns {Push}
     */
  }, {
    key: "push",
    value: function push(event, payload, timeout = this.timeout) {
      payload = payload || {};
      if (!this.joinedOnce) {
        throw new Error(`tried to push '${event}' to '${this.topic}' before joining. Use channel.join() before pushing events`);
      }
      let pushEvent = new Push(this, event, function () {
        return payload;
      }, timeout);
      if (this.canPush()) {
        pushEvent.send();
      } else {
        pushEvent.startTimeout();
        this.pushBuffer.push(pushEvent);
      }
      return pushEvent;
    }
    /** Leaves the channel
     *
     * Unsubscribes from server events, and
     * instructs channel to terminate on server
     *
     * Triggers onClose() hooks
     *
     * To receive leave acknowledgements, use the `receive`
     * hook to bind to the server ack, ie:
     *
     * @example
     * channel.leave().receive("ok", () => alert("left!") )
     *
     * @param {number} timeout
     * @returns {Push}
     */
  }, {
    key: "leave",
    value: function leave(timeout = this.timeout) {
      this.rejoinTimer.reset();
      this.joinPush.cancelTimeout();
      this.state = CHANNEL_STATES2.leaving;
      let onClose = () => {
        if (this.socket.hasLogger()) this.socket.log("channel", `leave ${this.topic}`);
        this.trigger(CHANNEL_EVENTS2.close, "leave");
      };
      let leavePush = new Push(this, CHANNEL_EVENTS2.leave, closure({}), timeout);
      leavePush.receive("ok", () => onClose()).receive("timeout", () => onClose());
      leavePush.send();
      if (!this.canPush()) {
        leavePush.trigger("ok", {});
      }
      return leavePush;
    }
    /**
     * Overridable message hook
     *
     * Receives all events for specialized message handling
     * before dispatching to the channel callbacks.
     *
     * Must return the payload, modified or unmodified
     * @type{ChannelOnMessage}
     */
  }, {
    key: "onMessage",
    value: function onMessage(_event, payload, _ref) {
      return payload;
    }
    /**
     * Overridable filter hook
     *
     * If this function returns `true`, `binding`'s callback will be called.
     *
     * @type{ChannelFilterBindings}
     */
  }, {
    key: "filterBindings",
    value: function filterBindings(_binding, _payload, _ref) {
      return true;
    }
  }, {
    key: "isMember",
    value: function isMember(topic, event, payload, joinRef) {
      if (this.topic !== topic) {
        return false;
      }
      if (joinRef && joinRef !== this.joinRef()) {
        if (this.socket.hasLogger()) this.socket.log("channel", "dropping outdated message", {
          topic,
          event,
          payload,
          joinRef
        });
        return false;
      } else {
        return true;
      }
    }
  }, {
    key: "joinRef",
    value: function joinRef() {
      return this.joinPush.ref;
    }
    /**
     * @private
     */
  }, {
    key: "rejoin",
    value: function rejoin(timeout = this.timeout) {
      if (this.isLeaving()) {
        return;
      }
      this.socket.leaveOpenTopic(this.topic);
      this.state = CHANNEL_STATES2.joining;
      this.joinPush.resend(timeout);
    }
    /**
     * @param {string} event
     * @param {unknown} [payload]
     * @param {?string} [ref]
     * @param {?string} [joinRef]
     */
  }, {
    key: "trigger",
    value: function trigger(event, payload, ref, joinRef) {
      let handledPayload = this.onMessage(event, payload, ref, joinRef);
      if (payload && !handledPayload) {
        throw new Error("channel onMessage callbacks must return the payload, modified or unmodified");
      }
      let eventBindings = this.bindings.filter(bind => bind.event === event && this.filterBindings(bind, payload, ref));
      for (let i = 0; i < eventBindings.length; i++) {
        let bind = eventBindings[i];
        bind.callback(handledPayload, ref, joinRef || this.joinRef());
      }
    }
    /**
    * @param {string} ref
    */
  }, {
    key: "replyEventName",
    value: function replyEventName(ref) {
      return `chan_reply_${ref}`;
    }
  }, {
    key: "isClosed",
    value: function isClosed() {
      return this.state === CHANNEL_STATES2.closed;
    }
  }, {
    key: "isErrored",
    value: function isErrored() {
      return this.state === CHANNEL_STATES2.errored;
    }
  }, {
    key: "isJoined",
    value: function isJoined() {
      return this.state === CHANNEL_STATES2.joined;
    }
  }, {
    key: "isJoining",
    value: function isJoining() {
      return this.state === CHANNEL_STATES2.joining;
    }
  }, {
    key: "isLeaving",
    value: function isLeaving() {
      return this.state === CHANNEL_STATES2.leaving;
    }
  }]);
}();
var Ajax = /*#__PURE__*/function () {
  function Ajax() {
    _classCallCheck(this, Ajax);
  }
  return _createClass(Ajax, null, [{
    key: "request",
    value: function request(method, endPoint, headers, body, timeout, ontimeout, callback) {
      if (global2.XDomainRequest) {
        let req = new global2.XDomainRequest();
        return this.xdomainRequest(req, method, endPoint, body, timeout, ontimeout, callback);
      } else if (global2.XMLHttpRequest) {
        let req = new global2.XMLHttpRequest();
        return this.xhrRequest(req, method, endPoint, headers, body, timeout, ontimeout, callback);
      } else if (global2.fetch && global2.AbortController) {
        return this.fetchRequest(method, endPoint, headers, body, timeout, ontimeout, callback);
      } else {
        throw new Error("No suitable XMLHttpRequest implementation found");
      }
    }
  }, {
    key: "fetchRequest",
    value: function fetchRequest(method, endPoint, headers, body, timeout, ontimeout, callback) {
      let options = {
        method,
        headers,
        body
      };
      let controller = null;
      if (timeout) {
        controller = new AbortController();
        const _timeoutId = setTimeout(() => controller.abort(), timeout);
        options.signal = controller.signal;
      }
      global2.fetch(endPoint, options).then(response => response.text()).then(data => this.parseJSON(data)).then(data => callback && callback(data)).catch(err => {
        if (err.name === "AbortError" && ontimeout) {
          ontimeout();
        } else {
          callback && callback(null);
        }
      });
      return controller;
    }
  }, {
    key: "xdomainRequest",
    value: function xdomainRequest(req, method, endPoint, body, timeout, ontimeout, callback) {
      req.timeout = timeout;
      req.open(method, endPoint);
      req.onload = () => {
        let response = this.parseJSON(req.responseText);
        callback && callback(response);
      };
      if (ontimeout) {
        req.ontimeout = ontimeout;
      }
      req.onprogress = () => {};
      req.send(body);
      return req;
    }
  }, {
    key: "xhrRequest",
    value: function xhrRequest(req, method, endPoint, headers, body, timeout, ontimeout, callback) {
      req.open(method, endPoint, true);
      req.timeout = timeout;
      for (let [key, value] of Object.entries(headers)) {
        req.setRequestHeader(key, value);
      }
      req.onerror = () => callback && callback(null);
      req.onreadystatechange = () => {
        if (req.readyState === XHR_STATES.complete && callback) {
          let response = this.parseJSON(req.responseText);
          callback(response);
        }
      };
      if (ontimeout) {
        req.ontimeout = ontimeout;
      }
      req.send(body);
      return req;
    }
  }, {
    key: "parseJSON",
    value: function parseJSON(resp) {
      if (!resp || resp === "") {
        return null;
      }
      try {
        return JSON.parse(resp);
      } catch (e) {
        console && console.log("failed to parse JSON response", resp);
        return null;
      }
    }
  }, {
    key: "serialize",
    value: function serialize(obj, parentKey) {
      let queryStr = [];
      for (var key in obj) {
        if (!Object.prototype.hasOwnProperty.call(obj, key)) {
          continue;
        }
        let paramKey = parentKey ? `${parentKey}[${key}]` : key;
        let paramVal = obj[key];
        if (typeof paramVal === "object") {
          queryStr.push(this.serialize(paramVal, paramKey));
        } else {
          queryStr.push(encodeURIComponent(paramKey) + "=" + encodeURIComponent(paramVal));
        }
      }
      return queryStr.join("&");
    }
  }, {
    key: "appendParams",
    value: function appendParams(url, params) {
      if (Object.keys(params).length === 0) {
        return url;
      }
      let prefix = url.match(/\?/) ? "&" : "?";
      return `${url}${prefix}${this.serialize(params)}`;
    }
  }]);
}();
var arrayBufferToBase64 = buffer => {
  let binary = "";
  let bytes = new Uint8Array(buffer);
  let len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
};
var LongPoll = /*#__PURE__*/function () {
  function LongPoll(endPoint, protocols) {
    _classCallCheck(this, LongPoll);
    if (protocols && protocols.length === 2 && protocols[1].startsWith(AUTH_TOKEN_PREFIX)) {
      this.authToken = atob(protocols[1].slice(AUTH_TOKEN_PREFIX.length));
    }
    this.endPoint = null;
    this.token = null;
    this.skipHeartbeat = true;
    this.reqs = /* @__PURE__ */new Set();
    this.awaitingBatchAck = false;
    this.currentBatch = null;
    this.currentBatchTimer = null;
    this.batchBuffer = [];
    this.onopen = function () {};
    this.onerror = function () {};
    this.onmessage = function () {};
    this.onclose = function () {};
    this.pollEndpoint = this.normalizeEndpoint(endPoint);
    this.readyState = SOCKET_STATES.connecting;
    setTimeout(() => this.poll(), 0);
  }
  return _createClass(LongPoll, [{
    key: "normalizeEndpoint",
    value: function normalizeEndpoint(endPoint) {
      return endPoint.replace("ws://", "http://").replace("wss://", "https://").replace(new RegExp("(.*)/" + TRANSPORTS.websocket), "$1/" + TRANSPORTS.longpoll);
    }
  }, {
    key: "endpointURL",
    value: function endpointURL() {
      return Ajax.appendParams(this.pollEndpoint, {
        token: this.token
      });
    }
  }, {
    key: "closeAndRetry",
    value: function closeAndRetry(code, reason, wasClean) {
      this.close(code, reason, wasClean);
      this.readyState = SOCKET_STATES.connecting;
    }
  }, {
    key: "ontimeout",
    value: function ontimeout() {
      this.onerror("timeout");
      this.closeAndRetry(1005, "timeout", false);
    }
  }, {
    key: "isActive",
    value: function isActive() {
      return this.readyState === SOCKET_STATES.open || this.readyState === SOCKET_STATES.connecting;
    }
  }, {
    key: "poll",
    value: function poll() {
      const headers = {
        "Accept": "application/json"
      };
      if (this.authToken) {
        headers["X-Phoenix-AuthToken"] = this.authToken;
      }
      this.ajax("GET", headers, null, () => this.ontimeout(), resp => {
        if (resp) {
          var {
            status,
            token,
            messages
          } = resp;
          if (status === 410 && this.token !== null) {
            this.onerror(410);
            this.closeAndRetry(3410, "session_gone", false);
            return;
          }
          this.token = token;
        } else {
          status = 0;
        }
        switch (status) {
          case 200:
            messages.forEach(msg => {
              setTimeout(() => this.onmessage({
                data: msg
              }), 0);
            });
            this.poll();
            break;
          case 204:
            this.poll();
            break;
          case 410:
            this.readyState = SOCKET_STATES.open;
            this.onopen({});
            this.poll();
            break;
          case 403:
            this.onerror(403);
            this.close(1008, "forbidden", false);
            break;
          case 0:
          case 500:
            this.onerror(500);
            this.closeAndRetry(1011, "internal server error", 500);
            break;
          default:
            throw new Error(`unhandled poll status ${status}`);
        }
      });
    }
    // we collect all pushes within the current event loop by
    // setTimeout 0, which optimizes back-to-back procedural
    // pushes against an empty buffer
  }, {
    key: "send",
    value: function send(body) {
      if (typeof body !== "string") {
        body = arrayBufferToBase64(body);
      }
      if (this.currentBatch) {
        this.currentBatch.push(body);
      } else if (this.awaitingBatchAck) {
        this.batchBuffer.push(body);
      } else {
        this.currentBatch = [body];
        this.currentBatchTimer = setTimeout(() => {
          this.batchSend(this.currentBatch);
          this.currentBatch = null;
        }, 0);
      }
    }
  }, {
    key: "batchSend",
    value: function batchSend(messages) {
      this.awaitingBatchAck = true;
      this.ajax("POST", {
        "Content-Type": "application/x-ndjson"
      }, messages.join("\n"), () => this.onerror("timeout"), resp => {
        this.awaitingBatchAck = false;
        if (!resp || resp.status !== 200) {
          this.onerror(resp && resp.status);
          this.closeAndRetry(1011, "internal server error", false);
        } else if (this.batchBuffer.length > 0) {
          this.batchSend(this.batchBuffer);
          this.batchBuffer = [];
        }
      });
    }
  }, {
    key: "close",
    value: function close(code, reason, wasClean) {
      for (let req of this.reqs) {
        req.abort();
      }
      this.readyState = SOCKET_STATES.closed;
      let opts = Object.assign({
        code: 1e3,
        reason: void 0,
        wasClean: true
      }, {
        code,
        reason,
        wasClean
      });
      this.batchBuffer = [];
      clearTimeout(this.currentBatchTimer);
      this.currentBatchTimer = null;
      if (typeof CloseEvent !== "undefined") {
        this.onclose(new CloseEvent("close", opts));
      } else {
        this.onclose(opts);
      }
    }
  }, {
    key: "ajax",
    value: function ajax(method, headers, body, onCallerTimeout, callback) {
      let req;
      let ontimeout = () => {
        this.reqs.delete(req);
        onCallerTimeout();
      };
      req = Ajax.request(method, this.endpointURL(), headers, body, this.timeout, ontimeout, resp => {
        this.reqs.delete(req);
        if (this.isActive()) {
          callback(resp);
        }
      });
      this.reqs.add(req);
    }
  }]);
}();
var Presence = /*#__PURE__*/function () {
  /**
   * Initializes the Presence
   * @param {Channel} channel - The Channel
   * @param {PresenceOptions} [opts] - The options, for example `{events: {state: "state", diff: "diff"}}`
   */
  function _Presence(channel, opts = {}) {
    _classCallCheck(this, _Presence);
    let events = opts.events || /** @type {PresenceEvents} */
    {
      state: "presence_state",
      diff: "presence_diff"
    };
    this.state = {};
    this.pendingDiffs = [];
    this.channel = channel;
    this.joinRef = null;
    this.caller = {
      onJoin: function () {},
      onLeave: function () {},
      onSync: function () {}
    };
    this.channel.on(events.state, newState => {
      let {
        onJoin,
        onLeave,
        onSync
      } = this.caller;
      this.joinRef = this.channel.joinRef();
      this.state = _Presence.syncState(this.state, newState, onJoin, onLeave);
      this.pendingDiffs.forEach(diff => {
        this.state = _Presence.syncDiff(this.state, diff, onJoin, onLeave);
      });
      this.pendingDiffs = [];
      onSync();
    });
    this.channel.on(events.diff, diff => {
      let {
        onJoin,
        onLeave,
        onSync
      } = this.caller;
      if (this.inPendingSyncState()) {
        this.pendingDiffs.push(diff);
      } else {
        this.state = _Presence.syncDiff(this.state, diff, onJoin, onLeave);
        onSync();
      }
    });
  }
  /**
   * @param {PresenceOnJoin} callback
   */
  return _createClass(_Presence, [{
    key: "onJoin",
    value: function onJoin(callback) {
      this.caller.onJoin = callback;
    }
    /**
     * @param {PresenceOnLeave} callback
     */
  }, {
    key: "onLeave",
    value: function onLeave(callback) {
      this.caller.onLeave = callback;
    }
    /**
     * @param {PresenceOnSync} callback
     */
  }, {
    key: "onSync",
    value: function onSync(callback) {
      this.caller.onSync = callback;
    }
    /**
     * Returns the array of presences, with selected metadata.
     *
     * @template [T=PresenceState]
     * @param {((key: string, obj: PresenceState) => T)} [by]
     *
     * @returns {T[]}
     */
  }, {
    key: "list",
    value: function list(by) {
      return _Presence.list(this.state, by);
    }
  }, {
    key: "inPendingSyncState",
    value: function inPendingSyncState() {
      return !this.joinRef || this.joinRef !== this.channel.joinRef();
    }
    // lower-level public static API
    /**
     * Used to sync the list of presences on the server
     * with the client's state. An optional `onJoin` and `onLeave` callback can
     * be provided to react to changes in the client's local presences across
     * disconnects and reconnects with the server.
     *
     * @param {Record<string, PresenceState>} currentState
     * @param {Record<string, PresenceState>} newState
     * @param {PresenceOnJoin} onJoin
     * @param {PresenceOnLeave} onLeave
     *
     * @returns {Record<string, PresenceState>}
     */
  }], [{
    key: "syncState",
    value: function syncState(currentState, newState, onJoin, onLeave) {
      let state = this.clone(currentState);
      let joins = {};
      let leaves = {};
      this.map(state, (key, presence) => {
        if (!newState[key]) {
          leaves[key] = presence;
        }
      });
      this.map(newState, (key, newPresence) => {
        let currentPresence = state[key];
        if (currentPresence) {
          let newRefs = newPresence.metas.map(m => m.phx_ref);
          let curRefs = currentPresence.metas.map(m => m.phx_ref);
          let joinedMetas = newPresence.metas.filter(m => curRefs.indexOf(m.phx_ref) < 0);
          let leftMetas = currentPresence.metas.filter(m => newRefs.indexOf(m.phx_ref) < 0);
          if (joinedMetas.length > 0) {
            joins[key] = newPresence;
            joins[key].metas = joinedMetas;
          }
          if (leftMetas.length > 0) {
            leaves[key] = this.clone(currentPresence);
            leaves[key].metas = leftMetas;
          }
        } else {
          joins[key] = newPresence;
        }
      });
      return this.syncDiff(state, {
        joins,
        leaves
      }, onJoin, onLeave);
    }
    /**
     *
     * Used to sync a diff of presence join and leave
     * events from the server, as they happen. Like `syncState`, `syncDiff`
     * accepts optional `onJoin` and `onLeave` callbacks to react to a user
     * joining or leaving from a device.
     *
     * @param {Record<string, PresenceState>} state
     * @param {PresenceDiff} diff
     * @param {PresenceOnJoin} onJoin
     * @param {PresenceOnLeave} onLeave
     *
     * @returns {Record<string, PresenceState>}
     */
  }, {
    key: "syncDiff",
    value: function syncDiff(state, diff, onJoin, onLeave) {
      let {
        joins,
        leaves
      } = this.clone(diff);
      if (!onJoin) {
        onJoin = function () {};
      }
      if (!onLeave) {
        onLeave = function () {};
      }
      this.map(joins, (key, newPresence) => {
        let currentPresence = state[key];
        state[key] = this.clone(newPresence);
        if (currentPresence) {
          let joinedRefs = state[key].metas.map(m => m.phx_ref);
          let curMetas = currentPresence.metas.filter(m => joinedRefs.indexOf(m.phx_ref) < 0);
          state[key].metas.unshift(...curMetas);
        }
        onJoin(key, currentPresence, newPresence);
      });
      this.map(leaves, (key, leftPresence) => {
        let currentPresence = state[key];
        if (!currentPresence) {
          return;
        }
        let refsToRemove = leftPresence.metas.map(m => m.phx_ref);
        currentPresence.metas = currentPresence.metas.filter(p => {
          return refsToRemove.indexOf(p.phx_ref) < 0;
        });
        onLeave(key, currentPresence, leftPresence);
        if (currentPresence.metas.length === 0) {
          delete state[key];
        }
      });
      return state;
    }
    /**
     * Returns the array of presences, with selected metadata.
     *
     * @template [T=PresenceState]
     * @param {Record<string, PresenceState>} presences
     * @param {((key: string, obj: PresenceState) => T)} [chooser]
     *
     * @returns {T[]}
     */
  }, {
    key: "list",
    value: function list(presences, chooser) {
      if (!chooser) {
        chooser = function (key, pres) {
          return pres;
        };
      }
      return this.map(presences, (key, presence) => {
        return chooser(key, presence);
      });
    }
    // private
    /**
    * @template T
    * @param {Record<string, PresenceState>} obj
    * @param {(key: string, obj: PresenceState) => T} func
    */
  }, {
    key: "map",
    value: function map(obj, func) {
      return Object.getOwnPropertyNames(obj).map(key => func(key, obj[key]));
    }
    /**
    * @template T
    * @param {T} obj
    * @returns {T}
    */
  }, {
    key: "clone",
    value: function clone(obj) {
      return JSON.parse(JSON.stringify(obj));
    }
  }]);
}();
var serializer_default = {
  HEADER_LENGTH: 1,
  META_LENGTH: 4,
  KINDS: {
    push: 0,
    reply: 1,
    broadcast: 2
  },
  /**
  * @template T
  * @param {Message<Record<string, any>>} msg
  * @param {(msg: ArrayBuffer | string) => T} callback
  * @returns {T}
  */
  encode(msg, callback) {
    if (msg.payload.constructor === ArrayBuffer) {
      return callback(this.binaryEncode(msg));
    } else {
      let payload = [msg.join_ref, msg.ref, msg.topic, msg.event, msg.payload];
      return callback(JSON.stringify(payload));
    }
  },
  /**
  * @template T
  * @param {ArrayBuffer | string} rawPayload
  * @param {(msg: Message<unknown>) => T} callback
  * @returns {T}
  */
  decode(rawPayload, callback) {
    if (rawPayload.constructor === ArrayBuffer) {
      return callback(this.binaryDecode(rawPayload));
    } else {
      let [join_ref, ref, topic, event, payload] = JSON.parse(rawPayload);
      return callback({
        join_ref,
        ref,
        topic,
        event,
        payload
      });
    }
  },
  /** @private */
  binaryEncode(message) {
    let {
      join_ref,
      ref,
      event,
      topic,
      payload
    } = message;
    let metaLength = this.META_LENGTH + join_ref.length + ref.length + topic.length + event.length;
    let header = new ArrayBuffer(this.HEADER_LENGTH + metaLength);
    let view = new DataView(header);
    let offset = 0;
    view.setUint8(offset++, this.KINDS.push);
    view.setUint8(offset++, join_ref.length);
    view.setUint8(offset++, ref.length);
    view.setUint8(offset++, topic.length);
    view.setUint8(offset++, event.length);
    Array.from(join_ref, char => view.setUint8(offset++, char.charCodeAt(0)));
    Array.from(ref, char => view.setUint8(offset++, char.charCodeAt(0)));
    Array.from(topic, char => view.setUint8(offset++, char.charCodeAt(0)));
    Array.from(event, char => view.setUint8(offset++, char.charCodeAt(0)));
    var combined = new Uint8Array(header.byteLength + payload.byteLength);
    combined.set(new Uint8Array(header), 0);
    combined.set(new Uint8Array(payload), header.byteLength);
    return combined.buffer;
  },
  /**
  * @private
  */
  binaryDecode(buffer) {
    let view = new DataView(buffer);
    let kind = view.getUint8(0);
    let decoder = new TextDecoder();
    switch (kind) {
      case this.KINDS.push:
        return this.decodePush(buffer, view, decoder);
      case this.KINDS.reply:
        return this.decodeReply(buffer, view, decoder);
      case this.KINDS.broadcast:
        return this.decodeBroadcast(buffer, view, decoder);
    }
  },
  /** @private */
  decodePush(buffer, view, decoder) {
    let joinRefSize = view.getUint8(1);
    let topicSize = view.getUint8(2);
    let eventSize = view.getUint8(3);
    let offset = this.HEADER_LENGTH + this.META_LENGTH - 1;
    let joinRef = decoder.decode(buffer.slice(offset, offset + joinRefSize));
    offset = offset + joinRefSize;
    let topic = decoder.decode(buffer.slice(offset, offset + topicSize));
    offset = offset + topicSize;
    let event = decoder.decode(buffer.slice(offset, offset + eventSize));
    offset = offset + eventSize;
    let data = buffer.slice(offset, buffer.byteLength);
    return {
      join_ref: joinRef,
      ref: null,
      topic,
      event,
      payload: data
    };
  },
  /** @private */
  decodeReply(buffer, view, decoder) {
    let joinRefSize = view.getUint8(1);
    let refSize = view.getUint8(2);
    let topicSize = view.getUint8(3);
    let eventSize = view.getUint8(4);
    let offset = this.HEADER_LENGTH + this.META_LENGTH;
    let joinRef = decoder.decode(buffer.slice(offset, offset + joinRefSize));
    offset = offset + joinRefSize;
    let ref = decoder.decode(buffer.slice(offset, offset + refSize));
    offset = offset + refSize;
    let topic = decoder.decode(buffer.slice(offset, offset + topicSize));
    offset = offset + topicSize;
    let event = decoder.decode(buffer.slice(offset, offset + eventSize));
    offset = offset + eventSize;
    let data = buffer.slice(offset, buffer.byteLength);
    let payload = {
      status: event,
      response: data
    };
    return {
      join_ref: joinRef,
      ref,
      topic,
      event: CHANNEL_EVENTS2.reply,
      payload
    };
  },
  /** @private */
  decodeBroadcast(buffer, view, decoder) {
    let topicSize = view.getUint8(1);
    let eventSize = view.getUint8(2);
    let offset = this.HEADER_LENGTH + 2;
    let topic = decoder.decode(buffer.slice(offset, offset + topicSize));
    offset = offset + topicSize;
    let event = decoder.decode(buffer.slice(offset, offset + eventSize));
    offset = offset + eventSize;
    let data = buffer.slice(offset, buffer.byteLength);
    return {
      join_ref: null,
      ref: null,
      topic,
      event,
      payload: data
    };
  }
};
var Socket = /*#__PURE__*/function () {
  /** Initializes the Socket *
   *
   * For IE8 support use an ES5-shim (https://github.com/es-shims/es5-shim)
   *
   * @constructor
   * @param {string} endPoint - The string WebSocket endpoint, ie, `"ws://example.com/socket"`,
   *                                               `"wss://example.com"`
   *                                               `"/socket"` (inherited host & protocol)
   * @param {SocketOptions} [opts] - Optional configuration
   */
  function Socket(endPoint, opts = {}) {
    _classCallCheck(this, Socket);
    var _a, _b;
    this.stateChangeCallbacks = {
      open: [],
      close: [],
      error: [],
      message: []
    };
    this.channels = [];
    this.sendBuffer = [];
    this.ref = 0;
    this.fallbackRef = null;
    this.timeout = opts.timeout || DEFAULT_TIMEOUT2;
    this.transport = opts.transport || global2.WebSocket || LongPoll;
    this.conn = void 0;
    this.primaryPassedHealthCheck = false;
    this.longPollFallbackMs = opts.longPollFallbackMs;
    this.fallbackTimer = null;
    let envSessionStorage = null;
    try {
      envSessionStorage = global2 && global2.sessionStorage;
    } catch (e) {}
    this.sessionStore = opts.sessionStorage || envSessionStorage;
    this.establishedConnections = 0;
    this.defaultEncoder = serializer_default.encode.bind(serializer_default);
    this.defaultDecoder = serializer_default.decode.bind(serializer_default);
    this.closeWasClean = true;
    this.disconnecting = false;
    this.binaryType = opts.binaryType || "arraybuffer";
    this.connectClock = 1;
    this.pageHidden = false;
    this.encode = void 0;
    this.decode = void 0;
    if (this.transport !== LongPoll) {
      this.encode = opts.encode || this.defaultEncoder;
      this.decode = opts.decode || this.defaultDecoder;
    } else {
      this.encode = this.defaultEncoder;
      this.decode = this.defaultDecoder;
    }
    let awaitingConnectionOnPageShow = null;
    if (phxWindow && phxWindow.addEventListener) {
      phxWindow.addEventListener("pagehide", _e => {
        if (this.conn) {
          this.disconnect();
          awaitingConnectionOnPageShow = this.connectClock;
        }
      });
      phxWindow.addEventListener("pageshow", _e => {
        if (awaitingConnectionOnPageShow === this.connectClock) {
          awaitingConnectionOnPageShow = null;
          this.connect();
        }
      });
      phxWindow.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "hidden") {
          this.pageHidden = true;
        } else {
          this.pageHidden = false;
          if (!this.isConnected() && !this.closeWasClean) {
            this.teardown(() => this.connect());
          }
        }
      });
    }
    this.heartbeatIntervalMs = opts.heartbeatIntervalMs || 3e4;
    this.autoSendHeartbeat = (_a = opts.autoSendHeartbeat) != null ? _a : true;
    this.heartbeatCallback = (_b = opts.heartbeatCallback) != null ? _b : () => {};
    this.rejoinAfterMs = tries => {
      if (opts.rejoinAfterMs) {
        return opts.rejoinAfterMs(tries);
      } else {
        return [1e3, 2e3, 5e3][tries - 1] || 1e4;
      }
    };
    this.reconnectAfterMs = tries => {
      if (opts.reconnectAfterMs) {
        return opts.reconnectAfterMs(tries);
      } else {
        return [10, 50, 100, 150, 200, 250, 500, 1e3, 2e3][tries - 1] || 5e3;
      }
    };
    this.logger = opts.logger || null;
    if (!this.logger && opts.debug) {
      this.logger = (kind, msg, data) => {
        console.log(`${kind}: ${msg}`, data);
      };
    }
    this.longpollerTimeout = opts.longpollerTimeout || 2e4;
    this.params = closure(opts.params || {});
    this.endPoint = `${endPoint}/${TRANSPORTS.websocket}`;
    this.vsn = opts.vsn || DEFAULT_VSN2;
    this.heartbeatTimeoutTimer = null;
    this.heartbeatTimer = null;
    this.heartbeatSentAt = null;
    this.pendingHeartbeatRef = null;
    this.reconnectTimer = new Timer(() => {
      if (this.pageHidden) {
        this.log("Not reconnecting as page is hidden!");
        this.teardown();
        return;
      }
      this.teardown(() => __async(this, null, function* () {
        if (opts.beforeReconnect) yield opts.beforeReconnect();
        this.connect();
      }));
    }, this.reconnectAfterMs);
    this.authToken = opts.authToken;
  }
  /**
   * Returns the LongPoll transport reference
   */
  return _createClass(Socket, [{
    key: "getLongPollTransport",
    value: function getLongPollTransport() {
      return LongPoll;
    }
    /**
     * Disconnects and replaces the active transport
     *
     * @param {SocketTransport} newTransport - The new transport class to instantiate
     *
     */
  }, {
    key: "replaceTransport",
    value: function replaceTransport(newTransport) {
      this.connectClock++;
      this.closeWasClean = true;
      clearTimeout(this.fallbackTimer);
      this.reconnectTimer.reset();
      if (this.conn) {
        this.conn.close();
        this.conn = null;
      }
      this.transport = newTransport;
    }
    /**
     * Returns the socket protocol
     *
     * @returns {"wss" | "ws"}
     */
  }, {
    key: "protocol",
    value: function protocol() {
      return location.protocol.match(/^https/) ? "wss" : "ws";
    }
    /**
     * The fully qualified socket url
     *
     * @returns {string}
     */
  }, {
    key: "endPointURL",
    value: function endPointURL() {
      let uri = Ajax.appendParams(Ajax.appendParams(this.endPoint, this.params()), {
        vsn: this.vsn
      });
      if (uri.charAt(0) !== "/") {
        return uri;
      }
      if (uri.charAt(1) === "/") {
        return `${this.protocol()}:${uri}`;
      }
      return `${this.protocol()}://${location.host}${uri}`;
    }
    /**
     * Disconnects the socket
     *
     * See https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent#Status_codes for valid status codes.
     *
     * @param {() => void} [callback] - Optional callback which is called after socket is disconnected.
     * @param {number} [code] - A status code for disconnection (Optional).
     * @param {string} [reason] - A textual description of the reason to disconnect. (Optional)
     */
  }, {
    key: "disconnect",
    value: function disconnect(callback, code, reason) {
      this.connectClock++;
      this.disconnecting = true;
      this.closeWasClean = true;
      clearTimeout(this.fallbackTimer);
      this.reconnectTimer.reset();
      this.teardown(() => {
        this.disconnecting = false;
        callback && callback();
      }, code, reason);
    }
    /**
     * @param {Params} [params] - [DEPRECATED] The params to send when connecting, for example `{user_id: userToken}`
     *
     * Passing params to connect is deprecated; pass them in the Socket constructor instead:
     * `new Socket("/socket", {params: {user_id: userToken}})`.
     */
  }, {
    key: "connect",
    value: function connect(params) {
      if (params) {
        console && console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor");
        this.params = closure(params);
      }
      if (this.conn && !this.disconnecting) {
        return;
      }
      if (this.longPollFallbackMs && this.transport !== LongPoll) {
        this.connectWithFallback(LongPoll, this.longPollFallbackMs);
      } else {
        this.transportConnect();
      }
    }
    /**
     * Logs the message. Override `this.logger` for specialized logging. noops by default
     * @param {string} kind
     * @param {string} msg
     * @param {Object} data
     */
  }, {
    key: "log",
    value: function log(kind, msg, data) {
      this.logger && this.logger(kind, msg, data);
    }
    /**
     * Returns true if a logger has been set on this socket.
     */
  }, {
    key: "hasLogger",
    value: function hasLogger() {
      return this.logger !== null;
    }
    /**
     * Registers callbacks for connection open events
     *
     * @example socket.onOpen(function(){ console.info("the socket was opened") })
     *
     * @param {SocketOnOpen} callback
     */
  }, {
    key: "onOpen",
    value: function onOpen(callback) {
      let ref = this.makeRef();
      this.stateChangeCallbacks.open.push([ref, callback]);
      return ref;
    }
    /**
     * Registers callbacks for connection close events
     * @param {SocketOnClose} callback
     * @returns {string}
     */
  }, {
    key: "onClose",
    value: function onClose(callback) {
      let ref = this.makeRef();
      this.stateChangeCallbacks.close.push([ref, callback]);
      return ref;
    }
    /**
     * Registers callbacks for connection error events
     *
     * @example socket.onError(function(error){ alert("An error occurred") })
     *
     * @param {SocketOnError} callback
     * @returns {string}
     */
  }, {
    key: "onError",
    value: function onError(callback) {
      let ref = this.makeRef();
      this.stateChangeCallbacks.error.push([ref, callback]);
      return ref;
    }
    /**
     * Registers callbacks for connection message events
     * @param {SocketOnMessage} callback
     * @returns {string}
     */
  }, {
    key: "onMessage",
    value: function onMessage(callback) {
      let ref = this.makeRef();
      this.stateChangeCallbacks.message.push([ref, callback]);
      return ref;
    }
    /**
     * Sets a callback that receives lifecycle events for internal heartbeat messages.
     * Useful for instrumenting connection health (e.g. sent/ok/timeout/disconnected).
     * @param {HeartbeatCallback} callback
     */
  }, {
    key: "onHeartbeat",
    value: function onHeartbeat(callback) {
      this.heartbeatCallback = callback;
    }
    /**
     * Pings the server and invokes the callback with the RTT in milliseconds
     * @param {(timeDelta: number) => void} callback
     *
     * Returns true if the ping was pushed or false if unable to be pushed.
     */
  }, {
    key: "ping",
    value: function ping(callback) {
      if (!this.isConnected()) {
        return false;
      }
      let ref = this.makeRef();
      let startTime = Date.now();
      this.push({
        topic: "phoenix",
        event: "heartbeat",
        payload: {},
        ref
      });
      let onMsgRef = this.onMessage(msg => {
        if (msg.ref === ref) {
          this.off([onMsgRef]);
          callback(Date.now() - startTime);
        }
      });
      return true;
    }
    /**
     * @private
     *
     * @param {Function}
     */
  }, {
    key: "transportName",
    value: function transportName(transport) {
      switch (transport) {
        case LongPoll:
          return "LongPoll";
        default:
          return transport.name;
      }
    }
    /**
     * @private
     */
  }, {
    key: "transportConnect",
    value: function transportConnect() {
      this.connectClock++;
      this.closeWasClean = false;
      let protocols = void 0;
      if (this.authToken) {
        protocols = ["phoenix", `${AUTH_TOKEN_PREFIX}${btoa(this.authToken).replace(/=/g, "")}`];
      }
      this.conn = new this.transport(this.endPointURL(), protocols);
      this.conn.binaryType = this.binaryType;
      this.conn.timeout = this.longpollerTimeout;
      this.conn.onopen = () => this.onConnOpen();
      this.conn.onerror = error => this.onConnError(error);
      this.conn.onmessage = event => this.onConnMessage(event);
      this.conn.onclose = event => this.onConnClose(event);
    }
  }, {
    key: "getSession",
    value: function getSession(key) {
      return this.sessionStore && this.sessionStore.getItem(key);
    }
  }, {
    key: "storeSession",
    value: function storeSession(key, val) {
      this.sessionStore && this.sessionStore.setItem(key, val);
    }
  }, {
    key: "connectWithFallback",
    value: function connectWithFallback(fallbackTransport, fallbackThreshold = 2500) {
      clearTimeout(this.fallbackTimer);
      let established = false;
      let primaryTransport = true;
      let openRef, errorRef;
      let fallbackTransportName = this.transportName(fallbackTransport);
      let fallback = reason => {
        this.log("transport", `falling back to ${fallbackTransportName}...`, reason);
        this.off([openRef, errorRef]);
        primaryTransport = false;
        this.replaceTransport(fallbackTransport);
        this.transportConnect();
      };
      if (this.getSession(`phx:fallback:${fallbackTransportName}`)) {
        return fallback("memorized");
      }
      this.fallbackTimer = setTimeout(fallback, fallbackThreshold);
      errorRef = this.onError(reason => {
        this.log("transport", "error", reason);
        if (primaryTransport && !established) {
          clearTimeout(this.fallbackTimer);
          fallback(reason);
        }
      });
      if (this.fallbackRef) {
        this.off([this.fallbackRef]);
      }
      this.fallbackRef = this.onOpen(() => {
        established = true;
        if (!primaryTransport) {
          let fallbackTransportName2 = this.transportName(fallbackTransport);
          if (!this.primaryPassedHealthCheck) {
            this.storeSession(`phx:fallback:${fallbackTransportName2}`, "true");
          }
          return this.log("transport", `established ${fallbackTransportName2} fallback`);
        }
        clearTimeout(this.fallbackTimer);
        this.fallbackTimer = setTimeout(fallback, fallbackThreshold);
        this.ping(rtt => {
          this.log("transport", "connected to primary after", rtt);
          this.primaryPassedHealthCheck = true;
          clearTimeout(this.fallbackTimer);
        });
      });
      this.transportConnect();
    }
  }, {
    key: "clearHeartbeats",
    value: function clearHeartbeats() {
      clearTimeout(this.heartbeatTimer);
      clearTimeout(this.heartbeatTimeoutTimer);
    }
  }, {
    key: "onConnOpen",
    value: function onConnOpen() {
      if (this.hasLogger()) this.log("transport", `connected to ${this.endPointURL()}`);
      this.closeWasClean = false;
      this.disconnecting = false;
      this.establishedConnections++;
      this.flushSendBuffer();
      this.reconnectTimer.reset();
      if (this.autoSendHeartbeat) {
        this.resetHeartbeat();
      }
      this.triggerStateCallbacks("open");
    }
    /**
     * @private
     */
  }, {
    key: "heartbeatTimeout",
    value: function heartbeatTimeout() {
      if (this.pendingHeartbeatRef) {
        this.pendingHeartbeatRef = null;
        this.heartbeatSentAt = null;
        if (this.hasLogger()) {
          this.log("transport", "heartbeat timeout. Attempting to re-establish connection");
        }
        try {
          this.heartbeatCallback("timeout");
        } catch (e) {
          this.log("error", "error in heartbeat callback", e);
        }
        this.triggerChanError(new Error("heartbeat timeout"));
        this.closeWasClean = false;
        this.teardown(() => this.reconnectTimer.scheduleTimeout(), WS_CLOSE_NORMAL, "heartbeat timeout");
      }
    }
  }, {
    key: "resetHeartbeat",
    value: function resetHeartbeat() {
      if (this.conn && this.conn.skipHeartbeat) {
        return;
      }
      this.pendingHeartbeatRef = null;
      this.clearHeartbeats();
      this.heartbeatTimer = setTimeout(() => this.sendHeartbeat(), this.heartbeatIntervalMs);
    }
  }, {
    key: "teardown",
    value: function teardown(callback, code, reason) {
      if (!this.conn) {
        return callback && callback();
      }
      const connToClose = this.conn;
      this.waitForBufferDone(connToClose, () => {
        if (code) {
          connToClose.close(code, reason || "");
        } else {
          connToClose.close();
        }
        this.waitForSocketClosed(connToClose, () => {
          if (this.conn === connToClose) {
            this.conn.onopen = function () {};
            this.conn.onerror = function () {};
            this.conn.onmessage = function () {};
            this.conn.onclose = function () {};
            this.conn = null;
          }
          callback && callback();
        });
      });
    }
  }, {
    key: "waitForBufferDone",
    value: function waitForBufferDone(conn, callback, tries = 1) {
      if (tries === 5 || !conn.bufferedAmount) {
        callback();
        return;
      }
      setTimeout(() => {
        this.waitForBufferDone(conn, callback, tries + 1);
      }, 150 * tries);
    }
  }, {
    key: "waitForSocketClosed",
    value: function waitForSocketClosed(conn, callback, tries = 1) {
      if (tries === 5 || conn.readyState === SOCKET_STATES.closed) {
        callback();
        return;
      }
      setTimeout(() => {
        this.waitForSocketClosed(conn, callback, tries + 1);
      }, 150 * tries);
    }
    /**
    * @param {CloseEvent} event
    */
  }, {
    key: "onConnClose",
    value: function onConnClose(event) {
      if (this.conn) this.conn.onclose = () => {};
      if (this.hasLogger()) this.log("transport", "close", event);
      this.triggerChanError(event);
      this.clearHeartbeats();
      if (!this.closeWasClean) {
        this.reconnectTimer.scheduleTimeout();
      }
      this.triggerStateCallbacks("close", event);
    }
    /**
     * @private
     * @param {Event} error
     */
  }, {
    key: "onConnError",
    value: function onConnError(error) {
      if (this.hasLogger()) this.log("transport", "error", error);
      let transportBefore = this.transport;
      let establishedBefore = this.establishedConnections;
      this.triggerStateCallbacks("error", error, transportBefore, establishedBefore);
      if (transportBefore === this.transport || establishedBefore > 0) {
        this.triggerChanError(error);
      }
    }
    /**
     * @private
     * @param {unknown} [reason] underlying close/error event forwarded to channel error listeners
     */
  }, {
    key: "triggerChanError",
    value: function triggerChanError(reason) {
      this.channels.forEach(channel => {
        if (!(channel.isErrored() || channel.isLeaving() || channel.isClosed())) {
          channel.trigger(CHANNEL_EVENTS2.error, reason);
        }
      });
    }
    /**
     * @returns {string}
     */
  }, {
    key: "connectionState",
    value: function connectionState() {
      switch (this.conn && this.conn.readyState) {
        case SOCKET_STATES.connecting:
          return "connecting";
        case SOCKET_STATES.open:
          return "open";
        case SOCKET_STATES.closing:
          return "closing";
        default:
          return "closed";
      }
    }
    /**
     * @returns {boolean}
     */
  }, {
    key: "isConnected",
    value: function isConnected() {
      return this.connectionState() === "open";
    }
    /**
     *
     * @param {Channel} channel
     */
  }, {
    key: "remove",
    value: function remove(channel) {
      this.off(channel.stateChangeRefs);
      this.channels = this.channels.filter(c => c !== channel);
    }
    /**
     * Removes `onOpen`, `onClose`, `onError,` and `onMessage` registrations.
     *
     * @param {string[]} refs - list of refs returned by calls to
     *                 `onOpen`, `onClose`, `onError,` and `onMessage`
     */
  }, {
    key: "off",
    value: function off(refs) {
      for (let key in this.stateChangeCallbacks) {
        this.stateChangeCallbacks[key] = this.stateChangeCallbacks[key].filter(([ref]) => {
          return refs.indexOf(ref) === -1;
        });
      }
    }
    /**
     * Initiates a new channel for the given topic
     *
     * @param {string} topic
     * @param {Params | (() => Params)} [chanParams]- Parameters for the channel
     * @returns {Channel}
     */
  }, {
    key: "channel",
    value: function channel(topic, chanParams = {}) {
      let chan = new Channel(topic, chanParams, this);
      this.channels.push(chan);
      return chan;
    }
    /**
     * @param {Message<Record<string, any>>} data
     */
  }, {
    key: "push",
    value: function push(data) {
      if (this.hasLogger()) {
        let {
          topic,
          event,
          payload,
          ref,
          join_ref
        } = data;
        this.log("push", `${topic} ${event} (${join_ref}, ${ref})`, payload);
      }
      if (this.isConnected()) {
        this.encode(data, result => this.conn.send(result));
      } else {
        this.sendBuffer.push(() => this.encode(data, result => this.conn.send(result)));
      }
    }
    /**
     * Return the next message ref, accounting for overflows
     * @returns {string}
     */
  }, {
    key: "makeRef",
    value: function makeRef() {
      let newRef = this.ref + 1;
      if (newRef === this.ref) {
        this.ref = 0;
      } else {
        this.ref = newRef;
      }
      return this.ref.toString();
    }
  }, {
    key: "sendHeartbeat",
    value: function sendHeartbeat() {
      if (!this.isConnected()) {
        try {
          this.heartbeatCallback("disconnected");
        } catch (e) {
          this.log("error", "error in heartbeat callback", e);
        }
        return;
      }
      if (this.pendingHeartbeatRef) {
        this.heartbeatTimeout();
        return;
      }
      this.pendingHeartbeatRef = this.makeRef();
      this.heartbeatSentAt = Date.now();
      this.push({
        topic: "phoenix",
        event: "heartbeat",
        payload: {},
        ref: this.pendingHeartbeatRef
      });
      try {
        this.heartbeatCallback("sent");
      } catch (e) {
        this.log("error", "error in heartbeat callback", e);
      }
      this.heartbeatTimeoutTimer = setTimeout(() => this.heartbeatTimeout(), this.heartbeatIntervalMs);
    }
  }, {
    key: "flushSendBuffer",
    value: function flushSendBuffer() {
      if (this.isConnected() && this.sendBuffer.length > 0) {
        this.sendBuffer.forEach(callback => callback());
        this.sendBuffer = [];
      }
    }
    /**
    * @param {MessageEvent<any>} rawMessage
    */
  }, {
    key: "onConnMessage",
    value: function onConnMessage(rawMessage) {
      this.decode(rawMessage.data, msg => {
        let {
          topic,
          event,
          payload,
          ref,
          join_ref
        } = msg;
        if (ref && ref === this.pendingHeartbeatRef) {
          const latency = this.heartbeatSentAt ? Date.now() - this.heartbeatSentAt : void 0;
          this.clearHeartbeats();
          try {
            this.heartbeatCallback(payload.status === "ok" ? "ok" : "error", latency);
          } catch (e) {
            this.log("error", "error in heartbeat callback", e);
          }
          this.pendingHeartbeatRef = null;
          this.heartbeatSentAt = null;
          if (this.autoSendHeartbeat) {
            this.heartbeatTimer = setTimeout(() => this.sendHeartbeat(), this.heartbeatIntervalMs);
          }
        }
        if (this.hasLogger()) this.log("receive", `${payload.status || ""} ${topic} ${event} ${ref && "(" + ref + ")" || ""}`.trim(), payload);
        for (let i = 0; i < this.channels.length; i++) {
          const channel = this.channels[i];
          if (!channel.isMember(topic, event, payload, join_ref)) {
            continue;
          }
          channel.trigger(event, payload, ref, join_ref);
        }
        this.triggerStateCallbacks("message", msg);
      });
    }
    /**
     * @private
     * @template {keyof SocketStateChangeCallbacks} K
     * @param {K} event
     * @param {...Parameters<SocketStateChangeCallbacks[K][number][1]>} args
     * @returns {void}
     */
  }, {
    key: "triggerStateCallbacks",
    value: function triggerStateCallbacks(event, ...args) {
      try {
        this.stateChangeCallbacks[event].forEach(([_, callback]) => {
          try {
            callback(...args);
          } catch (e) {
            this.log("error", `error in ${event} callback`, e);
          }
        });
      } catch (e) {
        this.log("error", `error triggering ${event} callbacks`, e);
      }
    }
  }, {
    key: "leaveOpenTopic",
    value: function leaveOpenTopic(topic) {
      let dupChannel = this.channels.find(c => c.topic === topic && (c.isJoined() || c.isJoining()));
      if (dupChannel) {
        if (this.hasLogger()) this.log("transport", `leaving duplicate topic "${topic}"`);
        dupChannel.leave();
      }
    }
  }]);
}();

// node_modules/.pnpm/@supabase+realtime-js@2.108.1/node_modules/@supabase/realtime-js/dist/module/phoenix/presenceAdapter.js
var PresenceAdapter = /*#__PURE__*/function () {
  function _PresenceAdapter(channel, opts) {
    _classCallCheck(this, _PresenceAdapter);
    const phoenixOptions = phoenixPresenceOptions(opts);
    this.presence = new Presence(channel.getChannel(), phoenixOptions);
    this.presence.onJoin((key, currentPresence, newPresence) => {
      const onJoinPayload = _PresenceAdapter.onJoinPayload(key, currentPresence, newPresence);
      channel.getChannel().trigger("presence", onJoinPayload);
    });
    this.presence.onLeave((key, currentPresence, leftPresence) => {
      const onLeavePayload = _PresenceAdapter.onLeavePayload(key, currentPresence, leftPresence);
      channel.getChannel().trigger("presence", onLeavePayload);
    });
    this.presence.onSync(() => {
      channel.getChannel().trigger("presence", {
        event: "sync"
      });
    });
  }
  return _createClass(_PresenceAdapter, [{
    key: "state",
    get: function () {
      return _PresenceAdapter.transformState(this.presence.state);
    }
    /**
     * @private
     * Remove 'metas' key
     * Change 'phx_ref' to 'presence_ref'
     * Remove 'phx_ref' and 'phx_ref_prev'
     *
     * @example Transform state
     * // returns {
     *  abc123: [
     *    { presence_ref: '2', user_id: 1 },
     *    { presence_ref: '3', user_id: 2 }
     *  ]
     * }
     * RealtimePresence.transformState({
     *  abc123: {
     *    metas: [
     *      { phx_ref: '2', phx_ref_prev: '1' user_id: 1 },
     *      { phx_ref: '3', user_id: 2 }
     *    ]
     *  }
     * })
     *
     */
  }], [{
    key: "transformState",
    value: function transformState(state) {
      state = cloneState(state);
      return Object.getOwnPropertyNames(state).reduce((newState, key) => {
        const presences = state[key];
        newState[key] = _transformState(presences);
        return newState;
      }, {});
    }
  }, {
    key: "onJoinPayload",
    value: function onJoinPayload(key, currentPresence, newPresence) {
      const currentPresences = parseCurrentPresences(currentPresence);
      const newPresences = _transformState(newPresence);
      return {
        event: "join",
        key,
        currentPresences,
        newPresences
      };
    }
  }, {
    key: "onLeavePayload",
    value: function onLeavePayload(key, currentPresence, leftPresence) {
      const currentPresences = parseCurrentPresences(currentPresence);
      const leftPresences = _transformState(leftPresence);
      return {
        event: "leave",
        key,
        currentPresences,
        leftPresences
      };
    }
  }]);
}();
function _transformState(presences) {
  return presences.metas.map(presence => {
    presence["presence_ref"] = presence["phx_ref"];
    delete presence["phx_ref"];
    delete presence["phx_ref_prev"];
    return presence;
  });
}
function cloneState(state) {
  return JSON.parse(JSON.stringify(state));
}
function phoenixPresenceOptions(opts) {
  return (opts === null || opts === void 0 ? void 0 : opts.events) && {
    events: opts.events
  };
}
function parseCurrentPresences(currentPresences) {
  return (currentPresences === null || currentPresences === void 0 ? void 0 : currentPresences.metas) ? _transformState(currentPresences) : [];
}

// node_modules/.pnpm/@supabase+realtime-js@2.108.1/node_modules/@supabase/realtime-js/dist/module/RealtimePresence.js
var REALTIME_PRESENCE_LISTEN_EVENTS;
(function (REALTIME_PRESENCE_LISTEN_EVENTS2) {
  REALTIME_PRESENCE_LISTEN_EVENTS2["SYNC"] = "sync";
  REALTIME_PRESENCE_LISTEN_EVENTS2["JOIN"] = "join";
  REALTIME_PRESENCE_LISTEN_EVENTS2["LEAVE"] = "leave";
})(REALTIME_PRESENCE_LISTEN_EVENTS || (REALTIME_PRESENCE_LISTEN_EVENTS = {}));
var RealtimePresence = /*#__PURE__*/function () {
  /**
   * Creates a Presence helper that keeps the local presence state in sync with the server.
   *
   * @param channel - The realtime channel to bind to.
   * @param opts - Optional custom event names, e.g. `{ events: { state: 'state', diff: 'diff' } }`.
   *
   * @category Realtime
   *
   * @example Example for a presence channel
   * ```ts
   * const presence = new RealtimePresence(channel)
   *
   * channel.on('presence', ({ event, key }) => {
   *   console.log(`Presence ${event} on ${key}`)
   * })
   * ```
   */
  function RealtimePresence(channel, opts) {
    _classCallCheck(this, RealtimePresence);
    this.channel = channel;
    this.presenceAdapter = new PresenceAdapter(this.channel.channelAdapter, opts);
  }
  return _createClass(RealtimePresence, [{
    key: "state",
    get: function () {
      return this.presenceAdapter.state;
    }
  }]);
}();

// node_modules/.pnpm/@supabase+realtime-js@2.108.1/node_modules/@supabase/realtime-js/dist/module/lib/normalizeChannelError.js
function normalizeChannelError(reason) {
  if (reason instanceof Error) {
    return reason;
  }
  if (typeof reason === "string") {
    return new Error(reason);
  }
  if (reason && typeof reason === "object") {
    const obj = reason;
    if (typeof obj.code === "number") {
      const detail = typeof obj.reason === "string" && obj.reason ? ` (${obj.reason})` : "";
      return new Error(`socket closed: ${obj.code}${detail}`, {
        cause: reason
      });
    }
    return new Error("channel error: transport failure", {
      cause: reason
    });
  }
  return new Error("channel error: connection lost");
}

// node_modules/.pnpm/@supabase+realtime-js@2.108.1/node_modules/@supabase/realtime-js/dist/module/phoenix/channelAdapter.js
var ChannelAdapter = /*#__PURE__*/function () {
  function ChannelAdapter(socket, topic, params) {
    _classCallCheck(this, ChannelAdapter);
    const phoenixParams = phoenixChannelParams(params);
    this.channel = socket.getSocket().channel(topic, phoenixParams);
    this.socket = socket;
  }
  return _createClass(ChannelAdapter, [{
    key: "state",
    get: function () {
      return this.channel.state;
    },
    set: function (state) {
      this.channel.state = state;
    }
  }, {
    key: "joinedOnce",
    get: function () {
      return this.channel.joinedOnce;
    }
  }, {
    key: "joinPush",
    get: function () {
      return this.channel.joinPush;
    }
  }, {
    key: "rejoinTimer",
    get: function () {
      return this.channel.rejoinTimer;
    }
  }, {
    key: "on",
    value: function on(event, callback) {
      return this.channel.on(event, callback);
    }
  }, {
    key: "off",
    value: function off(event, refNumber) {
      this.channel.off(event, refNumber);
    }
  }, {
    key: "subscribe",
    value: function subscribe(timeout) {
      return this.channel.join(timeout);
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(timeout) {
      return this.channel.leave(timeout);
    }
  }, {
    key: "teardown",
    value: function teardown() {
      this.channel.teardown();
    }
  }, {
    key: "onClose",
    value: function onClose(callback) {
      this.channel.onClose(callback);
    }
  }, {
    key: "onError",
    value: function onError(callback) {
      return this.channel.onError(callback);
    }
  }, {
    key: "push",
    value: function push(event, payload, timeout) {
      let push;
      try {
        push = this.channel.push(event, payload, timeout);
      } catch (error) {
        throw new Error(`tried to push '${event}' to '${this.channel.topic}' before joining. Use channel.subscribe() before pushing events`);
      }
      if (this.channel.pushBuffer.length > MAX_PUSH_BUFFER_SIZE) {
        const removedPush = this.channel.pushBuffer.shift();
        removedPush.cancelTimeout();
        this.socket.log("channel", `discarded push due to buffer overflow: ${removedPush.event}`, removedPush.payload());
      }
      return push;
    }
  }, {
    key: "updateJoinPayload",
    value: function updateJoinPayload(payload) {
      const oldPayload = this.channel.joinPush.payload();
      this.channel.joinPush.payload = () => Object.assign(Object.assign({}, oldPayload), payload);
    }
  }, {
    key: "canPush",
    value: function canPush() {
      return this.socket.isConnected() && this.state === CHANNEL_STATES.joined;
    }
  }, {
    key: "isJoined",
    value: function isJoined() {
      return this.state === CHANNEL_STATES.joined;
    }
  }, {
    key: "isJoining",
    value: function isJoining() {
      return this.state === CHANNEL_STATES.joining;
    }
  }, {
    key: "isClosed",
    value: function isClosed() {
      return this.state === CHANNEL_STATES.closed;
    }
  }, {
    key: "isLeaving",
    value: function isLeaving() {
      return this.state === CHANNEL_STATES.leaving;
    }
  }, {
    key: "updateFilterBindings",
    value: function updateFilterBindings(filterBindings) {
      this.channel.filterBindings = filterBindings;
    }
  }, {
    key: "updatePayloadTransform",
    value: function updatePayloadTransform(callback) {
      this.channel.onMessage = callback;
    }
    /**
     * @internal
     */
  }, {
    key: "getChannel",
    value: function getChannel() {
      return this.channel;
    }
  }]);
}();
function phoenixChannelParams(options) {
  return {
    config: Object.assign({
      broadcast: {
        ack: false,
        self: false
      },
      presence: {
        key: "",
        enabled: false
      },
      private: false
    }, options.config)
  };
}

// node_modules/.pnpm/@supabase+realtime-js@2.108.1/node_modules/@supabase/realtime-js/dist/module/RealtimeChannel.js
var REALTIME_POSTGRES_CHANGES_LISTEN_EVENT;
(function (REALTIME_POSTGRES_CHANGES_LISTEN_EVENT2) {
  REALTIME_POSTGRES_CHANGES_LISTEN_EVENT2["ALL"] = "*";
  REALTIME_POSTGRES_CHANGES_LISTEN_EVENT2["INSERT"] = "INSERT";
  REALTIME_POSTGRES_CHANGES_LISTEN_EVENT2["UPDATE"] = "UPDATE";
  REALTIME_POSTGRES_CHANGES_LISTEN_EVENT2["DELETE"] = "DELETE";
})(REALTIME_POSTGRES_CHANGES_LISTEN_EVENT || (REALTIME_POSTGRES_CHANGES_LISTEN_EVENT = {}));
var REALTIME_LISTEN_TYPES;
(function (REALTIME_LISTEN_TYPES2) {
  REALTIME_LISTEN_TYPES2["BROADCAST"] = "broadcast";
  REALTIME_LISTEN_TYPES2["PRESENCE"] = "presence";
  REALTIME_LISTEN_TYPES2["POSTGRES_CHANGES"] = "postgres_changes";
  REALTIME_LISTEN_TYPES2["SYSTEM"] = "system";
})(REALTIME_LISTEN_TYPES || (REALTIME_LISTEN_TYPES = {}));
var REALTIME_SUBSCRIBE_STATES;
(function (REALTIME_SUBSCRIBE_STATES2) {
  REALTIME_SUBSCRIBE_STATES2["SUBSCRIBED"] = "SUBSCRIBED";
  REALTIME_SUBSCRIBE_STATES2["TIMED_OUT"] = "TIMED_OUT";
  REALTIME_SUBSCRIBE_STATES2["CLOSED"] = "CLOSED";
  REALTIME_SUBSCRIBE_STATES2["CHANNEL_ERROR"] = "CHANNEL_ERROR";
})(REALTIME_SUBSCRIBE_STATES || (REALTIME_SUBSCRIBE_STATES = {}));
var RealtimeChannel = /*#__PURE__*/function () {
  /**
   * Creates a channel that can broadcast messages, sync presence, and listen to Postgres changes.
   *
   * The topic determines which realtime stream you are subscribing to. Config options let you
   * enable acknowledgement for broadcasts, presence tracking, or private channels.
   *
   * @category Realtime
   *
   * @example Using supabase-js (recommended)
   * ```ts
   * import { createClient } from '@supabase/supabase-js'
   *
   * const supabase = createClient('https://xyzcompany.supabase.co', 'your-publishable-key')
   * const channel = supabase.channel('room1')
   * channel
   *   .on('broadcast', { event: 'cursor-pos' }, (payload) => console.log(payload))
   *   .subscribe()
   * ```
   *
   * @example Standalone import for bundle-sensitive environments
   * ```ts
   * import RealtimeClient from '@supabase/realtime-js'
   *
   * const client = new RealtimeClient('https://xyzcompany.supabase.co/realtime/v1', {
   *   params: { apikey: 'your-publishable-key' },
   * })
   * const channel = new RealtimeChannel('realtime:public:messages', { config: {} }, client)
   * ```
   */
  function _RealtimeChannel(topic, params = {
    config: {}
  }, socket) {
    _classCallCheck(this, _RealtimeChannel);
    var _a, _b;
    this.topic = topic;
    this.params = params;
    this.socket = socket;
    this.bindings = {};
    this.subTopic = topic.replace(/^realtime:/i, "");
    this.params.config = Object.assign({
      broadcast: {
        ack: false,
        self: false
      },
      presence: {
        key: "",
        enabled: false
      },
      private: false
    }, params.config);
    this.channelAdapter = new ChannelAdapter(this.socket.socketAdapter, topic, this.params);
    this.presence = new RealtimePresence(this);
    this._onClose(() => {
      this.socket._remove(this);
    });
    this._updateFilterTransform();
    this.broadcastEndpointURL = httpEndpointURL(this.socket.socketAdapter.endPointURL());
    this.private = this.params.config.private || false;
    if (!this.private && ((_b = (_a = this.params.config) === null || _a === void 0 ? void 0 : _a.broadcast) === null || _b === void 0 ? void 0 : _b.replay)) {
      throw new Error(`tried to use replay on public channel '${this.topic}'. It must be a private channel.`);
    }
  }
  /**
   * Subscribe registers your client with the server.
   *
   * The optional `callback` receives a `status` and, on failure, an `err` argument.
   * Log the full `err` so its `cause`, `name`, and any structured fields aren't hidden
   * behind `err.message`.
   *
   * @category Realtime
   *
   * @example Handling errors
   * ```js
   * supabase.channel('room1').subscribe((status, err) => {
   *   if (status === 'CHANNEL_ERROR' || status === 'TIMED_OUT') {
   *     // Log the full error: its `cause` often holds the underlying reason.
   *     console.error(status, err)
   *   }
   * })
   * ```
   */
  return _createClass(_RealtimeChannel, [{
    key: "state",
    get: function () {
      return this.channelAdapter.state;
    },
    set: function (state) {
      this.channelAdapter.state = state;
    }
  }, {
    key: "joinedOnce",
    get: function () {
      return this.channelAdapter.joinedOnce;
    }
  }, {
    key: "timeout",
    get: function () {
      return this.socket.timeout;
    }
  }, {
    key: "joinPush",
    get: function () {
      return this.channelAdapter.joinPush;
    }
  }, {
    key: "rejoinTimer",
    get: function () {
      return this.channelAdapter.rejoinTimer;
    }
  }, {
    key: "subscribe",
    value: function subscribe(callback, timeout = this.timeout) {
      var _a, _b, _c;
      if (!this.socket.isConnected()) {
        this.socket.connect();
      }
      if (this.channelAdapter.isClosed()) {
        const {
          config: {
            broadcast,
            presence,
            private: isPrivate
          }
        } = this.params;
        const postgres_changes = (_b = (_a = this.bindings.postgres_changes) === null || _a === void 0 ? void 0 : _a.map(r => r.filter)) !== null && _b !== void 0 ? _b : [];
        const presence_enabled = !!this.bindings[REALTIME_LISTEN_TYPES.PRESENCE] && this.bindings[REALTIME_LISTEN_TYPES.PRESENCE].length > 0 || ((_c = this.params.config.presence) === null || _c === void 0 ? void 0 : _c.enabled) === true;
        const accessTokenPayload = {};
        const config3 = {
          broadcast,
          presence: Object.assign(Object.assign({}, presence), {
            enabled: presence_enabled
          }),
          postgres_changes,
          private: isPrivate
        };
        if (this.socket.accessTokenValue) {
          accessTokenPayload.access_token = this.socket.accessTokenValue;
        }
        this._onError(reason => {
          callback === null || callback === void 0 ? void 0 : callback(REALTIME_SUBSCRIBE_STATES.CHANNEL_ERROR, normalizeChannelError(reason));
        });
        this._onClose(() => callback === null || callback === void 0 ? void 0 : callback(REALTIME_SUBSCRIBE_STATES.CLOSED));
        this.updateJoinPayload(Object.assign({
          config: config3
        }, accessTokenPayload));
        this._updateFilterMessage();
        this.channelAdapter.subscribe(timeout).receive("ok", _0 => __async(this, [_0], function* ({
          postgres_changes: postgres_changes2
        }) {
          if (!this.socket._isManualToken()) {
            this.socket.setAuth();
          }
          if (postgres_changes2 === void 0) {
            callback === null || callback === void 0 ? void 0 : callback(REALTIME_SUBSCRIBE_STATES.SUBSCRIBED);
            return;
          }
          this._updatePostgresBindings(postgres_changes2, callback);
        })).receive("error", error => {
          this.state = CHANNEL_STATES.errored;
          const message = Object.values(error).join(", ") || "error";
          callback === null || callback === void 0 ? void 0 : callback(REALTIME_SUBSCRIBE_STATES.CHANNEL_ERROR, new Error(message, {
            cause: error
          }));
        }).receive("timeout", () => {
          callback === null || callback === void 0 ? void 0 : callback(REALTIME_SUBSCRIBE_STATES.TIMED_OUT);
        });
      }
      return this;
    }
  }, {
    key: "_updatePostgresBindings",
    value: function _updatePostgresBindings(postgres_changes, callback) {
      var _a;
      const clientPostgresBindings = this.bindings.postgres_changes;
      const bindingsLen = (_a = clientPostgresBindings === null || clientPostgresBindings === void 0 ? void 0 : clientPostgresBindings.length) !== null && _a !== void 0 ? _a : 0;
      const newPostgresBindings = [];
      for (let i = 0; i < bindingsLen; i++) {
        const clientPostgresBinding = clientPostgresBindings[i];
        const {
          filter: {
            event,
            schema,
            table,
            filter
          }
        } = clientPostgresBinding;
        const serverPostgresFilter = postgres_changes && postgres_changes[i];
        if (serverPostgresFilter && serverPostgresFilter.event === event && _RealtimeChannel.isFilterValueEqual(serverPostgresFilter.schema, schema) && _RealtimeChannel.isFilterValueEqual(serverPostgresFilter.table, table) && _RealtimeChannel.isFilterValueEqual(serverPostgresFilter.filter, filter)) {
          newPostgresBindings.push(Object.assign(Object.assign({}, clientPostgresBinding), {
            id: serverPostgresFilter.id
          }));
        } else {
          this.unsubscribe();
          this.state = CHANNEL_STATES.errored;
          callback === null || callback === void 0 ? void 0 : callback(REALTIME_SUBSCRIBE_STATES.CHANNEL_ERROR, new Error("mismatch between server and client bindings for postgres changes"));
          return;
        }
      }
      this.bindings.postgres_changes = newPostgresBindings;
      if (this.state != CHANNEL_STATES.errored && callback) {
        callback(REALTIME_SUBSCRIBE_STATES.SUBSCRIBED);
      }
    }
    /**
     * Returns the current presence state for this channel.
     *
     * The shape is a map keyed by presence key (for example a user id) where each entry contains the
     * tracked metadata for that user.
     *
     * @category Realtime
     */
  }, {
    key: "presenceState",
    value: function presenceState() {
      return this.presence.state;
    }
    /**
     * Sends the supplied payload to the presence tracker so other subscribers can see that this
     * client is online. Use `untrack` to stop broadcasting presence for the same key.
     *
     * @category Realtime
     */
  }, {
    key: "track",
    value: function track(_0) {
      return __async(this, arguments, function* (payload, opts = {}) {
        return yield this.send({
          type: "presence",
          event: "track",
          payload
        }, opts.timeout || this.timeout);
      });
    }
    /**
     * Removes the current presence state for this client.
     *
     * @category Realtime
     */
  }, {
    key: "untrack",
    value: function untrack() {
      return __async(this, arguments, function* (opts = {}) {
        return yield this.send({
          type: "presence",
          event: "untrack"
        }, opts);
      });
    }
    /**
     * Listen to realtime events on this channel.
     * @category Realtime
     *
     * @remarks
     * - By default, Broadcast and Presence are enabled for all projects.
     * - By default, listening to database changes is disabled for new projects due to database performance and security concerns. You can turn it on by managing Realtime's [replication](/docs/guides/api#realtime-api-overview).
     * - You can receive the "previous" data for updates and deletes by setting the table's `REPLICA IDENTITY` to `FULL` (e.g., `ALTER TABLE your_table REPLICA IDENTITY FULL;`).
     * - Row level security is not applied to delete statements. When RLS is enabled and replica identity is set to full, only the primary key is sent to clients.
     *
     * @example Listen to broadcast messages
     * ```js
     * const channel = supabase.channel("room1")
     *
     * channel.on("broadcast", { event: "cursor-pos" }, (payload) => {
     *   console.log("Cursor position received!", payload);
     * }).subscribe((status) => {
     *   if (status === "SUBSCRIBED") {
     *     channel.send({
     *       type: "broadcast",
     *       event: "cursor-pos",
     *       payload: { x: Math.random(), y: Math.random() },
     *     });
     *   }
     * });
     * ```
     *
     * @example Listen to presence sync
     * ```js
     * const channel = supabase.channel('room1')
     * channel
     *   .on('presence', { event: 'sync' }, () => {
     *     console.log('Synced presence state: ', channel.presenceState())
     *   })
     *   .subscribe(async (status) => {
     *     if (status === 'SUBSCRIBED') {
     *       await channel.track({ online_at: new Date().toISOString() })
     *     }
     *   })
     * ```
     *
     * @example Listen to presence join
     * ```js
     * const channel = supabase.channel('room1')
     * channel
     *   .on('presence', { event: 'join' }, ({ newPresences }) => {
     *     console.log('Newly joined presences: ', newPresences)
     *   })
     *   .subscribe(async (status) => {
     *     if (status === 'SUBSCRIBED') {
     *       await channel.track({ online_at: new Date().toISOString() })
     *     }
     *   })
     * ```
     *
     * @example Listen to presence leave
     * ```js
     * const channel = supabase.channel('room1')
     * channel
     *   .on('presence', { event: 'leave' }, ({ leftPresences }) => {
     *     console.log('Newly left presences: ', leftPresences)
     *   })
     *   .subscribe(async (status) => {
     *     if (status === 'SUBSCRIBED') {
     *       await channel.track({ online_at: new Date().toISOString() })
     *       await channel.untrack()
     *     }
     *   })
     * ```
     *
     * @example Listen to all database changes
     * ```js
     * supabase
     *   .channel('room1')
     *   .on('postgres_changes', { event: '*', schema: '*' }, payload => {
     *     console.log('Change received!', payload)
     *   })
     *   .subscribe()
     * ```
     *
     * @example Listen to a specific table
     * ```js
     * supabase
     *   .channel('room1')
     *   .on('postgres_changes', { event: '*', schema: 'public', table: 'countries' }, payload => {
     *     console.log('Change received!', payload)
     *   })
     *   .subscribe()
     * ```
     *
     * @example Listen to inserts
     * ```js
     * supabase
     *   .channel('room1')
     *   .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'countries' }, payload => {
     *     console.log('Change received!', payload)
     *   })
     *   .subscribe()
     * ```
     *
     * @exampleDescription Listen to updates
     * By default, Supabase will send only the updated record. If you want to receive the previous values as well you can
     * enable full replication for the table you are listening to:
     *
     * ```sql
     * alter table "your_table" replica identity full;
     * ```
     *
     * @example Listen to updates
     * ```js
     * supabase
     *   .channel('room1')
     *   .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'countries' }, payload => {
     *     console.log('Change received!', payload)
     *   })
     *   .subscribe()
     * ```
     *
     * @exampleDescription Listen to deletes
     * By default, Supabase does not send deleted records. If you want to receive the deleted record you can
     * enable full replication for the table you are listening to:
     *
     * ```sql
     * alter table "your_table" replica identity full;
     * ```
     *
     * @example Listen to deletes
     * ```js
     * supabase
     *   .channel('room1')
     *   .on('postgres_changes', { event: 'DELETE', schema: 'public', table: 'countries' }, payload => {
     *     console.log('Change received!', payload)
     *   })
     *   .subscribe()
     * ```
     *
     * @exampleDescription Listen to multiple events
     * You can chain listeners if you want to listen to multiple events for each table.
     *
     * @example Listen to multiple events
     * ```js
     * supabase
     *   .channel('room1')
     *   .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'countries' }, handleRecordInserted)
     *   .on('postgres_changes', { event: 'DELETE', schema: 'public', table: 'countries' }, handleRecordDeleted)
     *   .subscribe()
     * ```
     *
     * @exampleDescription Listen to row level changes
     * You can listen to individual rows using the format `{table}:{col}=eq.{val}` - where `{col}` is the column name, and `{val}` is the value which you want to match.
     *
     * @example Listen to row level changes
     * ```js
     * supabase
     *   .channel('room1')
     *   .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'countries', filter: 'id=eq.200' }, handleRecordUpdated)
     *   .subscribe()
     * ```
     */
  }, {
    key: "on",
    value: function on(type, filter, callback) {
      const stateCheck = this.channelAdapter.isJoined() || this.channelAdapter.isJoining();
      const typeCheck = type === REALTIME_LISTEN_TYPES.PRESENCE || type === REALTIME_LISTEN_TYPES.POSTGRES_CHANGES;
      if (stateCheck && typeCheck) {
        this.socket.log("channel", `cannot add \`${type}\` callbacks for ${this.topic} after \`subscribe()\`.`);
        throw new Error(`cannot add \`${type}\` callbacks for ${this.topic} after \`subscribe()\`.`);
      }
      return this._on(type, filter, callback);
    }
    /**
     * Sends a broadcast message explicitly via REST API.
     *
     * This method always uses the REST API endpoint regardless of WebSocket connection state.
     * Useful when you want to guarantee REST delivery or when gradually migrating from implicit REST fallback.
     *
     * Payloads that are `ArrayBuffer` or `ArrayBufferView` (e.g. `Uint8Array`) are sent as
     * `application/octet-stream`; all other payloads are JSON-encoded.
     *
     * @param event The name of the broadcast event
     * @param payload Payload to be sent (required)
     * @param opts Options including timeout
     * @returns Promise resolving to object with success status, and error details if failed
     *
     * @category Realtime
     */
  }, {
    key: "httpSend",
    value: function httpSend(_0, _1) {
      return __async(this, arguments, function* (event, payload, opts = {}) {
        var _a;
        if (payload === void 0 || payload === null) {
          return Promise.reject(new Error("Payload is required for httpSend()"));
        }
        const isBinary = payload instanceof ArrayBuffer || ArrayBuffer.isView(payload);
        const headers = {
          apikey: this.socket.apiKey ? this.socket.apiKey : "",
          "Content-Type": isBinary ? "application/octet-stream" : "application/json"
        };
        if (this.socket.accessTokenValue) {
          headers["Authorization"] = `Bearer ${this.socket.accessTokenValue}`;
        }
        const url = new URL(this.broadcastEndpointURL);
        url.pathname += `/${encodeURIComponent(this.subTopic)}/events/${encodeURIComponent(event)}`;
        if (this.private) {
          url.searchParams.set("private", "true");
        }
        const options = {
          method: "POST",
          headers,
          body: isBinary ? payload : JSON.stringify(payload)
        };
        const response = yield this._fetchWithTimeout(url.toString(), options, (_a = opts.timeout) !== null && _a !== void 0 ? _a : this.timeout);
        if (response.status === 202) {
          return {
            success: true
          };
        }
        let errorMessage = response.statusText;
        try {
          const errorBody = yield response.json();
          errorMessage = errorBody.error || errorBody.message || errorMessage;
        } catch (_b) {}
        return Promise.reject(new Error(errorMessage));
      });
    }
    /**
     * Sends a message into the channel.
     *
     * @param args Arguments to send to channel
     * @param args.type The type of event to send
     * @param args.event The name of the event being sent
     * @param args.payload Payload to be sent
     * @param opts Options to be used during the send process
     *
     * @category Realtime
     *
     * @remarks
     * - When using REST you don't need to subscribe to the channel
     * - REST calls are only available from 2.37.0 onwards
     * - If you create a channel only to send a REST broadcast, remove it from
     *   the client when the send completes
     *
     * @example Send a message via websocket
     * ```js
     * const channel = supabase.channel('room1')
     *
     * channel.subscribe((status) => {
     *   if (status === 'SUBSCRIBED') {
     *     channel.send({
     *       type: 'broadcast',
     *       event: 'cursor-pos',
     *       payload: { x: Math.random(), y: Math.random() },
     *     })
     *   }
     * })
     * ```
     *
     * @exampleResponse Send a message via websocket
     * ```js
     * ok | timed out | error
     * ```
     *
     * @example Send a message via REST
     * ```js
     * const channel = supabase.channel('room1')
     *
     * try {
     *   await channel.httpSend('cursor-pos', { x: Math.random(), y: Math.random() })
     * } finally {
     *   await supabase.removeChannel(channel)
     * }
     * ```
     */
  }, {
    key: "send",
    value: function send(_0) {
      return __async(this, arguments, function* (args, opts = {}) {
        var _a, _b;
        if (!this.channelAdapter.canPush() && args.type === "broadcast") {
          console.warn("Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.");
          const {
            event,
            payload: endpoint_payload
          } = args;
          const headers = {
            apikey: this.socket.apiKey ? this.socket.apiKey : "",
            "Content-Type": "application/json"
          };
          if (this.socket.accessTokenValue) {
            headers["Authorization"] = `Bearer ${this.socket.accessTokenValue}`;
          }
          const options = {
            method: "POST",
            headers,
            body: JSON.stringify({
              messages: [{
                topic: this.subTopic,
                event,
                payload: endpoint_payload,
                private: this.private
              }]
            })
          };
          try {
            const response = yield this._fetchWithTimeout(this.broadcastEndpointURL, options, (_a = opts.timeout) !== null && _a !== void 0 ? _a : this.timeout);
            yield (_b = response.body) === null || _b === void 0 ? void 0 : _b.cancel();
            return response.ok ? "ok" : "error";
          } catch (error) {
            if (error instanceof Error && error.name === "AbortError") {
              return "timed out";
            } else {
              return "error";
            }
          }
        } else {
          return new Promise(resolve => {
            var _a2, _b2, _c;
            const push = this.channelAdapter.push(args.type, args, opts.timeout || this.timeout);
            if (args.type === "broadcast" && !((_c = (_b2 = (_a2 = this.params) === null || _a2 === void 0 ? void 0 : _a2.config) === null || _b2 === void 0 ? void 0 : _b2.broadcast) === null || _c === void 0 ? void 0 : _c.ack)) {
              resolve("ok");
            }
            push.receive("ok", () => resolve("ok"));
            push.receive("error", () => resolve("error"));
            push.receive("timeout", () => resolve("timed out"));
          });
        }
      });
    }
    /**
     * Updates the payload that will be sent the next time the channel joins (reconnects).
     * Useful for rotating access tokens or updating config without re-creating the channel.
     *
     * @category Realtime
     */
  }, {
    key: "updateJoinPayload",
    value: function updateJoinPayload(payload) {
      this.channelAdapter.updateJoinPayload(payload);
    }
    /**
     * Leaves the channel.
     *
     * Unsubscribes from server events, and instructs channel to terminate on server.
     * Triggers onClose() hooks.
     *
     * To receive leave acknowledgements, use the a `receive` hook to bind to the server ack, ie:
     * channel.unsubscribe().receive("ok", () => alert("left!") )
     *
     * @category Realtime
     */
  }, {
    key: "unsubscribe",
    value: function unsubscribe() {
      return __async(this, arguments, function* (timeout = this.timeout) {
        return new Promise(resolve => {
          this.channelAdapter.unsubscribe(timeout).receive("ok", () => resolve("ok")).receive("timeout", () => resolve("timed out")).receive("error", () => resolve("error"));
        });
      });
    }
    /**
     * Destroys and stops related timers.
     *
     * @category Realtime
     */
  }, {
    key: "teardown",
    value: function teardown() {
      this.channelAdapter.teardown();
    }
    /** @internal */
  }, {
    key: "_fetchWithTimeout",
    value: function _fetchWithTimeout(url, options, timeout) {
      return __async(this, null, function* () {
        const controller = new AbortController();
        const id = setTimeout(() => controller.abort(), timeout);
        const response = yield this.socket.fetch(url, Object.assign(Object.assign({}, options), {
          signal: controller.signal
        }));
        clearTimeout(id);
        return response;
      });
    }
    /** @internal */
  }, {
    key: "_on",
    value: function _on(type, filter, callback) {
      const typeLower = type.toLocaleLowerCase();
      const ref = this.channelAdapter.on(type, callback);
      const binding = {
        type: typeLower,
        filter,
        callback,
        ref
      };
      if (this.bindings[typeLower]) {
        this.bindings[typeLower].push(binding);
      } else {
        this.bindings[typeLower] = [binding];
      }
      this._updateFilterMessage();
      return this;
    }
    /**
     * Registers a callback that will be executed when the channel closes.
     *
     * @internal
     */
  }, {
    key: "_onClose",
    value: function _onClose(callback) {
      this.channelAdapter.onClose(callback);
    }
    /**
     * Registers a callback that will be executed when the channel encounteres an error.
     *
     * @internal
     */
  }, {
    key: "_onError",
    value: function _onError(callback) {
      this.channelAdapter.onError(callback);
    }
    /** @internal */
  }, {
    key: "_updateFilterMessage",
    value: function _updateFilterMessage() {
      this.channelAdapter.updateFilterBindings((binding, payload, ref) => {
        var _a, _b, _c, _d, _e, _f, _g;
        const typeLower = binding.event.toLocaleLowerCase();
        if (this._notThisChannelEvent(typeLower, ref)) {
          return false;
        }
        const bind = (_a = this.bindings[typeLower]) === null || _a === void 0 ? void 0 : _a.find(bind2 => bind2.ref === binding.ref);
        if (!bind) {
          return true;
        }
        if (["broadcast", "presence", "postgres_changes"].includes(typeLower)) {
          if ("id" in bind) {
            const bindId = bind.id;
            const bindEvent = (_b = bind.filter) === null || _b === void 0 ? void 0 : _b.event;
            return bindId && ((_c = payload.ids) === null || _c === void 0 ? void 0 : _c.includes(bindId)) && (bindEvent === "*" || (bindEvent === null || bindEvent === void 0 ? void 0 : bindEvent.toLocaleLowerCase()) === ((_d = payload.data) === null || _d === void 0 ? void 0 : _d.type.toLocaleLowerCase()));
          } else {
            const bindEvent = (_f = (_e = bind === null || bind === void 0 ? void 0 : bind.filter) === null || _e === void 0 ? void 0 : _e.event) === null || _f === void 0 ? void 0 : _f.toLocaleLowerCase();
            return bindEvent === "*" || bindEvent === ((_g = payload === null || payload === void 0 ? void 0 : payload.event) === null || _g === void 0 ? void 0 : _g.toLocaleLowerCase());
          }
        } else {
          return bind.type.toLocaleLowerCase() === typeLower;
        }
      });
    }
    /** @internal */
  }, {
    key: "_notThisChannelEvent",
    value: function _notThisChannelEvent(event, ref) {
      const {
        close,
        error,
        leave,
        join
      } = CHANNEL_EVENTS;
      const events = [close, error, leave, join];
      return ref && events.includes(event) && ref !== this.joinPush.ref;
    }
    /** @internal */
  }, {
    key: "_updateFilterTransform",
    value: function _updateFilterTransform() {
      this.channelAdapter.updatePayloadTransform((event, payload, ref) => {
        if (typeof payload === "object" && "ids" in payload) {
          const postgresChanges = payload.data;
          const {
            schema,
            table,
            commit_timestamp,
            type,
            errors
          } = postgresChanges;
          const enrichedPayload = {
            schema,
            table,
            commit_timestamp,
            eventType: type,
            new: {},
            old: {},
            errors
          };
          return Object.assign(Object.assign({}, enrichedPayload), this._getPayloadRecords(postgresChanges));
        }
        return payload;
      });
    }
  }, {
    key: "copyBindings",
    value: function copyBindings(other) {
      if (this.joinedOnce) {
        throw new Error("cannot copy bindings into joined channel");
      }
      for (const kind in other.bindings) {
        for (const binding of other.bindings[kind]) {
          this._on(binding.type, binding.filter, binding.callback);
        }
      }
    }
    /**
     * Compares two optional filter values for equality.
     * Treats undefined, null, and empty string as equivalent empty values.
     * @internal
     */
  }, {
    key: "_getPayloadRecords",
    value: /** @internal */
    function _getPayloadRecords(payload) {
      const records = {
        new: {},
        old: {}
      };
      if (payload.type === "INSERT" || payload.type === "UPDATE") {
        records.new = convertChangeData(payload.columns, payload.record);
      }
      if (payload.type === "UPDATE" || payload.type === "DELETE") {
        records.old = convertChangeData(payload.columns, payload.old_record);
      }
      return records;
    }
  }], [{
    key: "isFilterValueEqual",
    value: function isFilterValueEqual(serverValue, clientValue) {
      const normalizedServer = serverValue !== null && serverValue !== void 0 ? serverValue : void 0;
      const normalizedClient = clientValue !== null && clientValue !== void 0 ? clientValue : void 0;
      return normalizedServer === normalizedClient;
    }
  }]);
}();

// node_modules/.pnpm/@supabase+realtime-js@2.108.1/node_modules/@supabase/realtime-js/dist/module/phoenix/socketAdapter.js
var SocketAdapter = /*#__PURE__*/function () {
  function SocketAdapter(endPoint, options) {
    _classCallCheck(this, SocketAdapter);
    this.socket = new Socket(endPoint, options);
  }
  return _createClass(SocketAdapter, [{
    key: "timeout",
    get: function () {
      return this.socket.timeout;
    }
  }, {
    key: "endPoint",
    get: function () {
      return this.socket.endPoint;
    }
  }, {
    key: "transport",
    get: function () {
      return this.socket.transport;
    }
  }, {
    key: "heartbeatIntervalMs",
    get: function () {
      return this.socket.heartbeatIntervalMs;
    }
  }, {
    key: "heartbeatCallback",
    get: function () {
      return this.socket.heartbeatCallback;
    },
    set: function (callback) {
      this.socket.heartbeatCallback = callback;
    }
  }, {
    key: "heartbeatTimer",
    get: function () {
      return this.socket.heartbeatTimer;
    }
  }, {
    key: "pendingHeartbeatRef",
    get: function () {
      return this.socket.pendingHeartbeatRef;
    }
  }, {
    key: "reconnectTimer",
    get: function () {
      return this.socket.reconnectTimer;
    }
  }, {
    key: "vsn",
    get: function () {
      return this.socket.vsn;
    }
  }, {
    key: "encode",
    get: function () {
      return this.socket.encode;
    }
  }, {
    key: "decode",
    get: function () {
      return this.socket.decode;
    }
  }, {
    key: "reconnectAfterMs",
    get: function () {
      return this.socket.reconnectAfterMs;
    }
  }, {
    key: "sendBuffer",
    get: function () {
      return this.socket.sendBuffer;
    }
  }, {
    key: "stateChangeCallbacks",
    get: function () {
      return this.socket.stateChangeCallbacks;
    }
  }, {
    key: "connect",
    value: function connect() {
      this.socket.connect();
    }
  }, {
    key: "disconnect",
    value: function disconnect(callback, code, reason, timeout = 1e4) {
      return new Promise(resolve => {
        setTimeout(() => resolve("timeout"), timeout);
        this.socket.disconnect(() => {
          callback();
          resolve("ok");
        }, code, reason);
      });
    }
  }, {
    key: "push",
    value: function push(data) {
      this.socket.push(data);
    }
  }, {
    key: "log",
    value: function log(kind, msg, data) {
      this.socket.log(kind, msg, data);
    }
  }, {
    key: "makeRef",
    value: function makeRef() {
      return this.socket.makeRef();
    }
  }, {
    key: "onOpen",
    value: function onOpen(callback) {
      this.socket.onOpen(callback);
    }
  }, {
    key: "onClose",
    value: function onClose(callback) {
      this.socket.onClose(callback);
    }
  }, {
    key: "onError",
    value: function onError(callback) {
      this.socket.onError(callback);
    }
  }, {
    key: "onMessage",
    value: function onMessage(callback) {
      this.socket.onMessage(callback);
    }
  }, {
    key: "isConnected",
    value: function isConnected() {
      return this.socket.isConnected();
    }
  }, {
    key: "isConnecting",
    value: function isConnecting() {
      return this.socket.connectionState() == CONNECTION_STATE.connecting;
    }
  }, {
    key: "isDisconnecting",
    value: function isDisconnecting() {
      return this.socket.connectionState() == CONNECTION_STATE.closing;
    }
  }, {
    key: "connectionState",
    value: function connectionState() {
      return this.socket.connectionState();
    }
  }, {
    key: "endPointURL",
    value: function endPointURL() {
      return this.socket.endPointURL();
    }
  }, {
    key: "sendHeartbeat",
    value: function sendHeartbeat() {
      this.socket.sendHeartbeat();
    }
    /**
     * @internal
     */
  }, {
    key: "getSocket",
    value: function getSocket() {
      return this.socket;
    }
  }]);
}();

// node_modules/.pnpm/@supabase+realtime-js@2.108.1/node_modules/@supabase/realtime-js/dist/module/RealtimeClient.js
var CONNECTION_TIMEOUTS = {
  HEARTBEAT_INTERVAL: 25e3,
  RECONNECT_DELAY: 10,
  HEARTBEAT_TIMEOUT_FALLBACK: 100
};
var RECONNECT_INTERVALS = [1e3, 2e3, 5e3, 1e4];
var DEFAULT_RECONNECT_FALLBACK = 1e4;
function createMemorySessionStorage() {
  const store = /* @__PURE__ */new Map();
  return {
    get length() {
      return store.size;
    },
    clear() {
      store.clear();
    },
    getItem(key) {
      return store.has(key) ? store.get(key) : null;
    },
    key(index) {
      var _a;
      return (_a = Array.from(store.keys())[index]) !== null && _a !== void 0 ? _a : null;
    },
    removeItem(key) {
      store.delete(key);
    },
    setItem(key, value) {
      store.set(key, String(value));
    }
  };
}
function resolveSessionStorage() {
  try {
    if (typeof globalThis !== "undefined" && globalThis.sessionStorage) {
      return globalThis.sessionStorage;
    }
  } catch (_a) {}
  return createMemorySessionStorage();
}
var WORKER_SCRIPT = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
var RealtimeClient = /*#__PURE__*/function () {
  /**
   * Initializes the Socket.
   *
   * @param endPoint The string WebSocket endpoint, ie, "ws://example.com/socket", "wss://example.com", "/socket" (inherited host & protocol)
   * @param httpEndpoint The string HTTP endpoint, ie, "https://example.com", "/" (inherited host & protocol)
   * @param options.transport The Websocket Transport, for example WebSocket. This can be a custom implementation
   * @param options.timeout The default timeout in milliseconds to trigger push timeouts.
   * @param options.params The optional params to pass when connecting.
   * @param options.headers Deprecated: headers cannot be set on websocket connections and this option will be removed in the future.
   * @param options.heartbeatIntervalMs The millisec interval to send a heartbeat message.
   * @param options.heartbeatCallback The optional function to handle heartbeat status and latency.
   * @param options.logger The optional function for specialized logging, ie: logger: (kind, msg, data) => { console.log(`${kind}: ${msg}`, data) }
   * @param options.logLevel Sets the log level for Realtime
   * @param options.encode The function to encode outgoing messages. Defaults to JSON: (payload, callback) => callback(JSON.stringify(payload))
   * @param options.decode The function to decode incoming messages. Defaults to Serializer's decode.
   * @param options.reconnectAfterMs he optional function that returns the millsec reconnect interval. Defaults to stepped backoff off.
   * @param options.worker Use Web Worker to set a side flow. Defaults to false.
   * @param options.workerUrl The URL of the worker script. Defaults to https://realtime.supabase.com/worker.js that includes a heartbeat event call to keep the connection alive.
   * @param options.vsn The protocol version to use when connecting. Supported versions are "1.0.0" and "2.0.0". Defaults to "2.0.0".
   *
   * @category Realtime
   *
   * @example Using supabase-js (recommended)
   * ```ts
   * import { createClient } from '@supabase/supabase-js'
   *
   * const supabase = createClient('https://xyzcompany.supabase.co', 'your-publishable-key')
   * const channel = supabase.channel('room1')
   * channel
   *   .on('broadcast', { event: 'cursor-pos' }, (payload) => console.log(payload))
   *   .subscribe()
   * ```
   *
   * @example Standalone import for bundle-sensitive environments
   * ```ts
   * import RealtimeClient from '@supabase/realtime-js'
   *
   * const client = new RealtimeClient('https://xyzcompany.supabase.co/realtime/v1', {
   *   params: { apikey: 'your-publishable-key' },
   * })
   * client.connect()
   * ```
   */
  function RealtimeClient(endPoint, options) {
    _classCallCheck(this, RealtimeClient);
    var _a;
    this.channels = new Array();
    this.accessTokenValue = null;
    this.accessToken = null;
    this.apiKey = null;
    this.httpEndpoint = "";
    this.headers = {};
    this.params = {};
    this.ref = 0;
    this.serializer = new Serializer();
    this._manuallySetToken = false;
    this._authPromise = null;
    this._workerHeartbeatTimer = void 0;
    this._pendingWorkerHeartbeatRef = null;
    this._pendingDisconnectTimer = null;
    this._disconnectOnEmptyChannelsAfterMs = 0;
    this._resolveFetch = customFetch => {
      if (customFetch) {
        return (...args) => customFetch(...args);
      }
      return (...args) => fetch(...args);
    };
    if (!((_a = options === null || options === void 0 ? void 0 : options.params) === null || _a === void 0 ? void 0 : _a.apikey)) {
      throw new Error("API key is required to connect to Realtime");
    }
    this.apiKey = options.params.apikey;
    const socketAdapterOptions = this._initializeOptions(options);
    this.socketAdapter = new SocketAdapter(endPoint, socketAdapterOptions);
    this.httpEndpoint = httpEndpointURL(endPoint);
    this.fetch = this._resolveFetch(options === null || options === void 0 ? void 0 : options.fetch);
  }
  /**
   * Connects the socket, unless already connected.
   *
   * @category Realtime
   */
  return _createClass(RealtimeClient, [{
    key: "endPoint",
    get: function () {
      return this.socketAdapter.endPoint;
    }
  }, {
    key: "timeout",
    get: function () {
      return this.socketAdapter.timeout;
    }
  }, {
    key: "transport",
    get: function () {
      return this.socketAdapter.transport;
    }
  }, {
    key: "heartbeatCallback",
    get: function () {
      return this.socketAdapter.heartbeatCallback;
    }
  }, {
    key: "heartbeatIntervalMs",
    get: function () {
      return this.socketAdapter.heartbeatIntervalMs;
    }
  }, {
    key: "heartbeatTimer",
    get: function () {
      if (this.worker) {
        return this._workerHeartbeatTimer;
      }
      return this.socketAdapter.heartbeatTimer;
    }
  }, {
    key: "pendingHeartbeatRef",
    get: function () {
      if (this.worker) {
        return this._pendingWorkerHeartbeatRef;
      }
      return this.socketAdapter.pendingHeartbeatRef;
    }
  }, {
    key: "reconnectTimer",
    get: function () {
      return this.socketAdapter.reconnectTimer;
    }
  }, {
    key: "vsn",
    get: function () {
      return this.socketAdapter.vsn;
    }
  }, {
    key: "encode",
    get: function () {
      return this.socketAdapter.encode;
    }
  }, {
    key: "decode",
    get: function () {
      return this.socketAdapter.decode;
    }
  }, {
    key: "reconnectAfterMs",
    get: function () {
      return this.socketAdapter.reconnectAfterMs;
    }
  }, {
    key: "sendBuffer",
    get: function () {
      return this.socketAdapter.sendBuffer;
    }
  }, {
    key: "stateChangeCallbacks",
    get: function () {
      return this.socketAdapter.stateChangeCallbacks;
    }
  }, {
    key: "connect",
    value: function connect() {
      if (this.isConnecting() || this.isDisconnecting() || this.isConnected()) {
        return;
      }
      if (this.accessToken && !this._authPromise) {
        this._setAuthSafely("connect");
      }
      this._setupConnectionHandlers();
      try {
        this.socketAdapter.connect();
      } catch (error) {
        const errorMessage = error.message;
        if (errorMessage.includes("Node.js")) {
          throw new Error(`${errorMessage}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`);
        }
        throw new Error(`WebSocket not available: ${errorMessage}`);
      }
      this._handleNodeJsRaceCondition();
    }
    /**
     * Returns the URL of the websocket.
     * @returns string The URL of the websocket.
     *
     * @category Realtime
     */
  }, {
    key: "endpointURL",
    value: function endpointURL() {
      return this.socketAdapter.endPointURL();
    }
    /**
     * Disconnects the socket.
     *
     * @param code A numeric status code to send on disconnect.
     * @param reason A custom reason for the disconnect.
     *
     * @category Realtime
     */
  }, {
    key: "disconnect",
    value: function disconnect(code, reason) {
      return __async(this, null, function* () {
        this._cancelPendingDisconnect();
        if (this.isDisconnecting()) {
          return "ok";
        }
        return yield this.socketAdapter.disconnect(() => {
          clearInterval(this._workerHeartbeatTimer);
          this._terminateWorker();
        }, code, reason);
      });
    }
    /**
     * Returns all created channels
     *
     * @category Realtime
     */
  }, {
    key: "getChannels",
    value: function getChannels() {
      return this.channels;
    }
    /**
     * Unsubscribes, removes and tears down a single channel
     * @param channel A RealtimeChannel instance
     *
     * @category Realtime
     */
  }, {
    key: "removeChannel",
    value: function removeChannel(channel) {
      return __async(this, null, function* () {
        const status = yield channel.unsubscribe();
        if (status === "ok") {
          channel.teardown();
        }
        return status;
      });
    }
    /**
     * Unsubscribes, removes and tears down all channels
     *
     * @category Realtime
     */
  }, {
    key: "removeAllChannels",
    value: function removeAllChannels() {
      return __async(this, null, function* () {
        const promises = this.channels.map(channel => __async(this, null, function* () {
          const result2 = yield channel.unsubscribe();
          channel.teardown();
          return result2;
        }));
        const result = yield Promise.all(promises);
        yield this.disconnect();
        return result;
      });
    }
    /**
     * Logs the message.
     *
     * For customized logging, `this.logger` can be overridden in Client constructor.
     *
     * @category Realtime
     */
  }, {
    key: "log",
    value: function log(kind, msg, data) {
      this.socketAdapter.log(kind, msg, data);
    }
    /**
     * Returns the current state of the socket.
     *
     * @category Realtime
     */
  }, {
    key: "connectionState",
    value: function connectionState() {
      return this.socketAdapter.connectionState() || CONNECTION_STATE.closed;
    }
    /**
     * Returns `true` is the connection is open.
     *
     * @category Realtime
     */
  }, {
    key: "isConnected",
    value: function isConnected() {
      return this.socketAdapter.isConnected();
    }
    /**
     * Returns `true` if the connection is currently connecting.
     *
     * @category Realtime
     */
  }, {
    key: "isConnecting",
    value: function isConnecting() {
      return this.socketAdapter.isConnecting();
    }
    /**
     * Returns `true` if the connection is currently disconnecting.
     *
     * @category Realtime
     */
  }, {
    key: "isDisconnecting",
    value: function isDisconnecting() {
      return this.socketAdapter.isDisconnecting();
    }
    /**
     * Creates (or reuses) a {@link RealtimeChannel} for the provided topic.
     *
     * Topics are automatically prefixed with `realtime:` to match the Realtime service.
     * If a channel with the same topic already exists it will be returned instead of creating
     * a duplicate connection.
     *
     * @category Realtime
     */
  }, {
    key: "channel",
    value: function channel(topic, params = {
      config: {}
    }) {
      const realtimeTopic = `realtime:${topic}`;
      const exists = this.getChannels().find(c => c.topic === realtimeTopic);
      if (!exists) {
        const chan = new RealtimeChannel(`realtime:${topic}`, params, this);
        this._cancelPendingDisconnect();
        this.channels.push(chan);
        return chan;
      } else {
        return exists;
      }
    }
    /**
     * Push out a message if the socket is connected.
     *
     * If the socket is not connected, the message gets enqueued within a local buffer, and sent out when a connection is next established.
     *
     * @category Realtime
     */
  }, {
    key: "push",
    value: function push(data) {
      this.socketAdapter.push(data);
    }
    /**
     * Sets the JWT access token used for channel subscription authorization and Realtime RLS.
     *
     * If param is null it will use the `accessToken` callback function or the token set on the client.
     *
     * On callback used, it will set the value of the token internal to the client.
     *
     * When a token is explicitly provided, it will be preserved across channel operations
     * (including removeChannel and resubscribe). The `accessToken` callback will not be
     * invoked until `setAuth()` is called without arguments.
     *
     * @param token A JWT string to override the token set on the client.
     *
     * @example Setting the authorization header
     * // Use a manual token (preserved across resubscribes, ignores accessToken callback)
     * client.realtime.setAuth('my-custom-jwt')
     *
     * // Switch back to using the accessToken callback
     * client.realtime.setAuth()
     *
     * @category Realtime
     */
  }, {
    key: "setAuth",
    value: function setAuth(token = null) {
      return __async(this, null, function* () {
        this._authPromise = this._performAuth(token);
        try {
          yield this._authPromise;
        } finally {
          this._authPromise = null;
        }
      });
    }
    /**
     * Returns true if the current access token was explicitly set via setAuth(token),
     * false if it was obtained via the accessToken callback.
     * @internal
     */
  }, {
    key: "_isManualToken",
    value: function _isManualToken() {
      return this._manuallySetToken;
    }
    /**
     * Sends a heartbeat message if the socket is connected.
     *
     * @category Realtime
     */
  }, {
    key: "sendHeartbeat",
    value: function sendHeartbeat() {
      return __async(this, null, function* () {
        this.socketAdapter.sendHeartbeat();
      });
    }
    /**
     * Sets a callback that receives lifecycle events for internal heartbeat messages.
     * Useful for instrumenting connection health (e.g. sent/ok/timeout/disconnected).
     *
     * @category Realtime
     */
  }, {
    key: "onHeartbeat",
    value: function onHeartbeat(callback) {
      this.socketAdapter.heartbeatCallback = this._wrapHeartbeatCallback(callback);
    }
    /**
     * Return the next message ref, accounting for overflows
     *
     * @internal
     */
  }, {
    key: "_makeRef",
    value: function _makeRef() {
      return this.socketAdapter.makeRef();
    }
    /**
     * Removes a channel from RealtimeClient
     *
     * @param channel An open subscription.
     *
     * @internal
     */
  }, {
    key: "_remove",
    value: function _remove(channel) {
      this.channels = this.channels.filter(c => c.topic !== channel.topic);
      if (this.channels.length === 0) {
        this.log("transport", "no channels remaining, scheduling disconnect");
        this._schedulePendingDisconnect();
      }
    }
    /** @internal */
  }, {
    key: "_schedulePendingDisconnect",
    value: function _schedulePendingDisconnect() {
      this._cancelPendingDisconnect();
      if (this._disconnectOnEmptyChannelsAfterMs === 0) {
        this.log("transport", "disconnecting immediately - no channels");
        this.disconnect();
        return;
      }
      this._pendingDisconnectTimer = setTimeout(() => {
        this._pendingDisconnectTimer = null;
        if (this.channels.length === 0) {
          this.log("transport", "deferred disconnect fired - no channels, disconnecting");
          this.disconnect();
        }
      }, this._disconnectOnEmptyChannelsAfterMs);
      this.log("transport", `deferred disconnect scheduled in ${this._disconnectOnEmptyChannelsAfterMs}ms`);
    }
    /** @internal */
  }, {
    key: "_cancelPendingDisconnect",
    value: function _cancelPendingDisconnect() {
      if (this._pendingDisconnectTimer !== null) {
        this.log("transport", "pending disconnect cancelled - channel activity detected");
        clearTimeout(this._pendingDisconnectTimer);
        this._pendingDisconnectTimer = null;
      }
    }
    /**
     * Perform the actual auth operation
     * @internal
     */
  }, {
    key: "_performAuth",
    value: function _performAuth(token = null) {
      return __async(this, null, function* () {
        let tokenToSend;
        let isManualToken = false;
        if (token) {
          tokenToSend = token;
          isManualToken = true;
        } else if (this.accessToken) {
          try {
            tokenToSend = yield this.accessToken();
          } catch (e) {
            this.log("error", "Error fetching access token from callback", e);
            tokenToSend = this.accessTokenValue;
          }
        } else {
          tokenToSend = this.accessTokenValue;
        }
        if (isManualToken) {
          this._manuallySetToken = true;
        } else if (this.accessToken) {
          this._manuallySetToken = false;
        }
        if (this.accessTokenValue != tokenToSend) {
          this.accessTokenValue = tokenToSend;
          this.channels.forEach(channel => {
            const payload = {
              access_token: tokenToSend,
              version: DEFAULT_VERSION
            };
            tokenToSend && channel.updateJoinPayload(payload);
            if (channel.joinedOnce && channel.channelAdapter.isJoined()) {
              channel.channelAdapter.push(CHANNEL_EVENTS.access_token, {
                access_token: tokenToSend
              });
            }
          });
        }
      });
    }
    /**
     * Wait for any in-flight auth operations to complete
     * @internal
     */
  }, {
    key: "_waitForAuthIfNeeded",
    value: function _waitForAuthIfNeeded() {
      return __async(this, null, function* () {
        if (this._authPromise) {
          yield this._authPromise;
        }
      });
    }
    /**
     * Safely call setAuth with standardized error handling
     * @internal
     */
  }, {
    key: "_setAuthSafely",
    value: function _setAuthSafely(context = "general") {
      if (!this._isManualToken()) {
        this.setAuth().catch(e => {
          this.log("error", `Error setting auth in ${context}`, e);
        });
      }
    }
    /** @internal */
  }, {
    key: "_setupConnectionHandlers",
    value: function _setupConnectionHandlers() {
      this.socketAdapter.onOpen(() => {
        const authPromise = this._authPromise || (this.accessToken && !this.accessTokenValue ? this.setAuth() : Promise.resolve());
        authPromise.catch(e => {
          this.log("error", "error waiting for auth on connect", e);
        });
        if (this.worker && !this.workerRef) {
          this._startWorkerHeartbeat();
        }
      });
      this.socketAdapter.onClose(() => {
        if (this.worker && this.workerRef) {
          this._terminateWorker();
        }
      });
      this.socketAdapter.onMessage(message => {
        if (message.ref && message.ref === this._pendingWorkerHeartbeatRef) {
          this._pendingWorkerHeartbeatRef = null;
        }
      });
    }
    /** @internal */
  }, {
    key: "_handleNodeJsRaceCondition",
    value: function _handleNodeJsRaceCondition() {
      if (this.socketAdapter.isConnected()) {
        this.socketAdapter.getSocket().onConnOpen();
      }
    }
    /** @internal */
  }, {
    key: "_wrapHeartbeatCallback",
    value: function _wrapHeartbeatCallback(heartbeatCallback) {
      return (status, latency) => {
        if (status == "sent") this._setAuthSafely();
        if (heartbeatCallback) heartbeatCallback(status, latency);
      };
    }
    /** @internal */
  }, {
    key: "_startWorkerHeartbeat",
    value: function _startWorkerHeartbeat() {
      if (this.workerUrl) {
        this.log("worker", `starting worker for from ${this.workerUrl}`);
      } else {
        this.log("worker", `starting default worker`);
      }
      const objectUrl = this._workerObjectUrl(this.workerUrl);
      this.workerRef = new Worker(objectUrl);
      this.workerRef.onerror = error => {
        this.log("worker", "worker error", error.message);
        this._terminateWorker();
        this.disconnect();
      };
      this.workerRef.onmessage = event => {
        if (event.data.event === "keepAlive") {
          this.sendHeartbeat();
        }
      };
      this.workerRef.postMessage({
        event: "start",
        interval: this.heartbeatIntervalMs
      });
    }
    /**
     * Terminate the Web Worker and clear the reference
     * @internal
     */
  }, {
    key: "_terminateWorker",
    value: function _terminateWorker() {
      if (this.workerRef) {
        this.log("worker", "terminating worker");
        this.workerRef.terminate();
        this.workerRef = void 0;
      }
    }
    /** @internal */
  }, {
    key: "_workerObjectUrl",
    value: function _workerObjectUrl(url) {
      let result_url;
      if (url) {
        result_url = url;
      } else {
        const blob = new Blob([WORKER_SCRIPT], {
          type: "application/javascript"
        });
        result_url = URL.createObjectURL(blob);
      }
      return result_url;
    }
    /**
     * Initialize socket options with defaults
     * @internal
     */
  }, {
    key: "_initializeOptions",
    value: function _initializeOptions(options) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
      this.worker = (_a = options === null || options === void 0 ? void 0 : options.worker) !== null && _a !== void 0 ? _a : false;
      this.accessToken = (_b = options === null || options === void 0 ? void 0 : options.accessToken) !== null && _b !== void 0 ? _b : null;
      const result = {};
      result.timeout = (_c = options === null || options === void 0 ? void 0 : options.timeout) !== null && _c !== void 0 ? _c : DEFAULT_TIMEOUT;
      result.heartbeatIntervalMs = (_d = options === null || options === void 0 ? void 0 : options.heartbeatIntervalMs) !== null && _d !== void 0 ? _d : CONNECTION_TIMEOUTS.HEARTBEAT_INTERVAL;
      this._disconnectOnEmptyChannelsAfterMs = (_e = options === null || options === void 0 ? void 0 : options.disconnectOnEmptyChannelsAfterMs) !== null && _e !== void 0 ? _e : 2 * ((_f = options === null || options === void 0 ? void 0 : options.heartbeatIntervalMs) !== null && _f !== void 0 ? _f : CONNECTION_TIMEOUTS.HEARTBEAT_INTERVAL);
      result.transport = (_g = options === null || options === void 0 ? void 0 : options.transport) !== null && _g !== void 0 ? _g : websocket_factory_default.getWebSocketConstructor();
      result.params = options === null || options === void 0 ? void 0 : options.params;
      result.logger = options === null || options === void 0 ? void 0 : options.logger;
      result.heartbeatCallback = this._wrapHeartbeatCallback(options === null || options === void 0 ? void 0 : options.heartbeatCallback);
      result.sessionStorage = (_h = options === null || options === void 0 ? void 0 : options.sessionStorage) !== null && _h !== void 0 ? _h : resolveSessionStorage();
      result.reconnectAfterMs = (_j = options === null || options === void 0 ? void 0 : options.reconnectAfterMs) !== null && _j !== void 0 ? _j : tries => {
        return RECONNECT_INTERVALS[tries - 1] || DEFAULT_RECONNECT_FALLBACK;
      };
      let defaultEncode;
      let defaultDecode;
      const vsn = (_k = options === null || options === void 0 ? void 0 : options.vsn) !== null && _k !== void 0 ? _k : DEFAULT_VSN;
      switch (vsn) {
        case VSN_1_0_0:
          defaultEncode = (payload, callback) => {
            return callback(JSON.stringify(payload));
          };
          defaultDecode = (payload, callback) => {
            return callback(JSON.parse(payload));
          };
          break;
        case VSN_2_0_0:
          defaultEncode = this.serializer.encode.bind(this.serializer);
          defaultDecode = this.serializer.decode.bind(this.serializer);
          break;
        default:
          throw new Error(`Unsupported serializer version: ${result.vsn}`);
      }
      result.vsn = vsn;
      result.encode = (_l = options === null || options === void 0 ? void 0 : options.encode) !== null && _l !== void 0 ? _l : defaultEncode;
      result.decode = (_m = options === null || options === void 0 ? void 0 : options.decode) !== null && _m !== void 0 ? _m : defaultDecode;
      result.beforeReconnect = this._reconnectAuth.bind(this);
      if ((options === null || options === void 0 ? void 0 : options.logLevel) || (options === null || options === void 0 ? void 0 : options.log_level)) {
        this.logLevel = options.logLevel || options.log_level;
        result.params = Object.assign(Object.assign({}, result.params), {
          log_level: this.logLevel
        });
      }
      if (this.worker) {
        if (typeof window !== "undefined" && !window.Worker) {
          throw new Error("Web Worker is not supported");
        }
        this.workerUrl = options === null || options === void 0 ? void 0 : options.workerUrl;
        result.autoSendHeartbeat = !this.worker;
      }
      return result;
    }
    /** @internal */
  }, {
    key: "_reconnectAuth",
    value: function _reconnectAuth() {
      return __async(this, null, function* () {
        yield this._waitForAuthIfNeeded();
        if (!this.isConnected()) {
          this.connect();
        }
      });
    }
  }]);
}();

// src/normalizedString.ts
var NormalizedString = /*#__PURE__*/function () {
  function NormalizedString(str, verbose) {
    _classCallCheck(this, NormalizedString);
    this.str = str;
    this.verbose = verbose;
    this.nfkdStr = "";
    this.indices = [];
    this.rebuildNFKDMappings();
  }
  /**
   * We need to read through the input string and compare against regex to find matches
   * We will then to to update the string as we go and continue matching
   * 
   * @param regex Regular Expression to match
   * @param fn Callback for each match - returns a string that is the value to replace with
   */
  return _createClass(NormalizedString, [{
    key: "replace",
    value: function replace(regex, fn) {
      const regexWithIndices = new RegExp(regex, "gid");
      let match;
      while ((match = regexWithIndices.exec(this.nfkdStr)) != null) {
        const indices = match.indices;
        let postStart = indices[0][0];
        let postEnd = indices[0][1];
        if (this.verbose) {
          console.log(`match found between ${postStart} to ${postEnd} on normalized string`);
        }
        let preRange = this.convertToPreNormalizedIndices(postStart, postEnd);
        if (this.verbose) {
          console.log(`corresponds to ${preRange.start} to ${preRange.stop} on pre-normalized string`);
        }
        this.str = this.str.substring(0, preRange.start) + fn(match[0]) + this.str.substring(preRange.stop);
        this.rebuildNFKDMappings();
      }
      return this.str;
    }
    /**
     * Builds a NFKD normalized string and maps indices of values in that string, to the corresponding values in the orginal string
     * 
     * Maps arbitrary indices of pre-normalized string to arbitrary ranges in post-normalized
     * PRE      [A]   [SURROGATE 1] [SURROGATE 2]           [Å]
     * POST     [A]        [Single item]               [A] [angstrom]
     */
  }, {
    key: "rebuildNFKDMappings",
    value: function rebuildNFKDMappings() {
      this.nfkdStr = "";
      this.indices = [];
      for (let i = 0; i < this.str.length; i++) {
        let char = this.str[i];
        let preIndx = [i, i + 1];
        let charCode = char.charCodeAt(0);
        if (charCode >= 55296 && charCode <= 57343) {
          char = this.str.substring(i, i + 2);
          preIndx[1] = i + 2;
          i++;
        }
        const nfkdChar = char.normalize("NFKD");
        let postIndx = [this.nfkdStr.length, this.nfkdStr.length + nfkdChar.length];
        this.indices.push(new IndexMatch(new IndexRange(preIndx[0], preIndx[1]), new IndexRange(postIndx[0], postIndx[1])));
        this.nfkdStr += nfkdChar;
      }
    }
    /**
     * Convert a range of from the post-normalized string, to the corresponding
     * range on the pre-normalized string
     * 
     * @param postStart Starting index from post-normalized string
     * @param postEnd Ending index from post-normalized string
     * @returns Range of equilvalent characters in pre-normalized string
     */
  }, {
    key: "convertToPreNormalizedIndices",
    value: function convertToPreNormalizedIndices(postStart, postEnd) {
      let preStart = -1,
        preEnd = -1;
      for (let index of this.indices) {
        if (preStart == -1 && index.postNormalized.start <= postStart && index.postNormalized.stop > postStart) {
          preStart = index.preNormalized.start;
        }
        if (preEnd == -1 && index.postNormalized.start < postEnd && index.postNormalized.stop >= postEnd) {
          preEnd = index.preNormalized.stop;
        }
      }
      return new IndexRange(preStart, preEnd);
    }
  }]);
}();
var IndexMatch = /*#__PURE__*/_createClass(function IndexMatch(preNormalized, postNormalized) {
  _classCallCheck(this, IndexMatch);
  this.preNormalized = preNormalized;
  this.postNormalized = postNormalized;
});
var IndexRange = /*#__PURE__*/_createClass(function IndexRange(start, stop) {
  _classCallCheck(this, IndexRange);
  this.start = start;
  this.stop = stop;
});

// src/core.ts
var SUPABASE_URL = "https://qjzgfwithyvmwctesnqs.supabase.co";
var SUPABASE_KEY = "sb_publishable_cxq8QZp9BDtjE4G5qiPCFA_lUZ4Cbdh";
var supabaseInstance = null;
function getSupabase() {
  if (!supabaseInstance) {
    const postgrest = new PostgrestClient(`${SUPABASE_URL}/rest/v1`, {
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`
      }
    });
    const realtime = new RealtimeClient(`${SUPABASE_URL}/realtime/v1`, {
      params: {
        apikey: SUPABASE_KEY
      }
    });
    realtime.connect();
    supabaseInstance = {
      from: table => postgrest.from(table),
      channel: (topic, params) => realtime.channel(topic, params)
    };
  }
  return supabaseInstance;
}
var supabase = {
  get from() {
    return getSupabase().from;
  },
  get channel() {
    return getSupabase().channel;
  }
};
var config;
var droneConfig;
var rules = [];
var whitelist = [];
var petWords = [];
var censoredWords = [];
function createNewUser(userID, username) {
  return __async(this, null, function* () {
    console.log("creating new user...");
    yield supabase.from("profiles").insert({
      "display_name": username,
      "discord_id": userID
    });
  });
}
function createNewConfig(userID) {
  return __async(this, null, function* () {
    console.log("creating new config...");
    const configData = yield supabase.from("Config").insert({}).select().single();
    yield supabase.from("Sub_Config_Access").insert({
      "sub_id": userID,
      "config_id": configData.data.id
    });
    yield supabase.from("Drone_Config").insert({
      "config_id": configData.data.id,
      "speech_header": "This Drone Says:",
      "speech_footer": "It Obeys",
      "action_header": "Drone::Action::Performs(",
      "action_footer": ");",
      "whisper_header": "Drone Initiating Quiet Mode",
      "whisper_footer": "Normal Volume Restored",
      "loud_header": "Volume.set(500);",
      "loud_footer": "Volume.set(100)"
    });
  });
}
function getData(userID, username) {
  return __async(this, null, function* () {
    var _a;
    const currentUserId = userID;
    console.log(currentUserId);
    let subIDData = yield supabase.from("profiles").select("id").eq("discord_id", currentUserId).single();
    if (subIDData.data === null) {
      yield createNewUser(userID, username);
      subIDData = yield supabase.from("profiles").select("id").eq("discord_id", currentUserId).single();
    }
    console.log(subIDData);
    const subID = subIDData.data.id;
    console.log(subID);
    let subData = yield supabase.from("Sub_Config_Access").select().eq("sub_id", subID);
    console.log(subData);
    if (((_a = subData.data) == null ? void 0 : _a.length) === 0) {
      yield createNewConfig(subID);
      subData = yield supabase.from("Sub_Config_Access").select().eq("sub_id", subID);
    }
    config = {};
    config.id = subData.data[0].config_id;
    supabase.channel("public:config").on("postgres_changes", {
      event: "*",
      schema: "public",
      table: "Config"
    }, () => __async(null, null, function* () {
      yield getConfig();
    })).subscribe();
    supabase.channel("public:rules").on("postgres_changes", {
      event: "*",
      schema: "public",
      table: "Rules"
    }, () => __async(null, null, function* () {
      yield getRules();
    })).subscribe();
    supabase.channel("public:server_whitelist_items").on("postgres_changes", {
      event: "*",
      schema: "public",
      table: "Server_Whitelist_Items"
    }, () => __async(null, null, function* () {
      yield getWhitelist();
    })).subscribe();
    supabase.channel("public:pet_type_words").on("postgres_changes", {
      event: "*",
      schema: "public",
      table: "Config"
    }, () => __async(null, null, function* () {
      yield getConfig();
      yield getPetWords();
    })).subscribe();
    supabase.channel("public:censored_words").on("postgres_changes", {
      event: "*",
      schema: "public",
      table: "Censored_Words"
    }, () => __async(null, null, function* () {
      yield getCensoredWords();
    })).subscribe();
    supabase.channel("public:drone_config").on("postgres_changes", {
      event: "*",
      schema: "public",
      table: "Drone_Config"
    }, () => __async(null, null, function* () {
      yield getDroneConfig();
    })).subscribe();
    yield getConfig();
    yield getRules();
    yield getWhitelist();
    yield getPetWords();
    yield getCensoredWords();
    yield getDroneConfig();
  });
}
function getConfig() {
  return __async(this, null, function* () {
    const configData = yield supabase.from("Config").select().eq("id", config.id).single();
    config.id = configData.data.id;
    config.rules_end = new Date(configData.data.rules_end);
    config.gag_end = new Date(configData.data.gag_end);
    config.pet_end = new Date(configData.data.pet_end);
    config.bimbo_end = new Date(configData.data.bimbo_end);
    config.bimbo_word_length = configData.data.bimbo_word_length;
    config.pet_amount = configData.data.pet_amount;
    config.horny_end = new Date(configData.data.horny_end);
    config.pet_type = configData.data.pet_type;
    config.drone_end = new Date(configData.data.drone_end);
    config.debug = configData.data.debug;
    config.uwu_end = new Date(configData.data.uwu_end);
    config.censored_end = new Date(configData.data.censored_end);
    config.censored_replacement = configData.data.censored_replacement;
    console.log("Config:");
    console.log(config);
  });
}
function getRules() {
  return __async(this, null, function* () {
    const rulesData = yield supabase.from("Rules").select().eq("config_id", config.id).order("id", {
      ascending: false
    });
    rules = rulesData.data;
    console.log("Rules:");
    console.log(rules);
  });
}
function getWhitelist() {
  return __async(this, null, function* () {
    const whitelistData = yield supabase.from("Server_Whitelist_Items").select().eq("config_id", config.id);
    whitelist = whitelistData.data.map(item => ({
      id: item.id,
      config_id: item.config_id,
      server_name: item.server_name,
      discord_id: item.discord_id
    }));
    console.log("Whitelist:");
    console.log(whitelist);
  });
}
function getPetWords() {
  return __async(this, null, function* () {
    const petWordsData = yield supabase.from("Pet_Type_Words").select().eq("pet_type", config.pet_type);
    petWords = [];
    for (const wordData of petWordsData.data) {
      petWords.push(wordData.word);
    }
    console.log("Pet words:");
    console.log(petWords);
  });
}
function getCensoredWords() {
  return __async(this, null, function* () {
    const censoredWordsData = yield supabase.from("Censored_Words").select().eq("config_id", config.id);
    censoredWords = [];
    for (const wordData of censoredWordsData.data) {
      censoredWords.push(wordData.word);
    }
    console.log("Censored Words:");
    console.log(censoredWords);
  });
}
function getDroneConfig() {
  return __async(this, null, function* () {
    const droneConfigData = yield supabase.from("Drone_Config").select().eq("config_id", config.id).single();
    droneConfig = {
      config_id: droneConfigData.data.config_id,
      drone_health: droneConfigData.data.drone_health,
      speech_header: droneConfigData.data.speech_header,
      speech_footer: droneConfigData.data.speech_footer,
      action_header: droneConfigData.data.action_header,
      action_footer: droneConfigData.data.action_footer,
      whisper_header: droneConfigData.data.whisper_header,
      whisper_footer: droneConfigData.data.whisper_footer,
      loud_header: droneConfigData.data.loud_header,
      loud_footer: droneConfigData.data.loud_footer
    };
    console.log("Drone Config:");
    console.log(droneConfig);
  });
}
function shouldApplyRules(rules_end, verbose = true) {
  if (verbose) {
    console.log(Date.now() <= rules_end.getTime() ? "Should apply rules" : "Should not apply rules");
  }
  return Date.now() <= rules_end.getTime();
}
function shouldApplyGag(gag_end, verbose = true) {
  if (verbose) {
    console.log(Date.now() <= gag_end.getTime() ? "Should apply gag" : "Should not apply gag");
  }
  return Date.now() <= gag_end.getTime();
}
function shouldApplyPet(pet_end, pet_amount, verbose = true) {
  if (verbose) {
    console.log(Date.now() <= pet_end.getTime() ? "Should apply pet" : "Should not apply pet");
  }
  return Date.now() <= pet_end.getTime() && pet_amount !== 0;
}
function shouldApplyBimbo(bimbo_end, verbose = true) {
  if (verbose) {
    console.log(Date.now() <= bimbo_end.getTime() ? "Should apply bimbo" : "Should not apply bimbo");
  }
  return Date.now() <= bimbo_end.getTime();
}
function shouldApplyHorny(horny_end, verbose = true) {
  if (verbose) {
    console.log(Date.now() <= horny_end.getTime() ? "Should apply horny" : "Should not apply horny");
  }
  return Date.now() <= horny_end.getTime();
}
function shouldApplyDrone(drone_end, verbose = true) {
  if (verbose) {
    console.log(Date.now() <= drone_end.getTime() ? "Should apply drone" : "Should not apply drone");
  }
  return Date.now() <= drone_end.getTime();
}
function shouldApplyUWU(uwu_end, verbose = true) {
  if (verbose) {
    console.log(Date.now() <= uwu_end.getTime() ? "Should apply uwu" : "Should not apply uwu");
  }
  return Date.now() <= uwu_end.getTime();
}
function shouldApplyCensored(censored_end, verbose = true) {
  if (verbose) {
    console.log(Date.now() <= censored_end.getTime() ? "Should apply censored" : "Should not apply censored");
  }
  return Date.now() <= censored_end.getTime();
}
function applyRules(msg, rules2, rules_end, verbose = true) {
  if (!shouldApplyRules(rules_end, verbose)) {
    return msg;
  }
  let output = msg.normalize("NFKC");
  rules2.sort((a, b) => a.order - b.order);
  for (const rule of rules2) {
    if (!rule.enabled) {
      if (verbose) {
        console.log("Rule disabled, skipping");
      }
      continue;
    }
    const temp = new RegExp(rule.rule_regex.toString().replace(/\\\\/g, "\\"));
    const matchCallback = (match, ..._args) => {
      if (Math.random() > rule.chance_to_apply) {
        if (verbose) {
          console.log(`Skipping match ${rule.chance_to_apply}`);
        }
        return match;
      }
      if (verbose) {
        console.log(`Rule Applied ${match.replace(new RegExp(temp, "i"), rule.rule_replacement)}`);
      }
      return match.replace(new RegExp(temp, "i"), rule.rule_replacement);
    };
    if (rule.regex_normalize) {
      if (verbose) {
        console.log("Using input normalization");
      }
      output = new NormalizedString(output, verbose).replace(new RegExp(temp, "gi"), matchCallback);
    } else {
      output = output.replace(new RegExp(temp, "gi"), matchCallback);
    }
    if (verbose) {
      console.log(`Applying rule: ${temp}`);
    }
  }
  if (verbose) {
    console.log("message after rules: " + output);
  }
  return output;
}
function applyGag(msg, gag_end, verbose = true) {
  if (!shouldApplyGag(gag_end, verbose)) {
    return msg;
  }
  let output = "";
  let inEmote = false;
  const remainChars = ["a", "e", "i", "o", "u", "g", "h", "A", "E", "I", "O", "U", "G", "H", "?", "!", ".", ",", ":", ";", "#", "*", "-", "(", ")", "~"];
  for (const word of msg.split(" ")) {
    let outword = "";
    if (word_is_link(word, verbose)) {
      outword = word + " ";
      continue;
    }
    for (const char of word) {
      if (char === ":" && !inEmote) {
        if (verbose) {
          console.log("Starting emote");
        }
        ;
        inEmote = true;
        outword += char;
        continue;
      } else if (char === ":" && inEmote) {
        if (verbose) {
          console.log("Ending emote");
        }
        ;
        inEmote = false;
        outword += char;
        continue;
      }
      if (inEmote) {
        if (verbose) {
          console.log("Inside emote");
        }
        ;
        outword += char;
        continue;
      }
      if (remainChars.includes(char)) {
        outword += char;
      } else {
        if (!(char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122)) {
          outword += ["G", "H"][Math.floor(Math.random() * 2)];
        } else {
          outword += ["g", "h"][Math.floor(Math.random() * 2)];
        }
      }
    }
    output += outword + " ";
  }
  if (verbose) {
    console.log("message after gag: " + output);
  }
  return output;
}
function applyPet(msg, pet_end, pet_amount, pet_words, verbose = true) {
  if (!shouldApplyPet(pet_end, pet_amount, verbose)) {
    return msg;
  }
  let output = "";
  for (const word of msg.split(" ")) {
    if (word_is_link(word, verbose)) {
      output += word + " ";
      continue;
    }
    if (word[0] === ":" && word[word.length] === ":") {
      output += word + " ";
      if (verbose) {
        console.log("Skipping emote word");
      }
      ;
      continue;
    }
    if (Math.random() < pet_amount) {
      if (verbose) {
        console.log("Replacing word with pet word");
      }
      output += pet_words[Math.floor(Math.random() * pet_words.length)];
    } else {
      output += word;
    }
    output += " ";
  }
  if (verbose) {
    console.log("message after pet: " + output);
  }
  return output;
}
function applyBimbo(msg, bimbo_end, bimbo_word_length, verbose = true) {
  if (!shouldApplyBimbo(bimbo_end, verbose)) {
    return msg;
  }
  let output = "";
  const pronouns = ["i", "you", "he", "she", "it", "we", "they", "is"];
  const maxWordLength = bimbo_word_length;
  const likeChance = 0.1;
  const gargle_words = ["like", "hehe", "uhh", "totally", "so dumbb", "ummm", "hhhhh"];
  for (const word of msg.split(" ")) {
    let changed = false;
    if (!word_is_link(word, verbose)) {
      if (pronouns.includes(word.toLowerCase())) {
        output += word;
        output += " like totally ";
        changed = true;
        if (verbose) {
          console.log("pronoun found, added 'like totally'");
        }
      }
      if (word.length > maxWordLength) {
        if (verbose) {
          console.log("word: " + word + " was too long");
        }
        output += word.substring(0, maxWordLength - 2);
        output += "uhhhh long words harddd hehe";
        return output;
      }
    }
    if (!changed) {
      output += word;
      output += " ";
    }
    if (Math.random() < likeChance && !word_is_link(word, verbose)) {
      output += gargle_words[Math.floor(Math.random() * (gargle_words.length - 1))];
      output += " ";
      if (verbose) {
        console.log("added gargle word " + output.split(" ").reverse()[0]);
      }
      ;
    }
  }
  if (verbose) {
    console.log("message after bimbo: " + output);
  }
  return output;
}
function applyHorny(msg, horny_end, verbose = true, horny_words = ["hmmph", "nngh", "ahhh", "ooh", "oohh", "mmm", "hehe", "hehehe", "heheh", "eheh", "ehehe", "eheheh", "guhh", "pleasee", "need to cumm", "oh goshh", "ohhh", "ahhh", "cummm", "gggg"]) {
  if (!shouldApplyHorny(horny_end, verbose)) {
    return msg;
  }
  let output = "";
  for (const word of msg.split(" ")) {
    if (!word_is_link(word, verbose)) {
      if (Math.random() < 0.75) {
        if (verbose) {
          console.log("Adding horny word");
        }
        output += horny_words[Math.floor(Math.random() * (horny_words.length - 1))];
        output += " ";
      }
    }
    output += word + " ";
  }
  return output;
}
function applyUWU(msg, uwu_end, verbose = true) {
  if (!shouldApplyUWU(uwu_end, verbose)) {
    return msg;
  }
  let output = "";
  for (let word of msg.split(" ")) {
    if (word_is_link(word, verbose)) {
      output += word + " ";
      continue;
    }
    word = word.replace(new RegExp("th", "gi"), "d");
    word = word.replace(new RegExp("r|l", "gi"), "w");
    word = word.replace(new RegExp("u", "gi"), "uw");
    word = word.replace(new RegExp("n([aeiou])", "gi"), "ny$1");
    word = word.replace(new RegExp("ove", "gi"), "uv");
    output += word + " ";
  }
  return output;
}
function applyCensored(msg, censoredWords2, replacement, censored_end, verbose = true) {
  if (!shouldApplyCensored(censored_end, verbose)) {
    return msg;
  }
  for (let word of censoredWords2) {
    let replacementText = "";
    for (let i = 0; i < word.length; i += replacement.length) {
      replacementText += replacement;
    }
    msg = msg.replace(new RegExp(word, "gi"), replacementText);
  }
  return msg;
}
function applyDrone(msg, drone_end, speech_header, speech_footer, action_header, action_footer, whisper_header, whisper_footer, loud_header, loud_footer, drone_health, channelId, context = {}, verbose = true) {
  var _a, _b, _c, _d, _e, _f;
  if (!shouldApplyDrone(drone_end, verbose)) {
    return {
      message: msg
    };
  }
  if (drone_health < 10) {
    return {
      message: "`This Drone haaaaas receieved bzzzzt, ppplease provide repaiirs using beep '/repair', tthank youu. Returned Error: 0x7547372482`"
    };
  }
  let containsLink = false;
  for (const word of msg.split(" ")) {
    if (word_is_link(word, verbose)) {
      containsLink = true;
    }
  }
  let output = "";
  if (!containsLink) {
    msg = msg.replace(new RegExp("\\bMe\\b", "gi"), "This Drone");
    msg = msg.replace(new RegExp("\\bMy\\b", "gi"), "Its'");
    msg = msg.replace(new RegExp("\\bI am\\b", "gi"), "It is");
    msg = msg.replace(new RegExp("\\bI(')?m\\b", "gi"), "It is");
    msg = msg.replace(new RegExp("\\bI\\b", "gi"), "This Drone");
    if (verbose) {
      console.log("Drone Regex Applied");
    }
  }
  let ignoreFirstOne = false;
  for (const word of msg.split(" ")) {
    if (ignoreFirstOne) {
      ignoreFirstOne = false;
      continue;
    }
    if (!word_is_link(word, verbose)) {
      if (Math.random() > drone_health / 100) {
        if (verbose) {
          console.log("Adding random beep");
        }
        output += Math.random() > 0.5 ? "`beep` " : "`bzzzt` ";
      }
    }
    output += word + " ";
  }
  const tempOutput = output;
  output = "";
  let lastTriggered = 0;
  for (const word of tempOutput.split(" ")) {
    let outword = "";
    if (!word_is_link(word, verbose)) {
      for (const char of word) {
        outword += char;
        lastTriggered += 1;
        if (Math.random() + lastTriggered / 100 - 1 > drone_health / 100 && char !== "`") {
          lastTriggered = 0;
          for (let i = 0; i < Math.floor(Math.random() * 10); i++) {
            if (verbose) {
              console.log("Adding random static");
            }
            outword += char;
          }
        }
      }
    } else {
      outword = word;
    }
    output += outword + " ";
  }
  const previousMessage = (_a = context.previousMessage) != null ? _a : null;
  const previousSenderId = (_d = (_c = context.previousSenderId) != null ? _c : (_b = previousMessage == null ? void 0 : previousMessage.author) == null ? void 0 : _b.id) != null ? _d : null;
  const currentUserId = (_e = context.currentUserId) != null ? _e : null;
  if (verbose) {
    console.log("Previous message sent by: " + previousSenderId);
  }
  if (verbose) {
    console.log("Current user ID: " + currentUserId);
  }
  if (verbose) {
    console.log("Previous message content: " + (previousMessage == null ? void 0 : previousMessage.content));
  }
  let header = speech_header;
  let footer = speech_footer;
  if (msg.startsWith("**")) {
    header = loud_header;
    footer = loud_footer;
  } else if (msg.startsWith("*")) {
    header = action_header;
    footer = action_footer;
  } else if (msg.startsWith("-#")) {
    header = whisper_header;
    footer = whisper_footer;
  }
  if (verbose) {
    console.log("header: " + header);
  }
  if (verbose) {
    console.log("footer: " + footer);
  }
  const continuingOwnBlock = previousSenderId != null && currentUserId != null && previousSenderId === currentUserId;
  const footerSuffix = "\n`" + footer + "`";
  const previousHadMatchingFooter = (_f = previousMessage == null ? void 0 : previousMessage.content.endsWith(footerSuffix)) != null ? _f : false;
  const editPreviousMessage2 = continuingOwnBlock && previousHadMatchingFooter && previousMessage ? {
    channelId,
    messageId: previousMessage.id,
    newContent: previousMessage.content.replace(footerSuffix, "")
  } : void 0;
  const formattedBody = output.trimEnd();
  let formattedMessage = formattedBody + footerSuffix;
  if (!continuingOwnBlock || !previousHadMatchingFooter) {
    formattedMessage = "`" + header + "`\n" + formattedMessage;
  }
  return {
    message: formattedMessage,
    editPreviousMessage: editPreviousMessage2
  };
}
function applyReplacements(msg, channelId, context = {}) {
  const originalMsg = msg;
  console.log("Original message: " + originalMsg);
  msg = applyRules(msg, rules, config.rules_end);
  msg = applyUWU(msg, config.uwu_end);
  msg = applyHorny(msg, config.horny_end);
  msg = applyPet(msg, config.pet_end, config.pet_amount, petWords);
  msg = applyBimbo(msg, config.bimbo_end, config.bimbo_word_length);
  msg = applyCensored(msg, censoredWords, config.censored_replacement, config.censored_end);
  msg = applyGag(msg, config.gag_end);
  let editPreviousMessage2;
  if (droneConfig != null) {
    const droneResult = applyDrone(msg, config.drone_end, droneConfig.speech_header, droneConfig.speech_footer, droneConfig.action_header, droneConfig.action_footer, droneConfig.whisper_header, droneConfig.whisper_footer, droneConfig.loud_header, droneConfig.loud_footer, droneConfig.drone_health, channelId, context);
    msg = droneResult.message;
    editPreviousMessage2 = droneResult.editPreviousMessage;
  }
  return {
    message: msg + (config.debug && (shouldApplyRules(config.rules_end) || shouldApplyGag(config.gag_end) || shouldApplyPet(config.pet_end, config.pet_amount) || shouldApplyBimbo(config.bimbo_end) || shouldApplyHorny(config.horny_end) || shouldApplyDrone(config.drone_end)) ? `
        (original message: ${originalMsg})` : ""),
    editPreviousMessage: editPreviousMessage2
  };
}
function word_is_link(word, verbose = true) {
  if (verbose) {
    console.log("testing if is link:");
    console.log(word[0]);
    console.log(word[1]);
    console.log(word[2]);
    console.log(word[3]);
  }
  return word[0] == "h" && word[1] == "t" && word[2] == "t" && word[3] == "p";
}

// src/kettu.ts
var logger = {
  log: (...args) => console.log("[key-intercept]", ...args)
};
var unpatchSendMessage = null;
function applyReplacements2(msg, channelId) {
  var _a, _b, _c;
  const UserStore = (0, import_metro2.findByProps)("getCurrentUser", "getUser");
  const currentUser = (_a = UserStore == null ? void 0 : UserStore.getCurrentUser) == null ? void 0 : _a.call(UserStore);
  const previousMessage = getPreviousMessage(channelId);
  const previousSender = getPreviousMessageSender(channelId);
  const result = applyReplacements(msg, channelId, {
    previousMessage,
    previousSenderId: (_b = previousSender == null ? void 0 : previousSender.id) != null ? _b : null,
    currentUserId: (_c = currentUser == null ? void 0 : currentUser.id) != null ? _c : null
  });
  if (result.editPreviousMessage) {
    editPreviousMessage(result.editPreviousMessage.channelId, result.editPreviousMessage.messageId, result.editPreviousMessage.newContent);
  }
  return result.message;
}
var plugin = {
  onLoad: () => {
    var _a;
    const ReactNative = (0, import_metro2.findByProps)("Alert");
    try {
      if (ReactNative == null ? void 0 : ReactNative.Alert) {
        ReactNative.Alert.alert("Key-Intercept", "The plugin is executing!");
      }
      logger.log("Plugin is starting up!");
      const MessageActions = (0, import_metro2.findByProps)("sendMessage");
      if (MessageActions && MessageActions.sendMessage) {
        unpatchSendMessage = (0, import_patcher.before)("sendMessage", MessageActions, args => {
          var _a2, _b, _c, _d, _e, _f, _g, _h;
          const [channelId, messageData] = args;
          if (ReactNative == null ? void 0 : ReactNative.Alert) ReactNative.Alert.alert("Key-Intercept", "Intercepting your message right now!");
          const ChannelStore = (0, import_metro2.findByProps)("getChannel", "getDMFromUserId");
          const GuildStore = (0, import_metro2.findByProps)("getGuild", "getGuilds");
          const UserStore2 = (0, import_metro2.findByProps)("getCurrentUser", "getUser");
          const channel = (_a2 = ChannelStore == null ? void 0 : ChannelStore.getChannel) == null ? void 0 : _a2.call(ChannelStore, channelId);
          if (!channel) return;
          let nameToCheck = null;
          let idToCheck = null;
          if (channel.guild_id) {
            const guild = GuildStore == null ? void 0 : GuildStore.getGuild(channel.guild_id);
            nameToCheck = (_b = guild == null ? void 0 : guild.name) != null ? _b : null;
            idToCheck = (_c = guild == null ? void 0 : guild.id) != null ? _c : null;
          } else {
            if (channel.name) {
              nameToCheck = channel.name;
            } else if (((_d = channel.recipients) == null ? void 0 : _d.length) > 0) {
              const currentUser2 = UserStore2.getCurrentUser();
              const recipientNames = channel.recipients.filter(id => id !== currentUser2.id).map(id => {
                var _a3;
                return (_a3 = UserStore2.getUser(id)) == null ? void 0 : _a3.username;
              }).filter(Boolean);
              nameToCheck = recipientNames.join(", ");
              idToCheck = (_e = channel.id) != null ? _e : null;
            }
          }
          if (whitelist && whitelist.length > 0) {
            const nameMatches = !!nameToCheck && whitelist.some(item => item.server_name === nameToCheck);
            const idMatches = !!idToCheck && whitelist.some(item => item.discord_id === idToCheck);
            if ((nameToCheck || idToCheck) && !nameMatches && !idMatches) {
              return;
            }
          }
          const channelName = (_h = (_g = (_f = channel == null ? void 0 : channel.name) == null ? void 0 : _f.toLowerCase) == null ? void 0 : _g.call(_f)) != null ? _h : "";
          if (channelName.includes("sfw") && !channelName.includes("nsfw")) {
            return;
          }
          if (typeof messageData === "object" && messageData !== null && "content" in messageData && typeof messageData.content === "string") {
            const output = applyReplacements2(messageData.content, channelId);
            messageData.content = output;
          }
          return args;
        });
      } else {
        if (ReactNative == null ? void 0 : ReactNative.Alert) ReactNative.Alert.alert("Error", "Could not find sendMessage!");
      }
      const UserStore = (0, import_metro2.findByProps)("getCurrentUser", "getUser");
      const currentUser = (_a = UserStore == null ? void 0 : UserStore.getCurrentUser) == null ? void 0 : _a.call(UserStore);
      if (currentUser) {
        getData(currentUser.id, currentUser.username).then(() => {
          if (ReactNative == null ? void 0 : ReactNative.Alert) ReactNative.Alert.alert("Key-Intercept", "Database connected successfully!");
        }).catch(err => {
          if (ReactNative == null ? void 0 : ReactNative.Alert) ReactNative.Alert.alert("DB Error", String(err));
        });
      }
    } catch (fatalError) {
      if (ReactNative == null ? void 0 : ReactNative.Alert) {
        ReactNative.Alert.alert("FATAL ERROR", String(fatalError));
      }
    }
  },
  onUnload: () => {
    if (unpatchSendMessage) {
      unpatchSendMessage();
      unpatchSendMessage = null;
    }
  }
};
var kettu_default = plugin;

// src/index.ts
console.log("[key-intercept] === SCRIPT EVAL START ===");
var onLoad = kettu_default.onLoad;
var onUnload = kettu_default.onUnload;
