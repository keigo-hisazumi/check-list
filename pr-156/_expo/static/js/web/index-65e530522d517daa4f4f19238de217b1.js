__d(function(g,r,i,a,m,_e,d){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(_e,'__esModule',{value:!0}),Object.defineProperty(_e,"default",{enumerable:!0,get:function(){return f}});var t=e(r(d[0])),n=e(r(d[1])),u=e(r(d[2])),o=r(d[3]),l=r(d[4]),s=r(d[5]),c=r(d[6]);function f(){const{user:e,authLoading:u,signOut:f}=(0,o.useAuth)();return u?(0,c.jsx)(t.default,{style:j.loading,children:(0,c.jsx)(n.default,{size:"large",color:"#667eea"})}):e?(0,c.jsx)(s.MainScreen,{user:e,onSignOut:f}):(0,c.jsx)(l.LoginScreen,{})}const j=u.default.create({loading:{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'white'}})},1306,[176,286,104,1307,1453,1454,2]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.useAuth=function(){const[s,h]=(0,t.useState)(null),[o,c]=(0,t.useState)(!0);(0,t.useEffect)(()=>(0,u.onAuthStateChanged)(n.auth,t=>{h(t),c(!1)}),[]);return{user:s,authLoading:o,signIn:(t,s)=>(0,u.signInWithEmailAndPassword)(n.auth,t,s),signUp:(t,s)=>(0,u.createUserWithEmailAndPassword)(n.auth,t,s),signOut:()=>(0,u.signOut)(n.auth)}};var t=r(d[0]),u=r(d[1]),n=r(d[2])},1307,[39,1637,1318]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),Object.defineProperty(e,"auth",{enumerable:!0,get:function(){return o}}),Object.defineProperty(e,"db",{enumerable:!0,get:function(){return s}});var t=r(d[0]),n=r(d[1]),c=r(d[2]);const p=0===(0,t.getApps)().length?(0,t.initializeApp)({apiKey:'AIzaSyD-ZqqmjWn1LSxII6BeVqbbWoJITlSv7HQ',authDomain:'check-list-f5aee.firebaseapp.com',projectId:'check-list-f5aee',storageBucket:'check-list-f5aee.firebasestorage.app',messagingSenderId:'766444919460',appId:'1:766444919460:web:a36a1765bddbfd107ce431'}):(0,t.getApp)(),o=(0,n.getAuth)(p),s=(0,c.getFirestore)(p)},1318,[1647,1637,1648]);
__d(function(g,r,i,a,m,_e,d){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(_e,'__esModule',{value:!0}),_e.LoginScreen=function(){const{signIn:e,signUp:c}=(0,x.useAuth)(),[y,w]=(0,t.useState)(''),[j,C]=(0,t.useState)(''),[S,T]=(0,t.useState)(!1),[v,B]=(0,t.useState)(!1),[k,z]=(0,t.useState)('');return(0,b.jsx)(u.default,{style:p.container,behavior:void 0,children:(0,b.jsx)(f.default,{contentContainerStyle:p.scroll,keyboardShouldPersistTaps:"handled",children:(0,b.jsxs)(o.default,{style:p.card,children:[(0,b.jsx)(n.default,{style:p.title,children:"\u30c1\u30a7\u30c3\u30af\u30ea\u30b9\u30c8"}),(0,b.jsx)(n.default,{style:p.subtitle,children:S?'\u65b0\u898f\u767b\u9332':'\u30ed\u30b0\u30a4\u30f3'}),(0,b.jsx)(l.default,{style:p.input,placeholder:"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9",placeholderTextColor:"#999",value:y,onChangeText:w,keyboardType:"email-address",autoCapitalize:"none",autoComplete:"email"}),(0,b.jsx)(l.default,{style:p.input,placeholder:"\u30d1\u30b9\u30ef\u30fc\u30c9",placeholderTextColor:"#999",value:j,onChangeText:C,secureTextEntry:!0,autoComplete:S?'new-password':'current-password'}),k?(0,b.jsx)(n.default,{style:p.error,children:k}):null,(0,b.jsx)(s.default,{style:[p.submitBtn,v&&p.submitBtnDisabled],onPress:async()=>{if(y.trim()&&j.trim()){B(!0),z('');try{S?await c(y.trim(),j):await e(y.trim(),j)}catch(e){const t=e instanceof Error?e.message:String(e);t.includes('invalid-credential')||t.includes('wrong-password')?z('\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u307e\u305f\u306f\u30d1\u30b9\u30ef\u30fc\u30c9\u304c\u6b63\u3057\u304f\u3042\u308a\u307e\u305b\u3093'):t.includes('email-already-in-use')?z('\u3053\u306e\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u306f\u3059\u3067\u306b\u767b\u9332\u6e08\u307f\u3067\u3059'):t.includes('weak-password')?z('\u30d1\u30b9\u30ef\u30fc\u30c9\u306f6\u6587\u5b57\u4ee5\u4e0a\u3067\u8a2d\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044'):z('\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3057\u305f\u3002\u3082\u3046\u4e00\u5ea6\u304a\u8a66\u3057\u304f\u3060\u3055\u3044')}finally{B(!1)}}else z('\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3068\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044')},disabled:v,children:v?(0,b.jsx)(h.default,{color:"white"}):(0,b.jsx)(n.default,{style:p.submitText,children:S?'\u767b\u9332\u3059\u308b':'\u30ed\u30b0\u30a4\u30f3'})}),(0,b.jsx)(s.default,{onPress:()=>{T(!S),z('')},children:(0,b.jsx)(n.default,{style:p.switchText,children:S?'\u3059\u3067\u306b\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u304a\u6301\u3061\u306e\u65b9\u306f\u3053\u3061\u3089':'\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f5c\u6210\u3059\u308b'})})]})})})};var t=r(d[0]),o=e(r(d[1])),n=e(r(d[2])),l=e(r(d[3])),s=e(r(d[4])),c=e(r(d[5])),u=e(r(d[6]));r(d[7]);var f=e(r(d[8])),h=e(r(d[9])),x=r(d[10]),b=r(d[11]);const p=c.default.create({container:{flex:1,backgroundColor:'#f0f3ff'},scroll:{flexGrow:1,justifyContent:'center',padding:24,alignItems:'center'},card:{backgroundColor:'white',borderRadius:20,padding:32,shadowColor:'#000',shadowOffset:{width:0,height:4},shadowOpacity:.15,shadowRadius:12,elevation:8,width:'100%',maxWidth:480},title:{fontSize:28,fontWeight:'700',color:'#667eea',textAlign:'center',marginBottom:4},subtitle:{fontSize:16,color:'#666',textAlign:'center',marginBottom:24},input:{borderWidth:1.5,borderColor:'#ddd',borderRadius:10,padding:12,fontSize:16,color:'#333',marginBottom:12,backgroundColor:'#fafafa'},error:{color:'#dc3545',fontSize:14,marginBottom:12,textAlign:'center'},submitBtn:{backgroundColor:'#667eea',borderRadius:12,padding:14,alignItems:'center',marginBottom:16},submitBtnDisabled:{opacity:.7},submitText:{color:'white',fontSize:16,fontWeight:'600'},switchText:{color:'#667eea',fontSize:14,textAlign:'center'}})},1453,[39,176,248,313,288,104,295,29,199,286,1307,2]);
__d(function(g,r,i,a,m,_e,d){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(_e,'__esModule',{value:!0}),_e.MainScreen=function({user:e,onSignOut:l}){const{checklists:b,setChecklists:x,activeChecklistId:S,setActiveChecklistId:E}=(0,s.useChecklistConfigSync)(e),[y,M]=(0,t.useState)(!1),[p,I]=(0,t.useState)({completedCount:0,totalCount:0}),[j,w]=(0,t.useState)(0),[R,O]=(0,t.useState)(0),[T,_]=(0,t.useState)(!1),A=(0,t.useRef)(null),D=(0,t.useRef)({}),$=(0,t.useRef)(!1),N=(0,t.useRef)(null),z=(0,t.useRef)(null),L=b.findIndex(e=>e.id===S);(0,t.useEffect)(()=>{L>=0&&j>0&&A.current&&A.current.scrollTo({x:L*j,animated:!1})},[j,b.length]);const B=(0,t.useCallback)(()=>{$.current=!1,N.current=null,z.current&&(clearTimeout(z.current),z.current=null)},[]),F=(0,t.useCallback)(e=>{y&&M(!1),E(e);const t=b.findIndex(t=>t.id===e);t>=0&&j>0&&A.current&&(z.current&&clearTimeout(z.current),$.current=!0,N.current=t*j,A.current.scrollTo({x:t*j,animated:!0}),z.current=setTimeout(B,600))},[y,b,j,E,B]),H=(0,t.useCallback)(e=>{const t=e.nativeEvent.contentOffset.x;if($.current)return void(null!==N.current&&Math.abs(t-N.current)<2&&B());if(y||0===j)return;const n=Math.round(t/j);n>=0&&n<b.length&&E(b[n].id)},[b,y,j,E,B]),K=(0,t.useCallback)(e=>{if($.current)return void B();if(y||0===j)return;const t=Math.round(e.nativeEvent.contentOffset.x/j);t>=0&&t<b.length&&E(b[t].id)},[b,y,j,E,B]),P=(0,t.useCallback)(()=>{M(e=>!e)},[]),U=(0,t.useCallback)(()=>{D.current[S]?.handleReset()},[S]),W=(0,t.useCallback)(()=>{y?_(!0):U()},[y,U]),q=(0,t.useCallback)(async()=>{_(!1),D.current[S]?.stopFirestoreSync();const t=b.findIndex(e=>e.id===S),n=b.filter(e=>e.id!==S);x(n);const l=`${e.uid}-${S}`,c=(await C.default.getAllKeys()).filter(e=>e.startsWith(l));c.length>0&&await C.default.removeMany(c),await(0,h.deleteChecklistData)(e.uid,S).catch(console.error);const s=n[Math.max(0,t-1)]?.id??n[0]?.id;E(s??''),M(!1)},[S,b,e.uid,x,E]),G=(0,t.useCallback)(e=>{const t=`checklist-${Date.now()}`,n={id:t,label:e,initialItems:[]};x(e=>[...e,n]),E(t),M(!0)},[x,E]),J=(0,t.useCallback)((t,n)=>{x(e=>e.map(e=>e.id===t?{...e,label:n}:e)),(0,h.saveChecklistLabel)(e.uid,t,n).catch(console.error)},[e.uid,x]);if(0===b.length)return null;const Q=b.find(e=>e.id===S);return(0,k.jsxs)(n.default,{style:v.container,children:[(0,k.jsx)(u.NavigationBar,{checklists:b,activeChecklistId:S,isEditMode:y,user:e,stats:p,onNavChange:F,onAddChecklist:G,onUpdateChecklistName:J,onSignOut:l,onEdit:P,onResetOrDelete:W}),(0,k.jsx)(c.default,{ref:A,horizontal:!0,pagingEnabled:!0,scrollEnabled:!y,showsHorizontalScrollIndicator:!1,scrollEventThrottle:16,onScroll:H,onMomentumScrollEnd:K,onScrollEndDrag:K,onLayout:e=>{w(e.nativeEvent.layout.width),O(e.nativeEvent.layout.height)},style:v.pager,children:b.map(t=>(0,k.jsx)(n.default,{style:{width:j,height:R},children:(0,k.jsx)(o.Checklist,{ref:e=>{D.current[t.id]=e},checklist:t,user:e,isActive:t.id===S,isEditMode:y&&t.id===S,onStatsChange:t.id===S?I:()=>{}})},t.id))}),(0,k.jsx)(f.ConfirmModal,{visible:T,title:"\u30c1\u30a7\u30c3\u30af\u30ea\u30b9\u30c8\u3092\u524a\u9664",message:`\u300c${Q?.label}\u300d\u3092\u524a\u9664\u3057\u307e\u3059\u304b\uff1f\n\n\u6ce8\u610f: \u30c1\u30a7\u30c3\u30af\u30ea\u30b9\u30c8\u5185\u306e\u3059\u3079\u3066\u306e\u30c7\u30fc\u30bf\u304c\u524a\u9664\u3055\u308c\u307e\u3059\u3002`,onConfirm:q,onCancel:()=>_(!1)})]})};var t=r(d[0]),n=e(r(d[1])),l=e(r(d[2])),c=e(r(d[3])),s=r(d[4]),u=r(d[5]),o=r(d[6]),f=r(d[7]),h=r(d[8]),C=e(r(d[9])),k=r(d[10]);const v=l.default.create({container:{flex:1,backgroundColor:'#f0f3ff'},pager:{flex:1}})},1454,[39,176,104,199,1455,1463,1465,1526,1462,1456,2]);
__d(function(g,r,i,a,m,_e,_d){"use strict";Object.defineProperty(_e,'__esModule',{value:!0}),_e.useChecklistConfigSync=function(e){const[l,n]=(0,t.useState)([]),[d,o]=(0,t.useState)(''),f=(0,t.useRef)(!1),b=(0,t.useRef)(''),h=(0,t.useRef)(!1),p=(0,t.useRef)([]),k=(0,t.useRef)(l);(0,t.useLayoutEffect)(()=>{k.current=l});const y=(0,t.useCallback)(()=>`checklists-config-${e?.uid??'guest'}`,[e?.uid]),C=(0,t.useCallback)(async()=>{try{const e=await s.default.getItem(y());if(e){const t=JSON.parse(e);n(t),t.length>0&&o(t[0].id)}else n([...c]),o(c[0].id),await s.default.setItem(y(),JSON.stringify(c))}catch{n([...c]),o(c[0].id)}},[y]),I=(0,t.useCallback)((e,t)=>{const l=async t=>{if(!f.current)return;const s=t.map(e=>e.id),c=JSON.stringify(s);if(c!==b.current&&!h.current){h.current=!0;try{await(0,u.saveChecklistsConfig)(e,s),b.current=c}catch(e){console.error('Failed to save config to Firestore:',e)}finally{h.current=!1;JSON.stringify(k.current.map(e=>e.id))!==b.current&&l(k.current)}}};return l(t)},[]);return(0,t.useEffect)(()=>{f.current=!1,b.current='',p.current=[],C()},[e?.uid,C]),(0,t.useEffect)(()=>{if(!e)return;const t=[],l=(0,u.subscribeChecklistsConfig)(e.uid,t=>{if(!h.current)if(f.current=!0,null!==t){const e=JSON.stringify(t);if(e===b.current)return;b.current=e;const l=new Map(p.current.map(e=>[e.id,e.label])),s=new Map(k.current.map(e=>[e.id,e])),u=t.map(e=>({id:e,label:l.get(e)??s.get(e)?.label??e,initialItems:s.get(e)?.initialItems??[]}));n(u),o(e=>!u.find(t=>t.id===e)&&u.length>0?u[0].id:e)}else I(e.uid,k.current)});t.push(l);const s=(0,u.subscribeChecklistIds)(e.uid,e=>{p.current=e;const t=new Map(e.map(e=>[e.id,e.label]));n(e=>{let l=!1;const s=e.map(e=>{const s=t.get(e.id);return void 0!==s&&s!==e.label?(l=!0,{...e,label:s}):e});return l?s:e})});return t.push(s),()=>t.forEach(e=>e())},[e?.uid,I]),(0,t.useEffect)(()=>{0!==l.length&&(s.default.setItem(y(),JSON.stringify(l)).catch(console.error),e&&I(e.uid,l))},[l,e?.uid,y,I]),{checklists:l,setChecklists:n,activeChecklistId:d,setActiveChecklistId:o}};var e,t=r(_d[0]),l=r(_d[1]),s=(e=l)&&e.__esModule?e:{default:e},u=r(_d[2]);const c=[{id:'tutorial',label:'\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb',initialItems:[{id:'tutorial-check',label:'\u30bf\u30b9\u30af\u3092\u30bf\u30c3\u30d7\u3057\u3066\u30c1\u30a7\u30c3\u30af\u3092\u5165\u308c\u3066\u307f\u3088\u3046'},{id:'tutorial-reset',label:'\u300c\u3059\u3079\u3066\u30ea\u30bb\u30c3\u30c8\u300d\u3067\u30c1\u30a7\u30c3\u30af\u3092\u307e\u3068\u3081\u3066\u5916\u3057\u3066\u307f\u3088\u3046'},{id:'tutorial-edit-mode',label:'\u300c\u9805\u76ee\u3092\u7de8\u96c6\u300d\u30dc\u30bf\u30f3\u3067\u7de8\u96c6\u30e2\u30fc\u30c9\u306b\u5207\u308a\u66ff\u3048\u3066\u307f\u3088\u3046'},{id:'tutorial-edit',label:'\u7de8\u96c6\u30e2\u30fc\u30c9\u3067\u925b\u7b46\u30a2\u30a4\u30b3\u30f3\u3092\u30bf\u30c3\u30d7\u3057\u3066\u30bf\u30b9\u30af\u540d\u3092\u5909\u3048\u3066\u307f\u3088\u3046'},{id:'tutorial-reorder',label:'\u7de8\u96c6\u30e2\u30fc\u30c9\u3067\u30c9\u30e9\u30c3\u30b0\u3057\u3066\u30bf\u30b9\u30af\u3092\u4e26\u3073\u66ff\u3048\u3066\u307f\u3088\u3046'},{id:'tutorial-delete',label:'\u7de8\u96c6\u30e2\u30fc\u30c9\u3067\u30b4\u30df\u7bb1\u30a2\u30a4\u30b3\u30f3\u3092\u30bf\u30c3\u30d7\u3057\u3066\u30bf\u30b9\u30af\u3092\u524a\u9664\u3057\u3066\u307f\u3088\u3046'},{id:'tutorial-add',label:'\u7de8\u96c6\u30e2\u30fc\u30c9\u3067\u300c\u65b0\u3057\u3044\u9805\u76ee\u3092\u8ffd\u52a0\u300d\u304b\u3089\u30bf\u30b9\u30af\u3092\u8ffd\u52a0\u3057\u3066\u307f\u3088\u3046'},{id:'tutorial-new-list',label:'\u30ca\u30d3\u306e\u300c\uff0b\u300d\u30dc\u30bf\u30f3\u3067\u65b0\u3057\u3044\u30c1\u30a7\u30c3\u30af\u30ea\u30b9\u30c8\u3092\u4f5c\u3063\u3066\u307f\u3088\u3046'}]}]},1455,[39,1456,1462]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),Object.defineProperty(e,"createAsyncStorage",{enumerable:!0,get:function(){return t.createAsyncStorage}}),Object.defineProperty(e,"AsyncStorageError",{enumerable:!0,get:function(){return n.AsyncStorageError}}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return c}});var t=r(d[0]),n=r(d[1]),c=(0,t.getLegacyStorage)()},1456,[1457,1458]);
__d(function(g,r,i,a,m,_e,d){"use strict";Object.defineProperty(_e,'__esModule',{value:!0}),_e.createAsyncStorage=function(e){return new o(e)},_e.getLegacyStorage=function(){return n.instance};var e,t=r(d[0]),s=r(d[1]),c=(e=s)&&e.__esModule?e:{default:e};class o{constructor(e){this.db=new c.default(e)}getItem=async e=>{try{const t=await this.db.getValues([e]),s=t?.[0]??null;return s?.value??null}catch(e){throw this.createError(e)}};setItem=async(e,t)=>{try{await this.db.setValues([{key:e,value:t}])}catch(e){throw this.createError(e)}};removeItem=async e=>{try{await this.db.removeValues([e])}catch(e){throw this.createError(e)}};getMany=async e=>{try{return await this.db.getValues(e).then(e=>e.reduce((e,t)=>(e[t.key]=t.value,e),{}))}catch(e){throw this.createError(e)}};setMany=async e=>{try{await this.db.setValues(Object.entries(e).map(([e,t])=>({key:e,value:t})))}catch(e){throw this.createError(e)}};removeMany=async e=>{try{await this.db.removeValues(e)}catch(e){throw this.createError(e)}};getAllKeys=async()=>{try{return await this.db.getKeys()}catch(e){throw this.createError(e)}};clear=async()=>{try{await this.db.clearStorage()}catch(e){throw this.createError(e)}};createError(e){return e instanceof t.AsyncStorageError?e:t.AsyncStorageError.jsError(e?.message??`Web storage error: ${e}`,t.AsyncStorageError.Type.WebStorageError)}}class n{constructor(){}static instance=new n;get storage(){return window.localStorage}getItem=async e=>this.storage.getItem(e)??null;setItem=async(e,t)=>{this.storage.setItem(e,t)};removeItem=async e=>{this.storage.removeItem(e)};getMany=async e=>e.reduce((e,t)=>(e[t]=this.storage.getItem(t)??null,e),{});setMany=async e=>{Object.entries(e).forEach(([e,t])=>{this.storage.setItem(e,t)})};removeMany=async e=>{e.forEach(e=>{this.storage.removeItem(e)})};getAllKeys=async()=>Object.keys(this.storage);clear=async()=>{this.storage.clear()}}},1457,[1458,1459]);
__d(function(g,r,i,a,m,_e,d){"use strict";Object.defineProperty(_e,'__esModule',{value:!0}),Object.defineProperty(_e,"AsyncStorageError",{enumerable:!0,get:function(){return t}});var e=(function(e){return e.NativeModuleError="NativeModuleError",e.WebStorageError="WebStorageError",e.SqliteStorageError="SqliteStorageError",e.OtherStorageError="OtherStorageError",e.UnknownError="UnknownError",e})(e||{});class t extends Error{constructor(e,t){super(e),this.errorMessage=e,this.type=t,this.name=this.constructor.name}static nativeError(o){if(o instanceof t)throw o;const s=n(o);if(!s)return new t(o?.message??`Unknown error ${o}`,e.UnknownError);let c=e.UnknownError;switch(s.type){case"SqliteException":c=e.SqliteStorageError;break;case"OtherException":c=e.OtherStorageError}return new t(s.message,c)}static jsError(e,o){return new t(e,o)}static Type=e}function o(e){if("object"!=typeof e)return!1;const t=e;return!!t.message&&"AsyncStorageError"===t?.code}function n(e){if(!o(e))return null;switch(e.userInfo?e.userInfo.type:null){case"SqliteException":return{type:"SqliteException",message:e.message};case"OtherException":return{type:"OtherException",message:e.message};case"LegacyStorageException":return{type:"LegacyStorageException",message:e.message}}return null}},1458,[]);
__d(function(g,r,i,a,m,_e,d){"use strict";Object.defineProperty(_e,'__esModule',{value:!0}),Object.defineProperty(_e,"default",{enumerable:!0,get:function(){return c}});var e,t=r(d[0]),o=r(d[1]),s=(e=o)&&e.__esModule?e:{default:e};var c=class{constructor(e){this.dbName=e}getValues=async e=>{try{const t=(await this.db()).transaction(s.default.TableName,"readonly"),o=t.objectStore(s.default.TableName),c=await Promise.all(e.map(async e=>({key:e,value:await o.get(e)??null})));return await t.done,c}catch(e){throw this.createError(e)}};setValues=async e=>{try{const t=(await this.db()).transaction(s.default.TableName,"readwrite"),o=t.objectStore(s.default.TableName),c=await Promise.all(e.map(async e=>(await o.put(e.value,e.key),{key:e.key,value:e.value})));return await t.done,c}catch(e){throw this.createError(e)}};removeValues=async e=>{try{const t=await this.db(),o=t.transaction(s.default.TableName,"readwrite").objectStore(s.default.TableName);await Promise.all(e.map(async e=>{await o.delete(e)}))}catch(e){throw this.createError(e)}};clearStorage=async()=>{try{const e=await this.db();await e.clear(s.default.TableName)}catch(e){throw this.createError(e)}};getKeys=async()=>{try{const e=await this.db();return await e.getAllKeys(s.default.TableName)}catch(e){throw this.createError(e)}};db=()=>s.default.getOrCreate(this.dbName);createError(e){return e instanceof t.AsyncStorageError?e:t.AsyncStorageError.jsError(e?.message??`IndexedDB error: ${e}`,t.AsyncStorageError.Type.WebStorageError)}}},1459,[1458,1460]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n}});var t=r(d[0]),o=r(d[1]);const s="entries";var n=new class{registry=new Map;TableName=s;getOrCreate(n){if(this.registry.has(n))return this.registry.get(n);const c=(0,t.openDB)(n,1,{upgrade:t=>{t.objectStoreNames.contains(s)||t.createObjectStore(s)},blocked:(t,s,n)=>{throw o.AsyncStorageError.jsError(`New version (${s}) is blocked by current one (${t})`,o.AsyncStorageError.Type.WebStorageError)},blocking:(t,s,n)=>{throw o.AsyncStorageError.jsError(`Current db version (${t}) is blocking upgrade to next version (${s})`,o.AsyncStorageError.Type.WebStorageError)}});return this.registry.set(n,c),c.catch(t=>{throw this.registry.delete(n),t}),c}}},1460,[1461,1458]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),Object.defineProperty(e,"deleteDB",{enumerable:!0,get:function(){return B}}),Object.defineProperty(e,"openDB",{enumerable:!0,get:function(){return v}}),Object.defineProperty(e,"unwrap",{enumerable:!0,get:function(){return I}}),Object.defineProperty(e,"wrap",{enumerable:!0,get:function(){return y}});const t=(t,n)=>n.some(n=>t instanceof n);let n,o;const s=new WeakMap,c=new WeakMap,u=new WeakMap;function f(t){const n=new Promise((n,o)=>{const s=()=>{t.removeEventListener('success',c),t.removeEventListener('error',u)},c=()=>{n(y(t.result)),s()},u=()=>{o(t.error),s()};t.addEventListener('success',c),t.addEventListener('error',u)});return u.set(n,t),n}function l(t){if(s.has(t))return;const n=new Promise((n,o)=>{const s=()=>{t.removeEventListener('complete',c),t.removeEventListener('error',u),t.removeEventListener('abort',u)},c=()=>{n(),s()},u=()=>{o(t.error||new DOMException('AbortError','AbortError')),s()};t.addEventListener('complete',c),t.addEventListener('error',u),t.addEventListener('abort',u)});s.set(t,n)}let p={get(t,n,o){if(t instanceof IDBTransaction){if('done'===n)return s.get(t);if('store'===n)return o.objectStoreNames[1]?void 0:o.objectStore(o.objectStoreNames[0])}return y(t[n])},set:(t,n,o)=>(t[n]=o,!0),has:(t,n)=>t instanceof IDBTransaction&&('done'===n||'store'===n)||n in t};function b(t){p=t(p)}function D(s){return'function'==typeof s?(c=s,(o||(o=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(c)?function(...t){return c.apply(I(this),t),y(this.request)}:function(...t){return y(c.apply(I(this),t))}):(s instanceof IDBTransaction&&l(s),t(s,n||(n=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(s,p):s);var c}function y(t){if(t instanceof IDBRequest)return f(t);if(c.has(t))return c.get(t);const n=D(t);return n!==t&&(c.set(t,n),u.set(n,t)),n}const I=t=>u.get(t);function v(t,n,{blocked:o,upgrade:s,blocking:c,terminated:u}={}){const f=indexedDB.open(t,n),l=y(f);return s&&f.addEventListener('upgradeneeded',t=>{s(y(f.result),t.oldVersion,t.newVersion,y(f.transaction),t)}),o&&f.addEventListener('blocked',t=>o(t.oldVersion,t.newVersion,t)),l.then(t=>{u&&t.addEventListener('close',()=>u()),c&&t.addEventListener('versionchange',t=>c(t.oldVersion,t.newVersion,t))}).catch(()=>{}),l}function B(t,{blocked:n}={}){const o=indexedDB.deleteDatabase(t);return n&&o.addEventListener('blocked',t=>n(t.oldVersion,t)),y(o).then(()=>{})}const w=['get','getKey','getAll','getAllKeys','count'],h=['put','add','delete','clear'],E=new Map;function L(t,n){if(!(t instanceof IDBDatabase)||n in t||'string'!=typeof n)return;if(E.get(n))return E.get(n);const o=n.replace(/FromIndex$/,''),s=n!==o,c=h.includes(o);if(!(o in(s?IDBIndex:IDBObjectStore).prototype)||!c&&!w.includes(o))return;const u=async function(t,...n){const u=this.transaction(t,c?'readwrite':'readonly');let f=u.store;return s&&(f=f.index(n.shift())),(await Promise.all([f[o](...n),c&&u.done]))[0]};return E.set(n,u),u}b(t=>({...t,get:(n,o,s)=>L(n,o)||t.get(n,o,s),has:(n,o)=>!!L(n,o)||t.has(n,o)}));const j=['continue','continuePrimaryKey','advance'],P={},x=new WeakMap,k=new WeakMap,O={get(t,n){if(!j.includes(n))return t[n];let o=P[n];return o||(o=P[n]=function(...t){x.set(this,k.get(this)[n](...t))}),o}};async function*M(...t){let n=this;if(n instanceof IDBCursor||(n=await n.openCursor(...t)),!n)return;const o=new Proxy(n,O);for(k.set(o,n),u.set(o,I(n));n;)yield o,n=await(x.get(o)||n.continue()),x.delete(o)}function S(n,o){return o===Symbol.asyncIterator&&t(n,[IDBIndex,IDBObjectStore,IDBCursor])||'iterate'===o&&t(n,[IDBIndex,IDBObjectStore])}b(t=>({...t,get:(n,o,s)=>S(n,o)?M:t.get(n,o,s),has:(n,o)=>S(n,o)||t.has(n,o)}))},1461,[]);
__d(function(g,r,i,a,m,e,_d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.subscribeChecklistsConfig=function(c,n){const o=(0,s.doc)(t.db,'users',c,'data','config');return(0,s.onSnapshot)(o,s=>{if(s.exists()){const t=s.data().checklists.map(s=>'string'==typeof s?s:s.id);n(t)}else n(null)})},e.saveChecklistsConfig=async function(c,n){const o=(0,s.doc)(t.db,'users',c,'data','config');await(0,s.setDoc)(o,{checklists:n})},e.subscribeChecklistIds=function(c,n){const o=(0,s.collection)(t.db,'users',c,'checklists');return(0,s.onSnapshot)(o,s=>{n(s.docs.map(s=>({id:s.id,label:s.data().label})))})},e.subscribeChecklistData=function(c,n,o){const l=(0,s.doc)(t.db,'users',c,'checklists',n);return(0,s.onSnapshot)(l,s=>{s.exists()?o(s.data()):o(null)})},e.saveChecklistData=async function(c,n,o){const l=(0,s.doc)(t.db,'users',c,'checklists',n);await(0,s.setDoc)(l,o,{merge:!0})},e.saveChecklistLabel=async function(c,n,o){const l=(0,s.doc)(t.db,'users',c,'checklists',n);await(0,s.setDoc)(l,{label:o},{merge:!0})},e.deleteChecklistData=async function(c,n){const o=(0,s.doc)(t.db,'users',c,'checklists',n);await(0,s.deleteDoc)(o)};var s=r(_d[0]),t=r(_d[1])},1462,[1648,1318]);
__d(function(g,r,i,a,m,_e,d){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(_e,'__esModule',{value:!0}),_e.NavigationBar=function({checklists:e,activeChecklistId:c,isEditMode:j,user:C,stats:v,onNavChange:T,onAddChecklist:B,onUpdateChecklistName:S,onSignOut:z,onEdit:w,onResetOrDelete:k}){const R=(0,h.useSafeAreaInsets)(),W=(0,t.useRef)(null),[I,P]=(0,t.useState)(!1),[A,O]=(0,t.useState)(!1),[H,L]=(0,t.useState)(!1),V=e.find(e=>e.id===c);return(0,t.useEffect)(()=>{const t=e.findIndex(e=>e.id===c);t>=0&&W.current&&W.current.scrollTo({x:110*t,animated:!0})},[c,e]),(0,x.jsxs)(n.default,{style:[y.container,p,{paddingTop:R.top}],children:[(0,x.jsxs)(n.default,{style:y.topRow,children:[j?(0,x.jsx)(l.default,{style:y.renameTouchable,onPress:()=>L(!0),children:(0,x.jsx)(o.default,{style:y.renameText,numberOfLines:1,children:V?.label??''})}):(0,x.jsxs)(s.default,{ref:W,horizontal:!0,showsHorizontalScrollIndicator:!1,style:y.tabScroll,contentContainerStyle:y.tabContent,children:[e.map(e=>(0,x.jsx)(l.default,{style:[y.tab,e.id===c&&y.tabActive],onPress:()=>T(e.id),children:(0,x.jsx)(o.default,{style:[y.tabText,e.id===c&&y.tabTextActive],numberOfLines:1,children:e.label})},e.id)),(0,x.jsx)(l.default,{style:y.addTabBtn,onPress:()=>O(!0),children:(0,x.jsx)(o.default,{style:y.addTabText,children:"\uff0b"})})]}),!j&&(0,x.jsx)(l.default,{style:y.avatarBtn,onPress:()=>P(!0),children:C.photoURL?(0,x.jsx)(u.default,{source:{uri:C.photoURL},style:y.avatar}):(0,x.jsx)(n.default,{style:y.avatarFallback,children:(0,x.jsx)(o.default,{style:y.avatarText,children:(C.displayName??C.email??'?')[0].toUpperCase()})})})]}),(0,x.jsxs)(n.default,{style:y.actionBar,children:[(0,x.jsxs)(o.default,{style:y.progress,children:[v.completedCount," / ",v.totalCount," \u5b8c\u4e86"]}),(0,x.jsxs)(n.default,{style:y.btnGroup,children:[(0,x.jsx)(l.default,{style:[y.editBtn,j&&y.editBtnActive],onPress:w,children:(0,x.jsx)(o.default,{style:[y.editBtnText,j&&y.editBtnTextActive],children:j?'\u7de8\u96c6\u5b8c\u4e86':'\u9805\u76ee\u3092\u7de8\u96c6'})}),(0,x.jsx)(l.default,{style:[y.resetBtn,j&&y.deleteListBtn,j&&e.length<=1&&y.disabledBtn],onPress:k,disabled:j&&e.length<=1,children:(0,x.jsx)(o.default,{style:y.resetBtnText,children:j?'\u30ea\u30b9\u30c8\u3092\u524a\u9664':'\u3059\u3079\u3066\u30ea\u30bb\u30c3\u30c8'})})]})]}),(0,x.jsx)(f.default,{visible:I,transparent:!0,animationType:"fade",onRequestClose:()=>P(!1),children:(0,x.jsx)(l.default,{style:y.menuOverlay,onPress:()=>P(!1),children:(0,x.jsxs)(n.default,{style:y.menu,children:[(0,x.jsx)(o.default,{style:y.menuEmail,numberOfLines:1,children:C.email??C.displayName}),(0,x.jsx)(n.default,{style:y.menuDivider}),(0,x.jsx)(l.default,{style:y.menuSignout,onPress:()=>{P(!1),z()},children:(0,x.jsx)(o.default,{style:y.menuSignoutText,children:"\u30ed\u30b0\u30a2\u30a6\u30c8"})})]})})}),(0,x.jsx)(b.PromptModal,{visible:A,title:"\u65b0\u3057\u3044\u30c1\u30a7\u30c3\u30af\u30ea\u30b9\u30c8\u306e\u540d\u524d\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044",placeholder:"\u30c1\u30a7\u30c3\u30af\u30ea\u30b9\u30c8\u540d",onConfirm:e=>{B(e),O(!1)},onCancel:()=>O(!1)}),(0,x.jsx)(b.PromptModal,{visible:H,title:"\u30c1\u30a7\u30c3\u30af\u30ea\u30b9\u30c8\u540d\u3092\u5909\u66f4",defaultValue:V?.label??'',onConfirm:e=>{c&&S(c,e),L(!1)},onCancel:()=>L(!1)})]})};var t=r(d[0]),n=e(r(d[1])),o=e(r(d[2])),l=e(r(d[3])),s=e(r(d[4])),c=e(r(d[5])),u=e(r(d[6])),f=e(r(d[7]));r(d[8]);var h=r(d[9]),b=r(d[10]),x=r(d[11]);const p={position:'sticky',top:0};const y=c.default.create({container:{backgroundColor:'white',zIndex:100},topRow:{flexDirection:'row',alignItems:'center',paddingHorizontal:8,paddingVertical:4},tabScroll:{flex:1},tabContent:{alignItems:'center',gap:8,paddingHorizontal:4},tab:{paddingVertical:8,paddingHorizontal:16,borderRadius:10,minWidth:90,alignItems:'center'},tabActive:{backgroundColor:'#f0f3ff'},tabText:{fontSize:14,fontWeight:'500',color:'#6c757d'},tabTextActive:{color:'#667eea'},addTabBtn:{paddingVertical:8,paddingHorizontal:16,minWidth:50,alignItems:'center'},addTabText:{fontSize:22,fontWeight:'700',color:'#667eea'},avatarBtn:{marginLeft:8,padding:4},avatar:{width:32,height:32,borderRadius:16,borderWidth:2,borderColor:'#667eea'},avatarFallback:{width:32,height:32,borderRadius:16,backgroundColor:'#667eea',justifyContent:'center',alignItems:'center'},avatarText:{color:'white',fontSize:14,fontWeight:'600'},renameTouchable:{flex:1,paddingVertical:8,paddingHorizontal:12,borderWidth:2,borderColor:'#667eea',borderRadius:10,margin:4},renameText:{fontSize:15,fontWeight:'600',color:'#333'},actionBar:{flexDirection:'row',alignItems:'center',paddingHorizontal:16,paddingVertical:8,borderTopWidth:1,borderTopColor:'#f0f0f0',gap:8},progress:{fontSize:14,fontWeight:'700',color:'#667eea',flexShrink:0},btnGroup:{flex:1,flexDirection:'row',justifyContent:'flex-end',gap:8},editBtn:{paddingVertical:6,paddingHorizontal:12,borderRadius:8,borderWidth:1.5,borderColor:'#667eea',backgroundColor:'#f0f0f0'},editBtnActive:{backgroundColor:'#667eea'},editBtnText:{fontSize:13,color:'#667eea',fontWeight:'500'},editBtnTextActive:{color:'white'},resetBtn:{paddingVertical:6,paddingHorizontal:12,borderRadius:8,backgroundColor:'#667eea'},deleteListBtn:{backgroundColor:'#dc3545'},disabledBtn:{opacity:.4},resetBtnText:{fontSize:13,color:'white',fontWeight:'500'},menuOverlay:{flex:1,backgroundColor:'rgba(0,0,0,0.3)',justifyContent:'flex-start',alignItems:'flex-end',paddingTop:80,paddingRight:16},menu:{backgroundColor:'white',borderRadius:12,minWidth:200,shadowColor:'#000',shadowOffset:{width:0,height:4},shadowOpacity:.15,shadowRadius:12,elevation:10,overflow:'hidden'},menuEmail:{padding:16,fontSize:13,color:'#888'},menuDivider:{height:1,backgroundColor:'#f0f0f0'},menuSignout:{padding:16},menuSignoutText:{fontSize:15,color:'#dc3545'}})},1463,[39,176,248,288,199,104,240,296,29,1601,1464,2]);
__d(function(g,r,i,a,m,_e,d){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(_e,'__esModule',{value:!0}),_e.PromptModal=function({visible:e,title:c,defaultValue:b="",placeholder:p,onConfirm:y,onCancel:j}){const[v,C]=(0,t.useState)(b),T=(0,t.useRef)(null),[S,z]=(0,t.useState)({visible:e,defaultValue:b});S.visible===e&&S.defaultValue===b||(z({visible:e,defaultValue:b}),e&&C(b));(0,t.useEffect)(()=>{e&&setTimeout(()=>T.current?.focus(),100)},[e,b]);const B=()=>{const e=v.trim();e&&y(e)};return(0,h.jsx)(n.default,{visible:e,transparent:!0,animationType:"fade",onRequestClose:j,children:(0,h.jsx)(l.default,{style:x.overlay,children:(0,h.jsx)(f.default,{behavior:void 0,children:(0,h.jsxs)(l.default,{style:x.dialog,children:[(0,h.jsx)(o.default,{style:x.title,children:c}),(0,h.jsx)(s.default,{ref:T,style:x.input,value:v,onChangeText:C,placeholder:p,onSubmitEditing:B,returnKeyType:"done"}),(0,h.jsxs)(l.default,{style:x.buttons,children:[(0,h.jsx)(u.default,{style:x.cancelBtn,onPress:j,children:(0,h.jsx)(o.default,{style:x.cancelText,children:"\u30ad\u30e3\u30f3\u30bb\u30eb"})}),(0,h.jsx)(u.default,{style:x.confirmBtn,onPress:B,children:(0,h.jsx)(o.default,{style:x.confirmText,children:"OK"})})]})]})})})})};var t=r(d[0]),n=e(r(d[1])),l=e(r(d[2])),o=e(r(d[3])),s=e(r(d[4])),u=e(r(d[5])),c=e(r(d[6])),f=e(r(d[7]));r(d[8]);var h=r(d[9]);const x=c.default.create({overlay:{flex:1,backgroundColor:'rgba(0,0,0,0.5)',justifyContent:'center',alignItems:'center',padding:20},dialog:{backgroundColor:'white',borderRadius:16,padding:24,width:'100%',maxWidth:400},title:{fontSize:17,fontWeight:'600',color:'#333',marginBottom:16},input:{borderWidth:2,borderColor:'#667eea',borderRadius:10,padding:10,fontSize:16,marginBottom:16,color:'#333'},buttons:{flexDirection:'row',justifyContent:'flex-end',gap:12},cancelBtn:{paddingVertical:8,paddingHorizontal:16},cancelText:{fontSize:16,color:'#666'},confirmBtn:{backgroundColor:'#667eea',borderRadius:8,paddingVertical:8,paddingHorizontal:16},confirmText:{fontSize:16,color:'white',fontWeight:'600'}})},1464,[39,296,176,248,313,288,104,295,29,2]);
__d(function(g,r,i,a,m,_e,d){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(_e,'__esModule',{value:!0}),Object.defineProperty(_e,"Checklist",{enumerable:!0,get:function(){return p}});var t=r(d[0]),n=e(r(d[1])),l=e(r(d[2])),o=e(r(d[3])),s=e(r(d[4])),c=e(r(d[5])),u=r(d[6]),f=r(d[7]),h=r(d[8]),C=r(d[9]),b=r(d[10]);const p=(0,t.forwardRef)(({checklist:e,user:s,isActive:p,isEditMode:v,onStatsChange:x},y)=>{const[I,S]=(0,t.useState)(!1),[j,M]=(0,t.useState)(null),{items:_,checkedState:B,handleCheck:D,handleReset:E,updateItems:P,addItem:R,updateItemLabel:A,deleteItem:F,stopFirestoreSync:L}=(0,u.useChecklist)({checklistId:e.id,label:e.label,initialItems:e.initialItems,uid:s.uid,isActive:p,onStatsChange:x});(0,t.useImperativeHandle)(y,()=>({handleReset:E,stopFirestoreSync:L}),[E,L]);const T=(0,t.useCallback)(({item:e,drag:t,isActive:n})=>(0,b.jsx)(f.ChecklistItem,{id:e.id,label:e.label,checked:!!B[e.id],isEditMode:v,isDragging:n,drag:v?t:void 0,onCheck:()=>D(e.id),onDelete:()=>M(e),onUpdateLabel:t=>A(e.id,t)}),[B,v,D,A]);return(0,b.jsxs)(n.default,{style:k.container,children:[(0,b.jsx)(c.default,{data:_,keyExtractor:e=>e.id,renderItem:T,onDragEnd:({data:e})=>P(e),activationDistance:v?1:1e3,contentContainerStyle:k.listContent,ListFooterComponent:v?(0,b.jsx)(l.default,{style:k.addBtn,onPress:()=>S(!0),children:(0,b.jsx)(o.default,{style:k.addBtnText,children:"\uff0b \u65b0\u3057\u3044\u9805\u76ee\u3092\u8ffd\u52a0"})}):void 0}),(0,b.jsx)(h.PromptModal,{visible:I,title:"\u65b0\u3057\u3044\u9805\u76ee\u3092\u8ffd\u52a0",placeholder:"\u9805\u76ee\u540d\u3092\u5165\u529b",onConfirm:e=>{R(e),S(!1)},onCancel:()=>S(!1)}),(0,b.jsx)(C.ConfirmModal,{visible:null!==j,title:"\u9805\u76ee\u3092\u524a\u9664",message:j?`\u300c${j.label}\u300d\u3092\u524a\u9664\u3057\u307e\u3059\u304b\uff1f`:void 0,onConfirm:()=>{j&&F(j.id),M(null)},onCancel:()=>M(null)})]})});p.displayName='Checklist';const k=s.default.create({container:{flex:1},listContent:{padding:16,paddingBottom:32},addBtn:{borderWidth:2,borderStyle:'dashed',borderColor:'#667eea',borderRadius:10,paddingVertical:12,alignItems:'center',marginTop:4,backgroundColor:'#f8f9fa'},addBtnText:{color:'#667eea',fontSize:16,fontWeight:'500'}})},1465,[39,176,288,248,104,1653,1499,1500,1464,1526,2]);
__d(function(g,r,_i,a,m,_e,d){"use strict";Object.defineProperty(_e,'__esModule',{value:!0}),_e.useChecklist=function({checklistId:e,label:s,initialItems:n,uid:u,isActive:i,onStatsChange:o}){const[f,h]=(0,t.useState)([]),[I,b]=(0,t.useState)({}),k=(0,t.useRef)(!1),p=(0,t.useRef)(!1),C=(0,t.useRef)(''),w=(0,t.useRef)(!1),$=(0,t.useRef)(null),S=(0,t.useRef)(null),y=(0,t.useRef)(f),O=(0,t.useRef)(I);(0,t.useLayoutEffect)(()=>{y.current=f,O.current=I});const v=(0,t.useCallback)(()=>`${u??'guest'}-${e}`,[u,e]),J=(0,t.useCallback)(e=>{const t=(e.customItems??[]).map(e=>({id:e.id,label:e.label}));return JSON.stringify({customItems:t,checkedItems:e.checkedItems??{}})},[]),N=(0,t.useCallback)(async()=>{const e=await l.default.getItem(`${v()}-deleted-initial-ids`),t=e?JSON.parse(e):[];return{customItems:[...y.current],checkedItems:{...O.current},...t.length>0?{deletedInitialIds:t}:{}}},[v]),R=(0,t.useCallback)(()=>{u&&p.current&&($.current&&clearTimeout($.current),$.current=setTimeout(async()=>{if($.current=null,!u)return;const t=await N(),s=J(t);if(s!==C.current){k.current=!0;try{await(0,c.saveChecklistData)(u,e,t),C.current=s}catch(e){console.error('Firestore save failed:',e)}finally{k.current=!1}}},500))},[u,e,N,J]),E=(0,t.useCallback)(async e=>{await l.default.setItem(`${v()}-custom-items`,JSON.stringify(e)),await l.default.setItem(`${v()}-order`,JSON.stringify(e.map(e=>e.id)))},[v]),_=(0,t.useCallback)(async e=>{for(const[t,s]of Object.entries(e))await l.default.setItem(`${v()}-${t}`,String(s))},[v]),j=(0,t.useCallback)(async e=>{const t=e,s=new Set(t.deletedInitialIds??[]),c=t.customLabels??{},u=new Set(e.customItems.map(e=>e.id)),i=e.customItems.map(e=>({...e,label:c[e.id]??e.label}));for(const e of n)s.has(e.id)||u.has(e.id)||i.push({id:e.id,label:c[e.id]??e.label});let o;if(t.order&&t.order.length>0){const e=new Map(i.map(e=>[e.id,e]));o=[],t.order.forEach(t=>{e.has(t)&&o.push(e.get(t))}),i.forEach(e=>{t.order.includes(e.id)||o.push(e)})}else o=i;h(o),b({...e.checkedItems}),await E(o),await _(e.checkedItems),t.deletedInitialIds&&t.deletedInitialIds.length>0&&await l.default.setItem(`${v()}-deleted-initial-ids`,JSON.stringify(t.deletedInitialIds))},[n,v,E,_]),L=(0,t.useCallback)(()=>{w.current=!0,S.current&&(S.current(),S.current=null),$.current&&(clearTimeout($.current),$.current=null)},[]),M=(0,t.useCallback)(()=>{u&&(L(),w.current=!1,S.current=(0,c.subscribeChecklistData)(u,e,t=>{if(!k.current)if(p.current=!0,t){const l=J(t);if(l===C.current)return;if(null!==$.current)return;C.current=l,j(t),!t.label&&s&&u&&(0,c.saveChecklistLabel)(u,e,s).catch(console.error)}else w.current||(R(),u&&s&&(0,c.saveChecklistLabel)(u,e,s).catch(console.error))}))},[u,e,s,L,J,j,R]);(0,t.useEffect)(()=>{let e=!1;return(async()=>{const t=await l.default.getItem(`${v()}-custom-items`),s=t?JSON.parse(t):[],c=new Set(s.map(e=>e.id)),u=await l.default.getItem(`${v()}-deleted-initial-ids`),i=u?new Set(JSON.parse(u)):new Set,o=n.filter(e=>!c.has(e.id)&&!i.has(e.id)).map(e=>({id:e.id,label:e.label}));let f=s;o.length>0&&(f=[...s,...o],await l.default.setItem(`${v()}-custom-items`,JSON.stringify(f)));const I=await l.default.getItem(`${v()}-order`);let k=f;if(I){const e=JSON.parse(I),t=new Map(f.map(e=>[e.id,e])),s=[];e.forEach(e=>{t.has(e)&&s.push(t.get(e))}),f.forEach(t=>{e.includes(t.id)||s.push(t)}),k=s}const p={};for(const e of k){const t=await l.default.getItem(`${v()}-${e.id}`);p[e.id]='true'===t}e||(h(k),b(p))})().then(()=>{!e&&u&&M()}),()=>{e=!0,L()}},[u,e]),(0,t.useEffect)(()=>{if(!i)return;const e=Object.values(I).filter(Boolean).length;o?.({completedCount:e,totalCount:f.length})},[f.length,I,i,o]);const D=(0,t.useCallback)(e=>{b(t=>{const s={...t,[e]:!t[e]};return l.default.setItem(`${v()}-${e}`,String(s[e])).catch(console.error),R(),s})},[v,R]),T=(0,t.useCallback)(()=>{b(e=>{const t={};for(const s of Object.keys(e))t[s]=!1,l.default.removeItem(`${v()}-${s}`).catch(console.error);return R(),t})},[v,R]),B=(0,t.useCallback)(e=>{h(e),E(e).catch(console.error),R()},[E,R]),F=(0,t.useCallback)(t=>{const s=`${e}-custom-${Date.now()}`,l={id:s,label:t};h(e=>{const t=[...e,l];return E(t).catch(console.error),R(),t}),b(e=>({...e,[s]:!1}))},[e,E,R]),A=(0,t.useCallback)((e,t)=>{h(s=>{const l=s.map(s=>s.id===e?{...s,label:t}:s);return E(l).catch(console.error),R(),l})},[E,R]),P=(0,t.useCallback)(async e=>{if(n.some(t=>t.id===e)){const t=await l.default.getItem(`${v()}-deleted-initial-ids`),s=t?JSON.parse(t):[];s.includes(e)||(s.push(e),await l.default.setItem(`${v()}-deleted-initial-ids`,JSON.stringify(s)))}h(t=>{const s=t.filter(t=>t.id!==e);return E(s).catch(console.error),R(),s}),b(t=>{const s={...t};return delete s[e],l.default.removeItem(`${v()}-${e}`).catch(console.error),s})},[n,v,E,R]),q=Object.values(I).filter(Boolean).length;return{items:f,checkedState:I,completedCount:q,totalCount:f.length,handleCheck:D,handleReset:T,updateItems:B,addItem:F,updateItemLabel:A,deleteItem:P,stopFirestoreSync:L}};var e,t=r(d[0]),s=r(d[1]),l=(e=s)&&e.__esModule?e:{default:e},c=r(d[2])},1499,[39,1456,1462]);
__d(function(g,r,i,a,m,_e,d){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(_e,'__esModule',{value:!0}),_e.ChecklistItem=function({label:e,checked:s,isEditMode:c,isDragging:h,drag:y,onCheck:b,onDelete:p,onUpdateLabel:C}){const[L,w]=(0,t.useState)(!1),M=[j.item,s&&j.itemChecked,h&&j.itemDragging],v=(0,f.jsx)(u.PromptModal,{visible:L,title:"\u9805\u76ee\u540d\u3092\u7de8\u96c6",defaultValue:e,onConfirm:e=>{C(e),w(!1)},onCancel:()=>w(!1)});if(c)return(0,f.jsxs)(n.default,{style:M,children:[(0,f.jsx)(l.default,{onPressIn:y,style:j.dragHandle,children:(0,f.jsx)(o.default,{style:j.dragIcon,children:"\u283f"})}),(0,f.jsx)(o.default,{style:[j.label,s&&j.labelChecked],numberOfLines:2,children:e}),(0,f.jsxs)(n.default,{style:j.editActions,children:[(0,f.jsx)(l.default,{style:j.iconBtn,onPress:()=>w(!0),children:(0,f.jsx)(k,{size:20,color:"#667eea"})}),(0,f.jsx)(l.default,{style:j.iconBtn,onPress:p,children:(0,f.jsx)(x,{size:20,color:"#dc3545"})})]}),v]});return(0,f.jsxs)(l.default,{style:M,onPress:b,activeOpacity:.7,children:[(0,f.jsx)(o.default,{style:[j.label,s&&j.labelChecked],numberOfLines:2,children:e}),(0,f.jsx)(n.default,{style:j.checkBtn,children:s?(0,f.jsx)(o.default,{style:j.checkMark,children:"\u2713"}):(0,f.jsx)(n.default,{style:j.emptyCheck})}),v]})};var t=r(d[0]),n=e(r(d[1])),o=e(r(d[2])),l=e(r(d[3])),s=e(r(d[4])),c=r(d[5]),h=e(c),u=r(d[6]),f=r(d[7]);function k({size:e=20,color:t="#667eea"}){return(0,f.jsx)(h.default,{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:(0,f.jsx)(c.Path,{d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125",stroke:t,strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"})})}function x({size:e=20,color:t="#dc3545"}){return(0,f.jsxs)(h.default,{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[(0,f.jsx)(c.Path,{d:"M3 6h18M8 6V4a1 1 0 011-1h6a1 1 0 011 1v2M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6",stroke:t,strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"}),(0,f.jsx)(c.Path,{d:"M10 11v6M14 11v6",stroke:t,strokeWidth:1.8,strokeLinecap:"round"})]})}const j=s.default.create({item:{flexDirection:'row',alignItems:'center',paddingVertical:10,paddingHorizontal:12,marginBottom:6,backgroundColor:'#f8f9fa',borderRadius:10,minHeight:48},itemChecked:{backgroundColor:'#d4edda',opacity:.7},itemDragging:{opacity:.9,shadowColor:'#000',shadowOffset:{width:0,height:4},shadowOpacity:.3,shadowRadius:8,elevation:8},dragHandle:{paddingRight:8},dragIcon:{fontSize:20,lineHeight:20,color:'#aaa'},label:{flex:1,fontSize:16,color:'#333'},labelChecked:{textDecorationLine:'line-through',color:'#6c757d'},checkBtn:{width:28,height:28,marginLeft:12,justifyContent:'center',alignItems:'center'},checkMark:{fontSize:20,color:'#667eea',fontWeight:'700'},emptyCheck:{width:22,height:22,borderRadius:11,borderWidth:2,borderColor:'#ccc'},editActions:{flexDirection:'row',gap:4,marginLeft:8},iconBtn:{padding:4}})},1500,[39,176,248,288,104,1676,1464,2]);
__d(function(g,r,i,a,m,e,d){m.exports=r(d[0])},1518,[1519]);
__d(function(g,r,i,a,m,e,d){"use strict";e.__esModule=!0,e.default=void 0;var t=r(d[0]),s={registerAsset:t.registerAsset,getAssetByID:t.getAssetByID};e.default=s;m.exports=e.default},1519,[1520]);
__d(function(g,r,i,a,m,e,d){"use strict";e.__esModule=!0,e.getAssetByID=function(t){return s[t-1]},e.registerAsset=function(t){return s.push(t)};var t='undefined'!=typeof globalThis?globalThis:void 0!==g?g:'undefined'!=typeof window?window:{},n=Symbol.for('react-native-web.AssetRegistry');t[n]||(t[n]=[]);var s=t[n]},1520,[]);
__d(function(g,r,i,a,m,_e,d){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(_e,'__esModule',{value:!0}),_e.ConfirmModal=function({visible:e,title:s,message:u,confirmLabel:x="\u524a\u9664",onConfirm:h,onCancel:y}){return(0,c.jsx)(t.default,{visible:e,transparent:!0,animationType:"fade",onRequestClose:y,children:(0,c.jsx)(n.default,{style:f.overlay,children:(0,c.jsxs)(n.default,{style:f.dialog,children:[(0,c.jsx)(l.default,{style:f.title,children:s}),u?(0,c.jsx)(l.default,{style:f.message,children:u}):null,(0,c.jsxs)(n.default,{style:f.buttons,children:[(0,c.jsx)(o.default,{style:f.cancelBtn,onPress:y,children:(0,c.jsx)(l.default,{style:f.cancelText,children:"\u30ad\u30e3\u30f3\u30bb\u30eb"})}),(0,c.jsx)(o.default,{style:f.confirmBtn,onPress:h,children:(0,c.jsx)(l.default,{style:f.confirmText,children:x})})]})]})})})},r(d[0]);var t=e(r(d[1])),n=e(r(d[2])),l=e(r(d[3])),o=e(r(d[4])),s=e(r(d[5])),c=r(d[6]);const f=s.default.create({overlay:{flex:1,backgroundColor:'rgba(0,0,0,0.5)',justifyContent:'center',alignItems:'center',padding:20},dialog:{backgroundColor:'white',borderRadius:16,padding:24,width:'100%',maxWidth:400},title:{fontSize:17,fontWeight:'600',color:'#333',marginBottom:8},message:{fontSize:14,color:'#666',marginBottom:20,lineHeight:20},buttons:{flexDirection:'row',justifyContent:'flex-end',gap:12},cancelBtn:{paddingVertical:8,paddingHorizontal:16},cancelText:{fontSize:16,color:'#666'},confirmBtn:{backgroundColor:'#dc3545',borderRadius:8,paddingVertical:8,paddingHorizontal:16},confirmText:{fontSize:16,color:'white',fontWeight:'600'}})},1526,[39,296,176,248,288,104,2]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});var t=r(d[0]);Object.keys(t).forEach(function(n){'default'===n||Object.prototype.hasOwnProperty.call(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[n]}})})},1637,[1638]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),Object.defineProperty(e,"ActionCodeOperation",{enumerable:!0,get:function(){return t.A}}),Object.defineProperty(e,"ActionCodeURL",{enumerable:!0,get:function(){return t.aj}}),Object.defineProperty(e,"AuthCredential",{enumerable:!0,get:function(){return t.M}}),Object.defineProperty(e,"AuthErrorCodes",{enumerable:!0,get:function(){return t.J}}),Object.defineProperty(e,"EmailAuthCredential",{enumerable:!0,get:function(){return t.N}}),Object.defineProperty(e,"EmailAuthProvider",{enumerable:!0,get:function(){return t.W}}),Object.defineProperty(e,"FacebookAuthProvider",{enumerable:!0,get:function(){return t.X}}),Object.defineProperty(e,"FactorId",{enumerable:!0,get:function(){return t.F}}),Object.defineProperty(e,"GithubAuthProvider",{enumerable:!0,get:function(){return t.Z}}),Object.defineProperty(e,"GoogleAuthProvider",{enumerable:!0,get:function(){return t.Y}}),Object.defineProperty(e,"OAuthCredential",{enumerable:!0,get:function(){return t.Q}}),Object.defineProperty(e,"OAuthProvider",{enumerable:!0,get:function(){return t._}}),Object.defineProperty(e,"OperationType",{enumerable:!0,get:function(){return t.O}}),Object.defineProperty(e,"PhoneAuthCredential",{enumerable:!0,get:function(){return t.U}}),Object.defineProperty(e,"PhoneAuthProvider",{enumerable:!0,get:function(){return t.P}}),Object.defineProperty(e,"PhoneMultiFactorGenerator",{enumerable:!0,get:function(){return t.n}}),Object.defineProperty(e,"ProviderId",{enumerable:!0,get:function(){return t.q}}),Object.defineProperty(e,"RecaptchaVerifier",{enumerable:!0,get:function(){return t.R}}),Object.defineProperty(e,"SAMLAuthProvider",{enumerable:!0,get:function(){return t.$}}),Object.defineProperty(e,"SignInMethod",{enumerable:!0,get:function(){return t.S}}),Object.defineProperty(e,"TotpMultiFactorGenerator",{enumerable:!0,get:function(){return t.T}}),Object.defineProperty(e,"TotpSecret",{enumerable:!0,get:function(){return t.o}}),Object.defineProperty(e,"TwitterAuthProvider",{enumerable:!0,get:function(){return t.a0}}),Object.defineProperty(e,"applyActionCode",{enumerable:!0,get:function(){return t.a8}}),Object.defineProperty(e,"beforeAuthStateChanged",{enumerable:!0,get:function(){return t.y}}),Object.defineProperty(e,"browserCookiePersistence",{enumerable:!0,get:function(){return t.a}}),Object.defineProperty(e,"browserLocalPersistence",{enumerable:!0,get:function(){return t.b}}),Object.defineProperty(e,"browserPopupRedirectResolver",{enumerable:!0,get:function(){return t.m}}),Object.defineProperty(e,"browserSessionPersistence",{enumerable:!0,get:function(){return t.c}}),Object.defineProperty(e,"checkActionCode",{enumerable:!0,get:function(){return t.a9}}),Object.defineProperty(e,"confirmPasswordReset",{enumerable:!0,get:function(){return t.a7}}),Object.defineProperty(e,"connectAuthEmulator",{enumerable:!0,get:function(){return t.L}}),Object.defineProperty(e,"createUserWithEmailAndPassword",{enumerable:!0,get:function(){return t.ab}}),Object.defineProperty(e,"debugErrorMap",{enumerable:!0,get:function(){return t.H}}),Object.defineProperty(e,"deleteUser",{enumerable:!0,get:function(){return t.G}}),Object.defineProperty(e,"fetchSignInMethodsForEmail",{enumerable:!0,get:function(){return t.ag}}),Object.defineProperty(e,"getAdditionalUserInfo",{enumerable:!0,get:function(){return t.ar}}),Object.defineProperty(e,"getAuth",{enumerable:!0,get:function(){return t.p}}),Object.defineProperty(e,"getIdToken",{enumerable:!0,get:function(){return t.ao}}),Object.defineProperty(e,"getIdTokenResult",{enumerable:!0,get:function(){return t.ap}}),Object.defineProperty(e,"getMultiFactorResolver",{enumerable:!0,get:function(){return t.at}}),Object.defineProperty(e,"getRedirectResult",{enumerable:!0,get:function(){return t.k}}),Object.defineProperty(e,"inMemoryPersistence",{enumerable:!0,get:function(){return t.V}}),Object.defineProperty(e,"indexedDBLocalPersistence",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(e,"initializeAuth",{enumerable:!0,get:function(){return t.K}}),Object.defineProperty(e,"initializeRecaptchaConfig",{enumerable:!0,get:function(){return t.v}}),Object.defineProperty(e,"isSignInWithEmailLink",{enumerable:!0,get:function(){return t.ae}}),Object.defineProperty(e,"linkWithCredential",{enumerable:!0,get:function(){return t.a3}}),Object.defineProperty(e,"linkWithPhoneNumber",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(e,"linkWithPopup",{enumerable:!0,get:function(){return t.e}}),Object.defineProperty(e,"linkWithRedirect",{enumerable:!0,get:function(){return t.h}}),Object.defineProperty(e,"multiFactor",{enumerable:!0,get:function(){return t.au}}),Object.defineProperty(e,"onAuthStateChanged",{enumerable:!0,get:function(){return t.z}}),Object.defineProperty(e,"onIdTokenChanged",{enumerable:!0,get:function(){return t.x}}),Object.defineProperty(e,"parseActionCodeURL",{enumerable:!0,get:function(){return t.ak}}),Object.defineProperty(e,"prodErrorMap",{enumerable:!0,get:function(){return t.I}}),Object.defineProperty(e,"reauthenticateWithCredential",{enumerable:!0,get:function(){return t.a4}}),Object.defineProperty(e,"reauthenticateWithPhoneNumber",{enumerable:!0,get:function(){return t.r}}),Object.defineProperty(e,"reauthenticateWithPopup",{enumerable:!0,get:function(){return t.f}}),Object.defineProperty(e,"reauthenticateWithRedirect",{enumerable:!0,get:function(){return t.j}}),Object.defineProperty(e,"reload",{enumerable:!0,get:function(){return t.as}}),Object.defineProperty(e,"revokeAccessToken",{enumerable:!0,get:function(){return t.E}}),Object.defineProperty(e,"sendEmailVerification",{enumerable:!0,get:function(){return t.ah}}),Object.defineProperty(e,"sendPasswordResetEmail",{enumerable:!0,get:function(){return t.a6}}),Object.defineProperty(e,"sendSignInLinkToEmail",{enumerable:!0,get:function(){return t.ad}}),Object.defineProperty(e,"setPersistence",{enumerable:!0,get:function(){return t.t}}),Object.defineProperty(e,"signInAnonymously",{enumerable:!0,get:function(){return t.a1}}),Object.defineProperty(e,"signInWithCredential",{enumerable:!0,get:function(){return t.a2}}),Object.defineProperty(e,"signInWithCustomToken",{enumerable:!0,get:function(){return t.a5}}),Object.defineProperty(e,"signInWithEmailAndPassword",{enumerable:!0,get:function(){return t.ac}}),Object.defineProperty(e,"signInWithEmailLink",{enumerable:!0,get:function(){return t.af}}),Object.defineProperty(e,"signInWithPhoneNumber",{enumerable:!0,get:function(){return t.s}}),Object.defineProperty(e,"signInWithPopup",{enumerable:!0,get:function(){return t.d}}),Object.defineProperty(e,"signInWithRedirect",{enumerable:!0,get:function(){return t.g}}),Object.defineProperty(e,"signOut",{enumerable:!0,get:function(){return t.D}}),Object.defineProperty(e,"unlink",{enumerable:!0,get:function(){return t.aq}}),Object.defineProperty(e,"updateCurrentUser",{enumerable:!0,get:function(){return t.C}}),Object.defineProperty(e,"updateEmail",{enumerable:!0,get:function(){return t.am}}),Object.defineProperty(e,"updatePassword",{enumerable:!0,get:function(){return t.an}}),Object.defineProperty(e,"updatePhoneNumber",{enumerable:!0,get:function(){return t.u}}),Object.defineProperty(e,"updateProfile",{enumerable:!0,get:function(){return t.al}}),Object.defineProperty(e,"useDeviceLanguage",{enumerable:!0,get:function(){return t.B}}),Object.defineProperty(e,"validatePassword",{enumerable:!0,get:function(){return t.w}}),Object.defineProperty(e,"verifyBeforeUpdateEmail",{enumerable:!0,get:function(){return t.ai}}),Object.defineProperty(e,"verifyPasswordResetCode",{enumerable:!0,get:function(){return t.aa}});var t=r(d[0]);r(d[1]),r(d[2]),r(d[3]),r(d[4])},1638,[1639,1640,1642,1644,1641]);
__d(function(e,t,n,r,i,s,o){"use strict";Object.defineProperty(s,'__esModule',{value:!0}),Object.defineProperty(s,"$",{enumerable:!0,get:function(){return Yt}}),Object.defineProperty(s,"A",{enumerable:!0,get:function(){return m}}),Object.defineProperty(s,"B",{enumerable:!0,get:function(){return er}}),Object.defineProperty(s,"C",{enumerable:!0,get:function(){return tr}}),Object.defineProperty(s,"D",{enumerable:!0,get:function(){return nr}}),Object.defineProperty(s,"E",{enumerable:!0,get:function(){return rr}}),Object.defineProperty(s,"F",{enumerable:!0,get:function(){return l}}),Object.defineProperty(s,"G",{enumerable:!0,get:function(){return ir}}),Object.defineProperty(s,"H",{enumerable:!0,get:function(){return I}}),Object.defineProperty(s,"I",{enumerable:!0,get:function(){return _}}),Object.defineProperty(s,"J",{enumerable:!0,get:function(){return v}}),Object.defineProperty(s,"K",{enumerable:!0,get:function(){return ut}}),Object.defineProperty(s,"L",{enumerable:!0,get:function(){return lt}}),Object.defineProperty(s,"M",{enumerable:!0,get:function(){return gt}}),Object.defineProperty(s,"N",{enumerable:!0,get:function(){return Ot}}),Object.defineProperty(s,"O",{enumerable:!0,get:function(){return f}}),Object.defineProperty(s,"P",{enumerable:!0,get:function(){return ui}}),Object.defineProperty(s,"Q",{enumerable:!0,get:function(){return Nt}}),Object.defineProperty(s,"R",{enumerable:!0,get:function(){return ei}}),Object.defineProperty(s,"S",{enumerable:!0,get:function(){return p}}),Object.defineProperty(s,"T",{enumerable:!0,get:function(){return _s}}),Object.defineProperty(s,"U",{enumerable:!0,get:function(){return jt}}),Object.defineProperty(s,"V",{enumerable:!0,get:function(){return Se}}),Object.defineProperty(s,"W",{enumerable:!0,get:function(){return qt}}),Object.defineProperty(s,"X",{enumerable:!0,get:function(){return Kt}}),Object.defineProperty(s,"Y",{enumerable:!0,get:function(){return $t}}),Object.defineProperty(s,"Z",{enumerable:!0,get:function(){return Bt}}),Object.defineProperty(s,"_",{enumerable:!0,get:function(){return Gt}}),Object.defineProperty(s,"a",{enumerable:!0,get:function(){return Tr}}),Object.defineProperty(s,"a0",{enumerable:!0,get:function(){return Xt}}),Object.defineProperty(s,"a1",{enumerable:!0,get:function(){return tn}}),Object.defineProperty(s,"a2",{enumerable:!0,get:function(){return ln}}),Object.defineProperty(s,"a3",{enumerable:!0,get:function(){return hn}}),Object.defineProperty(s,"a4",{enumerable:!0,get:function(){return pn}}),Object.defineProperty(s,"a5",{enumerable:!0,get:function(){return mn}}),Object.defineProperty(s,"a6",{enumerable:!0,get:function(){return Tn}}),Object.defineProperty(s,"a7",{enumerable:!0,get:function(){return En}}),Object.defineProperty(s,"a8",{enumerable:!0,get:function(){return wn}}),Object.defineProperty(s,"a9",{enumerable:!0,get:function(){return bn}}),Object.defineProperty(s,"aA",{enumerable:!0,get:function(){return Wi}}),Object.defineProperty(s,"aB",{enumerable:!0,get:function(){return Ve}}),Object.defineProperty(s,"aC",{enumerable:!0,get:function(){return P}}),Object.defineProperty(s,"aD",{enumerable:!0,get:function(){return R}}),Object.defineProperty(s,"aE",{enumerable:!0,get:function(){return Vi}}),Object.defineProperty(s,"aF",{enumerable:!0,get:function(){return Pe}}),Object.defineProperty(s,"aG",{enumerable:!0,get:function(){return ke}}),Object.defineProperty(s,"aH",{enumerable:!0,get:function(){return ji}}),Object.defineProperty(s,"aI",{enumerable:!0,get:function(){return Si}}),Object.defineProperty(s,"aJ",{enumerable:!0,get:function(){return Ai}}),Object.defineProperty(s,"aK",{enumerable:!0,get:function(){return $e}}),Object.defineProperty(s,"aL",{enumerable:!0,get:function(){return we}}),Object.defineProperty(s,"aM",{enumerable:!0,get:function(){return Ke}}),Object.defineProperty(s,"aN",{enumerable:!0,get:function(){return qe}}),Object.defineProperty(s,"aO",{enumerable:!0,get:function(){return Ar}}),Object.defineProperty(s,"aP",{enumerable:!0,get:function(){return ss}}),Object.defineProperty(s,"aQ",{enumerable:!0,get:function(){return V}}),Object.defineProperty(s,"aR",{enumerable:!0,get:function(){return Jt}}),Object.defineProperty(s,"aa",{enumerable:!0,get:function(){return Pn}}),Object.defineProperty(s,"ab",{enumerable:!0,get:function(){return An}}),Object.defineProperty(s,"ac",{enumerable:!0,get:function(){return Sn}}),Object.defineProperty(s,"ad",{enumerable:!0,get:function(){return kn}}),Object.defineProperty(s,"ae",{enumerable:!0,get:function(){return On}}),Object.defineProperty(s,"af",{enumerable:!0,get:function(){return Rn}}),Object.defineProperty(s,"ag",{enumerable:!0,get:function(){return Cn}}),Object.defineProperty(s,"ah",{enumerable:!0,get:function(){return Dn}}),Object.defineProperty(s,"ai",{enumerable:!0,get:function(){return Ln}}),Object.defineProperty(s,"aj",{enumerable:!0,get:function(){return xt}}),Object.defineProperty(s,"ak",{enumerable:!0,get:function(){return Ht}}),Object.defineProperty(s,"al",{enumerable:!0,get:function(){return Un}}),Object.defineProperty(s,"am",{enumerable:!0,get:function(){return jn}}),Object.defineProperty(s,"an",{enumerable:!0,get:function(){return Fn}}),Object.defineProperty(s,"ao",{enumerable:!0,get:function(){return oe}}),Object.defineProperty(s,"ap",{enumerable:!0,get:function(){return ae}}),Object.defineProperty(s,"aq",{enumerable:!0,get:function(){return on}}),Object.defineProperty(s,"ar",{enumerable:!0,get:function(){return $n}}),Object.defineProperty(s,"as",{enumerable:!0,get:function(){return ge}}),Object.defineProperty(s,"at",{enumerable:!0,get:function(){return ar}}),Object.defineProperty(s,"au",{enumerable:!0,get:function(){return pr}}),Object.defineProperty(s,"av",{enumerable:!0,get:function(){return C}}),Object.defineProperty(s,"aw",{enumerable:!0,get:function(){return Fe}}),Object.defineProperty(s,"ax",{enumerable:!0,get:function(){return Me}}),Object.defineProperty(s,"ay",{enumerable:!0,get:function(){return b}}),Object.defineProperty(s,"az",{enumerable:!0,get:function(){return ls}}),Object.defineProperty(s,"b",{enumerable:!0,get:function(){return Ir}}),Object.defineProperty(s,"c",{enumerable:!0,get:function(){return wr}}),Object.defineProperty(s,"d",{enumerable:!0,get:function(){return Ii}}),Object.defineProperty(s,"e",{enumerable:!0,get:function(){return yi}}),Object.defineProperty(s,"f",{enumerable:!0,get:function(){return _i}}),Object.defineProperty(s,"g",{enumerable:!0,get:function(){return Ri}}),Object.defineProperty(s,"h",{enumerable:!0,get:function(){return Li}}),Object.defineProperty(s,"i",{enumerable:!0,get:function(){return Wr}}),Object.defineProperty(s,"j",{enumerable:!0,get:function(){return Ci}}),Object.defineProperty(s,"k",{enumerable:!0,get:function(){return Ui}}),Object.defineProperty(s,"l",{enumerable:!0,get:function(){return ii}}),Object.defineProperty(s,"m",{enumerable:!0,get:function(){return fs}}),Object.defineProperty(s,"n",{enumerable:!0,get:function(){return Is}}),Object.defineProperty(s,"o",{enumerable:!0,get:function(){return vs}}),Object.defineProperty(s,"p",{enumerable:!0,get:function(){return Os}}),Object.defineProperty(s,"q",{enumerable:!0,get:function(){return h}}),Object.defineProperty(s,"r",{enumerable:!0,get:function(){return si}}),Object.defineProperty(s,"s",{enumerable:!0,get:function(){return ri}}),Object.defineProperty(s,"t",{enumerable:!0,get:function(){return Bn}}),Object.defineProperty(s,"u",{enumerable:!0,get:function(){return ai}}),Object.defineProperty(s,"v",{enumerable:!0,get:function(){return Jn}}),Object.defineProperty(s,"w",{enumerable:!0,get:function(){return Yn}}),Object.defineProperty(s,"x",{enumerable:!0,get:function(){return Xn}}),Object.defineProperty(s,"y",{enumerable:!0,get:function(){return Qn}}),Object.defineProperty(s,"z",{enumerable:!0,get:function(){return Zn}});var a=t(o[0]),c=t(o[1]),u=t(o[2]),d=t(o[3]);
/**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
const l={PHONE:'phone',TOTP:'totp'},h={FACEBOOK:'facebook.com',GITHUB:'github.com',GOOGLE:'google.com',PASSWORD:'password',PHONE:'phone',TWITTER:'twitter.com'},p={EMAIL_LINK:'emailLink',EMAIL_PASSWORD:'password',FACEBOOK:'facebook.com',GITHUB:'github.com',GOOGLE:'google.com',PHONE:'phone',TWITTER:'twitter.com'},f={LINK:'link',REAUTHENTICATE:'reauthenticate',SIGN_IN:'signIn'},m={EMAIL_SIGNIN:'EMAIL_SIGNIN',PASSWORD_RESET:'PASSWORD_RESET',RECOVER_EMAIL:'RECOVER_EMAIL',REVERT_SECOND_FACTOR_ADDITION:'REVERT_SECOND_FACTOR_ADDITION',VERIFY_AND_CHANGE_EMAIL:'VERIFY_AND_CHANGE_EMAIL',VERIFY_EMAIL:'VERIFY_EMAIL'};function g(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const I=
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
function(){return{"admin-restricted-operation":'This operation is restricted to administrators only.',"argument-error":'',"app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":'Cordova framework is not ready.',"cors-unsupported":'This browser is not supported.',"credential-already-in-use":'This credential is already associated with a different user account.',"custom-token-mismatch":'The custom token corresponds to a different audience.',"requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":'Multi-factor users must always have a verified email.',"email-already-in-use":'The email address is already in use by another account.',"emulator-config-failed":"Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling \"connectAuthEmulator()\" sooner.","expired-action-code":'The action code has expired.',"cancelled-popup-request":'This operation has been cancelled due to another conflicting popup being opened.',"internal-error":'An internal AuthError has occurred.',"invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":'The mobile app identifier is not registered for the current project.',"invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":'An internal AuthError has occurred.',"invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":'The continue URL provided in the request is invalid.',"invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":'The custom token format is incorrect. Please check the documentation.',"invalid-dynamic-link-domain":'The provided dynamic link domain is not configured or authorized for the current project.',"invalid-email":'The email address is badly formatted.',"invalid-emulator-scheme":'Emulator URL must start with a valid scheme (http:// or https://).',"invalid-api-key":'Your API key is invalid, please check you have copied it correctly.',"invalid-cert-hash":'The SHA-1 certificate hash provided is invalid.',"invalid-credential":'The supplied auth credential is incorrect, malformed or has expired.',"invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":'The request does not contain a valid proof of first factor successful sign-in.',"invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":'The password is invalid or the user does not have a password.',"invalid-persistence-type":'The specified persistence type is invalid. It can only be local, session or none.',"invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":'The specified provider ID is invalid.',"invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":'The verification ID used to create the phone auth credential is invalid.',"invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":'Login blocked by user-provided method: {$originalMessage}',"missing-android-pkg-name":'An Android Package Name must be provided if the Android App is required to be installed.',"auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":'The phone auth credential was created with an empty SMS verification code.',"missing-continue-uri":'A continue URL must be provided in the request.',"missing-iframe-start":'An internal AuthError has occurred.',"missing-ios-bundle-id":'An iOS Bundle ID must be provided if an App Store ID is provided.',"missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":'A non-empty password must be provided',"missing-multi-factor-info":'No second factor identifier is provided.',"missing-multi-factor-session":'The request is missing proof of first factor successful sign-in.',"missing-phone-number":'To send verification codes, provide a phone number for the recipient.',"missing-verification-id":'The phone auth credential was created with an empty verification ID.',"app-deleted":'This instance of FirebaseApp has been deleted.',"multi-factor-info-not-found":'The user does not have a second factor matching the identifier provided.',"multi-factor-auth-required":'Proof of ownership of a second factor is required to complete sign-in.',"account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":'A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.',"no-auth-event":'An internal AuthError has occurred.',"no-such-provider":'User was not linked to an account with the given provider.',"null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":"This operation is not supported in the environment this application is running on. \"location.protocol\" must be http, https or chrome-extension and web storage must be enabled.","popup-blocked":'Unable to establish a connection with the popup. It may have been blocked by the browser.',"popup-closed-by-user":'The popup has been closed by the user before finalizing the operation.',"provider-already-linked":'User can only be linked to one identity for the given provider.',"quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":'The redirect operation has been cancelled by the user before finalizing.',"redirect-operation-pending":'A redirect sign-in operation is already pending.',"rejected-credential":'The request contains malformed or mismatching credentials.',"second-factor-already-in-use":'The second factor is already enrolled on this account.',"maximum-second-factor-count-exceeded":'The maximum allowed number of second factors on a user has been exceeded.',"tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:'The operation has timed out.',"user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":'Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.',"unsupported-persistence-type":'The current environment does not support the specified persistence type.',"unsupported-tenant-operation":'This operation is not supported in a multi-tenant context.',"unverified-email":'The operation requires a verified email.',"user-cancelled":'The user did not grant your application the permissions it requested.',"user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":'The user account has been disabled by an administrator.',"user-mismatch":'The supplied credentials do not correspond to the previously signed in user.',"user-signed-out":'',"weak-password":'The password must be 6 characters long or more.',"web-storage-unsupported":'This browser is not supported or 3rd party cookies and data may be disabled.',"already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":'The reCAPTCHA token is missing when sending request to the backend.',"invalid-recaptcha-token":'The reCAPTCHA token is invalid when sending request to the backend.',"invalid-recaptcha-action":'The reCAPTCHA action is invalid when sending request to the backend.',"recaptcha-not-enabled":'reCAPTCHA Enterprise integration is not enabled for this project.',"missing-client-type":'The reCAPTCHA client type is missing when sending request to the backend.',"missing-recaptcha-version":'The reCAPTCHA version is missing when sending request to the backend.',"invalid-req-type":'Invalid request parameters.',"invalid-recaptcha-version":'The reCAPTCHA version is invalid when sending request to the backend.',"unsupported-password-policy-schema-version":'The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.',"password-does-not-meet-requirements":'The password does not meet the requirements.',"invalid-hosting-link-domain":"The provided Hosting link domain is not configured in Firebase Hosting or is not owned by the current project. This cannot be a default Hosting domain (`web.app` or `firebaseapp.com`)."}},_=g,y=new c.ErrorFactory('auth','Firebase',{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),v={ADMIN_ONLY_OPERATION:'auth/admin-restricted-operation',ARGUMENT_ERROR:'auth/argument-error',APP_NOT_AUTHORIZED:'auth/app-not-authorized',APP_NOT_INSTALLED:'auth/app-not-installed',CAPTCHA_CHECK_FAILED:'auth/captcha-check-failed',CODE_EXPIRED:'auth/code-expired',CORDOVA_NOT_READY:'auth/cordova-not-ready',CORS_UNSUPPORTED:'auth/cors-unsupported',CREDENTIAL_ALREADY_IN_USE:'auth/credential-already-in-use',CREDENTIAL_MISMATCH:'auth/custom-token-mismatch',CREDENTIAL_TOO_OLD_LOGIN_AGAIN:'auth/requires-recent-login',DEPENDENT_SDK_INIT_BEFORE_AUTH:'auth/dependent-sdk-initialized-before-auth',DYNAMIC_LINK_NOT_ACTIVATED:'auth/dynamic-link-not-activated',EMAIL_CHANGE_NEEDS_VERIFICATION:'auth/email-change-needs-verification',EMAIL_EXISTS:'auth/email-already-in-use',EMULATOR_CONFIG_FAILED:'auth/emulator-config-failed',EXPIRED_OOB_CODE:'auth/expired-action-code',EXPIRED_POPUP_REQUEST:'auth/cancelled-popup-request',INTERNAL_ERROR:'auth/internal-error',INVALID_API_KEY:'auth/invalid-api-key',INVALID_APP_CREDENTIAL:'auth/invalid-app-credential',INVALID_APP_ID:'auth/invalid-app-id',INVALID_AUTH:'auth/invalid-user-token',INVALID_AUTH_EVENT:'auth/invalid-auth-event',INVALID_CERT_HASH:'auth/invalid-cert-hash',INVALID_CODE:'auth/invalid-verification-code',INVALID_CONTINUE_URI:'auth/invalid-continue-uri',INVALID_CORDOVA_CONFIGURATION:'auth/invalid-cordova-configuration',INVALID_CUSTOM_TOKEN:'auth/invalid-custom-token',INVALID_DYNAMIC_LINK_DOMAIN:'auth/invalid-dynamic-link-domain',INVALID_EMAIL:'auth/invalid-email',INVALID_EMULATOR_SCHEME:'auth/invalid-emulator-scheme',INVALID_IDP_RESPONSE:'auth/invalid-credential',INVALID_LOGIN_CREDENTIALS:'auth/invalid-credential',INVALID_MESSAGE_PAYLOAD:'auth/invalid-message-payload',INVALID_MFA_SESSION:'auth/invalid-multi-factor-session',INVALID_OAUTH_CLIENT_ID:'auth/invalid-oauth-client-id',INVALID_OAUTH_PROVIDER:'auth/invalid-oauth-provider',INVALID_OOB_CODE:'auth/invalid-action-code',INVALID_ORIGIN:'auth/unauthorized-domain',INVALID_PASSWORD:'auth/wrong-password',INVALID_PERSISTENCE:'auth/invalid-persistence-type',INVALID_PHONE_NUMBER:'auth/invalid-phone-number',INVALID_PROVIDER_ID:'auth/invalid-provider-id',INVALID_RECIPIENT_EMAIL:'auth/invalid-recipient-email',INVALID_SENDER:'auth/invalid-sender',INVALID_SESSION_INFO:'auth/invalid-verification-id',INVALID_TENANT_ID:'auth/invalid-tenant-id',MFA_INFO_NOT_FOUND:'auth/multi-factor-info-not-found',MFA_REQUIRED:'auth/multi-factor-auth-required',MISSING_ANDROID_PACKAGE_NAME:'auth/missing-android-pkg-name',MISSING_APP_CREDENTIAL:'auth/missing-app-credential',MISSING_AUTH_DOMAIN:'auth/auth-domain-config-required',MISSING_CODE:'auth/missing-verification-code',MISSING_CONTINUE_URI:'auth/missing-continue-uri',MISSING_IFRAME_START:'auth/missing-iframe-start',MISSING_IOS_BUNDLE_ID:'auth/missing-ios-bundle-id',MISSING_OR_INVALID_NONCE:'auth/missing-or-invalid-nonce',MISSING_MFA_INFO:'auth/missing-multi-factor-info',MISSING_MFA_SESSION:'auth/missing-multi-factor-session',MISSING_PHONE_NUMBER:'auth/missing-phone-number',MISSING_PASSWORD:'auth/missing-password',MISSING_SESSION_INFO:'auth/missing-verification-id',MODULE_DESTROYED:'auth/app-deleted',NEED_CONFIRMATION:'auth/account-exists-with-different-credential',NETWORK_REQUEST_FAILED:'auth/network-request-failed',NULL_USER:'auth/null-user',NO_AUTH_EVENT:'auth/no-auth-event',NO_SUCH_PROVIDER:'auth/no-such-provider',OPERATION_NOT_ALLOWED:'auth/operation-not-allowed',OPERATION_NOT_SUPPORTED:'auth/operation-not-supported-in-this-environment',POPUP_BLOCKED:'auth/popup-blocked',POPUP_CLOSED_BY_USER:'auth/popup-closed-by-user',PROVIDER_ALREADY_LINKED:'auth/provider-already-linked',QUOTA_EXCEEDED:'auth/quota-exceeded',REDIRECT_CANCELLED_BY_USER:'auth/redirect-cancelled-by-user',REDIRECT_OPERATION_PENDING:'auth/redirect-operation-pending',REJECTED_CREDENTIAL:'auth/rejected-credential',SECOND_FACTOR_ALREADY_ENROLLED:'auth/second-factor-already-in-use',SECOND_FACTOR_LIMIT_EXCEEDED:'auth/maximum-second-factor-count-exceeded',TENANT_ID_MISMATCH:'auth/tenant-id-mismatch',TIMEOUT:'auth/timeout',TOKEN_EXPIRED:'auth/user-token-expired',TOO_MANY_ATTEMPTS_TRY_LATER:'auth/too-many-requests',UNAUTHORIZED_DOMAIN:'auth/unauthorized-continue-uri',UNSUPPORTED_FIRST_FACTOR:'auth/unsupported-first-factor',UNSUPPORTED_PERSISTENCE:'auth/unsupported-persistence-type',UNSUPPORTED_TENANT_OPERATION:'auth/unsupported-tenant-operation',UNVERIFIED_EMAIL:'auth/unverified-email',USER_CANCELLED:'auth/user-cancelled',USER_DELETED:'auth/user-not-found',USER_DISABLED:'auth/user-disabled',USER_MISMATCH:'auth/user-mismatch',USER_SIGNED_OUT:'auth/user-signed-out',WEAK_PASSWORD:'auth/weak-password',WEB_STORAGE_UNSUPPORTED:'auth/web-storage-unsupported',ALREADY_INITIALIZED:'auth/already-initialized',RECAPTCHA_NOT_ENABLED:'auth/recaptcha-not-enabled',MISSING_RECAPTCHA_TOKEN:'auth/missing-recaptcha-token',INVALID_RECAPTCHA_TOKEN:'auth/invalid-recaptcha-token',INVALID_RECAPTCHA_ACTION:'auth/invalid-recaptcha-action',MISSING_CLIENT_TYPE:'auth/missing-client-type',MISSING_RECAPTCHA_VERSION:'auth/missing-recaptcha-version',INVALID_RECAPTCHA_VERSION:'auth/invalid-recaptcha-version',INVALID_REQ_TYPE:'auth/invalid-req-type',INVALID_HOSTING_LINK_DOMAIN:'auth/invalid-hosting-link-domain'},T=new u.Logger('@firebase/auth');function E(e,...t){T.logLevel<=u.LogLevel.WARN&&T.warn(`Auth (${a.SDK_VERSION}): ${e}`,...t)}function w(e,...t){T.logLevel<=u.LogLevel.ERROR&&T.error(`Auth (${a.SDK_VERSION}): ${e}`,...t)}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function b(e,...t){throw O(e,...t)}function P(e,...t){return O(e,...t)}function A(e,t,n){const r={..._(),[t]:n};return new c.ErrorFactory('auth','Firebase',r).create(t,{appName:e.name})}function S(e){return A(e,"operation-not-supported-in-this-environment",'Operations that alter the current user are not supported in conjunction with FirebaseServerApp')}function k(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&b(e,"argument-error"),A(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function O(e,...t){if('string'!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return y.create(e,...t)}function R(e,t,...n){if(!e)throw O(t,...n)}function N(e){const t="INTERNAL ASSERTION FAILED: "+e;throw w(t),new Error(t)}function C(e,t){e||N(t)}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function D(){return'undefined'!=typeof self&&self.location?.href||''}function L(){return'http:'===M()||'https:'===M()}function M(){return'undefined'!=typeof self&&self.location?.protocol||null}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function U(){if('undefined'==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class j{constructor(e,t){this.shortDelay=e,this.longDelay=t,C(t>e,'Short delay should be less than long delay!'),this.isMobile=(0,c.isMobileCordova)()||(0,c.isReactNative)()}get(){return'undefined'!=typeof navigator&&navigator&&'onLine'in navigator&&'boolean'==typeof navigator.onLine&&(L()||(0,c.isBrowserExtension)()||'connection'in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function F(e,t){C(e.emulator,'Emulator should always be set here');const{url:n}=e.emulator;return t?`${n}${t.startsWith('/')?t.slice(1):t}`:n}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class V{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:'undefined'!=typeof self&&'fetch'in self?self.fetch:'undefined'!=typeof globalThis&&globalThis.fetch?globalThis.fetch:'undefined'!=typeof fetch?fetch:void N('Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill')}static headers(){return this.headersImpl?this.headersImpl:'undefined'!=typeof self&&'Headers'in self?self.Headers:'undefined'!=typeof globalThis&&globalThis.Headers?globalThis.Headers:'undefined'!=typeof Headers?Headers:void N('Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill')}static response(){return this.responseImpl?this.responseImpl:'undefined'!=typeof self&&'Response'in self?self.Response:'undefined'!=typeof globalThis&&globalThis.Response?globalThis.Response:'undefined'!=typeof Response?Response:void N('Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill')}}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const x={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},H=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],q=new j(3e4,6e4);
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function W(e,t){return e.tenantId&&!t.tenantId?{...t,tenantId:e.tenantId}:t}async function z(e,t,n,r,i={}){return G(e,i,async()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const o=(0,c.querystring)({key:e.config.apiKey,...s}).slice(1),a=await e._getAdditionalHeaders();a["Content-Type"]='application/json',e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode);const u={method:t,headers:a,...i};return(0,c.isCloudflareWorker)()||(u.referrerPolicy='no-referrer'),e.emulatorConfig&&(0,c.isCloudWorkstation)(e.emulatorConfig.host)&&(u.credentials='include'),V.fetch()(await $(e,e.config.apiHost,n,o),u)})}async function G(e,t,n){e._canInitEmulator=!1;const r={...x,...t};try{const t=new J(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if('needConfirmation'in s)throw Y(e,"account-exists-with-different-credential",s);if(i.ok&&!('errorMessage'in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(' : ');if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Y(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw Y(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw Y(e,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,'-');if(o)throw A(e,a,o);b(e,a)}}catch(t){if(t instanceof c.FirebaseError)throw t;b(e,"network-request-failed",{message:String(t)})}}async function K(e,t,n,r,i={}){const s=await z(e,t,n,r,i);return'mfaPendingCredential'in s&&b(e,"multi-factor-auth-required",{_serverResponse:s}),s}async function $(e,t,n,r){const i=`${t}${n}?${r}`,s=e,o=s.config.emulator?F(e.config,i):`${e.config.apiScheme}://${i}`;if(H.includes(n)&&(await s._persistenceManagerAvailable,"COOKIE"===s._getPersistenceType())){return s._getPersistence()._getFinalTarget(o).toString()}return o}function B(e){switch(e){case'ENFORCE':return"ENFORCE";case'AUDIT':return"AUDIT";case'OFF':return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class J{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(P(this.auth,"network-request-failed")),q.get())})}}function Y(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=P(e,t,r);return i.customData._tokenResponse=n,i}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function X(e){return void 0!==e&&void 0!==e.getResponse}function Q(e){return void 0!==e&&void 0!==e.enterprise}class Z{constructor(e){if(this.siteKey='',this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw new Error('recaptchaKey undefined');this.siteKey=e.recaptchaKey.split('/')[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return B(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */async function ee(e){return(await z(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||''}async function te(e,t){return z(e,"GET","/v2/recaptchaConfig",W(e,t))}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */async function ne(e,t){return z(e,"POST","/v1/accounts:delete",t)}async function re(e,t){return z(e,"POST","/v1/accounts:update",t)}async function ie(e,t){return z(e,"POST","/v1/accounts:lookup",t)}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function se(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function oe(e,t=!1){return(0,c.getModularInstance)(e).getIdToken(t)}async function ae(e,t=!1){const n=(0,c.getModularInstance)(e),r=await n.getIdToken(t),i=ue(r);R(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s='object'==typeof i.firebase?i.firebase:void 0,o=s?.sign_in_provider;return{claims:i,token:r,authTime:se(ce(i.auth_time)),issuedAtTime:se(ce(i.iat)),expirationTime:se(ce(i.exp)),signInProvider:o||null,signInSecondFactor:s?.sign_in_second_factor||null}}function ce(e){return 1e3*Number(e)}function ue(e){const[t,n,r]=e.split('.');if(void 0===t||void 0===n||void 0===r)return w('JWT malformed, contained fewer than 3 sections'),null;try{const e=(0,c.base64Decode)(n);return e?JSON.parse(e):(w('Failed to decode base64 JWT payload'),null)}catch(e){return w('Caught error parsing JWT payload as JSON',e?.toString()),null}}function de(e){const t=ue(e);return R(t,"internal-error"),R(void 0!==t.exp,"internal-error"),R(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */async function le(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof c.FirebaseError&&he(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}function he({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class pe{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e?.code&&this.schedule(!0))}this.schedule()}}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class fe{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=se(this.lastLoginAt),this.creationTime=se(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */async function me(e){const t=e.auth,n=await e.getIdToken(),r=await le(e,ie(t,{idToken:n}));R(r?.users.length,t,"internal-error");const i=r.users[0];e._notifyReloadListener(i);const s=i.providerUserInfo?.length?_e(i.providerUserInfo):[],o=Ie(e.providerData,s),a=e.isAnonymous,c=!(e.email&&i.passwordHash||o?.length),u=!!a&&c,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new fe(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(e,d)}async function ge(e){const t=(0,c.getModularInstance)(e);await me(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Ie(e,t){return[...e.filter(e=>!t.some(t=>t.providerId===e.providerId)),...t]}function _e(e){return e.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||'',displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */async function ye(e,t){const n=await G(e,{},async()=>{const n=(0,c.querystring)({grant_type:'refresh_token',refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=await $(e,r,"/v1/token",`key=${i}`),o=await e._getAdditionalHeaders();o["Content-Type"]='application/x-www-form-urlencoded';const a={method:"POST",headers:o,body:n};return e.emulatorConfig&&(0,c.isCloudWorkstation)(e.emulatorConfig.host)&&(a.credentials='include'),V.fetch()(s,a)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ve(e,t){return z(e,"POST","/v2/accounts:revokeToken",W(e,t))}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class Te{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){R(e.idToken,"internal-error"),R(void 0!==e.idToken,"internal-error"),R(void 0!==e.refreshToken,"internal-error");const t='expiresIn'in e&&void 0!==e.expiresIn?Number(e.expiresIn):de(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){R(0!==e.length,"internal-error");const t=de(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?(R(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await ye(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new Te;return n&&(R('string'==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(R('string'==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(R('number'==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Te,this.toJSON())}_performRefresh(){return N('not implemented')}}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function Ee(e,t){R('string'==typeof e||void 0===e,"internal-error",{appName:t})}class we{constructor({uid:e,auth:t,stsTokenManager:n,...r}){this.providerId="firebase",this.proactiveRefresh=new pe(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new fe(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await le(this,this.stsTokenManager.getToken(this.auth,e));return R(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return ae(this,e)}reload(){return ge(this)}_assign(e){this!==e&&(R(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>({...e})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new we({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){R(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await me(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if((0,a._isFirebaseServerApp)(this.auth.app))return Promise.reject(S(this.auth));const e=await this.getIdToken();return await le(this,ne(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||''}static _fromJSON(e,t){const n=t.displayName??void 0,r=t.email??void 0,i=t.phoneNumber??void 0,s=t.photoURL??void 0,o=t.tenantId??void 0,a=t._redirectEventId??void 0,c=t.createdAt??void 0,u=t.lastLoginAt??void 0,{uid:d,emailVerified:l,isAnonymous:h,providerData:p,stsTokenManager:f}=t;R(d&&f,e,"internal-error");const m=Te.fromJSON(this.name,f);R('string'==typeof d,e,"internal-error"),Ee(n,e.name),Ee(r,e.name),R('boolean'==typeof l,e,"internal-error"),R('boolean'==typeof h,e,"internal-error"),Ee(i,e.name),Ee(s,e.name),Ee(o,e.name),Ee(a,e.name),Ee(c,e.name),Ee(u,e.name);const g=new we({uid:d,auth:e,email:r,emailVerified:l,displayName:n,isAnonymous:h,photoURL:s,phoneNumber:i,tenantId:o,stsTokenManager:m,createdAt:c,lastLoginAt:u});return p&&Array.isArray(p)&&(g.providerData=p.map(e=>({...e}))),a&&(g._redirectEventId=a),g}static async _fromIdTokenResponse(e,t,n=!1){const r=new Te;r.updateFromServerResponse(t);const i=new we({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await me(i),i}static async _fromGetAccountInfoResponse(e,t,n){const r=t.users[0];R(void 0!==r.localId,"internal-error");const i=void 0!==r.providerUserInfo?_e(r.providerUserInfo):[],s=!(r.email&&r.passwordHash||i?.length),o=new Te;o.updateFromIdToken(n);const a=new we({uid:r.localId,auth:e,stsTokenManager:o,isAnonymous:s}),c={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new fe(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash||i?.length)};return Object.assign(a,c),a}}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const be=new Map;function Pe(e){C(e instanceof Function,'Expected a class definition');let t=be.get(e);return t?(C(t instanceof e,'Instance stored in cache mismatched with class'),t):(t=new e,be.set(e,t),t)}
/**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class Ae{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ae.type='NONE';const Se=Ae;
/**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function ke(e,t,n){return`firebase:${e}:${t}:${n}`}class Oe{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=ke(this.userKey,r.apiKey,i),this.fullPersistenceKey=ke("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if('string'==typeof e){const t=await ie(this.auth,{idToken:e}).catch(()=>{});return t?we._fromGetAccountInfoResponse(this.auth,t,e):null}return we._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Oe(Pe(Se),e,n);const r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let i=r[0]||Pe(Se);const s=ke(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(s);if(t){let r;if('string'==typeof t){const n=await ie(e,{idToken:t}).catch(()=>{});if(!n)break;r=await we._fromGetAccountInfoResponse(e,n,t)}else r=we._fromJSON(e,t);n!==i&&(o=r),i=n;break}}catch{}const a=r.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(s)}catch{}})),new Oe(i,e,n)):new Oe(i,e,n)}}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function Re(e){const t=e.toLowerCase();if(t.includes('opera/')||t.includes('opr/')||t.includes('opios/'))return"Opera";if(Le(t))return"IEMobile";if(t.includes('msie')||t.includes('trident/'))return"IE";if(t.includes('edge/'))return"Edge";if(Ne(t))return"Firefox";if(t.includes('silk/'))return"Silk";if(Ue(t))return"Blackberry";if(je(t))return"Webos";if(Ce(t))return"Safari";if((t.includes('chrome/')||De(t))&&!t.includes('edge/'))return"Chrome";if(Me(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===n?.length)return n[1]}return"Other"}function Ne(e=(0,c.getUA)()){return/firefox\//i.test(e)}function Ce(e=(0,c.getUA)()){const t=e.toLowerCase();return t.includes('safari/')&&!t.includes('chrome/')&&!t.includes('crios/')&&!t.includes('android')}function De(e=(0,c.getUA)()){return/crios\//i.test(e)}function Le(e=(0,c.getUA)()){return/iemobile/i.test(e)}function Me(e=(0,c.getUA)()){return/android/i.test(e)}function Ue(e=(0,c.getUA)()){return/blackberry/i.test(e)}function je(e=(0,c.getUA)()){return/webos/i.test(e)}function Fe(e=(0,c.getUA)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Ve(e=(0,c.getUA)()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(e)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(e)}function xe(e=(0,c.getUA)()){return Fe(e)&&!!window.navigator?.standalone}function He(e=(0,c.getUA)()){return Fe(e)||Me(e)||je(e)||Ue(e)||/windows phone/i.test(e)||Le(e)}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function qe(e,t=[]){let n;switch(e){case"Browser":n=Re((0,c.getUA)());break;case"Worker":n=`${Re((0,c.getUA)())}-${e}`;break;default:n=e}const r=t.length?t.join(','):'FirebaseCore-web';return`${n}/JsCore/${a.SDK_VERSION}/${r}`}
/**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class We{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise((n,r)=>{try{n(e(t))}catch(e){r(e)}});n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:e?.message})}}}
/**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */async function ze(e,t={}){return z(e,"GET","/v2/passwordPolicy",W(e,t))}
/**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class Ge{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??6,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),void 0!==t.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),void 0!==t.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),void 0!==t.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),void 0!==t.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,'ENFORCEMENT_STATE_UNSPECIFIED'===this.enforcementState&&(this.enforcementState='OFF'),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join('')??'',this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>='a'&&n<='z',n>='A'&&n<='Z',n>='0'&&n<='9',this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class Ke{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Be(this),this.idTokenSubscription=new Be(this),this.beforeStateQueue=new We(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=y,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(e=>this._resolvePersistenceManagerAvailable=e)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Pe(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Oe.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUserFromIdToken(e){try{const t=await ie(this,{idToken:e}),n=await we._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(e){console.warn('FirebaseServerApp could not login user with provided authIdToken: ',e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if((0,a._isFirebaseServerApp)(this.app)){const e=this.app.settings.authIdToken;return e?new Promise(t=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(e).then(t,t))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let n=t,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const t=this.redirectUser?._redirectEventId,i=n?._redirectEventId,s=await this.tryRedirectSignIn(e);t&&t!==i||!s?.user||(n=s.user,r=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(n)}catch(e){n=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(e))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return R(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await me(e)}catch(e){if("auth/network-request-failed"!==e?.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=U()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if((0,a._isFirebaseServerApp)(this.app))return Promise.reject(S(this));const t=e?(0,c.getModularInstance)(e):null;return t&&R(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&R(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(0,a._isFirebaseServerApp)(this.app)?Promise.reject(S(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return(0,a._isFirebaseServerApp)(this.app)?Promise.reject(S(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Pe(e))})}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ze(this),t=new Ge(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new c.ErrorFactory('auth','Firebase',e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t={providerId:'apple.com',tokenType:"ACCESS_TOKEN",token:e,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(t.tenantId=this.tenantId),await ve(this,t)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Pe(e)||this._popupRedirectResolver;R(t,this,"argument-error"),this.redirectPersistenceManager=await Oe.create(this,[Pe(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i='function'==typeof t?t:t.next.bind(t);let s=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(R(o,this,"internal-error"),o.then(()=>{s||i(this.currentUser)}),'function'==typeof t){const i=e.addObserver(t,n,r);return()=>{s=!0,i()}}{const n=e.addObserver(t);return()=>{s=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return R(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=qe(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await(this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const n=await this._getAppCheckToken();return n&&(e["X-Firebase-AppCheck"]=n),e}async _getAppCheckToken(){if((0,a._isFirebaseServerApp)(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await(this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken());return e?.error&&E(`Error while retrieving App Check token: ${e.error}`),e?.token}}function $e(e){return(0,c.getModularInstance)(e)}class Be{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,c.createSubscribe)(e=>this.observer=e)}get next(){return R(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */let Je={async loadJS(){throw new Error('Unable to load external scripts')},recaptchaV2Script:'',recaptchaEnterpriseScript:'',gapiScript:''};function Ye(e){return Je.loadJS(e)}function Xe(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const Qe=1e12;class Ze{constructor(e){this.auth=e,this.counter=Qe,this._widgets=new Map}render(e,t){const n=this.counter;return this._widgets.set(n,new nt(e,this.auth.name,t||{})),this.counter++,n}reset(e){const t=e||Qe;this._widgets.get(t)?.delete(),this._widgets.delete(t)}getResponse(e){const t=e||Qe;return this._widgets.get(t)?.getResponse()||''}async execute(e){const t=e||Qe;return this._widgets.get(t)?.execute(),''}}class et{constructor(){this.enterprise=new tt}ready(e){e()}execute(e,t){return Promise.resolve('token')}render(e,t){return''}}class tt{ready(e){e()}execute(e,t){return Promise.resolve('token')}render(e,t){return''}}class nt{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r='string'==typeof e?document.getElementById(e):e;R(r,"argument-error",{appName:t}),this.container=r,this.isVisible='invisible'!==this.params.size,this.isVisible?this.execute():this.container.addEventListener('click',this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener('click',this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout(()=>{this.responseToken=rt(50);const{callback:e,'expired-callback':t}=this.params;if(e)try{e(this.responseToken)}catch(e){}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(e){}this.isVisible&&this.execute()},6e4)},500))}checkIfDeleted(){if(this.deleted)throw new Error('reCAPTCHA mock was already deleted!')}}function rt(e){const t=[],n='1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';for(let r=0;r<e;r++)t.push(n.charAt(Math.floor(62*Math.random())));return t.join('')}const it='NO_RECAPTCHA';class st{constructor(e){this.type="recaptcha-enterprise",this.auth=$e(e)}async verify(e="verify",t=!1){async function n(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise(async(t,n)=>{te(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(r=>{if(void 0!==r.recaptchaKey){const n=new Z(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error('recaptcha Enterprise site key undefined'))}).catch(e=>{n(e)})})}function r(t,n,r){const i=window.grecaptcha;Q(i)?i.enterprise.ready(()=>{i.enterprise.execute(t,{action:e}).then(e=>{n(e)}).catch(()=>{n(it)})}):r(Error('No reCAPTCHA enterprise script loaded.'))}if(this.auth.settings.appVerificationDisabledForTesting){return(new et).execute('siteKey',{action:'verify'})}return new Promise((e,i)=>{n(this.auth).then(n=>{if(!t&&Q(window.grecaptcha))r(n,e,i);else{if('undefined'==typeof window)return void i(new Error('RecaptchaVerifier is only supported in browser'));let t=Je.recaptchaEnterpriseScript;0!==t.length&&(t+=n),Ye(t).then(()=>{r(n,e,i)}).catch(e=>{i(e)})}}).catch(e=>{i(e)})})}}async function ot(e,t,n,r=!1,i=!1){const s=new st(e);let o;if(i)o=it;else try{o=await s.verify(n)}catch(e){o=await s.verify(n,!0)}const a={...t};if("mfaSmsEnrollment"===n||"mfaSmsSignIn"===n){if('phoneEnrollmentInfo'in a){const e=a.phoneEnrollmentInfo.phoneNumber,t=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:t,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if('phoneSignInInfo'in a){const e=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:e,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function at(e,t,n,r,i){if("EMAIL_PASSWORD_PROVIDER"===i){if(e._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await ot(e,t,n,"getOobCode"===n);return r(e,i)}return r(e,t).catch(async i=>{if("auth/missing-recaptcha-token"===i.code){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const i=await ot(e,t,n,"getOobCode"===n);return r(e,i)}return Promise.reject(i)})}if("PHONE_PROVIDER"===i){if(e._getRecaptchaConfig()?.isProviderEnabled("PHONE_PROVIDER")){const i=await ot(e,t,n);return r(e,i).catch(async i=>{if("AUDIT"===e._getRecaptchaConfig()?.getProviderEnforcementState("PHONE_PROVIDER")&&("auth/missing-recaptcha-token"===i.code||"auth/invalid-app-credential"===i.code)){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const i=await ot(e,t,n,!1,!0);return r(e,i)}return Promise.reject(i)})}{const i=await ot(e,t,n,!1,!0);return r(e,i)}}return Promise.reject(i+' provider is not supported.')}async function ct(e){const t=$e(e),n=await te(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new Z(n);if(null==t.tenantId?t._agentRecaptchaConfig=r:t._tenantRecaptchaConfigs[t.tenantId]=r,r.isAnyProviderEnabled()){new st(t).verify()}}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function ut(e,t){const n=(0,a._getProvider)(e,'auth');if(n.isInitialized()){const e=n.getImmediate(),r=n.getOptions();if((0,c.deepEqual)(r,t??{}))return e;b(e,"already-initialized")}return n.initialize({options:t})}function dt(e,t){const n=t?.persistence||[],r=(Array.isArray(n)?n:[n]).map(Pe);t?.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t?.popupRedirectResolver)}function lt(e,t,n){const r=$e(e);R(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!n?.disableWarnings,s=ht(t),{host:o,port:a}=pt(t),u=null===a?'':`:${a}`,d={url:`${s}//${o}${u}/`},l=Object.freeze({host:o,port:a,protocol:s.replace(':',''),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator)return R(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),void R((0,c.deepEqual)(d,r.config.emulator)&&(0,c.deepEqual)(l,r.emulatorConfig),r,"emulator-config-failed");r.config.emulator=d,r.emulatorConfig=l,r.settings.appVerificationDisabledForTesting=!0,(0,c.isCloudWorkstation)(o)?(0,c.pingServer)(`${s}//${o}${u}`):i||mt()}function ht(e){const t=e.indexOf(':');return t<0?'':e.substr(0,t+1)}function pt(e){const t=ht(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:'',port:null};const r=n[2].split('@').pop()||'',i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:ft(r.substr(e.length+1))}}{const[e,t]=r.split(':');return{host:e,port:ft(t)}}}function ft(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function mt(){function e(){const e=document.createElement('p'),t=e.style;e.innerText='Running in emulator mode. Do not use with production credentials.',t.position='fixed',t.width='100%',t.backgroundColor='#ffffff',t.border='.1em solid #000000',t.color='#b50000',t.bottom='0px',t.left='0px',t.margin='0px',t.zIndex='10000',t.textAlign='center',e.classList.add('firebase-emulator-warning'),document.body.appendChild(e)}'undefined'!=typeof console&&'function'==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),'undefined'!=typeof window&&'undefined'!=typeof document&&('loading'===document.readyState?window.addEventListener('DOMContentLoaded',e):e())}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class gt{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return N('not implemented')}_getIdTokenResponse(e){return N('not implemented')}_linkToIdToken(e,t){return N('not implemented')}_getReauthenticationResolver(e){return N('not implemented')}}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */async function It(e,t){return z(e,"POST","/v1/accounts:resetPassword",W(e,t))}async function _t(e,t){return z(e,"POST","/v1/accounts:update",t)}async function yt(e,t){return z(e,"POST","/v1/accounts:signUp",t)}async function vt(e,t){return z(e,"POST","/v1/accounts:update",W(e,t))}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */async function Tt(e,t){return K(e,"POST","/v1/accounts:signInWithPassword",W(e,t))}async function Et(e,t){return z(e,"POST","/v1/accounts:sendOobCode",W(e,t))}async function wt(e,t){return Et(e,t)}async function bt(e,t){return Et(e,t)}async function Pt(e,t){return Et(e,t)}async function At(e,t){return Et(e,t)}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */async function St(e,t){return K(e,"POST","/v1/accounts:signInWithEmailLink",W(e,t))}async function kt(e,t){return K(e,"POST","/v1/accounts:signInWithEmailLink",W(e,t))}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class Ot extends gt{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Ot(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Ot(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t='string'==typeof e?JSON.parse(e):e;if(t?.email&&t?.password){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return at(e,{returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signInWithPassword",Tt,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return St(e,{email:this._email,oobCode:this._password});default:b(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return at(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",yt,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return kt(e,{idToken:t,email:this._email,oobCode:this._password});default:b(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */async function Rt(e,t){return K(e,"POST","/v1/accounts:signInWithIdp",W(e,t))}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class Nt extends gt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Nt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):b("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t='string'==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r,...i}=t;if(!n||!r)return null;const s=new Nt(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return Rt(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Rt(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Rt(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=(0,c.querystring)(t)}return e}}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */async function Ct(e,t){return z(e,"POST","/v1/accounts:sendVerificationCode",W(e,t))}async function Dt(e,t){return K(e,"POST","/v1/accounts:signInWithPhoneNumber",W(e,t))}async function Lt(e,t){const n=await K(e,"POST","/v1/accounts:signInWithPhoneNumber",W(e,t));if(n.temporaryProof)throw Y(e,"account-exists-with-different-credential",n);return n}const Mt={USER_NOT_FOUND:"user-not-found"};async function Ut(e,t){return K(e,"POST","/v1/accounts:signInWithPhoneNumber",W(e,{...t,operation:'REAUTH'}),Mt)}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class jt extends gt{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new jt({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new jt({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return Dt(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return Lt(e,{idToken:t,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return Ut(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){'string'==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new jt({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function Ft(e){switch(e){case'recoverEmail':return"RECOVER_EMAIL";case'resetPassword':return"PASSWORD_RESET";case'signIn':return"EMAIL_SIGNIN";case'verifyEmail':return"VERIFY_EMAIL";case'verifyAndChangeEmail':return"VERIFY_AND_CHANGE_EMAIL";case'revertSecondFactorAddition':return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Vt(e){const t=(0,c.querystringDecode)((0,c.extractQuerystring)(e)).link,n=t?(0,c.querystringDecode)((0,c.extractQuerystring)(t)).deep_link_id:null,r=(0,c.querystringDecode)((0,c.extractQuerystring)(e)).deep_link_id;return(r?(0,c.querystringDecode)((0,c.extractQuerystring)(r)).link:null)||r||n||t||e}class xt{constructor(e){const t=(0,c.querystringDecode)((0,c.extractQuerystring)(e)),n=t.apiKey??null,r=t.oobCode??null,i=Ft(t.mode??null);R(n&&r&&i,"argument-error"),this.apiKey=n,this.operation=i,this.code=r,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=Vt(e);try{return new xt(t)}catch{return null}}}function Ht(e){return xt.parseLink(e)}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class qt{constructor(){this.providerId=qt.PROVIDER_ID}static credential(e,t){return Ot._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=xt.parseLink(t);return R(n,"argument-error"),Ot._fromEmailAndCode(e,n.code,n.tenantId)}}qt.PROVIDER_ID="password",qt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",qt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
class Wt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class zt extends Wt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Gt extends zt{static credentialFromJSON(e){const t='string'==typeof e?JSON.parse(e):e;return R('providerId'in t&&'signInMethod'in t,"argument-error"),Nt._fromParams(t)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return R(e.idToken||e.accessToken,"argument-error"),Nt._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return Gt.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Gt.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:r,pendingToken:i,nonce:s,providerId:o}=e;if(!(n||r||t||i))return null;if(!o)return null;try{return new Gt(o)._credential({idToken:t,accessToken:n,nonce:s,pendingToken:i})}catch(e){return null}}}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class Kt extends zt{constructor(){super("facebook.com")}static credential(e){return Nt._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kt.credentialFromTaggedObject(e)}static credentialFromError(e){return Kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!('oauthAccessToken'in e))return null;if(!e.oauthAccessToken)return null;try{return Kt.credential(e.oauthAccessToken)}catch{return null}}}Kt.FACEBOOK_SIGN_IN_METHOD="facebook.com",Kt.PROVIDER_ID="facebook.com";
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
class $t extends zt{constructor(){super("google.com"),this.addScope('profile')}static credential(e,t){return Nt._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return $t.credentialFromTaggedObject(e)}static credentialFromError(e){return $t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return $t.credential(t,n)}catch{return null}}}$t.GOOGLE_SIGN_IN_METHOD="google.com",$t.PROVIDER_ID="google.com";
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
class Bt extends zt{constructor(){super("github.com")}static credential(e){return Nt._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bt.credentialFromTaggedObject(e)}static credentialFromError(e){return Bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!('oauthAccessToken'in e))return null;if(!e.oauthAccessToken)return null;try{return Bt.credential(e.oauthAccessToken)}catch{return null}}}Bt.GITHUB_SIGN_IN_METHOD="github.com",Bt.PROVIDER_ID="github.com";class Jt extends gt{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){return Rt(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Rt(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Rt(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t='string'==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r,pendingToken:i}=t;return n&&r&&i&&n===r?new Jt(n,i):null}static _create(e,t){return new Jt(e,t)}buildRequest(){return{requestUri:"http://localhost",returnSecureToken:!0,pendingToken:this.pendingToken}}}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class Yt extends Wt{constructor(e){R(e.startsWith("saml."),"argument-error"),super(e)}static credentialFromResult(e){return Yt.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Yt.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Jt.fromJSON(e);return R(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:n}=e;if(!t||!n)return null;try{return Jt._create(n,t)}catch(e){return null}}}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class Xt extends zt{constructor(){super("twitter.com")}static credential(e,t){return Nt._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Xt.credentialFromTaggedObject(e)}static credentialFromError(e){return Xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Xt.credential(t,n)}catch{return null}}}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
async function Qt(e,t){return K(e,"POST","/v1/accounts:signUp",W(e,t))}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */Xt.TWITTER_SIGN_IN_METHOD="twitter.com",Xt.PROVIDER_ID="twitter.com";class Zt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await we._fromIdTokenResponse(e,n,r),s=en(n);return new Zt({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=en(n);return new Zt({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function en(e){return e.providerId?e.providerId:'phoneNumber'in e?"phone":null}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */async function tn(e){if((0,a._isFirebaseServerApp)(e.app))return Promise.reject(S(e));const t=$e(e);if(await t._initializationPromise,t.currentUser?.isAnonymous)return new Zt({user:t.currentUser,providerId:null,operationType:"signIn"});const n=await Qt(t,{returnSecureToken:!0}),r=await Zt._fromIdTokenResponse(t,"signIn",n,!0);return await t._updateCurrentUser(r.user),r}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class nn extends c.FirebaseError{constructor(e,t,n,r){super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,nn.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new nn(e,t,n,r)}}function rn(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw nn._fromErrorAndOperation(e,n,t,r);throw n})}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function sn(e){return new Set(e.map(({providerId:e})=>e).filter(e=>!!e))}
/**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */async function on(e,t){const n=(0,c.getModularInstance)(e);await cn(!0,n,t);const{providerUserInfo:r}=await re(n.auth,{idToken:await n.getIdToken(),deleteProvider:[t]}),i=sn(r||[]);return n.providerData=n.providerData.filter(e=>i.has(e.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function an(e,t,n=!1){const r=await le(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Zt._forOperation(e,"link",r)}async function cn(e,t,n){await me(t);const r=!1===e?"provider-already-linked":"no-such-provider";R(sn(t.providerData).has(n)===e,t.auth,r)}
/**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */async function un(e,t,n=!1){const{auth:r}=e;if((0,a._isFirebaseServerApp)(r.app))return Promise.reject(S(r));const i="reauthenticate";try{const s=await le(e,rn(r,i,t,e),n);R(s.idToken,r,"internal-error");const o=ue(s.idToken);R(o,r,"internal-error");const{sub:a}=o;return R(e.uid===a,r,"user-mismatch"),Zt._forOperation(e,i,s)}catch(e){throw"auth/user-not-found"===e?.code&&b(r,"user-mismatch"),e}}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */async function dn(e,t,n=!1){if((0,a._isFirebaseServerApp)(e.app))return Promise.reject(S(e));const r="signIn",i=await rn(e,r,t),s=await Zt._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function ln(e,t){return dn($e(e),t)}async function hn(e,t){const n=(0,c.getModularInstance)(e);return await cn(!1,n,t.providerId),an(n,t)}async function pn(e,t){return un((0,c.getModularInstance)(e),t)}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */async function fn(e,t){return K(e,"POST","/v1/accounts:signInWithCustomToken",W(e,t))}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */async function mn(e,t){if((0,a._isFirebaseServerApp)(e.app))return Promise.reject(S(e));const n=$e(e),r=await fn(n,{token:t,returnSecureToken:!0}),i=await Zt._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class gn{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return'phoneInfo'in t?In._fromServerResponse(e,t):'totpInfo'in t?_n._fromServerResponse(e,t):b(e,"internal-error")}}class In extends gn{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new In(t)}}class _n extends gn{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new _n(t)}}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function yn(e,t,n){R(n.url?.length>0,e,"invalid-continue-uri"),R(void 0===n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),R(void 0===n.linkDomain||n.linkDomain.length>0,e,"invalid-hosting-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.linkDomain=n.linkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(R(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(R(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */async function vn(e){const t=$e(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function Tn(e,t,n){const r=$e(e),i={requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"};n&&yn(r,i,n),await at(r,i,"getOobCode",bt,"EMAIL_PASSWORD_PROVIDER")}async function En(e,t,n){await It((0,c.getModularInstance)(e),{oobCode:t,newPassword:n}).catch(async t=>{throw"auth/password-does-not-meet-requirements"===t.code&&vn(e),t})}async function wn(e,t){await vt((0,c.getModularInstance)(e),{oobCode:t})}async function bn(e,t){const n=(0,c.getModularInstance)(e),r=await It(n,{oobCode:t}),i=r.requestType;switch(R(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":R(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":R(r.mfaInfo,n,"internal-error");default:R(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=gn._fromServerResponse($e(n),r.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.newEmail:r.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function Pn(e,t){const{data:n}=await bn((0,c.getModularInstance)(e),t);return n.email}async function An(e,t,n){if((0,a._isFirebaseServerApp)(e.app))return Promise.reject(S(e));const r=$e(e),i=at(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Qt,"EMAIL_PASSWORD_PROVIDER"),s=await i.catch(t=>{throw"auth/password-does-not-meet-requirements"===t.code&&vn(e),t}),o=await Zt._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(o.user),o}function Sn(e,t,n){return(0,a._isFirebaseServerApp)(e.app)?Promise.reject(S(e)):ln((0,c.getModularInstance)(e),qt.credential(t,n)).catch(async t=>{throw"auth/password-does-not-meet-requirements"===t.code&&vn(e),t})}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */async function kn(e,t,n){const r=$e(e),i={requestType:"EMAIL_SIGNIN",email:t,clientType:"CLIENT_TYPE_WEB"};!(function(e,t){R(t.handleCodeInApp,r,"argument-error"),t&&yn(r,e,t)})(i,n),await at(r,i,"getOobCode",Pt,"EMAIL_PASSWORD_PROVIDER")}function On(e,t){const n=xt.parseLink(t);return"EMAIL_SIGNIN"===n?.operation}async function Rn(e,t,n){if((0,a._isFirebaseServerApp)(e.app))return Promise.reject(S(e));const r=(0,c.getModularInstance)(e),i=qt.credentialWithLink(t,n||D());return R(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),ln(r,i)}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */async function Nn(e,t){return z(e,"POST","/v1/accounts:createAuthUri",W(e,t))}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */async function Cn(e,t){const n={identifier:t,continueUri:L()?D():'http://localhost'},{signinMethods:r}=await Nn((0,c.getModularInstance)(e),n);return r||[]}async function Dn(e,t){const n=(0,c.getModularInstance)(e),r={requestType:"VERIFY_EMAIL",idToken:await e.getIdToken()};t&&yn(n.auth,r,t);const{email:i}=await wt(n.auth,r);i!==e.email&&await e.reload()}async function Ln(e,t,n){const r=(0,c.getModularInstance)(e),i={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await e.getIdToken(),newEmail:t};n&&yn(r.auth,i,n);const{email:s}=await At(r.auth,i);s!==e.email&&await e.reload()}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */async function Mn(e,t){return z(e,"POST","/v1/accounts:update",t)}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */async function Un(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const r=(0,c.getModularInstance)(e),i={idToken:await r.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},s=await le(r,Mn(r.auth,i));r.displayName=s.displayName||null,r.photoURL=s.photoUrl||null;const o=r.providerData.find(({providerId:e})=>"password"===e);o&&(o.displayName=r.displayName,o.photoURL=r.photoURL),await r._updateTokensIfNecessary(s)}function jn(e,t){const n=(0,c.getModularInstance)(e);return(0,a._isFirebaseServerApp)(n.auth.app)?Promise.reject(S(n.auth)):Vn(n,t,null)}function Fn(e,t){return Vn((0,c.getModularInstance)(e),null,t)}async function Vn(e,t,n){const{auth:r}=e,i={idToken:await e.getIdToken(),returnSecureToken:!0};t&&(i.email=t),n&&(i.password=n);const s=await le(e,_t(r,i));await e._updateTokensIfNecessary(s,!0)}
/**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function xn(e){if(!e)return null;const{providerId:t}=e,n=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},r=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!t&&e?.idToken){const t=ue(e.idToken)?.firebase?.sign_in_provider;if(t){return new Hn(r,"anonymous"!==t&&"custom"!==t?t:null)}}if(!t)return null;switch(t){case"facebook.com":return new Wn(r,n);case"github.com":return new zn(r,n);case"google.com":return new Gn(r,n);case"twitter.com":return new Kn(r,n,e.screenName||null);case"custom":case"anonymous":return new Hn(r,null);default:return new Hn(r,t,n)}}class Hn{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class qn extends Hn{constructor(e,t,n,r){super(e,t,n),this.username=r}}class Wn extends Hn{constructor(e,t){super(e,"facebook.com",t)}}class zn extends qn{constructor(e,t){super(e,"github.com",t,'string'==typeof t?.login?t?.login:null)}}class Gn extends Hn{constructor(e,t){super(e,"google.com",t)}}class Kn extends qn{constructor(e,t,n){super(e,"twitter.com",t,n)}}function $n(e){const{user:t,_tokenResponse:n}=e;return t.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:xn(n)}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function Bn(e,t){return(0,c.getModularInstance)(e).setPersistence(t)}function Jn(e){return ct(e)}async function Yn(e,t){return $e(e).validatePassword(t)}function Xn(e,t,n,r){return(0,c.getModularInstance)(e).onIdTokenChanged(t,n,r)}function Qn(e,t,n){return(0,c.getModularInstance)(e).beforeAuthStateChanged(t,n)}function Zn(e,t,n,r){return(0,c.getModularInstance)(e).onAuthStateChanged(t,n,r)}function er(e){(0,c.getModularInstance)(e).useDeviceLanguage()}function tr(e,t){return(0,c.getModularInstance)(e).updateCurrentUser(t)}function nr(e){return(0,c.getModularInstance)(e).signOut()}function rr(e,t){return $e(e).revokeAccessToken(t)}async function ir(e){return(0,c.getModularInstance)(e).delete()}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class sr{constructor(e,t,n){this.type=e,this.credential=t,this.user=n}static _fromIdtoken(e,t){return new sr("enroll",e,t)}static _fromMfaPendingCredential(e){return new sr("signin",e)}toJSON(){const e="enroll"===this.type?'idToken':'pendingCredential';return{multiFactorSession:{[e]:this.credential}}}static fromJSON(e){if(e?.multiFactorSession){if(e.multiFactorSession?.pendingCredential)return sr._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(e.multiFactorSession?.idToken)return sr._fromIdtoken(e.multiFactorSession.idToken)}return null}}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class or{constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}static _fromError(e,t){const n=$e(e),r=t.customData._serverResponse,i=(r.mfaInfo||[]).map(e=>gn._fromServerResponse(n,e));R(r.mfaPendingCredential,n,"internal-error");const s=sr._fromMfaPendingCredential(r.mfaPendingCredential);return new or(s,i,async e=>{const i=await e._process(n,s);delete r.mfaInfo,delete r.mfaPendingCredential;const o={...r,idToken:i.idToken,refreshToken:i.refreshToken};switch(t.operationType){case"signIn":const e=await Zt._fromIdTokenResponse(n,t.operationType,o);return await n._updateCurrentUser(e.user),e;case"reauthenticate":return R(t.user,n,"internal-error"),Zt._forOperation(t.user,t.operationType,o);default:b(n,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function ar(e,t){const n=(0,c.getModularInstance)(e),r=t;return R(t.customData.operationType,n,"argument-error"),R(r.customData._serverResponse?.mfaPendingCredential,n,"argument-error"),or._fromError(n,r)}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function cr(e,t){return z(e,"POST","/v2/accounts/mfaEnrollment:start",W(e,t))}function ur(e,t){return z(e,"POST","/v2/accounts/mfaEnrollment:finalize",W(e,t))}function dr(e,t){return z(e,"POST","/v2/accounts/mfaEnrollment:finalize",W(e,t))}class lr{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(t=>gn._fromServerResponse(e.auth,t)))})}static _fromUser(e){return new lr(e)}async getSession(){return sr._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const n=e,r=await this.getSession(),i=await le(this.user,n._process(this.user.auth,r,t));return await this.user._updateTokensIfNecessary(i),this.user.reload()}async unenroll(e){const t='string'==typeof e?e:e.uid,n=await this.user.getIdToken();try{const e=await le(this.user,(r=this.user.auth,i={idToken:n,mfaEnrollmentId:t},z(r,"POST","/v2/accounts/mfaEnrollment:withdraw",W(r,i))));this.enrolledFactors=this.enrolledFactors.filter(({uid:e})=>e!==t),await this.user._updateTokensIfNecessary(e),await this.user.reload()}catch(e){throw e}var r,i}}const hr=new WeakMap;function pr(e){const t=(0,c.getModularInstance)(e);return hr.has(t)||hr.set(t,lr._fromUser(t)),hr.get(t)}const fr='__sak';
/**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class mr{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(fr,'1'),this.storage.removeItem(fr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class gr extends mr{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=He(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});const n=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);(0,c.isIE)()&&10===document.documentMode&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent('storage',{key:e,oldValue:t,newValue:n}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener('storage',this.boundEventHandler)}detachListener(){window.removeEventListener('storage',this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}gr.type='LOCAL';const Ir=gr;
/**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function _r(e){const t=e.replace(/[\\^$.*+?()[\]{}|]/g,'\\$&'),n=RegExp(`${t}=([^;]+)`);return document.cookie.match(n)?.[1]??null}function yr(e){return`${'http:'===window.location.protocol?'__dev_':'__HOST-'}FIREBASE_${e.split(':')[3]}`}class vr{constructor(){this.type="COOKIE",this.listenerUnsubscribes=new Map}_getFinalTarget(e){if(void 0===typeof window)return e;const t=new URL(`${window.location.origin}/__cookies__`);return t.searchParams.set('finalTarget',e),t}async _isAvailable(){return!('boolean'==typeof isSecureContext&&!isSecureContext)&&('undefined'!=typeof navigator&&'undefined'!=typeof document&&(navigator.cookieEnabled??!0))}async _set(e,t){}async _get(e){if(!this._isAvailable())return null;const t=yr(e);if(window.cookieStore){const e=await window.cookieStore.get(t);return e?.value}return _r(t)}async _remove(e){if(!this._isAvailable())return;if(!await this._get(e))return;const t=yr(e);document.cookie=`${t}=;Max-Age=34560000;Partitioned;Secure;SameSite=Strict;Path=/;Priority=High`,await fetch("/__cookies__",{method:'DELETE'}).catch(()=>{})}_addListener(e,t){if(!this._isAvailable())return;const n=yr(e);if(window.cookieStore){const e=e=>{const r=e.changed.find(e=>e.name===n);r&&t(r.value);e.deleted.find(e=>e.name===n)&&t(null)},r=()=>window.cookieStore.removeEventListener('change',e);return this.listenerUnsubscribes.set(t,r),window.cookieStore.addEventListener('change',e)}let r=_r(n);const i=setInterval(()=>{const e=_r(n);e!==r&&(t(e),r=e)},1e3);this.listenerUnsubscribes.set(t,()=>clearInterval(i))}_removeListener(e,t){const n=this.listenerUnsubscribes.get(t);n&&(n(),this.listenerUnsubscribes.delete(t))}}vr.type='COOKIE';const Tr=vr;
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class Er extends mr{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Er.type='SESSION';const wr=Er;
/**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function br(e){return Promise.all(e.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}}))}
/**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class Pr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const n=new Pr(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!s?.size)return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map(async e=>e(t.origin,i)),a=await br(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener('message',this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener('message',this.boundEventHandler)}}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
function Ar(e="",t=10){let n='';for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */Pr.receivers=[];class Sr{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener('message',e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r='undefined'!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise((o,a)=>{const c=Ar('',20);r.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener('message',s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function kr(){return window}function Or(e){kr().location.href=e}
/**
   * @license
   * Copyright 2020 Google LLC.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function Rr(){return void 0!==kr().WorkerGlobalScope&&'function'==typeof kr().importScripts}async function Nr(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}
/**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
const Cr='firebaseLocalStorageDb',Dr='firebaseLocalStorage',Lr='fbase_key';class Mr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener('success',()=>{e(this.request.result)}),this.request.addEventListener('error',()=>{t(this.request.error)})})}}function Ur(e,t){return e.transaction([Dr],t?'readwrite':'readonly').objectStore(Dr)}function jr(){const e=indexedDB.deleteDatabase(Cr);return new Mr(e).toPromise()}function Fr(){const e=indexedDB.open(Cr,1);return new Promise((t,n)=>{e.addEventListener('error',()=>{n(e.error)}),e.addEventListener('upgradeneeded',()=>{const t=e.result;try{t.createObjectStore(Dr,{keyPath:Lr})}catch(e){n(e)}}),e.addEventListener('success',async()=>{const n=e.result;n.objectStoreNames.contains(Dr)?t(n):(n.close(),await jr(),t(await Fr()))})})}async function Vr(e,t,n){const r=Ur(e,!0).put({[Lr]:t,value:n});return new Mr(r).toPromise()}async function xr(e,t){const n=Ur(e,!1).get(t),r=await new Mr(n).toPromise();return void 0===r?null:r.value}function Hr(e,t){const n=Ur(e,!0).delete(t);return new Mr(n).toPromise()}class qr{constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise||(this.dbPromise=Fr(),this.dbPromise.catch(()=>{this.dbPromise=null})),this.dbPromise}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;if(this.dbPromise){(await this.dbPromise).close(),this.dbPromise=null}}}async initializeServiceWorkerMessaging(){return Rr()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pr._getInstance(Rr()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Nr(),!this.activeServiceWorker)return;this.sender=new Sr(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&(navigator?.serviceWorker?.controller||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return!!indexedDB&&(await this._withRetries(async e=>{await Vr(e,fr,'1'),await Hr(e,fr)}),!0)}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Vr(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>xr(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Hr(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=Ur(e,!1).getAll();return new Mr(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;if(0!==e.length)for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}qr.type='LOCAL';const Wr=qr;
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function zr(e,t){return z(e,"POST","/v2/accounts/mfaSignIn:start",W(e,t))}function Gr(e,t){return z(e,"POST","/v2/accounts/mfaSignIn:finalize",W(e,t))}function Kr(e,t){return z(e,"POST","/v2/accounts/mfaSignIn:finalize",W(e,t))}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const $r=Xe('rcb'),Br=new j(3e4,6e4);class Jr{constructor(){this.hostLanguage='',this.counter=0,this.librarySeparatelyLoaded=!!kr().grecaptcha?.render}load(e,t=""){return R(Yr(t),e,"argument-error"),this.shouldResolveImmediately(t)&&X(kr().grecaptcha)?Promise.resolve(kr().grecaptcha):new Promise((n,r)=>{const i=kr().setTimeout(()=>{r(P(e,"network-request-failed"))},Br.get());kr()[$r]=()=>{kr().clearTimeout(i),delete kr()[$r];const s=kr().grecaptcha;if(!s||!X(s))return void r(P(e,"internal-error"));const o=s.render;s.render=(e,t)=>{const n=o(e,t);return this.counter++,n},this.hostLanguage=t,n(s)};Ye(`${Je.recaptchaV2Script}?${(0,c.querystring)({onload:$r,render:'explicit',hl:t})}`).catch(()=>{clearTimeout(i),r(P(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!kr().grecaptcha?.render&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function Yr(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}class Xr{async load(e){return new Ze(e)}clearedOneInstance(){}}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const Qr='recaptcha',Zr={theme:'light',type:'image'};class ei{constructor(e,t,n={...Zr}){this.parameters=n,this.type=Qr,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=$e(e),this.isInvisible='invisible'===this.parameters.size,R('undefined'!=typeof document,this.auth,"operation-not-supported-in-this-environment");const r='string'==typeof t?document.getElementById(t):t;R(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Xr:new Jr,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise(n=>{const r=e=>{e&&(this.tokenChangeListeners.delete(r),n(e))};this.tokenChangeListeners.add(r),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e})),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){R(!this.parameters.sitekey,this.auth,"argument-error"),R(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),R('undefined'!=typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(e=>e(t)),'function'==typeof e)e(t);else if('string'==typeof e){const n=kr()[e];'function'==typeof n&&n(t)}}}assertNotDestroyed(){R(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement('div');e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){R(L()&&!Rr(),this.auth,"internal-error"),await ti(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await ee(this.auth);R(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return R(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function ti(){let e=null;return new Promise(t=>{'complete'!==document.readyState?(e=()=>t(),window.addEventListener('load',e)):t()}).catch(t=>{throw e&&window.removeEventListener('load',e),t})}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class ni{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=jt._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function ri(e,t,n){if((0,a._isFirebaseServerApp)(e.app))return Promise.reject(S(e));const r=$e(e),i=await oi(r,t,(0,c.getModularInstance)(n));return new ni(i,e=>ln(r,e))}async function ii(e,t,n){const r=(0,c.getModularInstance)(e);await cn(!1,r,"phone");const i=await oi(r.auth,t,(0,c.getModularInstance)(n));return new ni(i,e=>hn(r,e))}async function si(e,t,n){const r=(0,c.getModularInstance)(e);if((0,a._isFirebaseServerApp)(r.auth.app))return Promise.reject(S(r.auth));const i=await oi(r.auth,t,(0,c.getModularInstance)(n));return new ni(i,e=>pn(r,e))}async function oi(e,t,n){if(!e._getRecaptchaConfig())try{await ct(e)}catch(e){console.log('Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.')}try{let r;if(r='string'==typeof t?{phoneNumber:t}:t,'session'in r){const t=r.session;if('phoneNumber'in r){R("enroll"===t.type,e,"internal-error");const i={idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"}},s=at(e,i,"mfaSmsEnrollment",async(e,t)=>{if(t.phoneEnrollmentInfo.captchaResponse===it){R(n?.type===Qr,e,"argument-error");return cr(e,await ci(e,t,n))}return cr(e,t)},"PHONE_PROVIDER");return(await s.catch(e=>Promise.reject(e))).phoneSessionInfo.sessionInfo}{R("signin"===t.type,e,"internal-error");const i=r.multiFactorHint?.uid||r.multiFactorUid;R(i,e,"missing-multi-factor-info");const s={mfaPendingCredential:t.credential,mfaEnrollmentId:i,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}},o=at(e,s,"mfaSmsSignIn",async(e,t)=>{if(t.phoneSignInInfo.captchaResponse===it){R(n?.type===Qr,e,"argument-error");return zr(e,await ci(e,t,n))}return zr(e,t)},"PHONE_PROVIDER");return(await o.catch(e=>Promise.reject(e))).phoneResponseInfo.sessionInfo}}{const t={phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"},i=at(e,t,"sendVerificationCode",async(e,t)=>{if(t.captchaResponse===it){R(n?.type===Qr,e,"argument-error");return Ct(e,await ci(e,t,n))}return Ct(e,t)},"PHONE_PROVIDER");return(await i.catch(e=>Promise.reject(e))).sessionInfo}}finally{n?._reset()}}async function ai(e,t){const n=(0,c.getModularInstance)(e);if((0,a._isFirebaseServerApp)(n.auth.app))return Promise.reject(S(n.auth));await an(n,t)}async function ci(e,t,n){R(n.type===Qr,e,"argument-error");const r=await n.verify();R('string'==typeof r,e,"argument-error");const i={...t};if('phoneEnrollmentInfo'in i){const e=i.phoneEnrollmentInfo.phoneNumber,t=i.phoneEnrollmentInfo.captchaResponse,n=i.phoneEnrollmentInfo.clientType,s=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:r,captchaResponse:t,clientType:n,recaptchaVersion:s}}),i}if('phoneSignInInfo'in i){const e=i.phoneSignInInfo.captchaResponse,t=i.phoneSignInInfo.clientType,n=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:e,clientType:t,recaptchaVersion:n}}),i}return Object.assign(i,{recaptchaToken:r}),i}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class ui{constructor(e){this.providerId=ui.PROVIDER_ID,this.auth=$e(e)}verifyPhoneNumber(e,t){return oi(this.auth,e,(0,c.getModularInstance)(t))}static credential(e,t){return jt._fromVerification(e,t)}static credentialFromResult(e){const t=e;return ui.credentialFromTaggedObject(t)}static credentialFromError(e){return ui.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?jt._fromTokenResponse(t,n):null}}
/**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
function di(e,t){return t?Pe(t):(R(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ui.PROVIDER_ID="phone",ui.PHONE_SIGN_IN_METHOD="phone";class li extends gt{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Rt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Rt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Rt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function hi(e){return dn(e.auth,new li(e),e.bypassAuthState)}function pi(e){const{auth:t,user:n}=e;return R(n,t,"internal-error"),un(n,new li(e),e.bypassAuthState)}async function fi(e){const{auth:t,user:n}=e;return R(n,t,"internal-error"),an(n,new li(e),e.bypassAuthState)}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class mi{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hi;case"linkViaPopup":case"linkViaRedirect":return fi;case"reauthViaPopup":case"reauthViaRedirect":return pi;default:b(this.auth,"internal-error")}}resolve(e){C(this.pendingPromise,'Pending promise was never set'),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){C(this.pendingPromise,'Pending promise was never set'),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const gi=new j(2e3,1e4);async function Ii(e,t,n){if((0,a._isFirebaseServerApp)(e.app))return Promise.reject(P(e,"operation-not-supported-in-this-environment"));const r=$e(e);k(e,t,Wt);const i=di(r,n);return new vi(r,"signInViaPopup",t,i).executeNotNull()}async function _i(e,t,n){const r=(0,c.getModularInstance)(e);if((0,a._isFirebaseServerApp)(r.auth.app))return Promise.reject(P(r.auth,"operation-not-supported-in-this-environment"));k(r.auth,t,Wt);const i=di(r.auth,n);return new vi(r.auth,"reauthViaPopup",t,i,r).executeNotNull()}async function yi(e,t,n){const r=(0,c.getModularInstance)(e);k(r.auth,t,Wt);const i=di(r.auth,n);return new vi(r.auth,"linkViaPopup",t,i,r).executeNotNull()}class vi extends mi{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,vi.currentPopupAction&&vi.currentPopupAction.cancel(),vi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return R(e,this.auth,"internal-error"),e}async onExecution(){C(1===this.filter.length,'Popup operations only handle one event');const e=Ar();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(P(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(P(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,vi.currentPopupAction=null}pollUserCancellation(){const e=()=>{this.authWindow?.window?.closed?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(P(this.auth,"popup-closed-by-user"))},8e3):this.pollId=window.setTimeout(e,gi.get())};e()}}vi.currentPopupAction=null;
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
const Ti='pendingRedirect',Ei=new Map;class wi extends mi{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Ei.get(this.auth._key());if(!e){try{const t=await bi(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Ei.set(this.auth._key(),e)}return this.bypassAuthState||Ei.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function bi(e,t){const n=Oi(t),r=ki(e);if(!await r._isAvailable())return!1;const i='true'===await r._get(n);return await r._remove(n),i}async function Pi(e,t){return ki(e)._set(Oi(t),'true')}function Ai(){Ei.clear()}function Si(e,t){Ei.set(e._key(),t)}function ki(e){return Pe(e._redirectPersistence)}function Oi(e){return ke(Ti,e.config.apiKey,e.name)}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function Ri(e,t,n){return Ni(e,t,n)}async function Ni(e,t,n){if((0,a._isFirebaseServerApp)(e.app))return Promise.reject(S(e));const r=$e(e);k(e,t,Wt),await r._initializationPromise;const i=di(r,n);return await Pi(i,r),i._openRedirect(r,t,"signInViaRedirect")}function Ci(e,t,n){return Di(e,t,n)}async function Di(e,t,n){const r=(0,c.getModularInstance)(e);if(k(r.auth,t,Wt),(0,a._isFirebaseServerApp)(r.auth.app))return Promise.reject(S(r.auth));await r.auth._initializationPromise;const i=di(r.auth,n);await Pi(i,r.auth);const s=await Fi(r);return i._openRedirect(r.auth,t,"reauthViaRedirect",s)}function Li(e,t,n){return Mi(e,t,n)}async function Mi(e,t,n){const r=(0,c.getModularInstance)(e);k(r.auth,t,Wt),await r.auth._initializationPromise;const i=di(r.auth,n);await cn(!1,r,t.providerId),await Pi(i,r.auth);const s=await Fi(r);return i._openRedirect(r.auth,t,"linkViaRedirect",s)}async function Ui(e,t){return await $e(e)._initializationPromise,ji(e,t,!1)}async function ji(e,t,n=!1){if((0,a._isFirebaseServerApp)(e.app))return Promise.reject(S(e));const r=$e(e),i=di(r,t),s=new wi(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}async function Fi(e){const t=Ar(`${e.uid}:::`);return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class Vi{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!qi(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!Hi(e)){const n=e.error.code?.split('auth/')[1]||"internal-error";t.onError(P(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(xi(e))}saveEventToCache(e){this.cachedEventUids.add(xi(e)),this.lastProcessedEventTime=Date.now()}}function xi(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join('-')}function Hi({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===t?.code}function qi(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Hi(e);default:return!1}}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */async function Wi(e,t={}){return z(e,"GET","/v1/projects",t)}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const zi=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Gi=/^https?/;async function Ki(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Wi(e);for(const e of t)try{if($i(e))return}catch{}b(e,"unauthorized-domain")}function $i(e){const t=D(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith('chrome-extension://')){const i=new URL(e);return''===i.hostname&&''===r?'chrome-extension:'===n&&e.replace('chrome-extension://','')===t.replace('chrome-extension://',''):'chrome-extension:'===n&&i.hostname===r}if(!Gi.test(n))return!1;if(zi.test(e))return r===e;const i=e.replace(/\./g,'\\.');return new RegExp('^(.+\\.'+i+'|'+i+')$','i').test(r)}
/**
   * @license
   * Copyright 2020 Google LLC.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const Bi=new j(3e4,6e4);function Ji(){const e=kr().___jsl;if(e?.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}function Yi(e){return new Promise((t,n)=>{function r(){Ji(),gapi.load('gapi.iframes',{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Ji(),n(P(e,"network-request-failed"))},timeout:Bi.get()})}if(kr().gapi?.iframes?.Iframe)t(gapi.iframes.getContext());else{if(!kr().gapi?.load){const t=Xe('iframefcb');return kr()[t]=()=>{gapi.load?r():n(P(e,"network-request-failed"))},Ye(`${Je.gapiScript}?onload=${t}`).catch(e=>n(e))}r()}}).catch(e=>{throw Xi=null,e})}let Xi=null;function Qi(e){return Xi=Xi||Yi(e),Xi}
/**
   * @license
   * Copyright 2020 Google LLC.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const Zi=new j(5e3,15e3),es={style:{position:'absolute',top:'-100px',width:'1px',height:'1px'},'aria-hidden':'true',tabindex:'-1'},ts=new Map([["identitytoolkit.googleapis.com",'p'],['staging-identitytoolkit.sandbox.googleapis.com','s'],['test-identitytoolkit.sandbox.googleapis.com','t']]);function ns(e){const t=e.config;R(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?F(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:a.SDK_VERSION},i=ts.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(',')),`${n}?${(0,c.querystring)(r).slice(1)}`}async function rs(e){const t=await Qi(e),n=kr().gapi;return R(n,e,"internal-error"),t.open({where:document.body,url:ns(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:es,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=P(e,"network-request-failed"),s=kr().setTimeout(()=>{r(i)},Zi.get());function o(){kr().clearTimeout(s),n(t)}t.ping(o).then(o,()=>{r(i)})}))}
/**
   * @license
   * Copyright 2020 Google LLC.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const is={location:'yes',resizable:'yes',statusbar:'yes',toolbar:'no'};class ss{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function os(e,t,n,r=500,i=600){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a='';const u={...is,width:r.toString(),height:i.toString(),top:s,left:o},d=(0,c.getUA)().toLowerCase();n&&(a=De(d)?"_blank":n),Ne(d)&&(t=t||"http://localhost",u.scrollbars='yes');const l=Object.entries(u).reduce((e,[t,n])=>`${e}${t}=${n},`,'');if(xe(d)&&'_self'!==a)return as(t||'',a),new ss(null);const h=window.open(t||'',a,l);R(h,e,"popup-blocked");try{h.focus()}catch(e){}return new ss(h)}function as(e,t){const n=document.createElement('a');n.href=e,n.target=t;const r=document.createEvent('MouseEvent');r.initMouseEvent('click',!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const cs='__/auth/handler',us='emulator/auth/handler',ds=encodeURIComponent('fac');async function ls(e,t,n,r,i,s){R(e.config.authDomain,e,"auth-domain-config-required"),R(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:a.SDK_VERSION,eventId:i};if(t instanceof Wt){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||'',(0,c.isEmpty)(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof zt){const e=t.getScopes().filter(e=>''!==e);e.length>0&&(o.scopes=e.join(','))}e.tenantId&&(o.tid=e.tenantId);const u=o;for(const e of Object.keys(u))void 0===u[e]&&delete u[e];const d=await e._getAppCheckToken(),l=d?`#${ds}=${encodeURIComponent(d)}`:'';return`${hs(e)}?${(0,c.querystring)(u).slice(1)}${l}`}function hs({config:e}){return e.emulator?F(e,us):`https://${e.authDomain}/${cs}`}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const ps='webStorageSupport';const fs=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wr,this._completeRedirectFn=ji,this._overrideRedirectResult=Si}async _openPopup(e,t,n,r){C(this.eventManagers[e._key()]?.manager,'_initialize() not called before _openPopup()');return os(e,await ls(e,t,n,D(),r),Ar())}async _openRedirect(e,t,n,r){await this._originValidation(e);return Or(await ls(e,t,n,D(),r)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(C(n,'If manager is not set, promise should be'),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await rs(e),n=new Vi(e);return t.register('authEvent',t=>{R(t?.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ps,{type:ps},n=>{const r=n?.[0]?.[ps];void 0!==r&&t(!!r),b(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Ki(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return He()||Ce()||Fe()}};class ms{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return N('unexpected MultiFactorSessionType')}}}class gs extends ms{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new gs(e)}_finalizeEnroll(e,t,n){return ur(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Gr(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Is{constructor(){}static assertion(e){return gs._fromCredential(e)}}Is.FACTOR_ID='phone';class _s{static assertionForEnrollment(e,t){return ys._fromSecret(e,t)}static assertionForSignIn(e,t){return ys._fromEnrollmentId(e,t)}static async generateSecret(e){const t=e;R(void 0!==t.user?.auth,"internal-error");const n=await(r=t.user.auth,i={idToken:t.credential,totpEnrollmentInfo:{}},z(r,"POST","/v2/accounts/mfaEnrollment:start",W(r,i)));var r,i;return vs._fromStartTotpMfaEnrollmentResponse(n,t.user.auth)}}_s.FACTOR_ID="totp";class ys extends ms{constructor(e,t,n){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=n}static _fromSecret(e,t){return new ys(t,void 0,e)}static _fromEnrollmentId(e,t){return new ys(t,e)}async _finalizeEnroll(e,t,n){return R(void 0!==this.secret,e,"argument-error"),dr(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){R(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");const n={verificationCode:this.otp};return Kr(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class vs{constructor(e,t,n,r,i,s,o){this.sessionInfo=s,this.auth=o,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,t){return new vs(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){let n=!1;return(Ts(e)||Ts(t))&&(n=!0),n&&(Ts(e)&&(e=this.auth.currentUser?.email||'unknownuser'),Ts(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Ts(e){return void 0===e||0===e?.length}var Es="@firebase/auth",ws="1.13.2";
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
class bs{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{e(t?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){R(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function Ps(e){switch(e){case"Node":return'node';case"ReactNative":return'rn';case"Worker":return'webworker';case"Cordova":return'cordova';case"WebExtension":return'web-extension';default:return}}
/**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
const As=(0,c.getExperimentalSetting)('authIdTokenMaxAge')||300;let Ss=null;const ks=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>As)return;const i=n?.token;Ss!==i&&(Ss=i,await fetch(e,{method:i?'POST':'DELETE',headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Os(e=(0,a.getApp)()){const t=(0,a._getProvider)(e,'auth');if(t.isInitialized())return t.getImmediate();const n=ut(e,{popupRedirectResolver:fs,persistence:[Wr,Ir,wr]}),r=(0,c.getExperimentalSetting)('authTokenSyncURL');if(r&&'boolean'==typeof isSecureContext&&isSecureContext){const e=new URL(r,location.origin);if(location.origin===e.origin){const t=ks(e.toString());Qn(n,t,()=>t(n.currentUser)),Xn(n,e=>t(e))}}const i=(0,c.getDefaultEmulatorHost)('auth');return i&&lt(n,`http://${i}`),n}var Rs;Je={loadJS:e=>new Promise((t,n)=>{const r=document.createElement('script');r.setAttribute('src',e),r.onload=t,r.onerror=e=>{const t=P("internal-error");t.customData=e,n(t)},r.type='text/javascript',r.charset='UTF-8',(document.getElementsByTagName('head')?.[0]??document).appendChild(r)}),gapiScript:'https://apis.google.com/js/api.js',recaptchaV2Script:'https://www.google.com/recaptcha/api.js',recaptchaEnterpriseScript:'https://www.google.com/recaptcha/enterprise.js?render='},Rs="Browser",(0,a._registerComponent)(new d.Component("auth",(e,{options:t})=>{const n=e.getProvider('app').getImmediate(),r=e.getProvider('heartbeat'),i=e.getProvider('app-check-internal'),{apiKey:s,authDomain:o}=n.options;R(s&&!s.includes(':'),"invalid-api-key",{appName:n.name});const a={apiKey:s,authDomain:o,clientPlatform:Rs,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:qe(Rs)},c=new Ke(n,r,i,a);return dt(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),(0,a._registerComponent)(new d.Component("auth-internal",e=>(e=>new bs(e))($e(e.getProvider("auth").getImmediate())),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,a.registerVersion)(Es,ws,Ps(Rs)),(0,a.registerVersion)(Es,ws,'esm2020')},1639,[1640,1642,1644,1641]);
__d(function(g,r,_i,a,m,_e,d){"use strict";Object.defineProperty(_e,'__esModule',{value:!0}),Object.defineProperty(_e,"FirebaseError",{enumerable:!0,get:function(){return n.FirebaseError}}),Object.defineProperty(_e,"SDK_VERSION",{enumerable:!0,get:function(){return ie}}),Object.defineProperty(_e,"_DEFAULT_ENTRY_NAME",{enumerable:!0,get:function(){return H}}),Object.defineProperty(_e,"_addComponent",{enumerable:!0,get:function(){return V}}),Object.defineProperty(_e,"_addOrOverwriteComponent",{enumerable:!0,get:function(){return W}}),Object.defineProperty(_e,"_apps",{enumerable:!0,get:function(){return L}}),Object.defineProperty(_e,"_clearComponents",{enumerable:!0,get:function(){return Z}}),Object.defineProperty(_e,"_components",{enumerable:!0,get:function(){return J}}),Object.defineProperty(_e,"_getProvider",{enumerable:!0,get:function(){return K}}),Object.defineProperty(_e,"_isFirebaseApp",{enumerable:!0,get:function(){return G}}),Object.defineProperty(_e,"_isFirebaseServerApp",{enumerable:!0,get:function(){return X}}),Object.defineProperty(_e,"_isFirebaseServerAppSettings",{enumerable:!0,get:function(){return Q}}),Object.defineProperty(_e,"_registerComponent",{enumerable:!0,get:function(){return q}}),Object.defineProperty(_e,"_removeServiceInstance",{enumerable:!0,get:function(){return Y}}),Object.defineProperty(_e,"_serverApps",{enumerable:!0,get:function(){return U}}),Object.defineProperty(_e,"deleteApp",{enumerable:!0,get:function(){return fe}}),Object.defineProperty(_e,"getApp",{enumerable:!0,get:function(){return ce}}),Object.defineProperty(_e,"getApps",{enumerable:!0,get:function(){return pe}}),Object.defineProperty(_e,"initializeApp",{enumerable:!0,get:function(){return oe}}),Object.defineProperty(_e,"initializeServerApp",{enumerable:!0,get:function(){return se}}),Object.defineProperty(_e,"onLog",{enumerable:!0,get:function(){return he}}),Object.defineProperty(_e,"registerVersion",{enumerable:!0,get:function(){return le}}),Object.defineProperty(_e,"setLogLevel",{enumerable:!0,get:function(){return ue}});var e=r(d[0]),t=r(d[1]),n=r(d[2]),i=r(d[3]);
/**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
class o{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(s(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(' ')}}function s(e){const t=e.getComponent();return"VERSION"===t?.type}const c="@firebase/app",p="0.14.13",f=new t.Logger('@firebase/app'),l="@firebase/app-compat",h="@firebase/analytics-compat",u="@firebase/analytics",b="@firebase/app-check-compat",v="@firebase/app-check",C="@firebase/auth",_="@firebase/auth-compat",y="@firebase/database",w="@firebase/data-connect",D="@firebase/database-compat",O="@firebase/functions",E="@firebase/functions-compat",P="@firebase/installations",S="@firebase/installations-compat",j="@firebase/messaging",A="@firebase/messaging-compat",I="@firebase/performance",k="@firebase/performance-compat",F="@firebase/remote-config",$="@firebase/remote-config-compat",N="@firebase/storage",x="@firebase/storage-compat",R="@firebase/firestore",T="@firebase/ai",B="@firebase/firestore-compat",z="firebase",H='[DEFAULT]',M={[c]:'fire-core',[l]:'fire-core-compat',[u]:'fire-analytics',[h]:'fire-analytics-compat',[v]:'fire-app-check',[b]:'fire-app-check-compat',[C]:'fire-auth',[_]:'fire-auth-compat',[y]:'fire-rtdb',[w]:'fire-data-connect',[D]:'fire-rtdb-compat',[O]:'fire-fn',[E]:'fire-fn-compat',[P]:'fire-iid',[S]:'fire-iid-compat',[j]:'fire-fcm',[A]:'fire-fcm-compat',[I]:'fire-perf',[k]:'fire-perf-compat',[F]:'fire-rc',[$]:'fire-rc-compat',[N]:'fire-gcs',[x]:'fire-gcs-compat',[R]:'fire-fst',[B]:'fire-fst-compat',[T]:'fire-vertex','fire-js':'fire-js',[z]:'fire-js-all'},L=new Map,U=new Map,J=new Map;function V(e,t){try{e.container.addComponent(t)}catch(n){f.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function W(e,t){e.container.addOrOverwriteComponent(t)}function q(e){const t=e.name;if(J.has(t))return f.debug(`There were multiple attempts to register component ${t}.`),!1;J.set(t,e);for(const t of L.values())V(t,e);for(const t of U.values())V(t,e);return!0}function K(e,t){const n=e.container.getProvider('heartbeat').getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Y(e,t,n=H){K(e,t).clearInstance(n)}function G(e){return void 0!==e.options}function Q(e){return!G(e)&&('authIdToken'in e||'appCheckToken'in e||'releaseOnDeref'in e||'automaticDataCollectionEnabled'in e)}function X(e){return null!=e&&void 0!==e.settings}function Z(){J.clear()}
/**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const ee={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":'Firebase Server App has been deleted',"no-options":'Need to provide options, when not being deployed to hosting via source.',"invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":'First argument to `onLog` must be null or a function.',"idb-open":'Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.',"idb-get":'Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.',"idb-set":'Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.',"idb-delete":'Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.',"finalization-registry-not-supported":'FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.',"invalid-server-app-environment":'FirebaseServerApp is not for use in browser environments.'},te=new n.ErrorFactory('app','Firebase',ee);
/**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
class re{constructor(t,n,i){this._isDeleted=!1,this._options={...t},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new e.Component('app',()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw te.create("app-deleted",{appName:this._name})}}
/**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function ae(e,t){const i=(0,n.base64Decode)(e.split('.')[1]);if(null===i)return void console.error(`FirebaseServerApp ${t} is invalid: second part could not be parsed.`);if(void 0===JSON.parse(i).exp)return void console.error(`FirebaseServerApp ${t} is invalid: expiration claim could not be parsed`);1e3*JSON.parse(i).exp-(new Date).getTime()<=0&&console.error(`FirebaseServerApp ${t} is invalid: the token has expired.`)}class ne extends re{constructor(e,t,n,i){const o=void 0===t.automaticDataCollectionEnabled||t.automaticDataCollectionEnabled,s={name:n,automaticDataCollectionEnabled:o};if(void 0!==e.apiKey)super(e,s,i);else{super(e.options,s,i)}this._serverConfig={automaticDataCollectionEnabled:o,...t},this._serverConfig.authIdToken&&ae(this._serverConfig.authIdToken,'authIdToken'),this._serverConfig.appCheckToken&&ae(this._serverConfig.appCheckToken,'appCheckToken'),this._finalizationRegistry=null,'undefined'!=typeof FinalizationRegistry&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,t.releaseOnDeref=void 0,le(c,p,'serverapp')}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,void 0!==e&&null!==this._finalizationRegistry&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){fe(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw te.create("server-app-deleted")}}
/**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const ie="12.14.0";function oe(t,i={}){let o=t;if('object'!=typeof i){i={name:i}}const s={name:H,automaticDataCollectionEnabled:!0,...i},c=s.name;if('string'!=typeof c||!c)throw te.create("bad-app-name",{appName:String(c)});if(o||(o=(0,n.getDefaultAppConfig)()),!o)throw te.create("no-options");const p=L.get(c);if(p){if((0,n.deepEqual)(o,p.options)&&(0,n.deepEqual)(s,p.config))return p;throw te.create("duplicate-app",{appName:c})}const f=new e.ComponentContainer(c);for(const e of J.values())f.addComponent(e);const l=new re(o,s,f);return L.set(c,l),l}function se(t,i={}){if((0,n.isBrowser)()&&!(0,n.isWebWorker)())throw te.create("invalid-server-app-environment");let o,s=i||{};if(t&&(G(t)?o=t.options:Q(t)?s=t:o=t),void 0===s.automaticDataCollectionEnabled&&(s.automaticDataCollectionEnabled=!0),o||(o=(0,n.getDefaultAppConfig)()),!o)throw te.create("no-options");const c={...s,...o};void 0!==c.releaseOnDeref&&delete c.releaseOnDeref;if(void 0!==s.releaseOnDeref&&'undefined'==typeof FinalizationRegistry)throw te.create("finalization-registry-not-supported",{});const p=''+(f=JSON.stringify(c),[...f].reduce((e,t)=>Math.imul(31,e)+t.charCodeAt(0)|0,0));var f;const l=U.get(p);if(l)return l.incRefCount(s.releaseOnDeref),l;const h=new e.ComponentContainer(p);for(const e of J.values())h.addComponent(e);const u=new ne(o,s,p,h);return U.set(p,u),u}function ce(e=H){const t=L.get(e);if(!t&&e===H&&(0,n.getDefaultAppConfig)())return oe();if(!t)throw te.create("no-app",{appName:e});return t}function pe(){return Array.from(L.values())}async function fe(e){let t=!1;const n=e.name;if(L.has(n))t=!0,L.delete(n);else if(U.has(n)){e.decRefCount()<=0&&(U.delete(n),t=!0)}t&&(await Promise.all(e.container.getProviders().map(e=>e.delete())),e.isDeleted=!0)}function le(t,n,i){let o=M[t]??t;i&&(o+=`-${i}`);const s=o.match(/\s|\//),c=n.match(/\s|\//);if(s||c){const e=[`Unable to register library "${o}" with version "${n}":`];return s&&e.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&c&&e.push('and'),c&&e.push(`version name "${n}" contains illegal characters (whitespace or "/")`),void f.warn(e.join(' '))}q(new e.Component(`${o}-version`,()=>({library:o,version:n}),"VERSION"))}function he(e,n){if(null!==e&&'function'!=typeof e)throw te.create("invalid-log-argument");(0,t.setUserLogHandler)(e,n)}function ue(e){(0,t.setLogLevel)(e)}
/**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const de='firebase-heartbeat-store';let be=null;function ge(){return be||(be=(0,i.openDB)("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(de)}catch(e){console.warn(e)}}}).catch(e=>{throw te.create("idb-open",{originalErrorMessage:e.message})})),be}async function me(e){try{const t=(await ge()).transaction(de),n=await t.objectStore(de).get(Ce(e));return await t.done,n}catch(e){if(e instanceof n.FirebaseError)f.warn(e.message);else{const t=te.create("idb-get",{originalErrorMessage:e?.message});f.warn(t.message)}}}async function ve(e,t){try{const n=(await ge()).transaction(de,'readwrite'),i=n.objectStore(de);await i.put(t,Ce(e)),await n.done}catch(e){if(e instanceof n.FirebaseError)f.warn(e.message);else{const t=te.create("idb-set",{originalErrorMessage:e?.message});f.warn(t.message)}}}function Ce(e){return`${e.name}!${e.options.appId}`}
/**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class ye{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider('app').getImmediate();this._storage=new Oe(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){try{const e=this.container.getProvider('platform-logger').getImmediate().getPlatformInfoString(),t=we();if(null==this._heartbeatsCache?.heartbeats&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==this._heartbeatsCache?.heartbeats))return;if(this._heartbeatsCache.lastSentHeartbeatDate===t||this._heartbeatsCache.heartbeats.some(e=>e.date===t))return;if(this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats.length>30){const e=Pe(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(e,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){f.warn(e)}}async getHeartbeatsHeader(){try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==this._heartbeatsCache?.heartbeats||0===this._heartbeatsCache.heartbeats.length)return'';const e=we(),{heartbeatsToSend:t,unsentEntries:i}=De(this._heartbeatsCache.heartbeats),o=(0,n.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return f.warn(e),''}}}function we(){return(new Date).toISOString().substring(0,10)}function De(e,t=1024){const n=[];let i=e.slice();for(const o of e){const e=n.find(e=>e.agent===o.agent);if(e){if(e.dates.push(o.date),Ee(n)>t){e.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),Ee(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Oe{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,n.isIndexedDBAvailable)()&&(0,n.validateIndexedDBOpenable)().then(()=>!0).catch(()=>!1)}async read(){if(await this._canUseIndexedDBPromise){const e=await me(this.app);return e?.heartbeats?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const t=await this.read();return ve(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){if(await this._canUseIndexedDBPromise){const t=await this.read();return ve(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:[...t.heartbeats,...e.heartbeats]})}}}function Ee(e){return(0,n.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:e})).length}function Pe(e){if(0===e.length)return-1;let t=0,n=e[0].date;for(let i=1;i<e.length;i++)e[i].date<n&&(n=e[i].date,t=i);return t}
/**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */var Se;Se='',q(new e.Component('platform-logger',e=>new o(e),"PRIVATE")),q(new e.Component('heartbeat',e=>new ye(e),"PRIVATE")),le(c,p,Se),le(c,p,'esm2020'),le('fire-js','')},1640,[1641,1644,1642,1645]);
__d(function(g,r,i,a,m,_e,d){"use strict";Object.defineProperty(_e,'__esModule',{value:!0}),Object.defineProperty(_e,"Component",{enumerable:!0,get:function(){return t}}),Object.defineProperty(_e,"ComponentContainer",{enumerable:!0,get:function(){return c}}),Object.defineProperty(_e,"Provider",{enumerable:!0,get:function(){return s}});var e=r(d[0]);class t{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const n='[DEFAULT]';
/**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class s{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const t=new e.Deferred;if(this.instancesDeferred.set(n,t),this.isInitialized(n)||this.shouldAutoInitialize())try{const e=this.getOrInitializeService({instanceIdentifier:n});e&&t.resolve(e)}catch(e){}}return this.instancesDeferred.get(n).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),n=e?.optional??!1;if(!this.isInitialized(t)&&!this.shouldAutoInitialize()){if(n)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:t})}catch(e){if(n)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(o(e))try{this.getOrInitializeService({instanceIdentifier:n})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=n){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>'INTERNAL'in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>'_delete'in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=n){return this.instances.has(e)}getOptions(e=n){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(s)}return s}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(n)??new Set;s.add(e),this.onInitCallbacks.set(n,s);const o=this.instances.get(n);return o&&e(o,n),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:(o=e,o===n?void 0:o),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}var o;return s||null}normalizeInstanceIdentifier(e=n){return this.component?this.component.multipleInstances?e:n:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function o(e){return"EAGER"===e.instantiationMode}
/**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class c{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new s(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},1641,[1642]);
__d(function(g,r,_i,_a,m,_e,_d){"use strict";Object.defineProperty(_e,'__esModule',{value:!0}),Object.defineProperty(_e,"CONSTANTS",{enumerable:!0,get:function(){return t}}),Object.defineProperty(_e,"DecodeBase64StringError",{enumerable:!0,get:function(){return u}}),Object.defineProperty(_e,"Deferred",{enumerable:!0,get:function(){return v}}),Object.defineProperty(_e,"ErrorFactory",{enumerable:!0,get:function(){return H}}),Object.defineProperty(_e,"FirebaseError",{enumerable:!0,get:function(){return z}}),Object.defineProperty(_e,"MAX_VALUE_MILLIS",{enumerable:!0,get:function(){return we}}),Object.defineProperty(_e,"RANDOM_FACTOR",{enumerable:!0,get:function(){return Ce}}),Object.defineProperty(_e,"Sha1",{enumerable:!0,get:function(){return le}}),Object.defineProperty(_e,"areCookiesEnabled",{enumerable:!0,get:function(){return $}}),Object.defineProperty(_e,"assert",{enumerable:!0,get:function(){return n}}),Object.defineProperty(_e,"assertionError",{enumerable:!0,get:function(){return o}}),Object.defineProperty(_e,"async",{enumerable:!0,get:function(){return be}}),Object.defineProperty(_e,"base64",{enumerable:!0,get:function(){return c}}),Object.defineProperty(_e,"base64Decode",{enumerable:!0,get:function(){return l}}),Object.defineProperty(_e,"base64Encode",{enumerable:!0,get:function(){return a}}),Object.defineProperty(_e,"base64urlEncodeWithoutPadding",{enumerable:!0,get:function(){return f}}),Object.defineProperty(_e,"calculateBackoffMillis",{enumerable:!0,get:function(){return De}}),Object.defineProperty(_e,"contains",{enumerable:!0,get:function(){return te}}),Object.defineProperty(_e,"createMockUserToken",{enumerable:!0,get:function(){return A}}),Object.defineProperty(_e,"createSubscribe",{enumerable:!0,get:function(){return he}}),Object.defineProperty(_e,"decode",{enumerable:!0,get:function(){return Q}}),Object.defineProperty(_e,"deepCopy",{enumerable:!0,get:function(){return h}}),Object.defineProperty(_e,"deepEqual",{enumerable:!0,get:function(){return ie}}),Object.defineProperty(_e,"deepExtend",{enumerable:!0,get:function(){return d}}),Object.defineProperty(_e,"errorPrefix",{enumerable:!0,get:function(){return me}}),Object.defineProperty(_e,"extractQuerystring",{enumerable:!0,get:function(){return fe}}),Object.defineProperty(_e,"generateSHA256Hash",{enumerable:!0,get:function(){return xe}}),Object.defineProperty(_e,"getDefaultAppConfig",{enumerable:!0,get:function(){return S}}),Object.defineProperty(_e,"getDefaultEmulatorHost",{enumerable:!0,get:function(){return j}}),Object.defineProperty(_e,"getDefaultEmulatorHostnameAndPort",{enumerable:!0,get:function(){return E}}),Object.defineProperty(_e,"getDefaults",{enumerable:!0,get:function(){return _}}),Object.defineProperty(_e,"getExperimentalSetting",{enumerable:!0,get:function(){return P}}),Object.defineProperty(_e,"getGlobal",{enumerable:!0,get:function(){return p}}),Object.defineProperty(_e,"getModularInstance",{enumerable:!0,get:function(){return ke}}),Object.defineProperty(_e,"getUA",{enumerable:!0,get:function(){return w}}),Object.defineProperty(_e,"isAdmin",{enumerable:!0,get:function(){return ee}}),Object.defineProperty(_e,"isBrowser",{enumerable:!0,get:function(){return T}}),Object.defineProperty(_e,"isBrowserExtension",{enumerable:!0,get:function(){return M}}),Object.defineProperty(_e,"isCloudWorkstation",{enumerable:!0,get:function(){return Me}}),Object.defineProperty(_e,"isCloudflareWorker",{enumerable:!0,get:function(){return k}}),Object.defineProperty(_e,"isElectron",{enumerable:!0,get:function(){return x}}),Object.defineProperty(_e,"isEmpty",{enumerable:!0,get:function(){return ne}}),Object.defineProperty(_e,"isIE",{enumerable:!0,get:function(){return I}}),Object.defineProperty(_e,"isIndexedDBAvailable",{enumerable:!0,get:function(){return F}}),Object.defineProperty(_e,"isMobileCordova",{enumerable:!0,get:function(){return C}}),Object.defineProperty(_e,"isNode",{enumerable:!0,get:function(){return D}}),Object.defineProperty(_e,"isNodeSdk",{enumerable:!0,get:function(){return L}}),Object.defineProperty(_e,"isReactNative",{enumerable:!0,get:function(){return B}}),Object.defineProperty(_e,"isSafari",{enumerable:!0,get:function(){return R}}),Object.defineProperty(_e,"isSafariOrWebkit",{enumerable:!0,get:function(){return U}}),Object.defineProperty(_e,"isUWP",{enumerable:!0,get:function(){return W}}),Object.defineProperty(_e,"isValidFormat",{enumerable:!0,get:function(){return Z}}),Object.defineProperty(_e,"isValidTimestamp",{enumerable:!0,get:function(){return X}}),Object.defineProperty(_e,"isWebWorker",{enumerable:!0,get:function(){return N}}),Object.defineProperty(_e,"issuedAtTime",{enumerable:!0,get:function(){return Y}}),Object.defineProperty(_e,"jsonEval",{enumerable:!0,get:function(){return q}}),Object.defineProperty(_e,"map",{enumerable:!0,get:function(){return oe}}),Object.defineProperty(_e,"ordinal",{enumerable:!0,get:function(){return Te}}),Object.defineProperty(_e,"pingServer",{enumerable:!0,get:function(){return Be}}),Object.defineProperty(_e,"promiseWithTimeout",{enumerable:!0,get:function(){return ce}}),Object.defineProperty(_e,"querystring",{enumerable:!0,get:function(){return ue}}),Object.defineProperty(_e,"querystringDecode",{enumerable:!0,get:function(){return ae}}),Object.defineProperty(_e,"safeGet",{enumerable:!0,get:function(){return re}}),Object.defineProperty(_e,"stringLength",{enumerable:!0,get:function(){return Pe}}),Object.defineProperty(_e,"stringToByteArray",{enumerable:!0,get:function(){return Se}}),Object.defineProperty(_e,"stringify",{enumerable:!0,get:function(){return K}}),Object.defineProperty(_e,"validateArgCount",{enumerable:!0,get:function(){return ye}}),Object.defineProperty(_e,"validateCallback",{enumerable:!0,get:function(){return je}}),Object.defineProperty(_e,"validateContextObject",{enumerable:!0,get:function(){return Ee}}),Object.defineProperty(_e,"validateIndexedDBOpenable",{enumerable:!0,get:function(){return V}}),Object.defineProperty(_e,"validateNamespace",{enumerable:!0,get:function(){return Oe}});var e=r(_d[0]);
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const t={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:'${JSCORE_VERSION}'},n=function(e,t){if(!e)throw o(t)},o=function(e){return new Error('Firebase Database ('+t.SDK_VERSION+') INTERNAL ASSERT FAILED: '+e)},i=function(e){const t=[];let n=0;for(let o=0;o<e.length;o++){let i=e.charCodeAt(o);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&o+1<e.length&&56320==(64512&e.charCodeAt(o+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++o)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},s=function(e){const t=[];let n=0,o=0;for(;n<e.length;){const i=e[n++];if(i<128)t[o++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[o++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[o++]=String.fromCharCode(55296+(s>>10)),t[o++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],c=e[n++];t[o++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&c)}}return t.join('')},c={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+'+/='},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+'-_.'},HAS_NATIVE_SUPPORT:'function'==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error('encodeByteArray takes an array as a parameter');this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,o=[];for(let t=0;t<e.length;t+=3){const i=e[t],s=t+1<e.length,c=s?e[t+1]:0,u=t+2<e.length,a=u?e[t+2]:0,f=i>>2,l=(3&i)<<4|c>>4;let h=(15&c)<<2|a>>6,d=63&a;u||(d=64,s||(h=64)),o.push(n[f],n[l],n[h],n[d])}return o.join('')},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(i(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):s(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,o=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const c=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==s||null==c||null==a)throw new u;const f=i<<2|s>>4;if(o.push(f),64!==c){const e=s<<4&240|c>>2;if(o.push(e),64!==a){const e=c<<6&192|a;o.push(e)}}}return o},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class u extends Error{constructor(){super(...arguments),this.name='DecodeBase64StringError'}}const a=function(e){const t=i(e);return c.encodeByteArray(t,!0)},f=function(e){return a(e).replace(/\./g,'')},l=function(e){try{return c.decodeString(e,!0)}catch(e){console.error('base64Decode failed: ',e)}return null};
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
function h(e){return d(void 0,e)}function d(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&b(n)&&(e[n]=d(e[n],t[n]));return e}function b(e){return'__proto__'!==e}
/**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function p(){if('undefined'!=typeof self)return self;if('undefined'!=typeof window)return window;if(void 0!==g)return g;throw new Error('Unable to locate global object.')}
/**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const y=()=>{if('undefined'==typeof process||void 0===process.env)return;const e=process.env.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},O=()=>{if('undefined'==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&l(e[1]);return t&&JSON.parse(t)},_=()=>{try{return(0,e.getDefaultsFromPostinstall)()||p().__FIREBASE_DEFAULTS__||y()||O()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},j=e=>_()?.emulatorHosts?.[e],E=e=>{const t=j(e);if(!t)return;const n=t.lastIndexOf(':');if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const o=parseInt(t.substring(n+1),10);return'['===t[0]?[t.substring(1,n-1),o]:[t.substring(0,n),o]},S=()=>_()?.config,P=e=>_()?.[`_${e}`];
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
class v{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),'function'==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
/**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function A(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||'demo-project',o=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s={iss:`https://securetoken.google.com/${n}`,aud:n,iat:o,exp:o+3600,auth_time:o,sub:i,user_id:i,firebase:{sign_in_provider:'custom',identities:{}},...e};return[f(JSON.stringify({alg:'none',type:'JWT'})),f(JSON.stringify(s)),''].join('.')}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function w(){return'undefined'!=typeof navigator&&'string'==typeof navigator.userAgent?navigator.userAgent:''}function C(){return'undefined'!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(w())}function D(){const e=_()?.forceEnvironment;if('node'===e)return!0;if('browser'===e)return!1;try{return'[object process]'===Object.prototype.toString.call(g.process)}catch(e){return!1}}function T(){return'undefined'!=typeof window||N()}function N(){return'undefined'!=typeof WorkerGlobalScope&&'undefined'!=typeof self&&self instanceof WorkerGlobalScope}function k(){return'undefined'!=typeof navigator&&'Cloudflare-Workers'===navigator.userAgent}function M(){const e='object'==typeof chrome?chrome.runtime:'object'==typeof browser?browser.runtime:void 0;return'object'==typeof e&&void 0!==e.id}function B(){return'object'==typeof navigator&&'ReactNative'===navigator.product}function x(){return w().indexOf('Electron/')>=0}function I(){const e=w();return e.indexOf('MSIE ')>=0||e.indexOf('Trident/')>=0}function W(){return w().indexOf('MSAppHost/')>=0}function L(){return!0===t.NODE_CLIENT||!0===t.NODE_ADMIN}function R(){return!D()&&!!navigator.userAgent&&navigator.userAgent.includes('Safari')&&!navigator.userAgent.includes('Chrome')}function U(){return!D()&&!!navigator.userAgent&&(navigator.userAgent.includes('Safari')||navigator.userAgent.includes('WebKit'))&&!navigator.userAgent.includes('Chrome')}function F(){try{return'object'==typeof indexedDB}catch(e){return!1}}function V(){return new Promise((e,t)=>{try{let n=!0;const o='validate-browser-context-for-indexeddb-analytics-module',i=self.indexedDB.open(o);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(o),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{t(i.error?.message||'')}}catch(e){t(e)}})}function $(){return!('undefined'==typeof navigator||!navigator.cookieEnabled)}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class z extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,z.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,H.prototype.create)}}class H{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},o=`${this.service}/${e}`,i=this.errors[e],s=i?J(i,n):'Error',c=`${this.serviceName}: ${s} (${o}).`;return new z(o,c,n)}}function J(e,t){return e.replace(G,(e,n)=>{const o=t[n];return null!=o?String(o):`<${n}?>`})}const G=/\{\$([^}]+)}/g;
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function q(e){return JSON.parse(e)}function K(e){return JSON.stringify(e)}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const Q=function(e){let t={},n={},o={},i='';try{const s=e.split('.');t=q(l(s[0])||''),n=q(l(s[1])||''),i=s[2],o=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:o,signature:i}},X=function(e){const t=Q(e).claims,n=Math.floor((new Date).getTime()/1e3);let o=0,i=0;return'object'==typeof t&&(t.hasOwnProperty('nbf')?o=t.nbf:t.hasOwnProperty('iat')&&(o=t.iat),i=t.hasOwnProperty('exp')?t.exp:o+86400),!!n&&!!o&&!!i&&n>=o&&n<=i},Y=function(e){const t=Q(e).claims;return'object'==typeof t&&t.hasOwnProperty('iat')?t.iat:null},Z=function(e){const t=Q(e).claims;return!!t&&'object'==typeof t&&t.hasOwnProperty('iat')},ee=function(e){const t=Q(e).claims;return'object'==typeof t&&!0===t.admin};
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
function te(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function re(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function ne(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function oe(e,t,n){const o={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(o[i]=t.call(n,e[i],i,e));return o}function ie(e,t){if(e===t)return!0;const n=Object.keys(e),o=Object.keys(t);for(const i of n){if(!o.includes(i))return!1;const n=e[i],s=t[i];if(se(n)&&se(s)){if(!ie(n,s))return!1}else if(n!==s)return!1}for(const e of o)if(!n.includes(e))return!1;return!0}function se(e){return null!==e&&'object'==typeof e}
/**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function ce(e,t=2e3){const n=new v;return setTimeout(()=>n.reject('timeout!'),t),e.then(n.resolve,n.reject),n.promise}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function ue(e){const t=[];for(const[n,o]of Object.entries(e))Array.isArray(o)?o.forEach(e=>{t.push(encodeURIComponent(n)+'='+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+'='+encodeURIComponent(o));return t.length?'&'+t.join('&'):''}function ae(e){const t={};return e.replace(/^\?/,'').split('&').forEach(e=>{if(e){const[n,o]=e.split('=');t[decodeURIComponent(n)]=decodeURIComponent(o)}}),t}function fe(e){const t=e.indexOf('?');if(!t)return'';const n=e.indexOf('#',t);return e.substring(t,n>0?n:void 0)}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class le{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if('string'==typeof e)for(let o=0;o<16;o++)n[o]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let o=0;o<16;o++)n[o]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){const t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=4294967295&(t<<1|t>>>31)}let o,i,s=this.chain_[0],c=this.chain_[1],u=this.chain_[2],a=this.chain_[3],f=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(o=a^c&(u^a),i=1518500249):(o=c^u^a,i=1859775393):e<60?(o=c&u|a&(c|u),i=2400959708):(o=c^u^a,i=3395469782);const t=(s<<5|s>>>27)+o+f+i+n[e]&4294967295;f=a,a=u,u=4294967295&(c<<30|c>>>2),c=s,s=t}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+c&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+f&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let o=0;const i=this.buf_;let s=this.inbuf_;for(;o<t;){if(0===s)for(;o<=n;)this.compress_(e,o),o+=this.blockSize;if('string'==typeof e){for(;o<t;)if(i[s]=e.charCodeAt(o),++s,++o,s===this.blockSize){this.compress_(i),s=0;break}}else for(;o<t;)if(i[s]=e[o],++s,++o,s===this.blockSize){this.compress_(i),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let o=24;o>=0;o-=8)e[n]=this.chain_[t]>>o&255,++n;return e}}function he(e,t){const n=new de(e,t);return n.subscribe.bind(n)}class de{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let o;if(void 0===e&&void 0===t&&void 0===n)throw new Error('Missing Observer.');o=pe(e,['next','error','complete'])?e:{next:e,error:t,complete:n},void 0===o.next&&(o.next=ge),void 0===o.error&&(o.error=ge),void 0===o.complete&&(o.complete=ge);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch(e){}}),this.observers.push(o),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){'undefined'!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function be(e,t){return(...n)=>{Promise.resolve(!0).then(()=>{e(...n)}).catch(e=>{t&&t(e)})}}function pe(e,t){if('object'!=typeof e||null===e)return!1;for(const n of t)if(n in e&&'function'==typeof e[n])return!0;return!1}function ge(){}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const ye=function(e,t,n,o){let i;if(o<t?i='at least '+t:o>n&&(i=0===n?'none':'no more than '+n),i){throw new Error(e+' failed: Was called with '+o+(1===o?' argument.':' arguments.')+' Expects '+i+'.')}};function me(e,t){return`${e} failed: ${t} argument `}function Oe(e,t,n){if((!n||t)&&'string'!=typeof t)throw new Error(me(e,'namespace')+'must be a valid firebase namespace.')}function je(e,t,n,o){if((!o||n)&&'function'!=typeof n)throw new Error(me(e,t)+'must be a valid function.')}function Ee(e,t,n,o){if((!o||n)&&('object'!=typeof n||null===n))throw new Error(me(e,t)+'must be a valid context object.')}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const Se=function(e){const t=[];let o=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);if(s>=55296&&s<=56319){const t=s-55296;i++,n(i<e.length,'Surrogate pair missing trail surrogate.');s=65536+(t<<10)+(e.charCodeAt(i)-56320)}s<128?t[o++]=s:s<2048?(t[o++]=s>>6|192,t[o++]=63&s|128):s<65536?(t[o++]=s>>12|224,t[o++]=s>>6&63|128,t[o++]=63&s|128):(t[o++]=s>>18|240,t[o++]=s>>12&63|128,t[o++]=s>>6&63|128,t[o++]=63&s|128)}return t},Pe=function(e){let t=0;for(let n=0;n<e.length;n++){const o=e.charCodeAt(n);o<128?t++:o<2048?t+=2:o>=55296&&o<=56319?(t+=4,n++):t+=3}return t},ve=1e3,Ae=2,we=144e5,Ce=.5;function De(e,t=ve,n=Ae){const o=t*Math.pow(n,e),i=Math.round(Ce*o*(Math.random()-.5)*2);return Math.min(we,o+i)}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function Te(e){return Number.isFinite(e)?e+Ne(e):`${e}`}function Ne(e){const t=(e=Math.abs(e))%100;if(t>=10&&t<=20)return'th';const n=e%10;return 1===n?'st':2===n?'nd':3===n?'rd':'th'}
/**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function ke(e){return e&&e._delegate?e._delegate:e}
/**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function Me(e){try{return(e.startsWith('http://')||e.startsWith('https://')?new URL(e).hostname:e).endsWith('.cloudworkstations.dev')}catch{return!1}}async function Be(e){return(await fetch(e,{credentials:'include'})).ok}
/**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */async function xe(e){const t=(new TextEncoder).encode(e),n=await crypto.subtle.digest('SHA-256',t);return Array.from(new Uint8Array(n)).map(e=>e.toString(16).padStart(2,'0')).join('')}},1642,[1643]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),Object.defineProperty(e,"getDefaultsFromPostinstall",{enumerable:!0,get:function(){return t}});const t=()=>{}},1643,[]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),Object.defineProperty(e,"LogLevel",{enumerable:!0,get:function(){return n}}),Object.defineProperty(e,"Logger",{enumerable:!0,get:function(){return h}}),Object.defineProperty(e,"setLogLevel",{enumerable:!0,get:function(){return L}}),Object.defineProperty(e,"setUserLogHandler",{enumerable:!0,get:function(){return f}});
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
const t=[];var n;!(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(n||(n={}));const o={debug:n.DEBUG,verbose:n.VERBOSE,info:n.INFO,warn:n.WARN,error:n.ERROR,silent:n.SILENT},l=n.INFO,s={[n.DEBUG]:'log',[n.VERBOSE]:'log',[n.INFO]:'info',[n.WARN]:'warn',[n.ERROR]:'error'},u=(t,n,...o)=>{if(n<t.logLevel)return;const l=(new Date).toISOString(),u=s[n];if(!u)throw new Error(`Attempted to log a message with an invalid logType (value: ${n})`);console[u](`[${l}]  ${t.name}:`,...o)};class h{constructor(n){this.name=n,this._logLevel=l,this._logHandler=u,this._userLogHandler=null,t.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in n))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel='string'==typeof t?o[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if('function'!=typeof t)throw new TypeError('Value assigned to `logHandler` must be a function');this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,n.DEBUG,...t),this._logHandler(this,n.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,n.VERBOSE,...t),this._logHandler(this,n.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,n.INFO,...t),this._logHandler(this,n.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,n.WARN,...t),this._logHandler(this,n.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,n.ERROR,...t),this._logHandler(this,n.ERROR,...t)}}function L(n){t.forEach(t=>{t.setLogLevel(n)})}function f(l,s){for(const u of t){let t=null;s&&s.level&&(t=o[s.level]),u.userLogHandler=null===l?null:(o,s,...u)=>{const h=u.map(t=>{if(null==t)return null;if('string'==typeof t)return t;if('number'==typeof t||'boolean'==typeof t)return t.toString();if(t instanceof Error)return t.message;try{return JSON.stringify(t)}catch(t){return null}}).filter(t=>t).join(' ');s>=(t??o.logLevel)&&l({level:n[s].toLowerCase(),message:h,args:u,type:o.name})}}}},1644,[]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),Object.defineProperty(e,"unwrap",{enumerable:!0,get:function(){return n.u}}),Object.defineProperty(e,"wrap",{enumerable:!0,get:function(){return n.w}}),Object.defineProperty(e,"deleteDB",{enumerable:!0,get:function(){return o}}),Object.defineProperty(e,"openDB",{enumerable:!0,get:function(){return t}});var n=r(d[0]);function t(t,o,{blocked:s,upgrade:c,blocking:u,terminated:l}={}){const f=indexedDB.open(t,o),b=(0,n.w)(f);return c&&f.addEventListener('upgradeneeded',t=>{c((0,n.w)(f.result),t.oldVersion,t.newVersion,(0,n.w)(f.transaction),t)}),s&&f.addEventListener('blocked',n=>s(n.oldVersion,n.newVersion,n)),b.then(n=>{l&&n.addEventListener('close',()=>l()),u&&n.addEventListener('versionchange',n=>u(n.oldVersion,n.newVersion,n))}).catch(()=>{}),b}function o(t,{blocked:o}={}){const s=indexedDB.deleteDatabase(t);return o&&s.addEventListener('blocked',n=>o(n.oldVersion,n)),(0,n.w)(s).then(()=>{})}const s=['get','getKey','getAll','getAllKeys','count'],c=['put','add','delete','clear'],u=new Map;function l(n,t){if(!(n instanceof IDBDatabase)||t in n||'string'!=typeof t)return;if(u.get(t))return u.get(t);const o=t.replace(/FromIndex$/,''),l=t!==o,f=c.includes(o);if(!(o in(l?IDBIndex:IDBObjectStore).prototype)||!f&&!s.includes(o))return;const b=async function(n,...t){const s=this.transaction(n,f?'readwrite':'readonly');let c=s.store;return l&&(c=c.index(t.shift())),(await Promise.all([c[o](...t),f&&s.done]))[0]};return u.set(t,b),b}(0,n.r)(n=>({...n,get:(t,o,s)=>l(t,o)||n.get(t,o,s),has:(t,o)=>!!l(t,o)||n.has(t,o)}))},1645,[1646]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),Object.defineProperty(e,"a",{enumerable:!0,get:function(){return p}}),Object.defineProperty(e,"i",{enumerable:!0,get:function(){return t}}),Object.defineProperty(e,"r",{enumerable:!0,get:function(){return l}}),Object.defineProperty(e,"u",{enumerable:!0,get:function(){return B}}),Object.defineProperty(e,"w",{enumerable:!0,get:function(){return I}});const t=(t,n)=>n.some(n=>t instanceof n);let n,o;const s=new WeakMap,c=new WeakMap,u=new WeakMap,f=new WeakMap,p=new WeakMap;function b(t){const n=new Promise((n,o)=>{const s=()=>{t.removeEventListener('success',c),t.removeEventListener('error',u)},c=()=>{n(I(t.result)),s()},u=()=>{o(t.error),s()};t.addEventListener('success',c),t.addEventListener('error',u)});return n.then(n=>{n instanceof IDBCursor&&s.set(n,t)}).catch(()=>{}),p.set(n,t),n}function v(t){if(c.has(t))return;const n=new Promise((n,o)=>{const s=()=>{t.removeEventListener('complete',c),t.removeEventListener('error',u),t.removeEventListener('abort',u)},c=()=>{n(),s()},u=()=>{o(t.error||new DOMException('AbortError','AbortError')),s()};t.addEventListener('complete',c),t.addEventListener('error',u),t.addEventListener('abort',u)});c.set(t,n)}let D={get(t,n,o){if(t instanceof IDBTransaction){if('done'===n)return c.get(t);if('objectStoreNames'===n)return t.objectStoreNames||u.get(t);if('store'===n)return o.objectStoreNames[1]?void 0:o.objectStore(o.objectStoreNames[0])}return I(t[n])},set:(t,n,o)=>(t[n]=o,!0),has:(t,n)=>t instanceof IDBTransaction&&('done'===n||'store'===n)||n in t};function l(t){D=t(D)}function y(c){return'function'==typeof c?(f=c)!==IDBDatabase.prototype.transaction||'objectStoreNames'in IDBTransaction.prototype?(o||(o=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(f)?function(...t){return f.apply(B(this),t),I(s.get(this))}:function(...t){return I(f.apply(B(this),t))}:function(t,...n){const o=f.call(B(this),t,...n);return u.set(o,t.sort?t.sort():[t]),I(o)}:(c instanceof IDBTransaction&&v(c),t(c,n||(n=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(c,D):c);var f}function I(t){if(t instanceof IDBRequest)return b(t);if(f.has(t))return f.get(t);const n=y(t);return n!==t&&(f.set(t,n),p.set(n,t)),n}const B=t=>p.get(t)},1646,[]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});var t=r(d[0]);Object.keys(t).forEach(function(n){'default'===n||Object.prototype.hasOwnProperty.call(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[n]}})});
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
(0,t.registerVersion)("firebase","12.14.0",'app')},1647,[1640]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});var t=r(d[0]);Object.keys(t).forEach(function(n){'default'===n||Object.prototype.hasOwnProperty.call(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[n]}})})},1648,[1649]);
__d(function(g,_r,_i,_a,m,_e,_d){"use strict";Object.defineProperty(_e,'__esModule',{value:!0}),Object.defineProperty(_e,"AbstractUserDataWriter",{enumerable:!0,get:function(){return n.A}}),Object.defineProperty(_e,"Bytes",{enumerable:!0,get:function(){return n.B}}),Object.defineProperty(_e,"CACHE_SIZE_UNLIMITED",{enumerable:!0,get:function(){return n.au}}),Object.defineProperty(_e,"CollectionReference",{enumerable:!0,get:function(){return n.av}}),Object.defineProperty(_e,"DocumentReference",{enumerable:!0,get:function(){return n.D}}),Object.defineProperty(_e,"FieldPath",{enumerable:!0,get:function(){return n.Y}}),Object.defineProperty(_e,"FieldValue",{enumerable:!0,get:function(){return n.aw}}),Object.defineProperty(_e,"Firestore",{enumerable:!0,get:function(){return n.F}}),Object.defineProperty(_e,"FirestoreError",{enumerable:!0,get:function(){return n.d}}),Object.defineProperty(_e,"GeoPoint",{enumerable:!0,get:function(){return n.ax}}),Object.defineProperty(_e,"LoadBundleTask",{enumerable:!0,get:function(){return n.ay}}),Object.defineProperty(_e,"Query",{enumerable:!0,get:function(){return n.Q}}),Object.defineProperty(_e,"Timestamp",{enumerable:!0,get:function(){return n.az}}),Object.defineProperty(_e,"VectorValue",{enumerable:!0,get:function(){return n.aA}}),Object.defineProperty(_e,"_AutoId",{enumerable:!0,get:function(){return n.N}}),Object.defineProperty(_e,"_ByteString",{enumerable:!0,get:function(){return n.aB}}),Object.defineProperty(_e,"_DatabaseId",{enumerable:!0,get:function(){return n.aC}}),Object.defineProperty(_e,"_DocumentKey",{enumerable:!0,get:function(){return n.v}}),Object.defineProperty(_e,"_EmptyAppCheckTokenProvider",{enumerable:!0,get:function(){return n.aD}}),Object.defineProperty(_e,"_EmptyAuthCredentialsProvider",{enumerable:!0,get:function(){return n.aE}}),Object.defineProperty(_e,"_FieldPath",{enumerable:!0,get:function(){return n.aF}}),Object.defineProperty(_e,"_cast",{enumerable:!0,get:function(){return n.y}}),Object.defineProperty(_e,"_debugAssert",{enumerable:!0,get:function(){return n.aG}}),Object.defineProperty(_e,"_internalAggregationQueryToProtoRunAggregationQueryRequest",{enumerable:!0,get:function(){return n.aH}}),Object.defineProperty(_e,"_internalQueryToProtoQueryTarget",{enumerable:!0,get:function(){return n.aI}}),Object.defineProperty(_e,"_isBase64Available",{enumerable:!0,get:function(){return n.aJ}}),Object.defineProperty(_e,"_logWarn",{enumerable:!0,get:function(){return n.ad}}),Object.defineProperty(_e,"_validateIsNotUsedTogether",{enumerable:!0,get:function(){return n.aK}}),Object.defineProperty(_e,"arrayRemove",{enumerable:!0,get:function(){return n.aL}}),Object.defineProperty(_e,"arrayUnion",{enumerable:!0,get:function(){return n.aM}}),Object.defineProperty(_e,"clearIndexedDbPersistence",{enumerable:!0,get:function(){return n.aN}}),Object.defineProperty(_e,"collection",{enumerable:!0,get:function(){return n.aO}}),Object.defineProperty(_e,"collectionGroup",{enumerable:!0,get:function(){return n.aP}}),Object.defineProperty(_e,"connectFirestoreEmulator",{enumerable:!0,get:function(){return n.aQ}}),Object.defineProperty(_e,"deleteField",{enumerable:!0,get:function(){return n.aR}}),Object.defineProperty(_e,"disableNetwork",{enumerable:!0,get:function(){return n.aS}}),Object.defineProperty(_e,"doc",{enumerable:!0,get:function(){return n.a6}}),Object.defineProperty(_e,"documentId",{enumerable:!0,get:function(){return n.aT}}),Object.defineProperty(_e,"enableIndexedDbPersistence",{enumerable:!0,get:function(){return n.aU}}),Object.defineProperty(_e,"enableMultiTabIndexedDbPersistence",{enumerable:!0,get:function(){return n.aV}}),Object.defineProperty(_e,"enableNetwork",{enumerable:!0,get:function(){return n.aW}}),Object.defineProperty(_e,"ensureFirestoreConfigured",{enumerable:!0,get:function(){return n.z}}),Object.defineProperty(_e,"getFirestore",{enumerable:!0,get:function(){return n.aX}}),Object.defineProperty(_e,"increment",{enumerable:!0,get:function(){return n.aY}}),Object.defineProperty(_e,"initializeFirestore",{enumerable:!0,get:function(){return n.aZ}}),Object.defineProperty(_e,"loadBundle",{enumerable:!0,get:function(){return n.a9}}),Object.defineProperty(_e,"maximum",{enumerable:!0,get:function(){return n.a_}}),Object.defineProperty(_e,"minimum",{enumerable:!0,get:function(){return n.a$}}),Object.defineProperty(_e,"namedQuery",{enumerable:!0,get:function(){return n.aa}}),Object.defineProperty(_e,"queryEqual",{enumerable:!0,get:function(){return n.x}}),Object.defineProperty(_e,"refEqual",{enumerable:!0,get:function(){return n.b0}}),Object.defineProperty(_e,"serverTimestamp",{enumerable:!0,get:function(){return n.b1}}),Object.defineProperty(_e,"setLogLevel",{enumerable:!0,get:function(){return n.b2}}),Object.defineProperty(_e,"terminate",{enumerable:!0,get:function(){return n.b3}}),Object.defineProperty(_e,"vector",{enumerable:!0,get:function(){return n.b4}}),Object.defineProperty(_e,"waitForPendingWrites",{enumerable:!0,get:function(){return n.b5}}),Object.defineProperty(_e,"AggregateField",{enumerable:!0,get:function(){return a}}),Object.defineProperty(_e,"AggregateQuerySnapshot",{enumerable:!0,get:function(){return u}}),Object.defineProperty(_e,"DocumentSnapshot",{enumerable:!0,get:function(){return ae}}),Object.defineProperty(_e,"PersistentCacheIndexManager",{enumerable:!0,get:function(){return Ve}}),Object.defineProperty(_e,"QueryCompositeFilterConstraint",{enumerable:!0,get:function(){return _}}),Object.defineProperty(_e,"QueryConstraint",{enumerable:!0,get:function(){return h}}),Object.defineProperty(_e,"QueryDocumentSnapshot",{enumerable:!0,get:function(){return ce}}),Object.defineProperty(_e,"QueryEndAtConstraint",{enumerable:!0,get:function(){return C}}),Object.defineProperty(_e,"QueryFieldFilterConstraint",{enumerable:!0,get:function(){return y}}),Object.defineProperty(_e,"QueryLimitConstraint",{enumerable:!0,get:function(){return j}}),Object.defineProperty(_e,"QueryOrderByConstraint",{enumerable:!0,get:function(){return O}}),Object.defineProperty(_e,"QuerySnapshot",{enumerable:!0,get:function(){return de}}),Object.defineProperty(_e,"QueryStartAtConstraint",{enumerable:!0,get:function(){return D}}),Object.defineProperty(_e,"SnapshotMetadata",{enumerable:!0,get:function(){return se}}),Object.defineProperty(_e,"Transaction",{enumerable:!0,get:function(){return ge}}),Object.defineProperty(_e,"WriteBatch",{enumerable:!0,get:function(){return pe}}),Object.defineProperty(_e,"_TestingHooks",{enumerable:!0,get:function(){return Be}}),Object.defineProperty(_e,"addDoc",{enumerable:!0,get:function(){return Ce}}),Object.defineProperty(_e,"aggregateFieldEqual",{enumerable:!0,get:function(){return Q}}),Object.defineProperty(_e,"aggregateQuerySnapshotEqual",{enumerable:!0,get:function(){return G}}),Object.defineProperty(_e,"and",{enumerable:!0,get:function(){return P}}),Object.defineProperty(_e,"average",{enumerable:!0,get:function(){return W}}),Object.defineProperty(_e,"count",{enumerable:!0,get:function(){return U}}),Object.defineProperty(_e,"deleteAllPersistentCacheIndexes",{enumerable:!0,get:function(){return Qe}}),Object.defineProperty(_e,"deleteDoc",{enumerable:!0,get:function(){return Se}}),Object.defineProperty(_e,"disablePersistentCacheIndexAutoCreation",{enumerable:!0,get:function(){return Ue}}),Object.defineProperty(_e,"documentSnapshotFromJSON",{enumerable:!0,get:function(){return ue}}),Object.defineProperty(_e,"enablePersistentCacheIndexAutoCreation",{enumerable:!0,get:function(){return We}}),Object.defineProperty(_e,"endAt",{enumerable:!0,get:function(){return k}}),Object.defineProperty(_e,"endBefore",{enumerable:!0,get:function(){return q}}),Object.defineProperty(_e,"executeWrite",{enumerable:!0,get:function(){return Ee}}),Object.defineProperty(_e,"getAggregateFromServer",{enumerable:!0,get:function(){return B}}),Object.defineProperty(_e,"getCountFromServer",{enumerable:!0,get:function(){return z}}),Object.defineProperty(_e,"getDoc",{enumerable:!0,get:function(){return Pe}}),Object.defineProperty(_e,"getDocFromCache",{enumerable:!0,get:function(){return Oe}}),Object.defineProperty(_e,"getDocFromServer",{enumerable:!0,get:function(){return ve}}),Object.defineProperty(_e,"getDocs",{enumerable:!0,get:function(){return je}}),Object.defineProperty(_e,"getDocsFromCache",{enumerable:!0,get:function(){return Ie}}),Object.defineProperty(_e,"getDocsFromServer",{enumerable:!0,get:function(){return Ne}}),Object.defineProperty(_e,"getPersistentCacheIndexManager",{enumerable:!0,get:function(){return Le}}),Object.defineProperty(_e,"limit",{enumerable:!0,get:function(){return I}}),Object.defineProperty(_e,"limitToLast",{enumerable:!0,get:function(){return N}}),Object.defineProperty(_e,"memoryEagerGarbageCollector",{enumerable:!0,get:function(){return Y}}),Object.defineProperty(_e,"memoryLocalCache",{enumerable:!0,get:function(){return Z}}),Object.defineProperty(_e,"memoryLruGarbageCollector",{enumerable:!0,get:function(){return X}}),Object.defineProperty(_e,"onSnapshot",{enumerable:!0,get:function(){return qe}}),Object.defineProperty(_e,"onSnapshotResume",{enumerable:!0,get:function(){return ke}}),Object.defineProperty(_e,"onSnapshotsInSync",{enumerable:!0,get:function(){return Fe}}),Object.defineProperty(_e,"or",{enumerable:!0,get:function(){return w}}),Object.defineProperty(_e,"orderBy",{enumerable:!0,get:function(){return v}}),Object.defineProperty(_e,"persistentLocalCache",{enumerable:!0,get:function(){return ee}}),Object.defineProperty(_e,"persistentMultipleTabManager",{enumerable:!0,get:function(){return oe}}),Object.defineProperty(_e,"persistentSingleTabManager",{enumerable:!0,get:function(){return re}}),Object.defineProperty(_e,"query",{enumerable:!0,get:function(){return p}}),Object.defineProperty(_e,"querySnapshotFromJSON",{enumerable:!0,get:function(){return fe}}),Object.defineProperty(_e,"runTransaction",{enumerable:!0,get:function(){return we}}),Object.defineProperty(_e,"setDoc",{enumerable:!0,get:function(){return De}}),Object.defineProperty(_e,"setIndexConfiguration",{enumerable:!0,get:function(){return xe}}),Object.defineProperty(_e,"snapshotEqual",{enumerable:!0,get:function(){return he}}),Object.defineProperty(_e,"startAfter",{enumerable:!0,get:function(){return S}}),Object.defineProperty(_e,"startAt",{enumerable:!0,get:function(){return A}}),Object.defineProperty(_e,"sum",{enumerable:!0,get:function(){return L}}),Object.defineProperty(_e,"updateDoc",{enumerable:!0,get:function(){return Ae}}),Object.defineProperty(_e,"where",{enumerable:!0,get:function(){return b}}),Object.defineProperty(_e,"writeBatch",{enumerable:!0,get:function(){return Te}});var e=_r(_d[0]),t=_r(_d[1]),n=_r(_d[2]),r=_r(_d[3]);_r(_d[4]),_r(_d[5]),_r(_d[6]);const o="@firebase/firestore",i="4.15.0";
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function s(e){return(function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const e of t)if(e in n&&"function"==typeof n[e])return!0;return!1}
/**
    * @license
    * Copyright 2020 Google LLC
    *
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    *   http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    */)(e,["next","error","complete"])}
/**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class a{constructor(e="count",t){this._internalFieldPath=t,this.type="AggregateField",this.aggregateType=e}}class u{constructor(e,t,n){this._userDataWriter=t,this._data=n,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertObjectMap(this._data)}_fieldsProto(){return new n.O({mapValue:{fields:this._data}}).clone().value.mapValue.fields}}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class c{constructor(e,t,n,r,o){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new n.D(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new d(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){return this._document?.data.clone().value.mapValue.fields??void 0}get(e){if(this._document){const t=this._document.data.field((0,n.j)("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class d extends c{data(){return super.data()}}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function f(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new n.d(n.e.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class l{}class h extends l{}function p(e,t,...r){let o=[];t instanceof l&&o.push(t),o=o.concat(r),(function(e){const t=e.filter(e=>e instanceof _).length,r=e.filter(e=>e instanceof y).length;if(t>1||t>0&&r>0)throw new n.d(n.e.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
/**
    * @license
    * Copyright 2020 Google LLC
    *
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    *   http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    */)(o);for(const t of o)e=t._apply(e);return e}class y extends h{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new y(e,t,n)}_apply(e){const t=this._parse(e);return T(e._query,t),new n.Q(e.firestore,e.converter,(0,n.f)(e._query,t))}_parse(e){const t=(0,n.g)(e.firestore),r=(function(e,t,r,o,i,s,a){let u;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new n.d(n.e.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){M(a,s);const t=[];for(const n of a)t.push(E(o,e,n));u={arrayValue:{values:t}}}else u=E(o,e,a)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||M(a,s),u=(0,n.h)(r,t,a,"in"===s||"not-in"===s);return n.i.create(i,s,u)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value);return r}}function b(e,t,r){const o=t,i=(0,n.j)("where",e);return y._create(i,o,r)}class _ extends l{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new _(e,t)}_parse(e){const t=this._queryConstraints.map(t=>t._parse(e)).filter(e=>e.getFilters().length>0);return 1===t.length?t[0]:n.C.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:((function(e,t){let r=e;const o=t.getFlattenedFilters();for(const e of o)T(r,e),r=(0,n.f)(r,e)})(e._query,t),new n.Q(e.firestore,e.converter,(0,n.f)(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}function w(...e){return e.forEach(e=>x("or",e)),_._create("or",e)}function P(...e){return e.forEach(e=>x("and",e)),_._create("and",e)}class O extends h{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new O(e,t)}_apply(e){const t=(function(e,t,r){if(null!==e.startAt)throw new n.d(n.e.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new n.d(n.e.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new n.an(t,r)})(e._query,this._field,this._direction);return new n.Q(e.firestore,e.converter,(0,n.k)(e._query,t))}}function v(e,t="asc"){const r=t,o=(0,n.j)("orderBy",e);return O._create(o,r)}class j extends h{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new j(e,t,n)}_apply(e){return new n.Q(e.firestore,e.converter,(0,n.l)(e._query,this._limit,this._limitType))}}function I(e){return(0,n.m)("limit",e),j._create("limit",e,"F")}function N(e){return(0,n.m)("limitToLast",e),j._create("limitToLast",e,"L")}class D extends h{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new D(e,t,n)}_apply(e){const t=F(e,this.type,this._docOrFields,this._inclusive);return new n.Q(e.firestore,e.converter,(0,n.n)(e._query,t))}}function A(...e){return D._create("startAt",e,!0)}function S(...e){return D._create("startAfter",e,!1)}class C extends h{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new C(e,t,n)}_apply(e){const t=F(e,this.type,this._docOrFields,this._inclusive);return new n.Q(e.firestore,e.converter,(0,n.o)(e._query,t))}}function q(...e){return C._create("endBefore",e,!1)}function k(...e){return C._create("endAt",e,!0)}function F(e,t,o,i){if(o[0]=(0,r.getModularInstance)(o[0]),o[0]instanceof c)return(function(e,t,r,o,i){if(!o)throw new n.d(n.e.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${r}().`);const s=[];for(const r of(0,n.q)(e))if(r.field.isKeyField())s.push((0,n.r)(t,o.key));else{const e=o.data.field(r.field);if((0,n.s)(e))throw new n.d(n.e.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+r.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){const e=r.field.canonicalString();throw new n.d(n.e.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}s.push(e)}return new n.t(s,i)})(e._query,e.firestore._databaseId,t,o[0]._document,i);{const r=(0,n.g)(e.firestore);return(function(e,t,r,o,i,s){const a=e.explicitOrderBy;if(i.length>a.length)throw new n.d(n.e.INVALID_ARGUMENT,`Too many arguments provided to ${o}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const u=[];for(let s=0;s<i.length;s++){const c=i[s];if(a[s].field.isKeyField()){if("string"!=typeof c)throw new n.d(n.e.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${o}(), but got a ${typeof c}`);if(!(0,n.u)(e)&&-1!==c.indexOf("/"))throw new n.d(n.e.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${o}() must be a plain document ID, but '${c}' contains a slash.`);const r=e.path.child(n.R.fromString(c));if(!n.v.isDocumentKey(r))throw new n.d(n.e.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${o}() must result in a valid document path, but '${r}' is not because it contains an odd number of segments.`);const i=new n.v(r);u.push((0,n.r)(t,i))}else{const e=(0,n.h)(r,o,c);u.push(e)}}return new n.t(u,s)})(e._query,e.firestore._databaseId,r,t,o,i)}}function E(e,t,o){if("string"==typeof(o=(0,r.getModularInstance)(o))){if(""===o)throw new n.d(n.e.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!(0,n.u)(t)&&-1!==o.indexOf("/"))throw new n.d(n.e.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${o}' contains a '/' character.`);const r=t.path.child(n.R.fromString(o));if(!n.v.isDocumentKey(r))throw new n.d(n.e.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return(0,n.r)(e,new n.v(r))}if(o instanceof n.D)return(0,n.r)(e,o._key);throw new n.d(n.e.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${(0,n.w)(o)}.`)}function M(e,t){if(!Array.isArray(e)||0===e.length)throw new n.d(n.e.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function T(e,t){const r=(function(e,t){for(const n of e)for(const e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null})(e.filters,(function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(t.op));if(null!==r)throw r===t.op?new n.d(n.e.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new n.d(n.e.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${r.toString()}' filters.`)}function x(e,t){if(!(t instanceof y||t instanceof _))throw new n.d(n.e.INVALID_ARGUMENT,`Function ${e}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}function R(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class V extends n.A{constructor(e){super(),this.firestore=e}convertBytes(e){return new n.B(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new n.D(this.firestore,null,t)}}
/**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function L(e){return new a("sum",(0,n.j)("sum",e))}function W(e){return new a("avg",(0,n.j)("average",e))}function U(){return new a("count")}function Q(e,t){return e instanceof a&&t instanceof a&&e.aggregateType===t.aggregateType&&e._internalFieldPath?.canonicalString()===t._internalFieldPath?.canonicalString()}function G(e,t){return(0,n.x)(e.query,t.query)&&(0,r.deepEqual)(e.data(),t.data())}
/**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function z(e){return B(e,{count:U()})}function B(e,t){const r=(0,n.y)(e.firestore,n.F),o=(0,n.z)(r),i=(0,n.E)(t,(e,t)=>new n.ao(t,e.aggregateType,e._internalFieldPath));return(0,n.G)(o,e._query,i).then(t=>(function(e,t,r){const o=new n.H(e);return new u(t,o,r)}
/**
    * @license
    * Copyright 2023 Google LLC
    *
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    *   http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    */)(r,e,t))}class ${constructor(e){this.kind="memory",this._onlineComponentProvider=n.ap.provider,this._offlineComponentProvider=e?.garbageCollector?e.garbageCollector._offlineComponentProvider:{build:()=>new n.aq(void 0)}}toJSON(){return{kind:this.kind}}}class J{constructor(e){let t;this.kind="persistent",e?.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=re(void 0),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}class K{constructor(){this.kind="memoryEager",this._offlineComponentProvider=n.ar.provider}toJSON(){return{kind:this.kind}}}class H{constructor(e){this.kind="memoryLru",this._offlineComponentProvider={build:()=>new n.aq(e)}}toJSON(){return{kind:this.kind}}}function Y(){return new K}function X(e){return new H(e?.cacheSizeBytes)}function Z(e){return new $(e)}function ee(e){return new J(e)}class te{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=n.ap.provider,this._offlineComponentProvider={build:t=>new n.as(t,e?.cacheSizeBytes,this.forceOwnership)}}}class ne{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=n.ap.provider,this._offlineComponentProvider={build:t=>new n.at(t,e?.cacheSizeBytes)}}}function re(e){return new te(e?.forceOwnership)}function oe(){return new ne}
/**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const ie="NOT SUPPORTED";class se{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ae extends c{constructor(e,t,n,r,o,i){super(e,t,n,r,i),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ce(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field((0,n.j)("DocumentSnapshot.get",e));if(null!==r)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new n.d(n.e.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ae._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),e&&e.isValidDocument()&&e.isFoundDocument()?(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t):t}}function ue(e,t,r){if((0,n.I)(t,ae._jsonSchema)){if(t.bundle===ie)throw new n.d(n.e.INVALID_ARGUMENT,"The provided JSON object was created in a client environment, which is not supported.");const o=(0,n.J)(e._databaseId),i=(0,n.K)(t.bundle,o),s=i.ju(),a=new n.L(i.getMetadata(),o);for(const e of s)a.Ja(e);const u=a.documents;if(1!==u.length)throw new n.d(n.e.INVALID_ARGUMENT,`Expected bundle data to contain 1 document, but it contains ${u.length} documents.`);const c=(0,n.M)(o,u[0].document),d=new n.v(n.R.fromString(t.bundleName));return new ae(e,new V(e),d,c,new se(!1,!1),r||null)}}ae._jsonSchemaVersion="firestore/documentSnapshot/1.0",ae._jsonSchema={type:(0,n.p)("string",ae._jsonSchemaVersion),bundleSource:(0,n.p)("string","DocumentSnapshot"),bundleName:(0,n.p)("string"),bundle:(0,n.p)("string")};class ce extends ae{data(e={}){return super.data(e)}}class de{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new se(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new ce(this._firestore,this._userDataWriter,n.key,n,new se(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new n.d(n.e.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>{const r=new ce(e._firestore,e._userDataWriter,n.doc.key,n.doc,new se(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}})}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{const r=new ce(e._firestore,e._userDataWriter,t.doc.key,t.doc,new se(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let o=-1,i=-1;return 0!==t.type&&(o=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),i=n.indexOf(t.doc.key)),{type:le(t.type),doc:r,oldIndex:o,newIndex:i}})}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new n.d(n.e.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=de._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=n.N.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],o=[];return this.docs.forEach(e=>{null!==e._document&&(t.push(e._document),r.push(this._userDataWriter.convertObjectMap(e._document.data.value.mapValue.fields,"previous")),o.push(e.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function fe(e,t,r){if((0,n.I)(t,de._jsonSchema)){if(t.bundle===ie)throw new n.d(n.e.INVALID_ARGUMENT,"The provided JSON object was created in a client environment, which is not supported.");const o=(0,n.J)(e._databaseId),i=(0,n.K)(t.bundle,o),s=i.ju(),a=new n.L(i.getMetadata(),o);for(const e of s)a.Ja(e);if(1!==a.queries.length)throw new n.d(n.e.INVALID_ARGUMENT,`Snapshot data expected 1 query but found ${a.queries.length} queries.`);const u=(0,n.P)(a.queries[0].bundledQuery),c=a.documents;let d=new n.S;c.map(e=>{const t=(0,n.M)(o,e.document);d=d.add(t)});const f=n.V.fromInitialDocuments(u,d,(0,n.T)(),!1,!1),l=new n.Q(e,r||null,u);return new de(e,new V(e),l,f)}}function le(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return(0,n.U)(61501,{type:e})}}function he(e,t){return e instanceof ae&&t instanceof ae?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof de&&t instanceof de&&e._firestore===t._firestore&&(0,n.x)(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)}
/**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */de._jsonSchemaVersion="firestore/querySnapshot/1.0",de._jsonSchema={type:(0,n.p)("string",de._jsonSchemaVersion),bundleSource:(0,n.p)("string","QuerySnapshot"),bundleName:(0,n.p)("string"),bundle:(0,n.p)("string")};const me={maxAttempts:5};
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class pe{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=(0,n.g)(e)}set(e,t,r){this._verifyNotCommitted();const o=ye(e,this._firestore),i=R(o.converter,t,r),s=(0,n.W)(this._dataReader,"WriteBatch.set",o._key,i,null!==o.converter,r);return this._mutations.push(s.toMutation(o._key,n.X.none())),this}update(e,t,o,...i){this._verifyNotCommitted();const s=ye(e,this._firestore);let a;return a="string"==typeof(t=(0,r.getModularInstance)(t))||t instanceof n.Y?(0,n.Z)(this._dataReader,"WriteBatch.update",s._key,t,o,i):(0,n.$)(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(a.toMutation(s._key,n.X.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=ye(e,this._firestore);return this._mutations=this._mutations.concat(new n.a0(t._key,n.X.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new n.d(n.e.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function ye(e,t){if((e=(0,r.getModularInstance)(e)).firestore!==t)throw new n.d(n.e.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class be{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=(0,n.g)(e)}get(e){const t=ye(e,this._firestore),r=new V(this._firestore);return this._transaction.lookup([t._key]).then(e=>{if(!e||1!==e.length)return(0,n.U)(24041);const o=e[0];if(o.isFoundDocument())return new c(this._firestore,r,o.key,o,t.converter);if(o.isNoDocument())return new c(this._firestore,r,t._key,null,t.converter);throw(0,n.U)(18433,{doc:o})})}set(e,t,r){const o=ye(e,this._firestore),i=R(o.converter,t,r),s=(0,n.W)(this._dataReader,"Transaction.set",o._key,i,null!==o.converter,r);return this._transaction.set(o._key,s),this}update(e,t,o,...i){const s=ye(e,this._firestore);let a;return a="string"==typeof(t=(0,r.getModularInstance)(t))||t instanceof n.Y?(0,n.Z)(this._dataReader,"Transaction.update",s._key,t,o,i):(0,n.$)(this._dataReader,"Transaction.update",s._key,t),this._transaction.update(s._key,a),this}delete(e){const t=ye(e,this._firestore);return this._transaction.delete(t._key),this}}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class ge extends be{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=ye(e,this._firestore),r=new n.H(this._firestore);return super.get(e).then(e=>new ae(this._firestore,r,t._key,e._document,new se(!1,!1),t.converter))}}function we(e,t,r){e=(0,n.y)(e,n.F);const o={...me,...r};!(function(e){if(e.maxAttempts<1)throw new n.d(n.e.INVALID_ARGUMENT,"Max attempts must be at least 1")})(o);const i=(0,n.z)(e);return(0,n.a1)(i,n=>t(new ge(e,n)),o)}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function Pe(e){e=(0,n.y)(e,n.D);const t=(0,n.y)(e.firestore,n.F),r=(0,n.z)(t);return(0,n.a2)(r,e._key).then(n=>Me(t,e,n))}function Oe(e){e=(0,n.y)(e,n.D);const t=(0,n.y)(e.firestore,n.F),r=(0,n.z)(t),o=new n.H(t);return(0,n.a3)(r,e._key).then(n=>new ae(t,o,e._key,n,new se(null!==n&&n.hasLocalMutations,!0),e.converter))}function ve(e){e=(0,n.y)(e,n.D);const t=(0,n.y)(e.firestore,n.F),r=(0,n.z)(t);return(0,n.a2)(r,e._key,{source:"server"}).then(n=>Me(t,e,n))}function je(e){e=(0,n.y)(e,n.Q);const t=(0,n.y)(e.firestore,n.F),r=(0,n.z)(t),o=new n.H(t);return f(e._query),(0,n.a4)(r,e._query).then(n=>new de(t,o,e,n))}function Ie(e){e=(0,n.y)(e,n.Q);const t=(0,n.y)(e.firestore,n.F),r=(0,n.z)(t),o=new n.H(t);return(0,n.a5)(r,e._query).then(n=>new de(t,o,e,n))}function Ne(e){e=(0,n.y)(e,n.Q);const t=(0,n.y)(e.firestore,n.F),r=(0,n.z)(t),o=new n.H(t);return(0,n.a4)(r,e._query,{source:"server"}).then(n=>new de(t,o,e,n))}function De(e,t,r){e=(0,n.y)(e,n.D);const o=(0,n.y)(e.firestore,n.F),i=R(e.converter,t,r),s=(0,n.g)(o);return Ee(o,[(0,n.W)(s,"setDoc",e._key,i,null!==e.converter,r).toMutation(e._key,n.X.none())])}function Ae(e,t,o,...i){e=(0,n.y)(e,n.D);const s=(0,n.y)(e.firestore,n.F),a=(0,n.g)(s);let u;return u="string"==typeof(t=(0,r.getModularInstance)(t))||t instanceof n.Y?(0,n.Z)(a,"updateDoc",e._key,t,o,i):(0,n.$)(a,"updateDoc",e._key,t),Ee(s,[u.toMutation(e._key,n.X.exists(!0))])}function Se(e){return Ee((0,n.y)(e.firestore,n.F),[new n.a0(e._key,n.X.none())])}function Ce(e,t){const r=(0,n.y)(e.firestore,n.F),o=(0,n.a6)(e),i=R(e.converter,t),s=(0,n.g)(e.firestore);return Ee(r,[(0,n.W)(s,"addDoc",o._key,i,null!==e.converter,{}).toMutation(o._key,n.X.exists(!1))]).then(()=>o)}function qe(e,...t){e=(0,r.getModularInstance)(e);let o={includeMetadataChanges:!1,source:"default"},i=0;"object"!=typeof t[i]||s(t[i])||(o=t[i++]);const a={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(s(t[i])){const e=t[i];t[i]=e.next?.bind(e),t[i+1]=e.error?.bind(e),t[i+2]=e.complete?.bind(e)}let u,c,d;if(e instanceof n.D)c=(0,n.y)(e.firestore,n.F),d=(0,n.a7)(e._key.path),u={next:n=>{t[i]&&t[i](Me(c,e,n))},error:t[i+1],complete:t[i+2]};else{const r=(0,n.y)(e,n.Q);c=(0,n.y)(r.firestore,n.F),d=r._query;const o=new n.H(c);u={next:e=>{t[i]&&t[i](new de(c,o,r,e))},error:t[i+1],complete:t[i+2]},f(e._query)}const l=(0,n.z)(c);return(0,n.a8)(l,d,a,u)}function ke(e,t,...o){const i=(0,r.getModularInstance)(e),a=(function(e){const t={bundle:"",bundleName:"",bundleSource:""},n=["bundle","bundleName","bundleSource"];for(const r of n){if(!(r in e)){t.error=`snapshotJson missing required field: ${r}`;break}const n=e[r];if("string"!=typeof n){t.error=`snapshotJson field '${r}' must be a string.`;break}if(0===n.length){t.error=`snapshotJson field '${r}' cannot be an empty string.`;break}"bundle"===r?t.bundle=n:"bundleName"===r?t.bundleName=n:"bundleSource"===r&&(t.bundleSource=n)}return t})(t);if(a.error)throw new n.d(n.e.INVALID_ARGUMENT,a.error);let u,c=0;if("object"!=typeof o[c]||s(o[c])||(u=o[c++]),"QuerySnapshot"===a.bundleSource){let e=null;if("object"==typeof o[c]&&s(o[c])){const t=o[c++];e={next:t.next,error:t.error,complete:t.complete}}else e={next:o[c++],error:o[c++],complete:o[c++]};return(function(e,t,r,o,i){let s,a=!1;return(0,n.a9)(e,t.bundle).then(()=>(0,n.aa)(e,t.bundleName)).then(e=>{e&&!a&&(i&&e.withConverter(i),s=qe(e,r||{},o))}).catch(e=>(o.error&&o.error(e),()=>{})),()=>{a||(a=!0,s&&s())}
/**
      * @license
      * Copyright 2020 Google LLC
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */})(i,a,u,e,o[c])}if("DocumentSnapshot"===a.bundleSource){let e=null;if("object"==typeof o[c]&&s(o[c])){const t=o[c++];e={next:t.next,error:t.error,complete:t.complete}}else e={next:o[c++],error:o[c++],complete:o[c++]};return(function(e,t,r,o,i){let s,a=!1;return(0,n.a9)(e,t.bundle).then(()=>{if(!a){const a=new n.D(e,i||null,n.v.fromPath(t.bundleName));s=qe(a,r||{},o)}}).catch(e=>(o.error&&o.error(e),()=>{})),()=>{a||(a=!0,s&&s())}})(i,a,u,e,o[c])}throw new n.d(n.e.INVALID_ARGUMENT,`unsupported bundle source: ${a.bundleSource}`)}function Fe(e,t){e=(0,n.y)(e,n.F);const r=(0,n.z)(e),o=s(t)?t:{next:t};return(0,n.ab)(r,o)}function Ee(e,t){const r=(0,n.z)(e);return(0,n.ac)(r,t)}function Me(e,t,r){const o=r.docs.get(t._key),i=new n.H(e);return new ae(e,i,t._key,o,new se(r.hasPendingWrites,r.fromCache),t.converter)}function Te(e){return e=(0,n.y)(e,n.F),(0,n.z)(e),new pe(e,t=>Ee(e,t))
/**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */}function xe(e,t){e=(0,n.y)(e,n.F);const r=(0,n.z)(e);if(!r._uninitializedComponentsProvider||"memory"===r._uninitializedComponentsProvider._offline.kind)return(0,n.ad)("Cannot enable indexes when persistence is disabled"),Promise.resolve();const o=(function(e){const t="string"==typeof e?(function(e){try{return JSON.parse(e)}catch(e){throw new n.d(n.e.INVALID_ARGUMENT,"Failed to parse JSON: "+e?.message)}})(e):e,r=[];if(Array.isArray(t.indexes))for(const e of t.indexes){const t=Re(e,"collectionGroup"),o=[];if(Array.isArray(e.fields))for(const t of e.fields){const e=Re(t,"fieldPath"),r=(0,n.ae)("setIndexConfiguration",e);"CONTAINS"===t.arrayConfig?o.push(new n.af(r,2)):"ASCENDING"===t.order?o.push(new n.af(r,0)):"DESCENDING"===t.order&&o.push(new n.af(r,1))}r.push(new n.ag(n.ag.UNKNOWN_ID,t,o,n.ah.empty()))}return r})(t);return(0,n.ai)(r,o)}function Re(e,t){if("string"!=typeof e[t])throw new n.d(n.e.INVALID_ARGUMENT,"Missing string value for: "+t);return e[t]}
/**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class Ve{constructor(e){this._firestore=e,this.type="PersistentCacheIndexManager"}}function Le(e){e=(0,n.y)(e,n.F);const t=ze.get(e);if(t)return t;const r=(0,n.z)(e);if("persistent"!==r._uninitializedComponentsProvider?._offline.kind)return null;const o=new Ve(e);return ze.set(e,o),o}function We(e){Ge(e,!0)}function Ue(e){Ge(e,!1)}function Qe(e){const t=(0,n.z)(e._firestore);(0,n.aj)(t).then(e=>(0,n.ak)("deleting all persistent cache indexes succeeded")).catch(e=>(0,n.ad)("deleting all persistent cache indexes failed",e))}function Ge(e,t){const r=(0,n.z)(e._firestore);(0,n.al)(r,t).then(e=>(0,n.ak)(`setting persistent cache index auto creation isEnabled=${t} succeeded`)).catch(e=>(0,n.ad)(`setting persistent cache index auto creation isEnabled=${t} failed`,e))}const ze=new WeakMap;
/**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class Be{constructor(){throw new Error("instances of this class should not be created")}static onExistenceFilterMismatch(e){return $e.instance.onExistenceFilterMismatch(e)}}class $e{constructor(){this.t=new Map}static get instance(){return Je||(Je=new $e,(0,n.am)(Je)),Je}o(e){this.t.forEach(t=>t(e))}onExistenceFilterMismatch(e){const t=Symbol(),n=this.t;return n.set(t,e),()=>n.delete(t)}}let Je=null;!(function(r,s=!0){(0,n._)(e.SDK_VERSION),(0,e._registerComponent)(new t.Component("firestore",(e,{instanceIdentifier:t,options:r})=>{const o=e.getProvider("app").getImmediate(),i=new n.F(new n.a(e.getProvider("auth-internal")),new n.b(o,e.getProvider("app-check-internal")),(0,n.c)(o,t),o);return r={useFetchStreams:s,...r},i._setSettings(r),i},"PUBLIC").setMultipleInstances(!0)),(0,e.registerVersion)(o,i,r),(0,e.registerVersion)(o,i,"esm2020")})()},1649,[1640,1641,1650,1642,1651,1644,1652]);
__d(function(e,t,n,r,s,i,o){"use strict";Object.defineProperty(i,'__esModule',{value:!0}),Object.defineProperty(i,"$",{enumerable:!0,get:function(){return Sf}}),Object.defineProperty(i,"A",{enumerable:!0,get:function(){return Lf}}),Object.defineProperty(i,"B",{enumerable:!0,get:function(){return tf}}),Object.defineProperty(i,"C",{enumerable:!0,get:function(){return xr}}),Object.defineProperty(i,"D",{enumerable:!0,get:function(){return Cd}}),Object.defineProperty(i,"E",{enumerable:!0,get:function(){return fn}}),Object.defineProperty(i,"F",{enumerable:!0,get:function(){return jd}}),Object.defineProperty(i,"G",{enumerable:!0,get:function(){return od}}),Object.defineProperty(i,"H",{enumerable:!0,get:function(){return Mf}}),Object.defineProperty(i,"I",{enumerable:!0,get:function(){return le}}),Object.defineProperty(i,"J",{enumerable:!0,get:function(){return Vc}}),Object.defineProperty(i,"K",{enumerable:!0,get:function(){return fd}}),Object.defineProperty(i,"L",{enumerable:!0,get:function(){return jl}}),Object.defineProperty(i,"M",{enumerable:!0,get:function(){return co}}),Object.defineProperty(i,"N",{enumerable:!0,get:function(){return j}}),Object.defineProperty(i,"O",{enumerable:!0,get:function(){return pr}}),Object.defineProperty(i,"P",{enumerable:!0,get:function(){return $o}}),Object.defineProperty(i,"Q",{enumerable:!0,get:function(){return xd}}),Object.defineProperty(i,"R",{enumerable:!0,get:function(){return Y}}),Object.defineProperty(i,"S",{enumerable:!0,get:function(){return Sl}}),Object.defineProperty(i,"T",{enumerable:!0,get:function(){return As}}),Object.defineProperty(i,"U",{enumerable:!0,get:function(){return T}}),Object.defineProperty(i,"V",{enumerable:!0,get:function(){return xl}}),Object.defineProperty(i,"W",{enumerable:!0,get:function(){return gf}}),Object.defineProperty(i,"X",{enumerable:!0,get:function(){return ti}}),Object.defineProperty(i,"Y",{enumerable:!0,get:function(){return nf}}),Object.defineProperty(i,"Z",{enumerable:!0,get:function(){return _f}}),Object.defineProperty(i,"_",{enumerable:!0,get:function(){return m}}),Object.defineProperty(i,"a",{enumerable:!0,get:function(){return P}}),Object.defineProperty(i,"a$",{enumerable:!0,get:function(){return $f}}),Object.defineProperty(i,"a0",{enumerable:!0,get:function(){return mi}}),Object.defineProperty(i,"a1",{enumerable:!0,get:function(){return ld}}),Object.defineProperty(i,"a2",{enumerable:!0,get:function(){return rd}}),Object.defineProperty(i,"a3",{enumerable:!0,get:function(){return nd}}),Object.defineProperty(i,"a4",{enumerable:!0,get:function(){return id}}),Object.defineProperty(i,"a5",{enumerable:!0,get:function(){return sd}}),Object.defineProperty(i,"a6",{enumerable:!0,get:function(){return Od}}),Object.defineProperty(i,"a7",{enumerable:!0,get:function(){return Zr}}),Object.defineProperty(i,"a8",{enumerable:!0,get:function(){return td}}),Object.defineProperty(i,"a9",{enumerable:!0,get:function(){return Zd}}),Object.defineProperty(i,"aA",{enumerable:!0,get:function(){return af}}),Object.defineProperty(i,"aB",{enumerable:!0,get:function(){return Sn}}),Object.defineProperty(i,"aC",{enumerable:!0,get:function(){return Mn}}),Object.defineProperty(i,"aD",{enumerable:!0,get:function(){return M}}),Object.defineProperty(i,"aE",{enumerable:!0,get:function(){return k}}),Object.defineProperty(i,"aF",{enumerable:!0,get:function(){return Z}}),Object.defineProperty(i,"aG",{enumerable:!0,get:function(){return _}}),Object.defineProperty(i,"aH",{enumerable:!0,get:function(){return Yf}}),Object.defineProperty(i,"aI",{enumerable:!0,get:function(){return Jf}}),Object.defineProperty(i,"aJ",{enumerable:!0,get:function(){return En}}),Object.defineProperty(i,"aK",{enumerable:!0,get:function(){return ne}}),Object.defineProperty(i,"aL",{enumerable:!0,get:function(){return Bf}}),Object.defineProperty(i,"aM",{enumerable:!0,get:function(){return qf}}),Object.defineProperty(i,"aN",{enumerable:!0,get:function(){return Hd}}),Object.defineProperty(i,"aO",{enumerable:!0,get:function(){return Ad}}),Object.defineProperty(i,"aP",{enumerable:!0,get:function(){return kd}}),Object.defineProperty(i,"aQ",{enumerable:!0,get:function(){return _d}}),Object.defineProperty(i,"aR",{enumerable:!0,get:function(){return Uf}}),Object.defineProperty(i,"aS",{enumerable:!0,get:function(){return Yd}}),Object.defineProperty(i,"aT",{enumerable:!0,get:function(){return rf}}),Object.defineProperty(i,"aU",{enumerable:!0,get:function(){return Kd}}),Object.defineProperty(i,"aV",{enumerable:!0,get:function(){return Gd}}),Object.defineProperty(i,"aW",{enumerable:!0,get:function(){return Jd}}),Object.defineProperty(i,"aX",{enumerable:!0,get:function(){return Bd}}),Object.defineProperty(i,"aY",{enumerable:!0,get:function(){return zf}}),Object.defineProperty(i,"aZ",{enumerable:!0,get:function(){return qd}}),Object.defineProperty(i,"a_",{enumerable:!0,get:function(){return Kf}}),Object.defineProperty(i,"aa",{enumerable:!0,get:function(){return ef}}),Object.defineProperty(i,"ab",{enumerable:!0,get:function(){return cd}}),Object.defineProperty(i,"ac",{enumerable:!0,get:function(){return ud}}),Object.defineProperty(i,"ad",{enumerable:!0,get:function(){return v}}),Object.defineProperty(i,"ae",{enumerable:!0,get:function(){return Pf}}),Object.defineProperty(i,"af",{enumerable:!0,get:function(){return ve}}),Object.defineProperty(i,"ag",{enumerable:!0,get:function(){return pe}}),Object.defineProperty(i,"ah",{enumerable:!0,get:function(){return Te}}),Object.defineProperty(i,"ai",{enumerable:!0,get:function(){return md}}),Object.defineProperty(i,"aj",{enumerable:!0,get:function(){return pd}}),Object.defineProperty(i,"ak",{enumerable:!0,get:function(){return w}}),Object.defineProperty(i,"al",{enumerable:!0,get:function(){return gd}}),Object.defineProperty(i,"am",{enumerable:!0,get:function(){return xi}}),Object.defineProperty(i,"an",{enumerable:!0,get:function(){return Tr}}),Object.defineProperty(i,"ao",{enumerable:!0,get:function(){return bi}}),Object.defineProperty(i,"ap",{enumerable:!0,get:function(){return Vh}}),Object.defineProperty(i,"aq",{enumerable:!0,get:function(){return kh}}),Object.defineProperty(i,"ar",{enumerable:!0,get:function(){return Ah}}),Object.defineProperty(i,"as",{enumerable:!0,get:function(){return Oh}}),Object.defineProperty(i,"at",{enumerable:!0,get:function(){return Ph}}),Object.defineProperty(i,"au",{enumerable:!0,get:function(){return Ud}}),Object.defineProperty(i,"av",{enumerable:!0,get:function(){return Dd}}),Object.defineProperty(i,"aw",{enumerable:!0,get:function(){return sf}}),Object.defineProperty(i,"ax",{enumerable:!0,get:function(){return of}}),Object.defineProperty(i,"ay",{enumerable:!0,get:function(){return Md}}),Object.defineProperty(i,"az",{enumerable:!0,get:function(){return fe}}),Object.defineProperty(i,"b",{enumerable:!0,get:function(){return L}}),Object.defineProperty(i,"b0",{enumerable:!0,get:function(){return Pd}}),Object.defineProperty(i,"b1",{enumerable:!0,get:function(){return jf}}),Object.defineProperty(i,"b2",{enumerable:!0,get:function(){return y}}),Object.defineProperty(i,"b3",{enumerable:!0,get:function(){return Xd}}),Object.defineProperty(i,"b4",{enumerable:!0,get:function(){return Gf}}),Object.defineProperty(i,"b5",{enumerable:!0,get:function(){return Wd}}),Object.defineProperty(i,"b6",{enumerable:!0,get:function(){return W}}),Object.defineProperty(i,"b7",{enumerable:!0,get:function(){return S}}),Object.defineProperty(i,"b8",{enumerable:!0,get:function(){return Cf}}),Object.defineProperty(i,"b9",{enumerable:!0,get:function(){return Qf}}),Object.defineProperty(i,"ba",{enumerable:!0,get:function(){return Ye}}),Object.defineProperty(i,"bb",{enumerable:!0,get:function(){return Oo}}),Object.defineProperty(i,"bc",{enumerable:!0,get:function(){return Nd}}),Object.defineProperty(i,"bd",{enumerable:!0,get:function(){return Q}}),Object.defineProperty(i,"be",{enumerable:!0,get:function(){return ad}}),Object.defineProperty(i,"bf",{enumerable:!0,get:function(){return ie}}),Object.defineProperty(i,"bg",{enumerable:!0,get:function(){return ts}}),Object.defineProperty(i,"bh",{enumerable:!0,get:function(){return We}}),Object.defineProperty(i,"bi",{enumerable:!0,get:function(){return Hf}}),Object.defineProperty(i,"bj",{enumerable:!0,get:function(){return ko}}),Object.defineProperty(i,"bk",{enumerable:!0,get:function(){return Rs}}),Object.defineProperty(i,"bl",{enumerable:!0,get:function(){return Po}}),Object.defineProperty(i,"bm",{enumerable:!0,get:function(){return Ff}}),Object.defineProperty(i,"bn",{enumerable:!0,get:function(){return Wf}}),Object.defineProperty(i,"bo",{enumerable:!0,get:function(){return Xf}}),Object.defineProperty(i,"c",{enumerable:!0,get:function(){return Un}}),Object.defineProperty(i,"d",{enumerable:!0,get:function(){return D}}),Object.defineProperty(i,"e",{enumerable:!0,get:function(){return C}}),Object.defineProperty(i,"f",{enumerable:!0,get:function(){return as}}),Object.defineProperty(i,"g",{enumerable:!0,get:function(){return mf}}),Object.defineProperty(i,"h",{enumerable:!0,get:function(){return xf}}),Object.defineProperty(i,"i",{enumerable:!0,get:function(){return _r}}),Object.defineProperty(i,"j",{enumerable:!0,get:function(){return kf}}),Object.defineProperty(i,"k",{enumerable:!0,get:function(){return us}}),Object.defineProperty(i,"l",{enumerable:!0,get:function(){return cs}}),Object.defineProperty(i,"m",{enumerable:!0,get:function(){return ue}}),Object.defineProperty(i,"n",{enumerable:!0,get:function(){return ls}}),Object.defineProperty(i,"o",{enumerable:!0,get:function(){return hs}}),Object.defineProperty(i,"p",{enumerable:!0,get:function(){return ce}}),Object.defineProperty(i,"q",{enumerable:!0,get:function(){return rs}}),Object.defineProperty(i,"r",{enumerable:!0,get:function(){return tr}}),Object.defineProperty(i,"s",{enumerable:!0,get:function(){return Pn}}),Object.defineProperty(i,"t",{enumerable:!0,get:function(){return br}}),Object.defineProperty(i,"u",{enumerable:!0,get:function(){return ns}}),Object.defineProperty(i,"v",{enumerable:!0,get:function(){return ee}}),Object.defineProperty(i,"w",{enumerable:!0,get:function(){return oe}}),Object.defineProperty(i,"x",{enumerable:!0,get:function(){return Vd}}),Object.defineProperty(i,"y",{enumerable:!0,get:function(){return ae}}),Object.defineProperty(i,"z",{enumerable:!0,get:function(){return zd}});var a=t(o[0]),u=t(o[1]),c=t(o[2]),l=t(o[3]),h=t(o[4]);
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
class d{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}d.UNAUTHENTICATED=new d(null),d.GOOGLE_CREDENTIALS=new d("google-credentials-uid"),d.FIRST_PARTY=new d("first-party-uid"),d.MOCK_USER=new d("mock-user");
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
let f="12.14.0";function m(e){f=e}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const g=new l.Logger("@firebase/firestore");function p(){return g.logLevel}function y(e){g.setLogLevel(e)}function w(e,...t){if(g.logLevel<=l.LogLevel.DEBUG){const n=t.map(I);g.debug(`Firestore (${f}): ${e}`,...n)}}function b(e,...t){if(g.logLevel<=l.LogLevel.ERROR){const n=t.map(I);g.error(`Firestore (${f}): ${e}`,...n)}}function v(e,...t){if(g.logLevel<=l.LogLevel.WARN){const n=t.map(I);g.warn(`Firestore (${f}): ${e}`,...n)}}function I(e){if("string"==typeof e)return e;try{return(function(e){return JSON.stringify(e)})(e)}catch(t){return e}}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function T(e,t,n){let r="Unexpected state";"string"==typeof t?r=t:n=t,E(e,r,n)}function E(e,t,n){let r=`FIRESTORE (${f}) INTERNAL ASSERTION FAILED: ${t} (ID: ${e.toString(16)})`;if(void 0!==n)try{r+=" CONTEXT: "+JSON.stringify(n)}catch(e){r+=" CONTEXT: "+n}throw b(r),new Error(r)}function S(e,t,n,r){let s="Unexpected state";"string"==typeof n?s=n:r=n,e||E(t,s,r)}function _(e,t){e||T(57014,t)}function x(e,t){return e}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends u.FirebaseError{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class N{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class A{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class k{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(d.UNAUTHENTICATED))}shutdown(){}}class O{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class P{constructor(e){this.t=e,this.currentUser=d.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){S(void 0===this.o,42304);let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let s=new N;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new N,e.enqueueRetryable(()=>r(this.currentUser))};const i=()=>{const t=s;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},o=e=>{w("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.o&&(this.auth.addAuthTokenListener(this.o),i())};this.t.onInit(e=>o(e)),setTimeout(()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(w("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new N)}},0),i()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(w("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(S("string"==typeof t.accessToken,31837,{l:t}),new A(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return S(null===e||"string"==typeof e,2055,{h:e}),new d(e)}}class V{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=d.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class R{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new V(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(d.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class F{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class L{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,(0,a._isFirebaseServerApp)(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){S(void 0===this.o,3512);const n=e=>{null!=e.error&&w("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.m;return this.m=e.token,w("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};const r=e=>{w("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){const e=this.V.getImmediate({optional:!0});e?r(e):w("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new F(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?(S("string"==typeof e.token,44558,{tokenResult:e}),this.m=e.token,new F(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}class M{getToken(){return Promise.resolve(new F(""))}invalidateToken(){}start(e,t){}shutdown(){}}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function U(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class j{static newId(){const e=62*Math.floor(4.129032258064516);let t="";for(;t.length<20;){const n=U(40);for(let r=0;r<n.length;++r)t.length<20&&n[r]<e&&(t+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(n[r]%62))}return t}}function q(e,t){return e<t?-1:e>t?1:0}function B(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.charAt(r),s=t.charAt(r);if(n!==s)return K(n)===K(s)?q(n,s):K(n)?1:-1}return q(e.length,t.length)}const z=55296,$=57343;function K(e){const t=e.charCodeAt(0);return t>=z&&t<=$}function G(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}function Q(e,t,n){return void 0===e&&void 0===t||void 0!==e&&void 0!==t&&n(e,t)}function H(e){return e+"\0"}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const W="__name__";class J{constructor(e,t,n){void 0===t?t=0:t>e.length&&T(637,{offset:t,range:e.length}),void 0===n?n=e.length-t:n>e.length-t&&T(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===J.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof J?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=J.compareSegments(e.get(r),t.get(r));if(0!==n)return n}return q(e.length,t.length)}static compareSegments(e,t){const n=J.isNumericId(e),r=J.isNumericId(t);return n&&!r?-1:!n&&r?1:n&&r?J.extractNumericId(e).compare(J.extractNumericId(t)):B(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return c.Integer.fromString(e.substring(4,e.length-2))}}class Y extends J{construct(e,t,n){return new Y(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new D(C.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new Y(t)}static emptyPath(){return new Y([])}}const X=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Z extends J{construct(e,t,n){return new Z(e,t,n)}static isValidIdentifier(e){return X.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Z.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&this.get(0)===W}static keyField(){return new Z([W])}static fromServerFormat(e){const t=[];let n="",r=0;const s=()=>{if(0===n.length)throw new D(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let i=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new D(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new D(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(i=!i,r++):"."!==t||i?(n+=t,r++):(s(),r++)}if(s(),i)throw new D(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Z(t)}static emptyPath(){return new Z([])}}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class ee{constructor(e){this.path=e}static fromPath(e){return new ee(Y.fromString(e))}static fromName(e){return new ee(Y.fromString(e).popFirst(5))}static empty(){return new ee(Y.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===Y.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Y.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ee(new Y(e.slice()))}}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function te(e,t,n){if(!n)throw new D(C.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function ne(e,t,n,r){if(!0===t&&!0===r)throw new D(C.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function re(e){if(!ee.isDocumentKey(e))throw new D(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function se(e){if(ee.isDocumentKey(e))throw new D(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function ie(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}function oe(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=(function(e){return e.constructor?e.constructor.name:null})(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":T(12329,{type:typeof e})}function ae(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new D(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=oe(e);throw new D(C.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function ue(e,t){if(t<=0)throw new D(C.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}
/**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function ce(e,t){const n={typeString:e};return t&&(n.value=t),n}function le(e,t){if(!ie(e))throw new D(C.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in t)if(t[r]){const s=t[r].typeString,i="value"in t[r]?{value:t[r].value}:void 0;if(!(r in e)){n=`JSON missing required field: '${r}'`;break}const o=e[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(void 0!==i&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new D(C.INVALID_ARGUMENT,n);return!0}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const he=-62135596800,de=1e6;class fe{static now(){return fe.fromMillis(Date.now())}static fromDate(e){return fe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*de);return new fe(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new D(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new D(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<he)throw new D(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new D(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/de}_compareTo(e){return this.seconds===e.seconds?q(this.nanoseconds,e.nanoseconds):q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:fe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(le(e,fe._jsonSchema))return new fe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-he;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}fe._jsonSchemaVersion="firestore/timestamp/1.0",fe._jsonSchema={type:ce("string",fe._jsonSchemaVersion),seconds:ce("number"),nanoseconds:ce("number")};
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
class me{static fromTimestamp(e){return new me(e)}static min(){return new me(new fe(0,0))}static max(){return new me(new fe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const ge=-1;class pe{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}function ye(e){return e.fields.find(e=>2===e.kind)}function we(e){return e.fields.filter(e=>2!==e.kind)}function be(e,t){let n=q(e.collectionGroup,t.collectionGroup);if(0!==n)return n;for(let r=0;r<Math.min(e.fields.length,t.fields.length);++r)if(n=Ie(e.fields[r],t.fields[r]),0!==n)return n;return q(e.fields.length,t.fields.length)}pe.UNKNOWN_ID=-1;class ve{constructor(e,t){this.fieldPath=e,this.kind=t}}function Ie(e,t){const n=Z.comparator(e.fieldPath,t.fieldPath);return 0!==n?n:q(e.kind,t.kind)}class Te{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Te(0,_e.min())}}function Ee(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=me.fromTimestamp(1e9===r?new fe(n+1,0):new fe(n,r));return new _e(s,ee.empty(),t)}function Se(e){return new _e(e.readTime,e.key,ge)}class _e{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new _e(me.min(),ee.empty(),ge)}static max(){return new _e(me.max(),ee.empty(),ge)}}function xe(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=ee.comparator(e.documentKey,t.documentKey),0!==n?n:q(e.largestBatchId,t.largestBatchId)
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */)}const Ce="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class De{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */async function Ne(e){if(e.code!==C.FAILED_PRECONDITION||e.message!==Ce)throw e;w("LocalStore","Unexpectedly lost primary lease")}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class Ae{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&T(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Ae((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof Ae?t:Ae.resolve(t)}catch(e){return Ae.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):Ae.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):Ae.reject(t)}static resolve(e){return new Ae((t,n)=>{t(e)})}static reject(e){return new Ae((t,n)=>{n(e)})}static waitFor(e){return new Ae((t,n)=>{let r=0,s=0,i=!1;e.forEach(e=>{++r,e.next(()=>{++s,i&&s===r&&t()},e=>n(e))}),i=!0,s===r&&t()})}static or(e){let t=Ae.resolve(!1);for(const n of e)t=t.next(e=>e?Ae.resolve(e):n());return t}static forEach(e,t){const n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}static mapArray(e,t){return new Ae((n,r)=>{const s=e.length,i=new Array(s);let o=0;for(let a=0;a<s;a++){const u=a;t(e[u]).next(e=>{i[u]=e,++o,o===s&&n(i)},e=>r(e))}})}static doWhile(e,t){return new Ae((n,r)=>{const s=()=>{!0===e()?t().next(()=>{s()},r):n()};s()})}}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const ke="SimpleDb";class Oe{static open(e,t,n,r){try{return new Oe(t,e.transaction(r,n))}catch(e){throw new Fe(t,e)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.S=new N,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{t.error?this.S.reject(new Fe(e,t.error)):this.S.resolve()},this.transaction.onerror=t=>{const n=qe(t.target.error);this.S.reject(new Fe(e,n))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(w(ke,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}C(){const e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){const t=this.transaction.objectStore(e);return new Me(t)}}class Pe{static delete(e){return w(ke,"Removing database:",e),Ue((0,u.getGlobal)().indexedDB.deleteDatabase(e)).toPromise()}static v(){if(!(0,u.isIndexedDBAvailable)())return!1;if(Pe.F())return!0;const e=(0,u.getUA)(),t=Pe.M(e),n=0<t&&t<10,r=Ve(e),s=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||s)}static F(){return"undefined"!=typeof process&&"YES"===process.__PRIVATE_env?.__PRIVATE_USE_MOCK_PERSISTENCE}static O(e,t){return e.store(t)}static M(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}constructor(e,t,n){this.name=e,this.version=t,this.N=n,this.B=null,12.2===Pe.M((0,u.getUA)())&&b("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async L(e){return this.db||(w(ke,"Opening database:",this.name),this.db=await new Promise((t,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{const n=e.target.result;t(n)},r.onblocked=()=>{n(new Fe(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{const r=t.target.error;"VersionError"===r.name?n(new D(C.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new D(C.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new Fe(e,r))},r.onupgradeneeded=e=>{w(ke,'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);const t=e.target.result;this.N.k(t,r.transaction,e.oldVersion,this.version).next(()=>{w(ke,"Database upgrade to version "+this.version+" complete")})}})),this.q&&(this.db.onversionchange=e=>this.q(e)),this.db}K(e){this.q=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){const s="readonly"===t;let i=0;for(;;){++i;try{this.db=await this.L(e);const t=Oe.open(this.db,e,s?"readonly":"readwrite",n),i=r(t).next(e=>(t.C(),e)).catch(e=>(t.abort(e),Ae.reject(e))).toPromise();return i.catch(()=>{}),await t.D,i}catch(e){const t=e,n="FirebaseError"!==t.name&&i<3;if(w(ke,"Transaction failed with error:",t.message,"Retrying:",n),this.close(),!n)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}function Ve(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}class Re{constructor(e){this.U=e,this.$=!1,this.W=null}get isDone(){return this.$}get G(){return this.W}set cursor(e){this.U=e}done(){this.$=!0}j(e){this.W=e}delete(){return Ue(this.U.delete())}}class Fe extends D{constructor(e,t){super(C.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Le(e){return"IndexedDbTransactionError"===e.name}class Me{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(w(ke,"PUT",this.store.name,e,t),n=this.store.put(t,e)):(w(ke,"PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),Ue(n)}add(e){return w(ke,"ADD",this.store.name,e,e),Ue(this.store.add(e))}get(e){return Ue(this.store.get(e)).next(t=>(void 0===t&&(t=null),w(ke,"GET",this.store.name,e,t),t))}delete(e){return w(ke,"DELETE",this.store.name,e),Ue(this.store.delete(e))}count(){return w(ke,"COUNT",this.store.name),Ue(this.store.count())}J(e,t){const n=this.options(e,t),r=n.index?this.store.index(n.index):this.store;if("function"==typeof r.getAll){const e=r.getAll(n.range);return new Ae((t,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{t(e.target.result)}})}{const e=this.cursor(n),t=[];return this.H(e,(e,n)=>{t.push(n)}).next(()=>t)}}Z(e,t){const n=this.store.getAll(e,null===t?void 0:t);return new Ae((e,t)=>{n.onerror=e=>{t(e.target.error)},n.onsuccess=t=>{e(t.target.result)}})}X(e,t){w(ke,"DELETE ALL",this.store.name);const n=this.options(e,t);n.Y=!1;const r=this.cursor(n);return this.H(r,(e,t,n)=>n.delete())}ee(e,t){let n;t?n=e:(n={},t=e);const r=this.cursor(n);return this.H(r,t)}te(e){const t=this.cursor({});return new Ae((n,r)=>{t.onerror=e=>{const t=qe(e.target.error);r(t)},t.onsuccess=t=>{const r=t.target.result;r?e(r.primaryKey,r.value).next(e=>{e?r.continue():n()}):n()}})}H(e,t){const n=[];return new Ae((r,s)=>{e.onerror=e=>{s(e.target.error)},e.onsuccess=e=>{const s=e.target.result;if(!s)return void r();const i=new Re(s),o=t(s.primaryKey,s.value,i);if(o instanceof Ae){const e=o.catch(e=>(i.done(),Ae.reject(e)));n.push(e)}i.isDone?r():null===i.G?s.continue():s.continue(i.G)}}).next(()=>Ae.waitFor(n))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.Y?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Ue(e){return new Ae((t,n)=>{e.onsuccess=e=>{const n=e.target.result;t(n)},e.onerror=e=>{const t=qe(e.target.error);n(t)}})}let je=!1;function qe(e){const t=Pe.M((0,u.getUA)());if(t>=12.2&&t<13){const t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){const e=new D("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return je||(je=!0,setTimeout(()=>{throw e},0)),e}}return e}const Be="IndexBackfiller";class ze{constructor(e,t){this.asyncQueue=e,this.ne=t,this.task=null}start(){this.re(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}re(e){w(Be,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{const e=await this.ne.ie();w(Be,`Documents written: ${e}`)}catch(e){Le(e)?w(Be,"Ignoring IndexedDB error during index backfill: ",e):await Ne(e)}await this.re(6e4)})}}class $e{constructor(e,t){this.localStore=e,this.persistence=t}async ie(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.se(t,e))}se(e,t){const n=new Set;let r=t,s=!0;return Ae.doWhile(()=>!0===s&&r>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(t=>{if(null!==t&&!n.has(t))return w(Be,`Processing collection: ${t}`),this.oe(e,t,r).next(e=>{r-=e,n.add(t)});s=!1})).next(()=>t-r)}oe(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(r=>this.localStore.localDocuments.getNextDocuments(e,t,r,n).next(n=>{const s=n.changes;return this.localStore.indexManager.updateIndexEntries(e,s).next(()=>this._e(r,n)).next(n=>(w(Be,`Updating offset: ${n}`),this.localStore.indexManager.updateCollectionGroup(e,t,n))).next(()=>s.size)}))}_e(e,t){let n=e;return t.changes.forEach((e,t)=>{const r=Se(t);xe(r,n)>0&&(n=r)}),new _e(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}
/**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class Ke{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ae(e),this.ue=e=>t.writeSequenceNumber(e))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Ke.ce=-1;
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
const Ge=-1;function Qe(e){return null==e}function He(e){return 0===e&&1/e==-1/0}function We(e){return"number"==typeof e}function Je(e){return"number"==typeof e&&Number.isInteger(e)&&!He(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}function Ye(e){return"string"==typeof e}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const Xe="\x01";function Ze(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=tt(t)),t=et(e.get(n),t);return tt(t)}function et(e,t){let n=t;const r=e.length;for(let t=0;t<r;t++){const r=e.charAt(t);switch(r){case"\0":n+="\x01\x10";break;case Xe:n+="\x01\x11";break;default:n+=r}}return n}function tt(e){return e+Xe+"\x01"}function nt(e){const t=e.length;if(S(t>=2,64408,{path:e}),2===t)return S(e.charAt(0)===Xe&&"\x01"===e.charAt(1),56145,{path:e}),Y.emptyPath();const n=t-2,r=[];let s="";for(let i=0;i<t;){const t=e.indexOf(Xe,i);switch((t<0||t>n)&&T(50515,{path:e}),e.charAt(t+1)){case"\x01":const n=e.substring(i,t);let o;0===s.length?o=n:(s+=n,o=s,s=""),r.push(o);break;case"\x10":s+=e.substring(i,t),s+="\0";break;case"\x11":s+=e.substring(i,t+1);break;default:T(61167,{path:e})}i=t+2}return new Y(r)}
/**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const rt="remoteDocuments",st="owner",it="owner",ot="mutationQueues",at="mutations",ut="batchId",ct="userMutationsIndex",lt=["userId","batchId"];
/**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function ht(e,t){return[e,Ze(t)]}function dt(e,t,n){return[e,Ze(t),n]}const ft={},mt="documentMutations",gt="remoteDocumentsV14",pt=["prefixPath","collectionGroup","readTime","documentId"],yt="documentKeyIndex",wt=["prefixPath","collectionGroup","documentId"],bt="collectionGroupIndex",vt=["collectionGroup","readTime","prefixPath","documentId"],It="remoteDocumentGlobal",Tt="remoteDocumentGlobalKey",Et="targets",St="queryTargetsIndex",_t=["canonicalId","targetId"],xt="targetDocuments",Ct=["targetId","path"],Dt="documentTargetsIndex",Nt=["path","targetId"],At="targetGlobalKey",kt="targetGlobal",Ot="collectionParents",Pt=["collectionId","parent"],Vt="clientMetadata",Rt="bundles",Ft="namedQueries",Lt="indexConfiguration",Mt="collectionGroupIndex",Ut="indexState",jt=["indexId","uid"],qt="sequenceNumberIndex",Bt=["uid","sequenceNumber"],zt="indexEntries",$t=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Kt="documentKeyIndex",Gt=["indexId","uid","orderedDocumentKey"],Qt="documentOverlays",Ht=["userId","collectionPath","documentId"],Wt="collectionPathOverlayIndex",Jt=["userId","collectionPath","largestBatchId"],Yt="collectionGroupOverlayIndex",Xt=["userId","collectionGroup","largestBatchId"],Zt="globals",en=[ot,at,mt,rt,Et,st,kt,xt,Vt,It,Ot,Rt,Ft],tn=[...en,Qt],nn=[ot,at,mt,gt,Et,st,kt,xt,Vt,It,Ot,Rt,Ft,Qt],rn=nn,sn=[...rn,Lt,Ut,zt],on=sn,an=[...sn,Zt],un=an;
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class cn extends De{constructor(e,t){super(),this.le=e,this.currentSequenceNumber=t}}function ln(e,t){const n=x(e);return Pe.O(n.le,t)}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function hn(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function dn(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function fn(e,t){const n=[];for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.push(t(e[r],r,e));return n}function mn(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class gn{constructor(e,t){this.comparator=e,this.root=t||yn.EMPTY}insert(e,t){return new gn(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,yn.BLACK,null,null))}remove(e){return new gn(this.comparator,this.root.remove(e,this.comparator).copy(null,null,yn.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new pn(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new pn(this.root,e,this.comparator,!1)}getReverseIterator(){return new pn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new pn(this.root,e,this.comparator,!0)}}class pn{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,t&&r&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(0===s){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class yn{constructor(e,t,n,r,s){this.key=e,this.value=t,this.color=null!=n?n:yn.RED,this.left=null!=r?r:yn.EMPTY,this.right=null!=s?s:yn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,s){return new yn(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const s=n(e,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===s?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return yn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return yn.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,yn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,yn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw T(43730,{key:this.key,value:this.value});if(this.right.isRed())throw T(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw T(27949);return e+(this.isRed()?0:1)}}yn.EMPTY=null,yn.RED=!0,yn.BLACK=!1,yn.EMPTY=new class{constructor(){this.size=0}get key(){throw T(57766)}get value(){throw T(16141)}get color(){throw T(16727)}get left(){throw T(29726)}get right(){throw T(36894)}copy(e,t,n,r,s){return this}insert(e,t,n){return new yn(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
class wn{constructor(e){this.comparator=e,this.data=new gn(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new bn(this.data.getIterator())}getIteratorFrom(e){return new bn(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof wn))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new wn(this.comparator);return t.data=e,t}}class bn{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function vn(e){return e.hasNext()?e.getNext():void 0}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class In{constructor(e){this.fields=e,e.sort(Z.comparator)}static empty(){return new In([])}unionWith(e){let t=new wn(Z.comparator);for(const e of this.fields)t=t.add(e);for(const n of e)t=t.add(n);return new In(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return G(this.fields,e.fields,(e,t)=>e.isEqual(t))}}
/**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class Tn extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function En(){return"undefined"!=typeof atob}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class Sn{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new Tn("Invalid base64 string: "+e):e}})(e);return new Sn(t)}static fromUint8Array(e){const t=(function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t})(e);return new Sn(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return(function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
      * @license
      * Copyright 2020 Google LLC
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */)(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Sn.EMPTY_BYTE_STRING=new Sn("");const _n=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xn(e){if(S(!!e,39018),"string"==typeof e){let t=0;const n=_n.exec(e);if(S(!!n,46558,{timestamp:e}),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Cn(e.seconds),nanos:Cn(e.nanos)}}function Cn(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Dn(e){return"string"==typeof e?Sn.fromBase64String(e):Sn.fromUint8Array(e)}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const Nn="server_timestamp",An="__type__",kn="__previous_value__",On="__local_write_time__";function Pn(e){const t=(e?.mapValue?.fields||{})[An]?.stringValue;return t===Nn}function Vn(e){const t=e.mapValue.fields[kn];return Pn(t)?Vn(t):t}function Rn(e){const t=xn(e.mapValue.fields[On].timestampValue);return new fe(t.seconds,t.nanos)}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class Fn{constructor(e,t,n,r,s,i,o,a,u,c,l){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=s,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=u,this.isUsingEmulator=c,this.apiKey=l}}const Ln="(default)";class Mn{constructor(e,t){this.projectId=e,this.database=t||Ln}static empty(){return new Mn("","")}get isDefaultDatabase(){return this.database===Ln}isEqual(e){return e instanceof Mn&&e.projectId===this.projectId&&e.database===this.database}}function Un(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new D(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Mn(e.options.projectId,t)}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const jn="__type__",qn="__max__",Bn={mapValue:{fields:{__type__:{stringValue:qn}}}},zn="__vector__",$n="value",Kn={nullValue:"NULL_VALUE"};function Gn(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Pn(e)?4:lr(e)?9007199254740991:ur(e)?10:11:T(28295,{value:e})}function Qn(e,t){if(e===t)return!0;const n=Gn(e);if(n!==Gn(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Rn(e).isEqual(Rn(t));case 3:return(function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=xn(e.timestampValue),r=xn(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos})(e,t);case 5:return e.stringValue===t.stringValue;case 6:return(function(e,t){return Dn(e.bytesValue).isEqual(Dn(t.bytesValue))})(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return(function(e,t){return Cn(e.geoPointValue.latitude)===Cn(t.geoPointValue.latitude)&&Cn(e.geoPointValue.longitude)===Cn(t.geoPointValue.longitude)})(e,t);case 2:return(function(e,t){if("integerValue"in e&&"integerValue"in t)return Cn(e.integerValue)===Cn(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Cn(e.doubleValue),r=Cn(t.doubleValue);return n===r?He(n)===He(r):isNaN(n)&&isNaN(r)}return!1})(e,t);case 9:return G(e.arrayValue.values||[],t.arrayValue.values||[],Qn);case 10:case 11:return(function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(hn(n)!==hn(r))return!1;for(const e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!Qn(n[e],r[e])))return!1;return!0})(e,t);default:return T(52216,{left:e})}}function Hn(e,t){return void 0!==(e.values||[]).find(e=>Qn(e,t))}function Wn(e,t){if(e===t)return 0;const n=Gn(e),r=Gn(t);if(n!==r)return q(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return q(e.booleanValue,t.booleanValue);case 2:return(function(e,t){const n=Cn(e.integerValue||e.doubleValue),r=Cn(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1})(e,t);case 3:return Jn(e.timestampValue,t.timestampValue);case 4:return Jn(Rn(e),Rn(t));case 5:return B(e.stringValue,t.stringValue);case 6:return(function(e,t){const n=Dn(e),r=Dn(t);return n.compareTo(r)})(e.bytesValue,t.bytesValue);case 7:return(function(e,t){const n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){const t=q(n[e],r[e]);if(0!==t)return t}return q(n.length,r.length)})(e.referenceValue,t.referenceValue);case 8:return(function(e,t){const n=q(Cn(e.latitude),Cn(t.latitude));return 0!==n?n:q(Cn(e.longitude),Cn(t.longitude))})(e.geoPointValue,t.geoPointValue);case 9:return Yn(e.arrayValue,t.arrayValue);case 10:return(function(e,t){const n=e.fields||{},r=t.fields||{},s=n[$n]?.arrayValue,i=r[$n]?.arrayValue,o=q(s?.values?.length||0,i?.values?.length||0);return 0!==o?o:Yn(s,i)})(e.mapValue,t.mapValue);case 11:return(function(e,t){if(e===Bn.mapValue&&t===Bn.mapValue)return 0;if(e===Bn.mapValue)return 1;if(t===Bn.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),s=t.fields||{},i=Object.keys(s);r.sort(),i.sort();for(let e=0;e<r.length&&e<i.length;++e){const t=B(r[e],i[e]);if(0!==t)return t;const o=Wn(n[r[e]],s[i[e]]);if(0!==o)return o}return q(r.length,i.length)})(e.mapValue,t.mapValue);default:throw T(23264,{he:n})}}function Jn(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return q(e,t);const n=xn(e),r=xn(t),s=q(n.seconds,r.seconds);return 0!==s?s:q(n.nanos,r.nanos)}function Yn(e,t){const n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){const t=Wn(n[e],r[e]);if(t)return t}return q(n.length,r.length)}function Xn(e){return Zn(e)}function Zn(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?(function(e){const t=xn(e);return`time(${t.seconds},${t.nanos})`})(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?(function(e){return Dn(e).toBase64()})(e.bytesValue):"referenceValue"in e?(function(e){return ee.fromName(e).toString()})(e.referenceValue):"geoPointValue"in e?(function(e){return`geo(${e.latitude},${e.longitude})`})(e.geoPointValue):"arrayValue"in e?(function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=Zn(r);return t+"]"})(e.arrayValue):"mapValue"in e?(function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const s of t)r?r=!1:n+=",",n+=`${s}:${Zn(e.fields[s])}`;return n+"}"})(e.mapValue):T(61005,{value:e})}function er(e){switch(Gn(e)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Vn(e);return t?16+er(t):16;case 5:return 2*e.stringValue.length;case 6:return Dn(e.bytesValue).approximateByteSize();case 7:return e.referenceValue.length;case 9:return(function(e){return(e.values||[]).reduce((e,t)=>e+er(t),0)})(e.arrayValue);case 10:case 11:return(function(e){let t=0;return dn(e.fields,(e,n)=>{t+=e.length+er(n)}),t})(e.mapValue);default:throw T(13486,{value:e})}}function tr(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function nr(e){return!!e&&"integerValue"in e}function rr(e){return nr(e)||(function(e){return!!e&&"doubleValue"in e})(e)}function sr(e){return!!e&&"arrayValue"in e}function ir(e){return!!e&&"nullValue"in e}function or(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function ar(e){return!!e&&"mapValue"in e}function ur(e){const t=(e?.mapValue?.fields||{})[jn]?.stringValue;return t===zn}function cr(e){if(e.geoPointValue)return{geoPointValue:{...e.geoPointValue}};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:{...e.timestampValue}};if(e.mapValue){const t={mapValue:{fields:{}}};return dn(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=cr(n)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=cr(e.arrayValue.values[n]);return t}return{...e}}function lr(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===qn}const hr={mapValue:{fields:{[jn]:{stringValue:zn},[$n]:{arrayValue:{}}}}};function dr(e){return"nullValue"in e?Kn:"booleanValue"in e?{booleanValue:!1}:"integerValue"in e||"doubleValue"in e?{doubleValue:NaN}:"timestampValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in e?{stringValue:""}:"bytesValue"in e?{bytesValue:""}:"referenceValue"in e?tr(Mn.empty(),ee.empty()):"geoPointValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in e?{arrayValue:{}}:"mapValue"in e?ur(e)?hr:{mapValue:{}}:T(35942,{value:e})}function fr(e){return"nullValue"in e?{booleanValue:!1}:"booleanValue"in e?{doubleValue:NaN}:"integerValue"in e||"doubleValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in e?{stringValue:""}:"stringValue"in e?{bytesValue:""}:"bytesValue"in e?tr(Mn.empty(),ee.empty()):"referenceValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in e?{arrayValue:{}}:"arrayValue"in e?hr:"mapValue"in e?ur(e)?{mapValue:{}}:Bn:T(61959,{value:e})}function mr(e,t){const n=Wn(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?-1:!e.inclusive&&t.inclusive?1:0}function gr(e,t){const n=Wn(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?1:!e.inclusive&&t.inclusive?-1:0}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class pr{constructor(e){this.value=e}static empty(){return new pr({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!ar(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=cr(t)}setAll(e){let t=Z.emptyPath(),n={},r=[];e.forEach((e,s)=>{if(!t.isImmediateParentOf(s)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=s.popLast()}e?n[s.lastSegment()]=cr(e):r.push(s.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,n,r)}delete(e){const t=this.field(e.popLast());ar(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Qn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];ar(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){dn(t,(t,n)=>e[t]=n);for(const t of n)delete e[t]}clone(){return new pr(cr(this.value))}}function yr(e){const t=[];return dn(e.fields,(e,n)=>{const r=new Z([e]);if(ar(n)){const e=yr(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)}),new In(t)
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */}class wr{constructor(e,t,n,r,s,i,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=s,this.data=i,this.documentState=o}static newInvalidDocument(e){return new wr(e,0,me.min(),me.min(),me.min(),pr.empty(),0)}static newFoundDocument(e,t,n,r){return new wr(e,1,t,me.min(),n,r,0)}static newNoDocument(e,t){return new wr(e,2,t,me.min(),me.min(),pr.empty(),0)}static newUnknownDocument(e,t){return new wr(e,3,t,me.min(),me.min(),pr.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(me.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=pr.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=pr.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=me.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof wr&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new wr(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class br{constructor(e,t){this.position=e,this.inclusive=t}}function vr(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],o=e.position[s];if(r=i.field.isKeyField()?ee.comparator(ee.fromName(o.referenceValue),n.key):Wn(o,n.data.field(i.field)),"desc"===i.dir&&(r*=-1),0!==r)break}return r}function Ir(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Qn(e.position[n],t.position[n]))return!1;return!0}
/**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class Tr{constructor(e,t="asc"){this.field=e,this.dir=t}}function Er(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class Sr{}class _r extends Sr{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new Rr(e,t,n):"array-contains"===t?new Ur(e,n):"in"===t?new jr(e,n):"not-in"===t?new qr(e,n):"array-contains-any"===t?new Br(e,n):new _r(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new Fr(e,n):new Lr(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&void 0===t.nullValue&&this.matchesComparison(Wn(t,this.value)):null!==t&&Gn(this.value)===Gn(t)&&this.matchesComparison(Wn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return T(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class xr extends Sr{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new xr(e,t)}matches(e){return Cr(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.Pe||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Cr(e){return"and"===e.op}function Dr(e){return"or"===e.op}function Nr(e){return Ar(e)&&Cr(e)}function Ar(e){for(const t of e.filters)if(t instanceof xr)return!1;return!0}function kr(e){if(e instanceof _r)return e.field.canonicalString()+e.op.toString()+Xn(e.value);if(Nr(e))return e.filters.map(e=>kr(e)).join(",");{const t=e.filters.map(e=>kr(e)).join(",");return`${e.op}(${t})`}}function Or(e,t){return e instanceof _r?(function(e,t){return t instanceof _r&&e.op===t.op&&e.field.isEqual(t.field)&&Qn(e.value,t.value)})(e,t):e instanceof xr?(function(e,t){return t instanceof xr&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce((e,n,r)=>e&&Or(n,t.filters[r]),!0)})(e,t):void T(19439)}function Pr(e,t){const n=e.filters.concat(t);return xr.create(n,e.op)}function Vr(e){return e instanceof _r?(function(e){return`${e.field.canonicalString()} ${e.op} ${Xn(e.value)}`})(e):e instanceof xr?(function(e){return e.op.toString()+" {"+e.getFilters().map(Vr).join(" ,")+"}"})(e):"Filter"}class Rr extends _r{constructor(e,t,n){super(e,t,n),this.key=ee.fromName(n.referenceValue)}matches(e){const t=ee.comparator(e.key,this.key);return this.matchesComparison(t)}}class Fr extends _r{constructor(e,t){super(e,"in",t),this.keys=Mr("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Lr extends _r{constructor(e,t){super(e,"not-in",t),this.keys=Mr("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Mr(e,t){return(t.arrayValue?.values||[]).map(e=>ee.fromName(e.referenceValue))}class Ur extends _r{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return sr(t)&&Hn(t.arrayValue,this.value)}}class jr extends _r{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&Hn(this.value.arrayValue,t)}}class qr extends _r{constructor(e,t){super(e,"not-in",t)}matches(e){if(Hn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&void 0===t.nullValue&&!Hn(this.value.arrayValue,t)}}class Br extends _r{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!sr(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>Hn(this.value.arrayValue,e))}}
/**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class zr{constructor(e,t=null,n=[],r=[],s=null,i=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=s,this.startAt=i,this.endAt=o,this.Te=null}}function $r(e,t=null,n=[],r=[],s=null,i=null,o=null){return new zr(e,t,n,r,s,i,o)}function Kr(e){const t=x(e);if(null===t.Te){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(e=>kr(e)).join(","),e+="|ob:",e+=t.orderBy.map(e=>(function(e){return e.field.canonicalString()+e.dir})(e)).join(","),Qe(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(e=>Xn(e)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(e=>Xn(e)).join(",")),t.Te=e}return t.Te}function Gr(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Er(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Or(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Ir(e.startAt,t.startAt)&&Ir(e.endAt,t.endAt)}function Qr(e){return ee.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}function Hr(e,t){return e.filters.filter(e=>e instanceof _r&&e.field.isEqual(t))}function Wr(e,t,n){let r=Kn,s=!0;for(const n of Hr(e,t)){let e=Kn,t=!0;switch(n.op){case"<":case"<=":e=dr(n.value);break;case"==":case"in":case">=":e=n.value;break;case">":e=n.value,t=!1;break;case"!=":case"not-in":e=Kn}mr({value:r,inclusive:s},{value:e,inclusive:t})<0&&(r=e,s=t)}if(null!==n)for(let i=0;i<e.orderBy.length;++i)if(e.orderBy[i].field.isEqual(t)){const e=n.position[i];mr({value:r,inclusive:s},{value:e,inclusive:n.inclusive})<0&&(r=e,s=n.inclusive);break}return{value:r,inclusive:s}}function Jr(e,t,n){let r=Bn,s=!0;for(const n of Hr(e,t)){let e=Bn,t=!0;switch(n.op){case">=":case">":e=fr(n.value),t=!1;break;case"==":case"in":case"<=":e=n.value;break;case"<":e=n.value,t=!1;break;case"!=":case"not-in":e=Bn}gr({value:r,inclusive:s},{value:e,inclusive:t})>0&&(r=e,s=t)}if(null!==n)for(let i=0;i<e.orderBy.length;++i)if(e.orderBy[i].field.isEqual(t)){const e=n.position[i];gr({value:r,inclusive:s},{value:e,inclusive:n.inclusive})>0&&(r=e,s=n.inclusive);break}return{value:r,inclusive:s}}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class Yr{constructor(e,t=null,n=[],r=[],s=null,i="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=s,this.limitType=i,this.startAt=o,this.endAt=a,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function Xr(e,t,n,r,s,i,o,a){return new Yr(e,t,n,r,s,i,o,a)}function Zr(e){return new Yr(e)}function es(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function ts(e){return ee.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}function ns(e){return null!==e.collectionGroup}function rs(e){const t=x(e);if(null===t.Ie){t.Ie=[];const e=new Set;for(const n of t.explicitOrderBy)t.Ie.push(n),e.add(n.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc",r=(function(e){let t=new wn(Z.comparator);return e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(t=t.add(e.field))})}),t})(t);r.forEach(r=>{e.has(r.canonicalString())||r.isKeyField()||t.Ie.push(new Tr(r,n))}),e.has(Z.keyField().canonicalString())||t.Ie.push(new Tr(Z.keyField(),n))}return t.Ie}function ss(e){const t=x(e);return t.Ee||(t.Ee=os(t,rs(e))),t.Ee}function is(e){const t=x(e);return t.Re||(t.Re=os(t,e.explicitOrderBy)),t.Re}function os(e,t){if("F"===e.limitType)return $r(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{const t="desc"===e.dir?"asc":"desc";return new Tr(e.field,t)});const n=e.endAt?new br(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new br(e.startAt.position,e.startAt.inclusive):null;return $r(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function as(e,t){const n=e.filters.concat([t]);return new Yr(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function us(e,t){const n=e.explicitOrderBy.concat([t]);return new Yr(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}function cs(e,t,n){return new Yr(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function ls(e,t){return new Yr(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,t,e.endAt)}function hs(e,t){return new Yr(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,t)}function ds(e,t){return Gr(ss(e),ss(t))&&e.limitType===t.limitType}function fs(e){return`${Kr(ss(e))}|lt:${e.limitType}`}function ms(e){return`Query(target=${(function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(e=>Vr(e)).join(", ")}]`),Qe(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(e=>(function(e){return`${e.field.canonicalString()} (${e.dir})`})(e)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(e=>Xn(e)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(e=>Xn(e)).join(",")),`Target(${t})`})(ss(e))}; limitType=${e.limitType})`}function gs(e,t){return t.isFoundDocument()&&(function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):ee.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)})(e,t)&&(function(e,t){for(const n of rs(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0})(e,t)&&(function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0})(e,t)&&(function(e,t){return!(e.startAt&&!(function(e,t,n){const r=vr(e,t,n);return e.inclusive?r<=0:r<0})(e.startAt,rs(e),t))&&!(e.endAt&&!(function(e,t,n){const r=vr(e,t,n);return e.inclusive?r>=0:r>0})(e.endAt,rs(e),t))})(e,t)}function ps(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function ys(e){return(t,n)=>{let r=!1;for(const s of rs(e)){const e=ws(s,t,n);if(0!==e)return e;r=r||s.field.isKeyField()}return 0}}function ws(e,t,n){const r=e.field.isKeyField()?ee.comparator(t.key,n.key):(function(e,t,n){const r=t.data.field(e),s=n.data.field(e);return null!==r&&null!==s?Wn(r,s):T(42886)})(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return T(19790,{direction:e.dir})}}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class bs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[t,r]of n)if(this.equalsFn(t,e))return r}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){dn(this.inner,(t,n)=>{for(const[t,r]of n)e(t,r)})}isEmpty(){return mn(this.inner)}size(){return this.innerSize}}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const vs=new gn(ee.comparator);function Is(){return vs}const Ts=new gn(ee.comparator);function Es(...e){let t=Ts;for(const n of e)t=t.insert(n.key,n);return t}function Ss(e){let t=Ts;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function _s(){return Cs()}function xs(){return Cs()}function Cs(){return new bs(e=>e.toString(),(e,t)=>e.isEqual(t))}const Ds=new gn(ee.comparator),Ns=new wn(ee.comparator);function As(...e){let t=Ns;for(const n of e)t=t.add(n);return t}const ks=new wn(q);function Os(){return ks}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function Ps(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:He(t)?"-0":t}}function Vs(e){return{integerValue:""+e}}function Rs(e,t){return Je(t)?Vs(t):Ps(e,t)}
/**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class Fs{constructor(){this._=void 0}}function Ls(e,t,n){return e instanceof js?(function(e,t){const n={fields:{[An]:{stringValue:Nn},[On]:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&Pn(t)&&(t=Vn(t)),t&&(n.fields[kn]=t),{mapValue:n}})(n,t):e instanceof qs?Bs(e,t):e instanceof zs?$s(e,t):e instanceof Gs?(function(e,t){const n=Us(e,t),r=Js(n)+Js(e.Ae);return nr(n)&&nr(e.Ae)?Vs(r):Ps(e.serializer,r)})(e,t):e instanceof Qs?(function(e,t){return Ws(e,t,Math.min)})(e,t):e instanceof Hs?(function(e,t){return Ws(e,t,Math.max)})(e,t):void 0}function Ms(e,t,n){return e instanceof qs?Bs(e,t):e instanceof zs?$s(e,t):n}function Us(e,t){return e instanceof Gs?rr(t)?t:{integerValue:0}:null}class js extends Fs{}class qs extends Fs{constructor(e){super(),this.elements=e}}function Bs(e,t){const n=Ys(t);for(const t of e.elements)n.some(e=>Qn(e,t))||n.push(t);return{arrayValue:{values:n}}}class zs extends Fs{constructor(e){super(),this.elements=e}}function $s(e,t){let n=Ys(t);for(const t of e.elements)n=n.filter(e=>!Qn(e,t));return{arrayValue:{values:n}}}class Ks extends Fs{constructor(e,t){super(),this.serializer=e,this.Ae=t}}class Gs extends Ks{}class Qs extends Ks{}class Hs extends Ks{}function Ws(e,t,n){if(!rr(t))return e.Ae;const r=n(Js(t),Js(e.Ae));return nr(t)&&nr(e.Ae)?Vs(r):Ps(e.serializer,r)}function Js(e){return Cn(e.integerValue||e.doubleValue)}function Ys(e){return sr(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class Xs{constructor(e,t){this.field=e,this.transform=t}}function Zs(e,t){return e.field.isEqual(t.field)&&(function(e,t){return e instanceof qs&&t instanceof qs||e instanceof zs&&t instanceof zs?G(e.elements,t.elements,Qn):e instanceof Gs&&t instanceof Gs||e instanceof Qs&&t instanceof Qs||e instanceof Hs&&t instanceof Hs?Qn(e.Ae,t.Ae):e instanceof js&&t instanceof js})(e.transform,t.transform)}class ei{constructor(e,t){this.version=e,this.transformResults=t}}class ti{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ti}static exists(e){return new ti(void 0,e)}static updateTime(e){return new ti(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ni(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class ri{}function si(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new mi(e.key,ti.none()):new ci(e.key,e.data,ti.none());{const n=e.data,r=pr.empty();let s=new wn(Z.comparator);for(let e of t.fields)if(!s.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),s=s.add(e)}return new li(e.key,r,new In(s.toArray()),ti.none())}}function ii(e,t,n){e instanceof ci?(function(e,t,n){const r=e.value.clone(),s=di(e.fieldTransforms,t,n.transformResults);r.setAll(s),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()})(e,t,n):e instanceof li?(function(e,t,n){if(!ni(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=di(e.fieldTransforms,t,n.transformResults),s=t.data;s.setAll(hi(e)),s.setAll(r),t.convertToFoundDocument(n.version,s).setHasCommittedMutations()})(e,t,n):(function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()})(0,t,n)}function oi(e,t,n,r){return e instanceof ci?(function(e,t,n,r){if(!ni(e.precondition,t))return n;const s=e.value.clone(),i=fi(e.fieldTransforms,r,t);return s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null})(e,t,n,r):e instanceof li?(function(e,t,n,r){if(!ni(e.precondition,t))return n;const s=fi(e.fieldTransforms,r,t),i=t.data;return i.setAll(hi(e)),i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))})(e,t,n,r):(function(e,t,n){return ni(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n})(e,t,n)}function ai(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),s=Us(r.transform,e||null);null!=s&&(null===n&&(n=pr.empty()),n.set(r.field,s))}return n||null}function ui(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!(function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&G(e,t,(e,t)=>Zs(e,t))})(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class ci extends ri{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class li extends ri{constructor(e,t,n,r,s=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function hi(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function di(e,t,n){const r=new Map;S(e.length===n.length,32656,{Ve:n.length,de:e.length});for(let s=0;s<n.length;s++){const i=e[s],o=i.transform,a=t.data.field(i.field);r.set(i.field,Ms(o,a,n[s]))}return r}function fi(e,t,n){const r=new Map;for(const s of e){const e=s.transform,i=n.data.field(s.field);r.set(s.field,Ls(e,i,t))}return r}class mi extends ri{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class gi extends ri{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class pi{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){const r=this.mutations[t];r.key.isEqual(e.key)&&ii(r,e,n[t])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=oi(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=oi(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=xs();return this.mutations.forEach(r=>{const s=e.get(r.key),i=s.overlayedDocument;let o=this.applyToLocalView(i,s.mutatedFields);o=t.has(r.key)?null:o;const a=si(i,o);null!==a&&n.set(r.key,a),i.isValidDocument()||i.convertToNoDocument(me.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),As())}isEqual(e){return this.batchId===e.batchId&&G(this.mutations,e.mutations,(e,t)=>ui(e,t))&&G(this.baseMutations,e.baseMutations,(e,t)=>ui(e,t))}}class yi{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){S(e.mutations.length===n.length,58842,{me:e.mutations.length,fe:n.length});let r=Ds;const s=e.mutations;for(let e=0;e<s.length;e++)r=r.insert(s[e].key,n[e].version);return new yi(e,t,n,r)}}
/**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class wi{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class bi{constructor(e,t,n){this.alias=e,this.aggregateType=t,this.fieldPath=n}}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class vi{constructor(e,t){this.count=e,this.unchangedNames=t}}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */var Ii,Ti;function Ei(e){switch(e){case C.OK:return T(64938);case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0;default:return T(15467,{code:e})}}function Si(e){if(void 0===e)return b("GRPC error has no .code"),C.UNKNOWN;switch(e){case Ii.OK:return C.OK;case Ii.CANCELLED:return C.CANCELLED;case Ii.UNKNOWN:return C.UNKNOWN;case Ii.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case Ii.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case Ii.INTERNAL:return C.INTERNAL;case Ii.UNAVAILABLE:return C.UNAVAILABLE;case Ii.UNAUTHENTICATED:return C.UNAUTHENTICATED;case Ii.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case Ii.NOT_FOUND:return C.NOT_FOUND;case Ii.ALREADY_EXISTS:return C.ALREADY_EXISTS;case Ii.PERMISSION_DENIED:return C.PERMISSION_DENIED;case Ii.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case Ii.ABORTED:return C.ABORTED;case Ii.OUT_OF_RANGE:return C.OUT_OF_RANGE;case Ii.UNIMPLEMENTED:return C.UNIMPLEMENTED;case Ii.DATA_LOSS:return C.DATA_LOSS;default:return T(39323,{code:e})}}(Ti=Ii||(Ii={}))[Ti.OK=0]="OK",Ti[Ti.CANCELLED=1]="CANCELLED",Ti[Ti.UNKNOWN=2]="UNKNOWN",Ti[Ti.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ti[Ti.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ti[Ti.NOT_FOUND=5]="NOT_FOUND",Ti[Ti.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ti[Ti.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ti[Ti.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ti[Ti.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ti[Ti.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ti[Ti.ABORTED=10]="ABORTED",Ti[Ti.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ti[Ti.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ti[Ti.INTERNAL=13]="INTERNAL",Ti[Ti.UNAVAILABLE=14]="UNAVAILABLE",Ti[Ti.DATA_LOSS=15]="DATA_LOSS";
/**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
let _i=null;function xi(e){if(_i)throw new Error("a TestingHooksSpi instance is already set");_i=e}
/**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function Ci(){return new TextEncoder}
/**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const Di=new c.Integer([4294967295,4294967295],0);function Ni(e){const t=Ci().encode(e),n=new c.Md5;return n.update(t),new Uint8Array(n.digest())}function Ai(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new c.Integer([n,r],0),new c.Integer([s,i],0)]}class ki{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Oi(`Invalid padding: ${t}`);if(n<0)throw new Oi(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new Oi(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new Oi(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=c.Integer.fromNumber(this.ge)}ye(e,t,n){let r=e.add(t.multiply(c.Integer.fromNumber(n)));return 1===r.compare(Di)&&(r=new c.Integer([r.getBits(0),r.getBits(1)],0)),r.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.ge)return!1;const t=Ni(e),[n,r]=Ai(t);for(let e=0;e<this.hashCount;e++){const t=this.ye(n,r,e);if(!this.we(t))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),i=new ki(s,r,t);return n.forEach(e=>i.insert(e)),i}insert(e){if(0===this.ge)return;const t=Ni(e),[n,r]=Ai(t);for(let e=0;e<this.hashCount;e++){const t=this.ye(n,r,e);this.Se(t)}}Se(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Oi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class Pi{constructor(e,t,n,r,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,Vi.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Pi(me.min(),r,new gn(q),Is(),As())}}class Vi{constructor(e,t,n,r,s){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Vi(n,t,As(),As(),As())}}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class Ri{constructor(e,t,n,r){this.be=e,this.removedTargetIds=t,this.key=n,this.De=r}}class Fi{constructor(e,t){this.targetId=e,this.Ce=t}}class Li{constructor(e,t,n=Sn.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Mi{constructor(e){this.targetId=e,this.ve=0,this.Fe=Bi(),this.Me=Sn.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return 0!==this.ve}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=As(),t=As(),n=As();return this.Fe.forEach((r,s)=>{switch(s){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:T(38017,{changeType:s})}}),new Vi(this.Me,this.xe,e,t,n)}qe(){this.Oe=!1,this.Fe=Bi()}Ke(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,S(this.ve>=0,3241,{ve:this.ve,targetId:this.targetId})}Qe(){this.Oe=!0,this.xe=!0}}const Ui="WatchChangeAggregator";class ji{constructor(e){this.Ge=e,this.ze=new Map,this.je=Is(),this.Je=qi(),this.He=qi(),this.Ze=new gn(q)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const n=this.ze.get(t);if(n)switch(e.state){case 0:this.nt(t)&&n.Le(e.resumeToken);break;case 1:n.We(),n.Ne||n.qe(),n.Le(e.resumeToken);break;case 2:n.We(),n.Ne||this.removeTarget(t);break;case 3:this.nt(t)&&(n.Qe(),n.Le(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),n.Le(e.resumeToken));break;default:T(56790,{state:e.state})}else w(Ui,`handleTargetChange received targetChange for untracked target ID (${t}) with state (${e.state})`)})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((e,n)=>{this.nt(n)&&t(n)})}it(e){const t=e.targetId,n=e.Ce.count,r=this.st(t);if(r){const s=r.target;if(Qr(s))if(0===n){const e=new ee(s.path);this.et(t,e,wr.newNoDocument(e,me.min()))}else S(1===n,20013,{expectedCount:n});else{const r=this.ot(t);if(r!==n){const n=this._t(e),s=n?this.ut(n,e,r):1;if(0!==s){this.rt(t);const e=2===s?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,e)}_i?.o((function(e,t,n,r,s){const i={localCacheCount:e,existenceFilterCount:t.count,databaseId:n.database,projectId:n.projectId},o=t.unchangedNames;return o&&(i.bloomFilter={applied:0===s,hashCount:o?.hashCount??0,bitmapLength:o?.bits?.bitmap?.length??0,padding:o?.bits?.padding??0,mightContain:e=>r?.mightContain(e)??!1}),i}
/**
            * @license
            * Copyright 2017 Google LLC
            *
            * Licensed under the Apache License, Version 2.0 (the "License");
            * you may not use this file except in compliance with the License.
            * You may obtain a copy of the License at
            *
            *   http://www.apache.org/licenses/LICENSE-2.0
            *
            * Unless required by applicable law or agreed to in writing, software
            * distributed under the License is distributed on an "AS IS" BASIS,
            * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
            * See the License for the specific language governing permissions and
            * limitations under the License.
            */)(r,e.Ce,this.Ge.lt(),n,s))}}}}_t(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:s=0}=t;let i,o;try{i=Dn(n).toUint8Array()}catch(e){if(e instanceof Tn)return v("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{o=new ki(i,r,s)}catch(e){return v(e instanceof Oi?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===o.ge?null:o}ut(e,t,n){return t.Ce.count===n-this.ht(e,t.targetId)?0:2}ht(e,t){const n=this.Ge.getRemoteKeysForTarget(t);let r=0;return n.forEach(n=>{const s=this.Ge.lt(),i=`projects/${s.projectId}/databases/${s.database}/documents/${n.path.canonicalString()}`;e.mightContain(i)||(this.et(t,n,null),r++)}),r}Pt(e){const t=new Map;this.ze.forEach((n,r)=>{const s=this.st(r);if(s){if(n.current&&Qr(s.target)){const t=new ee(s.target.path);this.Tt(t).has(r)||this.It(r,t)||this.et(r,t,wr.newNoDocument(t,e))}n.Be&&(t.set(r,n.ke()),n.qe())}});let n=As();this.He.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{const t=this.st(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.je.forEach((t,n)=>n.setReadTime(e));const r=new Pi(e,t,this.Ze,this.je,n);return this.je=Is(),this.Je=qi(),this.He=qi(),this.Ze=new gn(q),r}Ye(e,t){const n=this.ze.get(e);if(!n||!this.nt(e))return void w(Ui,`addDocumentToTarget received document for unknown inactive target (${e})`);const r=this.It(e,t.key)?2:0;n.Ke(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Tt(t.key).add(e)),this.He=this.He.insert(t.key,this.Et(t.key).add(e))}et(e,t,n){const r=this.ze.get(e);r&&this.nt(e)?(this.It(e,t)?r.Ke(t,1):r.Ue(t),this.He=this.He.insert(t,this.Et(t).delete(e)),this.He=this.He.insert(t,this.Et(t).add(e)),n&&(this.je=this.je.insert(t,n))):w(Ui,`removeDocumentFromTarget received document for unknown or inactive target (${e})`)}removeTarget(e){this.ze.delete(e)}ot(e){const t=this.ze.get(e);if(!t)return 0;const n=t.ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){let t=this.ze.get(e);t||(w(Ui,`recordPendingTargetRequest set up tracking for target ID ${e}`),t=new Mi(e),this.ze.set(e,t)),t.$e()}Et(e){let t=this.He.get(e);return t||(t=new wn(q),this.He=this.He.insert(e,t)),t}Tt(e){let t=this.Je.get(e);return t||(t=new wn(q),this.Je=this.Je.insert(e,t)),t}nt(e){const t=null!==this.st(e);return t||w(Ui,"Detected inactive target",e),t}st(e){const t=this.ze.get(e);return void 0===t||t.Ne?null:this.Ge.Rt(e)}rt(e){this.ze.set(e,new Mi(e)),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}It(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function qi(){return new gn(ee.comparator)}function Bi(){return new gn(ee.comparator)}const zi={asc:"ASCENDING",desc:"DESCENDING"},$i={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Ki={and:"AND",or:"OR"};class Gi{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Qi(e,t){return e.useProto3Json||Qe(t)?t:{value:t}}function Hi(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Wi(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Ji(e,t){return Hi(e,t.toTimestamp())}function Yi(e){return S(!!e,49232),me.fromTimestamp((function(e){const t=xn(e);return new fe(t.seconds,t.nanos)})(e))}function Xi(e,t){return Zi(e,t).canonicalString()}function Zi(e,t){const n=(function(e){return new Y(["projects",e.projectId,"databases",e.database])})(e).child("documents");return void 0===t?n:n.child(t)}function eo(e){const t=Y.fromString(e);return S(No(t),10190,{key:t.toString()}),t}function to(e,t){return Xi(e.databaseId,t.path)}function no(e,t){const n=eo(t);if(n.get(1)!==e.databaseId.projectId)throw new D(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new D(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new ee(oo(n))}function ro(e,t){return Xi(e.databaseId,t)}function so(e){const t=eo(e);return 4===t.length?Y.emptyPath():oo(t)}function io(e){return new Y(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function oo(e){return S(e.length>4&&"documents"===e.get(4),29091,{key:e.toString()}),e.popFirst(5)}function ao(e,t,n){return{name:to(e,t),fields:n.value.mapValue.fields}}function uo(e,t,n){const r={};t.transaction?.length&&(r.transaction=t.transaction);const s=t.executionTime?Yi(t.executionTime):void 0;return r.executionTime=s,n&&(r.key=n.name?no(e,n.name):void 0,r.fields=new pr({mapValue:{fields:n.fields}}),r.createTime=n.createTime?Yi(n.createTime):void 0,r.updateTime=n.updateTime?Yi(n.updateTime):void 0),r}function co(e,t,n){const r=no(e,t.name),s=Yi(t.updateTime),i=t.createTime?Yi(t.createTime):me.min(),o=new pr({mapValue:{fields:t.fields}}),a=wr.newFoundDocument(r,s,i,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function lo(e,t){return"found"in t?(function(e,t){S(!!t.found,43571),t.found.name,t.found.updateTime;const n=no(e,t.found.name),r=Yi(t.found.updateTime),s=t.found.createTime?Yi(t.found.createTime):me.min(),i=new pr({mapValue:{fields:t.found.fields}});return wr.newFoundDocument(n,r,s,i)})(e,t):"missing"in t?(function(e,t){S(!!t.missing,3894),S(!!t.readTime,22933);const n=no(e,t.missing),r=Yi(t.readTime);return wr.newNoDocument(n,r)})(e,t):T(7234,{result:t})}function ho(e,t){let n;if("targetChange"in t){t.targetChange;const r=(function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:T(39313,{state:e})})(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=(function(e,t){return e.useProto3Json?(S(void 0===t||"string"==typeof t,58123),Sn.fromBase64String(t||"")):(S(void 0===t||t instanceof Buffer||t instanceof Uint8Array,16193),Sn.fromUint8Array(t||new Uint8Array))})(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&(function(e){const t=void 0===e.code?C.UNKNOWN:Si(e.code);return new D(t,e.message||"")})(o);n=new Li(r,s,i,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=no(e,r.document.name),i=Yi(r.document.updateTime),o=r.document.createTime?Yi(r.document.createTime):me.min(),a=new pr({mapValue:{fields:r.document.fields}}),u=wr.newFoundDocument(s,i,o,a),c=r.targetIds||[],l=r.removedTargetIds||[];n=new Ri(c,l,u.key,u)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=no(e,r.document),i=r.readTime?Yi(r.readTime):me.min(),o=wr.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Ri([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=no(e,r.document),i=r.removedTargetIds||[];n=new Ri([],i,s,null)}else{if(!("filter"in t))return T(11601,{At:t});{t.filter;const e=t.filter;e.targetId;const{count:r=0,unchangedNames:s}=e,i=new vi(r,s),o=e.targetId;n=new Fi(o,i)}}return n}function fo(e,t){let n;if(t instanceof ci)n={update:ao(e,t.key,t.value)};else if(t instanceof mi)n={delete:to(e,t.key)};else if(t instanceof li)n={update:ao(e,t.key,t.data),updateMask:Do(t.fieldMask)};else{if(!(t instanceof gi))return T(16599,{Vt:t.type});n={verify:to(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){const n=t.transform;if(n instanceof js)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof qs)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof zs)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Gs)return{fieldPath:t.field.canonicalString(),increment:n.Ae};if(n instanceof Qs)return{fieldPath:t.field.canonicalString(),minimum:n.Ae};if(n instanceof Hs)return{fieldPath:t.field.canonicalString(),maximum:n.Ae};throw T(20930,{transform:t.transform})})(0,e))),t.precondition.isNone||(n.currentDocument=(function(e,t){return void 0!==t.updateTime?{updateTime:Ji(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:T(27497)})(e,t.precondition)),n}function mo(e,t){const n=t.currentDocument?(function(e){return void 0!==e.updateTime?ti.updateTime(Yi(e.updateTime)):void 0!==e.exists?ti.exists(e.exists):ti.none()})(t.currentDocument):ti.none(),r=t.updateTransforms?t.updateTransforms.map(t=>(function(e,t){let n=null;if("setToServerValue"in t)S("REQUEST_TIME"===t.setToServerValue,16630,{proto:t}),n=new js;else if("appendMissingElements"in t){const e=t.appendMissingElements.values||[];n=new qs(e)}else if("removeAllFromArray"in t){const e=t.removeAllFromArray.values||[];n=new zs(e)}else"increment"in t?n=new Gs(e,t.increment):"minimum"in t?n=new Qs(e,t.minimum):"maximum"in t?n=new Hs(e,t.maximum):T(16584,{proto:t});const r=Z.fromServerFormat(t.fieldPath);return new Xs(r,n)})(e,t)):[];if(t.update){t.update.name;const s=no(e,t.update.name),i=new pr({mapValue:{fields:t.update.fields}});if(t.updateMask){const e=(function(e){const t=e.fieldPaths||[];return new In(t.map(e=>Z.fromServerFormat(e)))})(t.updateMask);return new li(s,i,e,n,r)}return new ci(s,i,n,r)}if(t.delete){const r=no(e,t.delete);return new mi(r,n)}if(t.verify){const r=no(e,t.verify);return new gi(r,n)}return T(1463,{proto:t})}function go(e,t){return e&&e.length>0?(S(void 0!==t,14353),e.map(e=>(function(e,t){let n=e.updateTime?Yi(e.updateTime):Yi(t);return n.isEqual(me.min())&&(n=Yi(t)),new ei(n,e.transformResults||[])})(e,t))):[]}function po(e,t){return{documents:[ro(e,t.path)]}}function yo(e,t){const n={structuredQuery:{}},r=t.path;let s;null!==t.collectionGroup?(s=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=ro(e,s);const i=(function(e){if(0!==e.length)return Co(xr.create(e,"and"))})(t.filters);i&&(n.structuredQuery.where=i);const o=(function(e){if(0!==e.length)return e.map(e=>(function(e){return{field:_o(e.field),direction:To(e.dir)}})(e))})(t.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Qi(e,t.limit);return null!==a&&(n.structuredQuery.limit=a),t.startAt&&(n.structuredQuery.startAt=(function(e){return{before:e.inclusive,values:e.position}})(t.startAt)),t.endAt&&(n.structuredQuery.endAt=(function(e){return{before:!e.inclusive,values:e.position}})(t.endAt)),{dt:n,parent:s}}function wo(e,t,n,r){const{dt:s,parent:i}=yo(e,t),o={},a=[];let u=0;return n.forEach(e=>{const t=r?e.alias:"aggregate_"+u++;o[t]=e.alias,"count"===e.aggregateType?a.push({alias:t,count:{}}):"avg"===e.aggregateType?a.push({alias:t,avg:{field:_o(e.fieldPath)}}):"sum"===e.aggregateType&&a.push({alias:t,sum:{field:_o(e.fieldPath)}})}),{request:{structuredAggregationQuery:{aggregations:a,structuredQuery:s.structuredQuery},parent:s.parent},ft:o,parent:i}}function bo(e){let t=so(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){S(1===r,65062);const e=n.from[0];e.allDescendants?s=e.collectionId:t=t.child(e.collectionId)}let i=[];n.where&&(i=(function(e){const t=Io(e);return t instanceof xr&&Nr(t)?t.getFilters():[t]})(n.where));let o=[];n.orderBy&&(o=(function(e){return e.map(e=>(function(e){return new Tr(xo(e.field),(function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(e.direction))})(e))})(n.orderBy));let a=null;n.limit&&(a=(function(e){let t;return t="object"==typeof e?e.value:e,Qe(t)?null:t})(n.limit));let u=null;n.startAt&&(u=(function(e){const t=!!e.before,n=e.values||[];return new br(n,t)})(n.startAt));let c=null;return n.endAt&&(c=(function(e){const t=!e.before,n=e.values||[];return new br(n,t)})(n.endAt)),Xr(t,s,o,i,a,"F",u,c)}function vo(e,t){const n=(function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return T(28987,{purpose:e})}})(t.purpose);return null==n?null:{"goog-listen-tags":n}}function Io(e){return void 0!==e.unaryFilter?(function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=xo(e.unaryFilter.field);return _r.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=xo(e.unaryFilter.field);return _r.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=xo(e.unaryFilter.field);return _r.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=xo(e.unaryFilter.field);return _r.create(s,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return T(61313);default:return T(60726)}})(e):void 0!==e.fieldFilter?(function(e){return _r.create(xo(e.fieldFilter.field),(function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return T(58110);default:return T(50506)}})(e.fieldFilter.op),e.fieldFilter.value)})(e):void 0!==e.compositeFilter?(function(e){return xr.create(e.compositeFilter.filters.map(e=>Io(e)),(function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return T(1026)}})(e.compositeFilter.op))})(e):T(30097,{filter:e})}function To(e){return zi[e]}function Eo(e){return $i[e]}function So(e){return Ki[e]}function _o(e){return{fieldPath:e.canonicalString()}}function xo(e){return Z.fromServerFormat(e.fieldPath)}function Co(e){return e instanceof _r?(function(e){if("=="===e.op){if(or(e.value))return{unaryFilter:{field:_o(e.field),op:"IS_NAN"}};if(ir(e.value))return{unaryFilter:{field:_o(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(or(e.value))return{unaryFilter:{field:_o(e.field),op:"IS_NOT_NAN"}};if(ir(e.value))return{unaryFilter:{field:_o(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_o(e.field),op:Eo(e.op),value:e.value}}})(e):e instanceof xr?(function(e){const t=e.getFilters().map(e=>Co(e));return 1===t.length?t[0]:{compositeFilter:{op:So(e.op),filters:t}}})(e):T(54877,{filter:e})}function Do(e){const t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function No(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}function Ao(e){return!!e&&"function"==typeof e._toProto&&"ProtoValue"===e._protoValueType}function ko(e,t){const n={fields:{}};return t.forEach((t,r)=>{if("string"!=typeof r)throw new Error(`Cannot encode map with non-string key: ${r}`);n.fields[r]=t._toProto(e)}),{mapValue:n}}function Oo(e){return{stringValue:e}}function Po(e){return{pipelineValue:e}}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class Vo{constructor(e,t,n,r,s=me.min(),i=me.min(),o=Sn.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(e){return new Vo(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Vo(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Vo(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Vo(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class Ro{constructor(e){this.gt=e}}function Fo(e,t){let n;if(t.document)n=co(e.gt,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const e=ee.fromSegments(t.noDocument.path),r=jo(t.noDocument.readTime);n=wr.newNoDocument(e,r),t.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!t.unknownDocument)return T(56709);{const e=ee.fromSegments(t.unknownDocument.path),r=jo(t.unknownDocument.version);n=wr.newUnknownDocument(e,r)}}return t.readTime&&n.setReadTime((function(e){const t=new fe(e[0],e[1]);return me.fromTimestamp(t)})(t.readTime)),n}function Lo(e,t){const n=t.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Mo(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())r.document=(function(e,t){return{name:to(e,t.key),fields:t.data.value.mapValue.fields,updateTime:Hi(e,t.version.toTimestamp()),createTime:Hi(e,t.createTime.toTimestamp())}})(e.gt,t);else if(t.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:Uo(t.version)};else{if(!t.isUnknownDocument())return T(57904,{document:t});r.unknownDocument={path:n.path.toArray(),version:Uo(t.version)}}return r}function Mo(e){const t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function Uo(e){const t=e.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function jo(e){const t=new fe(e.seconds,e.nanoseconds);return me.fromTimestamp(t)}function qo(e,t){const n=(t.baseMutations||[]).map(t=>mo(e.gt,t));for(let e=0;e<t.mutations.length-1;++e){const n=t.mutations[e];if(e+1<t.mutations.length&&void 0!==t.mutations[e+1].transform){const r=t.mutations[e+1];n.updateTransforms=r.transform.fieldTransforms,t.mutations.splice(e+1,1),++e}}const r=t.mutations.map(t=>mo(e.gt,t)),s=fe.fromMillis(t.localWriteTimeMs);return new pi(t.batchId,s,n,r)}function Bo(e){const t=jo(e.readTime),n=void 0!==e.lastLimboFreeSnapshotVersion?jo(e.lastLimboFreeSnapshotVersion):me.min();let r;return r=(function(e){return void 0!==e.documents})(e.query)?(function(e){const t=e.documents.length;return S(1===t,1966,{count:t}),ss(Zr(so(e.documents[0])))})(e.query):(function(e){return ss(bo(e))})(e.query),new Vo(r,e.targetId,"TargetPurposeListen",e.lastListenSequenceNumber,t,n,Sn.fromBase64String(e.resumeToken))}function zo(e,t){const n=Uo(t.snapshotVersion),r=Uo(t.lastLimboFreeSnapshotVersion);let s;s=Qr(t.target)?po(e.gt,t.target):yo(e.gt,t.target).dt;const i=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:Kr(t.target),readTime:n,resumeToken:i,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:s}}function $o(e){const t=bo({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?cs(t,t.limit,"L"):t}function Ko(e,t){return new wi(t.largestBatchId,mo(e.gt,t.overlayMutation))}function Go(e,t){const n=t.path.lastSegment();return[e,Ze(t.path.popLast()),n]}function Qo(e,t,n,r){return{indexId:e,uid:t,sequenceNumber:n,readTime:Uo(r.readTime),documentKey:Ze(r.documentKey.path),largestBatchId:r.largestBatchId}}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class Ho{getBundleMetadata(e,t){return Wo(e).get(t).next(e=>{if(e)return(function(e){return{id:e.bundleId,createTime:jo(e.createTime),version:e.version}})(e)})}saveBundleMetadata(e,t){return Wo(e).put((function(e){return{bundleId:e.id,createTime:Uo(Yi(e.createTime)),version:e.version}})(t))}getNamedQuery(e,t){return Jo(e).get(t).next(e=>{if(e)return(function(e){return{name:e.name,query:$o(e.bundledQuery),readTime:jo(e.readTime)}})(e)})}saveNamedQuery(e,t){return Jo(e).put((function(e){return{name:e.name,readTime:Uo(Yi(e.readTime)),bundledQuery:e.bundledQuery}})(t))}}function Wo(e){return ln(e,Rt)}function Jo(e){return ln(e,Ft)}
/**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class Yo{constructor(e,t){this.serializer=e,this.userId=t}static yt(e,t){const n=t.uid||"";return new Yo(e,n)}getOverlay(e,t){return Xo(e).get(Go(this.userId,t)).next(e=>e?Ko(this.serializer,e):null)}getOverlays(e,t){const n=_s();return Ae.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){const r=[];return n.forEach((n,s)=>{const i=new wi(t,s);r.push(this.wt(e,i))}),Ae.waitFor(r)}removeOverlaysForBatchId(e,t,n){const r=new Set;t.forEach(e=>r.add(Ze(e.getCollectionPath())));const s=[];return r.forEach(t=>{const r=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,n+1],!1,!0);s.push(Xo(e).X(Wt,r))}),Ae.waitFor(s)}getOverlaysForCollection(e,t,n){const r=_s(),s=Ze(t),i=IDBKeyRange.bound([this.userId,s,n],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Xo(e).J(Wt,i).next(e=>{for(const t of e){const e=Ko(this.serializer,t);r.set(e.getKey(),e)}return r})}getOverlaysForCollectionGroup(e,t,n,r){const s=_s();let i;const o=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Xo(e).ee({index:Yt,range:o},(e,t,n)=>{const o=Ko(this.serializer,t);s.size()<r||o.largestBatchId===i?(s.set(o.getKey(),o),i=o.largestBatchId):n.done()}).next(()=>s)}wt(e,t){return Xo(e).put((function(e,t,n){const[r,s,i]=Go(t,n.mutation.key);return{userId:t,collectionPath:s,documentId:i,collectionGroup:n.mutation.key.getCollectionGroup(),largestBatchId:n.largestBatchId,overlayMutation:fo(e.gt,n.mutation)}})(this.serializer,this.userId,t))}}function Xo(e){return ln(e,Qt)}
/**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class Zo{St(e){return ln(e,Zt)}getSessionToken(e){return this.St(e).get("sessionToken").next(e=>{const t=e?.value;return t?Sn.fromUint8Array(t):Sn.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.St(e).put({name:"sessionToken",value:t.toUint8Array()})}}
/**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class ea{constructor(){}bt(e,t){this.Dt(e,t),t.Ct()}Dt(e,t){if("nullValue"in e)this.vt(t,5);else if("booleanValue"in e)this.vt(t,10),t.Ft(e.booleanValue?1:0);else if("integerValue"in e)this.vt(t,15),t.Ft(Cn(e.integerValue));else if("doubleValue"in e){const n=Cn(e.doubleValue);isNaN(n)?this.vt(t,13):(this.vt(t,15),He(n)?t.Ft(0):t.Ft(n))}else if("timestampValue"in e){let n=e.timestampValue;this.vt(t,20),"string"==typeof n&&(n=xn(n)),t.Mt(`${n.seconds||""}`),t.Ft(n.nanos||0)}else if("stringValue"in e)this.xt(e.stringValue,t),this.Ot(t);else if("bytesValue"in e)this.vt(t,30),t.Nt(Dn(e.bytesValue)),this.Ot(t);else if("referenceValue"in e)this.Bt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.vt(t,45),t.Ft(n.latitude||0),t.Ft(n.longitude||0)}else"mapValue"in e?lr(e)?this.vt(t,Number.MAX_SAFE_INTEGER):ur(e)?this.Lt(e.mapValue,t):(this.kt(e.mapValue,t),this.Ot(t)):"arrayValue"in e?(this.qt(e.arrayValue,t),this.Ot(t)):T(19022,{Kt:e})}xt(e,t){this.vt(t,25),this.Ut(e,t)}Ut(e,t){t.Mt(e)}kt(e,t){const n=e.fields||{};this.vt(t,55);for(const e of Object.keys(n))this.xt(e,t),this.Dt(n[e],t)}Lt(e,t){const n=e.fields||{};this.vt(t,53);const r=$n,s=n[r].arrayValue?.values?.length||0;this.vt(t,15),t.Ft(Cn(s)),this.xt(r,t),this.Dt(n[r],t)}qt(e,t){const n=e.values||[];this.vt(t,50);for(const e of n)this.Dt(e,t)}Bt(e,t){this.vt(t,37),ee.fromName(e).path.forEach(e=>{this.vt(t,60),this.Ut(e,t)})}vt(e,t){e.Ft(t)}Ot(e){e.Ft(2)}}ea.$t=new ea;
/**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law | agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
const ta=255;function na(e){if(0===e)return 8;let t=0;return e>>4||(t+=4,e<<=4),e>>6||(t+=2,e<<=2),e>>7||(t+=1),t}function ra(e){const t=64-(function(e){let t=0;for(let n=0;n<8;++n){const r=na(255&e[n]);if(t+=r,8!==r)break}return t})(e);return Math.ceil(t/8)}class sa{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Wt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Qt(n.value),n=t.next();this.Gt()}zt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.jt(n.value),n=t.next();this.Jt()}Ht(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.Qt(e);else if(e<2048)this.Qt(960|e>>>6),this.Qt(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Qt(480|e>>>12),this.Qt(128|63&e>>>6),this.Qt(128|63&e);else{const e=t.codePointAt(0);this.Qt(240|e>>>18),this.Qt(128|63&e>>>12),this.Qt(128|63&e>>>6),this.Qt(128|63&e)}}this.Gt()}Zt(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.jt(e);else if(e<2048)this.jt(960|e>>>6),this.jt(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.jt(480|e>>>12),this.jt(128|63&e>>>6),this.jt(128|63&e);else{const e=t.codePointAt(0);this.jt(240|e>>>18),this.jt(128|63&e>>>12),this.jt(128|63&e>>>6),this.jt(128|63&e)}}this.Jt()}Xt(e){const t=this.Yt(e),n=ra(t);this.en(1+n),this.buffer[this.position++]=255&n;for(let e=t.length-n;e<t.length;++e)this.buffer[this.position++]=255&t[e]}tn(e){const t=this.Yt(e),n=ra(t);this.en(1+n),this.buffer[this.position++]=~(255&n);for(let e=t.length-n;e<t.length;++e)this.buffer[this.position++]=~(255&t[e])}nn(){this.rn(ta),this.rn(255)}sn(){this._n(ta),this._n(255)}reset(){this.position=0}seed(e){this.en(e.length),this.buffer.set(e,this.position),this.position+=e.length}an(){return this.buffer.slice(0,this.position)}Yt(e){const t=(function(e){const t=new DataView(new ArrayBuffer(8));return t.setFloat64(0,e,!1),new Uint8Array(t.buffer)})(e),n=!!(128&t[0]);t[0]^=n?255:128;for(let e=1;e<t.length;++e)t[e]^=n?255:0;return t}Qt(e){const t=255&e;0===t?(this.rn(0),this.rn(255)):t===ta?(this.rn(ta),this.rn(0)):this.rn(t)}jt(e){const t=255&e;0===t?(this._n(0),this._n(255)):t===ta?(this._n(ta),this._n(0)):this._n(e)}Gt(){this.rn(0),this.rn(1)}Jt(){this._n(0),this._n(1)}rn(e){this.en(1),this.buffer[this.position++]=e}_n(e){this.en(1),this.buffer[this.position++]=~e}en(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const r=new Uint8Array(n);r.set(this.buffer),this.buffer=r}}class ia{constructor(e){this.un=e}Nt(e){this.un.Wt(e)}Mt(e){this.un.Ht(e)}Ft(e){this.un.Xt(e)}Ct(){this.un.nn()}}class oa{constructor(e){this.un=e}Nt(e){this.un.zt(e)}Mt(e){this.un.Zt(e)}Ft(e){this.un.tn(e)}Ct(){this.un.sn()}}class aa{constructor(){this.un=new sa,this.ascending=new ia(this.un),this.descending=new oa(this.un)}seed(e){this.un.seed(e)}cn(e){return 0===e?this.ascending:this.descending}an(){return this.un.an()}reset(){this.un.reset()}}
/**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class ua{constructor(e,t,n,r){this.ln=e,this.hn=t,this.Pn=n,this.Tn=r}In(){const e=this.Tn.length,t=0===e||255===this.Tn[e-1]?e+1:e,n=new Uint8Array(t);return n.set(this.Tn,0),t!==e?n.set([0],this.Tn.length):++n[n.length-1],new ua(this.ln,this.hn,this.Pn,n)}En(e,t,n){return{indexId:this.ln,uid:e,arrayValue:ha(this.Pn),directionalValue:ha(this.Tn),orderedDocumentKey:ha(t),documentKey:n.path.toArray()}}Rn(e,t,n){const r=this.En(e,t,n);return[r.indexId,r.uid,r.arrayValue,r.directionalValue,r.orderedDocumentKey,r.documentKey]}}function ca(e,t){let n=e.ln-t.ln;return 0!==n?n:(n=la(e.Pn,t.Pn),0!==n?n:(n=la(e.Tn,t.Tn),0!==n?n:ee.comparator(e.hn,t.hn)))}function la(e,t){for(let n=0;n<e.length&&n<t.length;++n){const r=e[n]-t[n];if(0!==r)return r}return e.length-t.length}function ha(e){return(0,u.isSafariOrWebkit)()?(function(e){let t="";for(let n=0;n<e.length;n++)t+=String.fromCharCode(e[n]);return t})(e):e}function da(e){return"string"!=typeof e?e:(function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
    * @license
    * Copyright 2022 Google LLC
    *
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    *   http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    */)(e)}class fa{constructor(e){this.An=new wn((e,t)=>Z.comparator(e.field,t.field)),this.collectionId=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment(),this.Vn=e.orderBy,this.dn=[];for(const t of e.filters){const e=t;e.isInequality()?this.An=this.An.add(e):this.dn.push(e)}}get mn(){return this.An.size>1}fn(e){if(S(e.collectionGroup===this.collectionId,49279),this.mn)return!1;const t=ye(e);if(void 0!==t&&!this.gn(t))return!1;const n=we(e);let r=new Set,s=0,i=0;for(;s<n.length&&this.gn(n[s]);++s)r=r.add(n[s].fieldPath.canonicalString());if(s===n.length)return!0;if(this.An.size>0){const e=this.An.getIterator().getNext();if(!r.has(e.field.canonicalString())){const t=n[s];if(!this.pn(e,t)||!this.yn(this.Vn[i++],t))return!1}++s}for(;s<n.length;++s){const e=n[s];if(i>=this.Vn.length||!this.yn(this.Vn[i++],e))return!1}return!0}wn(){if(this.mn)return null;let e=new wn(Z.comparator);const t=[];for(const n of this.dn)if(!n.field.isKeyField())if("array-contains"===n.op||"array-contains-any"===n.op)t.push(new ve(n.field,2));else{if(e.has(n.field))continue;e=e.add(n.field),t.push(new ve(n.field,0))}for(const n of this.Vn)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new ve(n.field,"asc"===n.dir?0:1)));return new pe(pe.UNKNOWN_ID,this.collectionId,t,Te.empty())}gn(e){for(const t of this.dn)if(this.pn(t,e))return!0;return!1}pn(e,t){if(void 0===e||!e.field.isEqual(t.fieldPath))return!1;const n="array-contains"===e.op||"array-contains-any"===e.op;return 2===t.kind===n}yn(e,t){return!!e.field.isEqual(t.fieldPath)&&(0===t.kind&&"asc"===e.dir||1===t.kind&&"desc"===e.dir)}}
/**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function ma(e){if(S(e instanceof _r||e instanceof xr,20012),e instanceof _r){if(e instanceof jr){const t=e.value.arrayValue?.values?.map(t=>_r.create(e.field,"==",t))||[];return xr.create(t,"or")}return e}const t=e.filters.map(e=>ma(e));return xr.create(t,e.op)}function ga(e){if(0===e.getFilters().length)return[];const t=ba(ma(e));return S(wa(t),7391),pa(t)||ya(t)?[t]:t.getFilters()}function pa(e){return e instanceof _r}function ya(e){return e instanceof xr&&Nr(e)}function wa(e){return pa(e)||ya(e)||(function(e){if(e instanceof xr&&Dr(e)){for(const t of e.getFilters())if(!pa(t)&&!ya(t))return!1;return!0}return!1})(e)}function ba(e){if(S(e instanceof _r||e instanceof xr,34018),e instanceof _r)return e;if(1===e.filters.length)return ba(e.filters[0]);const t=e.filters.map(e=>ba(e));let n=xr.create(t,e.op);return n=Ta(n),wa(n)?n:(S(n instanceof xr,64498),S(Cr(n),40251),S(n.filters.length>1,57927),n.filters.reduce((e,t)=>va(e,t)))}function va(e,t){let n;return S(e instanceof _r||e instanceof xr,38388),S(t instanceof _r||t instanceof xr,25473),n=e instanceof _r?t instanceof _r?(function(e,t){return xr.create([e,t],"and")})(e,t):Ia(e,t):t instanceof _r?Ia(t,e):(function(e,t){if(S(e.filters.length>0&&t.filters.length>0,48005),Cr(e)&&Cr(t))return Pr(e,t.getFilters());const n=Dr(e)?e:t,r=Dr(e)?t:e,s=n.filters.map(e=>va(e,r));return xr.create(s,"or")})(e,t),Ta(n)}function Ia(e,t){if(Cr(t))return Pr(t,e.getFilters());{const n=t.filters.map(t=>va(e,t));return xr.create(n,"or")}}function Ta(e){if(S(e instanceof _r||e instanceof xr,11850),e instanceof _r)return e;const t=e.getFilters();if(1===t.length)return Ta(t[0]);if(Ar(e))return e;const n=t.map(e=>Ta(e)),r=[];return n.forEach(t=>{t instanceof _r?r.push(t):t instanceof xr&&(t.op===e.op?r.push(...t.filters):r.push(t))}),1===r.length?r[0]:xr.create(r,e.op)
/**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */}class Ea{constructor(){this.Sn=new Sa}addToCollectionParentIndex(e,t){return this.Sn.add(t),Ae.resolve()}getCollectionParents(e,t){return Ae.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return Ae.resolve()}deleteFieldIndex(e,t){return Ae.resolve()}deleteAllFieldIndexes(e){return Ae.resolve()}createTargetIndexes(e,t){return Ae.resolve()}getDocumentsMatchingTarget(e,t){return Ae.resolve(null)}getIndexType(e,t){return Ae.resolve(0)}getFieldIndexes(e,t){return Ae.resolve([])}getNextCollectionGroupToUpdate(e){return Ae.resolve(null)}getMinOffset(e,t){return Ae.resolve(_e.min())}getMinOffsetFromCollectionGroup(e,t){return Ae.resolve(_e.min())}updateCollectionGroup(e,t,n){return Ae.resolve()}updateIndexEntries(e,t){return Ae.resolve()}}class Sa{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new wn(Y.comparator),s=!r.has(n);return this.index[t]=r.add(n),s}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new wn(Y.comparator)).toArray()}}
/**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const _a="IndexedDbIndexManager",xa=new Uint8Array(0);class Ca{constructor(e,t){this.databaseId=t,this.bn=new Sa,this.Dn=new bs(e=>Kr(e),(e,t)=>Gr(e,t)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.bn.has(t)){const n=t.lastSegment(),r=t.popLast();e.addOnCommittedListener(()=>{this.bn.add(t)});const s={collectionId:n,parent:Ze(r)};return Da(e).put(s)}return Ae.resolve()}getCollectionParents(e,t){const n=[],r=IDBKeyRange.bound([t,""],[H(t),""],!1,!0);return Da(e).J(r).next(e=>{for(const r of e){if(r.collectionId!==t)break;n.push(nt(r.parent))}return n})}addFieldIndex(e,t){const n=Aa(e),r=(function(e){return{indexId:e.indexId,collectionGroup:e.collectionGroup,fields:e.fields.map(e=>[e.fieldPath.canonicalString(),e.kind])}})(t);delete r.indexId;const s=n.add(r);if(t.indexState){const n=ka(e);return s.next(e=>{n.put(Qo(e,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return s.next()}deleteFieldIndex(e,t){const n=Aa(e),r=ka(e),s=Na(e);return n.delete(t.indexId).next(()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=Aa(e),n=Na(e),r=ka(e);return t.X().next(()=>n.X()).next(()=>r.X())}createTargetIndexes(e,t){return Ae.forEach(this.Cn(t),t=>this.getIndexType(e,t).next(n=>{if(0===n||1===n){const n=new fa(t).wn();if(null!=n)return this.addFieldIndex(e,n)}}))}getDocumentsMatchingTarget(e,t){const n=Na(e);let r=!0;const s=new Map;return Ae.forEach(this.Cn(t),t=>this.vn(e,t).next(e=>{r&&(r=!!e),s.set(t,e)})).next(()=>{if(r){let e=As();const r=[];return Ae.forEach(s,(s,i)=>{w(_a,`Using index ${(function(e){return`id=${e.indexId}|cg=${e.collectionGroup}|f=${e.fields.map(e=>`${e.fieldPath}:${e.kind}`).join(",")}`})(s)} to execute ${Kr(t)}`);const o=(function(e,t){const n=ye(t);if(void 0===n)return null;for(const t of Hr(e,n.fieldPath))switch(t.op){case"array-contains-any":return t.value.arrayValue.values||[];case"array-contains":return[t.value]}return null})(i,s),a=(function(e,t){const n=new Map;for(const r of we(t))for(const t of Hr(e,r.fieldPath))switch(t.op){case"==":case"in":n.set(r.fieldPath.canonicalString(),t.value);break;case"not-in":case"!=":return n.set(r.fieldPath.canonicalString(),t.value),Array.from(n.values())}return null})(i,s),u=(function(e,t){const n=[];let r=!0;for(const s of we(t)){const t=0===s.kind?Wr(e,s.fieldPath,e.startAt):Jr(e,s.fieldPath,e.startAt);n.push(t.value),r&&(r=t.inclusive)}return new br(n,r)})(i,s),c=(function(e,t){const n=[];let r=!0;for(const s of we(t)){const t=0===s.kind?Jr(e,s.fieldPath,e.endAt):Wr(e,s.fieldPath,e.endAt);n.push(t.value),r&&(r=t.inclusive)}return new br(n,r)})(i,s),l=this.Fn(s,i,u),h=this.Fn(s,i,c),d=this.Mn(s,i,a),f=this.xn(s.indexId,o,l,u.inclusive,h,c.inclusive,d);return Ae.forEach(f,s=>n.Z(s,t.limit).next(t=>{t.forEach(t=>{const n=ee.fromSegments(t.documentKey);e.has(n)||(e=e.add(n),r.push(n))})}))}).next(()=>r)}return Ae.resolve(null)})}Cn(e){let t=this.Dn.get(e);return t||(t=0===e.filters.length?[e]:ga(xr.create(e.filters,"and")).map(t=>$r(e.path,e.collectionGroup,e.orderBy,t.getFilters(),e.limit,e.startAt,e.endAt)),this.Dn.set(e,t),t)}xn(e,t,n,r,s,i,o){const a=(null!=t?t.length:1)*Math.max(n.length,s.length),u=a/(null!=t?t.length:1),c=[];for(let l=0;l<a;++l){const a=t?this.On(t[l/u]):xa,h=this.Nn(e,a,n[l%u],r),d=this.Bn(e,a,s[l%u],i),f=o.map(t=>this.Nn(e,a,t,!0));c.push(...this.createRange(h,d,f))}return c}Nn(e,t,n,r){const s=new ua(e,ee.empty(),t,n);return r?s:s.In()}Bn(e,t,n,r){const s=new ua(e,ee.empty(),t,n);return r?s.In():s}vn(e,t){const n=new fa(t),r=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,r).next(e=>{let t=null;for(const r of e)n.fn(r)&&(!t||r.fields.length>t.fields.length)&&(t=r);return t})}getIndexType(e,t){let n=2;const r=this.Cn(t);return Ae.forEach(r,t=>this.vn(e,t).next(e=>{e?0!==n&&e.fields.length<(function(e){let t=new wn(Z.comparator),n=!1;for(const r of e.filters)for(const e of r.getFlattenedFilters())e.field.isKeyField()||("array-contains"===e.op||"array-contains-any"===e.op?n=!0:t=t.add(e.field));for(const n of e.orderBy)n.field.isKeyField()||(t=t.add(n.field));return t.size+(n?1:0)})(t)&&(n=1):n=0})).next(()=>(function(e){return null!==e.limit})(t)&&r.length>1&&2===n?1:n)}Ln(e,t){const n=new aa;for(const r of we(e)){const e=t.data.field(r.fieldPath);if(null==e)return null;const s=n.cn(r.kind);ea.$t.bt(e,s)}return n.an()}On(e){const t=new aa;return ea.$t.bt(e,t.cn(0)),t.an()}kn(e,t){const n=new aa;return ea.$t.bt(tr(this.databaseId,t),n.cn((function(e){const t=we(e);return 0===t.length?0:t[t.length-1].kind})(e))),n.an()}Mn(e,t,n){if(null===n)return[];let r=[];r.push(new aa);let s=0;for(const i of we(e)){const e=n[s++];for(const n of r)if(this.qn(t,i.fieldPath)&&sr(e))r=this.Kn(r,i,e);else{const t=n.cn(i.kind);ea.$t.bt(e,t)}}return this.Un(r)}Fn(e,t,n){return this.Mn(e,t,n.position)}Un(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].an();return t}Kn(e,t,n){const r=[...e],s=[];for(const e of n.arrayValue.values||[])for(const n of r){const r=new aa;r.seed(n.an()),ea.$t.bt(e,r.cn(t.kind)),s.push(r)}return s}qn(e,t){return!!e.filters.find(e=>e instanceof _r&&e.field.isEqual(t)&&("in"===e.op||"not-in"===e.op))}getFieldIndexes(e,t){const n=Aa(e),r=ka(e);return(t?n.J(Mt,IDBKeyRange.bound(t,t)):n.J()).next(e=>{const t=[];return Ae.forEach(e,e=>r.get([e.indexId,this.uid]).next(n=>{t.push((function(e,t){const n=t?new Te(t.sequenceNumber,new _e(jo(t.readTime),new ee(nt(t.documentKey)),t.largestBatchId)):Te.empty(),r=e.fields.map(([e,t])=>new ve(Z.fromServerFormat(e),t));return new pe(e.indexId,e.collectionGroup,r,n)})(e,n))})).next(()=>t)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(e=>0===e.length?null:(e.sort((e,t)=>{const n=e.indexState.sequenceNumber-t.indexState.sequenceNumber;return 0!==n?n:q(e.collectionGroup,t.collectionGroup)}),e[0].collectionGroup))}updateCollectionGroup(e,t,n){const r=Aa(e),s=ka(e);return this.$n(e).next(e=>r.J(Mt,IDBKeyRange.bound(t,t)).next(t=>Ae.forEach(t,t=>s.put(Qo(t.indexId,this.uid,e,n)))))}updateIndexEntries(e,t){const n=new Map;return Ae.forEach(t,(t,r)=>{const s=n.get(t.collectionGroup);return(s?Ae.resolve(s):this.getFieldIndexes(e,t.collectionGroup)).next(s=>(n.set(t.collectionGroup,s),Ae.forEach(s,n=>this.Wn(e,t,n).next(t=>{const s=this.Qn(r,n);return t.isEqual(s)?Ae.resolve():this.Gn(e,r,n,t,s)}))))})}zn(e,t,n,r){return Na(e).put(r.En(this.uid,this.kn(n,t.key),t.key))}jn(e,t,n,r){return Na(e).delete(r.Rn(this.uid,this.kn(n,t.key),t.key))}Wn(e,t,n){const r=Na(e);let s=new wn(ca);return r.ee({index:Kt,range:IDBKeyRange.only([n.indexId,this.uid,ha(this.kn(n,t))])},(e,r)=>{s=s.add(new ua(n.indexId,t,da(r.arrayValue),da(r.directionalValue)))}).next(()=>s)}Qn(e,t){let n=new wn(ca);const r=this.Ln(t,e);if(null==r)return n;const s=ye(t);if(null!=s){const i=e.data.field(s.fieldPath);if(sr(i))for(const s of i.arrayValue.values||[])n=n.add(new ua(t.indexId,e.key,this.On(s),r))}else n=n.add(new ua(t.indexId,e.key,xa,r));return n}Gn(e,t,n,r,s){w(_a,"Updating index entries for document '%s'",t.key);const i=[];return(function(e,t,n,r,s){const i=e.getIterator(),o=t.getIterator();let a=vn(i),u=vn(o);for(;a||u;){let e=!1,t=!1;if(a&&u){const r=n(a,u);r<0?t=!0:r>0&&(e=!0)}else null!=a?t=!0:e=!0;e?(r(u),u=vn(o)):t?(s(a),a=vn(i)):(a=vn(i),u=vn(o))}})(r,s,ca,r=>{i.push(this.zn(e,t,n,r))},r=>{i.push(this.jn(e,t,n,r))}),Ae.waitFor(i)}$n(e){let t=1;return ka(e).ee({index:qt,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(e,n,r)=>{r.done(),t=n.sequenceNumber+1}).next(()=>t)}createRange(e,t,n){n=n.sort((e,t)=>ca(e,t)).filter((e,t,n)=>!t||0!==ca(e,n[t-1]));const r=[];r.push(e);for(const s of n){const n=ca(s,e),i=ca(s,t);if(0===n)r[0]=e.In();else if(n>0&&i<0)r.push(s),r.push(s.In());else if(i>0)break}r.push(t);const s=[];for(let e=0;e<r.length;e+=2){if(this.Jn(r[e],r[e+1]))return[];const t=r[e].Rn(this.uid,xa,ee.empty()),n=r[e+1].Rn(this.uid,xa,ee.empty());s.push(IDBKeyRange.bound(t,n))}return s}Jn(e,t){return ca(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Oa)}getMinOffset(e,t){return Ae.mapArray(this.Cn(t),t=>this.vn(e,t).next(e=>e||T(44426))).next(Oa)}}function Da(e){return ln(e,Ot)}function Na(e){return ln(e,zt)}function Aa(e){return ln(e,Lt)}function ka(e){return ln(e,Ut)}function Oa(e){S(0!==e.length,28825);let t=e[0].indexState.offset,n=t.largestBatchId;for(let r=1;r<e.length;r++){const s=e[r].indexState.offset;xe(s,t)<0&&(t=s),n<s.largestBatchId&&(n=s.largestBatchId)}return new _e(t.readTime,t.documentKey,n)}
/**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const Pa={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Va=41943040;class Ra{static withCacheSize(e){return new Ra(e,Ra.DEFAULT_COLLECTION_PERCENTILE,Ra.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function Fa(e,t,n){const r=e.store(at),s=e.store(mt),i=[],o=IDBKeyRange.only(n.batchId);let a=0;const u=r.ee({range:o},(e,t,n)=>(a++,n.delete()));i.push(u.next(()=>{S(1===a,47070,{batchId:n.batchId})}));const c=[];for(const e of n.mutations){const r=dt(t,e.key.path,n.batchId);i.push(s.delete(r)),c.push(e.key)}return Ae.waitFor(i).next(()=>c)}function La(e){if(!e)return 0;let t;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw T(14731);t=e.noDocument}return JSON.stringify(t).length}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */Ra.DEFAULT_COLLECTION_PERCENTILE=10,Ra.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ra.DEFAULT=new Ra(Va,Ra.DEFAULT_COLLECTION_PERCENTILE,Ra.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ra.DISABLED=new Ra(-1,0,0);class Ma{constructor(e,t,n,r){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=r,this.Hn={}}static yt(e,t,n,r){S(""!==e.uid,64387);const s=e.isAuthenticated()?e.uid:"";return new Ma(s,t,n,r)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return ja(e).ee({index:ct,range:n},(e,n,r)=>{t=!1,r.done()}).next(()=>t)}addMutationBatch(e,t,n,r){const s=qa(e),i=ja(e);return i.add({}).next(o=>{S("number"==typeof o,49019);const a=new pi(o,t,n,r),u=(function(e,t,n){const r=n.baseMutations.map(t=>fo(e.gt,t)),s=n.mutations.map(t=>fo(e.gt,t));return{userId:t,batchId:n.batchId,localWriteTimeMs:n.localWriteTime.toMillis(),baseMutations:r,mutations:s}})(this.serializer,this.userId,a),c=[];let l=new wn((e,t)=>q(e.canonicalString(),t.canonicalString()));for(const e of r){const t=dt(this.userId,e.key.path,o);l=l.add(e.key.path.popLast()),c.push(i.put(u)),c.push(s.put(t,ft))}return l.forEach(t=>{c.push(this.indexManager.addToCollectionParentIndex(e,t))}),e.addOnCommittedListener(()=>{this.Hn[o]=a.keys()}),Ae.waitFor(c).next(()=>a)})}lookupMutationBatch(e,t){return ja(e).get(t).next(e=>e?(S(e.userId===this.userId,48,"Unexpected user for mutation batch",{userId:e.userId,batchId:t}),qo(this.serializer,e)):null)}Zn(e,t){return this.Hn[t]?Ae.resolve(this.Hn[t]):this.lookupMutationBatch(e,t).next(e=>{if(e){const n=e.keys();return this.Hn[t]=n,n}return null})}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=IDBKeyRange.lowerBound([this.userId,n]);let s=null;return ja(e).ee({index:ct,range:r},(e,t,r)=>{t.userId===this.userId&&(S(t.batchId>=n,47524,{Xn:n}),s=qo(this.serializer,t)),r.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=Ge;return ja(e).ee({index:ct,range:t,reverse:!0},(e,t,r)=>{n=t.batchId,r.done()}).next(()=>n)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,Ge],[this.userId,Number.POSITIVE_INFINITY]);return ja(e).J(ct,t).next(e=>e.map(e=>qo(this.serializer,e)))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=ht(this.userId,t.path),r=IDBKeyRange.lowerBound(n),s=[];return qa(e).ee({range:r},(n,r,i)=>{const[o,a,u]=n,c=nt(a);if(o===this.userId&&t.path.isEqual(c))return ja(e).get(u).next(e=>{if(!e)throw T(61480,{Yn:n,batchId:u});S(e.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:e.userId,batchId:u}),s.push(qo(this.serializer,e))});i.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new wn(q);const r=[];return t.forEach(t=>{const s=ht(this.userId,t.path),i=IDBKeyRange.lowerBound(s),o=qa(e).ee({range:i},(e,r,s)=>{const[i,o,a]=e,u=nt(o);i===this.userId&&t.path.isEqual(u)?n=n.add(a):s.done()});r.push(o)}),Ae.waitFor(r).next(()=>this.er(e,n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1,s=ht(this.userId,n),i=IDBKeyRange.lowerBound(s);let o=new wn(q);return qa(e).ee({range:i},(e,t,s)=>{const[i,a,u]=e,c=nt(a);i===this.userId&&n.isPrefixOf(c)?c.length===r&&(o=o.add(u)):s.done()}).next(()=>this.er(e,o))}er(e,t){const n=[],r=[];return t.forEach(t=>{r.push(ja(e).get(t).next(e=>{if(null===e)throw T(35274,{batchId:t});S(e.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:e.userId,batchId:t}),n.push(qo(this.serializer,e))}))}),Ae.waitFor(r).next(()=>n)}removeMutationBatch(e,t){return Fa(e.le,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.tr(t.batchId)}),Ae.forEach(n,t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))}tr(e){delete this.Hn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return Ae.resolve();const n=IDBKeyRange.lowerBound((function(e){return[e]})(this.userId)),r=[];return qa(e).ee({range:n},(e,t,n)=>{if(e[0]===this.userId){const t=nt(e[1]);r.push(t)}else n.done()}).next(()=>{S(0===r.length,56720,{nr:r.map(e=>e.canonicalString())})})})}containsKey(e,t){return Ua(e,this.userId,t)}rr(e){return Ba(e).get(this.userId).next(e=>e||{userId:this.userId,lastAcknowledgedBatchId:Ge,lastStreamToken:""})}}function Ua(e,t,n){const r=ht(t,n.path),s=r[1],i=IDBKeyRange.lowerBound(r);let o=!1;return qa(e).ee({range:i,Y:!0},(e,n,r)=>{const[i,a,u]=e;i===t&&a===s&&(o=!0),r.done()}).next(()=>o)}function ja(e){return ln(e,at)}function qa(e){return ln(e,mt)}function Ba(e){return ln(e,ot)}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class za{constructor(e){this.ir=e}next(){return this.ir+=2,this.ir}static sr(){return new za(0)}static _r(){return new za(-1)}}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class $a{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.ar(e).next(t=>{const n=new za(t.highestTargetId);return t.highestTargetId=n.next(),this.ur(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.ar(e).next(e=>me.fromTimestamp(new fe(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.ar(e).next(e=>e.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.ar(e).next(r=>(r.highestListenSequenceNumber=t,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.ur(e,r)))}addTargetData(e,t){return this.cr(e,t).next(()=>this.ar(e).next(n=>(n.targetCount+=1,this.lr(t,n),this.ur(e,n))))}updateTargetData(e,t){return this.cr(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Ka(e).delete(t.targetId)).next(()=>this.ar(e)).next(t=>(S(t.targetCount>0,8065),t.targetCount-=1,this.ur(e,t)))}removeTargets(e,t,n){let r=0;const s=[];return Ka(e).ee((i,o)=>{const a=Bo(o);a.sequenceNumber<=t&&null===n.get(a.targetId)&&(r++,s.push(this.removeTargetData(e,a)))}).next(()=>Ae.waitFor(s)).next(()=>r)}forEachTarget(e,t){return Ka(e).ee((e,n)=>{const r=Bo(n);t(r)})}ar(e){return Ga(e).get(At).next(e=>(S(null!==e,2888),e))}ur(e,t){return Ga(e).put(At,t)}cr(e,t){return Ka(e).put(zo(this.serializer,t))}lr(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.ar(e).next(e=>e.targetCount)}getTargetData(e,t){const n=Kr(t),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let s=null;return Ka(e).ee({range:r,index:St},(e,n,r)=>{const i=Bo(n);Gr(t,i.target)&&(s=i,r.done())}).next(()=>s)}addMatchingKeys(e,t,n){const r=[],s=Qa(e);return t.forEach(t=>{const i=Ze(t.path);r.push(s.put({targetId:n,path:i})),r.push(this.referenceDelegate.addReference(e,n,t))}),Ae.waitFor(r)}removeMatchingKeys(e,t,n){const r=Qa(e);return Ae.forEach(t,t=>{const s=Ze(t.path);return Ae.waitFor([r.delete([n,s]),this.referenceDelegate.removeReference(e,n,t)])})}removeMatchingKeysForTargetId(e,t){const n=Qa(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),r=Qa(e);let s=As();return r.ee({range:n,Y:!0},(e,t,n)=>{const r=nt(e[1]),i=new ee(r);s=s.add(i)}).next(()=>s)}containsKey(e,t){const n=Ze(t.path),r=IDBKeyRange.bound([n],[H(n)],!1,!0);let s=0;return Qa(e).ee({index:Dt,Y:!0,range:r},([e,t],n,r)=>{0!==e&&(s++,r.done())}).next(()=>s>0)}Rt(e,t){return Ka(e).get(t).next(e=>e?Bo(e):null)}}function Ka(e){return ln(e,Et)}function Ga(e){return ln(e,kt)}function Qa(e){return ln(e,xt)}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const Ha="LruGarbageCollector",Wa=1048576;function Ja([e,t],[n,r]){const s=q(e,n);return 0===s?q(t,r):s}class Ya{constructor(e){this.hr=e,this.buffer=new wn(Ja),this.Pr=0}Tr(){return++this.Pr}Ir(e){const t=[e,this.Tr()];if(this.buffer.size<this.hr)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();Ja(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Xa{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Er=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Rr(6e4)}stop(){this.Er&&(this.Er.cancel(),this.Er=null)}get started(){return null!==this.Er}Rr(e){w(Ha,`Garbage collection scheduled in ${e}ms`),this.Er=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Er=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Le(e)?w(Ha,"Ignoring IndexedDB error during garbage collection: ",e):await Ne(e)}await this.Rr(3e5)})}}class Za{constructor(e,t){this.Ar=e,this.params=t}calculateTargetCount(e,t){return this.Ar.Vr(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return Ae.resolve(Ke.ce);const n=new Ya(t);return this.Ar.forEachTarget(e,e=>n.Ir(e.sequenceNumber)).next(()=>this.Ar.dr(e,e=>n.Ir(e))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.Ar.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Ar.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(w("LruGarbageCollector","Garbage collection skipped; disabled"),Ae.resolve(Pa)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(w("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Pa):this.mr(e,t))}getCacheSize(e){return this.Ar.getCacheSize(e)}mr(e,t){let n,r,s,i,o,a,u;const c=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(w("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,i=Date.now(),this.nthSequenceNumber(e,r))).next(r=>(n=r,o=Date.now(),this.removeTargets(e,n,t))).next(t=>(s=t,a=Date.now(),this.removeOrphanedDocuments(e,n))).next(e=>(u=Date.now(),p()<=l.LogLevel.DEBUG&&w("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${i-c}ms\n\tDetermined least recently used ${r} in `+(o-i)+"ms\n"+`\tRemoved ${s} targets in `+(a-o)+"ms\n"+`\tRemoved ${e} documents in `+(u-a)+"ms\n"+`Total Duration: ${u-c}ms`),Ae.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:s,documentsRemoved:e})))}}function eu(e,t){return new Za(e,t)}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class tu{constructor(e,t){this.db=e,this.garbageCollector=eu(this,t)}Vr(e){const t=this.gr(e);return this.db.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}gr(e){let t=0;return this.dr(e,e=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}dr(e,t){return this.pr(e,(e,n)=>t(n))}addReference(e,t,n){return nu(e,n)}removeReference(e,t,n){return nu(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return nu(e,t)}yr(e,t){return(function(e,t){let n=!1;return Ba(e).te(r=>Ua(e,r,t).next(e=>(e&&(n=!0),Ae.resolve(!e)))).next(()=>n)})(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let s=0;return this.pr(e,(i,o)=>{if(o<=t){const t=this.yr(e,i).next(t=>{if(!t)return s++,n.getEntry(e,i).next(()=>(n.removeEntry(i,me.min()),Qa(e).delete((function(e){return[0,Ze(e.path)]})(i))))});r.push(t)}}).next(()=>Ae.waitFor(r)).next(()=>n.apply(e)).next(()=>s)}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return nu(e,t)}pr(e,t){const n=Qa(e);let r,s=Ke.ce;return n.ee({index:Dt},([e,n],{path:i,sequenceNumber:o})=>{0===e?(s!==Ke.ce&&t(new ee(nt(r)),s),s=o,r=i):s=Ke.ce}).next(()=>{s!==Ke.ce&&t(new ee(nt(r)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function nu(e,t){return Qa(e).put((function(e,t){return{targetId:0,path:Ze(e.path),sequenceNumber:t}})(t,e.currentSequenceNumber))}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class ru{constructor(){this.changes=new bs(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,wr.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Ae.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class su{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return uu(e).put(n)}removeEntry(e,t,n){return uu(e).delete((function(e,t){const n=e.path.toArray();return[n.slice(0,n.length-2),n[n.length-2],Mo(t),n[n.length-1]]})(t,n))}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.wr(e,n)))}getEntry(e,t){let n=wr.newInvalidDocument(t);return uu(e).ee({index:yt,range:IDBKeyRange.only(cu(t))},(e,r)=>{n=this.Sr(t,r)}).next(()=>n)}br(e,t){let n={size:0,document:wr.newInvalidDocument(t)};return uu(e).ee({index:yt,range:IDBKeyRange.only(cu(t))},(e,r)=>{n={document:this.Sr(t,r),size:La(r)}}).next(()=>n)}getEntries(e,t){let n=Is();return this.Dr(e,t,(e,t)=>{const r=this.Sr(e,t);n=n.insert(e,r)}).next(()=>n)}Cr(e,t){let n=Is(),r=new gn(ee.comparator);return this.Dr(e,t,(e,t)=>{const s=this.Sr(e,t);n=n.insert(e,s),r=r.insert(e,La(t))}).next(()=>({documents:n,vr:r}))}Dr(e,t,n){if(t.isEmpty())return Ae.resolve();let r=new wn(hu);t.forEach(e=>r=r.add(e));const s=IDBKeyRange.bound(cu(r.first()),cu(r.last())),i=r.getIterator();let o=i.getNext();return uu(e).ee({index:yt,range:s},(e,t,r)=>{const s=ee.fromSegments([...t.prefixPath,t.collectionGroup,t.documentId]);for(;o&&hu(o,s)<0;)n(o,null),o=i.getNext();o&&o.isEqual(s)&&(n(o,t),o=i.hasNext()?i.getNext():null),o?r.j(cu(o)):r.done()}).next(()=>{for(;o;)n(o,null),o=i.hasNext()?i.getNext():null})}getDocumentsMatchingQuery(e,t,n,r,s){const i=t.path,o=[i.popLast().toArray(),i.lastSegment(),Mo(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],a=[i.popLast().toArray(),i.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return uu(e).J(IDBKeyRange.bound(o,a,!0)).next(e=>{s?.incrementDocumentReadCount(e.length);let n=Is();for(const s of e){const e=this.Sr(ee.fromSegments(s.prefixPath.concat(s.collectionGroup,s.documentId)),s);e.isFoundDocument()&&(gs(t,e)||r.has(e.key))&&(n=n.insert(e.key,e))}return n})}getAllFromCollectionGroup(e,t,n,r){let s=Is();const i=lu(t,n),o=lu(t,_e.max());return uu(e).ee({index:bt,range:IDBKeyRange.bound(i,o,!0)},(e,t,n)=>{const i=this.Sr(ee.fromSegments(t.prefixPath.concat(t.collectionGroup,t.documentId)),t);s=s.insert(i.key,i),s.size===r&&n.done()}).next(()=>s)}newChangeBuffer(e){return new ou(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(e=>e.byteSize)}getMetadata(e){return au(e).get(Tt).next(e=>(S(!!e,20021),e))}wr(e,t){return au(e).put(Tt,t)}Sr(e,t){if(t){const e=Fo(this.serializer,t);if(!e.isNoDocument()||!e.version.isEqual(me.min()))return e}return wr.newInvalidDocument(e)}}function iu(e){return new su(e)}class ou extends ru{constructor(e,t){super(),this.Fr=e,this.trackRemovals=t,this.Mr=new bs(e=>e.toString(),(e,t)=>e.isEqual(t))}applyChanges(e){const t=[];let n=0,r=new wn((e,t)=>q(e.canonicalString(),t.canonicalString()));return this.changes.forEach((s,i)=>{const o=this.Mr.get(s);if(t.push(this.Fr.removeEntry(e,s,o.readTime)),i.isValidDocument()){const a=Lo(this.Fr.serializer,i);r=r.add(s.path.popLast());const u=La(a);n+=u-o.size,t.push(this.Fr.addEntry(e,s,a))}else if(n-=o.size,this.trackRemovals){const n=Lo(this.Fr.serializer,i.convertToNoDocument(me.min()));t.push(this.Fr.addEntry(e,s,n))}}),r.forEach(n=>{t.push(this.Fr.indexManager.addToCollectionParentIndex(e,n))}),t.push(this.Fr.updateMetadata(e,n)),Ae.waitFor(t)}getFromCache(e,t){return this.Fr.br(e,t).next(e=>(this.Mr.set(t,{size:e.size,readTime:e.document.readTime}),e.document))}getAllFromCache(e,t){return this.Fr.Cr(e,t).next(({documents:e,vr:t})=>(t.forEach((t,n)=>{this.Mr.set(t,{size:n,readTime:e.get(t).readTime})}),e))}}function au(e){return ln(e,It)}function uu(e){return ln(e,gt)}function cu(e){const t=e.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function lu(e,t){const n=t.documentKey.path.toArray();return[e,Mo(t.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function hu(e,t){const n=e.path.toArray(),r=t.path.toArray();let s=0;for(let e=0;e<n.length-2&&e<r.length-2;++e)if(s=q(n[e],r[e]),s)return s;return s=q(n.length,r.length),s||(s=q(n[n.length-2],r[r.length-2]),s||q(n[n.length-1],r[r.length-1])
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
/**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */)}class du{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class fu{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&oi(n.mutation,e,In.empty(),fe.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,As()).next(()=>t))}getLocalViewOfDocuments(e,t,n=As()){const r=_s();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(e=>{let t=Es();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){const n=_s();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,As()))}populateOverlays(e,t,n){const r=[];return n.forEach(e=>{t.has(e)||r.push(e)}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,r){let s=Is();const i=Cs(),o=Cs();return t.forEach((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof li)?s=s.insert(t.key,t):void 0!==o?(i.set(t.key,o.mutation.getFieldMask()),oi(o.mutation,t,o.mutation.getFieldMask(),fe.now())):i.set(t.key,In.empty())}),this.recalculateAndSaveOverlays(e,s).next(e=>(e.forEach((e,t)=>i.set(e,t)),t.forEach((e,t)=>o.set(e,new du(t,i.get(e)??null))),o))}recalculateAndSaveOverlays(e,t){const n=Cs();let r=new gn((e,t)=>e-t),s=As();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(const s of e)s.keys().forEach(e=>{const i=t.get(e);if(null===i)return;let o=n.get(e)||In.empty();o=s.applyToLocalView(i,o),n.set(e,o);const a=(r.get(s.batchId)||As()).add(e);r=r.insert(s.batchId,a)})}).next(()=>{const i=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,u=r.value,c=xs();u.forEach(e=>{if(!s.has(e)){const r=si(t.get(e),n.get(e));null!==r&&c.set(e,r),s=s.add(e)}}),i.push(this.documentOverlayCache.saveOverlays(e,a,c))}return Ae.waitFor(i)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n,r){return ts(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):ns(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(s=>{const i=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-s.size):Ae.resolve(_s());let o=ge,a=s;return i.next(t=>Ae.forEach(t,(t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),s.get(t)?Ae.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{a=a.insert(t,e)}))).next(()=>this.populateOverlays(e,t,s)).next(()=>this.computeViews(e,a,t,As())).next(e=>({batchId:o,changes:Ss(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ee(t)).next(e=>{let t=Es();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){const s=t.collectionGroup;let i=Es();return this.indexManager.getCollectionParents(e,s).next(o=>Ae.forEach(o,o=>{const a=(function(e,t){return new Yr(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)})(t,o.child(s));return this.getDocumentsMatchingCollectionQuery(e,a,n,r).next(e=>{e.forEach((e,t)=>{i=i.insert(e,t)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,t,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,s,r))).next(e=>{s.forEach((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,wr.newInvalidDocument(r)))});let n=Es();return e.forEach((e,r)=>{const i=s.get(e);void 0!==i&&oi(i.mutation,r,In.empty(),fe.now()),gs(t,r)&&(n=n.insert(e,r))}),n})}}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class mu{constructor(e){this.serializer=e,this.Or=new Map,this.Nr=new Map}getBundleMetadata(e,t){return Ae.resolve(this.Or.get(t))}saveBundleMetadata(e,t){return this.Or.set(t.id,(function(e){return{id:e.id,version:e.version,createTime:Yi(e.createTime)}})(t)),Ae.resolve()}getNamedQuery(e,t){return Ae.resolve(this.Nr.get(t))}saveNamedQuery(e,t){return this.Nr.set(t.name,(function(e){return{name:e.name,query:$o(e.bundledQuery),readTime:Yi(e.readTime)}})(t)),Ae.resolve()}}
/**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class gu{constructor(){this.overlays=new gn(ee.comparator),this.Br=new Map}getOverlay(e,t){return Ae.resolve(this.overlays.get(t))}getOverlays(e,t){const n=_s();return Ae.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.wt(e,t,r)}),Ae.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.Br.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.Br.delete(n)),Ae.resolve()}getOverlaysForCollection(e,t,n){const r=_s(),s=t.length+1,i=new ee(t.child("")),o=this.overlays.getIteratorFrom(i);for(;o.hasNext();){const e=o.getNext().value,i=e.getKey();if(!t.isPrefixOf(i.path))break;i.path.length===s&&e.largestBatchId>n&&r.set(e.getKey(),e)}return Ae.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let s=new gn((e,t)=>e-t);const i=this.overlays.getIterator();for(;i.hasNext();){const e=i.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=s.get(e.largestBatchId);null===t&&(t=_s(),s=s.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=_s(),a=s.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach((e,t)=>o.set(e,t)),!(o.size()>=r)););return Ae.resolve(o)}wt(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.Br.get(r.largestBatchId).delete(n.key);this.Br.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new wi(t,n));let s=this.Br.get(t);void 0===s&&(s=As(),this.Br.set(t,s)),this.Br.set(t,s.add(n.key))}}
/**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class pu{constructor(){this.sessionToken=Sn.EMPTY_BYTE_STRING}getSessionToken(e){return Ae.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Ae.resolve()}}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class yu{constructor(){this.Lr=new wn(wu.kr),this.qr=new wn(wu.Kr)}isEmpty(){return this.Lr.isEmpty()}addReference(e,t){const n=new wu(e,t);this.Lr=this.Lr.add(n),this.qr=this.qr.add(n)}Ur(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.$r(new wu(e,t))}Wr(e,t){e.forEach(e=>this.removeReference(e,t))}Qr(e){const t=new ee(new Y([])),n=new wu(t,e),r=new wu(t,e+1),s=[];return this.qr.forEachInRange([n,r],e=>{this.$r(e),s.push(e.key)}),s}Gr(){this.Lr.forEach(e=>this.$r(e))}$r(e){this.Lr=this.Lr.delete(e),this.qr=this.qr.delete(e)}zr(e){const t=new ee(new Y([])),n=new wu(t,e),r=new wu(t,e+1);let s=As();return this.qr.forEachInRange([n,r],e=>{s=s.add(e.key)}),s}containsKey(e){const t=new wu(e,0),n=this.Lr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class wu{constructor(e,t){this.key=e,this.jr=t}static kr(e,t){return ee.comparator(e.key,t.key)||q(e.jr,t.jr)}static Kr(e,t){return q(e.jr,t.jr)||ee.comparator(e.key,t.key)}}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class bu{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Xn=1,this.Jr=new wn(wu.kr)}checkEmpty(e){return Ae.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const s=this.Xn;this.Xn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new pi(s,t,n,r);this.mutationQueue.push(i);for(const t of r)this.Jr=this.Jr.add(new wu(t.key,s)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return Ae.resolve(i)}lookupMutationBatch(e,t){return Ae.resolve(this.Hr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.Zr(n),s=r<0?0:r;return Ae.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return Ae.resolve(0===this.mutationQueue.length?Ge:this.Xn-1)}getAllMutationBatches(e){return Ae.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new wu(t,0),r=new wu(t,Number.POSITIVE_INFINITY),s=[];return this.Jr.forEachInRange([n,r],e=>{const t=this.Hr(e.jr);s.push(t)}),Ae.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new wn(q);return t.forEach(e=>{const t=new wu(e,0),r=new wu(e,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([t,r],e=>{n=n.add(e.jr)})}),Ae.resolve(this.Xr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let s=n;ee.isDocumentKey(s)||(s=s.child(""));const i=new wu(new ee(s),0);let o=new wn(q);return this.Jr.forEachWhile(e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.jr)),!0)},i),Ae.resolve(this.Xr(o))}Xr(e){const t=[];return e.forEach(e=>{const n=this.Hr(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){S(0===this.Yr(t.batchId,"removed"),55003),this.mutationQueue.shift();let n=this.Jr;return Ae.forEach(t.mutations,r=>{const s=new wu(r.key,t.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Jr=n})}tr(e){}containsKey(e,t){const n=new wu(t,0),r=this.Jr.firstAfterOrEqual(n);return Ae.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,Ae.resolve()}Yr(e,t){return this.Zr(e)}Zr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Hr(e){const t=this.Zr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class vu{constructor(e){this.ei=e,this.docs=new gn(ee.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),s=r?r.size:0,i=this.ei(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:i}),this.size+=i-s,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Ae.resolve(n?n.document.mutableCopy():wr.newInvalidDocument(t))}getEntries(e,t){let n=Is();return t.forEach(e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():wr.newInvalidDocument(e))}),Ae.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let s=Is();const i=t.path,o=new ee(i.child("__id-9223372036854775808__")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!i.isPrefixOf(e.path))break;e.path.length>i.length+1||xe(Se(o),n)<=0||(r.has(o.key)||gs(t,o))&&(s=s.insert(o.key,o.mutableCopy()))}return Ae.resolve(s)}getAllFromCollectionGroup(e,t,n,r){T(9500)}ti(e,t){return Ae.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new Iu(this)}getSize(e){return Ae.resolve(this.size)}}class Iu extends ru{constructor(e){super(),this.Fr=e}applyChanges(e){const t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.Fr.addEntry(e,r)):this.Fr.removeEntry(n)}),Ae.waitFor(t)}getFromCache(e,t){return this.Fr.getEntry(e,t)}getAllFromCache(e,t){return this.Fr.getEntries(e,t)}}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class Tu{constructor(e){this.persistence=e,this.ni=new bs(e=>Kr(e),Gr),this.lastRemoteSnapshotVersion=me.min(),this.highestTargetId=0,this.ri=0,this.ii=new yu,this.targetCount=0,this.si=za.sr()}forEachTarget(e,t){return this.ni.forEach((e,n)=>t(n)),Ae.resolve()}getLastRemoteSnapshotVersion(e){return Ae.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Ae.resolve(this.ri)}allocateTargetId(e){return this.highestTargetId=this.si.next(),Ae.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.ri&&(this.ri=t),Ae.resolve()}cr(e){this.ni.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.si=new za(t),this.highestTargetId=t),e.sequenceNumber>this.ri&&(this.ri=e.sequenceNumber)}addTargetData(e,t){return this.cr(t),this.targetCount+=1,Ae.resolve()}updateTargetData(e,t){return this.cr(t),Ae.resolve()}removeTargetData(e,t){return this.ni.delete(t.target),this.ii.Qr(t.targetId),this.targetCount-=1,Ae.resolve()}removeTargets(e,t,n){let r=0;const s=[];return this.ni.forEach((i,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.ni.delete(i),s.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)}),Ae.waitFor(s).next(()=>r)}getTargetCount(e){return Ae.resolve(this.targetCount)}getTargetData(e,t){const n=this.ni.get(t)||null;return Ae.resolve(n)}addMatchingKeys(e,t,n){return this.ii.Ur(t,n),Ae.resolve()}removeMatchingKeys(e,t,n){this.ii.Wr(t,n);const r=this.persistence.referenceDelegate,s=[];return r&&t.forEach(t=>{s.push(r.markPotentiallyOrphaned(e,t))}),Ae.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.ii.Qr(t),Ae.resolve()}getMatchingKeysForTargetId(e,t){const n=this.ii.zr(t);return Ae.resolve(n)}containsKey(e,t){return Ae.resolve(this.ii.containsKey(t))}}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class Eu{constructor(e,t){this.oi={},this.overlays={},this._i=new Ke(0),this.ai=!1,this.ai=!0,this.ui=new pu,this.referenceDelegate=e(this),this.ci=new Tu(this),this.indexManager=new Ea,this.remoteDocumentCache=(function(e){return new vu(e)})(e=>this.referenceDelegate.li(e)),this.serializer=new Ro(t),this.hi=new mu(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ai=!1,Promise.resolve()}get started(){return this.ai}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new gu,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.oi[e.toKey()];return n||(n=new bu(t,this.referenceDelegate),this.oi[e.toKey()]=n),n}getGlobalsCache(){return this.ui}getTargetCache(){return this.ci}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.hi}runTransaction(e,t,n){w("MemoryPersistence","Starting transaction:",e);const r=new Su(this._i.next());return this.referenceDelegate.Pi(),n(r).next(e=>this.referenceDelegate.Ti(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}Ii(e,t){return Ae.or(Object.values(this.oi).map(n=>()=>n.containsKey(e,t)))}}class Su extends De{constructor(e){super(),this.currentSequenceNumber=e}}class _u{constructor(e){this.persistence=e,this.Ei=new yu,this.Ri=null}static Ai(e){return new _u(e)}get Vi(){if(this.Ri)return this.Ri;throw T(60996)}addReference(e,t,n){return this.Ei.addReference(n,t),this.Vi.delete(n.toString()),Ae.resolve()}removeReference(e,t,n){return this.Ei.removeReference(n,t),this.Vi.add(n.toString()),Ae.resolve()}markPotentiallyOrphaned(e,t){return this.Vi.add(t.toString()),Ae.resolve()}removeTarget(e,t){this.Ei.Qr(t.targetId).forEach(e=>this.Vi.add(e.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Vi.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}Pi(){this.Ri=new Set}Ti(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Ae.forEach(this.Vi,n=>{const r=ee.fromPath(n);return this.di(e,r).next(e=>{e||t.removeEntry(r,me.min())})}).next(()=>(this.Ri=null,t.apply(e)))}updateLimboDocument(e,t){return this.di(e,t).next(e=>{e?this.Vi.delete(t.toString()):this.Vi.add(t.toString())})}li(e){return 0}di(e,t){return Ae.or([()=>Ae.resolve(this.Ei.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ii(e,t)])}}class xu{constructor(e,t){this.persistence=e,this.mi=new bs(e=>Ze(e.path),(e,t)=>e.isEqual(t)),this.garbageCollector=eu(this,t)}static Ai(e,t){return new xu(e,t)}Pi(){}Ti(e){return Ae.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Vr(e){const t=this.gr(e);return this.persistence.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}gr(e){let t=0;return this.dr(e,e=>{t++}).next(()=>t)}dr(e,t){return Ae.forEach(this.mi,(n,r)=>this.yr(e,n,r).next(e=>e?Ae.resolve():t(r)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const r=this.persistence.getRemoteDocumentCache(),s=r.newChangeBuffer();return r.ti(e,r=>this.yr(e,r,t).next(e=>{e||(n++,s.removeEntry(r,me.min()))})).next(()=>s.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.mi.set(t,e.currentSequenceNumber),Ae.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.mi.set(n,e.currentSequenceNumber),Ae.resolve()}removeReference(e,t,n){return this.mi.set(n,e.currentSequenceNumber),Ae.resolve()}updateLimboDocument(e,t){return this.mi.set(t,e.currentSequenceNumber),Ae.resolve()}li(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=er(e.data.value)),t}yr(e,t,n){return Ae.or([()=>this.persistence.Ii(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const e=this.mi.get(t);return Ae.resolve(void 0!==e&&e>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class Cu{constructor(e){this.serializer=e}k(e,t,n,r){const s=new Oe("createOrUpgrade",t);n<1&&r>=1&&((function(e){e.createObjectStore(st)})(e),(function(e){e.createObjectStore(ot,{keyPath:"userId"});e.createObjectStore(at,{keyPath:ut,autoIncrement:!0}).createIndex(ct,lt,{unique:!0}),e.createObjectStore(mt)})(e),Du(e),(function(e){e.createObjectStore(rt)})(e));let i=Ae.resolve();return n<3&&r>=3&&(0!==n&&((function(e){e.deleteObjectStore(xt),e.deleteObjectStore(Et),e.deleteObjectStore(kt)})(e),Du(e)),i=i.next(()=>(function(e){const t=e.store(kt),n={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:me.min().toTimestamp(),targetCount:0};return t.put(At,n)})(s))),n<4&&r>=4&&(0!==n&&(i=i.next(()=>(function(e,t){return t.store(at).J().next(n=>{e.deleteObjectStore(at),e.createObjectStore(at,{keyPath:ut,autoIncrement:!0}).createIndex(ct,lt,{unique:!0});const r=t.store(at),s=n.map(e=>r.put(e));return Ae.waitFor(s)})})(e,s))),i=i.next(()=>{!(function(e){e.createObjectStore(Vt,{keyPath:"clientId"})})(e)})),n<5&&r>=5&&(i=i.next(()=>this.fi(s))),n<6&&r>=6&&(i=i.next(()=>((function(e){e.createObjectStore(It)})(e),this.gi(s)))),n<7&&r>=7&&(i=i.next(()=>this.pi(s))),n<8&&r>=8&&(i=i.next(()=>this.yi(e,s))),n<9&&r>=9&&(i=i.next(()=>{!(function(e){e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")})(e)})),n<10&&r>=10&&(i=i.next(()=>this.wi(s))),n<11&&r>=11&&(i=i.next(()=>{!(function(e){e.createObjectStore(Rt,{keyPath:"bundleId"})})(e),(function(e){e.createObjectStore(Ft,{keyPath:"name"})})(e)})),n<12&&r>=12&&(i=i.next(()=>{!(function(e){const t=e.createObjectStore(Qt,{keyPath:Ht});t.createIndex(Wt,Jt,{unique:!1}),t.createIndex(Yt,Xt,{unique:!1})})(e)})),n<13&&r>=13&&(i=i.next(()=>(function(e){const t=e.createObjectStore(gt,{keyPath:pt});t.createIndex(yt,wt),t.createIndex(bt,vt)})(e)).next(()=>this.Si(e,s)).next(()=>e.deleteObjectStore(rt))),n<14&&r>=14&&(i=i.next(()=>this.bi(e,s))),n<15&&r>=15&&(i=i.next(()=>(function(e){e.createObjectStore(Lt,{keyPath:"indexId",autoIncrement:!0}).createIndex(Mt,"collectionGroup",{unique:!1});e.createObjectStore(Ut,{keyPath:jt}).createIndex(qt,Bt,{unique:!1});e.createObjectStore(zt,{keyPath:$t}).createIndex(Kt,Gt,{unique:!1})})(e))),n<16&&r>=16&&(i=i.next(()=>{t.objectStore(Ut).clear()}).next(()=>{t.objectStore(zt).clear()})),n<17&&r>=17&&(i=i.next(()=>{!(function(e){e.createObjectStore(Zt,{keyPath:"name"})})(e)})),n<18&&r>=18&&(0,u.isSafariOrWebkit)()&&(i=i.next(()=>{t.objectStore(Ut).clear()}).next(()=>{t.objectStore(zt).clear()})),i}gi(e){let t=0;return e.store(rt).ee((e,n)=>{t+=La(n)}).next(()=>{const n={byteSize:t};return e.store(It).put(Tt,n)})}fi(e){const t=e.store(ot),n=e.store(at);return t.J().next(t=>Ae.forEach(t,t=>{const r=IDBKeyRange.bound([t.userId,Ge],[t.userId,t.lastAcknowledgedBatchId]);return n.J(ct,r).next(n=>Ae.forEach(n,n=>{S(n.userId===t.userId,18650,"Cannot process batch from unexpected user",{batchId:n.batchId});const r=qo(this.serializer,n);return Fa(e,t.userId,r).next(()=>{})}))}))}pi(e){const t=e.store(xt),n=e.store(rt);return e.store(kt).get(At).next(e=>{const r=[];return n.ee((n,s)=>{const i=new Y(n),o=(function(e){return[0,Ze(e)]})(i);r.push(t.get(o).next(n=>n?Ae.resolve():(n=>t.put({targetId:0,path:Ze(n),sequenceNumber:e.highestListenSequenceNumber}))(i)))}).next(()=>Ae.waitFor(r))})}yi(e,t){e.createObjectStore(Ot,{keyPath:Pt});const n=t.store(Ot),r=new Sa,s=e=>{if(r.add(e)){const t=e.lastSegment(),r=e.popLast();return n.put({collectionId:t,parent:Ze(r)})}};return t.store(rt).ee({Y:!0},(e,t)=>{const n=new Y(e);return s(n.popLast())}).next(()=>t.store(mt).ee({Y:!0},([e,t,n],r)=>{const i=nt(t);return s(i.popLast())}))}wi(e){const t=e.store(Et);return t.ee((e,n)=>{const r=Bo(n),s=zo(this.serializer,r);return t.put(s)})}Si(e,t){const n=t.store(rt),r=[];return n.ee((e,n)=>{const s=t.store(gt),i=(function(e){return e.document?new ee(Y.fromString(e.document.name).popFirst(5)):e.noDocument?ee.fromSegments(e.noDocument.path):e.unknownDocument?ee.fromSegments(e.unknownDocument.path):T(36783)}
/**
          * @license
          * Copyright 2017 Google LLC
          *
          * Licensed under the Apache License, Version 2.0 (the "License");
          * you may not use this file except in compliance with the License.
          * You may obtain a copy of the License at
          *
          *   http://www.apache.org/licenses/LICENSE-2.0
          *
          * Unless required by applicable law or agreed to in writing, software
          * distributed under the License is distributed on an "AS IS" BASIS,
          * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
          * See the License for the specific language governing permissions and
          * limitations under the License.
          */)(n).path.toArray(),o={prefixPath:i.slice(0,i.length-2),collectionGroup:i[i.length-2],documentId:i[i.length-1],readTime:n.readTime||[0,0],unknownDocument:n.unknownDocument,noDocument:n.noDocument,document:n.document,hasCommittedMutations:!!n.hasCommittedMutations};r.push(s.put(o))}).next(()=>Ae.waitFor(r))}bi(e,t){const n=t.store(at),r=iu(this.serializer),s=new Eu(_u.Ai,this.serializer.gt);return n.J().next(e=>{const n=new Map;return e.forEach(e=>{let t=n.get(e.userId)??As();qo(this.serializer,e).keys().forEach(e=>t=t.add(e)),n.set(e.userId,t)}),Ae.forEach(n,(e,n)=>{const i=new d(n),o=Yo.yt(this.serializer,i),a=s.getIndexManager(i),u=Ma.yt(i,this.serializer,a,s.referenceDelegate);return new fu(r,u,o,a).recalculateAndSaveOverlaysForDocumentKeys(new cn(t,Ke.ce),e).next()})})}}function Du(e){e.createObjectStore(xt,{keyPath:Ct}).createIndex(Dt,Nt,{unique:!0}),e.createObjectStore(Et,{keyPath:"targetId"}).createIndex(St,_t,{unique:!0}),e.createObjectStore(kt)}const Nu="IndexedDbPersistence",Au=18e5,ku=5e3,Ou="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",Pu="main";class Vu{constructor(e,t,n,r,s,i,o,a,u,c,l=18){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.Di=s,this.window=i,this.document=o,this.Ci=u,this.Fi=c,this.Mi=l,this._i=null,this.ai=!1,this.isPrimary=!1,this.networkEnabled=!0,this.xi=null,this.inForeground=!1,this.Oi=null,this.Ni=null,this.Bi=Number.NEGATIVE_INFINITY,this.Li=e=>Promise.resolve(),!Vu.v())throw new D(C.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new tu(this,r),this.ki=t+Pu,this.serializer=new Ro(a),this.qi=new Pe(this.ki,this.Mi,new Cu(this.serializer)),this.ui=new Zo,this.ci=new $a(this.referenceDelegate,this.serializer),this.remoteDocumentCache=iu(this.serializer),this.hi=new Ho,this.window&&this.window.localStorage?this.Ki=this.window.localStorage:(this.Ki=null,!1===c&&b(Nu,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ui().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new D(C.FAILED_PRECONDITION,Ou);return this.$i(),this.Wi(),this.Qi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.ci.getHighestSequenceNumber(e))}).then(e=>{this._i=new Ke(e,this.Ci)}).then(()=>{this.ai=!0}).catch(e=>(this.qi&&this.qi.close(),Promise.reject(e)))}Gi(e){return this.Li=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.qi.K(async t=>{null===t.newVersion&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Di.enqueueAndForget(async()=>{this.started&&await this.Ui()}))}Ui(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Fu(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.zi(e).next(e=>{e||(this.isPrimary=!1,this.Di.enqueueRetryable(()=>this.Li(!1)))})}).next(()=>this.ji(e)).next(t=>this.isPrimary&&!t?this.Ji(e).next(()=>!1):!!t&&this.Hi(e).next(()=>!0))).catch(e=>{if(Le(e))return w(Nu,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return w(Nu,"Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Di.enqueueRetryable(()=>this.Li(e)),this.isPrimary=e})}zi(e){return Ru(e).get(it).next(e=>Ae.resolve(this.Zi(e)))}Xi(e){return Fu(e).delete(this.clientId)}async Yi(){if(this.isPrimary&&!this.es(this.Bi,Au)){this.Bi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",e=>{const t=ln(e,Vt);return t.J().next(e=>{const n=this.ts(e,Au),r=e.filter(e=>-1===n.indexOf(e));return Ae.forEach(r,e=>t.delete(e.clientId)).next(()=>r)})}).catch(()=>[]);if(this.Ki)for(const t of e)this.Ki.removeItem(this.ns(t.clientId))}}Qi(){this.Ni=this.Di.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ui().then(()=>this.Yi()).then(()=>this.Qi()))}Zi(e){return!!e&&e.ownerId===this.clientId}ji(e){return this.Fi?Ae.resolve(!0):Ru(e).get(it).next(t=>{if(null!==t&&this.es(t.leaseTimestampMs,ku)&&!this.rs(t.ownerId)){if(this.Zi(t)&&this.networkEnabled)return!0;if(!this.Zi(t)){if(!t.allowTabSynchronization)throw new D(C.FAILED_PRECONDITION,Ou);return!1}}return!(!this.networkEnabled||!this.inForeground)||Fu(e).J().next(e=>void 0===this.ts(e,ku).find(e=>{if(this.clientId!==e.clientId){const t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,r=this.networkEnabled===e.networkEnabled;if(t||n&&r)return!0}return!1}))}).next(e=>(this.isPrimary!==e&&w(Nu,`Client ${e?"is":"is not"} eligible for a primary lease.`),e))}async shutdown(){this.ai=!1,this.ss(),this.Ni&&(this.Ni.cancel(),this.Ni=null),this._s(),this.us(),await this.qi.runTransaction("shutdown","readwrite",[st,Vt],e=>{const t=new cn(e,Ke.ce);return this.Ji(t).next(()=>this.Xi(t))}),this.qi.close(),this.cs()}ts(e,t){return e.filter(e=>this.es(e.updateTimeMs,t)&&!this.rs(e.clientId))}ls(){return this.runTransaction("getActiveClients","readonly",e=>Fu(e).J().next(e=>this.ts(e,Au).map(e=>e.clientId)))}get started(){return this.ai}getGlobalsCache(){return this.ui}getMutationQueue(e,t){return Ma.yt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.ci}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new Ca(e,this.serializer.gt.databaseId)}getDocumentOverlayCache(e){return Yo.yt(this.serializer,e)}getBundleCache(){return this.hi}runTransaction(e,t,n){w(Nu,"Starting transaction:",e);const r="readonly"===t?"readonly":"readwrite",s=(function(e){return 18===e?un:17===e?an:16===e?on:15===e?sn:14===e?rn:13===e?nn:12===e?tn:11===e?en:void T(60245)})(this.Mi);let i;return this.qi.runTransaction(e,r,s,r=>(i=new cn(r,this._i?this._i.next():Ke.ce),"readwrite-primary"===t?this.zi(i).next(e=>!!e||this.ji(i)).next(t=>{if(!t)throw b(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Di.enqueueRetryable(()=>this.Li(!1)),new D(C.FAILED_PRECONDITION,Ce);return n(i)}).next(e=>this.Hi(i).next(()=>e)):this.hs(i).next(()=>n(i)))).then(e=>(i.raiseOnCommittedEvent(),e))}hs(e){return Ru(e).get(it).next(e=>{if(null!==e&&this.es(e.leaseTimestampMs,ku)&&!this.rs(e.ownerId)&&!this.Zi(e)&&!(this.Fi||this.allowTabSynchronization&&e.allowTabSynchronization))throw new D(C.FAILED_PRECONDITION,Ou)})}Hi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Ru(e).put(it,t)}static v(){return Pe.v()}Ji(e){const t=Ru(e);return t.get(it).next(e=>this.Zi(e)?(w(Nu,"Releasing primary lease."),t.delete(it)):Ae.resolve())}es(e,t){const n=Date.now();return!(e<n-t||e>n&&(b(`Detected an update time that is in the future: ${e} > ${n}`),1))}$i(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.Oi=()=>{this.Di.enqueueAndForget(()=>(this.inForeground="visible"===this.document.visibilityState,this.Ui()))},this.document.addEventListener("visibilitychange",this.Oi),this.inForeground="visible"===this.document.visibilityState)}_s(){this.Oi&&(this.document.removeEventListener("visibilitychange",this.Oi),this.Oi=null)}Wi(){"function"==typeof this.window?.addEventListener&&(this.xi=()=>{this.ss();const e=/(?:Version|Mobile)\/1[456]/;(0,u.isSafari)()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.Di.enterRestrictedMode(!0),this.Di.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.xi))}us(){this.xi&&(this.window.removeEventListener("pagehide",this.xi),this.xi=null)}rs(e){try{const t=null!==this.Ki?.getItem(this.ns(e));return w(Nu,`Client '${e}' ${t?"is":"is not"} zombied in LocalStorage`),t}catch(e){return b(Nu,"Failed to get zombied client id.",e),!1}}ss(){if(this.Ki)try{this.Ki.setItem(this.ns(this.clientId),String(Date.now()))}catch(e){b("Failed to set zombie client id.",e)}}cs(){if(this.Ki)try{this.Ki.removeItem(this.ns(this.clientId))}catch(e){}}ns(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Ru(e){return ln(e,st)}function Fu(e){return ln(e,Vt)}function Lu(e,t){let n=e.projectId;return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */}class Mu{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Ps=n,this.Ts=r}static Is(e,t){let n=As(),r=As();for(const e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new Mu(e,t.fromCache,n,r)}}
/**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class Uu{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}
/**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class ju{constructor(){this.Es=!1,this.Rs=!1,this.As=100,this.Vs=(0,u.isSafari)()?8:Ve((0,u.getUA)())>0?6:4}initialize(e,t){this.ds=e,this.indexManager=t,this.Es=!0}getDocumentsMatchingQuery(e,t,n,r){const s={result:null};return this.fs(e,t).next(e=>{s.result=e}).next(()=>{if(!s.result)return this.gs(e,t,r,n).next(e=>{s.result=e})}).next(()=>{if(s.result)return;const n=new Uu;return this.ps(e,t,n).next(r=>{if(s.result=r,this.Rs)return this.ys(e,t,n,r.size)})}).next(()=>s.result)}ys(e,t,n,r){return n.documentReadCount<this.As?(p()<=l.LogLevel.DEBUG&&w("QueryEngine","SDK will not create cache indexes for query:",ms(t),"since it only creates cache indexes for collection contains","more than or equal to",this.As,"documents"),Ae.resolve()):(p()<=l.LogLevel.DEBUG&&w("QueryEngine","Query:",ms(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.Vs*r?(p()<=l.LogLevel.DEBUG&&w("QueryEngine","The SDK decides to create cache indexes for query:",ms(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ss(t))):Ae.resolve())}fs(e,t){if(es(t))return Ae.resolve(null);let n=ss(t);return this.indexManager.getIndexType(e,n).next(r=>0===r?null:(null!==t.limit&&1===r&&(t=cs(t,null,"F"),n=ss(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{const s=As(...r);return this.ds.getDocuments(e,s).next(r=>this.indexManager.getMinOffset(e,n).next(n=>{const i=this.ws(t,r);return this.Ss(t,i,s,n.readTime)?this.fs(e,cs(t,null,"F")):this.bs(e,i,t,n)}))})))}gs(e,t,n,r){return es(t)||r.isEqual(me.min())?Ae.resolve(null):this.ds.getDocuments(e,n).next(s=>{const i=this.ws(t,s);return this.Ss(t,i,n,r)?Ae.resolve(null):(p()<=l.LogLevel.DEBUG&&w("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),ms(t)),this.bs(e,i,t,Ee(r,ge)).next(e=>e))})}ws(e,t){let n=new wn(ys(e));return t.forEach((t,r)=>{gs(e,r)&&(n=n.add(r))}),n}Ss(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const s="F"===e.limitType?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}ps(e,t,n){return p()<=l.LogLevel.DEBUG&&w("QueryEngine","Using full collection scan to execute query:",ms(t)),this.ds.getDocumentsMatchingQuery(e,t,_e.min(),n)}bs(e,t,n,r){return this.ds.getDocumentsMatchingQuery(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const qu="LocalStore",Bu=3e8;class zu{constructor(e,t,n,r){this.persistence=e,this.Ds=t,this.serializer=r,this.Cs=new gn(q),this.vs=new bs(e=>Kr(e),Gr),this.Fs=new Map,this.Ms=e.getRemoteDocumentCache(),this.ci=e.getTargetCache(),this.hi=e.getBundleCache(),this.xs(n)}xs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new fu(this.Ms,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ms.setIndexManager(this.indexManager),this.Ds.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Cs))}}function $u(e,t,n,r){return new zu(e,t,n,r)}async function Ku(e,t){const n=x(e);return await n.persistence.runTransaction("Handle user change","readonly",e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next(s=>(r=s,n.xs(t),n.mutationQueue.getAllMutationBatches(e))).next(t=>{const s=[],i=[];let o=As();for(const e of r){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next(e=>({Os:e,removedBatchIds:s,addedBatchIds:i}))})})}function Gu(e,t){const n=x(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{const r=t.batch.keys(),s=n.Ms.newChangeBuffer({trackRemovals:!0});return(function(e,t,n,r){const s=n.batch,i=s.keys();let o=Ae.resolve();return i.forEach(e=>{o=o.next(()=>r.getEntry(t,e)).next(t=>{const i=n.docVersions.get(e);S(null!==i,48541),t.version.compareTo(i)<0&&(s.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),o.next(()=>e.mutationQueue.removeMutationBatch(t,s))})(n,e,t,s).next(()=>s.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,(function(e){let t=As();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t})(t))).next(()=>n.localDocuments.getDocuments(e,r))})}function Qu(e){const t=x(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.ci.getLastRemoteSnapshotVersion(e))}function Hu(e,t){const n=x(e),r=t.snapshotVersion;let s=n.Cs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",e=>{const i=n.Ms.newChangeBuffer({trackRemovals:!0});s=n.Cs;const o=[];t.targetChanges.forEach((i,a)=>{const u=s.get(a);if(!u)return;o.push(n.ci.removeMatchingKeys(e,i.removedDocuments,a).next(()=>n.ci.addMatchingKeys(e,i.addedDocuments,a)));let c=u.withSequenceNumber(e.currentSequenceNumber);null!==t.targetMismatches.get(a)?c=c.withResumeToken(Sn.EMPTY_BYTE_STRING,me.min()).withLastLimboFreeSnapshotVersion(me.min()):i.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(i.resumeToken,r)),s=s.insert(a,c),(function(e,t,n){if(0===e.resumeToken.approximateByteSize())return!0;if(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=Bu)return!0;return n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0})(u,c,i)&&o.push(n.ci.updateTargetData(e,c))});let a=Is(),u=As();if(t.documentUpdates.forEach(r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))}),o.push(Wu(e,i,t.documentUpdates).next(e=>{a=e.Ns,u=e.Bs})),!r.isEqual(me.min())){const t=n.ci.getLastRemoteSnapshotVersion(e).next(t=>n.ci.setTargetsMetadata(e,e.currentSequenceNumber,r));o.push(t)}return Ae.waitFor(o).next(()=>i.apply(e)).next(()=>n.localDocuments.getLocalViewOfDocuments(e,a,u)).next(()=>a)}).then(e=>(n.Cs=s,e))}function Wu(e,t,n){let r=As(),s=As();return n.forEach(e=>r=r.add(e)),t.getEntries(e,r).next(e=>{let r=Is();return n.forEach((n,i)=>{const o=e.get(n);i.isFoundDocument()!==o.isFoundDocument()&&(s=s.add(n)),i.isNoDocument()&&i.version.isEqual(me.min())?(t.removeEntry(n,i.readTime),r=r.insert(n,i)):!o.isValidDocument()||i.version.compareTo(o.version)>0||0===i.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(i),r=r.insert(n,i)):w(qu,"Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",i.version)}),{Ns:r,Bs:s}})}function Ju(e,t){const n=x(e);return n.persistence.runTransaction("Get next mutation batch","readonly",e=>(void 0===t&&(t=Ge),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t)))}function Yu(e,t){const n=x(e);return n.persistence.runTransaction("Allocate target","readwrite",e=>{let r;return n.ci.getTargetData(e,t).next(s=>s?(r=s,Ae.resolve(r)):n.ci.allocateTargetId(e).next(s=>(r=new Vo(t,s,"TargetPurposeListen",e.currentSequenceNumber),n.ci.addTargetData(e,r).next(()=>r))))}).then(e=>{const r=n.Cs.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Cs=n.Cs.insert(e.targetId,e),n.vs.set(t,e.targetId)),e})}async function Xu(e,t,n){const r=x(e),s=r.Cs.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,e=>r.persistence.referenceDelegate.removeTarget(e,s))}catch(e){if(!Le(e))throw e;w(qu,`Failed to update sequence numbers for target ${t}: ${e}`)}r.Cs=r.Cs.remove(t),r.vs.delete(s.target)}function Zu(e,t,n){const r=x(e);let s=me.min(),i=As();return r.persistence.runTransaction("Execute query","readwrite",e=>(function(e,t,n){const r=x(e),s=r.vs.get(n);return void 0!==s?Ae.resolve(r.Cs.get(s)):r.ci.getTargetData(t,n)})(r,e,ss(t)).next(t=>{if(t)return s=t.lastLimboFreeSnapshotVersion,r.ci.getMatchingKeysForTargetId(e,t.targetId).next(e=>{i=e})}).next(()=>r.Ds.getDocumentsMatchingQuery(e,t,n?s:me.min(),n?i:As())).next(e=>(nc(r,ps(t),e),{documents:e,Ls:i})))}function ec(e,t){const n=x(e),r=x(n.ci),s=n.Cs.get(t);return s?Promise.resolve(s.target):n.persistence.runTransaction("Get target data","readonly",e=>r.Rt(e,t).next(e=>e?e.target:null))}function tc(e,t){const n=x(e),r=n.Fs.get(t)||me.min();return n.persistence.runTransaction("Get new document changes","readonly",e=>n.Ms.getAllFromCollectionGroup(e,t,Ee(r,ge),Number.MAX_SAFE_INTEGER)).then(e=>(nc(n,t,e),e))}function nc(e,t,n){let r=e.Fs.get(t)||me.min();n.forEach((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)}),e.Fs.set(t,r)}async function rc(e,t,n,r){const s=x(e);let i=As(),o=Is();for(const e of n){const n=t.ks(e.metadata.name);e.document&&(i=i.add(n));const r=t.qs(e);r.setReadTime(t.Ks(e.metadata.readTime)),o=o.insert(n,r)}const a=s.Ms.newChangeBuffer({trackRemovals:!0}),u=await Yu(s,(function(e){return ss(Zr(Y.fromString(`__bundle__/docs/${e}`)))})(r));return s.persistence.runTransaction("Apply bundle documents","readwrite",e=>Wu(e,a,o).next(t=>(a.apply(e),t)).next(t=>s.ci.removeMatchingKeysForTargetId(e,u.targetId).next(()=>s.ci.addMatchingKeys(e,i,u.targetId)).next(()=>s.localDocuments.getLocalViewOfDocuments(e,t.Ns,t.Bs)).next(()=>t.Ns)))}async function sc(e,t,n=As()){const r=await Yu(e,ss($o(t.bundledQuery))),s=x(e);return s.persistence.runTransaction("Save named query","readwrite",e=>{const i=Yi(t.readTime);if(r.snapshotVersion.compareTo(i)>=0)return s.hi.saveNamedQuery(e,t);const o=r.withResumeToken(Sn.EMPTY_BYTE_STRING,i);return s.Cs=s.Cs.insert(o.targetId,o),s.ci.updateTargetData(e,o).next(()=>s.ci.removeMatchingKeysForTargetId(e,r.targetId)).next(()=>s.ci.addMatchingKeys(e,n,r.targetId)).next(()=>s.hi.saveNamedQuery(e,t))})}
/**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const ic="firestore_clients";function oc(e,t){return`${ic}_${e}_${t}`}const ac="firestore_mutations";function uc(e,t,n){let r=`${ac}_${e}_${n}`;return t.isAuthenticated()&&(r+=`_${t.uid}`),r}const cc="firestore_targets";function lc(e,t){return`${cc}_${e}_${t}`}
/**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const hc="SharedClientState";class dc{constructor(e,t,n,r){this.user=e,this.batchId=t,this.state=n,this.error=r}static Us(e,t,n){const r=JSON.parse(n);let s,i="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return i&&r.error&&(i="string"==typeof r.error.message&&"string"==typeof r.error.code,i&&(s=new D(r.error.code,r.error.message))),i?new dc(e,t,r.state,s):(b(hc,`Failed to parse mutation state for ID '${t}': ${n}`),null)}$s(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class fc{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Us(e,t){const n=JSON.parse(t);let r,s="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return s&&n.error&&(s="string"==typeof n.error.message&&"string"==typeof n.error.code,s&&(r=new D(n.error.code,n.error.message))),s?new fc(e,n.state,r):(b(hc,`Failed to parse target state for ID '${e}': ${t}`),null)}$s(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class mc{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Us(e,t){const n=JSON.parse(t);let r="object"==typeof n&&n.activeTargetIds instanceof Array,s=Os();for(let e=0;r&&e<n.activeTargetIds.length;++e)r=Je(n.activeTargetIds[e]),s=s.add(n.activeTargetIds[e]);return r?new mc(e,s):(b(hc,`Failed to parse client data for instance '${e}': ${t}`),null)}}class gc{constructor(e,t){this.clientId=e,this.onlineState=t}static Us(e){const t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new gc(t.clientId,t.onlineState):(b(hc,`Failed to parse online state: ${e}`),null)}}class pc{constructor(){this.activeTargetIds=Os()}Ws(e){this.activeTargetIds=this.activeTargetIds.add(e)}Qs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}$s(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class yc{constructor(e,t,n,r,s){this.window=e,this.Di=t,this.persistenceKey=n,this.Gs=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.zs=this.js.bind(this),this.Js=new gn(q),this.started=!1,this.Hs=[];const i=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.Zs=oc(this.persistenceKey,this.Gs),this.Xs=(function(e){return`firestore_sequence_number_${e}`})(this.persistenceKey),this.Js=this.Js.insert(this.Gs,new pc),this.Ys=new RegExp(`^${ic}_${i}_([^_]*)$`),this.eo=new RegExp(`^${ac}_${i}_(\\d+)(?:_(.*))?$`),this.no=new RegExp(`^${cc}_${i}_(\\d+)$`),this.ro=(function(e){return`firestore_online_state_${e}`})(this.persistenceKey),this.io=(function(e){return`firestore_bundle_loaded_v2_${e}`})(this.persistenceKey),this.window.addEventListener("storage",this.zs)}static v(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.ls();for(const t of e){if(t===this.Gs)continue;const e=this.getItem(oc(this.persistenceKey,t));if(e){const n=mc.Us(t,e);n&&(this.Js=this.Js.insert(n.clientId,n))}}this.so();const t=this.storage.getItem(this.ro);if(t){const e=this.oo(t);e&&this._o(e)}for(const e of this.Hs)this.js(e);this.Hs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Xs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ao(this.Js)}isActiveQueryTarget(e){let t=!1;return this.Js.forEach((n,r)=>{r.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.uo(e,"pending")}updateMutationState(e,t,n){this.uo(e,t,n),this.co(e)}addLocalQueryTarget(e,t=!0){let n="not-current";if(this.isActiveQueryTarget(e)){const t=this.storage.getItem(lc(this.persistenceKey,e));if(t){const r=fc.Us(e,t);r&&(n=r.state)}}return t&&this.lo.Ws(e),this.so(),n}removeLocalQueryTarget(e){this.lo.Qs(e),this.so()}isLocalQueryTarget(e){return this.lo.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(lc(this.persistenceKey,e))}updateQueryState(e,t,n){this.ho(e,t,n)}handleUserChange(e,t,n){t.forEach(e=>{this.co(e)}),this.currentUser=e,n.forEach(e=>{this.addPendingMutation(e)})}setOnlineState(e){this.Po(e)}notifyBundleLoaded(e){this.To(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.zs),this.removeItem(this.Zs),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return w(hc,"READ",e,t),t}setItem(e,t){w(hc,"SET",e,t),this.storage.setItem(e,t)}removeItem(e){w(hc,"REMOVE",e),this.storage.removeItem(e)}js(e){const t=e;if(t.storageArea===this.storage){if(w(hc,"EVENT",t.key,t.newValue),t.key===this.Zs)return void b("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Di.enqueueRetryable(async()=>{if(this.started){if(null!==t.key)if(this.Ys.test(t.key)){if(null==t.newValue){const e=this.Io(t.key);return this.Eo(e,null)}{const e=this.Ro(t.key,t.newValue);if(e)return this.Eo(e.clientId,e)}}else if(this.eo.test(t.key)){if(null!==t.newValue){const e=this.Ao(t.key,t.newValue);if(e)return this.Vo(e)}}else if(this.no.test(t.key)){if(null!==t.newValue){const e=this.mo(t.key,t.newValue);if(e)return this.fo(e)}}else if(t.key===this.ro){if(null!==t.newValue){const e=this.oo(t.newValue);if(e)return this._o(e)}}else if(t.key===this.Xs){const e=(function(e){let t=Ke.ce;if(null!=e)try{const n=JSON.parse(e);S("number"==typeof n,30636,{po:e}),t=n}catch(e){b(hc,"Failed to read sequence number from WebStorage",e)}return t})(t.newValue);e!==Ke.ce&&this.sequenceNumberHandler(e)}else if(t.key===this.io){const e=this.yo(t.newValue);await Promise.all(e.map(e=>this.syncEngine.wo(e)))}}else this.Hs.push(t)})}}get lo(){return this.Js.get(this.Gs)}so(){this.setItem(this.Zs,this.lo.$s())}uo(e,t,n){const r=new dc(this.currentUser,e,t,n),s=uc(this.persistenceKey,this.currentUser,e);this.setItem(s,r.$s())}co(e){const t=uc(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Po(e){const t={clientId:this.Gs,onlineState:e};this.storage.setItem(this.ro,JSON.stringify(t))}ho(e,t,n){const r=lc(this.persistenceKey,e),s=new fc(e,t,n);this.setItem(r,s.$s())}To(e){const t=JSON.stringify(Array.from(e));this.setItem(this.io,t)}Io(e){const t=this.Ys.exec(e);return t?t[1]:null}Ro(e,t){const n=this.Io(e);return mc.Us(n,t)}Ao(e,t){const n=this.eo.exec(e),r=Number(n[1]),s=void 0!==n[2]?n[2]:null;return dc.Us(new d(s),r,t)}mo(e,t){const n=this.no.exec(e),r=Number(n[1]);return fc.Us(r,t)}oo(e){return gc.Us(e)}yo(e){return JSON.parse(e)}async Vo(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.So(e.batchId,e.state,e.error);w(hc,`Ignoring mutation for non-active user ${e.user.uid}`)}fo(e){return this.syncEngine.bo(e.targetId,e.state,e.error)}Eo(e,t){const n=t?this.Js.insert(e,t):this.Js.remove(e),r=this.ao(this.Js),s=this.ao(n),i=[],o=[];return s.forEach(e=>{r.has(e)||i.push(e)}),r.forEach(e=>{s.has(e)||o.push(e)}),this.syncEngine.Do(i,o).then(()=>{this.Js=n})}_o(e){this.Js.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ao(e){let t=Os();return e.forEach((e,n)=>{t=t.unionWith(n.activeTargetIds)}),t}}class wc{constructor(){this.Co=new pc,this.vo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.Co.Ws(e),this.vo[e]||"not-current"}updateQueryState(e,t,n){this.vo[e]=t}removeLocalQueryTarget(e){this.Co.Qs(e)}isLocalQueryTarget(e){return this.Co.activeTargetIds.has(e)}clearQueryState(e){delete this.vo[e]}getAllActiveQueryTargets(){return this.Co.activeTargetIds}isActiveQueryTarget(e){return this.Co.activeTargetIds.has(e)}start(){return this.Co=new pc,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class bc{Fo(e){}shutdown(){}}
/**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const vc="ConnectivityMonitor";class Ic{constructor(){this.Mo=()=>this.xo(),this.Oo=()=>this.No(),this.Bo=[],this.Lo()}Fo(e){this.Bo.push(e)}shutdown(){window.removeEventListener("online",this.Mo),window.removeEventListener("offline",this.Oo)}Lo(){window.addEventListener("online",this.Mo),window.addEventListener("offline",this.Oo)}xo(){w(vc,"Network connectivity changed: AVAILABLE");for(const e of this.Bo)e(0)}No(){w(vc,"Network connectivity changed: UNAVAILABLE");for(const e of this.Bo)e(1)}static v(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */let Tc=null;function Ec(){return null===Tc?Tc=268435456+Math.round(2147483648*Math.random()):Tc++,"0x"+Tc.toString(16)
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */}const Sc="RestConnection",_c={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class xc{get ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Ko=`projects/${n}/databases/${r}`,this.Uo=this.databaseId.database===Ln?`project_id=${n}`:`project_id=${n}&database_id=${r}`}$o(e,t,n,r,s){const i=Ec(),o=this.Wo(e,t.toUriEncodedString());w(Sc,`Sending RPC '${e}' ${i}:`,o,n);const a={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Uo};this.Qo(a,r,s);const{host:c}=new URL(o),l=(0,u.isCloudWorkstation)(c);return this.Go(e,o,a,n,l).then(t=>(w(Sc,`Received RPC '${e}' ${i}: `,t),t),t=>{throw v(Sc,`RPC '${e}' ${i} failed with error: `,t,"url: ",o,"request:",n),t})}zo(e,t,n,r,s,i){return this.$o(e,t,n,r,s)}Qo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+f,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}Wo(e,t){const n=_c[e];let r=`${this.qo}/v1/${t}:${n}`;return this.databaseInfo.apiKey&&(r=`${r}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),r}terminate(){}}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class Cc{constructor(e){this.jo=e.jo,this.Jo=e.Jo}Ho(e){this.Zo=e}Xo(e){this.Yo=e}e_(e){this.t_=e}onMessage(e){this.n_=e}close(){this.Jo()}send(e){this.jo(e)}r_(){this.Zo()}i_(){this.Yo()}s_(e){this.t_(e)}o_(e){this.n_(e)}}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const Dc="WebChannelConnection",Nc=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};class Ac extends xc{constructor(e){super(e),this.__=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static a_(){if(!Ac.u_){const e=(0,h.getStatEventTarget)();Nc(e,h.Event.STAT_EVENT,e=>{e.stat===h.Stat.PROXY?w(Dc,"STAT_EVENT: detected buffering proxy"):e.stat===h.Stat.NOPROXY&&w(Dc,"STAT_EVENT: detected no buffering proxy")}),Ac.u_=!0}}Go(e,t,n,r,s){const i=Ec();return new Promise((s,o)=>{const a=new h.XhrIo;a.setWithCredentials(!0),a.listenOnce(h.EventType.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case h.ErrorCode.NO_ERROR:const t=a.getResponseJson();w(Dc,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case h.ErrorCode.TIMEOUT:w(Dc,`RPC '${e}' ${i} timed out`),o(new D(C.DEADLINE_EXCEEDED,"Request time out"));break;case h.ErrorCode.HTTP_ERROR:const n=a.getStatus();if(w(Dc,`RPC '${e}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=e?.error;if(t&&t.status&&t.message){const e=(function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(t)>=0?t:C.UNKNOWN})(t.status);o(new D(e,t.message))}else o(new D(C.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new D(C.UNAVAILABLE,"Connection failed."));break;default:T(9055,{c_:e,streamId:i,l_:a.getLastErrorCode(),h_:a.getLastError()})}}finally{w(Dc,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(r);w(Dc,`RPC '${e}' ${i} sending request:`,r),a.send(t,"POST",u,n,15)})}P_(e,t,n){const r=Ec(),s=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=this.createWebChannelTransport(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},a=this.longPollingOptions.timeoutSeconds;void 0!==a&&(o.longPollingTimeout=Math.round(1e3*a)),this.useFetchStreams&&(o.useFetchStreams=!0),this.Qo(o.initMessageHeaders,t,n),o.encodeInitMessageHeaders=!0;const u=s.join("");w(Dc,`Creating RPC '${e}' stream ${r}: ${u}`,o);const c=i.createWebChannel(u,o);this.T_(c);let l=!1,d=!1;const f=new Cc({jo:t=>{d?w(Dc,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(l||(w(Dc,`Opening RPC '${e}' stream ${r} transport.`),c.open(),l=!0),w(Dc,`RPC '${e}' stream ${r} sending:`,t),c.send(t))},Jo:()=>c.close()});return Nc(c,h.WebChannel.EventType.OPEN,()=>{d||(w(Dc,`RPC '${e}' stream ${r} transport opened.`),f.r_())}),Nc(c,h.WebChannel.EventType.CLOSE,()=>{d||(d=!0,w(Dc,`RPC '${e}' stream ${r} transport closed`),f.s_(),this.I_(c))}),Nc(c,h.WebChannel.EventType.ERROR,t=>{d||(d=!0,v(Dc,`RPC '${e}' stream ${r} transport errored. Name:`,t.name,"Message:",t.message),f.s_(new D(C.UNAVAILABLE,"The operation could not be completed")))}),Nc(c,h.WebChannel.EventType.MESSAGE,t=>{if(!d){const n=t.data[0];S(!!n,16349);const s=n,i=s?.error||s[0]?.error;if(i){w(Dc,`RPC '${e}' stream ${r} received error:`,i);const t=i.status;let n=(function(e){const t=Ii[e];if(void 0!==t)return Si(t)})(t),s=i.message;"NOT_FOUND"===t&&s.includes("database")&&s.includes("does not exist")&&s.includes(this.databaseId.database)&&v(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),void 0===n&&(n=C.INTERNAL,s="Unknown error status: "+t+" with message "+i.message),d=!0,f.s_(new D(n,s)),c.close()}else w(Dc,`RPC '${e}' stream ${r} received:`,n),f.o_(n)}}),Ac.a_(),setTimeout(()=>{f.i_()},0),f}terminate(){this.__.forEach(e=>e.close()),this.__=[]}T_(e){this.__.push(e)}I_(e){this.__=this.__.filter(t=>t===e)}Qo(e,t,n){super.Qo(e,t,n),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return(0,h.createWebChannelTransport)()}}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function kc(e){return new Ac(e)}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function Oc(){return"undefined"!=typeof window?window:null}function Pc(){return"undefined"!=typeof document?document:null}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function Vc(e){return new Gi(e,!0)}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */Ac.u_=!1;class Rc{constructor(e,t,n=1e3,r=1.5,s=6e4){this.Di=e,this.timerId=t,this.E_=n,this.R_=r,this.A_=s,this.V_=0,this.d_=null,this.m_=Date.now(),this.reset()}reset(){this.V_=0}f_(){this.V_=this.A_}g_(e){this.cancel();const t=Math.floor(this.V_+this.p_()),n=Math.max(0,Date.now()-this.m_),r=Math.max(0,t-n);r>0&&w("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.d_=this.Di.enqueueAfterDelay(this.timerId,r,()=>(this.m_=Date.now(),e())),this.V_*=this.R_,this.V_<this.E_&&(this.V_=this.E_),this.V_>this.A_&&(this.V_=this.A_)}y_(){null!==this.d_&&(this.d_.skipDelay(),this.d_=null)}cancel(){null!==this.d_&&(this.d_.cancel(),this.d_=null)}p_(){return(Math.random()-.5)*this.V_}}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const Fc="PersistentStream";class Lc{constructor(e,t,n,r,s,i,o,a){this.Di=e,this.w_=n,this.S_=r,this.connection=s,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.b_=0,this.D_=null,this.C_=null,this.stream=null,this.v_=0,this.F_=new Rc(e,t)}M_(){return 1===this.state||5===this.state||this.x_()}x_(){return 2===this.state||3===this.state}start(){this.v_=0,4!==this.state?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&null===this.D_&&(this.D_=this.Di.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}async close(e,t){this.q_(),this.K_(),this.F_.cancel(),this.b_++,4!==e?this.F_.reset():t&&t.code===C.RESOURCE_EXHAUSTED?(b(t.toString()),b("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===C.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.e_(t)}U_(){}auth(){this.state=1;const e=this.W_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.b_===t&&this.Q_(e,n)},t=>{e(()=>{const e=new D(C.UNKNOWN,"Fetching auth token failed: "+t.message);return this.G_(e)})})}Q_(e,t){const n=this.W_(this.b_);this.stream=this.z_(e,t),this.stream.Ho(()=>{n(()=>this.listener.Ho())}),this.stream.Xo(()=>{n(()=>(this.state=2,this.C_=this.Di.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.Xo()))}),this.stream.e_(e=>{n(()=>this.G_(e))}),this.stream.onMessage(e=>{n(()=>1==++this.v_?this.j_(e):this.onNext(e))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return w(Fc,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Di.enqueueAndForget(()=>this.b_===e?t():(w(Fc,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Mc extends Lc{constructor(e,t,n,r,s,i){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,i),this.serializer=s}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=ho(this.serializer,e),n=(function(e){if(!("targetChange"in e))return me.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?me.min():t.readTime?Yi(t.readTime):me.min()})(e);return this.listener.J_(t,n)}H_(e){const t={};t.database=io(this.serializer),t.addTarget=(function(e,t){let n;const r=t.target;if(n=Qr(r)?{documents:po(e,r)}:{query:yo(e,r).dt},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=Wi(e,t.resumeToken);const r=Qi(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(me.min())>0){n.readTime=Hi(e,t.snapshotVersion.toTimestamp());const r=Qi(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n})(this.serializer,e);const n=vo(this.serializer,e);n&&(t.labels=n),this.k_(t)}Z_(e){const t={};t.database=io(this.serializer),t.removeTarget=e,this.k_(t)}}class Uc extends Lc{constructor(e,t,n,r,s,i){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,i),this.serializer=s}get X_(){return this.v_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.X_&&this.Y_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return S(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,S(!e.writeResults||0===e.writeResults.length,55816),this.listener.ea()}onNext(e){S(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=go(e.writeResults,e.commitTime),n=Yi(e.commitTime);return this.listener.ta(n,t)}na(){const e={};e.database=io(this.serializer),this.k_(e)}Y_(e){const t={streamToken:this.lastStreamToken,writes:e.map(e=>fo(this.serializer,e))};this.k_(t)}}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class jc{}class qc extends jc{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.ra=!1}ia(){if(this.ra)throw new D(C.FAILED_PRECONDITION,"The client has already been terminated.")}$o(e,t,n,r){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.$o(e,Zi(t,n),r,s,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new D(C.UNKNOWN,e.toString())})}zo(e,t,n,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.zo(e,Zi(t,n),r,i,o,s)).catch(e=>{throw"FirebaseError"===e.name?(e.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new D(C.UNKNOWN,e.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}function Bc(e,t,n,r){return new qc(e,t,n,r)}class zc{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){0===this.sa&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){"Online"===this.state?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,"Online"===e&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(b(t),this._a=!1):w("OnlineStateTracker",t)}ha(){null!==this.oa&&(this.oa.cancel(),this.oa=null)}}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const $c="RemoteStore";class Kc{constructor(e,t,n,r,s){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Map,this.Ea=new Map,this.Ra=new za(1e3),this.Aa=new za(1001),this.Va=new Set,this.da=[],this.ma=s,this.ma.Fo(e=>{n.enqueueAndForget(async()=>{tl(this)&&(w($c,"Restarting streams for network reachability change."),await(async function(e){const t=x(e);t.Va.add(4),await Qc(t),t.fa.set("Unknown"),t.Va.delete(4),await Gc(t)})(this))})}),this.fa=new zc(n,r)}}async function Gc(e){if(tl(e))for(const t of e.da)await t(!0)}async function Qc(e){for(const t of e.da)await t(!1)}function Hc(e,t){return e.Ia.get(t)||void 0}function Wc(e,t){const n=x(e),r=Hc(n,t.targetId);if(void 0!==r&&n.Ta.has(r))return;const s=(function(e,t){const n=Hc(e,t);void 0!==n&&e.Ea.delete(n);const r=(function(e,t){return t%2!=0?e.Aa.next():e.Ra.next()})(e,t);return e.Ia.set(t,r),e.Ea.set(r,t),r})(n,t.targetId);w($c,"remoteStoreListen mapping SDK target ID to remote",t.targetId,s);const i=new Vo(t.target,s,t.purpose,t.sequenceNumber,t.snapshotVersion,t.lastLimboFreeSnapshotVersion,t.resumeToken);n.Ta.set(s,i),el(n)?Zc(n):vl(n).x_()&&Yc(n,i)}function Jc(e,t){const n=x(e),r=vl(n),s=Hc(n,t);w($c,"remoteStoreUnlisten removing mapping of SDK target ID to remote",t,s),n.Ta.delete(s),n.Ia.delete(t),n.Ea.delete(s),r.x_()&&Xc(n,s),0===n.Ta.size&&(r.x_()?r.B_():tl(n)&&n.fa.set("Unknown"))}function Yc(e,t){if(e.ga.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(me.min())>0){const n=e.Ea.get(t.targetId);if(void 0===n)return void w($c,"SDK target ID not found for remote ID: "+t.targetId);const r=e.remoteSyncer.getRemoteKeysForTarget(n).size;t=t.withExpectedCount(r)}vl(e).H_(t)}function Xc(e,t){e.ga.$e(t),vl(e).Z_(t)}function Zc(e){e.ga=new ji({getRemoteKeysForTarget:t=>{const n=e.Ea.get(t);return void 0!==n?e.remoteSyncer.getRemoteKeysForTarget(n):As()},Rt:t=>e.Ta.get(t)||null,lt:()=>e.datastore.serializer.databaseId}),vl(e).start(),e.fa.aa()}function el(e){return tl(e)&&!vl(e).M_()&&e.Ta.size>0}function tl(e){return 0===x(e).Va.size}function nl(e){e.ga=void 0}async function rl(e){e.fa.set("Online")}async function sl(e){e.Ta.forEach((t,n)=>{Yc(e,t)})}async function il(e,t){nl(e),el(e)?(e.fa.la(t),Zc(e)):e.fa.set("Unknown")}async function ol(e,t,n){if(e.fa.set("Online"),t instanceof Li&&2===t.state&&t.cause)try{await(async function(e,t){const n=t.cause;for(const r of t.targetIds){if(e.Ta.has(r)){const t=e.Ea.get(r);void 0!==t&&(await e.remoteSyncer.rejectListen(t,n),e.Ia.delete(t),e.Ea.delete(r)),e.Ta.delete(r)}e.ga.removeTarget(r)}})(e,t)}catch(n){w($c,"Failed to remove targets %s: %s ",t.targetIds.join(","),n),await al(e,n)}else if(t instanceof Ri?e.ga.Xe(t):t instanceof Fi?e.ga.it(t):e.ga.tt(t),!n.isEqual(me.min()))try{const t=await Qu(e.localStore);n.compareTo(t)>=0&&await(function(e,t){const n=e.ga.Pt(t);n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const s=e.Ta.get(r);s&&e.Ta.set(r,s.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach((t,n)=>{const r=e.Ta.get(t);if(!r)return;e.Ta.set(t,r.withResumeToken(Sn.EMPTY_BYTE_STRING,r.snapshotVersion)),Xc(e,t);const s=new Vo(r.target,t,n,r.sequenceNumber);Yc(e,s)});const r=(function(e,t){const n=new Map;t.targetChanges.forEach((t,r)=>{const s=e.Ea.get(r);void 0!==s&&n.set(s,t)});let r=new gn(q);return t.targetMismatches.forEach((t,n)=>{const s=e.Ea.get(t);void 0!==s&&(r=r.insert(s,n))}),new Pi(t.snapshotVersion,n,r,t.documentUpdates,t.resolvedLimboDocuments)})(e,n);return e.remoteSyncer.applyRemoteEvent(r)})(e,n)}catch(t){w($c,"Failed to raise snapshot:",t),await al(e,t)}}async function al(e,t,n){if(!Le(t))throw t;e.Va.add(1),await Qc(e),e.fa.set("Offline"),n||(n=()=>Qu(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{w($c,"Retrying IndexedDB access"),await n(),e.Va.delete(1),await Gc(e)})}function ul(e,t){return t().catch(n=>al(e,n,t))}async function cl(e){const t=x(e),n=Il(t);let r=t.Pa.length>0?t.Pa[t.Pa.length-1].batchId:Ge;for(;ll(t);)try{const e=await Ju(t.localStore,r);if(null===e){0===t.Pa.length&&n.B_();break}r=e.batchId,hl(t,e)}catch(e){await al(t,e)}dl(t)&&fl(t)}function ll(e){return tl(e)&&e.Pa.length<10}function hl(e,t){e.Pa.push(t);const n=Il(e);n.x_()&&n.X_&&n.Y_(t.mutations)}function dl(e){return tl(e)&&!Il(e).M_()&&e.Pa.length>0}function fl(e){Il(e).start()}async function ml(e){Il(e).na()}async function gl(e){const t=Il(e);for(const n of e.Pa)t.Y_(n.mutations)}async function pl(e,t,n){const r=e.Pa.shift(),s=yi.from(r,t,n);await ul(e,()=>e.remoteSyncer.applySuccessfulWrite(s)),await cl(e)}async function yl(e,t){t&&Il(e).X_&&await(async function(e,t){if((function(e){return Ei(e)&&e!==C.ABORTED})(t.code)){const n=e.Pa.shift();Il(e).N_(),await ul(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await cl(e)}})(e,t),dl(e)&&fl(e)}async function wl(e,t){const n=x(e);n.asyncQueue.verifyOperationInProgress(),w($c,"RemoteStore received new credentials");const r=tl(n);n.Va.add(3),await Qc(n),r&&n.fa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Va.delete(3),await Gc(n)}async function bl(e,t){const n=x(e);t?(n.Va.delete(2),await Gc(n)):t||(n.Va.add(2),await Qc(n),n.fa.set("Unknown"))}function vl(e){return e.pa||(e.pa=(function(e,t,n){const r=x(e);return r.ia(),new Mc(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)
/**
    * @license
    * Copyright 2018 Google LLC
    *
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    *   http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    */})(e.datastore,e.asyncQueue,{Ho:rl.bind(null,e),Xo:sl.bind(null,e),e_:il.bind(null,e),J_:ol.bind(null,e)}),e.da.push(async t=>{t?(e.pa.N_(),el(e)?Zc(e):e.fa.set("Unknown")):(await e.pa.stop(),nl(e))})),e.pa}function Il(e){return e.ya||(e.ya=(function(e,t,n){const r=x(e);return r.ia(),new Uc(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)})(e.datastore,e.asyncQueue,{Ho:()=>Promise.resolve(),Xo:ml.bind(null,e),e_:yl.bind(null,e),ea:gl.bind(null,e),ta:pl.bind(null,e)}),e.da.push(async t=>{t?(e.ya.N_(),await cl(e)):(await e.ya.stop(),e.Pa.length>0&&(w($c,`Stopping write stream with ${e.Pa.length} pending writes`),e.Pa=[]))})),e.ya
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */}class Tl{constructor(e,t,n,r,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=s,this.deferred=new N,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,s){const i=Date.now()+n,o=new Tl(e,t,i,r,s);return o.start(n),o}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new D(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function El(e,t){if(b("AsyncQueue",`${t}: ${e}`),Le(e))return new D(C.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class Sl{static emptySet(e){return new Sl(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||ee.comparator(t.key,n.key):(e,t)=>ee.comparator(e.key,t.key),this.keyedMap=Es(),this.sortedSet=new gn(this.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Sl))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new Sl;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class _l{constructor(){this.wa=new gn(ee.comparator)}track(e){const t=e.doc.key,n=this.wa.get(t);n?0!==e.type&&3===n.type?this.wa=this.wa.insert(t,e):3===e.type&&1!==n.type?this.wa=this.wa.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.wa=this.wa.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.wa=this.wa.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.wa=this.wa.remove(t):1===e.type&&2===n.type?this.wa=this.wa.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.wa=this.wa.insert(t,{type:2,doc:e.doc}):T(63341,{At:e,Sa:n}):this.wa=this.wa.insert(t,e)}ba(){const e=[];return this.wa.inorderTraversal((t,n)=>{e.push(n)}),e}}class xl{constructor(e,t,n,r,s,i,o,a,u){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=s,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=u}static fromInitialDocuments(e,t,n,r,s){const i=[];return t.forEach(e=>{i.push({type:0,doc:e})}),new xl(e,t,Sl.emptySet(t),i,n,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ds(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class Cl{constructor(){this.Da=void 0,this.Ca=[]}va(){return this.Ca.some(e=>e.Fa())}}class Dl{constructor(){this.queries=Nl(),this.onlineState="Unknown",this.Ma=new Set}terminate(){!(function(e,t){const n=x(e),r=n.queries;n.queries=Nl(),r.forEach((e,n)=>{for(const e of n.Ca)e.onError(t)})})(this,new D(C.ABORTED,"Firestore shutting down"))}}function Nl(){return new bs(e=>fs(e),ds)}async function Al(e,t){const n=x(e);let r=3;const s=t.query;let i=n.queries.get(s);i?!i.va()&&t.Fa()&&(r=2):(i=new Cl,r=t.Fa()?0:1);try{switch(r){case 0:i.Da=await n.onListen(s,!0);break;case 1:i.Da=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(e){const n=El(e,`Initialization of query '${ms(t.query)}' failed`);return void t.onError(n)}n.queries.set(s,i),i.Ca.push(t),t.xa(n.onlineState),i.Da&&t.Oa(i.Da)&&Vl(n)}async function kl(e,t){const n=x(e),r=t.query;let s=3;const i=n.queries.get(r);if(i){const e=i.Ca.indexOf(t);e>=0&&(i.Ca.splice(e,1),0===i.Ca.length?s=t.Fa()?0:1:!i.va()&&t.Fa()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Ol(e,t){const n=x(e);let r=!1;for(const e of t){const t=e.query,s=n.queries.get(t);if(s){for(const t of s.Ca)t.Oa(e)&&(r=!0);s.Da=e}}r&&Vl(n)}function Pl(e,t,n){const r=x(e),s=r.queries.get(t);if(s)for(const e of s.Ca)e.onError(n);r.queries.delete(t)}function Vl(e){e.Ma.forEach(e=>{e.next()})}var Rl,Fl;(Fl=Rl||(Rl={})).Na="default",Fl.Cache="cache";class Ll{constructor(e,t,n){this.query=e,this.Ba=t,this.La=!1,this.ka=null,this.onlineState="Unknown",this.options=n||{}}Oa(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new xl(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.La?this.qa(e)&&(this.Ba.next(e),t=!0):this.Ka(e,this.onlineState)&&(this.Ua(e),t=!0),this.ka=e,t}onError(e){this.Ba.error(e)}xa(e){this.onlineState=e;let t=!1;return this.ka&&!this.La&&this.Ka(this.ka,e)&&(this.Ua(this.ka),t=!0),t}Ka(e,t){if(!e.fromCache)return!0;if(!this.Fa())return!0;const n="Offline"!==t;return(!this.options.$a||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}qa(e){if(e.docChanges.length>0)return!0;const t=this.ka&&this.ka.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Ua(e){e=xl.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.La=!0,this.Ba.next(e)}Fa(){return this.options.source!==Rl.Cache}}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class Ml{constructor(e,t){this.Wa=e,this.byteLength=t}Qa(){return"metadata"in this.Wa}}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class Ul{constructor(e){this.serializer=e}ks(e){return no(this.serializer,e)}qs(e){return e.metadata.exists?co(this.serializer,e.document,!1):wr.newNoDocument(this.ks(e.metadata.name),this.Ks(e.metadata.readTime))}Ks(e){return Yi(e)}}class jl{constructor(e,t){this.Ga=e,this.serializer=t,this.za=[],this.ja=[],this.collectionGroups=new Set,this.progress=ql(e)}get queries(){return this.za}get documents(){return this.ja}Ja(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Wa.namedQuery)this.za.push(e.Wa.namedQuery);else if(e.Wa.documentMetadata){this.ja.push({metadata:e.Wa.documentMetadata}),e.Wa.documentMetadata.exists||++t;const n=Y.fromString(e.Wa.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.Wa.document&&(this.ja[this.ja.length-1].document=e.Wa.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,{...this.progress}):null}Ha(e){const t=new Map,n=new Ul(this.serializer);for(const r of e)if(r.metadata.queries){const e=n.ks(r.metadata.name);for(const n of r.metadata.queries){const r=(t.get(n)||As()).add(e);t.set(n,r)}}return t}async Za(e){const t=await rc(e,new Ul(this.serializer),this.ja,this.Ga.id),n=this.Ha(this.documents);for(const t of this.za)await sc(e,t,n.get(t.name));return this.progress.taskState="Success",{progress:this.progress,Xa:this.collectionGroups,Ya:t}}}function ql(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class Bl{constructor(e){this.key=e}}class zl{constructor(e){this.key=e}}class $l{constructor(e,t){this.query=e,this.eu=t,this.tu=null,this.hasCachedResults=!1,this.current=!1,this.nu=As(),this.mutatedKeys=As(),this.ru=ys(e),this.iu=new Sl(this.ru)}get su(){return this.eu}ou(e,t){const n=t?t._u:new _l,r=t?t.iu:this.iu;let s=t?t.mutatedKeys:this.mutatedKeys,i=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,u="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{const c=r.get(e),l=gs(this.query,t)?t:null,h=!!c&&this.mutatedKeys.has(c.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;c&&l?c.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.au(c,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.ru(l,a)>0||u&&this.ru(l,u)<0)&&(o=!0)):!c&&l?(n.track({type:0,doc:l}),f=!0):c&&!l&&(n.track({type:1,doc:c}),f=!0,(a||u)&&(o=!0)),f&&(l?(i=i.add(l),s=d?s.add(e):s.delete(e)):(i=i.delete(e),s=s.delete(e)))}),null!==this.query.limit)for(;i.size>this.query.limit;){const e="F"===this.query.limitType?i.last():i.first();i=i.delete(e.key),s=s.delete(e.key),n.track({type:1,doc:e})}return{iu:i,_u:n,Ss:o,mutatedKeys:s}}au(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){const s=this.iu;this.iu=e.iu,this.mutatedKeys=e.mutatedKeys;const i=e._u.ba();i.sort((e,t)=>(function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return T(20277,{At:e})}};return n(e)-n(t)}
/**
      * @license
      * Copyright 2020 Google LLC
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */)(e.type,t.type)||this.ru(e.doc,t.doc)),this.uu(n),r=r??!1;const o=t&&!r?this.cu():[],a=0===this.nu.size&&this.current&&!r?1:0,u=a!==this.tu;return this.tu=a,0!==i.length||u?{snapshot:new xl(this.query,e.iu,s,i,e.mutatedKeys,0===a,u,!1,!!n&&n.resumeToken.approximateByteSize()>0),lu:o}:{lu:o}}xa(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({iu:this.iu,_u:new _l,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{lu:[]}}hu(e){return!this.eu.has(e)&&!!this.iu.has(e)&&!this.iu.get(e).hasLocalMutations}uu(e){e&&(e.addedDocuments.forEach(e=>this.eu=this.eu.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.eu=this.eu.delete(e)),this.current=e.current)}cu(){if(!this.current)return[];const e=this.nu;this.nu=As(),this.iu.forEach(e=>{this.hu(e.key)&&(this.nu=this.nu.add(e.key))});const t=[];return e.forEach(e=>{this.nu.has(e)||t.push(new zl(e))}),this.nu.forEach(n=>{e.has(n)||t.push(new Bl(n))}),t}Pu(e){this.eu=e.Ls,this.nu=As();const t=this.ou(e.documents);return this.applyChanges(t,!0)}Tu(){return xl.fromInitialDocuments(this.query,this.iu,this.mutatedKeys,0===this.tu,this.hasCachedResults)}}const Kl="SyncEngine";class Gl{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Ql{constructor(e){this.key=e,this.Iu=!1}}class Hl{constructor(e,t,n,r,s,i){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=i,this.Eu={},this.Ru=new bs(e=>fs(e),ds),this.Au=new Map,this.Vu=new Set,this.du=new gn(ee.comparator),this.mu=new Map,this.fu=new yu,this.gu={},this.pu=new Map,this.yu=za._r(),this.onlineState="Unknown",this.wu=void 0}get isPrimaryClient(){return!0===this.wu}}async function Wl(e,t,n=!0){const r=Ch(e);let s;const i=r.Ru.get(t);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Tu()):s=await Yl(r,t,n,!0),s}async function Jl(e,t){const n=Ch(e);await Yl(n,t,!0,!1)}async function Yl(e,t,n,r){const s=await Yu(e.localStore,ss(t)),i=s.targetId,o=e.sharedClientState.addLocalQueryTarget(i,n);let a;return r&&(a=await Xl(e,t,i,"current"===o,s.resumeToken)),e.isPrimaryClient&&n&&Wc(e.remoteStore,s),a}async function Xl(e,t,n,r,s){e.Su=(t,n,r)=>(async function(e,t,n,r){let s=t.view.ou(n);s.Ss&&(s=await Zu(e.localStore,t.query,!1).then(({documents:e})=>t.view.ou(e,s)));const i=r&&r.targetChanges.get(t.targetId),o=r&&null!=r.targetMismatches.get(t.targetId),a=t.view.applyChanges(s,e.isPrimaryClient,i,o);return dh(e,t.targetId,a.lu),a.snapshot})(e,t,n,r);const i=await Zu(e.localStore,t,!0),o=new $l(t,i.Ls),a=o.ou(i.documents),u=Vi.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,s),c=o.applyChanges(a,e.isPrimaryClient,u);dh(e,n,c.lu);const l=new Gl(t,n,o);return e.Ru.set(t,l),e.Au.has(n)?e.Au.get(n).push(t):e.Au.set(n,[t]),c.snapshot}async function Zl(e,t,n){const r=x(e),s=r.Ru.get(t),i=r.Au.get(s.targetId);if(i.length>1)return r.Au.set(s.targetId,i.filter(e=>!ds(e,t))),void r.Ru.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Xu(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Jc(r.remoteStore,s.targetId),lh(r,s.targetId)}).catch(Ne)):(lh(r,s.targetId),await Xu(r.localStore,s.targetId,!0))}async function eh(e,t){const n=x(e),r=n.Ru.get(t),s=n.Au.get(r.targetId);n.isPrimaryClient&&1===s.length&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Jc(n.remoteStore,r.targetId))}async function th(e,t,n){const r=Dh(e);try{const e=await(function(e,t){const n=x(e),r=fe.now(),s=t.reduce((e,t)=>e.add(t.key),As());let i,o;return n.persistence.runTransaction("Locally write mutations","readwrite",e=>{let a=Is(),u=As();return n.Ms.getEntries(e,s).next(e=>{a=e,a.forEach((e,t)=>{t.isValidDocument()||(u=u.add(e))})}).next(()=>n.localDocuments.getOverlayedDocuments(e,a)).next(s=>{i=s;const o=[];for(const e of t){const t=ai(e,i.get(e.key).overlayedDocument);null!=t&&o.push(new li(e.key,t,yr(t.value.mapValue),ti.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)}).next(t=>{o=t;const r=t.applyToLocalDocumentSet(i,u);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)})}).then(()=>({batchId:o.batchId,changes:Ss(i)}))})(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),(function(e,t,n){let r=e.gu[e.currentUser.toKey()];r||(r=new gn(q)),r=r.insert(t,n),e.gu[e.currentUser.toKey()]=r})(r,e.batchId,n),await gh(r,e.changes),await cl(r.remoteStore)}catch(e){const t=El(e,"Failed to persist write");n.reject(t)}}async function nh(e,t){const n=x(e);try{const e=await Hu(n.localStore,t);t.targetChanges.forEach((e,t)=>{const r=n.mu.get(t);r&&(S(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1,22616),e.addedDocuments.size>0?r.Iu=!0:e.modifiedDocuments.size>0?S(r.Iu,14607):e.removedDocuments.size>0&&(S(r.Iu,42227),r.Iu=!1))}),await gh(n,e,t)}catch(e){await Ne(e)}}function rh(e,t,n){const r=x(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.Ru.forEach((n,r)=>{const s=r.view.xa(t);s.snapshot&&e.push(s.snapshot)}),(function(e,t){const n=x(e);n.onlineState=t;let r=!1;n.queries.forEach((e,n)=>{for(const e of n.Ca)e.xa(t)&&(r=!0)}),r&&Vl(n)})(r.eventManager,t),e.length&&r.Eu.J_(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function sh(e,t,n){const r=x(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.mu.get(t),i=s&&s.key;if(i){let e=new gn(ee.comparator);e=e.insert(i,wr.newNoDocument(i,me.min()));const n=As().add(i),s=new Pi(me.min(),new Map,new gn(q),e,n);await nh(r,s),r.du=r.du.remove(i),r.mu.delete(t),mh(r)}else await Xu(r.localStore,t,!1).then(()=>lh(r,t,n)).catch(Ne)}async function ih(e,t){const n=x(e),r=t.batch.batchId;try{const e=await Gu(n.localStore,t);ch(n,r,null),uh(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await gh(n,e)}catch(e){await Ne(e)}}async function oh(e,t,n){const r=x(e);try{const e=await(function(e,t){const n=x(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next(t=>(S(null!==t,37113),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t))).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r)).next(()=>n.localDocuments.getDocuments(e,r))})})(r.localStore,t);ch(r,t,n),uh(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await gh(r,e)}catch(n){await Ne(n)}}async function ah(e,t){const n=x(e);tl(n.remoteStore)||w(Kl,"The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const e=await(function(e){const t=x(e);return t.persistence.runTransaction("Get highest unacknowledged batch id","readonly",e=>t.mutationQueue.getHighestUnacknowledgedBatchId(e))})(n.localStore);if(e===Ge)return void t.resolve();const r=n.pu.get(e)||[];r.push(t),n.pu.set(e,r)}catch(e){const n=El(e,"Initialization of waitForPendingWrites() operation failed");t.reject(n)}}function uh(e,t){(e.pu.get(t)||[]).forEach(e=>{e.resolve()}),e.pu.delete(t)}function ch(e,t,n){const r=x(e);let s=r.gu[r.currentUser.toKey()];if(s){const e=s.get(t);e&&(n?e.reject(n):e.resolve(),s=s.remove(t)),r.gu[r.currentUser.toKey()]=s}}function lh(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Au.get(t))e.Ru.delete(r),n&&e.Eu.bu(r,n);e.Au.delete(t),e.isPrimaryClient&&e.fu.Qr(t).forEach(t=>{e.fu.containsKey(t)||hh(e,t)})}function hh(e,t){e.Vu.delete(t.path.canonicalString());const n=e.du.get(t);null!==n&&(Jc(e.remoteStore,n),e.du=e.du.remove(t),e.mu.delete(n),mh(e))}function dh(e,t,n){for(const r of n)r instanceof Bl?(e.fu.addReference(r.key,t),fh(e,r)):r instanceof zl?(w(Kl,"Document no longer in limbo: "+r.key),e.fu.removeReference(r.key,t),e.fu.containsKey(r.key)||hh(e,r.key)):T(19791,{Du:r})}function fh(e,t){const n=t.key,r=n.path.canonicalString();e.du.get(n)||e.Vu.has(r)||(w(Kl,"New document in limbo: "+n),e.Vu.add(r),mh(e))}function mh(e){for(;e.Vu.size>0&&e.du.size<e.maxConcurrentLimboResolutions;){const t=e.Vu.values().next().value;e.Vu.delete(t);const n=new ee(Y.fromString(t)),r=e.yu.next();e.mu.set(r,new Ql(n)),e.du=e.du.insert(n,r),Wc(e.remoteStore,new Vo(ss(Zr(n.path)),r,"TargetPurposeLimboResolution",Ke.ce))}}async function gh(e,t,n){const r=x(e),s=[],i=[],o=[];r.Ru.isEmpty()||(r.Ru.forEach((e,a)=>{o.push(r.Su(a,t,n).then(e=>{if((e||n)&&r.isPrimaryClient){const t=e?!e.fromCache:n?.targetChanges.get(a.targetId)?.current;r.sharedClientState.updateQueryState(a.targetId,t?"current":"not-current")}if(e){s.push(e);const t=Mu.Is(a.targetId,e);i.push(t)}}))}),await Promise.all(o),r.Eu.J_(s),await(async function(e,t){const n=x(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>Ae.forEach(t,t=>Ae.forEach(t.Ps,r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r)).next(()=>Ae.forEach(t.Ts,r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))}catch(e){if(!Le(e))throw e;w(qu,"Failed to update sequence numbers: "+e)}for(const e of t){const t=e.targetId;if(!e.fromCache){const e=n.Cs.get(t),r=e.snapshotVersion,s=e.withLastLimboFreeSnapshotVersion(r);n.Cs=n.Cs.insert(t,s)}}})(r.localStore,i))}async function ph(e,t){const n=x(e);if(!n.currentUser.isEqual(t)){w(Kl,"User change. New user:",t.toKey());const e=await Ku(n.localStore,t);n.currentUser=t,(function(e,t){e.pu.forEach(e=>{e.forEach(e=>{e.reject(new D(C.CANCELLED,t))})}),e.pu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await gh(n,e.Os)}}function yh(e,t){const n=x(e),r=n.mu.get(t);if(r&&r.Iu)return As().add(r.key);{let e=As();const r=n.Au.get(t);if(!r)return e;for(const t of r){const r=n.Ru.get(t);e=e.unionWith(r.view.su)}return e}}async function wh(e,t){const n=x(e),r=await Zu(n.localStore,t.query,!0),s=t.view.Pu(r);return n.isPrimaryClient&&dh(n,t.targetId,s.lu),s}async function bh(e,t){const n=x(e);return tc(n.localStore,t).then(e=>gh(n,e))}async function vh(e,t,n,r){const s=x(e),i=await(function(e,t){const n=x(e),r=x(n.mutationQueue);return n.persistence.runTransaction("Lookup mutation documents","readonly",e=>r.Zn(e,t).next(t=>t?n.localDocuments.getDocuments(e,t):Ae.resolve(null)))})(s.localStore,t);null!==i?("pending"===n?await cl(s.remoteStore):"acknowledged"===n||"rejected"===n?(ch(s,t,r||null),uh(s,t),(function(e,t){x(x(e).mutationQueue).tr(t)})(s.localStore,t)):T(6720,"Unknown batchState",{Cu:n}),await gh(s,i)):w(Kl,"Cannot apply mutation batch with id: "+t)}async function Ih(e,t){const n=x(e);if(Ch(n),Dh(n),!0===t&&!0!==n.wu){const e=n.sharedClientState.getAllActiveQueryTargets(),t=await Th(n,e.toArray());n.wu=!0,await bl(n.remoteStore,!0);for(const e of t)Wc(n.remoteStore,e)}else if(!1===t&&!1!==n.wu){const e=[];let t=Promise.resolve();n.Au.forEach((r,s)=>{n.sharedClientState.isLocalQueryTarget(s)?e.push(s):t=t.then(()=>(lh(n,s),Xu(n.localStore,s,!0))),Jc(n.remoteStore,s)}),await t,await Th(n,e),(function(e){const t=x(e);t.mu.forEach((e,n)=>{Jc(t.remoteStore,n)}),t.fu.Gr(),t.mu=new Map,t.du=new gn(ee.comparator)})(n),n.wu=!1,await bl(n.remoteStore,!1)}}async function Th(e,t,n){const r=x(e),s=[],i=[];for(const e of t){let t;const n=r.Au.get(e);if(n&&0!==n.length){t=await Yu(r.localStore,ss(n[0]));for(const e of n){const t=r.Ru.get(e),n=await wh(r,t);n.snapshot&&i.push(n.snapshot)}}else{const n=await ec(r.localStore,e);t=await Yu(r.localStore,n),await Xl(r,Eh(n),e,!1,t.resumeToken)}s.push(t)}return r.Eu.J_(i),s}function Eh(e){return Xr(e.path,e.collectionGroup,e.orderBy,e.filters,e.limit,"F",e.startAt,e.endAt)}function Sh(e){return(function(e){return x(x(e).persistence).ls()})(x(e).localStore)}async function _h(e,t,n,r){const s=x(e);if(s.wu)return void w(Kl,"Ignoring unexpected query state notification.");const i=s.Au.get(t);if(i&&i.length>0)switch(n){case"current":case"not-current":{const e=await tc(s.localStore,ps(i[0])),r=Pi.createSynthesizedRemoteEventForCurrentChange(t,"current"===n,Sn.EMPTY_BYTE_STRING);await gh(s,e,r);break}case"rejected":await Xu(s.localStore,t,!0),lh(s,t,r);break;default:T(64155,n)}}async function xh(e,t,n){const r=Ch(e);if(r.wu){for(const e of t){if(r.Au.has(e)&&r.sharedClientState.isActiveQueryTarget(e)){w(Kl,"Adding an already active target "+e);continue}const t=await ec(r.localStore,e),n=await Yu(r.localStore,t);await Xl(r,Eh(t),n.targetId,!1,n.resumeToken),Wc(r.remoteStore,n)}for(const e of n)r.Au.has(e)&&await Xu(r.localStore,e,!1).then(()=>{Jc(r.remoteStore,e),lh(r,e)}).catch(Ne)}}function Ch(e){const t=x(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=nh.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=yh.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=sh.bind(null,t),t.Eu.J_=Ol.bind(null,t.eventManager),t.Eu.bu=Pl.bind(null,t.eventManager),t}function Dh(e){const t=x(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=ih.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=oh.bind(null,t),t}function Nh(e,t,n){const r=x(e);(async function(e,t,n){try{const r=await t.getMetadata();if(await(function(e,t){const n=x(e),r=Yi(t.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",e=>n.hi.getBundleMetadata(e,t.id)).then(e=>!!e&&e.createTime.compareTo(r)>=0)})(e.localStore,r))return await t.close(),n._completeWith((function(e){return{taskState:"Success",documentsLoaded:e.totalDocuments,bytesLoaded:e.totalBytes,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}})(r)),Promise.resolve(new Set);n._updateProgress(ql(r));const s=new jl(r,t.serializer);let i=await t.vu();for(;i;){const e=await s.Ja(i);e&&n._updateProgress(e),i=await t.vu()}const o=await s.Za(e.localStore);return await gh(e,o.Ya,void 0),await(function(e,t){const n=x(e);return n.persistence.runTransaction("Save bundle","readwrite",e=>n.hi.saveBundleMetadata(e,t))})(e.localStore,r),n._completeWith(o.progress),Promise.resolve(o.Xa)}catch(e){return v(Kl,`Loading bundle failed with ${e}`),n._failWith(e),Promise.resolve(new Set)}}
/**
    * @license
    * Copyright 2020 Google LLC
    *
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    *   http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    */)(r,t,n).then(e=>{r.sharedClientState.notifyBundleLoaded(e)})}class Ah{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Vc(e.databaseInfo.databaseId),this.sharedClientState=this.Fu(e),this.persistence=this.Mu(e),await this.persistence.start(),this.localStore=this.xu(e),this.gcScheduler=this.Ou(e,this.localStore),this.indexBackfillerScheduler=this.Nu(e,this.localStore)}Ou(e,t){return null}Nu(e,t){return null}xu(e){return $u(this.persistence,new ju,e.initialUser,this.serializer)}Mu(e){return new Eu(_u.Ai,this.serializer)}Fu(e){return new wc}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ah.provider={build:()=>new Ah};class kh extends Ah{constructor(e){super(),this.cacheSizeBytes=e}Ou(e,t){S(this.persistence.referenceDelegate instanceof xu,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new Xa(n,e.asyncQueue,t)}Mu(e){const t=void 0!==this.cacheSizeBytes?Ra.withCacheSize(this.cacheSizeBytes):Ra.DEFAULT;return new Eu(e=>xu.Ai(e,t),this.serializer)}}class Oh extends Ah{constructor(e,t,n){super(),this.Bu=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Bu.initialize(this,e),await Dh(this.Bu.syncEngine),await cl(this.Bu.remoteStore),await this.persistence.Gi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}xu(e){return $u(this.persistence,new ju,e.initialUser,this.serializer)}Ou(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new Xa(n,e.asyncQueue,t)}Nu(e,t){const n=new $e(t,this.persistence);return new ze(e.asyncQueue,n)}Mu(e){const t=Lu(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?Ra.withCacheSize(this.cacheSizeBytes):Ra.DEFAULT;return new Vu(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,Oc(),Pc(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Fu(e){return new wc}}class Ph extends Oh{constructor(e,t){super(e,t,!1),this.Bu=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Bu.syncEngine;this.sharedClientState instanceof yc&&(this.sharedClientState.syncEngine={So:vh.bind(null,t),bo:_h.bind(null,t),Do:xh.bind(null,t),ls:Sh.bind(null,t),wo:bh.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Gi(async e=>{await Ih(this.Bu.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start():e||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(e&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():e||this.indexBackfillerScheduler.stop())})}Fu(e){const t=Oc();if(!yc.v(t))throw new D(C.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=Lu(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new yc(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class Vh{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>rh(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=ph.bind(null,this.syncEngine),await bl(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Dl}createDatastore(e){const t=Vc(e.databaseInfo.databaseId),n=kc(e.databaseInfo);return Bc(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return(function(e,t,n,r,s){return new Kc(e,t,n,r,s)})(this.localStore,this.datastore,e.asyncQueue,e=>rh(this.syncEngine,e,0),Ic.v()?new Ic:new bc)}createSyncEngine(e,t){return(function(e,t,n,r,s,i,o){const a=new Hl(e,t,n,r,s,i);return o&&(a.wu=!0),a})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(e){const t=x(e);w($c,"RemoteStore shutting down."),t.Va.add(5),await Qc(t),t.ma.shutdown(),t.fa.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}function Rh(e,t=10240){let n=0;return{async read(){if(n<e.byteLength){const r={value:e.slice(n,n+t),done:!1};return n+=t,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */Vh.provider={build:()=>new Vh};class Fh{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Lu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Lu(this.observer.error,e):b("Uncaught Error in snapshot listener:",e.toString()))}ku(){this.muted=!0}Lu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class Lh{constructor(e,t){this.qu=e,this.serializer=t,this.metadata=new N,this.buffer=new Uint8Array,this.Ku=new TextDecoder("utf-8"),this.Uu().then(e=>{e&&e.Qa()?this.metadata.resolve(e.Wa.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is\n             ${JSON.stringify(e?.Wa)}`))},e=>this.metadata.reject(e))}close(){return this.qu.cancel()}async getMetadata(){return this.metadata.promise}async vu(){return await this.getMetadata(),this.Uu()}async Uu(){const e=await this.$u();if(null===e)return null;const t=this.Ku.decode(e),n=Number(t);isNaN(n)&&this.Wu(`length string (${t}) is not valid number`);const r=await this.Qu(n);return new Ml(JSON.parse(r),e.length+n)}Gu(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async $u(){for(;this.Gu()<0&&!await this.zu(););if(0===this.buffer.length)return null;const e=this.Gu();e<0&&this.Wu("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Qu(e){for(;this.buffer.length<e;)await this.zu()&&this.Wu("Reached the end of bundle when more is expected.");const t=this.Ku.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Wu(e){throw this.qu.cancel(),new Error(`Invalid bundle format: ${e}`)}async zu(){const e=await this.qu.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}
/**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class Mh{constructor(e,t){this.bundleData=e,this.serializer=t,this.cursor=0,this.elements=[];let n=this.vu();if(!n||!n.Qa())throw new Error(`The first element of the bundle is not a metadata object, it is\n         ${JSON.stringify(n?.Wa)}`);this.metadata=n;do{n=this.vu(),null!==n&&this.elements.push(n)}while(null!==n)}getMetadata(){return this.metadata}ju(){return this.elements}vu(){if(this.cursor===this.bundleData.length)return null;const e=this.$u(),t=this.Qu(e);return new Ml(JSON.parse(t),e)}Qu(e){if(this.cursor+e>this.bundleData.length)throw new D(C.INTERNAL,"Reached the end of bundle when more is expected.");return this.bundleData.slice(this.cursor,this.cursor+=e)}$u(){const e=this.cursor;let t=this.cursor;for(;t<this.bundleData.length;){if("{"===this.bundleData[t]){if(t===e)throw new Error("First character is a bracket and not a number");return this.cursor=t,Number(this.bundleData.slice(e,t))}t++}throw new Error("Reached the end of bundle when more is expected.")}}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class Uh{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new D(C.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await(async function(e,t){const n=x(e),r={documents:t.map(e=>to(n.serializer,e))},s=await n.zo("BatchGetDocuments",n.serializer.databaseId,Y.emptyPath(),r,t.length),i=new Map;s.forEach(e=>{const t=lo(n.serializer,e);i.set(t.key.toString(),t)});const o=[];return t.forEach(e=>{const t=i.get(e.toString());S(!!t,55234,{key:e}),o.push(t)}),o})(this.datastore,e);return t.forEach(e=>this.recordVersion(e)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(e){this.lastTransactionError=e}this.writtenDocs.add(e.toString())}delete(e){this.write(new mi(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((e,t)=>{const n=ee.fromPath(t);this.mutations.push(new gi(n,this.precondition(n)))}),await(async function(e,t){const n=x(e),r={writes:t.map(e=>fo(n.serializer,e))};await n.$o("Commit",n.serializer.databaseId,Y.emptyPath(),r)})(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw T(50498,{Ju:e.constructor.name});t=me.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new D(C.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(me.min())?ti.exists(!1):ti.updateTime(t):ti.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(me.min()))throw new D(C.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return ti.updateTime(t)}return ti.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}
/**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class jh{constructor(e,t,n,r,s){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=r,this.deferred=s,this.Hu=n.maxAttempts,this.F_=new Rc(this.asyncQueue,"transaction_retry")}Zu(){this.Hu-=1,this.Xu()}Xu(){this.F_.g_(async()=>{const e=new Uh(this.datastore),t=this.Yu(e);t&&t.then(t=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(t)}).catch(e=>{this.ec(e)}))}).catch(e=>{this.ec(e)})})}Yu(e){try{const t=this.updateFunction(e);return!Qe(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}ec(e){this.Hu>0&&this.tc(e)?(this.Hu-=1,this.asyncQueue.enqueueAndForget(()=>(this.Xu(),Promise.resolve()))):this.deferred.reject(e)}tc(e){if("FirebaseError"===e?.name){const t=e.code;return"aborted"===t||"failed-precondition"===t||"already-exists"===t||!Ei(t)}return!1}}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const qh="FirestoreClient";class Bh{constructor(e,t,n,r,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this._databaseInfo=r,this.user=d.UNAUTHENTICATED,this.clientId=j.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(n,async e=>{w(qh,"Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(w(qh,"Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new N;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=El(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function zh(e,t){e.asyncQueue.verifyOperationInProgress(),w(qh,"Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await Ku(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function $h(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Kh(e);w(qh,"Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(e=>wl(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>wl(t.remoteStore,n)),e._onlineComponents=t}async function Kh(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){w(qh,"Using user provided OfflineComponentProvider");try{await zh(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!(function(e){return"FirebaseError"===e.name?e.code===C.FAILED_PRECONDITION||e.code===C.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code})(n))throw n;v("Error using user provided cache. Falling back to memory cache: "+n),await zh(e,new Ah)}}else w(qh,"Using default OfflineComponentProvider"),await zh(e,new kh(void 0));return e._offlineComponents}async function Gh(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(w(qh,"Using user provided OnlineComponentProvider"),await $h(e,e._uninitializedComponentsProvider._online)):(w(qh,"Using default OnlineComponentProvider"),await $h(e,new Vh))),e._onlineComponents}function Qh(e){return Kh(e).then(e=>e.persistence)}function Hh(e){return Kh(e).then(e=>e.localStore)}function Wh(e){return Gh(e).then(e=>e.remoteStore)}function Jh(e){return Gh(e).then(e=>e.syncEngine)}function Yh(e){return Gh(e).then(e=>e.datastore)}async function Xh(e){const t=await Gh(e),n=t.eventManager;return n.onListen=Wl.bind(null,t.syncEngine),n.onUnlisten=Zl.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=Jl.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=eh.bind(null,t.syncEngine),n}function Zh(e){return e.asyncQueue.enqueue(async()=>{const t=await Qh(e),n=await Wh(e);return t.setNetworkEnabled(!0),(function(e){const t=x(e);return t.Va.delete(0),Gc(t)})(n)})}function ed(e){return e.asyncQueue.enqueue(async()=>{const t=await Qh(e),n=await Wh(e);return t.setNetworkEnabled(!1),(async function(e){const t=x(e);t.Va.add(0),await Qc(t),t.fa.set("Offline")})(n)})}function td(e,t,n,r){const s=new Fh(r),i=new Ll(t,s,n);return e.asyncQueue.enqueueAndForget(async()=>Al(await Xh(e),i)),()=>{s.ku(),e.asyncQueue.enqueueAndForget(async()=>kl(await Xh(e),i))}}function nd(e,t){const n=new N;return e.asyncQueue.enqueueAndForget(async()=>(async function(e,t,n){try{const r=await(function(e,t){const n=x(e);return n.persistence.runTransaction("read document","readonly",e=>n.localDocuments.getDocument(e,t))})(e,t);r.isFoundDocument()?n.resolve(r):r.isNoDocument()?n.resolve(null):n.reject(new D(C.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(e){const r=El(e,`Failed to get document '${t} from cache`);n.reject(r)}})(await Hh(e),t,n)),n.promise}function rd(e,t,n={}){const r=new N;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,n,r,s){const i=new Fh({next:a=>{i.ku(),t.enqueueAndForget(()=>kl(e,o));const u=a.docs.has(n);!u&&a.fromCache?s.reject(new D(C.UNAVAILABLE,"Failed to get document because the client is offline.")):u&&a.fromCache&&r&&"server"===r.source?s.reject(new D(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):s.resolve(a)},error:e=>s.reject(e)}),o=new Ll(Zr(n.path),i,{includeMetadataChanges:!0,$a:!0});return Al(e,o)})(await Xh(e),e.asyncQueue,t,n,r)),r.promise}function sd(e,t){const n=new N;return e.asyncQueue.enqueueAndForget(async()=>(async function(e,t,n){try{const r=await Zu(e,t,!0),s=new $l(t,r.Ls),i=s.ou(r.documents),o=s.applyChanges(i,!1);n.resolve(o.snapshot)}catch(e){const r=El(e,`Failed to execute query '${t} against cache`);n.reject(r)}})(await Hh(e),t,n)),n.promise}function id(e,t,n={}){const r=new N;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,n,r,s){const i=new Fh({next:n=>{i.ku(),t.enqueueAndForget(()=>kl(e,o)),n.fromCache&&"server"===r.source?s.reject(new D(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(n)},error:e=>s.reject(e)}),o=new Ll(n,i,{includeMetadataChanges:!0,$a:!0});return Al(e,o)})(await Xh(e),e.asyncQueue,t,n,r)),r.promise}function od(e,t,n){const r=new N;return e.asyncQueue.enqueueAndForget(async()=>{try{const s=await Yh(e);r.resolve((async function(e,t,n){const r=x(e),{request:s,ft:i,parent:o}=wo(r.serializer,is(t),n);r.connection.ko||delete s.parent;const a=(await r.zo("RunAggregationQuery",r.serializer.databaseId,o,s,1)).filter(e=>!!e.result);S(1===a.length,64727);const u=a[0].result?.aggregateFields;return Object.keys(u).reduce((e,t)=>(e[i[t]]=u[t],e),{})})(s,t,n))}catch(e){r.reject(e)}}),r.promise}function ad(e,t){const n=new N;return e.asyncQueue.enqueueAndForget(async()=>{try{const r=await Yh(e);n.resolve((async function(e,t){const n=x(e),r={database:io(n.serializer),structuredPipeline:t._toProto(n.serializer)},s=await n.zo("ExecutePipeline",n.serializer.databaseId,Y.emptyPath(),r),i=[];return s.forEach(e=>{if(e.results&&0!==e.results.length)return e.results.forEach(t=>i.push(uo(n.serializer,e,t)));i.push(uo(n.serializer,e))}),i})(r,t))}catch(e){n.reject(e)}}),n.promise}function ud(e,t){const n=new N;return e.asyncQueue.enqueueAndForget(async()=>th(await Jh(e),t,n)),n.promise}function cd(e,t){const n=new Fh(t);return e.asyncQueue.enqueueAndForget(async()=>(function(e,t){x(e).Ma.add(t),t.next()})(await Xh(e),n)),()=>{n.ku(),e.asyncQueue.enqueueAndForget(async()=>(function(e,t){x(e).Ma.delete(t)})(await Xh(e),n))}}function ld(e,t,n){const r=new N;return e.asyncQueue.enqueueAndForget(async()=>{const s=await Yh(e);new jh(e.asyncQueue,s,n,t,r).Zu()}),r.promise}function hd(e,t,n,r){const s=(function(e,t){let n;return n="string"==typeof e?Ci().encode(e):e,(function(e,t){return new Lh(e,t)})((function(e,t){if(e instanceof Uint8Array)return Rh(e,t);if(e instanceof ArrayBuffer)return Rh(new Uint8Array(e),t);if(e instanceof ReadableStream)return e.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")})(n),t)})(n,Vc(t));e.asyncQueue.enqueueAndForget(async()=>{Nh(await Jh(e),s,r)})}function dd(e,t){return e.asyncQueue.enqueue(async()=>(function(e,t){const n=x(e);return n.persistence.runTransaction("Get named query","readonly",e=>n.hi.getNamedQuery(e,t))})(await Hh(e),t))}function fd(e,t){return(function(e,t){return new Mh(e,t)})(e,t)}function md(e,t){return e.asyncQueue.enqueue(async()=>(async function(e,t){const n=x(e),r=n.indexManager,s=[];return n.persistence.runTransaction("Configure indexes","readwrite",e=>r.getFieldIndexes(e).next(n=>
/**
      * @license
      * Copyright 2017 Google LLC
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */
(function(e,t,n,r,s){e=[...e],t=[...t],e.sort(n),t.sort(n);const i=e.length,o=t.length;let a=0,u=0;for(;a<o&&u<i;){const i=n(e[u],t[a]);i<0?s(e[u++]):i>0?r(t[a++]):(a++,u++)}for(;a<o;)r(t[a++]);for(;u<i;)s(e[u++])})(n,t,be,t=>{s.push(r.addFieldIndex(e,t))},t=>{s.push(r.deleteFieldIndex(e,t))})).next(()=>Ae.waitFor(s)))})(await Hh(e),t))}function gd(e,t){return e.asyncQueue.enqueue(async()=>(function(e,t){x(e).Ds.Rs=t})(await Hh(e),t))}function pd(e){return e.asyncQueue.enqueue(async()=>(function(e){const t=x(e),n=t.indexManager;return t.persistence.runTransaction("Delete All Indexes","readwrite",e=>n.deleteAllFieldIndexes(e))})(await Hh(e)))}
/**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function yd(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */}const wd="ComponentProvider",bd=new Map;function vd(e,t,n,r,s){return new Fn(e,t,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,yd(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const Id="firestore.googleapis.com",Td=!0;class Ed{constructor(e){if(void 0===e.host){if(void 0!==e.ssl)throw new D(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Id,this.ssl=Td}else this.host=e.host,this.ssl=e.ssl??Td;if(this.isUsingEmulator=void 0!==e.emulatorOptions,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=Va;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<Wa)throw new D(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ne("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=yd(e.experimentalLongPollingOptions??{}),(function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new D(C.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new D(C.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new D(C.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
      * @license
      * Copyright 2020 Google LLC
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */)(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(e,t){return e.timeoutSeconds===t.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Sd{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ed({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new D(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new D(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ed(e),this._emulatorOptions=e.emulatorOptions||{},void 0!==e.credentials&&(this._authCredentials=(function(e){if(!e)return new k;switch(e.type){case"firstParty":return new R(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new D(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const t=bd.get(e);t&&(w(wd,"Removing Datastore"),bd.delete(e),t.terminate())})(this),Promise.resolve()}}function _d(e,t,n,r={}){e=ae(e,Sd);const s=(0,u.isCloudWorkstation)(t),i=e._getSettings(),o={...i,emulatorOptions:e._getEmulatorOptions()},a=`${t}:${n}`;s&&(0,u.pingServer)(`https://${a}`),i.host!==Id&&i.host!==a&&v("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...i,host:a,ssl:s,emulatorOptions:r};if(!(0,u.deepEqual)(c,o)&&(e._setSettings(c),r.mockUserToken)){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=d.MOCK_USER;else{t=(0,u.createMockUserToken)(r.mockUserToken,e._app?.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new D(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new d(s)}e._authCredentials=new O(new A(t,n))}}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class xd{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new xd(this.firestore,e,this._query)}}class Cd{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Dd(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Cd(this.firestore,e,this._key)}toJSON(){return{type:Cd._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(le(t,Cd._jsonSchema))return new Cd(e,n||null,new ee(Y.fromString(t.referencePath)))}}Cd._jsonSchemaVersion="firestore/documentReference/1.0",Cd._jsonSchema={type:ce("string",Cd._jsonSchemaVersion),referencePath:ce("string")};class Dd extends xd{constructor(e,t,n){super(e,t,Zr(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Cd(this.firestore,null,new ee(e))}withConverter(e){return new Dd(this.firestore,e,this._path)}}function Nd(e){return e instanceof Dd}function Ad(e,t,...n){if(e=(0,u.getModularInstance)(e),te("collection","path",t),e instanceof Sd){const r=Y.fromString(t,...n);return se(r),new Dd(e,null,r)}{if(!(e instanceof Cd||e instanceof Dd))throw new D(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Y.fromString(t,...n));return se(r),new Dd(e.firestore,null,r)}}function kd(e,t){if(e=ae(e,Sd),te("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new D(C.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new xd(e,null,(function(e){return new Yr(Y.emptyPath(),e)})(t))}function Od(e,t,...n){if(e=(0,u.getModularInstance)(e),1===arguments.length&&(t=j.newId()),te("doc","path",t),e instanceof Sd){const r=Y.fromString(t,...n);return re(r),new Cd(e,null,new ee(r))}{if(!(e instanceof Cd||e instanceof Dd))throw new D(C.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Y.fromString(t,...n));return re(r),new Cd(e.firestore,e instanceof Dd?e.converter:null,new ee(r))}}function Pd(e,t){return e=(0,u.getModularInstance)(e),t=(0,u.getModularInstance)(t),(e instanceof Cd||e instanceof Dd)&&(t instanceof Cd||t instanceof Dd)&&e.firestore===t.firestore&&e.path===t.path&&e.converter===t.converter}function Vd(e,t){return e=(0,u.getModularInstance)(e),t=(0,u.getModularInstance)(t),e instanceof xd&&t instanceof xd&&e.firestore===t.firestore&&ds(e._query,t._query)&&e.converter===t.converter
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */}const Rd="AsyncQueue";class Fd{constructor(e=Promise.resolve()){this.nc=[],this.rc=!1,this.sc=[],this.oc=null,this._c=!1,this.ac=!1,this.uc=[],this.F_=new Rc(this,"async_queue_retry"),this.cc=()=>{const e=Pc();e&&w(Rd,"Visibility state changed to "+e.visibilityState),this.F_.y_()},this.lc=e;const t=Pc();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.cc)}get isShuttingDown(){return this.rc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.hc(),this.Pc(e)}enterRestrictedMode(e){if(!this.rc){this.rc=!0,this.ac=e||!1;const t=Pc();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.cc)}}enqueue(e){if(this.hc(),this.rc)return new Promise(()=>{});const t=new N;return this.Pc(()=>this.rc&&this.ac?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.nc.push(e),this.Tc()))}async Tc(){if(0!==this.nc.length){try{await this.nc[0](),this.nc.shift(),this.F_.reset()}catch(e){if(!Le(e))throw e;w(Rd,"Operation failed with retryable error: "+e)}this.nc.length>0&&this.F_.g_(()=>this.Tc())}}Pc(e){const t=this.lc.then(()=>(this._c=!0,e().catch(e=>{throw this.oc=e,this._c=!1,b("INTERNAL UNHANDLED ERROR: ",Ld(e)),e}).then(e=>(this._c=!1,e))));return this.lc=t,t}enqueueAfterDelay(e,t,n){this.hc(),this.uc.indexOf(e)>-1&&(t=0);const r=Tl.createAndSchedule(this,e,t,n,e=>this.Ic(e));return this.sc.push(r),r}hc(){this.oc&&T(47125,{Ec:Ld(this.oc)})}verifyOperationInProgress(){}async Rc(){let e;do{e=this.lc,await e}while(e!==this.lc)}Ac(e){for(const t of this.sc)if(t.timerId===e)return!0;return!1}Vc(e){return this.Rc().then(()=>{this.sc.sort((e,t)=>e.targetTimeMs-t.targetTimeMs);for(const t of this.sc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Rc()})}dc(e){this.uc.push(e)}Ic(e){const t=this.sc.indexOf(e);this.sc.splice(t,1)}}function Ld(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */}class Md{constructor(){this._progressObserver={},this._taskCompletionResolver=new N,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */const Ud=-1;class jd extends Sd{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new Fd,this._persistenceKey=r?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Fd(e),this._firestoreClient=void 0,await e}}}function qd(e,t,n){n||(n=Ln);const r=(0,a._getProvider)(e,"firestore");if(r.isInitialized(n)){const e=r.getImmediate({identifier:n}),s=r.getOptions(n);if((0,u.deepEqual)(s,t))return e;throw new D(C.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(void 0!==t.cacheSizeBytes&&void 0!==t.localCache)throw new D(C.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(void 0!==t.cacheSizeBytes&&-1!==t.cacheSizeBytes&&t.cacheSizeBytes<Wa)throw new D(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return t.host&&(0,u.isCloudWorkstation)(t.host)&&(0,u.pingServer)(t.host),r.initialize({options:t,instanceIdentifier:n})}function Bd(e,t){const n="object"==typeof e?e:(0,a.getApp)(),r="string"==typeof e?e:t||Ln,s=(0,a._getProvider)(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const e=(0,u.getDefaultEmulatorHostnameAndPort)("firestore");e&&_d(s,...e)}return s}function zd(e){if(e._terminated)throw new D(C.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||$d(e),e._firestoreClient}function $d(e){const t=e._freezeSettings(),n=vd(e._databaseId,e._app?.options.appId||"",e._persistenceKey,e._app?.options.apiKey,t);e._componentsProvider||t.localCache?._offlineComponentProvider&&t.localCache?._onlineComponentProvider&&(e._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),e._firestoreClient=new Bh(e._authCredentials,e._appCheckCredentials,e._queue,n,e._componentsProvider&&(function(e){const t=e?._online.build();return{_offline:e?._offline.build(t),_online:t}})(e._componentsProvider))}function Kd(e,t){v("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=e._freezeSettings();return Qd(e,Vh.provider,{build:e=>new Oh(e,n.cacheSizeBytes,t?.forceOwnership)}),Promise.resolve()}async function Gd(e){v("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=e._freezeSettings();Qd(e,Vh.provider,{build:e=>new Ph(e,t.cacheSizeBytes)})}function Qd(e,t,n){if((e=ae(e,jd))._firestoreClient||e._terminated)throw new D(C.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(e._componentsProvider||e._getSettings().localCache)throw new D(C.FAILED_PRECONDITION,"SDK cache is already specified.");e._componentsProvider={_online:t,_offline:n},$d(e)}function Hd(e){if(e._initialized&&!e._terminated)throw new D(C.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const t=new N;return e._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await(async function(e){if(!Pe.v())return Promise.resolve();const t=e+Pu;await Pe.delete(t)})(Lu(e._databaseId,e._persistenceKey)),t.resolve()}catch(e){t.reject(e)}}),t.promise}function Wd(e){return(function(e){const t=new N;return e.asyncQueue.enqueueAndForget(async()=>ah(await Jh(e),t)),t.promise})(zd(e=ae(e,jd)))}function Jd(e){return Zh(zd(e=ae(e,jd)))}function Yd(e){return ed(zd(e=ae(e,jd)))}function Xd(e){return(0,a._removeServiceInstance)(e.app,"firestore",e._databaseId.database),e._delete()}function Zd(e,t){const n=zd(e=ae(e,jd)),r=new Md;return hd(n,e._databaseId,t,r),r}function ef(e,t){return dd(zd(e=ae(e,jd)),t).then(t=>t?new xd(e,null,t.query):null)}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class tf{constructor(e){this._byteString=e}static fromBase64String(e){try{return new tf(Sn.fromBase64String(e))}catch(e){throw new D(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new tf(Sn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:tf._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(le(e,tf._jsonSchema))return tf.fromBase64String(e.bytes)}}tf._jsonSchemaVersion="firestore/bytes/1.0",tf._jsonSchema={type:ce("string",tf._jsonSchemaVersion),bytes:ce("string")};
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
class nf{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new D(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Z(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function rf(){return new nf(W)}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class sf{constructor(e){this._methodName=e}}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class of{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new D(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new D(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return q(this._lat,e._lat)||q(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:of._jsonSchemaVersion}}static fromJSON(e){if(le(e,of._jsonSchema))return new of(e.latitude,e.longitude)}}of._jsonSchemaVersion="firestore/geoPoint/1.0",of._jsonSchema={type:ce("string",of._jsonSchemaVersion),latitude:ce("number"),longitude:ce("number")};
/**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
class af{constructor(e){this._values=(e||[]).map(e=>e)}toArray(){return this._values.map(e=>e)}isEqual(e){return(function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0})(this._values,e._values)}toJSON(){return{type:af._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(le(e,af._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(e=>"number"==typeof e))return new af(e.vectorValues);throw new D(C.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}af._jsonSchemaVersion="firestore/vectorValue/1.0",af._jsonSchema={type:ce("string",af._jsonSchemaVersion),vectorValues:ce("object")};
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
const uf=/^__.*__$/;class cf{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new li(e,this.data,this.fieldMask,t,this.fieldTransforms):new ci(e,this.data,t,this.fieldTransforms)}}class lf{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new li(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function hf(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw T(40011,{dataSource:e})}}class df{constructor(e,t,n,r,s,i){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===s&&this.mc(),this.fieldTransforms=s||[],this.fieldMask=i||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new df({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}gc(e){const t=this.path?.child(e),n=this.i({path:t,arrayElement:!1});return n.yc(e),n}wc(e){const t=this.path?.child(e),n=this.i({path:t,arrayElement:!1});return n.mc(),n}Sc(e){return this.i({path:void 0,arrayElement:!0})}bc(e){return Vf(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}mc(){if(this.path)for(let e=0;e<this.path.length;e++)this.yc(this.path.get(e))}yc(e){if(0===e.length)throw this.bc("Document fields must not be empty");if(hf(this.dataSource)&&uf.test(e))throw this.bc('Document fields cannot begin and end with "__"')}}class ff{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Vc(e)}V(e,t,n,r=!1){return new df({dataSource:e,methodName:t,targetDoc:n,path:Z.emptyPath(),arrayElement:!1,hasConverter:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function mf(e){const t=e._freezeSettings(),n=Vc(e._databaseId);return new ff(e._databaseId,!!t.ignoreUndefinedProperties,n)}function gf(e,t,n,r,s,i={}){const o=e.V(i.merge||i.mergeFields?2:0,t,n,s);Af("Data must be an object, but it was:",o,r);const a=Df(r,o);let u,c;if(i.merge)u=new In(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const e=[];for(const r of i.mergeFields){const s=kf(t,r,n);if(!o.contains(s))throw new D(C.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);Rf(e,s)||e.push(s)}u=new In(e),c=o.fieldTransforms.filter(e=>u.covers(e.field))}else u=null,c=o.fieldTransforms;return new cf(new pr(a),u,c)}class pf extends sf{_toFieldTransform(e){if(2!==e.dataSource)throw 1===e.dataSource?e.bc(`${this._methodName}() can only appear at the top level of your update data`):e.bc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof pf}}function yf(e,t,n){return new df({dataSource:3,targetDoc:t.settings.targetDoc,methodName:e._methodName,arrayElement:n},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class wf extends sf{_toFieldTransform(e){return new Xs(e.path,new js)}isEqual(e){return e instanceof wf}}class bf extends sf{constructor(e,t){super(e),this.Cc=t}_toFieldTransform(e){const t=yf(this,e,!0),n=this.Cc.map(e=>Cf(e,t)),r=new qs(n);return new Xs(e.path,r)}isEqual(e){return e instanceof bf&&(0,u.deepEqual)(this.Cc,e.Cc)}}class vf extends sf{constructor(e,t){super(e),this.Cc=t}_toFieldTransform(e){const t=yf(this,e,!0),n=this.Cc.map(e=>Cf(e,t)),r=new zs(n);return new Xs(e.path,r)}isEqual(e){return e instanceof vf&&(0,u.deepEqual)(this.Cc,e.Cc)}}class If extends sf{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=new Gs(e.serializer,Rs(e.serializer,this.vc));return new Xs(e.path,t)}isEqual(e){return e instanceof If&&(this.vc===e.vc||Number.isNaN(this.vc)&&Number.isNaN(e.vc))}}class Tf extends sf{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=new Qs(e.serializer,Rs(e.serializer,this.vc));return new Xs(e.path,t)}isEqual(e){return e instanceof Tf&&(this.vc===e.vc||Number.isNaN(this.vc)&&Number.isNaN(e.vc))}}class Ef extends sf{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=new Hs(e.serializer,Rs(e.serializer,this.vc));return new Xs(e.path,t)}isEqual(e){return e instanceof Ef&&(this.vc===e.vc||Number.isNaN(this.vc)&&Number.isNaN(e.vc))}}function Sf(e,t,n,r){const s=e.V(1,t,n);Af("Data must be an object, but it was:",s,r);const i=[],o=pr.empty();dn(r,(e,r)=>{const a=Pf(t,e,n);r=(0,u.getModularInstance)(r);const c=s.wc(a);if(r instanceof pf)i.push(a);else{const e=Cf(r,c);null!=e&&(i.push(a),o.set(a,e))}});const a=new In(i);return new lf(o,a,s.fieldTransforms)}function _f(e,t,n,r,s,i){const o=e.V(1,t,n),a=[kf(t,r,n)],c=[s];if(i.length%2!=0)throw new D(C.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<i.length;e+=2)a.push(kf(t,i[e])),c.push(i[e+1]);const l=[],h=pr.empty();for(let e=a.length-1;e>=0;--e)if(!Rf(l,a[e])){const t=a[e];let n=c[e];n=(0,u.getModularInstance)(n);const r=o.wc(t);if(n instanceof pf)l.push(t);else{const e=Cf(n,r);null!=e&&(l.push(t),h.set(t,e))}}const d=new In(l);return new lf(h,d,o.fieldTransforms)}function xf(e,t,n,r=!1){return Cf(n,e.V(r?4:3,t))}function Cf(e,t){if(Nf(e=(0,u.getModularInstance)(e)))return Af("Unsupported field value:",t,e),Df(e,t);if(e instanceof sf)return(function(e,t){if(!hf(t.dataSource))throw t.bc(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.bc(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)})(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.arrayElement&&4!==t.dataSource)throw t.bc("Nested arrays are not supported");return(function(e,t){const n=[];let r=0;for(const s of e){let e=Cf(s,t.Sc(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}})(e,t)}return(function(e,t){if(null===(e=(0,u.getModularInstance)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Rs(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=fe.fromDate(e);return{timestampValue:Hi(t.serializer,n)}}if(e instanceof fe){const n=new fe(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Hi(t.serializer,n)}}if(e instanceof of)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof tf)return{bytesValue:Wi(t.serializer,e._byteString)};if(e instanceof Cd){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.bc(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Xi(e.firestore._databaseId||t.databaseId,e._key.path)}}if(e instanceof af)return(function(e,t){const n=e instanceof af?e.toArray():e,r={fields:{[jn]:{stringValue:zn},[$n]:{arrayValue:{values:n.map(e=>{if("number"!=typeof e)throw t.bc("VectorValues must only contain numeric values.");return Ps(t.serializer,e)})}}}};return{mapValue:r}})(e,t);if(Ao(e))return e._toProto(t.serializer);throw t.bc(`Unsupported field value: ${oe(e)}`)})(e,t)}function Df(e,t){const n={};return mn(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):dn(e,(e,r)=>{const s=Cf(r,t.gc(e));null!=s&&(n[e]=s)}),{mapValue:{fields:n}}}function Nf(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof fe||e instanceof of||e instanceof tf||e instanceof Cd||e instanceof sf||e instanceof af||Ao(e))}function Af(e,t,n){if(!Nf(n)||!ie(n)){const r=oe(n);throw"an object"===r?t.bc(e+" a custom object"):t.bc(e+" "+r)}}function kf(e,t,n){if((t=(0,u.getModularInstance)(t))instanceof nf)return t._internalPath;if("string"==typeof t)return Pf(e,t);throw Vf("Field path arguments must be of type string or ",e,!1,void 0,n)}const Of=new RegExp("[~\\*/\\[\\]]");function Pf(e,t,n){if(t.search(Of)>=0)throw Vf(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new nf(...t.split("."))._internalPath}catch(r){throw Vf(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Vf(e,t,n,r,s){const i=r&&!r.isEmpty(),o=void 0!==s;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new D(C.INVALID_ARGUMENT,a+e+u)}function Rf(e,t){return e.some(e=>e.isEqual(t))}function Ff(e){return"function"==typeof e._readUserData}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class Lf{convertValue(e,t="none"){switch(Gn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Cn(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Dn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw T(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return dn(e,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertVectorValue(e){const t=e.fields?.[$n].arrayValue?.values?.map(e=>Cn(e.doubleValue));return new af(t)}convertGeoPoint(e){return new of(Cn(e.latitude),Cn(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Vn(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Rn(e));default:return null}}convertTimestamp(e){const t=xn(e);return new fe(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Y.fromString(e);S(No(n),9688,{name:e});const r=new Mn(n.get(1),n.get(3)),s=new ee(n.popFirst(5));return r.isEqual(t)||b(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}
/**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class Mf extends Lf{constructor(e){super(),this.firestore=e}convertBytes(e){return new tf(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Cd(this.firestore,null,t)}}
/**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function Uf(){return new pf("deleteField")}function jf(){return new wf("serverTimestamp")}function qf(...e){return new bf("arrayUnion",e)}function Bf(...e){return new vf("arrayRemove",e)}function zf(e){return new If("increment",e)}function $f(e){return new Tf("minimum",e)}function Kf(e){return new Ef("maximum",e)}function Gf(e){return new af(e)}
/**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class Qf{constructor(e){this.optionDefinitions=e}_getKnownOptions(e,t){const n=pr.empty();for(const r in this.optionDefinitions)if(this.optionDefinitions.hasOwnProperty(r)){const s=this.optionDefinitions[r];if(r in e){const i=e[r];let o;s.nestedOptions&&ie(i)?o={mapValue:{fields:new Qf(s.nestedOptions).getOptionsProto(t,i)}}:i&&(o=Cf(i,t)??void 0),o&&n.set(Z.fromServerFormat(s.serverName),o)}}return n}getOptionsProto(e,t,n){const r=this._getKnownOptions(t,e);if(n){const t=new Map(fn(n,(t,n)=>[Z.fromServerFormat(n),void 0!==t?Cf(t,e):null]));r.setAll(t)}return r.value.mapValue.fields??{}}}
/**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */class Hf{constructor(e={},t={}){this.Fc=e,this.Mc=t,this.xc=new Qf({indexMode:{serverName:"index_mode"}})}_readUserData(e){this.proto=this.xc.getOptionsProto(e,this.Fc,this.Mc)}}class Wf{constructor(e,t){this.pipeline=e,this.options=t}_toProto(e){return{pipeline:this.pipeline._toProto(e),options:this.options.proto}}}
/**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */function Jf(e){const t=zd(ae(e.firestore,jd)),n=t._onlineComponents?.datastore.serializer;return void 0===n?null:yo(n,ss(e._query)).dt}function Yf(e,t){const n=fn(t,(e,t)=>new bi(t,e.aggregateType,e._internalFieldPath)),r=zd(ae(e.firestore,jd)),s=r._onlineComponents?.datastore.serializer;return void 0===s?null:wo(s,is(e._query),n,!0).request}function Xf(e){if(!e._db)throw new D(C.FAILED_PRECONDITION,"This pipeline was created without a database and cannot be serialized for execution.");const t=ae(e._db,jd),n=mf(t).V(3,"_internalPipelineToExecutePipelineRequestProto");e._readUserData(n);const r=(function(e){if(e._terminated)throw new D(C.FAILED_PRECONDITION,"The client has already been terminated.");if(!bd.has(e)){w(wd,"Initializing Datastore");const t=kc(vd(e._databaseId,e.app.options.appId||"",e._persistenceKey,e.app.options.apiKey,e._freezeSettings())),n=Vc(e._databaseId),r=Bc(e._authCredentials,e._appCheckCredentials,t,n);bd.set(e,r)}return bd.get(e)})(t),s=r.serializer;if(void 0===s)return null;const i=new Wf(e,new Hf);return{database:io(s),structuredPipeline:i._toProto(s)}}},1650,[1640,1642,1651,1644,1652]);
__d(function(_g,_r,i,_a,_m,_e,_d){"use strict";Object.defineProperty(_e,'__esModule',{value:!0}),Object.defineProperty(_e,"Integer",{enumerable:!0,get:function(){return t}}),Object.defineProperty(_e,"Md5",{enumerable:!0,get:function(){return r}}),Object.defineProperty(_e,"default",{enumerable:!0,get:function(){return o}});var t,r,e='undefined'!=typeof globalThis?globalThis:'undefined'!=typeof window?window:void 0!==_g?_g:'undefined'!=typeof self?self:{},o={};(function(){var e;
/** @license
           Copyright The Closure Library Authors.
           SPDX-License-Identifier: Apache-2.0
           */function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}function h(t,r,e){e||(e=0);const o=Array(16);if("string"==typeof r)for(var n=0;n<16;++n)o[n]=r.charCodeAt(e++)|r.charCodeAt(e++)<<8|r.charCodeAt(e++)<<16|r.charCodeAt(e++)<<24;else for(n=0;n<16;++n)o[n]=r[e++]|r[e++]<<8|r[e++]<<16|r[e++]<<24;r=t.g[0],e=t.g[1],n=t.g[2];let h,f=t.g[3];h=r+(f^e&(n^f))+o[0]+3614090360&4294967295,h=f+(n^(r=e+(h<<7&4294967295|h>>>25))&(e^n))+o[1]+3905402710&4294967295,f=r+(h<<12&4294967295|h>>>20),h=n+(e^f&(r^e))+o[2]+606105819&4294967295,h=e+(r^(n=f+(h<<17&4294967295|h>>>15))&(f^r))+o[3]+3250441966&4294967295,h=r+(f^(e=n+(h<<22&4294967295|h>>>10))&(n^f))+o[4]+4118548399&4294967295,h=f+(n^(r=e+(h<<7&4294967295|h>>>25))&(e^n))+o[5]+1200080426&4294967295,f=r+(h<<12&4294967295|h>>>20),h=n+(e^f&(r^e))+o[6]+2821735955&4294967295,h=e+(r^(n=f+(h<<17&4294967295|h>>>15))&(f^r))+o[7]+4249261313&4294967295,h=r+(f^(e=n+(h<<22&4294967295|h>>>10))&(n^f))+o[8]+1770035416&4294967295,h=f+(n^(r=e+(h<<7&4294967295|h>>>25))&(e^n))+o[9]+2336552879&4294967295,f=r+(h<<12&4294967295|h>>>20),h=n+(e^f&(r^e))+o[10]+4294925233&4294967295,h=e+(r^(n=f+(h<<17&4294967295|h>>>15))&(f^r))+o[11]+2304563134&4294967295,h=r+(f^(e=n+(h<<22&4294967295|h>>>10))&(n^f))+o[12]+1804603682&4294967295,h=f+(n^(r=e+(h<<7&4294967295|h>>>25))&(e^n))+o[13]+4254626195&4294967295,f=r+(h<<12&4294967295|h>>>20),h=n+(e^f&(r^e))+o[14]+2792965006&4294967295,h=e+(r^(n=f+(h<<17&4294967295|h>>>15))&(f^r))+o[15]+1236535329&4294967295,h=r+(n^f&((e=n+(h<<22&4294967295|h>>>10))^n))+o[1]+4129170786&4294967295,h=f+(e^n&((r=e+(h<<5&4294967295|h>>>27))^e))+o[6]+3225465664&4294967295,f=r+(h<<9&4294967295|h>>>23),h=n+(r^e&(f^r))+o[11]+643717713&4294967295,h=e+(f^r&((n=f+(h<<14&4294967295|h>>>18))^f))+o[0]+3921069994&4294967295,h=r+(n^f&((e=n+(h<<20&4294967295|h>>>12))^n))+o[5]+3593408605&4294967295,h=f+(e^n&((r=e+(h<<5&4294967295|h>>>27))^e))+o[10]+38016083&4294967295,f=r+(h<<9&4294967295|h>>>23),h=n+(r^e&(f^r))+o[15]+3634488961&4294967295,h=e+(f^r&((n=f+(h<<14&4294967295|h>>>18))^f))+o[4]+3889429448&4294967295,h=r+(n^f&((e=n+(h<<20&4294967295|h>>>12))^n))+o[9]+568446438&4294967295,h=f+(e^n&((r=e+(h<<5&4294967295|h>>>27))^e))+o[14]+3275163606&4294967295,f=r+(h<<9&4294967295|h>>>23),h=n+(r^e&(f^r))+o[3]+4107603335&4294967295,h=e+(f^r&((n=f+(h<<14&4294967295|h>>>18))^f))+o[8]+1163531501&4294967295,h=r+(n^f&((e=n+(h<<20&4294967295|h>>>12))^n))+o[13]+2850285829&4294967295,h=f+(e^n&((r=e+(h<<5&4294967295|h>>>27))^e))+o[2]+4243563512&4294967295,f=r+(h<<9&4294967295|h>>>23),h=n+(r^e&(f^r))+o[7]+1735328473&4294967295,h=e+(f^r&((n=f+(h<<14&4294967295|h>>>18))^f))+o[12]+2368359562&4294967295,h=r+((e=n+(h<<20&4294967295|h>>>12))^n^f)+o[5]+4294588738&4294967295,h=f+((r=e+(h<<4&4294967295|h>>>28))^e^n)+o[8]+2272392833&4294967295,f=r+(h<<11&4294967295|h>>>21),h=n+(f^r^e)+o[11]+1839030562&4294967295,h=e+((n=f+(h<<16&4294967295|h>>>16))^f^r)+o[14]+4259657740&4294967295,h=r+((e=n+(h<<23&4294967295|h>>>9))^n^f)+o[1]+2763975236&4294967295,h=f+((r=e+(h<<4&4294967295|h>>>28))^e^n)+o[4]+1272893353&4294967295,f=r+(h<<11&4294967295|h>>>21),h=n+(f^r^e)+o[7]+4139469664&4294967295,h=e+((n=f+(h<<16&4294967295|h>>>16))^f^r)+o[10]+3200236656&4294967295,h=r+((e=n+(h<<23&4294967295|h>>>9))^n^f)+o[13]+681279174&4294967295,h=f+((r=e+(h<<4&4294967295|h>>>28))^e^n)+o[0]+3936430074&4294967295,f=r+(h<<11&4294967295|h>>>21),h=n+(f^r^e)+o[3]+3572445317&4294967295,h=e+((n=f+(h<<16&4294967295|h>>>16))^f^r)+o[6]+76029189&4294967295,h=r+((e=n+(h<<23&4294967295|h>>>9))^n^f)+o[9]+3654602809&4294967295,h=f+((r=e+(h<<4&4294967295|h>>>28))^e^n)+o[12]+3873151461&4294967295,f=r+(h<<11&4294967295|h>>>21),h=n+(f^r^e)+o[15]+530742520&4294967295,h=e+((n=f+(h<<16&4294967295|h>>>16))^f^r)+o[2]+3299628645&4294967295,h=r+(n^((e=n+(h<<23&4294967295|h>>>9))|~f))+o[0]+4096336452&4294967295,h=f+(e^((r=e+(h<<6&4294967295|h>>>26))|~n))+o[7]+1126891415&4294967295,f=r+(h<<10&4294967295|h>>>22),h=n+(r^(f|~e))+o[14]+2878612391&4294967295,h=e+(f^((n=f+(h<<15&4294967295|h>>>17))|~r))+o[5]+4237533241&4294967295,h=r+(n^((e=n+(h<<21&4294967295|h>>>11))|~f))+o[12]+1700485571&4294967295,h=f+(e^((r=e+(h<<6&4294967295|h>>>26))|~n))+o[3]+2399980690&4294967295,f=r+(h<<10&4294967295|h>>>22),h=n+(r^(f|~e))+o[10]+4293915773&4294967295,h=e+(f^((n=f+(h<<15&4294967295|h>>>17))|~r))+o[1]+2240044497&4294967295,h=r+(n^((e=n+(h<<21&4294967295|h>>>11))|~f))+o[8]+1873313359&4294967295,h=f+(e^((r=e+(h<<6&4294967295|h>>>26))|~n))+o[15]+4264355552&4294967295,f=r+(h<<10&4294967295|h>>>22),h=n+(r^(f|~e))+o[6]+2734768916&4294967295,h=e+(f^((n=f+(h<<15&4294967295|h>>>17))|~r))+o[13]+1309151649&4294967295,h=r+(n^((e=n+(h<<21&4294967295|h>>>11))|~f))+o[4]+4149444226&4294967295,h=f+(e^((r=e+(h<<6&4294967295|h>>>26))|~n))+o[11]+3174756917&4294967295,f=r+(h<<10&4294967295|h>>>22),h=n+(r^(f|~e))+o[2]+718787259&4294967295,h=e+(f^((n=f+(h<<15&4294967295|h>>>17))|~r))+o[9]+3951481745&4294967295,t.g[0]=t.g[0]+r&4294967295,t.g[1]=t.g[1]+(n+(h<<21&4294967295|h>>>11))&4294967295,t.g[2]=t.g[2]+n&4294967295,t.g[3]=t.g[3]+f&4294967295}function f(t,r){var e=u;return Object.prototype.hasOwnProperty.call(e,t)?e[t]:e[t]=r(t)}function s(t,r){this.h=r;const e=[];let o=!0;for(let n=t.length-1;n>=0;n--){const h=0|t[n];o&&h==r||(e[n]=h,o=!1)}this.g=e}!(function(t,r){function e(){}e.prototype=r.prototype,t.F=r.prototype,t.prototype=new e,t.prototype.constructor=t,t.D=function(t,e,o){for(var n=Array(arguments.length-2),h=2;h<arguments.length;h++)n[h-2]=arguments[h];return r.prototype[e].apply(t,n)}})(n,function(){this.blockSize=-1}),n.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},n.prototype.v=function(t,r){void 0===r&&(r=t.length);const e=r-this.blockSize,o=this.C;let n=this.h,f=0;for(;f<r;){if(0==n)for(;f<=e;)h(this,t,f),f+=this.blockSize;if("string"==typeof t){for(;f<r;)if(o[n++]=t.charCodeAt(f++),n==this.blockSize){h(this,o),n=0;break}}else for(;f<r;)if(o[n++]=t[f++],n==this.blockSize){h(this,o),n=0;break}}this.h=n,this.o+=r},n.prototype.A=function(){var t=Array((this.h<56?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var r=1;r<t.length-8;++r)t[r]=0;r=8*this.o;for(var e=t.length-8;e<t.length;++e)t[e]=255&r,r/=256;for(this.v(t),t=Array(16),r=0,e=0;e<4;++e)for(let o=0;o<32;o+=8)t[r++]=this.g[e]>>>o&255;return t};var u={};function g(t){return-128<=t&&t<128?f(t,function(t){return new s([0|t],t<0?-1:0)}):new s([0|t],t<0?-1:0)}function l(t){if(isNaN(t)||!isFinite(t))return c;if(t<0)return w(l(-t));const r=[];let e=1;for(let o=0;t>=e;o++)r[o]=t/e|0,e*=4294967296;return new s(r,0)}var c=g(0),p=g(1),a=g(16777216);function d(t){if(0!=t.h)return!1;for(let r=0;r<t.g.length;r++)if(0!=t.g[r])return!1;return!0}function y(t){return-1==t.h}function w(t){const r=t.g.length,e=[];for(let o=0;o<r;o++)e[o]=~t.g[o];return new s(e,~t.h).add(p)}function b(t,r){return t.add(w(r))}function m(t,r){for(;(65535&t[r])!=t[r];)t[r+1]+=t[r]>>>16,t[r]&=65535,r++}function v(t,r){this.g=t,this.h=r}function M(t,r){if(d(r))throw Error("division by zero");if(d(t))return new v(c,c);if(y(t))return r=M(w(t),r),new v(w(r.g),w(r.h));if(y(r))return r=M(t,w(r)),new v(w(r.g),r.h);if(t.g.length>30){if(y(t)||y(r))throw Error("slowDivide_ only works with positive integers.");for(var e=p,o=r;o.l(t)<=0;)e=j(e),o=j(o);var n=S(e,1),h=S(o,1);for(o=S(o,2),e=S(e,2);!d(o);){var f=h.add(o);f.l(t)<=0&&(n=n.add(e),h=f),o=S(o,1),e=S(e,1)}return r=b(t,n.j(r)),new v(n,r)}for(n=c;t.l(r)>=0;){for(e=Math.max(1,Math.floor(t.m()/r.m())),o=(o=Math.ceil(Math.log(e)/Math.LN2))<=48?1:Math.pow(2,o-48),f=(h=l(e)).j(r);y(f)||f.l(t)>0;)f=(h=l(e-=o)).j(r);d(h)&&(h=p),n=n.add(h),t=b(t,f)}return new v(n,t)}function j(t){const r=t.g.length+1,e=[];for(let o=0;o<r;o++)e[o]=t.i(o)<<1|t.i(o-1)>>>31;return new s(e,t.h)}function S(t,r){const e=r>>5;r%=32;const o=t.g.length-e,n=[];for(let h=0;h<o;h++)n[h]=r>0?t.i(h+e)>>>r|t.i(h+e+1)<<32-r:t.i(h+e);return new s(n,t.h)}(e=s.prototype).m=function(){if(y(this))return-w(this).m();let t=0,r=1;for(let e=0;e<this.g.length;e++){const o=this.i(e);t+=(o>=0?o:4294967296+o)*r,r*=4294967296}return t},e.toString=function(t){if((t=t||10)<2||36<t)throw Error("radix out of range: "+t);if(d(this))return"0";if(y(this))return"-"+w(this).toString(t);const r=l(Math.pow(t,6));var e=this;let o="";for(;;){const n=M(e,r).g;let h=(((e=b(e,n.j(r))).g.length>0?e.g[0]:e.h)>>>0).toString(t);if(d(e=n))return h+o;for(;h.length<6;)h="0"+h;o=h+o}},e.i=function(t){return t<0?0:t<this.g.length?this.g[t]:this.h},e.l=function(t){return y(t=b(this,t))?-1:d(t)?0:1},e.abs=function(){return y(this)?w(this):this},e.add=function(t){const r=Math.max(this.g.length,t.g.length),e=[];let o=0;for(let n=0;n<=r;n++){let r=o+(65535&this.i(n))+(65535&t.i(n)),h=(r>>>16)+(this.i(n)>>>16)+(t.i(n)>>>16);o=h>>>16,r&=65535,h&=65535,e[n]=h<<16|r}return new s(e,-2147483648&e[e.length-1]?-1:0)},e.j=function(t){if(d(this)||d(t))return c;if(y(this))return y(t)?w(this).j(w(t)):w(w(this).j(t));if(y(t))return w(this.j(w(t)));if(this.l(a)<0&&t.l(a)<0)return l(this.m()*t.m());const r=this.g.length+t.g.length,e=[];for(var o=0;o<2*r;o++)e[o]=0;for(o=0;o<this.g.length;o++)for(let r=0;r<t.g.length;r++){const n=this.i(o)>>>16,h=65535&this.i(o),f=t.i(r)>>>16,s=65535&t.i(r);e[2*o+2*r]+=h*s,m(e,2*o+2*r),e[2*o+2*r+1]+=n*s,m(e,2*o+2*r+1),e[2*o+2*r+1]+=h*f,m(e,2*o+2*r+1),e[2*o+2*r+2]+=n*f,m(e,2*o+2*r+2)}for(t=0;t<r;t++)e[t]=e[2*t+1]<<16|e[2*t];for(t=r;t<2*r;t++)e[t]=0;return new s(e,0)},e.B=function(t){return M(this,t).h},e.and=function(t){const r=Math.max(this.g.length,t.g.length),e=[];for(let o=0;o<r;o++)e[o]=this.i(o)&t.i(o);return new s(e,this.h&t.h)},e.or=function(t){const r=Math.max(this.g.length,t.g.length),e=[];for(let o=0;o<r;o++)e[o]=this.i(o)|t.i(o);return new s(e,this.h|t.h)},e.xor=function(t){const r=Math.max(this.g.length,t.g.length),e=[];for(let o=0;o<r;o++)e[o]=this.i(o)^t.i(o);return new s(e,this.h^t.h)},n.prototype.digest=n.prototype.A,n.prototype.reset=n.prototype.u,n.prototype.update=n.prototype.v,r=o.Md5=n,s.prototype.add=s.prototype.add,s.prototype.multiply=s.prototype.j,s.prototype.modulo=s.prototype.B,s.prototype.compare=s.prototype.l,s.prototype.toNumber=s.prototype.m,s.prototype.toString=s.prototype.toString,s.prototype.getBits=s.prototype.i,s.fromNumber=l,s.fromString=function t(r,e){if(0==r.length)throw Error("number format error: empty string");if((e=e||10)<2||36<e)throw Error("radix out of range: "+e);if("-"==r.charAt(0))return w(t(r.substring(1),e));if(r.indexOf("-")>=0)throw Error('number format error: interior "-" character');const o=l(Math.pow(e,8));let n=c;for(let t=0;t<r.length;t+=8){var h=Math.min(8,r.length-t);const f=parseInt(r.substring(t,t+h),e);h<8?(h=l(Math.pow(e,h)),n=n.j(h).add(l(f))):(n=n.j(o),n=n.add(l(f)))}return n},t=o.Integer=s}).apply(void 0!==e?e:'undefined'!=typeof self?self:'undefined'!=typeof window?window:{})},1651,[]);
__d(function(_g,_r,i,_a,_m,_e,_d){"use strict";Object.defineProperty(_e,'__esModule',{value:!0}),Object.defineProperty(_e,"ErrorCode",{enumerable:!0,get:function(){return o}}),Object.defineProperty(_e,"Event",{enumerable:!0,get:function(){return h}}),Object.defineProperty(_e,"EventType",{enumerable:!0,get:function(){return s}}),Object.defineProperty(_e,"FetchXmlHttpFactory",{enumerable:!0,get:function(){return e}}),Object.defineProperty(_e,"Stat",{enumerable:!0,get:function(){return r}}),Object.defineProperty(_e,"WebChannel",{enumerable:!0,get:function(){return n}}),Object.defineProperty(_e,"XhrIo",{enumerable:!0,get:function(){return t}}),Object.defineProperty(_e,"createWebChannelTransport",{enumerable:!0,get:function(){return l}}),Object.defineProperty(_e,"default",{enumerable:!0,get:function(){return c}}),Object.defineProperty(_e,"getStatEventTarget",{enumerable:!0,get:function(){return a}});var t,e,n,s,o,r,h,a,l,u='undefined'!=typeof globalThis?globalThis:'undefined'!=typeof window?window:void 0!==_g?_g:'undefined'!=typeof self?self:{},c={};(function(){var f,g=Object.defineProperty;var p=(function(t){t=["object"==typeof globalThis&&globalThis,t,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof u&&u];for(var e=0;e<t.length;++e){var n=t[e];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")})(this);function d(t,e){if(e)t:{var n=p;t=t.split(".");for(var s=0;s<t.length-1;s++){var o=t[s];if(!(o in n))break t;n=n[o]}(e=e(s=n[t=t[t.length-1]]))!=s&&null!=e&&g(n,t,{configurable:!0,writable:!0,value:e})}}d("Symbol.dispose",function(t){return t||Symbol("Symbol.dispose")}),d("Array.prototype.values",function(t){return t||function(){return this[Symbol.iterator]()}}),d("Object.entries",function(t){return t||function(t){var e,n=[];for(e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.push([e,t[e]]);return n}});
/** @license
        Copyright The Closure Library Authors.
        SPDX-License-Identifier: Apache-2.0
        */
var y=y||{},v=this||self;function m(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function b(t,e,n){return t.call.apply(t.bind,arguments)}function w(t,e,n){return(w=b).apply(null,arguments)}function T(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function j(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Ob=function(t,n,s){for(var o=Array(arguments.length-2),r=2;r<arguments.length;r++)o[r-2]=arguments[r];return e.prototype[n].apply(t,o)}}var S="undefined"!=typeof AsyncContext&&"function"==typeof AsyncContext.Snapshot?t=>t&&AsyncContext.Snapshot.wrap(t):t=>t;function E(t){const e=t.length;if(e>0){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function C(t,e){for(let e=1;e<arguments.length;e++){const s=arguments[e];var n=typeof s;if("array"==(n="object"!=n?n:s?Array.isArray(s)?"array":n:"null")||"object"==n&&"number"==typeof s.length){n=t.length||0;const e=s.length||0;t.length=n+e;for(let o=0;o<e;o++)t[n+o]=s[o]}else t.push(s)}}function A(t){v.setTimeout(()=>{throw t},0)}function O(){var t=_;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var P=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return this.h>0?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new R,t=>t.reset());class R{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}let I,x=!1,_=new class{constructor(){this.h=this.g=null}add(t,e){const n=P.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}},D=()=>{const t=Promise.resolve(void 0);I=()=>{t.then(M)}};function M(){for(var t;t=O();){try{t.h.call(t.g)}catch(t){A(t)}var e=P;e.j(t),e.h<100&&(e.h++,t.next=e.g,e.g=t)}x=!1}function L(){this.u=this.u,this.C=this.C}function H(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}L.prototype.u=!1,L.prototype.dispose=function(){this.u||(this.u=!0,this.N())},L.prototype[Symbol.dispose]=function(){this.dispose()},L.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},H.prototype.h=function(){this.defaultPrevented=!0};var X=(function(){if(!v.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const t=()=>{};v.addEventListener("test",t,e),v.removeEventListener("test",t,e)}catch(t){}return t})();function k(t){return/^[\s\xa0]*$/.test(t)}function B(t,e){H.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t&&this.init(t,e)}j(B,H),B.prototype.init=function(t,e){const n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;this.target=t.target||t.srcElement,this.g=e,(e=t.relatedTarget)||("mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement)),this.relatedTarget=e,s?(this.clientX=void 0!==s.clientX?s.clientX:s.pageX,this.clientY=void 0!==s.clientY?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=t.pointerType,this.state=t.state,this.i=t,t.defaultPrevented&&B.Z.h.call(this)},B.prototype.h=function(){B.Z.h.call(this);const t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var F="closure_listenable_"+(1e6*Math.random()|0),N=0;function K(t,e,n,s,o){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=o,this.key=++N,this.da=this.fa=!1}function U(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Y(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function G(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function J(t){const e={};for(const n in t)e[n]=t[n];return e}const W="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function q(t,e){let n,s;for(let e=1;e<arguments.length;e++){for(n in s=arguments[e],s)t[n]=s[n];for(let e=0;e<W.length;e++)n=W[e],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function V(t){this.src=t,this.g={},this.h=0}function z(t,e){const n=e.type;if(n in t.g){var s,o=t.g[n],r=Array.prototype.indexOf.call(o,e,void 0);(s=r>=0)&&Array.prototype.splice.call(o,r,1),s&&(U(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function Z(t,e,n,s){for(let o=0;o<t.length;++o){const r=t[o];if(!r.da&&r.listener==e&&r.capture==!!n&&r.ha==s)return o}return-1}V.prototype.add=function(t,e,n,s,o){const r=t.toString();(t=this.g[r])||(t=this.g[r]=[],this.h++);const h=Z(t,e,s,o);return h>-1?(e=t[h],n||(e.fa=!1)):((e=new K(e,this.src,r,!!s,o)).fa=n,t.push(e)),e};var $="closure_lm_"+(1e6*Math.random()|0),Q={};function tt(t,e,n,s,o){if(s&&s.once)return it(t,e,n,s,o);if(Array.isArray(e)){for(let r=0;r<e.length;r++)tt(t,e[r],n,s,o);return null}return n=ut(n),t&&t[F]?t.J(e,n,m(s)?!!s.capture:!!s,o):et(t,e,n,!1,s,o)}function et(t,e,n,s,o,r){if(!e)throw Error("Invalid event type");const h=m(o)?!!o.capture:!!o;let a=at(t);if(a||(t[$]=a=new V(t)),(n=a.add(e,n,s,h,r)).proxy)return n;if(s=nt(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)X||(o=h),void 0===o&&(o=!1),t.addEventListener(e.toString(),s,o);else if(t.attachEvent)t.attachEvent(rt(e.toString()),s);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(s)}return n}function nt(){const t=ht;return function e(n){return t.call(e.src,e.listener,n)}}function it(t,e,n,s,o){if(Array.isArray(e)){for(let r=0;r<e.length;r++)it(t,e[r],n,s,o);return null}return n=ut(n),t&&t[F]?t.K(e,n,m(s)?!!s.capture:!!s,o):et(t,e,n,!0,s,o)}function st(t,e,n,s,o){if(Array.isArray(e))for(var r=0;r<e.length;r++)st(t,e[r],n,s,o);else s=m(s)?!!s.capture:!!s,n=ut(n),t&&t[F]?(t=t.i,(r=String(e).toString())in t.g&&((n=Z(e=t.g[r],n,s,o))>-1&&(U(e[n]),Array.prototype.splice.call(e,n,1),0==e.length&&(delete t.g[r],t.h--)))):t&&(t=at(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Z(e,n,s,o)),(n=t>-1?e[t]:null)&&ot(n))}function ot(t){if("number"!=typeof t&&t&&!t.da){var e=t.src;if(e&&e[F])z(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(rt(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=at(e))?(z(n,t),0==n.h&&(n.src=null,e[$]=null)):U(t)}}}function rt(t){return t in Q?Q[t]:Q[t]="on"+t}function ht(t,e){if(t.da)t=!0;else{e=new B(e,this);const n=t.listener,s=t.ha||t.src;t.fa&&ot(t),t=n.call(s,e)}return t}function at(t){return(t=t[$])instanceof V?t:null}var lt="__closure_events_fn_"+(1e9*Math.random()>>>0);function ut(t){return"function"==typeof t?t:(t[lt]||(t[lt]=function(e){return t.handleEvent(e)}),t[lt])}function ct(){L.call(this),this.i=new V(this),this.M=this,this.G=null}function ft(t,e){var n,s=t.G;if(s)for(n=[];s;s=s.G)n.push(s);if(t=t.M,s=e.type||e,"string"==typeof e)e=new H(e,t);else if(e instanceof H)e.target=e.target||t;else{var o=e;q(e=new H(s,t),o)}let r,h;if(o=!0,n)for(h=n.length-1;h>=0;h--)r=e.g=n[h],o=gt(r,s,!0,e)&&o;if(r=e.g=t,o=gt(r,s,!0,e)&&o,o=gt(r,s,!1,e)&&o,n)for(h=0;h<n.length;h++)r=e.g=n[h],o=gt(r,s,!1,e)&&o}function gt(t,e,n,s){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();let o=!0;for(let r=0;r<e.length;++r){const h=e[r];if(h&&!h.da&&h.capture==n){const e=h.listener,n=h.ha||h.src;h.fa&&z(t.i,h),o=!1!==e.call(n,s)&&o}}return o&&!s.defaultPrevented}function pt(t,e){if("function"!=typeof t){if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=w(t.handleEvent,t)}return Number(e)>2147483647?-1:v.setTimeout(t,e||0)}function dt(t){t.g=pt(()=>{t.g=null,t.i&&(t.i=!1,dt(t))},t.l);const e=t.h;t.h=null,t.m.apply(null,e)}j(ct,L),ct.prototype[F]=!0,ct.prototype.removeEventListener=function(t,e,n,s){st(this,t,e,n,s)},ct.prototype.N=function(){if(ct.Z.N.call(this),this.i){var t=this.i;for(const e in t.g){const n=t.g[e];for(let t=0;t<n.length;t++)U(n[t]);delete t.g[e],t.h--}}this.G=null},ct.prototype.J=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)},ct.prototype.K=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};class yt extends L{constructor(t,e){super(),this.m=t,this.l=e,this.h=null,this.i=!1,this.g=null}j(t){this.h=arguments,this.g?this.i=!0:dt(this)}N(){super.N(),this.g&&(v.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function vt(t){L.call(this),this.h=t,this.g={}}j(vt,L);var mt=[];function bt(t){Y(t.g,function(t,e){this.g.hasOwnProperty(e)&&ot(t)},t),t.g={}}vt.prototype.N=function(){vt.Z.N.call(this),bt(this)},vt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var wt=v.JSON.stringify,Tt=v.JSON.parse,jt=class{stringify(t){return v.JSON.stringify(t,void 0)}parse(t){return v.JSON.parse(t,void 0)}};function St(){}function Et(){}var Ct={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function At(){H.call(this,"d")}function Ot(){H.call(this,"c")}j(At,H),j(Ot,H);var Pt={},Rt=null;function It(){return Rt=Rt||new ct}function xt(t){H.call(this,Pt.Ia,t)}function _t(t){const e=It();ft(e,new xt(e))}function Dt(t,e){H.call(this,Pt.STAT_EVENT,t),this.stat=e}function Mt(t){const e=It();ft(e,new Dt(e,t))}function Lt(t,e){H.call(this,Pt.Ja,t),this.size=e}function Ht(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return v.setTimeout(function(){t()},e)}function Xt(){this.g=!0}function kt(t,e,n,s,o,r){t.info(function(){if(t.g)if(r){var h="",a=r.split("&");for(let t=0;t<a.length;t++){var l=a[t].split("=");if(l.length>1){const t=l[0];l=l[1];const e=t.split("_");h=e.length>=2&&"type"==e[1]?h+(t+"=")+l+"&":h+(t+"=redacted&")}}}else h=null;else h=r;return"XMLHTTP REQ ("+s+") [attempt "+o+"]: "+e+"\n"+n+"\n"+h})}function Bt(t,e,n,s,o,r,h){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+o+"]: "+e+"\n"+n+"\n"+r+" "+h})}function Ft(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Kt(t,n)+(s?" "+s:"")})}function Nt(t,e){t.info(function(){return"TIMEOUT: "+e})}function Kt(t,e){if(!t.g)return e;if(!e)return null;try{const r=JSON.parse(e);if(r)for(t=0;t<r.length;t++)if(Array.isArray(r[t])){var n=r[t];if(!(n.length<2)){var s=n[1];if(Array.isArray(s)&&!(s.length<1)){var o=s[0];if("noop"!=o&&"stop"!=o&&"close"!=o)for(let t=1;t<s.length;t++)s[t]=""}}}return wt(r)}catch(t){return e}}Pt.Ia="serverreachability",j(xt,H),Pt.STAT_EVENT="statevent",j(Dt,H),Pt.Ja="timingevent",j(Lt,H),Xt.prototype.ua=function(){this.g=!1},Xt.prototype.info=function(){};var Ut,Yt={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Gt={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"};function Jt(){}function Wt(t){return encodeURIComponent(String(t))}function qt(t){var e=1;t=t.split(":");const n=[];for(;e>0&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function Vt(t,e,n,s){this.j=t,this.i=e,this.l=n,this.S=s||1,this.V=new vt(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new zt}function zt(){this.i=null,this.g="",this.h=!1}j(Jt,St),Jt.prototype.g=function(){return new XMLHttpRequest},Ut=new Jt;var Zt={},$t={};function Qt(t,e,n){t.M=1,t.A=Ae(Te(e)),t.u=n,t.R=!0,te(t,null)}function te(t,e){t.F=Date.now(),se(t),t.B=Te(t.A);var n=t.B,s=t.S;Array.isArray(s)||(s=[String(s)]),Ne(n.i,"t",s),t.C=0,n=t.j.L,t.h=new zt,t.g=Dn(t.j,n?e:null,!t.u),t.P>0&&(t.O=new yt(w(t.Y,t,t.g),t.P)),e=t.V,n=t.g,s=t.ba;var o="readystatechange";Array.isArray(o)||(o&&(mt[0]=o.toString()),o=mt);for(let t=0;t<o.length;t++){const r=tt(n,o[t],s||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}e=t.J?J(t.J):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.B,t.v,t.u,e)):(t.v="GET",t.g.ea(t.B,t.v,null,e)),_t(),kt(t.i,t.v,t.B,t.l,t.S,t.u)}function ee(t){if(!ne(t))return t.g.la();const e=cn(t.g);if(""===e)return"";let n="";const s=e.length,o=4==un(t.g);if(!t.h.i){if("undefined"==typeof TextDecoder)return ae(t),he(t),"";t.h.i=new v.TextDecoder}for(let r=0;r<s;r++)t.h.h=!0,n+=t.h.i.decode(e[r],{stream:!(o&&r==s-1)});return e.length=0,t.h.g+=n,t.C=0,t.h.g}function ne(t){return!!t.g&&("GET"==t.v&&2!=t.M&&t.j.Aa)}function ie(t,e){var n=t.C,s=e.indexOf("\n",n);return-1==s?$t:(n=Number(e.substring(n,s)),isNaN(n)?Zt:(s+=1)+n>e.length?$t:(e=e.slice(s,s+n),t.C=s+n,e))}function se(t){t.T=Date.now()+t.H,oe(t,t.H)}function oe(t,e){if(null!=t.D)throw Error("WatchDog timer not null");t.D=Ht(w(t.aa,t),e)}function re(t){t.D&&(v.clearTimeout(t.D),t.D=null)}function he(t){0==t.j.I||t.K||Pn(t.j,t)}function ae(t){re(t);var e=t.O;e&&"function"==typeof e.dispose&&e.dispose(),t.O=null,bt(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.dispose())}function le(t,e){try{var n=t.j;if(0!=n.I&&(n.g==t||pe(n.h,t)))if(!t.L&&pe(n.h,t)&&3==n.I){try{var s=n.Ba.g.parse(e)}catch(t){s=null}if(Array.isArray(s)&&3==s.length){var o=s;if(0==o[0]){t:if(!n.v){if(n.g){if(!(n.g.F+3e3<t.F))break t;On(n),yn(n)}En(n),Mt(18)}}else n.xa=o[1],0<n.xa-n.K&&o[2]<37500&&n.F&&0==n.A&&!n.C&&(n.C=Ht(w(n.Va,n),6e3));ge(n.h)<=1&&n.ta&&(n.ta=void 0)}else In(n,11)}else if((t.L||n.g==t)&&On(n),!k(e))for(o=n.Ba.g.parse(e),e=0;e<o.length;e++){let u=o[e];const c=u[0];if(!(c<=n.K))if(n.K=c,u=u[1],2==n.I)if("c"==u[0]){n.M=u[1],n.ba=u[2];const e=u[3];null!=e&&(n.ka=e,n.j.info("VER="+n.ka));const o=u[4];null!=o&&(n.za=o,n.j.info("SVER="+n.za));const c=u[5];null!=c&&"number"==typeof c&&c>0&&(s=1.5*c,n.O=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const f=t.g;if(f){const t=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var r=s.h;r.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(r.j=r.l,r.g=new Set,r.h&&(de(r,r.h),r.h=null))}if(s.G){const t=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(s.wa=t,Ce(s.J,s.G,t))}}n.I=3,n.l&&n.l.ra(),n.aa&&(n.T=Date.now()-t.F,n.j.info("Handshake RTT: "+n.T+"ms"));var h=t;if((s=n).na=_n(s,s.L?s.ba:null,s.W),h.L){ye(s.h,h);var a=h,l=s.O;l&&(a.H=l),a.D&&(re(a),se(a)),s.g=h}else Sn(s);n.i.length>0&&mn(n)}else"stop"!=u[0]&&"close"!=u[0]||In(n,7);else 3==n.I&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?In(n,7):dn(n):"noop"!=u[0]&&n.l&&n.l.qa(u),n.A=0)}_t()}catch(t){}}Vt.prototype.ba=function(t){t=t.target;const e=this.O;e&&3==un(t)?e.j():this.Y(t)},Vt.prototype.Y=function(t){try{if(t==this.g)t:{const a=un(this.g),l=this.g.ya();this.g.ca();if(!(a<3)&&(3!=a||this.g&&(this.h.h||this.g.la()||cn(this.g)))){this.K||4!=a||7==l||_t(),re(this);var e=this.g.ca();this.X=e;var n=ee(this);if(this.o=200==e,Bt(this.i,this.v,this.B,this.l,this.S,a,e),this.o){if(this.U&&!this.L){e:{if(this.g){var s,o=this.g;if((s=o.g?o.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!k(s)){var r=s;break e}}r=null}if(!(t=r)){this.o=!1,this.m=3,Mt(12),ae(this),he(this);break t}Ft(this.i,this.l,t,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,le(this,t)}if(this.R){let e;for(t=!0;!this.K&&this.C<n.length;){if(e=ie(this,n),e==$t){4==a&&(this.m=4,Mt(14),t=!1),Ft(this.i,this.l,null,"[Incomplete Response]");break}if(e==Zt){this.m=4,Mt(15),Ft(this.i,this.l,n,"[Invalid Chunk]"),t=!1;break}Ft(this.i,this.l,e,null),le(this,e)}if(ne(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=a||0!=n.length||this.h.h||(this.m=1,Mt(16),t=!1),this.o=this.o&&t,t){if(n.length>0&&!this.W){this.W=!0;var h=this.j;h.g==this&&h.aa&&!h.P&&(h.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Cn(h),h.P=!0,Mt(11))}}else Ft(this.i,this.l,n,"[Invalid Chunked Response]"),ae(this),he(this)}else Ft(this.i,this.l,n,null),le(this,n);4==a&&ae(this),this.o&&!this.K&&(4==a?Pn(this.j,this):(this.o=!1,se(this)))}else fn(this.g),400==e&&n.indexOf("Unknown SID")>0?(this.m=3,Mt(12)):(this.m=0,Mt(13)),ae(this),he(this)}}}catch(t){}},Vt.prototype.cancel=function(){this.K=!0,ae(this)},Vt.prototype.aa=function(){this.D=null;const t=Date.now();t-this.T>=0?(Nt(this.i,this.B),2!=this.M&&(_t(),Mt(17)),ae(this),this.m=2,he(this)):oe(this,this.T-t)};var ue=class{constructor(t,e){this.g=t,this.map=e}};function ce(t){this.l=t||10,v.PerformanceNavigationTiming?t=(t=v.performance.getEntriesByType("navigation")).length>0&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(v.chrome&&v.chrome.loadTimes&&v.chrome.loadTimes()&&v.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function fe(t){return!!t.h||!!t.g&&t.g.size>=t.j}function ge(t){return t.h?1:t.g?t.g.size:0}function pe(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function de(t,e){t.g?t.g.add(e):t.h=e}function ye(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function ve(t){if(null!=t.h)return t.i.concat(t.h.G);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.G);return e}return E(t.i)}ce.prototype.cancel=function(){if(this.i=ve(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var me=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function be(t,e){if(t){t=t.split("&");for(let n=0;n<t.length;n++){const s=t[n].indexOf("=");let o,r=null;s>=0?(o=t[n].substring(0,s),r=t[n].substring(s+1)):o=t[n],e(o,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function we(t){let e;this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1,t instanceof we?(this.l=t.l,je(this,t.j),this.o=t.o,this.g=t.g,Se(this,t.u),this.h=t.h,Ee(this,Ke(t.i)),this.m=t.m):t&&(e=String(t).match(me))?(this.l=!1,je(this,e[1]||"",!0),this.o=Oe(e[2]||""),this.g=Oe(e[3]||"",!0),Se(this,e[4]),this.h=Oe(e[5]||"",!0),Ee(this,e[6]||"",!0),this.m=Oe(e[7]||"")):(this.l=!1,this.i=new He(null,this.l))}function Te(t){return new we(t)}function je(t,e,n){t.j=n?Oe(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Se(t,e){if(e){if(e=Number(e),isNaN(e)||e<0)throw Error("Bad port number "+e);t.u=e}else t.u=null}function Ee(t,e,n){e instanceof He?(t.i=e,Ye(t.i,t.l)):(n||(e=Pe(e,Me)),t.i=new He(e,t.l))}function Ce(t,e,n){t.i.set(e,n)}function Ae(t){return Ce(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Oe(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Pe(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,Re),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Re(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}we.prototype.toString=function(){const t=[];var e=this.j;e&&t.push(Pe(e,Ie,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.o)&&t.push(Pe(e,Ie,!0),"@"),t.push(Wt(n).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.u)&&t.push(":",String(n))),(n=this.h)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Pe(n,"/"==n.charAt(0)?De:xe,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.m)&&t.push("#",Pe(n,Le)),t.join("")},we.prototype.resolve=function(t){const e=Te(this);let n=!!t.j;n?je(e,t.j):n=!!t.o,n?e.o=t.o:n=!!t.g,n?e.g=t.g:n=null!=t.u;var s=t.h;if(n)Se(e,t.u);else if(n=!!t.h){if("/"!=s.charAt(0))if(this.g&&!this.h)s="/"+s;else{var o=e.h.lastIndexOf("/");-1!=o&&(s=e.h.slice(0,o+1)+s)}if(".."==(o=s)||"."==o)s="";else if(-1!=o.indexOf("./")||-1!=o.indexOf("/.")){s=0==o.lastIndexOf("/",0),o=o.split("/");const t=[];for(let e=0;e<o.length;){const n=o[e++];"."==n?s&&e==o.length&&t.push(""):".."==n?((t.length>1||1==t.length&&""!=t[0])&&t.pop(),s&&e==o.length&&t.push("")):(t.push(n),s=!0)}s=t.join("/")}else s=o}return n?e.h=s:n=""!==t.i.toString(),n?Ee(e,Ke(t.i)):n=!!t.m,n&&(e.m=t.m),e};var Ie=/[#\/\?@]/g,xe=/[#\?:]/g,De=/[#\?]/g,Me=/[#\?@]/g,Le=/#/g;function He(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Xe(t){t.g||(t.g=new Map,t.h=0,t.i&&be(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}function ke(t,e){Xe(t),e=Ue(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Be(t,e){return Xe(t),e=Ue(t,e),t.g.has(e)}function Fe(t,e){Xe(t);let n=[];if("string"==typeof e)Be(t,e)&&(n=n.concat(t.g.get(Ue(t,e))));else for(t=Array.from(t.g.values()),e=0;e<t.length;e++)n=n.concat(t[e]);return n}function Ne(t,e,n){ke(t,e),n.length>0&&(t.i=null,t.g.set(Ue(t,e),E(n)),t.h+=n.length)}function Ke(t){const e=new He;return e.i=t.i,t.g&&(e.g=new Map(t.g),e.h=t.h),e}function Ue(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Ye(t,e){e&&!t.j&&(Xe(t),t.i=null,t.g.forEach(function(t,e){const n=e.toLowerCase();e!=n&&(ke(this,e),Ne(this,n,t))},t)),t.j=e}function Ge(t,e){const n=new Xt;if(v.Image){const s=new Image;s.onload=T(We,n,"TestLoadImage: loaded",!0,e,s),s.onerror=T(We,n,"TestLoadImage: error",!1,e,s),s.onabort=T(We,n,"TestLoadImage: abort",!1,e,s),s.ontimeout=T(We,n,"TestLoadImage: timeout",!1,e,s),v.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Je(t,e){const n=new Xt,s=new AbortController,o=setTimeout(()=>{s.abort(),We(n,"TestPingServer: timeout",!1,e)},1e4);fetch(t,{signal:s.signal}).then(t=>{clearTimeout(o),t.ok?We(n,"TestPingServer: ok",!0,e):We(n,"TestPingServer: server error",!1,e)}).catch(()=>{clearTimeout(o),We(n,"TestPingServer: error",!1,e)})}function We(t,e,n,s,o){try{o&&(o.onload=null,o.onerror=null,o.onabort=null,o.ontimeout=null),s(n)}catch(t){}}function qe(){this.g=new jt}function Ve(t){this.i=t.Sb||null,this.h=t.ab||!1}function ze(t,e){ct.call(this),this.H=t,this.o=e,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}function Ze(t){t.j.read().then(t.Ma.bind(t)).catch(t.ga.bind(t))}function $e(t){t.readyState=4,t.l=null,t.j=null,t.B=null,Qe(t)}function Qe(t){t.onreadystatechange&&t.onreadystatechange.call(t)}function tn(t){let e="";return Y(t,function(t,n){e+=n,e+=":",e+=t,e+="\r\n"}),e}function en(t,e,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=tn(n),"string"==typeof t?null!=n&&Wt(n):Ce(t,e,n))}function nn(t){ct.call(this),this.headers=new Map,this.L=t||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}(f=He.prototype).add=function(t,e){Xe(this),this.i=null,t=Ue(this,t);let n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},f.forEach=function(t,e){Xe(this),this.g.forEach(function(n,s){n.forEach(function(n){t.call(e,n,s,this)},this)},this)},f.set=function(t,e){return Xe(this),this.i=null,Be(this,t=Ue(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},f.get=function(t,e){return t&&(t=Fe(this,t)).length>0?String(t[0]):e},f.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(let s=0;s<e.length;s++){var n=e[s];const o=Wt(n);n=Fe(this,n);for(let e=0;e<n.length;e++){let s=o;""!==n[e]&&(s+="="+Wt(n[e])),t.push(s)}}return this.i=t.join("&")},j(Ve,St),Ve.prototype.g=function(){return new ze(this.i,this.h)},j(ze,ct),(f=ze.prototype).open=function(t,e){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.F=t,this.D=e,this.readyState=1,Qe(this)},f.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const e={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};t&&(e.body=t),(this.H||v).fetch(new Request(this.D,e)).then(this.Pa.bind(this),this.ga.bind(this))},f.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&4!=this.readyState&&(this.g=!1,$e(this)),this.readyState=0},f.Pa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Qe(this)),this.g&&(this.readyState=3,Qe(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(void 0!==v.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Ze(this)}else t.text().then(this.Oa.bind(this),this.ga.bind(this))},f.Ma=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var e=t.value?t.value:new Uint8Array(0);(e=this.B.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?$e(this):Qe(this),3==this.readyState&&Ze(this)}},f.Oa=function(t){this.g&&(this.response=this.responseText=t,$e(this))},f.Na=function(t){this.g&&(this.response=t,$e(this))},f.ga=function(){this.g&&$e(this)},f.setRequestHeader=function(t,e){this.A.append(t,e)},f.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},f.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(ze.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}}),j(nn,ct);var sn=/^https?$/i,on=["POST","PUT"];function rn(t,e){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=e,t.o=5,hn(t),ln(t)}function hn(t){t.A||(t.A=!0,ft(t,"complete"),ft(t,"error"))}function an(t){if(t.h&&void 0!==y)if(t.v&&4==un(t))setTimeout(t.Ca.bind(t),0);else if(ft(t,"readystatechange"),4==un(t)){t.h=!1;try{const r=t.ca();t:switch(r){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var s;if(s=0===r){let e=String(t.D).match(me)[1]||null;!e&&v.self&&v.self.location&&(e=v.self.location.protocol.slice(0,-1)),s=!sn.test(e?e.toLowerCase():"")}n=s}if(n)ft(t,"complete"),ft(t,"success");else{t.o=6;try{var o=un(t)>2?t.g.statusText:""}catch(t){o=""}t.l=o+" ["+t.ca()+"]",hn(t)}}finally{ln(t)}}}function ln(t,e){if(t.g){t.m&&(clearTimeout(t.m),t.m=null);const n=t.g;t.g=null,e||ft(t,"ready");try{n.onreadystatechange=null}catch(t){}}}function un(t){return t.g?t.g.readyState:0}function cn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.F){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function fn(t){const e={};t=(t.g&&un(t)>=2&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let s=0;s<t.length;s++){if(k(t[s]))continue;var n=qt(t[s]);const o=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const r=e[o]||[];e[o]=r,r.push(n)}G(e,function(t){return t.join(", ")})}function gn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function pn(t){this.za=0,this.i=[],this.j=new Xt,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=gn("failFast",!1,t),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=gn("baseRetryDelayMs",5e3,t),this.Za=gn("retryDelaySeedMs",1e4,t),this.Ta=gn("forwardChannelMaxRetries",2,t),this.va=gn("forwardChannelRequestTimeoutMs",2e4,t),this.ma=t&&t.xmlHttpFactory||void 0,this.Ua=t&&t.Rb||void 0,this.Aa=t&&t.useFetchStreams||!1,this.O=void 0,this.L=t&&t.supportsCrossDomainXhr||!1,this.M="",this.h=new ce(t&&t.concurrentRequestLimit),this.Ba=new qe,this.S=t&&t.fastHandshake||!1,this.R=t&&t.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=t&&t.Pb||!1,t&&t.ua&&this.j.ua(),t&&t.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&t&&t.detectBufferingProxy||!1,this.ia=void 0,t&&t.longPollingTimeout&&t.longPollingTimeout>0&&(this.ia=t.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}function dn(t){if(vn(t),3==t.I){var e=t.V++,n=Te(t.J);if(Ce(n,"SID",t.M),Ce(n,"RID",e),Ce(n,"TYPE","terminate"),Tn(t,n),(e=new Vt(t,t.j,e)).M=2,e.A=Ae(Te(n)),n=!1,v.navigator&&v.navigator.sendBeacon)try{n=v.navigator.sendBeacon(e.A.toString(),"")}catch(t){}!n&&v.Image&&((new Image).src=e.A,n=!0),n||(e.g=Dn(e.j,null),e.g.ea(e.A)),e.F=Date.now(),se(e)}xn(t)}function yn(t){t.g&&(Cn(t),t.g.cancel(),t.g=null)}function vn(t){yn(t),t.v&&(v.clearTimeout(t.v),t.v=null),On(t),t.h.cancel(),t.m&&("number"==typeof t.m&&v.clearTimeout(t.m),t.m=null)}function mn(t){if(!fe(t.h)&&!t.m){t.m=!0;var e=t.Ea;I||D(),x||(I(),x=!0),_.add(e,t),t.D=0}}function bn(t,e){return!(ge(t.h)>=t.h.j-(t.m?1:0))&&(t.m?(t.i=e.G.concat(t.i),!0):!(1==t.I||2==t.I||t.D>=(t.Sa?0:t.Ta))&&(t.m=Ht(w(t.Ea,t,e),Rn(t,t.D)),t.D++,!0))}function wn(t,e){var n;n=e?e.l:t.V++;const s=Te(t.J);Ce(s,"SID",t.M),Ce(s,"RID",n),Ce(s,"AID",t.K),Tn(t,s),t.u&&t.o&&en(s,t.u,t.o),n=new Vt(t,t.j,n,t.D+1),null===t.u&&(n.J=t.o),e&&(t.i=e.G.concat(t.i)),e=jn(t,n,1e3),n.H=Math.round(.5*t.va)+Math.round(.5*t.va*Math.random()),de(t.h,n),Qt(n,s,e)}function Tn(t,e){t.H&&Y(t.H,function(t,n){Ce(e,n,t)}),t.l&&Y({},function(t,n){Ce(e,n,t)})}function jn(t,e,n){n=Math.min(t.i.length,n);const s=t.l?w(t.l.Ka,t.l,t):null;t:{var o=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?n>0?(e=o[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let a=!0;for(let l=0;l<n;l++){var r=o[l].g;const n=o[l].map;if((r-=e)<0)e=Math.max(0,o[l].g-100),a=!1;else try{r="req"+r+"_"||"";try{var h=n instanceof Map?n:Object.entries(n);for(const[e,n]of h){let s=n;m(n)&&(s=wt(n)),t.push(r+e+"="+encodeURIComponent(s))}}catch(e){throw t.push(r+"type="+encodeURIComponent("_badmap")),e}}catch(t){s&&s(n)}}if(a){h=t.join("&");break t}}h=void 0}return t=t.i.splice(0,n),e.G=t,h}function Sn(t){if(!t.g&&!t.v){t.Y=1;var e=t.Da;I||D(),x||(I(),x=!0),_.add(e,t),t.A=0}}function En(t){return!(t.g||t.v||t.A>=3)&&(t.Y++,t.v=Ht(w(t.Da,t),Rn(t,t.A)),t.A++,!0)}function Cn(t){null!=t.B&&(v.clearTimeout(t.B),t.B=null)}function An(t){t.g=new Vt(t,t.j,"rpc",t.Y),null===t.u&&(t.g.J=t.o),t.g.P=0;var e=Te(t.na);Ce(e,"RID","rpc"),Ce(e,"SID",t.M),Ce(e,"AID",t.K),Ce(e,"CI",t.F?"0":"1"),!t.F&&t.ia&&Ce(e,"TO",t.ia),Ce(e,"TYPE","xmlhttp"),Tn(t,e),t.u&&t.o&&en(e,t.u,t.o),t.O&&(t.g.H=t.O);var n=t.g;t=t.ba,n.M=1,n.A=Ae(Te(e)),n.u=null,n.R=!0,te(n,t)}function On(t){null!=t.C&&(v.clearTimeout(t.C),t.C=null)}function Pn(t,e){var n=null;if(t.g==e){On(t),Cn(t),t.g=null;var s=2}else{if(!pe(t.h,e))return;n=e.G,ye(t.h,e),s=1}if(0!=t.I)if(e.o)if(1==s){n=e.u?e.u.length:0,e=Date.now()-e.F;var o=t.D;ft(s=It(),new Lt(s,n)),mn(t)}else Sn(t);else if(3==(o=e.m)||0==o&&e.X>0||!(1==s&&bn(t,e)||2==s&&En(t)))switch(n&&n.length>0&&(e=t.h,e.i=e.i.concat(n)),o){case 1:In(t,5);break;case 4:In(t,10);break;case 3:In(t,6);break;default:In(t,2)}}function Rn(t,e){let n=t.Qa+Math.floor(Math.random()*t.Za);return t.isActive()||(n*=2),n*e}function In(t,e){if(t.j.info("Error code "+e),2==e){var n=w(t.bb,t),s=t.Ua;const e=!s;s=new we(s||"//www.google.com/images/cleardot.gif"),v.location&&"http"==v.location.protocol||je(s,"https"),Ae(s),e?Ge(s.toString(),n):Je(s.toString(),n)}else Mt(2);t.I=0,t.l&&t.l.pa(e),xn(t),vn(t)}function xn(t){if(t.I=0,t.ja=[],t.l){const e=ve(t.h);0==e.length&&0==t.i.length||(C(t.ja,e),C(t.ja,t.i),t.h.i.length=0,E(t.i),t.i.length=0),t.l.oa()}}function _n(t,e,n){var s=n instanceof we?Te(n):new we(n);if(""!=s.g)e&&(s.g=e+"."+s.g),Se(s,s.u);else{var o=v.location;s=o.protocol,e=e?e+"."+o.hostname:o.hostname,o=+o.port;const t=new we(null);s&&je(t,s),e&&(t.g=e),o&&Se(t,o),n&&(t.h=n),s=t}return n=t.G,e=t.wa,n&&e&&Ce(s,n,e),Ce(s,"VER",t.ka),Tn(t,s),s}function Dn(t,e,n){if(e&&!t.L)throw Error("Can't create secondary domain capable XhrIo object.");return(e=t.Aa&&!t.ma?new nn(new Ve({ab:n})):new nn(t.ma)).Fa(t.L),e}function Mn(){}function Ln(){}function Hn(t,e){ct.call(this),this.g=new pn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.sa&&(t?t["X-WebChannel-Client-Profile"]=e.sa:t={"X-WebChannel-Client-Profile":e.sa}),this.g.U=t,(t=e&&e.Qb)&&!k(t)&&(this.g.u=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!k(e)&&(this.g.G=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new Bn(this)}function Xn(t){At.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function kn(){Ot.call(this),this.status=1}function Bn(t){this.g=t}(f=nn.prototype).Fa=function(t){this.H=t},f.ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);e=e?e.toUpperCase():"GET",this.D=t,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Ut.g(),this.g.onreadystatechange=S(w(this.Ca,this));try{this.B=!0,this.g.open(e,String(t),!0),this.B=!1}catch(t){return void rn(this,t)}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var o in s)n.set(o,s[o]);else{if("function"!=typeof s.keys||"function"!=typeof s.get)throw Error("Unknown input type for opt_headers: "+String(s));for(const t of s.keys())n.set(t,s.get(t))}s=Array.from(n.keys()).find(t=>"content-type"==t.toLowerCase()),o=v.FormData&&t instanceof v.FormData,!(Array.prototype.indexOf.call(on,e,void 0)>=0)||s||o||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[t,e]of n)this.g.setRequestHeader(t,e);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(t),this.v=!1}catch(t){rn(this,t)}},f.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=t||7,ft(this,"complete"),ft(this,"abort"),ln(this))},f.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ln(this,!0)),nn.Z.N.call(this)},f.Ca=function(){this.u||(this.B||this.v||this.j?an(this):this.Xa())},f.Xa=function(){an(this)},f.isActive=function(){return!!this.g},f.ca=function(){try{return un(this)>2?this.g.status:-1}catch(t){return-1}},f.la=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},f.La=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Tt(e)}},f.ya=function(){return this.o},f.Ha=function(){return"string"==typeof this.l?this.l:String(this.l)},(f=pn.prototype).ka=8,f.I=1,f.connect=function(t,e,n,s){Mt(0),this.W=t,this.H=e||{},n&&void 0!==s&&(this.H.OSID=n,this.H.OAID=s),this.F=this.X,this.J=_n(this,null,this.W),mn(this)},f.Ea=function(t){if(this.m)if(this.m=null,1==this.I){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const o=new Vt(this,this.j,t);let r=this.o;if(this.U&&(r?(r=J(r),q(r,this.U)):r=this.U),null!==this.u||this.R||(o.J=r,r=null),this.S)t:{for(var e=0,n=0;n<this.i.length;n++){var s=this.i[n];if(void 0===(s="__data__"in s.map&&"string"==typeof(s=s.map.__data__)?s.length:void 0))break;if((e+=s)>4096){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=jn(this,o,e),Ce(n=Te(this.J),"RID",t),Ce(n,"CVER",22),this.G&&Ce(n,"X-HTTP-Session-Id",this.G),Tn(this,n),r&&(this.R?e="headers="+Wt(tn(r))+"&"+e:this.u&&en(n,this.u,r)),de(this.h,o),this.Ra&&Ce(n,"TYPE","init"),this.S?(Ce(n,"$req",e),Ce(n,"SID","null"),o.U=!0,Qt(o,n,null)):Qt(o,n,e),this.I=2}}else 3==this.I&&(t?wn(this,t):0==this.i.length||fe(this.h)||wn(this))},f.Da=function(){if(this.v=null,An(this),this.aa&&!(this.P||null==this.g||this.T<=0)){var t=4*this.T;this.j.info("BP detection timer enabled: "+t),this.B=Ht(w(this.Wa,this),t)}},f.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Mt(10),yn(this),An(this))},f.Va=function(){null!=this.C&&(this.C=null,yn(this),En(this),Mt(19))},f.bb=function(t){t?(this.j.info("Successfully pinged google.com"),Mt(2)):(this.j.info("Failed to ping google.com"),Mt(1))},f.isActive=function(){return!!this.l&&this.l.isActive(this)},(f=Mn.prototype).ra=function(){},f.qa=function(){},f.pa=function(){},f.oa=function(){},f.isActive=function(){return!0},f.Ka=function(){},Ln.prototype.g=function(t,e){return new Hn(t,e)},j(Hn,ct),Hn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Hn.prototype.close=function(){dn(this.g)},Hn.prototype.o=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.v&&((n={}).__data__=wt(t),t=n);e.i.push(new ue(e.Ya++,t)),3==e.I&&mn(e)},Hn.prototype.N=function(){this.g.l=null,delete this.j,dn(this.g),delete this.g,Hn.Z.N.call(this)},j(Xn,At),j(kn,Ot),j(Bn,Mn),Bn.prototype.ra=function(){ft(this.g,"a")},Bn.prototype.qa=function(t){ft(this.g,new Xn(t))},Bn.prototype.pa=function(t){ft(this.g,new kn)},Bn.prototype.oa=function(){ft(this.g,"b")},Ln.prototype.createWebChannel=Ln.prototype.g,Hn.prototype.send=Hn.prototype.o,Hn.prototype.open=Hn.prototype.m,Hn.prototype.close=Hn.prototype.close,l=c.createWebChannelTransport=function(){return new Ln},a=c.getStatEventTarget=function(){return It()},h=c.Event=Pt,r=c.Stat={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Yt.NO_ERROR=0,Yt.TIMEOUT=8,Yt.HTTP_ERROR=6,o=c.ErrorCode=Yt,Gt.COMPLETE="complete",s=c.EventType=Gt,Et.EventType=Ct,Ct.OPEN="a",Ct.CLOSE="b",Ct.ERROR="c",Ct.MESSAGE="d",ct.prototype.listen=ct.prototype.J,n=c.WebChannel=Et,e=c.FetchXmlHttpFactory=Ve,nn.prototype.listenOnce=nn.prototype.K,nn.prototype.getLastError=nn.prototype.Ha,nn.prototype.getLastErrorCode=nn.prototype.ya,nn.prototype.getStatus=nn.prototype.ca,nn.prototype.getResponseJson=nn.prototype.La,nn.prototype.getResponseText=nn.prototype.la,nn.prototype.send=nn.prototype.ea,nn.prototype.setWithCredentials=nn.prototype.Fa,t=c.XhrIo=nn}).apply(void 0!==u?u:'undefined'!=typeof self?self:'undefined'!=typeof window?window:{})},1652,[]);
__d(function(g,r,i,a,m,_e,d){"use strict";Object.defineProperty(_e,'__esModule',{value:!0}),Object.defineProperty(_e,"default",{enumerable:!0,get:function(){return l}});var e,t=r(d[0]),n=(e=t)&&e.__esModule?e:{default:e},o=r(d[1]);Object.keys(o).forEach(function(e){'default'===e||Object.prototype.hasOwnProperty.call(_e,e)||Object.defineProperty(_e,e,{enumerable:!0,get:function(){return o[e]}})});var c=r(d[2]);Object.keys(c).forEach(function(e){'default'===e||Object.prototype.hasOwnProperty.call(_e,e)||Object.defineProperty(_e,e,{enumerable:!0,get:function(){return c[e]}})});var u=r(d[3]);Object.keys(u).forEach(function(e){'default'===e||Object.prototype.hasOwnProperty.call(_e,e)||Object.defineProperty(_e,e,{enumerable:!0,get:function(){return u[e]}})});var f=r(d[4]);Object.keys(f).forEach(function(e){'default'===e||Object.prototype.hasOwnProperty.call(_e,e)||Object.defineProperty(_e,e,{enumerable:!0,get:function(){return f[e]}})});var l=n.default},1653,[1654,1669,1671,1674,1675]);
__d(function(g,r,_i,a,m,_e,_d){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(_e,'__esModule',{value:!0}),Object.defineProperty(_e,"default",{enumerable:!0,get:function(){return M}});var t=r(_d[0]),n=e(t),l=e(r(_d[1])),o=r(_d[2]),i=r(_d[3]),u=e(i),s=e(r(_d[4])),c=r(_d[5]),v=e(r(_d[6])),d=e(r(_d[7])),f=e(r(_d[8])),_=r(_d[9]),b=e(_),h=r(_d[10]),D=e(h),S=e(r(_d[11])),p=r(_d[12]),x=r(_d[13]),O=e(r(_d[14])),A=r(_d[15]);function E(){return E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},E.apply(this,arguments)}const J=u.default.createAnimatedComponent(o.FlatList),F={code:"(function reactNativeDraggableFlatlist_DraggableFlatListJs1(){const[isTouchActiveNative]=this.__closure;return isTouchActiveNative.value;})"},I={code:"(function reactNativeDraggableFlatlist_DraggableFlatListJs2(cur,prev){const[touchTranslate,activeIndexAnim,disabled,runOnJS,onRelease,onDragEnd,spacerIndexAnim]=this.__closure;if(cur!==prev&&!cur){const hasMoved=!!touchTranslate.value;if(!hasMoved&&activeIndexAnim.value>=0&&!disabled.value){runOnJS(onRelease)(activeIndexAnim.value);runOnJS(onDragEnd)({from:activeIndexAnim.value,to:spacerIndexAnim.value});}}})"},C={code:"(function reactNativeDraggableFlatlist_DraggableFlatListJs3(){const[spacerIndexAnim]=this.__closure;return spacerIndexAnim.value;})"},w={code:"(function reactNativeDraggableFlatlist_DraggableFlatListJs4(cur,prev){const[runOnJS,onPlaceholderIndexChange]=this.__closure;if(prev!==null&&cur!==prev&&cur>=0&&prev>=0){runOnJS(onPlaceholderIndexChange)(cur);}})"},k={code:"(function reactNativeDraggableFlatlist_DraggableFlatListJs5(evt){const[gestureDisabled,disabled,panGestureState]=this.__closure;gestureDisabled.value=disabled.value;if(gestureDisabled.value)return;panGestureState.value=evt.state;})"},y={code:"(function reactNativeDraggableFlatlist_DraggableFlatListJs6(evt){const[gestureDisabled,panGestureState,horizontalAnim,touchTranslate]=this.__closure;if(gestureDisabled.value)return;panGestureState.value=evt.state;const translation=horizontalAnim.value?evt.translationX:evt.translationY;touchTranslate.value=translation;})"},L={code:"(function reactNativeDraggableFlatlist_DraggableFlatListJs7(){const[runOnJS,onDragEnd,activeIndexAnim,spacerIndexAnim,disabled]=this.__closure;runOnJS(onDragEnd)({from:activeIndexAnim.value,to:spacerIndexAnim.value});disabled.value=false;})"},T={code:"(function reactNativeDraggableFlatlist_DraggableFlatListJs8(evt){const[gestureDisabled,isTouchActiveNative,horizontalAnim,touchTranslate,autoScrollDistance,panGestureState,activeIndexAnim,disabled,runOnJS,onRelease,placeholderOffset,activeCellOffset,withSpring,animationConfigRef,_worklet_15636480506604_init_data,onDragEnd,spacerIndexAnim]=this.__closure;if(gestureDisabled.value)return;isTouchActiveNative.value=false;const translation=horizontalAnim.value?evt.translationX:evt.translationY;touchTranslate.value=translation+autoScrollDistance.value;panGestureState.value=evt.state;if(activeIndexAnim.value===-1||disabled.value)return;disabled.value=true;runOnJS(onRelease)(activeIndexAnim.value);const springTo=placeholderOffset.value-activeCellOffset.value;touchTranslate.value=withSpring(springTo,animationConfigRef.value,function reactNativeDraggableFlatlist_DraggableFlatListJs7Factory([_worklet_15636480506604_init_data,runOnJS,onDragEnd,activeIndexAnim,spacerIndexAnim,disabled]){const reactNativeDraggableFlatlist_DraggableFlatListJs7=function(){runOnJS(onDragEnd)({from:activeIndexAnim.value,to:spacerIndexAnim.value});disabled.value=false;};reactNativeDraggableFlatlist_DraggableFlatListJs7.__closure=[runOnJS,onDragEnd,activeIndexAnim,spacerIndexAnim,disabled];reactNativeDraggableFlatlist_DraggableFlatListJs7.__workletHash=15636480506604;reactNativeDraggableFlatlist_DraggableFlatListJs7.__initData=_worklet_15636480506604_init_data;return reactNativeDraggableFlatlist_DraggableFlatListJs7;}([_worklet_15636480506604_init_data,runOnJS,onDragEnd,activeIndexAnim,spacerIndexAnim,disabled]));})"},R={code:"(function reactNativeDraggableFlatlist_DraggableFlatListJs9(){const[runOnJS,onContainerTouchStart]=this.__closure;runOnJS(onContainerTouchStart)();})"},N={code:"(function reactNativeDraggableFlatlist_DraggableFlatListJs10(){const[runOnJS,onContainerTouchEnd]=this.__closure;runOnJS(onContainerTouchEnd)();})"},z={code:"(function reactNativeDraggableFlatlist_DraggableFlatListJs11(evt){const[scrollOffset,horizontalAnim,runOnJS,onScroll]=this.__closure;scrollOffset.value=horizontalAnim.value?evt.contentOffset.x:evt.contentOffset.y;runOnJS(onScroll)(scrollOffset.value);})"};function H(e,t){return n.default.createElement(f.default,e,n.default.createElement(b.default,null,n.default.createElement(D.default,{flatListRef:t},n.default.createElement(P,e))))}const P=(0,A.typedMemo)(function(e){const{cellDataRef:f,containerRef:b,flatlistRef:D,keyToIndexRef:A,propsRef:H,animationConfigRef:P}=(0,h.useRefs)(),{activeCellOffset:M,activeCellSize:G,activeIndexAnim:V,containerSize:j,scrollOffset:Y,scrollViewSize:U,spacerIndexAnim:X,horizontalAnim:K,placeholderOffset:B,touchTranslate:q,autoScrollDistance:Q,panGestureState:W,isTouchActiveNative:Z,viewableIndexMin:$,viewableIndexMax:ee,disabled:te}=(0,_.useAnimatedValues)(),ae=(0,x.useStableCallback)(()=>{V.value=-1,X.value=-1,q.value=0,G.value=-1,M.value=-1,ie(null)}),{dragHitSlop:ne=c.DEFAULT_PROPS.dragHitSlop,scrollEnabled:le=c.DEFAULT_PROPS.scrollEnabled,activationDistance:re=c.DEFAULT_PROPS.activationDistance}=e;let[oe,ie]=(0,t.useState)(null);const[ue,se]=(0,t.useState)(!H.current.enableLayoutAnimationExperimental),ce=(0,x.useStableCallback)((t,n)=>{if(!e.keyExtractor)throw new Error("You must provide a keyExtractor to DraggableFlatList");return e.keyExtractor(t,n)}),ve=(0,t.useRef)(e.data),de=ve.current.map(ce).join("")!==e.data.map(ce).join("");ve.current=e.data,de&&(oe=null,l.default.runAfterInteractions(()=>{ae()})),(0,t.useEffect)(()=>{H.current.enableLayoutAnimationExperimental&&(oe?se(!0):setTimeout(()=>{se(!1)},100))},[oe]),(0,t.useLayoutEffect)(()=>{e.data.forEach((e,t)=>{const n=ce(e,t);A.current.set(n,t)})},[e.data,ce,A]);const fe=(0,x.useStableCallback)(e=>{if(te.value)return;const t=A.current.get(e),n=f.current.get(e);n&&(M.value=n.measurements.offset,G.value=n.measurements.size);const{onDragBegin:l}=H.current;void 0!==t&&(X.value=t,V.value=t,ie(e),null==l||l(t))}),ge=(0,t.useMemo)(()=>({activeKey:oe,extraData:e.extraData}),[oe,e.extraData]),be=(0,t.useCallback)(t=>{let{item:l,index:o}=t;const i=ce(l,o);return o!==A.current.get(i)&&A.current.set(i,o),n.default.createElement(d.default,{item:l,itemKey:i,renderItem:e.renderItem,drag:fe,extraData:e.extraData})},[e.renderItem,e.extraData,fe,ce]),me=(0,x.useStableCallback)(t=>{var n;null===(n=e.onRelease)||void 0===n||n.call(e,t)}),he=(0,x.useStableCallback)(t=>{let{from:n,to:l}=t;const{onDragEnd:o,data:i}=e,u=[...i];n!==l&&(u.splice(n,1),u.splice(l,0,i[n])),null==o||o({from:n,to:l,data:u}),ie(null)}),De=(0,x.useStableCallback)(t=>{var n;null===(n=e.onPlaceholderIndexChange)||void 0===n||n.call(e,t)});(0,i.useAnimatedReaction)((function([e,t]){const n=function(){return t.value};return n.__closure=[t],n.__workletHash=0xd1db1e4aa1c,n.__initData=e,n})([F,Z]),(function([e,t,n,l,o,i,u,s]){const c=function(e,c){if(e!==c&&!e){!!!t.value&&n.value>=0&&!l.value&&(o(i)(n.value),o(u)({from:n.value,to:s.value}))}};return c.__closure=[t,n,l,o,i,u,s],c.__workletHash=6112485499173,c.__initData=e,c})([I,q,V,te,i.runOnJS,me,he,X]),[Z,he,me]),(0,i.useAnimatedReaction)((function([e,t]){const n=function(){return t.value};return n.__closure=[t],n.__workletHash=0xeb3568f8a3e,n.__initData=e,n})([C,X]),(function([e,t,n]){const l=function(e,l){null!==l&&e!==l&&e>=0&&l>=0&&t(n)(e)};return l.__closure=[t,n],l.__workletHash=8300002126661,l.__initData=e,l})([w,i.runOnJS,De]),[X]);const Se=(0,i.useSharedValue)(!1),pe=o.Gesture.Pan().onBegin((function([e,t,n,l]){const o=function(e){t.value=n.value,t.value||(l.value=e.state)};return o.__closure=[t,n,l],o.__workletHash=0xac0f9c7261d,o.__initData=e,o})([k,Se,te,W])).onUpdate((function([e,t,n,l,o]){const i=function(e){if(t.value)return;n.value=e.state;const i=l.value?e.translationX:e.translationY;o.value=i};return i.__closure=[t,n,l,o],i.__workletHash=2360393134882,i.__initData=e,i})([y,Se,W,K,q])).onEnd((function([e,t,n,l,o,i,u,s,c,v,d,f,_,b,h,D,S,p]){const x=function(e){if(t.value)return;n.value=!1;const x=l.value?e.translationX:e.translationY;if(o.value=x+i.value,u.value=e.state,-1===s.value||c.value)return;c.value=!0,v(d)(s.value);const O=f.value-_.value;o.value=b(O,h.value,(function([e,t,n,l,o,i]){const u=function(){t(n)({from:l.value,to:o.value}),i.value=!1};return u.__closure=[t,n,l,o,i],u.__workletHash=0xe38a6ddbaec,u.__initData=e,u})([D,v,S,s,p,c]))};return x.__closure=[t,n,l,o,i,u,s,c,v,d,f,_,b,h,D,S,p],x.__workletHash=0xa6f504fbc0f,x.__initData=e,x})([T,Se,Z,K,q,Q,W,V,te,i.runOnJS,me,B,M,i.withSpring,P,L,he,X])).onTouchesDown((function([e,t,n]){const l=function(){t(n)()};return l.__closure=[t,n],l.__workletHash=5880627709303,l.__initData=e,l})([R,i.runOnJS,()=>(te.value||(Z.value=!0),!1)])).onTouchesUp((function([e,t,n]){const l=function(){t(n)()};return l.__closure=[t,n],l.__workletHash=7908655038351,l.__initData=e,l})([N,i.runOnJS,()=>{Z.value=!1}]));if(ne&&pe.hitSlop(ne),re){const t=[-re,re];e.horizontal?pe.activeOffsetX(t):pe.activeOffsetY(t)}const xe=(0,x.useStableCallback)(t=>{var n;null===(n=e.onScrollOffsetChange)||void 0===n||n.call(e,t)}),Oe=(0,i.useAnimatedScrollHandler)({onScroll:(function([e,t,n,l,o]){const i=function(e){t.value=n.value?e.contentOffset.x:e.contentOffset.y,l(o)(t.value)};return i.__closure=[t,n,l,o],i.__workletHash=7820254519182,i.__initData=e,i})([z,Y,K,i.runOnJS,xe])},[K]);(0,p.useAutoScroll)();const Ae=(0,x.useStableCallback)(t=>{var n;const l=t.viewableItems.filter(e=>e.isViewable).map(e=>e.index).filter(e=>"number"==typeof e),o=Math.min(...l),i=Math.max(...l);$.value=o,ee.value=i,null===(n=e.onViewableItemsChanged)||void 0===n||n.call(e,t)});return n.default.createElement(S.default,{activeKey:oe,keyExtractor:ce,horizontal:!!e.horizontal,layoutAnimationDisabled:ue},n.default.createElement(o.GestureDetector,{gesture:pe},n.default.createElement(u.default.View,{style:e.containerStyle,ref:b,onLayout:t=>{var n;let{nativeEvent:{layout:l}}=t;const{width:o,height:i}=l;j.value=e.horizontal?o:i,null===(n=e.onContainerLayout)||void 0===n||n.call(e,{layout:l,containerRef:b})}},e.renderPlaceholder&&n.default.createElement(v.default,{renderPlaceholder:e.renderPlaceholder}),n.default.createElement(J,E({},e,{data:e.data,onViewableItemsChanged:Ae,CellRendererComponent:s.default,ref:D,onContentSizeChange:(t,n)=>{var l;U.value=e.horizontal?t:n,null===(l=e.onContentSizeChange)||void 0===l||l.call(e,t,n)},scrollEnabled:!oe&&le,renderItem:be,extraData:ge,keyExtractor:ce,onScroll:Oe,scrollEventThrottle:16,simultaneousHandlers:e.simultaneousHandlers,removeClippedSubviews:!1})),!!e.onScrollOffsetChange&&n.default.createElement(O.default,{onScrollOffsetChange:e.onScrollOffsetChange,scrollOffset:Y}))))});var M=n.default.forwardRef(H)},1654,[39,206,791,892,1655,1657,1665,1666,1660,1659,1661,1656,1667,1664,1668,1662]);
__d(function(g,r,_i,a,m,_e,d){"use strict";function t(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(_e,'__esModule',{value:!0}),Object.defineProperty(_e,"default",{enumerable:!0,get:function(){return A}});var e=r(d[0]),n=t(e),o=t(r(d[1])),i=r(d[2]),l=t(i),s=r(d[3]),u=r(d[4]),c=r(d[5]),f=r(d[6]),y=r(d[7]),_=r(d[8]),h=t(r(d[9])),C=r(d[10]);function v(){return v=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},v.apply(this,arguments)}const L={code:"(function reactNativeDraggableFlatlist_CellRendererComponentJs1(){const[translate,isWeb,heldTanslate,activeKey,horizontalAnim]=this.__closure;if(translate.value&&!isWeb){heldTanslate.value=translate.value;}const t=activeKey?translate.value:heldTanslate.value;return{transform:[horizontalAnim.value?{translateX:t}:{translateY:t}]};})"},b={code:"(function reactNativeDraggableFlatlist_CellRendererComponentJs2(t,_layoutDisabled){const[stashConfig,getStashedConfig]=this.__closure;if(!t)return;const config=global.LayoutAnimationRepository.configs[t];if(config)stashConfig(t,config);const stashedConfig=getStashedConfig(t);if(_layoutDisabled){global.LayoutAnimationRepository.removeConfig(t);}else if(stashedConfig){global.LayoutAnimationRepository.registerConfig(t,stashedConfig);}})"};var A=(0,f.typedMemo)(function(t){const{item:f,index:A,onLayout:p,children:S,...F}=t,N=(0,e.useRef)(null),{cellDataRef:x,propsRef:E,containerRef:O}=(0,y.useRefs)(),{horizontalAnim:k,scrollOffset:w}=(0,_.useAnimatedValues)(),{activeKey:z,keyExtractor:H,horizontal:J,layoutAnimationDisabled:V}=(0,s.useDraggableFlatListContext)(),W=H(f,A),j=(0,i.useSharedValue)(-1),I=(0,i.useSharedValue)(-1),M=(0,i.useSharedValue)(0),T=(0,c.useCellTranslate)({cellOffset:j,cellSize:I,cellIndex:A}),K=z===W,P=(0,i.useAnimatedStyle)((function([t,e,n,o,i,l]){const s=function(){e.value&&!n&&(o.value=e.value);const t=i?e.value:o.value;return{transform:[l.value?{translateX:t}:{translateY:t}]}};return s.__closure=[e,n,o,i,l],s.__workletHash=6447074976403,s.__initData=t,s})([L,T,u.isWeb,M,z,k]),[T,z]),U=(0,C.useStableCallback)(()=>{const t=(t,e,n,o)=>{u.isWeb&&J&&(t+=w.value);const i=J?t:e,l=J?n:o;x.current.set(W,{measurements:{size:l,offset:i}}),I.value=l,j.value=i},e=()=>{var t;null!==(t=E.current)&&void 0!==t&&t.debug&&console.log(`## on measure fail, index: ${A}`)},n=O.current,o=N.current,i=n;o&&i&&o.measureLayout(i,t,e)}),X=(0,C.useStableCallback)(t=>{M.value=0,U(),p&&t&&p(t)});(0,e.useEffect)(()=>{u.isWeb&&requestAnimationFrame(()=>{X()})},[A,X]);const Y=(0,e.useMemo)(()=>({elevation:K?1:0,zIndex:K?999:0,flexDirection:J?"row":"column"}),[K,J]),{itemEnteringAnimation:q,itemExitingAnimation:$,itemLayoutAnimation:B}=E.current;return(0,e.useEffect)(()=>{if(!E.current.enableLayoutAnimationExperimental)return;const t=(0,o.default)(N.current);(0,i.runOnUI)((function([t,e,n]){const o=function(t,o){if(!t)return;const i=g.LayoutAnimationRepository.configs[t];i&&e(t,i);const l=n(t);o?g.LayoutAnimationRepository.removeConfig(t):l&&g.LayoutAnimationRepository.registerConfig(t,l)};return o.__closure=[e,n],o.__workletHash=546475227222,o.__initData=t,o})([b,D,R]))(t,V)},[V]),n.default.createElement(l.default.View,v({},F,{ref:N,onLayout:X,entering:q,exiting:$,layout:E.current.enableLayoutAnimationExperimental?B:void 0,style:[t.style,Y,P],pointerEvents:z?"none":"auto"}),n.default.createElement(h.default,{isActive:K},S))});(0,i.runOnUI)((function([t]){const e=function(){g.RNDFLLayoutAnimationConfigStash={}};return e.__workletHash=7026430573294,e.__initData=t,e})([{code:"(function reactNativeDraggableFlatlist_CellRendererComponentJs3(){global.RNDFLLayoutAnimationConfigStash={};})"}]))();const D=(function([t]){const e=function(t,e){g.RNDFLLayoutAnimationConfigStash||(g.RNDFLLayoutAnimationConfigStash={}),g.RNDFLLayoutAnimationConfigStash[t]=e};return e.__workletHash=8264932176546,e.__initData=t,e})([{code:"(function stashConfig_reactNativeDraggableFlatlist_CellRendererComponentJs4(tag,config){if(!global.RNDFLLayoutAnimationConfigStash)global.RNDFLLayoutAnimationConfigStash={};global.RNDFLLayoutAnimationConfigStash[tag]=config;})"}]),R=(function([t]){const e=function(t){return g.RNDFLLayoutAnimationConfigStash?g.RNDFLLayoutAnimationConfigStash[t]:null};return e.__workletHash=7145677485961,e.__initData=t,e})([{code:"(function getStashedConfig_reactNativeDraggableFlatlist_CellRendererComponentJs5(tag){if(!global.RNDFLLayoutAnimationConfigStash)return null;return global.RNDFLLayoutAnimationConfigStash[tag];})"}])},1655,[39,159,892,1656,1657,1658,1662,1661,1659,1663,1664]);
__d(function(g,r,i,a,m,_e,d){"use strict";Object.defineProperty(_e,'__esModule',{value:!0}),Object.defineProperty(_e,"default",{enumerable:!0,get:function(){return l}}),_e.useDraggableFlatListContext=function(){const e=(0,t.useContext)(o);if(!e)throw new Error("useDraggableFlatListContext must be called within DraggableFlatListProvider");return e};var e,t=r(d[0]),n=(e=t)&&e.__esModule?e:{default:e};const o=n.default.createContext(void 0);function l(e){let{activeKey:l,keyExtractor:u,horizontal:c,layoutAnimationDisabled:s,children:f}=e;const b=(0,t.useMemo)(()=>({activeKey:l,keyExtractor:u,horizontal:c,layoutAnimationDisabled:s}),[l,u,c,s]);return n.default.createElement(o.Provider,{value:b},f)}},1656,[39]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),Object.defineProperty(e,"SCROLL_POSITION_TOLERANCE",{enumerable:!0,get:function(){return n}}),Object.defineProperty(e,"DEFAULT_ANIMATION_CONFIG",{enumerable:!0,get:function(){return o}}),Object.defineProperty(e,"DEFAULT_PROPS",{enumerable:!0,get:function(){return u}}),Object.defineProperty(e,"isIOS",{enumerable:!0,get:function(){return l}}),Object.defineProperty(e,"isAndroid",{enumerable:!0,get:function(){return s}}),Object.defineProperty(e,"isWeb",{enumerable:!0,get:function(){return c}}),Object.defineProperty(e,"isReanimatedV2",{enumerable:!0,get:function(){return f}}),r(d[0]);var t=r(d[1]);const n=2,o={damping:20,mass:.2,stiffness:100,overshootClamping:!1,restSpeedThreshold:.2,restDisplacementThreshold:.2},u={autoscrollThreshold:30,autoscrollSpeed:100,animationConfig:o,scrollEnabled:!0,dragHitSlop:0,activationDistance:0,dragItemOverflow:!1},l=!1,s=!1,c=!0,f=!!t.useSharedValue;if(!f)throw new Error("Your version of react-native-reanimated is too old for react-native-draggable-flatlist!")},1657,[29,892]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.useCellTranslate=function(u){let{cellIndex:c,cellSize:f,cellOffset:o}=u;const{activeIndexAnim:A,activeCellSize:x,hoverOffset:I,spacerIndexAnim:h,placeholderOffset:S,hoverAnim:z,viewableIndexMin:O,viewableIndexMax:P}=(0,t.useAnimatedValues)(),{activeKey:p}=(0,s.useDraggableFlatListContext)(),{animationConfigRef:w}=(0,n.useRefs)(),C=(0,l.useDerivedValue)((function([l,t,s,n,v,u,c,f,o,A,x,I,h,S,z]){const O=function(){const l=t===s.value,O=!l&&(t<n.value||t>v.value);if(!u||s.value<0||O)return 0;const P=t<s.value,p=t>s.value,w=c.value+f.value,C=o.value+A.value/2,_=o.value+A.value;let b=-1;if(p?w>=o.value&&w<C?b=t-1:w>=C&&w<_&&(b=t):P&&(c.value<_&&c.value>=C?b=t+1:c.value>=o.value&&c.value<C&&(b=t)),-1!==b&&b!==x.value&&(x.value=b),x.value===t){const l=p?A.value+(o.value-f.value):o.value;I.value=l}if(l)return h.value;const M=(p?t<=x.value:t>=x.value)?f.value*(p?-1:1):0;return S(M,z.value)};return O.__closure=[t,s,n,v,u,c,f,o,A,x,I,h,S,z],O.__workletHash=0xce8fd08585a,O.__initData=l,O})([v,c,A,O,P,p,I,x,o,f,h,S,z,l.withSpring,w]),[p,c]);return C};var l=r(d[0]),t=r(d[1]),s=r(d[2]),n=r(d[3]);const v={code:"(function reactNativeDraggableFlatlist_useCellTranslateJs1(){const[cellIndex,activeIndexAnim,viewableIndexMin,viewableIndexMax,activeKey,hoverOffset,activeCellSize,cellOffset,cellSize,spacerIndexAnim,placeholderOffset,hoverAnim,withSpring,animationConfigRef]=this.__closure;const isActiveCell=cellIndex===activeIndexAnim.value;const isOutsideViewableRange=!isActiveCell&&(cellIndex<viewableIndexMin.value||cellIndex>viewableIndexMax.value);if(!activeKey||activeIndexAnim.value<0||isOutsideViewableRange){return 0;}const isBeforeActive=cellIndex<activeIndexAnim.value;const isAfterActive=cellIndex>activeIndexAnim.value;const hoverPlusActiveSize=hoverOffset.value+activeCellSize.value;const offsetPlusHalfSize=cellOffset.value+cellSize.value/2;const offsetPlusSize=cellOffset.value+cellSize.value;let result=-1;if(isAfterActive){if(hoverPlusActiveSize>=cellOffset.value&&hoverPlusActiveSize<offsetPlusHalfSize){result=cellIndex-1;}else if(hoverPlusActiveSize>=offsetPlusHalfSize&&hoverPlusActiveSize<offsetPlusSize){result=cellIndex;}}else if(isBeforeActive){if(hoverOffset.value<offsetPlusSize&&hoverOffset.value>=offsetPlusHalfSize){result=cellIndex+1;}else if(hoverOffset.value>=cellOffset.value&&hoverOffset.value<offsetPlusHalfSize){result=cellIndex;}}if(result!==-1&&result!==spacerIndexAnim.value){spacerIndexAnim.value=result;}if(spacerIndexAnim.value===cellIndex){const newPlaceholderOffset=isAfterActive?cellSize.value+(cellOffset.value-activeCellSize.value):cellOffset.value;placeholderOffset.value=newPlaceholderOffset;}if(isActiveCell){return hoverAnim.value;}const shouldTranslate=isAfterActive?cellIndex<=spacerIndexAnim.value:cellIndex>=spacerIndexAnim.value;const translationAmt=shouldTranslate?activeCellSize.value*(isAfterActive?-1:1):0;return withSpring(translationAmt,animationConfigRef.value);})"}},1658,[892,1659,1656,1661]);
__d(function(g,r,i,a,m,_e,d){"use strict";Object.defineProperty(_e,'__esModule',{value:!0}),Object.defineProperty(_e,"default",{enumerable:!0,get:function(){return c}}),_e.useAnimatedValues=function(){const e=(0,t.useContext)(s);if(!e)throw new Error("useAnimatedValues must be called from within AnimatedValueProvider!");return e};var e,t=r(d[0]),l=(e=t)&&e.__esModule?e:{default:e},n=r(d[1]),u=r(d[2]),o=r(d[3]);const s=l.default.createContext(void 0);function c(e){let{children:t}=e;const n=A();return l.default.createElement(s.Provider,{value:n},t)}const v={code:"(function reactNativeDraggableFlatlist_animatedValueContextJs1(){const[activeIndexAnim]=this.__closure;return activeIndexAnim.value;})"},f={code:"(function reactNativeDraggableFlatlist_animatedValueContextJs2(cur,prev){const[scrollInit,scrollOffset,outerScrollInit,outerScrollOffset]=this.__closure;if(cur!==prev&&cur>=0){scrollInit.value=scrollOffset.value;outerScrollInit.value=outerScrollOffset.value;}})"},_={code:"(function reactNativeDraggableFlatlist_animatedValueContextJs3(){const[isTouchActiveNative,activeIndexAnim]=this.__closure;return isTouchActiveNative.value&&activeIndexAnim.value>=0;})"},h={code:"(function reactNativeDraggableFlatlist_animatedValueContextJs4(){const[isDraggingCell,scrollOffset,scrollInit,outerScrollOffset,outerScrollInit]=this.__closure;if(!isDraggingCell.value)return 0;const innerScrollDiff=scrollOffset.value-scrollInit.value;const outerScrollDiff=outerScrollOffset.value-outerScrollInit.value;const scrollDiff=innerScrollDiff+outerScrollDiff;return scrollDiff;})"},S={code:"(function reactNativeDraggableFlatlist_animatedValueContextJs5(){const[isTouchActiveNative,autoScrollDistance,touchTranslate]=this.__closure;const extraTranslate=isTouchActiveNative.value?autoScrollDistance.value:0;return touchTranslate.value+extraTranslate;})"},D={code:"(function reactNativeDraggableFlatlist_animatedValueContextJs6(){const[containerSize,activeCellSize,scrollOffset,touchPositionDiff,activeCellOffset,scrollViewSize,isTouchActiveNative]=this.__closure;const containerMinusActiveCell=containerSize.value-activeCellSize.value+scrollOffset.value;const offsetRelativeToScrollTop=touchPositionDiff.value+activeCellOffset.value;const constrained=Math.min(containerMinusActiveCell,Math.max(scrollOffset.value,offsetRelativeToScrollTop));const maxTranslateNegative=-activeCellOffset.value;const maxTranslatePositive=scrollViewSize.value-(activeCellOffset.value+activeCellSize.value);const constrainedBase=isTouchActiveNative.value?constrained-activeCellOffset.value:touchPositionDiff.value;return Math.min(Math.max(constrainedBase,maxTranslateNegative),maxTranslatePositive);})"},V={code:"(function reactNativeDraggableFlatlist_animatedValueContextJs7(){const[activeIndexAnim,dragItemOverflow,touchPositionDiff,touchPositionDiffConstrained]=this.__closure;if(activeIndexAnim.value<0)return 0;return dragItemOverflow?touchPositionDiff.value:touchPositionDiffConstrained.value;})"},x={code:"(function reactNativeDraggableFlatlist_animatedValueContextJs8(){const[hoverAnim,activeCellOffset]=this.__closure;return hoverAnim.value+activeCellOffset.value;})"},C={code:"(function reactNativeDraggableFlatlist_animatedValueContextJs9(){const[activeIndexAnim,spacerIndexAnim]=this.__closure;const isHovering=activeIndexAnim.value>=0;if(!isHovering&&spacerIndexAnim.value>=0){spacerIndexAnim.value=-1;}})"};function A(){const e=(0,o.useProps)(),l=(0,n.useSharedValue)(0),s=(0,n.useSharedValue)(0),c=(0,n.useSharedValue)(0),A=(0,n.useSharedValue)(u.State.UNDETERMINED),I=(0,n.useSharedValue)(0),O=(0,n.useSharedValue)(!1),T=(0,n.useSharedValue)(0),w=(0,n.useSharedValue)(!1),N=(0,n.useSharedValue)(!!e.horizontal),b=(0,n.useSharedValue)(-1),M=(0,n.useSharedValue)(-1),P=(0,n.useSharedValue)(0),p=(0,n.useSharedValue)(0),z=(0,n.useSharedValue)(0),H=(0,n.useSharedValue)(0),k=(0,n.useSharedValue)(0),F=(0,n.useSharedValue)(0),J=e.outerScrollOffset||l,E=(0,n.useSharedValue)(0);(0,n.useAnimatedReaction)((function([e,t]){const l=function(){return t.value};return l.__closure=[t],l.__workletHash=111960931031,l.__initData=e,l})([v,b]),(function([e,t,l,n,u]){const o=function(e,o){e!==o&&e>=0&&(t.value=l.value,n.value=u.value)};return o.__closure=[t,l,n,u],o.__workletHash=0x9d1c847913e,o.__initData=e,o})([f,H,z,E,J]),[J]);const R=(0,n.useSharedValue)(0),j=(0,n.useDerivedValue)((function([e,t,l]){const n=function(){return t.value&&l.value>=0};return n.__closure=[t,l],n.__workletHash=9722446325167,n.__initData=e,n})([_,O,b]),[]),y=(0,n.useDerivedValue)((function([e,t,l,n,u,o]){const s=function(){if(!t.value)return 0;return l.value-n.value+(u.value-o.value)};return s.__closure=[t,l,n,u,o],s.__workletHash=0xc73dba6a614,s.__initData=e,s})([h,j,z,H,J,E]),[]),B=(0,n.useDerivedValue)((function([e,t,l,n]){const u=function(){const e=t.value?l.value:0;return n.value+e};return u.__closure=[t,l,n],u.__workletHash=0xf88ed44d4ee,u.__initData=e,u})([S,O,y,I]),[]),G=(0,n.useDerivedValue)((function([e,t,l,n,u,o,s,c]){const v=function(){const e=t.value-l.value+n.value,v=u.value+o.value,f=Math.min(e,Math.max(n.value,v)),_=-o.value,h=s.value-(o.value+l.value),S=c.value?f-o.value:u.value;return Math.min(Math.max(S,_),h)};return v.__closure=[t,l,n,u,o,s,c],v.__workletHash=5316632352678,v.__initData=e,v})([D,s,P,z,B,p,c,O]),[]),U=e.dragItemOverflow,q=(0,n.useDerivedValue)((function([e,t,l,n,u]){const o=function(){return t.value<0?0:l?n.value:u.value};return o.__closure=[t,l,n,u],o.__workletHash=9246762208539,o.__initData=e,o})([V,b,U,B,G]),[]),K=(0,n.useDerivedValue)((function([e,t,l]){const n=function(){return t.value+l.value};return n.__closure=[t,l],n.__workletHash=0x946d284f27c,n.__initData=e,n})([x,q,p]),[q,p]);(0,n.useDerivedValue)((function([e,t,l]){const n=function(){!(t.value>=0)&&l.value>=0&&(l.value=-1)};return n.__closure=[t,l],n.__workletHash=6352398132977,n.__initData=e,n})([C,b,M]),[]);const L=(0,t.useCallback)(()=>{p.value=0,T.value=0},[]),Q=(0,t.useMemo)(()=>({activeCellOffset:p,activeCellSize:P,activeIndexAnim:b,containerSize:s,disabled:w,horizontalAnim:N,hoverAnim:q,hoverOffset:K,isDraggingCell:j,isTouchActiveNative:O,panGestureState:A,placeholderOffset:R,resetTouchedCell:L,scrollOffset:z,scrollViewSize:c,spacerIndexAnim:M,touchPositionDiff:B,touchTranslate:I,autoScrollDistance:y,viewableIndexMin:k,viewableIndexMax:F}),[p,P,b,s,w,N,q,K,j,O,A,R,L,z,c,M,B,I,y,k,F]);return(0,t.useEffect)(()=>{var t;null===(t=e.onAnimValInit)||void 0===t||t.call(e,Q)},[Q]),Q}},1659,[39,892,791,1660]);
__d(function(g,r,i,a,m,_e,d){"use strict";Object.defineProperty(_e,'__esModule',{value:!0}),Object.defineProperty(_e,"default",{enumerable:!0,get:function(){return u}}),_e.useProps=function(){const e=(0,t.useContext)(o);if(!e)throw new Error("useProps must be called from within PropsProvider!");return e};var e,t=r(d[0]),n=(e=t)&&e.__esModule?e:{default:e};const o=n.default.createContext(void 0);function u(e){let{children:t,...u}=e;return n.default.createElement(o.Provider,{value:u},t)}},1660,[39]);
__d(function(g,r,i,a,m,_e,d){"use strict";Object.defineProperty(_e,'__esModule',{value:!0}),Object.defineProperty(_e,"default",{enumerable:!0,get:function(){return l}}),_e.useRefs=function(){const e=(0,t.useContext)(s);if(!e)throw new Error("useRefs must be called from within a RefContext.Provider!");return e};var e,t=r(d[0]),n=(e=t)&&e.__esModule?e:{default:e},f=r(d[1]),u=r(d[2]),o=r(d[3]);const s=n.default.createContext(void 0);function l(e){let{children:t,flatListRef:f}=e;const u=c({flatListRef:f});return n.default.createElement(s.Provider,{value:u},t)}function c(e){let{flatListRef:n}=e;const s=(0,o.useProps)(),{animationConfig:l=u.DEFAULT_PROPS.animationConfig}=s,c=(0,t.useRef)(s);c.current=s;const R=(0,t.useMemo)(()=>({...u.DEFAULT_PROPS.animationConfig,...l}),[l]),P=(0,f.useSharedValue)(R);(0,t.useEffect)(()=>{P.value=R},[R]);const _=(0,t.useRef)(new Map),p=(0,t.useRef)(new Map),v=(0,t.useRef)(null),C=(0,t.useRef)(null),w=n||C,M=(0,t.useRef)(null);return(0,t.useMemo)(()=>({animationConfigRef:P,cellDataRef:_,containerRef:v,flatlistRef:w,keyToIndexRef:p,propsRef:c,scrollViewRef:M}),[])}},1661,[39,892,1657,1660]);
__d(function(g,r,i,a,m,_e,d){"use strict";Object.defineProperty(_e,'__esModule',{value:!0}),Object.defineProperty(_e,"typedMemo",{enumerable:!0,get:function(){return u}});var e,t=r(d[0]);const u=((e=t)&&e.__esModule?e:{default:e}).default.memo},1662,[39]);
__d(function(g,r,i,a,m,_e,d){"use strict";Object.defineProperty(_e,'__esModule',{value:!0}),Object.defineProperty(_e,"default",{enumerable:!0,get:function(){return l}}),_e.CellProvider=c,_e.useIsActive=function(){const e=(0,t.useContext)(u);if(!e)throw new Error("useIsActive must be called from within CellProvider!");return e.isActive};var e,t=r(d[0]),n=(e=t)&&e.__esModule?e:{default:e},o=r(d[1]);const u=n.default.createContext(void 0);function c(e){let{isActive:o,children:c}=e;const l=(0,t.useMemo)(()=>({isActive:o}),[o]);return n.default.createElement(u.Provider,{value:l},c)}var l=(0,o.typedMemo)(c)},1663,[39,1662]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.useStableCallback=function(n){const u=(0,t.useRef)(n);u.current=n;const c=(0,t.useCallback)(function(){return u.current(...arguments)},[]);return c};var t=r(d[0])},1664,[39]);
__d(function(g,r,i,a,m,_e,d){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(_e,'__esModule',{value:!0}),Object.defineProperty(_e,"default",{enumerable:!0,get:function(){return b}});var t=r(d[0]),n=e(t),l=e(r(d[1])),o=r(d[2]),s=e(o),u=r(d[3]),c=r(d[4]),f=r(d[5]),_=r(d[6]);const v={code:"(function reactNativeDraggableFlatlist_PlaceholderItemJs1(){const[activeCellSize]=this.__closure;return activeCellSize.value;})"},h={code:"(function reactNativeDraggableFlatlist_PlaceholderItemJs2(cur,prev){const[runOnJS,setSize]=this.__closure;if(cur!==prev){runOnJS(setSize)(cur);}})"},p={code:"(function reactNativeDraggableFlatlist_PlaceholderItemJs3(){const[placeholderOffset,scrollOffset,size,horizontalAnim]=this.__closure;const offset=placeholderOffset.value-scrollOffset.value;return{opacity:size>=0?1:0,overflow:'hidden',transform:[horizontalAnim.value?{translateX:offset}:{translateY:offset}]};})"};var b=(0,_.typedMemo)(function(e){var _;let{renderPlaceholder:b}=e;const[z,O]=(0,t.useState)(0),{activeCellSize:S,placeholderOffset:y,spacerIndexAnim:w,horizontalAnim:A,scrollOffset:D}=(0,u.useAnimatedValues)(),{keyToIndexRef:J,propsRef:P}=(0,f.useRefs)(),{activeKey:x,horizontal:F}=(0,c.useDraggableFlatListContext)();(0,o.useAnimatedReaction)((function([e,t]){const n=function(){return t.value};return n.__closure=[t],n.__workletHash=4052458652394,n.__initData=e,n})([v,S]),(function([e,t,n]){const l=function(e,l){e!==l&&t(n)(e)};return l.__closure=[t,n],l.__workletHash=0xbe9c598b14b,l.__initData=e,l})([h,o.runOnJS,O]));const I=x?J.current.get(x):void 0,k=void 0===I?null:null===(_=P.current)||void 0===_?void 0:_.data[I],C=(0,o.useAnimatedStyle)((function([e,t,n,l,o]){const s=function(){const e=t.value-n.value;return{opacity:l>=0?1:0,overflow:'hidden',transform:[o.value?{translateX:e}:{translateY:e}]}};return s.__closure=[t,n,l,o],s.__workletHash=4445649629901,s.__initData=e,s})([p,y,D,z,A]),[w,y,A,D,z]),M=(0,t.useMemo)(()=>F?{width:z}:{height:z},[F,z]);return n.default.createElement(s.default.View,{pointerEvents:x?"auto":"none",style:[l.default.absoluteFill,C,M]},k&&void 0!==I?null==b?void 0:b({item:k,index:I}):null)})},1665,[39,104,892,1659,1656,1661,1662]);
__d(function(g,r,i,a,m,_e,d){"use strict";Object.defineProperty(_e,'__esModule',{value:!0}),Object.defineProperty(_e,"default",{enumerable:!0,get:function(){return s}});var e,t=r(d[0]),n=(e=t)&&e.__esModule?e:{default:e},u=r(d[1]),c=r(d[2]),o=r(d[3]),l=r(d[4]);var s=(0,l.typedMemo)(function(e){const l=(0,t.useRef)(e);l.current=e;const{activeKey:s}=(0,u.useDraggableFlatListContext)(),b=(0,t.useRef)(s);b.current=s;const{keyToIndexRef:y}=(0,c.useRefs)(),p=(0,o.useStableCallback)(()=>{const{drag:e,itemKey:t,debug:n}=l.current;b.current&&n&&console.log("## attempt to drag item while another item is already active, noop"),e(t)}),{renderItem:v,item:x,itemKey:_,extraData:I}=e,D=(0,o.useStableCallback)(()=>y.current.get(_));return n.default.createElement(f,{isActive:s===_,drag:p,renderItem:v,item:x,getIndex:D,extraData:I})});const f=(0,l.typedMemo)(function(e){let{renderItem:t,extraData:n,...u}=e;return t({...u})})},1666,[39,1656,1661,1664,1662]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.useAutoScroll=function(){const{flatlistRef:N}=(0,u.useRefs)(),{autoscrollThreshold:I=l.DEFAULT_PROPS.autoscrollThreshold,autoscrollSpeed:L=l.DEFAULT_PROPS.autoscrollSpeed}=(0,o.useProps)(),{scrollOffset:b,scrollViewSize:p,containerSize:C,activeCellSize:R,hoverOffset:w,activeIndexAnim:P}=(0,s.useAnimatedValues)(),V=(0,t.useDerivedValue)((function([t,l,o]){const s=function(){return l.value-o.value};return s.__closure=[l,o],s.__workletHash=0xebad972b59,s.__initData=t,s})([c,w,b]),[]),x=(0,t.useDerivedValue)((function([t,l,o]){const s=function(){return l.value-o<=0};return s.__closure=[l,o],s.__workletHash=261538867374,s.__initData=t,s})([n,b,l.SCROLL_POSITION_TOLERANCE]),[]),F=(0,t.useDerivedValue)((function([t,l,o,s,u]){const c=function(){return l.value+o.value+s>=u.value};return c.__closure=[l,o,s,u],c.__workletHash=2643577176464,c.__initData=t,c})([_,b,C,l.SCROLL_POSITION_TOLERANCE,p]),[]),z=(0,t.useDerivedValue)((function([t,l]){const o=function(){return Math.max(0,l.value)};return o.__closure=[l],o.__workletHash=6533553760463,o.__initData=t,o})([v,V]),[]),J=(0,t.useDerivedValue)((function([t,l,o,s]){const u=function(){const t=l.value+o.value;return Math.max(0,s.value-t)};return u.__closure=[l,o,s],u.__workletHash=3748036247307,u.__initData=t,u})([f,V,R,C]),[]),k=(0,t.useDerivedValue)((function([t,l,o]){const s=function(){return l.value<=o};return s.__closure=[l,o],s.__workletHash=8992222727767,s.__initData=t,s})([S,z,I])),H=(0,t.useDerivedValue)((function([t,l,o]){const s=function(){return l.value<=o};return s.__closure=[l,o],s.__workletHash=0xf69c2baa896,s.__initData=t,s})([O,J,I]),[]),M=(0,t.useSharedValue)(0),B=(0,t.useDerivedValue)((function([t,l]){const o=function(){return l.value>=0};return o.__closure=[l],o.__workletHash=0xb290c5c0e07,o.__initData=t,o})([h,P]),[]);(0,t.useAnimatedReaction)((function([t,l]){const o=function(){return l.value};return o.__closure=[l],o.__workletHash=6719641813173,o.__initData=t,o})([T,B]),(function([t,l,o]){const s=function(t,s){t&&!s&&(l.value=o.value)};return s.__closure=[l,o],s.__workletHash=0xbdc378c4496,s.__initData=t,s})([A,M,b]));const U=(0,t.useDerivedValue)((function([t,l,o,s,u,c,n,_,v]){const f=function(){const t=Math.abs(l.value-o.value)<s,f=u.value||c.value,S=u.value&&n.value,O=c.value&&_.value,h=S||O,T=v.value>=0;return t&&f&&!h&&T};return f.__closure=[l,o,s,u,c,n,_,v],f.__workletHash=7347099736939,f.__initData=t,f})([D,M,b,l.SCROLL_POSITION_TOLERANCE,k,H,x,F,P]),[]);return(0,t.useDerivedValue)((function([t,l,o,s,u,c,n,_,v,f,S,O,h]){const T=function(){if(!l.value)return;const t=(1-(o.value?s.value:u.value)/c)*n,T=o.value?Math.max(0,_.value-t):Math.min(_.value+t,v.value-f.value);S.value=T,O(h)(T)};return T.__closure=[l,o,s,u,c,n,_,v,f,S,O,h],T.__workletHash=0xaa86992a09e,T.__initData=t,T})([E,U,k,z,J,I,L,b,p,C,M,t.runOnJS,function(t){var l;N&&"current"in N&&(null===(l=N.current)||void 0===l||l.scrollToOffset({offset:t,animated:!0}))}]),[]),null};var t=r(d[0]),l=r(d[1]),o=r(d[2]),s=r(d[3]),u=r(d[4]);const c={code:"(function reactNativeDraggableFlatlist_useAutoScrollJs1(){const[hoverOffset,scrollOffset]=this.__closure;return hoverOffset.value-scrollOffset.value;})"},n={code:"(function reactNativeDraggableFlatlist_useAutoScrollJs2(){const[scrollOffset,SCROLL_POSITION_TOLERANCE]=this.__closure;return scrollOffset.value-SCROLL_POSITION_TOLERANCE<=0;})"},_={code:"(function reactNativeDraggableFlatlist_useAutoScrollJs3(){const[scrollOffset,containerSize,SCROLL_POSITION_TOLERANCE,scrollViewSize]=this.__closure;return scrollOffset.value+containerSize.value+SCROLL_POSITION_TOLERANCE>=scrollViewSize.value;})"},v={code:"(function reactNativeDraggableFlatlist_useAutoScrollJs4(){const[hoverScreenOffset]=this.__closure;return Math.max(0,hoverScreenOffset.value);})"},f={code:"(function reactNativeDraggableFlatlist_useAutoScrollJs5(){const[hoverScreenOffset,activeCellSize,containerSize]=this.__closure;const hoverPlusActiveCell=hoverScreenOffset.value+activeCellSize.value;return Math.max(0,containerSize.value-hoverPlusActiveCell);})"},S={code:"(function reactNativeDraggableFlatlist_useAutoScrollJs6(){const[distToTopEdge,autoscrollThreshold]=this.__closure;return distToTopEdge.value<=autoscrollThreshold;})"},O={code:"(function reactNativeDraggableFlatlist_useAutoScrollJs7(){const[distToBottomEdge,autoscrollThreshold]=this.__closure;return distToBottomEdge.value<=autoscrollThreshold;})"},h={code:"(function reactNativeDraggableFlatlist_useAutoScrollJs8(){const[activeIndexAnim]=this.__closure;return activeIndexAnim.value>=0;})"},T={code:"(function reactNativeDraggableFlatlist_useAutoScrollJs9(){const[dragIsActive]=this.__closure;return dragIsActive.value;})"},A={code:"(function reactNativeDraggableFlatlist_useAutoScrollJs10(cur,prev){const[scrollTarget,scrollOffset]=this.__closure;if(cur&&!prev){scrollTarget.value=scrollOffset.value;}})"},D={code:"(function reactNativeDraggableFlatlist_useAutoScrollJs11(){const[scrollTarget,scrollOffset,SCROLL_POSITION_TOLERANCE,isAtTopEdge,isAtBottomEdge,isScrolledUp,isScrolledDown,activeIndexAnim]=this.__closure;const scrollTargetDiff=Math.abs(scrollTarget.value-scrollOffset.value);const hasScrolledToTarget=scrollTargetDiff<SCROLL_POSITION_TOLERANCE;const isAtEdge=isAtTopEdge.value||isAtBottomEdge.value;const topDisabled=isAtTopEdge.value&&isScrolledUp.value;const bottomDisabled=isAtBottomEdge.value&&isScrolledDown.value;const isEdgeDisabled=topDisabled||bottomDisabled;const cellIsActive=activeIndexAnim.value>=0;return hasScrolledToTarget&&isAtEdge&&!isEdgeDisabled&&cellIsActive;})"},E={code:"(function reactNativeDraggableFlatlist_useAutoScrollJs12(){const[shouldAutoScroll,isAtTopEdge,distToTopEdge,distToBottomEdge,autoscrollThreshold,autoscrollSpeed,scrollOffset,scrollViewSize,containerSize,scrollTarget,runOnJS,scrollToInternal]=this.__closure;if(!shouldAutoScroll.value)return;const distFromEdge=isAtTopEdge.value?distToTopEdge.value:distToBottomEdge.value;const speedPct=1-distFromEdge/autoscrollThreshold;const offset=speedPct*autoscrollSpeed;const targetOffset=isAtTopEdge.value?Math.max(0,scrollOffset.value-offset):Math.min(scrollOffset.value+offset,scrollViewSize.value-containerSize.value);scrollTarget.value=targetOffset;runOnJS(scrollToInternal)(targetOffset);})"}},1667,[892,1657,1660,1659,1661]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return c}});var t=r(d[0]),n=r(d[1]);const l={code:"(function reactNativeDraggableFlatlist_ScrollOffsetListenerJs1(){const[scrollOffset]=this.__closure;return scrollOffset.value;})"},o={code:"(function reactNativeDraggableFlatlist_ScrollOffsetListenerJs2(cur,prev){const[runOnJS,onScrollOffsetChange]=this.__closure;if(cur!==prev){runOnJS(onScrollOffsetChange)(cur);}})"};var c=(0,n.typedMemo)(n=>{let{scrollOffset:c,onScrollOffsetChange:s}=n;return(0,t.useAnimatedReaction)((function([t,n]){const l=function(){return n.value};return l.__closure=[n],l.__workletHash=6231088392130,l.__initData=t,l})([l,c]),(function([t,n,l]){const o=function(t,o){t!==o&&n(l)(t)};return o.__closure=[n,l],o.__workletHash=2213234631011,o.__initData=t,o})([o,t.runOnJS,s]),[c]),null})},1668,[892,1662]);
__d(function(g,r,i,a,m,_e,d){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(_e,'__esModule',{value:!0}),Object.defineProperty(_e,"useOnCellActiveAnimation",{enumerable:!0,get:function(){return s.useOnCellActiveAnimation}}),Object.defineProperty(_e,"ScaleDecorator",{enumerable:!0,get:function(){return v}}),Object.defineProperty(_e,"ShadowDecorator",{enumerable:!0,get:function(){return f}}),Object.defineProperty(_e,"OpacityDecorator",{enumerable:!0,get:function(){return p}});var t=e(r(d[0])),n=e(r(d[1])),o=r(d[2]),c=e(o),l=r(d[3]),s=r(d[4]);const u={code:"(function reactNativeDraggableFlatlist_CellDecoratorsJs1(){const[interpolate,onActiveAnim,activeScale,isActive]=this.__closure;const animScale=interpolate(onActiveAnim.value,[0,1],[1,activeScale]);const scale=isActive?animScale:1;return{transform:[{scaleX:scale},{scaleY:scale}]};})"},v=e=>{let{activeScale:n=1.1,children:v}=e;const{isActive:A,onActiveAnim:f}=(0,s.useOnCellActiveAnimation)({animationConfig:{mass:.1,restDisplacementThreshold:1e-4}}),{horizontal:_}=(0,l.useDraggableFlatListContext)(),p=(0,o.useAnimatedStyle)((function([e,t,n,o,c]){const l=function(){const e=t(n.value,[0,1],[1,o]),l=c?e:1;return{transform:[{scaleX:l},{scaleY:l}]}};return l.__closure=[t,n,o,c],l.__workletHash=0xee4947ba374,l.__initData=e,l})([u,o.interpolate,f,n,A]),[A]);return t.default.createElement(c.default.View,{style:[p,_&&h.horizontal]},v)},A={code:"(function reactNativeDraggableFlatlist_CellDecoratorsJs2(){const[onActiveAnim,opacity,isActive,elevation,radius,color]=this.__closure;const shadowOpacity=onActiveAnim.value*opacity;return{elevation:isActive?elevation:0,shadowRadius:isActive?radius:0,shadowColor:isActive?color:\"transparent\",shadowOpacity:isActive?shadowOpacity:0};})"},f=e=>{let{elevation:n=10,color:u="black",opacity:v=.25,radius:f=5,children:_}=e;const{isActive:p,onActiveAnim:y}=(0,s.useOnCellActiveAnimation)(),{horizontal:O}=(0,l.useDraggableFlatListContext)(),b=(0,o.useAnimatedStyle)((function([e,t,n,o,c,l,s]){const u=function(){const e=t.value*n;return{elevation:o?c:0,shadowRadius:o?l:0,shadowColor:o?s:"transparent",shadowOpacity:o?e:0}};return u.__closure=[t,n,o,c,l,s],u.__workletHash=2843233458095,u.__initData=e,u})([A,y,v,p,n,f,u]),[p,y]);return t.default.createElement(c.default.View,{style:[b,O&&h.horizontal]},_)},_={code:"(function reactNativeDraggableFlatlist_CellDecoratorsJs3(){const[interpolate,onActiveAnim,activeOpacity,isActive]=this.__closure;const opacity=interpolate(onActiveAnim.value,[0,1],[1,activeOpacity]);return{opacity:isActive?opacity:1};})"},p=e=>{let{activeOpacity:n=.25,children:u}=e;const{isActive:v,onActiveAnim:A}=(0,s.useOnCellActiveAnimation)(),{horizontal:f}=(0,l.useDraggableFlatListContext)(),p=(0,o.useAnimatedStyle)((function([e,t,n,o,c]){const l=function(){const e=t(n.value,[0,1],[1,o]);return{opacity:c?e:1}};return l.__closure=[t,n,o,c],l.__workletHash=9131175820019,l.__initData=e,l})([_,o.interpolate,A,n,v]),[v]);return t.default.createElement(c.default.View,{style:[p,f&&h.horizontal]},u)},h=n.default.create({horizontal:{flexDirection:"row",flex:1}})},1669,[39,104,892,1656,1670]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.useOnCellActiveAnimation=function(){let{animationConfig:l}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{animationConfig:{}};const v=(0,n.useSharedValue)(l);(0,t.useEffect)(()=>{v.value=l},[l]);const A=(0,u.useIsActive)(),{isTouchActiveNative:_}=(0,c.useAnimatedValues)(),f=(0,n.useDerivedValue)((function([t,n,o,c,u,s]){const l=function(){const t=n&&o.value?1:0;return c(t,{...u,...s.value})};return l.__closure=[n,o,c,u,s],l.__workletHash=3896061493287,l.__initData=t,l})([s,A,_,n.withSpring,o.DEFAULT_ANIMATION_CONFIG,v]),[A]);return{isActive:A,onActiveAnim:f}};var t=r(d[0]),n=r(d[1]),o=r(d[2]),c=r(d[3]),u=r(d[4]);const s={code:"(function reactNativeDraggableFlatlist_useOnCellActiveAnimationJs1(){const[isActive,isTouchActiveNative,withSpring,DEFAULT_ANIMATION_CONFIG,animationConfigRef]=this.__closure;const toVal=isActive&&isTouchActiveNative.value?1:0;return withSpring(toVal,{...DEFAULT_ANIMATION_CONFIG,...animationConfigRef.value});})"}},1670,[39,892,1657,1659,1663]);
__d(function(g,r,_i,a,m,_e,d){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(_e,'__esModule',{value:!0}),Object.defineProperty(_e,"NestableDraggableFlatList",{enumerable:!0,get:function(){return S}});var t=r(d[0]),l=e(t),n=e(r(d[1])),o=e(r(d[2])),s=r(d[3]),u=e(r(d[4])),i=r(d[5]),c=r(d[6]),f=r(d[7]);function b(){return b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},b.apply(this,arguments)}const v={code:"(function reactNativeDraggableFlatlist_NestableDraggableFlatListJs1(){const[listHoverOffset,listVerticalOffset]=this.__closure;return listHoverOffset.value+listVerticalOffset.value;})"};function O(e,O){const S=(0,t.useRef)(!1);S.current||(o.default.ignoreLogs(["VirtualizedLists should never be nested inside plain ScrollViews with the same orientation because it can break windowing"]),console.reportErrorsAsExceptions=!1,S.current=!0);const{scrollableRef:_,outerScrollOffset:h,setOuterScrollEnabled:D}=(0,i.useSafeNestableScrollContainerContext)(),p=(0,s.useSharedValue)(0),[V,y]=(0,t.useState)({}),w=(0,s.useSharedValue)(0),[C,E]=(0,t.useState)(w),k=(0,s.useDerivedValue)((function([e,t,l]){const n=function(){return t.value+l.value};return n.__closure=[t,l],n.__workletHash=0xce412ba0858,n.__initData=e,n})([v,C,p]),[C]);(0,c.useNestedAutoScroll)({...V,hoverOffset:k});const L=(0,f.useStableCallback)(async e=>{let{containerRef:t}=e;const l=(0,n.default)(_.current);t.current.measureLayout(l,(e,t)=>{p.value=t},()=>{console.log("## nested draggable list measure fail")})}),N=(0,f.useStableCallback)(t=>{var l;D(!1),null===(l=e.onDragBegin)||void 0===l||l.call(e,t)}),j=(0,f.useStableCallback)(t=>{var l;D(!0),null===(l=e.onDragEnd)||void 0===l||l.call(e,t)}),A=(0,f.useStableCallback)(t=>{var l;E(t.hoverOffset),y({...t,hoverOffset:k}),null===(l=e.onAnimValInit)||void 0===l||l.call(e,t)});return l.default.createElement(u.default,b({ref:O,onContainerLayout:L,activationDistance:e.activationDistance||20,scrollEnabled:!1},e,{outerScrollOffset:h,onDragBegin:N,onDragEnd:j,onAnimValInit:A}))}const S=l.default.forwardRef(O)},1671,[39,159,323,892,1654,1672,1673,1664]);
__d(function(g,r,i,a,m,_e,d){"use strict";Object.defineProperty(_e,'__esModule',{value:!0}),_e.NestableScrollContainerProvider=function(e){let{children:t,forwardedRef:o}=e;const s=u({forwardedRef:o});return l.default.createElement(n.Provider,{value:s},t)},_e.useNestableScrollContainerContext=s,_e.useSafeNestableScrollContainerContext=function(){const e=s();if(!e)throw new Error("useSafeNestableScrollContainerContext must be called within a NestableScrollContainerContext.Provider");return e};var e,t=r(d[0]),l=(e=t)&&e.__esModule?e:{default:e},o=r(d[1]);const n=l.default.createContext(void 0);function u(e){let{forwardedRef:l}=e;const[n,u]=(0,t.useState)(!0),s=(0,o.useSharedValue)(0),c=(0,t.useRef)(null),f=l||c,S=(0,o.useSharedValue)(0),C=(0,o.useSharedValue)(0);return(0,t.useMemo)(()=>({outerScrollEnabled:n,setOuterScrollEnabled:u,outerScrollOffset:S,scrollViewSize:s,scrollableRef:f,containerSize:C}),[n])}function s(){return(0,t.useContext)(n)}},1672,[39,892]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.useNestedAutoScroll=function(T){const{outerScrollOffset:D,containerSize:N,scrollableRef:E,scrollViewSize:A}=(0,l.useSafeNestableScrollContainerContext)(),C=(0,t.useSharedValue)(0),{hoverOffset:L=C,activeCellSize:b=C,autoscrollSpeed:I=100,autoscrollThreshold:p=30,isDraggingCell:R=C,isTouchActiveNative:w=C}=T,P=(0,t.useDerivedValue)((function([t,l,o]){const s=function(){return l.value-o.value};return s.__closure=[l,o],s.__workletHash=3480191768660,s.__initData=t,s})([s,L,D]),[]),J=(0,t.useDerivedValue)((function([t,l,o]){const s=function(){return l.value-o<=0};return s.__closure=[l,o],s.__workletHash=0xdfe616c67a3,s.__initData=t,s})([u,D,o.SCROLL_POSITION_TOLERANCE]),[]),V=(0,t.useDerivedValue)((function([t,l,o,s,u]){const c=function(){return l.value+o.value+s>=u.value};return c.__closure=[l,o,s,u],c.__workletHash=8984102668381,c.__initData=t,c})([c,D,N,o.SCROLL_POSITION_TOLERANCE,A]),[]),F=(0,t.useDerivedValue)((function([t,l]){const o=function(){return Math.max(0,l.value)};return o.__closure=[l],o.__workletHash=6477060718530,o.__initData=t,o})([n,P]),[P]),x=(0,t.useDerivedValue)((function([t,l,o,s]){const u=function(){const t=l.value-(o.value+s.value);return Math.max(0,t)};return u.__closure=[l,o,s],u.__workletHash=4956834359783,u.__initData=t,u})([_,N,P,b]),[P,b,N]),z=(0,t.useDerivedValue)((function([t,l,o]){const s=function(){return l.value<=o};return s.__closure=[l,o],s.__workletHash=0xd18f6b4ff5a,s.__initData=t,s})([v,F,p]),[]),k=(0,t.useDerivedValue)((function([t,l,o]){const s=function(){return l.value<=o};return s.__closure=[l,o],s.__workletHash=8952391566555,s.__initData=t,s})([f,x,p])),H=(0,t.useSharedValue)(0);return(0,t.useAnimatedReaction)((function([t,l]){const o=function(){return l.value};return o.__closure=[l],o.__workletHash=0xd4357193b79,o.__initData=t,o})([S,R]),(function([t,l,o]){const s=function(t,s){t&&!s&&(l.value=o.value)};return s.__closure=[l,o],s.__workletHash=3812469807491,s.__initData=t,s})([O,H,D]),[b]),(0,t.useDerivedValue)((function([t,l,o,s,u,c,n,_,v,f,S,O,h,T,D,N]){const E=function(){const t=l.value||o.value,E=l.value&&s.value,A=o.value&&u.value,C=E||A,L=Math.abs(c.value-n.value)>_,b=t&&!C&&v.value&&f.value&&!L,I=(1-(l.value?S.value:O.value)/h)*T,p=l.value?Math.max(0,n.value-I):n.value+I;b&&(c.value=p,D(N)(p))};return E.__closure=[l,o,s,u,c,n,_,v,f,S,O,h,T,D,N],E.__workletHash=0xf3811c6d8da,E.__initData=t,E})([h,z,k,J,V,H,D,o.SCROLL_POSITION_TOLERANCE,R,w,F,x,p,I,t.runOnJS,function(t){var l;null===(l=E.current)||void 0===l||l.scrollTo({y:t,animated:!0})}]),[I,p,R]),null};var t=r(d[0]),l=r(d[1]),o=r(d[2]);const s={code:"(function reactNativeDraggableFlatlist_useNestedAutoScrollJs1(){const[hoverOffset,outerScrollOffset]=this.__closure;return hoverOffset.value-outerScrollOffset.value;})"},u={code:"(function reactNativeDraggableFlatlist_useNestedAutoScrollJs2(){const[outerScrollOffset,SCROLL_POSITION_TOLERANCE]=this.__closure;return outerScrollOffset.value-SCROLL_POSITION_TOLERANCE<=0;})"},c={code:"(function reactNativeDraggableFlatlist_useNestedAutoScrollJs3(){const[outerScrollOffset,containerSize,SCROLL_POSITION_TOLERANCE,scrollViewSize]=this.__closure;return outerScrollOffset.value+containerSize.value+SCROLL_POSITION_TOLERANCE>=scrollViewSize.value;})"},n={code:"(function reactNativeDraggableFlatlist_useNestedAutoScrollJs4(){const[hoverScreenOffset]=this.__closure;return Math.max(0,hoverScreenOffset.value);})"},_={code:"(function reactNativeDraggableFlatlist_useNestedAutoScrollJs5(){const[containerSize,hoverScreenOffset,activeCellSize]=this.__closure;const dist=containerSize.value-(hoverScreenOffset.value+activeCellSize.value);return Math.max(0,dist);})"},v={code:"(function reactNativeDraggableFlatlist_useNestedAutoScrollJs6(){const[distToTopEdge,autoscrollThreshold]=this.__closure;return distToTopEdge.value<=autoscrollThreshold;})"},f={code:"(function reactNativeDraggableFlatlist_useNestedAutoScrollJs7(){const[distToBottomEdge,autoscrollThreshold]=this.__closure;return distToBottomEdge.value<=autoscrollThreshold;})"},S={code:"(function reactNativeDraggableFlatlist_useNestedAutoScrollJs8(){const[isDraggingCell]=this.__closure;return isDraggingCell.value;})"},O={code:"(function reactNativeDraggableFlatlist_useNestedAutoScrollJs9(cur,prev){const[scrollTarget,outerScrollOffset]=this.__closure;if(cur&&!prev){scrollTarget.value=outerScrollOffset.value;}})"},h={code:"(function reactNativeDraggableFlatlist_useNestedAutoScrollJs10(){const[isAtTopEdge,isAtBottomEdge,isScrolledUp,isScrolledDown,scrollTarget,outerScrollOffset,SCROLL_POSITION_TOLERANCE,isDraggingCell,isTouchActiveNative,distToTopEdge,distToBottomEdge,autoscrollThreshold,autoscrollSpeed,runOnJS,scrollToInternal]=this.__closure;const isAtEdge=isAtTopEdge.value||isAtBottomEdge.value;const topDisabled=isAtTopEdge.value&&isScrolledUp.value;const bottomDisabled=isAtBottomEdge.value&&isScrolledDown.value;const isEdgeDisabled=topDisabled||bottomDisabled;const scrollTargetDiff=Math.abs(scrollTarget.value-outerScrollOffset.value);const scrollInProgress=scrollTargetDiff>SCROLL_POSITION_TOLERANCE;const shouldScroll=isAtEdge&&!isEdgeDisabled&&isDraggingCell.value&&isTouchActiveNative.value&&!scrollInProgress;const distFromEdge=isAtTopEdge.value?distToTopEdge.value:distToBottomEdge.value;const speedPct=1-distFromEdge/autoscrollThreshold;const offset=speedPct*autoscrollSpeed;const targetOffset=isAtTopEdge.value?Math.max(0,outerScrollOffset.value-offset):outerScrollOffset.value+offset;if(shouldScroll){scrollTarget.value=targetOffset;runOnJS(scrollToInternal)(targetOffset);}})"}},1673,[892,1672,1657]);
__d(function(g,r,_i,a,m,_e,d){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(_e,'__esModule',{value:!0}),Object.defineProperty(_e,"NestableScrollContainer",{enumerable:!0,get:function(){return b}});var t=e(r(d[0])),n=r(d[1]),l=r(d[2]),o=e(l),c=r(d[3]),u=r(d[4]);function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},f.apply(this,arguments)}const s=o.default.createAnimatedComponent(n.ScrollView),i={code:"(function reactNativeDraggableFlatlist_NestableScrollContainerJs1(_ref){const[outerScrollOffset]=this.__closure;let{contentOffset:contentOffset}=_ref;outerScrollOffset.value=contentOffset.y;})"};function S(e){const{outerScrollOffset:n,containerSize:o,scrollViewSize:S,scrollableRef:b,outerScrollEnabled:v}=(0,c.useSafeNestableScrollContainerContext)(),_=(0,l.useAnimatedScrollHandler)({onScroll:(function([e,t]){const n=function(e){let{contentOffset:n}=e;t.value=n.y};return n.__closure=[t],n.__workletHash=2598910038675,n.__initData=e,n})([i,n])}),C=(0,u.useStableCallback)(e=>{const{nativeEvent:{layout:t}}=e;o.value=t.height}),O=(0,u.useStableCallback)((t,n)=>{var l;S.value=n,null===(l=e.onContentSizeChange)||void 0===l||l.call(e,t,n)});return t.default.createElement(s,f({},e,{onLayout:C,onContentSizeChange:O,scrollEnabled:v,ref:b,scrollEventThrottle:1,onScroll:_}))}const b=t.default.forwardRef((e,n)=>t.default.createElement(c.NestableScrollContainerProvider,{forwardedRef:n||void 0},t.default.createElement(S,e)))},1674,[39,791,892,1672,1664]);
__d(function(g,r,i,a,m,e,d){},1675,[]);
__d(function(g,r,i,a,m,_e,d){"use strict";Object.defineProperty(_e,'__esModule',{value:!0}),Object.defineProperty(_e,"default",{enumerable:!0,get:function(){return n.default}});var e=r(d[0]);Object.keys(e).forEach(function(t){'default'===t||Object.prototype.hasOwnProperty.call(_e,t)||Object.defineProperty(_e,t,{enumerable:!0,get:function(){return e[t]}})});var t,n=(t=e)&&t.__esModule?t:{default:t}},1676,[1677]);
__d(function(g,r,i,a,m,_e,d){"use strict";Object.defineProperty(_e,'__esModule',{value:!0}),Object.defineProperty(_e,"inlineStyles",{enumerable:!0,get:function(){return n.inlineStyles}}),Object.defineProperty(_e,"loadLocalRawResource",{enumerable:!0,get:function(){return n.loadLocalRawResource}}),Object.defineProperty(_e,"LocalSvg",{enumerable:!0,get:function(){return n.LocalSvg}}),Object.defineProperty(_e,"SvgCss",{enumerable:!0,get:function(){return n.SvgCss}}),Object.defineProperty(_e,"SvgCssUri",{enumerable:!0,get:function(){return n.SvgCssUri}}),Object.defineProperty(_e,"SvgWithCss",{enumerable:!0,get:function(){return n.SvgWithCss}}),Object.defineProperty(_e,"SvgWithCssUri",{enumerable:!0,get:function(){return n.SvgWithCssUri}}),Object.defineProperty(_e,"WithLocalSvg",{enumerable:!0,get:function(){return n.WithLocalSvg}}),Object.defineProperty(_e,"default",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(_e,"camelCase",{enumerable:!0,get:function(){return e.camelCase}}),Object.defineProperty(_e,"fetchText",{enumerable:!0,get:function(){return t.fetchText}}),Object.defineProperty(_e,"parse",{enumerable:!0,get:function(){return e.parse}}),Object.defineProperty(_e,"SvgAst",{enumerable:!0,get:function(){return e.SvgAst}}),Object.defineProperty(_e,"SvgFromUri",{enumerable:!0,get:function(){return e.SvgFromUri}}),Object.defineProperty(_e,"SvgFromXml",{enumerable:!0,get:function(){return e.SvgFromXml}}),Object.defineProperty(_e,"SvgUri",{enumerable:!0,get:function(){return e.SvgUri}}),Object.defineProperty(_e,"SvgXml",{enumerable:!0,get:function(){return e.SvgXml}});var e=r(d[0]),t=r(d[1]),n=r(d[2]),u=r(d[3]);Object.keys(u).forEach(function(e){'default'===e||Object.prototype.hasOwnProperty.call(_e,e)||Object.defineProperty(_e,e,{enumerable:!0,get:function(){return u[e]}})});var o=r(d[4]);Object.keys(o).forEach(function(e){'default'===e||Object.prototype.hasOwnProperty.call(_e,e)||Object.defineProperty(_e,e,{enumerable:!0,get:function(){return o[e]}})});var c,f=(c=o)&&c.__esModule?c:{default:c}},1677,[1678,1679,1695,1696,1681]);
__d(function(g,_r,_i,a,m,_e,_d){"use strict";Object.defineProperty(_e,'__esModule',{value:!0}),_e.SvgAst=c,_e.SvgXml=l,_e.SvgUri=function(r){const{onError:o=i,uri:s,onLoad:c,fallback:u}=r,[f,p]=(0,t.useState)(null),[d,h]=(0,t.useState)(!1);if((0,t.useEffect)(()=>{s?(0,n.fetchText)(s).then(t=>{p(t),d&&h(!1),c?.()}).catch(t=>{o(t),h(!0)}):p(null)},[o,s,c]),d)return u??null;return e.createElement(l,{xml:f,override:r,fallback:u})},Object.defineProperty(_e,"SvgFromXml",{enumerable:!0,get:function(){return u}}),Object.defineProperty(_e,"SvgFromUri",{enumerable:!0,get:function(){return f}}),Object.defineProperty(_e,"camelCase",{enumerable:!0,get:function(){return d}}),_e.getStyle=h,_e.astToReact=x,_e.parse=j,Object.defineProperty(_e,"tags",{enumerable:!0,get:function(){return r.tags}});var t=_r(_d[0]),e=(function(t){if(t&&t.__esModule)return t;var e={};return t&&Object.keys(t).forEach(function(n){if('default'!==n){var r=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(e,n,r.get?r:{enumerable:!0,get:function(){return t[n]}})}}),e.default=t,e})(t),n=_r(_d[1]),r=_r(_d[2]);function o(){return o=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o.apply(null,arguments)}function s(){return null}function c({ast:t,override:n}){if(!t)return null;const{props:s,children:c}=t,i=r.tags.svg;return e.createElement(i,o({},s,n),c)}const i=console.error.bind(console);function l(n){const{onError:r=i,xml:o,override:s,fallback:l}=n;try{const r=(0,t.useMemo)(()=>null!==o?j(o):null,[o]);return e.createElement(c,{ast:r,override:s||n})}catch(t){return r(t),l??null}}class u extends t.Component{state={ast:null};componentDidMount(){this.parse(this.props.xml)}componentDidUpdate(t){const{xml:e}=this.props;e!==t.xml&&this.parse(e)}parse(t){const{onError:e=i}=this.props;try{this.setState({ast:t?j(t):null})}catch(t){const n=t;e({...n,message:`[RNSVG] Couldn't parse SVG, reason: ${n.message}`})}}render(){const{props:t,state:{ast:n}}=this;return e.createElement(c,{ast:n,override:t.override||t})}}class f extends t.Component{state={xml:null};componentDidMount(){this.fetch(this.props.uri)}componentDidUpdate(t){const{uri:e}=this.props;e!==t.uri&&this.fetch(e)}async fetch(t){try{this.setState({xml:t?await(0,n.fetchText)(t):null})}catch(t){console.error(t)}}render(){const{props:t,state:{xml:n}}=this;return e.createElement(u,{xml:n,override:t,onError:t.onError})}}const p=(t,e)=>e.toUpperCase(),d=t=>t.replace(/[:-]([a-z])/g,p);function h(t){const e={},n=t.split(';').filter(t=>t.trim()),{length:r}=n;for(let t=0;t<r;t++){const r=n[t];if(0!==r.length){const t=r.split(':'),n=t[0],o=t[1];e[d(n.trim())]=o.trim()}}return e}function x(t,n){if('object'==typeof t){const{Tag:r,props:s,children:c}=t;return s?.class&&(s.className=s.class,delete s.class),e.createElement(r,o({key:n},s),c.map(x))}return t}function b(t,e){let n='';for(;e--;)n+=t;return n}const y=t=>b('  ',t.length);function v(t,e){const n=t.split('\n'),r=n.length;let o=e,s=0;for(;s<r;s++){const{length:t}=n[s];if(!(o>=t))break;o-=t}const c=t.slice(0,e).replace(/^\t+/,y),i=/(^|\n).*$/.exec(c),l=i&&i[0]||'',u=t.slice(e),f=/.*(\n|$)/.exec(u);return{line:s,column:o,snippet:`${l}${f&&f[0]}\n${b(' ',l.length)}^`}}const E=/[a-zA-Z0-9:_-]/,O=/<!--/,S=/[\s\t\r\n]/,$=/['"]/;function j(t,e){const n=t.length;let o,c=null,i=function(){for(;M+1<n&&('<'!==t[M]||!E.test(t[M+1])&&!O.test(t.slice(M,M+4)));)M++;return p()},l=null;const u=[];function f(e){const{line:n,column:r,snippet:o}=v(t,M);throw new Error(`${e} (${n}:${r}). If this is valid SVG, it's probably a bug. Please raise an issue\n\n${o}`)}function p(){let e,r='';for(;M<n&&'<'!==(e=t[M]);)r+=e,M+=1;return/\S/.test(r)&&l.push(r),'<'===t[M]?b:p}function b(){const e=t[M];if('?'===e)return p;if('!'===e){const e=M+1;if('--'===t.slice(e,M+3))return y;const n=M+8;if('[CDATA['===t.slice(e,n))return j;if(/doctype/i.test(t.slice(e,n)))return P}if('/'===e)return U;const n=_(),i={},d={tag:n,props:i,children:[],parent:c,Tag:r.tags[n]||s};c?l.push(d):o=d,k(i);const{style:x}=i;'string'==typeof x&&(d.styles=x,i.style=h(x));let b=!1;return'/'===t[M]&&(M+=1,b=!0),'>'!==t[M]&&f('Expected >'),b||(c=d,({children:l}=d),u.push(d)),p}function y(){const e=t.indexOf('--\x3e',M);return~e||f('expected --\x3e'),M=e+2,p}function j(){const e=t.indexOf(']]>',M);return~e||f('expected ]]>'),l.push(t.slice(M+7,e)),M=e+2,p}function P(){const e=t.indexOf('>',M);return-1===e&&f('expected >'),M=e,p}function U(){const e=_();return e||f('Expected tag name'),c&&e!==c.tag&&f(`Expected closing tag </${e}> to match opening tag <${c.tag}>`),T(),'>'!==t[M]&&f('Expected >'),u.pop(),c=u[u.length-1],c&&({children:l}=c),p}function _(){let e,r='';for(;M<n&&E.test(e=t[M]);)r+=e,M+=1;return r}function k(e){for(;M<n;){if(!S.test(t[M]))return;T();const n=_();if(!n)return;let r=!0;T(),'='===t[M]&&(M+=1,T(),r=w(),'id'===n||isNaN(+r)||''===r.trim()||(r=+r)),e[d(n)]=r}}function w(){return $.test(t[M])?D():C()}function C(){let e='';do{const n=t[M];if(' '===n||'>'===n||'/'===n)return e;e+=n,M+=1}while(M<n);return e}function D(){const e=t[M++];let r='',o=!1;for(;M<n;){const n=t[M++];if(n===e&&!o)return r;'\\'!==n||o||(o=!0),r+=o?`\\${n}`:n,o=!1}return r}function T(){for(;M<n&&S.test(t[M]);)M+=1}let M=0;for(;M<n;)i||f('Unexpected character'),i=i(),M+=1;if(i!==p&&f('Unexpected end of input'),o){const t=(e?e(o):o)||o,n=t.children.map(x),r=t;return r.children=n,r}return null}},1678,[39,1679,1680]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.fetchText=async function(n){if(!n)return null;return n.startsWith('data:image/svg+xml;utf8'),n.startsWith('data:image/svg+xml;base64')?t(n):s(n)},r(d[0]);const t=t=>{const s=decodeURIComponent(t).split(';')[1].split(',').slice(1).join(',');return atob(s)};async function s(t){const s=await fetch(t);if(s.ok||0===s.status&&t.startsWith('file://'))return await s.text();throw new Error(`Fetching ${t} failed with status ${s.status}`)}},1679,[29]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),Object.defineProperty(e,"tags",{enumerable:!0,get:function(){return o}});var t=r(d[0]);const o={circle:t.Circle,clipPath:t.ClipPath,defs:t.Defs,ellipse:t.Ellipse,filter:t.Filter,feBlend:t.FeBlend,feColorMatrix:t.FeColorMatrix,feComponentTransfer:t.FeComponentTransfer,feComposite:t.FeComposite,feConvolveMatrix:t.FeConvolveMatrix,feDiffuseLighting:t.FeDiffuseLighting,feDisplacementMap:t.FeDisplacementMap,feDistantLight:t.FeDistantLight,feDropShadow:t.FeDropShadow,feFlood:t.FeFlood,feGaussianBlur:t.FeGaussianBlur,feImage:t.FeImage,feMerge:t.FeMerge,feMergeNode:t.FeMergeNode,feMorphology:t.FeMorphology,feOffset:t.FeOffset,fePointLight:t.FePointLight,feSpecularLighting:t.FeSpecularLighting,feSpotLight:t.FeSpotLight,feTile:t.FeTile,feTurbulence:t.FeTurbulence,foreignObject:t.ForeignObject,g:t.G,image:t.Image,line:t.Line,linearGradient:t.LinearGradient,marker:t.Marker,mask:t.Mask,path:t.Path,pattern:t.Pattern,polygon:t.Polygon,polyline:t.Polyline,radialGradient:t.RadialGradient,rect:t.Rect,stop:t.Stop,svg:t.Svg,symbol:t.Symbol,text:t.Text,textPath:t.TextPath,tspan:t.TSpan,use:t.Use}},1680,[1681]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return se}}),Object.defineProperty(e,"Circle",{enumerable:!0,get:function(){return s}}),Object.defineProperty(e,"ClipPath",{enumerable:!0,get:function(){return c}}),Object.defineProperty(e,"Defs",{enumerable:!0,get:function(){return u}}),Object.defineProperty(e,"Ellipse",{enumerable:!0,get:function(){return o}}),Object.defineProperty(e,"FeBlend",{enumerable:!0,get:function(){return b}}),Object.defineProperty(e,"FeColorMatrix",{enumerable:!0,get:function(){return l}}),Object.defineProperty(e,"FeComponentTransfer",{enumerable:!0,get:function(){return f}}),Object.defineProperty(e,"FeComposite",{enumerable:!0,get:function(){return p}}),Object.defineProperty(e,"FeConvolveMatrix",{enumerable:!0,get:function(){return h}}),Object.defineProperty(e,"FeDiffuseLighting",{enumerable:!0,get:function(){return S}}),Object.defineProperty(e,"FeDisplacementMap",{enumerable:!0,get:function(){return P}}),Object.defineProperty(e,"FeDistantLight",{enumerable:!0,get:function(){return x}}),Object.defineProperty(e,"FeDropShadow",{enumerable:!0,get:function(){return y}}),Object.defineProperty(e,"FeFlood",{enumerable:!0,get:function(){return O}}),Object.defineProperty(e,"FeFuncA",{enumerable:!0,get:function(){return j}}),Object.defineProperty(e,"FeFuncB",{enumerable:!0,get:function(){return W}}),Object.defineProperty(e,"FeFuncG",{enumerable:!0,get:function(){return F}}),Object.defineProperty(e,"FeFuncR",{enumerable:!0,get:function(){return w}}),Object.defineProperty(e,"FeGaussianBlur",{enumerable:!0,get:function(){return M}}),Object.defineProperty(e,"FeImage",{enumerable:!0,get:function(){return v}}),Object.defineProperty(e,"FeMerge",{enumerable:!0,get:function(){return L}}),Object.defineProperty(e,"FeMergeNode",{enumerable:!0,get:function(){return C}}),Object.defineProperty(e,"FeMorphology",{enumerable:!0,get:function(){return D}}),Object.defineProperty(e,"FeOffset",{enumerable:!0,get:function(){return T}}),Object.defineProperty(e,"FePointLight",{enumerable:!0,get:function(){return G}}),Object.defineProperty(e,"FeSpecularLighting",{enumerable:!0,get:function(){return B}}),Object.defineProperty(e,"FeSpotLight",{enumerable:!0,get:function(){return R}}),Object.defineProperty(e,"FeTile",{enumerable:!0,get:function(){return N}}),Object.defineProperty(e,"FeTurbulence",{enumerable:!0,get:function(){return A}}),Object.defineProperty(e,"Filter",{enumerable:!0,get:function(){return I}}),Object.defineProperty(e,"ForeignObject",{enumerable:!0,get:function(){return $}}),Object.defineProperty(e,"G",{enumerable:!0,get:function(){return k}}),Object.defineProperty(e,"Image",{enumerable:!0,get:function(){return _}}),Object.defineProperty(e,"Line",{enumerable:!0,get:function(){return E}}),Object.defineProperty(e,"LinearGradient",{enumerable:!0,get:function(){return U}}),Object.defineProperty(e,"Marker",{enumerable:!0,get:function(){return z}}),Object.defineProperty(e,"Mask",{enumerable:!0,get:function(){return X}}),Object.defineProperty(e,"Path",{enumerable:!0,get:function(){return q}}),Object.defineProperty(e,"Pattern",{enumerable:!0,get:function(){return H}}),Object.defineProperty(e,"Polygon",{enumerable:!0,get:function(){return J}}),Object.defineProperty(e,"Polyline",{enumerable:!0,get:function(){return K}}),Object.defineProperty(e,"RadialGradient",{enumerable:!0,get:function(){return Q}}),Object.defineProperty(e,"Rect",{enumerable:!0,get:function(){return V}}),Object.defineProperty(e,"Stop",{enumerable:!0,get:function(){return Y}}),Object.defineProperty(e,"Svg",{enumerable:!0,get:function(){return Z}}),Object.defineProperty(e,"Symbol",{enumerable:!0,get:function(){return ee}}),Object.defineProperty(e,"TSpan",{enumerable:!0,get:function(){return te}}),Object.defineProperty(e,"Text",{enumerable:!0,get:function(){return ne}}),Object.defineProperty(e,"TextPath",{enumerable:!0,get:function(){return re}}),Object.defineProperty(e,"Use",{enumerable:!0,get:function(){return ae}});var t=r(d[0]),n=r(d[1]);class s extends n.WebShape{tag='circle'}class c extends n.WebShape{tag='clipPath'}class u extends n.WebShape{tag='defs'}class o extends n.WebShape{tag='ellipse'}class b extends n.WebShape{tag='feBlend'}class l extends n.WebShape{tag='feColorMatrix'}class f extends n.WebShape{tag='feComponentTransfer'}class p extends n.WebShape{tag='feComposite'}class h extends n.WebShape{tag='feConvolveMatrix'}class S extends n.WebShape{tag='feDiffuseLighting'}class P extends n.WebShape{tag='feDisplacementMap'}class x extends n.WebShape{tag='feDistantLight'}class y extends n.WebShape{tag='feDropShadow'}class O extends n.WebShape{tag='feFlood'}class j extends n.WebShape{tag='feFuncA'}class W extends n.WebShape{tag='feFuncB'}class F extends n.WebShape{tag='feFuncG'}class w extends n.WebShape{tag='feFuncR'}class M extends n.WebShape{tag='feGaussianBlur'}class v extends n.WebShape{tag='feImage'}class L extends n.WebShape{tag='feMerge'}class C extends n.WebShape{tag='feMergeNode'}class D extends n.WebShape{tag='feMorphology'}class T extends n.WebShape{tag='feOffset'}class G extends n.WebShape{tag='fePointLight'}class B extends n.WebShape{tag='feSpecularLighting'}class R extends n.WebShape{tag='feSpotLight'}class N extends n.WebShape{tag='feTile'}class A extends n.WebShape{tag='feTurbulence'}class I extends n.WebShape{tag='filter'}class $ extends n.WebShape{tag='foreignObject'}class k extends n.WebShape{tag='g';prepareProps(t){const{x:n,y:s,...c}=t;return!n&&!s||c.translate||(c.translate=`${n||0}, ${s||0}`),c}}class _ extends n.WebShape{tag='image'}class E extends n.WebShape{tag='line'}class U extends n.WebShape{tag='linearGradient'}class z extends n.WebShape{tag='marker'}class X extends n.WebShape{tag='mask'}class q extends n.WebShape{tag='path'}class H extends n.WebShape{tag='pattern'}class J extends n.WebShape{tag='polygon'}class K extends n.WebShape{tag='polyline'}class Q extends n.WebShape{tag='radialGradient'}class V extends n.WebShape{tag='rect'}class Y extends n.WebShape{tag='stop'}class Z extends n.WebShape{tag='svg';toDataURL(n,s={}){const c=this.elementRef.current;if(null===c)return;const u=(0,t.getBoundingClientRect)(c),o=Number(s.width)||u.width,b=Number(s.height)||u.height,l=document.createElementNS('http://www.w3.org/2000/svg','svg');l.setAttribute('viewBox',`0 0 ${u.width} ${u.height}`),l.setAttribute('width',String(o)),l.setAttribute('height',String(b)),l.appendChild(c.cloneNode(!0));const f=new window.Image;f.onload=()=>{const t=document.createElement('canvas');t.width=o,t.height=b;const s=t.getContext('2d');s?.drawImage(f,0,0),n(t.toDataURL().replace('data:image/png;base64,',''))},f.src=`data:image/svg+xml;utf8,${(0,t.encodeSvg)((new window.XMLSerializer).serializeToString(l))}`}}class ee extends n.WebShape{tag='symbol'}class te extends n.WebShape{tag='tspan'}class ne extends n.WebShape{tag='text'}class re extends n.WebShape{tag='textPath'}class ae extends n.WebShape{tag='use'}var se=Z},1681,[1682,1683]);
__d(function(g,r,i,a,_m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),Object.defineProperty(e,"camelCaseToDashed",{enumerable:!0,get:function(){return t}}),Object.defineProperty(e,"getBoundingClientRect",{enumerable:!0,get:function(){return n}}),e.remeasure=function(){const t=this.state.touchable.responderID;if(null===t)return;s(t,this._handleQueryLayout)},e.encodeSvg=function(t){return t.replace('<svg',~t.indexOf('xmlns')?'<svg':'<svg xmlns="http://www.w3.org/2000/svg"').replace(/"/g,"'").replace(/%/g,'%25').replace(/#/g,'%23').replace(/{/g,'%7B').replace(/}/g,'%7D').replace(/</g,'%3C').replace(/>/g,'%3E').replace(/\s+/g,' ')},Object.defineProperty(e,"getAttributeName",{enumerable:!0,get:function(){return c}});const t=t=>t.replace(/[A-Z]/g,t=>'-'+t.toLowerCase()),n=t=>{if(t){if(1===t.nodeType&&'function'==typeof t.getBoundingClientRect)return t.getBoundingClientRect()}throw new Error('Can not get boundingClientRect of '+t||'undefined')},s=(t,s)=>{const o=t?.parentNode;o&&setTimeout(()=>{const c=n(o),{height:l,left:u,top:p,width:f}=n(t),h=u-c.left,m=p-c.top;s(h,m,f,l,u,p)},0)};const o=new Set(['stdDeviation','edgeMode','kernelMatrix','kernelUnitLength','preserveAlpha','baseFrequency','targetX','targetY','numOctaves','stitchTiles','filterUnits','primitiveUnits','pathLength','gradientUnits','gradientTransform','spreadMethod','markerHeight','markerUnits','markerWidth','viewBox','refX','refY','maskContentUnits','maskUnits','patternContentUnits','patternTransform','patternUnits','textLength','lengthAdjust','startOffset','clipPathUnits']),c=n=>o.has(n)?n:t(n)},1682,[]);
__d(function(g,r,i,a,m,_e,d){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(_e,'__esModule',{value:!0}),Object.defineProperty(_e,"WebShape",{enumerable:!0,get:function(){return u}});var t=e(r(d[0])),s=e(r(d[1])),o=r(d[2]),n=r(d[3]),c=r(d[4]),p=r(d[5]),l=e(r(d[6]));class u extends t.default.Component{prepareProps(e){return e}elementRef=t.default.createRef();lastMergedProps={};setNativeProps(e){const t=Object.assign({},this.props,this.lastMergedProps,e.style);this.lastMergedProps=t;const s=(0,o.prepare)(this,this.prepareProps(t)),p=this.elementRef.current;if(p)for(const e of Object.keys(s)){const t=s[e];switch(e){case'ref':case'children':break;case'style':for(const e of[].concat(s.style??[]))Object.assign(p.style,e);break;case'fill':if(t&&'object'==typeof t){const e=t;p.setAttribute('fill',(0,n.convertInt32ColorToRGBA)(e.payload))}break;case'stroke':if(t&&'object'==typeof t){const e=t;p.setAttribute('stroke',(0,n.convertInt32ColorToRGBA)(e.payload))}break;default:p.setAttribute((0,c.getAttributeName)(e),t)}}}constructor(e){super(e),(0,p.hasTouchableProperty)(e)&&(0,l.default)(this),this._remeasureMetricsOnActivation=c.remeasure.bind(this)}render(){if(!this.tag)throw new Error('When extending `WebShape` you need to overwrite either `tag` or `render`!');return this.lastMergedProps={},(0,s.default)(this.tag,(0,o.prepare)(this,this.prepareProps(this.props)))}}},1683,[39,92,1684,1693,1682,1685,1694]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),Object.defineProperty(e,"prepare",{enumerable:!0,get:function(){return s}});var n=r(d[0]),o=r(d[1]),t=r(d[2]),l=r(d[3]);const s=(s,f=s.props)=>{const{transform:u,origin:p,originX:c,originY:R,fontFamily:h,fontSize:T,fontWeight:S,fontStyle:b,style:y,forwardedRef:P,gradientTransform:v,patternTransform:H,onPress:_,...M}=f,j={...(0,n.hasTouchableProperty)(f)?{onStartShouldSetResponder:s.touchableHandleStartShouldSetResponder,onResponderTerminationRequest:s.touchableHandleResponderTerminationRequest,onResponderGrant:s.touchableHandleResponderGrant,onResponderMove:s.touchableHandleResponderMove,onResponderRelease:s.touchableHandleResponderRelease,onResponderTerminate:s.touchableHandleResponderTerminate}:null,...M};null!=p?j['transform-origin']=p.toString().replace(',',' '):null==c&&null==R||(j['transform-origin']=`${c||0} ${R||0}`);const q=(0,o.parseTransformProp)(u,f);q&&(j.transform=q);const z=(0,o.parseTransformProp)(v);z&&(j.gradientTransform=z);const F=(0,o.parseTransformProp)(H);F&&(j.patternTransform=F),j.ref=n=>{s.elementRef.current=n,'function'==typeof P?P(n):P&&(P.current=n)};const G={};return null!=h&&(G.fontFamily=h),null!=T&&(G.fontSize=T),null!=S&&(G.fontWeight=S),null!=b&&(G.fontStyle=b),j.style=(0,t.resolve)(y,G),null!==_&&(j.onClick=f.onPress),null!==f.href&&void 0!==f.href&&(j.href=(0,l.resolveAssetUri)(f.href)?.uri),j}},1684,[1685,1686,1691,1692]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.hasTouchableProperty=function(n){return!!(n.onPress||n.onPressIn||n.onPressOut||n.onLongPress)}},1685,[]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.parseTransformProp=function(n,l){const u=[];if(l&&u.push(...t(l)),Array.isArray(n))if('number'==typeof n[0])u.push(`matrix(${n.join(' ')})`);else{const t=(0,s.stringifyTransformArrayProps)(n).split(' ');u.push(...t)}else'string'==typeof n&&u.push(n);return u.length?u.join(' '):void 0},e.stringifyTransformProps=t;var s=r(d[0]);function t(s){const t=[];return null!=s.translate&&t.push(`translate(${s.translate})`),null==s.translateX&&null==s.translateY||t.push(`translate(${s.translateX||0}, ${s.translateY||0})`),null!=s.scale&&t.push(`scale(${s.scale})`),null==s.scaleX&&null==s.scaleY||t.push(`scale(${s.scaleX||1}, ${s.scaleY||1})`),null!=s.rotation&&t.push(`rotate(${s.rotation})`),null!=s.skewX&&t.push(`skewX(${s.skewX})`),null!=s.skewY&&t.push(`skewY(${s.skewY})`),t}},1686,[1687]);
__d(function(g,r,i,a,m,_e,d){"use strict";Object.defineProperty(_e,'__esModule',{value:!0}),Object.defineProperty(_e,"default",{enumerable:!0,get:function(){return c}}),_e.props2transform=o,_e.transformToMatrix=u,_e.extractTransformSvgView=function(e){if('string'==typeof e.transform)return(0,t.parse)(e.transform);return e.transform},_e.stringifyTransformArrayProps=y;var e=r(d[0]),n=r(d[1]),t=r(d[2]);function s(n){const{x:t,y:s,originX:l,originY:o,scaleX:u,scaleY:c,rotation:f,skewX:y,skewY:p}=n;(0,e.appendTransform)(t+l,s+o,u,c,f,y,p,l,o)}function l(e,n,t,s){let l,o;if('number'==typeof e)l=o=e;else if('string'==typeof e){const n=e.split(/\s*,\s*/);2===n.length?(l=+n[0],o=+n[1]):1===n.length&&(l=o=+n[0])}else Array.isArray(e)&&(2===e.length?(l=+e[0],o=+e[1]):1===e.length&&(l=o=+e[0]));return n=+n,isNaN(n)||(l=n),t=+t,isNaN(t)||(o=t),[l||s||0,o||s||0]}function o(e){if(!e)return null;const{rotation:n,translate:t,translateX:s,translateY:o,origin:u,originX:c,originY:f,scale:y,scaleX:p,scaleY:A,skew:w,skewX:X,skewY:Y,x:h,y:k}=e;if(null==n&&null==t&&null==s&&null==o&&null==u&&null==c&&null==f&&null==y&&null==p&&null==A&&null==w&&null==X&&null==Y&&null==h&&null==k)return null;(Array.isArray(h)||Array.isArray(k))&&console.warn('Passing SvgLengthList to x or y attribute where SvgLength expected');const x=l(t,s||(Array.isArray(h)?h[0]:h),o||(Array.isArray(k)?k[0]:k)),$=l(u,c,f),b=l(y,p,A,1),v=l(w,X,Y);return{rotation:null==n?0:+n||0,originX:$[0],originY:$[1],scaleX:b[0],scaleY:b[1],skewX:v[0],skewY:v[1],x:x[0],y:x[1]}}function u(t,l){if(!t&&!l)return null;if((0,e.reset)(),t&&s(t),l)if(Array.isArray(l))if('number'==typeof l[0]){const n=l;(0,e.append)(n[0],n[1],n[2],n[3],n[4],n[5])}else{const t=y(l),s=(0,n.parse)(t);(0,e.append)(s[0],s[3],s[1],s[4],s[2],s[5])}else if('string'==typeof l)try{const t=(0,n.parse)(l);(0,e.append)(t[0],t[3],t[1],t[4],t[2],t[5])}catch(e){console.error(e)}else{const e=o(l);e&&s(e)}return(0,e.toArray)()}function c(t){if(Array.isArray(t)&&'number'==typeof t[0])return t;if('string'==typeof t)try{const e=(0,n.parse)(t);return[e[0],e[3],e[1],e[4],e[2],e[5]]}catch(n){return console.error(n),e.identity}const s=t;return u(o(s),s?.transform)}const f=e=>e.endsWith('rad')?parseFloat(e)*(180/Math.PI):e.endsWith('deg')?parseFloat(e):void 0;function y(e){return e?e.map(e=>{const[n,t]=Object.entries(e)[0];switch(n){case'translateX':return`translate(${t}, 0)`;case'translateY':return`translate(0, ${t})`;case'rotate':return`rotate(${f(t)})`;case'scale':return`scale(${t})`;case'scaleX':return`scale(${t}, 1)`;case'scaleY':return`scale(1, ${t})`;case'skewX':return`skewX(${f(t)})`;case'skewY':return`skewY(${f(t)})`;case'matrix':return`matrix(${t.join(', ')})`;default:return''}}).join(' '):''}},1687,[1688,1689,1690]);
__d(function(g,_r,i,_a,m,e,_d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),Object.defineProperty(e,"identity",{enumerable:!0,get:function(){return n}}),e.reset=function(){if(a)return;r=c=1,o=u=f=s=0,a=!0},e.toArray=function(){if(a)return n;return[r,o,u,c,f,s]},e.append=d,e.appendTransform=function(n,l,p,M,h,y,_,b,P){if(0===n&&0===l&&1===p&&1===M&&0===h&&0===y&&0===_&&0===b&&0===P)return;let j,v;if(h%360){const n=h*t;j=Math.cos(n),v=Math.sin(n)}else j=1,v=0;const O=j*p,A=v*p,I=-v*M,T=j*M;if(y||_){const r=Math.tan(_*t),o=Math.tan(y*t);d(O+o*A,r*O+A,I+o*T,r*I+T,n,l)}else d(O,A,I,T,n,l);(b||P)&&(f-=b*r+P*u,s-=b*o+P*c,a=!1)};const t=Math.PI/180,n=[1,0,0,1,0,0];let r=1,o=0,u=0,c=1,f=0,s=0,a=!0;function d(t,n,d,l,p,M){const h=1!==t||0!==n||0!==d||1!==l,y=0!==p||0!==M;if(!h&&!y)return;if(a)return a=!1,r=t,o=n,u=d,c=l,f=p,void(s=M);const _=r,b=o,P=u,j=c;h&&(r=_*t+P*n,o=b*t+j*n,u=_*d+P*l,c=b*d+j*l),y&&(f=_*p+P*M+f,s=b*p+j*M+s)}},1688,[]);
__d(function(g,_r,_i,_a,m,_e,_d){"use strict";function e(r,n,t,u){this.message=r,this.expected=n,this.found=t,this.location=u,this.name="SyntaxError","function"==typeof Error.captureStackTrace&&Error.captureStackTrace(this,e)}!(function(e,r){function n(){this.constructor=e}n.prototype=r.prototype,e.prototype=new n})(e,Error),e.buildMessage=function(e,r){var n={literal:function(e){return"\""+u(e.text)+"\""},class:function(e){var r,n="";for(r=0;r<e.parts.length;r++)n+=e.parts[r]instanceof Array?o(e.parts[r][0])+"-"+o(e.parts[r][1]):o(e.parts[r]);return"["+(e.inverted?"^":"")+n+"]"},any:function(e){return"any character"},end:function(e){return"end of input"},other:function(e){return e.description}};function t(e){return e.charCodeAt(0).toString(16).toUpperCase()}function u(e){return e.replace(/\\/g,'\\\\').replace(/"/g,'\\"').replace(/\0/g,'\\0').replace(/\t/g,'\\t').replace(/\n/g,'\\n').replace(/\r/g,'\\r').replace(/[\x00-\x0F]/g,function(e){return'\\x0'+t(e)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(e){return'\\x'+t(e)})}function o(e){return e.replace(/\\/g,'\\\\').replace(/\]/g,'\\]').replace(/\^/g,'\\^').replace(/-/g,'\\-').replace(/\0/g,'\\0').replace(/\t/g,'\\t').replace(/\n/g,'\\n').replace(/\r/g,'\\r').replace(/[\x00-\x0F]/g,function(e){return'\\x0'+t(e)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(e){return'\\x'+t(e)})}function i(e){return n[e.type](e)}return"Expected "+(function(e){var r,n,t=new Array(e.length);for(r=0;r<e.length;r++)t[r]=i(e[r]);if(t.sort(),t.length>0){for(r=1,n=1;r<t.length;r++)t[r-1]!==t[r]&&(t[n]=t[r],n++);t.length=n}switch(t.length){case 1:return t[0];case 2:return t[0]+" or "+t[1];default:return t.slice(0,-1).join(", ")+", or "+t[t.length-1]}})(e)+" but "+(function(e){return e?"\""+u(e)+"\"":"end of input"})(r)+" found."},m.exports={SyntaxError:e,parse:function(r,n){n=void 0!==n?n:{};var t,u={},o={transformList:ae},i=ae,f=function(e){return e},s=function(e,r){return t=r,u=(n=e)[0],o=n[1],i=n[2],f=n[3],s=n[4],l=n[5],c=t[0],a=t[1],h=t[2],p=t[3],d=t[4],v=t[5],[u*c+o*p,u*a+o*d,u*h+o*v+i,f*c+s*p,f*a+s*d,f*h+s*v+l];var n,t,u,o,i,f,s,l,c,a,h,p,d,v},l="matrix",c=ie("matrix",!1),a="(",h=ie("(",!1),p=")",d=ie(")",!1),v=function(e,r,n,t,u,o){return[e,n,u,r,t,o]},A="translate",x=ie("translate",!1),C=function(e,r){return[1,0,e,0,1,r||0]},y="scale",j=ie("scale",!1),w=function(e,r){return[e,0,0,0,null===r?e:r,0]},b="rotate",E=ie("rotate",!1),F=function(e,r){var n=Math.cos(Pe*e),t=Math.sin(Pe*e);if(null!==r){var u=r[0],o=r[1];return[n,-t,n*-u+-t*-o+u,t,n,t*-u+n*-o+o]}return[n,-t,0,t,n,0]},M="skewX",k=ie("skewX",!1),S=function(e){return[1,Math.tan(Pe*e),0,0,1,0]},R="skewY",I=ie("skewY",!1),T=function(e){return[1,0,0,Math.tan(Pe*e),1,0]},X=function(e){return parseFloat(e.join(""))},Y=function(e){return parseInt(e.join(""))},_=function(e){return e},L=function(e,r){return[e,r]},P=",",U=ie(",",!1),q=function(e){return e.join("")},z=function(e){return e.join("")},B=function(e){return e.join("")},D={type:"other",description:"fractionalConstant"},G=".",H=ie(".",!1),J=function(e,r){return[e?e.join(""):null,".",r.join("")].join("")},K=/^[eE]/,N=fe(["e","E"],!1,!1),O=function(e){return[e[0],e[1],e[2].join("")].join("")},Q=/^[+\-]/,V=fe(["+","-"],!1,!1),W=/^[0-9]/,Z=fe([["0","9"]],!1,!1),$=/^[ \t\r\n]/,ee=fe([" ","\t","\r","\n"],!1,!1),re=0,ne=[{line:1,column:1}],te=0,ue=[],oe=0;if("startRule"in n){if(!(n.startRule in o))throw new Error("Can't start parsing from rule \""+n.startRule+"\".");i=o[n.startRule]}function ie(e,r){return{type:"literal",text:e,ignoreCase:r}}function fe(e,r,n){return{type:"class",parts:e,inverted:r,ignoreCase:n}}function se(e){var n,t=ne[e];if(t)return t;for(n=e-1;!ne[n];)n--;for(t={line:(t=ne[n]).line,column:t.column};n<e;)10===r.charCodeAt(n)?(t.line++,t.column=1):t.column++,n++;return ne[e]=t,t}function le(e,r){var n=se(e),t=se(r);return{start:{offset:e,line:n.line,column:n.column},end:{offset:r,line:t.line,column:t.column}}}function ce(e){re<te||(re>te&&(te=re,ue=[]),ue.push(e))}function ae(){var e,r,n,t,o;for(e=re,r=[],n=Te();n!==u;)r.push(n),n=Te();if(r!==u)if((n=he())===u&&(n=null),n!==u){for(t=[],o=Te();o!==u;)t.push(o),o=Te();t!==u?e=r=f(n):(re=e,e=u)}else re=e,e=u;else re=e,e=u;return e}function he(){var e,r,n,t;if(e=re,(r=pe())!==u){for(n=[],t=we();t!==u;)n.push(t),t=we();n!==u&&(t=he())!==u?e=r=s(r,t):(re=e,e=u)}else re=e,e=u;return e===u&&(e=pe()),e}function pe(){var e;return(e=ge())===u&&(e=de())===u&&(e=ve())===u&&(e=Ae())===u&&(e=xe())===u&&(e=Ce()),e}function ge(){var e,n,t,o,i,f,s,A,x,C,y,j,w;if(e=re,r.substr(re,6)===l?(n=l,re+=6):(n=u,0===oe&&ce(c)),n!==u){for(t=[],o=Te();o!==u;)t.push(o),o=Te();if(t!==u)if(40===r.charCodeAt(re)?(o=a,re++):(o=u,0===oe&&ce(h)),o!==u){for(i=[],f=Te();f!==u;)i.push(f),f=Te();if(i!==u)if((f=me())!==u)if(we()!==u)if((s=me())!==u)if(we()!==u)if((A=me())!==u)if(we()!==u)if((x=me())!==u)if(we()!==u)if((C=me())!==u)if(we()!==u)if((y=me())!==u){for(j=[],w=Te();w!==u;)j.push(w),w=Te();j!==u?(41===r.charCodeAt(re)?(w=p,re++):(w=u,0===oe&&ce(d)),w!==u?e=n=v(f,s,A,x,C,y):(re=e,e=u)):(re=e,e=u)}else re=e,e=u;else re=e,e=u;else re=e,e=u;else re=e,e=u;else re=e,e=u;else re=e,e=u;else re=e,e=u;else re=e,e=u;else re=e,e=u;else re=e,e=u;else re=e,e=u;else re=e,e=u}else re=e,e=u;else re=e,e=u}else re=e,e=u;return e}function de(){var e,n,t,o,i,f,s,l,c;if(e=re,r.substr(re,9)===A?(n=A,re+=9):(n=u,0===oe&&ce(x)),n!==u){for(t=[],o=Te();o!==u;)t.push(o),o=Te();if(t!==u)if(40===r.charCodeAt(re)?(o=a,re++):(o=u,0===oe&&ce(h)),o!==u){for(i=[],f=Te();f!==u;)i.push(f),f=Te();if(i!==u)if((f=me())!==u)if((s=ye())===u&&(s=null),s!==u){for(l=[],c=Te();c!==u;)l.push(c),c=Te();l!==u?(41===r.charCodeAt(re)?(c=p,re++):(c=u,0===oe&&ce(d)),c!==u?e=n=C(f,s):(re=e,e=u)):(re=e,e=u)}else re=e,e=u;else re=e,e=u;else re=e,e=u}else re=e,e=u;else re=e,e=u}else re=e,e=u;return e}function ve(){var e,n,t,o,i,f,s,l,c;if(e=re,r.substr(re,5)===y?(n=y,re+=5):(n=u,0===oe&&ce(j)),n!==u){for(t=[],o=Te();o!==u;)t.push(o),o=Te();if(t!==u)if(40===r.charCodeAt(re)?(o=a,re++):(o=u,0===oe&&ce(h)),o!==u){for(i=[],f=Te();f!==u;)i.push(f),f=Te();if(i!==u)if((f=me())!==u)if((s=ye())===u&&(s=null),s!==u){for(l=[],c=Te();c!==u;)l.push(c),c=Te();l!==u?(41===r.charCodeAt(re)?(c=p,re++):(c=u,0===oe&&ce(d)),c!==u?e=n=w(f,s):(re=e,e=u)):(re=e,e=u)}else re=e,e=u;else re=e,e=u;else re=e,e=u}else re=e,e=u;else re=e,e=u}else re=e,e=u;return e}function Ae(){var e,n,t,o,i,f,s,l,c;if(e=re,r.substr(re,6)===b?(n=b,re+=6):(n=u,0===oe&&ce(E)),n!==u){for(t=[],o=Te();o!==u;)t.push(o),o=Te();if(t!==u)if(40===r.charCodeAt(re)?(o=a,re++):(o=u,0===oe&&ce(h)),o!==u){for(i=[],f=Te();f!==u;)i.push(f),f=Te();if(i!==u)if((f=me())!==u)if((s=je())===u&&(s=null),s!==u){for(l=[],c=Te();c!==u;)l.push(c),c=Te();l!==u?(41===r.charCodeAt(re)?(c=p,re++):(c=u,0===oe&&ce(d)),c!==u?e=n=F(f,s):(re=e,e=u)):(re=e,e=u)}else re=e,e=u;else re=e,e=u;else re=e,e=u}else re=e,e=u;else re=e,e=u}else re=e,e=u;return e}function xe(){var e,n,t,o,i,f,s,l;if(e=re,r.substr(re,5)===M?(n=M,re+=5):(n=u,0===oe&&ce(k)),n!==u){for(t=[],o=Te();o!==u;)t.push(o),o=Te();if(t!==u)if(40===r.charCodeAt(re)?(o=a,re++):(o=u,0===oe&&ce(h)),o!==u){for(i=[],f=Te();f!==u;)i.push(f),f=Te();if(i!==u)if((f=me())!==u){for(s=[],l=Te();l!==u;)s.push(l),l=Te();s!==u?(41===r.charCodeAt(re)?(l=p,re++):(l=u,0===oe&&ce(d)),l!==u?e=n=S(f):(re=e,e=u)):(re=e,e=u)}else re=e,e=u;else re=e,e=u}else re=e,e=u;else re=e,e=u}else re=e,e=u;return e}function Ce(){var e,n,t,o,i,f,s,l;if(e=re,r.substr(re,5)===R?(n=R,re+=5):(n=u,0===oe&&ce(I)),n!==u){for(t=[],o=Te();o!==u;)t.push(o),o=Te();if(t!==u)if(40===r.charCodeAt(re)?(o=a,re++):(o=u,0===oe&&ce(h)),o!==u){for(i=[],f=Te();f!==u;)i.push(f),f=Te();if(i!==u)if((f=me())!==u){for(s=[],l=Te();l!==u;)s.push(l),l=Te();s!==u?(41===r.charCodeAt(re)?(l=p,re++):(l=u,0===oe&&ce(d)),l!==u?e=n=T(f):(re=e,e=u)):(re=e,e=u)}else re=e,e=u;else re=e,e=u}else re=e,e=u;else re=e,e=u}else re=e,e=u;return e}function me(){var e,r,n,t;return e=re,r=re,(n=Se())===u&&(n=null),n!==u&&(t=Fe())!==u?r=n=[n,t]:(re=r,r=u),r!==u&&(r=X(r)),(e=r)===u&&(e=re,r=re,(n=Se())===u&&(n=null),n!==u&&(t=Ee())!==u?r=n=[n,t]:(re=r,r=u),r!==u&&(r=Y(r)),e=r),e}function ye(){var e,r;return e=re,we()!==u&&(r=me())!==u?e=_(r):(re=e,e=u),e}function je(){var e,r,n;return e=re,we()!==u&&(r=me())!==u&&we()!==u&&(n=me())!==u?e=L(r,n):(re=e,e=u),e}function we(){var e,r,n,t,o;if(e=re,r=[],(n=Te())!==u)for(;n!==u;)r.push(n),n=Te();else r=u;if(r!==u)if((n=be())===u&&(n=null),n!==u){for(t=[],o=Te();o!==u;)t.push(o),o=Te();t!==u?e=r=[r,n,t]:(re=e,e=u)}else re=e,e=u;else re=e,e=u;if(e===u)if(e=re,(r=be())!==u){for(n=[],t=Te();t!==u;)n.push(t),t=Te();n!==u?e=r=[r,n]:(re=e,e=u)}else re=e,e=u;return e}function be(){var e;return 44===r.charCodeAt(re)?(e=P,re++):(e=u,0===oe&&ce(U)),e}function Ee(){var e,r;return e=re,(r=Re())!==u&&(r=q(r)),e=r}function Fe(){var e,r,n,t;return e=re,r=re,(n=Me())!==u?((t=ke())===u&&(t=null),t!==u?r=n=[n,t]:(re=r,r=u)):(re=r,r=u),r!==u&&(r=z(r)),(e=r)===u&&(e=re,r=re,(n=Re())!==u&&(t=ke())!==u?r=n=[n,t]:(re=r,r=u),r!==u&&(r=B(r)),e=r),e}function Me(){var e,n,t,o;return oe++,e=re,(n=Re())===u&&(n=null),n!==u?(46===r.charCodeAt(re)?(t=G,re++):(t=u,0===oe&&ce(H)),t!==u&&(o=Re())!==u?e=n=J(n,o):(re=e,e=u)):(re=e,e=u),e===u&&(e=re,(n=Re())!==u?(46===r.charCodeAt(re)?(t=G,re++):(t=u,0===oe&&ce(H)),t!==u?e=n=B(n):(re=e,e=u)):(re=e,e=u)),oe--,e===u&&(n=u,0===oe&&ce(D)),e}function ke(){var e,n,t,o,i;return e=re,n=re,K.test(r.charAt(re))?(t=r.charAt(re),re++):(t=u,0===oe&&ce(N)),t!==u?((o=Se())===u&&(o=null),o!==u&&(i=Re())!==u?n=t=[t,o,i]:(re=n,n=u)):(re=n,n=u),n!==u&&(n=O(n)),e=n}function Se(){var e;return Q.test(r.charAt(re))?(e=r.charAt(re),re++):(e=u,0===oe&&ce(V)),e}function Re(){var e,r;if(e=[],(r=Ie())!==u)for(;r!==u;)e.push(r),r=Ie();else e=u;return e}function Ie(){var e;return W.test(r.charAt(re))?(e=r.charAt(re),re++):(e=u,0===oe&&ce(Z)),e}function Te(){var e;return $.test(r.charAt(re))?(e=r.charAt(re),re++):(e=u,0===oe&&ce(ee)),e}var Xe,Ye,Le,Pe=Math.PI/180;if((t=i())!==u&&re===r.length)return t;throw t!==u&&re<r.length&&ce({type:"end"}),Xe=ue,Ye=te<r.length?r.charAt(te):null,Le=te<r.length?le(te,te+1):le(te,te),new e(e.buildMessage(Xe,Ye),Xe,Ye,Le)}}},1689,[]);
__d(function(_g,r,_i,_a,m,_e,_d){'use strict';function t(e,n,o,u){var a=Error.call(this,e);return Object.setPrototypeOf&&Object.setPrototypeOf(a,t.prototype),a.expected=n,a.found=o,a.location=u,a.name='SyntaxError',a}function e(t,e,n){return n=n||' ',t.length>e?t:(e-=t.length,t+(n+=n.repeat(e)).slice(0,e))}!(function(t,e){function n(){this.constructor=t}n.prototype=e.prototype,t.prototype=new n})(t,Error),t.prototype.format=function(t){var n='Error: '+this.message;if(this.location){var o,u=null;for(o=0;o<t.length;o++)if(t[o].source===this.location.source){u=t[o].text.split(/\r\n|\n|\r/g);break}var a=this.location.start,c=this.location.source&&'function'==typeof this.location.source.offset?this.location.source.offset(a):a,s=this.location.source+':'+c.line+':'+c.column;if(u){var i=this.location.end,l=e('',c.line.toString().length,' '),f=u[a.line-1],p=(a.line===i.line?i.column:f.length+1)-a.column||1;n+='\n --\x3e '+s+'\n'+l+' |\n'+c.line+' | '+f+'\n'+l+' | '+e('',a.column-1,' ')+e('',p,'^')}else n+='\n at '+s}return n},t.buildMessage=function(t,e){var n={literal:function(t){return'"'+u(t.text)+'"'},class:function(t){var e=t.parts.map(function(t){return Array.isArray(t)?a(t[0])+'-'+a(t[1]):a(t)});return'['+(t.inverted?'^':'')+e.join('')+']'},any:function(){return'any character'},end:function(){return'end of input'},other:function(t){return t.description}};function o(t){return t.charCodeAt(0).toString(16).toUpperCase()}function u(t){return t.replace(/\\/g,'\\\\').replace(/"/g,'\\"').replace(/\0/g,'\\0').replace(/\t/g,'\\t').replace(/\n/g,'\\n').replace(/\r/g,'\\r').replace(/[\x00-\x0F]/g,function(t){return'\\x0'+o(t)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(t){return'\\x'+o(t)})}function a(t){return t.replace(/\\/g,'\\\\').replace(/\]/g,'\\]').replace(/\^/g,'\\^').replace(/-/g,'\\-').replace(/\0/g,'\\0').replace(/\t/g,'\\t').replace(/\n/g,'\\n').replace(/\r/g,'\\r').replace(/[\x00-\x0F]/g,function(t){return'\\x0'+o(t)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(t){return'\\x'+o(t)})}function c(t){return n[t.type](t)}return'Expected '+(function(t){var e,n,o=t.map(c);if(o.sort(),o.length>0){for(e=1,n=1;e<o.length;e++)o[e-1]!==o[e]&&(o[n]=o[e],n++);o.length=n}switch(o.length){case 1:return o[0];case 2:return o[0]+' or '+o[1];default:return o.slice(0,-1).join(', ')+', or '+o[o.length-1]}})(t)+' but '+(function(t){return t?'"'+u(t)+'"':'end of input'})(e)+' found.'},m.exports={StartRules:['start'],SyntaxError:t,parse:function(e,n){var o,u,a,c,s={},i=(n=void 0!==n?n:{}).grammarSource,l={start:At},f=At,p='matrix(',h=')',g='translate(',d='scale(',x='rotate(',A='skewX(',v='skewY(',y='.',w='e',F=/^[ \t\n\r,]/,b=/^[ \t\n\r]/,C=/^[+\-]/,$=/^[0-9]/,E=gt('transform functions'),k=gt('transformFunctions'),S=gt('transform function'),P=gt('matrix'),R=pt('matrix(',!1),X=pt(')',!1),Y=gt('translate'),j=pt('translate(',!1),O=gt('scale'),M=pt('scale(',!1),_=gt('rotate'),D=pt('rotate(',!1),I=gt('x, y'),L=gt('skewX'),U=pt('skewX(',!1),q=gt('skewY'),z=pt('skewY(',!1),B=gt('space or comma'),G=ht([' ','\t','\n','\r',','],!1,!1),H=gt('whitespace'),J=ht([' ','\t','\n','\r'],!1,!1),K=ht(['+','-'],!1,!1),N=ht([['0','9']],!1,!1),Q=pt('.',!1),T=pt('e',!1),V=function(t,e){const n=Array.isArray(t)?t:[t];return e.forEach(t=>{Array.isArray(t[1])?n.push(...t[1]):n.push(t[1])}),n},W=function(t,e,n,o,u,a,c,s,i){return{matrix:[t,e,n,o,u,a,c,s,i]}},Z=function(t,e){return null==e?{translate:t}:{translate:[t,e]}},tt=function(t,e){return null==e?{scale:t}:[{scaleX:t},{scaleY:e}]},rt=function(t,e){return null!==e?{rotate:`${t}deg`}:[{rotate:`${t}deg`}]},et=function(t,e){return[t,e]},nt=function(t){return[{skewX:`${t}deg`}]},ot=function(t){return[{skewY:`${t}deg`}]},ut=function(){return parseFloat(e.substring(ct,at))},at=0|n.peg$currPos,ct=at,st=[{line:1,column:1}],it=at,lt=n.peg$maxFailExpected||[],ft=0|n.peg$silentFails;if(n.startRule){if(!(n.startRule in l))throw new Error('Can\'t start parsing from rule "'+n.startRule+'".');f=l[n.startRule]}function pt(t,e){return{type:'literal',text:t,ignoreCase:e}}function ht(t,e,n){return{type:'class',parts:t,inverted:e,ignoreCase:n}}function gt(t){return{type:'other',description:t}}function dt(t){var n,o=st[t];if(o)return o;if(t>=st.length)n=st.length-1;else for(n=t;!st[--n];);for(o={line:(o=st[n]).line,column:o.column};n<t;)10===e.charCodeAt(n)?(o.line++,o.column=1):o.column++,n++;return st[t]=o,o}function xt(t,e,n){var o=dt(t),u=dt(e),a={source:i,start:{offset:t,line:o.line,column:o.column},end:{offset:e,line:u.line,column:u.column}};return n&&i&&'function'==typeof i.offset&&(a.start=i.offset(a.start),a.end=i.offset(a.end)),a}function mt(t){at<it||(at>it&&(it=at,lt=[]),lt.push(t))}function At(){var t;return ft++,t=vt(),ft--,t===s&&(0===ft&&mt(E)),t}function vt(){var t,e,n,o,u,a;if(ft++,t=at,(e=yt())!==s){for(n=[],o=at,u=Pt(),(a=yt())!==s?o=u=[u,a]:(at=o,o=s);o!==s;)n.push(o),o=at,u=Pt(),(a=yt())!==s?o=u=[u,a]:(at=o,o=s);ct=t,t=V(e,n)}else at=t,t=s;return ft--,t===s&&(e=s,0===ft&&mt(k)),t}function yt(){var t;return ft++,(t=wt())===s&&(t=Ft())===s&&(t=bt())===s&&(t=Ct())===s&&(t=Et())===s&&(t=kt()),ft--,t===s&&(0===ft&&mt(S)),t}function wt(){var t,n,o,u,a,c,i,l,f,g,d,x;return ft++,t=at,Pt(),e.substr(at,7)===p?(n=p,at+=7):(n=s,0===ft&&mt(R)),n!==s?(Pt(),(o=Rt())!==s?(St(),(u=Rt())!==s?(St(),(a=Rt())!==s?(St(),(c=Rt())!==s?(St(),(i=Rt())!==s?(St(),(l=Rt())!==s?(St(),(f=Rt())!==s?(St(),(g=Rt())!==s?(St(),(d=Rt())!==s?(Pt(),41===e.charCodeAt(at)?(x=h,at++):(x=s,0===ft&&mt(X)),x!==s?(Pt(),ct=t,t=W(o,u,a,c,i,l,f,g,d)):(at=t,t=s)):(at=t,t=s)):(at=t,t=s)):(at=t,t=s)):(at=t,t=s)):(at=t,t=s)):(at=t,t=s)):(at=t,t=s)):(at=t,t=s)):(at=t,t=s)):(at=t,t=s),ft--,t===s&&(0===ft&&mt(P)),t}function Ft(){var t,n,o,u,a;return ft++,t=at,Pt(),e.substr(at,10)===g?(n=g,at+=10):(n=s,0===ft&&mt(j)),n!==s?(Pt(),(o=Rt())!==s?(St(),(u=Rt())===s&&(u=null),Pt(),41===e.charCodeAt(at)?(a=h,at++):(a=s,0===ft&&mt(X)),a!==s?(Pt(),ct=t,t=Z(o,u)):(at=t,t=s)):(at=t,t=s)):(at=t,t=s),ft--,t===s&&(0===ft&&mt(Y)),t}function bt(){var t,n,o,u,a;return ft++,t=at,Pt(),e.substr(at,6)===d?(n=d,at+=6):(n=s,0===ft&&mt(M)),n!==s?(Pt(),(o=Rt())!==s?(St(),(u=Rt())===s&&(u=null),Pt(),41===e.charCodeAt(at)?(a=h,at++):(a=s,0===ft&&mt(X)),a!==s?(Pt(),ct=t,t=tt(o,u)):(at=t,t=s)):(at=t,t=s)):(at=t,t=s),ft--,t===s&&(0===ft&&mt(O)),t}function Ct(){var t,n,o,u,a;return ft++,t=at,Pt(),e.substr(at,7)===x?(n=x,at+=7):(n=s,0===ft&&mt(D)),n!==s?(Pt(),(o=Rt())!==s?((u=$t())===s&&(u=null),Pt(),41===e.charCodeAt(at)?(a=h,at++):(a=s,0===ft&&mt(X)),a!==s?(Pt(),ct=t,t=rt(o,u)):(at=t,t=s)):(at=t,t=s)):(at=t,t=s),ft--,t===s&&(0===ft&&mt(_)),t}function $t(){var t,e,n;return ft++,t=at,St(),(e=Rt())!==s?(St(),(n=Rt())!==s?(ct=t,t=et(e,n)):(at=t,t=s)):(at=t,t=s),ft--,t===s&&(0===ft&&mt(I)),t}function Et(){var t,n,o,u;return ft++,t=at,Pt(),e.substr(at,6)===A?(n=A,at+=6):(n=s,0===ft&&mt(U)),n!==s?(Pt(),(o=Rt())!==s?(Pt(),41===e.charCodeAt(at)?(u=h,at++):(u=s,0===ft&&mt(X)),u!==s?(Pt(),ct=t,t=nt(o)):(at=t,t=s)):(at=t,t=s)):(at=t,t=s),ft--,t===s&&(0===ft&&mt(L)),t}function kt(){var t,n,o,u;return ft++,t=at,Pt(),e.substr(at,6)===v?(n=v,at+=6):(n=s,0===ft&&mt(z)),n!==s?(Pt(),(o=Rt())!==s?(Pt(),41===e.charCodeAt(at)?(u=h,at++):(u=s,0===ft&&mt(X)),u!==s?(Pt(),ct=t,t=ot(o)):(at=t,t=s)):(at=t,t=s)):(at=t,t=s),ft--,t===s&&(0===ft&&mt(q)),t}function St(){var t,n;for(ft++,t=[],n=e.charAt(at),F.test(n)?at++:(n=s,0===ft&&mt(G));n!==s;)t.push(n),n=e.charAt(at),F.test(n)?at++:(n=s,0===ft&&mt(G));return ft--,n=s,0===ft&&mt(B),t}function Pt(){var t,n;for(ft++,t=[],n=e.charAt(at),b.test(n)?at++:(n=s,0===ft&&mt(J));n!==s;)t.push(n),n=e.charAt(at),b.test(n)?at++:(n=s,0===ft&&mt(J));return ft--,n=s,0===ft&&mt(H),t}function Rt(){var t,n,o,u,a,c,i,l;for(t=at,n=e.charAt(at),C.test(n)?at++:(n=s,0===ft&&mt(K)),n===s&&(n=null),o=at,u=[],a=e.charAt(at),$.test(a)?at++:(a=s,0===ft&&mt(N));a!==s;)u.push(a),a=e.charAt(at),$.test(a)?at++:(a=s,0===ft&&mt(N));if(46===e.charCodeAt(at)?(a=y,at++):(a=s,0===ft&&mt(Q)),a!==s){if(c=[],i=e.charAt(at),$.test(i)?at++:(i=s,0===ft&&mt(N)),i!==s)for(;i!==s;)c.push(i),i=e.charAt(at),$.test(i)?at++:(i=s,0===ft&&mt(N));else c=s;c!==s?o=u=[u,a,c]:(at=o,o=s)}else at=o,o=s;if(o===s)if(o=[],u=e.charAt(at),$.test(u)?at++:(u=s,0===ft&&mt(N)),u!==s)for(;u!==s;)o.push(u),u=e.charAt(at),$.test(u)?at++:(u=s,0===ft&&mt(N));else o=s;if(o!==s){if(u=at,101===e.charCodeAt(at)?(a=w,at++):(a=s,0===ft&&mt(T)),a!==s){if(c=e.charAt(at),C.test(c)?at++:(c=s,0===ft&&mt(K)),c===s&&(c=null),i=[],l=e.charAt(at),$.test(l)?at++:(l=s,0===ft&&mt(N)),l!==s)for(;l!==s;)i.push(l),l=e.charAt(at),$.test(l)?at++:(l=s,0===ft&&mt(N));else i=s;i!==s?u=a=[a,c,i]:(at=u,u=s)}else at=u,u=s;u===s&&(u=null),ct=t,t=ut()}else at=t,t=s;return t}if(o=f(),n.peg$library)return{peg$result:o,peg$currPos:at,peg$FAILED:s,peg$maxFailExpected:lt,peg$maxFailPos:it};if(o!==s&&at===e.length)return o;throw o!==s&&at<e.length&&mt({type:'end'}),u=lt,a=it<e.length?e.charAt(it):null,c=it<e.length?xt(it,it+1):xt(it,it),new t(t.buildMessage(u,a),u,a,c)}}},1690,[]);
__d(function(g,r,i,a,m,_e,d){"use strict";Object.defineProperty(_e,'__esModule',{value:!0}),_e.resolve=function(e,t){return e?s.default?[e,t]:e[Symbol.iterator]?Object.assign({},...e,t):Object.assign({},e,t):t};var e,t=r(d[0]),s=(e=t)&&e.__esModule?e:{default:e}},1691,[104]);
__d(function(g,r,i,a,m,_e,d){"use strict";Object.defineProperty(_e,'__esModule',{value:!0}),_e.resolveAssetUri=function(e){let t={};if('number'==typeof e){const c=(0,o.getAssetByID)(e);if(null==c)throw new Error(`Image: asset with ID "${e}" could not be found. Please check the image source or packager.`);if(t={width:c.width,height:c.height,scale:c.scales[0]},c.scales.length>1){const e=s.default.get();t.scale=c.scales.reduce((t,s)=>Math.abs(s-e)<Math.abs(t-e)?s:t)}const n=1!==t.scale?`@${t.scale}x`:'';t.uri=c?`${c.httpServerLocation}/${c.name}${n}.${c.type}`:''}else'string'==typeof e?t.uri=e:e&&!Array.isArray(e)&&'string'==typeof e.uri&&(t.uri=e.uri);if(t.uri){const e=t?.uri?.match(c);if(e){const[,s,o]=e,c=encodeURIComponent(o);return t.uri=`${s}${c}`,t}}return t};var e,t=r(d[0]),s=(e=t)&&e.__esModule?e:{default:e},o=r(d[1]);const c=/^(data:image\/svg\+xml;utf8,)(.*)/},1692,[66,1518]);
__d(function(_g,_r,i,_a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.convertInt32ColorToRGBA=function(t){const o=t>>16&255,n=t>>8&255,r=255&t,c=((t>>24&255)/255).toFixed(2);return`rgba(${o},${n},${r},${c})`}},1693,[]);
__d(function(g,r,i,a,m,_e,d){"use strict";Object.defineProperty(_e,'__esModule',{value:!0}),Object.defineProperty(_e,"default",{enumerable:!0,get:function(){return f}}),r(d[0]);const t={top:20,left:20,right:20,bottom:30},e='NOT_RESPONDER',s='RESPONDER_INACTIVE_PRESS_IN',o='RESPONDER_INACTIVE_PRESS_OUT',E='RESPONDER_ACTIVE_PRESS_IN',n='RESPONDER_ACTIVE_PRESS_OUT',R='RESPONDER_ACTIVE_LONG_PRESS_IN',l='RESPONDER_ACTIVE_LONG_PRESS_OUT',h='ERROR',_={RESPONDER_ACTIVE_PRESS_OUT:!0,RESPONDER_ACTIVE_PRESS_IN:!0},S={RESPONDER_INACTIVE_PRESS_IN:!0,RESPONDER_ACTIVE_PRESS_IN:!0,RESPONDER_ACTIVE_LONG_PRESS_IN:!0},c={RESPONDER_ACTIVE_LONG_PRESS_IN:!0},u='DELAY',T='RESPONDER_GRANT',P='RESPONDER_RELEASE',D='RESPONDER_TERMINATED',N='ENTER_PRESS_RECT',p='LEAVE_PRESS_RECT',O='LONG_PRESS_DETECTED',A={NOT_RESPONDER:{DELAY:h,RESPONDER_GRANT:s,RESPONDER_RELEASE:h,RESPONDER_TERMINATED:h,ENTER_PRESS_RECT:h,LEAVE_PRESS_RECT:h,LONG_PRESS_DETECTED:h},RESPONDER_INACTIVE_PRESS_IN:{DELAY:E,RESPONDER_GRANT:h,RESPONDER_RELEASE:e,RESPONDER_TERMINATED:e,ENTER_PRESS_RECT:s,LEAVE_PRESS_RECT:o,LONG_PRESS_DETECTED:h},RESPONDER_INACTIVE_PRESS_OUT:{DELAY:n,RESPONDER_GRANT:h,RESPONDER_RELEASE:e,RESPONDER_TERMINATED:e,ENTER_PRESS_RECT:s,LEAVE_PRESS_RECT:o,LONG_PRESS_DETECTED:h},RESPONDER_ACTIVE_PRESS_IN:{DELAY:h,RESPONDER_GRANT:h,RESPONDER_RELEASE:e,RESPONDER_TERMINATED:e,ENTER_PRESS_RECT:E,LEAVE_PRESS_RECT:n,LONG_PRESS_DETECTED:R},RESPONDER_ACTIVE_PRESS_OUT:{DELAY:h,RESPONDER_GRANT:h,RESPONDER_RELEASE:e,RESPONDER_TERMINATED:e,ENTER_PRESS_RECT:E,LEAVE_PRESS_RECT:n,LONG_PRESS_DETECTED:h},RESPONDER_ACTIVE_LONG_PRESS_IN:{DELAY:h,RESPONDER_GRANT:h,RESPONDER_RELEASE:e,RESPONDER_TERMINATED:e,ENTER_PRESS_RECT:R,LEAVE_PRESS_RECT:l,LONG_PRESS_DETECTED:R},RESPONDER_ACTIVE_LONG_PRESS_OUT:{DELAY:h,RESPONDER_GRANT:h,RESPONDER_RELEASE:e,RESPONDER_TERMINATED:e,ENTER_PRESS_RECT:R,LEAVE_PRESS_RECT:l,LONG_PRESS_DETECTED:h},ERROR:{DELAY:e,RESPONDER_GRANT:s,RESPONDER_RELEASE:e,RESPONDER_TERMINATED:e,ENTER_PRESS_RECT:e,LEAVE_PRESS_RECT:e,LONG_PRESS_DETECTED:e}},L=t=>{const e=t.touches,s=t.changedTouches,o=e&&e.length>0,E=s&&s.length>0;return!o&&E?s[0]:o?e[0]:t},b=t=>null!=t&&'object'==typeof t&&'function'==typeof t.measure,I=()=>({touchable:{touchState:void 0,responderID:null}}),y={componentWillUnmount(){this.touchableDelayTimeout&&clearTimeout(this.touchableDelayTimeout),this.longPressDelayTimeout&&clearTimeout(this.longPressDelayTimeout),this.pressOutDelayTimeout&&clearTimeout(this.pressOutDelayTimeout)},touchableGetInitialState:I,touchableHandleStartShouldSetResponder(t){const{onStartShouldSetResponder:e}=this.props;return e?e(t):!this.props.disabled},touchableHandleResponderTerminationRequest(t){const{onResponderTerminationRequest:e}=this.props;return e?e(t):!this.props.rejectResponderTermination},touchableLongPressCancelsPress:()=>!0,touchableHandleResponderGrant(t){const{onResponderGrant:s}=this.props;if(s)return s(t);const o=t.currentTarget;t.persist(),this.pressOutDelayTimeout&&clearTimeout(this.pressOutDelayTimeout),this.pressOutDelayTimeout=null,this.state.touchable.touchState=e,this.state.touchable.responderID=o,this._receiveSignal(T,t);let E=Math.max(this.touchableGetHighlightDelayMS(),0);E=isNaN(E)?130:E,0!==E?this.touchableDelayTimeout=setTimeout(()=>this._handleDelay(t),E):this._handleDelay(t);let n=Math.max(this.touchableGetLongPressDelayMS(),10);n=isNaN(n)?370:n,this.longPressDelayTimeout=setTimeout(()=>this._handleLongDelay(t),n+E)},touchableHandleResponderRelease(t){const{onResponderRelease:e}=this.props;if(e)return e(t);this.pressInLocation=null,this._receiveSignal(P,t)},touchableHandleResponderTerminate(t){const{onResponderTerminate:e}=this.props;if(e)return e(t);this.pressInLocation=null,this._receiveSignal(D,t)},touchableHandleResponderMove(t){const{onResponderMove:e}=this.props;if(e)return e(t);const{positionOnActivate:o,dimensionsOnActivate:E}=this.state.touchable;if(!o||!E)return;const n=this.touchableGetPressRectOffset();let R=n.left??20,l=n.top??20,h=n.right??20,_=n.bottom??20;const S=this.touchableGetHitSlop();S&&(R+=S.left||0,l+=S.top||0,h+=S.right||0,_+=S.bottom||0);const c=L(t.nativeEvent),u=c&&c.pageX,T=c&&c.pageY;if(this.pressInLocation){this._getDistanceBetweenPoints(u,T,this.pressInLocation.pageX,this.pressInLocation.pageY)>10&&this._cancelLongPressDelayTimeout()}if(u>o.left-R&&T>o.top-l&&u<o.left+E.width+h&&T<o.top+E.height+_){const e=this.state.touchable.touchState;this._receiveSignal(N,t);this.state.touchable.touchState===s&&e!==s&&this._cancelLongPressDelayTimeout()}else this._cancelLongPressDelayTimeout(),this._receiveSignal(p,t)},touchableHandleFocus(t){this.props.onFocus&&this.props.onFocus(t)},touchableHandleBlur(t){this.props.onBlur&&this.props.onBlur(t)},touchableHandlePress(t){const{onPress:e}=this.props;e&&e(t)},touchableHandleActivePressIn(t){const{onPressIn:e}=this.props;e&&e(t)},touchableHandleActivePressOut(t){const{onPressOut:e}=this.props;e&&e(t)},touchableHandleLongPress(t){const{onLongPress:e}=this.props;e&&e(t)},touchableGetPressRectOffset(){const{pressRetentionOffset:e}=this.props;return e||t},touchableGetHitSlop(){const{hitSlop:t}=this.props;return t},touchableGetHighlightDelayMS(){const{delayPressIn:t}=this.props;return t||0},touchableGetLongPressDelayMS(){const{delayLongPress:t}=this.props;return 0===t?0:t||500},touchableGetPressOutDelayMS(){const{delayPressOut:t}=this.props;return t||0},_remeasureMetricsOnActivation(){const t=this.state.touchable.responderID;null!=t&&(b(t)?t.measure(this._handleQueryLayout):b(this.root)&&this.root.measure(this._handleQueryLayout))},_handleQueryLayout(t,e,s,o,E,n){(t||e||s||o||E||n)&&(this.state.touchable.positionOnActivate={left:E,top:n},this.state.touchable.dimensionsOnActivate={width:s,height:o})},_handleDelay(t){this.touchableDelayTimeout=null,this._receiveSignal(u,t)},_handleLongDelay(t){this.longPressDelayTimeout=null;const e=this.state.touchable.touchState;e!==E&&e!==R||this._receiveSignal(O,t)},_receiveSignal(t,e){const s=this.state.touchable.responderID,o=this.state.touchable.touchState,E=o&&A[o][t];if(s||t!==P){if(!E)throw new Error(`Unrecognized signal \`${t}\` or state \`${o}\` for responder`);if(E===h)throw new Error(`Cannot transition from \`${o}\` with signal \`${t}\` for responder`);o!==E&&(this._performSideEffectsForTransition(o,E,t,e),this.state.touchable.touchState=E)}},_cancelLongPressDelayTimeout(){this.longPressDelayTimeout&&clearTimeout(this.longPressDelayTimeout),this.longPressDelayTimeout=null},_isHighlight:t=>t===E||t===R,_savePressInLocation(t){const e=L(t.nativeEvent),s=e&&e.pageX,o=e&&e.pageY,E=e&&e.locationX,n=e&&e.locationY;this.pressInLocation={pageX:s,pageY:o,locationX:E,locationY:n}},_getDistanceBetweenPoints(t,e,s,o){const E=t-s,n=e-o;return Math.sqrt(E*E+n*n)},_performSideEffectsForTransition(t,o,E,n){const R=this._isHighlight(t),l=this._isHighlight(o);(E===D||E===P)&&this._cancelLongPressDelayTimeout();if((t===e&&o===s||!_[t]&&_[o])&&this._remeasureMetricsOnActivation(),S[t]&&E===O&&this.touchableHandleLongPress(n),l&&!R?this._startHighlight(n):!l&&R&&this._endHighlight(n),S[t]&&E===P){const e=!!this.props.onLongPress,s=!(!c[t]||e&&this.touchableLongPressCancelsPress());(!c[t]||s)&&(l||R||(this._startHighlight(n),this._endHighlight(n)),this.touchableHandlePress(n))}this.touchableDelayTimeout&&clearTimeout(this.touchableDelayTimeout),this.touchableDelayTimeout=null},_startHighlight(t){this._savePressInLocation(t),this.touchableHandleActivePressIn(t)},_endHighlight(t){const e=this.touchableGetPressOutDelayMS();e?this.pressOutDelayTimeout=setTimeout(()=>{this.touchableHandleActivePressOut(t)},e):this.touchableHandleActivePressOut(t)}},C=Object.keys(y);var f=t=>{for(const e of C){const s=y[e];t[e]='function'==typeof s?s.bind(t):s}t.state={touchable:{touchState:void 0,responderID:null}}}},1694,[29]);
__d(function(g,r,i,a,m,e,d){"use strict";function o(o,n){throw Error(`[react-native-svg] You are trying to import a ${n} \`${o}\` that has been moved to a sub-package. Change your import from \`react-native-svg\` to \`react-native-svg/css\`.`)}Object.defineProperty(e,'__esModule',{value:!0}),e.showErrorCSS=o,e.SvgCss=function(){o('SvgCss','component')},e.SvgCssUri=function(){o('SvgCssUri','component')},e.SvgWithCss=function(){o('SvgWithCss','component')},e.SvgWithCssUri=function(){o('SvgWithCssUri','component')},e.inlineStyles=function(){o('inlineStyles','function')},e.LocalSvg=function(){o('LocalSvg','component')},e.WithLocalSvg=function(){o('WithLocalSvg','component')},e.loadLocalRawResource=function(){o('loadLocalRawResource','function')}},1695,[]);
__d(function(g,r,i,a,m,e,d){},1696,[]);