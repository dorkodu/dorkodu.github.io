if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,i)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const a=s=>l(s,r),o={module:{uri:r},exports:u,require:a};e[r]=Promise.all(n.map((s=>o[s]||a(s)))).then((s=>(i(...s),u)))}}define(["./workbox-4de3aa5f"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"apple-touch-icon.png",revision:"e171230c06e059996ed4ee1e977dd43c"},{url:"assets/alien_3d-7b2318a6.png",revision:null},{url:"assets/alien_monster_3d-b4c7568f.png",revision:null},{url:"assets/Avatar-0512ac96.js",revision:null},{url:"assets/baby_3d_default-a9f27d8a.png",revision:null},{url:"assets/backpack_3d-f4b1256c.png",revision:null},{url:"assets/Backpack-f080ca4b.js",revision:null},{url:"assets/Battle-36f9a5d8.js",revision:null},{url:"assets/beaming_face_with_smiling_eyes_3d-043c9fce.png",revision:null},{url:"assets/blossom_3d-2ff4c540.png",revision:null},{url:"assets/blue_square_3d-c3deae4a.png",revision:null},{url:"assets/boy_3d_default-f117e434.png",revision:null},{url:"assets/brown_square_3d-74b43416.png",revision:null},{url:"assets/bullseye_3d-2b2a2d9e.png",revision:null},{url:"assets/Button-2e435760.js",revision:null},{url:"assets/cactus_3d-29b605a5.png",revision:null},{url:"assets/cat_face_3d-d930f2ae.png",revision:null},{url:"assets/circus_tent_3d-09562f21.png",revision:null},{url:"assets/Clan-5aa076ea.js",revision:null},{url:"assets/classical_building_3d-b2a54a07.png",revision:null},{url:"assets/clown_face_3d-9a4c1f94.png",revision:null},{url:"assets/coin_3d-17e2a0c2.png",revision:null},{url:"assets/createReactComponent-e05d64ef.js",revision:null},{url:"assets/crossed_swords_3d-342d82ff.png",revision:null},{url:"assets/deciduous_tree_3d-3c13998c.png",revision:null},{url:"assets/dog_face_3d-7db4c311.png",revision:null},{url:"assets/egg_3d-efc307f3.png",revision:null},{url:"assets/Events-ad43f451.js",revision:null},{url:"assets/fog_3d-c2e5d1d2.png",revision:null},{url:"assets/Game-dedea30f.js",revision:null},{url:"assets/game-f5e190a9.js",revision:null},{url:"assets/gear_3d-415296d4.png",revision:null},{url:"assets/gem_stone_3d-50dd4109.png",revision:null},{url:"assets/get-floating-position-717958fa.js",revision:null},{url:"assets/get-styles-ref-1f22bf7e.js",revision:null},{url:"assets/girl_3d_default-8149bb3e.png",revision:null},{url:"assets/green_square_3d-703043b6.png",revision:null},{url:"assets/grinning_face_3d-175d214d.png",revision:null},{url:"assets/grinning_face_with_smiling_eyes_3d-4661c4c7.png",revision:null},{url:"assets/Home-48c815e2.js",revision:null},{url:"assets/hut_3d-426ffe75.png",revision:null},{url:"assets/index-7b5acefe.js",revision:null},{url:"assets/label_3d-42d25018.png",revision:null},{url:"assets/MainLayout-842140ac.js",revision:null},{url:"assets/mount_fuji_3d-2ae69d88.png",revision:null},{url:"assets/NotFound-3476cf6e.js",revision:null},{url:"assets/people_hugging_3d-6fa8b938.png",revision:null},{url:"assets/pile_of_poo_3d-4cef7c6d.png",revision:null},{url:"assets/Progress-dab0c7a7.js",revision:null},{url:"assets/robot_3d-3f9b5a00.png",revision:null},{url:"assets/rooster_3d-c17448ec.png",revision:null},{url:"assets/scroll_3d-b9770184.png",revision:null},{url:"assets/ScrollArea-95c3d691.js",revision:null},{url:"assets/shield_3d-3c1cc1b1.png",revision:null},{url:"assets/Shop-e180f8d4.js",revision:null},{url:"assets/SimpleGrid-a3eef13c.js",revision:null},{url:"assets/slot_machine_3d-5c483ca5.png",revision:null},{url:"assets/smiling_face_with_horns_3d-bfb04bbb.png",revision:null},{url:"assets/spider_web_3d-57f7718e.png",revision:null},{url:"assets/star_3d-b935cdf5.png",revision:null},{url:"assets/television_3d-a6b7ba81.png",revision:null},{url:"assets/ticket_3d-028205d9.png",revision:null},{url:"assets/trophy_3d-7c4a9805.png",revision:null},{url:"assets/white_flag_3d-d4e05f89.png",revision:null},{url:"assets/white_large_square_3d-bb4f7c70.png",revision:null},{url:"assets/wolf_3d-6e4f1a17.png",revision:null},{url:"assets/workbox-window.prod.es5-a7b12eab.js",revision:null},{url:"assets/wrapped_gift_3d-fc9c4464.png",revision:null},{url:"assets/yellow_square_3d-342751bb.png",revision:null},{url:"favicon.ico",revision:"f3e6998ee60118786be16c0244ffe360"},{url:"icon-192-maskable.png",revision:"0522b0b65ca3d844c4b1b77949801244"},{url:"icon-192.png",revision:"421547d5bf318d76e943b3c2040fbd9a"},{url:"icon-512-maskable.png",revision:"4b28085db22b4b31800db93d543e48a7"},{url:"icon-512.png",revision:"7b0ce57a63e10fb700199524678edab7"},{url:"index.html",revision:"a484d2115be90f4663311de89db0cabc"},{url:"manifest.webmanifest",revision:"ad25a751af660595b348b78742c9eed7"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));