var re=globalThis,se=re.ShadowRoot&&(re.ShadyCSS===void 0||re.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ve=Symbol(),We=new WeakMap,q=class{constructor(t,e,o){if(this._$cssResult$=!0,o!==ve)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(se&&t===void 0){let o=e!==void 0&&e.length===1;o&&(t=We.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&We.set(e,t))}return t}toString(){return this.cssText}},Fe=i=>new q(typeof i=="string"?i:i+"",void 0,ve),J=(i,...t)=>{let e=i.length===1?i[0]:t.reduce((o,n,r)=>o+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+i[r+1],i[0]);return new q(e,i,ve)},Ze=(i,t)=>{if(se)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let o=document.createElement("style"),n=re.litNonce;n!==void 0&&o.setAttribute("nonce",n),o.textContent=e.cssText,i.appendChild(o)}},we=se?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(let o of t.cssRules)e+=o.cssText;return Fe(e)})(i):i;var{is:At,defineProperty:zt,getOwnPropertyDescriptor:Pt,getOwnPropertyNames:Tt,getOwnPropertySymbols:It,getPrototypeOf:Ot}=Object,ae=globalThis,Ge=ae.trustedTypes,jt=Ge?Ge.emptyScript:"",Ht=ae.reactiveElementPolyfillSupport,K=(i,t)=>i,$e={toAttribute(i,t){switch(t){case Boolean:i=i?jt:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},Je=(i,t)=>!At(i,t),qe={attribute:!0,type:String,converter:$e,reflect:!1,useDefault:!1,hasChanged:Je};Symbol.metadata??=Symbol("metadata"),ae.litPropertyMetadata??=new WeakMap;var S=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=qe){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let o=Symbol(),n=this.getPropertyDescriptor(t,o,e);n!==void 0&&zt(this.prototype,t,n)}}static getPropertyDescriptor(t,e,o){let{get:n,set:r}=Pt(this.prototype,t)??{get(){return this[e]},set(s){this[e]=s}};return{get:n,set(s){let a=n?.call(this);r?.call(this,s),this.requestUpdate(t,a,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??qe}static _$Ei(){if(this.hasOwnProperty(K("elementProperties")))return;let t=Ot(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(K("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(K("properties"))){let e=this.properties,o=[...Tt(e),...It(e)];for(let n of o)this.createProperty(n,e[n])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[o,n]of e)this.elementProperties.set(o,n)}this._$Eh=new Map;for(let[e,o]of this.elementProperties){let n=this._$Eu(e,o);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let o=new Set(t.flat(1/0).reverse());for(let n of o)e.unshift(we(n))}else t!==void 0&&e.push(we(t));return e}static _$Eu(t,e){let o=e.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let o of e.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ze(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$ET(t,e){let o=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,o);if(n!==void 0&&o.reflect===!0){let r=(o.converter?.toAttribute!==void 0?o.converter:$e).toAttribute(e,o.type);this._$Em=t,r==null?this.removeAttribute(n):this.setAttribute(n,r),this._$Em=null}}_$AK(t,e){let o=this.constructor,n=o._$Eh.get(t);if(n!==void 0&&this._$Em!==n){let r=o.getPropertyOptions(n),s=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:$e;this._$Em=n;let a=s.fromAttribute(e,r.type);this[n]=a??this._$Ej?.get(n)??a,this._$Em=null}}requestUpdate(t,e,o,n=!1,r){if(t!==void 0){let s=this.constructor;if(n===!1&&(r=this[t]),o??=s.getPropertyOptions(t),!((o.hasChanged??Je)(r,e)||o.useDefault&&o.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,o))))return;this.C(t,e,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:o,reflect:n,wrapped:r},s){o&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??e??this[t]),r!==!0||s!==void 0)||(this._$AL.has(t)||(this.hasUpdated||o||(e=void 0),this._$AL.set(t,e)),n===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[n,r]of this._$Ep)this[n]=r;this._$Ep=void 0}let o=this.constructor.elementProperties;if(o.size>0)for(let[n,r]of o){let{wrapped:s}=r,a=this[n];s!==!0||this._$AL.has(n)||a===void 0||this.C(n,void 0,r,a)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(o=>o.hostUpdate?.()),this.update(e)):this._$EM()}catch(o){throw t=!1,this._$EM(),o}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[K("elementProperties")]=new Map,S[K("finalized")]=new Map,Ht?.({ReactiveElement:S}),(ae.reactiveElementVersions??=[]).push("2.1.2");var Ae=globalThis,Ke=i=>i,le=Ae.trustedTypes,Ve=le?le.createPolicy("lit-html",{createHTML:i=>i}):void 0,it="$lit$",z=`lit$${Math.random().toFixed(9).slice(2)}$`,ot="?"+z,Dt=`<${ot}>`,D=document,Y=()=>D.createComment(""),Q=i=>i===null||typeof i!="object"&&typeof i!="function",ze=Array.isArray,Nt=i=>ze(i)||typeof i?.[Symbol.iterator]=="function",xe=`[ 	
\f\r]`,V=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ye=/-->/g,Qe=/>/g,j=RegExp(`>|${xe}(?:([^\\s"'>=/]+)(${xe}*=${xe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Xe=/'/g,et=/"/g,nt=/^(?:script|style|textarea|title)$/i,Pe=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),h=Pe(1),Yt=Pe(2),Qt=Pe(3),A=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),tt=new WeakMap,H=D.createTreeWalker(D,129);function rt(i,t){if(!ze(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ve!==void 0?Ve.createHTML(t):t}var Mt=(i,t)=>{let e=i.length-1,o=[],n,r=t===2?"<svg>":t===3?"<math>":"",s=V;for(let a=0;a<e;a++){let c=i[a],u,l,d=-1,m=0;for(;m<c.length&&(s.lastIndex=m,l=s.exec(c),l!==null);)m=s.lastIndex,s===V?l[1]==="!--"?s=Ye:l[1]!==void 0?s=Qe:l[2]!==void 0?(nt.test(l[2])&&(n=RegExp("</"+l[2],"g")),s=j):l[3]!==void 0&&(s=j):s===j?l[0]===">"?(s=n??V,d=-1):l[1]===void 0?d=-2:(d=s.lastIndex-l[2].length,u=l[1],s=l[3]===void 0?j:l[3]==='"'?et:Xe):s===et||s===Xe?s=j:s===Ye||s===Qe?s=V:(s=j,n=void 0);let g=s===j&&i[a+1].startsWith("/>")?" ":"";r+=s===V?c+Dt:d>=0?(o.push(u),c.slice(0,d)+it+c.slice(d)+z+g):c+z+(d===-2?a:g)}return[rt(i,r+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),o]},X=class i{constructor({strings:t,_$litType$:e},o){let n;this.parts=[];let r=0,s=0,a=t.length-1,c=this.parts,[u,l]=Mt(t,e);if(this.el=i.createElement(u,o),H.currentNode=this.el.content,e===2||e===3){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(n=H.nextNode())!==null&&c.length<a;){if(n.nodeType===1){if(n.hasAttributes())for(let d of n.getAttributeNames())if(d.endsWith(it)){let m=l[s++],g=n.getAttribute(d).split(z),f=/([.?@])?(.*)/.exec(m);c.push({type:1,index:r,name:f[2],strings:g,ctor:f[1]==="."?Ce:f[1]==="?"?ke:f[1]==="@"?Ee:W}),n.removeAttribute(d)}else d.startsWith(z)&&(c.push({type:6,index:r}),n.removeAttribute(d));if(nt.test(n.tagName)){let d=n.textContent.split(z),m=d.length-1;if(m>0){n.textContent=le?le.emptyScript:"";for(let g=0;g<m;g++)n.append(d[g],Y()),H.nextNode(),c.push({type:2,index:++r});n.append(d[m],Y())}}}else if(n.nodeType===8)if(n.data===ot)c.push({type:2,index:r});else{let d=-1;for(;(d=n.data.indexOf(z,d+1))!==-1;)c.push({type:7,index:r}),d+=z.length-1}r++}}static createElement(t,e){let o=D.createElement("template");return o.innerHTML=t,o}};function R(i,t,e=i,o){if(t===A)return t;let n=o!==void 0?e._$Co?.[o]:e._$Cl,r=Q(t)?void 0:t._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),r===void 0?n=void 0:(n=new r(i),n._$AT(i,e,o)),o!==void 0?(e._$Co??=[])[o]=n:e._$Cl=n),n!==void 0&&(t=R(i,n._$AS(i,t.values),n,o)),t}var _e=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:o}=this._$AD,n=(t?.creationScope??D).importNode(e,!0);H.currentNode=n;let r=H.nextNode(),s=0,a=0,c=o[0];for(;c!==void 0;){if(s===c.index){let u;c.type===2?u=new ee(r,r.nextSibling,this,t):c.type===1?u=new c.ctor(r,c.name,c.strings,this,t):c.type===6&&(u=new Se(r,this,t)),this._$AV.push(u),c=o[++a]}s!==c?.index&&(r=H.nextNode(),s++)}return H.currentNode=D,n}p(t){let e=0;for(let o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}},ee=class i{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,o,n){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=R(this,t,e),Q(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==A&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Nt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==p&&Q(this._$AH)?this._$AA.nextSibling.data=t:this.T(D.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:o}=t,n=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=X.createElement(rt(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===n)this._$AH.p(e);else{let r=new _e(n,this),s=r.u(this.options);r.p(e),this.T(s),this._$AH=r}}_$AC(t){let e=tt.get(t.strings);return e===void 0&&tt.set(t.strings,e=new X(t)),e}k(t){ze(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,o,n=0;for(let r of t)n===e.length?e.push(o=new i(this.O(Y()),this.O(Y()),this,this.options)):o=e[n],o._$AI(r),n++;n<e.length&&(this._$AR(o&&o._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let o=Ke(t).nextSibling;Ke(t).remove(),t=o}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},W=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,o,n,r){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=r,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=p}_$AI(t,e=this,o,n){let r=this.strings,s=!1;if(r===void 0)t=R(this,t,e,0),s=!Q(t)||t!==this._$AH&&t!==A,s&&(this._$AH=t);else{let a=t,c,u;for(t=r[0],c=0;c<r.length-1;c++)u=R(this,a[o+c],e,c),u===A&&(u=this._$AH[c]),s||=!Q(u)||u!==this._$AH[c],u===p?t=p:t!==p&&(t+=(u??"")+r[c+1]),this._$AH[c]=u}s&&!n&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Ce=class extends W{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}},ke=class extends W{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==p)}},Ee=class extends W{constructor(t,e,o,n,r){super(t,e,o,n,r),this.type=5}_$AI(t,e=this){if((t=R(this,t,e,0)??p)===A)return;let o=this._$AH,n=t===p&&o!==p||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,r=t!==p&&(o===p||n);n&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Se=class{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){R(this,t)}};var Ut=Ae.litHtmlPolyfillSupport;Ut?.(X,ee),(Ae.litHtmlVersions??=[]).push("3.3.3");var st=(i,t,e)=>{let o=e?.renderBefore??t,n=o._$litPart$;if(n===void 0){let r=e?.renderBefore??null;o._$litPart$=n=new ee(t.insertBefore(Y(),r),r,void 0,e??{})}return n._$AI(i),n};var Te=globalThis,_=class extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=st(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return A}};_._$litElement$=!0,_.finalized=!0,Te.litElementHydrateSupport?.({LitElement:_});var Lt=Te.litElementPolyfillSupport;Lt?.({LitElement:_});(Te.litElementVersions??=[]).push("4.2.2");var Ie=i=>typeof i=="string"&&/^#[\da-f]{6}$/i.test(i),Oe=i=>typeof i=="string"&&/^mdi:[a-z0-9-]+$/.test(i);function b(i){return[...new Set(i.entities??(i.entity?[i.entity]:[]))]}function ce(i){if(!i||typeof i!="object")throw new Error("Choose a waste sensor or calendar.");if(i.entities!==void 0&&(!Array.isArray(i.entities)||i.entities.some(e=>typeof e!="string")))throw new Error("entities must be an array of entity IDs.");if(i.entity&&i.entities)throw new Error("Use entity or entities, not both.");let t=b(i);if(!t.length||t.length>12||t.some(e=>!/^(sensor|calendar)\.[a-z0-9_]+$/.test(e)))throw new Error("Choose 1\u201312 sensor or calendar entities.");if(i.layout!==void 0&&!["compact","hero","schedule","overview"].includes(i.layout))throw new Error("Unknown layout.");if(i.appearance!==void 0&&!["native","modern","minimal"].includes(i.appearance))throw new Error("Unknown appearance.");if(i.density!==void 0&&!["comfortable","compact"].includes(i.density))throw new Error("Unknown density.");for(let[e,o]of[["days_to_show",366],["max_groups",50]]){let n=i[e];if(n!==void 0&&(!Number.isInteger(n)||n<1||n>o))throw new Error(`${e} must be 1\u2013${o}.`)}for(let e of["show_artwork","show_updated","show_manage_bins","show_source"])if(i[e]!==void 0&&typeof i[e]!="boolean")throw new Error(`${e} must be true or false.`);if(i.title!==void 0&&typeof i.title!="string")throw new Error("title must be text.");if(i.locale!==void 0){if(typeof i.locale!="string")throw new Error("locale must be a language code.");new Intl.DateTimeFormat(i.locale)}if(i.overrides!==void 0){if(!Array.isArray(i.overrides)||i.overrides.length>100)throw new Error("overrides must contain at most 100 types.");for(let e of i.overrides)if(!e||typeof e.type!="string"||!e.type.trim()||e.source!==void 0&&(typeof e.source!="string"||!/^(sensor|calendar)\.[a-z0-9_]+$/.test(e.source))||e.label!==void 0&&(typeof e.label!="string"||!e.label.trim())||e.name!==void 0&&(typeof e.name!="string"||!e.name.trim())||e.hidden!==void 0&&typeof e.hidden!="boolean"||e.color!==void 0&&!Ie(e.color)||e.icon!==void 0&&!Oe(e.icon))throw new Error("Invalid type override. Use an exact type ID or name, mdi icon, and #RRGGBB color.")}if(i.tap_action){if(!["details","more-info","navigate","none"].includes(i.tap_action.action))throw new Error("Unsupported tap action.");if(i.tap_action.action==="navigate"&&(typeof i.tap_action.navigation_path!="string"||!/^\/(?!\/)/.test(i.tap_action.navigation_path)||/[\\\u0000-\u001f]/.test(i.tap_action.navigation_path)))throw new Error("Navigation requires a local path beginning with /.")}return{...i,entities:i.entities?[...i.entities]:void 0,layout:i.layout??"compact",days_to_show:i.days_to_show??30,max_groups:i.max_groups??5}}function de(i){if(typeof i!="string"||!/^\d{4}-\d{2}-\d{2}$/.test(i))return!1;let t=new Date(`${i}T12:00:00Z`);return Number.isFinite(t.getTime())&&t.toISOString().slice(0,10)===i}function F(i,t){let e=new Intl.DateTimeFormat("en-CA",{timeZone:t,year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(i),o=n=>e.find(r=>r.type===n).value;return`${o("year")}-${o("month")}-${o("day")}`}function at(i,t){let e=new Date(`${i}T12:00:00Z`);return e.setUTCDate(e.getUTCDate()+t),e.toISOString().slice(0,10)}function Bt(i,t){return Math.round((Date.parse(`${t}T12:00:00Z`)-Date.parse(`${i}T12:00:00Z`))/864e5)}function N(i,t,e){let o=Bt(t,i);return o<=1&&o>=0?new Intl.RelativeTimeFormat(e,{numeric:"auto"}).format(o,"day"):new Intl.DateTimeFormat(e,{weekday:"long",day:"numeric",month:"short",timeZone:"UTC"}).format(new Date(`${i}T12:00:00Z`))}function lt(i,t,e){return new Intl.DateTimeFormat(t,{dateStyle:"medium",timeStyle:"short",timeZone:e}).format(new Date(i))}var pe=i=>i!==null&&typeof i=="object"&&!Array.isArray(i)?i:void 0,He=i=>typeof i=="string"&&i.trim()?i:void 0;function je(i,t,e){let o=i.date??e,n=He(i.type);if(!(!de(o)||!n))return{sourceId:t,entityId:t,date:o,label:n,typeId:He(i.type_id),icon:Oe(i.icon)?i.icon:void 0,color:Ie(i.color)?i.color:void 0,colorSource:["source","customize","default"].includes(String(i.color_source))?i.color_source:void 0}}function M(i){let t=i.attributes,e="upcoming"in t?t.upcoming:"upcoming_pickups"in t?t.upcoming_pickups:"next_pickup"in t?t.next_pickup===null?[]:[t.next_pickup]:void 0;if(!Array.isArray(e))return{events:[],supported:!1,invalid:e!==void 0};let o=[],n=e.length>2e3;for(let s of e.slice(0,2e3)){if(o.length>=2e3){n=!0;break}let a=pe(s);if(!a||!de(a.date)){n=!0;continue}if(Array.isArray(a.collections)){a.collections.length>100&&(n=!0);for(let c of a.collections.slice(0,100)){let u=pe(c),l=u&&je(u,i.entity_id,a.date);l?o.push(l):n=!0}}else if(Array.isArray(a.types)){a.types.length>100&&(n=!0);for(let c of a.types.slice(0,100)){let u=je({...a,type:c,color:void 0,color_source:void 0,type_id:void 0},i.entity_id);u?o.push(u):n=!0}}else{let c=je(a,i.entity_id);c?o.push(c):n=!0}}let r=typeof t.last_update=="string"&&/^\d{4}-\d{2}-\d{2}T/.test(t.last_update)&&/(?:Z|[+-]\d{2}:\d{2})$/.test(t.last_update)&&Number.isFinite(Date.parse(t.last_update))?t.last_update:void 0;return{events:o.slice(0,2e3),supported:!0,invalid:n||o.length>2e3,fetchedAt:r}}function ct(i,t,e){if(!Array.isArray(i)||i.length>1e4)throw new Error("Invalid calendar response.");return i.flatMap(o=>{let n=pe(o),r=pe(n?.start),s=He(n?.summary);if(!r||!s)return[];let a;return de(r.date)?a=r.date:typeof r.dateTime=="string"&&/(?:Z|[+-]\d{2}:\d{2})$/.test(r.dateTime)&&Number.isFinite(Date.parse(r.dateTime))&&(a=F(new Date(r.dateTime),e)),a?[{sourceId:t,entityId:t,date:a,label:s}]:[]})}var dt=new WeakMap;function De(i,t,e,o){let n=dt.get(i.connection);n||(n=new Map,dt.set(i.connection,n));let r=JSON.stringify([t,e,o]),s=i.states[t]?.last_updated,a=n.get(r);if(a?.pending){if(a.stamp===s)return a.promise;let d=()=>De(i,t,e,o);return a.promise.then(d,d)}if(a&&a.stamp===s&&a.expires>Date.now())return a.promise;for(let[d,m]of n)!m.pending&&m.expires<=Date.now()&&n.delete(d);if(!n.has(r)&&n.size>=100){let d=[...n].find(([,m])=>!m.pending);if(d)n.delete(d[0]);else return Promise.reject(new Error("Too many calendar requests are pending."))}let c=new URLSearchParams({start:`${e}T00:00:00+14:00`,end:`${o}T00:00:00-12:00`}),u=i.callApi("GET",`calendars/${encodeURIComponent(t)}?${c}`),l={promise:u,expires:1/0,pending:!0,stamp:s};return n.set(r,l),u.then(()=>{l.pending=!1,l.expires=Date.now()+6e4},()=>{n.get(r)===l&&n.delete(r)}),u}function C(i,t,e=[t]){let o=r=>{let s=i?.states[r]?.attributes.friendly_name;return typeof s=="string"&&s.trim()?s.trim():r},n=o(t);return e.some(r=>r!==t&&o(r)===n)?`${n} \xB7 ${t}`:n}function pt(i){let t;try{t=new Intl.Collator(i)}catch{t=new Intl.Collator("en")}return(e,o)=>t.compare(e.label,o.label)||(e.sourceId<o.sourceId?-1:e.sourceId>o.sourceId?1:0)}function te(i="en"){let t=pt(i);return(e,o)=>(e.date<o.date?-1:e.date>o.date?1:0)||t(e,o)}var $=i=>JSON.stringify([i.sourceId,i.typeId??i.originalLabel??i.label,i.originalLabel??i.label]);function P(i,t){let e=t.filter(s=>s.sourceId===i.sourceId&&s.label===i.label&&$(s)!==$(i));if(!e.length)return i.label;let o=i.originalLabel??i.label,r=e.some(s=>(s.originalLabel??s.label)===o)?i.typeId??o:o;return r===i.label?i.label:`${i.label} \xB7 ${r}`}var ue=(i,t)=>t.type===(i.typeId??i.originalLabel??i.label)&&(t.source===void 0||t.source===i.sourceId)&&(t.label===void 0||t.label===(i.originalLabel??i.label)),he=i=>+(i.source!==void 0)+ +(i.label!==void 0)*2;function ht(i){let t=new Map;for(let e of i)t.has(he(e))||t.set(he(e),e);return i.length?[...t.entries()].sort(([e],[o])=>e-o).reduce((e,[,o])=>({...e,...Object.fromEntries(Object.entries(o).filter(([,n])=>n!==void 0))}),{}):void 0}function ie(i,t=[]){return ht(t.filter(e=>ue(i,e)))}function ut(i,t=[]){return ht(t.filter(e=>e.type===i.type&&he(e)<he(i)&&(e.source===void 0||e.source===i.source)&&(e.label===void 0||e.label===i.label)))}function ge(i,t){return[...new Set([...b(t),...Object.values(i.states).filter(e=>e.entity_id.startsWith("calendar.")||e.entity_id.startsWith("sensor.")&&(()=>{let o=M(e);return o.supported&&!o.invalid})()).map(e=>e.entity_id)])]}function gt(i,t,e=[]){let o=new Map;for(let r of b(t)){let s=i.states[r];if(!(!s||!r.startsWith("sensor.")))for(let a of M(s).events)o.has($(a))||o.set($(a),a)}let n=new Set(b(t));for(let r of e)r.sourceId.startsWith("calendar.")&&n.has(r.sourceId)&&!o.has($(r))&&o.set($(r),r);return[...o.values()].sort(pt(t.locale||i.locale?.language||i.language||"en"))}function mt(i,t="en"){let e=new Map;for(let o of i){let n=e.get($(o));(!n||o.date<n.date)&&e.set($(o),o)}return[...e.values()].sort(te(t))}function ft(i,t,e,o){let n=new Map;for(let r of i){if(r.date<e||r.date>=o)continue;let s=ie(r,t.overrides);if(s?.hidden)continue;let a=JSON.stringify([$(r),r.date,r.color,r.colorSource,r.icon]);n.has(a)||n.set(a,{...r,originalLabel:r.originalLabel??r.label,label:s?.name??r.label,color:s?.color??r.color,colorSource:s?.color?"customize":r.colorSource,icon:s?.icon??r.icon})}return[...n.values()].sort(te(t.locale))}function Ne(i){let t=new Map;for(let e of i){let o=t.get(e.date)??[];o.push(e),t.set(e.date,o)}return[...t].map(([e,o])=>({date:e,events:o}))}function me(i){return i.colorSource==="source"||i.colorSource==="customize"?i.color:void 0}var Z=class{constructor(){this.generation=0;this.cache=new Map}reset(){this.generation++,this.cache.clear(),this.connection=void 0,this.timeZone=void 0}cancel(){this.generation++}async update(t,e,o){(this.connection!==t.connection||this.timeZone!==t.config.time_zone)&&(this.cache.clear(),this.connection=t.connection,this.timeZone=t.config.time_zone);let n=++this.generation,r=t.config.time_zone,s=F(new Date,r),a=at(s,e.days_to_show),c={rangeStart:s,rangeEnd:a,timeZone:r,messages:[]};o({...c,status:"loading",events:[]});let u=0,l=0,d=0,m=[],g=[];if(await Promise.all(b(e).map(async v=>{let y="sourceLoadFailed";try{let x=t.states[v];if(!x||x.state==="unavailable"||v.startsWith("calendar.")&&x.state==="unknown")throw y="sourceUnavailable",new Error(y);let I,k;if(v.startsWith("calendar."))I=ct(await De(t,v,s,a),v,r);else{let E=M(x);if(!E.supported)throw y="sourceUnsupported",new Error(y);if(E.invalid)throw y="sourceInvalid",new Error(y);I=E.events,k=E.fetchedAt}if(n!==this.generation)return;this.cache.set(v,{events:I,fetchedAt:k}),k&&g.push(k),m.push(...I),l++}catch{if(n!==this.generation)return;u++,c.messages.push({source:v,reason:y});let x=this.cache.get(v);x&&(d++,m.push(...x.events),x.fetchedAt&&g.push(x.fetchedAt))}})),n!==this.generation)return;let f=ft(m,e,s,a);o({...c,events:f,status:u?d||l?"stale":"unavailable":f.length?"ready":"empty",fetchedAt:g.sort((v,y)=>Date.parse(v)-Date.parse(y))[0]})}};var yt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},bt=i=>(...t)=>({_$litDirective$:i,values:t}),fe=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var vt="important",Rt=" !"+vt,T=bt(class extends fe{constructor(i){if(super(i),i.type!==yt.ATTRIBUTE||i.name!=="style"||i.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(i){return Object.keys(i).reduce((t,e)=>{let o=i[e];return o==null?t:t+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(i,[t]){let{style:e}=i.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let o of this.ft)t[o]==null&&(this.ft.delete(o),o.includes("-")?e.removeProperty(o):e[o]=null);for(let o in t){let n=t[o];if(n!=null){this.ft.add(o);let r=typeof n=="string"&&n.endsWith(Rt);o.includes("-")||r?e.setProperty(o,r?n.slice(0,-11):n,r?vt:""):e[o]=n}}return A}});var Wt={title:"Waste collection",next:"Next collection",schedule:"Collection schedule",close:"Close",loading:"Loading schedule\u2026",empty:"No collections in this date range",partialEmpty:"No dates from the available sources",unavailable:"Schedule unavailable",stale:"Some sources are unavailable. Dates may be out of date.",staleBadge:"Out of date",collections:"collections",updated:"Provider updated",details:"View schedule",manageBins:"Manage bins",today:"Today",more:"more",previousPage:"Previous page",nextPage:"Next page",yourBins:"Your bins",upcoming:"Upcoming collections",clearFilter:"Show all bins",filterHint:"Select a bin to filter the schedule",ready:"Schedule available",sources:"Sources",binPage:"Bin pages",sourceUnavailable:"Source unavailable. Check the entity in Home Assistant.",sourceUnsupported:"Select a sensor with Generic details or a calendar.",sourceInvalid:"Invalid collection records. Check the source integration.",sourceLoadFailed:"Could not load this source. Check the entity and connection in Home Assistant."},Ft={title:"Odbi\xF3r odpad\xF3w",next:"Najbli\u017Cszy odbi\xF3r",schedule:"Harmonogram odbioru",close:"Zamknij",loading:"\u0141adowanie harmonogramu\u2026",empty:"Brak odbior\xF3w w tym zakresie dat",partialEmpty:"Brak termin\xF3w z dost\u0119pnych \u017Ar\xF3de\u0142",unavailable:"Harmonogram niedost\u0119pny",stale:"Niekt\xF3re \u017Ar\xF3d\u0142a s\u0105 niedost\u0119pne. Terminy mog\u0105 by\u0107 nieaktualne.",staleBadge:"Nieaktualne",collections:"frakcje",updated:"Aktualizacja \u017Ar\xF3d\u0142a",details:"Zobacz harmonogram",manageBins:"Zarz\u0105dzaj pojemnikami",today:"Dzisiaj",more:"wi\u0119cej",previousPage:"Poprzednia strona",nextPage:"Nast\u0119pna strona",yourBins:"Twoje pojemniki",upcoming:"Nadchodz\u0105ce odbiory",clearFilter:"Poka\u017C wszystkie pojemniki",filterHint:"Wybierz pojemnik, aby filtrowa\u0107 harmonogram",ready:"Harmonogram dost\u0119pny",sources:"\u0179r\xF3d\u0142a",binPage:"Strony pojemnik\xF3w",sourceUnavailable:"\u0179r\xF3d\u0142o niedost\u0119pne. Sprawd\u017A encj\u0119 w Home Assistant.",sourceUnsupported:"Wybierz sensor z danymi Generic lub kalendarz.",sourceInvalid:"Nieprawid\u0142owe dane odbior\xF3w. Sprawd\u017A integracj\u0119 \u017Ar\xF3d\u0142ow\u0105.",sourceLoadFailed:"Nie uda\u0142o si\u0119 wczyta\u0107 \u017Ar\xF3d\u0142a. Sprawd\u017A encj\u0119 i po\u0142\u0105czenie w Home Assistant."},U=i=>i.toLowerCase().startsWith("pl")?Ft:Wt,Me=(i,t)=>`${i.source}: ${U(t)[i.reason]}`;var oe=(i,t,e=6)=>h`<div class="chips">
    ${i.slice(0,e).map(o=>h`<span class="chip" style=${T({"--waste-type-color":o.color})}><ha-icon aria-hidden="true" .icon=${o.icon??"mdi:trash-can-outline"}></ha-icon><span>${o.label}</span></span>`)}
    ${i.length>e?h`<span class="chip overflow">+${new Intl.NumberFormat(t).format(i.length-e)} ${U(t).more}</span>`:p}
  </div>`,ne=i=>h`<div class="bins" aria-hidden="true">
    ${i.slice(0,3).map(t=>h`<div
          class="bin"
          style=${T({"--waste-type-color":me(t)})}
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
  </div>`,G=(i,t,e,o=6)=>h`${i.map(n=>{let r=new Date(`${n.date}T12:00:00Z`);return h`<div class="group">
      <div class="day" aria-hidden="true">
        ${new Intl.DateTimeFormat(e,{month:"short",timeZone:"UTC"}).format(r)}<strong
          >${new Intl.DateTimeFormat(e,{day:"numeric",timeZone:"UTC"}).format(r)}</strong
        >
      </div>
      <div class="group-body">
        <div class="group-date">${N(n.date,t,e)}</div>
        ${oe(n.events,e,o)}
      </div>
    </div>`})}`;var wt=J`
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
`;async function Ue(i){return customElements.get("ha-form")||await(await(await window.loadCardHelpers()).createCardElement({type:"button"})).constructor.getConfigElement(),document.createElement(i)}function $t(i){let{events:t,groups:e,today:o,locale:n}=i,r=U(n),s=e[0],a=mt(t,n),c=12,u=Math.max(1,Math.ceil(a.length/c)),l=Math.min(i.page,u-1),d=a.find(g=>$(g)===i.selected),m=d?e.map(g=>({...g,events:g.events.filter(f=>$(f)===i.selected)})).filter(g=>g.events.length):e;return h`
    ${s?h`<div class="primary overview-next"><div class="copy"><div class="eyebrow">${r.next}</div>
      <span class="date">${N(s.date,o,n)}</span>${oe(s.events,n)}
      <p class="full-date">${new Intl.DateTimeFormat(n,{dateStyle:"long",timeZone:"UTC"}).format(new Date(`${s.date}T12:00:00Z`))}</p>
    </div>${i.artwork?ne(s.events):p}</div>`:p}
    <div class="section-heading"><h3>${r.yourBins}</h3><small>${new Intl.NumberFormat(n).format(a.length)}</small></div>
    <p class="filter-hint">${r.filterHint}</p>
    <div class="bin-grid">${a.slice(l*c,(l+1)*c).map(g=>h`
      <button class="bin-tile" aria-pressed=${!!(d&&$(g)===i.selected)}
        @click=${()=>i.select($(g)===i.selected?void 0:$(g))}>
        ${i.artwork?ne([g]):h`<ha-icon aria-hidden="true" .icon=${g.icon??"mdi:trash-can-outline"} style=${T({color:g.color})}></ha-icon>`}
        <span class="tile-copy"><strong>${P(g,a)}</strong>${i.showSource?h`<small class="source-name">${C(i.hass,g.sourceId,i.sources)}</small>`:p}
          <span class="tile-date">${N(g.date,o,n)}</span></span>
        <span class="tile-color" aria-hidden="true" style=${T({backgroundColor:me(g)})}></span>
      </button>`)}</div>
    ${u>1?h`<nav class="pages" aria-label=${r.binPage}><button ?disabled=${l===0} @click=${()=>i.changePage(l-1)}>${r.previousPage}</button>
      <span aria-live="polite">${new Intl.NumberFormat(n).format(l+1)} / ${new Intl.NumberFormat(n).format(u)}</span><button ?disabled=${l+1===u} @click=${()=>i.changePage(l+1)}>${r.nextPage}</button></nav>`:p}
    <div class="section-heading"><h3>${r.upcoming}</h3>${d?h`<button class="filter-reset" @click=${()=>i.select(void 0)}>${r.clearFilter}</button>`:p}</div>
    ${d?h`<p class="filter-hint" role="status">${P(d,a)}${i.showSource?h` · ${C(i.hass,d.sourceId,i.sources)}`:p}</p>`:p}
    <div class="overview-schedule">${G(m.slice(0,i.maxGroups),o,n)}</div>`}var L=class extends _{constructor(){super(...arguments);this.badge=!1;this.detailsOpen=!1;this.detailsPage=0;this.binPage=0;this.controller=new Z;this.visible=()=>{document.visibilityState==="visible"&&this.refresh()}}set hass(e){let o=this.ha;this.ha=e,(!o||o.connection!==e.connection||o.config.time_zone!==e.config.time_zone)&&(this.snapshot=void 0,this.selectedBin=void 0,this.binPage=0),(!o||o.connection!==e.connection||o.config.time_zone!==e.config.time_zone||b(this.config??{type:""}).some(n=>o.states[n]!==e.states[n]))&&this.refresh(),(!o||o.locale?.language!==e.locale?.language||o.language!==e.language)&&this.requestUpdate()}get hass(){return this.ha}setConfig(e){let o=ce(e),n=this.config,r=!n||JSON.stringify(b(n).sort())!==JSON.stringify(b(o).sort());r&&this.controller.reset(),(r||n?.days_to_show!==o.days_to_show||JSON.stringify(n?.overrides)!==JSON.stringify(o.overrides))&&(this.snapshot=void 0,this.selectedBin=void 0,this.binPage=0,this.detailsPage=0),this.config=o,this.refresh(),this.requestUpdate()}static getConfigElement(){return Ue("waste-pickup-planner-card-editor")}static getStubConfig(e){let o=ge(e,{type:""});return{type:"custom:waste-pickup-planner-card",entity:o.find(n=>n.startsWith("sensor."))??o[0]??"sensor.waste_schedule",layout:"compact"}}getCardSize(){return this.config?.layout==="overview"?8:this.config?.layout==="schedule"?Math.min(this.config.max_groups+1,8):this.config?.layout==="hero"?5:3}getGridOptions(){return{columns:12,min_columns:6,rows:"auto"}}connectedCallback(){super.connectedCallback(),document.addEventListener("visibilitychange",this.visible),this.timer=setInterval(()=>this.refresh(),6e4),this.refresh()}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.timer),document.removeEventListener("visibilitychange",this.visible),this.controller.cancel(),this.detailsOpen=!1}refresh(){!this.isConnected||!this.ha||!this.config||(this.day=F(new Date,this.ha.config.time_zone),this.snapshot?.rangeStart!==this.day&&(this.snapshot=void 0),this.controller.update(this.ha,this.config,e=>{(e.status!=="loading"||!this.snapshot)&&(this.snapshot=e)}))}locale(){return this.config?.locale||this.ha?.locale?.language||this.ha?.language||"en"}async activate(){let e=this.config;if(!e)return;let o=e.tap_action?.action??"details";o!=="none"&&(o==="more-info"?this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:b(e)[0]},bubbles:!0,composed:!0})):o==="navigate"?(history.pushState(null,"",e.tap_action.navigation_path),window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1}}))):(this.detailsPage=0,this.detailsOpen=!0,await this.updateComplete,this.isConnected&&this.detailsOpen&&this.renderRoot.querySelector("dialog")?.showModal()))}manageBins(){history.pushState(null,"","/config/integrations/integration/waste_collection_schedule"),window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1}}))}sourceDetails(e){this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0}))}async changeDetailsPage(e){this.detailsPage=e,await this.updateComplete,this.renderRoot.querySelector("dialog")?.scrollTo(0,0)}render(){if(!this.config)return p;let e=this.locale(),o=U(e),n=this.snapshot,r=[...n?.events??[]].sort(te(e)),s=Ne(r),a=s[0],c=n?.rangeStart??this.day??"2000-01-01",u=this.config.layout==="overview"&&n?.events.some(w=>$(w)===this.selectedBin)?this.selectedBin:void 0,l=u?r.filter(w=>$(w)===u):r,d=b(this.config),m=this.config.show_source??d.length>1,g=this.config.title??o.title,f=n?.status??"loading",v=f==="empty"?o.empty:f==="stale"?o.partialEmpty:f==="unavailable"?o.unavailable:o.loading,y=a?a.events.length>2?`${new Intl.NumberFormat(e).format(a.events.length)} ${o.collections}`:a.events.map(w=>w.label).join(" \xB7 "):v,x=a?N(a.date,c,e):v,I=f==="stale"?h`<p class="notice" role="status">${o.stale}</p>`:p,k=100,E=Math.max(1,Math.ceil(l.length/k)),O=Math.min(this.detailsPage,E-1),Le=this.detailsOpen?h`<dialog aria-label=${o.schedule} @close=${()=>{this.detailsOpen=!1}}>
      <div class="heading">
        <h2>${g}</h2>
        <button
          class="close"
          aria-label=${o.close}
          @click=${()=>this.renderRoot.querySelector("dialog")?.close()}
        >
          ✕
        </button>
      </div>
      ${l.length?G(Ne(l.slice(O*k,(O+1)*k)),c,e,k):h`<p class="state">${v}</p>`}${I}${n?.messages.map(w=>h`<p class="state">${Me(w,e)}</p>`)}
      ${E>1?h`<nav class="pages" aria-label=${o.schedule}>
        <button ?disabled=${O===0} @click=${()=>this.changeDetailsPage(O-1)}>${o.previousPage}</button>
        <span aria-live="polite">${new Intl.NumberFormat(e).format(O+1)} / ${new Intl.NumberFormat(e).format(E)}</span>
        <button ?disabled=${O+1===E} @click=${()=>this.changeDetailsPage(O+1)}>${o.nextPage}</button>
      </nav>`:p}
    </dialog>`:p;if(this.badge){let w=a?a.events.slice(0,6).map(St=>St.label).join(" \xB7 ")+(a.events.length>6?` \xB7 +${new Intl.NumberFormat(e).format(a.events.length-6)} ${o.more}`:""):v,Be=`${g}: ${x}. ${w}${f==="stale"?`. ${o.stale}`:""}`,Re=h`<ha-icon aria-hidden="true"
        .icon=${f==="stale"||f==="unavailable"?"mdi:alert-circle-outline":"mdi:trash-can-outline"}></ha-icon>
        <span class="badge-copy"><strong>${a?x:g}</strong>
        <small>${f==="stale"?`${o.staleBadge} \xB7 `:""}${y}</small></span>`;return this.config.tap_action?.action==="none"?h`<div class="badge" role="img" aria-label=${Be} title=${w}>${Re}</div>`:h`<button class="badge" aria-label=${Be} title=${w} @click=${this.activate}>${Re}</button>${Le}`}return h`<ha-card data-appearance=${this.config.appearance??"native"} data-density=${this.config.density??"comfortable"}
        ><section class=${`surface ${this.config.layout}`}>
          <div class="heading">
            <h2>${g}</h2>
            <ha-icon aria-hidden="true" icon="mdi:calendar-outline"></ha-icon>
          </div>
          ${a?this.config.layout==="overview"?$t({events:r,groups:s,today:c,locale:e,artwork:this.config.show_artwork??!0,showSource:m,sources:d,hass:this.ha,maxGroups:this.config.max_groups,selected:u,page:this.binPage,select:w=>{this.selectedBin=w,this.detailsPage=0},changePage:w=>{this.binPage=w}}):this.config.layout==="schedule"?G(s.slice(0,this.config.max_groups),c,e):h`<div class="primary">
                      <div class="copy">
                        <div class="eyebrow">${o.next}</div>
                        <span class="date">${x}</span>${oe(a.events,e)}
                        <p class="full-date">
                          ${new Intl.DateTimeFormat(e,{dateStyle:"long",timeZone:"UTC"}).format(new Date(`${a.date}T12:00:00Z`))}
                        </p>
                      </div>
                      ${this.config.layout==="hero"&&this.config.show_artwork?ne(a.events):p}
                    </div>
                    ${this.config.layout==="hero"&&s.length>1?h`<div class="upcoming">${G(s.slice(1,this.config.max_groups),c,e)}</div>`:p}`:h`<p class="state" role="status">${v}</p>`}
          ${I}${f==="unavailable"?n?.messages.map(w=>h`<p class="state">${Me(w,e)}</p>`):p}
          ${this.config.show_updated&&n?.fetchedAt?h`<p class="updated">${o.updated}: ${lt(n.fetchedAt,e,n.timeZone)}</p>`:p}
          ${this.config.layout==="overview"?h`<div class=${`source-status ${f}`} role="status">
            <ha-icon aria-hidden="true" .icon=${f==="ready"?"mdi:check-circle-outline":f==="stale"||f==="unavailable"?"mdi:alert-circle-outline":"mdi:calendar-outline"}></ha-icon>
            <span>${f==="ready"?o.ready:f==="stale"?o.staleBadge:v}</span>
          </div><div class="source-links" aria-label=${o.sources}>${d.map(w=>h`<button @click=${()=>this.sourceDetails(w)}>${C(this.ha,w,d)} <span aria-hidden="true">↗</span></button>`)}</div>`:p}
        </section>
        ${this.config.tap_action?.action==="none"?p:h`<button class="action" @click=${this.activate}>${this.config.tap_action?.action==="more-info"?g:o.details} <span aria-hidden="true">↗</span></button>`}
        ${this.config.show_manage_bins?h`<button class="action" @click=${this.manageBins}>${o.manageBins} <span aria-hidden="true">⚙</span></button>`:p}</ha-card
      >${Le}`}};L.styles=wt,L.properties={snapshot:{state:!0},detailsOpen:{state:!0},detailsPage:{state:!0},selectedBin:{state:!0},binPage:{state:!0}};var ye=class extends L{constructor(){super(...arguments);this.badge=!0}static getConfigElement(){return Ue("waste-pickup-planner-badge-editor")}static getStubConfig(e){return{...super.getStubConfig(e),type:"custom:waste-pickup-planner-badge"}}};var Zt={source:"Source and layout",appearanceSection:"Appearance",binsSection:"Bins",entities:"Waste sensors or calendars",title:"Title",layout:"Layout",appearance:"Appearance",density:"Density",days_to_show:"Days to show",max_groups:"Visible date groups",show_artwork:"Show bin artwork",show_updated:"Show provider update time",show_manage_bins:"Show Manage bins shortcut",show_source:"Show source names",locale:"Language override (optional)",compact:"Compact",hero:"Hero",schedule:"Schedule",overview:"Overview",native:"Native Home Assistant",modern:"Modern",minimal:"Minimal",comfortable:"Comfortable",sourceHelp:"Select one authoritative source per address. For Waste Collection Schedule, choose the combined sensor with Generic details (All attributes in visual bin controls). Calendars also work.",unsupported:"No structured schedule is exposed. Open the sensor settings and choose Generic / All attributes.",binsHelp:"Integration colors apply until you choose an override. Shared bin definitions stay in Waste Collection Schedule.",rangeHelp:"Calendar bin choices come from events in the selected date range. Bins without records can be added in Advanced.",noBins:"No bins found in the supplied schedule.",calendarLoading:"Loading calendar bins\u2026",calendarFailed:"Some calendar bins could not be loaded. Check the source entity or try again.",customize:"Edit bin",displayName:"Display name",localColor:"Local bin color",inheritedColor:"Inherited card color",integrationColor:"Integration color",localColorStatus:"Local color",varyingColors:"Integration colors vary by bin.",neutralColor:"No integration color is available; artwork stays neutral.",resetInherited:"Use inherited card color",resetIntegration:"Use integration color",hide:"Hide this collection",hidden:"Hidden",local:"Customized",integration:"Integration",done:"Done",remove:"Reset this override",matching:"Advanced matching and icon",type:"Category ID or exact calendar name",binSource:"Source entity (optional)",label:"Exact bin name (optional)",icon:"Icon (mdi:\u2026)",color:"Local color (#RRGGBB)",advanced:"Advanced settings",advancedOverride:"Add a category or missing bin override",overrideHelp:"Use the exact type ID, or the complete collection name for older sensors and calendars.",addOverride:"Add collection override",tap:"Tap action",details:"View schedule","more-info":"Entity details",overrideLimit:"This card supports up to 100 overrides. Reset an unused override before adding another.",navigate:"Open dashboard",none:"No action",navigationPath:"Dashboard path",retry:"Retry"},Gt={source:"\u0179r\xF3d\u0142o i uk\u0142ad",appearanceSection:"Wygl\u0105d",binsSection:"Pojemniki",entities:"Sensory odpad\xF3w lub kalendarze",title:"Tytu\u0142",layout:"Uk\u0142ad",appearance:"Wygl\u0105d",density:"Odst\u0119py",days_to_show:"Liczba dni",max_groups:"Widoczne grupy termin\xF3w",show_artwork:"Poka\u017C ilustracje pojemnik\xF3w",show_updated:"Poka\u017C czas aktualizacji \u017Ar\xF3d\u0142a",show_manage_bins:"Poka\u017C skr\xF3t Zarz\u0105dzaj pojemnikami",show_source:"Poka\u017C nazwy \u017Ar\xF3de\u0142",locale:"J\u0119zyk (opcjonalnie)",compact:"Kompaktowy",hero:"Wyr\xF3\u017Cniony",schedule:"Harmonogram",overview:"Przegl\u0105d",native:"Natywny Home Assistant",modern:"Nowoczesny",minimal:"Minimalistyczny",comfortable:"Wygodne",sourceHelp:"Wybierz jedno g\u0142\xF3wne \u017Ar\xF3d\u0142o dla ka\u017Cdego adresu. W Waste Collection Schedule wybierz sensor zbiorczy ze szczeg\xF3\u0142ami Generic (Wszystkie atrybuty w ustawieniach wizualnych). Mo\u017Cesz te\u017C u\u017Cy\u0107 kalendarza.",unsupported:"Sensor nie udost\u0119pnia danych harmonogramu. Otw\xF3rz jego ustawienia i wybierz Generic / Wszystkie atrybuty.",binsHelp:"Kolory integracji obowi\u0105zuj\u0105 do wybrania w\u0142asnych. Wsp\xF3lne definicje pojemnik\xF3w pozostaj\u0105 w Waste Collection Schedule.",rangeHelp:"Pojemniki kalendarza pochodz\u0105 z wydarze\u0144 w wybranym zakresie dat. Pojemniki bez termin\xF3w mo\u017Cna doda\u0107 w ustawieniach zaawansowanych.",noBins:"Brak pojemnik\xF3w w udost\u0119pnionym harmonogramie.",calendarLoading:"\u0141adowanie pojemnik\xF3w kalendarza\u2026",calendarFailed:"Nie uda\u0142o si\u0119 wczyta\u0107 niekt\xF3rych pojemnik\xF3w kalendarza. Sprawd\u017A encj\u0119 \u017Ar\xF3d\u0142ow\u0105 lub spr\xF3buj ponownie.",customize:"Edytuj pojemnik",displayName:"Wy\u015Bwietlana nazwa",localColor:"W\u0142asny kolor pojemnika",inheritedColor:"Odziedziczony kolor karty",integrationColor:"Kolor integracji",localColorStatus:"W\u0142asny kolor",varyingColors:"Kolory integracji r\xF3\u017Cni\u0105 si\u0119 mi\u0119dzy pojemnikami.",neutralColor:"Brak koloru integracji; ilustracje pozostaj\u0105 neutralne.",resetInherited:"U\u017Cyj odziedziczonego koloru karty",resetIntegration:"U\u017Cyj koloru integracji",hide:"Ukryj ten odbi\xF3r",hidden:"Ukryty",local:"Dostosowany",integration:"Integracja",done:"Gotowe",remove:"Przywr\xF3\u0107 ustawienia tego wpisu",matching:"Zaawansowane dopasowanie i ikona",type:"ID kategorii lub dok\u0142adna nazwa kalendarza",binSource:"Encja \u017Ar\xF3d\u0142owa (opcjonalnie)",label:"Dok\u0142adna nazwa pojemnika (opcjonalnie)",icon:"Ikona (mdi:\u2026)",color:"W\u0142asny kolor (#RRGGBB)",advanced:"Ustawienia zaawansowane",advancedOverride:"Dodaj wpis dla kategorii lub brakuj\u0105cego pojemnika",overrideHelp:"U\u017Cyj dok\u0142adnego ID kategorii lub pe\u0142nej nazwy odbioru ze starszych sensor\xF3w i kalendarzy.",addOverride:"Dodaj wpis odbioru",tap:"Akcja po dotkni\u0119ciu",details:"Zobacz harmonogram","more-info":"Szczeg\xF3\u0142y encji",overrideLimit:"Karta obs\u0142uguje do 100 w\u0142asnych wpis\xF3w. Usu\u0144 nieu\u017Cywany wpis przed dodaniem kolejnego.",navigate:"Otw\xF3rz pulpit",none:"Brak akcji",navigationPath:"\u015Acie\u017Cka pulpitu",retry:"Spr\xF3buj ponownie"},xt=i=>i.toLowerCase().startsWith("pl")?Gt:Zt;var _t=J`
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
`;function Ct(i){return{...i,entities:b(i),layout:i.layout??"compact",appearance:i.appearance??"native",density:i.density??"comfortable",show_artwork:i.show_artwork??i.layout==="overview",show_source:i.show_source??b(i).length>1}}function kt(i,t,e){let o=Object.fromEntries(e.filter(n=>Object.prototype.hasOwnProperty.call(t,n)&&JSON.stringify(i[n])!==JSON.stringify(t[n])).map(n=>[n,t[n]]));return Object.prototype.hasOwnProperty.call(o,"entities")&&(o.entity=void 0),o}var B=class extends _{constructor(){super(...arguments);this.controller=new Z}set hass(e){let o=this.ha;this.ha=e,(!o||o.connection!==e.connection||o.config.time_zone!==e.config.time_zone)&&(this.controller.reset(),this.calendarSnapshot=void 0),(!o||o.connection!==e.connection||o.config.time_zone!==e.config.time_zone||b(this.config??{type:""}).some(n=>o.states[n]!==e.states[n]))&&this.refreshBins(),this.requestUpdate()}get hass(){return this.ha}setConfig(e){let o=this.config;this.config={...e},(!o||JSON.stringify(b(o))!==JSON.stringify(b(e))||o.days_to_show!==e.days_to_show)&&(this.controller.reset(),this.calendarSnapshot=void 0,this.editing=void 0,this.refreshBins()),this.editing!==void 0&&!this.config.overrides?.[this.editing]&&(this.editing=void 0)}connectedCallback(){super.connectedCallback(),this.timer=setInterval(()=>this.refreshBins(),6e4),this.refreshBins()}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.timer),this.controller.cancel()}refreshBins(){if(!(!this.isConnected||!this.ha||!this.config))try{let e=ce({...this.config,overrides:[]});if(!b(e).some(o=>o.startsWith("calendar.")))return;this.controller.update(this.ha,e,o=>{(o.status!=="loading"||!this.calendarSnapshot)&&(this.calendarSnapshot=o)})}catch{}}changed(e){this.setConfig({...this.config,...e}),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this.config},bubbles:!0,composed:!0}))}override(e,o){let n=[...this.config?.overrides??[]];n[e]={...n[e],...o},this.changed({overrides:n})}form(e,o){let n=this.config.type.includes("badge"),r=(c,u)=>({name:c,selector:{select:{options:u.map(l=>({value:l,label:o[l]})),mode:"dropdown"}}}),s=[{name:"entities",required:!0,selector:{entity:{domain:["sensor","calendar"],multiple:!0,include_entities:ge(this.ha,this.config)}}},{name:"title",selector:{text:{}}},r("layout",["compact","hero","schedule","overview"]),r("appearance",["native","modern","minimal"]),r("density",["comfortable","compact"]),{name:"days_to_show",selector:{number:{min:1,max:366,mode:"box"}}},{name:"max_groups",selector:{number:{min:1,max:50,mode:"box"}}},...["show_artwork","show_updated","show_manage_bins","show_source"].map(c=>({name:c,selector:{boolean:{}}})),{name:"locale",selector:{text:{}}}].filter(c=>e.includes(c.name)&&(!n||!["layout","max_groups","show_artwork","show_manage_bins","appearance","density","show_source"].includes(c.name)));if(!s.length)return p;let a=Ct(this.config);return h`<ha-form .hass=${this.ha} .data=${a} .schema=${s}
      .computeLabel=${c=>o[c.name]}
      @value-changed=${c=>{let u=kt(a,c.detail.value,s.map(l=>l.name));Object.keys(u).length&&this.changed(u)}}></ha-form>`}editPanel(e,o,n,r){let s=this.editing;if(s===void 0||!this.config.overrides?.[s])return p;let a=this.config.overrides[s],c=ut(a,this.config.overrides),u=o.filter(y=>ue(y,a)),l=new Set(u.map(y=>y.color)),d=l.size===1?u[0]?.color:void 0,m=c?.color?`${e.inheritedColor}: ${c.color}`:l.size>1?e.varyingColors:d?`${e.integrationColor}: ${d}`:e.neutralColor,g=a.source&&a.label?n.find(y=>ue(y,a)):void 0,f={sourceId:a.source??"",typeId:a.type,originalLabel:a.label??a.type,label:a.name??a.label??a.type},v=g?P(g,n):P(f,r);return h`<fieldset><legend>${v}${a.source?h` · ${C(this.ha,a.source,b(this.config))}`:p}</legend>
      <label>${e.displayName}<input .value=${a.name??""} placeholder=${c?.name??a.label??a.type}
        @input=${y=>this.override(s,{name:y.target.value||void 0})} /></label>
      <label>${e.localColor}<input type="color" .value=${a.color??c?.color??d??"#808080"}
        @input=${y=>this.override(s,{color:y.target.value})} /></label>
      <p>${a.color?`${e.localColorStatus}: ${a.color}`:m}</p>
      ${a.color?h`<button @click=${()=>this.override(s,{color:void 0})}>${c?.color?e.resetInherited:e.resetIntegration}</button>`:p}
      <label class="check"><input type="checkbox" .checked=${a.hidden??c?.hidden??!1}
        @change=${y=>this.override(s,{hidden:y.target.checked})} />${e.hide}</label>
      <details><summary>${e.matching}</summary>
        ${["type","source","label","icon","color"].map(y=>h`<label>${y==="source"?e.binSource:e[y]}<input .value=${a[y]??""}
          @change=${x=>this.override(s,{[y]:x.target.value||void 0})} /></label>`)}
      </details>
      <div class="buttons"><button @click=${()=>{this.editing=void 0}}>${e.done}</button>
        <button @click=${()=>{this.editing=void 0,this.changed({overrides:this.config.overrides.filter((y,x)=>x!==s)})}}>${e.remove}</button></div>
    </fieldset>`}render(){if(!this.config||!this.ha)return p;let e=xt(this.config.locale||this.ha.locale?.language||this.ha.language||"en"),o=gt(this.ha,this.config,this.calendarSnapshot?.events),n=this.config.overrides??[],r=b(this.config),s=o.map(l=>({...l,originalLabel:l.label,label:ie(l,n)?.name??l.label})),a=b(this.config).filter(l=>l.startsWith("sensor.")&&this.ha.states[l]&&!M(this.ha.states[l]).supported),c=n.map((l,d)=>({o:l,index:d})).filter(({o:l})=>!o.some(d=>l.type===(d.typeId??d.label)&&l.source===d.sourceId&&l.label===d.label)),u=c.map(({o:l})=>({sourceId:l.source??"",typeId:l.type,originalLabel:l.label??l.type,label:l.name??l.label??l.type}));return h`<h3>${e.source}</h3>${this.form(["entities","title","layout"],e)}<p>${e.sourceHelp}</p>
      ${a.length?h`<p class="warning" role="status">${a.join(", ")}: ${e.unsupported}</p>`:p}
      ${this.config.type.includes("badge")?p:h`<h3>${e.appearanceSection}</h3>${this.form(["appearance","density","show_artwork","show_source","show_manage_bins"],e)}`}
      <h3>${e.binsSection}</h3><p>${e.binsHelp}</p>
      ${n.length>=100?h`<p role="status">${e.overrideLimit}</p>`:p}
      <div class="bin-list">${o.map((l,d)=>{let m=n.findIndex(v=>v.type===(l.typeId??l.label)&&v.source===l.sourceId&&v.label===l.label),g=ie(l,n),f=P(s[d],s);return h`<button class="bin-row" aria-label=${`${e.customize}: ${f} \xB7 ${C(this.ha,l.sourceId,r)}`} aria-pressed=${m>=0&&this.editing===m} ?disabled=${m<0&&n.length>=100}
          @click=${()=>{m>=0?this.editing=m:(this.changed({overrides:[...n,{type:l.typeId??l.label,source:l.sourceId,label:l.label}]}),this.editing=n.length)}}><span class="swatch" aria-hidden="true" style=${T({"--waste-type-color":g?.color??l.color})}></span>
          <span class="bin-copy"><strong>${f}</strong><small>${C(this.ha,l.sourceId,r)} · ${g?.hidden?e.hidden:g?.hidden!==void 0||g?.color||g?.name||g?.icon?e.local:e.integration}</small></span><span aria-hidden="true">✎</span></button>
          ${m>=0&&this.editing===m?this.editPanel(e,o,s,u):p}`})}${c.map(({o:l,index:d},m)=>h`<button class="bin-row" aria-pressed=${this.editing===d} @click=${()=>{this.editing=d}}>
        <span class="bin-copy"><strong>${P(u[m],u)}</strong><small>${l.source?C(this.ha,l.source,r):e.matching}</small></span><span aria-hidden="true">✎</span></button>
        ${this.editing===d?this.editPanel(e,o,s,u):p}`)}</div>
      ${o.length?p:h`<p>${e.noBins}</p>`}
      ${b(this.config).some(l=>l.startsWith("calendar."))?h`<p>${e.rangeHelp}</p>
        ${!this.calendarSnapshot||this.calendarSnapshot.status==="loading"?h`<p role="status">${e.calendarLoading}</p>`:this.calendarSnapshot.messages.some(l=>l.source.startsWith("calendar."))?h`<p class="warning" role="status">${e.calendarFailed} <button @click=${this.refreshBins}>${e.retry}</button></p>`:p}`:p}
      <details><summary>${e.advanced}</summary>${this.form(["days_to_show","max_groups","show_updated","locale"],e)}
        <label>${e.tap}<select .value=${this.config.tap_action?.action??"details"} @change=${l=>this.changed({tap_action:{action:l.target.value}})}>
          ${["details","more-info","navigate","none"].map(l=>h`<option value=${l}>${e[l]}</option>`)}</select></label>
        ${this.config.tap_action?.action==="navigate"?h`<label>${e.navigationPath}<input .value=${this.config.tap_action.navigation_path??""} placeholder="/lovelace/waste"
          @change=${l=>this.changed({tap_action:{action:"navigate",navigation_path:l.target.value}})} /></label>`:p}
        <details><summary>${e.advancedOverride}</summary><p>${e.overrideHelp}</p><button ?disabled=${n.length>=100} @click=${()=>{this.changed({overrides:[...n,{type:"collection_name"}]}),this.editing=n.length}}>${e.addOverride}</button></details>
      </details>`}};B.properties={config:{state:!0},editing:{state:!0},calendarSnapshot:{state:!0}},B.styles=_t;var be=class extends B{};customElements.define("waste-pickup-planner-card",L);customElements.define("waste-pickup-planner-badge",ye);customElements.define("waste-pickup-planner-card-editor",B);customElements.define("waste-pickup-planner-badge-editor",be);var Et=window;(Et.customCards??=[]).push({type:"waste-pickup-planner-card",name:"Waste Pickup Planner",description:"Date-grouped waste collections with compact, hero and schedule layouts.",preview:!0});(Et.customBadges??=[]).push({type:"waste-pickup-planner-badge",name:"Waste Pickup Planner Badge",description:"The next collection date and types, with schedule details."});
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
