var ae=globalThis,ce=ae.ShadowRoot&&(ae.ShadyCSS===void 0||ae.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,_e=Symbol(),Je=new WeakMap,q=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==_e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(ce&&t===void 0){let n=e!==void 0&&e.length===1;n&&(t=Je.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Je.set(e,t))}return t}toString(){return this.cssText}},Ve=i=>new q(typeof i=="string"?i:i+"",void 0,_e),K=(i,...t)=>{let e=i.length===1?i[0]:t.reduce((n,o,r)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+i[r+1],i[0]);return new q(e,i,_e)},Ye=(i,t)=>{if(ce)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let n=document.createElement("style"),o=ae.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=e.cssText,i.appendChild(n)}},Ce=ce?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(let n of t.cssRules)e+=n.cssText;return Ve(e)})(i):i;var{is:Ht,defineProperty:Dt,getOwnPropertyDescriptor:Nt,getOwnPropertyNames:Mt,getOwnPropertySymbols:Ut,getPrototypeOf:Lt}=Object,le=globalThis,Qe=le.trustedTypes,Bt=Qe?Qe.emptyScript:"",Rt=le.reactiveElementPolyfillSupport,J=(i,t)=>i,ke={toAttribute(i,t){switch(t){case Boolean:i=i?Bt:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},et=(i,t)=>!Ht(i,t),Xe={attribute:!0,type:String,converter:ke,reflect:!1,useDefault:!1,hasChanged:et};Symbol.metadata??=Symbol("metadata"),le.litPropertyMetadata??=new WeakMap;var S=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Xe){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let n=Symbol(),o=this.getPropertyDescriptor(t,n,e);o!==void 0&&Dt(this.prototype,t,o)}}static getPropertyDescriptor(t,e,n){let{get:o,set:r}=Nt(this.prototype,t)??{get(){return this[e]},set(s){this[e]=s}};return{get:o,set(s){let a=o?.call(this);r?.call(this,s),this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Xe}static _$Ei(){if(this.hasOwnProperty(J("elementProperties")))return;let t=Lt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(J("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(J("properties"))){let e=this.properties,n=[...Mt(e),...Ut(e)];for(let o of n)this.createProperty(o,e[o])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[n,o]of e)this.elementProperties.set(n,o)}this._$Eh=new Map;for(let[e,n]of this.elementProperties){let o=this._$Eu(e,n);o!==void 0&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let n=new Set(t.flat(1/0).reverse());for(let o of n)e.unshift(Ce(o))}else t!==void 0&&e.push(Ce(t));return e}static _$Eu(t,e){let n=e.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let n of e.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ye(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$ET(t,e){let n=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,n);if(o!==void 0&&n.reflect===!0){let r=(n.converter?.toAttribute!==void 0?n.converter:ke).toAttribute(e,n.type);this._$Em=t,r==null?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(t,e){let n=this.constructor,o=n._$Eh.get(t);if(o!==void 0&&this._$Em!==o){let r=n.getPropertyOptions(o),s=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:ke;this._$Em=o;let a=s.fromAttribute(e,r.type);this[o]=a??this._$Ej?.get(o)??a,this._$Em=null}}requestUpdate(t,e,n,o=!1,r){if(t!==void 0){let s=this.constructor;if(o===!1&&(r=this[t]),n??=s.getPropertyOptions(t),!((n.hasChanged??et)(r,e)||n.useDefault&&n.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,n))))return;this.C(t,e,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:n,reflect:o,wrapped:r},s){n&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??e??this[t]),r!==!0||s!==void 0)||(this._$AL.has(t)||(this.hasUpdated||n||(e=void 0),this._$AL.set(t,e)),o===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[o,r]of this._$Ep)this[o]=r;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[o,r]of n){let{wrapped:s}=r,a=this[o];s!==!0||this._$AL.has(o)||a===void 0||this.C(o,void 0,r,a)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(e)):this._$EM()}catch(n){throw t=!1,this._$EM(),n}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[J("elementProperties")]=new Map,S[J("finalized")]=new Map,Rt?.({ReactiveElement:S}),(le.reactiveElementVersions??=[]).push("2.1.2");var Ie=globalThis,tt=i=>i,de=Ie.trustedTypes,it=de?de.createPolicy("lit-html",{createHTML:i=>i}):void 0,ct="$lit$",z=`lit$${Math.random().toFixed(9).slice(2)}$`,lt="?"+z,Wt=`<${lt}>`,D=document,Y=()=>D.createComment(""),Q=i=>i===null||typeof i!="object"&&typeof i!="function",Oe=Array.isArray,Ft=i=>Oe(i)||typeof i?.[Symbol.iterator]=="function",Ee=`[ 	
\f\r]`,V=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,nt=/-->/g,ot=/>/g,j=RegExp(`>|${Ee}(?:([^\\s"'>=/]+)(${Ee}*=${Ee}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),rt=/'/g,st=/"/g,dt=/^(?:script|style|textarea|title)$/i,je=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),p=je(1),si=je(2),ai=je(3),A=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),at=new WeakMap,H=D.createTreeWalker(D,129);function pt(i,t){if(!Oe(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return it!==void 0?it.createHTML(t):t}var Zt=(i,t)=>{let e=i.length-1,n=[],o,r=t===2?"<svg>":t===3?"<math>":"",s=V;for(let a=0;a<e;a++){let l=i[a],u,h,c=-1,m=0;for(;m<l.length&&(s.lastIndex=m,h=s.exec(l),h!==null);)m=s.lastIndex,s===V?h[1]==="!--"?s=nt:h[1]!==void 0?s=ot:h[2]!==void 0?(dt.test(h[2])&&(o=RegExp("</"+h[2],"g")),s=j):h[3]!==void 0&&(s=j):s===j?h[0]===">"?(s=o??V,c=-1):h[1]===void 0?c=-2:(c=s.lastIndex-h[2].length,u=h[1],s=h[3]===void 0?j:h[3]==='"'?st:rt):s===st||s===rt?s=j:s===nt||s===ot?s=V:(s=j,o=void 0);let g=s===j&&i[a+1].startsWith("/>")?" ":"";r+=s===V?l+Wt:c>=0?(n.push(u),l.slice(0,c)+ct+l.slice(c)+z+g):l+z+(c===-2?a:g)}return[pt(i,r+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]},X=class i{constructor({strings:t,_$litType$:e},n){let o;this.parts=[];let r=0,s=0,a=t.length-1,l=this.parts,[u,h]=Zt(t,e);if(this.el=i.createElement(u,n),H.currentNode=this.el.content,e===2||e===3){let c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(o=H.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(let c of o.getAttributeNames())if(c.endsWith(ct)){let m=h[s++],g=o.getAttribute(c).split(z),f=/([.?@])?(.*)/.exec(m);l.push({type:1,index:r,name:f[2],strings:g,ctor:f[1]==="."?Ae:f[1]==="?"?ze:f[1]==="@"?Te:W}),o.removeAttribute(c)}else c.startsWith(z)&&(l.push({type:6,index:r}),o.removeAttribute(c));if(dt.test(o.tagName)){let c=o.textContent.split(z),m=c.length-1;if(m>0){o.textContent=de?de.emptyScript:"";for(let g=0;g<m;g++)o.append(c[g],Y()),H.nextNode(),l.push({type:2,index:++r});o.append(c[m],Y())}}}else if(o.nodeType===8)if(o.data===lt)l.push({type:2,index:r});else{let c=-1;for(;(c=o.data.indexOf(z,c+1))!==-1;)l.push({type:7,index:r}),c+=z.length-1}r++}}static createElement(t,e){let n=D.createElement("template");return n.innerHTML=t,n}};function R(i,t,e=i,n){if(t===A)return t;let o=n!==void 0?e._$Co?.[n]:e._$Cl,r=Q(t)?void 0:t._$litDirective$;return o?.constructor!==r&&(o?._$AO?.(!1),r===void 0?o=void 0:(o=new r(i),o._$AT(i,e,n)),n!==void 0?(e._$Co??=[])[n]=o:e._$Cl=o),o!==void 0&&(t=R(i,o._$AS(i,t.values),o,n)),t}var Se=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:n}=this._$AD,o=(t?.creationScope??D).importNode(e,!0);H.currentNode=o;let r=H.nextNode(),s=0,a=0,l=n[0];for(;l!==void 0;){if(s===l.index){let u;l.type===2?u=new ee(r,r.nextSibling,this,t):l.type===1?u=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(u=new Pe(r,this,t)),this._$AV.push(u),l=n[++a]}s!==l?.index&&(r=H.nextNode(),s++)}return H.currentNode=D,o}p(t){let e=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}},ee=class i{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,n,o){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=R(this,t,e),Q(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==A&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Ft(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==d&&Q(this._$AH)?this._$AA.nextSibling.data=t:this.T(D.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:n}=t,o=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=X.createElement(pt(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===o)this._$AH.p(e);else{let r=new Se(o,this),s=r.u(this.options);r.p(e),this.T(s),this._$AH=r}}_$AC(t){let e=at.get(t.strings);return e===void 0&&at.set(t.strings,e=new X(t)),e}k(t){Oe(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,n,o=0;for(let r of t)o===e.length?e.push(n=new i(this.O(Y()),this.O(Y()),this,this.options)):n=e[o],n._$AI(r),o++;o<e.length&&(this._$AR(n&&n._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let n=tt(t).nextSibling;tt(t).remove(),t=n}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},W=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,n,o,r){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=r,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=d}_$AI(t,e=this,n,o){let r=this.strings,s=!1;if(r===void 0)t=R(this,t,e,0),s=!Q(t)||t!==this._$AH&&t!==A,s&&(this._$AH=t);else{let a=t,l,u;for(t=r[0],l=0;l<r.length-1;l++)u=R(this,a[n+l],e,l),u===A&&(u=this._$AH[l]),s||=!Q(u)||u!==this._$AH[l],u===d?t=d:t!==d&&(t+=(u??"")+r[l+1]),this._$AH[l]=u}s&&!o&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Ae=class extends W{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}},ze=class extends W{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}},Te=class extends W{constructor(t,e,n,o,r){super(t,e,n,o,r),this.type=5}_$AI(t,e=this){if((t=R(this,t,e,0)??d)===A)return;let n=this._$AH,o=t===d&&n!==d||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==d&&(n===d||o);o&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Pe=class{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){R(this,t)}};var Gt=Ie.litHtmlPolyfillSupport;Gt?.(X,ee),(Ie.litHtmlVersions??=[]).push("3.3.3");var ht=(i,t,e)=>{let n=e?.renderBefore??t,o=n._$litPart$;if(o===void 0){let r=e?.renderBefore??null;n._$litPart$=o=new ee(t.insertBefore(Y(),r),r,void 0,e??{})}return o._$AI(i),o};var He=globalThis,_=class extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ht(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return A}};_._$litElement$=!0,_.finalized=!0,He.litElementHydrateSupport?.({LitElement:_});var qt=He.litElementPolyfillSupport;qt?.({LitElement:_});(He.litElementVersions??=[]).push("4.2.2");var De=i=>typeof i=="string"&&/^#[\da-f]{6}$/i.test(i),Ne=i=>typeof i=="string"&&/^mdi:[a-z0-9-]+$/.test(i);function b(i){return[...new Set(i.entities??(i.entity?[i.entity]:[]))]}function pe(i){if(!i||typeof i!="object")throw new Error("Choose a waste sensor or calendar.");if(i.entities!==void 0&&(!Array.isArray(i.entities)||i.entities.some(e=>typeof e!="string")))throw new Error("entities must be an array of entity IDs.");if(i.entity&&i.entities)throw new Error("Use entity or entities, not both.");let t=b(i);if(!t.length||t.length>12||t.some(e=>!/^(sensor|calendar)\.[a-z0-9_]+$/.test(e)))throw new Error("Choose 1\u201312 sensor or calendar entities.");if(i.layout!==void 0&&!["compact","hero","schedule","overview"].includes(i.layout))throw new Error("Unknown layout.");if(i.appearance!==void 0&&!["native","modern","minimal"].includes(i.appearance))throw new Error("Unknown appearance.");if(i.density!==void 0&&!["comfortable","compact"].includes(i.density))throw new Error("Unknown density.");for(let[e,n]of[["days_to_show",366],["max_groups",50]]){let o=i[e];if(o!==void 0&&(!Number.isInteger(o)||o<1||o>n))throw new Error(`${e} must be 1\u2013${n}.`)}for(let e of["show_artwork","show_updated","show_manage_bins","show_source"])if(i[e]!==void 0&&typeof i[e]!="boolean")throw new Error(`${e} must be true or false.`);if(i.title!==void 0&&typeof i.title!="string")throw new Error("title must be text.");if(i.locale!==void 0){if(typeof i.locale!="string")throw new Error("locale must be a language code.");new Intl.DateTimeFormat(i.locale)}if(i.overrides!==void 0){if(!Array.isArray(i.overrides)||i.overrides.length>100)throw new Error("overrides must contain at most 100 types.");for(let e of i.overrides)if(!e||typeof e.type!="string"||!e.type.trim()||e.source!==void 0&&(typeof e.source!="string"||!/^(sensor|calendar)\.[a-z0-9_]+$/.test(e.source))||e.label!==void 0&&(typeof e.label!="string"||!e.label.trim())||e.name!==void 0&&(typeof e.name!="string"||!e.name.trim())||e.hidden!==void 0&&typeof e.hidden!="boolean"||e.color!==void 0&&!De(e.color)||e.icon!==void 0&&!Ne(e.icon))throw new Error("Invalid type override. Use an exact type ID or name, mdi icon, and #RRGGBB color.")}if(i.tap_action){if(!["details","more-info","navigate","none"].includes(i.tap_action.action))throw new Error("Unsupported tap action.");if(i.tap_action.action==="navigate"&&(typeof i.tap_action.navigation_path!="string"||!/^\/(?!\/)/.test(i.tap_action.navigation_path)||/[\\\u0000-\u001f]/.test(i.tap_action.navigation_path)))throw new Error("Navigation requires a local path beginning with /.")}return{...i,entities:i.entities?[...i.entities]:void 0,layout:i.layout??"compact",days_to_show:i.days_to_show??30,max_groups:i.max_groups??5}}function ue(i){if(typeof i!="string"||!/^\d{4}-\d{2}-\d{2}$/.test(i))return!1;let t=new Date(`${i}T12:00:00Z`);return Number.isFinite(t.getTime())&&t.toISOString().slice(0,10)===i}function F(i,t){let e=new Intl.DateTimeFormat("en-CA",{timeZone:t,year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(i),n=o=>e.find(r=>r.type===o).value;return`${n("year")}-${n("month")}-${n("day")}`}function ut(i,t){let e=new Date(`${i}T12:00:00Z`);return e.setUTCDate(e.getUTCDate()+t),e.toISOString().slice(0,10)}function ge(i,t){return Math.round((Date.parse(`${t}T12:00:00Z`)-Date.parse(`${i}T12:00:00Z`))/864e5)}var he=(i,t)=>i.charAt(0).toLocaleUpperCase(t)+i.slice(1);function te(i,t,e){let n=ge(t,i);return he(n<=1&&n>=0?new Intl.RelativeTimeFormat(e,{numeric:"auto"}).format(n,"day"):new Intl.DateTimeFormat(e,{weekday:"long",day:"numeric",month:"short",timeZone:"UTC"}).format(new Date(`${i}T12:00:00Z`)),e)}function Me(i,t,e){return new Intl.RelativeTimeFormat(e,{numeric:"auto"}).format(ge(t,i),"day")}function Kt(i,t){return new Intl.DateTimeFormat(t,{weekday:"short",day:"numeric",month:"short",timeZone:"UTC"}).format(new Date(`${i}T12:00:00Z`))}function me(i,t,e){let n=ge(t,i);return he(n>=0&&n<=1?Kt(i,e):Me(i,t,e),e)}function gt(i,t,e){let n=ge(t,i);if(n>=0&&n<=1)return he(Me(i,t,e),e);let o=new Intl.DateTimeFormat(e,{weekday:"long",timeZone:"UTC"}).format(new Date(`${i}T12:00:00Z`));return he(`${o} \xB7 ${Me(i,t,e)}`,e)}function mt(i,t,e){return new Intl.DateTimeFormat(t,{dateStyle:"medium",timeStyle:"short",timeZone:e}).format(new Date(i))}var fe=i=>i!==null&&typeof i=="object"&&!Array.isArray(i)?i:void 0,Le=i=>typeof i=="string"&&i.trim()?i:void 0;function Ue(i,t,e){let n=i.date??e,o=Le(i.type);if(!(!ue(n)||!o))return{sourceId:t,entityId:t,date:n,label:o,typeId:Le(i.type_id),icon:Ne(i.icon)?i.icon:void 0,color:De(i.color)?i.color:void 0,colorSource:["source","customize","default"].includes(String(i.color_source))?i.color_source:void 0}}function N(i){let t=i.attributes,e="upcoming"in t?t.upcoming:"upcoming_pickups"in t?t.upcoming_pickups:"next_pickup"in t?t.next_pickup===null?[]:[t.next_pickup]:void 0;if(!Array.isArray(e))return{events:[],supported:!1,invalid:e!==void 0};let n=[],o=e.length>2e3;for(let s of e.slice(0,2e3)){if(n.length>=2e3){o=!0;break}let a=fe(s);if(!a||!ue(a.date)){o=!0;continue}if(Array.isArray(a.collections)){a.collections.length>100&&(o=!0);for(let l of a.collections.slice(0,100)){let u=fe(l),h=u&&Ue(u,i.entity_id,a.date);h?n.push(h):o=!0}}else if(Array.isArray(a.types)){a.types.length>100&&(o=!0);for(let l of a.types.slice(0,100)){let u=Ue({...a,type:l,color:void 0,color_source:void 0,type_id:void 0},i.entity_id);u?n.push(u):o=!0}}else{let l=Ue(a,i.entity_id);l?n.push(l):o=!0}}let r=typeof t.last_update=="string"&&/^\d{4}-\d{2}-\d{2}T/.test(t.last_update)&&/(?:Z|[+-]\d{2}:\d{2})$/.test(t.last_update)&&Number.isFinite(Date.parse(t.last_update))?t.last_update:void 0;return{events:n.slice(0,2e3),supported:!0,invalid:o||n.length>2e3,fetchedAt:r}}function ft(i,t,e){if(!Array.isArray(i)||i.length>1e4)throw new Error("Invalid calendar response.");return i.flatMap(n=>{let o=fe(n),r=fe(o?.start),s=Le(o?.summary);if(!r||!s)return[];let a;return ue(r.date)?a=r.date:typeof r.dateTime=="string"&&/(?:Z|[+-]\d{2}:\d{2})$/.test(r.dateTime)&&Number.isFinite(Date.parse(r.dateTime))&&(a=F(new Date(r.dateTime),e)),a?[{sourceId:t,entityId:t,date:a,label:s}]:[]})}var yt=new WeakMap;function Be(i,t,e,n){let o=yt.get(i.connection);o||(o=new Map,yt.set(i.connection,o));let r=JSON.stringify([t,e,n]),s=i.states[t]?.last_updated,a=o.get(r);if(a?.pending){if(a.stamp===s)return a.promise;let c=()=>Be(i,t,e,n);return a.promise.then(c,c)}if(a&&a.stamp===s&&a.expires>Date.now())return a.promise;for(let[c,m]of o)!m.pending&&m.expires<=Date.now()&&o.delete(c);if(!o.has(r)&&o.size>=100){let c=[...o].find(([,m])=>!m.pending);if(c)o.delete(c[0]);else return Promise.reject(new Error("Too many calendar requests are pending."))}let l=new URLSearchParams({start:`${e}T00:00:00+14:00`,end:`${n}T00:00:00-12:00`}),u=i.callApi("GET",`calendars/${encodeURIComponent(t)}?${l}`),h={promise:u,expires:1/0,pending:!0,stamp:s};return o.set(r,h),u.then(()=>{h.pending=!1,h.expires=Date.now()+6e4},()=>{o.get(r)===h&&o.delete(r)}),u}function C(i,t,e=[t]){let n=r=>{let s=i?.states[r]?.attributes.friendly_name;return typeof s=="string"&&s.trim()?s.trim():r},o=n(t);return e.some(r=>r!==t&&n(r)===o)?`${o} \xB7 ${t}`:o}function bt(i){let t;try{t=new Intl.Collator(i)}catch{t=new Intl.Collator("en")}return(e,n)=>t.compare(e.label,n.label)||(e.sourceId<n.sourceId?-1:e.sourceId>n.sourceId?1:0)}function ie(i="en"){let t=bt(i);return(e,n)=>(e.date<n.date?-1:e.date>n.date?1:0)||t(e,n)}var $=i=>JSON.stringify([i.sourceId,i.typeId??i.originalLabel??i.label,i.originalLabel??i.label]);function M(i,t){let e=t.filter(s=>s.sourceId===i.sourceId&&s.label===i.label&&$(s)!==$(i));if(!e.length)return i.label;let n=i.originalLabel??i.label,r=e.some(s=>(s.originalLabel??s.label)===n)?i.typeId??n:n;return r===i.label?i.label:`${i.label} \xB7 ${r}`}var be=(i,t)=>t.type===(i.typeId??i.originalLabel??i.label)&&(t.source===void 0||t.source===i.sourceId)&&(t.label===void 0||t.label===(i.originalLabel??i.label)),ye=i=>+(i.source!==void 0)+ +(i.label!==void 0)*2;function vt(i){let t=new Map;for(let e of i)t.has(ye(e))||t.set(ye(e),e);return i.length?[...t.entries()].sort(([e],[n])=>e-n).reduce((e,[,n])=>({...e,...Object.fromEntries(Object.entries(n).filter(([,o])=>o!==void 0))}),{}):void 0}function ne(i,t=[]){return vt(t.filter(e=>be(i,e)))}function wt(i,t=[]){return vt(t.filter(e=>e.type===i.type&&ye(e)<ye(i)&&(e.source===void 0||e.source===i.source)&&(e.label===void 0||e.label===i.label)))}function ve(i,t){return[...new Set([...b(t),...Object.values(i.states).filter(e=>e.entity_id.startsWith("calendar.")||e.entity_id.startsWith("sensor.")&&(()=>{let n=N(e);return n.supported&&!n.invalid})()).map(e=>e.entity_id)])]}function $t(i,t,e=[]){let n=new Map;for(let r of b(t)){let s=i.states[r];if(!(!s||!r.startsWith("sensor.")))for(let a of N(s).events)n.has($(a))||n.set($(a),a)}let o=new Set(b(t));for(let r of e)r.sourceId.startsWith("calendar.")&&o.has(r.sourceId)&&!n.has($(r))&&n.set($(r),r);return[...n.values()].sort(bt(t.locale||i.locale?.language||i.language||"en"))}function xt(i,t="en"){let e=new Map;for(let n of i){let o=e.get($(n));(!o||n.date<o.date)&&e.set($(n),n)}return[...e.values()].sort(ie(t))}function _t(i,t,e,n){let o=new Map;for(let r of i){if(r.date<e||r.date>=n)continue;let s=ne(r,t.overrides);if(s?.hidden)continue;let a=JSON.stringify([$(r),r.date,r.color,r.colorSource,r.icon]);o.has(a)||o.set(a,{...r,originalLabel:r.originalLabel??r.label,label:s?.name??r.label,color:s?.color??r.color,colorSource:s?.color?"customize":r.colorSource,icon:s?.icon??r.icon})}return[...o.values()].sort(ie(t.locale))}function Re(i){let t=new Map;for(let e of i){let n=t.get(e.date)??[];n.push(e),t.set(e.date,n)}return[...t].map(([e,n])=>({date:e,events:n}))}function oe(i){return i.colorSource==="source"||i.colorSource==="customize"?i.color:void 0}var Z=class{constructor(){this.generation=0;this.cache=new Map}reset(){this.generation++,this.cache.clear(),this.connection=void 0,this.timeZone=void 0}cancel(){this.generation++}async update(t,e,n){(this.connection!==t.connection||this.timeZone!==t.config.time_zone)&&(this.cache.clear(),this.connection=t.connection,this.timeZone=t.config.time_zone);let o=++this.generation,r=t.config.time_zone,s=F(new Date,r),a=ut(s,e.days_to_show),l={rangeStart:s,rangeEnd:a,timeZone:r,messages:[]};n({...l,status:"loading",events:[]});let u=0,h=0,c=0,m=[],g=[];if(await Promise.all(b(e).map(async v=>{let y="sourceLoadFailed";try{let x=t.states[v];if(!x||x.state==="unavailable"||v.startsWith("calendar.")&&x.state==="unknown")throw y="sourceUnavailable",new Error(y);let P,k;if(v.startsWith("calendar."))P=ft(await Be(t,v,s,a),v,r);else{let E=N(x);if(!E.supported)throw y="sourceUnsupported",new Error(y);if(E.invalid)throw y="sourceInvalid",new Error(y);P=E.events,k=E.fetchedAt}if(o!==this.generation)return;this.cache.set(v,{events:P,fetchedAt:k}),k&&g.push(k),m.push(...P),h++}catch{if(o!==this.generation)return;u++,l.messages.push({source:v,reason:y});let x=this.cache.get(v);x&&(c++,m.push(...x.events),x.fetchedAt&&g.push(x.fetchedAt))}})),o!==this.generation)return;let f=_t(m,e,s,a);n({...l,events:f,status:u?c||h?"stale":"unavailable":f.length?"ready":"empty",fetchedAt:g.sort((v,y)=>Date.parse(v)-Date.parse(y))[0]})}};var Ct={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},kt=i=>(...t)=>({_$litDirective$:i,values:t}),we=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,n){this._$Ct=t,this._$AM=e,this._$Ci=n}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var Et="important",Jt=" !"+Et,T=kt(class extends we{constructor(i){if(super(i),i.type!==Ct.ATTRIBUTE||i.name!=="style"||i.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(i){return Object.keys(i).reduce((t,e)=>{let n=i[e];return n==null?t:t+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(i,[t]){let{style:e}=i.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let n of this.ft)t[n]==null&&(this.ft.delete(n),n.includes("-")?e.removeProperty(n):e[n]=null);for(let n in t){let o=t[n];if(o!=null){this.ft.add(n);let r=typeof o=="string"&&o.endsWith(Jt);n.includes("-")||r?e.setProperty(n,r?o.slice(0,-11):o,r?Et:""):e[n]=o}}return A}});var Vt={title:"Waste collection",next:"Next collection",schedule:"Collection schedule",close:"Close",loading:"Loading schedule\u2026",empty:"No collections in this date range",partialEmpty:"No dates from the available sources",unavailable:"Schedule unavailable",stale:"Some sources are unavailable. Dates may be out of date.",staleBadge:"Out of date",collections:"collections",updated:"Provider updated",details:"View schedule",manageBins:"Manage bins",today:"Today",more:"more",previousPage:"Previous page",nextPage:"Next page",yourBins:"Your bins",upcoming:"Upcoming collections",clearFilter:"Show all bins",filterHint:"Select a bin to filter the schedule",ready:"Schedule available",sources:"Sources",binPage:"Bin pages",sourceUnavailable:"Source unavailable. Check the entity in Home Assistant.",sourceUnsupported:"Select a sensor with Generic details or a calendar.",sourceInvalid:"Invalid collection records. Check the source integration.",sourceLoadFailed:"Could not load this source. Check the entity and connection in Home Assistant."},Yt={title:"Odbi\xF3r odpad\xF3w",next:"Najbli\u017Cszy odbi\xF3r",schedule:"Harmonogram odbioru",close:"Zamknij",loading:"\u0141adowanie harmonogramu\u2026",empty:"Brak odbior\xF3w w tym zakresie dat",partialEmpty:"Brak termin\xF3w z dost\u0119pnych \u017Ar\xF3de\u0142",unavailable:"Harmonogram niedost\u0119pny",stale:"Niekt\xF3re \u017Ar\xF3d\u0142a s\u0105 niedost\u0119pne. Terminy mog\u0105 by\u0107 nieaktualne.",staleBadge:"Nieaktualne",collections:"frakcje",updated:"Aktualizacja \u017Ar\xF3d\u0142a",details:"Zobacz harmonogram",manageBins:"Zarz\u0105dzaj pojemnikami",today:"Dzisiaj",more:"wi\u0119cej",previousPage:"Poprzednia strona",nextPage:"Nast\u0119pna strona",yourBins:"Twoje pojemniki",upcoming:"Nadchodz\u0105ce odbiory",clearFilter:"Poka\u017C wszystkie pojemniki",filterHint:"Wybierz pojemnik, aby filtrowa\u0107 harmonogram",ready:"Harmonogram dost\u0119pny",sources:"\u0179r\xF3d\u0142a",binPage:"Strony pojemnik\xF3w",sourceUnavailable:"\u0179r\xF3d\u0142o niedost\u0119pne. Sprawd\u017A encj\u0119 w Home Assistant.",sourceUnsupported:"Wybierz sensor z danymi Generic lub kalendarz.",sourceInvalid:"Nieprawid\u0142owe dane odbior\xF3w. Sprawd\u017A integracj\u0119 \u017Ar\xF3d\u0142ow\u0105.",sourceLoadFailed:"Nie uda\u0142o si\u0119 wczyta\u0107 \u017Ar\xF3d\u0142a. Sprawd\u017A encj\u0119 i po\u0142\u0105czenie w Home Assistant."},U=i=>i.toLowerCase().startsWith("pl")?Yt:Vt,We=(i,t)=>`${i.source}: ${U(t)[i.reason]}`;function Qt(i){let t=/^#([\da-f]{3}|[\da-f]{6})$/i.exec(i.trim())?.[1];if(t){let n=t.length===3?[...t].map(o=>o+o).join(""):t;return[0,2,4].map(o=>parseInt(n.slice(o,o+2),16))}let e=/^rgba?\(\s*(\d+)[\s,]+(\d+)[\s,]+(\d+)/i.exec(i.trim());return e?[Number(e[1]),Number(e[2]),Number(e[3])]:void 0}function Xt(i){let t=Qt(i);if(!t)return"#fff";let[e,n,o]=t.map(r=>{let s=r/255;return s<=.03928?s/12.92:((s+.055)/1.055)**2.4});return .2126*e+.7152*n+.0722*o>.4?"#1f1f1f":"#fff"}var re=(i,t,e=6)=>p`<div class="chips">
    ${i.slice(0,e).map(n=>{let o=oe(n);return p`<span class="chip"><span class=${`swatch${o?"":" neutral"}`} aria-hidden="true"
        style=${T(o?{"--waste-type-color":o,"--waste-icon-color":Xt(o)}:{})}><ha-icon
        .icon=${n.icon??"mdi:trash-can-outline"}></ha-icon></span><span>${n.label}</span></span>`})}
    ${i.length>e?p`<span class="chip overflow">+${new Intl.NumberFormat(t).format(i.length-e)} ${U(t).more}</span>`:d}
  </div>`,se=i=>p`<div class="bins" aria-hidden="true">
    ${i.slice(0,3).map(t=>p`<div
          class="bin"
          style=${T({"--waste-type-color":oe(t)})}
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
  </div>`,G=(i,t,e,n=6)=>p`${i.map(o=>{let r=new Date(`${o.date}T12:00:00Z`);return p`<div class="group">
      <div class="day" aria-hidden="true">
        ${new Intl.DateTimeFormat(e,{month:"short",timeZone:"UTC"}).format(r)}<strong
          >${new Intl.DateTimeFormat(e,{day:"numeric",timeZone:"UTC"}).format(r)}</strong
        >
      </div>
      <div class="group-body">
        <div class="group-date">${gt(o.date,t,e)}</div>
        ${re(o.events,e,n)}
      </div>
    </div>`})}`;var St=K`
  :host {
    display: block;
    color: var(--primary-text-color, #212121);
    font-family: var(--ha-font-family-body, inherit);
  }
  * {
    box-sizing: border-box;
  }
  ha-card {
    display: block;
    overflow: hidden;
    background: var(--ha-card-background, var(--card-background-color, #fff));
    border-radius: var(--ha-card-border-radius, var(--ha-border-radius-lg, 12px));
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
  /* Tapping anywhere on the card opens the schedule, like Home Assistant's own cards. */
  .surface.tappable {
    cursor: pointer;
  }
  .surface.tappable:hover {
    background: color-mix(in srgb, var(--primary-text-color, #212121) 3%, transparent);
  }
  .surface.tappable:focus-visible {
    outline: 3px solid var(--primary-color, #03a9f4);
    outline-offset: -3px;
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
    /* Break only a word that can't fit on its own line, never "Tomorrow" mid-word. */
    overflow-wrap: break-word;
    hyphens: auto;
  }
  .hero .date {
    font-size: clamp(26px, 8cqi, 38px);
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
  /* The bin's colour as a filled circle: what people recognise their bins by. */
  .swatch {
    display: inline-grid;
    flex-shrink: 0;
    place-items: center;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    color: var(--waste-icon-color, #fff);
    background: var(--waste-type-color);
  }
  .swatch.neutral {
    color: var(--secondary-text-color, #727272);
    background: color-mix(in srgb, var(--primary-text-color, #212121) 10%, transparent);
  }
  .swatch ha-icon {
    --mdc-icon-size: 15px;
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
  }
  .upcoming {
    margin-top: 20px;
  }
  .action {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
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
  .action ha-icon {
    --mdc-icon-size: 20px;
    flex-shrink: 0;
    color: var(--secondary-text-color, #727272);
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
  /* A modal needs an opaque surface even when cards are see-through. */
  dialog {
    color: var(--primary-text-color, #212121);
    background: var(--ha-dialog-surface-background, var(--card-background-color, #fff));
    border: 1px solid var(--divider-color, #ddd);
    border-radius: var(--ha-dialog-border-radius, 24px);
    padding: 20px;
    width: min(480px, calc(100vw - 24px));
    max-height: calc(100dvh - 32px);
    overflow: auto;
    box-shadow: var(--dialog-box-shadow, 0 20px 80px #0005);
  }
  dialog::backdrop {
    background: var(--mdc-dialog-scrim-color, rgba(0, 0, 0, 0.32));
  }
  dialog .heading {
    position: sticky;
    top: -20px;
    background: var(--ha-dialog-surface-background, var(--card-background-color, #fff));
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
  ha-card[data-appearance="modern"] { border-radius: max(20px, var(--ha-card-border-radius, var(--ha-border-radius-lg, 12px))); }
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
  .tile-date { display: block; font-size: 12px; margin-top: 8px; }
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
`;async function Fe(i){return customElements.get("ha-form")||await(await(await window.loadCardHelpers()).createCardElement({type:"button"})).constructor.getConfigElement(),document.createElement(i)}function At(i){let{events:t,groups:e,today:n,locale:o}=i,r=U(o),s=e[0],a=xt(t,o),l=12,u=Math.max(1,Math.ceil(a.length/l)),h=Math.min(i.page,u-1),c=a.find(g=>$(g)===i.selected),m=c?e.map(g=>({...g,events:g.events.filter(f=>$(f)===i.selected)})).filter(g=>g.events.length):e;return p`
    ${s?p`<div class="primary overview-next"><div class="copy"><div class="eyebrow">${r.next}</div>
      <span class="date">${te(s.date,n,o)}</span>${re(s.events,o)}
      <p class="full-date">${me(s.date,n,o)}</p>
    </div>${i.artwork?se(s.events):d}</div>`:d}
    <div class="section-heading"><h3>${r.yourBins}</h3><small>${new Intl.NumberFormat(o).format(a.length)}</small></div>
    <p class="filter-hint">${r.filterHint}</p>
    <div class="bin-grid">${a.slice(h*l,(h+1)*l).map(g=>p`
      <button class="bin-tile" aria-pressed=${!!(c&&$(g)===i.selected)}
        @click=${()=>i.select($(g)===i.selected?void 0:$(g))}>
        ${i.artwork?se([g]):p`<ha-icon aria-hidden="true" .icon=${g.icon??"mdi:trash-can-outline"} style=${T({color:g.color})}></ha-icon>`}
        <span class="tile-copy"><strong>${M(g,a)}</strong>${i.showSource?p`<small class="source-name">${C(i.hass,g.sourceId,i.sources)}</small>`:d}
          <span class="tile-date">${te(g.date,n,o)}</span></span>
        <span class="tile-color" aria-hidden="true" style=${T({backgroundColor:oe(g)})}></span>
      </button>`)}</div>
    ${u>1?p`<nav class="pages" aria-label=${r.binPage}><button ?disabled=${h===0} @click=${()=>i.changePage(h-1)}>${r.previousPage}</button>
      <span aria-live="polite">${new Intl.NumberFormat(o).format(h+1)} / ${new Intl.NumberFormat(o).format(u)}</span><button ?disabled=${h+1===u} @click=${()=>i.changePage(h+1)}>${r.nextPage}</button></nav>`:d}
    <div class="section-heading"><h3>${r.upcoming}</h3>${c?p`<button class="filter-reset" @click=${()=>i.select(void 0)}>${r.clearFilter}</button>`:d}</div>
    ${c?p`<p class="filter-hint" role="status">${M(c,a)}${i.showSource?p` · ${C(i.hass,c.sourceId,i.sources)}`:d}</p>`:d}
    <div class="overview-schedule">${G(m.slice(0,i.maxGroups),n,o)}</div>`}var L=class extends _{constructor(){super(...arguments);this.badge=!1;this.detailsOpen=!1;this.detailsPage=0;this.binPage=0;this.controller=new Z;this.visible=()=>{document.visibilityState==="visible"&&this.refresh()}}set hass(e){let n=this.ha;this.ha=e,(!n||n.connection!==e.connection||n.config.time_zone!==e.config.time_zone)&&(this.snapshot=void 0,this.selectedBin=void 0,this.binPage=0),(!n||n.connection!==e.connection||n.config.time_zone!==e.config.time_zone||b(this.config??{type:""}).some(o=>n.states[o]!==e.states[o]))&&this.refresh(),(!n||n.locale?.language!==e.locale?.language||n.language!==e.language)&&this.requestUpdate()}get hass(){return this.ha}setConfig(e){let n=pe(e),o=this.config,r=!o||JSON.stringify(b(o).sort())!==JSON.stringify(b(n).sort());r&&this.controller.reset(),(r||o?.days_to_show!==n.days_to_show||JSON.stringify(o?.overrides)!==JSON.stringify(n.overrides))&&(this.snapshot=void 0,this.selectedBin=void 0,this.binPage=0,this.detailsPage=0),this.config=n,this.refresh(),this.requestUpdate()}static getConfigElement(){return Fe("waste-pickup-planner-card-editor")}static getStubConfig(e){let n=ve(e,{type:""});return{type:"custom:waste-pickup-planner-card",entity:n.find(o=>o.startsWith("sensor."))??n[0]??"sensor.waste_schedule",layout:"compact"}}getCardSize(){return this.config?.layout==="overview"?8:this.config?.layout==="schedule"?Math.min(this.config.max_groups+1,8):this.config?.layout==="hero"?5:3}getGridOptions(){return{columns:12,min_columns:6,rows:"auto"}}connectedCallback(){super.connectedCallback(),document.addEventListener("visibilitychange",this.visible),this.timer=setInterval(()=>this.refresh(),6e4),this.refresh()}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.timer),document.removeEventListener("visibilitychange",this.visible),this.controller.cancel(),this.detailsOpen=!1}refresh(){!this.isConnected||!this.ha||!this.config||(this.day=F(new Date,this.ha.config.time_zone),this.snapshot?.rangeStart!==this.day&&(this.snapshot=void 0),this.controller.update(this.ha,this.config,e=>{(e.status!=="loading"||!this.snapshot)&&(this.snapshot=e)}))}locale(){return this.config?.locale||this.ha?.locale?.language||this.ha?.language||"en"}async activate(){let e=this.config;if(!e)return;let n=e.tap_action?.action??"details";n!=="none"&&(n==="more-info"?this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:b(e)[0]},bubbles:!0,composed:!0})):n==="navigate"?(history.pushState(null,"",e.tap_action.navigation_path),window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1}}))):(this.detailsPage=0,this.detailsOpen=!0,await this.updateComplete,this.isConnected&&this.detailsOpen&&this.renderRoot.querySelector("dialog")?.showModal()))}activateKey(e){e.target!==e.currentTarget||e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),this.activate())}manageBins(){history.pushState(null,"","/config/integrations/integration/waste_collection_schedule"),window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1}}))}sourceDetails(e){this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0}))}async changeDetailsPage(e){this.detailsPage=e,await this.updateComplete,this.renderRoot.querySelector("dialog")?.scrollTo(0,0)}render(){if(!this.config)return d;let e=this.locale(),n=U(e),o=this.snapshot,r=[...o?.events??[]].sort(ie(e)),s=Re(r),a=s[0],l=o?.rangeStart??this.day??"2000-01-01",u=this.config.layout==="overview"&&o?.events.some(w=>$(w)===this.selectedBin)?this.selectedBin:void 0,h=u?r.filter(w=>$(w)===u):r,c=b(this.config),m=this.config.show_source??c.length>1,g=this.config.title??n.title,f=o?.status??"loading",v=f==="empty"?n.empty:f==="stale"?n.partialEmpty:f==="unavailable"?n.unavailable:n.loading,y=a?a.events.length>2?`${new Intl.NumberFormat(e).format(a.events.length)} ${n.collections}`:a.events.map(w=>w.label).join(" \xB7 "):v,x=a?te(a.date,l,e):v,P=f==="stale"?p`<p class="notice" role="status">${n.stale}</p>`:d,k=100,E=Math.max(1,Math.ceil(h.length/k)),I=Math.min(this.detailsPage,E-1),Ze=this.detailsOpen?p`<dialog aria-label=${n.schedule} @close=${()=>{this.detailsOpen=!1}}>
      <div class="heading">
        <h2>${g}</h2>
        <button
          class="close"
          aria-label=${n.close}
          @click=${()=>this.renderRoot.querySelector("dialog")?.close()}
        >
          ✕
        </button>
      </div>
      ${h.length?G(Re(h.slice(I*k,(I+1)*k)),l,e,k):p`<p class="state">${v}</p>`}${P}${o?.messages.map(w=>p`<p class="state">${We(w,e)}</p>`)}
      ${E>1?p`<nav class="pages" aria-label=${n.schedule}>
        <button ?disabled=${I===0} @click=${()=>this.changeDetailsPage(I-1)}>${n.previousPage}</button>
        <span aria-live="polite">${new Intl.NumberFormat(e).format(I+1)} / ${new Intl.NumberFormat(e).format(E)}</span>
        <button ?disabled=${I+1===E} @click=${()=>this.changeDetailsPage(I+1)}>${n.nextPage}</button>
      </nav>`:d}
    </dialog>`:d;if(this.badge){let w=a?a.events.slice(0,6).map(jt=>jt.label).join(" \xB7 ")+(a.events.length>6?` \xB7 +${new Intl.NumberFormat(e).format(a.events.length-6)} ${n.more}`:""):v,qe=`${g}: ${x}. ${w}${f==="stale"?`. ${n.stale}`:""}`,Ke=p`<ha-icon aria-hidden="true"
        .icon=${f==="stale"||f==="unavailable"?"mdi:alert-circle-outline":"mdi:trash-can-outline"}></ha-icon>
        <span class="badge-copy"><strong>${a?x:g}</strong>
        <small>${f==="stale"?`${n.staleBadge} \xB7 `:""}${y}</small></span>`;return this.config.tap_action?.action==="none"?p`<div class="badge" role="img" aria-label=${qe} title=${w}>${Ke}</div>`:p`<button class="badge" aria-label=${qe} title=${w} @click=${this.activate}>${Ke}</button>${Ze}`}let O=this.config.tap_action?.action!=="none"&&this.config.layout!=="overview",Ge=this.config.tap_action?.action==="more-info"||this.config.tap_action?.action==="navigate"?g:n.details;return p`<ha-card data-appearance=${this.config.appearance??"native"} data-density=${this.config.density??"comfortable"}
        ><section class=${`surface ${this.config.layout}${O?" tappable":""}`}
          role=${O?"button":d} tabindex=${O?"0":d}
          aria-label=${O?`${Ge}: ${a?`${x}, ${y}`:v}`:d}
          @click=${O?this.activate:d}
          @keydown=${O?this.activateKey:d}>
          ${this.config.title!==void 0?p`<div class="heading">
            <h2>${g}</h2>
            <ha-icon aria-hidden="true" icon="mdi:calendar-outline"></ha-icon>
          </div>`:d}
          ${a?this.config.layout==="overview"?At({events:r,groups:s,today:l,locale:e,artwork:this.config.show_artwork??!0,showSource:m,sources:c,hass:this.ha,maxGroups:this.config.max_groups,selected:u,page:this.binPage,select:w=>{this.selectedBin=w,this.detailsPage=0},changePage:w=>{this.binPage=w}}):this.config.layout==="schedule"?G(s.slice(0,this.config.max_groups),l,e):p`<div class="primary">
                      <div class="copy">
                        <div class="eyebrow">${n.next}</div>
                        <span class="date">${x}</span>${re(a.events,e)}
                        <p class="full-date">${me(a.date,l,e)}</p>
                      </div>
                      ${this.config.layout==="hero"&&this.config.show_artwork?se(a.events):d}
                    </div>
                    ${this.config.layout==="hero"&&s.length>1?p`<div class="upcoming">${G(s.slice(1,this.config.max_groups),l,e)}</div>`:d}`:p`<p class="state" role="status">${v}</p>`}
          ${P}${f==="unavailable"?o?.messages.map(w=>p`<p class="state">${We(w,e)}</p>`):d}
          ${this.config.show_updated&&o?.fetchedAt?p`<p class="updated">${n.updated}: ${mt(o.fetchedAt,e,o.timeZone)}</p>`:d}
          ${this.config.layout==="overview"?p`<div class=${`source-status ${f}`} role="status">
            <ha-icon aria-hidden="true" .icon=${f==="ready"?"mdi:check-circle-outline":f==="stale"||f==="unavailable"?"mdi:alert-circle-outline":"mdi:calendar-outline"}></ha-icon>
            <span>${f==="ready"?n.ready:f==="stale"?n.staleBadge:v}</span>
          </div><div class="source-links" aria-label=${n.sources}>${c.map(w=>p`<button @click=${()=>this.sourceDetails(w)}>${C(this.ha,w,c)} <span aria-hidden="true">↗</span></button>`)}</div>`:d}
        </section>
        ${this.config.tap_action?.action==="none"||O?d:p`<button class="action" @click=${this.activate}><span>${Ge}</span><ha-icon aria-hidden="true" icon="mdi:chevron-right"></ha-icon></button>`}
        ${this.config.show_manage_bins?p`<button class="action" @click=${this.manageBins}><span>${n.manageBins}</span><ha-icon aria-hidden="true" icon="mdi:cog-outline"></ha-icon></button>`:d}</ha-card
      >${Ze}`}};L.styles=St,L.properties={snapshot:{state:!0},detailsOpen:{state:!0},detailsPage:{state:!0},selectedBin:{state:!0},binPage:{state:!0}};var $e=class extends L{constructor(){super(...arguments);this.badge=!0}static getConfigElement(){return Fe("waste-pickup-planner-badge-editor")}static getStubConfig(e){return{...super.getStubConfig(e),type:"custom:waste-pickup-planner-badge"}}};var ei={source:"Source and layout",appearanceSection:"Appearance",binsSection:"Bins",entities:"Waste sensors or calendars",title:"Title",layout:"Layout",appearance:"Appearance",density:"Density",days_to_show:"Days to show",max_groups:"Visible date groups",show_artwork:"Show bin artwork",show_updated:"Show provider update time",show_manage_bins:"Show Manage bins shortcut",show_source:"Show source names",locale:"Language override (optional)",compact:"Compact",hero:"Hero",schedule:"Schedule",overview:"Overview",native:"Native Home Assistant",modern:"Modern",minimal:"Minimal",comfortable:"Comfortable",sourceHelp:"Select one authoritative source per address. For Waste Collection Schedule, choose the combined sensor with Generic details (All attributes in visual bin controls). Calendars also work.",unsupported:"No structured schedule is exposed. Open the sensor settings and choose Generic / All attributes.",binsHelp:"Integration colors apply until you choose an override. Shared bin definitions stay in Waste Collection Schedule.",rangeHelp:"Calendar bin choices come from events in the selected date range. Bins without records can be added in Advanced.",noBins:"No bins found in the supplied schedule.",calendarLoading:"Loading calendar bins\u2026",calendarFailed:"Some calendar bins could not be loaded. Check the source entity or try again.",customize:"Edit bin",displayName:"Display name",localColor:"Local bin color",inheritedColor:"Inherited card color",integrationColor:"Integration color",localColorStatus:"Local color",varyingColors:"Integration colors vary by bin.",neutralColor:"No integration color is available; artwork stays neutral.",resetInherited:"Use inherited card color",resetIntegration:"Use integration color",hide:"Hide this collection",hidden:"Hidden",local:"Customized",integration:"Integration",done:"Done",remove:"Reset this override",matching:"Advanced matching and icon",type:"Category ID or exact calendar name",binSource:"Source entity (optional)",label:"Exact bin name (optional)",icon:"Icon (mdi:\u2026)",color:"Local color (#RRGGBB)",advanced:"Advanced settings",advancedOverride:"Add a category or missing bin override",overrideHelp:"Use the exact type ID, or the complete collection name for older sensors and calendars.",addOverride:"Add collection override",tap:"Tap action",details:"View schedule","more-info":"Entity details",overrideLimit:"This card supports up to 100 overrides. Reset an unused override before adding another.",navigate:"Open dashboard",none:"No action",navigationPath:"Dashboard path",retry:"Retry"},ti={source:"\u0179r\xF3d\u0142o i uk\u0142ad",appearanceSection:"Wygl\u0105d",binsSection:"Pojemniki",entities:"Sensory odpad\xF3w lub kalendarze",title:"Tytu\u0142",layout:"Uk\u0142ad",appearance:"Wygl\u0105d",density:"Odst\u0119py",days_to_show:"Liczba dni",max_groups:"Widoczne grupy termin\xF3w",show_artwork:"Poka\u017C ilustracje pojemnik\xF3w",show_updated:"Poka\u017C czas aktualizacji \u017Ar\xF3d\u0142a",show_manage_bins:"Poka\u017C skr\xF3t Zarz\u0105dzaj pojemnikami",show_source:"Poka\u017C nazwy \u017Ar\xF3de\u0142",locale:"J\u0119zyk (opcjonalnie)",compact:"Kompaktowy",hero:"Wyr\xF3\u017Cniony",schedule:"Harmonogram",overview:"Przegl\u0105d",native:"Natywny Home Assistant",modern:"Nowoczesny",minimal:"Minimalistyczny",comfortable:"Wygodne",sourceHelp:"Wybierz jedno g\u0142\xF3wne \u017Ar\xF3d\u0142o dla ka\u017Cdego adresu. W Waste Collection Schedule wybierz sensor zbiorczy ze szczeg\xF3\u0142ami Generic (Wszystkie atrybuty w ustawieniach wizualnych). Mo\u017Cesz te\u017C u\u017Cy\u0107 kalendarza.",unsupported:"Sensor nie udost\u0119pnia danych harmonogramu. Otw\xF3rz jego ustawienia i wybierz Generic / Wszystkie atrybuty.",binsHelp:"Kolory integracji obowi\u0105zuj\u0105 do wybrania w\u0142asnych. Wsp\xF3lne definicje pojemnik\xF3w pozostaj\u0105 w Waste Collection Schedule.",rangeHelp:"Pojemniki kalendarza pochodz\u0105 z wydarze\u0144 w wybranym zakresie dat. Pojemniki bez termin\xF3w mo\u017Cna doda\u0107 w ustawieniach zaawansowanych.",noBins:"Brak pojemnik\xF3w w udost\u0119pnionym harmonogramie.",calendarLoading:"\u0141adowanie pojemnik\xF3w kalendarza\u2026",calendarFailed:"Nie uda\u0142o si\u0119 wczyta\u0107 niekt\xF3rych pojemnik\xF3w kalendarza. Sprawd\u017A encj\u0119 \u017Ar\xF3d\u0142ow\u0105 lub spr\xF3buj ponownie.",customize:"Edytuj pojemnik",displayName:"Wy\u015Bwietlana nazwa",localColor:"W\u0142asny kolor pojemnika",inheritedColor:"Odziedziczony kolor karty",integrationColor:"Kolor integracji",localColorStatus:"W\u0142asny kolor",varyingColors:"Kolory integracji r\xF3\u017Cni\u0105 si\u0119 mi\u0119dzy pojemnikami.",neutralColor:"Brak koloru integracji; ilustracje pozostaj\u0105 neutralne.",resetInherited:"U\u017Cyj odziedziczonego koloru karty",resetIntegration:"U\u017Cyj koloru integracji",hide:"Ukryj ten odbi\xF3r",hidden:"Ukryty",local:"Dostosowany",integration:"Integracja",done:"Gotowe",remove:"Przywr\xF3\u0107 ustawienia tego wpisu",matching:"Zaawansowane dopasowanie i ikona",type:"ID kategorii lub dok\u0142adna nazwa kalendarza",binSource:"Encja \u017Ar\xF3d\u0142owa (opcjonalnie)",label:"Dok\u0142adna nazwa pojemnika (opcjonalnie)",icon:"Ikona (mdi:\u2026)",color:"W\u0142asny kolor (#RRGGBB)",advanced:"Ustawienia zaawansowane",advancedOverride:"Dodaj wpis dla kategorii lub brakuj\u0105cego pojemnika",overrideHelp:"U\u017Cyj dok\u0142adnego ID kategorii lub pe\u0142nej nazwy odbioru ze starszych sensor\xF3w i kalendarzy.",addOverride:"Dodaj wpis odbioru",tap:"Akcja po dotkni\u0119ciu",details:"Zobacz harmonogram","more-info":"Szczeg\xF3\u0142y encji",overrideLimit:"Karta obs\u0142uguje do 100 w\u0142asnych wpis\xF3w. Usu\u0144 nieu\u017Cywany wpis przed dodaniem kolejnego.",navigate:"Otw\xF3rz pulpit",none:"Brak akcji",navigationPath:"\u015Acie\u017Cka pulpitu",retry:"Spr\xF3buj ponownie"},zt=i=>i.toLowerCase().startsWith("pl")?ti:ei;var Tt=K`
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
`;function Pt(i){return{...i,entities:b(i),layout:i.layout??"compact",appearance:i.appearance??"native",density:i.density??"comfortable",show_artwork:i.show_artwork??i.layout==="overview",show_source:i.show_source??b(i).length>1}}function It(i,t,e){let n=Object.fromEntries(e.filter(o=>Object.prototype.hasOwnProperty.call(t,o)&&JSON.stringify(i[o])!==JSON.stringify(t[o])).map(o=>[o,t[o]]));return Object.prototype.hasOwnProperty.call(n,"entities")&&(n.entity=void 0),n}var B=class extends _{constructor(){super(...arguments);this.controller=new Z}set hass(e){let n=this.ha;this.ha=e,(!n||n.connection!==e.connection||n.config.time_zone!==e.config.time_zone)&&(this.controller.reset(),this.calendarSnapshot=void 0),(!n||n.connection!==e.connection||n.config.time_zone!==e.config.time_zone||b(this.config??{type:""}).some(o=>n.states[o]!==e.states[o]))&&this.refreshBins(),this.requestUpdate()}get hass(){return this.ha}setConfig(e){let n=this.config;this.config={...e},(!n||JSON.stringify(b(n))!==JSON.stringify(b(e))||n.days_to_show!==e.days_to_show)&&(this.controller.reset(),this.calendarSnapshot=void 0,this.editing=void 0,this.refreshBins()),this.editing!==void 0&&!this.config.overrides?.[this.editing]&&(this.editing=void 0)}connectedCallback(){super.connectedCallback(),this.timer=setInterval(()=>this.refreshBins(),6e4),this.refreshBins()}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.timer),this.controller.cancel()}refreshBins(){if(!(!this.isConnected||!this.ha||!this.config))try{let e=pe({...this.config,overrides:[]});if(!b(e).some(n=>n.startsWith("calendar.")))return;this.controller.update(this.ha,e,n=>{(n.status!=="loading"||!this.calendarSnapshot)&&(this.calendarSnapshot=n)})}catch{}}changed(e){this.setConfig({...this.config,...e}),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this.config},bubbles:!0,composed:!0}))}override(e,n){let o=[...this.config?.overrides??[]];o[e]={...o[e],...n},this.changed({overrides:o})}form(e,n){let o=this.config.type.includes("badge"),r=(l,u)=>({name:l,selector:{select:{options:u.map(h=>({value:h,label:n[h]})),mode:"dropdown"}}}),s=[{name:"entities",required:!0,selector:{entity:{domain:["sensor","calendar"],multiple:!0,include_entities:ve(this.ha,this.config)}}},{name:"title",selector:{text:{}}},r("layout",["compact","hero","schedule","overview"]),r("appearance",["native","modern","minimal"]),r("density",["comfortable","compact"]),{name:"days_to_show",selector:{number:{min:1,max:366,mode:"box"}}},{name:"max_groups",selector:{number:{min:1,max:50,mode:"box"}}},...["show_artwork","show_updated","show_manage_bins","show_source"].map(l=>({name:l,selector:{boolean:{}}})),{name:"locale",selector:{text:{}}}].filter(l=>e.includes(l.name)&&(!o||!["layout","max_groups","show_artwork","show_manage_bins","appearance","density","show_source"].includes(l.name)));if(!s.length)return d;let a=Pt(this.config);return p`<ha-form .hass=${this.ha} .data=${a} .schema=${s}
      .computeLabel=${l=>n[l.name]}
      @value-changed=${l=>{let u=It(a,l.detail.value,s.map(h=>h.name));Object.keys(u).length&&this.changed(u)}}></ha-form>`}editPanel(e,n,o,r){let s=this.editing;if(s===void 0||!this.config.overrides?.[s])return d;let a=this.config.overrides[s],l=wt(a,this.config.overrides),u=n.filter(y=>be(y,a)),h=new Set(u.map(y=>y.color)),c=h.size===1?u[0]?.color:void 0,m=l?.color?`${e.inheritedColor}: ${l.color}`:h.size>1?e.varyingColors:c?`${e.integrationColor}: ${c}`:e.neutralColor,g=a.source&&a.label?o.find(y=>be(y,a)):void 0,f={sourceId:a.source??"",typeId:a.type,originalLabel:a.label??a.type,label:a.name??a.label??a.type},v=M(g??f,r);return p`<fieldset><legend>${v}${a.source?p` · ${C(this.ha,a.source,b(this.config))}`:d}</legend>
      <label>${e.displayName}<input .value=${a.name??""} placeholder=${l?.name??a.label??a.type}
        @input=${y=>this.override(s,{name:y.target.value||void 0})} /></label>
      <label>${e.localColor}<input type="color" .value=${a.color??l?.color??c??"#808080"}
        @input=${y=>this.override(s,{color:y.target.value})} /></label>
      <p>${a.color?`${e.localColorStatus}: ${a.color}`:m}</p>
      ${a.color?p`<button @click=${()=>this.override(s,{color:void 0})}>${l?.color?e.resetInherited:e.resetIntegration}</button>`:d}
      <label class="check"><input type="checkbox" .checked=${a.hidden??l?.hidden??!1}
        @change=${y=>this.override(s,{hidden:y.target.checked})} />${e.hide}</label>
      <details><summary>${e.matching}</summary>
        ${["type","source","label","icon","color"].map(y=>p`<label>${y==="source"?e.binSource:e[y]}<input .value=${a[y]??""}
          @change=${x=>this.override(s,{[y]:x.target.value||void 0})} /></label>`)}
      </details>
      <div class="buttons"><button @click=${()=>{this.editing=void 0}}>${e.done}</button>
        <button @click=${()=>{this.editing=void 0,this.changed({overrides:this.config.overrides.filter((y,x)=>x!==s)})}}>${e.remove}</button></div>
    </fieldset>`}render(){if(!this.config||!this.ha)return d;let e=zt(this.config.locale||this.ha.locale?.language||this.ha.language||"en"),n=$t(this.ha,this.config,this.calendarSnapshot?.events),o=this.config.overrides??[],r=b(this.config),s=n.map(c=>({...c,originalLabel:c.label,label:ne(c,o)?.name??c.label})),a=b(this.config).filter(c=>c.startsWith("sensor.")&&this.ha.states[c]&&!N(this.ha.states[c]).supported),l=o.map((c,m)=>({o:c,index:m})).filter(({o:c})=>!n.some(m=>c.type===(m.typeId??m.label)&&c.source===m.sourceId&&c.label===m.label)),u=l.map(({o:c})=>({sourceId:c.source??"",typeId:c.type,originalLabel:c.label??c.type,label:c.name??c.label??c.type})),h=[...s,...u];return p`<h3>${e.source}</h3>${this.form(["entities","title","layout"],e)}<p>${e.sourceHelp}</p>
      ${a.length?p`<p class="warning" role="status">${a.join(", ")}: ${e.unsupported}</p>`:d}
      ${this.config.type.includes("badge")?d:p`<h3>${e.appearanceSection}</h3>${this.form(["appearance","density","show_artwork","show_source","show_manage_bins"],e)}`}
      <h3>${e.binsSection}</h3><p>${e.binsHelp}</p>
      ${o.length>=100?p`<p role="status">${e.overrideLimit}</p>`:d}
      <div class="bin-list">${n.map((c,m)=>{let g=o.findIndex(y=>y.type===(c.typeId??c.label)&&y.source===c.sourceId&&y.label===c.label),f=ne(c,o),v=M(s[m],h);return p`<button class="bin-row" aria-label=${`${e.customize}: ${v} \xB7 ${C(this.ha,c.sourceId,r)}`} aria-pressed=${g>=0&&this.editing===g} ?disabled=${g<0&&o.length>=100}
          @click=${()=>{g>=0?this.editing=g:(this.changed({overrides:[...o,{type:c.typeId??c.label,source:c.sourceId,label:c.label}]}),this.editing=o.length)}}><span class="swatch" aria-hidden="true" style=${T({"--waste-type-color":f?.color??c.color})}></span>
          <span class="bin-copy"><strong>${v}</strong><small>${C(this.ha,c.sourceId,r)} · ${f?.hidden?e.hidden:f?.hidden!==void 0||f?.color||f?.name||f?.icon?e.local:e.integration}</small></span><span aria-hidden="true">✎</span></button>
          ${g>=0&&this.editing===g?this.editPanel(e,n,s,h):d}`})}${l.map(({o:c,index:m},g)=>p`<button class="bin-row" aria-pressed=${this.editing===m} @click=${()=>{this.editing=m}}>
        <span class="bin-copy"><strong>${M(u[g],h)}</strong><small>${c.source?C(this.ha,c.source,r):e.matching}</small></span><span aria-hidden="true">✎</span></button>
        ${this.editing===m?this.editPanel(e,n,s,h):d}`)}</div>
      ${n.length?d:p`<p>${e.noBins}</p>`}
      ${b(this.config).some(c=>c.startsWith("calendar."))?p`<p>${e.rangeHelp}</p>
        ${!this.calendarSnapshot||this.calendarSnapshot.status==="loading"?p`<p role="status">${e.calendarLoading}</p>`:this.calendarSnapshot.messages.some(c=>c.source.startsWith("calendar."))?p`<p class="warning" role="status">${e.calendarFailed} <button @click=${this.refreshBins}>${e.retry}</button></p>`:d}`:d}
      <details><summary>${e.advanced}</summary>${this.form(["days_to_show","max_groups","show_updated","locale"],e)}
        <label>${e.tap}<select .value=${this.config.tap_action?.action??"details"} @change=${c=>this.changed({tap_action:{action:c.target.value}})}>
          ${["details","more-info","navigate","none"].map(c=>p`<option value=${c}>${e[c]}</option>`)}</select></label>
        ${this.config.tap_action?.action==="navigate"?p`<label>${e.navigationPath}<input .value=${this.config.tap_action.navigation_path??""} placeholder="/lovelace/waste"
          @change=${c=>this.changed({tap_action:{action:"navigate",navigation_path:c.target.value}})} /></label>`:d}
        <details><summary>${e.advancedOverride}</summary><p>${e.overrideHelp}</p><button ?disabled=${o.length>=100} @click=${()=>{this.changed({overrides:[...o,{type:"collection_name"}]}),this.editing=o.length}}>${e.addOverride}</button></details>
      </details>`}};B.properties={config:{state:!0},editing:{state:!0},calendarSnapshot:{state:!0}},B.styles=Tt;var xe=class extends B{};customElements.define("waste-pickup-planner-card",L);customElements.define("waste-pickup-planner-badge",$e);customElements.define("waste-pickup-planner-card-editor",B);customElements.define("waste-pickup-planner-badge-editor",xe);var Ot=window;(Ot.customCards??=[]).push({type:"waste-pickup-planner-card",name:"Waste Pickup Planner",description:"Date-grouped waste collections with compact, hero and schedule layouts.",preview:!0});(Ot.customBadges??=[]).push({type:"waste-pickup-planner-badge",name:"Waste Pickup Planner Badge",description:"The next collection date and types, with schedule details."});
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
