var ue=globalThis,me=ue.ShadowRoot&&(ue.ShadyCSS===void 0||ue.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,je=Symbol(),dt=new WeakMap,Q=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==je)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(me&&t===void 0){let n=e!==void 0&&e.length===1;n&&(t=dt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&dt.set(e,t))}return t}toString(){return this.cssText}},pt=o=>new Q(typeof o=="string"?o:o+"",void 0,je),X=(o,...t)=>{let e=o.length===1?o[0]:t.reduce((n,i,r)=>n+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[r+1],o[0]);return new Q(e,o,je)},ht=(o,t)=>{if(me)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let n=document.createElement("style"),i=ue.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=e.cssText,o.appendChild(n)}},Pe=me?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(let n of t.cssRules)e+=n.cssText;return pt(e)})(o):o;var{is:en,defineProperty:tn,getOwnPropertyDescriptor:nn,getOwnPropertyNames:on,getOwnPropertySymbols:rn,getPrototypeOf:an}=Object,ge=globalThis,ut=ge.trustedTypes,sn=ut?ut.emptyScript:"",ln=ge.reactiveElementPolyfillSupport,ee=(o,t)=>o,He={toAttribute(o,t){switch(t){case Boolean:o=o?sn:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},gt=(o,t)=>!en(o,t),mt={attribute:!0,type:String,converter:He,reflect:!1,useDefault:!1,hasChanged:gt};Symbol.metadata??=Symbol("metadata"),ge.litPropertyMetadata??=new WeakMap;var S=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=mt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let n=Symbol(),i=this.getPropertyDescriptor(t,n,e);i!==void 0&&tn(this.prototype,t,i)}}static getPropertyDescriptor(t,e,n){let{get:i,set:r}=nn(this.prototype,t)??{get(){return this[e]},set(a){this[e]=a}};return{get:i,set(a){let s=i?.call(this);r?.call(this,a),this.requestUpdate(t,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??mt}static _$Ei(){if(this.hasOwnProperty(ee("elementProperties")))return;let t=an(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(ee("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ee("properties"))){let e=this.properties,n=[...on(e),...rn(e)];for(let i of n)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[n,i]of e)this.elementProperties.set(n,i)}this._$Eh=new Map;for(let[e,n]of this.elementProperties){let i=this._$Eu(e,n);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let n=new Set(t.flat(1/0).reverse());for(let i of n)e.unshift(Pe(i))}else t!==void 0&&e.push(Pe(t));return e}static _$Eu(t,e){let n=e.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let n of e.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ht(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$ET(t,e){let n=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,n);if(i!==void 0&&n.reflect===!0){let r=(n.converter?.toAttribute!==void 0?n.converter:He).toAttribute(e,n.type);this._$Em=t,r==null?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){let n=this.constructor,i=n._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let r=n.getPropertyOptions(i),a=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:He;this._$Em=i;let s=a.fromAttribute(e,r.type);this[i]=s??this._$Ej?.get(i)??s,this._$Em=null}}requestUpdate(t,e,n,i=!1,r){if(t!==void 0){let a=this.constructor;if(i===!1&&(r=this[t]),n??=a.getPropertyOptions(t),!((n.hasChanged??gt)(r,e)||n.useDefault&&n.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(a._$Eu(t,n))))return;this.C(t,e,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:n,reflect:i,wrapped:r},a){n&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??e??this[t]),r!==!0||a!==void 0)||(this._$AL.has(t)||(this.hasUpdated||n||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,r]of this._$Ep)this[i]=r;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[i,r]of n){let{wrapped:a}=r,s=this[i];a!==!0||this._$AL.has(i)||s===void 0||this.C(i,void 0,r,s)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(e)):this._$EM()}catch(n){throw t=!1,this._$EM(),n}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[ee("elementProperties")]=new Map,S[ee("finalized")]=new Map,ln?.({ReactiveElement:S}),(ge.reactiveElementVersions??=[]).push("2.1.2");var Re=globalThis,ft=o=>o,fe=Re.trustedTypes,yt=fe?fe.createPolicy("lit-html",{createHTML:o=>o}):void 0,_t="$lit$",I=`lit$${Math.random().toFixed(9).slice(2)}$`,kt="?"+I,cn=`<${kt}>`,O=document,ne=()=>O.createComment(""),oe=o=>o===null||typeof o!="object"&&typeof o!="function",We=Array.isArray,dn=o=>We(o)||typeof o?.[Symbol.iterator]=="function",Oe=`[ 	
\f\r]`,te=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,bt=/-->/g,vt=/>/g,P=RegExp(`>|${Oe}(?:([^\\s"'>=/]+)(${Oe}*=${Oe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),wt=/'/g,xt=/"/g,Ct=/^(?:script|style|textarea|title)$/i,Ge=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),p=Ge(1),jn=Ge(2),Pn=Ge(3),E=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),$t=new WeakMap,H=O.createTreeWalker(O,129);function St(o,t){if(!We(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return yt!==void 0?yt.createHTML(t):t}var pn=(o,t)=>{let e=o.length-1,n=[],i,r=t===2?"<svg>":t===3?"<math>":"",a=te;for(let s=0;s<e;s++){let c=o[s],d,u,l=-1,g=0;for(;g<c.length&&(a.lastIndex=g,u=a.exec(c),u!==null);)g=a.lastIndex,a===te?u[1]==="!--"?a=bt:u[1]!==void 0?a=vt:u[2]!==void 0?(Ct.test(u[2])&&(i=RegExp("</"+u[2],"g")),a=P):u[3]!==void 0&&(a=P):a===P?u[0]===">"?(a=i??te,l=-1):u[1]===void 0?l=-2:(l=a.lastIndex-u[2].length,d=u[1],a=u[3]===void 0?P:u[3]==='"'?xt:wt):a===xt||a===wt?a=P:a===bt||a===vt?a=te:(a=P,i=void 0);let m=a===P&&o[s+1].startsWith("/>")?" ":"";r+=a===te?c+cn:l>=0?(n.push(d),c.slice(0,l)+_t+c.slice(l)+I+m):c+I+(l===-2?s:m)}return[St(o,r+(o[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]},ie=class o{constructor({strings:t,_$litType$:e},n){let i;this.parts=[];let r=0,a=0,s=t.length-1,c=this.parts,[d,u]=pn(t,e);if(this.el=o.createElement(d,n),H.currentNode=this.el.content,e===2||e===3){let l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(i=H.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let l of i.getAttributeNames())if(l.endsWith(_t)){let g=u[a++],m=i.getAttribute(l).split(I),w=/([.?@])?(.*)/.exec(g);c.push({type:1,index:r,name:w[2],strings:m,ctor:w[1]==="."?Le:w[1]==="?"?Ne:w[1]==="@"?Be:Z}),i.removeAttribute(l)}else l.startsWith(I)&&(c.push({type:6,index:r}),i.removeAttribute(l));if(Ct.test(i.tagName)){let l=i.textContent.split(I),g=l.length-1;if(g>0){i.textContent=fe?fe.emptyScript:"";for(let m=0;m<g;m++)i.append(l[m],ne()),H.nextNode(),c.push({type:2,index:++r});i.append(l[g],ne())}}}else if(i.nodeType===8)if(i.data===kt)c.push({type:2,index:r});else{let l=-1;for(;(l=i.data.indexOf(I,l+1))!==-1;)c.push({type:7,index:r}),l+=I.length-1}r++}}static createElement(t,e){let n=O.createElement("template");return n.innerHTML=t,n}};function F(o,t,e=o,n){if(t===E)return t;let i=n!==void 0?e._$Co?.[n]:e._$Cl,r=oe(t)?void 0:t._$litDirective$;return i?.constructor!==r&&(i?._$AO?.(!1),r===void 0?i=void 0:(i=new r(o),i._$AT(o,e,n)),n!==void 0?(e._$Co??=[])[n]=i:e._$Cl=i),i!==void 0&&(t=F(o,i._$AS(o,t.values),i,n)),t}var Me=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:n}=this._$AD,i=(t?.creationScope??O).importNode(e,!0);H.currentNode=i;let r=H.nextNode(),a=0,s=0,c=n[0];for(;c!==void 0;){if(a===c.index){let d;c.type===2?d=new re(r,r.nextSibling,this,t):c.type===1?d=new c.ctor(r,c.name,c.strings,this,t):c.type===6&&(d=new Ue(r,this,t)),this._$AV.push(d),c=n[++s]}a!==c?.index&&(r=H.nextNode(),a++)}return H.currentNode=O,i}p(t){let e=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}},re=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,n,i){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=F(this,t,e),oe(t)?t===h||t==null||t===""?(this._$AH!==h&&this._$AR(),this._$AH=h):t!==this._$AH&&t!==E&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):dn(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==h&&oe(this._$AH)?this._$AA.nextSibling.data=t:this.T(O.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:n}=t,i=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=ie.createElement(St(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===i)this._$AH.p(e);else{let r=new Me(i,this),a=r.u(this.options);r.p(e),this.T(a),this._$AH=r}}_$AC(t){let e=$t.get(t.strings);return e===void 0&&$t.set(t.strings,e=new ie(t)),e}k(t){We(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,n,i=0;for(let r of t)i===e.length?e.push(n=new o(this.O(ne()),this.O(ne()),this,this.options)):n=e[i],n._$AI(r),i++;i<e.length&&(this._$AR(n&&n._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let n=ft(t).nextSibling;ft(t).remove(),t=n}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},Z=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,n,i,r){this.type=1,this._$AH=h,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=h}_$AI(t,e=this,n,i){let r=this.strings,a=!1;if(r===void 0)t=F(this,t,e,0),a=!oe(t)||t!==this._$AH&&t!==E,a&&(this._$AH=t);else{let s=t,c,d;for(t=r[0],c=0;c<r.length-1;c++)d=F(this,s[n+c],e,c),d===E&&(d=this._$AH[c]),a||=!oe(d)||d!==this._$AH[c],d===h?t=h:t!==h&&(t+=(d??"")+r[c+1]),this._$AH[c]=d}a&&!i&&this.j(t)}j(t){t===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Le=class extends Z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===h?void 0:t}},Ne=class extends Z{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==h)}},Be=class extends Z{constructor(t,e,n,i,r){super(t,e,n,i,r),this.type=5}_$AI(t,e=this){if((t=F(this,t,e,0)??h)===E)return;let n=this._$AH,i=t===h&&n!==h||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==h&&(n===h||i);i&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Ue=class{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){F(this,t)}};var hn=Re.litHtmlPolyfillSupport;hn?.(ie,re),(Re.litHtmlVersions??=[]).push("3.3.3");var Et=(o,t,e)=>{let n=e?.renderBefore??t,i=n._$litPart$;if(i===void 0){let r=e?.renderBefore??null;n._$litPart$=i=new re(t.insertBefore(ne(),r),r,void 0,e??{})}return i._$AI(o),i};var Fe=globalThis,k=class extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Et(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return E}};k._$litElement$=!0,k.finalized=!0,Fe.litElementHydrateSupport?.({LitElement:k});var un=Fe.litElementPolyfillSupport;un?.({LitElement:k});(Fe.litElementVersions??=[]).push("4.2.2");function M(o){if(!(typeof o!="string"||!o.trim()))try{return Intl.getCanonicalLocales(o.trim().replaceAll("_","-"))[0]}catch{return}}function q(o,t){return M(o)??M(t?.locale?.language)??M(t?.language)??"en"}function ye(o,t,e){return t.get(o.split("-")[0].toLowerCase())??e}var Ze=o=>typeof o=="string"&&/^#[\da-f]{6}$/i.test(o),qe=o=>typeof o=="string"&&/^mdi:[a-z0-9-]+$/.test(o);function y(o){return[...new Set(o.entities??(o.entity?[o.entity]:[]))]}function be(o){if(!o||typeof o!="object")throw new Error("Choose a waste sensor or calendar.");if(o.entities!==void 0&&(!Array.isArray(o.entities)||o.entities.some(n=>typeof n!="string")))throw new Error("entities must be an array of entity IDs.");if(o.entity&&o.entities)throw new Error("Use entity or entities, not both.");let t=y(o);if(!t.length||t.length>12||t.some(n=>!/^(sensor|calendar)\.[a-z0-9_]+$/.test(n)))throw new Error("Choose 1\u201312 sensor or calendar entities.");if(o.layout!==void 0&&!["compact","hero","schedule","overview","wall"].includes(o.layout))throw new Error("Unknown layout.");if(o.appearance!==void 0&&!["native","modern","minimal"].includes(o.appearance))throw new Error("Unknown appearance.");if(o.density!==void 0&&!["comfortable","compact"].includes(o.density))throw new Error("Unknown density.");for(let[n,i]of[["days_to_show",366],["max_groups",50]]){let r=o[n];if(r!==void 0&&(!Number.isInteger(r)||r<1||r>i))throw new Error(`${n} must be 1\u2013${i}.`)}if(o.evening_hour!==void 0&&(!Number.isInteger(o.evening_hour)||o.evening_hour<0||o.evening_hour>23))throw new Error("evening_hour must be a whole hour, 0\u201323.");for(let n of["show_artwork","show_updated","show_manage_bins","show_source","show_strip"])if(o[n]!==void 0&&typeof o[n]!="boolean")throw new Error(`${n} must be true or false.`);if(o.title!==void 0&&typeof o.title!="string")throw new Error("title must be text.");let e=M(o.locale);if(o.locale!==void 0&&!e)throw new Error("locale must be a language code such as nl or en-GB.");if(o.overrides!==void 0){if(!Array.isArray(o.overrides)||o.overrides.length>100)throw new Error("overrides must contain at most 100 types.");for(let n of o.overrides)if(!n||typeof n.type!="string"||!n.type.trim()||n.source!==void 0&&(typeof n.source!="string"||!/^(sensor|calendar)\.[a-z0-9_]+$/.test(n.source))||n.label!==void 0&&(typeof n.label!="string"||!n.label.trim())||n.name!==void 0&&(typeof n.name!="string"||!n.name.trim())||n.hidden!==void 0&&typeof n.hidden!="boolean"||n.color!==void 0&&!Ze(n.color)||n.icon!==void 0&&!qe(n.icon))throw new Error("Invalid type override. Use an exact type ID or name, mdi icon, and #RRGGBB color.")}if(o.tap_action){if(!["details","more-info","navigate","none"].includes(o.tap_action.action))throw new Error("Unsupported tap action.");if(o.tap_action.action==="navigate"&&(typeof o.tap_action.navigation_path!="string"||!/^\/(?!\/)/.test(o.tap_action.navigation_path)||/[\\\u0000-\u001f]/.test(o.tap_action.navigation_path)))throw new Error("Navigation requires a local path beginning with /.")}return{...o,...e?{locale:e}:{},entities:o.entities?[...o.entities]:void 0,layout:o.layout??"compact",days_to_show:o.days_to_show??30,max_groups:o.max_groups??5}}function ve(o){if(typeof o!="string"||!/^\d{4}-\d{2}-\d{2}$/.test(o))return!1;let t=new Date(`${o}T12:00:00Z`);return Number.isFinite(t.getTime())&&t.toISOString().slice(0,10)===o}function V(o,t){let e=new Intl.DateTimeFormat("en-CA",{timeZone:t,year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(o),n=i=>e.find(r=>r.type===i).value;return`${n("year")}-${n("month")}-${n("day")}`}function At(o,t){let e=new Intl.DateTimeFormat("en-GB",{timeZone:t,hour:"numeric",hourCycle:"h23"}).formatToParts(o).find(n=>n.type==="hour").value;return Number(e)%24}function mn(o,t,e,n=18){let i=L(t,o);return i===0?"today":i===1&&e>=n?"tonight":"upcoming"}function zt(o,t,e,n=18){if(o.length){if(e>=n){let i=o.findIndex(r=>L(t,r.date)===1);if(i>=0)return{group:o[i],index:i,moment:"tonight"}}return{group:o[0],index:0,moment:mn(o[0].date,t,e,n)}}}function se(o,t){let e=new Date(`${o}T12:00:00Z`);return e.setUTCDate(e.getUTCDate()+t),e.toISOString().slice(0,10)}function L(o,t){return Math.round((Date.parse(`${t}T12:00:00Z`)-Date.parse(`${o}T12:00:00Z`))/864e5)}var K=(o,t)=>o.charAt(0).toLocaleUpperCase(t)+o.slice(1);function N(o,t,e){let n=L(t,o);return K(n<=1&&n>=0?new Intl.RelativeTimeFormat(e,{numeric:"auto"}).format(n,"day"):new Intl.DateTimeFormat(e,{weekday:"long",day:"numeric",month:"short",timeZone:"UTC"}).format(new Date(`${o}T12:00:00Z`)),e)}function ae(o,t,e){return new Intl.RelativeTimeFormat(e,{numeric:"auto"}).format(L(t,o),"day")}function we(o,t){return new Intl.DateTimeFormat(t,{weekday:"short",day:"numeric",month:"short",timeZone:"UTC"}).format(new Date(`${o}T12:00:00Z`))}function Ke(o,t,e){let n=L(t,o);return K(n>=0&&n<=1?we(o,e):ae(o,t,e),e)}function Ve(o,t,e){let n=L(t,o);if(n>=0&&n<=1)return K(ae(o,t,e),e);let i=new Intl.DateTimeFormat(e,{weekday:"long",timeZone:"UTC"}).format(new Date(`${o}T12:00:00Z`));return K(`${i} \xB7 ${ae(o,t,e)}`,e)}function Je(o,t,e){let n=new Intl.DateTimeFormat(e,{weekday:"long",day:"numeric",month:"long",timeZone:"UTC"}).format(new Date(`${o}T12:00:00Z`)),i=L(t,o);return i>=0&&i<=1?`${K(ae(o,t,e),e)} \xB7 ${n}`:`${K(n,e)} \xB7 ${ae(o,t,e)}`}function Tt(o,t,e){return new Intl.DateTimeFormat(t,{dateStyle:"medium",timeStyle:"short",timeZone:e}).format(new Date(o))}var xe=o=>o!==null&&typeof o=="object"&&!Array.isArray(o)?o:void 0,Qe=o=>typeof o=="string"&&o.trim()?o:void 0;function Ye(o,t,e){let n=o.date??e,i=Qe(o.type);if(!(!ve(n)||!i))return{sourceId:t,entityId:t,date:n,label:i,typeId:Qe(o.type_id),icon:qe(o.icon)?o.icon:void 0,color:Ze(o.color)?o.color:void 0,colorSource:["source","customize","default"].includes(String(o.color_source))?o.color_source:void 0}}function A(o){let t=o.attributes,e="upcoming"in t?t.upcoming:"upcoming_pickups"in t?t.upcoming_pickups:"next_pickup"in t?t.next_pickup===null?[]:[t.next_pickup]:void 0;if(!Array.isArray(e))return{events:[],supported:!1,invalid:e!==void 0};let n=[],i=e.length>2e3;for(let a of e.slice(0,2e3)){if(n.length>=2e3){i=!0;break}let s=xe(a);if(!s||!ve(s.date)){i=!0;continue}if(Array.isArray(s.collections)){s.collections.length>100&&(i=!0);for(let c of s.collections.slice(0,100)){let d=xe(c),u=d&&Ye(d,o.entity_id,s.date);u?n.push(u):i=!0}}else if(Array.isArray(s.types)){s.types.length>100&&(i=!0);for(let c of s.types.slice(0,100)){let d=Ye({...s,type:c,color:void 0,color_source:void 0,type_id:void 0},o.entity_id);d?n.push(d):i=!0}}else{let c=Ye(s,o.entity_id);c?n.push(c):i=!0}}let r=typeof t.last_update=="string"&&/^\d{4}-\d{2}-\d{2}T/.test(t.last_update)&&/(?:Z|[+-]\d{2}:\d{2})$/.test(t.last_update)&&Number.isFinite(Date.parse(t.last_update))?t.last_update:void 0;return{events:n.slice(0,2e3),supported:!0,invalid:i||n.length>2e3,fetchedAt:r}}function It(o,t,e){if(!Array.isArray(o)||o.length>1e4)throw new Error("Invalid calendar response.");return o.flatMap(n=>{let i=xe(n),r=xe(i?.start),a=Qe(i?.summary);if(!r||!a)return[];let s;return ve(r.date)?s=r.date:typeof r.dateTime=="string"&&/(?:Z|[+-]\d{2}:\d{2})$/.test(r.dateTime)&&Number.isFinite(Date.parse(r.dateTime))&&(s=V(new Date(r.dateTime),e)),s?[{sourceId:t,entityId:t,date:s,label:a}]:[]})}var Dt=new WeakMap;function Xe(o,t,e,n){let i=Dt.get(o.connection);i||(i=new Map,Dt.set(o.connection,i));let r=JSON.stringify([t,e,n]),a=o.states[t]?.last_updated,s=i.get(r);if(s?.pending){if(s.stamp===a)return s.promise;let l=()=>Xe(o,t,e,n);return s.promise.then(l,l)}if(s&&s.stamp===a&&s.expires>Date.now())return s.promise;for(let[l,g]of i)!g.pending&&g.expires<=Date.now()&&i.delete(l);if(!i.has(r)&&i.size>=100){let l=[...i].find(([,g])=>!g.pending);if(l)i.delete(l[0]);else return Promise.reject(new Error("Too many calendar requests are pending."))}let c=new URLSearchParams({start:`${e}T00:00:00+14:00`,end:`${n}T00:00:00-12:00`}),d=o.callApi("GET",`calendars/${encodeURIComponent(t)}?${c}`),u={promise:d,expires:1/0,pending:!0,stamp:a};return i.set(r,u),d.then(()=>{u.pending=!1,u.expires=Date.now()+6e4},()=>{i.get(r)===u&&i.delete(r)}),d}function _(o,t,e=[t]){let n=r=>{let a=o?.states[r]?.attributes.friendly_name;return typeof a=="string"&&a.trim()?a.trim():r},i=n(t);return e.some(r=>r!==t&&n(r)===i)?`${i} \xB7 ${t}`:i}function jt(o){let t;try{t=new Intl.Collator(o)}catch{t=new Intl.Collator("en")}return(e,n)=>t.compare(e.label,n.label)||(e.sourceId<n.sourceId?-1:e.sourceId>n.sourceId?1:0)}function le(o="en"){let t=jt(o);return(e,n)=>(e.date<n.date?-1:e.date>n.date?1:0)||t(e,n)}var $=o=>JSON.stringify([o.sourceId,o.typeId??o.originalLabel??o.label,o.originalLabel??o.label]);function B(o,t){let e=t.filter(a=>a.sourceId===o.sourceId&&a.label===o.label&&$(a)!==$(o));if(!e.length)return o.label;let n=o.originalLabel??o.label,r=e.some(a=>(a.originalLabel??a.label)===n)?o.typeId??n:n;return r===o.label?o.label:`${o.label} \xB7 ${r}`}var _e=(o,t)=>t.type===(o.typeId??o.originalLabel??o.label)&&(t.source===void 0||t.source===o.sourceId)&&(t.label===void 0||t.label===(o.originalLabel??o.label)),$e=o=>+(o.source!==void 0)+ +(o.label!==void 0)*2;function Pt(o){let t=new Map;for(let e of o)t.has($e(e))||t.set($e(e),e);return o.length?[...t.entries()].sort(([e],[n])=>e-n).reduce((e,[,n])=>({...e,...Object.fromEntries(Object.entries(n).filter(([,i])=>i!==void 0))}),{}):void 0}function ce(o,t=[]){return Pt(t.filter(e=>_e(o,e)))}function Ht(o,t=[]){return Pt(t.filter(e=>e.type===o.type&&$e(e)<$e(o)&&(e.source===void 0||e.source===o.source)&&(e.label===void 0||e.label===o.label)))}function ke(o,t){return[...new Set([...y(t),...Object.values(o.states).filter(e=>e.entity_id.startsWith("calendar.")||e.entity_id.startsWith("sensor.")&&(()=>{let n=A(e);return n.supported&&!n.invalid})()).map(e=>e.entity_id)])]}function gn(o,t,e){let n=o.entities?.[t]?.device_id;return!!n&&(n===e||o.devices?.[n]?.via_device_id===e)}function Ot(o,t){let e=y(t);return e.filter(n=>n.startsWith("calendar.")).flatMap(n=>{let i=o.entities?.[n]?.device_id;if(!i)return[];let r=Object.values(o.states).filter(a=>a.entity_id.startsWith("sensor.")&&!["unavailable","unknown"].includes(a.state)&&!e.includes(a.entity_id)&&gn(o,a.entity_id,i)).map(a=>({id:a.entity_id,result:A(a)})).filter(({result:a})=>a.supported&&!a.invalid&&a.events.length>0).map(({id:a,result:s})=>({id:a,types:new Set(s.events.map(c=>c.typeId??c.label)).size})).sort((a,s)=>s.types-a.types||a.id.localeCompare(s.id))[0];return r?[{calendar:n,sensor:r.id}]:[]})}function Mt(o,t,e,n){let i=o.states[n]?A(o.states[n]).events:[],r=t.overrides??[];return{entity:void 0,entities:y(t).map(a=>a===e?n:a),overrides:r.map(a=>{if(a.source!==e||!a.label)return a;let s=[...new Map(i.filter(d=>d.label===a.label).map(d=>[$(d),d])).values()],c=s[0]?.typeId??s[0]?.label;return s.length!==1||r.some(d=>d.source===n&&d.label===a.label)?a:{...a,type:c,source:n}})}}function Lt(o,t,e=[]){let n=new Map;for(let r of y(t)){let a=o.states[r];if(!(!a||!r.startsWith("sensor.")))for(let s of A(a).events)n.has($(s))||n.set($(s),s)}let i=new Set(y(t));for(let r of e)r.sourceId.startsWith("calendar.")&&i.has(r.sourceId)&&!n.has($(r))&&n.set($(r),r);return[...n.values()].sort(jt(q(t.locale,o)))}function Nt(o,t="en"){let e=new Map;for(let n of o){let i=e.get($(n));(!i||n.date<i.date)&&e.set($(n),n)}return[...e.values()].sort(le(t))}function Bt(o,t,e,n){let i=new Map;for(let r of o){if(r.date<e||r.date>=n)continue;let a=ce(r,t.overrides);if(a?.hidden)continue;let s=JSON.stringify([$(r),r.date,r.color,r.colorSource,r.icon]);i.has(s)||i.set(s,{...r,originalLabel:r.originalLabel??r.label,label:a?.name??r.label,color:a?.color??r.color,colorSource:a?.color?"customize":r.colorSource,icon:a?.icon??r.icon})}return[...i.values()].sort(le(t.locale))}function et(o){let t=new Map;for(let e of o){let n=t.get(e.date)??[];n.push(e),t.set(e.date,n)}return[...t].map(([e,n])=>({date:e,events:n}))}function U(o){return o.colorSource==="source"||o.colorSource==="customize"?o.color:void 0}var J=class{constructor(){this.generation=0;this.cache=new Map}reset(){this.generation++,this.cache.clear(),this.connection=void 0,this.timeZone=void 0}cancel(){this.generation++}async update(t,e,n){(this.connection!==t.connection||this.timeZone!==t.config.time_zone)&&(this.cache.clear(),this.connection=t.connection,this.timeZone=t.config.time_zone);let i=++this.generation,r=t.config.time_zone,a=V(new Date,r),s=se(a,e.days_to_show),c={rangeStart:a,rangeEnd:s,timeZone:r,messages:[]};n({...c,status:"loading",events:[]});let d=0,u=0,l=0,g=[],m=[];if(await Promise.all(y(e).map(async b=>{let f="sourceLoadFailed";try{let v=t.states[b];if(!v||v.state==="unavailable"||b.startsWith("calendar.")&&v.state==="unknown")throw f="sourceUnavailable",new Error(f);let G,T;if(b.startsWith("calendar."))G=It(await Xe(t,b,a,s),b,r);else{let D=A(v);if(!D.supported)throw f="sourceUnsupported",new Error(f);if(D.invalid)throw f="sourceInvalid",new Error(f);G=D.events,T=D.fetchedAt}if(i!==this.generation)return;this.cache.set(b,{events:G,fetchedAt:T}),T&&m.push(T),g.push(...G),u++}catch{if(i!==this.generation)return;d++,c.messages.push({source:b,reason:f});let v=this.cache.get(b);v&&(l++,g.push(...v.events),v.fetchedAt&&m.push(v.fetchedAt))}})),i!==this.generation)return;let w=Bt(g,e,a,s);n({...c,events:w,status:d?l||u?"stale":"unavailable":w.length?"ready":"empty",fetchedAt:m.sort((b,f)=>Date.parse(b)-Date.parse(f))[0]})}};var Ut={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Rt=o=>(...t)=>({_$litDirective$:o,values:t}),Ce=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,n){this._$Ct=t,this._$AM=e,this._$Ci=n}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var Wt="important",fn=" !"+Wt,z=Rt(class extends Ce{constructor(o){if(super(o),o.type!==Ut.ATTRIBUTE||o.name!=="style"||o.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(o){return Object.keys(o).reduce((t,e)=>{let n=o[e];return n==null?t:t+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(o,[t]){let{style:e}=o.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let n of this.ft)t[n]==null&&(this.ft.delete(n),n.includes("-")?e.removeProperty(n):e[n]=null);for(let n in t){let i=t[n];if(i!=null){this.ft.add(n);let r=typeof i=="string"&&i.endsWith(fn);n.includes("-")||r?e.setProperty(n,r?i.slice(0,-11):i,r?Wt:""):e[n]=i}}return E}});var yn={title:"Waste collection",next:"Next collection",putOutTonight:"Put out tonight",collectedTomorrow:"Collected tomorrow",comingDays:"Coming days",schedule:"Collection schedule",close:"Close",loading:"Loading schedule\u2026",empty:"No collections in this date range",partialEmpty:"No dates from the available sources",unavailable:"Schedule unavailable",stale:"Some sources are unavailable. Dates may be out of date.",staleBadge:"Out of date",collections:"collections",updated:"Provider updated",details:"View schedule",manageBins:"Manage bins",today:"Today",more:"more",previousPage:"Previous page",nextPage:"Next page",yourBins:"Your bins",upcoming:"Upcoming collections",clearFilter:"Show all bins",filterHint:"Select a bin to filter the schedule",ready:"Schedule available",sources:"Sources",binPage:"Bin pages",sourceUnavailable:"Source unavailable. Check the entity in Home Assistant.",sourceUnsupported:"Select a sensor with Generic details or a calendar.",sourceInvalid:"Invalid collection records. Check the source integration.",sourceLoadFailed:"Could not load this source. Check the entity and connection in Home Assistant."},bn={title:"Odbi\xF3r odpad\xF3w",next:"Najbli\u017Cszy odbi\xF3r",putOutTonight:"Wystaw dzi\u015B wieczorem",collectedTomorrow:"Odbi\xF3r jutro",comingDays:"Najbli\u017Csze dni",schedule:"Harmonogram odbioru",close:"Zamknij",loading:"\u0141adowanie harmonogramu\u2026",empty:"Brak odbior\xF3w w tym zakresie dat",partialEmpty:"Brak termin\xF3w z dost\u0119pnych \u017Ar\xF3de\u0142",unavailable:"Harmonogram niedost\u0119pny",stale:"Niekt\xF3re \u017Ar\xF3d\u0142a s\u0105 niedost\u0119pne. Terminy mog\u0105 by\u0107 nieaktualne.",staleBadge:"Nieaktualne",collections:"frakcje",updated:"Aktualizacja \u017Ar\xF3d\u0142a",details:"Zobacz harmonogram",manageBins:"Zarz\u0105dzaj pojemnikami",today:"Dzisiaj",more:"wi\u0119cej",previousPage:"Poprzednia strona",nextPage:"Nast\u0119pna strona",yourBins:"Twoje pojemniki",upcoming:"Nadchodz\u0105ce odbiory",clearFilter:"Poka\u017C wszystkie pojemniki",filterHint:"Wybierz pojemnik, aby filtrowa\u0107 harmonogram",ready:"Harmonogram dost\u0119pny",sources:"\u0179r\xF3d\u0142a",binPage:"Strony pojemnik\xF3w",sourceUnavailable:"\u0179r\xF3d\u0142o niedost\u0119pne. Sprawd\u017A encj\u0119 w Home Assistant.",sourceUnsupported:"Wybierz sensor z danymi Generic lub kalendarz.",sourceInvalid:"Nieprawid\u0142owe dane odbior\xF3w. Sprawd\u017A integracj\u0119 \u017Ar\xF3d\u0142ow\u0105.",sourceLoadFailed:"Nie uda\u0142o si\u0119 wczyta\u0107 \u017Ar\xF3d\u0142a. Sprawd\u017A encj\u0119 i po\u0142\u0105czenie w Home Assistant."},vn={title:"Afvalinzameling",next:"Volgende inzameling",putOutTonight:"Zet vanavond buiten",collectedTomorrow:"Morgen opgehaald",comingDays:"Komende dagen",schedule:"Inzamelschema",close:"Sluiten",loading:"Inzamelschema laden\u2026",empty:"Geen inzamelingen in deze periode",partialEmpty:"Geen inzameldata uit de beschikbare bronnen",unavailable:"Inzamelschema niet beschikbaar",stale:"Sommige bronnen zijn niet beschikbaar. De datums kunnen verouderd zijn.",staleBadge:"Verouderd",collections:"inzamelingen",updated:"Bron bijgewerkt",details:"Bekijk het inzamelschema",manageBins:"Containers beheren",today:"Vandaag",more:"meer",previousPage:"Vorige pagina",nextPage:"Volgende pagina",yourBins:"Je containers",upcoming:"Komende inzamelingen",clearFilter:"Toon alle containers",filterHint:"Selecteer een container om het schema te filteren",ready:"Inzamelschema beschikbaar",sources:"Bronnen",binPage:"Containerpagina\u2019s",sourceUnavailable:"Bron niet beschikbaar. Controleer de entiteit in Home Assistant.",sourceUnsupported:"Selecteer een sensor met Generic-gegevens of een kalender.",sourceInvalid:"Ongeldige inzamelgegevens. Controleer de bronintegratie.",sourceLoadFailed:"Kan deze bron niet laden. Controleer de entiteit en de verbinding in Home Assistant."},wn=new Map([["nl",vn],["pl",bn]]),C=o=>ye(o,wn,yn),tt=(o,t)=>`${o.source}: ${C(t)[o.reason]}`;function xn(o){let t=/^#([\da-f]{3}|[\da-f]{6})$/i.exec(o.trim())?.[1];if(t){let n=t.length===3?[...t].map(i=>i+i).join(""):t;return[0,2,4].map(i=>parseInt(n.slice(i,i+2),16))}let e=/^rgba?\(\s*(\d+)[\s,]+(\d+)[\s,]+(\d+)/i.exec(o.trim());return e?[Number(e[1]),Number(e[2]),Number(e[3])]:void 0}var Gt=([o,t,e])=>{let[n,i,r]=[o,t,e].map(a=>{let s=a/255;return s<=.03928?s/12.92:((s+.055)/1.055)**2.4});return .2126*n+.7152*i+.0722*r},$n="#1f1f1f",_n=Gt([31,31,31]);function kn(o){let t=xn(o);if(!t)return"#fff";let e=Gt(t),n=1.05/(e+.05);return(e+.05)/(_n+.05)>n?$n:"#fff"}var Se=o=>{let t=U(o);return p`<span class=${`swatch${t?"":" neutral"}`} aria-hidden="true"
    style=${z(t?{"--waste-type-color":t,"--waste-icon-color":kn(t)}:{})}><ha-icon
    .icon=${o.icon??"mdi:trash-can-outline"}></ha-icon></span>`},nt=(o,t,e=6)=>p`<div class="chips">
    ${o.slice(0,e).map(n=>p`<span class="chip">${Se(n)}<span>${n.label}</span></span>`)}
    ${o.length>e?p`<span class="chip overflow">+${new Intl.NumberFormat(t).format(o.length-e)} ${C(t).more}</span>`:h}
  </div>`,ot=o=>p`<div class="bins" aria-hidden="true">
    ${o.slice(0,3).map(t=>p`<div
          class="bin"
          style=${z({"--waste-type-color":U(t)})}
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
  </div>`,Ee=o=>{let{group:t,today:e,locale:n,moment:i}=o,r=C(n),a=i==="tonight";return p`<div class=${`primary${o.className?` ${o.className}`:""}${a?" tonight":""}`}>
    <div class="copy">
      <div class="eyebrow">${a?p`<ha-icon aria-hidden="true" icon="mdi:weather-night"></ha-icon>`:h}${r.next}</div>
      <span class="date">${a?r.putOutTonight:N(t.date,e,n)}</span>${nt(t.events,n)}
      <p class="full-date">${a?`${r.collectedTomorrow} \xB7 ${we(t.date,n)}`:Ke(t.date,e,n)}</p>
    </div>
    ${o.artwork?ot(t.events):h}
  </div>`},de=(o,t,e,n=14)=>{let i=new Map;for(let u of o)i.set(u.date,[...i.get(u.date)??[],u]);let r=new Intl.DateTimeFormat(e,{weekday:"narrow",timeZone:"UTC"}),a=new Intl.DateTimeFormat(e,{day:"numeric",timeZone:"UTC"}),s=3,c=new Intl.DateTimeFormat(e,{weekday:"long",day:"numeric",month:"long",timeZone:"UTC"}),d=Array.from({length:n},(u,l)=>se(t,l)).filter(u=>i.has(u));return p`${d.length?p`<div class="sr-only"><p>${C(e).comingDays}</p><ul>${d.map(u=>p`<li>${c.format(new Date(`${u}T12:00:00Z`))}: ${i.get(u).map(l=>l.label).join(", ")}</li>`)}</ul></div>`:h}
  <div class="strip" aria-hidden="true">
    ${Array.from({length:n},(u,l)=>{let g=se(t,l),m=i.get(g)??[],w=new Date(`${g}T12:00:00Z`),b=m.length-s;return p`<div class=${`strip-day${l===0?" today":""}${m.length?" has-pickup":""}`}>
        <span class="strip-weekday">${r.format(w)}</span>
        <span class="strip-date">${a.format(w)}</span>
        <span class="strip-dots">${m.slice(0,b>0?s-1:s).map(f=>{let v=U(f);return p`<span class=${`strip-dot${v?"":" neutral"}`} style=${z(v?{"--waste-type-color":v}:{})}></span>`})}${b>0?p`<span class="strip-more">+${new Intl.NumberFormat(e).format(b+1)}</span>`:h}</span>
      </div>`})}
  </div>`},Ft=o=>{let{group:t,later:e,today:n,locale:i}=o,r=C(i),a=o.moment==="tonight",s=t.events.length>6?5:6;return p`<div class=${`wall-now${a?" tonight":""}`}>
      <div class="eyebrow">${a?p`<ha-icon aria-hidden="true" icon="mdi:weather-night"></ha-icon>`:h}${r.next}</div>
      <span class="wall-date">${a?r.putOutTonight:N(t.date,n,i)}</span>
      <p class="full-date">${a?`${r.collectedTomorrow} \xB7 ${we(t.date,i)}`:Ke(t.date,n,i)}</p>
    </div>
    <ul class="wall-bins">
      ${t.events.slice(0,s).map(c=>{let d=U(c);return p`<li class=${`wall-bin${d?"":" neutral"}`} style=${z(d?{"--waste-type-color":d}:{})}>${Se(c)}<span>${c.label}</span></li>`})}
      ${t.events.length>s?p`<li class="wall-bin neutral overflow">+${new Intl.NumberFormat(i).format(t.events.length-s)} ${r.more}</li>`:h}
    </ul>
    ${e.length?p`<ol class="wall-later">${e.map(c=>p`<li>
      <span class="sr-only">${Je(c.date,n,i)}</span>
      <span class="wall-later-date" aria-hidden="true">${Ve(c.date,n,i)}</span>
      ${nt(c.events,i,3)}
    </li>`)}</ol>`:h}`},Y=(o,t,e,n=6)=>p`${o.map(i=>{let r=new Date(`${i.date}T12:00:00Z`);return p`<div class="group">
      <div class="day" aria-hidden="true">
        ${new Intl.DateTimeFormat(e,{month:"short",timeZone:"UTC"}).format(r)}<strong
          >${new Intl.DateTimeFormat(e,{day:"numeric",timeZone:"UTC"}).format(r)}</strong
        >
      </div>
      <div class="group-body">
        <div class="group-date"><span class="sr-only">${Je(i.date,t,e)}</span><span
          aria-hidden="true">${Ve(i.date,t,e)}</span></div>
        ${nt(i.events,e,n)}
      </div>
    </div>`})}`;var Zt=X`
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
`;async function it(o){return customElements.get("ha-form")||await(await(await window.loadCardHelpers()).createCardElement({type:"button"})).constructor.getConfigElement(),document.createElement(o)}function qt(o){let{events:t,groups:e,today:n,locale:i}=o,r=C(i),a=o.lead?.group,s=Nt(t,i),c=12,d=Math.max(1,Math.ceil(s.length/c)),u=Math.min(o.page,d-1),l=s.find(m=>$(m)===o.selected),g=l?e.map(m=>({...m,events:m.events.filter(w=>$(w)===o.selected)})).filter(m=>m.events.length):e.slice((o.lead?.index??0)+1);return p`
    ${a?Ee({group:a,today:n,locale:i,moment:o.lead.moment,artwork:o.artwork,className:"overview-next"}):h}
    ${o.strip?de(t,n,i,o.strip):h}
    <div class="section-heading"><h3>${r.yourBins}</h3><small>${new Intl.NumberFormat(i).format(s.length)}</small></div>
    <p class="filter-hint">${r.filterHint}</p>
    <div class="bin-grid">${s.slice(u*c,(u+1)*c).map(m=>p`
      <button class="bin-tile" aria-pressed=${!!(l&&$(m)===o.selected)}
        @click=${()=>o.select($(m)===o.selected?void 0:$(m))}>
        ${o.artwork?ot([m]):Se(m)}
        <span class="tile-copy"><strong>${B(m,s)}</strong>${o.showSource?p`<small class="source-name">${_(o.hass,m.sourceId,o.sources)}</small>`:h}
          <span class="tile-date">${N(m.date,n,i)}</span></span>
        <span class="tile-color" aria-hidden="true" style=${z({backgroundColor:U(m)})}></span>
      </button>`)}</div>
    ${d>1?p`<nav class="pages" aria-label=${r.binPage}><button ?disabled=${u===0} @click=${()=>o.changePage(u-1)}>${r.previousPage}</button>
      <span aria-live="polite">${new Intl.NumberFormat(i).format(u+1)} / ${new Intl.NumberFormat(i).format(d)}</span><button ?disabled=${u+1===d} @click=${()=>o.changePage(u+1)}>${r.nextPage}</button></nav>`:h}
    ${g.length||l?p`
      <div class="section-heading"><h3>${r.upcoming}</h3>${l?p`<button class="filter-reset" @click=${()=>o.select(void 0)}>${r.clearFilter}</button>`:h}</div>
      ${l?p`<p class="filter-hint" role="status">${B(l,s)}${o.showSource?p` · ${_(o.hass,l.sourceId,o.sources)}`:h}</p>`:h}
      <div class="overview-schedule">${Y(g.slice(0,o.maxGroups),n,i)}</div>`:h}`}var R=class extends k{constructor(){super(...arguments);this.badge=!1;this.detailsOpen=!1;this.detailsPage=0;this.binPage=0;this.controller=new J;this.visible=()=>{document.visibilityState==="visible"&&this.refresh()}}set hass(e){let n=this.ha;this.ha=e,(!n||n.connection!==e.connection||n.config.time_zone!==e.config.time_zone)&&(this.snapshot=void 0,this.selectedBin=void 0,this.binPage=0),(!n||n.connection!==e.connection||n.config.time_zone!==e.config.time_zone||y(this.config??{type:""}).some(i=>n.states[i]!==e.states[i]))&&this.refresh(),(!n||n.locale?.language!==e.locale?.language||n.language!==e.language)&&this.requestUpdate()}get hass(){return this.ha}setConfig(e){let n=be(e),i=this.config,r=!i||JSON.stringify(y(i).sort())!==JSON.stringify(y(n).sort());r&&this.controller.reset(),(r||i?.days_to_show!==n.days_to_show||JSON.stringify(i?.overrides)!==JSON.stringify(n.overrides))&&(this.snapshot=void 0,this.selectedBin=void 0,this.binPage=0,this.detailsPage=0),this.config=n,this.refresh(),this.requestUpdate()}static getConfigElement(){return it("waste-pickup-planner-card-editor")}static getStubConfig(e){let n=ke(e,{type:""});return{type:"custom:waste-pickup-planner-card",entity:n.find(i=>i.startsWith("sensor."))??n[0]??"sensor.waste_schedule",layout:"compact"}}getCardSize(){return this.config?.layout==="overview"?8:this.config?.layout==="wall"?7:this.config?.layout==="schedule"?Math.min(this.config.max_groups+1,8):this.config?.layout==="hero"?5:3}getGridOptions(){return{columns:12,min_columns:6,rows:"auto"}}connectedCallback(){super.connectedCallback(),document.addEventListener("visibilitychange",this.visible),this.timer=setInterval(()=>this.refresh(),6e4),this.refresh()}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.timer),document.removeEventListener("visibilitychange",this.visible),this.controller.cancel(),this.detailsOpen=!1}refresh(){if(!this.isConnected||!this.ha||!this.config)return;let e=new Date;this.day=V(e,this.ha.config.time_zone);let n=At(e,this.ha.config.time_zone);n!==this.hour&&(this.hour=n,this.requestUpdate()),this.snapshot?.rangeStart!==this.day&&(this.snapshot=void 0),this.controller.update(this.ha,this.config,i=>{(i.status!=="loading"||!this.snapshot)&&(this.snapshot=i)})}async activate(){let e=this.config;if(!e)return;let n=e.tap_action?.action??"details";n!=="none"&&(n==="more-info"?this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:y(e)[0]},bubbles:!0,composed:!0})):n==="navigate"?(history.pushState(null,"",e.tap_action.navigation_path),window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1}}))):(this.detailsPage=0,this.detailsOpen=!0,await this.updateComplete,this.isConnected&&this.detailsOpen&&this.renderRoot.querySelector("dialog")?.showModal()))}manageBins(){history.pushState(null,"","/config/integrations/integration/waste_collection_schedule"),window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1}}))}sourceDetails(e){this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0}))}async changeDetailsPage(e){this.detailsPage=e,await this.updateComplete;let n=this.renderRoot.querySelector("dialog");n?.querySelector(".close")?.focus({preventScroll:!0}),n?.scrollTo(0,0)}keepDetailsFocus(e){if(e.key!=="Tab")return;let n=e.currentTarget,i=Array.from(n.querySelectorAll("button:not([disabled])")),r=i[0],a=i[i.length-1];if(!r||!a)return;let s=n.getRootNode().activeElement;(e.shiftKey&&s===r||!e.shiftKey&&s===a)&&(e.preventDefault(),(e.shiftKey?a:r).focus())}render(){if(!this.config)return h;let e=q(this.config.locale,this.ha),n=C(e),i=this.snapshot,r=[...i?.events??[]].sort(le(e)),a=et(r),s=i?.rangeStart??this.day??"2000-01-01",c=zt(a,s,this.hour??0,this.config.evening_hour??18),d=c?.group,u=c?a.slice(c.index+1):[],l=this.config.layout==="overview"&&i?.events.some(x=>$(x)===this.selectedBin)?this.selectedBin:void 0,g=l?r.filter(x=>$(x)===l):r,m=y(this.config),w=this.config.show_source??m.length>1,b=this.config.title??n.title,f=i?.status??"loading",v=f==="empty"?n.empty:f==="stale"?n.partialEmpty:f==="unavailable"?n.unavailable:n.loading,G=d?d.events.length>2?`${new Intl.NumberFormat(e).format(d.events.length)} ${n.collections}`:d.events.map(x=>x.label).join(" \xB7 "):v,T=c?.moment??"upcoming",D=d?T==="tonight"?n.putOutTonight:N(d.date,s,e):v,Te=this.config.show_strip??["hero","overview"].includes(this.config.layout??"compact"),Ie=Math.min(14,this.config.days_to_show??30),rt=f==="stale"?p`<p class="notice" role="status">${n.stale}</p>`:h,pe=100,he=Math.max(1,Math.ceil(g.length/pe)),j=Math.min(this.detailsPage,he-1),at=this.detailsOpen?p`<dialog aria-label=${n.schedule} @keydown=${this.keepDetailsFocus} @close=${()=>{this.detailsOpen=!1}}>
      <div class="heading">
        <h2>${b}</h2>
        <button
          class="close"
          aria-label=${n.close}
          @click=${()=>this.renderRoot.querySelector("dialog")?.close()}
        >
          ✕
        </button>
      </div>
      ${g.length?Y(et(g.slice(j*pe,(j+1)*pe)),s,e,pe):p`<p class="state">${v}</p>`}${rt}${i?.messages.map(x=>p`<p class="state">${tt(x,e)}</p>`)}
      ${he>1?p`<nav class="pages" aria-label=${n.schedule}>
        <button ?disabled=${j===0} @click=${()=>this.changeDetailsPage(j-1)}>${n.previousPage}</button>
        <span aria-live="polite">${new Intl.NumberFormat(e).format(j+1)} / ${new Intl.NumberFormat(e).format(he)}</span>
        <button ?disabled=${j+1===he} @click=${()=>this.changeDetailsPage(j+1)}>${n.nextPage}</button>
      </nav>`:h}
    </dialog>`:h;if(this.badge){let x=d?d.events.slice(0,6).map(Xt=>Xt.label).join(" \xB7 ")+(d.events.length>6?` \xB7 +${new Intl.NumberFormat(e).format(d.events.length-6)} ${n.more}`:""):v,lt=`${b}: ${D}. ${x}${f==="stale"?`. ${n.stale}`:""}`,ct=p`<ha-icon aria-hidden="true"
        .icon=${f==="stale"||f==="unavailable"?"mdi:alert-circle-outline":"mdi:trash-can-outline"}></ha-icon>
        <span class="badge-copy"><strong>${d?D:b}</strong>
        <small>${f==="stale"?`${n.staleBadge} \xB7 `:""}${G}</small></span>`;return this.config.tap_action?.action==="none"?p`<div class="badge" role="img" aria-label=${lt} title=${x}>${ct}</div>`:p`<button class="badge" aria-label=${lt} title=${x} @click=${this.activate}>${ct}</button>${at}`}let De=this.config.tap_action?.action!=="none"&&this.config.layout!=="overview",st=this.config.tap_action?.action==="more-info"||this.config.tap_action?.action==="navigate"?b:n.details;return p`<ha-card data-appearance=${this.config.appearance??"native"} data-density=${this.config.density??"comfortable"}
        ><section class=${`surface ${this.config.layout}${De?" tappable":""}`}>
          ${De?p`<button class="surface-action" @click=${this.activate}>
            <span class="sr-only">${st}</span></button>`:h}
          ${this.config.title!==void 0?p`<div class="heading">
            <h2>${b}</h2>
            <ha-icon aria-hidden="true" icon="mdi:calendar-outline"></ha-icon>
          </div>`:h}
          ${d?this.config.layout==="overview"?qt({events:r,groups:a,today:s,locale:e,lead:c,artwork:this.config.show_artwork??!0,strip:Te?Ie:0,showSource:w,sources:m,hass:this.ha,maxGroups:this.config.max_groups,selected:l,page:this.binPage,select:x=>{this.selectedBin=x,this.detailsPage=0},changePage:x=>{this.binPage=x}}):this.config.layout==="wall"?Ft({group:d,later:u.slice(0,this.config.max_groups-1),today:s,locale:e,moment:T}):this.config.layout==="schedule"?p`${Te?de(r,s,e,Ie):h}${Y(a.slice(0,this.config.max_groups),s,e)}`:p`${Ee({group:d,today:s,locale:e,moment:T,artwork:this.config.layout==="hero"&&!!this.config.show_artwork})}
                    ${Te?de(r,s,e,Ie):h}
                    ${this.config.layout==="hero"&&u.length?p`<div class="upcoming">${Y(u.slice(0,this.config.max_groups-1),s,e)}</div>`:h}`:p`<p class="state" role="status">${v}</p>`}
          ${rt}${f==="unavailable"?i?.messages.map(x=>p`<p class="state">${tt(x,e)}</p>`):h}
          ${this.config.show_updated&&i?.fetchedAt?p`<p class="updated">${n.updated}: ${Tt(i.fetchedAt,e,i.timeZone)}</p>`:h}
          ${this.config.layout==="overview"?p`${f==="ready"?h:p`<div class=${`source-status ${f}`} role="status">
            <ha-icon aria-hidden="true" .icon=${f==="stale"||f==="unavailable"?"mdi:alert-circle-outline":"mdi:calendar-outline"}></ha-icon>
            <span>${f==="stale"?n.staleBadge:v}</span>
          </div>`}<div class="source-links" aria-label=${n.sources}>${m.map(x=>p`<button @click=${()=>this.sourceDetails(x)}>${_(this.ha,x,m)} <span aria-hidden="true">↗</span></button>`)}</div>`:h}
        </section>
        ${this.config.tap_action?.action==="none"||De?h:p`<button class="action" @click=${this.activate}><span>${st}</span><ha-icon aria-hidden="true" icon="mdi:chevron-right"></ha-icon></button>`}
        ${this.config.show_manage_bins?p`<button class="action" @click=${this.manageBins}><span>${n.manageBins}</span><ha-icon aria-hidden="true" icon="mdi:cog-outline"></ha-icon></button>`:h}</ha-card
      >${at}`}};R.styles=Zt,R.properties={snapshot:{state:!0},detailsOpen:{state:!0},detailsPage:{state:!0},selectedBin:{state:!0},binPage:{state:!0}};var Ae=class extends R{constructor(){super(...arguments);this.badge=!0}static getConfigElement(){return it("waste-pickup-planner-badge-editor")}static getStubConfig(e){return{...super.getStubConfig(e),type:"custom:waste-pickup-planner-badge"}}};var Cn={source:"Source and layout",appearanceSection:"Appearance",binsSection:"Bins",entities:"Waste sensors or calendars",title:"Title",layout:"Layout",appearance:"Appearance",density:"Density",days_to_show:"Days to show",max_groups:"Visible date groups",show_artwork:"Show bin artwork",show_updated:"Show provider update time",show_manage_bins:"Show Manage bins shortcut",show_source:"Show source names",locale:"Language override (optional)",invalidLocale:"Enter a language code such as nl or en-GB, or leave the field blank.",show_strip:"Show the 14-day strip",evening_hour:"Put-out reminder from (hour)",compact:"Compact",hero:"Hero",schedule:"Schedule",overview:"Overview",wall:"Wall tablet",native:"Native Home Assistant",modern:"Modern",minimal:"Minimal",comfortable:"Comfortable",sourceHelp:"Select one authoritative source per address. For Waste Collection Schedule, choose the combined sensor with Generic details (All attributes in visual bin controls). Calendars also work.",unsupported:"No structured schedule is exposed. Open the sensor settings and choose Generic / All attributes.",binsHelp:"Integration colors apply until you choose an override. Shared bin definitions stay in Waste Collection Schedule.",rangeHelp:"Calendar bin choices come from events in the selected date range. Bins without records can be added in Advanced.",calendarColors:"Calendars only give a name and date for each pickup, so their bins stay neutral. The Waste Collection Schedule sensor for the same address adds bin types and the colors your source provides.",useSensor:"Use the sensor instead",noBins:"No bins found in the supplied schedule.",calendarLoading:"Loading calendar bins\u2026",calendarFailed:"Some calendar bins could not be loaded. Check the source entity or try again.",customize:"Edit bin",displayName:"Display name",localColor:"Local bin color",inheritedColor:"Inherited card color",integrationColor:"Integration color",localColorStatus:"Local color",varyingColors:"Integration colors vary by bin.",neutralColor:"No integration color is available; artwork stays neutral.",resetInherited:"Use inherited card color",resetIntegration:"Use integration color",hide:"Hide this collection",hidden:"Hidden",local:"Customized",integration:"Integration",done:"Done",remove:"Reset this override",matching:"Advanced matching and icon",type:"Category ID or exact calendar name",binSource:"Source entity (optional)",label:"Exact bin name (optional)",icon:"Icon (mdi:\u2026)",color:"Local color (#RRGGBB)",advanced:"Advanced settings",advancedOverride:"Add a category or missing bin override",overrideHelp:"Use the exact type ID, or the complete collection name for older sensors and calendars.",addOverride:"Add collection override",tap:"Tap action",details:"View schedule","more-info":"Entity details",overrideLimit:"This card supports up to 100 overrides. Reset an unused override before adding another.",navigate:"Open dashboard",none:"No action",navigationPath:"Dashboard path",retry:"Retry"},Sn={source:"\u0179r\xF3d\u0142o i uk\u0142ad",appearanceSection:"Wygl\u0105d",binsSection:"Pojemniki",entities:"Sensory odpad\xF3w lub kalendarze",title:"Tytu\u0142",layout:"Uk\u0142ad",appearance:"Wygl\u0105d",density:"Odst\u0119py",days_to_show:"Liczba dni",max_groups:"Widoczne grupy termin\xF3w",show_artwork:"Poka\u017C ilustracje pojemnik\xF3w",show_updated:"Poka\u017C czas aktualizacji \u017Ar\xF3d\u0142a",show_manage_bins:"Poka\u017C skr\xF3t Zarz\u0105dzaj pojemnikami",show_source:"Poka\u017C nazwy \u017Ar\xF3de\u0142",locale:"J\u0119zyk (opcjonalnie)",invalidLocale:"Wpisz kod j\u0119zyka, np. pl lub pl-PL, albo pozostaw pole puste.",show_strip:"Poka\u017C pasek 14 dni",evening_hour:"Przypomnienie o wystawieniu od (godzina)",compact:"Kompaktowy",hero:"Wyr\xF3\u017Cniony",schedule:"Harmonogram",overview:"Przegl\u0105d",wall:"Tablet \u015Bcienny",native:"Natywny Home Assistant",modern:"Nowoczesny",minimal:"Minimalistyczny",comfortable:"Wygodne",sourceHelp:"Wybierz jedno g\u0142\xF3wne \u017Ar\xF3d\u0142o dla ka\u017Cdego adresu. W Waste Collection Schedule wybierz sensor zbiorczy ze szczeg\xF3\u0142ami Generic (Wszystkie atrybuty w ustawieniach wizualnych). Mo\u017Cesz te\u017C u\u017Cy\u0107 kalendarza.",unsupported:"Sensor nie udost\u0119pnia danych harmonogramu. Otw\xF3rz jego ustawienia i wybierz Generic / Wszystkie atrybuty.",binsHelp:"Kolory integracji obowi\u0105zuj\u0105 do wybrania w\u0142asnych. Wsp\xF3lne definicje pojemnik\xF3w pozostaj\u0105 w Waste Collection Schedule.",rangeHelp:"Pojemniki kalendarza pochodz\u0105 z wydarze\u0144 w wybranym zakresie dat. Pojemniki bez termin\xF3w mo\u017Cna doda\u0107 w ustawieniach zaawansowanych.",calendarColors:"Kalendarze podaj\u0105 tylko nazw\u0119 i dat\u0119 odbioru, wi\u0119c ich pojemniki pozostaj\u0105 neutralne. Sensor Waste Collection Schedule dla tego samego adresu dodaje rodzaje pojemnik\xF3w i kolory podane przez \u017Ar\xF3d\u0142o.",useSensor:"U\u017Cyj sensora",noBins:"Brak pojemnik\xF3w w udost\u0119pnionym harmonogramie.",calendarLoading:"\u0141adowanie pojemnik\xF3w kalendarza\u2026",calendarFailed:"Nie uda\u0142o si\u0119 wczyta\u0107 niekt\xF3rych pojemnik\xF3w kalendarza. Sprawd\u017A encj\u0119 \u017Ar\xF3d\u0142ow\u0105 lub spr\xF3buj ponownie.",customize:"Edytuj pojemnik",displayName:"Wy\u015Bwietlana nazwa",localColor:"W\u0142asny kolor pojemnika",inheritedColor:"Odziedziczony kolor karty",integrationColor:"Kolor integracji",localColorStatus:"W\u0142asny kolor",varyingColors:"Kolory integracji r\xF3\u017Cni\u0105 si\u0119 mi\u0119dzy pojemnikami.",neutralColor:"Brak koloru integracji; ilustracje pozostaj\u0105 neutralne.",resetInherited:"U\u017Cyj odziedziczonego koloru karty",resetIntegration:"U\u017Cyj koloru integracji",hide:"Ukryj ten odbi\xF3r",hidden:"Ukryty",local:"Dostosowany",integration:"Integracja",done:"Gotowe",remove:"Przywr\xF3\u0107 ustawienia tego wpisu",matching:"Zaawansowane dopasowanie i ikona",type:"ID kategorii lub dok\u0142adna nazwa kalendarza",binSource:"Encja \u017Ar\xF3d\u0142owa (opcjonalnie)",label:"Dok\u0142adna nazwa pojemnika (opcjonalnie)",icon:"Ikona (mdi:\u2026)",color:"W\u0142asny kolor (#RRGGBB)",advanced:"Ustawienia zaawansowane",advancedOverride:"Dodaj wpis dla kategorii lub brakuj\u0105cego pojemnika",overrideHelp:"U\u017Cyj dok\u0142adnego ID kategorii lub pe\u0142nej nazwy odbioru ze starszych sensor\xF3w i kalendarzy.",addOverride:"Dodaj wpis odbioru",tap:"Akcja po dotkni\u0119ciu",details:"Zobacz harmonogram","more-info":"Szczeg\xF3\u0142y encji",overrideLimit:"Karta obs\u0142uguje do 100 w\u0142asnych wpis\xF3w. Usu\u0144 nieu\u017Cywany wpis przed dodaniem kolejnego.",navigate:"Otw\xF3rz pulpit",none:"Brak akcji",navigationPath:"\u015Acie\u017Cka pulpitu",retry:"Spr\xF3buj ponownie"},En={source:"Bron en indeling",appearanceSection:"Weergave",binsSection:"Containers",entities:"Afvalsensoren of kalenders",title:"Titel",layout:"Indeling",appearance:"Weergave",density:"Afstand",days_to_show:"Aantal dagen",max_groups:"Zichtbare datumgroepen",show_artwork:"Toon containerillustraties",show_updated:"Toon wanneer de bron is bijgewerkt",show_manage_bins:"Toon de snelkoppeling voor containerbeheer",show_source:"Toon bronnamen",locale:"Taal instellen (optioneel)",invalidLocale:"Voer een taalcode in, zoals nl of nl-BE, of laat het veld leeg.",show_strip:"Toon de strook met 14 dagen",evening_hour:"Herinnering om containers buiten te zetten vanaf (uur)",compact:"Compact",hero:"Uitgelicht",schedule:"Schema",overview:"Overzicht",wall:"Wandtablet",native:"Standaard Home Assistant",modern:"Modern",minimal:"Minimalistisch",comfortable:"Ruim",sourceHelp:"Kies \xE9\xE9n hoofdbron per adres. Gebruik in Waste Collection Schedule de gecombineerde sensor met Generic-gegevens (Alle attributen in de visuele containerinstellingen). Je kunt ook een kalender gebruiken.",unsupported:"De sensor biedt geen gestructureerd schema. Open de sensorinstellingen en kies Generic / Alle attributen.",binsHelp:"De kleuren van de integratie gelden totdat je zelf een kleur kiest. Gedeelde containerinstellingen beheer je in Waste Collection Schedule.",rangeHelp:"De beschikbare containers komen uit kalenderafspraken in de gekozen periode. Je kunt containers zonder afspraken toevoegen bij Geavanceerde instellingen.",calendarColors:"Kalenders bevatten alleen een naam en een datum per inzameling, dus de containers houden een neutrale kleur. De Waste Collection Schedule-sensor voor hetzelfde adres geeft ook de containertypen en kleuren uit je bron door.",useSensor:"Gebruik deze sensor",noBins:"Geen containers gevonden in het opgegeven schema.",calendarLoading:"Containers uit de kalender laden\u2026",calendarFailed:"Sommige containers konden niet uit de kalender worden geladen. Controleer de bronentiteit of probeer het opnieuw.",customize:"Container bewerken",displayName:"Weergavenaam",localColor:"Eigen containerkleur",inheritedColor:"Overgenomen kaartkleur",integrationColor:"Kleur van de integratie",localColorStatus:"Eigen kleur",varyingColors:"De integratiekleuren verschillen per container.",neutralColor:"Er is geen integratiekleur beschikbaar. De illustratie houdt een neutrale kleur.",resetInherited:"Gebruik de overgenomen kaartkleur",resetIntegration:"Gebruik de kleur van de integratie",hide:"Verberg deze inzameling",hidden:"Verborgen",local:"Aangepast",integration:"Integratie",done:"Klaar",remove:"Deze aanpassing herstellen",matching:"Geavanceerde selectie en pictogram",type:"Categorie-ID of exacte kalendernaam",binSource:"Bronentiteit (optioneel)",label:"Exacte containernaam (optioneel)",icon:"Pictogram (mdi:\u2026)",color:"Eigen kleur (#RRGGBB)",advanced:"Geavanceerde instellingen",advancedOverride:"Instelling voor een categorie of ontbrekende container toevoegen",overrideHelp:"Gebruik de exacte type-ID of, voor oudere sensoren en kalenders, de volledige naam van de inzameling.",addOverride:"Inzamelinstelling toevoegen",tap:"Actie bij tikken",details:"Bekijk het inzamelschema","more-info":"Entiteitsdetails",overrideLimit:"Deze kaart ondersteunt maximaal 100 aanpassingen. Verwijder een ongebruikte aanpassing voordat je er een toevoegt.",navigate:"Dashboard openen",none:"Geen actie",navigationPath:"Dashboardpad",retry:"Opnieuw proberen"},An=new Map([["nl",En],["pl",Sn]]),Kt=o=>ye(o,An,Cn);var Vt=X`
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
`;function Jt(o){return{...o,entities:y(o),layout:o.layout??"compact",appearance:o.appearance??"native",density:o.density??"comfortable",show_artwork:o.show_artwork??o.layout==="overview",show_source:o.show_source??y(o).length>1,show_strip:o.show_strip??["hero","overview"].includes(o.layout??"compact"),evening_hour:o.evening_hour??18}}function Yt(o,t,e){let n=Object.fromEntries(e.filter(i=>Object.prototype.hasOwnProperty.call(t,i)&&JSON.stringify(o[i])!==JSON.stringify(t[i])).map(i=>[i,t[i]]));return Object.prototype.hasOwnProperty.call(n,"entities")&&(n.entity=void 0),n}var W=class extends k{constructor(){super(...arguments);this.invalidLocale=!1;this.controller=new J}set hass(e){let n=this.ha;this.ha=e,(!n||n.connection!==e.connection||n.config.time_zone!==e.config.time_zone)&&(this.controller.reset(),this.calendarSnapshot=void 0),(!n||n.connection!==e.connection||n.config.time_zone!==e.config.time_zone||y(this.config??{type:""}).some(i=>n.states[i]!==e.states[i]))&&this.refreshBins(),this.requestUpdate()}get hass(){return this.ha}setConfig(e){let n=this.config;this.config={...e},e.locale!==n?.locale&&(this.invalidLocale=!1),(!n||JSON.stringify(y(n))!==JSON.stringify(y(e))||n.days_to_show!==e.days_to_show)&&(this.controller.reset(),this.calendarSnapshot=void 0,this.editing=void 0,this.refreshBins()),this.editing!==void 0&&!this.config.overrides?.[this.editing]&&(this.editing=void 0)}connectedCallback(){super.connectedCallback(),this.timer=setInterval(()=>this.refreshBins(),6e4),this.refreshBins()}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.timer),this.controller.cancel()}refreshBins(){if(!(!this.isConnected||!this.ha||!this.config))try{let e=be({...this.config,overrides:[]});if(!y(e).some(n=>n.startsWith("calendar.")))return;this.controller.update(this.ha,e,n=>{(n.status!=="loading"||!this.calendarSnapshot)&&(this.calendarSnapshot=n)})}catch{}}changed(e){this.setConfig({...this.config,...e}),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this.config},bubbles:!0,composed:!0}))}override(e,n){let i=[...this.config?.overrides??[]];i[e]={...i[e],...n},this.changed({overrides:i})}form(e,n){let i=this.config.type.includes("badge"),r=(c,d)=>({name:c,selector:{select:{options:d.map(u=>({value:u,label:n[u]})),mode:"dropdown"}}}),a=[{name:"entities",required:!0,selector:{entity:{domain:["sensor","calendar"],multiple:!0,include_entities:ke(this.ha,this.config)}}},{name:"title",selector:{text:{}}},r("layout",["compact","hero","schedule","overview","wall"]),r("appearance",["native","modern","minimal"]),r("density",["comfortable","compact"]),{name:"days_to_show",selector:{number:{min:1,max:366,mode:"box"}}},{name:"max_groups",selector:{number:{min:1,max:50,mode:"box"}}},{name:"evening_hour",selector:{number:{min:0,max:23,mode:"box",unit_of_measurement:"h"}}},...["show_artwork","show_updated","show_manage_bins","show_source","show_strip"].map(c=>({name:c,selector:{boolean:{}}}))].filter(c=>e.includes(c.name)&&(!i||!["layout","max_groups","show_artwork","show_manage_bins","appearance","density","show_source","show_strip"].includes(c.name)));if(!a.length)return h;let s=Jt(this.config);return p`<ha-form .hass=${this.ha} .data=${s} .schema=${a}
      .computeLabel=${c=>n[c.name]}
      @value-changed=${c=>{let d=Yt(s,c.detail.value,a.map(u=>u.name));Object.keys(d).length&&this.changed(d)}}></ha-form>`}changeLocale(e){let n=e.value.trim(),i=M(n);this.invalidLocale=!!(n&&!i),!this.invalidLocale&&(e.value=i??"",i!==this.config?.locale&&this.changed({locale:i}))}editPanel(e,n,i,r){let a=this.editing;if(a===void 0||!this.config.overrides?.[a])return h;let s=this.config.overrides[a],c=Ht(s,this.config.overrides),d=n.filter(f=>_e(f,s)),u=new Set(d.map(f=>f.color)),l=u.size===1?d[0]?.color:void 0,g=c?.color?`${e.inheritedColor}: ${c.color}`:u.size>1?e.varyingColors:l?`${e.integrationColor}: ${l}`:e.neutralColor,m=s.source&&s.label?i.find(f=>_e(f,s)):void 0,w={sourceId:s.source??"",typeId:s.type,originalLabel:s.label??s.type,label:s.name??s.label??s.type},b=B(m??w,r);return p`<fieldset><legend>${b}${s.source?p` · ${_(this.ha,s.source,y(this.config))}`:h}</legend>
      <label>${e.displayName}<input .value=${s.name??""} placeholder=${c?.name??s.label??s.type}
        @input=${f=>this.override(a,{name:f.target.value||void 0})} /></label>
      <label>${e.localColor}<input type="color" .value=${s.color??c?.color??l??"#808080"}
        @input=${f=>this.override(a,{color:f.target.value})} /></label>
      <p>${s.color?`${e.localColorStatus}: ${s.color}`:g}</p>
      ${s.color?p`<button @click=${()=>this.override(a,{color:void 0})}>${c?.color?e.resetInherited:e.resetIntegration}</button>`:h}
      <label class="check"><input type="checkbox" .checked=${s.hidden??c?.hidden??!1}
        @change=${f=>this.override(a,{hidden:f.target.checked})} />${e.hide}</label>
      <details><summary>${e.matching}</summary>
        ${["type","source","label","icon","color"].map(f=>p`<label>${f==="source"?e.binSource:e[f]}<input .value=${s[f]??""}
          @change=${v=>this.override(a,{[f]:v.target.value||void 0})} /></label>`)}
      </details>
      <div class="buttons"><button @click=${()=>{this.editing=void 0}}>${e.done}</button>
        <button @click=${()=>{this.editing=void 0,this.changed({overrides:this.config.overrides.filter((f,v)=>v!==a)})}}>${e.remove}</button></div>
    </fieldset>`}render(){if(!this.config||!this.ha)return h;let e=Kt(q(this.config.locale,this.ha)),n=Lt(this.ha,this.config,this.calendarSnapshot?.events),i=this.config.overrides??[],r=y(this.config),a=n.map(l=>({...l,originalLabel:l.label,label:ce(l,i)?.name??l.label})),s=y(this.config).filter(l=>l.startsWith("sensor.")&&this.ha.states[l]&&!A(this.ha.states[l]).supported),c=i.map((l,g)=>({o:l,index:g})).filter(({o:l})=>!n.some(g=>l.type===(g.typeId??g.label)&&l.source===g.sourceId&&l.label===g.label)),d=c.map(({o:l})=>({sourceId:l.source??"",typeId:l.type,originalLabel:l.label??l.type,label:l.name??l.label??l.type})),u=[...a,...d];return p`<h3>${e.source}</h3>${this.form(["entities","title","layout"],e)}<p>${e.sourceHelp}</p>
      ${s.length?p`<p class="warning" role="status">${s.join(", ")}: ${e.unsupported}</p>`:h}
      ${r.some(l=>l.startsWith("calendar."))?p`<div class="hint"><p>${e.calendarColors}</p>
        ${Ot(this.ha,this.config).map(({calendar:l,sensor:g})=>p`<button
          aria-label=${`${e.useSensor}: ${_(this.ha,g,[g])} \xB7 ${_(this.ha,l,r)}`}
          @click=${()=>{this.editing=void 0,this.changed(Mt(this.ha,this.config,l,g))}}>${e.useSensor} · ${_(this.ha,g,[g])}</button>`)}</div>`:h}
      ${this.config.type.includes("badge")?h:p`<h3>${e.appearanceSection}</h3>${this.form(["appearance","density","show_artwork","show_strip","show_source","show_manage_bins"],e)}`}
      <h3>${e.binsSection}</h3><p>${e.binsHelp}</p>
      ${i.length>=100?p`<p role="status">${e.overrideLimit}</p>`:h}
      <div class="bin-list">${n.map((l,g)=>{let m=i.findIndex(f=>f.type===(l.typeId??l.label)&&f.source===l.sourceId&&f.label===l.label),w=ce(l,i),b=B(a[g],u);return p`<button class="bin-row" aria-label=${`${e.customize}: ${b} \xB7 ${_(this.ha,l.sourceId,r)}`} aria-pressed=${m>=0&&this.editing===m} ?disabled=${m<0&&i.length>=100}
          @click=${()=>{m>=0?this.editing=m:(this.changed({overrides:[...i,{type:l.typeId??l.label,source:l.sourceId,label:l.label}]}),this.editing=i.length)}}><span class="swatch" aria-hidden="true" style=${z({"--waste-type-color":w?.color??l.color})}></span>
          <span class="bin-copy"><strong>${b}</strong><small>${_(this.ha,l.sourceId,r)} · ${w?.hidden?e.hidden:w?.hidden!==void 0||w?.color||w?.name||w?.icon?e.local:e.integration}</small></span><span aria-hidden="true">✎</span></button>
          ${m>=0&&this.editing===m?this.editPanel(e,n,a,u):h}`})}${c.map(({o:l,index:g},m)=>p`<button class="bin-row" aria-pressed=${this.editing===g} @click=${()=>{this.editing=g}}>
        <span class="bin-copy"><strong>${B(d[m],u)}</strong><small>${l.source?_(this.ha,l.source,r):e.matching}</small></span><span aria-hidden="true">✎</span></button>
        ${this.editing===g?this.editPanel(e,n,a,u):h}`)}</div>
      ${n.length?h:p`<p>${e.noBins}</p>`}
      ${y(this.config).some(l=>l.startsWith("calendar."))?p`<p>${e.rangeHelp}</p>
        ${!this.calendarSnapshot||this.calendarSnapshot.status==="loading"?p`<p role="status">${e.calendarLoading}</p>`:this.calendarSnapshot.messages.some(l=>l.source.startsWith("calendar."))?p`<p class="warning" role="status">${e.calendarFailed} <button @click=${this.refreshBins}>${e.retry}</button></p>`:h}`:h}
      <details><summary>${e.advanced}</summary>${this.form(["days_to_show","max_groups","evening_hour","show_updated"],e)}
        <label>${e.locale}<input .value=${this.config.locale??""} spellcheck="false"
          aria-invalid=${this.invalidLocale?"true":"false"}
          aria-describedby=${this.invalidLocale?"locale-error":h}
          @change=${l=>this.changeLocale(l.target)} /></label>
        ${this.invalidLocale?p`<p id="locale-error" class="warning" role="alert">${e.invalidLocale}</p>`:h}
        <label>${e.tap}<select .value=${this.config.tap_action?.action??"details"} @change=${l=>this.changed({tap_action:{action:l.target.value}})}>
          ${["details","more-info","navigate","none"].map(l=>p`<option value=${l}>${e[l]}</option>`)}</select></label>
        ${this.config.tap_action?.action==="navigate"?p`<label>${e.navigationPath}<input .value=${this.config.tap_action.navigation_path??""} placeholder="/lovelace/waste"
          @change=${l=>this.changed({tap_action:{action:"navigate",navigation_path:l.target.value}})} /></label>`:h}
        <details><summary>${e.advancedOverride}</summary><p>${e.overrideHelp}</p><button ?disabled=${i.length>=100} @click=${()=>{this.changed({overrides:[...i,{type:"collection_name"}]}),this.editing=i.length}}>${e.addOverride}</button></details>
      </details>`}};W.properties={config:{state:!0},editing:{state:!0},calendarSnapshot:{state:!0},invalidLocale:{state:!0}},W.styles=Vt;var ze=class extends W{};customElements.define("waste-pickup-planner-card",R);customElements.define("waste-pickup-planner-badge",Ae);customElements.define("waste-pickup-planner-card-editor",W);customElements.define("waste-pickup-planner-badge-editor",ze);var Qt=window;(Qt.customCards??=[]).push({type:"waste-pickup-planner-card",name:"Waste Pickup Planner",description:"Date-grouped waste collections with compact, hero and schedule layouts.",preview:!0});(Qt.customBadges??=[]).push({type:"waste-pickup-planner-badge",name:"Waste Pickup Planner Badge",description:"The next collection date and types, with schedule details."});
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
