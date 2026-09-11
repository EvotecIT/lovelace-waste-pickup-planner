var j=globalThis,B=j.ShadowRoot&&(j.ShadyCSS===void 0||j.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,X=Symbol(),$t=new WeakMap,D=class{constructor(t,e,o){if(this._$cssResult$=!0,o!==X)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(B&&t===void 0){let o=e!==void 0&&e.length===1;o&&(t=$t.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&$t.set(e,t))}return t}toString(){return this.cssText}},bt=i=>new D(typeof i=="string"?i:i+"",void 0,X),P=(i,...t)=>{let e=i.length===1?i[0]:t.reduce((o,s,n)=>o+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+i[n+1],i[0]);return new D(e,i,X)},_t=(i,t)=>{if(B)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let o=document.createElement("style"),s=j.litNonce;s!==void 0&&o.setAttribute("nonce",s),o.textContent=e.cssText,i.appendChild(o)}},tt=B?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(let o of t.cssRules)e+=o.cssText;return bt(e)})(i):i;var{is:Xt,defineProperty:te,getOwnPropertyDescriptor:ee,getOwnPropertyNames:oe,getOwnPropertySymbols:ie,getPrototypeOf:se}=Object,Z=globalThis,xt=Z.trustedTypes,ne=xt?xt.emptyScript:"",re=Z.reactiveElementPolyfillSupport,z=(i,t)=>i,et={toAttribute(i,t){switch(t){case Boolean:i=i?ne:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},Et=(i,t)=>!Xt(i,t),wt={attribute:!0,type:String,converter:et,reflect:!1,useDefault:!1,hasChanged:Et};Symbol.metadata??=Symbol("metadata"),Z.litPropertyMetadata??=new WeakMap;var $=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=wt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let o=Symbol(),s=this.getPropertyDescriptor(t,o,e);s!==void 0&&te(this.prototype,t,s)}}static getPropertyDescriptor(t,e,o){let{get:s,set:n}=ee(this.prototype,t)??{get(){return this[e]},set(r){this[e]=r}};return{get:s,set(r){let c=s?.call(this);n?.call(this,r),this.requestUpdate(t,c,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??wt}static _$Ei(){if(this.hasOwnProperty(z("elementProperties")))return;let t=se(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(z("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(z("properties"))){let e=this.properties,o=[...oe(e),...ie(e)];for(let s of o)this.createProperty(s,e[s])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[o,s]of e)this.elementProperties.set(o,s)}this._$Eh=new Map;for(let[e,o]of this.elementProperties){let s=this._$Eu(e,o);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let o=new Set(t.flat(1/0).reverse());for(let s of o)e.unshift(tt(s))}else t!==void 0&&e.push(tt(t));return e}static _$Eu(t,e){let o=e.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let o of e.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return _t(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$ET(t,e){let o=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,o);if(s!==void 0&&o.reflect===!0){let n=(o.converter?.toAttribute!==void 0?o.converter:et).toAttribute(e,o.type);this._$Em=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){let o=this.constructor,s=o._$Eh.get(t);if(s!==void 0&&this._$Em!==s){let n=o.getPropertyOptions(s),r=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:et;this._$Em=s;let c=r.fromAttribute(e,n.type);this[s]=c??this._$Ej?.get(s)??c,this._$Em=null}}requestUpdate(t,e,o,s=!1,n){if(t!==void 0){let r=this.constructor;if(s===!1&&(n=this[t]),o??=r.getPropertyOptions(t),!((o.hasChanged??Et)(n,e)||o.useDefault&&o.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,o))))return;this.C(t,e,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:o,reflect:s,wrapped:n},r){o&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),n!==!0||r!==void 0)||(this._$AL.has(t)||(this.hasUpdated||o||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[s,n]of this._$Ep)this[s]=n;this._$Ep=void 0}let o=this.constructor.elementProperties;if(o.size>0)for(let[s,n]of o){let{wrapped:r}=n,c=this[s];r!==!0||this._$AL.has(s)||c===void 0||this.C(s,void 0,n,c)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(o=>o.hostUpdate?.()),this.update(e)):this._$EM()}catch(o){throw t=!1,this._$EM(),o}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[z("elementProperties")]=new Map,$[z("finalized")]=new Map,re?.({ReactiveElement:$}),(Z.reactiveElementVersions??=[]).push("2.1.2");var ct=globalThis,At=i=>i,W=ct.trustedTypes,Ct=W?W.createPolicy("lit-html",{createHTML:i=>i}):void 0,Dt="$lit$",_=`lit$${Math.random().toFixed(9).slice(2)}$`,Pt="?"+_,ae=`<${Pt}>`,E=document,R=()=>E.createComment(""),O=i=>i===null||typeof i!="object"&&typeof i!="function",lt=Array.isArray,ce=i=>lt(i)||typeof i?.[Symbol.iterator]=="function",ot=`[ 	
\f\r]`,U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,St=/-->/g,kt=/>/g,x=RegExp(`>|${ot}(?:([^\\s"'>=/]+)(${ot}*=${ot}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Tt=/'/g,Ht=/"/g,zt=/^(?:script|style|textarea|title)$/i,dt=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),u=dt(1),xe=dt(2),we=dt(3),b=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),Mt=new WeakMap,w=E.createTreeWalker(E,129);function Ut(i,t){if(!lt(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ct!==void 0?Ct.createHTML(t):t}var le=(i,t)=>{let e=i.length-1,o=[],s,n=t===2?"<svg>":t===3?"<math>":"",r=U;for(let c=0;c<e;c++){let a=i[c],l,p,d=-1,m=0;for(;m<a.length&&(r.lastIndex=m,p=r.exec(a),p!==null);)m=r.lastIndex,r===U?p[1]==="!--"?r=St:p[1]!==void 0?r=kt:p[2]!==void 0?(zt.test(p[2])&&(s=RegExp("</"+p[2],"g")),r=x):p[3]!==void 0&&(r=x):r===x?p[0]===">"?(r=s??U,d=-1):p[1]===void 0?d=-2:(d=r.lastIndex-p[2].length,l=p[1],r=p[3]===void 0?x:p[3]==='"'?Ht:Tt):r===Ht||r===Tt?r=x:r===St||r===kt?r=U:(r=x,s=void 0);let g=r===x&&i[c+1].startsWith("/>")?" ":"";n+=r===U?a+ae:d>=0?(o.push(l),a.slice(0,d)+Dt+a.slice(d)+_+g):a+_+(d===-2?c:g)}return[Ut(i,n+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),o]},N=class i{constructor({strings:t,_$litType$:e},o){let s;this.parts=[];let n=0,r=0,c=t.length-1,a=this.parts,[l,p]=le(t,e);if(this.el=i.createElement(l,o),w.currentNode=this.el.content,e===2||e===3){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(s=w.nextNode())!==null&&a.length<c;){if(s.nodeType===1){if(s.hasAttributes())for(let d of s.getAttributeNames())if(d.endsWith(Dt)){let m=p[r++],g=s.getAttribute(d).split(_),f=/([.?@])?(.*)/.exec(m);a.push({type:1,index:n,name:f[2],strings:g,ctor:f[1]==="."?st:f[1]==="?"?nt:f[1]==="@"?rt:k}),s.removeAttribute(d)}else d.startsWith(_)&&(a.push({type:6,index:n}),s.removeAttribute(d));if(zt.test(s.tagName)){let d=s.textContent.split(_),m=d.length-1;if(m>0){s.textContent=W?W.emptyScript:"";for(let g=0;g<m;g++)s.append(d[g],R()),w.nextNode(),a.push({type:2,index:++n});s.append(d[m],R())}}}else if(s.nodeType===8)if(s.data===Pt)a.push({type:2,index:n});else{let d=-1;for(;(d=s.data.indexOf(_,d+1))!==-1;)a.push({type:7,index:n}),d+=_.length-1}n++}}static createElement(t,e){let o=E.createElement("template");return o.innerHTML=t,o}};function S(i,t,e=i,o){if(t===b)return t;let s=o!==void 0?e._$Co?.[o]:e._$Cl,n=O(t)?void 0:t._$litDirective$;return s?.constructor!==n&&(s?._$AO?.(!1),n===void 0?s=void 0:(s=new n(i),s._$AT(i,e,o)),o!==void 0?(e._$Co??=[])[o]=s:e._$Cl=s),s!==void 0&&(t=S(i,s._$AS(i,t.values),s,o)),t}var it=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:o}=this._$AD,s=(t?.creationScope??E).importNode(e,!0);w.currentNode=s;let n=w.nextNode(),r=0,c=0,a=o[0];for(;a!==void 0;){if(r===a.index){let l;a.type===2?l=new L(n,n.nextSibling,this,t):a.type===1?l=new a.ctor(n,a.name,a.strings,this,t):a.type===6&&(l=new at(n,this,t)),this._$AV.push(l),a=o[++c]}r!==a?.index&&(n=w.nextNode(),r++)}return w.currentNode=E,s}p(t){let e=0;for(let o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}},L=class i{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,o,s){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=S(this,t,e),O(t)?t===h||t==null||t===""?(this._$AH!==h&&this._$AR(),this._$AH=h):t!==this._$AH&&t!==b&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ce(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==h&&O(this._$AH)?this._$AA.nextSibling.data=t:this.T(E.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:o}=t,s=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=N.createElement(Ut(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===s)this._$AH.p(e);else{let n=new it(s,this),r=n.u(this.options);n.p(e),this.T(r),this._$AH=n}}_$AC(t){let e=Mt.get(t.strings);return e===void 0&&Mt.set(t.strings,e=new N(t)),e}k(t){lt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,o,s=0;for(let n of t)s===e.length?e.push(o=new i(this.O(R()),this.O(R()),this,this.options)):o=e[s],o._$AI(n),s++;s<e.length&&(this._$AR(o&&o._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let o=At(t).nextSibling;At(t).remove(),t=o}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},k=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,o,s,n){this.type=1,this._$AH=h,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=h}_$AI(t,e=this,o,s){let n=this.strings,r=!1;if(n===void 0)t=S(this,t,e,0),r=!O(t)||t!==this._$AH&&t!==b,r&&(this._$AH=t);else{let c=t,a,l;for(t=n[0],a=0;a<n.length-1;a++)l=S(this,c[o+a],e,a),l===b&&(l=this._$AH[a]),r||=!O(l)||l!==this._$AH[a],l===h?t=h:t!==h&&(t+=(l??"")+n[a+1]),this._$AH[a]=l}r&&!s&&this.j(t)}j(t){t===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},st=class extends k{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===h?void 0:t}},nt=class extends k{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==h)}},rt=class extends k{constructor(t,e,o,s,n){super(t,e,o,s,n),this.type=5}_$AI(t,e=this){if((t=S(this,t,e,0)??h)===b)return;let o=this._$AH,s=t===h&&o!==h||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,n=t!==h&&(o===h||s);s&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},at=class{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t)}};var de=ct.litHtmlPolyfillSupport;de?.(N,L),(ct.litHtmlVersions??=[]).push("3.3.3");var Rt=(i,t,e)=>{let o=e?.renderBefore??t,s=o._$litPart$;if(s===void 0){let n=e?.renderBefore??null;o._$litPart$=s=new L(t.insertBefore(R(),n),n,void 0,e??{})}return s._$AI(i),s};var pt=globalThis,v=class extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Rt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return b}};v._$litElement$=!0,v.finalized=!0,pt.litElementHydrateSupport?.({LitElement:v});var pe=pt.litElementPolyfillSupport;pe?.({LitElement:v});(pt.litElementVersions??=[]).push("4.2.2");var ht=i=>typeof i=="string"&&/^#[\da-f]{6}$/i.test(i),ut=i=>typeof i=="string"&&/^mdi:[a-z0-9-]+$/.test(i);function T(i){return[...new Set(i.entities??(i.entity?[i.entity]:[]))]}function Ot(i){if(!i||typeof i!="object")throw new Error("Choose a waste sensor or calendar.");if(i.entities!==void 0&&(!Array.isArray(i.entities)||i.entities.some(e=>typeof e!="string")))throw new Error("entities must be an array of entity IDs.");if(i.entity&&i.entities)throw new Error("Use entity or entities, not both.");let t=T(i);if(!t.length||t.length>12||t.some(e=>!/^(sensor|calendar)\.[a-z0-9_]+$/.test(e)))throw new Error("Choose 1\u201312 sensor or calendar entities.");if(i.layout!==void 0&&!["compact","hero","schedule"].includes(i.layout))throw new Error("Unknown layout.");for(let[e,o]of[["days_to_show",366],["max_groups",50]]){let s=i[e];if(s!==void 0&&(!Number.isInteger(s)||s<1||s>o))throw new Error(`${e} must be 1\u2013${o}.`)}for(let e of["show_artwork","show_updated"])if(i[e]!==void 0&&typeof i[e]!="boolean")throw new Error(`${e} must be true or false.`);if(i.title!==void 0&&typeof i.title!="string")throw new Error("title must be text.");if(i.locale!==void 0){if(typeof i.locale!="string")throw new Error("locale must be a language code.");new Intl.DateTimeFormat(i.locale)}if(i.overrides!==void 0){if(!Array.isArray(i.overrides)||i.overrides.length>100)throw new Error("overrides must contain at most 100 types.");for(let e of i.overrides)if(!e||typeof e.type!="string"||!e.type.trim()||e.name!==void 0&&typeof e.name!="string"||e.hidden!==void 0&&typeof e.hidden!="boolean"||e.color!==void 0&&!ht(e.color)||e.icon!==void 0&&!ut(e.icon))throw new Error("Invalid type override. Use an exact type ID or name, mdi icon, and #RRGGBB color.")}if(i.tap_action){if(!["details","more-info","navigate","none"].includes(i.tap_action.action))throw new Error("Unsupported tap action.");if(i.tap_action.action==="navigate"&&(typeof i.tap_action.navigation_path!="string"||!/^\/(?!\/)/.test(i.tap_action.navigation_path)||/[\\\u0000-\u001f]/.test(i.tap_action.navigation_path)))throw new Error("Navigation requires a local path beginning with /.")}return{...i,entities:i.entities?[...i.entities]:void 0,layout:i.layout??"compact",days_to_show:i.days_to_show??30,max_groups:i.max_groups??5}}function q(i){if(typeof i!="string"||!/^\d{4}-\d{2}-\d{2}$/.test(i))return!1;let t=new Date(`${i}T12:00:00Z`);return Number.isFinite(t.getTime())&&t.toISOString().slice(0,10)===i}function H(i,t){let e=new Intl.DateTimeFormat("en-CA",{timeZone:t,year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(i),o=s=>e.find(n=>n.type===s).value;return`${o("year")}-${o("month")}-${o("day")}`}function Nt(i,t){let e=new Date(`${i}T12:00:00Z`);return e.setUTCDate(e.getUTCDate()+t),e.toISOString().slice(0,10)}function he(i,t){return Math.round((Date.parse(`${t}T12:00:00Z`)-Date.parse(`${i}T12:00:00Z`))/864e5)}function G(i,t,e){let o=he(t,i);return o<=1&&o>=0?new Intl.RelativeTimeFormat(e,{numeric:"auto"}).format(o,"day"):new Intl.DateTimeFormat(e,{weekday:"long",day:"numeric",month:"short",timeZone:"UTC"}).format(new Date(`${i}T12:00:00Z`))}var V=i=>i!==null&&typeof i=="object"&&!Array.isArray(i)?i:void 0,mt=i=>typeof i=="string"&&i.trim()?i:void 0;function ft(i,t,e){let o=i.date??e,s=mt(i.type);if(!(!q(o)||!s))return{sourceId:t,entityId:t,date:o,label:s,typeId:mt(i.type_id),icon:ut(i.icon)?i.icon:void 0,color:ht(i.color)?i.color:void 0,colorSource:["source","customize","default"].includes(String(i.color_source))?i.color_source:void 0}}function Lt(i){let t=i.attributes,e="upcoming"in t?t.upcoming:"upcoming_pickups"in t?t.upcoming_pickups:"next_pickup"in t?t.next_pickup===null?[]:[t.next_pickup]:void 0;if(!Array.isArray(e))return{events:[],supported:!1,invalid:e!==void 0};let o=[],s=e.length>2e3;for(let r of e.slice(0,2e3)){if(o.length>=2e3){s=!0;break}let c=V(r);if(!c||!q(c.date)){s=!0;continue}if(Array.isArray(c.collections)){c.collections.length>100&&(s=!0);for(let a of c.collections.slice(0,100)){let l=V(a),p=l&&ft(l,i.entity_id,c.date);p?o.push(p):s=!0}}else if(Array.isArray(c.types)){c.types.length>100&&(s=!0);for(let a of c.types.slice(0,100)){let l=ft({...c,type:a,color:void 0,color_source:void 0,type_id:void 0},i.entity_id);l?o.push(l):s=!0}}else{let a=ft(c,i.entity_id);a?o.push(a):s=!0}}let n=typeof t.last_update=="string"&&/^\d{4}-\d{2}-\d{2}T/.test(t.last_update)&&Number.isFinite(Date.parse(t.last_update))?t.last_update:void 0;return{events:o.slice(0,2e3),supported:!0,invalid:s||o.length>2e3,fetchedAt:n}}function It(i,t,e){if(!Array.isArray(i)||i.length>1e4)throw new Error("Invalid calendar response.");return i.flatMap(o=>{let s=V(o),n=V(s?.start),r=mt(s?.summary);if(!n||!r)return[];let c;return q(n.date)?c=n.date:typeof n.dateTime=="string"&&/(?:Z|[+-]\d{2}:\d{2})$/.test(n.dateTime)&&Number.isFinite(Date.parse(n.dateTime))&&(c=H(new Date(n.dateTime),e)),c?[{sourceId:t,entityId:t,date:c,label:r}]:[]})}var jt=new WeakMap;function Bt(i,t,e,o){let s=jt.get(i.connection);s||(s=new Map,jt.set(i.connection,s));let n=JSON.stringify([t,e,o,i.states[t]?.last_updated]),r=s.get(n);if(r&&r.expires>Date.now())return r.promise;for(let[p,d]of s)d.expires<=Date.now()&&s.delete(p);s.size>=100&&s.delete(s.keys().next().value);let c=new URLSearchParams({start:`${e}T00:00:00+14:00`,end:`${o}T00:00:00-12:00`}),a=i.callApi("GET",`calendars/${encodeURIComponent(t)}?${c}`),l={promise:a,expires:Date.now()+6e4};return s.set(n,l),a.catch(()=>{s.get(n)===l&&s.delete(n)}),a}function Zt(i,t,e,o){let s=new Map;for(let n of i){if(n.date<e||n.date>=o)continue;let r=t.overrides?.find(a=>a.type===(n.typeId??n.label));if(r?.hidden)continue;let c=JSON.stringify([n.sourceId,n.date,n.typeId??n.label]);s.has(c)||s.set(c,{...n,label:r?.name??n.label,color:r?.color??n.color,colorSource:r?.color?"customize":n.colorSource,icon:r?.icon??n.icon})}return[...s.values()].sort((n,r)=>n.date.localeCompare(r.date)||n.label.localeCompare(r.label))}function Wt(i){let t=new Map;for(let e of i){let o=t.get(e.date)??[];o.push(e),t.set(e.date,o)}return[...t].map(([e,o])=>({date:e,events:o}))}function qt(i){return i.colorSource==="source"||i.colorSource==="customize"?i.color:void 0}var F=class{constructor(){this.generation=0;this.cache=new Map}reset(){this.generation++,this.cache.clear(),this.connection=void 0,this.timeZone=void 0}cancel(){this.generation++}async update(t,e,o){(this.connection!==t.connection||this.timeZone!==t.config.time_zone)&&(this.cache.clear(),this.connection=t.connection,this.timeZone=t.config.time_zone);let s=++this.generation,n=t.config.time_zone,r=H(new Date,n),c=Nt(r,e.days_to_show),a={rangeStart:r,rangeEnd:c,timeZone:n,messages:[]};o({...a,status:"loading",events:[]});let l=0,p=0,d=[],m=[];if(await Promise.all(T(e).map(async f=>{try{let y=t.states[f];if(!y||y.state==="unavailable"||f.startsWith("calendar.")&&y.state==="unknown")throw new Error(`${f} is unavailable.`);let I;if(f.startsWith("calendar."))I=It(await Bt(t,f,r,c),f,n);else{let M=Lt(y);if(!M.supported)throw new Error(`${f}: select a sensor with Generic details or a calendar.`);if(M.invalid)throw new Error(`${f} contains invalid collection records.`);I=M.events,M.fetchedAt&&m.push(M.fetchedAt)}if(s!==this.generation)return;this.cache.set(f,I),d.push(...I),p++}catch(y){if(s!==this.generation)return;l++,a.messages.push(y instanceof Error?y.message:`${f} could not be loaded.`),d.push(...this.cache.get(f)??[])}})),s!==this.generation)return;let g=Zt(d,e,r,c);o({...a,events:g,status:l?g.length||p?"stale":"unavailable":g.length?"ready":"empty",fetchedAt:m.sort()[0]})}};var Gt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Vt=i=>(...t)=>({_$litDirective$:i,values:t}),J=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var Ft="important",ue=" !"+Ft,gt=Vt(class extends J{constructor(i){if(super(i),i.type!==Gt.ATTRIBUTE||i.name!=="style"||i.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(i){return Object.keys(i).reduce((t,e)=>{let o=i[e];return o==null?t:t+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(i,[t]){let{style:e}=i.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let o of this.ft)t[o]==null&&(this.ft.delete(o),o.includes("-")?e.removeProperty(o):e[o]=null);for(let o in t){let s=t[o];if(s!=null){this.ft.add(o);let n=typeof s=="string"&&s.endsWith(ue);o.includes("-")||n?e.setProperty(o,n?s.slice(0,-11):s,n?Ft:""):e[o]=s}}return b}});var yt=i=>u`<div class="chips">
    ${i.map(t=>u`<span class="chip" style=${gt({"--waste-type-color":t.color})}><ha-icon aria-hidden="true" .icon=${t.icon??"mdi:trash-can-outline"}></ha-icon><span>${t.label}</span></span>`)}
  </div>`,Jt=i=>u`<div class="bins" aria-hidden="true">
    ${i.slice(0,3).map(t=>u`<div
          class="bin"
          style=${gt({"--waste-type-color":qt(t)})}
        >
          <svg viewBox="0 0 52 88" fill="none">
            <path d="M9 22h34l-4 55H14z" fill="currentColor" />
            <path d="M14 25h6l2 48h-5z" fill="white" opacity=".16" />
            <path d="M39 25h-4l-2 48h3z" fill="black" opacity=".14" />
            <path d="M7 17h38v7H7zM18 11h17v5H18z" fill="currentColor" />
            <path d="M7 17h38v2H7z" fill="white" opacity=".22" />
            <circle cx="16" cy="80" r="4" fill="#42464b" />
            <circle cx="37" cy="80" r="4" fill="#42464b" />
            <path
              d="M22 35v26M29 35v26"
              stroke="white"
              stroke-opacity=".15"
              stroke-width="2"
            />
          </svg>
        </div>`)}
  </div>`,K=(i,t,e)=>u`${i.map(o=>{let s=new Date(`${o.date}T12:00:00Z`);return u`<div class="group">
      <div class="day" aria-hidden="true">
        ${new Intl.DateTimeFormat(e,{month:"short",timeZone:"UTC"}).format(s)}<strong
          >${s.getUTCDate()}</strong
        >
      </div>
      <div class="group-body">
        <div class="group-date">${G(o.date,t,e)}</div>
        ${yt(o.events)}
      </div>
    </div>`})}`;var fe={title:"Waste collection",next:"Next collection",schedule:"Collection schedule",close:"Close",loading:"Loading schedule\u2026",empty:"No collections in this date range",partialEmpty:"No dates from the available sources",unavailable:"Schedule unavailable",stale:"Some sources are unavailable. Dates may be out of date.",staleBadge:"Out of date",collections:"collections",updated:"Provider updated",details:"View schedule",today:"Today"},me={title:"Odbi\xF3r odpad\xF3w",next:"Najbli\u017Cszy odbi\xF3r",schedule:"Harmonogram odbioru",close:"Zamknij",loading:"\u0141adowanie harmonogramu\u2026",empty:"Brak odbior\xF3w w tym zakresie dat",partialEmpty:"Brak termin\xF3w z dost\u0119pnych \u017Ar\xF3de\u0142",unavailable:"Harmonogram niedost\u0119pny",stale:"Niekt\xF3re \u017Ar\xF3d\u0142a s\u0105 niedost\u0119pne. Terminy mog\u0105 by\u0107 nieaktualne.",staleBadge:"Nieaktualne",collections:"frakcje",updated:"Aktualizacja \u017Ar\xF3d\u0142a",details:"Zobacz harmonogram",today:"Dzisiaj"},Kt=i=>i.toLowerCase().startsWith("pl")?me:fe;var Yt=P`
  :host {
    display: block;
    color: var(--primary-text-color, #212121);
    font-family: var(--ha-font-family, inherit);
  }
  * {
    box-sizing: border-box;
  }
  ha-card {
    display: block;
    overflow: hidden;
    background: var(--ha-card-background, var(--card-background-color, #fff));
    border-radius: var(--ha-card-border-radius, 16px);
    box-shadow: var(--ha-card-box-shadow, none);
    border: var(--ha-card-border-width, 1px) solid
      var(--ha-card-border-color, var(--divider-color, #ddd));
  }
  button {
    font: inherit;
    color: inherit;
    cursor: pointer;
  }
  button:focus-visible {
    outline: 3px solid var(--primary-color, #03a9f4);
    outline-offset: -3px;
  }
  .surface {
    padding: 20px;
    position: relative;
  }
  .heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 18px;
  }
  .eyebrow {
    color: var(--secondary-text-color, #727272);
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.06em;
  }
  .heading h2 {
    margin: 0;
    font-size: 16px;
    font-weight: 600;
    overflow-wrap: anywhere;
  }
  .heading ha-icon {
    color: var(--secondary-text-color, #727272);
    --mdc-icon-size: 22px;
    flex-shrink: 0;
  }
  .primary {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .copy {
    flex: 1;
    min-width: 0;
  }
  .date {
    display: block;
    margin: 6px 0 10px;
    font-size: 28px;
    line-height: 1.15;
    font-weight: 650;
    letter-spacing: -0.035em;
    text-transform: capitalize;
    overflow-wrap: anywhere;
  }
  .hero .date {
    font-size: clamp(28px, 6vw, 38px);
  }
  .full-date {
    color: var(--secondary-text-color, #727272);
    font-size: 13px;
    margin: 8px 0 0;
  }
  .chips {
    display: flex;
    flex-wrap: wrap;
    gap: 6px 12px;
  }
  .chip {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    min-width: 0;
    max-width: 100%;
    font-size: 14px;
    line-height: 1.5;
  }
  .chip span {
    overflow-wrap: anywhere;
  }
  .chip ha-icon {
    flex-shrink: 0;
    --mdc-icon-size: 18px;
    color: var(--waste-type-color, var(--secondary-text-color, #727272));
  }
  .bins {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex: 0 0 auto;
    gap: 6px;
    max-width: 42%;
  }
  .bin {
    width: 44px;
    height: 76px;
    position: relative;
    color: var(--waste-type-color, var(--secondary-text-color, #727272));
    filter: drop-shadow(0 5px 3px #0002);
  }
  .bin svg {
    width: 100%;
    height: 100%;
  }
  .group {
    display: flex;
    gap: 16px;
    padding: 15px 0;
    border-top: 1px solid var(--divider-color, #ddd);
    align-items: center;
  }
  .group:first-child {
    border-top: 0;
  }
  .day {
    flex: 0 0 48px;
    text-align: center;
    color: var(--secondary-text-color, #727272);
    font-size: 11px;
    text-transform: uppercase;
  }
  .day strong {
    display: block;
    color: var(--primary-text-color, #212121);
    font-size: 23px;
    line-height: 1.2;
    font-weight: 600;
  }
  .group-body {
    min-width: 0;
    flex: 1;
  }
  .group-date {
    font-size: 13px;
    color: var(--secondary-text-color, #727272);
    margin-bottom: 5px;
    text-transform: capitalize;
  }
  .upcoming {
    margin-top: 20px;
  }
  .action {
    display: block;
    width: 100%;
    min-height: 44px;
    border: 0;
    border-top: 1px solid var(--divider-color, #ddd);
    background: transparent;
    color: var(--primary-color, #03a9f4);
    padding: 10px 20px;
    font-size: 13px;
    font-weight: 600;
    text-align: start;
  }
  .action:hover {
    background: var(--secondary-background-color, #f5f5f5);
  }
  .state {
    padding: 12px 0;
    line-height: 1.5;
    color: var(--secondary-text-color, #727272);
    overflow-wrap: anywhere;
  }
  .notice {
    margin: 14px 0 0;
    font-size: 12px;
    line-height: 1.5;
    color: var(--warning-color, #b26a00);
  }
  .updated {
    margin: 12px 0 0;
    font-size: 11px;
    color: var(--secondary-text-color, #727272);
  }
  .badge {
    display: flex;
    align-items: center;
    gap: 10px;
    border: 1px solid var(--ha-card-border-color, var(--divider-color, #ddd));
    background: var(--ha-card-background, var(--card-background-color, #fff));
    border-radius: 24px;
    min-height: 44px;
    padding: 6px 14px 6px 10px;
    max-width: 100%;
    text-align: start;
  }
  .badge ha-icon {
    --mdc-icon-size: 22px;
    flex-shrink: 0;
    color: var(--primary-color, #03a9f4);
  }
  .badge-copy {
    min-width: 0;
  }
  .badge strong {
    display: block;
    font-size: 13px;
    text-transform: capitalize;
  }
  .badge small {
    display: block;
    color: var(--secondary-text-color, #727272);
    font-size: 11px;
    max-width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  dialog {
    color: var(--primary-text-color, #212121);
    background: var(--ha-card-background, var(--card-background-color, #fff));
    border: 1px solid var(--divider-color, #ddd);
    border-radius: 20px;
    padding: 20px;
    width: min(480px, calc(100vw - 24px));
    max-height: calc(100dvh - 32px);
    overflow: auto;
    box-shadow: 0 20px 80px #0005;
  }
  dialog::backdrop {
    background: #0007;
  }
  dialog .heading {
    position: sticky;
    top: -20px;
    background: var(--ha-card-background, var(--card-background-color, #fff));
    padding: 12px 0;
    margin: 0;
    z-index: 1;
  }
  .close {
    border: 0;
    background: transparent;
    min-width: 44px;
    min-height: 44px;
    border-radius: 50%;
  }
  @media (max-width: 360px) {
    .surface {
      padding: 16px;
    }
    .bins {
      gap: 0;
    }
    .bin {
      width: 34px;
      height: 64px;
    }
    .primary {
      gap: 10px;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    * {
      scroll-behavior: auto;
    }
  }
`;async function vt(i){return customElements.get("ha-form")||await(await(await window.loadCardHelpers()).createCardElement({type:"button"})).constructor.getConfigElement(),document.createElement(i)}var A=class extends v{constructor(){super(...arguments);this.badge=!1;this.controller=new F;this.visible=()=>{document.visibilityState==="visible"&&this.refresh()}}set hass(e){let o=this.ha;this.ha=e,(!o||o.connection!==e.connection||o.config.time_zone!==e.config.time_zone||T(this.config??{type:""}).some(s=>o.states[s]!==e.states[s]))&&this.refresh(),(!o||o.locale?.language!==e.locale?.language||o.language!==e.language)&&this.requestUpdate()}get hass(){return this.ha}setConfig(e){this.config=Ot(e),this.controller.reset(),this.snapshot=void 0,this.refresh(),this.requestUpdate()}static getConfigElement(){return vt("waste-pickup-planner-card-editor")}static getStubConfig(e){return{type:"custom:waste-pickup-planner-card",entity:Object.values(e.states).find(s=>s.entity_id.startsWith("sensor.")&&Array.isArray(s.attributes.upcoming))?.entity_id??Object.keys(e.states).find(s=>s.startsWith("calendar."))??"sensor.waste_schedule",layout:"compact"}}getCardSize(){return this.config?.layout==="schedule"?Math.min(this.config.max_groups+1,8):this.config?.layout==="hero"?5:3}getGridOptions(){return{columns:12,min_columns:6,rows:"auto"}}connectedCallback(){super.connectedCallback(),document.addEventListener("visibilitychange",this.visible),this.timer=setInterval(()=>this.refresh(),6e4),this.refresh()}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.timer),document.removeEventListener("visibilitychange",this.visible),this.controller.cancel()}refresh(){!this.isConnected||!this.ha||!this.config||(this.day=H(new Date,this.ha.config.time_zone),this.controller.update(this.ha,this.config,e=>{(e.status!=="loading"||!this.snapshot)&&(this.snapshot=e)}))}locale(){return this.config?.locale||this.ha?.locale?.language||this.ha?.language||"en"}activate(){let e=this.config;if(!e)return;let o=e.tap_action?.action??"details";o!=="none"&&(o==="more-info"?this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:T(e)[0]},bubbles:!0,composed:!0})):o==="navigate"?(history.pushState(null,"",e.tap_action.navigation_path),window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1}}))):this.renderRoot.querySelector("dialog")?.showModal())}render(){if(!this.config)return h;let e=this.locale(),o=Kt(e),s=this.snapshot,n=Wt(s?.events??[]),r=n[0],c=s?.rangeStart??this.day??"2000-01-01",a=this.config.title??o.title,l=s?.status??"loading",p=l==="empty"?o.empty:l==="stale"?o.partialEmpty:l==="unavailable"?o.unavailable:o.loading,d=r?.events.map(y=>y.label).join(" \xB7 ")??p,m=r?G(r.date,c,e):p,g=l==="stale"?u`<p class="notice" role="status">${o.stale}</p>`:h,f=u`<dialog aria-label=${o.schedule}>
      <div class="heading">
        <h2>${a}</h2>
        <button
          class="close"
          aria-label=${o.close}
          @click=${()=>this.renderRoot.querySelector("dialog")?.close()}
        >
          ✕
        </button>
      </div>
      ${n.length?K(n,c,e):u`<p class="state">${p}</p>`}${g}${s?.messages.map(y=>u`<p class="state">${y}</p>`)}
    </dialog>`;return this.badge?u`<button
          class="badge"
          aria-label=${`${a}: ${m}. ${d}${l==="stale"?`. ${o.stale}`:""}`}
          title=${d}
          @click=${this.activate}
        >
          <ha-icon
            aria-hidden="true"
            .icon=${l==="stale"||l==="unavailable"?"mdi:alert-circle-outline":"mdi:trash-can-outline"}
          ></ha-icon
          ><span class="badge-copy"
            ><strong>${r?m:a}</strong
            ><small
              >${l==="stale"?`${o.staleBadge} \xB7 `:""}${r&&r.events.length>2?`${r.events.length} ${o.collections}`:d}</small
            ></span
          ></button
        >${f}`:u`<ha-card
        ><section class=${`surface ${this.config.layout}`}>
          <div class="heading">
            <h2>${a}</h2>
            <ha-icon aria-hidden="true" icon="mdi:calendar-outline"></ha-icon>
          </div>
          ${r?this.config.layout==="schedule"?K(n.slice(0,this.config.max_groups),c,e):u`<div class="primary">
                      <div class="copy">
                        <div class="eyebrow">${o.next}</div>
                        <span class="date">${m}</span>${yt(r.events)}
                        <p class="full-date">
                          ${new Intl.DateTimeFormat(e,{dateStyle:"long",timeZone:"UTC"}).format(new Date(`${r.date}T12:00:00Z`))}
                        </p>
                      </div>
                      ${this.config.layout==="hero"&&this.config.show_artwork?Jt(r.events):h}
                    </div>
                    ${this.config.layout==="hero"&&n.length>1?u`<div class="upcoming">${K(n.slice(1,this.config.max_groups),c,e)}</div>`:h}`:u`<p class="state" role="status">${p}</p>`}
          ${g}${l==="unavailable"?s?.messages.map(y=>u`<p class="state">${y}</p>`):h}
          ${this.config.show_updated&&s?.fetchedAt?u`<p class="updated">${o.updated}: ${s.fetchedAt}</p>`:h}
        </section>
        ${this.config.tap_action?.action==="none"?h:u`<button class="action" @click=${this.activate}>${this.config.tap_action?.action==="more-info"?a:o.details} <span aria-hidden="true">↗</span></button>`}</ha-card
      >${f}`}};A.styles=Yt,A.properties={snapshot:{state:!0}};var Y=class extends A{constructor(){super(...arguments);this.badge=!0}static getConfigElement(){return vt("waste-pickup-planner-badge-editor")}static getStubConfig(e){return{...super.getStubConfig(e),type:"custom:waste-pickup-planner-badge"}}};var ge=[{name:"entities",required:!0,selector:{entity:{domain:["sensor","calendar"],multiple:!0}}},{name:"title",selector:{text:{}}},{name:"layout",selector:{select:{options:["compact","hero","schedule"],mode:"dropdown"}}},{name:"days_to_show",selector:{number:{min:1,max:366,mode:"box"}}},{name:"max_groups",selector:{number:{min:1,max:50,mode:"box"}}},{name:"show_artwork",selector:{boolean:{}}},{name:"show_updated",selector:{boolean:{}}},{name:"locale",selector:{text:{}}}],ye={entities:"Waste sensors or calendars",title:"Title",layout:"Layout",days_to_show:"Days to show",max_groups:"Visible date groups",show_artwork:"Show bin artwork in hero layout",show_updated:"Show provider update time",locale:"Language override (optional)"},C=class extends v{setConfig(t){this.config={...t}}changed(t){this.config={...this.config,...t},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this.config},bubbles:!0,composed:!0}))}override(t,e){let o=[...this.config?.overrides??[]];o[t]={...o[t],...e},this.changed({overrides:o})}render(){if(!this.config||!this.hass)return h;let t={...this.config,entities:this.config.entities??(this.config.entity?[this.config.entity]:[])};return u`<ha-form
        .hass=${this.hass}
        .data=${t}
        .schema=${ge.filter(e=>!this.config.type.includes("badge")||!["layout","max_groups","show_artwork"].includes(e.name))}
        .computeLabel=${e=>ye[e.name]}
        @value-changed=${e=>this.changed({...e.detail.value,entity:void 0})}
      ></ha-form>
      <p>
        Select one authoritative source per address. To use a Waste Collection
        Schedule sensor, set its details format to Generic. Calendars also work.
      </p>
      <label
        >Tap action<select
          .value=${this.config.tap_action?.action??"details"}
          @change=${e=>this.changed({tap_action:{action:e.target.value}})}
        >
          ${["details","more-info","navigate","none"].map(e=>u`<option value=${e}>${e}</option>`)}
        </select></label
      >
      ${this.config.tap_action?.action==="navigate"?u`<label>Dashboard path<input .value=${this.config.tap_action.navigation_path??""} placeholder="/lovelace/waste" @change=${e=>this.changed({tap_action:{action:"navigate",navigation_path:e.target.value}})} /></label>`:h}
      <details>
        <summary>Collection names, colors and visibility</summary>
        <p>
          Use the exact type ID from v3, or the complete collection name for
          older sensors and calendars.
        </p>
        ${(this.config.overrides??[]).map((e,o)=>u`<fieldset>
            <legend>Collection ${o+1}</legend>
            ${[["type","Type ID or exact name"],["name","Display name"],["color","Bin color (#RRGGBB)"],["icon","Icon (mdi:\u2026)"]].map(([s,n])=>u`<label
                  >${n}<input
                    .value=${e[s]??""}
                    @change=${r=>this.override(o,{[s]:r.target.value||void 0})}
                /></label>`)}<label
              ><input
                type="checkbox"
                .checked=${e.hidden??!1}
                @change=${s=>this.override(o,{hidden:s.target.checked})}
              />
              Hide this collection</label
            ><button
              class="remove"
              @click=${()=>this.changed({overrides:this.config.overrides.filter((s,n)=>n!==o)})}
            >
              Remove override
            </button>
          </fieldset>`)}
        <button
          @click=${()=>this.changed({overrides:[...this.config.overrides??[],{type:"collection_name"}]})}
        >
          Add collection override
        </button>
      </details>`}};C.properties={hass:{attribute:!1},config:{state:!0}},C.styles=P`
    * { box-sizing: border-box; }
    :host {
      display: block;
    }
    label {
      display: block;
      margin: 12px 0;
      font-size: 14px;
    }
    input,
    select,
    button {
      font: inherit;
      color: var(--primary-text-color);
      background: var(--card-background-color);
      border: 1px solid var(--divider-color);
      border-radius: 8px;
      min-height: 44px;
      padding: 8px;
      max-width: 100%;
    }
    input:not([type="checkbox"]),
    select {
      display: block;
      width: 100%;
      margin-top: 5px;
    }
    fieldset {
      border: 1px solid var(--divider-color);
      border-radius: 12px;
      margin: 12px 0;
      padding: 12px;
    }
    button {
      cursor: pointer;
    }
    p {
      font-size: 13px;
      color: var(--secondary-text-color);
      line-height: 1.5;
    }
    summary {
      cursor: pointer;
      min-height: 44px;
      display: flex;
      align-items: center;
    }
    button:focus-visible,
    input:focus-visible,
    select:focus-visible {
      outline: 2px solid var(--primary-color);
    }
    .remove {
      margin-top: 8px;
    }
  `;var Q=class extends C{};customElements.define("waste-pickup-planner-card",A);customElements.define("waste-pickup-planner-badge",Y);customElements.define("waste-pickup-planner-card-editor",C);customElements.define("waste-pickup-planner-badge-editor",Q);var Qt=window;(Qt.customCards??=[]).push({type:"waste-pickup-planner-card",name:"Waste Pickup Planner",description:"Date-grouped waste collections with compact, hero and schedule layouts.",preview:!0});(Qt.customBadges??=[]).push({type:"waste-pickup-planner-badge",name:"Waste Pickup Planner Badge",description:"The next collection date and types, with schedule details."});
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
lit-html/lit-html.js:
lit-element/lit-element.js:
lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/style-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
