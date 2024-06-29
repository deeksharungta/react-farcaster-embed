"use client";import fs from"react";import bs from"linkify-react";import{jsx as C,jsxs as Ei}from"react/jsx-runtime";var wn=()=>C("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:C("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})}),Rn=()=>Ei("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[C("path",{d:"M17 2.1l4 4-4 4"}),C("path",{d:"M3 12.2v-2a4 4 0 0 1 4-4h12.8M7 21.9l-4-4 4-4"}),C("path",{d:"M21 11.8v2a4 4 0 0 1-4 4H4.2"})]}),Cn=()=>C("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:C("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})}),Nn=()=>C("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:C("path",{d:"M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"})}),Un=()=>Ei("svg",{width:"24",height:"24",viewBox:"0 0 1260 1260",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Ei("g",{clipPath:"url(#fc-embed-clip1)",children:[C("path",{d:"M947.747 1259.61H311.861C139.901 1259.61 0 1119.72 0 947.752V311.871C0 139.907 139.901 0.00541362 311.861 0.00541362H947.747C1119.71 0.00541362 1259.61 139.907 1259.61 311.871V947.752C1259.61 1119.72 1119.71 1259.61 947.747 1259.61Z",fill:"#472A91"}),C("path",{d:"M826.513 398.633L764.404 631.889L702.093 398.633H558.697L495.789 633.607L433.087 398.633H269.764L421.528 914.36H562.431L629.807 674.876L697.181 914.36H838.388L989.819 398.633H826.513Z",fill:"white"})]}),C("defs",{children:C("clipPath",{id:"fc-embed-clip1",children:C("rect",{width:"1259.61",height:"1259.61",fill:"white"})})})]});import{jsx as pi}from"react/jsx-runtime";function vi({images:t}){return pi("div",{className:"farcaster-embed-image-container",children:t.map(e=>pi("a",{href:e.url,target:"_blank",className:"farcaster-embed-image-link",children:pi("img",{src:e.url,alt:e.alt,className:"farcaster-embed-image"})},e.url))})}import bi from"react";import{jsx as xn}from"react/jsx-runtime";function Pn({source:t,poster:e,aspectRatio:i}){let[n,a]=bi.useState(!1),[r,o]=bi.useState(!1),l=d=>new Promise((u,h)=>{let v=document.createElement("script");v.src=d,v.type="module",v.onload=()=>u(v),v.onerror=()=>h(new Error(`[react-farcaster-embed] Script load error for ${d}`)),document.head.appendChild(v)});return bi.useEffect(()=>{let d="scripts/media-chrome.js",u="scripts/hls-video-element.js";return l(d).then(()=>{a(!0)}).catch(h=>{console.error("Media Chrome loading failed",h)}),l(u).then(()=>{o(!0)}).catch(h=>{console.error("HLS Video Element loading failed",h)}),()=>{document.head.removeChild(document.head.querySelector(`script[src="${d}"]`)),document.head.removeChild(document.head.querySelector(`script[src="${u}"]`))}},[t,e,i]),xn("div",{style:{aspectRatio:i},children:n&&r&&xn("div",{className:"farcaster-embed-video-player",dangerouslySetInnerHTML:{__html:`<media-controller>
            <hls-video
              src="${t}"
              slot="media"
              volume="1"
              crossorigin
              playsinline
            ></hls-video>
            <media-poster-image
              slot="poster"
              src="${e}">
            </media-poster-image>
            <media-loading-indicator slot="centered-chrome" noautohide></media-loading-indicator>
            <media-control-bar>
              <media-play-button></media-play-button>
              <media-time-range></media-time-range>
              <media-time-display showduration remaining></media-time-display>
              <media-fullscreen-button></media-fullscreen-button>
            </media-control-bar>
          </media-controller>`}})})}import{CustomVideoElement as ks}from"custom-media-element";import{MediaTracksMixin as Ls}from"media-tracks";import J from"hls.js/dist/hls.mjs";var gi=class extends Ls(ks){attributeChangedCallback(e,i,n){e!=="src"&&super.attributeChangedCallback(e,i,n),e==="src"&&i!=n&&this.load()}#e(){this.api&&(this.api.detachMedia(),this.api.destroy(),this.api=null)}async load(){if(this.#e(),this.src)if(J.isSupported()){switch(this.api=new J({liveDurationInfinity:!0}),await Promise.resolve(),this.nativeEl.preload){case"none":{let r=()=>this.api.loadSource(this.src);this.nativeEl.addEventListener("play",r,{once:!0}),this.api.on(J.Events.DESTROYING,()=>{this.nativeEl.removeEventListener("play",r)});break}case"metadata":{let r=this.api.config.maxBufferLength,o=this.api.config.maxBufferSize;this.api.config.maxBufferLength=1,this.api.config.maxBufferSize=1;let l=()=>{this.api.config.maxBufferLength=r,this.api.config.maxBufferSize=o};this.nativeEl.addEventListener("play",l,{once:!0}),this.api.on(J.Events.DESTROYING,()=>{this.nativeEl.removeEventListener("play",l)}),this.api.loadSource(this.src);break}default:this.api.loadSource(this.src)}this.api.attachMedia(this.nativeEl);let e=new WeakMap;this.api.on(J.Events.MANIFEST_PARSED,(r,o)=>{a();let l=this.addVideoTrack("main");l.selected=!0;for(let[d,u]of o.levels.entries()){let h=l.addRendition(u.url[0],u.width,u.height,u.videoCodec,u.bitrate);e.set(u,`${d}`),h.id=`${d}`}for(let[d,u]of o.audioTracks.entries()){let h=u.default?"main":"alternative",v=this.addAudioTrack(h,u.name,u.lang);v.id=`${d}`,u.default&&(v.enabled=!0)}}),this.audioTracks.addEventListener("change",()=>{let r=+[...this.audioTracks].find(l=>l.enabled)?.id,o=this.api.audioTracks.map(l=>l.id);r!=this.api.audioTrack&&o.includes(r)&&(this.api.audioTrack=r)}),this.api.on(J.Events.LEVELS_UPDATED,(r,o)=>{let l=this.videoTracks[this.videoTracks.selectedIndex??0];if(!l)return;let d=o.levels.map(u=>e.get(u));for(let u of this.videoRenditions)u.id&&!d.includes(u.id)&&l.removeRendition(u)});let i=r=>{let o=r.target.selectedIndex;o!=this.api.nextLevel&&n(o)},n=r=>{let o=this.currentTime,l=!1,d=(u,h)=>{l||=!Number.isFinite(h.endOffset)};this.api.on(J.Events.BUFFER_FLUSHING,d),this.api.nextLevel=r,this.api.off(J.Events.BUFFER_FLUSHING,d),l||this.api.trigger(J.Events.BUFFER_FLUSHING,{startOffset:o+10,endOffset:1/0,type:"video"})};this.videoRenditions?.addEventListener("change",i);let a=()=>{for(let r of this.videoTracks)this.removeVideoTrack(r);for(let r of this.audioTracks)this.removeAudioTrack(r)};this.api.once(J.Events.DESTROYING,a)}else await Promise.resolve(),this.nativeEl.canPlayType("application/vnd.apple.mpegurl")&&(this.nativeEl.src=this.src)}};globalThis.customElements&&!globalThis.customElements.get("hls-video")&&globalThis.customElements.define("hls-video",gi);var E={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_TOGGLE_SUBTITLES_REQUEST:"mediatogglesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},g={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},Me={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_PAUSED:"mediaPaused",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_ENDED:"mediaEnded",MEDIA_MUTED:"mediaMuted",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_IS_PIP:"mediaIsPip",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_LOADING:"mediaLoading",MEDIA_BUFFERED:"mediaBuffered",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled"},ma=Object.entries(Me),s=ma.reduce((t,[e,i])=>(t[e]=`${i.toLowerCase()}`,t),{}),Le=ma.reduce((t,[e,i])=>(t[e]=`${i.toLowerCase()}`,t),{USER_INACTIVE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"}),Ss=Object.entries(Le).reduce((t,[e,i])=>{let n=s[e];return n&&(t[i]=n),t},{userinactivechange:"userinactive"}),Ea=Object.entries(s).reduce((t,[e,i])=>{let n=Le[e];return n&&(t[i]=n),t},{userinactive:"userinactivechange"}),ze={SUBTITLES:"subtitles",CAPTIONS:"captions",DESCRIPTIONS:"descriptions",CHAPTERS:"chapters",METADATA:"metadata"},Ye={DISABLED:"disabled",HIDDEN:"hidden",SHOWING:"showing"},wi={MOUSE:"mouse",PEN:"pen",TOUCH:"touch"},V={UNAVAILABLE:"unavailable",UNSUPPORTED:"unsupported"},Q={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"},ur=Object.freeze({__proto__:null,AttributeToStateChangeEventMap:Ea,AvailabilityStates:V,MediaStateChangeEvents:Le,MediaStateReceiverAttributes:g,MediaUIAttributes:s,MediaUIEvents:E,MediaUIProps:Me,PointerTypes:wi,ReadyStates:{HAVE_NOTHING:0,HAVE_METADATA:1,HAVE_CURRENT_DATA:2,HAVE_FUTURE_DATA:3,HAVE_ENOUGH_DATA:4},StateChangeEventToAttributeMap:Ss,StreamTypes:Q,TextTrackKinds:ze,TextTrackModes:Ye}),ue={AUDIO_PLAYER:()=>"audio player",VIDEO_PLAYER:()=>"video player",VOLUME:()=>"volume",SEEK:()=>"seek",CLOSED_CAPTIONS:()=>"closed captions",PLAYBACK_RATE:({playbackRate:t=1}={})=>`current playback rate ${t}`,PLAYBACK_TIME:()=>"playback time",MEDIA_LOADING:()=>"media loading"},y={PLAY:()=>"play",PAUSE:()=>"pause",MUTE:()=>"mute",UNMUTE:()=>"unmute",AIRPLAY:()=>"air play",ENTER_CAST:()=>"start casting",EXIT_CAST:()=>"stop casting",ENTER_FULLSCREEN:()=>"enter fullscreen mode",EXIT_FULLSCREEN:()=>"exit fullscreen mode",ENTER_PIP:()=>"enter picture in picture mode",EXIT_PIP:()=>"exit picture in picture mode",SEEK_FORWARD_N_SECS:({seekOffset:t=30}={})=>`seek forward ${t} seconds`,SEEK_BACK_N_SECS:({seekOffset:t=30}={})=>`seek back ${t} seconds`,SEEK_LIVE:()=>"seek to live",PLAYING_LIVE:()=>"playing live"},hr={...ue,...y};function ys(t){if(t){let{id:e,width:i,height:n}=t;return[e,i,n].filter(a=>a!=null).join(":")}}function Ds(t){if(t){let{id:e,kind:i,language:n,label:a}=t;return[e,i,n,a].filter(r=>r!=null).join(":")}}function Ai(t,e=!1){return t.split("_").map(function(i,n){return(n||e?i[0].toUpperCase():i[0].toLowerCase())+i.slice(1).toLowerCase()}).join("")}var pa=t=>new Promise(e=>setTimeout(e,t)),On=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],vt=t=>{if(typeof(e=t)!="number"||Number.isNaN(e)||!Number.isFinite(e))return"";var e;let i=Math.abs(t),n=i!==t,a=new Date(0,0,0,0,0,i,0);return`${[a.getHours(),a.getMinutes(),a.getSeconds()].map((o,l)=>o&&((d,u)=>`${d} ${d===1?On[u].singular:On[u].plural}`)(o,l)).filter(o=>o).join(", ")}${n?" remaining":""}`};function Se(t,e){let i=!1;t<0&&(i=!0,t=0-t),t=t<0?0:t;let n=Math.floor(t%60),a=Math.floor(t/60%60),r=Math.floor(t/3600),o=Math.floor(e/60%60),l=Math.floor(e/3600);return(isNaN(t)||t===1/0)&&(r=a=n="0"),r=r>0||l>0?r+":":"",a=((r||o>=10)&&a<10?"0"+a:a)+":",n=n<10?"0"+n:n,(i?"-":"")+r+a+n}var Vn=Object.freeze({length:0,start(t){let e=t>>>0;if(e>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${e}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(t){let e=t>>>0;if(e>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${e}) is greater than or equal to the maximum bound (${this.length}).`);return 0}}),mr=Object.freeze({__proto__:null,emptyTimeRanges:Vn,formatAsTimePhrase:vt,formatTime:Se,serializeTimeRanges:function(t=Vn){return Array.from(t).map((e,i)=>[Number(t.start(i).toFixed(3)),Number(t.end(i).toFixed(3))].join(":")).join(" ")}}),va=(t,e,i=".value")=>{let n=t.querySelector(i);n&&(n.textContent=e)},ba=(t,e)=>((i,n)=>{let a=`slot[name="${n}"]`,r=i.shadowRoot.querySelector(a);return r?r.children:[]})(t,e)[0],ht=(t,e)=>!(!t||!e)&&(!!t.contains(e)||ht(t,e.getRootNode().host)),An=(t,e)=>t?t.closest(e)||An(t.getRootNode().host,e):null;function Ii(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function w(t,e){var i;let n;for(n of t.querySelectorAll("style")){let a;try{a=(i=n.sheet)==null?void 0:i.cssRules}catch{continue}for(let r of a??[])if(r.selectorText===e)return r}return n?.sheet?(n.sheet.insertRule(`${e}{}`,n.sheet.cssRules.length),n.sheet.cssRules[n.sheet.cssRules.length-1]):{style:{setProperty:()=>{},removeProperty:()=>{}}}}function f(t,e,i=Number.NaN){let n=t.getAttribute(e);return n!=null?+n:i}function R(t,e,i){let n=+i;i==null||Number.isNaN(n)?t.hasAttribute(e)&&t.removeAttribute(e):f(t,e,void 0)!==n&&t.setAttribute(e,`${n}`)}function L(t,e){return t.hasAttribute(e)}function S(t,e,i){i!=null?L(t,e)!=i&&t.toggleAttribute(e,i):t.hasAttribute(e)&&t.removeAttribute(e)}function q(t,e,i=null){var n;return(n=t.getAttribute(e))!=null?n:i}function Z(t,e,i){if(i==null)return void(t.hasAttribute(e)&&t.removeAttribute(e));let n=`${i}`;q(t,e,void 0)!==n&&t.setAttribute(e,n)}var Jt=class{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}},ga={createElement:function(){return new In.HTMLElement},addEventListener(){},removeEventListener(){}},In={ResizeObserver:class{observe(){}unobserve(){}disconnect(){}},document:ga,HTMLElement:class extends Jt{},DocumentFragment:class extends Jt{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[]}},Aa=typeof window>"u"||window.customElements===void 0,Ia=Object.keys(In).every(t=>t in globalThis),c=Aa&&!Ia?In:globalThis,p=Aa&&!Ia?ga:globalThis.document,te,Nt,Pe,Ut,ws=Object.defineProperty,Rs=(t,e,i)=>(((n,a,r)=>{a in n?ws(n,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[a]=r})(t,typeof e!="symbol"?e+"":e,i),i),_a=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},F=(t,e,i)=>(_a(t,e,"read from private field"),i?i.call(t):e.get(t)),It=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},_t=(t,e,i,n)=>(_a(t,e,"write to private field"),n?n.call(t,i):e.set(t,i),i),fa=p.createElement("template");fa.innerHTML=`
<style>
  :host {
    font: var(--media-font,
      var(--media-font-weight, bold)
      var(--media-font-size, 14px) /
      var(--media-text-content-height, var(--media-control-height, 24px))
      var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
    color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
    background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
    padding: var(--media-control-padding, 10px);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    box-sizing: border-box;
    transition: background .15s linear;
    pointer-events: auto;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  
  :host(:focus-visible) {
    box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
    outline: 0;
  }
  
  :host(:where(:focus)) {
    box-shadow: none;
    outline: 0;
  }

  :host(:hover) {
    background: var(--media-control-hover-background, rgba(50 50 70 / .7));
  }

  svg, img, ::slotted(svg), ::slotted(img) {
    width: var(--media-button-icon-width);
    height: var(--media-button-icon-height, var(--media-control-height, 24px));
    transform: var(--media-button-icon-transform);
    transition: var(--media-button-icon-transition);
    fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
    vertical-align: middle;
    max-width: 100%;
    max-height: 100%;
    min-width: 100%;
  }
</style>
`;var x=class extends c.HTMLElement{constructor(e={}){if(super(),It(this,te,void 0),Rs(this,"preventClick",!1),It(this,Nt,n=>{this.preventClick||this.handleClick(n)}),It(this,Pe,n=>{let{key:a}=n;this.keysUsed.includes(a)?this.preventClick||this.handleClick(n):this.removeEventListener("keyup",F(this,Pe))}),It(this,Ut,n=>{let{metaKey:a,altKey:r,key:o}=n;a||r||!this.keysUsed.includes(o)?this.removeEventListener("keyup",F(this,Pe)):this.addEventListener("keyup",F(this,Pe),{once:!0})}),!this.shadowRoot){this.attachShadow({mode:"open"});let n=fa.content.cloneNode(!0);this.nativeEl=n;let a=e.slotTemplate;a||(a=p.createElement("template"),a.innerHTML=`<slot>${e.defaultContent||""}</slot>`),this.nativeEl.appendChild(a.content.cloneNode(!0)),this.shadowRoot.appendChild(n)}let{style:i}=w(this.shadowRoot,":host");i.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`)}static get observedAttributes(){return["disabled",g.MEDIA_CONTROLLER]}enable(){this.addEventListener("click",F(this,Nt)),this.addEventListener("keydown",F(this,Ut)),this.tabIndex=0}disable(){this.removeEventListener("click",F(this,Nt)),this.removeEventListener("keydown",F(this,Ut)),this.removeEventListener("keyup",F(this,Pe)),this.tabIndex=-1}attributeChangedCallback(e,i,n){var a,r,o,l,d;e===g.MEDIA_CONTROLLER?(i&&((r=(a=F(this,te))==null?void 0:a.unassociateElement)==null||r.call(a,this),_t(this,te,null)),n&&this.isConnected&&(_t(this,te,(o=this.getRootNode())==null?void 0:o.getElementById(n)),(d=(l=F(this,te))==null?void 0:l.associateElement)==null||d.call(l,this))):e==="disabled"&&n!==i&&(n==null?this.enable():this.disable())}connectedCallback(){var e,i,n;this.hasAttribute("disabled")||this.enable(),this.setAttribute("role","button");let a=this.getAttribute(g.MEDIA_CONTROLLER);a&&(_t(this,te,(e=this.getRootNode())==null?void 0:e.getElementById(a)),(n=(i=F(this,te))==null?void 0:i.associateElement)==null||n.call(i,this))}disconnectedCallback(){var e,i;this.disable(),(i=(e=F(this,te))==null?void 0:e.unassociateElement)==null||i.call(e,this),_t(this,te,null)}get keysUsed(){return["Enter"," "]}handleClick(e){}};te=new WeakMap,Nt=new WeakMap,Pe=new WeakMap,Ut=new WeakMap,c.customElements.get("media-chrome-button")||c.customElements.define("media-chrome-button",x);var Ma=p.createElement("template");Ma.innerHTML=`
  <slot name="icon"><svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
</slot>
`;var Ri=class extends x{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_AIRPLAY_UNAVAILABLE]}constructor(e={}){super({slotTemplate:Ma,...e})}connectedCallback(){this.setAttribute("aria-label",y.AIRPLAY()),super.connectedCallback()}get mediaAirplayUnavailable(){return q(this,s.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(e){Z(this,s.MEDIA_AIRPLAY_UNAVAILABLE,e)}handleClick(){let e=new c.CustomEvent(E.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(e)}};c.customElements.get("media-airplay-button")||c.customElements.define("media-airplay-button",Ri);var Ta=p.createElement("template");Ta.innerHTML=`
  <style>
  :host([${s.MEDIA_IS_CASTING}]) slot:not([name=exit]):not([name=icon]) {
    display: none !important;
  }

  
  :host(:not([${s.MEDIA_IS_CASTING}])) slot:not([name=enter]):not([name=icon]) {
    display: none !important;
  }
  </style>

  <slot name="icon">
    <slot name="enter"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg></slot>
    <slot name="exit"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg></slot>
  </slot>
`;var Bn=t=>{let e=t.getAttribute(s.MEDIA_IS_CASTING)!=null?y.EXIT_CAST():y.ENTER_CAST();t.setAttribute("aria-label",e)},Ci=class extends x{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_IS_CASTING,s.MEDIA_CAST_UNAVAILABLE]}constructor(e={}){super({slotTemplate:Ta,...e})}connectedCallback(){Bn(this),super.connectedCallback()}attributeChangedCallback(e,i,n){e===s.MEDIA_IS_CASTING&&Bn(this),super.attributeChangedCallback(e,i,n)}get mediaIsCasting(){return L(this,s.MEDIA_IS_CASTING)}set mediaIsCasting(e){S(this,s.MEDIA_IS_CASTING,e)}get mediaCastUnavailable(){return q(this,s.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(e){Z(this,s.MEDIA_CAST_UNAVAILABLE,e)}handleClick(){let e=this.mediaIsCasting?E.MEDIA_EXIT_CAST_REQUEST:E.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new c.CustomEvent(e,{composed:!0,bubbles:!0}))}};c.customElements.get("media-cast-button")||c.customElements.define("media-cast-button",Ci);var U;var ka=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},he=(t,e,i)=>(ka(t,e,"read from private field"),i?i.call(t):e.get(t)),ft=(t,e,i,n)=>(ka(t,e,"write to private field"),n?n.call(t,i):e.set(t,i),i),La=p.createElement("template");La.innerHTML=`
<style>
  :host {
    display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
    box-sizing: border-box;
  }
</style>
`;var Ni=class extends c.HTMLElement{constructor(e={}){if(super(),((i,n,a)=>{if(n.has(i))throw TypeError("Cannot add the same private member more than once");n instanceof WeakSet?n.add(i):n.set(i,a)})(this,U,void 0),!this.shadowRoot){let i=this.attachShadow({mode:"open"}),n=La.content.cloneNode(!0);this.nativeEl=n;let a=e.slotTemplate;a||(a=p.createElement("template"),a.innerHTML=`<slot>${e.defaultContent||""}</slot>`),this.nativeEl.appendChild(a.content.cloneNode(!0)),i.appendChild(n)}}static get observedAttributes(){return[g.MEDIA_CONTROLLER,s.MEDIA_PAUSED]}attributeChangedCallback(e,i,n){var a,r,o,l,d;e===g.MEDIA_CONTROLLER&&(i&&((r=(a=he(this,U))==null?void 0:a.unassociateElement)==null||r.call(a,this),ft(this,U,null)),n&&this.isConnected&&(ft(this,U,(o=this.getRootNode())==null?void 0:o.getElementById(n)),(d=(l=he(this,U))==null?void 0:l.associateElement)==null||d.call(l,this)))}connectedCallback(){var e,i,n,a;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),ft(this,U,function(r){var o;let l=r.getAttribute(g.MEDIA_CONTROLLER);return l?(o=r.getRootNode())==null?void 0:o.getElementById(l):An(r,"media-controller")}(this)),this.getAttribute(g.MEDIA_CONTROLLER)&&((i=(e=he(this,U))==null?void 0:e.associateElement)==null||i.call(e,this)),(n=he(this,U))==null||n.addEventListener("pointerdown",this),(a=he(this,U))==null||a.addEventListener("click",this)}disconnectedCallback(){var e,i,n,a;this.getAttribute(g.MEDIA_CONTROLLER)&&((i=(e=he(this,U))==null?void 0:e.unassociateElement)==null||i.call(e,this)),(n=he(this,U))==null||n.removeEventListener("pointerdown",this),(a=he(this,U))==null||a.removeEventListener("click",this),ft(this,U,null)}handleEvent(e){var i;let n=(i=e.composedPath())==null?void 0:i[0];if(["video","media-controller"].includes(n?.localName)){if(e.type==="pointerdown")this._pointerType=e.pointerType;else if(e.type==="click"){let{clientX:a,clientY:r}=e,{left:o,top:l,width:d,height:u}=this.getBoundingClientRect(),h=a-o,v=r-l;if(h<0||v<0||h>d||v>u||d===0&&u===0)return;let{pointerType:k=this._pointerType}=e;if(this._pointerType=void 0,k===wi.TOUCH)return void this.handleTap(e);if(k===wi.MOUSE)return void this.handleMouseClick(e)}}}get mediaPaused(){return L(this,s.MEDIA_PAUSED)}set mediaPaused(e){S(this,s.MEDIA_PAUSED,e)}handleTap(e){}handleMouseClick(e){let i=this.mediaPaused?E.MEDIA_PLAY_REQUEST:E.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new c.CustomEvent(i,{composed:!0,bubbles:!0}))}};U=new WeakMap,c.customElements.get("media-gesture-receiver")||c.customElements.define("media-gesture-receiver",Ni);var Wn=new WeakMap,Sa=t=>{let e=Wn.get(t);return e||Wn.set(t,e=new Set),e},Cs=new c.ResizeObserver(t=>{for(let e of t)for(let i of Sa(e.target))i(e)}),ei,Ee,Ui,ya,xi,Da,mt,xt,Pt,_i,je,nt,Ns=Object.defineProperty,Us=(t,e,i)=>(((n,a,r)=>{a in n?Ns(n,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[a]=r})(t,typeof e!="symbol"?e+"":e,i),i),_n=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},at=(t,e,i)=>(_n(t,e,"read from private field"),i?i.call(t):e.get(t)),ge=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},fi=(t,e,i,n)=>(_n(t,e,"write to private field"),n?n.call(t,i):e.set(t,i),i),j=(t,e,i)=>(_n(t,e,"access private method"),i),b={AUDIO:"audio",AUTOHIDE:"autohide",BREAKPOINTS:"breakpoints",GESTURES_DISABLED:"gesturesdisabled",KEYBOARD_CONTROL:"keyboardcontrol",NO_AUTOHIDE:"noautohide",USER_INACTIVE:"userinactive"},wa=p.createElement("template");wa.innerHTML=`
  <style>
    
    :host([${s.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
      outline: none;
    }

    :host {
      box-sizing: border-box;
      position: relative;
      display: inline-block;
      line-height: 0;
      background-color: var(--media-background-color, #000);
    }

    :host(:not([${b.AUDIO}])) [part~=layer]:not([part~=media-layer]) {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      display: flex;
      flex-flow: column nowrap;
      align-items: start;
      pointer-events: none;
      background: none;
    }

    slot[name=media] {
      display: var(--media-slot-display, contents);
    }

    
    :host([${b.AUDIO}]) slot[name=media] {
      display: var(--media-slot-display, none);
    }

    
    :host([${b.AUDIO}]) [part~=layer][part~=gesture-layer] {
      height: 0;
      display: block;
    }

    
    :host(:not([${b.AUDIO}])[${b.GESTURES_DISABLED}]) ::slotted([slot=gestures-chrome]),
    :host(:not([${b.AUDIO}])[${b.GESTURES_DISABLED}]) media-gesture-receiver[slot=gestures-chrome] {
      display: none;
    }

    
    ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator)) {
      pointer-events: auto;
    }

    :host(:not([${b.AUDIO}])) *[part~=layer][part~=centered-layer] {
      align-items: center;
      justify-content: center;
    }

    :host(:not([${b.AUDIO}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
    :host(:not([${b.AUDIO}])) media-gesture-receiver[slot=gestures-chrome] {
      align-self: stretch;
      flex-grow: 1;
    }

    slot[name=middle-chrome] {
      display: inline;
      flex-grow: 1;
      pointer-events: none;
      background: none;
    }

    
    ::slotted([slot=media]),
    ::slotted([slot=poster]) {
      width: 100%;
      height: 100%;
    }

    
    :host(:not([${b.AUDIO}])) .spacer {
      flex-grow: 1;
    }

    
    :host(:-webkit-full-screen) {
      
      width: 100% !important;
      height: 100% !important;
    }

    
    ::slotted(:not([slot=media]):not([${b.NO_AUTOHIDE}])) {
      opacity: 1;
      transition: opacity 0.25s;
    }

    
    :host([${b.USER_INACTIVE}]:not([${s.MEDIA_PAUSED}]):not([${s.MEDIA_IS_CASTING}]):not([${b.AUDIO}])) ::slotted(:not([slot=media]):not([${b.NO_AUTOHIDE}])) {
      opacity: 0;
      transition: opacity 1s;
    }

    :host([${b.USER_INACTIVE}]:not([${s.MEDIA_PAUSED}]):not([${s.MEDIA_IS_CASTING}]):not([${b.AUDIO}])) ::slotted([slot=media]) {
      cursor: none;
    }

    ::slotted(media-control-bar)  {
      align-self: stretch;
    }

    
    :host(:not([${b.AUDIO}])[${s.MEDIA_HAS_PLAYED}]) slot[name=poster] {
      display: none;
    }
  </style>

  <slot name="media" part="layer media-layer"></slot>
  <slot name="poster" part="layer poster-layer"></slot>
  <slot name="gestures-chrome" part="layer gesture-layer">
    <media-gesture-receiver slot="gestures-chrome"></media-gesture-receiver>
  </slot>
  <span part="layer vertical-layer">
    <slot name="top-chrome" part="top chrome"></slot>
    <slot name="middle-chrome" part="middle chrome"></slot>
    <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
    
    <slot part="bottom chrome"></slot>
  </span>
`;var xs=Object.values(s),Ps="sm:384 md:576 lg:768 xl:960";function Os(t){(function(e,i){var n;if(!e.isConnected)return;let a=function(l){let d=l.split(/\s+/);return Object.fromEntries(d.map(u=>u.split(":")))}((n=e.getAttribute(b.BREAKPOINTS))!=null?n:Ps),r=function(l,d){return Object.keys(l).filter(u=>d>=l[u])}(a,i),o=!1;if(Object.keys(a).forEach(l=>{r.includes(l)?e.hasAttribute(`breakpoint${l}`)||(e.setAttribute(`breakpoint${l}`,""),o=!0):e.hasAttribute(`breakpoint${l}`)&&(e.removeAttribute(`breakpoint${l}`),o=!0)}),o){let l=new CustomEvent(Le.BREAKPOINTS_CHANGE,{detail:r});e.dispatchEvent(l)}})(t.target,t.contentRect.width)}var Pi=class extends c.HTMLElement{constructor(){super(),ge(this,Ui),ge(this,xi),ge(this,mt),ge(this,Pt),ge(this,je),ge(this,ei,0),ge(this,Ee,void 0),Us(this,"breakpointsComputed",!1),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(wa.content.cloneNode(!0))),new MutationObserver(r=>{let o=this.media;for(let l of r)l.type==="childList"&&(l.removedNodes.forEach(d=>{if(d.slot=="media"&&l.target==this){let u=l.previousSibling&&l.previousSibling.previousElementSibling;if(u&&o){let h=u.slot!=="media";for(;(u=u.previousSibling)!==null;)u.slot=="media"&&(h=!1);h&&this.mediaUnsetCallback(d)}else this.mediaUnsetCallback(d)}}),o&&l.addedNodes.forEach(d=>{d===o&&o!==at(this,Ee)&&this.handleMediaUpdated(o).then(u=>this.mediaSetCallback(u))}))}).observe(this,{childList:!0,subtree:!0});let e=!1;var i,n;n=r=>{e||(setTimeout(()=>{Os(r),e=!1,this.breakpointsComputed||(this.breakpointsComputed=!0,this.dispatchEvent(new CustomEvent(Le.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))},0),e=!0)},Sa(i=this).add(n),Cs.observe(i);let a=this.querySelector(":scope > slot[slot=media]");a&&a.addEventListener("slotchange",()=>{a.assignedElements({flatten:!0}).length?this.media&&this.media!==at(this,Ee)&&this.handleMediaUpdated(this.media).then(r=>this.mediaSetCallback(r)):this.mediaUnsetCallback(at(this,Ee))})}static get observedAttributes(){return[b.AUTOHIDE,b.GESTURES_DISABLED].concat(xs).filter(e=>![s.MEDIA_RENDITION_LIST,s.MEDIA_AUDIO_TRACK_LIST].includes(e))}attributeChangedCallback(e,i,n){e.toLowerCase()==b.AUTOHIDE&&(this.autohide=n)}get media(){let e=this.querySelector(":scope > [slot=media]");return e?.nodeName=="SLOT"&&(e=e.assignedElements({flatten:!0})[0]),e}async handleMediaUpdated(e){return fi(this,Ee,e),e?(e.localName.includes("-")&&await c.customElements.whenDefined(e.localName),e):(i=>(fi(this,Ee,null),console.error('Media Chrome: Media element set with slot="media" does not appear to be compatible.',i),Promise.reject(i)))(e)}connectedCallback(){var e;let i=this.getAttribute(b.AUDIO)!=null?ue.AUDIO_PLAYER():ue.VIDEO_PLAYER();this.setAttribute("role","region"),this.setAttribute("aria-label",i),this.media&&this.media!==at(this,Ee)&&this.handleMediaUpdated(this.media).then(n=>this.mediaSetCallback(n)),this.setAttribute(b.USER_INACTIVE,""),this.addEventListener("pointerdown",this),this.addEventListener("pointermove",this),this.addEventListener("pointerup",this),this.addEventListener("mouseleave",this),this.addEventListener("keyup",this),(e=c.window)==null||e.addEventListener("mouseup",this)}disconnectedCallback(){var e;this.media&&this.mediaUnsetCallback(this.media),(e=c.window)==null||e.removeEventListener("mouseup",this)}mediaSetCallback(e){}mediaUnsetCallback(e){}handleEvent(e){switch(e.type){case"pointerdown":fi(this,ei,e.timeStamp);break;case"pointermove":j(this,Ui,ya).call(this,e);break;case"pointerup":j(this,xi,Da).call(this,e);break;case"mouseleave":j(this,mt,xt).call(this);break;case"mouseup":this.removeAttribute(b.KEYBOARD_CONTROL);break;case"keyup":j(this,je,nt).call(this),this.setAttribute(b.KEYBOARD_CONTROL,"")}}set autohide(e){e=Number(e),this._autohide=isNaN(e)?0:e}get autohide(){return this._autohide===void 0?2:this._autohide}};ei=new WeakMap,Ee=new WeakMap,Ui=new WeakSet,ya=function(t){t.pointerType!=="mouse"&&t.timeStamp-at(this,ei)<250||(j(this,Pt,_i).call(this),clearTimeout(this._inactiveTimeout),[this,this.media].includes(t.target)&&j(this,je,nt).call(this))},xi=new WeakSet,Da=function(t){if(t.pointerType==="touch"){let e=!this.hasAttribute(b.USER_INACTIVE);[this,this.media].includes(t.target)&&e?j(this,mt,xt).call(this):j(this,je,nt).call(this)}else t.composedPath().some(e=>["media-play-button","media-fullscreen-button"].includes(e?.localName))&&j(this,je,nt).call(this)},mt=new WeakSet,xt=function(){if(this.autohide<0||this.hasAttribute(b.USER_INACTIVE))return;this.setAttribute(b.USER_INACTIVE,"");let t=new c.CustomEvent(Le.USER_INACTIVE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(t)},Pt=new WeakSet,_i=function(){if(!this.hasAttribute(b.USER_INACTIVE))return;this.removeAttribute(b.USER_INACTIVE);let t=new c.CustomEvent(Le.USER_INACTIVE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(t)},je=new WeakSet,nt=function(){j(this,Pt,_i).call(this),clearTimeout(this._inactiveTimeout),this.autohide<0||(this._inactiveTimeout=setTimeout(()=>{j(this,mt,xt).call(this)},1e3*this.autohide))};var Oe,Ve,ti,Te,ce,pe,Ra=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},T=(t,e,i)=>(Ra(t,e,"read from private field"),i?i.call(t):e.get(t)),et=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Mt=(t,e,i,n)=>(Ra(t,e,"write to private field"),n?n.call(t,i):e.set(t,i),i),ii=class{constructor(e,i,{defaultValue:n}={defaultValue:void 0}){et(this,ce),et(this,Oe,void 0),et(this,Ve,void 0),et(this,ti,void 0),et(this,Te,new Set),Mt(this,Oe,e),Mt(this,Ve,i),Mt(this,ti,new Set(n))}[Symbol.iterator](){return T(this,ce,pe).values()}get length(){return T(this,ce,pe).size}get value(){var e;return(e=[...T(this,ce,pe)].join(" "))!=null?e:""}set value(e){var i;e!==this.value&&(Mt(this,Te,new Set),this.add(...(i=e?.split(" "))!=null?i:[]))}toString(){return this.value}item(e){return[...T(this,ce,pe)][e]}values(){return T(this,ce,pe).values()}forEach(e){T(this,ce,pe).forEach(e)}add(...e){var i,n;e.forEach(a=>T(this,Te).add(a)),(this.value!==""||(i=T(this,Oe))!=null&&i.hasAttribute(`${T(this,Ve)}`))&&((n=T(this,Oe))==null||n.setAttribute(`${T(this,Ve)}`,`${this.value}`))}remove(...e){var i;e.forEach(n=>T(this,Te).delete(n)),(i=T(this,Oe))==null||i.setAttribute(`${T(this,Ve)}`,`${this.value}`)}contains(e){return T(this,ce,pe).has(e)}toggle(e,i){return i!==void 0?i?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,i){return this.remove(e),this.add(i),e===i}};Oe=new WeakMap,Ve=new WeakMap,ti=new WeakMap,Te=new WeakMap,ce=new WeakSet,pe=function(){return T(this,Te).size?T(this,Te):T(this,ti)};var Ca=(t="")=>{let[e,i,n]=t.split(":");return e=e==="cc"?"captions":"subtitles",{kind:e,language:i,label:n?decodeURIComponent(n):void 0}},Na=(t="",e={})=>((i="")=>i.split(/\s+/))(t).map(i=>{let n=Ca(i);return{...e,...n}}),Ua=t=>Array.isArray(t)?t.map(e=>typeof e=="string"?Ca(e):e):typeof t=="string"?Na(t):[t],Vs=({kind:t,label:e,language:i}={kind:"subtitles"})=>e?`${t==="captions"?"cc":"sb"}:${i}:${encodeURIComponent(e)}`:i,Oi=(t=[])=>Array.prototype.map.call(t,Vs).join(" "),xa=t=>{let e=Object.entries(t).map(([i,n])=>((a,r)=>o=>o[a]===r)(i,n));return i=>e.every(n=>n(i))},Tt=(t,e=[],i=[])=>{let n=Ua(i).map(xa);Array.from(e).filter(a=>n.some(r=>r(a))).forEach(a=>{a.mode=t})},fn=(t,e=()=>!0)=>{if(!t?.textTracks)return[];let i=typeof e=="function"?e:xa(e);return Array.from(t.textTracks).filter(i)},I={enter:"requestFullscreen",exit:"exitFullscreen",rootEvents:["fullscreenchange"],mediaEvents:[],element:"fullscreenElement",error:"fullscreenerror",enabled:"fullscreenEnabled"},Mi;p.fullscreenElement===void 0&&(I.enter="webkitRequestFullScreen",I.exit=p.webkitExitFullscreen!=null?"webkitExitFullscreen":"webkitCancelFullScreen",I.rootEvents=["webkitfullscreenchange"],I.mediaEvents=["webkitbeginfullscreen","webkitendfullscreen"],I.element="webkitFullscreenElement",I.error="webkitfullscreenerror",I.enabled="webkitFullscreenEnabled");var Mn=()=>{var t,e;return Mi||(Mi=(e=(t=p)==null?void 0:t.createElement)==null?void 0:e.call(t,"video"),Mi)},Pa=((t=Mn())=>{let e=p[I.enabled];return!e&&t&&(e="webkitSupportsFullscreen"in t),e})(),Bs=((t=Mn())=>typeof t?.requestPictureInPicture=="function")(),Ws=!!c.WebKitPlaybackTargetAvailabilityEvent,$s=!!c.chrome,ni,Hs=(async(t=Mn())=>{if(!t)return!1;let e=t.volume;return t.volume=e/2+.1,await pa(0),t.volume!==e})().then(t=>(ni=t,ni)),Fs=Object.values(Q),Ot=t=>fn(t.media,e=>[ze.SUBTITLES,ze.CAPTIONS].includes(e.kind)).sort((e,i)=>e.kind>=i.kind?1:-1),Oa=t=>fn(t.media,e=>e.mode===Ye.SHOWING&&[ze.SUBTITLES,ze.CAPTIONS].includes(e.kind)),B={MEDIA_PAUSED:{get:function(t){let{media:e}=t;return!e||e.paused},mediaEvents:["play","playing","pause","emptied"]},MEDIA_HAS_PLAYED:{get:function(t){let{media:e}=t;return!!e&&!e.paused},mediaEvents:["playing","emptied"]},MEDIA_ENDED:{get:function(t){let{media:e}=t;return!!e&&e.ended},mediaEvents:["seeked","ended","emptied"]},MEDIA_PLAYBACK_RATE:{get:function(t){let{media:e}=t;return e&&e.playbackRate!==void 0?e.playbackRate:1},mediaEvents:["ratechange","loadstart"]},MEDIA_MUTED:{get:function(t){let{media:e}=t;return!(!e||e.muted===void 0)&&e.muted},mediaEvents:["volumechange"]},MEDIA_VOLUME:{get:function(t){let{media:e}=t;return e&&e.volume!==void 0?Number(e.volume):1},mediaEvents:["volumechange"]},MEDIA_VOLUME_LEVEL:{get:function(t){let{media:e}=t,i="high";if(!e||e.volume===void 0)return i;let{muted:n,volume:a}=e;return a===0||n?i="off":a<.5?i="low":a<.75&&(i="medium"),i},mediaEvents:["volumechange"]},MEDIA_CURRENT_TIME:{get:function(t){let{media:e}=t;return e&&e.currentTime!==void 0?e.currentTime:0},mediaEvents:["playing","pause","timeupdate","loadedmetadata"]},MEDIA_DURATION:{get:function(t){let{media:e}=t;return!t.hasAttribute("defaultduration")||e&&e.duration&&!Number.isNaN(e.duration)&&Number.isFinite(e.duration)?e&&Number.isFinite(e.duration)?e.duration:Number.NaN:+t.getAttribute("defaultduration")},mediaEvents:["durationchange","loadedmetadata","emptied"]},MEDIA_SEEKABLE:{get:function(t){var e;let{media:i}=t;if(!((e=i?.seekable)!=null&&e.length))return;let n=i.seekable.start(0),a=i.seekable.end(i.seekable.length-1);return n||a?[Number(n.toFixed(3)),Number(a.toFixed(3))]:void 0},mediaEvents:["loadedmetadata","emptied","progress"]},MEDIA_LOADING:{get:function(t){var e;return((e=t.media)==null?void 0:e.readyState)<3},mediaEvents:["waiting","playing","emptied"]},MEDIA_BUFFERED:{get:function(t){var e,i,n;let a=(e=t.media)==null?void 0:e.buffered;return Array.from((n=(i=t.media)==null?void 0:i.buffered)!=null?n:[]).map((r,o)=>[Number(a.start(o)).toFixed(3),Number(a.end(o)).toFixed(3)])},mediaEvents:["progress","emptied"]},MEDIA_STREAM_TYPE:{get:function(t){let{media:e}=t;if(!e)return;let{streamType:i}=e;if(Fs.includes(i)){if(i===Q.UNKNOWN){let a=t.getAttribute("defaultstreamtype");return[Q.LIVE,Q.ON_DEMAND].includes(a)?a:void 0}return i}let n=e.duration;if(n===1/0)return Q.LIVE;if(Number.isFinite(n))return Q.ON_DEMAND;{let a=t.getAttribute("defaultstreamtype");if([Q.LIVE,Q.ON_DEMAND].includes(a))return a}},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},MEDIA_TARGET_LIVE_WINDOW:{get:function(t){let{media:e}=t;if(!e)return Number.NaN;let{targetLiveWindow:i}=e,n=B.MEDIA_STREAM_TYPE.get(t);return i!=null&&!Number.isNaN(i)||n!==Q.LIVE?i:0},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},MEDIA_TIME_IS_LIVE:{get:function(t){let{media:e}=t;if(!e)return!1;if(typeof e.liveEdgeStart=="number")return!Number.isNaN(e.liveEdgeStart)&&e.currentTime>=e.liveEdgeStart;if(B.MEDIA_STREAM_TYPE.get(t)!=="live")return!1;let i=e.seekable;if(!i)return!0;if(!i.length)return!1;let n=t.hasAttribute("liveedgeoffset")?Number(t.getAttribute("liveedgeoffset")):10,a=i.end(i.length-1)-n;return e.currentTime>=a},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},MEDIA_IS_FULLSCREEN:{get:function(t,e){var i,n;let a=t.media;if(a&&p[I.element]===void 0&&"webkitDisplayingFullscreen"in a)return a.webkitDisplayingFullscreen&&a.webkitPresentationMode==="fullscreen";let r;return e?r=p[I.element]?e.target:null:r=(n=(i=function(o){var l;let d=(l=o?.getRootNode)==null?void 0:l.call(o);return d instanceof ShadowRoot||d instanceof Document?d:null}(t))==null?void 0:i.fullscreenElement)!=null?n:p[I.element],ht(t.fullscreenElement,r)},rootEvents:I.rootEvents,mediaEvents:I.mediaEvents},MEDIA_IS_PIP:{get:function(t,e){var i;let n=t.media;if(!n)return!1;if(e)return e.type=="enterpictureinpicture";{let a=(i=t.getRootNode().pictureInPictureElement)!=null?i:p.pictureInPictureElement;return ht(n,a)}},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},MEDIA_IS_CASTING:{get:function(t,e){var i;let{media:n}=t;if(!n)return!1;let a=(i=c.CastableVideoElement)==null?void 0:i.castElement,r=ht(n,a);return e?.type==="castchange"&&e?.detail==="CONNECTING"&&(r="connecting"),r},mediaEvents:["entercast","leavecast","castchange"]},MEDIA_AIRPLAY_UNAVAILABLE:{get:function(t,e){return Ws?e&&e.availability!=="available"&&e.availability==="not-available"?V.UNAVAILABLE:void 0:V.UNSUPPORTED},mediaEvents:["webkitplaybacktargetavailabilitychanged"]},MEDIA_CAST_UNAVAILABLE:{get:function(){var t;let e=(t=c.CastableVideoElement)==null?void 0:t.castState;return $s&&e?e.includes("CONNECT")?void 0:V.UNAVAILABLE:V.UNSUPPORTED},mediaEvents:["castchange"]},MEDIA_FULLSCREEN_UNAVAILABLE:{get:function(){return Pa?void 0:V.UNAVAILABLE}},MEDIA_PIP_UNAVAILABLE:{get:function(){return Bs?void 0:V.UNSUPPORTED}},MEDIA_RENDITION_UNAVAILABLE:{get:function(t){var e;let{media:i}=t;return i?.videoRenditions?(e=i.videoRenditions)!=null&&e.length?void 0:V.UNAVAILABLE:V.UNSUPPORTED},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},MEDIA_AUDIO_TRACK_UNAVAILABLE:{get:function(t){var e,i;let{media:n}=t;return n?.audioTracks?((i=(e=n.audioTracks)==null?void 0:e.length)!=null?i:0)<=1?V.UNAVAILABLE:void 0:V.UNSUPPORTED},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},MEDIA_VOLUME_UNAVAILABLE:{get:function(t){if(ni!==void 0&&!ni)return V.UNSUPPORTED;let{media:e}=t;return e&&e.volume===void 0?V.UNAVAILABLE:void 0},mediaEvents:["loadstart"]},MEDIA_SUBTITLES_LIST:{get:function(t){return Ot(t).map(({kind:e,label:i,language:n})=>({kind:e,label:i,language:n}))},mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},MEDIA_SUBTITLES_SHOWING:{get:function(t){return!t.hasAttribute("defaultsubtitles")||t.hasAttribute(s.MEDIA_HAS_PLAYED)||t.hasAttribute(s.MEDIA_SUBTITLES_SHOWING)||ai.MEDIA_TOGGLE_SUBTITLES_REQUEST(void 0,void 0,t),Oa(t).map(({kind:e,label:i,language:n})=>({kind:e,label:i,language:n}))},mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"]},MEDIA_RENDITION_LIST:{get:function(t){var e;let{media:i}=t;return[...(e=i?.videoRenditions)!=null?e:[]]},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},MEDIA_RENDITION_SELECTED:{get:function(t){var e,i,n;let{media:a}=t;return(n=(i=a?.videoRenditions)==null?void 0:i[(e=a.videoRenditions)==null?void 0:e.selectedIndex])==null?void 0:n.id},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},MEDIA_AUDIO_TRACK_LIST:{get:function(t){var e;let{media:i}=t;return[...(e=i?.audioTracks)!=null?e:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},MEDIA_AUDIO_TRACK_ENABLED:{get:function(t){var e,i;let{media:n}=t;return(i=[...(e=n?.audioTracks)!=null?e:[]].find(a=>a.enabled))==null?void 0:i.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]}},ai={MEDIA_PLAY_REQUEST:(t,e,i)=>{var n;let a=B.MEDIA_STREAM_TYPE.get(i),r=i.getAttribute("noautoseektolive")===null;a==Q.LIVE&&r&&ai.MEDIA_SEEK_TO_LIVE_REQUEST(t),(n=t.play())==null||n.catch(()=>{})},MEDIA_PAUSE_REQUEST:t=>t.pause(),MEDIA_MUTE_REQUEST:t=>t.muted=!0,MEDIA_UNMUTE_REQUEST:t=>{t.muted=!1,t.volume===0&&(t.volume=.25)},MEDIA_VOLUME_REQUEST:(t,e,i)=>{let n=e.detail;if(t.volume=n,n>0&&t.muted&&(t.muted=!1),!i.hasAttribute("novolumepref"))try{c.localStorage.setItem("media-chrome-pref-volume",n.toString())}catch{}},MEDIA_ENTER_FULLSCREEN_REQUEST:(t,e,i)=>{Pa?(p.pictureInPictureElement&&p.exitPictureInPicture(),i[I.enter]?i.fullscreenElement[I.enter]():t.webkitEnterFullscreen?t.webkitEnterFullscreen():t.requestFullscreen?t.requestFullscreen():console.warn("MediaChrome: Fullscreen not supported")):console.warn("Fullscreen support is unavailable; not entering fullscreen")},MEDIA_EXIT_FULLSCREEN_REQUEST:()=>{p[I.exit]()},MEDIA_ENTER_PIP_REQUEST:t=>{if(!p.pictureInPictureEnabled)return void console.warn("MediaChrome: Picture-in-picture is not enabled");if(!t.requestPictureInPicture)return void console.warn("MediaChrome: The current media does not support picture-in-picture");p[I.element]&&p[I.exit]();let e=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};t.requestPictureInPicture().catch(i=>{if(i.code!==11||t.readyState!==0||t.preload!=="none")throw i;{let n=()=>{t.removeEventListener("loadedmetadata",a),t.preload="none"},a=()=>{t.requestPictureInPicture().catch(e),n()};t.addEventListener("loadedmetadata",a),t.preload="metadata",setTimeout(()=>{t.readyState===0&&e(),n()},1e3)}})},MEDIA_EXIT_PIP_REQUEST:()=>{p.pictureInPictureElement&&p.exitPictureInPicture()},MEDIA_ENTER_CAST_REQUEST:t=>{var e;(e=c.CastableVideoElement)!=null&&e.castEnabled&&(p[I.element]&&p[I.exit](),t.requestCast())},MEDIA_EXIT_CAST_REQUEST:async()=>{var t;(t=c.CastableVideoElement)!=null&&t.castElement&&c.CastableVideoElement.exitCast()},MEDIA_SEEK_REQUEST:(t,e)=>{let i=e.detail;(t.readyState>0||t.readyState===void 0)&&(t.currentTime=i)},MEDIA_PLAYBACK_RATE_REQUEST:(t,e)=>{t.playbackRate=e.detail},MEDIA_PREVIEW_REQUEST:(t,e,i)=>{var n;if(!t)return;let a=e.detail;a===null&&i.propagateMediaState(s.MEDIA_PREVIEW_TIME,void 0),i.propagateMediaState(s.MEDIA_PREVIEW_TIME,a);let[r]=fn(t,{kind:ze.METADATA,label:"thumbnails"});if(!r||!r.cues)return;if(a===null)return i.propagateMediaState(s.MEDIA_PREVIEW_IMAGE,void 0),void i.propagateMediaState(s.MEDIA_PREVIEW_COORDS,void 0);let o=Array.prototype.find.call(r.cues,h=>h.startTime>=a);if(!o)return;let l=/'^(?:[a-z]+:)?\/\//i.test(o.text)||(n=t.querySelector('track[label="thumbnails"]'))==null?void 0:n.src,d=new URL(o.text,l),u=new URLSearchParams(d.hash).get("#xywh");i.propagateMediaState(s.MEDIA_PREVIEW_IMAGE,d.href),i.propagateMediaState(s.MEDIA_PREVIEW_COORDS,u.split(","))},MEDIA_SHOW_SUBTITLES_REQUEST:(t,e,i)=>{var n;let a=Ot(i),{detail:r=[]}=e,o=Ua(r),l=(n=o[0])==null?void 0:n.language;l&&!i?.hasAttribute("nosubtitleslangpref")&&c.localStorage.setItem("media-chrome-pref-subtitles-lang",l),Tt(Ye.SHOWING,a,o)},MEDIA_DISABLE_SUBTITLES_REQUEST:(t,e,i)=>{let n=Ot(i),{detail:a=[]}=e;Tt(Ye.DISABLED,n,a)},MEDIA_TOGGLE_SUBTITLES_REQUEST:(t,e,i)=>{let{detail:n}=e??{},a=Ot(i),r=Oa(i),o=!!r.length;if(!(!a.length||o&&n||!o&&n===!1))if(o)Tt(Ye.DISABLED,a,r);else{let l=a[0];if(!i?.hasAttribute("nosubtitleslangpref")){let v=c.localStorage.getItem("media-chrome-pref-subtitles-lang"),k=v?[v,...c.navigator.languages]:c.navigator.languages,D=a.filter(z=>k.some($=>z.language.toLowerCase().startsWith($.split("-")[0]))).sort((z,$)=>k.findIndex(H=>z.language.toLowerCase().startsWith(H.split("-")[0]))-k.findIndex(H=>$.language.toLowerCase().startsWith(H.split("-")[0])));D[0]&&(l=D[0])}let{language:d,label:u,kind:h}=l;Tt(Ye.SHOWING,a,[{language:d,label:u,kind:h}])}},MEDIA_AIRPLAY_REQUEST:t=>{t&&(t.webkitShowPlaybackTargetPicker&&c.WebKitPlaybackTargetAvailabilityEvent?t.webkitShowPlaybackTargetPicker():console.warn("received a request to select AirPlay but AirPlay is not supported in this environment"))},MEDIA_SEEK_TO_LIVE_REQUEST:t=>{let e=t.seekable;e?e.length?t.currentTime=e.end(e.length-1):console.warn("MediaController: Media is unable to seek to live."):console.warn("MediaController: Media element does not support seeking to live.")},MEDIA_RENDITION_REQUEST:(t,e)=>{if(!t?.videoRenditions)return void console.warn("MediaController: Rendition selection not supported by this media.");let i=e.detail,n=[...t.videoRenditions].findIndex(a=>a.id==i);t.videoRenditions.selectedIndex!=n&&(t.videoRenditions.selectedIndex=n)},MEDIA_AUDIO_TRACK_REQUEST:(t,e)=>{if(!t?.audioTracks)return void console.warn("MediaController: Audio track selection not supported by this media.");let i=e.detail;for(let n of t.audioTracks)n.enabled=i==n.id}},ve,st,Be,qe,rt,Vt,Vi,Tn=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},le=(t,e,i)=>(Tn(t,e,"read from private field"),i?i.call(t):e.get(t)),tt=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Ti=(t,e,i,n)=>(Tn(t,e,"write to private field"),n?n.call(t,i):e.set(t,i),i),Ze=(t,e,i)=>(Tn(t,e,"access private method"),i),$n=["ArrowLeft","ArrowRight","Enter"," ","f","m","k","c"],Hn="defaultsubtitles",Fn="defaultstreamtype",Gs="defaultduration",ki="fullscreenelement",kt="hotkeys",Qs="keysused",Gn="nohotkeys",Bi=class extends Pi{constructor(){super(),tt(this,qe),tt(this,Vt),tt(this,ve,new ii(this,kt)),tt(this,st,void 0),tt(this,Be,void 0),B.MEDIA_VOLUME_UNAVAILABLE.get(this)===void 0&&Hs.then(()=>{this.propagateMediaState(s.MEDIA_VOLUME_UNAVAILABLE,B.MEDIA_VOLUME_UNAVAILABLE.get(this))}),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,this.associateElement(this),Object.keys(ai).forEach(e=>{let i=`_handle${Ai(e,!0)}`;this[i]=n=>{n.stopPropagation(),this.media?ai[e](this.media,n,this):console.warn("MediaController: No media available.")},this.addEventListener(E[e],this[i])}),this._mediaStatePropagators={},Object.keys(B).forEach(e=>{this._mediaStatePropagators[e]=i=>{this.propagateMediaState(Me[e],B[e].get(this,i))}})}static get observedAttributes(){return super.observedAttributes.concat(Gn,kt,Fn,Hn,Gs)}get fullscreenElement(){var e;return(e=le(this,st))!=null?e:this}set fullscreenElement(e){this.hasAttribute(ki)&&this.removeAttribute(ki),Ti(this,st,e)}attributeChangedCallback(e,i,n){var a;if(super.attributeChangedCallback(e,i,n),e===Gn)n!==i&&n===""?(this.hasAttribute(kt)&&console.warn("Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):n!==i&&n===null&&this.enableHotkeys();else if(e===kt)le(this,ve).value=n;else if(e===Hn&&n!==i&&n==="")this.dispatchEvent(new c.CustomEvent(E.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:!0}));else if(e===Fn)this.propagateMediaState(Me.MEDIA_STREAM_TYPE);else if(e===ki){let r=n?(a=le(this,Be))==null?void 0:a.getElementById(n):void 0;Ti(this,st,r)}}connectedCallback(){super.connectedCallback(),Ti(this,Be,this.getRootNode()),this.enableHotkeys()}disconnectedCallback(){super.disconnectedCallback(),this.disableHotkeys(),this.dispatchEvent(new c.CustomEvent(E.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:!1}))}mediaSetCallback(e){if(super.mediaSetCallback(e),e.hasAttribute("tabindex")||(e.tabIndex=-1),Object.keys(B).forEach(i=>{let{mediaEvents:n,rootEvents:a,textTracksEvents:r,videoRenditionsEvents:o,audioTracksEvents:l}=B[i],d=this._mediaStatePropagators[i];n?.forEach(u=>{e.addEventListener(u,d),d()}),a?.forEach(u=>{var h;(h=le(this,Be))==null||h.addEventListener(u,d),d()}),r?.forEach(u=>{var h;(h=e.textTracks)==null||h.addEventListener(u,d),d()}),o?.forEach(u=>{var h;(h=e.videoRenditions)==null||h.addEventListener(u,d),d()}),l?.forEach(u=>{var h;(h=e.audioTracks)==null||h.addEventListener(u,d),d()})}),!this.hasAttribute("novolumepref"))try{let i=c.localStorage.getItem("media-chrome-pref-volume");i!==null&&(e.volume=i)}catch(i){console.debug("Error getting volume pref",i)}}mediaUnsetCallback(e){super.mediaUnsetCallback(e),Object.keys(B).forEach(i=>{let{mediaEvents:n,rootEvents:a,textTracksEvents:r,videoRenditionsEvents:o,audioTracksEvents:l}=B[i],d=this._mediaStatePropagators[i];n?.forEach(u=>{e.removeEventListener(u,d)}),a?.forEach(u=>{var h;(h=le(this,Be))==null||h.removeEventListener(u,d)}),r?.forEach(u=>{var h;(h=e.textTracks)==null||h.removeEventListener(u,d)}),o?.forEach(u=>{var h;(h=e.videoRenditions)==null||h.removeEventListener(u,d),d()}),l?.forEach(u=>{var h;(h=e.audioTracks)==null||h.removeEventListener(u,d),d()})}),this.propagateMediaState(Me.MEDIA_PAUSED,!0)}propagateMediaState(e,i){let n=jn(this.mediaStateReceivers,e);if(Yn(this.mediaStateReceivers,e,i),n===jn(this.mediaStateReceivers,e))return;let a=e.toLowerCase(),r=new c.CustomEvent(Ea[a],{composed:!0,bubbles:!0,detail:i});this.dispatchEvent(r)}associateElement(e){if(!e)return;let{associatedElementSubscriptions:i}=this;if(i.has(e))return;let n=this.registerMediaStateReceiver.bind(this),a=this.unregisterMediaStateReceiver.bind(this),r=js(e,n,a);Object.keys(E).forEach(o=>{e.addEventListener(E[o],this[`_handle${Ai(o,!0)}`])}),i.set(e,r)}unassociateElement(e){if(!e)return;let{associatedElementSubscriptions:i}=this;i.has(e)&&(i.get(e)(),i.delete(e),Object.keys(E).forEach(n=>{e.removeEventListener(E[n],this[`_handle${Ai(n,!0)}`])}))}registerMediaStateReceiver(e){if(!e)return;let i=this.mediaStateReceivers;i.indexOf(e)>-1||(i.push(e),Object.keys(B).forEach(n=>{let a=B[n];Yn([e],Me[n],a.get(this))}))}unregisterMediaStateReceiver(e){let i=this.mediaStateReceivers,n=i.indexOf(e);n<0||i.splice(n,1)}enableHotkeys(){this.addEventListener("keydown",Ze(this,Vt,Vi))}disableHotkeys(){this.removeEventListener("keydown",Ze(this,Vt,Vi)),this.removeEventListener("keyup",Ze(this,qe,rt))}get hotkeys(){return le(this,ve)}keyboardShortcutHandler(e){var i,n,a,r;if(((r=(a=(i=e.target.getAttribute(Qs))==null?void 0:i.split(" "))!=null?a:(n=e.target)==null?void 0:n.keysUsed)!=null?r:[]).map(v=>v==="Space"?" ":v).filter(Boolean).includes(e.key))return;let o,l,d,u,h;if(!(le(this,ve).contains(`no${e.key.toLowerCase()}`)||e.key===" "&&le(this,ve).contains("nospace")))switch(e.key){case" ":case"k":o=this.getAttribute(s.MEDIA_PAUSED)!=null?E.MEDIA_PLAY_REQUEST:E.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new c.CustomEvent(o,{composed:!0,bubbles:!0}));break;case"m":o=this.getAttribute(s.MEDIA_VOLUME_LEVEL)==="off"?E.MEDIA_UNMUTE_REQUEST:E.MEDIA_MUTE_REQUEST,this.dispatchEvent(new c.CustomEvent(o,{composed:!0,bubbles:!0}));break;case"f":o=this.getAttribute(s.MEDIA_IS_FULLSCREEN)!=null?E.MEDIA_EXIT_FULLSCREEN_REQUEST:E.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new c.CustomEvent(o,{composed:!0,bubbles:!0}));break;case"c":this.dispatchEvent(new c.CustomEvent(E.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case"ArrowLeft":l=this.getAttribute(s.MEDIA_CURRENT_TIME),d=l&&!Number.isNaN(+l)?+l:0,u=Math.max(d-10,0),h=new c.CustomEvent(E.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:u}),this.dispatchEvent(h);break;case"ArrowRight":l=this.getAttribute(s.MEDIA_CURRENT_TIME),d=l&&!Number.isNaN(+l)?+l:0,u=Math.max(d+10,0),h=new c.CustomEvent(E.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:u}),this.dispatchEvent(h)}}};ve=new WeakMap,st=new WeakMap,Be=new WeakMap,qe=new WeakSet,rt=function(t){let{key:e}=t;$n.includes(e)?this.keyboardShortcutHandler(t):this.removeEventListener("keyup",Ze(this,qe,rt))},Vt=new WeakSet,Vi=function(t){let{metaKey:e,altKey:i,key:n}=t;e||i||!$n.includes(n)?this.removeEventListener("keyup",Ze(this,qe,rt)):([" ","ArrowLeft","ArrowRight"].includes(n)&&!(le(this,ve).contains(`no${n.toLowerCase()}`)||n===" "&&le(this,ve).contains("nospace"))&&t.preventDefault(),this.addEventListener("keyup",Ze(this,qe,rt),{once:!0}))};var Ks=Object.values(s),Ys=Object.values(Me),kn=t=>{var e,i,n,a;let{observedAttributes:r}=t.constructor;!r&&((e=t.nodeName)!=null&&e.includes("-"))&&(c.customElements.upgrade(t),{observedAttributes:r}=t.constructor);let o=(a=(n=(i=t?.getAttribute)==null?void 0:i.call(t,g.MEDIA_CHROME_ATTRIBUTES))==null?void 0:n.split)==null?void 0:a.call(n,/\s+/);return Array.isArray(r||o)?(r||o).filter(l=>Ks.includes(l)):[]},Wi=t=>{return!((i=(e=t).nodeName)!=null&&i.includes("-"))||!c.customElements.get((n=e.nodeName)==null?void 0:n.toLowerCase())||e instanceof c.customElements.get(e.nodeName.toLowerCase())||c.customElements.upgrade(e),Ys.some(a=>a in e)||!!kn(t).length;var e,i,n},Qn=t=>{var e;return(e=t?.join)==null?void 0:e.call(t,":")},Kn={[s.MEDIA_SUBTITLES_LIST]:Oi,[s.MEDIA_SUBTITLES_SHOWING]:Oi,[s.MEDIA_SEEKABLE]:Qn,[s.MEDIA_BUFFERED]:t=>t?.map(Qn).join(" "),[s.MEDIA_PREVIEW_COORDS]:t=>t?.join(" "),[s.MEDIA_RENDITION_LIST]:function(t){return t?.map(ys).join(" ")},[s.MEDIA_AUDIO_TRACK_LIST]:function(t){return t?.map(Ds).join(" ")}},Ie=(t,e)=>{if((n=(i=t).closest)!=null&&n.call(i,'*[slot="media"]'))return;var i,n;let a=(o,l)=>{var d,u;Wi(o)&&l(o);let{children:h=[]}=o??{};[...h,...(u=(d=o?.shadowRoot)==null?void 0:d.children)!=null?u:[]].forEach(v=>Ie(v,l))},r=t?.nodeName.toLowerCase();!r.includes("-")||Wi(t)?a(t,e):c.customElements.whenDefined(r).then(()=>{a(t,e)})},Yn=(t,e,i)=>{t.forEach(n=>{if(e in n)return void(n[e]=i);let a=kn(n),r=e.toLowerCase();a.includes(r)&&(async(o,l,d)=>{var u,h;if(o.isConnected||await pa(0),typeof d=="boolean"||d==null)return S(o,l,d);if(typeof d=="number")return R(o,l,d);if(typeof d=="string")return Z(o,l,d);if(Array.isArray(d)&&!d.length)return o.removeAttribute(l);let v=(h=(u=Kn[l])==null?void 0:u.call(Kn,d))!=null?h:d;o.setAttribute(l,v)})(n,r,i)})},jn=(t,e)=>{for(let i of t){if(e in i)return i[e];let n=kn(i),a=e.toLowerCase();if(n.includes(a))return i.getAttribute(a)}},js=(t,e,i)=>{Ie(t,e);let n=d=>{var u;let h=(u=d?.composedPath()[0])!=null?u:d.target;e(h)},a=d=>{var u;let h=(u=d?.composedPath()[0])!=null?u:d.target;i(h)};t.addEventListener(E.REGISTER_MEDIA_STATE_RECEIVER,n),t.addEventListener(E.UNREGISTER_MEDIA_STATE_RECEIVER,a);let r=[],o=d=>{let u=d.target;u.name!=="media"&&(r.forEach(h=>Ie(h,i)),r=[...u.assignedElements({flatten:!0})],r.forEach(h=>Ie(h,e)))};t.addEventListener("slotchange",o);let l=new MutationObserver(d=>{d.forEach(u=>{let{addedNodes:h=[],removedNodes:v=[],type:k,target:D,attributeName:z}=u;k==="childList"?(Array.prototype.forEach.call(h,$=>Ie($,e)),Array.prototype.forEach.call(v,$=>Ie($,i))):k==="attributes"&&z===g.MEDIA_CHROME_ATTRIBUTES&&(Wi(D)?e(D):i(D))})});return l.observe(t,{childList:!0,attributes:!0,subtree:!0}),()=>{Ie(t,i),t.removeEventListener("slotchange",o),l.disconnect(),t.removeEventListener(E.REGISTER_MEDIA_STATE_RECEIVER,n),t.removeEventListener(E.UNREGISTER_MEDIA_STATE_RECEIVER,a)}};c.customElements.get("media-controller")||c.customElements.define("media-controller",Bi);var ie,Bt,si,ri,Wt,$t,Ht,$i,Ft,Hi,oi,Fi,Gi,Va,Qi,Ba,Ki,Wa,Yi,$a;var Ln=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},K=(t,e,i)=>(Ln(t,e,"read from private field"),i?i.call(t):e.get(t)),P=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},_e=(t,e,i,n)=>(Ln(t,e,"write to private field"),n?n.call(t,i):e.set(t,i),i),ne=(t,e,i)=>(Ln(t,e,"access private method"),i),Ha=p.createElement("template");Ha.innerHTML=`
  <style>
    :host {
      --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
      --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

      box-shadow: var(--_focus-visible-box-shadow, none);
      background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
      height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
      display: inline-flex;
      align-items: center;
      
      vertical-align: middle;
      box-sizing: border-box;
      position: relative;
      width: 100px;
      transition: background .15s linear;
      cursor: pointer;
      pointer-events: auto;
      touch-action: none; 
      z-index: 1; 
    }

    
    input[type=range]:focus {
      outline: 0;
    }
    input[type=range]:focus::-webkit-slider-runnable-track {
      outline: 0;
    }

    :host(:hover) {
      background: var(--media-control-hover-background, rgb(50 50 70 / .7));
    }

    #leftgap {
      padding-left: var(--media-range-padding-left, var(--_media-range-padding));
    }

    #rightgap {
      padding-right: var(--media-range-padding-right, var(--_media-range-padding));
    }

    #startpoint,
    #endpoint {
      position: absolute;
    }

    #endpoint {
      right: 0;
    }

    #container {
      
      width: var(--media-range-track-width, 100%);
      transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));
      position: relative;
      height: 100%;
      display: flex;
      align-items: center;
      min-width: 40px;
    }

    #range {
      
      display: var(--media-time-range-hover-display, block);
      bottom: var(--media-time-range-hover-bottom, -7px);
      height: var(--media-time-range-hover-height, max(100% + 7px, 25px));
      width: 100%;
      position: absolute;
      cursor: pointer;

      -webkit-appearance: none; 
      -webkit-tap-highlight-color: transparent;
      background: transparent; 
      margin: 0;
      z-index: 1;
    }

    @media (hover: hover) {
      #range {
        bottom: var(--media-time-range-hover-bottom, -5px);
        height: var(--media-time-range-hover-height, max(100% + 5px, 20px));
      }
    }

    
    
    #range::-webkit-slider-thumb {
      -webkit-appearance: none;
      background: transparent;
      width: .1px;
      height: .1px;
    }

    
    #range::-moz-range-thumb {
      background: transparent;
      border: transparent;
      width: .1px;
      height: .1px;
    }

    #appearance {
      height: var(--media-range-track-height, 4px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      position: absolute;
    }

    #background,
    #track {
      border-radius: var(--media-range-track-border-radius, 1px);
      position: absolute;
      width: 100%;
      height: 100%;
    }

    #background {
      background: var(--media-range-track-background, rgb(255 255 255 / .2));
      backdrop-filter: var(--media-range-track-background-backdrop-filter);
      -webkit-backdrop-filter: var(--media-range-track-background-backdrop-filter);
    }

    #track {
      border: var(--media-range-track-border, none);
      outline: var(--media-range-track-outline);
      outline-offset: var(--media-range-track-outline-offset);
      backdrop-filter: var(--media-range-track-backdrop-filter);
      -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);
      box-shadow: var(--media-range-track-box-shadow, none);
      overflow: hidden;
    }

    #progress {
      background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));
      border-radius: var(--media-range-track-border-radius, 1px);
      transition: var(--media-range-track-transition);
      position: absolute;
      height: 100%;
    }

    #highlight {
      border-radius: var(--media-range-track-border-radius, 1px);
      position: absolute;
      height: 100%;
    }

    #pointer {
      background: var(--media-range-track-pointer-background);
      border-right: var(--media-range-track-pointer-border-right);
      border-radius: var(--media-range-track-border-radius, 1px);
      transition: visibility .25s, opacity .25s;
      visibility: hidden;
      opacity: 0;
      position: absolute;
      height: 100%;
    }

    :host(:hover) #pointer {
      transition: visibility .5s, opacity .5s;
      visibility: visible;
      opacity: 1;
    }

    #thumb {
      width: var(--media-range-thumb-width, 10px);
      height: var(--media-range-thumb-height, 10px);
      margin-left: calc(var(--media-range-thumb-width, 10px) / -2);
      border: var(--media-range-thumb-border, none);
      border-radius: var(--media-range-thumb-border-radius, 10px);
      background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
      box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
      transition: var(--media-range-thumb-transition);
      transform: var(--media-range-thumb-transform, none);
      opacity: var(--media-range-thumb-opacity, 1);
      position: absolute;
      left: 0;
      cursor: pointer;
    }

    :host([disabled]) #thumb {
      background-color: #777;
    }
  </style>
  <div id="leftgap"></div>
  <div id="container">
    <div id="startpoint"></div>
    <div id="endpoint"></div>
    <div id="appearance">
      <div id="background"></div>
      <div id="track">
        <div id="highlight"></div>
        <div id="pointer"></div>
        <div id="progress"></div>
      </div>
      <div id="thumb"></div>
    </div>
    <input id="range" type="range" min="0" max="1" step="any" value="0">
  </div>
  <div id="rightgap"></div>
`;var bt=class extends c.HTMLElement{constructor(){super(),P(this,Ht),P(this,Ft),P(this,oi),P(this,Gi),P(this,Qi),P(this,Ki),P(this,Yi),P(this,ie,void 0),P(this,Bt,void 0),P(this,si,void 0),P(this,ri,void 0),P(this,Wt,()=>{if(this.range.matches(":focus-visible")){let{style:i}=w(this.shadowRoot,":host");i.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}}),P(this,$t,()=>{let{style:i}=w(this.shadowRoot,":host");i.removeProperty("--_focus-visible-box-shadow")}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(Ha.content.cloneNode(!0)));let{style:e}=w(this.shadowRoot,":host");e.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.container=this.shadowRoot.querySelector("#container"),_e(this,si,this.shadowRoot.querySelector("#startpoint")),_e(this,ri,this.shadowRoot.querySelector("#endpoint")),this.range=this.shadowRoot.querySelector("#range")}static get observedAttributes(){return["disabled","aria-disabled",g.MEDIA_CONTROLLER]}attributeChangedCallback(e,i,n){var a,r,o,l,d;e===g.MEDIA_CONTROLLER?(i&&((r=(a=K(this,ie))==null?void 0:a.unassociateElement)==null||r.call(a,this),_e(this,ie,null)),n&&this.isConnected&&(_e(this,ie,(o=this.getRootNode())==null?void 0:o.getElementById(n)),(d=(l=K(this,ie))==null?void 0:l.associateElement)==null||d.call(l,this))):(e==="disabled"||e==="aria-disabled"&&i!==n)&&(n==null?(this.range.removeAttribute(e),ne(this,Ht,$i).call(this)):(this.range.setAttribute(e,n),ne(this,Ft,Hi).call(this)))}connectedCallback(){var e,i,n;let a=this.getAttribute(g.MEDIA_CONTROLLER);a&&(_e(this,ie,(e=this.getRootNode())==null?void 0:e.getElementById(a)),(n=(i=K(this,ie))==null?void 0:i.associateElement)==null||n.call(i,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",K(this,Wt)),this.shadowRoot.addEventListener("focusout",K(this,$t)),ne(this,Ht,$i).call(this)}disconnectedCallback(){var e,i;ne(this,Ft,Hi).call(this),(i=(e=K(this,ie))==null?void 0:e.unassociateElement)==null||i.call(e,this),_e(this,ie,null),this.shadowRoot.removeEventListener("focusin",K(this,Wt)),this.shadowRoot.removeEventListener("focusout",K(this,$t))}updatePointerBar(e){let i=this.range.getBoundingClientRect(),n=(e.clientX-i.left)/i.width;n=100*Math.max(0,Math.min(1,n));let{style:a}=w(this.shadowRoot,"#pointer");a.setProperty("width",`${n}%`)}updateBar(){let e=100*this.range.valueAsNumber,i=w(this.shadowRoot,"#progress"),n=w(this.shadowRoot,"#thumb");i.style.setProperty("width",`${e}%`),n.style.setProperty("left",`${e}%`)}get dragging(){return this.hasAttribute("dragging")}handleEvent(e){switch(e.type){case"input":this.updateBar();break;case"pointerenter":ne(this,Gi,Va).call(this,e);break;case"pointerdown":ne(this,oi,Fi).call(this,e);break;case"pointermove":ne(this,Yi,$a).call(this,e);break;case"pointerup":ne(this,Qi,Ba).call(this);break;case"pointerleave":ne(this,Ki,Wa).call(this)}}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}};ie=new WeakMap,Bt=new WeakMap,si=new WeakMap,ri=new WeakMap,Wt=new WeakMap,$t=new WeakMap,Ht=new WeakSet,$i=function(){this.hasAttribute("disabled")||(this.addEventListener("input",this),this.addEventListener("pointerdown",this),this.addEventListener("pointerenter",this))},Ft=new WeakSet,Hi=function(){var t,e;this.removeEventListener("input",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointerenter",this),(t=c.window)==null||t.removeEventListener("pointerup",this),(e=c.window)==null||e.removeEventListener("pointermove",this)},oi=new WeakSet,Fi=function(t){var e;_e(this,Bt,t.composedPath().includes(this.range)),(e=c.window)==null||e.addEventListener("pointerup",this)},Gi=new WeakSet,Va=function(t){var e;t.pointerType!=="mouse"&&ne(this,oi,Fi).call(this,t),this.addEventListener("pointerleave",this),(e=c.window)==null||e.addEventListener("pointermove",this)},Qi=new WeakSet,Ba=function(){var t;(t=c.window)==null||t.removeEventListener("pointerup",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")},Ki=new WeakSet,Wa=function(){var t;this.removeEventListener("pointerleave",this),(t=c.window)==null||t.removeEventListener("pointermove",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")},Yi=new WeakSet,$a=function(t){if(this.toggleAttribute("dragging",t.buttons===1||t.pointerType!=="mouse"),this.updatePointerBar(t),this.dragging&&(t.pointerType!=="mouse"||!K(this,Bt))){this.range.disabled=!0;let e=function(i,n,a,r){let o=Ii(a,r),l=Ii(a,{x:i,y:n}),d=Ii(r,{x:i,y:n});return l>o||d>o?l>d?1:0:l/o}(t.clientX,t.clientY,K(this,si).getBoundingClientRect(),K(this,ri).getBoundingClientRect());e=Math.max(0,Math.min(1,e)),this.range.valueAsNumber=e,this.range.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))}},c.customElements.get("media-chrome-range")||c.customElements.define("media-chrome-range",bt);var ae;var Fa=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Lt=(t,e,i)=>(Fa(t,e,"read from private field"),i?i.call(t):e.get(t)),St=(t,e,i,n)=>(Fa(t,e,"write to private field"),n?n.call(t,i):e.set(t,i),i),Ga=p.createElement("template");Ga.innerHTML=`
  <style>
    :host {
      
      box-sizing: border-box;
      display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      --media-loading-indicator-icon-height: 44px;
    }

    ::slotted(media-time-range),
    ::slotted(media-volume-range) {
      min-height: 100%;
    }

    ::slotted(media-time-range),
    ::slotted(media-clip-selector) {
      flex-grow: 1;
    }
  </style>

  <slot></slot>
`;var ji=class extends c.HTMLElement{constructor(){super(),((e,i,n)=>{if(i.has(e))throw TypeError("Cannot add the same private member more than once");i instanceof WeakSet?i.add(e):i.set(e,n)})(this,ae,void 0),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(Ga.content.cloneNode(!0)))}static get observedAttributes(){return[g.MEDIA_CONTROLLER]}attributeChangedCallback(e,i,n){var a,r,o,l,d;e===g.MEDIA_CONTROLLER&&(i&&((r=(a=Lt(this,ae))==null?void 0:a.unassociateElement)==null||r.call(a,this),St(this,ae,null)),n&&this.isConnected&&(St(this,ae,(o=this.getRootNode())==null?void 0:o.getElementById(n)),(d=(l=Lt(this,ae))==null?void 0:l.associateElement)==null||d.call(l,this)))}connectedCallback(){var e,i,n;let a=this.getAttribute(g.MEDIA_CONTROLLER);a&&(St(this,ae,(e=this.getRootNode())==null?void 0:e.getElementById(a)),(n=(i=Lt(this,ae))==null?void 0:i.associateElement)==null||n.call(i,this))}disconnectedCallback(){var e,i;(i=(e=Lt(this,ae))==null?void 0:e.unassociateElement)==null||i.call(e,this),St(this,ae,null)}};ae=new WeakMap,c.customElements.get("media-control-bar")||c.customElements.define("media-control-bar",ji);var se;var Qa=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},yt=(t,e,i)=>(Qa(t,e,"read from private field"),i?i.call(t):e.get(t)),Dt=(t,e,i,n)=>(Qa(t,e,"write to private field"),n?n.call(t,i):e.set(t,i),i),Ka=p.createElement("template");Ka.innerHTML=`
  <style>
    :host {
      font: var(--media-font,
        var(--media-font-weight, normal)
        var(--media-font-size, 14px) /
        var(--media-text-content-height, var(--media-control-height, 24px))
        var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
      padding: var(--media-control-padding, 10px);
      display: inline-flex;
      justify-content: center;
      align-items: center;
      vertical-align: middle;
      box-sizing: border-box;
      text-align: center;
      pointer-events: auto;
    }

    
    :host(:focus-visible) {
      box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
      outline: 0;
    }

    
    :host(:where(:focus)) {
      box-shadow: none;
      outline: 0;
    }
  </style>
  <slot></slot>
`;var Xe=class extends c.HTMLElement{constructor(){super(),((i,n,a)=>{if(n.has(i))throw TypeError("Cannot add the same private member more than once");n instanceof WeakSet?n.add(i):n.set(i,a)})(this,se,void 0),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(Ka.content.cloneNode(!0)));let{style:e}=w(this.shadowRoot,":host");e.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`)}static get observedAttributes(){return[g.MEDIA_CONTROLLER]}attributeChangedCallback(e,i,n){var a,r,o,l,d;e===g.MEDIA_CONTROLLER&&(i&&((r=(a=yt(this,se))==null?void 0:a.unassociateElement)==null||r.call(a,this),Dt(this,se,null)),n&&this.isConnected&&(Dt(this,se,(o=this.getRootNode())==null?void 0:o.getElementById(n)),(d=(l=yt(this,se))==null?void 0:l.associateElement)==null||d.call(l,this)))}connectedCallback(){var e,i,n;let a=this.getAttribute(g.MEDIA_CONTROLLER);a&&(Dt(this,se,(e=this.getRootNode())==null?void 0:e.getElementById(a)),(n=(i=yt(this,se))==null?void 0:i.associateElement)==null||n.call(i,this))}disconnectedCallback(){var e,i;(i=(e=yt(this,se))==null?void 0:e.unassociateElement)==null||i.call(e,this),Dt(this,se,null)}};se=new WeakMap,c.customElements.get("media-text-display")||c.customElements.define("media-text-display",Xe);var ot,Ya=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},qn=(t,e,i)=>(Ya(t,e,"read from private field"),i?i.call(t):e.get(t)),qi=class extends Xe{constructor(){var e,i,n,a;super(),((r,o,l)=>{if(o.has(r))throw TypeError("Cannot add the same private member more than once");o instanceof WeakSet?o.add(r):o.set(r,l)})(this,ot,void 0),e=this,i=ot,n=this.shadowRoot.querySelector("slot"),Ya(e,i,"write to private field"),a?a.call(e,n):i.set(e,n),qn(this,ot).textContent=Se(0)}static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_DURATION]}attributeChangedCallback(e,i,n){e===s.MEDIA_DURATION&&(qn(this,ot).textContent=Se(n)),super.attributeChangedCallback(e,i,n)}get mediaDuration(){return f(this,s.MEDIA_DURATION)}set mediaDuration(e){R(this,s.MEDIA_DURATION,e)}};ot=new WeakMap,c.customElements.get("media-duration-display")||c.customElements.define("media-duration-display",qi);var We;var ja=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Li=(t,e,i)=>(ja(t,e,"read from private field"),i?i.call(t):e.get(t)),Y={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},Zn=[...Object.values(Y),s.MEDIA_CURRENT_TIME,s.MEDIA_DURATION,s.MEDIA_SEEKABLE],zn=["Enter"," "],Xn=(t,{timesSep:e="&nbsp;/&nbsp;"}={})=>{var i,n,a,r;let o=t.hasAttribute(Y.REMAINING),l=t.hasAttribute(Y.SHOW_DURATION),d=(i=t.mediaCurrentTime)!=null?i:0,[,u]=(n=t.mediaSeekable)!=null?n:[],h=(r=(a=t.mediaDuration)!=null?a:u)!=null?r:0,v=Se(o?0-(h-d):d);return l?`${v}${e}${Se(h)}`:v},Zi=class extends Xe{constructor(){var e,i,n,a;super(),((o,l,d)=>{if(l.has(o))throw TypeError("Cannot add the same private member more than once");l instanceof WeakSet?l.add(o):l.set(o,d)})(this,We,void 0),e=this,i=We,n=this.shadowRoot.querySelector("slot"),ja(e,i,"write to private field"),a?a.call(e,n):i.set(e,n),Li(this,We).innerHTML=`${Xn(this)}`;let{style:r}=w(this.shadowRoot,":host(:hover:not([notoggle]))");r.setProperty("cursor","pointer"),r.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))")}static get observedAttributes(){return[...super.observedAttributes,...Zn,"disabled"]}connectedCallback(){this.hasAttribute("disabled")||this.enable(),this.setAttribute("role","progressbar"),this.setAttribute("aria-label",ue.PLAYBACK_TIME());let e=i=>{let{key:n}=i;zn.includes(n)?this.toggleTimeDisplay():this.removeEventListener("keyup",e)};this.addEventListener("keydown",i=>{let{metaKey:n,altKey:a,key:r}=i;n||a||!zn.includes(r)?this.removeEventListener("keyup",e):this.addEventListener("keyup",e)}),this.addEventListener("click",this.toggleTimeDisplay),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),super.disconnectedCallback()}attributeChangedCallback(e,i,n){Zn.includes(e)?this.update():e==="disabled"&&n!==i&&(n==null?this.enable():this.disable()),super.attributeChangedCallback(e,i,n)}enable(){this.tabIndex=0}disable(){this.tabIndex=-1}get remaining(){return L(this,Y.REMAINING)}set remaining(e){S(this,Y.REMAINING,e)}get showDuration(){return L(this,Y.SHOW_DURATION)}set showDuration(e){S(this,Y.SHOW_DURATION,e)}get noToggle(){return L(this,Y.NO_TOGGLE)}set noToggle(e){S(this,Y.NO_TOGGLE,e)}get mediaDuration(){return f(this,s.MEDIA_DURATION)}set mediaDuration(e){R(this,s.MEDIA_DURATION,e)}get mediaCurrentTime(){return f(this,s.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){R(this,s.MEDIA_CURRENT_TIME,e)}get mediaSeekable(){let e=this.getAttribute(s.MEDIA_SEEKABLE);if(e)return e.split(":").map(i=>+i)}set mediaSeekable(e){e!=null?this.setAttribute(s.MEDIA_SEEKABLE,e.join(":")):this.removeAttribute(s.MEDIA_SEEKABLE)}update(){let e=Xn(this);(i=>{var n;let a=i.mediaCurrentTime,[,r]=(n=i.mediaSeekable)!=null?n:[],o=i.mediaDuration||r;if(a==null||o==null)return void i.setAttribute("aria-valuetext","video not loaded, unknown time.");let l=i.hasAttribute(Y.REMAINING),d=i.hasAttribute(Y.SHOW_DURATION),u=vt(l?0-(o-a):a);if(!d)return void i.setAttribute("aria-valuetext",u);let h=`${u} of ${vt(o)}`;i.setAttribute("aria-valuetext",h)})(this),e!==Li(this,We).innerHTML&&(Li(this,We).innerHTML=e)}};We=new WeakMap,c.customElements.get("media-time-display")||c.customElements.define("media-time-display",Zi);var qa=p.createElement("template");qa.innerHTML=`
  <style>
    :host([aria-checked="true"]) slot[name=off] {
      display: none !important;
    }

    
    :host(:not([aria-checked="true"])) slot[name=on] {
      display: none !important;
    }
  </style>

  <slot name="icon">
    <slot name="on"><svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg></slot>
    <slot name="off"><svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg></slot>
  </slot>
`;var Jn=t=>{t.setAttribute("aria-checked",(e=>!!e.getAttribute(s.MEDIA_SUBTITLES_SHOWING))(t))},zi=class extends x{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_SUBTITLES_LIST,s.MEDIA_SUBTITLES_SHOWING]}constructor(e={}){super({slotTemplate:qa,...e}),this._captionsReady=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","switch"),this.setAttribute("aria-label",ue.CLOSED_CAPTIONS()),Jn(this)}attributeChangedCallback(e,i,n){e===s.MEDIA_SUBTITLES_SHOWING&&Jn(this),super.attributeChangedCallback(e,i,n)}get mediaSubtitlesList(){return ea(this,s.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){ta(this,s.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return ea(this,s.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){ta(this,s.MEDIA_SUBTITLES_SHOWING,e)}handleClick(){this.dispatchEvent(new c.CustomEvent(E.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}},ea=(t,e)=>{let i=t.getAttribute(e);return i?Na(i):[]},ta=(t,e,i)=>{if(!i?.length)return void t.removeAttribute(e);let n=Oi(i);t.getAttribute(e)!==n&&t.setAttribute(e,n)};c.customElements.get("media-captions-button")||c.customElements.define("media-captions-button",zi);var Ce="seekoffset",Za=p.createElement("template");Za.innerHTML=`
  <slot name="icon"><svg aria-hidden="true" viewBox="0 0 20 24"><defs><style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style></defs><text class="text value" transform="translate(8.9 19.87)">30</text><path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/></svg></slot>
`;var Xi=class extends x{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_CURRENT_TIME,Ce]}constructor(e={}){super({slotTemplate:Za,...e})}connectedCallback(){this.seekOffset=f(this,Ce,30),super.connectedCallback()}attributeChangedCallback(e,i,n){e===Ce&&(this.seekOffset=f(this,Ce,30)),super.attributeChangedCallback(e,i,n)}get seekOffset(){return f(this,Ce,30)}set seekOffset(e){R(this,Ce,e),this.setAttribute("aria-label",y.SEEK_FORWARD_N_SECS({seekOffset:this.seekOffset})),va(ba(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return f(this,s.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){R(this,s.MEDIA_CURRENT_TIME,e)}handleClick(){let e=this.mediaCurrentTime+this.seekOffset,i=new c.CustomEvent(E.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(i)}};c.customElements.get("media-seek-forward-button")||c.customElements.define("media-seek-forward-button",Xi);var za=p.createElement("template");za.innerHTML=`
  <style>
  :host([${s.MEDIA_IS_FULLSCREEN}]) slot:not([name=exit]):not([name=icon]) {
    display: none !important;
  }

  
  :host(:not([${s.MEDIA_IS_FULLSCREEN}])) slot:not([name=enter]):not([name=icon]) {
    display: none !important;
  }
  </style>

  <slot name="icon">
    <slot name="enter"><svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg></slot>
    <slot name="exit"><svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg></slot>
  </slot>
`;var ia=t=>{let e=t.mediaIsFullscreen?y.EXIT_FULLSCREEN():y.ENTER_FULLSCREEN();t.setAttribute("aria-label",e)},Ji=class extends x{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_IS_FULLSCREEN,s.MEDIA_FULLSCREEN_UNAVAILABLE]}constructor(e={}){super({slotTemplate:za,...e})}connectedCallback(){ia(this),super.connectedCallback()}attributeChangedCallback(e,i,n){e===s.MEDIA_IS_FULLSCREEN&&ia(this),super.attributeChangedCallback(e,i,n)}get mediaFullscreenUnavailable(){return q(this,s.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(e){Z(this,s.MEDIA_FULLSCREEN_UNAVAILABLE,e)}get mediaIsFullscreen(){return L(this,s.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(e){S(this,s.MEDIA_IS_FULLSCREEN,e)}handleClick(){let e=this.mediaIsFullscreen?E.MEDIA_EXIT_FULLSCREEN_REQUEST:E.MEDIA_ENTER_FULLSCREEN_REQUEST;this.dispatchEvent(new c.CustomEvent(e,{composed:!0,bubbles:!0}))}};c.customElements.get("media-fullscreen-button")||c.customElements.define("media-fullscreen-button",Ji);var{MEDIA_TIME_IS_LIVE:Gt,MEDIA_PAUSED:Et}=s,{MEDIA_SEEK_TO_LIVE_REQUEST:qs,MEDIA_PLAY_REQUEST:Zs}=E,Xa=p.createElement("template");Xa.innerHTML=`
  <style>

  slot[name=indicator] > *,
  :host ::slotted([slot=indicator]) {
    
    min-width: auto;
    fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
    color: var(--media-live-button-icon-color, rgb(140, 140, 140));
  }

  :host([${Gt}]:not([${Et}])) slot[name=indicator] > *,
  :host([${Gt}]:not([${Et}])) ::slotted([slot=indicator]) {
    fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
    color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
  }

  :host([${Gt}]:not([${Et}])) {
    cursor: not-allowed;
  }

  </style>

  <slot name="indicator"><svg viewBox="0 0 6 12"><circle cx="3" cy="6" r="2"></circle></svg></slot>
  
  <slot name="spacer">&nbsp;</slot><slot name="text">LIVE</slot>
`;var na=t=>{let e=t.mediaPaused||!t.mediaTimeIsLive,i=e?y.SEEK_LIVE():y.PLAYING_LIVE();t.setAttribute("aria-label",i),e?t.removeAttribute("aria-disabled"):t.setAttribute("aria-disabled","true")},en=class extends x{static get observedAttributes(){return[...super.observedAttributes,Et,Gt]}constructor(e={}){super({slotTemplate:Xa,...e})}connectedCallback(){na(this),super.connectedCallback()}attributeChangedCallback(e,i,n){super.attributeChangedCallback(e,i,n),na(this)}get mediaPaused(){return L(this,s.MEDIA_PAUSED)}set mediaPaused(e){S(this,s.MEDIA_PAUSED,e)}get mediaTimeIsLive(){return L(this,s.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(e){S(this,s.MEDIA_TIME_IS_LIVE,e)}handleClick(){!this.mediaPaused&&this.mediaTimeIsLive||(this.dispatchEvent(new c.CustomEvent(qs,{composed:!0,bubbles:!0})),this.hasAttribute(Et)&&this.dispatchEvent(new c.CustomEvent(Zs,{composed:!0,bubbles:!0})))}};c.customElements.get("media-live-button")||c.customElements.define("media-live-button",en);var{MEDIA_VOLUME_LEVEL:it}=s,aa=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,Ja=p.createElement("template");Ja.innerHTML=`
  <style>
  
  :host(:not([${it}])) slot:not([name=high]):not([name=icon]), 
  :host([${it}=high]) slot:not([name=high]):not([name=icon]) {
    display: none !important;
  }

  :host([${it}=off]) slot:not([name=off]):not([name=icon]) {
    display: none !important;
  }

  :host([${it}=low]) slot:not([name=low]):not([name=icon]) {
    display: none !important;
  }

  :host([${it}=medium]) slot:not([name=medium]):not([name=icon]) {
    display: none !important;
  }
  </style>

  <slot name="icon">
    <slot name="off"><svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg></slot>
    <slot name="low">${aa}</slot>
    <slot name="medium">${aa}</slot>
    <slot name="high"><svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg></slot>
  </slot>
`;var sa=t=>{let e=t.mediaVolumeLevel==="off"?y.UNMUTE():y.MUTE();t.setAttribute("aria-label",e)},tn=class extends x{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_VOLUME_LEVEL]}constructor(e={}){super({slotTemplate:Ja,...e})}connectedCallback(){sa(this),super.connectedCallback()}attributeChangedCallback(e,i,n){e===s.MEDIA_VOLUME_LEVEL&&sa(this),super.attributeChangedCallback(e,i,n)}get mediaVolumeLevel(){return q(this,s.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(e){Z(this,s.MEDIA_VOLUME_LEVEL,e)}handleClick(){let e=this.mediaVolumeLevel==="off"?E.MEDIA_UNMUTE_REQUEST:E.MEDIA_MUTE_REQUEST;this.dispatchEvent(new c.CustomEvent(e,{composed:!0,bubbles:!0}))}};c.customElements.get("media-mute-button")||c.customElements.define("media-mute-button",tn);var ra=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`,es=p.createElement("template");es.innerHTML=`
  <style>
  :host([${s.MEDIA_IS_PIP}]) slot:not([name=exit]):not([name=icon]) {
    display: none !important;
  }

  
  :host(:not([${s.MEDIA_IS_PIP}])) slot:not([name=enter]):not([name=icon]) {
    display: none !important;
  }
  </style>

  <slot name="icon">
    <slot name="enter">${ra}</slot>
    <slot name="exit">${ra}</slot>
  </slot>
`;var oa=t=>{let e=t.mediaIsPip?y.EXIT_PIP():y.ENTER_PIP();t.setAttribute("aria-label",e)},nn=class extends x{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_IS_PIP,s.MEDIA_PIP_UNAVAILABLE]}constructor(e={}){super({slotTemplate:es,...e})}connectedCallback(){oa(this),super.connectedCallback()}attributeChangedCallback(e,i,n){e===s.MEDIA_IS_PIP&&oa(this),super.attributeChangedCallback(e,i,n)}get mediaPipUnavailable(){return q(this,s.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(e){Z(this,s.MEDIA_PIP_UNAVAILABLE,e)}get mediaIsPip(){return L(this,s.MEDIA_IS_PIP)}set mediaIsPip(e){S(this,s.MEDIA_IS_PIP,e)}handleClick(){let e=this.mediaIsPip?E.MEDIA_EXIT_PIP_REQUEST:E.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new c.CustomEvent(e,{composed:!0,bubbles:!0}))}};c.customElements.get("media-pip-button")||c.customElements.define("media-pip-button",nn);var ts=p.createElement("template");ts.innerHTML=`
  <style>
  :host([${s.MEDIA_PAUSED}]) slot[name=pause] {
    display: none !important;
  }

  :host(:not([${s.MEDIA_PAUSED}])) slot[name=play] {
    display: none !important;
  }
  </style>

  <slot name="icon">
    <slot name="play"><svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg></slot>
    <slot name="pause"><svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg></slot>
  </slot>
`;var la=t=>{let e=t.mediaPaused?y.PLAY():y.PAUSE();t.setAttribute("aria-label",e)},an=class extends x{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_PAUSED,s.MEDIA_ENDED]}constructor(e={}){super({slotTemplate:ts,...e})}connectedCallback(){la(this),super.connectedCallback()}attributeChangedCallback(e,i,n){e===s.MEDIA_PAUSED&&la(this),super.attributeChangedCallback(e,i,n)}get mediaPaused(){return L(this,s.MEDIA_PAUSED)}set mediaPaused(e){S(this,s.MEDIA_PAUSED,e)}handleClick(){let e=this.mediaPaused?E.MEDIA_PLAY_REQUEST:E.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new c.CustomEvent(e,{composed:!0,bubbles:!0}))}};c.customElements.get("media-play-button")||c.customElements.define("media-play-button",an);var $e;var wt=(t,e,i)=>(((n,a,r)=>{if(!a.has(n))throw TypeError("Cannot "+r)})(t,e,"read from private field"),i?i.call(t):e.get(t)),Si="rates",zs=[1,1.2,1.5,1.7,2],is=p.createElement("template");is.innerHTML=`
  <style>
    :host {
      min-width: 5ch;
      padding: var(--media-control-padding, 10px 5px);
    }
  </style>
  <span id="container"></span>
`;var sn=class extends x{constructor(e={}){super({slotTemplate:is,...e}),((i,n,a)=>{if(n.has(i))throw TypeError("Cannot add the same private member more than once");n instanceof WeakSet?n.add(i):n.set(i,a)})(this,$e,new ii(this,Si,{defaultValue:zs})),this.container=this.shadowRoot.querySelector("#container"),this.container.innerHTML="1x"}static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_PLAYBACK_RATE,Si]}attributeChangedCallback(e,i,n){if(super.attributeChangedCallback(e,i,n),e===Si&&(wt(this,$e).value=n),e===s.MEDIA_PLAYBACK_RATE){let a=n?+n:Number.NaN,r=Number.isNaN(a)?1:a;this.container.innerHTML=`${r}x`,this.setAttribute("aria-label",ue.PLAYBACK_RATE({playbackRate:r}))}}get rates(){return wt(this,$e)}set rates(e){e?Array.isArray(e)&&(wt(this,$e).value=e.join(" ")):wt(this,$e).value=""}get mediaPlaybackRate(){return f(this,s.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){R(this,s.MEDIA_PLAYBACK_RATE,e)}handleClick(){var e,i;let n=Array.from(this.rates.values(),o=>+o).sort((o,l)=>o-l),a=(i=(e=n.find(o=>o>this.mediaPlaybackRate))!=null?e:n[0])!=null?i:1,r=new c.CustomEvent(E.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(r)}};$e=new WeakMap,c.customElements.get("media-playback-rate-button")||c.customElements.define("media-playback-rate-button",sn);var yi="placeholdersrc",Ae="src",ns=p.createElement("template");ns.innerHTML=`
  <style>
    :host {
      pointer-events: none;
      display: var(--media-poster-image-display, inline-block);
      box-sizing: border-box;
    }

    img {
      max-width: 100%;
      max-height: 100%;
      min-width: 100%;
      min-height: 100%;
      background-repeat: no-repeat;
      background-position: var(--media-poster-image-background-position, var(--media-object-position, center));
      background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));
      object-fit: var(--media-object-fit, contain);
      object-position: var(--media-object-position, center);
    }
  </style>

  <img part="poster img" aria-hidden="true" id="image"/>
`;var rn=class extends c.HTMLElement{static get observedAttributes(){return[yi,Ae]}constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(ns.content.cloneNode(!0))),this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(e,i,n){e===Ae&&(n==null?this.image.removeAttribute(Ae):this.image.setAttribute(Ae,n)),e===yi&&(n==null?this.image.style.removeProperty("background-image"):((a,r)=>{a.style["background-image"]=`url('${r}')`})(this.image,n))}get placeholderSrc(){return q(this,yi)}set placeholderSrc(e){Z(this,Ae,e)}get src(){return q(this,Ae)}set src(e){Z(this,Ae,e)}};c.customElements.get("media-poster-image")||c.customElements.define("media-poster-image",rn);var Ne="seekoffset",as=p.createElement("template");as.innerHTML=`
  <slot name="icon"><svg aria-hidden="true" viewBox="0 0 20 24"><defs><style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style></defs><text class="text value" transform="translate(2.18 19.87)">30</text><path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/></svg></slot>
`;var on=class extends x{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_CURRENT_TIME,Ne]}constructor(e={}){super({slotTemplate:as,...e})}connectedCallback(){this.seekOffset=f(this,Ne,30),super.connectedCallback()}attributeChangedCallback(e,i,n){e===Ne&&(this.seekOffset=f(this,Ne,30)),super.attributeChangedCallback(e,i,n)}get seekOffset(){return f(this,Ne,30)}set seekOffset(e){R(this,Ne,e),this.setAttribute("aria-label",y.SEEK_BACK_N_SECS({seekOffset:this.seekOffset})),va(ba(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return f(this,s.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){R(this,s.MEDIA_CURRENT_TIME,e)}handleClick(){let e=Math.max(this.mediaCurrentTime-this.seekOffset,0),i=new c.CustomEvent(E.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(i)}};c.customElements.get("media-seek-backward-button")||c.customElements.define("media-seek-backward-button",on);var lt;var ss=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},da=(t,e,i)=>(ss(t,e,"read from private field"),i?i.call(t):e.get(t)),ln=class extends Xe{constructor(){var e,i,n,a;super(),((r,o,l)=>{if(o.has(r))throw TypeError("Cannot add the same private member more than once");o instanceof WeakSet?o.add(r):o.set(r,l)})(this,lt,void 0),e=this,i=lt,n=this.shadowRoot.querySelector("slot"),ss(e,i,"write to private field"),a?a.call(e,n):i.set(e,n),da(this,lt).textContent=Se(0)}static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_PREVIEW_TIME]}attributeChangedCallback(e,i,n){e===s.MEDIA_PREVIEW_TIME&&n!=null&&(da(this,lt).textContent=Se(n)),super.attributeChangedCallback(e,i,n)}get mediaPreviewTime(){return f(this,s.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){R(this,s.MEDIA_PREVIEW_TIME,e)}};lt=new WeakMap,c.customElements.get("media-preview-time-display")||c.customElements.define("media-preview-time-display",ln);var re;var rs=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Rt=(t,e,i)=>(rs(t,e,"read from private field"),i?i.call(t):e.get(t)),Ct=(t,e,i,n)=>(rs(t,e,"write to private field"),n?n.call(t,i):e.set(t,i),i),os=p.createElement("template");os.innerHTML=`
  <style>
    :host {
      box-sizing: border-box;
      display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
      overflow: hidden;
    }

    img {
      display: none;
      position: relative;
    }
  </style>
  <img crossorigin loading="eager" decoding="async">
`;var dn=class extends c.HTMLElement{constructor(){super(),((e,i,n)=>{if(i.has(e))throw TypeError("Cannot add the same private member more than once");i instanceof WeakSet?i.add(e):i.set(e,n)})(this,re,void 0),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(os.content.cloneNode(!0)))}static get observedAttributes(){return[g.MEDIA_CONTROLLER,s.MEDIA_PREVIEW_IMAGE,s.MEDIA_PREVIEW_COORDS]}connectedCallback(){var e,i,n;let a=this.getAttribute(g.MEDIA_CONTROLLER);a&&(Ct(this,re,(e=this.getRootNode())==null?void 0:e.getElementById(a)),(n=(i=Rt(this,re))==null?void 0:i.associateElement)==null||n.call(i,this))}disconnectedCallback(){var e,i;(i=(e=Rt(this,re))==null?void 0:e.unassociateElement)==null||i.call(e,this),Ct(this,re,null)}attributeChangedCallback(e,i,n){var a,r,o,l,d;[s.MEDIA_PREVIEW_IMAGE,s.MEDIA_PREVIEW_COORDS].includes(e)&&this.update(),e===g.MEDIA_CONTROLLER&&(i&&((r=(a=Rt(this,re))==null?void 0:a.unassociateElement)==null||r.call(a,this),Ct(this,re,null)),n&&this.isConnected&&(Ct(this,re,(o=this.getRootNode())==null?void 0:o.getElementById(n)),(d=(l=Rt(this,re))==null?void 0:l.associateElement)==null||d.call(l,this)))}get mediaPreviewImage(){return q(this,s.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){Z(this,s.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewCoords(){let e=this.getAttribute(s.MEDIA_PREVIEW_COORDS);if(e)return e.split(/\s+/).map(i=>+i)}set mediaPreviewCoords(e){e?this.setAttribute(s.MEDIA_PREVIEW_COORDS,e.join(" ")):this.removeAttribute(s.MEDIA_PREVIEW_COORDS)}update(){let e=this.mediaPreviewCoords,i=this.mediaPreviewImage;if(!e||!i)return;let[n,a,r,o]=e,l=i.split("#")[0],d=getComputedStyle(this),{maxWidth:u,maxHeight:h,minWidth:v,minHeight:k}=d,D=Math.min(parseInt(u)/r,parseInt(h)/o),z=Math.max(parseInt(v)/r,parseInt(k)/o),$=D<1,H=$?D:z>1?z:1,{style:ye}=w(this.shadowRoot,":host"),de=w(this.shadowRoot,"img").style,be=this.shadowRoot.querySelector("img"),gt=$?"min":"max";ye.setProperty(`${gt}-width`,"initial","important"),ye.setProperty(`${gt}-height`,"initial","important"),ye.width=r*H+"px",ye.height=o*H+"px";let Je=()=>{de.width=this.imgWidth*H+"px",de.height=this.imgHeight*H+"px",de.display="block"};be.src!==l&&(be.onload=()=>{this.imgWidth=be.naturalWidth,this.imgHeight=be.naturalHeight,Je()},be.src=l,Je()),Je(),de.transform=`translate(-${n*H}px, -${a*H}px)`}};re=new WeakMap,c.customElements.get("media-preview-thumbnail")||c.customElements.define("media-preview-thumbnail",dn);var He,Qt,Fe,dt,Kt,Yt,jt,Ge,fe,qt;var ls=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},M=(t,e,i)=>(ls(t,e,"read from private field"),i?i.call(t):e.get(t)),ee=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},O=(t,e,i,n)=>(ls(t,e,"write to private field"),n?n.call(t,i):e.set(t,i),i),cn=class{constructor(e,i,n){ee(this,He,void 0),ee(this,Qt,void 0),ee(this,Fe,void 0),ee(this,dt,void 0),ee(this,Kt,void 0),ee(this,Yt,void 0),ee(this,jt,void 0),ee(this,Ge,void 0),ee(this,fe,0),ee(this,qt,(a=performance.now())=>{O(this,fe,requestAnimationFrame(M(this,qt))),O(this,dt,performance.now()-M(this,Fe));let r=1e3/this.fps;if(M(this,dt)>r){O(this,Fe,a-M(this,dt)%r);let h=1e3/((a-M(this,Qt))/++(o=this,l=Kt,{set _(D){O(o,l,D,d)},get _(){return M(o,l,u)}})._),v=(a-M(this,Yt))/1e3/this.duration,k=M(this,jt)+v*this.playbackRate;k-M(this,He).valueAsNumber>0?O(this,Ge,this.playbackRate/this.duration/h):(O(this,Ge,.995*M(this,Ge)),k=M(this,He).valueAsNumber+M(this,Ge)),this.callback(k)}var o,l,d,u}),O(this,He,e),this.callback=i,this.fps=n}start(){M(this,fe)===0&&(O(this,Fe,performance.now()),O(this,Qt,M(this,Fe)),O(this,Kt,0),M(this,qt).call(this))}stop(){M(this,fe)!==0&&(cancelAnimationFrame(M(this,fe)),O(this,fe,0))}update({start:e,duration:i,playbackRate:n}){let a=e-M(this,He).valueAsNumber;(a>0||a<-.03)&&this.callback(e),O(this,jt,e),O(this,Yt,performance.now()),this.duration=i,this.playbackRate=n}};He=new WeakMap,Qt=new WeakMap,Fe=new WeakMap,dt=new WeakMap,Kt=new WeakMap,Yt=new WeakMap,jt=new WeakMap,Ge=new WeakMap,fe=new WeakMap,qt=new WeakMap;var Qe,ke,li,di,ct,ci,ui,Ke,ut,un,ca,hn,hi,mn,En,ds,pt,Zt,pn,cs,Sn=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},W=(t,e,i)=>(Sn(t,e,"read from private field"),i?i.call(t):e.get(t)),N=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},me=(t,e,i,n)=>(Sn(t,e,"write to private field"),n?n.call(t,i):e.set(t,i),i),G=(t,e,i)=>(Sn(t,e,"access private method"),i),us=p.createElement("template");us.innerHTML=`
  <style>
    :host {
      --media-preview-border-radius: 3px;
      --media-box-padding-left: 10px;
      --media-box-padding-right: 10px;
    }

    #highlight {
      background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));
    }

    #preview-rail,
    #current-rail {
      
      width: 1%;
      position: absolute;
      left: 0;
      bottom: 100%;
      pointer-events: none;
    }

    [part~="box"] {
      
      position: absolute;
      bottom: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      transform: translateX(-50%);
    }

    [part~="preview-box"] {
      transition-property: var(--media-preview-transition-property, visibility, opacity);
      transition-duration: var(--media-preview-transition-duration-out, .25s);
      transition-delay: var(--media-preview-transition-delay-out, 0s);
      visibility: hidden;
      opacity: 0;
    }

    :host(:is([${s.MEDIA_PREVIEW_IMAGE}], [${s.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
      transition-duration: var(--media-preview-transition-duration-in, .5s);
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      visibility: visible;
      opacity: 1;
    }

    @media (hover: hover) {
      :host(:is([${s.MEDIA_PREVIEW_IMAGE}], [${s.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }
    }

    media-preview-thumbnail,
    ::slotted(media-preview-thumbnail) {
      visibility: hidden;
      
      transition: visibility 0s .25s;
      transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
      background: var(--media-preview-thumbnail-background, var(--media-preview-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)))));
      box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
      max-width: var(--media-preview-thumbnail-max-width, 180px);
      max-height: var(--media-preview-thumbnail-max-height, 160px);
      min-width: var(--media-preview-thumbnail-min-width, 120px);
      min-height: var(--media-preview-thumbnail-min-height, 80px);
      border: var(--media-preview-thumbnail-border);
      border-radius: var(--media-preview-thumbnail-border-radius,
        var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
    }

    :host([${s.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
    :host([${s.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      visibility: visible;
    }

    @media (hover: hover) {
      :host([${s.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
      :host([${s.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      :host([${s.MEDIA_PREVIEW_TIME}]:hover) {
        --media-time-range-hover-display: block;
      }
    }

    media-preview-time-display,
    ::slotted(media-preview-time-display) {
      min-width: 0;
      
      transition: min-width 0s, border-radius 0s;
      transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
      background: var(--media-preview-time-background, var(--media-preview-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)))));
      border-radius: var(--media-preview-time-border-radius,
        var(--media-preview-border-radius) var(--media-preview-border-radius)
        var(--media-preview-border-radius) var(--media-preview-border-radius));
      padding: var(--media-preview-time-padding, 1px 10px 0);
      margin: var(--media-preview-time-margin, 0 0 10px);
      text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
    }

    :host([${s.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
    :host([${s.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      min-width: 100%;
      border-radius: var(--media-preview-time-border-radius,
        0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
    }
  </style>
  <div id="preview-rail">
    <slot name="preview" part="box preview-box">
      <media-preview-thumbnail></media-preview-thumbnail>
      <media-preview-time-display></media-preview-time-display>
    </slot>
  </div>
  <div id="current-rail">
    <slot name="current" part="box current-box">
      
    </slot>
  </div>
`;var ua=(t,e=t.mediaCurrentTime)=>{if(Number.isNaN(t.mediaSeekableEnd))return 0;let i=(e-t.mediaSeekableStart)/(t.mediaSeekableEnd-t.mediaSeekableStart);return Math.max(0,Math.min(i,1))},hs=(t,e=t.range.valueAsNumber)=>Number.isNaN(t.mediaSeekableEnd)?0:e*(t.mediaSeekableEnd-t.mediaSeekableStart)+t.mediaSeekableStart,vn=class extends bt{constructor(){super(),N(this,Ke),N(this,un),N(this,hi),N(this,En),N(this,pt),N(this,pn),N(this,Qe,void 0),N(this,ke,void 0),N(this,li,void 0),N(this,di,void 0),N(this,ct,void 0),N(this,ci,void 0),N(this,ui,void 0),N(this,hn,i=>{this.dragging||(this.range.valueAsNumber=i,this.updateBar())}),this.container.appendChild(us.content.cloneNode(!0)),me(this,li,this.shadowRoot.querySelectorAll('[part~="box"]')),me(this,di,this.shadowRoot.querySelector('[part~="preview-box"]')),me(this,ct,this.shadowRoot.querySelector('[part~="current-box"]'));let e=getComputedStyle(this);me(this,ci,parseInt(e.getPropertyValue("--media-box-padding-left"))),me(this,ui,parseInt(e.getPropertyValue("--media-box-padding-right"))),me(this,ke,new cn(this.range,W(this,hn),60))}static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_PAUSED,s.MEDIA_DURATION,s.MEDIA_SEEKABLE,s.MEDIA_CURRENT_TIME,s.MEDIA_PREVIEW_IMAGE,s.MEDIA_PREVIEW_TIME,s.MEDIA_BUFFERED,s.MEDIA_PLAYBACK_RATE,s.MEDIA_LOADING,s.MEDIA_ENDED]}connectedCallback(){var e;super.connectedCallback(),this.range.setAttribute("aria-label",ue.SEEK()),G(this,Ke,ut).call(this),me(this,Qe,this.getRootNode()),(e=W(this,Qe))==null||e.addEventListener("transitionstart",this)}disconnectedCallback(){var e;super.disconnectedCallback(),G(this,Ke,ut).call(this),(e=W(this,Qe))==null||e.removeEventListener("transitionstart",this),me(this,Qe,null)}attributeChangedCallback(e,i,n){super.attributeChangedCallback(e,i,n),i!=n&&(e===s.MEDIA_CURRENT_TIME||e===s.MEDIA_PAUSED||e===s.MEDIA_ENDED||e===s.MEDIA_LOADING||e===s.MEDIA_DURATION||e===s.MEDIA_SEEKABLE?(W(this,ke).update({start:ua(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),G(this,Ke,ut).call(this),(a=>{let r=a.range,o=vt(+hs(a)),l=vt(+a.mediaSeekableEnd),d=o&&l?`${o} of ${l}`:"video not loaded, unknown time.";r.setAttribute("aria-valuetext",d)})(this)):e===s.MEDIA_BUFFERED&&this.updateBufferedBar())}get mediaPaused(){return L(this,s.MEDIA_PAUSED)}set mediaPaused(e){S(this,s.MEDIA_PAUSED,e)}get mediaLoading(){return L(this,s.MEDIA_LOADING)}set mediaLoading(e){S(this,s.MEDIA_LOADING,e)}get mediaDuration(){return f(this,s.MEDIA_DURATION)}set mediaDuration(e){R(this,s.MEDIA_DURATION,e)}get mediaCurrentTime(){return f(this,s.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){R(this,s.MEDIA_CURRENT_TIME,e)}get mediaPlaybackRate(){return f(this,s.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){R(this,s.MEDIA_PLAYBACK_RATE,e)}get mediaBuffered(){let e=this.getAttribute(s.MEDIA_BUFFERED);return e?e.split(" ").map(i=>i.split(":").map(n=>+n)):[]}set mediaBuffered(e){if(!e)return void this.removeAttribute(s.MEDIA_BUFFERED);let i=e.map(n=>n.join(":")).join(" ");this.setAttribute(s.MEDIA_BUFFERED,i)}get mediaSeekable(){let e=this.getAttribute(s.MEDIA_SEEKABLE);if(e)return e.split(":").map(i=>+i)}set mediaSeekable(e){e!=null?this.setAttribute(s.MEDIA_SEEKABLE,e.join(":")):this.removeAttribute(s.MEDIA_SEEKABLE)}get mediaSeekableEnd(){var e;let[,i=this.mediaDuration]=(e=this.mediaSeekable)!=null?e:[];return i}get mediaSeekableStart(){var e;let[i=0]=(e=this.mediaSeekable)!=null?e:[];return i}get mediaPreviewImage(){return q(this,s.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){Z(this,s.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewTime(){return f(this,s.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){R(this,s.MEDIA_PREVIEW_TIME,e)}get mediaEnded(){return L(this,s.MEDIA_ENDED)}set mediaEnded(e){S(this,s.MEDIA_ENDED,e)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){var e;let i=this.mediaBuffered;if(!i.length)return;let n;if(this.mediaEnded)n=1;else{let r=this.mediaCurrentTime,[,o=this.mediaSeekableStart]=(e=i.find(([l,d])=>l<=r&&r<=d))!=null?e:[];n=ua(this,o)}let{style:a}=w(this.shadowRoot,"#highlight");a.setProperty("width",100*n+"%")}updateCurrentBox(){if(!W(this,ct).assignedElements().length)return;let e=G(this,hi,mn).call(this,W(this,ct),this.range.valueAsNumber),{style:i}=w(this.shadowRoot,"#current-rail");i.transform=`translateX(${e})`}handleEvent(e){switch(super.handleEvent(e),e.type){case"input":G(this,pn,cs).call(this);break;case"pointermove":G(this,En,ds).call(this,e);break;case"pointerup":case"pointerleave":G(this,pt,Zt).call(this,null);break;case"transitionstart":ht(e.target,this)&&setTimeout(()=>G(this,Ke,ut).call(this),0)}}};Qe=new WeakMap,ke=new WeakMap,li=new WeakMap,di=new WeakMap,ct=new WeakMap,ci=new WeakMap,ui=new WeakMap,Ke=new WeakSet,ut=function(){G(this,un,ca).call(this)?W(this,ke).start():W(this,ke).stop()},un=new WeakSet,ca=function(){return this.isConnected&&function(t,e=3){if(t.checkVisibility)return t.checkVisibility({checkOpacity:!0,checkVisibilityCSS:!0});let i=t;for(;i&&e>0;){let n=getComputedStyle(i);if(n.opacity==="0"||n.visibility==="hidden"||n.display==="none")return!1;i=i.parentElement,e--}return!0}(this)&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded},hn=new WeakMap,hi=new WeakSet,mn=function(t,e){var i;let n=100*e*100+"%",a=t.offsetWidth;if(!a)return n;let r=(i=this.getAttribute("bounds")?An(this,`#${this.getAttribute("bounds")}`):this.parentElement)!=null?i:this,o=this.range.getBoundingClientRect(),l=r.getBoundingClientRect(),d=(W(this,ci)-(o.left-l.left-a/2))/o.width*100,u=(l.right-o.left-a/2-W(this,ui))/o.width*100;return Number.isNaN(d)||(n=`max(${100*d}%, ${n})`),Number.isNaN(u)||(n=`min(${n}, ${100*u}%)`),n},En=new WeakSet,ds=function(t){let e=[...W(this,li)].some(l=>t.composedPath().includes(l));if(!this.dragging&&(e||!t.composedPath().includes(this)))return void G(this,pt,Zt).call(this,null);let i=this.mediaDuration;if(!i)return;let n=this.range.getBoundingClientRect(),a=(t.clientX-n.left)/n.width;a=Math.max(0,Math.min(1,a));let r=G(this,hi,mn).call(this,W(this,di),a),{style:o}=w(this.shadowRoot,"#preview-rail");o.transform=`translateX(${r})`,G(this,pt,Zt).call(this,a*i)},pt=new WeakSet,Zt=function(t){this.dispatchEvent(new c.CustomEvent(E.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:t}))},pn=new WeakSet,cs=function(){W(this,ke).stop();let t=hs(this);this.dispatchEvent(new c.CustomEvent(E.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:t}))},c.customElements.get("media-time-range")||c.customElements.define("media-time-range",vn);var oe,zt,Xt;var ms=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Ue=(t,e,i)=>(ms(t,e,"read from private field"),i?i.call(t):e.get(t)),Di=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},xe=(t,e,i,n)=>(ms(t,e,"write to private field"),n?n.call(t,i):e.set(t,i),i),ha="loadingdelay",Es=p.createElement("template");Es.innerHTML=`
<style>
:host {
  display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
  vertical-align: middle;
  box-sizing: border-box;
  --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, 500ms);
}

#status {
  color: rgba(0,0,0,0);
  width: 0px;
  height: 0px;
}

:host slot[name=icon] > *,
:host ::slotted([slot=icon]) {
  opacity: var(--media-loading-indicator-opacity, 0);
  transition: opacity 0.15s;
}

:host([${s.MEDIA_LOADING}]:not([${s.MEDIA_PAUSED}])) slot[name=icon] > *,
:host([${s.MEDIA_LOADING}]:not([${s.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
  opacity: var(--media-loading-indicator-opacity, 1);
  transition: opacity 0.15s var(--_loading-indicator-delay);
}

:host #status {
  visibility: var(--media-loading-indicator-opacity, hidden);
  transition: visibility 0.15s;
}

:host([${s.MEDIA_LOADING}]:not([${s.MEDIA_PAUSED}])) #status {
  visibility: var(--media-loading-indicator-opacity, visible);
  transition: visibility 0.15s var(--_loading-indicator-delay);
}

svg, img, ::slotted(svg), ::slotted(img) {
  width: var(--media-loading-indicator-icon-width);
  height: var(--media-loading-indicator-icon-height, 100px);
  fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
  vertical-align: middle;
}
</style>

<slot name="icon">
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
</slot>
<div id="status" role="status" aria-live="polite">${ue.MEDIA_LOADING()}</div>
`;var bn=class extends c.HTMLElement{constructor(){if(super(),Di(this,oe,void 0),Di(this,zt,500),Di(this,Xt,void 0),!this.shadowRoot){let i=this.attachShadow({mode:"open"}),n=Es.content.cloneNode(!0);i.appendChild(n)}let{style:e}=w(this.shadowRoot,":host");xe(this,Xt,e)}static get observedAttributes(){return[g.MEDIA_CONTROLLER,s.MEDIA_PAUSED,s.MEDIA_LOADING,ha]}attributeChangedCallback(e,i,n){var a,r,o,l,d;e===ha&&i!==n?this.loadingDelay=Number(n):e===g.MEDIA_CONTROLLER&&(i&&((r=(a=Ue(this,oe))==null?void 0:a.unassociateElement)==null||r.call(a,this),xe(this,oe,null)),n&&this.isConnected&&(xe(this,oe,(o=this.getRootNode())==null?void 0:o.getElementById(n)),(d=(l=Ue(this,oe))==null?void 0:l.associateElement)==null||d.call(l,this)))}connectedCallback(){var e,i,n;let a=this.getAttribute(g.MEDIA_CONTROLLER);a&&(xe(this,oe,(e=this.getRootNode())==null?void 0:e.getElementById(a)),(n=(i=Ue(this,oe))==null?void 0:i.associateElement)==null||n.call(i,this))}disconnectedCallback(){var e,i;(i=(e=Ue(this,oe))==null?void 0:e.unassociateElement)==null||i.call(e,this),xe(this,oe,null)}get loadingDelay(){return Ue(this,zt)}set loadingDelay(e){xe(this,zt,e),Ue(this,Xt).setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${e}ms)`)}get mediaPaused(){return L(this,s.MEDIA_PAUSED)}set mediaPaused(e){S(this,s.MEDIA_PAUSED,e)}get mediaLoading(){return L(this,s.MEDIA_LOADING)}set mediaLoading(e){S(this,s.MEDIA_LOADING,e)}};oe=new WeakMap,zt=new WeakMap,Xt=new WeakMap,c.customElements.get("media-loading-indicator")||c.customElements.define("media-loading-indicator",bn);var gn=class extends bt{static get observedAttributes(){return[...super.observedAttributes,s.MEDIA_VOLUME,s.MEDIA_MUTED,s.MEDIA_VOLUME_UNAVAILABLE]}constructor(){super(),this.range.addEventListener("input",()=>{let e=this.range.value,i=new c.CustomEvent(E.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(i)})}connectedCallback(){super.connectedCallback(),this.range.setAttribute("aria-label",ue.VOLUME())}attributeChangedCallback(e,i,n){var a;super.attributeChangedCallback(e,i,n),e!==s.MEDIA_VOLUME&&e!==s.MEDIA_MUTED||(this.range.valueAsNumber=(a=this).mediaMuted?0:a.mediaVolume,this.range.setAttribute("aria-valuetext",(({value:r})=>`${Math.round(100*r)}%`)(this.range)),this.updateBar())}get mediaVolume(){return f(this,s.MEDIA_VOLUME,1)}set mediaVolume(e){R(this,s.MEDIA_VOLUME,e)}get mediaMuted(){return L(this,s.MEDIA_MUTED)}set mediaMuted(e){S(this,s.MEDIA_MUTED,e)}get mediaVolumeUnavailable(){return q(this,s.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(e){Z(this,s.MEDIA_VOLUME_UNAVAILABLE,e)}};c.customElements.get("media-volume-range")||c.customElements.define("media-volume-range",gn);import{jsx as ps}from"react/jsx-runtime";function vs({source:t,poster:e,aspectRatio:i}){return ps("div",{style:{aspectRatio:i},children:ps("div",{className:"farcaster-embed-video-player",suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`<media-controller>
            <hls-video
              src="${t}"
              slot="media"
              volume="1"
              crossorigin
              playsinline
            ></hls-video>
            <media-poster-image
              slot="poster"
              src="${e}">
            </media-poster-image>
            <media-loading-indicator slot="centered-chrome" noautohide></media-loading-indicator>
            <media-control-bar>
              <media-play-button></media-play-button>
              <media-time-range></media-time-range>
              <media-time-display showduration remaining></media-time-display>
              <media-fullscreen-button></media-fullscreen-button>
            </media-control-bar>
          </media-controller>`}})})}import{jsx as yn}from"react/jsx-runtime";function Dn({videos:t,client:e}){return yn("div",{className:"farcaster-embed-video-container",children:t.map(i=>e?yn(Pn,{source:i.sourceUrl,aspectRatio:i.width/i.height,poster:i.thumbnailUrl},i.url):yn(vs,{source:i.sourceUrl,aspectRatio:i.width/i.height,poster:i.thumbnailUrl},i.url))})}import{jsx as m,jsxs as A}from"react/jsx-runtime";var gs={className:"farcaster-embed-body-link",target:"_blank"};function Xs(t,e){if(t.endsWith(e)){let i=t.lastIndexOf(e),n=t.substring(0,i),a=n.lastIndexOf(`
`);return a!==-1&&(n=n.substring(0,a)+n.substring(a+1)),n+t.substring(i+e.length)}else return t}function As({cast:t,client:e,options:i}){let n=t.author,a=`https://warpcast.com/~/profiles/${n.fid}`,r=new Date(t.timestamp),o=r.toLocaleString(i.timestampLocale,i.timestampFormat),l=r.toLocaleString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit",second:"2-digit",hour12:!0}),d=`https://warpcast.com/${n.username}/${t.hash}`,u=t.replies&&t.replies.count,h=t.reactions&&t.reactions.count,v=t.combinedRecastCount?t.combinedRecastCount:t.recasts.count,k=t.watches&&t.watches.count,D=t.embeds&&t.embeds.images,z=D&&D.length>0,$=t.embeds&&t.embeds.videos&&t.embeds.videos.length>0,H=t.embeds&&t.embeds.videos,ye=t.embeds&&t.embeds.urls&&t.embeds.urls.length>0,de=t.embeds&&t.embeds.urls,be=de&&de[de.length-1]?.openGraph?.url||"",gt=t.embeds&&t.embeds.casts,Je=t.embeds&&t.embeds.casts;return A("div",{className:"not-prose farcaster-embed-container",children:[A("div",{children:[A("div",{className:"farcaster-embed-metadata",children:[m("a",{href:a,className:"farcaster-embed-avatar-link",children:m("img",{src:n.pfp.url,alt:`@${n.username}`,width:48,height:48,className:"farcaster-embed-author-avatar"})}),A("div",{className:"farcaster-embed-author",children:[m("p",{className:"farcaster-embed-author-display-name",children:n.displayName}),A("p",{className:"farcaster-embed-author-username",children:["@",n.username]})]}),m("div",{className:"farcaster-embed-timestamp",children:m("p",{title:l,children:o})})]}),A("div",{className:"farcaster-embed-body",children:[m(bs,{as:"p",options:gs,children:Xs(t.text,be)}),z&&m(vi,{images:D}),$&&m(Dn,{videos:H,client:e}),ye&&m("div",{className:"farcaster-embed-urls-container",children:de.map((_,mi)=>{let{description:De,domain:X,image:we,title:Re,url:At,useLargeImage:Ms}=_.openGraph||{},Ts=X==="twitter.com"||X==="t.co"||X==="x.com";return X==="warpcast.com"?null:Ms?A("a",{href:At,target:"_blank",className:"farcaster-embed-url-link",children:[we&&m("img",{src:we,alt:Re,className:"farcaster-embed-url-image"}),A("span",{className:"farcaster-embed-url-metadata",children:[m("span",{className:"farcaster-embed-url-title",children:Re}),De&&m("span",{className:"farcaster-embed-url-description",children:De}),X&&m("span",{className:"farcaster-embed-url-domain",children:X})]})]},mi):A("a",{href:At,target:"_blank",className:"farcaster-embed-url-link farcaster-embed-url-link-compact",children:[we&&!Ts&&m("img",{src:we,alt:Re,className:"farcaster-embed-url-image"}),A("span",{className:"farcaster-embed-url-metadata",children:[m("span",{className:"farcaster-embed-url-title",children:Re}),De&&m("span",{className:"farcaster-embed-url-description",children:De}),X&&m("span",{className:"farcaster-embed-url-domain",children:X})]})]},mi)})}),gt&&m("div",{className:"farcaster-embed-quote-cast-container",children:Je.map(_=>{let De=new Date(_.timestamp).toLocaleString(i.timestampLocale,i.timestampFormat),X=_.embeds&&_.embeds.images&&_.embeds.images.length>0,we=_.embeds&&_.embeds.images,Re=_.embeds&&_.embeds.videos&&_.embeds.videos.length>0,At=_.embeds&&_.embeds.videos;return A("div",{className:"farcaster-embed-quote-cast",children:[A("div",{className:"farcaster-embed-metadata",children:[m("div",{className:"farcaster-embed-avatar-link",children:m("img",{src:_.author.pfp.url,alt:`@${_.author.username}`,width:20,height:20,className:"farcaster-embed-author-avatar"})}),A("div",{className:"farcaster-embed-author",children:[m("p",{className:"farcaster-embed-author-display-name",children:_.author.displayName}),A("p",{className:"farcaster-embed-author-username",children:["@",_.author.username]})]}),m("div",{className:"farcaster-embed-timestamp",children:m("p",{children:De})})]}),A("div",{className:"farcaster-embed-body",children:[m(bs,{as:"p",options:gs,children:_.text}),X&&m(vi,{images:we}),Re&&m(Dn,{videos:At})]})]},_.hash)})})]}),t.tags.length>0&&m("div",{children:A("div",{className:"farcaster-embed-channel",children:[t.tags[0].imageUrl&&m("img",{src:t.tags[0].imageUrl,alt:t.tags[0].name,width:16,height:16,className:"farcaster-embed-channel-avatar"}),t.tags[0].name&&m("p",{className:"farcaster-embed-channel-name",children:t.tags[0].name})]})})]}),A("div",{className:"farcaster-embed-stats",children:[A("ul",{children:[m("li",{children:A("a",{className:"farcaster-embed-stats-link",href:d,target:"_blank",children:[m(wn,{}),m("span",{children:u.toLocaleString("en-US")})]})}),m("li",{children:A("a",{className:"farcaster-embed-stats-link",href:d,target:"_blank",children:[m(Rn,{}),m("span",{children:v.toLocaleString("en-US")})]})}),m("li",{children:A("a",{className:"farcaster-embed-stats-link",href:d,target:"_blank",children:[m(Cn,{}),m("span",{children:h.toLocaleString("en-US")})]})}),m("li",{children:A("a",{className:"farcaster-embed-stats-link",href:d,target:"_blank",children:[m(Nn,{}),m("span",{children:k.toLocaleString("en-US")})]})})]}),m("div",{className:"farcaster-embed-warpcast-icon",children:m("a",{href:d,title:"Show on Warpcast",target:"_blank",className:"farcaster-embed-warpcast-link",children:m(Un,{})})})]})]})}var Is=async(t,e,i)=>{try{let a=await(await fetch(i?.customEndpoint?`${i?.customEndpoint}/${t}/${e}`:`https://farcaster.tv/${t}/${e}`)).json();return a.result.casts[2]&&a.result.casts[2].author.username===t&&a.result.casts[2].hash.includes(e)?a.result.casts[2]:a.result.casts[0].castType==="root-embed"?a.result.casts[1]:a.result.casts[0]}catch(n){throw console.error(n),new Error(`Unable to fetch cast ${e} by ${t}.${i?.customEndpoint&&" You are using a custom endpoint ("+i?.customEndpoint+"). Make sure it is correct and the server is running. For more info about the proxy server check the README."}`)}};var _s={timestampFormat:{year:"numeric",month:"short",day:"numeric"},timestampLocale:"en-US"};import{jsx as Js}from"react/jsx-runtime";function Br({url:t,username:e,hash:i,castData:n,options:a}){let[r,o]=fs.useState(null);if(t){let l=t.split("/");e=l[3],i=l[4]}if(!n&&(!e||!i))throw new Error("You must provide a Warpcast URL or username and hash to embed a cast. Or provide your own castData to render the component.");return fs.useEffect(()=>{if(n){o(n);return}else(async()=>{let d=await Is(e,i);o(d)})()},[e,i,n]),r?Js(As,{cast:r,client:!0,options:{..._s,...a}}):null}export{Br as FarcasterEmbed};
//# sourceMappingURL=index.mjs.map