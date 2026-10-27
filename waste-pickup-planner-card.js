var de=globalThis,pe=de.ShadowRoot&&(de.ShadyCSS===void 0||de.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ee=Symbol(),tt=new WeakMap,V=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==Ee)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(pe&&t===void 0){let n=e!==void 0&&e.length===1;n&&(t=tt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&tt.set(e,t))}return t}toString(){return this.cssText}},ot=o=>new V(typeof o=="string"?o:o+"",void 0,Ee),Y=(o,...t)=>{let e=o.length===1?o[0]:t.reduce((n,i,r)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[r+1],o[0]);return new V(e,o,Ee)},nt=(o,t)=>{if(pe)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let n=document.createElement("style"),i=de.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=e.cssText,o.appendChild(n)}},Se=pe?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(let n of t.cssRules)e+=n.cssText;return ot(e)})(o):o;var{is:Gt,defineProperty:qt,getOwnPropertyDescriptor:Kt,getOwnPropertyNames:Jt,getOwnPropertySymbols:Vt,getPrototypeOf:Yt}=Object,he=globalThis,it=he.trustedTypes,Qt=it?it.emptyScript:"",Xt=he.reactiveElementPolyfillSupport,Q=(o,t)=>o,Ae={toAttribute(o,t){switch(t){case Boolean:o=o?Qt:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},st=(o,t)=>!Gt(o,t),rt={attribute:!0,type:String,converter:Ae,reflect:!1,useDefault:!1,hasChanged:st};Symbol.metadata??=Symbol("metadata"),he.litPropertyMetadata??=new WeakMap;var C=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=rt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let n=Symbol(),i=this.getPropertyDescriptor(t,n,e);i!==void 0&&qt(this.prototype,t,i)}}static getPropertyDescriptor(t,e,n){let{get:i,set:r}=Kt(this.prototype,t)??{get(){return this[e]},set(s){this[e]=s}};return{get:i,set(s){let a=i?.call(this);r?.call(this,s),this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??rt}static _$Ei(){if(this.hasOwnProperty(Q("elementProperties")))return;let t=Yt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Q("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Q("properties"))){let e=this.properties,n=[...Jt(e),...Vt(e)];for(let i of n)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[n,i]of e)this.elementProperties.set(n,i)}this._$Eh=new Map;for(let[e,n]of this.elementProperties){let i=this._$Eu(e,n);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let n=new Set(t.flat(1/0).reverse());for(let i of n)e.unshift(Se(i))}else t!==void 0&&e.push(Se(t));return e}static _$Eu(t,e){let n=e.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let n of e.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return nt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$ET(t,e){let n=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,n);if(i!==void 0&&n.reflect===!0){let r=(n.converter?.toAttribute!==void 0?n.converter:Ae).toAttribute(e,n.type);this._$Em=t,r==null?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){let n=this.constructor,i=n._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let r=n.getPropertyOptions(i),s=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:Ae;this._$Em=i;let a=s.fromAttribute(e,r.type);this[i]=a??this._$Ej?.get(i)??a,this._$Em=null}}requestUpdate(t,e,n,i=!1,r){if(t!==void 0){let s=this.constructor;if(i===!1&&(r=this[t]),n??=s.getPropertyOptions(t),!((n.hasChanged??st)(r,e)||n.useDefault&&n.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,n))))return;this.C(t,e,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:n,reflect:i,wrapped:r},s){n&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??e??this[t]),r!==!0||s!==void 0)||(this._$AL.has(t)||(this.hasUpdated||n||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,r]of this._$Ep)this[i]=r;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[i,r]of n){let{wrapped:s}=r,a=this[i];s!==!0||this._$AL.has(i)||a===void 0||this.C(i,void 0,r,a)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(e)):this._$EM()}catch(n){throw t=!1,this._$EM(),n}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};C.elementStyles=[],C.shadowRootOptions={mode:"open"},C[Q("elementProperties")]=new Map,C[Q("finalized")]=new Map,Xt?.({ReactiveElement:C}),(he.reactiveElementVersions??=[]).push("2.1.2");var je=globalThis,at=o=>o,ue=je.trustedTypes,ct=ue?ue.createPolicy("lit-html",{createHTML:o=>o}):void 0,mt="$lit$",z=`lit$${Math.random().toFixed(9).slice(2)}$`,gt="?"+z,eo=`<${gt}>`,H=document,ee=()=>H.createComment(""),te=o=>o===null||typeof o!="object"&&typeof o!="function",He=Array.isArray,to=o=>He(o)||typeof o?.[Symbol.iterator]=="function",ze=`[ 	
\f\r]`,X=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,lt=/-->/g,dt=/>/g,O=RegExp(`>|${ze}(?:([^\\s"'>=/]+)(${ze}*=${ze}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),pt=/'/g,ht=/"/g,ft=/^(?:script|style|textarea|title)$/i,Ne=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),d=Ne(1),vo=Ne(2),wo=Ne(3),E=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),ut=new WeakMap,j=H.createTreeWalker(H,129);function yt(o,t){if(!He(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return ct!==void 0?ct.createHTML(t):t}var oo=(o,t)=>{let e=o.length-1,n=[],i,r=t===2?"<svg>":t===3?"<math>":"",s=X;for(let a=0;a<e;a++){let l=o[a],u,h,c=-1,g=0;for(;g<l.length&&(s.lastIndex=g,h=s.exec(l),h!==null);)g=s.lastIndex,s===X?h[1]==="!--"?s=lt:h[1]!==void 0?s=dt:h[2]!==void 0?(ft.test(h[2])&&(i=RegExp("</"+h[2],"g")),s=O):h[3]!==void 0&&(s=O):s===O?h[0]===">"?(s=i??X,c=-1):h[1]===void 0?c=-2:(c=s.lastIndex-h[2].length,u=h[1],s=h[3]===void 0?O:h[3]==='"'?ht:pt):s===ht||s===pt?s=O:s===lt||s===dt?s=X:(s=O,i=void 0);let m=s===O&&o[a+1].startsWith("/>")?" ":"";r+=s===X?l+eo:c>=0?(n.push(u),l.slice(0,c)+mt+l.slice(c)+z+m):l+z+(c===-2?a:m)}return[yt(o,r+(o[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]},oe=class o{constructor({strings:t,_$litType$:e},n){let i;this.parts=[];let r=0,s=0,a=t.length-1,l=this.parts,[u,h]=oo(t,e);if(this.el=o.createElement(u,n),j.currentNode=this.el.content,e===2||e===3){let c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(i=j.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(let c of i.getAttributeNames())if(c.endsWith(mt)){let g=h[s++],m=i.getAttribute(c).split(z),f=/([.?@])?(.*)/.exec(g);l.push({type:1,index:r,name:f[2],strings:m,ctor:f[1]==="."?Ie:f[1]==="?"?Pe:f[1]==="@"?De:R}),i.removeAttribute(c)}else c.startsWith(z)&&(l.push({type:6,index:r}),i.removeAttribute(c));if(ft.test(i.tagName)){let c=i.textContent.split(z),g=c.length-1;if(g>0){i.textContent=ue?ue.emptyScript:"";for(let m=0;m<g;m++)i.append(c[m],ee()),j.nextNode(),l.push({type:2,index:++r});i.append(c[g],ee())}}}else if(i.nodeType===8)if(i.data===gt)l.push({type:2,index:r});else{let c=-1;for(;(c=i.data.indexOf(z,c+1))!==-1;)l.push({type:7,index:r}),c+=z.length-1}r++}}static createElement(t,e){let n=H.createElement("template");return n.innerHTML=t,n}};function B(o,t,e=o,n){if(t===E)return t;let i=n!==void 0?e._$Co?.[n]:e._$Cl,r=te(t)?void 0:t._$litDirective$;return i?.constructor!==r&&(i?._$AO?.(!1),r===void 0?i=void 0:(i=new r(o),i._$AT(o,e,n)),n!==void 0?(e._$Co??=[])[n]=i:e._$Cl=i),i!==void 0&&(t=B(o,i._$AS(o,t.values),i,n)),t}var Te=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:n}=this._$AD,i=(t?.creationScope??H).importNode(e,!0);j.currentNode=i;let r=j.nextNode(),s=0,a=0,l=n[0];for(;l!==void 0;){if(s===l.index){let u;l.type===2?u=new ne(r,r.nextSibling,this,t):l.type===1?u=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(u=new Oe(r,this,t)),this._$AV.push(u),l=n[++a]}s!==l?.index&&(r=j.nextNode(),s++)}return j.currentNode=H,i}p(t){let e=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}},ne=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,n,i){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=B(this,t,e),te(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==E&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):to(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==p&&te(this._$AH)?this._$AA.nextSibling.data=t:this.T(H.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:n}=t,i=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=oe.createElement(yt(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===i)this._$AH.p(e);else{let r=new Te(i,this),s=r.u(this.options);r.p(e),this.T(s),this._$AH=r}}_$AC(t){let e=ut.get(t.strings);return e===void 0&&ut.set(t.strings,e=new oe(t)),e}k(t){He(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,n,i=0;for(let r of t)i===e.length?e.push(n=new o(this.O(ee()),this.O(ee()),this,this.options)):n=e[i],n._$AI(r),i++;i<e.length&&(this._$AR(n&&n._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let n=at(t).nextSibling;at(t).remove(),t=n}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},R=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,n,i,r){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=p}_$AI(t,e=this,n,i){let r=this.strings,s=!1;if(r===void 0)t=B(this,t,e,0),s=!te(t)||t!==this._$AH&&t!==E,s&&(this._$AH=t);else{let a=t,l,u;for(t=r[0],l=0;l<r.length-1;l++)u=B(this,a[n+l],e,l),u===E&&(u=this._$AH[l]),s||=!te(u)||u!==this._$AH[l],u===p?t=p:t!==p&&(t+=(u??"")+r[l+1]),this._$AH[l]=u}s&&!i&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Ie=class extends R{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}},Pe=class extends R{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==p)}},De=class extends R{constructor(t,e,n,i,r){super(t,e,n,i,r),this.type=5}_$AI(t,e=this){if((t=B(this,t,e,0)??p)===E)return;let n=this._$AH,i=t===p&&n!==p||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==p&&(n===p||i);i&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Oe=class{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){B(this,t)}};var no=je.litHtmlPolyfillSupport;no?.(oe,ne),(je.litHtmlVersions??=[]).push("3.3.3");var bt=(o,t,e)=>{let n=e?.renderBefore??t,i=n._$litPart$;if(i===void 0){let r=e?.renderBefore??null;n._$litPart$=i=new ne(t.insertBefore(ee(),r),r,void 0,e??{})}return i._$AI(o),i};var Me=globalThis,_=class extends C{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=bt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return E}};_._$litElement$=!0,_.finalized=!0,Me.litElementHydrateSupport?.({LitElement:_});var io=Me.litElementPolyfillSupport;io?.({LitElement:_});(Me.litElementVersions??=[]).push("4.2.2");var Ue=o=>typeof o=="string"&&/^#[\da-f]{6}$/i.test(o),Le=o=>typeof o=="string"&&/^mdi:[a-z0-9-]+$/.test(o);function v(o){return[...new Set(o.entities??(o.entity?[o.entity]:[]))]}function me(o){if(!o||typeof o!="object")throw new Error("Choose a waste sensor or calendar.");if(o.entities!==void 0&&(!Array.isArray(o.entities)||o.entities.some(e=>typeof e!="string")))throw new Error("entities must be an array of entity IDs.");if(o.entity&&o.entities)throw new Error("Use entity or entities, not both.");let t=v(o);if(!t.length||t.length>12||t.some(e=>!/^(sensor|calendar)\.[a-z0-9_]+$/.test(e)))throw new Error("Choose 1\u201312 sensor or calendar entities.");if(o.layout!==void 0&&!["compact","hero","schedule","overview"].includes(o.layout))throw new Error("Unknown layout.");if(o.appearance!==void 0&&!["native","modern","minimal"].includes(o.appearance))throw new Error("Unknown appearance.");if(o.density!==void 0&&!["comfortable","compact"].includes(o.density))throw new Error("Unknown density.");for(let[e,n]of[["days_to_show",366],["max_groups",50]]){let i=o[e];if(i!==void 0&&(!Number.isInteger(i)||i<1||i>n))throw new Error(`${e} must be 1\u2013${n}.`)}if(o.evening_hour!==void 0&&(!Number.isInteger(o.evening_hour)||o.evening_hour<0||o.evening_hour>23))throw new Error("evening_hour must be a whole hour, 0\u201323.");for(let e of["show_artwork","show_updated","show_manage_bins","show_source","show_strip"])if(o[e]!==void 0&&typeof o[e]!="boolean")throw new Error(`${e} must be true or false.`);if(o.title!==void 0&&typeof o.title!="string")throw new Error("title must be text.");if(o.locale!==void 0){if(typeof o.locale!="string")throw new Error("locale must be a language code.");new Intl.DateTimeFormat(o.locale)}if(o.overrides!==void 0){if(!Array.isArray(o.overrides)||o.overrides.length>100)throw new Error("overrides must contain at most 100 types.");for(let e of o.overrides)if(!e||typeof e.type!="string"||!e.type.trim()||e.source!==void 0&&(typeof e.source!="string"||!/^(sensor|calendar)\.[a-z0-9_]+$/.test(e.source))||e.label!==void 0&&(typeof e.label!="string"||!e.label.trim())||e.name!==void 0&&(typeof e.name!="string"||!e.name.trim())||e.hidden!==void 0&&typeof e.hidden!="boolean"||e.color!==void 0&&!Ue(e.color)||e.icon!==void 0&&!Le(e.icon))throw new Error("Invalid type override. Use an exact type ID or name, mdi icon, and #RRGGBB color.")}if(o.tap_action){if(!["details","more-info","navigate","none"].includes(o.tap_action.action))throw new Error("Unsupported tap action.");if(o.tap_action.action==="navigate"&&(typeof o.tap_action.navigation_path!="string"||!/^\/(?!\/)/.test(o.tap_action.navigation_path)||/[\\\u0000-\u001f]/.test(o.tap_action.navigation_path)))throw new Error("Navigation requires a local path beginning with /.")}return{...o,entities:o.entities?[...o.entities]:void 0,layout:o.layout??"compact",days_to_show:o.days_to_show??30,max_groups:o.max_groups??5}}function ge(o){if(typeof o!="string"||!/^\d{4}-\d{2}-\d{2}$/.test(o))return!1;let t=new Date(`${o}T12:00:00Z`);return Number.isFinite(t.getTime())&&t.toISOString().slice(0,10)===o}function F(o,t){let e=new Intl.DateTimeFormat("en-CA",{timeZone:t,year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(o),n=i=>e.find(r=>r.type===i).value;return`${n("year")}-${n("month")}-${n("day")}`}function vt(o,t){let e=new Intl.DateTimeFormat("en-GB",{timeZone:t,hour:"numeric",hourCycle:"h23"}).formatToParts(o).find(n=>n.type==="hour").value;return Number(e)%24}function wt(o,t,e,n=18){let i=Z(t,o);return i===0?"today":i===1&&e>=n?"tonight":"upcoming"}function fe(o,t){let e=new Date(`${o}T12:00:00Z`);return e.setUTCDate(e.getUTCDate()+t),e.toISOString().slice(0,10)}function Z(o,t){return Math.round((Date.parse(`${t}T12:00:00Z`)-Date.parse(`${o}T12:00:00Z`))/864e5)}var W=(o,t)=>o.charAt(0).toLocaleUpperCase(t)+o.slice(1);function G(o,t,e){let n=Z(t,o);return W(n<=1&&n>=0?new Intl.RelativeTimeFormat(e,{numeric:"auto"}).format(n,"day"):new Intl.DateTimeFormat(e,{weekday:"long",day:"numeric",month:"short",timeZone:"UTC"}).format(new Date(`${o}T12:00:00Z`)),e)}function ie(o,t,e){return new Intl.RelativeTimeFormat(e,{numeric:"auto"}).format(Z(t,o),"day")}function Be(o,t){return new Intl.DateTimeFormat(t,{weekday:"short",day:"numeric",month:"short",timeZone:"UTC"}).format(new Date(`${o}T12:00:00Z`))}function $t(o,t,e){let n=Z(t,o);return W(n>=0&&n<=1?Be(o,e):ie(o,t,e),e)}function xt(o,t,e){let n=Z(t,o);if(n>=0&&n<=1)return W(ie(o,t,e),e);let i=new Intl.DateTimeFormat(e,{weekday:"long",timeZone:"UTC"}).format(new Date(`${o}T12:00:00Z`));return W(`${i} \xB7 ${ie(o,t,e)}`,e)}function _t(o,t,e){let n=new Intl.DateTimeFormat(e,{weekday:"long",day:"numeric",month:"long",timeZone:"UTC"}).format(new Date(`${o}T12:00:00Z`)),i=Z(t,o);return i>=0&&i<=1?`${W(ie(o,t,e),e)} \xB7 ${n}`:`${W(n,e)} \xB7 ${ie(o,t,e)}`}function kt(o,t,e){return new Intl.DateTimeFormat(t,{dateStyle:"medium",timeStyle:"short",timeZone:e}).format(new Date(o))}var ye=o=>o!==null&&typeof o=="object"&&!Array.isArray(o)?o:void 0,We=o=>typeof o=="string"&&o.trim()?o:void 0;function Re(o,t,e){let n=o.date??e,i=We(o.type);if(!(!ge(n)||!i))return{sourceId:t,entityId:t,date:n,label:i,typeId:We(o.type_id),icon:Le(o.icon)?o.icon:void 0,color:Ue(o.color)?o.color:void 0,colorSource:["source","customize","default"].includes(String(o.color_source))?o.color_source:void 0}}function N(o){let t=o.attributes,e="upcoming"in t?t.upcoming:"upcoming_pickups"in t?t.upcoming_pickups:"next_pickup"in t?t.next_pickup===null?[]:[t.next_pickup]:void 0;if(!Array.isArray(e))return{events:[],supported:!1,invalid:e!==void 0};let n=[],i=e.length>2e3;for(let s of e.slice(0,2e3)){if(n.length>=2e3){i=!0;break}let a=ye(s);if(!a||!ge(a.date)){i=!0;continue}if(Array.isArray(a.collections)){a.collections.length>100&&(i=!0);for(let l of a.collections.slice(0,100)){let u=ye(l),h=u&&Re(u,o.entity_id,a.date);h?n.push(h):i=!0}}else if(Array.isArray(a.types)){a.types.length>100&&(i=!0);for(let l of a.types.slice(0,100)){let u=Re({...a,type:l,color:void 0,color_source:void 0,type_id:void 0},o.entity_id);u?n.push(u):i=!0}}else{let l=Re(a,o.entity_id);l?n.push(l):i=!0}}let r=typeof t.last_update=="string"&&/^\d{4}-\d{2}-\d{2}T/.test(t.last_update)&&/(?:Z|[+-]\d{2}:\d{2})$/.test(t.last_update)&&Number.isFinite(Date.parse(t.last_update))?t.last_update:void 0;return{events:n.slice(0,2e3),supported:!0,invalid:i||n.length>2e3,fetchedAt:r}}function Ct(o,t,e){if(!Array.isArray(o)||o.length>1e4)throw new Error("Invalid calendar response.");return o.flatMap(n=>{let i=ye(n),r=ye(i?.start),s=We(i?.summary);if(!r||!s)return[];let a;return ge(r.date)?a=r.date:typeof r.dateTime=="string"&&/(?:Z|[+-]\d{2}:\d{2})$/.test(r.dateTime)&&Number.isFinite(Date.parse(r.dateTime))&&(a=F(new Date(r.dateTime),e)),a?[{sourceId:t,entityId:t,date:a,label:s}]:[]})}var Et=new WeakMap;function Fe(o,t,e,n){let i=Et.get(o.connection);i||(i=new Map,Et.set(o.connection,i));let r=JSON.stringify([t,e,n]),s=o.states[t]?.last_updated,a=i.get(r);if(a?.pending){if(a.stamp===s)return a.promise;let c=()=>Fe(o,t,e,n);return a.promise.then(c,c)}if(a&&a.stamp===s&&a.expires>Date.now())return a.promise;for(let[c,g]of i)!g.pending&&g.expires<=Date.now()&&i.delete(c);if(!i.has(r)&&i.size>=100){let c=[...i].find(([,g])=>!g.pending);if(c)i.delete(c[0]);else return Promise.reject(new Error("Too many calendar requests are pending."))}let l=new URLSearchParams({start:`${e}T00:00:00+14:00`,end:`${n}T00:00:00-12:00`}),u=o.callApi("GET",`calendars/${encodeURIComponent(t)}?${l}`),h={promise:u,expires:1/0,pending:!0,stamp:s};return i.set(r,h),u.then(()=>{h.pending=!1,h.expires=Date.now()+6e4},()=>{i.get(r)===h&&i.delete(r)}),u}function k(o,t,e=[t]){let n=r=>{let s=o?.states[r]?.attributes.friendly_name;return typeof s=="string"&&s.trim()?s.trim():r},i=n(t);return e.some(r=>r!==t&&n(r)===i)?`${i} \xB7 ${t}`:i}function St(o){let t;try{t=new Intl.Collator(o)}catch{t=new Intl.Collator("en")}return(e,n)=>t.compare(e.label,n.label)||(e.sourceId<n.sourceId?-1:e.sourceId>n.sourceId?1:0)}function re(o="en"){let t=St(o);return(e,n)=>(e.date<n.date?-1:e.date>n.date?1:0)||t(e,n)}var $=o=>JSON.stringify([o.sourceId,o.typeId??o.originalLabel??o.label,o.originalLabel??o.label]);function M(o,t){let e=t.filter(s=>s.sourceId===o.sourceId&&s.label===o.label&&$(s)!==$(o));if(!e.length)return o.label;let n=o.originalLabel??o.label,r=e.some(s=>(s.originalLabel??s.label)===n)?o.typeId??n:n;return r===o.label?o.label:`${o.label} \xB7 ${r}`}var ve=(o,t)=>t.type===(o.typeId??o.originalLabel??o.label)&&(t.source===void 0||t.source===o.sourceId)&&(t.label===void 0||t.label===(o.originalLabel??o.label)),be=o=>+(o.source!==void 0)+ +(o.label!==void 0)*2;function At(o){let t=new Map;for(let e of o)t.has(be(e))||t.set(be(e),e);return o.length?[...t.entries()].sort(([e],[n])=>e-n).reduce((e,[,n])=>({...e,...Object.fromEntries(Object.entries(n).filter(([,i])=>i!==void 0))}),{}):void 0}function se(o,t=[]){return At(t.filter(e=>ve(o,e)))}function zt(o,t=[]){return At(t.filter(e=>e.type===o.type&&be(e)<be(o)&&(e.source===void 0||e.source===o.source)&&(e.label===void 0||e.label===o.label)))}function we(o,t){return[...new Set([...v(t),...Object.values(o.states).filter(e=>e.entity_id.startsWith("calendar.")||e.entity_id.startsWith("sensor.")&&(()=>{let n=N(e);return n.supported&&!n.invalid})()).map(e=>e.entity_id)])]}function Tt(o,t,e=[]){let n=new Map;for(let r of v(t)){let s=o.states[r];if(!(!s||!r.startsWith("sensor.")))for(let a of N(s).events)n.has($(a))||n.set($(a),a)}let i=new Set(v(t));for(let r of e)r.sourceId.startsWith("calendar.")&&i.has(r.sourceId)&&!n.has($(r))&&n.set($(r),r);return[...n.values()].sort(St(t.locale||o.locale?.language||o.language||"en"))}function It(o,t="en"){let e=new Map;for(let n of o){let i=e.get($(n));(!i||n.date<i.date)&&e.set($(n),n)}return[...e.values()].sort(re(t))}function Pt(o,t,e,n){let i=new Map;for(let r of o){if(r.date<e||r.date>=n)continue;let s=se(r,t.overrides);if(s?.hidden)continue;let a=JSON.stringify([$(r),r.date,r.color,r.colorSource,r.icon]);i.has(a)||i.set(a,{...r,originalLabel:r.originalLabel??r.label,label:s?.name??r.label,color:s?.color??r.color,colorSource:s?.color?"customize":r.colorSource,icon:s?.icon??r.icon})}return[...i.values()].sort(re(t.locale))}function Ze(o){let t=new Map;for(let e of o){let n=t.get(e.date)??[];n.push(e),t.set(e.date,n)}return[...t].map(([e,n])=>({date:e,events:n}))}function q(o){return o.colorSource==="source"||o.colorSource==="customize"?o.color:void 0}var K=class{constructor(){this.generation=0;this.cache=new Map}reset(){this.generation++,this.cache.clear(),this.connection=void 0,this.timeZone=void 0}cancel(){this.generation++}async update(t,e,n){(this.connection!==t.connection||this.timeZone!==t.config.time_zone)&&(this.cache.clear(),this.connection=t.connection,this.timeZone=t.config.time_zone);let i=++this.generation,r=t.config.time_zone,s=F(new Date,r),a=fe(s,e.days_to_show),l={rangeStart:s,rangeEnd:a,timeZone:r,messages:[]};n({...l,status:"loading",events:[]});let u=0,h=0,c=0,g=[],m=[];if(await Promise.all(v(e).map(async b=>{let y="sourceLoadFailed";try{let x=t.states[b];if(!x||x.state==="unavailable"||b.startsWith("calendar.")&&x.state==="unknown")throw y="sourceUnavailable",new Error(y);let P,S;if(b.startsWith("calendar."))P=Ct(await Fe(t,b,s,a),b,r);else{let A=N(x);if(!A.supported)throw y="sourceUnsupported",new Error(y);if(A.invalid)throw y="sourceInvalid",new Error(y);P=A.events,S=A.fetchedAt}if(i!==this.generation)return;this.cache.set(b,{events:P,fetchedAt:S}),S&&m.push(S),g.push(...P),h++}catch{if(i!==this.generation)return;u++,l.messages.push({source:b,reason:y});let x=this.cache.get(b);x&&(c++,g.push(...x.events),x.fetchedAt&&m.push(x.fetchedAt))}})),i!==this.generation)return;let f=Pt(g,e,s,a);n({...l,events:f,status:u?c||h?"stale":"unavailable":f.length?"ready":"empty",fetchedAt:m.sort((b,y)=>Date.parse(b)-Date.parse(y))[0]})}};var Dt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ot=o=>(...t)=>({_$litDirective$:o,values:t}),$e=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,n){this._$Ct=t,this._$AM=e,this._$Ci=n}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var jt="important",ro=" !"+jt,T=Ot(class extends $e{constructor(o){if(super(o),o.type!==Dt.ATTRIBUTE||o.name!=="style"||o.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(o){return Object.keys(o).reduce((t,e)=>{let n=o[e];return n==null?t:t+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(o,[t]){let{style:e}=o.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let n of this.ft)t[n]==null&&(this.ft.delete(n),n.includes("-")?e.removeProperty(n):e[n]=null);for(let n in t){let i=t[n];if(i!=null){this.ft.add(n);let r=typeof i=="string"&&i.endsWith(ro);n.includes("-")||r?e.setProperty(n,r?i.slice(0,-11):i,r?jt:""):e[n]=i}}return E}});var so={title:"Waste collection",next:"Next collection",putOutTonight:"Put out tonight",collectedTomorrow:"Collected tomorrow",comingDays:"Coming days",schedule:"Collection schedule",close:"Close",loading:"Loading schedule\u2026",empty:"No collections in this date range",partialEmpty:"No dates from the available sources",unavailable:"Schedule unavailable",stale:"Some sources are unavailable. Dates may be out of date.",staleBadge:"Out of date",collections:"collections",updated:"Provider updated",details:"View schedule",manageBins:"Manage bins",today:"Today",more:"more",previousPage:"Previous page",nextPage:"Next page",yourBins:"Your bins",upcoming:"Upcoming collections",clearFilter:"Show all bins",filterHint:"Select a bin to filter the schedule",ready:"Schedule available",sources:"Sources",binPage:"Bin pages",sourceUnavailable:"Source unavailable. Check the entity in Home Assistant.",sourceUnsupported:"Select a sensor with Generic details or a calendar.",sourceInvalid:"Invalid collection records. Check the source integration.",sourceLoadFailed:"Could not load this source. Check the entity and connection in Home Assistant."},ao={title:"Odbi\xF3r odpad\xF3w",next:"Najbli\u017Cszy odbi\xF3r",putOutTonight:"Wystaw dzi\u015B wieczorem",collectedTomorrow:"Odbi\xF3r jutro",comingDays:"Najbli\u017Csze dni",schedule:"Harmonogram odbioru",close:"Zamknij",loading:"\u0141adowanie harmonogramu\u2026",empty:"Brak odbior\xF3w w tym zakresie dat",partialEmpty:"Brak termin\xF3w z dost\u0119pnych \u017Ar\xF3de\u0142",unavailable:"Harmonogram niedost\u0119pny",stale:"Niekt\xF3re \u017Ar\xF3d\u0142a s\u0105 niedost\u0119pne. Terminy mog\u0105 by\u0107 nieaktualne.",staleBadge:"Nieaktualne",collections:"frakcje",updated:"Aktualizacja \u017Ar\xF3d\u0142a",details:"Zobacz harmonogram",manageBins:"Zarz\u0105dzaj pojemnikami",today:"Dzisiaj",more:"wi\u0119cej",previousPage:"Poprzednia strona",nextPage:"Nast\u0119pna strona",yourBins:"Twoje pojemniki",upcoming:"Nadchodz\u0105ce odbiory",clearFilter:"Poka\u017C wszystkie pojemniki",filterHint:"Wybierz pojemnik, aby filtrowa\u0107 harmonogram",ready:"Harmonogram dost\u0119pny",sources:"\u0179r\xF3d\u0142a",binPage:"Strony pojemnik\xF3w",sourceUnavailable:"\u0179r\xF3d\u0142o niedost\u0119pne. Sprawd\u017A encj\u0119 w Home Assistant.",sourceUnsupported:"Wybierz sensor z danymi Generic lub kalendarz.",sourceInvalid:"Nieprawid\u0142owe dane odbior\xF3w. Sprawd\u017A integracj\u0119 \u017Ar\xF3d\u0142ow\u0105.",sourceLoadFailed:"Nie uda\u0142o si\u0119 wczyta\u0107 \u017Ar\xF3d\u0142a. Sprawd\u017A encj\u0119 i po\u0142\u0105czenie w Home Assistant."},I=o=>o.toLowerCase().startsWith("pl")?ao:so,Ge=(o,t)=>`${o.source}: ${I(t)[o.reason]}`;function co(o){let t=/^#([\da-f]{3}|[\da-f]{6})$/i.exec(o.trim())?.[1];if(t){let n=t.length===3?[...t].map(i=>i+i).join(""):t;return[0,2,4].map(i=>parseInt(n.slice(i,i+2),16))}let e=/^rgba?\(\s*(\d+)[\s,]+(\d+)[\s,]+(\d+)/i.exec(o.trim());return e?[Number(e[1]),Number(e[2]),Number(e[3])]:void 0}var Ht=([o,t,e])=>{let[n,i,r]=[o,t,e].map(s=>{let a=s/255;return a<=.03928?a/12.92:((a+.055)/1.055)**2.4});return .2126*n+.7152*i+.0722*r},lo="#1f1f1f",po=Ht([31,31,31]);function ho(o){let t=co(o);if(!t)return"#fff";let e=Ht(t),n=1.05/(e+.05);return(e+.05)/(po+.05)>n?lo:"#fff"}var qe=o=>{let t=q(o);return d`<span class=${`swatch${t?"":" neutral"}`} aria-hidden="true"
    style=${T(t?{"--waste-type-color":t,"--waste-icon-color":ho(t)}:{})}><ha-icon
    .icon=${o.icon??"mdi:trash-can-outline"}></ha-icon></span>`},Nt=(o,t,e=6)=>d`<div class="chips">
    ${o.slice(0,e).map(n=>d`<span class="chip">${qe(n)}<span>${n.label}</span></span>`)}
    ${o.length>e?d`<span class="chip overflow">+${new Intl.NumberFormat(t).format(o.length-e)} ${I(t).more}</span>`:p}
  </div>`,Ke=o=>d`<div class="bins" aria-hidden="true">
    ${o.slice(0,3).map(t=>d`<div
          class="bin"
          style=${T({"--waste-type-color":q(t)})}
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
  </div>`,xe=o=>{let{group:t,today:e,locale:n,moment:i}=o,r=I(n),s=i==="tonight";return d`<div class=${`primary${o.className?` ${o.className}`:""}${s?" tonight":""}`}>
    <div class="copy">
      <div class="eyebrow">${s?d`<ha-icon aria-hidden="true" icon="mdi:weather-night"></ha-icon>`:p}${r.next}</div>
      <span class="date">${s?r.putOutTonight:G(t.date,e,n)}</span>${Nt(t.events,n)}
      <p class="full-date">${s?`${r.collectedTomorrow} \xB7 ${Be(t.date,n)}`:$t(t.date,e,n)}</p>
    </div>
    ${o.artwork?Ke(t.events):p}
  </div>`},ae=(o,t,e,n=14)=>{let i=new Map;for(let l of o)i.set(l.date,[...i.get(l.date)??[],l]);let r=new Intl.DateTimeFormat(e,{weekday:"narrow",timeZone:"UTC"}),s=new Intl.DateTimeFormat(e,{day:"numeric",timeZone:"UTC"}),a=3;return d`<div class="strip" aria-hidden="true">
    ${Array.from({length:n},(l,u)=>{let h=fe(t,u),c=i.get(h)??[],g=new Date(`${h}T12:00:00Z`),m=c.length-a;return d`<div class=${`strip-day${u===0?" today":""}${c.length?" has-pickup":""}`}>
        <span class="strip-weekday">${r.format(g)}</span>
        <span class="strip-date">${s.format(g)}</span>
        <span class="strip-dots">${c.slice(0,m>0?a-1:a).map(f=>{let b=q(f);return d`<span class=${`strip-dot${b?"":" neutral"}`} style=${T(b?{"--waste-type-color":b}:{})}></span>`})}${m>0?d`<span class="strip-more">+${new Intl.NumberFormat(e).format(m+1)}</span>`:p}</span>
      </div>`})}
  </div>`},J=(o,t,e,n=6)=>d`${o.map(i=>{let r=new Date(`${i.date}T12:00:00Z`);return d`<div class="group">
      <div class="day" aria-hidden="true">
        ${new Intl.DateTimeFormat(e,{month:"short",timeZone:"UTC"}).format(r)}<strong
          >${new Intl.DateTimeFormat(e,{day:"numeric",timeZone:"UTC"}).format(r)}</strong
        >
      </div>
      <div class="group-body">
        <div class="group-date"><span class="sr-only">${_t(i.date,t,e)}</span><span
          aria-hidden="true">${xt(i.date,t,e)}</span></div>
        ${Nt(i.events,e,n)}
      </div>
    </div>`})}`;var Mt=Y`
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
  .surface.tappable > :not(.surface-action) {
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
`;async function Je(o){return customElements.get("ha-form")||await(await(await window.loadCardHelpers()).createCardElement({type:"button"})).constructor.getConfigElement(),document.createElement(o)}function Ut(o){let{events:t,groups:e,today:n,locale:i}=o,r=I(i),s=e[0],a=It(t,i),l=12,u=Math.max(1,Math.ceil(a.length/l)),h=Math.min(o.page,u-1),c=a.find(m=>$(m)===o.selected),g=c?e.map(m=>({...m,events:m.events.filter(f=>$(f)===o.selected)})).filter(m=>m.events.length):e.slice(1);return d`
    ${s?xe({group:s,today:n,locale:i,moment:o.moment,artwork:o.artwork,className:"overview-next"}):p}
    ${o.strip?ae(t,n,i,o.strip):p}
    <div class="section-heading"><h3>${r.yourBins}</h3><small>${new Intl.NumberFormat(i).format(a.length)}</small></div>
    <p class="filter-hint">${r.filterHint}</p>
    <div class="bin-grid">${a.slice(h*l,(h+1)*l).map(m=>d`
      <button class="bin-tile" aria-pressed=${!!(c&&$(m)===o.selected)}
        @click=${()=>o.select($(m)===o.selected?void 0:$(m))}>
        ${o.artwork?Ke([m]):qe(m)}
        <span class="tile-copy"><strong>${M(m,a)}</strong>${o.showSource?d`<small class="source-name">${k(o.hass,m.sourceId,o.sources)}</small>`:p}
          <span class="tile-date">${G(m.date,n,i)}</span></span>
        <span class="tile-color" aria-hidden="true" style=${T({backgroundColor:q(m)})}></span>
      </button>`)}</div>
    ${u>1?d`<nav class="pages" aria-label=${r.binPage}><button ?disabled=${h===0} @click=${()=>o.changePage(h-1)}>${r.previousPage}</button>
      <span aria-live="polite">${new Intl.NumberFormat(i).format(h+1)} / ${new Intl.NumberFormat(i).format(u)}</span><button ?disabled=${h+1===u} @click=${()=>o.changePage(h+1)}>${r.nextPage}</button></nav>`:p}
    ${g.length||c?d`
      <div class="section-heading"><h3>${r.upcoming}</h3>${c?d`<button class="filter-reset" @click=${()=>o.select(void 0)}>${r.clearFilter}</button>`:p}</div>
      ${c?d`<p class="filter-hint" role="status">${M(c,a)}${o.showSource?d` · ${k(o.hass,c.sourceId,o.sources)}`:p}</p>`:p}
      <div class="overview-schedule">${J(g.slice(0,o.maxGroups),n,i)}</div>`:p}`}var U=class extends _{constructor(){super(...arguments);this.badge=!1;this.detailsOpen=!1;this.detailsPage=0;this.binPage=0;this.controller=new K;this.visible=()=>{document.visibilityState==="visible"&&this.refresh()}}set hass(e){let n=this.ha;this.ha=e,(!n||n.connection!==e.connection||n.config.time_zone!==e.config.time_zone)&&(this.snapshot=void 0,this.selectedBin=void 0,this.binPage=0),(!n||n.connection!==e.connection||n.config.time_zone!==e.config.time_zone||v(this.config??{type:""}).some(i=>n.states[i]!==e.states[i]))&&this.refresh(),(!n||n.locale?.language!==e.locale?.language||n.language!==e.language)&&this.requestUpdate()}get hass(){return this.ha}setConfig(e){let n=me(e),i=this.config,r=!i||JSON.stringify(v(i).sort())!==JSON.stringify(v(n).sort());r&&this.controller.reset(),(r||i?.days_to_show!==n.days_to_show||JSON.stringify(i?.overrides)!==JSON.stringify(n.overrides))&&(this.snapshot=void 0,this.selectedBin=void 0,this.binPage=0,this.detailsPage=0),this.config=n,this.refresh(),this.requestUpdate()}static getConfigElement(){return Je("waste-pickup-planner-card-editor")}static getStubConfig(e){let n=we(e,{type:""});return{type:"custom:waste-pickup-planner-card",entity:n.find(i=>i.startsWith("sensor."))??n[0]??"sensor.waste_schedule",layout:"compact"}}getCardSize(){return this.config?.layout==="overview"?8:this.config?.layout==="schedule"?Math.min(this.config.max_groups+1,8):this.config?.layout==="hero"?5:3}getGridOptions(){return{columns:12,min_columns:6,rows:"auto"}}connectedCallback(){super.connectedCallback(),document.addEventListener("visibilitychange",this.visible),this.timer=setInterval(()=>this.refresh(),6e4),this.refresh()}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.timer),document.removeEventListener("visibilitychange",this.visible),this.controller.cancel(),this.detailsOpen=!1}refresh(){if(!this.isConnected||!this.ha||!this.config)return;let e=new Date;this.day=F(e,this.ha.config.time_zone);let n=vt(e,this.ha.config.time_zone);n!==this.hour&&(this.hour=n,this.requestUpdate()),this.snapshot?.rangeStart!==this.day&&(this.snapshot=void 0),this.controller.update(this.ha,this.config,i=>{(i.status!=="loading"||!this.snapshot)&&(this.snapshot=i)})}locale(){return this.config?.locale||this.ha?.locale?.language||this.ha?.language||"en"}async activate(){let e=this.config;if(!e)return;let n=e.tap_action?.action??"details";n!=="none"&&(n==="more-info"?this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:v(e)[0]},bubbles:!0,composed:!0})):n==="navigate"?(history.pushState(null,"",e.tap_action.navigation_path),window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1}}))):(this.detailsPage=0,this.detailsOpen=!0,await this.updateComplete,this.isConnected&&this.detailsOpen&&this.renderRoot.querySelector("dialog")?.showModal()))}manageBins(){history.pushState(null,"","/config/integrations/integration/waste_collection_schedule"),window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1}}))}sourceDetails(e){this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0}))}async changeDetailsPage(e){this.detailsPage=e,await this.updateComplete,this.renderRoot.querySelector("dialog")?.scrollTo(0,0)}render(){if(!this.config)return p;let e=this.locale(),n=I(e),i=this.snapshot,r=[...i?.events??[]].sort(re(e)),s=Ze(r),a=s[0],l=i?.rangeStart??this.day??"2000-01-01",u=this.config.layout==="overview"&&i?.events.some(w=>$(w)===this.selectedBin)?this.selectedBin:void 0,h=u?r.filter(w=>$(w)===u):r,c=v(this.config),g=this.config.show_source??c.length>1,m=this.config.title??n.title,f=i?.status??"loading",b=f==="empty"?n.empty:f==="stale"?n.partialEmpty:f==="unavailable"?n.unavailable:n.loading,y=a?a.events.length>2?`${new Intl.NumberFormat(e).format(a.events.length)} ${n.collections}`:a.events.map(w=>w.label).join(" \xB7 "):b,x=a?wt(a.date,l,this.hour??0,this.config.evening_hour??18):"upcoming",P=a?x==="tonight"?n.putOutTonight:G(a.date,l,e):b,S=this.config.show_strip??["hero","overview"].includes(this.config.layout??"compact"),A=Math.min(14,this.config.days_to_show??30),Ve=f==="stale"?d`<p class="notice" role="status">${n.stale}</p>`:p,ce=100,le=Math.max(1,Math.ceil(h.length/ce)),D=Math.min(this.detailsPage,le-1),Ye=this.detailsOpen?d`<dialog aria-label=${n.schedule} @close=${()=>{this.detailsOpen=!1}}>
      <div class="heading">
        <h2>${m}</h2>
        <button
          class="close"
          aria-label=${n.close}
          @click=${()=>this.renderRoot.querySelector("dialog")?.close()}
        >
          ✕
        </button>
      </div>
      ${h.length?J(Ze(h.slice(D*ce,(D+1)*ce)),l,e,ce):d`<p class="state">${b}</p>`}${Ve}${i?.messages.map(w=>d`<p class="state">${Ge(w,e)}</p>`)}
      ${le>1?d`<nav class="pages" aria-label=${n.schedule}>
        <button ?disabled=${D===0} @click=${()=>this.changeDetailsPage(D-1)}>${n.previousPage}</button>
        <span aria-live="polite">${new Intl.NumberFormat(e).format(D+1)} / ${new Intl.NumberFormat(e).format(le)}</span>
        <button ?disabled=${D+1===le} @click=${()=>this.changeDetailsPage(D+1)}>${n.nextPage}</button>
      </nav>`:p}
    </dialog>`:p;if(this.badge){let w=a?a.events.slice(0,6).map(Zt=>Zt.label).join(" \xB7 ")+(a.events.length>6?` \xB7 +${new Intl.NumberFormat(e).format(a.events.length-6)} ${n.more}`:""):b,Xe=`${m}: ${P}. ${w}${f==="stale"?`. ${n.stale}`:""}`,et=d`<ha-icon aria-hidden="true"
        .icon=${f==="stale"||f==="unavailable"?"mdi:alert-circle-outline":"mdi:trash-can-outline"}></ha-icon>
        <span class="badge-copy"><strong>${a?P:m}</strong>
        <small>${f==="stale"?`${n.staleBadge} \xB7 `:""}${y}</small></span>`;return this.config.tap_action?.action==="none"?d`<div class="badge" role="img" aria-label=${Xe} title=${w}>${et}</div>`:d`<button class="badge" aria-label=${Xe} title=${w} @click=${this.activate}>${et}</button>${Ye}`}let Ce=this.config.tap_action?.action!=="none"&&this.config.layout!=="overview",Qe=this.config.tap_action?.action==="more-info"||this.config.tap_action?.action==="navigate"?m:n.details;return d`<ha-card data-appearance=${this.config.appearance??"native"} data-density=${this.config.density??"comfortable"}
        ><section class=${`surface ${this.config.layout}${Ce?" tappable":""}`}>
          ${Ce?d`<button class="surface-action" @click=${this.activate}>
            <span class="sr-only">${Qe}</span></button>`:p}
          ${this.config.title!==void 0?d`<div class="heading">
            <h2>${m}</h2>
            <ha-icon aria-hidden="true" icon="mdi:calendar-outline"></ha-icon>
          </div>`:p}
          ${a?this.config.layout==="overview"?Ut({events:r,groups:s,today:l,locale:e,moment:x,artwork:this.config.show_artwork??!0,strip:S?A:0,showSource:g,sources:c,hass:this.ha,maxGroups:this.config.max_groups,selected:u,page:this.binPage,select:w=>{this.selectedBin=w,this.detailsPage=0},changePage:w=>{this.binPage=w}}):this.config.layout==="schedule"?d`${S?ae(r,l,e,A):p}${J(s.slice(0,this.config.max_groups),l,e)}`:d`${xe({group:a,today:l,locale:e,moment:x,artwork:this.config.layout==="hero"&&!!this.config.show_artwork})}
                    ${S?ae(r,l,e,A):p}
                    ${this.config.layout==="hero"&&s.length>1?d`<div class="upcoming">${J(s.slice(1,this.config.max_groups),l,e)}</div>`:p}`:d`<p class="state" role="status">${b}</p>`}
          ${Ve}${f==="unavailable"?i?.messages.map(w=>d`<p class="state">${Ge(w,e)}</p>`):p}
          ${this.config.show_updated&&i?.fetchedAt?d`<p class="updated">${n.updated}: ${kt(i.fetchedAt,e,i.timeZone)}</p>`:p}
          ${this.config.layout==="overview"?d`${f==="ready"?p:d`<div class=${`source-status ${f}`} role="status">
            <ha-icon aria-hidden="true" .icon=${f==="stale"||f==="unavailable"?"mdi:alert-circle-outline":"mdi:calendar-outline"}></ha-icon>
            <span>${f==="stale"?n.staleBadge:b}</span>
          </div>`}<div class="source-links" aria-label=${n.sources}>${c.map(w=>d`<button @click=${()=>this.sourceDetails(w)}>${k(this.ha,w,c)} <span aria-hidden="true">↗</span></button>`)}</div>`:p}
        </section>
        ${this.config.tap_action?.action==="none"||Ce?p:d`<button class="action" @click=${this.activate}><span>${Qe}</span><ha-icon aria-hidden="true" icon="mdi:chevron-right"></ha-icon></button>`}
        ${this.config.show_manage_bins?d`<button class="action" @click=${this.manageBins}><span>${n.manageBins}</span><ha-icon aria-hidden="true" icon="mdi:cog-outline"></ha-icon></button>`:p}</ha-card
      >${Ye}`}};U.styles=Mt,U.properties={snapshot:{state:!0},detailsOpen:{state:!0},detailsPage:{state:!0},selectedBin:{state:!0},binPage:{state:!0}};var _e=class extends U{constructor(){super(...arguments);this.badge=!0}static getConfigElement(){return Je("waste-pickup-planner-badge-editor")}static getStubConfig(e){return{...super.getStubConfig(e),type:"custom:waste-pickup-planner-badge"}}};var uo={source:"Source and layout",appearanceSection:"Appearance",binsSection:"Bins",entities:"Waste sensors or calendars",title:"Title",layout:"Layout",appearance:"Appearance",density:"Density",days_to_show:"Days to show",max_groups:"Visible date groups",show_artwork:"Show bin artwork",show_updated:"Show provider update time",show_manage_bins:"Show Manage bins shortcut",show_source:"Show source names",locale:"Language override (optional)",show_strip:"Show the 14-day strip",evening_hour:"Put-out reminder from (hour)",compact:"Compact",hero:"Hero",schedule:"Schedule",overview:"Overview",native:"Native Home Assistant",modern:"Modern",minimal:"Minimal",comfortable:"Comfortable",sourceHelp:"Select one authoritative source per address. For Waste Collection Schedule, choose the combined sensor with Generic details (All attributes in visual bin controls). Calendars also work.",unsupported:"No structured schedule is exposed. Open the sensor settings and choose Generic / All attributes.",binsHelp:"Integration colors apply until you choose an override. Shared bin definitions stay in Waste Collection Schedule.",rangeHelp:"Calendar bin choices come from events in the selected date range. Bins without records can be added in Advanced.",noBins:"No bins found in the supplied schedule.",calendarLoading:"Loading calendar bins\u2026",calendarFailed:"Some calendar bins could not be loaded. Check the source entity or try again.",customize:"Edit bin",displayName:"Display name",localColor:"Local bin color",inheritedColor:"Inherited card color",integrationColor:"Integration color",localColorStatus:"Local color",varyingColors:"Integration colors vary by bin.",neutralColor:"No integration color is available; artwork stays neutral.",resetInherited:"Use inherited card color",resetIntegration:"Use integration color",hide:"Hide this collection",hidden:"Hidden",local:"Customized",integration:"Integration",done:"Done",remove:"Reset this override",matching:"Advanced matching and icon",type:"Category ID or exact calendar name",binSource:"Source entity (optional)",label:"Exact bin name (optional)",icon:"Icon (mdi:\u2026)",color:"Local color (#RRGGBB)",advanced:"Advanced settings",advancedOverride:"Add a category or missing bin override",overrideHelp:"Use the exact type ID, or the complete collection name for older sensors and calendars.",addOverride:"Add collection override",tap:"Tap action",details:"View schedule","more-info":"Entity details",overrideLimit:"This card supports up to 100 overrides. Reset an unused override before adding another.",navigate:"Open dashboard",none:"No action",navigationPath:"Dashboard path",retry:"Retry"},mo={source:"\u0179r\xF3d\u0142o i uk\u0142ad",appearanceSection:"Wygl\u0105d",binsSection:"Pojemniki",entities:"Sensory odpad\xF3w lub kalendarze",title:"Tytu\u0142",layout:"Uk\u0142ad",appearance:"Wygl\u0105d",density:"Odst\u0119py",days_to_show:"Liczba dni",max_groups:"Widoczne grupy termin\xF3w",show_artwork:"Poka\u017C ilustracje pojemnik\xF3w",show_updated:"Poka\u017C czas aktualizacji \u017Ar\xF3d\u0142a",show_manage_bins:"Poka\u017C skr\xF3t Zarz\u0105dzaj pojemnikami",show_source:"Poka\u017C nazwy \u017Ar\xF3de\u0142",locale:"J\u0119zyk (opcjonalnie)",show_strip:"Poka\u017C pasek 14 dni",evening_hour:"Przypomnienie o wystawieniu od (godzina)",compact:"Kompaktowy",hero:"Wyr\xF3\u017Cniony",schedule:"Harmonogram",overview:"Przegl\u0105d",native:"Natywny Home Assistant",modern:"Nowoczesny",minimal:"Minimalistyczny",comfortable:"Wygodne",sourceHelp:"Wybierz jedno g\u0142\xF3wne \u017Ar\xF3d\u0142o dla ka\u017Cdego adresu. W Waste Collection Schedule wybierz sensor zbiorczy ze szczeg\xF3\u0142ami Generic (Wszystkie atrybuty w ustawieniach wizualnych). Mo\u017Cesz te\u017C u\u017Cy\u0107 kalendarza.",unsupported:"Sensor nie udost\u0119pnia danych harmonogramu. Otw\xF3rz jego ustawienia i wybierz Generic / Wszystkie atrybuty.",binsHelp:"Kolory integracji obowi\u0105zuj\u0105 do wybrania w\u0142asnych. Wsp\xF3lne definicje pojemnik\xF3w pozostaj\u0105 w Waste Collection Schedule.",rangeHelp:"Pojemniki kalendarza pochodz\u0105 z wydarze\u0144 w wybranym zakresie dat. Pojemniki bez termin\xF3w mo\u017Cna doda\u0107 w ustawieniach zaawansowanych.",noBins:"Brak pojemnik\xF3w w udost\u0119pnionym harmonogramie.",calendarLoading:"\u0141adowanie pojemnik\xF3w kalendarza\u2026",calendarFailed:"Nie uda\u0142o si\u0119 wczyta\u0107 niekt\xF3rych pojemnik\xF3w kalendarza. Sprawd\u017A encj\u0119 \u017Ar\xF3d\u0142ow\u0105 lub spr\xF3buj ponownie.",customize:"Edytuj pojemnik",displayName:"Wy\u015Bwietlana nazwa",localColor:"W\u0142asny kolor pojemnika",inheritedColor:"Odziedziczony kolor karty",integrationColor:"Kolor integracji",localColorStatus:"W\u0142asny kolor",varyingColors:"Kolory integracji r\xF3\u017Cni\u0105 si\u0119 mi\u0119dzy pojemnikami.",neutralColor:"Brak koloru integracji; ilustracje pozostaj\u0105 neutralne.",resetInherited:"U\u017Cyj odziedziczonego koloru karty",resetIntegration:"U\u017Cyj koloru integracji",hide:"Ukryj ten odbi\xF3r",hidden:"Ukryty",local:"Dostosowany",integration:"Integracja",done:"Gotowe",remove:"Przywr\xF3\u0107 ustawienia tego wpisu",matching:"Zaawansowane dopasowanie i ikona",type:"ID kategorii lub dok\u0142adna nazwa kalendarza",binSource:"Encja \u017Ar\xF3d\u0142owa (opcjonalnie)",label:"Dok\u0142adna nazwa pojemnika (opcjonalnie)",icon:"Ikona (mdi:\u2026)",color:"W\u0142asny kolor (#RRGGBB)",advanced:"Ustawienia zaawansowane",advancedOverride:"Dodaj wpis dla kategorii lub brakuj\u0105cego pojemnika",overrideHelp:"U\u017Cyj dok\u0142adnego ID kategorii lub pe\u0142nej nazwy odbioru ze starszych sensor\xF3w i kalendarzy.",addOverride:"Dodaj wpis odbioru",tap:"Akcja po dotkni\u0119ciu",details:"Zobacz harmonogram","more-info":"Szczeg\xF3\u0142y encji",overrideLimit:"Karta obs\u0142uguje do 100 w\u0142asnych wpis\xF3w. Usu\u0144 nieu\u017Cywany wpis przed dodaniem kolejnego.",navigate:"Otw\xF3rz pulpit",none:"Brak akcji",navigationPath:"\u015Acie\u017Cka pulpitu",retry:"Spr\xF3buj ponownie"},Lt=o=>o.toLowerCase().startsWith("pl")?mo:uo;var Bt=Y`
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
`;function Rt(o){return{...o,entities:v(o),layout:o.layout??"compact",appearance:o.appearance??"native",density:o.density??"comfortable",show_artwork:o.show_artwork??o.layout==="overview",show_source:o.show_source??v(o).length>1,show_strip:o.show_strip??["hero","overview"].includes(o.layout??"compact"),evening_hour:o.evening_hour??18}}function Wt(o,t,e){let n=Object.fromEntries(e.filter(i=>Object.prototype.hasOwnProperty.call(t,i)&&JSON.stringify(o[i])!==JSON.stringify(t[i])).map(i=>[i,t[i]]));return Object.prototype.hasOwnProperty.call(n,"entities")&&(n.entity=void 0),n}var L=class extends _{constructor(){super(...arguments);this.controller=new K}set hass(e){let n=this.ha;this.ha=e,(!n||n.connection!==e.connection||n.config.time_zone!==e.config.time_zone)&&(this.controller.reset(),this.calendarSnapshot=void 0),(!n||n.connection!==e.connection||n.config.time_zone!==e.config.time_zone||v(this.config??{type:""}).some(i=>n.states[i]!==e.states[i]))&&this.refreshBins(),this.requestUpdate()}get hass(){return this.ha}setConfig(e){let n=this.config;this.config={...e},(!n||JSON.stringify(v(n))!==JSON.stringify(v(e))||n.days_to_show!==e.days_to_show)&&(this.controller.reset(),this.calendarSnapshot=void 0,this.editing=void 0,this.refreshBins()),this.editing!==void 0&&!this.config.overrides?.[this.editing]&&(this.editing=void 0)}connectedCallback(){super.connectedCallback(),this.timer=setInterval(()=>this.refreshBins(),6e4),this.refreshBins()}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.timer),this.controller.cancel()}refreshBins(){if(!(!this.isConnected||!this.ha||!this.config))try{let e=me({...this.config,overrides:[]});if(!v(e).some(n=>n.startsWith("calendar.")))return;this.controller.update(this.ha,e,n=>{(n.status!=="loading"||!this.calendarSnapshot)&&(this.calendarSnapshot=n)})}catch{}}changed(e){this.setConfig({...this.config,...e}),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this.config},bubbles:!0,composed:!0}))}override(e,n){let i=[...this.config?.overrides??[]];i[e]={...i[e],...n},this.changed({overrides:i})}form(e,n){let i=this.config.type.includes("badge"),r=(l,u)=>({name:l,selector:{select:{options:u.map(h=>({value:h,label:n[h]})),mode:"dropdown"}}}),s=[{name:"entities",required:!0,selector:{entity:{domain:["sensor","calendar"],multiple:!0,include_entities:we(this.ha,this.config)}}},{name:"title",selector:{text:{}}},r("layout",["compact","hero","schedule","overview"]),r("appearance",["native","modern","minimal"]),r("density",["comfortable","compact"]),{name:"days_to_show",selector:{number:{min:1,max:366,mode:"box"}}},{name:"max_groups",selector:{number:{min:1,max:50,mode:"box"}}},{name:"evening_hour",selector:{number:{min:0,max:23,mode:"box",unit_of_measurement:"h"}}},...["show_artwork","show_updated","show_manage_bins","show_source","show_strip"].map(l=>({name:l,selector:{boolean:{}}})),{name:"locale",selector:{text:{}}}].filter(l=>e.includes(l.name)&&(!i||!["layout","max_groups","show_artwork","show_manage_bins","appearance","density","show_source","show_strip"].includes(l.name)));if(!s.length)return p;let a=Rt(this.config);return d`<ha-form .hass=${this.ha} .data=${a} .schema=${s}
      .computeLabel=${l=>n[l.name]}
      @value-changed=${l=>{let u=Wt(a,l.detail.value,s.map(h=>h.name));Object.keys(u).length&&this.changed(u)}}></ha-form>`}editPanel(e,n,i,r){let s=this.editing;if(s===void 0||!this.config.overrides?.[s])return p;let a=this.config.overrides[s],l=zt(a,this.config.overrides),u=n.filter(y=>ve(y,a)),h=new Set(u.map(y=>y.color)),c=h.size===1?u[0]?.color:void 0,g=l?.color?`${e.inheritedColor}: ${l.color}`:h.size>1?e.varyingColors:c?`${e.integrationColor}: ${c}`:e.neutralColor,m=a.source&&a.label?i.find(y=>ve(y,a)):void 0,f={sourceId:a.source??"",typeId:a.type,originalLabel:a.label??a.type,label:a.name??a.label??a.type},b=M(m??f,r);return d`<fieldset><legend>${b}${a.source?d` · ${k(this.ha,a.source,v(this.config))}`:p}</legend>
      <label>${e.displayName}<input .value=${a.name??""} placeholder=${l?.name??a.label??a.type}
        @input=${y=>this.override(s,{name:y.target.value||void 0})} /></label>
      <label>${e.localColor}<input type="color" .value=${a.color??l?.color??c??"#808080"}
        @input=${y=>this.override(s,{color:y.target.value})} /></label>
      <p>${a.color?`${e.localColorStatus}: ${a.color}`:g}</p>
      ${a.color?d`<button @click=${()=>this.override(s,{color:void 0})}>${l?.color?e.resetInherited:e.resetIntegration}</button>`:p}
      <label class="check"><input type="checkbox" .checked=${a.hidden??l?.hidden??!1}
        @change=${y=>this.override(s,{hidden:y.target.checked})} />${e.hide}</label>
      <details><summary>${e.matching}</summary>
        ${["type","source","label","icon","color"].map(y=>d`<label>${y==="source"?e.binSource:e[y]}<input .value=${a[y]??""}
          @change=${x=>this.override(s,{[y]:x.target.value||void 0})} /></label>`)}
      </details>
      <div class="buttons"><button @click=${()=>{this.editing=void 0}}>${e.done}</button>
        <button @click=${()=>{this.editing=void 0,this.changed({overrides:this.config.overrides.filter((y,x)=>x!==s)})}}>${e.remove}</button></div>
    </fieldset>`}render(){if(!this.config||!this.ha)return p;let e=Lt(this.config.locale||this.ha.locale?.language||this.ha.language||"en"),n=Tt(this.ha,this.config,this.calendarSnapshot?.events),i=this.config.overrides??[],r=v(this.config),s=n.map(c=>({...c,originalLabel:c.label,label:se(c,i)?.name??c.label})),a=v(this.config).filter(c=>c.startsWith("sensor.")&&this.ha.states[c]&&!N(this.ha.states[c]).supported),l=i.map((c,g)=>({o:c,index:g})).filter(({o:c})=>!n.some(g=>c.type===(g.typeId??g.label)&&c.source===g.sourceId&&c.label===g.label)),u=l.map(({o:c})=>({sourceId:c.source??"",typeId:c.type,originalLabel:c.label??c.type,label:c.name??c.label??c.type})),h=[...s,...u];return d`<h3>${e.source}</h3>${this.form(["entities","title","layout"],e)}<p>${e.sourceHelp}</p>
      ${a.length?d`<p class="warning" role="status">${a.join(", ")}: ${e.unsupported}</p>`:p}
      ${this.config.type.includes("badge")?p:d`<h3>${e.appearanceSection}</h3>${this.form(["appearance","density","show_artwork","show_strip","show_source","show_manage_bins"],e)}`}
      <h3>${e.binsSection}</h3><p>${e.binsHelp}</p>
      ${i.length>=100?d`<p role="status">${e.overrideLimit}</p>`:p}
      <div class="bin-list">${n.map((c,g)=>{let m=i.findIndex(y=>y.type===(c.typeId??c.label)&&y.source===c.sourceId&&y.label===c.label),f=se(c,i),b=M(s[g],h);return d`<button class="bin-row" aria-label=${`${e.customize}: ${b} \xB7 ${k(this.ha,c.sourceId,r)}`} aria-pressed=${m>=0&&this.editing===m} ?disabled=${m<0&&i.length>=100}
          @click=${()=>{m>=0?this.editing=m:(this.changed({overrides:[...i,{type:c.typeId??c.label,source:c.sourceId,label:c.label}]}),this.editing=i.length)}}><span class="swatch" aria-hidden="true" style=${T({"--waste-type-color":f?.color??c.color})}></span>
          <span class="bin-copy"><strong>${b}</strong><small>${k(this.ha,c.sourceId,r)} · ${f?.hidden?e.hidden:f?.hidden!==void 0||f?.color||f?.name||f?.icon?e.local:e.integration}</small></span><span aria-hidden="true">✎</span></button>
          ${m>=0&&this.editing===m?this.editPanel(e,n,s,h):p}`})}${l.map(({o:c,index:g},m)=>d`<button class="bin-row" aria-pressed=${this.editing===g} @click=${()=>{this.editing=g}}>
        <span class="bin-copy"><strong>${M(u[m],h)}</strong><small>${c.source?k(this.ha,c.source,r):e.matching}</small></span><span aria-hidden="true">✎</span></button>
        ${this.editing===g?this.editPanel(e,n,s,h):p}`)}</div>
      ${n.length?p:d`<p>${e.noBins}</p>`}
      ${v(this.config).some(c=>c.startsWith("calendar."))?d`<p>${e.rangeHelp}</p>
        ${!this.calendarSnapshot||this.calendarSnapshot.status==="loading"?d`<p role="status">${e.calendarLoading}</p>`:this.calendarSnapshot.messages.some(c=>c.source.startsWith("calendar."))?d`<p class="warning" role="status">${e.calendarFailed} <button @click=${this.refreshBins}>${e.retry}</button></p>`:p}`:p}
      <details><summary>${e.advanced}</summary>${this.form(["days_to_show","max_groups","evening_hour","show_updated","locale"],e)}
        <label>${e.tap}<select .value=${this.config.tap_action?.action??"details"} @change=${c=>this.changed({tap_action:{action:c.target.value}})}>
          ${["details","more-info","navigate","none"].map(c=>d`<option value=${c}>${e[c]}</option>`)}</select></label>
        ${this.config.tap_action?.action==="navigate"?d`<label>${e.navigationPath}<input .value=${this.config.tap_action.navigation_path??""} placeholder="/lovelace/waste"
          @change=${c=>this.changed({tap_action:{action:"navigate",navigation_path:c.target.value}})} /></label>`:p}
        <details><summary>${e.advancedOverride}</summary><p>${e.overrideHelp}</p><button ?disabled=${i.length>=100} @click=${()=>{this.changed({overrides:[...i,{type:"collection_name"}]}),this.editing=i.length}}>${e.addOverride}</button></details>
      </details>`}};L.properties={config:{state:!0},editing:{state:!0},calendarSnapshot:{state:!0}},L.styles=Bt;var ke=class extends L{};customElements.define("waste-pickup-planner-card",U);customElements.define("waste-pickup-planner-badge",_e);customElements.define("waste-pickup-planner-card-editor",L);customElements.define("waste-pickup-planner-badge-editor",ke);var Ft=window;(Ft.customCards??=[]).push({type:"waste-pickup-planner-card",name:"Waste Pickup Planner",description:"Date-grouped waste collections with compact, hero and schedule layouts.",preview:!0});(Ft.customBadges??=[]).push({type:"waste-pickup-planner-badge",name:"Waste Pickup Planner Badge",description:"The next collection date and types, with schedule details."});
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
