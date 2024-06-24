var te=Object.create;var k=Object.defineProperty;var se=Object.getOwnPropertyDescriptor;var re=Object.getOwnPropertyNames;var ie=Object.getPrototypeOf,oe=Object.prototype.hasOwnProperty;var ne=(e,s)=>{for(var t in s)k(e,t,{get:s[t],enumerable:!0})},H=(e,s,t,i)=>{if(s&&typeof s=="object"||typeof s=="function")for(let r of re(s))!oe.call(e,r)&&r!==t&&k(e,r,{get:()=>s[r],enumerable:!(i=se(s,r))||i.enumerable});return e};var M=(e,s,t)=>(t=e!=null?te(ie(e)):{},H(s||!e||!e.__esModule?k(t,"default",{value:e,enumerable:!0}):t,e)),me=e=>H(k({},"__esModule",{value:!0}),e);var ce={};ne(ce,{FarcasterEmbed:()=>le});module.exports=me(ce);var Ce=require("server-only");var _=async(e,s,t)=>{try{let r=await(await fetch(t?.customEndpoint?`${t?.customEndpoint}/${e}/${s}`:`https://farcaster.tv/${e}/${s}`)).json();return r.result.casts[2]&&r.result.casts[2].author.username===e&&r.result.casts[2].hash.includes(s)?r.result.casts[2]:r.result.casts[0].castType==="root-embed"?r.result.casts[1]:r.result.casts[0]}catch(i){throw console.error(i),new Error(`Unable to fetch cast ${s} by ${e}.${t?.customEndpoint&&" You are using a custom endpoint ("+t?.customEndpoint+"). Make sure it is correct and the server is running. For more info about the proxy server check the README."}`)}};var U=M(require("linkify-react"));var n=require("react/jsx-runtime"),F=()=>(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,n.jsx)("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})}),R=()=>(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,n.jsx)("path",{d:"M17 2.1l4 4-4 4"}),(0,n.jsx)("path",{d:"M3 12.2v-2a4 4 0 0 1 4-4h12.8M7 21.9l-4-4 4-4"}),(0,n.jsx)("path",{d:"M21 11.8v2a4 4 0 0 1-4 4H4.2"})]}),O=()=>(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,n.jsx)("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})}),P=()=>(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,n.jsx)("path",{d:"M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"})}),W=()=>(0,n.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 1260 1260",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsxs)("g",{clipPath:"url(#fc-embed-clip1)",children:[(0,n.jsx)("path",{d:"M947.747 1259.61H311.861C139.901 1259.61 0 1119.72 0 947.752V311.871C0 139.907 139.901 0.00541362 311.861 0.00541362H947.747C1119.71 0.00541362 1259.61 139.907 1259.61 311.871V947.752C1259.61 1119.72 1119.71 1259.61 947.747 1259.61Z",fill:"#472A91"}),(0,n.jsx)("path",{d:"M826.513 398.633L764.404 631.889L702.093 398.633H558.697L495.789 633.607L433.087 398.633H269.764L421.528 914.36H562.431L629.807 674.876L697.181 914.36H838.388L989.819 398.633H826.513Z",fill:"white"})]}),(0,n.jsx)("defs",{children:(0,n.jsx)("clipPath",{id:"fc-embed-clip1",children:(0,n.jsx)("rect",{width:"1259.61",height:"1259.61",fill:"white"})})})]});var N=require("react/jsx-runtime");function x({images:e}){return(0,N.jsx)("div",{className:"farcaster-embed-image-container",children:e.map(s=>(0,N.jsx)("a",{href:s.url,target:"_blank",className:"farcaster-embed-image-link",children:(0,N.jsx)("img",{src:s.url,alt:s.alt,className:"farcaster-embed-image"})},s.url))})}var L=M(require("react")),S=require("react/jsx-runtime");function D({source:e,poster:s,aspectRatio:t}){let[i,r]=L.default.useState(!1),[p,h]=L.default.useState(!1),v=m=>new Promise((u,c)=>{let l=document.createElement("script");l.src=m,l.type="module",l.onload=()=>u(l),l.onerror=()=>c(new Error(`[react-farcaster-embed] Script load error for ${m}`)),document.head.appendChild(l)});return L.default.useEffect(()=>{let m="scripts/media-chrome.js",u="scripts/hls-video-element.js";return v(m).then(()=>{r(!0)}).catch(c=>{console.error("Media Chrome loading failed",c)}),v(u).then(()=>{h(!0)}).catch(c=>{console.error("HLS Video Element loading failed",c)}),()=>{document.head.removeChild(document.head.querySelector(`script[src="${m}"]`)),document.head.removeChild(document.head.querySelector(`script[src="${u}"]`))}},[e,s,t]),(0,S.jsx)("div",{style:{aspectRatio:t},children:i&&p&&(0,S.jsx)("div",{className:"farcaster-embed-video-player",dangerouslySetInnerHTML:{__html:`<media-controller>
            <hls-video
              src="${e}"
              slot="media"
              volume="1"
              crossorigin
              playsinline
            ></hls-video>
            <media-poster-image
              slot="poster"
              src="${s}">
            </media-poster-image>
            <media-loading-indicator slot="centered-chrome" noautohide></media-loading-indicator>
            <media-control-bar>
              <media-play-button></media-play-button>
              <media-time-range></media-time-range>
              <media-time-display showduration remaining></media-time-display>
              <media-fullscreen-button></media-fullscreen-button>
            </media-control-bar>
          </media-controller>`}})})}var V=require("react/jsx-runtime");function B({source:e,poster:s,aspectRatio:t}){return(0,V.jsx)("div",{style:{aspectRatio:t},children:(0,V.jsx)("div",{className:"farcaster-embed-video-player",suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`<media-controller>
            <hls-video
              src="${e}"
              slot="media"
              volume="1"
              crossorigin
              playsinline
            ></hls-video>
            <media-poster-image
              slot="poster"
              src="${s}">
            </media-poster-image>
            <media-loading-indicator slot="centered-chrome" noautohide></media-loading-indicator>
            <media-control-bar>
              <media-play-button></media-play-button>
              <media-time-range></media-time-range>
              <media-time-display showduration remaining></media-time-display>
              <media-fullscreen-button></media-fullscreen-button>
            </media-control-bar>
          </media-controller>`}})})}var E=require("react/jsx-runtime");function $({videos:e,client:s}){return(0,E.jsx)("div",{className:"farcaster-embed-video-container",children:e.map(t=>s?(0,E.jsx)(D,{source:t.sourceUrl,aspectRatio:t.width/t.height,poster:t.thumbnailUrl},t.url):(0,E.jsx)(B,{source:t.sourceUrl,aspectRatio:t.width/t.height,poster:t.thumbnailUrl},t.url))})}var a=require("react/jsx-runtime"),T={className:"farcaster-embed-body-link",target:"_blank"};function de(e,s){if(e.endsWith(s)){let t=e.lastIndexOf(s),i=e.substring(0,t),r=i.lastIndexOf(`
`);return r!==-1&&(i=i.substring(0,r)+i.substring(r+1)),i+e.substring(t+s.length)}else return e}function A({cast:e,client:s,options:t}){let i=e.author,r=`https://warpcast.com/~/profiles/${i.fid}`,p=new Date(e.timestamp),h=p.toLocaleString(t.timestampLocale,t.timestampFormat),v=p.toLocaleString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit",second:"2-digit",hour12:!0}),m=`https://warpcast.com/${i.username}/${e.hash}`,u=e.replies&&e.replies.count,c=e.reactions&&e.reactions.count,l=e.combinedRecastCount?e.combinedRecastCount:e.recasts.count,Y=e.watches&&e.watches.count,I=e.embeds&&e.embeds.images,Z=I&&I.length>0,j=e.embeds&&e.embeds.videos&&e.embeds.videos.length>0,J=e.embeds&&e.embeds.videos,K=e.embeds&&e.embeds.urls&&e.embeds.urls.length>0,w=e.embeds&&e.embeds.urls,Q=w&&w[w.length-1]?.openGraph?.url||"",X=e.embeds&&e.embeds.casts,q=e.embeds&&e.embeds.casts;return(0,a.jsxs)("div",{className:"not-prose farcaster-embed-container",children:[(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"farcaster-embed-metadata",children:[(0,a.jsx)("a",{href:r,className:"farcaster-embed-avatar-link",children:(0,a.jsx)("img",{src:i.pfp.url,alt:`@${i.username}`,width:48,height:48,className:"farcaster-embed-author-avatar"})}),(0,a.jsxs)("div",{className:"farcaster-embed-author",children:[(0,a.jsx)("p",{className:"farcaster-embed-author-display-name",children:i.displayName}),(0,a.jsxs)("p",{className:"farcaster-embed-author-username",children:["@",i.username]})]}),(0,a.jsx)("div",{className:"farcaster-embed-timestamp",children:(0,a.jsx)("p",{title:v,children:h})})]}),(0,a.jsxs)("div",{className:"farcaster-embed-body",children:[(0,a.jsx)(U.default,{as:"p",options:T,children:de(e.text,Q)}),Z&&(0,a.jsx)(x,{images:I}),j&&(0,a.jsx)($,{videos:J,client:s}),K&&(0,a.jsx)("div",{className:"farcaster-embed-urls-container",children:w.map((o,C)=>{let{description:g,domain:d,image:b,title:f,url:y,useLargeImage:ee}=o.openGraph||{},ae=d==="twitter.com"||d==="t.co"||d==="x.com";return d==="warpcast.com"?null:ee?(0,a.jsxs)("a",{href:y,target:"_blank",className:"farcaster-embed-url-link",children:[b&&(0,a.jsx)("img",{src:b,alt:f,className:"farcaster-embed-url-image"}),(0,a.jsxs)("span",{className:"farcaster-embed-url-metadata",children:[(0,a.jsx)("span",{className:"farcaster-embed-url-title",children:f}),g&&(0,a.jsx)("span",{className:"farcaster-embed-url-description",children:g}),d&&(0,a.jsx)("span",{className:"farcaster-embed-url-domain",children:d})]})]},C):(0,a.jsxs)("a",{href:y,target:"_blank",className:"farcaster-embed-url-link farcaster-embed-url-link-compact",children:[b&&!ae&&(0,a.jsx)("img",{src:b,alt:f,className:"farcaster-embed-url-image"}),(0,a.jsxs)("span",{className:"farcaster-embed-url-metadata",children:[(0,a.jsx)("span",{className:"farcaster-embed-url-title",children:f}),g&&(0,a.jsx)("span",{className:"farcaster-embed-url-description",children:g}),d&&(0,a.jsx)("span",{className:"farcaster-embed-url-domain",children:d})]})]},C)})}),X&&(0,a.jsx)("div",{className:"farcaster-embed-quote-cast-container",children:q.map(o=>{let g=new Date(o.timestamp).toLocaleString(t.timestampLocale,t.timestampFormat),d=o.embeds&&o.embeds.images&&o.embeds.images.length>0,b=o.embeds&&o.embeds.images,f=o.embeds&&o.embeds.videos&&o.embeds.videos.length>0,y=o.embeds&&o.embeds.videos;return(0,a.jsxs)("div",{className:"farcaster-embed-quote-cast",children:[(0,a.jsxs)("div",{className:"farcaster-embed-metadata",children:[(0,a.jsx)("div",{className:"farcaster-embed-avatar-link",children:(0,a.jsx)("img",{src:o.author.pfp.url,alt:`@${o.author.username}`,width:20,height:20,className:"farcaster-embed-author-avatar"})}),(0,a.jsxs)("div",{className:"farcaster-embed-author",children:[(0,a.jsx)("p",{className:"farcaster-embed-author-display-name",children:o.author.displayName}),(0,a.jsxs)("p",{className:"farcaster-embed-author-username",children:["@",o.author.username]})]}),(0,a.jsx)("div",{className:"farcaster-embed-timestamp",children:(0,a.jsx)("p",{children:g})})]}),(0,a.jsxs)("div",{className:"farcaster-embed-body",children:[(0,a.jsx)(U.default,{as:"p",options:T,children:o.text}),d&&(0,a.jsx)(x,{images:b}),f&&(0,a.jsx)($,{videos:y})]})]},o.hash)})})]}),e.tags.length>0&&(0,a.jsx)("div",{children:(0,a.jsxs)("div",{className:"farcaster-embed-channel",children:[e.tags[0].imageUrl&&(0,a.jsx)("img",{src:e.tags[0].imageUrl,alt:e.tags[0].name,width:16,height:16,className:"farcaster-embed-channel-avatar"}),e.tags[0].name&&(0,a.jsx)("p",{className:"farcaster-embed-channel-name",children:e.tags[0].name})]})})]}),(0,a.jsxs)("div",{className:"farcaster-embed-stats",children:[(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsxs)("a",{className:"farcaster-embed-stats-link",href:m,target:"_blank",children:[(0,a.jsx)(F,{}),(0,a.jsx)("span",{children:u.toLocaleString("en-US")})]})}),(0,a.jsx)("li",{children:(0,a.jsxs)("a",{className:"farcaster-embed-stats-link",href:m,target:"_blank",children:[(0,a.jsx)(R,{}),(0,a.jsx)("span",{children:l.toLocaleString("en-US")})]})}),(0,a.jsx)("li",{children:(0,a.jsxs)("a",{className:"farcaster-embed-stats-link",href:m,target:"_blank",children:[(0,a.jsx)(O,{}),(0,a.jsx)("span",{children:c.toLocaleString("en-US")})]})}),(0,a.jsx)("li",{children:(0,a.jsxs)("a",{className:"farcaster-embed-stats-link",href:m,target:"_blank",children:[(0,a.jsx)(P,{}),(0,a.jsx)("span",{children:Y.toLocaleString("en-US")})]})})]}),(0,a.jsx)("div",{className:"farcaster-embed-warpcast-icon",children:(0,a.jsx)("a",{href:m,title:"Show on Warpcast",target:"_blank",className:"farcaster-embed-warpcast-link",children:(0,a.jsx)(W,{})})})]})]})}var z={timestampFormat:{year:"numeric",month:"short",day:"numeric"},timestampLocale:"en-US"};var G=require("react/jsx-runtime");async function le({url:e,username:s,hash:t,castData:i,options:r}){if(e){let h=e.split("/");s=h[3],t=h[4]}if(!i&&(!s||!t))throw new Error("You must provide a Warpcast URL or username and hash to embed a cast. Or provide your own castData to render the component.");let p=i??await _(s,t,{customEndpoint:r?.customEndpoint});return(0,G.jsx)(A,{cast:p,options:{...z,...r}})}0&&(module.exports={FarcasterEmbed});
//# sourceMappingURL=index.js.map