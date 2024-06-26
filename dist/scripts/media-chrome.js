/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/media-chrome@1.7.0/dist/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
const e = {
    MEDIA_PLAY_REQUEST: "mediaplayrequest",
    MEDIA_PAUSE_REQUEST: "mediapauserequest",
    MEDIA_MUTE_REQUEST: "mediamuterequest",
    MEDIA_UNMUTE_REQUEST: "mediaunmuterequest",
    MEDIA_VOLUME_REQUEST: "mediavolumerequest",
    MEDIA_SEEK_REQUEST: "mediaseekrequest",
    MEDIA_AIRPLAY_REQUEST: "mediaairplayrequest",
    MEDIA_ENTER_FULLSCREEN_REQUEST: "mediaenterfullscreenrequest",
    MEDIA_EXIT_FULLSCREEN_REQUEST: "mediaexitfullscreenrequest",
    MEDIA_PREVIEW_REQUEST: "mediapreviewrequest",
    MEDIA_ENTER_PIP_REQUEST: "mediaenterpiprequest",
    MEDIA_EXIT_PIP_REQUEST: "mediaexitpiprequest",
    MEDIA_ENTER_CAST_REQUEST: "mediaentercastrequest",
    MEDIA_EXIT_CAST_REQUEST: "mediaexitcastrequest",
    MEDIA_SHOW_TEXT_TRACKS_REQUEST: "mediashowtexttracksrequest",
    MEDIA_HIDE_TEXT_TRACKS_REQUEST: "mediahidetexttracksrequest",
    MEDIA_SHOW_SUBTITLES_REQUEST: "mediashowsubtitlesrequest",
    MEDIA_DISABLE_SUBTITLES_REQUEST: "mediadisablesubtitlesrequest",
    MEDIA_TOGGLE_SUBTITLES_REQUEST: "mediatogglesubtitlesrequest",
    MEDIA_PLAYBACK_RATE_REQUEST: "mediaplaybackraterequest",
    MEDIA_RENDITION_REQUEST: "mediarenditionrequest",
    MEDIA_AUDIO_TRACK_REQUEST: "mediaaudiotrackrequest",
    MEDIA_SEEK_TO_LIVE_REQUEST: "mediaseektoliverequest",
    REGISTER_MEDIA_STATE_RECEIVER: "registermediastatereceiver",
    UNREGISTER_MEDIA_STATE_RECEIVER: "unregistermediastatereceiver",
  },
  t = { MEDIA_CHROME_ATTRIBUTES: "mediachromeattributes", MEDIA_CONTROLLER: "mediacontroller" },
  i = {
    MEDIA_AIRPLAY_UNAVAILABLE: "mediaAirplayUnavailable",
    MEDIA_FULLSCREEN_UNAVAILABLE: "mediaFullscreenUnavailable",
    MEDIA_PIP_UNAVAILABLE: "mediaPipUnavailable",
    MEDIA_CAST_UNAVAILABLE: "mediaCastUnavailable",
    MEDIA_RENDITION_UNAVAILABLE: "mediaRenditionUnavailable",
    MEDIA_AUDIO_TRACK_UNAVAILABLE: "mediaAudioTrackUnavailable",
    MEDIA_PAUSED: "mediaPaused",
    MEDIA_HAS_PLAYED: "mediaHasPlayed",
    MEDIA_ENDED: "mediaEnded",
    MEDIA_MUTED: "mediaMuted",
    MEDIA_VOLUME_LEVEL: "mediaVolumeLevel",
    MEDIA_VOLUME: "mediaVolume",
    MEDIA_VOLUME_UNAVAILABLE: "mediaVolumeUnavailable",
    MEDIA_IS_PIP: "mediaIsPip",
    MEDIA_IS_CASTING: "mediaIsCasting",
    MEDIA_SUBTITLES_LIST: "mediaSubtitlesList",
    MEDIA_SUBTITLES_SHOWING: "mediaSubtitlesShowing",
    MEDIA_IS_FULLSCREEN: "mediaIsFullscreen",
    MEDIA_PLAYBACK_RATE: "mediaPlaybackRate",
    MEDIA_CURRENT_TIME: "mediaCurrentTime",
    MEDIA_DURATION: "mediaDuration",
    MEDIA_SEEKABLE: "mediaSeekable",
    MEDIA_PREVIEW_TIME: "mediaPreviewTime",
    MEDIA_PREVIEW_IMAGE: "mediaPreviewImage",
    MEDIA_PREVIEW_COORDS: "mediaPreviewCoords",
    MEDIA_LOADING: "mediaLoading",
    MEDIA_BUFFERED: "mediaBuffered",
    MEDIA_STREAM_TYPE: "mediaStreamType",
    MEDIA_TARGET_LIVE_WINDOW: "mediaTargetLiveWindow",
    MEDIA_TIME_IS_LIVE: "mediaTimeIsLive",
    MEDIA_RENDITION_LIST: "mediaRenditionList",
    MEDIA_RENDITION_SELECTED: "mediaRenditionSelected",
    MEDIA_AUDIO_TRACK_LIST: "mediaAudioTrackList",
    MEDIA_AUDIO_TRACK_ENABLED: "mediaAudioTrackEnabled",
  },
  n = Object.entries(i),
  a = n.reduce((e, [t, i]) => ((e[t] = `${i.toLowerCase()}`), e), {}),
  s = n.reduce((e, [t, i]) => ((e[t] = `${i.toLowerCase()}`), e), {
    USER_INACTIVE: "userinactivechange",
    BREAKPOINTS_CHANGE: "breakpointchange",
    BREAKPOINTS_COMPUTED: "breakpointscomputed",
  }),
  r = Object.entries(s).reduce(
    (e, [t, i]) => {
      const n = a[t];
      return n && (e[i] = n), e;
    },
    { userinactivechange: "userinactive" },
  ),
  o = Object.entries(a).reduce(
    (e, [t, i]) => {
      const n = s[t];
      return n && (e[i] = n), e;
    },
    { userinactive: "userinactivechange" },
  ),
  l = {
    SUBTITLES: "subtitles",
    CAPTIONS: "captions",
    DESCRIPTIONS: "descriptions",
    CHAPTERS: "chapters",
    METADATA: "metadata",
  },
  d = { DISABLED: "disabled", HIDDEN: "hidden", SHOWING: "showing" },
  c = { MOUSE: "mouse", PEN: "pen", TOUCH: "touch" },
  u = { UNAVAILABLE: "unavailable", UNSUPPORTED: "unsupported" },
  h = { LIVE: "live", ON_DEMAND: "on-demand", UNKNOWN: "unknown" };
var E = Object.freeze({
  __proto__: null,
  AttributeToStateChangeEventMap: o,
  AvailabilityStates: u,
  MediaStateChangeEvents: s,
  MediaStateReceiverAttributes: t,
  MediaUIAttributes: a,
  MediaUIEvents: e,
  MediaUIProps: i,
  PointerTypes: c,
  ReadyStates: { HAVE_NOTHING: 0, HAVE_METADATA: 1, HAVE_CURRENT_DATA: 2, HAVE_FUTURE_DATA: 3, HAVE_ENOUGH_DATA: 4 },
  StateChangeEventToAttributeMap: r,
  StreamTypes: h,
  TextTrackKinds: l,
  TextTrackModes: d,
});
const m = {
    AUDIO_PLAYER: () => "audio player",
    VIDEO_PLAYER: () => "video player",
    VOLUME: () => "volume",
    SEEK: () => "seek",
    CLOSED_CAPTIONS: () => "closed captions",
    PLAYBACK_RATE: ({ playbackRate: e = 1 } = {}) => `current playback rate ${e}`,
    PLAYBACK_TIME: () => "playback time",
    MEDIA_LOADING: () => "media loading",
  },
  v = {
    PLAY: () => "play",
    PAUSE: () => "pause",
    MUTE: () => "mute",
    UNMUTE: () => "unmute",
    AIRPLAY: () => "air play",
    ENTER_CAST: () => "start casting",
    EXIT_CAST: () => "stop casting",
    ENTER_FULLSCREEN: () => "enter fullscreen mode",
    EXIT_FULLSCREEN: () => "exit fullscreen mode",
    ENTER_PIP: () => "enter picture in picture mode",
    EXIT_PIP: () => "exit picture in picture mode",
    SEEK_FORWARD_N_SECS: ({ seekOffset: e = 30 } = {}) => `seek forward ${e} seconds`,
    SEEK_BACK_N_SECS: ({ seekOffset: e = 30 } = {}) => `seek back ${e} seconds`,
    SEEK_LIVE: () => "seek to live",
    PLAYING_LIVE: () => "playing live",
  };
var p = { ...m, ...v };
function b(e) {
  if (e) {
    const { id: t, width: i, height: n } = e;
    return [t, i, n].filter((e) => null != e).join(":");
  }
}
function A(e) {
  if (e) {
    const { id: t, kind: i, language: n, label: a } = e;
    return [t, i, n, a].filter((e) => null != e).join(":");
  }
}
function g(e, t = !1) {
  return e
    .split("_")
    .map(function (e, i) {
      return (i || t ? e[0].toUpperCase() : e[0].toLowerCase()) + e.slice(1).toLowerCase();
    })
    .join("");
}
const I = (e) => new Promise((t) => setTimeout(t, e)),
  _ = [
    { singular: "hour", plural: "hours" },
    { singular: "minute", plural: "minutes" },
    { singular: "second", plural: "seconds" },
  ],
  M = (e) => {
    if ("number" != typeof (t = e) || Number.isNaN(t) || !Number.isFinite(t)) return "";
    var t;
    const i = Math.abs(e),
      n = i !== e,
      a = new Date(0, 0, 0, 0, 0, i, 0),
      s = [a.getHours(), a.getMinutes(), a.getSeconds()]
        .map((e, t) => e && ((e, t) => `${e} ${1 === e ? _[t].singular : _[t].plural}`)(e, t))
        .filter((e) => e)
        .join(", ");
    return `${s}${n ? " remaining" : ""}`;
  };
function f(e, t) {
  let i = !1;
  e < 0 && ((i = !0), (e = 0 - e)), (e = e < 0 ? 0 : e);
  let n = Math.floor(e % 60),
    a = Math.floor((e / 60) % 60),
    s = Math.floor(e / 3600);
  const r = Math.floor((t / 60) % 60),
    o = Math.floor(t / 3600);
  return (
    (isNaN(e) || e === 1 / 0) && (s = a = n = "0"),
    (s = s > 0 || o > 0 ? s + ":" : ""),
    (a = ((s || r >= 10) && a < 10 ? "0" + a : a) + ":"),
    (n = n < 10 ? "0" + n : n),
    (i ? "-" : "") + s + a + n
  );
}
const T = Object.freeze({
  length: 0,
  start(e) {
    const t = e >>> 0;
    if (t >= this.length)
      throw new DOMException(
        `Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`,
      );
    return 0;
  },
  end(e) {
    const t = e >>> 0;
    if (t >= this.length)
      throw new DOMException(
        `Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`,
      );
    return 0;
  },
});
var S = Object.freeze({
  __proto__: null,
  emptyTimeRanges: T,
  formatAsTimePhrase: M,
  formatTime: f,
  serializeTimeRanges: function (e = T) {
    return Array.from(e)
      .map((t, i) => [Number(e.start(i).toFixed(3)), Number(e.end(i).toFixed(3))].join(":"))
      .join(" ");
  },
});
const D = (e, t, i = ".value") => {
    const n = e.querySelector(i);
    n && (n.textContent = t);
  },
  L = (e, t) =>
    ((e, t) => {
      const i = `slot[name="${t}"]`,
        n = e.shadowRoot.querySelector(i);
      return n ? n.children : [];
    })(e, t)[0],
  k = (e, t) => !(!e || !t) && (!!e.contains(t) || k(e, t.getRootNode().host)),
  R = (e, t) => {
    if (!e) return null;
    const i = e.closest(t);
    return i || R(e.getRootNode().host, t);
  };
function y(e, t) {
  return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
}
function w(e, t) {
  var i;
  let n;
  for (n of e.querySelectorAll("style")) {
    let e;
    try {
      e = null == (i = n.sheet) ? void 0 : i.cssRules;
    } catch {
      continue;
    }
    for (let i of null != e ? e : []) if (i.selectorText === t) return i;
  }
  return (null == n ? void 0 : n.sheet)
    ? (n.sheet.insertRule(`${t}{}`, n.sheet.cssRules.length), n.sheet.cssRules[n.sheet.cssRules.length - 1])
    : { style: { setProperty: () => {}, removeProperty: () => {} } };
}
function C(e, t, i = Number.NaN) {
  const n = e.getAttribute(t);
  return null != n ? +n : i;
}
function N(e, t, i) {
  const n = +i;
  null == i || Number.isNaN(n)
    ? e.hasAttribute(t) && e.removeAttribute(t)
    : C(e, t, void 0) !== n && e.setAttribute(t, `${n}`);
}
function U(e, t) {
  return e.hasAttribute(t);
}
function P(e, t, i) {
  null != i ? U(e, t) != i && e.toggleAttribute(t, i) : e.hasAttribute(t) && e.removeAttribute(t);
}
function O(e, t, i = null) {
  var n;
  return null != (n = e.getAttribute(t)) ? n : i;
}
function x(e, t, i) {
  if (null == i) return void (e.hasAttribute(t) && e.removeAttribute(t));
  const n = `${i}`;
  O(e, t, void 0) !== n && e.setAttribute(t, n);
}
class V {
  addEventListener() {}
  removeEventListener() {}
  dispatchEvent() {
    return !0;
  }
}
const B = {
    createElement: function () {
      return new W.HTMLElement();
    },
    addEventListener() {},
    removeEventListener() {},
  },
  W = {
    ResizeObserver: class {
      observe() {}
      unobserve() {}
      disconnect() {}
    },
    document: B,
    HTMLElement: class extends V {},
    DocumentFragment: class extends V {},
    customElements: { get: function () {}, define: function () {}, whenDefined: function () {} },
    CustomEvent: function () {},
    getComputedStyle: function () {},
    navigator: { languages: [] },
  },
  $ = "undefined" == typeof window || void 0 === window.customElements,
  H = Object.keys(W).every((e) => e in globalThis),
  G = $ && !H ? W : globalThis,
  F = $ && !H ? B : globalThis.document;
var K,
  Q,
  q,
  j,
  Y = Object.defineProperty,
  Z = (e, t, i) => (
    ((e, t, i) => {
      t in e ? Y(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : (e[t] = i);
    })(e, "symbol" != typeof t ? t + "" : t, i),
    i
  ),
  z = (e, t, i) => {
    if (!t.has(e)) throw TypeError("Cannot " + i);
  },
  X = (e, t, i) => (z(e, t, "read from private field"), i ? i.call(e) : t.get(e)),
  J = (e, t, i) => {
    if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
    t instanceof WeakSet ? t.add(e) : t.set(e, i);
  },
  ee = (e, t, i, n) => (z(e, t, "write to private field"), n ? n.call(e, i) : t.set(e, i), i);
const te = F.createElement("template");
te.innerHTML =
  "\n<style>\n  :host {\n    font: var(--media-font,\n      var(--media-font-weight, bold)\n      var(--media-font-size, 14px) /\n      var(--media-text-content-height, var(--media-control-height, 24px))\n      var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));\n    color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));\n    background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));\n    padding: var(--media-control-padding, 10px);\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    vertical-align: middle;\n    box-sizing: border-box;\n    transition: background .15s linear;\n    pointer-events: auto;\n    cursor: pointer;\n    -webkit-tap-highlight-color: transparent;\n  }\n\n  \n  :host(:focus-visible) {\n    box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);\n    outline: 0;\n  }\n  \n  :host(:where(:focus)) {\n    box-shadow: none;\n    outline: 0;\n  }\n\n  :host(:hover) {\n    background: var(--media-control-hover-background, rgba(50 50 70 / .7));\n  }\n\n  svg, img, ::slotted(svg), ::slotted(img) {\n    width: var(--media-button-icon-width);\n    height: var(--media-button-icon-height, var(--media-control-height, 24px));\n    transform: var(--media-button-icon-transform);\n    transition: var(--media-button-icon-transition);\n    fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));\n    vertical-align: middle;\n    max-width: 100%;\n    max-height: 100%;\n    min-width: 100%;\n  }\n</style>\n";
class ie extends G.HTMLElement {
  constructor(e = {}) {
    if (
      (super(),
      J(this, K, void 0),
      Z(this, "preventClick", !1),
      J(this, Q, (e) => {
        this.preventClick || this.handleClick(e);
      }),
      J(this, q, (e) => {
        const { key: t } = e;
        this.keysUsed.includes(t)
          ? this.preventClick || this.handleClick(e)
          : this.removeEventListener("keyup", X(this, q));
      }),
      J(this, j, (e) => {
        const { metaKey: t, altKey: i, key: n } = e;
        t || i || !this.keysUsed.includes(n)
          ? this.removeEventListener("keyup", X(this, q))
          : this.addEventListener("keyup", X(this, q), { once: !0 });
      }),
      !this.shadowRoot)
    ) {
      this.attachShadow({ mode: "open" });
      const t = te.content.cloneNode(!0);
      this.nativeEl = t;
      let i = e.slotTemplate;
      i || ((i = F.createElement("template")), (i.innerHTML = `<slot>${e.defaultContent || ""}</slot>`)),
        this.nativeEl.appendChild(i.content.cloneNode(!0)),
        this.shadowRoot.appendChild(t);
    }
    const { style: t } = w(this.shadowRoot, ":host");
    t.setProperty("display", `var(--media-control-display, var(--${this.localName}-display, inline-flex))`);
  }
  static get observedAttributes() {
    return ["disabled", t.MEDIA_CONTROLLER];
  }
  enable() {
    this.addEventListener("click", X(this, Q)), this.addEventListener("keydown", X(this, j)), (this.tabIndex = 0);
  }
  disable() {
    this.removeEventListener("click", X(this, Q)),
      this.removeEventListener("keydown", X(this, j)),
      this.removeEventListener("keyup", X(this, q)),
      (this.tabIndex = -1);
  }
  attributeChangedCallback(e, i, n) {
    var a, s, r, o, l;
    e === t.MEDIA_CONTROLLER
      ? (i &&
          (null == (s = null == (a = X(this, K)) ? void 0 : a.unassociateElement) || s.call(a, this),
          ee(this, K, null)),
        n &&
          this.isConnected &&
          (ee(this, K, null == (r = this.getRootNode()) ? void 0 : r.getElementById(n)),
          null == (l = null == (o = X(this, K)) ? void 0 : o.associateElement) || l.call(o, this)))
      : "disabled" === e && n !== i && (null == n ? this.enable() : this.disable());
  }
  connectedCallback() {
    var e, i, n;
    this.hasAttribute("disabled") || this.enable(), this.setAttribute("role", "button");
    const a = this.getAttribute(t.MEDIA_CONTROLLER);
    a &&
      (ee(this, K, null == (e = this.getRootNode()) ? void 0 : e.getElementById(a)),
      null == (n = null == (i = X(this, K)) ? void 0 : i.associateElement) || n.call(i, this));
  }
  disconnectedCallback() {
    var e, t;
    this.disable(),
      null == (t = null == (e = X(this, K)) ? void 0 : e.unassociateElement) || t.call(e, this),
      ee(this, K, null);
  }
  get keysUsed() {
    return ["Enter", " "];
  }
  handleClick(e) {}
}
(K = new WeakMap()),
  (Q = new WeakMap()),
  (q = new WeakMap()),
  (j = new WeakMap()),
  G.customElements.get("media-chrome-button") || G.customElements.define("media-chrome-button", ie);
var ne = ie;
const ae = F.createElement("template");
ae.innerHTML =
  '\n  <slot name="icon"><svg aria-hidden="true" viewBox="0 0 26 24">\n  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>\n</svg>\n</slot>\n';
class se extends ie {
  static get observedAttributes() {
    return [...super.observedAttributes, a.MEDIA_AIRPLAY_UNAVAILABLE];
  }
  constructor(e = {}) {
    super({ slotTemplate: ae, ...e });
  }
  connectedCallback() {
    this.setAttribute("aria-label", v.AIRPLAY()), super.connectedCallback();
  }
  get mediaAirplayUnavailable() {
    return O(this, a.MEDIA_AIRPLAY_UNAVAILABLE);
  }
  set mediaAirplayUnavailable(e) {
    x(this, a.MEDIA_AIRPLAY_UNAVAILABLE, e);
  }
  handleClick() {
    const t = new G.CustomEvent(e.MEDIA_AIRPLAY_REQUEST, { composed: !0, bubbles: !0 });
    this.dispatchEvent(t);
  }
}
G.customElements.get("media-airplay-button") || G.customElements.define("media-airplay-button", se);
var re = se;
const oe = F.createElement("template");
oe.innerHTML = `\n  <style>\n  :host([${a.MEDIA_IS_CASTING}]) slot:not([name=exit]):not([name=icon]) {\n    display: none !important;\n  }\n\n  \n  :host(:not([${a.MEDIA_IS_CASTING}])) slot:not([name=enter]):not([name=icon]) {\n    display: none !important;\n  }\n  </style>\n\n  <slot name="icon">\n    <slot name="enter"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg></slot>\n    <slot name="exit"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg></slot>\n  </slot>\n`;
const le = (e) => {
  const t = null != e.getAttribute(a.MEDIA_IS_CASTING) ? v.EXIT_CAST() : v.ENTER_CAST();
  e.setAttribute("aria-label", t);
};
class de extends ie {
  static get observedAttributes() {
    return [...super.observedAttributes, a.MEDIA_IS_CASTING, a.MEDIA_CAST_UNAVAILABLE];
  }
  constructor(e = {}) {
    super({ slotTemplate: oe, ...e });
  }
  connectedCallback() {
    le(this), super.connectedCallback();
  }
  attributeChangedCallback(e, t, i) {
    e === a.MEDIA_IS_CASTING && le(this), super.attributeChangedCallback(e, t, i);
  }
  get mediaIsCasting() {
    return U(this, a.MEDIA_IS_CASTING);
  }
  set mediaIsCasting(e) {
    P(this, a.MEDIA_IS_CASTING, e);
  }
  get mediaCastUnavailable() {
    return O(this, a.MEDIA_CAST_UNAVAILABLE);
  }
  set mediaCastUnavailable(e) {
    x(this, a.MEDIA_CAST_UNAVAILABLE, e);
  }
  handleClick() {
    const t = this.mediaIsCasting ? e.MEDIA_EXIT_CAST_REQUEST : e.MEDIA_ENTER_CAST_REQUEST;
    this.dispatchEvent(new G.CustomEvent(t, { composed: !0, bubbles: !0 }));
  }
}
G.customElements.get("media-cast-button") || G.customElements.define("media-cast-button", de);
var ce,
  ue = de,
  he = (e, t, i) => {
    if (!t.has(e)) throw TypeError("Cannot " + i);
  },
  Ee = (e, t, i) => (he(e, t, "read from private field"), i ? i.call(e) : t.get(e)),
  me = (e, t, i, n) => (he(e, t, "write to private field"), n ? n.call(e, i) : t.set(e, i), i);
const ve = F.createElement("template");
ve.innerHTML =
  "\n<style>\n  :host {\n    display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));\n    box-sizing: border-box;\n  }\n</style>\n";
class pe extends G.HTMLElement {
  constructor(e = {}) {
    if (
      (super(),
      ((e, t, i) => {
        if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
        t instanceof WeakSet ? t.add(e) : t.set(e, i);
      })(this, ce, void 0),
      !this.shadowRoot)
    ) {
      const t = this.attachShadow({ mode: "open" }),
        i = ve.content.cloneNode(!0);
      this.nativeEl = i;
      let n = e.slotTemplate;
      n || ((n = F.createElement("template")), (n.innerHTML = `<slot>${e.defaultContent || ""}</slot>`)),
        this.nativeEl.appendChild(n.content.cloneNode(!0)),
        t.appendChild(i);
    }
  }
  static get observedAttributes() {
    return [t.MEDIA_CONTROLLER, a.MEDIA_PAUSED];
  }
  attributeChangedCallback(e, i, n) {
    var a, s, r, o, l;
    e === t.MEDIA_CONTROLLER &&
      (i &&
        (null == (s = null == (a = Ee(this, ce)) ? void 0 : a.unassociateElement) || s.call(a, this),
        me(this, ce, null)),
      n &&
        this.isConnected &&
        (me(this, ce, null == (r = this.getRootNode()) ? void 0 : r.getElementById(n)),
        null == (l = null == (o = Ee(this, ce)) ? void 0 : o.associateElement) || l.call(o, this)));
  }
  connectedCallback() {
    var e, i, n, a;
    (this.tabIndex = -1),
      this.setAttribute("aria-hidden", "true"),
      me(
        this,
        ce,
        (function (e) {
          var i;
          const n = e.getAttribute(t.MEDIA_CONTROLLER);
          if (n) return null == (i = e.getRootNode()) ? void 0 : i.getElementById(n);
          return R(e, "media-controller");
        })(this),
      ),
      this.getAttribute(t.MEDIA_CONTROLLER) &&
        (null == (i = null == (e = Ee(this, ce)) ? void 0 : e.associateElement) || i.call(e, this)),
      null == (n = Ee(this, ce)) || n.addEventListener("pointerdown", this),
      null == (a = Ee(this, ce)) || a.addEventListener("click", this);
  }
  disconnectedCallback() {
    var e, i, n, a;
    this.getAttribute(t.MEDIA_CONTROLLER) &&
      (null == (i = null == (e = Ee(this, ce)) ? void 0 : e.unassociateElement) || i.call(e, this)),
      null == (n = Ee(this, ce)) || n.removeEventListener("pointerdown", this),
      null == (a = Ee(this, ce)) || a.removeEventListener("click", this),
      me(this, ce, null);
  }
  handleEvent(e) {
    var t;
    const i = null == (t = e.composedPath()) ? void 0 : t[0];
    if (["video", "media-controller"].includes(null == i ? void 0 : i.localName))
      if ("pointerdown" === e.type) this._pointerType = e.pointerType;
      else if ("click" === e.type) {
        const { clientX: t, clientY: i } = e,
          { left: n, top: a, width: s, height: r } = this.getBoundingClientRect(),
          o = t - n,
          l = i - a;
        if (o < 0 || l < 0 || o > s || l > r || (0 === s && 0 === r)) return;
        const { pointerType: d = this._pointerType } = e;
        if (((this._pointerType = void 0), d === c.TOUCH)) return void this.handleTap(e);
        if (d === c.MOUSE) return void this.handleMouseClick(e);
      }
  }
  get mediaPaused() {
    return U(this, a.MEDIA_PAUSED);
  }
  set mediaPaused(e) {
    P(this, a.MEDIA_PAUSED, e);
  }
  handleTap(e) {}
  handleMouseClick(t) {
    const i = this.mediaPaused ? e.MEDIA_PLAY_REQUEST : e.MEDIA_PAUSE_REQUEST;
    this.dispatchEvent(new G.CustomEvent(i, { composed: !0, bubbles: !0 }));
  }
}
(ce = new WeakMap()),
  G.customElements.get("media-gesture-receiver") || G.customElements.define("media-gesture-receiver", pe);
var be = pe;
const Ae = new WeakMap(),
  ge = (e) => {
    let t = Ae.get(e);
    return t || Ae.set(e, (t = new Set())), t;
  },
  Ie = new G.ResizeObserver((e) => {
    for (let t of e) for (let e of ge(t.target)) e(t);
  });
var _e,
  Me,
  fe,
  Te,
  Se,
  De,
  Le,
  ke,
  Re,
  ye,
  we,
  Ce,
  Ne = Object.defineProperty,
  Ue = (e, t, i) => (
    ((e, t, i) => {
      t in e ? Ne(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : (e[t] = i);
    })(e, "symbol" != typeof t ? t + "" : t, i),
    i
  ),
  Pe = (e, t, i) => {
    if (!t.has(e)) throw TypeError("Cannot " + i);
  },
  Oe = (e, t, i) => (Pe(e, t, "read from private field"), i ? i.call(e) : t.get(e)),
  xe = (e, t, i) => {
    if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
    t instanceof WeakSet ? t.add(e) : t.set(e, i);
  },
  Ve = (e, t, i, n) => (Pe(e, t, "write to private field"), n ? n.call(e, i) : t.set(e, i), i),
  Be = (e, t, i) => (Pe(e, t, "access private method"), i);
const We = {
    AUDIO: "audio",
    AUTOHIDE: "autohide",
    BREAKPOINTS: "breakpoints",
    GESTURES_DISABLED: "gesturesdisabled",
    KEYBOARD_CONTROL: "keyboardcontrol",
    NO_AUTOHIDE: "noautohide",
    USER_INACTIVE: "userinactive",
  },
  $e = F.createElement("template");
$e.innerHTML = `\n  <style>\n    \n    :host([${a.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {\n      outline: none;\n    }\n\n    :host {\n      box-sizing: border-box;\n      position: relative;\n      display: inline-block;\n      line-height: 0;\n      background-color: var(--media-background-color, #000);\n    }\n\n    :host(:not([${We.AUDIO}])) [part~=layer]:not([part~=media-layer]) {\n      position: absolute;\n      top: 0;\n      left: 0;\n      bottom: 0;\n      right: 0;\n      display: flex;\n      flex-flow: column nowrap;\n      align-items: start;\n      pointer-events: none;\n      background: none;\n    }\n\n    slot[name=media] {\n      display: var(--media-slot-display, contents);\n    }\n\n    \n    :host([${We.AUDIO}]) slot[name=media] {\n      display: var(--media-slot-display, none);\n    }\n\n    \n    :host([${We.AUDIO}]) [part~=layer][part~=gesture-layer] {\n      height: 0;\n      display: block;\n    }\n\n    \n    :host(:not([${We.AUDIO}])[${We.GESTURES_DISABLED}]) ::slotted([slot=gestures-chrome]),\n    :host(:not([${We.AUDIO}])[${We.GESTURES_DISABLED}]) media-gesture-receiver[slot=gestures-chrome] {\n      display: none;\n    }\n\n    \n    ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator)) {\n      pointer-events: auto;\n    }\n\n    :host(:not([${We.AUDIO}])) *[part~=layer][part~=centered-layer] {\n      align-items: center;\n      justify-content: center;\n    }\n\n    :host(:not([${We.AUDIO}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),\n    :host(:not([${We.AUDIO}])) media-gesture-receiver[slot=gestures-chrome] {\n      align-self: stretch;\n      flex-grow: 1;\n    }\n\n    slot[name=middle-chrome] {\n      display: inline;\n      flex-grow: 1;\n      pointer-events: none;\n      background: none;\n    }\n\n    \n    ::slotted([slot=media]),\n    ::slotted([slot=poster]) {\n      width: 100%;\n      height: 100%;\n    }\n\n    \n    :host(:not([${We.AUDIO}])) .spacer {\n      flex-grow: 1;\n    }\n\n    \n    :host(:-webkit-full-screen) {\n      \n      width: 100% !important;\n      height: 100% !important;\n    }\n\n    \n    ::slotted(:not([slot=media]):not([${We.NO_AUTOHIDE}])) {\n      opacity: 1;\n      transition: opacity 0.25s;\n    }\n\n    \n    :host([${We.USER_INACTIVE}]:not([${a.MEDIA_PAUSED}]):not([${a.MEDIA_IS_CASTING}]):not([${We.AUDIO}])) ::slotted(:not([slot=media]):not([${We.NO_AUTOHIDE}])) {\n      opacity: 0;\n      transition: opacity 1s;\n    }\n\n    :host([${We.USER_INACTIVE}]:not([${a.MEDIA_PAUSED}]):not([${a.MEDIA_IS_CASTING}]):not([${We.AUDIO}])) ::slotted([slot=media]) {\n      cursor: none;\n    }\n\n    ::slotted(media-control-bar)  {\n      align-self: stretch;\n    }\n\n    \n    :host(:not([${We.AUDIO}])[${a.MEDIA_HAS_PLAYED}]) slot[name=poster] {\n      display: none;\n    }\n  </style>\n\n  <slot name="media" part="layer media-layer"></slot>\n  <slot name="poster" part="layer poster-layer"></slot>\n  <slot name="gestures-chrome" part="layer gesture-layer">\n    <media-gesture-receiver slot="gestures-chrome"></media-gesture-receiver>\n  </slot>\n  <span part="layer vertical-layer">\n    <slot name="top-chrome" part="top chrome"></slot>\n    <slot name="middle-chrome" part="middle chrome"></slot>\n    <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>\n    \n    <slot part="bottom chrome"></slot>\n  </span>\n`;
const He = Object.values(a),
  Ge = "sm:384 md:576 lg:768 xl:960";
function Fe(e) {
  !(function (e, t) {
    var i;
    if (!e.isConnected) return;
    const n = (function (e) {
        const t = e.split(/\s+/);
        return Object.fromEntries(t.map((e) => e.split(":")));
      })(null != (i = e.getAttribute(We.BREAKPOINTS)) ? i : Ge),
      a = (function (e, t) {
        return Object.keys(e).filter((i) => t >= e[i]);
      })(n, t);
    let r = !1;
    if (
      (Object.keys(n).forEach((t) => {
        a.includes(t)
          ? e.hasAttribute(`breakpoint${t}`) || (e.setAttribute(`breakpoint${t}`, ""), (r = !0))
          : e.hasAttribute(`breakpoint${t}`) && (e.removeAttribute(`breakpoint${t}`), (r = !0));
      }),
      r)
    ) {
      const t = new CustomEvent(s.BREAKPOINTS_CHANGE, { detail: a });
      e.dispatchEvent(t);
    }
  })(e.target, e.contentRect.width);
}
class Ke extends G.HTMLElement {
  constructor() {
    super(),
      xe(this, fe),
      xe(this, Se),
      xe(this, Le),
      xe(this, Re),
      xe(this, we),
      xe(this, _e, 0),
      xe(this, Me, void 0),
      Ue(this, "breakpointsComputed", !1),
      this.shadowRoot || (this.attachShadow({ mode: "open" }), this.shadowRoot.appendChild($e.content.cloneNode(!0)));
    new MutationObserver((e) => {
      const t = this.media;
      for (let i of e)
        "childList" === i.type &&
          (i.removedNodes.forEach((e) => {
            if ("media" == e.slot && i.target == this) {
              let n = i.previousSibling && i.previousSibling.previousElementSibling;
              if (n && t) {
                let t = "media" !== n.slot;
                for (; null !== (n = n.previousSibling); ) "media" == n.slot && (t = !1);
                t && this.mediaUnsetCallback(e);
              } else this.mediaUnsetCallback(e);
            }
          }),
          t &&
            i.addedNodes.forEach((e) => {
              e === t && t !== Oe(this, Me) && this.handleMediaUpdated(t).then((e) => this.mediaSetCallback(e));
            }));
    }).observe(this, { childList: !0, subtree: !0 });
    let e = !1;
    var t, i;
    (i = (t) => {
      e ||
        (setTimeout(() => {
          Fe(t),
            (e = !1),
            this.breakpointsComputed ||
              ((this.breakpointsComputed = !0),
              this.dispatchEvent(new CustomEvent(s.BREAKPOINTS_COMPUTED, { bubbles: !0, composed: !0 })));
        }, 0),
        (e = !0));
    }),
      ge((t = this)).add(i),
      Ie.observe(t);
    let n = this.querySelector(":scope > slot[slot=media]");
    n &&
      n.addEventListener("slotchange", () => {
        n.assignedElements({ flatten: !0 }).length
          ? this.media &&
            this.media !== Oe(this, Me) &&
            this.handleMediaUpdated(this.media).then((e) => this.mediaSetCallback(e))
          : this.mediaUnsetCallback(Oe(this, Me));
      });
  }
  static get observedAttributes() {
    return [We.AUTOHIDE, We.GESTURES_DISABLED]
      .concat(He)
      .filter((e) => ![a.MEDIA_RENDITION_LIST, a.MEDIA_AUDIO_TRACK_LIST].includes(e));
  }
  attributeChangedCallback(e, t, i) {
    e.toLowerCase() == We.AUTOHIDE && (this.autohide = i);
  }
  get media() {
    let e = this.querySelector(":scope > [slot=media]");
    return "SLOT" == (null == e ? void 0 : e.nodeName) && (e = e.assignedElements({ flatten: !0 })[0]), e;
  }
  async handleMediaUpdated(e) {
    Ve(this, Me, e);
    return e
      ? (e.localName.includes("-") && (await G.customElements.whenDefined(e.localName)), e)
      : ((e) => (
          Ve(this, Me, null),
          console.error('Media Chrome: Media element set with slot="media" does not appear to be compatible.', e),
          Promise.reject(e)
        ))(e);
  }
  connectedCallback() {
    var e;
    const t = null != this.getAttribute(We.AUDIO) ? m.AUDIO_PLAYER() : m.VIDEO_PLAYER();
    this.setAttribute("role", "region"),
      this.setAttribute("aria-label", t),
      this.media &&
        this.media !== Oe(this, Me) &&
        this.handleMediaUpdated(this.media).then((e) => this.mediaSetCallback(e)),
      this.setAttribute(We.USER_INACTIVE, ""),
      this.addEventListener("pointerdown", this),
      this.addEventListener("pointermove", this),
      this.addEventListener("pointerup", this),
      this.addEventListener("mouseleave", this),
      this.addEventListener("keyup", this),
      null == (e = G.window) || e.addEventListener("mouseup", this);
  }
  disconnectedCallback() {
    var e;
    this.media && this.mediaUnsetCallback(this.media), null == (e = G.window) || e.removeEventListener("mouseup", this);
  }
  mediaSetCallback(e) {}
  mediaUnsetCallback(e) {}
  handleEvent(e) {
    switch (e.type) {
      case "pointerdown":
        Ve(this, _e, e.timeStamp);
        break;
      case "pointermove":
        Be(this, fe, Te).call(this, e);
        break;
      case "pointerup":
        Be(this, Se, De).call(this, e);
        break;
      case "mouseleave":
        Be(this, Le, ke).call(this);
        break;
      case "mouseup":
        this.removeAttribute(We.KEYBOARD_CONTROL);
        break;
      case "keyup":
        Be(this, we, Ce).call(this), this.setAttribute(We.KEYBOARD_CONTROL, "");
    }
  }
  set autohide(e) {
    (e = Number(e)), (this._autohide = isNaN(e) ? 0 : e);
  }
  get autohide() {
    return void 0 === this._autohide ? 2 : this._autohide;
  }
}
(_e = new WeakMap()),
  (Me = new WeakMap()),
  (fe = new WeakSet()),
  (Te = function (e) {
    if ("mouse" !== e.pointerType) {
      const t = 250;
      if (e.timeStamp - Oe(this, _e) < t) return;
    }
    Be(this, Re, ye).call(this),
      clearTimeout(this._inactiveTimeout),
      [this, this.media].includes(e.target) && Be(this, we, Ce).call(this);
  }),
  (Se = new WeakSet()),
  (De = function (e) {
    if ("touch" === e.pointerType) {
      const t = !this.hasAttribute(We.USER_INACTIVE);
      [this, this.media].includes(e.target) && t ? Be(this, Le, ke).call(this) : Be(this, we, Ce).call(this);
    } else
      e
        .composedPath()
        .some((e) => ["media-play-button", "media-fullscreen-button"].includes(null == e ? void 0 : e.localName)) &&
        Be(this, we, Ce).call(this);
  }),
  (Le = new WeakSet()),
  (ke = function () {
    if (this.autohide < 0) return;
    if (this.hasAttribute(We.USER_INACTIVE)) return;
    this.setAttribute(We.USER_INACTIVE, "");
    const e = new G.CustomEvent(s.USER_INACTIVE, { composed: !0, bubbles: !0, detail: !0 });
    this.dispatchEvent(e);
  }),
  (Re = new WeakSet()),
  (ye = function () {
    if (!this.hasAttribute(We.USER_INACTIVE)) return;
    this.removeAttribute(We.USER_INACTIVE);
    const e = new G.CustomEvent(s.USER_INACTIVE, { composed: !0, bubbles: !0, detail: !1 });
    this.dispatchEvent(e);
  }),
  (we = new WeakSet()),
  (Ce = function () {
    Be(this, Re, ye).call(this),
      clearTimeout(this._inactiveTimeout),
      this.autohide < 0 ||
        (this._inactiveTimeout = setTimeout(() => {
          Be(this, Le, ke).call(this);
        }, 1e3 * this.autohide));
  });
var Qe,
  qe,
  je,
  Ye,
  Ze,
  ze,
  Xe = (e, t, i) => {
    if (!t.has(e)) throw TypeError("Cannot " + i);
  },
  Je = (e, t, i) => (Xe(e, t, "read from private field"), i ? i.call(e) : t.get(e)),
  et = (e, t, i) => {
    if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
    t instanceof WeakSet ? t.add(e) : t.set(e, i);
  },
  tt = (e, t, i, n) => (Xe(e, t, "write to private field"), n ? n.call(e, i) : t.set(e, i), i);
class it {
  constructor(e, t, { defaultValue: i } = { defaultValue: void 0 }) {
    et(this, Ze),
      et(this, Qe, void 0),
      et(this, qe, void 0),
      et(this, je, void 0),
      et(this, Ye, new Set()),
      tt(this, Qe, e),
      tt(this, qe, t),
      tt(this, je, new Set(i));
  }
  [Symbol.iterator]() {
    return Je(this, Ze, ze).values();
  }
  get length() {
    return Je(this, Ze, ze).size;
  }
  get value() {
    var e;
    return null != (e = [...Je(this, Ze, ze)].join(" ")) ? e : "";
  }
  set value(e) {
    var t;
    e !== this.value &&
      (tt(this, Ye, new Set()), this.add(...(null != (t = null == e ? void 0 : e.split(" ")) ? t : [])));
  }
  toString() {
    return this.value;
  }
  item(e) {
    return [...Je(this, Ze, ze)][e];
  }
  values() {
    return Je(this, Ze, ze).values();
  }
  forEach(e) {
    Je(this, Ze, ze).forEach(e);
  }
  add(...e) {
    var t, i;
    e.forEach((e) => Je(this, Ye).add(e)),
      ("" !== this.value || (null == (t = Je(this, Qe)) ? void 0 : t.hasAttribute(`${Je(this, qe)}`))) &&
        (null == (i = Je(this, Qe)) || i.setAttribute(`${Je(this, qe)}`, `${this.value}`));
  }
  remove(...e) {
    var t;
    e.forEach((e) => Je(this, Ye).delete(e)),
      null == (t = Je(this, Qe)) || t.setAttribute(`${Je(this, qe)}`, `${this.value}`);
  }
  contains(e) {
    return Je(this, Ze, ze).has(e);
  }
  toggle(e, t) {
    return void 0 !== t
      ? t
        ? (this.add(e), !0)
        : (this.remove(e), !1)
      : this.contains(e)
      ? (this.remove(e), !1)
      : (this.add(e), !0);
  }
  replace(e, t) {
    return this.remove(e), this.add(t), e === t;
  }
}
(Qe = new WeakMap()),
  (qe = new WeakMap()),
  (je = new WeakMap()),
  (Ye = new WeakMap()),
  (Ze = new WeakSet()),
  (ze = function () {
    return Je(this, Ye).size ? Je(this, Ye) : Je(this, je);
  });
const nt = (e = "") => {
    let [t, i, n] = e.split(":");
    return (
      (t = "cc" === t ? "captions" : "subtitles"), { kind: t, language: i, label: n ? decodeURIComponent(n) : void 0 }
    );
  },
  at = (e = "", t = {}) =>
    ((e = "") => e.split(/\s+/))(e).map((e) => {
      const i = nt(e);
      return { ...t, ...i };
    }),
  st = (e) =>
    Array.isArray(e) ? e.map((e) => ("string" == typeof e ? nt(e) : e)) : "string" == typeof e ? at(e) : [e],
  rt = ({ kind: e, label: t, language: i } = { kind: "subtitles" }) =>
    t ? `${"captions" === e ? "cc" : "sb"}:${i}:${encodeURIComponent(t)}` : i,
  ot = (e = []) => Array.prototype.map.call(e, rt).join(" "),
  lt = (e) => {
    const t = Object.entries(e).map(([e, t]) =>
      (
        (e, t) => (i) =>
          i[e] === t
      )(e, t),
    );
    return (e) => t.every((t) => t(e));
  },
  dt = (e, t = [], i = []) => {
    const n = st(i).map(lt);
    Array.from(t)
      .filter((e) => n.some((t) => t(e)))
      .forEach((t) => {
        t.mode = e;
      });
  },
  ct = (e, t = () => !0) => {
    if (!(null == e ? void 0 : e.textTracks)) return [];
    const i = "function" == typeof t ? t : lt(t);
    return Array.from(e.textTracks).filter(i);
  },
  ut = {
    enter: "requestFullscreen",
    exit: "exitFullscreen",
    rootEvents: ["fullscreenchange"],
    mediaEvents: [],
    element: "fullscreenElement",
    error: "fullscreenerror",
    enabled: "fullscreenEnabled",
  };
let ht;
void 0 === F.fullscreenElement &&
  ((ut.enter = "webkitRequestFullScreen"),
  (ut.exit = null != F.webkitExitFullscreen ? "webkitExitFullscreen" : "webkitCancelFullScreen"),
  (ut.rootEvents = ["webkitfullscreenchange"]),
  (ut.mediaEvents = ["webkitbeginfullscreen", "webkitendfullscreen"]),
  (ut.element = "webkitFullscreenElement"),
  (ut.error = "webkitfullscreenerror"),
  (ut.enabled = "webkitFullscreenEnabled"));
const Et = () => {
    var e, t;
    return ht || ((ht = null == (t = null == (e = F) ? void 0 : e.createElement) ? void 0 : t.call(e, "video")), ht);
  },
  mt = ((e = Et()) => {
    let t = F[ut.enabled];
    return !t && e && (t = "webkitSupportsFullscreen" in e), t;
  })(),
  vt = ((e = Et()) => "function" == typeof (null == e ? void 0 : e.requestPictureInPicture))(),
  pt = !!G.WebKitPlaybackTargetAvailabilityEvent,
  bt = !!G.chrome;
let At;
const gt = (async (e = Et()) => {
    if (!e) return !1;
    const t = e.volume;
    return (e.volume = t / 2 + 0.1), await I(0), e.volume !== t;
  })().then((e) => ((At = e), At)),
  It = Object.values(h),
  _t = (e) =>
    ct(e.media, (e) => [l.SUBTITLES, l.CAPTIONS].includes(e.kind)).sort((e, t) => (e.kind >= t.kind ? 1 : -1)),
  Mt = (e) => ct(e.media, (e) => e.mode === d.SHOWING && [l.SUBTITLES, l.CAPTIONS].includes(e.kind)),
  ft = {
    MEDIA_PAUSED: {
      get: function (e) {
        const { media: t } = e;
        return !t || t.paused;
      },
      mediaEvents: ["play", "playing", "pause", "emptied"],
    },
    MEDIA_HAS_PLAYED: {
      get: function (e) {
        const { media: t } = e;
        return !!t && !t.paused;
      },
      mediaEvents: ["playing", "emptied"],
    },
    MEDIA_ENDED: {
      get: function (e) {
        const { media: t } = e;
        return !!t && t.ended;
      },
      mediaEvents: ["seeked", "ended", "emptied"],
    },
    MEDIA_PLAYBACK_RATE: {
      get: function (e) {
        const { media: t } = e;
        return t && void 0 !== t.playbackRate ? t.playbackRate : 1;
      },
      mediaEvents: ["ratechange", "loadstart"],
    },
    MEDIA_MUTED: {
      get: function (e) {
        const { media: t } = e;
        return !(!t || void 0 === t.muted) && t.muted;
      },
      mediaEvents: ["volumechange"],
    },
    MEDIA_VOLUME: {
      get: function (e) {
        const { media: t } = e;
        return t && void 0 !== t.volume ? Number(t.volume) : 1;
      },
      mediaEvents: ["volumechange"],
    },
    MEDIA_VOLUME_LEVEL: {
      get: function (e) {
        const { media: t } = e;
        let i = "high";
        if (!t || void 0 === t.volume) return i;
        const { muted: n, volume: a } = t;
        return 0 === a || n ? (i = "off") : a < 0.5 ? (i = "low") : a < 0.75 && (i = "medium"), i;
      },
      mediaEvents: ["volumechange"],
    },
    MEDIA_CURRENT_TIME: {
      get: function (e) {
        const { media: t } = e;
        return t && void 0 !== t.currentTime ? t.currentTime : 0;
      },
      mediaEvents: ["playing", "pause", "timeupdate", "loadedmetadata"],
    },
    MEDIA_DURATION: {
      get: function (e) {
        const { media: t } = e;
        return !e.hasAttribute("defaultduration") ||
          (t && t.duration && !Number.isNaN(t.duration) && Number.isFinite(t.duration))
          ? t && Number.isFinite(t.duration)
            ? t.duration
            : Number.NaN
          : +e.getAttribute("defaultduration");
      },
      mediaEvents: ["durationchange", "loadedmetadata", "emptied"],
    },
    MEDIA_SEEKABLE: {
      get: function (e) {
        var t;
        const { media: i } = e;
        if (!(null == (t = null == i ? void 0 : i.seekable) ? void 0 : t.length)) return;
        const n = i.seekable.start(0),
          a = i.seekable.end(i.seekable.length - 1);
        return n || a ? [Number(n.toFixed(3)), Number(a.toFixed(3))] : void 0;
      },
      mediaEvents: ["loadedmetadata", "emptied", "progress"],
    },
    MEDIA_LOADING: {
      get: function (e) {
        var t;
        return !!((null == (t = e.media) ? void 0 : t.readyState) < 3);
      },
      mediaEvents: ["waiting", "playing", "emptied"],
    },
    MEDIA_BUFFERED: {
      get: function (e) {
        var t, i, n;
        const a = null == (t = e.media) ? void 0 : t.buffered;
        return Array.from(null != (n = null == (i = e.media) ? void 0 : i.buffered) ? n : []).map((e, t) => [
          Number(a.start(t)).toFixed(3),
          Number(a.end(t)).toFixed(3),
        ]);
      },
      mediaEvents: ["progress", "emptied"],
    },
    MEDIA_STREAM_TYPE: {
      get: function (e) {
        const { media: t } = e;
        if (!t) return;
        const { streamType: i } = t;
        if (It.includes(i)) {
          if (i === h.UNKNOWN) {
            const t = e.getAttribute("defaultstreamtype");
            return [h.LIVE, h.ON_DEMAND].includes(t) ? t : void 0;
          }
          return i;
        }
        const n = t.duration;
        if (n === 1 / 0) return h.LIVE;
        if (Number.isFinite(n)) return h.ON_DEMAND;
        {
          const t = e.getAttribute("defaultstreamtype");
          if ([h.LIVE, h.ON_DEMAND].includes(t)) return t;
        }
      },
      mediaEvents: ["emptied", "durationchange", "loadedmetadata", "streamtypechange"],
    },
    MEDIA_TARGET_LIVE_WINDOW: {
      get: function (e) {
        const { media: t } = e;
        if (!t) return Number.NaN;
        const { targetLiveWindow: i } = t,
          n = ft.MEDIA_STREAM_TYPE.get(e);
        return (null != i && !Number.isNaN(i)) || n !== h.LIVE ? i : 0;
      },
      mediaEvents: ["emptied", "durationchange", "loadedmetadata", "streamtypechange", "targetlivewindowchange"],
    },
    MEDIA_TIME_IS_LIVE: {
      get: function (e) {
        const { media: t } = e;
        if (!t) return !1;
        if ("number" == typeof t.liveEdgeStart)
          return !Number.isNaN(t.liveEdgeStart) && t.currentTime >= t.liveEdgeStart;
        if (!("live" === ft.MEDIA_STREAM_TYPE.get(e))) return !1;
        const i = t.seekable;
        if (!i) return !0;
        if (!i.length) return !1;
        const n = e.hasAttribute("liveedgeoffset") ? Number(e.getAttribute("liveedgeoffset")) : 10,
          a = i.end(i.length - 1) - n;
        return t.currentTime >= a;
      },
      mediaEvents: ["playing", "timeupdate", "progress", "waiting", "emptied"],
    },
    MEDIA_IS_FULLSCREEN: {
      get: function (e, t) {
        var i, n;
        const a = e.media;
        if (a && void 0 === F[ut.element] && "webkitDisplayingFullscreen" in a)
          return a.webkitDisplayingFullscreen && "fullscreen" === a.webkitPresentationMode;
        let s;
        if (t) {
          s = F[ut.element] ? t.target : null;
        } else
          s =
            null !=
            (n =
              null ==
              (i = (function (e) {
                var t;
                const i = null == (t = null == e ? void 0 : e.getRootNode) ? void 0 : t.call(e);
                return i instanceof ShadowRoot || i instanceof Document ? i : null;
              })(e))
                ? void 0
                : i.fullscreenElement)
              ? n
              : F[ut.element];
        return k(e.fullscreenElement, s);
      },
      rootEvents: ut.rootEvents,
      mediaEvents: ut.mediaEvents,
    },
    MEDIA_IS_PIP: {
      get: function (e, t) {
        var i;
        const n = e.media;
        if (!n) return !1;
        if (t) return "enterpictureinpicture" == t.type;
        {
          const t = null != (i = e.getRootNode().pictureInPictureElement) ? i : F.pictureInPictureElement;
          return k(n, t);
        }
      },
      mediaEvents: ["enterpictureinpicture", "leavepictureinpicture"],
    },
    MEDIA_IS_CASTING: {
      get: function (e, t) {
        var i;
        const { media: n } = e;
        if (!n) return !1;
        const a = null == (i = G.CastableVideoElement) ? void 0 : i.castElement;
        let s = k(n, a);
        return (
          "castchange" === (null == t ? void 0 : t.type) &&
            "CONNECTING" === (null == t ? void 0 : t.detail) &&
            (s = "connecting"),
          s
        );
      },
      mediaEvents: ["entercast", "leavecast", "castchange"],
    },
    MEDIA_AIRPLAY_UNAVAILABLE: {
      get: function (e, t) {
        return pt
          ? t && "available" !== t.availability && "not-available" === t.availability
            ? u.UNAVAILABLE
            : void 0
          : u.UNSUPPORTED;
      },
      mediaEvents: ["webkitplaybacktargetavailabilitychanged"],
    },
    MEDIA_CAST_UNAVAILABLE: {
      get: function () {
        var e;
        const t = null == (e = G.CastableVideoElement) ? void 0 : e.castState;
        return bt && t ? (t.includes("CONNECT") ? void 0 : u.UNAVAILABLE) : u.UNSUPPORTED;
      },
      mediaEvents: ["castchange"],
    },
    MEDIA_FULLSCREEN_UNAVAILABLE: {
      get: function () {
        return mt ? void 0 : u.UNAVAILABLE;
      },
    },
    MEDIA_PIP_UNAVAILABLE: {
      get: function () {
        return vt ? void 0 : u.UNSUPPORTED;
      },
    },
    MEDIA_RENDITION_UNAVAILABLE: {
      get: function (e) {
        var t;
        const { media: i } = e;
        return (null == i ? void 0 : i.videoRenditions)
          ? (null == (t = i.videoRenditions) ? void 0 : t.length)
            ? void 0
            : u.UNAVAILABLE
          : u.UNSUPPORTED;
      },
      mediaEvents: ["emptied", "loadstart"],
      videoRenditionsEvents: ["addrendition", "removerendition"],
    },
    MEDIA_AUDIO_TRACK_UNAVAILABLE: {
      get: function (e) {
        var t, i;
        const { media: n } = e;
        return (null == n ? void 0 : n.audioTracks)
          ? (null != (i = null == (t = n.audioTracks) ? void 0 : t.length) ? i : 0) <= 1
            ? u.UNAVAILABLE
            : void 0
          : u.UNSUPPORTED;
      },
      mediaEvents: ["emptied", "loadstart"],
      audioTracksEvents: ["addtrack", "removetrack"],
    },
    MEDIA_VOLUME_UNAVAILABLE: {
      get: function (e) {
        if (void 0 !== At && !At) return u.UNSUPPORTED;
        const { media: t } = e;
        return t && void 0 === t.volume ? u.UNAVAILABLE : void 0;
      },
      mediaEvents: ["loadstart"],
    },
    MEDIA_SUBTITLES_LIST: {
      get: function (e) {
        return _t(e).map(({ kind: e, label: t, language: i }) => ({ kind: e, label: t, language: i }));
      },
      mediaEvents: ["loadstart"],
      textTracksEvents: ["addtrack", "removetrack"],
    },
    MEDIA_SUBTITLES_SHOWING: {
      get: function (e) {
        return (
          !e.hasAttribute("defaultsubtitles") ||
            e.hasAttribute(a.MEDIA_HAS_PLAYED) ||
            e.hasAttribute(a.MEDIA_SUBTITLES_SHOWING) ||
            Tt.MEDIA_TOGGLE_SUBTITLES_REQUEST(void 0, void 0, e),
          Mt(e).map(({ kind: e, label: t, language: i }) => ({ kind: e, label: t, language: i }))
        );
      },
      mediaEvents: ["loadstart"],
      textTracksEvents: ["addtrack", "removetrack", "change"],
    },
    MEDIA_RENDITION_LIST: {
      get: function (e) {
        var t;
        const { media: i } = e;
        return [...(null != (t = null == i ? void 0 : i.videoRenditions) ? t : [])];
      },
      mediaEvents: ["emptied", "loadstart"],
      videoRenditionsEvents: ["addrendition", "removerendition"],
    },
    MEDIA_RENDITION_SELECTED: {
      get: function (e) {
        var t, i, n;
        const { media: a } = e;
        return null ==
          (n =
            null == (i = null == a ? void 0 : a.videoRenditions)
              ? void 0
              : i[null == (t = a.videoRenditions) ? void 0 : t.selectedIndex])
          ? void 0
          : n.id;
      },
      mediaEvents: ["emptied"],
      videoRenditionsEvents: ["addrendition", "removerendition", "change"],
    },
    MEDIA_AUDIO_TRACK_LIST: {
      get: function (e) {
        var t;
        const { media: i } = e;
        return [...(null != (t = null == i ? void 0 : i.audioTracks) ? t : [])];
      },
      mediaEvents: ["emptied", "loadstart"],
      audioTracksEvents: ["addtrack", "removetrack"],
    },
    MEDIA_AUDIO_TRACK_ENABLED: {
      get: function (e) {
        var t, i;
        const { media: n } = e;
        return null == (i = [...(null != (t = null == n ? void 0 : n.audioTracks) ? t : [])].find((e) => e.enabled))
          ? void 0
          : i.id;
      },
      mediaEvents: ["emptied"],
      audioTracksEvents: ["addtrack", "removetrack", "change"],
    },
  },
  Tt = {
    MEDIA_PLAY_REQUEST: (e, t, i) => {
      var n;
      const a = ft.MEDIA_STREAM_TYPE.get(i),
        s = null === i.getAttribute("noautoseektolive");
      a == h.LIVE && s && Tt.MEDIA_SEEK_TO_LIVE_REQUEST(e), null == (n = e.play()) || n.catch(() => {});
    },
    MEDIA_PAUSE_REQUEST: (e) => e.pause(),
    MEDIA_MUTE_REQUEST: (e) => (e.muted = !0),
    MEDIA_UNMUTE_REQUEST: (e) => {
      (e.muted = !1), 0 === e.volume && (e.volume = 0.25);
    },
    MEDIA_VOLUME_REQUEST: (e, t, i) => {
      const n = t.detail;
      if (((e.volume = n), n > 0 && e.muted && (e.muted = !1), !i.hasAttribute("novolumepref")))
        try {
          G.localStorage.setItem("media-chrome-pref-volume", n.toString());
        } catch (e) {}
    },
    MEDIA_ENTER_FULLSCREEN_REQUEST: (e, t, i) => {
      mt
        ? (F.pictureInPictureElement && F.exitPictureInPicture(),
          i[ut.enter]
            ? i.fullscreenElement[ut.enter]()
            : e.webkitEnterFullscreen
            ? e.webkitEnterFullscreen()
            : e.requestFullscreen
            ? e.requestFullscreen()
            : console.warn("MediaChrome: Fullscreen not supported"))
        : console.warn("Fullscreen support is unavailable; not entering fullscreen");
    },
    MEDIA_EXIT_FULLSCREEN_REQUEST: () => {
      F[ut.exit]();
    },
    MEDIA_ENTER_PIP_REQUEST: (e) => {
      if (!F.pictureInPictureEnabled) return void console.warn("MediaChrome: Picture-in-picture is not enabled");
      if (!e.requestPictureInPicture)
        return void console.warn("MediaChrome: The current media does not support picture-in-picture");
      F[ut.element] && F[ut.exit]();
      const t = () => {
        console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.");
      };
      e.requestPictureInPicture().catch((i) => {
        if (11 !== i.code) throw i;
        if (0 !== e.readyState || "none" !== e.preload) throw i;
        {
          const i = () => {
              e.removeEventListener("loadedmetadata", n), (e.preload = "none");
            },
            n = () => {
              e.requestPictureInPicture().catch(t), i();
            };
          e.addEventListener("loadedmetadata", n),
            (e.preload = "metadata"),
            setTimeout(() => {
              0 === e.readyState && t(), i();
            }, 1e3);
        }
      });
    },
    MEDIA_EXIT_PIP_REQUEST: () => {
      F.pictureInPictureElement && F.exitPictureInPicture();
    },
    MEDIA_ENTER_CAST_REQUEST: (e) => {
      var t;
      (null == (t = G.CastableVideoElement) ? void 0 : t.castEnabled) &&
        (F[ut.element] && F[ut.exit](), e.requestCast());
    },
    MEDIA_EXIT_CAST_REQUEST: async () => {
      var e;
      (null == (e = G.CastableVideoElement) ? void 0 : e.castElement) && G.CastableVideoElement.exitCast();
    },
    MEDIA_SEEK_REQUEST: (e, t) => {
      const i = t.detail;
      (e.readyState > 0 || void 0 === e.readyState) && (e.currentTime = i);
    },
    MEDIA_PLAYBACK_RATE_REQUEST: (e, t) => {
      e.playbackRate = t.detail;
    },
    MEDIA_PREVIEW_REQUEST: (e, t, i) => {
      var n;
      if (!e) return;
      const s = t.detail;
      null === s && i.propagateMediaState(a.MEDIA_PREVIEW_TIME, void 0), i.propagateMediaState(a.MEDIA_PREVIEW_TIME, s);
      const [r] = ct(e, { kind: l.METADATA, label: "thumbnails" });
      if (!r || !r.cues) return;
      if (null === s)
        return (
          i.propagateMediaState(a.MEDIA_PREVIEW_IMAGE, void 0),
          void i.propagateMediaState(a.MEDIA_PREVIEW_COORDS, void 0)
        );
      const o = Array.prototype.find.call(r.cues, (e) => e.startTime >= s);
      if (!o) return;
      const d =
          /'^(?:[a-z]+:)?\/\//i.test(o.text) || null == (n = e.querySelector('track[label="thumbnails"]'))
            ? void 0
            : n.src,
        c = new URL(o.text, d),
        u = new URLSearchParams(c.hash).get("#xywh");
      i.propagateMediaState(a.MEDIA_PREVIEW_IMAGE, c.href), i.propagateMediaState(a.MEDIA_PREVIEW_COORDS, u.split(","));
    },
    MEDIA_SHOW_SUBTITLES_REQUEST: (e, t, i) => {
      var n;
      const a = _t(i),
        { detail: s = [] } = t,
        r = st(s),
        o = null == (n = r[0]) ? void 0 : n.language;
      o &&
        !(null == i ? void 0 : i.hasAttribute("nosubtitleslangpref")) &&
        G.localStorage.setItem("media-chrome-pref-subtitles-lang", o),
        dt(d.SHOWING, a, r);
    },
    MEDIA_DISABLE_SUBTITLES_REQUEST: (e, t, i) => {
      const n = _t(i),
        { detail: a = [] } = t;
      dt(d.DISABLED, n, a);
    },
    MEDIA_TOGGLE_SUBTITLES_REQUEST: (e, t, i) => {
      const { detail: n } = null != t ? t : {},
        a = _t(i),
        s = Mt(i),
        r = !!s.length;
      if (!(!a.length || (r && n) || (!r && !1 === n)))
        if (r) dt(d.DISABLED, a, s);
        else {
          let e = a[0];
          if (!(null == i ? void 0 : i.hasAttribute("nosubtitleslangpref"))) {
            const t = G.localStorage.getItem("media-chrome-pref-subtitles-lang"),
              i = t ? [t, ...G.navigator.languages] : G.navigator.languages,
              n = a
                .filter((e) => i.some((t) => e.language.toLowerCase().startsWith(t.split("-")[0])))
                .sort(
                  (e, t) =>
                    i.findIndex((t) => e.language.toLowerCase().startsWith(t.split("-")[0])) -
                    i.findIndex((e) => t.language.toLowerCase().startsWith(e.split("-")[0])),
                );
            n[0] && (e = n[0]);
          }
          const { language: t, label: n, kind: s } = e;
          dt(d.SHOWING, a, [{ language: t, label: n, kind: s }]);
        }
    },
    MEDIA_AIRPLAY_REQUEST: (e) => {
      e &&
        (e.webkitShowPlaybackTargetPicker && G.WebKitPlaybackTargetAvailabilityEvent
          ? e.webkitShowPlaybackTargetPicker()
          : console.warn("received a request to select AirPlay but AirPlay is not supported in this environment"));
    },
    MEDIA_SEEK_TO_LIVE_REQUEST: (e) => {
      const t = e.seekable;
      t
        ? t.length
          ? (e.currentTime = t.end(t.length - 1))
          : console.warn("MediaController: Media is unable to seek to live.")
        : console.warn("MediaController: Media element does not support seeking to live.");
    },
    MEDIA_RENDITION_REQUEST: (e, t) => {
      if (!(null == e ? void 0 : e.videoRenditions))
        return void console.warn("MediaController: Rendition selection not supported by this media.");
      const i = t.detail,
        n = [...e.videoRenditions].findIndex((e) => e.id == i);
      e.videoRenditions.selectedIndex != n && (e.videoRenditions.selectedIndex = n);
    },
    MEDIA_AUDIO_TRACK_REQUEST: (e, t) => {
      if (!(null == e ? void 0 : e.audioTracks))
        return void console.warn("MediaController: Audio track selection not supported by this media.");
      const i = t.detail;
      for (let t of e.audioTracks) t.enabled = i == t.id;
    },
  };
var St,
  Dt,
  Lt,
  kt,
  Rt,
  yt,
  wt,
  Ct = (e, t, i) => {
    if (!t.has(e)) throw TypeError("Cannot " + i);
  },
  Nt = (e, t, i) => (Ct(e, t, "read from private field"), i ? i.call(e) : t.get(e)),
  Ut = (e, t, i) => {
    if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
    t instanceof WeakSet ? t.add(e) : t.set(e, i);
  },
  Pt = (e, t, i, n) => (Ct(e, t, "write to private field"), n ? n.call(e, i) : t.set(e, i), i),
  Ot = (e, t, i) => (Ct(e, t, "access private method"), i);
const xt = ["ArrowLeft", "ArrowRight", "Enter", " ", "f", "m", "k", "c"],
  Vt = "defaultsubtitles",
  Bt = "defaultstreamtype",
  Wt = "defaultduration",
  $t = "fullscreenelement",
  Ht = "hotkeys",
  Gt = "keysused",
  Ft = "nohotkeys";
class Kt extends Ke {
  constructor() {
    super(),
      Ut(this, kt),
      Ut(this, yt),
      Ut(this, St, new it(this, Ht)),
      Ut(this, Dt, void 0),
      Ut(this, Lt, void 0),
      void 0 === ft.MEDIA_VOLUME_UNAVAILABLE.get(this) &&
        gt.then(() => {
          this.propagateMediaState(a.MEDIA_VOLUME_UNAVAILABLE, ft.MEDIA_VOLUME_UNAVAILABLE.get(this));
        }),
      (this.mediaStateReceivers = []),
      (this.associatedElementSubscriptions = new Map()),
      this.associateElement(this),
      Object.keys(Tt).forEach((t) => {
        const i = `_handle${g(t, !0)}`;
        (this[i] = (e) => {
          e.stopPropagation(),
            this.media ? Tt[t](this.media, e, this) : console.warn("MediaController: No media available.");
        }),
          this.addEventListener(e[t], this[i]);
      }),
      (this._mediaStatePropagators = {}),
      Object.keys(ft).forEach((e) => {
        this._mediaStatePropagators[e] = (t) => {
          this.propagateMediaState(i[e], ft[e].get(this, t));
        };
      });
  }
  static get observedAttributes() {
    return super.observedAttributes.concat(Ft, Ht, Bt, Vt, Wt);
  }
  get fullscreenElement() {
    var e;
    return null != (e = Nt(this, Dt)) ? e : this;
  }
  set fullscreenElement(e) {
    this.hasAttribute($t) && this.removeAttribute($t), Pt(this, Dt, e);
  }
  attributeChangedCallback(t, n, a) {
    var s;
    if ((super.attributeChangedCallback(t, n, a), t === Ft))
      a !== n && "" === a
        ? (this.hasAttribute(Ht) &&
            console.warn("Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),
          this.disableHotkeys())
        : a !== n && null === a && this.enableHotkeys();
    else if (t === Ht) Nt(this, St).value = a;
    else if (t === Vt && a !== n && "" === a)
      this.dispatchEvent(
        new G.CustomEvent(e.MEDIA_TOGGLE_SUBTITLES_REQUEST, { composed: !0, bubbles: !0, detail: !0 }),
      );
    else if (t === Bt) this.propagateMediaState(i.MEDIA_STREAM_TYPE);
    else if (t === $t) {
      const e = a ? (null == (s = Nt(this, Lt)) ? void 0 : s.getElementById(a)) : void 0;
      Pt(this, Dt, e);
    }
  }
  connectedCallback() {
    super.connectedCallback(), Pt(this, Lt, this.getRootNode()), this.enableHotkeys();
  }
  disconnectedCallback() {
    super.disconnectedCallback(),
      this.disableHotkeys(),
      this.dispatchEvent(
        new G.CustomEvent(e.MEDIA_TOGGLE_SUBTITLES_REQUEST, { composed: !0, bubbles: !0, detail: !1 }),
      );
  }
  mediaSetCallback(e) {
    if (
      (super.mediaSetCallback(e),
      e.hasAttribute("tabindex") || (e.tabIndex = -1),
      Object.keys(ft).forEach((t) => {
        const {
            mediaEvents: i,
            rootEvents: n,
            textTracksEvents: a,
            videoRenditionsEvents: s,
            audioTracksEvents: r,
          } = ft[t],
          o = this._mediaStatePropagators[t];
        null == i ||
          i.forEach((t) => {
            e.addEventListener(t, o), o();
          }),
          null == n ||
            n.forEach((e) => {
              var t;
              null == (t = Nt(this, Lt)) || t.addEventListener(e, o), o();
            }),
          null == a ||
            a.forEach((t) => {
              var i;
              null == (i = e.textTracks) || i.addEventListener(t, o), o();
            }),
          null == s ||
            s.forEach((t) => {
              var i;
              null == (i = e.videoRenditions) || i.addEventListener(t, o), o();
            }),
          null == r ||
            r.forEach((t) => {
              var i;
              null == (i = e.audioTracks) || i.addEventListener(t, o), o();
            });
      }),
      !this.hasAttribute("novolumepref"))
    )
      try {
        const t = G.localStorage.getItem("media-chrome-pref-volume");
        null !== t && (e.volume = t);
      } catch (e) {
        console.debug("Error getting volume pref", e);
      }
  }
  mediaUnsetCallback(e) {
    super.mediaUnsetCallback(e),
      Object.keys(ft).forEach((t) => {
        const {
            mediaEvents: i,
            rootEvents: n,
            textTracksEvents: a,
            videoRenditionsEvents: s,
            audioTracksEvents: r,
          } = ft[t],
          o = this._mediaStatePropagators[t];
        null == i ||
          i.forEach((t) => {
            e.removeEventListener(t, o);
          }),
          null == n ||
            n.forEach((e) => {
              var t;
              null == (t = Nt(this, Lt)) || t.removeEventListener(e, o);
            }),
          null == a ||
            a.forEach((t) => {
              var i;
              null == (i = e.textTracks) || i.removeEventListener(t, o);
            }),
          null == s ||
            s.forEach((t) => {
              var i;
              null == (i = e.videoRenditions) || i.removeEventListener(t, o), o();
            }),
          null == r ||
            r.forEach((t) => {
              var i;
              null == (i = e.audioTracks) || i.removeEventListener(t, o), o();
            });
      }),
      this.propagateMediaState(i.MEDIA_PAUSED, !0);
  }
  propagateMediaState(e, t) {
    const i = ei(this.mediaStateReceivers, e);
    if ((Jt(this.mediaStateReceivers, e, t), i === ei(this.mediaStateReceivers, e))) return;
    const n = e.toLowerCase(),
      a = new G.CustomEvent(o[n], { composed: !0, bubbles: !0, detail: t });
    this.dispatchEvent(a);
  }
  associateElement(t) {
    if (!t) return;
    const { associatedElementSubscriptions: i } = this;
    if (i.has(t)) return;
    const n = this.registerMediaStateReceiver.bind(this),
      a = this.unregisterMediaStateReceiver.bind(this),
      s = ti(t, n, a);
    Object.keys(e).forEach((i) => {
      t.addEventListener(e[i], this[`_handle${g(i, !0)}`]);
    }),
      i.set(t, s);
  }
  unassociateElement(t) {
    if (!t) return;
    const { associatedElementSubscriptions: i } = this;
    if (!i.has(t)) return;
    i.get(t)(),
      i.delete(t),
      Object.keys(e).forEach((i) => {
        t.removeEventListener(e[i], this[`_handle${g(i, !0)}`]);
      });
  }
  registerMediaStateReceiver(e) {
    if (!e) return;
    const t = this.mediaStateReceivers;
    t.indexOf(e) > -1 ||
      (t.push(e),
      Object.keys(ft).forEach((t) => {
        const n = ft[t];
        Jt([e], i[t], n.get(this));
      }));
  }
  unregisterMediaStateReceiver(e) {
    const t = this.mediaStateReceivers,
      i = t.indexOf(e);
    i < 0 || t.splice(i, 1);
  }
  enableHotkeys() {
    this.addEventListener("keydown", Ot(this, yt, wt));
  }
  disableHotkeys() {
    this.removeEventListener("keydown", Ot(this, yt, wt)), this.removeEventListener("keyup", Ot(this, kt, Rt));
  }
  get hotkeys() {
    return Nt(this, St);
  }
  keyboardShortcutHandler(t) {
    var i, n, s, r;
    if (
      (null !=
      (r =
        null != (s = null == (i = t.target.getAttribute(Gt)) ? void 0 : i.split(" "))
          ? s
          : null == (n = t.target)
          ? void 0
          : n.keysUsed)
        ? r
        : []
      )
        .map((e) => ("Space" === e ? " " : e))
        .filter(Boolean)
        .includes(t.key)
    )
      return;
    let o, l, d, c, u;
    if (!(Nt(this, St).contains(`no${t.key.toLowerCase()}`) || (" " === t.key && Nt(this, St).contains("nospace"))))
      switch (t.key) {
        case " ":
        case "k":
          (o = null != this.getAttribute(a.MEDIA_PAUSED) ? e.MEDIA_PLAY_REQUEST : e.MEDIA_PAUSE_REQUEST),
            this.dispatchEvent(new G.CustomEvent(o, { composed: !0, bubbles: !0 }));
          break;
        case "m":
          (o = "off" === this.getAttribute(a.MEDIA_VOLUME_LEVEL) ? e.MEDIA_UNMUTE_REQUEST : e.MEDIA_MUTE_REQUEST),
            this.dispatchEvent(new G.CustomEvent(o, { composed: !0, bubbles: !0 }));
          break;
        case "f":
          (o =
            null != this.getAttribute(a.MEDIA_IS_FULLSCREEN)
              ? e.MEDIA_EXIT_FULLSCREEN_REQUEST
              : e.MEDIA_ENTER_FULLSCREEN_REQUEST),
            this.dispatchEvent(new G.CustomEvent(o, { composed: !0, bubbles: !0 }));
          break;
        case "c":
          this.dispatchEvent(new G.CustomEvent(e.MEDIA_TOGGLE_SUBTITLES_REQUEST, { composed: !0, bubbles: !0 }));
          break;
        case "ArrowLeft":
          (l = this.getAttribute(a.MEDIA_CURRENT_TIME)),
            (d = l && !Number.isNaN(+l) ? +l : 0),
            (c = Math.max(d - 10, 0)),
            (u = new G.CustomEvent(e.MEDIA_SEEK_REQUEST, { composed: !0, bubbles: !0, detail: c })),
            this.dispatchEvent(u);
          break;
        case "ArrowRight":
          (l = this.getAttribute(a.MEDIA_CURRENT_TIME)),
            (d = l && !Number.isNaN(+l) ? +l : 0),
            (c = Math.max(d + 10, 0)),
            (u = new G.CustomEvent(e.MEDIA_SEEK_REQUEST, { composed: !0, bubbles: !0, detail: c })),
            this.dispatchEvent(u);
      }
  }
}
(St = new WeakMap()),
  (Dt = new WeakMap()),
  (Lt = new WeakMap()),
  (kt = new WeakSet()),
  (Rt = function (e) {
    const { key: t } = e;
    xt.includes(t) ? this.keyboardShortcutHandler(e) : this.removeEventListener("keyup", Ot(this, kt, Rt));
  }),
  (yt = new WeakSet()),
  (wt = function (e) {
    const { metaKey: t, altKey: i, key: n } = e;
    t || i || !xt.includes(n)
      ? this.removeEventListener("keyup", Ot(this, kt, Rt))
      : ([" ", "ArrowLeft", "ArrowRight"].includes(n) &&
          !(Nt(this, St).contains(`no${n.toLowerCase()}`) || (" " === n && Nt(this, St).contains("nospace"))) &&
          e.preventDefault(),
        this.addEventListener("keyup", Ot(this, kt, Rt), { once: !0 }));
  });
const Qt = Object.values(a),
  qt = Object.values(i),
  jt = (e) => {
    var i, n, a, s;
    let { observedAttributes: r } = e.constructor;
    !r &&
      (null == (i = e.nodeName) ? void 0 : i.includes("-")) &&
      (G.customElements.upgrade(e), ({ observedAttributes: r } = e.constructor));
    const o =
      null ==
      (s =
        null == (a = null == (n = null == e ? void 0 : e.getAttribute) ? void 0 : n.call(e, t.MEDIA_CHROME_ATTRIBUTES))
          ? void 0
          : a.split)
        ? void 0
        : s.call(a, /\s+/);
    return Array.isArray(r || o) ? (r || o).filter((e) => Qt.includes(e)) : [];
  },
  Yt = (e) => {
    return (
      !(null == (i = (t = e).nodeName) ? void 0 : i.includes("-")) ||
        !G.customElements.get(null == (n = t.nodeName) ? void 0 : n.toLowerCase()) ||
        t instanceof G.customElements.get(t.nodeName.toLowerCase()) ||
        G.customElements.upgrade(t),
      qt.some((e) => e in t) || !!jt(e).length
    );
    var t, i, n;
  },
  Zt = (e) => {
    var t;
    return null == (t = null == e ? void 0 : e.join) ? void 0 : t.call(e, ":");
  },
  zt = {
    [a.MEDIA_SUBTITLES_LIST]: ot,
    [a.MEDIA_SUBTITLES_SHOWING]: ot,
    [a.MEDIA_SEEKABLE]: Zt,
    [a.MEDIA_BUFFERED]: (e) => (null == e ? void 0 : e.map(Zt).join(" ")),
    [a.MEDIA_PREVIEW_COORDS]: (e) => (null == e ? void 0 : e.join(" ")),
    [a.MEDIA_RENDITION_LIST]: function (e) {
      return null == e ? void 0 : e.map(b).join(" ");
    },
    [a.MEDIA_AUDIO_TRACK_LIST]: function (e) {
      return null == e ? void 0 : e.map(A).join(" ");
    },
  },
  Xt = (e, t) => {
    if (null == (n = (i = e).closest) ? void 0 : n.call(i, '*[slot="media"]')) return;
    var i, n;
    const a = (e, t) => {
        var i, n;
        Yt(e) && t(e);
        const { children: a = [] } = null != e ? e : {};
        [
          ...a,
          ...(null != (n = null == (i = null == e ? void 0 : e.shadowRoot) ? void 0 : i.children) ? n : []),
        ].forEach((e) => Xt(e, t));
      },
      s = null == e ? void 0 : e.nodeName.toLowerCase();
    !s.includes("-") || Yt(e)
      ? a(e, t)
      : G.customElements.whenDefined(s).then(() => {
          a(e, t);
        });
  },
  Jt = (e, t, i) => {
    e.forEach((e) => {
      if (t in e) return void (e[t] = i);
      const n = jt(e),
        a = t.toLowerCase();
      n.includes(a) &&
        (async (e, t, i) => {
          var n, a;
          if ((e.isConnected || (await I(0)), "boolean" == typeof i || null == i)) return P(e, t, i);
          if ("number" == typeof i) return N(e, t, i);
          if ("string" == typeof i) return x(e, t, i);
          if (Array.isArray(i) && !i.length) return e.removeAttribute(t);
          const s = null != (a = null == (n = zt[t]) ? void 0 : n.call(zt, i)) ? a : i;
          e.setAttribute(t, s);
        })(e, a, i);
    });
  },
  ei = (e, t) => {
    for (const i of e) {
      if (t in i) return i[t];
      const e = jt(i),
        n = t.toLowerCase();
      if (e.includes(n)) return i.getAttribute(n);
    }
  },
  ti = (i, n, a) => {
    Xt(i, n);
    const s = (e) => {
        var t;
        const i = null != (t = null == e ? void 0 : e.composedPath()[0]) ? t : e.target;
        n(i);
      },
      r = (e) => {
        var t;
        const i = null != (t = null == e ? void 0 : e.composedPath()[0]) ? t : e.target;
        a(i);
      };
    i.addEventListener(e.REGISTER_MEDIA_STATE_RECEIVER, s), i.addEventListener(e.UNREGISTER_MEDIA_STATE_RECEIVER, r);
    let o = [];
    const l = (e) => {
      const t = e.target;
      "media" !== t.name &&
        (o.forEach((e) => Xt(e, a)), (o = [...t.assignedElements({ flatten: !0 })]), o.forEach((e) => Xt(e, n)));
    };
    i.addEventListener("slotchange", l);
    const d = new MutationObserver((e) => {
      e.forEach((e) => {
        const { addedNodes: i = [], removedNodes: s = [], type: r, target: o, attributeName: l } = e;
        "childList" === r
          ? (Array.prototype.forEach.call(i, (e) => Xt(e, n)), Array.prototype.forEach.call(s, (e) => Xt(e, a)))
          : "attributes" === r && l === t.MEDIA_CHROME_ATTRIBUTES && (Yt(o) ? n(o) : a(o));
      });
    });
    d.observe(i, { childList: !0, attributes: !0, subtree: !0 });
    return () => {
      Xt(i, a),
        i.removeEventListener("slotchange", l),
        d.disconnect(),
        i.removeEventListener(e.REGISTER_MEDIA_STATE_RECEIVER, s),
        i.removeEventListener(e.UNREGISTER_MEDIA_STATE_RECEIVER, r);
    };
  };
G.customElements.get("media-controller") || G.customElements.define("media-controller", Kt);
var ii,
  ni,
  ai,
  si,
  ri,
  oi,
  li,
  di,
  ci,
  ui,
  hi,
  Ei,
  mi,
  vi,
  pi,
  bi,
  Ai,
  gi,
  Ii,
  _i,
  Mi = Kt,
  fi = (e, t, i) => {
    if (!t.has(e)) throw TypeError("Cannot " + i);
  },
  Ti = (e, t, i) => (fi(e, t, "read from private field"), i ? i.call(e) : t.get(e)),
  Si = (e, t, i) => {
    if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
    t instanceof WeakSet ? t.add(e) : t.set(e, i);
  },
  Di = (e, t, i, n) => (fi(e, t, "write to private field"), n ? n.call(e, i) : t.set(e, i), i),
  Li = (e, t, i) => (fi(e, t, "access private method"), i);
const ki = F.createElement("template");
ki.innerHTML =
  '\n  <style>\n    :host {\n      --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));\n      --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));\n\n      box-shadow: var(--_focus-visible-box-shadow, none);\n      background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));\n      height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));\n      display: inline-flex;\n      align-items: center;\n      \n      vertical-align: middle;\n      box-sizing: border-box;\n      position: relative;\n      width: 100px;\n      transition: background .15s linear;\n      cursor: pointer;\n      pointer-events: auto;\n      touch-action: none; \n      z-index: 1; \n    }\n\n    \n    input[type=range]:focus {\n      outline: 0;\n    }\n    input[type=range]:focus::-webkit-slider-runnable-track {\n      outline: 0;\n    }\n\n    :host(:hover) {\n      background: var(--media-control-hover-background, rgb(50 50 70 / .7));\n    }\n\n    #leftgap {\n      padding-left: var(--media-range-padding-left, var(--_media-range-padding));\n    }\n\n    #rightgap {\n      padding-right: var(--media-range-padding-right, var(--_media-range-padding));\n    }\n\n    #startpoint,\n    #endpoint {\n      position: absolute;\n    }\n\n    #endpoint {\n      right: 0;\n    }\n\n    #container {\n      \n      width: var(--media-range-track-width, 100%);\n      transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));\n      position: relative;\n      height: 100%;\n      display: flex;\n      align-items: center;\n      min-width: 40px;\n    }\n\n    #range {\n      \n      display: var(--media-time-range-hover-display, block);\n      bottom: var(--media-time-range-hover-bottom, -7px);\n      height: var(--media-time-range-hover-height, max(100% + 7px, 25px));\n      width: 100%;\n      position: absolute;\n      cursor: pointer;\n\n      -webkit-appearance: none; \n      -webkit-tap-highlight-color: transparent;\n      background: transparent; \n      margin: 0;\n      z-index: 1;\n    }\n\n    @media (hover: hover) {\n      #range {\n        bottom: var(--media-time-range-hover-bottom, -5px);\n        height: var(--media-time-range-hover-height, max(100% + 5px, 20px));\n      }\n    }\n\n    \n    \n    #range::-webkit-slider-thumb {\n      -webkit-appearance: none;\n      background: transparent;\n      width: .1px;\n      height: .1px;\n    }\n\n    \n    #range::-moz-range-thumb {\n      background: transparent;\n      border: transparent;\n      width: .1px;\n      height: .1px;\n    }\n\n    #appearance {\n      height: var(--media-range-track-height, 4px);\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      width: 100%;\n      position: absolute;\n    }\n\n    #background,\n    #track {\n      border-radius: var(--media-range-track-border-radius, 1px);\n      position: absolute;\n      width: 100%;\n      height: 100%;\n    }\n\n    #background {\n      background: var(--media-range-track-background, rgb(255 255 255 / .2));\n      backdrop-filter: var(--media-range-track-background-backdrop-filter);\n      -webkit-backdrop-filter: var(--media-range-track-background-backdrop-filter);\n    }\n\n    #track {\n      border: var(--media-range-track-border, none);\n      outline: var(--media-range-track-outline);\n      outline-offset: var(--media-range-track-outline-offset);\n      backdrop-filter: var(--media-range-track-backdrop-filter);\n      -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);\n      box-shadow: var(--media-range-track-box-shadow, none);\n      overflow: hidden;\n    }\n\n    #progress {\n      background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));\n      border-radius: var(--media-range-track-border-radius, 1px);\n      transition: var(--media-range-track-transition);\n      position: absolute;\n      height: 100%;\n    }\n\n    #highlight {\n      border-radius: var(--media-range-track-border-radius, 1px);\n      position: absolute;\n      height: 100%;\n    }\n\n    #pointer {\n      background: var(--media-range-track-pointer-background);\n      border-right: var(--media-range-track-pointer-border-right);\n      border-radius: var(--media-range-track-border-radius, 1px);\n      transition: visibility .25s, opacity .25s;\n      visibility: hidden;\n      opacity: 0;\n      position: absolute;\n      height: 100%;\n    }\n\n    :host(:hover) #pointer {\n      transition: visibility .5s, opacity .5s;\n      visibility: visible;\n      opacity: 1;\n    }\n\n    #thumb {\n      width: var(--media-range-thumb-width, 10px);\n      height: var(--media-range-thumb-height, 10px);\n      margin-left: calc(var(--media-range-thumb-width, 10px) / -2);\n      border: var(--media-range-thumb-border, none);\n      border-radius: var(--media-range-thumb-border-radius, 10px);\n      background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));\n      box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);\n      transition: var(--media-range-thumb-transition);\n      transform: var(--media-range-thumb-transform, none);\n      opacity: var(--media-range-thumb-opacity, 1);\n      position: absolute;\n      left: 0;\n      cursor: pointer;\n    }\n\n    :host([disabled]) #thumb {\n      background-color: #777;\n    }\n  </style>\n  <div id="leftgap"></div>\n  <div id="container">\n    <div id="startpoint"></div>\n    <div id="endpoint"></div>\n    <div id="appearance">\n      <div id="background"></div>\n      <div id="track">\n        <div id="highlight"></div>\n        <div id="pointer"></div>\n        <div id="progress"></div>\n      </div>\n      <div id="thumb"></div>\n    </div>\n    <input id="range" type="range" min="0" max="1" step="any" value="0">\n  </div>\n  <div id="rightgap"></div>\n';
class Ri extends G.HTMLElement {
  constructor() {
    super(),
      Si(this, li),
      Si(this, ci),
      Si(this, hi),
      Si(this, mi),
      Si(this, pi),
      Si(this, Ai),
      Si(this, Ii),
      Si(this, ii, void 0),
      Si(this, ni, void 0),
      Si(this, ai, void 0),
      Si(this, si, void 0),
      Si(this, ri, () => {
        if (this.range.matches(":focus-visible")) {
          const { style: e } = w(this.shadowRoot, ":host");
          e.setProperty("--_focus-visible-box-shadow", "var(--_focus-box-shadow)");
        }
      }),
      Si(this, oi, () => {
        const { style: e } = w(this.shadowRoot, ":host");
        e.removeProperty("--_focus-visible-box-shadow");
      }),
      this.shadowRoot || (this.attachShadow({ mode: "open" }), this.shadowRoot.appendChild(ki.content.cloneNode(!0)));
    const { style: e } = w(this.shadowRoot, ":host");
    e.setProperty("display", `var(--media-control-display, var(--${this.localName}-display, inline-flex))`),
      (this.container = this.shadowRoot.querySelector("#container")),
      Di(this, ai, this.shadowRoot.querySelector("#startpoint")),
      Di(this, si, this.shadowRoot.querySelector("#endpoint")),
      (this.range = this.shadowRoot.querySelector("#range"));
  }
  static get observedAttributes() {
    return ["disabled", "aria-disabled", t.MEDIA_CONTROLLER];
  }
  attributeChangedCallback(e, i, n) {
    var a, s, r, o, l;
    e === t.MEDIA_CONTROLLER
      ? (i &&
          (null == (s = null == (a = Ti(this, ii)) ? void 0 : a.unassociateElement) || s.call(a, this),
          Di(this, ii, null)),
        n &&
          this.isConnected &&
          (Di(this, ii, null == (r = this.getRootNode()) ? void 0 : r.getElementById(n)),
          null == (l = null == (o = Ti(this, ii)) ? void 0 : o.associateElement) || l.call(o, this)))
      : ("disabled" === e || ("aria-disabled" === e && i !== n)) &&
        (null == n
          ? (this.range.removeAttribute(e), Li(this, li, di).call(this))
          : (this.range.setAttribute(e, n), Li(this, ci, ui).call(this)));
  }
  connectedCallback() {
    var e, i, n;
    const a = this.getAttribute(t.MEDIA_CONTROLLER);
    a &&
      (Di(this, ii, null == (e = this.getRootNode()) ? void 0 : e.getElementById(a)),
      null == (n = null == (i = Ti(this, ii)) ? void 0 : i.associateElement) || n.call(i, this)),
      this.updateBar(),
      this.shadowRoot.addEventListener("focusin", Ti(this, ri)),
      this.shadowRoot.addEventListener("focusout", Ti(this, oi)),
      Li(this, li, di).call(this);
  }
  disconnectedCallback() {
    var e, t;
    Li(this, ci, ui).call(this),
      null == (t = null == (e = Ti(this, ii)) ? void 0 : e.unassociateElement) || t.call(e, this),
      Di(this, ii, null),
      this.shadowRoot.removeEventListener("focusin", Ti(this, ri)),
      this.shadowRoot.removeEventListener("focusout", Ti(this, oi));
  }
  updatePointerBar(e) {
    const t = this.range.getBoundingClientRect();
    let i = (e.clientX - t.left) / t.width;
    i = 100 * Math.max(0, Math.min(1, i));
    const { style: n } = w(this.shadowRoot, "#pointer");
    n.setProperty("width", `${i}%`);
  }
  updateBar() {
    const e = 100 * this.range.valueAsNumber,
      t = w(this.shadowRoot, "#progress"),
      i = w(this.shadowRoot, "#thumb");
    t.style.setProperty("width", `${e}%`), i.style.setProperty("left", `${e}%`);
  }
  get dragging() {
    return this.hasAttribute("dragging");
  }
  handleEvent(e) {
    switch (e.type) {
      case "input":
        this.updateBar();
        break;
      case "pointerenter":
        Li(this, mi, vi).call(this, e);
        break;
      case "pointerdown":
        Li(this, hi, Ei).call(this, e);
        break;
      case "pointermove":
        Li(this, Ii, _i).call(this, e);
        break;
      case "pointerup":
        Li(this, pi, bi).call(this);
        break;
      case "pointerleave":
        Li(this, Ai, gi).call(this);
    }
  }
  get keysUsed() {
    return ["ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft"];
  }
}
(ii = new WeakMap()),
  (ni = new WeakMap()),
  (ai = new WeakMap()),
  (si = new WeakMap()),
  (ri = new WeakMap()),
  (oi = new WeakMap()),
  (li = new WeakSet()),
  (di = function () {
    this.hasAttribute("disabled") ||
      (this.addEventListener("input", this),
      this.addEventListener("pointerdown", this),
      this.addEventListener("pointerenter", this));
  }),
  (ci = new WeakSet()),
  (ui = function () {
    var e, t;
    this.removeEventListener("input", this),
      this.removeEventListener("pointerdown", this),
      this.removeEventListener("pointerenter", this),
      null == (e = G.window) || e.removeEventListener("pointerup", this),
      null == (t = G.window) || t.removeEventListener("pointermove", this);
  }),
  (hi = new WeakSet()),
  (Ei = function (e) {
    var t;
    Di(this, ni, e.composedPath().includes(this.range)),
      null == (t = G.window) || t.addEventListener("pointerup", this);
  }),
  (mi = new WeakSet()),
  (vi = function (e) {
    var t;
    "mouse" !== e.pointerType && Li(this, hi, Ei).call(this, e),
      this.addEventListener("pointerleave", this),
      null == (t = G.window) || t.addEventListener("pointermove", this);
  }),
  (pi = new WeakSet()),
  (bi = function () {
    var e;
    null == (e = G.window) || e.removeEventListener("pointerup", this),
      this.toggleAttribute("dragging", !1),
      (this.range.disabled = this.hasAttribute("disabled"));
  }),
  (Ai = new WeakSet()),
  (gi = function () {
    var e;
    this.removeEventListener("pointerleave", this),
      null == (e = G.window) || e.removeEventListener("pointermove", this),
      this.toggleAttribute("dragging", !1),
      (this.range.disabled = this.hasAttribute("disabled"));
  }),
  (Ii = new WeakSet()),
  (_i = function (e) {
    if (
      (this.toggleAttribute("dragging", 1 === e.buttons || "mouse" !== e.pointerType),
      this.updatePointerBar(e),
      this.dragging && ("mouse" !== e.pointerType || !Ti(this, ni)))
    ) {
      this.range.disabled = !0;
      let t = (function (e, t, i, n) {
        const a = y(i, n),
          s = y(i, { x: e, y: t }),
          r = y(n, { x: e, y: t });
        return s > a || r > a ? (s > r ? 1 : 0) : s / a;
      })(e.clientX, e.clientY, Ti(this, ai).getBoundingClientRect(), Ti(this, si).getBoundingClientRect());
      (t = Math.max(0, Math.min(1, t))),
        (this.range.valueAsNumber = t),
        this.range.dispatchEvent(new Event("input", { bubbles: !0, composed: !0 }));
    }
  }),
  G.customElements.get("media-chrome-range") || G.customElements.define("media-chrome-range", Ri);
var yi,
  wi = Ri,
  Ci = (e, t, i) => {
    if (!t.has(e)) throw TypeError("Cannot " + i);
  },
  Ni = (e, t, i) => (Ci(e, t, "read from private field"), i ? i.call(e) : t.get(e)),
  Ui = (e, t, i, n) => (Ci(e, t, "write to private field"), n ? n.call(e, i) : t.set(e, i), i);
const Pi = F.createElement("template");
Pi.innerHTML =
  "\n  <style>\n    :host {\n      \n      box-sizing: border-box;\n      display: var(--media-control-display, var(--media-control-bar-display, inline-flex));\n      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));\n      --media-loading-indicator-icon-height: 44px;\n    }\n\n    ::slotted(media-time-range),\n    ::slotted(media-volume-range) {\n      min-height: 100%;\n    }\n\n    ::slotted(media-time-range),\n    ::slotted(media-clip-selector) {\n      flex-grow: 1;\n    }\n  </style>\n\n  <slot></slot>\n";
class Oi extends G.HTMLElement {
  constructor() {
    super(),
      ((e, t, i) => {
        if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
        t instanceof WeakSet ? t.add(e) : t.set(e, i);
      })(this, yi, void 0),
      this.shadowRoot || (this.attachShadow({ mode: "open" }), this.shadowRoot.appendChild(Pi.content.cloneNode(!0)));
  }
  static get observedAttributes() {
    return [t.MEDIA_CONTROLLER];
  }
  attributeChangedCallback(e, i, n) {
    var a, s, r, o, l;
    e === t.MEDIA_CONTROLLER &&
      (i &&
        (null == (s = null == (a = Ni(this, yi)) ? void 0 : a.unassociateElement) || s.call(a, this),
        Ui(this, yi, null)),
      n &&
        this.isConnected &&
        (Ui(this, yi, null == (r = this.getRootNode()) ? void 0 : r.getElementById(n)),
        null == (l = null == (o = Ni(this, yi)) ? void 0 : o.associateElement) || l.call(o, this)));
  }
  connectedCallback() {
    var e, i, n;
    const a = this.getAttribute(t.MEDIA_CONTROLLER);
    a &&
      (Ui(this, yi, null == (e = this.getRootNode()) ? void 0 : e.getElementById(a)),
      null == (n = null == (i = Ni(this, yi)) ? void 0 : i.associateElement) || n.call(i, this));
  }
  disconnectedCallback() {
    var e, t;
    null == (t = null == (e = Ni(this, yi)) ? void 0 : e.unassociateElement) || t.call(e, this), Ui(this, yi, null);
  }
}
(yi = new WeakMap()), G.customElements.get("media-control-bar") || G.customElements.define("media-control-bar", Oi);
var xi,
  Vi = Oi,
  Bi = (e, t, i) => {
    if (!t.has(e)) throw TypeError("Cannot " + i);
  },
  Wi = (e, t, i) => (Bi(e, t, "read from private field"), i ? i.call(e) : t.get(e)),
  $i = (e, t, i, n) => (Bi(e, t, "write to private field"), n ? n.call(e, i) : t.set(e, i), i);
const Hi = F.createElement("template");
Hi.innerHTML =
  "\n  <style>\n    :host {\n      font: var(--media-font,\n        var(--media-font-weight, normal)\n        var(--media-font-size, 14px) /\n        var(--media-text-content-height, var(--media-control-height, 24px))\n        var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));\n      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));\n      background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));\n      padding: var(--media-control-padding, 10px);\n      display: inline-flex;\n      justify-content: center;\n      align-items: center;\n      vertical-align: middle;\n      box-sizing: border-box;\n      text-align: center;\n      pointer-events: auto;\n    }\n\n    \n    :host(:focus-visible) {\n      box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);\n      outline: 0;\n    }\n\n    \n    :host(:where(:focus)) {\n      box-shadow: none;\n      outline: 0;\n    }\n  </style>\n  <slot></slot>\n";
class Gi extends G.HTMLElement {
  constructor() {
    super(),
      ((e, t, i) => {
        if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
        t instanceof WeakSet ? t.add(e) : t.set(e, i);
      })(this, xi, void 0),
      this.shadowRoot || (this.attachShadow({ mode: "open" }), this.shadowRoot.appendChild(Hi.content.cloneNode(!0)));
    const { style: e } = w(this.shadowRoot, ":host");
    e.setProperty("display", `var(--media-control-display, var(--${this.localName}-display, inline-flex))`);
  }
  static get observedAttributes() {
    return [t.MEDIA_CONTROLLER];
  }
  attributeChangedCallback(e, i, n) {
    var a, s, r, o, l;
    e === t.MEDIA_CONTROLLER &&
      (i &&
        (null == (s = null == (a = Wi(this, xi)) ? void 0 : a.unassociateElement) || s.call(a, this),
        $i(this, xi, null)),
      n &&
        this.isConnected &&
        ($i(this, xi, null == (r = this.getRootNode()) ? void 0 : r.getElementById(n)),
        null == (l = null == (o = Wi(this, xi)) ? void 0 : o.associateElement) || l.call(o, this)));
  }
  connectedCallback() {
    var e, i, n;
    const a = this.getAttribute(t.MEDIA_CONTROLLER);
    a &&
      ($i(this, xi, null == (e = this.getRootNode()) ? void 0 : e.getElementById(a)),
      null == (n = null == (i = Wi(this, xi)) ? void 0 : i.associateElement) || n.call(i, this));
  }
  disconnectedCallback() {
    var e, t;
    null == (t = null == (e = Wi(this, xi)) ? void 0 : e.unassociateElement) || t.call(e, this), $i(this, xi, null);
  }
}
(xi = new WeakMap()), G.customElements.get("media-text-display") || G.customElements.define("media-text-display", Gi);
var Fi,
  Ki = (e, t, i) => {
    if (!t.has(e)) throw TypeError("Cannot " + i);
  },
  Qi = (e, t, i) => (Ki(e, t, "read from private field"), i ? i.call(e) : t.get(e));
class qi extends Gi {
  constructor() {
    var e, t, i, n;
    super(),
      ((e, t, i) => {
        if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
        t instanceof WeakSet ? t.add(e) : t.set(e, i);
      })(this, Fi, void 0),
      (e = this),
      (t = Fi),
      (i = this.shadowRoot.querySelector("slot")),
      Ki(e, t, "write to private field"),
      n ? n.call(e, i) : t.set(e, i),
      (Qi(this, Fi).textContent = f(0));
  }
  static get observedAttributes() {
    return [...super.observedAttributes, a.MEDIA_DURATION];
  }
  attributeChangedCallback(e, t, i) {
    e === a.MEDIA_DURATION && (Qi(this, Fi).textContent = f(i)), super.attributeChangedCallback(e, t, i);
  }
  get mediaDuration() {
    return C(this, a.MEDIA_DURATION);
  }
  set mediaDuration(e) {
    N(this, a.MEDIA_DURATION, e);
  }
}
(Fi = new WeakMap()),
  G.customElements.get("media-duration-display") || G.customElements.define("media-duration-display", qi);
var ji,
  Yi = qi,
  Zi = (e, t, i) => {
    if (!t.has(e)) throw TypeError("Cannot " + i);
  },
  zi = (e, t, i) => (Zi(e, t, "read from private field"), i ? i.call(e) : t.get(e));
const Xi = { REMAINING: "remaining", SHOW_DURATION: "showduration", NO_TOGGLE: "notoggle" },
  Ji = [...Object.values(Xi), a.MEDIA_CURRENT_TIME, a.MEDIA_DURATION, a.MEDIA_SEEKABLE],
  en = ["Enter", " "],
  tn = (e, { timesSep: t = "&nbsp;/&nbsp;" } = {}) => {
    var i, n, a, s;
    const r = e.hasAttribute(Xi.REMAINING),
      o = e.hasAttribute(Xi.SHOW_DURATION),
      l = null != (i = e.mediaCurrentTime) ? i : 0,
      [, d] = null != (n = e.mediaSeekable) ? n : [],
      c = null != (s = null != (a = e.mediaDuration) ? a : d) ? s : 0,
      u = f(r ? 0 - (c - l) : l);
    return o ? `${u}${t}${f(c)}` : u;
  };
class nn extends Gi {
  constructor() {
    var e, t, i, n;
    super(),
      ((e, t, i) => {
        if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
        t instanceof WeakSet ? t.add(e) : t.set(e, i);
      })(this, ji, void 0),
      (e = this),
      (t = ji),
      (i = this.shadowRoot.querySelector("slot")),
      Zi(e, t, "write to private field"),
      n ? n.call(e, i) : t.set(e, i),
      (zi(this, ji).innerHTML = `${tn(this)}`);
    const { style: a } = w(this.shadowRoot, ":host(:hover:not([notoggle]))");
    a.setProperty("cursor", "pointer"),
      a.setProperty("background", "var(--media-control-hover-background, rgba(50 50 70 / .7))");
  }
  static get observedAttributes() {
    return [...super.observedAttributes, ...Ji, "disabled"];
  }
  connectedCallback() {
    this.hasAttribute("disabled") || this.enable(),
      this.setAttribute("role", "progressbar"),
      this.setAttribute("aria-label", m.PLAYBACK_TIME());
    const e = (t) => {
      const { key: i } = t;
      en.includes(i) ? this.toggleTimeDisplay() : this.removeEventListener("keyup", e);
    };
    this.addEventListener("keydown", (t) => {
      const { metaKey: i, altKey: n, key: a } = t;
      i || n || !en.includes(a) ? this.removeEventListener("keyup", e) : this.addEventListener("keyup", e);
    }),
      this.addEventListener("click", this.toggleTimeDisplay),
      super.connectedCallback();
  }
  toggleTimeDisplay() {
    this.noToggle ||
      (this.hasAttribute("remaining") ? this.removeAttribute("remaining") : this.setAttribute("remaining", ""));
  }
  disconnectedCallback() {
    this.disable(), super.disconnectedCallback();
  }
  attributeChangedCallback(e, t, i) {
    Ji.includes(e) ? this.update() : "disabled" === e && i !== t && (null == i ? this.enable() : this.disable()),
      super.attributeChangedCallback(e, t, i);
  }
  enable() {
    this.tabIndex = 0;
  }
  disable() {
    this.tabIndex = -1;
  }
  get remaining() {
    return U(this, Xi.REMAINING);
  }
  set remaining(e) {
    P(this, Xi.REMAINING, e);
  }
  get showDuration() {
    return U(this, Xi.SHOW_DURATION);
  }
  set showDuration(e) {
    P(this, Xi.SHOW_DURATION, e);
  }
  get noToggle() {
    return U(this, Xi.NO_TOGGLE);
  }
  set noToggle(e) {
    P(this, Xi.NO_TOGGLE, e);
  }
  get mediaDuration() {
    return C(this, a.MEDIA_DURATION);
  }
  set mediaDuration(e) {
    N(this, a.MEDIA_DURATION, e);
  }
  get mediaCurrentTime() {
    return C(this, a.MEDIA_CURRENT_TIME);
  }
  set mediaCurrentTime(e) {
    N(this, a.MEDIA_CURRENT_TIME, e);
  }
  get mediaSeekable() {
    const e = this.getAttribute(a.MEDIA_SEEKABLE);
    if (e) return e.split(":").map((e) => +e);
  }
  set mediaSeekable(e) {
    null != e ? this.setAttribute(a.MEDIA_SEEKABLE, e.join(":")) : this.removeAttribute(a.MEDIA_SEEKABLE);
  }
  update() {
    const e = tn(this);
    ((e) => {
      var t;
      const i = e.mediaCurrentTime,
        [, n] = null != (t = e.mediaSeekable) ? t : [],
        a = e.mediaDuration || n;
      if (null == i || null == a) return void e.setAttribute("aria-valuetext", "video not loaded, unknown time.");
      const s = e.hasAttribute(Xi.REMAINING),
        r = e.hasAttribute(Xi.SHOW_DURATION),
        o = M(s ? 0 - (a - i) : i);
      if (!r) return void e.setAttribute("aria-valuetext", o);
      const l = `${o} of ${M(a)}`;
      e.setAttribute("aria-valuetext", l);
    })(this),
      e !== zi(this, ji).innerHTML && (zi(this, ji).innerHTML = e);
  }
}
(ji = new WeakMap()), G.customElements.get("media-time-display") || G.customElements.define("media-time-display", nn);
var an = nn;
const sn = F.createElement("template");
sn.innerHTML =
  '\n  <style>\n    :host([aria-checked="true"]) slot[name=off] {\n      display: none !important;\n    }\n\n    \n    :host(:not([aria-checked="true"])) slot[name=on] {\n      display: none !important;\n    }\n  </style>\n\n  <slot name="icon">\n    <slot name="on"><svg aria-hidden="true" viewBox="0 0 26 24">\n  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>\n</svg></slot>\n    <slot name="off"><svg aria-hidden="true" viewBox="0 0 26 24">\n  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>\n</svg></slot>\n  </slot>\n';
const rn = (e) => {
  e.setAttribute("aria-checked", ((e) => !!e.getAttribute(a.MEDIA_SUBTITLES_SHOWING))(e));
};
class on extends ie {
  static get observedAttributes() {
    return [...super.observedAttributes, a.MEDIA_SUBTITLES_LIST, a.MEDIA_SUBTITLES_SHOWING];
  }
  constructor(e = {}) {
    super({ slotTemplate: sn, ...e }), (this._captionsReady = !1);
  }
  connectedCallback() {
    super.connectedCallback(),
      this.setAttribute("role", "switch"),
      this.setAttribute("aria-label", m.CLOSED_CAPTIONS()),
      rn(this);
  }
  attributeChangedCallback(e, t, i) {
    e === a.MEDIA_SUBTITLES_SHOWING && rn(this), super.attributeChangedCallback(e, t, i);
  }
  get mediaSubtitlesList() {
    return ln(this, a.MEDIA_SUBTITLES_LIST);
  }
  set mediaSubtitlesList(e) {
    dn(this, a.MEDIA_SUBTITLES_LIST, e);
  }
  get mediaSubtitlesShowing() {
    return ln(this, a.MEDIA_SUBTITLES_SHOWING);
  }
  set mediaSubtitlesShowing(e) {
    dn(this, a.MEDIA_SUBTITLES_SHOWING, e);
  }
  handleClick() {
    this.dispatchEvent(new G.CustomEvent(e.MEDIA_TOGGLE_SUBTITLES_REQUEST, { composed: !0, bubbles: !0 }));
  }
}
const ln = (e, t) => {
    const i = e.getAttribute(t);
    return i ? at(i) : [];
  },
  dn = (e, t, i) => {
    if (!(null == i ? void 0 : i.length)) return void e.removeAttribute(t);
    const n = ot(i);
    e.getAttribute(t) !== n && e.setAttribute(t, n);
  };
G.customElements.get("media-captions-button") || G.customElements.define("media-captions-button", on);
var cn = on;
const un = "seekoffset",
  hn = F.createElement("template");
hn.innerHTML =
  '\n  <slot name="icon"><svg aria-hidden="true" viewBox="0 0 20 24"><defs><style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style></defs><text class="text value" transform="translate(8.9 19.87)">30</text><path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/></svg></slot>\n';
class En extends ie {
  static get observedAttributes() {
    return [...super.observedAttributes, a.MEDIA_CURRENT_TIME, un];
  }
  constructor(e = {}) {
    super({ slotTemplate: hn, ...e });
  }
  connectedCallback() {
    (this.seekOffset = C(this, un, 30)), super.connectedCallback();
  }
  attributeChangedCallback(e, t, i) {
    e === un && (this.seekOffset = C(this, un, 30)), super.attributeChangedCallback(e, t, i);
  }
  get seekOffset() {
    return C(this, un, 30);
  }
  set seekOffset(e) {
    N(this, un, e),
      this.setAttribute("aria-label", v.SEEK_FORWARD_N_SECS({ seekOffset: this.seekOffset })),
      D(L(this, "icon"), this.seekOffset);
  }
  get mediaCurrentTime() {
    return C(this, a.MEDIA_CURRENT_TIME, 0);
  }
  set mediaCurrentTime(e) {
    N(this, a.MEDIA_CURRENT_TIME, e);
  }
  handleClick() {
    const t = this.mediaCurrentTime + this.seekOffset,
      i = new G.CustomEvent(e.MEDIA_SEEK_REQUEST, { composed: !0, bubbles: !0, detail: t });
    this.dispatchEvent(i);
  }
}
G.customElements.get("media-seek-forward-button") || G.customElements.define("media-seek-forward-button", En);
var mn = En;
const vn = F.createElement("template");
vn.innerHTML = `\n  <style>\n  :host([${a.MEDIA_IS_FULLSCREEN}]) slot:not([name=exit]):not([name=icon]) {\n    display: none !important;\n  }\n\n  \n  :host(:not([${a.MEDIA_IS_FULLSCREEN}])) slot:not([name=enter]):not([name=icon]) {\n    display: none !important;\n  }\n  </style>\n\n  <slot name="icon">\n    <slot name="enter"><svg aria-hidden="true" viewBox="0 0 26 24">\n  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>\n</svg></slot>\n    <slot name="exit"><svg aria-hidden="true" viewBox="0 0 26 24">\n  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>\n</svg></slot>\n  </slot>\n`;
const pn = (e) => {
  const t = e.mediaIsFullscreen ? v.EXIT_FULLSCREEN() : v.ENTER_FULLSCREEN();
  e.setAttribute("aria-label", t);
};
class bn extends ie {
  static get observedAttributes() {
    return [...super.observedAttributes, a.MEDIA_IS_FULLSCREEN, a.MEDIA_FULLSCREEN_UNAVAILABLE];
  }
  constructor(e = {}) {
    super({ slotTemplate: vn, ...e });
  }
  connectedCallback() {
    pn(this), super.connectedCallback();
  }
  attributeChangedCallback(e, t, i) {
    e === a.MEDIA_IS_FULLSCREEN && pn(this), super.attributeChangedCallback(e, t, i);
  }
  get mediaFullscreenUnavailable() {
    return O(this, a.MEDIA_FULLSCREEN_UNAVAILABLE);
  }
  set mediaFullscreenUnavailable(e) {
    x(this, a.MEDIA_FULLSCREEN_UNAVAILABLE, e);
  }
  get mediaIsFullscreen() {
    return U(this, a.MEDIA_IS_FULLSCREEN);
  }
  set mediaIsFullscreen(e) {
    P(this, a.MEDIA_IS_FULLSCREEN, e);
  }
  handleClick() {
    const t = this.mediaIsFullscreen ? e.MEDIA_EXIT_FULLSCREEN_REQUEST : e.MEDIA_ENTER_FULLSCREEN_REQUEST;
    this.dispatchEvent(new G.CustomEvent(t, { composed: !0, bubbles: !0 }));
  }
}
G.customElements.get("media-fullscreen-button") || G.customElements.define("media-fullscreen-button", bn);
var An = bn;
const { MEDIA_TIME_IS_LIVE: gn, MEDIA_PAUSED: In } = a,
  { MEDIA_SEEK_TO_LIVE_REQUEST: _n, MEDIA_PLAY_REQUEST: Mn } = e,
  fn = F.createElement("template");
fn.innerHTML = `\n  <style>\n\n  slot[name=indicator] > *,\n  :host ::slotted([slot=indicator]) {\n    \n    min-width: auto;\n    fill: var(--media-live-button-icon-color, rgb(140, 140, 140));\n    color: var(--media-live-button-icon-color, rgb(140, 140, 140));\n  }\n\n  :host([${gn}]:not([${In}])) slot[name=indicator] > *,\n  :host([${gn}]:not([${In}])) ::slotted([slot=indicator]) {\n    fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));\n    color: var(--media-live-button-indicator-color, rgb(255, 0, 0));\n  }\n\n  :host([${gn}]:not([${In}])) {\n    cursor: not-allowed;\n  }\n\n  </style>\n\n  <slot name="indicator"><svg viewBox="0 0 6 12"><circle cx="3" cy="6" r="2"></circle></svg></slot>\n  \n  <slot name="spacer">&nbsp;</slot><slot name="text">LIVE</slot>\n`;
const Tn = (e) => {
  const t = e.mediaPaused || !e.mediaTimeIsLive,
    i = t ? v.SEEK_LIVE() : v.PLAYING_LIVE();
  e.setAttribute("aria-label", i), t ? e.removeAttribute("aria-disabled") : e.setAttribute("aria-disabled", "true");
};
class Sn extends ie {
  static get observedAttributes() {
    return [...super.observedAttributes, In, gn];
  }
  constructor(e = {}) {
    super({ slotTemplate: fn, ...e });
  }
  connectedCallback() {
    Tn(this), super.connectedCallback();
  }
  attributeChangedCallback(e, t, i) {
    super.attributeChangedCallback(e, t, i), Tn(this);
  }
  get mediaPaused() {
    return U(this, a.MEDIA_PAUSED);
  }
  set mediaPaused(e) {
    P(this, a.MEDIA_PAUSED, e);
  }
  get mediaTimeIsLive() {
    return U(this, a.MEDIA_TIME_IS_LIVE);
  }
  set mediaTimeIsLive(e) {
    P(this, a.MEDIA_TIME_IS_LIVE, e);
  }
  handleClick() {
    (!this.mediaPaused && this.mediaTimeIsLive) ||
      (this.dispatchEvent(new G.CustomEvent(_n, { composed: !0, bubbles: !0 })),
      this.hasAttribute(In) && this.dispatchEvent(new G.CustomEvent(Mn, { composed: !0, bubbles: !0 })));
  }
}
G.customElements.get("media-live-button") || G.customElements.define("media-live-button", Sn);
var Dn = Sn;
const { MEDIA_VOLUME_LEVEL: Ln } = a,
  kn =
    '<svg aria-hidden="true" viewBox="0 0 24 24">\n  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>\n</svg>',
  Rn = F.createElement("template");
Rn.innerHTML = `\n  <style>\n  \n  :host(:not([${Ln}])) slot:not([name=high]):not([name=icon]), \n  :host([${Ln}=high]) slot:not([name=high]):not([name=icon]) {\n    display: none !important;\n  }\n\n  :host([${Ln}=off]) slot:not([name=off]):not([name=icon]) {\n    display: none !important;\n  }\n\n  :host([${Ln}=low]) slot:not([name=low]):not([name=icon]) {\n    display: none !important;\n  }\n\n  :host([${Ln}=medium]) slot:not([name=medium]):not([name=icon]) {\n    display: none !important;\n  }\n  </style>\n\n  <slot name="icon">\n    <slot name="off"><svg aria-hidden="true" viewBox="0 0 24 24">\n  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>\n</svg></slot>\n    <slot name="low">${kn}</slot>\n    <slot name="medium">${kn}</slot>\n    <slot name="high"><svg aria-hidden="true" viewBox="0 0 24 24">\n  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>\n</svg></slot>\n  </slot>\n`;
const yn = (e) => {
  const t = "off" === e.mediaVolumeLevel ? v.UNMUTE() : v.MUTE();
  e.setAttribute("aria-label", t);
};
class wn extends ie {
  static get observedAttributes() {
    return [...super.observedAttributes, a.MEDIA_VOLUME_LEVEL];
  }
  constructor(e = {}) {
    super({ slotTemplate: Rn, ...e });
  }
  connectedCallback() {
    yn(this), super.connectedCallback();
  }
  attributeChangedCallback(e, t, i) {
    e === a.MEDIA_VOLUME_LEVEL && yn(this), super.attributeChangedCallback(e, t, i);
  }
  get mediaVolumeLevel() {
    return O(this, a.MEDIA_VOLUME_LEVEL);
  }
  set mediaVolumeLevel(e) {
    x(this, a.MEDIA_VOLUME_LEVEL, e);
  }
  handleClick() {
    const t = "off" === this.mediaVolumeLevel ? e.MEDIA_UNMUTE_REQUEST : e.MEDIA_MUTE_REQUEST;
    this.dispatchEvent(new G.CustomEvent(t, { composed: !0, bubbles: !0 }));
  }
}
G.customElements.get("media-mute-button") || G.customElements.define("media-mute-button", wn);
var Cn = wn;
const Nn =
    '<svg aria-hidden="true" viewBox="0 0 28 24">\n  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>\n</svg>',
  Un = F.createElement("template");
Un.innerHTML = `\n  <style>\n  :host([${a.MEDIA_IS_PIP}]) slot:not([name=exit]):not([name=icon]) {\n    display: none !important;\n  }\n\n  \n  :host(:not([${a.MEDIA_IS_PIP}])) slot:not([name=enter]):not([name=icon]) {\n    display: none !important;\n  }\n  </style>\n\n  <slot name="icon">\n    <slot name="enter">${Nn}</slot>\n    <slot name="exit">${Nn}</slot>\n  </slot>\n`;
const Pn = (e) => {
  const t = e.mediaIsPip ? v.EXIT_PIP() : v.ENTER_PIP();
  e.setAttribute("aria-label", t);
};
class On extends ie {
  static get observedAttributes() {
    return [...super.observedAttributes, a.MEDIA_IS_PIP, a.MEDIA_PIP_UNAVAILABLE];
  }
  constructor(e = {}) {
    super({ slotTemplate: Un, ...e });
  }
  connectedCallback() {
    Pn(this), super.connectedCallback();
  }
  attributeChangedCallback(e, t, i) {
    e === a.MEDIA_IS_PIP && Pn(this), super.attributeChangedCallback(e, t, i);
  }
  get mediaPipUnavailable() {
    return O(this, a.MEDIA_PIP_UNAVAILABLE);
  }
  set mediaPipUnavailable(e) {
    x(this, a.MEDIA_PIP_UNAVAILABLE, e);
  }
  get mediaIsPip() {
    return U(this, a.MEDIA_IS_PIP);
  }
  set mediaIsPip(e) {
    P(this, a.MEDIA_IS_PIP, e);
  }
  handleClick() {
    const t = this.mediaIsPip ? e.MEDIA_EXIT_PIP_REQUEST : e.MEDIA_ENTER_PIP_REQUEST;
    this.dispatchEvent(new G.CustomEvent(t, { composed: !0, bubbles: !0 }));
  }
}
G.customElements.get("media-pip-button") || G.customElements.define("media-pip-button", On);
var xn = On;
const Vn = F.createElement("template");
Vn.innerHTML = `\n  <style>\n  :host([${a.MEDIA_PAUSED}]) slot[name=pause] {\n    display: none !important;\n  }\n\n  :host(:not([${a.MEDIA_PAUSED}])) slot[name=play] {\n    display: none !important;\n  }\n  </style>\n\n  <slot name="icon">\n    <slot name="play"><svg aria-hidden="true" viewBox="0 0 24 24">\n  <path d="m6 21 15-9L6 3v18Z"/>\n</svg></slot>\n    <slot name="pause"><svg aria-hidden="true" viewBox="0 0 24 24">\n  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>\n</svg></slot>\n  </slot>\n`;
const Bn = (e) => {
  const t = e.mediaPaused ? v.PLAY() : v.PAUSE();
  e.setAttribute("aria-label", t);
};
class Wn extends ie {
  static get observedAttributes() {
    return [...super.observedAttributes, a.MEDIA_PAUSED, a.MEDIA_ENDED];
  }
  constructor(e = {}) {
    super({ slotTemplate: Vn, ...e });
  }
  connectedCallback() {
    Bn(this), super.connectedCallback();
  }
  attributeChangedCallback(e, t, i) {
    e === a.MEDIA_PAUSED && Bn(this), super.attributeChangedCallback(e, t, i);
  }
  get mediaPaused() {
    return U(this, a.MEDIA_PAUSED);
  }
  set mediaPaused(e) {
    P(this, a.MEDIA_PAUSED, e);
  }
  handleClick() {
    const t = this.mediaPaused ? e.MEDIA_PLAY_REQUEST : e.MEDIA_PAUSE_REQUEST;
    this.dispatchEvent(new G.CustomEvent(t, { composed: !0, bubbles: !0 }));
  }
}
G.customElements.get("media-play-button") || G.customElements.define("media-play-button", Wn);
var $n,
  Hn = Wn,
  Gn = (e, t, i) => (
    ((e, t, i) => {
      if (!t.has(e)) throw TypeError("Cannot " + i);
    })(e, t, "read from private field"),
    i ? i.call(e) : t.get(e)
  );
const Fn = "rates",
  Kn = [1, 1.2, 1.5, 1.7, 2],
  Qn = F.createElement("template");
Qn.innerHTML =
  '\n  <style>\n    :host {\n      min-width: 5ch;\n      padding: var(--media-control-padding, 10px 5px);\n    }\n  </style>\n  <span id="container"></span>\n';
class qn extends ie {
  constructor(e = {}) {
    super({ slotTemplate: Qn, ...e }),
      ((e, t, i) => {
        if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
        t instanceof WeakSet ? t.add(e) : t.set(e, i);
      })(this, $n, new it(this, Fn, { defaultValue: Kn })),
      (this.container = this.shadowRoot.querySelector("#container")),
      (this.container.innerHTML = "1x");
  }
  static get observedAttributes() {
    return [...super.observedAttributes, a.MEDIA_PLAYBACK_RATE, Fn];
  }
  attributeChangedCallback(e, t, i) {
    if ((super.attributeChangedCallback(e, t, i), e === Fn && (Gn(this, $n).value = i), e === a.MEDIA_PLAYBACK_RATE)) {
      const e = i ? +i : Number.NaN,
        t = Number.isNaN(e) ? 1 : e;
      (this.container.innerHTML = `${t}x`), this.setAttribute("aria-label", m.PLAYBACK_RATE({ playbackRate: t }));
    }
  }
  get rates() {
    return Gn(this, $n);
  }
  set rates(e) {
    e ? Array.isArray(e) && (Gn(this, $n).value = e.join(" ")) : (Gn(this, $n).value = "");
  }
  get mediaPlaybackRate() {
    return C(this, a.MEDIA_PLAYBACK_RATE, 1);
  }
  set mediaPlaybackRate(e) {
    N(this, a.MEDIA_PLAYBACK_RATE, e);
  }
  handleClick() {
    var t, i;
    const n = Array.from(this.rates.values(), (e) => +e).sort((e, t) => e - t),
      a = null != (i = null != (t = n.find((e) => e > this.mediaPlaybackRate)) ? t : n[0]) ? i : 1,
      s = new G.CustomEvent(e.MEDIA_PLAYBACK_RATE_REQUEST, { composed: !0, bubbles: !0, detail: a });
    this.dispatchEvent(s);
  }
}
($n = new WeakMap()),
  G.customElements.get("media-playback-rate-button") || G.customElements.define("media-playback-rate-button", qn);
var jn = qn;
const Yn = "placeholdersrc",
  Zn = "src",
  zn = F.createElement("template");
zn.innerHTML =
  '\n  <style>\n    :host {\n      pointer-events: none;\n      display: var(--media-poster-image-display, inline-block);\n      box-sizing: border-box;\n    }\n\n    img {\n      max-width: 100%;\n      max-height: 100%;\n      min-width: 100%;\n      min-height: 100%;\n      background-repeat: no-repeat;\n      background-position: var(--media-poster-image-background-position, var(--media-object-position, center));\n      background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));\n      object-fit: var(--media-object-fit, contain);\n      object-position: var(--media-object-position, center);\n    }\n  </style>\n\n  <img part="poster img" aria-hidden="true" id="image"/>\n';
class Xn extends G.HTMLElement {
  static get observedAttributes() {
    return [Yn, Zn];
  }
  constructor() {
    super(),
      this.shadowRoot || (this.attachShadow({ mode: "open" }), this.shadowRoot.appendChild(zn.content.cloneNode(!0))),
      (this.image = this.shadowRoot.querySelector("#image"));
  }
  attributeChangedCallback(e, t, i) {
    e === Zn && (null == i ? this.image.removeAttribute(Zn) : this.image.setAttribute(Zn, i)),
      e === Yn &&
        (null == i
          ? this.image.style.removeProperty("background-image")
          : ((e, t) => {
              e.style["background-image"] = `url('${t}')`;
            })(this.image, i));
  }
  get placeholderSrc() {
    return O(this, Yn);
  }
  set placeholderSrc(e) {
    x(this, Zn, e);
  }
  get src() {
    return O(this, Zn);
  }
  set src(e) {
    x(this, Zn, e);
  }
}
G.customElements.get("media-poster-image") || G.customElements.define("media-poster-image", Xn);
var Jn = Xn;
const ea = "seekoffset",
  ta = F.createElement("template");
ta.innerHTML =
  '\n  <slot name="icon"><svg aria-hidden="true" viewBox="0 0 20 24"><defs><style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style></defs><text class="text value" transform="translate(2.18 19.87)">30</text><path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/></svg></slot>\n';
class ia extends ie {
  static get observedAttributes() {
    return [...super.observedAttributes, a.MEDIA_CURRENT_TIME, ea];
  }
  constructor(e = {}) {
    super({ slotTemplate: ta, ...e });
  }
  connectedCallback() {
    (this.seekOffset = C(this, ea, 30)), super.connectedCallback();
  }
  attributeChangedCallback(e, t, i) {
    e === ea && (this.seekOffset = C(this, ea, 30)), super.attributeChangedCallback(e, t, i);
  }
  get seekOffset() {
    return C(this, ea, 30);
  }
  set seekOffset(e) {
    N(this, ea, e),
      this.setAttribute("aria-label", v.SEEK_BACK_N_SECS({ seekOffset: this.seekOffset })),
      D(L(this, "icon"), this.seekOffset);
  }
  get mediaCurrentTime() {
    return C(this, a.MEDIA_CURRENT_TIME, 0);
  }
  set mediaCurrentTime(e) {
    N(this, a.MEDIA_CURRENT_TIME, e);
  }
  handleClick() {
    const t = Math.max(this.mediaCurrentTime - this.seekOffset, 0),
      i = new G.CustomEvent(e.MEDIA_SEEK_REQUEST, { composed: !0, bubbles: !0, detail: t });
    this.dispatchEvent(i);
  }
}
G.customElements.get("media-seek-backward-button") || G.customElements.define("media-seek-backward-button", ia);
var na,
  aa = ia,
  sa = (e, t, i) => {
    if (!t.has(e)) throw TypeError("Cannot " + i);
  },
  ra = (e, t, i) => (sa(e, t, "read from private field"), i ? i.call(e) : t.get(e));
class oa extends Gi {
  constructor() {
    var e, t, i, n;
    super(),
      ((e, t, i) => {
        if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
        t instanceof WeakSet ? t.add(e) : t.set(e, i);
      })(this, na, void 0),
      (e = this),
      (t = na),
      (i = this.shadowRoot.querySelector("slot")),
      sa(e, t, "write to private field"),
      n ? n.call(e, i) : t.set(e, i),
      (ra(this, na).textContent = f(0));
  }
  static get observedAttributes() {
    return [...super.observedAttributes, a.MEDIA_PREVIEW_TIME];
  }
  attributeChangedCallback(e, t, i) {
    e === a.MEDIA_PREVIEW_TIME && null != i && (ra(this, na).textContent = f(i)),
      super.attributeChangedCallback(e, t, i);
  }
  get mediaPreviewTime() {
    return C(this, a.MEDIA_PREVIEW_TIME);
  }
  set mediaPreviewTime(e) {
    N(this, a.MEDIA_PREVIEW_TIME, e);
  }
}
(na = new WeakMap()),
  G.customElements.get("media-preview-time-display") || G.customElements.define("media-preview-time-display", oa);
var la,
  da = oa,
  ca = (e, t, i) => {
    if (!t.has(e)) throw TypeError("Cannot " + i);
  },
  ua = (e, t, i) => (ca(e, t, "read from private field"), i ? i.call(e) : t.get(e)),
  ha = (e, t, i, n) => (ca(e, t, "write to private field"), n ? n.call(e, i) : t.set(e, i), i);
const Ea = F.createElement("template");
Ea.innerHTML =
  '\n  <style>\n    :host {\n      box-sizing: border-box;\n      display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));\n      overflow: hidden;\n    }\n\n    img {\n      display: none;\n      position: relative;\n    }\n  </style>\n  <img crossorigin loading="eager" decoding="async">\n';
class ma extends G.HTMLElement {
  constructor() {
    super(),
      ((e, t, i) => {
        if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
        t instanceof WeakSet ? t.add(e) : t.set(e, i);
      })(this, la, void 0),
      this.shadowRoot || (this.attachShadow({ mode: "open" }), this.shadowRoot.appendChild(Ea.content.cloneNode(!0)));
  }
  static get observedAttributes() {
    return [t.MEDIA_CONTROLLER, a.MEDIA_PREVIEW_IMAGE, a.MEDIA_PREVIEW_COORDS];
  }
  connectedCallback() {
    var e, i, n;
    const a = this.getAttribute(t.MEDIA_CONTROLLER);
    a &&
      (ha(this, la, null == (e = this.getRootNode()) ? void 0 : e.getElementById(a)),
      null == (n = null == (i = ua(this, la)) ? void 0 : i.associateElement) || n.call(i, this));
  }
  disconnectedCallback() {
    var e, t;
    null == (t = null == (e = ua(this, la)) ? void 0 : e.unassociateElement) || t.call(e, this), ha(this, la, null);
  }
  attributeChangedCallback(e, i, n) {
    var s, r, o, l, d;
    [a.MEDIA_PREVIEW_IMAGE, a.MEDIA_PREVIEW_COORDS].includes(e) && this.update(),
      e === t.MEDIA_CONTROLLER &&
        (i &&
          (null == (r = null == (s = ua(this, la)) ? void 0 : s.unassociateElement) || r.call(s, this),
          ha(this, la, null)),
        n &&
          this.isConnected &&
          (ha(this, la, null == (o = this.getRootNode()) ? void 0 : o.getElementById(n)),
          null == (d = null == (l = ua(this, la)) ? void 0 : l.associateElement) || d.call(l, this)));
  }
  get mediaPreviewImage() {
    return O(this, a.MEDIA_PREVIEW_IMAGE);
  }
  set mediaPreviewImage(e) {
    x(this, a.MEDIA_PREVIEW_IMAGE, e);
  }
  get mediaPreviewCoords() {
    const e = this.getAttribute(a.MEDIA_PREVIEW_COORDS);
    if (e) return e.split(/\s+/).map((e) => +e);
  }
  set mediaPreviewCoords(e) {
    e ? this.setAttribute(a.MEDIA_PREVIEW_COORDS, e.join(" ")) : this.removeAttribute(a.MEDIA_PREVIEW_COORDS);
  }
  update() {
    const e = this.mediaPreviewCoords,
      t = this.mediaPreviewImage;
    if (!e || !t) return;
    const [i, n, a, s] = e,
      r = t.split("#")[0],
      o = getComputedStyle(this),
      { maxWidth: l, maxHeight: d, minWidth: c, minHeight: u } = o,
      h = Math.min(parseInt(l) / a, parseInt(d) / s),
      E = Math.max(parseInt(c) / a, parseInt(u) / s),
      m = h < 1,
      v = m ? h : E > 1 ? E : 1,
      { style: p } = w(this.shadowRoot, ":host"),
      b = w(this.shadowRoot, "img").style,
      A = this.shadowRoot.querySelector("img"),
      g = m ? "min" : "max";
    p.setProperty(`${g}-width`, "initial", "important"),
      p.setProperty(`${g}-height`, "initial", "important"),
      (p.width = a * v + "px"),
      (p.height = s * v + "px");
    const I = () => {
      (b.width = this.imgWidth * v + "px"), (b.height = this.imgHeight * v + "px"), (b.display = "block");
    };
    A.src !== r &&
      ((A.onload = () => {
        (this.imgWidth = A.naturalWidth), (this.imgHeight = A.naturalHeight), I();
      }),
      (A.src = r),
      I()),
      I(),
      (b.transform = `translate(-${i * v}px, -${n * v}px)`);
  }
}
(la = new WeakMap()),
  G.customElements.get("media-preview-thumbnail") || G.customElements.define("media-preview-thumbnail", ma);
var va,
  pa,
  ba,
  Aa,
  ga,
  Ia,
  _a,
  Ma,
  fa,
  Ta,
  Sa = ma,
  Da = (e, t, i) => {
    if (!t.has(e)) throw TypeError("Cannot " + i);
  },
  La = (e, t, i) => (Da(e, t, "read from private field"), i ? i.call(e) : t.get(e)),
  ka = (e, t, i) => {
    if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
    t instanceof WeakSet ? t.add(e) : t.set(e, i);
  },
  Ra = (e, t, i, n) => (Da(e, t, "write to private field"), n ? n.call(e, i) : t.set(e, i), i);
class ya {
  constructor(e, t, i) {
    ka(this, va, void 0),
      ka(this, pa, void 0),
      ka(this, ba, void 0),
      ka(this, Aa, void 0),
      ka(this, ga, void 0),
      ka(this, Ia, void 0),
      ka(this, _a, void 0),
      ka(this, Ma, void 0),
      ka(this, fa, 0),
      ka(this, Ta, (e = performance.now()) => {
        Ra(this, fa, requestAnimationFrame(La(this, Ta))), Ra(this, Aa, performance.now() - La(this, ba));
        const t = 1e3 / this.fps;
        if (La(this, Aa) > t) {
          Ra(this, ba, e - (La(this, Aa) % t));
          const r =
              1e3 /
              ((e - La(this, pa)) /
                ++((i = this),
                (n = ga),
                {
                  set _(e) {
                    Ra(i, n, e, a);
                  },
                  get _() {
                    return La(i, n, s);
                  },
                })._),
            o = (e - La(this, Ia)) / 1e3 / this.duration;
          let l = La(this, _a) + o * this.playbackRate;
          l - La(this, va).valueAsNumber > 0
            ? Ra(this, Ma, this.playbackRate / this.duration / r)
            : (Ra(this, Ma, 0.995 * La(this, Ma)), (l = La(this, va).valueAsNumber + La(this, Ma))),
            this.callback(l);
        }
        var i, n, a, s;
      }),
      Ra(this, va, e),
      (this.callback = t),
      (this.fps = i);
  }
  start() {
    0 === La(this, fa) &&
      (Ra(this, ba, performance.now()), Ra(this, pa, La(this, ba)), Ra(this, ga, 0), La(this, Ta).call(this));
  }
  stop() {
    0 !== La(this, fa) && (cancelAnimationFrame(La(this, fa)), Ra(this, fa, 0));
  }
  update({ start: e, duration: t, playbackRate: i }) {
    const n = e - La(this, va).valueAsNumber;
    (n > 0 || n < -0.03) && this.callback(e),
      Ra(this, _a, e),
      Ra(this, Ia, performance.now()),
      (this.duration = t),
      (this.playbackRate = i);
  }
}
(va = new WeakMap()),
  (pa = new WeakMap()),
  (ba = new WeakMap()),
  (Aa = new WeakMap()),
  (ga = new WeakMap()),
  (Ia = new WeakMap()),
  (_a = new WeakMap()),
  (Ma = new WeakMap()),
  (fa = new WeakMap()),
  (Ta = new WeakMap());
var wa,
  Ca,
  Na,
  Ua,
  Pa,
  Oa,
  xa,
  Va,
  Ba,
  Wa,
  $a,
  Ha,
  Ga,
  Fa,
  Ka,
  Qa,
  qa,
  ja,
  Ya,
  Za,
  za = (e, t, i) => {
    if (!t.has(e)) throw TypeError("Cannot " + i);
  },
  Xa = (e, t, i) => (za(e, t, "read from private field"), i ? i.call(e) : t.get(e)),
  Ja = (e, t, i) => {
    if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
    t instanceof WeakSet ? t.add(e) : t.set(e, i);
  },
  es = (e, t, i, n) => (za(e, t, "write to private field"), n ? n.call(e, i) : t.set(e, i), i),
  ts = (e, t, i) => (za(e, t, "access private method"), i);
const is = F.createElement("template");
is.innerHTML = `\n  <style>\n    :host {\n      --media-preview-border-radius: 3px;\n      --media-box-padding-left: 10px;\n      --media-box-padding-right: 10px;\n    }\n\n    #highlight {\n      background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));\n    }\n\n    #preview-rail,\n    #current-rail {\n      \n      width: 1%;\n      position: absolute;\n      left: 0;\n      bottom: 100%;\n      pointer-events: none;\n    }\n\n    [part~="box"] {\n      \n      position: absolute;\n      bottom: 100%;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      transform: translateX(-50%);\n    }\n\n    [part~="preview-box"] {\n      transition-property: var(--media-preview-transition-property, visibility, opacity);\n      transition-duration: var(--media-preview-transition-duration-out, .25s);\n      transition-delay: var(--media-preview-transition-delay-out, 0s);\n      visibility: hidden;\n      opacity: 0;\n    }\n\n    :host(:is([${a.MEDIA_PREVIEW_IMAGE}], [${a.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {\n      transition-duration: var(--media-preview-transition-duration-in, .5s);\n      transition-delay: var(--media-preview-transition-delay-in, .25s);\n      visibility: visible;\n      opacity: 1;\n    }\n\n    @media (hover: hover) {\n      :host(:is([${a.MEDIA_PREVIEW_IMAGE}], [${a.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {\n        transition-duration: var(--media-preview-transition-duration-in, .5s);\n        transition-delay: var(--media-preview-transition-delay-in, .25s);\n        visibility: visible;\n        opacity: 1;\n      }\n    }\n\n    media-preview-thumbnail,\n    ::slotted(media-preview-thumbnail) {\n      visibility: hidden;\n      \n      transition: visibility 0s .25s;\n      transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));\n      background: var(--media-preview-thumbnail-background, var(--media-preview-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)))));\n      box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));\n      max-width: var(--media-preview-thumbnail-max-width, 180px);\n      max-height: var(--media-preview-thumbnail-max-height, 160px);\n      min-width: var(--media-preview-thumbnail-min-width, 120px);\n      min-height: var(--media-preview-thumbnail-min-height, 80px);\n      border: var(--media-preview-thumbnail-border);\n      border-radius: var(--media-preview-thumbnail-border-radius,\n        var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);\n    }\n\n    :host([${a.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,\n    :host([${a.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {\n      transition-delay: var(--media-preview-transition-delay-in, .25s);\n      visibility: visible;\n    }\n\n    @media (hover: hover) {\n      :host([${a.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,\n      :host([${a.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {\n        transition-delay: var(--media-preview-transition-delay-in, .25s);\n        visibility: visible;\n      }\n\n      :host([${a.MEDIA_PREVIEW_TIME}]:hover) {\n        --media-time-range-hover-display: block;\n      }\n    }\n\n    media-preview-time-display,\n    ::slotted(media-preview-time-display) {\n      min-width: 0;\n      \n      transition: min-width 0s, border-radius 0s;\n      transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));\n      background: var(--media-preview-time-background, var(--media-preview-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)))));\n      border-radius: var(--media-preview-time-border-radius,\n        var(--media-preview-border-radius) var(--media-preview-border-radius)\n        var(--media-preview-border-radius) var(--media-preview-border-radius));\n      padding: var(--media-preview-time-padding, 1px 10px 0);\n      margin: var(--media-preview-time-margin, 0 0 10px);\n      text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));\n    }\n\n    :host([${a.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,\n    :host([${a.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {\n      transition-delay: var(--media-preview-transition-delay-in, .25s);\n      min-width: 100%;\n      border-radius: var(--media-preview-time-border-radius,\n        0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));\n    }\n  </style>\n  <div id="preview-rail">\n    <slot name="preview" part="box preview-box">\n      <media-preview-thumbnail></media-preview-thumbnail>\n      <media-preview-time-display></media-preview-time-display>\n    </slot>\n  </div>\n  <div id="current-rail">\n    <slot name="current" part="box current-box">\n      \n    </slot>\n  </div>\n`;
const ns = (e, t = e.mediaCurrentTime) => {
    if (Number.isNaN(e.mediaSeekableEnd)) return 0;
    const i = (t - e.mediaSeekableStart) / (e.mediaSeekableEnd - e.mediaSeekableStart);
    return Math.max(0, Math.min(i, 1));
  },
  as = (e, t = e.range.valueAsNumber) =>
    Number.isNaN(e.mediaSeekableEnd) ? 0 : t * (e.mediaSeekableEnd - e.mediaSeekableStart) + e.mediaSeekableStart;
class ss extends Ri {
  constructor() {
    super(),
      Ja(this, Va),
      Ja(this, Wa),
      Ja(this, Ga),
      Ja(this, Ka),
      Ja(this, qa),
      Ja(this, Ya),
      Ja(this, wa, void 0),
      Ja(this, Ca, void 0),
      Ja(this, Na, void 0),
      Ja(this, Ua, void 0),
      Ja(this, Pa, void 0),
      Ja(this, Oa, void 0),
      Ja(this, xa, void 0),
      Ja(this, Ha, (e) => {
        this.dragging || ((this.range.valueAsNumber = e), this.updateBar());
      }),
      this.container.appendChild(is.content.cloneNode(!0)),
      es(this, Na, this.shadowRoot.querySelectorAll('[part~="box"]')),
      es(this, Ua, this.shadowRoot.querySelector('[part~="preview-box"]')),
      es(this, Pa, this.shadowRoot.querySelector('[part~="current-box"]'));
    const e = getComputedStyle(this);
    es(this, Oa, parseInt(e.getPropertyValue("--media-box-padding-left"))),
      es(this, xa, parseInt(e.getPropertyValue("--media-box-padding-right"))),
      es(this, Ca, new ya(this.range, Xa(this, Ha), 60));
  }
  static get observedAttributes() {
    return [
      ...super.observedAttributes,
      a.MEDIA_PAUSED,
      a.MEDIA_DURATION,
      a.MEDIA_SEEKABLE,
      a.MEDIA_CURRENT_TIME,
      a.MEDIA_PREVIEW_IMAGE,
      a.MEDIA_PREVIEW_TIME,
      a.MEDIA_BUFFERED,
      a.MEDIA_PLAYBACK_RATE,
      a.MEDIA_LOADING,
      a.MEDIA_ENDED,
    ];
  }
  connectedCallback() {
    var e;
    super.connectedCallback(),
      this.range.setAttribute("aria-label", m.SEEK()),
      ts(this, Va, Ba).call(this),
      es(this, wa, this.getRootNode()),
      null == (e = Xa(this, wa)) || e.addEventListener("transitionstart", this);
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(),
      ts(this, Va, Ba).call(this),
      null == (e = Xa(this, wa)) || e.removeEventListener("transitionstart", this),
      es(this, wa, null);
  }
  attributeChangedCallback(e, t, i) {
    super.attributeChangedCallback(e, t, i),
      t != i &&
        (e === a.MEDIA_CURRENT_TIME ||
        e === a.MEDIA_PAUSED ||
        e === a.MEDIA_ENDED ||
        e === a.MEDIA_LOADING ||
        e === a.MEDIA_DURATION ||
        e === a.MEDIA_SEEKABLE
          ? (Xa(this, Ca).update({
              start: ns(this),
              duration: this.mediaSeekableEnd - this.mediaSeekableStart,
              playbackRate: this.mediaPlaybackRate,
            }),
            ts(this, Va, Ba).call(this),
            ((e) => {
              const t = e.range,
                i = M(+as(e)),
                n = M(+e.mediaSeekableEnd),
                a = i && n ? `${i} of ${n}` : "video not loaded, unknown time.";
              t.setAttribute("aria-valuetext", a);
            })(this))
          : e === a.MEDIA_BUFFERED && this.updateBufferedBar());
  }
  get mediaPaused() {
    return U(this, a.MEDIA_PAUSED);
  }
  set mediaPaused(e) {
    P(this, a.MEDIA_PAUSED, e);
  }
  get mediaLoading() {
    return U(this, a.MEDIA_LOADING);
  }
  set mediaLoading(e) {
    P(this, a.MEDIA_LOADING, e);
  }
  get mediaDuration() {
    return C(this, a.MEDIA_DURATION);
  }
  set mediaDuration(e) {
    N(this, a.MEDIA_DURATION, e);
  }
  get mediaCurrentTime() {
    return C(this, a.MEDIA_CURRENT_TIME);
  }
  set mediaCurrentTime(e) {
    N(this, a.MEDIA_CURRENT_TIME, e);
  }
  get mediaPlaybackRate() {
    return C(this, a.MEDIA_PLAYBACK_RATE, 1);
  }
  set mediaPlaybackRate(e) {
    N(this, a.MEDIA_PLAYBACK_RATE, e);
  }
  get mediaBuffered() {
    const e = this.getAttribute(a.MEDIA_BUFFERED);
    return e ? e.split(" ").map((e) => e.split(":").map((e) => +e)) : [];
  }
  set mediaBuffered(e) {
    if (!e) return void this.removeAttribute(a.MEDIA_BUFFERED);
    const t = e.map((e) => e.join(":")).join(" ");
    this.setAttribute(a.MEDIA_BUFFERED, t);
  }
  get mediaSeekable() {
    const e = this.getAttribute(a.MEDIA_SEEKABLE);
    if (e) return e.split(":").map((e) => +e);
  }
  set mediaSeekable(e) {
    null != e ? this.setAttribute(a.MEDIA_SEEKABLE, e.join(":")) : this.removeAttribute(a.MEDIA_SEEKABLE);
  }
  get mediaSeekableEnd() {
    var e;
    const [, t = this.mediaDuration] = null != (e = this.mediaSeekable) ? e : [];
    return t;
  }
  get mediaSeekableStart() {
    var e;
    const [t = 0] = null != (e = this.mediaSeekable) ? e : [];
    return t;
  }
  get mediaPreviewImage() {
    return O(this, a.MEDIA_PREVIEW_IMAGE);
  }
  set mediaPreviewImage(e) {
    x(this, a.MEDIA_PREVIEW_IMAGE, e);
  }
  get mediaPreviewTime() {
    return C(this, a.MEDIA_PREVIEW_TIME);
  }
  set mediaPreviewTime(e) {
    N(this, a.MEDIA_PREVIEW_TIME, e);
  }
  get mediaEnded() {
    return U(this, a.MEDIA_ENDED);
  }
  set mediaEnded(e) {
    P(this, a.MEDIA_ENDED, e);
  }
  updateBar() {
    super.updateBar(), this.updateBufferedBar(), this.updateCurrentBox();
  }
  updateBufferedBar() {
    var e;
    const t = this.mediaBuffered;
    if (!t.length) return;
    let i;
    if (this.mediaEnded) i = 1;
    else {
      const n = this.mediaCurrentTime,
        [, a = this.mediaSeekableStart] = null != (e = t.find(([e, t]) => e <= n && n <= t)) ? e : [];
      i = ns(this, a);
    }
    const { style: n } = w(this.shadowRoot, "#highlight");
    n.setProperty("width", 100 * i + "%");
  }
  updateCurrentBox() {
    if (!Xa(this, Pa).assignedElements().length) return;
    const e = ts(this, Ga, Fa).call(this, Xa(this, Pa), this.range.valueAsNumber),
      { style: t } = w(this.shadowRoot, "#current-rail");
    t.transform = `translateX(${e})`;
  }
  handleEvent(e) {
    switch ((super.handleEvent(e), e.type)) {
      case "input":
        ts(this, Ya, Za).call(this);
        break;
      case "pointermove":
        ts(this, Ka, Qa).call(this, e);
        break;
      case "pointerup":
      case "pointerleave":
        ts(this, qa, ja).call(this, null);
        break;
      case "transitionstart":
        k(e.target, this) && setTimeout(() => ts(this, Va, Ba).call(this), 0);
    }
  }
}
(wa = new WeakMap()),
  (Ca = new WeakMap()),
  (Na = new WeakMap()),
  (Ua = new WeakMap()),
  (Pa = new WeakMap()),
  (Oa = new WeakMap()),
  (xa = new WeakMap()),
  (Va = new WeakSet()),
  (Ba = function () {
    ts(this, Wa, $a).call(this) ? Xa(this, Ca).start() : Xa(this, Ca).stop();
  }),
  (Wa = new WeakSet()),
  ($a = function () {
    return (
      this.isConnected &&
      (function (e, t = 3) {
        if (e.checkVisibility) return e.checkVisibility({ checkOpacity: !0, checkVisibilityCSS: !0 });
        let i = e;
        for (; i && t > 0; ) {
          const e = getComputedStyle(i);
          if ("0" === e.opacity || "hidden" === e.visibility || "none" === e.display) return !1;
          (i = i.parentElement), t--;
        }
        return !0;
      })(this) &&
      !this.mediaPaused &&
      !this.mediaLoading &&
      !this.mediaEnded
    );
  }),
  (Ha = new WeakMap()),
  (Ga = new WeakSet()),
  (Fa = function (e, t) {
    var i;
    let n = 100 * t * 100 + "%";
    const a = e.offsetWidth;
    if (!a) return n;
    const s =
        null != (i = this.getAttribute("bounds") ? R(this, `#${this.getAttribute("bounds")}`) : this.parentElement)
          ? i
          : this,
      r = this.range.getBoundingClientRect(),
      o = s.getBoundingClientRect(),
      l = ((Xa(this, Oa) - (r.left - o.left - a / 2)) / r.width) * 100,
      d = ((o.right - r.left - a / 2 - Xa(this, xa)) / r.width) * 100;
    return Number.isNaN(l) || (n = `max(${100 * l}%, ${n})`), Number.isNaN(d) || (n = `min(${n}, ${100 * d}%)`), n;
  }),
  (Ka = new WeakSet()),
  (Qa = function (e) {
    const t = [...Xa(this, Na)].some((t) => e.composedPath().includes(t));
    if (!this.dragging && (t || !e.composedPath().includes(this))) return void ts(this, qa, ja).call(this, null);
    const i = this.mediaDuration;
    if (!i) return;
    const n = this.range.getBoundingClientRect();
    let a = (e.clientX - n.left) / n.width;
    a = Math.max(0, Math.min(1, a));
    const s = ts(this, Ga, Fa).call(this, Xa(this, Ua), a),
      { style: r } = w(this.shadowRoot, "#preview-rail");
    (r.transform = `translateX(${s})`), ts(this, qa, ja).call(this, a * i);
  }),
  (qa = new WeakSet()),
  (ja = function (t) {
    this.dispatchEvent(new G.CustomEvent(e.MEDIA_PREVIEW_REQUEST, { composed: !0, bubbles: !0, detail: t }));
  }),
  (Ya = new WeakSet()),
  (Za = function () {
    Xa(this, Ca).stop();
    const t = as(this);
    this.dispatchEvent(new G.CustomEvent(e.MEDIA_SEEK_REQUEST, { composed: !0, bubbles: !0, detail: t }));
  }),
  G.customElements.get("media-time-range") || G.customElements.define("media-time-range", ss);
var rs,
  os,
  ls,
  ds = ss,
  cs = (e, t, i) => {
    if (!t.has(e)) throw TypeError("Cannot " + i);
  },
  us = (e, t, i) => (cs(e, t, "read from private field"), i ? i.call(e) : t.get(e)),
  hs = (e, t, i) => {
    if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
    t instanceof WeakSet ? t.add(e) : t.set(e, i);
  },
  Es = (e, t, i, n) => (cs(e, t, "write to private field"), n ? n.call(e, i) : t.set(e, i), i);
const ms = "loadingdelay",
  vs = F.createElement("template");
vs.innerHTML = `\n<style>\n:host {\n  display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));\n  vertical-align: middle;\n  box-sizing: border-box;\n  --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, 500ms);\n}\n\n#status {\n  color: rgba(0,0,0,0);\n  width: 0px;\n  height: 0px;\n}\n\n:host slot[name=icon] > *,\n:host ::slotted([slot=icon]) {\n  opacity: var(--media-loading-indicator-opacity, 0);\n  transition: opacity 0.15s;\n}\n\n:host([${
  a.MEDIA_LOADING
}]:not([${a.MEDIA_PAUSED}])) slot[name=icon] > *,\n:host([${a.MEDIA_LOADING}]:not([${
  a.MEDIA_PAUSED
}])) ::slotted([slot=icon]) {\n  opacity: var(--media-loading-indicator-opacity, 1);\n  transition: opacity 0.15s var(--_loading-indicator-delay);\n}\n\n:host #status {\n  visibility: var(--media-loading-indicator-opacity, hidden);\n  transition: visibility 0.15s;\n}\n\n:host([${
  a.MEDIA_LOADING
}]:not([${
  a.MEDIA_PAUSED
}])) #status {\n  visibility: var(--media-loading-indicator-opacity, visible);\n  transition: visibility 0.15s var(--_loading-indicator-delay);\n}\n\nsvg, img, ::slotted(svg), ::slotted(img) {\n  width: var(--media-loading-indicator-icon-width);\n  height: var(--media-loading-indicator-icon-height, 100px);\n  fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));\n  vertical-align: middle;\n}\n</style>\n\n<slot name="icon">\n<svg aria-hidden="true" viewBox="0 0 100 100">\n  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">\n    <animateTransform\n       attributeName="transform"\n       attributeType="XML"\n       type="rotate"\n       dur="1s"\n       from="0 50 50"\n       to="360 50 50"\n       repeatCount="indefinite" />\n  </path>\n</svg>\n</slot>\n<div id="status" role="status" aria-live="polite">${m.MEDIA_LOADING()}</div>\n`;
class ps extends G.HTMLElement {
  constructor() {
    if ((super(), hs(this, rs, void 0), hs(this, os, 500), hs(this, ls, void 0), !this.shadowRoot)) {
      const e = this.attachShadow({ mode: "open" }),
        t = vs.content.cloneNode(!0);
      e.appendChild(t);
    }
    const { style: e } = w(this.shadowRoot, ":host");
    Es(this, ls, e);
  }
  static get observedAttributes() {
    return [t.MEDIA_CONTROLLER, a.MEDIA_PAUSED, a.MEDIA_LOADING, ms];
  }
  attributeChangedCallback(e, i, n) {
    var a, s, r, o, l;
    e === ms && i !== n
      ? (this.loadingDelay = Number(n))
      : e === t.MEDIA_CONTROLLER &&
        (i &&
          (null == (s = null == (a = us(this, rs)) ? void 0 : a.unassociateElement) || s.call(a, this),
          Es(this, rs, null)),
        n &&
          this.isConnected &&
          (Es(this, rs, null == (r = this.getRootNode()) ? void 0 : r.getElementById(n)),
          null == (l = null == (o = us(this, rs)) ? void 0 : o.associateElement) || l.call(o, this)));
  }
  connectedCallback() {
    var e, i, n;
    const a = this.getAttribute(t.MEDIA_CONTROLLER);
    a &&
      (Es(this, rs, null == (e = this.getRootNode()) ? void 0 : e.getElementById(a)),
      null == (n = null == (i = us(this, rs)) ? void 0 : i.associateElement) || n.call(i, this));
  }
  disconnectedCallback() {
    var e, t;
    null == (t = null == (e = us(this, rs)) ? void 0 : e.unassociateElement) || t.call(e, this), Es(this, rs, null);
  }
  get loadingDelay() {
    return us(this, os);
  }
  set loadingDelay(e) {
    Es(this, os, e),
      us(this, ls).setProperty("--_loading-indicator-delay", `var(--media-loading-indicator-transition-delay, ${e}ms)`);
  }
  get mediaPaused() {
    return U(this, a.MEDIA_PAUSED);
  }
  set mediaPaused(e) {
    P(this, a.MEDIA_PAUSED, e);
  }
  get mediaLoading() {
    return U(this, a.MEDIA_LOADING);
  }
  set mediaLoading(e) {
    P(this, a.MEDIA_LOADING, e);
  }
}
(rs = new WeakMap()),
  (os = new WeakMap()),
  (ls = new WeakMap()),
  G.customElements.get("media-loading-indicator") || G.customElements.define("media-loading-indicator", ps);
var bs = ps;
class As extends Ri {
  static get observedAttributes() {
    return [...super.observedAttributes, a.MEDIA_VOLUME, a.MEDIA_MUTED, a.MEDIA_VOLUME_UNAVAILABLE];
  }
  constructor() {
    super(),
      this.range.addEventListener("input", () => {
        const t = this.range.value,
          i = new G.CustomEvent(e.MEDIA_VOLUME_REQUEST, { composed: !0, bubbles: !0, detail: t });
        this.dispatchEvent(i);
      });
  }
  connectedCallback() {
    super.connectedCallback(), this.range.setAttribute("aria-label", m.VOLUME());
  }
  attributeChangedCallback(e, t, i) {
    var n;
    super.attributeChangedCallback(e, t, i),
      (e !== a.MEDIA_VOLUME && e !== a.MEDIA_MUTED) ||
        ((this.range.valueAsNumber = (n = this).mediaMuted ? 0 : n.mediaVolume),
        this.range.setAttribute("aria-valuetext", (({ value: e }) => `${Math.round(100 * e)}%`)(this.range)),
        this.updateBar());
  }
  get mediaVolume() {
    return C(this, a.MEDIA_VOLUME, 1);
  }
  set mediaVolume(e) {
    N(this, a.MEDIA_VOLUME, e);
  }
  get mediaMuted() {
    return U(this, a.MEDIA_MUTED);
  }
  set mediaMuted(e) {
    P(this, a.MEDIA_MUTED, e);
  }
  get mediaVolumeUnavailable() {
    return O(this, a.MEDIA_VOLUME_UNAVAILABLE);
  }
  set mediaVolumeUnavailable(e) {
    x(this, a.MEDIA_VOLUME_UNAVAILABLE, e);
  }
}
G.customElements.get("media-volume-range") || G.customElements.define("media-volume-range", As);
var gs = As;
export {
  re as MediaAirplayButton,
  cn as MediaCaptionsButton,
  ue as MediaCastButton,
  ne as MediaChromeButton,
  wi as MediaChromeRange,
  Vi as MediaControlBar,
  Mi as MediaController,
  Yi as MediaDurationDisplay,
  An as MediaFullscreenButton,
  be as MediaGestureReceiver,
  Dn as MediaLiveButton,
  bs as MediaLoadingIndicator,
  Cn as MediaMuteButton,
  xn as MediaPipButton,
  Hn as MediaPlayButton,
  jn as MediaPlaybackRateButton,
  Jn as MediaPosterImage,
  Sa as MediaPreviewThumbnail,
  da as MediaPreviewTimeDisplay,
  aa as MediaSeekBackwardButton,
  mn as MediaSeekForwardButton,
  an as MediaTimeDisplay,
  ds as MediaTimeRange,
  gs as MediaVolumeRange,
  E as constants,
  p as labels,
  S as timeUtils,
};
export default null;
//# sourceMappingURL=/sm/cd3446314f41267b418137d96123f3fac97e4b3a572fa742592a86c9e7115db6.map
