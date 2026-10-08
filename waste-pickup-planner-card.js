var G=globalThis,V=G.ShadowRoot&&(G.ShadyCSS===void 0||G.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ae=Symbol(),Pe=new WeakMap,N=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==ae)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(V&&e===void 0){let i=t!==void 0&&t.length===1;i&&(e=Pe.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Pe.set(t,e))}return e}toString(){return this.cssText}},He=o=>new N(typeof o=="string"?o:o+"",void 0,ae),L=(o,...e)=>{let t=o.length===1?o[0]:e.reduce((i,s,n)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+o[n+1],o[0]);return new N(t,o,ae)},Me=(o,e)=>{if(V)o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let i=document.createElement("style"),s=G.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,o.appendChild(i)}},ce=V?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(let i of e.cssRules)t+=i.cssText;return He(t)})(o):o;var{is:lt,defineProperty:dt,getOwnPropertyDescriptor:pt,getOwnPropertyNames:ht,getOwnPropertySymbols:ut,getPrototypeOf:mt}=Object,J=globalThis,Ie=J.trustedTypes,gt=Ie?Ie.emptyScript:"",ft=J.reactiveElementPolyfillSupport,R=(o,e)=>o,le={toAttribute(o,e){switch(e){case Boolean:o=o?gt:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},De=(o,e)=>!lt(o,e),ze={attribute:!0,type:String,converter:le,reflect:!1,useDefault:!1,hasChanged:De};Symbol.metadata??=Symbol("metadata"),J.litPropertyMetadata??=new WeakMap;var x=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ze){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let i=Symbol(),s=this.getPropertyDescriptor(e,i,t);s!==void 0&&dt(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){let{get:s,set:n}=pt(this.prototype,e)??{get(){return this[t]},set(r){this[t]=r}};return{get:s,set(r){let a=s?.call(this);n?.call(this,r),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ze}static _$Ei(){if(this.hasOwnProperty(R("elementProperties")))return;let e=mt(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(R("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(R("properties"))){let t=this.properties,i=[...ht(t),...ut(t)];for(let s of i)this.createProperty(s,t[s])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[i,s]of t)this.elementProperties.set(i,s)}this._$Eh=new Map;for(let[t,i]of this.elementProperties){let s=this._$Eu(t,i);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let i=new Set(e.flat(1/0).reverse());for(let s of i)t.unshift(ce(s))}else e!==void 0&&t.push(ce(e));return t}static _$Eu(e,t){let i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Me(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){let i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){let n=(i.converter?.toAttribute!==void 0?i.converter:le).toAttribute(t,i.type);this._$Em=e,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(e,t){let i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){let n=i.getPropertyOptions(s),r=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:le;this._$Em=s;let a=r.fromAttribute(t,n.type);this[s]=a??this._$Ej?.get(s)??a,this._$Em=null}}requestUpdate(e,t,i,s=!1,n){if(e!==void 0){let r=this.constructor;if(s===!1&&(n=this[e]),i??=r.getPropertyOptions(e),!((i.hasChanged??De)(n,t)||i.useDefault&&i.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:s,wrapped:n},r){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??t??this[e]),n!==!0||r!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),s===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[s,n]of this._$Ep)this[s]=n;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[s,n]of i){let{wrapped:r}=n,a=this[s];r!==!0||this._$AL.has(s)||a===void 0||this.C(s,void 0,n,a)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[R("elementProperties")]=new Map,x[R("finalized")]=new Map,ft?.({ReactiveElement:x}),(J.reactiveElementVersions??=[]).push("2.1.2");var fe=globalThis,Oe=o=>o,K=fe.trustedTypes,Ue=K?K.createPolicy("lit-html",{createHTML:o=>o}):void 0,We="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,Ze="?"+C,yt=`<${Ze}>`,P=document,B=()=>P.createComment(""),W=o=>o===null||typeof o!="object"&&typeof o!="function",ye=Array.isArray,vt=o=>ye(o)||typeof o?.[Symbol.iterator]=="function",de=`[ 	
\f\r]`,j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ne=/-->/g,Le=/>/g,k=RegExp(`>|${de}(?:([^\\s"'>=/]+)(${de}*=${de}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Re=/'/g,je=/"/g,Fe=/^(?:script|style|textarea|title)$/i,ve=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),u=ve(1),Mt=ve(2),It=ve(3),E=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),Be=new WeakMap,T=P.createTreeWalker(P,129);function qe(o,e){if(!ye(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ue!==void 0?Ue.createHTML(e):e}var bt=(o,e)=>{let t=o.length-1,i=[],s,n=e===2?"<svg>":e===3?"<math>":"",r=j;for(let a=0;a<t;a++){let c=o[a],d,l,p=-1,m=0;for(;m<c.length&&(r.lastIndex=m,l=r.exec(c),l!==null);)m=r.lastIndex,r===j?l[1]==="!--"?r=Ne:l[1]!==void 0?r=Le:l[2]!==void 0?(Fe.test(l[2])&&(s=RegExp("</"+l[2],"g")),r=k):l[3]!==void 0&&(r=k):r===k?l[0]===">"?(r=s??j,p=-1):l[1]===void 0?p=-2:(p=r.lastIndex-l[2].length,d=l[1],r=l[3]===void 0?k:l[3]==='"'?je:Re):r===je||r===Re?r=k:r===Ne||r===Le?r=j:(r=k,s=void 0);let f=r===k&&o[a+1].startsWith("/>")?" ":"";n+=r===j?c+yt:p>=0?(i.push(d),c.slice(0,p)+We+c.slice(p)+C+f):c+C+(p===-2?a:f)}return[qe(o,n+(o[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]},Z=class o{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let n=0,r=0,a=e.length-1,c=this.parts,[d,l]=bt(e,t);if(this.el=o.createElement(d,i),T.currentNode=this.el.content,t===2||t===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(s=T.nextNode())!==null&&c.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(let p of s.getAttributeNames())if(p.endsWith(We)){let m=l[r++],f=s.getAttribute(p).split(C),$=/([.?@])?(.*)/.exec(m);c.push({type:1,index:n,name:$[2],strings:f,ctor:$[1]==="."?he:$[1]==="?"?ue:$[1]==="@"?me:O}),s.removeAttribute(p)}else p.startsWith(C)&&(c.push({type:6,index:n}),s.removeAttribute(p));if(Fe.test(s.tagName)){let p=s.textContent.split(C),m=p.length-1;if(m>0){s.textContent=K?K.emptyScript:"";for(let f=0;f<m;f++)s.append(p[f],B()),T.nextNode(),c.push({type:2,index:++n});s.append(p[m],B())}}}else if(s.nodeType===8)if(s.data===Ze)c.push({type:2,index:n});else{let p=-1;for(;(p=s.data.indexOf(C,p+1))!==-1;)c.push({type:7,index:n}),p+=C.length-1}n++}}static createElement(e,t){let i=P.createElement("template");return i.innerHTML=e,i}};function D(o,e,t=o,i){if(e===E)return e;let s=i!==void 0?t._$Co?.[i]:t._$Cl,n=W(e)?void 0:e._$litDirective$;return s?.constructor!==n&&(s?._$AO?.(!1),n===void 0?s=void 0:(s=new n(o),s._$AT(o,t,i)),i!==void 0?(t._$Co??=[])[i]=s:t._$Cl=s),s!==void 0&&(e=D(o,s._$AS(o,e.values),s,i)),e}var pe=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:i}=this._$AD,s=(e?.creationScope??P).importNode(t,!0);T.currentNode=s;let n=T.nextNode(),r=0,a=0,c=i[0];for(;c!==void 0;){if(r===c.index){let d;c.type===2?d=new F(n,n.nextSibling,this,e):c.type===1?d=new c.ctor(n,c.name,c.strings,this,e):c.type===6&&(d=new ge(n,this,e)),this._$AV.push(d),c=i[++a]}r!==c?.index&&(n=T.nextNode(),r++)}return T.currentNode=P,s}p(e){let t=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},F=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=D(this,e,t),W(e)?e===h||e==null||e===""?(this._$AH!==h&&this._$AR(),this._$AH=h):e!==this._$AH&&e!==E&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):vt(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==h&&W(this._$AH)?this._$AA.nextSibling.data=e:this.T(P.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Z.createElement(qe(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(t);else{let n=new pe(s,this),r=n.u(this.options);n.p(t),this.T(r),this._$AH=n}}_$AC(e){let t=Be.get(e.strings);return t===void 0&&Be.set(e.strings,t=new Z(e)),t}k(e){ye(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,i,s=0;for(let n of e)s===t.length?t.push(i=new o(this.O(B()),this.O(B()),this,this.options)):i=t[s],i._$AI(n),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let i=Oe(e).nextSibling;Oe(e).remove(),e=i}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},O=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,n){this.type=1,this._$AH=h,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=h}_$AI(e,t=this,i,s){let n=this.strings,r=!1;if(n===void 0)e=D(this,e,t,0),r=!W(e)||e!==this._$AH&&e!==E,r&&(this._$AH=e);else{let a=e,c,d;for(e=n[0],c=0;c<n.length-1;c++)d=D(this,a[i+c],t,c),d===E&&(d=this._$AH[c]),r||=!W(d)||d!==this._$AH[c],d===h?e=h:e!==h&&(e+=(d??"")+n[c+1]),this._$AH[c]=d}r&&!s&&this.j(e)}j(e){e===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},he=class extends O{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===h?void 0:e}},ue=class extends O{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==h)}},me=class extends O{constructor(e,t,i,s,n){super(e,t,i,s,n),this.type=5}_$AI(e,t=this){if((e=D(this,e,t,0)??h)===E)return;let i=this._$AH,s=e===h&&i!==h||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==h&&(i===h||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},ge=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){D(this,e)}};var $t=fe.litHtmlPolyfillSupport;$t?.(Z,F),(fe.litHtmlVersions??=[]).push("3.3.3");var Ge=(o,e,t)=>{let i=t?.renderBefore??e,s=i._$litPart$;if(s===void 0){let n=t?.renderBefore??null;i._$litPart$=s=new F(e.insertBefore(B(),n),n,void 0,t??{})}return s._$AI(o),s};var be=globalThis,_=class extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ge(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return E}};_._$litElement$=!0,_.finalized=!0,be.litElementHydrateSupport?.({LitElement:_});var wt=be.litElementPolyfillSupport;wt?.({LitElement:_});(be.litElementVersions??=[]).push("4.2.2");var $e=o=>typeof o=="string"&&/^#[\da-f]{6}$/i.test(o),we=o=>typeof o=="string"&&/^mdi:[a-z0-9-]+$/.test(o);function b(o){return[...new Set(o.entities??(o.entity?[o.entity]:[]))]}function Ve(o){if(!o||typeof o!="object")throw new Error("Choose a waste sensor or calendar.");if(o.entities!==void 0&&(!Array.isArray(o.entities)||o.entities.some(t=>typeof t!="string")))throw new Error("entities must be an array of entity IDs.");if(o.entity&&o.entities)throw new Error("Use entity or entities, not both.");let e=b(o);if(!e.length||e.length>12||e.some(t=>!/^(sensor|calendar)\.[a-z0-9_]+$/.test(t)))throw new Error("Choose 1\u201312 sensor or calendar entities.");if(o.layout!==void 0&&!["compact","hero","schedule"].includes(o.layout))throw new Error("Unknown layout.");for(let[t,i]of[["days_to_show",366],["max_groups",50]]){let s=o[t];if(s!==void 0&&(!Number.isInteger(s)||s<1||s>i))throw new Error(`${t} must be 1\u2013${i}.`)}for(let t of["show_artwork","show_updated","show_manage_bins"])if(o[t]!==void 0&&typeof o[t]!="boolean")throw new Error(`${t} must be true or false.`);if(o.title!==void 0&&typeof o.title!="string")throw new Error("title must be text.");if(o.locale!==void 0){if(typeof o.locale!="string")throw new Error("locale must be a language code.");new Intl.DateTimeFormat(o.locale)}if(o.overrides!==void 0){if(!Array.isArray(o.overrides)||o.overrides.length>100)throw new Error("overrides must contain at most 100 types.");for(let t of o.overrides)if(!t||typeof t.type!="string"||!t.type.trim()||t.source!==void 0&&(typeof t.source!="string"||!/^(sensor|calendar)\.[a-z0-9_]+$/.test(t.source))||t.label!==void 0&&(typeof t.label!="string"||!t.label.trim())||t.name!==void 0&&(typeof t.name!="string"||!t.name.trim())||t.hidden!==void 0&&typeof t.hidden!="boolean"||t.color!==void 0&&!$e(t.color)||t.icon!==void 0&&!we(t.icon))throw new Error("Invalid type override. Use an exact type ID or name, mdi icon, and #RRGGBB color.")}if(o.tap_action){if(!["details","more-info","navigate","none"].includes(o.tap_action.action))throw new Error("Unsupported tap action.");if(o.tap_action.action==="navigate"&&(typeof o.tap_action.navigation_path!="string"||!/^\/(?!\/)/.test(o.tap_action.navigation_path)||/[\\\u0000-\u001f]/.test(o.tap_action.navigation_path)))throw new Error("Navigation requires a local path beginning with /.")}return{...o,entities:o.entities?[...o.entities]:void 0,layout:o.layout??"compact",days_to_show:o.days_to_show??30,max_groups:o.max_groups??5}}function Y(o){if(typeof o!="string"||!/^\d{4}-\d{2}-\d{2}$/.test(o))return!1;let e=new Date(`${o}T12:00:00Z`);return Number.isFinite(e.getTime())&&e.toISOString().slice(0,10)===o}function U(o,e){let t=new Intl.DateTimeFormat("en-CA",{timeZone:e,year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(o),i=s=>t.find(n=>n.type===s).value;return`${i("year")}-${i("month")}-${i("day")}`}function Je(o,e){let t=new Date(`${o}T12:00:00Z`);return t.setUTCDate(t.getUTCDate()+e),t.toISOString().slice(0,10)}function _t(o,e){return Math.round((Date.parse(`${e}T12:00:00Z`)-Date.parse(`${o}T12:00:00Z`))/864e5)}function Q(o,e,t){let i=_t(e,o);return i<=1&&i>=0?new Intl.RelativeTimeFormat(t,{numeric:"auto"}).format(i,"day"):new Intl.DateTimeFormat(t,{weekday:"long",day:"numeric",month:"short",timeZone:"UTC"}).format(new Date(`${o}T12:00:00Z`))}function Ke(o,e,t){return new Intl.DateTimeFormat(e,{dateStyle:"medium",timeStyle:"short",timeZone:t}).format(new Date(o))}var X=o=>o!==null&&typeof o=="object"&&!Array.isArray(o)?o:void 0,xe=o=>typeof o=="string"&&o.trim()?o:void 0;function _e(o,e,t){let i=o.date??t,s=xe(o.type);if(!(!Y(i)||!s))return{sourceId:e,entityId:e,date:i,label:s,typeId:xe(o.type_id),icon:we(o.icon)?o.icon:void 0,color:$e(o.color)?o.color:void 0,colorSource:["source","customize","default"].includes(String(o.color_source))?o.color_source:void 0}}function H(o){let e=o.attributes,t="upcoming"in e?e.upcoming:"upcoming_pickups"in e?e.upcoming_pickups:"next_pickup"in e?e.next_pickup===null?[]:[e.next_pickup]:void 0;if(!Array.isArray(t))return{events:[],supported:!1,invalid:t!==void 0};let i=[],s=t.length>2e3;for(let r of t.slice(0,2e3)){if(i.length>=2e3){s=!0;break}let a=X(r);if(!a||!Y(a.date)){s=!0;continue}if(Array.isArray(a.collections)){a.collections.length>100&&(s=!0);for(let c of a.collections.slice(0,100)){let d=X(c),l=d&&_e(d,o.entity_id,a.date);l?i.push(l):s=!0}}else if(Array.isArray(a.types)){a.types.length>100&&(s=!0);for(let c of a.types.slice(0,100)){let d=_e({...a,type:c,color:void 0,color_source:void 0,type_id:void 0},o.entity_id);d?i.push(d):s=!0}}else{let c=_e(a,o.entity_id);c?i.push(c):s=!0}}let n=typeof e.last_update=="string"&&/^\d{4}-\d{2}-\d{2}T/.test(e.last_update)&&/(?:Z|[+-]\d{2}:\d{2})$/.test(e.last_update)&&Number.isFinite(Date.parse(e.last_update))?e.last_update:void 0;return{events:i.slice(0,2e3),supported:!0,invalid:s||i.length>2e3,fetchedAt:n}}function Ye(o,e,t){if(!Array.isArray(o)||o.length>1e4)throw new Error("Invalid calendar response.");return o.flatMap(i=>{let s=X(i),n=X(s?.start),r=xe(s?.summary);if(!n||!r)return[];let a;return Y(n.date)?a=n.date:typeof n.dateTime=="string"&&/(?:Z|[+-]\d{2}:\d{2})$/.test(n.dateTime)&&Number.isFinite(Date.parse(n.dateTime))&&(a=U(new Date(n.dateTime),t)),a?[{sourceId:e,entityId:e,date:a,label:r}]:[]})}var Qe=new WeakMap;function Ee(o,e,t,i){let s=Qe.get(o.connection);s||(s=new Map,Qe.set(o.connection,s));let n=JSON.stringify([e,t,i]),r=o.states[e]?.last_updated,a=s.get(n);if(a?.pending){if(a.stamp===r)return a.promise;let p=()=>Ee(o,e,t,i);return a.promise.then(p,p)}if(a&&a.stamp===r&&a.expires>Date.now())return a.promise;for(let[p,m]of s)!m.pending&&m.expires<=Date.now()&&s.delete(p);if(!s.has(n)&&s.size>=100){let p=[...s].find(([,m])=>!m.pending);if(p)s.delete(p[0]);else return Promise.reject(new Error("Too many calendar requests are pending."))}let c=new URLSearchParams({start:`${t}T00:00:00+14:00`,end:`${i}T00:00:00-12:00`}),d=o.callApi("GET",`calendars/${encodeURIComponent(e)}?${c}`),l={promise:d,expires:1/0,pending:!0,stamp:r};return s.set(n,l),d.then(()=>{l.pending=!1,l.expires=Date.now()+6e4},()=>{s.get(n)===l&&s.delete(n)}),d}var M=o=>JSON.stringify([o.sourceId,o.typeId??o.label,o.label]);function ee(o,e=[]){let t=e.filter(n=>n.type===(o.typeId??o.label)&&(n.source===void 0||n.source===o.sourceId)&&(n.label===void 0||n.label===o.label)),i=n=>+(n.source!==void 0)+ +(n.label!==void 0)*2,s=new Map;for(let n of t)s.has(i(n))||s.set(i(n),n);return t.length?[...s.entries()].sort(([n],[r])=>n-r).reduce((n,[,r])=>({...n,...Object.fromEntries(Object.entries(r).filter(([,a])=>a!==void 0))}),{}):void 0}function te(o,e){return[...new Set([...b(e),...Object.values(o.states).filter(t=>t.entity_id.startsWith("calendar.")||t.entity_id.startsWith("sensor.")&&(()=>{let i=H(t);return i.supported&&!i.invalid})()).map(t=>t.entity_id)])]}function Xe(o,e){let t=new Map;for(let i of b(e)){let s=o.states[i];if(!(!s||!i.startsWith("sensor.")))for(let n of H(s).events)t.has(M(n))||t.set(M(n),n)}return[...t.values()].sort((i,s)=>i.label.localeCompare(s.label)||i.sourceId.localeCompare(s.sourceId))}function et(o,e,t,i){let s=new Map;for(let n of o){if(n.date<t||n.date>=i)continue;let r=ee(n,e.overrides);if(r?.hidden)continue;let a=JSON.stringify([M(n),n.date,n.color,n.colorSource,n.icon]);s.has(a)||s.set(a,{...n,label:r?.name??n.label,color:r?.color??n.color,colorSource:r?.color?"customize":n.colorSource,icon:r?.icon??n.icon})}return[...s.values()].sort((n,r)=>n.date.localeCompare(r.date)||n.label.localeCompare(r.label))}function Ce(o){let e=new Map;for(let t of o){let i=e.get(t.date)??[];i.push(t),e.set(t.date,i)}return[...e].map(([t,i])=>({date:t,events:i}))}function tt(o){return o.colorSource==="source"||o.colorSource==="customize"?o.color:void 0}var ie=class{constructor(){this.generation=0;this.cache=new Map}reset(){this.generation++,this.cache.clear(),this.connection=void 0,this.timeZone=void 0}cancel(){this.generation++}async update(e,t,i){(this.connection!==e.connection||this.timeZone!==e.config.time_zone)&&(this.cache.clear(),this.connection=e.connection,this.timeZone=e.config.time_zone);let s=++this.generation,n=e.config.time_zone,r=U(new Date,n),a=Je(r,t.days_to_show),c={rangeStart:r,rangeEnd:a,timeZone:n,messages:[]};i({...c,status:"loading",events:[]});let d=0,l=0,p=0,m=[],f=[];if(await Promise.all(b(t).map(async y=>{let g="sourceLoadFailed";try{let w=e.states[y];if(!w||w.state==="unavailable"||y.startsWith("calendar.")&&w.state==="unknown")throw g="sourceUnavailable",new Error(g);let v,A;if(y.startsWith("calendar."))v=Ye(await Ee(e,y,r,a),y,n);else{let S=H(w);if(!S.supported)throw g="sourceUnsupported",new Error(g);if(S.invalid)throw g="sourceInvalid",new Error(g);v=S.events,A=S.fetchedAt}if(s!==this.generation)return;this.cache.set(y,{events:v,fetchedAt:A}),A&&f.push(A),m.push(...v),l++}catch{if(s!==this.generation)return;d++,c.messages.push({source:y,reason:g});let w=this.cache.get(y);w&&(p++,m.push(...w.events),w.fetchedAt&&f.push(w.fetchedAt))}})),s!==this.generation)return;let $=et(m,t,r,a);i({...c,events:$,status:d?p||l?"stale":"unavailable":$.length?"ready":"empty",fetchedAt:f.sort((y,g)=>Date.parse(y)-Date.parse(g))[0]})}};var it={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ot=o=>(...e)=>({_$litDirective$:o,values:e}),oe=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var st="important",xt=" !"+st,Ae=ot(class extends oe{constructor(o){if(super(o),o.type!==it.ATTRIBUTE||o.name!=="style"||o.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(o){return Object.keys(o).reduce((e,t)=>{let i=o[t];return i==null?e:e+`${t=t.includes("-")?t:t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(o,[e]){let{style:t}=o.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(let i of this.ft)e[i]==null&&(this.ft.delete(i),i.includes("-")?t.removeProperty(i):t[i]=null);for(let i in e){let s=e[i];if(s!=null){this.ft.add(i);let n=typeof s=="string"&&s.endsWith(xt);i.includes("-")||n?t.setProperty(i,n?s.slice(0,-11):s,n?st:""):t[i]=s}}return E}});var Et={title:"Waste collection",next:"Next collection",schedule:"Collection schedule",close:"Close",loading:"Loading schedule\u2026",empty:"No collections in this date range",partialEmpty:"No dates from the available sources",unavailable:"Schedule unavailable",stale:"Some sources are unavailable. Dates may be out of date.",staleBadge:"Out of date",collections:"collections",updated:"Provider updated",details:"View schedule",manageBins:"Manage bins",today:"Today",more:"more",previousPage:"Previous page",nextPage:"Next page",sourceUnavailable:"Source unavailable. Check the entity in Home Assistant.",sourceUnsupported:"Select a sensor with Generic details or a calendar.",sourceInvalid:"Invalid collection records. Check the source integration.",sourceLoadFailed:"Could not load this source. Check the entity and connection in Home Assistant."},Ct={title:"Odbi\xF3r odpad\xF3w",next:"Najbli\u017Cszy odbi\xF3r",schedule:"Harmonogram odbioru",close:"Zamknij",loading:"\u0141adowanie harmonogramu\u2026",empty:"Brak odbior\xF3w w tym zakresie dat",partialEmpty:"Brak termin\xF3w z dost\u0119pnych \u017Ar\xF3de\u0142",unavailable:"Harmonogram niedost\u0119pny",stale:"Niekt\xF3re \u017Ar\xF3d\u0142a s\u0105 niedost\u0119pne. Terminy mog\u0105 by\u0107 nieaktualne.",staleBadge:"Nieaktualne",collections:"frakcje",updated:"Aktualizacja \u017Ar\xF3d\u0142a",details:"Zobacz harmonogram",manageBins:"Zarz\u0105dzaj pojemnikami",today:"Dzisiaj",more:"wi\u0119cej",previousPage:"Poprzednia strona",nextPage:"Nast\u0119pna strona",sourceUnavailable:"\u0179r\xF3d\u0142o niedost\u0119pne. Sprawd\u017A encj\u0119 w Home Assistant.",sourceUnsupported:"Wybierz sensor z danymi Generic lub kalendarz.",sourceInvalid:"Nieprawid\u0142owe dane odbior\xF3w. Sprawd\u017A integracj\u0119 \u017Ar\xF3d\u0142ow\u0105.",sourceLoadFailed:"Nie uda\u0142o si\u0119 wczyta\u0107 \u017Ar\xF3d\u0142a. Sprawd\u017A encj\u0119 i po\u0142\u0105czenie w Home Assistant."},q=o=>o.toLowerCase().startsWith("pl")?Ct:Et,Se=(o,e)=>`${o.source}: ${q(e)[o.reason]}`;var ke=(o,e,t=6)=>u`<div class="chips">
    ${o.slice(0,t).map(i=>u`<span class="chip" style=${Ae({"--waste-type-color":i.color})}><ha-icon aria-hidden="true" .icon=${i.icon??"mdi:trash-can-outline"}></ha-icon><span>${i.label}</span></span>`)}
    ${o.length>t?u`<span class="chip overflow">+${new Intl.NumberFormat(e).format(o.length-t)} ${q(e).more}</span>`:h}
  </div>`,nt=o=>u`<div class="bins" aria-hidden="true">
    ${o.slice(0,3).map(e=>u`<div
          class="bin"
          style=${Ae({"--waste-type-color":tt(e)})}
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
  </div>`,se=(o,e,t,i=6)=>u`${o.map(s=>{let n=new Date(`${s.date}T12:00:00Z`);return u`<div class="group">
      <div class="day" aria-hidden="true">
        ${new Intl.DateTimeFormat(t,{month:"short",timeZone:"UTC"}).format(n)}<strong
          >${n.getUTCDate()}</strong
        >
      </div>
      <div class="group-body">
        <div class="group-date">${Q(s.date,e,t)}</div>
        ${ke(s.events,t,i)}
      </div>
    </div>`})}`;var rt=L`
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
  .overflow { color: var(--secondary-text-color, #727272); }
  .pages { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
  .pages button { min-height: 44px; border: 0; border-radius: 8px; background: transparent; }
  .pages span { font-size: 12px; text-align: center; }
  .pages button:disabled { opacity: .45; cursor: default; }
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
    color: var(--primary-text-color, #212121);
    padding: 10px 20px;
    font-size: 13px;
    font-weight: 600;
    text-align: start;
  }
  .action:hover {
    background: color-mix(in srgb, currentColor 8%, transparent);
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
    color: var(--primary-text-color, #212121);
    border-inline-start: 3px solid var(--warning-color, #b26a00);
    padding-inline-start: 10px;
  }
  .updated {
    margin: 12px 0 0;
    font-size: 11px;
    color: var(--secondary-text-color, #727272);
  }
  .badge {
    display: flex;
    width: fit-content;
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
`;async function Te(o){return customElements.get("ha-form")||await(await(await window.loadCardHelpers()).createCardElement({type:"button"})).constructor.getConfigElement(),document.createElement(o)}var I=class extends _{constructor(){super(...arguments);this.badge=!1;this.detailsOpen=!1;this.detailsPage=0;this.controller=new ie;this.visible=()=>{document.visibilityState==="visible"&&this.refresh()}}set hass(t){let i=this.ha;this.ha=t,(!i||i.connection!==t.connection||i.config.time_zone!==t.config.time_zone)&&(this.snapshot=void 0),(!i||i.connection!==t.connection||i.config.time_zone!==t.config.time_zone||b(this.config??{type:""}).some(s=>i.states[s]!==t.states[s]))&&this.refresh(),(!i||i.locale?.language!==t.locale?.language||i.language!==t.language)&&this.requestUpdate()}get hass(){return this.ha}setConfig(t){let i=Ve(t),s=this.config,n=!s||JSON.stringify(b(s).sort())!==JSON.stringify(b(i).sort());n&&this.controller.reset(),(n||s?.days_to_show!==i.days_to_show||JSON.stringify(s?.overrides)!==JSON.stringify(i.overrides))&&(this.snapshot=void 0),this.config=i,this.refresh(),this.requestUpdate()}static getConfigElement(){return Te("waste-pickup-planner-card-editor")}static getStubConfig(t){let i=te(t,{type:""});return{type:"custom:waste-pickup-planner-card",entity:i.find(s=>s.startsWith("sensor."))??i[0]??"sensor.waste_schedule",layout:"compact"}}getCardSize(){return this.config?.layout==="schedule"?Math.min(this.config.max_groups+1,8):this.config?.layout==="hero"?5:3}getGridOptions(){return{columns:12,min_columns:6,rows:"auto"}}connectedCallback(){super.connectedCallback(),document.addEventListener("visibilitychange",this.visible),this.timer=setInterval(()=>this.refresh(),6e4),this.refresh()}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.timer),document.removeEventListener("visibilitychange",this.visible),this.controller.cancel(),this.detailsOpen=!1}refresh(){!this.isConnected||!this.ha||!this.config||(this.day=U(new Date,this.ha.config.time_zone),this.snapshot?.rangeStart!==this.day&&(this.snapshot=void 0),this.controller.update(this.ha,this.config,t=>{(t.status!=="loading"||!this.snapshot)&&(this.snapshot=t)}))}locale(){return this.config?.locale||this.ha?.locale?.language||this.ha?.language||"en"}async activate(){let t=this.config;if(!t)return;let i=t.tap_action?.action??"details";i!=="none"&&(i==="more-info"?this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:b(t)[0]},bubbles:!0,composed:!0})):i==="navigate"?(history.pushState(null,"",t.tap_action.navigation_path),window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1}}))):(this.detailsPage=0,this.detailsOpen=!0,await this.updateComplete,this.isConnected&&this.detailsOpen&&this.renderRoot.querySelector("dialog")?.showModal()))}manageBins(){history.pushState(null,"","/config/integrations/integration/waste_collection_schedule"),window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1}}))}async changeDetailsPage(t){this.detailsPage=t,await this.updateComplete,this.renderRoot.querySelector("dialog")?.scrollTo(0,0)}render(){if(!this.config)return h;let t=this.locale(),i=q(t),s=this.snapshot,n=Ce(s?.events??[]),r=n[0],a=s?.rangeStart??this.day??"2000-01-01",c=this.config.title??i.title,d=s?.status??"loading",l=d==="empty"?i.empty:d==="stale"?i.partialEmpty:d==="unavailable"?i.unavailable:i.loading,p=r?r.events.length>2?`${new Intl.NumberFormat(t).format(r.events.length)} ${i.collections}`:r.events.map(v=>v.label).join(" \xB7 "):l,m=r?Q(r.date,a,t):l,f=d==="stale"?u`<p class="notice" role="status">${i.stale}</p>`:h,$=100,y=Math.max(1,Math.ceil((s?.events.length??0)/$)),g=Math.min(this.detailsPage,y-1),w=this.detailsOpen?u`<dialog aria-label=${i.schedule} @close=${()=>{this.detailsOpen=!1}}>
      <div class="heading">
        <h2>${c}</h2>
        <button
          class="close"
          aria-label=${i.close}
          @click=${()=>this.renderRoot.querySelector("dialog")?.close()}
        >
          ✕
        </button>
      </div>
      ${n.length?se(Ce(s.events.slice(g*$,(g+1)*$)),a,t,$):u`<p class="state">${l}</p>`}${f}${s?.messages.map(v=>u`<p class="state">${Se(v,t)}</p>`)}
      ${y>1?u`<nav class="pages" aria-label=${i.schedule}>
        <button ?disabled=${g===0} @click=${()=>this.changeDetailsPage(g-1)}>${i.previousPage}</button>
        <span aria-live="polite">${new Intl.NumberFormat(t).format(g+1)} / ${new Intl.NumberFormat(t).format(y)}</span>
        <button ?disabled=${g+1===y} @click=${()=>this.changeDetailsPage(g+1)}>${i.nextPage}</button>
      </nav>`:h}
    </dialog>`:h;if(this.badge){let v=r?r.events.slice(0,6).map(ct=>ct.label).join(" \xB7 ")+(r.events.length>6?` \xB7 +${new Intl.NumberFormat(t).format(r.events.length-6)} ${i.more}`:""):l,A=`${c}: ${m}. ${v}${d==="stale"?`. ${i.stale}`:""}`,S=u`<ha-icon aria-hidden="true"
        .icon=${d==="stale"||d==="unavailable"?"mdi:alert-circle-outline":"mdi:trash-can-outline"}></ha-icon>
        <span class="badge-copy"><strong>${r?m:c}</strong>
        <small>${d==="stale"?`${i.staleBadge} \xB7 `:""}${p}</small></span>`;return this.config.tap_action?.action==="none"?u`<div class="badge" role="img" aria-label=${A} title=${v}>${S}</div>`:u`<button class="badge" aria-label=${A} title=${v} @click=${this.activate}>${S}</button>${w}`}return u`<ha-card
        ><section class=${`surface ${this.config.layout}`}>
          <div class="heading">
            <h2>${c}</h2>
            <ha-icon aria-hidden="true" icon="mdi:calendar-outline"></ha-icon>
          </div>
          ${r?this.config.layout==="schedule"?se(n.slice(0,this.config.max_groups),a,t):u`<div class="primary">
                      <div class="copy">
                        <div class="eyebrow">${i.next}</div>
                        <span class="date">${m}</span>${ke(r.events,t)}
                        <p class="full-date">
                          ${new Intl.DateTimeFormat(t,{dateStyle:"long",timeZone:"UTC"}).format(new Date(`${r.date}T12:00:00Z`))}
                        </p>
                      </div>
                      ${this.config.layout==="hero"&&this.config.show_artwork?nt(r.events):h}
                    </div>
                    ${this.config.layout==="hero"&&n.length>1?u`<div class="upcoming">${se(n.slice(1,this.config.max_groups),a,t)}</div>`:h}`:u`<p class="state" role="status">${l}</p>`}
          ${f}${d==="unavailable"?s?.messages.map(v=>u`<p class="state">${Se(v,t)}</p>`):h}
          ${this.config.show_updated&&s?.fetchedAt?u`<p class="updated">${i.updated}: ${Ke(s.fetchedAt,t,s.timeZone)}</p>`:h}
        </section>
        ${this.config.tap_action?.action==="none"?h:u`<button class="action" @click=${this.activate}>${this.config.tap_action?.action==="more-info"?c:i.details} <span aria-hidden="true">↗</span></button>`}
        ${this.config.show_manage_bins?u`<button class="action" @click=${this.manageBins}>${i.manageBins} <span aria-hidden="true">⚙</span></button>`:h}</ha-card
      >${w}`}};I.styles=rt,I.properties={snapshot:{state:!0},detailsOpen:{state:!0},detailsPage:{state:!0}};var ne=class extends I{constructor(){super(...arguments);this.badge=!0}static getConfigElement(){return Te("waste-pickup-planner-badge-editor")}static getStubConfig(t){return{...super.getStubConfig(t),type:"custom:waste-pickup-planner-badge"}}};var At=[{name:"entities",required:!0,selector:{entity:{domain:["sensor","calendar"],multiple:!0}}},{name:"title",selector:{text:{}}},{name:"layout",selector:{select:{options:["compact","hero","schedule"],mode:"dropdown"}}},{name:"days_to_show",selector:{number:{min:1,max:366,mode:"box"}}},{name:"max_groups",selector:{number:{min:1,max:50,mode:"box"}}},{name:"show_artwork",selector:{boolean:{}}},{name:"show_updated",selector:{boolean:{}}},{name:"show_manage_bins",selector:{boolean:{}}},{name:"locale",selector:{text:{}}}],St={entities:"Waste sensors or calendars",title:"Title",layout:"Layout",days_to_show:"Days to show",max_groups:"Visible date groups",show_artwork:"Show bin artwork in hero layout",show_updated:"Show provider update time",show_manage_bins:"Show Manage bins shortcut to Waste Collection Schedule",locale:"Language override (optional)"},z=class extends _{setConfig(e){this.config={...e}}changed(e){this.config={...this.config,...e},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this.config},bubbles:!0,composed:!0}))}override(e,t){let i=[...this.config?.overrides??[]];i[e]={...i[e],...t},this.changed({overrides:i})}render(){if(!this.config||!this.hass)return h;let e={...this.config,entities:this.config.entities??(this.config.entity?[this.config.entity]:[])},t=Xe(this.hass,this.config),i=t.filter(r=>!this.config.overrides?.some(a=>a.type===(r.typeId??r.label)&&a.source===r.sourceId&&a.label===r.label)),s=b(this.config).filter(r=>r.startsWith("sensor.")&&this.hass.states[r]&&!H(this.hass.states[r]).supported),n=r=>u`<ha-form
        .hass=${this.hass}
        .data=${e}
        .schema=${At.filter(a=>r.includes(a.name)&&(!this.config.type.includes("badge")||!["layout","max_groups","show_artwork","show_manage_bins"].includes(a.name))).map(a=>a.name==="entities"?{...a,selector:{entity:{domain:["sensor","calendar"],multiple:!0,include_entities:te(this.hass,this.config)}}}:a)}
        .computeLabel=${a=>St[a.name]}
        @value-changed=${a=>this.changed({...a.detail.value,entity:void 0})}
      ></ha-form>`;return u`${n(["entities"])}
      <p>
        Select one authoritative source per address. To use a Waste Collection
        Schedule sensor, set its details format to Generic (All attributes in
        the visual bin controls). Choose the combined sensor to show all bins.
        Calendars also work; unrelated sensors are excluded from suggestions.
      </p>
      ${s.length?u`<p class="warning" role="status">${s.join(", ")}: no structured schedule is exposed. Open the sensor settings and choose Generic / All attributes, then select it here again.</p>`:h}
      <h3>Bin appearance</h3>
      <p>Colors follow the integration until you choose a local override. Bin definitions stay in Waste Collection Schedule.</p>
      ${i.length?u`<label>Customize a bin<select .value=${""} @change=${r=>{let a=i.find(c=>M(c)===r.target.value);a&&this.changed({overrides:[...this.config.overrides??[],{type:a.typeId??a.label,source:a.sourceId,label:a.label}]})}}><option value="">Choose a bin…</option>${i.map(r=>u`<option value=${M(r)}>${r.label} · ${this.hass.states[r.sourceId]?.attributes.friendly_name??r.sourceId}</option>`)}</select></label>`:h}
      ${t.length?h:u`<p>Bin choices appear when a selected sensor exposes collections. Calendar names or bins outside the sensor's current schedule can be configured in Advanced.</p>`}
      ${(this.config.overrides??[]).map((r,a)=>{let c=t.find(l=>r.type===(l.typeId??l.label)&&(r.source===void 0||r.source===l.sourceId)&&(r.label===void 0||r.label===l.label)),d=c?ee(c,this.config.overrides.filter((l,p)=>p!==a))?.color:void 0;return u`<fieldset><legend>${r.label??r.type}${r.source?u` · ${this.hass.states[r.source]?.attributes.friendly_name??r.source}`:h}</legend>
          <label>Display name<input .value=${r.name??""} placeholder=${r.label??r.type} @input=${l=>this.override(a,{name:l.target.value||void 0})} /></label>
          <label>Local bin color<input type="color" .value=${r.color??d??c?.color??"#808080"} @input=${l=>this.override(a,{color:l.target.value})} /></label>
          <p>${r.color?`Local color: ${r.color}`:d?`Inherited card color: ${d}`:c?.color?`Integration color: ${c.color}`:"No integration color is available; artwork stays neutral."}</p>
          ${r.color?u`<button @click=${()=>this.override(a,{color:void 0})}>${d?"Use inherited card color":"Use integration color"}</button>`:h}
          <label class="check"><input type="checkbox" .checked=${r.hidden??!1} @change=${l=>this.override(a,{hidden:l.target.checked})} /> Hide this collection</label>
          <details><summary>Advanced matching and icon</summary>
            ${[["type","Category ID or exact calendar name"],["source","Source entity (optional)"],["label","Exact bin name (optional)"],["icon","Icon (mdi:\u2026)"],["color","Local color (#RRGGBB)"]].map(([l,p])=>u`<label>${p}<input .value=${r[l]??""} @change=${m=>this.override(a,{[l]:m.target.value||void 0})} /></label>`)}
          </details>
          <button class="remove" @click=${()=>this.changed({overrides:this.config.overrides.filter((l,p)=>p!==a)})}>Remove override</button>
        </fieldset>`})}
      ${n(["title","layout","show_artwork","show_manage_bins"])}
      <details><summary>Advanced card settings</summary>
      ${n(["days_to_show","max_groups","show_updated","locale"])}
      <label
        >Tap action<select
          .value=${this.config.tap_action?.action??"details"}
          @change=${r=>this.changed({tap_action:{action:r.target.value}})}
        >
          ${["details","more-info","navigate","none"].map(r=>u`<option value=${r}>${r}</option>`)}
        </select></label
      >
      ${this.config.tap_action?.action==="navigate"?u`<label>Dashboard path<input .value=${this.config.tap_action.navigation_path??""} placeholder="/lovelace/waste" @change=${r=>this.changed({tap_action:{action:"navigate",navigation_path:r.target.value}})} /></label>`:h}
      </details>
      <details>
        <summary>Advanced: add a category or calendar override</summary>
        <p>
          Use the exact type ID from v3, or the complete collection name for
          older sensors and calendars.
        </p>
        <button
          @click=${()=>this.changed({overrides:[...this.config.overrides??[],{type:"collection_name"}]})}
        >
          Add collection override
        </button>
      </details>`}};z.properties={hass:{attribute:!1},config:{state:!0}},z.styles=L`
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
    legend { overflow-wrap: anywhere; }
    input[type="color"] { height: 48px; cursor: pointer; }
    .check { display: flex; align-items: center; gap: 10px; min-height: 44px; }
    .check input { min-height: 0; width: 20px; height: 20px; padding: 0; flex-shrink: 0; }
    .warning { padding: 12px; border-left: 3px solid var(--warning-color, #ffa600); }
  `;var re=class extends z{};customElements.define("waste-pickup-planner-card",I);customElements.define("waste-pickup-planner-badge",ne);customElements.define("waste-pickup-planner-card-editor",z);customElements.define("waste-pickup-planner-badge-editor",re);var at=window;(at.customCards??=[]).push({type:"waste-pickup-planner-card",name:"Waste Pickup Planner",description:"Date-grouped waste collections with compact, hero and schedule layouts.",preview:!0});(at.customBadges??=[]).push({type:"waste-pickup-planner-badge",name:"Waste Pickup Planner Badge",description:"The next collection date and types, with schedule details."});
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
