var UNDEFINED = "undefined",
api = {
    call: function(a) {
        if (typeof a.data == UNDEFINED) a.data = {};
        a.data.api_token = api_token;
        return $.ajax({
            url: "http://api." + DOMAIN + "/v1/" + a.url + ".json",
            dataType: "jsonp",
            type: "GET",
            data: a.data,
            success: function(b) {
                if (b.meta.status == 200) if (typeof a.success != UNDEFINED) a.success(b);
                else ENVIRONMENT === DEVELOPMENT && console.log(b);
                else if (typeof a.failure != UNDEFINED) a.failure(b);
                else ENVIRONMENT === DEVELOPMENT && console.log(b)
            }
        })
    }
};
;
/*!
 * jQuery JavaScript Library v1.5.2
 * http://jquery.com/
 *
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2011, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Thu Mar 31 15:28:23 2011 -0400
 */
 (function(a, b) {
    function ci(a) {
        return d.isWindow(a) ? a: a.nodeType === 9 ? a.defaultView || a.parentWindow: !1
    }
    function cf(a) {
        if (!b_[a]) {
            var b = d("<" + a + ">").appendTo("body"),
            c = b.css("display");
            b.remove();
            if (c === "none" || c === "") c = "block";
            b_[a] = c
        }
        return b_[a]
    }
    function ce(a, b) {
        var c = {};
        d.each(cd.concat.apply([], cd.slice(0, b)),
        function() {
            c[this] = a
        });
        return c
    }
    function b$() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch(b) {}
    }
    function bZ() {
        try {
            return new a.XMLHttpRequest
        } catch(b) {}
    }
    function bY() {
        d(a).unload(function() {
            for (var a in bW) bW[a](0, 1)
        })
    }
    function bS(a, c) {
        a.dataFilter && (c = a.dataFilter(c, a.dataType));
        var e = a.dataTypes,
        f = {},
        g,
        h,
        i = e.length,
        j,
        k = e[0],
        l,
        m,
        n,
        o,
        p;
        for (g = 1; g < i; g++) {
            if (g === 1) for (h in a.converters) typeof h === "string" && (f[h.toLowerCase()] = a.converters[h]);
            l = k,
            k = e[g];
            if (k === "*") k = l;
            else if (l !== "*" && l !== k) {
                m = l + " " + k,
                n = f[m] || f["* " + k];
                if (!n) {
                    p = b;
                    for (o in f) {
                        j = o.split(" ");
                        if (j[0] === l || j[0] === "*") {
                            p = f[j[1] + " " + k];
                            if (p) {
                                o = f[o],
                                o === !0 ? n = p: p === !0 && (n = o);
                                break
                            }
                        }
                    }
                } ! n && !p && d.error("No conversion from " + m.replace(" ", " to ")),
                n !== !0 && (c = n ? n(c) : p(o(c)))
            }
        }
        return c
    }
    function bR(a, c, d) {
        var e = a.contents,
        f = a.dataTypes,
        g = a.responseFields,
        h,
        i,
        j,
        k;
        for (i in g) i in d && (c[g[i]] = d[i]);
        while (f[0] === "*") f.shift(),
        h === b && (h = a.mimeType || c.getResponseHeader("content-type"));
        if (h) for (i in e) if (e[i] && e[i].test(h)) {
            f.unshift(i);
            break
        }
        if (f[0] in d) j = f[0];
        else {
            for (i in d) {
                if (!f[0] || a.converters[i + " " + f[0]]) {
                    j = i;
                    break
                }
                k || (k = i)
            }
            j = j || k
        }
        if (j) {
            j !== f[0] && f.unshift(j);
            return d[j]
        }
    }
    function bQ(a, b, c, e) {
        if (d.isArray(b) && b.length) d.each(b,
        function(b, f) {
            c || bs.test(a) ? e(a, f) : bQ(a + "[" + (typeof f === "object" || d.isArray(f) ? b: "") + "]", f, c, e)
        });
        else if (c || b == null || typeof b !== "object") e(a, b);
        else if (d.isArray(b) || d.isEmptyObject(b)) e(a, "");
        else for (var f in b) bQ(a + "[" + f + "]", b[f], c, e)
    }
    function bP(a, c, d, e, f, g) {
        f = f || c.dataTypes[0],
        g = g || {},
        g[f] = !0;
        var h = a[f],
        i = 0,
        j = h ? h.length: 0,
        k = a === bJ,
        l;
        for (; i < j && (k || !l); i++) l = h[i](c, d, e),
        typeof l === "string" && (!k || g[l] ? l = b: (c.dataTypes.unshift(l), l = bP(a, c, d, e, l, g))); (k || !l) && !g["*"] && (l = bP(a, c, d, e, "*", g));
        return l
    }
    function bO(a) {
        return function(b, c) {
            typeof b !== "string" && (c = b, b = "*");
            if (d.isFunction(c)) {
                var e = b.toLowerCase().split(bD),
                f = 0,
                g = e.length,
                h,
                i,
                j;
                for (; f < g; f++) h = e[f],
                j = /^\+/.test(h),
                j && (h = h.substr(1) || "*"),
                i = a[h] = a[h] || [],
                i[j ? "unshift": "push"](c)
            }
        }
    }
    function bq(a, b, c) {
        var e = b === "width" ? bk: bl,
        f = b === "width" ? a.offsetWidth: a.offsetHeight;
        if (c === "border") return f;
        d.each(e,
        function() {
            c || (f -= parseFloat(d.css(a, "padding" + this)) || 0),
            c === "margin" ? f += parseFloat(d.css(a, "margin" + this)) || 0: f -= parseFloat(d.css(a, "border" + this + "Width")) || 0
        });
        return f
    }
    function bc(a, b) {
        b.src ? d.ajax({
            url: b.src,
            async: !1,
            dataType: "script"
        }) : d.globalEval(b.text || b.textContent || b.innerHTML || ""),
        b.parentNode && b.parentNode.removeChild(b)
    }
    function bb(a) {
        return "getElementsByTagName" in a ? a.getElementsByTagName("*") : "querySelectorAll" in a ? a.querySelectorAll("*") : []
    }
    function ba(a, b) {
        if (b.nodeType === 1) {
            var c = b.nodeName.toLowerCase();
            b.clearAttributes(),
            b.mergeAttributes(a);
            if (c === "object") b.outerHTML = a.outerHTML;
            else if (c !== "input" || a.type !== "checkbox" && a.type !== "radio") {
                if (c === "option") b.selected = a.defaultSelected;
                else if (c === "input" || c === "textarea") b.defaultValue = a.defaultValue
            } else a.checked && (b.defaultChecked = b.checked = a.checked),
            b.value !== a.value && (b.value = a.value);
            b.removeAttribute(d.expando)
        }
    }
    function _(a, b) {
        if (b.nodeType === 1 && d.hasData(a)) {
            var c = d.expando,
            e = d.data(a),
            f = d.data(b, e);
            if (e = e[c]) {
                var g = e.events;
                f = f[c] = d.extend({},
                e);
                if (g) {
                    delete f.handle,
                    f.events = {};
                    for (var h in g) for (var i = 0, j = g[h].length; i < j; i++) d.event.add(b, h + (g[h][i].namespace ? ".": "") + g[h][i].namespace, g[h][i], g[h][i].data)
                }
            }
        }
    }
    function $(a, b) {
        return d.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }
    function Q(a, b, c) {
        if (d.isFunction(b)) return d.grep(a,
        function(a, d) {
            var e = !!b.call(a, d, a);
            return e === c
        });
        if (b.nodeType) return d.grep(a,
        function(a, d) {
            return a === b === c
        });
        if (typeof b === "string") {
            var e = d.grep(a,
            function(a) {
                return a.nodeType === 1
            });
            if (L.test(b)) return d.filter(b, e, !c);
            b = d.filter(b, e)
        }
        return d.grep(a,
        function(a, e) {
            return d.inArray(a, b) >= 0 === c
        })
    }
    function P(a) {
        return ! a || !a.parentNode || a.parentNode.nodeType === 11
    }
    function H(a, b) {
        return (a && a !== "*" ? a + ".": "") + b.replace(t, "`").replace(u, "&")
    }
    function G(a) {
        var b,
        c,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p = [],
        q = [],
        s = d._data(this, "events");
        if (a.liveFired !== this && s && s.live && !a.target.disabled && (!a.button || a.type !== "click")) {
            a.namespace && (n = new RegExp("(^|\\.)" + a.namespace.split(".").join("\\.(?:.*\\.)?") + "(\\.|$)")),
            a.liveFired = this;
            var t = s.live.slice(0);
            for (i = 0; i < t.length; i++) g = t[i],
            g.origType.replace(r, "") === a.type ? q.push(g.selector) : t.splice(i--, 1);
            f = d(a.target).closest(q, a.currentTarget);
            for (j = 0, k = f.length; j < k; j++) {
                m = f[j];
                for (i = 0; i < t.length; i++) {
                    g = t[i];
                    if (m.selector === g.selector && (!n || n.test(g.namespace)) && !m.elem.disabled) {
                        h = m.elem,
                        e = null;
                        if (g.preType === "mouseenter" || g.preType === "mouseleave") a.type = g.preType,
                        e = d(a.relatedTarget).closest(g.selector)[0]; (!e || e !== h) && p.push({
                            elem: h,
                            handleObj: g,
                            level: m.level
                        })
                    }
                }
            }
            for (j = 0, k = p.length; j < k; j++) {
                f = p[j];
                if (c && f.level > c) break;
                a.currentTarget = f.elem,
                a.data = f.handleObj.data,
                a.handleObj = f.handleObj,
                o = f.handleObj.origHandler.apply(f.elem, arguments);
                if (o === !1 || a.isPropagationStopped()) {
                    c = f.level,
                    o === !1 && (b = !1);
                    if (a.isImmediatePropagationStopped()) break
                }
            }
            return b
        }
    }
    function E(a, c, e) {
        var f = d.extend({},
        e[0]);
        f.type = a,
        f.originalEvent = {},
        f.liveFired = b,
        d.event.handle.call(c, f),
        f.isDefaultPrevented() && e[0].preventDefault()
    }
    function y() {
        return ! 0
    }
    function x() {
        return ! 1
    }
    function i(a) {
        for (var b in a) if (b !== "toJSON") return ! 1;
        return ! 0
    }
    function h(a, c, e) {
        if (e === b && a.nodeType === 1) {
            e = a.getAttribute("data-" + c);
            if (typeof e === "string") {
                try {
                    e = e === "true" ? !0: e === "false" ? !1: e === "null" ? null: d.isNaN(e) ? g.test(e) ? d.parseJSON(e) : e: parseFloat(e)
                } catch(f) {}
                d.data(a, c, e)
            } else e = b
        }
        return e
    }
    var c = a.document,
    d = function() {
        function G() {
            if (!d.isReady) {
                try {
                    c.documentElement.doScroll("left")
                } catch(a) {
                    setTimeout(G, 1);
                    return
                }
                d.ready()
            }
        }
        var d = function(a, b) {
            return new d.fn.init(a, b, g)
        },
        e = a.jQuery,
        f = a.$,
        g,
        h = /^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]+)$)/,
        i = /\S/,
        j = /^\s+/,
        k = /\s+$/,
        l = /\d/,
        m = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
        n = /^[\],:{}\s]*$/,
        o = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
        p = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        q = /(?:^|:|,)(?:\s*\[)+/g,
        r = /(webkit)[ \/]([\w.]+)/,
        s = /(opera)(?:.*version)?[ \/]([\w.]+)/,
        t = /(msie) ([\w.]+)/,
        u = /(mozilla)(?:.*? rv:([\w.]+))?/,
        v = navigator.userAgent,
        w,
        x,
        y,
        z = Object.prototype.toString,
        A = Object.prototype.hasOwnProperty,
        B = Array.prototype.push,
        C = Array.prototype.slice,
        D = String.prototype.trim,
        E = Array.prototype.indexOf,
        F = {};
        d.fn = d.prototype = {
            constructor: d,
            init: function(a, e, f) {
                var g,
                i,
                j,
                k;
                if (!a) return this;
                if (a.nodeType) {
                    this.context = this[0] = a,
                    this.length = 1;
                    return this
                }
                if (a === "body" && !e && c.body) {
                    this.context = c,
                    this[0] = c.body,
                    this.selector = "body",
                    this.length = 1;
                    return this
                }
                if (typeof a === "string") {
                    g = h.exec(a);
                    if (!g || !g[1] && e) return ! e || e.jquery ? (e || f).find(a) : this.constructor(e).find(a);
                    if (g[1]) {
                        e = e instanceof d ? e[0] : e,
                        k = e ? e.ownerDocument || e: c,
                        j = m.exec(a),
                        j ? d.isPlainObject(e) ? (a = [c.createElement(j[1])], d.fn.attr.call(a, e, !0)) : a = [k.createElement(j[1])] : (j = d.buildFragment([g[1]], [k]), a = (j.cacheable ? d.clone(j.fragment) : j.fragment).childNodes);
                        return d.merge(this, a)
                    }
                    i = c.getElementById(g[2]);
                    if (i && i.parentNode) {
                        if (i.id !== g[2]) return f.find(a);
                        this.length = 1,
                        this[0] = i
                    }
                    this.context = c,
                    this.selector = a;
                    return this
                }
                if (d.isFunction(a)) return f.ready(a);
                a.selector !== b && (this.selector = a.selector, this.context = a.context);
                return d.makeArray(a, this)
            },
            selector: "",
            jquery: "1.5.2",
            length: 0,
            size: function() {
                return this.length
            },
            toArray: function() {
                return C.call(this, 0)
            },
            get: function(a) {
                return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a]
            },
            pushStack: function(a, b, c) {
                var e = this.constructor();
                d.isArray(a) ? B.apply(e, a) : d.merge(e, a),
                e.prevObject = this,
                e.context = this.context,
                b === "find" ? e.selector = this.selector + (this.selector ? " ": "") + c: b && (e.selector = this.selector + "." + b + "(" + c + ")");
                return e
            },
            each: function(a, b) {
                return d.each(this, a, b)
            },
            ready: function(a) {
                d.bindReady(),
                x.done(a);
                return this
            },
            eq: function(a) {
                return a === -1 ? this.slice(a) : this.slice(a, +a + 1)
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq( - 1)
            },
            slice: function() {
                return this.pushStack(C.apply(this, arguments), "slice", C.call(arguments).join(","))
            },
            map: function(a) {
                return this.pushStack(d.map(this,
                function(b, c) {
                    return a.call(b, c, b)
                }))
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: B,
            sort: [].sort,
            splice: [].splice
        },
        d.fn.init.prototype = d.fn,
        d.extend = d.fn.extend = function() {
            var a,
            c,
            e,
            f,
            g,
            h,
            i = arguments[0] || {},
            j = 1,
            k = arguments.length,
            l = !1;
            typeof i === "boolean" && (l = i, i = arguments[1] || {},
            j = 2),
            typeof i !== "object" && !d.isFunction(i) && (i = {}),
            k === j && (i = this, --j);
            for (; j < k; j++) if ((a = arguments[j]) != null) for (c in a) {
                e = i[c],
                f = a[c];
                if (i === f) continue;
                l && f && (d.isPlainObject(f) || (g = d.isArray(f))) ? (g ? (g = !1, h = e && d.isArray(e) ? e: []) : h = e && d.isPlainObject(e) ? e: {},
                i[c] = d.extend(l, h, f)) : f !== b && (i[c] = f)
            }
            return i
        },
        d.extend({
            noConflict: function(b) {
                a.$ = f,
                b && (a.jQuery = e);
                return d
            },
            isReady: !1,
            readyWait: 1,
            ready: function(a) {
                a === !0 && d.readyWait--;
                if (!d.readyWait || a !== !0 && !d.isReady) {
                    if (!c.body) return setTimeout(d.ready, 1);
                    d.isReady = !0;
                    if (a !== !0 && --d.readyWait > 0) return;
                    x.resolveWith(c, [d]),
                    d.fn.trigger && d(c).trigger("ready").unbind("ready")
                }
            },
            bindReady: function() {
                if (!x) {
                    x = d._Deferred();
                    if (c.readyState === "complete") return setTimeout(d.ready, 1);
                    if (c.addEventListener) c.addEventListener("DOMContentLoaded", y, !1),
                    a.addEventListener("load", d.ready, !1);
                    else if (c.attachEvent) {
                        c.attachEvent("onreadystatechange", y),
                        a.attachEvent("onload", d.ready);
                        var b = !1;
                        try {
                            b = a.frameElement == null
                        } catch(e) {}
                        c.documentElement.doScroll && b && G()
                    }
                }
            },
            isFunction: function(a) {
                return d.type(a) === "function"
            },
            isArray: Array.isArray ||
            function(a) {
                return d.type(a) === "array"
            },
            isWindow: function(a) {
                return a && typeof a === "object" && "setInterval" in a
            },
            isNaN: function(a) {
                return a == null || !l.test(a) || isNaN(a)
            },
            type: function(a) {
                return a == null ? String(a) : F[z.call(a)] || "object"
            },
            isPlainObject: function(a) {
                if (!a || d.type(a) !== "object" || a.nodeType || d.isWindow(a)) return ! 1;
                if (a.constructor && !A.call(a, "constructor") && !A.call(a.constructor.prototype, "isPrototypeOf")) return ! 1;
                var c;
                for (c in a) {}
                return c === b || A.call(a, c)
            },
            isEmptyObject: function(a) {
                for (var b in a) return ! 1;
                return ! 0
            },
            error: function(a) {
                throw a
            },
            parseJSON: function(b) {
                if (typeof b !== "string" || !b) return null;
                b = d.trim(b);
                if (n.test(b.replace(o, "@").replace(p, "]").replace(q, ""))) return a.JSON && a.JSON.parse ? a.JSON.parse(b) : (new Function("return " + b))();
                d.error("Invalid JSON: " + b)
            },
            parseXML: function(b, c, e) {
                a.DOMParser ? (e = new DOMParser, c = e.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b)),
                e = c.documentElement,
                (!e || !e.nodeName || e.nodeName === "parsererror") && d.error("Invalid XML: " + b);
                return c
            },
            noop: function() {},
            globalEval: function(a) {
                if (a && i.test(a)) {
                    var b = c.head || c.getElementsByTagName("head")[0] || c.documentElement,
                    e = c.createElement("script");
                    d.support.scriptEval() ? e.appendChild(c.createTextNode(a)) : e.text = a,
                    b.insertBefore(e, b.firstChild),
                    b.removeChild(e)
                }
            },
            nodeName: function(a, b) {
                return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
            },
            each: function(a, c, e) {
                var f,
                g = 0,
                h = a.length,
                i = h === b || d.isFunction(a);
                if (e) {
                    if (i) {
                        for (f in a) if (c.apply(a[f], e) === !1) break
                    } else for (; g < h;) if (c.apply(a[g++], e) === !1) break
                } else if (i) {
                    for (f in a) if (c.call(a[f], f, a[f]) === !1) break
                } else for (var j = a[0]; g < h && c.call(j, g, j) !== !1; j = a[++g]) {}
                return a
            },
            trim: D ?
            function(a) {
                return a == null ? "": D.call(a)
            }: function(a) {
                return a == null ? "": (a + "").replace(j, "").replace(k, "")
            },
            makeArray: function(a, b) {
                var c = b || [];
                if (a != null) {
                    var e = d.type(a);
                    a.length == null || e === "string" || e === "function" || e === "regexp" || d.isWindow(a) ? B.call(c, a) : d.merge(c, a)
                }
                return c
            },
            inArray: function(a, b) {
                if (b.indexOf) return b.indexOf(a);
                for (var c = 0, d = b.length; c < d; c++) if (b[c] === a) return c;
                return - 1
            },
            merge: function(a, c) {
                var d = a.length,
                e = 0;
                if (typeof c.length === "number") for (var f = c.length; e < f; e++) a[d++] = c[e];
                else while (c[e] !== b) a[d++] = c[e++];
                a.length = d;
                return a
            },
            grep: function(a, b, c) {
                var d = [],
                e;
                c = !!c;
                for (var f = 0, g = a.length; f < g; f++) e = !!b(a[f], f),
                c !== e && d.push(a[f]);
                return d
            },
            map: function(a, b, c) {
                var d = [],
                e;
                for (var f = 0, g = a.length; f < g; f++) e = b(a[f], f, c),
                e != null && (d[d.length] = e);
                return d.concat.apply([], d)
            },
            guid: 1,
            proxy: function(a, c, e) {
                arguments.length === 2 && (typeof c === "string" ? (e = a, a = e[c], c = b) : c && !d.isFunction(c) && (e = c, c = b)),
                !c && a && (c = function() {
                    return a.apply(e || this, arguments)
                }),
                a && (c.guid = a.guid = a.guid || c.guid || d.guid++);
                return c
            },
            access: function(a, c, e, f, g, h) {
                var i = a.length;
                if (typeof c === "object") {
                    for (var j in c) d.access(a, j, c[j], f, g, e);
                    return a
                }
                if (e !== b) {
                    f = !h && f && d.isFunction(e);
                    for (var k = 0; k < i; k++) g(a[k], c, f ? e.call(a[k], k, g(a[k], c)) : e, h);
                    return a
                }
                return i ? g(a[0], c) : b
            },
            now: function() {
                return (new Date).getTime()
            },
            uaMatch: function(a) {
                a = a.toLowerCase();
                var b = r.exec(a) || s.exec(a) || t.exec(a) || a.indexOf("compatible") < 0 && u.exec(a) || [];
                return {
                    browser: b[1] || "",
                    version: b[2] || "0"
                }
            },
            sub: function() {
                function a(b, c) {
                    return new a.fn.init(b, c)
                }
                d.extend(!0, a, this),
                a.superclass = this,
                a.fn = a.prototype = this(),
                a.fn.constructor = a,
                a.subclass = this.subclass,
                a.fn.init = function b(b, c) {
                    c && c instanceof d && !(c instanceof a) && (c = a(c));
                    return d.fn.init.call(this, b, c, e)
                },
                a.fn.init.prototype = a.fn;
                var e = a(c);
                return a
            },
            browser: {}
        }),
        d.each("Boolean Number String Function Array Date RegExp Object".split(" "),
        function(a, b) {
            F["[object " + b + "]"] = b.toLowerCase()
        }),
        w = d.uaMatch(v),
        w.browser && (d.browser[w.browser] = !0, d.browser.version = w.version),
        d.browser.webkit && (d.browser.safari = !0),
        E && (d.inArray = function(a, b) {
            return E.call(b, a)
        }),
        i.test(" ") && (j = /^[\s\xA0]+/, k = /[\s\xA0]+$/),
        g = d(c),
        c.addEventListener ? y = function() {
            c.removeEventListener("DOMContentLoaded", y, !1),
            d.ready()
        }: c.attachEvent && (y = function() {
            c.readyState === "complete" && (c.detachEvent("onreadystatechange", y), d.ready())
        });
        return d
    } (),
    e = "then done fail isResolved isRejected promise".split(" "),
    f = [].slice;
    d.extend({
        _Deferred: function() {
            var a = [],
            b,
            c,
            e,
            f = {
                done: function() {
                    if (!e) {
                        var c = arguments,
                        g,
                        h,
                        i,
                        j,
                        k;
                        b && (k = b, b = 0);
                        for (g = 0, h = c.length; g < h; g++) i = c[g],
                        j = d.type(i),
                        j === "array" ? f.done.apply(f, i) : j === "function" && a.push(i);
                        k && f.resolveWith(k[0], k[1])
                    }
                    return this
                },
                resolveWith: function(d, f) {
                    if (!e && !b && !c) {
                        f = f || [],
                        c = 1;
                        try {
                            while (a[0]) a.shift().apply(d, f)
                        } finally {
                            b = [d, f],
                            c = 0
                        }
                    }
                    return this
                },
                resolve: function() {
                    f.resolveWith(this, arguments);
                    return this
                },
                isResolved: function() {
                    return c || b
                },
                cancel: function() {
                    e = 1,
                    a = [];
                    return this
                }
            };
            return f
        },
        Deferred: function(a) {
            var b = d._Deferred(),
            c = d._Deferred(),
            f;
            d.extend(b, {
                then: function(a, c) {
                    b.done(a).fail(c);
                    return this
                },
                fail: c.done,
                rejectWith: c.resolveWith,
                reject: c.resolve,
                isRejected: c.isResolved,
                promise: function(a) {
                    if (a == null) {
                        if (f) return f;
                        f = a = {}
                    }
                    var c = e.length;
                    while (c--) a[e[c]] = b[e[c]];
                    return a
                }
            }),
            b.done(c.cancel).fail(b.cancel),
            delete b.cancel,
            a && a.call(b, b);
            return b
        },
        when: function(a) {
            function i(a) {
                return function(c) {
                    b[a] = arguments.length > 1 ? f.call(arguments, 0) : c,
                    --g || h.resolveWith(h, f.call(b, 0))
                }
            }
            var b = arguments,
            c = 0,
            e = b.length,
            g = e,
            h = e <= 1 && a && d.isFunction(a.promise) ? a: d.Deferred();
            if (e > 1) {
                for (; c < e; c++) b[c] && d.isFunction(b[c].promise) ? b[c].promise().then(i(c), h.reject) : --g;
                g || h.resolveWith(h, b)
            } else h !== a && h.resolveWith(h, e ? [a] : []);
            return h.promise()
        }
    }),
    function() {
        d.support = {};
        var b = c.createElement("div");
        b.style.display = "none",
        b.innerHTML = "   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
        var e = b.getElementsByTagName("*"),
        f = b.getElementsByTagName("a")[0],
        g = c.createElement("select"),
        h = g.appendChild(c.createElement("option")),
        i = b.getElementsByTagName("input")[0];
        if (e && e.length && f) {
            d.support = {
                leadingWhitespace: b.firstChild.nodeType === 3,
                tbody: !b.getElementsByTagName("tbody").length,
                htmlSerialize: !!b.getElementsByTagName("link").length,
                style: /red/.test(f.getAttribute("style")),
                hrefNormalized: f.getAttribute("href") === "/a",
                opacity: /^0.55$/.test(f.style.opacity),
                cssFloat: !!f.style.cssFloat,
                checkOn: i.value === "on",
                optSelected: h.selected,
                deleteExpando: !0,
                optDisabled: !1,
                checkClone: !1,
                noCloneEvent: !0,
                noCloneChecked: !0,
                boxModel: null,
                inlineBlockNeedsLayout: !1,
                shrinkWrapBlocks: !1,
                reliableHiddenOffsets: !0,
                reliableMarginRight: !0
            },
            i.checked = !0,
            d.support.noCloneChecked = i.cloneNode(!0).checked,
            g.disabled = !0,
            d.support.optDisabled = !h.disabled;
            var j = null;
            d.support.scriptEval = function() {
                if (j === null) {
                    var b = c.documentElement,
                    e = c.createElement("script"),
                    f = "script" + d.now();
                    try {
                        e.appendChild(c.createTextNode("window." + f + "=1;"))
                    } catch(g) {}
                    b.insertBefore(e, b.firstChild),
                    a[f] ? (j = !0, delete a[f]) : j = !1,
                    b.removeChild(e)
                }
                return j
            };
            try {
                delete b.test
            } catch(k) {
                d.support.deleteExpando = !1
            } ! b.addEventListener && b.attachEvent && b.fireEvent && (b.attachEvent("onclick",
            function l() {
                d.support.noCloneEvent = !1,
                b.detachEvent("onclick", l)
            }), b.cloneNode(!0).fireEvent("onclick")),
            b = c.createElement("div"),
            b.innerHTML = "<input type='radio' name='radiotest' checked='checked'/>";
            var m = c.createDocumentFragment();
            m.appendChild(b.firstChild),
            d.support.checkClone = m.cloneNode(!0).cloneNode(!0).lastChild.checked,
            d(function() {
                var a = c.createElement("div"),
                b = c.getElementsByTagName("body")[0];
                if (b) {
                    a.style.width = a.style.paddingLeft = "1px",
                    b.appendChild(a),
                    d.boxModel = d.support.boxModel = a.offsetWidth === 2,
                    "zoom" in a.style && (a.style.display = "inline", a.style.zoom = 1, d.support.inlineBlockNeedsLayout = a.offsetWidth === 2, a.style.display = "", a.innerHTML = "<div style='width:4px;'></div>", d.support.shrinkWrapBlocks = a.offsetWidth !== 2),
                    a.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";
                    var e = a.getElementsByTagName("td");
                    d.support.reliableHiddenOffsets = e[0].offsetHeight === 0,
                    e[0].style.display = "",
                    e[1].style.display = "none",
                    d.support.reliableHiddenOffsets = d.support.reliableHiddenOffsets && e[0].offsetHeight === 0,
                    a.innerHTML = "",
                    c.defaultView && c.defaultView.getComputedStyle && (a.style.width = "1px", a.style.marginRight = "0", d.support.reliableMarginRight = (parseInt((c.defaultView.getComputedStyle(a, null) || {
                        marginRight: 0
                    }).marginRight, 10) || 0) === 0),
                    b.removeChild(a).style.display = "none",
                    a = e = null
                }
            });
            var n = function(a) {
                var b = c.createElement("div");
                a = "on" + a;
                if (!b.attachEvent) return ! 0;
                var d = a in b;
                d || (b.setAttribute(a, "return;"), d = typeof b[a] === "function");
                return d
            };
            d.support.submitBubbles = n("submit"),
            d.support.changeBubbles = n("change"),
            b = e = f = null
        }
    } ();
    var g = /^(?:\{.*\}|\[.*\])$/;
    d.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (d.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(a) {
            a = a.nodeType ? d.cache[a[d.expando]] : a[d.expando];
            return !! a && !i(a)
        },
        data: function(a, c, e, f) {
            if (d.acceptData(a)) {
                var g = d.expando,
                h = typeof c === "string",
                i,
                j = a.nodeType,
                k = j ? d.cache: a,
                l = j ? a[d.expando] : a[d.expando] && d.expando;
                if ((!l || f && l && !k[l][g]) && h && e === b) return;
                l || (j ? a[d.expando] = l = ++d.uuid: l = d.expando),
                k[l] || (k[l] = {},
                j || (k[l].toJSON = d.noop));
                if (typeof c === "object" || typeof c === "function") f ? k[l][g] = d.extend(k[l][g], c) : k[l] = d.extend(k[l], c);
                i = k[l],
                f && (i[g] || (i[g] = {}), i = i[g]),
                e !== b && (i[c] = e);
                if (c === "events" && !i[c]) return i[g] && i[g].events;
                return h ? i[c] : i
            }
        },
        removeData: function(b, c, e) {
            if (d.acceptData(b)) {
                var f = d.expando,
                g = b.nodeType,
                h = g ? d.cache: b,
                j = g ? b[d.expando] : d.expando;
                if (!h[j]) return;
                if (c) {
                    var k = e ? h[j][f] : h[j];
                    if (k) {
                        delete k[c];
                        if (!i(k)) return
                    }
                }
                if (e) {
                    delete h[j][f];
                    if (!i(h[j])) return
                }
                var l = h[j][f];
                d.support.deleteExpando || h != a ? delete h[j] : h[j] = null,
                l ? (h[j] = {},
                g || (h[j].toJSON = d.noop), h[j][f] = l) : g && (d.support.deleteExpando ? delete b[d.expando] : b.removeAttribute ? b.removeAttribute(d.expando) : b[d.expando] = null)
            }
        },
        _data: function(a, b, c) {
            return d.data(a, b, c, !0)
        },
        acceptData: function(a) {
            if (a.nodeName) {
                var b = d.noData[a.nodeName.toLowerCase()];
                if (b) return b !== !0 && a.getAttribute("classid") === b
            }
            return ! 0
        }
    }),
    d.fn.extend({
        data: function(a, c) {
            var e = null;
            if (typeof a === "undefined") {
                if (this.length) {
                    e = d.data(this[0]);
                    if (this[0].nodeType === 1) {
                        var f = this[0].attributes,
                        g;
                        for (var i = 0, j = f.length; i < j; i++) g = f[i].name,
                        g.indexOf("data-") === 0 && (g = g.substr(5), h(this[0], g, e[g]))
                    }
                }
                return e
            }
            if (typeof a === "object") return this.each(function() {
                d.data(this, a)
            });
            var k = a.split(".");
            k[1] = k[1] ? "." + k[1] : "";
            if (c === b) {
                e = this.triggerHandler("getData" + k[1] + "!", [k[0]]),
                e === b && this.length && (e = d.data(this[0], a), e = h(this[0], a, e));
                return e === b && k[1] ? this.data(k[0]) : e
            }
            return this.each(function() {
                var b = d(this),
                e = [k[0], c];
                b.triggerHandler("setData" + k[1] + "!", e),
                d.data(this, a, c),
                b.triggerHandler("changeData" + k[1] + "!", e)
            })
        },
        removeData: function(a) {
            return this.each(function() {
                d.removeData(this, a)
            })
        }
    }),
    d.extend({
        queue: function(a, b, c) {
            if (a) {
                b = (b || "fx") + "queue";
                var e = d._data(a, b);
                if (!c) return e || []; ! e || d.isArray(c) ? e = d._data(a, b, d.makeArray(c)) : e.push(c);
                return e
            }
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = d.queue(a, b),
            e = c.shift();
            e === "inprogress" && (e = c.shift()),
            e && (b === "fx" && c.unshift("inprogress"), e.call(a,
            function() {
                d.dequeue(a, b)
            })),
            c.length || d.removeData(a, b + "queue", !0)
        }
    }),
    d.fn.extend({
        queue: function(a, c) {
            typeof a !== "string" && (c = a, a = "fx");
            if (c === b) return d.queue(this[0], a);
            return this.each(function(b) {
                var e = d.queue(this, a, c);
                a === "fx" && e[0] !== "inprogress" && d.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                d.dequeue(this, a)
            })
        },
        delay: function(a, b) {
            a = d.fx ? d.fx.speeds[a] || a: a,
            b = b || "fx";
            return this.queue(b,
            function() {
                var c = this;
                setTimeout(function() {
                    d.dequeue(c, b)
                },
                a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        }
    });
    var j = /[\n\t\r]/g,
    k = /\s+/,
    l = /\r/g,
    m = /^(?:href|src|style)$/,
    n = /^(?:button|input)$/i,
    o = /^(?:button|input|object|select|textarea)$/i,
    p = /^a(?:rea)?$/i,
    q = /^(?:radio|checkbox)$/i;
    d.props = {
        "for": "htmlFor",
        "class": "className",
        readonly: "readOnly",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        rowspan: "rowSpan",
        colspan: "colSpan",
        tabindex: "tabIndex",
        usemap: "useMap",
        frameborder: "frameBorder"
    },
    d.fn.extend({
        attr: function(a, b) {
            return d.access(this, a, b, !0, d.attr)
        },
        removeAttr: function(a, b) {
            return this.each(function() {
                d.attr(this, a, ""),
                this.nodeType === 1 && this.removeAttribute(a)
            })
        },
        addClass: function(a) {
            if (d.isFunction(a)) return this.each(function(b) {
                var c = d(this);
                c.addClass(a.call(this, b, c.attr("class")))
            });
            if (a && typeof a === "string") {
                var b = (a || "").split(k);
                for (var c = 0, e = this.length; c < e; c++) {
                    var f = this[c];
                    if (f.nodeType === 1) if (f.className) {
                        var g = " " + f.className + " ",
                        h = f.className;
                        for (var i = 0, j = b.length; i < j; i++) g.indexOf(" " + b[i] + " ") < 0 && (h += " " + b[i]);
                        f.className = d.trim(h)
                    } else f.className = a
                }
            }
            return this
        },
        removeClass: function(a) {
            if (d.isFunction(a)) return this.each(function(b) {
                var c = d(this);
                c.removeClass(a.call(this, b, c.attr("class")))
            });
            if (a && typeof a === "string" || a === b) {
                var c = (a || "").split(k);
                for (var e = 0, f = this.length; e < f; e++) {
                    var g = this[e];
                    if (g.nodeType === 1 && g.className) if (a) {
                        var h = (" " + g.className + " ").replace(j, " ");
                        for (var i = 0, l = c.length; i < l; i++) h = h.replace(" " + c[i] + " ", " ");
                        g.className = d.trim(h)
                    } else g.className = ""
                }
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a,
            e = typeof b === "boolean";
            if (d.isFunction(a)) return this.each(function(c) {
                var e = d(this);
                e.toggleClass(a.call(this, c, e.attr("class"), b), b)
            });
            return this.each(function() {
                if (c === "string") {
                    var f,
                    g = 0,
                    h = d(this),
                    i = b,
                    j = a.split(k);
                    while (f = j[g++]) i = e ? i: !h.hasClass(f),
                    h[i ? "addClass": "removeClass"](f)
                } else if (c === "undefined" || c === "boolean") this.className && d._data(this, "__className__", this.className),
                this.className = this.className || a === !1 ? "": d._data(this, "__className__") || ""
            })
        },
        hasClass: function(a) {
            var b = " " + a + " ";
            for (var c = 0, d = this.length; c < d; c++) if ((" " + this[c].className + " ").replace(j, " ").indexOf(b) > -1) return ! 0;
            return ! 1
        },
        val: function(a) {
            if (!arguments.length) {
                var c = this[0];
                if (c) {
                    if (d.nodeName(c, "option")) {
                        var e = c.attributes.value;
                        return ! e || e.specified ? c.value: c.text
                    }
                    if (d.nodeName(c, "select")) {
                        var f = c.selectedIndex,
                        g = [],
                        h = c.options,
                        i = c.type === "select-one";
                        if (f < 0) return null;
                        for (var j = i ? f: 0, k = i ? f + 1: h.length; j < k; j++) {
                            var m = h[j];
                            if (m.selected && (d.support.optDisabled ? !m.disabled: m.getAttribute("disabled") === null) && (!m.parentNode.disabled || !d.nodeName(m.parentNode, "optgroup"))) {
                                a = d(m).val();
                                if (i) return a;
                                g.push(a)
                            }
                        }
                        if (i && !g.length && h.length) return d(h[f]).val();
                        return g
                    }
                    if (q.test(c.type) && !d.support.checkOn) return c.getAttribute("value") === null ? "on": c.value;
                    return (c.value || "").replace(l, "")
                }
                return b
            }
            var n = d.isFunction(a);
            return this.each(function(b) {
                var c = d(this),
                e = a;
                if (this.nodeType === 1) {
                    n && (e = a.call(this, b, c.val())),
                    e == null ? e = "": typeof e === "number" ? e += "": d.isArray(e) && (e = d.map(e,
                    function(a) {
                        return a == null ? "": a + ""
                    }));
                    if (d.isArray(e) && q.test(this.type)) this.checked = d.inArray(c.val(), e) >= 0;
                    else if (d.nodeName(this, "select")) {
                        var f = d.makeArray(e);
                        d("option", this).each(function() {
                            this.selected = d.inArray(d(this).val(), f) >= 0
                        }),
                        f.length || (this.selectedIndex = -1)
                    } else this.value = e
                }
            })
        }
    }),
    d.extend({
        attrFn: {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0
        },
        attr: function(a, c, e, f) {
            if (!a || a.nodeType === 3 || a.nodeType === 8 || a.nodeType === 2) return b;
            if (f && c in d.attrFn) return d(a)[c](e);
            var g = a.nodeType !== 1 || !d.isXMLDoc(a),
            h = e !== b;
            c = g && d.props[c] || c;
            if (a.nodeType === 1) {
                var i = m.test(c);
                if (c === "selected" && !d.support.optSelected) {
                    var j = a.parentNode;
                    j && (j.selectedIndex, j.parentNode && j.parentNode.selectedIndex)
                }
                if ((c in a || a[c] !== b) && g && !i) {
                    h && (c === "type" && n.test(a.nodeName) && a.parentNode && d.error("type property can't be changed"), e === null ? a.nodeType === 1 && a.removeAttribute(c) : a[c] = e);
                    if (d.nodeName(a, "form") && a.getAttributeNode(c)) return a.getAttributeNode(c).nodeValue;
                    if (c === "tabIndex") {
                        var k = a.getAttributeNode("tabIndex");
                        return k && k.specified ? k.value: o.test(a.nodeName) || p.test(a.nodeName) && a.href ? 0: b
                    }
                    return a[c]
                }
                if (!d.support.style && g && c === "style") {
                    h && (a.style.cssText = "" + e);
                    return a.style.cssText
                }
                h && a.setAttribute(c, "" + e);
                if (!a.attributes[c] && (a.hasAttribute && !a.hasAttribute(c))) return b;
                var l = !d.support.hrefNormalized && g && i ? a.getAttribute(c, 2) : a.getAttribute(c);
                return l === null ? b: l
            }
            h && (a[c] = e);
            return a[c]
        }
    });
    var r = /\.(.*)$/,
    s = /^(?:textarea|input|select)$/i,
    t = /\./g,
    u = / /g,
    v = /[^\w\s.|`]/g,
    w = function(a) {
        return a.replace(v, "\\$&")
    };
    d.event = {
        add: function(c, e, f, g) {
            if (c.nodeType !== 3 && c.nodeType !== 8) {
                try {
                    d.isWindow(c) && (c !== a && !c.frameElement) && (c = a)
                } catch(h) {}
                if (f === !1) f = x;
                else if (!f) return;
                var i,
                j;
                f.handler && (i = f, f = i.handler),
                f.guid || (f.guid = d.guid++);
                var k = d._data(c);
                if (!k) return;
                var l = k.events,
                m = k.handle;
                l || (k.events = l = {}),
                m || (k.handle = m = function(a) {
                    return typeof d !== "undefined" && d.event.triggered !== a.type ? d.event.handle.apply(m.elem, arguments) : b
                }),
                m.elem = c,
                e = e.split(" ");
                var n,
                o = 0,
                p;
                while (n = e[o++]) {
                    j = i ? d.extend({},
                    i) : {
                        handler: f,
                        data: g
                    },
                    n.indexOf(".") > -1 ? (p = n.split("."), n = p.shift(), j.namespace = p.slice(0).sort().join(".")) : (p = [], j.namespace = ""),
                    j.type = n,
                    j.guid || (j.guid = f.guid);
                    var q = l[n],
                    r = d.event.special[n] || {};
                    if (!q) {
                        q = l[n] = [];
                        if (!r.setup || r.setup.call(c, g, p, m) === !1) c.addEventListener ? c.addEventListener(n, m, !1) : c.attachEvent && c.attachEvent("on" + n, m)
                    }
                    r.add && (r.add.call(c, j), j.handler.guid || (j.handler.guid = f.guid)),
                    q.push(j),
                    d.event.global[n] = !0
                }
                c = null
            }
        },
        global: {},
        remove: function(a, c, e, f) {
            if (a.nodeType !== 3 && a.nodeType !== 8) {
                e === !1 && (e = x);
                var g,
                h,
                i,
                j,
                k = 0,
                l,
                m,
                n,
                o,
                p,
                q,
                r,
                s = d.hasData(a) && d._data(a),
                t = s && s.events;
                if (!s || !t) return;
                c && c.type && (e = c.handler, c = c.type);
                if (!c || typeof c === "string" && c.charAt(0) === ".") {
                    c = c || "";
                    for (h in t) d.event.remove(a, h + c);
                    return
                }
                c = c.split(" ");
                while (h = c[k++]) {
                    r = h,
                    q = null,
                    l = h.indexOf(".") < 0,
                    m = [],
                    l || (m = h.split("."), h = m.shift(), n = new RegExp("(^|\\.)" + d.map(m.slice(0).sort(), w).join("\\.(?:.*\\.)?") + "(\\.|$)")),
                    p = t[h];
                    if (!p) continue;
                    if (!e) {
                        for (j = 0; j < p.length; j++) {
                            q = p[j];
                            if (l || n.test(q.namespace)) d.event.remove(a, r, q.handler, j),
                            p.splice(j--, 1)
                        }
                        continue
                    }
                    o = d.event.special[h] || {};
                    for (j = f || 0; j < p.length; j++) {
                        q = p[j];
                        if (e.guid === q.guid) {
                            if (l || n.test(q.namespace)) f == null && p.splice(j--, 1),
                            o.remove && o.remove.call(a, q);
                            if (f != null) break
                        }
                    }
                    if (p.length === 0 || f != null && p.length === 1)(!o.teardown || o.teardown.call(a, m) === !1) && d.removeEvent(a, h, s.handle),
                    g = null,
                    delete t[h]
                }
                if (d.isEmptyObject(t)) {
                    var u = s.handle;
                    u && (u.elem = null),
                    delete s.events,
                    delete s.handle,
                    d.isEmptyObject(s) && d.removeData(a, b, !0)
                }
            }
        },
        trigger: function(a, c, e) {
            var f = a.type || a,
            g = arguments[3];
            if (!g) {
                a = typeof a === "object" ? a[d.expando] ? a: d.extend(d.Event(f), a) : d.Event(f),
                f.indexOf("!") >= 0 && (a.type = f = f.slice(0, -1), a.exclusive = !0),
                e || (a.stopPropagation(), d.event.global[f] && d.each(d.cache,
                function() {
                    var b = d.expando,
                    e = this[b];
                    e && e.events && e.events[f] && d.event.trigger(a, c, e.handle.elem)
                }));
                if (!e || e.nodeType === 3 || e.nodeType === 8) return b;
                a.result = b,
                a.target = e,
                c = d.makeArray(c),
                c.unshift(a)
            }
            a.currentTarget = e;
            var h = d._data(e, "handle");
            h && h.apply(e, c);
            var i = e.parentNode || e.ownerDocument;
            try {
                e && e.nodeName && d.noData[e.nodeName.toLowerCase()] || e["on" + f] && e["on" + f].apply(e, c) === !1 && (a.result = !1, a.preventDefault())
            } catch(j) {}
            if (!a.isPropagationStopped() && i) d.event.trigger(a, c, i, !0);
            else if (!a.isDefaultPrevented()) {
                var k,
                l = a.target,
                m = f.replace(r, ""),
                n = d.nodeName(l, "a") && m === "click",
                o = d.event.special[m] || {};
                if ((!o._default || o._default.call(e, a) === !1) && !n && !(l && l.nodeName && d.noData[l.nodeName.toLowerCase()])) {
                    try {
                        l[m] && (k = l["on" + m], k && (l["on" + m] = null), d.event.triggered = a.type, l[m]())
                    } catch(p) {}
                    k && (l["on" + m] = k),
                    d.event.triggered = b
                }
            }
        },
        handle: function(c) {
            var e,
            f,
            g,
            h,
            i,
            j = [],
            k = d.makeArray(arguments);
            c = k[0] = d.event.fix(c || a.event),
            c.currentTarget = this,
            e = c.type.indexOf(".") < 0 && !c.exclusive,
            e || (g = c.type.split("."), c.type = g.shift(), j = g.slice(0).sort(), h = new RegExp("(^|\\.)" + j.join("\\.(?:.*\\.)?") + "(\\.|$)")),
            c.namespace = c.namespace || j.join("."),
            i = d._data(this, "events"),
            f = (i || {})[c.type];
            if (i && f) {
                f = f.slice(0);
                for (var l = 0, m = f.length; l < m; l++) {
                    var n = f[l];
                    if (e || h.test(n.namespace)) {
                        c.handler = n.handler,
                        c.data = n.data,
                        c.handleObj = n;
                        var o = n.handler.apply(this, k);
                        o !== b && (c.result = o, o === !1 && (c.preventDefault(), c.stopPropagation()));
                        if (c.isImmediatePropagationStopped()) break
                    }
                }
            }
            return c.result
        },
        props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
        fix: function(a) {
            if (a[d.expando]) return a;
            var e = a;
            a = d.Event(e);
            for (var f = this.props.length, g; f;) g = this.props[--f],
            a[g] = e[g];
            a.target || (a.target = a.srcElement || c),
            a.target.nodeType === 3 && (a.target = a.target.parentNode),
            !a.relatedTarget && a.fromElement && (a.relatedTarget = a.fromElement === a.target ? a.toElement: a.fromElement);
            if (a.pageX == null && a.clientX != null) {
                var h = c.documentElement,
                i = c.body;
                a.pageX = a.clientX + (h && h.scrollLeft || i && i.scrollLeft || 0) - (h && h.clientLeft || i && i.clientLeft || 0),
                a.pageY = a.clientY + (h && h.scrollTop || i && i.scrollTop || 0) - (h && h.clientTop || i && i.clientTop || 0)
            }
            a.which == null && (a.charCode != null || a.keyCode != null) && (a.which = a.charCode != null ? a.charCode: a.keyCode),
            !a.metaKey && a.ctrlKey && (a.metaKey = a.ctrlKey),
            !a.which && a.button !== b && (a.which = a.button & 1 ? 1: a.button & 2 ? 3: a.button & 4 ? 2: 0);
            return a
        },
        guid: 1e8,
        proxy: d.proxy,
        special: {
            ready: {
                setup: d.bindReady,
                teardown: d.noop
            },
            live: {
                add: function(a) {
                    d.event.add(this, H(a.origType, a.selector), d.extend({},
                    a, {
                        handler: G,
                        guid: a.handler.guid
                    }))
                },
                remove: function(a) {
                    d.event.remove(this, H(a.origType, a.selector), a)
                }
            },
            beforeunload: {
                setup: function(a, b, c) {
                    d.isWindow(this) && (this.onbeforeunload = c)
                },
                teardown: function(a, b) {
                    this.onbeforeunload === b && (this.onbeforeunload = null)
                }
            }
        }
    },
    d.removeEvent = c.removeEventListener ?
    function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }: function(a, b, c) {
        a.detachEvent && a.detachEvent("on" + b, c)
    },
    d.Event = function(a) {
        if (!this.preventDefault) return new d.Event(a);
        a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? y: x) : this.type = a,
        this.timeStamp = d.now(),
        this[d.expando] = !0
    },
    d.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = y;
            var a = this.originalEvent;
            a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            this.isPropagationStopped = y;
            var a = this.originalEvent;
            a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = y,
            this.stopPropagation()
        },
        isDefaultPrevented: x,
        isPropagationStopped: x,
        isImmediatePropagationStopped: x
    };
    var z = function(a) {
        var b = a.relatedTarget;
        try {
            if (b && b !== c && !b.parentNode) return;
            while (b && b !== this) b = b.parentNode;
            b !== this && (a.type = a.data, d.event.handle.apply(this, arguments))
        } catch(e) {}
    },
    A = function(a) {
        a.type = a.data,
        d.event.handle.apply(this, arguments)
    };
    d.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    },
    function(a, b) {
        d.event.special[a] = {
            setup: function(c) {
                d.event.add(this, b, c && c.selector ? A: z, a)
            },
            teardown: function(a) {
                d.event.remove(this, b, a && a.selector ? A: z)
            }
        }
    }),
    d.support.submitBubbles || (d.event.special.submit = {
        setup: function(a, b) {
            if (this.nodeName && this.nodeName.toLowerCase() !== "form") d.event.add(this, "click.specialSubmit",
            function(a) {
                var b = a.target,
                c = b.type; (c === "submit" || c === "image") && d(b).closest("form").length && E("submit", this, arguments)
            }),
            d.event.add(this, "keypress.specialSubmit",
            function(a) {
                var b = a.target,
                c = b.type; (c === "text" || c === "password") && d(b).closest("form").length && a.keyCode === 13 && E("submit", this, arguments)
            });
            else return ! 1
        },
        teardown: function(a) {
            d.event.remove(this, ".specialSubmit")
        }
    });
    if (!d.support.changeBubbles) {
        var B,
        C = function(a) {
            var b = a.type,
            c = a.value;
            b === "radio" || b === "checkbox" ? c = a.checked: b === "select-multiple" ? c = a.selectedIndex > -1 ? d.map(a.options,
            function(a) {
                return a.selected
            }).join("-") : "": a.nodeName.toLowerCase() === "select" && (c = a.selectedIndex);
            return c
        },
        D = function D(a) {
            var c = a.target,
            e,
            f;
            if (s.test(c.nodeName) && !c.readOnly) {
                e = d._data(c, "_change_data"),
                f = C(c),
                (a.type !== "focusout" || c.type !== "radio") && d._data(c, "_change_data", f);
                if (e === b || f === e) return;
                if (e != null || f) a.type = "change",
                a.liveFired = b,
                d.event.trigger(a, arguments[1], c)
            }
        };
        d.event.special.change = {
            filters: {
                focusout: D,
                beforedeactivate: D,
                click: function(a) {
                    var b = a.target,
                    c = b.type; (c === "radio" || c === "checkbox" || b.nodeName.toLowerCase() === "select") && D.call(this, a)
                },
                keydown: function(a) {
                    var b = a.target,
                    c = b.type; (a.keyCode === 13 && b.nodeName.toLowerCase() !== "textarea" || a.keyCode === 32 && (c === "checkbox" || c === "radio") || c === "select-multiple") && D.call(this, a)
                },
                beforeactivate: function(a) {
                    var b = a.target;
                    d._data(b, "_change_data", C(b))
                }
            },
            setup: function(a, b) {
                if (this.type === "file") return ! 1;
                for (var c in B) d.event.add(this, c + ".specialChange", B[c]);
                return s.test(this.nodeName)
            },
            teardown: function(a) {
                d.event.remove(this, ".specialChange");
                return s.test(this.nodeName)
            }
        },
        B = d.event.special.change.filters,
        B.focus = B.beforeactivate
    }
    c.addEventListener && d.each({
        focus: "focusin",
        blur: "focusout"
    },
    function(a, b) {
        function f(a) {
            var c = d.event.fix(a);
            c.type = b,
            c.originalEvent = {},
            d.event.trigger(c, null, c.target),
            c.isDefaultPrevented() && a.preventDefault()
        }
        var e = 0;
        d.event.special[b] = {
            setup: function() {
                e++===0 && c.addEventListener(a, f, !0)
            },
            teardown: function() {--e === 0 && c.removeEventListener(a, f, !0)
            }
        }
    }),
    d.each(["bind", "one"],
    function(a, c) {
        d.fn[c] = function(a, e, f) {
            if (typeof a === "object") {
                for (var g in a) this[c](g, e, a[g], f);
                return this
            }
            if (d.isFunction(e) || e === !1) f = e,
            e = b;
            var h = c === "one" ? d.proxy(f,
            function(a) {
                d(this).unbind(a, h);
                return f.apply(this, arguments)
            }) : f;
            if (a === "unload" && c !== "one") this.one(a, e, f);
            else for (var i = 0, j = this.length; i < j; i++) d.event.add(this[i], a, h, e);
            return this
        }
    }),
    d.fn.extend({
        unbind: function(a, b) {
            if (typeof a !== "object" || a.preventDefault) for (var e = 0, f = this.length; e < f; e++) d.event.remove(this[e], a, b);
            else for (var c in a) this.unbind(c, a[c]);
            return this
        },
        delegate: function(a, b, c, d) {
            return this.live(b, c, d, a)
        },
        undelegate: function(a, b, c) {
            return arguments.length === 0 ? this.unbind("live") : this.die(b, null, c, a)
        },
        trigger: function(a, b) {
            return this.each(function() {
                d.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            if (this[0]) {
                var c = d.Event(a);
                c.preventDefault(),
                c.stopPropagation(),
                d.event.trigger(c, b, this[0]);
                return c.result
            }
        },
        toggle: function(a) {
            var b = arguments,
            c = 1;
            while (c < b.length) d.proxy(a, b[c++]);
            return this.click(d.proxy(a,
            function(e) {
                var f = (d._data(this, "lastToggle" + a.guid) || 0) % c;
                d._data(this, "lastToggle" + a.guid, f + 1),
                e.preventDefault();
                return b[f].apply(this, arguments) || !1
            }))
        },
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    });
    var F = {
        focus: "focusin",
        blur: "focusout",
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    };
    d.each(["live", "die"],
    function(a, c) {
        d.fn[c] = function(a, e, f, g) {
            var h,
            i = 0,
            j,
            k,
            l,
            m = g || this.selector,
            n = g ? this: d(this.context);
            if (typeof a === "object" && !a.preventDefault) {
                for (var o in a) n[c](o, e, a[o], m);
                return this
            }
            d.isFunction(e) && (f = e, e = b),
            a = (a || "").split(" ");
            while ((h = a[i++]) != null) {
                j = r.exec(h),
                k = "",
                j && (k = j[0], h = h.replace(r, ""));
                if (h === "hover") {
                    a.push("mouseenter" + k, "mouseleave" + k);
                    continue
                }
                l = h,
                h === "focus" || h === "blur" ? (a.push(F[h] + k), h = h + k) : h = (F[h] || h) + k;
                if (c === "live") for (var p = 0, q = n.length; p < q; p++) d.event.add(n[p], "live." + H(h, m), {
                    data: e,
                    selector: m,
                    handler: f,
                    origType: h,
                    origHandler: f,
                    preType: l
                });
                else n.unbind("live." + H(h, m), f)
            }
            return this
        }
    }),
    d.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),
    function(a, b) {
        d.fn[b] = function(a, c) {
            c == null && (c = a, a = null);
            return arguments.length > 0 ? this.bind(b, a, c) : this.trigger(b)
        },
        d.attrFn && (d.attrFn[b] = !0)
    }),
    function() {
        function u(a, b, c, d, e, f) {
            for (var g = 0, h = d.length; g < h; g++) {
                var i = d[g];
                if (i) {
                    var j = !1;
                    i = i[a];
                    while (i) {
                        if (i.sizcache === c) {
                            j = d[i.sizset];
                            break
                        }
                        if (i.nodeType === 1) {
                            f || (i.sizcache = c, i.sizset = g);
                            if (typeof b !== "string") {
                                if (i === b) {
                                    j = !0;
                                    break
                                }
                            } else if (k.filter(b, [i]).length > 0) {
                                j = i;
                                break
                            }
                        }
                        i = i[a]
                    }
                    d[g] = j
                }
            }
        }
        function t(a, b, c, d, e, f) {
            for (var g = 0, h = d.length; g < h; g++) {
                var i = d[g];
                if (i) {
                    var j = !1;
                    i = i[a];
                    while (i) {
                        if (i.sizcache === c) {
                            j = d[i.sizset];
                            break
                        }
                        i.nodeType === 1 && !f && (i.sizcache = c, i.sizset = g);
                        if (i.nodeName.toLowerCase() === b) {
                            j = i;
                            break
                        }
                        i = i[a]
                    }
                    d[g] = j
                }
            }
        }
        var a = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
        e = 0,
        f = Object.prototype.toString,
        g = !1,
        h = !0,
        i = /\\/g,
        j = /\W/; [0, 0].sort(function() {
            h = !1;
            return 0
        });
        var k = function(b, d, e, g) {
            e = e || [],
            d = d || c;
            var h = d;
            if (d.nodeType !== 1 && d.nodeType !== 9) return [];
            if (!b || typeof b !== "string") return e;
            var i,
            j,
            n,
            o,
            q,
            r,
            s,
            t,
            u = !0,
            w = k.isXML(d),
            x = [],
            y = b;
            do {
                a.exec(""),
                i = a.exec(y);
                if (i) {
                    y = i[3],
                    x.push(i[1]);
                    if (i[2]) {
                        o = i[3];
                        break
                    }
                }
            }
            while (i);
            if (x.length > 1 && m.exec(b)) if (x.length === 2 && l.relative[x[0]]) j = v(x[0] + x[1], d);
            else {
                j = l.relative[x[0]] ? [d] : k(x.shift(), d);
                while (x.length) b = x.shift(),
                l.relative[b] && (b += x.shift()),
                j = v(b, j)
            } else { ! g && x.length > 1 && d.nodeType === 9 && !w && l.match.ID.test(x[0]) && !l.match.ID.test(x[x.length - 1]) && (q = k.find(x.shift(), d, w), d = q.expr ? k.filter(q.expr, q.set)[0] : q.set[0]);
                if (d) {
                    q = g ? {
                        expr: x.pop(),
                        set: p(g)
                    }: k.find(x.pop(), x.length === 1 && (x[0] === "~" || x[0] === "+") && d.parentNode ? d.parentNode: d, w),
                    j = q.expr ? k.filter(q.expr, q.set) : q.set,
                    x.length > 0 ? n = p(j) : u = !1;
                    while (x.length) r = x.pop(),
                    s = r,
                    l.relative[r] ? s = x.pop() : r = "",
                    s == null && (s = d),
                    l.relative[r](n, s, w)
                } else n = x = []
            }
            n || (n = j),
            n || k.error(r || b);
            if (f.call(n) === "[object Array]") if (u) if (d && d.nodeType === 1) for (t = 0; n[t] != null; t++) n[t] && (n[t] === !0 || n[t].nodeType === 1 && k.contains(d, n[t])) && e.push(j[t]);
            else for (t = 0; n[t] != null; t++) n[t] && n[t].nodeType === 1 && e.push(j[t]);
            else e.push.apply(e, n);
            else p(n, e);
            o && (k(o, h, e, g), k.uniqueSort(e));
            return e
        };
        k.uniqueSort = function(a) {
            if (r) {
                g = h,
                a.sort(r);
                if (g) for (var b = 1; b < a.length; b++) a[b] === a[b - 1] && a.splice(b--, 1)
            }
            return a
        },
        k.matches = function(a, b) {
            return k(a, null, null, b)
        },
        k.matchesSelector = function(a, b) {
            return k(b, null, null, [a]).length > 0
        },
        k.find = function(a, b, c) {
            var d;
            if (!a) return [];
            for (var e = 0, f = l.order.length; e < f; e++) {
                var g,
                h = l.order[e];
                if (g = l.leftMatch[h].exec(a)) {
                    var j = g[1];
                    g.splice(1, 1);
                    if (j.substr(j.length - 1) !== "\\") {
                        g[1] = (g[1] || "").replace(i, ""),
                        d = l.find[h](g, b, c);
                        if (d != null) {
                            a = a.replace(l.match[h], "");
                            break
                        }
                    }
                }
            }
            d || (d = typeof b.getElementsByTagName !== "undefined" ? b.getElementsByTagName("*") : []);
            return {
                set: d,
                expr: a
            }
        },
        k.filter = function(a, c, d, e) {
            var f,
            g,
            h = a,
            i = [],
            j = c,
            m = c && c[0] && k.isXML(c[0]);
            while (a && c.length) {
                for (var n in l.filter) if ((f = l.leftMatch[n].exec(a)) != null && f[2]) {
                    var o,
                    p,
                    q = l.filter[n],
                    r = f[1];
                    g = !1,
                    f.splice(1, 1);
                    if (r.substr(r.length - 1) === "\\") continue;
                    j === i && (i = []);
                    if (l.preFilter[n]) {
                        f = l.preFilter[n](f, j, d, i, e, m);
                        if (f) {
                            if (f === !0) continue
                        } else g = o = !0
                    }
                    if (f) for (var s = 0; (p = j[s]) != null; s++) if (p) {
                        o = q(p, f, s, j);
                        var t = e ^ !!o;
                        d && o != null ? t ? g = !0: j[s] = !1: t && (i.push(p), g = !0)
                    }
                    if (o !== b) {
                        d || (j = i),
                        a = a.replace(l.match[n], "");
                        if (!g) return [];
                        break
                    }
                }
                if (a === h) if (g == null) k.error(a);
                else break;
                h = a
            }
            return j
        },
        k.error = function(a) {
            throw "Syntax error, unrecognized expression: " + a
        };
        var l = k.selectors = {
            order: ["ID", "NAME", "TAG"],
            match: {
                ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
            },
            leftMatch: {},
            attrMap: {
                "class": "className",
                "for": "htmlFor"
            },
            attrHandle: {
                href: function(a) {
                    return a.getAttribute("href")
                },
                type: function(a) {
                    return a.getAttribute("type")
                }
            },
            relative: {
                "+": function(a, b) {
                    var c = typeof b === "string",
                    d = c && !j.test(b),
                    e = c && !d;
                    d && (b = b.toLowerCase());
                    for (var f = 0, g = a.length, h; f < g; f++) if (h = a[f]) {
                        while ((h = h.previousSibling) && h.nodeType !== 1) {}
                        a[f] = e || h && h.nodeName.toLowerCase() === b ? h || !1: h === b
                    }
                    e && k.filter(b, a, !0)
                },
                ">": function(a, b) {
                    var c,
                    d = typeof b === "string",
                    e = 0,
                    f = a.length;
                    if (d && !j.test(b)) {
                        b = b.toLowerCase();
                        for (; e < f; e++) {
                            c = a[e];
                            if (c) {
                                var g = c.parentNode;
                                a[e] = g.nodeName.toLowerCase() === b ? g: !1
                            }
                        }
                    } else {
                        for (; e < f; e++) c = a[e],
                        c && (a[e] = d ? c.parentNode: c.parentNode === b);
                        d && k.filter(b, a, !0)
                    }
                },
                "": function(a, b, c) {
                    var d,
                    f = e++,
                    g = u;
                    typeof b === "string" && !j.test(b) && (b = b.toLowerCase(), d = b, g = t),
                    g("parentNode", b, f, a, d, c)
                },
                "~": function(a, b, c) {
                    var d,
                    f = e++,
                    g = u;
                    typeof b === "string" && !j.test(b) && (b = b.toLowerCase(), d = b, g = t),
                    g("previousSibling", b, f, a, d, c)
                }
            },
            find: {
                ID: function(a, b, c) {
                    if (typeof b.getElementById !== "undefined" && !c) {
                        var d = b.getElementById(a[1]);
                        return d && d.parentNode ? [d] : []
                    }
                },
                NAME: function(a, b) {
                    if (typeof b.getElementsByName !== "undefined") {
                        var c = [],
                        d = b.getElementsByName(a[1]);
                        for (var e = 0, f = d.length; e < f; e++) d[e].getAttribute("name") === a[1] && c.push(d[e]);
                        return c.length === 0 ? null: c
                    }
                },
                TAG: function(a, b) {
                    if (typeof b.getElementsByTagName !== "undefined") return b.getElementsByTagName(a[1])
                }
            },
            preFilter: {
                CLASS: function(a, b, c, d, e, f) {
                    a = " " + a[1].replace(i, "") + " ";
                    if (f) return a;
                    for (var g = 0, h; (h = b[g]) != null; g++) h && (e ^ (h.className && (" " + h.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? c || d.push(h) : c && (b[g] = !1));
                    return ! 1
                },
                ID: function(a) {
                    return a[1].replace(i, "")
                },
                TAG: function(a, b) {
                    return a[1].replace(i, "").toLowerCase()
                },
                CHILD: function(a) {
                    if (a[1] === "nth") {
                        a[2] || k.error(a[0]),
                        a[2] = a[2].replace(/^\+|\s*/g, "");
                        var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2] === "even" && "2n" || a[2] === "odd" && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
                        a[2] = b[1] + (b[2] || 1) - 0,
                        a[3] = b[3] - 0
                    } else a[2] && k.error(a[0]);
                    a[0] = e++;
                    return a
                },
                ATTR: function(a, b, c, d, e, f) {
                    var g = a[1] = a[1].replace(i, ""); ! f && l.attrMap[g] && (a[1] = l.attrMap[g]),
                    a[4] = (a[4] || a[5] || "").replace(i, ""),
                    a[2] === "~=" && (a[4] = " " + a[4] + " ");
                    return a
                },
                PSEUDO: function(b, c, d, e, f) {
                    if (b[1] === "not") if ((a.exec(b[3]) || "").length > 1 || /^\w/.test(b[3])) b[3] = k(b[3], null, null, c);
                    else {
                        var g = k.filter(b[3], c, d, !0 ^ f);
                        d || e.push.apply(e, g);
                        return ! 1
                    } else if (l.match.POS.test(b[0]) || l.match.CHILD.test(b[0])) return ! 0;
                    return b
                },
                POS: function(a) {
                    a.unshift(!0);
                    return a
                }
            },
            filters: {
                enabled: function(a) {
                    return a.disabled === !1 && a.type !== "hidden"
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    return a.checked === !0
                },
                selected: function(a) {
                    a.parentNode && a.parentNode.selectedIndex;
                    return a.selected === !0
                },
                parent: function(a) {
                    return !! a.firstChild
                },
                empty: function(a) {
                    return ! a.firstChild
                },
                has: function(a, b, c) {
                    return !! k(c[3], a).length
                },
                header: function(a) {
                    return /h\d/i.test(a.nodeName)
                },
                text: function(a) {
                    var b = a.getAttribute("type"),
                    c = a.type;
                    return "text" === c && (b === c || b === null)
                },
                radio: function(a) {
                    return "radio" === a.type
                },
                checkbox: function(a) {
                    return "checkbox" === a.type
                },
                file: function(a) {
                    return "file" === a.type
                },
                password: function(a) {
                    return "password" === a.type
                },
                submit: function(a) {
                    return "submit" === a.type
                },
                image: function(a) {
                    return "image" === a.type
                },
                reset: function(a) {
                    return "reset" === a.type
                },
                button: function(a) {
                    return "button" === a.type || a.nodeName.toLowerCase() === "button"
                },
                input: function(a) {
                    return /input|select|textarea|button/i.test(a.nodeName)
                }
            },
            setFilters: {
                first: function(a, b) {
                    return b === 0
                },
                last: function(a, b, c, d) {
                    return b === d.length - 1
                },
                even: function(a, b) {
                    return b % 2 === 0
                },
                odd: function(a, b) {
                    return b % 2 === 1
                },
                lt: function(a, b, c) {
                    return b < c[3] - 0
                },
                gt: function(a, b, c) {
                    return b > c[3] - 0
                },
                nth: function(a, b, c) {
                    return c[3] - 0 === b
                },
                eq: function(a, b, c) {
                    return c[3] - 0 === b
                }
            },
            filter: {
                PSEUDO: function(a, b, c, d) {
                    var e = b[1],
                    f = l.filters[e];
                    if (f) return f(a, c, b, d);
                    if (e === "contains") return (a.textContent || a.innerText || k.getText([a]) || "").indexOf(b[3]) >= 0;
                    if (e === "not") {
                        var g = b[3];
                        for (var h = 0, i = g.length; h < i; h++) if (g[h] === a) return ! 1;
                        return ! 0
                    }
                    k.error(e)
                },
                CHILD: function(a, b) {
                    var c = b[1],
                    d = a;
                    switch (c) {
                    case "only":
                    case "first":
                        while (d = d.previousSibling) if (d.nodeType === 1) return ! 1;
                        if (c === "first") return ! 0;
                        d = a;
                    case "last":
                        while (d = d.nextSibling) if (d.nodeType === 1) return ! 1;
                        return ! 0;
                    case "nth":
                        var e = b[2],
                        f = b[3];
                        if (e === 1 && f === 0) return ! 0;
                        var g = b[0],
                        h = a.parentNode;
                        if (h && (h.sizcache !== g || !a.nodeIndex)) {
                            var i = 0;
                            for (d = h.firstChild; d; d = d.nextSibling) d.nodeType === 1 && (d.nodeIndex = ++i);
                            h.sizcache = g
                        }
                        var j = a.nodeIndex - f;
                        return e === 0 ? j === 0: j % e === 0 && j / e >= 0
                    }
                },
                ID: function(a, b) {
                    return a.nodeType === 1 && a.getAttribute("id") === b
                },
                TAG: function(a, b) {
                    return b === "*" && a.nodeType === 1 || a.nodeName.toLowerCase() === b
                },
                CLASS: function(a, b) {
                    return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
                },
                ATTR: function(a, b) {
                    var c = b[1],
                    d = l.attrHandle[c] ? l.attrHandle[c](a) : a[c] != null ? a[c] : a.getAttribute(c),
                    e = d + "",
                    f = b[2],
                    g = b[4];
                    return d == null ? f === "!=": f === "=" ? e === g: f === "*=" ? e.indexOf(g) >= 0: f === "~=" ? (" " + e + " ").indexOf(g) >= 0: g ? f === "!=" ? e !== g: f === "^=" ? e.indexOf(g) === 0: f === "$=" ? e.substr(e.length - g.length) === g: f === "|=" ? e === g || e.substr(0, g.length + 1) === g + "-": !1: e && d !== !1
                },
                POS: function(a, b, c, d) {
                    var e = b[2],
                    f = l.setFilters[e];
                    if (f) return f(a, c, b, d)
                }
            }
        },
        m = l.match.POS,
        n = function(a, b) {
            return "\\" + (b - 0 + 1)
        };
        for (var o in l.match) l.match[o] = new RegExp(l.match[o].source + /(?![^\[]*\])(?![^\(]*\))/.source),
        l.leftMatch[o] = new RegExp(/(^(?:.|\r|\n)*?)/.source + l.match[o].source.replace(/\\(\d+)/g, n));
        var p = function(a, b) {
            a = Array.prototype.slice.call(a, 0);
            if (b) {
                b.push.apply(b, a);
                return b
            }
            return a
        };
        try {
            Array.prototype.slice.call(c.documentElement.childNodes, 0)[0].nodeType
        } catch(q) {
            p = function(a, b) {
                var c = 0,
                d = b || [];
                if (f.call(a) === "[object Array]") Array.prototype.push.apply(d, a);
                else if (typeof a.length === "number") for (var e = a.length; c < e; c++) d.push(a[c]);
                else for (; a[c]; c++) d.push(a[c]);
                return d
            }
        }
        var r,
        s;
        c.documentElement.compareDocumentPosition ? r = function(a, b) {
            if (a === b) {
                g = !0;
                return 0
            }
            if (!a.compareDocumentPosition || !b.compareDocumentPosition) return a.compareDocumentPosition ? -1: 1;
            return a.compareDocumentPosition(b) & 4 ? -1: 1
        }: (r = function(a, b) {
            var c,
            d,
            e = [],
            f = [],
            h = a.parentNode,
            i = b.parentNode,
            j = h;
            if (a === b) {
                g = !0;
                return 0
            }
            if (h === i) return s(a, b);
            if (!h) return - 1;
            if (!i) return 1;
            while (j) e.unshift(j),
            j = j.parentNode;
            j = i;
            while (j) f.unshift(j),
            j = j.parentNode;
            c = e.length,
            d = f.length;
            for (var k = 0; k < c && k < d; k++) if (e[k] !== f[k]) return s(e[k], f[k]);
            return k === c ? s(a, f[k], -1) : s(e[k], b, 1)
        },
        s = function(a, b, c) {
            if (a === b) return c;
            var d = a.nextSibling;
            while (d) {
                if (d === b) return - 1;
                d = d.nextSibling
            }
            return 1
        }),
        k.getText = function(a) {
            var b = "",
            c;
            for (var d = 0; a[d]; d++) c = a[d],
            c.nodeType === 3 || c.nodeType === 4 ? b += c.nodeValue: c.nodeType !== 8 && (b += k.getText(c.childNodes));
            return b
        },
        function() {
            var a = c.createElement("div"),
            d = "script" + (new Date).getTime(),
            e = c.documentElement;
            a.innerHTML = "<a name='" + d + "'/>",
            e.insertBefore(a, e.firstChild),
            c.getElementById(d) && (l.find.ID = function(a, c, d) {
                if (typeof c.getElementById !== "undefined" && !d) {
                    var e = c.getElementById(a[1]);
                    return e ? e.id === a[1] || typeof e.getAttributeNode !== "undefined" && e.getAttributeNode("id").nodeValue === a[1] ? [e] : b: []
                }
            },
            l.filter.ID = function(a, b) {
                var c = typeof a.getAttributeNode !== "undefined" && a.getAttributeNode("id");
                return a.nodeType === 1 && c && c.nodeValue === b
            }),
            e.removeChild(a),
            e = a = null
        } (),
        function() {
            var a = c.createElement("div");
            a.appendChild(c.createComment("")),
            a.getElementsByTagName("*").length > 0 && (l.find.TAG = function(a, b) {
                var c = b.getElementsByTagName(a[1]);
                if (a[1] === "*") {
                    var d = [];
                    for (var e = 0; c[e]; e++) c[e].nodeType === 1 && d.push(c[e]);
                    c = d
                }
                return c
            }),
            a.innerHTML = "<a href='#'></a>",
            a.firstChild && typeof a.firstChild.getAttribute !== "undefined" && a.firstChild.getAttribute("href") !== "#" && (l.attrHandle.href = function(a) {
                return a.getAttribute("href", 2)
            }),
            a = null
        } (),
        c.querySelectorAll &&
        function() {
            var a = k,
            b = c.createElement("div"),
            d = "__sizzle__";
            b.innerHTML = "<p class='TEST'></p>";
            if (!b.querySelectorAll || b.querySelectorAll(".TEST").length !== 0) {
                k = function(b, e, f, g) {
                    e = e || c;
                    if (!g && !k.isXML(e)) {
                        var h = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
                        if (h && (e.nodeType === 1 || e.nodeType === 9)) {
                            if (h[1]) return p(e.getElementsByTagName(b), f);
                            if (h[2] && l.find.CLASS && e.getElementsByClassName) return p(e.getElementsByClassName(h[2]), f)
                        }
                        if (e.nodeType === 9) {
                            if (b === "body" && e.body) return p([e.body], f);
                            if (h && h[3]) {
                                var i = e.getElementById(h[3]);
                                if (!i || !i.parentNode) return p([], f);
                                if (i.id === h[3]) return p([i], f)
                            }
                            try {
                                return p(e.querySelectorAll(b), f)
                            } catch(j) {}
                        } else if (e.nodeType === 1 && e.nodeName.toLowerCase() !== "object") {
                            var m = e,
                            n = e.getAttribute("id"),
                            o = n || d,
                            q = e.parentNode,
                            r = /^\s*[+~]/.test(b);
                            n ? o = o.replace(/'/g, "\\$&") : e.setAttribute("id", o),
                            r && q && (e = e.parentNode);
                            try {
                                if (!r || q) return p(e.querySelectorAll("[id='" + o + "'] " + b), f)
                            } catch(s) {} finally {
                                n || m.removeAttribute("id")
                            }
                        }
                    }
                    return a(b, e, f, g)
                };
                for (var e in a) k[e] = a[e];
                b = null
            }
        } (),
        function() {
            var a = c.documentElement,
            b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
            if (b) {
                var d = !b.call(c.createElement("div"), "div"),
                e = !1;
                try {
                    b.call(c.documentElement, "[test!='']:sizzle")
                } catch(f) {
                    e = !0
                }
                k.matchesSelector = function(a, c) {
                    c = c.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                    if (!k.isXML(a)) try {
                        if (e || !l.match.PSEUDO.test(c) && !/!=/.test(c)) {
                            var f = b.call(a, c);
                            if (f || !d || a.document && a.document.nodeType !== 11) return f
                        }
                    } catch(g) {}
                    return k(c, null, null, [a]).length > 0
                }
            }
        } (),
        function() {
            var a = c.createElement("div");
            a.innerHTML = "<div class='test e'></div><div class='test'></div>";
            if (a.getElementsByClassName && a.getElementsByClassName("e").length !== 0) {
                a.lastChild.className = "e";
                if (a.getElementsByClassName("e").length === 1) return;
                l.order.splice(1, 0, "CLASS"),
                l.find.CLASS = function(a, b, c) {
                    if (typeof b.getElementsByClassName !== "undefined" && !c) return b.getElementsByClassName(a[1])
                },
                a = null
            }
        } (),
        c.documentElement.contains ? k.contains = function(a, b) {
            return a !== b && (a.contains ? a.contains(b) : !0)
        }: c.documentElement.compareDocumentPosition ? k.contains = function(a, b) {
            return !! (a.compareDocumentPosition(b) & 16)
        }: k.contains = function() {
            return ! 1
        },
        k.isXML = function(a) {
            var b = (a ? a.ownerDocument || a: 0).documentElement;
            return b ? b.nodeName !== "HTML": !1
        };
        var v = function(a, b) {
            var c,
            d = [],
            e = "",
            f = b.nodeType ? [b] : b;
            while (c = l.match.PSEUDO.exec(a)) e += c[0],
            a = a.replace(l.match.PSEUDO, "");
            a = l.relative[a] ? a + "*": a;
            for (var g = 0, h = f.length; g < h; g++) k(a, f[g], d);
            return k.filter(e, d)
        };
        d.find = k,
        d.expr = k.selectors,
        d.expr[":"] = d.expr.filters,
        d.unique = k.uniqueSort,
        d.text = k.getText,
        d.isXMLDoc = k.isXML,
        d.contains = k.contains
    } ();
    var I = /Until$/,
    J = /^(?:parents|prevUntil|prevAll)/,
    K = /,/,
    L = /^.[^:#\[\.,]*$/,
    M = Array.prototype.slice,
    N = d.expr.match.POS,
    O = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    d.fn.extend({
        find: function(a) {
            var b = this.pushStack("", "find", a),
            c = 0;
            for (var e = 0, f = this.length; e < f; e++) {
                c = b.length,
                d.find(a, this[e], b);
                if (e > 0) for (var g = c; g < b.length; g++) for (var h = 0; h < c; h++) if (b[h] === b[g]) {
                    b.splice(g--, 1);
                    break
                }
            }
            return b
        },
        has: function(a) {
            var b = d(a);
            return this.filter(function() {
                for (var a = 0, c = b.length; a < c; a++) if (d.contains(this, b[a])) return ! 0
            })
        },
        not: function(a) {
            return this.pushStack(Q(this, a, !1), "not", a)
        },
        filter: function(a) {
            return this.pushStack(Q(this, a, !0), "filter", a)
        },
        is: function(a) {
            return !! a && d.filter(a, this).length > 0
        },
        closest: function(a, b) {
            var c = [],
            e,
            f,
            g = this[0];
            if (d.isArray(a)) {
                var h,
                i,
                j = {},
                k = 1;
                if (g && a.length) {
                    for (e = 0, f = a.length; e < f; e++) i = a[e],
                    j[i] || (j[i] = d.expr.match.POS.test(i) ? d(i, b || this.context) : i);
                    while (g && g.ownerDocument && g !== b) {
                        for (i in j) h = j[i],
                        (h.jquery ? h.index(g) > -1: d(g).is(h)) && c.push({
                            selector: i,
                            elem: g,
                            level: k
                        });
                        g = g.parentNode,
                        k++
                    }
                }
                return c
            }
            var l = N.test(a) ? d(a, b || this.context) : null;
            for (e = 0, f = this.length; e < f; e++) {
                g = this[e];
                while (g) {
                    if (l ? l.index(g) > -1: d.find.matchesSelector(g, a)) {
                        c.push(g);
                        break
                    }
                    g = g.parentNode;
                    if (!g || !g.ownerDocument || g === b) break
                }
            }
            c = c.length > 1 ? d.unique(c) : c;
            return this.pushStack(c, "closest", a)
        },
        index: function(a) {
            if (!a || typeof a === "string") return d.inArray(this[0], a ? d(a) : this.parent().children());
            return d.inArray(a.jquery ? a[0] : a, this)
        },
        add: function(a, b) {
            var c = typeof a === "string" ? d(a, b) : d.makeArray(a),
            e = d.merge(this.get(), c);
            return this.pushStack(P(c[0]) || P(e[0]) ? e: d.unique(e))
        },
        andSelf: function() {
            return this.add(this.prevObject)
        }
    }),
    d.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && b.nodeType !== 11 ? b: null
        },
        parents: function(a) {
            return d.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return d.dir(a, "parentNode", c)
        },
        next: function(a) {
            return d.nth(a, 2, "nextSibling")
        },
        prev: function(a) {
            return d.nth(a, 2, "previousSibling")
        },
        nextAll: function(a) {
            return d.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return d.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return d.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return d.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return d.sibling(a.parentNode.firstChild, a)
        },
        children: function(a) {
            return d.sibling(a.firstChild)
        },
        contents: function(a) {
            return d.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document: d.makeArray(a.childNodes)
        }
    },
    function(a, b) {
        d.fn[a] = function(c, e) {
            var f = d.map(this, b, c),
            g = M.call(arguments);
            I.test(a) || (e = c),
            e && typeof e === "string" && (f = d.filter(e, f)),
            f = this.length > 1 && !O[a] ? d.unique(f) : f,
            (this.length > 1 || K.test(e)) && J.test(a) && (f = f.reverse());
            return this.pushStack(f, a, g.join(","))
        }
    }),
    d.extend({
        filter: function(a, b, c) {
            c && (a = ":not(" + a + ")");
            return b.length === 1 ? d.find.matchesSelector(b[0], a) ? [b[0]] : [] : d.find.matches(a, b)
        },
        dir: function(a, c, e) {
            var f = [],
            g = a[c];
            while (g && g.nodeType !== 9 && (e === b || g.nodeType !== 1 || !d(g).is(e))) g.nodeType === 1 && f.push(g),
            g = g[c];
            return f
        },
        nth: function(a, b, c, d) {
            b = b || 1;
            var e = 0;
            for (; a; a = a[c]) if (a.nodeType === 1 && ++e === b) break;
            return a
        },
        sibling: function(a, b) {
            var c = [];
            for (; a; a = a.nextSibling) a.nodeType === 1 && a !== b && c.push(a);
            return c
        }
    });
    var R = / jQuery\d+="(?:\d+|null)"/g,
    S = /^\s+/,
    T = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
    U = /<([\w:]+)/,
    V = /<tbody/i,
    W = /<|&#?\w+;/,
    X = /<(?:script|object|embed|option|style)/i,
    Y = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Z = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        area: [1, "<map>", "</map>"],
        _default: [0, "", ""]
    };
    Z.optgroup = Z.option,
    Z.tbody = Z.tfoot = Z.colgroup = Z.caption = Z.thead,
    Z.th = Z.td,
    d.support.htmlSerialize || (Z._default = [1, "div<div>", "</div>"]),
    d.fn.extend({
        text: function(a) {
            if (d.isFunction(a)) return this.each(function(b) {
                var c = d(this);
                c.text(a.call(this, b, c.text()))
            });
            if (typeof a !== "object" && a !== b) return this.empty().append((this[0] && this[0].ownerDocument || c).createTextNode(a));
            return d.text(this)
        },
        wrapAll: function(a) {
            if (d.isFunction(a)) return this.each(function(b) {
                d(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = d(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]),
                b.map(function() {
                    var a = this;
                    while (a.firstChild && a.firstChild.nodeType === 1) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            if (d.isFunction(a)) return this.each(function(b) {
                d(this).wrapInner(a.call(this, b))
            });
            return this.each(function() {
                var b = d(this),
                c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            return this.each(function() {
                d(this).wrapAll(a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                d.nodeName(this, "body") || d(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0,
            function(a) {
                this.nodeType === 1 && this.appendChild(a)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0,
            function(a) {
                this.nodeType === 1 && this.insertBefore(a, this.firstChild)
            })
        },
        before: function() {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1,
            function(a) {
                this.parentNode.insertBefore(a, this)
            });
            if (arguments.length) {
                var a = d(arguments[0]);
                a.push.apply(a, this.toArray());
                return this.pushStack(a, "before", arguments)
            }
        },
        after: function() {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1,
            function(a) {
                this.parentNode.insertBefore(a, this.nextSibling)
            });
            if (arguments.length) {
                var a = this.pushStack(this, "after", arguments);
                a.push.apply(a, d(arguments[0]).toArray());
                return a
            }
        },
        remove: function(a, b) {
            for (var c = 0, e; (e = this[c]) != null; c++) if (!a || d.filter(a, [e]).length) ! b && e.nodeType === 1 && (d.cleanData(e.getElementsByTagName("*")), d.cleanData([e])),
            e.parentNode && e.parentNode.removeChild(e);
            return this
        },
        empty: function() {
            for (var a = 0, b; (b = this[a]) != null; a++) {
                b.nodeType === 1 && d.cleanData(b.getElementsByTagName("*"));
                while (b.firstChild) b.removeChild(b.firstChild)
            }
            return this
        },
        clone: function(a, b) {
            a = a == null ? !1: a,
            b = b == null ? a: b;
            return this.map(function() {
                return d.clone(this, a, b)
            })
        },
        html: function(a) {
            if (a === b) return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(R, "") : null;
            if (typeof a !== "string" || X.test(a) || !d.support.leadingWhitespace && S.test(a) || Z[(U.exec(a) || ["", ""])[1].toLowerCase()]) d.isFunction(a) ? this.each(function(b) {
                var c = d(this);
                c.html(a.call(this, b, c.html()))
            }) : this.empty().append(a);
            else {
                a = a.replace(T, "<$1></$2>");
                try {
                    for (var c = 0, e = this.length; c < e; c++) this[c].nodeType === 1 && (d.cleanData(this[c].getElementsByTagName("*")), this[c].innerHTML = a)
                } catch(f) {
                    this.empty().append(a)
                }
            }
            return this
        },
        replaceWith: function(a) {
            if (this[0] && this[0].parentNode) {
                if (d.isFunction(a)) return this.each(function(b) {
                    var c = d(this),
                    e = c.html();
                    c.replaceWith(a.call(this, b, e))
                });
                typeof a !== "string" && (a = d(a).detach());
                return this.each(function() {
                    var b = this.nextSibling,
                    c = this.parentNode;
                    d(this).remove(),
                    b ? d(b).before(a) : d(c).append(a)
                })
            }
            return this.length ? this.pushStack(d(d.isFunction(a) ? a() : a), "replaceWith", a) : this
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, c, e) {
            var f,
            g,
            h,
            i,
            j = a[0],
            k = [];
            if (!d.support.checkClone && arguments.length === 3 && typeof j === "string" && Y.test(j)) return this.each(function() {
                d(this).domManip(a, c, e, !0)
            });
            if (d.isFunction(j)) return this.each(function(f) {
                var g = d(this);
                a[0] = j.call(this, f, c ? g.html() : b),
                g.domManip(a, c, e)
            });
            if (this[0]) {
                i = j && j.parentNode,
                d.support.parentNode && i && i.nodeType === 11 && i.childNodes.length === this.length ? f = {
                    fragment: i
                }: f = d.buildFragment(a, this, k),
                h = f.fragment,
                h.childNodes.length === 1 ? g = h = h.firstChild: g = h.firstChild;
                if (g) {
                    c = c && d.nodeName(g, "tr");
                    for (var l = 0, m = this.length, n = m - 1; l < m; l++) e.call(c ? $(this[l], g) : this[l], f.cacheable || m > 1 && l < n ? d.clone(h, !0, !0) : h)
                }
                k.length && d.each(k, bc)
            }
            return this
        }
    }),
    d.buildFragment = function(a, b, e) {
        var f,
        g,
        h,
        i = b && b[0] ? b[0].ownerDocument || b[0] : c;
        a.length === 1 && typeof a[0] === "string" && a[0].length < 512 && i === c && a[0].charAt(0) === "<" && !X.test(a[0]) && (d.support.checkClone || !Y.test(a[0])) && (g = !0, h = d.fragments[a[0]], h && (h !== 1 && (f = h))),
        f || (f = i.createDocumentFragment(), d.clean(a, i, f, e)),
        g && (d.fragments[a[0]] = h ? f: 1);
        return {
            fragment: f,
            cacheable: g
        }
    },
    d.fragments = {},
    d.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    },
    function(a, b) {
        d.fn[a] = function(c) {
            var e = [],
            f = d(c),
            g = this.length === 1 && this[0].parentNode;
            if (g && g.nodeType === 11 && g.childNodes.length === 1 && f.length === 1) {
                f[b](this[0]);
                return this
            }
            for (var h = 0, i = f.length; h < i; h++) {
                var j = (h > 0 ? this.clone(!0) : this).get();
                d(f[h])[b](j),
                e = e.concat(j)
            }
            return this.pushStack(e, a, f.selector)
        }
    }),
    d.extend({
        clone: function(a, b, c) {
            var e = a.cloneNode(!0),
            f,
            g,
            h;
            if ((!d.support.noCloneEvent || !d.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !d.isXMLDoc(a)) {
                ba(a, e),
                f = bb(a),
                g = bb(e);
                for (h = 0; f[h]; ++h) ba(f[h], g[h])
            }
            if (b) {
                _(a, e);
                if (c) {
                    f = bb(a),
                    g = bb(e);
                    for (h = 0; f[h]; ++h) _(f[h], g[h])
                }
            }
            return e
        },
        clean: function(a, b, e, f) {
            b = b || c,
            typeof b.createElement === "undefined" && (b = b.ownerDocument || b[0] && b[0].ownerDocument || c);
            var g = [];
            for (var h = 0, i; (i = a[h]) != null; h++) {
                typeof i === "number" && (i += "");
                if (!i) continue;
                if (typeof i !== "string" || W.test(i)) {
                    if (typeof i === "string") {
                        i = i.replace(T, "<$1></$2>");
                        var j = (U.exec(i) || ["", ""])[1].toLowerCase(),
                        k = Z[j] || Z._default,
                        l = k[0],
                        m = b.createElement("div");
                        m.innerHTML = k[1] + i + k[2];
                        while (l--) m = m.lastChild;
                        if (!d.support.tbody) {
                            var n = V.test(i),
                            o = j === "table" && !n ? m.firstChild && m.firstChild.childNodes: k[1] === "<table>" && !n ? m.childNodes: [];
                            for (var p = o.length - 1; p >= 0; --p) d.nodeName(o[p], "tbody") && !o[p].childNodes.length && o[p].parentNode.removeChild(o[p])
                        } ! d.support.leadingWhitespace && S.test(i) && m.insertBefore(b.createTextNode(S.exec(i)[0]), m.firstChild),
                        i = m.childNodes
                    }
                } else i = b.createTextNode(i);
                i.nodeType ? g.push(i) : g = d.merge(g, i)
            }
            if (e) for (h = 0; g[h]; h++) ! f || !d.nodeName(g[h], "script") || g[h].type && g[h].type.toLowerCase() !== "text/javascript" ? (g[h].nodeType === 1 && g.splice.apply(g, [h + 1, 0].concat(d.makeArray(g[h].getElementsByTagName("script")))), e.appendChild(g[h])) : f.push(g[h].parentNode ? g[h].parentNode.removeChild(g[h]) : g[h]);
            return g
        },
        cleanData: function(a) {
            var b,
            c,
            e = d.cache,
            f = d.expando,
            g = d.event.special,
            h = d.support.deleteExpando;
            for (var i = 0, j; (j = a[i]) != null; i++) {
                if (j.nodeName && d.noData[j.nodeName.toLowerCase()]) continue;
                c = j[d.expando];
                if (c) {
                    b = e[c] && e[c][f];
                    if (b && b.events) {
                        for (var k in b.events) g[k] ? d.event.remove(j, k) : d.removeEvent(j, k, b.handle);
                        b.handle && (b.handle.elem = null)
                    }
                    h ? delete j[d.expando] : j.removeAttribute && j.removeAttribute(d.expando),
                    delete e[c]
                }
            }
        }
    });
    var bd = /alpha\([^)]*\)/i,
    be = /opacity=([^)]*)/,
    bf = /-([a-z])/ig,
    bg = /([A-Z]|^ms)/g,
    bh = /^-?\d+(?:px)?$/i,
    bi = /^-?\d/,
    bj = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
    bk = ["Left", "Right"],
    bl = ["Top", "Bottom"],
    bm,
    bn,
    bo,
    bp = function(a, b) {
        return b.toUpperCase()
    };
    d.fn.css = function(a, c) {
        if (arguments.length === 2 && c === b) return this;
        return d.access(this, a, c, !0,
        function(a, c, e) {
            return e !== b ? d.style(a, c, e) : d.css(a, c)
        })
    },
    d.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = bm(a, "opacity", "opacity");
                        return c === "" ? "1": c
                    }
                    return a.style.opacity
                }
            }
        },
        cssNumber: {
            zIndex: !0,
            fontWeight: !0,
            opacity: !0,
            zoom: !0,
            lineHeight: !0
        },
        cssProps: {
            "float": d.support.cssFloat ? "cssFloat": "styleFloat"
        },
        style: function(a, c, e, f) {
            if (a && a.nodeType !== 3 && a.nodeType !== 8 && a.style) {
                var g,
                h = d.camelCase(c),
                i = a.style,
                j = d.cssHooks[h];
                c = d.cssProps[h] || h;
                if (e === b) {
                    if (j && "get" in j && (g = j.get(a, !1, f)) !== b) return g;
                    return i[c]
                }
                if (typeof e === "number" && isNaN(e) || e == null) return;
                typeof e === "number" && !d.cssNumber[h] && (e += "px");
                if (!j || !("set" in j) || (e = j.set(a, e)) !== b) try {
                    i[c] = e
                } catch(k) {}
            }
        },
        css: function(a, c, e) {
            var f,
            g = d.camelCase(c),
            h = d.cssHooks[g];
            c = d.cssProps[g] || g;
            if (h && "get" in h && (f = h.get(a, !0, e)) !== b) return f;
            if (bm) return bm(a, c, g)
        },
        swap: function(a, b, c) {
            var d = {};
            for (var e in b) d[e] = a.style[e],
            a.style[e] = b[e];
            c.call(a);
            for (e in b) a.style[e] = d[e]
        },
        camelCase: function(a) {
            return a.replace(bf, bp)
        }
    }),
    d.curCSS = d.css,
    d.each(["height", "width"],
    function(a, b) {
        d.cssHooks[b] = {
            get: function(a, c, e) {
                var f;
                if (c) {
                    a.offsetWidth !== 0 ? f = bq(a, b, e) : d.swap(a, bj,
                    function() {
                        f = bq(a, b, e)
                    });
                    if (f <= 0) {
                        f = bm(a, b, b),
                        f === "0px" && bo && (f = bo(a, b, b));
                        if (f != null) return f === "" || f === "auto" ? "0px": f
                    }
                    if (f < 0 || f == null) {
                        f = a.style[b];
                        return f === "" || f === "auto" ? "0px": f
                    }
                    return typeof f === "string" ? f: f + "px"
                }
            },
            set: function(a, b) {
                if (!bh.test(b)) return b;
                b = parseFloat(b);
                if (b >= 0) return b + "px"
            }
        }
    }),
    d.support.opacity || (d.cssHooks.opacity = {
        get: function(a, b) {
            return be.test((b && a.currentStyle ? a.currentStyle.filter: a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "": b ? "1": ""
        },
        set: function(a, b) {
            var c = a.style;
            c.zoom = 1;
            var e = d.isNaN(b) ? "": "alpha(opacity=" + b * 100 + ")",
            f = c.filter || "";
            c.filter = bd.test(f) ? f.replace(bd, e) : c.filter + " " + e
        }
    }),
    d(function() {
        d.support.reliableMarginRight || (d.cssHooks.marginRight = {
            get: function(a, b) {
                var c;
                d.swap(a, {
                    display: "inline-block"
                },
                function() {
                    b ? c = bm(a, "margin-right", "marginRight") : c = a.style.marginRight
                });
                return c
            }
        })
    }),
    c.defaultView && c.defaultView.getComputedStyle && (bn = function(a, c, e) {
        var f,
        g,
        h;
        e = e.replace(bg, "-$1").toLowerCase();
        if (! (g = a.ownerDocument.defaultView)) return b;
        if (h = g.getComputedStyle(a, null)) f = h.getPropertyValue(e),
        f === "" && !d.contains(a.ownerDocument.documentElement, a) && (f = d.style(a, e));
        return f
    }),
    c.documentElement.currentStyle && (bo = function(a, b) {
        var c,
        d = a.currentStyle && a.currentStyle[b],
        e = a.runtimeStyle && a.runtimeStyle[b],
        f = a.style; ! bh.test(d) && bi.test(d) && (c = f.left, e && (a.runtimeStyle.left = a.currentStyle.left), f.left = b === "fontSize" ? "1em": d || 0, d = f.pixelLeft + "px", f.left = c, e && (a.runtimeStyle.left = e));
        return d === "" ? "auto": d
    }),
    bm = bn || bo,
    d.expr && d.expr.filters && (d.expr.filters.hidden = function(a) {
        var b = a.offsetWidth,
        c = a.offsetHeight;
        return b === 0 && c === 0 || !d.support.reliableHiddenOffsets && (a.style.display || d.css(a, "display")) === "none"
    },
    d.expr.filters.visible = function(a) {
        return ! d.expr.filters.hidden(a)
    });
    var br = /%20/g,
    bs = /\[\]$/,
    bt = /\r?\n/g,
    bu = /#.*$/,
    bv = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
    bw = /^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
    bx = /^(?:about|app|app\-storage|.+\-extension|file|widget):$/,
    by = /^(?:GET|HEAD)$/,
    bz = /^\/\//,
    bA = /\?/,
    bB = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    bC = /^(?:select|textarea)/i,
    bD = /\s+/,
    bE = /([?&])_=[^&]*/,
    bF = /(^|\-)([a-z])/g,
    bG = function(a, b, c) {
        return b + c.toUpperCase()
    },
    bH = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
    bI = d.fn.load,
    bJ = {},
    bK = {},
    bL,
    bM;
    try {
        bL = c.location.href
    } catch(bN) {
        bL = c.createElement("a"),
        bL.href = "",
        bL = bL.href
    }
    bM = bH.exec(bL.toLowerCase()) || [],
    d.fn.extend({
        load: function(a, c, e) {
            if (typeof a !== "string" && bI) return bI.apply(this, arguments);
            if (!this.length) return this;
            var f = a.indexOf(" ");
            if (f >= 0) {
                var g = a.slice(f, a.length);
                a = a.slice(0, f)
            }
            var h = "GET";
            c && (d.isFunction(c) ? (e = c, c = b) : typeof c === "object" && (c = d.param(c, d.ajaxSettings.traditional), h = "POST"));
            var i = this;
            d.ajax({
                url: a,
                type: h,
                dataType: "html",
                data: c,
                complete: function(a, b, c) {
                    c = a.responseText,
                    a.isResolved() && (a.done(function(a) {
                        c = a
                    }), i.html(g ? d("<div>").append(c.replace(bB, "")).find(g) : c)),
                    e && i.each(e, [c, b, a])
                }
            });
            return this
        },
        serialize: function() {
            return d.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? d.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || bC.test(this.nodeName) || bw.test(this.type))
            }).map(function(a, b) {
                var c = d(this).val();
                return c == null ? null: d.isArray(c) ? d.map(c,
                function(a, c) {
                    return {
                        name: b.name,
                        value: a.replace(bt, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(bt, "\r\n")
                }
            }).get()
        }
    }),
    d.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),
    function(a, b) {
        d.fn[b] = function(a) {
            return this.bind(b, a)
        }
    }),
    d.each(["get", "post"],
    function(a, c) {
        d[c] = function(a, e, f, g) {
            d.isFunction(e) && (g = g || f, f = e, e = b);
            return d.ajax({
                type: c,
                url: a,
                data: e,
                success: f,
                dataType: g
            })
        }
    }),
    d.extend({
        getScript: function(a, c) {
            return d.get(a, b, c, "script")
        },
        getJSON: function(a, b, c) {
            return d.get(a, b, c, "json")
        },
        ajaxSetup: function(a, b) {
            b ? d.extend(!0, a, d.ajaxSettings, b) : (b = a, a = d.extend(!0, d.ajaxSettings, b));
            for (var c in {
                context: 1,
                url: 1
            }) c in b ? a[c] = b[c] : c in d.ajaxSettings && (a[c] = d.ajaxSettings[c]);
            return a
        },
        ajaxSettings: {
            url: bL,
            isLocal: bx.test(bM[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": "*/*"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": a.String,
                "text html": !0,
                "text json": d.parseJSON,
                "text xml": d.parseXML
            }
        },
        ajaxPrefilter: bO(bJ),
        ajaxTransport: bO(bK),
        ajax: function(a, c) {
            function v(a, c, l, n) {
                if (r !== 2) {
                    r = 2,
                    p && clearTimeout(p),
                    o = b,
                    m = n || "",
                    u.readyState = a ? 4: 0;
                    var q,
                    t,
                    v,
                    w = l ? bR(e, u, l) : b,
                    x,
                    y;
                    if (a >= 200 && a < 300 || a === 304) {
                        if (e.ifModified) {
                            if (x = u.getResponseHeader("Last-Modified")) d.lastModified[k] = x;
                            if (y = u.getResponseHeader("Etag")) d.etag[k] = y
                        }
                        if (a === 304) c = "notmodified",
                        q = !0;
                        else try {
                            t = bS(e, w),
                            c = "success",
                            q = !0
                        } catch(z) {
                            c = "parsererror",
                            v = z
                        }
                    } else {
                        v = c;
                        if (!c || a) c = "error",
                        a < 0 && (a = 0)
                    }
                    u.status = a,
                    u.statusText = c,
                    q ? h.resolveWith(f, [t, c, u]) : h.rejectWith(f, [u, c, v]),
                    u.statusCode(j),
                    j = b,
                    s && g.trigger("ajax" + (q ? "Success": "Error"), [u, e, q ? t: v]),
                    i.resolveWith(f, [u, c]),
                    s && (g.trigger("ajaxComplete", [u, e]), --d.active || d.event.trigger("ajaxStop"))
                }
            }
            typeof a === "object" && (c = a, a = b),
            c = c || {};
            var e = d.ajaxSetup({},
            c),
            f = e.context || e,
            g = f !== e && (f.nodeType || f instanceof d) ? d(f) : d.event,
            h = d.Deferred(),
            i = d._Deferred(),
            j = e.statusCode || {},
            k,
            l = {},
            m,
            n,
            o,
            p,
            q,
            r = 0,
            s,
            t,
            u = {
                readyState: 0,
                setRequestHeader: function(a, b) {
                    r || (l[a.toLowerCase().replace(bF, bG)] = b);
                    return this
                },
                getAllResponseHeaders: function() {
                    return r === 2 ? m: null
                },
                getResponseHeader: function(a) {
                    var c;
                    if (r === 2) {
                        if (!n) {
                            n = {};
                            while (c = bv.exec(m)) n[c[1].toLowerCase()] = c[2]
                        }
                        c = n[a.toLowerCase()]
                    }
                    return c === b ? null: c
                },
                overrideMimeType: function(a) {
                    r || (e.mimeType = a);
                    return this
                },
                abort: function(a) {
                    a = a || "abort",
                    o && o.abort(a),
                    v(0, a);
                    return this
                }
            };
            h.promise(u),
            u.success = u.done,
            u.error = u.fail,
            u.complete = i.done,
            u.statusCode = function(a) {
                if (a) {
                    var b;
                    if (r < 2) for (b in a) j[b] = [j[b], a[b]];
                    else b = a[u.status],
                    u.then(b, b)
                }
                return this
            },
            e.url = ((a || e.url) + "").replace(bu, "").replace(bz, bM[1] + "//"),
            e.dataTypes = d.trim(e.dataType || "*").toLowerCase().split(bD),
            e.crossDomain == null && (q = bH.exec(e.url.toLowerCase()), e.crossDomain = q && (q[1] != bM[1] || q[2] != bM[2] || (q[3] || (q[1] === "http:" ? 80: 443)) != (bM[3] || (bM[1] === "http:" ? 80: 443)))),
            e.data && e.processData && typeof e.data !== "string" && (e.data = d.param(e.data, e.traditional)),
            bP(bJ, e, c, u);
            if (r === 2) return ! 1;
            s = e.global,
            e.type = e.type.toUpperCase(),
            e.hasContent = !by.test(e.type),
            s && d.active++===0 && d.event.trigger("ajaxStart");
            if (!e.hasContent) {
                e.data && (e.url += (bA.test(e.url) ? "&": "?") + e.data),
                k = e.url;
                if (e.cache === !1) {
                    var w = d.now(),
                    x = e.url.replace(bE, "$1_=" + w);
                    e.url = x + (x === e.url ? (bA.test(e.url) ? "&": "?") + "_=" + w: "")
                }
            }
            if (e.data && e.hasContent && e.contentType !== !1 || c.contentType) l["Content-Type"] = e.contentType;
            e.ifModified && (k = k || e.url, d.lastModified[k] && (l["If-Modified-Since"] = d.lastModified[k]), d.etag[k] && (l["If-None-Match"] = d.etag[k])),
            l.Accept = e.dataTypes[0] && e.accepts[e.dataTypes[0]] ? e.accepts[e.dataTypes[0]] + (e.dataTypes[0] !== "*" ? ", */*; q=0.01": "") : e.accepts["*"];
            for (t in e.headers) u.setRequestHeader(t, e.headers[t]);
            if (e.beforeSend && (e.beforeSend.call(f, u, e) === !1 || r === 2)) {
                u.abort();
                return ! 1
            }
            for (t in {
                success: 1,
                error: 1,
                complete: 1
            }) u[t](e[t]);
            o = bP(bK, e, c, u);
            if (o) {
                u.readyState = 1,
                s && g.trigger("ajaxSend", [u, e]),
                e.async && e.timeout > 0 && (p = setTimeout(function() {
                    u.abort("timeout")
                },
                e.timeout));
                try {
                    r = 1,
                    o.send(l, v)
                } catch(y) {
                    status < 2 ? v( - 1, y) : d.error(y)
                }
            } else v( - 1, "No Transport");
            return u
        },
        param: function(a, c) {
            var e = [],
            f = function(a, b) {
                b = d.isFunction(b) ? b() : b,
                e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
            c === b && (c = d.ajaxSettings.traditional);
            if (d.isArray(a) || a.jquery && !d.isPlainObject(a)) d.each(a,
            function() {
                f(this.name, this.value)
            });
            else for (var g in a) bQ(g, a[g], c, f);
            return e.join("&").replace(br, "+")
        }
    }),
    d.extend({
        active: 0,
        lastModified: {},
        etag: {}
    });
    var bT = d.now(),
    bU = /(\=)\?(&|$)|\?\?/i;
    d.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            return d.expando + "_" + bT++
        }
    }),
    d.ajaxPrefilter("json jsonp",
    function(b, c, e) {
        var f = typeof b.data === "string";
        if (b.dataTypes[0] === "jsonp" || c.jsonpCallback || c.jsonp != null || b.jsonp !== !1 && (bU.test(b.url) || f && bU.test(b.data))) {
            var g,
            h = b.jsonpCallback = d.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
            i = a[h],
            j = b.url,
            k = b.data,
            l = "$1" + h + "$2",
            m = function() {
                a[h] = i,
                g && d.isFunction(i) && a[h](g[0])
            };
            b.jsonp !== !1 && (j = j.replace(bU, l), b.url === j && (f && (k = k.replace(bU, l)), b.data === k && (j += (/\?/.test(j) ? "&": "?") + b.jsonp + "=" + h))),
            b.url = j,
            b.data = k,
            a[h] = function(a) {
                g = [a]
            },
            e.then(m, m),
            b.converters["script json"] = function() {
                g || d.error(h + " was not called");
                return g[0]
            },
            b.dataTypes[0] = "json";
            return "script"
        }
    }),
    d.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(a) {
                d.globalEval(a);
                return a
            }
        }
    }),
    d.ajaxPrefilter("script",
    function(a) {
        a.cache === b && (a.cache = !1),
        a.crossDomain && (a.type = "GET", a.global = !1)
    }),
    d.ajaxTransport("script",
    function(a) {
        if (a.crossDomain) {
            var d,
            e = c.head || c.getElementsByTagName("head")[0] || c.documentElement;
            return {
                send: function(f, g) {
                    d = c.createElement("script"),
                    d.async = "async",
                    a.scriptCharset && (d.charset = a.scriptCharset),
                    d.src = a.url,
                    d.onload = d.onreadystatechange = function(a, c) {
                        if (!d.readyState || /loaded|complete/.test(d.readyState)) d.onload = d.onreadystatechange = null,
                        e && d.parentNode && e.removeChild(d),
                        d = b,
                        c || g(200, "success")
                    },
                    e.insertBefore(d, e.firstChild)
                },
                abort: function() {
                    d && d.onload(0, 1)
                }
            }
        }
    });
    var bV = d.now(),
    bW,
    bX;
    d.ajaxSettings.xhr = a.ActiveXObject ?
    function() {
        return ! this.isLocal && bZ() || b$()
    }: bZ,
    bX = d.ajaxSettings.xhr(),
    d.support.ajax = !!bX,
    d.support.cors = bX && "withCredentials" in bX,
    bX = b,
    d.support.ajax && d.ajaxTransport(function(a) {
        if (!a.crossDomain || d.support.cors) {
            var c;
            return {
                send: function(e, f) {
                    var g = a.xhr(),
                    h,
                    i;
                    a.username ? g.open(a.type, a.url, a.async, a.username, a.password) : g.open(a.type, a.url, a.async);
                    if (a.xhrFields) for (i in a.xhrFields) g[i] = a.xhrFields[i];
                    a.mimeType && g.overrideMimeType && g.overrideMimeType(a.mimeType),
                    !a.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (i in e) g.setRequestHeader(i, e[i])
                    } catch(j) {}
                    g.send(a.hasContent && a.data || null),
                    c = function(e, i) {
                        var j,
                        k,
                        l,
                        m,
                        n;
                        try {
                            if (c && (i || g.readyState === 4)) {
                                c = b,
                                h && (g.onreadystatechange = d.noop, delete bW[h]);
                                if (i) g.readyState !== 4 && g.abort();
                                else {
                                    j = g.status,
                                    l = g.getAllResponseHeaders(),
                                    m = {},
                                    n = g.responseXML,
                                    n && n.documentElement && (m.xml = n),
                                    m.text = g.responseText;
                                    try {
                                        k = g.statusText
                                    } catch(o) {
                                        k = ""
                                    }
                                    j || !a.isLocal || a.crossDomain ? j === 1223 && (j = 204) : j = m.text ? 200: 404
                                }
                            }
                        } catch(p) {
                            i || f( - 1, p)
                        }
                        m && f(j, k, m, l)
                    },
                    a.async && g.readyState !== 4 ? (bW || (bW = {},
                    bY()), h = bV++, g.onreadystatechange = bW[h] = c) : c()
                },
                abort: function() {
                    c && c(0, 1)
                }
            }
        }
    });
    var b_ = {},
    ca = /^(?:toggle|show|hide)$/,
    cb = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
    cc,
    cd = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]];
    d.fn.extend({
        show: function(a, b, c) {
            var e,
            f;
            if (a || a === 0) return this.animate(ce("show", 3), a, b, c);
            for (var g = 0, h = this.length; g < h; g++) e = this[g],
            f = e.style.display,
            !d._data(e, "olddisplay") && f === "none" && (f = e.style.display = ""),
            f === "" && d.css(e, "display") === "none" && d._data(e, "olddisplay", cf(e.nodeName));
            for (g = 0; g < h; g++) {
                e = this[g],
                f = e.style.display;
                if (f === "" || f === "none") e.style.display = d._data(e, "olddisplay") || ""
            }
            return this
        },
        hide: function(a, b, c) {
            if (a || a === 0) return this.animate(ce("hide", 3), a, b, c);
            for (var e = 0, f = this.length; e < f; e++) {
                var g = d.css(this[e], "display");
                g !== "none" && !d._data(this[e], "olddisplay") && d._data(this[e], "olddisplay", g)
            }
            for (e = 0; e < f; e++) this[e].style.display = "none";
            return this
        },
        _toggle: d.fn.toggle,
        toggle: function(a, b, c) {
            var e = typeof a === "boolean";
            d.isFunction(a) && d.isFunction(b) ? this._toggle.apply(this, arguments) : a == null || e ? this.each(function() {
                var b = e ? a: d(this).is(":hidden");
                d(this)[b ? "show": "hide"]()
            }) : this.animate(ce("toggle", 3), a, b, c);
            return this
        },
        fadeTo: function(a, b, c, d) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: b
            },
            a, c, d)
        },
        animate: function(a, b, c, e) {
            var f = d.speed(b, c, e);
            if (d.isEmptyObject(a)) return this.each(f.complete);
            return this[f.queue === !1 ? "each": "queue"](function() {
                var b = d.extend({},
                f),
                c,
                e = this.nodeType === 1,
                g = e && d(this).is(":hidden"),
                h = this;
                for (c in a) {
                    var i = d.camelCase(c);
                    c !== i && (a[i] = a[c], delete a[c], c = i);
                    if (a[c] === "hide" && g || a[c] === "show" && !g) return b.complete.call(this);
                    if (e && (c === "height" || c === "width")) {
                        b.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY];
                        if (d.css(this, "display") === "inline" && d.css(this, "float") === "none") if (d.support.inlineBlockNeedsLayout) {
                            var j = cf(this.nodeName);
                            j === "inline" ? this.style.display = "inline-block": (this.style.display = "inline", this.style.zoom = 1)
                        } else this.style.display = "inline-block"
                    }
                    d.isArray(a[c]) && ((b.specialEasing = b.specialEasing || {})[c] = a[c][1], a[c] = a[c][0])
                }
                b.overflow != null && (this.style.overflow = "hidden"),
                b.curAnim = d.extend({},
                a),
                d.each(a,
                function(c, e) {
                    var f = new d.fx(h, b, c);
                    if (ca.test(e)) f[e === "toggle" ? g ? "show": "hide": e](a);
                    else {
                        var i = cb.exec(e),
                        j = f.cur();
                        if (i) {
                            var k = parseFloat(i[2]),
                            l = i[3] || (d.cssNumber[c] ? "": "px");
                            l !== "px" && (d.style(h, c, (k || 1) + l), j = (k || 1) / f.cur() * j, d.style(h, c, j + l)),
                            i[1] && (k = (i[1] === "-=" ? -1: 1) * k + j),
                            f.custom(j, k, l)
                        } else f.custom(j, e, "")
                    }
                });
                return ! 0
            })
        },
        stop: function(a, b) {
            var c = d.timers;
            a && this.queue([]),
            this.each(function() {
                for (var a = c.length - 1; a >= 0; a--) c[a].elem === this && (b && c[a](!0), c.splice(a, 1))
            }),
            b || this.dequeue();
            return this
        }
    }),
    d.each({
        slideDown: ce("show", 1),
        slideUp: ce("hide", 1),
        slideToggle: ce("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    },
    function(a, b) {
        d.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }),
    d.extend({
        speed: function(a, b, c) {
            var e = a && typeof a === "object" ? d.extend({},
            a) : {
                complete: c || !c && b || d.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !d.isFunction(b) && b
            };
            e.duration = d.fx.off ? 0: typeof e.duration === "number" ? e.duration: e.duration in d.fx.speeds ? d.fx.speeds[e.duration] : d.fx.speeds._default,
            e.old = e.complete,
            e.complete = function() {
                e.queue !== !1 && d(this).dequeue(),
                d.isFunction(e.old) && e.old.call(this)
            };
            return e
        },
        easing: {
            linear: function(a, b, c, d) {
                return c + d * a
            },
            swing: function(a, b, c, d) {
                return ( - Math.cos(a * Math.PI) / 2 + .5) * d + c
            }
        },
        timers: [],
        fx: function(a, b, c) {
            this.options = b,
            this.elem = a,
            this.prop = c,
            b.orig || (b.orig = {})
        }
    }),
    d.fx.prototype = {
        update: function() {
            this.options.step && this.options.step.call(this.elem, this.now, this),
            (d.fx.step[this.prop] || d.fx.step._default)(this)
        },
        cur: function() {
            if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) return this.elem[this.prop];
            var a,
            b = d.css(this.elem, this.prop);
            return isNaN(a = parseFloat(b)) ? !b || b === "auto" ? 0: b: a
        },
        custom: function(a, b, c) {
            function g(a) {
                return e.step(a)
            }
            var e = this,
            f = d.fx;
            this.startTime = d.now(),
            this.start = a,
            this.end = b,
            this.unit = c || this.unit || (d.cssNumber[this.prop] ? "": "px"),
            this.now = this.start,
            this.pos = this.state = 0,
            g.elem = this.elem,
            g() && d.timers.push(g) && !cc && (cc = setInterval(f.tick, f.interval))
        },
        show: function() {
            this.options.orig[this.prop] = d.style(this.elem, this.prop),
            this.options.show = !0,
            this.custom(this.prop === "width" || this.prop === "height" ? 1: 0, this.cur()),
            d(this.elem).show()
        },
        hide: function() {
            this.options.orig[this.prop] = d.style(this.elem, this.prop),
            this.options.hide = !0,
            this.custom(this.cur(), 0)
        },
        step: function(a) {
            var b = d.now(),
            c = !0;
            if (a || b >= this.options.duration + this.startTime) {
                this.now = this.end,
                this.pos = this.state = 1,
                this.update(),
                this.options.curAnim[this.prop] = !0;
                for (var e in this.options.curAnim) this.options.curAnim[e] !== !0 && (c = !1);
                if (c) {
                    if (this.options.overflow != null && !d.support.shrinkWrapBlocks) {
                        var f = this.elem,
                        g = this.options;
                        d.each(["", "X", "Y"],
                        function(a, b) {
                            f.style["overflow" + b] = g.overflow[a]
                        })
                    }
                    this.options.hide && d(this.elem).hide();
                    if (this.options.hide || this.options.show) for (var h in this.options.curAnim) d.style(this.elem, h, this.options.orig[h]);
                    this.options.complete.call(this.elem)
                }
                return ! 1
            }
            var i = b - this.startTime;
            this.state = i / this.options.duration;
            var j = this.options.specialEasing && this.options.specialEasing[this.prop],
            k = this.options.easing || (d.easing.swing ? "swing": "linear");
            this.pos = d.easing[j || k](this.state, i, 0, 1, this.options.duration),
            this.now = this.start + (this.end - this.start) * this.pos,
            this.update();
            return ! 0
        }
    },
    d.extend(d.fx, {
        tick: function() {
            var a = d.timers;
            for (var b = 0; b < a.length; b++) a[b]() || a.splice(b--, 1);
            a.length || d.fx.stop()
        },
        interval: 13,
        stop: function() {
            clearInterval(cc),
            cc = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function(a) {
                d.style(a.elem, "opacity", a.now)
            },
            _default: function(a) {
                a.elem.style && a.elem.style[a.prop] != null ? a.elem.style[a.prop] = (a.prop === "width" || a.prop === "height" ? Math.max(0, a.now) : a.now) + a.unit: a.elem[a.prop] = a.now
            }
        }
    }),
    d.expr && d.expr.filters && (d.expr.filters.animated = function(a) {
        return d.grep(d.timers,
        function(b) {
            return a === b.elem
        }).length
    });
    var cg = /^t(?:able|d|h)$/i,
    ch = /^(?:body|html)$/i;
    "getBoundingClientRect" in c.documentElement ? d.fn.offset = function(a) {
        var b = this[0],
        c;
        if (a) return this.each(function(b) {
            d.offset.setOffset(this, a, b)
        });
        if (!b || !b.ownerDocument) return null;
        if (b === b.ownerDocument.body) return d.offset.bodyOffset(b);
        try {
            c = b.getBoundingClientRect()
        } catch(e) {}
        var f = b.ownerDocument,
        g = f.documentElement;
        if (!c || !d.contains(g, b)) return c ? {
            top: c.top,
            left: c.left
        }: {
            top: 0,
            left: 0
        };
        var h = f.body,
        i = ci(f),
        j = g.clientTop || h.clientTop || 0,
        k = g.clientLeft || h.clientLeft || 0,
        l = i.pageYOffset || d.support.boxModel && g.scrollTop || h.scrollTop,
        m = i.pageXOffset || d.support.boxModel && g.scrollLeft || h.scrollLeft,
        n = c.top + l - j,
        o = c.left + m - k;
        return {
            top: n,
            left: o
        }
    }: d.fn.offset = function(a) {
        var b = this[0];
        if (a) return this.each(function(b) {
            d.offset.setOffset(this, a, b)
        });
        if (!b || !b.ownerDocument) return null;
        if (b === b.ownerDocument.body) return d.offset.bodyOffset(b);
        d.offset.initialize();
        var c,
        e = b.offsetParent,
        f = b,
        g = b.ownerDocument,
        h = g.documentElement,
        i = g.body,
        j = g.defaultView,
        k = j ? j.getComputedStyle(b, null) : b.currentStyle,
        l = b.offsetTop,
        m = b.offsetLeft;
        while ((b = b.parentNode) && b !== i && b !== h) {
            if (d.offset.supportsFixedPosition && k.position === "fixed") break;
            c = j ? j.getComputedStyle(b, null) : b.currentStyle,
            l -= b.scrollTop,
            m -= b.scrollLeft,
            b === e && (l += b.offsetTop, m += b.offsetLeft, d.offset.doesNotAddBorder && (!d.offset.doesAddBorderForTableAndCells || !cg.test(b.nodeName)) && (l += parseFloat(c.borderTopWidth) || 0, m += parseFloat(c.borderLeftWidth) || 0), f = e, e = b.offsetParent),
            d.offset.subtractsBorderForOverflowNotVisible && c.overflow !== "visible" && (l += parseFloat(c.borderTopWidth) || 0, m += parseFloat(c.borderLeftWidth) || 0),
            k = c
        }
        if (k.position === "relative" || k.position === "static") l += i.offsetTop,
        m += i.offsetLeft;
        d.offset.supportsFixedPosition && k.position === "fixed" && (l += Math.max(h.scrollTop, i.scrollTop), m += Math.max(h.scrollLeft, i.scrollLeft));
        return {
            top: l,
            left: m
        }
    },
    d.offset = {
        initialize: function() {
            var a = c.body,
            b = c.createElement("div"),
            e,
            f,
            g,
            h,
            i = parseFloat(d.css(a, "marginTop")) || 0,
            j = "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
            d.extend(b.style, {
                position: "absolute",
                top: 0,
                left: 0,
                margin: 0,
                border: 0,
                width: "1px",
                height: "1px",
                visibility: "hidden"
            }),
            b.innerHTML = j,
            a.insertBefore(b, a.firstChild),
            e = b.firstChild,
            f = e.firstChild,
            h = e.nextSibling.firstChild.firstChild,
            this.doesNotAddBorder = f.offsetTop !== 5,
            this.doesAddBorderForTableAndCells = h.offsetTop === 5,
            f.style.position = "fixed",
            f.style.top = "20px",
            this.supportsFixedPosition = f.offsetTop === 20 || f.offsetTop === 15,
            f.style.position = f.style.top = "",
            e.style.overflow = "hidden",
            e.style.position = "relative",
            this.subtractsBorderForOverflowNotVisible = f.offsetTop === -5,
            this.doesNotIncludeMarginInBodyOffset = a.offsetTop !== i,
            a.removeChild(b),
            d.offset.initialize = d.noop
        },
        bodyOffset: function(a) {
            var b = a.offsetTop,
            c = a.offsetLeft;
            d.offset.initialize(),
            d.offset.doesNotIncludeMarginInBodyOffset && (b += parseFloat(d.css(a, "marginTop")) || 0, c += parseFloat(d.css(a, "marginLeft")) || 0);
            return {
                top: b,
                left: c
            }
        },
        setOffset: function(a, b, c) {
            var e = d.css(a, "position");
            e === "static" && (a.style.position = "relative");
            var f = d(a),
            g = f.offset(),
            h = d.css(a, "top"),
            i = d.css(a, "left"),
            j = (e === "absolute" || e === "fixed") && d.inArray("auto", [h, i]) > -1,
            k = {},
            l = {},
            m,
            n;
            j && (l = f.position()),
            m = j ? l.top: parseInt(h, 10) || 0,
            n = j ? l.left: parseInt(i, 10) || 0,
            d.isFunction(b) && (b = b.call(a, c, g)),
            b.top != null && (k.top = b.top - g.top + m),
            b.left != null && (k.left = b.left - g.left + n),
            "using" in b ? b.using.call(a, k) : f.css(k)
        }
    },
    d.fn.extend({
        position: function() {
            if (!this[0]) return null;
            var a = this[0],
            b = this.offsetParent(),
            c = this.offset(),
            e = ch.test(b[0].nodeName) ? {
                top: 0,
                left: 0
            }: b.offset();
            c.top -= parseFloat(d.css(a, "marginTop")) || 0,
            c.left -= parseFloat(d.css(a, "marginLeft")) || 0,
            e.top += parseFloat(d.css(b[0], "borderTopWidth")) || 0,
            e.left += parseFloat(d.css(b[0], "borderLeftWidth")) || 0;
            return {
                top: c.top - e.top,
                left: c.left - e.left
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent || c.body;
                while (a && (!ch.test(a.nodeName) && d.css(a, "position") === "static")) a = a.offsetParent;
                return a
            })
        }
    }),
    d.each(["Left", "Top"],
    function(a, c) {
        var e = "scroll" + c;
        d.fn[e] = function(c) {
            var f = this[0],
            g;
            if (!f) return null;
            if (c !== b) return this.each(function() {
                g = ci(this),
                g ? g.scrollTo(a ? d(g).scrollLeft() : c, a ? c: d(g).scrollTop()) : this[e] = c
            });
            g = ci(f);
            return g ? "pageXOffset" in g ? g[a ? "pageYOffset": "pageXOffset"] : d.support.boxModel && g.document.documentElement[e] || g.document.body[e] : f[e]
        }
    }),
    d.each(["Height", "Width"],
    function(a, c) {
        var e = c.toLowerCase();
        d.fn["inner" + c] = function() {
            return this[0] ? parseFloat(d.css(this[0], e, "padding")) : null
        },
        d.fn["outer" + c] = function(a) {
            return this[0] ? parseFloat(d.css(this[0], e, a ? "margin": "border")) : null
        },
        d.fn[e] = function(a) {
            var f = this[0];
            if (!f) return a == null ? null: this;
            if (d.isFunction(a)) return this.each(function(b) {
                var c = d(this);
                c[e](a.call(this, b, c[e]()))
            });
            if (d.isWindow(f)) {
                var g = f.document.documentElement["client" + c];
                return f.document.compatMode === "CSS1Compat" && g || f.document.body["client" + c] || g
            }
            if (f.nodeType === 9) return Math.max(f.documentElement["client" + c], f.body["scroll" + c], f.documentElement["scroll" + c], f.body["offset" + c], f.documentElement["offset" + c]);
            if (a === b) {
                var h = d.css(f, e),
                i = parseFloat(h);
                return d.isNaN(i) ? h: i
            }
            return this.css(e, typeof a === "string" ? a: a + "px")
        }
    }),
    a.jQuery = a.$ = d
})(window);

;
/*!
 * jQuery UI 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */
 (function(c, j) {
    function k(a, b) {
        var d = a.nodeName.toLowerCase();
        if ("area" === d) {
            b = a.parentNode;
            d = b.name;
            if (!a.href || !d || b.nodeName.toLowerCase() !== "map") return false;
            a = c("img[usemap=#" + d + "]")[0];
            return !! a && l(a)
        }
        return (/input|select|textarea|button|object/.test(d) ? !a.disabled: "a" == d ? a.href || b: b) && l(a)
    }
    function l(a) {
        return ! c(a).parents().andSelf().filter(function() {
            return c.curCSS(this, "visibility") === "hidden" || c.expr.filters.hidden(this)
        }).length
    }
    c.ui = c.ui || {};
    if (!c.ui.version) {
        c.extend(c.ui, {
            version: "1.8.16",
            keyCode: {
                ALT: 18,
                BACKSPACE: 8,
                CAPS_LOCK: 20,
                COMMA: 188,
                COMMAND: 91,
                COMMAND_LEFT: 91,
                COMMAND_RIGHT: 93,
                CONTROL: 17,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                INSERT: 45,
                LEFT: 37,
                MENU: 93,
                NUMPAD_ADD: 107,
                NUMPAD_DECIMAL: 110,
                NUMPAD_DIVIDE: 111,
                NUMPAD_ENTER: 108,
                NUMPAD_MULTIPLY: 106,
                NUMPAD_SUBTRACT: 109,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SHIFT: 16,
                SPACE: 32,
                TAB: 9,
                UP: 38,
                WINDOWS: 91
            }
        });
        c.fn.extend({
            propAttr: c.fn.prop || c.fn.attr,
            _focus: c.fn.focus,
            focus: function(a, b) {
                return typeof a === "number" ? this.each(function() {
                    var d =
                    this;
                    setTimeout(function() {
                        c(d).focus();
                        b && b.call(d)
                    },
                    a)
                }) : this._focus.apply(this, arguments)
            },
            scrollParent: function() {
                var a;
                a = c.browser.msie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                    return /(relative|absolute|fixed)/.test(c.curCSS(this, "position", 1)) && /(auto|scroll)/.test(c.curCSS(this, "overflow", 1) + c.curCSS(this, "overflow-y", 1) + c.curCSS(this, "overflow-x", 1))
                }).eq(0) : this.parents().filter(function() {
                    return /(auto|scroll)/.test(c.curCSS(this,
                    "overflow", 1) + c.curCSS(this, "overflow-y", 1) + c.curCSS(this, "overflow-x", 1))
                }).eq(0);
                return /fixed/.test(this.css("position")) || !a.length ? c(document) : a
            },
            zIndex: function(a) {
                if (a !== j) return this.css("zIndex", a);
                if (this.length) {
                    a = c(this[0]);
                    for (var b; a.length && a[0] !== document;) {
                        b = a.css("position");
                        if (b === "absolute" || b === "relative" || b === "fixed") {
                            b = parseInt(a.css("zIndex"), 10);
                            if (!isNaN(b) && b !== 0) return b
                        }
                        a = a.parent()
                    }
                }
                return 0
            },
            disableSelection: function() {
                return this.bind((c.support.selectstart ? "selectstart":
                "mousedown") + ".ui-disableSelection",
                function(a) {
                    a.preventDefault()
                })
            },
            enableSelection: function() {
                return this.unbind(".ui-disableSelection")
            }
        });
        c.each(["Width", "Height"],
        function(a, b) {
            function d(f, g, m, n) {
                c.each(e,
                function() {
                    g -= parseFloat(c.curCSS(f, "padding" + this, true)) || 0;
                    if (m) g -= parseFloat(c.curCSS(f, "border" + this + "Width", true)) || 0;
                    if (n) g -= parseFloat(c.curCSS(f, "margin" + this, true)) || 0
                });
                return g
            }
            var e = b === "Width" ? ["Left", "Right"] : ["Top", "Bottom"],
            h = b.toLowerCase(),
            i = {
                innerWidth: c.fn.innerWidth,
                innerHeight: c.fn.innerHeight,
                outerWidth: c.fn.outerWidth,
                outerHeight: c.fn.outerHeight
            };
            c.fn["inner" + b] = function(f) {
                if (f === j) return i["inner" + b].call(this);
                return this.each(function() {
                    c(this).css(h, d(this, f) + "px")
                })
            };
            c.fn["outer" + b] = function(f, g) {
                if (typeof f !== "number") return i["outer" + b].call(this, f);
                return this.each(function() {
                    c(this).css(h, d(this, f, true, g) + "px")
                })
            }
        });
        c.extend(c.expr[":"], {
            data: function(a, b, d) {
                return !! c.data(a, d[3])
            },
            focusable: function(a) {
                return k(a, !isNaN(c.attr(a, "tabindex")))
            },
            tabbable: function(a) {
                var b = c.attr(a,
                "tabindex"),
                d = isNaN(b);
                return (d || b >= 0) && k(a, !d)
            }
        });
        c(function() {
            var a = document.body,
            b = a.appendChild(b = document.createElement("div"));
            c.extend(b.style, {
                minHeight: "100px",
                height: "auto",
                padding: 0,
                borderWidth: 0
            });
            c.support.minHeight = b.offsetHeight === 100;
            c.support.selectstart = "onselectstart" in b;
            a.removeChild(b).style.display = "none"
        });
        c.extend(c.ui, {
            plugin: {
                add: function(a, b, d) {
                    a = c.ui[a].prototype;
                    for (var e in d) {
                        a.plugins[e] = a.plugins[e] || [];
                        a.plugins[e].push([b, d[e]])
                    }
                },
                call: function(a, b, d) {
                    if ((b = a.plugins[b]) &&
                    a.element[0].parentNode) for (var e = 0; e < b.length; e++) a.options[b[e][0]] && b[e][1].apply(a.element, d)
                }
            },
            contains: function(a, b) {
                return document.compareDocumentPosition ? a.compareDocumentPosition(b) & 16: a !== b && a.contains(b)
            },
            hasScroll: function(a, b) {
                if (c(a).css("overflow") === "hidden") return false;
                b = b && b === "left" ? "scrollLeft": "scrollTop";
                var d = false;
                if (a[b] > 0) return true;
                a[b] = 1;
                d = a[b] > 0;
                a[b] = 0;
                return d
            },
            isOverAxis: function(a, b, d) {
                return a > b && a < b + d
            },
            isOver: function(a, b, d, e, h, i) {
                return c.ui.isOverAxis(a, d, h) &&
                c.ui.isOverAxis(b, e, i)
            }
        })
    }
})(jQuery);
;
/*!
 * jQuery UI Widget 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Widget
 */
 (function(b, j) {
    if (b.cleanData) {
        var k = b.cleanData;
        b.cleanData = function(a) {
            for (var c = 0, d; (d = a[c]) != null; c++) try {
                b(d).triggerHandler("remove")
            } catch(e) {}
            k(a)
        }
    } else {
        var l = b.fn.remove;
        b.fn.remove = function(a, c) {
            return this.each(function() {
                if (!c) if (!a || b.filter(a, [this]).length) b("*", this).add([this]).each(function() {
                    try {
                        b(this).triggerHandler("remove")
                    } catch(d) {}
                });
                return l.call(b(this), a, c)
            })
        }
    }
    b.widget = function(a, c, d) {
        var e = a.split(".")[0],
        f;
        a = a.split(".")[1];
        f = e + "-" + a;
        if (!d) {
            d = c;
            c = b.Widget
        }
        b.expr[":"][f] =
        function(h) {
            return !! b.data(h, a)
        };
        b[e] = b[e] || {};
        b[e][a] = function(h, g) {
            arguments.length && this._createWidget(h, g)
        };
        c = new c;
        c.options = b.extend(true, {},
        c.options);
        b[e][a].prototype = b.extend(true, c, {
            namespace: e,
            widgetName: a,
            widgetEventPrefix: b[e][a].prototype.widgetEventPrefix || a,
            widgetBaseClass: f
        },
        d);
        b.widget.bridge(a, b[e][a])
    };
    b.widget.bridge = function(a, c) {
        b.fn[a] = function(d) {
            var e = typeof d === "string",
            f = Array.prototype.slice.call(arguments, 1),
            h = this;
            d = !e && f.length ? b.extend.apply(null, [true, d].concat(f)) :
            d;
            if (e && d.charAt(0) === "_") return h;
            e ? this.each(function() {
                var g = b.data(this, a),
                i = g && b.isFunction(g[d]) ? g[d].apply(g, f) : g;
                if (i !== g && i !== j) {
                    h = i;
                    return false
                }
            }) : this.each(function() {
                var g = b.data(this, a);
                g ? g.option(d || {})._init() : b.data(this, a, new c(d, this))
            });
            return h
        }
    };
    b.Widget = function(a, c) {
        arguments.length && this._createWidget(a, c)
    };
    b.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        options: {
            disabled: false
        },
        _createWidget: function(a, c) {
            b.data(c, this.widgetName, this);
            this.element = b(c);
            this.options =
            b.extend(true, {},
            this.options, this._getCreateOptions(), a);
            var d = this;
            this.element.bind("remove." + this.widgetName,
            function() {
                d.destroy()
            });
            this._create();
            this._trigger("create");
            this._init()
        },
        _getCreateOptions: function() {
            return b.metadata && b.metadata.get(this.element[0])[this.widgetName]
        },
        _create: function() {},
        _init: function() {},
        destroy: function() {
            this.element.unbind("." + this.widgetName).removeData(this.widgetName);
            this.widget().unbind("." + this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass +
            "-disabled ui-state-disabled")
        },
        widget: function() {
            return this.element
        },
        option: function(a, c) {
            var d = a;
            if (arguments.length === 0) return b.extend({},
            this.options);
            if (typeof a === "string") {
                if (c === j) return this.options[a];
                d = {};
                d[a] = c
            }
            this._setOptions(d);
            return this
        },
        _setOptions: function(a) {
            var c = this;
            b.each(a,
            function(d, e) {
                c._setOption(d, e)
            });
            return this
        },
        _setOption: function(a, c) {
            this.options[a] = c;
            if (a === "disabled") this.widget()[c ? "addClass": "removeClass"](this.widgetBaseClass + "-disabled ui-state-disabled").attr("aria-disabled",
            c);
            return this
        },
        enable: function() {
            return this._setOption("disabled", false)
        },
        disable: function() {
            return this._setOption("disabled", true)
        },
        _trigger: function(a, c, d) {
            var e = this.options[a];
            c = b.Event(c);
            c.type = (a === this.widgetEventPrefix ? a: this.widgetEventPrefix + a).toLowerCase();
            d = d || {};
            if (c.originalEvent) {
                a = b.event.props.length;
                for (var f; a;) {
                    f = b.event.props[--a];
                    c[f] = c.originalEvent[f]
                }
            }
            this.element.trigger(c, d);
            return ! (b.isFunction(e) && e.call(this.element[0], c, d) === false || c.isDefaultPrevented())
        }
    }
})(jQuery);
;
/*!
 * jQuery UI Mouse 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Mouse
 *
 * Depends:
 *	jquery.ui.widget.js
 */
 (function(b) {
    var d = false;
    b(document).mouseup(function() {
        d = false
    });
    b.widget("ui.mouse", {
        options: {
            cancel: ":input,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var a = this;
            this.element.bind("mousedown." + this.widgetName,
            function(c) {
                return a._mouseDown(c)
            }).bind("click." + this.widgetName,
            function(c) {
                if (true === b.data(c.target, a.widgetName + ".preventClickEvent")) {
                    b.removeData(c.target, a.widgetName + ".preventClickEvent");
                    c.stopImmediatePropagation();
                    return false
                }
            });
            this.started = false
        },
        _mouseDestroy: function() {
            this.element.unbind("." +
            this.widgetName)
        },
        _mouseDown: function(a) {
            if (!d) {
                this._mouseStarted && this._mouseUp(a);
                this._mouseDownEvent = a;
                var c = this,
                f = a.which == 1,
                g = typeof this.options.cancel == "string" && a.target.nodeName ? b(a.target).closest(this.options.cancel).length: false;
                if (!f || g || !this._mouseCapture(a)) return true;
                this.mouseDelayMet = !this.options.delay;
                if (!this.mouseDelayMet) this._mouseDelayTimer = setTimeout(function() {
                    c.mouseDelayMet = true
                },
                this.options.delay);
                if (this._mouseDistanceMet(a) && this._mouseDelayMet(a)) {
                    this._mouseStarted =
                    this._mouseStart(a) !== false;
                    if (!this._mouseStarted) {
                        a.preventDefault();
                        return true
                    }
                }
                true === b.data(a.target, this.widgetName + ".preventClickEvent") && b.removeData(a.target, this.widgetName + ".preventClickEvent");
                this._mouseMoveDelegate = function(e) {
                    return c._mouseMove(e)
                };
                this._mouseUpDelegate = function(e) {
                    return c._mouseUp(e)
                };
                b(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate);
                a.preventDefault();
                return d = true
            }
        },
        _mouseMove: function(a) {
            if (b.browser.msie &&
            !(document.documentMode >= 9) && !a.button) return this._mouseUp(a);
            if (this._mouseStarted) {
                this._mouseDrag(a);
                return a.preventDefault()
            }
            if (this._mouseDistanceMet(a) && this._mouseDelayMet(a))(this._mouseStarted = this._mouseStart(this._mouseDownEvent, a) !== false) ? this._mouseDrag(a) : this._mouseUp(a);
            return ! this._mouseStarted
        },
        _mouseUp: function(a) {
            b(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
            if (this._mouseStarted) {
                this._mouseStarted =
                false;
                a.target == this._mouseDownEvent.target && b.data(a.target, this.widgetName + ".preventClickEvent", true);
                this._mouseStop(a)
            }
            return false
        },
        _mouseDistanceMet: function(a) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - a.pageX), Math.abs(this._mouseDownEvent.pageY - a.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return true
        }
    })
})(jQuery);
;
/*
 * jQuery UI Position 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Position
 */
 (function(c) {
    c.ui = c.ui || {};
    var n = /left|center|right/,
    o = /top|center|bottom/,
    t = c.fn.position,
    u = c.fn.offset;
    c.fn.position = function(b) {
        if (!b || !b.of) return t.apply(this, arguments);
        b = c.extend({},
        b);
        var a = c(b.of),
        d = a[0],
        g = (b.collision || "flip").split(" "),
        e = b.offset ? b.offset.split(" ") : [0, 0],
        h,
        k,
        j;
        if (d.nodeType === 9) {
            h = a.width();
            k = a.height();
            j = {
                top: 0,
                left: 0
            }
        } else if (d.setTimeout) {
            h = a.width();
            k = a.height();
            j = {
                top: a.scrollTop(),
                left: a.scrollLeft()
            }
        } else if (d.preventDefault) {
            b.at = "left top";
            h = k = 0;
            j = {
                top: b.of.pageY,
                left: b.of.pageX
            }
        } else {
            h = a.outerWidth();
            k = a.outerHeight();
            j = a.offset()
        }
        c.each(["my", "at"],
        function() {
            var f = (b[this] || "").split(" ");
            if (f.length === 1) f = n.test(f[0]) ? f.concat(["center"]) : o.test(f[0]) ? ["center"].concat(f) : ["center", "center"];
            f[0] = n.test(f[0]) ? f[0] : "center";
            f[1] = o.test(f[1]) ? f[1] : "center";
            b[this] = f
        });
        if (g.length === 1) g[1] = g[0];
        e[0] = parseInt(e[0], 10) || 0;
        if (e.length === 1) e[1] = e[0];
        e[1] = parseInt(e[1], 10) || 0;
        if (b.at[0] === "right") j.left += h;
        else if (b.at[0] === "center") j.left += h / 2;
        if (b.at[1] === "bottom") j.top +=
        k;
        else if (b.at[1] === "center") j.top += k / 2;
        j.left += e[0];
        j.top += e[1];
        return this.each(function() {
            var f = c(this),
            l = f.outerWidth(),
            m = f.outerHeight(),
            p = parseInt(c.curCSS(this, "marginLeft", true)) || 0,
            q = parseInt(c.curCSS(this, "marginTop", true)) || 0,
            v = l + p + (parseInt(c.curCSS(this, "marginRight", true)) || 0),
            w = m + q + (parseInt(c.curCSS(this, "marginBottom", true)) || 0),
            i = c.extend({},
            j),
            r;
            if (b.my[0] === "right") i.left -= l;
            else if (b.my[0] === "center") i.left -= l / 2;
            if (b.my[1] === "bottom") i.top -= m;
            else if (b.my[1] === "center") i.top -=
            m / 2;
            i.left = Math.round(i.left);
            i.top = Math.round(i.top);
            r = {
                left: i.left - p,
                top: i.top - q
            };
            c.each(["left", "top"],
            function(s, x) {
                c.ui.position[g[s]] && c.ui.position[g[s]][x](i, {
                    targetWidth: h,
                    targetHeight: k,
                    elemWidth: l,
                    elemHeight: m,
                    collisionPosition: r,
                    collisionWidth: v,
                    collisionHeight: w,
                    offset: e,
                    my: b.my,
                    at: b.at
                })
            });
            c.fn.bgiframe && f.bgiframe();
            f.offset(c.extend(i, {
                using: b.using
            }))
        })
    };
    c.ui.position = {
        fit: {
            left: function(b, a) {
                var d = c(window);
                d = a.collisionPosition.left + a.collisionWidth - d.width() - d.scrollLeft();
                b.left =
                d > 0 ? b.left - d: Math.max(b.left - a.collisionPosition.left, b.left)
            },
            top: function(b, a) {
                var d = c(window);
                d = a.collisionPosition.top + a.collisionHeight - d.height() - d.scrollTop();
                b.top = d > 0 ? b.top - d: Math.max(b.top - a.collisionPosition.top, b.top)
            }
        },
        flip: {
            left: function(b, a) {
                if (a.at[0] !== "center") {
                    var d = c(window);
                    d = a.collisionPosition.left + a.collisionWidth - d.width() - d.scrollLeft();
                    var g = a.my[0] === "left" ? -a.elemWidth: a.my[0] === "right" ? a.elemWidth: 0,
                    e = a.at[0] === "left" ? a.targetWidth: -a.targetWidth,
                    h = -2 * a.offset[0];
                    b.left +=
                    a.collisionPosition.left < 0 ? g + e + h: d > 0 ? g + e + h: 0
                }
            },
            top: function(b, a) {
                if (a.at[1] !== "center") {
                    var d = c(window);
                    d = a.collisionPosition.top + a.collisionHeight - d.height() - d.scrollTop();
                    var g = a.my[1] === "top" ? -a.elemHeight: a.my[1] === "bottom" ? a.elemHeight: 0,
                    e = a.at[1] === "top" ? a.targetHeight: -a.targetHeight,
                    h = -2 * a.offset[1];
                    b.top += a.collisionPosition.top < 0 ? g + e + h: d > 0 ? g + e + h: 0
                }
            }
        }
    };
    if (!c.offset.setOffset) {
        c.offset.setOffset = function(b, a) {
            if (/static/.test(c.curCSS(b, "position"))) b.style.position = "relative";
            var d = c(b),
            g = d.offset(),
            e = parseInt(c.curCSS(b, "top", true), 10) || 0,
            h = parseInt(c.curCSS(b, "left", true), 10) || 0;
            g = {
                top: a.top - g.top + e,
                left: a.left - g.left + h
            };
            "using" in a ? a.using.call(b, g) : d.css(g)
        };
        c.fn.offset = function(b) {
            var a = this[0];
            if (!a || !a.ownerDocument) return null;
            if (b) return this.each(function() {
                c.offset.setOffset(this, b)
            });
            return u.call(this)
        }
    }
})(jQuery);
;
/*
 * jQuery UI Sortable 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Sortables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
 (function(d) {
    d.widget("ui.sortable", d.ui.mouse, {
        widgetEventPrefix: "sort",
        options: {
            appendTo: "parent",
            axis: false,
            connectWith: false,
            containment: false,
            cursor: "auto",
            cursorAt: false,
            dropOnEmpty: true,
            forcePlaceholderSize: false,
            forceHelperSize: false,
            grid: false,
            handle: false,
            helper: "original",
            items: "> *",
            opacity: false,
            placeholder: false,
            revert: false,
            scroll: true,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1E3
        },
        _create: function() {
            var a = this.options;
            this.containerCache = {};
            this.element.addClass("ui-sortable");
            this.refresh();
            this.floating = this.items.length ? a.axis === "x" || /left|right/.test(this.items[0].item.css("float")) || /inline|table-cell/.test(this.items[0].item.css("display")) : false;
            this.offset = this.element.offset();
            this._mouseInit()
        },
        destroy: function() {
            this.element.removeClass("ui-sortable ui-sortable-disabled").removeData("sortable").unbind(".sortable");
            this._mouseDestroy();
            for (var a = this.items.length - 1; a >= 0; a--) this.items[a].item.removeData("sortable-item");
            return this
        },
        _setOption: function(a, b) {
            if (a ===
            "disabled") {
                this.options[a] = b;
                this.widget()[b ? "addClass": "removeClass"]("ui-sortable-disabled")
            } else d.Widget.prototype._setOption.apply(this, arguments)
        },
        _mouseCapture: function(a, b) {
            if (this.reverting) return false;
            if (this.options.disabled || this.options.type == "static") return false;
            this._refreshItems(a);
            var c = null,
            e = this;
            d(a.target).parents().each(function() {
                if (d.data(this, "sortable-item") == e) {
                    c = d(this);
                    return false
                }
            });
            if (d.data(a.target, "sortable-item") == e) c = d(a.target);
            if (!c) return false;
            if (this.options.handle &&
            !b) {
                var f = false;
                d(this.options.handle, c).find("*").andSelf().each(function() {
                    if (this == a.target) f = true
                });
                if (!f) return false
            }
            this.currentItem = c;
            this._removeCurrentsFromItems();
            return true
        },
        _mouseStart: function(a, b, c) {
            b = this.options;
            var e = this;
            this.currentContainer = this;
            this.refreshPositions();
            this.helper = this._createHelper(a);
            this._cacheHelperProportions();
            this._cacheMargins();
            this.scrollParent = this.helper.scrollParent();
            this.offset = this.currentItem.offset();
            this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            };
            this.helper.css("position", "absolute");
            this.cssPosition = this.helper.css("position");
            d.extend(this.offset, {
                click: {
                    left: a.pageX - this.offset.left,
                    top: a.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            });
            this.originalPosition = this._generatePosition(a);
            this.originalPageX = a.pageX;
            this.originalPageY = a.pageY;
            b.cursorAt && this._adjustOffsetFromHelper(b.cursorAt);
            this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            };
            this.helper[0] != this.currentItem[0] && this.currentItem.hide();
            this._createPlaceholder();
            b.containment && this._setContainment();
            if (b.cursor) {
                if (d("body").css("cursor")) this._storedCursor = d("body").css("cursor");
                d("body").css("cursor", b.cursor)
            }
            if (b.opacity) {
                if (this.helper.css("opacity")) this._storedOpacity = this.helper.css("opacity");
                this.helper.css("opacity", b.opacity)
            }
            if (b.zIndex) {
                if (this.helper.css("zIndex")) this._storedZIndex = this.helper.css("zIndex");
                this.helper.css("zIndex", b.zIndex)
            }
            if (this.scrollParent[0] !=
            document && this.scrollParent[0].tagName != "HTML") this.overflowOffset = this.scrollParent.offset();
            this._trigger("start", a, this._uiHash());
            this._preserveHelperProportions || this._cacheHelperProportions();
            if (!c) for (c = this.containers.length - 1; c >= 0; c--) this.containers[c]._trigger("activate", a, e._uiHash(this));
            if (d.ui.ddmanager) d.ui.ddmanager.current = this;
            d.ui.ddmanager && !b.dropBehaviour && d.ui.ddmanager.prepareOffsets(this, a);
            this.dragging = true;
            this.helper.addClass("ui-sortable-helper");
            this._mouseDrag(a);
            return true
        },
        _mouseDrag: function(a) {
            this.position = this._generatePosition(a);
            this.positionAbs = this._convertPositionTo("absolute");
            if (!this.lastPositionAbs) this.lastPositionAbs = this.positionAbs;
            if (this.options.scroll) {
                var b = this.options,
                c = false;
                if (this.scrollParent[0] != document && this.scrollParent[0].tagName != "HTML") {
                    if (this.overflowOffset.top + this.scrollParent[0].offsetHeight - a.pageY < b.scrollSensitivity) this.scrollParent[0].scrollTop = c = this.scrollParent[0].scrollTop + b.scrollSpeed;
                    else if (a.pageY - this.overflowOffset.top <
                    b.scrollSensitivity) this.scrollParent[0].scrollTop = c = this.scrollParent[0].scrollTop - b.scrollSpeed;
                    if (this.overflowOffset.left + this.scrollParent[0].offsetWidth - a.pageX < b.scrollSensitivity) this.scrollParent[0].scrollLeft = c = this.scrollParent[0].scrollLeft + b.scrollSpeed;
                    else if (a.pageX - this.overflowOffset.left < b.scrollSensitivity) this.scrollParent[0].scrollLeft = c = this.scrollParent[0].scrollLeft - b.scrollSpeed
                } else {
                    if (a.pageY - d(document).scrollTop() < b.scrollSensitivity) c = d(document).scrollTop(d(document).scrollTop() -
                    b.scrollSpeed);
                    else if (d(window).height() - (a.pageY - d(document).scrollTop()) < b.scrollSensitivity) c = d(document).scrollTop(d(document).scrollTop() + b.scrollSpeed);
                    if (a.pageX - d(document).scrollLeft() < b.scrollSensitivity) c = d(document).scrollLeft(d(document).scrollLeft() - b.scrollSpeed);
                    else if (d(window).width() - (a.pageX - d(document).scrollLeft()) < b.scrollSensitivity) c = d(document).scrollLeft(d(document).scrollLeft() + b.scrollSpeed)
                }
                c !== false && d.ui.ddmanager && !b.dropBehaviour && d.ui.ddmanager.prepareOffsets(this,
                a)
            }
            this.positionAbs = this._convertPositionTo("absolute");
            if (!this.options.axis || this.options.axis != "y") this.helper[0].style.left = this.position.left + "px";
            if (!this.options.axis || this.options.axis != "x") this.helper[0].style.top = this.position.top + "px";
            for (b = this.items.length - 1; b >= 0; b--) {
                c = this.items[b];
                var e = c.item[0],
                f = this._intersectsWithPointer(c);
                if (f) if (e != this.currentItem[0] && this.placeholder[f == 1 ? "next": "prev"]()[0] != e && !d.ui.contains(this.placeholder[0], e) && (this.options.type == "semi-dynamic" ? !d.ui.contains(this.element[0],
                e) : true)) {
                    this.direction = f == 1 ? "down": "up";
                    if (this.options.tolerance == "pointer" || this._intersectsWithSides(c)) this._rearrange(a, c);
                    else break;
                    this._trigger("change", a, this._uiHash());
                    break
                }
            }
            this._contactContainers(a);
            d.ui.ddmanager && d.ui.ddmanager.drag(this, a);
            this._trigger("sort", a, this._uiHash());
            this.lastPositionAbs = this.positionAbs;
            return false
        },
        _mouseStop: function(a, b) {
            if (a) {
                d.ui.ddmanager && !this.options.dropBehaviour && d.ui.ddmanager.drop(this, a);
                if (this.options.revert) {
                    var c = this;
                    b = c.placeholder.offset();
                    c.reverting = true;
                    d(this.helper).animate({
                        left: b.left - this.offset.parent.left - c.margins.left + (this.offsetParent[0] == document.body ? 0: this.offsetParent[0].scrollLeft),
                        top: b.top - this.offset.parent.top - c.margins.top + (this.offsetParent[0] == document.body ? 0: this.offsetParent[0].scrollTop)
                    },
                    parseInt(this.options.revert, 10) || 500,
                    function() {
                        c._clear(a)
                    })
                } else this._clear(a, b);
                return false
            }
        },
        cancel: function() {
            var a = this;
            if (this.dragging) {
                this._mouseUp({
                    target: null
                });
                this.options.helper == "original" ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") :
                this.currentItem.show();
                for (var b = this.containers.length - 1; b >= 0; b--) {
                    this.containers[b]._trigger("deactivate", null, a._uiHash(this));
                    if (this.containers[b].containerCache.over) {
                        this.containers[b]._trigger("out", null, a._uiHash(this));
                        this.containers[b].containerCache.over = 0
                    }
                }
            }
            if (this.placeholder) {
                this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
                this.options.helper != "original" && this.helper && this.helper[0].parentNode && this.helper.remove();
                d.extend(this, {
                    helper: null,
                    dragging: false,
                    reverting: false,
                    _noFinalSort: null
                });
                this.domPosition.prev ? d(this.domPosition.prev).after(this.currentItem) : d(this.domPosition.parent).prepend(this.currentItem)
            }
            return this
        },
        serialize: function(a) {
            var b = this._getItemsAsjQuery(a && a.connected),
            c = [];
            a = a || {};
            d(b).each(function() {
                var e = (d(a.item || this).attr(a.attribute || "id") || "").match(a.expression || /(.+)[-=_](.+)/);
                if (e) c.push((a.key || e[1] + "[]") + "=" + (a.key && a.expression ? e[1] : e[2]))
            }); ! c.length && a.key && c.push(a.key + "=");
            return c.join("&")
        },
        toArray: function(a) {
            var b = this._getItemsAsjQuery(a && a.connected),
            c = [];
            a = a || {};
            b.each(function() {
                c.push(d(a.item || this).attr(a.attribute || "id") || "")
            });
            return c
        },
        _intersectsWith: function(a) {
            var b = this.positionAbs.left,
            c = b + this.helperProportions.width,
            e = this.positionAbs.top,
            f = e + this.helperProportions.height,
            g = a.left,
            h = g + a.width,
            i = a.top,
            k = i + a.height,
            j = this.offset.click.top,
            l = this.offset.click.left;
            j = e + j > i && e + j < k && b + l > g && b + l < h;
            return this.options.tolerance == "pointer" || this.options.forcePointerForContainers ||
            this.options.tolerance != "pointer" && this.helperProportions[this.floating ? "width": "height"] > a[this.floating ? "width": "height"] ? j: g < b + this.helperProportions.width / 2 && c - this.helperProportions.width / 2 < h && i < e + this.helperProportions.height / 2 && f - this.helperProportions.height / 2 < k
        },
        _intersectsWithPointer: function(a) {
            var b = d.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, a.top, a.height);
            a = d.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, a.left, a.width);
            b = b && a;
            a = this._getDragVerticalDirection();
            var c = this._getDragHorizontalDirection();
            if (!b) return false;
            return this.floating ? c && c == "right" || a == "down" ? 2: 1: a && (a == "down" ? 2: 1)
        },
        _intersectsWithSides: function(a) {
            var b = d.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, a.top + a.height / 2, a.height);
            a = d.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, a.left + a.width / 2, a.width);
            var c = this._getDragVerticalDirection(),
            e = this._getDragHorizontalDirection();
            return this.floating && e ? e == "right" && a || e == "left" && !a: c && (c == "down" && b || c == "up" && !b)
        },
        _getDragVerticalDirection: function() {
            var a = this.positionAbs.top - this.lastPositionAbs.top;
            return a != 0 && (a > 0 ? "down": "up")
        },
        _getDragHorizontalDirection: function() {
            var a = this.positionAbs.left - this.lastPositionAbs.left;
            return a != 0 && (a > 0 ? "right": "left")
        },
        refresh: function(a) {
            this._refreshItems(a);
            this.refreshPositions();
            return this
        },
        _connectWith: function() {
            var a = this.options;
            return a.connectWith.constructor == String ? [a.connectWith] : a.connectWith
        },
        _getItemsAsjQuery: function(a) {
            var b = [],
            c = [],
            e = this._connectWith();
            if (e && a) for (a = e.length - 1; a >= 0; a--) for (var f = d(e[a]), g = f.length - 1; g >= 0; g--) {
                var h = d.data(f[g], "sortable");
                if (h && h != this && !h.options.disabled) c.push([d.isFunction(h.options.items) ? h.options.items.call(h.element) : d(h.options.items, h.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), h])
            }
            c.push([d.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : d(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),
            this]);
            for (a = c.length - 1; a >= 0; a--) c[a][0].each(function() {
                b.push(this)
            });
            return d(b)
        },
        _removeCurrentsFromItems: function() {
            for (var a = this.currentItem.find(":data(sortable-item)"), b = 0; b < this.items.length; b++) for (var c = 0; c < a.length; c++) a[c] == this.items[b].item[0] && this.items.splice(b, 1)
        },
        _refreshItems: function(a) {
            this.items = [];
            this.containers = [this];
            var b = this.items,
            c = [[d.isFunction(this.options.items) ? this.options.items.call(this.element[0], a, {
                item: this.currentItem
            }) : d(this.options.items, this.element),
            this]],
            e = this._connectWith();
            if (e) for (var f = e.length - 1; f >= 0; f--) for (var g = d(e[f]), h = g.length - 1; h >= 0; h--) {
                var i = d.data(g[h], "sortable");
                if (i && i != this && !i.options.disabled) {
                    c.push([d.isFunction(i.options.items) ? i.options.items.call(i.element[0], a, {
                        item: this.currentItem
                    }) : d(i.options.items, i.element), i]);
                    this.containers.push(i)
                }
            }
            for (f = c.length - 1; f >= 0; f--) {
                a = c[f][1];
                e = c[f][0];
                h = 0;
                for (g = e.length; h < g; h++) {
                    i = d(e[h]);
                    i.data("sortable-item", a);
                    b.push({
                        item: i,
                        instance: a,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    })
                }
            }
        },
        refreshPositions: function(a) {
            if (this.offsetParent &&
            this.helper) this.offset.parent = this._getParentOffset();
            for (var b = this.items.length - 1; b >= 0; b--) {
                var c = this.items[b];
                if (! (c.instance != this.currentContainer && this.currentContainer && c.item[0] != this.currentItem[0])) {
                    var e = this.options.toleranceElement ? d(this.options.toleranceElement, c.item) : c.item;
                    if (!a) {
                        c.width = e.outerWidth();
                        c.height = e.outerHeight()
                    }
                    e = e.offset();
                    c.left = e.left;
                    c.top = e.top
                }
            }
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
            else for (b =
            this.containers.length - 1; b >= 0; b--) {
                e = this.containers[b].element.offset();
                this.containers[b].containerCache.left = e.left;
                this.containers[b].containerCache.top = e.top;
                this.containers[b].containerCache.width = this.containers[b].element.outerWidth();
                this.containers[b].containerCache.height = this.containers[b].element.outerHeight()
            }
            return this
        },
        _createPlaceholder: function(a) {
            var b = a || this,
            c = b.options;
            if (!c.placeholder || c.placeholder.constructor == String) {
                var e = c.placeholder;
                c.placeholder = {
                    element: function() {
                        var f =
                        d(document.createElement(b.currentItem[0].nodeName)).addClass(e || b.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
                        if (!e) f.style.visibility = "hidden";
                        return f
                    },
                    update: function(f, g) {
                        if (! (e && !c.forcePlaceholderSize)) {
                            g.height() || g.height(b.currentItem.innerHeight() - parseInt(b.currentItem.css("paddingTop") || 0, 10) - parseInt(b.currentItem.css("paddingBottom") || 0, 10));
                            g.width() || g.width(b.currentItem.innerWidth() - parseInt(b.currentItem.css("paddingLeft") || 0, 10) - parseInt(b.currentItem.css("paddingRight") ||
                            0, 10))
                        }
                    }
                }
            }
            b.placeholder = d(c.placeholder.element.call(b.element, b.currentItem));
            b.currentItem.after(b.placeholder);
            c.placeholder.update(b, b.placeholder)
        },
        _contactContainers: function(a) {
            for (var b = null, c = null, e = this.containers.length - 1; e >= 0; e--) if (!d.ui.contains(this.currentItem[0], this.containers[e].element[0])) if (this._intersectsWith(this.containers[e].containerCache)) {
                if (! (b && d.ui.contains(this.containers[e].element[0], b.element[0]))) {
                    b = this.containers[e];
                    c = e
                }
            } else if (this.containers[e].containerCache.over) {
                this.containers[e]._trigger("out",
                a, this._uiHash(this));
                this.containers[e].containerCache.over = 0
            }
            if (b) if (this.containers.length === 1) {
                this.containers[c]._trigger("over", a, this._uiHash(this));
                this.containers[c].containerCache.over = 1
            } else if (this.currentContainer != this.containers[c]) {
                b = 1E4;
                e = null;
                for (var f = this.positionAbs[this.containers[c].floating ? "left": "top"], g = this.items.length - 1; g >= 0; g--) if (d.ui.contains(this.containers[c].element[0], this.items[g].item[0])) {
                    var h = this.items[g][this.containers[c].floating ? "left": "top"];
                    if (Math.abs(h -
                    f) < b) {
                        b = Math.abs(h - f);
                        e = this.items[g]
                    }
                }
                if (e || this.options.dropOnEmpty) {
                    this.currentContainer = this.containers[c];
                    e ? this._rearrange(a, e, null, true) : this._rearrange(a, null, this.containers[c].element, true);
                    this._trigger("change", a, this._uiHash());
                    this.containers[c]._trigger("change", a, this._uiHash(this));
                    this.options.placeholder.update(this.currentContainer, this.placeholder);
                    this.containers[c]._trigger("over", a, this._uiHash(this));
                    this.containers[c].containerCache.over = 1
                }
            }
        },
        _createHelper: function(a) {
            var b =
            this.options;
            a = d.isFunction(b.helper) ? d(b.helper.apply(this.element[0], [a, this.currentItem])) : b.helper == "clone" ? this.currentItem.clone() : this.currentItem;
            a.parents("body").length || d(b.appendTo != "parent" ? b.appendTo: this.currentItem[0].parentNode)[0].appendChild(a[0]);
            if (a[0] == this.currentItem[0]) this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            };
            if (a[0].style.width ==
            "" || b.forceHelperSize) a.width(this.currentItem.width());
            if (a[0].style.height == "" || b.forceHelperSize) a.height(this.currentItem.height());
            return a
        },
        _adjustOffsetFromHelper: function(a) {
            if (typeof a == "string") a = a.split(" ");
            if (d.isArray(a)) a = {
                left: +a[0],
                top: +a[1] || 0
            };
            if ("left" in a) this.offset.click.left = a.left + this.margins.left;
            if ("right" in a) this.offset.click.left = this.helperProportions.width - a.right + this.margins.left;
            if ("top" in a) this.offset.click.top = a.top + this.margins.top;
            if ("bottom" in a) this.offset.click.top =
            this.helperProportions.height - a.bottom + this.margins.top
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var a = this.offsetParent.offset();
            if (this.cssPosition == "absolute" && this.scrollParent[0] != document && d.ui.contains(this.scrollParent[0], this.offsetParent[0])) {
                a.left += this.scrollParent.scrollLeft();
                a.top += this.scrollParent.scrollTop()
            }
            if (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && d.browser.msie) a =
            {
                top: 0,
                left: 0
            };
            return {
                top: a.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: a.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if (this.cssPosition == "relative") {
                var a = this.currentItem.position();
                return {
                    top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            } else return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"),
                10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var a = this.options;
            if (a.containment == "parent") a.containment = this.helper[0].parentNode;
            if (a.containment == "document" || a.containment == "window") this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, d(a.containment == "document" ?
            document: window).width() - this.helperProportions.width - this.margins.left, (d(a.containment == "document" ? document: window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
            if (!/^(document|window|parent)$/.test(a.containment)) {
                var b = d(a.containment)[0];
                a = d(a.containment).offset();
                var c = d(b).css("overflow") != "hidden";
                this.containment = [a.left + (parseInt(d(b).css("borderLeftWidth"), 10) || 0) + (parseInt(d(b).css("paddingLeft"), 10) || 0) - this.margins.left, a.top + (parseInt(d(b).css("borderTopWidth"),
                10) || 0) + (parseInt(d(b).css("paddingTop"), 10) || 0) - this.margins.top, a.left + (c ? Math.max(b.scrollWidth, b.offsetWidth) : b.offsetWidth) - (parseInt(d(b).css("borderLeftWidth"), 10) || 0) - (parseInt(d(b).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, a.top + (c ? Math.max(b.scrollHeight, b.offsetHeight) : b.offsetHeight) - (parseInt(d(b).css("borderTopWidth"), 10) || 0) - (parseInt(d(b).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
            }
        },
        _convertPositionTo: function(a, b) {
            if (!b) b =
            this.position;
            a = a == "absolute" ? 1: -1;
            var c = this.cssPosition == "absolute" && !(this.scrollParent[0] != document && d.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent: this.scrollParent,
            e = /(html|body)/i.test(c[0].tagName);
            return {
                top: b.top + this.offset.relative.top * a + this.offset.parent.top * a - (d.browser.safari && this.cssPosition == "fixed" ? 0: (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : e ? 0: c.scrollTop()) * a),
                left: b.left + this.offset.relative.left * a + this.offset.parent.left * a - (d.browser.safari &&
                this.cssPosition == "fixed" ? 0: (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : e ? 0: c.scrollLeft()) * a)
            }
        },
        _generatePosition: function(a) {
            var b = this.options,
            c = this.cssPosition == "absolute" && !(this.scrollParent[0] != document && d.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent: this.scrollParent,
            e = /(html|body)/i.test(c[0].tagName);
            if (this.cssPosition == "relative" && !(this.scrollParent[0] != document && this.scrollParent[0] != this.offsetParent[0])) this.offset.relative = this._getRelativeOffset();
            var f = a.pageX,
            g = a.pageY;
            if (this.originalPosition) {
                if (this.containment) {
                    if (a.pageX - this.offset.click.left < this.containment[0]) f = this.containment[0] + this.offset.click.left;
                    if (a.pageY - this.offset.click.top < this.containment[1]) g = this.containment[1] + this.offset.click.top;
                    if (a.pageX - this.offset.click.left > this.containment[2]) f = this.containment[2] + this.offset.click.left;
                    if (a.pageY - this.offset.click.top > this.containment[3]) g = this.containment[3] + this.offset.click.top
                }
                if (b.grid) {
                    g = this.originalPageY + Math.round((g -
                    this.originalPageY) / b.grid[1]) * b.grid[1];
                    g = this.containment ? !(g - this.offset.click.top < this.containment[1] || g - this.offset.click.top > this.containment[3]) ? g: !(g - this.offset.click.top < this.containment[1]) ? g - b.grid[1] : g + b.grid[1] : g;
                    f = this.originalPageX + Math.round((f - this.originalPageX) / b.grid[0]) * b.grid[0];
                    f = this.containment ? !(f - this.offset.click.left < this.containment[0] || f - this.offset.click.left > this.containment[2]) ? f: !(f - this.offset.click.left < this.containment[0]) ? f - b.grid[0] : f + b.grid[0] : f
                }
            }
            return {
                top: g -
                this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (d.browser.safari && this.cssPosition == "fixed" ? 0: this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : e ? 0: c.scrollTop()),
                left: f - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (d.browser.safari && this.cssPosition == "fixed" ? 0: this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : e ? 0: c.scrollLeft())
            }
        },
        _rearrange: function(a, b, c, e) {
            c ? c[0].appendChild(this.placeholder[0]) : b.item[0].parentNode.insertBefore(this.placeholder[0],
            this.direction == "down" ? b.item[0] : b.item[0].nextSibling);
            this.counter = this.counter ? ++this.counter: 1;
            var f = this,
            g = this.counter;
            window.setTimeout(function() {
                g == f.counter && f.refreshPositions(!e)
            },
            0)
        },
        _clear: function(a, b) {
            this.reverting = false;
            var c = []; ! this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem);
            this._noFinalSort = null;
            if (this.helper[0] == this.currentItem[0]) {
                for (var e in this._storedCSS) if (this._storedCSS[e] == "auto" || this._storedCSS[e] == "static") this._storedCSS[e] =
                "";
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else this.currentItem.show();
            this.fromOutside && !b && c.push(function(f) {
                this._trigger("receive", f, this._uiHash(this.fromOutside))
            });
            if ((this.fromOutside || this.domPosition.prev != this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent != this.currentItem.parent()[0]) && !b) c.push(function(f) {
                this._trigger("update", f, this._uiHash())
            });
            if (!d.ui.contains(this.element[0], this.currentItem[0])) {
                b || c.push(function(f) {
                    this._trigger("remove",
                    f, this._uiHash())
                });
                for (e = this.containers.length - 1; e >= 0; e--) if (d.ui.contains(this.containers[e].element[0], this.currentItem[0]) && !b) {
                    c.push(function(f) {
                        return function(g) {
                            f._trigger("receive", g, this._uiHash(this))
                        }
                    }.call(this, this.containers[e]));
                    c.push(function(f) {
                        return function(g) {
                            f._trigger("update", g, this._uiHash(this))
                        }
                    }.call(this, this.containers[e]))
                }
            }
            for (e = this.containers.length - 1; e >= 0; e--) {
                b || c.push(function(f) {
                    return function(g) {
                        f._trigger("deactivate", g, this._uiHash(this))
                    }
                }.call(this,
                this.containers[e]));
                if (this.containers[e].containerCache.over) {
                    c.push(function(f) {
                        return function(g) {
                            f._trigger("out", g, this._uiHash(this))
                        }
                    }.call(this, this.containers[e]));
                    this.containers[e].containerCache.over = 0
                }
            }
            this._storedCursor && d("body").css("cursor", this._storedCursor);
            this._storedOpacity && this.helper.css("opacity", this._storedOpacity);
            if (this._storedZIndex) this.helper.css("zIndex", this._storedZIndex == "auto" ? "": this._storedZIndex);
            this.dragging = false;
            if (this.cancelHelperRemoval) {
                if (!b) {
                    this._trigger("beforeStop",
                    a, this._uiHash());
                    for (e = 0; e < c.length; e++) c[e].call(this, a);
                    this._trigger("stop", a, this._uiHash())
                }
                return false
            }
            b || this._trigger("beforeStop", a, this._uiHash());
            this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
            this.helper[0] != this.currentItem[0] && this.helper.remove();
            this.helper = null;
            if (!b) {
                for (e = 0; e < c.length; e++) c[e].call(this, a);
                this._trigger("stop", a, this._uiHash())
            }
            this.fromOutside = false;
            return true
        },
        _trigger: function() {
            d.Widget.prototype._trigger.apply(this, arguments) === false && this.cancel()
        },
        _uiHash: function(a) {
            var b = a || this;
            return {
                helper: b.helper,
                placeholder: b.placeholder || d([]),
                position: b.position,
                originalPosition: b.originalPosition,
                offset: b.positionAbs,
                item: b.currentItem,
                sender: a ? a.element: null
            }
        }
    });
    d.extend(d.ui.sortable, {
        version: "1.8.16"
    })
})(jQuery);
;
/*
 * jQuery UI Autocomplete 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Autocomplete
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	jquery.ui.position.js
 */
 (function(d) {
    var e = 0;
    d.widget("ui.autocomplete", {
        options: {
            appendTo: "body",
            autoFocus: false,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null
        },
        pending: 0,
        _create: function() {
            var a = this,
            b = this.element[0].ownerDocument,
            g;
            this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off").attr({
                role: "textbox",
                "aria-autocomplete": "list",
                "aria-haspopup": "true"
            }).bind("keydown.autocomplete",
            function(c) {
                if (! (a.options.disabled || a.element.propAttr("readOnly"))) {
                    g =
                    false;
                    var f = d.ui.keyCode;
                    switch (c.keyCode) {
                    case f.PAGE_UP:
                        a._move("previousPage", c);
                        break;
                    case f.PAGE_DOWN:
                        a._move("nextPage", c);
                        break;
                    case f.UP:
                        a._move("previous", c);
                        c.preventDefault();
                        break;
                    case f.DOWN:
                        a._move("next", c);
                        c.preventDefault();
                        break;
                    case f.ENTER:
                    case f.NUMPAD_ENTER:
                        if (a.menu.active) {
                            g = true;
                            c.preventDefault()
                        }
                    case f.TAB:
                        if (!a.menu.active) return;
                        a.menu.select(c);
                        break;
                    case f.ESCAPE:
                        a.element.val(a.term);
                        a.close(c);
                        break;
                    default:
                        clearTimeout(a.searching);
                        a.searching = setTimeout(function() {
                            if (a.term !=
                            a.element.val()) {
                                a.selectedItem = null;
                                a.search(null, c)
                            }
                        },
                        a.options.delay);
                        break
                    }
                }
            }).bind("keypress.autocomplete",
            function(c) {
                if (g) {
                    g = false;
                    c.preventDefault()
                }
            }).bind("focus.autocomplete",
            function() {
                if (!a.options.disabled) {
                    a.selectedItem = null;
                    a.previous = a.element.val()
                }
            }).bind("blur.autocomplete",
            function(c) {
                if (!a.options.disabled) {
                    clearTimeout(a.searching);
                    a.closing = setTimeout(function() {
                        a.close(c);
                        a._change(c)
                    },
                    150)
                }
            });
            this._initSource();
            this.response = function() {
                return a._response.apply(a, arguments)
            };
            this.menu = d("<ul></ul>").addClass("ui-autocomplete").appendTo(d(this.options.appendTo || "body", b)[0]).mousedown(function(c) {
                var f = a.menu.element[0];
                d(c.target).closest(".ui-menu-item").length || setTimeout(function() {
                    d(document).one("mousedown",
                    function(h) {
                        h.target !== a.element[0] && h.target !== f && !d.ui.contains(f, h.target) && a.close()
                    })
                },
                1);
                setTimeout(function() {
                    clearTimeout(a.closing)
                },
                13)
            }).menu({
                focus: function(c, f) {
                    f = f.item.data("item.autocomplete");
                    false !== a._trigger("focus", c, {
                        item: f
                    }) && /^key/.test(c.originalEvent.type) &&
                    a.element.val(f.value)
                },
                selected: function(c, f) {
                    var h = f.item.data("item.autocomplete"),
                    i = a.previous;
                    if (a.element[0] !== b.activeElement) {
                        a.element.focus();
                        a.previous = i;
                        setTimeout(function() {
                            a.previous = i;
                            a.selectedItem = h
                        },
                        1)
                    }
                    false !== a._trigger("select", c, {
                        item: h
                    }) && a.element.val(h.value);
                    a.term = a.element.val();
                    a.close(c);
                    a.selectedItem = h
                },
                blur: function() {
                    a.menu.element.is(":visible") && a.element.val() !== a.term && a.element.val(a.term)
                }
            }).zIndex(this.element.zIndex() + 1).css({
                top: 0,
                left: 0
            }).hide().data("menu");
            d.fn.bgiframe && this.menu.element.bgiframe()
        },
        destroy: function() {
            this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup");
            this.menu.element.remove();
            d.Widget.prototype.destroy.call(this)
        },
        _setOption: function(a, b) {
            d.Widget.prototype._setOption.apply(this, arguments);
            a === "source" && this._initSource();
            if (a === "appendTo") this.menu.element.appendTo(d(b || "body", this.element[0].ownerDocument)[0]);
            a === "disabled" &&
            b && this.xhr && this.xhr.abort()
        },
        _initSource: function() {
            var a = this,
            b,
            g;
            if (d.isArray(this.options.source)) {
                b = this.options.source;
                this.source = function(c, f) {
                    f(d.ui.autocomplete.filter(b, c.term))
                }
            } else if (typeof this.options.source === "string") {
                g = this.options.source;
                this.source = function(c, f) {
                    a.xhr && a.xhr.abort();
                    a.xhr = d.ajax({
                        url: g,
                        data: c,
                        dataType: "json",
                        autocompleteRequest: ++e,
                        success: function(h) {
                            this.autocompleteRequest === e && f(h)
                        },
                        error: function() {
                            this.autocompleteRequest === e && f([])
                        }
                    })
                }
            } else this.source =
            this.options.source
        },
        search: function(a, b) {
            a = a != null ? a: this.element.val();
            this.term = this.element.val();
            if (a.length < this.options.minLength) return this.close(b);
            clearTimeout(this.closing);
            if (this._trigger("search", b) !== false) return this._search(a)
        },
        _search: function(a) {
            this.pending++;
            this.element.addClass("ui-autocomplete-loading");
            this.source({
                term: a
            },
            this.response)
        },
        _response: function(a) {
            if (!this.options.disabled && a && a.length) {
                a = this._normalize(a);
                this._suggest(a);
                this._trigger("open")
            } else this.close();
            this.pending--;
            this.pending || this.element.removeClass("ui-autocomplete-loading")
        },
        close: function(a) {
            clearTimeout(this.closing);
            if (this.menu.element.is(":visible")) {
                this.menu.element.hide();
                this.menu.deactivate();
                this._trigger("close", a)
            }
        },
        _change: function(a) {
            this.previous !== this.element.val() && this._trigger("change", a, {
                item: this.selectedItem
            })
        },
        _normalize: function(a) {
            if (a.length && a[0].label && a[0].value) return a;
            return d.map(a,
            function(b) {
                if (typeof b === "string") return {
                    label: b,
                    value: b
                };
                return d.extend({
                    label: b.label ||
                    b.value,
                    value: b.value || b.label
                },
                b)
            })
        },
        _suggest: function(a) {
            var b = this.menu.element.empty().zIndex(this.element.zIndex() + 1);
            this._renderMenu(b, a);
            this.menu.deactivate();
            this.menu.refresh();
            b.show();
            this._resizeMenu();
            b.position(d.extend({
                of: this.element
            },
            this.options.position));
            this.options.autoFocus && this.menu.next(new d.Event("mouseover"))
        },
        _resizeMenu: function() {
            var a = this.menu.element;
            a.outerWidth(Math.max(a.width("").outerWidth(), this.element.outerWidth()))
        },
        _renderMenu: function(a, b) {
            var g = this;
            d.each(b,
            function(c, f) {
                g._renderItem(a, f)
            })
        },
        _renderItem: function(a, b) {
            return d("<li></li>").data("item.autocomplete", b).append(d("<a></a>").text(b.label)).appendTo(a)
        },
        _move: function(a, b) {
            if (this.menu.element.is(":visible")) if (this.menu.first() && /^previous/.test(a) || this.menu.last() && /^next/.test(a)) {
                this.element.val(this.term);
                this.menu.deactivate()
            } else this.menu[a](b);
            else this.search(null, b)
        },
        widget: function() {
            return this.menu.element
        }
    });
    d.extend(d.ui.autocomplete, {
        escapeRegex: function(a) {
            return a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,
            "\\$&")
        },
        filter: function(a, b) {
            var g = new RegExp(d.ui.autocomplete.escapeRegex(b), "i");
            return d.grep(a,
            function(c) {
                return g.test(c.label || c.value || c)
            })
        }
    })
})(jQuery);
 (function(d) {
    d.widget("ui.menu", {
        _create: function() {
            var e = this;
            this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({
                role: "listbox",
                "aria-activedescendant": "ui-active-menuitem"
            }).click(function(a) {
                if (d(a.target).closest(".ui-menu-item a").length) {
                    a.preventDefault();
                    e.select(a)
                }
            });
            this.refresh()
        },
        refresh: function() {
            var e = this;
            this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "menuitem").children("a").addClass("ui-corner-all").attr("tabindex",
            -1).mouseenter(function(a) {
                e.activate(a, d(this).parent())
            }).mouseleave(function() {
                e.deactivate()
            })
        },
        activate: function(e, a) {
            this.deactivate();
            if (this.hasScroll()) {
                var b = a.offset().top - this.element.offset().top,
                g = this.element.scrollTop(),
                c = this.element.height();
                if (b < 0) this.element.scrollTop(g + b);
                else b >= c && this.element.scrollTop(g + b - c + a.height())
            }
            this.active = a.eq(0).children("a").addClass("ui-state-hover").attr("id", "ui-active-menuitem").end();
            this._trigger("focus", e, {
                item: a
            })
        },
        deactivate: function() {
            if (this.active) {
                this.active.children("a").removeClass("ui-state-hover").removeAttr("id");
                this._trigger("blur");
                this.active = null
            }
        },
        next: function(e) {
            this.move("next", ".ui-menu-item:first", e)
        },
        previous: function(e) {
            this.move("prev", ".ui-menu-item:last", e)
        },
        first: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        last: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        move: function(e, a, b) {
            if (this.active) {
                e = this.active[e + "All"](".ui-menu-item").eq(0);
                e.length ? this.activate(b, e) : this.activate(b, this.element.children(a))
            } else this.activate(b,
            this.element.children(a))
        },
        nextPage: function(e) {
            if (this.hasScroll()) if (!this.active || this.last()) this.activate(e, this.element.children(".ui-menu-item:first"));
            else {
                var a = this.active.offset().top,
                b = this.element.height(),
                g = this.element.children(".ui-menu-item").filter(function() {
                    var c = d(this).offset().top - a - b + d(this).height();
                    return c < 10 && c > -10
                });
                g.length || (g = this.element.children(".ui-menu-item:last"));
                this.activate(e, g)
            } else this.activate(e, this.element.children(".ui-menu-item").filter(!this.active ||
            this.last() ? ":first": ":last"))
        },
        previousPage: function(e) {
            if (this.hasScroll()) if (!this.active || this.first()) this.activate(e, this.element.children(".ui-menu-item:last"));
            else {
                var a = this.active.offset().top,
                b = this.element.height();
                result = this.element.children(".ui-menu-item").filter(function() {
                    var g = d(this).offset().top - a + b - d(this).height();
                    return g < 10 && g > -10
                });
                result.length || (result = this.element.children(".ui-menu-item:first"));
                this.activate(e, result)
            } else this.activate(e, this.element.children(".ui-menu-item").filter(!this.active ||
            this.first() ? ":last": ":first"))
        },
        hasScroll: function() {
            return this.element.height() < this.element[d.fn.prop ? "prop": "attr"]("scrollHeight")
        },
        select: function(e) {
            this._trigger("selected", e, {
                item: this.active
            })
        }
    })
})(jQuery);
;

; (function(a) {
    var r = a.fn.domManip,
    d = "_tmplitem",
    q = /^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,
    b = {},
    f = {},
    e,
    p = {
        key: 0,
        data: {}
    },
    h = 0,
    c = 0,
    l = [];
    function g(e, d, g, i) {
        var c = {
            data: i || (d ? d.data: {}),
            _wrap: d ? d._wrap: null,
            tmpl: null,
            parent: d || null,
            nodes: [],
            calls: u,
            nest: w,
            wrap: x,
            html: v,
            update: t
        };
        e && a.extend(c, e, {
            nodes: [],
            parent: d
        });
        if (g) {
            c.tmpl = g;
            c._ctnt = c._ctnt || c.tmpl(a, c);
            c.key = ++h; (l.length ? f: b)[h] = c
        }
        return c
    }
    a.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    },
    function(f, d) {
        a.fn[f] = function(n) {
            var g = [],
            i = a(n),
            k,
            h,
            m,
            l,
            j = this.length === 1 && this[0].parentNode;
            e = b || {};
            if (j && j.nodeType === 11 && j.childNodes.length === 1 && i.length === 1) {
                i[d](this[0]);
                g = this
            } else {
                for (h = 0, m = i.length; h < m; h++) {
                    c = h;
                    k = (h > 0 ? this.clone(true) : this).get();
                    a.fn[d].apply(a(i[h]), k);
                    g = g.concat(k)
                }
                c = 0;
                g = this.pushStack(g, f, i.selector)
            }
            l = e;
            e = null;
            a.tmpl.complete(l);
            return g
        }
    });
    a.fn.extend({
        tmpl: function(d, c, b) {
            return a.tmpl(this[0], d, c, b)
        },
        tmplItem: function() {
            return a.tmplItem(this[0])
        },
        template: function(b) {
            return a.template(b, this[0])
        },
        domManip: function(d, l, j) {
            if (d[0] && d[0].nodeType) {
                var f = a.makeArray(arguments),
                g = d.length,
                i = 0,
                h;
                while (i < g && !(h = a.data(d[i++], "tmplItem")));
                if (g > 1) f[0] = [a.makeArray(d)];
                if (h && c) f[2] = function(b) {
                    a.tmpl.afterManip(this, b, j)
                };
                r.apply(this, f)
            } else r.apply(this, arguments);
            c = 0; ! e && a.tmpl.complete(b);
            return this
        }
    });
    a.extend({
        tmpl: function(d, h, e, c) {
            var j,
            k = !c;
            if (k) {
                c = p;
                d = a.template[d] || a.template(null, d);
                f = {}
            } else if (!d) {
                d = c.tmpl;
                b[c.key] = c;
                c.nodes = [];
                c.wrapped && n(c, c.wrapped);
                return a(i(c, null, c.tmpl(a, c)))
            }
            if (!d) return [];
            if (typeof h === "function") h = h.call(c || {});
            e && e.wrapped && n(e, e.wrapped);
            j = a.isArray(h) ? a.map(h,
            function(a) {
                return a ? g(e, c, d, a) : null
            }) : [g(e, c, d, h)];
            return k ? a(i(c, null, j)) : j
        },
        tmplItem: function(b) {
            var c;
            if (b instanceof a) b = b[0];
            while (b && b.nodeType === 1 && !(c = a.data(b, "tmplItem")) && (b = b.parentNode));
            return c || p
        },
        template: function(c, b) {
            if (b) {
                if (typeof b === "string") b = o(b);
                else if (b instanceof a) b = b[0] || {};
                if (b.nodeType) b = a.data(b, "tmpl") || a.data(b, "tmpl", o(b.innerHTML));
                return typeof c === "string" ? (a.template[c] = b) : b
            }
            return c ? typeof c !== "string" ? a.template(null, c) : a.template[c] || a.template(null, q.test(c) ? c: a(c)) : null
        },
        encode: function(a) {
            return ("" + a).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;")
        }
    });
    a.extend(a.tmpl, {
        tag: {
            tmpl: {
                _default: {
                    $2: "null"
                },
                open: "if($notnull_1){_=_.concat($item.nest($1,$2));}"
            },
            wrap: {
                _default: {
                    $2: "null"
                },
                open: "$item.calls(_,$1,$2);_=[];",
                close: "call=$item.calls();_=call._.concat($item.wrap(call,_));"
            },
            each: {
                _default: {
                    $2: "$index, $value"
                },
                open: "if($notnull_1){$.each($1a,function($2){with(this){",
                close: "}});}"
            },
            "if": {
                open: "if(($notnull_1) && $1a){",
                close: "}"
            },
            "else": {
                _default: {
                    $1: "true"
                },
                open: "}else if(($notnull_1) && $1a){"
            },
            html: {
                open: "if($notnull_1){_.push($1a);}"
            },
            "=": {
                _default: {
                    $1: "$data"
                },
                open: "if($notnull_1){_.push($.encode($1a));}"
            },
            "!": {
                open: ""
            }
        },
        complete: function() {
            b = {}
        },
        afterManip: function(f, b, d) {
            var e = b.nodeType === 11 ? a.makeArray(b.childNodes) : b.nodeType === 1 ? [b] : [];
            d.call(f, b);
            m(e);
            c++
        }
    });
    function i(e, g, f) {
        var b,
        c = f ? a.map(f,
        function(a) {
            return typeof a === "string" ? e.key ? a.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g, "$1 " + d + '="' + e.key + '" $2') : a: i(a, e, a._ctnt)
        }) : e;
        if (g) return c;
        c = c.join("");
        c.replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/,
        function(f, c, e, d) {
            b = a(e).get();
            m(b);
            if (c) b = j(c).concat(b);
            if (d) b = b.concat(j(d))
        });
        return b ? b: j(c)
    }
    function j(c) {
        var b = document.createElement("div");
        b.innerHTML = c;
        return a.makeArray(b.childNodes)
    }
    function o(b) {
        return new Function("jQuery", "$item", "var $=jQuery,call,_=[],$data=$item.data;with($data){_.push('" + a.trim(b).replace(/([\\'])/g, "\\$1").replace(/[\r\t\n]/g, " ").replace(/\$\{([^\}]*)\}/g, "{{= $1}}").replace(/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g,
        function(m, l, j, d, b, c, e) {
            var i = a.tmpl.tag[j],
            h,
            f,
            g;
            if (!i) throw "Template command not found: " + j;
            h = i._default || [];
            if (c && !/\w$/.test(b)) {
                b += c;
                c = ""
            }
            if (b) {
                b = k(b);
                e = e ? "," + k(e) + ")": c ? ")": "";
                f = c ? b.indexOf(".") > -1 ? b + c: "(" + b + ").call($item" + e: b;
                g = c ? f: "(typeof(" + b + ")==='function'?(" + b + ").call($item):(" + b + "))"
            } else g = f = h.$1 || "null";
            d = k(d);
            return "');" + i[l ? "close": "open"].split("$notnull_1").join(b ? "typeof(" + b + ")!=='undefined' && (" + b + ")!=null": "true").split("$1a").join(g).split("$1").join(f).split("$2").join(d ? d.replace(/\s*([^\(]+)\s*(\((.*?)\))?/g,
            function(d, c, b, a) {
                a = a ? "," + a + ")": b ? ")": "";
                return a ? "(" + c + ").call($item" + a: d
            }) : h.$2 || "") + "_.push('"
        }) + "');}return _;")
    }
    function n(c, b) {
        c._wrap = i(c, true, a.isArray(b) ? b: [q.test(b) ? b: a(b).html()]).join("")
    }
    function k(a) {
        return a ? a.replace(/\\'/g, "'").replace(/\\\\/g, "\\") : null
    }
    function s(b) {
        var a = document.createElement("div");
        a.appendChild(b.cloneNode(true));
        return a.innerHTML
    }
    function m(o) {
        var n = "_" + c,
        k,
        j,
        l = {},
        e,
        p,
        i;
        for (e = 0, p = o.length; e < p; e++) {
            if ((k = o[e]).nodeType !== 1) continue;
            j = k.getElementsByTagName("*");
            for (i = j.length - 1; i >= 0; i--) m(j[i]);
            m(k)
        }
        function m(j) {
            var p,
            i = j,
            k,
            e,
            m;
            if (m = j.getAttribute(d)) {
                while (i.parentNode && (i = i.parentNode).nodeType === 1 && !(p = i.getAttribute(d)));
                if (p !== m) {
                    i = i.parentNode ? i.nodeType === 11 ? 0: i.getAttribute(d) || 0: 0;
                    if (! (e = b[m])) {
                        e = f[m];
                        e = g(e, b[i] || f[i], null, true);
                        e.key = ++h;
                        b[h] = e
                    }
                    c && o(m)
                }
                j.removeAttribute(d)
            } else if (c && (e = a.data(j, "tmplItem"))) {
                o(e.key);
                b[e.key] = e;
                i = a.data(j.parentNode, "tmplItem");
                i = i ? i.key: 0
            }
            if (e) {
                k = e;
                while (k && k.key != i) {
                    k.nodes.push(j);
                    k = k.parent
                }
                delete e._ctnt;
                delete e._wrap;
                a.data(j, "tmplItem", e)
            }
            function o(a) {
                a = a + n;
                e = l[a] = l[a] || g(e, b[e.parent.key + n] || e.parent, null, true)
            }
        }
    }
    function u(a, d, c, b) {
        if (!a) return l.pop();
        l.push({
            _: a,
            tmpl: d,
            item: this,
            data: c,
            options: b
        })
    }
    function w(d, c, b) {
        return a.tmpl(a.template(d), c, b, this)
    }
    function x(b, d) {
        var c = b.options || {};
        c.wrapped = d;
        return a.tmpl(a.template(b.tmpl), b.data, c, b.item)
    }
    function v(d, c) {
        var b = this._wrap;
        return a.map(a(a.isArray(b) ? b.join("") : b).filter(d || "*"),
        function(a) {
            return c ? a.innerText || a.textContent: a.outerHTML || s(a)
        })
    }
    function t() {
        var b = this.nodes;
        a.tmpl(null, null, null, this).insertBefore(b[0]);
        a(b).remove()
    }
})(jQuery)
;
jQuery.cookie = function(e, b, a) {
    if (arguments.length > 1 && String(b) !== "[object Object]") {
        a = jQuery.extend({},
        a);
        if (b === null || b === undefined) a.expires = -1;
        if (typeof a.expires === "number") {
            var d = a.expires,
            c = a.expires = new Date;
            c.setDate(c.getDate() + d)
        }
        b = String(b);
        return document.cookie = [encodeURIComponent(e), "=", a.raw ? b: encodeURIComponent(b), a.expires ? "; expires=" + a.expires.toUTCString() : "", a.path ? "; path=" + a.path: "", a.domain ? "; domain=" + a.domain: "", a.secure ? "; secure": ""].join("")
    }
    a = b || {};
    c = a.raw ?
    function(f) {
        return f
    }:
    decodeURIComponent;
    return (d = RegExp("(?:^|; )" + encodeURIComponent(e) + "=([^;]*)").exec(document.cookie)) ? c(d[1]) : null
};
;
/*! 
 * jquery.event.drag - v 2.0.0 
 * Copyright (c) 2010 Three Dub Media - http://threedubmedia.com
 * Open Source MIT License - http://threedubmedia.com/code/license
 */
; (function(f) {
    f.fn.drag = function(b, a, d) {
        var e = typeof b == "string" ? b: "",
        k = f.isFunction(b) ? b: f.isFunction(a) ? a: null;
        if (e.indexOf("drag") !== 0) e = "drag" + e;
        d = (b == k ? a: d) || {};
        return k ? this.bind(e, d, k) : this.trigger(e)
    };
    var i = f.event,
    h = i.special,
    c = h.drag = {
        defaults: {
            which: 1,
            distance: 0,
            not: ":input",
            handle: null,
            relative: false,
            drop: true,
            click: false
        },
        datakey: "dragdata",
        livekey: "livedrag",
        add: function(b) {
            var a = f.data(this, c.datakey),
            d = b.data || {};
            a.related += 1;
            if (!a.live && b.selector) {
                a.live = true;
                i.add(this, "draginit." + c.livekey, c.delegate)
            }
            f.each(c.defaults,
            function(e) {
                if (d[e] !== undefined) a[e] = d[e]
            })
        },
        remove: function() {
            f.data(this, c.datakey).related -= 1
        },
        setup: function() {
            if (!f.data(this, c.datakey)) {
                var b = f.extend({
                    related: 0
                },
                c.defaults);
                f.data(this, c.datakey, b);
                i.add(this, "mousedown", c.init, b);
                this.attachEvent && this.attachEvent("ondragstart", c.dontstart)
            }
        },
        teardown: function() {
            if (!f.data(this, c.datakey).related) {
                f.removeData(this, c.datakey);
                i.remove(this, "mousedown", c.init);
                i.remove(this, "draginit", c.delegate);
                c.textselect(true);
                this.detachEvent && this.detachEvent("ondragstart", c.dontstart)
            }
        },
        init: function(b) {
            var a = b.data,
            d;
            if (! (a.which > 0 && b.which != a.which)) if (!f(b.target).is(a.not)) if (! (a.handle && !f(b.target).closest(a.handle, b.currentTarget).length)) {
                a.propagates = 1;
                a.interactions = [c.interaction(this, a)];
                a.target = b.target;
                a.pageX = b.pageX;
                a.pageY = b.pageY;
                a.dragging = null;
                d = c.hijack(b, "draginit", a);
                if (a.propagates) {
                    if ((d = c.flatten(d)) && d.length) {
                        a.interactions = [];
                        f.each(d,
                        function() {
                            a.interactions.push(c.interaction(this, a))
                        })
                    }
                    a.propagates = a.interactions.length;
                    a.drop !== false && h.drop && h.drop.handler(b, a);
                    c.textselect(false);
                    i.add(document, "mousemove mouseup", c.handler, a);
                    return false
                }
            }
        },
        interaction: function(b, a) {
            return {
                drag: b,
                callback: new c.callback,
                droppable: [],
                offset: f(b)[a.relative ? "position": "offset"]() || {
                    top: 0,
                    left: 0
                }
            }
        },
        handler: function(b) {
            var a = b.data;
            switch (b.type) {
            case ! a.dragging && "mousemove": if (Math.pow(b.pageX - a.pageX, 2) + Math.pow(b.pageY - a.pageY, 2) < Math.pow(a.distance, 2)) break;
                b.target = a.target;
                c.hijack(b, "dragstart", a);
                if (a.propagates) a.dragging = true;
            case "mousemove":
                if (a.dragging) {
                    c.hijack(b, "drag", a);
                    if (a.propagates) {
                        a.drop !== false && h.drop && h.drop.handler(b, a);
                        break
                    }
                    b.type = "mouseup"
                }
            case "mouseup":
                i.remove(document, "mousemove mouseup", c.handler);
                if (a.dragging) {
                    a.drop !== false && h.drop && h.drop.handler(b, a);
                    c.hijack(b, "dragend", a)
                }
                c.textselect(true);
                if (a.click === false && a.dragging) {
                    jQuery.event.triggered = true;
                    setTimeout(function() {
                        jQuery.event.triggered = false
                    },
                    20);
                    a.dragging = false
                }
                break
            }
        },
        delegate: function(b) {
            var a = [],
            d,
            e = f.data(this, "events") || {};
            f.each(e.live || [],
            function(k, j) {
                if (j.preType.indexOf("drag") === 0) if (d = f(b.target).closest(j.selector, b.currentTarget)[0]) {
                    i.add(d, j.origType + "." + c.livekey, j.origHandler, j.data);
                    f.inArray(d, a) < 0 && a.push(d)
                }
            });
            if (!a.length) return false;
            return f(a).bind("dragend." + c.livekey,
            function() {
                i.remove(this, "." + c.livekey)
            })
        },
        hijack: function(b, a, d, e, k) {
            if (d) {
                var j = {
                    event: b.originalEvent,
                    type: b.type
                },
                n = a.indexOf("drop") ? "drag": "drop",
                l,
                o = e || 0,
                g,
                m;
                e = !isNaN(e) ? e: d.interactions.length;
                b.type = a;
                b.originalEvent = null;
                d.results = [];
                do
                if (g = d.interactions[o]) if (! (a !== "dragend" && g.cancelled)) {
                    m = c.properties(b, d, g);
                    g.results = [];
                    f(k || g[n] || d.droppable).each(function(q, p) {
                        l = (m.target = p) ? i.handle.call(p, b, m) : null;
                        if (l === false) {
                            if (n == "drag") {
                                g.cancelled = true;
                                d.propagates -= 1
                            }
                            if (a == "drop") g[n][q] = null
                        } else if (a == "dropinit") g.droppable.push(c.element(l) || p);
                        if (a == "dragstart") g.proxy = f(c.element(l) || g.drag)[0];
                        g.results.push(l);
                        delete b.result;
                        if (a !== "dropinit") return l
                    });
                    d.results[o] = c.flatten(g.results);
                    if (a == "dropinit") g.droppable = c.flatten(g.droppable);
                    a == "dragstart" && !g.cancelled && m.update()
                }
                while (++o < e);
                b.type = j.type;
                b.originalEvent = j.event;
                return c.flatten(d.results)
            }
        },
        properties: function(b, a, d) {
            var e = d.callback;
            e.drag = d.drag;
            e.proxy = d.proxy || d.drag;
            e.startX = a.pageX;
            e.startY = a.pageY;
            e.deltaX = b.pageX - a.pageX;
            e.deltaY = b.pageY - a.pageY;
            e.originalX = d.offset.left;
            e.originalY = d.offset.top;
            e.offsetX = b.pageX - (a.pageX - e.originalX);
            e.offsetY = b.pageY - (a.pageY - e.originalY);
            e.drop = c.flatten((d.drop || []).slice());
            e.available = c.flatten((d.droppable || []).slice());
            return e
        },
        element: function(b) {
            if (b && (b.jquery || b.nodeType == 1)) return b
        },
        flatten: function(b) {
            return f.map(b,
            function(a) {
                return a && a.jquery ? f.makeArray(a) : a && a.length ? c.flatten(a) : a
            })
        },
        textselect: function(b) {
            f(document)[b ? "unbind": "bind"]("selectstart", c.dontstart).attr("unselectable", b ? "off": "on").css("MozUserSelect", b ? "": "none")
        },
        dontstart: function() {
            return false
        },
        callback: function() {}
    };
    c.callback.prototype = {
        update: function() {
            h.drop && this.available.length && f.each(this.available,
            function(b) {
                h.drop.locate(this, b)
            })
        }
    };
    h.draginit = h.dragstart = h.dragend = c
})(jQuery);
;
var JSON;
JSON || (JSON = {});
 (function() {
    function l(b) {
        return b < 10 ? "0" + b: b
    }
    function o(b) {
        p.lastIndex = 0;
        return p.test(b) ? '"' + b.replace(p,
        function(f) {
            var c = r[f];
            return typeof c === "string" ? c: "\\u" + ("0000" + f.charCodeAt(0).toString(16)).slice( - 4)
        }) + '"': '"' + b + '"'
    }
    function m(b, f) {
        var c,
        d,
        g,
        k,
        i = h,
        e,
        a = f[b];
        if (a && typeof a === "object" && typeof a.toJSON === "function") a = a.toJSON(b);
        if (typeof j === "function") a = j.call(f, b, a);
        switch (typeof a) {
        case "string":
            return o(a);
        case "number":
            return isFinite(a) ? String(a) : "null";
        case "boolean":
        case "null":
            return String(a);
        case "object":
            if (!a) return "null";
            h += n;
            e = [];
            if (Object.prototype.toString.apply(a) === "[object Array]") {
                k = a.length;
                for (c = 0; c < k; c += 1) e[c] = m(c, a) || "null";
                g = e.length === 0 ? "[]": h ? "[\n" + h + e.join(",\n" + h) + "\n" + i + "]": "[" + e.join(",") + "]";
                h = i;
                return g
            }
            if (j && typeof j === "object") {
                k = j.length;
                for (c = 0; c < k; c += 1) if (typeof j[c] === "string") {
                    d = j[c];
                    if (g = m(d, a)) e.push(o(d) + (h ? ": ": ":") + g)
                }
            } else for (d in a) if (Object.prototype.hasOwnProperty.call(a, d)) if (g = m(d, a)) e.push(o(d) + (h ? ": ": ":") + g);
            g = e.length === 0 ? "{}": h ? "{\n" + h + e.join(",\n" + h) + "\n" + i + "}": "{" + e.join(",") +
            "}";
            h = i;
            return g
        }
    }
    if (typeof Date.prototype.toJSON !== "function") {
        Date.prototype.toJSON = function() {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + l(this.getUTCMonth() + 1) + "-" + l(this.getUTCDate()) + "T" + l(this.getUTCHours()) + ":" + l(this.getUTCMinutes()) + ":" + l(this.getUTCSeconds()) + "Z": null
        };
        String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
            return this.valueOf()
        }
    }
    var q = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    p = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    h,
    n,
    r = {
        "\u0008": "\\b",
        "\t": "\\t",
        "\n": "\\n",
        "\u000c": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\"
    },
    j;
    if (typeof JSON.stringify !== "function") JSON.stringify = function(b, f, c) {
        var d;
        n = h = "";
        if (typeof c === "number") for (d = 0; d < c; d += 1) n += " ";
        else if (typeof c === "string") n = c;
        if ((j = f) && typeof f !== "function" && (typeof f !== "object" || typeof f.length !== "number")) throw Error("JSON.stringify");
        return m("",
        {
            "": b
        })
    };
    if (typeof JSON.parse !== "function") JSON.parse = function(b, f) {
        function c(g, k) {
            var i,
            e,
            a = g[k];
            if (a && typeof a === "object") for (i in a) if (Object.prototype.hasOwnProperty.call(a, i)) {
                e = c(a, i);
                if (e !== undefined) a[i] = e;
                else delete a[i]
            }
            return f.call(g, k, a)
        }
        var d;
        b = String(b);
        q.lastIndex = 0;
        if (q.test(b)) b = b.replace(q,
        function(g) {
            return "\\u" + ("0000" + g.charCodeAt(0).toString(16)).slice( - 4)
        });
        if (/^[\],:{}\s]*$/.test(b.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
            d = eval("(" + b + ")");
            return typeof f === "function" ? c({
                "": d
            },
            "") : d
        }
        throw new SyntaxError("JSON.parse");
    }
})();
;
var utf8_encode = function(d) {
    if (d === null || typeof d === "undefined") return "";
    d += "";
    var g = "",
    i,
    l,
    k = 0;
    i = l = 0;
    k = d.length;
    for (var e = 0; e < k; e++) {
        var c = d.charCodeAt(e),
        a = null;
        if (c < 128) l++;
        else a = c > 127 && c < 2048 ? String.fromCharCode(c >> 6 | 192) + String.fromCharCode(c & 63 | 128) : String.fromCharCode(c >> 12 | 224) + String.fromCharCode(c >> 6 & 63 | 128) + String.fromCharCode(c & 63 | 128);
        if (a !== null) {
            if (l > i) g += d.slice(i, l);
            g += a;
            i = l = e + 1
        }
    }
    if (l > i) g += d.slice(i, k);
    return g
},
utf8_decode = function(d) {
    var g = [],
    i = 0,
    l = 0,
    k = 0,
    e = 0,
    c = 0;
    for (d += ""; i < d.length;) {
        k =
        d.charCodeAt(i);
        if (k < 128) {
            g[l++] = String.fromCharCode(k);
            i++
        } else if (k > 191 && k < 224) {
            e = d.charCodeAt(i + 1);
            g[l++] = String.fromCharCode((k & 31) << 6 | e & 63);
            i += 2
        } else {
            e = d.charCodeAt(i + 1);
            c = d.charCodeAt(i + 2);
            g[l++] = String.fromCharCode((k & 15) << 12 | (e & 63) << 6 | c & 63);
            i += 3
        }
    }
    return g.join("")
},
serialize = function(d) {
    var g = function(b) {
        var h = 0,
        f = 0,
        j = b.length,
        m = "";
        for (f = 0; f < j; f++) {
            m = b.charCodeAt(f);
            h += m < 128 ? 1: m < 2048 ? 2: 3
        }
        return h
    },
    i = function(b) {
        var h = typeof b,
        f,
        j;
        if (h === "object" && !b) return "null";
        if (h === "object") {
            if (!b.constructor) return "object";
            b = b.constructor.toString();
            if (f = b.match(/(\w+)\(/)) b = f[1].toLowerCase();
            f = ["boolean", "number", "string", "array"];
            for (j in f) if (b == f[j]) {
                h = f[j];
                break
            }
        }
        return h
    },
    l = i(d),
    k = "";
    switch (l) {
    case "function":
        g = "";
        break;
    case "boolean":
        g = "b:" + (d ? "1": "0");
        break;
    case "number":
        g = (Math.round(d) == d ? "i": "d") + ":" + d;
        break;
    case "string":
        g = "s:" + g(d) + ':"' + d + '"';
        break;
    case "array":
    case "object":
        g = "a";
        var e = 0,
        c = "",
        a;
        for (a in d) if (d.hasOwnProperty(a)) {
            k = i(d[a]);
            if (k !== "function") {
                k = a.match(/^[0-9]+$/) ? parseInt(a, 10) : a;
                c += this.serialize(k) +
                this.serialize(d[a]);
                e++
            }
        }
        g += ":" + e + ":{" + c + "}";
        break;
    default:
        g = "N"
    }
    if (l !== "object" && l !== "array") g += ";";
    return g
},
unserialize = function(d) {
    var g = this,
    i = function(e, c, a) {
        for (var b = [], h = e.slice(c, c + 1), f = 2; h != a;) {
            if (f + c > e.length) throw new g.window.Error("Invalid", void 0, void 0);
            b.push(h);
            h = e.slice(c + (f - 1), c + f);
            f += 1
        }
        return [b.length, b.join("")]
    },
    l = function(e, c, a) {
        var b;
        b = [];
        for (var h = 0; h < a; h++) {
            var f = e.slice(c + (h - 1), c + h);
            b.push(f);
            f = f.charCodeAt(0);
            f = f < 128 ? 0: f < 2048 ? 1: 2;
            a -= f
        }
        return [b.length, b.join("")]
    },
    k =
    function(e, c) {
        var a,
        b = 0,
        h;
        c || (c = 0);
        var f = e.slice(c, c + 1).toLowerCase(),
        j = c + 2,
        m = function(n) {
            return n
        };
        switch (f) {
        case "i":
            m = function(n) {
                return parseInt(n, 10)
            };
            a = i(e, j, ";");
            b = a[0];
            a = a[1];
            j += b + 1;
            break;
        case "b":
            m = function(n) {
                return parseInt(n, 10) !== 0
            };
            a = i(e, j, ";");
            b = a[0];
            a = a[1];
            j += b + 1;
            break;
        case "d":
            m = function(n) {
                return parseFloat(n)
            };
            a = i(e, j, ";");
            b = a[0];
            a = a[1];
            j += b + 1;
            break;
        case "n":
            a = null;
            break;
        case "s":
            a = i(e, j, ":");
            b = a[0];
            h = a[1];
            j += b + 2;
            a = l(e, j + 1, parseInt(h, 10));
            b = a[0];
            a = a[1];
            j += b + 2;
            if (b != parseInt(h, 10) &&
            b != a.length) throw new g.window.SyntaxError("String length mismatch", void 0, void 0);
            a = g.utf8_decode(a);
            break;
        case "a":
            a = {};
            h = i(e, j, ":");
            b = h[0];
            h = h[1];
            j += b + 2;
            for (b = 0; b < parseInt(h, 10); b++) {
                var o = k(e, j),
                p = o[2];
                j += o[1];
                o = k(e, j);
                var q = o[2];
                j += o[1];
                a[p] = q
            }
            j += 1;
            break;
        default:
            throw new g.window.SyntaxError("Unknown / Unhandled data type(s): " + f, void 0, void 0);
        }
        return [f, j - c, m(a)]
    };
    return k(d + "", 0)[2]
};
; (function() {
    var d = false,
    g = /xyz/.test(function() {
        return xyz
    }) ? /\b_super\b/: /.*/;
    this.Class = function() {};
    Class.extend = function(b) {
        function c() { ! d && this.init && this.init.apply(this, arguments)
        }
        var e = this.prototype;
        d = true;
        var f = new this;
        d = false;
        for (var a in b) f[a] = typeof b[a] == "function" && typeof e[a] == "function" && g.test(b[a]) ?
        function(h, i) {
            return function() {
                var j = this._super;
                this._super = e[h];
                var k = i.apply(this, arguments);
                this._super = j;
                return k
            }
        } (a, b[a]) : b[a];
        c.prototype = f;
        c.prototype.constructor = c;
        c.extend =
        arguments.callee;
        return c
    }
})();
;
var Model = Class.extend({
    init: function(a) {
        if (a instanceof jQuery) {
            this.type = a.data("class");
            this.id = parseInt(a.data("id"));
            this.$this = a
        } else for (v in a) this[v] = Model.factory(a[v])
    },
    has_many: function(a, b, d) {
        var c,
        e,
        g = this;
        switch (typeof a) {
        case "object":
            e = a.success;
            delete a.success;
            break;
        case "function":
            e = a;
            a = {};
            break;
        case "number":
            a = {
                limit: a
            };
            break;
        case "undefined":
            a = {}
        }
        e || (e = function(f) {
            ENVIRONMENT === DEVELOPMENT && console.log(f)
        });
        if (typeof d == "undefined" || !d) {
            d = b.split("/");
            c = d[d.length - 1]
        } else c =
        d.toLowerCase() + "s";
        return new Pager({
            data: a,
            url: this.type.toLowerCase() + "s/" + this.id + "/" + b,
            prop_name: c,
            success: function(f) {
                e.call(g, Model.factory(f.response[c]))
            }
        })
    }
});
if (typeof scope === "undefined") var scope = window;
Model._find = function(a, b, d) {
    var c;
    if ($db.has("caches") && (c = $db.from("caches").get(a + b))) typeof d !== "undefined" ? d(c) : console.log(c);
    else return api.call({
        url: a.toLowerCase() + "s/" + b + "/show",
        success: function(e) {
            c = new scope[a](e.response[a.toLowerCase()]);
            $db.has("caches") && $db.from("caches").set(a + c.id, c);
            typeof d !== "undefined" ? d(c) : console.log(c)
        }
    })
};
Model._search = function(a, b, d) {
    switch (typeof b) {
    case "object":
        if (b.success) {
            d = b.success;
            delete b.success
        }
        break;
    case "string":
        b = {
            query: b
        };
        break;
    default:
        return false
    }
    d || (d = function(e) {
        ENVIRONMENT === DEVELOPMENT && console.log(e)
    });
    var c = a.toLowerCase() + "s";
    return new Pager({
        data: b,
        url: c + "/search",
        prop_name: c,
        success: function(e) {
            e.response[c] = Model.factory(e.response[c]);
            d.call(self, e.response)
        }
    })
};
Model.factory = function(a) {
    if (a instanceof Array) for (var b = 0; b < a.length; b++) a[b] = Model.factory(a[b]);
    else if (a instanceof Object && !(a instanceof Model)) if (a instanceof jQuery) a = new(scope[a.data("class")])(a);
    else if (typeof a.type != "undefined" && typeof scope[a.type] == "function") {
        $db.has("caches") && $db.from("caches").set(a.type + a.id, a);
        a = new scope[a.type](a)
    }
    return a
};
;
var User = Model.extend({
    type: "User",
    _can: {},
    can: function(a) {
        return typeof this._can !== UNDEFINED && this._can[a] ? true: false
    },
    feed: function(a) {
        return this.has_many(a, "feed", "Event")
    },
    products: function(a) {
        return this.has_many(a, "products")
    },
    owns: function(a) {
        return this.has_many(a, "owns")
    },
    recommended_products: function(a) {
        return this.has_many(a, "recommended_products")
    },
    sets: function(a) {
        return this.has_many(a, "sets")
    },
    public_and_private_sets: function(a) {
        return this.has_many(a, "public_and_private_sets", "Set")
    },
    public_and_private_sets_not_wishlists: function(a) {
        return this.has_many(a, "public_and_private_sets_not_wishlists", "Set")
    },
    user_followers: function(a) {
        return this.has_many(a, "followers/users")
    },
    users_following: function(a) {
        return this.has_many(a, "following/users")
    },
    stores_following: function(a) {
        return this.has_many(a, "following/stores")
    },
    searches_following: function(a) {
        return this.has_many(a, "following/searches")
    },
    follow: function(a, b) {
        b = b ||
        function(c) {
            console.log(c)
        };
        api.call({
            url: this.type.toLowerCase() +
            "s/" + this.id + "/follow",
            data: {
                entity_type: a.type,
                entity_id: a.id
            },
            success: function() {
                b()
            }
        })
    },
    unfollow: function(a, b) {
        b = b ||
        function(c) {
            console.log(c)
        };
        api.call({
            url: this.type.toLowerCase() + "s/" + this.id + "/unfollow",
            data: {
                entity_type: a.type,
                entity_id: a.id
            },
            success: function() {
                b()
            }
        })
    },
    is_following: function(a, b) {
        return a instanceof User ? DataStore.svpply().all(function(c) {
            for (var d = 0; d < c.length; d++) if (c[d].id == a.id) {
                b(true, c[d]);
                return true
            }
            return b(false)
        }) : b(false)
    },
    has_purchased: function(a, b) {
        return b(false)
    },
    init: function(a) {
        this._super(a);
        this.logged_in = this.id >= 0
    }
});
User.find = function(a, b) {
    return Model._find("User", a, b)
};
User.search = function(a, b) {
    return Model._search("User", a, b)
};
;
var Product = Model.extend({
    type: "Product",
    sets: function(a) {
        return this.has_many(a, "sets")
    },
    comments: function(a) {
        return this.has_many(a, "comments")
    },
    users: function(a) {
        return this.has_many(a, "users")
    },
    img: function(a) {
        return this.sv_img_url.replace("?", a)
    }
});
Product.find = function(a, b) {
    return Model._find("Product", a, b)
};
Product.search = function(a, b) {
    return Model._search("Product", a, b)
};
;
var Event = Model.extend({
    type: "Event"
});
Event.find = function(b, d) {
    return Model._find("Event", b, d)
};
Event.group = function(b) {
    for (var d = [], a, c = 0; c < b.length; c++) {
        a = b[c].result;
        if (a.type == "Product" || a.type == "Save") {
            a = a.type == "Save" ? a.product: a;
            if (typeof d[a.id] == "undefined") d[a.id] = b[c];
            else {
                b.splice(c, 1);
                c--
            }
        }
    }
    return b
};
;
var Comment = Model.extend({
    type: "Comment"
});
Comment.find = function(a, b) {
    return Model._find("Comment", a, b)
};
;
var Store = Model.extend({
    type: "Store",
    users: function(a) {
        return this.has_many(a, "users")
    },
    products: function(a) {
        return this.has_many(a, "products")
    }
});
Store.find = function(a, b) {
    return Model._find("Store", a, b)
};
Store.search = function(a, b) {
    return Model._search("Store", a, b)
};
;
var Search = Model.extend({
    type: "Search",
    users: function(a) {
        return this.has_many(a, "users")
    },
    products: function(a) {
        return this.has_many(a, "products")
    }
});
Search.find = function(a, b) {
    return Model._find("Search", a, b)
};
;
var Set = Model.extend({
    type: "Set",
    set_users: function(a) {
        return this.has_many(a, "set_users")
    },
    set_items: function(a) {
        return this.has_many(a, "set_items")
    },
    is_contributor: function(a) {
        return a instanceof User && $.inArray(a.id, this.contributor_ids) !== -1
    }
});
Set.find = function(a, b, d) {
    if (d !== true) return Model._find("Set", a, b);
    else {
        d = DataStore.Set();
        return d.all(function(e) {
            for (var c = 0; c < e.length; c++) if (e[c].id === a) {
                b(e[c]);
                return true
            }
            return Model._find("Set", a, b)
        })
    }
};
Set.search = function(a, b) {
    return Model._search("Set", a, b)
};
;
var Set_Item = Model.extend({
    type: "Set_Item"
});
Set_Item.find = function(a, b) {
    return Model._find("Set_Item", a, b)
};
;
var Relationship = Model.extend({
    type: "Relationship"
});
Relationship.FOLLOW = "Follow";
Relationship.PURCHASE = "Purchase";
Relationship.show = function(b, c, d, e) {
    var a;
    if ($db.has("caches") && (a = $db.from("caches").get(d + b.type + b.id + c.type + c.id))) typeof e != "undefined" ? e(a) : console.log(a);
    else return api.call({
        url: "relationships/" + b.type.toLowerCase() + "/" + b.id + "/" + d.toLowerCase() + "/" + c.type.toLowerCase() + "/" + c.id + "/show",
        success: function(f) {
            a = new scope.Relationship(f.response[d.toLowerCase()]);
            $db.has("caches") && $db.from("caches").set(d + b.type + b.id + c.type + c.id, a);
            typeof e != "undefined" ? e(a) : console.log(a)
        }
    })
};
;
var Application_Controller = function() {
    return {
        init: function() {
            var b = this;
            $("[data-class-on][data-label-on][data-label-off]").live("mouseenter",
            function(a) {
                b.action_mouseenter(a, $(this))
            }).live("mouseleave",
            function(a) {
                b.action_mouseleave(a, $(this))
            });
            return this
        },
        action_mouseenter: function(b, a) {
            var c = a.hasClass(a.data("class-on")),
            d = c ? "on": "off";
            if (c) if (copy_hover = a.data("label-" + d + "-hover")) $("span", a).html(copy_hover);
            a.hasClass("hover") || a.addClass("hover")
        },
        action_mouseleave: function(b, a) {
            var c =
            a.hasClass(a.data("class-on")) ? "on": "off";
            $("span", a).html(a.data("label-" + c))
        }
    }
};
$(function() { (new Application_Controller).init()
});
;
var Share_Controller = function() {
    return {
        init: function(a) {
            this.$modal = a;
            return this
        },
        bind: function() {
            var a = this,
            b = this.$modal;
            b.mouseleave(function() {
                b.data("timer", setTimeout(function() {
                    a.hide()
                },
                500))
            }).mouseenter(function() {
                clearTimeout($(this).data("timer"))
            }).click(function() {
                a.hide()
            });
            b.data("timer", setTimeout(function() {
                b.mouseleave()
            },
            1500))
        },
        unbind: function() {
            var a = this.$modal;
            clearTimeout(a.data("timer"));
            a.unbind()
        },
        show: function(a) {
            var b = this.$modal;
            this.bind();
            b.css({
                top: a.pageY,
                left: a.pageX
            }).animate({
                opacity: "show"
            },
            300)
        },
        hide: function() {
            this.unbind();
            this.$modal.animate({
                opacity: "hide"
            },
            150)
        }
    }
};
;
var Tooltip_Controller = function() {
    return {
        init: function() {
            var c = this,
            a;
            $("[data-tooltip]").live("mouseenter mouseleave mousedown",
            function(d) {
                switch (d.type) {
                case "mouseenter":
                    a = $("<div>").html($(this).data("tooltip") + '<div class="arrow"></div>').addClass("tooltip").hide().delay(1E3).animate({
                        opacity: "show"
                    },
                    250).appendTo(document.body);
                    $(".arrow", a).css({
                        left: Math.round(a.width() / 2 + 5)
                    });
                    c.positionate(d, a);
                    break;
                case "mouseleave":
                case "mousedown":
                    var b = a;
                    b.is(":visible") ? b.animate({
                        opacity: "hide"
                    },
                    100,
                    function() {
                        b.remove()
                    }) : b.remove()
                }
            });
            return this
        },
        positionate: function(c, a) {
            $target = $(c.currentTarget);
            a.css({
                top: $target.offset().top - a.height() - 12,
                left: $target.offset().left - Math.round(a.width() / 2 + 14) + $target.outerWidth() / 2
            })
        }
    }
};
$(function() { (new Tooltip_Controller).init()
});
;
var Product_Controller = function() {
    return {
        init: function() {
            var d = this;
            $("[data-action=product_own]").live("click",
            function(b) {
                d.own(b, $(this))
            });
            $("[data-action=product_follow]").live("click",
            function(b) {
                d.follow(b, $(this))
            });
            return this
        },
        own: function(d, b) {
            var a = b.data("id");
            a && $.ajax({
                type: "POST",
                cache: false,
                url: "/item/purchased_toggle/" + a,
                dataType: "json",
                success: function(c) {
                    if (c.success) {
                        toggle_product_button("own", a);
                        c.purchased && ga_track_event("Product", "Purchase", a)
                    } else if (c.status === "register") {
                        $.cookie("action_on_event",
                        JSON.stringify({
                            event: "logged_in",
                            action: "own",
                            type: "product",
                            id: a,
                            referrer: window.location.href
                        }), {
                            path: "/",
                            domain: "." + DOMAIN
                        });
                        document.location = "/register"
                    }
                }
            })
        },
        follow: function(d, b) {
            var a = b.data("id");
            if (a) {
                b.addClass("processing");
                $.ajax({
                    type: "POST",
                    cache: false,
                    url: "/grab/toggle/" + a,
                    data: {
                        ajax: 1
                    },
                    dataType: "json",
                    success: function(c) {
                        var e = "";
                        if (c.total_savers == 2) e = ', added by <a href="#savers" >1 member</a>';
                        else if (c.total_savers > 2) e = ', added by <a href="#savers" >' + Math.floor(c.total_savers -
                        1) + " members</a>";
                        $("#saver_count_" + a).html(e);
                        switch (c.status) {
                        case "register":
                            $.cookie("action_on_event", JSON.stringify({
                                event: "logged_in",
                                action: "follow",
                                type: "product",
                                id: a,
                                referrer: window.location.href
                            }), {
                                path: "/",
                                domain: "." + DOMAIN
                            });
                            $.cookie("show_feed_item", JSON.stringify({
                                type: "product",
                                id: a
                            }), {
                                path: "/",
                                domain: "." + DOMAIN
                            });
                            document.location = "/register";
                            break;
                        case "saved":
                        case "already_saved":
                            b.removeClass("processing");
                            toggle_product_button("follow", a);
                            if ($("body").hasClass("user_show") &&
                            $("body").hasClass("current_user")) $("#grab_" + a + " > .ghost").fadeTo("fast", 0,
                            function() {
                                $(this).remove()
                            });
                            else {
                                $("#growler").stopTime("growl_kill").remove();
                                $("body").append(c.growler);
                                growler = new Growler;
                                growler.grab_id = a
                            }
                            ga_track_event("Product", "Follow", a);
                            break;
                        case "unsaved":
                            b.removeClass("processing");
                            toggle_product_button("follow", a);
                            if ($("body").hasClass("user_show") && $("body").hasClass("current_user")) {
                                $("#grab_" + a + " > .ghost").length == 0 && $("#grab_" + a).append('<div class="ghost"></div>');
                                $("#grab_" + a + " > .ghost").fadeTo("fast", 0.9)
                            }
                        }
                    }
                })
            }
        }
    }
};
$(function() { (new Product_Controller).init()
});
var toggle_product_button = function(d, b) {
    var a = $("[data-action=product_" + d + "][data-id=" + b + "]");
    a && a.hasClass(a.data("class-on")) ? a.removeClass(a.data("class-on")).children("span").html(a.data("label-off")) : a.addClass(a.data("class-on")).removeClass("hover").children("span").html(a.data("label-on"))
};
;
var Transform = {
    filter: function(a, b) {
        var d = {},
        e = [],
        f = a.length;
        b = b instanceof Array ? b: [b];
        for (var h = 0; h < b.length; h++) {
            if (e.length) {
                a = e.reverse();
                f = e.length
            }
            e = [];
            for (d = {}; f--;) b[h].apply(this, [a[f],
            function(c) {
                var g;
                c = c ? c === -1 ? {
                    item: -1
                }: c: {};
                c = $.extend({
                    item: false,
                    filter: false,
                    embeddable: false,
                    dedoup: false,
                    embed_field: "embedded"
                },
                c);
                if (c.item !== -1) {
                    if (!c.filter) c.filter = $.extend({},
                    c.item);
                    if (!c.embeddable) c.embeddable = $.extend({},
                    c.item);
                    if (c.filter && c.item) {
                        g = c.filter.type + c.filter.id;
                        if (typeof d[g] !==
                        "undefined") c.dedoup !== true && c.embed_field !== -1 && e[d[g]][c.embed_field].push(c.embeddable);
                        else {
                            if (c.embed_field !== -1) {
                                var i = $.extend({},
                                c.item);
                                a[f][c.embed_field] = [i]
                            }
                            e.push(c.item);
                            d[g] = e.length - 1
                        }
                    } else e.push(a[f])
                }
            }])
        }
        return e
    },
    ungroupSingleSetItems: function(a, b) {
        return a.embedded && a.embedded.length > 1 ? b(false) : a.embedded ? a.embedded[0].result && a.embedded[0].result.type === "Set_Item" ? b({
            item: a.embedded[0],
            filter: a.embedded[0].result
        }) : b(false) : b(false)
    },
    groupSetItems: function(a, b) {
        if (a.embedded) return b(false);
        else if (a.result && a.result.type === "Set_Item") {
            var d = $.extend({},
            a.subject);
            d.set_items = [a.result];
            return b({
                item: d,
                embeddable: a.result,
                embed_field: "set_items"
            })
        } else return b(false)
    },
    groupResults: function(a, b) {
        var d = false;
        if (typeof a.result !== "undefined" && a.result && typeof a.result.type !== "undefined") {
            switch (a.result.type) {
            case "Set_Item":
                d = a.result.product;
                break;
            case "Purchase":
            case "Follow":
                if (a.result && a.result.subject) switch (a.result.subject.type) {
                case "Product":
                case "Store":
                    d = a.result.subject;
                    break;
                case "User":
                    return b(false)
                } else {
                    console.log("No result or subject for this item", a);
                    return b( - 1)
                }
                break;
            case "Product":
                d = a.result;
                break;
            case "Comment":
                return b(false)
            }
            return b({
                item:
                a,
                filter: d
            })
        } else return b( - 1)
    },
    groupUserFollows: function(a, b) {
        return a.result && a.result.type === "Follow" && a.subject.type !== "Product" ? b({
            item: a,
            filter: a.enactor
        }) : b(false)
    },
    removeSingleUserFollowEmbeds: function(a, b) {
        a.result && a.result.type === "Follow" && a.subject.type !== "Product" && a.embedded && a.embedded.length === 1 &&
        delete a.embedded;
        return b(false)
    },
    removeStoreNotifications: function(a, b) {
        a.embedded && a.embedded.length > 1 && $.each(a.embedded,
        function(d, e) {
            e && e.subject.type === "Store" && a.embedded.splice(d, 1)
        });
        return b(false)
    },
    groupByEventType: function(a, b) {
        return this.type === "Event" ? typeof this.result !== "undefined" && typeof this.result.type !== "undefined" ? this.result.type == a ? b(this) : b(false) : b( - 1) : b(false)
    },
    groupFollows: function(a, b) {
        return this.groupByEventType.apply(a, ["Follow",
        function(d) {
            return b({
                item: d
            })
        }])
    },
    groupPurchases: function(a, b) {
        return this.groupByEventType.apply(a, ["Purchase",
        function(d) {
            return b({
                item: d
            })
        }])
    }
};
;
var SetView = function() {
    return {
        self: null,
        $container: null,
        theme_area_width: null,
        active_area_width: null,
        destination_left: null,
        loop_timer: null,
        total_frames: null,
        max_total_frames: 3,
        direction: null,
        hover_position_x: null,
        init: function() {
            self = this;
            $("body").bind("onHoverIn.Set", this.onHoverIn);
            $("body").bind("onHoverOut.Set", this.onHoverOut)
        },
        onHoverIn: function(a) {
            self.$container = hover_entity.$this.find(".container");
            self.active_area_width = parseInt(hover_entity.$this.css("width"));
            self.theme_area_width = parseInt(hover_entity.$this.find(".preview").css("width"));
            self.destination_left = null;
            self.hover_position_x = a.mouseEvent.pageX - hover_entity.$this.offset().left;
            self.direction = self.hover_position_x < self.active_area_width * 0.5 ? 1: -1;
            self.$container.stop(true, false);
            if (hover_entity.$this.find(".container").data("phase") == undefined) {
                hover_entity.$this.find(".container").data("phase", "onInit");
                hover_entity.$this.find(".container").data("direction", self.direction);
                hover_entity.set_items({
                    limit: self.max_total_frames + 2,
                    order_by: "sort_order desc, date_created asc",
                    success: self.onDataLoaded
                })
            } else if (hover_entity.$this.find(".container").data("phase") == "onDataLoaded") {
                a = self.$container.data("id");
                var b = self.$container.data("set_items");
                self.build(a, b)
            } else hover_entity.$this.find(".container").data("phase") == "onBuilt" && self.start()
        },
        onDataLoaded: function(a) {
            var b = $('.set[data-id="' + this.id + '"] .container'),
            d = parseInt(b.find(".theme[data-id]").data("id"));
            if (d || page_entity.type == "Product") {
                for (var c = [], e = 0; e < a.length && c.length < self.max_total_frames; e++) a[e].product.id !=
                d && a[e].product.id != page_entity.id && c.push(a[e]);
                a = c
            } else a = b.parents("[data-has-masthead]").data("has-masthead") ? a.slice(0, self.max_total_frames) : a.slice(1, self.max_total_frames + 1);
            b.data("phase", "onDataLoaded");
            b.data("id", this.id);
            b.data("set_items", a);
            hover_entity && hover_entity.id == this.id && self.build(this.id, a)
        },
        build: function(a, b) {
            $('.model.set.medium[data-id="' + a + '"] .container').each(function() {
                var d = $(this);
                building_direction = d.data("direction") ? d.data("direction") : 1;
                d.data("phase", "onBuilt");
                for (var c = 0; c < b.length; c++) {
                    var e = b[c].product.height / b[c].product.width,
                    g = self.theme_area_width,
                    f = e * g,
                    h = $("<div>").addClass("theme");
                    if (f > self.theme_area_width) {
                        f = self.theme_area_width;
                        g = f / e
                    }
                    h.css({
                        left: (c + 1) * building_direction * self.theme_area_width + "px",
                        top: self.theme_area_width - f + "px",
                        width: self.theme_area_width + "px",
                        height: self.theme_area_width + "px"
                    });
                    d.append(h);
                    b[c].product && h.append($("<img>").addClass("theme").css({
                        width: g + "px",
                        height: f + "px",
                        left: (self.theme_area_width - g) * 0.5 + "px"
                    }).attr("src",
                    b[c].product.img("small")))
                }
                d.data("total_frames", c + 1)
            });
            hover_entity != null && a == hover_entity.id && self.start()
        },
        start: function() {
            self.total_frames = parseInt(hover_entity.$this.find(".container").data("total_frames"));
            if (parseInt(self.$container.css("left")) == 0) {
                if (self.direction != parseInt(hover_entity.$this.find(".container").data("direction"))) {
                    hover_entity.$this.find(".container").data("direction", self.direction);
                    hover_entity.$this.find(".container").children().each(function(a, b) {
                        $(b).css("left",
                        a * self.direction * self.theme_area_width + "px")
                    })
                }
            } else self.direction = hover_entity.$this.find(".container").data("direction");
            hover_entity.$this.find(".preview").bind("mousemove", self.onMouseMove);
            self.onTimer()
        },
        onMouseMove: function(a) {
            a = (a.pageX - hover_entity.$this.find(".preview").offset().left - 40) / (self.theme_area_width - 80);
            if (self.direction == -1) a = 1 - a;
            self.destination_left = -(self.direction * a * (self.total_frames - 1) * self.theme_area_width)
        },
        onTimer: function() {
            if (self.destination_left != null) {
                var a = parseInt(self.$container.css("left"));
                a += (self.destination_left - a) / 40;
                var b = -(self.direction * (self.total_frames - 1) * self.theme_area_width);
                if (self.direction == 1) {
                    if (a > 0) a = 0;
                    if (a < b) a = b
                } else {
                    if (a < 0) a = 0;
                    if (a > b) a = b
                }
                self.$container.css({
                    left: a
                })
            }
            clearTimeout(self.loop_timer);
            self.loop_timer = setTimeout(self.onTimer, 10)
        },
        onHoverOut: function() {
            hover_entity.$this.unbind("mousemove", self.onMouseMove);
            clearTimeout(self.loop_timer);
            var a = 1200 * (Math.abs(parseInt(self.$container.css("left"))) / (self.max_total_frames * self.theme_area_width));
            self.$container.animate({
                left: 0
            },
            a, "easeInOutQuad")
        }
    }
};
$(function() { (new SetView).init();
    $(".tag-holiday .set.medium .set_mark").click(function() {})
});
;
var render_html = function(a, c, b) {
    var e = $("<div>");
    b = b ? b: false;
    if (typeof c == "undefined") c = "medium";
    if (a instanceof Array) $.each(a,
    function(g, d) {
        var h = d.type === "Event" ? "passthrough": c;
        d._render_type = c;
        if (d.type === "Event") d.result.parent_item = $.extend({},
        d);
        e.append($.tmpl(d.type + "_" + h, d))
    });
    else {
        var f = a.type === "Event" ? "passthrough": c;
        a._render_type = c;
        if (a.type === "Event") a.result.parent_item = $.extend({},
        a);
        e.append($.tmpl(a.type + "_" + f, a))
    }
    return b ? e.html() : $(e.html())
},
url_to = function(a) {
    switch (a.type) {
    case "Product":
    case "Set":
        return a.url;
    case "User":
        return "/" + a.username;
    case "Store":
        return "/store/" + a.domain;
    case "Search":
        return "/search/products/" + a.term
    }
},
render_embedded = function(a, c) {
    var b = $("<div>");
    $.extend({},
    c);
    $.each(a,
    function(e, f) {
        var g;
        f.result.parent_item = c;
        if (g = render_html(f, "embedded", true)) b.append(g)
    });
    return b.html()
},
link_to = function(a, c) {
    var b;
    switch (a.type) {
    case "Product":
        b = a.page_title;
        break;
    case "User":
        b = a.display_name;
        break;
    case "Set":
        b = a.title;
        break;
    case "Store":
        b = a.name;
        break;
    case "Search":
        b = a.term;
        break;
    case "Set_User":
        return link_to(a.user,
        c);
    case "Set_Item":
        return link_to(a.entity, c);
    case "Store":
        string = '<a href="/stores/' + a.domain + '">' + a.name + "</a>"
    }
    if (b) {
        link = '<a href="' + url_to(a) + '">' + b + "</a>";
        return c ? link: $(link)
    }
},
constrain = function(a, c, b) {
    if (a < b && c < b) {
        resized_width = a;
        resized_height = c
    } else {
        ratio = c / a;
        resized_width = (width_bigger = a > c) ? b: Math.floor(b / ratio);
        resized_height = !width_bigger ? b: Math.floor(b * ratio)
    }
    return [resized_width, resized_height]
},
make_seo_friendly_text = function(a) {
    a = a.replace(/[^a-zA-Z0-9 ]/g, "");
    if (a.lastIndexOf(" ") >=
    30) a = a.substr(0, a.indexOf(" ", 30));
    a = $.trim(a);
    return a.replace(/ /g, "_")
};
;
/*
 jknav
 @name      jquery.jknav.js
 @author    Yu-Jie Lin http://j.mp/Google-livibetter
 @version   0.5.0.1
 @date      05-24-2011
 @copyright (c) 2010, 2011 Yu-Jie Lin <livibetter@gmail.com>
 @license   BSD License
 @homepage  http://code.google.com/p/lilbtn/wiki/JsJqueryJknav
 @example   http://lilbtn.googlecode.com/hg/src/static/js/jquery/jquery.jknav.demo.html
*/
 (function(a) {
    function h(d) {
        var b = window.console;
        a.jknav.DEBUG && b && b.log && b.log("jknav: " + d)
    }
    function j(d, b) {
        var c = a.jknav.index[b.name];
        h("Calculating index for " + b.name + ", current index = " + c);
        if (c == null) {
            var f = a(a.jknav.TARGET).scrollTop();
            h(a.jknav.TARGET + " top = " + f);
            a.each(a.jknav.items[b.name],
            function(e, g) {
                var k = Math.floor(a(g).offset().top);
                if (f >= k) c = e
            });
            if (c == null) c = d > 0 ? 0: a.jknav.items[b.name].length - 1;
            else if (d > 0 && ++c >= a.jknav.items[b.name].length) c = 0;
            else if (d < 0 && f == Math.floor(a(a.jknav.items[b.name][c]).offset().top) &&
            --c < 0) c = a.jknav.items[b.name].length - 1
        } else {
            if (!b.circular && (c == 0 && d == -1 || c == a.jknav.items[b.name].length - 1 && d == 1)) return c;
            c += d;
            if (c >= a.jknav.items[b.name].length) c = 0;
            if (c < 0) c = a.jknav.items[b.name].length - 1
        }
        h("new index = " + c);
        return a.jknav.index[b.name] = c
    }
    function i(d, b) {
        if (d.target.tagName.toLowerCase() == "input" || d.target.tagName.toLowerCase() == "button" || d.target.tagName.toLowerCase() == "select" || d.target.tagName.toLowerCase() == "textarea") h("keyup: " + d.target.tagName + ", target is INPUT ignored.");
        else {
            var c = String.fromCharCode(d.keyCode).toLowerCase();
            h("keyup: " + d.target.tagName + ", key: " + c);
            if (c == b.up.toLowerCase() || c == b.down.toLowerCase()) {
                if (b.reevaluate) a.jknav.index[b.name] = null;
                var f = j(c == b.down.toLowerCase() ? 1: -1, b);
                c = a(a.jknav.items[b.name][f][0]);
                a(a.jknav.TARGET).animate({
                    scrollLeft: Math.floor(c.offset().left),
                    scrollTop: Math.floor(c.offset().top)
                },
                b.speed, b.easing,
                function() {
                    var e = a.jknav.items[b.name][f][1];
                    e && e(a.jknav.items[b.name][f][0])
                })
            }
        }
    }
    a.fn.jknav = function(d, b) {
        if (b == null) b =
        "default";
        if (a.jknav.items[b] == null) a.jknav.items[b] = [];
        return this.each(function() {
            a.jknav.items[b].push([this, d]);
            a.jknav.items[b].sort(function(c, f) {
                var e = a(c[0]).offset().top,
                g = a(f[0]).offset().top;
                if (e < g) return - 1;
                if (e > g) return 1;
                if (e == g) {
                    e = a(c[0]).offset().left;
                    g = a(f[0]).offset().left;
                    if (e < g) return - 1;
                    if (e > g) return 1;
                    return 0
                }
            })
        })
    };
    a.jknav = {
        index: {},
        items: {},
        opts: {},
        default_options: {
            up: "k",
            down: "j",
            name: "default",
            easing: "swing",
            speed: "normal",
            circular: true,
            reevaluate: false
        },
        DEBUG: false,
        TARGET_KEYUP: "html",
        TARGET: !a.browser.webkit ? "html": "body",
        init: function(d) {
            var b = a.extend(a.extend({},
            a.jknav.default_options), d);
            a.jknav.index[b.name] = null;
            a.jknav.opts[b.name] = b;
            a(a.jknav.TARGET_KEYUP).keyup(function(c) {
                i(c, b)
            });
            h('new set "' + b.name + '" initialzed.')
        },
        up: function(d) {
            d = a.jknav.opts[d || "default"];
            i({
                target: {
                    tagName: ""
                },
                keyCode: d.up.charCodeAt(0)
            },
            d)
        },
        down: function(d) {
            d = a.jknav.opts[d || "default"];
            i({
                target: {
                    tagName: ""
                },
                keyCode: d.down.charCodeAt(0)
            },
            d)
        }
    }
})(jQuery);
;
jQuery.fn.extend({
    everyTime: function(c, a, d, b) {
        return this.each(function() {
            jQuery.timer.add(this, c, a, d, b)
        })
    },
    oneTime: function(c, a, d) {
        return this.each(function() {
            jQuery.timer.add(this, c, a, d, 1)
        })
    },
    stopTime: function(c, a) {
        return this.each(function() {
            jQuery.timer.remove(this, c, a)
        })
    }
});
jQuery.extend({
    timer: {
        global: [],
        guid: 1,
        dataKey: "jQuery.timer",
        regex: /^([0-9]+(?:\.[0-9]*)?)\s*(.*s)?$/,
        powers: {
            ms: 1,
            cs: 10,
            ds: 100,
            s: 1E3,
            das: 1E4,
            hs: 1E5,
            ks: 1E6
        },
        timeParse: function(c) {
            if (c == undefined || c == null) return null;
            var a = this.regex.exec(jQuery.trim(c.toString()));
            return a[2] ? parseFloat(a[1]) * (this.powers[a[2]] || 1) : c
        },
        add: function(c, a, d, b, e) {
            var g = 0;
            if (jQuery.isFunction(d)) {
                e || (e = b);
                b = d;
                d = a
            }
            a = jQuery.timer.timeParse(a);
            if (! (typeof a != "number" || isNaN(a) || a < 0)) {
                if (typeof e != "number" || isNaN(e) || e < 0) e =
                0;
                e = e || 0;
                var f = jQuery.data(c, this.dataKey) || jQuery.data(c, this.dataKey, {});
                f[d] || (f[d] = {});
                b.timerID = b.timerID || this.guid++;
                var h = function() {
                    if (++g > e && e !== 0 || b.call(c, g) === false) jQuery.timer.remove(c, d, b)
                };
                h.timerID = b.timerID;
                f[d][b.timerID] || (f[d][b.timerID] = window.setInterval(h, a));
                this.global.push(c)
            }
        },
        remove: function(c, a, d) {
            var b = jQuery.data(c, this.dataKey),
            e;
            if (b) {
                if (a) {
                    if (b[a]) {
                        if (d) {
                            if (d.timerID) {
                                window.clearInterval(b[a][d.timerID]);
                                delete b[a][d.timerID]
                            }
                        } else for (d in b[a]) {
                            window.clearInterval(b[a][d]);
                            delete b[a][d]
                        }
                        for (e in b[a]) break;
                        if (!e) {
                            e = null;
                            delete b[a]
                        }
                    }
                } else for (a in b) this.remove(c, a, d);
                for (e in b) break;
                e || jQuery.removeData(c, this.dataKey)
            }
        }
    }
});
jQuery(window).bind("unload",
function() {
    jQuery.each(jQuery.timer.global,
    function(c, a) {
        jQuery.timer.remove(a)
    })
});
; (function(f) {
    function l(b, c, a, d) {
        var e = a.max_chars,
        g = f(c);
        if (!d) {
            c = g.text();
            if (/^[1-9]\d*$/.test(c)) e = c
        }
        h(b, g, a, e, true);
        f(b).keydown(function(i) {
            h(b, g, a, e, false);
            if (j(i, b, a, e) == false) return false
        });
        f(b).keyup(function(i) {
            h(b, g, a, e, false);
            if (j(i, b, a, e) == false) return false
        })
    }
    function j(b, c, a, d) {
        if (a.block_negative) {
            a = b.which;
            var e;
            e = typeof document.selection != "undefined" ? document.selection.createRange().text.length > 0: c[0].selectionStart != c[0].selectionEnd;
            if (! (d - f(c).val().length < 1 && (a > 47 || a == 32 || a ==
            0 || a == 13) && !b.ctrlKey && !b.altKey && !e) == false) return false
        }
        return true
    }
    function h(b, c, a, d, e) {
        d -= f(b).val().length;
        d < 0 ? k(a.on_negative, a.on_positive, b, c, a, d) : k(a.on_positive, a.on_negative, b, c, a, d);
        if (a.cloak) a.in_dom && c.attr("data-noblecount", d);
        else c.text(d);
        if (!e && jQuery.isFunction(a.on_update)) a.on_update(b, c, a, d)
    }
    function k(b, c, a, d, e, g) {
        if (b != null) if (typeof b == "string") d.addClass(b);
        else jQuery.isFunction(b) && b(a, d, e, g);
        c != null && typeof c == "string" && d.removeClass(c)
    }
    f.fn.NobleCount = function(b, c) {
        var a,
        d = false;
        if (typeof b == "string" || b instanceof jQuery) {
            a = f.extend({},
            f.fn.NobleCount.settings, c);
            if (typeof c != "undefined") d = typeof c.max_chars == "number" ? true: false;
            return this.each(function() {
                var e = f(this);
                l(e, b, a, d)
            })
        }
        return this
    };
    f.fn.NobleCount.settings = {
        on_negative: null,
        on_positive: null,
        on_update: null,
        max_chars: 140,
        block_negative: false,
        cloak: false,
        in_dom: false
    }
})(jQuery);
; (function(c) {
    function o(b) {
        return typeof b == "object" ? b: {
            top: b,
            left: b
        }
    }
    var m = c.scrollTo = function(b, g, a) {
        c(window).scrollTo(b, g, a)
    };
    m.defaults = {
        axis: "xy",
        duration: parseFloat(c.fn.jquery) >= 1.3 ? 0: 1
    };
    m.window = function() {
        return c(window)._scrollable()
    };
    c.fn._scrollable = function() {
        return this.map(function() {
            if (! (!this.nodeName || c.inArray(this.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]) != -1)) return this;
            var b = (this.contentWindow || this).document || this.ownerDocument || this;
            return c.browser.safari ||
            b.compatMode == "BackCompat" ? b.body: b.documentElement
        })
    };
    c.fn.scrollTo = function(b, g, a) {
        if (typeof g == "object") {
            a = g;
            g = 0
        }
        if (typeof a == "function") a = {
            onAfter: a
        };
        if (b == "max") b = 9E9;
        a = c.extend({},
        m.defaults, a);
        g = g || a.speed || a.duration;
        a.queue = a.queue && a.axis.length > 1;
        if (a.queue) g /= 2;
        a.offset = o(a.offset);
        a.over = o(a.over);
        return this._scrollable().each(function() {
            function i(n) {
                j.animate(e, g, a.easing, n &&
                function() {
                    n.call(this, b, a)
                })
            }
            var k = this,
            j = c(k),
            d = b,
            p,
            e = {},
            t = j.is("html,body");
            switch (typeof d) {
            case "number":
            case "string":
                if (/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(d)) {
                    d =
                    o(d);
                    break
                }
                d = c(d, this);
            case "object":
                if (d.is || d.style) p = (d = c(d)).offset()
            }
            c.each(a.axis.split(""),
            function(n, q) {
                var h = q == "x" ? "Left": "Top",
                l = h.toLowerCase(),
                f = "scroll" + h,
                r = k[f],
                s = m.max(k, q);
                if (p) {
                    e[f] = p[l] + (t ? 0: r - j.offset()[l]);
                    if (a.margin) {
                        e[f] -= parseInt(d.css("margin" + h)) || 0;
                        e[f] -= parseInt(d.css("border" + h + "Width")) || 0
                    }
                    e[f] += a.offset[l] || 0;
                    if (a.over[l]) e[f] += d[q == "x" ? "width": "height"]() * a.over[l]
                } else {
                    h = d[l];
                    e[f] = h.slice && h.slice( - 1) == "%" ? parseFloat(h) / 100 * s: h
                }
                if (/^\d+$/.test(e[f])) e[f] = e[f] <= 0 ?
                0: Math.min(e[f], s);
                if (!n && a.queue) {
                    r != e[f] && i(a.onAfterFirst);
                    delete e[f]
                }
            });
            i(a.onAfter)
        }).end()
    };
    m.max = function(b, g) {
        var a = g == "x" ? "Width": "Height",
        i = "scroll" + a;
        if (!c(b).is("html,body")) return b[i] - c(b)[a.toLowerCase()]();
        a = "client" + a;
        var k = b.ownerDocument.documentElement,
        j = b.ownerDocument.body;
        return Math.max(k[i], j[i]) - Math.min(k[a], j[a])
    }
})(jQuery);
;
jQuery.fn.nospam = function(a) {
    a = jQuery.extend({
        replaceText: false,
        filterLevel: "normal"
    },
    a);
    return this.each(function() {
        e = null;
        if (e = a.filterLevel == "low" ? $(this).is("a[rel]") ? $(this).attr("rel").replace("//", "@").replace(/\//g, ".") : $(this).text().replace("//", "@").replace(/\//g, ".") : $(this).is("a[rel]") ? $(this).attr("rel").split("").reverse().join("").replace("//", "@").replace(/\//g, ".") : $(this).text().split("").reverse().join("").replace("//", "@").replace(/\//g, ".")) if ($(this).is("a[rel]")) {
            $(this).attr("href",
            "mailto:" + e);
            a.replaceText && $(this).text(e)
        } else $(this).text(e)
    })
};
; (function(g) {
    function m() {
        if (e.jStorage) try {
            d = n(String(e.jStorage))
        } catch(a) {
            e.jStorage = "{}"
        } else e.jStorage = "{}";
        j = e.jStorage ? String(e.jStorage).length: 0
    }
    function k() {
        try {
            e.jStorage = o(d);
            if (b) {
                b.setAttribute("jStorage", e.jStorage);
                b.save("jStorage")
            }
            j = e.jStorage ? String(e.jStorage).length: 0
        } catch(a) {}
    }
    function l(a) {
        if (!a || typeof a != "string" && typeof a != "number") throw new TypeError("Key name must be string or numeric");
        return true
    }
    if (!g || !(g.toJSON || Object.toJSON || window.JSON)) throw Error("jQuery, MooTools or Prototype needs to be loaded before jStorage!");
    var d = {},
    e = {
        jStorage: "{}"
    },
    b = null,
    j = 0,
    o = g.toJSON || Object.toJSON || window.JSON && (JSON.encode || JSON.stringify),
    n = g.evalJSON || window.JSON && (JSON.decode || JSON.parse) ||
    function(a) {
        return String(a).evalJSON()
    },
    f = false;
    _XMLService = {
        isXML: function(a) {
            return (a = (a ? a.ownerDocument || a: 0).documentElement) ? a.nodeName !== "HTML": false
        },
        encode: function(a) {
            if (!this.isXML(a)) return false;
            try {
                return (new XMLSerializer).serializeToString(a)
            } catch(c) {
                try {
                    return a.xml
                } catch(h) {}
            }
            return false
        },
        decode: function(a) {
            var c = "DOMParser" in
            window && (new DOMParser).parseFromString || window.ActiveXObject &&
            function(h) {
                var i = new ActiveXObject("Microsoft.XMLDOM");
                i.async = "false";
                i.loadXML(h);
                return i
            };
            if (!c) return false;
            a = c.call("DOMParser" in window && new DOMParser || window, a, "text/xml");
            return this.isXML(a) ? a: false
        }
    };
    g.jStorage = {
        version: "0.1.5.0",
        set: function(a, c) {
            l(a);
            if (_XMLService.isXML(c)) c = {
                _is_xml: true,
                xml: _XMLService.encode(c)
            };
            d[a] = c;
            k();
            return c
        },
        get: function(a, c) {
            l(a);
            if (a in d) return typeof d[a] == "object" && d[a]._is_xml && d[a]._is_xml ?
            _XMLService.decode(d[a].xml) : d[a];
            return typeof c == "undefined" ? null: c
        },
        deleteKey: function(a) {
            l(a);
            if (a in d) {
                delete d[a];
                k();
                return true
            }
            return false
        },
        flush: function() {
            d = {};
            k();
            try {
                window.localStorage.clear()
            } catch(a) {}
            return true
        },
        storageObj: function() {
            function a() {}
            a.prototype = d;
            return new a
        },
        index: function() {
            var a = [],
            c;
            for (c in d) d.hasOwnProperty(c) && a.push(c);
            return a
        },
        storageSize: function() {
            return j
        },
        currentBackend: function() {
            return f
        },
        storageAvailable: function() {
            return !! f
        },
        reInit: function() {
            var a;
            if (b && b.addBehavior) {
                a = document.createElement("link");
                b.parentNode.replaceChild(a, b);
                b = a;
                b.style.behavior = "url(#default#userData)";
                document.getElementsByTagName("head")[0].appendChild(b);
                b.load("jStorage");
                a = "{}";
                try {
                    a = b.getAttribute("jStorage")
                } catch(c) {}
                e.jStorage = a;
                f = "userDataBehavior"
            }
            m()
        }
    }; (function() {
        if ("localStorage" in window) try {
            if (window.localStorage) {
                e = window.localStorage;
                f = "localStorage"
            }
        } catch(a) {} else if ("globalStorage" in window) try {
            if (window.globalStorage) {
                e = window.globalStorage[window.location.hostname];
                f = "globalStorage"
            }
        } catch(c) {} else {
            b = document.createElement("link");
            if (b.addBehavior) {
                b.style.behavior = "url(#default#userData)";
                document.getElementsByTagName("head")[0].appendChild(b);
                b.load("jStorage");
                var h = "{}";
                try {
                    h = b.getAttribute("jStorage")
                } catch(i) {}
                e.jStorage = h;
                f = "userDataBehavior"
            } else {
                b = null;
                return
            }
        }
        m()
    })()
})(window.jQuery || window.$);
; (function(c) {
    var b = {};
    c.memstorage = {
        version: "0.0.1",
        set: function(a, d) {
            b[a] = d;
            return this
        },
        get: function(a) {
            return typeof b[a] !== "undefined" ? b[a] : !!b[a]
        }
    }
})($);
;
/*
 * jQuery autoResize (textarea auto-resizer)
 * @copyright James Padolsey http://james.padolsey.com
 * @version 1.04
 */

 (function(a) {
    a.fn.autoResize = function(j) {
        var b = a.extend({
            onResize: function() {},
            animate: true,
            animateDuration: 150,
            animateCallback: function() {},
            extraSpace: 20,
            limit: 1000
        },
        j);
        this.filter('textarea').each(function() {
            var c = a(this).css({
                resize: 'none',
                'overflow-y': 'hidden'
            }),
            k = c.height(),
            f = (function() {
                var l = ['height', 'width', 'lineHeight', 'textDecoration', 'letterSpacing'],
                h = {};
                a.each(l,
                function(d, e) {
                    h[e] = c.css(e)
                });
                return c.clone().removeAttr('id').removeAttr('name').css({
                    position: 'absolute',
                    top: 0,
                    left: -9999
                }).css(h).attr('tabIndex', '-1').insertBefore(c)
            })(),
            i = null,
            g = function() {
                f.height(0).val(a(this).val()).scrollTop(10000);
                var d = Math.max(f.scrollTop(), k) + b.extraSpace,
                e = a(this).add(f);
                if (i === d) {
                    return
                }
                i = d;
                if (d >= b.limit) {
                    a(this).css('overflow-y', '');
                    return
                }
                b.onResize.call(this);
                b.animate && c.css('display') === 'block' ? e.stop().animate({
                    height: d
                },
                b.animateDuration, b.animateCallback) : e.height(d)
            };
            c.unbind('.dynSiz').bind('keyup.dynSiz', g).bind('keydown.dynSiz', g).bind('change.dynSiz', g)
        });
        return this
    }
})(jQuery);

;
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(e, a, c, b, d) {
        return jQuery.easing[jQuery.easing.def](e, a, c, b, d)
    },
    easeInQuad: function(e, a, c, b, d) {
        return b * (a /= d) * a + c
    },
    easeOutQuad: function(e, a, c, b, d) {
        return - b * (a /= d) * (a - 2) + c
    },
    easeInOutQuad: function(e, a, c, b, d) {
        if ((a /= d / 2) < 1) return b / 2 * a * a + c;
        return - b / 2 * (--a * (a - 2) - 1) + c
    },
    easeInCubic: function(e, a, c, b, d) {
        return b * (a /= d) * a * a + c
    },
    easeOutCubic: function(e, a, c, b, d) {
        return b * ((a = a / d - 1) * a * a + 1) + c
    },
    easeInOutCubic: function(e, a, c, b, d) {
        if ((a /= d / 2) < 1) return b /
        2 * a * a * a + c;
        return b / 2 * ((a -= 2) * a * a + 2) + c
    },
    easeInQuart: function(e, a, c, b, d) {
        return b * (a /= d) * a * a * a + c
    },
    easeOutQuart: function(e, a, c, b, d) {
        return - b * ((a = a / d - 1) * a * a * a - 1) + c
    },
    easeInOutQuart: function(e, a, c, b, d) {
        if ((a /= d / 2) < 1) return b / 2 * a * a * a * a + c;
        return - b / 2 * ((a -= 2) * a * a * a - 2) + c
    },
    easeInQuint: function(e, a, c, b, d) {
        return b * (a /= d) * a * a * a * a + c
    },
    easeOutQuint: function(e, a, c, b, d) {
        return b * ((a = a / d - 1) * a * a * a * a + 1) + c
    },
    easeInOutQuint: function(e, a, c, b, d) {
        if ((a /= d / 2) < 1) return b / 2 * a * a * a * a * a + c;
        return b / 2 * ((a -= 2) * a * a * a * a + 2) + c
    },
    easeInSine: function(e,
    a, c, b, d) {
        return - b * Math.cos(a / d * (Math.PI / 2)) + b + c
    },
    easeOutSine: function(e, a, c, b, d) {
        return b * Math.sin(a / d * (Math.PI / 2)) + c
    },
    easeInOutSine: function(e, a, c, b, d) {
        return - b / 2 * (Math.cos(Math.PI * a / d) - 1) + c
    },
    easeInExpo: function(e, a, c, b, d) {
        return a == 0 ? c: b * Math.pow(2, 10 * (a / d - 1)) + c
    },
    easeOutExpo: function(e, a, c, b, d) {
        return a == d ? c + b: b * ( - Math.pow(2, -10 * a / d) + 1) + c
    },
    easeInOutExpo: function(e, a, c, b, d) {
        if (a == 0) return c;
        if (a == d) return c + b;
        if ((a /= d / 2) < 1) return b / 2 * Math.pow(2, 10 * (a - 1)) + c;
        return b / 2 * ( - Math.pow(2, -10 * --a) + 2) + c
    },
    easeInCirc: function(e, a, c, b, d) {
        return - b * (Math.sqrt(1 - (a /= d) * a) - 1) + c
    },
    easeOutCirc: function(e, a, c, b, d) {
        return b * Math.sqrt(1 - (a = a / d - 1) * a) + c
    },
    easeInOutCirc: function(e, a, c, b, d) {
        if ((a /= d / 2) < 1) return - b / 2 * (Math.sqrt(1 - a * a) - 1) + c;
        return b / 2 * (Math.sqrt(1 - (a -= 2) * a) + 1) + c
    },
    easeInElastic: function(e, a, c, b, d) {
        e = 1.70158;
        var f = 0,
        g = b;
        if (a == 0) return c;
        if ((a /= d) == 1) return c + b;
        f || (f = d * 0.3);
        if (g < Math.abs(b)) {
            g = b;
            e = f / 4
        } else e = f / (2 * Math.PI) * Math.asin(b / g);
        return - (g * Math.pow(2, 10 * (a -= 1)) * Math.sin((a * d - e) * 2 * Math.PI / f)) + c
    },
    easeOutElastic: function(e,
    a, c, b, d) {
        e = 1.70158;
        var f = 0,
        g = b;
        if (a == 0) return c;
        if ((a /= d) == 1) return c + b;
        f || (f = d * 0.3);
        if (g < Math.abs(b)) {
            g = b;
            e = f / 4
        } else e = f / (2 * Math.PI) * Math.asin(b / g);
        return g * Math.pow(2, -10 * a) * Math.sin((a * d - e) * 2 * Math.PI / f) + b + c
    },
    easeInOutElastic: function(e, a, c, b, d) {
        e = 1.70158;
        var f = 0,
        g = b;
        if (a == 0) return c;
        if ((a /= d / 2) == 2) return c + b;
        f || (f = d * 0.3 * 1.5);
        if (g < Math.abs(b)) {
            g = b;
            e = f / 4
        } else e = f / (2 * Math.PI) * Math.asin(b / g);
        if (a < 1) return - 0.5 * g * Math.pow(2, 10 * (a -= 1)) * Math.sin((a * d - e) * 2 * Math.PI / f) + c;
        return g * Math.pow(2, -10 * (a -= 1)) * Math.sin((a *
        d - e) * 2 * Math.PI / f) * 0.5 + b + c
    },
    easeInBack: function(e, a, c, b, d, f) {
        if (f == undefined) f = 1.70158;
        return b * (a /= d) * a * ((f + 1) * a - f) + c
    },
    easeOutBack: function(e, a, c, b, d, f) {
        if (f == undefined) f = 1.70158;
        return b * ((a = a / d - 1) * a * ((f + 1) * a + f) + 1) + c
    },
    easeInOutBack: function(e, a, c, b, d, f) {
        if (f == undefined) f = 1.70158;
        if ((a /= d / 2) < 1) return b / 2 * a * a * (((f *= 1.525) + 1) * a - f) + c;
        return b / 2 * ((a -= 2) * a * (((f *= 1.525) + 1) * a + f) + 2) + c
    },
    easeInBounce: function(e, a, c, b, d) {
        return b - jQuery.easing.easeOutBounce(e, d - a, 0, b, d) + c
    },
    easeOutBounce: function(e, a, c, b, d) {
        return (a /=
        d) < 1 / 2.75 ? b * 7.5625 * a * a + c: a < 2 / 2.75 ? b * (7.5625 * (a -= 1.5 / 2.75) * a + 0.75) + c: a < 2.5 / 2.75 ? b * (7.5625 * (a -= 2.25 / 2.75) * a + 0.9375) + c: b * (7.5625 * (a -= 2.625 / 2.75) * a + 0.984375) + c
    },
    easeInOutBounce: function(e, a, c, b, d) {
        if (a < d / 2) return jQuery.easing.easeInBounce(e, a * 2, 0, b, d) * 0.5 + c;
        return jQuery.easing.easeOutBounce(e, a * 2 - d, 0, b, d) * 0.5 + b * 0.5 + c
    }
});
;
var Network = {
    authorized_networks: {},
    popup_timer: false,
    init: function() {
        var a;
        if ($.cookie("ci_session")) {
            a = unserialize($.cookie("ci_session"));
            if (a.social_networks) this.authorized_networks = $.parseJSON(a.social_networks)
        }
        return this
    },
    reload: function() {
        this.authorized_networks = {};
        return this.init()
    },
    has: function(a) {
        a = this.parsePlatform(a);
        return typeof this.authorized_networks[a.platform] === "object" && typeof this.authorized_networks[a.platform].id !== "undefined" && typeof this.authorized_networks[a.platform].oauth_token !==
        "undefined" ? a.permission ? $.inArray(a.permission, this.authorized_networks[a.platform].permissions) !== -1 ? true: false: true: false
    },
    parsePlatform: function(a) {
        var f,
        c = {};
        a = a.split(".");
        f = a[0];
        a = a[1] || false;
        c.platform = f;
        c.permission = a;
        return c
    },
    isRequired: function(a) {
        return a.attr("data-requires-credential") || false
    },
    share: function(a) {
        var f = this,
        c = {};
        a = $.extend({
            platform: null,
            payload: null,
            success: function() {
                return true
            },
            failure: function() {
                return false
            }
        },
        a);
        if (a.platform) $.ajax({
            url: "/connect/" + a.platform +
            "/share",
            data: a.payload,
            type: "post",
            dataType: "json",
            cache: false,
            success: function(b) {
                b.response = b.data || {};
                switch (b.code) {
                case "success":
                    return a.success(b.response);
                case "failure":
                    b.remove_credential === true && f.remove(a.platform);
                    if (typeof b.reauth === "boolean" && b.reauth) typeof b.reauth_field !== "undefined" ? f.remove(a.platform, b.reauth_field) : f.remove(a.platform);
                    return a.failure(b)
                }
            },
            error: function() {
                c.response = {
                    status: "error",
                    message: "An unexpected error occurred"
                };
                return a.failure(c)
            }
        });
        else {
            c.response =
            {
                status: "fail",
                message: "No platform selected"
            };
            return a.failure(c)
        }
    },
    remove: function(a, f) {
        var c;
        if (f) {
            c = $.inArray(f, this.authorized_networks[a].permissions);
            if (c !== -1) {
                var b = Network.authorized_networks.facebook.permissions,
                d = unserialize($.cookie("ci_session")),
                g = JSON.parse(d.social_networks);
                g.facebook.permissions = b;
                d.social_networks = JSON.stringify(g);
                $.cookie("ci_session", serialize(d), {
                    path: "/",
                    domain: ".svpply.com"
                });
                return this.authorized_networks[a].permissions.splice(c, 1)
            }
        } else delete this.authorized_networks[a]
    },
    require: function(a, f, c) {
        var b = this,
        d = $(window),
        g,
        h = b.parsePlatform(a),
        i = typeof window.screenX != "undefined" ? window.screenX: window.screenLeft,
        e = typeof window.screenY != "undefined" ? window.screenY: window.screenTop,
        j = typeof window.outerHeight != "undefined" ? window.outerHeight: document.documentElement.clientHeight - 22;
        i = parseInt((i < 0 ? window.screen.width + i: i) + ((typeof window.outerWidth != "undefined" ? window.outerWidth: document.documentElement.clientWidth) - 800) / 2, 10);
        e = "location=0,status=0,width=800,height=400,top=" +
        (parseInt(e + (j - 400) / 2.5, 10) - 150) + ",left=" + i;
        if (!b.has(a) && b.reload() && !b.has(a)) if (typeof f.data("events").oauthNotConnected === "undefined") {
            window.open("/connect/" + h.platform + "?scope=" + (h.permission || ""), "OAuthWindow", e);
            g = function() {
                d.unbind("NetworkHandlerClosedSuccess");
                d.unbind("NetworkHandlerClosedFail")
            };
            d.bind("NetworkHandlerOpenedSuccess",
            function() {
                clearTimeout(b.popup_timer);
                d.unbind("NetworkHandlerOpenedSuccess")
            });
            d.bind("NetworkHandlerClosedSuccess",
            function() {
                g();
                return c()
            });
            d.bind("NetworkHandlerClosedFail",
            function() {
                return g()
            });
            b.popup_timer = setTimeout(function() {},
            2E3)
        } else f.trigger("oauthNotConnected");
        else return c()
    },
    intercede: function() {
        var a = this,
        f;
        $(document).data("_networkJSHash", {});
        if (typeof jQuery !== "undefined") {
            f = jQuery.fn.bind;
            jQuery.fn.extend({
                bind: function(c, b, d) {
                    var g;
                    if (arguments.length === 2 || b === false) {
                        d = b;
                        b = undefined
                    }
                    g = d;
                    d = function() {
                        var h = arguments[0],
                        i = arguments,
                        e = $(h.currentTarget),
                        j = a.isRequired(e),
                        l = typeof e.data("events") !== "undefined" ? e.data("events")[h.type].length: 0;
                        if (j &&
                        c !== "oauthNotConnected") {
                            if (e.data("_network_fired") !== true) {
                                e.data("_network_events", {
                                    total: l,
                                    fired: 0
                                });
                                h.preventDefault();
                                h.stopImmediatePropagation()
                            }
                            return a.require(j, e,
                            function() {
                                var k = e.data("_network_events");
                                if (e.data("_network_fired") === true) {
                                    g.apply(h.target, i);
                                    k.fired++;
                                    if (k.fired === k.total) {
                                        e.removeData("_network_fired");
                                        e.removeData("_network_events")
                                    }
                                } else {
                                    e.data("_network_fired", true);
                                    e.trigger(c)
                                }
                            })
                        } else return g.apply(h.currentTarget, i)
                    };
                    $(document).data("_networkJSHash")[g] = d;
                    return f.apply(this,
                    [c, b, d])
                },
                unbind: function(c, b) {
                    if (typeof c === "object" && !c.preventDefault) for (var d in c) this.unbind(d, c[d]);
                    else {
                        d = 0;
                        for (var g = this.length; d < g; d++) {
                            if (b) {
                                $data = $(document).data("_networkJSHash");
                                if (typeof $data[b] !== "undefined") b = $data[b]
                            }
                            jQuery.event.remove(this[d], c, b)
                        }
                    }
                    return this
                }
            })
        }
        return this
    }
}.intercede().init();
;
var DataStore = Class.extend({
    fields: [],
    relationships: [],
    db: "",
    init: function(a) {
        var b = {
            engine: $.jStorage,
            name: ""
        };
        $.extend(b, a);
        this.storage = b.engine;
        this.db = b.name + ":";
        this._refresh = function() {};
        return this
    },
    setRelationships: function(a) {
        this.relationships = a;
        return this
    },
    all: function(a) {
        a(this.getData())
    },
    getDB: function() {
        return this.db.split("::")[1].split(":")[0]
    },
    setSearchFields: function(a) {
        this.fields = $.isArray(a) ? a: [a];
        return this
    },
    get: function(a, b) {
        var c = b === false ? a: this.db + a;
        if (this.db) return this.storage.get(c);
        else if (ENVIRONMENT !== PRODUCTION) {
            console.log("You must init the DataStore with a DB string.");
            return false
        }
    },
    DBs: function() {
        var a = {};
        a[this.getDB()] = this;
        return a
    },
    set: function(a, b, c) {
        a = c === false ? a: this.db + a;
        if (this.db) return this.storage.set(a, b);
        else if (ENVIRONMENT !== PRODUCTION) {
            console.log("You must init the DataStore with a DB string.");
            return false
        }
    },
    setData: function(a) {
        if (this.db) return this.storage.set(this.db, a || [])
    },
    getData: function() {
        var a;
        if (this.db) {
            a = this.storage.get(this.db);
            a === null &&
            this.refresh();
            return a || []
        }
    },
    query: function(a, b) {
        var c = this,
        e = RegExp(a);
        b = b ||
        function() {};
        var f = [],
        d = [],
        h;
        if (c.db) {
            d = c.getData();
            h = d.length;
            h > 0 ? $.each(d,
            function(j, g) {
                $.each(c.fields,
                function(k, i) {
                    if (e.test(g[i])) {
                        g.matched_on = i;
                        g.from_db = c.getDB();
                        f.push(g);
                        return false
                    }
                });
                if (!--h) return b(f)
            }) : b([])
        } else if (ENVIRONMENT !== PRODUCTION) {
            console.log("You must init the DataStore with a DB string");
            return false
        }
    },
    setRefresh: function(a) {
        this._refresh = a;
        return this
    },
    refresh: function(a) {
        var b = this;
        a = a ||
        function() {};
        if (b.db) if (typeof b._refresh === "function") b._refresh(function(c) {
            if (typeof c === "object") {
                b.flush(function() {
                    b.setData(c)
                });
                return a.call(b, {
                    db: b.db,
                    status: true,
                    name: b.getDB()
                })
            } else return a.call(b, {
                db: b.db,
                status: false,
                name: b.getDB()
            })
        });
        else return a.call(b, {
            db: b.db,
            status: true,
            name: b.getDB()
        });
        else if (ENVIRONMENT !== PRODUCTION) {
            console.log("You must init the DataStore with a DB string");
            return false
        }
    },
    flush: function(a) {
        this.setData([]);
        return a(true)
    }
});
DataStore.facebook = function() {
    return (new DataStore({
        name: current_user.id + "::fb"
    })).setRefresh(function(a) {
        if (Network.has("facebook")) $.get("/connect/facebook/friends.json",
        function(b) {
            var c = [];
            if (typeof b._status !== "boolean" || b.status === false) {
                $.each(b,
                function(e, f) {
                    var d = {};
                    d.id = e;
                    d.name = f.name;
                    d.profile_image_url = f.profile;
                    d._identifier = "id";
                    c.push(d)
                });
                return a(c)
            } else {
                Network.remove("facebook");
                return a(false)
            }
        });
        else return a(false)
    }).setSearchFields(["name"]).setRelationships([{
        type: "slave",
        field: "id",
        parse: function(a) {
            return parseInt(a, 10)
        },
        common: "facebook_id"
    }])
};
DataStore.Set = function() {
    return (new DataStore({
        name: current_user.id + "::sets"
    })).setRefresh(function(a) {
        current_user.sets(function(b) {
            a(b)
        })
    })
};
DataStore.svpply = function() {
    return (new DataStore({
        name: current_user.id + "::sv"
    })).setRefresh(function(a) {
        current_user.users_following(function(b) {
            $.each(b,
            function(c, e) {
                e.name = e.display_name;
                e._identifier = "id"
            });
            return a(b)
        })
    }).setSearchFields(["name", "username"]).setRelationships([{
        type: "master",
        field: "facebook_id",
        parse: function(a) {
            return parseInt(a, 10)
        },
        common: "facebook_id"
    },
    {
        type: "master",
        field: "twitter_id",
        parse: function(a) {
            return parseInt(a, 10)
        },
        common: "twitter_id"
    }])
};
DataStore.svpply_followers = function() {
    return (new DataStore({
        name: current_user.id + "::svfol"
    })).setRefresh(function(a) {
        current_user.user_followers(function(b) {
            $.each(b,
            function(c, e) {
                e.name = e.display_name;
                e._identifier = "id"
            });
            return a(b)
        })
    }).setSearchFields(["name", "username"])
};
DataStore.twitter = function() {
    return (new DataStore({
        name: current_user.id + "::tw"
    })).setRefresh(function(a) {
        if (Network.has("twitter")) $.get("/connect/twitter/friends.json",
        function(b) {
            var c = [];
            if (typeof b._status !== "boolean" || b.status === false) {
                $.each(b,
                function(e, f) {
                    var d = {};
                    d.id = e;
                    d.name = f.display_name;
                    d.screen_name = f.screen_name;
                    d.real_name = f.name;
                    d.profile_image_url = f.profile;
                    d._identifier = "screen_name";
                    c.push(d)
                });
                return a(c)
            } else {
                Network.remove("twitter");
                return a(false)
            }
        });
        else return a(false)
    }).setSearchFields(["name",
    "screen_name"]).setRelationships([{
        type: "slave",
        field: "id",
        parse: function(a) {
            return parseInt(a, 10)
        },
        common: "twitter_id"
    }])
};
;
var MultiStore = Class.extend({
    dbs: {},
    db_array: [],
    init: function(g) {
        var a = this;
        $.each(g,
        function(c, f) {
            a.db_array.push(c);
            a.dbs[c] = f
        });
        return this
    },
    DBs: function() {
        return this.dbs
    },
    query: function(g, a, c) {
        var f = this.db_array.length;
        c = typeof a === "function" ? a: c ||
        function() {};
        a = typeof a === "function" ? false: a;
        var h = [],
        e = {};
        $.each(this.dbs,
        function(l, i) {
            a != false && l.toLowerCase() !== a || i.query(g,
            function(m) {
                $.each(m,
                function(o, d) {
                    var j = true;
                    d.from_db = i.getDB();
                    typeof i.relationships !== "undefined" && $.each(i.relationships,
                    function(p, b) {
                        var k = b.parse ||
                        function(n) {
                            return n
                        };
                        switch (b.type) {
                        case "master":
                            if (typeof d[b.field] !== "undefined" && d[b.field] !== false) {
                                if (typeof e[b.common] === "undefined") e[b.common] = [];
                                e[b.common].push(k(d[b.field]))
                            }
                            break;
                        case "slave":
                            if (typeof d[b.field] !== "undefined" && d[b.field] !== false && typeof e[b.common] !== "undefined") if ($.inArray(k(d[b.field]), e[b.common]) !== -1) j = false
                        }
                    });
                    j && h.push(d)
                });
                if (!--f) return c(h)
            })
        })
    },
    refresh: function(g) {
        var a = [],
        c = this;
        $.each(c.dbs,
        function(h, e) {
            a.push(e)
        });
        var f =
        function() {
            a.length && a.shift().refresh(function(h) {
                f();
                g.apply(c, [h])
            })
        };
        f()
    }
});
;
var $db = {
    dbs: {},
    init: function(a) {
        var b = this;
        a && $.each(a,
        function(c, d) {
            b.dbs[c] = d
        })
    },
    from: function(a) {
        return this.dbs[a] ? this.dbs[a] : false
    },
    get: function(a) {
        return this.from(a)
    },
    has: function(a) {
        return !! this.get(a)
    }
};
; (function() {
    jQuery.each({
        getSelection: function() {
            var a = this.jquery ? this[0] : this;
            return ("selectionStart" in a &&
            function() {
                var b = a.selectionEnd - a.selectionStart;
                return {
                    start: a.selectionStart,
                    end: a.selectionEnd,
                    length: b,
                    text: a.value.substr(a.selectionStart, b)
                }
            } || document.selection &&
            function() {
                a.focus();
                var b = document.selection.createRange();
                if (b == null) return {
                    start: 0,
                    end: a.value.length,
                    length: 0
                };
                var c = a.createTextRange(),
                d = c.duplicate();
                c.moveToBookmark(b.getBookmark());
                d.setEndPoint("EndToStart", c);
                return {
                    start: d.text.length,
                    end: d.text.length + b.text.length,
                    length: b.text.length,
                    text: b.text
                }
            } ||
            function() {
                return {
                    start: 0,
                    end: a.value.length,
                    length: 0
                }
            })()
        },
        replaceSelection: function(a, b, c) {
            var d = this.jquery ? this[0] : this,
            e = b + (c.length - (b - a));
            return ("selectionStart" in d &&
            function() {
                d.value = d.value.substr(0, a) + c + d.value.substr(b, d.value.length);
                d.setSelectionRange(e, e);
                return this
            } || document.selection &&
            function() {
                d.focus();
                d.value = d.value.substr(0, a) + c + d.value.substr(b, d.value.length);
                d.value = d.value;
                return this
            } ||
            function() {
                d.value +=
                c;
                return this
            })()
        }
    },
    function(a) {
        jQuery.fn[a] = this
    })
})();
 (function(a) {
    var b = {},
    c = [],
    d = 0;
    a.fn.publish = function(e, g, f) {
        var h = this,
        j = function() {
            var k = b[e],
            m,
            l;
            if (typeof k != "undefined") {
                m = k.length;
                g = g || {};
                d++;
                h.each(function(i, n) {
                    g._publisher_ = n;
                    for (i = 0; i < m; i++) k[i].callback.call(k[i].subscriber, g)
                });
                d--;
                if (c.length > 0 && d == 0) for (; l = c.pop();) l.unsubscriber.unsubscribe(l.topic)
            }
        };
        f === false ? setTimeout(j, 0) : j();
        return this
    };
    a.fn.bindPublisher = function(e, g, f, h) {
        var j = this;
        f = f || null;
        this.bind(e.split(" ").join(".publisher ") + ".publisher", f,
        function() {
            j.publish(g,
            f, h);
            return false
        });
        return this
    };
    a.fn.subscribe = function(e, g) {
        if (typeof b[e] == "undefined") b[e] = [];
        this.each(function(f, h) {
            b[e][b[e].length] = {
                subscriber: h,
                callback: g
            }
        });
        return this
    };
    a.fn.subscribeOnce = function(e, g) {
        var f = this,
        h = false;
        return this.subscribe(e,
        function(j) {
            g.call(this, j);
            if (h === false) {
                f.unsubscribe(e);
                h = true
            }
        })
    };
    a.fn.unsubscribe = function(e) {
        if (typeof b[e] == "undefined") return this;
        if (d != 0) {
            c[c.length] = {
                unsubscriber: this,
                topic: e
            };
            return this
        }
        this.each(function(g, f) {
            b[e] = a.grep(b[e],
            function(h) {
                return f !==
                h.subscriber
            })
        });
        b[e].length === 0 && delete b[e];
        return this
    }
})(jQuery);
var Wire = function() {
    return {
        init: function(a) {
            this.cursor = {
                start: 0,
                end: 0
            };
            this.active = this.started = false;
            this.parent = this.input = null;
            this.deactivateOnSpace = false;
            this.setInput(a);
            return this
        },
        setInput: function(a) {
            return this.input = typeof a.jquery !== "undefined" ? a: $(a)
        },
        getInput: function() {
            return this.input
        },
        initEvents: function() {
            var a = this,
            b = $(a.parent),
            c = $(a);
            b.subscribe("/Edison/inputUpdated" + a.parent.guid,
            function(d) {
                a.updateOffsets(d[0], d[1])
            }).subscribe("/Edison/focusin" + a.parent.guid,
            function(d) {
                a.shouldShowOrHide(d)
            }).subscribe("/Edison/keyup" +
            a.parent.guid,
            function(d) {
                a.shouldShowOrHide(d)
            });
            a.input.subscribe("/Wire/select" + a.parent.guid,
            function(d) {
                a.completeWithObj(d)
            });
            c.subscribe("/Wire/noresults" + a.parent.guid,
            function() {
                if (!a.deactivateOnSpace) {
                    a.deactivateOnSpace = true;
                    $(a).subscribe("/Edison/keys/space" + a.parent.guid,
                    function() {
                        a.deactivate()
                    })
                }
            }).subscribe("/Wire/searchTerm" + a.parent.guid,
            function(d) {
                d = typeof d !== "object" ? d.replace(a.parent.activeCharacter, "") : {};
                if (typeof d !== "object") d !== "" && a.parent.options.datastore.query(RegExp("(^" +
                d + "|\\s" + d + ")", "i"),
                function(e) {
                    if (e.length > 0) {
                        a.deactivateOnSpace = false;
                        c.unsubscribe("/Edison/keys/space" + a.parent.guid);
                        c.publish("/Wire/results" + a.parent.guid, e)
                    } else $(a).publish("/Wire/noresults" + a.parent.guid)
                });
                else a._alwaysActive ? $(a).publish("/Wire/noresults" + a.parent.guid) : a.deactivate()
            })
        },
        start: function() {
            this.started = true;
            this.cursor.start = this.parent.cursor.start;
            this.cursor.end = this.parent.cursor.end;
            $(this).publish("/Wire/enable" + this.parent.guid)
        },
        updateOffsets: function(a, b) {
            var c =
            {
                start: a - b,
                end: a
            },
            d = $(this);
            if (this.started) if (this.active) {
                if (c.start > this.cursor.start) {
                    this.cursor.end += b;
                    this.cursor.end = this.cursor.end < 0 ? 0: this.cursor.end
                } else if (c.start <= this.cursor.start) if (!this._alwaysActive) {
                    this.cursor.start += b;
                    this.cursor.end += b
                }
                if (b < 0 && a == this.cursor.start || a - b == this.cursor.start + 1 && this.cursor.start == this.cursor.end) if (!this._alwaysActive) {
                    d.publish("/Wire/disable" + this.parent.guid);
                    this.deactivate()
                }
                this.searchTerm();
                d.publish("/Wire/offsetsUpdated")
            } else {
                this.active =
                true;
                d.publish("/Wire/activated")
            }
        },
        searchTerm: function() {
            var a = "",
            b = this.input.val(),
            c = this.cursor.end - this.cursor.start + 1,
            d = 0;
            if (this.active) {
                for (; d < c; d++) a += b.charAt(this.cursor.start + d);
                $(this).publish("/Wire/searchTerm" + this.parent.guid, a)
            }
        },
        completeWithObj: function(a) {
            if (this.started && this.active) {
                this.input.replaceSelection(this.cursor.start, ++this.cursor.end, a.name + " ");
                this.deactivate(); (function(b) {
                    setTimeout(function() {
                        b.input.focus()
                    },
                    20)
                })(this)
            }
        },
        shouldShowOrHide: function(a) {
            if (this.active &&
            this.started) a.start >= this.cursor.start && a.end <= this.cursor.end + 1 ? $(this).publish("/Wire/showresults" + this.parent.guid) : $(this).publish("/Wire/hideresults" + this.parent.guid)
        },
        deactivate: function() {
            this.started = this.active = false;
            $(this).publish("/Wire/noresults" + this.parent.guid)
        }
    }
},
ResultsCore = function() {
    return {
        init: function(a) {
            var b = {
                parent: "",
                input: "",
                dom: $("<div>", {
                    "class": "resultscore"
                })
            },
            c = this,
            d;
            c.options = $.extend(b, a);
            c.oldResults = false;
            if (!c.options.input) {
                c.options.input = c.parent().getWire().getInput();
                c.options.input = c.options.input.jquery ? c.options.input: $(c.options.input)
            }
            c.options.dom.insertAfter(c.parent().getWire().getInput());
            c.options.dom.css({
                width: c.parent().getWire().getInput().outerWidth(true),
                margin: "-2px 0 0 -1px"
            });
            $(c.parent().getWire()).subscribe("/Wire/disable" + c.parent().guid,
            function() {
                c.active = false
            }).subscribe("/Wire/enable" + c.parent().guid,
            function() {
                c.active = true
            }).subscribe("/Wire/results" + c.parent().guid,
            function(e) {
                c.refreshResults(e)
            }).subscribe("/Wire/noresults" + c.parent().guid,
            function() {
                c.clearResults()
            }).subscribe("/Wire/showresults" + c.parent().guid,
            function() {
                c.results === true && c.show()
            }).subscribe("/Wire/hideresults" + c.parent().guid,
            function() {
                c.hide()
            });
            d = function() {
                if ($(".hover", c.options.dom).length) $(".hover", c.options.dom).get(0) === $("li:last-child", c.options.dom).get(0) ? $("li:first-child", c.options.dom).mouseenter() : $(".hover", c.options.dom).next().mouseenter();
                else $("li:first-child", c.options.dom).mouseenter()
            };
            $(c.options.parent).subscribe("/Edison/focusout" +
            c.options.parent.guid,
            function() {
                c.hide()
            }).subscribe("/Edison/keys/up" + c.options.parent.guid,
            function() {
                if ($(".hover", c.options.dom).length) $(".hover", c.options.dom).get(0) === $("li:first-child", c.options.dom).get(0) ? $("li:last-child", c.options.dom).mouseenter() : $(".hover", c.options.dom).prev().mouseenter();
                else $("li:first-child", c.options.dom).mouseenter()
            }).subscribe("/Edison/keys/down" + c.options.parent.guid,
            function() {
                d()
            }).subscribe("/Edison/keys/tab" + c.options.parent.guid,
            function() {
                c.results &&
                $(".hover", c.options.dom).click()
            }).subscribe("/Edison/keys/enter" + c.options.parent.guid,
            function() {
                c.results && $(".hover", c.options.dom).click()
            });
            return c
        },
        noSocial: function() {
            this.silence_social = true;
            return this
        },
        refreshResults: function(a) {
            var b = "";
            this.results = true;
            this.options.dom.show();
            $.each(a,
            function(c, d) {
                b += d.id
            });
            if (this.oldResults != b) {
                this.oldResults = b;
                this.options.dom.html(this.parseResults(a))
            }
        },
        parseResults: function(a) {
            var b = this,
            c = $("<ul>"),
            d = 5,
            e;
            $.each(a,
            function(g, f) {
                c.append($("<li>",
                {
                    click: function(h) {
                        if (!$(h.target).is("b.invite")) {
                            b.options.input.publish("/Wire/select" + b.options.parent.guid, f);
                            b.hide()
                        }
                    },
                    mouseenter: function() {
                        $(".hover", c).removeClass("hover");
                        $(this).addClass("hover")
                    },
                    mouseleave: function() {
                        $(this).removeClass("hover")
                    }
                }).html(b["render_" + f.from_db](f)));
                if (!--d) return false
            });
            $("li:first-child", c).addClass("hover");
            e = $('<div class="results_container">').append($('<div class="results_top">'), c);
            $.each(b.unlinked_networks(),
            function(g, f) {
                e.append(f)
            });
            $("div.info span:first-child",
            e).css({
                "max-width": b.parent().getWire().getInput().outerWidth(true) - 70
            });
            return e.append($('<div class="results_bottom">'))
        },
        unlinked_networks: function() {
            var a = this,
            b = {
                tw: {
                    requires: "twitter",
                    el: $("<div>", {
                        "data-requires-credential": "twitter",
                        "class": "no_results tw",
                        html: '<img src="/assets/image/social_icons/tw_micro.png"/><span>Connect to Twitter to find more people.</span>',
                        click: function() {
                            $("img", $(this)).attr("src", "/assets/image/spinner_black_on_white.gif");
                            a.options.parent.options.datastore.refresh(function(d) {
                                d.name ===
                                "tw" && a.options.parent.getWire().searchTerm()
                            })
                        }
                    })
                },
                fb: {
                    requires: "facebook",
                    el: $("<div>", {
                        "data-requires-credential": "facebook",
                        "class": "no_results tw",
                        html: '<img src="/assets/image/social_icons/fb_micro.png"/><span>Connect to Facebook to find more people.</span>',
                        click: function() {
                            $("img", $(this)).attr("src", "/assets/image/spinner_black_on_white.gif");
                            a.options.parent.options.datastore.refresh(function(d) {
                                d.name === "fb" && a.options.parent.getWire().searchTerm()
                            })
                        }
                    })
                }
            },
            c = [];
            if (a.silence_social === true) return [];
            $.each(b,
            function(d, e) {
                Network.has(e.requires) || c.push(e.el)
            });
            return c
        },
        render_tw: function(a) {
            var b = this,
            c = $('<div><img src="' + a.profile_image_url + (a.from_db === "fb" ? "?size=square": "") + '" style="width: 38px; height: 38px;" /><div class="info"><span>' + a.name + '</span><span><img src="/assets/image/social_icons/' + a.from_db + '_micro.png" /><b>' + {
                fb: "Post to their Facebook Wall",
                tw: "@mention them on Twitter"
            } [a.from_db] + ' (<b class="invite" data-requires-credential="' + {
                fb: "facebook.publish_stream",
                tw: "twitter"
            } [a.from_db] +
            '">invite</b>)</b></span></div></div>');
            $(".info b.invite", c).click(function() {
                var d = this;
                b.inviteToSvpply(a,
                function(e) {
                    e && $(d).replaceWith($("<img>", {
                        src: "/assets/image/social_icons/check_micro.png",
                        "class": "check"
                    }))
                })
            });
            return c.get(0)
        },
        render_fb: function(a) {
            return this.render_tw(a)
        },
        render_sv: function(a) {
            return '<div><img src="' + a.profile_image_url + '" style="width: 38px; height: 38px;" /><div class="info"><span>' + a.name + " <b>" + a.username + '</b></span><span class="sv_meta"><b>' + (a.location || a.product_following_count +
            " products") + "</b></span></div></div>"
        },
        render_svfol: function(a) {
            return this.render_sv(a)
        },
        inviteToSvpply: function(a, b) {
            var c = {
                fb: {
                    name: "facebook",
                    message: "Hey, I'm on Svpply. It'd be nice to have you here too. http://svpply.com/register",
                    to_user: a.id
                },
                tw: {
                    name: "twitter",
                    message: "@" + a.screen_name + " - I'm on Svpply. It'd be nice to have you here too. http://svpply.com/register"
                }
            };
            Network.share({
                platform: c[a.from_db].name,
                payload: c[a.from_db],
                success: function() {
                    return b(true)
                },
                failure: function() {}
            })
        },
        clearResults: function() {
            var a = this.unlinked_networks(),
            b;
            this.oldResults = false;
            if (a.length > 0 && this.active) {
                this.results = false;
                b = $('<div class="results_container">').append($('<div class="results_top">'));
                $.each(a,
                function(c, d) {
                    b.append(d)
                });
                b.append($('<div class="results_bottom">'));
                this.options.dom.html(b).show()
            } else {
                this.results = false;
                this.options.dom.hide()
            }
        },
        setParent: function(a) {
            this.parent = a;
            return this
        },
        parent: function() {
            return this.options.parent
        },
        show: function() {
            this.options.dom.show()
        },
        hide: function() {
            this.options.dom.hide()
        }
    }
},
Edison = function() {
    return {
        init: function(a) {
            var b = this,
            c = [],
            d;
            b.options = {
                wire: false,
                input: false
            };
            b.guid = jQuery.guid++;
            b.cursor = {
                start: 0,
                end: 0
            };
            b._alwaysActive = false;
            b.activeCharacter = "@";
            b.mentions = [];
            b.options = $.extend(b.options, a);
            b.options.wire.parent = b;
            b.getWire().initEvents();
            b.options.results.init({
                parent: b
            });
            if (!b.input) b.options.input = b.getWire().getInput();
            $.each(b.options.datastore.DBs(),
            function(e, g) {
                var f = g.db;
                f = $db.from("updates").get("last-update-" +
                f);
                if (f === null || f.time == "not_connected" || +new Date - f.time > 36E5) c.push(g)
            });
            d = function() {
                if (c.length) {
                    var e = c.shift();
                    e.refresh(function(g) {
                        var f = {
                            time: g.status ? +new Date: "not_connected"
                        };
                        $db.from("updates").set("last-update-" + e.db, f);
                        ENVIRONMENT !== PRODUCTION && console.log("Updated", g.name, ":", g.status);
                        return d()
                    })
                }
            };
            d();
            $(b).subscribe("/Edison/inputUpdated" + b.guid, b.updateOffsets).subscribe("/Edison/inputUpdated" + b.guid, b.updateValue);
            b.getWire().getInput().subscribe("/Wire/select" + b.guid,
            function(e) {
                $(b).publish("/Edison/select" +
                b.guid, e);
                b.addMention(e);
                b.updateValue()
            });
            b.options.input.click(function() {
                var e = this;
                b.updateStartEnd($(this).getSelection());
                setTimeout(function() {
                    $(b).publish("/Edison/focusin" + b.guid, $(e).getSelection())
                },
                50)
            }).keydown(function(e) {
                if (b.options.input.val() === b.value) {
                    b.updateStartEnd($(this).getSelection());
                    b.monitorForActions(e)
                }
            }).keydown(function() { (function(e) {
                    setTimeout(function() {
                        b.update($(e).getSelection());
                        $(b).publish("/Edison/keyup" + b.guid, $(e).getSelection())
                    },
                    40)
                })(this)
            }).keypress(function(e) {
                b.monitorForMention(e)
            }).focusin(function() {
                var e =
                this;
                setTimeout(function() {
                    $(b).publish("/Edison/focusin" + b.guid, $(e).getSelection())
                },
                50)
            });
            $("body").click(function(e) {
                jQuery.contains(b.options.results.options.dom[0], e.target) || e.target !== b.options.input[0] && $(b).publish("/Edison/focusout" + b.guid)
            });
            return this
        },
        getWire: function() {
            return this.options.wire || false
        },
        alwaysActive: function() {
            this._alwaysActive = true;
            this.getWire()._alwaysActive = true;
            this.getWire().active = true
        },
        setActiveCharacter: function(a) {
            this.activeCharacter = a
        },
        addMention: function(a) {
            a =
            $.extend({},
            a);
            a.offset = this.getWire().cursor.start;
            a.text = a.name;
            this.mentions.push(a)
        },
        removeMention: function() {},
        updateOffsets: function(a) {
            var b = this,
            c = a[1],
            d = a[0] - c;
            $.each(b.mentions,
            function(e) {
                if (d <= b.mentions[e].offset) b.mentions[e].offset += c
            })
        },
        updateStartEnd: function(a) {
            this.cursor.start = a.start;
            this.cursor.end = a.end
        },
        update: function(a) {
            var b = this.options.input.val(),
            c;
            if (b !== this.value) {
                this.value = b;
                if (a.end < this.cursor.end) c = a.end - this.cursor.end;
                else if (a.start > this.cursor.start) c = a.start -
                this.cursor.start;
                this.cursor.start = a.start;
                this.cursor.end = a.end;
                $(this).publish("/Edison/inputUpdated" + this.guid, [this.cursor.start, c])
            }
        },
        monitorForMention: function(a) {
            if (!this.getWire().started && a.which === this.activeCharacter.charCodeAt(0) && (this.cursor.start === 0 || this.options.input.val().charAt(this.cursor.start - 1) === " ") || !this.getWire().started && this._alwaysActive === true) this.getWire().start(a, this._alwaysActive === true)
        },
        monitorForActions: function(a) {
            var b = {
                arrow: {
                    up: 38,
                    down: 40
                },
                space: 32,
                tab: 9,
                enter: 13
            };
            if (this.getWire().active) switch (a.which) {
            case b.arrow.up:
                a.preventDefault();
                $(this).publish("/Edison/keys/up" + this.guid);
                break;
            case b.arrow.down:
                a.preventDefault();
                $(this).publish("/Edison/keys/down" + this.guid);
                break;
            case b.tab:
                a.preventDefault();
                $(this).publish("/Edison/keys/tab" + this.guid);
                break;
            case b.enter:
                a.preventDefault();
                $(this).publish("/Edison/keys/enter" + this.guid);
                break;
            case b.space:
                $(this).publish("/Edison/keys/space" + this.guid)
            }
        },
        updateValue: function() {
            var a = this,
            b = this.options.input.val(),
            c = this.mentions,
            d,
            e;
            $.each(c,
            function(g, f) {
                var h = RegExp(f.text, "ig"),
                j = null,
                k = false,
                m = a.options.input.val(),
                l = b;
                m.replace(h,
                function(i, n) {
                    if (n === f.offset) {
                        j = n;
                        return i.slice(0, -1) + "^"
                    } else return i
                });
                b = b.replace(h,
                function(i) {
                    if (j == f.offset && k !== true) {
                        k = true;
                        return "@[" + g + ":]"
                    } else return i
                });
                l === b && a.removeMention(g, f)
            });
            e = a.htmlize(b);
            d = b;
            $.each(c,
            function(g, f) {
                d = d.replace("@[" + g + ":]", "@[" + g + ":" + f.text + "]");
                e = e.replace("@[" + g + ":]", '<b class="static ' + f.from_db + " item" + g + '">' + a.htmlize(f.text) + "</b>")
            });
            a.options.hiddenInput.val(d);
            a.options.highlighter.html(e)
        },
        serialize: function() {
            var a = {},
            b = this.options.hiddenInput.val();
            $.each(this.mentions,
            function(c, d) {
                var e = d[d._identifier];
                if (RegExp("\\[" + c + ":" + d.text + "\\]").test(b)) {
                    a[c + "|" + d.from_db + "|" + e] = d;
                    b = b.replace("[" + c + ":", "[" + c + "|" + d.from_db + "|" + e + ":")
                }
            });
            return {
                rawText: this.options.input.val(),
                mentions: a,
                text: b
            }
        },
        clear: function() {
            this.mentions = [];
            this.options.input.val("");
            this.updateValue();
            this.cursor.start = 0;
            this.cursor.end = 0;
            this.value = ""
        },
        htmlspecialchars: function(a) {
            if (typeof a == "undefined" || a === null || !a.toString) return "";
            if (a === false) return "0";
            else if (a === true) return "1";
            return a.toString().replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#039;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
        },
        htmlize: function(a) {
            return this.htmlspecialchars(a).replace(/\n/g, "<br />")
        }
    }
};
;
var Pager = Class.extend({
    init: function(a) {
        this.type = "Pager";
        this.input = a;
        this.prop_name = a.prop_name;
        this.offset = a.data.offset ? a.data.offset: 0;
        this.limit = a.data.limit ? a.data.limit: 30;
        this.success = a.success;
        this.page = Math.ceil(this.offset / this.limit);
        this.remainder = this.offset - this.page * this.limit;
        this.total_pages = this.total_items = null;
        this.run()
    },
    next: function(a) {
        if (this.page < this.total_pages - 1) {++this.page;
            this.run(a)
        } else ENVIRONMENT !== PRODUCTION && console.log("Already on last page");
        return this
    },
    prev: function(a) {
        if (this.page) {--this.page;
            this.run(a)
        } else ENVIRONMENT !== PRODUCTION && console.log("Already on first page");
        return this
    },
    jumpto: function(a, b) {
        this.page = !a || a < 0 ? 0: a > this.total_pages - 1 ? this.total_pages - 1: a;
        return this.run(b)
    },
    first: function(a) {
        this.jumpto(0, a)
    },
    last: function(a) {
        this.jumpto(this.total_pages - 1, a)
    },
    run: function(a) {
        this.offset = this.page * this.limit + this.remainder;
        if (this.offset < 0) this.offset = 0;
        this.input.data.offset = this.offset;
        var b = this;
        this.input.success = function(c) {
            if (c) {
                b.total_items =
                parseInt(c.response["total_" + b.prop_name], 10) || b.total_items;
                b.total_pages = Math.ceil(b.total_items / b.limit)
            }
            a ? a.apply(b, arguments) : b.success.apply(b, arguments)
        };
        api.call(this.input);
        return this
    }
});
;
var SetSelector = Class.extend({
    DATASTORE: false,
    sets: [],
    events: {},
    pid: false,
    clone: $('<div class=".setMaker.template">'),
    current_user: false,
    timer: false,
    $template: false,
    $instance: false,
    closing: false,
    init: function(a, b) {
        var c = this,
        d = {
            current_user: false,
            product: false,
            needs_product: true,
            start: []
        };
        $.extend(d, b);
        if (!d.current_user) return false;
        c.pid = $.guid++;
        c.events = {
            select: [],
            create: [],
            start: [],
            close: []
        };
        $.each(d.start,
        function(e, g) {
            c.events.start.push(g)
        });
        c.current_user = d.current_user instanceof User ? d.current_user:
        new User({
            id: d.current_user
        });
        $(".setMaker.template").length || SetMaker.setup(d.current_user);
        c.product = d.needs_product ? d.product ? d.product instanceof Product ? d.product: new Product({
            id: d.product
        }) : hover_entity instanceof Product ? hover_entity: page_entity instanceof Product ? page_entity: false: false;
        c.$loader = $('<img src="http://' + DOMAIN + '/assets/image/spinner_black_on_white.gif" />').addClass("loader").css({
            "z-index": 10006,
            display: "block",
            position: "absolute"
        });
        c.$template = $(".setMaker.template");
        c.$instance =
        c.$template.clone().removeClass("template");
        c.$instance.appendTo(document.body);
        c.bindInstanceEvents();
        c.doShowEvents(a);
        return c
    },
    doShowEvents: function(a) {
        var b = this,
        c = b.events.start.length;
        c ? $.each(b.events.start,
        function(d, e) {
            e.apply(b, [b.$instance, a,
            function() {--c || b.show(a)
            }])
        }) : b.show(a)
    },
    show: function(a) {
        var b,
        c = this;
        if (c.product) b = c.product;
        a.stopPropagation();
        a.preventDefault();
        c.$instance.css({
            position: "absolute",
            top: a.pageY,
            left: a.pageX
        }).animate({
            opacity: "show"
        },
        300);
        if (b) {
            $("input", this.$instance).attr("checked",
            false);
            c.showLoading();
            $("li", c.$instance).addClass("working");
            b.sets(function(d) {
                $.each(d,
                function(e, g) {
                    $("input[id=set_" + g.id + "]", c.$instance).length && $("input[id=set_" + g.id + "]", c.$instance).attr("checked", true)
                });
                c.hideLoading();
                $("li", c.$instance).removeClass("working")
            })
        }
        return c
    },
    showCreate: function(a) {
        var b = this;
        b.$instance.addClass("creating");
        b.$creator = $("<div>", {
            "class": "setCreator"
        }).html('<div class="setName"><input type="text" placeholder="Set Name" name="setName"></div><div class="setButton create">Create</div>' +
        (current_user.can("make_sets_private") ? '<div class="setCreatorCheckbox"><input type="checkbox" name="setPrivateCheckbox" id="setPrivateCheckbox">&nbsp;<label for="setPrivateCheckbox">Make this Set private</label></div>': "") + ("theme" in page_entity ? '<div style="clear:both;"></div><div class="setCreatorCheckbox"><input type="checkbox" name="setTagCheckbox" id="setTagCheckbox" value="' + page_entity.theme.tag + '">&nbsp;<label for="setTagCheckbox">Mark as ' + page_entity.theme.tag_name + ' Set<span class="icon"></span></label></div>':
        "")).appendTo(document.body);
        b.$creator.css({
            position: "absolute",
            top: a.pageY - 10,
            left: a.pageX - 10,
            display: "block"
        }).animate({
            opacity: "show"
        },
        300,
        function() {
            var c = this;
            $('input[name="setName"]', this).keydown(function(d) {
                if (d.which === 13) $(".create", c).click();
                else d.which === 27 && $("body").click()
            }).focus();
            $(".create", this).click(function(d) {
                var e = b.events.create.length,
                g = $("input[name=setName]", b.$creator).val(),
                f = $(this),
                h = "none",
                i;
                d.stopImmediatePropagation();
                if (g.replace(/ /g, "").length) {
                    f.text("Creating").css("margin-left",
                    "-3px");
                    i = function() {
                        $checkbox = $('<li class="setListing"><span class="input"><input id="set_' + h + '" data-id="' + h + '" type="checkbox" checked></span><span class="title">' + g + "</span></li>");
                        $checkbox.insertAfter($(".setListing.setAdd", b.$instance));
                        $checkbox.clone(true).attr("checked", true).insertAfter($(".setListing.setAdd", b.$template));
                        $("input", $checkbox).trigger("click");
                        b.$creator.animate({
                            opacity: "hide"
                        },
                        function() {
                            $(this).remove()
                        })
                    };
                    e ? $.each(b.events.create,
                    function(l, k) {
                        k.apply(b, [f, d,
                        function(j) {
                            if (j) h =
                            j; --e || i()
                        }])
                    }) : i();
                    b.$instance.removeClass("creating");
                    $(document.body).unbind("click._" + b.pid)
                }
            })
        });
        $(document.body).bind("click._" + b.pid,
        function(c) { ! $.contains(b.$creator[0], c.target) && !$.contains(b.$instance[0], c.target) && b.$creator.animate({
                opacity: "hide"
            },
            function() {
                b.$instance.removeClass("creating");
                $(this).remove()
            })
        })
    },
    showLoading: function() {
        this.$template.clone().empty().css({
            position: "absolute",
            "z-index": 105,
            opacity: 0.8,
            height: this.$template.height(),
            "box-shadow": "none",
            top: 0,
            left: 0
        }).addClass("overlay").appendTo(this.$instance);
        this.$instance.append(this.$loader.css({
            top: 0,
            left: 0,
            margin: "15px 15px"
        }))
    },
    hideLoading: function() {
        $(".overlay, .loader", this.$instance).animate({
            opacity: 0
        },
        function() {
            $(this).remove()
        })
    },
    showSuccess: function(a, b, c) {
        $(".success").remove();
        var d = this.$instance.clone().empty().addClass("success").removeClass("fadeout").removeClass("fadein"),
        e = this,
        g = b === "add" ? "Added to Set.": "Removed.";
        Set.find(c,
        function(f) {
            d.append('<div class="bg ' + b + '"></div><div class="s ' + b + '"><h1>' + g + '</h1> Go see: <p><a href="' +
            f.url + '" class="set_visit">' + f.title + "</a></p></div>");
            d.appendTo(document.body).addClass("pop");
            d.css("left", parseInt(d.css("left")) + parseInt(e.$instance.css("width")) - 0.25 * parseInt(d.css("width")) + "px");
            d.css("top", a.pageY - parseInt(d.css("height")) * 0.5 + "px");
            $(".bg", d).css({
                width: d.width(),
                height: d.height()
            });
            $(".s > a.set_add").click(function() {
                d.addClass("popout")
            });
            d.data("timer", setTimeout(function() {
                d.mouseleave()
            },
            1500));
            d.mouseleave(function() {
                var h = $(this);
                h.data("timer", setTimeout(function() {
                    h.addClass("popout");
                    setTimeout(function() {
                        h.remove()
                    },
                    700)
                },
                500))
            }).mouseenter(function() {
                clearTimeout($(this).data("timer"))
            });
            e.$instance.animate({
                opacity: 0
            },
            {
                duration: 1E3,
                easing: "easeInQuint",
                complete: function() {
                    e.$instance.remove()
                }
            });
            e.$instance.mousemove(function() {
                $(this).unbind("mousemove");
                $(this).stop(true);
                $(this).animate({
                    opacity: 1
                },
                {
                    duration: 1E3,
                    easing: "easeOutQuint"
                })
            })
        },
        true)
    },
    bindInstanceEvents: function() {
        var a = this;
        $(document.body).bind("click.listing_" + a.pid,
        function(b) {
            if (!$.contains(a.$instance[0],
            b.target) && !a.$instance.hasClass("creating")) {
                clearTimeout(a.timer);
                a.closing || a.close()
            }
        });
        $("span.title", a.$instance).live("click",
        function() {
            $("input", $(this).prev(".input")).attr("checked", !$("input", $(this).prev(".input")).attr("checked")).trigger("click")
        });
        $(".setList :checkbox", a.$instance).live("click",
        function(b) {
            var c = this,
            d = a.events.select.length,
            e = $(c).clone(true);
            a.$loader.css({
                position: "relative",
                width: 12,
                height: 12,
                opacity: 1
            });
            $(c).replaceWith(a.$loader);
            $("input[data-id=" + $(this).data("id") +
            "]", a.$template).attr("checked", !!$(c).attr("checked"));
            d ? $.each(a.events.select,
            function(g, f) {
                f.apply(a, [c, b,
                function() {--d || $(".loader", a.$instance).replaceWith(e)
                }])
            }) : $(".loader", a.$instance).replaceWith(e)
        });
        $(".setListing.setAdd", a.$instance).click(function(b) {
            a.showCreate(b)
        });
        $(".setList", a.$instance).mouseenter(function() {
            typeof a.timer === "number" && clearTimeout(a.timer)
        });
        $(".setList", a.$instance).mouseleave(function() {
            if (!a.$instance.hasClass("creating")) a.timer = setTimeout(function() {
                a.closing ||
                a.close()
            },
            500)
        })
    },
    close: function() {
        var a = this;
        a.closing = true;
        a.$instance.animate({
            opacity: "hide"
        },
        function() {
            var b = a.events.close.length,
            c = $(this);
            a.unbindInstanceEvents(function() {
                b ? $.each(a.events.close,
                function(d, e) {
                    e.apply(a, [function() {--b || c.remove()
                    }])
                }) : c.remove()
            })
        })
    },
    unbindInstanceEvents: function(a) {
        $(document.body).unbind("click.listing_" + this.pid);
        $(".setList :checkbox", this.$instance).die("click");
        $("span.title", this.$instance).die("click");
        a()
    },
    pushEvent: function(a, b) {
        this.events[a].push(b);
        return this
    }
});
SetSelector.setup = function(a) {
    function b(d, e) {
        $.each(d,
        function(g, f) {
            $("ul.sets", e).append($('<li class="setListing"><span class="input"><input id="set_' + f.id + '" data-title="' + f.title + '" data-id="' + f.id + '" type="checkbox"></span><span class="title">' + f.title + "</span></li>"))
        })
    }
    var c = typeof DataStore !== "undefined" ? "Localstorage": "API";
    $template = function() {
        $('<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjgwNjE5M0RDQzEyMTFFMDk4QUJBMERCQjZBQTExMDciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjgwNjE5M0VDQzEyMTFFMDk4QUJBMERCQjZBQTExMDciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCODA2MTkzQkNDMTIxMUUwOThBQkEwREJCNkFBMTEwNyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCODA2MTkzQ0NDMTIxMUUwOThBQkEwREJCNkFBMTEwNyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhR6MIIAAAB1SURBVHjaYrS90WzPwMDQBcRmDITBTSBeA8R9LEBiBRBLMBAH1IG4Gog9mEjQhAyMmXDJHFKvAWNcgImBTEC2RhZ052FzMgzY3Wyhso3IJsJsQhYb+MB5B8RC6BK4nIhs43oyLHwK0lgGxKdI0PQCiFMAAgwAg14ZSKztOnAAAAAASUVORK5CYII%3D">');
        var d =
        $('<div class="setMaker template"><div class="setList"><ul class="sets"><li class="setListing setAdd"><span class="input"></span><span><span class="new">New Set</span></span></li></ul></div></div>');
        d.css({
            display: "none"
        });
        if ($(".setMaker.template").length) return $(".setMaker.template");
        else {
            $(document.body).append(d);
            return d
        }
    } ();
    if (!$(".setListing:not(.setAdd)", $template).length) SetSelector["prepare" + c](a,
    function(d) {
        b(d, $template)
    })
};
SetSelector.sort_results = function(a) {
    a.length && a.sort(function(b, c) {
        return b.date_updated && c.date_updated ? -(new Date(b.date_updated)).getTime() + (new Date(c.date_updated)).getTime() : 0
    });
    return a
};
SetSelector.prepareLocalstorage = function(a, b) {
    var c = DataStore.Set();
    c.all(function(d) {
        if (d.length != a.count_sets) c.refresh(function() {
            c.all(function(e) {
                return b(SetSelector.sort_results(e))
            })
        });
        else return b(SetSelector.sort_results(d))
    })
};
SetSelector.prepareAPI = function(a, b) {
    a.sets(function(c) {
        b(SetSelector.sort_results(c))
    })
};
;
var followSetModal = function() {};
followSetModal.prototype.show = function(b, h, j, i, d) {
    self = this;
    b.stopPropagation();
    b.preventDefault();
    var a = $("<div>"),
    e = $("<div>");
    e.addClass("bg");
    e.appendTo(a);
    var c = $("<div>");
    c.addClass("s");
    c.appendTo(a);
    $("<h1>").html("Followed.").appendTo(c);
    var f = $("<p>");
    h ? f.html('More from <a href="/' + i + '" class="inline">' + d + "</a>") : f.html('<a href="#" class="inline btn_follow_user">Follow ' + d + "?</a>");
    f.appendTo(c);
    a.appendTo(document.body);
    a.addClass("setControl setMaker success pop");
    a.css("display", "block");
    a.css("position", "absolute");
    a.css("top", b.pageY - parseInt(a.css("height")) * 0.5 + 0);
    a.css("left", b.pageX - parseInt(a.css("width")) * 0.5 + 200);
    e.css({
        width: a.width(),
        height: a.height()
    });
    a.data("timer", setTimeout(function() {
        a.mouseleave()
    },
    2E3));
    a.mouseleave(function() {
        var g = $(this);
        g.data("timer", setTimeout(function() {
            g.addClass("popout");
            setTimeout(function() {
                g.remove()
            },
            700)
        },
        500))
    }).mouseenter(function() {
        clearTimeout($(this).data("timer"))
    });
    h || $(".s > p >.btn_follow_user").click(function() {
        $(".s > p").html('Following <a href="/' +
        i + '" class="inline">' + d + "</a>.");
        $.ajax({
            type: "POST",
            cache: false,
            data: {
                type: "user",
                following_id: j
            },
            url: "/followers/toggle",
            success: function() {
                DataStore.svpply().refresh()
            },
            dataType: "json"
        })
    });
    return this
};
;
var SetController = function() {
    return {
        className: null,
        init: function() {
            this.bindRelated()
        },
        bindRelated: function() {
            $(".summary .line_content").each(function() {
                $("li", this).hide();
                var a = $(this),
                c = parseInt(a.css("height"));
                $("li", this).each(function() {
                    if (parseInt(a.css("height")) == c) {
                        $(this).show();
                        if (parseInt(a.css("height")) > c) {
                            $(this).addClass("hidden");
                            $(this).hide()
                        }
                    }
                });
                if ($("li:hidden", this).length == 1) {
                    $("li.hidden", a).show();
                    $(".view_all", a).hide();
                    if (parseInt(a.css("height")) != c) {
                        $("li.hidden", a).hide();
                        $(".view_all", a).show()
                    }
                }
                if ($("li:hidden", this).length == 0) $(".view_all", a).hide();
                else {
                    var b = $(".view_all", a).html();
                    $(".view_all", a).toggle(function() {
                        $("li.hidden", a).show();
                        $(".view_all", a).html($(".view_all", a).attr("data-completed-copy"))
                    },
                    function() {
                        $(".view_all", a).html(b);
                        $("li.hidden", a).hide()
                    })
                }
            })
        }
    }
};
$(function() { (new SetController).init(".set_add");
    SetSelector.setup(current_user);
    $(".set_add").live("click",
    function(a) {
        var c;
        c = $(this).data("product-id") ? {
            current_user: current_user,
            needs_product: true,
            product: new Product({
                id: $(this).data("product-id")
            })
        }: {
            current_user: current_user,
            needs_product: true
        }; (new SetSelector(a, c)).pushEvent("select",
        function(b, h, i) {
            var e = [],
            f = [],
            g = $(b).data("id"),
            d = this.product.id,
            j = this;
            $(b).is(":checked") ? e.push(g) : f.push(g);
            $.ajax({
                url: "/sets/add_item",
                type: "post",
                data: {
                    addToSets: e,
                    removeFromSets: f,
                    entity_id: d
                },
                success: function() {
                    j.showSuccess(h, e.length ? "add": "remove", g);
                    i()
                }
            })
        }).pushEvent("create",
        function(b, h, i) {
            b = $("input[name=setName]", this.$creator).val();
            var e = $("input[name=setPrivateCheckbox]", this.$creator).is(":checked") ? 1: 0,
            f = $("input[name=setTagCheckbox]", this.$creator).is(":checked") ? $("input[name=setTagCheckbox]", this.$creator).val() : null,
            g = this;
            $.ajax({
                url: "/sets/create",
                type: "POST",
                dataType: "json",
                data: {
                    title: b,
                    is_private: e,
                    theme_tag: f,
                    type: f !== null ? "theme_tagged":
                    null
                },
                success: function(d) {
                    d = d.id;
                    i(d);
                    g.showSuccess(h, "add", d)
                }
            })
        })
    });
    $("[data-action = to_user_sets]").click(function() {
        var a = $(this).data("user");
        if (a) document.location = "/" + a + "/sets"
    })
});
;
var ACTIVE = "active",
DISABLED = "disabled",
GRABS = "grabs:not(.noscroll)",
ALLGRABS = "grabs",
POST = "post";
$(function() {
    $("form").filter("[method=put],[method=delete]").append(function() {
        var a = $(this),
        b = '<input type="hidden" name="request_method" value="' + a.attr("method") + '">';
        a.attr("method", "post");
        return b
    })
});
var outbound = function(a) {
    $.ajax({
        type: POST,
        cache: false,
        url: "/outbound/" + a
    });
    return true
},
ga_track_event = function(a, b, c) {
    if (! (typeof _gaq === "undefined" || !a || !b)) {
        if (typeof c !== "string") c = c.toString();
        _gaq.push(["_trackEvent", a, b, c])
    }
};
$(function() {
    $('a[href="#"]').live("click",
    function() {
        return false
    });
    $("a.email").nospam();
    $("a.email_replace").nospam({
        replaceText: true
    });
    $(".buy_trigger").live("click",
    function() {
        ga_track_event("Product", "Buy", $(this).attr("data-product-id"))
    })
});
;
var toggle_save = function(f) {
    var b = $(f),
    c = $(".grabs.active"),
    d = b.parent("li"),
    a = b.attr("data-grab-id"),
    g = $("#meta_" + a + " .save_trigger", c),
    i = f = false;
    b.add(g).html(void 0);
    if (page_entity.id == -1) i = $("#grab_" + a).data("feed_item_id");
    else if (page_entity.type == "User") f = page_entity.id;
    d.add("#grab_" + a + " .trigger_frame").removeClass("remove").addClass("processing");
    $.ajax({
        url: b.attr("href"),
        data: {
            ajax: 1,
            because_of: f,
            feed_item_id: i
        },
        type: POST,
        dataType: "json",
        success: function(e) {
            b.oneTime(500,
            function() {
                d.add("#grab_" +
                a + " .trigger_frame").removeClass("processing");
                var h = "";
                if (e.total_savers == 2) h = ', added by <a href="#savers" >1 member</a>';
                else if (e.total_savers > 2) h = ', added by <a href="#savers" >' + Math.floor(e.total_savers - 1) + " members</a>";
                $("#saver_count_" + a).html(h);
                switch (e.status) {
                case "register":
                    $.cookie("action_on_event", JSON.stringify({
                        event: "logged_in",
                        action: "follow",
                        type: "product",
                        id: a,
                        referrer: window.location.href
                    }), {
                        path: "/",
                        domain: "." + DOMAIN
                    });
                    $.cookie("show_feed_item", JSON.stringify({
                        type: "product",
                        id: a
                    }), {
                        path: "/",
                        domain: "." + DOMAIN
                    });
                    document.location = "/register";
                    break;
                case "saved":
                    b.html("<span>Remove</span>");
                    g.html("Remove");
                    d.addClass("remove").removeClass("add");
                    if ($("body").hasClass("user_show") && $("body").hasClass("current_user")) $("#grab_" + a + " > .ghost", c).fadeTo("fast", 0,
                    function() {
                        $(this).remove()
                    });
                    else {
                        $("#growler").stopTime("growl_kill").remove();
                        $("body").append(e.growler);
                        growler = new Growler;
                        growler.grab_id = a
                    }
                    ga_track_event("Product", "Follow", a);
                    break;
                case "unsaved":
                    g.html("<span>Add</span>");
                    b.html("<span>Add</span>");
                    d.addClass("add").removeClass("remove");
                    $("#btn_purchased").addClass("hidden");
                    if ($("body").hasClass("user_show") && $("body").hasClass("current_user")) {
                        $("#grab_" + a + " > .ghost", c).length == 0 && $("#grab_" + a, c).append('<div class="ghost"></div>');
                        $("#grab_" + a + " > .ghost", c).fadeTo("fast", 0.9)
                    }
                    break;
                case "already_saved":
                    g.html("<span>Remove</span>");
                    d.removeClass("add");
                    $("#btn_purchased").removeClass("hidden");
                    break;
                case "not_saved_first_place":
                case "unsaved_and_removed":
                    if (b.hasClass("item_page_trigger")) document.location =
                    "/";
                    else $("#grab_" + a, c).fadeOut(500)
                }
            })
        }
    });
    return false
};
;
var switch_follow_button_state = function(a, b) {
    var c = $(".btn_follow_" + b);
    a ? c.html(c.attr("data-label-on")).addClass("user_is_following") : c.html(c.attr("data-label-off")).removeClass("user_is_following")
},
follow_toggle = function(a, b, c) {
    $(".btn_follow_" + a).html().substring(0, 2) == "Un" ? switch_follow_button_state(false, a) : switch_follow_button_state(true, a);
    $.ajax({
        type: "POST",
        cache: false,
        data: {
            type: b,
            following_id: a,
            keywords: c
        },
        url: "/followers/toggle",
        dataType: "json",
        success: function(d) {
            if (d.status == "register") {
                $.cookie("action_on_event",
                JSON.stringify({
                    event: "logged_in",
                    action: "follow",
                    type: b,
                    id: a,
                    referrer: window.location.href
                }), {
                    path: "/",
                    domain: ".svpply.com"
                });
                document.location = "/register"
            } else {
                $("#followers_of_" + b + "_" + a).html(d.total);
                d.follow_state ? switch_follow_button_state(true, a) : switch_follow_button_state(false, a);
                b == "user" && DataStore.svpply().refresh()
            }
        }
    })
};
;
$("#suggest_form .btn_cancel, .onionskin").live("click",
function() {
    $("#suggest_form").fadeOut(150,
    function() {
        $(".onionskin, #suggest_form").remove()
    })
});
$("input[name$=send_type]").live("change",
function() {
    if ($("#send_type_email").attr("checked")) {
        $("#recipient_email").removeClass("hidden");
        $("#suggest_note textarea").css("width", "376px");
        $("#recipient_id, #recipient_avatar").addClass("hidden")
    } else {
        $("#recipient_email").addClass("hidden");
        $("#suggest_note textarea").css("width", "310px");
        $("#recipient_id, #recipient_avatar").removeClass("hidden")
    }
});
$("#recipient_id").live("change",
function() {
    $("#suggest_note img").attr("src", "/assets/image/avatars/_placeholder.png");
    var a = $(this).val();
    a = $("#recipient_id option[value=" + a + "]").attr("data-avatar");
    $("#suggest_note img").attr("src", a)
});
$("#suggest_form").fadeIn(150);
$("#suggest_form").live("submit",
function() {
    $("#suggest_form .btn_send").val("sending").click(function() {
        return false
    });
    $.ajax({
        url: "/item/suggest",
        type: "POST",
        dataType: "text",
        data: $(this).serialize(),
        success: function(a) {
            $("#suggest_form .form_response").html(a);
            $("#suggest_form").oneTime(1E3, "suggest_form_close",
            function() {
                $("#suggest_form").fadeOut(function() {
                    $("#suggest_form, .onionskin").remove()
                })
            })
        },
        error: function() {
            $("#suggest_form .form_response").html("Error sending message.");
            $(".dialogue_buttons").removeClass("processing");
            $(".dialogue textarea").attr("disabled", false)
        }
    });
    return false
});
;
var Filters = function() {
    this.real_title = document.getElementsByTagName("title")[0].innerHTML;
    this.reset_all = function() {
        $filters = $("#filters");
        $filters.find("input").attr("checked", false);
        $filters.find("label").removeClass("checked");
        this.reload()
    };
    this.get_active_tags = function() {
        var a = [];
        $("#filters").find("input:checked").each(function() {
            a.push($(this).attr("id"))
        });
        return a
    };
    this.errar = function() {
        $("." + GRABS).not(".user_row").html("<li><strong>No results match your selections.</strong><br /><span class='reset_all' onclick='filters.reset_all();' >Show all results</span> or uncheck filters in the sidebar.</li>")
    };
    this.reload = function(a) {
        $(document).stopTime("prepender_timer");
        $("*").addClass("filter_loading");
        a && $("label[for=" + $(a).attr("id") + "]").toggleClass("checked");
        $("#filters input").each(function(b, e) {
            $(e).attr("checked")
        });
        a = document.location.href;
        var c = a.indexOf("/only/");
        if (c > 0) a = a.substr(0, c);
        a = a.replace(RegExp(/\/$/), "");
        c = $("#filter_list").serialize();
        c += "&url=" + document.location.href;
        var d = $("#sort_by select");
        if (d) c += "&sort_by=" + d.val();
        d = "reload_grabs";
        if ($(".active.page").attr("id") === "page_owns") d =
        "reload_owns";
        $.ajax({
            url: a + "/" + d,
            data: c,
            dataType: "json",
            type: "post",
            success: function(b) {
                $("*").removeClass("filter_loading");
                typeof prepender != "undefined" && prepender && prepender.check_new();
                var e = $("." + GRABS).not(".user_row").not(".no_filters");
                b.grabs == null ? filters.errar() : e.html(b.grabs);
                e.find(".grab").length >= 27 ? $("#btn_all_wrapper").removeClass("hidden") : $("#btn_all_wrapper").addClass("hidden");
                grabs_present = b.initial_items_count;
                grabs_total = b.total_items_count;
                $("#products_tab .total").text(grabs_total);
                try {
                    b.filtered_url != "" ? history.pushState("", "new filtered state", b.filtered_url) : history.pushState("", "new filtered state", "/")
                } catch(f) {}
                document.title = b.filtered_title == null ? filters.real_title: filters.real_title + " \u2014 " + b.filtered_title
            }
        })
    };
    $(function() {
        var a = $("#filter_list");
        $("#filters input, #sort_by select").change(function() {
            a.hasClass("disabled") || filters.reload(this)
        })
    })
},
filters = "";
$(function() {
    var a = $("#filter_list");
    a.submit(function() {
        if (a.hasClass("disabled")) return false
    }).click(function() {
        if (a.hasClass("disabled")) return false
    });
    filters = new Filters
});
;
var jknav_grab_frequency = ".grabs:not(.user_row) li.grab:nth-child(6n-5)",
is_ios = function() {
    return navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad)/)
},
grabs_more = function() {
    var b = $("." + GRABS).not(".user_row").not(".no_scrolling"),
    a = $("#grabs_prepending");
    a = b.find(".grab").length + a.find(".grab").length + b.find("li.stream_msg").length + a.find("li.stream_msg").length;
    a = "/items_feed" + pagination_prefix + next_page + "/" + a;
    var d = $("#filter_list").serialize(),
    e = $("#sort_by select");
    $("#btn_all,.btn_all").remove();
    $("#loading").fadeIn();
    if (e) d += "&sort_by=" + e.val();
    d.last_feed_item_id = b.find(".grab:last-child").attr("data-feed_item_id");
    $.ajax({
        url: a,
        dataType: "html",
        data: d,
        type: POST,
        success: function(c) {
            $("#loading").css("opacity", 0);
            if (!c) return false;
            var g = $(window).scrollTop() + $(window).height();
            $(c).appendTo(b).each(function(i, h) {
                var f = $(h);
                f.offset().top > g && !is_ios() && f.css("opacity", 0)
            }); ++next_page;
            $.jknav.items[GRABS] = null;
            $(jknav_grab_frequency).jknav(false, GRABS);
            $(window).bind("scroll.automore",
            function() {
                $(document).stopTime("automore").oneTime(50,
                "automore",
                function() {
                    if ($("footer").offset().top < $(window).scrollTop() + $(window).height() * 3) {
                        $(window).unbind("scroll.automore");
                        grabs_more()
                    }
                })
            });
            return true
        }
    })
};
$(function() {
    var b = $("#btn_all,.btn_all");
    if (b.length) {
        if (typeof prepender_disabled == "undefined" || !prepender_disabled) prepender = new Prepender;
        b.click(grabs_more);
        $(window).scroll(function() {
            $(document).stopTime("updateLazy").oneTime(15, "updateLazy",
            function() {
                var a = $(window).scrollTop() + $(window).height();
                $(".grabs li.grab, .grabs li.stream_msg").each(function(d, e) {
                    var c = $(e);
                    c.offset().top < a && c.css("opacity", 1)
                })
            })
        });
        $(jknav_grab_frequency).jknav(false, GRABS);
        $.jknav.init({
            up: "k",
            down: "j",
            name: GRABS,
            easing: "swing",
            reevaluate: false
        })
    }
});
;
var metabar = {
    $dom: $('<div id="metabar"></div>'),
    $grab: null,
    construct: function() {
        var c = this;
        c.$dom.hover(function() {},
        function(a) {
            var b = "#" + c.$grab.attr("id") + ", #" + c.$grab.attr("id") + " *";
            $(a.relatedTarget).is(b) || c.hide()
        });
        $("body").prepend(c.$dom)
    },
    move: function(c) {
        var a,
        b;
        a = this.$dom.width();
        b = {
            width: this.$grab.width(),
            height: this.$grab.height(),
            left: this.$grab.offset().left
        };
        this.$dom.css("margin-left", a > b.width ? 50 - (c.pageX - b.left) / (b.width * 1.5) * a: b.width / 4 + (c.pageX - b.left) * -1 * b.width / 3 / b.width)
    },
    hide: function() {
        $(document).unbind("mousemove");
        this.$grab = null;
        this.$dom.hide()
    },
    build: function(c) {
        var a = this,
        b = $(c),
        e = b.attr("data-id");
        if (!b.data("building")) {
            b.data("building", true);
            Product.find(e,
            function(f) {
                f.store_link = '<a href="/store/' + f.store.domain + '">' + f.store.name + "</a>";
                f.page_title_for_url = make_seo_friendly_text(f.page_title);
                f.members = f.saves > 1 ? "members": "member";
                render_html(f, "metabar").appendTo(b);
                b.data("building", false);
                a.build_buttons(c, f);
                a.$grab && parseInt(a.$grab.attr("data-id")) ==
                parseInt(b.attr("data-id")) && a.hover(c)
            })
        }
    },
    build_buttons: function(c, a) {
        var b = this,
        e = $(c),
        f = $(".trigger_frame", e);
        if (current_user.logged_in) if (page_entity.type == "User" && page_entity.id == current_user.id && (e.parents(".grabs").hasClass("owns") || e.parents(".grabs").hasClass("wants"))) {
            f.addClass("add").find(".save_trigger").html("Remove");
            page_entity.id == current_user.id && e.parents(".grabs").hasClass("owns") && $(".save_trigger", f).attr("href", "/item/purchased_toggle/" + $(".save_trigger", f).data("grab-id"))
        } else {
            f.addClass("building");
            Relationship.show(current_user, a, Relationship.FOLLOW,
            function(h) {
                var d = $(".trigger_frame", e),
                g = $(".trigger_frame", b.$dom);
                d = [d];
                $(".save_trigger", b.$dom).data("grab-id") == $(".save_trigger", e).data("grab-id") && d.push(g);
                for (g = 0; g < d.length; g++) {
                    var i = d[g];
                    h.id ? i.removeClass("building").find(".save_trigger").html("Remove") : i.removeClass("building").addClass("add").find(".save_trigger").html("Add")
                }
            })
        } else f.addClass("add").find(".save_trigger").html("Add")
    },
    hover: function(c) {
        var a = this,
        b,
        e;
        a.$grab = $(c);
        if (a.$grab.find(".metaline").length) {
            $(".grabs").removeClass("active");
            a.$grab.parent(".grabs").addClass("active");
            a.$dom.attr("data-grab", a.$grab.attr("id").split("_")[1]);
            c = a.$dom.attr("class").split(/\s+/);
            var f = /^status_/;
            for (e = 0; e < c.length; e++) {
                var h = c[e];
                h.match(f) && a.$dom.removeClass(h)
            }
            c = a.$grab.data("status_id") !== undefined ? a.$grab.data("status_id") : 1;
            a.$dom.addClass("status_" + c);
            $(document).mousemove(function(d) {
                a.move.call(a, d)
            });
            a.$dom.show();
            c = a.$grab.find(".metaline");
            a.$dom.html(c.html());
            f = a.$dom.find(".trigger_frame");
            f.add(".item_page_trigger").removeClass("just_added");
            if (typeof editor_queue !== "undefined") {
                e = a.$dom.find(".editor_trigger");
                editor_queue.metabar_grab_state(e)
            }
            a.$dom.css({
                top: a.$grab.offset().top + (a.$grab.parents().hasClass("set_group") ? -1: 1) * (a.$grab.find("img").height() / 2) + 3,
                left: a.$grab.offset().left + 10
            });
            b = $(".short_url", a.$dom);
            e = $(".metabar_share", a.$dom);
            b.click(function(d) {
                var g = $(this);
                if (!g.hasClass("working")) {
                    g.addClass("working");
                    modal.create({
                        button: false,
                        extraClass: "tiny",
                        bgcolor: "#000",
                        content: [$('<input type="text" style="text-align: center;" value="' + $(".copytext", $(this)).text() + '" />').css({
                            margin: "0 auto 25px",
                            display: "block",
                            padding: "5px",
                            fontSize: "18px",
                            background: "transparent",
                            color: "#fff",
                            border: "none"
                        })],
                        insert: function() {
                            var i = $(this);
                            d.stopPropagation();
                            $("html").bind("click.shorturl",
                            function(j) {
                                $(j.target).parents(".modal").length || i.animate({
                                    opacity: "hide"
                                })
                            });
                            $("input", $(this)).focus()
                        },
                        close: function() {
                            g.removeClass("working")
                        },
                        centerTop: a.$grab,
                        centerLeft: $("ul.grabs")
                    })
                }
            });
            $(".facebook", e).click(function() {
                $(this).parents(".metabar_share").is(".logged_in") ? modal.facebook({
                    centerTop: a.$grab,
                    centerLeft: $("ul.grabs").filter(":visible"),
                    short_url: "Want \u2013 " + $(".copytext", b).text()
                }) : window.open("http://www.facebook.com/sharer.php?u=" + encodeURIComponent($(".copytext", $(this).siblings(".short_url")).text()), "ShareWindow", "location=0,status=0,width=800,height=400")
            });
            $(".twitter", e).click(function() {
                var d = $(this);
                d.parents(".metabar_share").is(".logged_in") ?
                modal.twitter({
                    centerTop: a.$grab,
                    centerLeft: $("ul.grabs"),
                    short_url: "Want \u2013 " + $(".copytext", d.siblings(".short_url")).text()
                }) : window.open("http://twitter.com/intent/tweet?text=" + encodeURIComponent("Want \u2013 " + $(".copytext", $(this).siblings(".short_url")).text()), "ShareWindow", "location=0,status=0,width=800,height=400")
            });
            $(".tumblr", e).click(function() {
                window.open("http://www.tumblr.com/share/photo?source=" + encodeURIComponent($("img", a.$grab).attr("src").replace(/(medium|small)/, "large")) +
                "&caption=" + encodeURIComponent("Found on Svpply - " + $(".copytext", $(this).siblings(".short_url")).text()) + "&clickthru=" + encodeURIComponent(window.location.host + $("a", a.$grab).attr("href")), "ShareWindow", "location=0,status=0,width=800,height=400")
            });
            $(".email", e).click(function() {
                var d = $(this);
                modal.email({
                    centerTop: a.$grab,
                    centerLeft: $("ul.grabs"),
                    logged_in: d.parents(".metabar_share").hasClass("logged_in"),
                    user: d.data("user"),
                    short_url: "Want \u2013 " + $(".copytext", d.siblings(".short_url")).text()
                })
            });
            $(".svpply", e).click(function() {
                var d = $(this);
                modal.svpply({
                    centerTop: a.$grab,
                    centerLeft: $("ul.grabs"),
                    username: d.data("username"),
                    product: d.data("product")
                })
            });
            $(".title_frame .share", a.$dom).click(function() {
                if (!$(this).parents().hasClass("status_0")) {
                    var d = $(this).parent();
                    d.siblings(".metabar_share").css({
                        display: "block"
                    });
                    d.remove()
                }
            });
            c.find(".save_trigger").text() == "Add" ? f.addClass("add") : f.removeClass("add");
            if (a.$dom.hasClass("status_0")) {
                a.$dom.find(".buy_trigger").removeClass("buy_trigger");
                $([".title_frame .buy a"].toString(), a.$dom).click(function(d) {
                    d.preventDefault();
                    $(this).removeAttr("href");
                    $(this).removeAttr("onclick");
                    modal.alert_product_unavailable("Product name", "Store name", "/store/store-domain.com", "http://www.store-domain.com/product")
                })
            }
        } else a.build(c)
    }
},
enable_metabar = function() {
    var c = $("." + ALLGRABS + ":not(.ui-sortable)"),
    a = c.find(".grab:not(.set_group,.disable_metabar), .grab.set_group .product");
    if (! (navigator.userAgent.match(/iPad|iPhone|iPod/) || !c)) {
        a.live({
            "mouseenter.metabar": function(b) {
                $this =
                $(this);
                $this.find("img, a").attr("title", "");
                if ($(b.relatedTarget).is("#metabar, #metabar *")) {
                    if (($(b.relatedTarget).is("#metabar") ? $(b.relatedTarget) : $(b.relatedTarget).parents("#metabar")).attr("data-grab") !== $(this).attr("id").split("_")[1]) return metabar.hover($this)
                } else return metabar.hover($this)
            },
            "mouseleave.metabar": function(b) {
                $(b.relatedTarget).parents().andSelf().is("#metabar") || metabar.hide()
            }
        });
        $("a.save_trigger").live({
            "click.save_trigger": function() {
                return toggle_save(this)
            },
            "mouseout.save_trigger": function() {
                $(this).removeClass("just_added")
            }
        })
    }
},
disable_metabar = function() {
    $("." + ALLGRABS + ":not(.ui-sortable)").find(".grab:not(.set_group), .grab.set_group .product").die("mouseover.metabar mouseout.metabar");
    $("a.save_trigger").die("click.save_trigger mouseout.save_trigger")
};
$(function() {
    metabar.construct();
    enable_metabar()
});
;
var modal = {
    width: 330,
    height: 250,
    create: function(c) {
        var d = this,
        a,
        e,
        b;
        e = {
            effect: "pop",
            bgcolor: null,
            top: $(window).scrollTop() + ($(window).height() / 2 - d.height / 2),
            left: $(window).width() / 2 - d.width / 2,
            logo: null,
            title: "",
            content: null,
            centerTop: null,
            celterLeft: null,
            button: true,
            buttoncolor: null,
            buttonText: null,
            buttonAttr: null,
            buttonClass: null,
            extraClass: null,
            closeOtherModals: true,
            closeButton: "/assets/image/modal/close.png",
            draggable: true,
            start: function() {},
            insert: function() {},
            close: function() {}
        };
        var f = $('<div class="modal">'),
        g = $('<div class="modal_content">');
        errors = $('<div class="errors">');
        a = $.extend(e, c);
        b = $('<div class="modal_button"><span>' + a.buttonText + "</span></div>");
        b.addClass(a.buttonClass);
        f.addClass(a.extraClass);
        b.attr(a.buttonAttr).css({
            background: a.buttonColor
        });
        c = a.centerTop ? a.centerTop.offset().top + (a.centerTop.height() / 2 - d.height / 2) : a.top;
        e = a.centerLeft ? a.centerLeft.offset().left + (a.centerLeft.width() / 2 - d.width / 2) : a.left;
        $.isArray(a.content) ? $.each(a.content,
        function(h, i) {
            g.append(i)
        }) : g.append(a.content);
        if (a.button) {
            g.append(b);
            g.append(errors);
            g.append($("<br>").attr("style", "clear: both;"))
        }
        f.prepend($('<div class="title"><span>' + a.title + '</span><span class="close"><img src="' + a.closeButton + '" /></span></div>')).append(g).append($('<div class="background">').css({
            background: a.bgcolor
        })).appendTo($("body")).css({
            display: "none"
        });
        $(".close").click(function() {
            d.close.apply(f, [a.close])
        });
        a.logo && $(".title", f).prepend($('<img class="logo" src="/assets/image/modal/' + a.logo.toLowerCase() + '.png" />'));
        a.closeOtherModals && $(".modal").animate({
            opacity: "hide"
        });
        a.start.call(f);
        f.css({
            display: "block",
            top: c,
            left: e,
            width: d.width
        }).addClass(a.effect);
        a.insert.call(f);
        if (a.draggable) {
            f.drag("start",
            function() {
                $(this).css({
                    opacity: 0.8
                })
            }).drag(function(h, i) {
                $(this).css({
                    top: i.offsetY,
                    left: i.offsetX
                })
            },
            {
                handle: ".title"
            }).drag("end",
            function() {
                $(this).css({
                    opacity: 1
                })
            });
            $(".title", f).css({
                cursor: "move"
            })
        }
    },
    close: function(c) {
        var d = this;
        c.call(d);
        $(this).animate({
            opacity: "hide"
        },
        function() {
            d.remove()
        })
    },
    twitter: function(c) {
        var d =
        this,
        a,
        e = $('<div class="count" style="color: #9dda9c;">140</div>');
        e = {
            bgcolor: "#00b9ed",
            title: "Twitter",
            logo: "twitter",
            buttonText: "Tweet this",
            buttonColor: "#5cc15a",
            draggable: true,
            start: function() {
                var b = this;
                $(".text", b).NobleCount($(".count", $(this)), {
                    max_chars: 140,
                    block_negative: false,
                    on_update: function(f, g, h, i) {
                        g.css({
                            color: i <= 0 ? "#ff535c": i <= 20 ? "#f0bc00": "#9dda9c"
                        })
                    }
                });
                $(".text", b).keyup(function(f) {
                    f.stopPropagation()
                });
                $(".modal_button", b).click(function() {
                    var f = $(this),
                    g = $(".text", b).val().length;
                    if (g) if (g <= 140) {
                        $(".errors", b).text("");
                        f.removeClass("disabled");
                        f.attr("data-requires-credential") ? f.trigger("oauthConnected") : f.attr("data-requires-credential", "twitter").bind("oauthConnected",
                        function() {
                            if (!f.hasClass("working")) {
                                f.addClass("working").text("Posting...");
                                Network.share({
                                    platform: "twitter",
                                    payload: {
                                        message: $(".text", b).val()
                                    },
                                    success: function() {
                                        f.text("Posted to Twitter");
                                        b.animate({
                                            opacity: "hide"
                                        });
                                        return true
                                    },
                                    failure: function() {
                                        f.text(a.buttonText);
                                        f.trigger("oauthNotConnected")
                                    }
                                })
                            }
                        }).bind("oauthNotConnected",
                        function() {
                            d.tinyWindow({
                                bgcolor: a.bgcolor,
                                network: "Twitter",
                                postOn: "stream",
                                modal: b,
                                start: function() {
                                    var h = this;
                                    $(".btn_oauth_login", $(this)).click(function() {
                                        f.removeClass("working");
                                        h.animate({
                                            opacity: "hide"
                                        },
                                        function() {
                                            f.trigger("oauthConnected")
                                        })
                                    })
                                },
                                close: function() {
                                    $(".modal_button", b).removeClass("working")
                                }
                            })
                        }).trigger("oauthConnected")
                    } else {
                        $(".errors", b).text("Your messge must be less than 140 characters.");
                        $(this).addClass("disabled")
                    } else {
                        $(".errors", b).text("You didn't write a message.");
                        $(this).addClass("disabled")
                    }
                })
            },
            content: [$('<textarea class="text">').css({
                width: "284px",
                height: "80px"
            }).attr("value", c.short_url), e]
        };
        a = $.extend(e, c);
        d.create(a)
    },
    facebook: function(c) {
        var d = this,
        a,
        e = {
            bgcolor: "#1d4088",
            title: "Facebook",
            logo: "facebook",
            buttonText: "Post to wall",
            buttonColor: "#5cc15a",
            draggable: true,
            start: function() {
                $modal = this;
                $(".text", $modal).keyup(function(b) {
                    b.stopPropagation()
                });
                $(".modal_button").click(function() {
                    var b = $(this);
                    if ($(".text", $modal).val().length) {
                        $(".errors", $modal).text("");
                        b.removeClass("disabled");
                        b.attr("data-requires-credential") ? b.trigger("oauthConnected") : b.attr("data-requires-credential", "facebook.publish_stream").bind("oauthConnected",
                        function() {
                            if (!b.hasClass("working")) {
                                b.addClass("working").text("Posting...");
                                Network.share({
                                    platform: "facebook",
                                    payload: {
                                        message: $(".text", $modal).val()
                                    },
                                    success: function() {
                                        b.text("Posted to Facebook");
                                        $modal.animate({
                                            opacity: "hide"
                                        });
                                        return true
                                    },
                                    failure: function() {
                                        b.text(a.buttonText);
                                        b.trigger("oauthNotConnected")
                                    }
                                })
                            }
                        }).bind("oauthNotConnected",
                        function() {
                            d.tinyWindow({
                                bgcolor: a.bgcolor,
                                network: "Facebook",
                                permission: ".publish_stream",
                                postOn: "wall",
                                modal: $modal,
                                start: function() {
                                    var f = this;
                                    $(".btn_oauth_login", $(this)).click(function() {
                                        b.removeClass("working");
                                        f.animate({
                                            opacity: "hide"
                                        },
                                        function() {
                                            b.trigger("oauthConnected")
                                        })
                                    })
                                },
                                close: function() {
                                    $(".modal_button", $modal).removeClass("working")
                                }
                            })
                        }).trigger("oauthConnected")
                    } else {
                        $(".errors", $modal).text("You didn't write a message.");
                        $(this).addClass("disabled")
                    }
                })
            },
            content: $('<textarea class="text">').css({
                width: "284px",
                height: "80px"
            }).attr("value", c.short_url)
        };
        a = $.extend(e, c);
        d.create(a)
    },
    email: function(c) {
        var d,
        a;
        d = $.extend({
            bgcolor: "#000000",
            title: "Email",
            buttonText: "Send Email",
            buttonColor: "#5cc15a",
            logged_in: false,
            draggable: true,
            start: function() {
                $("input, .text", $(this)).keyup(function(e) {
                    e.stopPropagation()
                });
                $(".modal_button").click(function() {
                    var e = $(this).parents(".modal");
                    if (!$(this).hasClass("working")) {
                        $(this).addClass("working").text("Sending...");
                        if (a = !d.logged_in && !$("input[name=from_email]", e).val().length ?
                        'You need to specify a "from" email': $("input[name=to_email]", e).val().length ? $("textarea.text", e).val().length ? null: "You didn't write a message": "You didn't enter an email address") {
                            $(".errors", e).text(a);
                            return $(this).addClass("disabled").removeClass("working").text(d.buttonText)
                        } else {
                            $(".errors", e).text(a);
                            $(this).removeClass("disabled")
                        }
                        $.ajax({
                            url: "/email/product",
                            type: "post",
                            data: {
                                from_email: $("input[name=from_email]", e).val(),
                                to_email: $("input[name=to_email]", e).val(),
                                from_user: $("input[name=from_user]",
                                e).val(),
                                message: $("textarea.text", e).val()
                            },
                            success: function(b) {
                                $(".modal_button", e).removeClass("working");
                                if (b.status) {
                                    $(".modal_button", e).text("Email Sent!");
                                    e.animate({
                                        opacity: "hide"
                                    })
                                } else {
                                    $(".errors", e).text(b.message);
                                    $(".modal_button", e).addClass("disabled").text(d.buttonText)
                                }
                            }
                        })
                    }
                })
            }
        },
        c);
        d.content = d.logged_in ? [$('<input type="hidden" value="' + d.user + '" name="from_user">'), $('<input type="text" placeholder="Their email address" name="to_email">').css({
            width: "277px",
            padding: "8px 5px",
            margin: "0 10px 10px 0"
        })] :
        [$('<input type="text" placeholder="Your email address" name="from_email">').css({
            "float": "left",
            width: "126px",
            padding: "8px 5px",
            margin: "0 0 10px 0"
        }), $('<input placeholder="Their email address" type="text" name="to_email">').css({
            "float": "right",
            width: "126px",
            padding: "8px 5px",
            margin: "0 0 10px 0"
        })];
        d.content.push($('<textarea class="text" placeholder="This is a message for my Friend">').css({
            width: "284px",
            height: "80px"
        }).attr("value", d.short_url));
        this.create(d)
    },
    alert_product_unavailable: function(c,
    d, a, e) {
        var b;
        this.width = 365;
        b = $.extend({
            title: "No longer for sale",
            extraClass: "alert",
            button: false,
            draggable: false,
            closeButton: "/assets/image/modal/close-yellow.png",
            content: []
        });
        b.content.push($("<p>The product <strong>\u201c" + c + '\u201d</strong> is no longer available at \u201c<a href="' + a + '">' + d + '</a>\u201d. The seller may have dis&shy;con&shy;ti&shy;nu&shy;ed the item or it could be sold out at this time. If this is a mistake, please contact us at <a href="mailto:help@svpply.com" class="mail">help@svpply.com</a><br><br>See other products from <a href="' +
        a + '">' + d + '</a>.<br><span class="alternative">Or go to the <a href="' + e + '" target="_blank">store\'s product page</a>.</span></p>'));
        this.create(b)
    },
    embed_set: function() {
        var c = this,
        d;
        this.width = 525;
        this.widget_width = this.width - 45;
        this.height = 600;
        this.widget_text = function(f, g, h) {
            return '<sv:set-widget set_id="' + page_entity.id + '" rows="' + f + '" columns="' + g + '" show_masthead="' + (h == false ? "false": "true") + '" width="' + this.widget_width + '" background="#fff" color="#000"></sv:set-widget>'
        };
        this.redraw = function() {
            var f =
            $("#rows").val(),
            g = $("#cols").val(),
            h = $("#inc_masthead").attr("checked");
            this.set_widget.rows = f;
            this.set_widget.columns = g;
            this.set_widget.show_masthead = h;
            this.$textarea.val(this.script_text + this.widget_text(f, g, h)).select();
            this.set_widget.redraw()
        };
        var a = page_entity.masthead == false ? "disabled": "checked",
        e = page_entity.masthead == false ? "display: none;": "",
        b = $('<div class="embed_set_modal" style="color: #fff;"></div');
        description = $('<div class="description">Show products from your set on your blog or homepage. Specify different fields and paste the customizable code into your source.</div>');
        d = $('<div class="options" style="padding: 10px 0; color: #ffed8c;"></div>');
        d.append('<label for="inc_masthead" style="' + e + '">Include Supergraphic:</label><input type="checkbox" style="padding-right: 10px; ' + e + '" id="inc_masthead" ' + a + ">");
        d.append('<label for="rows">Rows:</label><select id="rows"><option value="2" selected>2</option><option value="3">3</option><option value="4">4</option></select>');
        d.append('<label for="cols" style="padding-left: 10px;">Columns:</label><select id="cols" ><option value="2" selected>2</option><option value="3">3</option><option value="4">4</option></select>');
        this.script_text = '<script type="text/javascript" src="http://' + DOMAIN + '/api/all.js"><\/script>';
        this.$textarea = $('<textarea name="set_widget_text" style="width:100%" id="set_widget_text" rows="3" readonly>' + this.script_text + this.widget_text(2, 2, page_entity.masthead != false) + "</textarea>");
        a = $(this.widget_text(2, 2, page_entity.masthead != false));
        e = $('<div id="loading" style="height: 200px; display: block; background-color: #fff; vertical-align:middle;padding-top: 80px; color: #000;"><span>loading </span><img src="/assets/image/spinner_black_on_white.gif"></div>');
        b.append(description).append(d).append(this.$textarea).append(e).append(a);
        this.set_widget = new SetWidget(a);
        c.create({
            bgcolor: "#000",
            title: "Embed your Set",
            draggable: true,
            width: c.widget_width,
            extraClass: "transparent",
            buttonText: "",
            start: function() {
                $("#rows").change(function() {
                    c.redraw()
                });
                $("#cols").change(function() {
                    c.redraw()
                });
                $("#inc_masthead").change(function() {
                    c.redraw()
                });
                $("body").bind("sv.set-widget-loaded",
                function() {
                    $("#loading").hide()
                })
            },
            insert: function() {
                c.$textarea.select()
            },
            content: [b]
        })
    },
    svpply: function(c) {
        var d,
        a,
        e;
        d = $.extend({
            bgcolor: "#000000",
            title: "Show this to someone on Svpply",
            buttonText: "Send",
            buttonColor: "#5cc15a",
            buttonClass: "disabled",
            draggable: true,
            insert: function() {
                var b = $(this);
                $(".text", b).keyup(function(f) {
                    f.stopPropagation()
                });
                a = DataStore.svpply_followers();
                e = (new Edison).init({
                    wire: (new Wire).init($("#show_name")),
                    datastore: a,
                    results: (new ResultsCore).noSocial(),
                    hiddenInput: $(".modal .mentions"),
                    highlighter: $(".modal .highlighter")
                });
                e.alwaysActive();
                $(e).subscribe("/Edison/select" +
                e.guid,
                function(f) {
                    var g = $("img.avatar", b).clone();
                    $(".modal_button", b).removeClass("disabled");
                    $("<input>", {
                        type: "hidden",
                        name: "show_modal_user",
                        value: f.id
                    }).appendTo(b);
                    $("img.avatar", b).attr("src", f.profile_image_small_url);
                    $(".text", b).focus();
                    $("#show_name", b).css("display", "none").after('<span id="show_name_span" style="margin-top: 10px; display: block;">Show this to <a class="comment_mention sv username" data-network="sv" data-network-id="' + f.username + '" href="http://' + DOMAIN + "/" + f.username +
                    '">' + f.display_name + '</a><span style="margin: 0 0 0 5px;" class="circle small">X</span></span>');
                    $(".circle.small", b).click(function() {
                        $("#show_name_span", b).remove();
                        $("#show_name", b).css("display", "block");
                        $("img.avatar", b).replaceWith(g);
                        $(".modal_button", b).addClass("disabled");
                        e.clear()
                    })
                });
                $(".modal_button", b).click(function() {
                    if (!/[0-9]/.test($("input[name=show_modal_user]", b).val())) {
                        $(".errors", b).text("You didn't select a user.");
                        return $(".modal_button", b).addClass("disabled")
                    }
                    $(".modal_button",
                    b).text("Sending...");
                    $.ajax({
                        url: "/item/suggest",
                        type: "post",
                        dataType: "text",
                        data: {
                            send_type: "member",
                            recipient_id: $("input[name=show_modal_user]", b).val(),
                            note: $(".text", b).val(),
                            item_id: d.product
                        },
                        success: function() {
                            b.animate({
                                opacity: "hide"
                            },
                            function() {
                                $(this).remove()
                            });
                            $(".modal_button", b).removeClass("working")
                        },
                        error: function() {
                            $(".errors", b).text("There was a problem sending the message");
                            $(".modal_button", b).removeClass("working").text(d.buttonText)
                        }
                    })
                })
            },
            content: []
        },
        c);
        d.content.push($('<div style="float: left;"><img class="avatar" src="/assets/image/avatars/_placeholder.png" style="width: 40px;"/></div>'));
        d.content.push($('<div style="float: left; padding: 2px 0 0 15px; width: 210px;"><div class="highlighter" style="display: none"><input type="hidden" class="mentions"></div><span class="input_span"><input style="font-size: 14px; padding: 8px 4px; margin-top: 4px; margin-bottom: -6px; width: 226px; margin: 0 -1px; border: 1px solid #979797;" placeholder="Type a users name" id="show_name" /></span></div>'));
        d.content.push($('<textarea placeholder="Optional Message" class="text" style="margin: 10px 0 0 0; height: 70px; width: 284px;">'));
        this.create(d)
    },
    tinyWindow: function(c) {
        c = $.extend({
            button: false,
            extraClass: "tiny",
            network: null,
            permission: "",
            postOn: null,
            closeOtherModals: false,
            content: []
        },
        c);
        c.top = c.modal.offset().top - 20;
        c.left = c.modal.offset().left + 30;
        c.content.push($("<h2>Please connect with " + c.network + "</h2>"));
        c.content.push($('<div id="btn_' + c.network.toLowerCase() + '" class="btn_oauth_login" data-requires-credential="' + c.network.toLowerCase() + c.permission.toLowerCase() + '">Connect to ' + c.network + "</div>"));
        c.content.push($('<span class="disclaimer">We will <strong>Never</strong> post anyting on your ' +
        c.network + " " + c.postOn + " without your permission.<span>"));
        this.create(c)
    },
    giftfinder: function(c) {
        c = $.extend({
            title: "Find a Gift",
            prompt: "Who are you finding a gift for?",
            buttonText: "Build a gift set",
            extraClass: "gift",
            buttonColor: "#3dd883",
            bgcolor: "#000",
            draggable: true,
            start: function() {
                $(".modal_button").hide();
                var d = function() {
                    var a = $(this).parents(".modal"),
                    e = $("input[name=title]", a).val(),
                    b = $("#gift_prices", a).val(),
                    f = $("#gift_genders", a).val();
                    category = $("#gift_cat", a).val();
                    if (e.length > 1 && (b !=
                    "" || f != "" || category != "")) {
                        $(".modal_button", a).show();
                        $(".modal_button span", a).replaceWith("<span>Build a gift set for " + e + "</span")
                    } else $(".modal_button", a).hide()
                };
                $("select", this).change(d);
                $("input[name=title]", this).keyup(d);
                $(".modal_button").click(function() {
                    var a = $(this).parents(".modal"),
                    e = $("input[name=title]", a).val(),
                    b = $("#gift_prices", a).val(),
                    f = $("#gift_genders", a).val();
                    a = $("#gift_cat", a).val();
                    e = {
                        type: "giftfinder",
                        title: e
                    };
                    if (b !== "") e.price = parseInt(b);
                    if (f !== "") e.gender = parseInt(f);
                    if (a !== "") e.category = parseInt(a);
                    $(this).addClass("working").text("Building...");
                    $.ajax({
                        url: "/sets/create",
                        type: "post",
                        data: e,
                        success: function(g) {
                            if (g.status) window.location = "http://" + DOMAIN + "/" + current_user.username + "/sets/" + g.id
                        }
                    })
                })
            },
            content: []
        },
        c);
        c.content.push($('<div id="prompt">' + c.prompt + "</div>"));
        c.content.push($('<input type="text" class="svpply_input" name="title" id="gift_for" placeholder="For example: \'Mom\', \'Boss\', etc">').css({
            width: 280
        }));
        c.content.push($('<div id="select_text">Please select a:</div>'));
        $gift_prices = $('<select id="gift_prices" name="gift_prices"><option value="">Price Range</option></select>');
        $.each(["$1-20", "$20-50", "$50-100", "$100-200", "$200-500"],
        function(d, a) {
            $gift_prices.append($('<option value="' + d + '">' + a + "</option>"))
        });
        c.content.push($gift_prices);
        $gift_genders = $('<select id="gift_genders" name="gift_genders"><option value="">Gender</option></select>');
        $.each(["Men's", "Women's", "Neutral"],
        function(d, a) {
            $gift_genders.append($('<option value="' + d + '">' + a + "</option>"))
        });
        c.content.push($gift_genders);
        $gift_cat = $('<select id="gift_cat" name="gift_cat"><option value="">Category</option></select>');
        $.each(["Apparel", "Accessories", "Shoes", "Tech", "Media", "Home", "Other", "Art"],
        function(d, a) {
            $gift_cat.append($('<option value="' + d + '">' + a + "</option>"))
        });
        c.content.push($gift_cat);
        this.create(c)
    }
};
;
var Growler = function() {
    this.grab_id = 0;
    this.$growler = $("#growler");
    this.$cancel = $("#growl_btn_cancel");
    var a = this;
    this.social_update = function(b, f) {
        a.$growler.stopTime("growl_kill");
        var g = b == "twitter" ? "facebook": "twitter";
        $(".message").slideDown();
        $("#growl_btn_" + g).fadeOut(50,
        function() {
            a.$cancel.show()
        });
        var c = $(f);
        c.addClass("clicked").unbind("click.display").attr("data-requires-credential", c.hasClass("twitter") ? "twitter": "facebook.publish_stream").bind("click.send",
        function() {
            Network.share({
                platform: b,
                payload: {
                    message: $("#share_message").val()
                },
                success: function() {
                    a.$cancel.fadeOut();
                    c.unbind("click.send").removeAttr("data-requires-credential").html(c.attr("data-complete-copy")).bind("click.kill",
                    function() {
                        a.kill()
                    });
                    a.$growler.oneTime(3E3, "growl_kill",
                    function() {
                        a.kill()
                    });
                    return true
                },
                failure: function() {}
            })
        })
    };
    this.kill = function() {
        a.$growler.fadeOut(200,
        function() {
            a.$growler.remove();
            delete a
        })
    };
    this.init = function() {
        $("#share_message").NobleCount("#share_message_count", {
            max_chars: 140,
            block_negative: true
        });
        a.$growler.animate({
            top: "32px",
            opacity: 1
        });
        d();
        a.$growler.mouseenter(function() {
            a.$growler.stopTime("growl_kill")
        }).mouseleave(function() {
            $("#growler textarea").is(":focus") || d()
        }).hover(function() {
            $.data(this, "hover", true)
        },
        function() {
            $.data(this, "hover", false)
        }).data("hover", false);
        $("#growler textarea").blur(function() {
            a.$growler.data("hover") || d()
        });
        $("#growl_btn_twitter, #growl_btn_facebook").bind("click.display", e);
        a.$cancel.click(function() {
            $("#growler .clicked").removeClass("clicked").removeAttr("data-requires-credential");
            a.$cancel.hide();
            $(".message").slideUp();
            $("#growl_btn_facebook:hidden, #growl_btn_twitter:hidden").fadeIn(50,
            function() {
                $("#growl_btn_twitter, #growl_btn_facebook").unbind("click.send").unbind("click.display").bind("click.display", e)
            })
        })
    };
    var e = function() {
        var b = $(this).attr("id").split("_")[2];
        growler.social_update(b, this)
    },
    d = function() {
        a.$growler.oneTime(1E4, "growl_kill",
        function() {
            a.kill()
        })
    };
    this.init()
};
;
var Prepender = function() {
    this.update_frequency = "30s";
    this.feed_item_id = null;
    this.real_title = document.title;
    this.loaded_items = 0;
    this.construct = function() {
        if ($(".grab").length < 1) return false;
        this.check_new();
        return true
    };
    this.update_message = function(a) {
        var b = "";
        b = "(" + a + ") new product";
        if (a > 1) b += "s";
        $("#btn_new").html(b).css("display", "block");
        document.title = b + " \u2014 " + prepender.real_title
    };
    this.check_new = function() {
        if (typeof pagination_prefix == "undefined") return false;
        $(document).oneTime(this.update_frequency,
        "prepender_timer",
        function() {
            var a = $("ul." + GRABS + " li:first").attr("data-feed_item_id");
            if ($("#grabs_prepending li:first").attr("data-feed_item_id") > a) a = $("#grabs_prepending li:first").attr("data-feed_item_id");
            a = "/items_feed" + pagination_prefix.replace(/next/, "check_new") + a;
            var b = $("#filter_list").serialize();
            $.ajax({
                type: "post",
                url: a,
                data: b,
                error: function() {},
                success: function(c) {
                    if (c) {
                        prepender.loaded_items += $(c).prevAll(".grab").size() + 1;
                        prepender.update_message(prepender.loaded_items);
                        $("#grabs_prepending").prepend(c);
                        $("#grabs_prepending").each(function(d, f) {
                            if (d <= $(c).prevAll(".grab").size()) {
                                var e = $(f).attr("id").replace(/grab_/, "");
                                $("#img_" + e).attr("src") == "/assets/image/data/small/_grab_processing.jpg" && prepender.update_image(e)
                            }
                        });
                        c = "";
                        $("#btn_new").unbind("click");
                        $("#btn_new").bind("click",
                        function() {
                            var d = $("#grabs_prepending").html();
                            $("#grabs_prepending").html("");
                            $("." + GRABS).prepend(d);
                            d = "";
                            $("." + GRABS).oneTime(50,
                            function() {
                                $("." + GRABS + " .prepended").css("opacity", "1")
                            });
                            $("." + GRABS).oneTime(150,
                            function() {
                                $("." + GRABS + " .prepended").removeClass("prepended")
                            });
                            document.title = prepender.real_title;
                            $("#btn_new").css("display", "none");
                            prepender.loaded_items = 0;
                            $.jknav.items.grabs = null;
                            $(jknav_grab_frequency).jknav(false, GRABS)
                        })
                    }
                },
                complete: function() {
                    prepender.check_new()
                }
            })
        });
        return true
    };
    this.update_image = function(a) {
        $("#grab_" + a).everyTime("10s", "reload",
        function() {
            $.ajax({
                method: "post",
                url: "/item/" + a + "/src",
                error: function() {},
                success: function(b) {
                    if (b != "/assets/image/data/small/_grab_processing.jpg") {
                        img =
                        new Image;
                        img.onload = function() {
                            $("#img_" + a).attr("width", img.width).attr("height", img.height);
                            $("#img_" + a).css("width", img.width + "px").css("height", img.height + "px");
                            $("#img_" + a).attr("src", b)
                        };
                        img.src = b;
                        $("#grab_" + a).stopTime("reload")
                    }
                }
            })
        })
    };
    this.construct()
};
;
var sv_pk_data = {};
$(function() { ({
        pk: null,
        user: null,
        pub: null,
        engine: null,
        init: function() {
            this.pk = sv_pk_data.pk;
            this.user = sv_pk_data.user;
            this.pub = sv_pk_data.pub;
            try {
                if ((this.engine = typeof localStorage != "undefined" ? localStorage: typeof globalStorage[location.host] != "undefined" ? globalStorage[location.host] : false) && this.pk) {
                    this.engine.setItem("pk_" + this.pub, this.pk);
                    this.engine.setItem("user_" + this.pub, this.user)
                }
            } catch(a) {}
        }
    }).init()
});
;
var page_action = [];
page_action.push("load");
var action_on = {
    _defines: {
        cookie_name: "action_on_event",
        product_url: "/grab/toggle/",
        follow_url: "/followers/toggle",
        set_url: "/follow"
    },
    _cookie: null,
    _action: null,
    _event: null,
    _type: null,
    _id: null,
    _selector: null,
    init: function() {
        var a = this,
        b;
        if ($.cookie("ci_session") && typeof unserialize($.cookie("ci_session")) !== "undefined") {
            typeof unserialize($.cookie("ci_session")).user_id !== "undefined" && page_action.push("logged_in");
            if ($.cookie(a._defines.cookie_name)) {
                a._cookie = $.parseJSON($.cookie(a._defines.cookie_name));
                $.each(a._cookie,
                function(c, d) {
                    b = "_" + c;
                    a[b] = d
                });
                a._event && a.do_action()
            }
        }
    },
    do_action: function() {
        var a = this;
        $.each(page_action,
        function(b, c) {
            if (c === a._event) a["do_" + a._action](function() {
                a.delete_cookie()
            })
        })
    },
    do_follow: function(a) {
        var b = this,
        c,
        d,
        e;
        switch (b._type) {
        case "product":
            c = b._defines.product_url + b._id;
            d = {
                ajax: 1
            };
            e = function(f) {
                $("body").append(f.growler);
                growler = new Growler;
                growler.grab_id = b._id;
                toggle_product_button(b._action, b._id);
                a()
            };
            break;
        case "domain":
        case "user":
            c = b._defines.follow_url;
            d = {
                type: b._type,
                following_id: b._id
            };
            switch_follow_button_state(false, b._id);
            DataStore.svpply().refresh();
            e = a
        }
        $.ajax({
            url: c,
            data: d,
            type: "post",
            dataType: "json",
            success: e,
            cache: false
        })
    },
    do_own: function(a) {
        var b = this,
        c,
        d,
        e;
        switch (b._type) {
        case "product":
            c = "/item/purchased_toggle/" + b._id;
            d = {
                ajax: 1
            };
            e = function() {
                toggle_product_button(b._action, b._id);
                a()
            }
        }
        $.ajax({
            url: c,
            data: d,
            type: "post",
            dataType: "json",
            success: e,
            cache: false
        })
    },
    do_show: function(a) {
        if (page_entity.id === this._new_id && page_entity.type === "Set") {
            $('<div id="header_message">').html('<div style="width: 920px; margin: 0 auto;"><span style="float: left;">Your new set, cloned from <a style="border-bottom-color: #136357; color: #136357; font-size: 16px; font-weight: bold;" href="/' +
            this._current_set_username + "/sets/" + this._current_id + '">' + this._current_title + '</a></span><a href="#" id="dismiss_message" style="float: right; border-bottom-color: #136357; font-size: 18px; font-weight: bold; color: #136357;">Dismiss</a></div>').css({
                overflow: "auto",
                "background-color": "#19ffdc",
                padding: "20px 0",
                "font-size": 18,
                color: "#136357"
            }).prependTo(document.body);
            $("#dismiss_message").click(function(b) {
                b.preventDefault();
                $("#header_message").animate({
                    height: 0,
                    "padding-top": 0,
                    "padding-bottom": 0
                },
                function() {
                    $(this).remove()
                })
            });
            a()
        }
    },
    do_fire_event: function(a) {
        self = this;
        $(function() {
            $(self._selector).trigger(self._type)
        });
        a()
    },
    delete_cookie: function() {
        $.cookie(this._defines.cookie_name, null, {
            path: "/",
            domain: "." + DOMAIN
        })
    }
};
$(window).load(function() {
    action_on.init()
});
;
$(function() {
    var a = $("#search_form"),
    b = a.find("input");
    a.submit(function() {
        var c = encodeURIComponent(b.val());
        if (c.length > 0) window.location = a.attr("action") + c;
        else if (a.data("default-keyword")) window.location = "/search/sets/" + encodeURIComponent(a.data("default-keyword"));
        else b.focus();
        return false
    });
    b.focus(function() {
        a.addClass("active")
    }).blur(function() {
        a.removeClass("active")
    });
    $(".click_area", a).click(function() {
        a.submit()
    })
});
;
var no_results_message = function(e, f) {
    var a = parseInt($("#products_tab span.total").html(), 10),
    b = $("#people_results>ul>li").length,
    c = $("#stores_results>ul>li").length,
    d = "<em>No " + e + " were found</em><br>";
    if (a || b || c) {
        if (a && e != "products") d += '<a href="#" class="click_products search_results_tab" data-tab-section="products" >' + a + " product" + (a == 1 ? "": "s") + "</a> ";
        if (a && b || a && c) d += " and ";
        if (b && e != "people") d += '<a href="#" class="click_people search_results_tab" data-tab-section="people" >' + b + (b == 1 ? " person":
        " people") + "</a> ";
        if (b && c) d += " and ";
        if (c && e != "stores") d += '<a href="#" class="click_stores search_results_tab" data-tab-section="stores" >' + c + " store" + (c == 1 ? "": "s") + "</a>";
        d += " match" + (b + c + a == 1 ? "es": "") + " your search, though"
    }
    $("#" + f).html(d)
};
;
$(function() {
    $(".close_button").click(function(a) {
        a.preventDefault();
        a = $(this).parent().attr("id");
        $.cookie(a, "", {
            expires: 14
        });
        $(this).parent().slideUp("slow")
    })
});
;
var RecommenderWidget = Class.extend({
    init: function(d, c) {
        var g = this,
        a,
        b;
        this.set = page_entity;
        this.$element = d;
        this.cache = [];
        a = $.extend({
            rows: 2,
            cols: 3,
            bgColor: "#f2f2f2",
            fgColor: "#000",
            buttonColor: "#393"
        },
        c);
        b = /price_(\d+)/;
        if (b = page_entity.tags.match(b)) this.price = parseInt(b[1]);
        b = /gender_(\d+)/;
        if (b = page_entity.tags.match(b)) this.gender = parseInt(b[1]);
        b = /category_(\d+)/;
        if (b = page_entity.tags.match(b)) this.category = parseInt(b[1]);
        this.exclude = [];
        $(".products .grab").each(function(f, e) {
            g.exclude.push(parseInt($(e).attr("id").slice(5)))
        });
        g.create(a)
    },
    get_products: function(d, c) {
        var g = this;
        data = {
            limit: Math.max(d, 18)
        };
        if ($(".recommender_widget #prices").val() !== "") data.price = $(".recommender_widget #prices").val() || this.price;
        if ($(".recommender_widget #genders").val() !== "") data.gender = $(".recommender_widget #genders").val() || this.gender;
        if ($(".recommender_widget #categories").val() !== "") data.category = $(".recommender_widget #categories").val() || this.category;
        if (this.cache.length < d || this.last_price != data.price || this.last_gender != data.gender ||
        this.last_category != data.category) {
            this.last_price = data.price;
            this.last_gender = data.gender;
            this.last_category = data.category;
            if (this.exclude) data.exclude = this.exclude;
            data.seed = page_entity.id;
            $.ajax({
                url: "/sets/recommender",
                data: data,
                type: "post",
                success: function(b) {
                    for (var f = [], e = Math.min(d, b.response.products.length), h = 0; h < e; h++) f.push(b.response.products.shift());
                    g.cache = b.response.products;
                    c.call(g, f)
                }
            })
        } else {
            items = [];
            for (var a = 0; a < d; a++) items.push(this.cache.pop());
            c.call(g, items)
        }
    },
    replace_items: function(d,
    c) {
        var g,
        a,
        b = this;
        c = c || $(".grab.unselected");
        c.each(function(f, e) {
            if (d[f]) {
                a = Model.factory(d[f]);
                g = render_html(a, "small");
                b.exclude.push(a.id);
                $(e).replaceWith(g);
                $(".recommender_widget #grab_" + a.id).addClass("unselected").addClass("disable_metabar").remove(".metaline").append('<span class="product_hover"><a href="#" class="add">Add</a><a class="info" href="' + a.url + '" target="_blank">Info</a></span>').append($('<span class="product_loading"><img src="/assets/image/product_loading_white.gif"></span>').hide()).append($('<span class="product_details"><span class="price">' +
                a.price + '</span><span class="title">' + a.page_title + "</span>")).hover(b.enter, b.leave);
                var h = constrain(a.width, a.height, 175);
                $(".recommender_widget #grab_" + a.id + " a.grab_image").css({
                    width: h[0],
                    height: h[1]
                });
                $(".recommender_widget #grab_" + a.id + " a.grab_image img").css({
                    width: h[0],
                    height: h[1]
                })
            } else $(e).replaceWith($('<li class="grab unselected loading"></li>'))
        });
        $(".recommender_widget .grab a.grab_image").click(function(f) {
            f.preventDefault()
        });
        $(".info", b.$widget).click(function(f) {
            f.stopImmediatePropagation()
        });
        $(".add", b.$widget).click(function(f) {
            b.click_product.apply(b, [f, this])
        })
    },
    enter: function() {
        var d = $("img", $(this)),
        c = d.attr("src"),
        g = d.css("width");
        height = d.css("height");
        $(this).hasClass("loading") || $(".grabs .placeholder").css({
            "background-image": "url('" + c + "')",
            "background-size": g + " " + height
        });
        $(".grabs .placeholder span").hide()
    },
    leave: function() {
        $(".grabs .placeholder").css({
            "background-image": "none"
        });
        $(".grabs .placeholder span").show()
    },
    refresh: function() {
        var d = this;
        $(".grab.unselected .grab_image",
        this.$widget).hide();
        $(".grab.unselected .product_loading", this.$widget).show();
        $(".grab.unselected .product_hover", this.$widget).hide();
        $(".grab.unselected .product_details", this.$widget).hide();
        $(".grab.unselected", this.$widget).addClass("loading");
        this.get_products($(".grab.unselected", this.$widget).length,
        function(c) {
            d.replace_items(c)
        })
    },
    click_product: function(d, c) {
        var g = this,
        a = $(c).parent().parent(),
        b,
        f = $(a).attr("data-id");
        $img = $("img", $(a));
        url = $img.attr("src");
        width = $img.css("width");
        height =
        $img.css("height");
        if ($(a).hasClass("loading")) return false;
        $(a).unbind("click");
        $('<li class="loading_placeholder" id="place_' + f + '"></li>').insertBefore(".products .grabs.grid .placeholder").css({
            "background-image": "url('" + url + "')",
            "background-size": width + " " + height
        });
        this.leave(); ($(".products li").length - 1) % 4 == 0 && $.scrollTo(".products .placeholder", 150);
        $(".grab_image", $(a)).hide();
        $(".product_hover", $(a)).hide();
        $(".product_details", $(a)).hide();
        $(".product_loading", $(a)).show();
        $(a).addClass("loading");
        this.get_products(1,
        function(e) {
            g.replace_items(e, $(a))
        });
        $.ajax({
            url: "/sets/add_item",
            type: "post",
            data: {
                addToSets: [page_entity.id],
                entity_id: f
            },
            success: function(e) {
                b = Model.factory(e.response.items[0]);
                $item_html = render_html(b, "medium").attr("data-id", b.product.id);
                $(".products .grabs.grid #place_" + f).replaceWith($item_html)
            }
        });
        return false
    },
    create: function(d) {
        var c = this,
        g,
        a,
        b,
        f;
        this.options = d;
        this.$widget = $('<div class="recommender_widget"></div>').css({
            background: d.bgColor,
            color: d.fgColor
        });
        g = $('<a href="#" class="collapser">Collapse</a>');
        this.$widget.append(g);
        this.$widget.append('<h1>Recommendations for <span class="title">' + this.set.title + "</span></h1>");
        this.$toolbar = $('<div class="toolbar"></div>');
        a = $("<span></span");
        this.$refresh = $('<a href="#" class="refresh">Refresh</a>');
        b = $('<select id="prices" name="prices"><option value="">Price</option></select>');
        $.each(["$1-20", "$20-50", "$50-100", "$100-200", "$200-500"],
        function(e, h) {
            b.append($('<option value="' + e + '" ' + (c.price == e ? "selected": "") + ">" + h + "</option>"))
        });
        f = $('<select id="genders" name="genders"><option value="">Gender</option></select>');
        $.each(["Men's", "Women's", "Neutral"],
        function(e, h) {
            f.append($('<option value="' + e + '" ' + (c.gender == e ? "selected": "") + ">" + h + "</option>"))
        });
        $gift_cats = $('<select id="categories" name="categories"><option value="">Category</option></select>');
        $.each(["Apparel", "Accessories", "Shoes", "Tech", "Media", "Home", "Other", "Art"],
        function(e, h) {
            $gift_cats.append($('<option value="' + e + '" ' + (c.category == e ? "selected": "") + ">" + h + "</option>"))
        });
        this.$toolbar.append(this.$refresh);
        a.append(b, f, $gift_cats);
        this.$toolbar.append(a);
        this.$grabs = $('<ul class="grabs grid"></ul>');
        for (a = 0; a < d.rows * d.cols; a++) this.$grabs.append('<li class="grab unselected"><span class="product_loading" style="display: block;"><img src="/assets/image/product_loading_white.gif"></span></li>');
        this.$widget.append(this.$toolbar, this.$grabs);
        this.exclude.length ? this.$widget.addClass("collapsed") : this.$widget.addClass("expanded");
        this.$element.replaceWith(this.$widget);
        this.$refresh.click(function() {
            c.refresh.apply(c)
        });
        f.change(function() {
            c.refresh.apply(c)
        });
        b.change(function() {
            c.refresh.apply(c)
        });
        $gift_cats.change(function() {
            c.refresh.apply(c)
        });
        g.click(function() {
            if ($(".recommender_widget").hasClass("collapsed")) {
                $(".recommender_widget").removeClass("collapsed").addClass("expanded");
                $(".products .placeholder").show();
                $.scrollTo(".products .placeholder", 200)
            } else {
                var e = Math.max(0, $(window).scrollTop() - $(".recommender_widget").height());
                $.scrollTo(e, 200);
                $(".recommender_widget").removeClass("expanded").addClass("collapsed");
                $(".products .placeholder").hide()
            }
        });
        this.$placeholder = $('<li class="placeholder"><span>Select a product below to add it to this Set</span></li>');
        c.exclude.length && this.$placeholder.hide();
        $(".products .grabs.grid").append(this.$placeholder);
        c.get_products(d.rows * d.cols,
        function(e) {
            c.replace_items(e)
        })
    }
});
$(window).load(function() {
    if (window.location.search.indexOf("launch_giftfinder") != -1) if (current_user.logged_in) $("#launch_giftfinder").trigger("click");
    else {
        $.cookie("action_on_event", JSON.stringify({
            event: "logged_in",
            action: "fire_event",
            type: "click",
            selector: "#launch_giftfinder",
            referrer: window.location.href
        }), {
            path: "/",
            domain: "." + DOMAIN
        });
        $.cookie("action_on_event", JSON.stringify({
            event: "just_registered",
            action: "fire_event",
            type: "click",
            selector: "#launch_giftfinder",
            referrer: window.location.href
        }),
        {
            path: "/",
            domain: "." + DOMAIN
        });
        document.location = "/register"
    }
});



var meta;
if (document.createElement &&
(meta = document.createElement('meta'))) {
// set properties
meta.name = "viewport";
meta.content = "width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;";
// now add the meta element to the head
document.getElementsByTagName('head').item(0).appendChild(meta);
}
var meta2;
if (document.createElement &&
(meta2 = document.createElement('meta'))) {
// set properties
meta2.name = "apple-mobile-web-app-capable";
meta2.content = "yes";
// now add the meta element to the head
document.getElementsByTagName('head').item(0).appendChild(meta2);
}

$('#filters form').click(function() {
  alert('Handler for .click() called.');
});