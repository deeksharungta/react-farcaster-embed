var te=Object.create;var v=Object.defineProperty;var se=Object.getOwnPropertyDescriptor;var re=Object.getOwnPropertyNames;var ie=Object.getPrototypeOf,oe=Object.prototype.hasOwnProperty;var ne=(e,s)=>{for(var t in s)v(e,t,{get:s[t],enumerable:!0})},H=(e,s,t,r)=>{if(s&&typeof s=="object"||typeof s=="function")for(let i of re(s))!oe.call(e,i)&&i!==t&&v(e,i,{get:()=>s[i],enumerable:!(r=se(s,i))||r.enumerable});return e};var M=(e,s,t)=>(t=e!=null?te(ie(e)):{},H(s||!e||!e.__esModule?v(t,"default",{value:e,enumerable:!0}):t,e)),me=e=>H(v({},"__esModule",{value:!0}),e);var ce={};ne(ce,{FarcasterEmbed:()=>le});module.exports=me(ce);var xe=require("server-only");var R=async(e,s,t)=>{try{let i=await(await fetch(t?.customEndpoint?`${t?.customEndpoint}/${e}/${s}`:`https://farcaster.tv/${e}/${s}`)).json();return i.result.casts[2]&&i.result.casts[2].author.username===e&&i.result.casts[2].hash.includes(s)?i.result.casts[2]:i.result.casts[0].castType==="root-embed"?i.result.casts[1]:i.result.casts[0]}catch(r){throw console.error(r),new Error(`Unable to fetch cast ${s} by ${e}.${t?.customEndpoint&&" You are using a custom endpoint ("+t?.customEndpoint+"). Make sure it is correct and the server is running. For more info about the proxy server check the README."}`)}};var V=M(require("linkify-react"));var n=require("react/jsx-runtime"),_=()=>(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,n.jsx)("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})}),F=()=>(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,n.jsx)("path",{d:"M17 2.1l4 4-4 4"}),(0,n.jsx)("path",{d:"M3 12.2v-2a4 4 0 0 1 4-4h12.8M7 21.9l-4-4 4-4"}),(0,n.jsx)("path",{d:"M21 11.8v2a4 4 0 0 1-4 4H4.2"})]}),O=()=>(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,n.jsx)("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})}),P=()=>(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,n.jsx)("path",{d:"M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"})}),W=()=>(0,n.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 1260 1260",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsxs)("g",{clipPath:"url(#fc-embed-clip1)",children:[(0,n.jsx)("path",{d:"M947.747 1259.61H311.861C139.901 1259.61 0 1119.72 0 947.752V311.871C0 139.907 139.901 0.00541362 311.861 0.00541362H947.747C1119.71 0.00541362 1259.61 139.907 1259.61 311.871V947.752C1259.61 1119.72 1119.71 1259.61 947.747 1259.61Z",fill:"#472A91"}),(0,n.jsx)("path",{d:"M826.513 398.633L764.404 631.889L702.093 398.633H558.697L495.789 633.607L433.087 398.633H269.764L421.528 914.36H562.431L629.807 674.876L697.181 914.36H838.388L989.819 398.633H826.513Z",fill:"white"})]}),(0,n.jsx)("defs",{children:(0,n.jsx)("clipPath",{id:"fc-embed-clip1",children:(0,n.jsx)("rect",{width:"1259.61",height:"1259.61",fill:"white"})})})]});var w=require("react/jsx-runtime");function E({images:e}){return(0,w.jsx)("div",{className:"farcaster-embed-image-container",children:e.map(s=>(0,w.jsx)("a",{href:s.url,target:"_blank",className:"farcaster-embed-image-link",children:(0,w.jsx)("img",{src:s.url,alt:s.alt,className:"farcaster-embed-image"})},s.url))})}var x=M(require("react")),C=require("react/jsx-runtime");function D({source:e,poster:s,aspectRatio:t}){let[r,i]=x.default.useState(!0),[c,g]=x.default.useState(!0),$=d=>new Promise((k,N)=>{let l=document.createElement("script");l.src=d,l.type="module",l.onload=()=>k(l),l.onerror=()=>N(new Error(`[react-farcaster-embed] Script load error for ${d}`)),document.head.appendChild(l)});return(0,C.jsx)("div",{style:{aspectRatio:t},children:r&&c&&(0,C.jsx)("div",{className:"farcaster-embed-video-player",dangerouslySetInnerHTML:{__html:`<media-controller>
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
          </media-controller>`}})})}var S=require("react/jsx-runtime");function B({source:e,poster:s,aspectRatio:t}){return(0,S.jsx)("div",{style:{aspectRatio:t},children:(0,S.jsx)("div",{className:"farcaster-embed-video-player",suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`<script type="module" src="https://cdn.jsdelivr.net/npm/media-chrome@1/+esm" crossorigin="anonymous"></script><script type="module" src="https://cdn.jsdelivr.net/npm/hls-video-element@1.0/+esm" crossorigin="anonymous"></script><media-controller>
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
          </media-controller>`}})})}var y=require("react/jsx-runtime");function U({videos:e,client:s}){return(0,y.jsx)("div",{className:"farcaster-embed-video-container",children:e.map(t=>s?(0,y.jsx)(D,{source:t.sourceUrl,aspectRatio:t.width/t.height,poster:t.thumbnailUrl},t.url):(0,y.jsx)(B,{source:t.sourceUrl,aspectRatio:t.width/t.height,poster:t.thumbnailUrl},t.url))})}var a=require("react/jsx-runtime"),T={className:"farcaster-embed-body-link",target:"_blank"};function de(e,s){if(e.endsWith(s)){let t=e.lastIndexOf(s),r=e.substring(0,t),i=r.lastIndexOf(`
`);return i!==-1&&(r=r.substring(0,i)+r.substring(i+1)),r+e.substring(t+s.length)}else return e}function A({cast:e,client:s,options:t}){let r=e.author,i=`https://warpcast.com/~/profiles/${r.fid}`,c=new Date(e.timestamp),g=c.toLocaleString(t.timestampLocale,t.timestampFormat),$=c.toLocaleString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit",second:"2-digit",hour12:!0}),d=`https://warpcast.com/${r.username}/${e.hash}`,k=e.replies&&e.replies.count,N=e.reactions&&e.reactions.count,l=e.combinedRecastCount?e.combinedRecastCount:e.recasts.count,Y=e.watches&&e.watches.count,L=e.embeds&&e.embeds.images,Z=L&&L.length>0,j=e.embeds&&e.embeds.videos&&e.embeds.videos.length>0,J=e.embeds&&e.embeds.videos,K=e.embeds&&e.embeds.urls&&e.embeds.urls.length>0,b=e.embeds&&e.embeds.urls,Q=b&&b[b.length-1]?.openGraph?.url||"",X=e.embeds&&e.embeds.casts,q=e.embeds&&e.embeds.casts;return(0,a.jsxs)("div",{className:"not-prose farcaster-embed-container",children:[(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"farcaster-embed-metadata",children:[(0,a.jsx)("a",{href:i,className:"farcaster-embed-avatar-link",children:(0,a.jsx)("img",{src:r.pfp.url,alt:`@${r.username}`,width:48,height:48,className:"farcaster-embed-author-avatar"})}),(0,a.jsxs)("div",{className:"farcaster-embed-author",children:[(0,a.jsx)("p",{className:"farcaster-embed-author-display-name",children:r.displayName}),(0,a.jsxs)("p",{className:"farcaster-embed-author-username",children:["@",r.username]})]}),(0,a.jsx)("div",{className:"farcaster-embed-timestamp",children:(0,a.jsx)("p",{title:$,children:g})})]}),(0,a.jsxs)("div",{className:"farcaster-embed-body",children:[(0,a.jsx)(V.default,{as:"p",options:T,children:de(e.text,Q)}),Z&&(0,a.jsx)(E,{images:L}),j&&(0,a.jsx)(U,{videos:J,client:s}),K&&(0,a.jsx)("div",{className:"farcaster-embed-urls-container",children:b.map((o,I)=>{let{description:p,domain:m,image:u,title:h,url:f,useLargeImage:ee}=o.openGraph||{},ae=m==="twitter.com"||m==="t.co"||m==="x.com";return m==="warpcast.com"?null:ee?(0,a.jsxs)("a",{href:f,target:"_blank",className:"farcaster-embed-url-link",children:[u&&(0,a.jsx)("img",{src:u,alt:h,className:"farcaster-embed-url-image"}),(0,a.jsxs)("span",{className:"farcaster-embed-url-metadata",children:[(0,a.jsx)("span",{className:"farcaster-embed-url-title",children:h}),p&&(0,a.jsx)("span",{className:"farcaster-embed-url-description",children:p}),m&&(0,a.jsx)("span",{className:"farcaster-embed-url-domain",children:m})]})]},I):(0,a.jsxs)("a",{href:f,target:"_blank",className:"farcaster-embed-url-link farcaster-embed-url-link-compact",children:[u&&!ae&&(0,a.jsx)("img",{src:u,alt:h,className:"farcaster-embed-url-image"}),(0,a.jsxs)("span",{className:"farcaster-embed-url-metadata",children:[(0,a.jsx)("span",{className:"farcaster-embed-url-title",children:h}),p&&(0,a.jsx)("span",{className:"farcaster-embed-url-description",children:p}),m&&(0,a.jsx)("span",{className:"farcaster-embed-url-domain",children:m})]})]},I)})}),X&&(0,a.jsx)("div",{className:"farcaster-embed-quote-cast-container",children:q.map(o=>{let p=new Date(o.timestamp).toLocaleString(t.timestampLocale,t.timestampFormat),m=o.embeds&&o.embeds.images&&o.embeds.images.length>0,u=o.embeds&&o.embeds.images,h=o.embeds&&o.embeds.videos&&o.embeds.videos.length>0,f=o.embeds&&o.embeds.videos;return(0,a.jsxs)("div",{className:"farcaster-embed-quote-cast",children:[(0,a.jsxs)("div",{className:"farcaster-embed-metadata",children:[(0,a.jsx)("div",{className:"farcaster-embed-avatar-link",children:(0,a.jsx)("img",{src:o.author.pfp.url,alt:`@${o.author.username}`,width:20,height:20,className:"farcaster-embed-author-avatar"})}),(0,a.jsxs)("div",{className:"farcaster-embed-author",children:[(0,a.jsx)("p",{className:"farcaster-embed-author-display-name",children:o.author.displayName}),(0,a.jsxs)("p",{className:"farcaster-embed-author-username",children:["@",o.author.username]})]}),(0,a.jsx)("div",{className:"farcaster-embed-timestamp",children:(0,a.jsx)("p",{children:p})})]}),(0,a.jsxs)("div",{className:"farcaster-embed-body",children:[(0,a.jsx)(V.default,{as:"p",options:T,children:o.text}),m&&(0,a.jsx)(E,{images:u}),h&&(0,a.jsx)(U,{videos:f})]})]},o.hash)})})]}),e.tags.length>0&&(0,a.jsx)("div",{children:(0,a.jsxs)("div",{className:"farcaster-embed-channel",children:[e.tags[0].imageUrl&&(0,a.jsx)("img",{src:e.tags[0].imageUrl,alt:e.tags[0].name,width:16,height:16,className:"farcaster-embed-channel-avatar"}),e.tags[0].name&&(0,a.jsx)("p",{className:"farcaster-embed-channel-name",children:e.tags[0].name})]})})]}),(0,a.jsxs)("div",{className:"farcaster-embed-stats",children:[(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsxs)("a",{className:"farcaster-embed-stats-link",href:d,target:"_blank",children:[(0,a.jsx)(_,{}),(0,a.jsx)("span",{children:k.toLocaleString("en-US")})]})}),(0,a.jsx)("li",{children:(0,a.jsxs)("a",{className:"farcaster-embed-stats-link",href:d,target:"_blank",children:[(0,a.jsx)(F,{}),(0,a.jsx)("span",{children:l.toLocaleString("en-US")})]})}),(0,a.jsx)("li",{children:(0,a.jsxs)("a",{className:"farcaster-embed-stats-link",href:d,target:"_blank",children:[(0,a.jsx)(O,{}),(0,a.jsx)("span",{children:N.toLocaleString("en-US")})]})}),(0,a.jsx)("li",{children:(0,a.jsxs)("a",{className:"farcaster-embed-stats-link",href:d,target:"_blank",children:[(0,a.jsx)(P,{}),(0,a.jsx)("span",{children:Y.toLocaleString("en-US")})]})})]}),(0,a.jsx)("div",{className:"farcaster-embed-warpcast-icon",children:(0,a.jsx)("a",{href:d,title:"Show on Warpcast",target:"_blank",className:"farcaster-embed-warpcast-link",children:(0,a.jsx)(W,{})})})]})]})}var z={timestampFormat:{year:"numeric",month:"short",day:"numeric"},timestampLocale:"en-US"};var G=require("react/jsx-runtime");async function le({url:e,username:s,hash:t,castData:r,options:i}){if(e){let g=e.split("/");s=g[3],t=g[4]}if(!r&&(!s||!t))throw new Error("You must provide a Warpcast URL or username and hash to embed a cast. Or provide your own castData to render the component.");let c=r??await R(s,t,{customEndpoint:i?.customEndpoint});return(0,G.jsx)(A,{cast:c,options:{...z,...i}})}0&&(module.exports={FarcasterEmbed});
//# sourceMappingURL=index.js.map