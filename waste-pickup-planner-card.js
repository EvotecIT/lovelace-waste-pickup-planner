var ee=globalThis,te=ee.ShadowRoot&&(ee.ShadyCSS===void 0||ee.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,me=Symbol(),Ne=new WeakMap,F=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==me)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(te&&t===void 0){let i=e!==void 0&&e.length===1;i&&(t=Ne.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Ne.set(e,t))}return t}toString(){return this.cssText}},Le=o=>new F(typeof o=="string"?o:o+"",void 0,me),Z=(o,...t)=>{let e=o.length===1?o[0]:t.reduce((i,n,s)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+o[s+1],o[0]);return new F(e,o,me)},Be=(o,t)=>{if(te)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let i=document.createElement("style"),n=ee.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,o.appendChild(i)}},fe=te?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return Le(e)})(o):o;var{is:$t,defineProperty:xt,getOwnPropertyDescriptor:_t,getOwnPropertyNames:Ct,getOwnPropertySymbols:kt,getPrototypeOf:Et}=Object,ie=globalThis,Re=ie.trustedTypes,St=Re?Re.emptyScript:"",At=ie.reactiveElementPolyfillSupport,G=(o,t)=>o,ye={toAttribute(o,t){switch(t){case Boolean:o=o?St:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},Fe=(o,t)=>!$t(o,t),We={attribute:!0,type:String,converter:ye,reflect:!1,useDefault:!1,hasChanged:Fe};Symbol.metadata??=Symbol("metadata"),ie.litPropertyMetadata??=new WeakMap;var E=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=We){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let i=Symbol(),n=this.getPropertyDescriptor(t,i,e);n!==void 0&&xt(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){let{get:n,set:s}=_t(this.prototype,t)??{get(){return this[e]},set(r){this[e]=r}};return{get:n,set(r){let a=n?.call(this);s?.call(this,r),this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??We}static _$Ei(){if(this.hasOwnProperty(G("elementProperties")))return;let t=Et(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(G("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(G("properties"))){let e=this.properties,i=[...Ct(e),...kt(e)];for(let n of i)this.createProperty(n,e[n])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[i,n]of e)this.elementProperties.set(i,n)}this._$Eh=new Map;for(let[e,i]of this.elementProperties){let n=this._$Eu(e,i);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let n of i)e.unshift(fe(n))}else t!==void 0&&e.push(fe(t));return e}static _$Eu(t,e){let i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Be(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){let i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(n!==void 0&&i.reflect===!0){let s=(i.converter?.toAttribute!==void 0?i.converter:ye).toAttribute(e,i.type);this._$Em=t,s==null?this.removeAttribute(n):this.setAttribute(n,s),this._$Em=null}}_$AK(t,e){let i=this.constructor,n=i._$Eh.get(t);if(n!==void 0&&this._$Em!==n){let s=i.getPropertyOptions(n),r=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:ye;this._$Em=n;let a=r.fromAttribute(e,s.type);this[n]=a??this._$Ej?.get(n)??a,this._$Em=null}}requestUpdate(t,e,i,n=!1,s){if(t!==void 0){let r=this.constructor;if(n===!1&&(s=this[t]),i??=r.getPropertyOptions(t),!((i.hasChanged??Fe)(s,e)||i.useDefault&&i.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:n,wrapped:s},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),s!==!0||r!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),n===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[n,s]of this._$Ep)this[n]=s;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[n,s]of i){let{wrapped:r}=s,a=this[n];r!==!0||this._$AL.has(n)||a===void 0||this.C(n,void 0,s,a)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[G("elementProperties")]=new Map,E[G("finalized")]=new Map,At?.({ReactiveElement:E}),(ie.reactiveElementVersions??=[]).push("2.1.2");var Ce=globalThis,Ze=o=>o,oe=Ce.trustedTypes,Ge=oe?oe.createPolicy("lit-html",{createHTML:o=>o}):void 0,Qe="$lit$",A=`lit$${Math.random().toFixed(9).slice(2)}$`,Xe="?"+A,zt=`<${Xe}>`,j=document,K=()=>j.createComment(""),V=o=>o===null||typeof o!="object"&&typeof o!="function",ke=Array.isArray,Tt=o=>ke(o)||typeof o?.[Symbol.iterator]=="function",ve=`[ 	
\f\r]`,q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,qe=/-->/g,Ke=/>/g,P=RegExp(`>|${ve}(?:([^\\s"'>=/]+)(${ve}*=${ve}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ve=/'/g,Je=/"/g,et=/^(?:script|style|textarea|title)$/i,Ee=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),h=Ee(1),Ft=Ee(2),Zt=Ee(3),S=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),Ye=new WeakMap,H=j.createTreeWalker(j,129);function tt(o,t){if(!ke(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ge!==void 0?Ge.createHTML(t):t}var Pt=(o,t)=>{let e=o.length-1,i=[],n,s=t===2?"<svg>":t===3?"<math>":"",r=q;for(let a=0;a<e;a++){let c=o[a],d,u,l=-1,g=0;for(;g<c.length&&(r.lastIndex=g,u=r.exec(c),u!==null);)g=r.lastIndex,r===q?u[1]==="!--"?r=qe:u[1]!==void 0?r=Ke:u[2]!==void 0?(et.test(u[2])&&(n=RegExp("</"+u[2],"g")),r=P):u[3]!==void 0&&(r=P):r===P?u[0]===">"?(r=n??q,l=-1):u[1]===void 0?l=-2:(l=r.lastIndex-u[2].length,d=u[1],r=u[3]===void 0?P:u[3]==='"'?Je:Ve):r===Je||r===Ve?r=P:r===qe||r===Ke?r=q:(r=P,n=void 0);let m=r===P&&o[a+1].startsWith("/>")?" ":"";s+=r===q?c+zt:l>=0?(i.push(d),c.slice(0,l)+Qe+c.slice(l)+A+m):c+A+(l===-2?a:m)}return[tt(o,s+(o[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]},J=class o{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,r=0,a=t.length-1,c=this.parts,[d,u]=Pt(t,e);if(this.el=o.createElement(d,i),H.currentNode=this.el.content,e===2||e===3){let l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(n=H.nextNode())!==null&&c.length<a;){if(n.nodeType===1){if(n.hasAttributes())for(let l of n.getAttributeNames())if(l.endsWith(Qe)){let g=u[r++],m=n.getAttribute(l).split(A),_=/([.?@])?(.*)/.exec(g);c.push({type:1,index:s,name:_[2],strings:m,ctor:_[1]==="."?we:_[1]==="?"?$e:_[1]==="@"?xe:L}),n.removeAttribute(l)}else l.startsWith(A)&&(c.push({type:6,index:s}),n.removeAttribute(l));if(et.test(n.tagName)){let l=n.textContent.split(A),g=l.length-1;if(g>0){n.textContent=oe?oe.emptyScript:"";for(let m=0;m<g;m++)n.append(l[m],K()),H.nextNode(),c.push({type:2,index:++s});n.append(l[g],K())}}}else if(n.nodeType===8)if(n.data===Xe)c.push({type:2,index:s});else{let l=-1;for(;(l=n.data.indexOf(A,l+1))!==-1;)c.push({type:7,index:s}),l+=A.length-1}s++}}static createElement(t,e){let i=j.createElement("template");return i.innerHTML=t,i}};function N(o,t,e=o,i){if(t===S)return t;let n=i!==void 0?e._$Co?.[i]:e._$Cl,s=V(t)?void 0:t._$litDirective$;return n?.constructor!==s&&(n?._$AO?.(!1),s===void 0?n=void 0:(n=new s(o),n._$AT(o,e,i)),i!==void 0?(e._$Co??=[])[i]=n:e._$Cl=n),n!==void 0&&(t=N(o,n._$AS(o,t.values),n,i)),t}var be=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:i}=this._$AD,n=(t?.creationScope??j).importNode(e,!0);H.currentNode=n;let s=H.nextNode(),r=0,a=0,c=i[0];for(;c!==void 0;){if(r===c.index){let d;c.type===2?d=new Y(s,s.nextSibling,this,t):c.type===1?d=new c.ctor(s,c.name,c.strings,this,t):c.type===6&&(d=new _e(s,this,t)),this._$AV.push(d),c=i[++a]}r!==c?.index&&(s=H.nextNode(),r++)}return H.currentNode=j,n}p(t){let e=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},Y=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,n){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=N(this,t,e),V(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==S&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Tt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==p&&V(this._$AH)?this._$AA.nextSibling.data=t:this.T(j.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:i}=t,n=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=J.createElement(tt(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(e);else{let s=new be(n,this),r=s.u(this.options);s.p(e),this.T(r),this._$AH=s}}_$AC(t){let e=Ye.get(t.strings);return e===void 0&&Ye.set(t.strings,e=new J(t)),e}k(t){ke(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,n=0;for(let s of t)n===e.length?e.push(i=new o(this.O(K()),this.O(K()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let i=Ze(t).nextSibling;Ze(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},L=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,n,s){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=p}_$AI(t,e=this,i,n){let s=this.strings,r=!1;if(s===void 0)t=N(this,t,e,0),r=!V(t)||t!==this._$AH&&t!==S,r&&(this._$AH=t);else{let a=t,c,d;for(t=s[0],c=0;c<s.length-1;c++)d=N(this,a[i+c],e,c),d===S&&(d=this._$AH[c]),r||=!V(d)||d!==this._$AH[c],d===p?t=p:t!==p&&(t+=(d??"")+s[c+1]),this._$AH[c]=d}r&&!n&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},we=class extends L{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}},$e=class extends L{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==p)}},xe=class extends L{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){if((t=N(this,t,e,0)??p)===S)return;let i=this._$AH,n=t===p&&i!==p||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==p&&(i===p||n);n&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},_e=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}};var Ht=Ce.litHtmlPolyfillSupport;Ht?.(J,Y),(Ce.litHtmlVersions??=[]).push("3.3.3");var it=(o,t,e)=>{let i=e?.renderBefore??t,n=i._$litPart$;if(n===void 0){let s=e?.renderBefore??null;i._$litPart$=n=new Y(t.insertBefore(K(),s),s,void 0,e??{})}return n._$AI(o),n};var Se=globalThis,C=class extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=it(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return S}};C._$litElement$=!0,C.finalized=!0,Se.litElementHydrateSupport?.({LitElement:C});var jt=Se.litElementPolyfillSupport;jt?.({LitElement:C});(Se.litElementVersions??=[]).push("4.2.2");var Ae=o=>typeof o=="string"&&/^#[\da-f]{6}$/i.test(o),ze=o=>typeof o=="string"&&/^mdi:[a-z0-9-]+$/.test(o);function f(o){return[...new Set(o.entities??(o.entity?[o.entity]:[]))]}function ne(o){if(!o||typeof o!="object")throw new Error("Choose a waste sensor or calendar.");if(o.entities!==void 0&&(!Array.isArray(o.entities)||o.entities.some(e=>typeof e!="string")))throw new Error("entities must be an array of entity IDs.");if(o.entity&&o.entities)throw new Error("Use entity or entities, not both.");let t=f(o);if(!t.length||t.length>12||t.some(e=>!/^(sensor|calendar)\.[a-z0-9_]+$/.test(e)))throw new Error("Choose 1\u201312 sensor or calendar entities.");if(o.layout!==void 0&&!["compact","hero","schedule","overview"].includes(o.layout))throw new Error("Unknown layout.");if(o.appearance!==void 0&&!["native","modern","minimal"].includes(o.appearance))throw new Error("Unknown appearance.");if(o.density!==void 0&&!["comfortable","compact"].includes(o.density))throw new Error("Unknown density.");for(let[e,i]of[["days_to_show",366],["max_groups",50]]){let n=o[e];if(n!==void 0&&(!Number.isInteger(n)||n<1||n>i))throw new Error(`${e} must be 1\u2013${i}.`)}for(let e of["show_artwork","show_updated","show_manage_bins","show_source"])if(o[e]!==void 0&&typeof o[e]!="boolean")throw new Error(`${e} must be true or false.`);if(o.title!==void 0&&typeof o.title!="string")throw new Error("title must be text.");if(o.locale!==void 0){if(typeof o.locale!="string")throw new Error("locale must be a language code.");new Intl.DateTimeFormat(o.locale)}if(o.overrides!==void 0){if(!Array.isArray(o.overrides)||o.overrides.length>100)throw new Error("overrides must contain at most 100 types.");for(let e of o.overrides)if(!e||typeof e.type!="string"||!e.type.trim()||e.source!==void 0&&(typeof e.source!="string"||!/^(sensor|calendar)\.[a-z0-9_]+$/.test(e.source))||e.label!==void 0&&(typeof e.label!="string"||!e.label.trim())||e.name!==void 0&&(typeof e.name!="string"||!e.name.trim())||e.hidden!==void 0&&typeof e.hidden!="boolean"||e.color!==void 0&&!Ae(e.color)||e.icon!==void 0&&!ze(e.icon))throw new Error("Invalid type override. Use an exact type ID or name, mdi icon, and #RRGGBB color.")}if(o.tap_action){if(!["details","more-info","navigate","none"].includes(o.tap_action.action))throw new Error("Unsupported tap action.");if(o.tap_action.action==="navigate"&&(typeof o.tap_action.navigation_path!="string"||!/^\/(?!\/)/.test(o.tap_action.navigation_path)||/[\\\u0000-\u001f]/.test(o.tap_action.navigation_path)))throw new Error("Navigation requires a local path beginning with /.")}return{...o,entities:o.entities?[...o.entities]:void 0,layout:o.layout??"compact",days_to_show:o.days_to_show??30,max_groups:o.max_groups??5}}function se(o){if(typeof o!="string"||!/^\d{4}-\d{2}-\d{2}$/.test(o))return!1;let t=new Date(`${o}T12:00:00Z`);return Number.isFinite(t.getTime())&&t.toISOString().slice(0,10)===o}function B(o,t){let e=new Intl.DateTimeFormat("en-CA",{timeZone:t,year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(o),i=n=>e.find(s=>s.type===n).value;return`${i("year")}-${i("month")}-${i("day")}`}function ot(o,t){let e=new Date(`${o}T12:00:00Z`);return e.setUTCDate(e.getUTCDate()+t),e.toISOString().slice(0,10)}function It(o,t){return Math.round((Date.parse(`${t}T12:00:00Z`)-Date.parse(`${o}T12:00:00Z`))/864e5)}function I(o,t,e){let i=It(t,o);return i<=1&&i>=0?new Intl.RelativeTimeFormat(e,{numeric:"auto"}).format(i,"day"):new Intl.DateTimeFormat(e,{weekday:"long",day:"numeric",month:"short",timeZone:"UTC"}).format(new Date(`${o}T12:00:00Z`))}function nt(o,t,e){return new Intl.DateTimeFormat(t,{dateStyle:"medium",timeStyle:"short",timeZone:e}).format(new Date(o))}var re=o=>o!==null&&typeof o=="object"&&!Array.isArray(o)?o:void 0,Pe=o=>typeof o=="string"&&o.trim()?o:void 0;function Te(o,t,e){let i=o.date??e,n=Pe(o.type);if(!(!se(i)||!n))return{sourceId:t,entityId:t,date:i,label:n,typeId:Pe(o.type_id),icon:ze(o.icon)?o.icon:void 0,color:Ae(o.color)?o.color:void 0,colorSource:["source","customize","default"].includes(String(o.color_source))?o.color_source:void 0}}function O(o){let t=o.attributes,e="upcoming"in t?t.upcoming:"upcoming_pickups"in t?t.upcoming_pickups:"next_pickup"in t?t.next_pickup===null?[]:[t.next_pickup]:void 0;if(!Array.isArray(e))return{events:[],supported:!1,invalid:e!==void 0};let i=[],n=e.length>2e3;for(let r of e.slice(0,2e3)){if(i.length>=2e3){n=!0;break}let a=re(r);if(!a||!se(a.date)){n=!0;continue}if(Array.isArray(a.collections)){a.collections.length>100&&(n=!0);for(let c of a.collections.slice(0,100)){let d=re(c),u=d&&Te(d,o.entity_id,a.date);u?i.push(u):n=!0}}else if(Array.isArray(a.types)){a.types.length>100&&(n=!0);for(let c of a.types.slice(0,100)){let d=Te({...a,type:c,color:void 0,color_source:void 0,type_id:void 0},o.entity_id);d?i.push(d):n=!0}}else{let c=Te(a,o.entity_id);c?i.push(c):n=!0}}let s=typeof t.last_update=="string"&&/^\d{4}-\d{2}-\d{2}T/.test(t.last_update)&&/(?:Z|[+-]\d{2}:\d{2})$/.test(t.last_update)&&Number.isFinite(Date.parse(t.last_update))?t.last_update:void 0;return{events:i.slice(0,2e3),supported:!0,invalid:n||i.length>2e3,fetchedAt:s}}function st(o,t,e){if(!Array.isArray(o)||o.length>1e4)throw new Error("Invalid calendar response.");return o.flatMap(i=>{let n=re(i),s=re(n?.start),r=Pe(n?.summary);if(!s||!r)return[];let a;return se(s.date)?a=s.date:typeof s.dateTime=="string"&&/(?:Z|[+-]\d{2}:\d{2})$/.test(s.dateTime)&&Number.isFinite(Date.parse(s.dateTime))&&(a=B(new Date(s.dateTime),e)),a?[{sourceId:t,entityId:t,date:a,label:r}]:[]})}var rt=new WeakMap;function He(o,t,e,i){let n=rt.get(o.connection);n||(n=new Map,rt.set(o.connection,n));let s=JSON.stringify([t,e,i]),r=o.states[t]?.last_updated,a=n.get(s);if(a?.pending){if(a.stamp===r)return a.promise;let l=()=>He(o,t,e,i);return a.promise.then(l,l)}if(a&&a.stamp===r&&a.expires>Date.now())return a.promise;for(let[l,g]of n)!g.pending&&g.expires<=Date.now()&&n.delete(l);if(!n.has(s)&&n.size>=100){let l=[...n].find(([,g])=>!g.pending);if(l)n.delete(l[0]);else return Promise.reject(new Error("Too many calendar requests are pending."))}let c=new URLSearchParams({start:`${e}T00:00:00+14:00`,end:`${i}T00:00:00-12:00`}),d=o.callApi("GET",`calendars/${encodeURIComponent(t)}?${c}`),u={promise:d,expires:1/0,pending:!0,stamp:r};return n.set(s,u),d.then(()=>{u.pending=!1,u.expires=Date.now()+6e4},()=>{n.get(s)===u&&n.delete(s)}),d}var v=o=>JSON.stringify([o.sourceId,o.typeId??o.originalLabel??o.label,o.originalLabel??o.label]),je=(o,t)=>t.type===(o.typeId??o.originalLabel??o.label)&&(t.source===void 0||t.source===o.sourceId)&&(t.label===void 0||t.label===(o.originalLabel??o.label)),ae=o=>+(o.source!==void 0)+ +(o.label!==void 0)*2;function at(o){let t=new Map;for(let e of o)t.has(ae(e))||t.set(ae(e),e);return o.length?[...t.entries()].sort(([e],[i])=>e-i).reduce((e,[,i])=>({...e,...Object.fromEntries(Object.entries(i).filter(([,n])=>n!==void 0))}),{}):void 0}function ce(o,t=[]){return at(t.filter(e=>je(o,e)))}function ct(o,t=[]){return at(t.filter(e=>e.type===o.type&&ae(e)<ae(o)&&(e.source===void 0||e.source===o.source)&&(e.label===void 0||e.label===o.label)))}function le(o,t){return[...new Set([...f(t),...Object.values(o.states).filter(e=>e.entity_id.startsWith("calendar.")||e.entity_id.startsWith("sensor.")&&(()=>{let i=O(e);return i.supported&&!i.invalid})()).map(e=>e.entity_id)])]}function lt(o,t,e=[]){let i=new Map;for(let s of f(t)){let r=o.states[s];if(!(!r||!s.startsWith("sensor.")))for(let a of O(r).events)i.has(v(a))||i.set(v(a),a)}let n=new Set(f(t));for(let s of e)s.sourceId.startsWith("calendar.")&&n.has(s.sourceId)&&!i.has(v(s))&&i.set(v(s),s);return[...i.values()].sort((s,r)=>s.label.localeCompare(r.label)||s.sourceId.localeCompare(r.sourceId))}function dt(o){let t=new Map;for(let e of o){let i=t.get(v(e));(!i||e.date<i.date)&&t.set(v(e),e)}return[...t.values()].sort((e,i)=>e.date.localeCompare(i.date)||e.label.localeCompare(i.label)||e.sourceId.localeCompare(i.sourceId))}function pt(o,t,e,i){let n=new Map;for(let s of o){if(s.date<e||s.date>=i)continue;let r=ce(s,t.overrides);if(r?.hidden)continue;let a=JSON.stringify([v(s),s.date,s.color,s.colorSource,s.icon]);n.has(a)||n.set(a,{...s,originalLabel:s.originalLabel??s.label,label:r?.name??s.label,color:r?.color??s.color,colorSource:r?.color?"customize":s.colorSource,icon:r?.icon??s.icon})}return[...n.values()].sort((s,r)=>s.date.localeCompare(r.date)||s.label.localeCompare(r.label))}function Ie(o){let t=new Map;for(let e of o){let i=t.get(e.date)??[];i.push(e),t.set(e.date,i)}return[...t].map(([e,i])=>({date:e,events:i}))}function de(o){return o.colorSource==="source"||o.colorSource==="customize"?o.color:void 0}var R=class{constructor(){this.generation=0;this.cache=new Map}reset(){this.generation++,this.cache.clear(),this.connection=void 0,this.timeZone=void 0}cancel(){this.generation++}async update(t,e,i){(this.connection!==t.connection||this.timeZone!==t.config.time_zone)&&(this.cache.clear(),this.connection=t.connection,this.timeZone=t.config.time_zone);let n=++this.generation,s=t.config.time_zone,r=B(new Date,s),a=ot(r,e.days_to_show),c={rangeStart:r,rangeEnd:a,timeZone:s,messages:[]};i({...c,status:"loading",events:[]});let d=0,u=0,l=0,g=[],m=[];if(await Promise.all(f(e).map(async b=>{let $="sourceLoadFailed";try{let w=t.states[b];if(!w||w.state==="unavailable"||b.startsWith("calendar.")&&w.state==="unknown")throw $="sourceUnavailable",new Error($);let k,x;if(b.startsWith("calendar."))k=st(await He(t,b,r,a),b,s);else{let T=O(w);if(!T.supported)throw $="sourceUnsupported",new Error($);if(T.invalid)throw $="sourceInvalid",new Error($);k=T.events,x=T.fetchedAt}if(n!==this.generation)return;this.cache.set(b,{events:k,fetchedAt:x}),x&&m.push(x),g.push(...k),u++}catch{if(n!==this.generation)return;d++,c.messages.push({source:b,reason:$});let w=this.cache.get(b);w&&(l++,g.push(...w.events),w.fetchedAt&&m.push(w.fetchedAt))}})),n!==this.generation)return;let _=pt(g,e,r,a);i({...c,events:_,status:d?l||u?"stale":"unavailable":_.length?"ready":"empty",fetchedAt:m.sort((b,$)=>Date.parse(b)-Date.parse($))[0]})}};var ht={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ut=o=>(...t)=>({_$litDirective$:o,values:t}),pe=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var gt="important",Ot=" !"+gt,z=ut(class extends pe{constructor(o){if(super(o),o.type!==ht.ATTRIBUTE||o.name!=="style"||o.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(o){return Object.keys(o).reduce((t,e)=>{let i=o[e];return i==null?t:t+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(o,[t]){let{style:e}=o.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let i of this.ft)t[i]==null&&(this.ft.delete(i),i.includes("-")?e.removeProperty(i):e[i]=null);for(let i in t){let n=t[i];if(n!=null){this.ft.add(i);let s=typeof n=="string"&&n.endsWith(Ot);i.includes("-")||s?e.setProperty(i,s?n.slice(0,-11):n,s?gt:""):e[i]=n}}return S}});var Mt={title:"Waste collection",next:"Next collection",schedule:"Collection schedule",close:"Close",loading:"Loading schedule\u2026",empty:"No collections in this date range",partialEmpty:"No dates from the available sources",unavailable:"Schedule unavailable",stale:"Some sources are unavailable. Dates may be out of date.",staleBadge:"Out of date",collections:"collections",updated:"Provider updated",details:"View schedule",manageBins:"Manage bins",today:"Today",more:"more",previousPage:"Previous page",nextPage:"Next page",yourBins:"Your bins",upcoming:"Upcoming collections",clearFilter:"Show all bins",filterHint:"Select a bin to filter the schedule",ready:"Schedule available",sources:"Sources",binPage:"Bin pages",sourceUnavailable:"Source unavailable. Check the entity in Home Assistant.",sourceUnsupported:"Select a sensor with Generic details or a calendar.",sourceInvalid:"Invalid collection records. Check the source integration.",sourceLoadFailed:"Could not load this source. Check the entity and connection in Home Assistant."},Dt={title:"Odbi\xF3r odpad\xF3w",next:"Najbli\u017Cszy odbi\xF3r",schedule:"Harmonogram odbioru",close:"Zamknij",loading:"\u0141adowanie harmonogramu\u2026",empty:"Brak odbior\xF3w w tym zakresie dat",partialEmpty:"Brak termin\xF3w z dost\u0119pnych \u017Ar\xF3de\u0142",unavailable:"Harmonogram niedost\u0119pny",stale:"Niekt\xF3re \u017Ar\xF3d\u0142a s\u0105 niedost\u0119pne. Terminy mog\u0105 by\u0107 nieaktualne.",staleBadge:"Nieaktualne",collections:"frakcje",updated:"Aktualizacja \u017Ar\xF3d\u0142a",details:"Zobacz harmonogram",manageBins:"Zarz\u0105dzaj pojemnikami",today:"Dzisiaj",more:"wi\u0119cej",previousPage:"Poprzednia strona",nextPage:"Nast\u0119pna strona",yourBins:"Twoje pojemniki",upcoming:"Nadchodz\u0105ce odbiory",clearFilter:"Poka\u017C wszystkie pojemniki",filterHint:"Wybierz pojemnik, aby filtrowa\u0107 harmonogram",ready:"Harmonogram dost\u0119pny",sources:"\u0179r\xF3d\u0142a",binPage:"Strony pojemnik\xF3w",sourceUnavailable:"\u0179r\xF3d\u0142o niedost\u0119pne. Sprawd\u017A encj\u0119 w Home Assistant.",sourceUnsupported:"Wybierz sensor z danymi Generic lub kalendarz.",sourceInvalid:"Nieprawid\u0142owe dane odbior\xF3w. Sprawd\u017A integracj\u0119 \u017Ar\xF3d\u0142ow\u0105.",sourceLoadFailed:"Nie uda\u0142o si\u0119 wczyta\u0107 \u017Ar\xF3d\u0142a. Sprawd\u017A encj\u0119 i po\u0142\u0105czenie w Home Assistant."},M=o=>o.toLowerCase().startsWith("pl")?Dt:Mt,Oe=(o,t)=>`${o.source}: ${M(t)[o.reason]}`;var Q=(o,t,e=6)=>h`<div class="chips">
    ${o.slice(0,e).map(i=>h`<span class="chip" style=${z({"--waste-type-color":i.color})}><ha-icon aria-hidden="true" .icon=${i.icon??"mdi:trash-can-outline"}></ha-icon><span>${i.label}</span></span>`)}
    ${o.length>e?h`<span class="chip overflow">+${new Intl.NumberFormat(t).format(o.length-e)} ${M(t).more}</span>`:p}
  </div>`,X=o=>h`<div class="bins" aria-hidden="true">
    ${o.slice(0,3).map(t=>h`<div
          class="bin"
          style=${z({"--waste-type-color":de(t)})}
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
  </div>`,W=(o,t,e,i=6)=>h`${o.map(n=>{let s=new Date(`${n.date}T12:00:00Z`);return h`<div class="group">
      <div class="day" aria-hidden="true">
        ${new Intl.DateTimeFormat(e,{month:"short",timeZone:"UTC"}).format(s)}<strong
          >${s.getUTCDate()}</strong
        >
      </div>
      <div class="group-body">
        <div class="group-date">${I(n.date,t,e)}</div>
        ${Q(n.events,e,i)}
      </div>
    </div>`})}`;var mt=Z`
  :host {
    display: block;
    container-type: inline-size;
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
`;async function Me(o){return customElements.get("ha-form")||await(await(await window.loadCardHelpers()).createCardElement({type:"button"})).constructor.getConfigElement(),document.createElement(o)}function he(o,t){let e=o?.states[t]?.attributes.friendly_name;return typeof e=="string"&&e.trim()?e:t}function ft(o){let{events:t,groups:e,today:i,locale:n}=o,s=M(n),r=e[0],a=dt(t),c=12,d=Math.max(1,Math.ceil(a.length/c)),u=Math.min(o.page,d-1),l=a.find(m=>v(m)===o.selected),g=l?e.map(m=>({...m,events:m.events.filter(_=>v(_)===o.selected)})).filter(m=>m.events.length):e;return h`
    ${r?h`<div class="primary overview-next"><div class="copy"><div class="eyebrow">${s.next}</div>
      <span class="date">${I(r.date,i,n)}</span>${Q(r.events,n)}
      <p class="full-date">${new Intl.DateTimeFormat(n,{dateStyle:"long",timeZone:"UTC"}).format(new Date(`${r.date}T12:00:00Z`))}</p>
    </div>${o.artwork?X(r.events):p}</div>`:p}
    <div class="section-heading"><h3>${s.yourBins}</h3><small>${new Intl.NumberFormat(n).format(a.length)}</small></div>
    <p class="filter-hint">${s.filterHint}</p>
    <div class="bin-grid">${a.slice(u*c,(u+1)*c).map(m=>h`
      <button class="bin-tile" aria-pressed=${!!(l&&v(m)===o.selected)}
        @click=${()=>o.select(v(m)===o.selected?void 0:v(m))}>
        ${o.artwork?X([m]):h`<ha-icon aria-hidden="true" .icon=${m.icon??"mdi:trash-can-outline"} style=${z({color:m.color})}></ha-icon>`}
        <span class="tile-copy"><strong>${m.label}</strong>${o.showSource?h`<small class="source-name">${he(o.hass,m.sourceId)}</small>`:p}
          <span class="tile-date">${I(m.date,i,n)}</span></span>
        <span class="tile-color" aria-hidden="true" style=${z({backgroundColor:de(m)})}></span>
      </button>`)}</div>
    ${d>1?h`<nav class="pages" aria-label=${s.binPage}><button ?disabled=${u===0} @click=${()=>o.changePage(u-1)}>${s.previousPage}</button>
      <span aria-live="polite">${u+1} / ${d}</span><button ?disabled=${u+1===d} @click=${()=>o.changePage(u+1)}>${s.nextPage}</button></nav>`:p}
    <div class="section-heading"><h3>${s.upcoming}</h3>${l?h`<button class="filter-reset" @click=${()=>o.select(void 0)}>${s.clearFilter}</button>`:p}</div>
    ${l?h`<p class="filter-hint" role="status">${l.label}${o.showSource?h` · ${he(o.hass,l.sourceId)}`:p}</p>`:p}
    <div class="overview-schedule">${W(g.slice(0,o.maxGroups),i,n)}</div>`}var D=class extends C{constructor(){super(...arguments);this.badge=!1;this.detailsOpen=!1;this.detailsPage=0;this.binPage=0;this.controller=new R;this.visible=()=>{document.visibilityState==="visible"&&this.refresh()}}set hass(e){let i=this.ha;this.ha=e,(!i||i.connection!==e.connection||i.config.time_zone!==e.config.time_zone)&&(this.snapshot=void 0,this.selectedBin=void 0,this.binPage=0),(!i||i.connection!==e.connection||i.config.time_zone!==e.config.time_zone||f(this.config??{type:""}).some(n=>i.states[n]!==e.states[n]))&&this.refresh(),(!i||i.locale?.language!==e.locale?.language||i.language!==e.language)&&this.requestUpdate()}get hass(){return this.ha}setConfig(e){let i=ne(e),n=this.config,s=!n||JSON.stringify(f(n).sort())!==JSON.stringify(f(i).sort());s&&this.controller.reset(),(s||n?.days_to_show!==i.days_to_show||JSON.stringify(n?.overrides)!==JSON.stringify(i.overrides))&&(this.snapshot=void 0,this.selectedBin=void 0,this.binPage=0,this.detailsPage=0),this.config=i,this.refresh(),this.requestUpdate()}static getConfigElement(){return Me("waste-pickup-planner-card-editor")}static getStubConfig(e){let i=le(e,{type:""});return{type:"custom:waste-pickup-planner-card",entity:i.find(n=>n.startsWith("sensor."))??i[0]??"sensor.waste_schedule",layout:"compact"}}getCardSize(){return this.config?.layout==="overview"?8:this.config?.layout==="schedule"?Math.min(this.config.max_groups+1,8):this.config?.layout==="hero"?5:3}getGridOptions(){return{columns:this.config?.layout==="compact"?6:12,min_columns:6,rows:"auto"}}connectedCallback(){super.connectedCallback(),document.addEventListener("visibilitychange",this.visible),this.timer=setInterval(()=>this.refresh(),6e4),this.refresh()}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.timer),document.removeEventListener("visibilitychange",this.visible),this.controller.cancel(),this.detailsOpen=!1}refresh(){!this.isConnected||!this.ha||!this.config||(this.day=B(new Date,this.ha.config.time_zone),this.snapshot?.rangeStart!==this.day&&(this.snapshot=void 0),this.controller.update(this.ha,this.config,e=>{(e.status!=="loading"||!this.snapshot)&&(this.snapshot=e)}))}locale(){return this.config?.locale||this.ha?.locale?.language||this.ha?.language||"en"}async activate(){let e=this.config;if(!e)return;let i=e.tap_action?.action??"details";i!=="none"&&(i==="more-info"?this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:f(e)[0]},bubbles:!0,composed:!0})):i==="navigate"?(history.pushState(null,"",e.tap_action.navigation_path),window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1}}))):(this.detailsPage=0,this.detailsOpen=!0,await this.updateComplete,this.isConnected&&this.detailsOpen&&this.renderRoot.querySelector("dialog")?.showModal()))}manageBins(){history.pushState(null,"","/config/integrations/integration/waste_collection_schedule"),window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1}}))}sourceDetails(e){this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0}))}async changeDetailsPage(e){this.detailsPage=e,await this.updateComplete,this.renderRoot.querySelector("dialog")?.scrollTo(0,0)}render(){if(!this.config)return p;let e=this.locale(),i=M(e),n=this.snapshot,s=Ie(n?.events??[]),r=s[0],a=n?.rangeStart??this.day??"2000-01-01",c=this.config.layout==="overview"&&n?.events.some(y=>v(y)===this.selectedBin)?this.selectedBin:void 0,d=c?n.events.filter(y=>v(y)===c):n?.events??[],u=this.config.show_source??f(this.config).length>1,l=this.config.title??i.title,g=n?.status??"loading",m=g==="empty"?i.empty:g==="stale"?i.partialEmpty:g==="unavailable"?i.unavailable:i.loading,_=r?r.events.length>2?`${new Intl.NumberFormat(e).format(r.events.length)} ${i.collections}`:r.events.map(y=>y.label).join(" \xB7 "):m,b=r?I(r.date,a,e):m,$=g==="stale"?h`<p class="notice" role="status">${i.stale}</p>`:p,w=100,k=Math.max(1,Math.ceil(d.length/w)),x=Math.min(this.detailsPage,k-1),T=this.detailsOpen?h`<dialog aria-label=${i.schedule} @close=${()=>{this.detailsOpen=!1}}>
      <div class="heading">
        <h2>${l}</h2>
        <button
          class="close"
          aria-label=${i.close}
          @click=${()=>this.renderRoot.querySelector("dialog")?.close()}
        >
          ✕
        </button>
      </div>
      ${d.length?W(Ie(d.slice(x*w,(x+1)*w)),a,e,w):h`<p class="state">${m}</p>`}${$}${n?.messages.map(y=>h`<p class="state">${Oe(y,e)}</p>`)}
      ${k>1?h`<nav class="pages" aria-label=${i.schedule}>
        <button ?disabled=${x===0} @click=${()=>this.changeDetailsPage(x-1)}>${i.previousPage}</button>
        <span aria-live="polite">${new Intl.NumberFormat(e).format(x+1)} / ${new Intl.NumberFormat(e).format(k)}</span>
        <button ?disabled=${x+1===k} @click=${()=>this.changeDetailsPage(x+1)}>${i.nextPage}</button>
      </nav>`:p}
    </dialog>`:p;if(this.badge){let y=r?r.events.slice(0,6).map(wt=>wt.label).join(" \xB7 ")+(r.events.length>6?` \xB7 +${new Intl.NumberFormat(e).format(r.events.length-6)} ${i.more}`:""):m,De=`${l}: ${b}. ${y}${g==="stale"?`. ${i.stale}`:""}`,Ue=h`<ha-icon aria-hidden="true"
        .icon=${g==="stale"||g==="unavailable"?"mdi:alert-circle-outline":"mdi:trash-can-outline"}></ha-icon>
        <span class="badge-copy"><strong>${r?b:l}</strong>
        <small>${g==="stale"?`${i.staleBadge} \xB7 `:""}${_}</small></span>`;return this.config.tap_action?.action==="none"?h`<div class="badge" role="img" aria-label=${De} title=${y}>${Ue}</div>`:h`<button class="badge" aria-label=${De} title=${y} @click=${this.activate}>${Ue}</button>${T}`}return h`<ha-card data-appearance=${this.config.appearance??"native"} data-density=${this.config.density??"comfortable"}
        ><section class=${`surface ${this.config.layout}`}>
          <div class="heading">
            <h2>${l}</h2>
            <ha-icon aria-hidden="true" icon="mdi:calendar-outline"></ha-icon>
          </div>
          ${r?this.config.layout==="overview"?ft({events:n.events,groups:s,today:a,locale:e,artwork:this.config.show_artwork??!0,showSource:u,hass:this.ha,maxGroups:this.config.max_groups,selected:c,page:this.binPage,select:y=>{this.selectedBin=y,this.detailsPage=0},changePage:y=>{this.binPage=y}}):this.config.layout==="schedule"?W(s.slice(0,this.config.max_groups),a,e):h`<div class="primary">
                      <div class="copy">
                        <div class="eyebrow">${i.next}</div>
                        <span class="date">${b}</span>${Q(r.events,e)}
                        <p class="full-date">
                          ${new Intl.DateTimeFormat(e,{dateStyle:"long",timeZone:"UTC"}).format(new Date(`${r.date}T12:00:00Z`))}
                        </p>
                      </div>
                      ${this.config.layout==="hero"&&this.config.show_artwork?X(r.events):p}
                    </div>
                    ${this.config.layout==="hero"&&s.length>1?h`<div class="upcoming">${W(s.slice(1,this.config.max_groups),a,e)}</div>`:p}`:h`<p class="state" role="status">${m}</p>`}
          ${$}${g==="unavailable"?n?.messages.map(y=>h`<p class="state">${Oe(y,e)}</p>`):p}
          ${this.config.show_updated&&n?.fetchedAt?h`<p class="updated">${i.updated}: ${nt(n.fetchedAt,e,n.timeZone)}</p>`:p}
          ${this.config.layout==="overview"?h`<div class=${`source-status ${g}`} role="status">
            <ha-icon aria-hidden="true" .icon=${g==="ready"?"mdi:check-circle-outline":g==="stale"||g==="unavailable"?"mdi:alert-circle-outline":"mdi:calendar-outline"}></ha-icon>
            <span>${g==="ready"?i.ready:g==="stale"?i.staleBadge:m}</span>
          </div><div class="source-links" aria-label=${i.sources}>${f(this.config).map(y=>h`<button @click=${()=>this.sourceDetails(y)}>${he(this.ha,y)} <span aria-hidden="true">↗</span></button>`)}</div>`:p}
        </section>
        ${this.config.tap_action?.action==="none"?p:h`<button class="action" @click=${this.activate}>${this.config.tap_action?.action==="more-info"?l:i.details} <span aria-hidden="true">↗</span></button>`}
        ${this.config.show_manage_bins?h`<button class="action" @click=${this.manageBins}>${i.manageBins} <span aria-hidden="true">⚙</span></button>`:p}</ha-card
      >${T}`}};D.styles=mt,D.properties={snapshot:{state:!0},detailsOpen:{state:!0},detailsPage:{state:!0},selectedBin:{state:!0},binPage:{state:!0}};var ue=class extends D{constructor(){super(...arguments);this.badge=!0}static getConfigElement(){return Me("waste-pickup-planner-badge-editor")}static getStubConfig(e){return{...super.getStubConfig(e),type:"custom:waste-pickup-planner-badge"}}};var Ut={source:"Source and layout",appearanceSection:"Appearance",binsSection:"Bins",entities:"Waste sensors or calendars",title:"Title",layout:"Layout",appearance:"Appearance",density:"Density",days_to_show:"Days to show",max_groups:"Visible date groups",show_artwork:"Show bin artwork",show_updated:"Show provider update time",show_manage_bins:"Show Manage bins shortcut",show_source:"Show source names",locale:"Language override (optional)",compact:"Compact",hero:"Hero",schedule:"Schedule",overview:"Overview",native:"Native Home Assistant",modern:"Modern",minimal:"Minimal",comfortable:"Comfortable",sourceHelp:"Select one authoritative source per address. For Waste Collection Schedule, choose the combined sensor with Generic details (All attributes in visual bin controls). Calendars also work.",unsupported:"No structured schedule is exposed. Open the sensor settings and choose Generic / All attributes.",binsHelp:"Integration colors apply until you choose an override. Shared bin definitions stay in Waste Collection Schedule.",rangeHelp:"Calendar bin choices come from events in the selected date range. Bins without records can be added in Advanced.",noBins:"No bins found in the supplied schedule.",calendarLoading:"Loading calendar bins\u2026",calendarFailed:"Some calendar bins could not be loaded. Check the source entity or try again.",customize:"Edit bin",displayName:"Display name",localColor:"Local bin color",inheritedColor:"Inherited card color",integrationColor:"Integration color",localColorStatus:"Local color",varyingColors:"Integration colors vary by bin.",neutralColor:"No integration color is available; artwork stays neutral.",resetInherited:"Use inherited card color",resetIntegration:"Use integration color",hide:"Hide this collection",hidden:"Hidden",local:"Customized",integration:"Integration",done:"Done",remove:"Reset this override",matching:"Advanced matching and icon",type:"Category ID or exact calendar name",binSource:"Source entity (optional)",label:"Exact bin name (optional)",icon:"Icon (mdi:\u2026)",color:"Local color (#RRGGBB)",advanced:"Advanced settings",advancedOverride:"Add a category or missing bin override",overrideHelp:"Use the exact type ID, or the complete collection name for older sensors and calendars.",addOverride:"Add collection override",tap:"Tap action",details:"View schedule","more-info":"Entity details",overrideLimit:"This card supports up to 100 overrides. Reset an unused override before adding another.",navigate:"Open dashboard",none:"No action",navigationPath:"Dashboard path",retry:"Retry"},Nt={source:"\u0179r\xF3d\u0142o i uk\u0142ad",appearanceSection:"Wygl\u0105d",binsSection:"Pojemniki",entities:"Sensory odpad\xF3w lub kalendarze",title:"Tytu\u0142",layout:"Uk\u0142ad",appearance:"Wygl\u0105d",density:"Odst\u0119py",days_to_show:"Liczba dni",max_groups:"Widoczne grupy termin\xF3w",show_artwork:"Poka\u017C ilustracje pojemnik\xF3w",show_updated:"Poka\u017C czas aktualizacji \u017Ar\xF3d\u0142a",show_manage_bins:"Poka\u017C skr\xF3t Zarz\u0105dzaj pojemnikami",show_source:"Poka\u017C nazwy \u017Ar\xF3de\u0142",locale:"J\u0119zyk (opcjonalnie)",compact:"Kompaktowy",hero:"Wyr\xF3\u017Cniony",schedule:"Harmonogram",overview:"Przegl\u0105d",native:"Natywny Home Assistant",modern:"Nowoczesny",minimal:"Minimalistyczny",comfortable:"Wygodne",sourceHelp:"Wybierz jedno g\u0142\xF3wne \u017Ar\xF3d\u0142o dla ka\u017Cdego adresu. W Waste Collection Schedule wybierz sensor zbiorczy ze szczeg\xF3\u0142ami Generic (Wszystkie atrybuty w ustawieniach wizualnych). Mo\u017Cesz te\u017C u\u017Cy\u0107 kalendarza.",unsupported:"Sensor nie udost\u0119pnia danych harmonogramu. Otw\xF3rz jego ustawienia i wybierz Generic / Wszystkie atrybuty.",binsHelp:"Kolory integracji obowi\u0105zuj\u0105 do wybrania w\u0142asnych. Wsp\xF3lne definicje pojemnik\xF3w pozostaj\u0105 w Waste Collection Schedule.",rangeHelp:"Pojemniki kalendarza pochodz\u0105 z wydarze\u0144 w wybranym zakresie dat. Pojemniki bez termin\xF3w mo\u017Cna doda\u0107 w ustawieniach zaawansowanych.",noBins:"Brak pojemnik\xF3w w udost\u0119pnionym harmonogramie.",calendarLoading:"\u0141adowanie pojemnik\xF3w kalendarza\u2026",calendarFailed:"Nie uda\u0142o si\u0119 wczyta\u0107 niekt\xF3rych pojemnik\xF3w kalendarza. Sprawd\u017A encj\u0119 \u017Ar\xF3d\u0142ow\u0105 lub spr\xF3buj ponownie.",customize:"Edytuj pojemnik",displayName:"Wy\u015Bwietlana nazwa",localColor:"W\u0142asny kolor pojemnika",inheritedColor:"Odziedziczony kolor karty",integrationColor:"Kolor integracji",localColorStatus:"W\u0142asny kolor",varyingColors:"Kolory integracji r\xF3\u017Cni\u0105 si\u0119 mi\u0119dzy pojemnikami.",neutralColor:"Brak koloru integracji; ilustracje pozostaj\u0105 neutralne.",resetInherited:"U\u017Cyj odziedziczonego koloru karty",resetIntegration:"U\u017Cyj koloru integracji",hide:"Ukryj ten odbi\xF3r",hidden:"Ukryty",local:"Dostosowany",integration:"Integracja",done:"Gotowe",remove:"Przywr\xF3\u0107 ustawienia tego wpisu",matching:"Zaawansowane dopasowanie i ikona",type:"ID kategorii lub dok\u0142adna nazwa kalendarza",binSource:"Encja \u017Ar\xF3d\u0142owa (opcjonalnie)",label:"Dok\u0142adna nazwa pojemnika (opcjonalnie)",icon:"Ikona (mdi:\u2026)",color:"W\u0142asny kolor (#RRGGBB)",advanced:"Ustawienia zaawansowane",advancedOverride:"Dodaj wpis dla kategorii lub brakuj\u0105cego pojemnika",overrideHelp:"U\u017Cyj dok\u0142adnego ID kategorii lub pe\u0142nej nazwy odbioru ze starszych sensor\xF3w i kalendarzy.",addOverride:"Dodaj wpis odbioru",tap:"Akcja po dotkni\u0119ciu",details:"Zobacz harmonogram","more-info":"Szczeg\xF3\u0142y encji",overrideLimit:"Karta obs\u0142uguje do 100 w\u0142asnych wpis\xF3w. Usu\u0144 nieu\u017Cywany wpis przed dodaniem kolejnego.",navigate:"Otw\xF3rz pulpit",none:"Brak akcji",navigationPath:"\u015Acie\u017Cka pulpitu",retry:"Spr\xF3buj ponownie"},yt=o=>o.toLowerCase().startsWith("pl")?Nt:Ut;var vt=Z`
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
`;var U=class extends C{constructor(){super(...arguments);this.controller=new R}set hass(e){let i=this.ha;this.ha=e,(!i||i.connection!==e.connection||i.config.time_zone!==e.config.time_zone)&&(this.controller.reset(),this.calendarSnapshot=void 0),(!i||i.connection!==e.connection||i.config.time_zone!==e.config.time_zone||f(this.config??{type:""}).some(n=>i.states[n]!==e.states[n]))&&this.refreshBins(),this.requestUpdate()}get hass(){return this.ha}setConfig(e){let i=this.config;this.config={...e},(!i||JSON.stringify(f(i))!==JSON.stringify(f(e))||i.days_to_show!==e.days_to_show)&&(this.controller.reset(),this.calendarSnapshot=void 0,this.editing=void 0,this.refreshBins()),this.editing!==void 0&&!this.config.overrides?.[this.editing]&&(this.editing=void 0)}connectedCallback(){super.connectedCallback(),this.timer=setInterval(()=>this.refreshBins(),6e4),this.refreshBins()}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.timer),this.controller.cancel()}refreshBins(){if(!(!this.isConnected||!this.ha||!this.config))try{let e=ne({...this.config,overrides:[]});if(!f(e).some(i=>i.startsWith("calendar.")))return;this.controller.update(this.ha,e,i=>{(i.status!=="loading"||!this.calendarSnapshot)&&(this.calendarSnapshot=i)})}catch{}}changed(e){this.setConfig({...this.config,...e}),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this.config},bubbles:!0,composed:!0}))}override(e,i){let n=[...this.config?.overrides??[]];n[e]={...n[e],...i},this.changed({overrides:n})}form(e,i){let n=this.config.type.includes("badge"),s=(c,d)=>({name:c,selector:{select:{options:d.map(u=>({value:u,label:i[u]})),mode:"dropdown"}}}),r=[{name:"entities",required:!0,selector:{entity:{domain:["sensor","calendar"],multiple:!0,include_entities:le(this.ha,this.config)}}},{name:"title",selector:{text:{}}},s("layout",["compact","hero","schedule","overview"]),s("appearance",["native","modern","minimal"]),s("density",["comfortable","compact"]),{name:"days_to_show",selector:{number:{min:1,max:366,mode:"box"}}},{name:"max_groups",selector:{number:{min:1,max:50,mode:"box"}}},...["show_artwork","show_updated","show_manage_bins","show_source"].map(c=>({name:c,selector:{boolean:{}}})),{name:"locale",selector:{text:{}}}].filter(c=>e.includes(c.name)&&(!n||!["layout","max_groups","show_artwork","show_manage_bins","appearance","density","show_source"].includes(c.name)));if(!r.length)return p;let a={...this.config,entities:f(this.config),layout:this.config.layout??"compact",appearance:this.config.appearance??"native",density:this.config.density??"comfortable",show_artwork:this.config.show_artwork??this.config.layout==="overview",show_source:this.config.show_source??f(this.config).length>1};return h`<ha-form .hass=${this.ha} .data=${a} .schema=${r}
      .computeLabel=${c=>i[c.name]}
      @value-changed=${c=>{let d=Object.fromEntries(r.map(u=>[u.name,c.detail.value[u.name]]));e.includes("entities")&&(d.entity=void 0),this.changed(d)}}></ha-form>`}editPanel(e,i){let n=this.editing;if(n===void 0||!this.config.overrides?.[n])return p;let s=this.config.overrides[n],r=ct(s,this.config.overrides),a=i.filter(l=>je(l,s)),c=new Set(a.map(l=>l.color)),d=c.size===1?a[0]?.color:void 0,u=r?.color?`${e.inheritedColor}: ${r.color}`:c.size>1?e.varyingColors:d?`${e.integrationColor}: ${d}`:e.neutralColor;return h`<fieldset><legend>${s.label??s.type}${s.source?h` · ${this.ha.states[s.source]?.attributes.friendly_name??s.source}`:p}</legend>
      <label>${e.displayName}<input .value=${s.name??""} placeholder=${r?.name??s.label??s.type}
        @input=${l=>this.override(n,{name:l.target.value||void 0})} /></label>
      <label>${e.localColor}<input type="color" .value=${s.color??r?.color??d??"#808080"}
        @input=${l=>this.override(n,{color:l.target.value})} /></label>
      <p>${s.color?`${e.localColorStatus}: ${s.color}`:u}</p>
      ${s.color?h`<button @click=${()=>this.override(n,{color:void 0})}>${r?.color?e.resetInherited:e.resetIntegration}</button>`:p}
      <label class="check"><input type="checkbox" .checked=${s.hidden??r?.hidden??!1}
        @change=${l=>this.override(n,{hidden:l.target.checked})} />${e.hide}</label>
      <details><summary>${e.matching}</summary>
        ${["type","source","label","icon","color"].map(l=>h`<label>${l==="source"?e.binSource:e[l]}<input .value=${s[l]??""}
          @change=${g=>this.override(n,{[l]:g.target.value||void 0})} /></label>`)}
      </details>
      <div class="buttons"><button @click=${()=>{this.editing=void 0}}>${e.done}</button>
        <button @click=${()=>{this.editing=void 0,this.changed({overrides:this.config.overrides.filter((l,g)=>g!==n)})}}>${e.remove}</button></div>
    </fieldset>`}render(){if(!this.config||!this.ha)return p;let e=yt(this.config.locale||this.ha.locale?.language||this.ha.language||"en"),i=lt(this.ha,this.config,this.calendarSnapshot?.events),n=this.config.overrides??[],s=f(this.config).filter(a=>a.startsWith("sensor.")&&this.ha.states[a]&&!O(this.ha.states[a]).supported),r=n.map((a,c)=>({o:a,index:c})).filter(({o:a})=>!i.some(c=>a.type===(c.typeId??c.label)&&a.source===c.sourceId&&a.label===c.label));return h`<h3>${e.source}</h3>${this.form(["entities","title","layout"],e)}<p>${e.sourceHelp}</p>
      ${s.length?h`<p class="warning" role="status">${s.join(", ")}: ${e.unsupported}</p>`:p}
      ${this.config.type.includes("badge")?p:h`<h3>${e.appearanceSection}</h3>${this.form(["appearance","density","show_artwork","show_source","show_manage_bins"],e)}`}
      <h3>${e.binsSection}</h3><p>${e.binsHelp}</p>
      ${n.length>=100?h`<p role="status">${e.overrideLimit}</p>`:p}
      <div class="bin-list">${i.map(a=>{let c=n.findIndex(u=>u.type===(a.typeId??a.label)&&u.source===a.sourceId&&u.label===a.label),d=ce(a,n);return h`<button class="bin-row" aria-label=${`${e.customize}: ${a.label}`} aria-pressed=${c>=0&&this.editing===c} ?disabled=${c<0&&n.length>=100}
          @click=${()=>{c>=0?this.editing=c:(this.changed({overrides:[...n,{type:a.typeId??a.label,source:a.sourceId,label:a.label}]}),this.editing=n.length)}}><span class="swatch" aria-hidden="true" style=${z({"--waste-type-color":d?.color??a.color})}></span>
          <span class="bin-copy"><strong>${d?.name??a.label}</strong><small>${this.ha.states[a.sourceId]?.attributes.friendly_name??a.sourceId} · ${d?.hidden?e.hidden:d?.color||d?.name||d?.icon?e.local:e.integration}</small></span><span aria-hidden="true">✎</span></button>
          ${c>=0&&this.editing===c?this.editPanel(e,i):p}`})}${r.map(({o:a,index:c})=>h`<button class="bin-row" aria-pressed=${this.editing===c} @click=${()=>{this.editing=c}}>
        <span class="bin-copy"><strong>${a.name??a.label??a.type}</strong><small>${a.source?this.ha.states[a.source]?.attributes.friendly_name??a.source:e.matching}</small></span><span aria-hidden="true">✎</span></button>
        ${this.editing===c?this.editPanel(e,i):p}`)}</div>
      ${i.length?p:h`<p>${e.noBins}</p>`}
      ${f(this.config).some(a=>a.startsWith("calendar."))?h`<p>${e.rangeHelp}</p>
        ${!this.calendarSnapshot||this.calendarSnapshot.status==="loading"?h`<p role="status">${e.calendarLoading}</p>`:this.calendarSnapshot.messages.some(a=>a.source.startsWith("calendar."))?h`<p class="warning" role="status">${e.calendarFailed} <button @click=${this.refreshBins}>${e.retry}</button></p>`:p}`:p}
      <details><summary>${e.advanced}</summary>${this.form(["days_to_show","max_groups","show_updated","locale"],e)}
        <label>${e.tap}<select .value=${this.config.tap_action?.action??"details"} @change=${a=>this.changed({tap_action:{action:a.target.value}})}>
          ${["details","more-info","navigate","none"].map(a=>h`<option value=${a}>${e[a]}</option>`)}</select></label>
        ${this.config.tap_action?.action==="navigate"?h`<label>${e.navigationPath}<input .value=${this.config.tap_action.navigation_path??""} placeholder="/lovelace/waste"
          @change=${a=>this.changed({tap_action:{action:"navigate",navigation_path:a.target.value}})} /></label>`:p}
        <details><summary>${e.advancedOverride}</summary><p>${e.overrideHelp}</p><button ?disabled=${n.length>=100} @click=${()=>{this.changed({overrides:[...n,{type:"collection_name"}]}),this.editing=n.length}}>${e.addOverride}</button></details>
      </details>`}};U.properties={config:{state:!0},editing:{state:!0},calendarSnapshot:{state:!0}},U.styles=vt;var ge=class extends U{};customElements.define("waste-pickup-planner-card",D);customElements.define("waste-pickup-planner-badge",ue);customElements.define("waste-pickup-planner-card-editor",U);customElements.define("waste-pickup-planner-badge-editor",ge);var bt=window;(bt.customCards??=[]).push({type:"waste-pickup-planner-card",name:"Waste Pickup Planner",description:"Date-grouped waste collections with compact, hero and schedule layouts.",preview:!0});(bt.customBadges??=[]).push({type:"waste-pickup-planner-badge",name:"Waste Pickup Planner Badge",description:"The next collection date and types, with schedule details."});
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
