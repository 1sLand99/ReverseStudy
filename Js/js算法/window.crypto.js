/**************************************************_
          SmallDonWindow.js
**************************************************/
window=this;
fun=function(){}
window.navigator = {
        appCodeName: "Mozilla",
        appName: "Netscape",
        appVersion: "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36",
        bluetooth: {},
        clipboard: {},
        connection: {
            onchange: null,
            effectiveType: "4g",
            rtt: 100,
            downlink: 10,
            saveData: false,
            addEventListener: fun,
            dispatchEvent: fun,
            removeEventListener: fun
        },
        cookieEnabled: true,
        credentials: {},
        deviceMemory: 8,
        doNotTrack: null,
        geolocation: {},
        hardwareConcurrency: 12,
        keyboard: {},
        language: "en-US",
        languages: ["en-US", "en", "zh", "zh-CN"],
        locks: {},
        maxTouchPoints: 0,
        mediaCapabilities: {},
        mediaDevices: {
            ondevicechange: null
        },
        mediaSession: {
            metadata: null,
            playbackState: "none"
        },
        mimeTypes: {},
        onLine: true,
        permissions: {},
        platform: "Win32",
        plugins: [{}, {}, {}],
        presentation: {
            receiver: null,
            defaultRequest: null
        },
        product: "Gecko",
        productSub: "20030107",
        serviceWorker: {
            ready: {},
            controller: null,
            oncontrollerchange: null,
            onmessage: null
        },
        storage: {},
        usb: {
            onconnect: null,
            ondisconnect: null
        },
        userActivation: {
            hasBeenActive: true,
            isActive: true
        },
        userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36",
        vendor: "Google Inc.",
        vendorSub: "",
        webkitPersistentStorage: {},
        webkitTemporaryStorage: {},
        ancestorOrigins: [],
        bluetooth: fun,
        clipboard: fun,
        connection: fun,
        cookieEnabled: fun,
        credentials: fun,
        deviceMemory: fun,
        doNotTrack: fun,
        geolocation: fun,
        getBattery: fun,
        getGamepads: fun,
        getUserMedia: fun,
        hardwareConcurrency: fun,
        javaEnabled: fun,
        keyboard: fun,
        locks: fun,
        maxTouchPoints: fun,
        mediaCapabilities: fun,
        mediaDevices: fun,
        mediaSession: fun,
        mimeTypes: fun,
        onLine: fun,
        permissions: fun,
        presentation: fun,
        registerProtocolHandler: fun,
        requestMIDIAccess: fun,
        requestMediaKeySystemAccess: fun,
        sendBeacon: fun,
        serviceWorker: fun,
        storage: fun,
        unregisterProtocolHandler: fun,
        usb: fun,
        userActivation: fun,
        vibrate: fun,
        webkitGetUserMedia: fun,
        webkitPersistentStorage: fun,
        webkitTemporaryStorage: fun
    };  
/******************************************************/
/**************************************************_
          asmCryptoJS.js
**************************************************/
/*! asmCrypto, (c) 2013 Artem S Vybornov, opensource.org/licenses/MIT */ ! function(a, b) {
    function c() {
        var a = Error.apply(this, arguments);
        this.message = a.message, this.stack = a.stack
    }

    function d() {
        var a = Error.apply(this, arguments);
        this.message = a.message, this.stack = a.stack
    }

    function e() {
        var a = Error.apply(this, arguments);
        this.message = a.message, this.stack = a.stack
    }

    function f(a, b) {
        b = !!b;
        for (var c = a.length, d = new Uint8Array(b ? 4 * c : c), e = 0, f = 0; c > e; e++) {
            var g = a.charCodeAt(e);
            if (b && g >= 55296 && 56319 >= g) {
                if (++e >= c) throw new Error("Malformed string, low surrogate expected at position " + e);
                g = (55296 ^ g) << 10 | 65536 | 56320 ^ a.charCodeAt(e)
            } else if (!b && g >>> 8) throw new Error("Wide characters are not allowed.");
            !b || 127 >= g ? d[f++] = g : 2047 >= g ? (d[f++] = 192 | g >> 6, d[f++] = 128 | 63 & g) : 65535 >= g ? (d[f++] = 224 | g >> 12, d[f++] = 128 | g >> 6 & 63, d[f++] = 128 | 63 & g) : (d[f++] = 240 | g >> 18, d[f++] = 128 | g >> 12 & 63, d[f++] = 128 | g >> 6 & 63, d[f++] = 128 | 63 & g)
        }
        return d.subarray(0, f)
    }

    function g(a) {
        var b = a.length;
        1 & b && (a = "0" + a, b++);
        for (var c = new Uint8Array(b >> 1), d = 0; b > d; d += 2) c[d >> 1] = parseInt(a.substr(d, 2), 16);
        return c
    }

    function h(a) {
        return f(atob(a))
    }

    function i(a, b) {
        b = !!b;
        for (var c = a.length, d = new Array(c), e = 0, f = 0; c > e; e++) {
            var g = a[e];
            if (!b || 128 > g) d[f++] = g;
            else if (g >= 192 && 224 > g && c > e + 1) d[f++] = (31 & g) << 6 | 63 & a[++e];
            else if (g >= 224 && 240 > g && c > e + 2) d[f++] = (15 & g) << 12 | (63 & a[++e]) << 6 | 63 & a[++e];
            else {
                if (!(g >= 240 && 248 > g && c > e + 3)) throw new Error("Malformed UTF8 character at byte offset " + e);
                var h = (7 & g) << 18 | (63 & a[++e]) << 12 | (63 & a[++e]) << 6 | 63 & a[++e];
                65535 >= h ? d[f++] = h : (h ^= 65536, d[f++] = 55296 | h >> 10, d[f++] = 56320 | 1023 & h)
            }
        }
        for (var i = "", j = 16384, e = 0; f > e; e += j) i += String.fromCharCode.apply(String, d.slice(e, f >= e + j ? e + j : f));
        return i
    }

    function j(a) {
        for (var b = "", c = 0; c < a.length; c++) {
            var d = (255 & a[c]).toString(16);
            d.length < 2 && (b += "0"), b += d
        }
        return b
    }

    function k(a) {
        return btoa(i(a))
    }

    function l(a) {
        return a -= 1, a |= a >>> 1, a |= a >>> 2, a |= a >>> 4, a |= a >>> 8, a |= a >>> 16, a += 1
    }

    function m(a) {
        return "number" == typeof a
    }

    function n(a) {
        return "string" == typeof a
    }

    function o(a) {
        return a instanceof ArrayBuffer
    }

    function p(a) {
        return a instanceof Uint8Array
    }

    function q(a) {
        return a instanceof Int8Array || a instanceof Uint8Array || a instanceof Int16Array || a instanceof Uint16Array || a instanceof Int32Array || a instanceof Uint32Array || a instanceof Float32Array || a instanceof Float64Array
    }

    function r(a, b) {
        var c = b.heap,
            d = c ? c.byteLength : b.heapSize || 65536;
        if (4095 & d || 0 >= d) throw new Error("heap size must be a positive integer and a multiple of 4096");
        return c = c || new a(new ArrayBuffer(d))
    }

    function s(a, b, c, d, e) {
        var f = a.length - b,
            g = e > f ? f : e;
        return a.set(c.subarray(d, d + g), b), g
    }

    function t(a) {
        a = a || {}, this.heap = r(Uint8Array, a).subarray(vc.HEAP_DATA), this.asm = a.asm || vc(b, null, this.heap.buffer), this.mode = null, this.key = null, this.reset(a)
    }

    function u(a) {
        if (void 0 !== a) {
            if (o(a) || p(a)) a = new Uint8Array(a);
            else {
                if (!n(a)) throw new TypeError("unexpected key type");
                a = f(a)
            }
            var b = a.length;
            if (16 !== b && 24 !== b && 32 !== b) throw new d("illegal key size");
            var c = new DataView(a.buffer, a.byteOffset, a.byteLength);
            this.asm.set_key(b >> 2, c.getUint32(0), c.getUint32(4), c.getUint32(8), c.getUint32(12), b > 16 ? c.getUint32(16) : 0, b > 16 ? c.getUint32(20) : 0, b > 24 ? c.getUint32(24) : 0, b > 24 ? c.getUint32(28) : 0), this.key = a
        } else if (!this.key) throw new Error("key is required")
    }

    function v(a) {
        if (void 0 !== a) {
            if (o(a) || p(a)) a = new Uint8Array(a);
            else {
                if (!n(a)) throw new TypeError("unexpected iv type");
                a = f(a)
            } if (16 !== a.length) throw new d("illegal iv size");
            var b = new DataView(a.buffer, a.byteOffset, a.byteLength);
            this.iv = a, this.asm.set_iv(b.getUint32(0), b.getUint32(4), b.getUint32(8), b.getUint32(12))
        } else this.iv = null, this.asm.set_iv(0, 0, 0, 0)
    }

    function w(a) {
        void 0 !== a ? this.padding = !!a : this.padding = !0
    }

    function x(a) {
        return a = a || {}, this.result = null, this.pos = 0, this.len = 0, u.call(this, a.key), this.hasOwnProperty("iv") && v.call(this, a.iv), this.hasOwnProperty("padding") && w.call(this, a.padding), this
    }

    function y(a) {
        if (n(a) && (a = f(a)), o(a) && (a = new Uint8Array(a)), !p(a)) throw new TypeError("data isn't of expected type");
        for (var b = this.asm, c = this.heap, d = vc.ENC[this.mode], e = vc.HEAP_DATA, g = this.pos, h = this.len, i = 0, j = a.length || 0, k = 0, l = h + j & -16, m = 0, q = new Uint8Array(l); j > 0;) m = s(c, g + h, a, i, j), h += m, i += m, j -= m, m = b.cipher(d, e + g, h), m && q.set(c.subarray(g, g + m), k), k += m, h > m ? (g += m, h -= m) : (g = 0, h = 0);
        return this.result = q, this.pos = g, this.len = h, this
    }

    function z(a) {
        var b = null,
            c = 0;
        void 0 !== a && (b = y.call(this, a).result, c = b.length);
        var e = this.asm,
            f = this.heap,
            g = vc.ENC[this.mode],
            h = vc.HEAP_DATA,
            i = this.pos,
            j = this.len,
            k = 16 - j % 16,
            l = j;
        if (this.hasOwnProperty("padding")) {
            if (this.padding) {
                for (var m = 0; k > m; ++m) f[i + j + m] = k;
                j += k, l = j
            } else if (j % 16) throw new d("data length must be a multiple of the block size")
        } else j += k;
        var n = new Uint8Array(c + l);
        return c && n.set(b), j && e.cipher(g, h + i, j), l && n.set(f.subarray(i, i + l), c), this.result = n, this.pos = 0, this.len = 0, this
    }

    function A(a) {
        if (n(a) && (a = f(a)), o(a) && (a = new Uint8Array(a)), !p(a)) throw new TypeError("data isn't of expected type");
        var b = this.asm,
            c = this.heap,
            d = vc.DEC[this.mode],
            e = vc.HEAP_DATA,
            g = this.pos,
            h = this.len,
            i = 0,
            j = a.length || 0,
            k = 0,
            l = h + j & -16,
            m = 0,
            q = 0;
        this.hasOwnProperty("padding") && this.padding && (m = h + j - l || 16, l -= m);
        for (var r = new Uint8Array(l); j > 0;) q = s(c, g + h, a, i, j), h += q, i += q, j -= q, q = b.cipher(d, e + g, h - (j ? 0 : m)), q && r.set(c.subarray(g, g + q), k), k += q, h > q ? (g += q, h -= q) : (g = 0, h = 0);
        return this.result = r, this.pos = g, this.len = h, this
    }

    function B(a) {
        var b = null,
            c = 0;
        void 0 !== a && (b = A.call(this, a).result, c = b.length);
        var f = this.asm,
            g = this.heap,
            h = vc.DEC[this.mode],
            i = vc.HEAP_DATA,
            j = this.pos,
            k = this.len,
            l = k;
        if (k > 0) {
            if (k % 16) {
                if (this.hasOwnProperty("padding")) throw new d("data length must be a multiple of the block size");
                k += 16 - k % 16
            }
            if (f.cipher(h, i + j, k), this.hasOwnProperty("padding") && this.padding) {
                var m = g[j + l - 1];
                if (1 > m || m > 16 || m > l) throw new e("bad padding");
                for (var n = 0, o = m; o > 1; o--) n |= m ^ g[j + l - o];
                if (n) throw new e("bad padding");
                l -= m
            }
        }
        var p = new Uint8Array(c + l);
        return c > 0 && p.set(b), l > 0 && p.set(g.subarray(j, j + l), c), this.result = p, this.pos = 0, this.len = 0, this
    }

    function C(a) {
        this.padding = !0, t.call(this, a), this.mode = "ECB"
    }

    function D(a) {
        C.call(this, a)
    }

    function E(a) {
        C.call(this, a)
    }

    function F(a) {
        this.padding = !0, this.iv = null, t.call(this, a), this.mode = "CBC"
    }

    function G(a) {
        F.call(this, a)
    }

    function H(a) {
        F.call(this, a)
    }

    function I(a) {
        this.nonce = null, this.counter = 0, this.counterSize = 0, t.call(this, a), this.mode = "CTR"
    }

    function J(a) {
        I.call(this, a)
    }

    function K(a, b, c) {
        if (void 0 !== c) {
            if (8 > c || c > 48) throw new d("illegal counter size");
            this.counterSize = c;
            var e = Math.pow(2, c) - 1;
            this.asm.set_mask(0, 0, e / 4294967296 | 0, 0 | e)
        } else this.counterSize = c = 48, this.asm.set_mask(0, 0, 65535, 4294967295); if (void 0 === a) throw new Error("nonce is required");
        if (o(a) || p(a)) a = new Uint8Array(a);
        else {
            if (!n(a)) throw new TypeError("unexpected nonce type");
            a = f(a)
        }
        var g = a.length;
        if (!g || g > 16) throw new d("illegal nonce size");
        this.nonce = a;
        var h = new DataView(new ArrayBuffer(16));
        if (new Uint8Array(h.buffer).set(a), this.asm.set_nonce(h.getUint32(0), h.getUint32(4), h.getUint32(8), h.getUint32(12)), void 0 !== b) {
            if (!m(b)) throw new TypeError("unexpected counter type");
            if (0 > b || b >= Math.pow(2, c)) throw new d("illegal counter value");
            this.counter = b, this.asm.set_counter(0, 0, b / 4294967296 | 0, 0 | b)
        } else this.counter = b = 0
    }

    function L(a) {
        return a = a || {}, x.call(this, a), K.call(this, a.nonce, a.counter, a.counterSize), this
    }

    function M(a) {
        for (var b = this.heap, c = this.asm, d = 0, e = a.length || 0, f = 0; e > 0;) {
            for (f = s(b, 0, a, d, e), d += f, e -= f; 15 & f;) b[f++] = 0;
            c.mac(vc.MAC.GCM, vc.HEAP_DATA, f)
        }
    }

    function N(a) {
        this.nonce = null, this.adata = null, this.iv = null, this.counter = 1, this.tagSize = 16, t.call(this, a), this.mode = "GCM"
    }

    function O(a) {
        N.call(this, a)
    }

    function P(a) {
        N.call(this, a)
    }

    function Q(a) {
        a = a || {}, x.call(this, a);
        var b = this.asm,
            c = this.heap;
        b.gcm_init();
        var e = a.tagSize;
        if (void 0 !== e) {
            if (!m(e)) throw new TypeError("tagSize must be a number");
            if (4 > e || e > 16) throw new d("illegal tagSize value");
            this.tagSize = e
        } else this.tagSize = 16;
        var g = a.nonce;
        if (void 0 === g) throw new Error("nonce is required");
        if (p(g) || o(g)) g = new Uint8Array(g);
        else {
            if (!n(g)) throw new TypeError("unexpected nonce type");
            g = f(g)
        }
        this.nonce = g;
        var h = g.length || 0,
            i = new Uint8Array(16);
        12 !== h ? (M.call(this, g), c[0] = c[1] = c[2] = c[3] = c[4] = c[5] = c[6] = c[7] = c[8] = c[9] = c[10] = 0, c[11] = h >>> 29, c[12] = h >>> 21 & 255, c[13] = h >>> 13 & 255, c[14] = h >>> 5 & 255, c[15] = h << 3 & 255, b.mac(vc.MAC.GCM, vc.HEAP_DATA, 16), b.get_iv(vc.HEAP_DATA), b.set_iv(), i.set(c.subarray(0, 16))) : (i.set(g), i[15] = 1);
        var j = new DataView(i.buffer);
        this.gamma0 = j.getUint32(12), b.set_nonce(j.getUint32(0), j.getUint32(4), j.getUint32(8), 0), b.set_mask(0, 0, 0, 4294967295);
        var k = a.adata;
        if (void 0 !== k && null !== k) {
            if (p(k) || o(k)) k = new Uint8Array(k);
            else {
                if (!n(k)) throw new TypeError("unexpected adata type");
                k = f(k)
            } if (k.length > Ec) throw new d("illegal adata length");
            k.length ? (this.adata = k, M.call(this, k)) : this.adata = null
        } else this.adata = null;
        var l = a.counter;
        if (void 0 !== l) {
            if (!m(l)) throw new TypeError("counter must be a number");
            if (1 > l || l > 4294967295) throw new RangeError("counter must be a positive 32-bit integer");
            this.counter = l, b.set_counter(0, 0, 0, this.gamma0 + l | 0)
        } else this.counter = 1, b.set_counter(0, 0, 0, this.gamma0 + 1 | 0);
        var q = a.iv;
        if (void 0 !== q) {
            if (!m(l)) throw new TypeError("counter must be a number");
            this.iv = q, v.call(this, q)
        }
        return this
    }

    function R(a) {
        if (n(a) && (a = f(a)), o(a) && (a = new Uint8Array(a)), !p(a)) throw new TypeError("data isn't of expected type");
        var b = 0,
            c = a.length || 0,
            d = this.asm,
            e = this.heap,
            g = this.counter,
            h = this.pos,
            i = this.len,
            j = 0,
            k = i + c & -16,
            l = 0;
        if ((g - 1 << 4) + i + c > Ec) throw new RangeError("counter overflow");
        for (var m = new Uint8Array(k); c > 0;) l = s(e, h + i, a, b, c), i += l, b += l, c -= l, l = d.cipher(vc.ENC.CTR, vc.HEAP_DATA + h, i), l = d.mac(vc.MAC.GCM, vc.HEAP_DATA + h, l), l && m.set(e.subarray(h, h + l), j), g += l >>> 4, j += l, i > l ? (h += l, i -= l) : (h = 0, i = 0);
        return this.result = m, this.counter = g, this.pos = h, this.len = i, this
    }

    function S() {
        var a = this.asm,
            b = this.heap,
            c = this.counter,
            d = this.tagSize,
            e = this.adata,
            f = this.pos,
            g = this.len,
            h = new Uint8Array(g + d);
        a.cipher(vc.ENC.CTR, vc.HEAP_DATA + f, g + 15 & -16), g && h.set(b.subarray(f, f + g));
        for (var i = g; 15 & i; i++) b[f + i] = 0;
        a.mac(vc.MAC.GCM, vc.HEAP_DATA + f, i);
        var j = null !== e ? e.length : 0,
            k = (c - 1 << 4) + g;
        return b[0] = b[1] = b[2] = 0, b[3] = j >>> 29, b[4] = j >>> 21, b[5] = j >>> 13 & 255, b[6] = j >>> 5 & 255, b[7] = j << 3 & 255, b[8] = b[9] = b[10] = 0, b[11] = k >>> 29, b[12] = k >>> 21 & 255, b[13] = k >>> 13 & 255, b[14] = k >>> 5 & 255, b[15] = k << 3 & 255, a.mac(vc.MAC.GCM, vc.HEAP_DATA, 16), a.get_iv(vc.HEAP_DATA), a.set_counter(0, 0, 0, this.gamma0), a.cipher(vc.ENC.CTR, vc.HEAP_DATA, 16), h.set(b.subarray(0, d), g), this.result = h, this.counter = 1, this.pos = 0, this.len = 0, this
    }

    function T(a) {
        var b = R.call(this, a).result,
            c = S.call(this).result,
            d = new Uint8Array(b.length + c.length);
        return b.length && d.set(b), c.length && d.set(c, b.length), this.result = d, this
    }

    function U(a) {
        if (n(a) && (a = f(a)), o(a) && (a = new Uint8Array(a)), !p(a)) throw new TypeError("data isn't of expected type");
        var b = 0,
            c = a.length || 0,
            d = this.asm,
            e = this.heap,
            g = this.counter,
            h = this.tagSize,
            i = this.pos,
            j = this.len,
            k = 0,
            l = j + c > h ? j + c - h & -16 : 0,
            m = j + c - l,
            q = 0;
        if ((g - 1 << 4) + j + c > Ec) throw new RangeError("counter overflow");
        for (var r = new Uint8Array(l); c > m;) q = s(e, i + j, a, b, c - m), j += q, b += q, c -= q, q = d.mac(vc.MAC.GCM, vc.HEAP_DATA + i, q), q = d.cipher(vc.DEC.CTR, vc.HEAP_DATA + i, q), q && r.set(e.subarray(i, i + q), k), g += q >>> 4, k += q, i = 0, j = 0;
        return c > 0 && (j += s(e, 0, a, b, c)), this.result = r, this.counter = g, this.pos = i, this.len = j, this
    }

    function V() {
        var a = this.asm,
            b = this.heap,
            d = this.tagSize,
            f = this.adata,
            g = this.counter,
            h = this.pos,
            i = this.len,
            j = i - d,
            k = 0;
        if (d > i) throw new c("authentication tag not found");
        for (var l = new Uint8Array(j), m = new Uint8Array(b.subarray(h + j, h + i)), n = j; 15 & n; n++) b[h + n] = 0;
        k = a.mac(vc.MAC.GCM, vc.HEAP_DATA + h, n), k = a.cipher(vc.DEC.CTR, vc.HEAP_DATA + h, n), j && l.set(b.subarray(h, h + j));
        var o = null !== f ? f.length : 0,
            p = (g - 1 << 4) + i - d;
        b[0] = b[1] = b[2] = 0, b[3] = o >>> 29, b[4] = o >>> 21, b[5] = o >>> 13 & 255, b[6] = o >>> 5 & 255, b[7] = o << 3 & 255, b[8] = b[9] = b[10] = 0, b[11] = p >>> 29, b[12] = p >>> 21 & 255, b[13] = p >>> 13 & 255, b[14] = p >>> 5 & 255, b[15] = p << 3 & 255, a.mac(vc.MAC.GCM, vc.HEAP_DATA, 16), a.get_iv(vc.HEAP_DATA), a.set_counter(0, 0, 0, this.gamma0), a.cipher(vc.ENC.CTR, vc.HEAP_DATA, 16);
        for (var q = 0, n = 0; d > n; ++n) q |= m[n] ^ b[n];
        if (q) throw new e("data integrity check failed");
        return this.result = l, this.counter = 1, this.pos = 0, this.len = 0, this
    }

    function W(a) {
        var b = U.call(this, a).result,
            c = V.call(this).result,
            d = new Uint8Array(b.length + c.length);
        return b.length && d.set(b), c.length && d.set(c, b.length), this.result = d, this
    }

    function X(a, b, c) {
        if (void 0 === a) throw new SyntaxError("data required");
        if (void 0 === b) throw new SyntaxError("key required");
        return new C({
            heap: Ic,
            asm: Jc,
            key: b,
            padding: c
        }).encrypt(a).result
    }

    function Y(a, b, c) {
        if (void 0 === a) throw new SyntaxError("data required");
        if (void 0 === b) throw new SyntaxError("key required");
        return new C({
            heap: Ic,
            asm: Jc,
            key: b,
            padding: c
        }).decrypt(a).result
    }

    function Z(a, b, c, d) {
        if (void 0 === a) throw new SyntaxError("data required");
        if (void 0 === b) throw new SyntaxError("key required");
        return new F({
            heap: Ic,
            asm: Jc,
            key: b,
            padding: c,
            iv: d
        }).encrypt(a).result
    }

    function $(a, b, c, d) {
        if (void 0 === a) throw new SyntaxError("data required");
        if (void 0 === b) throw new SyntaxError("key required");
        return new F({
            heap: Ic,
            asm: Jc,
            key: b,
            padding: c,
            iv: d
        }).decrypt(a).result
    }

    function _(a, b, c, d, e) {
        if (void 0 === a) throw new SyntaxError("data required");
        if (void 0 === b) throw new SyntaxError("key required");
        if (void 0 === c) throw new SyntaxError("nonce required");
        return new N({
            heap: Ic,
            asm: Jc,
            key: b,
            nonce: c,
            adata: d,
            tagSize: e
        }).encrypt(a).result
    }

    function aa(a, b, c, d, e) {
        if (void 0 === a) throw new SyntaxError("data required");
        if (void 0 === b) throw new SyntaxError("key required");
        if (void 0 === c) throw new SyntaxError("nonce required");
        return new N({
            heap: Ic,
            asm: Jc,
            key: b,
            nonce: c,
            adata: d,
            tagSize: e
        }).decrypt(a).result
    }

    function ba() {
        return this.result = null, this.pos = 0, this.len = 0, this.asm.reset(), this
    }

    function ca(a) {
        if (null !== this.result) throw new c("state must be reset before processing new data");
        if (n(a) && (a = f(a)), o(a) && (a = new Uint8Array(a)), !p(a)) throw new TypeError("data isn't of expected type");
        for (var b = this.asm, d = this.heap, e = this.pos, g = this.len, h = 0, i = a.length, j = 0; i > 0;) j = s(d, e + g, a, h, i), g += j, h += j, i -= j, j = b.process(e, g), e += j, g -= j, g || (e = 0);
        return this.pos = e, this.len = g, this
    }

    function da() {
        if (null !== this.result) throw new c("state must be reset before processing new data");
        return this.asm.finish(this.pos, this.len, 0), this.result = new Uint8Array(this.HASH_SIZE), this.result.set(this.heap.subarray(0, this.HASH_SIZE)), this.pos = 0, this.len = 0, this
    }

    function ea(a, b, c) {
        "use asm";
        var d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0;
        var k = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0,
            q = 0,
            r = 0,
            s = 0,
            t = 0;
        var u = new a.Uint8Array(c);

        function v(H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W) {
            H = H | 0;
            I = I | 0;
            J = J | 0;
            K = K | 0;
            L = L | 0;
            M = M | 0;
            N = N | 0;
            O = O | 0;
            P = P | 0;
            Q = Q | 0;
            R = R | 0;
            S = S | 0;
            T = T | 0;
            U = U | 0;
            V = V | 0;
            W = W | 0;
            var X = 0,
                Y = 0,
                Z = 0,
                $ = 0,
                _ = 0,
                aa = 0,
                ba = 0,
                ca = 0,
                da = 0,
                ea = 0,
                fa = 0,
                ga = 0,
                ha = 0,
                ia = 0,
                ja = 0,
                ka = 0,
                la = 0,
                ma = 0,
                na = 0,
                oa = 0,
                pa = 0,
                qa = 0,
                ra = 0,
                sa = 0,
                ta = 0,
                ua = 0,
                va = 0,
                wa = 0,
                xa = 0,
                ya = 0,
                za = 0,
                Aa = 0,
                Ba = 0,
                Ca = 0,
                Da = 0,
                Ea = 0,
                Fa = 0,
                Ga = 0,
                Ha = 0,
                Ia = 0,
                Ja = 0,
                Ka = 0,
                La = 0,
                Ma = 0,
                Na = 0,
                Oa = 0,
                Pa = 0,
                Qa = 0,
                Ra = 0,
                Sa = 0,
                Ta = 0,
                Ua = 0,
                Va = 0,
                Wa = 0,
                Xa = 0,
                Ya = 0,
                Za = 0,
                $a = 0,
                _a = 0,
                ab = 0,
                bb = 0,
                cb = 0,
                db = 0,
                eb = 0,
                fb = 0,
                gb = 0,
                hb = 0,
                ib = 0,
                jb = 0,
                kb = 0,
                lb = 0;
            X = d;
            Y = e;
            Z = f;
            $ = g;
            _ = h;
            ba = H + (X << 5 | X >>> 27) + _ + (Y & Z | ~Y & $) + 1518500249 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            ba = I + (X << 5 | X >>> 27) + _ + (Y & Z | ~Y & $) + 1518500249 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            ba = J + (X << 5 | X >>> 27) + _ + (Y & Z | ~Y & $) + 1518500249 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            ba = K + (X << 5 | X >>> 27) + _ + (Y & Z | ~Y & $) + 1518500249 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            ba = L + (X << 5 | X >>> 27) + _ + (Y & Z | ~Y & $) + 1518500249 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            ba = M + (X << 5 | X >>> 27) + _ + (Y & Z | ~Y & $) + 1518500249 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            ba = N + (X << 5 | X >>> 27) + _ + (Y & Z | ~Y & $) + 1518500249 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            ba = O + (X << 5 | X >>> 27) + _ + (Y & Z | ~Y & $) + 1518500249 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            ba = P + (X << 5 | X >>> 27) + _ + (Y & Z | ~Y & $) + 1518500249 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            ba = Q + (X << 5 | X >>> 27) + _ + (Y & Z | ~Y & $) + 1518500249 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            ba = R + (X << 5 | X >>> 27) + _ + (Y & Z | ~Y & $) + 1518500249 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            ba = S + (X << 5 | X >>> 27) + _ + (Y & Z | ~Y & $) + 1518500249 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            ba = T + (X << 5 | X >>> 27) + _ + (Y & Z | ~Y & $) + 1518500249 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            ba = U + (X << 5 | X >>> 27) + _ + (Y & Z | ~Y & $) + 1518500249 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            ba = V + (X << 5 | X >>> 27) + _ + (Y & Z | ~Y & $) + 1518500249 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            ba = W + (X << 5 | X >>> 27) + _ + (Y & Z | ~Y & $) + 1518500249 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            aa = U ^ P ^ J ^ H;
            ca = aa << 1 | aa >>> 31;
            ba = ca + (X << 5 | X >>> 27) + _ + (Y & Z | ~Y & $) + 1518500249 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            aa = V ^ Q ^ K ^ I;
            da = aa << 1 | aa >>> 31;
            ba = da + (X << 5 | X >>> 27) + _ + (Y & Z | ~Y & $) + 1518500249 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            aa = W ^ R ^ L ^ J;
            ea = aa << 1 | aa >>> 31;
            ba = ea + (X << 5 | X >>> 27) + _ + (Y & Z | ~Y & $) + 1518500249 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            aa = ca ^ S ^ M ^ K;
            fa = aa << 1 | aa >>> 31;
            ba = fa + (X << 5 | X >>> 27) + _ + (Y & Z | ~Y & $) + 1518500249 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            aa = da ^ T ^ N ^ L;
            ga = aa << 1 | aa >>> 31;
            ba = ga + (X << 5 | X >>> 27) + _ + (Y ^ Z ^ $) + 1859775393 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            aa = ea ^ U ^ O ^ M;
            ha = aa << 1 | aa >>> 31;
            ba = ha + (X << 5 | X >>> 27) + _ + (Y ^ Z ^ $) + 1859775393 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            aa = fa ^ V ^ P ^ N;
            ia = aa << 1 | aa >>> 31;
            ba = ia + (X << 5 | X >>> 27) + _ + (Y ^ Z ^ $) + 1859775393 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            aa = ga ^ W ^ Q ^ O;
            ja = aa << 1 | aa >>> 31;
            ba = ja + (X << 5 | X >>> 27) + _ + (Y ^ Z ^ $) + 1859775393 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            aa = ha ^ ca ^ R ^ P;
            ka = aa << 1 | aa >>> 31;
            ba = ka + (X << 5 | X >>> 27) + _ + (Y ^ Z ^ $) + 1859775393 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            aa = ia ^ da ^ S ^ Q;
            la = aa << 1 | aa >>> 31;
            ba = la + (X << 5 | X >>> 27) + _ + (Y ^ Z ^ $) + 1859775393 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            aa = ja ^ ea ^ T ^ R;
            ma = aa << 1 | aa >>> 31;
            ba = ma + (X << 5 | X >>> 27) + _ + (Y ^ Z ^ $) + 1859775393 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            aa = ka ^ fa ^ U ^ S;
            na = aa << 1 | aa >>> 31;
            ba = na + (X << 5 | X >>> 27) + _ + (Y ^ Z ^ $) + 1859775393 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            aa = la ^ ga ^ V ^ T;
            oa = aa << 1 | aa >>> 31;
            ba = oa + (X << 5 | X >>> 27) + _ + (Y ^ Z ^ $) + 1859775393 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            aa = ma ^ ha ^ W ^ U;
            pa = aa << 1 | aa >>> 31;
            ba = pa + (X << 5 | X >>> 27) + _ + (Y ^ Z ^ $) + 1859775393 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            aa = na ^ ia ^ ca ^ V;
            qa = aa << 1 | aa >>> 31;
            ba = qa + (X << 5 | X >>> 27) + _ + (Y ^ Z ^ $) + 1859775393 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            aa = oa ^ ja ^ da ^ W;
            ra = aa << 1 | aa >>> 31;
            ba = ra + (X << 5 | X >>> 27) + _ + (Y ^ Z ^ $) + 1859775393 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            aa = pa ^ ka ^ ea ^ ca;
            sa = aa << 1 | aa >>> 31;
            ba = sa + (X << 5 | X >>> 27) + _ + (Y ^ Z ^ $) + 1859775393 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            aa = qa ^ la ^ fa ^ da;
            ta = aa << 1 | aa >>> 31;
            ba = ta + (X << 5 | X >>> 27) + _ + (Y ^ Z ^ $) + 1859775393 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            aa = ra ^ ma ^ ga ^ ea;
            ua = aa << 1 | aa >>> 31;
            ba = ua + (X << 5 | X >>> 27) + _ + (Y ^ Z ^ $) + 1859775393 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            aa = sa ^ na ^ ha ^ fa;
            va = aa << 1 | aa >>> 31;
            ba = va + (X << 5 | X >>> 27) + _ + (Y ^ Z ^ $) + 1859775393 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            aa = ta ^ oa ^ ia ^ ga;
            wa = aa << 1 | aa >>> 31;
            ba = wa + (X << 5 | X >>> 27) + _ + (Y ^ Z ^ $) + 1859775393 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            aa = ua ^ pa ^ ja ^ ha;
            xa = aa << 1 | aa >>> 31;
            ba = xa + (X << 5 | X >>> 27) + _ + (Y ^ Z ^ $) + 1859775393 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            aa = va ^ qa ^ ka ^ ia;
            ya = aa << 1 | aa >>> 31;
            ba = ya + (X << 5 | X >>> 27) + _ + (Y ^ Z ^ $) + 1859775393 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            aa = wa ^ ra ^ la ^ ja;
            za = aa << 1 | aa >>> 31;
            ba = za + (X << 5 | X >>> 27) + _ + (Y ^ Z ^ $) + 1859775393 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            aa = xa ^ sa ^ ma ^ ka;
            Aa = aa << 1 | aa >>> 31;
            ba = Aa + (X << 5 | X >>> 27) + _ + (Y & Z | Y & $ | Z & $) - 1894007588 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            aa = ya ^ ta ^ na ^ la;
            Ba = aa << 1 | aa >>> 31;
            ba = Ba + (X << 5 | X >>> 27) + _ + (Y & Z | Y & $ | Z & $) - 1894007588 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            aa = za ^ ua ^ oa ^ ma;
            Ca = aa << 1 | aa >>> 31;
            ba = Ca + (X << 5 | X >>> 27) + _ + (Y & Z | Y & $ | Z & $) - 1894007588 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            aa = Aa ^ va ^ pa ^ na;
            Da = aa << 1 | aa >>> 31;
            ba = Da + (X << 5 | X >>> 27) + _ + (Y & Z | Y & $ | Z & $) - 1894007588 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            aa = Ba ^ wa ^ qa ^ oa;
            Ea = aa << 1 | aa >>> 31;
            ba = Ea + (X << 5 | X >>> 27) + _ + (Y & Z | Y & $ | Z & $) - 1894007588 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            aa = Ca ^ xa ^ ra ^ pa;
            Fa = aa << 1 | aa >>> 31;
            ba = Fa + (X << 5 | X >>> 27) + _ + (Y & Z | Y & $ | Z & $) - 1894007588 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            aa = Da ^ ya ^ sa ^ qa;
            Ga = aa << 1 | aa >>> 31;
            ba = Ga + (X << 5 | X >>> 27) + _ + (Y & Z | Y & $ | Z & $) - 1894007588 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            aa = Ea ^ za ^ ta ^ ra;
            Ha = aa << 1 | aa >>> 31;
            ba = Ha + (X << 5 | X >>> 27) + _ + (Y & Z | Y & $ | Z & $) - 1894007588 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            aa = Fa ^ Aa ^ ua ^ sa;
            Ia = aa << 1 | aa >>> 31;
            ba = Ia + (X << 5 | X >>> 27) + _ + (Y & Z | Y & $ | Z & $) - 1894007588 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            aa = Ga ^ Ba ^ va ^ ta;
            Ja = aa << 1 | aa >>> 31;
            ba = Ja + (X << 5 | X >>> 27) + _ + (Y & Z | Y & $ | Z & $) - 1894007588 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            aa = Ha ^ Ca ^ wa ^ ua;
            Ka = aa << 1 | aa >>> 31;
            ba = Ka + (X << 5 | X >>> 27) + _ + (Y & Z | Y & $ | Z & $) - 1894007588 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            aa = Ia ^ Da ^ xa ^ va;
            La = aa << 1 | aa >>> 31;
            ba = La + (X << 5 | X >>> 27) + _ + (Y & Z | Y & $ | Z & $) - 1894007588 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            aa = Ja ^ Ea ^ ya ^ wa;
            Ma = aa << 1 | aa >>> 31;
            ba = Ma + (X << 5 | X >>> 27) + _ + (Y & Z | Y & $ | Z & $) - 1894007588 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            aa = Ka ^ Fa ^ za ^ xa;
            Na = aa << 1 | aa >>> 31;
            ba = Na + (X << 5 | X >>> 27) + _ + (Y & Z | Y & $ | Z & $) - 1894007588 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            aa = La ^ Ga ^ Aa ^ ya;
            Oa = aa << 1 | aa >>> 31;
            ba = Oa + (X << 5 | X >>> 27) + _ + (Y & Z | Y & $ | Z & $) - 1894007588 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            aa = Ma ^ Ha ^ Ba ^ za;
            Pa = aa << 1 | aa >>> 31;
            ba = Pa + (X << 5 | X >>> 27) + _ + (Y & Z | Y & $ | Z & $) - 1894007588 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            aa = Na ^ Ia ^ Ca ^ Aa;
            Qa = aa << 1 | aa >>> 31;
            ba = Qa + (X << 5 | X >>> 27) + _ + (Y & Z | Y & $ | Z & $) - 1894007588 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            aa = Oa ^ Ja ^ Da ^ Ba;
            Ra = aa << 1 | aa >>> 31;
            ba = Ra + (X << 5 | X >>> 27) + _ + (Y & Z | Y & $ | Z & $) - 1894007588 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            aa = Pa ^ Ka ^ Ea ^ Ca;
            Sa = aa << 1 | aa >>> 31;
            ba = Sa + (X << 5 | X >>> 27) + _ + (Y & Z | Y & $ | Z & $) - 1894007588 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            aa = Qa ^ La ^ Fa ^ Da;
            Ta = aa << 1 | aa >>> 31;
            ba = Ta + (X << 5 | X >>> 27) + _ + (Y & Z | Y & $ | Z & $) - 1894007588 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            aa = Ra ^ Ma ^ Ga ^ Ea;
            Ua = aa << 1 | aa >>> 31;
            ba = Ua + (X << 5 | X >>> 27) + _ + (Y ^ Z ^ $) - 899497514 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            aa = Sa ^ Na ^ Ha ^ Fa;
            Va = aa << 1 | aa >>> 31;
            ba = Va + (X << 5 | X >>> 27) + _ + (Y ^ Z ^ $) - 899497514 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            aa = Ta ^ Oa ^ Ia ^ Ga;
            Wa = aa << 1 | aa >>> 31;
            ba = Wa + (X << 5 | X >>> 27) + _ + (Y ^ Z ^ $) - 899497514 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            aa = Ua ^ Pa ^ Ja ^ Ha;
            Xa = aa << 1 | aa >>> 31;
            ba = Xa + (X << 5 | X >>> 27) + _ + (Y ^ Z ^ $) - 899497514 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            aa = Va ^ Qa ^ Ka ^ Ia;
            Ya = aa << 1 | aa >>> 31;
            ba = Ya + (X << 5 | X >>> 27) + _ + (Y ^ Z ^ $) - 899497514 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            aa = Wa ^ Ra ^ La ^ Ja;
            Za = aa << 1 | aa >>> 31;
            ba = Za + (X << 5 | X >>> 27) + _ + (Y ^ Z ^ $) - 899497514 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            aa = Xa ^ Sa ^ Ma ^ Ka;
            $a = aa << 1 | aa >>> 31;
            ba = $a + (X << 5 | X >>> 27) + _ + (Y ^ Z ^ $) - 899497514 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            aa = Ya ^ Ta ^ Na ^ La;
            _a = aa << 1 | aa >>> 31;
            ba = _a + (X << 5 | X >>> 27) + _ + (Y ^ Z ^ $) - 899497514 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            aa = Za ^ Ua ^ Oa ^ Ma;
            ab = aa << 1 | aa >>> 31;
            ba = ab + (X << 5 | X >>> 27) + _ + (Y ^ Z ^ $) - 899497514 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            aa = $a ^ Va ^ Pa ^ Na;
            bb = aa << 1 | aa >>> 31;
            ba = bb + (X << 5 | X >>> 27) + _ + (Y ^ Z ^ $) - 899497514 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            aa = _a ^ Wa ^ Qa ^ Oa;
            cb = aa << 1 | aa >>> 31;
            ba = cb + (X << 5 | X >>> 27) + _ + (Y ^ Z ^ $) - 899497514 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            aa = ab ^ Xa ^ Ra ^ Pa;
            db = aa << 1 | aa >>> 31;
            ba = db + (X << 5 | X >>> 27) + _ + (Y ^ Z ^ $) - 899497514 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            aa = bb ^ Ya ^ Sa ^ Qa;
            eb = aa << 1 | aa >>> 31;
            ba = eb + (X << 5 | X >>> 27) + _ + (Y ^ Z ^ $) - 899497514 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            aa = cb ^ Za ^ Ta ^ Ra;
            fb = aa << 1 | aa >>> 31;
            ba = fb + (X << 5 | X >>> 27) + _ + (Y ^ Z ^ $) - 899497514 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            aa = db ^ $a ^ Ua ^ Sa;
            gb = aa << 1 | aa >>> 31;
            ba = gb + (X << 5 | X >>> 27) + _ + (Y ^ Z ^ $) - 899497514 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            aa = eb ^ _a ^ Va ^ Ta;
            hb = aa << 1 | aa >>> 31;
            ba = hb + (X << 5 | X >>> 27) + _ + (Y ^ Z ^ $) - 899497514 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            aa = fb ^ ab ^ Wa ^ Ua;
            ib = aa << 1 | aa >>> 31;
            ba = ib + (X << 5 | X >>> 27) + _ + (Y ^ Z ^ $) - 899497514 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            aa = gb ^ bb ^ Xa ^ Va;
            jb = aa << 1 | aa >>> 31;
            ba = jb + (X << 5 | X >>> 27) + _ + (Y ^ Z ^ $) - 899497514 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            aa = hb ^ cb ^ Ya ^ Wa;
            kb = aa << 1 | aa >>> 31;
            ba = kb + (X << 5 | X >>> 27) + _ + (Y ^ Z ^ $) - 899497514 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            aa = ib ^ db ^ Za ^ Xa;
            lb = aa << 1 | aa >>> 31;
            ba = lb + (X << 5 | X >>> 27) + _ + (Y ^ Z ^ $) - 899497514 | 0;
            _ = $;
            $ = Z;
            Z = Y << 30 | Y >>> 2;
            Y = X;
            X = ba;
            d = d + X | 0;
            e = e + Y | 0;
            f = f + Z | 0;
            g = g + $ | 0;
            h = h + _ | 0
        }

        function w(H) {
            H = H | 0;
            v(u[H | 0] << 24 | u[H | 1] << 16 | u[H | 2] << 8 | u[H | 3], u[H | 4] << 24 | u[H | 5] << 16 | u[H | 6] << 8 | u[H | 7], u[H | 8] << 24 | u[H | 9] << 16 | u[H | 10] << 8 | u[H | 11], u[H | 12] << 24 | u[H | 13] << 16 | u[H | 14] << 8 | u[H | 15], u[H | 16] << 24 | u[H | 17] << 16 | u[H | 18] << 8 | u[H | 19], u[H | 20] << 24 | u[H | 21] << 16 | u[H | 22] << 8 | u[H | 23], u[H | 24] << 24 | u[H | 25] << 16 | u[H | 26] << 8 | u[H | 27], u[H | 28] << 24 | u[H | 29] << 16 | u[H | 30] << 8 | u[H | 31], u[H | 32] << 24 | u[H | 33] << 16 | u[H | 34] << 8 | u[H | 35], u[H | 36] << 24 | u[H | 37] << 16 | u[H | 38] << 8 | u[H | 39], u[H | 40] << 24 | u[H | 41] << 16 | u[H | 42] << 8 | u[H | 43], u[H | 44] << 24 | u[H | 45] << 16 | u[H | 46] << 8 | u[H | 47], u[H | 48] << 24 | u[H | 49] << 16 | u[H | 50] << 8 | u[H | 51], u[H | 52] << 24 | u[H | 53] << 16 | u[H | 54] << 8 | u[H | 55], u[H | 56] << 24 | u[H | 57] << 16 | u[H | 58] << 8 | u[H | 59], u[H | 60] << 24 | u[H | 61] << 16 | u[H | 62] << 8 | u[H | 63])
        }

        function x(H) {
            H = H | 0;
            u[H | 0] = d >>> 24;
            u[H | 1] = d >>> 16 & 255;
            u[H | 2] = d >>> 8 & 255;
            u[H | 3] = d & 255;
            u[H | 4] = e >>> 24;
            u[H | 5] = e >>> 16 & 255;
            u[H | 6] = e >>> 8 & 255;
            u[H | 7] = e & 255;
            u[H | 8] = f >>> 24;
            u[H | 9] = f >>> 16 & 255;
            u[H | 10] = f >>> 8 & 255;
            u[H | 11] = f & 255;
            u[H | 12] = g >>> 24;
            u[H | 13] = g >>> 16 & 255;
            u[H | 14] = g >>> 8 & 255;
            u[H | 15] = g & 255;
            u[H | 16] = h >>> 24;
            u[H | 17] = h >>> 16 & 255;
            u[H | 18] = h >>> 8 & 255;
            u[H | 19] = h & 255
        }

        function y() {
            d = 1732584193;
            e = 4023233417;
            f = 2562383102;
            g = 271733878;
            h = 3285377520;
            i = j = 0
        }

        function z(H, I, J, K, L, M, N) {
            H = H | 0;
            I = I | 0;
            J = J | 0;
            K = K | 0;
            L = L | 0;
            M = M | 0;
            N = N | 0;
            d = H;
            e = I;
            f = J;
            g = K;
            h = L;
            i = M;
            j = N
        }

        function A(H, I) {
            H = H | 0;
            I = I | 0;
            var J = 0;
            if (H & 63) return -1;
            while ((I | 0) >= 64) {
                w(H);
                H = H + 64 | 0;
                I = I - 64 | 0;
                J = J + 64 | 0
            }
            i = i + J | 0;
            if (i >>> 0 < J >>> 0) j = j + 1 | 0;
            return J | 0
        }

        function B(H, I, J) {
            H = H | 0;
            I = I | 0;
            J = J | 0;
            var K = 0,
                L = 0;
            if (H & 63) return -1;
            if (~J)
                if (J & 31) return -1;
            if ((I | 0) >= 64) {
                K = A(H, I) | 0;
                if ((K | 0) == -1) return -1;
                H = H + K | 0;
                I = I - K | 0
            }
            K = K + I | 0;
            i = i + I | 0;
            if (i >>> 0 < I >>> 0) j = j + 1 | 0;
            u[H | I] = 128;
            if ((I | 0) >= 56) {
                for (L = I + 1 | 0;
                    (L | 0) < 64; L = L + 1 | 0) u[H | L] = 0;
                w(H);
                I = 0;
                u[H | 0] = 0
            }
            for (L = I + 1 | 0;
                (L | 0) < 59; L = L + 1 | 0) u[H | L] = 0;
            u[H | 56] = j >>> 21 & 255;
            u[H | 57] = j >>> 13 & 255;
            u[H | 58] = j >>> 5 & 255;
            u[H | 59] = j << 3 & 255 | i >>> 29;
            u[H | 60] = i >>> 21 & 255;
            u[H | 61] = i >>> 13 & 255;
            u[H | 62] = i >>> 5 & 255;
            u[H | 63] = i << 3 & 255;
            w(H);
            if (~J) x(J);
            return K | 0
        }

        function C() {
            d = k;
            e = l;
            f = m;
            g = n;
            h = o;
            i = 64;
            j = 0
        }

        function D() {
            d = p;
            e = q;
            f = r;
            g = s;
            h = t;
            i = 64;
            j = 0
        }

        function E(H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W) {
            H = H | 0;
            I = I | 0;
            J = J | 0;
            K = K | 0;
            L = L | 0;
            M = M | 0;
            N = N | 0;
            O = O | 0;
            P = P | 0;
            Q = Q | 0;
            R = R | 0;
            S = S | 0;
            T = T | 0;
            U = U | 0;
            V = V | 0;
            W = W | 0;
            y();
            v(H ^ 1549556828, I ^ 1549556828, J ^ 1549556828, K ^ 1549556828, L ^ 1549556828, M ^ 1549556828, N ^ 1549556828, O ^ 1549556828, P ^ 1549556828, Q ^ 1549556828, R ^ 1549556828, S ^ 1549556828, T ^ 1549556828, U ^ 1549556828, V ^ 1549556828, W ^ 1549556828);
            p = d;
            q = e;
            r = f;
            s = g;
            t = h;
            y();
            v(H ^ 909522486, I ^ 909522486, J ^ 909522486, K ^ 909522486, L ^ 909522486, M ^ 909522486, N ^ 909522486, O ^ 909522486, P ^ 909522486, Q ^ 909522486, R ^ 909522486, S ^ 909522486, T ^ 909522486, U ^ 909522486, V ^ 909522486, W ^ 909522486);
            k = d;
            l = e;
            m = f;
            n = g;
            o = h;
            i = 64;
            j = 0
        }

        function F(H, I, J) {
            H = H | 0;
            I = I | 0;
            J = J | 0;
            var K = 0,
                L = 0,
                M = 0,
                N = 0,
                O = 0,
                P = 0;
            if (H & 63) return -1;
            if (~J)
                if (J & 31) return -1;
            P = B(H, I, -1) | 0;
            K = d, L = e, M = f, N = g, O = h;
            D();
            v(K, L, M, N, O, 2147483648, 0, 0, 0, 0, 0, 0, 0, 0, 0, 672);
            if (~J) x(J);
            return P | 0
        }

        function G(H, I, J, K, L) {
            H = H | 0;
            I = I | 0;
            J = J | 0;
            K = K | 0;
            L = L | 0;
            var M = 0,
                N = 0,
                O = 0,
                P = 0,
                Q = 0,
                R = 0,
                S = 0,
                T = 0,
                U = 0,
                V = 0;
            if (H & 63) return -1;
            if (~L)
                if (L & 31) return -1;
            u[H + I | 0] = J >>> 24;
            u[H + I + 1 | 0] = J >>> 16 & 255;
            u[H + I + 2 | 0] = J >>> 8 & 255;
            u[H + I + 3 | 0] = J & 255;
            F(H, I + 4 | 0, -1) | 0;
            M = R = d, N = S = e, O = T = f, P = U = g, Q = V = h;
            K = K - 1 | 0;
            while ((K | 0) > 0) {
                C();
                v(R, S, T, U, V, 2147483648, 0, 0, 0, 0, 0, 0, 0, 0, 0, 672);
                R = d, S = e, T = f, U = g, V = h;
                D();
                v(R, S, T, U, V, 2147483648, 0, 0, 0, 0, 0, 0, 0, 0, 0, 672);
                R = d, S = e, T = f, U = g, V = h;
                M = M ^ d;
                N = N ^ e;
                O = O ^ f;
                P = P ^ g;
                Q = Q ^ h;
                K = K - 1 | 0
            }
            d = M;
            e = N;
            f = O;
            g = P;
            h = Q;
            if (~L) x(L);
            return 0
        }
        return {
            reset: y,
            init: z,
            process: A,
            finish: B,
            hmac_reset: C,
            hmac_init: E,
            hmac_finish: F,
            pbkdf2_generate_block: G
        }
    }

    function fa(a) {
        a = a || {}, this.heap = r(Uint8Array, a), this.asm = a.asm || ea({
            Uint8Array: Uint8Array
        }, null, this.heap.buffer), this.BLOCK_SIZE = Kc, this.HASH_SIZE = Lc, this.reset()
    }

    function ga() {
        return null === Nc && (Nc = new fa({
            heapSize: 1048576
        })), Nc
    }

    function ha(a) {
        if (void 0 === a) throw new SyntaxError("data required");
        return ga().reset().process(a).finish().result
    }

    function ia(a) {
        var b = ha(a);
        return j(b)
    }

    function ja(a) {
        var b = ha(a);
        return k(b)
    }

    function ka(a, b, c) {
        "use asm";
        var d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0;
        var n = 0,
            o = 0,
            p = 0,
            q = 0,
            r = 0,
            s = 0,
            t = 0,
            u = 0,
            v = 0,
            w = 0,
            x = 0,
            y = 0,
            z = 0,
            A = 0,
            B = 0,
            C = 0;
        var D = new a.Uint8Array(c);

        function E(Q, R, S, T, U, V, W, X, Y, Z, $, _, aa, ba, ca, da) {
            Q = Q | 0;
            R = R | 0;
            S = S | 0;
            T = T | 0;
            U = U | 0;
            V = V | 0;
            W = W | 0;
            X = X | 0;
            Y = Y | 0;
            Z = Z | 0;
            $ = $ | 0;
            _ = _ | 0;
            aa = aa | 0;
            ba = ba | 0;
            ca = ca | 0;
            da = da | 0;
            var ea = 0,
                fa = 0,
                ga = 0,
                ha = 0,
                ia = 0,
                ja = 0,
                ka = 0,
                la = 0,
                ma = 0;
            ea = d;
            fa = e;
            ga = f;
            ha = g;
            ia = h;
            ja = i;
            ka = j;
            la = k;
            ma = Q + la + (ia >>> 6 ^ ia >>> 11 ^ ia >>> 25 ^ ia << 26 ^ ia << 21 ^ ia << 7) + (ka ^ ia & (ja ^ ka)) + 1116352408 | 0;
            la = ka;
            ka = ja;
            ja = ia;
            ia = ha + ma | 0;
            ha = ga;
            ga = fa;
            fa = ea;
            ea = ma + (fa & ga ^ ha & (fa ^ ga)) + (fa >>> 2 ^ fa >>> 13 ^ fa >>> 22 ^ fa << 30 ^ fa << 19 ^ fa << 10) | 0;
            ma = R + la + (ia >>> 6 ^ ia >>> 11 ^ ia >>> 25 ^ ia << 26 ^ ia << 21 ^ ia << 7) + (ka ^ ia & (ja ^ ka)) + 1899447441 | 0;
            la = ka;
            ka = ja;
            ja = ia;
            ia = ha + ma | 0;
            ha = ga;
            ga = fa;
            fa = ea;
            ea = ma + (fa & ga ^ ha & (fa ^ ga)) + (fa >>> 2 ^ fa >>> 13 ^ fa >>> 22 ^ fa << 30 ^ fa << 19 ^ fa << 10) | 0;
            ma = S + la + (ia >>> 6 ^ ia >>> 11 ^ ia >>> 25 ^ ia << 26 ^ ia << 21 ^ ia << 7) + (ka ^ ia & (ja ^ ka)) + 3049323471 | 0;
            la = ka;
            ka = ja;
            ja = ia;
            ia = ha + ma | 0;
            ha = ga;
            ga = fa;
            fa = ea;
            ea = ma + (fa & ga ^ ha & (fa ^ ga)) + (fa >>> 2 ^ fa >>> 13 ^ fa >>> 22 ^ fa << 30 ^ fa << 19 ^ fa << 10) | 0;
            ma = T + la + (ia >>> 6 ^ ia >>> 11 ^ ia >>> 25 ^ ia << 26 ^ ia << 21 ^ ia << 7) + (ka ^ ia & (ja ^ ka)) + 3921009573 | 0;
            la = ka;
            ka = ja;
            ja = ia;
            ia = ha + ma | 0;
            ha = ga;
            ga = fa;
            fa = ea;
            ea = ma + (fa & ga ^ ha & (fa ^ ga)) + (fa >>> 2 ^ fa >>> 13 ^ fa >>> 22 ^ fa << 30 ^ fa << 19 ^ fa << 10) | 0;
            ma = U + la + (ia >>> 6 ^ ia >>> 11 ^ ia >>> 25 ^ ia << 26 ^ ia << 21 ^ ia << 7) + (ka ^ ia & (ja ^ ka)) + 961987163 | 0;
            la = ka;
            ka = ja;
            ja = ia;
            ia = ha + ma | 0;
            ha = ga;
            ga = fa;
            fa = ea;
            ea = ma + (fa & ga ^ ha & (fa ^ ga)) + (fa >>> 2 ^ fa >>> 13 ^ fa >>> 22 ^ fa << 30 ^ fa << 19 ^ fa << 10) | 0;
            ma = V + la + (ia >>> 6 ^ ia >>> 11 ^ ia >>> 25 ^ ia << 26 ^ ia << 21 ^ ia << 7) + (ka ^ ia & (ja ^ ka)) + 1508970993 | 0;
            la = ka;
            ka = ja;
            ja = ia;
            ia = ha + ma | 0;
            ha = ga;
            ga = fa;
            fa = ea;
            ea = ma + (fa & ga ^ ha & (fa ^ ga)) + (fa >>> 2 ^ fa >>> 13 ^ fa >>> 22 ^ fa << 30 ^ fa << 19 ^ fa << 10) | 0;
            ma = W + la + (ia >>> 6 ^ ia >>> 11 ^ ia >>> 25 ^ ia << 26 ^ ia << 21 ^ ia << 7) + (ka ^ ia & (ja ^ ka)) + 2453635748 | 0;
            la = ka;
            ka = ja;
            ja = ia;
            ia = ha + ma | 0;
            ha = ga;
            ga = fa;
            fa = ea;
            ea = ma + (fa & ga ^ ha & (fa ^ ga)) + (fa >>> 2 ^ fa >>> 13 ^ fa >>> 22 ^ fa << 30 ^ fa << 19 ^ fa << 10) | 0;
            ma = X + la + (ia >>> 6 ^ ia >>> 11 ^ ia >>> 25 ^ ia << 26 ^ ia << 21 ^ ia << 7) + (ka ^ ia & (ja ^ ka)) + 2870763221 | 0;
            la = ka;
            ka = ja;
            ja = ia;
            ia = ha + ma | 0;
            ha = ga;
            ga = fa;
            fa = ea;
            ea = ma + (fa & ga ^ ha & (fa ^ ga)) + (fa >>> 2 ^ fa >>> 13 ^ fa >>> 22 ^ fa << 30 ^ fa << 19 ^ fa << 10) | 0;
            ma = Y + la + (ia >>> 6 ^ ia >>> 11 ^ ia >>> 25 ^ ia << 26 ^ ia << 21 ^ ia << 7) + (ka ^ ia & (ja ^ ka)) + 3624381080 | 0;
            la = ka;
            ka = ja;
            ja = ia;
            ia = ha + ma | 0;
            ha = ga;
            ga = fa;
            fa = ea;
            ea = ma + (fa & ga ^ ha & (fa ^ ga)) + (fa >>> 2 ^ fa >>> 13 ^ fa >>> 22 ^ fa << 30 ^ fa << 19 ^ fa << 10) | 0;
            ma = Z + la + (ia >>> 6 ^ ia >>> 11 ^ ia >>> 25 ^ ia << 26 ^ ia << 21 ^ ia << 7) + (ka ^ ia & (ja ^ ka)) + 310598401 | 0;
            la = ka;
            ka = ja;
            ja = ia;
            ia = ha + ma | 0;
            ha = ga;
            ga = fa;
            fa = ea;
            ea = ma + (fa & ga ^ ha & (fa ^ ga)) + (fa >>> 2 ^ fa >>> 13 ^ fa >>> 22 ^ fa << 30 ^ fa << 19 ^ fa << 10) | 0;
            ma = $ + la + (ia >>> 6 ^ ia >>> 11 ^ ia >>> 25 ^ ia << 26 ^ ia << 21 ^ ia << 7) + (ka ^ ia & (ja ^ ka)) + 607225278 | 0;
            la = ka;
            ka = ja;
            ja = ia;
            ia = ha + ma | 0;
            ha = ga;
            ga = fa;
            fa = ea;
            ea = ma + (fa & ga ^ ha & (fa ^ ga)) + (fa >>> 2 ^ fa >>> 13 ^ fa >>> 22 ^ fa << 30 ^ fa << 19 ^ fa << 10) | 0;
            ma = _ + la + (ia >>> 6 ^ ia >>> 11 ^ ia >>> 25 ^ ia << 26 ^ ia << 21 ^ ia << 7) + (ka ^ ia & (ja ^ ka)) + 1426881987 | 0;
            la = ka;
            ka = ja;
            ja = ia;
            ia = ha + ma | 0;
            ha = ga;
            ga = fa;
            fa = ea;
            ea = ma + (fa & ga ^ ha & (fa ^ ga)) + (fa >>> 2 ^ fa >>> 13 ^ fa >>> 22 ^ fa << 30 ^ fa << 19 ^ fa << 10) | 0;
            ma = aa + la + (ia >>> 6 ^ ia >>> 11 ^ ia >>> 25 ^ ia << 26 ^ ia << 21 ^ ia << 7) + (ka ^ ia & (ja ^ ka)) + 1925078388 | 0;
            la = ka;
            ka = ja;
            ja = ia;
            ia = ha + ma | 0;
            ha = ga;
            ga = fa;
            fa = ea;
            ea = ma + (fa & ga ^ ha & (fa ^ ga)) + (fa >>> 2 ^ fa >>> 13 ^ fa >>> 22 ^ fa << 30 ^ fa << 19 ^ fa << 10) | 0;
            ma = ba + la + (ia >>> 6 ^ ia >>> 11 ^ ia >>> 25 ^ ia << 26 ^ ia << 21 ^ ia << 7) + (ka ^ ia & (ja ^ ka)) + 2162078206 | 0;
            la = ka;
            ka = ja;
            ja = ia;
            ia = ha + ma | 0;
            ha = ga;
            ga = fa;
            fa = ea;
            ea = ma + (fa & ga ^ ha & (fa ^ ga)) + (fa >>> 2 ^ fa >>> 13 ^ fa >>> 22 ^ fa << 30 ^ fa << 19 ^ fa << 10) | 0;
            ma = ca + la + (ia >>> 6 ^ ia >>> 11 ^ ia >>> 25 ^ ia << 26 ^ ia << 21 ^ ia << 7) + (ka ^ ia & (ja ^ ka)) + 2614888103 | 0;
            la = ka;
            ka = ja;
            ja = ia;
            ia = ha + ma | 0;
            ha = ga;
            ga = fa;
            fa = ea;
            ea = ma + (fa & ga ^ ha & (fa ^ ga)) + (fa >>> 2 ^ fa >>> 13 ^ fa >>> 22 ^ fa << 30 ^ fa << 19 ^ fa << 10) | 0;
            ma = da + la + (ia >>> 6 ^ ia >>> 11 ^ ia >>> 25 ^ ia << 26 ^ ia << 21 ^ ia << 7) + (ka ^ ia & (ja ^ ka)) + 3248222580 | 0;
            la = ka;
            ka = ja;
            ja = ia;
            ia = ha + ma | 0;
            ha = ga;
            ga = fa;
            fa = ea;
            ea = ma + (fa & ga ^ ha & (fa ^ ga)) + (fa >>> 2 ^ fa >>> 13 ^ fa >>> 22 ^ fa << 30 ^ fa << 19 ^ fa << 10) | 0;
            Q = ma = (R >>> 7 ^ R >>> 18 ^ R >>> 3 ^ R << 25 ^ R << 14) + (ca >>> 17 ^ ca >>> 19 ^ ca >>> 10 ^ ca << 15 ^ ca << 13) + Q + Z | 0;
            ma = ma + la + (ia >>> 6 ^ ia >>> 11 ^ ia >>> 25 ^ ia << 26 ^ ia << 21 ^ ia << 7) + (ka ^ ia & (ja ^ ka)) + 3835390401 | 0;
            la = ka;
            ka = ja;
            ja = ia;
            ia = ha + ma | 0;
            ha = ga;
            ga = fa;
            fa = ea;
            ea = ma + (fa & ga ^ ha & (fa ^ ga)) + (fa >>> 2 ^ fa >>> 13 ^ fa >>> 22 ^ fa << 30 ^ fa << 19 ^ fa << 10) | 0;
            R = ma = (S >>> 7 ^ S >>> 18 ^ S >>> 3 ^ S << 25 ^ S << 14) + (da >>> 17 ^ da >>> 19 ^ da >>> 10 ^ da << 15 ^ da << 13) + R + $ | 0;
            ma = ma + la + (ia >>> 6 ^ ia >>> 11 ^ ia >>> 25 ^ ia << 26 ^ ia << 21 ^ ia << 7) + (ka ^ ia & (ja ^ ka)) + 4022224774 | 0;
            la = ka;
            ka = ja;
            ja = ia;
            ia = ha + ma | 0;
            ha = ga;
            ga = fa;
            fa = ea;
            ea = ma + (fa & ga ^ ha & (fa ^ ga)) + (fa >>> 2 ^ fa >>> 13 ^ fa >>> 22 ^ fa << 30 ^ fa << 19 ^ fa << 10) | 0;
            S = ma = (T >>> 7 ^ T >>> 18 ^ T >>> 3 ^ T << 25 ^ T << 14) + (Q >>> 17 ^ Q >>> 19 ^ Q >>> 10 ^ Q << 15 ^ Q << 13) + S + _ | 0;
            ma = ma + la + (ia >>> 6 ^ ia >>> 11 ^ ia >>> 25 ^ ia << 26 ^ ia << 21 ^ ia << 7) + (ka ^ ia & (ja ^ ka)) + 264347078 | 0;
            la = ka;
            ka = ja;
            ja = ia;
            ia = ha + ma | 0;
            ha = ga;
            ga = fa;
            fa = ea;
            ea = ma + (fa & ga ^ ha & (fa ^ ga)) + (fa >>> 2 ^ fa >>> 13 ^ fa >>> 22 ^ fa << 30 ^ fa << 19 ^ fa << 10) | 0;
            T = ma = (U >>> 7 ^ U >>> 18 ^ U >>> 3 ^ U << 25 ^ U << 14) + (R >>> 17 ^ R >>> 19 ^ R >>> 10 ^ R << 15 ^ R << 13) + T + aa | 0;
            ma = ma + la + (ia >>> 6 ^ ia >>> 11 ^ ia >>> 25 ^ ia << 26 ^ ia << 21 ^ ia << 7) + (ka ^ ia & (ja ^ ka)) + 604807628 | 0;
            la = ka;
            ka = ja;
            ja = ia;
            ia = ha + ma | 0;
            ha = ga;
            ga = fa;
            fa = ea;
            ea = ma + (fa & ga ^ ha & (fa ^ ga)) + (fa >>> 2 ^ fa >>> 13 ^ fa >>> 22 ^ fa << 30 ^ fa << 19 ^ fa << 10) | 0;
            U = ma = (V >>> 7 ^ V >>> 18 ^ V >>> 3 ^ V << 25 ^ V << 14) + (S >>> 17 ^ S >>> 19 ^ S >>> 10 ^ S << 15 ^ S << 13) + U + ba | 0;
            ma = ma + la + (ia >>> 6 ^ ia >>> 11 ^ ia >>> 25 ^ ia << 26 ^ ia << 21 ^ ia << 7) + (ka ^ ia & (ja ^ ka)) + 770255983 | 0;
            la = ka;
            ka = ja;
            ja = ia;
            ia = ha + ma | 0;
            ha = ga;
            ga = fa;
            fa = ea;
            ea = ma + (fa & ga ^ ha & (fa ^ ga)) + (fa >>> 2 ^ fa >>> 13 ^ fa >>> 22 ^ fa << 30 ^ fa << 19 ^ fa << 10) | 0;
            V = ma = (W >>> 7 ^ W >>> 18 ^ W >>> 3 ^ W << 25 ^ W << 14) + (T >>> 17 ^ T >>> 19 ^ T >>> 10 ^ T << 15 ^ T << 13) + V + ca | 0;
            ma = ma + la + (ia >>> 6 ^ ia >>> 11 ^ ia >>> 25 ^ ia << 26 ^ ia << 21 ^ ia << 7) + (ka ^ ia & (ja ^ ka)) + 1249150122 | 0;
            la = ka;
            ka = ja;
            ja = ia;
            ia = ha + ma | 0;
            ha = ga;
            ga = fa;
            fa = ea;
            ea = ma + (fa & ga ^ ha & (fa ^ ga)) + (fa >>> 2 ^ fa >>> 13 ^ fa >>> 22 ^ fa << 30 ^ fa << 19 ^ fa << 10) | 0;
            W = ma = (X >>> 7 ^ X >>> 18 ^ X >>> 3 ^ X << 25 ^ X << 14) + (U >>> 17 ^ U >>> 19 ^ U >>> 10 ^ U << 15 ^ U << 13) + W + da | 0;
            ma = ma + la + (ia >>> 6 ^ ia >>> 11 ^ ia >>> 25 ^ ia << 26 ^ ia << 21 ^ ia << 7) + (ka ^ ia & (ja ^ ka)) + 1555081692 | 0;

            la = ka;
            ka = ja;
            ja = ia;
            ia = ha + ma | 0;
            ha = ga;
            ga = fa;
            fa = ea;
            ea = ma + (fa & ga ^ ha & (fa ^ ga)) + (fa >>> 2 ^ fa >>> 13 ^ fa >>> 22 ^ fa << 30 ^ fa << 19 ^ fa << 10) | 0;
            X = ma = (Y >>> 7 ^ Y >>> 18 ^ Y >>> 3 ^ Y << 25 ^ Y << 14) + (V >>> 17 ^ V >>> 19 ^ V >>> 10 ^ V << 15 ^ V << 13) + X + Q | 0;
            ma = ma + la + (ia >>> 6 ^ ia >>> 11 ^ ia >>> 25 ^ ia << 26 ^ ia << 21 ^ ia << 7) + (ka ^ ia & (ja ^ ka)) + 1996064986 | 0;
            la = ka;
            ka = ja;
            ja = ia;
            ia = ha + ma | 0;
            ha = ga;
            ga = fa;
            fa = ea;
            ea = ma + (fa & ga ^ ha & (fa ^ ga)) + (fa >>> 2 ^ fa >>> 13 ^ fa >>> 22 ^ fa << 30 ^ fa << 19 ^ fa << 10) | 0;
            Y = ma = (Z >>> 7 ^ Z >>> 18 ^ Z >>> 3 ^ Z << 25 ^ Z << 14) + (W >>> 17 ^ W >>> 19 ^ W >>> 10 ^ W << 15 ^ W << 13) + Y + R | 0;
            ma = ma + la + (ia >>> 6 ^ ia >>> 11 ^ ia >>> 25 ^ ia << 26 ^ ia << 21 ^ ia << 7) + (ka ^ ia & (ja ^ ka)) + 2554220882 | 0;
            la = ka;
            ka = ja;
            ja = ia;
            ia = ha + ma | 0;
            ha = ga;
            ga = fa;
            fa = ea;
            ea = ma + (fa & ga ^ ha & (fa ^ ga)) + (fa >>> 2 ^ fa >>> 13 ^ fa >>> 22 ^ fa << 30 ^ fa << 19 ^ fa << 10) | 0;
            Z = ma = ($ >>> 7 ^ $ >>> 18 ^ $ >>> 3 ^ $ << 25 ^ $ << 14) + (X >>> 17 ^ X >>> 19 ^ X >>> 10 ^ X << 15 ^ X << 13) + Z + S | 0;
            ma = ma + la + (ia >>> 6 ^ ia >>> 11 ^ ia >>> 25 ^ ia << 26 ^ ia << 21 ^ ia << 7) + (ka ^ ia & (ja ^ ka)) + 2821834349 | 0;
            la = ka;
            ka = ja;
            ja = ia;
            ia = ha + ma | 0;
            ha = ga;
            ga = fa;
            fa = ea;
            ea = ma + (fa & ga ^ ha & (fa ^ ga)) + (fa >>> 2 ^ fa >>> 13 ^ fa >>> 22 ^ fa << 30 ^ fa << 19 ^ fa << 10) | 0;
            $ = ma = (_ >>> 7 ^ _ >>> 18 ^ _ >>> 3 ^ _ << 25 ^ _ << 14) + (Y >>> 17 ^ Y >>> 19 ^ Y >>> 10 ^ Y << 15 ^ Y << 13) + $ + T | 0;
            ma = ma + la + (ia >>> 6 ^ ia >>> 11 ^ ia >>> 25 ^ ia << 26 ^ ia << 21 ^ ia << 7) + (ka ^ ia & (ja ^ ka)) + 2952996808 | 0;
            la = ka;
            ka = ja;
            ja = ia;
            ia = ha + ma | 0;
            ha = ga;
            ga = fa;
            fa = ea;
            ea = ma + (fa & ga ^ ha & (fa ^ ga)) + (fa >>> 2 ^ fa >>> 13 ^ fa >>> 22 ^ fa << 30 ^ fa << 19 ^ fa << 10) | 0;
            _ = ma = (aa >>> 7 ^ aa >>> 18 ^ aa >>> 3 ^ aa << 25 ^ aa << 14) + (Z >>> 17 ^ Z >>> 19 ^ Z >>> 10 ^ Z << 15 ^ Z << 13) + _ + U | 0;
            ma = ma + la + (ia >>> 6 ^ ia >>> 11 ^ ia >>> 25 ^ ia << 26 ^ ia << 21 ^ ia << 7) + (ka ^ ia & (ja ^ ka)) + 3210313671 | 0;
            la = ka;
            ka = ja;
            ja = ia;
            ia = ha + ma | 0;
            ha = ga;
            ga = fa;
            fa = ea;
            ea = ma + (fa & ga ^ ha & (fa ^ ga)) + (fa >>> 2 ^ fa >>> 13 ^ fa >>> 22 ^ fa << 30 ^ fa << 19 ^ fa << 10) | 0;
            aa = ma = (ba >>> 7 ^ ba >>> 18 ^ ba >>> 3 ^ ba << 25 ^ ba << 14) + ($ >>> 17 ^ $ >>> 19 ^ $ >>> 10 ^ $ << 15 ^ $ << 13) + aa + V | 0;
            ma = ma + la + (ia >>> 6 ^ ia >>> 11 ^ ia >>> 25 ^ ia << 26 ^ ia << 21 ^ ia << 7) + (ka ^ ia & (ja ^ ka)) + 3336571891 | 0;
            la = ka;
            ka = ja;
            ja = ia;
            ia = ha + ma | 0;
            ha = ga;
            ga = fa;
            fa = ea;
            ea = ma + (fa & ga ^ ha & (fa ^ ga)) + (fa >>> 2 ^ fa >>> 13 ^ fa >>> 22 ^ fa << 30 ^ fa << 19 ^ fa << 10) | 0;
            ba = ma = (ca >>> 7 ^ ca >>> 18 ^ ca >>> 3 ^ ca << 25 ^ ca << 14) + (_ >>> 17 ^ _ >>> 19 ^ _ >>> 10 ^ _ << 15 ^ _ << 13) + ba + W | 0;
            ma = ma + la + (ia >>> 6 ^ ia >>> 11 ^ ia >>> 25 ^ ia << 26 ^ ia << 21 ^ ia << 7) + (ka ^ ia & (ja ^ ka)) + 3584528711 | 0;
            la = ka;
            ka = ja;
            ja = ia;
            ia = ha + ma | 0;
            ha = ga;
            ga = fa;
            fa = ea;
            ea = ma + (fa & ga ^ ha & (fa ^ ga)) + (fa >>> 2 ^ fa >>> 13 ^ fa >>> 22 ^ fa << 30 ^ fa << 19 ^ fa << 10) | 0;
            ca = ma = (da >>> 7 ^ da >>> 18 ^ da >>> 3 ^ da << 25 ^ da << 14) + (aa >>> 17 ^ aa >>> 19 ^ aa >>> 10 ^ aa << 15 ^ aa << 13) + ca + X | 0;
            ma = ma + la + (ia >>> 6 ^ ia >>> 11 ^ ia >>> 25 ^ ia << 26 ^ ia << 21 ^ ia << 7) + (ka ^ ia & (ja ^ ka)) + 113926993 | 0;
            la = ka;
            ka = ja;
            ja = ia;
            ia = ha + ma | 0;
            ha = ga;
            ga = fa;
            fa = ea;
            ea = ma + (fa & ga ^ ha & (fa ^ ga)) + (fa >>> 2 ^ fa >>> 13 ^ fa >>> 22 ^ fa << 30 ^ fa << 19 ^ fa << 10) | 0;
            da = ma = (Q >>> 7 ^ Q >>> 18 ^ Q >>> 3 ^ Q << 25 ^ Q << 14) + (ba >>> 17 ^ ba >>> 19 ^ ba >>> 10 ^ ba << 15 ^ ba << 13) + da + Y | 0;
            ma = ma + la + (ia >>> 6 ^ ia >>> 11 ^ ia >>> 25 ^ ia << 26 ^ ia << 21 ^ ia << 7) + (ka ^ ia & (ja ^ ka)) + 338241895 | 0;
            la = ka;
            ka = ja;
            ja = ia;
            ia = ha + ma | 0;
            ha = ga;
            ga = fa;
            fa = ea;
            ea = ma + (fa & ga ^ ha & (fa ^ ga)) + (fa >>> 2 ^ fa >>> 13 ^ fa >>> 22 ^ fa << 30 ^ fa << 19 ^ fa << 10) | 0;
            Q = ma = (R >>> 7 ^ R >>> 18 ^ R >>> 3 ^ R << 25 ^ R << 14) + (ca >>> 17 ^ ca >>> 19 ^ ca >>> 10 ^ ca << 15 ^ ca << 13) + Q + Z | 0;
            ma = ma + la + (ia >>> 6 ^ ia >>> 11 ^ ia >>> 25 ^ ia << 26 ^ ia << 21 ^ ia << 7) + (ka ^ ia & (ja ^ ka)) + 666307205 | 0;
            la = ka;
            ka = ja;
            ja = ia;
            ia = ha + ma | 0;
            ha = ga;
            ga = fa;
            fa = ea;
            ea = ma + (fa & ga ^ ha & (fa ^ ga)) + (fa >>> 2 ^ fa >>> 13 ^ fa >>> 22 ^ fa << 30 ^ fa << 19 ^ fa << 10) | 0;
            R = ma = (S >>> 7 ^ S >>> 18 ^ S >>> 3 ^ S << 25 ^ S << 14) + (da >>> 17 ^ da >>> 19 ^ da >>> 10 ^ da << 15 ^ da << 13) + R + $ | 0;
            ma = ma + la + (ia >>> 6 ^ ia >>> 11 ^ ia >>> 25 ^ ia << 26 ^ ia << 21 ^ ia << 7) + (ka ^ ia & (ja ^ ka)) + 773529912 | 0;
            la = ka;
            ka = ja;
            ja = ia;
            ia = ha + ma | 0;
            ha = ga;
            ga = fa;
            fa = ea;
            ea = ma + (fa & ga ^ ha & (fa ^ ga)) + (fa >>> 2 ^ fa >>> 13 ^ fa >>> 22 ^ fa << 30 ^ fa << 19 ^ fa << 10) | 0;
            S = ma = (T >>> 7 ^ T >>> 18 ^ T >>> 3 ^ T << 25 ^ T << 14) + (Q >>> 17 ^ Q >>> 19 ^ Q >>> 10 ^ Q << 15 ^ Q << 13) + S + _ | 0;
            ma = ma + la + (ia >>> 6 ^ ia >>> 11 ^ ia >>> 25 ^ ia << 26 ^ ia << 21 ^ ia << 7) + (ka ^ ia & (ja ^ ka)) + 1294757372 | 0;
            la = ka;
            ka = ja;
            ja = ia;
            ia = ha + ma | 0;
            ha = ga;
            ga = fa;
            fa = ea;
            ea = ma + (fa & ga ^ ha & (fa ^ ga)) + (fa >>> 2 ^ fa >>> 13 ^ fa >>> 22 ^ fa << 30 ^ fa << 19 ^ fa << 10) | 0;
            T = ma = (U >>> 7 ^ U >>> 18 ^ U >>> 3 ^ U << 25 ^ U << 14) + (R >>> 17 ^ R >>> 19 ^ R >>> 10 ^ R << 15 ^ R << 13) + T + aa | 0;
            ma = ma + la + (ia >>> 6 ^ ia >>> 11 ^ ia >>> 25 ^ ia << 26 ^ ia << 21 ^ ia << 7) + (ka ^ ia & (ja ^ ka)) + 1396182291 | 0;
            la = ka;
            ka = ja;
            ja = ia;
            ia = ha + ma | 0;
            ha = ga;
            ga = fa;
            fa = ea;
            ea = ma + (fa & ga ^ ha & (fa ^ ga)) + (fa >>> 2 ^ fa >>> 13 ^ fa >>> 22 ^ fa << 30 ^ fa << 19 ^ fa << 10) | 0;
            U = ma = (V >>> 7 ^ V >>> 18 ^ V >>> 3 ^ V << 25 ^ V << 14) + (S >>> 17 ^ S >>> 19 ^ S >>> 10 ^ S << 15 ^ S << 13) + U + ba | 0;
            ma = ma + la + (ia >>> 6 ^ ia >>> 11 ^ ia >>> 25 ^ ia << 26 ^ ia << 21 ^ ia << 7) + (ka ^ ia & (ja ^ ka)) + 1695183700 | 0;
            la = ka;
            ka = ja;
            ja = ia;
            ia = ha + ma | 0;
            ha = ga;
            ga = fa;
            fa = ea;
            ea = ma + (fa & ga ^ ha & (fa ^ ga)) + (fa >>> 2 ^ fa >>> 13 ^ fa >>> 22 ^ fa << 30 ^ fa << 19 ^ fa << 10) | 0;
            V = ma = (W >>> 7 ^ W >>> 18 ^ W >>> 3 ^ W << 25 ^ W << 14) + (T >>> 17 ^ T >>> 19 ^ T >>> 10 ^ T << 15 ^ T << 13) + V + ca | 0;
            ma = ma + la + (ia >>> 6 ^ ia >>> 11 ^ ia >>> 25 ^ ia << 26 ^ ia << 21 ^ ia << 7) + (ka ^ ia & (ja ^ ka)) + 1986661051 | 0;
            la = ka;
            ka = ja;
            ja = ia;
            ia = ha + ma | 0;
            ha = ga;
            ga = fa;
            fa = ea;
            ea = ma + (fa & ga ^ ha & (fa ^ ga)) + (fa >>> 2 ^ fa >>> 13 ^ fa >>> 22 ^ fa << 30 ^ fa << 19 ^ fa << 10) | 0;
            W = ma = (X >>> 7 ^ X >>> 18 ^ X >>> 3 ^ X << 25 ^ X << 14) + (U >>> 17 ^ U >>> 19 ^ U >>> 10 ^ U << 15 ^ U << 13) + W + da | 0;
            ma = ma + la + (ia >>> 6 ^ ia >>> 11 ^ ia >>> 25 ^ ia << 26 ^ ia << 21 ^ ia << 7) + (ka ^ ia & (ja ^ ka)) + 2177026350 | 0;
            la = ka;
            ka = ja;
            ja = ia;
            ia = ha + ma | 0;
            ha = ga;
            ga = fa;
            fa = ea;
            ea = ma + (fa & ga ^ ha & (fa ^ ga)) + (fa >>> 2 ^ fa >>> 13 ^ fa >>> 22 ^ fa << 30 ^ fa << 19 ^ fa << 10) | 0;
            X = ma = (Y >>> 7 ^ Y >>> 18 ^ Y >>> 3 ^ Y << 25 ^ Y << 14) + (V >>> 17 ^ V >>> 19 ^ V >>> 10 ^ V << 15 ^ V << 13) + X + Q | 0;
            ma = ma + la + (ia >>> 6 ^ ia >>> 11 ^ ia >>> 25 ^ ia << 26 ^ ia << 21 ^ ia << 7) + (ka ^ ia & (ja ^ ka)) + 2456956037 | 0;
            la = ka;
            ka = ja;
            ja = ia;
            ia = ha + ma | 0;
            ha = ga;
            ga = fa;
            fa = ea;
            ea = ma + (fa & ga ^ ha & (fa ^ ga)) + (fa >>> 2 ^ fa >>> 13 ^ fa >>> 22 ^ fa << 30 ^ fa << 19 ^ fa << 10) | 0;
            Y = ma = (Z >>> 7 ^ Z >>> 18 ^ Z >>> 3 ^ Z << 25 ^ Z << 14) + (W >>> 17 ^ W >>> 19 ^ W >>> 10 ^ W << 15 ^ W << 13) + Y + R | 0;
            ma = ma + la + (ia >>> 6 ^ ia >>> 11 ^ ia >>> 25 ^ ia << 26 ^ ia << 21 ^ ia << 7) + (ka ^ ia & (ja ^ ka)) + 2730485921 | 0;
            la = ka;
            ka = ja;
            ja = ia;
            ia = ha + ma | 0;
            ha = ga;
            ga = fa;
            fa = ea;
            ea = ma + (fa & ga ^ ha & (fa ^ ga)) + (fa >>> 2 ^ fa >>> 13 ^ fa >>> 22 ^ fa << 30 ^ fa << 19 ^ fa << 10) | 0;
            Z = ma = ($ >>> 7 ^ $ >>> 18 ^ $ >>> 3 ^ $ << 25 ^ $ << 14) + (X >>> 17 ^ X >>> 19 ^ X >>> 10 ^ X << 15 ^ X << 13) + Z + S | 0;
            ma = ma + la + (ia >>> 6 ^ ia >>> 11 ^ ia >>> 25 ^ ia << 26 ^ ia << 21 ^ ia << 7) + (ka ^ ia & (ja ^ ka)) + 2820302411 | 0;
            la = ka;
            ka = ja;
            ja = ia;
            ia = ha + ma | 0;
            ha = ga;
            ga = fa;
            fa = ea;
            ea = ma + (fa & ga ^ ha & (fa ^ ga)) + (fa >>> 2 ^ fa >>> 13 ^ fa >>> 22 ^ fa << 30 ^ fa << 19 ^ fa << 10) | 0;
            $ = ma = (_ >>> 7 ^ _ >>> 18 ^ _ >>> 3 ^ _ << 25 ^ _ << 14) + (Y >>> 17 ^ Y >>> 19 ^ Y >>> 10 ^ Y << 15 ^ Y << 13) + $ + T | 0;
            ma = ma + la + (ia >>> 6 ^ ia >>> 11 ^ ia >>> 25 ^ ia << 26 ^ ia << 21 ^ ia << 7) + (ka ^ ia & (ja ^ ka)) + 3259730800 | 0;
            la = ka;
            ka = ja;
            ja = ia;
            ia = ha + ma | 0;
            ha = ga;
            ga = fa;
            fa = ea;
            ea = ma + (fa & ga ^ ha & (fa ^ ga)) + (fa >>> 2 ^ fa >>> 13 ^ fa >>> 22 ^ fa << 30 ^ fa << 19 ^ fa << 10) | 0;
            _ = ma = (aa >>> 7 ^ aa >>> 18 ^ aa >>> 3 ^ aa << 25 ^ aa << 14) + (Z >>> 17 ^ Z >>> 19 ^ Z >>> 10 ^ Z << 15 ^ Z << 13) + _ + U | 0;
            ma = ma + la + (ia >>> 6 ^ ia >>> 11 ^ ia >>> 25 ^ ia << 26 ^ ia << 21 ^ ia << 7) + (ka ^ ia & (ja ^ ka)) + 3345764771 | 0;
            la = ka;
            ka = ja;
            ja = ia;
            ia = ha + ma | 0;
            ha = ga;
            ga = fa;
            fa = ea;
            ea = ma + (fa & ga ^ ha & (fa ^ ga)) + (fa >>> 2 ^ fa >>> 13 ^ fa >>> 22 ^ fa << 30 ^ fa << 19 ^ fa << 10) | 0;
            aa = ma = (ba >>> 7 ^ ba >>> 18 ^ ba >>> 3 ^ ba << 25 ^ ba << 14) + ($ >>> 17 ^ $ >>> 19 ^ $ >>> 10 ^ $ << 15 ^ $ << 13) + aa + V | 0;
            ma = ma + la + (ia >>> 6 ^ ia >>> 11 ^ ia >>> 25 ^ ia << 26 ^ ia << 21 ^ ia << 7) + (ka ^ ia & (ja ^ ka)) + 3516065817 | 0;
            la = ka;
            ka = ja;
            ja = ia;
            ia = ha + ma | 0;
            ha = ga;
            ga = fa;
            fa = ea;
            ea = ma + (fa & ga ^ ha & (fa ^ ga)) + (fa >>> 2 ^ fa >>> 13 ^ fa >>> 22 ^ fa << 30 ^ fa << 19 ^ fa << 10) | 0;
            ba = ma = (ca >>> 7 ^ ca >>> 18 ^ ca >>> 3 ^ ca << 25 ^ ca << 14) + (_ >>> 17 ^ _ >>> 19 ^ _ >>> 10 ^ _ << 15 ^ _ << 13) + ba + W | 0;
            ma = ma + la + (ia >>> 6 ^ ia >>> 11 ^ ia >>> 25 ^ ia << 26 ^ ia << 21 ^ ia << 7) + (ka ^ ia & (ja ^ ka)) + 3600352804 | 0;
            la = ka;
            ka = ja;
            ja = ia;
            ia = ha + ma | 0;
            ha = ga;
            ga = fa;
            fa = ea;
            ea = ma + (fa & ga ^ ha & (fa ^ ga)) + (fa >>> 2 ^ fa >>> 13 ^ fa >>> 22 ^ fa << 30 ^ fa << 19 ^ fa << 10) | 0;
            ca = ma = (da >>> 7 ^ da >>> 18 ^ da >>> 3 ^ da << 25 ^ da << 14) + (aa >>> 17 ^ aa >>> 19 ^ aa >>> 10 ^ aa << 15 ^ aa << 13) + ca + X | 0;
            ma = ma + la + (ia >>> 6 ^ ia >>> 11 ^ ia >>> 25 ^ ia << 26 ^ ia << 21 ^ ia << 7) + (ka ^ ia & (ja ^ ka)) + 4094571909 | 0;
            la = ka;
            ka = ja;
            ja = ia;
            ia = ha + ma | 0;
            ha = ga;
            ga = fa;
            fa = ea;
            ea = ma + (fa & ga ^ ha & (fa ^ ga)) + (fa >>> 2 ^ fa >>> 13 ^ fa >>> 22 ^ fa << 30 ^ fa << 19 ^ fa << 10) | 0;
            da = ma = (Q >>> 7 ^ Q >>> 18 ^ Q >>> 3 ^ Q << 25 ^ Q << 14) + (ba >>> 17 ^ ba >>> 19 ^ ba >>> 10 ^ ba << 15 ^ ba << 13) + da + Y | 0;
            ma = ma + la + (ia >>> 6 ^ ia >>> 11 ^ ia >>> 25 ^ ia << 26 ^ ia << 21 ^ ia << 7) + (ka ^ ia & (ja ^ ka)) + 275423344 | 0;
            la = ka;
            ka = ja;
            ja = ia;
            ia = ha + ma | 0;
            ha = ga;
            ga = fa;
            fa = ea;
            ea = ma + (fa & ga ^ ha & (fa ^ ga)) + (fa >>> 2 ^ fa >>> 13 ^ fa >>> 22 ^ fa << 30 ^ fa << 19 ^ fa << 10) | 0;
            Q = ma = (R >>> 7 ^ R >>> 18 ^ R >>> 3 ^ R << 25 ^ R << 14) + (ca >>> 17 ^ ca >>> 19 ^ ca >>> 10 ^ ca << 15 ^ ca << 13) + Q + Z | 0;
            ma = ma + la + (ia >>> 6 ^ ia >>> 11 ^ ia >>> 25 ^ ia << 26 ^ ia << 21 ^ ia << 7) + (ka ^ ia & (ja ^ ka)) + 430227734 | 0;
            la = ka;
            ka = ja;
            ja = ia;
            ia = ha + ma | 0;
            ha = ga;
            ga = fa;
            fa = ea;
            ea = ma + (fa & ga ^ ha & (fa ^ ga)) + (fa >>> 2 ^ fa >>> 13 ^ fa >>> 22 ^ fa << 30 ^ fa << 19 ^ fa << 10) | 0;
            R = ma = (S >>> 7 ^ S >>> 18 ^ S >>> 3 ^ S << 25 ^ S << 14) + (da >>> 17 ^ da >>> 19 ^ da >>> 10 ^ da << 15 ^ da << 13) + R + $ | 0;
            ma = ma + la + (ia >>> 6 ^ ia >>> 11 ^ ia >>> 25 ^ ia << 26 ^ ia << 21 ^ ia << 7) + (ka ^ ia & (ja ^ ka)) + 506948616 | 0;
            la = ka;
            ka = ja;
            ja = ia;
            ia = ha + ma | 0;
            ha = ga;
            ga = fa;
            fa = ea;
            ea = ma + (fa & ga ^ ha & (fa ^ ga)) + (fa >>> 2 ^ fa >>> 13 ^ fa >>> 22 ^ fa << 30 ^ fa << 19 ^ fa << 10) | 0;
            S = ma = (T >>> 7 ^ T >>> 18 ^ T >>> 3 ^ T << 25 ^ T << 14) + (Q >>> 17 ^ Q >>> 19 ^ Q >>> 10 ^ Q << 15 ^ Q << 13) + S + _ | 0;
            ma = ma + la + (ia >>> 6 ^ ia >>> 11 ^ ia >>> 25 ^ ia << 26 ^ ia << 21 ^ ia << 7) + (ka ^ ia & (ja ^ ka)) + 659060556 | 0;
            la = ka;
            ka = ja;
            ja = ia;
            ia = ha + ma | 0;
            ha = ga;
            ga = fa;
            fa = ea;
            ea = ma + (fa & ga ^ ha & (fa ^ ga)) + (fa >>> 2 ^ fa >>> 13 ^ fa >>> 22 ^ fa << 30 ^ fa << 19 ^ fa << 10) | 0;
            T = ma = (U >>> 7 ^ U >>> 18 ^ U >>> 3 ^ U << 25 ^ U << 14) + (R >>> 17 ^ R >>> 19 ^ R >>> 10 ^ R << 15 ^ R << 13) + T + aa | 0;
            ma = ma + la + (ia >>> 6 ^ ia >>> 11 ^ ia >>> 25 ^ ia << 26 ^ ia << 21 ^ ia << 7) + (ka ^ ia & (ja ^ ka)) + 883997877 | 0;
            la = ka;
            ka = ja;
            ja = ia;
            ia = ha + ma | 0;
            ha = ga;
            ga = fa;
            fa = ea;
            ea = ma + (fa & ga ^ ha & (fa ^ ga)) + (fa >>> 2 ^ fa >>> 13 ^ fa >>> 22 ^ fa << 30 ^ fa << 19 ^ fa << 10) | 0;
            U = ma = (V >>> 7 ^ V >>> 18 ^ V >>> 3 ^ V << 25 ^ V << 14) + (S >>> 17 ^ S >>> 19 ^ S >>> 10 ^ S << 15 ^ S << 13) + U + ba | 0;
            ma = ma + la + (ia >>> 6 ^ ia >>> 11 ^ ia >>> 25 ^ ia << 26 ^ ia << 21 ^ ia << 7) + (ka ^ ia & (ja ^ ka)) + 958139571 | 0;
            la = ka;
            ka = ja;
            ja = ia;
            ia = ha + ma | 0;
            ha = ga;
            ga = fa;
            fa = ea;
            ea = ma + (fa & ga ^ ha & (fa ^ ga)) + (fa >>> 2 ^ fa >>> 13 ^ fa >>> 22 ^ fa << 30 ^ fa << 19 ^ fa << 10) | 0;
            V = ma = (W >>> 7 ^ W >>> 18 ^ W >>> 3 ^ W << 25 ^ W << 14) + (T >>> 17 ^ T >>> 19 ^ T >>> 10 ^ T << 15 ^ T << 13) + V + ca | 0;
            ma = ma + la + (ia >>> 6 ^ ia >>> 11 ^ ia >>> 25 ^ ia << 26 ^ ia << 21 ^ ia << 7) + (ka ^ ia & (ja ^ ka)) + 1322822218 | 0;
            la = ka;
            ka = ja;
            ja = ia;
            ia = ha + ma | 0;
            ha = ga;
            ga = fa;
            fa = ea;
            ea = ma + (fa & ga ^ ha & (fa ^ ga)) + (fa >>> 2 ^ fa >>> 13 ^ fa >>> 22 ^ fa << 30 ^ fa << 19 ^ fa << 10) | 0;
            W = ma = (X >>> 7 ^ X >>> 18 ^ X >>> 3 ^ X << 25 ^ X << 14) + (U >>> 17 ^ U >>> 19 ^ U >>> 10 ^ U << 15 ^ U << 13) + W + da | 0;
            ma = ma + la + (ia >>> 6 ^ ia >>> 11 ^ ia >>> 25 ^ ia << 26 ^ ia << 21 ^ ia << 7) + (ka ^ ia & (ja ^ ka)) + 1537002063 | 0;
            la = ka;
            ka = ja;
            ja = ia;
            ia = ha + ma | 0;
            ha = ga;
            ga = fa;
            fa = ea;
            ea = ma + (fa & ga ^ ha & (fa ^ ga)) + (fa >>> 2 ^ fa >>> 13 ^ fa >>> 22 ^ fa << 30 ^ fa << 19 ^ fa << 10) | 0;
            X = ma = (Y >>> 7 ^ Y >>> 18 ^ Y >>> 3 ^ Y << 25 ^ Y << 14) + (V >>> 17 ^ V >>> 19 ^ V >>> 10 ^ V << 15 ^ V << 13) + X + Q | 0;
            ma = ma + la + (ia >>> 6 ^ ia >>> 11 ^ ia >>> 25 ^ ia << 26 ^ ia << 21 ^ ia << 7) + (ka ^ ia & (ja ^ ka)) + 1747873779 | 0;
            la = ka;
            ka = ja;
            ja = ia;
            ia = ha + ma | 0;
            ha = ga;
            ga = fa;
            fa = ea;
            ea = ma + (fa & ga ^ ha & (fa ^ ga)) + (fa >>> 2 ^ fa >>> 13 ^ fa >>> 22 ^ fa << 30 ^ fa << 19 ^ fa << 10) | 0;
            Y = ma = (Z >>> 7 ^ Z >>> 18 ^ Z >>> 3 ^ Z << 25 ^ Z << 14) + (W >>> 17 ^ W >>> 19 ^ W >>> 10 ^ W << 15 ^ W << 13) + Y + R | 0;
            ma = ma + la + (ia >>> 6 ^ ia >>> 11 ^ ia >>> 25 ^ ia << 26 ^ ia << 21 ^ ia << 7) + (ka ^ ia & (ja ^ ka)) + 1955562222 | 0;
            la = ka;
            ka = ja;
            ja = ia;
            ia = ha + ma | 0;
            ha = ga;
            ga = fa;
            fa = ea;
            ea = ma + (fa & ga ^ ha & (fa ^ ga)) + (fa >>> 2 ^ fa >>> 13 ^ fa >>> 22 ^ fa << 30 ^ fa << 19 ^ fa << 10) | 0;
            Z = ma = ($ >>> 7 ^ $ >>> 18 ^ $ >>> 3 ^ $ << 25 ^ $ << 14) + (X >>> 17 ^ X >>> 19 ^ X >>> 10 ^ X << 15 ^ X << 13) + Z + S | 0;
            ma = ma + la + (ia >>> 6 ^ ia >>> 11 ^ ia >>> 25 ^ ia << 26 ^ ia << 21 ^ ia << 7) + (ka ^ ia & (ja ^ ka)) + 2024104815 | 0;
            la = ka;
            ka = ja;
            ja = ia;
            ia = ha + ma | 0;
            ha = ga;
            ga = fa;
            fa = ea;
            ea = ma + (fa & ga ^ ha & (fa ^ ga)) + (fa >>> 2 ^ fa >>> 13 ^ fa >>> 22 ^ fa << 30 ^ fa << 19 ^ fa << 10) | 0;
            $ = ma = (_ >>> 7 ^ _ >>> 18 ^ _ >>> 3 ^ _ << 25 ^ _ << 14) + (Y >>> 17 ^ Y >>> 19 ^ Y >>> 10 ^ Y << 15 ^ Y << 13) + $ + T | 0;
            ma = ma + la + (ia >>> 6 ^ ia >>> 11 ^ ia >>> 25 ^ ia << 26 ^ ia << 21 ^ ia << 7) + (ka ^ ia & (ja ^ ka)) + 2227730452 | 0;
            la = ka;
            ka = ja;
            ja = ia;
            ia = ha + ma | 0;
            ha = ga;
            ga = fa;
            fa = ea;
            ea = ma + (fa & ga ^ ha & (fa ^ ga)) + (fa >>> 2 ^ fa >>> 13 ^ fa >>> 22 ^ fa << 30 ^ fa << 19 ^ fa << 10) | 0;
            _ = ma = (aa >>> 7 ^ aa >>> 18 ^ aa >>> 3 ^ aa << 25 ^ aa << 14) + (Z >>> 17 ^ Z >>> 19 ^ Z >>> 10 ^ Z << 15 ^ Z << 13) + _ + U | 0;
            ma = ma + la + (ia >>> 6 ^ ia >>> 11 ^ ia >>> 25 ^ ia << 26 ^ ia << 21 ^ ia << 7) + (ka ^ ia & (ja ^ ka)) + 2361852424 | 0;
            la = ka;
            ka = ja;
            ja = ia;
            ia = ha + ma | 0;
            ha = ga;
            ga = fa;
            fa = ea;
            ea = ma + (fa & ga ^ ha & (fa ^ ga)) + (fa >>> 2 ^ fa >>> 13 ^ fa >>> 22 ^ fa << 30 ^ fa << 19 ^ fa << 10) | 0;
            aa = ma = (ba >>> 7 ^ ba >>> 18 ^ ba >>> 3 ^ ba << 25 ^ ba << 14) + ($ >>> 17 ^ $ >>> 19 ^ $ >>> 10 ^ $ << 15 ^ $ << 13) + aa + V | 0;
            ma = ma + la + (ia >>> 6 ^ ia >>> 11 ^ ia >>> 25 ^ ia << 26 ^ ia << 21 ^ ia << 7) + (ka ^ ia & (ja ^ ka)) + 2428436474 | 0;
            la = ka;
            ka = ja;
            ja = ia;
            ia = ha + ma | 0;
            ha = ga;
            ga = fa;
            fa = ea;
            ea = ma + (fa & ga ^ ha & (fa ^ ga)) + (fa >>> 2 ^ fa >>> 13 ^ fa >>> 22 ^ fa << 30 ^ fa << 19 ^ fa << 10) | 0;
            ba = ma = (ca >>> 7 ^ ca >>> 18 ^ ca >>> 3 ^ ca << 25 ^ ca << 14) + (_ >>> 17 ^ _ >>> 19 ^ _ >>> 10 ^ _ << 15 ^ _ << 13) + ba + W | 0;
            ma = ma + la + (ia >>> 6 ^ ia >>> 11 ^ ia >>> 25 ^ ia << 26 ^ ia << 21 ^ ia << 7) + (ka ^ ia & (ja ^ ka)) + 2756734187 | 0;
            la = ka;
            ka = ja;
            ja = ia;
            ia = ha + ma | 0;
            ha = ga;
            ga = fa;
            fa = ea;
            ea = ma + (fa & ga ^ ha & (fa ^ ga)) + (fa >>> 2 ^ fa >>> 13 ^ fa >>> 22 ^ fa << 30 ^ fa << 19 ^ fa << 10) | 0;
            ca = ma = (da >>> 7 ^ da >>> 18 ^ da >>> 3 ^ da << 25 ^ da << 14) + (aa >>> 17 ^ aa >>> 19 ^ aa >>> 10 ^ aa << 15 ^ aa << 13) + ca + X | 0;
            ma = ma + la + (ia >>> 6 ^ ia >>> 11 ^ ia >>> 25 ^ ia << 26 ^ ia << 21 ^ ia << 7) + (ka ^ ia & (ja ^ ka)) + 3204031479 | 0;
            la = ka;
            ka = ja;
            ja = ia;
            ia = ha + ma | 0;
            ha = ga;
            ga = fa;
            fa = ea;
            ea = ma + (fa & ga ^ ha & (fa ^ ga)) + (fa >>> 2 ^ fa >>> 13 ^ fa >>> 22 ^ fa << 30 ^ fa << 19 ^ fa << 10) | 0;
            da = ma = (Q >>> 7 ^ Q >>> 18 ^ Q >>> 3 ^ Q << 25 ^ Q << 14) + (ba >>> 17 ^ ba >>> 19 ^ ba >>> 10 ^ ba << 15 ^ ba << 13) + da + Y | 0;
            ma = ma + la + (ia >>> 6 ^ ia >>> 11 ^ ia >>> 25 ^ ia << 26 ^ ia << 21 ^ ia << 7) + (ka ^ ia & (ja ^ ka)) + 3329325298 | 0;
            la = ka;
            ka = ja;
            ja = ia;
            ia = ha + ma | 0;
            ha = ga;
            ga = fa;
            fa = ea;
            ea = ma + (fa & ga ^ ha & (fa ^ ga)) + (fa >>> 2 ^ fa >>> 13 ^ fa >>> 22 ^ fa << 30 ^ fa << 19 ^ fa << 10) | 0;
            d = d + ea | 0;
            e = e + fa | 0;
            f = f + ga | 0;
            g = g + ha | 0;
            h = h + ia | 0;
            i = i + ja | 0;
            j = j + ka | 0;
            k = k + la | 0
        }

        function F(Q) {
            Q = Q | 0;
            E(D[Q | 0] << 24 | D[Q | 1] << 16 | D[Q | 2] << 8 | D[Q | 3], D[Q | 4] << 24 | D[Q | 5] << 16 | D[Q | 6] << 8 | D[Q | 7], D[Q | 8] << 24 | D[Q | 9] << 16 | D[Q | 10] << 8 | D[Q | 11], D[Q | 12] << 24 | D[Q | 13] << 16 | D[Q | 14] << 8 | D[Q | 15], D[Q | 16] << 24 | D[Q | 17] << 16 | D[Q | 18] << 8 | D[Q | 19], D[Q | 20] << 24 | D[Q | 21] << 16 | D[Q | 22] << 8 | D[Q | 23], D[Q | 24] << 24 | D[Q | 25] << 16 | D[Q | 26] << 8 | D[Q | 27], D[Q | 28] << 24 | D[Q | 29] << 16 | D[Q | 30] << 8 | D[Q | 31], D[Q | 32] << 24 | D[Q | 33] << 16 | D[Q | 34] << 8 | D[Q | 35], D[Q | 36] << 24 | D[Q | 37] << 16 | D[Q | 38] << 8 | D[Q | 39], D[Q | 40] << 24 | D[Q | 41] << 16 | D[Q | 42] << 8 | D[Q | 43], D[Q | 44] << 24 | D[Q | 45] << 16 | D[Q | 46] << 8 | D[Q | 47], D[Q | 48] << 24 | D[Q | 49] << 16 | D[Q | 50] << 8 | D[Q | 51], D[Q | 52] << 24 | D[Q | 53] << 16 | D[Q | 54] << 8 | D[Q | 55], D[Q | 56] << 24 | D[Q | 57] << 16 | D[Q | 58] << 8 | D[Q | 59], D[Q | 60] << 24 | D[Q | 61] << 16 | D[Q | 62] << 8 | D[Q | 63])
        }

        function G(Q) {
            Q = Q | 0;
            D[Q | 0] = d >>> 24;
            D[Q | 1] = d >>> 16 & 255;
            D[Q | 2] = d >>> 8 & 255;
            D[Q | 3] = d & 255;
            D[Q | 4] = e >>> 24;
            D[Q | 5] = e >>> 16 & 255;
            D[Q | 6] = e >>> 8 & 255;
            D[Q | 7] = e & 255;
            D[Q | 8] = f >>> 24;
            D[Q | 9] = f >>> 16 & 255;
            D[Q | 10] = f >>> 8 & 255;
            D[Q | 11] = f & 255;
            D[Q | 12] = g >>> 24;
            D[Q | 13] = g >>> 16 & 255;
            D[Q | 14] = g >>> 8 & 255;
            D[Q | 15] = g & 255;
            D[Q | 16] = h >>> 24;
            D[Q | 17] = h >>> 16 & 255;
            D[Q | 18] = h >>> 8 & 255;
            D[Q | 19] = h & 255;
            D[Q | 20] = i >>> 24;
            D[Q | 21] = i >>> 16 & 255;
            D[Q | 22] = i >>> 8 & 255;
            D[Q | 23] = i & 255;
            D[Q | 24] = j >>> 24;
            D[Q | 25] = j >>> 16 & 255;
            D[Q | 26] = j >>> 8 & 255;
            D[Q | 27] = j & 255;
            D[Q | 28] = k >>> 24;
            D[Q | 29] = k >>> 16 & 255;
            D[Q | 30] = k >>> 8 & 255;
            D[Q | 31] = k & 255
        }

        function H() {
            d = 1779033703;
            e = 3144134277;
            f = 1013904242;
            g = 2773480762;
            h = 1359893119;
            i = 2600822924;
            j = 528734635;
            k = 1541459225;
            l = m = 0
        }

        function I(Q, R, S, T, U, V, W, X, Y, Z) {
            Q = Q | 0;
            R = R | 0;
            S = S | 0;
            T = T | 0;
            U = U | 0;
            V = V | 0;
            W = W | 0;
            X = X | 0;
            Y = Y | 0;
            Z = Z | 0;
            d = Q;
            e = R;
            f = S;
            g = T;
            h = U;
            i = V;
            j = W;
            k = X;
            l = Y;
            m = Z
        }

        function J(Q, R) {
            Q = Q | 0;
            R = R | 0;
            var S = 0;
            if (Q & 63) return -1;
            while ((R | 0) >= 64) {
                F(Q);
                Q = Q + 64 | 0;
                R = R - 64 | 0;
                S = S + 64 | 0
            }
            l = l + S | 0;
            if (l >>> 0 < S >>> 0) m = m + 1 | 0;
            return S | 0
        }

        function K(Q, R, S) {
            Q = Q | 0;
            R = R | 0;
            S = S | 0;
            var T = 0,
                U = 0;
            if (Q & 63) return -1;
            if (~S)
                if (S & 31) return -1;
            if ((R | 0) >= 64) {
                T = J(Q, R) | 0;
                if ((T | 0) == -1) return -1;
                Q = Q + T | 0;
                R = R - T | 0
            }
            T = T + R | 0;
            l = l + R | 0;
            if (l >>> 0 < R >>> 0) m = m + 1 | 0;
            D[Q | R] = 128;
            if ((R | 0) >= 56) {
                for (U = R + 1 | 0;
                    (U | 0) < 64; U = U + 1 | 0) D[Q | U] = 0;
                F(Q);
                R = 0;
                D[Q | 0] = 0
            }
            for (U = R + 1 | 0;
                (U | 0) < 59; U = U + 1 | 0) D[Q | U] = 0;
            D[Q | 56] = m >>> 21 & 255;
            D[Q | 57] = m >>> 13 & 255;
            D[Q | 58] = m >>> 5 & 255;
            D[Q | 59] = m << 3 & 255 | l >>> 29;
            D[Q | 60] = l >>> 21 & 255;
            D[Q | 61] = l >>> 13 & 255;
            D[Q | 62] = l >>> 5 & 255;
            D[Q | 63] = l << 3 & 255;
            F(Q);
            if (~S) G(S);
            return T | 0
        }

        function L() {
            d = n;
            e = o;
            f = p;
            g = q;
            h = r;
            i = s;
            j = t;
            k = u;
            l = 64;
            m = 0
        }

        function M() {
            d = v;
            e = w;
            f = x;
            g = y;
            h = z;
            i = A;
            j = B;
            k = C;
            l = 64;
            m = 0
        }

        function N(Q, R, S, T, U, V, W, X, Y, Z, $, _, aa, ba, ca, da) {
            Q = Q | 0;
            R = R | 0;
            S = S | 0;
            T = T | 0;
            U = U | 0;
            V = V | 0;
            W = W | 0;
            X = X | 0;
            Y = Y | 0;
            Z = Z | 0;
            $ = $ | 0;
            _ = _ | 0;
            aa = aa | 0;
            ba = ba | 0;
            ca = ca | 0;
            da = da | 0;
            H();
            E(Q ^ 1549556828, R ^ 1549556828, S ^ 1549556828, T ^ 1549556828, U ^ 1549556828, V ^ 1549556828, W ^ 1549556828, X ^ 1549556828, Y ^ 1549556828, Z ^ 1549556828, $ ^ 1549556828, _ ^ 1549556828, aa ^ 1549556828, ba ^ 1549556828, ca ^ 1549556828, da ^ 1549556828);
            v = d;
            w = e;
            x = f;
            y = g;
            z = h;
            A = i;
            B = j;
            C = k;
            H();
            E(Q ^ 909522486, R ^ 909522486, S ^ 909522486, T ^ 909522486, U ^ 909522486, V ^ 909522486, W ^ 909522486, X ^ 909522486, Y ^ 909522486, Z ^ 909522486, $ ^ 909522486, _ ^ 909522486, aa ^ 909522486, ba ^ 909522486, ca ^ 909522486, da ^ 909522486);
            n = d;
            o = e;
            p = f;
            q = g;
            r = h;
            s = i;
            t = j;
            u = k;
            l = 64;
            m = 0
        }

        function O(Q, R, S) {
            Q = Q | 0;
            R = R | 0;
            S = S | 0;
            var T = 0,
                U = 0,
                V = 0,
                W = 0,
                X = 0,
                Y = 0,
                Z = 0,
                $ = 0,
                _ = 0;
            if (Q & 63) return -1;
            if (~S)
                if (S & 31) return -1;
            _ = K(Q, R, -1) | 0;
            T = d, U = e, V = f, W = g, X = h, Y = i, Z = j, $ = k;
            M();
            E(T, U, V, W, X, Y, Z, $, 2147483648, 0, 0, 0, 0, 0, 0, 768);
            if (~S) G(S);
            return _ | 0
        }

        function P(Q, R, S, T, U) {
            Q = Q | 0;
            R = R | 0;
            S = S | 0;
            T = T | 0;
            U = U | 0;
            var V = 0,
                W = 0,
                X = 0,
                Y = 0,
                Z = 0,
                $ = 0,
                _ = 0,
                aa = 0,
                ba = 0,
                ca = 0,
                da = 0,
                ea = 0,
                fa = 0,
                ga = 0,
                ha = 0,
                ia = 0;
            if (Q & 63) return -1;
            if (~U)
                if (U & 31) return -1;
            D[Q + R | 0] = S >>> 24;
            D[Q + R + 1 | 0] = S >>> 16 & 255;
            D[Q + R + 2 | 0] = S >>> 8 & 255;
            D[Q + R + 3 | 0] = S & 255;
            O(Q, R + 4 | 0, -1) | 0;
            V = ba = d, W = ca = e, X = da = f, Y = ea = g, Z = fa = h, $ = ga = i, _ = ha = j, aa = ia = k;
            T = T - 1 | 0;
            while ((T | 0) > 0) {
                L();
                E(ba, ca, da, ea, fa, ga, ha, ia, 2147483648, 0, 0, 0, 0, 0, 0, 768);
                ba = d, ca = e, da = f, ea = g, fa = h, ga = i, ha = j, ia = k;
                M();
                E(ba, ca, da, ea, fa, ga, ha, ia, 2147483648, 0, 0, 0, 0, 0, 0, 768);
                ba = d, ca = e, da = f, ea = g, fa = h, ga = i, ha = j, ia = k;
                V = V ^ d;
                W = W ^ e;
                X = X ^ f;
                Y = Y ^ g;
                Z = Z ^ h;
                $ = $ ^ i;
                _ = _ ^ j;
                aa = aa ^ k;
                T = T - 1 | 0
            }
            d = V;
            e = W;
            f = X;
            g = Y;
            h = Z;
            i = $;
            j = _;
            k = aa;
            if (~U) G(U);
            return 0
        }
        return {
            reset: H,
            init: I,
            process: J,
            finish: K,
            hmac_reset: L,
            hmac_init: N,
            hmac_finish: O,
            pbkdf2_generate_block: P
        }
    }

    function la(a) {
        a = a || {}, this.heap = r(Uint8Array, a), this.asm = a.asm || ka({
            Uint8Array: Uint8Array
        }, null, this.heap.buffer), this.BLOCK_SIZE = Oc, this.HASH_SIZE = Pc, this.reset()
    }

    function ma() {
        return null === Rc && (Rc = new la({
            heapSize: 1048576
        })), Rc
    }

    function na(a) {
        if (void 0 === a) throw new SyntaxError("data required");
        return ma().reset().process(a).finish().result
    }

    function oa(a) {
        var b = na(a);
        return j(b)
    }

    function pa(a) {
        var b = na(a);
        return k(b)
    }

    function qa(a, b, c) {
        "use asm";
        var d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0,
            q = 0,
            r = 0,
            s = 0,
            t = 0,
            u = 0;
        var v = 0,
            w = 0,
            x = 0,
            y = 0,
            z = 0,
            A = 0,
            B = 0,
            C = 0,
            D = 0,
            E = 0,
            F = 0,
            G = 0,
            H = 0,
            I = 0,
            J = 0,
            K = 0,
            L = 0,
            M = 0,
            N = 0,
            O = 0,
            P = 0,
            Q = 0,
            R = 0,
            S = 0,
            T = 0,
            U = 0,
            V = 0,
            W = 0,
            X = 0,
            Y = 0,
            Z = 0,
            $ = 0;
        var _ = new a.Uint8Array(c);

        function aa(ma, na, oa, pa, qa, ra, sa, ta, ua, va, wa, xa, ya, za, Aa, Ba, Ca, Da, Ea, Fa, Ga, Ha, Ia, Ja, Ka, La, Ma, Na, Oa, Pa, Qa, Ra) {
            ma = ma | 0;
            na = na | 0;
            oa = oa | 0;
            pa = pa | 0;
            qa = qa | 0;
            ra = ra | 0;
            sa = sa | 0;
            ta = ta | 0;
            ua = ua | 0;
            va = va | 0;
            wa = wa | 0;
            xa = xa | 0;
            ya = ya | 0;
            za = za | 0;
            Aa = Aa | 0;
            Ba = Ba | 0;
            Ca = Ca | 0;
            Da = Da | 0;
            Ea = Ea | 0;
            Fa = Fa | 0;
            Ga = Ga | 0;
            Ha = Ha | 0;
            Ia = Ia | 0;
            Ja = Ja | 0;
            Ka = Ka | 0;
            La = La | 0;
            Ma = Ma | 0;
            Na = Na | 0;
            Oa = Oa | 0;
            Pa = Pa | 0;
            Qa = Qa | 0;
            Ra = Ra | 0;
            var Sa = 0,
                Ta = 0,
                Ua = 0,
                Va = 0,
                Wa = 0,
                Xa = 0,
                Ya = 0,
                Za = 0,
                $a = 0,
                _a = 0,
                ab = 0,
                bb = 0,
                cb = 0,
                db = 0,
                eb = 0,
                fb = 0,
                gb = 0,
                hb = 0,
                ib = 0;
            Sa = d;
            Ta = e;
            Ua = f;
            Va = g;
            Wa = h;
            Xa = i;
            Ya = j;
            Za = k;
            $a = l;
            _a = m;
            ab = n;
            bb = o;
            cb = p;
            db = q;
            eb = r;
            fb = s;
            hb = 3609767458 + na | 0;
            gb = 1116352408 + ma + (hb >>> 0 < na >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 602891725 + pa | 0;
            gb = 1899447441 + oa + (hb >>> 0 < pa >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 3964484399 + ra | 0;
            gb = 3049323471 + qa + (hb >>> 0 < ra >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 2173295548 + ta | 0;
            gb = 3921009573 + sa + (hb >>> 0 < ta >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 4081628472 + va | 0;
            gb = 961987163 + ua + (hb >>> 0 < va >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 3053834265 + xa | 0;
            gb = 1508970993 + wa + (hb >>> 0 < xa >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 2937671579 + za | 0;
            gb = 2453635748 + ya + (hb >>> 0 < za >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 3664609560 + Ba | 0;
            gb = 2870763221 + Aa + (hb >>> 0 < Ba >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 2734883394 + Da | 0;
            gb = 3624381080 + Ca + (hb >>> 0 < Da >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 1164996542 + Fa | 0;
            gb = 310598401 + Ea + (hb >>> 0 < Fa >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 1323610764 + Ha | 0;
            gb = 607225278 + Ga + (hb >>> 0 < Ha >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 3590304994 + Ja | 0;
            gb = 1426881987 + Ia + (hb >>> 0 < Ja >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 4068182383 + La | 0;
            gb = 1925078388 + Ka + (hb >>> 0 < La >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 991336113 + Na | 0;
            gb = 2162078206 + Ma + (hb >>> 0 < Na >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 633803317 + Pa | 0;
            gb = 2614888103 + Oa + (hb >>> 0 < Pa >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 3479774868 + Ra | 0;
            gb = 3248222580 + Qa + (hb >>> 0 < Ra >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            na = na + Fa | 0;
            ma = ma + Ea + (na >>> 0 < Fa >>> 0 ? 1 : 0) | 0;
            ib = (pa >>> 1 | oa << 31) ^ (pa >>> 8 | oa << 24) ^ (pa >>> 7 | oa << 25) | 0;
            na = na + ib | 0;
            ma = ma + ((oa >>> 1 | pa << 31) ^ (oa >>> 8 | pa << 24) ^ oa >>> 7) + (na >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = (Pa >>> 19 | Oa << 13) ^ (Pa << 3 | Oa >>> 29) ^ (Pa >>> 6 | Oa << 26) | 0;
            na = na + ib | 0;
            ma = ma + ((Oa >>> 19 | Pa << 13) ^ (Oa << 3 | Pa >>> 29) ^ Oa >>> 6) + (na >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 2666613458 + na | 0;
            gb = 3835390401 + ma + (hb >>> 0 < na >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            pa = pa + Ha | 0;
            oa = oa + Ga + (pa >>> 0 < Ha >>> 0 ? 1 : 0) | 0;
            ib = (ra >>> 1 | qa << 31) ^ (ra >>> 8 | qa << 24) ^ (ra >>> 7 | qa << 25) | 0;
            pa = pa + ib | 0;
            oa = oa + ((qa >>> 1 | ra << 31) ^ (qa >>> 8 | ra << 24) ^ qa >>> 7) + (pa >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = (Ra >>> 19 | Qa << 13) ^ (Ra << 3 | Qa >>> 29) ^ (Ra >>> 6 | Qa << 26) | 0;
            pa = pa + ib | 0;
            oa = oa + ((Qa >>> 19 | Ra << 13) ^ (Qa << 3 | Ra >>> 29) ^ Qa >>> 6) + (pa >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 944711139 + pa | 0;
            gb = 4022224774 + oa + (hb >>> 0 < pa >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ra = ra + Ja | 0;
            qa = qa + Ia + (ra >>> 0 < Ja >>> 0 ? 1 : 0) | 0;
            ib = (ta >>> 1 | sa << 31) ^ (ta >>> 8 | sa << 24) ^ (ta >>> 7 | sa << 25) | 0;
            ra = ra + ib | 0;
            qa = qa + ((sa >>> 1 | ta << 31) ^ (sa >>> 8 | ta << 24) ^ sa >>> 7) + (ra >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = (na >>> 19 | ma << 13) ^ (na << 3 | ma >>> 29) ^ (na >>> 6 | ma << 26) | 0;
            ra = ra + ib | 0;
            qa = qa + ((ma >>> 19 | na << 13) ^ (ma << 3 | na >>> 29) ^ ma >>> 6) + (ra >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 2341262773 + ra | 0;
            gb = 264347078 + qa + (hb >>> 0 < ra >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ta = ta + La | 0;
            sa = sa + Ka + (ta >>> 0 < La >>> 0 ? 1 : 0) | 0;
            ib = (va >>> 1 | ua << 31) ^ (va >>> 8 | ua << 24) ^ (va >>> 7 | ua << 25) | 0;
            ta = ta + ib | 0;
            sa = sa + ((ua >>> 1 | va << 31) ^ (ua >>> 8 | va << 24) ^ ua >>> 7) + (ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = (pa >>> 19 | oa << 13) ^ (pa << 3 | oa >>> 29) ^ (pa >>> 6 | oa << 26) | 0;
            ta = ta + ib | 0;
            sa = sa + ((oa >>> 19 | pa << 13) ^ (oa << 3 | pa >>> 29) ^ oa >>> 6) + (ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 2007800933 + ta | 0;
            gb = 604807628 + sa + (hb >>> 0 < ta >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            va = va + Na | 0;
            ua = ua + Ma + (va >>> 0 < Na >>> 0 ? 1 : 0) | 0;
            ib = (xa >>> 1 | wa << 31) ^ (xa >>> 8 | wa << 24) ^ (xa >>> 7 | wa << 25) | 0;
            va = va + ib | 0;
            ua = ua + ((wa >>> 1 | xa << 31) ^ (wa >>> 8 | xa << 24) ^ wa >>> 7) + (va >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = (ra >>> 19 | qa << 13) ^ (ra << 3 | qa >>> 29) ^ (ra >>> 6 | qa << 26) | 0;
            va = va + ib | 0;
            ua = ua + ((qa >>> 19 | ra << 13) ^ (qa << 3 | ra >>> 29) ^ qa >>> 6) + (va >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 1495990901 + va | 0;
            gb = 770255983 + ua + (hb >>> 0 < va >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;

            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            xa = xa + Pa | 0;
            wa = wa + Oa + (xa >>> 0 < Pa >>> 0 ? 1 : 0) | 0;
            ib = (za >>> 1 | ya << 31) ^ (za >>> 8 | ya << 24) ^ (za >>> 7 | ya << 25) | 0;
            xa = xa + ib | 0;
            wa = wa + ((ya >>> 1 | za << 31) ^ (ya >>> 8 | za << 24) ^ ya >>> 7) + (xa >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = (ta >>> 19 | sa << 13) ^ (ta << 3 | sa >>> 29) ^ (ta >>> 6 | sa << 26) | 0;
            xa = xa + ib | 0;
            wa = wa + ((sa >>> 19 | ta << 13) ^ (sa << 3 | ta >>> 29) ^ sa >>> 6) + (xa >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 1856431235 + xa | 0;
            gb = 1249150122 + wa + (hb >>> 0 < xa >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            za = za + Ra | 0;
            ya = ya + Qa + (za >>> 0 < Ra >>> 0 ? 1 : 0) | 0;
            ib = (Ba >>> 1 | Aa << 31) ^ (Ba >>> 8 | Aa << 24) ^ (Ba >>> 7 | Aa << 25) | 0;
            za = za + ib | 0;
            ya = ya + ((Aa >>> 1 | Ba << 31) ^ (Aa >>> 8 | Ba << 24) ^ Aa >>> 7) + (za >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = (va >>> 19 | ua << 13) ^ (va << 3 | ua >>> 29) ^ (va >>> 6 | ua << 26) | 0;
            za = za + ib | 0;
            ya = ya + ((ua >>> 19 | va << 13) ^ (ua << 3 | va >>> 29) ^ ua >>> 6) + (za >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 3175218132 + za | 0;
            gb = 1555081692 + ya + (hb >>> 0 < za >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            Ba = Ba + na | 0;
            Aa = Aa + ma + (Ba >>> 0 < na >>> 0 ? 1 : 0) | 0;
            ib = (Da >>> 1 | Ca << 31) ^ (Da >>> 8 | Ca << 24) ^ (Da >>> 7 | Ca << 25) | 0;
            Ba = Ba + ib | 0;
            Aa = Aa + ((Ca >>> 1 | Da << 31) ^ (Ca >>> 8 | Da << 24) ^ Ca >>> 7) + (Ba >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = (xa >>> 19 | wa << 13) ^ (xa << 3 | wa >>> 29) ^ (xa >>> 6 | wa << 26) | 0;
            Ba = Ba + ib | 0;
            Aa = Aa + ((wa >>> 19 | xa << 13) ^ (wa << 3 | xa >>> 29) ^ wa >>> 6) + (Ba >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 2198950837 + Ba | 0;
            gb = 1996064986 + Aa + (hb >>> 0 < Ba >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            Da = Da + pa | 0;
            Ca = Ca + oa + (Da >>> 0 < pa >>> 0 ? 1 : 0) | 0;
            ib = (Fa >>> 1 | Ea << 31) ^ (Fa >>> 8 | Ea << 24) ^ (Fa >>> 7 | Ea << 25) | 0;
            Da = Da + ib | 0;
            Ca = Ca + ((Ea >>> 1 | Fa << 31) ^ (Ea >>> 8 | Fa << 24) ^ Ea >>> 7) + (Da >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = (za >>> 19 | ya << 13) ^ (za << 3 | ya >>> 29) ^ (za >>> 6 | ya << 26) | 0;
            Da = Da + ib | 0;
            Ca = Ca + ((ya >>> 19 | za << 13) ^ (ya << 3 | za >>> 29) ^ ya >>> 6) + (Da >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 3999719339 + Da | 0;
            gb = 2554220882 + Ca + (hb >>> 0 < Da >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            Fa = Fa + ra | 0;
            Ea = Ea + qa + (Fa >>> 0 < ra >>> 0 ? 1 : 0) | 0;
            ib = (Ha >>> 1 | Ga << 31) ^ (Ha >>> 8 | Ga << 24) ^ (Ha >>> 7 | Ga << 25) | 0;
            Fa = Fa + ib | 0;
            Ea = Ea + ((Ga >>> 1 | Ha << 31) ^ (Ga >>> 8 | Ha << 24) ^ Ga >>> 7) + (Fa >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = (Ba >>> 19 | Aa << 13) ^ (Ba << 3 | Aa >>> 29) ^ (Ba >>> 6 | Aa << 26) | 0;
            Fa = Fa + ib | 0;
            Ea = Ea + ((Aa >>> 19 | Ba << 13) ^ (Aa << 3 | Ba >>> 29) ^ Aa >>> 6) + (Fa >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 766784016 + Fa | 0;
            gb = 2821834349 + Ea + (hb >>> 0 < Fa >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            Ha = Ha + ta | 0;
            Ga = Ga + sa + (Ha >>> 0 < ta >>> 0 ? 1 : 0) | 0;
            ib = (Ja >>> 1 | Ia << 31) ^ (Ja >>> 8 | Ia << 24) ^ (Ja >>> 7 | Ia << 25) | 0;
            Ha = Ha + ib | 0;
            Ga = Ga + ((Ia >>> 1 | Ja << 31) ^ (Ia >>> 8 | Ja << 24) ^ Ia >>> 7) + (Ha >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = (Da >>> 19 | Ca << 13) ^ (Da << 3 | Ca >>> 29) ^ (Da >>> 6 | Ca << 26) | 0;
            Ha = Ha + ib | 0;
            Ga = Ga + ((Ca >>> 19 | Da << 13) ^ (Ca << 3 | Da >>> 29) ^ Ca >>> 6) + (Ha >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 2566594879 + Ha | 0;
            gb = 2952996808 + Ga + (hb >>> 0 < Ha >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            Ja = Ja + va | 0;
            Ia = Ia + ua + (Ja >>> 0 < va >>> 0 ? 1 : 0) | 0;
            ib = (La >>> 1 | Ka << 31) ^ (La >>> 8 | Ka << 24) ^ (La >>> 7 | Ka << 25) | 0;
            Ja = Ja + ib | 0;
            Ia = Ia + ((Ka >>> 1 | La << 31) ^ (Ka >>> 8 | La << 24) ^ Ka >>> 7) + (Ja >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = (Fa >>> 19 | Ea << 13) ^ (Fa << 3 | Ea >>> 29) ^ (Fa >>> 6 | Ea << 26) | 0;
            Ja = Ja + ib | 0;
            Ia = Ia + ((Ea >>> 19 | Fa << 13) ^ (Ea << 3 | Fa >>> 29) ^ Ea >>> 6) + (Ja >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 3203337956 + Ja | 0;
            gb = 3210313671 + Ia + (hb >>> 0 < Ja >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            La = La + xa | 0;
            Ka = Ka + wa + (La >>> 0 < xa >>> 0 ? 1 : 0) | 0;
            ib = (Na >>> 1 | Ma << 31) ^ (Na >>> 8 | Ma << 24) ^ (Na >>> 7 | Ma << 25) | 0;
            La = La + ib | 0;
            Ka = Ka + ((Ma >>> 1 | Na << 31) ^ (Ma >>> 8 | Na << 24) ^ Ma >>> 7) + (La >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = (Ha >>> 19 | Ga << 13) ^ (Ha << 3 | Ga >>> 29) ^ (Ha >>> 6 | Ga << 26) | 0;
            La = La + ib | 0;
            Ka = Ka + ((Ga >>> 19 | Ha << 13) ^ (Ga << 3 | Ha >>> 29) ^ Ga >>> 6) + (La >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 1034457026 + La | 0;
            gb = 3336571891 + Ka + (hb >>> 0 < La >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            Na = Na + za | 0;
            Ma = Ma + ya + (Na >>> 0 < za >>> 0 ? 1 : 0) | 0;
            ib = (Pa >>> 1 | Oa << 31) ^ (Pa >>> 8 | Oa << 24) ^ (Pa >>> 7 | Oa << 25) | 0;
            Na = Na + ib | 0;
            Ma = Ma + ((Oa >>> 1 | Pa << 31) ^ (Oa >>> 8 | Pa << 24) ^ Oa >>> 7) + (Na >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = (Ja >>> 19 | Ia << 13) ^ (Ja << 3 | Ia >>> 29) ^ (Ja >>> 6 | Ia << 26) | 0;
            Na = Na + ib | 0;
            Ma = Ma + ((Ia >>> 19 | Ja << 13) ^ (Ia << 3 | Ja >>> 29) ^ Ia >>> 6) + (Na >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 2466948901 + Na | 0;
            gb = 3584528711 + Ma + (hb >>> 0 < Na >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            Pa = Pa + Ba | 0;
            Oa = Oa + Aa + (Pa >>> 0 < Ba >>> 0 ? 1 : 0) | 0;
            ib = (Ra >>> 1 | Qa << 31) ^ (Ra >>> 8 | Qa << 24) ^ (Ra >>> 7 | Qa << 25) | 0;
            Pa = Pa + ib | 0;
            Oa = Oa + ((Qa >>> 1 | Ra << 31) ^ (Qa >>> 8 | Ra << 24) ^ Qa >>> 7) + (Pa >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = (La >>> 19 | Ka << 13) ^ (La << 3 | Ka >>> 29) ^ (La >>> 6 | Ka << 26) | 0;
            Pa = Pa + ib | 0;
            Oa = Oa + ((Ka >>> 19 | La << 13) ^ (Ka << 3 | La >>> 29) ^ Ka >>> 6) + (Pa >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 3758326383 + Pa | 0;
            gb = 113926993 + Oa + (hb >>> 0 < Pa >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            Ra = Ra + Da | 0;
            Qa = Qa + Ca + (Ra >>> 0 < Da >>> 0 ? 1 : 0) | 0;
            ib = (na >>> 1 | ma << 31) ^ (na >>> 8 | ma << 24) ^ (na >>> 7 | ma << 25) | 0;
            Ra = Ra + ib | 0;
            Qa = Qa + ((ma >>> 1 | na << 31) ^ (ma >>> 8 | na << 24) ^ ma >>> 7) + (Ra >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = (Na >>> 19 | Ma << 13) ^ (Na << 3 | Ma >>> 29) ^ (Na >>> 6 | Ma << 26) | 0;
            Ra = Ra + ib | 0;
            Qa = Qa + ((Ma >>> 19 | Na << 13) ^ (Ma << 3 | Na >>> 29) ^ Ma >>> 6) + (Ra >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 168717936 + Ra | 0;
            gb = 338241895 + Qa + (hb >>> 0 < Ra >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            na = na + Fa | 0;
            ma = ma + Ea + (na >>> 0 < Fa >>> 0 ? 1 : 0) | 0;
            ib = (pa >>> 1 | oa << 31) ^ (pa >>> 8 | oa << 24) ^ (pa >>> 7 | oa << 25) | 0;
            na = na + ib | 0;
            ma = ma + ((oa >>> 1 | pa << 31) ^ (oa >>> 8 | pa << 24) ^ oa >>> 7) + (na >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = (Pa >>> 19 | Oa << 13) ^ (Pa << 3 | Oa >>> 29) ^ (Pa >>> 6 | Oa << 26) | 0;
            na = na + ib | 0;
            ma = ma + ((Oa >>> 19 | Pa << 13) ^ (Oa << 3 | Pa >>> 29) ^ Oa >>> 6) + (na >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 1188179964 + na | 0;
            gb = 666307205 + ma + (hb >>> 0 < na >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            pa = pa + Ha | 0;
            oa = oa + Ga + (pa >>> 0 < Ha >>> 0 ? 1 : 0) | 0;
            ib = (ra >>> 1 | qa << 31) ^ (ra >>> 8 | qa << 24) ^ (ra >>> 7 | qa << 25) | 0;
            pa = pa + ib | 0;
            oa = oa + ((qa >>> 1 | ra << 31) ^ (qa >>> 8 | ra << 24) ^ qa >>> 7) + (pa >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = (Ra >>> 19 | Qa << 13) ^ (Ra << 3 | Qa >>> 29) ^ (Ra >>> 6 | Qa << 26) | 0;
            pa = pa + ib | 0;
            oa = oa + ((Qa >>> 19 | Ra << 13) ^ (Qa << 3 | Ra >>> 29) ^ Qa >>> 6) + (pa >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 1546045734 + pa | 0;
            gb = 773529912 + oa + (hb >>> 0 < pa >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ra = ra + Ja | 0;
            qa = qa + Ia + (ra >>> 0 < Ja >>> 0 ? 1 : 0) | 0;
            ib = (ta >>> 1 | sa << 31) ^ (ta >>> 8 | sa << 24) ^ (ta >>> 7 | sa << 25) | 0;
            ra = ra + ib | 0;
            qa = qa + ((sa >>> 1 | ta << 31) ^ (sa >>> 8 | ta << 24) ^ sa >>> 7) + (ra >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = (na >>> 19 | ma << 13) ^ (na << 3 | ma >>> 29) ^ (na >>> 6 | ma << 26) | 0;
            ra = ra + ib | 0;
            qa = qa + ((ma >>> 19 | na << 13) ^ (ma << 3 | na >>> 29) ^ ma >>> 6) + (ra >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 1522805485 + ra | 0;
            gb = 1294757372 + qa + (hb >>> 0 < ra >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ta = ta + La | 0;
            sa = sa + Ka + (ta >>> 0 < La >>> 0 ? 1 : 0) | 0;
            ib = (va >>> 1 | ua << 31) ^ (va >>> 8 | ua << 24) ^ (va >>> 7 | ua << 25) | 0;
            ta = ta + ib | 0;
            sa = sa + ((ua >>> 1 | va << 31) ^ (ua >>> 8 | va << 24) ^ ua >>> 7) + (ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = (pa >>> 19 | oa << 13) ^ (pa << 3 | oa >>> 29) ^ (pa >>> 6 | oa << 26) | 0;
            ta = ta + ib | 0;
            sa = sa + ((oa >>> 19 | pa << 13) ^ (oa << 3 | pa >>> 29) ^ oa >>> 6) + (ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 2643833823 + ta | 0;
            gb = 1396182291 + sa + (hb >>> 0 < ta >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            va = va + Na | 0;
            ua = ua + Ma + (va >>> 0 < Na >>> 0 ? 1 : 0) | 0;
            ib = (xa >>> 1 | wa << 31) ^ (xa >>> 8 | wa << 24) ^ (xa >>> 7 | wa << 25) | 0;
            va = va + ib | 0;
            ua = ua + ((wa >>> 1 | xa << 31) ^ (wa >>> 8 | xa << 24) ^ wa >>> 7) + (va >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = (ra >>> 19 | qa << 13) ^ (ra << 3 | qa >>> 29) ^ (ra >>> 6 | qa << 26) | 0;
            va = va + ib | 0;
            ua = ua + ((qa >>> 19 | ra << 13) ^ (qa << 3 | ra >>> 29) ^ qa >>> 6) + (va >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 2343527390 + va | 0;
            gb = 1695183700 + ua + (hb >>> 0 < va >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            xa = xa + Pa | 0;
            wa = wa + Oa + (xa >>> 0 < Pa >>> 0 ? 1 : 0) | 0;
            ib = (za >>> 1 | ya << 31) ^ (za >>> 8 | ya << 24) ^ (za >>> 7 | ya << 25) | 0;
            xa = xa + ib | 0;
            wa = wa + ((ya >>> 1 | za << 31) ^ (ya >>> 8 | za << 24) ^ ya >>> 7) + (xa >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = (ta >>> 19 | sa << 13) ^ (ta << 3 | sa >>> 29) ^ (ta >>> 6 | sa << 26) | 0;
            xa = xa + ib | 0;
            wa = wa + ((sa >>> 19 | ta << 13) ^ (sa << 3 | ta >>> 29) ^ sa >>> 6) + (xa >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 1014477480 + xa | 0;
            gb = 1986661051 + wa + (hb >>> 0 < xa >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            za = za + Ra | 0;
            ya = ya + Qa + (za >>> 0 < Ra >>> 0 ? 1 : 0) | 0;
            ib = (Ba >>> 1 | Aa << 31) ^ (Ba >>> 8 | Aa << 24) ^ (Ba >>> 7 | Aa << 25) | 0;
            za = za + ib | 0;
            ya = ya + ((Aa >>> 1 | Ba << 31) ^ (Aa >>> 8 | Ba << 24) ^ Aa >>> 7) + (za >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = (va >>> 19 | ua << 13) ^ (va << 3 | ua >>> 29) ^ (va >>> 6 | ua << 26) | 0;
            za = za + ib | 0;
            ya = ya + ((ua >>> 19 | va << 13) ^ (ua << 3 | va >>> 29) ^ ua >>> 6) + (za >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 1206759142 + za | 0;
            gb = 2177026350 + ya + (hb >>> 0 < za >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            Ba = Ba + na | 0;
            Aa = Aa + ma + (Ba >>> 0 < na >>> 0 ? 1 : 0) | 0;
            ib = (Da >>> 1 | Ca << 31) ^ (Da >>> 8 | Ca << 24) ^ (Da >>> 7 | Ca << 25) | 0;
            Ba = Ba + ib | 0;
            Aa = Aa + ((Ca >>> 1 | Da << 31) ^ (Ca >>> 8 | Da << 24) ^ Ca >>> 7) + (Ba >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = (xa >>> 19 | wa << 13) ^ (xa << 3 | wa >>> 29) ^ (xa >>> 6 | wa << 26) | 0;
            Ba = Ba + ib | 0;
            Aa = Aa + ((wa >>> 19 | xa << 13) ^ (wa << 3 | xa >>> 29) ^ wa >>> 6) + (Ba >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 344077627 + Ba | 0;
            gb = 2456956037 + Aa + (hb >>> 0 < Ba >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            Da = Da + pa | 0;
            Ca = Ca + oa + (Da >>> 0 < pa >>> 0 ? 1 : 0) | 0;
            ib = (Fa >>> 1 | Ea << 31) ^ (Fa >>> 8 | Ea << 24) ^ (Fa >>> 7 | Ea << 25) | 0;
            Da = Da + ib | 0;
            Ca = Ca + ((Ea >>> 1 | Fa << 31) ^ (Ea >>> 8 | Fa << 24) ^ Ea >>> 7) + (Da >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = (za >>> 19 | ya << 13) ^ (za << 3 | ya >>> 29) ^ (za >>> 6 | ya << 26) | 0;
            Da = Da + ib | 0;
            Ca = Ca + ((ya >>> 19 | za << 13) ^ (ya << 3 | za >>> 29) ^ ya >>> 6) + (Da >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 1290863460 + Da | 0;
            gb = 2730485921 + Ca + (hb >>> 0 < Da >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            Fa = Fa + ra | 0;
            Ea = Ea + qa + (Fa >>> 0 < ra >>> 0 ? 1 : 0) | 0;
            ib = (Ha >>> 1 | Ga << 31) ^ (Ha >>> 8 | Ga << 24) ^ (Ha >>> 7 | Ga << 25) | 0;
            Fa = Fa + ib | 0;
            Ea = Ea + ((Ga >>> 1 | Ha << 31) ^ (Ga >>> 8 | Ha << 24) ^ Ga >>> 7) + (Fa >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = (Ba >>> 19 | Aa << 13) ^ (Ba << 3 | Aa >>> 29) ^ (Ba >>> 6 | Aa << 26) | 0;
            Fa = Fa + ib | 0;
            Ea = Ea + ((Aa >>> 19 | Ba << 13) ^ (Aa << 3 | Ba >>> 29) ^ Aa >>> 6) + (Fa >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 3158454273 + Fa | 0;
            gb = 2820302411 + Ea + (hb >>> 0 < Fa >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            Ha = Ha + ta | 0;
            Ga = Ga + sa + (Ha >>> 0 < ta >>> 0 ? 1 : 0) | 0;
            ib = (Ja >>> 1 | Ia << 31) ^ (Ja >>> 8 | Ia << 24) ^ (Ja >>> 7 | Ia << 25) | 0;
            Ha = Ha + ib | 0;
            Ga = Ga + ((Ia >>> 1 | Ja << 31) ^ (Ia >>> 8 | Ja << 24) ^ Ia >>> 7) + (Ha >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = (Da >>> 19 | Ca << 13) ^ (Da << 3 | Ca >>> 29) ^ (Da >>> 6 | Ca << 26) | 0;
            Ha = Ha + ib | 0;
            Ga = Ga + ((Ca >>> 19 | Da << 13) ^ (Ca << 3 | Da >>> 29) ^ Ca >>> 6) + (Ha >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 3505952657 + Ha | 0;
            gb = 3259730800 + Ga + (hb >>> 0 < Ha >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            Ja = Ja + va | 0;
            Ia = Ia + ua + (Ja >>> 0 < va >>> 0 ? 1 : 0) | 0;
            ib = (La >>> 1 | Ka << 31) ^ (La >>> 8 | Ka << 24) ^ (La >>> 7 | Ka << 25) | 0;
            Ja = Ja + ib | 0;
            Ia = Ia + ((Ka >>> 1 | La << 31) ^ (Ka >>> 8 | La << 24) ^ Ka >>> 7) + (Ja >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = (Fa >>> 19 | Ea << 13) ^ (Fa << 3 | Ea >>> 29) ^ (Fa >>> 6 | Ea << 26) | 0;
            Ja = Ja + ib | 0;
            Ia = Ia + ((Ea >>> 19 | Fa << 13) ^ (Ea << 3 | Fa >>> 29) ^ Ea >>> 6) + (Ja >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 106217008 + Ja | 0;
            gb = 3345764771 + Ia + (hb >>> 0 < Ja >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            La = La + xa | 0;
            Ka = Ka + wa + (La >>> 0 < xa >>> 0 ? 1 : 0) | 0;
            ib = (Na >>> 1 | Ma << 31) ^ (Na >>> 8 | Ma << 24) ^ (Na >>> 7 | Ma << 25) | 0;
            La = La + ib | 0;
            Ka = Ka + ((Ma >>> 1 | Na << 31) ^ (Ma >>> 8 | Na << 24) ^ Ma >>> 7) + (La >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = (Ha >>> 19 | Ga << 13) ^ (Ha << 3 | Ga >>> 29) ^ (Ha >>> 6 | Ga << 26) | 0;
            La = La + ib | 0;
            Ka = Ka + ((Ga >>> 19 | Ha << 13) ^ (Ga << 3 | Ha >>> 29) ^ Ga >>> 6) + (La >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 3606008344 + La | 0;
            gb = 3516065817 + Ka + (hb >>> 0 < La >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            Na = Na + za | 0;
            Ma = Ma + ya + (Na >>> 0 < za >>> 0 ? 1 : 0) | 0;
            ib = (Pa >>> 1 | Oa << 31) ^ (Pa >>> 8 | Oa << 24) ^ (Pa >>> 7 | Oa << 25) | 0;
            Na = Na + ib | 0;
            Ma = Ma + ((Oa >>> 1 | Pa << 31) ^ (Oa >>> 8 | Pa << 24) ^ Oa >>> 7) + (Na >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = (Ja >>> 19 | Ia << 13) ^ (Ja << 3 | Ia >>> 29) ^ (Ja >>> 6 | Ia << 26) | 0;
            Na = Na + ib | 0;
            Ma = Ma + ((Ia >>> 19 | Ja << 13) ^ (Ia << 3 | Ja >>> 29) ^ Ia >>> 6) + (Na >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 1432725776 + Na | 0;
            gb = 3600352804 + Ma + (hb >>> 0 < Na >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            Pa = Pa + Ba | 0;
            Oa = Oa + Aa + (Pa >>> 0 < Ba >>> 0 ? 1 : 0) | 0;
            ib = (Ra >>> 1 | Qa << 31) ^ (Ra >>> 8 | Qa << 24) ^ (Ra >>> 7 | Qa << 25) | 0;
            Pa = Pa + ib | 0;
            Oa = Oa + ((Qa >>> 1 | Ra << 31) ^ (Qa >>> 8 | Ra << 24) ^ Qa >>> 7) + (Pa >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = (La >>> 19 | Ka << 13) ^ (La << 3 | Ka >>> 29) ^ (La >>> 6 | Ka << 26) | 0;
            Pa = Pa + ib | 0;
            Oa = Oa + ((Ka >>> 19 | La << 13) ^ (Ka << 3 | La >>> 29) ^ Ka >>> 6) + (Pa >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 1467031594 + Pa | 0;
            gb = 4094571909 + Oa + (hb >>> 0 < Pa >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            Ra = Ra + Da | 0;
            Qa = Qa + Ca + (Ra >>> 0 < Da >>> 0 ? 1 : 0) | 0;
            ib = (na >>> 1 | ma << 31) ^ (na >>> 8 | ma << 24) ^ (na >>> 7 | ma << 25) | 0;
            Ra = Ra + ib | 0;
            Qa = Qa + ((ma >>> 1 | na << 31) ^ (ma >>> 8 | na << 24) ^ ma >>> 7) + (Ra >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = (Na >>> 19 | Ma << 13) ^ (Na << 3 | Ma >>> 29) ^ (Na >>> 6 | Ma << 26) | 0;
            Ra = Ra + ib | 0;
            Qa = Qa + ((Ma >>> 19 | Na << 13) ^ (Ma << 3 | Na >>> 29) ^ Ma >>> 6) + (Ra >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 851169720 + Ra | 0;
            gb = 275423344 + Qa + (hb >>> 0 < Ra >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            na = na + Fa | 0;
            ma = ma + Ea + (na >>> 0 < Fa >>> 0 ? 1 : 0) | 0;
            ib = (pa >>> 1 | oa << 31) ^ (pa >>> 8 | oa << 24) ^ (pa >>> 7 | oa << 25) | 0;
            na = na + ib | 0;
            ma = ma + ((oa >>> 1 | pa << 31) ^ (oa >>> 8 | pa << 24) ^ oa >>> 7) + (na >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = (Pa >>> 19 | Oa << 13) ^ (Pa << 3 | Oa >>> 29) ^ (Pa >>> 6 | Oa << 26) | 0;
            na = na + ib | 0;
            ma = ma + ((Oa >>> 19 | Pa << 13) ^ (Oa << 3 | Pa >>> 29) ^ Oa >>> 6) + (na >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 3100823752 + na | 0;
            gb = 430227734 + ma + (hb >>> 0 < na >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            pa = pa + Ha | 0;
            oa = oa + Ga + (pa >>> 0 < Ha >>> 0 ? 1 : 0) | 0;
            ib = (ra >>> 1 | qa << 31) ^ (ra >>> 8 | qa << 24) ^ (ra >>> 7 | qa << 25) | 0;
            pa = pa + ib | 0;
            oa = oa + ((qa >>> 1 | ra << 31) ^ (qa >>> 8 | ra << 24) ^ qa >>> 7) + (pa >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = (Ra >>> 19 | Qa << 13) ^ (Ra << 3 | Qa >>> 29) ^ (Ra >>> 6 | Qa << 26) | 0;
            pa = pa + ib | 0;
            oa = oa + ((Qa >>> 19 | Ra << 13) ^ (Qa << 3 | Ra >>> 29) ^ Qa >>> 6) + (pa >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 1363258195 + pa | 0;
            gb = 506948616 + oa + (hb >>> 0 < pa >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ra = ra + Ja | 0;
            qa = qa + Ia + (ra >>> 0 < Ja >>> 0 ? 1 : 0) | 0;
            ib = (ta >>> 1 | sa << 31) ^ (ta >>> 8 | sa << 24) ^ (ta >>> 7 | sa << 25) | 0;
            ra = ra + ib | 0;
            qa = qa + ((sa >>> 1 | ta << 31) ^ (sa >>> 8 | ta << 24) ^ sa >>> 7) + (ra >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = (na >>> 19 | ma << 13) ^ (na << 3 | ma >>> 29) ^ (na >>> 6 | ma << 26) | 0;
            ra = ra + ib | 0;
            qa = qa + ((ma >>> 19 | na << 13) ^ (ma << 3 | na >>> 29) ^ ma >>> 6) + (ra >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 3750685593 + ra | 0;
            gb = 659060556 + qa + (hb >>> 0 < ra >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ta = ta + La | 0;
            sa = sa + Ka + (ta >>> 0 < La >>> 0 ? 1 : 0) | 0;
            ib = (va >>> 1 | ua << 31) ^ (va >>> 8 | ua << 24) ^ (va >>> 7 | ua << 25) | 0;
            ta = ta + ib | 0;
            sa = sa + ((ua >>> 1 | va << 31) ^ (ua >>> 8 | va << 24) ^ ua >>> 7) + (ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = (pa >>> 19 | oa << 13) ^ (pa << 3 | oa >>> 29) ^ (pa >>> 6 | oa << 26) | 0;
            ta = ta + ib | 0;
            sa = sa + ((oa >>> 19 | pa << 13) ^ (oa << 3 | pa >>> 29) ^ oa >>> 6) + (ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 3785050280 + ta | 0;
            gb = 883997877 + sa + (hb >>> 0 < ta >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            va = va + Na | 0;
            ua = ua + Ma + (va >>> 0 < Na >>> 0 ? 1 : 0) | 0;
            ib = (xa >>> 1 | wa << 31) ^ (xa >>> 8 | wa << 24) ^ (xa >>> 7 | wa << 25) | 0;
            va = va + ib | 0;
            ua = ua + ((wa >>> 1 | xa << 31) ^ (wa >>> 8 | xa << 24) ^ wa >>> 7) + (va >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = (ra >>> 19 | qa << 13) ^ (ra << 3 | qa >>> 29) ^ (ra >>> 6 | qa << 26) | 0;
            va = va + ib | 0;
            ua = ua + ((qa >>> 19 | ra << 13) ^ (qa << 3 | ra >>> 29) ^ qa >>> 6) + (va >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 3318307427 + va | 0;
            gb = 958139571 + ua + (hb >>> 0 < va >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            xa = xa + Pa | 0;
            wa = wa + Oa + (xa >>> 0 < Pa >>> 0 ? 1 : 0) | 0;
            ib = (za >>> 1 | ya << 31) ^ (za >>> 8 | ya << 24) ^ (za >>> 7 | ya << 25) | 0;
            xa = xa + ib | 0;
            wa = wa + ((ya >>> 1 | za << 31) ^ (ya >>> 8 | za << 24) ^ ya >>> 7) + (xa >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = (ta >>> 19 | sa << 13) ^ (ta << 3 | sa >>> 29) ^ (ta >>> 6 | sa << 26) | 0;
            xa = xa + ib | 0;
            wa = wa + ((sa >>> 19 | ta << 13) ^ (sa << 3 | ta >>> 29) ^ sa >>> 6) + (xa >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 3812723403 + xa | 0;
            gb = 1322822218 + wa + (hb >>> 0 < xa >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            za = za + Ra | 0;
            ya = ya + Qa + (za >>> 0 < Ra >>> 0 ? 1 : 0) | 0;
            ib = (Ba >>> 1 | Aa << 31) ^ (Ba >>> 8 | Aa << 24) ^ (Ba >>> 7 | Aa << 25) | 0;
            za = za + ib | 0;
            ya = ya + ((Aa >>> 1 | Ba << 31) ^ (Aa >>> 8 | Ba << 24) ^ Aa >>> 7) + (za >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = (va >>> 19 | ua << 13) ^ (va << 3 | ua >>> 29) ^ (va >>> 6 | ua << 26) | 0;

            za = za + ib | 0;
            ya = ya + ((ua >>> 19 | va << 13) ^ (ua << 3 | va >>> 29) ^ ua >>> 6) + (za >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 2003034995 + za | 0;
            gb = 1537002063 + ya + (hb >>> 0 < za >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            Ba = Ba + na | 0;
            Aa = Aa + ma + (Ba >>> 0 < na >>> 0 ? 1 : 0) | 0;
            ib = (Da >>> 1 | Ca << 31) ^ (Da >>> 8 | Ca << 24) ^ (Da >>> 7 | Ca << 25) | 0;
            Ba = Ba + ib | 0;
            Aa = Aa + ((Ca >>> 1 | Da << 31) ^ (Ca >>> 8 | Da << 24) ^ Ca >>> 7) + (Ba >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = (xa >>> 19 | wa << 13) ^ (xa << 3 | wa >>> 29) ^ (xa >>> 6 | wa << 26) | 0;
            Ba = Ba + ib | 0;
            Aa = Aa + ((wa >>> 19 | xa << 13) ^ (wa << 3 | xa >>> 29) ^ wa >>> 6) + (Ba >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 3602036899 + Ba | 0;
            gb = 1747873779 + Aa + (hb >>> 0 < Ba >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            Da = Da + pa | 0;
            Ca = Ca + oa + (Da >>> 0 < pa >>> 0 ? 1 : 0) | 0;
            ib = (Fa >>> 1 | Ea << 31) ^ (Fa >>> 8 | Ea << 24) ^ (Fa >>> 7 | Ea << 25) | 0;
            Da = Da + ib | 0;
            Ca = Ca + ((Ea >>> 1 | Fa << 31) ^ (Ea >>> 8 | Fa << 24) ^ Ea >>> 7) + (Da >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = (za >>> 19 | ya << 13) ^ (za << 3 | ya >>> 29) ^ (za >>> 6 | ya << 26) | 0;
            Da = Da + ib | 0;
            Ca = Ca + ((ya >>> 19 | za << 13) ^ (ya << 3 | za >>> 29) ^ ya >>> 6) + (Da >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 1575990012 + Da | 0;
            gb = 1955562222 + Ca + (hb >>> 0 < Da >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            Fa = Fa + ra | 0;
            Ea = Ea + qa + (Fa >>> 0 < ra >>> 0 ? 1 : 0) | 0;
            ib = (Ha >>> 1 | Ga << 31) ^ (Ha >>> 8 | Ga << 24) ^ (Ha >>> 7 | Ga << 25) | 0;
            Fa = Fa + ib | 0;
            Ea = Ea + ((Ga >>> 1 | Ha << 31) ^ (Ga >>> 8 | Ha << 24) ^ Ga >>> 7) + (Fa >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = (Ba >>> 19 | Aa << 13) ^ (Ba << 3 | Aa >>> 29) ^ (Ba >>> 6 | Aa << 26) | 0;
            Fa = Fa + ib | 0;
            Ea = Ea + ((Aa >>> 19 | Ba << 13) ^ (Aa << 3 | Ba >>> 29) ^ Aa >>> 6) + (Fa >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 1125592928 + Fa | 0;
            gb = 2024104815 + Ea + (hb >>> 0 < Fa >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            Ha = Ha + ta | 0;
            Ga = Ga + sa + (Ha >>> 0 < ta >>> 0 ? 1 : 0) | 0;
            ib = (Ja >>> 1 | Ia << 31) ^ (Ja >>> 8 | Ia << 24) ^ (Ja >>> 7 | Ia << 25) | 0;
            Ha = Ha + ib | 0;
            Ga = Ga + ((Ia >>> 1 | Ja << 31) ^ (Ia >>> 8 | Ja << 24) ^ Ia >>> 7) + (Ha >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = (Da >>> 19 | Ca << 13) ^ (Da << 3 | Ca >>> 29) ^ (Da >>> 6 | Ca << 26) | 0;
            Ha = Ha + ib | 0;
            Ga = Ga + ((Ca >>> 19 | Da << 13) ^ (Ca << 3 | Da >>> 29) ^ Ca >>> 6) + (Ha >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 2716904306 + Ha | 0;
            gb = 2227730452 + Ga + (hb >>> 0 < Ha >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            Ja = Ja + va | 0;
            Ia = Ia + ua + (Ja >>> 0 < va >>> 0 ? 1 : 0) | 0;
            ib = (La >>> 1 | Ka << 31) ^ (La >>> 8 | Ka << 24) ^ (La >>> 7 | Ka << 25) | 0;
            Ja = Ja + ib | 0;
            Ia = Ia + ((Ka >>> 1 | La << 31) ^ (Ka >>> 8 | La << 24) ^ Ka >>> 7) + (Ja >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = (Fa >>> 19 | Ea << 13) ^ (Fa << 3 | Ea >>> 29) ^ (Fa >>> 6 | Ea << 26) | 0;
            Ja = Ja + ib | 0;
            Ia = Ia + ((Ea >>> 19 | Fa << 13) ^ (Ea << 3 | Fa >>> 29) ^ Ea >>> 6) + (Ja >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 442776044 + Ja | 0;
            gb = 2361852424 + Ia + (hb >>> 0 < Ja >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            La = La + xa | 0;
            Ka = Ka + wa + (La >>> 0 < xa >>> 0 ? 1 : 0) | 0;
            ib = (Na >>> 1 | Ma << 31) ^ (Na >>> 8 | Ma << 24) ^ (Na >>> 7 | Ma << 25) | 0;
            La = La + ib | 0;
            Ka = Ka + ((Ma >>> 1 | Na << 31) ^ (Ma >>> 8 | Na << 24) ^ Ma >>> 7) + (La >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = (Ha >>> 19 | Ga << 13) ^ (Ha << 3 | Ga >>> 29) ^ (Ha >>> 6 | Ga << 26) | 0;
            La = La + ib | 0;
            Ka = Ka + ((Ga >>> 19 | Ha << 13) ^ (Ga << 3 | Ha >>> 29) ^ Ga >>> 6) + (La >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 593698344 + La | 0;
            gb = 2428436474 + Ka + (hb >>> 0 < La >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            Na = Na + za | 0;
            Ma = Ma + ya + (Na >>> 0 < za >>> 0 ? 1 : 0) | 0;
            ib = (Pa >>> 1 | Oa << 31) ^ (Pa >>> 8 | Oa << 24) ^ (Pa >>> 7 | Oa << 25) | 0;
            Na = Na + ib | 0;
            Ma = Ma + ((Oa >>> 1 | Pa << 31) ^ (Oa >>> 8 | Pa << 24) ^ Oa >>> 7) + (Na >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = (Ja >>> 19 | Ia << 13) ^ (Ja << 3 | Ia >>> 29) ^ (Ja >>> 6 | Ia << 26) | 0;
            Na = Na + ib | 0;
            Ma = Ma + ((Ia >>> 19 | Ja << 13) ^ (Ia << 3 | Ja >>> 29) ^ Ia >>> 6) + (Na >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 3733110249 + Na | 0;
            gb = 2756734187 + Ma + (hb >>> 0 < Na >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            Pa = Pa + Ba | 0;
            Oa = Oa + Aa + (Pa >>> 0 < Ba >>> 0 ? 1 : 0) | 0;
            ib = (Ra >>> 1 | Qa << 31) ^ (Ra >>> 8 | Qa << 24) ^ (Ra >>> 7 | Qa << 25) | 0;
            Pa = Pa + ib | 0;
            Oa = Oa + ((Qa >>> 1 | Ra << 31) ^ (Qa >>> 8 | Ra << 24) ^ Qa >>> 7) + (Pa >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = (La >>> 19 | Ka << 13) ^ (La << 3 | Ka >>> 29) ^ (La >>> 6 | Ka << 26) | 0;
            Pa = Pa + ib | 0;
            Oa = Oa + ((Ka >>> 19 | La << 13) ^ (Ka << 3 | La >>> 29) ^ Ka >>> 6) + (Pa >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 2999351573 + Pa | 0;
            gb = 3204031479 + Oa + (hb >>> 0 < Pa >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            Ra = Ra + Da | 0;
            Qa = Qa + Ca + (Ra >>> 0 < Da >>> 0 ? 1 : 0) | 0;
            ib = (na >>> 1 | ma << 31) ^ (na >>> 8 | ma << 24) ^ (na >>> 7 | ma << 25) | 0;
            Ra = Ra + ib | 0;
            Qa = Qa + ((ma >>> 1 | na << 31) ^ (ma >>> 8 | na << 24) ^ ma >>> 7) + (Ra >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = (Na >>> 19 | Ma << 13) ^ (Na << 3 | Ma >>> 29) ^ (Na >>> 6 | Ma << 26) | 0;
            Ra = Ra + ib | 0;
            Qa = Qa + ((Ma >>> 19 | Na << 13) ^ (Ma << 3 | Na >>> 29) ^ Ma >>> 6) + (Ra >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 3815920427 + Ra | 0;
            gb = 3329325298 + Qa + (hb >>> 0 < Ra >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            na = na + Fa | 0;
            ma = ma + Ea + (na >>> 0 < Fa >>> 0 ? 1 : 0) | 0;
            ib = (pa >>> 1 | oa << 31) ^ (pa >>> 8 | oa << 24) ^ (pa >>> 7 | oa << 25) | 0;
            na = na + ib | 0;
            ma = ma + ((oa >>> 1 | pa << 31) ^ (oa >>> 8 | pa << 24) ^ oa >>> 7) + (na >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = (Pa >>> 19 | Oa << 13) ^ (Pa << 3 | Oa >>> 29) ^ (Pa >>> 6 | Oa << 26) | 0;
            na = na + ib | 0;
            ma = ma + ((Oa >>> 19 | Pa << 13) ^ (Oa << 3 | Pa >>> 29) ^ Oa >>> 6) + (na >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 3928383900 + na | 0;
            gb = 3391569614 + ma + (hb >>> 0 < na >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            pa = pa + Ha | 0;
            oa = oa + Ga + (pa >>> 0 < Ha >>> 0 ? 1 : 0) | 0;
            ib = (ra >>> 1 | qa << 31) ^ (ra >>> 8 | qa << 24) ^ (ra >>> 7 | qa << 25) | 0;
            pa = pa + ib | 0;
            oa = oa + ((qa >>> 1 | ra << 31) ^ (qa >>> 8 | ra << 24) ^ qa >>> 7) + (pa >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = (Ra >>> 19 | Qa << 13) ^ (Ra << 3 | Qa >>> 29) ^ (Ra >>> 6 | Qa << 26) | 0;
            pa = pa + ib | 0;
            oa = oa + ((Qa >>> 19 | Ra << 13) ^ (Qa << 3 | Ra >>> 29) ^ Qa >>> 6) + (pa >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 566280711 + pa | 0;
            gb = 3515267271 + oa + (hb >>> 0 < pa >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ra = ra + Ja | 0;
            qa = qa + Ia + (ra >>> 0 < Ja >>> 0 ? 1 : 0) | 0;
            ib = (ta >>> 1 | sa << 31) ^ (ta >>> 8 | sa << 24) ^ (ta >>> 7 | sa << 25) | 0;
            ra = ra + ib | 0;
            qa = qa + ((sa >>> 1 | ta << 31) ^ (sa >>> 8 | ta << 24) ^ sa >>> 7) + (ra >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = (na >>> 19 | ma << 13) ^ (na << 3 | ma >>> 29) ^ (na >>> 6 | ma << 26) | 0;
            ra = ra + ib | 0;
            qa = qa + ((ma >>> 19 | na << 13) ^ (ma << 3 | na >>> 29) ^ ma >>> 6) + (ra >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 3454069534 + ra | 0;
            gb = 3940187606 + qa + (hb >>> 0 < ra >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ta = ta + La | 0;
            sa = sa + Ka + (ta >>> 0 < La >>> 0 ? 1 : 0) | 0;
            ib = (va >>> 1 | ua << 31) ^ (va >>> 8 | ua << 24) ^ (va >>> 7 | ua << 25) | 0;
            ta = ta + ib | 0;
            sa = sa + ((ua >>> 1 | va << 31) ^ (ua >>> 8 | va << 24) ^ ua >>> 7) + (ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = (pa >>> 19 | oa << 13) ^ (pa << 3 | oa >>> 29) ^ (pa >>> 6 | oa << 26) | 0;
            ta = ta + ib | 0;
            sa = sa + ((oa >>> 19 | pa << 13) ^ (oa << 3 | pa >>> 29) ^ oa >>> 6) + (ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 4000239992 + ta | 0;
            gb = 4118630271 + sa + (hb >>> 0 < ta >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            va = va + Na | 0;
            ua = ua + Ma + (va >>> 0 < Na >>> 0 ? 1 : 0) | 0;
            ib = (xa >>> 1 | wa << 31) ^ (xa >>> 8 | wa << 24) ^ (xa >>> 7 | wa << 25) | 0;
            va = va + ib | 0;
            ua = ua + ((wa >>> 1 | xa << 31) ^ (wa >>> 8 | xa << 24) ^ wa >>> 7) + (va >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = (ra >>> 19 | qa << 13) ^ (ra << 3 | qa >>> 29) ^ (ra >>> 6 | qa << 26) | 0;
            va = va + ib | 0;
            ua = ua + ((qa >>> 19 | ra << 13) ^ (qa << 3 | ra >>> 29) ^ qa >>> 6) + (va >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 1914138554 + va | 0;
            gb = 116418474 + ua + (hb >>> 0 < va >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            xa = xa + Pa | 0;
            wa = wa + Oa + (xa >>> 0 < Pa >>> 0 ? 1 : 0) | 0;
            ib = (za >>> 1 | ya << 31) ^ (za >>> 8 | ya << 24) ^ (za >>> 7 | ya << 25) | 0;
            xa = xa + ib | 0;
            wa = wa + ((ya >>> 1 | za << 31) ^ (ya >>> 8 | za << 24) ^ ya >>> 7) + (xa >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = (ta >>> 19 | sa << 13) ^ (ta << 3 | sa >>> 29) ^ (ta >>> 6 | sa << 26) | 0;
            xa = xa + ib | 0;
            wa = wa + ((sa >>> 19 | ta << 13) ^ (sa << 3 | ta >>> 29) ^ sa >>> 6) + (xa >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 2731055270 + xa | 0;
            gb = 174292421 + wa + (hb >>> 0 < xa >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            za = za + Ra | 0;
            ya = ya + Qa + (za >>> 0 < Ra >>> 0 ? 1 : 0) | 0;
            ib = (Ba >>> 1 | Aa << 31) ^ (Ba >>> 8 | Aa << 24) ^ (Ba >>> 7 | Aa << 25) | 0;
            za = za + ib | 0;
            ya = ya + ((Aa >>> 1 | Ba << 31) ^ (Aa >>> 8 | Ba << 24) ^ Aa >>> 7) + (za >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = (va >>> 19 | ua << 13) ^ (va << 3 | ua >>> 29) ^ (va >>> 6 | ua << 26) | 0;
            za = za + ib | 0;
            ya = ya + ((ua >>> 19 | va << 13) ^ (ua << 3 | va >>> 29) ^ ua >>> 6) + (za >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 3203993006 + za | 0;
            gb = 289380356 + ya + (hb >>> 0 < za >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            Ba = Ba + na | 0;
            Aa = Aa + ma + (Ba >>> 0 < na >>> 0 ? 1 : 0) | 0;
            ib = (Da >>> 1 | Ca << 31) ^ (Da >>> 8 | Ca << 24) ^ (Da >>> 7 | Ca << 25) | 0;
            Ba = Ba + ib | 0;
            Aa = Aa + ((Ca >>> 1 | Da << 31) ^ (Ca >>> 8 | Da << 24) ^ Ca >>> 7) + (Ba >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = (xa >>> 19 | wa << 13) ^ (xa << 3 | wa >>> 29) ^ (xa >>> 6 | wa << 26) | 0;
            Ba = Ba + ib | 0;
            Aa = Aa + ((wa >>> 19 | xa << 13) ^ (wa << 3 | xa >>> 29) ^ wa >>> 6) + (Ba >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 320620315 + Ba | 0;
            gb = 460393269 + Aa + (hb >>> 0 < Ba >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            Da = Da + pa | 0;
            Ca = Ca + oa + (Da >>> 0 < pa >>> 0 ? 1 : 0) | 0;
            ib = (Fa >>> 1 | Ea << 31) ^ (Fa >>> 8 | Ea << 24) ^ (Fa >>> 7 | Ea << 25) | 0;
            Da = Da + ib | 0;
            Ca = Ca + ((Ea >>> 1 | Fa << 31) ^ (Ea >>> 8 | Fa << 24) ^ Ea >>> 7) + (Da >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = (za >>> 19 | ya << 13) ^ (za << 3 | ya >>> 29) ^ (za >>> 6 | ya << 26) | 0;
            Da = Da + ib | 0;
            Ca = Ca + ((ya >>> 19 | za << 13) ^ (ya << 3 | za >>> 29) ^ ya >>> 6) + (Da >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 587496836 + Da | 0;
            gb = 685471733 + Ca + (hb >>> 0 < Da >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            Fa = Fa + ra | 0;
            Ea = Ea + qa + (Fa >>> 0 < ra >>> 0 ? 1 : 0) | 0;
            ib = (Ha >>> 1 | Ga << 31) ^ (Ha >>> 8 | Ga << 24) ^ (Ha >>> 7 | Ga << 25) | 0;
            Fa = Fa + ib | 0;
            Ea = Ea + ((Ga >>> 1 | Ha << 31) ^ (Ga >>> 8 | Ha << 24) ^ Ga >>> 7) + (Fa >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = (Ba >>> 19 | Aa << 13) ^ (Ba << 3 | Aa >>> 29) ^ (Ba >>> 6 | Aa << 26) | 0;
            Fa = Fa + ib | 0;
            Ea = Ea + ((Aa >>> 19 | Ba << 13) ^ (Aa << 3 | Ba >>> 29) ^ Aa >>> 6) + (Fa >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 1086792851 + Fa | 0;
            gb = 852142971 + Ea + (hb >>> 0 < Fa >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            Ha = Ha + ta | 0;
            Ga = Ga + sa + (Ha >>> 0 < ta >>> 0 ? 1 : 0) | 0;
            ib = (Ja >>> 1 | Ia << 31) ^ (Ja >>> 8 | Ia << 24) ^ (Ja >>> 7 | Ia << 25) | 0;
            Ha = Ha + ib | 0;
            Ga = Ga + ((Ia >>> 1 | Ja << 31) ^ (Ia >>> 8 | Ja << 24) ^ Ia >>> 7) + (Ha >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = (Da >>> 19 | Ca << 13) ^ (Da << 3 | Ca >>> 29) ^ (Da >>> 6 | Ca << 26) | 0;
            Ha = Ha + ib | 0;
            Ga = Ga + ((Ca >>> 19 | Da << 13) ^ (Ca << 3 | Da >>> 29) ^ Ca >>> 6) + (Ha >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 365543100 + Ha | 0;
            gb = 1017036298 + Ga + (hb >>> 0 < Ha >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            Ja = Ja + va | 0;
            Ia = Ia + ua + (Ja >>> 0 < va >>> 0 ? 1 : 0) | 0;
            ib = (La >>> 1 | Ka << 31) ^ (La >>> 8 | Ka << 24) ^ (La >>> 7 | Ka << 25) | 0;
            Ja = Ja + ib | 0;
            Ia = Ia + ((Ka >>> 1 | La << 31) ^ (Ka >>> 8 | La << 24) ^ Ka >>> 7) + (Ja >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = (Fa >>> 19 | Ea << 13) ^ (Fa << 3 | Ea >>> 29) ^ (Fa >>> 6 | Ea << 26) | 0;
            Ja = Ja + ib | 0;
            Ia = Ia + ((Ea >>> 19 | Fa << 13) ^ (Ea << 3 | Fa >>> 29) ^ Ea >>> 6) + (Ja >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 2618297676 + Ja | 0;
            gb = 1126000580 + Ia + (hb >>> 0 < Ja >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            La = La + xa | 0;
            Ka = Ka + wa + (La >>> 0 < xa >>> 0 ? 1 : 0) | 0;
            ib = (Na >>> 1 | Ma << 31) ^ (Na >>> 8 | Ma << 24) ^ (Na >>> 7 | Ma << 25) | 0;
            La = La + ib | 0;
            Ka = Ka + ((Ma >>> 1 | Na << 31) ^ (Ma >>> 8 | Na << 24) ^ Ma >>> 7) + (La >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = (Ha >>> 19 | Ga << 13) ^ (Ha << 3 | Ga >>> 29) ^ (Ha >>> 6 | Ga << 26) | 0;
            La = La + ib | 0;
            Ka = Ka + ((Ga >>> 19 | Ha << 13) ^ (Ga << 3 | Ha >>> 29) ^ Ga >>> 6) + (La >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 3409855158 + La | 0;
            gb = 1288033470 + Ka + (hb >>> 0 < La >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            Na = Na + za | 0;
            Ma = Ma + ya + (Na >>> 0 < za >>> 0 ? 1 : 0) | 0;
            ib = (Pa >>> 1 | Oa << 31) ^ (Pa >>> 8 | Oa << 24) ^ (Pa >>> 7 | Oa << 25) | 0;
            Na = Na + ib | 0;
            Ma = Ma + ((Oa >>> 1 | Pa << 31) ^ (Oa >>> 8 | Pa << 24) ^ Oa >>> 7) + (Na >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = (Ja >>> 19 | Ia << 13) ^ (Ja << 3 | Ia >>> 29) ^ (Ja >>> 6 | Ia << 26) | 0;
            Na = Na + ib | 0;
            Ma = Ma + ((Ia >>> 19 | Ja << 13) ^ (Ia << 3 | Ja >>> 29) ^ Ia >>> 6) + (Na >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 4234509866 + Na | 0;
            gb = 1501505948 + Ma + (hb >>> 0 < Na >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            Pa = Pa + Ba | 0;
            Oa = Oa + Aa + (Pa >>> 0 < Ba >>> 0 ? 1 : 0) | 0;
            ib = (Ra >>> 1 | Qa << 31) ^ (Ra >>> 8 | Qa << 24) ^ (Ra >>> 7 | Qa << 25) | 0;
            Pa = Pa + ib | 0;
            Oa = Oa + ((Qa >>> 1 | Ra << 31) ^ (Qa >>> 8 | Ra << 24) ^ Qa >>> 7) + (Pa >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = (La >>> 19 | Ka << 13) ^ (La << 3 | Ka >>> 29) ^ (La >>> 6 | Ka << 26) | 0;
            Pa = Pa + ib | 0;
            Oa = Oa + ((Ka >>> 19 | La << 13) ^ (Ka << 3 | La >>> 29) ^ Ka >>> 6) + (Pa >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 987167468 + Pa | 0;
            gb = 1607167915 + Oa + (hb >>> 0 < Pa >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            Ra = Ra + Da | 0;
            Qa = Qa + Ca + (Ra >>> 0 < Da >>> 0 ? 1 : 0) | 0;
            ib = (na >>> 1 | ma << 31) ^ (na >>> 8 | ma << 24) ^ (na >>> 7 | ma << 25) | 0;
            Ra = Ra + ib | 0;
            Qa = Qa + ((ma >>> 1 | na << 31) ^ (ma >>> 8 | na << 24) ^ ma >>> 7) + (Ra >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = (Na >>> 19 | Ma << 13) ^ (Na << 3 | Ma >>> 29) ^ (Na >>> 6 | Ma << 26) | 0;
            Ra = Ra + ib | 0;
            Qa = Qa + ((Ma >>> 19 | Na << 13) ^ (Ma << 3 | Na >>> 29) ^ Ma >>> 6) + (Ra >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            hb = 1246189591 + Ra | 0;
            gb = 1816402316 + Qa + (hb >>> 0 < Ra >>> 0 ? 1 : 0) | 0;
            hb = hb + fb | 0;
            gb = gb + eb + (hb >>> 0 < fb >>> 0 ? 1 : 0) | 0;
            ib = (_a >>> 14 | $a << 18) ^ (_a >>> 18 | $a << 14) ^ (_a << 23 | $a >>> 9) | 0;
            hb = hb + ib | 0;
            gb = gb + (($a >>> 14 | _a << 18) ^ ($a >>> 18 | _a << 14) ^ ($a << 23 | _a >>> 9)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            ib = db ^ _a & (bb ^ db) | 0;
            hb = hb + ib | 0;
            gb = gb + (cb ^ $a & (ab ^ cb)) + (hb >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            fb = db;
            eb = cb;
            db = bb;
            cb = ab;
            bb = _a;
            ab = $a;
            _a = Za + hb | 0;
            $a = Ya + gb + (_a >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            Za = Xa;
            Ya = Wa;
            Xa = Va;
            Wa = Ua;
            Va = Ta;
            Ua = Sa;
            Ta = hb + (Va & Xa ^ Za & (Va ^ Xa)) | 0;
            Sa = gb + (Ua & Wa ^ Ya & (Ua ^ Wa)) + (Ta >>> 0 < hb >>> 0 ? 1 : 0) | 0;
            ib = (Va >>> 28 | Ua << 4) ^ (Va << 30 | Ua >>> 2) ^ (Va << 25 | Ua >>> 7) | 0;
            Ta = Ta + ib | 0;
            Sa = Sa + ((Ua >>> 28 | Va << 4) ^ (Ua << 30 | Va >>> 2) ^ (Ua << 25 | Va >>> 7)) + (Ta >>> 0 < ib >>> 0 ? 1 : 0) | 0;
            e = e + Ta | 0;
            d = d + Sa + (e >>> 0 < Ta >>> 0 ? 1 : 0) | 0;
            g = g + Va | 0;
            f = f + Ua + (g >>> 0 < Va >>> 0 ? 1 : 0) | 0;
            i = i + Xa | 0;
            h = h + Wa + (i >>> 0 < Xa >>> 0 ? 1 : 0) | 0;
            k = k + Za | 0;
            j = j + Ya + (k >>> 0 < Za >>> 0 ? 1 : 0) | 0;
            m = m + _a | 0;
            l = l + $a + (m >>> 0 < _a >>> 0 ? 1 : 0) | 0;
            o = o + bb | 0;
            n = n + ab + (o >>> 0 < bb >>> 0 ? 1 : 0) | 0;
            q = q + db | 0;
            p = p + cb + (q >>> 0 < db >>> 0 ? 1 : 0) | 0;
            s = s + fb | 0;
            r = r + eb + (s >>> 0 < fb >>> 0 ? 1 : 0) | 0
        }

        function ba(ma) {
            ma = ma | 0;
            aa(_[ma | 0] << 24 | _[ma | 1] << 16 | _[ma | 2] << 8 | _[ma | 3], _[ma | 4] << 24 | _[ma | 5] << 16 | _[ma | 6] << 8 | _[ma | 7], _[ma | 8] << 24 | _[ma | 9] << 16 | _[ma | 10] << 8 | _[ma | 11], _[ma | 12] << 24 | _[ma | 13] << 16 | _[ma | 14] << 8 | _[ma | 15], _[ma | 16] << 24 | _[ma | 17] << 16 | _[ma | 18] << 8 | _[ma | 19], _[ma | 20] << 24 | _[ma | 21] << 16 | _[ma | 22] << 8 | _[ma | 23], _[ma | 24] << 24 | _[ma | 25] << 16 | _[ma | 26] << 8 | _[ma | 27], _[ma | 28] << 24 | _[ma | 29] << 16 | _[ma | 30] << 8 | _[ma | 31], _[ma | 32] << 24 | _[ma | 33] << 16 | _[ma | 34] << 8 | _[ma | 35], _[ma | 36] << 24 | _[ma | 37] << 16 | _[ma | 38] << 8 | _[ma | 39], _[ma | 40] << 24 | _[ma | 41] << 16 | _[ma | 42] << 8 | _[ma | 43], _[ma | 44] << 24 | _[ma | 45] << 16 | _[ma | 46] << 8 | _[ma | 47], _[ma | 48] << 24 | _[ma | 49] << 16 | _[ma | 50] << 8 | _[ma | 51], _[ma | 52] << 24 | _[ma | 53] << 16 | _[ma | 54] << 8 | _[ma | 55], _[ma | 56] << 24 | _[ma | 57] << 16 | _[ma | 58] << 8 | _[ma | 59], _[ma | 60] << 24 | _[ma | 61] << 16 | _[ma | 62] << 8 | _[ma | 63], _[ma | 64] << 24 | _[ma | 65] << 16 | _[ma | 66] << 8 | _[ma | 67], _[ma | 68] << 24 | _[ma | 69] << 16 | _[ma | 70] << 8 | _[ma | 71], _[ma | 72] << 24 | _[ma | 73] << 16 | _[ma | 74] << 8 | _[ma | 75], _[ma | 76] << 24 | _[ma | 77] << 16 | _[ma | 78] << 8 | _[ma | 79], _[ma | 80] << 24 | _[ma | 81] << 16 | _[ma | 82] << 8 | _[ma | 83], _[ma | 84] << 24 | _[ma | 85] << 16 | _[ma | 86] << 8 | _[ma | 87], _[ma | 88] << 24 | _[ma | 89] << 16 | _[ma | 90] << 8 | _[ma | 91], _[ma | 92] << 24 | _[ma | 93] << 16 | _[ma | 94] << 8 | _[ma | 95], _[ma | 96] << 24 | _[ma | 97] << 16 | _[ma | 98] << 8 | _[ma | 99], _[ma | 100] << 24 | _[ma | 101] << 16 | _[ma | 102] << 8 | _[ma | 103], _[ma | 104] << 24 | _[ma | 105] << 16 | _[ma | 106] << 8 | _[ma | 107], _[ma | 108] << 24 | _[ma | 109] << 16 | _[ma | 110] << 8 | _[ma | 111], _[ma | 112] << 24 | _[ma | 113] << 16 | _[ma | 114] << 8 | _[ma | 115], _[ma | 116] << 24 | _[ma | 117] << 16 | _[ma | 118] << 8 | _[ma | 119], _[ma | 120] << 24 | _[ma | 121] << 16 | _[ma | 122] << 8 | _[ma | 123], _[ma | 124] << 24 | _[ma | 125] << 16 | _[ma | 126] << 8 | _[ma | 127])
        }

        function ca(ma) {
            ma = ma | 0;
            _[ma | 0] = d >>> 24;
            _[ma | 1] = d >>> 16 & 255;
            _[ma | 2] = d >>> 8 & 255;
            _[ma | 3] = d & 255;
            _[ma | 4] = e >>> 24;
            _[ma | 5] = e >>> 16 & 255;
            _[ma | 6] = e >>> 8 & 255;
            _[ma | 7] = e & 255;
            _[ma | 8] = f >>> 24;
            _[ma | 9] = f >>> 16 & 255;
            _[ma | 10] = f >>> 8 & 255;
            _[ma | 11] = f & 255;
            _[ma | 12] = g >>> 24;
            _[ma | 13] = g >>> 16 & 255;
            _[ma | 14] = g >>> 8 & 255;
            _[ma | 15] = g & 255;
            _[ma | 16] = h >>> 24;
            _[ma | 17] = h >>> 16 & 255;
            _[ma | 18] = h >>> 8 & 255;
            _[ma | 19] = h & 255;
            _[ma | 20] = i >>> 24;
            _[ma | 21] = i >>> 16 & 255;
            _[ma | 22] = i >>> 8 & 255;
            _[ma | 23] = i & 255;
            _[ma | 24] = j >>> 24;
            _[ma | 25] = j >>> 16 & 255;
            _[ma | 26] = j >>> 8 & 255;
            _[ma | 27] = j & 255;
            _[ma | 28] = k >>> 24;
            _[ma | 29] = k >>> 16 & 255;
            _[ma | 30] = k >>> 8 & 255;
            _[ma | 31] = k & 255;
            _[ma | 32] = l >>> 24;
            _[ma | 33] = l >>> 16 & 255;
            _[ma | 34] = l >>> 8 & 255;
            _[ma | 35] = l & 255;
            _[ma | 36] = m >>> 24;
            _[ma | 37] = m >>> 16 & 255;
            _[ma | 38] = m >>> 8 & 255;
            _[ma | 39] = m & 255;
            _[ma | 40] = n >>> 24;
            _[ma | 41] = n >>> 16 & 255;
            _[ma | 42] = n >>> 8 & 255;
            _[ma | 43] = n & 255;
            _[ma | 44] = o >>> 24;
            _[ma | 45] = o >>> 16 & 255;
            _[ma | 46] = o >>> 8 & 255;
            _[ma | 47] = o & 255;
            _[ma | 48] = p >>> 24;
            _[ma | 49] = p >>> 16 & 255;
            _[ma | 50] = p >>> 8 & 255;
            _[ma | 51] = p & 255;
            _[ma | 52] = q >>> 24;
            _[ma | 53] = q >>> 16 & 255;
            _[ma | 54] = q >>> 8 & 255;
            _[ma | 55] = q & 255;
            _[ma | 56] = r >>> 24;
            _[ma | 57] = r >>> 16 & 255;
            _[ma | 58] = r >>> 8 & 255;
            _[ma | 59] = r & 255;
            _[ma | 60] = s >>> 24;
            _[ma | 61] = s >>> 16 & 255;
            _[ma | 62] = s >>> 8 & 255;
            _[ma | 63] = s & 255
        }

        function da() {
            d = 1779033703;
            e = 4089235720;
            f = 3144134277;
            g = 2227873595;
            h = 1013904242;
            i = 4271175723;
            j = 2773480762;
            k = 1595750129;
            l = 1359893119;
            m = 2917565137;
            n = 2600822924;
            o = 725511199;
            p = 528734635;
            q = 4215389547;
            r = 1541459225;
            s = 327033209;
            t = u = 0
        }

        function ea(ma, na, oa, pa, qa, ra, sa, ta, ua, va, wa, xa, ya, za, Aa, Ba, Ca, Da) {
            ma = ma | 0;
            na = na | 0;
            oa = oa | 0;
            pa = pa | 0;
            qa = qa | 0;
            ra = ra | 0;
            sa = sa | 0;
            ta = ta | 0;
            ua = ua | 0;
            va = va | 0;
            wa = wa | 0;
            xa = xa | 0;
            ya = ya | 0;
            za = za | 0;
            Aa = Aa | 0;
            Ba = Ba | 0;
            Ca = Ca | 0;
            Da = Da | 0;
            d = ma;
            e = na;
            f = oa;
            g = pa;
            h = qa;
            i = ra;
            j = sa;
            k = ta;
            l = ua;
            m = va;
            n = wa;
            o = xa;
            p = ya;
            q = za;
            r = Aa;
            s = Ba;
            t = Ca;
            u = Da
        }

        function fa(ma, na) {
            ma = ma | 0;
            na = na | 0;
            var oa = 0;
            if (ma & 127) return -1;
            while ((na | 0) >= 128) {
                ba(ma);
                ma = ma + 128 | 0;
                na = na - 128 | 0;
                oa = oa + 128 | 0
            }
            t = t + oa | 0;
            if (t >>> 0 < oa >>> 0) u = u + 1 | 0;
            return oa | 0
        }

        function ga(ma, na, oa) {
            ma = ma | 0;
            na = na | 0;
            oa = oa | 0;
            var pa = 0,
                qa = 0;
            if (ma & 127) return -1;
            if (~oa)
                if (oa & 63) return -1;
            if ((na | 0) >= 128) {
                pa = fa(ma, na) | 0;
                if ((pa | 0) == -1) return -1;
                ma = ma + pa | 0;
                na = na - pa | 0
            }
            pa = pa + na | 0;
            t = t + na | 0;
            if (t >>> 0 < na >>> 0) u = u + 1 | 0;
            _[ma | na] = 128;
            if ((na | 0) >= 112) {
                for (qa = na + 1 | 0;
                    (qa | 0) < 128; qa = qa + 1 | 0) _[ma | qa] = 0;
                ba(ma);
                na = 0;
                _[ma | 0] = 0
            }
            for (qa = na + 1 | 0;
                (qa | 0) < 123; qa = qa + 1 | 0) _[ma | qa] = 0;
            _[ma | 120] = u >>> 21 & 255;
            _[ma | 121] = u >>> 13 & 255;
            _[ma | 122] = u >>> 5 & 255;
            _[ma | 123] = u << 3 & 255 | t >>> 29;
            _[ma | 124] = t >>> 21 & 255;
            _[ma | 125] = t >>> 13 & 255;
            _[ma | 126] = t >>> 5 & 255;
            _[ma | 127] = t << 3 & 255;
            ba(ma);
            if (~oa) ca(oa);
            return pa | 0
        }

        function ha() {
            d = v;
            e = w;
            f = x;
            g = y;
            h = z;
            i = A;
            j = B;
            k = C;
            l = D;
            m = E;
            n = F;
            o = G;
            p = H;
            q = I;
            r = J;
            s = K;
            t = 128;
            u = 0
        }

        function ia() {
            d = L;
            e = M;
            f = N;
            g = O;
            h = P;
            i = Q;
            j = R;
            k = S;
            l = T;
            m = U;
            n = V;
            o = W;
            p = X;
            q = Y;
            r = Z;
            s = $;
            t = 128;
            u = 0
        }

        function ja(ma, na, oa, pa, qa, ra, sa, ta, ua, va, wa, xa, ya, za, Aa, Ba, Ca, Da, Ea, Fa, Ga, Ha, Ia, Ja, Ka, La, Ma, Na, Oa, Pa, Qa, Ra) {
            ma = ma | 0;
            na = na | 0;
            oa = oa | 0;
            pa = pa | 0;
            qa = qa | 0;
            ra = ra | 0;
            sa = sa | 0;
            ta = ta | 0;
            ua = ua | 0;
            va = va | 0;
            wa = wa | 0;
            xa = xa | 0;
            ya = ya | 0;
            za = za | 0;
            Aa = Aa | 0;
            Ba = Ba | 0;
            Ca = Ca | 0;
            Da = Da | 0;
            Ea = Ea | 0;
            Fa = Fa | 0;
            Ga = Ga | 0;
            Ha = Ha | 0;
            Ia = Ia | 0;
            Ja = Ja | 0;
            Ka = Ka | 0;
            La = La | 0;
            Ma = Ma | 0;
            Na = Na | 0;
            Oa = Oa | 0;
            Pa = Pa | 0;
            Qa = Qa | 0;
            Ra = Ra | 0;
            da();
            aa(ma ^ 1549556828, na ^ 1549556828, oa ^ 1549556828, pa ^ 1549556828, qa ^ 1549556828, ra ^ 1549556828, sa ^ 1549556828, ta ^ 1549556828, ua ^ 1549556828, va ^ 1549556828, wa ^ 1549556828, xa ^ 1549556828, ya ^ 1549556828, za ^ 1549556828, Aa ^ 1549556828, Ba ^ 1549556828, Ca ^ 1549556828, Da ^ 1549556828, Ea ^ 1549556828, Fa ^ 1549556828, Ga ^ 1549556828, Ha ^ 1549556828, Ia ^ 1549556828, Ja ^ 1549556828, Ka ^ 1549556828, La ^ 1549556828, Ma ^ 1549556828, Na ^ 1549556828, Oa ^ 1549556828, Pa ^ 1549556828, Qa ^ 1549556828, Ra ^ 1549556828);
            L = d;
            M = e;
            N = f;
            O = g;
            P = h;
            Q = i;
            R = j;
            S = k;
            T = l;
            U = m;
            V = n;
            W = o;
            X = p;
            Y = q;
            Z = r;
            $ = s;
            da();
            aa(ma ^ 909522486, na ^ 909522486, oa ^ 909522486, pa ^ 909522486, qa ^ 909522486, ra ^ 909522486, sa ^ 909522486, ta ^ 909522486, ua ^ 909522486, va ^ 909522486, wa ^ 909522486, xa ^ 909522486, ya ^ 909522486, za ^ 909522486, Aa ^ 909522486, Ba ^ 909522486, Ca ^ 909522486, Da ^ 909522486, Ea ^ 909522486, Fa ^ 909522486, Ga ^ 909522486, Ha ^ 909522486, Ia ^ 909522486, Ja ^ 909522486, Ka ^ 909522486, La ^ 909522486, Ma ^ 909522486, Na ^ 909522486, Oa ^ 909522486, Pa ^ 909522486, Qa ^ 909522486, Ra ^ 909522486);
            v = d;
            w = e;
            x = f;
            y = g;
            z = h;
            A = i;
            B = j;
            C = k;
            D = l;
            E = m;
            F = n;
            G = o;
            H = p;
            I = q;
            J = r;
            K = s;
            t = 128;
            u = 0
        }

        function ka(ma, na, oa) {
            ma = ma | 0;
            na = na | 0;
            oa = oa | 0;
            var pa = 0,
                qa = 0,
                ra = 0,
                sa = 0,
                ta = 0,
                ua = 0,
                va = 0,
                wa = 0,
                xa = 0,
                ya = 0,
                za = 0,
                Aa = 0,
                Ba = 0,
                Ca = 0,
                Da = 0,
                Ea = 0,
                Fa = 0;
            if (ma & 127) return -1;
            if (~oa)
                if (oa & 63) return -1;
            Fa = ga(ma, na, -1) | 0;
            pa = d;
            qa = e;
            ra = f;
            sa = g;
            ta = h;
            ua = i;
            va = j;
            wa = k;
            xa = l;
            ya = m;
            za = n;
            Aa = o;
            Ba = p;
            Ca = q;
            Da = r;
            Ea = s;
            ia();
            aa(pa, qa, ra, sa, ta, ua, va, wa, xa, ya, za, Aa, Ba, Ca, Da, Ea, 2147483648, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1536);
            if (~oa) ca(oa);
            return Fa | 0
        }

        function la(ma, na, oa, pa, qa) {
            ma = ma | 0;
            na = na | 0;
            oa = oa | 0;
            pa = pa | 0;
            qa = qa | 0;
            var ra = 0,
                sa = 0,
                ta = 0,
                ua = 0,
                va = 0,
                wa = 0,
                xa = 0,
                ya = 0,
                za = 0,
                Aa = 0,
                Ba = 0,
                Ca = 0,
                Da = 0,
                Ea = 0,
                Fa = 0,
                Ga = 0,
                Ha = 0,
                Ia = 0,
                Ja = 0,
                Ka = 0,
                La = 0,
                Ma = 0,
                Na = 0,
                Oa = 0,
                Pa = 0,
                Qa = 0,
                Ra = 0,
                Sa = 0,
                Ta = 0,
                Ua = 0,
                Va = 0,
                Wa = 0;
            if (ma & 127) return -1;
            if (~qa)
                if (qa & 63) return -1;
            _[ma + na | 0] = oa >>> 24;
            _[ma + na + 1 | 0] = oa >>> 16 & 255;
            _[ma + na + 2 | 0] = oa >>> 8 & 255;
            _[ma + na + 3 | 0] = oa & 255;
            ka(ma, na + 4 | 0, -1) | 0;
            ra = Ha = d;
            sa = Ia = e;
            ta = Ja = f;
            ua = Ka = g;
            va = La = h;
            wa = Ma = i;
            xa = Na = j;
            ya = Oa = k;
            za = Pa = l;
            Aa = Qa = m;
            Ba = Ra = n;
            Ca = Sa = o;
            Da = Ta = p;
            Ea = Ua = q;
            Fa = Va = r;
            Ga = Wa = s;
            pa = pa - 1 | 0;
            while ((pa | 0) > 0) {
                ha();
                aa(Ha, Ia, Ja, Ka, La, Ma, Na, Oa, Pa, Qa, Ra, Sa, Ta, Ua, Va, Wa, 2147483648, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1536);
                Ha = d;
                Ia = e;
                Ja = f;
                Ka = g;
                La = h;
                Ma = i;
                Na = j;
                Oa = k;
                Pa = l;
                Qa = m;
                Ra = n;
                Sa = o;
                Ta = p;
                Ua = q;
                Va = r;
                Wa = s;
                ia();
                aa(Ha, Ia, Ja, Ka, La, Ma, Na, Oa, Pa, Qa, Ra, Sa, Ta, Ua, Va, Wa, 2147483648, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1536);
                Ha = d;
                Ia = e;
                Ja = f;
                Ka = g;
                La = h;
                Ma = i;
                Na = j;
                Oa = k;
                Pa = l;
                Qa = m;
                Ra = n;
                Sa = o;
                Ta = p;
                Ua = q;
                Va = r;
                Wa = s;
                ra = ra ^ d;
                sa = sa ^ e;
                ta = ta ^ f;
                ua = ua ^ g;
                va = va ^ h;
                wa = wa ^ i;
                xa = xa ^ j;
                ya = ya ^ k;
                za = za ^ l;
                Aa = Aa ^ m;
                Ba = Ba ^ n;
                Ca = Ca ^ o;
                Da = Da ^ p;
                Ea = Ea ^ q;
                Fa = Fa ^ r;
                Ga = Ga ^ s;
                pa = pa - 1 | 0
            }
            d = ra;
            e = sa;
            f = ta;
            g = ua;
            h = va;
            i = wa;
            j = xa;
            k = ya;

            l = za;
            m = Aa;
            n = Ba;
            o = Ca;
            p = Da;
            q = Ea;
            r = Fa;
            s = Ga;
            if (~qa) ca(qa);
            return 0
        }
        return {
            reset: da,
            init: ea,
            process: fa,
            finish: ga,
            hmac_reset: ha,
            hmac_init: ja,
            hmac_finish: ka,
            pbkdf2_generate_block: la
        }
    }

    function ra(a) {
        a = a || {}, this.heap = r(Uint8Array, a), this.asm = a.asm || qa({
            Uint8Array: Uint8Array
        }, null, this.heap.buffer), this.BLOCK_SIZE = Sc, this.HASH_SIZE = Tc, this.reset()
    }

    function sa() {
        return null === Vc && (Vc = new ra({
            heapSize: 1048576
        })), Vc
    }

    function ta(a) {
        if (void 0 === a) throw new SyntaxError("data required");
        return sa().reset().process(a).finish().result
    }

    function ua(a) {
        var b = ta(a);
        return j(b)
    }

    function va(a) {
        var b = ta(a);
        return k(b)
    }

    function wa(a) {
        if (a = a || {}, !a.hash) throw new SyntaxError("option 'hash' is required");
        if (!a.hash.HASH_SIZE) throw new SyntaxError("option 'hash' supplied doesn't seem to be a valid hash function");
        return this.hash = a.hash, this.BLOCK_SIZE = this.hash.BLOCK_SIZE, this.HMAC_SIZE = this.hash.HASH_SIZE, this.key = null, this.verify = null, this.result = null, (void 0 !== a.password || void 0 !== a.verify) && this.reset(a), this
    }

    function xa(a, b) {
        if (o(b) && (b = new Uint8Array(b)), n(b) && (b = f(b)), !p(b)) throw new TypeError("password isn't of expected type");
        var c = new Uint8Array(a.BLOCK_SIZE);
        return c.set(b.length > a.BLOCK_SIZE ? a.reset().process(b).finish().result : b), c
    }

    function ya(a) {
        if (o(a) || p(a)) a = new Uint8Array(a);
        else {
            if (!n(a)) throw new TypeError("verify tag isn't of expected type");
            a = f(a)
        } if (a.length !== this.HMAC_SIZE) throw new d("illegal verification tag size");
        this.verify = a
    }

    function za(a) {
        a = a || {};
        var b = a.password;
        if (null === this.key && !n(b) && !b) throw new c("no key is associated with the instance");
        this.result = null, this.hash.reset(), (b || n(b)) && (this.key = xa(this.hash, b));
        for (var d = new Uint8Array(this.key), e = 0; e < d.length; ++e) d[e] ^= 54;
        this.hash.process(d);
        var f = a.verify;
        return void 0 !== f ? ya.call(this, f) : this.verify = null, this
    }

    function Aa(a) {
        if (null === this.key) throw new c("no key is associated with the instance");
        if (null !== this.result) throw new c("state must be reset before processing new data");
        return this.hash.process(a), this
    }

    function Ba() {
        if (null === this.key) throw new c("no key is associated with the instance");
        if (null !== this.result) throw new c("state must be reset before processing new data");
        for (var a = this.hash.finish().result, b = new Uint8Array(this.key), d = 0; d < b.length; ++d) b[d] ^= 92;
        var e = this.verify,
            f = this.hash.reset().process(b).process(a).finish().result;
        if (e)
            if (e.length === f.length) {
                for (var g = 0, d = 0; d < e.length; d++) g |= e[d] ^ f[d];
                this.result = !g
            } else this.result = !1;
        else this.result = f;
        return this
    }

    function Ca(a) {
        return a = a || {}, a.hash instanceof fa || (a.hash = ga()), wa.call(this, a), this
    }

    function Da(a) {
        a = a || {}, this.result = null, this.hash.reset();
        var b = a.password;
        if (void 0 !== b) {
            n(b) && (b = f(b));
            var c = this.key = xa(this.hash, b);
            this.hash.reset().asm.hmac_init(c[0] << 24 | c[1] << 16 | c[2] << 8 | c[3], c[4] << 24 | c[5] << 16 | c[6] << 8 | c[7], c[8] << 24 | c[9] << 16 | c[10] << 8 | c[11], c[12] << 24 | c[13] << 16 | c[14] << 8 | c[15], c[16] << 24 | c[17] << 16 | c[18] << 8 | c[19], c[20] << 24 | c[21] << 16 | c[22] << 8 | c[23], c[24] << 24 | c[25] << 16 | c[26] << 8 | c[27], c[28] << 24 | c[29] << 16 | c[30] << 8 | c[31], c[32] << 24 | c[33] << 16 | c[34] << 8 | c[35], c[36] << 24 | c[37] << 16 | c[38] << 8 | c[39], c[40] << 24 | c[41] << 16 | c[42] << 8 | c[43], c[44] << 24 | c[45] << 16 | c[46] << 8 | c[47], c[48] << 24 | c[49] << 16 | c[50] << 8 | c[51], c[52] << 24 | c[53] << 16 | c[54] << 8 | c[55], c[56] << 24 | c[57] << 16 | c[58] << 8 | c[59], c[60] << 24 | c[61] << 16 | c[62] << 8 | c[63])
        } else this.hash.asm.hmac_reset();
        var d = a.verify;
        return void 0 !== d ? ya.call(this, d) : this.verify = null, this
    }

    function Ea() {
        if (null === this.key) throw new c("no key is associated with the instance");
        if (null !== this.result) throw new c("state must be reset before processing new data");
        var a = this.hash,
            b = this.hash.asm,
            d = this.hash.heap;
        b.hmac_finish(a.pos, a.len, 0);
        var e = this.verify,
            f = new Uint8Array(Lc);
        if (f.set(d.subarray(0, Lc)), e)
            if (e.length === f.length) {
                for (var g = 0, h = 0; h < e.length; h++) g |= e[h] ^ f[h];
                this.result = !g
            } else this.result = !1;
        else this.result = f;
        return this
    }

    function Fa() {
        return null === Yc && (Yc = new Ca), Yc
    }

    function Ga(a) {
        return a = a || {}, a.hash instanceof la || (a.hash = ma()), wa.call(this, a), this
    }

    function Ha(a) {
        a = a || {}, this.result = null, this.hash.reset();
        var b = a.password;
        if (void 0 !== b) {
            n(b) && (b = f(b));
            var c = this.key = xa(this.hash, b);
            this.hash.reset().asm.hmac_init(c[0] << 24 | c[1] << 16 | c[2] << 8 | c[3], c[4] << 24 | c[5] << 16 | c[6] << 8 | c[7], c[8] << 24 | c[9] << 16 | c[10] << 8 | c[11], c[12] << 24 | c[13] << 16 | c[14] << 8 | c[15], c[16] << 24 | c[17] << 16 | c[18] << 8 | c[19], c[20] << 24 | c[21] << 16 | c[22] << 8 | c[23], c[24] << 24 | c[25] << 16 | c[26] << 8 | c[27], c[28] << 24 | c[29] << 16 | c[30] << 8 | c[31], c[32] << 24 | c[33] << 16 | c[34] << 8 | c[35], c[36] << 24 | c[37] << 16 | c[38] << 8 | c[39], c[40] << 24 | c[41] << 16 | c[42] << 8 | c[43], c[44] << 24 | c[45] << 16 | c[46] << 8 | c[47], c[48] << 24 | c[49] << 16 | c[50] << 8 | c[51], c[52] << 24 | c[53] << 16 | c[54] << 8 | c[55], c[56] << 24 | c[57] << 16 | c[58] << 8 | c[59], c[60] << 24 | c[61] << 16 | c[62] << 8 | c[63])
        } else this.hash.asm.hmac_reset();
        var d = a.verify;
        return void 0 !== d ? ya.call(this, d) : this.verify = null, this
    }

    function Ia() {
        if (null === this.key) throw new c("no key is associated with the instance");
        if (null !== this.result) throw new c("state must be reset before processing new data");
        var a = this.hash,
            b = this.hash.asm,
            d = this.hash.heap;
        b.hmac_finish(a.pos, a.len, 0);
        var e = this.verify,
            f = new Uint8Array(Pc);
        if (f.set(d.subarray(0, Pc)), e)
            if (e.length === f.length) {
                for (var g = 0, h = 0; h < e.length; h++) g |= e[h] ^ f[h];
                this.result = !g
            } else this.result = !1;
        else this.result = f;
        return this
    }

    function Ja() {
        return null === $c && ($c = new Ga), $c
    }

    function Ka(a, b) {
        if (void 0 === a) throw new SyntaxError("data required");
        if (void 0 === b) throw new SyntaxError("password required");
        return Fa().reset({
            password: b
        }).process(a).finish().result
    }

    function La(a, b) {
        var c = Ka(a, b);
        return j(c)
    }

    function Ma(a, b) {
        var c = Ka(a, b);
        return k(c)
    }

    function Na(a, b) {
        if (void 0 === a) throw new SyntaxError("data required");
        if (void 0 === b) throw new SyntaxError("password required");
        return Ja().reset({
            password: b
        }).process(a).finish().result
    }

    function Oa(a, b) {
        var c = Na(a, b);
        return j(c)
    }

    function Pa(a, b) {
        var c = Na(a, b);
        return k(c)
    }

    function Qa(a) {
        if (a = a || {}, !a.hmac) throw new SyntaxError("option 'hmac' is required");
        if (!a.hmac.HMAC_SIZE) throw new SyntaxError("option 'hmac' supplied doesn't seem to be a valid HMAC function");
        this.hmac = a.hmac, this.count = a.count || 4096, this.length = a.length || this.hmac.HMAC_SIZE, this.result = null;
        var b = a.password;
        return (b || n(b)) && this.reset(a), this
    }

    function Ra(a) {
        return this.result = null, this.hmac.reset(a), this
    }

    function Sa(a, b, e) {
        if (null !== this.result) throw new c("state must be reset before processing new data");
        if (!a && !n(a)) throw new d("bad 'salt' value");
        b = b || this.count, e = e || this.length, this.result = new Uint8Array(e);
        for (var f = Math.ceil(e / this.hmac.HMAC_SIZE), g = 1; f >= g; ++g) {
            var h = (g - 1) * this.hmac.HMAC_SIZE,
                i = (f > g ? 0 : e % this.hmac.HMAC_SIZE) || this.hmac.HMAC_SIZE,
                j = new Uint8Array(this.hmac.reset().process(a).process(new Uint8Array([g >>> 24 & 255, g >>> 16 & 255, g >>> 8 & 255, 255 & g])).finish().result);
            this.result.set(j.subarray(0, i), h);
            for (var k = 1; b > k; ++k) {
                j = new Uint8Array(this.hmac.reset().process(j).finish().result);
                for (var l = 0; i > l; ++l) this.result[h + l] ^= j[l]
            }
        }
        return this
    }

    function Ta(a) {
        return a = a || {}, a.hmac instanceof Ca || (a.hmac = Fa()), Qa.call(this, a), this
    }

    function Ua(a, b, e) {
        if (null !== this.result) throw new c("state must be reset before processing new data");
        if (!a && !n(a)) throw new d("bad 'salt' value");
        b = b || this.count, e = e || this.length, this.result = new Uint8Array(e);
        for (var f = Math.ceil(e / this.hmac.HMAC_SIZE), g = 1; f >= g; ++g) {
            var h = (g - 1) * this.hmac.HMAC_SIZE,
                i = (f > g ? 0 : e % this.hmac.HMAC_SIZE) || this.hmac.HMAC_SIZE;
            this.hmac.reset().process(a), this.hmac.hash.asm.pbkdf2_generate_block(this.hmac.hash.pos, this.hmac.hash.len, g, b, 0), this.result.set(this.hmac.hash.heap.subarray(0, i), h)
        }
        return this
    }

    function Va() {
        return null === bd && (bd = new Ta), bd
    }

    function Wa(a) {
        return a = a || {}, a.hmac instanceof Ga || (a.hmac = Ja()), Qa.call(this, a), this
    }

    function Xa(a, b, e) {
        if (null !== this.result) throw new c("state must be reset before processing new data");
        if (!a && !n(a)) throw new d("bad 'salt' value");
        b = b || this.count, e = e || this.length, this.result = new Uint8Array(e);
        for (var f = Math.ceil(e / this.hmac.HMAC_SIZE), g = 1; f >= g; ++g) {
            var h = (g - 1) * this.hmac.HMAC_SIZE,
                i = (f > g ? 0 : e % this.hmac.HMAC_SIZE) || this.hmac.HMAC_SIZE;
            this.hmac.reset().process(a), this.hmac.hash.asm.pbkdf2_generate_block(this.hmac.hash.pos, this.hmac.hash.len, g, b, 0), this.result.set(this.hmac.hash.heap.subarray(0, i), h)
        }
        return this
    }

    function Ya() {
        return null === dd && (dd = new Wa), dd
    }

    function Za(a, b, c, d) {
        if (void 0 === a) throw new SyntaxError("password required");
        if (void 0 === b) throw new SyntaxError("salt required");
        return Va().reset({
            password: a
        }).generate(b, c, d).result
    }

    function $a(a, b, c, d) {
        var e = Za(a, b, c, d);
        return j(e)
    }

    function _a(a, b, c, d) {
        var e = Za(a, b, c, d);
        return k(e)
    }

    function ab(a, b, c, d) {
        if (void 0 === a) throw new SyntaxError("password required");
        if (void 0 === b) throw new SyntaxError("salt required");
        return Ya().reset({
            password: a
        }).generate(b, c, d).result
    }

    function bb(a, b, c, d) {
        var e = ab(a, b, c, d);
        return j(e)
    }

    function cb(a, b, c, d) {
        var e = ab(a, b, c, d);
        return k(e)
    }

    function db() {
        if (void 0 !== jd) d = new Uint8Array(32), ed.call(jd, d), md(d);
        else {
            var a, c, d = new sc(3);
            d[0] = hd(), d[1] = gd(), d[2] = kd(), d = new Uint8Array(d.buffer);
            var e = "";
            void 0 !== b.location ? e += b.location.href : void 0 !== b.process && (e += b.process.pid + b.process.title);
            var f = Ya();
            for (a = 0; 100 > a; a++) d = f.reset({
                password: d
            }).generate(e, 1e3, 32).result, c = kd(), d[0] ^= c >>> 24, d[1] ^= c >>> 16, d[2] ^= c >>> 8, d[3] ^= c;
            md(d)
        }
        nd = 0, od = !0
    }

    function eb(a) {
        if (!o(a) && !q(a)) throw new TypeError("bad seed type");
        var b = a.byteOffset || 0,
            c = a.byteLength || a.length,
            d = new Uint8Array(a.buffer || a, b, c);
        md(d), nd = 0;
        for (var e = 0, f = 0; f < d.length; f++) e |= d[f], d[f] = 0;
        return 0 !== e && (qd += 4 * c), pd = qd >= rd
    }

    function fb(a) {
        if (od || db(), !pd && void 0 === jd) {
            if (!sd) throw new e("No strong PRNGs available. Use asmCrypto.random.seed().");
            void 0 !== tc && tc.error("No strong PRNGs available; your security is greatly lowered. Use asmCrypto.random.seed().")
        }
        if (!td && !pd && void 0 !== jd && void 0 !== tc) {
            var b = (new Error).stack;
            ud[b] |= 0, ud[b]++ || tc.warn("asmCrypto PRNG not seeded; your security relies on your system PRNG. If this is not acceptable, use asmCrypto.random.seed().")
        }
        if (!o(a) && !q(a)) throw new TypeError("unexpected buffer type");
        var c, d, f = a.byteOffset || 0,
            g = a.byteLength || a.length,
            h = new Uint8Array(a.buffer || a, f, g);
        for (void 0 !== jd && ed.call(jd, h), c = 0; g > c; c++) 0 === (3 & c) && (nd >= 1099511627776 && db(), d = ld(), nd++), h[c] ^= d, d >>>= 8;
        return a
    }

    function gb() {
        (!od || nd >= 1099511627776) && db();
        var a = (1048576 * ld() + (ld() >>> 12)) / 4503599627370496;
        return nd += 2, a
    }

    function hb(a, b, c) {
        "use asm";
        var d = 0;
        var e = new a.Uint32Array(c);
        var f = a.Math.imul;

        function g(u) {
            u = u | 0;
            d = u = u + 31 & -32;
            return u | 0
        }

        function h(u) {
            u = u | 0;
            var v = 0;
            v = d;
            d = v + (u + 31 & -32) | 0;
            return v | 0
        }

        function i(u) {
            u = u | 0;
            d = d - (u + 31 & -32) | 0
        }

        function j(u, v, w) {
            u = u | 0;
            v = v | 0;
            w = w | 0;
            var x = 0;
            if ((v | 0) > (w | 0)) {
                for (;
                    (x | 0) < (u | 0); x = x + 4 | 0) {
                    e[w + x >> 2] = e[v + x >> 2]
                }
            } else {
                for (x = u - 4 | 0;
                    (x | 0) >= 0; x = x - 4 | 0) {
                    e[w + x >> 2] = e[v + x >> 2]
                }
            }
        }

        function k(u, v, w) {
            u = u | 0;
            v = v | 0;
            w = w | 0;
            var x = 0;
            for (;
                (x | 0) < (u | 0); x = x + 4 | 0) {
                e[w + x >> 2] = v
            }
        }

        function l(u, v, w, x) {
            u = u | 0;
            v = v | 0;
            w = w | 0;
            x = x | 0;
            var y = 0,
                z = 0,
                A = 0,
                B = 0,
                C = 0;
            if ((x | 0) <= 0) x = v;
            if ((x | 0) < (v | 0)) v = x;
            z = 1;
            for (;
                (C | 0) < (v | 0); C = C + 4 | 0) {
                y = ~e[u + C >> 2];
                A = (y & 65535) + z | 0;
                B = (y >>> 16) + (A >>> 16) | 0;
                e[w + C >> 2] = B << 16 | A & 65535;
                z = B >>> 16
            }
            for (;
                (C | 0) < (x | 0); C = C + 4 | 0) {
                e[w + C >> 2] = z - 1 | 0
            }
            return z | 0
        }

        function m(u, v, w, x) {
            u = u | 0;
            v = v | 0;
            w = w | 0;
            x = x | 0;
            var y = 0,
                z = 0,
                A = 0;
            if ((v | 0) > (x | 0)) {
                for (A = v - 4 | 0;
                    (A | 0) >= (x | 0); A = A - 4 | 0) {
                    if (e[u + A >> 2] | 0) return 1
                }
            } else {
                for (A = x - 4 | 0;
                    (A | 0) >= (v | 0); A = A - 4 | 0) {
                    if (e[w + A >> 2] | 0) return -1
                }
            }
            for (;
                (A | 0) >= 0; A = A - 4 | 0) {
                y = e[u + A >> 2] | 0, z = e[w + A >> 2] | 0;
                if (y >>> 0 < z >>> 0) return -1;
                if (y >>> 0 > z >>> 0) return 1
            }
            return 0
        }

        function n(u, v) {
            u = u | 0;
            v = v | 0;
            var w = 0;
            for (w = v - 4 | 0;
                (w | 0) >= 0; w = w - 4 | 0) {
                if (e[u + w >> 2] | 0) return w + 4 | 0
            }
            return 0
        }

        function o(u, v, w, x, y, z) {
            u = u | 0;
            v = v | 0;
            w = w | 0;
            x = x | 0;
            y = y | 0;
            z = z | 0;
            var A = 0,
                B = 0,
                C = 0,
                D = 0,
                E = 0,
                F = 0;
            if ((v | 0) < (x | 0)) {
                D = u, u = w, w = D;
                D = v, v = x, x = D
            }
            if ((z | 0) <= 0) z = v + 4 | 0;
            if ((z | 0) < (x | 0)) v = x = z;
            for (;
                (F | 0) < (x | 0); F = F + 4 | 0) {
                A = e[u + F >> 2] | 0;
                B = e[w + F >> 2] | 0;
                D = ((A & 65535) + (B & 65535) | 0) + C | 0;
                E = ((A >>> 16) + (B >>> 16) | 0) + (D >>> 16) | 0;
                e[y + F >> 2] = D & 65535 | E << 16;
                C = E >>> 16
            }
            for (;
                (F | 0) < (v | 0); F = F + 4 | 0) {
                A = e[u + F >> 2] | 0;
                D = (A & 65535) + C | 0;
                E = (A >>> 16) + (D >>> 16) | 0;
                e[y + F >> 2] = D & 65535 | E << 16;
                C = E >>> 16
            }
            for (;
                (F | 0) < (z | 0); F = F + 4 | 0) {
                e[y + F >> 2] = C | 0;
                C = 0
            }
            return C | 0
        }

        function p(u, v, w, x, y, z) {
            u = u | 0;
            v = v | 0;
            w = w | 0;
            x = x | 0;
            y = y | 0;
            z = z | 0;
            var A = 0,
                B = 0,
                C = 0,
                D = 0,
                E = 0,
                F = 0;
            if ((z | 0) <= 0) z = (v | 0) > (x | 0) ? v + 4 | 0 : x + 4 | 0;
            if ((z | 0) < (v | 0)) v = z;
            if ((z | 0) < (x | 0)) x = z;
            if ((v | 0) < (x | 0)) {
                for (;
                    (F | 0) < (v | 0); F = F + 4 | 0) {
                    A = e[u + F >> 2] | 0;
                    B = e[w + F >> 2] | 0;
                    D = ((A & 65535) - (B & 65535) | 0) + C | 0;
                    E = ((A >>> 16) - (B >>> 16) | 0) + (D >> 16) | 0;
                    e[y + F >> 2] = D & 65535 | E << 16;
                    C = E >> 16
                }
                for (;
                    (F | 0) < (x | 0); F = F + 4 | 0) {
                    B = e[w + F >> 2] | 0;
                    D = C - (B & 65535) | 0;
                    E = (D >> 16) - (B >>> 16) | 0;
                    e[y + F >> 2] = D & 65535 | E << 16;
                    C = E >> 16
                }
            } else {
                for (;
                    (F | 0) < (x | 0); F = F + 4 | 0) {
                    A = e[u + F >> 2] | 0;
                    B = e[w + F >> 2] | 0;
                    D = ((A & 65535) - (B & 65535) | 0) + C | 0;
                    E = ((A >>> 16) - (B >>> 16) | 0) + (D >> 16) | 0;
                    e[y + F >> 2] = D & 65535 | E << 16;
                    C = E >> 16
                }
                for (;
                    (F | 0) < (v | 0); F = F + 4 | 0) {
                    A = e[u + F >> 2] | 0;
                    D = (A & 65535) + C | 0;
                    E = (A >>> 16) + (D >> 16) | 0;
                    e[y + F >> 2] = D & 65535 | E << 16;
                    C = E >> 16
                }
            }
            for (;
                (F | 0) < (z | 0); F = F + 4 | 0) {
                e[y + F >> 2] = C | 0
            }
            return C | 0
        }

        function q(u, v, w, x, y, z) {
            u = u | 0;
            v = v | 0;
            w = w | 0;
            x = x | 0;
            y = y | 0;
            z = z | 0;
            var A = 0,
                B = 0,
                C = 0,
                D = 0,
                E = 0,
                F = 0,
                G = 0,
                H = 0,
                I = 0,
                J = 0,
                K = 0,
                L = 0,
                M = 0,
                N = 0,
                O = 0,
                P = 0,
                Q = 0,
                R = 0,
                S = 0,
                T = 0,
                U = 0,
                V = 0,
                W = 0,
                X = 0,
                Y = 0,
                Z = 0,
                $ = 0,
                _ = 0,
                aa = 0,
                ba = 0,
                ca = 0,
                da = 0,
                ea = 0,
                fa = 0,
                ga = 0,
                ha = 0,
                ia = 0,
                ja = 0,
                ka = 0,
                la = 0,
                ma = 0,
                na = 0,
                oa = 0,
                pa = 0,
                qa = 0,
                ra = 0,
                sa = 0,
                ta = 0,
                ua = 0,
                va = 0,
                wa = 0,
                xa = 0,
                ya = 0,
                za = 0,
                Aa = 0,
                Ba = 0,
                Ca = 0;
            if ((v | 0) > (x | 0)) {
                ua = u, va = v;
                u = w, v = x;
                w = ua, x = va
            }
            xa = v + x | 0;
            if ((z | 0) > (xa | 0) | (z | 0) <= 0) z = xa;
            if ((z | 0) < (v | 0)) v = z;
            if ((z | 0) < (x | 0)) x = z;
            for (;
                (ya | 0) < (v | 0); ya = ya + 32 | 0) {
                za = u + ya | 0;
                I = e[(za | 0) >> 2] | 0, J = e[(za | 4) >> 2] | 0, K = e[(za | 8) >> 2] | 0, L = e[(za | 12) >> 2] | 0, M = e[(za | 16) >> 2] | 0, N = e[(za | 20) >> 2] | 0, O = e[(za | 24) >> 2] | 0, P = e[(za | 28) >> 2] | 0, A = I & 65535, B = J & 65535, C = K & 65535, D = L & 65535, E = M & 65535, F = N & 65535, G = O & 65535, H = P & 65535, I = I >>> 16, J = J >>> 16, K = K >>> 16, L = L >>> 16, M = M >>> 16, N = N >>> 16, O = O >>> 16, P = P >>> 16;
                ma = na = oa = pa = qa = ra = sa = ta = 0;
                for (Aa = 0;
                    (Aa | 0) < (x | 0); Aa = Aa + 32 | 0) {
                    Ba = w + Aa | 0;
                    Ca = y + (ya + Aa | 0) | 0;
                    Y = e[(Ba | 0) >> 2] | 0, Z = e[(Ba | 4) >> 2] | 0, $ = e[(Ba | 8) >> 2] | 0, _ = e[(Ba | 12) >> 2] | 0, aa = e[(Ba | 16) >> 2] | 0, ba = e[(Ba | 20) >> 2] | 0, ca = e[(Ba | 24) >> 2] | 0, da = e[(Ba | 28) >> 2] | 0, Q = Y & 65535, R = Z & 65535, S = $ & 65535, T = _ & 65535, U = aa & 65535, V = ba & 65535, W = ca & 65535, X = da & 65535, Y = Y >>> 16, Z = Z >>> 16, $ = $ >>> 16, _ = _ >>> 16, aa = aa >>> 16, ba = ba >>> 16, ca = ca >>> 16, da = da >>> 16;
                    ea = e[(Ca | 0) >> 2] | 0, fa = e[(Ca | 4) >> 2] | 0, ga = e[(Ca | 8) >> 2] | 0, ha = e[(Ca | 12) >> 2] | 0, ia = e[(Ca | 16) >> 2] | 0, ja = e[(Ca | 20) >> 2] | 0, ka = e[(Ca | 24) >> 2] | 0, la = e[(Ca | 28) >> 2] | 0;
                    ua = ((f(A, Q) | 0) + (ma & 65535) | 0) + (ea & 65535) | 0;
                    va = ((f(I, Q) | 0) + (ma >>> 16) | 0) + (ea >>> 16) | 0;
                    wa = ((f(A, Y) | 0) + (va & 65535) | 0) + (ua >>> 16) | 0;
                    xa = ((f(I, Y) | 0) + (va >>> 16) | 0) + (wa >>> 16) | 0;
                    ea = wa << 16 | ua & 65535;
                    ua = ((f(A, R) | 0) + (xa & 65535) | 0) + (fa & 65535) | 0;
                    va = ((f(I, R) | 0) + (xa >>> 16) | 0) + (fa >>> 16) | 0;
                    wa = ((f(A, Z) | 0) + (va & 65535) | 0) + (ua >>> 16) | 0;
                    xa = ((f(I, Z) | 0) + (va >>> 16) | 0) + (wa >>> 16) | 0;
                    fa = wa << 16 | ua & 65535;
                    ua = ((f(A, S) | 0) + (xa & 65535) | 0) + (ga & 65535) | 0;
                    va = ((f(I, S) | 0) + (xa >>> 16) | 0) + (ga >>> 16) | 0;
                    wa = ((f(A, $) | 0) + (va & 65535) | 0) + (ua >>> 16) | 0;
                    xa = ((f(I, $) | 0) + (va >>> 16) | 0) + (wa >>> 16) | 0;
                    ga = wa << 16 | ua & 65535;
                    ua = ((f(A, T) | 0) + (xa & 65535) | 0) + (ha & 65535) | 0;
                    va = ((f(I, T) | 0) + (xa >>> 16) | 0) + (ha >>> 16) | 0;
                    wa = ((f(A, _) | 0) + (va & 65535) | 0) + (ua >>> 16) | 0;
                    xa = ((f(I, _) | 0) + (va >>> 16) | 0) + (wa >>> 16) | 0;
                    ha = wa << 16 | ua & 65535;
                    ua = ((f(A, U) | 0) + (xa & 65535) | 0) + (ia & 65535) | 0;
                    va = ((f(I, U) | 0) + (xa >>> 16) | 0) + (ia >>> 16) | 0;
                    wa = ((f(A, aa) | 0) + (va & 65535) | 0) + (ua >>> 16) | 0;
                    xa = ((f(I, aa) | 0) + (va >>> 16) | 0) + (wa >>> 16) | 0;
                    ia = wa << 16 | ua & 65535;
                    ua = ((f(A, V) | 0) + (xa & 65535) | 0) + (ja & 65535) | 0;
                    va = ((f(I, V) | 0) + (xa >>> 16) | 0) + (ja >>> 16) | 0;
                    wa = ((f(A, ba) | 0) + (va & 65535) | 0) + (ua >>> 16) | 0;
                    xa = ((f(I, ba) | 0) + (va >>> 16) | 0) + (wa >>> 16) | 0;
                    ja = wa << 16 | ua & 65535;
                    ua = ((f(A, W) | 0) + (xa & 65535) | 0) + (ka & 65535) | 0;
                    va = ((f(I, W) | 0) + (xa >>> 16) | 0) + (ka >>> 16) | 0;
                    wa = ((f(A, ca) | 0) + (va & 65535) | 0) + (ua >>> 16) | 0;
                    xa = ((f(I, ca) | 0) + (va >>> 16) | 0) + (wa >>> 16) | 0;
                    ka = wa << 16 | ua & 65535;
                    ua = ((f(A, X) | 0) + (xa & 65535) | 0) + (la & 65535) | 0;
                    va = ((f(I, X) | 0) + (xa >>> 16) | 0) + (la >>> 16) | 0;
                    wa = ((f(A, da) | 0) + (va & 65535) | 0) + (ua >>> 16) | 0;
                    xa = ((f(I, da) | 0) + (va >>> 16) | 0) + (wa >>> 16) | 0;
                    la = wa << 16 | ua & 65535;
                    ma = xa;
                    ua = ((f(B, Q) | 0) + (na & 65535) | 0) + (fa & 65535) | 0;
                    va = ((f(J, Q) | 0) + (na >>> 16) | 0) + (fa >>> 16) | 0;
                    wa = ((f(B, Y) | 0) + (va & 65535) | 0) + (ua >>> 16) | 0;
                    xa = ((f(J, Y) | 0) + (va >>> 16) | 0) + (wa >>> 16) | 0;
                    fa = wa << 16 | ua & 65535;
                    ua = ((f(B, R) | 0) + (xa & 65535) | 0) + (ga & 65535) | 0;
                    va = ((f(J, R) | 0) + (xa >>> 16) | 0) + (ga >>> 16) | 0;
                    wa = ((f(B, Z) | 0) + (va & 65535) | 0) + (ua >>> 16) | 0;
                    xa = ((f(J, Z) | 0) + (va >>> 16) | 0) + (wa >>> 16) | 0;
                    ga = wa << 16 | ua & 65535;
                    ua = ((f(B, S) | 0) + (xa & 65535) | 0) + (ha & 65535) | 0;
                    va = ((f(J, S) | 0) + (xa >>> 16) | 0) + (ha >>> 16) | 0;
                    wa = ((f(B, $) | 0) + (va & 65535) | 0) + (ua >>> 16) | 0;
                    xa = ((f(J, $) | 0) + (va >>> 16) | 0) + (wa >>> 16) | 0;
                    ha = wa << 16 | ua & 65535;
                    ua = ((f(B, T) | 0) + (xa & 65535) | 0) + (ia & 65535) | 0;
                    va = ((f(J, T) | 0) + (xa >>> 16) | 0) + (ia >>> 16) | 0;
                    wa = ((f(B, _) | 0) + (va & 65535) | 0) + (ua >>> 16) | 0;
                    xa = ((f(J, _) | 0) + (va >>> 16) | 0) + (wa >>> 16) | 0;
                    ia = wa << 16 | ua & 65535;
                    ua = ((f(B, U) | 0) + (xa & 65535) | 0) + (ja & 65535) | 0;
                    va = ((f(J, U) | 0) + (xa >>> 16) | 0) + (ja >>> 16) | 0;
                    wa = ((f(B, aa) | 0) + (va & 65535) | 0) + (ua >>> 16) | 0;
                    xa = ((f(J, aa) | 0) + (va >>> 16) | 0) + (wa >>> 16) | 0;
                    ja = wa << 16 | ua & 65535;
                    ua = ((f(B, V) | 0) + (xa & 65535) | 0) + (ka & 65535) | 0;
                    va = ((f(J, V) | 0) + (xa >>> 16) | 0) + (ka >>> 16) | 0;
                    wa = ((f(B, ba) | 0) + (va & 65535) | 0) + (ua >>> 16) | 0;
                    xa = ((f(J, ba) | 0) + (va >>> 16) | 0) + (wa >>> 16) | 0;
                    ka = wa << 16 | ua & 65535;
                    ua = ((f(B, W) | 0) + (xa & 65535) | 0) + (la & 65535) | 0;
                    va = ((f(J, W) | 0) + (xa >>> 16) | 0) + (la >>> 16) | 0;
                    wa = ((f(B, ca) | 0) + (va & 65535) | 0) + (ua >>> 16) | 0;
                    xa = ((f(J, ca) | 0) + (va >>> 16) | 0) + (wa >>> 16) | 0;
                    la = wa << 16 | ua & 65535;
                    ua = ((f(B, X) | 0) + (xa & 65535) | 0) + (ma & 65535) | 0;
                    va = ((f(J, X) | 0) + (xa >>> 16) | 0) + (ma >>> 16) | 0;
                    wa = ((f(B, da) | 0) + (va & 65535) | 0) + (ua >>> 16) | 0;
                    xa = ((f(J, da) | 0) + (va >>> 16) | 0) + (wa >>> 16) | 0;
                    ma = wa << 16 | ua & 65535;
                    na = xa;
                    ua = ((f(C, Q) | 0) + (oa & 65535) | 0) + (ga & 65535) | 0;
                    va = ((f(K, Q) | 0) + (oa >>> 16) | 0) + (ga >>> 16) | 0;
                    wa = ((f(C, Y) | 0) + (va & 65535) | 0) + (ua >>> 16) | 0;
                    xa = ((f(K, Y) | 0) + (va >>> 16) | 0) + (wa >>> 16) | 0;
                    ga = wa << 16 | ua & 65535;
                    ua = ((f(C, R) | 0) + (xa & 65535) | 0) + (ha & 65535) | 0;
                    va = ((f(K, R) | 0) + (xa >>> 16) | 0) + (ha >>> 16) | 0;
                    wa = ((f(C, Z) | 0) + (va & 65535) | 0) + (ua >>> 16) | 0;
                    xa = ((f(K, Z) | 0) + (va >>> 16) | 0) + (wa >>> 16) | 0;
                    ha = wa << 16 | ua & 65535;
                    ua = ((f(C, S) | 0) + (xa & 65535) | 0) + (ia & 65535) | 0;
                    va = ((f(K, S) | 0) + (xa >>> 16) | 0) + (ia >>> 16) | 0;
                    wa = ((f(C, $) | 0) + (va & 65535) | 0) + (ua >>> 16) | 0;
                    xa = ((f(K, $) | 0) + (va >>> 16) | 0) + (wa >>> 16) | 0;
                    ia = wa << 16 | ua & 65535;
                    ua = ((f(C, T) | 0) + (xa & 65535) | 0) + (ja & 65535) | 0;
                    va = ((f(K, T) | 0) + (xa >>> 16) | 0) + (ja >>> 16) | 0;
                    wa = ((f(C, _) | 0) + (va & 65535) | 0) + (ua >>> 16) | 0;
                    xa = ((f(K, _) | 0) + (va >>> 16) | 0) + (wa >>> 16) | 0;
                    ja = wa << 16 | ua & 65535;
                    ua = ((f(C, U) | 0) + (xa & 65535) | 0) + (ka & 65535) | 0;
                    va = ((f(K, U) | 0) + (xa >>> 16) | 0) + (ka >>> 16) | 0;
                    wa = ((f(C, aa) | 0) + (va & 65535) | 0) + (ua >>> 16) | 0;
                    xa = ((f(K, aa) | 0) + (va >>> 16) | 0) + (wa >>> 16) | 0;
                    ka = wa << 16 | ua & 65535;
                    ua = ((f(C, V) | 0) + (xa & 65535) | 0) + (la & 65535) | 0;
                    va = ((f(K, V) | 0) + (xa >>> 16) | 0) + (la >>> 16) | 0;
                    wa = ((f(C, ba) | 0) + (va & 65535) | 0) + (ua >>> 16) | 0;
                    xa = ((f(K, ba) | 0) + (va >>> 16) | 0) + (wa >>> 16) | 0;
                    la = wa << 16 | ua & 65535;
                    ua = ((f(C, W) | 0) + (xa & 65535) | 0) + (ma & 65535) | 0;
                    va = ((f(K, W) | 0) + (xa >>> 16) | 0) + (ma >>> 16) | 0;
                    wa = ((f(C, ca) | 0) + (va & 65535) | 0) + (ua >>> 16) | 0;
                    xa = ((f(K, ca) | 0) + (va >>> 16) | 0) + (wa >>> 16) | 0;
                    ma = wa << 16 | ua & 65535;
                    ua = ((f(C, X) | 0) + (xa & 65535) | 0) + (na & 65535) | 0;
                    va = ((f(K, X) | 0) + (xa >>> 16) | 0) + (na >>> 16) | 0;
                    wa = ((f(C, da) | 0) + (va & 65535) | 0) + (ua >>> 16) | 0;
                    xa = ((f(K, da) | 0) + (va >>> 16) | 0) + (wa >>> 16) | 0;
                    na = wa << 16 | ua & 65535;
                    oa = xa;
                    ua = ((f(D, Q) | 0) + (pa & 65535) | 0) + (ha & 65535) | 0;
                    va = ((f(L, Q) | 0) + (pa >>> 16) | 0) + (ha >>> 16) | 0;
                    wa = ((f(D, Y) | 0) + (va & 65535) | 0) + (ua >>> 16) | 0;
                    xa = ((f(L, Y) | 0) + (va >>> 16) | 0) + (wa >>> 16) | 0;
                    ha = wa << 16 | ua & 65535;
                    ua = ((f(D, R) | 0) + (xa & 65535) | 0) + (ia & 65535) | 0;
                    va = ((f(L, R) | 0) + (xa >>> 16) | 0) + (ia >>> 16) | 0;
                    wa = ((f(D, Z) | 0) + (va & 65535) | 0) + (ua >>> 16) | 0;
                    xa = ((f(L, Z) | 0) + (va >>> 16) | 0) + (wa >>> 16) | 0;
                    ia = wa << 16 | ua & 65535;
                    ua = ((f(D, S) | 0) + (xa & 65535) | 0) + (ja & 65535) | 0;
                    va = ((f(L, S) | 0) + (xa >>> 16) | 0) + (ja >>> 16) | 0;
                    wa = ((f(D, $) | 0) + (va & 65535) | 0) + (ua >>> 16) | 0;
                    xa = ((f(L, $) | 0) + (va >>> 16) | 0) + (wa >>> 16) | 0;
                    ja = wa << 16 | ua & 65535;
                    ua = ((f(D, T) | 0) + (xa & 65535) | 0) + (ka & 65535) | 0;
                    va = ((f(L, T) | 0) + (xa >>> 16) | 0) + (ka >>> 16) | 0;
                    wa = ((f(D, _) | 0) + (va & 65535) | 0) + (ua >>> 16) | 0;
                    xa = ((f(L, _) | 0) + (va >>> 16) | 0) + (wa >>> 16) | 0;
                    ka = wa << 16 | ua & 65535;
                    ua = ((f(D, U) | 0) + (xa & 65535) | 0) + (la & 65535) | 0;
                    va = ((f(L, U) | 0) + (xa >>> 16) | 0) + (la >>> 16) | 0;
                    wa = ((f(D, aa) | 0) + (va & 65535) | 0) + (ua >>> 16) | 0;
                    xa = ((f(L, aa) | 0) + (va >>> 16) | 0) + (wa >>> 16) | 0;
                    la = wa << 16 | ua & 65535;
                    ua = ((f(D, V) | 0) + (xa & 65535) | 0) + (ma & 65535) | 0;
                    va = ((f(L, V) | 0) + (xa >>> 16) | 0) + (ma >>> 16) | 0;
                    wa = ((f(D, ba) | 0) + (va & 65535) | 0) + (ua >>> 16) | 0;
                    xa = ((f(L, ba) | 0) + (va >>> 16) | 0) + (wa >>> 16) | 0;
                    ma = wa << 16 | ua & 65535;
                    ua = ((f(D, W) | 0) + (xa & 65535) | 0) + (na & 65535) | 0;
                    va = ((f(L, W) | 0) + (xa >>> 16) | 0) + (na >>> 16) | 0;
                    wa = ((f(D, ca) | 0) + (va & 65535) | 0) + (ua >>> 16) | 0;
                    xa = ((f(L, ca) | 0) + (va >>> 16) | 0) + (wa >>> 16) | 0;
                    na = wa << 16 | ua & 65535;
                    ua = ((f(D, X) | 0) + (xa & 65535) | 0) + (oa & 65535) | 0;
                    va = ((f(L, X) | 0) + (xa >>> 16) | 0) + (oa >>> 16) | 0;
                    wa = ((f(D, da) | 0) + (va & 65535) | 0) + (ua >>> 16) | 0;
                    xa = ((f(L, da) | 0) + (va >>> 16) | 0) + (wa >>> 16) | 0;
                    oa = wa << 16 | ua & 65535;
                    pa = xa;
                    ua = ((f(E, Q) | 0) + (qa & 65535) | 0) + (ia & 65535) | 0;
                    va = ((f(M, Q) | 0) + (qa >>> 16) | 0) + (ia >>> 16) | 0;
                    wa = ((f(E, Y) | 0) + (va & 65535) | 0) + (ua >>> 16) | 0;
                    xa = ((f(M, Y) | 0) + (va >>> 16) | 0) + (wa >>> 16) | 0;
                    ia = wa << 16 | ua & 65535;
                    ua = ((f(E, R) | 0) + (xa & 65535) | 0) + (ja & 65535) | 0;
                    va = ((f(M, R) | 0) + (xa >>> 16) | 0) + (ja >>> 16) | 0;
                    wa = ((f(E, Z) | 0) + (va & 65535) | 0) + (ua >>> 16) | 0;
                    xa = ((f(M, Z) | 0) + (va >>> 16) | 0) + (wa >>> 16) | 0;
                    ja = wa << 16 | ua & 65535;
                    ua = ((f(E, S) | 0) + (xa & 65535) | 0) + (ka & 65535) | 0;
                    va = ((f(M, S) | 0) + (xa >>> 16) | 0) + (ka >>> 16) | 0;
                    wa = ((f(E, $) | 0) + (va & 65535) | 0) + (ua >>> 16) | 0;
                    xa = ((f(M, $) | 0) + (va >>> 16) | 0) + (wa >>> 16) | 0;
                    ka = wa << 16 | ua & 65535;
                    ua = ((f(E, T) | 0) + (xa & 65535) | 0) + (la & 65535) | 0;
                    va = ((f(M, T) | 0) + (xa >>> 16) | 0) + (la >>> 16) | 0;
                    wa = ((f(E, _) | 0) + (va & 65535) | 0) + (ua >>> 16) | 0;
                    xa = ((f(M, _) | 0) + (va >>> 16) | 0) + (wa >>> 16) | 0;
                    la = wa << 16 | ua & 65535;
                    ua = ((f(E, U) | 0) + (xa & 65535) | 0) + (ma & 65535) | 0;
                    va = ((f(M, U) | 0) + (xa >>> 16) | 0) + (ma >>> 16) | 0;
                    wa = ((f(E, aa) | 0) + (va & 65535) | 0) + (ua >>> 16) | 0;
                    xa = ((f(M, aa) | 0) + (va >>> 16) | 0) + (wa >>> 16) | 0;
                    ma = wa << 16 | ua & 65535;
                    ua = ((f(E, V) | 0) + (xa & 65535) | 0) + (na & 65535) | 0;
                    va = ((f(M, V) | 0) + (xa >>> 16) | 0) + (na >>> 16) | 0;
                    wa = ((f(E, ba) | 0) + (va & 65535) | 0) + (ua >>> 16) | 0;
                    xa = ((f(M, ba) | 0) + (va >>> 16) | 0) + (wa >>> 16) | 0;
                    na = wa << 16 | ua & 65535;
                    ua = ((f(E, W) | 0) + (xa & 65535) | 0) + (oa & 65535) | 0;
                    va = ((f(M, W) | 0) + (xa >>> 16) | 0) + (oa >>> 16) | 0;
                    wa = ((f(E, ca) | 0) + (va & 65535) | 0) + (ua >>> 16) | 0;
                    xa = ((f(M, ca) | 0) + (va >>> 16) | 0) + (wa >>> 16) | 0;
                    oa = wa << 16 | ua & 65535;
                    ua = ((f(E, X) | 0) + (xa & 65535) | 0) + (pa & 65535) | 0;
                    va = ((f(M, X) | 0) + (xa >>> 16) | 0) + (pa >>> 16) | 0;
                    wa = ((f(E, da) | 0) + (va & 65535) | 0) + (ua >>> 16) | 0;
                    xa = ((f(M, da) | 0) + (va >>> 16) | 0) + (wa >>> 16) | 0;
                    pa = wa << 16 | ua & 65535;
                    qa = xa;
                    ua = ((f(F, Q) | 0) + (ra & 65535) | 0) + (ja & 65535) | 0;
                    va = ((f(N, Q) | 0) + (ra >>> 16) | 0) + (ja >>> 16) | 0;
                    wa = ((f(F, Y) | 0) + (va & 65535) | 0) + (ua >>> 16) | 0;
                    xa = ((f(N, Y) | 0) + (va >>> 16) | 0) + (wa >>> 16) | 0;
                    ja = wa << 16 | ua & 65535;
                    ua = ((f(F, R) | 0) + (xa & 65535) | 0) + (ka & 65535) | 0;
                    va = ((f(N, R) | 0) + (xa >>> 16) | 0) + (ka >>> 16) | 0;
                    wa = ((f(F, Z) | 0) + (va & 65535) | 0) + (ua >>> 16) | 0;
                    xa = ((f(N, Z) | 0) + (va >>> 16) | 0) + (wa >>> 16) | 0;
                    ka = wa << 16 | ua & 65535;
                    ua = ((f(F, S) | 0) + (xa & 65535) | 0) + (la & 65535) | 0;
                    va = ((f(N, S) | 0) + (xa >>> 16) | 0) + (la >>> 16) | 0;
                    wa = ((f(F, $) | 0) + (va & 65535) | 0) + (ua >>> 16) | 0;
                    xa = ((f(N, $) | 0) + (va >>> 16) | 0) + (wa >>> 16) | 0;
                    la = wa << 16 | ua & 65535;
                    ua = ((f(F, T) | 0) + (xa & 65535) | 0) + (ma & 65535) | 0;
                    va = ((f(N, T) | 0) + (xa >>> 16) | 0) + (ma >>> 16) | 0;
                    wa = ((f(F, _) | 0) + (va & 65535) | 0) + (ua >>> 16) | 0;
                    xa = ((f(N, _) | 0) + (va >>> 16) | 0) + (wa >>> 16) | 0;
                    ma = wa << 16 | ua & 65535;
                    ua = ((f(F, U) | 0) + (xa & 65535) | 0) + (na & 65535) | 0;
                    va = ((f(N, U) | 0) + (xa >>> 16) | 0) + (na >>> 16) | 0;
                    wa = ((f(F, aa) | 0) + (va & 65535) | 0) + (ua >>> 16) | 0;
                    xa = ((f(N, aa) | 0) + (va >>> 16) | 0) + (wa >>> 16) | 0;
                    na = wa << 16 | ua & 65535;
                    ua = ((f(F, V) | 0) + (xa & 65535) | 0) + (oa & 65535) | 0;
                    va = ((f(N, V) | 0) + (xa >>> 16) | 0) + (oa >>> 16) | 0;
                    wa = ((f(F, ba) | 0) + (va & 65535) | 0) + (ua >>> 16) | 0;
                    xa = ((f(N, ba) | 0) + (va >>> 16) | 0) + (wa >>> 16) | 0;
                    oa = wa << 16 | ua & 65535;
                    ua = ((f(F, W) | 0) + (xa & 65535) | 0) + (pa & 65535) | 0;
                    va = ((f(N, W) | 0) + (xa >>> 16) | 0) + (pa >>> 16) | 0;
                    wa = ((f(F, ca) | 0) + (va & 65535) | 0) + (ua >>> 16) | 0;
                    xa = ((f(N, ca) | 0) + (va >>> 16) | 0) + (wa >>> 16) | 0;
                    pa = wa << 16 | ua & 65535;
                    ua = ((f(F, X) | 0) + (xa & 65535) | 0) + (qa & 65535) | 0;
                    va = ((f(N, X) | 0) + (xa >>> 16) | 0) + (qa >>> 16) | 0;
                    wa = ((f(F, da) | 0) + (va & 65535) | 0) + (ua >>> 16) | 0;
                    xa = ((f(N, da) | 0) + (va >>> 16) | 0) + (wa >>> 16) | 0;
                    qa = wa << 16 | ua & 65535;
                    ra = xa;
                    ua = ((f(G, Q) | 0) + (sa & 65535) | 0) + (ka & 65535) | 0;
                    va = ((f(O, Q) | 0) + (sa >>> 16) | 0) + (ka >>> 16) | 0;
                    wa = ((f(G, Y) | 0) + (va & 65535) | 0) + (ua >>> 16) | 0;
                    xa = ((f(O, Y) | 0) + (va >>> 16) | 0) + (wa >>> 16) | 0;
                    ka = wa << 16 | ua & 65535;
                    ua = ((f(G, R) | 0) + (xa & 65535) | 0) + (la & 65535) | 0;
                    va = ((f(O, R) | 0) + (xa >>> 16) | 0) + (la >>> 16) | 0;
                    wa = ((f(G, Z) | 0) + (va & 65535) | 0) + (ua >>> 16) | 0;
                    xa = ((f(O, Z) | 0) + (va >>> 16) | 0) + (wa >>> 16) | 0;
                    la = wa << 16 | ua & 65535;
                    ua = ((f(G, S) | 0) + (xa & 65535) | 0) + (ma & 65535) | 0;
                    va = ((f(O, S) | 0) + (xa >>> 16) | 0) + (ma >>> 16) | 0;
                    wa = ((f(G, $) | 0) + (va & 65535) | 0) + (ua >>> 16) | 0;
                    xa = ((f(O, $) | 0) + (va >>> 16) | 0) + (wa >>> 16) | 0;
                    ma = wa << 16 | ua & 65535;
                    ua = ((f(G, T) | 0) + (xa & 65535) | 0) + (na & 65535) | 0;
                    va = ((f(O, T) | 0) + (xa >>> 16) | 0) + (na >>> 16) | 0;
                    wa = ((f(G, _) | 0) + (va & 65535) | 0) + (ua >>> 16) | 0;
                    xa = ((f(O, _) | 0) + (va >>> 16) | 0) + (wa >>> 16) | 0;
                    na = wa << 16 | ua & 65535;
                    ua = ((f(G, U) | 0) + (xa & 65535) | 0) + (oa & 65535) | 0;
                    va = ((f(O, U) | 0) + (xa >>> 16) | 0) + (oa >>> 16) | 0;
                    wa = ((f(G, aa) | 0) + (va & 65535) | 0) + (ua >>> 16) | 0;
                    xa = ((f(O, aa) | 0) + (va >>> 16) | 0) + (wa >>> 16) | 0;
                    oa = wa << 16 | ua & 65535;
                    ua = ((f(G, V) | 0) + (xa & 65535) | 0) + (pa & 65535) | 0;
                    va = ((f(O, V) | 0) + (xa >>> 16) | 0) + (pa >>> 16) | 0;
                    wa = ((f(G, ba) | 0) + (va & 65535) | 0) + (ua >>> 16) | 0;
                    xa = ((f(O, ba) | 0) + (va >>> 16) | 0) + (wa >>> 16) | 0;
                    pa = wa << 16 | ua & 65535;
                    ua = ((f(G, W) | 0) + (xa & 65535) | 0) + (qa & 65535) | 0;
                    va = ((f(O, W) | 0) + (xa >>> 16) | 0) + (qa >>> 16) | 0;
                    wa = ((f(G, ca) | 0) + (va & 65535) | 0) + (ua >>> 16) | 0;
                    xa = ((f(O, ca) | 0) + (va >>> 16) | 0) + (wa >>> 16) | 0;
                    qa = wa << 16 | ua & 65535;
                    ua = ((f(G, X) | 0) + (xa & 65535) | 0) + (ra & 65535) | 0;
                    va = ((f(O, X) | 0) + (xa >>> 16) | 0) + (ra >>> 16) | 0;
                    wa = ((f(G, da) | 0) + (va & 65535) | 0) + (ua >>> 16) | 0;
                    xa = ((f(O, da) | 0) + (va >>> 16) | 0) + (wa >>> 16) | 0;
                    ra = wa << 16 | ua & 65535;
                    sa = xa;
                    ua = ((f(H, Q) | 0) + (ta & 65535) | 0) + (la & 65535) | 0;
                    va = ((f(P, Q) | 0) + (ta >>> 16) | 0) + (la >>> 16) | 0;
                    wa = ((f(H, Y) | 0) + (va & 65535) | 0) + (ua >>> 16) | 0;
                    xa = ((f(P, Y) | 0) + (va >>> 16) | 0) + (wa >>> 16) | 0;
                    la = wa << 16 | ua & 65535;
                    ua = ((f(H, R) | 0) + (xa & 65535) | 0) + (ma & 65535) | 0;
                    va = ((f(P, R) | 0) + (xa >>> 16) | 0) + (ma >>> 16) | 0;
                    wa = ((f(H, Z) | 0) + (va & 65535) | 0) + (ua >>> 16) | 0;
                    xa = ((f(P, Z) | 0) + (va >>> 16) | 0) + (wa >>> 16) | 0;
                    ma = wa << 16 | ua & 65535;
                    ua = ((f(H, S) | 0) + (xa & 65535) | 0) + (na & 65535) | 0;
                    va = ((f(P, S) | 0) + (xa >>> 16) | 0) + (na >>> 16) | 0;
                    wa = ((f(H, $) | 0) + (va & 65535) | 0) + (ua >>> 16) | 0;
                    xa = ((f(P, $) | 0) + (va >>> 16) | 0) + (wa >>> 16) | 0;
                    na = wa << 16 | ua & 65535;
                    ua = ((f(H, T) | 0) + (xa & 65535) | 0) + (oa & 65535) | 0;
                    va = ((f(P, T) | 0) + (xa >>> 16) | 0) + (oa >>> 16) | 0;
                    wa = ((f(H, _) | 0) + (va & 65535) | 0) + (ua >>> 16) | 0;
                    xa = ((f(P, _) | 0) + (va >>> 16) | 0) + (wa >>> 16) | 0;
                    oa = wa << 16 | ua & 65535;
                    ua = ((f(H, U) | 0) + (xa & 65535) | 0) + (pa & 65535) | 0;
                    va = ((f(P, U) | 0) + (xa >>> 16) | 0) + (pa >>> 16) | 0;
                    wa = ((f(H, aa) | 0) + (va & 65535) | 0) + (ua >>> 16) | 0;
                    xa = ((f(P, aa) | 0) + (va >>> 16) | 0) + (wa >>> 16) | 0;
                    pa = wa << 16 | ua & 65535;
                    ua = ((f(H, V) | 0) + (xa & 65535) | 0) + (qa & 65535) | 0;
                    va = ((f(P, V) | 0) + (xa >>> 16) | 0) + (qa >>> 16) | 0;
                    wa = ((f(H, ba) | 0) + (va & 65535) | 0) + (ua >>> 16) | 0;
                    xa = ((f(P, ba) | 0) + (va >>> 16) | 0) + (wa >>> 16) | 0;
                    qa = wa << 16 | ua & 65535;
                    ua = ((f(H, W) | 0) + (xa & 65535) | 0) + (ra & 65535) | 0;
                    va = ((f(P, W) | 0) + (xa >>> 16) | 0) + (ra >>> 16) | 0;
                    wa = ((f(H, ca) | 0) + (va & 65535) | 0) + (ua >>> 16) | 0;
                    xa = ((f(P, ca) | 0) + (va >>> 16) | 0) + (wa >>> 16) | 0;
                    ra = wa << 16 | ua & 65535;
                    ua = ((f(H, X) | 0) + (xa & 65535) | 0) + (sa & 65535) | 0;
                    va = ((f(P, X) | 0) + (xa >>> 16) | 0) + (sa >>> 16) | 0;
                    wa = ((f(H, da) | 0) + (va & 65535) | 0) + (ua >>> 16) | 0;
                    xa = ((f(P, da) | 0) + (va >>> 16) | 0) + (wa >>> 16) | 0;
                    sa = wa << 16 | ua & 65535;
                    ta = xa;
                    e[(Ca | 0) >> 2] = ea, e[(Ca | 4) >> 2] = fa, e[(Ca | 8) >> 2] = ga, e[(Ca | 12) >> 2] = ha, e[(Ca | 16) >> 2] = ia, e[(Ca | 20) >> 2] = ja, e[(Ca | 24) >> 2] = ka, e[(Ca | 28) >> 2] = la
                }
                Ca = y + (ya + Aa | 0) | 0;
                e[(Ca | 0) >> 2] = ma, e[(Ca | 4) >> 2] = na, e[(Ca | 8) >> 2] = oa, e[(Ca | 12) >> 2] = pa, e[(Ca | 16) >> 2] = qa, e[(Ca | 20) >> 2] = ra, e[(Ca | 24) >> 2] = sa, e[(Ca | 28) >> 2] = ta
            }
        }

        function r(u, v, w) {
            u = u | 0;
            v = v | 0;
            w = w | 0;
            var x = 0,
                y = 0,
                z = 0,
                A = 0,
                B = 0,
                C = 0,
                D = 0,
                E = 0,
                F = 0,
                G = 0,
                H = 0,
                I = 0,
                J = 0,
                K = 0,
                L = 0,
                M = 0,
                N = 0,
                O = 0,
                P = 0,
                Q = 0,
                R = 0,
                S = 0,
                T = 0,
                U = 0,
                V = 0,
                W = 0,
                X = 0,
                Y = 0,
                Z = 0,
                $ = 0,
                _ = 0,
                aa = 0,
                ba = 0,
                ca = 0,
                da = 0,
                ea = 0,
                fa = 0,
                ga = 0,
                ha = 0,
                ia = 0,
                ja = 0,
                ka = 0,
                la = 0,
                ma = 0,
                na = 0,
                oa = 0,
                pa = 0,
                qa = 0,
                ra = 0,
                sa = 0,
                ta = 0,
                ua = 0,
                va = 0,
                wa = 0,
                xa = 0,
                ya = 0,
                za = 0,
                Aa = 0,
                Ba = 0,
                Ca = 0,
                Da = 0,
                Ea = 0,
                Fa = 0,
                Ga = 0;
            for (;
                (Ba | 0) < (v | 0); Ba = Ba + 4 | 0) {
                Ga = w + (Ba << 1) | 0;
                F = e[u + Ba >> 2] | 0, x = F & 65535, F = F >>> 16;
                ra = f(x, x) | 0;
                sa = (f(x, F) | 0) + (ra >>> 17) | 0;
                ta = (f(F, F) | 0) + (sa >>> 15) | 0;
                e[Ga >> 2] = sa << 17 | ra & 131071;
                e[(Ga | 4) >> 2] = ta
            }
            for (Aa = 0;
                (Aa | 0) < (v | 0); Aa = Aa + 8 | 0) {
                Ea = u + Aa | 0, Ga = w + (Aa << 1) | 0;
                F = e[Ea >> 2] | 0, x = F & 65535, F = F >>> 16;
                V = e[(Ea | 4) >> 2] | 0, N = V & 65535, V = V >>> 16;
                ra = f(x, N) | 0;
                sa = (f(x, V) | 0) + (ra >>> 16) | 0;
                ta = (f(F, N) | 0) + (sa & 65535) | 0;
                wa = ((f(F, V) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                xa = e[(Ga | 4) >> 2] | 0;
                ra = (xa & 65535) + ((ra & 65535) << 1) | 0;
                ta = ((xa >>> 16) + ((ta & 65535) << 1) | 0) + (ra >>> 16) | 0;
                e[(Ga | 4) >> 2] = ta << 16 | ra & 65535;
                ua = ta >>> 16;
                xa = e[(Ga | 8) >> 2] | 0;
                ra = ((xa & 65535) + ((wa & 65535) << 1) | 0) + ua | 0;
                ta = ((xa >>> 16) + (wa >>> 16 << 1) | 0) + (ra >>> 16) | 0;
                e[(Ga | 8) >> 2] = ta << 16 | ra & 65535;
                ua = ta >>> 16;
                if (ua) {
                    xa = e[(Ga | 12) >> 2] | 0;
                    ra = (xa & 65535) + ua | 0;
                    ta = (xa >>> 16) + (ra >>> 16) | 0;
                    e[(Ga | 12) >> 2] = ta << 16 | ra & 65535
                }
            }
            for (Aa = 0;
                (Aa | 0) < (v | 0); Aa = Aa + 16 | 0) {
                Ea = u + Aa | 0, Ga = w + (Aa << 1) | 0;
                F = e[Ea >> 2] | 0, x = F & 65535, F = F >>> 16, G = e[(Ea | 4) >> 2] | 0, y = G & 65535, G = G >>> 16;
                V = e[(Ea | 8) >> 2] | 0, N = V & 65535, V = V >>> 16, W = e[(Ea | 12) >> 2] | 0, O = W & 65535, W = W >>> 16;
                ra = f(x, N) | 0;
                sa = f(F, N) | 0;
                ta = ((f(x, V) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                wa = ((f(F, V) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                ba = ta << 16 | ra & 65535;
                ra = (f(x, O) | 0) + (wa & 65535) | 0;
                sa = (f(F, O) | 0) + (wa >>> 16) | 0;
                ta = ((f(x, W) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                wa = ((f(F, W) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                ca = ta << 16 | ra & 65535;
                da = wa;
                ra = (f(y, N) | 0) + (ca & 65535) | 0;
                sa = (f(G, N) | 0) + (ca >>> 16) | 0;
                ta = ((f(y, V) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                wa = ((f(G, V) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                ca = ta << 16 | ra & 65535;
                ra = ((f(y, O) | 0) + (da & 65535) | 0) + (wa & 65535) | 0;
                sa = ((f(G, O) | 0) + (da >>> 16) | 0) + (wa >>> 16) | 0;
                ta = ((f(y, W) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                wa = ((f(G, W) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                da = ta << 16 | ra & 65535;
                ea = wa;
                xa = e[(Ga | 8) >> 2] | 0;
                ra = (xa & 65535) + ((ba & 65535) << 1) | 0;
                ta = ((xa >>> 16) + (ba >>> 16 << 1) | 0) + (ra >>> 16) | 0;
                e[(Ga | 8) >> 2] = ta << 16 | ra & 65535;
                ua = ta >>> 16;
                xa = e[(Ga | 12) >> 2] | 0;
                ra = ((xa & 65535) + ((ca & 65535) << 1) | 0) + ua | 0;
                ta = ((xa >>> 16) + (ca >>> 16 << 1) | 0) + (ra >>> 16) | 0;
                e[(Ga | 12) >> 2] = ta << 16 | ra & 65535;
                ua = ta >>> 16;
                xa = e[(Ga | 16) >> 2] | 0;
                ra = ((xa & 65535) + ((da & 65535) << 1) | 0) + ua | 0;
                ta = ((xa >>> 16) + (da >>> 16 << 1) | 0) + (ra >>> 16) | 0;
                e[(Ga | 16) >> 2] = ta << 16 | ra & 65535;
                ua = ta >>> 16;
                xa = e[(Ga | 20) >> 2] | 0;
                ra = ((xa & 65535) + ((ea & 65535) << 1) | 0) + ua | 0;
                ta = ((xa >>> 16) + (ea >>> 16 << 1) | 0) + (ra >>> 16) | 0;
                e[(Ga | 20) >> 2] = ta << 16 | ra & 65535;
                ua = ta >>> 16;
                for (Da = 24; !!ua & (Da | 0) < 32; Da = Da + 4 | 0) {
                    xa = e[(Ga | Da) >> 2] | 0;
                    ra = (xa & 65535) + ua | 0;
                    ta = (xa >>> 16) + (ra >>> 16) | 0;
                    e[(Ga | Da) >> 2] = ta << 16 | ra & 65535;
                    ua = ta >>> 16
                }
            }
            for (Aa = 0;
                (Aa | 0) < (v | 0); Aa = Aa + 32 | 0) {
                Ea = u + Aa | 0, Ga = w + (Aa << 1) | 0;
                F = e[Ea >> 2] | 0, x = F & 65535, F = F >>> 16, G = e[(Ea | 4) >> 2] | 0, y = G & 65535, G = G >>> 16, H = e[(Ea | 8) >> 2] | 0, z = H & 65535, H = H >>> 16, I = e[(Ea | 12) >> 2] | 0, A = I & 65535, I = I >>> 16;
                V = e[(Ea | 16) >> 2] | 0, N = V & 65535, V = V >>> 16, W = e[(Ea | 20) >> 2] | 0, O = W & 65535, W = W >>> 16, X = e[(Ea | 24) >> 2] | 0, P = X & 65535, X = X >>> 16, Y = e[(Ea | 28) >> 2] | 0, Q = Y & 65535, Y = Y >>> 16;
                ra = f(x, N) | 0;
                sa = f(F, N) | 0;
                ta = ((f(x, V) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                wa = ((f(F, V) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                ba = ta << 16 | ra & 65535;
                ra = (f(x, O) | 0) + (wa & 65535) | 0;
                sa = (f(F, O) | 0) + (wa >>> 16) | 0;
                ta = ((f(x, W) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                wa = ((f(F, W) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                ca = ta << 16 | ra & 65535;
                ra = (f(x, P) | 0) + (wa & 65535) | 0;
                sa = (f(F, P) | 0) + (wa >>> 16) | 0;
                ta = ((f(x, X) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                wa = ((f(F, X) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                da = ta << 16 | ra & 65535;
                ra = (f(x, Q) | 0) + (wa & 65535) | 0;
                sa = (f(F, Q) | 0) + (wa >>> 16) | 0;
                ta = ((f(x, Y) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                wa = ((f(F, Y) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                ea = ta << 16 | ra & 65535;
                fa = wa;
                ra = (f(y, N) | 0) + (ca & 65535) | 0;
                sa = (f(G, N) | 0) + (ca >>> 16) | 0;
                ta = ((f(y, V) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                wa = ((f(G, V) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                ca = ta << 16 | ra & 65535;
                ra = ((f(y, O) | 0) + (da & 65535) | 0) + (wa & 65535) | 0;
                sa = ((f(G, O) | 0) + (da >>> 16) | 0) + (wa >>> 16) | 0;
                ta = ((f(y, W) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                wa = ((f(G, W) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                da = ta << 16 | ra & 65535;
                ra = ((f(y, P) | 0) + (ea & 65535) | 0) + (wa & 65535) | 0;
                sa = ((f(G, P) | 0) + (ea >>> 16) | 0) + (wa >>> 16) | 0;
                ta = ((f(y, X) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                wa = ((f(G, X) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                ea = ta << 16 | ra & 65535;
                ra = ((f(y, Q) | 0) + (fa & 65535) | 0) + (wa & 65535) | 0;
                sa = ((f(G, Q) | 0) + (fa >>> 16) | 0) + (wa >>> 16) | 0;
                ta = ((f(y, Y) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                wa = ((f(G, Y) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                fa = ta << 16 | ra & 65535;
                ga = wa;
                ra = (f(z, N) | 0) + (da & 65535) | 0;
                sa = (f(H, N) | 0) + (da >>> 16) | 0;
                ta = ((f(z, V) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                wa = ((f(H, V) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                da = ta << 16 | ra & 65535;
                ra = ((f(z, O) | 0) + (ea & 65535) | 0) + (wa & 65535) | 0;
                sa = ((f(H, O) | 0) + (ea >>> 16) | 0) + (wa >>> 16) | 0;
                ta = ((f(z, W) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                wa = ((f(H, W) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                ea = ta << 16 | ra & 65535;
                ra = ((f(z, P) | 0) + (fa & 65535) | 0) + (wa & 65535) | 0;
                sa = ((f(H, P) | 0) + (fa >>> 16) | 0) + (wa >>> 16) | 0;
                ta = ((f(z, X) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                wa = ((f(H, X) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                fa = ta << 16 | ra & 65535;
                ra = ((f(z, Q) | 0) + (ga & 65535) | 0) + (wa & 65535) | 0;
                sa = ((f(H, Q) | 0) + (ga >>> 16) | 0) + (wa >>> 16) | 0;
                ta = ((f(z, Y) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                wa = ((f(H, Y) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                ga = ta << 16 | ra & 65535;
                ha = wa;
                ra = (f(A, N) | 0) + (ea & 65535) | 0;
                sa = (f(I, N) | 0) + (ea >>> 16) | 0;
                ta = ((f(A, V) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                wa = ((f(I, V) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                ea = ta << 16 | ra & 65535;
                ra = ((f(A, O) | 0) + (fa & 65535) | 0) + (wa & 65535) | 0;
                sa = ((f(I, O) | 0) + (fa >>> 16) | 0) + (wa >>> 16) | 0;
                ta = ((f(A, W) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                wa = ((f(I, W) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                fa = ta << 16 | ra & 65535;
                ra = ((f(A, P) | 0) + (ga & 65535) | 0) + (wa & 65535) | 0;
                sa = ((f(I, P) | 0) + (ga >>> 16) | 0) + (wa >>> 16) | 0;
                ta = ((f(A, X) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                wa = ((f(I, X) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                ga = ta << 16 | ra & 65535;
                ra = ((f(A, Q) | 0) + (ha & 65535) | 0) + (wa & 65535) | 0;
                sa = ((f(I, Q) | 0) + (ha >>> 16) | 0) + (wa >>> 16) | 0;
                ta = ((f(A, Y) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                wa = ((f(I, Y) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                ha = ta << 16 | ra & 65535;
                ia = wa;
                xa = e[(Ga | 16) >> 2] | 0;
                ra = (xa & 65535) + ((ba & 65535) << 1) | 0;
                ta = ((xa >>> 16) + (ba >>> 16 << 1) | 0) + (ra >>> 16) | 0;
                e[(Ga | 16) >> 2] = ta << 16 | ra & 65535;
                ua = ta >>> 16;
                xa = e[(Ga | 20) >> 2] | 0;
                ra = ((xa & 65535) + ((ca & 65535) << 1) | 0) + ua | 0;
                ta = ((xa >>> 16) + (ca >>> 16 << 1) | 0) + (ra >>> 16) | 0;
                e[(Ga | 20) >> 2] = ta << 16 | ra & 65535;

                ua = ta >>> 16;
                xa = e[(Ga | 24) >> 2] | 0;
                ra = ((xa & 65535) + ((da & 65535) << 1) | 0) + ua | 0;
                ta = ((xa >>> 16) + (da >>> 16 << 1) | 0) + (ra >>> 16) | 0;
                e[(Ga | 24) >> 2] = ta << 16 | ra & 65535;
                ua = ta >>> 16;
                xa = e[(Ga | 28) >> 2] | 0;
                ra = ((xa & 65535) + ((ea & 65535) << 1) | 0) + ua | 0;
                ta = ((xa >>> 16) + (ea >>> 16 << 1) | 0) + (ra >>> 16) | 0;
                e[(Ga | 28) >> 2] = ta << 16 | ra & 65535;
                ua = ta >>> 16;
                xa = e[Ga + 32 >> 2] | 0;
                ra = ((xa & 65535) + ((fa & 65535) << 1) | 0) + ua | 0;
                ta = ((xa >>> 16) + (fa >>> 16 << 1) | 0) + (ra >>> 16) | 0;
                e[Ga + 32 >> 2] = ta << 16 | ra & 65535;
                ua = ta >>> 16;
                xa = e[Ga + 36 >> 2] | 0;
                ra = ((xa & 65535) + ((ga & 65535) << 1) | 0) + ua | 0;
                ta = ((xa >>> 16) + (ga >>> 16 << 1) | 0) + (ra >>> 16) | 0;
                e[Ga + 36 >> 2] = ta << 16 | ra & 65535;
                ua = ta >>> 16;
                xa = e[Ga + 40 >> 2] | 0;
                ra = ((xa & 65535) + ((ha & 65535) << 1) | 0) + ua | 0;
                ta = ((xa >>> 16) + (ha >>> 16 << 1) | 0) + (ra >>> 16) | 0;
                e[Ga + 40 >> 2] = ta << 16 | ra & 65535;
                ua = ta >>> 16;
                xa = e[Ga + 44 >> 2] | 0;
                ra = ((xa & 65535) + ((ia & 65535) << 1) | 0) + ua | 0;
                ta = ((xa >>> 16) + (ia >>> 16 << 1) | 0) + (ra >>> 16) | 0;
                e[Ga + 44 >> 2] = ta << 16 | ra & 65535;
                ua = ta >>> 16;
                for (Da = 48; !!ua & (Da | 0) < 64; Da = Da + 4 | 0) {
                    xa = e[Ga + Da >> 2] | 0;
                    ra = (xa & 65535) + ua | 0;
                    ta = (xa >>> 16) + (ra >>> 16) | 0;
                    e[Ga + Da >> 2] = ta << 16 | ra & 65535;
                    ua = ta >>> 16
                }
            }
            for (ya = 32;
                (ya | 0) < (v | 0); ya = ya << 1) {
                za = ya << 1;
                for (Aa = 0;
                    (Aa | 0) < (v | 0); Aa = Aa + za | 0) {
                    Ga = w + (Aa << 1) | 0;
                    va = 0;
                    for (Ba = 0;
                        (Ba | 0) < (ya | 0); Ba = Ba + 32 | 0) {
                        Ea = (u + Aa | 0) + Ba | 0;
                        F = e[Ea >> 2] | 0, x = F & 65535, F = F >>> 16, G = e[(Ea | 4) >> 2] | 0, y = G & 65535, G = G >>> 16, H = e[(Ea | 8) >> 2] | 0, z = H & 65535, H = H >>> 16, I = e[(Ea | 12) >> 2] | 0, A = I & 65535, I = I >>> 16, J = e[(Ea | 16) >> 2] | 0, B = J & 65535, J = J >>> 16, K = e[(Ea | 20) >> 2] | 0, C = K & 65535, K = K >>> 16, L = e[(Ea | 24) >> 2] | 0, D = L & 65535, L = L >>> 16, M = e[(Ea | 28) >> 2] | 0, E = M & 65535, M = M >>> 16;
                        ja = ka = la = ma = na = oa = pa = qa = ua = 0;
                        for (Ca = 0;
                            (Ca | 0) < (ya | 0); Ca = Ca + 32 | 0) {
                            Fa = ((u + Aa | 0) + ya | 0) + Ca | 0;
                            V = e[Fa >> 2] | 0, N = V & 65535, V = V >>> 16, W = e[(Fa | 4) >> 2] | 0, O = W & 65535, W = W >>> 16, X = e[(Fa | 8) >> 2] | 0, P = X & 65535, X = X >>> 16, Y = e[(Fa | 12) >> 2] | 0, Q = Y & 65535, Y = Y >>> 16, Z = e[(Fa | 16) >> 2] | 0, R = Z & 65535, Z = Z >>> 16, $ = e[(Fa | 20) >> 2] | 0, S = $ & 65535, $ = $ >>> 16, _ = e[(Fa | 24) >> 2] | 0, T = _ & 65535, _ = _ >>> 16, aa = e[(Fa | 28) >> 2] | 0, U = aa & 65535, aa = aa >>> 16;
                            ba = ca = da = ea = fa = ga = ha = ia = 0;
                            ra = ((f(x, N) | 0) + (ba & 65535) | 0) + (ja & 65535) | 0;
                            sa = ((f(F, N) | 0) + (ba >>> 16) | 0) + (ja >>> 16) | 0;
                            ta = ((f(x, V) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                            wa = ((f(F, V) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                            ba = ta << 16 | ra & 65535;
                            ra = ((f(x, O) | 0) + (ca & 65535) | 0) + (wa & 65535) | 0;
                            sa = ((f(F, O) | 0) + (ca >>> 16) | 0) + (wa >>> 16) | 0;
                            ta = ((f(x, W) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                            wa = ((f(F, W) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                            ca = ta << 16 | ra & 65535;
                            ra = ((f(x, P) | 0) + (da & 65535) | 0) + (wa & 65535) | 0;
                            sa = ((f(F, P) | 0) + (da >>> 16) | 0) + (wa >>> 16) | 0;
                            ta = ((f(x, X) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                            wa = ((f(F, X) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                            da = ta << 16 | ra & 65535;
                            ra = ((f(x, Q) | 0) + (ea & 65535) | 0) + (wa & 65535) | 0;
                            sa = ((f(F, Q) | 0) + (ea >>> 16) | 0) + (wa >>> 16) | 0;
                            ta = ((f(x, Y) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                            wa = ((f(F, Y) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                            ea = ta << 16 | ra & 65535;
                            ra = ((f(x, R) | 0) + (fa & 65535) | 0) + (wa & 65535) | 0;
                            sa = ((f(F, R) | 0) + (fa >>> 16) | 0) + (wa >>> 16) | 0;
                            ta = ((f(x, Z) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                            wa = ((f(F, Z) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                            fa = ta << 16 | ra & 65535;
                            ra = ((f(x, S) | 0) + (ga & 65535) | 0) + (wa & 65535) | 0;
                            sa = ((f(F, S) | 0) + (ga >>> 16) | 0) + (wa >>> 16) | 0;
                            ta = ((f(x, $) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                            wa = ((f(F, $) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                            ga = ta << 16 | ra & 65535;
                            ra = ((f(x, T) | 0) + (ha & 65535) | 0) + (wa & 65535) | 0;
                            sa = ((f(F, T) | 0) + (ha >>> 16) | 0) + (wa >>> 16) | 0;
                            ta = ((f(x, _) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                            wa = ((f(F, _) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                            ha = ta << 16 | ra & 65535;
                            ra = ((f(x, U) | 0) + (ia & 65535) | 0) + (wa & 65535) | 0;
                            sa = ((f(F, U) | 0) + (ia >>> 16) | 0) + (wa >>> 16) | 0;
                            ta = ((f(x, aa) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                            wa = ((f(F, aa) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                            ia = ta << 16 | ra & 65535;
                            ja = wa;
                            ra = ((f(y, N) | 0) + (ca & 65535) | 0) + (ka & 65535) | 0;
                            sa = ((f(G, N) | 0) + (ca >>> 16) | 0) + (ka >>> 16) | 0;
                            ta = ((f(y, V) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                            wa = ((f(G, V) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                            ca = ta << 16 | ra & 65535;
                            ra = ((f(y, O) | 0) + (da & 65535) | 0) + (wa & 65535) | 0;
                            sa = ((f(G, O) | 0) + (da >>> 16) | 0) + (wa >>> 16) | 0;
                            ta = ((f(y, W) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                            wa = ((f(G, W) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                            da = ta << 16 | ra & 65535;
                            ra = ((f(y, P) | 0) + (ea & 65535) | 0) + (wa & 65535) | 0;
                            sa = ((f(G, P) | 0) + (ea >>> 16) | 0) + (wa >>> 16) | 0;
                            ta = ((f(y, X) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                            wa = ((f(G, X) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                            ea = ta << 16 | ra & 65535;
                            ra = ((f(y, Q) | 0) + (fa & 65535) | 0) + (wa & 65535) | 0;
                            sa = ((f(G, Q) | 0) + (fa >>> 16) | 0) + (wa >>> 16) | 0;
                            ta = ((f(y, Y) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                            wa = ((f(G, Y) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                            fa = ta << 16 | ra & 65535;
                            ra = ((f(y, R) | 0) + (ga & 65535) | 0) + (wa & 65535) | 0;
                            sa = ((f(G, R) | 0) + (ga >>> 16) | 0) + (wa >>> 16) | 0;
                            ta = ((f(y, Z) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                            wa = ((f(G, Z) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                            ga = ta << 16 | ra & 65535;
                            ra = ((f(y, S) | 0) + (ha & 65535) | 0) + (wa & 65535) | 0;
                            sa = ((f(G, S) | 0) + (ha >>> 16) | 0) + (wa >>> 16) | 0;
                            ta = ((f(y, $) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                            wa = ((f(G, $) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                            ha = ta << 16 | ra & 65535;
                            ra = ((f(y, T) | 0) + (ia & 65535) | 0) + (wa & 65535) | 0;
                            sa = ((f(G, T) | 0) + (ia >>> 16) | 0) + (wa >>> 16) | 0;
                            ta = ((f(y, _) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                            wa = ((f(G, _) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                            ia = ta << 16 | ra & 65535;
                            ra = ((f(y, U) | 0) + (ja & 65535) | 0) + (wa & 65535) | 0;
                            sa = ((f(G, U) | 0) + (ja >>> 16) | 0) + (wa >>> 16) | 0;
                            ta = ((f(y, aa) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                            wa = ((f(G, aa) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                            ja = ta << 16 | ra & 65535;
                            ka = wa;
                            ra = ((f(z, N) | 0) + (da & 65535) | 0) + (la & 65535) | 0;
                            sa = ((f(H, N) | 0) + (da >>> 16) | 0) + (la >>> 16) | 0;
                            ta = ((f(z, V) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                            wa = ((f(H, V) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                            da = ta << 16 | ra & 65535;
                            ra = ((f(z, O) | 0) + (ea & 65535) | 0) + (wa & 65535) | 0;
                            sa = ((f(H, O) | 0) + (ea >>> 16) | 0) + (wa >>> 16) | 0;
                            ta = ((f(z, W) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                            wa = ((f(H, W) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                            ea = ta << 16 | ra & 65535;
                            ra = ((f(z, P) | 0) + (fa & 65535) | 0) + (wa & 65535) | 0;
                            sa = ((f(H, P) | 0) + (fa >>> 16) | 0) + (wa >>> 16) | 0;
                            ta = ((f(z, X) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                            wa = ((f(H, X) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                            fa = ta << 16 | ra & 65535;
                            ra = ((f(z, Q) | 0) + (ga & 65535) | 0) + (wa & 65535) | 0;
                            sa = ((f(H, Q) | 0) + (ga >>> 16) | 0) + (wa >>> 16) | 0;
                            ta = ((f(z, Y) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                            wa = ((f(H, Y) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                            ga = ta << 16 | ra & 65535;
                            ra = ((f(z, R) | 0) + (ha & 65535) | 0) + (wa & 65535) | 0;
                            sa = ((f(H, R) | 0) + (ha >>> 16) | 0) + (wa >>> 16) | 0;
                            ta = ((f(z, Z) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                            wa = ((f(H, Z) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                            ha = ta << 16 | ra & 65535;
                            ra = ((f(z, S) | 0) + (ia & 65535) | 0) + (wa & 65535) | 0;
                            sa = ((f(H, S) | 0) + (ia >>> 16) | 0) + (wa >>> 16) | 0;
                            ta = ((f(z, $) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                            wa = ((f(H, $) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                            ia = ta << 16 | ra & 65535;
                            ra = ((f(z, T) | 0) + (ja & 65535) | 0) + (wa & 65535) | 0;
                            sa = ((f(H, T) | 0) + (ja >>> 16) | 0) + (wa >>> 16) | 0;
                            ta = ((f(z, _) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                            wa = ((f(H, _) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                            ja = ta << 16 | ra & 65535;
                            ra = ((f(z, U) | 0) + (ka & 65535) | 0) + (wa & 65535) | 0;
                            sa = ((f(H, U) | 0) + (ka >>> 16) | 0) + (wa >>> 16) | 0;
                            ta = ((f(z, aa) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                            wa = ((f(H, aa) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                            ka = ta << 16 | ra & 65535;
                            la = wa;
                            ra = ((f(A, N) | 0) + (ea & 65535) | 0) + (ma & 65535) | 0;
                            sa = ((f(I, N) | 0) + (ea >>> 16) | 0) + (ma >>> 16) | 0;
                            ta = ((f(A, V) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                            wa = ((f(I, V) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                            ea = ta << 16 | ra & 65535;
                            ra = ((f(A, O) | 0) + (fa & 65535) | 0) + (wa & 65535) | 0;
                            sa = ((f(I, O) | 0) + (fa >>> 16) | 0) + (wa >>> 16) | 0;
                            ta = ((f(A, W) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                            wa = ((f(I, W) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                            fa = ta << 16 | ra & 65535;
                            ra = ((f(A, P) | 0) + (ga & 65535) | 0) + (wa & 65535) | 0;
                            sa = ((f(I, P) | 0) + (ga >>> 16) | 0) + (wa >>> 16) | 0;
                            ta = ((f(A, X) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                            wa = ((f(I, X) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                            ga = ta << 16 | ra & 65535;
                            ra = ((f(A, Q) | 0) + (ha & 65535) | 0) + (wa & 65535) | 0;
                            sa = ((f(I, Q) | 0) + (ha >>> 16) | 0) + (wa >>> 16) | 0;
                            ta = ((f(A, Y) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                            wa = ((f(I, Y) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                            ha = ta << 16 | ra & 65535;
                            ra = ((f(A, R) | 0) + (ia & 65535) | 0) + (wa & 65535) | 0;
                            sa = ((f(I, R) | 0) + (ia >>> 16) | 0) + (wa >>> 16) | 0;
                            ta = ((f(A, Z) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                            wa = ((f(I, Z) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                            ia = ta << 16 | ra & 65535;
                            ra = ((f(A, S) | 0) + (ja & 65535) | 0) + (wa & 65535) | 0;
                            sa = ((f(I, S) | 0) + (ja >>> 16) | 0) + (wa >>> 16) | 0;
                            ta = ((f(A, $) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                            wa = ((f(I, $) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                            ja = ta << 16 | ra & 65535;
                            ra = ((f(A, T) | 0) + (ka & 65535) | 0) + (wa & 65535) | 0;
                            sa = ((f(I, T) | 0) + (ka >>> 16) | 0) + (wa >>> 16) | 0;
                            ta = ((f(A, _) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                            wa = ((f(I, _) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                            ka = ta << 16 | ra & 65535;
                            ra = ((f(A, U) | 0) + (la & 65535) | 0) + (wa & 65535) | 0;
                            sa = ((f(I, U) | 0) + (la >>> 16) | 0) + (wa >>> 16) | 0;
                            ta = ((f(A, aa) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                            wa = ((f(I, aa) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                            la = ta << 16 | ra & 65535;
                            ma = wa;
                            ra = ((f(B, N) | 0) + (fa & 65535) | 0) + (na & 65535) | 0;
                            sa = ((f(J, N) | 0) + (fa >>> 16) | 0) + (na >>> 16) | 0;
                            ta = ((f(B, V) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                            wa = ((f(J, V) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                            fa = ta << 16 | ra & 65535;
                            ra = ((f(B, O) | 0) + (ga & 65535) | 0) + (wa & 65535) | 0;
                            sa = ((f(J, O) | 0) + (ga >>> 16) | 0) + (wa >>> 16) | 0;
                            ta = ((f(B, W) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                            wa = ((f(J, W) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                            ga = ta << 16 | ra & 65535;
                            ra = ((f(B, P) | 0) + (ha & 65535) | 0) + (wa & 65535) | 0;
                            sa = ((f(J, P) | 0) + (ha >>> 16) | 0) + (wa >>> 16) | 0;
                            ta = ((f(B, X) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                            wa = ((f(J, X) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                            ha = ta << 16 | ra & 65535;
                            ra = ((f(B, Q) | 0) + (ia & 65535) | 0) + (wa & 65535) | 0;
                            sa = ((f(J, Q) | 0) + (ia >>> 16) | 0) + (wa >>> 16) | 0;
                            ta = ((f(B, Y) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                            wa = ((f(J, Y) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                            ia = ta << 16 | ra & 65535;
                            ra = ((f(B, R) | 0) + (ja & 65535) | 0) + (wa & 65535) | 0;
                            sa = ((f(J, R) | 0) + (ja >>> 16) | 0) + (wa >>> 16) | 0;
                            ta = ((f(B, Z) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                            wa = ((f(J, Z) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                            ja = ta << 16 | ra & 65535;
                            ra = ((f(B, S) | 0) + (ka & 65535) | 0) + (wa & 65535) | 0;
                            sa = ((f(J, S) | 0) + (ka >>> 16) | 0) + (wa >>> 16) | 0;
                            ta = ((f(B, $) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                            wa = ((f(J, $) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                            ka = ta << 16 | ra & 65535;
                            ra = ((f(B, T) | 0) + (la & 65535) | 0) + (wa & 65535) | 0;
                            sa = ((f(J, T) | 0) + (la >>> 16) | 0) + (wa >>> 16) | 0;
                            ta = ((f(B, _) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                            wa = ((f(J, _) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                            la = ta << 16 | ra & 65535;
                            ra = ((f(B, U) | 0) + (ma & 65535) | 0) + (wa & 65535) | 0;
                            sa = ((f(J, U) | 0) + (ma >>> 16) | 0) + (wa >>> 16) | 0;
                            ta = ((f(B, aa) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                            wa = ((f(J, aa) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                            ma = ta << 16 | ra & 65535;
                            na = wa;
                            ra = ((f(C, N) | 0) + (ga & 65535) | 0) + (oa & 65535) | 0;
                            sa = ((f(K, N) | 0) + (ga >>> 16) | 0) + (oa >>> 16) | 0;
                            ta = ((f(C, V) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                            wa = ((f(K, V) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                            ga = ta << 16 | ra & 65535;
                            ra = ((f(C, O) | 0) + (ha & 65535) | 0) + (wa & 65535) | 0;
                            sa = ((f(K, O) | 0) + (ha >>> 16) | 0) + (wa >>> 16) | 0;
                            ta = ((f(C, W) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                            wa = ((f(K, W) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                            ha = ta << 16 | ra & 65535;
                            ra = ((f(C, P) | 0) + (ia & 65535) | 0) + (wa & 65535) | 0;
                            sa = ((f(K, P) | 0) + (ia >>> 16) | 0) + (wa >>> 16) | 0;
                            ta = ((f(C, X) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                            wa = ((f(K, X) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                            ia = ta << 16 | ra & 65535;
                            ra = ((f(C, Q) | 0) + (ja & 65535) | 0) + (wa & 65535) | 0;
                            sa = ((f(K, Q) | 0) + (ja >>> 16) | 0) + (wa >>> 16) | 0;
                            ta = ((f(C, Y) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                            wa = ((f(K, Y) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                            ja = ta << 16 | ra & 65535;
                            ra = ((f(C, R) | 0) + (ka & 65535) | 0) + (wa & 65535) | 0;
                            sa = ((f(K, R) | 0) + (ka >>> 16) | 0) + (wa >>> 16) | 0;
                            ta = ((f(C, Z) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                            wa = ((f(K, Z) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                            ka = ta << 16 | ra & 65535;
                            ra = ((f(C, S) | 0) + (la & 65535) | 0) + (wa & 65535) | 0;
                            sa = ((f(K, S) | 0) + (la >>> 16) | 0) + (wa >>> 16) | 0;
                            ta = ((f(C, $) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                            wa = ((f(K, $) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                            la = ta << 16 | ra & 65535;
                            ra = ((f(C, T) | 0) + (ma & 65535) | 0) + (wa & 65535) | 0;
                            sa = ((f(K, T) | 0) + (ma >>> 16) | 0) + (wa >>> 16) | 0;
                            ta = ((f(C, _) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                            wa = ((f(K, _) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                            ma = ta << 16 | ra & 65535;
                            ra = ((f(C, U) | 0) + (na & 65535) | 0) + (wa & 65535) | 0;
                            sa = ((f(K, U) | 0) + (na >>> 16) | 0) + (wa >>> 16) | 0;
                            ta = ((f(C, aa) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                            wa = ((f(K, aa) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                            na = ta << 16 | ra & 65535;
                            oa = wa;
                            ra = ((f(D, N) | 0) + (ha & 65535) | 0) + (pa & 65535) | 0;
                            sa = ((f(L, N) | 0) + (ha >>> 16) | 0) + (pa >>> 16) | 0;
                            ta = ((f(D, V) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                            wa = ((f(L, V) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                            ha = ta << 16 | ra & 65535;
                            ra = ((f(D, O) | 0) + (ia & 65535) | 0) + (wa & 65535) | 0;
                            sa = ((f(L, O) | 0) + (ia >>> 16) | 0) + (wa >>> 16) | 0;
                            ta = ((f(D, W) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                            wa = ((f(L, W) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                            ia = ta << 16 | ra & 65535;
                            ra = ((f(D, P) | 0) + (ja & 65535) | 0) + (wa & 65535) | 0;
                            sa = ((f(L, P) | 0) + (ja >>> 16) | 0) + (wa >>> 16) | 0;
                            ta = ((f(D, X) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                            wa = ((f(L, X) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                            ja = ta << 16 | ra & 65535;
                            ra = ((f(D, Q) | 0) + (ka & 65535) | 0) + (wa & 65535) | 0;
                            sa = ((f(L, Q) | 0) + (ka >>> 16) | 0) + (wa >>> 16) | 0;
                            ta = ((f(D, Y) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                            wa = ((f(L, Y) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                            ka = ta << 16 | ra & 65535;
                            ra = ((f(D, R) | 0) + (la & 65535) | 0) + (wa & 65535) | 0;
                            sa = ((f(L, R) | 0) + (la >>> 16) | 0) + (wa >>> 16) | 0;
                            ta = ((f(D, Z) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                            wa = ((f(L, Z) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                            la = ta << 16 | ra & 65535;
                            ra = ((f(D, S) | 0) + (ma & 65535) | 0) + (wa & 65535) | 0;
                            sa = ((f(L, S) | 0) + (ma >>> 16) | 0) + (wa >>> 16) | 0;
                            ta = ((f(D, $) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                            wa = ((f(L, $) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                            ma = ta << 16 | ra & 65535;
                            ra = ((f(D, T) | 0) + (na & 65535) | 0) + (wa & 65535) | 0;
                            sa = ((f(L, T) | 0) + (na >>> 16) | 0) + (wa >>> 16) | 0;
                            ta = ((f(D, _) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                            wa = ((f(L, _) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                            na = ta << 16 | ra & 65535;
                            ra = ((f(D, U) | 0) + (oa & 65535) | 0) + (wa & 65535) | 0;
                            sa = ((f(L, U) | 0) + (oa >>> 16) | 0) + (wa >>> 16) | 0;
                            ta = ((f(D, aa) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                            wa = ((f(L, aa) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                            oa = ta << 16 | ra & 65535;
                            pa = wa;
                            ra = ((f(E, N) | 0) + (ia & 65535) | 0) + (qa & 65535) | 0;
                            sa = ((f(M, N) | 0) + (ia >>> 16) | 0) + (qa >>> 16) | 0;
                            ta = ((f(E, V) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                            wa = ((f(M, V) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                            ia = ta << 16 | ra & 65535;
                            ra = ((f(E, O) | 0) + (ja & 65535) | 0) + (wa & 65535) | 0;
                            sa = ((f(M, O) | 0) + (ja >>> 16) | 0) + (wa >>> 16) | 0;
                            ta = ((f(E, W) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                            wa = ((f(M, W) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                            ja = ta << 16 | ra & 65535;
                            ra = ((f(E, P) | 0) + (ka & 65535) | 0) + (wa & 65535) | 0;
                            sa = ((f(M, P) | 0) + (ka >>> 16) | 0) + (wa >>> 16) | 0;
                            ta = ((f(E, X) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                            wa = ((f(M, X) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                            ka = ta << 16 | ra & 65535;
                            ra = ((f(E, Q) | 0) + (la & 65535) | 0) + (wa & 65535) | 0;
                            sa = ((f(M, Q) | 0) + (la >>> 16) | 0) + (wa >>> 16) | 0;
                            ta = ((f(E, Y) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                            wa = ((f(M, Y) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                            la = ta << 16 | ra & 65535;
                            ra = ((f(E, R) | 0) + (ma & 65535) | 0) + (wa & 65535) | 0;
                            sa = ((f(M, R) | 0) + (ma >>> 16) | 0) + (wa >>> 16) | 0;
                            ta = ((f(E, Z) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                            wa = ((f(M, Z) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                            ma = ta << 16 | ra & 65535;
                            ra = ((f(E, S) | 0) + (na & 65535) | 0) + (wa & 65535) | 0;
                            sa = ((f(M, S) | 0) + (na >>> 16) | 0) + (wa >>> 16) | 0;
                            ta = ((f(E, $) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                            wa = ((f(M, $) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                            na = ta << 16 | ra & 65535;
                            ra = ((f(E, T) | 0) + (oa & 65535) | 0) + (wa & 65535) | 0;
                            sa = ((f(M, T) | 0) + (oa >>> 16) | 0) + (wa >>> 16) | 0;
                            ta = ((f(E, _) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                            wa = ((f(M, _) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                            oa = ta << 16 | ra & 65535;
                            ra = ((f(E, U) | 0) + (pa & 65535) | 0) + (wa & 65535) | 0;
                            sa = ((f(M, U) | 0) + (pa >>> 16) | 0) + (wa >>> 16) | 0;
                            ta = ((f(E, aa) | 0) + (sa & 65535) | 0) + (ra >>> 16) | 0;
                            wa = ((f(M, aa) | 0) + (sa >>> 16) | 0) + (ta >>> 16) | 0;
                            pa = ta << 16 | ra & 65535;
                            qa = wa;
                            Da = ya + (Ba + Ca | 0) | 0;
                            xa = e[Ga + Da >> 2] | 0;
                            ra = ((xa & 65535) + ((ba & 65535) << 1) | 0) + ua | 0;
                            ta = ((xa >>> 16) + (ba >>> 16 << 1) | 0) + (ra >>> 16) | 0;
                            e[Ga + Da >> 2] = ta << 16 | ra & 65535;
                            ua = ta >>> 16;
                            Da = Da + 4 | 0;
                            xa = e[Ga + Da >> 2] | 0;
                            ra = ((xa & 65535) + ((ca & 65535) << 1) | 0) + ua | 0;
                            ta = ((xa >>> 16) + (ca >>> 16 << 1) | 0) + (ra >>> 16) | 0;
                            e[Ga + Da >> 2] = ta << 16 | ra & 65535;
                            ua = ta >>> 16;
                            Da = Da + 4 | 0;
                            xa = e[Ga + Da >> 2] | 0;
                            ra = ((xa & 65535) + ((da & 65535) << 1) | 0) + ua | 0;
                            ta = ((xa >>> 16) + (da >>> 16 << 1) | 0) + (ra >>> 16) | 0;
                            e[Ga + Da >> 2] = ta << 16 | ra & 65535;
                            ua = ta >>> 16;
                            Da = Da + 4 | 0;
                            xa = e[Ga + Da >> 2] | 0;
                            ra = ((xa & 65535) + ((ea & 65535) << 1) | 0) + ua | 0;
                            ta = ((xa >>> 16) + (ea >>> 16 << 1) | 0) + (ra >>> 16) | 0;
                            e[Ga + Da >> 2] = ta << 16 | ra & 65535;
                            ua = ta >>> 16;
                            Da = Da + 4 | 0;
                            xa = e[Ga + Da >> 2] | 0;
                            ra = ((xa & 65535) + ((fa & 65535) << 1) | 0) + ua | 0;
                            ta = ((xa >>> 16) + (fa >>> 16 << 1) | 0) + (ra >>> 16) | 0;
                            e[Ga + Da >> 2] = ta << 16 | ra & 65535;
                            ua = ta >>> 16;
                            Da = Da + 4 | 0;
                            xa = e[Ga + Da >> 2] | 0;
                            ra = ((xa & 65535) + ((ga & 65535) << 1) | 0) + ua | 0;
                            ta = ((xa >>> 16) + (ga >>> 16 << 1) | 0) + (ra >>> 16) | 0;
                            e[Ga + Da >> 2] = ta << 16 | ra & 65535;
                            ua = ta >>> 16;
                            Da = Da + 4 | 0;
                            xa = e[Ga + Da >> 2] | 0;
                            ra = ((xa & 65535) + ((ha & 65535) << 1) | 0) + ua | 0;
                            ta = ((xa >>> 16) + (ha >>> 16 << 1) | 0) + (ra >>> 16) | 0;
                            e[Ga + Da >> 2] = ta << 16 | ra & 65535;
                            ua = ta >>> 16;
                            Da = Da + 4 | 0;
                            xa = e[Ga + Da >> 2] | 0;
                            ra = ((xa & 65535) + ((ia & 65535) << 1) | 0) + ua | 0;
                            ta = ((xa >>> 16) + (ia >>> 16 << 1) | 0) + (ra >>> 16) | 0;
                            e[Ga + Da >> 2] = ta << 16 | ra & 65535;
                            ua = ta >>> 16
                        }
                        Da = ya + (Ba + Ca | 0) | 0;
                        xa = e[Ga + Da >> 2] | 0;
                        ra = (((xa & 65535) + ((ja & 65535) << 1) | 0) + ua | 0) + va | 0;
                        ta = ((xa >>> 16) + (ja >>> 16 << 1) | 0) + (ra >>> 16) | 0;
                        e[Ga + Da >> 2] = ta << 16 | ra & 65535;
                        ua = ta >>> 16;
                        Da = Da + 4 | 0;
                        xa = e[Ga + Da >> 2] | 0;
                        ra = ((xa & 65535) + ((ka & 65535) << 1) | 0) + ua | 0;
                        ta = ((xa >>> 16) + (ka >>> 16 << 1) | 0) + (ra >>> 16) | 0;
                        e[Ga + Da >> 2] = ta << 16 | ra & 65535;
                        ua = ta >>> 16;
                        Da = Da + 4 | 0;
                        xa = e[Ga + Da >> 2] | 0;
                        ra = ((xa & 65535) + ((la & 65535) << 1) | 0) + ua | 0;
                        ta = ((xa >>> 16) + (la >>> 16 << 1) | 0) + (ra >>> 16) | 0;
                        e[Ga + Da >> 2] = ta << 16 | ra & 65535;
                        ua = ta >>> 16;
                        Da = Da + 4 | 0;
                        xa = e[Ga + Da >> 2] | 0;
                        ra = ((xa & 65535) + ((ma & 65535) << 1) | 0) + ua | 0;
                        ta = ((xa >>> 16) + (ma >>> 16 << 1) | 0) + (ra >>> 16) | 0;
                        e[Ga + Da >> 2] = ta << 16 | ra & 65535;
                        ua = ta >>> 16;
                        Da = Da + 4 | 0;
                        xa = e[Ga + Da >> 2] | 0;
                        ra = ((xa & 65535) + ((na & 65535) << 1) | 0) + ua | 0;
                        ta = ((xa >>> 16) + (na >>> 16 << 1) | 0) + (ra >>> 16) | 0;
                        e[Ga + Da >> 2] = ta << 16 | ra & 65535;
                        ua = ta >>> 16;
                        Da = Da + 4 | 0;
                        xa = e[Ga + Da >> 2] | 0;
                        ra = ((xa & 65535) + ((oa & 65535) << 1) | 0) + ua | 0;
                        ta = ((xa >>> 16) + (oa >>> 16 << 1) | 0) + (ra >>> 16) | 0;
                        e[Ga + Da >> 2] = ta << 16 | ra & 65535;
                        ua = ta >>> 16;
                        Da = Da + 4 | 0;
                        xa = e[Ga + Da >> 2] | 0;
                        ra = ((xa & 65535) + ((pa & 65535) << 1) | 0) + ua | 0;
                        ta = ((xa >>> 16) + (pa >>> 16 << 1) | 0) + (ra >>> 16) | 0;
                        e[Ga + Da >> 2] = ta << 16 | ra & 65535;
                        ua = ta >>> 16;
                        Da = Da + 4 | 0;
                        xa = e[Ga + Da >> 2] | 0;
                        ra = ((xa & 65535) + ((qa & 65535) << 1) | 0) + ua | 0;
                        ta = ((xa >>> 16) + (qa >>> 16 << 1) | 0) + (ra >>> 16) | 0;
                        e[Ga + Da >> 2] = ta << 16 | ra & 65535;
                        va = ta >>> 16
                    }
                    for (Da = Da + 4 | 0; !!va & (Da | 0) < za << 1; Da = Da + 4 | 0) {
                        xa = e[Ga + Da >> 2] | 0;
                        ra = (xa & 65535) + va | 0;
                        ta = (xa >>> 16) + (ra >>> 16) | 0;
                        e[Ga + Da >> 2] = ta << 16 | ra & 65535;
                        va = ta >>> 16
                    }
                }
            }
        }

        function s(u, v, w, x, y) {
            u = u | 0;
            v = v | 0;
            w = w | 0;
            x = x | 0;
            y = y | 0;
            var z = 0,
                A = 0,
                B = 0,
                C = 0,
                D = 0,
                E = 0,
                F = 0,
                G = 0,
                H = 0,
                I = 0,
                J = 0,
                K = 0,
                L = 0,
                M = 0,
                N = 0,
                O = 0,
                P = 0,
                Q = 0,
                R = 0;
            for (P = v - 1 & -4;
                (P | 0) >= 0; P = P - 4 | 0) {
                z = e[u + P >> 2] | 0;
                if (z) {
                    v = P;
                    break
                }
            }
            for (P = x - 1 & -4;
                (P | 0) >= 0; P = P - 4 | 0) {
                A = e[w + P >> 2] | 0;
                if (A) {
                    x = P;
                    break
                }
            }
            while ((A & 2147483648) == 0) {
                A = A << 1;
                B = B + 1 | 0
            }
            D = e[u + v >> 2] | 0;
            if (B) {
                C = D >>> (32 - B | 0);
                for (P = v - 4 | 0;
                    (P | 0) >= 0; P = P - 4 | 0) {
                    z = e[u + P >> 2] | 0;
                    e[u + P + 4 >> 2] = D << B | (B ? z >>> (32 - B | 0) : 0);
                    D = z
                }
                e[u >> 2] = D << B
            }
            if (B) {
                E = e[w + x >> 2] | 0;
                for (P = x - 4 | 0;
                    (P | 0) >= 0; P = P - 4 | 0) {
                    A = e[w + P >> 2] | 0;
                    e[w + P + 4 >> 2] = E << B | A >>> (32 - B | 0);
                    E = A
                }
                e[w >> 2] = E << B
            }
            E = e[w + x >> 2] | 0;
            F = E >>> 16, G = E & 65535;
            for (P = v;
                (P | 0) >= (x | 0); P = P - 4 | 0) {
                Q = P - x | 0;
                D = e[u + P >> 2] | 0;
                H = (C >>> 0) / (F >>> 0) | 0, J = (C >>> 0) % (F >>> 0) | 0, L = f(H, G) | 0;
                while ((H | 0) == 65536 | L >>> 0 > (J << 16 | D >>> 16) >>> 0) {
                    H = H - 1 | 0, J = J + F | 0, L = L - G | 0;
                    if ((J | 0) >= 65536) break
                }
                N = 0, O = 0;
                for (R = 0;
                    (R | 0) <= (x | 0); R = R + 4 | 0) {
                    A = e[w + R >> 2] | 0;
                    L = (f(H, A & 65535) | 0) + (N >>> 16) | 0;
                    M = (f(H, A >>> 16) | 0) + (L >>> 16) | 0;
                    A = N & 65535 | L << 16;
                    N = M;
                    z = e[u + Q + R >> 2] | 0;
                    L = ((z & 65535) - (A & 65535) | 0) + O | 0;
                    M = ((z >>> 16) - (A >>> 16) | 0) + (L >> 16) | 0;
                    e[u + Q + R >> 2] = M << 16 | L & 65535;
                    O = M >> 16
                }
                L = ((C & 65535) - (N & 65535) | 0) + O | 0;
                M = ((C >>> 16) - (N >>> 16) | 0) + (L >> 16) | 0;
                C = M << 16 | L & 65535;
                O = M >> 16;
                if (O) {
                    H = H - 1 | 0;
                    O = 0;
                    for (R = 0;
                        (R | 0) <= (x | 0); R = R + 4 | 0) {
                        A = e[w + R >> 2] | 0;
                        z = e[u + Q + R >> 2] | 0;
                        L = (z & 65535) + O | 0;
                        M = (z >>> 16) + A + (L >>> 16) | 0;
                        e[u + Q + R >> 2] = M << 16 | L & 65535;
                        O = M >>> 16
                    }
                    C = C + O | 0
                }
                D = e[u + P >> 2] | 0;
                z = C << 16 | D >>> 16;
                I = (z >>> 0) / (F >>> 0) | 0, K = (z >>> 0) % (F >>> 0) | 0, L = f(I, G) | 0;
                while ((I | 0) == 65536 | L >>> 0 > (K << 16 | D & 65535) >>> 0) {
                    I = I - 1 | 0, K = K + F | 0, L = L - G | 0;
                    if ((K | 0) >= 65536) break
                }
                N = 0, O = 0;
                for (R = 0;
                    (R | 0) <= (x | 0); R = R + 4 | 0) {
                    A = e[w + R >> 2] | 0;
                    L = (f(I, A & 65535) | 0) + (N & 65535) | 0;
                    M = ((f(I, A >>> 16) | 0) + (L >>> 16) | 0) + (N >>> 16) | 0;
                    A = L & 65535 | M << 16;
                    N = M >>> 16;
                    z = e[u + Q + R >> 2] | 0;
                    L = ((z & 65535) - (A & 65535) | 0) + O | 0;
                    M = ((z >>> 16) - (A >>> 16) | 0) + (L >> 16) | 0;
                    O = M >> 16;
                    e[u + Q + R >> 2] = M << 16 | L & 65535
                }
                L = ((C & 65535) - (N & 65535) | 0) + O | 0;
                M = ((C >>> 16) - (N >>> 16) | 0) + (L >> 16) | 0;
                O = M >> 16;
                if (O) {
                    I = I - 1 | 0;
                    O = 0;
                    for (R = 0;
                        (R | 0) <= (x | 0); R = R + 4 | 0) {
                        A = e[w + R >> 2] | 0;
                        z = e[u + Q + R >> 2] | 0;
                        L = ((z & 65535) + (A & 65535) | 0) + O | 0;
                        M = ((z >>> 16) + (A >>> 16) | 0) + (L >>> 16) | 0;
                        O = M >>> 16;
                        e[u + Q + R >> 2] = L & 65535 | M << 16
                    }
                }
                e[y + Q >> 2] = H << 16 | I;
                C = e[u + P >> 2] | 0
            }
            if (B) {
                D = e[u >> 2] | 0;
                for (P = 4;
                    (P | 0) <= (x | 0); P = P + 4 | 0) {
                    z = e[u + P >> 2] | 0;
                    e[u + P - 4 >> 2] = z << (32 - B | 0) | D >>> B;
                    D = z
                }
                e[u + x >> 2] = D >>> B
            }
        }

        function t(u, v, w, x, y, z) {
            u = u | 0;
            v = v | 0;
            w = w | 0;
            x = x | 0;
            y = y | 0;
            z = z | 0;
            var A = 0,
                B = 0,
                C = 0,
                D = 0,
                E = 0,
                F = 0,
                G = 0,
                H = 0,
                I = 0,
                J = 0,
                K = 0,
                L = 0,
                M = 0,
                N = 0;
            A = h(x << 1) | 0;
            k(x << 1, 0, A);
            j(v, u, A);
            for (L = 0;
                (L | 0) < (x | 0); L = L + 4 | 0) {
                C = e[A + L >> 2] | 0, D = C & 65535, C = C >>> 16;
                F = y >>> 16, E = y & 65535;
                G = f(D, E) | 0, H = ((f(D, F) | 0) + (f(C, E) | 0) | 0) + (G >>> 16) | 0;
                D = G & 65535, C = H & 65535;
                K = 0;
                for (M = 0;
                    (M | 0) < (x | 0); M = M + 4 | 0) {
                    N = L + M | 0;
                    F = e[w + M >> 2] | 0, E = F & 65535, F = F >>> 16;
                    J = e[A + N >> 2] | 0;
                    G = ((f(D, E) | 0) + (K & 65535) | 0) + (J & 65535) | 0;
                    H = ((f(D, F) | 0) + (K >>> 16) | 0) + (J >>> 16) | 0;
                    I = ((f(C, E) | 0) + (H & 65535) | 0) + (G >>> 16) | 0;
                    K = ((f(C, F) | 0) + (I >>> 16) | 0) + (H >>> 16) | 0;
                    J = I << 16 | G & 65535;
                    e[A + N >> 2] = J
                }
                N = L + M | 0;
                J = e[A + N >> 2] | 0;
                G = ((J & 65535) + (K & 65535) | 0) + B | 0;
                H = ((J >>> 16) + (K >>> 16) | 0) + (G >>> 16) | 0;
                e[A + N >> 2] = H << 16 | G & 65535;
                B = H >>> 16
            }
            j(x, A + x | 0, z);
            i(x << 1);
            if (B | (m(w, x, z, x) | 0) <= 0) {
                p(z, x, w, x, z, x) | 0
            }
        }
        return {
            sreset: g,
            salloc: h,
            sfree: i,
            z: k,
            tst: n,
            neg: l,
            cmp: m,
            add: o,
            sub: p,
            mul: q,
            sqr: r,
            div: s,
            mredc: t
        }
    }

    function ib(a) {
        return a instanceof kb
    }

    function jb(a, b) {
        return a * b | 0
    }

    function kb(a) {
        var b = zd,
            c = 0,
            d = 0;
        if (n(a) && (a = f(a)), o(a) && (a = new Uint8Array(a)), void 0 === a);
        else if (m(a)) {
            var e = Math.abs(a);
            e > 4294967295 ? (b = new Uint32Array(2), b[0] = 0 | e, b[1] = e / 4294967296 | 0, c = 52) : e > 0 ? (b = new Uint32Array(1), b[0] = e, c = 32) : (b = zd, c = 0), d = 0 > a ? -1 : 1
        } else if (p(a)) {
            for (var g = 0; !a[g]; g++);
            if (c = 8 * (a.length - g), !c) return Bd;
            b = new Uint32Array(c + 31 >> 5);
            for (var h = a.length - 4; h >= g; h -= 4) b[a.length - 4 - h >> 2] = a[h] << 24 | a[h + 1] << 16 | a[h + 2] << 8 | a[h + 3];
            g - h === 3 ? b[b.length - 1] = a[g] : g - h === 2 ? b[b.length - 1] = a[g] << 8 | a[g + 1] : g - h === 1 && (b[b.length - 1] = a[g] << 16 | a[g + 1] << 8 | a[g + 2]), d = 1
        } else {
            if ("object" != typeof a || null === a) throw new TypeError("number is of unexpected type");
            b = new Uint32Array(a.limbs), c = a.bitLength, d = a.sign
        }
        this.limbs = b, this.bitLength = c, this.sign = d
    }

    function lb(a) {
        a = a || 16;
        var b = this.limbs,
            c = this.bitLength,
            e = "";
        if (16 !== a) throw new d("bad radix");
        for (var f = (c + 31 >> 5) - 1; f >= 0; f--) {
            var g = b[f].toString(16);
            e += "00000000".substr(g.length), e += g
        }
        return e = e.replace(/^0+/, ""), e.length || (e = "0"), this.sign < 0 && (e = "-" + e), e
    }

    function mb() {
        var a = this.bitLength,
            b = this.limbs;
        if (0 === a) return new Uint8Array(0);
        for (var c = a + 7 >> 3, d = new Uint8Array(c), e = 0; c > e; e++) {
            var f = c - e - 1;
            d[e] = b[f >> 2] >> ((3 & f) << 3)
        }
        return d
    }

    function nb() {
        var a = this.limbs,
            b = this.bitLength,
            c = this.sign;
        if (!c) return 0;
        if (32 >= b) return c * (a[0] >>> 0);
        if (52 >= b) return c * (4294967296 * (a[1] >>> 0) + (a[0] >>> 0));
        var d, e, f = 0;
        for (d = a.length - 1; d >= 0; d--)
            if (0 !== (e = a[d])) {
                for (; 0 === (e << f & 2147483648);) f++;
                break
            }
        return 0 === d ? c * (a[0] >>> 0) : c * (1048576 * ((a[d] << f | (f ? a[d - 1] >>> 32 - f : 0)) >>> 0) + ((a[d - 1] << f | (f && d > 1 ? a[d - 2] >>> 32 - f : 0)) >>> 12)) * Math.pow(2, 32 * d - f - 52)
    }

    function ob(a) {
        var b = this.limbs,
            c = this.bitLength;
        if (a >= c) return this;
        var d = new kb,
            e = a + 31 >> 5,
            f = a % 32;
        return d.limbs = new Uint32Array(b.subarray(0, e)), d.bitLength = a, d.sign = this.sign, f && (d.limbs[e - 1] &= -1 >>> 32 - f), d
    }

    function pb(a, b) {
        if (!m(a)) throw new TypeError("TODO");
        if (void 0 !== b && !m(b)) throw new TypeError("TODO");
        var c = this.limbs,
            d = this.bitLength;
        if (0 > a) throw new RangeError("TODO");
        if (a >= d) return Bd;
        (void 0 === b || b > d - a) && (b = d - a);
        var e, f = new kb,
            g = a >> 5,
            h = a + b + 31 >> 5,
            i = b + 31 >> 5,
            j = a % 32,
            k = b % 32;
        if (e = new Uint32Array(i), j) {
            for (var l = 0; h - g - 1 > l; l++) e[l] = c[g + l] >>> j | c[g + l + 1] << 32 - j;
            e[l] = c[g + l] >>> j
        } else e.set(c.subarray(g, h));
        return k && (e[i - 1] &= -1 >>> 32 - k), f.limbs = e, f.bitLength = b, f.sign = this.sign, f
    }

    function qb() {
        var a = new kb;
        return a.limbs = this.limbs, a.bitLength = this.bitLength, a.sign = -1 * this.sign, a
    }

    function rb(a) {
        ib(a) || (a = new kb(a));
        var b = this.limbs,
            c = b.length,
            d = a.limbs,
            e = d.length,
            f = 0;
        return this.sign < a.sign ? -1 : this.sign > a.sign ? 1 : (yd.set(b, 0), yd.set(d, c), f = wd.cmp(0, c << 2, c << 2, e << 2), f * this.sign)
    }

    function sb(a) {
        if (ib(a) || (a = new kb(a)), !this.sign) return a;
        if (!a.sign) return this;
        var b, c, d, e, f = this.bitLength,
            g = this.limbs,
            h = g.length,
            i = this.sign,
            j = a.bitLength,
            k = a.limbs,
            l = k.length,
            m = a.sign,
            n = new kb;
        b = (f > j ? f : j) + (i * m > 0 ? 1 : 0), c = b + 31 >> 5, wd.sreset();
        var o = wd.salloc(h << 2),
            p = wd.salloc(l << 2),
            q = wd.salloc(c << 2);
        return wd.z(q - o + (c << 2), 0, o), yd.set(g, o >> 2), yd.set(k, p >> 2), i * m > 0 ? (wd.add(o, h << 2, p, l << 2, q, c << 2), d = i) : i > m ? (e = wd.sub(o, h << 2, p, l << 2, q, c << 2), d = e ? m : i) : (e = wd.sub(p, l << 2, o, h << 2, q, c << 2), d = e ? i : m), e && wd.neg(q, c << 2, q, c << 2), 0 === wd.tst(q, c << 2) ? Bd : (n.limbs = new Uint32Array(yd.subarray(q >> 2, (q >> 2) + c)), n.bitLength = b, n.sign = d, n)
    }

    function tb(a) {
        return ib(a) || (a = new kb(a)), this.add(a.negate())
    }

    function ub(a) {
        if (ib(a) || (a = new kb(a)), !this.sign || !a.sign) return Bd;
        var b, c, d = this.bitLength,
            e = this.limbs,
            f = e.length,
            g = a.bitLength,
            h = a.limbs,
            i = h.length,
            j = new kb;
        b = d + g, c = b + 31 >> 5, wd.sreset();
        var k = wd.salloc(f << 2),
            l = wd.salloc(i << 2),
            m = wd.salloc(c << 2);
        return wd.z(m - k + (c << 2), 0, k), yd.set(e, k >> 2), yd.set(h, l >> 2), wd.mul(k, f << 2, l, i << 2, m, c << 2), j.limbs = new Uint32Array(yd.subarray(m >> 2, (m >> 2) + c)), j.sign = this.sign * a.sign, j.bitLength = b, j
    }

    function vb() {
        if (!this.sign) return Bd;
        var a, b, c = this.bitLength,
            d = this.limbs,
            e = d.length,
            f = new kb;
        a = c << 1, b = a + 31 >> 5, wd.sreset();
        var g = wd.salloc(e << 2),
            h = wd.salloc(b << 2);
        return wd.z(h - g + (b << 2), 0, g), yd.set(d, g >> 2), wd.sqr(g, e << 2, h), f.limbs = new Uint32Array(yd.subarray(h >> 2, (h >> 2) + b)), f.bitLength = a, f.sign = 1, f
    }

    function wb(a) {
        ib(a) || (a = new kb(a));
        var b, c, d = this.bitLength,
            e = this.limbs,
            f = e.length,
            g = a.bitLength,
            h = a.limbs,
            i = h.length,
            j = Bd,
            k = Bd;
        wd.sreset();
        var l = wd.salloc(f << 2),
            m = wd.salloc(i << 2),
            n = wd.salloc(f << 2);
        return wd.z(n - l + (f << 2), 0, l), yd.set(e, l >> 2), yd.set(h, m >> 2), wd.div(l, f << 2, m, i << 2, n), b = wd.tst(n, f << 2) >> 2, b && (j = new kb, j.limbs = new Uint32Array(yd.subarray(n >> 2, (n >> 2) + b)), j.bitLength = b << 5 > d ? d : b << 5, j.sign = this.sign * a.sign), c = wd.tst(l, i << 2) >> 2, c && (k = new kb, k.limbs = new Uint32Array(yd.subarray(l >> 2, (l >> 2) + c)), k.bitLength = c << 5 > g ? g : c << 5, k.sign = this.sign), {
            quotient: j,
            remainder: k
        }
    }

    function xb(a, b) {
        var c, d, e, f, g = 0 > a ? -1 : 1,
            h = 0 > b ? -1 : 1,
            i = 1,
            j = 0,
            k = 0,
            l = 1;
        for (a *= g, b *= h, f = b > a, f && (e = a, a = b, b = e, e = g, g = h, h = e), d = Math.floor(a / b), c = a - d * b; c;) e = i - d * j, i = j, j = e, e = k - d * l, k = l, l = e, a = b, b = c, d = Math.floor(a / b), c = a - d * b;
        return j *= g, l *= h, f && (e = j, j = l, l = e), {
            gcd: b,
            x: j,
            y: l
        }
    }

    function yb(a, b) {
        ib(a) || (a = new kb(a)), ib(b) || (b = new kb(b));
        var c = a.sign,
            d = b.sign;
        0 > c && (a = a.negate()), 0 > d && (b = b.negate());
        var e = a.compare(b);
        if (0 > e) {
            var f = a;
            a = b, b = f, f = c, c = d, d = f
        }
        var g, h, i, j = Cd,
            k = Bd,
            l = b.bitLength,
            m = Bd,
            n = Cd,
            o = a.bitLength;
        for (g = a.divide(b);
            (h = g.remainder) !== Bd;) i = g.quotient, g = j.subtract(i.multiply(k).clamp(l)).clamp(l), j = k, k = g, g = m.subtract(i.multiply(n).clamp(o)).clamp(o), m = n, n = g, a = b, b = h, g = a.divide(b);
        if (0 > c && (k = k.negate()), 0 > d && (n = n.negate()), 0 > e) {
            var f = k;
            k = n, n = f
        }
        return {
            gcd: b,
            x: k,
            y: n
        }
    }

    function zb() {
        if (kb.apply(this, arguments), this.valueOf() < 1) throw new RangeError;
        if (!(this.bitLength <= 32)) {
            var a;
            if (1 & this.limbs[0]) {
                var b = (this.bitLength + 31 & -32) + 1,
                    c = new Uint32Array(b + 31 >> 5);
                c[c.length - 1] = 1, a = new kb, a.sign = 1, a.bitLength = b, a.limbs = c;
                var d = xb(4294967296, this.limbs[0]).y;
                this.coefficient = 0 > d ? -d : 4294967296 - d, this.comodulus = a, this.comodulusRemainder = a.divide(this).remainder, this.comodulusRemainderSquare = a.square().divide(this).remainder
            }
        }
    }

    function Ab(a) {
        return ib(a) || (a = new kb(a)), a.bitLength <= 32 && this.bitLength <= 32 ? new kb(a.valueOf() % this.valueOf()) : a.compare(this) < 0 ? a : a.divide(this).remainder
    }

    function Bb(a) {
        a = this.reduce(a);
        var b = yb(this, a);
        return 1 !== b.gcd.valueOf() ? null : (b = b.y, b.sign < 0 && (b = b.add(this).clamp(this.bitLength)), b)
    }

    function Cb(a, b) {
        ib(a) || (a = new kb(a)), ib(b) || (b = new kb(b));
        for (var c = 0, d = 0; d < b.limbs.length; d++)
            for (var e = b.limbs[d]; e;) 1 & e && c++, e >>>= 1;
        var f = 8;
        b.bitLength <= 4536 && (f = 7), b.bitLength <= 1736 && (f = 6), b.bitLength <= 630 && (f = 5), b.bitLength <= 210 && (f = 4), b.bitLength <= 60 && (f = 3), b.bitLength <= 12 && (f = 2), 1 << f - 1 >= c && (f = 1), a = Db(this.reduce(a).multiply(this.comodulusRemainderSquare), this);
        var g = Db(a.square(), this),
            h = new Array(1 << f - 1);
        h[0] = a, h[1] = Db(a.multiply(g), this);
        for (var d = 2; 1 << f - 1 > d; d++) h[d] = Db(h[d - 1].multiply(g), this);
        for (var i = this.comodulusRemainder, j = i, d = b.limbs.length - 1; d >= 0; d--)
            for (var e = b.limbs[d], k = 32; k > 0;)
                if (2147483648 & e) {
                    for (var l = e >>> 32 - f, m = f; 0 === (1 & l);) l >>>= 1, m--;
                    for (var n = h[l >>> 1]; l;) l >>>= 1, j !== i && (j = Db(j.square(), this));
                    j = j !== i ? Db(j.multiply(n), this) : n, e <<= m, k -= m
                } else j !== i && (j = Db(j.square(), this)), e <<= 1, k--;
        return j = Db(j, this)
    }

    function Db(a, b) {
        var c = a.limbs,
            d = c.length,
            e = b.limbs,
            f = e.length,
            g = b.coefficient;
        wd.sreset();
        var h = wd.salloc(d << 2),
            i = wd.salloc(f << 2),
            j = wd.salloc(f << 2);
        wd.z(j - h + (f << 2), 0, h), yd.set(c, h >> 2), yd.set(e, i >> 2), wd.mredc(h, d << 2, i, f << 2, g, j);
        var k = new kb;
        return k.limbs = new Uint32Array(yd.subarray(j >> 2, (j >> 2) + f)), k.bitLength = b.bitLength, k.sign = 1, k
    }

    function Eb(a) {
        var b = new kb(this),
            c = 0;
        for (b.limbs[0] -= 1; 0 === b.limbs[c >> 5];) c += 32;
        for (; 0 === (b.limbs[c >> 5] >> (31 & c) & 1);) c++;
        b = b.slice(c);
        for (var d = new zb(this), e = this.subtract(Cd), f = new kb(this), g = this.limbs.length - 1; 0 === f.limbs[g];) g--;
        for (; --a >= 0;) {
            for (fb(f.limbs), f.limbs[0] < 2 && (f.limbs[0] += 2); f.compare(e) >= 0;) f.limbs[g] >>>= 1;
            var h = d.power(f, b);
            if (0 !== h.compare(Cd) && 0 !== h.compare(e)) {
                for (var i = c; --i > 0;) {
                    if (h = h.square().divide(d).remainder, 0 === h.compare(Cd)) return !1;
                    if (0 === h.compare(e)) break
                }
                if (0 === i) return !1
            }
        }
        return !0
    }

    function Fb(a) {
        a = a || 80;
        var b = this.limbs,
            c = 0;
        if (0 === (1 & b[0])) return !1;
        if (1 >= a) return !0;
        var d = 0,
            e = 0,
            f = 0;
        for (c = 0; c < b.length; c++) {
            for (var g = b[c]; g;) d += 3 & g, g >>>= 2;
            for (var h = b[c]; h;) e += 3 & h, h >>>= 2, e -= 3 & h, h >>>= 2;
            for (var i = b[c]; i;) f += 15 & i, i >>>= 4, f -= 15 & i, i >>>= 4
        }
        return d % 3 && e % 5 && f % 17 ? 2 >= a ? !0 : Eb.call(this, a >>> 1) : !1
    }

    function Gb(a) {
        if (Ed.length >= a) return Ed.slice(0, a);
        for (var b = Ed[Ed.length - 1] + 2; Ed.length < a; b += 2) {
            for (var c = 0, d = Ed[c]; b >= d * d && b % d != 0; d = Ed[++c]);
            d * d > b && Ed.push(b)
        }
        return Ed
    }

    function Hb(a, c) {
        var d = a + 31 >> 5,
            e = new kb({
                sign: 1,
                bitLength: a,
                limbs: d
            }),
            f = e.limbs,
            g = 1e4;
        512 >= a && (g = 2200), 256 >= a && (g = 600);
        var h = Gb(g),
            i = new Uint32Array(g),
            j = a * b.Math.LN2 | 0,
            k = 27;
        for (a >= 250 && (k = 12), a >= 450 && (k = 6), a >= 850 && (k = 3), a >= 1300 && (k = 2);;) {
            fb(f), f[0] |= 1, f[d - 1] |= 1 << (a - 1 & 31), 31 & a && (f[d - 1] &= l(a + 1 & 31) - 1), i[0] = 1;
            for (var m = 1; g > m; m++) i[m] = e.divide(h[m]).remainder.valueOf();
            a: for (var n = 0; j > n; n += 2, f[0] += 2) {
                for (var m = 1; g > m; m++)
                    if ((i[m] + n) % h[m] === 0) continue a;
                if (("function" != typeof c || c(e)) && Eb.call(e, k)) return e
            }
        }
    }

    function Ib(a) {
        a = a || {}, this.key = null, this.result = null, this.reset(a)
    }

    function Jb(a) {
        a = a || {}, this.result = null;
        var b = a.key;
        if (void 0 !== b) {
            if (!(b instanceof Array)) throw new TypeError("unexpected key type");
            var c = b.length;
            if (2 !== c && 3 !== c && 8 !== c) throw new SyntaxError("unexpected key type");
            var d = [];
            d[0] = new zb(b[0]), d[1] = new kb(b[1]), c > 2 && (d[2] = new kb(b[2])), c > 3 && (d[3] = new zb(b[3]), d[4] = new zb(b[4]), d[5] = new kb(b[5]), d[6] = new kb(b[6]), d[7] = new kb(b[7])), this.key = d
        }
        return this
    }

    function Kb(a) {
        if (!this.key) throw new c("no key is associated with the instance");
        n(a) && (a = f(a)), o(a) && (a = new Uint8Array(a));
        var b;
        if (p(a)) b = new kb(a);
        else {
            if (!ib(a)) throw new TypeError("unexpected data type");
            b = a
        } if (this.key[0].compare(b) <= 0) throw new RangeError("data too large");
        var d = this.key[0],
            e = this.key[1],
            g = d.power(b, e).toBytes(),
            h = d.bitLength + 7 >> 3;
        if (g.length < h) {
            var i = new Uint8Array(h);
            i.set(g, h - g.length), g = i
        }
        return this.result = g, this
    }

    function Lb(a) {
        if (!this.key) throw new c("no key is associated with the instance");
        if (this.key.length < 3) throw new c("key isn't suitable for decription");
        n(a) && (a = f(a)), o(a) && (a = new Uint8Array(a));
        var b;
        if (p(a)) b = new kb(a);
        else {
            if (!ib(a)) throw new TypeError("unexpected data type");
            b = a
        } if (this.key[0].compare(b) <= 0) throw new RangeError("data too large");
        var d;
        if (this.key.length > 3) {
            for (var e = this.key[0], g = this.key[3], h = this.key[4], i = this.key[5], j = this.key[6], k = this.key[7], l = g.power(b, i), m = h.power(b, j), q = l.subtract(m); q.sign < 0;) q = q.add(g);
            var r = g.reduce(k.multiply(q));
            d = r.multiply(h).add(m).clamp(e.bitLength).toBytes()
        } else {
            var e = this.key[0],
                s = this.key[2];
            d = e.power(b, s).toBytes()
        }
        var t = e.bitLength + 7 >> 3;
        if (d.length < t) {
            var u = new Uint8Array(t);
            u.set(d, t - d.length), d = u
        }
        return this.result = d, this
    }

    function Mb(a, b) {
        if (a = a || 2048, b = b || 65537, 512 > a) throw new d("bit length is too small");
        if (n(b) && (b = f(b)), o(b) && (b = new Uint8Array(b)), !(p(b) || m(b) || ib(b))) throw new TypeError("unexpected exponent type");
        if (b = new kb(b), 0 === (1 & b.limbs[0])) throw new d("exponent must be an odd number");
        var c, b, e, g, h, i, j, k, l, q;
        g = Hb(a >> 1, function(a) {
            return i = new kb(a), i.limbs[0] -= 1, 1 == yb(i, b).gcd.valueOf()
        }), h = Hb(a - (a >> 1), function(d) {
            return c = new zb(g.multiply(d)), c.limbs[(a + 31 >> 5) - 1] >>> (a - 1 & 31) ? (j = new kb(d), j.limbs[0] -= 1, 1 == yb(j, b).gcd.valueOf()) : !1
        }), e = new zb(i.multiply(j)).inverse(b), k = e.divide(i).remainder, l = e.divide(j).remainder, g = new zb(g), h = new zb(h);
        var q = g.inverse(h);
        return [c, b, e, g, h, k, l, q]
    }

    function Nb(a) {
        if (a = a || {}, !a.hash) throw new SyntaxError("option 'hash' is required");
        if (!a.hash.HASH_SIZE) throw new SyntaxError("option 'hash' supplied doesn't seem to be a valid hash function");
        this.hash = a.hash, this.label = null, this.reset(a)
    }

    function Ob(a) {
        a = a || {};
        var b = a.label;
        if (void 0 !== b) {
            if (o(b) || p(b)) b = new Uint8Array(b);
            else {
                if (!n(b)) throw new TypeError("unexpected label type");
                b = f(b)
            }
            this.label = b.length > 0 ? b : null
        } else this.label = null;
        Jb.call(this, a)
    }

    function Pb(a) {
        if (!this.key) throw new c("no key is associated with the instance");
        var b = Math.ceil(this.key[0].bitLength / 8),
            e = this.hash.HASH_SIZE,
            g = a.byteLength || a.length || 0,
            h = b - g - 2 * e - 2;
        if (g > b - 2 * this.hash.HASH_SIZE - 2) throw new d("data too large");
        var i = new Uint8Array(b),
            j = i.subarray(1, e + 1),
            k = i.subarray(e + 1);
        if (p(a)) k.set(a, e + h + 1);
        else if (o(a)) k.set(new Uint8Array(a), e + h + 1);
        else {
            if (!n(a)) throw new TypeError("unexpected data type");
            k.set(f(a), e + h + 1)
        }
        k.set(this.hash.reset().process(this.label || "").finish().result, 0), k[e + h] = 1, fb(j);
        for (var l = Rb.call(this, j, k.length), m = 0; m < k.length; m++) k[m] ^= l[m];
        for (var q = Rb.call(this, k, j.length), m = 0; m < j.length; m++) j[m] ^= q[m];
        return Kb.call(this, i), this
    }

    function Qb(a) {
        if (!this.key) throw new c("no key is associated with the instance");
        var b = Math.ceil(this.key[0].bitLength / 8),
            f = this.hash.HASH_SIZE,
            g = a.byteLength || a.length || 0;
        if (g !== b) throw new d("bad data");
        Lb.call(this, a);
        var h = this.result[0],
            i = this.result.subarray(1, f + 1),
            j = this.result.subarray(f + 1);
        if (0 !== h) throw new e("decryption failed");
        for (var k = Rb.call(this, j, i.length), l = 0; l < i.length; l++) i[l] ^= k[l];
        for (var m = Rb.call(this, i, j.length), l = 0; l < j.length; l++) j[l] ^= m[l];
        for (var n = this.hash.reset().process(this.label || "").finish().result, l = 0; f > l; l++)
            if (n[l] !== j[l]) throw new e("decryption failed");
        for (var o = f; o < j.length; o++) {
            var p = j[o];
            if (1 === p) break;

            if (0 !== p) throw new e("decryption failed")
        }
        if (o === j.length) throw new e("decryption failed");
        return this.result = j.subarray(o + 1), this
    }

    function Rb(a, b) {
        a = a || "", b = b || 0;
        for (var c = this.hash.HASH_SIZE, d = new Uint8Array(b), e = new Uint8Array(4), f = Math.ceil(b / c), g = 0; f > g; g++) {
            e[0] = g >>> 24, e[1] = g >>> 16 & 255, e[2] = g >>> 8 & 255, e[3] = 255 & g;
            var h = d.subarray(g * c),
                i = this.hash.reset().process(a).process(e).finish().result;
            i.length > h.length && (i = i.subarray(0, h.length)), h.set(i)
        }
        return d
    }

    function Sb(a) {
        if (a = a || {}, !a.hash) throw new SyntaxError("option 'hash' is required");
        if (!a.hash.HASH_SIZE) throw new SyntaxError("option 'hash' supplied doesn't seem to be a valid hash function");
        this.hash = a.hash, this.saltLength = 4, this.reset(a)
    }

    function Tb(a) {
        a = a || {}, Jb.call(this, a);
        var b = a.saltLength;
        if (void 0 !== b) {
            if (!m(b) || 0 > b) throw new TypeError("saltLength should be a non-negative number");
            if (null !== this.key && Math.ceil((this.key[0].bitLength - 1) / 8) < this.hash.HASH_SIZE + b + 2) throw new SyntaxError("saltLength is too large");
            this.saltLength = b
        } else this.saltLength = 4
    }

    function Ub(a) {
        if (!this.key) throw new c("no key is associated with the instance");
        var b = this.key[0].bitLength,
            d = this.hash.HASH_SIZE,
            e = Math.ceil((b - 1) / 8),
            f = this.saltLength,
            g = e - f - d - 2,
            h = new Uint8Array(e),
            i = h.subarray(e - d - 1, e - 1),
            j = h.subarray(0, e - d - 1),
            k = j.subarray(g + 1),
            l = new Uint8Array(8 + d + f),
            m = l.subarray(8, 8 + d),
            n = l.subarray(8 + d);
        m.set(this.hash.reset().process(a).finish().result), f > 0 && fb(n), j[g] = 1, k.set(n), i.set(this.hash.reset().process(l).finish().result);
        for (var o = Rb.call(this, i, j.length), p = 0; p < j.length; p++) j[p] ^= o[p];
        h[e - 1] = 188;
        var q = 8 * e - b + 1;
        return q % 8 && (h[0] &= 255 >>> q), Lb.call(this, h), this
    }

    function Vb(a, b) {
        if (!this.key) throw new c("no key is associated with the instance");
        var d = this.key[0].bitLength,
            f = this.hash.HASH_SIZE,
            g = Math.ceil((d - 1) / 8),
            h = this.saltLength,
            i = g - h - f - 2;
        Kb.call(this, a);
        var j = this.result;
        if (188 !== j[g - 1]) throw new e("bad signature");
        var k = j.subarray(g - f - 1, g - 1),
            l = j.subarray(0, g - f - 1),
            m = l.subarray(i + 1),
            n = 8 * g - d + 1;
        if (n % 8 && j[0] >>> 8 - n) throw new e("bad signature");
        for (var o = Rb.call(this, k, l.length), p = 0; p < l.length; p++) l[p] ^= o[p];
        n % 8 && (j[0] &= 255 >>> n);
        for (var p = 0; i > p; p++)
            if (0 !== l[p]) throw new e("bad signature");
        if (1 !== l[i]) throw new e("bad signature");
        var q = new Uint8Array(8 + f + h),
            r = q.subarray(8, 8 + f),
            s = q.subarray(8 + f);
        r.set(this.hash.reset().process(b).finish().result), s.set(m);
        for (var t = this.hash.reset().process(q).finish().result, p = 0; f > p; p++)
            if (k[p] !== t[p]) throw new e("bad signature");
        return this
    }

    function Wb(a) {
        if (a = a || {}, !a.hash) throw new SyntaxError("option 'hash' is required");
        if (!a.hash.HASH_SIZE) throw new SyntaxError("option 'hash' supplied doesn't seem to be a valid hash function");
        this.hash = a.hash, this.reset(a)
    }

    function Xb(a) {
        a = a || {}, Jb.call(this, a)
    }

    function Yb(a) {
        var b = a.constructor.NAME,
            c = Gd[b];
        if (!c) throw new Error("Cannot get hash prefix for hash algorithm '" + b + "'");
        return c
    }

    function Zb(a) {
        if (!this.key) throw new c("no key is associated with the instance");
        var b = Yb(this.hash),
            d = this.hash.HASH_SIZE,
            e = b.length + d,
            f = this.key[0].bitLength + 7 >> 3;
        if (e + 11 > f) throw new Error("Message too long");
        var g = new Uint8Array(d);
        g.set(this.hash.reset().process(a).finish().result);
        var h = new Uint8Array(f),
            i = 0;
        for (h[i++] = 0, h[i++] = 1, i; f - e - 1 > i; i++) h[i] = 255;
        return h[i++] = 0, h.set(b, i), h.set(g, h.length - d), Lb.call(this, h), this
    }

    function $b(a, b) {
        if (!this.key) throw new c("no key is associated with the instance");
        var d = Yb(this.hash),
            f = this.hash.HASH_SIZE,
            g = d.length + f,
            h = this.key[0].bitLength + 7 >> 3;
        if (g + 11 > h) throw new e("Bad signature");
        Kb.call(this, a);
        var i = new Uint8Array(f);
        i.set(this.hash.reset().process(b).finish().result);
        var j = 1,
            k = this.result,
            l = 0;
        for (j &= 0 === k[l++], j &= 1 === k[l++], l; h - g - 1 > l; l++) j &= 255 === k[l];
        j &= 0 === k[l++];
        var m = 0,
            n = l + d.length;
        for (l; n > l; l++) j &= k[l] === d[m++];
        for (m = 0, n = l + i.length, l; n > l; l++) j &= k[l] === i[m++];
        if (!j) throw new e("Bad signature");
        return this
    }

    function _b(a, b) {
        if (void 0 === a) throw new SyntaxError("bitlen required");
        if (void 0 === b) throw new SyntaxError("e required");
        for (var c = Mb(a, b), d = 0; d < c.length; d++) ib(c[d]) && (c[d] = c[d].toBytes());
        return c
    }

    function ac(a, b, c) {
        if (void 0 === a) throw new SyntaxError("data required");
        if (void 0 === b) throw new SyntaxError("key required");
        return new Nb({
            hash: ga(),
            key: b,
            label: c
        }).encrypt(a).result
    }

    function bc(a, b, c) {
        if (void 0 === a) throw new SyntaxError("data required");
        if (void 0 === b) throw new SyntaxError("key required");
        return new Nb({
            hash: ga(),
            key: b,
            label: c
        }).decrypt(a).result
    }

    function cc(a, b, c) {
        if (void 0 === a) throw new SyntaxError("data required");
        if (void 0 === b) throw new SyntaxError("key required");
        return new Nb({
            hash: ma(),
            key: b,
            label: c
        }).encrypt(a).result
    }

    function dc(a, b, c) {
        if (void 0 === a) throw new SyntaxError("data required");
        if (void 0 === b) throw new SyntaxError("key required");
        return new Nb({
            hash: ma(),
            key: b,
            label: c
        }).decrypt(a).result
    }

    function ec(a, b, c) {
        if (void 0 === a) throw new SyntaxError("data required");
        if (void 0 === b) throw new SyntaxError("key required");
        return new Nb({
            hash: sa(),
            key: b,
            label: c
        }).encrypt(a).result
    }

    function fc(a, b, c) {
        if (void 0 === a) throw new SyntaxError("data required");
        if (void 0 === b) throw new SyntaxError("key required");
        return new Nb({
            hash: sa(),
            key: b,
            label: c
        }).decrypt(a).result
    }

    function gc(a, b, c) {
        if (void 0 === a) throw new SyntaxError("data required");
        if (void 0 === b) throw new SyntaxError("key required");
        return new Sb({
            hash: ga(),
            key: b,
            saltLength: c
        }).sign(a).result
    }

    function hc(a, b, c, d) {
        if (void 0 === a) throw new SyntaxError("signature required");
        if (void 0 === b) throw new SyntaxError("data required");
        if (void 0 === c) throw new SyntaxError("key required");
        try {
            return new Sb({
                hash: ga(),
                key: c,
                saltLength: d
            }).verify(a, b), !0
        } catch (a) {
            if (!(a instanceof e)) throw a
        }
        return !1
    }

    function ic(a, b, c) {
        if (void 0 === a) throw new SyntaxError("data required");
        if (void 0 === b) throw new SyntaxError("key required");
        return new Sb({
            hash: ma(),
            key: b,
            saltLength: c
        }).sign(a).result
    }

    function jc(a, b, c, d) {
        if (void 0 === a) throw new SyntaxError("signature required");
        if (void 0 === b) throw new SyntaxError("data required");
        if (void 0 === c) throw new SyntaxError("key required");
        try {
            return new Sb({
                hash: ma(),
                key: c,
                saltLength: d
            }).verify(a, b), !0
        } catch (a) {
            if (!(a instanceof e)) throw a
        }
        return !1
    }

    function kc(a, b, c) {
        if (void 0 === a) throw new SyntaxError("data required");
        if (void 0 === b) throw new SyntaxError("key required");
        return new Sb({
            hash: sa(),
            key: b,
            saltLength: c
        }).sign(a).result
    }

    function lc(a, b, c, d) {
        if (void 0 === a) throw new SyntaxError("signature required");
        if (void 0 === b) throw new SyntaxError("data required");
        if (void 0 === c) throw new SyntaxError("key required");
        try {
            return new Sb({
                hash: sa(),
                key: c,
                saltLength: d
            }).verify(a, b), !0
        } catch (a) {
            if (!(a instanceof e)) throw a
        }
        return !1
    }

    function mc(a, b) {
        if (void 0 === a) throw new SyntaxError("data required");
        if (void 0 === b) throw new SyntaxError("key required");
        return new Wb({
            hash: ga(),
            key: b
        }).sign(a).result
    }

    function nc(a, b, c) {
        if (void 0 === a) throw new SyntaxError("signature required");
        if (void 0 === b) throw new SyntaxError("data required");
        if (void 0 === c) throw new SyntaxError("key required");
        try {
            return new Wb({
                hash: ga(),
                key: c
            }).verify(a, b), !0
        } catch (a) {
            if (!(a instanceof e)) throw a
        }
        return !1
    }

    function oc(a, b) {
        if (void 0 === a) throw new SyntaxError("data required");
        if (void 0 === b) throw new SyntaxError("key required");
        return new Wb({
            hash: ma(),
            key: b
        }).sign(a).result
    }

    function pc(a, b, c) {
        if (void 0 === a) throw new SyntaxError("signature required");
        if (void 0 === b) throw new SyntaxError("data required");
        if (void 0 === c) throw new SyntaxError("key required");
        try {
            return new Wb({
                hash: ma(),
                key: c
            }).verify(a, b), !0
        } catch (a) {
            if (!(a instanceof e)) throw a
        }
        return !1
    }

    function qc(a, b) {
        if (void 0 === a) throw new SyntaxError("data required");
        if (void 0 === b) throw new SyntaxError("key required");
        return new Wb({
            hash: sa(),
            key: b
        }).sign(a).result
    }

    function rc(a, b, c) {
        if (void 0 === a) throw new SyntaxError("signature required");
        if (void 0 === b) throw new SyntaxError("data required");
        if (void 0 === c) throw new SyntaxError("key required");
        try {
            return new Wb({
                hash: sa(),
                key: c
            }).verify(a, b), !0
        } catch (a) {
            if (!(a instanceof e)) throw a
        }
        return !1
    }
    c.prototype = Object.create(Error.prototype, {
        name: {
            value: "IllegalStateError"
        }
    }), d.prototype = Object.create(Error.prototype, {
        name: {
            value: "IllegalArgumentError"
        }
    }), e.prototype = Object.create(Error.prototype, {
        name: {
            value: "SecurityError"
        }
    });
    var sc = b.Float64Array || b.Float32Array,
        tc = b.console,
        uc = void 0 === b.location || !b.location.protocol.search(/https:|file:|chrome:|chrome-extension:/);
    uc || void 0 === tc || tc.warn("asmCrypto seems to be load from an insecure origin; this may cause to MitM-attack vulnerability. Consider using secure transport protocol."), a.string_to_bytes = f, a.hex_to_bytes = g, a.base64_to_bytes = h, a.bytes_to_string = i, a.bytes_to_hex = j, a.bytes_to_base64 = k, b.IllegalStateError = c, b.IllegalArgumentError = d, b.SecurityError = e;
    var vc = function() {
            "use strict";

            function a() {
                e = [], f = [];
                var a, b, c = 1;
                for (a = 0; 255 > a; a++) e[a] = c, b = 128 & c, c <<= 1, c &= 255, 128 === b && (c ^= 27), c ^= e[a], f[e[a]] = a;
                e[255] = e[0], f[0] = 0, k = !0
            }

            function b(a, b) {
                var c = e[(f[a] + f[b]) % 255];
                return (0 === a || 0 === b) && (c = 0), c
            }

            function c(a) {
                var b = e[255 - f[a]];
                return 0 === a && (b = 0), b
            }

            function d() {
                function d(a) {
                    var b, d, e;
                    for (d = e = c(a), b = 0; 4 > b; b++) d = 255 & (d << 1 | d >>> 7), e ^= d;
                    return e ^= 99
                }
                k || a(), g = [], h = [], i = [
                    [],
                    [],
                    [],
                    []
                ], j = [
                    [],
                    [],
                    [],
                    []
                ];
                for (var e = 0; 256 > e; e++) {
                    var f = d(e);
                    g[e] = f, h[f] = e, i[0][e] = b(2, f) << 24 | f << 16 | f << 8 | b(3, f), j[0][f] = b(14, e) << 24 | b(9, e) << 16 | b(13, e) << 8 | b(11, e);
                    for (var l = 1; 4 > l; l++) i[l][e] = i[l - 1][e] >>> 8 | i[l - 1][e] << 24, j[l][f] = j[l - 1][f] >>> 8 | j[l - 1][f] << 24
                }
            }
            var e, f, g, h, i, j, k = !1,
                l = !1,
                m = function(a, b, c) {
                    function e(a, b, c, d, e, h, i, k, l) {
                        var m = f.subarray(0, 60),
                            o = f.subarray(256, 316);
                        m.set([b, c, d, e, h, i, k, l]);
                        for (var p = a, q = 1; 4 * a + 28 > p; p++) {
                            var r = m[p - 1];
                            (p % a === 0 || 8 === a && p % a === 4) && (r = g[r >>> 24] << 24 ^ g[r >>> 16 & 255] << 16 ^ g[r >>> 8 & 255] << 8 ^ g[255 & r]), p % a === 0 && (r = r << 8 ^ r >>> 24 ^ q << 24, q = q << 1 ^ (128 & q ? 27 : 0)), m[p] = m[p - a] ^ r
                        }
                        for (var s = 0; p > s; s += 4)
                            for (var t = 0; 4 > t; t++) {
                                var r = m[p - (4 + s) + (4 - t) % 4];
                                4 > s || s >= p - 4 ? o[s + t] = r : o[s + t] = j[0][g[r >>> 24]] ^ j[1][g[r >>> 16 & 255]] ^ j[2][g[r >>> 8 & 255]] ^ j[3][g[255 & r]]
                            }
                        n.set_rounds(a + 5)
                    }
                    l || d();
                    var f = new Uint32Array(c);
                    f.set(g, 512), f.set(h, 768);
                    for (var k = 0; 4 > k; k++) f.set(i[k], 4096 + 1024 * k >> 2), f.set(j[k], 8192 + 1024 * k >> 2);
                    var m = {
                            Uint8Array: Uint8Array,
                            Uint32Array: Uint32Array
                        },
                        n = function(a, b, c) {
                            "use asm";
                            var d = 0,
                                e = 0,
                                f = 0,
                                g = 0,
                                h = 0,
                                i = 0,
                                j = 0,
                                k = 0,
                                l = 0,
                                m = 0,
                                n = 0,
                                o = 0,
                                p = 0,
                                q = 0,
                                r = 0,
                                s = 0,
                                t = 0,
                                u = 0,
                                v = 0,
                                w = 0,
                                x = 0;
                            var y = new a.Uint32Array(c),
                                z = new a.Uint8Array(c);

                            function A(X, Y, Z, $, _, aa, ba, ca) {
                                X = X | 0;
                                Y = Y | 0;
                                Z = Z | 0;
                                $ = $ | 0;
                                _ = _ | 0;
                                aa = aa | 0;
                                ba = ba | 0;
                                ca = ca | 0;
                                var da = 0,
                                    ea = 0,
                                    fa = 0,
                                    ga = 0,
                                    ha = 0,
                                    ia = 0,
                                    ja = 0,
                                    ka = 0;
                                da = Z | 1024, ea = Z | 2048, fa = Z | 3072;
                                _ = _ ^ y[(X | 0) >> 2], aa = aa ^ y[(X | 4) >> 2], ba = ba ^ y[(X | 8) >> 2], ca = ca ^ y[(X | 12) >> 2];
                                for (ka = 16;
                                    (ka | 0) <= $ << 4; ka = ka + 16 | 0) {
                                    ga = y[(Z | _ >> 22 & 1020) >> 2] ^ y[(da | aa >> 14 & 1020) >> 2] ^ y[(ea | ba >> 6 & 1020) >> 2] ^ y[(fa | ca << 2 & 1020) >> 2] ^ y[(X | ka | 0) >> 2], ha = y[(Z | aa >> 22 & 1020) >> 2] ^ y[(da | ba >> 14 & 1020) >> 2] ^ y[(ea | ca >> 6 & 1020) >> 2] ^ y[(fa | _ << 2 & 1020) >> 2] ^ y[(X | ka | 4) >> 2], ia = y[(Z | ba >> 22 & 1020) >> 2] ^ y[(da | ca >> 14 & 1020) >> 2] ^ y[(ea | _ >> 6 & 1020) >> 2] ^ y[(fa | aa << 2 & 1020) >> 2] ^ y[(X | ka | 8) >> 2], ja = y[(Z | ca >> 22 & 1020) >> 2] ^ y[(da | _ >> 14 & 1020) >> 2] ^ y[(ea | aa >> 6 & 1020) >> 2] ^ y[(fa | ba << 2 & 1020) >> 2] ^ y[(X | ka | 12) >> 2];
                                    _ = ga, aa = ha, ba = ia, ca = ja
                                }
                                d = y[(Y | _ >> 22 & 1020) >> 2] << 24 ^ y[(Y | aa >> 14 & 1020) >> 2] << 16 ^ y[(Y | ba >> 6 & 1020) >> 2] << 8 ^ y[(Y | ca << 2 & 1020) >> 2] ^ y[(X | ka | 0) >> 2], e = y[(Y | aa >> 22 & 1020) >> 2] << 24 ^ y[(Y | ba >> 14 & 1020) >> 2] << 16 ^ y[(Y | ca >> 6 & 1020) >> 2] << 8 ^ y[(Y | _ << 2 & 1020) >> 2] ^ y[(X | ka | 4) >> 2], f = y[(Y | ba >> 22 & 1020) >> 2] << 24 ^ y[(Y | ca >> 14 & 1020) >> 2] << 16 ^ y[(Y | _ >> 6 & 1020) >> 2] << 8 ^ y[(Y | aa << 2 & 1020) >> 2] ^ y[(X | ka | 8) >> 2], g = y[(Y | ca >> 22 & 1020) >> 2] << 24 ^ y[(Y | _ >> 14 & 1020) >> 2] << 16 ^ y[(Y | aa >> 6 & 1020) >> 2] << 8 ^ y[(Y | ba << 2 & 1020) >> 2] ^ y[(X | ka | 12) >> 2]
                            }

                            function B(X, Y, Z, $) {
                                X = X | 0;
                                Y = Y | 0;
                                Z = Z | 0;
                                $ = $ | 0;
                                A(0, 2048, 4096, x, X, Y, Z, $)
                            }

                            function C(X, Y, Z, $) {
                                X = X | 0;
                                Y = Y | 0;
                                Z = Z | 0;
                                $ = $ | 0;
                                var _ = 0;
                                A(1024, 3072, 8192, x, X, $, Z, Y);
                                _ = e, e = g, g = _
                            }

                            function D(X, Y, Z, $) {
                                X = X | 0;
                                Y = Y | 0;
                                Z = Z | 0;
                                $ = $ | 0;
                                A(0, 2048, 4096, x, h ^ X, i ^ Y, j ^ Z, k ^ $);
                                h = d, i = e, j = f, k = g
                            }

                            function E(X, Y, Z, $) {
                                X = X | 0;
                                Y = Y | 0;
                                Z = Z | 0;
                                $ = $ | 0;
                                var _ = 0;
                                A(1024, 3072, 8192, x, X, $, Z, Y);
                                _ = e, e = g, g = _;
                                d = d ^ h, e = e ^ i, f = f ^ j, g = g ^ k;
                                h = X, i = Y, j = Z, k = $
                            }

                            function F(X, Y, Z, $) {
                                X = X | 0;
                                Y = Y | 0;
                                Z = Z | 0;
                                $ = $ | 0;
                                A(0, 2048, 4096, x, h, i, j, k);
                                h = d = d ^ X, i = e = e ^ Y, j = f = f ^ Z, k = g = g ^ $
                            }

                            function G(X, Y, Z, $) {
                                X = X | 0;
                                Y = Y | 0;
                                Z = Z | 0;
                                $ = $ | 0;
                                A(0, 2048, 4096, x, h, i, j, k);
                                d = d ^ X, e = e ^ Y, f = f ^ Z, g = g ^ $;
                                h = X, i = Y, j = Z, k = $
                            }

                            function H(X, Y, Z, $) {
                                X = X | 0;
                                Y = Y | 0;
                                Z = Z | 0;
                                $ = $ | 0;
                                A(0, 2048, 4096, x, h, i, j, k);
                                h = d, i = e, j = f, k = g;
                                d = d ^ X, e = e ^ Y, f = f ^ Z, g = g ^ $
                            }

                            function I(X, Y, Z, $) {
                                X = X | 0;
                                Y = Y | 0;
                                Z = Z | 0;
                                $ = $ | 0;
                                A(0, 2048, 4096, x, l, m, n, o);
                                o = ~s & o | s & o + 1, n = ~r & n | r & n + ((o | 0) == 0), m = ~q & m | q & m + ((n | 0) == 0), l = ~p & l | p & l + ((m | 0) == 0);
                                d = d ^ X, e = e ^ Y, f = f ^ Z, g = g ^ $
                            }

                            function J(X, Y, Z, $) {
                                X = X | 0;
                                Y = Y | 0;
                                Z = Z | 0;
                                $ = $ | 0;
                                var _ = 0,
                                    aa = 0,
                                    ba = 0,
                                    ca = 0,
                                    da = 0,
                                    ea = 0,
                                    fa = 0,
                                    ga = 0,
                                    ha = 0,
                                    ia = 0;
                                X = X ^ h, Y = Y ^ i, Z = Z ^ j, $ = $ ^ k;
                                _ = t | 0, aa = u | 0, ba = v | 0, ca = w | 0;
                                for (;
                                    (ha | 0) < 128; ha = ha + 1 | 0) {
                                    if (_ >>> 31) {
                                        da = da ^ X, ea = ea ^ Y, fa = fa ^ Z, ga = ga ^ $
                                    }
                                    _ = _ << 1 | aa >>> 31, aa = aa << 1 | ba >>> 31, ba = ba << 1 | ca >>> 31, ca = ca << 1;
                                    ia = $ & 1;
                                    $ = $ >>> 1 | Z << 31, Z = Z >>> 1 | Y << 31, Y = Y >>> 1 | X << 31, X = X >>> 1;
                                    if (ia) X = X ^ 3774873600
                                }
                                h = da, i = ea, j = fa, k = ga
                            }

                            function K(X) {
                                X = X | 0;
                                x = X
                            }

                            function L(X, Y, Z, $) {
                                X = X | 0;
                                Y = Y | 0;
                                Z = Z | 0;
                                $ = $ | 0;
                                d = X, e = Y, f = Z, g = $
                            }

                            function M(X, Y, Z, $) {
                                X = X | 0;
                                Y = Y | 0;
                                Z = Z | 0;
                                $ = $ | 0;
                                h = X, i = Y, j = Z, k = $
                            }

                            function N(X, Y, Z, $) {
                                X = X | 0;
                                Y = Y | 0;
                                Z = Z | 0;
                                $ = $ | 0;
                                l = X, m = Y, n = Z, o = $
                            }

                            function O(X, Y, Z, $) {
                                X = X | 0;
                                Y = Y | 0;
                                Z = Z | 0;
                                $ = $ | 0;
                                p = X, q = Y, r = Z, s = $
                            }

                            function P(X, Y, Z, $) {
                                X = X | 0;
                                Y = Y | 0;
                                Z = Z | 0;
                                $ = $ | 0;
                                o = ~s & o | s & $, n = ~r & n | r & Z, m = ~q & m | q & Y, l = ~p & l | p & X
                            }

                            function Q(X) {
                                X = X | 0;
                                if (X & 15) return -1;
                                z[X | 0] = d >>> 24, z[X | 1] = d >>> 16 & 255, z[X | 2] = d >>> 8 & 255, z[X | 3] = d & 255, z[X | 4] = e >>> 24, z[X | 5] = e >>> 16 & 255, z[X | 6] = e >>> 8 & 255, z[X | 7] = e & 255, z[X | 8] = f >>> 24, z[X | 9] = f >>> 16 & 255, z[X | 10] = f >>> 8 & 255, z[X | 11] = f & 255, z[X | 12] = g >>> 24, z[X | 13] = g >>> 16 & 255, z[X | 14] = g >>> 8 & 255, z[X | 15] = g & 255;
                                return 16
                            }

                            function R(X) {
                                X = X | 0;
                                if (X & 15) return -1;
                                z[X | 0] = h >>> 24, z[X | 1] = h >>> 16 & 255, z[X | 2] = h >>> 8 & 255, z[X | 3] = h & 255, z[X | 4] = i >>> 24, z[X | 5] = i >>> 16 & 255, z[X | 6] = i >>> 8 & 255, z[X | 7] = i & 255, z[X | 8] = j >>> 24, z[X | 9] = j >>> 16 & 255, z[X | 10] = j >>> 8 & 255, z[X | 11] = j & 255, z[X | 12] = k >>> 24, z[X | 13] = k >>> 16 & 255, z[X | 14] = k >>> 8 & 255, z[X | 15] = k & 255;
                                return 16
                            }

                            function S() {
                                B(0, 0, 0, 0);
                                t = d, u = e, v = f, w = g
                            }

                            function T(X, Y, Z) {
                                X = X | 0;
                                Y = Y | 0;
                                Z = Z | 0;
                                var $ = 0;
                                if (Y & 15) return -1;
                                while ((Z | 0) >= 16) {
                                    V[X & 7](z[Y | 0] << 24 | z[Y | 1] << 16 | z[Y | 2] << 8 | z[Y | 3], z[Y | 4] << 24 | z[Y | 5] << 16 | z[Y | 6] << 8 | z[Y | 7], z[Y | 8] << 24 | z[Y | 9] << 16 | z[Y | 10] << 8 | z[Y | 11], z[Y | 12] << 24 | z[Y | 13] << 16 | z[Y | 14] << 8 | z[Y | 15]);
                                    z[Y | 0] = d >>> 24, z[Y | 1] = d >>> 16 & 255, z[Y | 2] = d >>> 8 & 255, z[Y | 3] = d & 255, z[Y | 4] = e >>> 24, z[Y | 5] = e >>> 16 & 255, z[Y | 6] = e >>> 8 & 255, z[Y | 7] = e & 255, z[Y | 8] = f >>> 24, z[Y | 9] = f >>> 16 & 255, z[Y | 10] = f >>> 8 & 255, z[Y | 11] = f & 255, z[Y | 12] = g >>> 24, z[Y | 13] = g >>> 16 & 255, z[Y | 14] = g >>> 8 & 255, z[Y | 15] = g & 255;
                                    $ = $ + 16 | 0, Y = Y + 16 | 0, Z = Z - 16 | 0
                                }
                                return $ | 0
                            }

                            function U(X, Y, Z) {
                                X = X | 0;
                                Y = Y | 0;
                                Z = Z | 0;
                                var $ = 0;
                                if (Y & 15) return -1;
                                while ((Z | 0) >= 16) {
                                    W[X & 1](z[Y | 0] << 24 | z[Y | 1] << 16 | z[Y | 2] << 8 | z[Y | 3], z[Y | 4] << 24 | z[Y | 5] << 16 | z[Y | 6] << 8 | z[Y | 7], z[Y | 8] << 24 | z[Y | 9] << 16 | z[Y | 10] << 8 | z[Y | 11], z[Y | 12] << 24 | z[Y | 13] << 16 | z[Y | 14] << 8 | z[Y | 15]);
                                    $ = $ + 16 | 0, Y = Y + 16 | 0, Z = Z - 16 | 0
                                }
                                return $ | 0
                            }
                            var V = [B, C, D, E, F, G, H, I];
                            var W = [D, J];
                            return {
                                set_rounds: K,
                                set_state: L,
                                set_iv: M,
                                set_nonce: N,
                                set_mask: O,
                                set_counter: P,
                                get_state: Q,
                                get_iv: R,
                                gcm_init: S,
                                cipher: T,
                                mac: U
                            }
                        }(m, b, c);
                    return n.set_key = e, n
                };
            return m.ENC = {
                ECB: 0,
                CBC: 2,
                CFB: 4,
                OFB: 6,
                CTR: 7
            }, m.DEC = {
                ECB: 1,
                CBC: 3,
                CFB: 5,
                OFB: 6,
                CTR: 7
            }, m.MAC = {
                CBC: 0,
                GCM: 1
            }, m.HEAP_DATA = 16384, m
        }(),
        wc = C.prototype;
    wc.BLOCK_SIZE = 16, wc.reset = x, wc.encrypt = z, wc.decrypt = B;
    var xc = D.prototype;
    xc.BLOCK_SIZE = 16, xc.reset = x, xc.process = y, xc.finish = z;
    var yc = E.prototype;
    yc.BLOCK_SIZE = 16, yc.reset = x, yc.process = A, yc.finish = B;
    var zc = F.prototype;
    zc.BLOCK_SIZE = 16, zc.reset = x, zc.encrypt = z, zc.decrypt = B;
    var Ac = G.prototype;
    Ac.BLOCK_SIZE = 16, Ac.reset = x, Ac.process = y, Ac.finish = z;
    var Bc = H.prototype;
    Bc.BLOCK_SIZE = 16, Bc.reset = x, Bc.process = A, Bc.finish = B;
    var Cc = I.prototype;
    Cc.BLOCK_SIZE = 16, Cc.reset = L, Cc.encrypt = z, Cc.decrypt = z;
    var Dc = J.prototype;
    Dc.BLOCK_SIZE = 16, Dc.reset = L, Dc.process = y, Dc.finish = z;
    var Ec = 68719476704,
        Fc = N.prototype;
    Fc.BLOCK_SIZE = 16, Fc.reset = Q, Fc.encrypt = T, Fc.decrypt = W;
    var Gc = O.prototype;
    Gc.BLOCK_SIZE = 16, Gc.reset = Q, Gc.process = R, Gc.finish = S;
    var Hc = P.prototype;
    Hc.BLOCK_SIZE = 16, Hc.reset = Q, Hc.process = U, Hc.finish = V;
    var Ic = new Uint8Array(1048576),
        Jc = vc(b, null, Ic.buffer);
    a.AES_ECB = C, a.AES_ECB.encrypt = X, a.AES_ECB.decrypt = Y, a.AES_ECB.Encrypt = D, a.AES_ECB.Decrypt = E, a.AES_CBC = F, a.AES_CBC.encrypt = Z, a.AES_CBC.decrypt = $, a.AES_CBC.Encrypt = G, a.AES_CBC.Decrypt = H, a.AES_GCM = N, a.AES_GCM.encrypt = _, a.AES_GCM.decrypt = aa, a.AES_GCM.Encrypt = O, a.AES_GCM.Decrypt = P;
    var Kc = 64,
        Lc = 20;
    fa.BLOCK_SIZE = Kc, fa.NAME = "sha1", fa.HASH_SIZE = Lc;
    var Mc = fa.prototype;
    Mc.reset = ba, Mc.process = ca, Mc.finish = da;
    var Nc = null;
    fa.bytes = ha, fa.hex = ia, fa.base64 = ja, a.SHA1 = fa;
    var Oc = 64,
        Pc = 32;
    la.BLOCK_SIZE = Oc, la.HASH_SIZE = Pc, la.NAME = "sha256";
    var Qc = la.prototype;
    Qc.reset = ba, Qc.process = ca, Qc.finish = da;
    var Rc = null;
    la.bytes = na, la.hex = oa, la.base64 = pa, a.SHA256 = la;
    var Sc = 128,
        Tc = 64;
    ra.BLOCK_SIZE = Sc, ra.HASH_SIZE = Tc, ra.NAME = "sha512";
    var Uc = ra.prototype;
    Uc.reset = ba, Uc.process = ca, Uc.finish = da;
    var Vc = null;
    ra.bytes = ta, ra.hex = ua, ra.base64 = va, a.SHA512 = ra;
    var Wc = wa.prototype;
    Wc.reset = za, Wc.process = Aa, Wc.finish = Ba, Ca.BLOCK_SIZE = fa.BLOCK_SIZE, Ca.HMAC_SIZE = fa.HASH_SIZE;
    var Xc = Ca.prototype;
    Xc.reset = Da, Xc.process = Aa, Xc.finish = Ea;
    var Yc = null;
    Ga.BLOCK_SIZE = la.BLOCK_SIZE, Ga.HMAC_SIZE = la.HASH_SIZE;
    var Zc = Ga.prototype;
    Zc.reset = Ha, Zc.process = Aa, Zc.finish = Ia;
    var $c = null;
    a.HMAC = wa, Ca.bytes = Ka, Ca.hex = La, Ca.base64 = Ma, a.HMAC_SHA1 = Ca, Ga.bytes = Na, Ga.hex = Oa, Ga.base64 = Pa, a.HMAC_SHA256 = Ga;
    var _c = Qa.prototype;
    _c.reset = Ra, _c.generate = Sa;
    var ad = Ta.prototype;
    ad.reset = Ra, ad.generate = Ua;
    var bd = null,
        cd = Wa.prototype;
    cd.reset = Ra, cd.generate = Xa;
    var dd = null;
    a.PBKDF2 = a.PBKDF2_HMAC_SHA1 = {
        bytes: Za,
        hex: $a,
        base64: _a
    }, a.PBKDF2_HMAC_SHA256 = {
        bytes: ab,
        hex: bb,
        base64: cb
    };
    var ed, fd = function() {
            function a() {
                function a() {
                    b ^= d << 11, l = l + b | 0, d = d + f | 0, d ^= f >>> 2, m = m + d | 0, f = f + l | 0, f ^= l << 8, n = n + f | 0, l = l + m | 0, l ^= m >>> 16, o = o + l | 0, m = m + n | 0, m ^= n << 10, p = p + m | 0, n = n + o | 0, n ^= o >>> 4, b = b + n | 0, o = o + p | 0, o ^= p << 8, d = d + o | 0, p = p + b | 0, p ^= b >>> 9, f = f + p | 0, b = b + d | 0
                }
                var b, d, f, l, m, n, o, p;
                h = i = j = 0, b = d = f = l = m = n = o = p = 2654435769;
                for (var q = 0; 4 > q; q++) a();
                for (var q = 0; 256 > q; q += 8) b = b + g[0 | q] | 0, d = d + g[1 | q] | 0, f = f + g[2 | q] | 0, l = l + g[3 | q] | 0, m = m + g[4 | q] | 0, n = n + g[5 | q] | 0, o = o + g[6 | q] | 0, p = p + g[7 | q] | 0, a(), e.set([b, d, f, l, m, n, o, p], q);
                for (var q = 0; 256 > q; q += 8) b = b + e[0 | q] | 0, d = d + e[1 | q] | 0, f = f + e[2 | q] | 0, l = l + e[3 | q] | 0, m = m + e[4 | q] | 0, n = n + e[5 | q] | 0, o = o + e[6 | q] | 0, p = p + e[7 | q] | 0, a(), e.set([b, d, f, l, m, n, o, p], q);
                c(1), k = 256
            }

            function b(b) {
                var c, d, e, h, i;
                if (q(b)) b = new Uint8Array(b.buffer);
                else if (m(b)) h = new sc(1), h[0] = b, b = new Uint8Array(h.buffer);
                else if (n(b)) b = f(b);
                else {
                    if (!o(b)) throw new TypeError("bad seed type");
                    b = new Uint8Array(b)
                }
                for (i = b.length, d = 0; i > d; d += 1024) {
                    for (e = d, c = 0; 1024 > c && i > e; e = d | ++c) g[c >> 2] ^= b[e] << ((3 & c) << 3);
                    a()
                }
            }

            function c(a) {
                a = a || 1;
                for (var b, c, d; a--;)
                    for (j = j + 1 | 0, i = i + j | 0, b = 0; 256 > b; b += 4) h ^= h << 13, h = e[b + 128 & 255] + h | 0, c = e[0 | b], e[0 | b] = d = e[c >>> 2 & 255] + (h + i | 0) | 0, g[0 | b] = i = e[d >>> 10 & 255] + c | 0, h ^= h >>> 6, h = e[b + 129 & 255] + h | 0, c = e[1 | b], e[1 | b] = d = e[c >>> 2 & 255] + (h + i | 0) | 0, g[1 | b] = i = e[d >>> 10 & 255] + c | 0, h ^= h << 2, h = e[b + 130 & 255] + h | 0, c = e[2 | b], e[2 | b] = d = e[c >>> 2 & 255] + (h + i | 0) | 0, g[2 | b] = i = e[d >>> 10 & 255] + c | 0, h ^= h >>> 16, h = e[b + 131 & 255] + h | 0, c = e[3 | b], e[3 | b] = d = e[c >>> 2 & 255] + (h + i | 0) | 0, g[3 | b] = i = e[d >>> 10 & 255] + c | 0
            }

            function d() {
                return k-- || (c(1), k = 255), g[k]
            }
            var e = new Uint32Array(256),
                g = new Uint32Array(256),
                h = 0,
                i = 0,
                j = 0,
                k = 0;
            return {
                seed: b,
                prng: c,
                rand: d
            }
        }(),
        tc = b.console,
        gd = b.Date.now,
        hd = b.Math.random,
        id = b.performance,
        jd = b.crypto || b.msCrypto;
    void 0 !== jd && (ed = jd.getRandomValues);
    var kd, ld = fd.rand,
        md = fd.seed,
        nd = 0,
        od = !1,
        pd = !1,
        qd = 0,
        rd = 256,
        sd = !1,
        td = !1,
        ud = {};
    if (void 0 !== id) kd = function() {
        return 1e3 * id.now() | 0
    };
    else {
        var vd = 1e3 * gd() | 0;
        kd = function() {
            return 1e3 * gd() - vd | 0
        }
    }
    a.random = gb, a.random.seed = eb, Object.defineProperty(gb, "allowWeak", {
        get: function() {
            return sd
        },
        set: function(a) {
            sd = a
        }
    }), Object.defineProperty(gb, "skipSystemRNGWarning", {
        get: function() {
            return td
        },
        set: function(a) {
            td = a
        }
    }), a.getRandomValues = fb, a.getRandomValues.seed = eb, Object.defineProperty(fb, "allowWeak", {
        get: function() {
            return sd
        },
        set: function(a) {
            sd = a
        }
    }), Object.defineProperty(fb, "skipSystemRNGWarning", {
        get: function() {
            return td
        },
        set: function(a) {
            td = a
        }
    }), b.Math.random = gb, void 0 === b.crypto && (b.crypto = {}), b.crypto.getRandomValues = fb;
    var wd, xd = {
            Uint32Array: Uint32Array,
            Math: b.Math
        },
        yd = new Uint32Array(1048576);
    void 0 === xd.Math.imul ? (xd.Math.imul = jb, wd = hb(xd, null, yd.buffer), delete xd.Math.imul) : wd = hb(xd, null, yd.buffer);
    var zd = new Uint32Array(0),
        Ad = kb.prototype = new Number;
    Ad.toString = lb, Ad.toBytes = mb, Ad.valueOf = nb, Ad.clamp = ob, Ad.slice = pb, Ad.negate = qb, Ad.compare = rb, Ad.add = sb, Ad.subtract = tb, Ad.multiply = ub, Ad.square = vb, Ad.divide = wb;
    var Bd = new kb(0),
        Cd = new kb(1);
    Object.freeze(Bd), Object.freeze(Cd);
    var Dd = zb.prototype = new kb;
    Dd.reduce = Ab, Dd.inverse = Bb, Dd.power = Cb;
    var Ed = [2, 3];
    Ad.isProbablePrime = Fb, kb.randomProbablePrime = Hb, kb.ZERO = Bd, kb.ONE = Cd, kb.extGCD = yb, a.BigNumber = kb, a.Modulus = zb;
    var Fd = Ib.prototype;
    Fd.reset = Jb, Fd.encrypt = Kb, Fd.decrypt = Lb, Ib.generateKey = Mb;
    var Gd = {
            sha1: new Uint8Array([48, 33, 48, 9, 6, 5, 43, 14, 3, 2, 26, 5, 0, 4, 20]),
            sha256: new Uint8Array([48, 49, 48, 13, 6, 9, 96, 134, 72, 1, 101, 3, 4, 2, 1, 5, 0, 4, 32]),
            sha384: new Uint8Array([48, 65, 48, 13, 6, 9, 96, 134, 72, 1, 101, 3, 4, 2, 2, 5, 0, 4, 48]),
            sha512: new Uint8Array([48, 81, 48, 13, 6, 9, 96, 134, 72, 1, 101, 3, 4, 2, 3, 5, 0, 4, 64])
        },
        Hd = Nb.prototype;
    Hd.reset = Ob, Hd.encrypt = Pb, Hd.decrypt = Qb;
    var Id = Sb.prototype;
    Id.reset = Tb, Id.sign = Ub, Id.verify = Vb;
    var Jd = Wb.prototype;
    return Jd.reset = Xb, Jd.sign = Zb, Jd.verify = $b, a.RSA = {
        generateKey: _b
    }, a.RSA_OAEP = Nb, a.RSA_OAEP_SHA1 = {
        encrypt: ac,
        decrypt: bc
    }, a.RSA_OAEP = Nb, a.RSA_OAEP_SHA256 = {
        encrypt: cc,
        decrypt: dc
    }, a.RSA_OAEP = Nb, a.RSA_OAEP_SHA512 = {
        encrypt: ec,
        decrypt: fc
    }, a.RSA_PSS = Sb, a.RSA_PSS_SHA1 = {
        sign: gc,
        verify: hc
    }, a.RSA_PSS = Sb, a.RSA_PSS_SHA256 = {
        sign: ic,
        verify: jc
    }, a.RSA_PSS = Sb, a.RSA_PSS_SHA512 = {
        sign: kc,
        verify: lc
    }, a.RSA_PKCS1_v1_5 = Wb, a.RSA_PKCS1_v1_5_SHA1 = {
        sign: mc,
        verify: nc
    }, a.RSA_PKCS1_v1_5 = Wb, a.RSA_PKCS1_v1_5_SHA256 = {
        sign: oc,
        verify: pc
    }, a.RSA_PKCS1_v1_5 = Wb, a.RSA_PKCS1_v1_5_SHA512 = {
        sign: qc,
        verify: rc
    }, "function" == typeof define && define.amd ? define([], function() {
        return a
    }) : "object" == typeof module && module.exports ? module.exports = a : b.asmCrypto = a, a
}({}, this);  
/******************************************************/
/**************************************************_
          main_46688.js
**************************************************/
self = window = this
var liner = function(e) {
    var r = {};

    function t(n) {
        if (r[n])
            return r[n].exports;
        var o = r[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(o.exports, o, o.exports, t),
            o.l = !0,
            o.exports
    }
    window.__require = t;
    return t.m = e,
        t.c = r,
        t.d = function(e, r, n) {
            t.o(e, r) || Object.defineProperty(e, r, {
                enumerable: !0,
                get: n
            })
        },
        t.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }),
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
        },
        t.t = function(e, r) {
            if (1 & r && (e = t(e)),
                8 & r)
                return e;
            if (4 & r && "object" == typeof e && e && e.__esModule)
                return e;
            var n = Object.create(null);
            if (t.r(n),
                Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
                }),
                2 & r && "string" != typeof e)
                for (var o in e)
                    t.d(n, o, function(r) {
                            return e[r]
                        }
                        .bind(null, o));
            return n
        },
        t.n = function(e) {
            var r = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return t.d(r, "a", r),
                r
        },
        t.o = function(e, r) {
            return Object.prototype.hasOwnProperty.call(e, r)
        },
        t.p = "",
        t(t.s = 25)
}([
    function(e, r, t) {
        "use strict";
        t.d(r, "a", function() {
            return o
        });
        /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
        var n = function(e, r) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, r) {
                    e.__proto__ = r
                } || function(e, r) {
                    for (var t in r)
                        r.hasOwnProperty(t) && (e[t] = r[t])
                }
            )(e, r)
        };

        function o(e, r) {
            function t() {
                this.constructor = e
            }
            n(e, r),
                e.prototype = null === r ? Object.create(r) : (t.prototype = r.prototype,
                    new t)
        }
    },
    function(e, r, t) {
        "use strict";
        t.r(r),
            function(e) {
                t.d(r, "WebCryptoError", function() {
                        return o
                    }),
                    t.d(r, "AlgorithmError", function() {
                        return a
                    }),
                    t.d(r, "CryptoKeyError", function() {
                        return i
                    }),
                    t.d(r, "PrepareAlgorithm", function() {
                        return s
                    }),
                    t.d(r, "PrepareData", function() {
                        return c
                    }),
                    t.d(r, "BaseCrypto", function() {
                        return u
                    }),
                    t.d(r, "AlgorithmNames", function() {
                        return p
                    }),
                    t.d(r, "Base64Url", function() {
                        return f
                    }),
                    t.d(r, "SubtleCrypto", function() {
                        return F
                    }),
                    t.d(r, "Aes", function() {
                        return y
                    }),
                    t.d(r, "AesAlgorithmError", function() {
                        return m
                    }),
                    t.d(r, "AesWrapKey", function() {
                        return w
                    }),
                    t.d(r, "AesEncrypt", function() {
                        return A
                    }),
                    t.d(r, "AesECB", function() {
                        return g
                    }),
                    t.d(r, "AesCBC", function() {
                        return v
                    }),
                    t.d(r, "AesCTR", function() {
                        return C
                    }),
                    t.d(r, "AesGCM", function() {
                        return d
                    }),
                    t.d(r, "AesKW", function() {
                        return b
                    }),
                    t.d(r, "RsaKeyGenParamsError", function() {
                        return M
                    }),
                    t.d(r, "RsaHashedImportParamsError", function() {
                        return T
                    }),
                    t.d(r, "Rsa", function() {
                        return x
                    }),
                    t.d(r, "RsaSSA", function() {
                        return j
                    }),
                    t.d(r, "RsaPSSParamsError", function() {
                        return W
                    }),
                    t.d(r, "RsaPSS", function() {
                        return H
                    }),
                    t.d(r, "RsaOAEPParamsError", function() {
                        return I
                    }),
                    t.d(r, "RsaOAEP", function() {
                        return Y
                    }),
                    t.d(r, "EcKeyGenParamsError", function() {
                        return S
                    }),
                    t.d(r, "Ec", function() {
                        return L
                    }),
                    t.d(r, "EcAlgorithmError", function() {
                        return O
                    }),
                    t.d(r, "EdDSA", function() {
                        return K
                    }),
                    t.d(r, "EcDSA", function() {
                        return N
                    }),
                    t.d(r, "EcDH", function() {
                        return R
                    }),
                    t.d(r, "ShaAlgorithms", function() {
                        return P
                    }),
                    t.d(r, "Sha", function() {
                        return U
                    });
                var n = t(0);
                var o = function(e) {
                        function r(r) {
                            for (var t = [], n = 1; n < arguments.length; n++)
                                t[n - 1] = arguments[n];
                            var o = e.call(this) || this;
                            o.code = 0,
                                o.message = function(e) {
                                    for (var r = [], t = 1; t < arguments.length; t++)
                                        r[t - 1] = arguments[t];
                                    for (var n, o = e, a = /[^%](%\d+)/g, i = []; n = a.exec(o);)
                                        i.push({
                                            arg: n[1],
                                            index: n.index
                                        });
                                    for (var s = i.length - 1; s >= 0; s--) {
                                        var c = i[s],
                                            u = c.arg.substring(1),
                                            p = c.index + 1;
                                        o = o.substring(0, p) + arguments[+u] + o.substring(p + 1 + u.length)
                                    }
                                    return o = o.replace("%%", "%")
                                }
                                .apply(void 0, [r].concat(t));
                            var a = new Error(o.message);
                            return a.name = o.constructor.name,
                                o.stack = a.stack,
                                o
                        }
                        return Object(n.a)(r, e),
                            r.NOT_SUPPORTED = "Method is not supported",
                            r
                    }(Error),
                    a = function(e) {
                        function r() {
                            var r = null !== e && e.apply(this, arguments) || this;
                            return r.code = 1,
                                r
                        }
                        return Object(n.a)(r, e),
                            r.PARAM_REQUIRED = "Algorithm hasn't got required paramter '%1'",
                            r.PARAM_WRONG_TYPE = "Algorithm has got wrong type for paramter '%1'. Must be %2",
                            r.PARAM_WRONG_VALUE = "Algorithm has got wrong value for paramter '%1'. Must be %2",
                            r.WRONG_ALG_NAME = "Algorithm has got wrong name '%1'. Must be '%2'",
                            r.UNSUPPORTED_ALGORITHM = "Algorithm '%1' is not supported",
                            r.WRONG_USAGE = "Algorithm doesn't support key usage '%1'",
                            r
                    }(o),
                    i = function(e) {
                        function r() {
                            var r = null !== e && e.apply(this, arguments) || this;
                            return r.code = 3,
                                r
                        }
                        return Object(n.a)(r, e),
                            r.EMPTY_KEY = "CryptoKey is empty",
                            r.WRONG_KEY_ALG = "CryptoKey has wrong algorithm '%1'. Must be '%2'",
                            r.WRONG_KEY_TYPE = "CryptoKey has wrong type '%1'. Must be '%2'",
                            r.WRONG_KEY_USAGE = "CryptoKey has wrong key usage. Must be '%1'",
                            r.NOT_EXTRACTABLE = "CryptoKey is not extractable",
                            r.WRONG_FORMAT = "CryptoKey has '%1' type. It can be used with '%2' format",
                            r.UNKNOWN_FORMAT = "Unknown format in use '%1'. Must be one of 'raw', 'pkcs8', 'spki'  or 'jwk'",
                            r.ALLOWED_FORMAT = "Wrong format value '%1'. Must be %2",
                            r
                    }(o);

                function s(e) {
                    var r;
                    r = "string" == typeof e ? {
                            name: e
                        } : e,
                        u.checkAlgorithm(r);
                    var t = e;
                    return t.hash && (t.hash = s(t.hash)),
                        r
                }

                function c(e, r) {
                    if (!e)
                        throw new o("Parameter '" + r + "' is required and cant be empty");
                    if ("undefined" != typeof Buffer && Buffer.isBuffer(e))
                        return new Uint8Array(e);
                    if (ArrayBuffer.isView(e)) {
                        var t = e.map(function(e) {
                            return e
                        });
                        return new Uint8Array(t.buffer)
                    }
                    if (e instanceof ArrayBuffer)
                        return new Uint8Array(e);
                    throw new o("Incoming parameter '" + r + "' has wrong data type. Must be ArrayBufferView or ArrayBuffer")
                }
                var u = function() {
                        function e() {}
                        return e.checkAlgorithm = function(e) {
                                if ("object" != typeof e)
                                    throw new TypeError("Wrong algorithm data type. Must be Object");
                                if (!e.name)
                                    throw new a(a.PARAM_REQUIRED, "name")
                            },
                            e.checkAlgorithmParams = function(e) {
                                this.checkAlgorithm(e)
                            },
                            e.checkKey = function(e, r, t, n) {
                                if (void 0 === t && (t = null),
                                    void 0 === n && (n = null), !e)
                                    throw new i(i.EMPTY_KEY);
                                var o = e.algorithm;
                                if (this.checkAlgorithm(o),
                                    r && o.name.toUpperCase() !== r.toUpperCase())
                                    throw new i(i.WRONG_KEY_ALG, o.name, r);
                                if (t && (!e.type || e.type.toUpperCase() !== t.toUpperCase()))
                                    throw new i(i.WRONG_KEY_TYPE, e.type, t);
                                if (n && !e.usages.some(function(e) {
                                    return n.toUpperCase() === e.toUpperCase()
                                }))
                                    throw new i(i.WRONG_KEY_USAGE, n)
                            },
                            e.checkWrappedKey = function(e) {
                                if (!e.extractable)
                                    throw new i(i.NOT_EXTRACTABLE)
                            },
                            e.checkKeyUsages = function(e) {
                                if (!e || !e.length)
                                    throw new o("Parameter 'keyUsages' cannot be empty.")
                            },
                            e.checkFormat = function(e, r) {
                                switch (e.toLowerCase()) {
                                    case "raw":
                                        if (r && "secret" !== r.toLowerCase() && r && "public" !== r.toLowerCase())
                                            throw new i(i.WRONG_FORMAT, r, "raw");
                                        break;
                                    case "pkcs8":
                                        if (r && "private" !== r.toLowerCase())
                                            throw new i(i.WRONG_FORMAT, r, "pkcs8");
                                        break;
                                    case "spki":
                                        if (r && "public" !== r.toLowerCase())
                                            throw new i(i.WRONG_FORMAT, r, "spki");
                                        break;
                                    case "jwk":
                                        break;
                                    default:
                                        throw new i(i.UNKNOWN_FORMAT, e)
                                }
                            },
                            e.generateKey = function(e, r, t) {
                                return new Promise(function(e, r) {
                                    throw new o(o.NOT_SUPPORTED)
                                })
                            },
                            e.digest = function(e, r) {
                                return new Promise(function(e, r) {
                                    throw new o(o.NOT_SUPPORTED)
                                })
                            },
                            e.sign = function(e, r, t) {
                                return new Promise(function(e, r) {
                                    throw new o(o.NOT_SUPPORTED)
                                })
                            },
                            e.verify = function(e, r, t, n) {
                                return new Promise(function(e, r) {
                                    throw new o(o.NOT_SUPPORTED)
                                })
                            },
                            e.encrypt = function(e, r, t) {
                                return new Promise(function(e, r) {
                                    throw new o(o.NOT_SUPPORTED)
                                })
                            },
                            e.decrypt = function(e, r, t) {
                                return new Promise(function(e, r) {
                                    throw new o(o.NOT_SUPPORTED)
                                })
                            },
                            e.deriveBits = function(e, r, t) {
                                return new Promise(function(e, r) {
                                    throw new o(o.NOT_SUPPORTED)
                                })
                            },
                            e.deriveKey = function(e, r, t, n, a) {
                                return new Promise(function(e, r) {
                                    throw new o(o.NOT_SUPPORTED)
                                })
                            },
                            e.exportKey = function(e, r) {
                                return new Promise(function(e, r) {
                                    throw new o(o.NOT_SUPPORTED)
                                })
                            },
                            e.importKey = function(e, r, t, n, a) {
                                return new Promise(function(e, r) {
                                    throw new o(o.NOT_SUPPORTED)
                                })
                            },
                            e.wrapKey = function(e, r, t, n) {
                                return new Promise(function(e, r) {
                                    throw new o(o.NOT_SUPPORTED)
                                })
                            },
                            e.unwrapKey = function(e, r, t, n, a, i, s) {
                                return new Promise(function(e, r) {
                                    throw new o(o.NOT_SUPPORTED)
                                })
                            },
                            e
                    }(),
                    p = {
                        RsaSSA: "RSASSA-PKCS1-v1_5",
                        RsaPSS: "RSA-PSS",
                        RsaOAEP: "RSA-OAEP",
                        AesECB: "AES-ECB",
                        AesCTR: "AES-CTR",
                        AesCMAC: "AES-CMAC",
                        AesGCM: "AES-GCM",
                        AesCBC: "AES-CBC",
                        AesKW: "AES-KW",
                        Sha1: "SHA-1",
                        Sha256: "SHA-256",
                        Sha384: "SHA-384",
                        Sha512: "SHA-512",
                        ChaCha20: "CHACHA20",
                        EcDSA: "ECDSA",
                        EdDSA: "EDDSA",
                        EcDH: "ECDH",
                        Hmac: "HMAC",
                        Poly1305: "POLY1305",
                        Pbkdf2: "PBKDF2",
                        DesCBC: "DES-CBC",
                        DesEdeCBC: "DES-EDE3-CBC"
                    };
                if ("undefined" == typeof self) {
                    var h = e;
                    h.btoa = function(e) {
                            return new Buffer(e, "binary").toString("base64")
                        },
                        h.atob = function(e) {
                            return new Buffer(e, "base64").toString("binary")
                        }
                }
                var f = function() {
                        function e() {}
                        return e.encode = function(e) {
                                var r = this.buffer2string(e);
                                return btoa(r).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_")
                            },
                            e.decode = function(e) {
                                for (; e.length % 4;)
                                    e += "=";
                                var r = e.replace(/\-/g, "+").replace(/_/g, "/");
                                return this.string2buffer(atob(r))
                            },
                            e.buffer2string = function(e) {
                                for (var r = "", t = e.length, n = 0; n < t; n++)
                                    r += String.fromCharCode(e[n]);
                                return r
                            },
                            e.string2buffer = function(e) {
                                for (var r = new Uint8Array(e.length), t = e.length, n = 0; n < t; n++)
                                    r[n] = e.charCodeAt(n);
                                return r
                            },
                            e
                    }(),
                    l = function(e) {
                        function r() {
                            var r = null !== e && e.apply(this, arguments) || this;
                            return r.code = 7,
                                r
                        }
                        return Object(n.a)(r, e),
                            r
                    }(a),
                    y = function(e) {
                        function r() {
                            return null !== e && e.apply(this, arguments) || this
                        }
                        return Object(n.a)(r, e),
                            r.checkKeyUsages = function(r) {
                                var t = this;
                                e.checkKeyUsages.call(this, r);
                                var n = r.filter(function(e) {
                                    return -1 === t.KEY_USAGES.indexOf(e)
                                });
                                if (n.length)
                                    throw new a(a.WRONG_USAGE, n.join(", "))
                            },
                            r.checkAlgorithm = function(e) {
                                if (e.name.toUpperCase() !== this.ALG_NAME.toUpperCase())
                                    throw new a(a.WRONG_ALG_NAME, e.name, this.ALG_NAME)
                            },
                            r.checkKeyGenParams = function(e) {
                                switch (e.length) {
                                    case 128:
                                    case 192:
                                    case 256:
                                        break;
                                    default:
                                        throw new l(l.PARAM_WRONG_VALUE, "length", "128, 192 or 256")
                                }
                            },
                            r.generateKey = function(e, r, t) {
                                var n = this;
                                return new Promise(function(r, o) {
                                    n.checkAlgorithm(e),
                                        n.checkKeyGenParams(e),
                                        n.checkKeyUsages(t),
                                        r(void 0)
                                })
                            },
                            r.exportKey = function(e, r) {
                                var t = this;
                                return new Promise(function(n, o) {
                                    t.checkKey(r, t.ALG_NAME),
                                        t.checkFormat(e, r.type),
                                        n(void 0)
                                })
                            },
                            r.importKey = function(e, r, t, n, o) {
                                var a = this;
                                return new Promise(function(r, n) {
                                    if (a.checkAlgorithm(t),
                                        a.checkFormat(e),
                                        "raw" !== e.toLowerCase() && "jwk" !== e.toLowerCase())
                                        throw new i(i.ALLOWED_FORMAT, e, "'jwk' or 'raw'");
                                    a.checkKeyUsages(o),
                                        r(void 0)
                                })
                            },
                            r.ALG_NAME = "",
                            r.KEY_USAGES = [],
                            r
                    }(u),
                    m = function(e) {
                        function r() {
                            var r = null !== e && e.apply(this, arguments) || this;
                            return r.code = 8,
                                r
                        }
                        return Object(n.a)(r, e),
                            r
                    }(a),
                    w = function(e) {
                        function r() {
                            return null !== e && e.apply(this, arguments) || this
                        }
                        return Object(n.a)(r, e),
                            r.wrapKey = function(e, r, t, n) {
                                var o = this;
                                return new Promise(function(a, i) {
                                    o.checkAlgorithmParams(n),
                                        o.checkKey(t, o.ALG_NAME, "secret", "wrapKey"),
                                        o.checkWrappedKey(r),
                                        o.checkFormat(e, r.type),
                                        a(void 0)
                                })
                            },
                            r.unwrapKey = function(e, r, t, n, o, a, i) {
                                var s = this;
                                return new Promise(function(r, o) {
                                    s.checkAlgorithmParams(n),
                                        s.checkKey(t, s.ALG_NAME, "secret", "unwrapKey"),
                                        s.checkFormat(e),
                                        r(void 0)
                                })
                            },
                            r
                    }(y),
                    A = function(e) {
                        function r() {
                            return null !== e && e.apply(this, arguments) || this
                        }
                        return Object(n.a)(r, e),
                            r.encrypt = function(e, r, t) {
                                var n = this;
                                return new Promise(function(t, o) {
                                    n.checkAlgorithmParams(e),
                                        n.checkKey(r, n.ALG_NAME, "secret", "encrypt"),
                                        t(void 0)
                                })
                            },
                            r.decrypt = function(e, r, t) {
                                var n = this;
                                return new Promise(function(t, o) {
                                    n.checkAlgorithmParams(e),
                                        n.checkKey(r, n.ALG_NAME, "secret", "decrypt"),
                                        t(void 0)
                                })
                            },
                            r.KEY_USAGES = ["encrypt", "decrypt", "wrapKey", "unwrapKey"],
                            r
                    }(w),
                    g = function(e) {
                        function r() {
                            return null !== e && e.apply(this, arguments) || this
                        }
                        return Object(n.a)(r, e),
                            r.ALG_NAME = p.AesECB,
                            r
                    }(A),
                    v = function(e) {
                        function r() {
                            return null !== e && e.apply(this, arguments) || this
                        }
                        return Object(n.a)(r, e),
                            r.checkAlgorithmParams = function(e) {
                                if (this.checkAlgorithm(e), !e.iv)
                                    throw new m(m.PARAM_REQUIRED, "iv");
                                if (!(ArrayBuffer.isView(e.iv) || e.iv instanceof ArrayBuffer))
                                    throw new m(m.PARAM_WRONG_TYPE, "iv", "ArrayBufferView or ArrayBuffer");
                                if (16 !== e.iv.byteLength)
                                    throw new m(m.PARAM_WRONG_VALUE, "iv", "ArrayBufferView or ArrayBuffer with size 16")
                            },
                            r.ALG_NAME = p.AesCBC,
                            r
                    }(A),
                    C = function(e) {
                        function r() {
                            return null !== e && e.apply(this, arguments) || this
                        }
                        return Object(n.a)(r, e),
                            r.checkAlgorithmParams = function(e) {
                                if (this.checkAlgorithm(e), !e.counter || !(ArrayBuffer.isView(e.counter) || e.counter instanceof ArrayBuffer))
                                    throw new m(m.PARAM_WRONG_TYPE, "counter", "ArrayBufferView or ArrayBuffer");
                                if (16 !== e.counter.byteLength)
                                    throw new m(m.PARAM_WRONG_VALUE, "counter", "ArrayBufferView or ArrayBuffer with size 16");
                                if (!(e.length > 0 && e.length <= 128))
                                    throw new m(m.PARAM_WRONG_VALUE, "length", "number [1-128]")
                            },
                            r.ALG_NAME = p.AesCTR,
                            r
                    }(A),
                    d = function(e) {
                        function r() {
                            return null !== e && e.apply(this, arguments) || this
                        }
                        return Object(n.a)(r, e),
                            r.checkAlgorithmParams = function(e) {
                                if (this.checkAlgorithm(e),
                                    e.additionalData && !(ArrayBuffer.isView(e.additionalData) || e.additionalData instanceof ArrayBuffer))
                                    throw new m(m.PARAM_WRONG_TYPE, "additionalData", "ArrayBufferView or ArrayBuffer");
                                if (!e.iv)
                                    throw new m(m.PARAM_REQUIRED, "iv");
                                if (!(ArrayBuffer.isView(e.iv) || e.iv instanceof ArrayBuffer))
                                    throw new m(m.PARAM_WRONG_TYPE, "iv", "ArrayBufferView or ArrayBuffer");
                                if (e.tagLength && ![32, 64, 96, 104, 112, 120, 128].some(function(r) {
                                    return r === e.tagLength
                                }))
                                    throw new m(m.PARAM_WRONG_VALUE, "tagLength", "32, 64, 96, 104, 112, 120 or 128")
                            },
                            r.ALG_NAME = p.AesGCM,
                            r
                    }(A),
                    b = function(e) {
                        function r() {
                            return null !== e && e.apply(this, arguments) || this
                        }
                        return Object(n.a)(r, e),
                            r.checkAlgorithmParams = function(e) {
                                this.checkAlgorithm(e)
                            },
                            r.ALG_NAME = p.AesKW,
                            r.KEY_USAGES = ["wrapKey", "unwrapKey"],
                            r
                    }(w),
                    k = function(e) {
                        function r() {
                            return null !== e && e.apply(this, arguments) || this
                        }
                        return Object(n.a)(r, e),
                            r.encrypt = function(e, r, t) {
                                var n = this;
                                return new Promise(function(t, o) {
                                    n.checkAlgorithmParams(e),
                                        n.checkKey(r, n.ALG_NAME, "secret", "encrypt"),
                                        t(void 0)
                                })
                            },
                            r.decrypt = function(e, r, t) {
                                var n = this;
                                return new Promise(function(t, o) {
                                    n.checkAlgorithmParams(e),
                                        n.checkKey(r, n.ALG_NAME, "secret", "decrypt"),
                                        t(void 0)
                                })
                            },
                            r.checkKey = function(e, r, t, n) {
                                if (void 0 === t && (t = null),
                                    void 0 === n && (n = null), !e)
                                    throw new i(i.EMPTY_KEY);
                                if (t && (!e.type || e.type.toUpperCase() !== t.toUpperCase()))
                                    throw new i(i.WRONG_KEY_TYPE, e.type, t);
                                if (n && !e.usages.some(function(e) {
                                    return n.toUpperCase() === e.toUpperCase()
                                }))
                                    throw new i(i.WRONG_KEY_USAGE, n)
                            },
                            r.ALG_NAME = "ChaCha20",
                            r.KEY_USAGES = ["encrypt", "decrypt"],
                            r
                    }(u),
                    E = function(e) {
                        function r() {
                            return null !== e && e.apply(this, arguments) || this
                        }
                        return Object(n.a)(r, e),
                            r.checkAlgorithmParams = function(e) {
                                if (this.checkAlgorithm(e), !e.iv)
                                    throw new a(a.PARAM_REQUIRED, "iv");
                                if (!(ArrayBuffer.isView(e.iv) || e.iv instanceof ArrayBuffer))
                                    throw new a(a.PARAM_WRONG_TYPE, "iv", "ArrayBufferView or ArrayBuffer");
                                if (8 !== e.iv.byteLength)
                                    throw new a(a.PARAM_WRONG_VALUE, "iv", "ArrayBufferView or ArrayBuffer with size 8")
                            },
                            r.ALG_NAME = p.DesCBC,
                            r
                    }(function(e) {
                        function r() {
                            return null !== e && e.apply(this, arguments) || this
                        }
                        return Object(n.a)(r, e),
                            r.checkKeyUsages = function(r) {
                                var t = this;
                                e.checkKeyUsages.call(this, r);
                                var n = r.filter(function(e) {
                                    return -1 === t.KEY_USAGES.indexOf(e)
                                });
                                if (n.length)
                                    throw new a(a.WRONG_USAGE, n.join(", "))
                            },
                            r.checkAlgorithm = function(e) {
                                if (e.name.toUpperCase() !== this.ALG_NAME.toUpperCase())
                                    throw new a(a.WRONG_ALG_NAME, e.name, this.ALG_NAME)
                            },
                            r.checkKeyGenParams = function(e) {
                                if (!("length" in e))
                                    throw new a(a.PARAM_REQUIRED, "length");
                                if ("number" != typeof e.length)
                                    throw new a(a.PARAM_WRONG_TYPE, "length", "Number");
                                if (e.length !== this.KEY_LENGTH)
                                    throw new a(a.PARAM_WRONG_VALUE, "length", "" + this.KEY_LENGTH)
                            },
                            r.generateKey = function(e, r, t) {
                                var n = this;
                                return new Promise(function(r) {
                                    n.checkAlgorithm(e),
                                        n.checkKeyGenParams(e),
                                        n.checkKeyUsages(t),
                                        r(void 0)
                                })
                            },
                            r.exportKey = function(e, r) {
                                var t = this;
                                return new Promise(function(n, o) {
                                    t.checkKey(r, t.ALG_NAME),
                                        t.checkFormat(e, r.type),
                                        n(void 0)
                                })
                            },
                            r.importKey = function(e, r, t, n, o) {
                                var a = this;
                                return new Promise(function(r) {
                                    if (a.checkAlgorithm(t),
                                        a.checkFormat(e),
                                        "raw" !== e.toLowerCase() && "jwk" !== e.toLowerCase())
                                        throw new i(i.ALLOWED_FORMAT, e, "'jwk' or 'raw'");
                                    a.checkKeyUsages(o),
                                        r(void 0)
                                })
                            },
                            r.wrapKey = function(e, r, t, n) {
                                var o = this;
                                return new Promise(function(a, i) {
                                    o.checkAlgorithmParams(n),
                                        o.checkKey(t, o.ALG_NAME, "secret", "wrapKey"),
                                        o.checkWrappedKey(r),
                                        o.checkFormat(e, r.type),
                                        a(void 0)
                                })
                            },
                            r.unwrapKey = function(e, r, t, n, o, a, i) {
                                var s = this;
                                return new Promise(function(r, o) {
                                    s.checkAlgorithmParams(n),
                                        s.checkKey(t, s.ALG_NAME, "secret", "unwrapKey"),
                                        s.checkFormat(e),
                                        r(void 0)
                                })
                            },
                            r.encrypt = function(e, r, t) {
                                var n = this;
                                return new Promise(function(t, o) {
                                    n.checkAlgorithmParams(e),
                                        n.checkKey(r, n.ALG_NAME, "secret", "encrypt"),
                                        t(void 0)
                                })
                            },
                            r.decrypt = function(e, r, t) {
                                var n = this;
                                return new Promise(function(t, o) {
                                    n.checkAlgorithmParams(e),
                                        n.checkKey(r, n.ALG_NAME, "secret", "decrypt"),
                                        t(void 0)
                                })
                            },
                            r.ALG_NAME = "",
                            r.KEY_LENGTH = 64,
                            r.KEY_USAGES = ["encrypt", "decrypt", "wrapKey", "unwrapKey"],
                            r
                    }(u)),
                    _ = function(e) {
                        function r() {
                            return null !== e && e.apply(this, arguments) || this
                        }
                        return Object(n.a)(r, e),
                            r.ALG_NAME = p.DesEdeCBC,
                            r.KEY_LENGTH = 192,
                            r
                    }(E),
                    P = [p.Sha1, p.Sha256, p.Sha384, p.Sha512].join(" | "),
                    U = function(e) {
                        function r() {
                            return null !== e && e.apply(this, arguments) || this
                        }
                        return Object(n.a)(r, e),
                            r.checkAlgorithm = function(r) {
                                var t;
                                switch (t = "string" == typeof r ? {
                                        name: r
                                    } : r,
                                    e.checkAlgorithm.call(this, t),
                                    t.name.toUpperCase()) {
                                    case p.Sha1:
                                    case p.Sha256:
                                    case p.Sha384:
                                    case p.Sha512:
                                        break;
                                    default:
                                        throw new a(a.WRONG_ALG_NAME, t.name, P)
                                }
                            },
                            r.digest = function(e, r) {
                                var t = this;
                                return new Promise(function(r, n) {
                                    t.checkAlgorithm(e),
                                        r(void 0)
                                })
                            },
                            r
                    }(u),
                    S = function(e) {
                        function r() {
                            var r = null !== e && e.apply(this, arguments) || this;
                            return r.code = 9,
                                r
                        }
                        return Object(n.a)(r, e),
                            r
                    }(a),
                    L = function(e) {
                        function r() {
                            return null !== e && e.apply(this, arguments) || this
                        }
                        return Object(n.a)(r, e),
                            r.checkAlgorithm = function(e) {
                                if (e.name.toUpperCase() !== this.ALG_NAME.toUpperCase())
                                    throw new a(a.WRONG_ALG_NAME, e.name, this.ALG_NAME)
                            },
                            r.checkKeyGenParams = function(e) {
                                if (!e.namedCurve)
                                    throw new S(S.PARAM_REQUIRED, "namedCurve");
                                if ("string" != typeof e.namedCurve)
                                    throw new S(S.PARAM_WRONG_TYPE, "namedCurve", "string");
                                switch (e.namedCurve.toUpperCase()) {
                                    case "P-256":
                                    case "K-256":
                                    case "P-384":
                                    case "P-521":
                                    case "X25519":
                                    case "ED25519":
                                        break;
                                    default:
                                        throw new S(S.PARAM_WRONG_VALUE, "namedCurve", "K-256, P-256, P-384, P-521, X25519 or ED25519")
                                }
                            },
                            r.checkKeyGenUsages = function(e) {
                                var r = this;
                                e.forEach(function(e) {
                                    for (var t = 0; t < r.KEY_USAGES.length && r.KEY_USAGES[t].toLowerCase() !== e.toLowerCase(); t++)
                                    ;
                                    if (t === r.KEY_USAGES.length)
                                        throw new o("Unsupported key usage '" + e + "'. Should be one of [" + r.KEY_USAGES.join(", ") + "]")
                                })
                            },
                            r.generateKey = function(e, r, t) {
                                var n = this;
                                return new Promise(function(r, o) {
                                    n.checkAlgorithm(e),
                                        n.checkKeyGenParams(e),
                                        n.checkKeyGenUsages(t),
                                        r(void 0)
                                })
                            },
                            r.exportKey = function(e, r) {
                                var t = this;
                                return new Promise(function(n, o) {
                                    t.checkKey(r, t.ALG_NAME),
                                        e && "raw" === e.toLowerCase() && "public" === r.type || t.checkFormat(e, r.type),
                                        n(void 0)
                                })
                            },
                            r.importKey = function(e, r, t, n, o) {
                                var a = this;
                                return new Promise(function(r, n) {
                                    a.checkKeyGenParams(t),
                                        a.checkFormat(e),
                                        a.checkKeyGenUsages(o),
                                        r(void 0)
                                })
                            },
                            r.ALG_NAME = "",
                            r.KEY_USAGES = [],
                            r
                    }(u),
                    O = function(e) {
                        function r() {
                            var r = null !== e && e.apply(this, arguments) || this;
                            return r.code = 10,
                                r
                        }
                        return Object(n.a)(r, e),
                            r
                    }(a),
                    K = function(e) {
                        function r() {
                            return null !== e && e.apply(this, arguments) || this
                        }
                        return Object(n.a)(r, e),
                            r.checkAlgorithmParams = function(e) {
                                this.checkAlgorithm(e),
                                    U.checkAlgorithm(e.hash)
                            },
                            r.sign = function(e, r, t) {
                                var n = this;
                                return new Promise(function(t, o) {
                                    n.checkAlgorithmParams(e),
                                        n.checkKey(r, n.ALG_NAME, "private", "sign"),
                                        t(void 0)
                                })
                            },
                            r.verify = function(e, r, t, n) {
                                var o = this;
                                return new Promise(function(t, n) {
                                    o.checkAlgorithmParams(e),
                                        o.checkKey(r, o.ALG_NAME, "public", "verify"),
                                        t(void 0)
                                })
                            },
                            r.ALG_NAME = p.EdDSA,
                            r.KEY_USAGES = ["sign", "verify"],
                            r
                    }(L),
                    N = function(e) {
                        function r() {
                            return null !== e && e.apply(this, arguments) || this
                        }
                        return Object(n.a)(r, e),
                            r.checkAlgorithmParams = function(e) {
                                this.checkAlgorithm(e),
                                    U.checkAlgorithm(e.hash)
                            },
                            r.sign = function(e, r, t) {
                                var n = this;
                                return new Promise(function(t, o) {
                                    n.checkAlgorithmParams(e),
                                        n.checkKey(r, n.ALG_NAME, "private", "sign"),
                                        t(void 0)
                                })
                            },
                            r.verify = function(e, r, t, n) {
                                var o = this;
                                return new Promise(function(t, n) {
                                    o.checkAlgorithmParams(e),
                                        o.checkKey(r, o.ALG_NAME, "public", "verify"),
                                        t(void 0)
                                })
                            },
                            r.ALG_NAME = p.EcDSA,
                            r.KEY_USAGES = ["sign", "verify"],
                            r
                    }(L),
                    R = function(e) {
                        function r() {
                            return null !== e && e.apply(this, arguments) || this
                        }
                        return Object(n.a)(r, e),
                            r.checkDeriveParams = function(e) {
                                if (this.checkAlgorithm(e), !e.public)
                                    throw new O(O.PARAM_REQUIRED, "public");
                                this.checkKey(e.public, this.ALG_NAME, "public")
                            },
                            r.deriveBits = function(e, r, t) {
                                var n = this;
                                return new Promise(function(t, o) {
                                    n.checkDeriveParams(e),
                                        n.checkKey(r, n.ALG_NAME, "private", "deriveBits"),
                                        t(void 0)
                                })
                            },
                            r.deriveKey = function(e, r, t, n, o) {
                                var a = this;
                                return new Promise(function(n, o) {
                                    switch (a.checkDeriveParams(e),
                                        a.checkKey(r, a.ALG_NAME, "private", "deriveKey"),
                                        u.checkAlgorithm(t),
                                        t.name.toUpperCase()) {
                                        case p.AesCBC:
                                            v.checkKeyGenParams(t);
                                            break;
                                        case p.AesCTR:
                                            C.checkKeyGenParams(t);
                                            break;
                                        case p.AesGCM:
                                            d.checkKeyGenParams(t);
                                            break;
                                        case p.AesKW:
                                            b.checkKeyGenParams(t);
                                            break;
                                        default:
                                            throw new O("Unsupported name '" + t.name + "' for algorithm in param 'derivedKeyType'")
                                    }
                                    n(void 0)
                                })
                            },
                            r.ALG_NAME = p.EcDH,
                            r.KEY_USAGES = ["deriveKey", "deriveBits"],
                            r
                    }(L),
                    G = function(e) {
                        function r() {
                            return null !== e && e.apply(this, arguments) || this
                        }
                        return Object(n.a)(r, e),
                            r.checkAlgorithm = function(e) {
                                if (e.name.toUpperCase() !== this.ALG_NAME.toUpperCase())
                                    throw new a(a.WRONG_ALG_NAME, e.name, this.ALG_NAME)
                            },
                            r.checkKeyGenParams = function(e) {
                                if ("length" in e && !(e.length > 0 && e.length <= 512))
                                    throw new a(a.PARAM_WRONG_VALUE, "length", "more 0 and less than 512")
                            },
                            r.checkKeyGenUsages = function(e) {
                                var r = this;
                                this.checkKeyUsages(e),
                                    e.forEach(function(e) {
                                        for (var t = 0; t < r.KEY_USAGES.length && r.KEY_USAGES[t].toLowerCase() !== e.toLowerCase(); t++)
                                        ;
                                        if (t === r.KEY_USAGES.length)
                                            throw new o("Unsupported key usage '" + e + "'. Should be one of [" + r.KEY_USAGES.join(", ") + "]")
                                    })
                            },
                            r.generateKey = function(e, r, t) {
                                var n = this;
                                return new Promise(function(r, o) {
                                    n.checkAlgorithm(e),
                                        n.checkKeyGenParams(e),
                                        n.checkKeyGenUsages(t),
                                        r(void 0)
                                })
                            },
                            r.exportKey = function(e, r) {
                                var t = this;
                                return new Promise(function(n, o) {
                                    t.checkKey(r, t.ALG_NAME),
                                        t.checkFormat(e, r.type),
                                        n(void 0)
                                })
                            },
                            r.importKey = function(e, r, t, n, o) {
                                var a = this;
                                return new Promise(function(r, n) {
                                    if (a.checkAlgorithm(t),
                                        a.checkFormat(e),
                                        "raw" !== e.toLowerCase() && "jwk" !== e.toLowerCase())
                                        throw new i(i.ALLOWED_FORMAT, e, "'jwk' or 'raw'");
                                    a.checkKeyGenUsages(o),
                                        r(void 0)
                                })
                            },
                            r.sign = function(e, r, t) {
                                var n = this;
                                return new Promise(function(t, o) {
                                    n.checkAlgorithmParams(e),
                                        n.checkKey(r, n.ALG_NAME, "secret", "sign"),
                                        t(void 0)
                                })
                            },
                            r.verify = function(e, r, t, n) {
                                var o = this;
                                return new Promise(function(t, n) {
                                    o.checkAlgorithmParams(e),
                                        o.checkKey(r, o.ALG_NAME, "secret", "verify"),
                                        t(void 0)
                                })
                            },
                            r.ALG_NAME = p.Hmac,
                            r.KEY_USAGES = ["sign", "verify"],
                            r
                    }(u),
                    B = function(e) {
                        function r() {
                            return null !== e && e.apply(this, arguments) || this
                        }
                        return Object(n.a)(r, e),
                            r.checkAlgorithm = function(e) {
                                if (e.name.toUpperCase() !== this.ALG_NAME.toUpperCase())
                                    throw new a(a.WRONG_ALG_NAME, e.name, this.ALG_NAME)
                            },
                            r.checkDeriveParams = function(e) {
                                if (this.checkAlgorithm(e), !e.salt)
                                    throw new a(a.PARAM_REQUIRED, "salt");
                                if (!(ArrayBuffer.isView(e.salt) || e.salt instanceof ArrayBuffer))
                                    throw new a(a.PARAM_WRONG_TYPE, "salt", "ArrayBuffer or ArrayBufferView");
                                if (!e.iterations)
                                    throw new a(a.PARAM_REQUIRED, "iterations");
                                if (!e.hash)
                                    throw new a(a.PARAM_REQUIRED, "hash");
                                var r = s(e.hash);
                                U.checkAlgorithm(r)
                            },
                            r.importKey = function(e, r, t, n, a) {
                                var s = this;
                                return Promise.resolve().then(function() {
                                    if (n)
                                        throw new o("KDF keys must set extractable=false");
                                    if (s.checkAlgorithm(t),
                                        s.checkFormat(e),
                                        "raw" !== e.toLowerCase())
                                        throw new i(i.ALLOWED_FORMAT, e, "'raw'");
                                    s.checkKeyUsages(a)
                                })
                            },
                            r.deriveKey = function(e, r, t, n, o) {
                                var i = this;
                                return Promise.resolve().then(function() {
                                    switch (i.checkDeriveParams(e),
                                        i.checkKey(r, i.ALG_NAME, "secret", "deriveKey"),
                                        u.checkAlgorithm(t),
                                        t.name.toUpperCase()) {
                                        case p.AesCBC:
                                            v.checkKeyGenParams(t),
                                                v.checkKeyUsages(o);
                                            break;
                                        case p.AesCTR:
                                            C.checkKeyGenParams(t),
                                                C.checkKeyUsages(o);
                                            break;
                                        case p.AesGCM:
                                            d.checkKeyGenParams(t),
                                                d.checkKeyUsages(o);
                                            break;
                                        case p.AesKW:
                                            b.checkKeyGenParams(t),
                                                b.checkKeyUsages(o);
                                            break;
                                        case p.Hmac:
                                            G.checkKeyGenParams(t),
                                                G.checkKeyUsages(o);
                                            break;
                                        case p.DesCBC:
                                            E.checkKeyGenParams(t),
                                                E.checkKeyUsages(o);
                                            break;
                                        case p.DesEdeCBC:
                                            _.checkKeyGenParams(t),
                                                _.checkKeyUsages(o);
                                            break;
                                        default:
                                            throw new a(a.UNSUPPORTED_ALGORITHM, t)
                                    }
                                })
                            },
                            r.deriveBits = function(e, r, t) {
                                var n = this;
                                return Promise.resolve().then(function() {
                                    if (n.checkDeriveParams(e),
                                        n.checkKey(r, n.ALG_NAME, "secret", "deriveBits"), !t || "number" != typeof t)
                                        throw new o("Parameter 'length' must be Number and more than 0")
                                })
                            },
                            r.ALG_NAME = p.Pbkdf2,
                            r.KEY_USAGES = ["deriveKey", "deriveBits"],
                            r
                    }(u),
                    D = function(e) {
                        function r() {
                            return null !== e && e.apply(this, arguments) || this
                        }
                        return Object(n.a)(r, e),
                            r.checkKeyGenUsages = function(e) {
                                var r = this;
                                this.checkKeyUsages(e),
                                    e.forEach(function(e) {
                                        for (var t = 0; t < r.KEY_USAGES.length && r.KEY_USAGES[t].toLowerCase() !== e.toLowerCase(); t++)
                                        ;
                                        if (t === r.KEY_USAGES.length)
                                            throw new o("Unsupported key usage '" + e + "'. Should be one of [" + r.KEY_USAGES.join(", ") + "]")
                                    })
                            },
                            r.exportKey = function(e, r) {
                                var t = this;
                                return new Promise(function(n, o) {
                                    t.checkKey(r, t.ALG_NAME),
                                        t.checkFormat(e, r.type),
                                        n(void 0)
                                })
                            },
                            r.importKey = function(e, r, t, n, o) {
                                var a = this;
                                return new Promise(function(r, t) {
                                    if (a.checkFormat(e),
                                        "raw" !== e.toLowerCase() && "jwk" !== e.toLowerCase())
                                        throw new i(i.ALLOWED_FORMAT, e, "'jwk' or 'raw'");
                                    a.checkKeyGenUsages(o),
                                        r(void 0)
                                })
                            },
                            r.sign = function(e, r, t) {
                                var n = this;
                                return new Promise(function(e, t) {
                                    n.checkKey(r, n.ALG_NAME, "secret", "sign"),
                                        e(void 0)
                                })
                            },
                            r.verify = function(e, r, t, n) {
                                var o = this;
                                return new Promise(function(e, t) {
                                    o.checkKey(r, o.ALG_NAME, "secret", "verify"),
                                        e(void 0)
                                })
                            },
                            r.checkKey = function(e, r, t, n) {
                                if (void 0 === t && (t = null),
                                    void 0 === n && (n = null), !e)
                                    throw new i(i.EMPTY_KEY);
                                if (t && (!e.type || e.type.toUpperCase() !== t.toUpperCase()))
                                    throw new i(i.WRONG_KEY_TYPE, e.type, t);
                                if (n && !e.usages.some(function(e) {
                                    return n.toUpperCase() === e.toUpperCase()
                                }))
                                    throw new i(i.WRONG_KEY_USAGE, n)
                            },
                            r.ALG_NAME = p.Poly1305,
                            r.KEY_USAGES = ["sign", "verify"],
                            r
                    }(u),
                    M = function(e) {
                        function r() {
                            var r = null !== e && e.apply(this, arguments) || this;
                            return r.code = 2,
                                r
                        }
                        return Object(n.a)(r, e),
                            r
                    }(a),
                    T = function(e) {
                        function r() {
                            var r = null !== e && e.apply(this, arguments) || this;
                            return r.code = 6,
                                r
                        }
                        return Object(n.a)(r, e),
                            r
                    }(a),
                    x = function(e) {
                        function r() {
                            return null !== e && e.apply(this, arguments) || this
                        }
                        return Object(n.a)(r, e),
                            r.checkAlgorithm = function(e) {
                                if (e.name.toUpperCase() !== this.ALG_NAME.toUpperCase())
                                    throw new a(a.WRONG_ALG_NAME, e.name, this.ALG_NAME)
                            },
                            r.checkImportAlgorithm = function(e) {
                                if (this.checkAlgorithm(e), !e.hash)
                                    throw new T(T.PARAM_REQUIRED, "hash");
                                U.checkAlgorithm(e.hash)
                            },
                            r.checkKeyGenParams = function(e) {
                                var r = e.modulusLength;
                                if (!(r >= 256 && r <= 16384) || r % 8)
                                    throw new M(M.PARAM_WRONG_VALUE, "modulusLength", " a multiple of 8 bits and >= 256 and <= 16384");
                                var t = e.publicExponent;
                                if (!t)
                                    throw new M(M.PARAM_REQUIRED, "publicExponent");
                                if (!ArrayBuffer.isView(t))
                                    throw new M(M.PARAM_WRONG_TYPE, "publicExponent", "ArrayBufferView");
                                if (3 !== t[0] && (1 !== t[0] || 0 !== t[1] || 1 !== t[2]))
                                    throw new M(M.PARAM_WRONG_VALUE, "publicExponent", "Uint8Array([3]) | Uint8Array([1, 0, 1])");
                                if (!e.hash)
                                    throw new M(M.PARAM_REQUIRED, "hash", P);
                                U.checkAlgorithm(e.hash)
                            },
                            r.checkKeyGenUsages = function(e) {
                                var r = this;
                                this.checkKeyUsages(e),
                                    e.forEach(function(e) {
                                        for (var t = 0; t < r.KEY_USAGES.length && r.KEY_USAGES[t].toLowerCase() !== e.toLowerCase(); t++)
                                        ;
                                        if (t === r.KEY_USAGES.length)
                                            throw new o("Unsupported key usage '" + e + "'. Should be one of [" + r.KEY_USAGES.join(", ") + "]")
                                    })
                            },
                            r.generateKey = function(e, r, t) {
                                var n = this;
                                return new Promise(function(r, o) {
                                    n.checkAlgorithm(e),
                                        n.checkKeyGenParams(e),
                                        n.checkKeyGenUsages(t),
                                        r(void 0)
                                })
                            },
                            r.exportKey = function(e, r) {
                                var t = this;
                                return new Promise(function(n, o) {
                                    t.checkKey(r, t.ALG_NAME),
                                        t.checkFormat(e, r.type),
                                        n(void 0)
                                })
                            },
                            r.importKey = function(e, r, t, n, o) {
                                var a = this;
                                return new Promise(function(r, n) {
                                    if (a.checkImportAlgorithm(t),
                                        a.checkFormat(e),
                                        "raw" === e.toLowerCase())
                                        throw new i(i.ALLOWED_FORMAT, e, "'JsonWebKey', 'pkcs8' or 'spki'");
                                    a.checkKeyGenUsages(o),
                                        r(void 0)
                                })
                            },
                            r.ALG_NAME = "",
                            r.KEY_USAGES = [],
                            r
                    }(u),
                    j = function(e) {
                        function r() {
                            return null !== e && e.apply(this, arguments) || this
                        }
                        return Object(n.a)(r, e),
                            r.sign = function(e, r, t) {
                                var n = this;
                                return new Promise(function(t, o) {
                                    n.checkAlgorithmParams(e),
                                        n.checkKey(r, n.ALG_NAME, "private", "sign"),
                                        t(void 0)
                                })
                            },
                            r.verify = function(e, r, t, n) {
                                var o = this;
                                return new Promise(function(t, n) {
                                    o.checkAlgorithmParams(e),
                                        o.checkKey(r, o.ALG_NAME, "public", "verify"),
                                        t(void 0)
                                })
                            },
                            r.ALG_NAME = p.RsaSSA,
                            r.KEY_USAGES = ["sign", "verify"],
                            r
                    }(x),
                    W = function(e) {
                        function r() {
                            var r = null !== e && e.apply(this, arguments) || this;
                            return r.code = 4,
                                r
                        }
                        return Object(n.a)(r, e),
                            r
                    }(a),
                    H = function(e) {
                        function r() {
                            return null !== e && e.apply(this, arguments) || this
                        }
                        return Object(n.a)(r, e),
                            r.checkAlgorithmParams = function(r) {
                                var t = r;
                                if (e.checkAlgorithmParams.call(this, t), !t.saltLength)
                                    throw new W(W.PARAM_REQUIRED, "saltLength");
                                if (t.saltLength < 0)
                                    throw new W("Parameter 'saltLength' is outside of numeric range")
                            },
                            r.ALG_NAME = p.RsaPSS,
                            r
                    }(j),
                    I = function(e) {
                        function r() {
                            var r = null !== e && e.apply(this, arguments) || this;
                            return r.code = 5,
                                r
                        }
                        return Object(n.a)(r, e),
                            r
                    }(a),
                    Y = function(e) {
                        function r() {
                            return null !== e && e.apply(this, arguments) || this
                        }
                        return Object(n.a)(r, e),
                            r.checkAlgorithmParams = function(e) {
                                if (e.label && !(ArrayBuffer.isView(e.label) || e.label instanceof ArrayBuffer))
                                    throw new I(I.PARAM_WRONG_TYPE, "label", "ArrayBufferView or ArrayBuffer")
                            },
                            r.encrypt = function(e, r, t) {
                                var n = this;
                                return new Promise(function(t, o) {
                                    n.checkAlgorithmParams(e),
                                        n.checkKey(r, n.ALG_NAME, "public", "encrypt"),
                                        t(void 0)
                                })
                            },
                            r.decrypt = function(e, r, t) {
                                var n = this;
                                return new Promise(function(t, o) {
                                    n.checkAlgorithmParams(e),
                                        n.checkKey(r, n.ALG_NAME, "private", "decrypt"),
                                        t(void 0)
                                })
                            },
                            r.wrapKey = function(e, r, t, n) {
                                var o = this;
                                return new Promise(function(a, i) {
                                    o.checkAlgorithmParams(n),
                                        o.checkKey(t, o.ALG_NAME, "public", "wrapKey"),
                                        o.checkWrappedKey(r),
                                        o.checkFormat(e, r.type),
                                        a(void 0)
                                })
                            },
                            r.unwrapKey = function(e, r, t, n, o, a, i) {
                                var s = this;
                                return new Promise(function(r, o) {
                                    s.checkAlgorithmParams(n),
                                        s.checkKey(t, s.ALG_NAME, "private", "unwrapKey"),
                                        s.checkFormat(e),
                                        r(void 0)
                                })
                            },
                            r.ALG_NAME = p.RsaOAEP,
                            r.KEY_USAGES = ["encrypt", "decrypt", "wrapKey", "unwrapKey"],
                            r
                    }(x),
                    F = function() {
                        function e() {}
                        return e.prototype.generateKey = function(e, r, t) {
                                return new Promise(function(n, o) {
                                    var i = s(e),
                                        c = u;
                                    switch (i.name.toUpperCase()) {
                                        case p.RsaSSA.toUpperCase():
                                            c = j;
                                            break;
                                        case p.RsaOAEP.toUpperCase():
                                            c = Y;
                                            break;
                                        case p.RsaPSS.toUpperCase():
                                            c = H;
                                            break;
                                        case p.AesECB.toUpperCase():
                                            c = g;
                                            break;
                                        case p.AesCBC.toUpperCase():
                                            c = v;
                                            break;
                                        case p.AesCTR.toUpperCase():
                                            c = C;
                                            break;
                                        case p.AesGCM.toUpperCase():
                                            c = d;
                                            break;
                                        case p.AesKW.toUpperCase():
                                            c = b;
                                            break;
                                        case p.EcDSA.toUpperCase():
                                            c = N;
                                            break;
                                        case p.EdDSA.toUpperCase():
                                            c = K;
                                            break;
                                        case p.EcDH.toUpperCase():
                                            c = R;
                                            break;
                                        case p.Hmac.toUpperCase():
                                            c = G;
                                            break;
                                        case p.DesCBC.toUpperCase():
                                            c = E;
                                            break;
                                        case p.DesEdeCBC.toUpperCase():
                                            c = _;
                                            break;
                                        default:
                                            throw new a(a.UNSUPPORTED_ALGORITHM, i.name)
                                    }
                                    c.generateKey(i, r, t).then(n, o)
                                })
                            },
                            e.prototype.digest = function(e, r) {
                                return new Promise(function(t, n) {
                                    var o = s(e),
                                        i = c(r, "data"),
                                        h = u;
                                    switch (o.name.toUpperCase()) {
                                        case p.Sha1.toUpperCase():
                                        case p.Sha256.toUpperCase():
                                        case p.Sha384.toUpperCase():
                                        case p.Sha512.toUpperCase():
                                            h = U;
                                            break;
                                        default:
                                            throw new a(a.UNSUPPORTED_ALGORITHM, o.name)
                                    }
                                    h.digest(o, i).then(t, n)
                                })
                            },
                            e.prototype.sign = function(e, r, t) {
                                return new Promise(function(n, o) {
                                    var i = s(e),
                                        h = c(t, "data"),
                                        f = u;
                                    switch (i.name.toUpperCase()) {
                                        case p.RsaSSA.toUpperCase():
                                            f = j;
                                            break;
                                        case p.RsaPSS.toUpperCase():
                                            f = H;
                                            break;
                                        case p.EcDSA.toUpperCase():
                                            f = N;
                                            break;
                                        case p.EdDSA.toUpperCase():
                                            f = K;
                                            break;
                                        case p.Hmac.toUpperCase():
                                            f = G;
                                            break;
                                        case p.Poly1305.toUpperCase():
                                            f = D;
                                            break;
                                        default:
                                            throw new a(a.UNSUPPORTED_ALGORITHM, i.name)
                                    }
                                    f.sign(i, r, h).then(n, o)
                                })
                            },
                            e.prototype.verify = function(e, r, t, n) {
                                return new Promise(function(t, o) {
                                    var i = s(e),
                                        h = c(n, "signature"),
                                        f = c(n, "data"),
                                        l = u;
                                    switch (i.name.toUpperCase()) {
                                        case p.RsaSSA.toUpperCase():
                                            l = j;
                                            break;
                                        case p.RsaPSS.toUpperCase():
                                            l = H;
                                            break;
                                        case p.EcDSA.toUpperCase():
                                            l = N;
                                            break;
                                        case p.EdDSA.toUpperCase():
                                            l = K;
                                            break;
                                        case p.Hmac.toUpperCase():
                                            l = G;
                                            break;
                                        case p.Poly1305.toUpperCase():
                                            l = D;
                                            break;
                                        default:
                                            throw new a(a.UNSUPPORTED_ALGORITHM, i.name)
                                    }
                                    l.verify(i, r, h, f).then(t, o)
                                })
                            },
                            e.prototype.encrypt = function(e, r, t) {
                                return new Promise(function(n, o) {
                                    var i = s(e),
                                        h = c(t, "data"),
                                        f = u;
                                    switch (i.name.toUpperCase()) {
                                        case p.RsaOAEP.toUpperCase():
                                            f = Y;
                                            break;
                                        case p.AesECB.toUpperCase():
                                            f = g;
                                            break;
                                        case p.AesCBC.toUpperCase():
                                            f = v;
                                            break;
                                        case p.AesCTR.toUpperCase():
                                            f = C;
                                            break;
                                        case p.AesGCM.toUpperCase():
                                            f = d;
                                            break;
                                        case p.ChaCha20.toUpperCase():
                                            f = k;
                                            break;
                                        case p.DesCBC.toUpperCase():
                                            f = E;
                                            break;
                                        case p.DesEdeCBC.toUpperCase():
                                            f = _;
                                            break;
                                        default:
                                            throw new a(a.UNSUPPORTED_ALGORITHM, i.name)
                                    }
                                    f.encrypt(i, r, h).then(n, o)
                                })
                            },
                            e.prototype.decrypt = function(e, r, t) {
                                return new Promise(function(n, o) {
                                    var i = s(e),
                                        h = c(t, "data"),
                                        f = u;
                                    switch (i.name.toUpperCase()) {
                                        case p.RsaOAEP.toUpperCase():
                                            f = Y;
                                            break;
                                        case p.AesECB.toUpperCase():
                                            f = g;
                                            break;
                                        case p.AesCBC.toUpperCase():
                                            f = v;
                                            break;
                                        case p.AesCTR.toUpperCase():
                                            f = C;
                                            break;
                                        case p.AesGCM.toUpperCase():
                                            f = d;
                                            break;
                                        case p.ChaCha20.toUpperCase():
                                            f = k;
                                            break;
                                        case p.DesCBC.toUpperCase():
                                            f = E;
                                            break;
                                        case p.DesEdeCBC.toUpperCase():
                                            f = _;
                                            break;
                                        default:
                                            throw new a(a.UNSUPPORTED_ALGORITHM, i.name)
                                    }
                                    f.decrypt(i, r, h).then(n, o)
                                })
                            },
                            e.prototype.deriveBits = function(e, r, t) {
                                return new Promise(function(n, o) {
                                    var i = s(e),
                                        c = u;
                                    switch (i.name.toUpperCase()) {
                                        case p.EcDH.toUpperCase():
                                            c = R;
                                            break;
                                        case p.Pbkdf2.toUpperCase():
                                            c = B;
                                            break;
                                        default:
                                            throw new a(a.UNSUPPORTED_ALGORITHM, i.name)
                                    }
                                    c.deriveBits(i, r, t).then(n, o)
                                })
                            },
                            e.prototype.deriveKey = function(e, r, t, n, o) {
                                return new Promise(function(i, c) {
                                    var h = s(e),
                                        f = s(t),
                                        l = u;
                                    switch (h.name.toUpperCase()) {
                                        case p.EcDH.toUpperCase():
                                            l = R;
                                            break;
                                        case p.Pbkdf2.toUpperCase():
                                            l = B;
                                            break;
                                        default:
                                            throw new a(a.UNSUPPORTED_ALGORITHM, h.name)
                                    }
                                    l.deriveKey(h, r, f, n, o).then(i, c)
                                })
                            },
                            e.prototype.exportKey = function(e, r) {
                                return new Promise(function(t, n) {
                                    if (u.checkKey(r), !r.extractable)
                                        throw new i(i.NOT_EXTRACTABLE);
                                    var o = u;
                                    switch (r.algorithm.name.toUpperCase()) {
                                        case p.RsaSSA.toUpperCase():
                                            o = j;
                                            break;
                                        case p.RsaPSS.toUpperCase():
                                            o = H;
                                            break;
                                        case p.AesECB.toUpperCase():
                                            o = g;
                                            break;
                                        case p.RsaOAEP.toUpperCase():
                                            o = Y;
                                            break;
                                        case p.AesCBC.toUpperCase():
                                            o = v;
                                            break;
                                        case p.AesCTR.toUpperCase():
                                            o = C;
                                            break;
                                        case p.AesGCM.toUpperCase():
                                            o = d;
                                            break;
                                        case p.AesKW.toUpperCase():
                                            o = b;
                                            break;
                                        case p.EcDSA.toUpperCase():
                                            o = N;
                                            break;
                                        case p.EdDSA.toUpperCase():
                                            o = K;
                                            break;
                                        case p.EcDH.toUpperCase():
                                            o = R;
                                            break;
                                        case p.Hmac.toUpperCase():
                                            o = G;
                                            break;
                                        case p.Poly1305.toUpperCase():
                                            o = D;
                                            break;
                                        case p.DesCBC.toUpperCase():
                                            o = E;
                                            break;
                                        case p.DesEdeCBC.toUpperCase():
                                            o = _;
                                            break;
                                        default:
                                            throw new a(a.UNSUPPORTED_ALGORITHM, r.algorithm.name)
                                    }
                                    o.exportKey(e, r).then(t, n)
                                })
                            },
                            e.prototype.importKey = function(e, r, t, n, o) {
                                return new Promise(function(i, c) {
                                    var h = s(t),
                                        f = u;
                                    switch (h.name.toUpperCase()) {
                                        case p.RsaSSA.toUpperCase():
                                            f = j;
                                            break;
                                        case p.RsaPSS.toUpperCase():
                                            f = H;
                                            break;
                                        case p.RsaOAEP.toUpperCase():
                                            f = Y;
                                            break;
                                        case p.AesECB.toUpperCase():
                                            f = g;
                                            break;
                                        case p.AesCBC.toUpperCase():
                                            f = v;
                                            break;
                                        case p.AesCTR.toUpperCase():
                                            f = C;
                                            break;
                                        case p.AesGCM.toUpperCase():
                                            f = d;
                                            break;
                                        case p.AesKW.toUpperCase():
                                            f = b;
                                            break;
                                        case p.EcDSA.toUpperCase():
                                            f = N;
                                            break;
                                        case p.EdDSA.toUpperCase():
                                            f = K;
                                            break;
                                        case p.EcDH.toUpperCase():
                                            f = R;
                                            break;
                                        case p.Hmac.toUpperCase():
                                            f = G;
                                            break;
                                        case p.Pbkdf2.toUpperCase():
                                            f = B;
                                            break;
                                        case p.Poly1305.toUpperCase():
                                            f = D;
                                            break;
                                        case p.DesCBC.toUpperCase():
                                            f = E;
                                            break;
                                        case p.DesEdeCBC.toUpperCase():
                                            f = _;
                                            break;
                                        default:
                                            throw new a(a.UNSUPPORTED_ALGORITHM, h.name)
                                    }
                                    f.importKey(e, r, h, n, o).then(i, c)
                                })
                            },
                            e.prototype.wrapKey = function(e, r, t, n) {
                                return new Promise(function(o, i) {
                                    var c = s(n),
                                        h = u;
                                    switch (c.name.toUpperCase()) {
                                        case p.RsaOAEP.toUpperCase():
                                            h = Y;
                                            break;
                                        case p.AesECB.toUpperCase():
                                            h = g;
                                            break;
                                        case p.AesCBC.toUpperCase():
                                            h = v;
                                            break;
                                        case p.AesCTR.toUpperCase():
                                            h = C;
                                            break;
                                        case p.AesGCM.toUpperCase():
                                            h = d;
                                            break;
                                        case p.AesKW.toUpperCase():
                                            h = b;
                                            break;
                                        case p.DesCBC.toUpperCase():
                                            h = E;
                                            break;
                                        case p.DesEdeCBC.toUpperCase():
                                            h = _;
                                            break;
                                        default:
                                            throw new a(a.UNSUPPORTED_ALGORITHM, c.name)
                                    }
                                    h.wrapKey(e, r, t, c).then(o, i)
                                })
                            },
                            e.prototype.unwrapKey = function(e, r, t, n, o, i, h) {
                                return new Promise(function(f, l) {
                                    var y = s(n),
                                        m = s(o),
                                        w = c(r, "wrappedKey"),
                                        A = u;
                                    switch (y.name.toUpperCase()) {
                                        case p.RsaOAEP.toUpperCase():
                                            A = Y;
                                            break;
                                        case p.AesECB.toUpperCase():
                                            A = g;
                                            break;
                                        case p.AesCBC.toUpperCase():
                                            A = v;
                                            break;
                                        case p.AesCTR.toUpperCase():
                                            A = C;
                                            break;
                                        case p.AesGCM.toUpperCase():
                                            A = d;
                                            break;
                                        case p.AesKW.toUpperCase():
                                            A = b;
                                            break;
                                        case p.DesCBC.toUpperCase():
                                            A = E;
                                            break;
                                        case p.DesEdeCBC.toUpperCase():
                                            A = _;
                                            break;
                                        default:
                                            throw new a(a.UNSUPPORTED_ALGORITHM, y.name)
                                    }
                                    A.unwrapKey(e, w, t, y, m, i, h).then(f, l)
                                })
                            },
                            e
                    }()
            }
            .call(this, t(13))
    },
    function(e, r, t) {
        "use strict";
        var n, o = this && this.__extends || (n = function(e, r) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, r) {
                        e.__proto__ = r
                    } || function(e, r) {
                        for (var t in r)
                            r.hasOwnProperty(t) && (e[t] = r[t])
                    }
                )(e, r)
            },
            function(e, r) {
                function t() {
                    this.constructor = e
                }
                n(e, r),
                    e.prototype = null === r ? Object.create(r) : (t.prototype = r.prototype,
                        new t)
            }
        );
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var a = function(e) {
            function r() {
                var r = null !== e && e.apply(this, arguments) || this;
                return r.code = 10,
                    r
            }
            return o(r, e),
                r.MODULE_NOT_FOUND = "Module '%1' is not found. Download it from %2",
                r.UNSUPPORTED_ALGORITHM = "Unsupported algorithm '%1'",
                r
        }(t(1).WebCryptoError);
        r.LinerError = a
    },
    function(e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = t(15),
            o = t(4),
            a = function() {
                function e() {
                    this.subtle = new n.SubtleCrypto
                }
                return e.prototype.getRandomValues = function(e) {
                        return o.nativeCrypto.getRandomValues(e)
                    },
                    e
            }();
        r.Crypto = a
    },
    function(e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n, o = t(2);
        if ("undefined" == typeof self) {
            // var a = t(14);
            n = {
                crypto: {
                    subtle: {},
                    getRandomValues: function(e) {
                        // var r = e.buffer
                        //   , t = new Uint8Array(r);
                        // return a.randomBytes(t.length).forEach(function(e, r) {
                        //     return t[r] = e
                        // }),
                        // e
                    }
                }
            }
        } else
            n = self;
        r.nativeCrypto = n.msCrypto || n.crypto || {},
            r.nativeSubtle = null;
        try {
            r.nativeSubtle = r.nativeCrypto.subtle || r.nativeCrypto.webkitSubtle
        } catch (e) {}

        function i(e, r) {
            var t = e[r];
            e[r] = function() {
                var n = arguments;
                return new Promise(function(o, a) {
                    var i = t.apply(e, n);
                    i.oncomplete = function(e) {
                            o(e.target.result)
                        },
                        i.onerror = function(e) {
                            a("Error on running '" + r + "' function")
                        }
                })
            }
        }
        if (n.msCrypto) {
            if (!n.Promise)
                throw new o.LinerError(o.LinerError.MODULE_NOT_FOUND, "Promise", "https://www.promisejs.org");
            i(r.nativeSubtle, "generateKey"),
                i(r.nativeSubtle, "digest"),
                i(r.nativeSubtle, "sign"),
                i(r.nativeSubtle, "verify"),
                i(r.nativeSubtle, "encrypt"),
                i(r.nativeSubtle, "decrypt"),
                i(r.nativeSubtle, "importKey"),
                i(r.nativeSubtle, "exportKey"),
                i(r.nativeSubtle, "wrapKey"),
                i(r.nativeSubtle, "unwrapKey"),
                i(r.nativeSubtle, "deriveKey"),
                i(r.nativeSubtle, "deriveBits")
        }
        Math.imul || (Math.imul = function(e, r) {
            var t = 65535 & e,
                n = 65535 & r;
            return t * n + ((e >>> 16 & 65535) * n + t * (r >>> 16 & 65535) << 16 >>> 0) | 0
        })
    },
    function(e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
                value: !0
            }),
            r.Browser = {
                IE: "Internet Explorer",
                Safari: "Safari",
                Edge: "Edge",
                Chrome: "Chrome",
                Firefox: "Firefox Mozilla",
                Mobile: "Mobile"
            },
            r.BrowserInfo = function() {
                var e, t = {
                        name: "Unknown",
                        version: "0"
                    },
                    n = self.navigator.userAgent;
                return (e = /edge\/([\d\.]+)/i.exec(n)) ? (t.name = r.Browser.Edge,
                        t.version = e[1]) : /msie/i.test(n) ? (t.name = r.Browser.IE,
                        t.version = /msie ([\d\.]+)/i.exec(n)[1]) : /Trident/i.test(n) ? (t.name = r.Browser.IE,
                        t.version = /rv:([\d\.]+)/i.exec(n)[1]) : /chrome/i.test(n) ? (t.name = r.Browser.Chrome,
                        t.version = /chrome\/([\d\.]+)/i.exec(n)[1]) : /firefox/i.test(n) ? (t.name = r.Browser.Firefox,
                        t.version = /firefox\/([\d\.]+)/i.exec(n)[1]) : /mobile/i.test(n) ? (t.name = r.Browser.Mobile,
                        t.version = /mobile\/([\w]+)/i.exec(n)[1]) : /safari/i.test(n) && (t.name = r.Browser.Safari,
                        t.version = /version\/([\d\.]+)/i.exec(n)[1]),
                    t
            },
            r.string2buffer = function(e) {
                for (var r = new Uint8Array(e.length), t = 0; t < e.length; t++)
                    r[t] = e.charCodeAt(t);
                return r
            },
            r.buffer2string = function(e) {
                for (var r = "", t = 0; t < e.length; t++)
                    r += String.fromCharCode(e[t]);
                return r
            },
            r.concat = function() {
                for (var e = [], r = 0; r < arguments.length; r++)
                    e[r] = arguments[r];
                var t = new Uint8Array(e.map(function(e) {
                        return e.length
                    }).reduce(function(e, r) {
                        return e + r
                    })),
                    n = 0;
                return e.forEach(function(e, r) {
                        for (var o = 0; o < e.length; o++)
                            t[n + o] = e[o];
                        n += e.length
                    }),
                    t
            },
            r.assign = function(e) {
                for (var r = [], t = 1; t < arguments.length; t++)
                    r[t - 1] = arguments[t];
                for (var n = arguments[0], o = 1; o < arguments.length; o++) {
                    var a = arguments[o];
                    for (var i in a)
                        n[i] = a[i]
                }
                return n
            },
            r.warn = function(e) {
                for (var r = [], t = 1; t < arguments.length; t++)
                    r[t - 1] = arguments[t];
                "undefined" != typeof self && self.PV_WEBCRYPTO_LINER_LOG && console.warn.apply(console, arguments)
            }
    },
    function(e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = function() {
            function e(e) {
                this.algorithm = e.algorithm,
                    e.type && (this.type = e.type),
                    this.extractable = e.extractable,
                    this.usages = e.usages
            }
            return e.prototype.copy = function(r) {
                    var t = new e({
                        algorithm: this.algorithm,
                        type: this.type,
                        extractable: this.extractable,
                        usages: r
                    });
                    return t.key = this.key,
                        t
                },
                e
        }();
        r.CryptoKey = n
    },
    function(e, r) {
        function t(e, r) {
            if (!e)
                throw new Error(r || "Assertion failed")
        }
        e.exports = t,
            t.equal = function(e, r, t) {
                if (e != r)
                    throw new Error(t || "Assertion failed: " + e + " != " + r)
            }
    },
    function(e, r, t) {
        "use strict";
        r.utils = t(20),
            r.Cipher = t(21),
            r.DES = t(22),
            r.CBC = t(23),
            r.EDE = t(24)
    },
    function(e, r) {
        "function" == typeof Object.create ? e.exports = function(e, r) {
            e.super_ = r,
                e.prototype = Object.create(r.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })
        } : e.exports = function(e, r) {
            e.super_ = r;
            var t = function() {};
            t.prototype = r.prototype,
                e.prototype = new t,
                e.prototype.constructor = e
        }
    },
    function(e, r, t) {
        "use strict";
        var n, o = this && this.__extends || (n = function(e, r) {
                    return (n = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, r) {
                            e.__proto__ = r
                        } || function(e, r) {
                            for (var t in r)
                                r.hasOwnProperty(t) && (e[t] = r[t])
                        }
                    )(e, r)
                },
                function(e, r) {
                    function t() {
                        this.constructor = e
                    }
                    n(e, r),
                        e.prototype = null === r ? Object.create(r) : (t.prototype = r.prototype,
                            new t)
                }
            ),
            a = this && this.__awaiter || function(e, r, t, n) {
                return new(t || (t = Promise))(function(o, a) {
                    function i(e) {
                        try {
                            c(n.next(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function s(e) {
                        try {
                            c(n.throw(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function c(e) {
                        e.done ? o(e.value) : new t(function(r) {
                            r(e.value)
                        }).then(i, s)
                    }
                    c((n = n.apply(e, r || [])).next())
                })
            },
            i = this && this.__generator || function(e, r) {
                var t, n, o, a, i = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0])
                            throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                        next: s(0),
                        throw :s(1),
                        return :s(2)
                    },
                    "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }),
                    a;

                function s(a) {
                    return function(s) {
                        return function(a) {
                            if (t)
                                throw new TypeError("Generator is already executing.");
                            for (; i;)
                                try {
                                    if (t = 1,
                                        n && (o = 2 & a[0] ? n.return : a[0] ? n.throw || ((o = n.return) && o.call(n),
                                            0) : n.next) && !(o = o.call(n, a[1])).done)
                                        return o;
                                    switch (n = 0,
                                        o && (a = [2 & a[0], o.value]),
                                        a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: a[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++,
                                                n = a[1],
                                                a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop(),
                                                i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                i.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && i.label < o[1]) {
                                                i.label = o[1],
                                                    o = a;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2],
                                                    i.ops.push(a);
                                                break
                                            }
                                            o[2] && i.ops.pop(),
                                                i.trys.pop();
                                            continue
                                    }
                                    a = r.call(e, i)
                                } catch (e) {
                                    a = [6, e],
                                        n = 0
                                } finally {
                                    t = o = 0
                                }
                            if (5 & a[0])
                                throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, s])
                    }
                }
            };
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = t(1),
            c = t(2),
            u = t(6),
            p = t(5),
            h = t(4),
            f = t(3),
            l = function(e) {
                function r() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o(r, e),
                    r.generateKey = function(e, r, t) {
                        var n = this;
                        return Promise.resolve().then(function() {
                            n.checkModule();
                            var o = h.nativeCrypto.getRandomValues(new Uint8Array(e.length / 8)),
                                a = new u.CryptoKey({
                                    type: "secret",
                                    algorithm: e,
                                    extractable: r,
                                    usages: t
                                });
                            return a.key = o,
                                a
                        })
                    },
                    r.encrypt = function(e, r, t) {
                        return Promise.resolve().then(function() {
                            var n;
                            switch (e.name.toUpperCase()) {
                                case s.AlgorithmNames.AesECB:
                                    var o = e;
                                    n = asmCrypto.AES_ECB.encrypt(t, r.key, !!o.padding);
                                    break;
                                case s.AlgorithmNames.AesCBC:
                                    var a = e;
                                    n = asmCrypto.AES_CBC.encrypt(t, r.key, void 0, s.PrepareData(a.iv, "iv"));
                                    break;
                                case s.AlgorithmNames.AesGCM:
                                    var i = e;
                                    i.tagLength = i.tagLength || 128;
                                    var u = void 0;
                                    i.additionalData && (u = s.PrepareData(i.additionalData, "additionalData")),
                                        n = asmCrypto.AES_GCM.encrypt(t, r.key, i.iv, u, i.tagLength / 8);
                                    break;
                                default:
                                    throw new c.LinerError(s.AlgorithmError.UNSUPPORTED_ALGORITHM, e.name)
                            }
                            return n.buffer
                        })
                    },
                    r.decrypt = function(e, r, t) {
                        return Promise.resolve().then(function() {
                            var n;
                            switch (e.name.toUpperCase()) {
                                case s.AlgorithmNames.AesECB:
                                    var o = e;
                                    n = asmCrypto.AES_ECB.decrypt(t, r.key, !!o.padding);
                                    break;
                                case s.AlgorithmNames.AesCBC:
                                    var a = e;
                                    n = asmCrypto.AES_CBC.decrypt(t, r.key, void 0, s.PrepareData(a.iv, "iv"));
                                    break;
                                case s.AlgorithmNames.AesGCM:
                                    var i = e;
                                    i.tagLength = i.tagLength || 128;
                                    var u = void 0;
                                    i.additionalData && (u = s.PrepareData(i.additionalData, "additionalData")),
                                        n = asmCrypto.AES_GCM.decrypt(t, r.key, i.iv, u, i.tagLength / 8);
                                    break;
                                default:
                                    throw new c.LinerError(s.AlgorithmError.UNSUPPORTED_ALGORITHM, e.name)
                            }
                            return n.buffer
                        })
                    },
                    r.wrapKey = function(e, r, t, n) {
                        var o;
                        return Promise.resolve().then(function() {
                            return (o = new f.Crypto).subtle.exportKey(e, r)
                        }).then(function(e) {
                            var r;
                            r = e instanceof ArrayBuffer ? new Uint8Array(e) : p.string2buffer(JSON.stringify(e));
                            var a = t.copy(["encrypt"]);
                            return o.subtle.encrypt(n, a, r)
                        })
                    },
                    r.unwrapKey = function(e, r, t, n, o, a, i) {
                        var s;
                        return Promise.resolve().then(function() {
                            s = new f.Crypto;
                            var e = t.copy(["decrypt"]);
                            return s.subtle.decrypt(n, e, r)
                        }).then(function(r) {
                            var t;
                            return t = "jwk" === e.toLowerCase() ? JSON.parse(p.buffer2string(new Uint8Array(r))) : new Uint8Array(r),
                                s.subtle.importKey(e, t, o, a, i)
                        })
                    },
                    r.alg2jwk = function(e) {
                        return "A" + e.length + /-(\w+)/i.exec(e.name.toUpperCase())[1]
                    },
                    r.jwk2alg = function(e) {
                        throw new Error("Not implemented")
                    },
                    r.exportKey = function(e, r) {
                        var t = this;
                        return Promise.resolve().then(function() {
                            var n = r.key;
                            return "jwk" === e.toLowerCase() ? {
                                alg: t.alg2jwk(r.algorithm),
                                ext: r.extractable,
                                k: s.Base64Url.encode(n),
                                key_ops: r.usages,
                                kty: "oct"
                            } : n.buffer
                        })
                    },
                    r.importKey = function(e, r, t, n, o) {
                        return a(this, void 0, void 0, function() {
                            var a, c, p;
                            return i(this, function(i) {
                                return "jwk" === e.toLowerCase() ? (c = r,
                                    a = s.Base64Url.decode(c.k)) : a = new Uint8Array(r), (p = new u.CryptoKey({
                                    type: "secret",
                                    algorithm: t,
                                    extractable: n,
                                    usages: o
                                })).key = a, [2, p]
                            })
                        })
                    },
                    r.checkModule = function() {
                        if ("undefined" == typeof asmCrypto)
                            throw new c.LinerError(c.LinerError.MODULE_NOT_FOUND, "asmCrypto", "https://github.com/vibornoff/asmcrypto.js")
                    },
                    r
            }(s.BaseCrypto);
        r.AesCrypto = l
    },
    function(e, r, t) {
        "use strict";
        var n, o = this && this.__extends || (n = function(e, r) {
                    return (n = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, r) {
                            e.__proto__ = r
                        } || function(e, r) {
                            for (var t in r)
                                r.hasOwnProperty(t) && (e[t] = r[t])
                        }
                    )(e, r)
                },
                function(e, r) {
                    function t() {
                        this.constructor = e
                    }
                    n(e, r),
                        e.prototype = null === r ? Object.create(r) : (t.prototype = r.prototype,
                            new t)
                }
            ),
            a = this && this.__awaiter || function(e, r, t, n) {
                return new(t || (t = Promise))(function(o, a) {
                    function i(e) {
                        try {
                            c(n.next(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function s(e) {
                        try {
                            c(n.throw(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function c(e) {
                        e.done ? o(e.value) : new t(function(r) {
                            r(e.value)
                        }).then(i, s)
                    }
                    c((n = n.apply(e, r || [])).next())
                })
            },
            i = this && this.__generator || function(e, r) {
                var t, n, o, a, i = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0])
                            throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                        next: s(0),
                        throw :s(1),
                        return :s(2)
                    },
                    "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }),
                    a;

                function s(a) {
                    return function(s) {
                        return function(a) {
                            if (t)
                                throw new TypeError("Generator is already executing.");
                            for (; i;)
                                try {
                                    if (t = 1,
                                        n && (o = 2 & a[0] ? n.return : a[0] ? n.throw || ((o = n.return) && o.call(n),
                                            0) : n.next) && !(o = o.call(n, a[1])).done)
                                        return o;
                                    switch (n = 0,
                                        o && (a = [2 & a[0], o.value]),
                                        a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: a[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++,
                                                n = a[1],
                                                a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop(),
                                                i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                i.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && i.label < o[1]) {
                                                i.label = o[1],
                                                    o = a;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2],
                                                    i.ops.push(a);
                                                break
                                            }
                                            o[2] && i.ops.pop(),
                                                i.trys.pop();
                                            continue
                                    }
                                    a = r.call(e, i)
                                } catch (e) {
                                    a = [6, e],
                                        n = 0
                                } finally {
                                    t = o = 0
                                }
                            if (5 & a[0])
                                throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, s])
                    }
                }
            };
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = t(1),
            c = t(2),
            u = t(6),
            p = t(5),
            h = t(4),
            f = t(3),
            l = t(8),
            y = function(e) {
                function r() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o(r, e),
                    r.generateKey = function(e, r, t) {
                        return Promise.resolve().then(function() {
                            var n = h.nativeCrypto.getRandomValues(new Uint8Array(e.length >> 3)),
                                o = new u.CryptoKey({
                                    type: "secret",
                                    algorithm: e,
                                    extractable: r,
                                    usages: t
                                });
                            return o.key = n,
                                o
                        })
                    },
                    r.encrypt = function(e, r, t) {
                        return a(this, void 0, void 0, function() {
                            var n, o, a;
                            return i(this, function(i) {
                                switch (o = s.PrepareData(e.iv, "iv"),
                                    e.name.toUpperCase()) {
                                    case s.AlgorithmNames.DesCBC.toUpperCase():
                                        n = l.CBC.instantiate(l.DES).create({
                                            key: r.key,
                                            type: "encrypt",
                                            iv: o
                                        });
                                        break;
                                    case s.AlgorithmNames.DesEdeCBC.toUpperCase():
                                        n = l.CBC.instantiate(l.EDE).create({
                                            key: r.key,
                                            type: "encrypt",
                                            iv: o
                                        });
                                        break;
                                    default:
                                        throw new c.LinerError(s.AlgorithmError.UNSUPPORTED_ALGORITHM, e.name)
                                }
                                return a = n.update(t).concat(n.final()), [2, new Uint8Array(a).buffer]
                            })
                        })
                    },
                    r.decrypt = function(e, r, t) {
                        return a(this, void 0, void 0, function() {
                            var n, o, a;
                            return i(this, function(i) {
                                switch (o = s.PrepareData(e.iv, "iv"),
                                    e.name.toUpperCase()) {
                                    case s.AlgorithmNames.DesCBC.toUpperCase():
                                        n = l.CBC.instantiate(l.DES).create({
                                            key: r.key,
                                            type: "decrypt",
                                            iv: o
                                        });
                                        break;
                                    case s.AlgorithmNames.DesEdeCBC.toUpperCase():
                                        n = l.CBC.instantiate(l.EDE).create({
                                            key: r.key,
                                            type: "decrypt",
                                            iv: o
                                        });
                                        break;
                                    default:
                                        throw new c.LinerError(s.AlgorithmError.UNSUPPORTED_ALGORITHM, e.name)
                                }
                                return a = n.update(t).concat(n.final()), [2, new Uint8Array(a).buffer]
                            })
                        })
                    },
                    r.wrapKey = function(e, r, t, n) {
                        return a(this, void 0, void 0, function() {
                            var o, a;
                            return i(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, (new f.Crypto).subtle.exportKey(e, r)];
                                    case 1:
                                        return o = i.sent(),
                                            a = o instanceof ArrayBuffer ? new Uint8Array(o) : p.string2buffer(JSON.stringify(o)), [2, this.encrypt(n, t, a)]
                                }
                            })
                        })
                    },
                    r.unwrapKey = function(e, r, t, n, o, s, c) {
                        return a(this, void 0, void 0, function() {
                            var a, u, h, l;
                            return i(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return a = new f.Crypto,
                                            u = t.copy(["decrypt"]), [4, a.subtle.decrypt(n, u, r)];
                                    case 1:
                                        return h = i.sent(),
                                            l = "jwk" === e.toLowerCase() ? JSON.parse(p.buffer2string(new Uint8Array(h))) : new Uint8Array(h), [2, this.importKey(e, l, o, s, c)]
                                }
                            })
                        })
                    },
                    r.alg2jwk = function(e) {
                        return "D" + e.length + /-(\w+)/i.exec(e.name.toUpperCase())[1]
                    },
                    r.jwk2alg = function(e) {
                        throw new Error("Not implemented")
                    },
                    r.exportKey = function(e, r) {
                        var t = this;
                        return Promise.resolve().then(function() {
                            var n = r.key;
                            return "jwk" === e.toLowerCase() ? {
                                alg: t.alg2jwk(r.algorithm),
                                ext: r.extractable,
                                k: s.Base64Url.encode(n),
                                key_ops: r.usages,
                                kty: "oct"
                            } : n.buffer
                        })
                    },
                    r.importKey = function(e, r, t, n, o) {
                        return a(this, void 0, void 0, function() {
                            var a, c, p;
                            return i(this, function(i) {
                                return "jwk" === e.toLowerCase() ? (c = r,
                                    a = s.Base64Url.decode(c.k)) : a = new Uint8Array(r), (p = new u.CryptoKey({
                                    type: "secret",
                                    algorithm: t,
                                    extractable: n,
                                    usages: o
                                })).key = a, [2, p]
                            })
                        })
                    },
                    r
            }(s.BaseCrypto);
        r.DesCrypto = y
    },
    function(e, r, t) {
        "use strict";

        function n(e) {
            for (var t in e)
                r.hasOwnProperty(t) || (r[t] = e[t])
        }
        Object.defineProperty(r, "__esModule", {
                value: !0
            }),
            n(t(4)),
            n(t(3))
    },
    function(e, r) {
        var t;
        t = function() {
            return this
        }();
        try {
            t = t || new Function("return this")()
        } catch (e) {
            "object" == typeof window && (t = window)
        }
        e.exports = t
    },
    function(e, r) {
        e.exports = require("crypto")
    },
    function(e, r, t) {
        "use strict";
        var n, o = this && this.__extends || (n = function(e, r) {
                    return (n = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, r) {
                            e.__proto__ = r
                        } || function(e, r) {
                            for (var t in r)
                                r.hasOwnProperty(t) && (e[t] = r[t])
                        }
                    )(e, r)
                },
                function(e, r) {
                    function t() {
                        this.constructor = e
                    }
                    n(e, r),
                        e.prototype = null === r ? Object.create(r) : (t.prototype = r.prototype,
                            new t)
                }
            ),
            a = this && this.__awaiter || function(e, r, t, n) {
                return new(t || (t = Promise))(function(o, a) {
                    function i(e) {
                        try {
                            c(n.next(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function s(e) {
                        try {
                            c(n.throw(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function c(e) {
                        e.done ? o(e.value) : new t(function(r) {
                            r(e.value)
                        }).then(i, s)
                    }
                    c((n = n.apply(e, r || [])).next())
                })
            },
            i = this && this.__generator || function(e, r) {
                var t, n, o, a, i = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0])
                            throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                        next: s(0),
                        throw :s(1),
                        return :s(2)
                    },
                    "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }),
                    a;

                function s(a) {
                    return function(s) {
                        return function(a) {
                            if (t)
                                throw new TypeError("Generator is already executing.");
                            for (; i;)
                                try {
                                    if (t = 1,
                                        n && (o = 2 & a[0] ? n.return : a[0] ? n.throw || ((o = n.return) && o.call(n),
                                            0) : n.next) && !(o = o.call(n, a[1])).done)
                                        return o;
                                    switch (n = 0,
                                        o && (a = [2 & a[0], o.value]),
                                        a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: a[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++,
                                                n = a[1],
                                                a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop(),
                                                i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                i.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && i.label < o[1]) {
                                                i.label = o[1],
                                                    o = a;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2],
                                                    i.ops.push(a);
                                                break
                                            }
                                            o[2] && i.ops.pop(),
                                                i.trys.pop();
                                            continue
                                    }
                                    a = r.call(e, i)
                                } catch (e) {
                                    a = [6, e],
                                        n = 0
                                } finally {
                                    t = o = 0
                                }
                            if (5 & a[0])
                                throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, s])
                    }
                }
            };
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = t(1),
            c = t(1),
            u = t(1),
            p = t(4),
            h = t(3),
            f = t(2),
            l = t(5),
            y = t(10),
            m = t(16),
            w = t(17),
            A = t(18),
            g = t(19),
            v = t(11),
            C = [];

        function d(e, r) {
            return Promise.resolve().then(function() {
                if (e.key)
                    return e;
                if (e.extractable)
                    return (new h.Crypto).subtle.exportKey("jwk", e).then(function(t) {
                        var n = E(e);
                        return n && (n = l.assign(n, e.algorithm)),
                            r.importKey("jwk", t, n, !0, e.usages)
                    });
                throw new f.LinerError("'key' is Native CryptoKey. It can't be converted to JS CryptoKey")
            })
        }
        var b = function(e) {
            function r() {
                return null !== e && e.apply(this, arguments) || this
            }
            return o(r, e),
                r.prototype.generateKey = function(r, t, n) {
                    var o, a = this,
                        i = arguments;
                    return e.prototype.generateKey.apply(this, i).then(function(e) {
                        if (o = u.PrepareAlgorithm(r), !(l.BrowserInfo().name === l.Browser.Edge && o.name.toUpperCase() === s.AlgorithmNames.AesGCM || P(o.name)) && p.nativeSubtle)
                            try {
                                return p.nativeSubtle.generateKey.apply(p.nativeSubtle, i).catch(function(e) {
                                    l.warn("WebCrypto: native generateKey for " + o.name + " doesn't work.", e && e.message || "Unknown message")
                                })
                            } catch (e) {
                                l.warn("WebCrypto: native generateKey for " + o.name + " doesn't work.", e && e.message || "Unknown message")
                            }
                    }).then(function(e) {
                        if (e) {
                            var i = Promise.resolve(e);
                            if (l.BrowserInfo().name === l.Browser.Safari && (o.name.toUpperCase() === s.AlgorithmNames.EcDH.toUpperCase() || o.name.toUpperCase() === s.AlgorithmNames.EcDSA.toUpperCase())) {
                                var c = e.publicKey;
                                i = i.then(function() {
                                    return a.exportKey("jwk", c).then(function(o) {
                                        return a.exportKey("spki", c).then(function(i) {
                                            for (var c = s.Base64Url.decode(o.x), u = s.Base64Url.decode(o.y), p = c.length + u.length, h = new Uint8Array(i), f = 0; f < p; f++) {
                                                if (h[h.length - f - 1] !== (f < u.length ? u[u.length - f - 1] : c[c.length + u.length - f - 1]))
                                                    return l.warn("WebCrypto: EC key has wrong public key JWK. Key pair will be recreated"),
                                                        a.generateKey(r, t, n)
                                            }
                                            return e
                                        })
                                    })
                                })
                            }
                            return i.then(function(e) {
                                return _(e, n),
                                    k(o, e),
                                    e
                            })
                        }
                        var u;
                        switch (o.name.toLowerCase()) {
                            case s.AlgorithmNames.AesECB.toLowerCase():
                            case s.AlgorithmNames.AesCBC.toLowerCase():
                            case s.AlgorithmNames.AesGCM.toLowerCase():
                                u = y.AesCrypto;
                                break;
                            case s.AlgorithmNames.EcDSA.toLowerCase():
                            case s.AlgorithmNames.EcDH.toLowerCase():
                                u = A.EcCrypto;
                                break;
                            case s.AlgorithmNames.RsaOAEP.toLowerCase():
                            case s.AlgorithmNames.RsaPSS.toLowerCase():
                            case s.AlgorithmNames.RsaSSA.toLowerCase():
                                u = w.RsaCrypto;
                                break;
                            case s.AlgorithmNames.DesCBC.toLowerCase():
                            case s.AlgorithmNames.DesEdeCBC.toLowerCase():
                                u = v.DesCrypto;
                                break;
                            default:
                                throw new f.LinerError(f.LinerError.UNSUPPORTED_ALGORITHM, o.name.toLowerCase())
                        }
                        return u.generateKey(o, t, n)
                    })
                },
                r.prototype.digest = function(r, t) {
                    var n, o, a = arguments;
                    return e.prototype.digest.apply(this, a).then(function(e) {
                        if (n = u.PrepareAlgorithm(r),
                            o = u.PrepareData(t, "data"),
                            p.nativeSubtle)
                            try {
                                return p.nativeSubtle.digest.apply(p.nativeSubtle, a).catch(function(e) {
                                    l.warn("WebCrypto: native digest for " + n.name + " doesn't work.", e && e.message || "Unknown message")
                                })
                            } catch (e) {
                                l.warn("WebCrypto: native digest for " + n.name + " doesn't work.", e && e.message || "Unknown message")
                            }
                    }).then(function(e) {
                        return e || m.ShaCrypto.digest(n, o)
                    })
                },
                r.prototype.sign = function(r, t, n) {
                    var o, a, i = arguments;
                    return e.prototype.sign.apply(this, i).then(function(e) {
                        o = u.PrepareAlgorithm(r),
                            a = u.PrepareData(n, "data");
                        var s = E(t);
                        if (s && (i[0] = l.assign(o, s)),
                            p.nativeSubtle)
                            try {
                                return p.nativeSubtle.sign.apply(p.nativeSubtle, i).catch(function(e) {
                                    l.warn("WebCrypto: native sign for " + o.name + " doesn't work.", e && e.message || "Unknown message")
                                })
                            } catch (e) {
                                l.warn("WebCrypto: native sign for " + o.name + " doesn't work.", e && e.message || "Unknown message")
                            }
                    }).then(function(e) {
                        if (e)
                            return e;
                        var r;
                        switch (o.name.toLowerCase()) {
                            case s.AlgorithmNames.EcDSA.toLowerCase():
                            case s.AlgorithmNames.EdDSA.toLowerCase():
                                r = A.EcCrypto;
                                break;
                            case s.AlgorithmNames.RsaSSA.toLowerCase():
                            case s.AlgorithmNames.RsaPSS.toLowerCase():
                                r = w.RsaCrypto;
                                break;
                            default:
                                throw new f.LinerError(f.LinerError.UNSUPPORTED_ALGORITHM, o.name.toLowerCase())
                        }
                        return d(t, r).then(function(e) {
                            return r.sign(o, e, a)
                        })
                    })
                },
                r.prototype.verify = function(r, t, n, o) {
                    var a, i, c, h = arguments;
                    return e.prototype.verify.apply(this, h).then(function(e) {
                        a = u.PrepareAlgorithm(r),
                            i = u.PrepareData(n, "data"),
                            c = u.PrepareData(o, "data");
                        var s = E(t);
                        if (s && (h[0] = l.assign(a, s)),
                            p.nativeSubtle)
                            try {
                                return p.nativeSubtle.verify.apply(p.nativeSubtle, h).catch(function(e) {
                                    l.warn("WebCrypto: native verify for " + a.name + " doesn't work.", e && e.message || "Unknown message")
                                })
                            } catch (e) {
                                l.warn("WebCrypto: native verify for " + a.name + " doesn't work.", e && e.message || "Unknown message")
                            }
                    }).then(function(e) {
                        if ("boolean" == typeof e)
                            return e;
                        var r;
                        switch (a.name.toLowerCase()) {
                            case s.AlgorithmNames.EcDSA.toLowerCase():
                            case s.AlgorithmNames.EdDSA.toLowerCase():
                                r = A.EcCrypto;
                                break;
                            case s.AlgorithmNames.RsaSSA.toLowerCase():
                            case s.AlgorithmNames.RsaPSS.toLowerCase():
                                r = w.RsaCrypto;
                                break;
                            default:
                                throw new f.LinerError(f.LinerError.UNSUPPORTED_ALGORITHM, a.name.toLowerCase())
                        }
                        return d(t, r).then(function(e) {
                            return r.verify(a, e, i, c)
                        })
                    })
                },
                r.prototype.deriveBits = function(r, t, n) {
                    var o, a = arguments;
                    return e.prototype.deriveBits.apply(this, a).then(function(e) {
                        if (o = u.PrepareAlgorithm(r),
                            p.nativeSubtle)
                            try {
                                return p.nativeSubtle.deriveBits.apply(p.nativeSubtle, a).catch(function(e) {
                                    l.warn("WebCrypto: native deriveBits for " + o.name + " doesn't work.", e && e.message || "Unknown message")
                                })
                            } catch (e) {
                                l.warn("WebCrypto: native deriveBits for " + o.name + " doesn't work.", e && e.message || "Unknown message")
                            }
                    }).then(function(e) {
                        if (e)
                            return e;
                        var r;
                        switch (o.name.toLowerCase()) {
                            case s.AlgorithmNames.EcDH.toLowerCase():
                                r = A.EcCrypto;
                                break;
                            case s.AlgorithmNames.Pbkdf2.toLowerCase():
                                r = g.PbkdfCrypto;
                                break;
                            default:
                                throw new f.LinerError(f.LinerError.NOT_SUPPORTED, "deriveBits")
                        }
                        return r.deriveBits(o, t, n)
                    })
                },
                r.prototype.deriveKey = function(r, t, n, o, a) {
                    var i, c, h = arguments;
                    return e.prototype.deriveKey.apply(this, h).then(function(e) {
                        if (i = u.PrepareAlgorithm(r),
                            c = u.PrepareAlgorithm(n),
                            p.nativeSubtle)
                            try {
                                return p.nativeSubtle.deriveKey.apply(p.nativeSubtle, h).catch(function(e) {
                                    l.warn("WebCrypto: native deriveKey for " + i.name + " doesn't work.", e && e.message || "Unknown message")
                                })
                            } catch (e) {
                                l.warn("WebCrypto: native deriveKey for " + i.name + " doesn't work.", e && e.message || "Unknown message")
                            }
                    }).then(function(e) {
                        if (e)
                            return _(e, a),
                                e;
                        var r;
                        switch (i.name.toLowerCase()) {
                            case s.AlgorithmNames.EcDH.toLowerCase():
                                r = A.EcCrypto;
                                break;
                            case s.AlgorithmNames.Pbkdf2.toLowerCase():
                                r = g.PbkdfCrypto;
                                break;
                            default:
                                throw new f.LinerError(f.LinerError.NOT_SUPPORTED, "deriveBits")
                        }
                        return r.deriveKey(i, t, c, o, a)
                    })
                },
                r.prototype.encrypt = function(r, t, n) {
                    var o, a, i = arguments;
                    return e.prototype.encrypt.apply(this, i).then(function(e) {
                        if (o = u.PrepareAlgorithm(r),
                            a = u.PrepareData(n, "data"),
                            p.nativeSubtle)
                            try {
                                return p.nativeSubtle.encrypt.apply(p.nativeSubtle, i).catch(function(e) {
                                    l.warn("WebCrypto: native 'encrypt' for " + o.name + " doesn't work.", e && e.message || "Unknown message")
                                })
                            } catch (e) {
                                l.warn("WebCrypto: native 'encrypt' for " + o.name + " doesn't work.", e && e.message || "Unknown message")
                            }
                    }).then(function(e) {
                        if (e) {
                            if (l.BrowserInfo().name === l.Browser.IE && o.name.toUpperCase() === s.AlgorithmNames.AesGCM && e.ciphertext) {
                                var r = new Uint8Array(e.ciphertext.byteLength + e.tag.byteLength),
                                    n = 0;
                                new Uint8Array(e.ciphertext).forEach(function(e) {
                                        return r[n++] = e
                                    }),
                                    new Uint8Array(e.tag).forEach(function(e) {
                                        return r[n++] = e
                                    }),
                                    e = r.buffer
                            }
                            return Promise.resolve(e)
                        }
                        var i;
                        switch (o.name.toLowerCase()) {
                            case s.AlgorithmNames.AesECB.toLowerCase():
                            case s.AlgorithmNames.AesCBC.toLowerCase():
                            case s.AlgorithmNames.AesGCM.toLowerCase():
                                i = y.AesCrypto;
                                break;
                            case s.AlgorithmNames.RsaOAEP.toLowerCase():
                                i = w.RsaCrypto;
                                break;
                            case s.AlgorithmNames.DesCBC.toLowerCase():
                            case s.AlgorithmNames.DesEdeCBC.toLowerCase():
                                i = v.DesCrypto;
                                break;
                            default:
                                throw new f.LinerError(f.LinerError.NOT_SUPPORTED, "encrypt")
                        }
                        return d(t, i).then(function(e) {
                            return i.encrypt(o, e, a)
                        })
                    })
                },
                r.prototype.decrypt = function(r, t, n) {
                    var o, a, i = arguments;
                    return e.prototype.decrypt.apply(this, i).then(function(e) {
                        o = u.PrepareAlgorithm(r);
                        var i = a = u.PrepareData(n, "data");
                        if (l.BrowserInfo().name === l.Browser.IE && o.name.toUpperCase() === s.AlgorithmNames.AesGCM) {
                            var c = a.byteLength - o.tagLength / 8;
                            i = {
                                ciphertext: a.buffer.slice(0, c),
                                tag: a.buffer.slice(c, a.byteLength)
                            }
                        }
                        if (t.key) {
                            var h = void 0;
                            switch (o.name.toLowerCase()) {
                                case s.AlgorithmNames.AesECB.toLowerCase():
                                case s.AlgorithmNames.AesCBC.toLowerCase():
                                case s.AlgorithmNames.AesGCM.toLowerCase():
                                    h = y.AesCrypto;
                                    break;
                                case s.AlgorithmNames.RsaOAEP.toLowerCase():
                                    h = w.RsaCrypto;
                                    break;
                                case s.AlgorithmNames.DesCBC.toLowerCase():
                                case s.AlgorithmNames.DesEdeCBC.toLowerCase():
                                    h = v.DesCrypto;
                                    break;
                                default:
                                    throw new f.LinerError(f.LinerError.NOT_SUPPORTED, "decrypt")
                            }
                            return h.decrypt(o, t, a)
                        }
                        return p.nativeSubtle.decrypt.call(p.nativeSubtle, o, t, i)
                    })
                },
                r.prototype.wrapKey = function(r, t, n, o) {
                    var a, i = arguments;
                    return e.prototype.wrapKey.apply(this, i).then(function(e) {
                        if (a = u.PrepareAlgorithm(o),
                            p.nativeSubtle)
                            try {
                                return p.nativeSubtle.wrapKey.apply(p.nativeSubtle, i).catch(function(e) {
                                    l.warn("WebCrypto: native 'wrapKey' for " + a.name + " doesn't work.", e && e.message || "Unknown message")
                                })
                            } catch (e) {
                                l.warn("WebCrypto: native 'wrapKey' for " + a.name + " doesn't work.", e && e.message || "Unknown message")
                            }
                    }).then(function(e) {
                        if (e)
                            return e;
                        var o;
                        switch (a.name.toLowerCase()) {
                            case s.AlgorithmNames.AesECB.toLowerCase():
                            case s.AlgorithmNames.AesCBC.toLowerCase():
                            case s.AlgorithmNames.AesGCM.toLowerCase():
                                o = y.AesCrypto;
                                break;
                            case s.AlgorithmNames.RsaOAEP.toLowerCase():
                                o = w.RsaCrypto;
                                break;
                            case s.AlgorithmNames.DesCBC.toLowerCase():
                            case s.AlgorithmNames.DesEdeCBC.toLowerCase():
                                o = v.DesCrypto;
                                break;
                            default:
                                throw new f.LinerError(f.LinerError.NOT_SUPPORTED, "wrapKey")
                        }
                        return o.wrapKey(r, t, n, a)
                    })
                },
                r.prototype.unwrapKey = function(r, t, n, o, a, i, c) {
                    var h, m, A, g = this,
                        C = arguments;
                    return e.prototype.unwrapKey.apply(this, C).then(function(e) {
                        if (h = u.PrepareAlgorithm(o),
                            m = u.PrepareAlgorithm(a),
                            A = u.PrepareData(t, "wrappedKey"),
                            n.key) {
                            var d = void 0;
                            switch (h.name.toLowerCase()) {
                                case s.AlgorithmNames.AesECB.toLowerCase():
                                case s.AlgorithmNames.AesCBC.toLowerCase():
                                case s.AlgorithmNames.AesGCM.toLowerCase():
                                    d = y.AesCrypto;
                                    break;
                                case s.AlgorithmNames.RsaOAEP.toLowerCase():
                                    d = w.RsaCrypto;
                                    break;
                                case s.AlgorithmNames.DesCBC.toLowerCase():
                                case s.AlgorithmNames.DesEdeCBC.toLowerCase():
                                    d = v.DesCrypto;
                                    break;
                                default:
                                    throw new f.LinerError(f.LinerError.NOT_SUPPORTED, "unwrapKey")
                            }
                            return d.unwrapKey(r, A, n, h, m, i, c)
                        }
                        return p.nativeSubtle.unwrapKey.apply(p.nativeSubtle, C).catch(function(e) {
                            return g.decrypt(h, n, t).then(function(e) {
                                var t;
                                return t = "jwk" === r ? JSON.parse(l.buffer2string(new Uint8Array(e))) : e,
                                    g.importKey(r, t, m, i, c)
                            })
                        }).then(function(e) {
                            if (e)
                                return _(e, c),
                                    e
                        }).catch(function(e) {
                            throw console.error(e),
                                new Error("Cannot unwrap key from incoming data")
                        })
                    })
                },
                r.prototype.exportKey = function(r, t) {
                    var n = arguments;
                    return e.prototype.exportKey.apply(this, n).then(function() {
                        if (p.nativeSubtle)
                            try {
                                return p.nativeSubtle.exportKey.apply(p.nativeSubtle, n).catch(function(e) {
                                    l.warn("WebCrypto: native 'exportKey' for " + t.algorithm.name + " doesn't work.", e && e.message || "Unknown message")
                                })
                            } catch (e) {
                                l.warn("WebCrypto: native 'exportKey' for " + t.algorithm.name + " doesn't work.", e && e.message || "Unknown message")
                            }
                    }).then(function(e) {
                        if (e) {
                            "jwk" === r && e instanceof ArrayBuffer && (e = l.buffer2string(new Uint8Array(e)),
                                e = JSON.parse(e));
                            var n = E(t);
                            return n || (n = l.assign({}, t.algorithm)),
                                function(e, r, t) {
                                    if (r && l.BrowserInfo().name === l.Browser.IE) {
                                        "extractable" in e && (e.ext = e.extractable,
                                            delete e.extractable);
                                        var n = null;
                                        switch (r.name.toUpperCase()) {
                                            case s.AlgorithmNames.RsaOAEP.toUpperCase():
                                            case s.AlgorithmNames.RsaPSS.toUpperCase():
                                            case s.AlgorithmNames.RsaSSA.toUpperCase():
                                                n = w.RsaCrypto;
                                                break;
                                            case s.AlgorithmNames.AesECB.toUpperCase():
                                            case s.AlgorithmNames.AesCBC.toUpperCase():
                                            case s.AlgorithmNames.AesGCM.toUpperCase():
                                                n = y.AesCrypto;
                                                break;
                                            default:
                                                throw new f.LinerError(f.LinerError.UNSUPPORTED_ALGORITHM, r.name.toUpperCase())
                                        }
                                        n && !e.alg && (e.alg = n.alg2jwk(r)),
                                            "key_ops" in e || (e.key_ops = t)
                                    }
                                }(e, n, t.usages),
                                Promise.resolve(e)
                        }
                        if (!t.key)
                            throw new f.LinerError("Cannot export native CryptoKey from JS implementation");
                        var o;
                        switch (t.algorithm.name.toLowerCase()) {
                            case s.AlgorithmNames.AesECB.toLowerCase():
                            case s.AlgorithmNames.AesCBC.toLowerCase():
                            case s.AlgorithmNames.AesGCM.toLowerCase():
                                o = y.AesCrypto;
                                break;
                            case s.AlgorithmNames.EcDH.toLowerCase():
                            case s.AlgorithmNames.EcDSA.toLowerCase():
                                o = A.EcCrypto;
                                break;
                            case s.AlgorithmNames.RsaSSA.toLowerCase():
                            case s.AlgorithmNames.RsaPSS.toLowerCase():
                            case s.AlgorithmNames.RsaOAEP.toLowerCase():
                                o = w.RsaCrypto;
                                break;
                            case s.AlgorithmNames.Pbkdf2.toLowerCase():
                                o = g.PbkdfCrypto;
                                break;
                            case s.AlgorithmNames.DesCBC.toLowerCase():
                            case s.AlgorithmNames.DesEdeCBC.toLowerCase():
                                o = v.DesCrypto;
                                break;
                            default:
                                throw new f.LinerError(f.LinerError.UNSUPPORTED_ALGORITHM, t.algorithm.name.toLowerCase())
                        }
                        return o.exportKey(r, t)
                    })
                },
                r.prototype.importKey = function(r, t, n, o, c) {
                    return a(this, void 0, void 0, function() {
                        var a, h, m, C, d, b, E;
                        return i(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return a = {
                                        format: r,
                                        keyData: t,
                                        algorithm: n,
                                        extractable: o,
                                        keyUsages: c
                                    }, [4, e.prototype.importKey.call(this, r, t, n, o, c)];
                                case 1:
                                    if (i.sent(),
                                        m = u.PrepareAlgorithm(n),
                                        h = t,
                                        C = l.BrowserInfo(),
                                        "jwk" !== r || (C.name !== l.Browser.Safari || /^11/.test(C.version)) && C.name !== l.Browser.IE || (l.BrowserInfo().name === l.Browser.IE && (t = l.assign({}, t),
                                                U = t,
                                                l.BrowserInfo().name === l.Browser.IE && ("ext" in U && (U.extractable = U.ext,
                                                        delete U.ext),
                                                    delete U.key_ops,
                                                    delete U.alg)),
                                            a.keyData = l.string2buffer(JSON.stringify(t)).buffer),
                                        ArrayBuffer.isView(t) && (h = u.PrepareData(t, "keyData")),
                                        P(m.name))
                                        return [2];
                                    if (!p.nativeSubtle)
                                        return [3, 5];
                                    i.label = 2;
                                case 2:
                                    return i.trys.push([2, 4, , 5]), [4, p.nativeSubtle.importKey.call(p.nativeSubtle, a.format, a.keyData, a.algorithm, a.extractable, a.keyUsages)];
                                case 3:
                                    return d = i.sent(), [3, 5];
                                case 4:
                                    return b = i.sent(),
                                        l.warn("WebCrypto: native 'importKey' for " + m.name + " doesn't work.", b && b.message || "Unknown message"), [3, 5];
                                case 5:
                                    if (d)
                                        return k(m, d),
                                            _(d, c), [2, Promise.resolve(d)];
                                    switch (m.name.toLowerCase()) {
                                        case s.AlgorithmNames.AesECB.toLowerCase():
                                        case s.AlgorithmNames.AesCBC.toLowerCase():
                                        case s.AlgorithmNames.AesGCM.toLowerCase():
                                            E = y.AesCrypto;
                                            break;
                                        case s.AlgorithmNames.EcDH.toLowerCase():
                                        case s.AlgorithmNames.EdDSA.toLowerCase():
                                        case s.AlgorithmNames.EcDSA.toLowerCase():
                                            E = A.EcCrypto;
                                            break;
                                        case s.AlgorithmNames.RsaSSA.toLowerCase():
                                        case s.AlgorithmNames.RsaPSS.toLowerCase():
                                        case s.AlgorithmNames.RsaOAEP.toLowerCase():
                                            E = w.RsaCrypto;
                                            break;
                                        case s.AlgorithmNames.Pbkdf2.toLowerCase():
                                            E = g.PbkdfCrypto;
                                            break;
                                        case s.AlgorithmNames.DesCBC.toLowerCase():
                                        case s.AlgorithmNames.DesEdeCBC.toLowerCase():
                                            E = v.DesCrypto;
                                            break;
                                        default:
                                            throw new f.LinerError(f.LinerError.UNSUPPORTED_ALGORITHM, m.name.toLowerCase())
                                    }
                                    return [2, E.importKey(r, h, m, o, c)]
                            }
                            var U
                        })
                    })
                },
                r
        }(c.SubtleCrypto);

        function k(e, r) {
            l.BrowserInfo().name !== l.Browser.IE && l.BrowserInfo().name !== l.Browser.Edge && l.BrowserInfo().name !== l.Browser.Safari || !/^rsa/i.test(e.name) || (r.privateKey ? (C.push({
                    hash: e.hash,
                    key: r.privateKey
                }),
                C.push({
                    hash: e.hash,
                    key: r.publicKey
                })) : C.push({
                hash: e.hash,
                key: r
            }))
        }

        function E(e) {
            var r = null;
            return C.some(function(t) {
                    return t.key === e && (r = l.assign({}, e.algorithm, {
                        hash: t.hash
                    }), !0)
                }),
                r
        }

        function _(e, r) {
            var t = [];
            e.privateKey ? (t.push(e.privateKey),
                    t.push(e.publicKey)) : t.push(e),
                t.forEach(function(e) {
                    "keyUsage" in e && (e.usages = e.keyUsage || [],
                        e.usages.length || (["verify", "encrypt", "wrapKey"].forEach(function(t) {
                            r.indexOf(t) > -1 && ("public" === e.type || "secret" === e.type) && e.usages.push(t)
                        }), ["sign", "decrypt", "unwrapKey", "deriveKey", "deriveBits"].forEach(function(t) {
                            r.indexOf(t) > -1 && ("private" === e.type || "secret" === e.type) && e.usages.push(t)
                        })))
                })
        }

        function P(e) {
            var r = /AppleWebKit\/(\d+)/.exec(self.navigator.userAgent);
            return e.toUpperCase() === s.AlgorithmNames.RsaOAEP && r && parseInt(r[1], 10) < 604
        }
        r.SubtleCrypto = b,
            Uint8Array.prototype.forEach || (Uint8Array.prototype.forEach = function(e) {
                for (var r = 0; r < this.length; r++)
                    e(this[r], r, this)
            }),
            Uint8Array.prototype.slice || (Uint8Array.prototype.slice = function(e, r) {
                return new Uint8Array(this.buffer.slice(e, r))
            }),
            Uint8Array.prototype.filter || (Uint8Array.prototype.filter = function(e) {
                for (var r = [], t = 0; t < this.length; t++)
                    e(this[t], t, this) && r.push(this[t]);
                return new Uint8Array(r)
            })
    },
    function(e, r, t) {
        "use strict";
        var n, o = this && this.__extends || (n = function(e, r) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, r) {
                        e.__proto__ = r
                    } || function(e, r) {
                        for (var t in r)
                            r.hasOwnProperty(t) && (e[t] = r[t])
                    }
                )(e, r)
            },
            function(e, r) {
                function t() {
                    this.constructor = e
                }
                n(e, r),
                    e.prototype = null === r ? Object.create(r) : (t.prototype = r.prototype,
                        new t)
            }
        );
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var a = t(1),
            i = t(2),
            s = function(e) {
                function r() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o(r, e),
                    r.digest = function(e, r) {
                        return Promise.resolve().then(function() {
                            if ("undefined" == typeof asmCrypto)
                                throw new i.LinerError(i.LinerError.MODULE_NOT_FOUND, "asmCrypto", "https://github.com/vibornoff/asmcrypto.js");
                            switch (e.name.toUpperCase()) {
                                case a.AlgorithmNames.Sha1:
                                    return asmCrypto.SHA1.bytes(r).buffer;
                                case a.AlgorithmNames.Sha256:
                                    return asmCrypto.SHA256.bytes(r).buffer;
                                case a.AlgorithmNames.Sha512:
                                    return asmCrypto.SHA512.bytes(r).buffer;
                                default:
                                    throw new i.LinerError("Not supported algorithm '" + e.name + "'")
                            }
                        })
                    },
                    r
            }(a.BaseCrypto);
        r.ShaCrypto = s
    },
    function(e, r, t) {
        "use strict";
        var n, o = this && this.__extends || (n = function(e, r) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, r) {
                        e.__proto__ = r
                    } || function(e, r) {
                        for (var t in r)
                            r.hasOwnProperty(t) && (e[t] = r[t])
                    }
                )(e, r)
            },
            function(e, r) {
                function t() {
                    this.constructor = e
                }
                n(e, r),
                    e.prototype = null === r ? Object.create(r) : (t.prototype = r.prototype,
                        new t)
            }
        );
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var a = t(1),
            i = t(2),
            s = t(5),
            c = t(6),
            u = t(3);

        function p(e) {
            var r = !0;
            return e.filter(function(e) {
                return (!r || 0 !== e) && (r = !1, !0)
            })
        }
        var h = function(e) {
            function r() {
                return null !== e && e.apply(this, arguments) || this
            }
            return o(r, e),
                r.generateKey = function(e, r, t) {
                    var n = this;
                    return Promise.resolve().then(function() {
                        n.checkModule();
                        var o = 3 === e.publicExponent[0] ? 3 : 65537,
                            s = asmCrypto.RSA.generateKey(e.modulusLength, o),
                            u = new c.CryptoKey({
                                type: "private",
                                algorithm: e,
                                extractable: r,
                                usages: []
                            }),
                            p = new c.CryptoKey({
                                type: "public",
                                algorithm: e,
                                extractable: !0,
                                usages: []
                            });
                        switch (u.key = p.key = s,
                            e.name.toLowerCase()) {
                            case a.AlgorithmNames.RsaOAEP.toLowerCase():
                                u.usages = n.filterUsages(["decrypt", "unwrapKey"], t),
                                    p.usages = n.filterUsages(["encrypt", "wrapKey"], t);
                                break;
                            case a.AlgorithmNames.RsaSSA.toLowerCase():
                            case a.AlgorithmNames.RsaPSS.toLowerCase():
                                u.usages = n.filterUsages(["sign"], t),
                                    p.usages = n.filterUsages(["verify"], t);
                                break;
                            default:
                                throw new i.LinerError(i.LinerError.UNSUPPORTED_ALGORITHM, e.name)
                        }
                        return {
                            privateKey: u,
                            publicKey: p
                        }
                    })
                },
                r.sign = function(e, r, t) {
                    return Promise.resolve().then(function() {
                        switch (e.name.toLowerCase()) {
                            case a.AlgorithmNames.RsaSSA.toLowerCase():
                                var n = r.algorithm,
                                    o = e,
                                    s = void 0;
                                switch (n.hash.name.toUpperCase()) {
                                    case a.AlgorithmNames.Sha1:
                                        s = asmCrypto.RSA_PKCS1_v1_5_SHA1.sign;
                                        break;
                                    case a.AlgorithmNames.Sha256:
                                        s = asmCrypto.RSA_PKCS1_v1_5_SHA256.sign;
                                        break;
                                    case a.AlgorithmNames.Sha512:
                                        s = asmCrypto.RSA_PKCS1_v1_5_SHA512.sign;
                                        break;
                                    default:
                                        throw new i.LinerError(i.LinerError.UNSUPPORTED_ALGORITHM, r.algorithm.name)
                                }
                                return s(t, r.key).buffer;
                            case a.AlgorithmNames.RsaPSS.toLowerCase():
                                n = r.algorithm,
                                    o = e,
                                    s = void 0;
                                switch (n.hash.name.toUpperCase()) {
                                    case a.AlgorithmNames.Sha1:
                                        s = asmCrypto.RSA_PSS_SHA1.sign;
                                        break;
                                    case a.AlgorithmNames.Sha256:
                                        s = asmCrypto.RSA_PSS_SHA256.sign;
                                        break;
                                    case a.AlgorithmNames.Sha512:
                                        s = asmCrypto.RSA_PSS_SHA512.sign;
                                        break;
                                    default:
                                        throw new i.LinerError(i.LinerError.UNSUPPORTED_ALGORITHM, r.algorithm.name)
                                }
                                return s(t, r.key, o.saltLength).buffer;
                            default:
                                throw new i.LinerError(i.LinerError.UNSUPPORTED_ALGORITHM, e.name)
                        }
                    })
                },
                r.verify = function(e, r, t, n) {
                    return Promise.resolve().then(function() {
                        switch (e.name.toLowerCase()) {
                            case a.AlgorithmNames.RsaSSA.toLowerCase():
                                var o, s = r.algorithm;
                                switch (s.hash.name.toUpperCase()) {
                                    case a.AlgorithmNames.Sha1:
                                        o = asmCrypto.RSA_PKCS1_v1_5_SHA1.verify;
                                        break;
                                    case a.AlgorithmNames.Sha256:
                                        o = asmCrypto.RSA_PKCS1_v1_5_SHA256.verify;
                                        break;
                                    case a.AlgorithmNames.Sha512:
                                        o = asmCrypto.RSA_PKCS1_v1_5_SHA512.verify;
                                        break;
                                    default:
                                        throw new i.LinerError(i.LinerError.UNSUPPORTED_ALGORITHM, r.algorithm.name)
                                }
                                try {
                                    return o(t, n, r.key)
                                } catch (e) {
                                    return console.warn("Verify error: " + e.message), !1
                                }
                            case a.AlgorithmNames.RsaPSS.toLowerCase():
                                var c = r.algorithm,
                                    u = e,
                                    p = void 0;
                                switch (c.hash.name.toUpperCase()) {
                                    case a.AlgorithmNames.Sha1:
                                        p = asmCrypto.RSA_PSS_SHA1.verify;
                                        break;
                                    case a.AlgorithmNames.Sha256:
                                        p = asmCrypto.RSA_PSS_SHA256.verify;
                                        break;
                                    case a.AlgorithmNames.Sha512:
                                        p = asmCrypto.RSA_PSS_SHA512.verify;
                                        break;
                                    default:
                                        throw new i.LinerError(i.LinerError.UNSUPPORTED_ALGORITHM, r.algorithm.name)
                                }
                                try {
                                    return p(t, n, r.key, u.saltLength)
                                } catch (e) {
                                    return console.warn("Verify error: " + e.message), !1
                                }
                            default:
                                throw new i.LinerError(i.LinerError.UNSUPPORTED_ALGORITHM, e.name)
                        }
                    })
                },
                r.encrypt = function(e, r, t) {
                    return Promise.resolve().then(function() {
                        switch (e.name.toLowerCase()) {
                            case a.AlgorithmNames.RsaOAEP.toLowerCase():
                                var n = r.algorithm,
                                    o = e,
                                    s = void 0;
                                switch (n.hash.name.toUpperCase()) {
                                    case a.AlgorithmNames.Sha1:
                                        s = asmCrypto.RSA_OAEP_SHA1.encrypt;
                                        break;
                                    case a.AlgorithmNames.Sha256:
                                        s = asmCrypto.RSA_OAEP_SHA256.encrypt;
                                        break;
                                    case a.AlgorithmNames.Sha512:
                                        s = asmCrypto.RSA_OAEP_SHA512.encrypt;
                                        break;
                                    default:
                                        throw new i.LinerError(i.LinerError.UNSUPPORTED_ALGORITHM, n.name + " " + n.hash.name)
                                }
                                var c = void 0;
                                return o.label && (c = a.PrepareData(o.label, "label")),
                                    s(t, r.key, c);
                            default:
                                throw new i.LinerError(i.LinerError.UNSUPPORTED_ALGORITHM, e.name)
                        }
                    })
                },
                r.decrypt = function(e, r, t) {
                    return Promise.resolve().then(function() {
                        switch (e.name.toLowerCase()) {
                            case a.AlgorithmNames.RsaOAEP.toLowerCase():
                                var n = r.algorithm,
                                    o = e,
                                    s = void 0;
                                switch (n.hash.name.toUpperCase()) {
                                    case a.AlgorithmNames.Sha1:
                                        s = asmCrypto.RSA_OAEP_SHA1.decrypt;
                                        break;
                                    case a.AlgorithmNames.Sha256:
                                        s = asmCrypto.RSA_OAEP_SHA256.decrypt;
                                        break;
                                    case a.AlgorithmNames.Sha512:
                                        s = asmCrypto.RSA_OAEP_SHA512.decrypt;
                                        break;
                                    default:
                                        throw new i.LinerError(i.LinerError.UNSUPPORTED_ALGORITHM, n.name + " " + n.hash.name)
                                }
                                var c = void 0;
                                return o.label && (c = a.PrepareData(o.label, "label")),
                                    s(t, r.key, c);
                            default:
                                throw new i.LinerError(i.LinerError.UNSUPPORTED_ALGORITHM, e.name)
                        }
                    })
                },
                r.wrapKey = function(e, r, t, n) {
                    var o;
                    return Promise.resolve().then(function() {
                        return (o = new u.Crypto).subtle.exportKey(e, r)
                    }).then(function(e) {
                        var r;
                        r = e instanceof ArrayBuffer ? new Uint8Array(e) : s.string2buffer(JSON.stringify(e));
                        var a = t.copy(["encrypt"]);
                        return o.subtle.encrypt(n, a, r)
                    })
                },
                r.unwrapKey = function(e, r, t, n, o, a, i) {
                    var c;
                    return Promise.resolve().then(function() {
                        c = new u.Crypto;
                        var e = t.copy(["decrypt"]);
                        return c.subtle.decrypt(n, e, r)
                    }).then(function(r) {
                        var t;
                        return t = "jwk" === e.toLowerCase() ? JSON.parse(s.buffer2string(new Uint8Array(r))) : new Uint8Array(r),
                            c.subtle.importKey(e, t, o, a, i)
                    })
                },
                r.alg2jwk = function(e) {
                    var r = e.hash,
                        t = /(\d+)/.exec(r.name)[1];
                    switch (e.name.toUpperCase()) {
                        case a.AlgorithmNames.RsaOAEP.toUpperCase():
                            return "RSA-OAEP" + ("1" === t ? "" : "-" + t);
                        case a.AlgorithmNames.RsaPSS.toUpperCase():
                            return "PS" + t;
                        case a.AlgorithmNames.RsaSSA.toUpperCase():
                            return "RS" + t;
                        default:
                            throw new a.AlgorithmError(a.AlgorithmError.UNSUPPORTED_ALGORITHM, e.name)
                    }
                },
                r.jwk2alg = function(e) {
                    throw new Error("Not implemented")
                },
                r.exportKey = function(e, r) {
                    var t = this;
                    return Promise.resolve().then(function() {
                        if ("jwk" === e.toLowerCase()) {
                            var n = {
                                kty: "RSA",
                                ext: !0,
                                key_ops: r.usages
                            };
                            return n.alg = t.alg2jwk(r.algorithm),
                                n.n = a.Base64Url.encode(p(r.key[0])),
                                n.e = a.Base64Url.encode(p(r.key[1])),
                                "private" === r.type && (n.d = a.Base64Url.encode(p(r.key[2])),
                                    n.p = a.Base64Url.encode(p(r.key[3])),
                                    n.q = a.Base64Url.encode(p(r.key[4])),
                                    n.dp = a.Base64Url.encode(p(r.key[5])),
                                    n.dq = a.Base64Url.encode(p(r.key[6])),
                                    n.qi = a.Base64Url.encode(p(r.key[7]))),
                                n
                        }
                        throw new i.LinerError(i.LinerError.NOT_SUPPORTED)
                    })
                },
                r.importKey = function(e, r, t, n, o) {
                    return Promise.resolve().then(function() {
                        var s, u = new c.CryptoKey({
                            algorithm: t,
                            extractable: n,
                            usages: o
                        });
                        if (u.key = [],
                            "jwk" === e.toLowerCase())
                            return s = r,
                                u.key[0] = a.Base64Url.decode(s.n),
                                u.key[1] = 3 === a.Base64Url.decode(s.e)[0] ? new Uint8Array([0, 0, 0, 3]) : new Uint8Array([0, 1, 0, 1]),
                                s.d ? (u.type = "private",
                                    u.key[2] = a.Base64Url.decode(s.d),
                                    u.key[3] = a.Base64Url.decode(s.p),
                                    u.key[4] = a.Base64Url.decode(s.q),
                                    u.key[5] = a.Base64Url.decode(s.dp),
                                    u.key[6] = a.Base64Url.decode(s.dq),
                                    u.key[7] = a.Base64Url.decode(s.qi)) : u.type = "public",
                                u;
                        throw new i.LinerError(i.LinerError.NOT_SUPPORTED)
                    })
                },
                r.checkModule = function() {
                    if ("undefined" == typeof asmCrypto)
                        throw new i.LinerError(i.LinerError.MODULE_NOT_FOUND, "asmCrypto", "https://github.com/vibornoff/asmcrypto.js")
                },
                r.filterUsages = function(e, r) {
                    return e.filter(function(e) {
                        return !!r.filter(function(r) {
                            return e === r
                        }).length
                    })
                },
                r
        }(a.BaseCrypto);
        r.RsaCrypto = h
    },
    function(e, r, t) {
        "use strict";
        var n, o = this && this.__extends || (n = function(e, r) {
                    return (n = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, r) {
                            e.__proto__ = r
                        } || function(e, r) {
                            for (var t in r)
                                r.hasOwnProperty(t) && (e[t] = r[t])
                        }
                    )(e, r)
                },
                function(e, r) {
                    function t() {
                        this.constructor = e
                    }
                    n(e, r),
                        e.prototype = null === r ? Object.create(r) : (t.prototype = r.prototype,
                            new t)
                }
            ),
            a = this && this.__awaiter || function(e, r, t, n) {
                return new(t || (t = Promise))(function(o, a) {
                    function i(e) {
                        try {
                            c(n.next(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function s(e) {
                        try {
                            c(n.throw(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function c(e) {
                        e.done ? o(e.value) : new t(function(r) {
                            r(e.value)
                        }).then(i, s)
                    }
                    c((n = n.apply(e, r || [])).next())
                })
            },
            i = this && this.__generator || function(e, r) {
                var t, n, o, a, i = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0])
                            throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                        next: s(0),
                        throw :s(1),
                        return :s(2)
                    },
                    "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }),
                    a;

                function s(a) {
                    return function(s) {
                        return function(a) {
                            if (t)
                                throw new TypeError("Generator is already executing.");
                            for (; i;)
                                try {
                                    if (t = 1,
                                        n && (o = 2 & a[0] ? n.return : a[0] ? n.throw || ((o = n.return) && o.call(n),
                                            0) : n.next) && !(o = o.call(n, a[1])).done)
                                        return o;
                                    switch (n = 0,
                                        o && (a = [2 & a[0], o.value]),
                                        a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: a[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++,
                                                n = a[1],
                                                a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop(),
                                                i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                i.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && i.label < o[1]) {
                                                i.label = o[1],
                                                    o = a;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2],
                                                    i.ops.push(a);
                                                break
                                            }
                                            o[2] && i.ops.pop(),
                                                i.trys.pop();
                                            continue
                                    }
                                    a = r.call(e, i)
                                } catch (e) {
                                    a = [6, e],
                                        n = 0
                                } finally {
                                    t = o = 0
                                }
                            if (5 & a[0])
                                throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, s])
                    }
                }
            };
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = t(1),
            c = t(2),
            u = t(6),
            p = t(5),
            h = t(3);

        function f(e) {
            for (var r = new Uint8Array(e), t = [], n = 0; n < r.length; n++)
                t.push(r[n]);
            return t
        }

        function l(e, r) {
            e.length % 2 && (e = "0" + e);
            for (var t = new Uint8Array(e.length / 2), n = 0; n < e.length; n++) {
                var o = e.slice(n, ++n + 1);
                t[(n - 1) / 2] = parseInt(o, 16)
            }
            if (r) {
                var a = t.length;
                a = a > 32 ? a > 48 ? 66 : 48 : 32,
                    t.length < a && (t = p.concat(new Uint8Array(a - t.length), t))
            }
            return t
        }

        function y(e, r) {
            for (var t = "", n = 0; n < e.length; n++) {
                var o = e[n].toString(16);
                t += o.length % 2 ? "0" + o : o
            }
            if (r) {
                var a = e.length;
                a = a > 32 ? a > 48 ? 66 : 48 : 32,
                    t.length / 2 < a && (t = new Array(2 * a - t.length + 1).join("0") + t)
            }
            return t
        }
        var m = function(e) {
            function r() {
                return null !== e && e.apply(this, arguments) || this
            }
            return o(r, e),
                r.generateKey = function(e, r, t) {
                    var n = this;
                    return Promise.resolve().then(function() {
                        n.checkModule();
                        var t = new elliptic.ec(n.getNamedCurve(e.namedCurve)),
                            o = new u.CryptoKey({
                                type: "private",
                                algorithm: e,
                                extractable: r,
                                usages: []
                            }),
                            a = new u.CryptoKey({
                                type: "public",
                                algorithm: e,
                                extractable: !0,
                                usages: []
                            });
                        return o.key = a.key = t.genKeyPair(),
                            e.name === s.AlgorithmNames.EcDSA ? (o.usages = ["sign"],
                                a.usages = ["verify"]) : e.name === s.AlgorithmNames.EcDH ? (o.usages = ["deriveKey", "deriveBits"],
                                a.usages = []) : e.name === s.AlgorithmNames.EdDSA && (o.usages = ["sign"],
                                a.usages = ["verify"]), {
                                privateKey: o,
                                publicKey: a
                            }
                    })
                },
                r.sign = function(e, r, t) {
                    return a(this, void 0, void 0, function() {
                        var n, o, a, c, u;
                        return i(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return n = e,
                                        o = new h.Crypto,
                                        e.name.toUpperCase() !== s.AlgorithmNames.EdDSA ? [3, 2] : (a = t, [4, r.key.sign(a).toBytes()]);
                                case 1:
                                    return [2, i.sent()];
                                case 2:
                                    return [4, o.subtle.digest(n.hash, t)];
                                case 3:
                                    return c = i.sent(),
                                        a = f(c), [4, r.key.sign(a)];
                                case 4:
                                    return u = i.sent(), [2, l(y(u.r.toArray(), !0) + y(u.s.toArray(), !0)).buffer]
                            }
                        })
                    })
                },
                r.verify = function(e, r, t, n) {
                    return a(this, void 0, void 0, function() {
                        var o, a, c, u;
                        return i(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return o = e,
                                        e.name.toUpperCase() !== s.AlgorithmNames.EdDSA ? [3, 1] : (c = f(t),
                                            a = n.buffer, [3, 3]);
                                case 1:
                                    return c = {
                                        r: t.slice(0, t.byteLength / 2),
                                        s: t.slice(t.byteLength / 2)
                                    }, [4, (new h.Crypto).subtle.digest(o.hash, n)];
                                case 2:
                                    a = i.sent(),
                                        i.label = 3;
                                case 3:
                                    return u = f(a), [2, r.key.verify(u, c)]
                            }
                        })
                    })
                },
                r.deriveKey = function(e, r, t, n, o) {
                    var a = this;
                    return Promise.resolve().then(function() {
                        return a.deriveBits(e, r, t.length)
                    }).then(function(e) {
                        return (new h.Crypto).subtle.importKey("raw", new Uint8Array(e), t, n, o)
                    })
                },
                r.deriveBits = function(e, r, t) {
                    return Promise.resolve().then(function() {
                        Promise.resolve(null);
                        var n = r.key.derive(e.public.key.getPublic()),
                            o = new Uint8Array(n.toArray()),
                            a = o.length;
                        return a = a > 32 ? a > 48 ? 66 : 48 : 32,
                            o.length < a && (o = p.concat(new Uint8Array(a - o.length), o)),
                            o.slice(0, t / 8).buffer
                    })
                },
                r.exportKey = function(e, r) {
                    return Promise.resolve().then(function() {
                        var t = r.key;
                        if ("jwk" === e.toLowerCase()) {
                            var n = t.getPublic("hex").slice(2),
                                o = n.slice(0, n.length / 2),
                                a = n.slice(n.length / 2, n.length);
                            return "public" === r.type ? {
                                crv: r.algorithm.namedCurve,
                                ext: r.extractable,
                                x: s.Base64Url.encode(l(o, !0)),
                                y: s.Base64Url.encode(l(a, !0)),
                                key_ops: r.usages,
                                kty: "EC"
                            } : {
                                crv: r.algorithm.namedCurve,
                                ext: r.extractable,
                                d: s.Base64Url.encode(l(t.getPrivate("hex"), !0)),
                                x: s.Base64Url.encode(l(o, !0)),
                                y: s.Base64Url.encode(l(a, !0)),
                                key_ops: r.usages,
                                kty: "EC"
                            }
                        }
                        throw new c.LinerError("Format '" + e + "' is not implemented")
                    })
                },
                r.importKey = function(e, r, t, n, o) {
                    var a = this;
                    return Promise.resolve().then(function() {
                        var i = new u.CryptoKey({
                            algorithm: t,
                            extractable: n,
                            usages: o
                        });
                        if ("jwk" !== e.toLowerCase())
                            throw new c.LinerError("Format '" + e + "' is not implemented");
                        var h = a.getNamedCurve(t.namedCurve);
                        console.log(h);
                        var f = void 0;
                        if (f = "eddsa" === t.name.toLowerCase() ? new elliptic.eddsa(h) : new elliptic.ec(h),
                            r.d)
                            "eddsa" === t.name.toLowerCase() ? i.key = f.keyFromSecret(s.Base64Url.decode(r.d)) : i.key = f.keyFromPrivate(s.Base64Url.decode(r.d)),
                            i.type = "private";
                        else {
                            var l = y("ed25519" === h || "curve25519" === h ? s.Base64Url.decode(r.x) : p.concat(new Uint8Array([4]), s.Base64Url.decode(r.x), s.Base64Url.decode(r.y)));
                            i.key = f.keyFromPublic(l, "hex"),
                                i.type = "public"
                        }
                        return i
                    })
                },
                r.checkModule = function() {
                    if ("undefined" == typeof elliptic)
                        throw new c.LinerError(c.LinerError.MODULE_NOT_FOUND, "elliptic", "https://github.com/indutny/elliptic")
                },
                r.getNamedCurve = function(e) {
                    var r = e.toUpperCase();
                    return ["P-256", "P-384", "P-521", "ED25519"].indexOf(r) > -1 ? r.replace("-", "").toLowerCase() : "K-256" === r ? "secp256k1" : "curve25519"
                },
                r
        }(s.BaseCrypto);
        r.EcCrypto = m
    },
    function(e, r, t) {
        "use strict";
        var n, o = this && this.__extends || (n = function(e, r) {
                    return (n = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, r) {
                            e.__proto__ = r
                        } || function(e, r) {
                            for (var t in r)
                                r.hasOwnProperty(t) && (e[t] = r[t])
                        }
                    )(e, r)
                },
                function(e, r) {
                    function t() {
                        this.constructor = e
                    }
                    n(e, r),
                        e.prototype = null === r ? Object.create(r) : (t.prototype = r.prototype,
                            new t)
                }
            ),
            a = this && this.__awaiter || function(e, r, t, n) {
                return new(t || (t = Promise))(function(o, a) {
                    function i(e) {
                        try {
                            c(n.next(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function s(e) {
                        try {
                            c(n.throw(e))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function c(e) {
                        e.done ? o(e.value) : new t(function(r) {
                            r(e.value)
                        }).then(i, s)
                    }
                    c((n = n.apply(e, r || [])).next())
                })
            },
            i = this && this.__generator || function(e, r) {
                var t, n, o, a, i = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0])
                            throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                        next: s(0),
                        throw :s(1),
                        return :s(2)
                    },
                    "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }),
                    a;

                function s(a) {
                    return function(s) {
                        return function(a) {
                            if (t)
                                throw new TypeError("Generator is already executing.");
                            for (; i;)
                                try {
                                    if (t = 1,
                                        n && (o = 2 & a[0] ? n.return : a[0] ? n.throw || ((o = n.return) && o.call(n),
                                            0) : n.next) && !(o = o.call(n, a[1])).done)
                                        return o;
                                    switch (n = 0,
                                        o && (a = [2 & a[0], o.value]),
                                        a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: a[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++,
                                                n = a[1],
                                                a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop(),
                                                i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                i.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && i.label < o[1]) {
                                                i.label = o[1],
                                                    o = a;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2],
                                                    i.ops.push(a);
                                                break
                                            }
                                            o[2] && i.ops.pop(),
                                                i.trys.pop();
                                            continue
                                    }
                                    a = r.call(e, i)
                                } catch (e) {
                                    a = [6, e],
                                        n = 0
                                } finally {
                                    t = o = 0
                                }
                            if (5 & a[0])
                                throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, s])
                    }
                }
            };
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var s = t(1),
            c = t(2),
            u = t(6),
            p = t(10),
            h = t(11),
            f = t(3),
            l = function(e) {
                function r() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o(r, e),
                    r.importKey = function(e, r, t, n, o) {
                        return a(this, void 0, void 0, function() {
                            var a;
                            return i(this, function(i) {
                                if (a = new u.CryptoKey({
                                    algorithm: t,
                                    extractable: n,
                                    type: "secret",
                                    usages: o
                                }), !e || "raw" !== e.toLowerCase())
                                    throw new c.LinerError("format: Is not 'raw'");
                                return a.key = s.PrepareData(r, "keyData"), [2, a]
                            })
                        })
                    },
                    r.exportKey = function(e, r) {
                        return a(this, void 0, void 0, function() {
                            return i(this, function(t) {
                                if (e && "raw" === e.toLowerCase())
                                    return [2, r.key.buffer];
                                throw new c.LinerError("format: Is not 'raw'")
                            })
                        })
                    },
                    r.deriveBits = function(e, r, t) {
                        return a(this, void 0, void 0, function() {
                            var n, o, a;
                            return i(this, function(i) {
                                switch (o = s.PrepareData(e.salt, "salt"),
                                    a = s.PrepareData(r.key, "key"),
                                    e.hash.name.toUpperCase()) {
                                    case "SHA-1":
                                        n = asmCrypto.PBKDF2_HMAC_SHA1.bytes(a, o, e.iterations, t >> 3);
                                        break;
                                    case "SHA-256":
                                        n = asmCrypto.PBKDF2_HMAC_SHA256.bytes(a, o, e.iterations, t >> 3);
                                        break;
                                    default:
                                        throw new c.LinerError("algorithm.hash: '" + e.hash.name + "' hash algorithm is not supported")
                                }
                                return [2, n.buffer]
                            })
                        })
                    },
                    r.deriveKey = function(e, r, t, n, o) {
                        return a(this, void 0, void 0, function() {
                            var a, u;
                            return i(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, (new f.Crypto).subtle.deriveBits(e, r, t.length)];
                                    case 1:
                                        switch (a = i.sent(),
                                            t.name.toLowerCase()) {
                                            case s.AlgorithmNames.AesECB.toLowerCase():
                                            case s.AlgorithmNames.AesCBC.toLowerCase():
                                            case s.AlgorithmNames.AesGCM.toLowerCase():
                                                u = p.AesCrypto;
                                                break;
                                            case s.AlgorithmNames.DesCBC.toLowerCase():
                                            case s.AlgorithmNames.DesEdeCBC.toLowerCase():
                                                u = h.DesCrypto;
                                                break;
                                            default:
                                                throw new c.LinerError("derivedKeyType.name: '" + t.name + "' algorithm is not supported")
                                        }
                                        return [4, u.importKey("raw", a, t, n, o)];
                                    case 2:
                                        return [2, i.sent()]
                                }
                            })
                        })
                    },
                    r.checkModule = function() {
                        if ("undefined" == typeof asmCrypto)
                            throw new c.LinerError(c.LinerError.MODULE_NOT_FOUND, "asmCrypto", "https://github.com/vibornoff/asmcrypto.js")
                    },
                    r
            }(s.BaseCrypto);
        r.PbkdfCrypto = l
    },
    function(e, r, t) {
        "use strict";
        r.readUInt32BE = function(e, r) {
                return (e[0 + r] << 24 | e[1 + r] << 16 | e[2 + r] << 8 | e[3 + r]) >>> 0
            },
            r.writeUInt32BE = function(e, r, t) {
                e[0 + t] = r >>> 24,
                    e[1 + t] = r >>> 16 & 255,
                    e[2 + t] = r >>> 8 & 255,
                    e[3 + t] = 255 & r
            },
            r.ip = function(e, r, t, n) {
                for (var o = 0, a = 0, i = 6; i >= 0; i -= 2) {
                    for (var s = 0; s <= 24; s += 8)
                        o <<= 1,
                        o |= r >>> s + i & 1;
                    for (s = 0; s <= 24; s += 8)
                        o <<= 1,
                        o |= e >>> s + i & 1
                }
                for (i = 6; i >= 0; i -= 2) {
                    for (s = 1; s <= 25; s += 8)
                        a <<= 1,
                        a |= r >>> s + i & 1;
                    for (s = 1; s <= 25; s += 8)
                        a <<= 1,
                        a |= e >>> s + i & 1
                }
                t[n + 0] = o >>> 0,
                    t[n + 1] = a >>> 0
            },
            r.rip = function(e, r, t, n) {
                for (var o = 0, a = 0, i = 0; i < 4; i++)
                    for (var s = 24; s >= 0; s -= 8)
                        o <<= 1,
                        o |= r >>> s + i & 1,
                        o <<= 1,
                        o |= e >>> s + i & 1;
                for (i = 4; i < 8; i++)
                    for (s = 24; s >= 0; s -= 8)
                        a <<= 1,
                        a |= r >>> s + i & 1,
                        a <<= 1,
                        a |= e >>> s + i & 1;
                t[n + 0] = o >>> 0,
                    t[n + 1] = a >>> 0
            },
            r.pc1 = function(e, r, t, n) {
                for (var o = 0, a = 0, i = 7; i >= 5; i--) {
                    for (var s = 0; s <= 24; s += 8)
                        o <<= 1,
                        o |= r >> s + i & 1;
                    for (s = 0; s <= 24; s += 8)
                        o <<= 1,
                        o |= e >> s + i & 1
                }
                for (s = 0; s <= 24; s += 8)
                    o <<= 1,
                    o |= r >> s + i & 1;
                for (i = 1; i <= 3; i++) {
                    for (s = 0; s <= 24; s += 8)
                        a <<= 1,
                        a |= r >> s + i & 1;
                    for (s = 0; s <= 24; s += 8)
                        a <<= 1,
                        a |= e >> s + i & 1
                }
                for (s = 0; s <= 24; s += 8)
                    a <<= 1,
                    a |= e >> s + i & 1;
                t[n + 0] = o >>> 0,
                    t[n + 1] = a >>> 0
            },
            r.r28shl = function(e, r) {
                return e << r & 268435455 | e >>> 28 - r
            };
        var n = [14, 11, 17, 4, 27, 23, 25, 0, 13, 22, 7, 18, 5, 9, 16, 24, 2, 20, 12, 21, 1, 8, 15, 26, 15, 4, 25, 19, 9, 1, 26, 16, 5, 11, 23, 8, 12, 7, 17, 0, 22, 3, 10, 14, 6, 20, 27, 24];
        r.pc2 = function(e, r, t, o) {
                for (var a = 0, i = 0, s = n.length >>> 1, c = 0; c < s; c++)
                    a <<= 1,
                    a |= e >>> n[c] & 1;
                for (c = s; c < n.length; c++)
                    i <<= 1,
                    i |= r >>> n[c] & 1;
                t[o + 0] = a >>> 0,
                    t[o + 1] = i >>> 0
            },
            r.expand = function(e, r, t) {
                var n = 0,
                    o = 0;
                n = (1 & e) << 5 | e >>> 27;
                for (var a = 23; a >= 15; a -= 4)
                    n <<= 6,
                    n |= e >>> a & 63;
                for (a = 11; a >= 3; a -= 4)
                    o |= e >>> a & 63,
                    o <<= 6;
                o |= (31 & e) << 1 | e >>> 31,
                    r[t + 0] = n >>> 0,
                    r[t + 1] = o >>> 0
            };
        var o = [14, 0, 4, 15, 13, 7, 1, 4, 2, 14, 15, 2, 11, 13, 8, 1, 3, 10, 10, 6, 6, 12, 12, 11, 5, 9, 9, 5, 0, 3, 7, 8, 4, 15, 1, 12, 14, 8, 8, 2, 13, 4, 6, 9, 2, 1, 11, 7, 15, 5, 12, 11, 9, 3, 7, 14, 3, 10, 10, 0, 5, 6, 0, 13, 15, 3, 1, 13, 8, 4, 14, 7, 6, 15, 11, 2, 3, 8, 4, 14, 9, 12, 7, 0, 2, 1, 13, 10, 12, 6, 0, 9, 5, 11, 10, 5, 0, 13, 14, 8, 7, 10, 11, 1, 10, 3, 4, 15, 13, 4, 1, 2, 5, 11, 8, 6, 12, 7, 6, 12, 9, 0, 3, 5, 2, 14, 15, 9, 10, 13, 0, 7, 9, 0, 14, 9, 6, 3, 3, 4, 15, 6, 5, 10, 1, 2, 13, 8, 12, 5, 7, 14, 11, 12, 4, 11, 2, 15, 8, 1, 13, 1, 6, 10, 4, 13, 9, 0, 8, 6, 15, 9, 3, 8, 0, 7, 11, 4, 1, 15, 2, 14, 12, 3, 5, 11, 10, 5, 14, 2, 7, 12, 7, 13, 13, 8, 14, 11, 3, 5, 0, 6, 6, 15, 9, 0, 10, 3, 1, 4, 2, 7, 8, 2, 5, 12, 11, 1, 12, 10, 4, 14, 15, 9, 10, 3, 6, 15, 9, 0, 0, 6, 12, 10, 11, 1, 7, 13, 13, 8, 15, 9, 1, 4, 3, 5, 14, 11, 5, 12, 2, 7, 8, 2, 4, 14, 2, 14, 12, 11, 4, 2, 1, 12, 7, 4, 10, 7, 11, 13, 6, 1, 8, 5, 5, 0, 3, 15, 15, 10, 13, 3, 0, 9, 14, 8, 9, 6, 4, 11, 2, 8, 1, 12, 11, 7, 10, 1, 13, 14, 7, 2, 8, 13, 15, 6, 9, 15, 12, 0, 5, 9, 6, 10, 3, 4, 0, 5, 14, 3, 12, 10, 1, 15, 10, 4, 15, 2, 9, 7, 2, 12, 6, 9, 8, 5, 0, 6, 13, 1, 3, 13, 4, 14, 14, 0, 7, 11, 5, 3, 11, 8, 9, 4, 14, 3, 15, 2, 5, 12, 2, 9, 8, 5, 12, 15, 3, 10, 7, 11, 0, 14, 4, 1, 10, 7, 1, 6, 13, 0, 11, 8, 6, 13, 4, 13, 11, 0, 2, 11, 14, 7, 15, 4, 0, 9, 8, 1, 13, 10, 3, 14, 12, 3, 9, 5, 7, 12, 5, 2, 10, 15, 6, 8, 1, 6, 1, 6, 4, 11, 11, 13, 13, 8, 12, 1, 3, 4, 7, 10, 14, 7, 10, 9, 15, 5, 6, 0, 8, 15, 0, 14, 5, 2, 9, 3, 2, 12, 13, 1, 2, 15, 8, 13, 4, 8, 6, 10, 15, 3, 11, 7, 1, 4, 10, 12, 9, 5, 3, 6, 14, 11, 5, 0, 0, 14, 12, 9, 7, 2, 7, 2, 11, 1, 4, 14, 1, 7, 9, 4, 12, 10, 14, 8, 2, 13, 0, 15, 6, 12, 10, 9, 13, 0, 15, 3, 3, 5, 5, 6, 8, 11];
        r.substitute = function(e, r) {
            for (var t = 0, n = 0; n < 4; n++) {
                t <<= 4,
                    t |= o[64 * n + (e >>> 18 - 6 * n & 63)]
            }
            for (n = 0; n < 4; n++) {
                t <<= 4,
                    t |= o[256 + 64 * n + (r >>> 18 - 6 * n & 63)]
            }
            return t >>> 0
        };
        var a = [16, 25, 12, 11, 3, 20, 4, 15, 31, 17, 9, 6, 27, 14, 1, 22, 30, 24, 8, 18, 0, 5, 29, 23, 13, 19, 2, 26, 10, 21, 28, 7];
        r.permute = function(e) {
                for (var r = 0, t = 0; t < a.length; t++)
                    r <<= 1,
                    r |= e >>> a[t] & 1;
                return r >>> 0
            },
            r.padSplit = function(e, r, t) {
                for (var n = e.toString(2); n.length < r;)
                    n = "0" + n;
                for (var o = [], a = 0; a < r; a += t)
                    o.push(n.slice(a, a + t));
                return o.join(" ")
            }
    },
    function(e, r, t) {
        "use strict";
        var n = t(7);

        function o(e) {
            this.options = e,
                this.type = this.options.type,
                this.blockSize = 8,
                this._init(),
                this.buffer = new Array(this.blockSize),
                this.bufferOff = 0
        }
        e.exports = o,
            o.prototype._init = function() {},
            o.prototype.update = function(e) {
                return 0 === e.length ? [] : "decrypt" === this.type ? this._updateDecrypt(e) : this._updateEncrypt(e)
            },
            o.prototype._buffer = function(e, r) {
                for (var t = Math.min(this.buffer.length - this.bufferOff, e.length - r), n = 0; n < t; n++)
                    this.buffer[this.bufferOff + n] = e[r + n];
                return this.bufferOff += t,
                    t
            },
            o.prototype._flushBuffer = function(e, r) {
                return this._update(this.buffer, 0, e, r),
                    this.bufferOff = 0,
                    this.blockSize
            },
            o.prototype._updateEncrypt = function(e) {
                var r = 0,
                    t = 0,
                    n = (this.bufferOff + e.length) / this.blockSize | 0,
                    o = new Array(n * this.blockSize);
                0 !== this.bufferOff && (r += this._buffer(e, r),
                    this.bufferOff === this.buffer.length && (t += this._flushBuffer(o, t)));
                for (var a = e.length - (e.length - r) % this.blockSize; r < a; r += this.blockSize)
                    this._update(e, r, o, t),
                    t += this.blockSize;
                for (; r < e.length; r++,
                    this.bufferOff++)
                    this.buffer[this.bufferOff] = e[r];
                return o
            },
            o.prototype._updateDecrypt = function(e) {
                for (var r = 0, t = 0, n = Math.ceil((this.bufferOff + e.length) / this.blockSize) - 1, o = new Array(n * this.blockSize); n > 0; n--)
                    r += this._buffer(e, r),
                    t += this._flushBuffer(o, t);
                return r += this._buffer(e, r),
                    o
            },
            o.prototype.final = function(e) {
                var r, t;
                return e && (r = this.update(e)),
                    t = "encrypt" === this.type ? this._finalEncrypt() : this._finalDecrypt(),
                    r ? r.concat(t) : t
            },
            o.prototype._pad = function(e, r) {
                if (0 === r)
                    return !1;
                for (; r < e.length;)
                    e[r++] = 0;
                return !0
            },
            o.prototype._finalEncrypt = function() {
                if (!this._pad(this.buffer, this.bufferOff))
                    return [];
                var e = new Array(this.blockSize);
                return this._update(this.buffer, 0, e, 0),
                    e
            },
            o.prototype._unpad = function(e) {
                return e
            },
            o.prototype._finalDecrypt = function() {
                n.equal(this.bufferOff, this.blockSize, "Not enough data to decrypt");
                var e = new Array(this.blockSize);
                return this._flushBuffer(e, 0),
                    this._unpad(e)
            }
    },
    function(e, r, t) {
        "use strict";
        var n = t(7),
            o = t(9),
            a = t(8),
            i = a.utils,
            s = a.Cipher;

        function c() {
            this.tmp = new Array(2),
                this.keys = null
        }

        function u(e) {
            s.call(this, e);
            var r = new c;
            this._desState = r,
                this.deriveKeys(r, e.key)
        }
        o(u, s),
            e.exports = u,
            u.create = function(e) {
                return new u(e)
            };
        var p = [1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1];
        u.prototype.deriveKeys = function(e, r) {
                e.keys = new Array(32),
                    n.equal(r.length, this.blockSize, "Invalid key length");
                var t = i.readUInt32BE(r, 0),
                    o = i.readUInt32BE(r, 4);
                i.pc1(t, o, e.tmp, 0),
                    t = e.tmp[0],
                    o = e.tmp[1];
                for (var a = 0; a < e.keys.length; a += 2) {
                    var s = p[a >>> 1];
                    t = i.r28shl(t, s),
                        o = i.r28shl(o, s),
                        i.pc2(t, o, e.keys, a)
                }
            },
            u.prototype._update = function(e, r, t, n) {
                var o = this._desState,
                    a = i.readUInt32BE(e, r),
                    s = i.readUInt32BE(e, r + 4);
                i.ip(a, s, o.tmp, 0),
                    a = o.tmp[0],
                    s = o.tmp[1],
                    "encrypt" === this.type ? this._encrypt(o, a, s, o.tmp, 0) : this._decrypt(o, a, s, o.tmp, 0),
                    a = o.tmp[0],
                    s = o.tmp[1],
                    i.writeUInt32BE(t, a, n),
                    i.writeUInt32BE(t, s, n + 4)
            },
            u.prototype._pad = function(e, r) {
                for (var t = e.length - r, n = r; n < e.length; n++)
                    e[n] = t;
                return !0
            },
            u.prototype._unpad = function(e) {
                for (var r = e[e.length - 1], t = e.length - r; t < e.length; t++)
                    n.equal(e[t], r);
                return e.slice(0, e.length - r)
            },
            u.prototype._encrypt = function(e, r, t, n, o) {
                for (var a = r, s = t, c = 0; c < e.keys.length; c += 2) {
                    var u = e.keys[c],
                        p = e.keys[c + 1];
                    i.expand(s, e.tmp, 0),
                        u ^= e.tmp[0],
                        p ^= e.tmp[1];
                    var h = i.substitute(u, p),
                        f = s;
                    s = (a ^ i.permute(h)) >>> 0,
                        a = f
                }
                i.rip(s, a, n, o)
            },
            u.prototype._decrypt = function(e, r, t, n, o) {
                for (var a = t, s = r, c = e.keys.length - 2; c >= 0; c -= 2) {
                    var u = e.keys[c],
                        p = e.keys[c + 1];
                    i.expand(a, e.tmp, 0),
                        u ^= e.tmp[0],
                        p ^= e.tmp[1];
                    var h = i.substitute(u, p),
                        f = a;
                    a = (s ^ i.permute(h)) >>> 0,
                        s = f
                }
                i.rip(a, s, n, o)
            }
    },
    function(e, r, t) {
        "use strict";
        var n = t(7),
            o = t(9),
            a = {};

        function i(e) {
            n.equal(e.length, 8, "Invalid IV length"),
                this.iv = new Array(8);
            for (var r = 0; r < this.iv.length; r++)
                this.iv[r] = e[r]
        }
        r.instantiate = function(e) {
                function r(r) {
                    e.call(this, r),
                        this._cbcInit()
                }
                o(r, e);
                for (var t = Object.keys(a), n = 0; n < t.length; n++) {
                    var i = t[n];
                    r.prototype[i] = a[i]
                }
                return r.create = function(e) {
                        return new r(e)
                    },
                    r
            },
            a._cbcInit = function() {
                var e = new i(this.options.iv);
                this._cbcState = e
            },
            a._update = function(e, r, t, n) {
                var o = this._cbcState,
                    a = this.constructor.super_.prototype,
                    i = o.iv;
                if ("encrypt" === this.type) {
                    for (var s = 0; s < this.blockSize; s++)
                        i[s] ^= e[r + s];
                    a._update.call(this, i, 0, t, n);
                    for (s = 0; s < this.blockSize; s++)
                        i[s] = t[n + s]
                } else {
                    a._update.call(this, e, r, t, n);
                    for (s = 0; s < this.blockSize; s++)
                        t[n + s] ^= i[s];
                    for (s = 0; s < this.blockSize; s++)
                        i[s] = e[r + s]
                }
            }
    },
    function(e, r, t) {
        "use strict";
        var n = t(7),
            o = t(9),
            a = t(8),
            i = a.Cipher,
            s = a.DES;

        function c(e, r) {
            n.equal(r.length, 24, "Invalid key length");
            var t = r.slice(0, 8),
                o = r.slice(8, 16),
                a = r.slice(16, 24);
            this.ciphers = "encrypt" === e ? [s.create({
                type: "encrypt",
                key: t
            }), s.create({
                type: "decrypt",
                key: o
            }), s.create({
                type: "encrypt",
                key: a
            })] : [s.create({
                type: "decrypt",
                key: a
            }), s.create({
                type: "encrypt",
                key: o
            }), s.create({
                type: "decrypt",
                key: t
            })]
        }

        function u(e) {
            i.call(this, e);
            var r = new c(this.type, this.options.key);
            this._edeState = r
        }
        o(u, i),
            e.exports = u,
            u.create = function(e) {
                return new u(e)
            },
            u.prototype._update = function(e, r, t, n) {
                var o = this._edeState;
                o.ciphers[0]._update(e, r, t, n),
                    o.ciphers[1]._update(t, n, t, n),
                    o.ciphers[2]._update(t, n, t, n)
            },
            u.prototype._pad = s.prototype._pad,
            u.prototype._unpad = s.prototype._unpad
    },
    function(e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = t(12),
            o = self;
        n.nativeCrypto && Object.freeze(n.nativeCrypto.getRandomValues),
            delete self.crypto,
            o.crypto = new n.Crypto,
            Object.freeze(o.crypto),
            r.crypto = o.crypto
    }
]);
var obj = __require(3);
window.crypto = new obj['Crypto']
//by Ossian 流星暴雨

//以下测试

async function test() {
    let key = await window.crypto.subtle.importKey(
        "raw",
        new Uint8Array([23, 113, 57, 6, 35, -69, -60, 98, 84, -17, -125, -49, 18, 6, -92, 32]),
        "AES-GCM",
        true, ["encrypt", "decrypt"]
    );
    console.log(Array.from(new Uint8Array((await window.crypto.subtle.encrypt({
            name: "AES-GCM",
            iv: new Uint8Array([47, 46, 123, 78, 36, 14, 109, 50, 121, 64, 11, 38])
        },
        key,
        new Uint8Array([50, 49, 51])
    )))))
}
test()  
/******************************************************/
