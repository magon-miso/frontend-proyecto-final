if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,t)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const r=e=>a(e,i),u={module:{uri:i},exports:c,require:r};s[i]=Promise.all(n.map((e=>u[e]||r(e)))).then((e=>(t(...e),c)))}}define(["./workbox-83b758e3"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/Kk_PWNuF2-wH7TF6gFU9r/_buildManifest.js",revision:"d7af164afef0e5b53876e60fab863dba"},{url:"/_next/static/Kk_PWNuF2-wH7TF6gFU9r/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/144-316022f8482275a8.js",revision:"Kk_PWNuF2-wH7TF6gFU9r"},{url:"/_next/static/chunks/160-1ded684a63a01539.js",revision:"Kk_PWNuF2-wH7TF6gFU9r"},{url:"/_next/static/chunks/180-6896dd3f3f3f5029.js",revision:"Kk_PWNuF2-wH7TF6gFU9r"},{url:"/_next/static/chunks/274-2d66acce827277e5.js",revision:"Kk_PWNuF2-wH7TF6gFU9r"},{url:"/_next/static/chunks/341-e85bcc5c012f3d4c.js",revision:"Kk_PWNuF2-wH7TF6gFU9r"},{url:"/_next/static/chunks/44-3bd6261d975d6e3e.js",revision:"Kk_PWNuF2-wH7TF6gFU9r"},{url:"/_next/static/chunks/502-6436b0556f0dcf01.js",revision:"Kk_PWNuF2-wH7TF6gFU9r"},{url:"/_next/static/chunks/516-b6a6550bdb29987f.js",revision:"Kk_PWNuF2-wH7TF6gFU9r"},{url:"/_next/static/chunks/628-00999bae9736123c.js",revision:"Kk_PWNuF2-wH7TF6gFU9r"},{url:"/_next/static/chunks/688-3c79f483412f65e0.js",revision:"Kk_PWNuF2-wH7TF6gFU9r"},{url:"/_next/static/chunks/749-8eee4af722f7cfc5.js",revision:"Kk_PWNuF2-wH7TF6gFU9r"},{url:"/_next/static/chunks/795-4a08d6a52af5ef65.js",revision:"Kk_PWNuF2-wH7TF6gFU9r"},{url:"/_next/static/chunks/800-31cee3c5876ff8a5.js",revision:"Kk_PWNuF2-wH7TF6gFU9r"},{url:"/_next/static/chunks/842-a0d0142ee804f494.js",revision:"Kk_PWNuF2-wH7TF6gFU9r"},{url:"/_next/static/chunks/849-27f9a600b68c79b9.js",revision:"Kk_PWNuF2-wH7TF6gFU9r"},{url:"/_next/static/chunks/861-fe53da2409a2c09d.js",revision:"Kk_PWNuF2-wH7TF6gFU9r"},{url:"/_next/static/chunks/874-99e089d3fd1e96d0.js",revision:"Kk_PWNuF2-wH7TF6gFU9r"},{url:"/_next/static/chunks/975-b2bd6375eb6fb566.js",revision:"Kk_PWNuF2-wH7TF6gFU9r"},{url:"/_next/static/chunks/app/%5Blocale%5D/auth/login/page-c0214bea189f791a.js",revision:"Kk_PWNuF2-wH7TF6gFU9r"},{url:"/_next/static/chunks/app/%5Blocale%5D/auth/register/candidate/page-cc9b0b797cdfabde.js",revision:"Kk_PWNuF2-wH7TF6gFU9r"},{url:"/_next/static/chunks/app/%5Blocale%5D/auth/register/company/page-8c9a8183e4975f29.js",revision:"Kk_PWNuF2-wH7TF6gFU9r"},{url:"/_next/static/chunks/app/%5Blocale%5D/auth/register/layout-0985ca93ee081fb8.js",revision:"Kk_PWNuF2-wH7TF6gFU9r"},{url:"/_next/static/chunks/app/%5Blocale%5D/dashboard/layout-16159dba5802b8a9.js",revision:"Kk_PWNuF2-wH7TF6gFU9r"},{url:"/_next/static/chunks/app/%5Blocale%5D/dashboard/page-4bba89753019733a.js",revision:"Kk_PWNuF2-wH7TF6gFU9r"},{url:"/_next/static/chunks/app/%5Blocale%5D/dashboard/project/layout-04461c4232bf4c40.js",revision:"Kk_PWNuF2-wH7TF6gFU9r"},{url:"/_next/static/chunks/app/%5Blocale%5D/dashboard/project/page-62e3a460223a0590.js",revision:"Kk_PWNuF2-wH7TF6gFU9r"},{url:"/_next/static/chunks/app/%5Blocale%5D/dashboard/searchCandidate/page-4fece8cc2148121f.js",revision:"Kk_PWNuF2-wH7TF6gFU9r"},{url:"/_next/static/chunks/app/%5Blocale%5D/layout-f0f589b8c53b3407.js",revision:"Kk_PWNuF2-wH7TF6gFU9r"},{url:"/_next/static/chunks/app/%5Blocale%5D/page-ffbfcc48dfb035f5.js",revision:"Kk_PWNuF2-wH7TF6gFU9r"},{url:"/_next/static/chunks/app/_not-found-26eb8818264172d1.js",revision:"Kk_PWNuF2-wH7TF6gFU9r"},{url:"/_next/static/chunks/fd9d1056-438aec331905b88b.js",revision:"Kk_PWNuF2-wH7TF6gFU9r"},{url:"/_next/static/chunks/framework-43665103d101a22d.js",revision:"Kk_PWNuF2-wH7TF6gFU9r"},{url:"/_next/static/chunks/main-6831b27eaee28594.js",revision:"Kk_PWNuF2-wH7TF6gFU9r"},{url:"/_next/static/chunks/main-app-6507d1f942e5a76c.js",revision:"Kk_PWNuF2-wH7TF6gFU9r"},{url:"/_next/static/chunks/pages/_app-6ca4a4ec31e39f3d.js",revision:"Kk_PWNuF2-wH7TF6gFU9r"},{url:"/_next/static/chunks/pages/_error-9de0d1f4f4d1fcb4.js",revision:"Kk_PWNuF2-wH7TF6gFU9r"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-68b2152fb03d2ab8.js",revision:"Kk_PWNuF2-wH7TF6gFU9r"},{url:"/_next/static/css/d9f61a3e2d10d359.css",revision:"d9f61a3e2d10d359"},{url:"/_next/static/media/1c57ca6f5208a29b-s.woff2",revision:"491a7a9678c3cfd4f86c092c68480f23"},{url:"/_next/static/media/3dbd163d3bb09d47-s.p.woff2",revision:"93dcb0c222437699e9dd591d8b5a6b85"},{url:"/_next/static/media/5647e4c23315a2d2-s.woff2",revision:"e64969a373d0acf2586d1fd4224abb90"},{url:"/_next/static/media/7be645d133f3ee22-s.woff2",revision:"3ba6fb27a0ea92c2f1513add6dbddf37"},{url:"/_next/static/media/7c53f7419436e04b-s.woff2",revision:"fd4ff709e3581e3f62e40e90260a1ad7"},{url:"/_next/static/media/934c4b7cb736f2a3-s.woff2",revision:"1f6d3cf6d38f25d83d95f5a800b8cac3"},{url:"/_next/static/media/cff529cd86cc0276-s.woff2",revision:"c2b2c28b98016afb2cb7e029c23f1f9f"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
