var pe=globalThis,he=pe.ShadowRoot&&(pe.ShadyCSS===void 0||pe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Te=Symbol(),at=new WeakMap,V=class{constructor(t,e,o){if(this._$cssResult$=!0,o!==Te)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(he&&t===void 0){let o=e!==void 0&&e.length===1;o&&(t=at.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&at.set(e,t))}return t}toString(){return this.cssText}},lt=n=>new V(typeof n=="string"?n:n+"",void 0,Te),Y=(n,...t)=>{let e=n.length===1?n[0]:t.reduce((o,i,r)=>o+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+n[r+1],n[0]);return new V(e,n,Te)},ct=(n,t)=>{if(he)n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let o=document.createElement("style"),i=pe.litNonce;i!==void 0&&o.setAttribute("nonce",i),o.textContent=e.cssText,n.appendChild(o)}},Ie=he?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(let o of t.cssRules)e+=o.cssText;return lt(e)})(n):n;var{is:Yt,defineProperty:Qt,getOwnPropertyDescriptor:Xt,getOwnPropertyNames:en,getOwnPropertySymbols:tn,getPrototypeOf:nn}=Object,ue=globalThis,dt=ue.trustedTypes,on=dt?dt.emptyScript:"",rn=ue.reactiveElementPolyfillSupport,Q=(n,t)=>n,De={toAttribute(n,t){switch(t){case Boolean:n=n?on:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},ht=(n,t)=>!Yt(n,t),pt={attribute:!0,type:String,converter:De,reflect:!1,useDefault:!1,hasChanged:ht};Symbol.metadata??=Symbol("metadata"),ue.litPropertyMetadata??=new WeakMap;var S=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=pt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let o=Symbol(),i=this.getPropertyDescriptor(t,o,e);i!==void 0&&Qt(this.prototype,t,i)}}static getPropertyDescriptor(t,e,o){let{get:i,set:r}=Xt(this.prototype,t)??{get(){return this[e]},set(s){this[e]=s}};return{get:i,set(s){let a=i?.call(this);r?.call(this,s),this.requestUpdate(t,a,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??pt}static _$Ei(){if(this.hasOwnProperty(Q("elementProperties")))return;let t=nn(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Q("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Q("properties"))){let e=this.properties,o=[...en(e),...tn(e)];for(let i of o)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[o,i]of e)this.elementProperties.set(o,i)}this._$Eh=new Map;for(let[e,o]of this.elementProperties){let i=this._$Eu(e,o);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let o=new Set(t.flat(1/0).reverse());for(let i of o)e.unshift(Ie(i))}else t!==void 0&&e.push(Ie(t));return e}static _$Eu(t,e){let o=e.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let o of e.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ct(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$ET(t,e){let o=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,o);if(i!==void 0&&o.reflect===!0){let r=(o.converter?.toAttribute!==void 0?o.converter:De).toAttribute(e,o.type);this._$Em=t,r==null?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){let o=this.constructor,i=o._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let r=o.getPropertyOptions(i),s=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:De;this._$Em=i;let a=s.fromAttribute(e,r.type);this[i]=a??this._$Ej?.get(i)??a,this._$Em=null}}requestUpdate(t,e,o,i=!1,r){if(t!==void 0){let s=this.constructor;if(i===!1&&(r=this[t]),o??=s.getPropertyOptions(t),!((o.hasChanged??ht)(r,e)||o.useDefault&&o.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,o))))return;this.C(t,e,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:o,reflect:i,wrapped:r},s){o&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??e??this[t]),r!==!0||s!==void 0)||(this._$AL.has(t)||(this.hasUpdated||o||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,r]of this._$Ep)this[i]=r;this._$Ep=void 0}let o=this.constructor.elementProperties;if(o.size>0)for(let[i,r]of o){let{wrapped:s}=r,a=this[i];s!==!0||this._$AL.has(i)||a===void 0||this.C(i,void 0,r,a)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(o=>o.hostUpdate?.()),this.update(e)):this._$EM()}catch(o){throw t=!1,this._$EM(),o}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[Q("elementProperties")]=new Map,S[Q("finalized")]=new Map,rn?.({ReactiveElement:S}),(ue.reactiveElementVersions??=[]).push("2.1.2");var Ue=globalThis,ut=n=>n,me=Ue.trustedTypes,mt=me?me.createPolicy("lit-html",{createHTML:n=>n}):void 0,wt="$lit$",I=`lit$${Math.random().toFixed(9).slice(2)}$`,xt="?"+I,sn=`<${xt}>`,H=document,ee=()=>H.createComment(""),te=n=>n===null||typeof n!="object"&&typeof n!="function",Le=Array.isArray,an=n=>Le(n)||typeof n?.[Symbol.iterator]=="function",Pe=`[ 	
\f\r]`,X=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,gt=/-->/g,ft=/>/g,j=RegExp(`>|${Pe}(?:([^\\s"'>=/]+)(${Pe}*=${Pe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),yt=/'/g,bt=/"/g,$t=/^(?:script|style|textarea|title)$/i,Be=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),p=Be(1),Sn=Be(2),En=Be(3),E=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),vt=new WeakMap,O=H.createTreeWalker(H,129);function _t(n,t){if(!Le(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return mt!==void 0?mt.createHTML(t):t}var ln=(n,t)=>{let e=n.length-1,o=[],i,r=t===2?"<svg>":t===3?"<math>":"",s=X;for(let a=0;a<e;a++){let c=n[a],d,u,l=-1,g=0;for(;g<c.length&&(s.lastIndex=g,u=s.exec(c),u!==null);)g=s.lastIndex,s===X?u[1]==="!--"?s=gt:u[1]!==void 0?s=ft:u[2]!==void 0?($t.test(u[2])&&(i=RegExp("</"+u[2],"g")),s=j):u[3]!==void 0&&(s=j):s===j?u[0]===">"?(s=i??X,l=-1):u[1]===void 0?l=-2:(l=s.lastIndex-u[2].length,d=u[1],s=u[3]===void 0?j:u[3]==='"'?bt:yt):s===bt||s===yt?s=j:s===gt||s===ft?s=X:(s=j,i=void 0);let m=s===j&&n[a+1].startsWith("/>")?" ":"";r+=s===X?c+sn:l>=0?(o.push(d),c.slice(0,l)+wt+c.slice(l)+I+m):c+I+(l===-2?a:m)}return[_t(n,r+(n[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),o]},ne=class n{constructor({strings:t,_$litType$:e},o){let i;this.parts=[];let r=0,s=0,a=t.length-1,c=this.parts,[d,u]=ln(t,e);if(this.el=n.createElement(d,o),O.currentNode=this.el.content,e===2||e===3){let l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(i=O.nextNode())!==null&&c.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(let l of i.getAttributeNames())if(l.endsWith(wt)){let g=u[s++],m=i.getAttribute(l).split(I),w=/([.?@])?(.*)/.exec(g);c.push({type:1,index:r,name:w[2],strings:m,ctor:w[1]==="."?Oe:w[1]==="?"?He:w[1]==="@"?Me:Z}),i.removeAttribute(l)}else l.startsWith(I)&&(c.push({type:6,index:r}),i.removeAttribute(l));if($t.test(i.tagName)){let l=i.textContent.split(I),g=l.length-1;if(g>0){i.textContent=me?me.emptyScript:"";for(let m=0;m<g;m++)i.append(l[m],ee()),O.nextNode(),c.push({type:2,index:++r});i.append(l[g],ee())}}}else if(i.nodeType===8)if(i.data===xt)c.push({type:2,index:r});else{let l=-1;for(;(l=i.data.indexOf(I,l+1))!==-1;)c.push({type:7,index:r}),l+=I.length-1}r++}}static createElement(t,e){let o=H.createElement("template");return o.innerHTML=t,o}};function F(n,t,e=n,o){if(t===E)return t;let i=o!==void 0?e._$Co?.[o]:e._$Cl,r=te(t)?void 0:t._$litDirective$;return i?.constructor!==r&&(i?._$AO?.(!1),r===void 0?i=void 0:(i=new r(n),i._$AT(n,e,o)),o!==void 0?(e._$Co??=[])[o]=i:e._$Cl=i),i!==void 0&&(t=F(n,i._$AS(n,t.values),i,o)),t}var je=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:o}=this._$AD,i=(t?.creationScope??H).importNode(e,!0);O.currentNode=i;let r=O.nextNode(),s=0,a=0,c=o[0];for(;c!==void 0;){if(s===c.index){let d;c.type===2?d=new oe(r,r.nextSibling,this,t):c.type===1?d=new c.ctor(r,c.name,c.strings,this,t):c.type===6&&(d=new Ne(r,this,t)),this._$AV.push(d),c=o[++a]}s!==c?.index&&(r=O.nextNode(),s++)}return O.currentNode=H,i}p(t){let e=0;for(let o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}},oe=class n{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,o,i){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=F(this,t,e),te(t)?t===h||t==null||t===""?(this._$AH!==h&&this._$AR(),this._$AH=h):t!==this._$AH&&t!==E&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):an(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==h&&te(this._$AH)?this._$AA.nextSibling.data=t:this.T(H.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:o}=t,i=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=ne.createElement(_t(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(e);else{let r=new je(i,this),s=r.u(this.options);r.p(e),this.T(s),this._$AH=r}}_$AC(t){let e=vt.get(t.strings);return e===void 0&&vt.set(t.strings,e=new ne(t)),e}k(t){Le(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,o,i=0;for(let r of t)i===e.length?e.push(o=new n(this.O(ee()),this.O(ee()),this,this.options)):o=e[i],o._$AI(r),i++;i<e.length&&(this._$AR(o&&o._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let o=ut(t).nextSibling;ut(t).remove(),t=o}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},Z=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,o,i,r){this.type=1,this._$AH=h,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=h}_$AI(t,e=this,o,i){let r=this.strings,s=!1;if(r===void 0)t=F(this,t,e,0),s=!te(t)||t!==this._$AH&&t!==E,s&&(this._$AH=t);else{let a=t,c,d;for(t=r[0],c=0;c<r.length-1;c++)d=F(this,a[o+c],e,c),d===E&&(d=this._$AH[c]),s||=!te(d)||d!==this._$AH[c],d===h?t=h:t!==h&&(t+=(d??"")+r[c+1]),this._$AH[c]=d}s&&!i&&this.j(t)}j(t){t===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Oe=class extends Z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===h?void 0:t}},He=class extends Z{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==h)}},Me=class extends Z{constructor(t,e,o,i,r){super(t,e,o,i,r),this.type=5}_$AI(t,e=this){if((t=F(this,t,e,0)??h)===E)return;let o=this._$AH,i=t===h&&o!==h||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,r=t!==h&&(o===h||i);i&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Ne=class{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){F(this,t)}};var cn=Ue.litHtmlPolyfillSupport;cn?.(ne,oe),(Ue.litHtmlVersions??=[]).push("3.3.3");var kt=(n,t,e)=>{let o=e?.renderBefore??t,i=o._$litPart$;if(i===void 0){let r=e?.renderBefore??null;o._$litPart$=i=new oe(t.insertBefore(ee(),r),r,void 0,e??{})}return i._$AI(n),i};var Re=globalThis,k=class extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=kt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return E}};k._$litElement$=!0,k.finalized=!0,Re.litElementHydrateSupport?.({LitElement:k});var dn=Re.litElementPolyfillSupport;dn?.({LitElement:k});(Re.litElementVersions??=[]).push("4.2.2");var We=n=>typeof n=="string"&&/^#[\da-f]{6}$/i.test(n),Fe=n=>typeof n=="string"&&/^mdi:[a-z0-9-]+$/.test(n);function y(n){return[...new Set(n.entities??(n.entity?[n.entity]:[]))]}function ge(n){if(!n||typeof n!="object")throw new Error("Choose a waste sensor or calendar.");if(n.entities!==void 0&&(!Array.isArray(n.entities)||n.entities.some(e=>typeof e!="string")))throw new Error("entities must be an array of entity IDs.");if(n.entity&&n.entities)throw new Error("Use entity or entities, not both.");let t=y(n);if(!t.length||t.length>12||t.some(e=>!/^(sensor|calendar)\.[a-z0-9_]+$/.test(e)))throw new Error("Choose 1\u201312 sensor or calendar entities.");if(n.layout!==void 0&&!["compact","hero","schedule","overview","wall"].includes(n.layout))throw new Error("Unknown layout.");if(n.appearance!==void 0&&!["native","modern","minimal"].includes(n.appearance))throw new Error("Unknown appearance.");if(n.density!==void 0&&!["comfortable","compact"].includes(n.density))throw new Error("Unknown density.");for(let[e,o]of[["days_to_show",366],["max_groups",50]]){let i=n[e];if(i!==void 0&&(!Number.isInteger(i)||i<1||i>o))throw new Error(`${e} must be 1\u2013${o}.`)}if(n.evening_hour!==void 0&&(!Number.isInteger(n.evening_hour)||n.evening_hour<0||n.evening_hour>23))throw new Error("evening_hour must be a whole hour, 0\u201323.");for(let e of["show_artwork","show_updated","show_manage_bins","show_source","show_strip"])if(n[e]!==void 0&&typeof n[e]!="boolean")throw new Error(`${e} must be true or false.`);if(n.title!==void 0&&typeof n.title!="string")throw new Error("title must be text.");if(n.locale!==void 0){if(typeof n.locale!="string")throw new Error("locale must be a language code.");new Intl.DateTimeFormat(n.locale)}if(n.overrides!==void 0){if(!Array.isArray(n.overrides)||n.overrides.length>100)throw new Error("overrides must contain at most 100 types.");for(let e of n.overrides)if(!e||typeof e.type!="string"||!e.type.trim()||e.source!==void 0&&(typeof e.source!="string"||!/^(sensor|calendar)\.[a-z0-9_]+$/.test(e.source))||e.label!==void 0&&(typeof e.label!="string"||!e.label.trim())||e.name!==void 0&&(typeof e.name!="string"||!e.name.trim())||e.hidden!==void 0&&typeof e.hidden!="boolean"||e.color!==void 0&&!We(e.color)||e.icon!==void 0&&!Fe(e.icon))throw new Error("Invalid type override. Use an exact type ID or name, mdi icon, and #RRGGBB color.")}if(n.tap_action){if(!["details","more-info","navigate","none"].includes(n.tap_action.action))throw new Error("Unsupported tap action.");if(n.tap_action.action==="navigate"&&(typeof n.tap_action.navigation_path!="string"||!/^\/(?!\/)/.test(n.tap_action.navigation_path)||/[\\\u0000-\u001f]/.test(n.tap_action.navigation_path)))throw new Error("Navigation requires a local path beginning with /.")}return{...n,entities:n.entities?[...n.entities]:void 0,layout:n.layout??"compact",days_to_show:n.days_to_show??30,max_groups:n.max_groups??5}}function fe(n){if(typeof n!="string"||!/^\d{4}-\d{2}-\d{2}$/.test(n))return!1;let t=new Date(`${n}T12:00:00Z`);return Number.isFinite(t.getTime())&&t.toISOString().slice(0,10)===n}function G(n,t){let e=new Intl.DateTimeFormat("en-CA",{timeZone:t,year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(n),o=i=>e.find(r=>r.type===i).value;return`${o("year")}-${o("month")}-${o("day")}`}function Ct(n,t){let e=new Intl.DateTimeFormat("en-GB",{timeZone:t,hour:"numeric",hourCycle:"h23"}).formatToParts(n).find(o=>o.type==="hour").value;return Number(e)%24}function pn(n,t,e,o=18){let i=M(t,n);return i===0?"today":i===1&&e>=o?"tonight":"upcoming"}function St(n,t,e,o=18){if(n.length){if(e>=o){let i=n.findIndex(r=>M(t,r.date)===1);if(i>=0)return{group:n[i],index:i,moment:"tonight"}}return{group:n[0],index:0,moment:pn(n[0].date,t,e,o)}}}function re(n,t){let e=new Date(`${n}T12:00:00Z`);return e.setUTCDate(e.getUTCDate()+t),e.toISOString().slice(0,10)}function M(n,t){return Math.round((Date.parse(`${t}T12:00:00Z`)-Date.parse(`${n}T12:00:00Z`))/864e5)}var q=(n,t)=>n.charAt(0).toLocaleUpperCase(t)+n.slice(1);function N(n,t,e){let o=M(t,n);return q(o<=1&&o>=0?new Intl.RelativeTimeFormat(e,{numeric:"auto"}).format(o,"day"):new Intl.DateTimeFormat(e,{weekday:"long",day:"numeric",month:"short",timeZone:"UTC"}).format(new Date(`${n}T12:00:00Z`)),e)}function ie(n,t,e){return new Intl.RelativeTimeFormat(e,{numeric:"auto"}).format(M(t,n),"day")}function ye(n,t){return new Intl.DateTimeFormat(t,{weekday:"short",day:"numeric",month:"short",timeZone:"UTC"}).format(new Date(`${n}T12:00:00Z`))}function Ze(n,t,e){let o=M(t,n);return q(o>=0&&o<=1?ye(n,e):ie(n,t,e),e)}function qe(n,t,e){let o=M(t,n);if(o>=0&&o<=1)return q(ie(n,t,e),e);let i=new Intl.DateTimeFormat(e,{weekday:"long",timeZone:"UTC"}).format(new Date(`${n}T12:00:00Z`));return q(`${i} \xB7 ${ie(n,t,e)}`,e)}function Ge(n,t,e){let o=new Intl.DateTimeFormat(e,{weekday:"long",day:"numeric",month:"long",timeZone:"UTC"}).format(new Date(`${n}T12:00:00Z`)),i=M(t,n);return i>=0&&i<=1?`${q(ie(n,t,e),e)} \xB7 ${o}`:`${q(o,e)} \xB7 ${ie(n,t,e)}`}function Et(n,t,e){return new Intl.DateTimeFormat(t,{dateStyle:"medium",timeStyle:"short",timeZone:e}).format(new Date(n))}var be=n=>n!==null&&typeof n=="object"&&!Array.isArray(n)?n:void 0,Je=n=>typeof n=="string"&&n.trim()?n:void 0;function Ke(n,t,e){let o=n.date??e,i=Je(n.type);if(!(!fe(o)||!i))return{sourceId:t,entityId:t,date:o,label:i,typeId:Je(n.type_id),icon:Fe(n.icon)?n.icon:void 0,color:We(n.color)?n.color:void 0,colorSource:["source","customize","default"].includes(String(n.color_source))?n.color_source:void 0}}function A(n){let t=n.attributes,e="upcoming"in t?t.upcoming:"upcoming_pickups"in t?t.upcoming_pickups:"next_pickup"in t?t.next_pickup===null?[]:[t.next_pickup]:void 0;if(!Array.isArray(e))return{events:[],supported:!1,invalid:e!==void 0};let o=[],i=e.length>2e3;for(let s of e.slice(0,2e3)){if(o.length>=2e3){i=!0;break}let a=be(s);if(!a||!fe(a.date)){i=!0;continue}if(Array.isArray(a.collections)){a.collections.length>100&&(i=!0);for(let c of a.collections.slice(0,100)){let d=be(c),u=d&&Ke(d,n.entity_id,a.date);u?o.push(u):i=!0}}else if(Array.isArray(a.types)){a.types.length>100&&(i=!0);for(let c of a.types.slice(0,100)){let d=Ke({...a,type:c,color:void 0,color_source:void 0,type_id:void 0},n.entity_id);d?o.push(d):i=!0}}else{let c=Ke(a,n.entity_id);c?o.push(c):i=!0}}let r=typeof t.last_update=="string"&&/^\d{4}-\d{2}-\d{2}T/.test(t.last_update)&&/(?:Z|[+-]\d{2}:\d{2})$/.test(t.last_update)&&Number.isFinite(Date.parse(t.last_update))?t.last_update:void 0;return{events:o.slice(0,2e3),supported:!0,invalid:i||o.length>2e3,fetchedAt:r}}function At(n,t,e){if(!Array.isArray(n)||n.length>1e4)throw new Error("Invalid calendar response.");return n.flatMap(o=>{let i=be(o),r=be(i?.start),s=Je(i?.summary);if(!r||!s)return[];let a;return fe(r.date)?a=r.date:typeof r.dateTime=="string"&&/(?:Z|[+-]\d{2}:\d{2})$/.test(r.dateTime)&&Number.isFinite(Date.parse(r.dateTime))&&(a=G(new Date(r.dateTime),e)),a?[{sourceId:t,entityId:t,date:a,label:s}]:[]})}var zt=new WeakMap;function Ve(n,t,e,o){let i=zt.get(n.connection);i||(i=new Map,zt.set(n.connection,i));let r=JSON.stringify([t,e,o]),s=n.states[t]?.last_updated,a=i.get(r);if(a?.pending){if(a.stamp===s)return a.promise;let l=()=>Ve(n,t,e,o);return a.promise.then(l,l)}if(a&&a.stamp===s&&a.expires>Date.now())return a.promise;for(let[l,g]of i)!g.pending&&g.expires<=Date.now()&&i.delete(l);if(!i.has(r)&&i.size>=100){let l=[...i].find(([,g])=>!g.pending);if(l)i.delete(l[0]);else return Promise.reject(new Error("Too many calendar requests are pending."))}let c=new URLSearchParams({start:`${e}T00:00:00+14:00`,end:`${o}T00:00:00-12:00`}),d=n.callApi("GET",`calendars/${encodeURIComponent(t)}?${c}`),u={promise:d,expires:1/0,pending:!0,stamp:s};return i.set(r,u),d.then(()=>{u.pending=!1,u.expires=Date.now()+6e4},()=>{i.get(r)===u&&i.delete(r)}),d}function _(n,t,e=[t]){let o=r=>{let s=n?.states[r]?.attributes.friendly_name;return typeof s=="string"&&s.trim()?s.trim():r},i=o(t);return e.some(r=>r!==t&&o(r)===i)?`${i} \xB7 ${t}`:i}function Tt(n){let t;try{t=new Intl.Collator(n)}catch{t=new Intl.Collator("en")}return(e,o)=>t.compare(e.label,o.label)||(e.sourceId<o.sourceId?-1:e.sourceId>o.sourceId?1:0)}function se(n="en"){let t=Tt(n);return(e,o)=>(e.date<o.date?-1:e.date>o.date?1:0)||t(e,o)}var $=n=>JSON.stringify([n.sourceId,n.typeId??n.originalLabel??n.label,n.originalLabel??n.label]);function U(n,t){let e=t.filter(s=>s.sourceId===n.sourceId&&s.label===n.label&&$(s)!==$(n));if(!e.length)return n.label;let o=n.originalLabel??n.label,r=e.some(s=>(s.originalLabel??s.label)===o)?n.typeId??o:o;return r===n.label?n.label:`${n.label} \xB7 ${r}`}var we=(n,t)=>t.type===(n.typeId??n.originalLabel??n.label)&&(t.source===void 0||t.source===n.sourceId)&&(t.label===void 0||t.label===(n.originalLabel??n.label)),ve=n=>+(n.source!==void 0)+ +(n.label!==void 0)*2;function It(n){let t=new Map;for(let e of n)t.has(ve(e))||t.set(ve(e),e);return n.length?[...t.entries()].sort(([e],[o])=>e-o).reduce((e,[,o])=>({...e,...Object.fromEntries(Object.entries(o).filter(([,i])=>i!==void 0))}),{}):void 0}function ae(n,t=[]){return It(t.filter(e=>we(n,e)))}function Dt(n,t=[]){return It(t.filter(e=>e.type===n.type&&ve(e)<ve(n)&&(e.source===void 0||e.source===n.source)&&(e.label===void 0||e.label===n.label)))}function xe(n,t){return[...new Set([...y(t),...Object.values(n.states).filter(e=>e.entity_id.startsWith("calendar.")||e.entity_id.startsWith("sensor.")&&(()=>{let o=A(e);return o.supported&&!o.invalid})()).map(e=>e.entity_id)])]}function hn(n,t,e){let o=n.entities?.[t]?.device_id;return!!o&&(o===e||n.devices?.[o]?.via_device_id===e)}function Pt(n,t){let e=y(t);return e.filter(o=>o.startsWith("calendar.")).flatMap(o=>{let i=n.entities?.[o]?.device_id;if(!i)return[];let r=Object.values(n.states).filter(s=>s.entity_id.startsWith("sensor.")&&!["unavailable","unknown"].includes(s.state)&&!e.includes(s.entity_id)&&hn(n,s.entity_id,i)).map(s=>({id:s.entity_id,result:A(s)})).filter(({result:s})=>s.supported&&!s.invalid&&s.events.length>0).map(({id:s,result:a})=>({id:s,types:new Set(a.events.map(c=>c.typeId??c.label)).size})).sort((s,a)=>a.types-s.types||s.id.localeCompare(a.id))[0];return r?[{calendar:o,sensor:r.id}]:[]})}function jt(n,t,e,o){let i=n.states[o]?A(n.states[o]).events:[],r=t.overrides??[];return{entity:void 0,entities:y(t).map(s=>s===e?o:s),overrides:r.map(s=>{if(s.source!==e||!s.label)return s;let a=[...new Map(i.filter(d=>d.label===s.label).map(d=>[$(d),d])).values()],c=a[0]?.typeId??a[0]?.label;return a.length!==1||r.some(d=>d.source===o&&d.label===s.label)?s:{...s,type:c,source:o}})}}function Ot(n,t,e=[]){let o=new Map;for(let r of y(t)){let s=n.states[r];if(!(!s||!r.startsWith("sensor.")))for(let a of A(s).events)o.has($(a))||o.set($(a),a)}let i=new Set(y(t));for(let r of e)r.sourceId.startsWith("calendar.")&&i.has(r.sourceId)&&!o.has($(r))&&o.set($(r),r);return[...o.values()].sort(Tt(t.locale||n.locale?.language||n.language||"en"))}function Ht(n,t="en"){let e=new Map;for(let o of n){let i=e.get($(o));(!i||o.date<i.date)&&e.set($(o),o)}return[...e.values()].sort(se(t))}function Mt(n,t,e,o){let i=new Map;for(let r of n){if(r.date<e||r.date>=o)continue;let s=ae(r,t.overrides);if(s?.hidden)continue;let a=JSON.stringify([$(r),r.date,r.color,r.colorSource,r.icon]);i.has(a)||i.set(a,{...r,originalLabel:r.originalLabel??r.label,label:s?.name??r.label,color:s?.color??r.color,colorSource:s?.color?"customize":r.colorSource,icon:s?.icon??r.icon})}return[...i.values()].sort(se(t.locale))}function Ye(n){let t=new Map;for(let e of n){let o=t.get(e.date)??[];o.push(e),t.set(e.date,o)}return[...t].map(([e,o])=>({date:e,events:o}))}function L(n){return n.colorSource==="source"||n.colorSource==="customize"?n.color:void 0}var K=class{constructor(){this.generation=0;this.cache=new Map}reset(){this.generation++,this.cache.clear(),this.connection=void 0,this.timeZone=void 0}cancel(){this.generation++}async update(t,e,o){(this.connection!==t.connection||this.timeZone!==t.config.time_zone)&&(this.cache.clear(),this.connection=t.connection,this.timeZone=t.config.time_zone);let i=++this.generation,r=t.config.time_zone,s=G(new Date,r),a=re(s,e.days_to_show),c={rangeStart:s,rangeEnd:a,timeZone:r,messages:[]};o({...c,status:"loading",events:[]});let d=0,u=0,l=0,g=[],m=[];if(await Promise.all(y(e).map(async b=>{let f="sourceLoadFailed";try{let v=t.states[b];if(!v||v.state==="unavailable"||b.startsWith("calendar.")&&v.state==="unknown")throw f="sourceUnavailable",new Error(f);let W,T;if(b.startsWith("calendar."))W=At(await Ve(t,b,s,a),b,r);else{let D=A(v);if(!D.supported)throw f="sourceUnsupported",new Error(f);if(D.invalid)throw f="sourceInvalid",new Error(f);W=D.events,T=D.fetchedAt}if(i!==this.generation)return;this.cache.set(b,{events:W,fetchedAt:T}),T&&m.push(T),g.push(...W),u++}catch{if(i!==this.generation)return;d++,c.messages.push({source:b,reason:f});let v=this.cache.get(b);v&&(l++,g.push(...v.events),v.fetchedAt&&m.push(v.fetchedAt))}})),i!==this.generation)return;let w=Mt(g,e,s,a);o({...c,events:w,status:d?l||u?"stale":"unavailable":w.length?"ready":"empty",fetchedAt:m.sort((b,f)=>Date.parse(b)-Date.parse(f))[0]})}};var Nt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ut=n=>(...t)=>({_$litDirective$:n,values:t}),$e=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var Lt="important",un=" !"+Lt,z=Ut(class extends $e{constructor(n){if(super(n),n.type!==Nt.ATTRIBUTE||n.name!=="style"||n.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(n){return Object.keys(n).reduce((t,e)=>{let o=n[e];return o==null?t:t+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(n,[t]){let{style:e}=n.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let o of this.ft)t[o]==null&&(this.ft.delete(o),o.includes("-")?e.removeProperty(o):e[o]=null);for(let o in t){let i=t[o];if(i!=null){this.ft.add(o);let r=typeof i=="string"&&i.endsWith(un);o.includes("-")||r?e.setProperty(o,r?i.slice(0,-11):i,r?Lt:""):e[o]=i}}return E}});var mn={title:"Waste collection",next:"Next collection",putOutTonight:"Put out tonight",collectedTomorrow:"Collected tomorrow",comingDays:"Coming days",schedule:"Collection schedule",close:"Close",loading:"Loading schedule\u2026",empty:"No collections in this date range",partialEmpty:"No dates from the available sources",unavailable:"Schedule unavailable",stale:"Some sources are unavailable. Dates may be out of date.",staleBadge:"Out of date",collections:"collections",updated:"Provider updated",details:"View schedule",manageBins:"Manage bins",today:"Today",more:"more",previousPage:"Previous page",nextPage:"Next page",yourBins:"Your bins",upcoming:"Upcoming collections",clearFilter:"Show all bins",filterHint:"Select a bin to filter the schedule",ready:"Schedule available",sources:"Sources",binPage:"Bin pages",sourceUnavailable:"Source unavailable. Check the entity in Home Assistant.",sourceUnsupported:"Select a sensor with Generic details or a calendar.",sourceInvalid:"Invalid collection records. Check the source integration.",sourceLoadFailed:"Could not load this source. Check the entity and connection in Home Assistant."},gn={title:"Odbi\xF3r odpad\xF3w",next:"Najbli\u017Cszy odbi\xF3r",putOutTonight:"Wystaw dzi\u015B wieczorem",collectedTomorrow:"Odbi\xF3r jutro",comingDays:"Najbli\u017Csze dni",schedule:"Harmonogram odbioru",close:"Zamknij",loading:"\u0141adowanie harmonogramu\u2026",empty:"Brak odbior\xF3w w tym zakresie dat",partialEmpty:"Brak termin\xF3w z dost\u0119pnych \u017Ar\xF3de\u0142",unavailable:"Harmonogram niedost\u0119pny",stale:"Niekt\xF3re \u017Ar\xF3d\u0142a s\u0105 niedost\u0119pne. Terminy mog\u0105 by\u0107 nieaktualne.",staleBadge:"Nieaktualne",collections:"frakcje",updated:"Aktualizacja \u017Ar\xF3d\u0142a",details:"Zobacz harmonogram",manageBins:"Zarz\u0105dzaj pojemnikami",today:"Dzisiaj",more:"wi\u0119cej",previousPage:"Poprzednia strona",nextPage:"Nast\u0119pna strona",yourBins:"Twoje pojemniki",upcoming:"Nadchodz\u0105ce odbiory",clearFilter:"Poka\u017C wszystkie pojemniki",filterHint:"Wybierz pojemnik, aby filtrowa\u0107 harmonogram",ready:"Harmonogram dost\u0119pny",sources:"\u0179r\xF3d\u0142a",binPage:"Strony pojemnik\xF3w",sourceUnavailable:"\u0179r\xF3d\u0142o niedost\u0119pne. Sprawd\u017A encj\u0119 w Home Assistant.",sourceUnsupported:"Wybierz sensor z danymi Generic lub kalendarz.",sourceInvalid:"Nieprawid\u0142owe dane odbior\xF3w. Sprawd\u017A integracj\u0119 \u017Ar\xF3d\u0142ow\u0105.",sourceLoadFailed:"Nie uda\u0142o si\u0119 wczyta\u0107 \u017Ar\xF3d\u0142a. Sprawd\u017A encj\u0119 i po\u0142\u0105czenie w Home Assistant."},C=n=>n.toLowerCase().startsWith("pl")?gn:mn,Qe=(n,t)=>`${n.source}: ${C(t)[n.reason]}`;function fn(n){let t=/^#([\da-f]{3}|[\da-f]{6})$/i.exec(n.trim())?.[1];if(t){let o=t.length===3?[...t].map(i=>i+i).join(""):t;return[0,2,4].map(i=>parseInt(o.slice(i,i+2),16))}let e=/^rgba?\(\s*(\d+)[\s,]+(\d+)[\s,]+(\d+)/i.exec(n.trim());return e?[Number(e[1]),Number(e[2]),Number(e[3])]:void 0}var Bt=([n,t,e])=>{let[o,i,r]=[n,t,e].map(s=>{let a=s/255;return a<=.03928?a/12.92:((a+.055)/1.055)**2.4});return .2126*o+.7152*i+.0722*r},yn="#1f1f1f",bn=Bt([31,31,31]);function vn(n){let t=fn(n);if(!t)return"#fff";let e=Bt(t),o=1.05/(e+.05);return(e+.05)/(bn+.05)>o?yn:"#fff"}var _e=n=>{let t=L(n);return p`<span class=${`swatch${t?"":" neutral"}`} aria-hidden="true"
    style=${z(t?{"--waste-type-color":t,"--waste-icon-color":vn(t)}:{})}><ha-icon
    .icon=${n.icon??"mdi:trash-can-outline"}></ha-icon></span>`},Xe=(n,t,e=6)=>p`<div class="chips">
    ${n.slice(0,e).map(o=>p`<span class="chip">${_e(o)}<span>${o.label}</span></span>`)}
    ${n.length>e?p`<span class="chip overflow">+${new Intl.NumberFormat(t).format(n.length-e)} ${C(t).more}</span>`:h}
  </div>`,et=n=>p`<div class="bins" aria-hidden="true">
    ${n.slice(0,3).map(t=>p`<div
          class="bin"
          style=${z({"--waste-type-color":L(t)})}
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
  </div>`,ke=n=>{let{group:t,today:e,locale:o,moment:i}=n,r=C(o),s=i==="tonight";return p`<div class=${`primary${n.className?` ${n.className}`:""}${s?" tonight":""}`}>
    <div class="copy">
      <div class="eyebrow">${s?p`<ha-icon aria-hidden="true" icon="mdi:weather-night"></ha-icon>`:h}${r.next}</div>
      <span class="date">${s?r.putOutTonight:N(t.date,e,o)}</span>${Xe(t.events,o)}
      <p class="full-date">${s?`${r.collectedTomorrow} \xB7 ${ye(t.date,o)}`:Ze(t.date,e,o)}</p>
    </div>
    ${n.artwork?et(t.events):h}
  </div>`},le=(n,t,e,o=14)=>{let i=new Map;for(let u of n)i.set(u.date,[...i.get(u.date)??[],u]);let r=new Intl.DateTimeFormat(e,{weekday:"narrow",timeZone:"UTC"}),s=new Intl.DateTimeFormat(e,{day:"numeric",timeZone:"UTC"}),a=3,c=new Intl.DateTimeFormat(e,{weekday:"long",day:"numeric",month:"long",timeZone:"UTC"}),d=Array.from({length:o},(u,l)=>re(t,l)).filter(u=>i.has(u));return p`${d.length?p`<div class="sr-only"><p>${C(e).comingDays}</p><ul>${d.map(u=>p`<li>${c.format(new Date(`${u}T12:00:00Z`))}: ${i.get(u).map(l=>l.label).join(", ")}</li>`)}</ul></div>`:h}
  <div class="strip" aria-hidden="true">
    ${Array.from({length:o},(u,l)=>{let g=re(t,l),m=i.get(g)??[],w=new Date(`${g}T12:00:00Z`),b=m.length-a;return p`<div class=${`strip-day${l===0?" today":""}${m.length?" has-pickup":""}`}>
        <span class="strip-weekday">${r.format(w)}</span>
        <span class="strip-date">${s.format(w)}</span>
        <span class="strip-dots">${m.slice(0,b>0?a-1:a).map(f=>{let v=L(f);return p`<span class=${`strip-dot${v?"":" neutral"}`} style=${z(v?{"--waste-type-color":v}:{})}></span>`})}${b>0?p`<span class="strip-more">+${new Intl.NumberFormat(e).format(b+1)}</span>`:h}</span>
      </div>`})}
  </div>`},Rt=n=>{let{group:t,later:e,today:o,locale:i}=n,r=C(i),s=n.moment==="tonight",a=t.events.length>6?5:6;return p`<div class=${`wall-now${s?" tonight":""}`}>
      <div class="eyebrow">${s?p`<ha-icon aria-hidden="true" icon="mdi:weather-night"></ha-icon>`:h}${r.next}</div>
      <span class="wall-date">${s?r.putOutTonight:N(t.date,o,i)}</span>
      <p class="full-date">${s?`${r.collectedTomorrow} \xB7 ${ye(t.date,i)}`:Ze(t.date,o,i)}</p>
    </div>
    <ul class="wall-bins">
      ${t.events.slice(0,a).map(c=>{let d=L(c);return p`<li class=${`wall-bin${d?"":" neutral"}`} style=${z(d?{"--waste-type-color":d}:{})}>${_e(c)}<span>${c.label}</span></li>`})}
      ${t.events.length>a?p`<li class="wall-bin neutral overflow">+${new Intl.NumberFormat(i).format(t.events.length-a)} ${r.more}</li>`:h}
    </ul>
    ${e.length?p`<ol class="wall-later">${e.map(c=>p`<li>
      <span class="sr-only">${Ge(c.date,o,i)}</span>
      <span class="wall-later-date" aria-hidden="true">${qe(c.date,o,i)}</span>
      ${Xe(c.events,i,3)}
    </li>`)}</ol>`:h}`},J=(n,t,e,o=6)=>p`${n.map(i=>{let r=new Date(`${i.date}T12:00:00Z`);return p`<div class="group">
      <div class="day" aria-hidden="true">
        ${new Intl.DateTimeFormat(e,{month:"short",timeZone:"UTC"}).format(r)}<strong
          >${new Intl.DateTimeFormat(e,{day:"numeric",timeZone:"UTC"}).format(r)}</strong
        >
      </div>
      <div class="group-body">
        <div class="group-date"><span class="sr-only">${Ge(i.date,t,e)}</span><span
          aria-hidden="true">${qe(i.date,t,e)}</span></div>
        ${Xe(i.events,e,o)}
      </div>
    </div>`})}`;var Wt=Y`
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
  /* Tapping anywhere on the card opens the schedule, like Home Assistant's own cards.
     The button covers the card behind its content; the content lets clicks through. */
  .surface.tappable > :not(.surface-action, .sr-only) {
    position: relative;
    pointer-events: none;
  }
  .surface-action {
    position: absolute;
    inset: 0;
    margin: 0;
    padding: 0;
    border: 0;
    background: transparent;
  }
  .surface-action:hover {
    background: color-mix(in srgb, var(--primary-text-color, #212121) 3%, transparent);
  }
  .surface-action:focus-visible {
    outline: 3px solid var(--primary-color, #03a9f4);
    outline-offset: -3px;
  }
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
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
  /* From the evening before: the card asks you to put the bins out. */
  .primary.tonight .eyebrow {
    display: flex;
    align-items: center;
    gap: 6px;
    color: var(--primary-color, #03a9f4);
  }
  .primary.tonight .eyebrow ha-icon {
    --mdc-icon-size: 16px;
  }
  .strip {
    display: grid;
    grid-template-columns: repeat(14, minmax(0, 1fr));
    gap: 2px;
    margin-top: 18px;
    padding: 8px 4px;
    border-radius: 12px;
    background: color-mix(in srgb, var(--primary-text-color, #212121) 4%, transparent);
  }
  .strip-day {
    display: grid;
    justify-items: center;
    gap: 3px;
    min-width: 0;
    padding: 4px 0;
    border-radius: 8px;
    color: var(--secondary-text-color, #727272);
    font-size: 11px;
    line-height: 1.1;
  }
  .strip-day.today {
    color: var(--primary-text-color, #212121);
    box-shadow: inset 0 0 0 1px var(--primary-color, #03a9f4);
  }
  .strip-day.has-pickup .strip-date {
    color: var(--primary-text-color, #212121);
    font-weight: 600;
  }
  .strip-date {
    font-size: 12px;
  }
  /* Dots stack so each day stays one narrow column, whatever the card width. */
  .strip-dots {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    min-height: 25px;
  }
  .strip-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--waste-type-color);
  }
  .strip-dot.neutral {
    background: var(--secondary-text-color, #727272);
  }
  .strip-more {
    font-size: 9px;
    line-height: 7px;
    color: var(--secondary-text-color, #727272);
  }
  .surface.schedule .strip {
    margin: 0 0 8px;
  }
  /* A narrow card shows one week, so each day keeps room for its date. */
  @container (max-width: 340px) {
    .strip {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .strip-day:nth-child(n + 8) {
      display: none;
    }
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
  .bin-tile > ha-icon { flex-shrink: 0; color: var(--secondary-text-color, #727272); }
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
  /* Wall tablet: sized from the card's width so it reads from across the room. */
  .wall .eyebrow { display: flex; align-items: center; gap: 8px; font-size: clamp(13px, 2.6cqi, 22px); }
  .wall .eyebrow ha-icon { --mdc-icon-size: 1.2em; }
  .wall-now.tonight .eyebrow { color: var(--primary-color, #03a9f4); }
  .wall-date {
    display: block;
    margin: 4px 0 2px;
    font-size: clamp(40px, 11cqi, 112px);
    line-height: 1.02;
    font-weight: 700;
    letter-spacing: -0.04em;
    overflow-wrap: break-word;
    hyphens: auto;
  }
  .wall .full-date { font-size: clamp(14px, 2.8cqi, 26px); margin-top: 6px; }
  .wall-bins {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 200px), 1fr));
    gap: clamp(8px, 1.6cqi, 16px);
    margin: clamp(16px, 3.5cqi, 32px) 0 0;
    padding: 0;
    list-style: none;
  }
  .wall-bin {
    display: flex;
    align-items: center;
    gap: clamp(10px, 2cqi, 18px);
    min-width: 0;
    padding: clamp(12px, 2.4cqi, 22px);
    border-radius: 16px;
    background: color-mix(in srgb, var(--waste-type-color) 16%, transparent);
    border: 1px solid color-mix(in srgb, var(--waste-type-color) 45%, transparent);
    font-size: clamp(20px, 4.2cqi, 40px);
    font-weight: 650;
    line-height: 1.1;
  }
  .wall-bin.neutral {
    background: color-mix(in srgb, var(--primary-text-color, #212121) 6%, transparent);
    border-color: var(--divider-color, #ddd);
  }
  .wall-bin > span:last-child { min-width: 0; overflow-wrap: anywhere; }
  .wall-bin.overflow { color: var(--secondary-text-color, #727272); }
  .wall-bin .swatch { width: 1.6em; height: 1.6em; }
  .wall-bin .swatch ha-icon { --mdc-icon-size: 0.95em; }
  .wall-later {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 180px), 1fr));
    gap: 12px 24px;
    margin: clamp(20px, 4cqi, 40px) 0 0;
    padding: clamp(14px, 2.4cqi, 22px) 0 0;
    border-top: 1px solid var(--divider-color, #ddd);
    list-style: none;
  }
  .wall-later li { min-width: 0; }
  .wall-later-date {
    display: block;
    margin-bottom: 6px;
    color: var(--secondary-text-color, #727272);
    font-size: clamp(14px, 2.4cqi, 22px);
    font-weight: 600;
  }
  .wall-later .chip { font-size: clamp(14px, 2.4cqi, 22px); }
  .wall-later .swatch { width: 1.4em; height: 1.4em; }
  .wall-later .swatch ha-icon { --mdc-icon-size: 0.85em; }
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
`;async function tt(n){return customElements.get("ha-form")||await(await(await window.loadCardHelpers()).createCardElement({type:"button"})).constructor.getConfigElement(),document.createElement(n)}function Ft(n){let{events:t,groups:e,today:o,locale:i}=n,r=C(i),s=n.lead?.group,a=Ht(t,i),c=12,d=Math.max(1,Math.ceil(a.length/c)),u=Math.min(n.page,d-1),l=a.find(m=>$(m)===n.selected),g=l?e.map(m=>({...m,events:m.events.filter(w=>$(w)===n.selected)})).filter(m=>m.events.length):e.slice((n.lead?.index??0)+1);return p`
    ${s?ke({group:s,today:o,locale:i,moment:n.lead.moment,artwork:n.artwork,className:"overview-next"}):h}
    ${n.strip?le(t,o,i,n.strip):h}
    <div class="section-heading"><h3>${r.yourBins}</h3><small>${new Intl.NumberFormat(i).format(a.length)}</small></div>
    <p class="filter-hint">${r.filterHint}</p>
    <div class="bin-grid">${a.slice(u*c,(u+1)*c).map(m=>p`
      <button class="bin-tile" aria-pressed=${!!(l&&$(m)===n.selected)}
        @click=${()=>n.select($(m)===n.selected?void 0:$(m))}>
        ${n.artwork?et([m]):_e(m)}
        <span class="tile-copy"><strong>${U(m,a)}</strong>${n.showSource?p`<small class="source-name">${_(n.hass,m.sourceId,n.sources)}</small>`:h}
          <span class="tile-date">${N(m.date,o,i)}</span></span>
        <span class="tile-color" aria-hidden="true" style=${z({backgroundColor:L(m)})}></span>
      </button>`)}</div>
    ${d>1?p`<nav class="pages" aria-label=${r.binPage}><button ?disabled=${u===0} @click=${()=>n.changePage(u-1)}>${r.previousPage}</button>
      <span aria-live="polite">${new Intl.NumberFormat(i).format(u+1)} / ${new Intl.NumberFormat(i).format(d)}</span><button ?disabled=${u+1===d} @click=${()=>n.changePage(u+1)}>${r.nextPage}</button></nav>`:h}
    ${g.length||l?p`
      <div class="section-heading"><h3>${r.upcoming}</h3>${l?p`<button class="filter-reset" @click=${()=>n.select(void 0)}>${r.clearFilter}</button>`:h}</div>
      ${l?p`<p class="filter-hint" role="status">${U(l,a)}${n.showSource?p` · ${_(n.hass,l.sourceId,n.sources)}`:h}</p>`:h}
      <div class="overview-schedule">${J(g.slice(0,n.maxGroups),o,i)}</div>`:h}`}var B=class extends k{constructor(){super(...arguments);this.badge=!1;this.detailsOpen=!1;this.detailsPage=0;this.binPage=0;this.controller=new K;this.visible=()=>{document.visibilityState==="visible"&&this.refresh()}}set hass(e){let o=this.ha;this.ha=e,(!o||o.connection!==e.connection||o.config.time_zone!==e.config.time_zone)&&(this.snapshot=void 0,this.selectedBin=void 0,this.binPage=0),(!o||o.connection!==e.connection||o.config.time_zone!==e.config.time_zone||y(this.config??{type:""}).some(i=>o.states[i]!==e.states[i]))&&this.refresh(),(!o||o.locale?.language!==e.locale?.language||o.language!==e.language)&&this.requestUpdate()}get hass(){return this.ha}setConfig(e){let o=ge(e),i=this.config,r=!i||JSON.stringify(y(i).sort())!==JSON.stringify(y(o).sort());r&&this.controller.reset(),(r||i?.days_to_show!==o.days_to_show||JSON.stringify(i?.overrides)!==JSON.stringify(o.overrides))&&(this.snapshot=void 0,this.selectedBin=void 0,this.binPage=0,this.detailsPage=0),this.config=o,this.refresh(),this.requestUpdate()}static getConfigElement(){return tt("waste-pickup-planner-card-editor")}static getStubConfig(e){let o=xe(e,{type:""});return{type:"custom:waste-pickup-planner-card",entity:o.find(i=>i.startsWith("sensor."))??o[0]??"sensor.waste_schedule",layout:"compact"}}getCardSize(){return this.config?.layout==="overview"?8:this.config?.layout==="wall"?7:this.config?.layout==="schedule"?Math.min(this.config.max_groups+1,8):this.config?.layout==="hero"?5:3}getGridOptions(){return{columns:12,min_columns:6,rows:"auto"}}connectedCallback(){super.connectedCallback(),document.addEventListener("visibilitychange",this.visible),this.timer=setInterval(()=>this.refresh(),6e4),this.refresh()}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.timer),document.removeEventListener("visibilitychange",this.visible),this.controller.cancel(),this.detailsOpen=!1}refresh(){if(!this.isConnected||!this.ha||!this.config)return;let e=new Date;this.day=G(e,this.ha.config.time_zone);let o=Ct(e,this.ha.config.time_zone);o!==this.hour&&(this.hour=o,this.requestUpdate()),this.snapshot?.rangeStart!==this.day&&(this.snapshot=void 0),this.controller.update(this.ha,this.config,i=>{(i.status!=="loading"||!this.snapshot)&&(this.snapshot=i)})}locale(){return this.config?.locale||this.ha?.locale?.language||this.ha?.language||"en"}async activate(){let e=this.config;if(!e)return;let o=e.tap_action?.action??"details";o!=="none"&&(o==="more-info"?this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:y(e)[0]},bubbles:!0,composed:!0})):o==="navigate"?(history.pushState(null,"",e.tap_action.navigation_path),window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1}}))):(this.detailsPage=0,this.detailsOpen=!0,await this.updateComplete,this.isConnected&&this.detailsOpen&&this.renderRoot.querySelector("dialog")?.showModal()))}manageBins(){history.pushState(null,"","/config/integrations/integration/waste_collection_schedule"),window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1}}))}sourceDetails(e){this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0}))}async changeDetailsPage(e){this.detailsPage=e,await this.updateComplete;let o=this.renderRoot.querySelector("dialog");o?.querySelector(".close")?.focus({preventScroll:!0}),o?.scrollTo(0,0)}keepDetailsFocus(e){if(e.key!=="Tab")return;let o=e.currentTarget,i=Array.from(o.querySelectorAll("button:not([disabled])")),r=i[0],s=i[i.length-1];if(!r||!s)return;let a=o.getRootNode().activeElement;(e.shiftKey&&a===r||!e.shiftKey&&a===s)&&(e.preventDefault(),(e.shiftKey?s:r).focus())}render(){if(!this.config)return h;let e=this.locale(),o=C(e),i=this.snapshot,r=[...i?.events??[]].sort(se(e)),s=Ye(r),a=i?.rangeStart??this.day??"2000-01-01",c=St(s,a,this.hour??0,this.config.evening_hour??18),d=c?.group,u=c?s.slice(c.index+1):[],l=this.config.layout==="overview"&&i?.events.some(x=>$(x)===this.selectedBin)?this.selectedBin:void 0,g=l?r.filter(x=>$(x)===l):r,m=y(this.config),w=this.config.show_source??m.length>1,b=this.config.title??o.title,f=i?.status??"loading",v=f==="empty"?o.empty:f==="stale"?o.partialEmpty:f==="unavailable"?o.unavailable:o.loading,W=d?d.events.length>2?`${new Intl.NumberFormat(e).format(d.events.length)} ${o.collections}`:d.events.map(x=>x.label).join(" \xB7 "):v,T=c?.moment??"upcoming",D=d?T==="tonight"?o.putOutTonight:N(d.date,a,e):v,Ee=this.config.show_strip??["hero","overview"].includes(this.config.layout??"compact"),Ae=Math.min(14,this.config.days_to_show??30),nt=f==="stale"?p`<p class="notice" role="status">${o.stale}</p>`:h,ce=100,de=Math.max(1,Math.ceil(g.length/ce)),P=Math.min(this.detailsPage,de-1),ot=this.detailsOpen?p`<dialog aria-label=${o.schedule} @keydown=${this.keepDetailsFocus} @close=${()=>{this.detailsOpen=!1}}>
      <div class="heading">
        <h2>${b}</h2>
        <button
          class="close"
          aria-label=${o.close}
          @click=${()=>this.renderRoot.querySelector("dialog")?.close()}
        >
          ✕
        </button>
      </div>
      ${g.length?J(Ye(g.slice(P*ce,(P+1)*ce)),a,e,ce):p`<p class="state">${v}</p>`}${nt}${i?.messages.map(x=>p`<p class="state">${Qe(x,e)}</p>`)}
      ${de>1?p`<nav class="pages" aria-label=${o.schedule}>
        <button ?disabled=${P===0} @click=${()=>this.changeDetailsPage(P-1)}>${o.previousPage}</button>
        <span aria-live="polite">${new Intl.NumberFormat(e).format(P+1)} / ${new Intl.NumberFormat(e).format(de)}</span>
        <button ?disabled=${P+1===de} @click=${()=>this.changeDetailsPage(P+1)}>${o.nextPage}</button>
      </nav>`:h}
    </dialog>`:h;if(this.badge){let x=d?d.events.slice(0,6).map(Vt=>Vt.label).join(" \xB7 ")+(d.events.length>6?` \xB7 +${new Intl.NumberFormat(e).format(d.events.length-6)} ${o.more}`:""):v,rt=`${b}: ${D}. ${x}${f==="stale"?`. ${o.stale}`:""}`,st=p`<ha-icon aria-hidden="true"
        .icon=${f==="stale"||f==="unavailable"?"mdi:alert-circle-outline":"mdi:trash-can-outline"}></ha-icon>
        <span class="badge-copy"><strong>${d?D:b}</strong>
        <small>${f==="stale"?`${o.staleBadge} \xB7 `:""}${W}</small></span>`;return this.config.tap_action?.action==="none"?p`<div class="badge" role="img" aria-label=${rt} title=${x}>${st}</div>`:p`<button class="badge" aria-label=${rt} title=${x} @click=${this.activate}>${st}</button>${ot}`}let ze=this.config.tap_action?.action!=="none"&&this.config.layout!=="overview",it=this.config.tap_action?.action==="more-info"||this.config.tap_action?.action==="navigate"?b:o.details;return p`<ha-card data-appearance=${this.config.appearance??"native"} data-density=${this.config.density??"comfortable"}
        ><section class=${`surface ${this.config.layout}${ze?" tappable":""}`}>
          ${ze?p`<button class="surface-action" @click=${this.activate}>
            <span class="sr-only">${it}</span></button>`:h}
          ${this.config.title!==void 0?p`<div class="heading">
            <h2>${b}</h2>
            <ha-icon aria-hidden="true" icon="mdi:calendar-outline"></ha-icon>
          </div>`:h}
          ${d?this.config.layout==="overview"?Ft({events:r,groups:s,today:a,locale:e,lead:c,artwork:this.config.show_artwork??!0,strip:Ee?Ae:0,showSource:w,sources:m,hass:this.ha,maxGroups:this.config.max_groups,selected:l,page:this.binPage,select:x=>{this.selectedBin=x,this.detailsPage=0},changePage:x=>{this.binPage=x}}):this.config.layout==="wall"?Rt({group:d,later:u.slice(0,this.config.max_groups-1),today:a,locale:e,moment:T}):this.config.layout==="schedule"?p`${Ee?le(r,a,e,Ae):h}${J(s.slice(0,this.config.max_groups),a,e)}`:p`${ke({group:d,today:a,locale:e,moment:T,artwork:this.config.layout==="hero"&&!!this.config.show_artwork})}
                    ${Ee?le(r,a,e,Ae):h}
                    ${this.config.layout==="hero"&&u.length?p`<div class="upcoming">${J(u.slice(0,this.config.max_groups-1),a,e)}</div>`:h}`:p`<p class="state" role="status">${v}</p>`}
          ${nt}${f==="unavailable"?i?.messages.map(x=>p`<p class="state">${Qe(x,e)}</p>`):h}
          ${this.config.show_updated&&i?.fetchedAt?p`<p class="updated">${o.updated}: ${Et(i.fetchedAt,e,i.timeZone)}</p>`:h}
          ${this.config.layout==="overview"?p`${f==="ready"?h:p`<div class=${`source-status ${f}`} role="status">
            <ha-icon aria-hidden="true" .icon=${f==="stale"||f==="unavailable"?"mdi:alert-circle-outline":"mdi:calendar-outline"}></ha-icon>
            <span>${f==="stale"?o.staleBadge:v}</span>
          </div>`}<div class="source-links" aria-label=${o.sources}>${m.map(x=>p`<button @click=${()=>this.sourceDetails(x)}>${_(this.ha,x,m)} <span aria-hidden="true">↗</span></button>`)}</div>`:h}
        </section>
        ${this.config.tap_action?.action==="none"||ze?h:p`<button class="action" @click=${this.activate}><span>${it}</span><ha-icon aria-hidden="true" icon="mdi:chevron-right"></ha-icon></button>`}
        ${this.config.show_manage_bins?p`<button class="action" @click=${this.manageBins}><span>${o.manageBins}</span><ha-icon aria-hidden="true" icon="mdi:cog-outline"></ha-icon></button>`:h}</ha-card
      >${ot}`}};B.styles=Wt,B.properties={snapshot:{state:!0},detailsOpen:{state:!0},detailsPage:{state:!0},selectedBin:{state:!0},binPage:{state:!0}};var Ce=class extends B{constructor(){super(...arguments);this.badge=!0}static getConfigElement(){return tt("waste-pickup-planner-badge-editor")}static getStubConfig(e){return{...super.getStubConfig(e),type:"custom:waste-pickup-planner-badge"}}};var wn={source:"Source and layout",appearanceSection:"Appearance",binsSection:"Bins",entities:"Waste sensors or calendars",title:"Title",layout:"Layout",appearance:"Appearance",density:"Density",days_to_show:"Days to show",max_groups:"Visible date groups",show_artwork:"Show bin artwork",show_updated:"Show provider update time",show_manage_bins:"Show Manage bins shortcut",show_source:"Show source names",locale:"Language override (optional)",show_strip:"Show the 14-day strip",evening_hour:"Put-out reminder from (hour)",compact:"Compact",hero:"Hero",schedule:"Schedule",overview:"Overview",wall:"Wall tablet",native:"Native Home Assistant",modern:"Modern",minimal:"Minimal",comfortable:"Comfortable",sourceHelp:"Select one authoritative source per address. For Waste Collection Schedule, choose the combined sensor with Generic details (All attributes in visual bin controls). Calendars also work.",unsupported:"No structured schedule is exposed. Open the sensor settings and choose Generic / All attributes.",binsHelp:"Integration colors apply until you choose an override. Shared bin definitions stay in Waste Collection Schedule.",rangeHelp:"Calendar bin choices come from events in the selected date range. Bins without records can be added in Advanced.",calendarColors:"Calendars only give a name and date for each pickup, so their bins stay neutral. The Waste Collection Schedule sensor for the same address adds bin types and the colors your source provides.",useSensor:"Use the sensor instead",noBins:"No bins found in the supplied schedule.",calendarLoading:"Loading calendar bins\u2026",calendarFailed:"Some calendar bins could not be loaded. Check the source entity or try again.",customize:"Edit bin",displayName:"Display name",localColor:"Local bin color",inheritedColor:"Inherited card color",integrationColor:"Integration color",localColorStatus:"Local color",varyingColors:"Integration colors vary by bin.",neutralColor:"No integration color is available; artwork stays neutral.",resetInherited:"Use inherited card color",resetIntegration:"Use integration color",hide:"Hide this collection",hidden:"Hidden",local:"Customized",integration:"Integration",done:"Done",remove:"Reset this override",matching:"Advanced matching and icon",type:"Category ID or exact calendar name",binSource:"Source entity (optional)",label:"Exact bin name (optional)",icon:"Icon (mdi:\u2026)",color:"Local color (#RRGGBB)",advanced:"Advanced settings",advancedOverride:"Add a category or missing bin override",overrideHelp:"Use the exact type ID, or the complete collection name for older sensors and calendars.",addOverride:"Add collection override",tap:"Tap action",details:"View schedule","more-info":"Entity details",overrideLimit:"This card supports up to 100 overrides. Reset an unused override before adding another.",navigate:"Open dashboard",none:"No action",navigationPath:"Dashboard path",retry:"Retry"},xn={source:"\u0179r\xF3d\u0142o i uk\u0142ad",appearanceSection:"Wygl\u0105d",binsSection:"Pojemniki",entities:"Sensory odpad\xF3w lub kalendarze",title:"Tytu\u0142",layout:"Uk\u0142ad",appearance:"Wygl\u0105d",density:"Odst\u0119py",days_to_show:"Liczba dni",max_groups:"Widoczne grupy termin\xF3w",show_artwork:"Poka\u017C ilustracje pojemnik\xF3w",show_updated:"Poka\u017C czas aktualizacji \u017Ar\xF3d\u0142a",show_manage_bins:"Poka\u017C skr\xF3t Zarz\u0105dzaj pojemnikami",show_source:"Poka\u017C nazwy \u017Ar\xF3de\u0142",locale:"J\u0119zyk (opcjonalnie)",show_strip:"Poka\u017C pasek 14 dni",evening_hour:"Przypomnienie o wystawieniu od (godzina)",compact:"Kompaktowy",hero:"Wyr\xF3\u017Cniony",schedule:"Harmonogram",overview:"Przegl\u0105d",wall:"Tablet \u015Bcienny",native:"Natywny Home Assistant",modern:"Nowoczesny",minimal:"Minimalistyczny",comfortable:"Wygodne",sourceHelp:"Wybierz jedno g\u0142\xF3wne \u017Ar\xF3d\u0142o dla ka\u017Cdego adresu. W Waste Collection Schedule wybierz sensor zbiorczy ze szczeg\xF3\u0142ami Generic (Wszystkie atrybuty w ustawieniach wizualnych). Mo\u017Cesz te\u017C u\u017Cy\u0107 kalendarza.",unsupported:"Sensor nie udost\u0119pnia danych harmonogramu. Otw\xF3rz jego ustawienia i wybierz Generic / Wszystkie atrybuty.",binsHelp:"Kolory integracji obowi\u0105zuj\u0105 do wybrania w\u0142asnych. Wsp\xF3lne definicje pojemnik\xF3w pozostaj\u0105 w Waste Collection Schedule.",rangeHelp:"Pojemniki kalendarza pochodz\u0105 z wydarze\u0144 w wybranym zakresie dat. Pojemniki bez termin\xF3w mo\u017Cna doda\u0107 w ustawieniach zaawansowanych.",calendarColors:"Kalendarze podaj\u0105 tylko nazw\u0119 i dat\u0119 odbioru, wi\u0119c ich pojemniki pozostaj\u0105 neutralne. Sensor Waste Collection Schedule dla tego samego adresu dodaje rodzaje pojemnik\xF3w i kolory podane przez \u017Ar\xF3d\u0142o.",useSensor:"U\u017Cyj sensora",noBins:"Brak pojemnik\xF3w w udost\u0119pnionym harmonogramie.",calendarLoading:"\u0141adowanie pojemnik\xF3w kalendarza\u2026",calendarFailed:"Nie uda\u0142o si\u0119 wczyta\u0107 niekt\xF3rych pojemnik\xF3w kalendarza. Sprawd\u017A encj\u0119 \u017Ar\xF3d\u0142ow\u0105 lub spr\xF3buj ponownie.",customize:"Edytuj pojemnik",displayName:"Wy\u015Bwietlana nazwa",localColor:"W\u0142asny kolor pojemnika",inheritedColor:"Odziedziczony kolor karty",integrationColor:"Kolor integracji",localColorStatus:"W\u0142asny kolor",varyingColors:"Kolory integracji r\xF3\u017Cni\u0105 si\u0119 mi\u0119dzy pojemnikami.",neutralColor:"Brak koloru integracji; ilustracje pozostaj\u0105 neutralne.",resetInherited:"U\u017Cyj odziedziczonego koloru karty",resetIntegration:"U\u017Cyj koloru integracji",hide:"Ukryj ten odbi\xF3r",hidden:"Ukryty",local:"Dostosowany",integration:"Integracja",done:"Gotowe",remove:"Przywr\xF3\u0107 ustawienia tego wpisu",matching:"Zaawansowane dopasowanie i ikona",type:"ID kategorii lub dok\u0142adna nazwa kalendarza",binSource:"Encja \u017Ar\xF3d\u0142owa (opcjonalnie)",label:"Dok\u0142adna nazwa pojemnika (opcjonalnie)",icon:"Ikona (mdi:\u2026)",color:"W\u0142asny kolor (#RRGGBB)",advanced:"Ustawienia zaawansowane",advancedOverride:"Dodaj wpis dla kategorii lub brakuj\u0105cego pojemnika",overrideHelp:"U\u017Cyj dok\u0142adnego ID kategorii lub pe\u0142nej nazwy odbioru ze starszych sensor\xF3w i kalendarzy.",addOverride:"Dodaj wpis odbioru",tap:"Akcja po dotkni\u0119ciu",details:"Zobacz harmonogram","more-info":"Szczeg\xF3\u0142y encji",overrideLimit:"Karta obs\u0142uguje do 100 w\u0142asnych wpis\xF3w. Usu\u0144 nieu\u017Cywany wpis przed dodaniem kolejnego.",navigate:"Otw\xF3rz pulpit",none:"Brak akcji",navigationPath:"\u015Acie\u017Cka pulpitu",retry:"Spr\xF3buj ponownie"},Zt=n=>n.toLowerCase().startsWith("pl")?xn:wn;var qt=Y`
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
  .hint { display: grid; gap: 8px; justify-items: start; padding: 4px 12px 12px; border-inline-start: 3px solid var(--info-color, #039be5); }
  .hint p { margin: 8px 0 0; }
  .bin-list { display: grid; gap: 6px; }
  .bin-row { display: flex; align-items: center; gap: 12px; padding: 10px 12px; width: 100%; text-align: start; min-height: 60px; }
  .bin-row[aria-pressed="true"] { border-color: var(--primary-color); }
  .bin-copy { min-width: 0; flex: 1; }
  .bin-copy strong, .bin-copy small { display: block; overflow-wrap: anywhere; }
  .bin-copy small { color: var(--secondary-text-color); font-size: 12px; margin-top: 4px; }
  .swatch { width: 14px; height: 30px; border-radius: 4px; flex-shrink: 0; background: var(--waste-type-color, var(--secondary-text-color)); }
  .buttons { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px; }
`;function Gt(n){return{...n,entities:y(n),layout:n.layout??"compact",appearance:n.appearance??"native",density:n.density??"comfortable",show_artwork:n.show_artwork??n.layout==="overview",show_source:n.show_source??y(n).length>1,show_strip:n.show_strip??["hero","overview"].includes(n.layout??"compact"),evening_hour:n.evening_hour??18}}function Kt(n,t,e){let o=Object.fromEntries(e.filter(i=>Object.prototype.hasOwnProperty.call(t,i)&&JSON.stringify(n[i])!==JSON.stringify(t[i])).map(i=>[i,t[i]]));return Object.prototype.hasOwnProperty.call(o,"entities")&&(o.entity=void 0),o}var R=class extends k{constructor(){super(...arguments);this.controller=new K}set hass(e){let o=this.ha;this.ha=e,(!o||o.connection!==e.connection||o.config.time_zone!==e.config.time_zone)&&(this.controller.reset(),this.calendarSnapshot=void 0),(!o||o.connection!==e.connection||o.config.time_zone!==e.config.time_zone||y(this.config??{type:""}).some(i=>o.states[i]!==e.states[i]))&&this.refreshBins(),this.requestUpdate()}get hass(){return this.ha}setConfig(e){let o=this.config;this.config={...e},(!o||JSON.stringify(y(o))!==JSON.stringify(y(e))||o.days_to_show!==e.days_to_show)&&(this.controller.reset(),this.calendarSnapshot=void 0,this.editing=void 0,this.refreshBins()),this.editing!==void 0&&!this.config.overrides?.[this.editing]&&(this.editing=void 0)}connectedCallback(){super.connectedCallback(),this.timer=setInterval(()=>this.refreshBins(),6e4),this.refreshBins()}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.timer),this.controller.cancel()}refreshBins(){if(!(!this.isConnected||!this.ha||!this.config))try{let e=ge({...this.config,overrides:[]});if(!y(e).some(o=>o.startsWith("calendar.")))return;this.controller.update(this.ha,e,o=>{(o.status!=="loading"||!this.calendarSnapshot)&&(this.calendarSnapshot=o)})}catch{}}changed(e){this.setConfig({...this.config,...e}),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this.config},bubbles:!0,composed:!0}))}override(e,o){let i=[...this.config?.overrides??[]];i[e]={...i[e],...o},this.changed({overrides:i})}form(e,o){let i=this.config.type.includes("badge"),r=(c,d)=>({name:c,selector:{select:{options:d.map(u=>({value:u,label:o[u]})),mode:"dropdown"}}}),s=[{name:"entities",required:!0,selector:{entity:{domain:["sensor","calendar"],multiple:!0,include_entities:xe(this.ha,this.config)}}},{name:"title",selector:{text:{}}},r("layout",["compact","hero","schedule","overview","wall"]),r("appearance",["native","modern","minimal"]),r("density",["comfortable","compact"]),{name:"days_to_show",selector:{number:{min:1,max:366,mode:"box"}}},{name:"max_groups",selector:{number:{min:1,max:50,mode:"box"}}},{name:"evening_hour",selector:{number:{min:0,max:23,mode:"box",unit_of_measurement:"h"}}},...["show_artwork","show_updated","show_manage_bins","show_source","show_strip"].map(c=>({name:c,selector:{boolean:{}}})),{name:"locale",selector:{text:{}}}].filter(c=>e.includes(c.name)&&(!i||!["layout","max_groups","show_artwork","show_manage_bins","appearance","density","show_source","show_strip"].includes(c.name)));if(!s.length)return h;let a=Gt(this.config);return p`<ha-form .hass=${this.ha} .data=${a} .schema=${s}
      .computeLabel=${c=>o[c.name]}
      @value-changed=${c=>{let d=Kt(a,c.detail.value,s.map(u=>u.name));Object.keys(d).length&&this.changed(d)}}></ha-form>`}editPanel(e,o,i,r){let s=this.editing;if(s===void 0||!this.config.overrides?.[s])return h;let a=this.config.overrides[s],c=Dt(a,this.config.overrides),d=o.filter(f=>we(f,a)),u=new Set(d.map(f=>f.color)),l=u.size===1?d[0]?.color:void 0,g=c?.color?`${e.inheritedColor}: ${c.color}`:u.size>1?e.varyingColors:l?`${e.integrationColor}: ${l}`:e.neutralColor,m=a.source&&a.label?i.find(f=>we(f,a)):void 0,w={sourceId:a.source??"",typeId:a.type,originalLabel:a.label??a.type,label:a.name??a.label??a.type},b=U(m??w,r);return p`<fieldset><legend>${b}${a.source?p` · ${_(this.ha,a.source,y(this.config))}`:h}</legend>
      <label>${e.displayName}<input .value=${a.name??""} placeholder=${c?.name??a.label??a.type}
        @input=${f=>this.override(s,{name:f.target.value||void 0})} /></label>
      <label>${e.localColor}<input type="color" .value=${a.color??c?.color??l??"#808080"}
        @input=${f=>this.override(s,{color:f.target.value})} /></label>
      <p>${a.color?`${e.localColorStatus}: ${a.color}`:g}</p>
      ${a.color?p`<button @click=${()=>this.override(s,{color:void 0})}>${c?.color?e.resetInherited:e.resetIntegration}</button>`:h}
      <label class="check"><input type="checkbox" .checked=${a.hidden??c?.hidden??!1}
        @change=${f=>this.override(s,{hidden:f.target.checked})} />${e.hide}</label>
      <details><summary>${e.matching}</summary>
        ${["type","source","label","icon","color"].map(f=>p`<label>${f==="source"?e.binSource:e[f]}<input .value=${a[f]??""}
          @change=${v=>this.override(s,{[f]:v.target.value||void 0})} /></label>`)}
      </details>
      <div class="buttons"><button @click=${()=>{this.editing=void 0}}>${e.done}</button>
        <button @click=${()=>{this.editing=void 0,this.changed({overrides:this.config.overrides.filter((f,v)=>v!==s)})}}>${e.remove}</button></div>
    </fieldset>`}render(){if(!this.config||!this.ha)return h;let e=Zt(this.config.locale||this.ha.locale?.language||this.ha.language||"en"),o=Ot(this.ha,this.config,this.calendarSnapshot?.events),i=this.config.overrides??[],r=y(this.config),s=o.map(l=>({...l,originalLabel:l.label,label:ae(l,i)?.name??l.label})),a=y(this.config).filter(l=>l.startsWith("sensor.")&&this.ha.states[l]&&!A(this.ha.states[l]).supported),c=i.map((l,g)=>({o:l,index:g})).filter(({o:l})=>!o.some(g=>l.type===(g.typeId??g.label)&&l.source===g.sourceId&&l.label===g.label)),d=c.map(({o:l})=>({sourceId:l.source??"",typeId:l.type,originalLabel:l.label??l.type,label:l.name??l.label??l.type})),u=[...s,...d];return p`<h3>${e.source}</h3>${this.form(["entities","title","layout"],e)}<p>${e.sourceHelp}</p>
      ${a.length?p`<p class="warning" role="status">${a.join(", ")}: ${e.unsupported}</p>`:h}
      ${r.some(l=>l.startsWith("calendar."))?p`<div class="hint"><p>${e.calendarColors}</p>
        ${Pt(this.ha,this.config).map(({calendar:l,sensor:g})=>p`<button
          aria-label=${`${e.useSensor}: ${_(this.ha,g,[g])} \xB7 ${_(this.ha,l,r)}`}
          @click=${()=>{this.editing=void 0,this.changed(jt(this.ha,this.config,l,g))}}>${e.useSensor} · ${_(this.ha,g,[g])}</button>`)}</div>`:h}
      ${this.config.type.includes("badge")?h:p`<h3>${e.appearanceSection}</h3>${this.form(["appearance","density","show_artwork","show_strip","show_source","show_manage_bins"],e)}`}
      <h3>${e.binsSection}</h3><p>${e.binsHelp}</p>
      ${i.length>=100?p`<p role="status">${e.overrideLimit}</p>`:h}
      <div class="bin-list">${o.map((l,g)=>{let m=i.findIndex(f=>f.type===(l.typeId??l.label)&&f.source===l.sourceId&&f.label===l.label),w=ae(l,i),b=U(s[g],u);return p`<button class="bin-row" aria-label=${`${e.customize}: ${b} \xB7 ${_(this.ha,l.sourceId,r)}`} aria-pressed=${m>=0&&this.editing===m} ?disabled=${m<0&&i.length>=100}
          @click=${()=>{m>=0?this.editing=m:(this.changed({overrides:[...i,{type:l.typeId??l.label,source:l.sourceId,label:l.label}]}),this.editing=i.length)}}><span class="swatch" aria-hidden="true" style=${z({"--waste-type-color":w?.color??l.color})}></span>
          <span class="bin-copy"><strong>${b}</strong><small>${_(this.ha,l.sourceId,r)} · ${w?.hidden?e.hidden:w?.hidden!==void 0||w?.color||w?.name||w?.icon?e.local:e.integration}</small></span><span aria-hidden="true">✎</span></button>
          ${m>=0&&this.editing===m?this.editPanel(e,o,s,u):h}`})}${c.map(({o:l,index:g},m)=>p`<button class="bin-row" aria-pressed=${this.editing===g} @click=${()=>{this.editing=g}}>
        <span class="bin-copy"><strong>${U(d[m],u)}</strong><small>${l.source?_(this.ha,l.source,r):e.matching}</small></span><span aria-hidden="true">✎</span></button>
        ${this.editing===g?this.editPanel(e,o,s,u):h}`)}</div>
      ${o.length?h:p`<p>${e.noBins}</p>`}
      ${y(this.config).some(l=>l.startsWith("calendar."))?p`<p>${e.rangeHelp}</p>
        ${!this.calendarSnapshot||this.calendarSnapshot.status==="loading"?p`<p role="status">${e.calendarLoading}</p>`:this.calendarSnapshot.messages.some(l=>l.source.startsWith("calendar."))?p`<p class="warning" role="status">${e.calendarFailed} <button @click=${this.refreshBins}>${e.retry}</button></p>`:h}`:h}
      <details><summary>${e.advanced}</summary>${this.form(["days_to_show","max_groups","evening_hour","show_updated","locale"],e)}
        <label>${e.tap}<select .value=${this.config.tap_action?.action??"details"} @change=${l=>this.changed({tap_action:{action:l.target.value}})}>
          ${["details","more-info","navigate","none"].map(l=>p`<option value=${l}>${e[l]}</option>`)}</select></label>
        ${this.config.tap_action?.action==="navigate"?p`<label>${e.navigationPath}<input .value=${this.config.tap_action.navigation_path??""} placeholder="/lovelace/waste"
          @change=${l=>this.changed({tap_action:{action:"navigate",navigation_path:l.target.value}})} /></label>`:h}
        <details><summary>${e.advancedOverride}</summary><p>${e.overrideHelp}</p><button ?disabled=${i.length>=100} @click=${()=>{this.changed({overrides:[...i,{type:"collection_name"}]}),this.editing=i.length}}>${e.addOverride}</button></details>
      </details>`}};R.properties={config:{state:!0},editing:{state:!0},calendarSnapshot:{state:!0}},R.styles=qt;var Se=class extends R{};customElements.define("waste-pickup-planner-card",B);customElements.define("waste-pickup-planner-badge",Ce);customElements.define("waste-pickup-planner-card-editor",R);customElements.define("waste-pickup-planner-badge-editor",Se);var Jt=window;(Jt.customCards??=[]).push({type:"waste-pickup-planner-card",name:"Waste Pickup Planner",description:"Date-grouped waste collections with compact, hero and schedule layouts.",preview:!0});(Jt.customBadges??=[]).push({type:"waste-pickup-planner-badge",name:"Waste Pickup Planner Badge",description:"The next collection date and types, with schedule details."});
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
