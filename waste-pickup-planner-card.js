var G=globalThis,V=G.ShadowRoot&&(G.ShadyCSS===void 0||G.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ae=Symbol(),He=new WeakMap,N=class{constructor(e,t,o){if(this._$cssResult$=!0,o!==ae)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(V&&e===void 0){let o=t!==void 0&&t.length===1;o&&(e=He.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&He.set(t,e))}return e}toString(){return this.cssText}},Me=i=>new N(typeof i=="string"?i:i+"",void 0,ae),L=(i,...e)=>{let t=i.length===1?i[0]:e.reduce((o,s,r)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+i[r+1],i[0]);return new N(t,i,ae)},Oe=(i,e)=>{if(V)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let o=document.createElement("style"),s=G.litNonce;s!==void 0&&o.setAttribute("nonce",s),o.textContent=t.cssText,i.appendChild(o)}},ce=V?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(let o of e.cssRules)t+=o.cssText;return Me(t)})(i):i;var{is:ut,defineProperty:mt,getOwnPropertyDescriptor:gt,getOwnPropertyNames:ft,getOwnPropertySymbols:yt,getPrototypeOf:vt}=Object,J=globalThis,ze=J.trustedTypes,bt=ze?ze.emptyScript:"",$t=J.reactiveElementPolyfillSupport,R=(i,e)=>i,le={toAttribute(i,e){switch(e){case Boolean:i=i?bt:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},De=(i,e)=>!ut(i,e),Ie={attribute:!0,type:String,converter:le,reflect:!1,useDefault:!1,hasChanged:De};Symbol.metadata??=Symbol("metadata"),J.litPropertyMetadata??=new WeakMap;var x=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ie){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let o=Symbol(),s=this.getPropertyDescriptor(e,o,t);s!==void 0&&mt(this.prototype,e,s)}}static getPropertyDescriptor(e,t,o){let{get:s,set:r}=gt(this.prototype,e)??{get(){return this[t]},set(n){this[t]=n}};return{get:s,set(n){let a=s?.call(this);r?.call(this,n),this.requestUpdate(e,a,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ie}static _$Ei(){if(this.hasOwnProperty(R("elementProperties")))return;let e=vt(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(R("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(R("properties"))){let t=this.properties,o=[...ft(t),...yt(t)];for(let s of o)this.createProperty(s,t[s])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[o,s]of t)this.elementProperties.set(o,s)}this._$Eh=new Map;for(let[t,o]of this.elementProperties){let s=this._$Eu(t,o);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let o=new Set(e.flat(1/0).reverse());for(let s of o)t.unshift(ce(s))}else e!==void 0&&t.push(ce(e));return t}static _$Eu(e,t){let o=t.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Oe(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$ET(e,t){let o=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,o);if(s!==void 0&&o.reflect===!0){let r=(o.converter?.toAttribute!==void 0?o.converter:le).toAttribute(t,o.type);this._$Em=e,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(e,t){let o=this.constructor,s=o._$Eh.get(e);if(s!==void 0&&this._$Em!==s){let r=o.getPropertyOptions(s),n=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:le;this._$Em=s;let a=n.fromAttribute(t,r.type);this[s]=a??this._$Ej?.get(s)??a,this._$Em=null}}requestUpdate(e,t,o,s=!1,r){if(e!==void 0){let n=this.constructor;if(s===!1&&(r=this[e]),o??=n.getPropertyOptions(e),!((o.hasChanged??De)(r,t)||o.useDefault&&o.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(n._$Eu(e,o))))return;this.C(e,t,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:o,reflect:s,wrapped:r},n){o&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,n??t??this[e]),r!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||o||(t=void 0),this._$AL.set(e,t)),s===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[s,r]of this._$Ep)this[s]=r;this._$Ep=void 0}let o=this.constructor.elementProperties;if(o.size>0)for(let[s,r]of o){let{wrapped:n}=r,a=this[s];n!==!0||this._$AL.has(s)||a===void 0||this.C(s,void 0,r,a)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(o=>o.hostUpdate?.()),this.update(t)):this._$EM()}catch(o){throw e=!1,this._$EM(),o}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[R("elementProperties")]=new Map,x[R("finalized")]=new Map,$t?.({ReactiveElement:x}),(J.reactiveElementVersions??=[]).push("2.1.2");var fe=globalThis,Ue=i=>i,K=fe.trustedTypes,Ne=K?K.createPolicy("lit-html",{createHTML:i=>i}):void 0,Ze="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,Fe="?"+E,wt=`<${Fe}>`,P=document,B=()=>P.createComment(""),W=i=>i===null||typeof i!="object"&&typeof i!="function",ye=Array.isArray,_t=i=>ye(i)||typeof i?.[Symbol.iterator]=="function",de=`[ 	
\f\r]`,j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Le=/-->/g,Re=/>/g,k=RegExp(`>|${de}(?:([^\\s"'>=/]+)(${de}*=${de}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),je=/'/g,Be=/"/g,qe=/^(?:script|style|textarea|title)$/i,ve=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),h=ve(1),Dt=ve(2),Ut=ve(3),C=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),We=new WeakMap,T=P.createTreeWalker(P,129);function Ge(i,e){if(!ye(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ne!==void 0?Ne.createHTML(e):e}var xt=(i,e)=>{let t=i.length-1,o=[],s,r=e===2?"<svg>":e===3?"<math>":"",n=j;for(let a=0;a<t;a++){let c=i[a],l,u,d=-1,g=0;for(;g<c.length&&(n.lastIndex=g,u=n.exec(c),u!==null);)g=n.lastIndex,n===j?u[1]==="!--"?n=Le:u[1]!==void 0?n=Re:u[2]!==void 0?(qe.test(u[2])&&(s=RegExp("</"+u[2],"g")),n=k):u[3]!==void 0&&(n=k):n===k?u[0]===">"?(n=s??j,d=-1):u[1]===void 0?d=-2:(d=n.lastIndex-u[2].length,l=u[1],n=u[3]===void 0?k:u[3]==='"'?Be:je):n===Be||n===je?n=k:n===Le||n===Re?n=j:(n=k,s=void 0);let m=n===k&&i[a+1].startsWith("/>")?" ":"";r+=n===j?c+wt:d>=0?(o.push(l),c.slice(0,d)+Ze+c.slice(d)+E+m):c+E+(d===-2?a:m)}return[Ge(i,r+(i[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),o]},Z=class i{constructor({strings:e,_$litType$:t},o){let s;this.parts=[];let r=0,n=0,a=e.length-1,c=this.parts,[l,u]=xt(e,t);if(this.el=i.createElement(l,o),T.currentNode=this.el.content,t===2||t===3){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(s=T.nextNode())!==null&&c.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(let d of s.getAttributeNames())if(d.endsWith(Ze)){let g=u[n++],m=s.getAttribute(d).split(E),v=/([.?@])?(.*)/.exec(g);c.push({type:1,index:r,name:v[2],strings:m,ctor:v[1]==="."?he:v[1]==="?"?ue:v[1]==="@"?me:D}),s.removeAttribute(d)}else d.startsWith(E)&&(c.push({type:6,index:r}),s.removeAttribute(d));if(qe.test(s.tagName)){let d=s.textContent.split(E),g=d.length-1;if(g>0){s.textContent=K?K.emptyScript:"";for(let m=0;m<g;m++)s.append(d[m],B()),T.nextNode(),c.push({type:2,index:++r});s.append(d[g],B())}}}else if(s.nodeType===8)if(s.data===Fe)c.push({type:2,index:r});else{let d=-1;for(;(d=s.data.indexOf(E,d+1))!==-1;)c.push({type:7,index:r}),d+=E.length-1}r++}}static createElement(e,t){let o=P.createElement("template");return o.innerHTML=e,o}};function I(i,e,t=i,o){if(e===C)return e;let s=o!==void 0?t._$Co?.[o]:t._$Cl,r=W(e)?void 0:e._$litDirective$;return s?.constructor!==r&&(s?._$AO?.(!1),r===void 0?s=void 0:(s=new r(i),s._$AT(i,t,o)),o!==void 0?(t._$Co??=[])[o]=s:t._$Cl=s),s!==void 0&&(e=I(i,s._$AS(i,e.values),s,o)),e}var pe=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:o}=this._$AD,s=(e?.creationScope??P).importNode(t,!0);T.currentNode=s;let r=T.nextNode(),n=0,a=0,c=o[0];for(;c!==void 0;){if(n===c.index){let l;c.type===2?l=new F(r,r.nextSibling,this,e):c.type===1?l=new c.ctor(r,c.name,c.strings,this,e):c.type===6&&(l=new ge(r,this,e)),this._$AV.push(l),c=o[++a]}n!==c?.index&&(r=T.nextNode(),n++)}return T.currentNode=P,s}p(e){let t=0;for(let o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}},F=class i{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,s){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=I(this,e,t),W(e)?e===p||e==null||e===""?(this._$AH!==p&&this._$AR(),this._$AH=p):e!==this._$AH&&e!==C&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):_t(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==p&&W(this._$AH)?this._$AA.nextSibling.data=e:this.T(P.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:o}=e,s=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=Z.createElement(Ge(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===s)this._$AH.p(t);else{let r=new pe(s,this),n=r.u(this.options);r.p(t),this.T(n),this._$AH=r}}_$AC(e){let t=We.get(e.strings);return t===void 0&&We.set(e.strings,t=new Z(e)),t}k(e){ye(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,o,s=0;for(let r of e)s===t.length?t.push(o=new i(this.O(B()),this.O(B()),this,this.options)):o=t[s],o._$AI(r),s++;s<t.length&&(this._$AR(o&&o._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let o=Ue(e).nextSibling;Ue(e).remove(),e=o}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},D=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,s,r){this.type=1,this._$AH=p,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=p}_$AI(e,t=this,o,s){let r=this.strings,n=!1;if(r===void 0)e=I(this,e,t,0),n=!W(e)||e!==this._$AH&&e!==C,n&&(this._$AH=e);else{let a=e,c,l;for(e=r[0],c=0;c<r.length-1;c++)l=I(this,a[o+c],t,c),l===C&&(l=this._$AH[c]),n||=!W(l)||l!==this._$AH[c],l===p?e=p:e!==p&&(e+=(l??"")+r[c+1]),this._$AH[c]=l}n&&!s&&this.j(e)}j(e){e===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},he=class extends D{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===p?void 0:e}},ue=class extends D{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==p)}},me=class extends D{constructor(e,t,o,s,r){super(e,t,o,s,r),this.type=5}_$AI(e,t=this){if((e=I(this,e,t,0)??p)===C)return;let o=this._$AH,s=e===p&&o!==p||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,r=e!==p&&(o===p||s);s&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},ge=class{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){I(this,e)}};var Ct=fe.litHtmlPolyfillSupport;Ct?.(Z,F),(fe.litHtmlVersions??=[]).push("3.3.3");var Ve=(i,e,t)=>{let o=t?.renderBefore??e,s=o._$litPart$;if(s===void 0){let r=t?.renderBefore??null;o._$litPart$=s=new F(e.insertBefore(B(),r),r,void 0,t??{})}return s._$AI(i),s};var be=globalThis,_=class extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ve(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return C}};_._$litElement$=!0,_.finalized=!0,be.litElementHydrateSupport?.({LitElement:_});var Et=be.litElementPolyfillSupport;Et?.({LitElement:_});(be.litElementVersions??=[]).push("4.2.2");var $e=i=>typeof i=="string"&&/^#[\da-f]{6}$/i.test(i),we=i=>typeof i=="string"&&/^mdi:[a-z0-9-]+$/.test(i);function $(i){return[...new Set(i.entities??(i.entity?[i.entity]:[]))]}function Je(i){if(!i||typeof i!="object")throw new Error("Choose a waste sensor or calendar.");if(i.entities!==void 0&&(!Array.isArray(i.entities)||i.entities.some(t=>typeof t!="string")))throw new Error("entities must be an array of entity IDs.");if(i.entity&&i.entities)throw new Error("Use entity or entities, not both.");let e=$(i);if(!e.length||e.length>12||e.some(t=>!/^(sensor|calendar)\.[a-z0-9_]+$/.test(t)))throw new Error("Choose 1\u201312 sensor or calendar entities.");if(i.layout!==void 0&&!["compact","hero","schedule"].includes(i.layout))throw new Error("Unknown layout.");for(let[t,o]of[["days_to_show",366],["max_groups",50]]){let s=i[t];if(s!==void 0&&(!Number.isInteger(s)||s<1||s>o))throw new Error(`${t} must be 1\u2013${o}.`)}for(let t of["show_artwork","show_updated","show_manage_bins"])if(i[t]!==void 0&&typeof i[t]!="boolean")throw new Error(`${t} must be true or false.`);if(i.title!==void 0&&typeof i.title!="string")throw new Error("title must be text.");if(i.locale!==void 0){if(typeof i.locale!="string")throw new Error("locale must be a language code.");new Intl.DateTimeFormat(i.locale)}if(i.overrides!==void 0){if(!Array.isArray(i.overrides)||i.overrides.length>100)throw new Error("overrides must contain at most 100 types.");for(let t of i.overrides)if(!t||typeof t.type!="string"||!t.type.trim()||t.source!==void 0&&(typeof t.source!="string"||!/^(sensor|calendar)\.[a-z0-9_]+$/.test(t.source))||t.label!==void 0&&(typeof t.label!="string"||!t.label.trim())||t.name!==void 0&&(typeof t.name!="string"||!t.name.trim())||t.hidden!==void 0&&typeof t.hidden!="boolean"||t.color!==void 0&&!$e(t.color)||t.icon!==void 0&&!we(t.icon))throw new Error("Invalid type override. Use an exact type ID or name, mdi icon, and #RRGGBB color.")}if(i.tap_action){if(!["details","more-info","navigate","none"].includes(i.tap_action.action))throw new Error("Unsupported tap action.");if(i.tap_action.action==="navigate"&&(typeof i.tap_action.navigation_path!="string"||!/^\/(?!\/)/.test(i.tap_action.navigation_path)||/[\\\u0000-\u001f]/.test(i.tap_action.navigation_path)))throw new Error("Navigation requires a local path beginning with /.")}return{...i,entities:i.entities?[...i.entities]:void 0,layout:i.layout??"compact",days_to_show:i.days_to_show??30,max_groups:i.max_groups??5}}function Y(i){if(typeof i!="string"||!/^\d{4}-\d{2}-\d{2}$/.test(i))return!1;let e=new Date(`${i}T12:00:00Z`);return Number.isFinite(e.getTime())&&e.toISOString().slice(0,10)===i}function U(i,e){let t=new Intl.DateTimeFormat("en-CA",{timeZone:e,year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(i),o=s=>t.find(r=>r.type===s).value;return`${o("year")}-${o("month")}-${o("day")}`}function Ke(i,e){let t=new Date(`${i}T12:00:00Z`);return t.setUTCDate(t.getUTCDate()+e),t.toISOString().slice(0,10)}function At(i,e){return Math.round((Date.parse(`${e}T12:00:00Z`)-Date.parse(`${i}T12:00:00Z`))/864e5)}function Q(i,e,t){let o=At(e,i);return o<=1&&o>=0?new Intl.RelativeTimeFormat(t,{numeric:"auto"}).format(o,"day"):new Intl.DateTimeFormat(t,{weekday:"long",day:"numeric",month:"short",timeZone:"UTC"}).format(new Date(`${i}T12:00:00Z`))}function Ye(i,e,t){return new Intl.DateTimeFormat(e,{dateStyle:"medium",timeStyle:"short",timeZone:t}).format(new Date(i))}var X=i=>i!==null&&typeof i=="object"&&!Array.isArray(i)?i:void 0,xe=i=>typeof i=="string"&&i.trim()?i:void 0;function _e(i,e,t){let o=i.date??t,s=xe(i.type);if(!(!Y(o)||!s))return{sourceId:e,entityId:e,date:o,label:s,typeId:xe(i.type_id),icon:we(i.icon)?i.icon:void 0,color:$e(i.color)?i.color:void 0,colorSource:["source","customize","default"].includes(String(i.color_source))?i.color_source:void 0}}function H(i){let e=i.attributes,t="upcoming"in e?e.upcoming:"upcoming_pickups"in e?e.upcoming_pickups:"next_pickup"in e?e.next_pickup===null?[]:[e.next_pickup]:void 0;if(!Array.isArray(t))return{events:[],supported:!1,invalid:t!==void 0};let o=[],s=t.length>2e3;for(let n of t.slice(0,2e3)){if(o.length>=2e3){s=!0;break}let a=X(n);if(!a||!Y(a.date)){s=!0;continue}if(Array.isArray(a.collections)){a.collections.length>100&&(s=!0);for(let c of a.collections.slice(0,100)){let l=X(c),u=l&&_e(l,i.entity_id,a.date);u?o.push(u):s=!0}}else if(Array.isArray(a.types)){a.types.length>100&&(s=!0);for(let c of a.types.slice(0,100)){let l=_e({...a,type:c,color:void 0,color_source:void 0,type_id:void 0},i.entity_id);l?o.push(l):s=!0}}else{let c=_e(a,i.entity_id);c?o.push(c):s=!0}}let r=typeof e.last_update=="string"&&/^\d{4}-\d{2}-\d{2}T/.test(e.last_update)&&/(?:Z|[+-]\d{2}:\d{2})$/.test(e.last_update)&&Number.isFinite(Date.parse(e.last_update))?e.last_update:void 0;return{events:o.slice(0,2e3),supported:!0,invalid:s||o.length>2e3,fetchedAt:r}}function Qe(i,e,t){if(!Array.isArray(i)||i.length>1e4)throw new Error("Invalid calendar response.");return i.flatMap(o=>{let s=X(o),r=X(s?.start),n=xe(s?.summary);if(!r||!n)return[];let a;return Y(r.date)?a=r.date:typeof r.dateTime=="string"&&/(?:Z|[+-]\d{2}:\d{2})$/.test(r.dateTime)&&Number.isFinite(Date.parse(r.dateTime))&&(a=U(new Date(r.dateTime),t)),a?[{sourceId:e,entityId:e,date:a,label:n}]:[]})}var Xe=new WeakMap;function Ce(i,e,t,o){let s=Xe.get(i.connection);s||(s=new Map,Xe.set(i.connection,s));let r=JSON.stringify([e,t,o]),n=i.states[e]?.last_updated,a=s.get(r);if(a?.pending){if(a.stamp===n)return a.promise;let d=()=>Ce(i,e,t,o);return a.promise.then(d,d)}if(a&&a.stamp===n&&a.expires>Date.now())return a.promise;for(let[d,g]of s)!g.pending&&g.expires<=Date.now()&&s.delete(d);if(!s.has(r)&&s.size>=100){let d=[...s].find(([,g])=>!g.pending);if(d)s.delete(d[0]);else return Promise.reject(new Error("Too many calendar requests are pending."))}let c=new URLSearchParams({start:`${t}T00:00:00+14:00`,end:`${o}T00:00:00-12:00`}),l=i.callApi("GET",`calendars/${encodeURIComponent(e)}?${c}`),u={promise:l,expires:1/0,pending:!0,stamp:n};return s.set(r,u),l.then(()=>{u.pending=!1,u.expires=Date.now()+6e4},()=>{s.get(r)===u&&s.delete(r)}),l}var M=i=>JSON.stringify([i.sourceId,i.typeId??i.label,i.label]),Ee=(i,e)=>e.type===(i.typeId??i.label)&&(e.source===void 0||e.source===i.sourceId)&&(e.label===void 0||e.label===i.label),ee=i=>+(i.source!==void 0)+ +(i.label!==void 0)*2;function et(i){let e=new Map;for(let t of i)e.has(ee(t))||e.set(ee(t),t);return i.length?[...e.entries()].sort(([t],[o])=>t-o).reduce((t,[,o])=>({...t,...Object.fromEntries(Object.entries(o).filter(([,s])=>s!==void 0))}),{}):void 0}function tt(i,e=[]){return et(e.filter(t=>Ee(i,t)))}function ot(i,e=[]){return et(e.filter(t=>t.type===i.type&&ee(t)<ee(i)&&(t.source===void 0||t.source===i.source)&&(t.label===void 0||t.label===i.label)))}function te(i,e){return[...new Set([...$(e),...Object.values(i.states).filter(t=>t.entity_id.startsWith("calendar.")||t.entity_id.startsWith("sensor.")&&(()=>{let o=H(t);return o.supported&&!o.invalid})()).map(t=>t.entity_id)])]}function it(i,e){let t=new Map;for(let o of $(e)){let s=i.states[o];if(!(!s||!o.startsWith("sensor.")))for(let r of H(s).events)t.has(M(r))||t.set(M(r),r)}return[...t.values()].sort((o,s)=>o.label.localeCompare(s.label)||o.sourceId.localeCompare(s.sourceId))}function st(i,e,t,o){let s=new Map;for(let r of i){if(r.date<t||r.date>=o)continue;let n=tt(r,e.overrides);if(n?.hidden)continue;let a=JSON.stringify([M(r),r.date,r.color,r.colorSource,r.icon]);s.has(a)||s.set(a,{...r,label:n?.name??r.label,color:n?.color??r.color,colorSource:n?.color?"customize":r.colorSource,icon:n?.icon??r.icon})}return[...s.values()].sort((r,n)=>r.date.localeCompare(n.date)||r.label.localeCompare(n.label))}function Ae(i){let e=new Map;for(let t of i){let o=e.get(t.date)??[];o.push(t),e.set(t.date,o)}return[...e].map(([t,o])=>({date:t,events:o}))}function nt(i){return i.colorSource==="source"||i.colorSource==="customize"?i.color:void 0}var oe=class{constructor(){this.generation=0;this.cache=new Map}reset(){this.generation++,this.cache.clear(),this.connection=void 0,this.timeZone=void 0}cancel(){this.generation++}async update(e,t,o){(this.connection!==e.connection||this.timeZone!==e.config.time_zone)&&(this.cache.clear(),this.connection=e.connection,this.timeZone=e.config.time_zone);let s=++this.generation,r=e.config.time_zone,n=U(new Date,r),a=Ke(n,t.days_to_show),c={rangeStart:n,rangeEnd:a,timeZone:r,messages:[]};o({...c,status:"loading",events:[]});let l=0,u=0,d=0,g=[],m=[];if(await Promise.all($(t).map(async f=>{let y="sourceLoadFailed";try{let w=e.states[f];if(!w||w.state==="unavailable"||f.startsWith("calendar.")&&w.state==="unknown")throw y="sourceUnavailable",new Error(y);let b,A;if(f.startsWith("calendar."))b=Qe(await Ce(e,f,n,a),f,r);else{let S=H(w);if(!S.supported)throw y="sourceUnsupported",new Error(y);if(S.invalid)throw y="sourceInvalid",new Error(y);b=S.events,A=S.fetchedAt}if(s!==this.generation)return;this.cache.set(f,{events:b,fetchedAt:A}),A&&m.push(A),g.push(...b),u++}catch{if(s!==this.generation)return;l++,c.messages.push({source:f,reason:y});let w=this.cache.get(f);w&&(d++,g.push(...w.events),w.fetchedAt&&m.push(w.fetchedAt))}})),s!==this.generation)return;let v=st(g,t,n,a);o({...c,events:v,status:l?d||u?"stale":"unavailable":v.length?"ready":"empty",fetchedAt:m.sort((f,y)=>Date.parse(f)-Date.parse(y))[0]})}};var rt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},at=i=>(...e)=>({_$litDirective$:i,values:e}),ie=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var ct="important",St=" !"+ct,Se=at(class extends ie{constructor(i){if(super(i),i.type!==rt.ATTRIBUTE||i.name!=="style"||i.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(i){return Object.keys(i).reduce((e,t)=>{let o=i[t];return o==null?e:e+`${t=t.includes("-")?t:t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(i,[e]){let{style:t}=i.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(let o of this.ft)e[o]==null&&(this.ft.delete(o),o.includes("-")?t.removeProperty(o):t[o]=null);for(let o in e){let s=e[o];if(s!=null){this.ft.add(o);let r=typeof s=="string"&&s.endsWith(St);o.includes("-")||r?t.setProperty(o,r?s.slice(0,-11):s,r?ct:""):t[o]=s}}return C}});var kt={title:"Waste collection",next:"Next collection",schedule:"Collection schedule",close:"Close",loading:"Loading schedule\u2026",empty:"No collections in this date range",partialEmpty:"No dates from the available sources",unavailable:"Schedule unavailable",stale:"Some sources are unavailable. Dates may be out of date.",staleBadge:"Out of date",collections:"collections",updated:"Provider updated",details:"View schedule",manageBins:"Manage bins",today:"Today",more:"more",previousPage:"Previous page",nextPage:"Next page",sourceUnavailable:"Source unavailable. Check the entity in Home Assistant.",sourceUnsupported:"Select a sensor with Generic details or a calendar.",sourceInvalid:"Invalid collection records. Check the source integration.",sourceLoadFailed:"Could not load this source. Check the entity and connection in Home Assistant."},Tt={title:"Odbi\xF3r odpad\xF3w",next:"Najbli\u017Cszy odbi\xF3r",schedule:"Harmonogram odbioru",close:"Zamknij",loading:"\u0141adowanie harmonogramu\u2026",empty:"Brak odbior\xF3w w tym zakresie dat",partialEmpty:"Brak termin\xF3w z dost\u0119pnych \u017Ar\xF3de\u0142",unavailable:"Harmonogram niedost\u0119pny",stale:"Niekt\xF3re \u017Ar\xF3d\u0142a s\u0105 niedost\u0119pne. Terminy mog\u0105 by\u0107 nieaktualne.",staleBadge:"Nieaktualne",collections:"frakcje",updated:"Aktualizacja \u017Ar\xF3d\u0142a",details:"Zobacz harmonogram",manageBins:"Zarz\u0105dzaj pojemnikami",today:"Dzisiaj",more:"wi\u0119cej",previousPage:"Poprzednia strona",nextPage:"Nast\u0119pna strona",sourceUnavailable:"\u0179r\xF3d\u0142o niedost\u0119pne. Sprawd\u017A encj\u0119 w Home Assistant.",sourceUnsupported:"Wybierz sensor z danymi Generic lub kalendarz.",sourceInvalid:"Nieprawid\u0142owe dane odbior\xF3w. Sprawd\u017A integracj\u0119 \u017Ar\xF3d\u0142ow\u0105.",sourceLoadFailed:"Nie uda\u0142o si\u0119 wczyta\u0107 \u017Ar\xF3d\u0142a. Sprawd\u017A encj\u0119 i po\u0142\u0105czenie w Home Assistant."},q=i=>i.toLowerCase().startsWith("pl")?Tt:kt,ke=(i,e)=>`${i.source}: ${q(e)[i.reason]}`;var Te=(i,e,t=6)=>h`<div class="chips">
    ${i.slice(0,t).map(o=>h`<span class="chip" style=${Se({"--waste-type-color":o.color})}><ha-icon aria-hidden="true" .icon=${o.icon??"mdi:trash-can-outline"}></ha-icon><span>${o.label}</span></span>`)}
    ${i.length>t?h`<span class="chip overflow">+${new Intl.NumberFormat(e).format(i.length-t)} ${q(e).more}</span>`:p}
  </div>`,lt=i=>h`<div class="bins" aria-hidden="true">
    ${i.slice(0,3).map(e=>h`<div
          class="bin"
          style=${Se({"--waste-type-color":nt(e)})}
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
  </div>`,se=(i,e,t,o=6)=>h`${i.map(s=>{let r=new Date(`${s.date}T12:00:00Z`);return h`<div class="group">
      <div class="day" aria-hidden="true">
        ${new Intl.DateTimeFormat(t,{month:"short",timeZone:"UTC"}).format(r)}<strong
          >${r.getUTCDate()}</strong
        >
      </div>
      <div class="group-body">
        <div class="group-date">${Q(s.date,e,t)}</div>
        ${Te(s.events,t,o)}
      </div>
    </div>`})}`;var dt=L`
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
`;async function Pe(i){return customElements.get("ha-form")||await(await(await window.loadCardHelpers()).createCardElement({type:"button"})).constructor.getConfigElement(),document.createElement(i)}var O=class extends _{constructor(){super(...arguments);this.badge=!1;this.detailsOpen=!1;this.detailsPage=0;this.controller=new oe;this.visible=()=>{document.visibilityState==="visible"&&this.refresh()}}set hass(t){let o=this.ha;this.ha=t,(!o||o.connection!==t.connection||o.config.time_zone!==t.config.time_zone)&&(this.snapshot=void 0),(!o||o.connection!==t.connection||o.config.time_zone!==t.config.time_zone||$(this.config??{type:""}).some(s=>o.states[s]!==t.states[s]))&&this.refresh(),(!o||o.locale?.language!==t.locale?.language||o.language!==t.language)&&this.requestUpdate()}get hass(){return this.ha}setConfig(t){let o=Je(t),s=this.config,r=!s||JSON.stringify($(s).sort())!==JSON.stringify($(o).sort());r&&this.controller.reset(),(r||s?.days_to_show!==o.days_to_show||JSON.stringify(s?.overrides)!==JSON.stringify(o.overrides))&&(this.snapshot=void 0),this.config=o,this.refresh(),this.requestUpdate()}static getConfigElement(){return Pe("waste-pickup-planner-card-editor")}static getStubConfig(t){let o=te(t,{type:""});return{type:"custom:waste-pickup-planner-card",entity:o.find(s=>s.startsWith("sensor."))??o[0]??"sensor.waste_schedule",layout:"compact"}}getCardSize(){return this.config?.layout==="schedule"?Math.min(this.config.max_groups+1,8):this.config?.layout==="hero"?5:3}getGridOptions(){return{columns:12,min_columns:6,rows:"auto"}}connectedCallback(){super.connectedCallback(),document.addEventListener("visibilitychange",this.visible),this.timer=setInterval(()=>this.refresh(),6e4),this.refresh()}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.timer),document.removeEventListener("visibilitychange",this.visible),this.controller.cancel(),this.detailsOpen=!1}refresh(){!this.isConnected||!this.ha||!this.config||(this.day=U(new Date,this.ha.config.time_zone),this.snapshot?.rangeStart!==this.day&&(this.snapshot=void 0),this.controller.update(this.ha,this.config,t=>{(t.status!=="loading"||!this.snapshot)&&(this.snapshot=t)}))}locale(){return this.config?.locale||this.ha?.locale?.language||this.ha?.language||"en"}async activate(){let t=this.config;if(!t)return;let o=t.tap_action?.action??"details";o!=="none"&&(o==="more-info"?this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:$(t)[0]},bubbles:!0,composed:!0})):o==="navigate"?(history.pushState(null,"",t.tap_action.navigation_path),window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1}}))):(this.detailsPage=0,this.detailsOpen=!0,await this.updateComplete,this.isConnected&&this.detailsOpen&&this.renderRoot.querySelector("dialog")?.showModal()))}manageBins(){history.pushState(null,"","/config/integrations/integration/waste_collection_schedule"),window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1}}))}async changeDetailsPage(t){this.detailsPage=t,await this.updateComplete,this.renderRoot.querySelector("dialog")?.scrollTo(0,0)}render(){if(!this.config)return p;let t=this.locale(),o=q(t),s=this.snapshot,r=Ae(s?.events??[]),n=r[0],a=s?.rangeStart??this.day??"2000-01-01",c=this.config.title??o.title,l=s?.status??"loading",u=l==="empty"?o.empty:l==="stale"?o.partialEmpty:l==="unavailable"?o.unavailable:o.loading,d=n?n.events.length>2?`${new Intl.NumberFormat(t).format(n.events.length)} ${o.collections}`:n.events.map(b=>b.label).join(" \xB7 "):u,g=n?Q(n.date,a,t):u,m=l==="stale"?h`<p class="notice" role="status">${o.stale}</p>`:p,v=100,f=Math.max(1,Math.ceil((s?.events.length??0)/v)),y=Math.min(this.detailsPage,f-1),w=this.detailsOpen?h`<dialog aria-label=${o.schedule} @close=${()=>{this.detailsOpen=!1}}>
      <div class="heading">
        <h2>${c}</h2>
        <button
          class="close"
          aria-label=${o.close}
          @click=${()=>this.renderRoot.querySelector("dialog")?.close()}
        >
          ✕
        </button>
      </div>
      ${r.length?se(Ae(s.events.slice(y*v,(y+1)*v)),a,t,v):h`<p class="state">${u}</p>`}${m}${s?.messages.map(b=>h`<p class="state">${ke(b,t)}</p>`)}
      ${f>1?h`<nav class="pages" aria-label=${o.schedule}>
        <button ?disabled=${y===0} @click=${()=>this.changeDetailsPage(y-1)}>${o.previousPage}</button>
        <span aria-live="polite">${new Intl.NumberFormat(t).format(y+1)} / ${new Intl.NumberFormat(t).format(f)}</span>
        <button ?disabled=${y+1===f} @click=${()=>this.changeDetailsPage(y+1)}>${o.nextPage}</button>
      </nav>`:p}
    </dialog>`:p;if(this.badge){let b=n?n.events.slice(0,6).map(ht=>ht.label).join(" \xB7 ")+(n.events.length>6?` \xB7 +${new Intl.NumberFormat(t).format(n.events.length-6)} ${o.more}`:""):u,A=`${c}: ${g}. ${b}${l==="stale"?`. ${o.stale}`:""}`,S=h`<ha-icon aria-hidden="true"
        .icon=${l==="stale"||l==="unavailable"?"mdi:alert-circle-outline":"mdi:trash-can-outline"}></ha-icon>
        <span class="badge-copy"><strong>${n?g:c}</strong>
        <small>${l==="stale"?`${o.staleBadge} \xB7 `:""}${d}</small></span>`;return this.config.tap_action?.action==="none"?h`<div class="badge" role="img" aria-label=${A} title=${b}>${S}</div>`:h`<button class="badge" aria-label=${A} title=${b} @click=${this.activate}>${S}</button>${w}`}return h`<ha-card
        ><section class=${`surface ${this.config.layout}`}>
          <div class="heading">
            <h2>${c}</h2>
            <ha-icon aria-hidden="true" icon="mdi:calendar-outline"></ha-icon>
          </div>
          ${n?this.config.layout==="schedule"?se(r.slice(0,this.config.max_groups),a,t):h`<div class="primary">
                      <div class="copy">
                        <div class="eyebrow">${o.next}</div>
                        <span class="date">${g}</span>${Te(n.events,t)}
                        <p class="full-date">
                          ${new Intl.DateTimeFormat(t,{dateStyle:"long",timeZone:"UTC"}).format(new Date(`${n.date}T12:00:00Z`))}
                        </p>
                      </div>
                      ${this.config.layout==="hero"&&this.config.show_artwork?lt(n.events):p}
                    </div>
                    ${this.config.layout==="hero"&&r.length>1?h`<div class="upcoming">${se(r.slice(1,this.config.max_groups),a,t)}</div>`:p}`:h`<p class="state" role="status">${u}</p>`}
          ${m}${l==="unavailable"?s?.messages.map(b=>h`<p class="state">${ke(b,t)}</p>`):p}
          ${this.config.show_updated&&s?.fetchedAt?h`<p class="updated">${o.updated}: ${Ye(s.fetchedAt,t,s.timeZone)}</p>`:p}
        </section>
        ${this.config.tap_action?.action==="none"?p:h`<button class="action" @click=${this.activate}>${this.config.tap_action?.action==="more-info"?c:o.details} <span aria-hidden="true">↗</span></button>`}
        ${this.config.show_manage_bins?h`<button class="action" @click=${this.manageBins}>${o.manageBins} <span aria-hidden="true">⚙</span></button>`:p}</ha-card
      >${w}`}};O.styles=dt,O.properties={snapshot:{state:!0},detailsOpen:{state:!0},detailsPage:{state:!0}};var ne=class extends O{constructor(){super(...arguments);this.badge=!0}static getConfigElement(){return Pe("waste-pickup-planner-badge-editor")}static getStubConfig(t){return{...super.getStubConfig(t),type:"custom:waste-pickup-planner-badge"}}};var Pt=[{name:"entities",required:!0,selector:{entity:{domain:["sensor","calendar"],multiple:!0}}},{name:"title",selector:{text:{}}},{name:"layout",selector:{select:{options:["compact","hero","schedule"],mode:"dropdown"}}},{name:"days_to_show",selector:{number:{min:1,max:366,mode:"box"}}},{name:"max_groups",selector:{number:{min:1,max:50,mode:"box"}}},{name:"show_artwork",selector:{boolean:{}}},{name:"show_updated",selector:{boolean:{}}},{name:"show_manage_bins",selector:{boolean:{}}},{name:"locale",selector:{text:{}}}],Ht={entities:"Waste sensors or calendars",title:"Title",layout:"Layout",days_to_show:"Days to show",max_groups:"Visible date groups",show_artwork:"Show bin artwork in hero layout",show_updated:"Show provider update time",show_manage_bins:"Show Manage bins shortcut to Waste Collection Schedule",locale:"Language override (optional)"},z=class extends _{setConfig(e){this.config={...e}}changed(e){this.config={...this.config,...e},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this.config},bubbles:!0,composed:!0}))}override(e,t){let o=[...this.config?.overrides??[]];o[e]={...o[e],...t},this.changed({overrides:o})}render(){if(!this.config||!this.hass)return p;let e={...this.config,entities:this.config.entities??(this.config.entity?[this.config.entity]:[])},t=it(this.hass,this.config),o=t.filter(n=>!this.config.overrides?.some(a=>a.type===(n.typeId??n.label)&&a.source===n.sourceId&&a.label===n.label)),s=$(this.config).filter(n=>n.startsWith("sensor.")&&this.hass.states[n]&&!H(this.hass.states[n]).supported),r=n=>h`<ha-form
        .hass=${this.hass}
        .data=${e}
        .schema=${Pt.filter(a=>n.includes(a.name)&&(!this.config.type.includes("badge")||!["layout","max_groups","show_artwork","show_manage_bins"].includes(a.name))).map(a=>a.name==="entities"?{...a,selector:{entity:{domain:["sensor","calendar"],multiple:!0,include_entities:te(this.hass,this.config)}}}:a)}
        .computeLabel=${a=>Ht[a.name]}
        @value-changed=${a=>this.changed({...a.detail.value,entity:void 0})}
      ></ha-form>`;return h`${r(["entities"])}
      <p>
        Select one authoritative source per address. To use a Waste Collection
        Schedule sensor, set its details format to Generic (All attributes in
        the visual bin controls). Choose the combined sensor to show all bins.
        Calendars also work; unrelated sensors are excluded from suggestions.
      </p>
      ${s.length?h`<p class="warning" role="status">${s.join(", ")}: no structured schedule is exposed. Open the sensor settings and choose Generic / All attributes, then select it here again.</p>`:p}
      <h3>Bin appearance</h3>
      <p>Colors follow the integration until you choose a local override. Bin definitions stay in Waste Collection Schedule.</p>
      ${o.length?h`<label>Customize a bin<select .value=${""} @change=${n=>{let a=n.target,c=o.find(l=>M(l)===a.value);a.value="",c&&this.changed({overrides:[...this.config.overrides??[],{type:c.typeId??c.label,source:c.sourceId,label:c.label}]})}}><option value="">Choose a bin…</option>${o.map(n=>h`<option value=${M(n)}>${n.label} · ${this.hass.states[n.sourceId]?.attributes.friendly_name??n.sourceId}</option>`)}</select></label>`:p}
      ${t.length?p:h`<p>Bin choices appear when a selected sensor exposes collections. Calendar names or bins outside the sensor's current schedule can be configured in Advanced.</p>`}
      ${(this.config.overrides??[]).map((n,a)=>{let c=t.filter(m=>Ee(m,n)),l=ot(n,this.config.overrides),u=new Set(c.map(m=>m.color)),d=u.size===1?c[0]?.color:void 0,g=l?.color?`Inherited card color: ${l.color}`:u.size>1?"Integration colors vary by bin.":d?`Integration color: ${d}`:"No integration color is available; artwork stays neutral.";return h`<fieldset><legend>${n.label??n.type}${n.source?h` · ${this.hass.states[n.source]?.attributes.friendly_name??n.source}`:p}</legend>
          <label>Display name<input .value=${n.name??""} placeholder=${l?.name??n.label??n.type} @input=${m=>this.override(a,{name:m.target.value||void 0})} /></label>
          <label>Local bin color<input type="color" .value=${n.color??l?.color??d??"#808080"} @input=${m=>this.override(a,{color:m.target.value})} /></label>
          <p>${n.color?`Local color: ${n.color}`:g}</p>
          ${n.color?h`<button @click=${()=>this.override(a,{color:void 0})}>${l?.color?"Use inherited card color":"Use integration color"}</button>`:p}
          <label class="check"><input type="checkbox" .checked=${n.hidden??l?.hidden??!1} @change=${m=>this.override(a,{hidden:m.target.checked})} /> Hide this collection</label>
          <details><summary>Advanced matching and icon</summary>
            ${[["type","Category ID or exact calendar name"],["source","Source entity (optional)"],["label","Exact bin name (optional)"],["icon","Icon (mdi:\u2026)"],["color","Local color (#RRGGBB)"]].map(([m,v])=>h`<label>${v}<input .value=${n[m]??""} @change=${f=>this.override(a,{[m]:f.target.value||void 0})} /></label>`)}
          </details>
          <button class="remove" @click=${()=>this.changed({overrides:this.config.overrides.filter((m,v)=>v!==a)})}>Remove override</button>
        </fieldset>`})}
      ${r(["title","layout","show_artwork","show_manage_bins"])}
      <details><summary>Advanced card settings</summary>
      ${r(["days_to_show","max_groups","show_updated","locale"])}
      <label
        >Tap action<select
          .value=${this.config.tap_action?.action??"details"}
          @change=${n=>this.changed({tap_action:{action:n.target.value}})}
        >
          ${["details","more-info","navigate","none"].map(n=>h`<option value=${n}>${n}</option>`)}
        </select></label
      >
      ${this.config.tap_action?.action==="navigate"?h`<label>Dashboard path<input .value=${this.config.tap_action.navigation_path??""} placeholder="/lovelace/waste" @change=${n=>this.changed({tap_action:{action:"navigate",navigation_path:n.target.value}})} /></label>`:p}
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
  `;var re=class extends z{};customElements.define("waste-pickup-planner-card",O);customElements.define("waste-pickup-planner-badge",ne);customElements.define("waste-pickup-planner-card-editor",z);customElements.define("waste-pickup-planner-badge-editor",re);var pt=window;(pt.customCards??=[]).push({type:"waste-pickup-planner-card",name:"Waste Pickup Planner",description:"Date-grouped waste collections with compact, hero and schedule layouts.",preview:!0});(pt.customBadges??=[]).push({type:"waste-pickup-planner-badge",name:"Waste Pickup Planner Badge",description:"The next collection date and types, with schedule details."});
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
