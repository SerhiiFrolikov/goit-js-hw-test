function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},t.parcelRequired7c6=n),n.register("fExtF",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){if(!t.has(e))throw new TypeError("attempted to "+r+" private field on non-instance");return t.get(e)}})),n.register("iaRLo",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),n.register("7K24o",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}}));var a={};Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,t){var r=i.default(e,t,"get");return l.default(e,r)};var i=u(n("fExtF")),l=u(n("iaRLo"));function u(e){return e&&e.__esModule?e:{default:e}}var s={};Object.defineProperty(s,"__esModule",{value:!0}),s.default=function(e,t,r){d.default(e,t),t.set(e,r)};var f,d=(f=n("7K24o"))&&f.__esModule?f:{default:f};var p=new WeakMap,c=new WeakMap;(new class{getPopularImages(t){const r=`${e(a)(this,p)}?query=popular&page=${t}&per_page=12&orientation=portrait&client_id=${e(a)(this,c)}`;return fetch(r).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()}))}constructor(){e(s)(this,p,{writable:!0,value:"https://api.unsplash.com/search/photos"}),e(s)(this,c,{writable:!0,value:"gcevo00lZKvSMKLnZZJPKYS5xNbpbsP_4i6E-BVlG58"})}}).getPopularImages(1).then((e=>console.log(e))).catch((e=>console.log(e)));
//# sourceMappingURL=gallery.c7d88be8.js.map
