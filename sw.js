if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,t)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let r={};const l=e=>i(e,o),c={module:{uri:o},exports:r,require:l};s[o]=Promise.all(n.map((e=>c[e]||l(e)))).then((e=>(t(...e),r)))}}define(["./workbox-e3490c72"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-BsUbZpQq.js",revision:null},{url:"assets/index-CjZHssJt.css",revision:null},{url:"assets/Notifications-D8oPNgtd.css",revision:null},{url:"assets/Notifications.component-DvM8aGBS.js",revision:null},{url:"index.html",revision:"b1e9c04306819f849edba29fffbfe570"},{url:"registerSW.js",revision:"a222779d9c96645937c25c0e9c60d33a"},{url:"manifest.webmanifest",revision:"2e08e46d5fd8e26dd85de5e58f7d36c8"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));