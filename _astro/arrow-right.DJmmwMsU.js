import{r as c}from"./index.Bvk5EX3f.js";var l={exports:{}},u={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p;function v(){if(p)return u;p=1;var e=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function s(a,o,t){var i=null;if(t!==void 0&&(i=""+t),o.key!==void 0&&(i=""+o.key),"key"in o){t={};for(var n in o)n!=="key"&&(t[n]=o[n])}else t=o;return o=t.ref,{$$typeof:e,type:a,key:i,ref:o!==void 0?o:null,props:t}}return u.Fragment=r,u.jsx=s,u.jsxs=s,u}var d;function C(){return d||(d=1,l.exports=v()),l.exports}var $=C();/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),k=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,s,a)=>a?a.toUpperCase():s.toLowerCase()),x=e=>{const r=k(e);return r.charAt(0).toUpperCase()+r.slice(1)},m=(...e)=>e.filter((r,s,a)=>!!r&&r.trim()!==""&&a.indexOf(r)===s).join(" ").trim(),E=e=>{for(const r in e)if(r.startsWith("aria-")||r==="role"||r==="title")return!0};/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var A={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=c.forwardRef(({color:e="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:o="",children:t,iconNode:i,...n},h)=>c.createElement("svg",{ref:h,...A,width:r,height:r,stroke:e,strokeWidth:a?Number(s)*24/Number(r):s,className:m("lucide",o),...!t&&!E(n)&&{"aria-hidden":"true"},...n},[...i.map(([R,f])=>c.createElement(R,f)),...Array.isArray(t)?t:[t]]));/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=(e,r)=>{const s=c.forwardRef(({className:a,...o},t)=>c.createElement(_,{ref:t,iconNode:r,className:m(`lucide-${w(x(e))}`,`lucide-${e}`,a),...o}));return s.displayName=x(e),s};/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],q=j("arrow-right",L);export{q as A,j as c,$ as j};
