var oe=globalThis,ne=oe.ShadowRoot&&(oe.ShadyCSS===void 0||oe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ye=Symbol(),Re=new WeakMap,G=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==ye)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(ne&&t===void 0){let i=e!==void 0&&e.length===1;i&&(t=Re.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Re.set(e,t))}return t}toString(){return this.cssText}},We=o=>new G(typeof o=="string"?o:o+"",void 0,ye),q=(o,...t)=>{let e=o.length===1?o[0]:t.reduce((i,n,r)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+o[r+1],o[0]);return new G(e,o,ye)},Fe=(o,t)=>{if(ne)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let i=document.createElement("style"),n=oe.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,o.appendChild(i)}},ve=ne?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return We(e)})(o):o;var{is:St,defineProperty:At,getOwnPropertyDescriptor:zt,getOwnPropertyNames:Tt,getOwnPropertySymbols:Pt,getPrototypeOf:It}=Object,re=globalThis,Ze=re.trustedTypes,jt=Ze?Ze.emptyScript:"",Ot=re.reactiveElementPolyfillSupport,J=(o,t)=>o,be={toAttribute(o,t){switch(t){case Boolean:o=o?jt:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},qe=(o,t)=>!St(o,t),Ge={attribute:!0,type:String,converter:be,reflect:!1,useDefault:!1,hasChanged:qe};Symbol.metadata??=Symbol("metadata"),re.litPropertyMetadata??=new WeakMap;var S=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Ge){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let i=Symbol(),n=this.getPropertyDescriptor(t,i,e);n!==void 0&&At(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){let{get:n,set:r}=zt(this.prototype,t)??{get(){return this[e]},set(a){this[e]=a}};return{get:n,set(a){let c=n?.call(this);r?.call(this,a),this.requestUpdate(t,c,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Ge}static _$Ei(){if(this.hasOwnProperty(J("elementProperties")))return;let t=It(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(J("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(J("properties"))){let e=this.properties,i=[...Tt(e),...Pt(e)];for(let n of i)this.createProperty(n,e[n])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[i,n]of e)this.elementProperties.set(i,n)}this._$Eh=new Map;for(let[e,i]of this.elementProperties){let n=this._$Eu(e,i);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let n of i)e.unshift(ve(n))}else t!==void 0&&e.push(ve(t));return e}static _$Eu(t,e){let i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Fe(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){let i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(n!==void 0&&i.reflect===!0){let r=(i.converter?.toAttribute!==void 0?i.converter:be).toAttribute(e,i.type);this._$Em=t,r==null?this.removeAttribute(n):this.setAttribute(n,r),this._$Em=null}}_$AK(t,e){let i=this.constructor,n=i._$Eh.get(t);if(n!==void 0&&this._$Em!==n){let r=i.getPropertyOptions(n),a=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:be;this._$Em=n;let c=a.fromAttribute(e,r.type);this[n]=c??this._$Ej?.get(n)??c,this._$Em=null}}requestUpdate(t,e,i,n=!1,r){if(t!==void 0){let a=this.constructor;if(n===!1&&(r=this[t]),i??=a.getPropertyOptions(t),!((i.hasChanged??qe)(r,e)||i.useDefault&&i.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(a._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:n,wrapped:r},a){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??e??this[t]),r!==!0||a!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),n===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[n,r]of this._$Ep)this[n]=r;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[n,r]of i){let{wrapped:a}=r,c=this[n];a!==!0||this._$AL.has(n)||c===void 0||this.C(n,void 0,r,c)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[J("elementProperties")]=new Map,S[J("finalized")]=new Map,Ot?.({ReactiveElement:S}),(re.reactiveElementVersions??=[]).push("2.1.2");var Ee=globalThis,Je=o=>o,se=Ee.trustedTypes,Ke=se?se.createPolicy("lit-html",{createHTML:o=>o}):void 0,tt="$lit$",z=`lit$${Math.random().toFixed(9).slice(2)}$`,it="?"+z,Ht=`<${it}>`,H=document,V=()=>H.createComment(""),Y=o=>o===null||typeof o!="object"&&typeof o!="function",Se=Array.isArray,Dt=o=>Se(o)||typeof o?.[Symbol.iterator]=="function",we=`[ 	
\f\r]`,K=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ve=/-->/g,Ye=/>/g,j=RegExp(`>|${we}(?:([^\\s"'>=/]+)(${we}*=${we}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Qe=/'/g,Xe=/"/g,ot=/^(?:script|style|textarea|title)$/i,Ae=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),u=Ae(1),Vt=Ae(2),Yt=Ae(3),A=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),et=new WeakMap,O=H.createTreeWalker(H,129);function nt(o,t){if(!Se(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ke!==void 0?Ke.createHTML(t):t}var Mt=(o,t)=>{let e=o.length-1,i=[],n,r=t===2?"<svg>":t===3?"<math>":"",a=K;for(let c=0;c<e;c++){let s=o[c],l,p,d=-1,m=0;for(;m<s.length&&(a.lastIndex=m,p=a.exec(s),p!==null);)m=a.lastIndex,a===K?p[1]==="!--"?a=Ve:p[1]!==void 0?a=Ye:p[2]!==void 0?(ot.test(p[2])&&(n=RegExp("</"+p[2],"g")),a=j):p[3]!==void 0&&(a=j):a===j?p[0]===">"?(a=n??K,d=-1):p[1]===void 0?d=-2:(d=a.lastIndex-p[2].length,l=p[1],a=p[3]===void 0?j:p[3]==='"'?Xe:Qe):a===Xe||a===Qe?a=j:a===Ve||a===Ye?a=K:(a=j,n=void 0);let g=a===j&&o[c+1].startsWith("/>")?" ":"";r+=a===K?s+Ht:d>=0?(i.push(l),s.slice(0,d)+tt+s.slice(d)+z+g):s+z+(d===-2?c:g)}return[nt(o,r+(o[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]},Q=class o{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let r=0,a=0,c=t.length-1,s=this.parts,[l,p]=Mt(t,e);if(this.el=o.createElement(l,i),O.currentNode=this.el.content,e===2||e===3){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(n=O.nextNode())!==null&&s.length<c;){if(n.nodeType===1){if(n.hasAttributes())for(let d of n.getAttributeNames())if(d.endsWith(tt)){let m=p[a++],g=n.getAttribute(d).split(z),y=/([.?@])?(.*)/.exec(m);s.push({type:1,index:r,name:y[2],strings:g,ctor:y[1]==="."?xe:y[1]==="?"?_e:y[1]==="@"?Ce:R}),n.removeAttribute(d)}else d.startsWith(z)&&(s.push({type:6,index:r}),n.removeAttribute(d));if(ot.test(n.tagName)){let d=n.textContent.split(z),m=d.length-1;if(m>0){n.textContent=se?se.emptyScript:"";for(let g=0;g<m;g++)n.append(d[g],V()),O.nextNode(),s.push({type:2,index:++r});n.append(d[m],V())}}}else if(n.nodeType===8)if(n.data===it)s.push({type:2,index:r});else{let d=-1;for(;(d=n.data.indexOf(z,d+1))!==-1;)s.push({type:7,index:r}),d+=z.length-1}r++}}static createElement(t,e){let i=H.createElement("template");return i.innerHTML=t,i}};function B(o,t,e=o,i){if(t===A)return t;let n=i!==void 0?e._$Co?.[i]:e._$Cl,r=Y(t)?void 0:t._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),r===void 0?n=void 0:(n=new r(o),n._$AT(o,e,i)),i!==void 0?(e._$Co??=[])[i]=n:e._$Cl=n),n!==void 0&&(t=B(o,n._$AS(o,t.values),n,i)),t}var $e=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:i}=this._$AD,n=(t?.creationScope??H).importNode(e,!0);O.currentNode=n;let r=O.nextNode(),a=0,c=0,s=i[0];for(;s!==void 0;){if(a===s.index){let l;s.type===2?l=new X(r,r.nextSibling,this,t):s.type===1?l=new s.ctor(r,s.name,s.strings,this,t):s.type===6&&(l=new ke(r,this,t)),this._$AV.push(l),s=i[++c]}a!==s?.index&&(r=O.nextNode(),a++)}return O.currentNode=H,n}p(t){let e=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},X=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,n){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=B(this,t,e),Y(t)?t===h||t==null||t===""?(this._$AH!==h&&this._$AR(),this._$AH=h):t!==this._$AH&&t!==A&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Dt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==h&&Y(this._$AH)?this._$AA.nextSibling.data=t:this.T(H.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:i}=t,n=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=Q.createElement(nt(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(e);else{let r=new $e(n,this),a=r.u(this.options);r.p(e),this.T(a),this._$AH=r}}_$AC(t){let e=et.get(t.strings);return e===void 0&&et.set(t.strings,e=new Q(t)),e}k(t){Se(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,n=0;for(let r of t)n===e.length?e.push(i=new o(this.O(V()),this.O(V()),this,this.options)):i=e[n],i._$AI(r),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let i=Je(t).nextSibling;Je(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},R=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,n,r){this.type=1,this._$AH=h,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=h}_$AI(t,e=this,i,n){let r=this.strings,a=!1;if(r===void 0)t=B(this,t,e,0),a=!Y(t)||t!==this._$AH&&t!==A,a&&(this._$AH=t);else{let c=t,s,l;for(t=r[0],s=0;s<r.length-1;s++)l=B(this,c[i+s],e,s),l===A&&(l=this._$AH[s]),a||=!Y(l)||l!==this._$AH[s],l===h?t=h:t!==h&&(t+=(l??"")+r[s+1]),this._$AH[s]=l}a&&!n&&this.j(t)}j(t){t===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},xe=class extends R{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===h?void 0:t}},_e=class extends R{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==h)}},Ce=class extends R{constructor(t,e,i,n,r){super(t,e,i,n,r),this.type=5}_$AI(t,e=this){if((t=B(this,t,e,0)??h)===A)return;let i=this._$AH,n=t===h&&i!==h||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==h&&(i===h||n);n&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},ke=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){B(this,t)}};var Nt=Ee.litHtmlPolyfillSupport;Nt?.(Q,X),(Ee.litHtmlVersions??=[]).push("3.3.3");var rt=(o,t,e)=>{let i=e?.renderBefore??t,n=i._$litPart$;if(n===void 0){let r=e?.renderBefore??null;i._$litPart$=n=new X(t.insertBefore(V(),r),r,void 0,e??{})}return n._$AI(o),n};var ze=globalThis,_=class extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=rt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return A}};_._$litElement$=!0,_.finalized=!0,ze.litElementHydrateSupport?.({LitElement:_});var Ut=ze.litElementPolyfillSupport;Ut?.({LitElement:_});(ze.litElementVersions??=[]).push("4.2.2");var Te=o=>typeof o=="string"&&/^#[\da-f]{6}$/i.test(o),Pe=o=>typeof o=="string"&&/^mdi:[a-z0-9-]+$/.test(o);function f(o){return[...new Set(o.entities??(o.entity?[o.entity]:[]))]}function ae(o){if(!o||typeof o!="object")throw new Error("Choose a waste sensor or calendar.");if(o.entities!==void 0&&(!Array.isArray(o.entities)||o.entities.some(e=>typeof e!="string")))throw new Error("entities must be an array of entity IDs.");if(o.entity&&o.entities)throw new Error("Use entity or entities, not both.");let t=f(o);if(!t.length||t.length>12||t.some(e=>!/^(sensor|calendar)\.[a-z0-9_]+$/.test(e)))throw new Error("Choose 1\u201312 sensor or calendar entities.");if(o.layout!==void 0&&!["compact","hero","schedule","overview"].includes(o.layout))throw new Error("Unknown layout.");if(o.appearance!==void 0&&!["native","modern","minimal"].includes(o.appearance))throw new Error("Unknown appearance.");if(o.density!==void 0&&!["comfortable","compact"].includes(o.density))throw new Error("Unknown density.");for(let[e,i]of[["days_to_show",366],["max_groups",50]]){let n=o[e];if(n!==void 0&&(!Number.isInteger(n)||n<1||n>i))throw new Error(`${e} must be 1\u2013${i}.`)}for(let e of["show_artwork","show_updated","show_manage_bins","show_source"])if(o[e]!==void 0&&typeof o[e]!="boolean")throw new Error(`${e} must be true or false.`);if(o.title!==void 0&&typeof o.title!="string")throw new Error("title must be text.");if(o.locale!==void 0){if(typeof o.locale!="string")throw new Error("locale must be a language code.");new Intl.DateTimeFormat(o.locale)}if(o.overrides!==void 0){if(!Array.isArray(o.overrides)||o.overrides.length>100)throw new Error("overrides must contain at most 100 types.");for(let e of o.overrides)if(!e||typeof e.type!="string"||!e.type.trim()||e.source!==void 0&&(typeof e.source!="string"||!/^(sensor|calendar)\.[a-z0-9_]+$/.test(e.source))||e.label!==void 0&&(typeof e.label!="string"||!e.label.trim())||e.name!==void 0&&(typeof e.name!="string"||!e.name.trim())||e.hidden!==void 0&&typeof e.hidden!="boolean"||e.color!==void 0&&!Te(e.color)||e.icon!==void 0&&!Pe(e.icon))throw new Error("Invalid type override. Use an exact type ID or name, mdi icon, and #RRGGBB color.")}if(o.tap_action){if(!["details","more-info","navigate","none"].includes(o.tap_action.action))throw new Error("Unsupported tap action.");if(o.tap_action.action==="navigate"&&(typeof o.tap_action.navigation_path!="string"||!/^\/(?!\/)/.test(o.tap_action.navigation_path)||/[\\\u0000-\u001f]/.test(o.tap_action.navigation_path)))throw new Error("Navigation requires a local path beginning with /.")}return{...o,entities:o.entities?[...o.entities]:void 0,layout:o.layout??"compact",days_to_show:o.days_to_show??30,max_groups:o.max_groups??5}}function ce(o){if(typeof o!="string"||!/^\d{4}-\d{2}-\d{2}$/.test(o))return!1;let t=new Date(`${o}T12:00:00Z`);return Number.isFinite(t.getTime())&&t.toISOString().slice(0,10)===o}function W(o,t){let e=new Intl.DateTimeFormat("en-CA",{timeZone:t,year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(o),i=n=>e.find(r=>r.type===n).value;return`${i("year")}-${i("month")}-${i("day")}`}function st(o,t){let e=new Date(`${o}T12:00:00Z`);return e.setUTCDate(e.getUTCDate()+t),e.toISOString().slice(0,10)}function Lt(o,t){return Math.round((Date.parse(`${t}T12:00:00Z`)-Date.parse(`${o}T12:00:00Z`))/864e5)}function D(o,t,e){let i=Lt(t,o);return i<=1&&i>=0?new Intl.RelativeTimeFormat(e,{numeric:"auto"}).format(i,"day"):new Intl.DateTimeFormat(e,{weekday:"long",day:"numeric",month:"short",timeZone:"UTC"}).format(new Date(`${o}T12:00:00Z`))}function at(o,t,e){return new Intl.DateTimeFormat(t,{dateStyle:"medium",timeStyle:"short",timeZone:e}).format(new Date(o))}var le=o=>o!==null&&typeof o=="object"&&!Array.isArray(o)?o:void 0,je=o=>typeof o=="string"&&o.trim()?o:void 0;function Ie(o,t,e){let i=o.date??e,n=je(o.type);if(!(!ce(i)||!n))return{sourceId:t,entityId:t,date:i,label:n,typeId:je(o.type_id),icon:Pe(o.icon)?o.icon:void 0,color:Te(o.color)?o.color:void 0,colorSource:["source","customize","default"].includes(String(o.color_source))?o.color_source:void 0}}function M(o){let t=o.attributes,e="upcoming"in t?t.upcoming:"upcoming_pickups"in t?t.upcoming_pickups:"next_pickup"in t?t.next_pickup===null?[]:[t.next_pickup]:void 0;if(!Array.isArray(e))return{events:[],supported:!1,invalid:e!==void 0};let i=[],n=e.length>2e3;for(let a of e.slice(0,2e3)){if(i.length>=2e3){n=!0;break}let c=le(a);if(!c||!ce(c.date)){n=!0;continue}if(Array.isArray(c.collections)){c.collections.length>100&&(n=!0);for(let s of c.collections.slice(0,100)){let l=le(s),p=l&&Ie(l,o.entity_id,c.date);p?i.push(p):n=!0}}else if(Array.isArray(c.types)){c.types.length>100&&(n=!0);for(let s of c.types.slice(0,100)){let l=Ie({...c,type:s,color:void 0,color_source:void 0,type_id:void 0},o.entity_id);l?i.push(l):n=!0}}else{let s=Ie(c,o.entity_id);s?i.push(s):n=!0}}let r=typeof t.last_update=="string"&&/^\d{4}-\d{2}-\d{2}T/.test(t.last_update)&&/(?:Z|[+-]\d{2}:\d{2})$/.test(t.last_update)&&Number.isFinite(Date.parse(t.last_update))?t.last_update:void 0;return{events:i.slice(0,2e3),supported:!0,invalid:n||i.length>2e3,fetchedAt:r}}function ct(o,t,e){if(!Array.isArray(o)||o.length>1e4)throw new Error("Invalid calendar response.");return o.flatMap(i=>{let n=le(i),r=le(n?.start),a=je(n?.summary);if(!r||!a)return[];let c;return ce(r.date)?c=r.date:typeof r.dateTime=="string"&&/(?:Z|[+-]\d{2}:\d{2})$/.test(r.dateTime)&&Number.isFinite(Date.parse(r.dateTime))&&(c=W(new Date(r.dateTime),e)),c?[{sourceId:t,entityId:t,date:c,label:a}]:[]})}var lt=new WeakMap;function Oe(o,t,e,i){let n=lt.get(o.connection);n||(n=new Map,lt.set(o.connection,n));let r=JSON.stringify([t,e,i]),a=o.states[t]?.last_updated,c=n.get(r);if(c?.pending){if(c.stamp===a)return c.promise;let d=()=>Oe(o,t,e,i);return c.promise.then(d,d)}if(c&&c.stamp===a&&c.expires>Date.now())return c.promise;for(let[d,m]of n)!m.pending&&m.expires<=Date.now()&&n.delete(d);if(!n.has(r)&&n.size>=100){let d=[...n].find(([,m])=>!m.pending);if(d)n.delete(d[0]);else return Promise.reject(new Error("Too many calendar requests are pending."))}let s=new URLSearchParams({start:`${e}T00:00:00+14:00`,end:`${i}T00:00:00-12:00`}),l=o.callApi("GET",`calendars/${encodeURIComponent(t)}?${s}`),p={promise:l,expires:1/0,pending:!0,stamp:a};return n.set(r,p),l.then(()=>{p.pending=!1,p.expires=Date.now()+6e4},()=>{n.get(r)===p&&n.delete(r)}),l}function C(o,t,e=[t]){let i=r=>{let a=o?.states[r]?.attributes.friendly_name;return typeof a=="string"&&a.trim()?a.trim():r},n=i(t);return e.some(r=>r!==t&&i(r)===n)?`${n} \xB7 ${t}`:n}function dt(o){let t;try{t=new Intl.Collator(o)}catch{t=new Intl.Collator("en")}return(e,i)=>t.compare(e.label,i.label)||(e.sourceId<i.sourceId?-1:e.sourceId>i.sourceId?1:0)}function ee(o="en"){let t=dt(o);return(e,i)=>(e.date<i.date?-1:e.date>i.date?1:0)||t(e,i)}var w=o=>JSON.stringify([o.sourceId,o.typeId??o.originalLabel??o.label,o.originalLabel??o.label]),He=(o,t)=>t.type===(o.typeId??o.originalLabel??o.label)&&(t.source===void 0||t.source===o.sourceId)&&(t.label===void 0||t.label===(o.originalLabel??o.label)),de=o=>+(o.source!==void 0)+ +(o.label!==void 0)*2;function pt(o){let t=new Map;for(let e of o)t.has(de(e))||t.set(de(e),e);return o.length?[...t.entries()].sort(([e],[i])=>e-i).reduce((e,[,i])=>({...e,...Object.fromEntries(Object.entries(i).filter(([,n])=>n!==void 0))}),{}):void 0}function pe(o,t=[]){return pt(t.filter(e=>He(o,e)))}function ht(o,t=[]){return pt(t.filter(e=>e.type===o.type&&de(e)<de(o)&&(e.source===void 0||e.source===o.source)&&(e.label===void 0||e.label===o.label)))}function he(o,t){return[...new Set([...f(t),...Object.values(o.states).filter(e=>e.entity_id.startsWith("calendar.")||e.entity_id.startsWith("sensor.")&&(()=>{let i=M(e);return i.supported&&!i.invalid})()).map(e=>e.entity_id)])]}function ut(o,t,e=[]){let i=new Map;for(let r of f(t)){let a=o.states[r];if(!(!a||!r.startsWith("sensor.")))for(let c of M(a).events)i.has(w(c))||i.set(w(c),c)}let n=new Set(f(t));for(let r of e)r.sourceId.startsWith("calendar.")&&n.has(r.sourceId)&&!i.has(w(r))&&i.set(w(r),r);return[...i.values()].sort(dt(t.locale||o.locale?.language||o.language||"en"))}function gt(o,t="en"){let e=new Map;for(let i of o){let n=e.get(w(i));(!n||i.date<n.date)&&e.set(w(i),i)}return[...e.values()].sort(ee(t))}function mt(o,t,e,i){let n=new Map;for(let r of o){if(r.date<e||r.date>=i)continue;let a=pe(r,t.overrides);if(a?.hidden)continue;let c=JSON.stringify([w(r),r.date,r.color,r.colorSource,r.icon]);n.has(c)||n.set(c,{...r,originalLabel:r.originalLabel??r.label,label:a?.name??r.label,color:a?.color??r.color,colorSource:a?.color?"customize":r.colorSource,icon:a?.icon??r.icon})}return[...n.values()].sort(ee(t.locale))}function De(o){let t=new Map;for(let e of o){let i=t.get(e.date)??[];i.push(e),t.set(e.date,i)}return[...t].map(([e,i])=>({date:e,events:i}))}function ue(o){return o.colorSource==="source"||o.colorSource==="customize"?o.color:void 0}var F=class{constructor(){this.generation=0;this.cache=new Map}reset(){this.generation++,this.cache.clear(),this.connection=void 0,this.timeZone=void 0}cancel(){this.generation++}async update(t,e,i){(this.connection!==t.connection||this.timeZone!==t.config.time_zone)&&(this.cache.clear(),this.connection=t.connection,this.timeZone=t.config.time_zone);let n=++this.generation,r=t.config.time_zone,a=W(new Date,r),c=st(a,e.days_to_show),s={rangeStart:a,rangeEnd:c,timeZone:r,messages:[]};i({...s,status:"loading",events:[]});let l=0,p=0,d=0,m=[],g=[];if(await Promise.all(f(e).map(async b=>{let x="sourceLoadFailed";try{let $=t.states[b];if(!$||$.state==="unavailable"||b.startsWith("calendar.")&&$.state==="unknown")throw x="sourceUnavailable",new Error(x);let P,k;if(b.startsWith("calendar."))P=ct(await Oe(t,b,a,c),b,r);else{let E=M($);if(!E.supported)throw x="sourceUnsupported",new Error(x);if(E.invalid)throw x="sourceInvalid",new Error(x);P=E.events,k=E.fetchedAt}if(n!==this.generation)return;this.cache.set(b,{events:P,fetchedAt:k}),k&&g.push(k),m.push(...P),p++}catch{if(n!==this.generation)return;l++,s.messages.push({source:b,reason:x});let $=this.cache.get(b);$&&(d++,m.push(...$.events),$.fetchedAt&&g.push($.fetchedAt))}})),n!==this.generation)return;let y=mt(m,e,a,c);i({...s,events:y,status:l?d||p?"stale":"unavailable":y.length?"ready":"empty",fetchedAt:g.sort((b,x)=>Date.parse(b)-Date.parse(x))[0]})}};var ft={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},yt=o=>(...t)=>({_$litDirective$:o,values:t}),ge=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var vt="important",Bt=" !"+vt,T=yt(class extends ge{constructor(o){if(super(o),o.type!==ft.ATTRIBUTE||o.name!=="style"||o.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(o){return Object.keys(o).reduce((t,e)=>{let i=o[e];return i==null?t:t+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(o,[t]){let{style:e}=o.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let i of this.ft)t[i]==null&&(this.ft.delete(i),i.includes("-")?e.removeProperty(i):e[i]=null);for(let i in t){let n=t[i];if(n!=null){this.ft.add(i);let r=typeof n=="string"&&n.endsWith(Bt);i.includes("-")||r?e.setProperty(i,r?n.slice(0,-11):n,r?vt:""):e[i]=n}}return A}});var Rt={title:"Waste collection",next:"Next collection",schedule:"Collection schedule",close:"Close",loading:"Loading schedule\u2026",empty:"No collections in this date range",partialEmpty:"No dates from the available sources",unavailable:"Schedule unavailable",stale:"Some sources are unavailable. Dates may be out of date.",staleBadge:"Out of date",collections:"collections",updated:"Provider updated",details:"View schedule",manageBins:"Manage bins",today:"Today",more:"more",previousPage:"Previous page",nextPage:"Next page",yourBins:"Your bins",upcoming:"Upcoming collections",clearFilter:"Show all bins",filterHint:"Select a bin to filter the schedule",ready:"Schedule available",sources:"Sources",binPage:"Bin pages",sourceUnavailable:"Source unavailable. Check the entity in Home Assistant.",sourceUnsupported:"Select a sensor with Generic details or a calendar.",sourceInvalid:"Invalid collection records. Check the source integration.",sourceLoadFailed:"Could not load this source. Check the entity and connection in Home Assistant."},Wt={title:"Odbi\xF3r odpad\xF3w",next:"Najbli\u017Cszy odbi\xF3r",schedule:"Harmonogram odbioru",close:"Zamknij",loading:"\u0141adowanie harmonogramu\u2026",empty:"Brak odbior\xF3w w tym zakresie dat",partialEmpty:"Brak termin\xF3w z dost\u0119pnych \u017Ar\xF3de\u0142",unavailable:"Harmonogram niedost\u0119pny",stale:"Niekt\xF3re \u017Ar\xF3d\u0142a s\u0105 niedost\u0119pne. Terminy mog\u0105 by\u0107 nieaktualne.",staleBadge:"Nieaktualne",collections:"frakcje",updated:"Aktualizacja \u017Ar\xF3d\u0142a",details:"Zobacz harmonogram",manageBins:"Zarz\u0105dzaj pojemnikami",today:"Dzisiaj",more:"wi\u0119cej",previousPage:"Poprzednia strona",nextPage:"Nast\u0119pna strona",yourBins:"Twoje pojemniki",upcoming:"Nadchodz\u0105ce odbiory",clearFilter:"Poka\u017C wszystkie pojemniki",filterHint:"Wybierz pojemnik, aby filtrowa\u0107 harmonogram",ready:"Harmonogram dost\u0119pny",sources:"\u0179r\xF3d\u0142a",binPage:"Strony pojemnik\xF3w",sourceUnavailable:"\u0179r\xF3d\u0142o niedost\u0119pne. Sprawd\u017A encj\u0119 w Home Assistant.",sourceUnsupported:"Wybierz sensor z danymi Generic lub kalendarz.",sourceInvalid:"Nieprawid\u0142owe dane odbior\xF3w. Sprawd\u017A integracj\u0119 \u017Ar\xF3d\u0142ow\u0105.",sourceLoadFailed:"Nie uda\u0142o si\u0119 wczyta\u0107 \u017Ar\xF3d\u0142a. Sprawd\u017A encj\u0119 i po\u0142\u0105czenie w Home Assistant."},N=o=>o.toLowerCase().startsWith("pl")?Wt:Rt,Me=(o,t)=>`${o.source}: ${N(t)[o.reason]}`;var te=(o,t,e=6)=>u`<div class="chips">
    ${o.slice(0,e).map(i=>u`<span class="chip" style=${T({"--waste-type-color":i.color})}><ha-icon aria-hidden="true" .icon=${i.icon??"mdi:trash-can-outline"}></ha-icon><span>${i.label}</span></span>`)}
    ${o.length>e?u`<span class="chip overflow">+${new Intl.NumberFormat(t).format(o.length-e)} ${N(t).more}</span>`:h}
  </div>`,ie=o=>u`<div class="bins" aria-hidden="true">
    ${o.slice(0,3).map(t=>u`<div
          class="bin"
          style=${T({"--waste-type-color":ue(t)})}
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
  </div>`,Z=(o,t,e,i=6)=>u`${o.map(n=>{let r=new Date(`${n.date}T12:00:00Z`);return u`<div class="group">
      <div class="day" aria-hidden="true">
        ${new Intl.DateTimeFormat(e,{month:"short",timeZone:"UTC"}).format(r)}<strong
          >${new Intl.DateTimeFormat(e,{day:"numeric",timeZone:"UTC"}).format(r)}</strong
        >
      </div>
      <div class="group-body">
        <div class="group-date">${D(n.date,t,e)}</div>
        ${te(n.events,e,i)}
      </div>
    </div>`})}`;var bt=q`
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
    container-type: inline-size;
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
  ha-card[data-appearance="modern"] { border-radius: max(20px, var(--ha-card-border-radius, 16px)); }
  ha-card[data-appearance="modern"] .overview-next {
    padding: 18px;
    border-radius: 16px;
    background: linear-gradient(120deg, color-mix(in srgb, var(--primary-color, #03a9f4) 12%, transparent), color-mix(in srgb, var(--primary-color, #03a9f4) 3%, transparent));
  }
  ha-card[data-appearance="minimal"] .eyebrow { letter-spacing: 0; }
  ha-card[data-appearance="minimal"] .day { flex-basis: 36px; }
  ha-card[data-appearance="minimal"] .bin-tile { background: transparent; border-color: transparent; border-bottom-color: var(--divider-color, #ddd); border-radius: 0; }
  ha-card[data-appearance="minimal"] .bin-tile[aria-pressed="true"] { border-color: var(--primary-color, #03a9f4); }
  ha-card[data-density="compact"] .surface { padding: 14px; }
  ha-card[data-density="compact"] .group { padding: 10px 0; gap: 10px; }
  ha-card[data-density="compact"] .heading { margin-bottom: 12px; }
  ha-card[data-density="compact"] .bin-tile { padding: 10px; }
  ha-card[data-density="compact"] .section-heading { margin-top: 18px; }
  .section-heading { display: flex; align-items: center; justify-content: space-between; gap: 10px; margin: 24px 0 8px; }
  .section-heading h3 { font-size: 14px; font-weight: 600; margin: 0; }
  .section-heading small, .filter-hint { color: var(--secondary-text-color, #727272); font-size: 12px; }
  .filter-hint { margin: 0 0 12px; line-height: 1.5; overflow-wrap: anywhere; }
  .bin-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; }
  .bin-tile { position: relative; display: flex; align-items: center; gap: 10px; padding: 14px; min-height: 96px; width: 100%; text-align: start;
    border: 1px solid var(--divider-color, #ddd); border-radius: 12px; background: color-mix(in srgb, currentColor 2%, transparent); overflow: hidden; }
  .bin-tile[aria-pressed="true"] { border-color: var(--primary-color, #03a9f4); box-shadow: inset 0 0 0 1px var(--primary-color, #03a9f4); }
  .bin-tile:hover { background: color-mix(in srgb, currentColor 5%, transparent); }
  .bin-tile .bins { max-width: none; }
  .bin-tile .bin { width: 30px; height: 50px; filter: none; }
  .bin-tile ha-icon { flex-shrink: 0; color: var(--secondary-text-color, #727272); }
  .tile-copy { min-width: 0; }
  .tile-copy strong { display: block; font-size: 13px; line-height: 1.4; overflow-wrap: anywhere; }
  .source-name { display: block; font-size: 11px; line-height: 1.4; color: var(--secondary-text-color, #727272); margin-top: 4px; overflow-wrap: anywhere; }
  .tile-date { display: block; font-size: 12px; margin-top: 8px; text-transform: capitalize; }
  .tile-color { position: absolute; inset: auto 0 0; height: 3px; }
  .filter-reset { background: transparent; border: 0; color: var(--primary-color, #03a9f4); font-size: 12px; min-height: 44px; padding: 8px; }
  .source-status { display: flex; align-items: center; gap: 8px; margin-top: 20px; padding-top: 12px; border-top: 1px solid var(--divider-color, #ddd);
    color: var(--secondary-text-color, #727272); font-size: 12px; }
  .source-status ha-icon { --mdc-icon-size: 18px; flex-shrink: 0; }
  .source-status.stale ha-icon, .source-status.unavailable ha-icon { color: var(--warning-color, #b26a00); }
  .source-links { display: flex; flex-wrap: wrap; gap: 4px 10px; }
  .source-links button { border: 0; background: transparent; color: var(--secondary-text-color, #727272); font-size: 12px; min-height: 44px; padding: 6px 0; overflow-wrap: anywhere; text-align: start; max-width: 100%; }
  @container (max-width: 330px) { .bin-grid { grid-template-columns: 1fr; } .overview-next { align-items: flex-start; } }
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
`;async function Ne(o){return customElements.get("ha-form")||await(await(await window.loadCardHelpers()).createCardElement({type:"button"})).constructor.getConfigElement(),document.createElement(o)}function wt(o){let{events:t,groups:e,today:i,locale:n}=o,r=N(n),a=e[0],c=gt(t,n),s=12,l=Math.max(1,Math.ceil(c.length/s)),p=Math.min(o.page,l-1),d=c.find(g=>w(g)===o.selected),m=d?e.map(g=>({...g,events:g.events.filter(y=>w(y)===o.selected)})).filter(g=>g.events.length):e;return u`
    ${a?u`<div class="primary overview-next"><div class="copy"><div class="eyebrow">${r.next}</div>
      <span class="date">${D(a.date,i,n)}</span>${te(a.events,n)}
      <p class="full-date">${new Intl.DateTimeFormat(n,{dateStyle:"long",timeZone:"UTC"}).format(new Date(`${a.date}T12:00:00Z`))}</p>
    </div>${o.artwork?ie(a.events):h}</div>`:h}
    <div class="section-heading"><h3>${r.yourBins}</h3><small>${new Intl.NumberFormat(n).format(c.length)}</small></div>
    <p class="filter-hint">${r.filterHint}</p>
    <div class="bin-grid">${c.slice(p*s,(p+1)*s).map(g=>u`
      <button class="bin-tile" aria-pressed=${!!(d&&w(g)===o.selected)}
        @click=${()=>o.select(w(g)===o.selected?void 0:w(g))}>
        ${o.artwork?ie([g]):u`<ha-icon aria-hidden="true" .icon=${g.icon??"mdi:trash-can-outline"} style=${T({color:g.color})}></ha-icon>`}
        <span class="tile-copy"><strong>${g.label}</strong>${o.showSource?u`<small class="source-name">${C(o.hass,g.sourceId,o.sources)}</small>`:h}
          <span class="tile-date">${D(g.date,i,n)}</span></span>
        <span class="tile-color" aria-hidden="true" style=${T({backgroundColor:ue(g)})}></span>
      </button>`)}</div>
    ${l>1?u`<nav class="pages" aria-label=${r.binPage}><button ?disabled=${p===0} @click=${()=>o.changePage(p-1)}>${r.previousPage}</button>
      <span aria-live="polite">${new Intl.NumberFormat(n).format(p+1)} / ${new Intl.NumberFormat(n).format(l)}</span><button ?disabled=${p+1===l} @click=${()=>o.changePage(p+1)}>${r.nextPage}</button></nav>`:h}
    <div class="section-heading"><h3>${r.upcoming}</h3>${d?u`<button class="filter-reset" @click=${()=>o.select(void 0)}>${r.clearFilter}</button>`:h}</div>
    ${d?u`<p class="filter-hint" role="status">${d.label}${o.showSource?u` · ${C(o.hass,d.sourceId,o.sources)}`:h}</p>`:h}
    <div class="overview-schedule">${Z(m.slice(0,o.maxGroups),i,n)}</div>`}var U=class extends _{constructor(){super(...arguments);this.badge=!1;this.detailsOpen=!1;this.detailsPage=0;this.binPage=0;this.controller=new F;this.visible=()=>{document.visibilityState==="visible"&&this.refresh()}}set hass(e){let i=this.ha;this.ha=e,(!i||i.connection!==e.connection||i.config.time_zone!==e.config.time_zone)&&(this.snapshot=void 0,this.selectedBin=void 0,this.binPage=0),(!i||i.connection!==e.connection||i.config.time_zone!==e.config.time_zone||f(this.config??{type:""}).some(n=>i.states[n]!==e.states[n]))&&this.refresh(),(!i||i.locale?.language!==e.locale?.language||i.language!==e.language)&&this.requestUpdate()}get hass(){return this.ha}setConfig(e){let i=ae(e),n=this.config,r=!n||JSON.stringify(f(n).sort())!==JSON.stringify(f(i).sort());r&&this.controller.reset(),(r||n?.days_to_show!==i.days_to_show||JSON.stringify(n?.overrides)!==JSON.stringify(i.overrides))&&(this.snapshot=void 0,this.selectedBin=void 0,this.binPage=0,this.detailsPage=0),this.config=i,this.refresh(),this.requestUpdate()}static getConfigElement(){return Ne("waste-pickup-planner-card-editor")}static getStubConfig(e){let i=he(e,{type:""});return{type:"custom:waste-pickup-planner-card",entity:i.find(n=>n.startsWith("sensor."))??i[0]??"sensor.waste_schedule",layout:"compact"}}getCardSize(){return this.config?.layout==="overview"?8:this.config?.layout==="schedule"?Math.min(this.config.max_groups+1,8):this.config?.layout==="hero"?5:3}getGridOptions(){return{columns:12,min_columns:6,rows:"auto"}}connectedCallback(){super.connectedCallback(),document.addEventListener("visibilitychange",this.visible),this.timer=setInterval(()=>this.refresh(),6e4),this.refresh()}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.timer),document.removeEventListener("visibilitychange",this.visible),this.controller.cancel(),this.detailsOpen=!1}refresh(){!this.isConnected||!this.ha||!this.config||(this.day=W(new Date,this.ha.config.time_zone),this.snapshot?.rangeStart!==this.day&&(this.snapshot=void 0),this.controller.update(this.ha,this.config,e=>{(e.status!=="loading"||!this.snapshot)&&(this.snapshot=e)}))}locale(){return this.config?.locale||this.ha?.locale?.language||this.ha?.language||"en"}async activate(){let e=this.config;if(!e)return;let i=e.tap_action?.action??"details";i!=="none"&&(i==="more-info"?this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:f(e)[0]},bubbles:!0,composed:!0})):i==="navigate"?(history.pushState(null,"",e.tap_action.navigation_path),window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1}}))):(this.detailsPage=0,this.detailsOpen=!0,await this.updateComplete,this.isConnected&&this.detailsOpen&&this.renderRoot.querySelector("dialog")?.showModal()))}manageBins(){history.pushState(null,"","/config/integrations/integration/waste_collection_schedule"),window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1}}))}sourceDetails(e){this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0}))}async changeDetailsPage(e){this.detailsPage=e,await this.updateComplete,this.renderRoot.querySelector("dialog")?.scrollTo(0,0)}render(){if(!this.config)return h;let e=this.locale(),i=N(e),n=this.snapshot,r=[...n?.events??[]].sort(ee(e)),a=De(r),c=a[0],s=n?.rangeStart??this.day??"2000-01-01",l=this.config.layout==="overview"&&n?.events.some(v=>w(v)===this.selectedBin)?this.selectedBin:void 0,p=l?r.filter(v=>w(v)===l):r,d=f(this.config),m=this.config.show_source??d.length>1,g=this.config.title??i.title,y=n?.status??"loading",b=y==="empty"?i.empty:y==="stale"?i.partialEmpty:y==="unavailable"?i.unavailable:i.loading,x=c?c.events.length>2?`${new Intl.NumberFormat(e).format(c.events.length)} ${i.collections}`:c.events.map(v=>v.label).join(" \xB7 "):b,$=c?D(c.date,s,e):b,P=y==="stale"?u`<p class="notice" role="status">${i.stale}</p>`:h,k=100,E=Math.max(1,Math.ceil(p.length/k)),I=Math.min(this.detailsPage,E-1),Ue=this.detailsOpen?u`<dialog aria-label=${i.schedule} @close=${()=>{this.detailsOpen=!1}}>
      <div class="heading">
        <h2>${g}</h2>
        <button
          class="close"
          aria-label=${i.close}
          @click=${()=>this.renderRoot.querySelector("dialog")?.close()}
        >
          ✕
        </button>
      </div>
      ${p.length?Z(De(p.slice(I*k,(I+1)*k)),s,e,k):u`<p class="state">${b}</p>`}${P}${n?.messages.map(v=>u`<p class="state">${Me(v,e)}</p>`)}
      ${E>1?u`<nav class="pages" aria-label=${i.schedule}>
        <button ?disabled=${I===0} @click=${()=>this.changeDetailsPage(I-1)}>${i.previousPage}</button>
        <span aria-live="polite">${new Intl.NumberFormat(e).format(I+1)} / ${new Intl.NumberFormat(e).format(E)}</span>
        <button ?disabled=${I+1===E} @click=${()=>this.changeDetailsPage(I+1)}>${i.nextPage}</button>
      </nav>`:h}
    </dialog>`:h;if(this.badge){let v=c?c.events.slice(0,6).map(Et=>Et.label).join(" \xB7 ")+(c.events.length>6?` \xB7 +${new Intl.NumberFormat(e).format(c.events.length-6)} ${i.more}`:""):b,Le=`${g}: ${$}. ${v}${y==="stale"?`. ${i.stale}`:""}`,Be=u`<ha-icon aria-hidden="true"
        .icon=${y==="stale"||y==="unavailable"?"mdi:alert-circle-outline":"mdi:trash-can-outline"}></ha-icon>
        <span class="badge-copy"><strong>${c?$:g}</strong>
        <small>${y==="stale"?`${i.staleBadge} \xB7 `:""}${x}</small></span>`;return this.config.tap_action?.action==="none"?u`<div class="badge" role="img" aria-label=${Le} title=${v}>${Be}</div>`:u`<button class="badge" aria-label=${Le} title=${v} @click=${this.activate}>${Be}</button>${Ue}`}return u`<ha-card data-appearance=${this.config.appearance??"native"} data-density=${this.config.density??"comfortable"}
        ><section class=${`surface ${this.config.layout}`}>
          <div class="heading">
            <h2>${g}</h2>
            <ha-icon aria-hidden="true" icon="mdi:calendar-outline"></ha-icon>
          </div>
          ${c?this.config.layout==="overview"?wt({events:r,groups:a,today:s,locale:e,artwork:this.config.show_artwork??!0,showSource:m,sources:d,hass:this.ha,maxGroups:this.config.max_groups,selected:l,page:this.binPage,select:v=>{this.selectedBin=v,this.detailsPage=0},changePage:v=>{this.binPage=v}}):this.config.layout==="schedule"?Z(a.slice(0,this.config.max_groups),s,e):u`<div class="primary">
                      <div class="copy">
                        <div class="eyebrow">${i.next}</div>
                        <span class="date">${$}</span>${te(c.events,e)}
                        <p class="full-date">
                          ${new Intl.DateTimeFormat(e,{dateStyle:"long",timeZone:"UTC"}).format(new Date(`${c.date}T12:00:00Z`))}
                        </p>
                      </div>
                      ${this.config.layout==="hero"&&this.config.show_artwork?ie(c.events):h}
                    </div>
                    ${this.config.layout==="hero"&&a.length>1?u`<div class="upcoming">${Z(a.slice(1,this.config.max_groups),s,e)}</div>`:h}`:u`<p class="state" role="status">${b}</p>`}
          ${P}${y==="unavailable"?n?.messages.map(v=>u`<p class="state">${Me(v,e)}</p>`):h}
          ${this.config.show_updated&&n?.fetchedAt?u`<p class="updated">${i.updated}: ${at(n.fetchedAt,e,n.timeZone)}</p>`:h}
          ${this.config.layout==="overview"?u`<div class=${`source-status ${y}`} role="status">
            <ha-icon aria-hidden="true" .icon=${y==="ready"?"mdi:check-circle-outline":y==="stale"||y==="unavailable"?"mdi:alert-circle-outline":"mdi:calendar-outline"}></ha-icon>
            <span>${y==="ready"?i.ready:y==="stale"?i.staleBadge:b}</span>
          </div><div class="source-links" aria-label=${i.sources}>${d.map(v=>u`<button @click=${()=>this.sourceDetails(v)}>${C(this.ha,v,d)} <span aria-hidden="true">↗</span></button>`)}</div>`:h}
        </section>
        ${this.config.tap_action?.action==="none"?h:u`<button class="action" @click=${this.activate}>${this.config.tap_action?.action==="more-info"?g:i.details} <span aria-hidden="true">↗</span></button>`}
        ${this.config.show_manage_bins?u`<button class="action" @click=${this.manageBins}>${i.manageBins} <span aria-hidden="true">⚙</span></button>`:h}</ha-card
      >${Ue}`}};U.styles=bt,U.properties={snapshot:{state:!0},detailsOpen:{state:!0},detailsPage:{state:!0},selectedBin:{state:!0},binPage:{state:!0}};var me=class extends U{constructor(){super(...arguments);this.badge=!0}static getConfigElement(){return Ne("waste-pickup-planner-badge-editor")}static getStubConfig(e){return{...super.getStubConfig(e),type:"custom:waste-pickup-planner-badge"}}};var Ft={source:"Source and layout",appearanceSection:"Appearance",binsSection:"Bins",entities:"Waste sensors or calendars",title:"Title",layout:"Layout",appearance:"Appearance",density:"Density",days_to_show:"Days to show",max_groups:"Visible date groups",show_artwork:"Show bin artwork",show_updated:"Show provider update time",show_manage_bins:"Show Manage bins shortcut",show_source:"Show source names",locale:"Language override (optional)",compact:"Compact",hero:"Hero",schedule:"Schedule",overview:"Overview",native:"Native Home Assistant",modern:"Modern",minimal:"Minimal",comfortable:"Comfortable",sourceHelp:"Select one authoritative source per address. For Waste Collection Schedule, choose the combined sensor with Generic details (All attributes in visual bin controls). Calendars also work.",unsupported:"No structured schedule is exposed. Open the sensor settings and choose Generic / All attributes.",binsHelp:"Integration colors apply until you choose an override. Shared bin definitions stay in Waste Collection Schedule.",rangeHelp:"Calendar bin choices come from events in the selected date range. Bins without records can be added in Advanced.",noBins:"No bins found in the supplied schedule.",calendarLoading:"Loading calendar bins\u2026",calendarFailed:"Some calendar bins could not be loaded. Check the source entity or try again.",customize:"Edit bin",displayName:"Display name",localColor:"Local bin color",inheritedColor:"Inherited card color",integrationColor:"Integration color",localColorStatus:"Local color",varyingColors:"Integration colors vary by bin.",neutralColor:"No integration color is available; artwork stays neutral.",resetInherited:"Use inherited card color",resetIntegration:"Use integration color",hide:"Hide this collection",hidden:"Hidden",local:"Customized",integration:"Integration",done:"Done",remove:"Reset this override",matching:"Advanced matching and icon",type:"Category ID or exact calendar name",binSource:"Source entity (optional)",label:"Exact bin name (optional)",icon:"Icon (mdi:\u2026)",color:"Local color (#RRGGBB)",advanced:"Advanced settings",advancedOverride:"Add a category or missing bin override",overrideHelp:"Use the exact type ID, or the complete collection name for older sensors and calendars.",addOverride:"Add collection override",tap:"Tap action",details:"View schedule","more-info":"Entity details",overrideLimit:"This card supports up to 100 overrides. Reset an unused override before adding another.",navigate:"Open dashboard",none:"No action",navigationPath:"Dashboard path",retry:"Retry"},Zt={source:"\u0179r\xF3d\u0142o i uk\u0142ad",appearanceSection:"Wygl\u0105d",binsSection:"Pojemniki",entities:"Sensory odpad\xF3w lub kalendarze",title:"Tytu\u0142",layout:"Uk\u0142ad",appearance:"Wygl\u0105d",density:"Odst\u0119py",days_to_show:"Liczba dni",max_groups:"Widoczne grupy termin\xF3w",show_artwork:"Poka\u017C ilustracje pojemnik\xF3w",show_updated:"Poka\u017C czas aktualizacji \u017Ar\xF3d\u0142a",show_manage_bins:"Poka\u017C skr\xF3t Zarz\u0105dzaj pojemnikami",show_source:"Poka\u017C nazwy \u017Ar\xF3de\u0142",locale:"J\u0119zyk (opcjonalnie)",compact:"Kompaktowy",hero:"Wyr\xF3\u017Cniony",schedule:"Harmonogram",overview:"Przegl\u0105d",native:"Natywny Home Assistant",modern:"Nowoczesny",minimal:"Minimalistyczny",comfortable:"Wygodne",sourceHelp:"Wybierz jedno g\u0142\xF3wne \u017Ar\xF3d\u0142o dla ka\u017Cdego adresu. W Waste Collection Schedule wybierz sensor zbiorczy ze szczeg\xF3\u0142ami Generic (Wszystkie atrybuty w ustawieniach wizualnych). Mo\u017Cesz te\u017C u\u017Cy\u0107 kalendarza.",unsupported:"Sensor nie udost\u0119pnia danych harmonogramu. Otw\xF3rz jego ustawienia i wybierz Generic / Wszystkie atrybuty.",binsHelp:"Kolory integracji obowi\u0105zuj\u0105 do wybrania w\u0142asnych. Wsp\xF3lne definicje pojemnik\xF3w pozostaj\u0105 w Waste Collection Schedule.",rangeHelp:"Pojemniki kalendarza pochodz\u0105 z wydarze\u0144 w wybranym zakresie dat. Pojemniki bez termin\xF3w mo\u017Cna doda\u0107 w ustawieniach zaawansowanych.",noBins:"Brak pojemnik\xF3w w udost\u0119pnionym harmonogramie.",calendarLoading:"\u0141adowanie pojemnik\xF3w kalendarza\u2026",calendarFailed:"Nie uda\u0142o si\u0119 wczyta\u0107 niekt\xF3rych pojemnik\xF3w kalendarza. Sprawd\u017A encj\u0119 \u017Ar\xF3d\u0142ow\u0105 lub spr\xF3buj ponownie.",customize:"Edytuj pojemnik",displayName:"Wy\u015Bwietlana nazwa",localColor:"W\u0142asny kolor pojemnika",inheritedColor:"Odziedziczony kolor karty",integrationColor:"Kolor integracji",localColorStatus:"W\u0142asny kolor",varyingColors:"Kolory integracji r\xF3\u017Cni\u0105 si\u0119 mi\u0119dzy pojemnikami.",neutralColor:"Brak koloru integracji; ilustracje pozostaj\u0105 neutralne.",resetInherited:"U\u017Cyj odziedziczonego koloru karty",resetIntegration:"U\u017Cyj koloru integracji",hide:"Ukryj ten odbi\xF3r",hidden:"Ukryty",local:"Dostosowany",integration:"Integracja",done:"Gotowe",remove:"Przywr\xF3\u0107 ustawienia tego wpisu",matching:"Zaawansowane dopasowanie i ikona",type:"ID kategorii lub dok\u0142adna nazwa kalendarza",binSource:"Encja \u017Ar\xF3d\u0142owa (opcjonalnie)",label:"Dok\u0142adna nazwa pojemnika (opcjonalnie)",icon:"Ikona (mdi:\u2026)",color:"W\u0142asny kolor (#RRGGBB)",advanced:"Ustawienia zaawansowane",advancedOverride:"Dodaj wpis dla kategorii lub brakuj\u0105cego pojemnika",overrideHelp:"U\u017Cyj dok\u0142adnego ID kategorii lub pe\u0142nej nazwy odbioru ze starszych sensor\xF3w i kalendarzy.",addOverride:"Dodaj wpis odbioru",tap:"Akcja po dotkni\u0119ciu",details:"Zobacz harmonogram","more-info":"Szczeg\xF3\u0142y encji",overrideLimit:"Karta obs\u0142uguje do 100 w\u0142asnych wpis\xF3w. Usu\u0144 nieu\u017Cywany wpis przed dodaniem kolejnego.",navigate:"Otw\xF3rz pulpit",none:"Brak akcji",navigationPath:"\u015Acie\u017Cka pulpitu",retry:"Spr\xF3buj ponownie"},$t=o=>o.toLowerCase().startsWith("pl")?Zt:Ft;var xt=q`
  * { box-sizing: border-box; }
  :host { display: block; color: var(--primary-text-color); }
  h3 { font-size: 16px; margin: 24px 0 12px; }
  label { display: block; margin: 12px 0; font-size: 14px; }
  input, select, button { font: inherit; color: var(--primary-text-color); background: var(--card-background-color); border: 1px solid var(--divider-color); border-radius: 8px; min-height: 44px; padding: 8px; max-width: 100%; }
  input:not([type="checkbox"]), select { display: block; width: 100%; margin-top: 5px; }
  fieldset { min-width: 0; border: 1px solid var(--divider-color); border-radius: 12px; margin: 12px 0; padding: 12px; }
  button { cursor: pointer; }
  button:disabled { opacity: .5; cursor: default; }
  p { font-size: 13px; color: var(--secondary-text-color); line-height: 1.5; overflow-wrap: anywhere; }
  summary { cursor: pointer; min-height: 44px; display: flex; align-items: center; }
  button:focus-visible, input:focus-visible, select:focus-visible, summary:focus-visible { outline: 2px solid var(--primary-color); outline-offset: -2px; }
  legend { overflow-wrap: anywhere; max-width: 100%; }
  input[type="color"] { height: 48px; cursor: pointer; }
  .check { display: flex; align-items: center; gap: 10px; min-height: 44px; }
  .check input { min-height: 0; width: 20px; height: 20px; padding: 0; flex-shrink: 0; }
  .warning { padding: 12px; border-inline-start: 3px solid var(--warning-color, #ffa600); }
  .bin-list { display: grid; gap: 6px; }
  .bin-row { display: flex; align-items: center; gap: 12px; padding: 10px 12px; width: 100%; text-align: start; min-height: 60px; }
  .bin-row[aria-pressed="true"] { border-color: var(--primary-color); }
  .bin-copy { min-width: 0; flex: 1; }
  .bin-copy strong, .bin-copy small { display: block; overflow-wrap: anywhere; }
  .bin-copy small { color: var(--secondary-text-color); font-size: 12px; margin-top: 4px; }
  .swatch { width: 14px; height: 30px; border-radius: 4px; flex-shrink: 0; background: var(--waste-type-color, var(--secondary-text-color)); }
  .buttons { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px; }
`;function _t(o){return{...o,entities:f(o),layout:o.layout??"compact",appearance:o.appearance??"native",density:o.density??"comfortable",show_artwork:o.show_artwork??o.layout==="overview",show_source:o.show_source??f(o).length>1}}function Ct(o,t,e){let i=Object.fromEntries(e.filter(n=>Object.prototype.hasOwnProperty.call(t,n)&&JSON.stringify(o[n])!==JSON.stringify(t[n])).map(n=>[n,t[n]]));return Object.prototype.hasOwnProperty.call(i,"entities")&&(i.entity=void 0),i}var L=class extends _{constructor(){super(...arguments);this.controller=new F}set hass(e){let i=this.ha;this.ha=e,(!i||i.connection!==e.connection||i.config.time_zone!==e.config.time_zone)&&(this.controller.reset(),this.calendarSnapshot=void 0),(!i||i.connection!==e.connection||i.config.time_zone!==e.config.time_zone||f(this.config??{type:""}).some(n=>i.states[n]!==e.states[n]))&&this.refreshBins(),this.requestUpdate()}get hass(){return this.ha}setConfig(e){let i=this.config;this.config={...e},(!i||JSON.stringify(f(i))!==JSON.stringify(f(e))||i.days_to_show!==e.days_to_show)&&(this.controller.reset(),this.calendarSnapshot=void 0,this.editing=void 0,this.refreshBins()),this.editing!==void 0&&!this.config.overrides?.[this.editing]&&(this.editing=void 0)}connectedCallback(){super.connectedCallback(),this.timer=setInterval(()=>this.refreshBins(),6e4),this.refreshBins()}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.timer),this.controller.cancel()}refreshBins(){if(!(!this.isConnected||!this.ha||!this.config))try{let e=ae({...this.config,overrides:[]});if(!f(e).some(i=>i.startsWith("calendar.")))return;this.controller.update(this.ha,e,i=>{(i.status!=="loading"||!this.calendarSnapshot)&&(this.calendarSnapshot=i)})}catch{}}changed(e){this.setConfig({...this.config,...e}),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this.config},bubbles:!0,composed:!0}))}override(e,i){let n=[...this.config?.overrides??[]];n[e]={...n[e],...i},this.changed({overrides:n})}form(e,i){let n=this.config.type.includes("badge"),r=(s,l)=>({name:s,selector:{select:{options:l.map(p=>({value:p,label:i[p]})),mode:"dropdown"}}}),a=[{name:"entities",required:!0,selector:{entity:{domain:["sensor","calendar"],multiple:!0,include_entities:he(this.ha,this.config)}}},{name:"title",selector:{text:{}}},r("layout",["compact","hero","schedule","overview"]),r("appearance",["native","modern","minimal"]),r("density",["comfortable","compact"]),{name:"days_to_show",selector:{number:{min:1,max:366,mode:"box"}}},{name:"max_groups",selector:{number:{min:1,max:50,mode:"box"}}},...["show_artwork","show_updated","show_manage_bins","show_source"].map(s=>({name:s,selector:{boolean:{}}})),{name:"locale",selector:{text:{}}}].filter(s=>e.includes(s.name)&&(!n||!["layout","max_groups","show_artwork","show_manage_bins","appearance","density","show_source"].includes(s.name)));if(!a.length)return h;let c=_t(this.config);return u`<ha-form .hass=${this.ha} .data=${c} .schema=${a}
      .computeLabel=${s=>i[s.name]}
      @value-changed=${s=>{let l=Ct(c,s.detail.value,a.map(p=>p.name));Object.keys(l).length&&this.changed(l)}}></ha-form>`}editPanel(e,i){let n=this.editing;if(n===void 0||!this.config.overrides?.[n])return h;let r=this.config.overrides[n],a=ht(r,this.config.overrides),c=i.filter(d=>He(d,r)),s=new Set(c.map(d=>d.color)),l=s.size===1?c[0]?.color:void 0,p=a?.color?`${e.inheritedColor}: ${a.color}`:s.size>1?e.varyingColors:l?`${e.integrationColor}: ${l}`:e.neutralColor;return u`<fieldset><legend>${r.label??r.type}${r.source?u` · ${C(this.ha,r.source,f(this.config))}`:h}</legend>
      <label>${e.displayName}<input .value=${r.name??""} placeholder=${a?.name??r.label??r.type}
        @input=${d=>this.override(n,{name:d.target.value||void 0})} /></label>
      <label>${e.localColor}<input type="color" .value=${r.color??a?.color??l??"#808080"}
        @input=${d=>this.override(n,{color:d.target.value})} /></label>
      <p>${r.color?`${e.localColorStatus}: ${r.color}`:p}</p>
      ${r.color?u`<button @click=${()=>this.override(n,{color:void 0})}>${a?.color?e.resetInherited:e.resetIntegration}</button>`:h}
      <label class="check"><input type="checkbox" .checked=${r.hidden??a?.hidden??!1}
        @change=${d=>this.override(n,{hidden:d.target.checked})} />${e.hide}</label>
      <details><summary>${e.matching}</summary>
        ${["type","source","label","icon","color"].map(d=>u`<label>${d==="source"?e.binSource:e[d]}<input .value=${r[d]??""}
          @change=${m=>this.override(n,{[d]:m.target.value||void 0})} /></label>`)}
      </details>
      <div class="buttons"><button @click=${()=>{this.editing=void 0}}>${e.done}</button>
        <button @click=${()=>{this.editing=void 0,this.changed({overrides:this.config.overrides.filter((d,m)=>m!==n)})}}>${e.remove}</button></div>
    </fieldset>`}render(){if(!this.config||!this.ha)return h;let e=$t(this.config.locale||this.ha.locale?.language||this.ha.language||"en"),i=ut(this.ha,this.config,this.calendarSnapshot?.events),n=this.config.overrides??[],r=f(this.config),a=f(this.config).filter(s=>s.startsWith("sensor.")&&this.ha.states[s]&&!M(this.ha.states[s]).supported),c=n.map((s,l)=>({o:s,index:l})).filter(({o:s})=>!i.some(l=>s.type===(l.typeId??l.label)&&s.source===l.sourceId&&s.label===l.label));return u`<h3>${e.source}</h3>${this.form(["entities","title","layout"],e)}<p>${e.sourceHelp}</p>
      ${a.length?u`<p class="warning" role="status">${a.join(", ")}: ${e.unsupported}</p>`:h}
      ${this.config.type.includes("badge")?h:u`<h3>${e.appearanceSection}</h3>${this.form(["appearance","density","show_artwork","show_source","show_manage_bins"],e)}`}
      <h3>${e.binsSection}</h3><p>${e.binsHelp}</p>
      ${n.length>=100?u`<p role="status">${e.overrideLimit}</p>`:h}
      <div class="bin-list">${i.map(s=>{let l=n.findIndex(d=>d.type===(s.typeId??s.label)&&d.source===s.sourceId&&d.label===s.label),p=pe(s,n);return u`<button class="bin-row" aria-label=${`${e.customize}: ${p?.name??s.label} \xB7 ${C(this.ha,s.sourceId,r)}`} aria-pressed=${l>=0&&this.editing===l} ?disabled=${l<0&&n.length>=100}
          @click=${()=>{l>=0?this.editing=l:(this.changed({overrides:[...n,{type:s.typeId??s.label,source:s.sourceId,label:s.label}]}),this.editing=n.length)}}><span class="swatch" aria-hidden="true" style=${T({"--waste-type-color":p?.color??s.color})}></span>
          <span class="bin-copy"><strong>${p?.name??s.label}</strong><small>${C(this.ha,s.sourceId,r)} · ${p?.hidden?e.hidden:p?.hidden!==void 0||p?.color||p?.name||p?.icon?e.local:e.integration}</small></span><span aria-hidden="true">✎</span></button>
          ${l>=0&&this.editing===l?this.editPanel(e,i):h}`})}${c.map(({o:s,index:l})=>u`<button class="bin-row" aria-pressed=${this.editing===l} @click=${()=>{this.editing=l}}>
        <span class="bin-copy"><strong>${s.name??s.label??s.type}</strong><small>${s.source?C(this.ha,s.source,f(this.config)):e.matching}</small></span><span aria-hidden="true">✎</span></button>
        ${this.editing===l?this.editPanel(e,i):h}`)}</div>
      ${i.length?h:u`<p>${e.noBins}</p>`}
      ${f(this.config).some(s=>s.startsWith("calendar."))?u`<p>${e.rangeHelp}</p>
        ${!this.calendarSnapshot||this.calendarSnapshot.status==="loading"?u`<p role="status">${e.calendarLoading}</p>`:this.calendarSnapshot.messages.some(s=>s.source.startsWith("calendar."))?u`<p class="warning" role="status">${e.calendarFailed} <button @click=${this.refreshBins}>${e.retry}</button></p>`:h}`:h}
      <details><summary>${e.advanced}</summary>${this.form(["days_to_show","max_groups","show_updated","locale"],e)}
        <label>${e.tap}<select .value=${this.config.tap_action?.action??"details"} @change=${s=>this.changed({tap_action:{action:s.target.value}})}>
          ${["details","more-info","navigate","none"].map(s=>u`<option value=${s}>${e[s]}</option>`)}</select></label>
        ${this.config.tap_action?.action==="navigate"?u`<label>${e.navigationPath}<input .value=${this.config.tap_action.navigation_path??""} placeholder="/lovelace/waste"
          @change=${s=>this.changed({tap_action:{action:"navigate",navigation_path:s.target.value}})} /></label>`:h}
        <details><summary>${e.advancedOverride}</summary><p>${e.overrideHelp}</p><button ?disabled=${n.length>=100} @click=${()=>{this.changed({overrides:[...n,{type:"collection_name"}]}),this.editing=n.length}}>${e.addOverride}</button></details>
      </details>`}};L.properties={config:{state:!0},editing:{state:!0},calendarSnapshot:{state:!0}},L.styles=xt;var fe=class extends L{};customElements.define("waste-pickup-planner-card",U);customElements.define("waste-pickup-planner-badge",me);customElements.define("waste-pickup-planner-card-editor",L);customElements.define("waste-pickup-planner-badge-editor",fe);var kt=window;(kt.customCards??=[]).push({type:"waste-pickup-planner-card",name:"Waste Pickup Planner",description:"Date-grouped waste collections with compact, hero and schedule layouts.",preview:!0});(kt.customBadges??=[]).push({type:"waste-pickup-planner-badge",name:"Waste Pickup Planner Badge",description:"The next collection date and types, with schedule details."});
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
