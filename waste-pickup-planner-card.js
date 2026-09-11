var B=globalThis,Z=B.ShadowRoot&&(B.ShadyCSS===void 0||B.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,tt=Symbol(),bt=new WeakMap,P=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==tt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(Z&&t===void 0){let i=e!==void 0&&e.length===1;i&&(t=bt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&bt.set(e,t))}return t}toString(){return this.cssText}},_t=o=>new P(typeof o=="string"?o:o+"",void 0,tt),z=(o,...t)=>{let e=o.length===1?o[0]:t.reduce((i,s,n)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+o[n+1],o[0]);return new P(e,o,tt)},wt=(o,t)=>{if(Z)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let i=document.createElement("style"),s=B.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,o.appendChild(i)}},et=Z?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return _t(e)})(o):o;var{is:ee,defineProperty:ie,getOwnPropertyDescriptor:oe,getOwnPropertyNames:se,getOwnPropertySymbols:ne,getPrototypeOf:re}=Object,W=globalThis,xt=W.trustedTypes,ae=xt?xt.emptyScript:"",ce=W.reactiveElementPolyfillSupport,O=(o,t)=>o,it={toAttribute(o,t){switch(t){case Boolean:o=o?ae:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},At=(o,t)=>!ee(o,t),Et={attribute:!0,type:String,converter:it,reflect:!1,useDefault:!1,hasChanged:At};Symbol.metadata??=Symbol("metadata"),W.litPropertyMetadata??=new WeakMap;var b=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Et){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&ie(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){let{get:s,set:n}=oe(this.prototype,t)??{get(){return this[e]},set(r){this[e]=r}};return{get:s,set(r){let c=s?.call(this);n?.call(this,r),this.requestUpdate(t,c,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Et}static _$Ei(){if(this.hasOwnProperty(O("elementProperties")))return;let t=re(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(O("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(O("properties"))){let e=this.properties,i=[...se(e),...ne(e)];for(let s of i)this.createProperty(s,e[s])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(let[e,i]of this.elementProperties){let s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let s of i)e.unshift(et(s))}else t!==void 0&&e.push(et(t));return e}static _$Eu(t,e){let i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return wt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){let i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){let n=(i.converter?.toAttribute!==void 0?i.converter:it).toAttribute(e,i.type);this._$Em=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){let i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){let n=i.getPropertyOptions(s),r=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:it;this._$Em=s;let c=r.fromAttribute(e,n.type);this[s]=c??this._$Ej?.get(s)??c,this._$Em=null}}requestUpdate(t,e,i,s=!1,n){if(t!==void 0){let r=this.constructor;if(s===!1&&(n=this[t]),i??=r.getPropertyOptions(t),!((i.hasChanged??At)(n,e)||i.useDefault&&i.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:n},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),n!==!0||r!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[s,n]of this._$Ep)this[s]=n;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[s,n]of i){let{wrapped:r}=n,c=this[s];r!==!0||this._$AL.has(s)||c===void 0||this.C(s,void 0,n,c)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[O("elementProperties")]=new Map,b[O("finalized")]=new Map,ce?.({ReactiveElement:b}),(W.reactiveElementVersions??=[]).push("2.1.2");var lt=globalThis,Ct=o=>o,q=lt.trustedTypes,St=q?q.createPolicy("lit-html",{createHTML:o=>o}):void 0,Pt="$lit$",w=`lit$${Math.random().toFixed(9).slice(2)}$`,zt="?"+w,le=`<${zt}>`,C=document,R=()=>C.createComment(""),N=o=>o===null||typeof o!="object"&&typeof o!="function",dt=Array.isArray,de=o=>dt(o)||typeof o?.[Symbol.iterator]=="function",ot=`[ 	
\f\r]`,U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,kt=/-->/g,Tt=/>/g,E=RegExp(`>|${ot}(?:([^\\s"'>=/]+)(${ot}*=${ot}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Dt=/'/g,Ht=/"/g,Ot=/^(?:script|style|textarea|title)$/i,pt=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),u=pt(1),Ee=pt(2),Ae=pt(3),_=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),Mt=new WeakMap,A=C.createTreeWalker(C,129);function Ut(o,t){if(!dt(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return St!==void 0?St.createHTML(t):t}var pe=(o,t)=>{let e=o.length-1,i=[],s,n=t===2?"<svg>":t===3?"<math>":"",r=U;for(let c=0;c<e;c++){let a=o[c],l,h,d=-1,m=0;for(;m<a.length&&(r.lastIndex=m,h=r.exec(a),h!==null);)m=r.lastIndex,r===U?h[1]==="!--"?r=kt:h[1]!==void 0?r=Tt:h[2]!==void 0?(Ot.test(h[2])&&(s=RegExp("</"+h[2],"g")),r=E):h[3]!==void 0&&(r=E):r===E?h[0]===">"?(r=s??U,d=-1):h[1]===void 0?d=-2:(d=r.lastIndex-h[2].length,l=h[1],r=h[3]===void 0?E:h[3]==='"'?Ht:Dt):r===Ht||r===Dt?r=E:r===kt||r===Tt?r=U:(r=E,s=void 0);let g=r===E&&o[c+1].startsWith("/>")?" ":"";n+=r===U?a+le:d>=0?(i.push(l),a.slice(0,d)+Pt+a.slice(d)+w+g):a+w+(d===-2?c:g)}return[Ut(o,n+(o[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]},L=class o{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,r=0,c=t.length-1,a=this.parts,[l,h]=pe(t,e);if(this.el=o.createElement(l,i),A.currentNode=this.el.content,e===2||e===3){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(s=A.nextNode())!==null&&a.length<c;){if(s.nodeType===1){if(s.hasAttributes())for(let d of s.getAttributeNames())if(d.endsWith(Pt)){let m=h[r++],g=s.getAttribute(d).split(w),y=/([.?@])?(.*)/.exec(m);a.push({type:1,index:n,name:y[2],strings:g,ctor:y[1]==="."?nt:y[1]==="?"?rt:y[1]==="@"?at:D}),s.removeAttribute(d)}else d.startsWith(w)&&(a.push({type:6,index:n}),s.removeAttribute(d));if(Ot.test(s.tagName)){let d=s.textContent.split(w),m=d.length-1;if(m>0){s.textContent=q?q.emptyScript:"";for(let g=0;g<m;g++)s.append(d[g],R()),A.nextNode(),a.push({type:2,index:++n});s.append(d[m],R())}}}else if(s.nodeType===8)if(s.data===zt)a.push({type:2,index:n});else{let d=-1;for(;(d=s.data.indexOf(w,d+1))!==-1;)a.push({type:7,index:n}),d+=w.length-1}n++}}static createElement(t,e){let i=C.createElement("template");return i.innerHTML=t,i}};function T(o,t,e=o,i){if(t===_)return t;let s=i!==void 0?e._$Co?.[i]:e._$Cl,n=N(t)?void 0:t._$litDirective$;return s?.constructor!==n&&(s?._$AO?.(!1),n===void 0?s=void 0:(s=new n(o),s._$AT(o,e,i)),i!==void 0?(e._$Co??=[])[i]=s:e._$Cl=s),s!==void 0&&(t=T(o,s._$AS(o,t.values),s,i)),t}var st=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??C).importNode(e,!0);A.currentNode=s;let n=A.nextNode(),r=0,c=0,a=i[0];for(;a!==void 0;){if(r===a.index){let l;a.type===2?l=new I(n,n.nextSibling,this,t):a.type===1?l=new a.ctor(n,a.name,a.strings,this,t):a.type===6&&(l=new ct(n,this,t)),this._$AV.push(l),a=i[++c]}r!==a?.index&&(n=A.nextNode(),r++)}return A.currentNode=C,s}p(t){let e=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},I=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=T(this,t,e),N(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==_&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):de(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==p&&N(this._$AH)?this._$AA.nextSibling.data=t:this.T(C.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=L.createElement(Ut(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{let n=new st(s,this),r=n.u(this.options);n.p(e),this.T(r),this._$AH=n}}_$AC(t){let e=Mt.get(t.strings);return e===void 0&&Mt.set(t.strings,e=new L(t)),e}k(t){dt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,s=0;for(let n of t)s===e.length?e.push(i=new o(this.O(R()),this.O(R()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let i=Ct(t).nextSibling;Ct(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},D=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,n){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=p}_$AI(t,e=this,i,s){let n=this.strings,r=!1;if(n===void 0)t=T(this,t,e,0),r=!N(t)||t!==this._$AH&&t!==_,r&&(this._$AH=t);else{let c=t,a,l;for(t=n[0],a=0;a<n.length-1;a++)l=T(this,c[i+a],e,a),l===_&&(l=this._$AH[a]),r||=!N(l)||l!==this._$AH[a],l===p?t=p:t!==p&&(t+=(l??"")+n[a+1]),this._$AH[a]=l}r&&!s&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},nt=class extends D{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}},rt=class extends D{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==p)}},at=class extends D{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){if((t=T(this,t,e,0)??p)===_)return;let i=this._$AH,s=t===p&&i!==p||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==p&&(i===p||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},ct=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){T(this,t)}};var he=lt.litHtmlPolyfillSupport;he?.(L,I),(lt.litHtmlVersions??=[]).push("3.3.3");var Rt=(o,t,e)=>{let i=e?.renderBefore??t,s=i._$litPart$;if(s===void 0){let n=e?.renderBefore??null;i._$litPart$=s=new I(t.insertBefore(R(),n),n,void 0,e??{})}return s._$AI(o),s};var ht=globalThis,v=class extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Rt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return _}};v._$litElement$=!0,v.finalized=!0,ht.litElementHydrateSupport?.({LitElement:v});var ue=ht.litElementPolyfillSupport;ue?.({LitElement:v});(ht.litElementVersions??=[]).push("4.2.2");var ut=o=>typeof o=="string"&&/^#[\da-f]{6}$/i.test(o),ft=o=>typeof o=="string"&&/^mdi:[a-z0-9-]+$/.test(o);function x(o){return[...new Set(o.entities??(o.entity?[o.entity]:[]))]}function Nt(o){if(!o||typeof o!="object")throw new Error("Choose a waste sensor or calendar.");if(o.entities!==void 0&&(!Array.isArray(o.entities)||o.entities.some(e=>typeof e!="string")))throw new Error("entities must be an array of entity IDs.");if(o.entity&&o.entities)throw new Error("Use entity or entities, not both.");let t=x(o);if(!t.length||t.length>12||t.some(e=>!/^(sensor|calendar)\.[a-z0-9_]+$/.test(e)))throw new Error("Choose 1\u201312 sensor or calendar entities.");if(o.layout!==void 0&&!["compact","hero","schedule"].includes(o.layout))throw new Error("Unknown layout.");for(let[e,i]of[["days_to_show",366],["max_groups",50]]){let s=o[e];if(s!==void 0&&(!Number.isInteger(s)||s<1||s>i))throw new Error(`${e} must be 1\u2013${i}.`)}for(let e of["show_artwork","show_updated"])if(o[e]!==void 0&&typeof o[e]!="boolean")throw new Error(`${e} must be true or false.`);if(o.title!==void 0&&typeof o.title!="string")throw new Error("title must be text.");if(o.locale!==void 0){if(typeof o.locale!="string")throw new Error("locale must be a language code.");new Intl.DateTimeFormat(o.locale)}if(o.overrides!==void 0){if(!Array.isArray(o.overrides)||o.overrides.length>100)throw new Error("overrides must contain at most 100 types.");for(let e of o.overrides)if(!e||typeof e.type!="string"||!e.type.trim()||e.name!==void 0&&(typeof e.name!="string"||!e.name.trim())||e.hidden!==void 0&&typeof e.hidden!="boolean"||e.color!==void 0&&!ut(e.color)||e.icon!==void 0&&!ft(e.icon))throw new Error("Invalid type override. Use an exact type ID or name, mdi icon, and #RRGGBB color.")}if(o.tap_action){if(!["details","more-info","navigate","none"].includes(o.tap_action.action))throw new Error("Unsupported tap action.");if(o.tap_action.action==="navigate"&&(typeof o.tap_action.navigation_path!="string"||!/^\/(?!\/)/.test(o.tap_action.navigation_path)||/[\\\u0000-\u001f]/.test(o.tap_action.navigation_path)))throw new Error("Navigation requires a local path beginning with /.")}return{...o,entities:o.entities?[...o.entities]:void 0,layout:o.layout??"compact",days_to_show:o.days_to_show??30,max_groups:o.max_groups??5}}function F(o){if(typeof o!="string"||!/^\d{4}-\d{2}-\d{2}$/.test(o))return!1;let t=new Date(`${o}T12:00:00Z`);return Number.isFinite(t.getTime())&&t.toISOString().slice(0,10)===o}function H(o,t){let e=new Intl.DateTimeFormat("en-CA",{timeZone:t,year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(o),i=s=>e.find(n=>n.type===s).value;return`${i("year")}-${i("month")}-${i("day")}`}function Lt(o,t){let e=new Date(`${o}T12:00:00Z`);return e.setUTCDate(e.getUTCDate()+t),e.toISOString().slice(0,10)}function fe(o,t){return Math.round((Date.parse(`${t}T12:00:00Z`)-Date.parse(`${o}T12:00:00Z`))/864e5)}function G(o,t,e){let i=fe(t,o);return i<=1&&i>=0?new Intl.RelativeTimeFormat(e,{numeric:"auto"}).format(i,"day"):new Intl.DateTimeFormat(e,{weekday:"long",day:"numeric",month:"short",timeZone:"UTC"}).format(new Date(`${o}T12:00:00Z`))}function It(o,t,e){return new Intl.DateTimeFormat(t,{dateStyle:"medium",timeStyle:"short",timeZone:e}).format(new Date(o))}var V=o=>o!==null&&typeof o=="object"&&!Array.isArray(o)?o:void 0,gt=o=>typeof o=="string"&&o.trim()?o:void 0;function mt(o,t,e){let i=o.date??e,s=gt(o.type);if(!(!F(i)||!s))return{sourceId:t,entityId:t,date:i,label:s,typeId:gt(o.type_id),icon:ft(o.icon)?o.icon:void 0,color:ut(o.color)?o.color:void 0,colorSource:["source","customize","default"].includes(String(o.color_source))?o.color_source:void 0}}function jt(o){let t=o.attributes,e="upcoming"in t?t.upcoming:"upcoming_pickups"in t?t.upcoming_pickups:"next_pickup"in t?t.next_pickup===null?[]:[t.next_pickup]:void 0;if(!Array.isArray(e))return{events:[],supported:!1,invalid:e!==void 0};let i=[],s=e.length>2e3;for(let r of e.slice(0,2e3)){if(i.length>=2e3){s=!0;break}let c=V(r);if(!c||!F(c.date)){s=!0;continue}if(Array.isArray(c.collections)){c.collections.length>100&&(s=!0);for(let a of c.collections.slice(0,100)){let l=V(a),h=l&&mt(l,o.entity_id,c.date);h?i.push(h):s=!0}}else if(Array.isArray(c.types)){c.types.length>100&&(s=!0);for(let a of c.types.slice(0,100)){let l=mt({...c,type:a,color:void 0,color_source:void 0,type_id:void 0},o.entity_id);l?i.push(l):s=!0}}else{let a=mt(c,o.entity_id);a?i.push(a):s=!0}}let n=typeof t.last_update=="string"&&/^\d{4}-\d{2}-\d{2}T/.test(t.last_update)&&/(?:Z|[+-]\d{2}:\d{2})$/.test(t.last_update)&&Number.isFinite(Date.parse(t.last_update))?t.last_update:void 0;return{events:i.slice(0,2e3),supported:!0,invalid:s||i.length>2e3,fetchedAt:n}}function Bt(o,t,e){if(!Array.isArray(o)||o.length>1e4)throw new Error("Invalid calendar response.");return o.flatMap(i=>{let s=V(i),n=V(s?.start),r=gt(s?.summary);if(!n||!r)return[];let c;return F(n.date)?c=n.date:typeof n.dateTime=="string"&&/(?:Z|[+-]\d{2}:\d{2})$/.test(n.dateTime)&&Number.isFinite(Date.parse(n.dateTime))&&(c=H(new Date(n.dateTime),e)),c?[{sourceId:t,entityId:t,date:c,label:r}]:[]})}var Zt=new WeakMap;function Wt(o,t,e,i){let s=Zt.get(o.connection);s||(s=new Map,Zt.set(o.connection,s));let n=JSON.stringify([t,e,i,o.states[t]?.last_updated]),r=s.get(n);if(r&&r.expires>Date.now())return r.promise;for(let[h,d]of s)d.expires<=Date.now()&&s.delete(h);s.size>=100&&s.delete(s.keys().next().value);let c=new URLSearchParams({start:`${e}T00:00:00+14:00`,end:`${i}T00:00:00-12:00`}),a=o.callApi("GET",`calendars/${encodeURIComponent(t)}?${c}`),l={promise:a,expires:Date.now()+6e4};return s.set(n,l),a.catch(()=>{s.get(n)===l&&s.delete(n)}),a}function qt(o,t,e,i){let s=new Map;for(let n of o){if(n.date<e||n.date>=i)continue;let r=t.overrides?.find(a=>a.type===(n.typeId??n.label));if(r?.hidden)continue;let c=JSON.stringify([n.sourceId,n.date,n.typeId??n.label]);s.has(c)||s.set(c,{...n,label:r?.name??n.label,color:r?.color??n.color,colorSource:r?.color?"customize":n.colorSource,icon:r?.icon??n.icon})}return[...s.values()].sort((n,r)=>n.date.localeCompare(r.date)||n.label.localeCompare(r.label))}function Ft(o){let t=new Map;for(let e of o){let i=t.get(e.date)??[];i.push(e),t.set(e.date,i)}return[...t].map(([e,i])=>({date:e,events:i}))}function Gt(o){return o.colorSource==="source"||o.colorSource==="customize"?o.color:void 0}var J=class{constructor(){this.generation=0;this.cache=new Map}reset(){this.generation++,this.cache.clear(),this.connection=void 0,this.timeZone=void 0}cancel(){this.generation++}async update(t,e,i){(this.connection!==t.connection||this.timeZone!==t.config.time_zone)&&(this.cache.clear(),this.connection=t.connection,this.timeZone=t.config.time_zone);let s=++this.generation,n=t.config.time_zone,r=H(new Date,n),c=Lt(r,e.days_to_show),a={rangeStart:r,rangeEnd:c,timeZone:n,messages:[]};i({...a,status:"loading",events:[]});let l=0,h=0,d=0,m=[],g=[];if(await Promise.all(x(e).map(async f=>{try{let $=t.states[f];if(!$||$.state==="unavailable"||f.startsWith("calendar.")&&$.state==="unknown")throw new Error(`${f} is unavailable.`);let j;if(f.startsWith("calendar."))j=Bt(await Wt(t,f,r,c),f,n);else{let M=jt($);if(!M.supported)throw new Error(`${f}: select a sensor with Generic details or a calendar.`);if(M.invalid)throw new Error(`${f} contains invalid collection records.`);j=M.events,M.fetchedAt&&g.push(M.fetchedAt)}if(s!==this.generation)return;this.cache.set(f,j),m.push(...j),h++}catch($){if(s!==this.generation)return;l++,a.messages.push($ instanceof Error?$.message:`${f} could not be loaded.`),this.cache.has(f)&&d++,m.push(...this.cache.get(f)??[])}})),s!==this.generation)return;let y=qt(m,e,r,c);i({...a,events:y,status:l?d||h?"stale":"unavailable":y.length?"ready":"empty",fetchedAt:g.sort((f,$)=>Date.parse(f)-Date.parse($))[0]})}};var Vt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Jt=o=>(...t)=>({_$litDirective$:o,values:t}),K=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var Kt="important",me=" !"+Kt,yt=Jt(class extends K{constructor(o){if(super(o),o.type!==Vt.ATTRIBUTE||o.name!=="style"||o.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(o){return Object.keys(o).reduce((t,e)=>{let i=o[e];return i==null?t:t+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(o,[t]){let{style:e}=o.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let i of this.ft)t[i]==null&&(this.ft.delete(i),i.includes("-")?e.removeProperty(i):e[i]=null);for(let i in t){let s=t[i];if(s!=null){this.ft.add(i);let n=typeof s=="string"&&s.endsWith(me);i.includes("-")||n?e.setProperty(i,n?s.slice(0,-11):s,n?Kt:""):e[i]=s}}return _}});var vt=o=>u`<div class="chips">
    ${o.map(t=>u`<span class="chip" style=${yt({"--waste-type-color":t.color})}><ha-icon aria-hidden="true" .icon=${t.icon??"mdi:trash-can-outline"}></ha-icon><span>${t.label}</span></span>`)}
  </div>`,Yt=o=>u`<div class="bins" aria-hidden="true">
    ${o.slice(0,3).map(t=>u`<div
          class="bin"
          style=${yt({"--waste-type-color":Gt(t)})}
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
  </div>`,Y=(o,t,e)=>u`${o.map(i=>{let s=new Date(`${i.date}T12:00:00Z`);return u`<div class="group">
      <div class="day" aria-hidden="true">
        ${new Intl.DateTimeFormat(e,{month:"short",timeZone:"UTC"}).format(s)}<strong
          >${s.getUTCDate()}</strong
        >
      </div>
      <div class="group-body">
        <div class="group-date">${G(i.date,t,e)}</div>
        ${vt(i.events)}
      </div>
    </div>`})}`;var ge={title:"Waste collection",next:"Next collection",schedule:"Collection schedule",close:"Close",loading:"Loading schedule\u2026",empty:"No collections in this date range",partialEmpty:"No dates from the available sources",unavailable:"Schedule unavailable",stale:"Some sources are unavailable. Dates may be out of date.",staleBadge:"Out of date",collections:"collections",updated:"Provider updated",details:"View schedule",today:"Today"},ye={title:"Odbi\xF3r odpad\xF3w",next:"Najbli\u017Cszy odbi\xF3r",schedule:"Harmonogram odbioru",close:"Zamknij",loading:"\u0141adowanie harmonogramu\u2026",empty:"Brak odbior\xF3w w tym zakresie dat",partialEmpty:"Brak termin\xF3w z dost\u0119pnych \u017Ar\xF3de\u0142",unavailable:"Harmonogram niedost\u0119pny",stale:"Niekt\xF3re \u017Ar\xF3d\u0142a s\u0105 niedost\u0119pne. Terminy mog\u0105 by\u0107 nieaktualne.",staleBadge:"Nieaktualne",collections:"frakcje",updated:"Aktualizacja \u017Ar\xF3d\u0142a",details:"Zobacz harmonogram",today:"Dzisiaj"},Qt=o=>o.toLowerCase().startsWith("pl")?ye:ge;var Xt=z`
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
`;async function $t(o){return customElements.get("ha-form")||await(await(await window.loadCardHelpers()).createCardElement({type:"button"})).constructor.getConfigElement(),document.createElement(o)}var S=class extends v{constructor(){super(...arguments);this.badge=!1;this.detailsOpen=!1;this.controller=new J;this.visible=()=>{document.visibilityState==="visible"&&this.refresh()}}set hass(e){let i=this.ha;this.ha=e,(!i||i.connection!==e.connection||i.config.time_zone!==e.config.time_zone)&&(this.snapshot=void 0),(!i||i.connection!==e.connection||i.config.time_zone!==e.config.time_zone||x(this.config??{type:""}).some(s=>i.states[s]!==e.states[s]))&&this.refresh(),(!i||i.locale?.language!==e.locale?.language||i.language!==e.language)&&this.requestUpdate()}get hass(){return this.ha}setConfig(e){let i=Nt(e),s=this.config,n=!s||JSON.stringify(x(s).sort())!==JSON.stringify(x(i).sort());n&&this.controller.reset(),(n||s?.days_to_show!==i.days_to_show||JSON.stringify(s?.overrides)!==JSON.stringify(i.overrides))&&(this.snapshot=void 0),this.config=i,this.refresh(),this.requestUpdate()}static getConfigElement(){return $t("waste-pickup-planner-card-editor")}static getStubConfig(e){return{type:"custom:waste-pickup-planner-card",entity:Object.values(e.states).find(s=>s.entity_id.startsWith("sensor.")&&Array.isArray(s.attributes.upcoming))?.entity_id??Object.keys(e.states).find(s=>s.startsWith("calendar."))??"sensor.waste_schedule",layout:"compact"}}getCardSize(){return this.config?.layout==="schedule"?Math.min(this.config.max_groups+1,8):this.config?.layout==="hero"?5:3}getGridOptions(){return{columns:12,min_columns:6,rows:"auto"}}connectedCallback(){super.connectedCallback(),document.addEventListener("visibilitychange",this.visible),this.timer=setInterval(()=>this.refresh(),6e4),this.refresh()}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.timer),document.removeEventListener("visibilitychange",this.visible),this.controller.cancel()}refresh(){!this.isConnected||!this.ha||!this.config||(this.day=H(new Date,this.ha.config.time_zone),this.controller.update(this.ha,this.config,e=>{(e.status!=="loading"||!this.snapshot)&&(this.snapshot=e)}))}locale(){return this.config?.locale||this.ha?.locale?.language||this.ha?.language||"en"}async activate(){let e=this.config;if(!e)return;let i=e.tap_action?.action??"details";i!=="none"&&(i==="more-info"?this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:x(e)[0]},bubbles:!0,composed:!0})):i==="navigate"?(history.pushState(null,"",e.tap_action.navigation_path),window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1}}))):(this.detailsOpen=!0,await this.updateComplete,this.isConnected&&this.detailsOpen&&this.renderRoot.querySelector("dialog")?.showModal()))}render(){if(!this.config)return p;let e=this.locale(),i=Qt(e),s=this.snapshot,n=Ft(s?.events??[]),r=n[0],c=s?.rangeStart??this.day??"2000-01-01",a=this.config.title??i.title,l=s?.status??"loading",h=l==="empty"?i.empty:l==="stale"?i.partialEmpty:l==="unavailable"?i.unavailable:i.loading,d=r?.events.map(f=>f.label).join(" \xB7 ")??h,m=r?G(r.date,c,e):h,g=l==="stale"?u`<p class="notice" role="status">${i.stale}</p>`:p,y=this.detailsOpen?u`<dialog aria-label=${i.schedule} @close=${()=>{this.detailsOpen=!1}}>
      <div class="heading">
        <h2>${a}</h2>
        <button
          class="close"
          aria-label=${i.close}
          @click=${()=>this.renderRoot.querySelector("dialog")?.close()}
        >
          ✕
        </button>
      </div>
      ${n.length?Y(n,c,e):u`<p class="state">${h}</p>`}${g}${s?.messages.map(f=>u`<p class="state">${f}</p>`)}
    </dialog>`:p;return this.badge?u`<button
          class="badge"
          aria-label=${`${a}: ${m}. ${d}${l==="stale"?`. ${i.stale}`:""}`}
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
              >${l==="stale"?`${i.staleBadge} \xB7 `:""}${r&&r.events.length>2?`${r.events.length} ${i.collections}`:d}</small
            ></span
          ></button
        >${y}`:u`<ha-card
        ><section class=${`surface ${this.config.layout}`}>
          <div class="heading">
            <h2>${a}</h2>
            <ha-icon aria-hidden="true" icon="mdi:calendar-outline"></ha-icon>
          </div>
          ${r?this.config.layout==="schedule"?Y(n.slice(0,this.config.max_groups),c,e):u`<div class="primary">
                      <div class="copy">
                        <div class="eyebrow">${i.next}</div>
                        <span class="date">${m}</span>${vt(r.events)}
                        <p class="full-date">
                          ${new Intl.DateTimeFormat(e,{dateStyle:"long",timeZone:"UTC"}).format(new Date(`${r.date}T12:00:00Z`))}
                        </p>
                      </div>
                      ${this.config.layout==="hero"&&this.config.show_artwork?Yt(r.events):p}
                    </div>
                    ${this.config.layout==="hero"&&n.length>1?u`<div class="upcoming">${Y(n.slice(1,this.config.max_groups),c,e)}</div>`:p}`:u`<p class="state" role="status">${h}</p>`}
          ${g}${l==="unavailable"?s?.messages.map(f=>u`<p class="state">${f}</p>`):p}
          ${this.config.show_updated&&s?.fetchedAt?u`<p class="updated">${i.updated}: ${It(s.fetchedAt,e,s.timeZone)}</p>`:p}
        </section>
        ${this.config.tap_action?.action==="none"?p:u`<button class="action" @click=${this.activate}>${this.config.tap_action?.action==="more-info"?a:i.details} <span aria-hidden="true">↗</span></button>`}</ha-card
      >${y}`}};S.styles=Xt,S.properties={snapshot:{state:!0},detailsOpen:{state:!0}};var Q=class extends S{constructor(){super(...arguments);this.badge=!0}static getConfigElement(){return $t("waste-pickup-planner-badge-editor")}static getStubConfig(e){return{...super.getStubConfig(e),type:"custom:waste-pickup-planner-badge"}}};var ve=[{name:"entities",required:!0,selector:{entity:{domain:["sensor","calendar"],multiple:!0}}},{name:"title",selector:{text:{}}},{name:"layout",selector:{select:{options:["compact","hero","schedule"],mode:"dropdown"}}},{name:"days_to_show",selector:{number:{min:1,max:366,mode:"box"}}},{name:"max_groups",selector:{number:{min:1,max:50,mode:"box"}}},{name:"show_artwork",selector:{boolean:{}}},{name:"show_updated",selector:{boolean:{}}},{name:"locale",selector:{text:{}}}],$e={entities:"Waste sensors or calendars",title:"Title",layout:"Layout",days_to_show:"Days to show",max_groups:"Visible date groups",show_artwork:"Show bin artwork in hero layout",show_updated:"Show provider update time",locale:"Language override (optional)"},k=class extends v{setConfig(t){this.config={...t}}changed(t){this.config={...this.config,...t},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this.config},bubbles:!0,composed:!0}))}override(t,e){let i=[...this.config?.overrides??[]];i[t]={...i[t],...e},this.changed({overrides:i})}render(){if(!this.config||!this.hass)return p;let t={...this.config,entities:this.config.entities??(this.config.entity?[this.config.entity]:[])};return u`<ha-form
        .hass=${this.hass}
        .data=${t}
        .schema=${ve.filter(e=>!this.config.type.includes("badge")||!["layout","max_groups","show_artwork"].includes(e.name))}
        .computeLabel=${e=>$e[e.name]}
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
      ${this.config.tap_action?.action==="navigate"?u`<label>Dashboard path<input .value=${this.config.tap_action.navigation_path??""} placeholder="/lovelace/waste" @change=${e=>this.changed({tap_action:{action:"navigate",navigation_path:e.target.value}})} /></label>`:p}
      <details>
        <summary>Collection names, colors and visibility</summary>
        <p>
          Use the exact type ID from v3, or the complete collection name for
          older sensors and calendars.
        </p>
        ${(this.config.overrides??[]).map((e,i)=>u`<fieldset>
            <legend>Collection ${i+1}</legend>
            ${[["type","Type ID or exact name"],["name","Display name"],["color","Bin color (#RRGGBB)"],["icon","Icon (mdi:\u2026)"]].map(([s,n])=>u`<label
                  >${n}<input
                    .value=${e[s]??""}
                    @change=${r=>this.override(i,{[s]:r.target.value||void 0})}
                /></label>`)}<label
              ><input
                type="checkbox"
                .checked=${e.hidden??!1}
                @change=${s=>this.override(i,{hidden:s.target.checked})}
              />
              Hide this collection</label
            ><button
              class="remove"
              @click=${()=>this.changed({overrides:this.config.overrides.filter((s,n)=>n!==i)})}
            >
              Remove override
            </button>
          </fieldset>`)}
        <button
          @click=${()=>this.changed({overrides:[...this.config.overrides??[],{type:"collection_name"}]})}
        >
          Add collection override
        </button>
      </details>`}};k.properties={hass:{attribute:!1},config:{state:!0}},k.styles=z`
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
  `;var X=class extends k{};customElements.define("waste-pickup-planner-card",S);customElements.define("waste-pickup-planner-badge",Q);customElements.define("waste-pickup-planner-card-editor",k);customElements.define("waste-pickup-planner-badge-editor",X);var te=window;(te.customCards??=[]).push({type:"waste-pickup-planner-card",name:"Waste Pickup Planner",description:"Date-grouped waste collections with compact, hero and schedule layouts.",preview:!0});(te.customBadges??=[]).push({type:"waste-pickup-planner-badge",name:"Waste Pickup Planner Badge",description:"The next collection date and types, with schedule details."});
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
