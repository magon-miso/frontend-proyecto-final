if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,t)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const f=e=>a(e,i),o={module:{uri:i},exports:c,require:f};s[i]=Promise.all(n.map((e=>o[e]||f(e)))).then((e=>(t(...e),c)))}}define(["./workbox-83b758e3"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/ZCOfbVo9QJ0xydfjqBuVA/_buildManifest.js",revision:"d7af164afef0e5b53876e60fab863dba"},{url:"/_next/static/ZCOfbVo9QJ0xydfjqBuVA/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/180-6896dd3f3f3f5029.js",revision:"ZCOfbVo9QJ0xydfjqBuVA"},{url:"/_next/static/chunks/181-aee1005629fae757.js",revision:"ZCOfbVo9QJ0xydfjqBuVA"},{url:"/_next/static/chunks/206-540cb1900b3e80c6.js",revision:"ZCOfbVo9QJ0xydfjqBuVA"},{url:"/_next/static/chunks/294-3ccafd6c3e8b7e60.js",revision:"ZCOfbVo9QJ0xydfjqBuVA"},{url:"/_next/static/chunks/316-f84915724a0b94a6.js",revision:"ZCOfbVo9QJ0xydfjqBuVA"},{url:"/_next/static/chunks/331-ec6341cdd0c8bc4f.js",revision:"ZCOfbVo9QJ0xydfjqBuVA"},{url:"/_next/static/chunks/382-4e530afa1c5f69a2.js",revision:"ZCOfbVo9QJ0xydfjqBuVA"},{url:"/_next/static/chunks/4-8d61e53ef30b9f68.js",revision:"ZCOfbVo9QJ0xydfjqBuVA"},{url:"/_next/static/chunks/428-3d4041fee501dea1.js",revision:"ZCOfbVo9QJ0xydfjqBuVA"},{url:"/_next/static/chunks/551-56c39261361b4fe5.js",revision:"ZCOfbVo9QJ0xydfjqBuVA"},{url:"/_next/static/chunks/581-9a1a0d1e676030a9.js",revision:"ZCOfbVo9QJ0xydfjqBuVA"},{url:"/_next/static/chunks/601-861035307504b1da.js",revision:"ZCOfbVo9QJ0xydfjqBuVA"},{url:"/_next/static/chunks/639-4e5dce4ffdd99bae.js",revision:"ZCOfbVo9QJ0xydfjqBuVA"},{url:"/_next/static/chunks/659-775a06f27310043a.js",revision:"ZCOfbVo9QJ0xydfjqBuVA"},{url:"/_next/static/chunks/741-b0f13ecdd1eb671c.js",revision:"ZCOfbVo9QJ0xydfjqBuVA"},{url:"/_next/static/chunks/749-1baf9f19260a4220.js",revision:"ZCOfbVo9QJ0xydfjqBuVA"},{url:"/_next/static/chunks/757-b818e12a4bd6cfd8.js",revision:"ZCOfbVo9QJ0xydfjqBuVA"},{url:"/_next/static/chunks/777-46351458a7d98835.js",revision:"ZCOfbVo9QJ0xydfjqBuVA"},{url:"/_next/static/chunks/781-f69fe7d9a4e40f51.js",revision:"ZCOfbVo9QJ0xydfjqBuVA"},{url:"/_next/static/chunks/842-35f39dd5e248a77c.js",revision:"ZCOfbVo9QJ0xydfjqBuVA"},{url:"/_next/static/chunks/874-99e089d3fd1e96d0.js",revision:"ZCOfbVo9QJ0xydfjqBuVA"},{url:"/_next/static/chunks/881-3a85065b51f6a9f4.js",revision:"ZCOfbVo9QJ0xydfjqBuVA"},{url:"/_next/static/chunks/893-a8997d6da7fb2f5f.js",revision:"ZCOfbVo9QJ0xydfjqBuVA"},{url:"/_next/static/chunks/90-ef4d0d6c93728c6b.js",revision:"ZCOfbVo9QJ0xydfjqBuVA"},{url:"/_next/static/chunks/961-8240abe22aabb250.js",revision:"ZCOfbVo9QJ0xydfjqBuVA"},{url:"/_next/static/chunks/975-45144b1a07ae43d6.js",revision:"ZCOfbVo9QJ0xydfjqBuVA"},{url:"/_next/static/chunks/99-1f169aeaa8d8322c.js",revision:"ZCOfbVo9QJ0xydfjqBuVA"},{url:"/_next/static/chunks/app/%5Blocale%5D/auth/layout-1ca609360e1a5dcc.js",revision:"ZCOfbVo9QJ0xydfjqBuVA"},{url:"/_next/static/chunks/app/%5Blocale%5D/auth/login/page-9d2739d30209bb1f.js",revision:"ZCOfbVo9QJ0xydfjqBuVA"},{url:"/_next/static/chunks/app/%5Blocale%5D/auth/page-8211b459ca76dacf.js",revision:"ZCOfbVo9QJ0xydfjqBuVA"},{url:"/_next/static/chunks/app/%5Blocale%5D/auth/register/candidate/page-ad0bd925792c514d.js",revision:"ZCOfbVo9QJ0xydfjqBuVA"},{url:"/_next/static/chunks/app/%5Blocale%5D/auth/register/company/page-88a9db9882582f6c.js",revision:"ZCOfbVo9QJ0xydfjqBuVA"},{url:"/_next/static/chunks/app/%5Blocale%5D/dashboard/assignTest/page-4a6c4a729657f33a.js",revision:"ZCOfbVo9QJ0xydfjqBuVA"},{url:"/_next/static/chunks/app/%5Blocale%5D/dashboard/candidateTest/page-ea41bba567c44a80.js",revision:"ZCOfbVo9QJ0xydfjqBuVA"},{url:"/_next/static/chunks/app/%5Blocale%5D/dashboard/layout-a6925c1a9fc2278a.js",revision:"ZCOfbVo9QJ0xydfjqBuVA"},{url:"/_next/static/chunks/app/%5Blocale%5D/dashboard/page-8355163abfc9a06a.js",revision:"ZCOfbVo9QJ0xydfjqBuVA"},{url:"/_next/static/chunks/app/%5Blocale%5D/dashboard/project/layout-3e0eb253f57592cc.js",revision:"ZCOfbVo9QJ0xydfjqBuVA"},{url:"/_next/static/chunks/app/%5Blocale%5D/dashboard/project/page-d6bc4a55a325234b.js",revision:"ZCOfbVo9QJ0xydfjqBuVA"},{url:"/_next/static/chunks/app/%5Blocale%5D/dashboard/questionsBank/page-ea5bd3470c4960c6.js",revision:"ZCOfbVo9QJ0xydfjqBuVA"},{url:"/_next/static/chunks/app/%5Blocale%5D/dashboard/searchCandidate/page-aef23852bcb5c42b.js",revision:"ZCOfbVo9QJ0xydfjqBuVA"},{url:"/_next/static/chunks/app/%5Blocale%5D/layout-3bf4639d76e7b228.js",revision:"ZCOfbVo9QJ0xydfjqBuVA"},{url:"/_next/static/chunks/app/%5Blocale%5D/page-d45cba99eb70c921.js",revision:"ZCOfbVo9QJ0xydfjqBuVA"},{url:"/_next/static/chunks/app/_not-found-26eb8818264172d1.js",revision:"ZCOfbVo9QJ0xydfjqBuVA"},{url:"/_next/static/chunks/fd9d1056-438aec331905b88b.js",revision:"ZCOfbVo9QJ0xydfjqBuVA"},{url:"/_next/static/chunks/framework-43665103d101a22d.js",revision:"ZCOfbVo9QJ0xydfjqBuVA"},{url:"/_next/static/chunks/main-3d6eb0b61d5878f6.js",revision:"ZCOfbVo9QJ0xydfjqBuVA"},{url:"/_next/static/chunks/main-app-6507d1f942e5a76c.js",revision:"ZCOfbVo9QJ0xydfjqBuVA"},{url:"/_next/static/chunks/pages/_app-6ca4a4ec31e39f3d.js",revision:"ZCOfbVo9QJ0xydfjqBuVA"},{url:"/_next/static/chunks/pages/_error-9de0d1f4f4d1fcb4.js",revision:"ZCOfbVo9QJ0xydfjqBuVA"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-36cb26dd9e4f1c10.js",revision:"ZCOfbVo9QJ0xydfjqBuVA"},{url:"/_next/static/css/d9f61a3e2d10d359.css",revision:"d9f61a3e2d10d359"},{url:"/_next/static/media/1c57ca6f5208a29b-s.woff2",revision:"491a7a9678c3cfd4f86c092c68480f23"},{url:"/_next/static/media/3dbd163d3bb09d47-s.p.woff2",revision:"93dcb0c222437699e9dd591d8b5a6b85"},{url:"/_next/static/media/5647e4c23315a2d2-s.woff2",revision:"e64969a373d0acf2586d1fd4224abb90"},{url:"/_next/static/media/7be645d133f3ee22-s.woff2",revision:"3ba6fb27a0ea92c2f1513add6dbddf37"},{url:"/_next/static/media/7c53f7419436e04b-s.woff2",revision:"fd4ff709e3581e3f62e40e90260a1ad7"},{url:"/_next/static/media/934c4b7cb736f2a3-s.woff2",revision:"1f6d3cf6d38f25d83d95f5a800b8cac3"},{url:"/_next/static/media/cff529cd86cc0276-s.woff2",revision:"c2b2c28b98016afb2cb7e029c23f1f9f"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
