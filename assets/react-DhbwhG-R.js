import{b as Mt,d as Ct,l as It,M as _,u as A,a as ye,f as x,L as Ve,i as U,e as Ye,c as se,n as ve,t as Ke,g as Vt,h as be,j as Ne,o as bt,k as Tt,p as Ot,s as Rt,q as Lt}from"./proxy-Du5g21x7.js";import{A as Tr,P as Or,S as Rr,x as Lr,y as Pr,w as Dr,D as zr,C as Fr,E as Wr,v as Hr,m as Br,B as jr,z as Gr,r as kr}from"./proxy-Du5g21x7.js";import{a as Je,g as Pt,b as Dt,l as zt,c as qe,r as re,h as Ft,i as Wt,p as Ht,V as Qe,e as Ze,f as Bt,S as jt,H as Gt,v as ne,j as kt,k as _t,m as q}from"./framer-lazy-feature-DpJMErgu.js";import{F as Ur,y as $r,z as Xr,x as Yr,q as Kr,t as Nr,w as Jr,n as qr,d as Qr,s as Zr,u as ei,o as ti}from"./framer-lazy-feature-DpJMErgu.js";import{A as si}from"./index-Cnv1K-qM.js";import{r as d,j as P}from"./index-CQyP8B5t.js";import{L as ii}from"./index-CQyP8B5t.js";import{b as et,u as D}from"./use-motion-template-_5KG6_3H.js";import{a as ai}from"./use-motion-template-_5KG6_3H.js";import{i as tt,c as ae,b as Ut,p as nt,v as $t,d as st,e as Xt,w as Yt,m as N,f as Kt,M as Nt,g as Jt,h as qt,j as Qt,k as le,l as Zt,n as rt,r as en,o as it,q as tn,t as $,u as nn,x as sn,G as ot,y as rn,z as on,A as an,B as un,C as fe,D as Te,E as cn,F as ln,H as de,I as fn,a as dn,J as mn,K as pn}from"./visual-element-DVFGuMeJ.js";import{O as ci,V as li,W as fi,X as di,Y as mi,Z as pi,_ as hi,$ as gi,L as yi,N as vi,a3 as wi,a0 as Si,a1 as xi,a2 as Ai,P as Ei,Q as Mi,R as Ci,a4 as Ii,S as Vi,T as bi,a5 as Ti,U as Oi}from"./visual-element-DVFGuMeJ.js";import{D as Li,b as Pi,c as Di,u as zi,a as Fi}from"./use-drag-controls-drsIlvtO.js";const hn=Mt({...Je,...Pt,...Dt,...zt},qe),at=Ct(hn);function Qs({children:e,isValidProp:t,...n}){t&&It(t),n={...d.useContext(_),...n},n.isStatic=A(()=>n.isStatic);const s=d.useMemo(()=>n,[JSON.stringify(n.transition),n.transformPagePoint,n.reducedMotion]);return P.jsx(_.Provider,{value:s,children:e})}const gn=d.createContext(null);function yn(){const e=d.useRef(!1);return ye(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function ut(){const e=yn(),[t,n]=d.useState(0),s=d.useCallback(()=>{e.current&&n(t+1)},[t]);return[d.useCallback(()=>x.postRender(s),[s]),t]}const vn=e=>!e.isLayoutDirty&&e.willUpdate(!1);function Oe(){const e=new Set,t=new WeakMap,n=()=>e.forEach(vn);return{add:s=>{e.add(s),t.set(s,s.addEventListener("willUpdate",n))},remove:s=>{e.delete(s);const r=t.get(s);r&&(r(),t.delete(s)),n()},dirty:n}}const ct=e=>e===!0,wn=e=>ct(e===!0)||e==="id",Sn=({children:e,id:t,inherit:n=!0})=>{const s=d.useContext(Ve),r=d.useContext(gn),[i,o]=ut(),c=d.useRef(null),a=s.id||r;c.current===null&&(wn(n)&&a&&(t=t?a+"-"+t:a),c.current={id:t,group:ct(n)&&s.group||Oe()});const u=d.useMemo(()=>({...c.current,forceRender:i}),[o]);return P.jsx(Ve.Provider,{value:u,children:e})},Zs={renderer:qe,...Je},xn=e=>e&&typeof e=="object"&&e.mix,An=e=>xn(e)?e.mix:void 0;function En(...e){const t=!Array.isArray(e[0]),n=t?0:-1,s=e[0+n],r=e[1+n],i=e[2+n],o=e[3+n],c=tt(r,i,{mixer:An(i[0]),...o});return t?c(s):c}function Mn(e){ae.current=[],e();const t=et(ae.current,e);return ae.current=void 0,t}function me(e,t,n,s){if(typeof e=="function")return Mn(e);const r=typeof t=="function"?t:En(t,n,s);return Array.isArray(e)?Re(e,r):Re([e],([i])=>r(i))}function Re(e,t){const n=A(()=>[]);return et(e,()=>{n.length=0;const s=e.length;for(let r=0;r<s;r++)n[r]=e[r].get();return t(n)})}function Le(e){return typeof e=="number"?e:parseFloat(e)}function er(e,t={}){const{isStatic:n}=d.useContext(_),s=d.useRef(null),r=D(U(e)?Le(e.get()):e),i=d.useRef(r.get()),o=d.useRef(()=>{}),c=()=>{const u=s.current;u&&u.time===0&&u.sample(Ye.delta),a(),s.current=Ut({keyframes:[r.get(),i.current],velocity:r.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...t,onUpdate:o.current})},a=()=>{s.current&&s.current.stop()};return d.useInsertionEffect(()=>r.attach((u,l)=>n?l(u):(i.current=u,o.current=l,x.update(c),r.get()),a),[JSON.stringify(t)]),ye(()=>{if(U(e))return e.on("change",u=>r.set(Le(u)))},[r]),r}function Cn(e,t,n){d.useInsertionEffect(()=>e.on(t,n),[e,t,n])}function tr(e){const t=D(e.getVelocity()),n=()=>{const s=e.getVelocity();t.set(s),s&&x.update(n)};return Cn(e,"change",()=>{x.update(n,!1,!0)}),t}const Q=new WeakMap;let T;function In(e,t){if(t){const{inlineSize:n,blockSize:s}=t[0];return{width:n,height:s}}else return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}function Vn({target:e,contentRect:t,borderBoxSize:n}){var s;(s=Q.get(e))===null||s===void 0||s.forEach(r=>{r({target:e,contentSize:t,get size(){return In(e,n)}})})}function bn(e){e.forEach(Vn)}function Tn(){typeof ResizeObserver>"u"||(T=new ResizeObserver(bn))}function On(e,t){T||Tn();const n=re(e);return n.forEach(s=>{let r=Q.get(s);r||(r=new Set,Q.set(s,r)),r.add(t),T?.observe(s)}),()=>{n.forEach(s=>{const r=Q.get(s);r?.delete(t),r?.size||T?.unobserve(s)})}}const Z=new Set;let k;function Rn(){k=()=>{const e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};Z.forEach(n=>n(t))},window.addEventListener("resize",k)}function Ln(e){return Z.add(e),k||Rn(),()=>{Z.delete(e),!Z.size&&k&&(k=void 0)}}function Pn(e,t){return typeof e=="function"?Ln(e):On(e,t)}const Dn=50,Pe=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),zn=()=>({time:0,x:Pe(),y:Pe()}),Fn={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function De(e,t,n,s){const r=n[t],{length:i,position:o}=Fn[t],c=r.current,a=n.time;r.current=e[`scroll${o}`],r.scrollLength=e[`scroll${i}`]-e[`client${i}`],r.offset.length=0,r.offset[0]=0,r.offset[1]=r.scrollLength,r.progress=nt(0,r.scrollLength,r.current);const u=s-a;r.velocity=u>Dn?0:$t(r.current-c,u)}function Wn(e,t,n){De(e,"x",t,n),De(e,"y",t,n),t.time=n}function Hn(e,t){const n={x:0,y:0};let s=e;for(;s&&s!==t;)if(s instanceof HTMLElement)n.x+=s.offsetLeft,n.y+=s.offsetTop,s=s.offsetParent;else if(s.tagName==="svg"){const r=s.getBoundingClientRect();s=s.parentElement;const i=s.getBoundingClientRect();n.x+=r.left-i.left,n.y+=r.top-i.top}else if(s instanceof SVGGraphicsElement){const{x:r,y:i}=s.getBBox();n.x+=r,n.y+=i;let o=null,c=s.parentNode;for(;!o;)c.tagName==="svg"&&(o=c),c=s.parentNode;s=o}else break;return n}const Bn={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},pe={start:0,center:.5,end:1};function ze(e,t,n=0){let s=0;if(e in pe&&(e=pe[e]),typeof e=="string"){const r=parseFloat(e);e.endsWith("px")?s=r:e.endsWith("%")?e=r/100:e.endsWith("vw")?s=r/100*document.documentElement.clientWidth:e.endsWith("vh")?s=r/100*document.documentElement.clientHeight:e=r}return typeof e=="number"&&(s=t*e),n+s}const jn=[0,0];function Gn(e,t,n,s){let r=Array.isArray(e)?e:jn,i=0,o=0;return typeof e=="number"?r=[e,e]:typeof e=="string"&&(e=e.trim(),e.includes(" ")?r=e.split(" "):r=[e,pe[e]?e:"0"]),i=ze(r[0],n,s),o=ze(r[1],t),i-o}const kn={x:0,y:0};function _n(e){return"getBBox"in e&&e.tagName!=="svg"?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function Un(e,t,n){const{offset:s=Bn.All}=n,{target:r=e,axis:i="y"}=n,o=i==="y"?"height":"width",c=r!==e?Hn(r,e):kn,a=r===e?{width:e.scrollWidth,height:e.scrollHeight}:_n(r),u={width:e.clientWidth,height:e.clientHeight};t[i].offset.length=0;let l=!t[i].interpolate;const m=s.length;for(let f=0;f<m;f++){const p=Gn(s[f],u[o],a[o],c[i]);!l&&p!==t[i].interpolatorOffsets[f]&&(l=!0),t[i].offset[f]=p}l&&(t[i].interpolate=tt(t[i].offset,st(s)),t[i].interpolatorOffsets=[...t[i].offset]),t[i].progress=t[i].interpolate(t[i].current)}function $n(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let s=t;for(;s&&s!==e;)n.x.targetOffset+=s.offsetLeft,n.y.targetOffset+=s.offsetTop,s=s.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight}function Xn(e,t,n,s={}){return{measure:()=>$n(e,s.target,n),update:r=>{Wn(e,n,r),(s.offset||s.target)&&Un(e,n,s)},notify:()=>t(n)}}const j=new WeakMap,Fe=new WeakMap,ue=new WeakMap,We=e=>e===document.documentElement?window:e;function we(e,{container:t=document.documentElement,...n}={}){let s=ue.get(t);s||(s=new Set,ue.set(t,s));const r=zn(),i=Xn(t,e,r,n);if(s.add(i),!j.has(t)){const c=()=>{for(const f of s)f.measure()},a=()=>{for(const f of s)f.update(Ye.timestamp)},u=()=>{for(const f of s)f.notify()},l=()=>{x.read(c,!1,!0),x.read(a,!1,!0),x.update(u,!1,!0)};j.set(t,l);const m=We(t);window.addEventListener("resize",l,{passive:!0}),t!==document.documentElement&&Fe.set(t,Pn(t,l)),m.addEventListener("scroll",l,{passive:!0})}const o=j.get(t);return x.read(o,!1,!0),()=>{var c;se(o);const a=ue.get(t);if(!a||(a.delete(i),a.size))return;const u=j.get(t);j.delete(t),u&&(We(t).removeEventListener("scroll",u),(c=Fe.get(t))===null||c===void 0||c(),window.removeEventListener("resize",u))}}function lt(e,t){let n;const s=()=>{const{currentTime:r}=t,o=(r===null?0:r.value)/100;n!==o&&e(o),n=o};return x.update(s,!0),()=>se(s)}function Yn({source:e,container:t,axis:n="y"}){e&&(t=e);const s={value:0},r=we(i=>{s.value=i[n].progress*100},{container:t,axis:n});return{currentTime:s,cancel:r}}const ce=new Map;function ft({source:e,container:t=document.documentElement,axis:n="y"}={}){e&&(t=e),ce.has(t)||ce.set(t,{});const s=ce.get(t);return s[n]||(s[n]=Xt()?new ScrollTimeline({source:t,axis:n}):Yn({source:t,axis:n})),s[n]}function Kn(e){return e.length===2}function dt(e){return e&&(e.target||e.offset)}function Nn(e,t){return Kn(e)||dt(t)?we(n=>{e(n[t.axis].progress,n)},t):lt(e,ft(t))}function Jn(e,t){if(e.flatten(),dt(t))return e.pause(),we(n=>{e.time=e.duration*n[t.axis].progress},t);{const n=ft(t);return e.attachTimeline?e.attachTimeline(n,s=>(s.pause(),lt(r=>{s.time=s.duration*r},n))):ve}}function qn(e,{axis:t="y",...n}={}){const s={axis:t,...n};return typeof e=="function"?Nn(e,s):Jn(e,s)}function He(e,t){Yt(!!(!t||t.current))}const Qn=()=>({scrollX:N(0),scrollY:N(0),scrollXProgress:N(0),scrollYProgress:N(0)});function mt({container:e,target:t,layoutEffect:n=!0,...s}={}){const r=A(Qn);return(n?ye:d.useEffect)(()=>(He("target",t),He("container",e),qn((o,{x:c,y:a})=>{r.scrollX.set(c.current),r.scrollXProgress.set(c.progress),r.scrollY.set(a.current),r.scrollYProgress.set(a.progress)},{...s,container:e?.current||void 0,target:t?.current||void 0})),[e,t,JSON.stringify(s.offset)]),r}function nr(e){return mt({container:e})}function sr(){return mt()}function Zn(e){const t=d.useRef(0),{isStatic:n}=d.useContext(_);d.useEffect(()=>{if(n)return;const s=({timestamp:r,delta:i})=>{t.current||(t.current=r),e(r-t.current,i)};return x.update(s,!0),()=>se(s)},[e])}function rr(){const e=D(0);return Zn(t=>e.set(t)),e}function es(e){if(Ke.has(e))return"transform";if(Kt.has(e))return Vt(e)}class ts extends Nt{constructor(){super(...arguments),this.values=[]}add(t){const n=es(t);n&&(Jt(this.values,n),this.update())}update(){this.set(this.values.length?this.values.join(", "):"auto")}}function ir(){return A(()=>new ts("auto"))}function ns(){!Ft.current&&Wt();const[e]=d.useState(Ht.current);return e}function or(){const e=ns(),{reducedMotion:t}=d.useContext(_);return t==="never"?!1:t==="always"?!0:e}function pt(e){return d.useEffect(()=>()=>e(),[])}function ht(e,t=100,n){const s=n({...e,keyframes:[0,t]}),r=Math.min(qt(s),Qt);return{type:"keyframes",ease:i=>s.next(r*i).value/t,duration:le(r)}}function Se(e){return typeof e=="object"&&!Array.isArray(e)}function gt(e,t,n,s){return typeof e=="string"&&Se(t)?re(e,n,s):e instanceof NodeList?Array.from(e):Array.isArray(e)?e:[e]}function Be(e,t,n,s){var r;return typeof t=="number"?t:t.startsWith("-")||t.startsWith("+")?Math.max(0,e+parseFloat(t)):t==="<"?n:(r=s.get(t))!==null&&r!==void 0?r:e}const yt=(e,t,n)=>{const s=t-e;return((n-e)%s+s)%s+e};function vt(e,t){return Zt(e)?e[yt(0,e.length,t)]:e}function ss(e,t,n){for(let s=0;s<e.length;s++){const r=e[s];r.at>t&&r.at<n&&(en(e,r),s--)}}function rs(e,t,n,s,r,i){ss(e,r,i);for(let o=0;o<t.length;o++)e.push({value:t[o],at:rt(r,i,s[o]),easing:vt(n,o)})}function is(e,t){return e.at===t.at?e.value===null?1:t.value===null?-1:0:e.at-t.at}function os(e,t){for(let n=0;n<e.length;n++)e[n]=e[n]/(t+1)}function as(e,t,n){return e*(t+1)}const us="easeInOut";function cs(e,{defaultTransition:t={},...n}={},s,r){const i=t.duration||.3,o=new Map,c=new Map,a={},u=new Map;let l=0,m=0,f=0;for(let p=0;p<e.length;p++){const h=e[p];if(typeof h=="string"){u.set(h,m);continue}else if(!Array.isArray(h)){u.set(h.name,Be(m,h.at,l,u));continue}let[g,y,v={}]=h;v.at!==void 0&&(m=Be(m,v.at,l,u));let w=0;const R=(M,C,V,z=0,F=0)=>{const S=ls(M),{delay:ie=0,times:I=st(S),type:oe="keyframes",repeat:X,repeatType:$s,repeatDelay:Xs=0,...Et}=C;let{ease:b=t.ease||"easeOut",duration:E}=C;const xe=typeof ie=="function"?ie(z,F):ie,Ae=S.length,Ee=it(oe)?oe:r?.[oe];if(Ae<=2&&Ee){let W=100;if(Ae===2&&ms(S)){const H=S[1]-S[0];W=Math.abs(H)}const Y={...Et};E!==void 0&&(Y.duration=$(E));const K=ht(Y,W,Ee);b=K.ease,E=K.duration}E??(E=i);const Me=m+xe;I.length===1&&I[0]===0&&(I[1]=1);const Ce=I.length-S.length;if(Ce>0&&tn(I,Ce),S.length===1&&S.unshift(null),X){E=as(E,X);const W=[...S],Y=[...I];b=Array.isArray(b)?[...b]:[b];const K=[...b];for(let H=0;H<X;H++){S.push(...W);for(let B=0;B<W.length;B++)I.push(Y[B]+(H+1)),b.push(B===0?"linear":vt(K,B-1))}os(I,X)}const Ie=Me+E;rs(V,S,b,I,Me,Ie),w=Math.max(xe+E,w),f=Math.max(Ie,f)};if(U(g)){const M=je(g,c);R(y,v,Ge("default",M))}else{const M=gt(g,y,s,a),C=M.length;for(let V=0;V<C;V++){y=y,v=v;const z=M[V],F=je(z,c);for(const S in y)R(y[S],fs(v,S),Ge(S,F),V,C)}}l=m,m+=w}return c.forEach((p,h)=>{for(const g in p){const y=p[g];y.sort(is);const v=[],w=[],R=[];for(let C=0;C<y.length;C++){const{at:V,value:z,easing:F}=y[C];v.push(z),w.push(nt(0,f,V)),R.push(F||"easeOut")}w[0]!==0&&(w.unshift(0),v.unshift(v[0]),R.unshift(us)),w[w.length-1]!==1&&(w.push(1),v.push(null)),o.has(h)||o.set(h,{keyframes:{},transition:{}});const M=o.get(h);M.keyframes[g]=v,M.transition[g]={...t,duration:f,ease:R,times:w,...n}}}),o}function je(e,t){return!t.has(e)&&t.set(e,{}),t.get(e)}function Ge(e,t){return t[e]||(t[e]=[]),t[e]}function ls(e){return Array.isArray(e)?e:[e]}function fs(e,t){return e&&e[t]?{...e,...e[t]}:{...e}}const ds=e=>typeof e=="number",ms=e=>e.every(ds);function ps(e,t){return e in t}class hs extends Qe{constructor(){super(...arguments),this.type="object"}readValueFromInstance(t,n){if(ps(n,t)){const s=t[n];if(typeof s=="string"||typeof s=="number")return s}}getBaseTargetFromProps(){}removeValueFromRenderState(t,n){delete n.output[t]}measureInstanceViewportBox(){return Ze()}build(t,n){Object.assign(t.output,n)}renderInstance(t,{output:n}){Object.assign(t,n)}sortInstanceNodePosition(){return 0}}function gs(e){const t={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},n=Bt(e)?new jt(t):new Gt(t);n.mount(e),ne.set(e,n)}function ys(e){const t={presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}},n=new hs(t);n.mount(e),ne.set(e,n)}function vs(e,t){return U(e)||typeof e=="number"||typeof e=="string"&&!Se(t)}function wt(e,t,n,s){const r=[];if(vs(e,t))r.push(kt(e,Se(t)&&t.default||t,n&&(n.default||n)));else{const i=gt(e,t,s),o=i.length;for(let c=0;c<o;c++){const a=i[c],u=a instanceof Element?gs:ys;ne.has(a)||u(a);const l=ne.get(a),m={...n};"delay"in m&&typeof m.delay=="function"&&(m.delay=m.delay(c,o)),r.push(...nn(l,{...t,transition:m},{}))}}return r}function ws(e,t,n){const s=[];return cs(e,t,n,{spring:sn}).forEach(({keyframes:i,transition:o},c)=>{s.push(...wt(c,i,o))}),s}function Ss(e){return Array.isArray(e)&&Array.isArray(e[0])}function St(e){function t(n,s,r){let i=[];Ss(n)?i=ws(n,s,e):i=wt(n,s,r,e);const o=new ot(i);return e&&e.animations.push(o),o}return t}const ar=St();function ur(){const e=A(()=>({current:null,animations:[]})),t=A(()=>St(e));return pt(()=>{e.animations.forEach(n=>n.stop())}),[e,t]}function xs(e,t,n){e.style.setProperty(`--${t}`,n)}function As(e,t,n){e.style[t]=n}const Es=rn(()=>{try{document.createElement("div").animate({opacity:[1]})}catch{return!1}return!0}),ee=new WeakMap;function Ms(e,t,n){for(let s=0;s<t.length;s++)t[s]===null&&(t[s]=s===0?n():t[s-1]),typeof t[s]=="number"&&be[e]&&(t[s]=be[e].transform(t[s]));!Es()&&t.length<2&&t.unshift(n())}const ke="easeOut";function _e(e){const t=ee.get(e)||new Map;return ee.set(e,t),ee.get(e)}class Cs{constructor(t,n,s,r){const i=n.startsWith("--");this.setValue=i?xs:As,this.options=r,this.updateFinishedPromise(),on(typeof r.type!="string");const o=_e(t).get(n);o&&o.stop();const c=()=>n.startsWith("--")?t.style.getPropertyValue(n):window.getComputedStyle(t)[n];if(Array.isArray(s)||(s=[s]),Ms(n,s,c),it(r.type)){const u=ht(r,100,r.type);r.ease=an()?u.ease:ke,r.duration=$(u.duration),r.type="keyframes"}else r.ease=r.ease||ke;this.removeAnimation=()=>{var u;return(u=ee.get(t))===null||u===void 0?void 0:u.delete(n)};const a=()=>{this.setValue(t,n,cn(s,this.options)),this.cancel(),this.resolveFinishedPromise()};un()?(this.animation=fe(t,n,s,r),r.autoplay===!1&&this.animation.pause(),this.animation.onfinish=a,this.pendingTimeline&&Te(this.animation,this.pendingTimeline),_e(t).set(n,this)):a()}get duration(){return le(this.options.duration||300)}get time(){var t;return this.animation?le(((t=this.animation)===null||t===void 0?void 0:t.currentTime)||0):0}set time(t){this.animation&&(this.animation.currentTime=$(t))}get speed(){return this.animation?this.animation.playbackRate:1}set speed(t){this.animation&&(this.animation.playbackRate=t)}get state(){return this.animation?this.animation.playState:"finished"}get startTime(){return this.animation?this.animation.startTime:null}flatten(){var t;this.animation&&((t=this.animation.effect)===null||t===void 0||t.updateTiming({easing:"linear"}))}play(){this.state==="finished"&&this.updateFinishedPromise(),this.animation&&this.animation.play()}pause(){this.animation&&this.animation.pause()}stop(){!this.animation||this.state==="idle"||this.state==="finished"||(this.animation.commitStyles&&this.animation.commitStyles(),this.cancel())}complete(){this.animation&&this.animation.finish()}cancel(){this.removeAnimation();try{this.animation&&this.animation.cancel()}catch{}}then(t,n){return this.currentFinishedPromise.then(t,n)}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}attachTimeline(t){return this.animation?Te(this.animation,t):this.pendingTimeline=t,ve}}function Is(e,t,n,s){const r=re(e,s),i=r.length,o=[];for(let c=0;c<i;c++){const a=r[c],u={...n};typeof u.delay=="function"&&(u.delay=u.delay(c,i));for(const l in t){const m=t[l],f={...ln(u,l)};f.duration=f.duration?$(f.duration):f.duration,f.delay=$(f.delay||0),o.push(new Cs(a,l,m,f))}}return o}const xt=e=>{function t(n,s,r){return new ot(Is(n,s,r,e))}return t},cr=xt();function lr(){const e=A(()=>({current:null,animations:[]})),t=A(()=>xt(e));return pt(()=>{e.animations.forEach(n=>n.stop())}),[e,t]}function fr(...e){const t=d.useRef(0),[n,s]=d.useState(e[t.current]),r=d.useCallback(i=>{t.current=typeof i!="number"?yt(0,e.length,t.current+1):i,s(e[t.current])},[e.length,...e]);return[n,r]}const Vs={some:0,all:1};function bs(e,t,{root:n,margin:s,amount:r="some"}={}){const i=re(e),o=new WeakMap,c=u=>{u.forEach(l=>{const m=o.get(l.target);if(l.isIntersecting!==!!m)if(l.isIntersecting){const f=t(l);typeof f=="function"?o.set(l.target,f):a.unobserve(l.target)}else m&&(m(l),o.delete(l.target))})},a=new IntersectionObserver(c,{root:n,rootMargin:s,threshold:typeof r=="number"?r:Vs[r]});return i.forEach(u=>a.observe(u)),()=>a.disconnect()}function dr(e,{root:t,margin:n,amount:s,once:r=!1}={}){const[i,o]=d.useState(!1);return d.useEffect(()=>{if(!e.current||r&&i)return;const c=()=>(o(!0),r?void 0:()=>o(!1)),a={root:t&&t.current||void 0,margin:n,amount:s};return bs(e.current,c,a)},[t,e,n,r,s]),i}function mr(e,t,n,s){d.useEffect(()=>{const r=e.current;if(n&&r)return _t(r,t,n,s)},[e,t,n,s])}function Ts(e){return e!==null&&typeof e=="object"&&Ne in e}function pr(e){if(Ts(e))return e[Ne]}function Os(){return Rs}function Rs(e){q.current&&(q.current.isUpdating=!1,q.current.blockUpdate(),e&&e())}function hr(){const[e,t]=ut(),n=Os(),s=d.useRef(-1);return d.useEffect(()=>{x.postRender(()=>x.postRender(()=>{t===s.current&&(de.current=!1)}))},[t]),r=>{n(()=>{de.current=!0,e(),r(),s.current=t+1})}}function gr(){de.current=!1}function yr(){return d.useCallback(()=>{const t=q.current;t&&t.resetTree()},[])}const te=(e,t)=>{const n=Ke.has(t)?"transform":t;return`${e}: ${n}`},O=new Map,G=new Map;function Ue(e,t,n){var s;const r=te(e,t),i=O.get(r);if(!i)return null;const{animation:o,startTime:c}=i;function a(){var u;(u=window.MotionCancelOptimisedAnimation)===null||u===void 0||u.call(window,e,t,n)}return o.onfinish=a,c===null||!((s=window.MotionHandoffIsComplete)===null||s===void 0)&&s.call(window,e)?(a(),null):c}let J,L;const he=new Set;function Ls(){he.forEach(e=>{e.animation.play(),e.animation.startTime=e.startTime}),he.clear()}function vr(e,t,n,s,r){if(window.MotionIsMounted)return;const i=e.dataset[bt];if(!i)return;window.MotionHandoffAnimation=Ue;const o=te(i,t);L||(L=fe(e,t,[n[0],n[0]],{duration:1e4,ease:"linear"}),O.set(o,{animation:L,startTime:null}),window.MotionHandoffAnimation=Ue,window.MotionHasOptimisedAnimation=(a,u)=>{if(!a)return!1;if(!u)return G.has(a);const l=te(a,u);return!!O.get(l)},window.MotionHandoffMarkAsComplete=a=>{G.has(a)&&G.set(a,!0)},window.MotionHandoffIsComplete=a=>G.get(a)===!0,window.MotionCancelOptimisedAnimation=(a,u,l,m)=>{const f=te(a,u),p=O.get(f);p&&(l&&m===void 0?l.postRender(()=>{l.postRender(()=>{p.animation.cancel()})}):p.animation.cancel(),l&&m?(he.add(p),l.render(Ls)):(O.delete(f),O.size||(window.MotionCancelOptimisedAnimation=void 0)))},window.MotionCheckAppearSync=(a,u,l)=>{var m,f;const p=fn(a);if(!p)return;const h=(m=window.MotionHasOptimisedAnimation)===null||m===void 0?void 0:m.call(window,p,u),g=(f=a.props.values)===null||f===void 0?void 0:f[u];if(!h||!g)return;const y=l.on("change",v=>{var w;g.get()!==v&&((w=window.MotionCancelOptimisedAnimation)===null||w===void 0||w.call(window,p,u),y())});return y});const c=()=>{L.cancel();const a=fe(e,t,n,s);J===void 0&&(J=performance.now()),a.startTime=J,O.set(o,{animation:a,startTime:J}),r&&r(a)};G.set(i,!1),L.ready?L.ready.then(c).catch(ve):c()}const ge=()=>({});class Ps extends Qe{constructor(){super(...arguments),this.measureInstanceViewportBox=Ze}build(){}resetTransform(){}restoreTransform(){}removeValueFromRenderState(){}renderInstance(){}scrapeMotionValuesFromProps(){return ge()}getBaseTargetFromProps(){}readValueFromInstance(t,n,s){return s.initialState[n]||0}sortInstanceNodePosition(){return 0}}const Ds=Tt({scrapeMotionValuesFromProps:ge,createRenderState:ge});function wr(e){const[t,n]=d.useState(e),s=Ds({},!1),r=A(()=>new Ps({props:{onUpdate:o=>{n({...o})}},visualState:s,presenceContext:null},{initialState:e}));d.useLayoutEffect(()=>(r.mount({}),()=>r.unmount()),[r]);const i=A(()=>o=>dn(r,o));return[t,i]}const zs=1e5,$e=e=>e>.001?1/e:zs;function Sr(e){let t=D(1),n=D(1);const{visualElement:s}=d.useContext(Ot);e?(t=e.scaleX||t,n=e.scaleY||n):s&&(t=s.getValue("scaleX",1),n=s.getValue("scaleY",1));const r=me(t,$e),i=me(n,$e);return{scaleX:r,scaleY:i}}let Fs=0;const xr=({children:e})=>(d.useEffect(()=>{},[]),P.jsx(Sn,{id:A(()=>`asl-${Fs++}`),children:e}));function Ws(e,t){if(e==="first")return 0;{const n=t-1;return e==="last"?n:n/2}}function Ar(e=.1,{startDelay:t=0,from:n=0,ease:s}={}){return(r,i)=>{const o=typeof n=="number"?n:Ws(n,i),c=Math.abs(o-r);let a=e*c;if(s){const u=i*e;a=mn(s)(a/u)*u}return t+a}}const Er=x,Mr=Rt.reduce((e,t)=>(e[t]=n=>se(n),e),{});function Cr(e,t="end"){return n=>{n=t==="end"?Math.min(n,.999):Math.max(n,.001);const s=n*e,r=t==="end"?Math.floor(s):Math.ceil(s);return Lt(0,1,r/e)}}const At=d.createContext(null);function Hs(e,t,n,s){if(!s)return e;const r=e.findIndex(l=>l.value===t);if(r===-1)return e;const i=s>0?1:-1,o=e[r+i];if(!o)return e;const c=e[r],a=o.layout,u=rt(a.min,a.max,.5);return i===1&&c.layout.max+n>u||i===-1&&c.layout.min+n<u?pn(e,r,r+i):e}function Bs({children:e,as:t="ul",axis:n="y",onReorder:s,values:r,...i},o){const c=A(()=>at[t]),a=[],u=d.useRef(!1),l={axis:n,registerItem:(m,f)=>{const p=a.findIndex(h=>m===h.value);p!==-1?a[p].layout=f[n]:a.push({value:m,layout:f[n]}),a.sort(ks)},updateOrder:(m,f,p)=>{if(u.current)return;const h=Hs(a,m,f,p);a!==h&&(u.current=!0,s(h.map(Gs).filter(g=>r.indexOf(g)!==-1)))}};return d.useEffect(()=>{u.current=!1}),P.jsx(c,{...i,ref:o,ignoreStrict:!0,children:P.jsx(At.Provider,{value:l,children:e})})}const js=d.forwardRef(Bs);function Gs(e){return e.value}function ks(e,t){return e.layout.min-t.layout.min}function Xe(e,t=0){return U(e)?e:D(t)}function _s({children:e,style:t={},value:n,as:s="li",onDrag:r,layout:i=!0,...o},c){const a=A(()=>at[s]),u=d.useContext(At),l={x:Xe(t.x),y:Xe(t.y)},m=me([l.x,l.y],([g,y])=>g||y?1:"unset"),{axis:f,registerItem:p,updateOrder:h}=u;return P.jsx(a,{drag:f,...o,dragSnapToOrigin:!0,style:{...t,x:l.x,y:l.y,zIndex:m},layout:i,onDrag:(g,y)=>{const{velocity:v}=y;v[f]&&h(n,l[f].get(),v[f]),r&&r(g,y)},onLayoutMeasure:g=>p(n,g),ref:c,ignoreStrict:!0,children:e})}const Us=d.forwardRef(_s),Ir=Object.freeze(Object.defineProperty({__proto__:null,Group:js,Item:Us},Symbol.toStringTag,{value:"Module"}));export{ci as AcceleratedAnimation,si as AnimatePresence,xr as AnimateSharedLayout,gn as DeprecatedLayoutGroupContext,Li as DragControls,Ur as FlatTree,Sn as LayoutGroup,Ve as LayoutGroupContext,ii as LazyMotion,Qs as MotionConfig,_ as MotionConfigContext,Ot as MotionContext,Tr as MotionGlobalConfig,Nt as MotionValue,Or as PresenceContext,Ir as Reorder,Rr as SwitchLayoutGroupContext,Qe as VisualElement,$r as addPointerEvent,Xr as addPointerInfo,Lr as addScaleCorrector,ar as animate,cr as animateMini,Ut as animateValue,dn as animateVisualElement,Pi as animationControls,Je as animations,li as anticipate,fi as backIn,di as backInOut,mi as backOut,Pr as buildTransform,Yr as calcLength,se as cancelFrame,Mr as cancelSync,pi as circIn,hi as circInOut,gi as circOut,Lt as clamp,yi as color,vi as complex,Ze as createBox,Dr as createRendererMotionComponent,St as createScopedAnimate,wi as cubicBezier,Kr as delay,gr as disableInstantTransitions,Nr as distance,Jr as distance2D,qr as domAnimation,Qr as domMax,Zs as domMin,Si as easeIn,xi as easeInOut,Ai as easeOut,zr as filterProps,Ei as findSpring,x as frame,Ye as frameData,Fr as frameSteps,bs as inView,Mi as inertia,tt as interpolate,on as invariant,Wr as isBrowser,Zr as isDragActive,Ts as isMotionComponent,U as isMotionValue,Hr as isValidMotionProp,Ci as keyframes,Br as m,Tt as makeUseVisualState,Ii as mirrorEasing,Vi as mix,at as motion,N as motionValue,ve as noop,jr as optimizedAppearDataAttribute,bi as pipe,nt as progress,Gr as px,kr as resolveMotionValue,Ti as reverseEasing,qn as scroll,we as scrollInfo,sn as spring,Ar as stagger,vr as startOptimizedAppearAnimation,Cr as steps,Er as sync,Oi as time,En as transform,pr as unwrapMotionComponent,ur as useAnimate,lr as useAnimateMini,Di as useAnimation,zi as useAnimationControls,Zn as useAnimationFrame,fr as useCycle,wr as useDeprecatedAnimatedState,Sr as useDeprecatedInvertedScale,mr as useDomEvent,Fi as useDragControls,nr as useElementScroll,ut as useForceUpdate,dr as useInView,Os as useInstantLayoutTransition,hr as useInstantTransition,ei as useIsPresent,ye as useIsomorphicLayoutEffect,ai as useMotionTemplate,D as useMotionValue,Cn as useMotionValueEvent,ti as usePresence,ns as useReducedMotion,or as useReducedMotionConfig,yr as useResetProjection,mt as useScroll,er as useSpring,rr as useTime,me as useTransform,pt as useUnmountEffect,tr as useVelocity,sr as useViewportScroll,ir as useWillChange,ne as visualElementStore,yt as wrap};
