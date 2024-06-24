/**
 * Minified by jsDelivr using Terser v5.19.2.
 * Original file: /npm/hls-video-element@1.0.1/hls-video-element.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import { CustomVideoElement } from "custom-media-element";
import { MediaTracksMixin } from "media-tracks";
import Hls from "hls.js/dist/hls.mjs";
class HLSVideoElement extends MediaTracksMixin(CustomVideoElement) {
  attributeChangedCallback(e, i, t) {
    "src" !== e && super.attributeChangedCallback(e, i, t), "src" === e && i != t && this.load();
  }
  #e() {
    this.api && (this.api.detachMedia(), this.api.destroy(), (this.api = null));
  }
  async load() {
    if ((this.#e(), this.src))
      if (Hls.isSupported()) {
        switch (((this.api = new Hls({ liveDurationInfinity: !0 })), await Promise.resolve(), this.nativeEl.preload)) {
          case "none": {
            const e = () => this.api.loadSource(this.src);
            this.nativeEl.addEventListener("play", e, { once: !0 }),
              this.api.on(Hls.Events.DESTROYING, () => {
                this.nativeEl.removeEventListener("play", e);
              });
            break;
          }
          case "metadata": {
            const e = this.api.config.maxBufferLength,
              i = this.api.config.maxBufferSize;
            (this.api.config.maxBufferLength = 1), (this.api.config.maxBufferSize = 1);
            const t = () => {
              (this.api.config.maxBufferLength = e), (this.api.config.maxBufferSize = i);
            };
            this.nativeEl.addEventListener("play", t, { once: !0 }),
              this.api.on(Hls.Events.DESTROYING, () => {
                this.nativeEl.removeEventListener("play", t);
              }),
              this.api.loadSource(this.src);
            break;
          }
          default:
            this.api.loadSource(this.src);
        }
        this.api.attachMedia(this.nativeEl);
        const e = new WeakMap();
        this.api.on(Hls.Events.MANIFEST_PARSED, (i, t) => {
          s();
          const a = this.addVideoTrack("main");
          a.selected = !0;
          for (const [i, s] of t.levels.entries()) {
            const t = a.addRendition(s.url[0], s.width, s.height, s.videoCodec, s.bitrate);
            e.set(s, `${i}`), (t.id = `${i}`);
          }
          for (let [e, i] of t.audioTracks.entries()) {
            const t = i.default ? "main" : "alternative",
              s = this.addAudioTrack(t, i.name, i.lang);
            (s.id = `${e}`), i.default && (s.enabled = !0);
          }
        }),
          this.audioTracks.addEventListener("change", () => {
            const e = +[...this.audioTracks].find((e) => e.enabled)?.id,
              i = this.api.audioTracks.map((e) => e.id);
            e != this.api.audioTrack && i.includes(e) && (this.api.audioTrack = e);
          }),
          this.api.on(Hls.Events.LEVELS_UPDATED, (i, t) => {
            const s = this.videoTracks[this.videoTracks.selectedIndex ?? 0];
            if (!s) return;
            const a = t.levels.map((i) => e.get(i));
            for (const e of this.videoRenditions) e.id && !a.includes(e.id) && s.removeRendition(e);
          });
        const i = (e) => {
            const i = e.target.selectedIndex;
            i != this.api.nextLevel && t(i);
          },
          t = (e) => {
            const i = this.currentTime;
            let t = !1;
            const s = (e, i) => {
              t ||= !Number.isFinite(i.endOffset);
            };
            this.api.on(Hls.Events.BUFFER_FLUSHING, s),
              (this.api.nextLevel = e),
              this.api.off(Hls.Events.BUFFER_FLUSHING, s),
              t ||
                this.api.trigger(Hls.Events.BUFFER_FLUSHING, { startOffset: i + 10, endOffset: 1 / 0, type: "video" });
          };
        this.videoRenditions?.addEventListener("change", i);
        const s = () => {
          for (const e of this.videoTracks) this.removeVideoTrack(e);
          for (const e of this.audioTracks) this.removeAudioTrack(e);
        };
        this.api.once(Hls.Events.DESTROYING, s);
      } else
        await Promise.resolve(),
          this.nativeEl.canPlayType("application/vnd.apple.mpegurl") && (this.nativeEl.src = this.src);
  }
}
globalThis.customElements &&
  !globalThis.customElements.get("hls-video") &&
  globalThis.customElements.define("hls-video", HLSVideoElement);
export default HLSVideoElement;
export { Hls };
//# sourceMappingURL=/sm/2537f7efc2e877d1fe861ac6642e5c829d0750ae16e25b30ea0ff2d1e08ba939.map
