var W=globalThis,q=W.ShadowRoot&&(W.ShadyCSS===void 0||W.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,oe=Symbol(),Ce=new WeakMap,O=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==oe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(q&&e===void 0){let i=t!==void 0&&t.length===1;i&&(e=Ce.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Ce.set(t,e))}return e}toString(){return this.cssText}},Se=o=>new O(typeof o=="string"?o:o+"",void 0,oe),N=(o,...e)=>{let t=o.length===1?o[0]:e.reduce((i,s,n)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+o[n+1],o[0]);return new O(t,o,oe)},ke=(o,e)=>{if(q)o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let i=document.createElement("style"),s=W.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,o.appendChild(i)}},se=q?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(let i of e.cssRules)t+=i.cssText;return Se(t)})(o):o;var{is:nt,defineProperty:rt,getOwnPropertyDescriptor:at,getOwnPropertyNames:ct,getOwnPropertySymbols:lt,getPrototypeOf:dt}=Object,G=globalThis,Te=G.trustedTypes,pt=Te?Te.emptyScript:"",ht=G.reactiveElementPolyfillSupport,I=(o,e)=>o,ne={toAttribute(o,e){switch(e){case Boolean:o=o?pt:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},De=(o,e)=>!nt(o,e),Pe={attribute:!0,type:String,converter:ne,reflect:!1,useDefault:!1,hasChanged:De};Symbol.metadata??=Symbol("metadata"),G.litPropertyMetadata??=new WeakMap;var x=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Pe){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let i=Symbol(),s=this.getPropertyDescriptor(e,i,t);s!==void 0&&rt(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){let{get:s,set:n}=at(this.prototype,e)??{get(){return this[t]},set(r){this[t]=r}};return{get:s,set(r){let a=s?.call(this);n?.call(this,r),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Pe}static _$Ei(){if(this.hasOwnProperty(I("elementProperties")))return;let e=dt(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(I("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(I("properties"))){let t=this.properties,i=[...ct(t),...lt(t)];for(let s of i)this.createProperty(s,t[s])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[i,s]of t)this.elementProperties.set(i,s)}this._$Eh=new Map;for(let[t,i]of this.elementProperties){let s=this._$Eu(t,i);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let i=new Set(e.flat(1/0).reverse());for(let s of i)t.unshift(se(s))}else e!==void 0&&t.push(se(e));return t}static _$Eu(e,t){let i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ke(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){let i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){let n=(i.converter?.toAttribute!==void 0?i.converter:ne).toAttribute(t,i.type);this._$Em=e,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(e,t){let i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){let n=i.getPropertyOptions(s),r=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:ne;this._$Em=s;let a=r.fromAttribute(t,n.type);this[s]=a??this._$Ej?.get(s)??a,this._$Em=null}}requestUpdate(e,t,i,s=!1,n){if(e!==void 0){let r=this.constructor;if(s===!1&&(n=this[e]),i??=r.getPropertyOptions(e),!((i.hasChanged??De)(n,t)||i.useDefault&&i.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:s,wrapped:n},r){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??t??this[e]),n!==!0||r!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),s===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[s,n]of this._$Ep)this[s]=n;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[s,n]of i){let{wrapped:r}=n,a=this[s];r!==!0||this._$AL.has(s)||a===void 0||this.C(s,void 0,n,a)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[I("elementProperties")]=new Map,x[I("finalized")]=new Map,ht?.({ReactiveElement:x}),(G.reactiveElementVersions??=[]).push("2.1.2");var he=globalThis,He=o=>o,V=he.trustedTypes,Me=V?V.createPolicy("lit-html",{createHTML:o=>o}):void 0,Re="$lit$",A=`lit$${Math.random().toFixed(9).slice(2)}$`,Le="?"+A,ut=`<${Le}>`,P=document,L=()=>P.createComment(""),j=o=>o===null||typeof o!="object"&&typeof o!="function",ue=Array.isArray,ft=o=>ue(o)||typeof o?.[Symbol.iterator]=="function",re=`[ 	
\f\r]`,R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ze=/-->/g,Ue=/>/g,k=RegExp(`>|${re}(?:([^\\s"'>=/]+)(${re}*=${re}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Oe=/'/g,Ne=/"/g,je=/^(?:script|style|textarea|title)$/i,fe=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),u=fe(1),kt=fe(2),Tt=fe(3),_=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),Ie=new WeakMap,T=P.createTreeWalker(P,129);function Be(o,e){if(!ue(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Me!==void 0?Me.createHTML(e):e}var mt=(o,e)=>{let t=o.length-1,i=[],s,n=e===2?"<svg>":e===3?"<math>":"",r=R;for(let a=0;a<t;a++){let c=o[a],l,p,d=-1,f=0;for(;f<c.length&&(r.lastIndex=f,p=r.exec(c),p!==null);)f=r.lastIndex,r===R?p[1]==="!--"?r=ze:p[1]!==void 0?r=Ue:p[2]!==void 0?(je.test(p[2])&&(s=RegExp("</"+p[2],"g")),r=k):p[3]!==void 0&&(r=k):r===k?p[0]===">"?(r=s??R,d=-1):p[1]===void 0?d=-2:(d=r.lastIndex-p[2].length,l=p[1],r=p[3]===void 0?k:p[3]==='"'?Ne:Oe):r===Ne||r===Oe?r=k:r===ze||r===Ue?r=R:(r=k,s=void 0);let g=r===k&&o[a+1].startsWith("/>")?" ":"";n+=r===R?c+ut:d>=0?(i.push(l),c.slice(0,d)+Re+c.slice(d)+A+g):c+A+(d===-2?a:g)}return[Be(o,n+(o[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]},B=class o{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let n=0,r=0,a=e.length-1,c=this.parts,[l,p]=mt(e,t);if(this.el=o.createElement(l,i),T.currentNode=this.el.content,t===2||t===3){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(s=T.nextNode())!==null&&c.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(let d of s.getAttributeNames())if(d.endsWith(Re)){let f=p[r++],g=s.getAttribute(d).split(A),$=/([.?@])?(.*)/.exec(f);c.push({type:1,index:n,name:$[2],strings:g,ctor:$[1]==="."?ce:$[1]==="?"?le:$[1]==="@"?de:z}),s.removeAttribute(d)}else d.startsWith(A)&&(c.push({type:6,index:n}),s.removeAttribute(d));if(je.test(s.tagName)){let d=s.textContent.split(A),f=d.length-1;if(f>0){s.textContent=V?V.emptyScript:"";for(let g=0;g<f;g++)s.append(d[g],L()),T.nextNode(),c.push({type:2,index:++n});s.append(d[f],L())}}}else if(s.nodeType===8)if(s.data===Le)c.push({type:2,index:n});else{let d=-1;for(;(d=s.data.indexOf(A,d+1))!==-1;)c.push({type:7,index:n}),d+=A.length-1}n++}}static createElement(e,t){let i=P.createElement("template");return i.innerHTML=e,i}};function M(o,e,t=o,i){if(e===_)return e;let s=i!==void 0?t._$Co?.[i]:t._$Cl,n=j(e)?void 0:e._$litDirective$;return s?.constructor!==n&&(s?._$AO?.(!1),n===void 0?s=void 0:(s=new n(o),s._$AT(o,t,i)),i!==void 0?(t._$Co??=[])[i]=s:t._$Cl=s),s!==void 0&&(e=M(o,s._$AS(o,e.values),s,i)),e}var ae=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:i}=this._$AD,s=(e?.creationScope??P).importNode(t,!0);T.currentNode=s;let n=T.nextNode(),r=0,a=0,c=i[0];for(;c!==void 0;){if(r===c.index){let l;c.type===2?l=new Z(n,n.nextSibling,this,e):c.type===1?l=new c.ctor(n,c.name,c.strings,this,e):c.type===6&&(l=new pe(n,this,e)),this._$AV.push(l),c=i[++a]}r!==c?.index&&(n=T.nextNode(),r++)}return T.currentNode=P,s}p(e){let t=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},Z=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=M(this,e,t),j(e)?e===h||e==null||e===""?(this._$AH!==h&&this._$AR(),this._$AH=h):e!==this._$AH&&e!==_&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):ft(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==h&&j(this._$AH)?this._$AA.nextSibling.data=e:this.T(P.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=B.createElement(Be(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(t);else{let n=new ae(s,this),r=n.u(this.options);n.p(t),this.T(r),this._$AH=n}}_$AC(e){let t=Ie.get(e.strings);return t===void 0&&Ie.set(e.strings,t=new B(e)),t}k(e){ue(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,i,s=0;for(let n of e)s===t.length?t.push(i=new o(this.O(L()),this.O(L()),this,this.options)):i=t[s],i._$AI(n),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let i=He(e).nextSibling;He(e).remove(),e=i}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},z=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,n){this.type=1,this._$AH=h,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=h}_$AI(e,t=this,i,s){let n=this.strings,r=!1;if(n===void 0)e=M(this,e,t,0),r=!j(e)||e!==this._$AH&&e!==_,r&&(this._$AH=e);else{let a=e,c,l;for(e=n[0],c=0;c<n.length-1;c++)l=M(this,a[i+c],t,c),l===_&&(l=this._$AH[c]),r||=!j(l)||l!==this._$AH[c],l===h?e=h:e!==h&&(e+=(l??"")+n[c+1]),this._$AH[c]=l}r&&!s&&this.j(e)}j(e){e===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},ce=class extends z{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===h?void 0:e}},le=class extends z{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==h)}},de=class extends z{constructor(e,t,i,s,n){super(e,t,i,s,n),this.type=5}_$AI(e,t=this){if((e=M(this,e,t,0)??h)===_)return;let i=this._$AH,s=e===h&&i!==h||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==h&&(i===h||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},pe=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){M(this,e)}};var gt=he.litHtmlPolyfillSupport;gt?.(B,Z),(he.litHtmlVersions??=[]).push("3.3.3");var Ze=(o,e,t)=>{let i=t?.renderBefore??e,s=i._$litPart$;if(s===void 0){let n=t?.renderBefore??null;i._$litPart$=s=new Z(e.insertBefore(L(),n),n,void 0,t??{})}return s._$AI(o),s};var me=globalThis,w=class extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ze(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return _}};w._$litElement$=!0,w.finalized=!0,me.litElementHydrateSupport?.({LitElement:w});var yt=me.litElementPolyfillSupport;yt?.({LitElement:w});(me.litElementVersions??=[]).push("4.2.2");var ge=o=>typeof o=="string"&&/^#[\da-f]{6}$/i.test(o),ye=o=>typeof o=="string"&&/^mdi:[a-z0-9-]+$/.test(o);function E(o){return[...new Set(o.entities??(o.entity?[o.entity]:[]))]}function Fe(o){if(!o||typeof o!="object")throw new Error("Choose a waste sensor or calendar.");if(o.entities!==void 0&&(!Array.isArray(o.entities)||o.entities.some(t=>typeof t!="string")))throw new Error("entities must be an array of entity IDs.");if(o.entity&&o.entities)throw new Error("Use entity or entities, not both.");let e=E(o);if(!e.length||e.length>12||e.some(t=>!/^(sensor|calendar)\.[a-z0-9_]+$/.test(t)))throw new Error("Choose 1\u201312 sensor or calendar entities.");if(o.layout!==void 0&&!["compact","hero","schedule"].includes(o.layout))throw new Error("Unknown layout.");for(let[t,i]of[["days_to_show",366],["max_groups",50]]){let s=o[t];if(s!==void 0&&(!Number.isInteger(s)||s<1||s>i))throw new Error(`${t} must be 1\u2013${i}.`)}for(let t of["show_artwork","show_updated"])if(o[t]!==void 0&&typeof o[t]!="boolean")throw new Error(`${t} must be true or false.`);if(o.title!==void 0&&typeof o.title!="string")throw new Error("title must be text.");if(o.locale!==void 0){if(typeof o.locale!="string")throw new Error("locale must be a language code.");new Intl.DateTimeFormat(o.locale)}if(o.overrides!==void 0){if(!Array.isArray(o.overrides)||o.overrides.length>100)throw new Error("overrides must contain at most 100 types.");for(let t of o.overrides)if(!t||typeof t.type!="string"||!t.type.trim()||t.name!==void 0&&(typeof t.name!="string"||!t.name.trim())||t.hidden!==void 0&&typeof t.hidden!="boolean"||t.color!==void 0&&!ge(t.color)||t.icon!==void 0&&!ye(t.icon))throw new Error("Invalid type override. Use an exact type ID or name, mdi icon, and #RRGGBB color.")}if(o.tap_action){if(!["details","more-info","navigate","none"].includes(o.tap_action.action))throw new Error("Unsupported tap action.");if(o.tap_action.action==="navigate"&&(typeof o.tap_action.navigation_path!="string"||!/^\/(?!\/)/.test(o.tap_action.navigation_path)||/[\\\u0000-\u001f]/.test(o.tap_action.navigation_path)))throw new Error("Navigation requires a local path beginning with /.")}return{...o,entities:o.entities?[...o.entities]:void 0,layout:o.layout??"compact",days_to_show:o.days_to_show??30,max_groups:o.max_groups??5}}function J(o){if(typeof o!="string"||!/^\d{4}-\d{2}-\d{2}$/.test(o))return!1;let e=new Date(`${o}T12:00:00Z`);return Number.isFinite(e.getTime())&&e.toISOString().slice(0,10)===o}function U(o,e){let t=new Intl.DateTimeFormat("en-CA",{timeZone:e,year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(o),i=s=>t.find(n=>n.type===s).value;return`${i("year")}-${i("month")}-${i("day")}`}function We(o,e){let t=new Date(`${o}T12:00:00Z`);return t.setUTCDate(t.getUTCDate()+e),t.toISOString().slice(0,10)}function vt(o,e){return Math.round((Date.parse(`${e}T12:00:00Z`)-Date.parse(`${o}T12:00:00Z`))/864e5)}function K(o,e,t){let i=vt(e,o);return i<=1&&i>=0?new Intl.RelativeTimeFormat(t,{numeric:"auto"}).format(i,"day"):new Intl.DateTimeFormat(t,{weekday:"long",day:"numeric",month:"short",timeZone:"UTC"}).format(new Date(`${o}T12:00:00Z`))}function qe(o,e,t){return new Intl.DateTimeFormat(e,{dateStyle:"medium",timeStyle:"short",timeZone:t}).format(new Date(o))}var Y=o=>o!==null&&typeof o=="object"&&!Array.isArray(o)?o:void 0,$e=o=>typeof o=="string"&&o.trim()?o:void 0;function ve(o,e,t){let i=o.date??t,s=$e(o.type);if(!(!J(i)||!s))return{sourceId:e,entityId:e,date:i,label:s,typeId:$e(o.type_id),icon:ye(o.icon)?o.icon:void 0,color:ge(o.color)?o.color:void 0,colorSource:["source","customize","default"].includes(String(o.color_source))?o.color_source:void 0}}function Ge(o){let e=o.attributes,t="upcoming"in e?e.upcoming:"upcoming_pickups"in e?e.upcoming_pickups:"next_pickup"in e?e.next_pickup===null?[]:[e.next_pickup]:void 0;if(!Array.isArray(t))return{events:[],supported:!1,invalid:t!==void 0};let i=[],s=t.length>2e3;for(let r of t.slice(0,2e3)){if(i.length>=2e3){s=!0;break}let a=Y(r);if(!a||!J(a.date)){s=!0;continue}if(Array.isArray(a.collections)){a.collections.length>100&&(s=!0);for(let c of a.collections.slice(0,100)){let l=Y(c),p=l&&ve(l,o.entity_id,a.date);p?i.push(p):s=!0}}else if(Array.isArray(a.types)){a.types.length>100&&(s=!0);for(let c of a.types.slice(0,100)){let l=ve({...a,type:c,color:void 0,color_source:void 0,type_id:void 0},o.entity_id);l?i.push(l):s=!0}}else{let c=ve(a,o.entity_id);c?i.push(c):s=!0}}let n=typeof e.last_update=="string"&&/^\d{4}-\d{2}-\d{2}T/.test(e.last_update)&&/(?:Z|[+-]\d{2}:\d{2})$/.test(e.last_update)&&Number.isFinite(Date.parse(e.last_update))?e.last_update:void 0;return{events:i.slice(0,2e3),supported:!0,invalid:s||i.length>2e3,fetchedAt:n}}function Ve(o,e,t){if(!Array.isArray(o)||o.length>1e4)throw new Error("Invalid calendar response.");return o.flatMap(i=>{let s=Y(i),n=Y(s?.start),r=$e(s?.summary);if(!n||!r)return[];let a;return J(n.date)?a=n.date:typeof n.dateTime=="string"&&/(?:Z|[+-]\d{2}:\d{2})$/.test(n.dateTime)&&Number.isFinite(Date.parse(n.dateTime))&&(a=U(new Date(n.dateTime),t)),a?[{sourceId:e,entityId:e,date:a,label:r}]:[]})}var Je=new WeakMap;function be(o,e,t,i){let s=Je.get(o.connection);s||(s=new Map,Je.set(o.connection,s));let n=JSON.stringify([e,t,i]),r=o.states[e]?.last_updated,a=s.get(n);if(a?.pending){if(a.stamp===r)return a.promise;let d=()=>be(o,e,t,i);return a.promise.then(d,d)}if(a&&a.stamp===r&&a.expires>Date.now())return a.promise;for(let[d,f]of s)!f.pending&&f.expires<=Date.now()&&s.delete(d);if(!s.has(n)&&s.size>=100){let d=[...s].find(([,f])=>!f.pending);if(d)s.delete(d[0]);else return Promise.reject(new Error("Too many calendar requests are pending."))}let c=new URLSearchParams({start:`${t}T00:00:00+14:00`,end:`${i}T00:00:00-12:00`}),l=o.callApi("GET",`calendars/${encodeURIComponent(e)}?${c}`),p={promise:l,expires:1/0,pending:!0,stamp:r};return s.set(n,p),l.then(()=>{p.pending=!1,p.expires=Date.now()+6e4},()=>{s.get(n)===p&&s.delete(n)}),l}function Ke(o,e,t,i){let s=new Map;for(let n of o){if(n.date<t||n.date>=i)continue;let r=e.overrides?.find(c=>c.type===(n.typeId??n.label));if(r?.hidden)continue;let a=JSON.stringify([n.sourceId,n.date,n.typeId??n.label]);s.has(a)||s.set(a,{...n,label:r?.name??n.label,color:r?.color??n.color,colorSource:r?.color?"customize":n.colorSource,icon:r?.icon??n.icon})}return[...s.values()].sort((n,r)=>n.date.localeCompare(r.date)||n.label.localeCompare(r.label))}function we(o){let e=new Map;for(let t of o){let i=e.get(t.date)??[];i.push(t),e.set(t.date,i)}return[...e].map(([t,i])=>({date:t,events:i}))}function Ye(o){return o.colorSource==="source"||o.colorSource==="customize"?o.color:void 0}var Q=class{constructor(){this.generation=0;this.cache=new Map}reset(){this.generation++,this.cache.clear(),this.connection=void 0,this.timeZone=void 0}cancel(){this.generation++}async update(e,t,i){(this.connection!==e.connection||this.timeZone!==e.config.time_zone)&&(this.cache.clear(),this.connection=e.connection,this.timeZone=e.config.time_zone);let s=++this.generation,n=e.config.time_zone,r=U(new Date,n),a=We(r,t.days_to_show),c={rangeStart:r,rangeEnd:a,timeZone:n,messages:[]};i({...c,status:"loading",events:[]});let l=0,p=0,d=0,f=[],g=[];if(await Promise.all(E(t).map(async y=>{let m="sourceLoadFailed";try{let b=e.states[y];if(!b||b.state==="unavailable"||y.startsWith("calendar.")&&b.state==="unknown")throw m="sourceUnavailable",new Error(m);let v,C;if(y.startsWith("calendar."))v=Ve(await be(e,y,r,a),y,n);else{let S=Ge(b);if(!S.supported)throw m="sourceUnsupported",new Error(m);if(S.invalid)throw m="sourceInvalid",new Error(m);v=S.events,C=S.fetchedAt}if(s!==this.generation)return;this.cache.set(y,{events:v,fetchedAt:C}),C&&g.push(C),f.push(...v),p++}catch{if(s!==this.generation)return;l++,c.messages.push({source:y,reason:m});let b=this.cache.get(y);b&&(d++,f.push(...b.events),b.fetchedAt&&g.push(b.fetchedAt))}})),s!==this.generation)return;let $=Ke(f,t,r,a);i({...c,events:$,status:l?d||p?"stale":"unavailable":$.length?"ready":"empty",fetchedAt:g.sort((y,m)=>Date.parse(y)-Date.parse(m))[0]})}};var Qe={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Xe=o=>(...e)=>({_$litDirective$:o,values:e}),X=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var et="important",$t=" !"+et,xe=Xe(class extends X{constructor(o){if(super(o),o.type!==Qe.ATTRIBUTE||o.name!=="style"||o.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(o){return Object.keys(o).reduce((e,t)=>{let i=o[t];return i==null?e:e+`${t=t.includes("-")?t:t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(o,[e]){let{style:t}=o.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(let i of this.ft)e[i]==null&&(this.ft.delete(i),i.includes("-")?t.removeProperty(i):t[i]=null);for(let i in e){let s=e[i];if(s!=null){this.ft.add(i);let n=typeof s=="string"&&s.endsWith($t);i.includes("-")||n?t.setProperty(i,n?s.slice(0,-11):s,n?et:""):t[i]=s}}return _}});var bt={title:"Waste collection",next:"Next collection",schedule:"Collection schedule",close:"Close",loading:"Loading schedule\u2026",empty:"No collections in this date range",partialEmpty:"No dates from the available sources",unavailable:"Schedule unavailable",stale:"Some sources are unavailable. Dates may be out of date.",staleBadge:"Out of date",collections:"collections",updated:"Provider updated",details:"View schedule",today:"Today",more:"more",previousPage:"Previous page",nextPage:"Next page",sourceUnavailable:"Source unavailable. Check the entity in Home Assistant.",sourceUnsupported:"Select a sensor with Generic details or a calendar.",sourceInvalid:"Invalid collection records. Check the source integration.",sourceLoadFailed:"Could not load this source. Check the entity and connection in Home Assistant."},wt={title:"Odbi\xF3r odpad\xF3w",next:"Najbli\u017Cszy odbi\xF3r",schedule:"Harmonogram odbioru",close:"Zamknij",loading:"\u0141adowanie harmonogramu\u2026",empty:"Brak odbior\xF3w w tym zakresie dat",partialEmpty:"Brak termin\xF3w z dost\u0119pnych \u017Ar\xF3de\u0142",unavailable:"Harmonogram niedost\u0119pny",stale:"Niekt\xF3re \u017Ar\xF3d\u0142a s\u0105 niedost\u0119pne. Terminy mog\u0105 by\u0107 nieaktualne.",staleBadge:"Nieaktualne",collections:"frakcje",updated:"Aktualizacja \u017Ar\xF3d\u0142a",details:"Zobacz harmonogram",today:"Dzisiaj",more:"wi\u0119cej",previousPage:"Poprzednia strona",nextPage:"Nast\u0119pna strona",sourceUnavailable:"\u0179r\xF3d\u0142o niedost\u0119pne. Sprawd\u017A encj\u0119 w Home Assistant.",sourceUnsupported:"Wybierz sensor z danymi Generic lub kalendarz.",sourceInvalid:"Nieprawid\u0142owe dane odbior\xF3w. Sprawd\u017A integracj\u0119 \u017Ar\xF3d\u0142ow\u0105.",sourceLoadFailed:"Nie uda\u0142o si\u0119 wczyta\u0107 \u017Ar\xF3d\u0142a. Sprawd\u017A encj\u0119 i po\u0142\u0105czenie w Home Assistant."},F=o=>o.toLowerCase().startsWith("pl")?wt:bt,_e=(o,e)=>`${o.source}: ${F(e)[o.reason]}`;var Ae=(o,e,t=6)=>u`<div class="chips">
    ${o.slice(0,t).map(i=>u`<span class="chip" style=${xe({"--waste-type-color":i.color})}><ha-icon aria-hidden="true" .icon=${i.icon??"mdi:trash-can-outline"}></ha-icon><span>${i.label}</span></span>`)}
    ${o.length>t?u`<span class="chip overflow">+${new Intl.NumberFormat(e).format(o.length-t)} ${F(e).more}</span>`:h}
  </div>`,tt=o=>u`<div class="bins" aria-hidden="true">
    ${o.slice(0,3).map(e=>u`<div
          class="bin"
          style=${xe({"--waste-type-color":Ye(e)})}
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
  </div>`,ee=(o,e,t,i=6)=>u`${o.map(s=>{let n=new Date(`${s.date}T12:00:00Z`);return u`<div class="group">
      <div class="day" aria-hidden="true">
        ${new Intl.DateTimeFormat(t,{month:"short",timeZone:"UTC"}).format(n)}<strong
          >${n.getUTCDate()}</strong
        >
      </div>
      <div class="group-body">
        <div class="group-date">${K(s.date,e,t)}</div>
        ${Ae(s.events,t,i)}
      </div>
    </div>`})}`;var it=N`
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
`;async function Ee(o){return customElements.get("ha-form")||await(await(await window.loadCardHelpers()).createCardElement({type:"button"})).constructor.getConfigElement(),document.createElement(o)}var D=class extends w{constructor(){super(...arguments);this.badge=!1;this.detailsOpen=!1;this.detailsPage=0;this.controller=new Q;this.visible=()=>{document.visibilityState==="visible"&&this.refresh()}}set hass(t){let i=this.ha;this.ha=t,(!i||i.connection!==t.connection||i.config.time_zone!==t.config.time_zone)&&(this.snapshot=void 0),(!i||i.connection!==t.connection||i.config.time_zone!==t.config.time_zone||E(this.config??{type:""}).some(s=>i.states[s]!==t.states[s]))&&this.refresh(),(!i||i.locale?.language!==t.locale?.language||i.language!==t.language)&&this.requestUpdate()}get hass(){return this.ha}setConfig(t){let i=Fe(t),s=this.config,n=!s||JSON.stringify(E(s).sort())!==JSON.stringify(E(i).sort());n&&this.controller.reset(),(n||s?.days_to_show!==i.days_to_show||JSON.stringify(s?.overrides)!==JSON.stringify(i.overrides))&&(this.snapshot=void 0),this.config=i,this.refresh(),this.requestUpdate()}static getConfigElement(){return Ee("waste-pickup-planner-card-editor")}static getStubConfig(t){return{type:"custom:waste-pickup-planner-card",entity:Object.values(t.states).find(s=>s.entity_id.startsWith("sensor.")&&Array.isArray(s.attributes.upcoming))?.entity_id??Object.keys(t.states).find(s=>s.startsWith("calendar."))??"sensor.waste_schedule",layout:"compact"}}getCardSize(){return this.config?.layout==="schedule"?Math.min(this.config.max_groups+1,8):this.config?.layout==="hero"?5:3}getGridOptions(){return{columns:12,min_columns:6,rows:"auto"}}connectedCallback(){super.connectedCallback(),document.addEventListener("visibilitychange",this.visible),this.timer=setInterval(()=>this.refresh(),6e4),this.refresh()}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.timer),document.removeEventListener("visibilitychange",this.visible),this.controller.cancel(),this.detailsOpen=!1}refresh(){!this.isConnected||!this.ha||!this.config||(this.day=U(new Date,this.ha.config.time_zone),this.snapshot?.rangeStart!==this.day&&(this.snapshot=void 0),this.controller.update(this.ha,this.config,t=>{(t.status!=="loading"||!this.snapshot)&&(this.snapshot=t)}))}locale(){return this.config?.locale||this.ha?.locale?.language||this.ha?.language||"en"}async activate(){let t=this.config;if(!t)return;let i=t.tap_action?.action??"details";i!=="none"&&(i==="more-info"?this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:E(t)[0]},bubbles:!0,composed:!0})):i==="navigate"?(history.pushState(null,"",t.tap_action.navigation_path),window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1}}))):(this.detailsPage=0,this.detailsOpen=!0,await this.updateComplete,this.isConnected&&this.detailsOpen&&this.renderRoot.querySelector("dialog")?.showModal()))}async changeDetailsPage(t){this.detailsPage=t,await this.updateComplete,this.renderRoot.querySelector("dialog")?.scrollTo(0,0)}render(){if(!this.config)return h;let t=this.locale(),i=F(t),s=this.snapshot,n=we(s?.events??[]),r=n[0],a=s?.rangeStart??this.day??"2000-01-01",c=this.config.title??i.title,l=s?.status??"loading",p=l==="empty"?i.empty:l==="stale"?i.partialEmpty:l==="unavailable"?i.unavailable:i.loading,d=r?r.events.length>2?`${new Intl.NumberFormat(t).format(r.events.length)} ${i.collections}`:r.events.map(v=>v.label).join(" \xB7 "):p,f=r?K(r.date,a,t):p,g=l==="stale"?u`<p class="notice" role="status">${i.stale}</p>`:h,$=100,y=Math.max(1,Math.ceil((s?.events.length??0)/$)),m=Math.min(this.detailsPage,y-1),b=this.detailsOpen?u`<dialog aria-label=${i.schedule} @close=${()=>{this.detailsOpen=!1}}>
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
      ${n.length?ee(we(s.events.slice(m*$,(m+1)*$)),a,t,$):u`<p class="state">${p}</p>`}${g}${s?.messages.map(v=>u`<p class="state">${_e(v,t)}</p>`)}
      ${y>1?u`<nav class="pages" aria-label=${i.schedule}>
        <button ?disabled=${m===0} @click=${()=>this.changeDetailsPage(m-1)}>${i.previousPage}</button>
        <span aria-live="polite">${new Intl.NumberFormat(t).format(m+1)} / ${new Intl.NumberFormat(t).format(y)}</span>
        <button ?disabled=${m+1===y} @click=${()=>this.changeDetailsPage(m+1)}>${i.nextPage}</button>
      </nav>`:h}
    </dialog>`:h;if(this.badge){let v=r?r.events.slice(0,6).map(st=>st.label).join(" \xB7 ")+(r.events.length>6?` \xB7 +${new Intl.NumberFormat(t).format(r.events.length-6)} ${i.more}`:""):p,C=`${c}: ${f}. ${v}${l==="stale"?`. ${i.stale}`:""}`,S=u`<ha-icon aria-hidden="true"
        .icon=${l==="stale"||l==="unavailable"?"mdi:alert-circle-outline":"mdi:trash-can-outline"}></ha-icon>
        <span class="badge-copy"><strong>${r?f:c}</strong>
        <small>${l==="stale"?`${i.staleBadge} \xB7 `:""}${d}</small></span>`;return this.config.tap_action?.action==="none"?u`<div class="badge" role="img" aria-label=${C} title=${v}>${S}</div>`:u`<button class="badge" aria-label=${C} title=${v} @click=${this.activate}>${S}</button>${b}`}return u`<ha-card
        ><section class=${`surface ${this.config.layout}`}>
          <div class="heading">
            <h2>${c}</h2>
            <ha-icon aria-hidden="true" icon="mdi:calendar-outline"></ha-icon>
          </div>
          ${r?this.config.layout==="schedule"?ee(n.slice(0,this.config.max_groups),a,t):u`<div class="primary">
                      <div class="copy">
                        <div class="eyebrow">${i.next}</div>
                        <span class="date">${f}</span>${Ae(r.events,t)}
                        <p class="full-date">
                          ${new Intl.DateTimeFormat(t,{dateStyle:"long",timeZone:"UTC"}).format(new Date(`${r.date}T12:00:00Z`))}
                        </p>
                      </div>
                      ${this.config.layout==="hero"&&this.config.show_artwork?tt(r.events):h}
                    </div>
                    ${this.config.layout==="hero"&&n.length>1?u`<div class="upcoming">${ee(n.slice(1,this.config.max_groups),a,t)}</div>`:h}`:u`<p class="state" role="status">${p}</p>`}
          ${g}${l==="unavailable"?s?.messages.map(v=>u`<p class="state">${_e(v,t)}</p>`):h}
          ${this.config.show_updated&&s?.fetchedAt?u`<p class="updated">${i.updated}: ${qe(s.fetchedAt,t,s.timeZone)}</p>`:h}
        </section>
        ${this.config.tap_action?.action==="none"?h:u`<button class="action" @click=${this.activate}>${this.config.tap_action?.action==="more-info"?c:i.details} <span aria-hidden="true">↗</span></button>`}</ha-card
      >${b}`}};D.styles=it,D.properties={snapshot:{state:!0},detailsOpen:{state:!0},detailsPage:{state:!0}};var te=class extends D{constructor(){super(...arguments);this.badge=!0}static getConfigElement(){return Ee("waste-pickup-planner-badge-editor")}static getStubConfig(t){return{...super.getStubConfig(t),type:"custom:waste-pickup-planner-badge"}}};var xt=[{name:"entities",required:!0,selector:{entity:{domain:["sensor","calendar"],multiple:!0}}},{name:"title",selector:{text:{}}},{name:"layout",selector:{select:{options:["compact","hero","schedule"],mode:"dropdown"}}},{name:"days_to_show",selector:{number:{min:1,max:366,mode:"box"}}},{name:"max_groups",selector:{number:{min:1,max:50,mode:"box"}}},{name:"show_artwork",selector:{boolean:{}}},{name:"show_updated",selector:{boolean:{}}},{name:"locale",selector:{text:{}}}],_t={entities:"Waste sensors or calendars",title:"Title",layout:"Layout",days_to_show:"Days to show",max_groups:"Visible date groups",show_artwork:"Show bin artwork in hero layout",show_updated:"Show provider update time",locale:"Language override (optional)"},H=class extends w{setConfig(e){this.config={...e}}changed(e){this.config={...this.config,...e},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this.config},bubbles:!0,composed:!0}))}override(e,t){let i=[...this.config?.overrides??[]];i[e]={...i[e],...t},this.changed({overrides:i})}render(){if(!this.config||!this.hass)return h;let e={...this.config,entities:this.config.entities??(this.config.entity?[this.config.entity]:[])};return u`<ha-form
        .hass=${this.hass}
        .data=${e}
        .schema=${xt.filter(t=>!this.config.type.includes("badge")||!["layout","max_groups","show_artwork"].includes(t.name))}
        .computeLabel=${t=>_t[t.name]}
        @value-changed=${t=>this.changed({...t.detail.value,entity:void 0})}
      ></ha-form>
      <p>
        Select one authoritative source per address. To use a Waste Collection
        Schedule sensor, set its details format to Generic. Calendars also work.
      </p>
      <label
        >Tap action<select
          .value=${this.config.tap_action?.action??"details"}
          @change=${t=>this.changed({tap_action:{action:t.target.value}})}
        >
          ${["details","more-info","navigate","none"].map(t=>u`<option value=${t}>${t}</option>`)}
        </select></label
      >
      ${this.config.tap_action?.action==="navigate"?u`<label>Dashboard path<input .value=${this.config.tap_action.navigation_path??""} placeholder="/lovelace/waste" @change=${t=>this.changed({tap_action:{action:"navigate",navigation_path:t.target.value}})} /></label>`:h}
      <details>
        <summary>Collection names, colors and visibility</summary>
        <p>
          Use the exact type ID from v3, or the complete collection name for
          older sensors and calendars.
        </p>
        ${(this.config.overrides??[]).map((t,i)=>u`<fieldset>
            <legend>Collection ${i+1}</legend>
            ${[["type","Type ID or exact name"],["name","Display name"],["color","Bin color (#RRGGBB)"],["icon","Icon (mdi:\u2026)"]].map(([s,n])=>u`<label
                  >${n}<input
                    .value=${t[s]??""}
                    @change=${r=>this.override(i,{[s]:r.target.value||void 0})}
                /></label>`)}<label
              ><input
                type="checkbox"
                .checked=${t.hidden??!1}
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
      </details>`}};H.properties={hass:{attribute:!1},config:{state:!0}},H.styles=N`
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
  `;var ie=class extends H{};customElements.define("waste-pickup-planner-card",D);customElements.define("waste-pickup-planner-badge",te);customElements.define("waste-pickup-planner-card-editor",H);customElements.define("waste-pickup-planner-badge-editor",ie);var ot=window;(ot.customCards??=[]).push({type:"waste-pickup-planner-card",name:"Waste Pickup Planner",description:"Date-grouped waste collections with compact, hero and schedule layouts.",preview:!0});(ot.customBadges??=[]).push({type:"waste-pickup-planner-badge",name:"Waste Pickup Planner Badge",description:"The next collection date and types, with schedule details."});
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
