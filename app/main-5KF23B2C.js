var $s={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},js={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},$0=0,of=1,j0=2;var Dr=1,K0=2,Go=3,ji=0,qt=1,Ct=2,Ki=0,Vo=1,Ei=2,af=3,cf=4,Z0=5;var Nr=100,J0=101,Q0=102,eg=103,tg=104,ng=200,ig=201,sg=202,rg=203,lf=204,hf=205,og=206,ag=207,cg=208,lg=209,hg=210,ug=211,dg=212,fg=213,pg=214,Cl=0,Pl=1,Il=2,So=3,Ll=4,Dl=5,Nl=6,kl=7,sh=0,mg=1,gg=2,Ai=0,uf=1,df=2,ff=3,ac=4,pf=5,mf=6,gf=7,Gd="attached",yg="detached",yf=300,Ks=301,kr=302,rh=303,oh=304,cc=306,bi=1e3,oi=1001,To=1002,Kt=1003,ah=1004;var Ur=1005;var Qt=1006,Wo=1007;var Ri=1008;var Wn=1009,xf=1010,_f=1011,Xo=1012,ch=1013,Ci=1014,Qn=1015,Pi=1016,lh=1017,hh=1018,qo=1020,vf=35902,bf=35899,Mf=1021,wf=1022,ei=1023,Gi=1026,Zs=1027,uh=1028,dh=1029,Js=1030,fh=1031;var ph=1033,lc=33776,hc=33777,uc=33778,dc=33779,mh=35840,gh=35841,yh=35842,xh=35843,_h=36196,vh=37492,bh=37496,Mh=37488,wh=37489,fc=37490,Sh=37491,Th=37808,Eh=37809,Ah=37810,Rh=37811,Ch=37812,Ph=37813,Ih=37814,Lh=37815,Dh=37816,Nh=37817,kh=37818,Uh=37819,Oh=37820,Fh=37821,Bh=36492,zh=36494,Hh=36495,Gh=36283,Vh=36284,pc=36285,Wh=36286;var Sr=2300,Tr=2301,El=2302,Vd=2303,Wd=2400,Xd=2401,qd=2402,xg=2500;var Sf=0,mc=1,Yo=2,_g=3200;var gc=0,vg=1,Ii="",bt="srgb",kn="srgb-linear",Aa="linear",At="srgb";var Al=7680;var bg=519,Mg=512,wg=513,Sg=514,Xh=515,Tg=516,Eg=517,qh=518,Ag=519,Tf=35044;var Ef="300 es",vi=2e3,Eo=2001;function Kv(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Zv(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Ao(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Rg(){let n=Ao("canvas");return n.style.display="block",n}var t0={},Ro=null;function Ra(...n){let e="THREE."+n.shift();Ro?Ro("log",e,...n):console.log(e,...n)}function Cg(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function ke(...n){n=Cg(n);let e="THREE."+n.shift();if(Ro)Ro("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function je(...n){n=Cg(n);let e="THREE."+n.shift();if(Ro)Ro("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function wr(...n){let e=n.join(" ");e in t0||(t0[e]=!0,ke(...n))}function Pg(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Ig={[Cl]:Pl,[Il]:Nl,[Ll]:kl,[So]:Dl,[Pl]:Cl,[Nl]:Il,[kl]:Ll,[Dl]:So},Mi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],n0=1234567,wa=Math.PI/180,Er=180/Math.PI;function ai(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Sn[n&255]+Sn[n>>8&255]+Sn[n>>16&255]+Sn[n>>24&255]+"-"+Sn[e&255]+Sn[e>>8&255]+"-"+Sn[e>>16&15|64]+Sn[e>>24&255]+"-"+Sn[t&63|128]+Sn[t>>8&255]+"-"+Sn[t>>16&255]+Sn[t>>24&255]+Sn[i&255]+Sn[i>>8&255]+Sn[i>>16&255]+Sn[i>>24&255]).toLowerCase()}function ct(n,e,t){return Math.max(e,Math.min(t,n))}function Af(n,e){return(n%e+e)%e}function Jv(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Qv(n,e,t){return n!==e?(t-n)/(e-n):0}function Sa(n,e,t){return(1-t)*n+t*e}function eb(n,e,t,i){return Sa(n,e,1-Math.exp(-t*i))}function tb(n,e=1){return e-Math.abs(Af(n,e*2)-e)}function nb(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function ib(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function sb(n,e){return n+Math.floor(Math.random()*(e-n+1))}function rb(n,e){return n+Math.random()*(e-n)}function ob(n){return n*(.5-Math.random())}function ab(n){n!==void 0&&(n0=n);let e=n0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function cb(n){return n*wa}function lb(n){return n*Er}function hb(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function ub(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function db(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function fb(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+i)/2),h=o((e+i)/2),u=r((e-i)/2),d=o((e-i)/2),f=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*h,c*u,c*d,a*l);break;case"YZY":n.set(c*d,a*h,c*u,a*l);break;case"ZXZ":n.set(c*u,c*d,a*h,a*l);break;case"XZX":n.set(a*h,c*g,c*f,a*l);break;case"YXY":n.set(c*f,a*h,c*g,a*l);break;case"ZYZ":n.set(c*g,c*f,a*h,a*l);break;default:ke("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function _i(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Pt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var xt={DEG2RAD:wa,RAD2DEG:Er,generateUUID:ai,clamp:ct,euclideanModulo:Af,mapLinear:Jv,inverseLerp:Qv,lerp:Sa,damp:eb,pingpong:tb,smoothstep:nb,smootherstep:ib,randInt:sb,randFloat:rb,randFloatSpread:ob,seededRandom:ab,degToRad:cb,radToDeg:lb,isPowerOfTwo:hb,ceilPowerOfTwo:ub,floorPowerOfTwo:db,setQuaternionFromProperEuler:fb,normalize:Pt,denormalize:_i},oe=class n{static{n.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},wt=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3],d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(u!==x||c!==d||l!==f||h!==g){let m=c*d+l*f+h*g+u*x;m<0&&(d=-d,f=-f,g=-g,x=-x,m=-m);let p=1-a;if(m<.9995){let y=Math.acos(m),v=Math.sin(y);p=Math.sin(p*y)/v,a=Math.sin(a*y)/v,c=c*p+d*a,l=l*p+f*a,h=h*p+g*a,u=u*p+x*a}else{c=c*p+d*a,l=l*p+f*a,h=h*p+g*a,u=u*p+x*a;let y=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=y,l*=y,h*=y,u*=y}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-a*f,e[t+2]=l*g+h*f+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),u=a(r/2),d=c(i/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:ke("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(i>a&&i>u){let f=2*Math.sqrt(1+i-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-i-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-i-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ct(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-i*l,this._z=r*h+o*l+i*c-s*a,this._w=o*h-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class n{static{n.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(i0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(i0.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+c*l+o*u-a*h,this.y=i+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return pd.copy(this).projectOnVector(e),this.sub(pd)}reflect(e){return this.sub(pd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},pd=new I,i0=new wt,nt=class n{static{n.prototype.isMatrix3=!0}constructor(e,t,i,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],x=s[0],m=s[3],p=s[6],y=s[1],v=s[4],_=s[7],w=s[2],M=s[5],R=s[8];return r[0]=o*x+a*y+c*w,r[3]=o*m+a*v+c*M,r[6]=o*p+a*_+c*R,r[1]=l*x+h*y+u*w,r[4]=l*m+h*v+u*M,r[7]=l*p+h*_+u*R,r[2]=d*x+f*y+g*w,r[5]=d*m+f*v+g*M,r[8]=d*p+f*_+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-i*r*h+i*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=t*u+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(s*l-h*i)*x,e[2]=(a*i-s*o)*x,e[3]=d*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(i*c-l*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return wr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(md.makeScale(e,t)),this}rotate(e){return wr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(md.makeRotation(-e)),this}translate(e,t){return wr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(md.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},md=new nt,s0=new nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),r0=new nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pb(){let n={enabled:!0,workingColorSpace:kn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===At&&(s.r=fs(s.r),s.g=fs(s.g),s.b=fs(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===At&&(s.r=Mo(s.r),s.g=Mo(s.g),s.b=Mo(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ii?Aa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return wr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return wr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[kn]:{primaries:e,whitePoint:i,transfer:Aa,toXYZ:s0,fromXYZ:r0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:bt},outputColorSpaceConfig:{drawingBufferColorSpace:bt}},[bt]:{primaries:e,whitePoint:i,transfer:At,toXYZ:s0,fromXYZ:r0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:bt}}}),n}var ut=pb();function fs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Mo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var io,Ul=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{io===void 0&&(io=Ao("canvas")),io.width=e.width,io.height=e.height;let s=io.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=io}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ao("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=fs(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(fs(t[i]/255)*255):t[i]=fs(t[i]);return{data:t,width:e.width,height:e.height}}else return ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},mb=0,Co=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:mb++}),this.uuid=ai(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(gd(s[o].image)):r.push(gd(s[o]))}else r=gd(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function gd(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ul.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(ke("Texture: Unable to serialize Texture."),{})}var gb=0,yd=new I,un=class n extends Mi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=oi,s=oi,r=Qt,o=Ri,a=ei,c=Wn,l=n.DEFAULT_ANISOTROPY,h=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gb++}),this.uuid=ai(),this.name="",this.source=new Co(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(yd).x}get height(){return this.source.getSize(yd).y}get depth(){return this.source.getSize(yd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ke(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bi:e.x=e.x-Math.floor(e.x);break;case oi:e.x=e.x<0?0:1;break;case To:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bi:e.y=e.y-Math.floor(e.y);break;case oi:e.y=e.y<0?0:1;break;case To:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=yf;un.DEFAULT_ANISOTROPY=1;var It=class n{static{n.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(l+1)/2,_=(f+1)/2,w=(p+1)/2,M=(h+d)/4,R=(u+x)/4,b=(g+m)/4;return v>_&&v>w?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=M/i,r=R/i):_>w?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=M/s,r=b/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=R/r,s=b/r),this.set(i,s,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-x)/y,this.z=(d-h)/y,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this.w=ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this.w=ct(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ol=class extends Mi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},r=new un(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Co(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Hn=class extends Ol{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Ca=class extends un{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Fl=class extends un{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Ye=class n{static{n.prototype.isMatrix4=!0}constructor(e,t,i,s,r,o,a,c,l,h,u,d,f,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,h,u,d,f,g,x,m)}set(e,t,i,s,r,o,a,c,l,h,u,d,f,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/so.setFromMatrixColumn(e,0).length(),r=1/so.setFromMatrixColumn(e,1).length(),o=1/so.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,g=a*h,x=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-x*l,t[9]=-a*c,t[2]=x-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,g=l*h,x=l*u;t[0]=d+x*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=x+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,g=l*h,x=l*u;t[0]=d-x*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=x-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*h,f=o*u,g=a*h,x=a*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+x,t[1]=c*u,t[5]=x*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,f=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=x-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-x*u}else if(e.order==="XZY"){let d=o*c,f=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+x,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yb,e,xb)}lookAt(e,t,i){let s=this.elements;return jn.subVectors(e,t),jn.lengthSq()===0&&(jn.z=1),jn.normalize(),Us.crossVectors(i,jn),Us.lengthSq()===0&&(Math.abs(i.z)===1?jn.x+=1e-4:jn.z+=1e-4,jn.normalize(),Us.crossVectors(i,jn)),Us.normalize(),Kc.crossVectors(jn,Us),s[0]=Us.x,s[4]=Kc.x,s[8]=jn.x,s[1]=Us.y,s[5]=Kc.y,s[9]=jn.y,s[2]=Us.z,s[6]=Kc.z,s[10]=jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],x=i[6],m=i[10],p=i[14],y=i[3],v=i[7],_=i[11],w=i[15],M=s[0],R=s[4],b=s[8],T=s[12],P=s[1],U=s[5],O=s[9],E=s[13],C=s[2],D=s[6],F=s[10],V=s[14],X=s[3],N=s[7],k=s[11],q=s[15];return r[0]=o*M+a*P+c*C+l*X,r[4]=o*R+a*U+c*D+l*N,r[8]=o*b+a*O+c*F+l*k,r[12]=o*T+a*E+c*V+l*q,r[1]=h*M+u*P+d*C+f*X,r[5]=h*R+u*U+d*D+f*N,r[9]=h*b+u*O+d*F+f*k,r[13]=h*T+u*E+d*V+f*q,r[2]=g*M+x*P+m*C+p*X,r[6]=g*R+x*U+m*D+p*N,r[10]=g*b+x*O+m*F+p*k,r[14]=g*T+x*E+m*V+p*q,r[3]=y*M+v*P+_*C+w*X,r[7]=y*R+v*U+_*D+w*N,r[11]=y*b+v*O+_*F+w*k,r[15]=y*T+v*E+_*V+w*q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15],y=c*f-l*d,v=a*f-l*u,_=a*d-c*u,w=o*f-l*h,M=o*d-c*h,R=o*u-a*h;return t*(x*y-m*v+p*_)-i*(g*y-m*w+p*M)+s*(g*v-x*w+p*R)-r*(g*_-x*M+m*R)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],h=e[10];return t*(o*h-a*l)-i*(r*h-a*c)+s*(r*l-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],y=t*a-i*o,v=t*c-s*o,_=t*l-r*o,w=i*c-s*a,M=i*l-r*a,R=s*l-r*c,b=h*x-u*g,T=h*m-d*g,P=h*p-f*g,U=u*m-d*x,O=u*p-f*x,E=d*p-f*m,C=y*E-v*O+_*U+w*P-M*T+R*b;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/C;return e[0]=(a*E-c*O+l*U)*D,e[1]=(s*O-i*E-r*U)*D,e[2]=(x*R-m*M+p*w)*D,e[3]=(d*M-u*R-f*w)*D,e[4]=(c*P-o*E-l*T)*D,e[5]=(t*E-s*P+r*T)*D,e[6]=(m*_-g*R-p*v)*D,e[7]=(h*R-d*_+f*v)*D,e[8]=(o*O-a*P+l*b)*D,e[9]=(i*P-t*O-r*b)*D,e[10]=(g*M-x*_+p*y)*D,e[11]=(u*_-h*M-f*y)*D,e[12]=(a*T-o*U-c*b)*D,e[13]=(t*U-i*T+s*b)*D,e[14]=(x*v-g*w-m*y)*D,e[15]=(h*w-u*v+d*y)*D,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,x=o*h,m=o*u,p=a*u,y=c*l,v=c*h,_=c*u,w=i.x,M=i.y,R=i.z;return s[0]=(1-(x+p))*w,s[1]=(f+_)*w,s[2]=(g-v)*w,s[3]=0,s[4]=(f-_)*M,s[5]=(1-(d+p))*M,s[6]=(m+y)*M,s[7]=0,s[8]=(g+v)*R,s[9]=(m-y)*R,s[10]=(1-(d+x))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=so.set(s[0],s[1],s[2]).length(),a=so.set(s[4],s[5],s[6]).length(),c=so.set(s[8],s[9],s[10]).length();r<0&&(o=-o),gi.copy(this);let l=1/o,h=1/a,u=1/c;return gi.elements[0]*=l,gi.elements[1]*=l,gi.elements[2]*=l,gi.elements[4]*=h,gi.elements[5]*=h,gi.elements[6]*=h,gi.elements[8]*=u,gi.elements[9]*=u,gi.elements[10]*=u,t.setFromRotationMatrix(gi),i.x=o,i.y=a,i.z=c,this}makePerspective(e,t,i,s,r,o,a=vi,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s),g,x;if(c)g=r/(o-r),x=o*r/(o-r);else if(a===vi)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Eo)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=vi,c=!1){let l=this.elements,h=2/(t-e),u=2/(i-s),d=-(t+e)/(t-e),f=-(i+s)/(i-s),g,x;if(c)g=1/(o-r),x=o/(o-r);else if(a===vi)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===Eo)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},so=new I,gi=new Ye,yb=new I(0,0,0),xb=new I(1,1,1),Us=new I,Kc=new I,jn=new I,o0=new Ye,a0=new wt,on=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ct(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ct(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ct(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return o0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(o0,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return a0.setFromEuler(this),this.setFromQuaternion(a0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};on.DEFAULT_ORDER="XYZ";var Po=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},_b=0,c0=new I,ro=new wt,os=new Ye,Zc=new I,ua=new I,vb=new I,bb=new wt,l0=new I(1,0,0),h0=new I(0,1,0),u0=new I(0,0,1),d0={type:"added"},Mb={type:"removed"},oo={type:"childadded",child:null},xd={type:"childremoved",child:null},Bt=class n extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_b++}),this.uuid=ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new I,t=new on,i=new wt,s=new I(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ye},normalMatrix:{value:new nt}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Po,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ro.setFromAxisAngle(e,t),this.quaternion.multiply(ro),this}rotateOnWorldAxis(e,t){return ro.setFromAxisAngle(e,t),this.quaternion.premultiply(ro),this}rotateX(e){return this.rotateOnAxis(l0,e)}rotateY(e){return this.rotateOnAxis(h0,e)}rotateZ(e){return this.rotateOnAxis(u0,e)}translateOnAxis(e,t){return c0.copy(e).applyQuaternion(this.quaternion),this.position.add(c0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(l0,e)}translateY(e){return this.translateOnAxis(h0,e)}translateZ(e){return this.translateOnAxis(u0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(os.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Zc.copy(e):Zc.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),ua.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?os.lookAt(ua,Zc,this.up):os.lookAt(Zc,ua,this.up),this.quaternion.setFromRotationMatrix(os),s&&(os.extractRotation(s.matrixWorld),ro.setFromRotationMatrix(os),this.quaternion.premultiply(ro.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(d0),oo.child=e,this.dispatchEvent(oo),oo.child=null):je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Mb),xd.child=e,this.dispatchEvent(xd),xd.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),os.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),os.multiply(e.parent.matrixWorld)),e.applyMatrix4(os),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(d0),oo.child=e,this.dispatchEvent(oo),oo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ua,e,vb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ua,bb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Bt.DEFAULT_UP=new I(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var he=class extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}},wb={type:"move"},Io=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new he,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new he,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new he,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,i),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(wb)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new he;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Lg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Os={h:0,s:0,l:0},Jc={h:0,s:0,l:0};function _d(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var pe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=ut.workingColorSpace){return this.r=e,this.g=t,this.b=i,ut.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=ut.workingColorSpace){if(e=Af(e,1),t=ct(t,0,1),i=ct(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=_d(o,r,e+1/3),this.g=_d(o,r,e),this.b=_d(o,r,e-1/3)}return ut.colorSpaceToWorking(this,s),this}setStyle(e,t=bt){function i(r){r!==void 0&&parseFloat(r)<1&&ke("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ke("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bt){let i=Lg[e.toLowerCase()];return i!==void 0?this.setHex(i,t):ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fs(e.r),this.g=fs(e.g),this.b=fs(e.b),this}copyLinearToSRGB(e){return this.r=Mo(e.r),this.g=Mo(e.g),this.b=Mo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bt){return ut.workingToColorSpace(Tn.copy(this),e),Math.round(ct(Tn.r*255,0,255))*65536+Math.round(ct(Tn.g*255,0,255))*256+Math.round(ct(Tn.b*255,0,255))}getHexString(e=bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.workingToColorSpace(Tn.copy(this),t);let i=Tn.r,s=Tn.g,r=Tn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=ut.workingColorSpace){return ut.workingToColorSpace(Tn.copy(this),t),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=bt){ut.workingToColorSpace(Tn.copy(this),e);let t=Tn.r,i=Tn.g,s=Tn.b;return e!==bt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Os),this.setHSL(Os.h+e,Os.s+t,Os.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Os),e.getHSL(Jc);let i=Sa(Os.h,Jc.h,t),s=Sa(Os.s,Jc.s,t),r=Sa(Os.l,Jc.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Tn=new pe;pe.NAMES=Lg;var Pa=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new pe(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ps=class extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new on,this.environmentIntensity=1,this.environmentRotation=new on,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},yi=new I,as=new I,vd=new I,cs=new I,ao=new I,co=new I,f0=new I,bd=new I,Md=new I,wd=new I,Sd=new It,Td=new It,Ed=new It,ds=class n{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),yi.subVectors(e,t),s.cross(yi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){yi.subVectors(s,t),as.subVectors(i,t),vd.subVectors(e,t);let o=yi.dot(yi),a=yi.dot(as),c=yi.dot(vd),l=as.dot(as),h=as.dot(vd),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,cs)===null?!1:cs.x>=0&&cs.y>=0&&cs.x+cs.y<=1}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,cs)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,cs.x),c.addScaledVector(o,cs.y),c.addScaledVector(a,cs.z),c)}static getInterpolatedAttribute(e,t,i,s,r,o){return Sd.setScalar(0),Td.setScalar(0),Ed.setScalar(0),Sd.fromBufferAttribute(e,t),Td.fromBufferAttribute(e,i),Ed.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Sd,r.x),o.addScaledVector(Td,r.y),o.addScaledVector(Ed,r.z),o}static isFrontFacing(e,t,i,s){return yi.subVectors(i,t),as.subVectors(e,t),yi.cross(as).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yi.subVectors(this.c,this.b),as.subVectors(this.a,this.b),yi.cross(as).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;ao.subVectors(s,i),co.subVectors(r,i),bd.subVectors(e,i);let c=ao.dot(bd),l=co.dot(bd);if(c<=0&&l<=0)return t.copy(i);Md.subVectors(e,s);let h=ao.dot(Md),u=co.dot(Md);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(i).addScaledVector(ao,o);wd.subVectors(e,r);let f=ao.dot(wd),g=co.dot(wd);if(g>=0&&f<=g)return t.copy(r);let x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(co,a);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return f0.subVectors(r,s),a=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(f0,a);let p=1/(m+x+d);return o=x*p,a=d*p,t.copy(i).addScaledVector(ao,o).addScaledVector(co,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Un=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(xi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(xi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=xi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,xi):xi.fromBufferAttribute(r,o),xi.applyMatrix4(e.matrixWorld),this.expandByPoint(xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Qc.copy(i.boundingBox)),Qc.applyMatrix4(e.matrixWorld),this.union(Qc)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xi),xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(da),el.subVectors(this.max,da),lo.subVectors(e.a,da),ho.subVectors(e.b,da),uo.subVectors(e.c,da),Fs.subVectors(ho,lo),Bs.subVectors(uo,ho),_r.subVectors(lo,uo);let t=[0,-Fs.z,Fs.y,0,-Bs.z,Bs.y,0,-_r.z,_r.y,Fs.z,0,-Fs.x,Bs.z,0,-Bs.x,_r.z,0,-_r.x,-Fs.y,Fs.x,0,-Bs.y,Bs.x,0,-_r.y,_r.x,0];return!Ad(t,lo,ho,uo,el)||(t=[1,0,0,0,1,0,0,0,1],!Ad(t,lo,ho,uo,el))?!1:(tl.crossVectors(Fs,Bs),t=[tl.x,tl.y,tl.z],Ad(t,lo,ho,uo,el))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ls[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ls[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ls[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ls[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ls[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ls[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ls[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ls[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ls),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ls=[new I,new I,new I,new I,new I,new I,new I,new I],xi=new I,Qc=new Un,lo=new I,ho=new I,uo=new I,Fs=new I,Bs=new I,_r=new I,da=new I,el=new I,tl=new I,vr=new I;function Ad(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){vr.fromArray(n,r);let a=s.x*Math.abs(vr.x)+s.y*Math.abs(vr.y)+s.z*Math.abs(vr.z),c=e.dot(vr),l=t.dot(vr),h=i.dot(vr);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var sn=new I,nl=new oe,Sb=0,Xt=class extends Mi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Sb++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Tf,this.updateRanges=[],this.gpuType=Qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)nl.fromBufferAttribute(this,t),nl.applyMatrix3(e),this.setXY(t,nl.x,nl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix3(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=_i(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Pt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_i(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_i(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_i(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_i(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array),s=Pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array),s=Pt(s,this.array),r=Pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Ia=class extends Xt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var La=class extends Xt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var ot=class extends Xt{constructor(e,t,i){super(new Float32Array(e),t,i)}},Tb=new Un,fa=new I,Rd=new I,Gn=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Tb.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fa.subVectors(e,this.center);let t=fa.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(fa,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fa.copy(e.center).add(Rd)),this.expandByPoint(fa.copy(e.center).sub(Rd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Eb=0,ri=new Ye,Cd=new Bt,fo=new I,Kn=new Un,pa=new Un,gn=new I,yt=class n extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Eb++}),this.uuid=ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kv(e)?La:Ia)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new nt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ri.makeRotationFromQuaternion(e),this.applyMatrix4(ri),this}rotateX(e){return ri.makeRotationX(e),this.applyMatrix4(ri),this}rotateY(e){return ri.makeRotationY(e),this.applyMatrix4(ri),this}rotateZ(e){return ri.makeRotationZ(e),this.applyMatrix4(ri),this}translate(e,t,i){return ri.makeTranslation(e,t,i),this.applyMatrix4(ri),this}scale(e,t,i){return ri.makeScale(e,t,i),this.applyMatrix4(ri),this}lookAt(e){return Cd.lookAt(e),Cd.updateMatrix(),this.applyMatrix4(Cd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fo).negate(),this.translate(fo.x,fo.y,fo.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ot(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Un);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Kn.setFromBufferAttribute(r),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let i=this.boundingSphere.center;if(Kn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];pa.setFromBufferAttribute(a),this.morphTargetsRelative?(gn.addVectors(Kn.min,pa.min),Kn.expandByPoint(gn),gn.addVectors(Kn.max,pa.max),Kn.expandByPoint(gn)):(Kn.expandByPoint(pa.min),Kn.expandByPoint(pa.max))}Kn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)gn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(gn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)gn.fromBufferAttribute(a,l),c&&(fo.fromBufferAttribute(e,l),gn.add(fo)),s=Math.max(s,i.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Xt(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let b=0;b<i.count;b++)a[b]=new I,c[b]=new I;let l=new I,h=new I,u=new I,d=new oe,f=new oe,g=new oe,x=new I,m=new I;function p(b,T,P){l.fromBufferAttribute(i,b),h.fromBufferAttribute(i,T),u.fromBufferAttribute(i,P),d.fromBufferAttribute(r,b),f.fromBufferAttribute(r,T),g.fromBufferAttribute(r,P),h.sub(l),u.sub(l),f.sub(d),g.sub(d);let U=1/(f.x*g.y-g.x*f.y);isFinite(U)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(U),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(U),a[b].add(x),a[T].add(x),a[P].add(x),c[b].add(m),c[T].add(m),c[P].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let b=0,T=y.length;b<T;++b){let P=y[b],U=P.start,O=P.count;for(let E=U,C=U+O;E<C;E+=3)p(e.getX(E+0),e.getX(E+1),e.getX(E+2))}let v=new I,_=new I,w=new I,M=new I;function R(b){w.fromBufferAttribute(s,b),M.copy(w);let T=a[b];v.copy(T),v.sub(w.multiplyScalar(w.dot(T))).normalize(),_.crossVectors(M,T);let U=_.dot(c[b])<0?-1:1;o.setXYZW(b,v.x,v.y,v.z,U)}for(let b=0,T=y.length;b<T;++b){let P=y[b],U=P.start,O=P.count;for(let E=U,C=U+O;E<C;E+=3)R(e.getX(E+0)),R(e.getX(E+1)),R(e.getX(E+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Xt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new I,r=new I,o=new I,a=new I,c=new I,l=new I,h=new I,u=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,m),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)gn.fromBufferAttribute(e,t),gn.normalize(),e.setXYZ(t,gn.x,gn.y,gn.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new Xt(d,h,u)}if(this.index===null)return ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,i);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,i);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ar=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Tf,this.updateRanges=[],this.version=0,this.uuid=ai()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Nn=new I,Gs=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Nn.fromBufferAttribute(this,t),Nn.applyMatrix4(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Nn.fromBufferAttribute(this,t),Nn.applyNormalMatrix(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Nn.fromBufferAttribute(this,t),Nn.transformDirection(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=_i(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Pt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=_i(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=_i(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=_i(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=_i(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array),s=Pt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),i=Pt(i,this.array),s=Pt(s,this.array),r=Pt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ra("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Xt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ra("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Pd=new I,Ab=new I,Rb=new nt,Zn=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Pd.subVectors(i,t).cross(Ab.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(Pd),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Rb.getNormalMatrix(e),s=this.coplanarPoint(Pd).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Cb=0,En=class extends Mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cb++}),this.uuid=ai(),this.name="",this.type="Material",this.blending=Vo,this.side=ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lf,this.blendDst=hf,this.blendEquation=Nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pe(0,0,0),this.blendAlpha=0,this.depthFunc=So,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Al,this.stencilZFail=Al,this.stencilZPass=Al,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){ke(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new pe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Zn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new oe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new oe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},An=class extends En{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new pe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},po,ma=new I,mo=new I,go=new I,yo=new oe,ga=new oe,Dg=new Ye,il=new I,ya=new I,sl=new I,p0=new oe,Id=new oe,m0=new oe,On=class extends Bt{constructor(e=new An){if(super(),this.isSprite=!0,this.type="Sprite",po===void 0){po=new yt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ar(t,5);po.setIndex([0,1,2,0,2,3]),po.setAttribute("position",new Gs(i,3,0,!1)),po.setAttribute("uv",new Gs(i,2,3,!1))}this.geometry=po,this.material=e,this.center=new oe(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&je('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),mo.setFromMatrixScale(this.matrixWorld),Dg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),go.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&mo.multiplyScalar(-go.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;rl(il.set(-.5,-.5,0),go,o,mo,s,r),rl(ya.set(.5,-.5,0),go,o,mo,s,r),rl(sl.set(.5,.5,0),go,o,mo,s,r),p0.set(0,0),Id.set(1,0),m0.set(1,1);let a=e.ray.intersectTriangle(il,ya,sl,!1,ma);if(a===null&&(rl(ya.set(-.5,.5,0),go,o,mo,s,r),Id.set(0,1),a=e.ray.intersectTriangle(il,sl,ya,!1,ma),a===null))return;let c=e.ray.origin.distanceTo(ma);c<e.near||c>e.far||t.push({distance:c,point:ma.clone(),uv:ds.getInterpolation(ma,il,ya,sl,p0,Id,m0,new oe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function rl(n,e,t,i,s,r){yo.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(ga.x=r*yo.x-s*yo.y,ga.y=s*yo.x+r*yo.y):ga.copy(yo),n.copy(e),n.x+=ga.x,n.y+=ga.y,n.applyMatrix4(Dg)}var hs=new I,Ld=new I,ol=new I,al=new I,Vi=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=hs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hs.copy(this.origin).addScaledVector(this.direction,t),hs.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ld.copy(e).add(t).multiplyScalar(.5),ol.copy(t).sub(e).normalize(),al.copy(this.origin).sub(Ld);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ol),a=al.dot(this.direction),c=-al.dot(ol),l=al.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ld).addScaledVector(ol,d),f}intersectSphere(e,t){if(e.radius<0)return null;hs.subVectors(e.center,this.origin);let i=hs.dot(this.direction),s=hs.dot(hs)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,hs)!==null}intersectTriangle(e,t,i,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,h=a.z,u=e.x-o.x,d=e.y-o.y,f=e.z-o.z,g=t.x-o.x,x=t.y-o.y,m=t.z-o.z,p=i.x-o.x,y=i.y-o.y,v=i.z-o.z,_=Math.abs(c),w=Math.abs(l),M=Math.abs(h),R,b,T,P,U,O,E,C,D,F,V,X;if(_>=w&&_>=M?(T=c,O=u,D=g,X=p,c>=0?(R=l,b=h,P=d,U=f,E=x,C=m,F=y,V=v):(R=h,b=l,P=f,U=d,E=m,C=x,F=v,V=y)):w>=M?(T=l,O=d,D=x,X=y,l>=0?(R=h,b=c,P=f,U=u,E=m,C=g,F=v,V=p):(R=c,b=h,P=u,U=f,E=g,C=m,F=p,V=v)):(T=h,O=f,D=m,X=v,h>=0?(R=c,b=l,P=u,U=d,E=g,C=x,F=p,V=y):(R=l,b=c,P=d,U=u,E=x,C=g,F=y,V=p)),T===0)return null;let N=R/T,k=b/T,q=1/T,le=P-N*O,ue=U-k*O,Ae=E-N*D,We=C-k*D,qe=F-N*X,J=V-k*X,ne=qe*We-J*Ae,be=le*J-ue*qe,Fe=Ae*ue-We*le;if(s){if(ne<0||be<0||Fe<0)return null}else if((ne<0||be<0||Fe<0)&&(ne>0||be>0||Fe>0))return null;let G=ne+be+Fe;if(G===0)return null;let re=q*(ne*O+be*D+Fe*X);return(G>0?re<0:re>0)?null:this.at(re/G,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Rt=class extends En{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=sh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},g0=new Ye,br=new Vi,cl=new Gn,y0=new I,ll=new I,hl=new I,ul=new I,Dd=new I,dl=new I,x0=new I,fl=new I,ce=class extends Bt{constructor(e=new yt,t=new Rt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){dl.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Dd.fromBufferAttribute(u,e),o?dl.addScaledVector(Dd,h):dl.addScaledVector(Dd.sub(t),h))}t.add(dl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),cl.copy(i.boundingSphere),cl.applyMatrix4(r),br.copy(e.ray).recast(e.near),!(cl.containsPoint(br.origin)===!1&&(br.intersectSphere(cl,y0)===null||br.origin.distanceToSquared(y0)>(e.far-e.near)**2))&&(g0.copy(r).invert(),br.copy(e.ray).applyMatrix4(g0),!(i.boundingBox!==null&&br.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,br)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),v=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let _=y,w=v;_<w;_+=3){let M=a.getX(_),R=a.getX(_+1),b=a.getX(_+2);s=pl(this,p,e,i,l,h,u,M,R,b),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let y=a.getX(m),v=a.getX(m+1),_=a.getX(m+2);s=pl(this,o,e,i,l,h,u,y,v,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),v=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let _=y,w=v;_<w;_+=3){let M=_,R=_+1,b=_+2;s=pl(this,p,e,i,l,h,u,M,R,b),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let y=m,v=m+1,_=m+2;s=pl(this,o,e,i,l,h,u,y,v,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Pb(n,e,t,i,s,r,o,a){let c;if(e.side===qt?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===ji,a),c===null)return null;fl.copy(a),fl.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(fl);return l<t.near||l>t.far?null:{distance:l,point:fl.clone(),object:n}}function pl(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,ll),n.getVertexPosition(c,hl),n.getVertexPosition(l,ul);let h=Pb(n,e,t,i,ll,hl,ul,x0);if(h){let u=new I;ds.getBarycoord(x0,ll,hl,ul,u),s&&(h.uv=ds.getInterpolatedAttribute(s,a,c,l,u,new oe)),r&&(h.uv1=ds.getInterpolatedAttribute(r,a,c,l,u,new oe)),o&&(h.normal=ds.getInterpolatedAttribute(o,a,c,l,u,new I),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new I,materialIndex:0};ds.getNormal(ll,hl,ul,d.normal),h.face=d,h.barycoord=u}return h}var xa=new It,_0=new It,v0=new It,Ib=new It,b0=new Ye,ml=new I,Nd=new Gn,M0=new Ye,kd=new Vi,Da=class extends ce{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Gd,this.bindMatrix=new Ye,this.bindMatrixInverse=new Ye,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Un),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ml),this.boundingBox.expandByPoint(ml)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Gn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ml),this.boundingSphere.expandByPoint(ml)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Nd.copy(this.boundingSphere),Nd.applyMatrix4(s),e.ray.intersectsSphere(Nd)!==!1&&(M0.copy(s).invert(),kd.copy(e.ray).applyMatrix4(M0),!(this.boundingBox!==null&&kd.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,kd)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new It,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Gd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===yg?this.bindMatrixInverse.copy(this.bindMatrix).invert():ke("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,s=this.geometry;_0.fromBufferAttribute(s.attributes.skinIndex,e),v0.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(xa.copy(t),t.set(0,0,0,0)):(xa.set(...t,1),t.set(0,0,0)),xa.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=v0.getComponent(r);if(o!==0){let a=_0.getComponent(r);b0.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(Ib.copy(xa).applyMatrix4(b0),o)}}return t.isVector4&&(t.w=xa.w),t.applyMatrix4(this.bindMatrixInverse)}},Lo=class extends Bt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Do=class extends un{constructor(e=null,t=1,i=1,s,r,o,a,c,l=Kt,h=Kt,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},w0=new Ye,Lb=new Ye,Na=class n{constructor(e=[],t=[]){this.uuid=ai(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){ke("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new Ye)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new Ye;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Lb;w0.multiplyMatrices(a,t[r]),w0.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new Do(t,e,e,ei,Qn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],o=t[r];o===void 0&&(ke("Skeleton: No bone found with UUID:",r),o=new Lo),this.bones.push(o),this.boneInverses.push(new Ye().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=i[s];e.boneInverses.push(a.toArray())}return e}},ms=class extends Xt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},xo=new Ye,S0=new Ye,gl=[],T0=new Un,Db=new Ye,_a=new ce,va=new Gn,wi=class extends ce{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ms(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Db)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Un),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,xo),T0.copy(e.boundingBox).applyMatrix4(xo),this.boundingBox.union(T0)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,xo),va.copy(e.boundingSphere).applyMatrix4(xo),this.boundingSphere.union(va)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(_a.geometry=this.geometry,_a.material=this.material,_a.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),va.copy(this.boundingSphere),va.applyMatrix4(i),e.ray.intersectsSphere(va)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,xo),S0.multiplyMatrices(i,xo),_a.matrixWorld=S0,_a.raycast(e,gl);for(let o=0,a=gl.length;o<a;o++){let c=gl[o];c.instanceId=r,c.object=this,t.push(c)}gl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ms(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Do(new Float32Array(s*this.count),s,this.count,uh,Qn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<i.length;l++)o+=i[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=a,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Mr=new Gn,Nb=new oe(.5,.5),yl=new I,No=class{constructor(e=new Zn,t=new Zn,i=new Zn,s=new Zn,r=new Zn,o=new Zn){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=vi,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],x=r[9],m=r[10],p=r[11],y=r[12],v=r[13],_=r[14],w=r[15];if(s[0].setComponents(l-o,f-h,p-g,w-y).normalize(),s[1].setComponents(l+o,f+h,p+g,w+y).normalize(),s[2].setComponents(l+a,f+u,p+x,w+v).normalize(),s[3].setComponents(l-a,f-u,p-x,w-v).normalize(),i)s[4].setComponents(c,d,m,_).normalize(),s[5].setComponents(l-c,f-d,p-m,w-_).normalize();else if(s[4].setComponents(l-c,f-d,p-m,w-_).normalize(),t===vi)s[5].setComponents(l+c,f+d,p+m,w+_).normalize();else if(t===Eo)s[5].setComponents(c,d,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Mr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mr)}intersectsSprite(e){Mr.center.set(0,0,0);let t=Nb.distanceTo(e.center);return Mr.radius=.7071067811865476+t,Mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mr)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(yl.x=s.normal.x>0?e.max.x:e.min.x,yl.y=s.normal.y>0?e.max.y:e.min.y,yl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(yl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Wi=class extends En{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Bl=new I,zl=new I,E0=new Ye,ba=new Vi,xl=new Gn,Ud=new I,A0=new I,gs=class extends Bt{constructor(e=new yt,t=new Wi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Bl.fromBufferAttribute(t,s-1),zl.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Bl.distanceTo(zl);e.setAttribute("lineDistance",new ot(i,1))}else ke("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),xl.copy(i.boundingSphere),xl.applyMatrix4(s),xl.radius+=r,e.ray.intersectsSphere(xl)===!1)return;E0.copy(s).invert(),ba.copy(e.ray).applyMatrix4(E0);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=l){let p=h.getX(x),y=h.getX(x+1),v=_l(this,e,ba,c,p,y,x);v&&t.push(v)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(f),p=_l(this,e,ba,c,x,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=l){let p=_l(this,e,ba,c,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){let x=_l(this,e,ba,c,g-1,f,g-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function _l(n,e,t,i,s,r,o){let a=n.geometry.attributes.position;if(Bl.fromBufferAttribute(a,s),zl.fromBufferAttribute(a,r),t.distanceSqToSegment(Bl,zl,Ud,A0)>i)return;Ud.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(Ud);if(!(l<e.near||l>e.far))return{distance:l,point:A0.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var R0=new I,C0=new I,ys=class extends gs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)R0.fromBufferAttribute(t,s),C0.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+R0.distanceTo(C0);e.setAttribute("lineDistance",new ot(i,1))}else ke("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ka=class extends gs{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Xi=class extends En{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},P0=new Ye,Yd=new Vi,vl=new Gn,bl=new I,xs=class extends Bt{constructor(e=new yt,t=new Xi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),vl.copy(i.boundingSphere),vl.applyMatrix4(s),vl.radius+=r,e.ray.intersectsSphere(vl)===!1)return;P0.copy(s).invert(),Yd.copy(e.ray).applyMatrix4(P0);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,u=i.attributes.position;if(l!==null){let d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,x=f;g<x;g++){let m=l.getX(g);bl.fromBufferAttribute(u,m),I0(bl,m,c,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,x=f;g<x;g++)bl.fromBufferAttribute(u,g),I0(bl,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function I0(n,e,t,i,s,r,o){let a=Yd.distanceSqToPoint(n);if(a<t){let c=new I;Yd.closestPointToPoint(n,c),c.applyMatrix4(i);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Ua=class extends un{constructor(e=[],t=Ks,i,s,r,o,a,c,l,h){super(e,t,i,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Zt=class extends un{constructor(e,t,i,s,r,o,a,c,l){super(e,t,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Vs=class extends un{constructor(e,t,i=Ci,s,r,o,a=Kt,c=Kt,l,h=Gi,u=1){if(h!==Gi&&h!==Zs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,o,a,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Co(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Hl=class extends Vs{constructor(e,t=Ci,i=Ks,s,r,o=Kt,a=Kt,c,l=Gi){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,s,r,o,a,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Oa=class extends un{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Vt=class n extends yt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new ot(l,3)),this.setAttribute("normal",new ot(h,3)),this.setAttribute("uv",new ot(u,2));function g(x,m,p,y,v,_,w,M,R,b,T){let P=_/R,U=w/b,O=_/2,E=w/2,C=M/2,D=R+1,F=b+1,V=0,X=0,N=new I;for(let k=0;k<F;k++){let q=k*U-E;for(let le=0;le<D;le++){let ue=le*P-O;N[x]=ue*y,N[m]=q*v,N[p]=C,l.push(N.x,N.y,N.z),N[x]=0,N[m]=0,N[p]=M>0?1:-1,h.push(N.x,N.y,N.z),u.push(le/R),u.push(1-k/b),V+=1}}for(let k=0;k<b;k++)for(let q=0;q<R;q++){let le=d+q+D*k,ue=d+q+D*(k+1),Ae=d+(q+1)+D*(k+1),We=d+(q+1)+D*k;c.push(le,ue,We),c.push(ue,Ae,We),X+=6}a.addGroup(f,X,T),f+=X,d+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Si=class n extends yt{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],c=[],l=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,g=i*2+r,x=s+1,m=new I,p=new I;for(let y=0;y<=g;y++){let v=0,_=0,w=0,M=0;if(y<=i){let T=y/i,P=T*Math.PI/2;_=-h-e*Math.cos(P),w=e*Math.sin(P),M=-e*Math.cos(P),v=T*u}else if(y<=i+r){let T=(y-i)/r;_=-h+T*t,w=e,M=0,v=u+T*d}else{let T=(y-i-r)/i,P=T*Math.PI/2;_=h+e*Math.sin(P),w=e*Math.cos(P),M=e*Math.sin(P),v=u+d+T*u}let R=Math.max(0,Math.min(1,v/f)),b=0;y===0?b=.5/s:y===g&&(b=-.5/s);for(let T=0;T<=s;T++){let P=T/s,U=P*Math.PI*2,O=Math.sin(U),E=Math.cos(U);p.x=-w*E,p.y=_,p.z=w*O,a.push(p.x,p.y,p.z),m.set(-w*E,M,w*O),m.normalize(),c.push(m.x,m.y,m.z),l.push(P+b,R)}if(y>0){let T=(y-1)*x;for(let P=0;P<s;P++){let U=T+P,O=T+P+1,E=y*x+P,C=y*x+P+1;o.push(U,O,E),o.push(O,C,E)}}}this.setIndex(o),this.setAttribute("position",new ot(a,3)),this.setAttribute("normal",new ot(c,3)),this.setAttribute("uv",new ot(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Rr=class n extends yt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new I,h=new oe;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=i+u/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ot(o,3)),this.setAttribute("normal",new ot(a,3)),this.setAttribute("uv",new ot(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Rn=class n extends yt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,x=[],m=i/2,p=0;y(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new ot(u,3)),this.setAttribute("normal",new ot(d,3)),this.setAttribute("uv",new ot(f,2));function y(){let _=new I,w=new I,M=0,R=(t-e)/i;for(let b=0;b<=r;b++){let T=[],P=b/r,U=P*(t-e)+e;for(let O=0;O<=s;O++){let E=O/s,C=E*c+a,D=Math.sin(C),F=Math.cos(C);w.x=U*D,w.y=-P*i+m,w.z=U*F,u.push(w.x,w.y,w.z),_.set(D,R,F).normalize(),d.push(_.x,_.y,_.z),f.push(E,1-P),T.push(g++)}x.push(T)}for(let b=0;b<s;b++)for(let T=0;T<r;T++){let P=x[T][b],U=x[T+1][b],O=x[T+1][b+1],E=x[T][b+1];(e>0||T!==0)&&(h.push(P,U,E),M+=3),(t>0||T!==r-1)&&(h.push(U,O,E),M+=3)}l.addGroup(p,M,0),p+=M}function v(_){let w=g,M=new oe,R=new I,b=0,T=_===!0?e:t,P=_===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,m*P,0),d.push(0,P,0),f.push(.5,.5),g++;let U=g;for(let O=0;O<=s;O++){let C=O/s*c+a,D=Math.cos(C),F=Math.sin(C);R.x=T*F,R.y=m*P,R.z=T*D,u.push(R.x,R.y,R.z),d.push(0,P,0),M.x=D*.5+.5,M.y=F*.5*P+.5,f.push(M.x,M.y),g++}for(let O=0;O<s;O++){let E=w+O,C=U+O;_===!0?h.push(C,C+1,E):h.push(C+1,C,E),b+=3}l.addGroup(p,b,_===!0?1:2),p+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Fa=class n extends Rn{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ba=class n extends yt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),l(i),h(),this.setAttribute("position",new ot(r,3)),this.setAttribute("normal",new ot(r.slice(),3)),this.setAttribute("uv",new ot(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let v=new I,_=new I,w=new I;for(let M=0;M<t.length;M+=3)f(t[M+0],v),f(t[M+1],_),f(t[M+2],w),c(v,_,w,y)}function c(y,v,_,w){let M=w+1,R=[];for(let b=0;b<=M;b++){R[b]=[];let T=y.clone().lerp(_,b/M),P=v.clone().lerp(_,b/M),U=M-b;for(let O=0;O<=U;O++)O===0&&b===M?R[b][O]=T:R[b][O]=T.clone().lerp(P,O/U)}for(let b=0;b<M;b++)for(let T=0;T<2*(M-b)-1;T++){let P=Math.floor(T/2);T%2===0?(d(R[b][P+1]),d(R[b+1][P]),d(R[b][P])):(d(R[b][P+1]),d(R[b+1][P+1]),d(R[b+1][P]))}}function l(y){let v=new I;for(let _=0;_<r.length;_+=3)v.x=r[_+0],v.y=r[_+1],v.z=r[_+2],v.normalize().multiplyScalar(y),r[_+0]=v.x,r[_+1]=v.y,r[_+2]=v.z}function h(){let y=new I;for(let v=0;v<r.length;v+=3){y.x=r[v+0],y.y=r[v+1],y.z=r[v+2];let _=m(y)/2/Math.PI+.5,w=p(y)/Math.PI+.5;o.push(_,1-w)}g(),u()}function u(){for(let y=0;y<o.length;y+=6){let v=o[y+0],_=o[y+2],w=o[y+4],M=Math.max(v,_,w),R=Math.min(v,_,w);M>.9&&R<.1&&(v<.2&&(o[y+0]+=1),_<.2&&(o[y+2]+=1),w<.2&&(o[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,v){let _=y*3;v.x=e[_+0],v.y=e[_+1],v.z=e[_+2]}function g(){let y=new I,v=new I,_=new I,w=new I,M=new oe,R=new oe,b=new oe;for(let T=0,P=0;T<r.length;T+=9,P+=6){y.set(r[T+0],r[T+1],r[T+2]),v.set(r[T+3],r[T+4],r[T+5]),_.set(r[T+6],r[T+7],r[T+8]),M.set(o[P+0],o[P+1]),R.set(o[P+2],o[P+3]),b.set(o[P+4],o[P+5]),w.copy(y).add(v).add(_).divideScalar(3);let U=m(w);x(M,P+0,y,U),x(R,P+2,v,U),x(b,P+4,_,U)}}function x(y,v,_,w){w<0&&y.x===1&&(o[v]=y.x-1),_.x===0&&_.z===0&&(o[v]=w/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}},za=class n extends Ba{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Jn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ke("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);let h=i[s],d=i[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new oe:new I);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new I,s=[],r=[],o=[],a=new I,c=new Ye;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),d<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(ct(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(ct(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ko=class extends Jn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new oe){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Gl=class extends ko{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Rf(){let n=0,e=0,t=0,i=0;function s(r,o,a,c){n=r,e=a,t=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var L0=new I,D0=new I,Od=new Rf,Fd=new Rf,Bd=new Rf,Uo=class extends Jn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new I){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(D0.subVectors(s[0],s[1]).add(s[0]),l=D0);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(L0.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=L0),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Od.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,x,m),Fd.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,x,m),Bd.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(Od.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Fd.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Bd.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return i.set(Od.calc(c),Fd.calc(c),Bd.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function N0(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,c=n*a;return(2*t-2*i+r+o)*c+(-3*t+3*i-2*r-o)*a+r*n+t}function kb(n,e){let t=1-n;return t*t*e}function Ub(n,e){return 2*(1-n)*n*e}function Ob(n,e){return n*n*e}function Ta(n,e,t,i){return kb(n,e)+Ub(n,t)+Ob(n,i)}function Fb(n,e){let t=1-n;return t*t*t*e}function Bb(n,e){let t=1-n;return 3*t*t*n*e}function zb(n,e){return 3*(1-n)*n*n*e}function Hb(n,e){return n*n*n*e}function Ea(n,e,t,i,s){return Fb(n,e)+Bb(n,t)+zb(n,i)+Hb(n,s)}var Ha=class extends Jn{constructor(e=new oe,t=new oe,i=new oe,s=new oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new oe){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ea(e,s.x,r.x,o.x,a.x),Ea(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Vl=class extends Jn{constructor(e=new I,t=new I,i=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new I){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ea(e,s.x,r.x,o.x,a.x),Ea(e,s.y,r.y,o.y,a.y),Ea(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ga=class extends Jn{constructor(e=new oe,t=new oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new oe){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wl=class extends Jn{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Va=class extends Jn{constructor(e=new oe,t=new oe,i=new oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new oe){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Ta(e,s.x,r.x,o.x),Ta(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wa=class extends Jn{constructor(e=new I,t=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new I){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Ta(e,s.x,r.x,o.x),Ta(e,s.y,r.y,o.y),Ta(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xa=class extends Jn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new oe){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(N0(a,c.x,l.x,h.x,u.x),N0(a,c.y,l.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new oe().fromArray(s))}return this}},$d=Object.freeze({__proto__:null,ArcCurve:Gl,CatmullRomCurve3:Uo,CubicBezierCurve:Ha,CubicBezierCurve3:Vl,EllipseCurve:ko,LineCurve:Ga,LineCurve3:Wl,QuadraticBezierCurve:Va,QuadraticBezierCurve3:Wa,SplineCurve:Xa}),Xl=class extends Jn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new $d[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new $d[s.type]().fromJSON(s))}return this}},qa=class extends Xl{constructor(e){super(),this.type="Path",this.currentPoint=new oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Ga(this.currentPoint.clone(),new oe(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new Va(this.currentPoint.clone(),new oe(e,t),new oe(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new Ha(this.currentPoint.clone(),new oe(e,t),new oe(i,s),new oe(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Xa(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,s,r,o,a,c),this}absellipse(e,t,i,s,r,o,a,c){let l=new ko(e,t,i,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Oo=class extends qa{constructor(e){super(e),this.uuid=ai(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new qa().fromJSON(s))}return this}};function Gb(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=Ng(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(i&&(r=Yb(n,e,r,t)),n.length>80*t){a=n[0],c=n[1];let h=a,u=c;for(let d=t;d<s;d+=t){let f=n[d],g=n[d+1];f<a&&(a=f),g<c&&(c=g),f>h&&(h=f),g>u&&(u=g)}l=Math.max(h-a,u-c),l=l!==0?32767/l:0}return Ya(r,o,t,a,c,l,0),o}function Ng(n,e,t,i,s){let r;if(s===sM(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=k0(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=k0(o/i|0,n[o],n[o+1],r);return r&&Fo(r,r.next)&&(ja(r),r=r.next),r}function Cr(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Fo(t,t.next)||jt(t.prev,t,t.next)===0)){if(ja(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Ya(n,e,t,i,s,r,o){if(!n)return;!o&&r&&Jb(n,i,s,r);let a=n;for(;n.prev!==n.next;){let c=n.prev,l=n.next;if(r?Wb(n,i,s,r):Vb(n)){e.push(c.i,n.i,l.i),ja(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=Xb(Cr(n),e),Ya(n,e,t,i,s,r,2)):o===2&&qb(n,e,t,i,s,r):Ya(Cr(n),e,t,i,s,r,1);break}}}function Vb(n){let e=n.prev,t=n,i=n.next;if(jt(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,c=t.y,l=i.y,h=Math.min(s,r,o),u=Math.min(a,c,l),d=Math.max(s,r,o),f=Math.max(a,c,l),g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Ma(s,a,r,c,o,l,g.x,g.y)&&jt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Wb(n,e,t,i){let s=n.prev,r=n,o=n.next;if(jt(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,f=Math.min(a,c,l),g=Math.min(h,u,d),x=Math.max(a,c,l),m=Math.max(h,u,d),p=jd(f,g,e,t,i),y=jd(x,m,e,t,i),v=n.prevZ,_=n.nextZ;for(;v&&v.z>=p&&_&&_.z<=y;){if(v.x>=f&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Ma(a,h,c,u,l,d,v.x,v.y)&&jt(v.prev,v,v.next)>=0||(v=v.prevZ,_.x>=f&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&Ma(a,h,c,u,l,d,_.x,_.y)&&jt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;v&&v.z>=p;){if(v.x>=f&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Ma(a,h,c,u,l,d,v.x,v.y)&&jt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;_&&_.z<=y;){if(_.x>=f&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&Ma(a,h,c,u,l,d,_.x,_.y)&&jt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Xb(n,e){let t=n;do{let i=t.prev,s=t.next.next;!Fo(i,s)&&Ug(i,t,t.next,s)&&$a(i,s)&&$a(s,i)&&(e.push(i.i,t.i,s.i),ja(t),ja(t.next),t=n=s),t=t.next}while(t!==n);return Cr(t)}function qb(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&tM(o,a)){let c=Og(o,a);o=Cr(o,o.next),c=Cr(c,c.next),Ya(o,e,t,i,s,r,0),Ya(c,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Yb(n,e,t,i){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,c=r<o-1?e[r+1]*i:n.length,l=Ng(n,a,c,i,!1);l===l.next&&(l.steiner=!0),s.push(eM(l))}s.sort($b);for(let r=0;r<s.length;r++)t=jb(s[r],t);return t}function $b(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function jb(n,e){let t=Kb(n,e);if(!t)return e;let i=Og(t,n);return Cr(i,i.next),Cr(t,t.next)}function Kb(n,e){let t=e,i=n.x,s=n.y,r=-1/0,o;if(Fo(n,t))return t;do{if(Fo(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,c=o.x,l=o.y,h=1/0;t=o;do{if(i>=t.x&&t.x>=c&&i!==t.x&&kg(s<l?i:r,s,c,l,s<l?r:i,s,t.x,t.y)){let u=Math.abs(s-t.y)/(i-t.x);$a(t,n)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&Zb(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function Zb(n,e){return jt(n.prev,n,e.prev)<0&&jt(e.next,n,n.next)<0}function Jb(n,e,t,i){let s=n;do s.z===0&&(s.z=jd(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Qb(s)}function Qb(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function jd(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function eM(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function kg(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function Ma(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&kg(n,e,t,i,s,r,o,a)}function tM(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!nM(n,e)&&($a(n,e)&&$a(e,n)&&iM(n,e)&&(jt(n.prev,n,e.prev)||jt(n,e.prev,e))||Fo(n,e)&&jt(n.prev,n,n.next)>0&&jt(e.prev,e,e.next)>0)}function jt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Fo(n,e){return n.x===e.x&&n.y===e.y}function Ug(n,e,t,i){let s=wl(jt(n,e,t)),r=wl(jt(n,e,i)),o=wl(jt(t,i,n)),a=wl(jt(t,i,e));return!!(s!==r&&o!==a||s===0&&Ml(n,t,e)||r===0&&Ml(n,i,e)||o===0&&Ml(t,n,i)||a===0&&Ml(t,e,i))}function Ml(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function wl(n){return n>0?1:n<0?-1:0}function nM(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Ug(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function $a(n,e){return jt(n.prev,n,n.next)<0?jt(n,e,n.next)>=0&&jt(n,n.prev,e)>=0:jt(n,e,n.prev)<0||jt(n,n.next,e)<0}function iM(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Og(n,e){let t=Kd(n.i,n.x,n.y),i=Kd(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function k0(n,e,t,i){let s=Kd(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function ja(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Kd(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function sM(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var Zd=class{static triangulate(e,t,i=2){return Gb(e,t,i)}},wo=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];U0(e),O0(i,e);let o=e.length;t.forEach(U0);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,O0(i,t[c]);let a=Zd.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function U0(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function O0(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Ws=class n extends Ba{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Ut=class n extends yt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,u=e/a,d=t/c,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let y=p*d-o;for(let v=0;v<l;v++){let _=v*u-r;g.push(_,-y,0),x.push(0,0,1),m.push(v/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<a;y++){let v=y+l*p,_=y+l*(p+1),w=y+1+l*(p+1),M=y+1+l*p;f.push(v,_,M),f.push(_,w,M)}this.setIndex(f),this.setAttribute("position",new ot(g,3)),this.setAttribute("normal",new ot(x,3)),this.setAttribute("uv",new ot(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Xs=class n extends yt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],c=[],l=[],h=[],u=e,d=(t-e)/s,f=new I,g=new oe;for(let x=0;x<=s;x++){for(let m=0;m<=i;m++){let p=r+m/i*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<s;x++){let m=x*(i+1);for(let p=0;p<i;p++){let y=p+m,v=y,_=y+i+1,w=y+i+2,M=y+1;a.push(v,_,M),a.push(_,w,M)}}this.setIndex(a),this.setAttribute("position",new ot(c,3)),this.setAttribute("normal",new ot(l,3)),this.setAttribute("uv",new ot(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Ka=class n extends yt{constructor(e=new Oo([new oe(0,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new ot(s,3)),this.setAttribute("normal",new ot(r,3)),this.setAttribute("uv",new ot(o,2));function l(h){let u=s.length/3,d=h.extractPoints(t),f=d.shape,g=d.holes;wo.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let y=g[m];wo.isClockWise(y)===!0&&(g[m]=y.reverse())}let x=wo.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let y=g[m];f=f.concat(y)}for(let m=0,p=f.length;m<p;m++){let y=f[m];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let m=0,p=x.length;m<p;m++){let y=x[m],v=y[0]+u,_=y[1]+u,w=y[2]+u;i.push(v,_,w),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return rM(t,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];i.push(o)}return new n(i,e.curveSegments)}};function rM(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}var Ti=class n extends yt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new I,d=new I,f=[],g=[],x=[],m=[];for(let p=0;p<=i;p++){let y=[],v=p/i,_=o+v*a,w=e*Math.cos(_),M=Math.sqrt(e*e-w*w),R=0;p===0&&o===0?R=.5/t:p===i&&c===Math.PI&&(R=-.5/t);for(let b=0;b<=t;b++){let T=b/t,P=s+T*r;u.x=-M*Math.cos(P),u.y=w,u.z=M*Math.sin(P),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(T+R,1-v),y.push(l++)}h.push(y)}for(let p=0;p<i;p++)for(let y=0;y<t;y++){let v=h[p][y+1],_=h[p][y],w=h[p+1][y],M=h[p+1][y+1];(p!==0||o>0)&&f.push(v,_,M),(p!==i-1||c<Math.PI)&&f.push(_,w,M)}this.setIndex(f),this.setAttribute("position",new ot(g,3)),this.setAttribute("normal",new ot(x,3)),this.setAttribute("uv",new ot(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var qi=class n extends yt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let c=[],l=[],h=[],u=[],d=new I,f=new I,g=new I;for(let x=0;x<=i;x++){let m=o+x/i*a;for(let p=0;p<=s;p++){let y=p/s*r;f.x=(e+t*Math.cos(m))*Math.cos(y),f.y=(e+t*Math.cos(m))*Math.sin(y),f.z=t*Math.sin(m),l.push(f.x,f.y,f.z),d.x=e*Math.cos(y),d.y=e*Math.sin(y),g.subVectors(f,d).normalize(),h.push(g.x,g.y,g.z),u.push(p/s),u.push(x/i)}}for(let x=1;x<=i;x++)for(let m=1;m<=s;m++){let p=(s+1)*x+m-1,y=(s+1)*(x-1)+m-1,v=(s+1)*(x-1)+m,_=(s+1)*x+m;c.push(p,y,_),c.push(y,v,_)}this.setIndex(c),this.setAttribute("position",new ot(l,3)),this.setAttribute("normal",new ot(h,3)),this.setAttribute("uv",new ot(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Za=class n extends yt{constructor(e=new Wa(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new I,c=new I,l=new oe,h=new I,u=[],d=[],f=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new ot(u,3)),this.setAttribute("normal",new ot(d,3)),this.setAttribute("uv",new ot(f,2));function x(){for(let v=0;v<t;v++)m(v);m(r===!1?t:0),y(),p()}function m(v){h=e.getPointAt(v/t,h);let _=o.normals[v],w=o.binormals[v];for(let M=0;M<=s;M++){let R=M/s*Math.PI*2,b=Math.sin(R),T=-Math.cos(R);c.x=T*_.x+b*w.x,c.y=T*_.y+b*w.y,c.z=T*_.z+b*w.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+i*c.x,a.y=h.y+i*c.y,a.z=h.z+i*c.z,u.push(a.x,a.y,a.z)}}function p(){for(let v=1;v<=t;v++)for(let _=1;_<=s;_++){let w=(s+1)*(v-1)+(_-1),M=(s+1)*v+(_-1),R=(s+1)*v+_,b=(s+1)*(v-1)+_;g.push(w,M,b),g.push(M,R,b)}}function y(){for(let v=0;v<=t;v++)for(let _=0;_<=s;_++)l.x=v/t,l.y=_/s,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new $d[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Or(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(F0(s))s.isRenderTargetTexture?(ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(F0(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Cn(n){let e={};for(let t=0;t<n.length;t++){let i=Or(n[t]);for(let s in i)e[s]=i[s]}return e}function F0(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function oM(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Cf(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}var Yh={clone:Or,merge:Cn},aM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,bn=class extends En{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=aM,this.fragmentShader=cM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Or(e.uniforms),this.uniformsGroups=oM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new pe().setHex(s.value);break;case"v2":this.uniforms[i].value=new oe().fromArray(s.value);break;case"v3":this.uniforms[i].value=new I().fromArray(s.value);break;case"v4":this.uniforms[i].value=new It().fromArray(s.value);break;case"m3":this.uniforms[i].value=new nt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Ye().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ql=class extends bn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},st=class extends En{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gc,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},yn=class extends st{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ct(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ja=class extends En{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gc,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=sh,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Yl=class extends En{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_g,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},$l=class extends En{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Hs(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Rl(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}function lM(n){function e(s,r){return n[s]-n[r]}let t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function B0(n,e,t){let i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){let a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=n[a+c]}return s}function hM(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push(...o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}var Yi=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},jl=class extends Yi{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wd,endingEnd:Wd}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Xd:r=e,a=2*t-i;break;case qd:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Xd:o=e,c=2*i-t;break;case qd:o=1,c=i+s[1]-s[0];break;default:o=e-1,c=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,y=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,v=(-1-f)*m+(1.5+f)*x+.5*g,_=f*m-f*x;for(let w=0;w!==a;++w)r[w]=p*o[h+w]+y*o[l+w]+v*o[c+w]+_*o[u+w];return r}},Kl=class extends Yi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},Zl=class extends Yi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Jl=class extends Yi{interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(i-t)/(s-t),x=1-g;for(let m=0;m!==a;++m)r[m]=o[l+m]*x+o[c+m]*g;return r}let d=a*2,f=e-1;for(let g=0;g!==a;++g){let x=o[l+g],m=o[c+g],p=f*d+g*2,y=u[p],v=u[p+1],_=e*d+g*2,w=h[_],M=h[_+1],R=dM(i,t,y,w,s);r[g]=Fg(R,x,v,M,m)}return r}};function Fg(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function uM(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function dM(n,e,t,i,s){let r=(n-e)/(s-e);for(let o=0;o<8;o++){let a=Fg(r,e,t,i,s)-n;if(Math.abs(a)<1e-10)break;let c=uM(r,e,t,i,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var Vn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Hs(t,this.TimeBufferType),this.values=Hs(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Hs(e.times,Array),values:Hs(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),Rl(e.settings)&&(i.settings={inTangents:Hs(e.settings.inTangents,Array),outTangents:Hs(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Zl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Kl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new jl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Jl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Sr:t=this.InterpolantFactoryMethodDiscrete;break;case Tr:t=this.InterpolantFactoryMethodLinear;break;case El:t=this.InterpolantFactoryMethodSmooth;break;case Vd:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return ke("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Sr;case this.InterpolantFactoryMethodLinear:return Tr;case this.InterpolantFactoryMethodSmooth:return El;case this.InterpolantFactoryMethodBezier:return Vd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;Rl(this.settings)&&(z0(this.settings.inTangents,e),z0(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(je("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(je("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){je("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){je("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&Zv(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){je("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===El,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let u=a*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){let x=t[u+g];if(x!==t[d+g]||x!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*i,d=o*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,Rl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function z0(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}Vn.prototype.ValueTypeName="";Vn.prototype.TimeBufferType=Float32Array;Vn.prototype.ValueBufferType=Float32Array;Vn.prototype.DefaultInterpolation=Tr;var _s=class extends Vn{constructor(e,t,i){super(e,t,i)}};_s.prototype.ValueTypeName="bool";_s.prototype.ValueBufferType=Array;_s.prototype.DefaultInterpolation=Sr;_s.prototype.InterpolantFactoryMethodLinear=void 0;_s.prototype.InterpolantFactoryMethodSmooth=void 0;var Qa=class extends Vn{constructor(e,t,i,s){super(e,t,i,s)}};Qa.prototype.ValueTypeName="color";var vs=class extends Vn{constructor(e,t,i,s){super(e,t,i,s)}};vs.prototype.ValueTypeName="number";var Ql=class extends Yi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)wt.slerpFlat(r,0,o,l-a,o,l,c);return r}},bs=class extends Vn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Ql(this.times,this.values,this.getValueSize(),e)}};bs.prototype.ValueTypeName="quaternion";bs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ms=class extends Vn{constructor(e,t,i){super(e,t,i)}};Ms.prototype.ValueTypeName="string";Ms.prototype.ValueBufferType=Array;Ms.prototype.DefaultInterpolation=Sr;Ms.prototype.InterpolantFactoryMethodLinear=void 0;Ms.prototype.InterpolantFactoryMethodSmooth=void 0;var qs=class extends Vn{constructor(e,t,i,s){super(e,t,i,s)}};qs.prototype.ValueTypeName="vector";var ec=class{constructor(e="",t=-1,i=[],s=xg){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=ai(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(pM(i[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=i.length;r!==o;++r)t.push(Vn.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=lM(c);c=B0(c,1,h),l=B0(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new vs(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(l)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}resetDuration(){let e=this.tracks,t=0;for(let i=0,s=e.length;i!==s;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function fM(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return vs;case"vector":case"vector2":case"vector3":case"vector4":return qs;case"color":return Qa;case"quaternion":return bs;case"bool":case"boolean":return _s;case"string":return Ms}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function pM(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=fM(n.type);if(n.times===void 0){let i=[],s=[];hM(n.keys,i,s,"value"),n.times=i,n.values=s}let t;return e.parse!==void 0?t=e.parse(n):t=new e(n.name,n.times,n.values,n.interpolation),Rl(n.settings)&&(t.settings={inTangents:Hs(n.settings.inTangents,Float32Array),outTangents:Hs(n.settings.outTangents,Float32Array)}),t}var Hi={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(H0(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!H0(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function H0(n){try{let e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var eh=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Bg=new eh,$i=class{constructor(e){this.manager=e!==void 0?e:Bg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};$i.DEFAULT_MATERIAL_NAME="__DEFAULT";var us={},Jd=class extends Error{constructor(e,t){super(e),this.response=t}},Bo=class extends $i{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Hi.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(us[e]!==void 0){us[e].push({onLoad:t,onProgress:i,onError:s});return}us[e]=[],us[e].push({onLoad:t,onProgress:i,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&ke("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=us[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,x=0,m=new ReadableStream({start(p){y();function y(){u.read().then(({done:v,value:_})=>{if(v)p.close();else{x+=_.byteLength;let w=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let M=0,R=h.length;M<R;M++){let b=h[M];b.onProgress&&b.onProgress(w)}p.enqueue(_),y()}},v=>{p.error(v)})}}});return new Response(m)}else throw new Jd(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a==="")return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Hi.add(`file:${e}`,l);let h=us[e];delete us[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=us[e];if(h===void 0)throw this.manager.itemError(e),l;delete us[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var _o=new WeakMap,th=class extends $i{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Hi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=_o.get(o);u===void 0&&(u=[],_o.set(o,u)),u.push({onLoad:t,onError:s})}return o}let a=Ao("img");function c(){h(),t&&t(this);let u=_o.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}_o.delete(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),Hi.remove(`image:${e}`);let d=_o.get(this)||[];for(let f=0;f<d.length;f++){let g=d[f];g.onError&&g.onError(u)}_o.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Hi.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var tc=class extends $i{constructor(e){super(e)}load(e,t,i,s){let r=new un,o=new th(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},Pr=class extends Bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new pe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},nc=class extends Pr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},zd=new Ye,G0=new I,V0=new I,zo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.mapType=Wn,this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new No,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;G0.setFromMatrixPosition(e.matrixWorld),t.position.copy(G0),V0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(V0),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){zd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(zd,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===Eo||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),t.multiply(zd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Sl=new I,Tl=new wt,zi=new I,ic=class extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Sl,Tl,zi),zi.x===1&&zi.y===1&&zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sl,Tl,zi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Sl,Tl,zi),zi.x===1&&zi.y===1&&zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sl,Tl,zi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},zs=new I,W0=new oe,X0=new oe,rn=class extends ic{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Er*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(wa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Er*2*Math.atan(Math.tan(wa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){zs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zs.x,zs.y).multiplyScalar(-e/zs.z),zs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(zs.x,zs.y).multiplyScalar(-e/zs.z)}getViewSize(e,t){return this.getViewBounds(e,W0,X0),t.subVectors(X0,W0)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(wa*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Qd=class extends zo{constructor(){super(new rn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,i=Er*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},sc=class extends Pr{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Qd}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},ef=class extends zo{constructor(){super(new rn(90,1,.5,500)),this.isPointLightShadow=!0}},xn=class extends Pr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new ef}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Ys=class extends ic{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},tf=class extends zo{constructor(){super(new Ys(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ir=class extends Pr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.shadow=new tf}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var ws=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Hd=new WeakMap,rc=class extends $i{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&ke("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&ke("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Hi.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{Hd.has(o)===!0?(s&&s(Hd.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Hi.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),Hd.set(c,l),Hi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Hi.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var vo=-90,bo=1,nh=class extends Bt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new rn(vo,bo,e,t);s.layers=this.layers,this.add(s);let r=new rn(vo,bo,e,t);r.layers=this.layers,this.add(r);let o=new rn(vo,bo,e,t);o.layers=this.layers,this.add(o);let a=new rn(vo,bo,e,t);a.layers=this.layers,this.add(a);let c=new rn(vo,bo,e,t);c.layers=this.layers,this.add(c);let l=new rn(vo,bo,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===vi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Eo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},ih=class extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Pf="\\[\\]\\.:\\/",mM=new RegExp("["+Pf+"]","g"),If="[^"+Pf+"]",gM="[^"+Pf.replace("\\.","")+"]",yM=/((?:WC+[\/:])*)/.source.replace("WC",If),xM=/(WCOD+)?/.source.replace("WCOD",gM),_M=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",If),vM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",If),bM=new RegExp("^"+yM+xM+_M+vM+"$"),MM=["material","materials","bones","map"],nf=class{constructor(e,t,i){let s=i||Ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Ft=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(mM,"")}static parseTrackName(e){let t=bM.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);MM.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=i(a.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ke("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){je("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){je("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){je("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){je("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){je("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;je("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ft.Composite=nf;Ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ft.prototype.GetterByBindingType=[Ft.prototype._getValue_direct,Ft.prototype._getValue_array,Ft.prototype._getValue_arrayElement,Ft.prototype._getValue_toArray];Ft.prototype.SetterByBindingTypeAndVersioning=[[Ft.prototype._setValue_direct,Ft.prototype._setValue_direct_setNeedsUpdate,Ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_array,Ft.prototype._setValue_array_setNeedsUpdate,Ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_arrayElement,Ft.prototype._setValue_arrayElement_setNeedsUpdate,Ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_fromArray,Ft.prototype._setValue_fromArray_setNeedsUpdate,Ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var $R=new Float32Array(1);var q0=new Ye,Lr=class{constructor(e,t,i=0,s=1/0){this.ray=new Vi(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Po,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):je("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return q0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(q0),this}intersectObject(e,t=!0,i=[]){return sf(e,this,i,t),i.sort(Y0),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)sf(e[s],this,i,t);return i.sort(Y0),i}};function Y0(n,e){return n.distance-e.distance}function sf(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)sf(r[o],e,t,!0)}}var Ho=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ct(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(ct(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var rf=class n{static{n.prototype.isMatrix2=!0}constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};var oc=class extends Mi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Lf(n,e,t,i){let s=wM(i);switch(t){case Mf:return n*e;case uh:return n*e/s.components*s.byteLength;case dh:return n*e/s.components*s.byteLength;case Js:return n*e*2/s.components*s.byteLength;case fh:return n*e*2/s.components*s.byteLength;case wf:return n*e*3/s.components*s.byteLength;case ei:return n*e*4/s.components*s.byteLength;case ph:return n*e*4/s.components*s.byteLength;case lc:case hc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case uc:case dc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case gh:case xh:return Math.max(n,16)*Math.max(e,8)/4;case mh:case yh:return Math.max(n,8)*Math.max(e,8)/2;case _h:case vh:case Mh:case wh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case bh:case fc:case Sh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Th:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Eh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ah:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Rh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ch:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ph:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ih:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Lh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Dh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Nh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case kh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Uh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Oh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Fh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Bh:case zh:case Hh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Gh:case Vh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case pc:case Wh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function wM(n){switch(n){case Wn:case xf:return{byteLength:1,components:1};case Xo:case _f:case Pi:return{byteLength:2,components:1};case lh:case hh:return{byteLength:2,components:4};case Ci:case ch:case Qn:return{byteLength:4,components:1};case vf:case bf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function ay(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function TM(n){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,c,l){let h=c.array,u=c.updateRanges;if(n.bindBuffer(l,a),u.length===0)n.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let x=u[f];n.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var EM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,AM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,RM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,CM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,PM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,IM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,LM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,DM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,NM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,kM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,UM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,OM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,FM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,BM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,zM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,HM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,GM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,VM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,WM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,XM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,qM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,YM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,$M=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,jM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,KM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ZM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,JM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,QM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ew=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nw="gl_FragColor = linearToOutputTexel( gl_FragColor );",iw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,rw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ow=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,aw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,lw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,pw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,xw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,_w=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ww=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Sw=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Tw=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ew=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Aw=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rw=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Cw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Iw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Dw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Uw=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ow=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gw=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Vw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ww=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Xw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,qw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$w=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,jw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Kw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,eS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,nS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,oS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,aS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,lS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,uS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,dS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,pS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,gS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_S=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,bS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,MS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,SS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,TS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ES=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,AS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,DS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,NS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,kS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,US=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,OS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,BS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,HS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,XS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,YS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$S=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ZS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,QS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,t1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,n1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,i1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,s1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,r1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ht={alphahash_fragment:EM,alphahash_pars_fragment:AM,alphamap_fragment:RM,alphamap_pars_fragment:CM,alphatest_fragment:PM,alphatest_pars_fragment:IM,aomap_fragment:LM,aomap_pars_fragment:DM,batching_pars_vertex:NM,batching_vertex:kM,begin_vertex:UM,beginnormal_vertex:OM,bsdfs:FM,iridescence_fragment:BM,bumpmap_pars_fragment:zM,clipping_planes_fragment:HM,clipping_planes_pars_fragment:GM,clipping_planes_pars_vertex:VM,clipping_planes_vertex:WM,color_fragment:XM,color_pars_fragment:qM,color_pars_vertex:YM,color_vertex:$M,common:jM,cube_uv_reflection_fragment:KM,defaultnormal_vertex:ZM,displacementmap_pars_vertex:JM,displacementmap_vertex:QM,emissivemap_fragment:ew,emissivemap_pars_fragment:tw,colorspace_fragment:nw,colorspace_pars_fragment:iw,envmap_fragment:sw,envmap_common_pars_fragment:rw,envmap_pars_fragment:ow,envmap_pars_vertex:aw,envmap_physical_pars_fragment:xw,envmap_vertex:cw,fog_vertex:lw,fog_pars_vertex:hw,fog_fragment:uw,fog_pars_fragment:dw,gradientmap_pars_fragment:fw,lightmap_pars_fragment:pw,lights_lambert_fragment:mw,lights_lambert_pars_fragment:gw,lights_pars_begin:yw,lights_toon_fragment:_w,lights_toon_pars_fragment:vw,lights_phong_fragment:bw,lights_phong_pars_fragment:Mw,lights_physical_fragment:ww,lights_physical_pars_fragment:Sw,lights_fragment_begin:Tw,lights_fragment_maps:Ew,lights_fragment_end:Aw,lightprobes_pars_fragment:Rw,logdepthbuf_fragment:Cw,logdepthbuf_pars_fragment:Pw,logdepthbuf_pars_vertex:Iw,logdepthbuf_vertex:Lw,map_fragment:Dw,map_pars_fragment:Nw,map_particle_fragment:kw,map_particle_pars_fragment:Uw,metalnessmap_fragment:Ow,metalnessmap_pars_fragment:Fw,morphinstance_vertex:Bw,morphcolor_vertex:zw,morphnormal_vertex:Hw,morphtarget_pars_vertex:Gw,morphtarget_vertex:Vw,normal_fragment_begin:Ww,normal_fragment_maps:Xw,normal_pars_fragment:qw,normal_pars_vertex:Yw,normal_vertex:$w,normalmap_pars_fragment:jw,clearcoat_normal_fragment_begin:Kw,clearcoat_normal_fragment_maps:Zw,clearcoat_pars_fragment:Jw,iridescence_pars_fragment:Qw,opaque_fragment:eS,packing:tS,premultiplied_alpha_fragment:nS,project_vertex:iS,dithering_fragment:sS,dithering_pars_fragment:rS,roughnessmap_fragment:oS,roughnessmap_pars_fragment:aS,shadowmap_pars_fragment:cS,shadowmap_pars_vertex:lS,shadowmap_vertex:hS,shadowmask_pars_fragment:uS,skinbase_vertex:dS,skinning_pars_vertex:fS,skinning_vertex:pS,skinnormal_vertex:mS,specularmap_fragment:gS,specularmap_pars_fragment:yS,tonemapping_fragment:xS,tonemapping_pars_fragment:_S,transmission_fragment:vS,transmission_pars_fragment:bS,uv_pars_fragment:MS,uv_pars_vertex:wS,uv_vertex:SS,worldpos_vertex:TS,background_vert:ES,background_frag:AS,backgroundCube_vert:RS,backgroundCube_frag:CS,cube_vert:PS,cube_frag:IS,depth_vert:LS,depth_frag:DS,distance_vert:NS,distance_frag:kS,equirect_vert:US,equirect_frag:OS,linedashed_vert:FS,linedashed_frag:BS,meshbasic_vert:zS,meshbasic_frag:HS,meshlambert_vert:GS,meshlambert_frag:VS,meshmatcap_vert:WS,meshmatcap_frag:XS,meshnormal_vert:qS,meshnormal_frag:YS,meshphong_vert:$S,meshphong_frag:jS,meshphysical_vert:KS,meshphysical_frag:ZS,meshtoon_vert:JS,meshtoon_frag:QS,points_vert:e1,points_frag:t1,shadow_vert:n1,shadow_frag:i1,sprite_vert:s1,sprite_frag:r1},ve={common:{diffuse:{value:new pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new pe(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},Ji={basic:{uniforms:Cn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Cn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new pe(0)},envMapIntensity:{value:1}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Cn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new pe(0)},specular:{value:new pe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Cn([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Cn([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new pe(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Cn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Cn([ve.points,ve.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Cn([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Cn([ve.common,ve.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Cn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Cn([ve.sprite,ve.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:Cn([ve.common,ve.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:Cn([ve.lights,ve.fog,{color:{value:new pe(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Ji.physical={uniforms:Cn([Ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new pe(0)},specularColor:{value:new pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};var $h={r:0,b:0,g:0},o1=new Ye,cy=new nt;cy.set(-1,0,0,0,1,0,0,0,1);function a1(n,e,t,i,s,r){let o=new pe(0),a=s===!0?0:1,c,l,h=null,u=0,d=null;function f(y){let v=y.isScene===!0?y.background:null;if(v&&v.isTexture){let _=y.backgroundBlurriness>0;v=e.get(v,_)}return v}function g(y){let v=!1,_=f(y);_===null?m(o,a):_&&_.isColor&&(m(_,1),v=!0);let w=n.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||v)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(y,v){let _=f(v);_&&(_.isCubeTexture||_.mapping===cc)?(l===void 0&&(l=new ce(new Vt(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:Or(Ji.backgroundCube.uniforms),vertexShader:Ji.backgroundCube.vertexShader,fragmentShader:Ji.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(w,M,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=_,l.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(o1.makeRotationFromEuler(v.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(cy),l.material.toneMapped=ut.getTransfer(_.colorSpace)!==At,(h!==_||u!==_.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,h=_,u=_.version,d=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new ce(new Ut(2,2),new bn({name:"BackgroundMaterial",uniforms:Or(Ji.background.uniforms),vertexShader:Ji.background.vertexShader,fragmentShader:Ji.background.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ut.getTransfer(_.colorSpace)!==At,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||u!==_.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=_,u=_.version,d=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,v){y.getRGB($h,Cf(n)),t.buffers.color.setClear($h.r,$h.g,$h.b,v,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,v=1){o.set(y),a=v,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:g,addToRenderList:x,dispose:p}}function c1(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(U,O,E,C,D){let F=!1,V=u(U,C,E,O);r!==V&&(r=V,l(r.object)),F=f(U,C,E,D),F&&g(U,C,E,D),D!==null&&e.update(D,n.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,_(U,O,E,C),D!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function c(){return n.createVertexArray()}function l(U){return n.bindVertexArray(U)}function h(U){return n.deleteVertexArray(U)}function u(U,O,E,C){let D=C.wireframe===!0,F=i[O.id];F===void 0&&(F={},i[O.id]=F);let V=U.isInstancedMesh===!0?U.id:0,X=F[V];X===void 0&&(X={},F[V]=X);let N=X[E.id];N===void 0&&(N={},X[E.id]=N);let k=N[D];return k===void 0&&(k=d(c()),N[D]=k),k}function d(U){let O=[],E=[],C=[];for(let D=0;D<t;D++)O[D]=0,E[D]=0,C[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:E,attributeDivisors:C,object:U,attributes:{},index:null}}function f(U,O,E,C){let D=r.attributes,F=O.attributes,V=0,X=E.getAttributes();for(let N in X)if(X[N].location>=0){let q=D[N],le=F[N];if(le===void 0&&(N==="instanceMatrix"&&U.instanceMatrix&&(le=U.instanceMatrix),N==="instanceColor"&&U.instanceColor&&(le=U.instanceColor)),q===void 0||q.attribute!==le||le&&q.data!==le.data)return!0;V++}return r.attributesNum!==V||r.index!==C}function g(U,O,E,C){let D={},F=O.attributes,V=0,X=E.getAttributes();for(let N in X)if(X[N].location>=0){let q=F[N];q===void 0&&(N==="instanceMatrix"&&U.instanceMatrix&&(q=U.instanceMatrix),N==="instanceColor"&&U.instanceColor&&(q=U.instanceColor));let le={};le.attribute=q,q&&q.data&&(le.data=q.data),D[N]=le,V++}r.attributes=D,r.attributesNum=V,r.index=C}function x(){let U=r.newAttributes;for(let O=0,E=U.length;O<E;O++)U[O]=0}function m(U){p(U,0)}function p(U,O){let E=r.newAttributes,C=r.enabledAttributes,D=r.attributeDivisors;E[U]=1,C[U]===0&&(n.enableVertexAttribArray(U),C[U]=1),D[U]!==O&&(n.vertexAttribDivisor(U,O),D[U]=O)}function y(){let U=r.newAttributes,O=r.enabledAttributes;for(let E=0,C=O.length;E<C;E++)O[E]!==U[E]&&(n.disableVertexAttribArray(E),O[E]=0)}function v(U,O,E,C,D,F,V){V===!0?n.vertexAttribIPointer(U,O,E,D,F):n.vertexAttribPointer(U,O,E,C,D,F)}function _(U,O,E,C){x();let D=C.attributes,F=E.getAttributes(),V=O.defaultAttributeValues;for(let X in F){let N=F[X];if(N.location>=0){let k=D[X];if(k===void 0&&(X==="instanceMatrix"&&U.instanceMatrix&&(k=U.instanceMatrix),X==="instanceColor"&&U.instanceColor&&(k=U.instanceColor)),k!==void 0){let q=k.normalized,le=k.itemSize,ue=e.get(k);if(ue===void 0)continue;let Ae=ue.buffer,We=ue.type,qe=ue.bytesPerElement,J=We===n.INT||We===n.UNSIGNED_INT||k.gpuType===ch;if(k.isInterleavedBufferAttribute){let ne=k.data,be=ne.stride,Fe=k.offset;if(ne.isInstancedInterleavedBuffer){for(let G=0;G<N.locationSize;G++)p(N.location+G,ne.meshPerAttribute);U.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let G=0;G<N.locationSize;G++)m(N.location+G);n.bindBuffer(n.ARRAY_BUFFER,Ae);for(let G=0;G<N.locationSize;G++)v(N.location+G,le/N.locationSize,We,q,be*qe,(Fe+le/N.locationSize*G)*qe,J)}else{if(k.isInstancedBufferAttribute){for(let ne=0;ne<N.locationSize;ne++)p(N.location+ne,k.meshPerAttribute);U.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let ne=0;ne<N.locationSize;ne++)m(N.location+ne);n.bindBuffer(n.ARRAY_BUFFER,Ae);for(let ne=0;ne<N.locationSize;ne++)v(N.location+ne,le/N.locationSize,We,q,le*qe,le/N.locationSize*ne*qe,J)}}else if(V!==void 0){let q=V[X];if(q!==void 0)switch(q.length){case 2:n.vertexAttrib2fv(N.location,q);break;case 3:n.vertexAttrib3fv(N.location,q);break;case 4:n.vertexAttrib4fv(N.location,q);break;default:n.vertexAttrib1fv(N.location,q)}}}}y()}function w(){T();for(let U in i){let O=i[U];for(let E in O){let C=O[E];for(let D in C){let F=C[D];for(let V in F)h(F[V].object),delete F[V];delete C[D]}}delete i[U]}}function M(U){if(i[U.id]===void 0)return;let O=i[U.id];for(let E in O){let C=O[E];for(let D in C){let F=C[D];for(let V in F)h(F[V].object),delete F[V];delete C[D]}}delete i[U.id]}function R(U){for(let O in i){let E=i[O];for(let C in E){let D=E[C];if(D[U.id]===void 0)continue;let F=D[U.id];for(let V in F)h(F[V].object),delete F[V];delete D[U.id]}}}function b(U){for(let O in i){let E=i[O],C=U.isInstancedMesh===!0?U.id:0,D=E[C];if(D!==void 0){for(let F in D){let V=D[F];for(let X in V)h(V[X].object),delete V[X];delete D[F]}delete E[C],Object.keys(E).length===0&&delete i[O]}}}function T(){P(),o=!0,r!==s&&(r=s,l(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:P,dispose:w,releaseStatesOfGeometry:M,releaseStatesOfObject:b,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function l1(n,e,t){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function o(c,l,h){h!==0&&(n.drawArraysInstanced(i,c,l,h),t.update(l,i,h))}function a(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,h);let d=0;for(let f=0;f<h;f++)d+=l[f];t.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function h1(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==ei&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let b=R===Pi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Wn&&R!==Qn&&!b&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(ke("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),M=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:_,maxSamples:w,samples:M}}function u1(n){let e=this,t=null,i=0,s=!1,r=!1,o=new Zn,a=new nt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let y=r?0:i,v=y*4,_=p.clippingState||null;c.value=_,_=h(g,d,v,f);for(let w=0;w!==v;++w)_[w]=t[w];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=f+x*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,_=f;v!==x;++v,_+=4)o.copy(u[v]).applyMatrix4(y,a),o.normal.toArray(m,_),m[_+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var jo=4,d1=6,f1=20,p1=256,yc=new Ys,zg=new pe,Df=null,Nf=0,kf=0,Uf=!1,m1=new I,Fr=new I,Zo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=m1}=r;Df=this._renderer.getRenderTarget(),Nf=this._renderer.getActiveCubeFace(),kf=this._renderer.getActiveMipmapLevel(),Uf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Df,Nf,kf),this._renderer.xr.enabled=Uf,e.scissorTest=!1,$o(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ks||e.mapping===kr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Df=this._renderer.getRenderTarget(),Nf=this._renderer.getActiveCubeFace(),kf=this._renderer.getActiveMipmapLevel(),Uf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:Pi,format:ei,colorSpace:kn,depthBuffer:!1},s=Hg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hg(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=g1(r)),this._blurMaterial=x1(r,e,t),this._ggxMaterial=y1(r,e,t)}return s}_compileMaterial(e){let t=new ce(new yt,e);this._renderer.compile(t,yc)}_sceneToCubeUV(e,t,i,s,r){let c=new rn(90,1,t,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(zg),u.toneMapping=Ai,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ce(new Vt,new Rt({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,p=!1,y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,p=!0):(m.color.copy(zg),p=!0);for(let v=0;v<6;v++){let _=v%3;_===0?(c.up.set(0,l[v],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[v],r.y,r.z)):_===1?(c.up.set(0,0,l[v]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[v],r.z)):(c.up.set(0,l[v],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[v]));let w=this._cubeSize;$o(s,_*w,v>2?w:0,w,w),u.setRenderTarget(s),p&&u.render(x,c),u.render(e,c)}u.toneMapping=f,u.autoClear=d,e.background=y}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Ks||e.mapping===kr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gg());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;$o(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,yc)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let c=o.uniforms,l=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),d=l*1.25,f=u*d,{_lodMax:g}=this,x=this._sizeLods[i],m=3*x*(i>g-jo?i-g+jo:0),p=4*(this._cubeSize-x);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=g-t,$o(r,m,p,3*x,2*x),s.setRenderTarget(r),s.render(a,yc),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-i,$o(e,m,p,3*x,2*x),s.setRenderTarget(e),s.render(a,yc)}_blur(e,t,i,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,o),this._blurPass(r,e,i,i,o)}_blurPass(e,t,i,s,r){let o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;let l=a.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-i;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-jo?s-this._lodMax+jo:0),d=4*(this._cubeSize-h);$o(t,u,d,3*h,2*h),o.setRenderTarget(t),o.render(c,yc)}};function g1(n){let e=[],t=[],i=n,s=n-jo+1+d1;for(let r=0;r<s;r++){let o=Math.pow(2,i);e.push(o);let a=1/(o-2),c=-a,l=1+a,h=[c,c,l,c,l,l,c,c,l,l,c,l],u=6,d=6,f=3,g=new Float32Array(f*d*u),x=new Float32Array(f*d*u);for(let p=0;p<u;p++){let y=p%3*2/3-1,v=p>2?0:-1,_=[y,v,0,y+2/3,v,0,y+2/3,v+1,0,y,v,0,y+2/3,v+1,0,y,v+1,0];g.set(_,f*d*p);for(let w=0;w<d;w++){let M=h[w*2]*2-1,R=h[w*2+1]*2-1;p===0?Fr.set(1,R,M):p===1?Fr.set(-M,1,-R):p===2?Fr.set(-M,R,1):p===3?Fr.set(-1,R,-M):p===4?Fr.set(-M,-1,R):Fr.set(M,R,-1),Fr.toArray(x,(p*d+w)*f)}}let m=new yt;m.setAttribute("position",new Xt(g,f)),m.setAttribute("outputDirection",new Xt(x,f)),t.push(new ce(m,null)),i>jo&&i--}return{lodMeshes:t,sizeLods:e}}function Hg(n,e,t){let i=new Hn(n,e,t);return i.texture.mapping=cc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function $o(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function y1(n,e,t){return new bn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:p1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Jh(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function x1(n,e,t){return new bn({name:"SphericalGaussianBlur",defines:{SAMPLES:f1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Jh(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Gg(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Vg(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Jh(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Kh=class extends Hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Ua(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Vt(5,5,5),r=new bn({name:"CubemapFromEquirect",uniforms:Or(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:qt,blending:Ki});r.uniforms.tEquirect.value=t;let o=new ce(s,r),a=t.minFilter;return t.minFilter===Ri&&(t.minFilter=Qt),new nh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}};function _1(n){let e=new WeakMap,t=new WeakMap,i=null;function s(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===rh||f===oh)if(e.has(d)){let g=e.get(d).texture;return a(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let x=new Kh(g.height);return x.fromEquirectangularTexture(n,d),e.set(d,x),d.addEventListener("dispose",l),a(x.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){let f=d.mapping,g=f===rh||f===oh,x=f===Ks||f===kr;if(g||x){let m=t.get(d),p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return i===null&&(i=new Zo(n)),m=g?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let y=d.image;return g&&y&&y.height>0||x&&y&&c(y)?(i===null&&(i=new Zo(n)),m=g?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function a(d,f){return f===rh?d.mapping=Ks:f===oh&&(d.mapping=kr),d}function c(d){let f=0,g=6;for(let x=0;x<g;x++)d[x]!==void 0&&f++;return f===g}function l(d){let f=d.target;f.removeEventListener("dispose",l);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function v1(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&wr("WebGLRenderer: "+i+" extension not supported."),s}}}function b1(n,e,t,i){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let f in d)e.update(d[f],n.ARRAY_BUFFER)}function l(u){let d=[],f=u.index,g=u.attributes.position,x=0;if(g===void 0)return;if(f!==null){let y=f.array;x=f.version;for(let v=0,_=y.length;v<_;v+=3){let w=y[v+0],M=y[v+1],R=y[v+2];d.push(w,M,M,R,R,w)}}else{let y=g.array;x=g.version;for(let v=0,_=y.length/3-1;v<_;v+=3){let w=v+0,M=v+1,R=v+2;d.push(w,M,M,R,R,w)}}let m=new(g.count>=65535?La:Ia)(d,1);m.version=x;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function M1(n,e,t){let i;function s(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,d){n.drawElements(i,d,r,u*o),t.update(d,i,1)}function l(u,d,f){f!==0&&(n.drawElementsInstanced(i,d,r,u*o,f),t.update(d,i,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,u,0,f);let x=0;for(let m=0;m<f;m++)x+=d[m];t.update(x,i,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function w1(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:je("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function S1(n,e,t){let i=new WeakMap,s=new It;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(a);if(d===void 0||d.count!==u){let T=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],v=0;f===!0&&(v=1),g===!0&&(v=2),x===!0&&(v=3);let _=a.attributes.position.count*v,w=1;_>e.maxTextureSize&&(w=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let M=new Float32Array(_*w*4*u),R=new Ca(M,_,w,u);R.type=Qn,R.needsUpdate=!0;let b=v*4;for(let P=0;P<u;P++){let U=m[P],O=p[P],E=y[P],C=_*w*4*P;for(let D=0;D<U.count;D++){let F=D*b;f===!0&&(s.fromBufferAttribute(U,D),M[C+F+0]=s.x,M[C+F+1]=s.y,M[C+F+2]=s.z,M[C+F+3]=0),g===!0&&(s.fromBufferAttribute(O,D),M[C+F+4]=s.x,M[C+F+5]=s.y,M[C+F+6]=s.z,M[C+F+7]=0),x===!0&&(s.fromBufferAttribute(E,D),M[C+F+8]=s.x,M[C+F+9]=s.y,M[C+F+10]=s.z,M[C+F+11]=E.itemSize===4?s.w:1)}}d={count:u,texture:R,size:new oe(_,w)},i.set(a,d),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function T1(n,e,t,i,s){let r=new WeakMap;function o(l){let h=s.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var E1={[uf]:"LINEAR_TONE_MAPPING",[df]:"REINHARD_TONE_MAPPING",[ff]:"CINEON_TONE_MAPPING",[ac]:"ACES_FILMIC_TONE_MAPPING",[mf]:"AGX_TONE_MAPPING",[gf]:"NEUTRAL_TONE_MAPPING",[pf]:"CUSTOM_TONE_MAPPING"};function A1(n,e,t,i,s,r){let o=new Hn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=new yt;l.setAttribute("position",new ot([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new ot([0,2,0,0,2,0],2));let h=new ql({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new ce(l,h),d=new Ys(-1,1,1,-1,0,1),f=null,g=null,x=!1,m,p=null,y=[],v=!1;this.setSize=function(_,w){o.setSize(_,w),a!==null&&a.setSize(_,w),c!==null&&c.setSize(_,w);for(let M=0;M<y.length;M++){let R=y[M];R.setSize&&R.setSize(_,w)}},this.setEffects=function(_){y=_,v=y.length>0&&y[0].isRenderPass===!0;let w=o.width,M=o.height;y.length>0&&a===null&&(a=new Hn(w,M,{type:Pi,depthBuffer:!1,stencilBuffer:!1}),c=new Hn(w,M,{type:Pi,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<y.length;R++){let b=y[R];b.setSize&&b.setSize(w,M)}},this.begin=function(_,w){if(x||_.toneMapping===Ai&&y.length===0)return!1;if(p=w,w!==null){let M=w.width,R=w.height;(o.width!==M||o.height!==R)&&this.setSize(M,R)}return v===!1&&_.setRenderTarget(o),m=_.toneMapping,_.toneMapping=Ai,!0},this.hasRenderPass=function(){return v},this.end=function(_,w){_.toneMapping=m,x=!0;let M=o,R=a;for(let b=0;b<y.length;b++){let T=y[b];T.enabled!==!1&&(T.render(_,R,M,w),T.needsSwap!==!1&&(M=R,R=R===a?c:a))}if(f!==_.outputColorSpace||g!==_.toneMapping){f=_.outputColorSpace,g=_.toneMapping,h.defines={},ut.getTransfer(f)===At&&(h.defines.SRGB_TRANSFER="");let b=E1[g];b&&(h.defines[b]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=M.texture,_.setRenderTarget(p),_.render(u,d),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}var ly=new un,Bf=new Vs(1,1),hy=new Ca,uy=new Fl,dy=new Ua,Wg=[],Xg=[],qg=new Float32Array(16),Yg=new Float32Array(9),$g=new Float32Array(4);function Jo(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Wg[s];if(r===void 0&&(r=new Float32Array(s),Wg[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function dn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function fn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Qh(n,e){let t=Xg[e];t===void 0&&(t=new Int32Array(e),Xg[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function R1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function C1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;n.uniform2fv(this.addr,e),fn(t,e)}}function P1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dn(t,e))return;n.uniform3fv(this.addr,e),fn(t,e)}}function I1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;n.uniform4fv(this.addr,e),fn(t,e)}}function L1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(dn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),fn(t,e)}else{if(dn(t,i))return;$g.set(i),n.uniformMatrix2fv(this.addr,!1,$g),fn(t,i)}}function D1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(dn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),fn(t,e)}else{if(dn(t,i))return;Yg.set(i),n.uniformMatrix3fv(this.addr,!1,Yg),fn(t,i)}}function N1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(dn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),fn(t,e)}else{if(dn(t,i))return;qg.set(i),n.uniformMatrix4fv(this.addr,!1,qg),fn(t,i)}}function k1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function U1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;n.uniform2iv(this.addr,e),fn(t,e)}}function O1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;n.uniform3iv(this.addr,e),fn(t,e)}}function F1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;n.uniform4iv(this.addr,e),fn(t,e)}}function B1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function z1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;n.uniform2uiv(this.addr,e),fn(t,e)}}function H1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;n.uniform3uiv(this.addr,e),fn(t,e)}}function G1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;n.uniform4uiv(this.addr,e),fn(t,e)}}function V1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Bf.compareFunction=t.isReversedDepthBuffer()?qh:Xh,r=Bf):r=ly,t.setTexture2D(e||r,s)}function W1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||uy,s)}function X1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||dy,s)}function q1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||hy,s)}function Y1(n){switch(n){case 5126:return R1;case 35664:return C1;case 35665:return P1;case 35666:return I1;case 35674:return L1;case 35675:return D1;case 35676:return N1;case 5124:case 35670:return k1;case 35667:case 35671:return U1;case 35668:case 35672:return O1;case 35669:case 35673:return F1;case 5125:return B1;case 36294:return z1;case 36295:return H1;case 36296:return G1;case 35678:case 36198:case 36298:case 36306:case 35682:return V1;case 35679:case 36299:case 36307:return W1;case 35680:case 36300:case 36308:case 36293:return X1;case 36289:case 36303:case 36311:case 36292:return q1}}function $1(n,e){n.uniform1fv(this.addr,e)}function j1(n,e){let t=Jo(e,this.size,2);n.uniform2fv(this.addr,t)}function K1(n,e){let t=Jo(e,this.size,3);n.uniform3fv(this.addr,t)}function Z1(n,e){let t=Jo(e,this.size,4);n.uniform4fv(this.addr,t)}function J1(n,e){let t=Jo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Q1(n,e){let t=Jo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function eT(n,e){let t=Jo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function tT(n,e){n.uniform1iv(this.addr,e)}function nT(n,e){n.uniform2iv(this.addr,e)}function iT(n,e){n.uniform3iv(this.addr,e)}function sT(n,e){n.uniform4iv(this.addr,e)}function rT(n,e){n.uniform1uiv(this.addr,e)}function oT(n,e){n.uniform2uiv(this.addr,e)}function aT(n,e){n.uniform3uiv(this.addr,e)}function cT(n,e){n.uniform4uiv(this.addr,e)}function lT(n,e,t){let i=this.cache,s=e.length,r=Qh(t,s);dn(i,r)||(n.uniform1iv(this.addr,r),fn(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Bf:o=ly;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function hT(n,e,t){let i=this.cache,s=e.length,r=Qh(t,s);dn(i,r)||(n.uniform1iv(this.addr,r),fn(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||uy,r[o])}function uT(n,e,t){let i=this.cache,s=e.length,r=Qh(t,s);dn(i,r)||(n.uniform1iv(this.addr,r),fn(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||dy,r[o])}function dT(n,e,t){let i=this.cache,s=e.length,r=Qh(t,s);dn(i,r)||(n.uniform1iv(this.addr,r),fn(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||hy,r[o])}function fT(n){switch(n){case 5126:return $1;case 35664:return j1;case 35665:return K1;case 35666:return Z1;case 35674:return J1;case 35675:return Q1;case 35676:return eT;case 5124:case 35670:return tT;case 35667:case 35671:return nT;case 35668:case 35672:return iT;case 35669:case 35673:return sT;case 5125:return rT;case 36294:return oT;case 36295:return aT;case 36296:return cT;case 35678:case 36198:case 36298:case 36306:case 35682:return lT;case 35679:case 36299:case 36307:return hT;case 35680:case 36300:case 36308:case 36293:return uT;case 36289:case 36303:case 36311:case 36292:return dT}}var zf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Y1(t.type)}},Hf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=fT(t.type)}},Gf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Of=/(\w+)(\])?(\[|\.)?/g;function jg(n,e){n.seq.push(e),n.map[e.id]=e}function pT(n,e,t){let i=n.name,s=i.length;for(Of.lastIndex=0;;){let r=Of.exec(i),o=Of.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){jg(t,l===void 0?new zf(a,n,e):new Hf(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new Gf(a),jg(t,u)),t=u}}}var Ko=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);pT(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function Kg(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var mT=37297,gT=0;function yT(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var Zg=new nt;function xT(n){ut._getMatrix(Zg,ut.workingColorSpace,n);let e=`mat3( ${Zg.elements.map(t=>t.toFixed(4))} )`;switch(ut.getTransfer(n)){case Aa:return[e,"LinearTransferOETF"];case At:return[e,"sRGBTransferOETF"];default:return ke("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Jg(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+yT(n.getShaderSource(e),a)}else return r}function _T(n,e){let t=xT(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var vT={[uf]:"Linear",[df]:"Reinhard",[ff]:"Cineon",[ac]:"ACESFilmic",[mf]:"AgX",[gf]:"Neutral",[pf]:"Custom"};function bT(n,e){let t=vT[e];return t===void 0?(ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var jh=new I;function MT(){ut.getLuminanceCoefficients(jh);let n=jh.x.toFixed(4),e=jh.y.toFixed(4),t=jh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wT(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_c).join(`
`)}function ST(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function TT(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function _c(n){return n!==""}function Qg(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ey(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var ET=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vf(n){return n.replace(ET,RT)}var AT=new Map;function RT(n,e){let t=ht[e];if(t===void 0){let i=AT.get(e);if(i!==void 0)t=ht[i],ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Vf(t)}var CT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ty(n){return n.replace(CT,PT)}function PT(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ny(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var IT={[Dr]:"SHADOWMAP_TYPE_PCF",[Go]:"SHADOWMAP_TYPE_VSM"};function LT(n){return IT[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var DT={[Ks]:"ENVMAP_TYPE_CUBE",[kr]:"ENVMAP_TYPE_CUBE",[cc]:"ENVMAP_TYPE_CUBE_UV"};function NT(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":DT[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var kT={[kr]:"ENVMAP_MODE_REFRACTION"};function UT(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":kT[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var OT={[sh]:"ENVMAP_BLENDING_MULTIPLY",[mg]:"ENVMAP_BLENDING_MIX",[gg]:"ENVMAP_BLENDING_ADD"};function FT(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":OT[n.combine]||"ENVMAP_BLENDING_NONE"}function BT(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function zT(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=LT(t),l=NT(t),h=UT(t),u=FT(t),d=BT(t),f=wT(t),g=ST(r),x=s.createProgram(),m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(_c).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(_c).join(`
`),p.length>0&&(p+=`
`)):(m=[ny(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_c).join(`
`),p=[ny(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ai?"#define TONE_MAPPING":"",t.toneMapping!==Ai?ht.tonemapping_pars_fragment:"",t.toneMapping!==Ai?bT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,_T("linearToOutputTexel",t.outputColorSpace),MT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_c).join(`
`)),o=Vf(o),o=Qg(o,t),o=ey(o,t),a=Vf(a),a=Qg(a,t),a=ey(a,t),o=ty(o),a=ty(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Ef?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ef?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=y+m+o,_=y+p+a,w=Kg(s,s.VERTEX_SHADER,v),M=Kg(s,s.FRAGMENT_SHADER,_);s.attachShader(x,w),s.attachShader(x,M),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(U){if(n.debug.checkShaderErrors){let O=s.getProgramInfoLog(x)||"",E=s.getShaderInfoLog(w)||"",C=s.getShaderInfoLog(M)||"",D=O.trim(),F=E.trim(),V=C.trim(),X=!0,N=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,w,M);else{let k=Jg(s,w,"vertex"),q=Jg(s,M,"fragment");je("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+D+`
`+k+`
`+q)}else D!==""?ke("WebGLProgram: Program Info Log:",D):(F===""||V==="")&&(N=!1);N&&(U.diagnostics={runnable:X,programLog:D,vertexShader:{log:F,prefix:m},fragmentShader:{log:V,prefix:p}})}s.deleteShader(w),s.deleteShader(M),b=new Ko(s,x),T=TT(s,x)}let b;this.getUniforms=function(){return b===void 0&&R(this),b};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(x,mT)),P},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=gT++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=M,this}var HT=0,Wf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Xf(e),t.set(e,i)),i}},Xf=class{constructor(e){this.id=HT++,this.code=e,this.usedTimes=0}};function GT(n){return n===Js||n===fc||n===pc}function VT(n,e,t,i,s,r){let o=new Po,a=new Wf,c=new Set,l=[],h=new Map,u=i.logarithmicDepthBuffer,d=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return c.add(b),b===0?"uv":`uv${b}`}function x(b,T,P,U,O,E){let C=U.fog,D=O.geometry,F=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?U.environment:null,V=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,X=e.get(b.envMap||F,V),N=X&&X.mapping===cc?X.image.height:null,k=f[b.type];b.precision!==null&&(d=i.getMaxPrecision(b.precision),d!==b.precision&&ke("WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));let q=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,le=q!==void 0?q.length:0,ue=0;D.morphAttributes.position!==void 0&&(ue=1),D.morphAttributes.normal!==void 0&&(ue=2),D.morphAttributes.color!==void 0&&(ue=3);let Ae,We,qe,J;if(k){let Ht=Ji[k];Ae=Ht.vertexShader,We=Ht.fragmentShader}else{Ae=b.vertexShader,We=b.fragmentShader;let Ht=a.getVertexShaderStage(b),Tt=a.getFragmentShaderStage(b);a.update(b,Ht,Tt),qe=Ht.id,J=Tt.id}let ne=n.getRenderTarget(),be=n.state.buffers.depth.getReversed(),Fe=O.isInstancedMesh===!0,G=O.isBatchedMesh===!0,re=!!b.map,Ue=!!b.matcap,Te=!!X,Xe=!!b.aoMap,gt=!!b.lightMap,et=!!b.bumpMap&&b.wireframe===!1,_t=!!b.normalMap,Ze=!!b.displacementMap,ft=!!b.emissiveMap,vt=!!b.metalnessMap,Ge=!!b.roughnessMap,B=b.anisotropy>0,tt=b.clearcoat>0,at=b.dispersion>0,L=b.retroreflectivity>0,S=b.iridescence>0,W=b.sheen>0,K=b.transmission>0,Q=B&&!!b.anisotropyMap,de=tt&&!!b.clearcoatMap,fe=tt&&!!b.clearcoatNormalMap,ee=tt&&!!b.clearcoatRoughnessMap,se=S&&!!b.iridescenceMap,me=S&&!!b.iridescenceThicknessMap,Be=W&&!!b.sheenColorMap,_e=W&&!!b.sheenRoughnessMap,ge=!!b.specularMap,ze=!!b.specularColorMap,$e=!!b.specularIntensityMap,rt=K&&!!b.transmissionMap,H=K&&!!b.thicknessMap,ye=!!b.gradientMap,ie=!!b.alphaMap,xe=b.alphaTest>0,Se=!!b.alphaHash,ae=!!b.extensions,Ve=Ai;b.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Ve=n.toneMapping);let De={shaderID:k,shaderType:b.type,shaderName:b.name,vertexShader:Ae,fragmentShader:We,defines:b.defines,customVertexShaderID:qe,customFragmentShaderID:J,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:G,batchingColor:G&&O._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&O.instanceColor!==null,instancingMorph:Fe&&O.morphTexture!==null,outputColorSpace:ne===null?n.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:ut.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:re,matcap:Ue,envMap:Te,envMapMode:Te&&X.mapping,envMapCubeUVHeight:N,aoMap:Xe,lightMap:gt,bumpMap:et,normalMap:_t,displacementMap:Ze,emissiveMap:ft,normalMapObjectSpace:_t&&b.normalMapType===vg,normalMapTangentSpace:_t&&b.normalMapType===gc,packedNormalMap:_t&&b.normalMapType===gc&&GT(b.normalMap.format),metalnessMap:vt,roughnessMap:Ge,anisotropy:B,anisotropyMap:Q,clearcoat:tt,clearcoatMap:de,clearcoatNormalMap:fe,clearcoatRoughnessMap:ee,dispersion:at,retroreflection:L,iridescence:S,iridescenceMap:se,iridescenceThicknessMap:me,sheen:W,sheenColorMap:Be,sheenRoughnessMap:_e,specularMap:ge,specularColorMap:ze,specularIntensityMap:$e,transmission:K,transmissionMap:rt,thicknessMap:H,gradientMap:ye,opaque:b.transparent===!1&&b.blending===Vo&&b.alphaToCoverage===!1,alphaMap:ie,alphaTest:xe,alphaHash:Se,combine:b.combine,mapUv:re&&g(b.map.channel),aoMapUv:Xe&&g(b.aoMap.channel),lightMapUv:gt&&g(b.lightMap.channel),bumpMapUv:et&&g(b.bumpMap.channel),normalMapUv:_t&&g(b.normalMap.channel),displacementMapUv:Ze&&g(b.displacementMap.channel),emissiveMapUv:ft&&g(b.emissiveMap.channel),metalnessMapUv:vt&&g(b.metalnessMap.channel),roughnessMapUv:Ge&&g(b.roughnessMap.channel),anisotropyMapUv:Q&&g(b.anisotropyMap.channel),clearcoatMapUv:de&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:fe&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:me&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:_e&&g(b.sheenRoughnessMap.channel),specularMapUv:ge&&g(b.specularMap.channel),specularColorMapUv:ze&&g(b.specularColorMap.channel),specularIntensityMapUv:$e&&g(b.specularIntensityMap.channel),transmissionMapUv:rt&&g(b.transmissionMap.channel),thicknessMapUv:H&&g(b.thicknessMap.channel),alphaMapUv:ie&&g(b.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(_t||B),vertexNormals:!!D.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!D.attributes.uv&&(re||ie),fog:!!C,useFog:b.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||D.attributes.normal===void 0&&_t===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:be,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:ue,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:E.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ve,decodeVideoTexture:re&&b.map.isVideoTexture===!0&&ut.getTransfer(b.map.colorSpace)===At,decodeVideoTextureEmissive:ft&&b.emissiveMap.isVideoTexture===!0&&ut.getTransfer(b.emissiveMap.colorSpace)===At,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ct,flipSided:b.side===qt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ae&&b.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&b.extensions.multiDraw===!0||G)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return De.vertexUv1s=c.has(1),De.vertexUv2s=c.has(2),De.vertexUv3s=c.has(3),c.clear(),De}function m(b){let T=[];if(b.shaderID?T.push(b.shaderID):(T.push(b.customVertexShaderID),T.push(b.customFragmentShaderID)),b.defines!==void 0)for(let P in b.defines)T.push(P),T.push(b.defines[P]);return b.isRawShaderMaterial===!1&&(p(T,b),y(T,b),T.push(n.outputColorSpace)),T.push(b.customProgramCacheKey),T.join()}function p(b,T){b.push(T.precision),b.push(T.outputColorSpace),b.push(T.envMapMode),b.push(T.envMapCubeUVHeight),b.push(T.mapUv),b.push(T.alphaMapUv),b.push(T.lightMapUv),b.push(T.aoMapUv),b.push(T.bumpMapUv),b.push(T.normalMapUv),b.push(T.displacementMapUv),b.push(T.emissiveMapUv),b.push(T.metalnessMapUv),b.push(T.roughnessMapUv),b.push(T.anisotropyMapUv),b.push(T.clearcoatMapUv),b.push(T.clearcoatNormalMapUv),b.push(T.clearcoatRoughnessMapUv),b.push(T.iridescenceMapUv),b.push(T.iridescenceThicknessMapUv),b.push(T.sheenColorMapUv),b.push(T.sheenRoughnessMapUv),b.push(T.specularMapUv),b.push(T.specularColorMapUv),b.push(T.specularIntensityMapUv),b.push(T.transmissionMapUv),b.push(T.thicknessMapUv),b.push(T.combine),b.push(T.fogExp2),b.push(T.sizeAttenuation),b.push(T.morphTargetsCount),b.push(T.morphAttributeCount),b.push(T.numSunLights),b.push(T.numDirLights),b.push(T.numPointLights),b.push(T.numSpotLights),b.push(T.numSpotLightMaps),b.push(T.numHemiLights),b.push(T.numRectAreaLights),b.push(T.numSunLightShadows),b.push(T.numDirLightShadows),b.push(T.numPointLightShadows),b.push(T.numSpotLightShadows),b.push(T.numSpotLightShadowsWithMaps),b.push(T.numLightProbes),b.push(T.shadowMapType),b.push(T.toneMapping),b.push(T.numClippingPlanes),b.push(T.numClipIntersection),b.push(T.depthPacking)}function y(b,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),b.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),b.push(o.mask)}function v(b){let T=f[b.type],P;if(T){let U=Ji[T];P=Yh.clone(U.uniforms)}else P=b.uniforms;return P}function _(b,T){let P=h.get(T);return P!==void 0?++P.usedTimes:(P=new zT(n,T,b,s),l.push(P),h.set(T,P)),P}function w(b){if(--b.usedTimes===0){let T=l.indexOf(b);l[T]=l[l.length-1],l.pop(),h.delete(b.cacheKey),b.destroy()}}function M(b){a.remove(b)}function R(){a.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:v,acquireProgram:_,releaseProgram:w,releaseShaderCache:M,programs:l,dispose:R}}function WT(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function XT(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function iy(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function sy(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,g,x,m,p){let y=n[e];return y===void 0?(y={id:d.id,object:d,geometry:f,material:g,materialVariant:o(d),groupOrder:x,renderOrder:d.renderOrder,z:m,group:p},n[e]=y):(y.id=d.id,y.object=d,y.geometry=f,y.material=g,y.materialVariant=o(d),y.groupOrder=x,y.renderOrder=d.renderOrder,y.z=m,y.group=p),e++,y}function c(d,f,g,x,m,p,y){y.reversedDepth===!0&&(m=-m);let v=a(d,f,g,x,m,p);g.transmission>0?i.push(v):g.transparent===!0?s.push(v):t.push(v)}function l(d,f,g,x,m,p){let y=a(d,f,g,x,m,p);g.transmission>0?i.unshift(y):g.transparent===!0?s.unshift(y):t.unshift(y)}function h(d,f){t.length>1&&t.sort(d||XT),i.length>1&&i.sort(f||iy),s.length>1&&s.sort(f||iy)}function u(){for(let d=e,f=n.length;d<f;d++){let g=n[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:u,sort:h}}function qT(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new sy,n.set(i,[o])):s>=r.length?(o=new sy,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function YT(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new I,color:new pe};break;case"SpotLight":t={position:new I,direction:new I,color:new pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new pe,groundColor:new pe};break;case"RectAreaLight":t={color:new pe,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function $T(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var jT=0;function KT(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function ZT(n){let e=new YT,t=$T(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new I);let s=new I,r=new Ye,o=new Ye;function a(l){let h=0,u=0,d=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,y=0,v=0,_=0,w=0,M=0,R=0,b=0,T=0,P=0;l.sort(KT);for(let O=0,E=l.length;O<E;O++){let C=l[O],D=C.color,F=C.intensity,V=C.distance,X=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Js?X=C.shadow.map.texture:X=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=D.r*F,u+=D.g*F,d+=D.b*F;else if(C.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(C.sh.coefficients[N],F);P++}else if(C.isSunLight){let N=e.get(C);if(N.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let k=C.shadow,q=t.get(C);q.shadowIntensity=k.intensity,q.shadowBias=k.bias,q.shadowNormalBias=k.normalBias,q.shadowRadius=k.radius,q.shadowMapSize.copy(k.mapSize).multiply(k.getFrameExtents()),i.sunShadow[g]=q,i.sunShadowMap[g]=X;let le=k.getViewportCount();for(let ue=0;ue<le;ue++)i.sunShadowMatrix[x+ue]=k.getMatrix(ue),i.sunShadowCascade[x+ue]=k._cascadeData[ue];x+=le,g++}i.sun[f]=N,f++}else if(C.isDirectionalLight){let N=e.get(C);if(N.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let k=C.shadow,q=t.get(C);q.shadowIntensity=k.intensity,q.shadowBias=k.bias,q.shadowNormalBias=k.normalBias,q.shadowRadius=k.radius,q.shadowMapSize=k.mapSize,i.directionalShadow[m]=q,i.directionalShadowMap[m]=X,i.directionalShadowMatrix[m]=C.shadow.matrix,w++}i.directional[m]=N,m++}else if(C.isSpotLight){let N=e.get(C);N.position.setFromMatrixPosition(C.matrixWorld),N.color.copy(D).multiplyScalar(F),N.distance=V,N.coneCos=Math.cos(C.angle),N.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),N.decay=C.decay,i.spot[y]=N;let k=C.shadow;if(C.map&&(i.spotLightMap[b]=C.map,b++,k.updateMatrices(C),C.castShadow&&T++),i.spotLightMatrix[y]=k.matrix,C.castShadow){let q=t.get(C);q.shadowIntensity=k.intensity,q.shadowBias=k.bias,q.shadowNormalBias=k.normalBias,q.shadowRadius=k.radius,q.shadowMapSize=k.mapSize,i.spotShadow[y]=q,i.spotShadowMap[y]=X,R++}y++}else if(C.isRectAreaLight){let N=e.get(C);N.color.copy(D).multiplyScalar(F),N.halfWidth.set(C.width*.5,0,0),N.halfHeight.set(0,C.height*.5,0),i.rectArea[v]=N,v++}else if(C.isPointLight){let N=e.get(C);if(N.color.copy(C.color).multiplyScalar(C.intensity),N.distance=C.distance,N.decay=C.decay,C.castShadow){let k=C.shadow,q=t.get(C);q.shadowIntensity=k.intensity,q.shadowBias=k.bias,q.shadowNormalBias=k.normalBias,q.shadowRadius=k.radius,q.shadowMapSize=k.mapSize,q.shadowCameraNear=k.camera.near,q.shadowCameraFar=k.camera.far,i.pointShadow[p]=q,i.pointShadowMap[p]=X,i.pointShadowMatrix[p]=C.shadow.matrix,M++}i.point[p]=N,p++}else if(C.isHemisphereLight){let N=e.get(C);N.skyColor.copy(C.color).multiplyScalar(F),N.groundColor.copy(C.groundColor).multiplyScalar(F),i.hemi[_]=N,_++}}v>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let U=i.hash;(U.sunLength!==f||U.directionalLength!==m||U.pointLength!==p||U.spotLength!==y||U.rectAreaLength!==v||U.hemiLength!==_||U.numSunShadows!==g||U.numDirectionalShadows!==w||U.numPointShadows!==M||U.numSpotShadows!==R||U.numSpotMaps!==b||U.numLightProbes!==P)&&(i.sun.length=f,i.directional.length=m,i.spot.length=y,i.rectArea.length=v,i.point.length=p,i.hemi.length=_,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=M,i.pointShadowMap.length=M,i.pointShadowMatrix.length=M,i.spotShadow.length=R,i.spotShadowMap.length=R,i.spotLightMatrix.length=R+b-T,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=P,U.sunLength=f,U.directionalLength=m,U.pointLength=p,U.spotLength=y,U.rectAreaLength=v,U.hemiLength=_,U.numSunShadows=g,U.numDirectionalShadows=w,U.numPointShadows=M,U.numSpotShadows=R,U.numSpotMaps=b,U.numLightProbes=P,i.version=jT++)}function c(l,h){let u=0,d=0,f=0,g=0,x=0,m=0,p=h.matrixWorldInverse;for(let y=0,v=l.length;y<v;y++){let _=l[y];if(_.isSunLight){let w=i.sun[u];w.direction.setFromMatrixPosition(_.matrixWorld),w.direction.transformDirection(p),u++}else if(_.isDirectionalLight){let w=i.directional[d];w.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),d++}else if(_.isSpotLight){let w=i.spot[g];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),g++}else if(_.isRectAreaLight){let w=i.rectArea[x];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(p),o.identity(),r.copy(_.matrixWorld),r.premultiply(p),o.extractRotation(r),w.halfWidth.set(_.width*.5,0,0),w.halfHeight.set(0,_.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),x++}else if(_.isPointLight){let w=i.point[f];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(p),f++}else if(_.isHemisphereLight){let w=i.hemi[m];w.direction.setFromMatrixPosition(_.matrixWorld),w.direction.transformDirection(p),m++}}}return{setup:a,setupView:c,state:i}}function ry(n){let e=new ZT(n),t=[],i=[],s=[];function r(d){u.camera=d,t.length=0,i.length=0,s.length=0}function o(d){t.push(d)}function a(d){i.push(d)}function c(d){s.push(d)}function l(){e.setup(t)}function h(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function JT(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new ry(n),e.set(s,[a])):r>=o.length?(a=new ry(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var QT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,tE=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],nE=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],oy=new Ye,xc=new I,Ff=new I;function iE(n,e,t){let i=new No,s=new oe,r=new oe,o=new It,a=new Yl,c=new $l,l={},h=t.maxTextureSize,u={[ji]:qt,[qt]:ji,[Ct]:Ct},d=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:QT,fragmentShader:eE}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new yt;g.setAttribute("position",new Xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ce(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dr;let p=this.type;this.render=function(M,R,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;this.type===K0&&(ke("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Dr);let T=n.getRenderTarget(),P=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),O=n.state;O.setBlending(Ki),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let E=p!==this.type;E&&R.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(D=>D.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,D=M.length;C<D;C++){let F=M[C],V=F.shadow;if(V===void 0){ke("WebGLShadowMap:",F,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let X=V.getFrameExtents();s.multiply(X),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/X.x),s.x=r.x*X.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/X.y),s.y=r.y*X.y,V.mapSize.y=r.y));let N=n.state.buffers.depth.getReversed();if(V.camera._reversedDepth=N,V.map===null||E===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Go){if(F.isPointLight){ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Hn(s.x,s.y,{format:Js,type:Pi,minFilter:Qt,magFilter:Qt,generateMipmaps:!1}),V.map.texture.name=F.name+".shadowMap",V.map.depthTexture=new Vs(s.x,s.y,Qn),V.map.depthTexture.name=F.name+".shadowMapDepth",V.map.depthTexture.format=Gi,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Kt,V.map.depthTexture.magFilter=Kt}else F.isPointLight?(V.map=new Kh(s.x),V.map.depthTexture=new Hl(s.x,Ci)):(V.map=new Hn(s.x,s.y),V.map.depthTexture=new Vs(s.x,s.y,Ci)),V.map.depthTexture.name=F.name+".shadowMap",V.map.depthTexture.format=Gi,this.type===Dr?(V.map.depthTexture.compareFunction=N?qh:Xh,V.map.depthTexture.minFilter=Qt,V.map.depthTexture.magFilter=Qt):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Kt,V.map.depthTexture.magFilter=Kt);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);let k=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();F.isPointLight!==!0&&V.updateMatrices(F,b);for(let q=0;q<k;q++){let le=V.getCamera(q);if(F.isPointLight){let ue=V.camera,Ae=V.matrix,We=F.distance||ue.far;We!==ue.far&&(ue.far=We,ue.updateProjectionMatrix()),xc.setFromMatrixPosition(F.matrixWorld),ue.position.copy(xc),Ff.copy(ue.position),Ff.add(tE[q]),ue.up.copy(nE[q]),ue.lookAt(Ff),ue.updateMatrixWorld(),Ae.makeTranslation(-xc.x,-xc.y,-xc.z),oy.multiplyMatrices(ue.projectionMatrix,ue.matrixWorldInverse),V._frustum.setFromProjectionMatrix(oy,ue.coordinateSystem,ue.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)n.setRenderTarget(V.map,q),n.clear();else{q===0&&(n.setRenderTarget(V.map),n.clear());let ue=V.getViewport(q);o.set(r.x*ue.x,r.y*ue.y,r.x*ue.z,r.y*ue.w),O.viewport(o)}i=V.getFrustum(q),_(R,b,le,F,this.type)}V.isPointLightShadow!==!0&&this.type===Go&&y(V,b),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(T,P,U)};function y(M,R){let b=e.update(x);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null?M.mapPass=new Hn(s.x,s.y,{format:Js,type:Pi}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),d.uniforms.shadow_pass.value=M.map.depthTexture,d.uniforms.resolution.value.set(M.map.width,M.map.height),d.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(R,null,b,d,x,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value.set(M.map.width,M.map.height),f.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(R,null,b,f,x,null)}function v(M,R,b,T){let P=null,U=b.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(U!==void 0)P=U;else if(P=b.isPointLight===!0?c:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let O=P.uuid,E=R.uuid,C=l[O];C===void 0&&(C={},l[O]=C);let D=C[E];D===void 0&&(D=P.clone(),C[E]=D,R.addEventListener("dispose",w)),P=D}if(P.visible=R.visible,P.wireframe=R.wireframe,T===Go?P.side=R.shadowSide!==null?R.shadowSide:R.side:P.side=R.shadowSide!==null?R.shadowSide:u[R.side],P.alphaMap=R.alphaMap,P.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,P.map=R.map,P.clipShadows=R.clipShadows,P.clippingPlanes=R.clippingPlanes,P.clipIntersection=R.clipIntersection,P.displacementMap=R.displacementMap,P.displacementScale=R.displacementScale,P.displacementBias=R.displacementBias,P.wireframeLinewidth=R.wireframeLinewidth,P.linewidth=R.linewidth,b.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let O=n.properties.get(P);O.light=b}return P}function _(M,R,b,T,P){if(M.visible===!1)return;if(M.layers.test(R.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&P===Go)&&(!M.frustumCulled||M.intersectsFrustum(i))){M.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,M.matrixWorld);let E=e.update(M),C=M.material;if(Array.isArray(C)){let D=E.groups;for(let F=0,V=D.length;F<V;F++){let X=D[F],N=C[X.materialIndex];if(N&&N.visible){let k=v(M,N,T,P);M.onBeforeShadow(n,M,R,b,E,k,X),n.renderBufferDirect(b,null,E,k,M,X),M.onAfterShadow(n,M,R,b,E,k,X)}}}else if(C.visible){let D=v(M,C,T,P);M.onBeforeShadow(n,M,R,b,E,D,null),n.renderBufferDirect(b,null,E,D,M,null),M.onAfterShadow(n,M,R,b,E,D,null)}}let O=M.children;for(let E=0,C=O.length;E<C;E++)_(O[E],R,b,T,P)}function w(M){M.target.removeEventListener("dispose",w);for(let b in l){let T=l[b],P=M.target.uuid;P in T&&(T[P].dispose(),delete T[P])}}}function sE(n,e){function t(){let H=!1,ye=new It,ie=null,xe=new It(0,0,0,0);return{setMask:function(Se){ie!==Se&&!H&&(n.colorMask(Se,Se,Se,Se),ie=Se)},setLocked:function(Se){H=Se},setClear:function(Se,ae,Ve,De,Ht){Ht===!0&&(Se*=De,ae*=De,Ve*=De),ye.set(Se,ae,Ve,De),xe.equals(ye)===!1&&(n.clearColor(Se,ae,Ve,De),xe.copy(ye))},reset:function(){H=!1,ie=null,xe.set(-1,0,0,0)}}}function i(){let H=!1,ye=!1,ie=null,xe=null,Se=null;return{setReversed:function(ae){if(ye!==ae){let Ve=e.get("EXT_clip_control");ae?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT),ye=ae;let De=Se;Se=null,this.setClear(De)}},getReversed:function(){return ye},setTest:function(ae){ae?ne(n.DEPTH_TEST):be(n.DEPTH_TEST)},setMask:function(ae){ie!==ae&&!H&&(n.depthMask(ae),ie=ae)},setFunc:function(ae){if(ye&&(ae=Ig[ae]),xe!==ae){switch(ae){case Cl:n.depthFunc(n.NEVER);break;case Pl:n.depthFunc(n.ALWAYS);break;case Il:n.depthFunc(n.LESS);break;case So:n.depthFunc(n.LEQUAL);break;case Ll:n.depthFunc(n.EQUAL);break;case Dl:n.depthFunc(n.GEQUAL);break;case Nl:n.depthFunc(n.GREATER);break;case kl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}xe=ae}},setLocked:function(ae){H=ae},setClear:function(ae){Se!==ae&&(Se=ae,ye&&(ae=1-ae),n.clearDepth(ae))},reset:function(){H=!1,ie=null,xe=null,Se=null,ye=!1}}}function s(){let H=!1,ye=null,ie=null,xe=null,Se=null,ae=null,Ve=null,De=null,Ht=null;return{setTest:function(Tt){H||(Tt?ne(n.STENCIL_TEST):be(n.STENCIL_TEST))},setMask:function(Tt){ye!==Tt&&!H&&(n.stencilMask(Tt),ye=Tt)},setFunc:function(Tt,mi,Fi){(ie!==Tt||xe!==mi||Se!==Fi)&&(n.stencilFunc(Tt,mi,Fi),ie=Tt,xe=mi,Se=Fi)},setOp:function(Tt,mi,Fi){(ae!==Tt||Ve!==mi||De!==Fi)&&(n.stencilOp(Tt,mi,Fi),ae=Tt,Ve=mi,De=Fi)},setLocked:function(Tt){H=Tt},setClear:function(Tt){Ht!==Tt&&(n.clearStencil(Tt),Ht=Tt)},reset:function(){H=!1,ye=null,ie=null,xe=null,Se=null,ae=null,Ve=null,De=null,Ht=null}}}let r=new t,o=new i,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},d={},f=new WeakMap,g=[],x=null,m=!1,p=null,y=null,v=null,_=null,w=null,M=null,R=null,b=new pe(0,0,0),T=0,P=!1,U=null,O=null,E=null,C=null,D=null,F=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,X=0,N=n.getParameter(n.VERSION);N.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(N)[1]),V=X>=1):N.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),V=X>=2);let k=null,q={},le=n.getParameter(n.SCISSOR_BOX),ue=n.getParameter(n.VIEWPORT),Ae=new It().fromArray(le),We=new It().fromArray(ue);function qe(H,ye,ie,xe){let Se=new Uint8Array(4),ae=n.createTexture();n.bindTexture(H,ae),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ve=0;Ve<ie;Ve++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(ye,0,n.RGBA,1,1,xe,0,n.RGBA,n.UNSIGNED_BYTE,Se):n.texImage2D(ye+Ve,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Se);return ae}let J={};J[n.TEXTURE_2D]=qe(n.TEXTURE_2D,n.TEXTURE_2D,1),J[n.TEXTURE_CUBE_MAP]=qe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[n.TEXTURE_2D_ARRAY]=qe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),J[n.TEXTURE_3D]=qe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ne(n.DEPTH_TEST),o.setFunc(So),et(!1),_t(of),ne(n.CULL_FACE),Xe(Ki);function ne(H){h[H]!==!0&&(n.enable(H),h[H]=!0)}function be(H){h[H]!==!1&&(n.disable(H),h[H]=!1)}function Fe(H,ye){return d[H]!==ye?(n.bindFramebuffer(H,ye),d[H]=ye,H===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ye),H===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ye),!0):!1}function G(H,ye){let ie=g,xe=!1;if(H){ie=f.get(ye),ie===void 0&&(ie=[],f.set(ye,ie));let Se=H.textures;if(ie.length!==Se.length||ie[0]!==n.COLOR_ATTACHMENT0){for(let ae=0,Ve=Se.length;ae<Ve;ae++)ie[ae]=n.COLOR_ATTACHMENT0+ae;ie.length=Se.length,xe=!0}}else ie[0]!==n.BACK&&(ie[0]=n.BACK,xe=!0);xe&&n.drawBuffers(ie)}function re(H){return x!==H?(n.useProgram(H),x=H,!0):!1}let Ue={[Nr]:n.FUNC_ADD,[J0]:n.FUNC_SUBTRACT,[Q0]:n.FUNC_REVERSE_SUBTRACT};Ue[eg]=n.MIN,Ue[tg]=n.MAX;let Te={[ng]:n.ZERO,[ig]:n.ONE,[sg]:n.SRC_COLOR,[lf]:n.SRC_ALPHA,[hg]:n.SRC_ALPHA_SATURATE,[cg]:n.DST_COLOR,[og]:n.DST_ALPHA,[rg]:n.ONE_MINUS_SRC_COLOR,[hf]:n.ONE_MINUS_SRC_ALPHA,[lg]:n.ONE_MINUS_DST_COLOR,[ag]:n.ONE_MINUS_DST_ALPHA,[ug]:n.CONSTANT_COLOR,[dg]:n.ONE_MINUS_CONSTANT_COLOR,[fg]:n.CONSTANT_ALPHA,[pg]:n.ONE_MINUS_CONSTANT_ALPHA};function Xe(H,ye,ie,xe,Se,ae,Ve,De,Ht,Tt){if(H===Ki){m===!0&&(be(n.BLEND),m=!1);return}if(m===!1&&(ne(n.BLEND),m=!0),H!==Z0){if(H!==p||Tt!==P){if((y!==Nr||w!==Nr)&&(n.blendEquation(n.FUNC_ADD),y=Nr,w=Nr),Tt)switch(H){case Vo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ei:n.blendFunc(n.ONE,n.ONE);break;case af:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case cf:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:je("WebGLState: Invalid blending: ",H);break}else switch(H){case Vo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ei:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case af:je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case cf:je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:je("WebGLState: Invalid blending: ",H);break}v=null,_=null,M=null,R=null,b.set(0,0,0),T=0,p=H,P=Tt}return}Se=Se||ye,ae=ae||ie,Ve=Ve||xe,(ye!==y||Se!==w)&&(n.blendEquationSeparate(Ue[ye],Ue[Se]),y=ye,w=Se),(ie!==v||xe!==_||ae!==M||Ve!==R)&&(n.blendFuncSeparate(Te[ie],Te[xe],Te[ae],Te[Ve]),v=ie,_=xe,M=ae,R=Ve),(De.equals(b)===!1||Ht!==T)&&(n.blendColor(De.r,De.g,De.b,Ht),b.copy(De),T=Ht),p=H,P=!1}function gt(H,ye){H.side===Ct?be(n.CULL_FACE):ne(n.CULL_FACE);let ie=H.side===qt;ye&&(ie=!ie),et(ie),H.blending===Vo&&H.transparent===!1?Xe(Ki):Xe(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);let xe=H.stencilWrite;a.setTest(xe),xe&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),ft(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ne(n.SAMPLE_ALPHA_TO_COVERAGE):be(n.SAMPLE_ALPHA_TO_COVERAGE)}function et(H){U!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),U=H)}function _t(H){H!==$0?(ne(n.CULL_FACE),H!==O&&(H===of?n.cullFace(n.BACK):H===j0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):be(n.CULL_FACE),O=H}function Ze(H){H!==E&&(V&&n.lineWidth(H),E=H)}function ft(H,ye,ie){H?(ne(n.POLYGON_OFFSET_FILL),(C!==ye||D!==ie)&&(C=ye,D=ie,o.getReversed()&&(ye=-ye),n.polygonOffset(ye,ie))):be(n.POLYGON_OFFSET_FILL)}function vt(H){H?ne(n.SCISSOR_TEST):be(n.SCISSOR_TEST)}function Ge(H){H===void 0&&(H=n.TEXTURE0+F-1),k!==H&&(n.activeTexture(H),k=H)}function B(H,ye,ie){ie===void 0&&(k===null?ie=n.TEXTURE0+F-1:ie=k);let xe=q[ie];xe===void 0&&(xe={type:void 0,texture:void 0},q[ie]=xe),(xe.type!==H||xe.texture!==ye)&&(k!==ie&&(n.activeTexture(ie),k=ie),n.bindTexture(H,ye||J[H]),xe.type=H,xe.texture=ye)}function tt(){let H=q[k];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function at(){try{n.compressedTexImage2D(...arguments)}catch(H){je("WebGLState:",H)}}function L(){try{n.compressedTexImage3D(...arguments)}catch(H){je("WebGLState:",H)}}function S(){try{n.texSubImage2D(...arguments)}catch(H){je("WebGLState:",H)}}function W(){try{n.texSubImage3D(...arguments)}catch(H){je("WebGLState:",H)}}function K(){try{n.compressedTexSubImage2D(...arguments)}catch(H){je("WebGLState:",H)}}function Q(){try{n.compressedTexSubImage3D(...arguments)}catch(H){je("WebGLState:",H)}}function de(){try{n.texStorage2D(...arguments)}catch(H){je("WebGLState:",H)}}function fe(){try{n.texStorage3D(...arguments)}catch(H){je("WebGLState:",H)}}function ee(){try{n.texImage2D(...arguments)}catch(H){je("WebGLState:",H)}}function se(){try{n.texImage3D(...arguments)}catch(H){je("WebGLState:",H)}}function me(H){return u[H]!==void 0?u[H]:n.getParameter(H)}function Be(H,ye){u[H]!==ye&&(n.pixelStorei(H,ye),u[H]=ye)}function _e(H){Ae.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),Ae.copy(H))}function ge(H){We.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),We.copy(H))}function ze(H,ye){let ie=l.get(ye);ie===void 0&&(ie=new WeakMap,l.set(ye,ie));let xe=ie.get(H);xe===void 0&&(xe=n.getUniformBlockIndex(ye,H.name),ie.set(H,xe))}function $e(H,ye){let xe=l.get(ye).get(H);c.get(ye)!==xe&&(n.uniformBlockBinding(ye,xe,H.__bindingPointIndex),c.set(ye,xe))}function rt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},u={},k=null,q={},d={},f=new WeakMap,g=[],x=null,m=!1,p=null,y=null,v=null,_=null,w=null,M=null,R=null,b=new pe(0,0,0),T=0,P=!1,U=null,O=null,E=null,C=null,D=null,Ae.set(0,0,n.canvas.width,n.canvas.height),We.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ne,disable:be,bindFramebuffer:Fe,drawBuffers:G,useProgram:re,setBlending:Xe,setMaterial:gt,setFlipSided:et,setCullFace:_t,setLineWidth:Ze,setPolygonOffset:ft,setScissorTest:vt,activeTexture:Ge,bindTexture:B,unbindTexture:tt,compressedTexImage2D:at,compressedTexImage3D:L,texImage2D:ee,texImage3D:se,pixelStorei:Be,getParameter:me,updateUBOMapping:ze,uniformBlockBinding:$e,texStorage2D:de,texStorage3D:fe,texSubImage2D:S,texSubImage3D:W,compressedTexSubImage2D:K,compressedTexSubImage3D:Q,scissor:_e,viewport:ge,reset:rt}}function rE(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new oe,h=new WeakMap,u=new Set,d,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(L,S){return g?new OffscreenCanvas(L,S):Ao("canvas")}function m(L,S,W){let K=1,Q=at(L);if((Q.width>W||Q.height>W)&&(K=W/Math.max(Q.width,Q.height)),K<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let de=Math.floor(K*Q.width),fe=Math.floor(K*Q.height);d===void 0&&(d=x(de,fe));let ee=S?x(de,fe):d;return ee.width=de,ee.height=fe,ee.getContext("2d").drawImage(L,0,0,de,fe),ke("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+de+"x"+fe+")."),ee}else return"data"in L&&ke("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),L;return L}function p(L){return L.generateMipmaps}function y(L){n.generateMipmap(L)}function v(L){return L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?n.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(L,S,W,K,Q,de=!1){if(L!==null){if(n[L]!==void 0)return n[L];ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let fe;K&&(fe=e.get("EXT_texture_norm16"),fe||ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=S;if(S===n.RED&&(W===n.FLOAT&&(ee=n.R32F),W===n.HALF_FLOAT&&(ee=n.R16F),W===n.UNSIGNED_BYTE&&(ee=n.R8),W===n.UNSIGNED_SHORT&&fe&&(ee=fe.R16_EXT),W===n.SHORT&&fe&&(ee=fe.R16_SNORM_EXT)),S===n.RED_INTEGER&&(W===n.UNSIGNED_BYTE&&(ee=n.R8UI),W===n.UNSIGNED_SHORT&&(ee=n.R16UI),W===n.UNSIGNED_INT&&(ee=n.R32UI),W===n.BYTE&&(ee=n.R8I),W===n.SHORT&&(ee=n.R16I),W===n.INT&&(ee=n.R32I)),S===n.RG&&(W===n.FLOAT&&(ee=n.RG32F),W===n.HALF_FLOAT&&(ee=n.RG16F),W===n.UNSIGNED_BYTE&&(ee=n.RG8),W===n.UNSIGNED_SHORT&&fe&&(ee=fe.RG16_EXT),W===n.SHORT&&fe&&(ee=fe.RG16_SNORM_EXT)),S===n.RG_INTEGER&&(W===n.UNSIGNED_BYTE&&(ee=n.RG8UI),W===n.UNSIGNED_SHORT&&(ee=n.RG16UI),W===n.UNSIGNED_INT&&(ee=n.RG32UI),W===n.BYTE&&(ee=n.RG8I),W===n.SHORT&&(ee=n.RG16I),W===n.INT&&(ee=n.RG32I)),S===n.RGB_INTEGER&&(W===n.UNSIGNED_BYTE&&(ee=n.RGB8UI),W===n.UNSIGNED_SHORT&&(ee=n.RGB16UI),W===n.UNSIGNED_INT&&(ee=n.RGB32UI),W===n.BYTE&&(ee=n.RGB8I),W===n.SHORT&&(ee=n.RGB16I),W===n.INT&&(ee=n.RGB32I)),S===n.RGBA_INTEGER&&(W===n.UNSIGNED_BYTE&&(ee=n.RGBA8UI),W===n.UNSIGNED_SHORT&&(ee=n.RGBA16UI),W===n.UNSIGNED_INT&&(ee=n.RGBA32UI),W===n.BYTE&&(ee=n.RGBA8I),W===n.SHORT&&(ee=n.RGBA16I),W===n.INT&&(ee=n.RGBA32I)),S===n.RGB&&(W===n.UNSIGNED_SHORT&&fe&&(ee=fe.RGB16_EXT),W===n.SHORT&&fe&&(ee=fe.RGB16_SNORM_EXT),W===n.UNSIGNED_INT_5_9_9_9_REV&&(ee=n.RGB9_E5),W===n.UNSIGNED_INT_10F_11F_11F_REV&&(ee=n.R11F_G11F_B10F)),S===n.RGBA){let se=de?Aa:ut.getTransfer(Q);W===n.FLOAT&&(ee=n.RGBA32F),W===n.HALF_FLOAT&&(ee=n.RGBA16F),W===n.UNSIGNED_BYTE&&(ee=se===At?n.SRGB8_ALPHA8:n.RGBA8),W===n.UNSIGNED_SHORT&&fe&&(ee=fe.RGBA16_EXT),W===n.SHORT&&fe&&(ee=fe.RGBA16_SNORM_EXT),W===n.UNSIGNED_SHORT_4_4_4_4&&(ee=n.RGBA4),W===n.UNSIGNED_SHORT_5_5_5_1&&(ee=n.RGB5_A1)}return(ee===n.R16F||ee===n.R32F||ee===n.RG16F||ee===n.RG32F||ee===n.RGBA16F||ee===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function w(L,S){let W;return L?S===null||S===Ci||S===qo?W=n.DEPTH24_STENCIL8:S===Qn?W=n.DEPTH32F_STENCIL8:S===Xo&&(W=n.DEPTH24_STENCIL8,ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ci||S===qo?W=n.DEPTH_COMPONENT24:S===Qn?W=n.DEPTH_COMPONENT32F:S===Xo&&(W=n.DEPTH_COMPONENT16),W}function M(L,S){return p(L)===!0||L.isFramebufferTexture&&L.minFilter!==Kt&&L.minFilter!==Qt?Math.log2(Math.max(S.width,S.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?S.mipmaps.length:1}function R(L){let S=L.target;S.removeEventListener("dispose",R),T(S),S.isVideoTexture&&h.delete(S),S.isHTMLTexture&&u.delete(S)}function b(L){let S=L.target;S.removeEventListener("dispose",b),U(S)}function T(L){let S=i.get(L);if(S.__webglInit===void 0)return;let W=L.source,K=f.get(W);if(K){let Q=K[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&P(L),Object.keys(K).length===0&&f.delete(W)}i.remove(L)}function P(L){let S=i.get(L);n.deleteTexture(S.__webglTexture);let W=L.source,K=f.get(W);delete K[S.__cacheKey],o.memory.textures--}function U(L){let S=i.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),i.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(S.__webglFramebuffer[K]))for(let Q=0;Q<S.__webglFramebuffer[K].length;Q++)n.deleteFramebuffer(S.__webglFramebuffer[K][Q]);else n.deleteFramebuffer(S.__webglFramebuffer[K]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[K])}else{if(Array.isArray(S.__webglFramebuffer))for(let K=0;K<S.__webglFramebuffer.length;K++)n.deleteFramebuffer(S.__webglFramebuffer[K]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let K=0;K<S.__webglColorRenderbuffer.length;K++)S.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[K]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let W=L.textures;for(let K=0,Q=W.length;K<Q;K++){let de=i.get(W[K]);de.__webglTexture&&(n.deleteTexture(de.__webglTexture),o.memory.textures--),i.remove(W[K])}i.remove(L)}let O=0;function E(){O=0}function C(){return O}function D(L){O=L}function F(){let L=O;return L>=s.maxTextures&&ke("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+s.maxTextures),O+=1,L}function V(L){let S=[];return S.push(L.wrapS),S.push(L.wrapT),S.push(L.wrapR||0),S.push(L.magFilter),S.push(L.minFilter),S.push(L.anisotropy),S.push(L.internalFormat),S.push(L.format),S.push(L.type),S.push(L.generateMipmaps),S.push(L.premultiplyAlpha),S.push(L.flipY),S.push(L.unpackAlignment),S.push(L.colorSpace),S.join()}function X(L,S){let W=i.get(L);if(L.isVideoTexture&&B(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&W.__version!==L.version){let K=L.image;if(K===null)ke("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)ke("WebGLRenderer: Texture marked for update but image is incomplete");else{be(W,L,S);return}}else L.isExternalTexture&&(W.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,W.__webglTexture,n.TEXTURE0+S)}function N(L,S){let W=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&W.__version!==L.version){be(W,L,S);return}else L.isExternalTexture&&(W.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,W.__webglTexture,n.TEXTURE0+S)}function k(L,S){let W=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&W.__version!==L.version){be(W,L,S);return}t.bindTexture(n.TEXTURE_3D,W.__webglTexture,n.TEXTURE0+S)}function q(L,S){let W=i.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&W.__version!==L.version){Fe(W,L,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+S)}let le={[bi]:n.REPEAT,[oi]:n.CLAMP_TO_EDGE,[To]:n.MIRRORED_REPEAT},ue={[Kt]:n.NEAREST,[ah]:n.NEAREST_MIPMAP_NEAREST,[Ur]:n.NEAREST_MIPMAP_LINEAR,[Qt]:n.LINEAR,[Wo]:n.LINEAR_MIPMAP_NEAREST,[Ri]:n.LINEAR_MIPMAP_LINEAR},Ae={[Mg]:n.NEVER,[Ag]:n.ALWAYS,[wg]:n.LESS,[Xh]:n.LEQUAL,[Sg]:n.EQUAL,[qh]:n.GEQUAL,[Tg]:n.GREATER,[Eg]:n.NOTEQUAL};function We(L,S){if(S.type===Qn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Qt||S.magFilter===Wo||S.magFilter===Ur||S.magFilter===Ri||S.minFilter===Qt||S.minFilter===Wo||S.minFilter===Ur||S.minFilter===Ri)&&ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(L,n.TEXTURE_WRAP_S,le[S.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,le[S.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,le[S.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,ue[S.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,ue[S.minFilter]),S.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,Ae[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Kt||S.minFilter!==Ur&&S.minFilter!==Ri||S.type===Qn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let W=e.get("EXT_texture_filter_anisotropic");n.texParameterf(L,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function qe(L,S){let W=!1;L.__webglInit===void 0&&(L.__webglInit=!0,S.addEventListener("dispose",R));let K=S.source,Q=f.get(K);Q===void 0&&(Q={},f.set(K,Q));let de=V(S);if(de!==L.__cacheKey){Q[de]===void 0&&(Q[de]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,W=!0),Q[de].usedTimes++;let fe=Q[L.__cacheKey];fe!==void 0&&(Q[L.__cacheKey].usedTimes--,fe.usedTimes===0&&P(S)),L.__cacheKey=de,L.__webglTexture=Q[de].texture}return W}function J(L,S,W){return Math.floor(Math.floor(L/W)/S)}function ne(L,S,W,K){let de=L.updateRanges;if(de.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,S.width,S.height,W,K,S.data);else{de.sort((Be,_e)=>Be.start-_e.start);let fe=0;for(let Be=1;Be<de.length;Be++){let _e=de[fe],ge=de[Be],ze=_e.start+_e.count,$e=J(ge.start,S.width,4),rt=J(_e.start,S.width,4);ge.start<=ze+1&&$e===rt&&J(ge.start+ge.count-1,S.width,4)===$e?_e.count=Math.max(_e.count,ge.start+ge.count-_e.start):(++fe,de[fe]=ge)}de.length=fe+1;let ee=t.getParameter(n.UNPACK_ROW_LENGTH),se=t.getParameter(n.UNPACK_SKIP_PIXELS),me=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,S.width);for(let Be=0,_e=de.length;Be<_e;Be++){let ge=de[Be],ze=Math.floor(ge.start/4),$e=Math.ceil(ge.count/4),rt=ze%S.width,H=Math.floor(ze/S.width),ye=$e,ie=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,rt),t.pixelStorei(n.UNPACK_SKIP_ROWS,H),t.texSubImage2D(n.TEXTURE_2D,0,rt,H,ye,ie,W,K,S.data)}L.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ee),t.pixelStorei(n.UNPACK_SKIP_PIXELS,se),t.pixelStorei(n.UNPACK_SKIP_ROWS,me)}}function be(L,S,W){let K=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(K=n.TEXTURE_3D);let Q=qe(L,S),de=S.source;t.bindTexture(K,L.__webglTexture,n.TEXTURE0+W);let fe=i.get(de);if(de.version!==fe.__version||Q===!0){if(t.activeTexture(n.TEXTURE0+W),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let ie=ut.getPrimaries(ut.workingColorSpace),xe=S.colorSpace===Ii?null:ut.getPrimaries(S.colorSpace),Se=S.colorSpace===Ii||ie===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se)}t.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment);let se=m(S.image,!1,s.maxTextureSize);se=tt(S,se);let me=r.convert(S.format,S.colorSpace),Be=r.convert(S.type),_e=_(S.internalFormat,me,Be,S.normalized,S.colorSpace,S.isVideoTexture);We(K,S);let ge,ze=S.mipmaps,$e=S.isVideoTexture!==!0,rt=fe.__version===void 0||Q===!0,H=de.dataReady,ye=M(S,se);if(S.isDepthTexture)_e=w(S.format===Zs,S.type),rt&&($e?t.texStorage2D(n.TEXTURE_2D,1,_e,se.width,se.height):t.texImage2D(n.TEXTURE_2D,0,_e,se.width,se.height,0,me,Be,null));else if(S.isDataTexture)if(ze.length>0){$e&&rt&&t.texStorage2D(n.TEXTURE_2D,ye,_e,ze[0].width,ze[0].height);for(let ie=0,xe=ze.length;ie<xe;ie++)ge=ze[ie],$e?H&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,ge.width,ge.height,me,Be,ge.data):t.texImage2D(n.TEXTURE_2D,ie,_e,ge.width,ge.height,0,me,Be,ge.data);S.generateMipmaps=!1}else $e?(rt&&t.texStorage2D(n.TEXTURE_2D,ye,_e,se.width,se.height),H&&ne(S,se,me,Be)):t.texImage2D(n.TEXTURE_2D,0,_e,se.width,se.height,0,me,Be,se.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){$e&&rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,_e,ze[0].width,ze[0].height,se.depth);for(let ie=0,xe=ze.length;ie<xe;ie++)if(ge=ze[ie],S.format!==ei)if(me!==null)if($e){if(H)if(S.layerUpdates.size>0){let Se=Lf(ge.width,ge.height,S.format,S.type);for(let ae of S.layerUpdates){let Ve=ge.data.subarray(ae*Se/ge.data.BYTES_PER_ELEMENT,(ae+1)*Se/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,ae,ge.width,ge.height,1,me,Ve)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,ge.width,ge.height,se.depth,me,ge.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ie,_e,ge.width,ge.height,se.depth,0,ge.data,0,0);else ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $e?H&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,ge.width,ge.height,se.depth,me,Be,ge.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ie,_e,ge.width,ge.height,se.depth,0,me,Be,ge.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{$e&&rt&&t.texStorage2D(n.TEXTURE_2D,ye,_e,ze[0].width,ze[0].height);for(let ie=0,xe=ze.length;ie<xe;ie++)ge=ze[ie],S.format!==ei?me!==null?$e?H&&t.compressedTexSubImage2D(n.TEXTURE_2D,ie,0,0,ge.width,ge.height,me,ge.data):t.compressedTexImage2D(n.TEXTURE_2D,ie,_e,ge.width,ge.height,0,ge.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?H&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,ge.width,ge.height,me,Be,ge.data):t.texImage2D(n.TEXTURE_2D,ie,_e,ge.width,ge.height,0,me,Be,ge.data)}else if(S.isDataArrayTexture)if($e){if(rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,_e,se.width,se.height,se.depth),H)if(S.layerUpdates.size>0){let ie=Lf(se.width,se.height,S.format,S.type);for(let xe of S.layerUpdates){let Se=se.data.subarray(xe*ie/se.data.BYTES_PER_ELEMENT,(xe+1)*ie/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,xe,se.width,se.height,1,me,Be,Se)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,me,Be,se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,_e,se.width,se.height,se.depth,0,me,Be,se.data);else if(S.isData3DTexture)$e?(rt&&t.texStorage3D(n.TEXTURE_3D,ye,_e,se.width,se.height,se.depth),H&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,me,Be,se.data)):t.texImage3D(n.TEXTURE_3D,0,_e,se.width,se.height,se.depth,0,me,Be,se.data);else if(S.isFramebufferTexture){if(rt)if($e)t.texStorage2D(n.TEXTURE_2D,ye,_e,se.width,se.height);else{let ie=se.width,xe=se.height;for(let Se=0;Se<ye;Se++)t.texImage2D(n.TEXTURE_2D,Se,_e,ie,xe,0,me,Be,null),ie>>=1,xe>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in n){let ie=n.canvas;if(ie.hasAttribute("layoutsubtree")||ie.setAttribute("layoutsubtree","true"),se.parentNode!==ie){ie.appendChild(se),u.add(S),ie.onpaint=xe=>{let Se=xe.changedElements;for(let ae of u)Se.includes(ae.image)&&(ae.needsUpdate=!0)},ie.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,se);else{let Se=n.RGBA,ae=n.RGBA,Ve=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Se,ae,Ve,se)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ze.length>0){if($e&&rt){let ie=at(ze[0]);t.texStorage2D(n.TEXTURE_2D,ye,_e,ie.width,ie.height)}for(let ie=0,xe=ze.length;ie<xe;ie++)ge=ze[ie],$e?H&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,me,Be,ge):t.texImage2D(n.TEXTURE_2D,ie,_e,me,Be,ge);S.generateMipmaps=!1}else if($e){if(rt){let ie=at(se);t.texStorage2D(n.TEXTURE_2D,ye,_e,ie.width,ie.height)}H&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,me,Be,se)}else t.texImage2D(n.TEXTURE_2D,0,_e,me,Be,se);p(S)&&y(K),fe.__version=de.version,S.onUpdate&&S.onUpdate(S)}L.__version=S.version}function Fe(L,S,W){if(S.image.length!==6)return;let K=qe(L,S),Q=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+W);let de=i.get(Q);if(Q.version!==de.__version||K===!0){t.activeTexture(n.TEXTURE0+W);let fe=ut.getPrimaries(ut.workingColorSpace),ee=S.colorSpace===Ii?null:ut.getPrimaries(S.colorSpace),se=S.colorSpace===Ii||fe===ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let me=S.isCompressedTexture||S.image[0].isCompressedTexture,Be=S.image[0]&&S.image[0].isDataTexture,_e=[];for(let ae=0;ae<6;ae++)!me&&!Be?_e[ae]=m(S.image[ae],!0,s.maxCubemapSize):_e[ae]=Be?S.image[ae].image:S.image[ae],_e[ae]=tt(S,_e[ae]);let ge=_e[0],ze=r.convert(S.format,S.colorSpace),$e=r.convert(S.type),rt=_(S.internalFormat,ze,$e,S.normalized,S.colorSpace),H=S.isVideoTexture!==!0,ye=de.__version===void 0||K===!0,ie=Q.dataReady,xe=M(S,ge);We(n.TEXTURE_CUBE_MAP,S);let Se;if(me){H&&ye&&t.texStorage2D(n.TEXTURE_CUBE_MAP,xe,rt,ge.width,ge.height);for(let ae=0;ae<6;ae++){Se=_e[ae].mipmaps;for(let Ve=0;Ve<Se.length;Ve++){let De=Se[Ve];S.format!==ei?ze!==null?H?ie&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ve,0,0,De.width,De.height,ze,De.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ve,rt,De.width,De.height,0,De.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ve,0,0,De.width,De.height,ze,$e,De.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ve,rt,De.width,De.height,0,ze,$e,De.data)}}}else{if(Se=S.mipmaps,H&&ye){Se.length>0&&xe++;let ae=at(_e[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,xe,rt,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(Be){H?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,_e[ae].width,_e[ae].height,ze,$e,_e[ae].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,rt,_e[ae].width,_e[ae].height,0,ze,$e,_e[ae].data);for(let Ve=0;Ve<Se.length;Ve++){let Ht=Se[Ve].image[ae].image;H?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ve+1,0,0,Ht.width,Ht.height,ze,$e,Ht.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ve+1,rt,Ht.width,Ht.height,0,ze,$e,Ht.data)}}else{H?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,ze,$e,_e[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,rt,ze,$e,_e[ae]);for(let Ve=0;Ve<Se.length;Ve++){let De=Se[Ve];H?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ve+1,0,0,ze,$e,De.image[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ve+1,rt,ze,$e,De.image[ae])}}}p(S)&&y(n.TEXTURE_CUBE_MAP),de.__version=Q.version,S.onUpdate&&S.onUpdate(S)}L.__version=S.version}function G(L,S,W,K,Q,de){let fe=r.convert(W.format,W.colorSpace),ee=r.convert(W.type),se=_(W.internalFormat,fe,ee,W.normalized,W.colorSpace),me=i.get(S),Be=i.get(W);if(Be.__renderTarget=S,!me.__hasExternalTextures){let _e=Math.max(1,S.width>>de),ge=Math.max(1,S.height>>de);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,de,se,_e,ge,S.depth,0,fe,ee,null):t.texImage2D(Q,de,se,_e,ge,0,fe,ee,null)}t.bindFramebuffer(n.FRAMEBUFFER,L),Ge(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,Q,Be.__webglTexture,0,vt(S)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,Q,Be.__webglTexture,de),t.bindFramebuffer(n.FRAMEBUFFER,null)}function re(L,S,W){if(n.bindRenderbuffer(n.RENDERBUFFER,L),S.depthBuffer){let K=S.depthTexture,Q=K&&K.isDepthTexture?K.type:null,de=w(S.stencilBuffer,Q),fe=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ge(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,vt(S),de,S.width,S.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,vt(S),de,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,de,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,fe,n.RENDERBUFFER,L)}else{let K=S.textures;for(let Q=0;Q<K.length;Q++){let de=K[Q],fe=r.convert(de.format,de.colorSpace),ee=r.convert(de.type),se=_(de.internalFormat,fe,ee,de.normalized,de.colorSpace);Ge(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,vt(S),se,S.width,S.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,vt(S),se,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,se,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ue(L,S,W){let K=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,L),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=i.get(S.depthTexture);if(Q.__renderTarget=S,(!Q.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),K){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,S.depthTexture.addEventListener("dispose",R)),Q.__webglTexture===void 0){Q.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),We(n.TEXTURE_CUBE_MAP,S.depthTexture);let me=r.convert(S.depthTexture.format),Be=r.convert(S.depthTexture.type),_e;S.depthTexture.format===Gi?_e=n.DEPTH_COMPONENT24:S.depthTexture.format===Zs&&(_e=n.DEPTH24_STENCIL8);for(let ge=0;ge<6;ge++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,_e,S.width,S.height,0,me,Be,null)}}else X(S.depthTexture,0);let de=Q.__webglTexture,fe=vt(S),ee=K?n.TEXTURE_CUBE_MAP_POSITIVE_X+W:n.TEXTURE_2D,se=S.depthTexture.format===Zs?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(S.depthTexture.format===Gi)Ge(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,se,ee,de,0,fe):n.framebufferTexture2D(n.FRAMEBUFFER,se,ee,de,0);else if(S.depthTexture.format===Zs)Ge(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,se,ee,de,0,fe):n.framebufferTexture2D(n.FRAMEBUFFER,se,ee,de,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Te(L){let S=i.get(L),W=L.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==L.depthTexture){let K=L.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),K){let Q=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,K.removeEventListener("dispose",Q)};K.addEventListener("dispose",Q),S.__depthDisposeCallback=Q}S.__boundDepthTexture=K}if(L.depthTexture&&!S.__autoAllocateDepthBuffer)if(W)for(let K=0;K<6;K++)Ue(S.__webglFramebuffer[K],L,K);else{let K=L.texture.mipmaps;K&&K.length>0?Ue(S.__webglFramebuffer[0],L,0):Ue(S.__webglFramebuffer,L,0)}else if(W){S.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[K]),S.__webglDepthbuffer[K]===void 0)S.__webglDepthbuffer[K]=n.createRenderbuffer(),re(S.__webglDepthbuffer[K],L,!1);else{let Q=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=S.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,de),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,de)}}else{let K=L.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),re(S.__webglDepthbuffer,L,!1);else{let Q=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,de),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,de)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Xe(L,S,W){let K=i.get(L);S!==void 0&&G(K.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),W!==void 0&&Te(L)}function gt(L){let S=L.texture,W=i.get(L),K=i.get(S);L.addEventListener("dispose",b);let Q=L.textures,de=L.isWebGLCubeRenderTarget===!0,fe=Q.length>1;if(fe||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=S.version,o.memory.textures++),de){W.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(S.mipmaps&&S.mipmaps.length>0){W.__webglFramebuffer[ee]=[];for(let se=0;se<S.mipmaps.length;se++)W.__webglFramebuffer[ee][se]=n.createFramebuffer()}else W.__webglFramebuffer[ee]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){W.__webglFramebuffer=[];for(let ee=0;ee<S.mipmaps.length;ee++)W.__webglFramebuffer[ee]=n.createFramebuffer()}else W.__webglFramebuffer=n.createFramebuffer();if(fe)for(let ee=0,se=Q.length;ee<se;ee++){let me=i.get(Q[ee]);me.__webglTexture===void 0&&(me.__webglTexture=n.createTexture(),o.memory.textures++)}if(L.samples>0&&Ge(L)===!1){W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ee=0;ee<Q.length;ee++){let se=Q[ee];W.__webglColorRenderbuffer[ee]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,W.__webglColorRenderbuffer[ee]);let me=r.convert(se.format,se.colorSpace),Be=r.convert(se.type),_e=_(se.internalFormat,me,Be,se.normalized,se.colorSpace,L.isXRRenderTarget===!0),ge=vt(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,ge,_e,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ee,n.RENDERBUFFER,W.__webglColorRenderbuffer[ee])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),re(W.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(de){t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),We(n.TEXTURE_CUBE_MAP,S);for(let ee=0;ee<6;ee++)if(S.mipmaps&&S.mipmaps.length>0)for(let se=0;se<S.mipmaps.length;se++)G(W.__webglFramebuffer[ee][se],L,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,se);else G(W.__webglFramebuffer[ee],L,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);p(S)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){for(let ee=0,se=Q.length;ee<se;ee++){let me=Q[ee],Be=i.get(me),_e=n.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(_e=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(_e,Be.__webglTexture),We(_e,me),G(W.__webglFramebuffer,L,me,n.COLOR_ATTACHMENT0+ee,_e,0),p(me)&&y(_e)}t.unbindTexture()}else{let ee=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ee=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ee,K.__webglTexture),We(ee,S),S.mipmaps&&S.mipmaps.length>0)for(let se=0;se<S.mipmaps.length;se++)G(W.__webglFramebuffer[se],L,S,n.COLOR_ATTACHMENT0,ee,se);else G(W.__webglFramebuffer,L,S,n.COLOR_ATTACHMENT0,ee,0);p(S)&&y(ee),t.unbindTexture()}L.depthBuffer&&Te(L)}function et(L){let S=L.textures;for(let W=0,K=S.length;W<K;W++){let Q=S[W];if(p(Q)){let de=v(L),fe=i.get(Q).__webglTexture;t.bindTexture(de,fe),y(de),t.unbindTexture()}}}let _t=[],Ze=[];function ft(L){if(L.samples>0){if(Ge(L)===!1){let S=L.textures,W=L.width,K=L.height,Q=n.COLOR_BUFFER_BIT,de=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=i.get(L),ee=S.length>1;if(ee)for(let me=0;me<S.length;me++)t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer);let se=L.texture.mipmaps;se&&se.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let me=0;me<S.length;me++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),ee){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,fe.__webglColorRenderbuffer[me]);let Be=i.get(S[me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Be,0)}n.blitFramebuffer(0,0,W,K,0,0,W,K,Q,n.NEAREST),c===!0&&(_t.length=0,Ze.length=0,_t.push(n.COLOR_ATTACHMENT0+me),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&(_t.push(de),Ze.push(de),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ze)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,_t))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ee)for(let me=0;me<S.length;me++){t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,fe.__webglColorRenderbuffer[me]);let Be=i.get(S[me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,Be,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&c){let S=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function vt(L){return Math.min(s.maxSamples,L.samples)}function Ge(L){let S=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function B(L){let S=o.render.frame;h.get(L)!==S&&(h.set(L,S),L.update())}function tt(L,S){let W=L.colorSpace,K=L.format,Q=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||W!==kn&&W!==Ii&&(ut.getTransfer(W)===At?(K!==ei||Q!==Wn)&&ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):je("WebGLTextures: Unsupported texture color space:",W)),S}function at(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(l.width=L.naturalWidth||L.width,l.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(l.width=L.displayWidth,l.height=L.displayHeight):(l.width=L.width,l.height=L.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=E,this.getTextureUnits=C,this.setTextureUnits=D,this.setTexture2D=X,this.setTexture2DArray=N,this.setTexture3D=k,this.setTextureCube=q,this.rebindTextures=Xe,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=ft,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=G,this.useMultisampledRTT=Ge,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function oE(n,e){function t(i,s=Ii){let r,o=ut.getTransfer(s);if(i===Wn)return n.UNSIGNED_BYTE;if(i===lh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===hh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===vf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===bf)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===xf)return n.BYTE;if(i===_f)return n.SHORT;if(i===Xo)return n.UNSIGNED_SHORT;if(i===ch)return n.INT;if(i===Ci)return n.UNSIGNED_INT;if(i===Qn)return n.FLOAT;if(i===Pi)return n.HALF_FLOAT;if(i===Mf)return n.ALPHA;if(i===wf)return n.RGB;if(i===ei)return n.RGBA;if(i===Gi)return n.DEPTH_COMPONENT;if(i===Zs)return n.DEPTH_STENCIL;if(i===uh)return n.RED;if(i===dh)return n.RED_INTEGER;if(i===Js)return n.RG;if(i===fh)return n.RG_INTEGER;if(i===ph)return n.RGBA_INTEGER;if(i===lc||i===hc||i===uc||i===dc)if(o===At)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===lc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===hc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===uc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===dc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===lc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===hc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===uc)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===dc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===mh||i===gh||i===yh||i===xh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===mh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===gh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===yh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===xh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===_h||i===vh||i===bh||i===Mh||i===wh||i===fc||i===Sh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===_h||i===vh)return o===At?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===bh)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Mh)return r.COMPRESSED_R11_EAC;if(i===wh)return r.COMPRESSED_SIGNED_R11_EAC;if(i===fc)return r.COMPRESSED_RG11_EAC;if(i===Sh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Th||i===Eh||i===Ah||i===Rh||i===Ch||i===Ph||i===Ih||i===Lh||i===Dh||i===Nh||i===kh||i===Uh||i===Oh||i===Fh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Th)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Eh)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ah)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Rh)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ch)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ph)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ih)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Lh)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Dh)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Nh)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===kh)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Uh)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Oh)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Fh)return o===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Bh||i===zh||i===Hh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Bh)return o===At?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===zh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Hh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Gh||i===Vh||i===pc||i===Wh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Gh)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Vh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===pc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Wh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===qo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var aE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,qf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Oa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new bn({vertexShader:aE,fragmentShader:cE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ce(new Ut(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Yf=class extends Mi{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null,x=typeof XRWebGLBinding<"u",m=new qf,p={},y=t.getContextAttributes(),v=null,_=null,w=[],M=[],R=new oe,b=null,T=null,P=new rn;P.viewport=new It;let U=new rn;U.viewport=new It;let O=[P,U],E=new ih,C=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ne=w[J];return ne===void 0&&(ne=new Io,w[J]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(J){let ne=w[J];return ne===void 0&&(ne=new Io,w[J]=ne),ne.getGripSpace()},this.getHand=function(J){let ne=w[J];return ne===void 0&&(ne=new Io,w[J]=ne),ne.getHandSpace()};function F(J){let ne=M.indexOf(J.inputSource);if(ne===-1)return;let be=w[ne];be!==void 0&&(be.update(J.inputSource,J.frame,l||o),be.dispatchEvent({type:J.type,data:J.inputSource}))}function V(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",X);for(let J=0;J<w.length;J++){let ne=M[J];ne!==null&&(M[J]=null,w[J].disconnect(ne))}C=null,D=null,m.reset();for(let J in p)delete p[J];if(e.setRenderTarget(v),f=null,d=null,u=null,s=null,_=null,qe.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(R.width,R.height,!1),T!==null){let J=T.camera;J.fov=T.fov,J.zoom=T.zoom,J.updateProjectionMatrix(),T=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,i.isPresenting===!0&&ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(v=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",V),s.addEventListener("inputsourceschange",X),y.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,Fe=null,G=null;y.depth&&(G=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=y.stencil?Zs:Gi,Fe=y.stencil?qo:Ci);let re={colorFormat:t.RGBA8,depthFormat:G,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(re),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new Hn(d.textureWidth,d.textureHeight,{format:ei,type:Wn,depthTexture:new Vs(d.textureWidth,d.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let be={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,be),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Hn(f.framebufferWidth,f.framebufferHeight,{format:ei,type:Wn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),qe.setContext(s),qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function X(J){for(let ne=0;ne<J.removed.length;ne++){let be=J.removed[ne],Fe=M.indexOf(be);Fe>=0&&(M[Fe]=null,w[Fe].disconnect(be))}for(let ne=0;ne<J.added.length;ne++){let be=J.added[ne],Fe=M.indexOf(be);if(Fe===-1){for(let re=0;re<w.length;re++)if(re>=M.length){M.push(be),Fe=re;break}else if(M[re]===null){M[re]=be,Fe=re;break}if(Fe===-1)break}let G=w[Fe];G&&G.connect(be)}}let N=new I,k=new I;function q(J,ne,be){N.setFromMatrixPosition(ne.matrixWorld),k.setFromMatrixPosition(be.matrixWorld);let Fe=N.distanceTo(k),G=ne.projectionMatrix.elements,re=be.projectionMatrix.elements,Ue=G[14]/(G[10]-1),Te=G[14]/(G[10]+1),Xe=(G[9]+1)/G[5],gt=(G[9]-1)/G[5],et=(G[8]-1)/G[0],_t=(re[8]+1)/re[0],Ze=Ue*et,ft=Ue*_t,vt=Fe/(-et+_t),Ge=vt*-et;if(ne.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ge),J.translateZ(vt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),G[10]===-1)J.projectionMatrix.copy(ne.projectionMatrix),J.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{let B=Ue+vt,tt=Te+vt,at=Ze-Ge,L=ft+(Fe-Ge),S=Xe*Te/tt*B,W=gt*Te/tt*B;J.projectionMatrix.makePerspective(at,L,S,W,B,tt),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function le(J,ne){ne===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ne.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let ne=J.near,be=J.far;m.texture!==null&&(m.depthNear>0&&(ne=m.depthNear),m.depthFar>0&&(be=m.depthFar)),E.near=U.near=P.near=ne,E.far=U.far=P.far=be,(C!==E.near||D!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),C=E.near,D=E.far),E.layers.mask=J.layers.mask|6,P.layers.mask=E.layers.mask&-5,U.layers.mask=E.layers.mask&-3;let Fe=J.parent,G=E.cameras;le(E,Fe);for(let re=0;re<G.length;re++)le(G[re],Fe);G.length===2?q(E,P,U):E.projectionMatrix.copy(P.projectionMatrix),T===null&&J.isPerspectiveCamera&&(T={camera:J,fov:J.fov,zoom:J.zoom}),ue(J,E,Fe)};function ue(J,ne,be){be===null?J.matrix.copy(ne.matrixWorld):(J.matrix.copy(be.matrixWorld),J.matrix.invert(),J.matrix.multiply(ne.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ne.projectionMatrix),J.projectionMatrixInverse.copy(ne.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Er*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(J){c=J,d!==null&&(d.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(E)},this.getCameraTexture=function(J){return p[J]};let Ae=null;function We(J,ne){if(h=ne.getViewerPose(l||o),g=ne,h!==null){let be=h.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let Fe=!1;be.length!==E.cameras.length&&(E.cameras.length=0,Fe=!0);for(let Te=0;Te<be.length;Te++){let Xe=be[Te],gt=null;if(f!==null)gt=f.getViewport(Xe);else{let _t=u.getViewSubImage(d,Xe);gt=_t.viewport,Te===0&&(e.setRenderTargetTextures(_,_t.colorTexture,_t.depthStencilTexture),e.setRenderTarget(_))}let et=O[Te];et===void 0&&(et=new rn,et.layers.enable(Te),et.viewport=new It,O[Te]=et),et.matrix.fromArray(Xe.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(Xe.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(gt.x,gt.y,gt.width,gt.height),Te===0&&(E.matrix.copy(et.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),Fe===!0&&E.cameras.push(et)}let G=s.enabledFeatures;if(G&&G.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=i.getBinding();let Te=u.getDepthInformation(be[0]);Te&&Te.isValid&&Te.texture&&m.init(Te,s.renderState)}if(G&&G.includes("camera-access")&&x){e.state.unbindTexture(),u=i.getBinding();for(let Te=0;Te<be.length;Te++){let Xe=be[Te].camera;if(Xe){let gt=p[Xe];gt||(gt=new Oa,p[Xe]=gt);let et=u.getCameraImage(Xe);gt.sourceTexture=et}}}}for(let be=0;be<w.length;be++){let Fe=M[be],G=w[be];Fe!==null&&G!==void 0&&G.update(Fe,ne,l||o)}Ae&&Ae(J,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),g=null}let qe=new ay;qe.setAnimationLoop(We),this.setAnimationLoop=function(J){Ae=J},this.dispose=function(){}}},lE=new Ye,fy=new nt;fy.set(-1,0,0,0,1,0,0,0,1);function hE(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Cf(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,v,_){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,y,v):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===qt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===qt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=e.get(p),v=y.envMap,_=y.envMapRotation;v&&(m.envMap.value=v,m.envMapRotation.value.setFromMatrix4(lE.makeRotationFromEuler(_)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(fy),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===qt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function uE(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,w){let M=w.program;i.uniformBlockBinding(_,M)}function l(_,w){let M=s[_.id];M===void 0&&(m(_),M=h(_),s[_.id]=M,_.addEventListener("dispose",y));let R=w.program;i.updateUBOMapping(_,R);let b=e.render.frame;r[_.id]!==b&&(d(_),r[_.id]=b)}function h(_){let w=u();_.__bindingPointIndex=w;let M=n.createBuffer(),R=_.__size,b=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,R,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,M),M}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let w=s[_.id],M=_.uniforms,R=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let b=0,T=M.length;b<T;b++){let P=M[b];if(Array.isArray(P))for(let U=0,O=P.length;U<O;U++)f(P[U],b,U,R);else f(P,b,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(_,w,M,R){if(x(_,w,M,R)===!0){let b=_.__offset,T=_.value;if(Array.isArray(T)){let P=0;for(let U=0;U<T.length;U++){let O=T[U],E=p(O);g(O,_.__data,P),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(P+=E.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,_.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,b,_.__data)}}function g(_,w,M){typeof _=="number"||typeof _=="boolean"?w[0]=_:_.isMatrix3?(w[0]=_.elements[0],w[1]=_.elements[1],w[2]=_.elements[2],w[3]=0,w[4]=_.elements[3],w[5]=_.elements[4],w[6]=_.elements[5],w[7]=0,w[8]=_.elements[6],w[9]=_.elements[7],w[10]=_.elements[8],w[11]=0):ArrayBuffer.isView(_)?w.set(new _.constructor(_.buffer,_.byteOffset,w.length)):_.toArray(w,M)}function x(_,w,M,R){let b=_.value,T=w+"_"+M;if(R[T]===void 0)return typeof b=="number"||typeof b=="boolean"?R[T]=b:ArrayBuffer.isView(b)?R[T]=b.slice():R[T]=b.clone(),!0;{let P=R[T];if(typeof b=="number"||typeof b=="boolean"){if(P!==b)return R[T]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(P.equals(b)===!1)return P.copy(b),!0}}return!1}function m(_){let w=_.uniforms,M=0,R=16;for(let T=0,P=w.length;T<P;T++){let U=Array.isArray(w[T])?w[T]:[w[T]];for(let O=0,E=U.length;O<E;O++){let C=U[O],D=Array.isArray(C.value)?C.value:[C.value];for(let F=0,V=D.length;F<V;F++){let X=D[F],N=p(X),k=M%R,q=k%N.boundary,le=k+q;M+=q,le!==0&&R-le<N.storage&&(M+=R-le),C.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=M,M+=N.storage}}}let b=M%R;return b>0&&(M+=R-b),_.__size=M,_.__cache={},this}function p(_){let w={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(w.boundary=4,w.storage=4):_.isVector2?(w.boundary=8,w.storage=8):_.isVector3||_.isColor?(w.boundary=16,w.storage=12):_.isVector4?(w.boundary=16,w.storage=16):_.isMatrix3?(w.boundary=48,w.storage=48):_.isMatrix4?(w.boundary=64,w.storage=64):_.isTexture?ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(w.boundary=16,w.storage=_.byteLength):ke("WebGLRenderer: Unsupported uniform value type.",_),w}function y(_){let w=_.target;w.removeEventListener("dispose",y);let M=o.indexOf(w.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function v(){for(let _ in s)n.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:c,update:l,dispose:v}}var dE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Zi=null;function fE(){return Zi===null&&(Zi=new Do(dE,16,16,Js,Pi),Zi.name="DFG_LUT",Zi.minFilter=Qt,Zi.magFilter=Qt,Zi.wrapS=oi,Zi.wrapT=oi,Zi.generateMipmaps=!1,Zi.needsUpdate=!0),Zi}var Zh=class{constructor(e={}){let{canvas:t=Rg(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Wn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;let x=f,m=new Set([ph,fh,dh]),p=new Set([Wn,Ci,Xo,qo,lh,hh]),y=new Uint32Array(4),v=new Int32Array(4),_=new I,w=null,M=null,R=[],b=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,U=!1,O=null,E=null,C=null,D=null;this._outputColorSpace=bt;let F=0,V=0,X=null,N=-1,k=null,q=new It,le=new It,ue=null,Ae=new pe(0),We=0,qe=t.width,J=t.height,ne=1,be=null,Fe=null,G=new It(0,0,qe,J),re=new It(0,0,qe,J),Ue=!1,Te=new No,Xe=!1,gt=!1,et=new Ye,_t=new I,Ze=new It,ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},vt=!1;function Ge(){return X===null?ne:1}let B=i;function tt(A,z){return t.getContext(A,z)}let at,L,S,W,K,Q,de,fe,ee,se,me,Be,_e,ge,ze,$e,rt,H,ye,ie,xe,Se,ae;try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Ht,!1),t.addEventListener("webglcontextrestored",Tt,!1),t.addEventListener("webglcontextcreationerror",mi,!1),B===null){let z="webgl2";if(B=tt(z,A),B===null)throw tt(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ve()}catch(A){throw t.removeEventListener("webglcontextlost",Ht,!1),t.removeEventListener("webglcontextrestored",Tt,!1),t.removeEventListener("webglcontextcreationerror",mi,!1),je("WebGLRenderer: "+A.message),A}function Ve(){at=new v1(B),at.init(),xe=new oE(B,at),L=new h1(B,at,e,xe),S=new sE(B,at),L.reversedDepthBuffer&&d&&S.buffers.depth.setReversed(!0),E=B.createFramebuffer(),C=B.createFramebuffer(),D=B.createFramebuffer(),W=new w1(B),K=new WT,Q=new rE(B,at,S,K,L,xe,W),de=new _1(P),fe=new TM(B),Se=new c1(B,fe),ee=new b1(B,fe,W,Se),se=new T1(B,ee,fe,Se,W),H=new S1(B,L,Q),ze=new u1(K),me=new VT(P,de,at,L,Se,ze),Be=new hE(P,K),_e=new qT,ge=new JT(at),rt=new a1(P,de,S,se,g,c),$e=new iE(P,se,L),ae=new uE(B,W,L,S),ye=new l1(B,at,W),ie=new M1(B,at,W),W.programs=me.programs,P.capabilities=L,P.extensions=at,P.properties=K,P.renderLists=_e,P.shadowMap=$e,P.state=S,P.info=W}x!==Wn&&(T=new A1(x,t.width,t.height,a,s,r));let De=new Yf(P,B);this.xr=De,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let A=at.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=at.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(A){A!==void 0&&(ne=A,this.setSize(qe,J,!1))},this.getSize=function(A){return A.set(qe,J)},this.setSize=function(A,z,Z=!0){if(De.isPresenting){ke("WebGLRenderer: Can't change size while VR device is presenting.");return}qe=A,J=z,t.width=Math.floor(A*ne),t.height=Math.floor(z*ne),Z===!0&&(t.style.width=A+"px",t.style.height=z+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(qe*ne,J*ne).floor()},this.setDrawingBufferSize=function(A,z,Z){qe=A,J=z,ne=Z,t.width=Math.floor(A*Z),t.height=Math.floor(z*Z),this.setViewport(0,0,A,z)},this.setEffects=function(A){if(x===Wn){je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let z=0;z<A.length;z++)if(A[z].isOutputPass===!0){ke("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(q)},this.getViewport=function(A){return A.copy(G)},this.setViewport=function(A,z,Z,Y){A.isVector4?G.set(A.x,A.y,A.z,A.w):G.set(A,z,Z,Y),S.viewport(q.copy(G).multiplyScalar(ne).round())},this.getScissor=function(A){return A.copy(re)},this.setScissor=function(A,z,Z,Y){A.isVector4?re.set(A.x,A.y,A.z,A.w):re.set(A,z,Z,Y),S.scissor(le.copy(re).multiplyScalar(ne).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(A){S.setScissorTest(Ue=A)},this.setOpaqueSort=function(A){be=A},this.setTransparentSort=function(A){Fe=A},this.getClearColor=function(A){return A.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor(...arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha(...arguments)},this.clear=function(A=!0,z=!0,Z=!0){let Y=0;if(A){let $=!1;if(X!==null){let we=X.texture.format;$=m.has(we)}if($){let we=X.texture.type,Re=p.has(we),Me=rt.getClearColor(),Ie=rt.getClearAlpha(),Ne=Me.r,lt=Me.g,pt=Me.b;Re?(y[0]=Ne,y[1]=lt,y[2]=pt,y[3]=Ie,B.clearBufferuiv(B.COLOR,0,y)):(v[0]=Ne,v[1]=lt,v[2]=pt,v[3]=Ie,B.clearBufferiv(B.COLOR,0,v))}else Y|=B.COLOR_BUFFER_BIT}z&&(Y|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(Y|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&B.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),O=A},this.dispose=function(){t.removeEventListener("webglcontextlost",Ht,!1),t.removeEventListener("webglcontextrestored",Tt,!1),t.removeEventListener("webglcontextcreationerror",mi,!1),rt.dispose(),_e.dispose(),ge.dispose(),K.dispose(),de.dispose(),se.dispose(),Se.dispose(),ae.dispose(),me.dispose(),De.dispose(),De.removeEventListener("sessionstart",qm),De.removeEventListener("sessionend",Ym),xr.stop()};function Ht(A){A.preventDefault(),Ra("WebGLRenderer: Context Lost."),U=!0}function Tt(){Ra("WebGLRenderer: Context Restored."),U=!1;let A=W.autoReset,z=$e.enabled,Z=$e.autoUpdate,Y=$e.needsUpdate,$=$e.type;Ve(),W.autoReset=A,$e.enabled=z,$e.autoUpdate=Z,$e.needsUpdate=Y,$e.type=$}function mi(A){je("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Fi(A){let z=A.target;z.removeEventListener("dispose",Fi),Vv(z)}function Vv(A){Wv(A),K.remove(A)}function Wv(A){let z=K.get(A).programs;z!==void 0&&(z.forEach(function(Z){me.releaseProgram(Z)}),A.isShaderMaterial&&me.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,Z,Y,$,we){z===null&&(z=ft);let Re=$.isMesh&&$.matrixWorld.determinantAffine()<0,Me=Yv(A,z,Z,Y,$);S.setMaterial(Y,Re);let Ie=Z.index,Ne=1;if(Y.wireframe===!0){if(Ie=ee.getWireframeAttribute(Z),Ie===void 0)return;Ne=2}let lt=Z.drawRange,pt=Z.attributes.position,Le=lt.start*Ne,Et=(lt.start+lt.count)*Ne;we!==null&&(Le=Math.max(Le,we.start*Ne),Et=Math.min(Et,(we.start+we.count)*Ne)),Ie!==null?(Le=Math.max(Le,0),Et=Math.min(Et,Ie.count)):pt!=null&&(Le=Math.max(Le,0),Et=Math.min(Et,pt.count));let nn=Et-Le;if(nn<0||nn===1/0)return;Se.setup($,Y,Me,Z,Ie);let Wt,Ot=ye;if(Ie!==null&&(Wt=fe.get(Ie),Ot=ie,Ot.setIndex(Wt)),$.isMesh)Y.wireframe===!0?(S.setLineWidth(Y.wireframeLinewidth*Ge()),Ot.setMode(B.LINES)):Ot.setMode(B.TRIANGLES);else if($.isLine){let wn=Y.linewidth;wn===void 0&&(wn=1),S.setLineWidth(wn*Ge()),$.isLineSegments?Ot.setMode(B.LINES):$.isLineLoop?Ot.setMode(B.LINE_LOOP):Ot.setMode(B.LINE_STRIP)}else $.isPoints?Ot.setMode(B.POINTS):$.isSprite&&Ot.setMode(B.TRIANGLES);if($.isBatchedMesh)if(at.get("WEBGL_multi_draw"))Ot.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let wn=$._multiDrawStarts,Ee=$._multiDrawCounts,Dn=$._multiDrawCount,Mt=Ie?fe.get(Ie).bytesPerElement:1,si=K.get(Y).currentProgram.getUniforms();for(let Bi=0;Bi<Dn;Bi++)si.setValue(B,"_gl_DrawID",Bi),Ot.render(wn[Bi]/Mt,Ee[Bi])}else if($.isInstancedMesh)Ot.renderInstances(Le,nn,$.count);else if(Z.isInstancedBufferGeometry){let wn=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Ee=Math.min(Z.instanceCount,wn);Ot.renderInstances(Le,nn,Ee)}else Ot.render(Le,nn)};function Xm(A,z,Z,Y){O!==null&&A.isNodeMaterial&&O.setObject(Y,A),Xe===!0&&ze.setState(A,Z,!1),A.transparent===!0&&A.side===Ct&&A.forceSinglePass===!1?(A.side=qt,A.needsUpdate=!0,jc(A,z,Y),A.side=ji,A.needsUpdate=!0,jc(A,z,Y),A.side=Ct):jc(A,z,Y)}this.compile=function(A,z,Z=null){Z===null&&(Z=A),O!==null&&O.renderStart(A,z,Z),M=ge.get(Z),M.init(z),b.push(M),Z.traverseVisible(function($){$.isLight&&$.layers.test(z.layers)&&(M.pushLight($),$.castShadow&&M.pushShadow($))}),A!==Z&&A.traverseVisible(function($){$.isLight&&$.layers.test(z.layers)&&(M.pushLight($),$.castShadow&&M.pushShadow($))}),M.setupLights(),O!==null&&O.updateLights(M.state.lightsArray),gt=this.localClippingEnabled,Xe=ze.init(this.clippingPlanes,gt),Xe===!0&&ze.setGlobalState(this.clippingPlanes,z),O!==null&&$e.render(M.state.shadowsArray,Z,z);let Y=new Set;return A.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let we=$.material;if(we)if(Array.isArray(we))for(let Re=0;Re<we.length;Re++){let Me=we[Re];Xm(Me,Z,z,$),Y.add(Me)}else Xm(we,Z,z,$),Y.add(we)}),M=b.pop(),O!==null&&O.renderEnd(),Y},this.compileAsync=function(A,z,Z=null){let Y=this.compile(A,z,Z);return new Promise($=>{function we(){if(Y.forEach(function(Re){let Ie=K.get(Re).currentProgram;(Ie===void 0||Ie.isReady())&&Y.delete(Re)}),Y.size===0){$(A);return}setTimeout(we,10)}at.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let dd=null;function Xv(A){dd&&dd(A)}function qm(){xr.stop()}function Ym(){xr.start()}let xr=new ay;xr.setAnimationLoop(Xv),typeof self<"u"&&xr.setContext(self),this.setAnimationLoop=function(A){dd=A,De.setAnimationLoop(A),A===null?xr.stop():xr.start()},De.addEventListener("sessionstart",qm),De.addEventListener("sessionend",Ym),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;O!==null&&O.renderStart(A,z);let Z=De.enabled===!0&&De.isPresenting===!0,Y=T!==null&&(X===null||Z)&&T.begin(P,X);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),De.enabled===!0&&De.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(De.cameraAutoUpdate===!0&&De.updateCamera(z),z=De.getCamera()),A.isScene===!0&&A.onBeforeRender(P,A,z,X),M=ge.get(A,b.length),M.init(z),M.state.textureUnits=Q.getTextureUnits(),b.push(M),et.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Te.setFromProjectionMatrix(et,vi,z.reversedDepth),gt=this.localClippingEnabled,Xe=ze.init(this.clippingPlanes,gt),w=_e.get(A,R.length),w.init(),R.push(w),De.enabled===!0&&De.isPresenting===!0){let Re=P.xr.getDepthSensingMesh();Re!==null&&fd(Re,z,-1/0,P.sortObjects)}fd(A,z,0,P.sortObjects),w.finish(),O!==null&&O.updateLights(M.state.lightsArray),P.sortObjects===!0&&w.sort(be,Fe),vt=De.enabled===!1||De.isPresenting===!1||De.hasDepthSensing()===!1,vt&&rt.addToRenderList(w,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Xe===!0&&ze.beginShadows();let $=M.state.shadowsArray;if($e.render($,A,z),Xe===!0&&ze.endShadows(),(Y&&T.hasRenderPass())===!1){let Re=w.opaque,Me=w.transmissive;if(M.setupLights(),z.isArrayCamera){let Ie=z.cameras;if(Me.length>0)for(let Ne=0,lt=Ie.length;Ne<lt;Ne++){let pt=Ie[Ne];jm(Re,Me,A,pt)}vt&&rt.render(A);for(let Ne=0,lt=Ie.length;Ne<lt;Ne++){let pt=Ie[Ne];$m(w,A,pt,pt.viewport)}}else Me.length>0&&jm(Re,Me,A,z),vt&&rt.render(A),$m(w,A,z)}X!==null&&V===0&&(Q.updateMultisampleRenderTarget(X),Q.updateRenderTargetMipmap(X)),Y&&T.end(P),A.isScene===!0&&A.onAfterRender(P,A,z),Se.resetDefaultState(),N=-1,k=null,b.pop(),b.length>0?(M=b[b.length-1],Q.setTextureUnits(M.state.textureUnits),Xe===!0&&ze.setGlobalState(P.clippingPlanes,M.state.camera)):M=null,R.pop(),R.length>0?w=R[R.length-1]:w=null,O!==null&&O.renderEnd()};function fd(A,z,Z,Y){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)Z=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLightProbeGrid)M.pushLightProbeGrid(A);else if(A.isLight)M.pushLight(A),A.castShadow&&M.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(Te)){Y&&Ze.setFromMatrixPosition(A.matrixWorld).applyMatrix4(et);let Re=se.update(A),Me=A.material;Me.visible&&w.push(A,Re,Me,Z,Ze.z,null,z)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(Te))){let Re=se.update(A),Me=A.material;if(Y&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ze.copy(A.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Ze.copy(Re.boundingSphere.center)),Ze.applyMatrix4(A.matrixWorld).applyMatrix4(et)),Array.isArray(Me)){let Ie=Re.groups;for(let Ne=0,lt=Ie.length;Ne<lt;Ne++){let pt=Ie[Ne],Le=Me[pt.materialIndex];Le&&Le.visible&&w.push(A,Re,Le,Z,Ze.z,pt,z)}}else Me.visible&&w.push(A,Re,Me,Z,Ze.z,null,z)}}let we=A.children;for(let Re=0,Me=we.length;Re<Me;Re++)fd(we[Re],z,Z,Y)}function $m(A,z,Z,Y){let{opaque:$,transmissive:we,transparent:Re}=A;M.setupLightsView(Z),Xe===!0&&ze.setGlobalState(P.clippingPlanes,Z),Y&&S.viewport(q.copy(Y)),$.length>0&&$c($,z,Z),we.length>0&&$c(we,z,Z),Re.length>0&&$c(Re,z,Z),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function jm(A,z,Z,Y){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[Y.id]===void 0){let Le=at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[Y.id]=new Hn(1,1,{generateMipmaps:!0,type:Le?Pi:Wn,minFilter:Ri,samples:Math.max(4,L.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ut.workingColorSpace})}let we=M.state.transmissionRenderTarget[Y.id],Re=Y.viewport||q;we.setSize(Re.z*P.transmissionResolutionScale,Re.w*P.transmissionResolutionScale);let Me=P.getRenderTarget(),Ie=P.getActiveCubeFace(),Ne=P.getActiveMipmapLevel();P.setRenderTarget(we),P.getClearColor(Ae),We=P.getClearAlpha(),We<1&&P.setClearColor(16777215,.5),P.clear(),vt&&rt.render(Z);let lt=P.toneMapping;P.toneMapping=Ai;let pt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),M.setupLightsView(Y),Xe===!0&&ze.setGlobalState(P.clippingPlanes,Y),$c(A,Z,Y),Q.updateMultisampleRenderTarget(we),Q.updateRenderTargetMipmap(we),at.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let Et=0,nn=z.length;Et<nn;Et++){let Wt=z[Et],{object:Ot,geometry:wn,material:Ee,group:Dn}=Wt;if(Ee.side===Ct&&Ot.layers.test(Y.layers)){let Mt=Ee.side;Ee.side=qt,Ee.needsUpdate=!0,Km(Ot,Z,Y,wn,Ee,Dn),Ee.side=Mt,Ee.needsUpdate=!0,Le=!0}}Le===!0&&(Q.updateMultisampleRenderTarget(we),Q.updateRenderTargetMipmap(we))}P.setRenderTarget(Me,Ie,Ne),P.setClearColor(Ae,We),pt!==void 0&&(Y.viewport=pt),P.toneMapping=lt}function $c(A,z,Z){let Y=z.isScene===!0?z.overrideMaterial:null;for(let $=0,we=A.length;$<we;$++){let Re=A[$],{object:Me,geometry:Ie,group:Ne}=Re,lt=Re.material;lt.allowOverride===!0&&Y!==null&&(lt=Y),Me.layers.test(Z.layers)&&Km(Me,z,Z,Ie,lt,Ne)}}function Km(A,z,Z,Y,$,we){O!==null&&$.isNodeMaterial&&O.setObject(A,$),A.onBeforeRender(P,z,Z,Y,$,we),A.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),$.onBeforeRender(P,z,Z,Y,A,we),$.transparent===!0&&$.side===Ct&&$.forceSinglePass===!1?($.side=qt,$.needsUpdate=!0,P.renderBufferDirect(Z,z,Y,$,A,we),$.side=ji,$.needsUpdate=!0,P.renderBufferDirect(Z,z,Y,$,A,we),$.side=Ct):P.renderBufferDirect(Z,z,Y,$,A,we),A.onAfterRender(P,z,Z,Y,$,we)}function jc(A,z,Z){z.isScene!==!0&&(z=ft);let Y=K.get(A),$=M.state.lights,we=M.state.shadowsArray,Re=$.state.version,Me=me.getParameters(A,$.state,we,z,Z,M.state.lightProbeGridArray),Ie=me.getProgramCacheKey(Me),Ne=Y.programs;Y.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?z.environment:null,Y.fog=z.fog;let lt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;Y.envMap=de.get(A.envMap||Y.environment,lt),Y.envMapRotation=Y.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,Ne===void 0&&(A.addEventListener("dispose",Fi),Ne=new Map,Y.programs=Ne);let pt=Ne.get(Ie);if(pt!==void 0){if(Y.currentProgram===pt&&Y.lightsStateVersion===Re)return Jm(A,Me),pt}else Me.uniforms=me.getUniforms(A),O!==null&&A.isNodeMaterial&&O.build(A,Z,Me),A.onBeforeCompile(Me,P),pt=me.acquireProgram(Me,Ie),Ne.set(Ie,pt),Y.uniforms=Me.uniforms;let Le=Y.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Le.clippingPlanes=ze.uniform),Jm(A,Me),Y.needsLights=jv(A),Y.lightsStateVersion=Re,Y.needsLights&&(Le.ambientLightColor.value=$.state.ambient,Le.lightProbe.value=$.state.probe,Le.sunLights.value=$.state.sun,Le.sunLightShadows.value=$.state.sunShadow,Le.directionalLights.value=$.state.directional,Le.directionalLightShadows.value=$.state.directionalShadow,Le.spotLights.value=$.state.spot,Le.spotLightShadows.value=$.state.spotShadow,Le.rectAreaLights.value=$.state.rectArea,Le.ltc_1.value=$.state.rectAreaLTC1,Le.ltc_2.value=$.state.rectAreaLTC2,Le.pointLights.value=$.state.point,Le.pointLightShadows.value=$.state.pointShadow,Le.hemisphereLights.value=$.state.hemi,Le.sunShadowMatrix.value=$.state.sunShadowMatrix,Le.sunShadowCascade.value=$.state.sunShadowCascade,Le.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Le.spotLightMatrix.value=$.state.spotLightMatrix,Le.spotLightMap.value=$.state.spotLightMap,Le.pointShadowMatrix.value=$.state.pointShadowMatrix),Y.lightProbeGrid=M.state.lightProbeGridArray.length>0,Y.currentProgram=pt,Y.uniformsList=null,pt}function Zm(A){if(A.uniformsList===null){let z=A.currentProgram.getUniforms();A.uniformsList=Ko.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function Jm(A,z){let Z=K.get(A);Z.outputColorSpace=z.outputColorSpace,Z.batching=z.batching,Z.batchingColor=z.batchingColor,Z.instancing=z.instancing,Z.instancingColor=z.instancingColor,Z.instancingMorph=z.instancingMorph,Z.skinning=z.skinning,Z.morphTargets=z.morphTargets,Z.morphNormals=z.morphNormals,Z.morphColors=z.morphColors,Z.morphTargetsCount=z.morphTargetsCount,Z.numClippingPlanes=z.numClippingPlanes,Z.numIntersection=z.numClipIntersection,Z.vertexAlphas=z.vertexAlphas,Z.vertexTangents=z.vertexTangents,Z.toneMapping=z.toneMapping}function qv(A,z){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;_.setFromMatrixPosition(z.matrixWorld);for(let Z=0,Y=A.length;Z<Y;Z++){let $=A[Z];if($.texture!==null&&$.boundingBox.containsPoint(_))return $}return null}function Yv(A,z,Z,Y,$){z.isScene!==!0&&(z=ft),Q.resetTextureUnits();let we=z.fog,Re=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?z.environment:null,Me=X===null?P.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:ut.workingColorSpace,Ie=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Ne=de.get(Y.envMap||Re,Ie),lt=Y.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pt=!!Z.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Le=!!Z.morphAttributes.position,Et=!!Z.morphAttributes.normal,nn=!!Z.morphAttributes.color,Wt=Ai;Y.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Wt=P.toneMapping);let Ot=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,wn=Ot!==void 0?Ot.length:0,Ee=K.get(Y),Dn=M.state.lights;if(Xe===!0&&(gt===!0||A!==k)){let Gt=A===k&&Y.id===N;ze.setState(Y,A,Gt)}let Mt=!1;Y.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==Dn.state.version||Ee.outputColorSpace!==Me||$.isBatchedMesh&&Ee.batching===!1||!$.isBatchedMesh&&Ee.batching===!0||$.isBatchedMesh&&Ee.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&Ee.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&Ee.instancing===!1||!$.isInstancedMesh&&Ee.instancing===!0||$.isSkinnedMesh&&Ee.skinning===!1||!$.isSkinnedMesh&&Ee.skinning===!0||$.isInstancedMesh&&Ee.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Ee.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Ee.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Ee.instancingMorph===!1&&$.morphTexture!==null||Ee.envMap!==Ne||Y.fog===!0&&Ee.fog!==we||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==ze.numPlanes||Ee.numIntersection!==ze.numIntersection)||Ee.vertexAlphas!==lt||Ee.vertexTangents!==pt||Ee.morphTargets!==Le||Ee.morphNormals!==Et||Ee.morphColors!==nn||Ee.toneMapping!==Wt||Ee.morphTargetsCount!==wn||!!Ee.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(Mt=!0):(Mt=!0,Ee.__version=Y.version);let si=Ee.currentProgram;Mt===!0&&(si=jc(Y,z,$),O&&Y.isNodeMaterial&&O.onUpdateProgram(Y,si,Ee));let Bi=!1,Ds=!1,to=!1,kt=si.getUniforms(),Jt=Ee.uniforms;if(S.useProgram(si.program)&&(Bi=!0,Ds=!0,to=!0),Y.id!==N&&(N=Y.id,Ds=!0),Ee.needsLights){let Gt=qv(M.state.lightProbeGridArray,$);Ee.lightProbeGrid!==Gt&&(Ee.lightProbeGrid=Gt,Ds=!0)}if(Bi||k!==A){S.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),kt.setValue(B,"projectionMatrix",A.projectionMatrix),kt.setValue(B,"viewMatrix",A.matrixWorldInverse);let ks=kt.map.cameraPosition;ks!==void 0&&ks.setValue(B,_t.setFromMatrixPosition(A.matrixWorld)),L.logarithmicDepthBuffer&&kt.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&kt.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),k!==A&&(k=A,Ds=!0,to=!0)}if(Ee.needsLights&&(Dn.state.sunShadowMap.length>0&&kt.setValue(B,"sunShadowMap",Dn.state.sunShadowMap,Q),Dn.state.directionalShadowMap.length>0&&kt.setValue(B,"directionalShadowMap",Dn.state.directionalShadowMap,Q),Dn.state.spotShadowMap.length>0&&kt.setValue(B,"spotShadowMap",Dn.state.spotShadowMap,Q),Dn.state.pointShadowMap.length>0&&kt.setValue(B,"pointShadowMap",Dn.state.pointShadowMap,Q)),$.isSkinnedMesh){kt.setOptional(B,$,"bindMatrix"),kt.setOptional(B,$,"bindMatrixInverse");let Gt=$.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),kt.setValue(B,"boneTexture",Gt.boneTexture,Q))}$.isBatchedMesh&&(kt.setOptional(B,$,"batchingTexture"),kt.setValue(B,"batchingTexture",$._matricesTexture,Q),kt.setOptional(B,$,"batchingIdTexture"),kt.setValue(B,"batchingIdTexture",$._indirectTexture,Q),kt.setOptional(B,$,"batchingColorTexture"),$._colorsTexture!==null&&kt.setValue(B,"batchingColorTexture",$._colorsTexture,Q));let Ns=Z.morphAttributes;if((Ns.position!==void 0||Ns.normal!==void 0||Ns.color!==void 0)&&H.update($,Z,si),(Ds||Ee.receiveShadow!==$.receiveShadow)&&(Ee.receiveShadow=$.receiveShadow,kt.setValue(B,"receiveShadow",$.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&z.environment!==null&&(Jt.envMapIntensity.value=z.environmentIntensity),Jt.dfgLUT!==void 0&&(Jt.dfgLUT.value=fE()),Ds){if(kt.setValue(B,"toneMappingExposure",P.toneMappingExposure),Ee.needsLights&&$v(Jt,to),we&&Y.fog===!0&&Be.refreshFogUniforms(Jt,we),Be.refreshMaterialUniforms(Jt,Y,ne,J,M.state.transmissionRenderTarget[A.id]),Ee.needsLights&&Ee.lightProbeGrid){let Gt=Ee.lightProbeGrid;Jt.probesSH.value=Gt.texture,Jt.probesMin.value.copy(Gt.boundingBox.min),Jt.probesMax.value.copy(Gt.boundingBox.max),Jt.probesResolution.value.copy(Gt.resolution)}Ko.upload(B,Zm(Ee),Jt,Q)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Ko.upload(B,Zm(Ee),Jt,Q),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&kt.setValue(B,"center",$.center),kt.setValue(B,"modelViewMatrix",$.modelViewMatrix),kt.setValue(B,"normalMatrix",$.normalMatrix),kt.setValue(B,"modelMatrix",$.matrixWorld),Y.uniformsGroups!==void 0){let Gt=Y.uniformsGroups;for(let ks=0,no=Gt.length;ks<no;ks++){let e0=Gt[ks];ae.update(e0,si),ae.bind(e0,si)}}return si}function $v(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.sunLights.needsUpdate=z,A.sunLightShadows.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function jv(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(A,z,Z){let Y=K.get(A);Y.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),K.get(A.texture).__webglTexture=z,K.get(A.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:Z,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,z){let Z=K.get(A);Z.__webglFramebuffer=z,Z.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(A,z=0,Z=0){X=A,F=z,V=Z;let Y=null,$=!1,we=!1;if(A){let Me=K.get(A);if(Me.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(B.FRAMEBUFFER,Me.__webglFramebuffer),q.copy(A.viewport),le.copy(A.scissor),ue=A.scissorTest,S.viewport(q),S.scissor(le),S.setScissorTest(ue),N=-1;return}else if(Me.__webglFramebuffer===void 0)Q.setupRenderTarget(A);else if(Me.__hasExternalTextures)Q.rebindTextures(A,K.get(A.texture).__webglTexture,K.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let lt=A.depthTexture;if(Me.__boundDepthTexture!==lt){if(lt!==null&&K.has(lt)&&(A.width!==lt.image.width||A.height!==lt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(A)}}let Ie=A.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(we=!0);let Ne=K.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ne[z])?Y=Ne[z][Z]:Y=Ne[z],$=!0):A.samples>0&&Q.useMultisampledRTT(A)===!1?Y=K.get(A).__webglMultisampledFramebuffer:Array.isArray(Ne)?Y=Ne[Z]:Y=Ne,q.copy(A.viewport),le.copy(A.scissor),ue=A.scissorTest}else q.copy(G).multiplyScalar(ne).floor(),le.copy(re).multiplyScalar(ne).floor(),ue=Ue;if(Z!==0&&(Y=E),S.bindFramebuffer(B.FRAMEBUFFER,Y)&&S.drawBuffers(A,Y),S.viewport(q),S.scissor(le),S.setScissorTest(ue),$){let Me=K.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+z,Me.__webglTexture,Z)}else if(we){let Me=z;for(let Ie=0;Ie<A.textures.length;Ie++){let Ne=K.get(A.textures[Ie]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Ie,Ne.__webglTexture,Z,Me)}}else if(A!==null&&Z!==0){let Me=K.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Me.__webglTexture,Z)}N=-1};function Qm(A){let z=K.get(A);return(z.__readFormat!==A.format||z.__readType!==A.type)&&(z.__readFormat=A.format,z.__readType=A.type,z.__formatReadable=L.textureFormatReadable(A.format),z.__typeReadable=L.textureTypeReadable(A.type)),z}this.readRenderTargetPixels=function(A,z,Z,Y,$,we,Re,Me=0){if(!(A&&A.isWebGLRenderTarget)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=K.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Re!==void 0&&(Ie=Ie[Re]),Ie){S.bindFramebuffer(B.FRAMEBUFFER,Ie);try{let Ne=A.textures[Me],lt=Ne.format,pt=Ne.type;A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Me);let Le=Qm(Ne);if(Le.__formatReadable===!1){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Le.__typeReadable===!1){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-Y&&Z>=0&&Z<=A.height-$&&B.readPixels(z,Z,Y,$,xe.convert(lt),xe.convert(pt),we)}finally{let Ne=X!==null?K.get(X).__webglFramebuffer:null;S.bindFramebuffer(B.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(A,z,Z,Y,$,we,Re,Me=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=K.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Re!==void 0&&(Ie=Ie[Re]),Ie)if(z>=0&&z<=A.width-Y&&Z>=0&&Z<=A.height-$){S.bindFramebuffer(B.FRAMEBUFFER,Ie);let Ne=A.textures[Me],lt=Ne.format,pt=Ne.type;A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Me);let Le=Qm(Ne);if(Le.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Le.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Et=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Et),B.bufferData(B.PIXEL_PACK_BUFFER,we.byteLength,B.STREAM_READ),B.readPixels(z,Z,Y,$,xe.convert(lt),xe.convert(pt),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let nn=X!==null?K.get(X).__webglFramebuffer:null;S.bindFramebuffer(B.FRAMEBUFFER,nn);let Wt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Pg(B,Wt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Et),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,we),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(Et),B.deleteSync(Wt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,z=null,Z=0){let Y=Math.pow(2,-Z),$=Math.floor(A.image.width*Y),we=Math.floor(A.image.height*Y),Re=z!==null?z.x:0,Me=z!==null?z.y:0;Q.setTexture2D(A,0),B.copyTexSubImage2D(B.TEXTURE_2D,Z,0,0,Re,Me,$,we),S.unbindTexture()},this.copyTextureToTexture=function(A,z,Z=null,Y=null,$=0,we=0){let Re,Me,Ie,Ne,lt,pt,Le,Et,nn,Wt=A.isCompressedTexture?A.mipmaps[we]:A.image;if(Z!==null)Re=Z.max.x-Z.min.x,Me=Z.max.y-Z.min.y,Ie=Z.isBox3?Z.max.z-Z.min.z:1,Ne=Z.min.x,lt=Z.min.y,pt=Z.isBox3?Z.min.z:0;else{let Jt=Math.pow(2,-$);Re=Math.floor(Wt.width*Jt),Me=Math.floor(Wt.height*Jt),A.isDataArrayTexture?Ie=Wt.depth:A.isData3DTexture?Ie=Math.floor(Wt.depth*Jt):Ie=1,Ne=0,lt=0,pt=0}Y!==null?(Le=Y.x,Et=Y.y,nn=Y.z):(Le=0,Et=0,nn=0);let Ot=xe.convert(z.format),wn=xe.convert(z.type),Ee;z.isData3DTexture?(Q.setTexture3D(z,0),Ee=B.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(Q.setTexture2DArray(z,0),Ee=B.TEXTURE_2D_ARRAY):(Q.setTexture2D(z,0),Ee=B.TEXTURE_2D),S.activeTexture(B.TEXTURE0),S.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,z.flipY),S.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),S.pixelStorei(B.UNPACK_ALIGNMENT,z.unpackAlignment);let Dn=S.getParameter(B.UNPACK_ROW_LENGTH),Mt=S.getParameter(B.UNPACK_IMAGE_HEIGHT),si=S.getParameter(B.UNPACK_SKIP_PIXELS),Bi=S.getParameter(B.UNPACK_SKIP_ROWS),Ds=S.getParameter(B.UNPACK_SKIP_IMAGES);S.pixelStorei(B.UNPACK_ROW_LENGTH,Wt.width),S.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Wt.height),S.pixelStorei(B.UNPACK_SKIP_PIXELS,Ne),S.pixelStorei(B.UNPACK_SKIP_ROWS,lt),S.pixelStorei(B.UNPACK_SKIP_IMAGES,pt);let to=A.isDataArrayTexture||A.isData3DTexture,kt=z.isDataArrayTexture||z.isData3DTexture;if(A.isDepthTexture){let Jt=K.get(A),Ns=K.get(z),Gt=K.get(Jt.__renderTarget),ks=K.get(Ns.__renderTarget);S.bindFramebuffer(B.READ_FRAMEBUFFER,Gt.__webglFramebuffer),S.bindFramebuffer(B.DRAW_FRAMEBUFFER,ks.__webglFramebuffer);for(let no=0;no<Ie;no++)to&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,K.get(A).__webglTexture,$,pt+no),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,K.get(z).__webglTexture,we,nn+no)),B.blitFramebuffer(Ne,lt,Re,Me,Le,Et,Re,Me,B.DEPTH_BUFFER_BIT,B.NEAREST);S.bindFramebuffer(B.READ_FRAMEBUFFER,null),S.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if($!==0||A.isRenderTargetTexture||K.has(A)){let Jt=K.get(A),Ns=K.get(z);S.bindFramebuffer(B.READ_FRAMEBUFFER,C),S.bindFramebuffer(B.DRAW_FRAMEBUFFER,D);for(let Gt=0;Gt<Ie;Gt++)to?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Jt.__webglTexture,$,pt+Gt):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Jt.__webglTexture,$),kt?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ns.__webglTexture,we,nn+Gt):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ns.__webglTexture,we),$!==0?B.blitFramebuffer(Ne,lt,Re,Me,Le,Et,Re,Me,B.COLOR_BUFFER_BIT,B.NEAREST):kt?B.copyTexSubImage3D(Ee,we,Le,Et,nn+Gt,Ne,lt,Re,Me):B.copyTexSubImage2D(Ee,we,Le,Et,Ne,lt,Re,Me);S.bindFramebuffer(B.READ_FRAMEBUFFER,null),S.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else kt?A.isDataTexture||A.isData3DTexture?B.texSubImage3D(Ee,we,Le,Et,nn,Re,Me,Ie,Ot,wn,Wt.data):z.isCompressedArrayTexture?B.compressedTexSubImage3D(Ee,we,Le,Et,nn,Re,Me,Ie,Ot,Wt.data):B.texSubImage3D(Ee,we,Le,Et,nn,Re,Me,Ie,Ot,wn,Wt):A.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,we,Le,Et,Re,Me,Ot,wn,Wt.data):A.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,we,Le,Et,Wt.width,Wt.height,Ot,Wt.data):B.texSubImage2D(B.TEXTURE_2D,we,Le,Et,Re,Me,Ot,wn,Wt);S.pixelStorei(B.UNPACK_ROW_LENGTH,Dn),S.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Mt),S.pixelStorei(B.UNPACK_SKIP_PIXELS,si),S.pixelStorei(B.UNPACK_SKIP_ROWS,Bi),S.pixelStorei(B.UNPACK_SKIP_IMAGES,Ds),we===0&&z.generateMipmaps&&B.generateMipmap(Ee),S.unbindTexture()},this.initRenderTarget=function(A){K.get(A).__webglFramebuffer===void 0&&Q.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Q.setTextureCube(A,0):A.isData3DTexture?Q.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Q.setTexture2DArray(A,0):Q.setTexture2D(A,0),S.unbindTexture()},this.resetState=function(){F=0,V=0,X=null,S.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=ut._getUnpackColorSpace()}};var py={type:"change"},jf={type:"start"},gy={type:"end"},eu=new Vi,my=new Zn,pE=Math.cos(70*xt.DEG2RAD),pn=new I,Xn=2*Math.PI,Lt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},$f=1e-6,tu=class extends oc{constructor(e,t=null){super(e,t),this.state=Lt.NONE,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:$s.ROTATE,MIDDLE:$s.DOLLY,RIGHT:$s.PAN},this.touches={ONE:js.ROTATE,TWO:js.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new wt,this._lastTargetPosition=new I,this._quat=new wt().setFromUnitVectors(e.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ho,this._sphericalDelta=new Ho,this._scale=1,this._panOffset=new I,this._rotateStart=new oe,this._rotateEnd=new oe,this._rotateDelta=new oe,this._panStart=new oe,this._panEnd=new oe,this._panDelta=new oe,this._dollyStart=new oe,this._dollyEnd=new oe,this._dollyDelta=new oe,this._dollyDirection=new I,this._mouse=new oe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=gE.bind(this),this._onPointerDown=mE.bind(this),this._onPointerUp=yE.bind(this),this._onContextMenu=SE.bind(this),this._onMouseWheel=vE.bind(this),this._onKeyDown=bE.bind(this),this._onTouchStart=ME.bind(this),this._onTouchMove=wE.bind(this),this._onMouseDown=xE.bind(this),this._onMouseMove=_E.bind(this),this._interceptControlDown=TE.bind(this),this._interceptControlUp=EE.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Lt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(py),this.update(),this.state=Lt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;pn.copy(t).sub(this.target),pn.applyQuaternion(this._quat),this._spherical.setFromVector3(pn),this.autoRotate&&this.state===Lt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Xn:i>Math.PI&&(i-=Xn),s<-Math.PI?s+=Xn:s>Math.PI&&(s-=Xn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(pn.setFromSpherical(this._spherical),pn.applyQuaternion(this._quatInverse),t.copy(this.target).add(pn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=pn.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let a=new I(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new I(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=pn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(eu.origin.copy(this.object.position),eu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(eu.direction))<pE?this.object.lookAt(this.target):(my.setFromNormalAndCoplanarPoint(this.object.up,this.target),eu.intersectPlane(my,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>$f||8*(1-this._lastQuaternion.dot(this.object.quaternion))>$f||this._lastTargetPosition.distanceToSquared(this.target)>$f?(this.dispatchEvent(py),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Xn/60*this.autoRotateSpeed*e:Xn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){pn.setFromMatrixColumn(t,0),pn.multiplyScalar(-e),this._panOffset.add(pn)}_panUp(e,t){this.screenSpacePanning===!0?pn.setFromMatrixColumn(t,1):(pn.setFromMatrixColumn(t,0),pn.crossVectors(this.object.up,pn)),pn.multiplyScalar(e),this._panOffset.add(pn)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;pn.copy(s).sub(this.target);let r=pn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Xn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Xn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Xn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Xn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new oe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function mE(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function gE(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function yE(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(gy),this.state=Lt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function xE(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case $s.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Lt.DOLLY;break;case $s.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Lt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Lt.ROTATE}break;case $s.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Lt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Lt.PAN}break;default:this.state=Lt.NONE}this.state!==Lt.NONE&&this.dispatchEvent(jf)}function _E(n){switch(this.state){case Lt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Lt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Lt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function vE(n){this.enabled===!1||this.enableZoom===!1||this.state!==Lt.NONE||(n.preventDefault(),this.dispatchEvent(jf),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(gy))}function bE(n){this.enabled!==!1&&this._handleKeyDown(n)}function ME(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case js.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Lt.TOUCH_ROTATE;break;case js.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Lt.TOUCH_PAN;break;default:this.state=Lt.NONE}break;case 2:switch(this.touches.TWO){case js.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Lt.TOUCH_DOLLY_PAN;break;case js.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Lt.TOUCH_DOLLY_ROTATE;break;default:this.state=Lt.NONE}break;default:this.state=Lt.NONE}this.state!==Lt.NONE&&this.dispatchEvent(jf)}function wE(n){switch(this._trackPointer(n),this.state){case Lt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Lt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Lt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Lt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Lt.NONE}}function SE(n){this.enabled!==!1&&n.preventDefault()}function TE(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function EE(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var er=["\u{1F98A}","\u{1F43B}","\u{1F43C}","\u{1F428}","\u{1F438}","\u{1F42F}","\u{1F981}","\u{1F435}","\u{1F430}","\u{1F431}","\u{1F436}","\u{1F989}","\u{1F427}","\u{1F419}","\u{1F984}","\u{1F422}","\u{1F439}","\u{1F994}","\u{1F42E}","\u{1F437}"],tr=["#e07a5f","#f2cc8f","#81b29a","#5c6f9e","#b07bac","#f4a261","#2a9d8f","#e76f51","#8ecae6","#ffb4a2","#c9ada7","#90be6d"],nu=["\u{1F60A}","\u{1F604}","\u{1F602}","\u{1F970}","\u{1F60D}","\u{1F60C}","\u{1F634}","\u{1F914}","\u{1F62E}","\u{1F622}","\u{1F60E}","\u{1F973}","\u{1F917}","\u{1F607}","\u{1F643}","\u{1F60B}","\u{1F605}","\u{1F97A}","\u{1F44B}","\u{1F44D}","\u{1F44F}","\u{1F64C}","\u{1F91D}","\u270C\uFE0F","\u{1F64F}","\u{1FAF6}","\u{1F440}","\u2764\uFE0F","\u{1F9E1}","\u{1F49B}","\u{1F49A}","\u{1F499}","\u{1F49C}","\u2728","\u{1F525}","\u{1F389}","\u2B50","\u{1F4AF}","\u{1F3B5}","\u{1F3B6}","\u{1F3A7}","\u2615","\u{1F375}","\u{1F370}","\u{1F33F}","\u{1F327}\uFE0F","\u{1F319}","\u2600\uFE0F","\u{1F308}","\u{1F4DA}","\u{1F4A4}","\u{1F4AD}","\u2753","\u2757"],xy=new Set(["\u2764\uFE0F","\u{1F9E1}","\u{1F49B}","\u{1F49A}","\u{1F499}","\u{1F49C}","\u2728","\u{1F389}","\u2B50","\u{1F525}","\u{1F970}","\u{1F60D}","\u{1F44F}","\u{1FAF6}","\u{1F3B6}","\u{1F3B5}"]),nr={"\u2615":{kind:"drink",hot:!0},"\u{1F375}":{kind:"drink",hot:!0},"\u{1FAD6}":{kind:"drink",hot:!0},"\u{1F9CB}":{kind:"drink"},"\u{1F9C3}":{kind:"drink"},"\u{1F95B}":{kind:"drink"},"\u{1F965}":{kind:"drink"},"\u{1F379}":{kind:"drink"},"\u{1F950}":{kind:"snack"},"\u{1F369}":{kind:"snack"},"\u{1F36A}":{kind:"snack"},"\u{1F9C1}":{kind:"snack"},"\u{1F370}":{kind:"snack"},"\u{1F968}":{kind:"snack"},"\u{1F330}":{kind:"snack"},"\u{1F353}":{kind:"snack"},"\u{1F35C}":{kind:"snack",hot:!0},"\u{1F95F}":{kind:"snack",hot:!0},"\u{1F349}":{kind:"snack"},"\u{1F366}":{kind:"snack"}},iu={drink:15e4,snack:9e4},AE=["\u2615","\u{1F375}","\u{1F9CB}","\u{1F950}","\u{1F369}","\u{1F36A}","\u{1F9C1}"];function ir(n){return[...AE,...n.specials]}var RE={sofa:3,loveseat:2,armchair:1,beanbag:1,chair:1,stool:1,swing:1,lounger:1,hammock:1,cushion:1,bench:3};function Kf(n,e){if(typeof e!="string")return!1;let t=/^(\d+):(\d+)$/.exec(e);if(!t)return!1;let i=n.layout[Number(t[1])];return!!i&&Number(t[2])<(RE[i.type]||0)}var su=[{id:"fireside",name:"Fireside Library",emoji:"\u{1F525}",tagline:"crackling fire \xB7 leather & books \xB7 jazzy lo-fi",size:{w:18,d:14},specials:["\u{1FAD6}","\u{1F330}","\u{1F370}"],counter:{x:7.6,z:3.2,r:-90},layout:[{type:"fireplace",x:0,z:-6.55,r:0},{type:"rug",x:0,z:-2.2,w:7.5,d:5.2,pattern:"persian"},{type:"sofa",x:0,z:.6,r:180,color:"#7a3b2e"},{type:"armchair",x:-3.5,z:-2.9,r:90,color:"#5b3a29"},{type:"armchair",x:3.5,z:-2.9,r:-90,color:"#5b3a29"},{type:"coffeeTable",x:0,z:-2.4,r:0},{type:"bookshelf",x:-8.55,z:-3.4,r:90},{type:"bookshelf",x:-8.55,z:.4,r:90},{type:"libraryShelf",x:-4.6,z:-6.6,r:0,books:["sonnets","poems","fables"]},{type:"bookshelf",x:4.6,z:-6.6,r:0},{type:"window",x:8.95,z:-3.2,r:-90,view:"night"},{type:"counter",x:7.6,z:3.2,r:-90},{type:"beanbag",x:-6.2,z:4.4,r:30,color:"#a0522d"},{type:"beanbag",x:-4.2,z:5.4,r:10,color:"#6b8e23"},{type:"cushion",x:-7.2,z:2.6,r:60,color:"#c08552"},{type:"roundTable",x:3,z:4.6},{type:"chair",x:1.9,z:4.6,r:90},{type:"chair",x:4.1,z:4.6,r:-90},{type:"floorLamp",x:-2.4,z:1.7},{type:"floorLamp",x:6.8,z:-5.8},{type:"floorLamp",x:-7.6,z:5.8},{type:"plant",kind:"fiddle",x:-7.7,z:-6},{type:"plant",kind:"snake",x:7.9,z:-6},{type:"plant",kind:"monstera",x:2.6,z:1.9},{type:"plant",kind:"fern",x:8,z:.4},{type:"plant",kind:"fern",x:-8,z:3.2},{type:"turntable",x:-2.4,z:-6.35,r:0},{type:"painting",x:-8.97,z:3.9,r:90,w:1.6,h:1.1},{type:"cat",x:1.5,z:-4.9,r:200},{type:"sideTable",x:-4.7,z:-1.6},{type:"magazineRack",x:2.45,z:-6.35,r:0,books:["gazette","starlight"]},{type:"door",x:-8.97,z:5.2,r:90}]},{id:"greenhouse",name:"Greenhouse Caf\xE9",emoji:"\u{1F33F}",tagline:"sunlit glass \xB7 a jungle of plants \xB7 bossa beats",size:{w:18,d:14},specials:["\u{1FAD6}","\u{1F353}","\u{1F9C3}"],counter:{x:-4.5,z:-6.1,r:0},layout:[{type:"counter",x:-4.5,z:-6.1,r:0},{type:"plant",kind:"tree",x:1.2,z:-2.2},{type:"bench",x:1.2,z:.15,r:0,color:"#c8a26b"},{type:"roundTable",x:-5.2,z:-1.6},{type:"chair",x:-6.3,z:-1.6,r:90,color:"#e9e3d3"},{type:"chair",x:-4.1,z:-1.6,r:-90,color:"#e9e3d3"},{type:"roundTable",x:-5.2,z:3.2},{type:"chair",x:-6.3,z:3.2,r:90,color:"#e9e3d3"},{type:"chair",x:-4.1,z:3.2,r:-90,color:"#e9e3d3"},{type:"roundTable",x:6.4,z:3.6},{type:"chair",x:5.3,z:3.6,r:90,color:"#e9e3d3"},{type:"chair",x:7.5,z:3.6,r:-90,color:"#e9e3d3"},{type:"swing",x:6.6,z:-4.6,r:-35},{type:"swing",x:3.8,z:-5.4,r:-10},{type:"loveseat",x:1.6,z:4.9,r:180,color:"#d9c7a7"},{type:"beanbag",x:-1.6,z:3.8,r:45,color:"#e9b44c"},{type:"plant",kind:"monstera",x:-8,z:-6},{type:"plant",kind:"palm",x:8,z:-6},{type:"plant",kind:"fiddle",x:8.1,z:.2},{type:"plant",kind:"snake",x:-8.1,z:.8},{type:"plant",kind:"fern",x:-8.1,z:-2.6},{type:"plant",kind:"fern",x:8.1,z:-2.4},{type:"plant",kind:"cactus",x:-1.2,z:-6.2},{type:"plant",kind:"flowers",x:.2,z:-6.2},{type:"plant",kind:"flowers",x:4,z:6.2},{type:"plant",kind:"monstera",x:-8,z:5.8},{type:"plant",kind:"palm",x:8,z:6},{type:"plant",kind:"hanging",x:-2.6,z:-3.6},{type:"plant",kind:"hanging",x:4.6,z:-1.2},{type:"plant",kind:"hanging",x:-2.2,z:1.4},{type:"plant",kind:"hanging",x:4.2,z:1.6},{type:"plant",kind:"hanging",x:-6.4,z:.8},{type:"turntable",x:-1,z:5.9,r:180},{type:"cat",x:-2.6,z:-.6,r:40}]},{id:"rooftop",name:"Rainy Rooftop",emoji:"\u{1F327}\uFE0F",tagline:"city lights \xB7 gentle rain \xB7 a crackling fire pit",size:{w:18,d:14},specials:["\u{1F35C}","\u{1F95F}","\u{1FAD6}"],counter:{x:7,z:4.4,r:-90},layout:[{type:"pergola",x:0,z:-1.6,w:11,d:7.5},{type:"firepit",x:0,z:-1.4},{type:"sofa",x:0,z:-4.4,r:0,color:"#6b7a99"},{type:"loveseat",x:-3.6,z:-1.2,r:90,color:"#6b7a99"},{type:"loveseat",x:3.6,z:-1.2,r:-90,color:"#6b7a99"},{type:"beanbag",x:-1.3,z:1.6,r:160,color:"#c96f53"},{type:"beanbag",x:1.3,z:1.6,r:200,color:"#e2b04a"},{type:"counter",x:7,z:4.4,r:-90},{type:"stool",x:5.9,z:3.5,r:90},{type:"stool",x:5.9,z:4.6,r:90},{type:"stool",x:5.9,z:5.7,r:90},{type:"neonSign",x:0,z:-6.75,r:0,text:"chill",color:"#ff5fa2"},{type:"plant",kind:"grass",x:-8,z:-6},{type:"plant",kind:"grass",x:-8,z:-3},{type:"plant",kind:"tree",x:7.8,z:-5.6,small:!0},{type:"plant",kind:"grass",x:8,z:-2.2},{type:"plant",kind:"snake",x:-8,z:1.2},{type:"plant",kind:"fern",x:-6,z:6},{type:"plant",kind:"cactus",x:3.6,z:6.2},{type:"cushion",x:-6,z:3.6,r:30,color:"#6c5b7b"},{type:"cushion",x:-4.4,z:4.6,r:-20,color:"#355c7d"},{type:"sideTable",x:-5.3,z:4},{type:"lantern",x:-2.6,z:4.5},{type:"lantern",x:4.6,z:-5.8},{type:"lantern",x:-6.4,z:-5.8},{type:"turntable",x:-4.6,z:-5.9,r:0}]},{id:"terrace",name:"Sunset Terrace",emoji:"\u{1F305}",tagline:"ocean breeze \xB7 golden hour \xB7 sunny grooves",size:{w:18,d:14},specials:["\u{1F965}","\u{1F379}","\u{1F349}","\u{1F366}"],counter:{x:7.2,z:1,r:-90},layout:[{type:"counter",x:7.2,z:1,r:-90},{type:"stool",x:6.1,z:-.2,r:90},{type:"stool",x:6.1,z:1,r:90},{type:"stool",x:6.1,z:2.2,r:90},{type:"lounger",x:-5.4,z:-4.6,r:180,color:"#f1e3c6"},{type:"lounger",x:-3.2,z:-4.6,r:180,color:"#f1e3c6"},{type:"lounger",x:-1,z:-4.6,r:180,color:"#f1e3c6"},{type:"hammock",x:3.4,z:-4.8,r:180},{type:"rug",x:-3.6,z:2.6,w:5.2,d:4,pattern:"stripes"},{type:"coffeeTable",x:-3.6,z:2.6,r:0,low:!0},{type:"cushion",x:-5.2,z:2.6,r:90,color:"#f28482"},{type:"cushion",x:-2,z:2.6,r:-90,color:"#84a59d"},{type:"cushion",x:-3.6,z:1.2,r:0,color:"#f6bd60"},{type:"cushion",x:-3.6,z:4,r:180,color:"#f5cac3"},{type:"sofa",x:2.2,z:4.6,r:180,color:"#f4efe6"},{type:"armchair",x:4.5,z:2.6,r:-110,color:"#f4efe6"},{type:"plant",kind:"palm",x:-8,z:-5.8},{type:"plant",kind:"palm",x:8,z:-5.8},{type:"plant",kind:"palm",x:-8,z:5.8},{type:"plant",kind:"flowers",x:.8,z:6.2},{type:"plant",kind:"cactus",x:8.1,z:5.9},{type:"plant",kind:"grass",x:-8,z:.4},{type:"lantern",x:-6.8,z:0},{type:"lantern",x:1.4,z:-6},{type:"lantern",x:-.8,z:6},{type:"stringLights",points:[[-8.6,-6.6],[-8.6,6.6],[8.6,6.6],[8.6,-6.6]],height:3.4},{type:"turntable",x:4.6,z:6.1,r:180}]}],Qi=Object.fromEntries(su.map(n=>[n.id,n]));function Zf(n){return n.layout.flatMap(e=>e.books||[])}var CE=1.9,_y=15e3,Jf=4e4;function yy(n,e){let t=(n.r||0)*Math.PI/180;return{x:n.x+Math.sin(t)*e,z:n.z+Math.cos(t)*e}}function ru(n,e){let t=n.layout.find(h=>h.type==="door");if(!t||!e.length)return null;let i=n.layout.filter(h=>h.books),s=yy(t,.8),r=[{kind:"door",...s,wait:1}],o=s,a=[...e];for(;a.length;){a.sort((u,d)=>Math.hypot(u.x-o.x,u.z-o.z)-Math.hypot(d.x-o.x,d.z-o.z));let h=a.shift();r.push({kind:"pick",x:h.x,z:h.z,ids:[h.id],wait:.8}),o=h}for(let h of i){let u=e.filter(d=>h.books.includes(d.id)).map(d=>d.id);u.length&&r.push({kind:"shelve",...yy(h,.75),ids:u,wait:1.2})}r.push({kind:"exit",...s,wait:.8});let c=0,l=r[0];for(let h of r)c+=Math.hypot(h.x-l.x,h.z-l.z)/CE,h.at=c,c+=h.wait,l=h;return{stops:r,duration:c}}function _n(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function es(n){let e=2166136261;for(let t=0;t<n.length;t++)e=Math.imul(e^n.charCodeAt(t),16777619);return e>>>0}function mn(n,e=n){let t=document.createElement("canvas");return t.width=n,t.height=e,[t,t.getContext("2d")]}function Mn(n,e){let t=new Zt(n);return t.colorSpace=bt,t.anisotropy=8,e&&(t.wrapS=t.wrapT=bi,t.repeat.set(e[0],e[1])),t}function ep(n,e){let t=new pe(n);return t.offsetHSL(0,0,e),`#${t.getHexString()}`}function bc({base:n="#8a5a3b",planks:e=8,seed:t=1,repeat:i=[3,3]}={}){let[s,r]=mn(1024),o=_n(t),a=s.height/e;for(let c=0;c<e;c++){let l=-o()*400;for(;l<s.width;){let h=260+o()*300;r.fillStyle=ep(n,(o()-.5)*.08),r.fillRect(l,c*a,h,a),r.globalAlpha=.12;for(let u=0;u<7;u++){r.strokeStyle=ep(n,-.15+o()*.08),r.lineWidth=1+o()*2,r.beginPath();let d=c*a+o()*a;r.moveTo(l,d),r.bezierCurveTo(l+h*.3,d+(o()-.5)*10,l+h*.6,d+(o()-.5)*10,l+h,d),r.stroke()}r.globalAlpha=1,r.fillStyle="rgba(0,0,0,0.35)",r.fillRect(l,c*a,3,a),l+=h}r.fillStyle="rgba(0,0,0,0.4)",r.fillRect(0,c*a,s.width,3)}return Mn(s,i)}function vy({a:n="#c96f4a",b:e="#b85f3e",grout:t="#e8dccb",n:i=8,repeat:s=[3,3],seed:r=2}={}){let[o,a]=mn(1024),c=_n(r),l=o.width/i;a.fillStyle=t,a.fillRect(0,0,o.width,o.height);for(let h=0;h<i;h++)for(let u=0;u<i;u++)a.fillStyle=ep((h+u)%2?n:e,(c()-.5)*.06),a.fillRect(h*l+3,u*l+3,l-6,l-6);return Mn(o,s)}function by({base:n="#5b6068",repeat:e=[4,4],seed:t=3}={}){let[i,s]=mn(1024),r=_n(t);s.fillStyle=n,s.fillRect(0,0,i.width,i.height);for(let o=0;o<6e3;o++){s.fillStyle=`rgba(${r()>.5?"255,255,255":"0,0,0"},${r()*.06})`;let a=1+r()*6;s.fillRect(r()*i.width,r()*i.height,a,a)}s.strokeStyle="rgba(0,0,0,0.35)",s.lineWidth=4;for(let o=0;o<=4;o++)s.beginPath(),s.moveTo(o*256,0),s.lineTo(o*256,1024),s.stroke(),s.beginPath(),s.moveTo(0,o*256),s.lineTo(1024,o*256),s.stroke();return Mn(i,e)}function My({base:n="#3f5a4c",accent:e="#4c6b5b",repeat:t=[6,1.5]}={}){let[i,s]=mn(256,512);s.fillStyle=n,s.fillRect(0,0,256,512),s.fillStyle=e,s.fillRect(0,0,48,512),s.fillRect(128,0,16,512),s.globalAlpha=.25,s.fillStyle="#d9c38c";for(let r=24;r<512;r+=64)s.beginPath(),s.arc(88,r,6,0,Math.PI*2),s.arc(200,r+32,6,0,Math.PI*2),s.fill();return Mn(i,t)}function wy(n,e=4){let[t,i]=mn(1024,768),s=_n(e);if(n==="stripes"){let r=["#f4f1de","#e07a5f","#f2cc8f","#81b29a","#f4f1de","#3d405b"],o=0,a=0;for(;o<t.height;){let c=30+s()*70;i.fillStyle=r[a++%r.length],i.fillRect(0,o,t.width,c),o+=c}}else{i.fillStyle="#7b2d26",i.fillRect(0,0,t.width,t.height),i.strokeStyle="#e8c07d",i.lineWidth=18,i.strokeRect(30,30,t.width-60,t.height-60),i.strokeStyle="#1f3b4d",i.lineWidth=40,i.strokeRect(80,80,t.width-160,t.height-160),i.fillStyle="#e8c07d";for(let r=140;r<t.width-120;r+=60)i.beginPath(),i.arc(r,80,8,0,Math.PI*2),i.arc(r,t.height-80,8,0,Math.PI*2),i.fill();i.save(),i.translate(t.width/2,t.height/2);for(let r=0;r<4;r++){i.fillStyle=["#1f3b4d","#e8c07d","#a8432f","#f3e3c3"][r],i.beginPath();let o=220-r*50;i.moveTo(0,-o),i.lineTo(o*1.4,0),i.lineTo(0,o),i.lineTo(-o*1.4,0),i.closePath(),i.fill()}i.restore(),i.globalAlpha=.08;for(let r=0;r<4e3;r++)i.fillStyle=s()>.5?"#fff":"#000",i.fillRect(s()*t.width,s()*t.height,2,2);i.globalAlpha=1}return Mn(t)}function tp(n=5){let[e,t]=mn(512,360),i=_n(n),s=[["#264653","#2a9d8f","#e9c46a","#f4a261","#e76f51"],["#f1faee","#a8dadc","#457b9d","#1d3557","#e63946"]][Math.floor(i()*2)];t.fillStyle=s[0],t.fillRect(0,0,512,360),t.fillStyle=s[3],t.beginPath(),t.arc(360,120,50,0,Math.PI*2),t.fill();for(let r=0;r<4;r++){t.fillStyle=s[(r+1)%s.length],t.beginPath(),t.moveTo(0,360);let o=200+r*40;for(let a=0;a<=512;a+=32)t.lineTo(a,o+Math.sin(a/70+r*2+i())*30);t.lineTo(512,360),t.fill()}return Mn(e)}function np(n=6,e=.35){let[t,i]=mn(128,256),s=_n(n);i.fillStyle="#0b0f1a",i.fillRect(0,0,128,256);for(let o=6;o<256;o+=16)for(let a=6;a<128;a+=14)s()<e&&(i.fillStyle=["#ffd27a","#ffe8b0","#9ad1ff","#ffb36b"][Math.floor(s()*4)],i.fillRect(a,o,8,9));let r=Mn(t,[1,1]);return r.magFilter=Kt,r}function Sy(n,e){let[t,i]=mn(1024,320);return i.font='italic 700 200px "Brush Script MT", "Segoe Script", cursive',i.textAlign="center",i.textBaseline="middle",i.shadowColor=e,i.shadowBlur=40,i.strokeStyle=e,i.lineWidth=14,i.strokeText(n,512,170),i.shadowBlur=0,i.strokeStyle="#fff",i.lineWidth=5,i.strokeText(n,512,170),Mn(t)}function Ty(n){let[e,t]=mn(512,384);t.fillStyle="#1e2421",t.fillRect(0,0,512,384),t.strokeStyle="#8b6b4a",t.lineWidth=16,t.strokeRect(8,8,496,368),t.font='56px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif',t.textAlign="center",t.textBaseline="middle";let i=4;return n.forEach((s,r)=>{t.fillText(s,80+r%i*118,80+Math.floor(r/i)*100)}),Mn(e)}function Ey(n){let[e,t]=mn(4,512),i=t.createLinearGradient(0,0,0,512);return n.forEach(([s,r])=>i.addColorStop(s,r)),t.fillStyle=i,t.fillRect(0,0,4,512),Mn(e)}var Qf=new Map,Ay='"Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji","Twemoji Mozilla",sans-serif';function ci(n){if(Qf.has(n))return Qf.get(n);let[e,t]=mn(128);t.font=`100px ${Ay}`,t.textAlign="center",t.textBaseline="middle",t.fillText(n,64,72);let i=Mn(e);return i.userData.shared=!0,Qf.set(n,i),i}function Ry(n){let t=64+[...new Intl.Segmenter().segment(n)].length*96,[i,s]=mn(t,150);s.fillStyle="rgba(255,252,245,0.96)",s.strokeStyle="rgba(80,60,40,0.25)",s.lineWidth=4;let r=118;return s.beginPath(),s.roundRect(4,4,t-8,r-8,50),s.moveTo(t/2-16,r-6),s.lineTo(t/2,r+24),s.lineTo(t/2+16,r-6),s.fill(),s.stroke(),s.font=`80px ${Ay}`,s.textAlign="center",s.textBaseline="middle",s.fillStyle="#000",s.fillText(n,t/2,r/2+6),{tex:Mn(i),aspect:t/150}}var ip=["#6b2d24","#8a5a34","#2f4a3a","#2c3550","#4a2c3e","#5a3a22","#7a4a2a","#3a3a3a"];function Cy(n,e,t,i,s){for(let r=0;r<e*t*s;r++){let o=i();n.fillStyle=o>.5?`rgba(255,240,220,${(o-.5)*.08})`:`rgba(0,0,0,${o*.12})`;let a=1+i()*2.5;n.fillRect(i()*e,i()*t,a,a)}n.globalAlpha=.07,n.strokeStyle="#000";for(let r=0;r<26;r++){n.lineWidth=1+i()*2,n.beginPath();let o=i()*e,a=i()*t;n.moveTo(o,a),n.quadraticCurveTo(o+(i()-.5)*120,a+(i()-.5)*120,o+(i()-.5)*200,a+(i()-.5)*200),n.stroke()}n.globalAlpha=1}function PE(n,e,t,i){let s=e.split(/\s+/),r=[],o="";for(let a of s){let c=o?`${o} ${a}`:a;n.measureText(c).width>t&&o?(r.push(o),o=a):o=c}return o&&r.push(o),r.length>i&&(r.length=i,r[i-1]=`${r[i-1].replace(/\s*\S*$/,"")}\u2026`),r}function ou(n,e,t=.7,i=7){let r=Math.round(1024*t),[o,a]=mn(r,1024),c=_n(i);a.fillStyle=n,a.fillRect(0,0,r,1024),Cy(a,r,1024,c,.02);let l=a.createRadialGradient(r/2,1024/2,1024*.2,r/2,1024/2,1024*.75);l.addColorStop(0,"rgba(255,255,255,0.06)"),l.addColorStop(1,"rgba(0,0,0,0.35)"),a.fillStyle=l,a.fillRect(0,0,r,1024),a.setLineDash([14,10]),a.lineWidth=4,a.strokeStyle="rgba(232,206,150,0.55)",a.strokeRect(34,34,r-68,956),a.setLineDash([]),a.lineWidth=3,a.strokeStyle="rgba(214,176,92,0.85)",a.strokeRect(70,70,r-140,884);let h=a.createLinearGradient(0,1024*.3,0,1024*.6);h.addColorStop(0,"#f6dc8c"),h.addColorStop(.5,"#c9a243"),h.addColorStop(1,"#f1d27a"),a.fillStyle=h,a.textAlign="center",a.textBaseline="middle",a.font='700 64px Georgia, "Times New Roman", serif';let u=PE(a,e,r-200,4),d=78,f=1024*.42-(u.length-1)*d/2;return a.shadowColor="rgba(0,0,0,0.6)",a.shadowOffsetY=3,a.shadowBlur=4,u.forEach((g,x)=>a.fillText(g,r/2,f+x*d)),a.shadowColor="transparent",a.font="48px Georgia, serif",a.fillText("\u2766",r/2,f-d*1.1),a.fillText("\u2766",r/2,f+u.length*d+d*.2),Mn(o)}function au(n,e=8){let[t,i]=mn(256);return i.fillStyle=n,i.fillRect(0,0,256,256),Cy(i,256,256,_n(e),.03),Mn(t)}function Py(n=3){let[e,t]=mn(512,720),i=_n(n),s=["#1f3b5a","#b8573a","#e6c88f","#2f5d50","#f3e9d2","#7a2f3a"];t.fillStyle="#efe2c4",t.fillRect(0,0,512,720);for(let a=0;a<260;a++)t.fillStyle=s[Math.floor(i()*s.length)],t.globalAlpha=.55,t.beginPath(),t.arc(i()*512,i()*720,6+i()*40,0,Math.PI*2),t.fill();let r=t.getImageData(0,0,512,720),o=t.createImageData(512,720);for(let a=0;a<720;a++)for(let c=0;c<512;c++){let l=Math.min(511,Math.max(0,Math.round(c+Math.sin(a/18)*22+Math.sin(a/5.3)*4))),u=(Math.min(719,Math.max(0,Math.round(a+Math.sin(c/30)*26)))*512+l)*4,d=(a*512+c)*4;o.data[d]=r.data[u],o.data[d+1]=r.data[u+1],o.data[d+2]=r.data[u+2],o.data[d+3]=255}return t.putImageData(o,0,0),t.globalAlpha=1,Mn(e)}function Iy(){let[n,e]=mn(64,256);e.fillStyle="#efe6d2",e.fillRect(0,0,64,256);for(let i=0;i<256;i+=2)e.fillStyle=`rgba(120,100,70,${.08+Math.random()*.1})`,e.fillRect(0,i,64,1);return Mn(n,[1,6])}function Ly(n=256,e=31){let t=_n(e),i=Array.from({length:9},()=>({kx:Math.round((t()-.5)*16)||1,ky:Math.round((t()-.5)*16)||1,a:.3+t(),p:t()*Math.PI*2})),s=new Float32Array(n*n);for(let l=0;l<n;l++)for(let h=0;h<n;h++){let u=0;for(let d of i)u+=d.a*Math.sin((d.kx*h+d.ky*l)/n*Math.PI*2+d.p);s[l*n+h]=u}let[r,o]=mn(n),a=o.createImageData(n,n);for(let l=0;l<n;l++)for(let h=0;h<n;h++){let u=s[l*n+(h+1)%n]-s[l*n+(h-1+n)%n],d=s[(l+1)%n*n+h]-s[(l-1+n)%n*n+h],f=Math.hypot(u,d,2),g=(l*n+h)*4;a.data[g]=(-u/f*.5+.5)*255,a.data[g+1]=(-d/f*.5+.5)*255,a.data[g+2]=(2/f*.5+.5)*255,a.data[g+3]=255}o.putImageData(a,0,0);let c=new Zt(r);return c.wrapS=c.wrapT=bi,c.colorSpace=Ii,c}var vc=null;function Dy(){if(vc)return vc;let[n,e]=mn(128),t=e.createRadialGradient(64,64,4,64,64,62);return t.addColorStop(0,"rgba(0,0,0,0.55)"),t.addColorStop(.6,"rgba(0,0,0,0.25)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),vc=new Zt(n),vc.userData.shared=!0,vc}function Ny(n=17){let[e,t]=mn(512),i=_n(n);t.fillStyle="#4e4741",t.fillRect(0,0,512,512);let s=0;for(;s<512;){let o=34+i()*30,a=-i()*40;for(;a<512;){let c=50+i()*70,l=.42+i()*.2,h=new pe().setHSL(.07+i()*.03,.08+i()*.07,l);t.fillStyle=`#${h.getHexString()}`,t.beginPath(),t.roundRect(a+3,s+3,c-6,o-6,10),t.fill();let u=t.createLinearGradient(0,s,0,s+o);u.addColorStop(0,"rgba(255,255,255,0.12)"),u.addColorStop(1,"rgba(0,0,0,0.25)"),t.fillStyle=u,t.fill();for(let d=0;d<18;d++)t.fillStyle=`rgba(${i()>.5?"255,255,255":"0,0,0"},${i()*.08})`,t.fillRect(a+i()*c,s+i()*o,2+i()*4,2+i()*4);a+=c}s+=o}return Mn(e,[1,1])}var ky={fireside:{background:"#1c130e",fog:["#1c130e",40,90],exposure:1.15,floor:()=>bc({base:"#7a4e30",repeat:[3,2.4]}),slab:"#2f2118",walls:{kind:"solid",height:4.2,paper:{base:"#3d5747",accent:"#45614f"},wainscot:"#4a3020",trim:"#2a1c13"},outside:"none",hemi:["#ffd9b0","#2b1a10",.3],key:{color:"#ffdcb0",intensity:.6,pos:[5,14,9]},envIntensity:.22,particles:"dust",dustColor:"#ffcf8a",wood:"#5a3b28",shelfWood:"#4a3020",counter:"#3b4d3f",counterTop:"#d9cbb3",awning:"#8c2f39",curtain:"#7d2b33",chairSeat:"#6e4630",record:"#e9c46a",lampPower:7,music:{title:"hearth & paper",bpm:72,swing:.3,progression:[{bass:38,notes:[53,57,60,64]},{bass:43,notes:[53,59,64,69]},{bass:36,notes:[52,55,59,62]},{bass:45,notes:[55,59,60,64]}],scale:[60,62,64,67,69,72,74,76],lead:"keys",tone:2600,kick:[0,10],density:.32,ambience:"fire"}},greenhouse:{background:"#cfe8f5",fog:["#cfe3ee",60,260],exposure:.62,floor:()=>vy({a:"#c97b54",b:"#b96a46",grout:"#eadfce",n:8,repeat:[3,2.4]}),slab:"#9c8b7a",walls:{kind:"glass",height:4.2,knee:"#b5674d",frame:"#f4f1ea"},roof:!0,ceiling:4.2,outside:"garden",sun:{elevation:52,azimuth:50,turbidity:2.5,rayleigh:1.1,clouds:.3},hemi:["#eaf6ff","#6b8f5a",.25],key:{color:"#fff4e2",intensity:2.6,pos:[9,15,7]},envIntensity:.55,particles:"pollen",dustColor:"#fff6c8",wood:"#b08968",counter:"#5e8c61",counterTop:"#f2ede4",awning:"#5e8c61",chairFrame:"#f2ede4",tableTop:"#f7f3ec",record:"#52b788",counterLight:2,greens:["#2d6a4f","#40916c","#52b788","#1b4332"],music:{title:"photosynthesis",bpm:86,swing:.18,progression:[{bass:41,notes:[57,60,64,67]},{bass:40,notes:[55,59,62,67]},{bass:38,notes:[53,57,60,64]},{bass:43,notes:[53,60,62,67]}],scale:[72,74,76,79,81,84,86],lead:"pluck",tone:4200,kick:[0,7,10],density:.4,ambience:"birds"}},rooftop:{background:"#0b0f1c",fog:["#1a1d27",35,150],exposure:1.2,floor:()=>by({base:"#4d535c",repeat:[3,2.4]}),floorRough:.32,floorMetal:.1,slab:"#2a2e36",walls:{kind:"parapet",height:1,color:"#5a5f68",rail:"#8a8f98"},outside:"city",sky:[[0,"#07080d"],[.32,"#12151d"],[.45,"#2c2a2e"],[.5,"#46403c"],[.53,"#181b24"],[1,"#0b0d14"]],hemi:["#46506a","#141218",.45],key:{color:"#aab8d8",intensity:.35,pos:[-6,14,6]},envIntensity:1.2,particles:"rain",wood:"#4a3a30",counter:"#2b3a55",counterTop:"#c9c3b8",awning:"#2a9d8f",record:"#ff5fa2",pergolaLight:4,counterLight:5,greens:["#2f5d50","#3e7a5e","#4c956c","#1e3d32"],music:{title:"neon puddles",bpm:70,swing:.32,progression:[{bass:45,notes:[55,59,60,64]},{bass:41,notes:[52,57,60,64]},{bass:36,notes:[52,55,59,64]},{bass:40,notes:[55,59,62,67]}],scale:[69,72,74,76,79,81,84],lead:"bell",tone:2200,kick:[0,7,10],density:.28,ambience:"rain"}},terrace:{background:"#f2a46b",fog:["#b98a7c",90,420],exposure:.85,floor:()=>bc({base:"#b0835a",planks:10,seed:9,repeat:[3,2.4]}),slab:"#7a5a40",slabDepth:.35,walls:{kind:"railing",height:1.05,color:"#8d6748",rope:"#e6d3b3"},outside:"ocean",sun:{elevation:1.6,azimuth:172,turbidity:10,rayleigh:3.2,mie:.012,mieG:.92,clouds:.3},hemi:["#ffc59a","#4a3a5a",.3],key:{color:"#ffb070",intensity:2.6,pos:[-3,6,-20]},envIntensity:.9,particles:"fireflies",wood:"#a0764f",counter:"#7a5a40",counterTop:"#e9d8b4",awning:"#e07a5f",record:"#f6bd60",stringLight:2.5,counterLight:3,greens:["#3a7d44","#57a55a","#6aa84f","#2d6a4f"],music:{title:"golden hour",bpm:90,swing:.15,progression:[{bass:38,notes:[54,57,61,64]},{bass:47,notes:[54,57,62,66]},{bass:43,notes:[54,59,62,66]},{bass:45,notes:[55,59,62,64]}],scale:[66,69,71,74,76,78,81],lead:"marimba",tone:4800,kick:[0,6,10],density:.38,ambience:"waves"}}};function rp(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,c=new yt,l=0;for(let h=0;h<n.length;++h){let u=n[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(t){let h=0,u=[];for(let d=0;d<n.length;++d){let f=n[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=n[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=Uy(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][d]);let g=Uy(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}}return c}function Uy(n){let e,t,i,s=-1,r=0;for(let l=0;l<n.length;++l){let h=n[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new Xt(o,t,i),c=0;for(let l=0;l<n.length;++l){let h=n[l];if(h.isInterleavedBufferAttribute){let u=c/t;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<t;g++){let x=h.getComponent(d,g);a.setComponent(d+u,g,x)}}else o.set(h.array,c);c+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function op(n,e){if(e===Sf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Yo||e===mc){let t=n.getIndex();if(t===null){let r=[],o=n.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);n.setIndex(r),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}let i=t.count-2,s=[];if(e===Yo)for(let r=1;r<=i;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<i;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),n.setIndex(s),n.clearGroups(),n}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}var Mc=class n extends ce{constructor(){let e=n.SkyShader,t=new bn({name:e.name,uniforms:Yh.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:qt,depthWrite:!1});super(new Vt(1,1,1),t),this.isSky=!0}};Mc.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new I},cloudScale:{value:2e-4},cloudSpeed:{value:2e-5},cloudCoverage:{value:.4},cloudDensity:{value:.4},cloudElevation:{value:.5},showSunDisc:{value:1},time:{value:0}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calculation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( vSunDirection.y );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorption + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform float cloudScale;
		uniform float cloudSpeed;
		uniform float cloudCoverage;
		uniform float cloudDensity;
		uniform float cloudElevation;
		uniform float showSunDisc;
		uniform float time;

		// gradient at a lattice corner; sinless hash so every GPU produces the same clouds
		vec2 gradient( vec2 i ) {
			vec3 p = fract( i.xyx * vec3( 0.1031, 0.1030, 0.0973 ) );
			p += dot( p, p.yzx + 33.33 );
			return fract( ( p.xx + p.yz ) * p.zy ) * 2.0 - 1.0;
		}

		// 2D gradient noise: isotropic lobes like Perlin at value-noise cost
		float noise( vec2 p ) {
			vec2 i = floor( p );
			vec2 f = fract( p );
			vec2 u = f * f * f * ( f * ( f * 6.0 - 15.0 ) + 10.0 ); // quintic fade
			float a = dot( gradient( i ), f );
			float b = dot( gradient( i + vec2( 1.0, 0.0 ) ), f - vec2( 1.0, 0.0 ) );
			float c = dot( gradient( i + vec2( 0.0, 1.0 ) ), f - vec2( 0.0, 1.0 ) );
			float d = dot( gradient( i + vec2( 1.0, 1.0 ) ), f - vec2( 1.0, 1.0 ) );
			return mix( mix( a, b, u.x ), mix( c, d, u.x ), u.y ) * 1.6; // ~[-1,1]
		}

		// fbm; per-octave drift makes clouds billow instead of scrolling as a rigid stamp
		float fbm( vec2 p, float drift ) {
			float result = 0.0;
			float amplitude = 1.0;
			for ( int i = 0; i < 4; i ++ ) {
				result += amplitude * noise( p );
				amplitude *= 0.5;
				p = p * 2.0 + drift;
			}
			return result;
		}

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, direction.y ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - vSunDirection.y, 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisc = clamp( ( cosTheta - sunAngularDiameterCos ) * 50000.0, 0.0, 1.0 ) * showSunDisc;
			vec3 sundiscColor = ( 760.0 * sundisc ) * min( vSunE * Fex, 80.0 );

			vec3 texColor = ( Lin + L0 ) * 0.04 + sundiscColor + vec3( 0.0, 0.0003, 0.00075 );

			// Clouds
			if ( direction.y > 0.0 && cloudCoverage > 0.0 ) {

				// Project to cloud plane (higher elevation = clouds appear lower/closer)
				float elevation = mix( 1.0, 0.1, cloudElevation );
				vec2 cloudUV = direction.xz / ( direction.y * elevation );
				cloudUV *= cloudScale;
				cloudUV += time * cloudSpeed;

				// Cloud density field
				float evolve = time * cloudSpeed * 300.0;
				float cloudNoise = clamp( fbm( cloudUV * 1000.0, evolve ) * 0.7 + 0.5, 0.0, 1.0 );

				// Large-scale coverage variation: clear gaps next to dense banks
				float region = noise( cloudUV * 300.0 ) * 0.37 + 0.5;
				float cov = clamp( cloudCoverage + ( region - 0.5 ) * 0.6, 0.0, 1.0 );

				// Carve clouds where noise rises above the coverage level
				float threshold = 1.0 - cov;
				float cloudMask = smoothstep( threshold, threshold + 0.3, cloudNoise );

				// Fade clouds near horizon (adjusted by elevation)
				float horizonFade = smoothstep( 0.0, 0.03 + 0.06 * cloudElevation, direction.y );
				cloudMask *= horizonFade;

				// Cloud lighting from the sky's own radiance
				float dayFactor = smoothstep( -0.08, 0.3, vSunDirection.y );
				vec3 sunColor = vSunE * Fex * 0.22 * 0.04; // 0.22 ~ albedo/pi, 0.04 = exposure; the aerial composite adds the eye-leg extinction
				vec3 skyAmbient = Lin * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

				// Beer-powder self-shadow from the sampled density
				float depth = max( 0.0, cloudNoise - threshold );
				float beer = exp( depth * -4.0 );
				float powder = 1.0 - beer * beer; // beer*beer == exp(-8*depth)
				float shade = mix( 0.45, 1.0, clamp( beer * powder * 2.6, 0.0, 1.0 ) ); // 2.6 = 1/0.385, normalizes beer*powder peak to 1

				// Henyey-Greenstein forward lobe ( g = 0.7 ): silver lining on rims toward the sun
				float silver = clamp( 0.51 / pow( 1.49 - cosTheta * 1.4, 1.5 ), 0.0, 3.0 ); // 0.51=1-g^2, 1.49=1+g^2, 1.4=2g
				float edge = cloudMask * ( 1.0 - cloudMask ) * 4.0;

				vec3 cloudColor = skyAmbient + sunColor * shade;
				cloudColor += sunColor * silver * edge * 0.6;
				cloudColor *= max( dayFactor, 0.03 );

				// Cloud opacity via Beer's law: density sets how solid the clouds get
				float alpha = ( 1.0 - exp( depth * cloudDensity * -12.0 ) ) * horizonFade;

				// Occlude the sun disc/glow behind opaque cloud
				texColor -= L0 * 0.04 * alpha;

				// Composite through the atmosphere so distant clouds dissolve into haze
				vec3 cloudAerial = mix( texColor, cloudColor, Fex );
				texColor = mix( texColor, cloudAerial, alpha );

			}

			gl_FragColor = vec4( texColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var cu=class extends ps{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Vt;e.deleteAttribute("uv");let t=new st({side:qt}),i=new st,s=new xn(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new ce(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new wi(e,i,6),a=new Bt;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let c=new ce(e,Qo(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new ce(e,Qo(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let h=new ce(e,Qo(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new ce(e,Qo(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new ce(e,Qo(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new ce(e,Qo(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Qo(n){return new Ja({color:0,emissive:16777215,emissiveIntensity:n})}var wc=new I;function li(n,e,t,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;wc.copy(e),wc[i]=0,wc.normalize();let l=.5*o/(o+a),h=1-wc.angleTo(n)/c;return Math.sign(wc[t])===1?h*l:a/(o+a)+l+l*(1-h)}var lu=class n extends Vt{constructor(e=1,t=1,i=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let c=new I,l=new I,h=new I(e,t,i).divideScalar(2).subScalar(r),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,g=u.length/6,x=new I,m=.5/o;for(let p=0,y=0;p<u.length;p+=3,y+=2)switch(c.fromArray(u,p),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),u[p+0]=h.x*Math.sign(c.x)+l.x*r,u[p+1]=h.y*Math.sign(c.y)+l.y*r,u[p+2]=h.z*Math.sign(c.z)+l.z*r,d[p+0]=l.x,d[p+1]=l.y,d[p+2]=l.z,Math.floor(p/g)){case 0:x.set(1,0,0),f[y+0]=li(x,l,"z","y",r,i),f[y+1]=1-li(x,l,"y","z",r,t);break;case 1:x.set(-1,0,0),f[y+0]=1-li(x,l,"z","y",r,i),f[y+1]=1-li(x,l,"y","z",r,t);break;case 2:x.set(0,1,0),f[y+0]=1-li(x,l,"x","z",r,e),f[y+1]=li(x,l,"z","x",r,i);break;case 3:x.set(0,-1,0),f[y+0]=1-li(x,l,"x","z",r,e),f[y+1]=1-li(x,l,"z","x",r,i);break;case 4:x.set(0,0,1),f[y+0]=1-li(x,l,"x","y",r,e),f[y+1]=1-li(x,l,"y","x",r,t);break;case 5:x.set(0,0,-1),f[y+0]=li(x,l,"x","y",r,e),f[y+1]=1-li(x,l,"y","x",r,t);break}}static fromJSON(e){return new n(e.width,e.height,e.depth,e.segments,e.radius)}};var it='Georgia, "Times New Roman", serif',ts="#2b2118",qn="#8a6a4a",ap=null;function Oy(n,e){return ap??=document.createElement("canvas").getContext("2d"),ap.font=n,ap.measureText(e).width}function Br(n,e,t){let i=typeof t=="function"?t:()=>t,s=[],r="";for(let o of n.split(/\s+/).filter(Boolean)){let a=r?`${r} ${o}`:o;r&&Oy(e,a)>i(s.length)?(s.push(r),r=o):r=a}return r&&s.push(r),s}function zr(n,e,t,i,s,{font:r=`11px ${it}`,lh:o=15,color:a=ts,maxY:c=1/0}={}){n.font=r,n.fillStyle=a,n.textAlign="left";for(let l of e.split(`

`)){for(let h of Br(l,r,s)){if(i>c)return i;n.fillText(h,t,i),i+=o}i+=o*.5}return i}function IE(n,e){for(let t of e)t.t==="text"?(n.font=t.font,n.fillStyle=t.color||ts,n.textAlign=t.align||"left",n.textBaseline="alphabetic",n.fillText(t.text,t.x,t.y)):t.t==="rule"&&(n.strokeStyle=t.color||qn,n.lineWidth=t.w||.8,n.beginPath(),n.moveTo(t.x1,t.y),n.lineTo(t.x2,t.y),n.stroke())}function hu(n,e=420,t=595){let i={top:70,bottom:64,left:56,right:56},s=[],r,o,a=(f,g,x,m,p={})=>r.push({t:"text",x:f,y:g,font:x,text:m,...p}),c=()=>{r=[],s.push(r),o=i.top,a(e/2,40,`italic 9px ${it}`,n.title,{align:"center",color:qn})};r=[],s.push(r),a(e/2,t*.36,`bold 30px ${it}`,n.title,{align:"center"}),n.subtitle&&a(e/2,t*.36+30,`italic 13px ${it}`,n.subtitle,{align:"center",color:qn}),a(e/2,t*.5,`20px ${it}`,"\u2766",{align:"center",color:qn}),a(e/2,t*.6,`14px ${it}`,n.author,{align:"center"}),n.note&&a(e/2,t-70,`italic 9px ${it}`,n.note,{align:"center",color:qn});let l=`11.5px ${it}`,h=16,u=e-i.left-i.right,d=f=>o+f<=t-i.bottom;for(let f of n.sections){if(c(),a(e/2,o+8,`bold 17px ${it}`,f.title,{align:"center"}),o+=30,f.byline&&(a(e/2,o,`italic 10px ${it}`,f.byline,{align:"center",color:qn}),o+=14),r.push({t:"rule",x1:e/2-24,x2:e/2+24,y:o+2}),o+=24,f.verse)for(let g of f.text.trim().split(`
`)){let x=g.trim();if(!x){o+=h*.6;continue}let m=/^\s{2,}/.test(g)?16:0;Br(x,l,p=>u-24-m-(p?14:0)).forEach((p,y)=>{d(h)||c(),a(i.left+12+m+(y?14:0),o,l,p),o+=h})}else f.text.trim().split(/\n\s*\n/).forEach((g,x)=>{let m=g.replace(/\s+/g," ").trim();if(x===0){let p=m[0],y=`bold 38px ${it}`,v=Oy(y,p)+5;d(h*3)||c(),a(i.left,o+h*1.35,y,p,{color:"#7a2f22"}),Br(m.slice(1),l,_=>_<2?u-v:u).forEach((_,w)=>{d(h)||c(),a(i.left+(w<2?v:0),o,l,_),o+=h})}else Br(m,l,p=>p?u:u-16).forEach((p,y)=>{d(h)||c(),a(i.left+(y?0:16),o,l,p),o+=h});o+=3}),f.moral&&(o+=8,Br(f.moral,`italic 11px ${it}`,u-30).forEach(g=>{d(h)||c(),a(e/2,o,`italic 11px ${it}`,g,{align:"center",color:"#7a2f22"}),o+=h}));d(30)&&a(e/2,o+18,`14px ${it}`,"\u2766",{align:"center",color:qn})}return s.forEach((f,g)=>{g>0&&f.push({t:"text",x:e/2,y:t-34,font:`10px ${it}`,text:String(g+1),align:"center",color:qn})}),s.map(f=>({w:e,h:t,draw:g=>IE(g,f)}))}var Sc=(n,e)=>({title:n,verse:!0,text:e}),ea={sonnets:{title:"Sonnets",subtitle:"a small selection",author:"William Shakespeare",note:"First published 1609 \xB7 public domain",leather:"#6b2d24",sections:[Sc("XVIII",`Shall I compare thee to a summer's day?
Thou art more lovely and more temperate:
Rough winds do shake the darling buds of May,
And summer's lease hath all too short a date;
Sometime too hot the eye of heaven shines,
And often is his gold complexion dimm'd;
And every fair from fair sometime declines,
By chance or nature's changing course untrimm'd;
But thy eternal summer shall not fade,
Nor lose possession of that fair thou ow'st;
Nor shall Death brag thou wander'st in his shade,
When in eternal lines to time thou grow'st:
So long as men can breathe or eyes can see,
So long lives this, and this gives life to thee.`),Sc("XXIX",`When, in disgrace with fortune and men's eyes,
I all alone beweep my outcast state,
And trouble deaf heaven with my bootless cries,
And look upon myself and curse my fate,
Wishing me like to one more rich in hope,
Featured like him, like him with friends possess'd,
Desiring this man's art and that man's scope,
With what I most enjoy contented least;
Yet in these thoughts myself almost despising,
Haply I think on thee, and then my state,
Like to the lark at break of day arising
From sullen earth, sings hymns at heaven's gate;
For thy sweet love remember'd such wealth brings
That then I scorn to change my state with kings.`),Sc("LXXIII",`That time of year thou mayst in me behold
When yellow leaves, or none, or few, do hang
Upon those boughs which shake against the cold,
Bare ruin'd choirs, where late the sweet birds sang.
In me thou see'st the twilight of such day
As after sunset fadeth in the west,
Which by and by black night doth take away,
Death's second self, that seals up all in rest.
In me thou see'st the glowing of such fire
That on the ashes of his youth doth lie,
As the death-bed whereon it must expire,
Consum'd with that which it was nourish'd by.
This thou perceiv'st, which makes thy love more strong,
To love that well which thou must leave ere long.`),Sc("CXVI",`Let me not to the marriage of true minds
Admit impediments. Love is not love
Which alters when it alteration finds,
Or bends with the remover to remove.
O no! it is an ever-fixed mark
That looks on tempests and is never shaken;
It is the star to every wand'ring bark,
Whose worth's unknown, although his height be taken.
Love's not Time's fool, though rosy lips and cheeks
Within his bending sickle's compass come;
Love alters not with his brief hours and weeks,
But bears it out even to the edge of doom.
If this be error and upon me prov'd,
I never writ, nor no man ever lov'd.`),Sc("CXXX",`My mistress' eyes are nothing like the sun;
Coral is far more red than her lips' red;
If snow be white, why then her breasts are dun;
If hairs be wires, black wires grow on her head.
I have seen roses damask'd, red and white,
But no such roses see I in her cheeks;
And in some perfumes is there more delight
Than in the breath that from my mistress reeks.
I love to hear her speak, yet well I know
That music hath a far more pleasing sound;
I grant I never saw a goddess go;
My mistress, when she walks, treads on the ground:
And yet, by heaven, I think my love as rare
As any she belied with false compare.`)]},poems:{title:"Fireside Poems",subtitle:"verses for a long evening",author:"An anthology",note:"All poems in the public domain",leather:"#2f4a3a",sections:[{title:"Ozymandias",byline:"Percy Bysshe Shelley \xB7 1818",verse:!0,text:`I met a traveller from an antique land,
Who said\u2014"Two vast and trunkless legs of stone
Stand in the desert. . . . Near them, on the sand,
Half sunk a shattered visage lies, whose frown,
And wrinkled lip, and sneer of cold command,
Tell that its sculptor well those passions read
Which yet survive, stamped on these lifeless things,
The hand that mocked them, and the heart that fed;
And on the pedestal, these words appear:
My name is Ozymandias, King of Kings;
Look on my Works, ye Mighty, and despair!
Nothing beside remains. Round the decay
Of that colossal Wreck, boundless and bare
The lone and level sands stretch far away."`},{title:"I Wandered Lonely as a Cloud",byline:"William Wordsworth \xB7 1807",verse:!0,text:`I wandered lonely as a cloud
That floats on high o'er vales and hills,
When all at once I saw a crowd,
A host, of golden daffodils;
Beside the lake, beneath the trees,
Fluttering and dancing in the breeze.

Continuous as the stars that shine
And twinkle on the milky way,
They stretched in never-ending line
Along the margin of a bay:
Ten thousand saw I at a glance,
Tossing their heads in sprightly dance.

The waves beside them danced; but they
Out-did the sparkling waves in glee:
A poet could not but be gay,
In such a jocund company:
I gazed\u2014and gazed\u2014but little thought
What wealth the show to me had brought:

For oft, when on my couch I lie
In vacant or in pensive mood,
They flash upon that inward eye
Which is the bliss of solitude;
And then my heart with pleasure fills,
And dances with the daffodils.`},{title:"The Tyger",byline:"William Blake \xB7 1794",verse:!0,text:`Tyger Tyger, burning bright,
In the forests of the night;
What immortal hand or eye,
Could frame thy fearful symmetry?

In what distant deeps or skies,
Burnt the fire of thine eyes?
On what wings dare he aspire?
What the hand, dare seize the fire?

And what shoulder, & what art,
Could twist the sinews of thy heart?
And when thy heart began to beat,
What dread hand? & what dread feet?

What the hammer? what the chain,
In what furnace was thy brain?
What the anvil? what dread grasp,
Dare its deadly terrors clasp!

When the stars threw down their spears
And water'd heaven with their tears:
Did he smile his work to see?
Did he who made the Lamb make thee?

Tyger Tyger burning bright,
In the forests of the night:
What immortal hand or eye,
Dare frame thy fearful symmetry?`},{title:"To Autumn",byline:"John Keats \xB7 1819",verse:!0,text:`Season of mists and mellow fruitfulness,
Close bosom-friend of the maturing sun;
Conspiring with him how to load and bless
With fruit the vines that round the thatch-eves run;
To bend with apples the moss'd cottage-trees,
And fill all fruit with ripeness to the core;
To swell the gourd, and plump the hazel shells
With a sweet kernel; to set budding more,
And still more, later flowers for the bees,
Until they think warm days will never cease,
For summer has o'er-brimm'd their clammy cells.

Who hath not seen thee oft amid thy store?
Sometimes whoever seeks abroad may find
Thee sitting careless on a granary floor,
Thy hair soft-lifted by the winnowing wind;
Or on a half-reap'd furrow sound asleep,
Drows'd with the fume of poppies, while thy hook
Spares the next swath and all its twined flowers:
And sometimes like a gleaner thou dost keep
Steady thy laden head across a brook;
Or by a cyder-press, with patient look,
Thou watchest the last oozings hours by hours.

Where are the songs of spring? Ay, Where are they?
Think not of them, thou hast thy music too,\u2014
While barred clouds bloom the soft-dying day,
And touch the stubble-plains with rosy hue;
Then in a wailful choir the small gnats mourn
Among the river sallows, borne aloft
Or sinking as the light wind lives or dies;
And full-grown lambs loud bleat from hilly bourn;
Hedge-crickets sing; and now with treble soft
The red-breast whistles from a garden-croft;
And gathering swallows twitter in the skies.`},{title:"Stopping by Woods on a Snowy Evening",byline:"Robert Frost \xB7 1923",verse:!0,text:`Whose woods these are I think I know.
His house is in the village though;
He will not see me stopping here
To watch his woods fill up with snow.

My little horse must think it queer
To stop without a farmhouse near
Between the woods and frozen lake
The darkest evening of the year.

He gives his harness bells a shake
To ask if there is some mistake.
The only other sound's the sweep
Of easy wind and downy flake.

The woods are lovely, dark and deep,
But I have promises to keep,
And miles to go before I sleep,
And miles to go before I sleep.`},{title:"The Road Not Taken",byline:"Robert Frost \xB7 1916",verse:!0,text:`Two roads diverged in a yellow wood,
And sorry I could not travel both
And be one traveler, long I stood
And looked down one as far as I could
To where it bent in the undergrowth;

Then took the other, as just as fair,
And having perhaps the better claim,
Because it was grassy and wanted wear;
Though as for that the passing there
Had worn them really about the same,

And both that morning equally lay
In leaves no step had trodden black.
Oh, I kept the first for another day!
Yet knowing how way leads on to way,
I doubted if I should ever come back.

I shall be telling this with a sigh
Somewhere ages and ages hence:
Two roads diverged in a wood, and I\u2014
I took the one less traveled by,
And that has made all the difference.`},{title:'"Hope" is the thing with feathers',byline:"Emily Dickinson \xB7 1891",verse:!0,text:`"Hope" is the thing with feathers -
That perches in the soul -
And sings the tune without the words -
And never stops - at all -

And sweetest - in the Gale - is heard -
And sore must be the storm -
That could abash the little Bird
That kept so many warm -

I've heard it in the chillest land -
And on the strangest Sea -
Yet - never - in Extremity,
It asked a crumb - of me.`},{title:"There Will Come Soft Rains",byline:"Sara Teasdale \xB7 1918",verse:!0,text:`There will come soft rains and the smell of the ground,
And swallows circling with their shimmering sound;

And frogs in the pools singing at night,
And wild plum trees in tremulous white;

Robins will wear their feathery fire,
Whistling their whims on a low fence-wire;

And not one will know of the war, not one
Will care at last when it is done.

Not one would mind, neither bird nor tree,
If mankind perished utterly;

And Spring herself, when she woke at dawn
Would scarcely know that we were gone.`},{title:"Jabberwocky",byline:"Lewis Carroll \xB7 1871",verse:!0,text:`'Twas brillig, and the slithy toves
Did gyre and gimble in the wabe:
All mimsy were the borogoves,
And the mome raths outgrabe.

"Beware the Jabberwock, my son!
The jaws that bite, the claws that catch!
Beware the Jubjub bird, and shun
The frumious Bandersnatch!"

He took his vorpal sword in hand;
Long time the manxome foe he sought\u2014
So rested he by the Tumtum tree
And stood awhile in thought.

And, as in uffish thought he stood,
The Jabberwock, with eyes of flame,
Came whiffling through the tulgey wood,
And burbled as it came!

One, two! One, two! And through and through
The vorpal blade went snicker-snack!
He left it dead, and with its head
He went galumphing back.

"And hast thou slain the Jabberwock?
Come to my arms, my beamish boy!
O frabjous day! Callooh! Callay!"
He chortled in his joy.

'Twas brillig, and the slithy toves
Did gyre and gimble in the wabe:
All mimsy were the borogoves,
And the mome raths outgrabe.`},{title:"The Owl and the Pussy-cat",byline:"Edward Lear \xB7 1871",verse:!0,text:`The Owl and the Pussy-cat went to sea
In a beautiful pea-green boat,
They took some honey, and plenty of money,
Wrapped up in a five-pound note.
The Owl looked up to the stars above,
And sang to a small guitar,
"O lovely Pussy! O Pussy, my love,
What a beautiful Pussy you are,
    You are,
    You are!
What a beautiful Pussy you are!"

Pussy said to the Owl, "You elegant fowl!
How charmingly sweet you sing!
O let us be married! too long we have tarried:
But what shall we do for a ring?"
They sailed away, for a year and a day,
To the land where the Bong-Tree grows
And there in a wood a Piggy-wig stood
With a ring at the end of his nose,
    His nose,
    His nose,
With a ring at the end of his nose.

"Dear Pig, are you willing to sell for one shilling
Your ring?" Said the Piggy, "I will."
So they took it away, and were married next day
By the Turkey who lives on the hill.
They dined on mince, and slices of quince,
Which they ate with a runcible spoon;
And hand in hand, on the edge of the sand,
They danced by the light of the moon,
    The moon,
    The moon,
They danced by the light of the moon.`}]},fables:{title:"Aesop's Fables",subtitle:"retold for the lounge",author:"after Aesop",note:"Retellings dedicated to the public domain",leather:"#8a5a34",sections:[{title:"The Tortoise and the Hare",moral:"Slow and steady wins the race.",text:`A hare who could not stop talking about how fast he was laughed at a tortoise for the way she plodded along. "Race me, then," said the tortoise, and the whole meadow came out to watch.

The hare shot off and was soon so far ahead that he decided to lie down under a tree and wait for her. The afternoon was warm, the grass was soft, and before long he was fast asleep.

The tortoise never stopped. One foot, then the next, past the sleeping hare and on towards the finish. When the hare finally woke and raced the last stretch, she was already there, resting, while the meadow cheered.`},{title:"The Fox and the Grapes",moral:"It is easy to scorn what you cannot have.",text:`A hungry fox found a vine heavy with purple grapes, hanging high on a garden wall. He jumped and missed. He took a run at it and missed again. He tried until his legs ached and his pride ached more.

At last he turned away with his nose in the air. "They were sour anyway," he said to nobody in particular, "and I never really wanted them."`},{title:"The Lion and the Mouse",moral:"No kindness, however small, is ever wasted.",text:`A mouse ran across the paw of a sleeping lion, and the lion woke and pinned her down. "Please let me go," squeaked the mouse, "and one day I will repay you." The lion laughed at the idea of a mouse helping a lion, but he lifted his paw and let her run.

Some time later the lion was caught in a hunter's net. The more he struggled, the tighter it pulled. The mouse heard his roars, came running, and gnawed through the ropes one by one until he was free.`},{title:"The Ant and the Grasshopper",moral:"There is a time for play and a time for work.",text:`All summer long the grasshopper sang in the sunshine while an ant hurried past him, again and again, dragging grains of corn back to her nest. "Why work so hard on a day like this?" the grasshopper asked. "Come and sing."

"I am storing food for the winter," said the ant, "and you should too." The grasshopper only laughed. When winter came and the fields lay under snow, the ant had plenty to eat, and the grasshopper, who had nothing, learned what she had meant.`},{title:"The North Wind and the Sun",moral:"Gentleness often succeeds where force fails.",text:`The North Wind and the Sun argued about which of them was stronger. They saw a traveller walking along the road in a warm cloak and agreed that whoever could take the cloak off him would be the winner.

The North Wind blew as hard as he could. The traveller only wrapped the cloak tighter around himself. Then the Sun came out and shone, softly at first and then warmly, until the traveller unbuttoned his cloak, and then, too hot to bear it any longer, took it off altogether.`},{title:"The Crow and the Pitcher",moral:"Patience and cleverness can solve what strength cannot.",text:`A thirsty crow found a pitcher with a little water at the very bottom, too far down for her beak to reach. She could not tip it over; it was too heavy.

So she picked up a pebble and dropped it in. Then another, and another. Slowly, pebble by pebble, the water rose, until at last it was near enough to the top for her to drink.`},{title:"The Boy Who Cried Wolf",moral:"Nobody believes a liar, even when they tell the truth.",text:`A shepherd boy, bored on the hillside, shouted "Wolf! Wolf!" just to watch the villagers come running. They arrived out of breath and found no wolf at all, and the boy laughed. He did it again a few days later, and again they came, and again there was nothing.

Then one evening a real wolf crept out of the woods towards the sheep. "Wolf! Wolf!" the boy cried, as loudly as he could. But this time nobody came, because nobody believed him.`}]}},Je=520,Dt=680;function LE(n,e,t,i,s){n.fillStyle=s,n.fillRect(0,0,Je,Dt),n.fillStyle=i,n.font=`bold 50px ${it}`,n.textAlign="center",n.fillText(e,Je/2,80),n.font=`italic 13px ${it}`,n.fillText(t,Je/2,104),n.fillRect(40,116,Je-80,2)}function Hr(n,e,t,i){n.fillStyle="#f6f0e1",n.fillRect(0,0,Je,Dt),n.fillStyle=i,n.font=`bold 11px ${it}`,n.textAlign="left",n.fillText(t.toUpperCase(),44,60),n.fillStyle=ts,n.font=`bold 30px ${it}`,Br(e,n.font,Je-88).forEach((s,r)=>n.fillText(s,44,98+r*34))}function zy(n,e,t,i){let s=(Je-88-20)/2,r=e.trim().split(/\n\s*\n/),o=Math.ceil(r.length/2);zr(n,r.slice(0,o).join(`

`),44,t,s,{font:`11px ${it}`,lh:15}),zr(n,r.slice(o).join(`

`),44+s+20,t,s,{font:`11px ${it}`,lh:15}),n.fillStyle=i,n.fillRect(44+s+9,t-10,1,Dt-t-60)}function Gr(n,e,t){n.fillStyle=qn,n.font=`10px ${it}`,n.textAlign="center",n.fillText(`${t} \xB7 ${e}`,Je/2,Dt-28)}function cp(n,e,t,i,s){n.fillStyle=s,n.beginPath(),n.roundRect(e-40*i,t-50*i,80*i,90*i,12*i),n.fill(),n.lineWidth=10*i,n.strokeStyle=s,n.beginPath(),n.arc(e+45*i,t-5*i,18*i,-Math.PI/2,Math.PI/2),n.stroke(),n.strokeStyle="rgba(255,255,255,0.55)",n.lineWidth=4*i;for(let r=-1;r<=1;r++)n.beginPath(),n.moveTo(e+r*18*i,t-60*i),n.bezierCurveTo(e+r*18*i-14*i,t-85*i,e+r*18*i+14*i,t-100*i,e+r*18*i,t-125*i),n.stroke()}function Fy(n,e,t,i,s){n.fillStyle="#c96f4a",n.beginPath(),n.moveTo(e-30*i,t),n.lineTo(e+30*i,t),n.lineTo(e+22*i,t+45*i),n.lineTo(e-22*i,t+45*i),n.fill();for(let r=0;r<9;r++){let o=-Math.PI/2+(s()-.5)*2.2,a=(40+s()*50)*i;n.fillStyle=["#2d6a4f","#40916c","#52b788"][r%3],n.save(),n.translate(e,t),n.rotate(o),n.beginPath(),n.ellipse(a/2,0,a/2,11*i,0,0,Math.PI*2),n.fill(),n.restore()}}function uu(n,e,t,i,s,r,o,a){n.fillStyle=r,n.strokeStyle="#3b2a20",n.lineWidth=3,n.beginPath(),n.roundRect(e,t,i,s,16),n.fill(),n.stroke(),n.font='56px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif',n.textAlign="center",n.fillText(a,e+i/2,t+s/2+8),n.fillStyle=ts,n.font=`bold 20px ${it}`,n.fillText(o,e+i/2,t+s-22)}var sr="#b8573a",DE={title:"The Cozy Gazette",subtitle:"No. 1 \xB7 Autumn",author:"the lounge staff",leather:"#b8573a",magazine:!0,build:()=>[{w:Je,h:Dt,draw(n){LE(n,"The Cozy Gazette","No. 1 \xB7 Autumn \xB7 free to every guest","#f6e7cf","#7a2f22"),n.fillStyle="#5a2218",n.fillRect(40,140,Je-80,380),n.fillStyle="#26324f",n.fillRect(70,170,170,220),n.fillStyle="#f6f1d5",n.beginPath(),n.arc(190,220,20,0,Math.PI*2),n.fill(),n.strokeStyle="#5a2218",n.lineWidth=8,n.strokeRect(70,170,170,220),n.beginPath(),n.moveTo(155,170),n.lineTo(155,390),n.moveTo(70,280),n.lineTo(240,280),n.stroke(),cp(n,360,440,1.4,"#e6c88f"),n.fillStyle="#f6e7cf",n.font=`bold 22px ${it}`,n.textAlign="left",["The perfect cup, slowly","Five plants that forgive you","Pull-out map of the lounges"].forEach((e,t)=>n.fillText(`\xB7 ${e}`,46,570+t*30))}},{w:Je,h:Dt,draw(n){Hr(n,"In this issue","Contents",sr),n.font=`15px ${it}`,[["3","The perfect cup, slowly"],["5","A map of the lounges (fold-out)"],["6","Five plants that forgive you"],["7","The emoji puzzle page"]].forEach(([e,t],i)=>{n.fillStyle=sr,n.fillText(e,44,190+i*40),n.fillStyle=ts,n.fillText(t,80,190+i*40)}),zr(n,"Welcome to the very first Cozy Gazette. Everything in here was written for the guests of the lounges, to be read slowly with something warm nearby. When you are done, leave it wherever you are sitting; someone will come along and put it back.",44,400,Je-88,{font:`italic 13px ${it}`,lh:19,color:qn}),Gr(n,2,"The Cozy Gazette")}},{w:Je,h:Dt,draw(n){Hr(n,"The perfect cup, slowly","Kitchen",sr),zy(n,`There is no single perfect cup of coffee, but there is a perfect way to make one: slowly, and paying attention.

Start with water just off the boil. Boiling water scorches the grounds; let the kettle rest for half a minute after it clicks off.

Grind the beans just before you brew, about as coarse as sea salt for a pour-over. A good starting point is one heaped tablespoon for every cup of water.

Wet the grounds first with a splash of water and wait thirty seconds while they bloom and bubble. This lets trapped gas escape so the rest of the water can do its work.

Then pour in slow circles, keeping the grounds just covered, until the cup is full. The whole thing should take about three minutes.

Taste it before adding anything. If it is bitter, grind coarser next time; if it is thin and sour, grind finer. Small changes, one at a time.

And if all of this sounds like too much bother, the robot at the counter will happily do it for you.`,190,sr),Gr(n,3,"The Cozy Gazette")}},{w:Je,h:Dt,draw(n){Hr(n,"Notes from the counter","Kitchen",sr),cp(n,150,330,1.2,"#c96f4a"),cp(n,360,340,.9,"#2f4a3a"),zr(n,"Our barista prefers a medium roast, a ceramic dripper and a little patience. Tea drinkers are not forgotten: water at about eighty degrees for green tea, a full boil for black, and never squeeze the bag.",44,470,Je-88,{font:`13px ${it}`,lh:19}),Gr(n,4,"The Cozy Gazette")}},{w:Je*2,h:Dt,draw(n){n.fillStyle="#f3ead6",n.fillRect(0,0,Je*2,Dt),n.strokeStyle="rgba(120,100,70,0.15)",n.lineWidth=1;for(let e=0;e<Je*2;e+=40)n.beginPath(),n.moveTo(e,0),n.lineTo(e,Dt),n.stroke();for(let e=0;e<Dt;e+=40)n.beginPath(),n.moveTo(0,e),n.lineTo(Je*2,e),n.stroke();n.fillStyle=ts,n.font=`bold 40px ${it}`,n.textAlign="center",n.fillText("A Map of the Lounges",Je,70),n.font=`italic 15px ${it}`,n.fillStyle=qn,n.fillText("four rooms, one door each, and always a seat by the window",Je,98),uu(n,90,150,380,210,"#e9b48f","Fireside Library","\u{1F525}"),uu(n,570,150,380,210,"#b7d9b0","Greenhouse Caf\xE9","\u{1F33F}"),uu(n,90,410,380,210,"#b3b8d9","Rainy Rooftop","\u{1F327}\uFE0F"),uu(n,570,410,380,210,"#f3c98f","Sunset Terrace","\u{1F305}"),n.strokeStyle=sr,n.setLineDash([10,8]),n.lineWidth=4,n.beginPath(),n.moveTo(470,255),n.lineTo(570,255),n.moveTo(280,360),n.lineTo(280,410),n.moveTo(760,360),n.lineTo(760,410),n.moveTo(470,515),n.lineTo(570,515),n.stroke(),n.setLineDash([]),n.fillStyle=ts,n.font=`bold 26px ${it}`,n.fillText("N",Je*2-60,Dt-80),n.fillRect(Je*2-62,Dt-70,4,40)}},{w:Je,h:Dt,draw(n){Hr(n,"Five plants that forgive you","Greenery",sr);let e=_n(4);Fy(n,130,300,1,e),Fy(n,390,300,.8,e),zr(n,`Snake plant: thrives on neglect and a little shade.

Pothos: trails happily from a high shelf and tells you when it is thirsty by drooping.

Monstera: give it light and room, and it will give you enormous leaves.

Cactus: water it once a month and leave it alone.

Fern: likes the steamy greenhouse best, so keep it misted.`,44,400,Je-88,{font:`13px ${it}`,lh:18}),Gr(n,6,"The Cozy Gazette")}},{w:Je,h:Dt,draw(n){Hr(n,"The emoji puzzle page","Play",sr),n.textAlign="left";let e=[["\u{1F327}\uFE0F + \u{1F3F9}","rainbow"],["\u2600\uFE0F + \u{1F33B}","sunflower"],["\u{1F41D} + \u{1F36F} + \u{1F3E0}","beehive"],["\u{1F319} + \u{1F4A1}","moonlight"],["\u2B50 + \u{1F41F}","starfish"],["\u2615 + \u23F0","coffee break"]];e.forEach(([t],i)=>{n.font='34px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif',n.fillText(t,60,200+i*64),n.fillStyle=qn,n.font=`14px ${it}`,n.fillText("= ____________",300,195+i*64),n.fillStyle=ts}),n.save(),n.translate(Je-40,Dt-50),n.rotate(Math.PI),n.font=`italic 10px ${it}`,n.fillStyle=qn,n.textAlign="left",n.fillText(`answers: ${e.map(t=>t[1]).join(", ")}`,0,0),n.restore(),Gr(n,7,"The Cozy Gazette")}},{w:Je,h:Dt,draw(n){n.fillStyle="#2f4f4f",n.fillRect(0,0,Je,Dt),n.fillStyle="#f6e7cf",n.textAlign="center",n.font=`bold 34px ${it}`,n.fillText("Robot Barista Co.",Je/2,200),n.font=`italic 16px ${it}`,n.fillText('"I never spill. Well, almost never."',Je/2,240),n.font='120px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif',n.fillText("\u{1F916}",Je/2,420),n.font=`14px ${it}`,n.fillText("Now serving every lounge, every hour.",Je/2,520)}}]},lp="#f6e7b0";function By(n,e,t,i,s=220){let r=n.createLinearGradient(0,0,0,t);r.addColorStop(0,"#0b1026"),r.addColorStop(1,"#25335c"),n.fillStyle=r,n.fillRect(0,0,e,t);let o=_n(i);for(let a=0;a<s;a++){n.fillStyle=`rgba(255,250,230,${.3+o()*.7})`;let c=o()*1.8+.4;n.beginPath(),n.arc(o()*e,o()*t,c,0,Math.PI*2),n.fill()}}function du(n,e,t,i,s,r){n.strokeStyle="rgba(246,231,176,0.55)",n.lineWidth=1.5,n.beginPath(),e.forEach(([o,a],c)=>c?n.lineTo(s+o*i,r+a*i):n.moveTo(s+o*i,r+a*i)),n.stroke(),n.fillStyle=lp;for(let[o,a]of e)n.beginPath(),n.arc(s+o*i,r+a*i,4,0,Math.PI*2),n.fill();n.font=`italic 16px ${it}`,n.textAlign="center",n.fillText(t,s+e[0][0]*i,r+e[0][1]*i-16)}var NE={title:"Starlight Monthly",subtitle:"The night sky issue",author:"the rooftop astronomers",leather:"#2c3550",magazine:!0,build:()=>[{w:Je,h:Dt,draw(n){By(n,Je,Dt,11),n.fillStyle="#f6f1d5",n.shadowColor="#f6f1d5",n.shadowBlur=40,n.beginPath(),n.arc(360,300,70,0,Math.PI*2),n.fill(),n.shadowBlur=0,n.fillStyle="#25335c",n.beginPath(),n.arc(390,285,66,0,Math.PI*2),n.fill(),n.fillStyle=lp,n.font=`bold 46px ${it}`,n.textAlign="center",n.fillText("Starlight Monthly",Je/2,84),n.font=`italic 14px ${it}`,n.fillText("The night sky issue \xB7 with a fold-out star chart",Je/2,110),n.font=`bold 20px ${it}`,n.textAlign="left",["Finding the North Star","The moon, phase by phase","Star chart inside"].forEach((e,t)=>n.fillText(`\u2726 ${e}`,46,560+t*30))}},{w:Je,h:Dt,draw(n){Hr(n,"Finding the North Star","Skywatching","#2c3550"),zy(n,`On a clear night, away from the brightest lights, the first thing to look for is the Big Dipper: seven stars shaped like a ladle with a long, bent handle.

Follow the two stars at the far end of the bowl, the ones furthest from the handle. Draw a line through them and keep going, about five times the distance between them.

You will arrive at a star that is not especially bright, but is special all the same: Polaris, the North Star. It sits almost exactly above the Earth's north pole, so while every other star slowly wheels around the sky through the night, Polaris barely moves.

Travellers have steered by it for thousands of years. Face it, and you are facing north.

From the rooftop lounge it hangs just above the tallest tower on clear nights. When it rains, you will have to take our word for it.`,190,"#2c3550"),Gr(n,2,"Starlight Monthly")}},{w:Je*2,h:Dt*2,draw(n){By(n,Je*2,Dt*2,23,900),n.fillStyle=lp,n.font=`bold 52px ${it}`,n.textAlign="center",n.fillText("A Chart of the Northern Sky",Je,90),n.strokeStyle="rgba(246,231,176,0.25)",n.lineWidth=1;for(let e of[200,400,600])n.beginPath(),n.arc(Je,Dt,e,0,Math.PI*2),n.stroke();du(n,[[0,0],[60,10],[110,40],[150,80],[150,150],[240,160],[250,90],[150,80]],"The Big Dipper",1.8,250,330),du(n,[[0,0],[70,40],[130,0],[190,50],[250,10]],"Cassiopeia",1.6,640,260),du(n,[[0,0],[120,-20],[60,120],[40,135],[80,150],[10,260],[140,250]],"Orion",1.6,620,820),du(n,[[0,0],[40,30],[70,70],[110,90],[150,150],[200,160]],"The Little Dipper",1.5,Je,Dt),n.fillStyle="#fffbe8",n.shadowColor="#fffbe8",n.shadowBlur=20,n.beginPath(),n.arc(Je,Dt,7,0,Math.PI*2),n.fill(),n.shadowBlur=0,n.font=`bold 18px ${it}`,n.fillText("Polaris",Je+50,Dt-14)}},{w:Je,h:Dt,draw(n){Hr(n,"The moon, phase by phase","Skywatching","#2c3550"),["New","Crescent","First quarter","Gibbous","Full","Gibbous","Last quarter","Crescent"].forEach((t,i)=>{let s=80+i%4*120,r=230+Math.floor(i/4)*170;n.fillStyle="#25335c",n.beginPath(),n.arc(s,r,40,0,Math.PI*2),n.fill(),n.save(),n.beginPath(),n.arc(s,r,40,0,Math.PI*2),n.clip(),n.fillStyle="#f6f1d5";let o=Math.cos(i/8*Math.PI*2),a=i<=4;n.beginPath(),n.arc(s,r,40,-Math.PI/2,Math.PI/2,!a),n.ellipse(s,r,Math.abs(o)*40,40,0,Math.PI/2,-Math.PI/2,o>0===a),n.fill(),n.restore(),n.fillStyle=ts,n.font=`12px ${it}`,n.textAlign="center",n.fillText(t,s,r+62)}),zr(n,"A full cycle takes about twenty-nine and a half days. The moon makes no light of its own; what we see is sunlight, and how much of it depends on where the moon is on its trip around us.",44,590,Je-88,{font:`12px ${it}`,lh:17}),Gr(n,4,"Starlight Monthly")}}]},Ss={sonnets:{...ea.sonnets,build:()=>hu(ea.sonnets)},poems:{...ea.poems,build:()=>hu(ea.poems)},fables:{...ea.fables,build:()=>hu(ea.fables)},gazette:DE,starlight:NE};var Hy=new Map;function j(n,e={}){let t=`${n}|${JSON.stringify(e)}`,i=Hy.get(t);return i||(i=new st({color:n,roughness:.8,...e}),i.userData.shared=!0,Hy.set(t,i)),i}function kE(n,e=3){return j("#000",{emissive:n,emissiveIntensity:e,roughness:1})}var Gy=new Map;function an(n,e){let t=Gy.get(n);return t||(t=e(),t.userData.shared=!0,Gy.set(n,t)),t}function Tc(n,e,t,i,s=!0){return n.position.set(e,t,i),n.castShadow=s,n.receiveShadow=!0,n}function Ce(n,e,t,i,s=0,r=0,o=0,a=.04){let c=Math.max(.001,Math.min(a,n/2-.002,e/2-.002,t/2-.002)),l=an(`rb${n}|${e}|${t}|${c}`,()=>new lu(n,e,t,2,c));return Tc(new ce(l,i),s,r,o)}function mt(n,e,t,i,s=0,r=0,o=0){let a=an(`b${n}|${e}|${t}`,()=>new Vt(n,e,t));return Tc(new ce(a,i),s,r,o)}function He(n,e,t,i,s=0,r=0,o=0,a=18){let c=an(`c${n}|${e}|${t}|${a}`,()=>new Rn(n,e,t,a));return Tc(new ce(c,i),s,r,o)}function en(n,e,t=0,i=0,s=0,r=20){let o=an(`s${n}|${r}`,()=>new Ti(n,r,Math.round(r*.7)));return Tc(new ce(o,e),t,i,s)}function hp(n,e,t,i,s){let r=an(`ico${n}`,()=>new Ws(n,3));return Tc(new ce(r,e),t,i,s)}function Es(n,e){let t=new pe(n);return t.offsetHSL(0,0,e),`#${t.getHexString()}`}function UE(n,e,t=.3,i=.3){return an(`leaf${n}|${e}|${t}|${i}`,()=>{let s=new Oo;s.moveTo(0,0),s.bezierCurveTo(n*.9,e*.15,n,e*.6,0,e),s.bezierCurveTo(-n,e*.6,-n*.9,e*.15,0,0);let r=new Ka(s,6),o=r.attributes.position;for(let a=0;a<o.count;a++){let c=o.getX(a),l=o.getY(a);o.setZ(a,(l/e)**2*e*t-Math.abs(c)*i)}return r.computeVertexNormals(),r})}function ta(n,{w:e,l:t,tilt:i,yaw:s,stem:r=0,droop:o,cup:a,stemMat:c,y:l=0}){let h=new he;if(h.rotation.set(i,s,0,"YXZ"),h.position.y=l,r>0){let d=He(.012,.016,r,c||n,0,r/2,0,6);d.castShadow=!1,h.add(d)}let u=new ce(UE(e,t,o,a),n);return u.position.y=r,u.castShadow=!0,h.add(u),h}var fu=(()=>{let n;return()=>{if(n)return n;let e=document.createElement("canvas");e.width=e.height=64;let t=e.getContext("2d"),i=t.createRadialGradient(32,36,2,32,32,30);return i.addColorStop(0,"rgba(255,255,230,1)"),i.addColorStop(.35,"rgba(255,200,90,0.9)"),i.addColorStop(.7,"rgba(255,90,20,0.35)"),i.addColorStop(1,"rgba(255,40,0,0)"),t.fillStyle=i,t.fillRect(0,0,64,64),n=new Zt(e),n.userData.shared=!0,n}})();function rr(){return fu()}function Xy(n,e=1,t=8){let i=new he,s=[];for(let a=0;a<12;a++){let c=new An({map:fu(),blending:Ei,depthWrite:!1,transparent:!0}),l=new On(c);i.add(l),s.push({s:l,p:Math.random(),speed:.9+Math.random()*.7,x:(Math.random()-.5)*.42*e,z:(Math.random()-.5)*.25*e})}let r=new On(new An({map:fu(),color:"#ff9a50",blending:Ei,depthWrite:!1,transparent:!0,opacity:.12}));r.scale.set(1.6*e,1.3*e,1),r.position.y=.35*e,i.add(r);let o=new xn("#ff8b45",t,10*e,1.8);return o.position.y=.45*e,i.add(o),n.animate((a,c)=>{for(let h of s){h.p=(h.p+a*h.speed)%1;let u=h.p;h.s.position.set(h.x*(1-u*.8),u*.7*e,h.z*(1-u));let d=((1-u)*.36+.08)*e;h.s.scale.set(d,d*1.6,1),h.s.material.opacity=Math.sin(u*Math.PI)*.7,h.s.material.color.setHSL(.09-u*.07,1,.5+(1-u)*.12)}let l=.85+.09*Math.sin(c*13.1)+.05*Math.sin(c*7.3+1.2)+.03*Math.sin(c*23.7);o.intensity=t*l,r.material.opacity=.1*l}),i}function OE(n,e,t,i){let s=[];for(let r=0;r<=i;r++){let o=r/i,a=new I().lerpVectors(n,e,o);a.y-=t*4*o*(1-o),s.push(a)}return s}function dp(n,{sag:e=.5,spacing:t=.4,color:i="#ffd27a"}={}){let s=new he,r=[],o=[];for(let[d,f]of n){let g=Math.max(2,Math.round(d.distanceTo(f)/t)),x=OE(d,f,e,g);for(let m=0;m<x.length-1;m++)o.push(x[m],x[m+1]);for(let m=1;m<x.length-1;m++)r.push(x[m])}let a=new yt().setFromPoints(o);s.add(new ys(a,new Wi({color:"#222"})));let c=new Rt({color:new pe(i).lerp(new pe("#ffffff"),.4)}),l=new wi(new Ti(.04,8,6),c,r.length),h=new Ye;r.forEach((d,f)=>l.setMatrixAt(f,h.makeTranslation(d.x,d.y-.06,d.z))),s.add(l);let u=new yt().setFromPoints(r.map(d=>new I(d.x,d.y-.06,d.z)));return s.add(new xs(u,new Xi({map:fu(),color:i,size:.26,transparent:!0,opacity:.3,depthWrite:!1,blending:Ei}))),s}function qy(n,e){let t=new On(new An({map:ci(n),transparent:!0,depthWrite:!1}));return t.scale.set(e,e,1),t}var Vy=["#c96f4a","#e9dccb","#4a5d6b","#d8b26e","#8f5e45","#f1ece2"];function Ts(n,e=.26,t=.45,i){let s=new he,r=i||Vy[Math.floor(n.rand()*Vy.length)];s.add(He(e,e*.75,t,j(r,{roughness:.7}),0,t/2,0,20)),s.add(He(e*1.06,e*1.06,.06,j(Es(r,-.05),{roughness:.7}),0,t-.03,0,20));let o=He(e*.95,e*.95,.02,j("#3b2a20",{roughness:1}),0,t-.04,0,16);return o.castShadow=!1,s.add(o),s}function Wy(n,e,t=.03,i=.8){e.userData.animated=!0;let s=n.rand()*10;n.animate((r,o)=>{e.rotation.z=Math.sin(o*i+s)*t,e.rotation.x=Math.sin(o*i*.7+s*1.3)*t*.6})}function up(n,e,t){let i=new he,s=e.color||"#7a3b2e",r=j(s,{roughness:.95}),o=j(Es(s,.04),{roughness:1}),a=j(t.theme.wood||"#3b2a1e",{roughness:.6}),c=n===1?.9:.78,l=n*c,h=.95;i.add(Ce(l+.5,.3,h,r,0,.27,0,.06)),i.add(Ce(l+.5,.72,.24,r,0,.73,-h/2+.12,.1));for(let d of[-1,1])i.add(Ce(.25,.62,h,r,d*(l/2+.125),.43,0,.1));let u=[];for(let d=0;d<n;d++){let f=(d-(n-1)/2)*c;i.add(Ce(c-.04,.16,h-.28,o,f,.5,.12,.07));let g=Ce(c-.06,.48,.18,o,f,.86,-h/2+.32,.08);g.rotation.x=-.12,i.add(g),u.push({x:f,z:.2,y:.58})}for(let d of[-1,1])for(let f of[-1,1])i.add(He(.035,.025,.12,a,d*(l/2+.17),.06,f*(h/2-.1),8));if(n>=2){let d=["#e9c46a","#f4f1de","#81b29a","#e07a5f"];for(let f of[-1,1]){let g=Ce(.38,.36,.12,j(d[Math.floor(t.rand()*d.length)],{roughness:1}),f*(l/2-.22),.76,-.18,.06);g.rotation.set(-.25,f*-.35,f*.15),i.add(g)}}return{object:i,seats:u}}function FE(n){let e=new he,t=j(n.color||"#a0522d",{roughness:1}),i=en(.6,t,0,.27,0,24);i.scale.set(1,.5,1);let s=en(.45,t,0,.58,-.32,24);return s.scale.set(1.05,.85,.6),e.add(i,s),{object:e,seats:[{x:0,z:.12,y:.5}]}}function BE(n){let e=new he,t=n.color||"#c08552";return e.add(Ce(.8,.14,.8,j(Es(t,-.08),{roughness:1}),0,.07,0,.07)),e.add(Ce(.74,.14,.74,j(t,{roughness:1}),0,.2,0,.07)),e.add(en(.035,j(Es(t,-.15)),0,.275,0,8)),{object:e,seats:[{x:0,z:.05,y:.28}]}}function zE(n,e){let t=new he,i=j(e.theme.chairFrame||"#2b2b2b",{roughness:.5,metalness:.3}),s=j(n.color||e.theme.chairSeat||"#8a5a3b",{roughness:.7});for(let o of[-1,1])for(let a of[-1,1])t.add(He(.018,.018,.47,i,o*.2,.235,a*.2,6));t.add(Ce(.5,.05,.48,s,0,.48,0,.02));for(let o of[-1,1])t.add(He(.018,.018,.48,i,o*.2,.74,-.22,6));let r=Ce(.46,.26,.035,s,0,.84,-.23,.015);return r.rotation.x=-.08,t.add(r),{object:t,seats:[{x:0,z:.04,y:.505}]}}function HE(n,e){let t=new he,i=j("#2d2a26",{roughness:.4,metalness:.5}),s=j(n.color||e.theme.wood||"#8a5a3b",{roughness:.6});t.add(He(.22,.2,.06,s,0,.74,0,20));for(let o=0;o<4;o++){let a=o/4*Math.PI*2+Math.PI/4,c=He(.018,.022,.74,i,Math.cos(a)*.15,.37,Math.sin(a)*.15,6);c.rotation.set(Math.sin(a)*.12,0,-Math.cos(a)*.12),t.add(c)}let r=new ce(an("stoolring",()=>new qi(.18,.012,6,24)),i);return r.rotation.x=Math.PI/2,r.position.y=.28,t.add(r),{object:t,seats:[{x:0,z:0,y:.77}]}}function GE(n,e){let t=new he,i=j("#2b2b2b",{roughness:.4,metalness:.6}),s=j(n.color||"#c9a46b",{roughness:.9,side:Ct});t.add(He(.5,.55,.05,i,0,.025,-.25,24));let r=new Uo([new I(0,.05,-.7),new I(0,1.3,-.95),new I(0,2.3,-.8),new I(0,2.62,-.35),new I(0,2.6,0)]),o=new ce(an("swingpole",()=>new Za(r,30,.035,8)),i);o.castShadow=!0,t.add(o);let a=new he;a.position.set(0,2.58,0),a.userData.animated=!0,t.add(a),a.add(He(.01,.01,.42,i,0,-.21,0,4));let c=new ce(an("egg",()=>new Ti(.62,28,18,Math.PI/2+.95,Math.PI*2-1.9,0,Math.PI)),s);c.scale.set(1,1.3,1),c.position.y=-1.22,c.castShadow=!0,a.add(c);let l=He(.46,.46,.12,j(n.cushion||"#f4efe6",{roughness:1}),0,-1.98,.02,20);a.add(l);let h=e.rand()*6;return e.animate((u,d)=>{a.rotation.z=Math.sin(d*.9+h)*.025}),{object:t,seats:[{x:0,z:.05,y:.66}]}}function VE(n,e){let t=new he,i=j(e.theme.wood||"#a0764f",{roughness:.7}),s=j(n.color||"#f1e3c6",{roughness:1});t.add(Ce(.7,.07,1.2,i,0,.32,.25,.02)),t.add(Ce(.62,.08,1.15,s,0,.39,.25,.04));for(let o of[-1,1])for(let a of[-.3,.8])t.add(mt(.05,.3,.05,i,o*.3,.15,a));let r=new he;return r.position.set(0,.36,-.34),r.rotation.x=.95,r.add(Ce(.7,.07,.85,i,0,0,-.42,.02)),r.add(Ce(.62,.08,.8,s,0,.07,-.4,.04)),t.add(r),{object:t,seats:[{x:0,z:-.1,y:.44}]}}function WE(n,e){let t=new he,i=j("#6b4a32",{roughness:.8});for(let d of[-1,1])t.add(He(.07,.08,1.8,i,d*1.45,.9,0,10)),t.add(en(.09,i,d*1.45,1.82,0,10));let s=new he;s.position.y=1.5,s.userData.animated=!0,t.add(s);let r=new Ut(2.2,.95,24,6),o=r.attributes.position;for(let d=0;d<o.count;d++){let f=o.getX(d),g=o.getY(d);o.setXYZ(d,f,-.3-.52*(1-(f/1.1)**2)+.18*(g/.475)**2,g)}r.computeVertexNormals();let a=document.createElement("canvas");a.width=256,a.height=64;let c=a.getContext("2d");["#e76f51","#f4a261","#e9c46a","#2a9d8f","#264653","#f4f1de"].forEach((d,f,g)=>{c.fillStyle=d,c.fillRect(0,f*64/g.length,256,64/g.length+1)});let l=new Zt(a);l.colorSpace=bt;let h=new ce(r,new st({map:l,side:Ct,roughness:1}));h.castShadow=!0,s.add(h);for(let d of[-1,1]){let f=He(.012,.012,.42,j("#d8c3a5"),d*1.27,0,0,4);f.rotation.z=d*1,s.add(f)}let u=e.rand()*6;return e.animate((d,f)=>{s.rotation.x=Math.sin(f*.7+u)*.06}),{object:t,seats:[{x:0,z:0,y:.78}]}}function XE(n,e){let t=new he,i=j(n.color||e.theme.wood||"#a0764f",{roughness:.75}),s=j("#3a2f28",{roughness:.6,metalness:.3});for(let r of[-.14,0,.14])t.add(Ce(2.5,.05,.12,i,0,.47,r,.02));for(let r of[-1.05,0,1.05])t.add(Ce(.07,.45,.4,s,r,.225,0,.02));return{object:t,seats:[-.8,0,.8].map(r=>({x:r,z:0,y:.5}))}}function na(n,e,t,i){let s=new he;s.add(He(.035,.035,.12,j("#f5ecd9",{roughness:.9}),e,t+.06,i,10));let r=en(.018,kE("#ffb347",2.2),e,t+.14,i,8);r.userData.animated=!0,r.scale.y=1.8,r.castShadow=!1,s.add(r);let o=n.rand()*10;return n.animate((a,c)=>{r.scale.y=1.6+Math.sin(c*11+o)*.25}),s}function qE(n,e){let t=new he,i=j(e.theme.wood||"#5a3b28",{roughness:.55}),s=n.low?.32:.42;t.add(Ce(1.5,.07,.85,i,0,s,0,.03));for(let o of[-1,1])for(let a of[-1,1])t.add(He(.035,.03,s,i,o*.65,s/2,a*.33,8));t.add(Ce(.32,.05,.22,j("#2f4858"),-.4,s+.06,-.05,.01));let r=Ce(.28,.05,.2,j("#c44536"),-.38,s+.11,-.04,.01);return r.rotation.y=.25,t.add(r),t.add(na(e,.15,s+.035,.1)),t.add(na(e,.26,s+.035,-.08)),t.add(He(.09,.07,.03,j("#e9e3d3"),.45,s+.05,.12,14)),{object:t}}function YE(n,e){let t=new he,i=j(e.theme.tableTop||"#efe7da",{roughness:.35}),s=j("#2b2b2b",{roughness:.4,metalness:.5});t.add(He(.5,.5,.05,i,0,.75,0,28)),t.add(He(.035,.035,.72,s,0,.37,0,8)),t.add(He(.28,.3,.03,s,0,.015,0,20)),t.add(He(.04,.05,.16,j("#7fb7be",{roughness:.1,transparent:!0,opacity:.7}),.1,.86,.05,10));let r=["#f28482","#f6bd60","#ffffff","#cdb4db"];return t.add(en(.05,j(r[Math.floor(e.rand()*4)]),.1,.97,.05,10)),{object:t}}function $E(n,e){let t=new he;t.add(He(.06,.08,.2,j("#c9a66b",{roughness:.3,metalness:.6}),0,e+.1,0,12));let i=j("#f3e2c3",{emissive:"#ffb35c",emissiveIntensity:.75,side:Ct}),s=new ce(an("tlshade",()=>new Rn(.11,.17,.2,20,1,!0)),i);s.position.y=e+.3,t.add(s);let r=new xn("#ffc27a",2.5,4,2);return r.position.y=e+.28,t.add(r),t}function jE(n,e){let t=new he,i=j(e.theme.wood||"#5a3b28",{roughness:.55});t.add(He(.3,.3,.04,i,0,.58,0,24));for(let s=0;s<3;s++){let r=s/3*Math.PI*2;t.add(He(.02,.02,.58,i,Math.cos(r)*.2,.29,Math.sin(r)*.2,6))}return t.add($E(e,.6)),{object:t}}function KE(n,e){let t=new ce(new Ut(n.w,n.d),new st({map:wy(n.pattern,Math.floor(e.rand()*1e6)),roughness:1,polygonOffset:!0,polygonOffsetFactor:-2}));return t.rotation.x=-Math.PI/2,t.position.y=.015,t.receiveShadow=!0,{object:t}}function Yy(n,e){let t=new he,i=j(e.theme.shelfWood||"#4a3020",{roughness:.6}),s=2.2,r=2.7,o=.42;for(let x of[-1,1])t.add(Ce(.06,r,o,i,x*(s/2-.03),r/2,0,.015));t.add(Ce(s+.06,.07,o+.04,i,0,r,0,.02)),t.add(mt(s,r,.03,j(Es(e.theme.shelfWood||"#4a3020",-.06)),0,r/2,-o/2+.015));let a=[.12,.64,1.16,1.68,2.2];for(let x of a)t.add(mt(s-.1,.04,o-.04,i,0,x,.01));let c=["#7b2d26","#1f3b4d","#2d6a4f","#c9a227","#6d597a","#b56576","#e9d8a6","#354f52","#9c6644","#264653","#e76f51"],l=new wi(an("unitbox",()=>new Vt(1,1,1)),j("#ffffff",{roughness:.85}),160);l.castShadow=!0,l.receiveShadow=!0;let h=new Ye,u=new wt,d=new on,f=new pe,g=0;return a.forEach((x,m)=>{if(m===n.reserveLevel)return;let p=-s/2+.1,y=e.rand()<.5?-s/2+.3+e.rand()*(s-.6):99;for(;p<s/2-.12&&g<160;){if(Math.abs(p-y)<.18){let R=e.rand(),b=x+.02;if(R<.5){let T=Ts(e,.08,.14);T.position.set(p+.1,b,0);for(let P=0;P<5;P++)T.add(ta(j("#4f772d",{side:Ct,roughness:.6}),{w:.04,l:.18,tilt:.4+e.rand()*.6,yaw:P*1.3,y:.13,droop:.2}));t.add(T)}else t.add(en(.07,j("#c9a66b",{roughness:.3,metalness:.6}),p+.1,b+.07,0,14));p+=.3;continue}if(e.rand()<.06){p+=.12;continue}let v=.035+e.rand()*.05,_=.27+e.rand()*.15,w=.24+e.rand()*.08,M=e.rand()<.08?.25:0;u.setFromEuler(d.set(0,0,-M)),h.compose(new I(p+v/2+M*.12,x+.02+_/2,-o/2+.04+w/2),u,new I(v,_,w)),l.setMatrixAt(g,h),l.setColorAt(g,f.set(c[Math.floor(e.rand()*c.length)]).offsetHSL(0,0,(e.rand()-.5)*.08)),g++,p+=v+.004+M*.12}}),l.count=g,t.add(l),{object:t}}function ZE(n,e){let t=new he,i=new st({map:Ny(),roughness:.92}),s=j("#17110e",{roughness:1}),r=j(e.theme.wood||"#5a3b28",{roughness:.55});for(let d of[-1,1])t.add(Ce(.65,2.3,.7,i,d*1.075,1.15,0,.04));t.add(Ce(1.5,1.2,.7,i,0,1.7,0,.04)),t.add(mt(1.5,1.1,.1,s,0,.55,-.28)),t.add(mt(1.5,.04,.6,s,0,.12,0)),t.add(Ce(3.2,.12,.8,j("#6e655c",{roughness:.9}),0,.06,.25,.03)),t.add(Ce(3.1,.14,.5,r,0,2.36,.1,.03)),t.add(Ce(2.3,1.85,.5,i,0,3.35,-.1,.04));let o=j("#4a3020",{roughness:1}),a=j("#3a1a0a",{emissive:"#ff4a10",emissiveIntensity:1.5});[[-.15,.2,.3],[.18,.2,-.3],[0,.32,.1]].forEach(([d,f,g],x)=>{let m=He(.07,.08,.85,x===2?a:o,d,f,0,10);m.rotation.set(0,g,Math.PI/2),t.add(m)});let c=Xy(e,.9,10);c.position.set(0,.22,.02),t.add(c),t.add(na(e,-1.2,2.43,.15),na(e,-1.05,2.43,.2),na(e,1.25,2.43,.15));let l=Ce(.5,.38,.04,j("#c9a66b",{roughness:.3,metalness:.6}),.55,2.62,.05,.01);l.rotation.x=-.1,t.add(l);let h=new ce(new Ut(.42,.3),new st({map:tp(Math.floor(e.rand()*1e6))}));h.position.set(.55,2.62,.075),h.rotation.x=-.1,t.add(h);let u=He(.13,.13,.06,j("#2f2f2f",{metalness:.5,roughness:.4}),-.4,2.58,.1,20);return u.rotation.x=Math.PI/2,t.add(u),t.add(He(.11,.11,.065,j("#f2ead8"),-.4,2.58,.1,20).rotateX(Math.PI/2)),{object:t}}function JE(n,e){let t=new he,i=j("#2d2a26",{roughness:.4,metalness:.6});t.add(He(.2,.22,.04,i,0,.02,0,20)),t.add(He(.018,.018,1.55,i,0,.8,0,8));let s=j(n.shade||"#f3e2c3",{emissive:"#ffb35c",emissiveIntensity:.75,side:Ct,roughness:.9}),r=new ce(an("flshade",()=>new Rn(.2,.3,.36,24,1,!0)),s);r.position.y=1.65,r.castShadow=!0,t.add(r);let o=en(.06,new Rt({color:"#fff1d6"}),0,1.56,0,10);o.castShadow=!1,t.add(o);let a=new xn("#ffc27a",e.theme.lampPower??6,8,1.8);return a.position.y=1.5,t.add(a),{object:t}}function QE(n,e){let t=new he,i=j("#2d2a26",{roughness:.4,metalness:.6});t.add(Ce(.3,.04,.3,i,0,.02,0,.01));for(let l of[-1,1])for(let h of[-1,1])t.add(mt(.025,.36,.025,i,l*.13,.22,h*.13));let s=mt(.25,.34,.25,j("#fff3d6",{transparent:!0,opacity:.18,roughness:.05}),0,.22,0);s.castShadow=!1,t.add(s);let r=He(.02,.22,.14,i,0,.47,0,4);r.rotation.y=Math.PI/4,t.add(r);let o=new ce(an("lhandle",()=>new qi(.07,.008,6,16,Math.PI)),i);o.position.y=.54,t.add(o),t.add(na(e,0,.04,0));let a=new xn("#ffb35c",2.2,5,2);a.position.y=.3,t.add(a);let c=e.rand()*10;return e.animate((l,h)=>{a.intensity=2.2*(.85+.15*Math.sin(h*9+c)*Math.sin(h*3.1+c))}),{object:t}}function eA(n,e){let t=new he,i=j(e.theme.windowFrame||"#efe8dc",{roughness:.6}),s=1.95,r=document.createElement("canvas");r.width=256,r.height=288;let o=r.getContext("2d"),a=o.createLinearGradient(0,0,0,288);a.addColorStop(0,"#070b1f"),a.addColorStop(1,"#27335a"),o.fillStyle=a,o.fillRect(0,0,256,288);for(let f=0;f<80;f++)o.fillStyle=`rgba(255,255,255,${.3+e.rand()*.7})`,o.fillRect(e.rand()*256,e.rand()*200,1.5,1.5);o.fillStyle="#f6f1d5",o.shadowColor="#f6f1d5",o.shadowBlur=30,o.beginPath(),o.arc(180,70,22,0,Math.PI*2),o.fill(),o.shadowBlur=0,o.fillStyle="#0a0f1c";for(let f=0;f<256;f+=18){let g=30+e.rand()*50;o.beginPath(),o.moveTo(f-14,288),o.lineTo(f+9,288-g-40),o.lineTo(f+32,288),o.fill()}let c=new Zt(r);c.colorSpace=bt;let l=new ce(new Ut(1.7,1.9),new Rt({map:c}));l.position.set(0,s,-.02),t.add(l),t.add(Ce(1.9,.1,.14,i,0,s+1,.02),Ce(1.9,.1,.14,i,0,s-1,.02)),t.add(Ce(.1,2.1,.14,i,-.9,s,.02),Ce(.1,2.1,.14,i,.9,s,.02)),t.add(mt(.05,1.9,.06,i,0,s,.02),mt(1.7,.05,.06,i,0,s+.2,.02)),t.add(Ce(2.1,.06,.28,i,0,s-1.03,.1,.02));let h=j(e.theme.curtain||"#8c2f39",{roughness:1});for(let f of[-1,1]){let g=Ce(.4,2.6,.08,h,f*1.2,s-.15,.16,.03);t.add(g)}let u=He(.02,.02,3,j("#c9a66b",{metalness:.6,roughness:.3}),0,s+1.2,.2,8);u.rotation.z=Math.PI/2,t.add(u);let d=Ts(e,.08,.14,"#f1ece2");d.position.set(.55,s-1,.1);for(let f=0;f<3;f++)d.add(He(.035,.04,.14-f*.03,j("#5a8f4e"),(f-1)*.04,.2,0,8));return t.add(d),{object:t}}function tA(n,e){let t=new he,i=3.2,s=j(e.theme.counter||"#2f4f4f",{roughness:.7}),r=j(e.theme.counterTop||"#e8e2d6",{roughness:.3}),o=j("#b8bcc2",{roughness:.25,metalness:.8}),a=j("#f7f3ec",{roughness:.4});t.add(Ce(i,1,.7,s,0,.5,0,.03));for(let y=0;y<12;y++)t.add(mt(.12,.85,.03,j(Es(e.theme.counter||"#2f4f4f",.05)),-i/2+.2+y*.255,.5,.36));t.add(Ce(i+.2,.07,.86,r,0,1.035,0,.02)),t.add(Ce(.62,.45,.4,o,-.9,1.3,-.12,.05)),t.add(Ce(.5,.06,.12,j("#222"),-.9,1.17,.12,.02));for(let y of[-1.05,-.75])t.add(He(.035,.035,.08,j("#222"),y,1.2,.1,8));for(let y=0;y<3;y++)t.add(He(.04,.032,.07,a,-1.05+y*.15,1.56,-.12,10));for(let y=0;y<3;y++)t.add(He(.045,.035,.09,a,-.35+y*.12,1.115,.18,10));let c=Ce(.95,.36,.46,j("#dff3ff",{transparent:!0,opacity:.2,roughness:.05}),.75,1.25,.02,.03);c.castShadow=!1,t.add(c);let l=["#d4a373","#f28482","#e9c46a","#8d5524","#f5cac3"];for(let y=0;y<6;y++){let v=en(.06,j(l[y%l.length],{roughness:.8}),.42+y%3*.32,1.13,-.08+Math.floor(y/3)*.2,10);v.scale.y=.6,t.add(v)}let h=j("#3a2f28",{roughness:.6});for(let y of[-1,1])t.add(He(.035,.035,2.75,h,y*(i/2+.05),1.375,-.4,8));let u=document.createElement("canvas");u.width=256,u.height=32;let d=u.getContext("2d");for(let y=0;y<16;y++)d.fillStyle=y%2?"#fdf6e9":e.theme.awning||"#c44536",d.fillRect(y*16,0,16,32);let f=new Zt(u);f.colorSpace=bt;let g=new ce(new Ut(i+.5,1.3),new st({map:f,side:Ct,roughness:1}));g.position.set(0,2.62,.05),g.rotation.x=-Math.PI/2+.38,g.castShadow=!0,t.add(g);let x=new ce(new Ut(1.3,.95),new st({map:Ty(e.menu||[]),roughness:.9}));x.position.set(.1,2,-.38),t.add(x),t.add(dp([[new I(-i/2-.25,2.3,.62),new I(i/2+.25,2.3,.62)]],{sag:.18,spacing:.3}));let m=new xn("#ffcf8a",e.theme.counterLight??5,7,1.8);m.position.set(0,2.1,.5),t.add(m);let p=[];for(let y=0;y<5;y++){let v=new On(new An({map:rr(),color:"#ffffff",transparent:!0,depthWrite:!1,opacity:0}));t.add(v),p.push({s:v,p:y/5})}return e.animate(y=>{for(let v of p){v.p=(v.p+y*.35)%1,v.s.position.set(-.9+Math.sin(v.p*9)*.04,1.6+v.p*.6,-.12);let _=.08+v.p*.22;v.s.scale.set(_,_,1),v.s.material.opacity=Math.sin(v.p*Math.PI)*.25}}),{object:t,home:{x:i/2-.7,z:-.95},halfWidth:i/2}}function nA(n,e){let t=new he,i=j(e.theme.wood||"#6b4a32",{roughness:.55});t.add(Ce(1.1,.62,.48,i,0,.31,0,.03));let s=new wi(an("unitbox",()=>new Vt(1,1,1)),j("#ffffff",{roughness:.8}),40),r=new Ye,o=new pe;for(let u=0;u<40;u++)r.compose(new I(-.47+u*.024,.31,.21),new wt,new I(.016,.42,.06)),s.setMatrixAt(u,r),s.setColorAt(u,o.setHSL(e.rand(),.5,.25+e.rand()*.4));t.add(s),t.add(Ce(.6,.08,.44,j("#2a2522",{roughness:.4}),-.1,.66,0,.02));let a=new he;a.userData.animated=!0,a.position.set(-.16,.71,0),a.add(He(.175,.175,.012,j("#111",{roughness:.25}),0,0,0,32));let c=He(.06,.06,.014,j(e.theme.record||"#e76f51"),0,0,0,16);a.add(c),c.add(mt(.06,.016,.012,j("#f4f1de"),.02,0,0)),t.add(a);let l=mt(.018,.018,.3,j("#c9c9c9",{metalness:.8,roughness:.3}),.08,.74,.02);l.rotation.y=.5,t.add(l);for(let u of[-1,1]){let d=new he;d.position.set(u*.8,0,0),d.add(Ce(.32,.6,.3,j("#2a2522",{roughness:.6}),0,.3,0,.03));for(let[f,g]of[[.42,.06],[.2,.1]]){let x=He(g,g,.02,j("#141414",{roughness:.9}),0,f,.15,16);x.rotation.x=Math.PI/2,d.add(x)}t.add(d)}let h=[];for(let u=0;u<4;u++){let d=qy(u%2?"\u{1F3B5}":"\u{1F3B6}",.22);d.material.opacity=0,t.add(d),h.push({s:d,p:u/4,x:0})}return e.animate((u,d)=>{a.rotation.y-=u*3.5;for(let f of h)f.p+=u*.28,f.p>=1&&(f.p-=1,f.x=(e.rand()-.5)*.4),f.s.position.set(-.16+f.x+Math.sin(d*2+f.p*6)*.08,.9+f.p*1.3,0),f.s.material.opacity=Math.sin(f.p*Math.PI)*.9}),{object:t}}function iA(n,e){let t=new he,i=n.w||1.4,s=n.h||1;t.add(Ce(i+.14,s+.14,.06,j("#c9a66b",{roughness:.35,metalness:.5}),0,1.95,0,.02));let r=new ce(new Ut(i,s),new st({map:tp(Math.floor(e.rand()*1e6)),roughness:.9}));return r.position.set(0,1.95,.035),t.add(r),{object:t}}function sA(n,e){let t=new he,i=j("#1d1d24",{roughness:.5,metalness:.4});for(let c of[-1,1])t.add(He(.04,.04,2,i,c*1.3,1,-.05,8));t.add(Ce(3.4,1.25,.08,j("#121218",{roughness:.6}),0,2.35,-.05,.03));let s=new pe(n.color||"#ff5fa2"),r=new Rt({map:Sy(n.text||"chill",n.color||"#ff5fa2"),transparent:!0,blending:Ei,depthWrite:!1}),o=new ce(new Ut(3.2,1),r);o.position.set(0,2.35,0),o.userData.keep=!0,t.add(o);let a=new xn(s,3,8,2);return a.position.set(0,2.2,.8),t.add(a),e.animate((c,l)=>{let h=Math.sin(l*.7)>.985?.4:1;r.color.setScalar(h),a.intensity=3*h}),{object:t}}function rA(n,e){let t=new he,i=j("#2b2622",{roughness:.6,metalness:.2}),{w:s,d:r}=n,o=3;for(let c of[-1,0,1])for(let l of[-1,1])t.add(mt(.14,o,.14,i,c*s/2,o/2,l*r/2));for(let c of[-1,1])t.add(mt(s+.4,.2,.12,i,0,o,c*r/2));for(let c=-s/2;c<=s/2+.01;c+=s/10)t.add(mt(.07,.12,r+.5,i,c,o+.15,0));let a=[];for(let c=0;c<=4;c++){let l=-s/2+.5+c*(s-1)/4;a.push([new I(l,o-.1,-r/2),new I(l+(c%2?-1:1)*.8,o-.1,r/2)])}t.add(dp(a,{sag:.6,spacing:.35}));for(let c of[-s/4,s/4]){let l=new xn("#ffcf8a",e.theme.pergolaLight??6,9,1.8);l.position.set(c,o-.6,0),t.add(l)}return{object:t}}function oA(n,e){let t=new he,i=n.points.map(([o,a])=>new I(o,n.height,a)),s=j("#4a3426",{roughness:.7});for(let o of i)t.add(He(.05,.06,n.height+.1,s,o.x,n.height/2,o.z,8));let r=[];for(let o=0;o<i.length-1;o++)r.push([i[o],i[o+1]]);t.add(dp(r,{sag:.7,spacing:.45}));for(let o=0;o<r.length;o++){let a=new I().lerpVectors(r[o][0],r[o][1],.5),c=new xn("#ffcf8a",e.theme.stringLight??4,10,1.8);c.position.set(a.x*.85,n.height-.9,a.z*.85),t.add(c)}return{object:t,absolute:!0}}function aA(n,e){let t=new he,i=j("#6b6660",{roughness:.95,flatShading:!0}),s=14;for(let a=0;a<s;a++){let c=a/s*Math.PI*2,l=new ce(an("pitstone",()=>new za(.2,0)),i);l.position.set(Math.cos(c)*.72,.16,Math.sin(c)*.72),l.scale.set(1.1,.8,.9),l.rotation.set(c,c*2,0),l.castShadow=l.receiveShadow=!0,t.add(l)}t.add(He(.62,.62,.06,j("#1a1410",{roughness:1}),0,.04,0,20));let r=j("#4a3020",{roughness:1});for(let a=0;a<4;a++){let c=He(.06,.07,.8,r,0,.18,0,8);c.rotation.set(.35,a*Math.PI/2,Math.PI/2),t.add(c)}let o=Xy(e,1.1,14);return o.position.y=.12,t.add(o),{object:t}}function cA(n,e){let t=new he,i=j(n.color||"#e39b4b",{roughness:1}),s=j("#f6e0c4",{roughness:1}),r=en(.3,i,0,.16,0,18);r.userData.animated=!0,r.scale.set(1,.55,1.25),t.add(r);let o=new he;o.position.set(.12,.18,.3),o.add(en(.13,i,0,0,0,14)),o.add(en(.06,s,0,-.04,.09,10));for(let h of[-1,1]){let u=He(0,.05,.09,i,h*.07,.11,0,4);u.rotation.z=-h*.3,o.add(u)}o.rotation.set(.3,.4,.2),t.add(o);let a=new ce(an("cattail",()=>new qi(.3,.045,6,20,Math.PI*1.1)),i);a.rotation.set(Math.PI/2,0,.6),a.position.y=.06,t.add(a);let c=qy("\u{1F4A4}",.25);c.material.opacity=0,t.add(c);let l=0;return e.animate((h,u)=>{r.scale.y=.55+Math.sin(u*1.6)*.02,l=(l+h*.25)%1,c.position.set(.2+l*.2,.4+l*.6,.3),c.material.opacity=Math.sin(l*Math.PI)*.85}),{object:t}}function lA(n,e){let t=n.kind,i=new he,s=e.theme.greens||["#2d6a4f","#40916c","#52b788","#1b4332"],r=(a=0,c=.55)=>j(s[a%s.length],{side:Ct,roughness:c}),o=new he;if(t==="monstera"){let a=Ts(e,.3,.5);i.add(a),o.position.y=.48;for(let c=0;c<10;c++)o.add(ta(r(c%2),{w:.3+e.rand()*.06,l:.55+e.rand()*.12,tilt:.35+e.rand()*.8,yaw:c*2.4+e.rand()*.4,stem:.35+e.rand()*.4,droop:.35,stemMat:r(2)}))}else if(t==="fiddle"){i.add(Ts(e,.3,.5)),i.add(He(.035,.05,1.6,j("#6b4a32"),0,1.25,0,8)),o.position.y=.5;for(let a=0;a<26;a++)o.add(ta(r(a%2?3:0,.35),{w:.15+e.rand()*.04,l:.3+e.rand()*.08,tilt:.5+e.rand()*.9,yaw:a*2.4,y:.6+a/26*1.15,stem:.05,droop:.15}))}else if(t==="snake"){i.add(Ts(e,.24,.42)),o.position.y=.4;for(let a=0;a<11;a++)o.add(ta(j(a%3?"#355e3b":"#4f7942",{side:Ct,roughness:.5}),{w:.06+e.rand()*.02,l:.75+e.rand()*.45,tilt:.05+e.rand()*.28,yaw:a*2.4,droop:.02}))}else if(t==="fern"){i.add(Ts(e,.26,.42,"#b08968")),o.position.y=.42;for(let a=0;a<18;a++)o.add(ta(r(a%3===0?2:1),{w:.11,l:.6+e.rand()*.2,tilt:.6+e.rand()*.75,yaw:a*2.4,droop:.55}))}else if(t==="cactus"){i.add(Ts(e,.2,.32));let a=j("#5a8f4e",{roughness:.7}),c=new ce(an("cactusT",()=>new Si(.11,.5,6,12)),a);c.position.y=.66,c.castShadow=!0,o.add(c);for(let l of[-1,1]){let h=new ce(an("cactusA",()=>new Si(.06,.18,4,10)),a);h.position.set(l*.16,.7+l*.06,0),h.castShadow=!0,o.add(h)}o.add(en(.045,j("#f28482"),0,1,0,8))}else if(t==="palm"){i.add(Ts(e,.36,.55,"#e9dccb"));let a=j("#8d6e4f",{roughness:.9}),c=0;for(let l=0;l<7;l++)c+=.025,i.add(He(.065,.08,.3,a,c,.7+l*.27,0,8));o.position.set(c,2.5,0);for(let l=0;l<10;l++)o.add(ta(r(l%2?1:0),{w:.2,l:1.25+e.rand()*.3,tilt:1+e.rand()*.55,yaw:l*2.4,droop:.6,cup:.1}))}else if(t==="tree"){let a=n.small?.6:1;n.small?i.add(Ts(e,.45,.6,"#4a5d6b")):(i.add(Ce(1.7,.55,1.7,j("#b5a493",{roughness:.9}),0,.275,0,.05)),i.add(mt(1.5,.04,1.5,j("#3b2a20",{roughness:1}),0,.54,0))),i.add(He(.09*a,.16*a,2.7*a,j("#6b4a32",{roughness:.9}),0,.5+1.35*a,0,10));let c=[j("#3a7d44",{roughness:.85}),j("#4f9a52",{roughness:.85}),j("#2d6a4f",{roughness:.85})];for(let l=0;l<9;l++){let h=l*2.4,u=l===0?0:.6+e.rand()*.5;o.add(hp((.65+e.rand()*.35)*a,c[l%3],Math.cos(h)*u*a,(3+e.rand()*.8)*a+.3,Math.sin(h)*u*a))}}else if(t==="grass"){i.add(Ce(1.2,.5,.5,j("#4a4f55",{roughness:.8}),0,.25,0,.03));let a=[j("#7a9a4f"),j("#a3b565"),j("#5b7f3a")];o.position.y=.48;for(let c=0;c<34;c++){let l=.6+e.rand()*.6,h=He(.002,.025,l,a[c%3],(e.rand()-.5)*1,l/2,(e.rand()-.5)*.35,4);h.rotation.set((e.rand()-.5)*.5,0,(e.rand()-.5)*.5),h.castShadow=!1,o.add(h)}}else if(t==="flowers"){i.add(Ce(1.2,.42,.5,j("#9c6644",{roughness:.85}),0,.21,0,.03)),o.position.y=.42;for(let c=0;c<6;c++)o.add(hp(.17+e.rand()*.06,r(c),-.45+c*.18,.08,(e.rand()-.5)*.15));let a=["#f28482","#f6bd60","#ffffff","#cdb4db","#ff99c8"];for(let c=0;c<16;c++)o.add(en(.045,j(a[c%a.length],{roughness:.6}),-.5+e.rand(),.2+e.rand()*.12,(e.rand()-.5)*.3,8))}else if(t==="hanging"){let a=e.theme.ceiling||4.2;i.add(He(.006,.006,a-2.9,j("#d8c3a5"),0,(a+2.9)/2,0,4));let c=new ce(an("basket",()=>new Ti(.28,16,8,0,Math.PI*2,Math.PI/2,Math.PI/2)),j("#c9a46b",{roughness:.9,side:Ct}));c.position.y=2.9,o.add(c),o.position.y=0;for(let u=0;u<5;u++)o.add(hp(.13,r(u),Math.cos(u*1.3)*.14,2.95,Math.sin(u*1.3)*.14));let l=r(1);for(let u=0;u<7;u++){let d=u/7*Math.PI*2,f=4+Math.floor(e.rand()*6);for(let g=0;g<f;g++){let x=en(.045,l,Math.cos(d)*(.26+g*.01),2.85-g*.11,Math.sin(d)*(.26+g*.01),6);x.scale.set(1,.5,1.4),x.castShadow=!1,o.add(x)}}let h=new he;return h.position.y=a,o.position.y=-a,h.add(o),i.add(h),Wy(e,h,.025,.6),{object:i}}return i.add(o),Wy(e,o,t==="grass"?.05:.02,t==="grass"?1.4:.8),{object:i}}function hA(n,e){let t=document.createElement("canvas");t.width=96,t.height=512;let i=t.getContext("2d");i.fillStyle=n,i.fillRect(0,0,96,512);let s=i.createLinearGradient(0,0,96,0);s.addColorStop(0,"rgba(0,0,0,0.35)"),s.addColorStop(.45,"rgba(255,255,255,0.12)"),s.addColorStop(1,"rgba(0,0,0,0.4)"),i.fillStyle=s,i.fillRect(0,0,96,512),i.fillStyle="#d9b45a";for(let o of[28,40,472,484])i.fillRect(8,o,80,4);i.save(),i.translate(56,256),i.rotate(-Math.PI/2),i.font="bold 34px Georgia, serif",i.textAlign="center",i.textBaseline="middle",i.fillText(e.length>20?`${e.slice(0,19)}\u2026`:e,0,0),i.restore();let r=new Zt(t);return r.colorSpace=bt,r}function pu(n,e=320){let t=n.build()[0],i=document.createElement("canvas");i.width=e,i.height=Math.round(e*t.h/t.w);let s=i.getContext("2d");s.scale(e/t.w,e/t.w),t.draw(s);let r=new Zt(i);return r.colorSpace=bt,r}function uA(n,e){let t=Yy({...n,reserveLevel:2},e),i=t.object,s=[],r=-.95;for(let a of n.books){let c=Ss[a],l=new st({color:c.leather,roughness:.55}),h=new st({map:hA(c.leather,c.title),roughness:.5}),u=new ce(an("libbook",()=>new Vt(.075,.4,.3)),[l,l,l,l,h,l]);u.position.set(r+.04,1.16+.02+.2,-.21+.04+.15),u.castShadow=!0,i.add(u),s.push({id:a,mesh:u}),r+=.1}for(let a=0;a<9;a++){let c=.28+e.rand()*.1;i.add(mt(.05,c,.26,j(["#7b2d26","#1f3b4d","#2d6a4f","#6d597a"][a%4],{roughness:.85}),r+.15+a*.07,1.18+c/2,-.06))}let o=new ce(new Ut(.36,.07),new st({map:dA("LIBRARY \xB7 please borrow"),metalness:.6,roughness:.35}));return o.position.set(-.65,1.12,.215),i.add(o),{...t,library:s}}function dA(n){let e=document.createElement("canvas");e.width=512,e.height=100;let t=e.getContext("2d"),i=t.createLinearGradient(0,0,0,100);i.addColorStop(0,"#e8c46a"),i.addColorStop(1,"#a8812f"),t.fillStyle=i,t.fillRect(0,0,512,100),t.fillStyle="#3b2a12",t.font="bold 40px Georgia, serif",t.textAlign="center",t.textBaseline="middle",t.fillText(n,256,52);let s=new Zt(e);return s.colorSpace=bt,s}function fA(n,e){let t=new he,i=j(e.theme.wood||"#5a3b28",{roughness:.6});for(let r of[-1,1])t.add(Ce(.04,1.05,.42,i,r*.42,.525,0,.01));t.add(Ce(.88,.04,.42,i,0,.06,0,.01));let s=[];return n.books.forEach((r,o)=>{let a=.32+o*.42,c=Ce(.84,.03,.08,i,0,a-.15,.12,.01);t.add(c);let l=mt(.84,.32,.02,i,0,a,-.06);l.rotation.x=-.25,t.add(l);let h=new ce(new Vt(.28,.36,.01),[j("#f6f0e1"),j("#f6f0e1"),j("#f6f0e1"),j("#f6f0e1"),new st({map:pu(Ss[r]),roughness:.6}),j("#f6f0e1")]);h.position.set(o%2?.2:-.2,a+.02,.03),h.rotation.x=-.25,h.castShadow=!0,t.add(h),s.push({id:r,mesh:h})}),{object:t,library:s}}function pA(n,e){let t=new he,i=j(e.theme.doorWood||"#5a3b28",{roughness:.55}),s=j(e.theme.trimWood||"#2a1c13",{roughness:.6});t.add(Ce(.12,2.3,.16,s,-.58,1.15,.02),Ce(.12,2.3,.16,s,.58,1.15,.02),Ce(1.28,.14,.16,s,0,2.3,.02));let r=new he;r.userData.animated=!0,r.position.set(-.52,0,.02);let o=Ce(1.04,2.2,.06,i,.52,1.1,0,.02);r.add(o);for(let[a,c]of[[1.55,.7],[.6,.8]])r.add(Ce(.8,c,.02,j(Es(e.theme.doorWood||"#5a3b28",.05),{roughness:.5}),.52,a,.035,.01));return r.add(en(.04,j("#c9a66b",{metalness:.7,roughness:.3}),.92,1.05,.07,12)),t.add(r),{object:t,door:r}}function $y(n){let e=Ss[n],t=new he;if(e.magazine){let i=new st({map:pu(e,192),roughness:.6}),s=j("#f6f0e1"),r=new ce(new Vt(.2,.008,.26),[s,s,i,s,s,s]);r.position.y=.006,t.add(r)}else{let i=new st({map:ou(e.leather,e.title,.7),roughness:.55}),s=new st({map:au(e.leather),roughness:.6}),r=j("#efe6d2"),o=new ce(new Vt(.17,.04,.24),[r,s,i,s,r,r]);o.position.y=.022,t.add(o)}return t.rotation.y=es(n)%628/100,t}var jy={sofa:(n,e)=>up(3,n,e),loveseat:(n,e)=>up(2,n,e),armchair:(n,e)=>up(1,n,e),beanbag:FE,cushion:BE,chair:zE,stool:HE,swing:GE,lounger:VE,hammock:WE,bench:XE,coffeeTable:qE,roundTable:YE,sideTable:jE,rug:KE,bookshelf:Yy,fireplace:ZE,floorLamp:JE,lantern:QE,window:eA,counter:tA,turntable:nA,painting:iA,neonSign:sA,pergola:rA,stringLights:oA,firepit:aA,cat:cA,plant:lA,libraryShelf:uA,magazineRack:fA,door:pA};var mA=new Set(["window","painting","bookshelf","libraryShelf","door"]),mu=xt.degToRad;function ia(n,e,t){let i=mu(n.r||0),s=Math.cos(i),r=Math.sin(i);return new I(n.x+e*s+t*r,0,n.z-e*r+t*s)}function Zy(n,e){let t=new he,i=[],s={theme:e,rand:_n(es(n.id)),animate:M=>i.push(M),menu:ir(n)},{w:r,d:o}=n.size,a=new nc(...e.hemi),c=new Ir(e.key.color,e.key.intensity);c.position.set(...e.key.pos),e.sun&&c.position.copy(Jy(e.sun)).multiplyScalar(40),c.castShadow=!0,c.shadow.mapSize.set(2048,2048),Object.assign(c.shadow.camera,{left:-13,right:13,top:13,bottom:-13,near:1,far:90}),c.shadow.bias=-4e-4,c.shadow.normalBias=.03,c.shadow.radius=3,t.add(a,c,c.target);let l=new ce(new Ut(r,o),new st({map:e.floor(),roughness:e.floorRough??.75,metalness:e.floorMetal??0}));if(l.rotation.x=-Math.PI/2,l.receiveShadow=!0,l.userData.floor=!0,t.add(l),e.outside!=="city"){let M=e.slabDepth??.5;t.add(mt(r+.4,M,o+.4,j(e.slab,{roughness:.9}),0,-M/2-.002,0))}let h=yA(n,e,t),u=_A(n,e,t,s);vA(n,e,t,s);let d=new Map,f=[l],g=[],x=new Map,m=null,p=null;n.layout.forEach((M,R)=>{let b=jy[M.type];if(!b)return;let T=b(M,s),P=T.object;T.absolute||(P.position.set(M.x,M.y||0,M.z),P.rotation.y=mu(M.r||0));let U=mA.has(M.type)?gA(h,M,r,o):null;(U?U.attach:t).add(P),g.push(P);for(let O of T.library||[])O.mesh.userData.libraryBook=O.id,O.mesh.userData.keep=!0,x.set(O.id,O),f.push(O.mesh);if(T.door&&(m={pivot:T.door}),T.seats){let O=mu(M.r||0);T.seats.forEach((E,C)=>{let D=`${R}:${C}`,F=ia(M,E.x,E.z),V=new I(Math.sin(O),0,Math.cos(O));d.set(D,{id:D,index:R,rot:O,pos:new I(F.x,E.y+(M.y||0),F.z),approach:F.clone().addScaledVector(V,.75)})}),P.userData.seatIndex=R}if(M.type==="counter"){let O=T.halfWidth,E=ia(M,O+.7,0).length()<ia(M,-O-.7,0).length()?1:-1;p={home:ia(M,E*(O-.6),T.home.z),homeYaw:mu(M.r||0),via:[ia(M,E*(O+.7),T.home.z),ia(M,E*(O+.7),1.1)]}}});let y={hw:r/2-.7,hd:o/2-.7},v=[],_=new Un;t.updateMatrixWorld(!0);for(let M of g)M.traverse(R=>{!R.isMesh||R.isInstancedMesh||(R.geometry.boundingBox||R.geometry.computeBoundingBox(),_.copy(R.geometry.boundingBox).applyMatrix4(R.matrixWorld),!(_.min.y>.7||_.max.y<.08)&&v.push({minX:_.min.x,maxX:_.max.x,minZ:_.min.z,maxZ:_.max.z}))});for(let M of g)gu(M),M.userData.seatIndex!==void 0&&M.traverse(R=>{R.isMesh&&(R.userData.furniture=M.userData.seatIndex,f.push(R))});for(let M of h)gu(M.frame);function w(M,R,b=.3){for(let T=0;T<3;T++){for(let P of v){if(M<=P.minX-b||M>=P.maxX+b||R<=P.minZ-b||R>=P.maxZ+b)continue;let U=M-(P.minX-b),O=P.maxX+b-M,E=R-(P.minZ-b),C=P.maxZ+b-R,D=Math.min(U,O,E,C);D===U?M=P.minX-b:D===O?M=P.maxX+b:D===E?R=P.minZ-b:R=P.maxZ+b}M=xt.clamp(M,-y.hw,y.hw),R=xt.clamp(R,-y.hd,y.hd)}return[M,R]}return{root:t,seats:d,pickables:f,floor:l,waiter:p,bounds:y,envScene:u,resolve:w,library:x,door:m,shadowsDirty:!0,update(M,R,b){for(let T of i)T(M,R,b);for(let T of h){if(!T.cutaway)continue;let P=(b.position.x-T.px)*T.nx+(b.position.z-T.pz)*T.nz>0;T.full.visible!==P&&(T.full.visible=P,T.attach.visible=P,T.stub&&(T.stub.visible=!P),this.shadowsDirty=!0)}},dispose(){t.traverse(M=>{M.geometry&&!M.geometry.userData.shared&&M.geometry.dispose();let R=Array.isArray(M.material)?M.material:M.material?[M.material]:[];for(let b of R)if(!b.userData.shared){for(let T of["map","emissiveMap"])b[T]&&!b[T].userData.shared&&b[T].dispose();b.dispose()}})}}}function gu(n){n.updateMatrixWorld(!0);let e=new Ye().copy(n.matrixWorld).invert(),t=new Map,i=r=>{for(let o of[...r.children]){if(o.userData.animated||o.userData.separate){gu(o);continue}let a=o.geometry;if(o.isMesh&&!o.isInstancedMesh&&!o.userData.keep&&!Array.isArray(o.material)&&o.children.length===0&&a.attributes.normal&&a.attributes.uv&&!a.groups.length){let c=`${o.material.uuid}|${a.index?1:0}|${o.castShadow}|${o.receiveShadow}|${o.renderOrder}`;t.has(c)||t.set(c,[]),t.get(c).push(o)}i(o)}};i(n);let s=new Ye;for(let r of t.values()){if(r.length<2)continue;let o=r.map(h=>{let u=new yt;for(let d of["position","normal","uv"])u.setAttribute(d,h.geometry.attributes[d].clone());return h.geometry.index&&u.setIndex(h.geometry.index.clone()),u.applyMatrix4(s.multiplyMatrices(e,h.matrixWorld))}),a=rp(o);if(o.forEach(h=>h.dispose()),!a)continue;let c=r[0],l=new ce(a,c.material);l.castShadow=c.castShadow,l.receiveShadow=c.receiveShadow,l.renderOrder=c.renderOrder;for(let h of r)h.removeFromParent();n.add(l)}}function Jy({elevation:n,azimuth:e}){return new I().setFromSphericalCoords(1,xt.degToRad(90-n),xt.degToRad(e))}function gA(n,e,t,i){let s={back:Math.abs(e.z+i/2),front:Math.abs(e.z-i/2),left:Math.abs(e.x+t/2),right:Math.abs(e.x-t/2)},r=null;for(let o of n)s[o.name]<.8&&(!r||s[o.name]<s[r.name])&&(r=o);return r}function yA(n,e,t){let{w:i,d:s}=n.size,r=e.walls,o=r.height,a=.2,c=[{name:"back",len:i,px:0,pz:-s/2,nx:0,nz:1,rot:0},{name:"front",len:i,px:0,pz:s/2,nx:0,nz:-1,rot:Math.PI},{name:"left",len:s,px:-i/2,pz:0,nx:1,nz:0,rot:Math.PI/2},{name:"right",len:s,px:i/2,pz:0,nx:-1,nz:0,rot:-Math.PI/2}],l=[];for(let h of c){let u=new he;u.position.set(h.px,0,h.pz),u.rotation.y=h.rot,t.add(u);let d=new he;d.userData.separate=!0;let f=new he;u.add(d),t.add(f);let g=h.len+.4,x=null,m=!1;if(r.kind==="solid"){m=!0;let p=My({...r.paper,repeat:[h.len/1.6,1]});d.add(mt(g,o,a,new st({map:p,roughness:.95}),0,o/2,-a/2)),d.add(mt(g,1.05,.06,j(r.wainscot,{roughness:.6}),0,.525,.03));for(let y=-h.len/2+.6;y<h.len/2;y+=1.2)d.add(mt(.5,.6,.02,j(r.wainscot,{roughness:.5}),y,.55,.07));d.add(mt(g,.07,.11,j(r.trim),0,1.07,.04)),d.add(mt(g,.14,.12,j(r.trim),0,o-.07,.03)),d.add(mt(g,.04,a+.02,j(r.trim),0,o+.02,-a/2)),x=new he,x.userData.separate=!0,x.add(mt(g,.32,a,j(r.trim),0,.16,-a/2)),x.visible=!1,u.add(x)}else if(r.kind==="glass"){m=!0;let p=j(r.frame,{roughness:.5});u.add(mt(g,.6,a,j(r.knee,{roughness:.9}),0,.3,-a/2)),u.add(mt(g,.06,a+.06,j(r.frame),0,.62,-a/2));let y=mt(h.len,o-.6,.03,j("#d8f0ff",{transparent:!0,opacity:.14,roughness:.05,metalness:.2,depthWrite:!1}),0,.6+(o-.6)/2,-.1);y.castShadow=!1,d.add(y);for(let v=-h.len/2;v<=h.len/2+.01;v+=h.len/Math.round(h.len/1.5))d.add(mt(.08,o-.6,.12,p,v,.6+(o-.6)/2,-.1));for(let v of[2.4,o])d.add(mt(g,.08,.14,p,0,v,-.1))}else if(r.kind==="parapet"){u.add(mt(g+.2,o,.3,j(r.color,{roughness:.9}),0,o/2,-.15)),u.add(mt(g+.2,.06,.36,j(Es(r.color,.06)),0,o+.03,-.15));let p=He(.03,.03,g,j(r.rail,{metalness:.7,roughness:.35}),0,o+.38,-.15,8);p.rotation.z=Math.PI/2,u.add(p);for(let y=-h.len/2;y<=h.len/2+.01;y+=1.5)u.add(He(.02,.02,.38,j(r.rail,{metalness:.7,roughness:.35}),y,o+.2,-.15,6))}else if(r.kind==="railing"){let p=j(r.color,{roughness:.7}),y=j(r.rope,{roughness:1}),v=h.name==="front"?1.6:-1,_=Math.round(h.len/1.5);for(let M=0;M<=_;M++){let R=-h.len/2+M*h.len/_;Math.abs(R)<v||u.add(mt(.12,o,.12,p,R,o/2,-.06))}let w=v>0?[[-h.len/2,-v],[v,h.len/2]]:[[-h.len/2,h.len/2]];for(let[M,R]of w){let b=R-M,T=(M+R)/2;u.add(Ce(b+.12,.08,.16,p,T,o,-.06,.02));for(let P of[.4,.7]){let U=He(.018,.018,b,y,T,P,-.06,6);U.rotation.z=Math.PI/2,U.castShadow=!1,u.add(U)}}}l.push({...h,frame:u,full:d,attach:f,stub:x,cutaway:m})}if(r.kind==="solid"){let h=bc({base:r.ceiling||"#4a3020",planks:6,seed:21,repeat:[2,1.6]}),u=new ce(new Ut(i,s),new st({map:h,roughness:.9}));u.rotation.x=Math.PI/2,u.position.y=o,u.castShadow=!1,t.add(u)}if(e.roof){let h=j(r.frame,{roughness:.5}),u=1.5,d=s/2,f=Math.hypot(d,u),g=Math.atan2(u,d),x={[-1]:l.find(p=>p.name==="back").attach,1:l.find(p=>p.name==="front").attach};for(let p=-i/2;p<=i/2+.01;p+=i/6)for(let y of[-1,1]){let v=mt(.08,.1,f,h,p,o+u/2,y*d/2);v.rotation.x=y*g,v.castShadow=!1,x[y].add(v)}let m=mt(i,.12,.12,h,0,o+u,0);m.castShadow=!1,t.add(m)}return l}function xA(n){let e=new ce(new Ti(400,32,24),new Rt({map:Ey(n),side:qt,fog:!1,depthWrite:!1}));return e.renderOrder=-10,e}function Ky(n,e){let t=new Mc;t.scale.setScalar(1e3);let i=t.material.uniforms;return i.turbidity.value=n.turbidity??3,i.rayleigh.value=n.rayleigh??1.2,i.mieCoefficient.value=n.mie??.005,i.mieDirectionalG.value=n.mieG??.8,i.cloudCoverage.value=n.clouds??.35,i.cloudDensity.value=.35,i.sunPosition.value.copy(Jy(n)),e.animate((s,r)=>{i.time.value=r}),t}function _A(n,e,t,i){let{w:s,d:r}=n.size,o=i.rand,a=new ps;if(e.sun){let c=Ky(e.sun,i);t.add(c),a.add(Ky(e.sun,{animate(){}}))}else if(e.sky){let c=xA(e.sky);t.add(c),a.add(c.clone())}else a.add(new cu);if(e.outside==="garden"){let c=new ce(new Rr(220,48),j("#86b35f",{roughness:1}));c.rotation.x=-Math.PI/2,c.position.y=-.5,c.receiveShadow=!0,t.add(c);let l=new ce(new Ut(3,40),j("#d9c7a7",{roughness:1}));l.rotation.x=-Math.PI/2,l.position.set(0,-.49,r/2+20),t.add(l);let h=[j("#3a7d44",{roughness:.9}),j("#4f9a52",{roughness:.9}),j("#2d6a4f",{roughness:.9})],u=j("#6b4a32"),d=new Ws(1,2),f=new he;t.add(f);for(let x=0;x<70;x++){let m=o()*Math.PI*2,p=13+o()*70,y=Math.cos(m)*p*1.2,v=Math.sin(m)*p;if(Math.abs(y)<s/2+2&&Math.abs(v)<r/2+2)continue;let _=o()<.55,w=new he;if(w.position.set(y,-.5,v),_){let M=2.5+o()*3;w.add(He(.15,.25,M,u,0,M/2,0,8));for(let R=0;R<3;R++){let b=new ce(d,h[R]),T=1.2+o()*1.2;b.scale.setScalar(T),b.position.set((o()-.5)*1.5,M+(o()-.3)*1.2,(o()-.5)*1.5),b.castShadow=!0,w.add(b)}}else{let M=new ce(d,h[x%3]);M.scale.set(.8+o(),.6+o()*.5,.8+o()),M.position.y=.3,w.add(M)}f.add(w)}gu(f);let g=new ce(new Rr(300,32),new Rt({color:"#4f7a3a"}));g.rotation.x=-Math.PI/2,g.position.y=-2,a.add(g)}if(e.outside==="city"){let c=np(11,.3);c.repeat.set(3,10);let l=new ce(new Vt(s+.4,60,r+.4),new st({color:"#1a1f2b",map:c,emissive:"#ffffff",emissiveMap:c,emissiveIntensity:.7,roughness:.8}));l.position.y=-30.002,l.receiveShadow=!0,t.add(l);let h=[],u=[];for(let m=0;m<150;m++){let p=o()*Math.PI*2,y=36+o()*110,v=6+o()*12,_=6+o()*12,w=-42+o()*50+(y>80?14:0),M=w+140,R=new Vt(v,M,_),b=R.attributes.uv;[[_,M],[_,M],[0,0],[0,0],[v,M],[v,M]].forEach(([P,U],O)=>{for(let E=0;E<4;E++){let C=O*4+E;b.setXY(C,b.getX(C)*P/8,b.getY(C)*U/16)}}),R.rotateY(o()*Math.PI),R.translate(Math.cos(p)*y,w-M/2,Math.sin(p)*y),h.push(R),w>4&&u.length<12&&u.push(new I(Math.cos(p)*y,w+.6,Math.sin(p)*y))}let d=np(12,.32),f=new ce(rp(h),new st({color:"#141926",map:d,emissive:"#ffffff",emissiveMap:d,emissiveIntensity:.55,roughness:.9}));h.forEach(m=>m.dispose()),t.add(f);let g=new Rt({color:"#ff4a3a"}),x=u.map(m=>{let p=new ce(new Ti(.5,8,6),g);return p.position.copy(m),t.add(p),p});i.animate((m,p)=>{let y=Math.sin(p*2.2)>.4;for(let v of x)v.visible=y})}if(e.outside==="ocean"){let c=new Ut(900,900,120,120);c.rotateX(-Math.PI/2);let l=Ly();l.repeat.set(90,90);let h=new yn({color:"#0e3a4f",roughness:.08,metalness:0,normalMap:l,normalScale:new oe(.35,.35),envMapIntensity:1,clearcoat:0,ior:1.33,specularIntensity:1}),u={value:0};h.onBeforeCompile=p=>{p.uniforms.uTime=u;let y=`
        uniform float uTime;
        float wave(vec2 p) {
          return sin(p.x * 0.12 + uTime * 0.9) * 0.22 + sin(p.y * 0.17 + uTime * 1.3) * 0.18 + sin((p.x + p.y) * 0.31 + uTime * 1.7) * 0.06;
        }`;p.vertexShader=p.vertexShader.replace("#include <common>",`#include <common>
${y}`).replace("#include <beginnormal_vertex>",`
          vec2 wp = position.xz;
          float e = 0.5;
          vec3 objectNormal = normalize(vec3(wave(wp - vec2(e, 0.0)) - wave(wp + vec2(e, 0.0)), 2.0 * e, wave(wp - vec2(0.0, e)) - wave(wp + vec2(0.0, e))));
          #ifdef USE_TANGENT
            vec3 objectTangent = vec3(tangent.xyz);
          #endif`).replace("#include <begin_vertex>","vec3 transformed = vec3(position.x, position.y + wave(position.xz), position.z);")};let d=new ce(c,h);d.position.y=-1.3,d.receiveShadow=!0,t.add(d),i.animate((p,y)=>{u.value=y,l.offset.set(y*.012,y*.007)});let f=j("#5a4030",{roughness:.9});for(let p of[-s/2,-s/6,s/6,s/2])for(let y of[-r/2,r/2])t.add(He(.18,.2,3,f,p,-1.6,y,10));let g=j("#5a4a6b",{flatShading:!0,roughness:1,fog:!0});for(let[p,y,v]of[[-140,-260,30],[90,-280,45],[190,-220,22]]){let _=new ce(new Ws(1,1),g);_.scale.set(v,v*.25,v*.6),_.position.set(p,-1.5,y),t.add(_)}let x=new Wi({color:"#3a2f45"}),m=[];for(let p=0;p<5;p++){let y=new yt().setFromPoints([new I(-.6,.2,0),new I(0,0,0),new I(.6,.2,0)]),v=new gs(y,x);t.add(v),m.push({l:v,r:25+o()*25,h:9+o()*6,s:.08+o()*.06,ph:o()*6,cz:-30-o()*20})}i.animate((p,y)=>{for(let v of m){let _=y*v.s+v.ph;v.l.position.set(Math.cos(_)*v.r,v.h+Math.sin(_*3)*.6,v.cz+Math.sin(_)*v.r*.4);let w=v.l.geometry.attributes.position,M=Math.sin(y*6+v.ph)*.3;w.setY(0,M),w.setY(2,M),w.needsUpdate=!0}})}return a}function vA(n,e,t,i){let{w:s,d:r}=n.size,o=i.rand,a=e.particles;if(a==="dust"||a==="pollen"){let l=new Float32Array(420),h=[];for(let f=0;f<140;f++)h.push({x:(o()-.5)*s,y:.3+o()*3.6,z:(o()-.5)*r,p:o()*10});let u=new yt;u.setAttribute("position",new Xt(l,3));let d=new xs(u,new Xi({map:rr(),color:new pe(e.dustColor),size:.035,transparent:!0,opacity:.35,depthWrite:!1,blending:Ei}));d.frustumCulled=!1,t.add(d),i.animate((f,g,x)=>{let m=x.position;for(let p=0;p<140;p++){let y=h[p],v=y.x+Math.sin(g*.13+y.p)*.6,_=y.y+Math.sin(g*.21+y.p*2)*.35,w=y.z+Math.cos(g*.11+y.p)*.6,M=(v-m.x)**2+(_-m.y)**2+(w-m.z)**2<2.2;l[p*3]=v,l[p*3+1]=M?-50:_,l[p*3+2]=w}u.attributes.position.needsUpdate=!0})}if(a==="pollen"){let c=new Rr(.12,10),l=["#f6bd60","#f28482","#84a59d","#a2d2ff"];for(let h=0;h<4;h++){let u=new he,d=new st({color:l[h],side:Ct,roughness:.6}),f=[-1,1].map(m=>{let p=new he,y=new ce(c,d);return y.position.x=m*.11,y.rotation.x=-Math.PI/2,p.add(y),u.add(p),{pivot:p,s:m}});t.add(u);let g=o()*20,x=2+o()*4;i.animate((m,p)=>{let y=p*.25+g;u.position.set(Math.cos(y)*x+Math.sin(y*2.3)*1.2,1.6+Math.sin(y*3.1)*.7,Math.sin(y*.8)*x*.8),u.rotation.y=-y;for(let v of f)v.pivot.rotation.z=v.s*Math.sin(p*22+g)*.9})}}if(a==="rain"){let u=new Float32Array(15600),d=new Float32Array(2600*2),f=new Float32Array(2600*2);for(let p=0;p<2600;p++){let y=(o()-.5)*46,v=o()*26,_=(o()-.5)*46,w=11+o()*5;for(let M=0;M<2;M++)u.set([y,v,_],(p*2+M)*3),d[p*2+M]=M,f[p*2+M]=w}let g=new yt;g.setAttribute("position",new Xt(u,3)),g.setAttribute("tip",new Xt(d,1)),g.setAttribute("speed",new Xt(f,1));let x={uTime:{value:0},uTop:{value:26},uColor:{value:new pe("#aab7cc")}},m=new ys(g,new bn({uniforms:x,transparent:!0,depthWrite:!1,vertexShader:`
        attribute float tip;
        attribute float speed;
        uniform float uTime;
        uniform float uTop;
        varying float vFade;
        void main() {
          float y = mod(position.y - uTime * speed, uTop) - 4.0;
          vec3 p = vec3(position.x - y * 0.05 + tip * 0.02, y + tip * 0.38, position.z);
          vFade = 1.0 - tip * 0.7;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
        }`,fragmentShader:`
        uniform vec3 uColor;
        varying float vFade;
        void main() { gl_FragColor = vec4(uColor, 0.22 * vFade); }`}));m.frustumCulled=!1,t.add(m),i.animate((p,y)=>{x.uTime.value=y})}if(a==="fireflies"){let c=[];for(let l=0;l<36;l++){let h=new On(new An({map:rr(),color:"#e9ff8a",transparent:!0,depthWrite:!1,blending:Ei}));h.scale.setScalar(.08);let u=o()<.5,d=u?(o()<.5?-1:1)*(s/2-.5-o()*2):(o()-.5)*s,f=u?(o()-.5)*r:(o()<.5?-1:1)*(r/2-.5-o()*2);c.push({s:h,x:d,z:f,y:.5+o()*2.2,p:o()*20}),t.add(h)}i.animate((l,h)=>{for(let u of c)u.s.position.set(u.x+Math.sin(h*.4+u.p)*.8,u.y+Math.sin(h*.7+u.p*1.7)*.4,u.z+Math.cos(h*.33+u.p)*.8),u.s.material.opacity=Math.max(0,Math.sin(h*1.3+u.p*3))})}}var bA=2.6;function fp(n){n.traverse(e=>{e.castShadow=!1})}function pp(n){let e=new ce(new Ut(n,n),new Rt({map:Dy(),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4}));return e.rotation.x=-Math.PI/2,e.position.y=.012,e.renderOrder=1,e}var MA=.27;function or(n,e,{depthTest:t=!0,opacity:i=1}={}){let s=new On(new An({map:n,transparent:!0,depthWrite:!1,depthTest:t,opacity:i}));return s.scale.set(e,e,1),s}function Qy(n){return 1+2.70158*(n-1)**3+1.70158*(n-1)**2}function Vr(n,e,t){let i=(e-n+Math.PI)%(Math.PI*2)-Math.PI;return i<-Math.PI&&(i+=Math.PI*2),n+i*t}var yu=class{constructor(e){this.parent=e,this.items=[]}burst(e,t,i=4){for(let s=0;s<i;s++){let r=or(ci(e),.3,{depthTest:!1});r.renderOrder=20,r.position.copy(t),this.parent.add(r),this.items.push({s:r,t:-s*.12,life:1.8,vx:(Math.random()-.5)*.8,vz:(Math.random()-.5)*.8,vy:1.1+Math.random()*.6})}}update(e){this.items=this.items.filter(t=>{if(t.t+=e,t.t<0)return t.s.visible=!1,!0;t.s.visible=!0;let i=t.t/t.life;if(i>=1)return this.parent.remove(t.s),t.s.material.dispose(),!1;t.s.position.x+=t.vx*e,t.s.position.z+=t.vz*e,t.s.position.y+=t.vy*e*(1-i);let s=.3*(i<.15?i/.15:1);return t.s.scale.set(s,s,1),t.s.material.opacity=i>.6?1-(i-.6)/.4:1,!0})}clear(){for(let e of this.items)this.parent.remove(e.s),e.s.material.dispose();this.items=[]}},xu=class{constructor(e,{isMe:t}){this.id=e.id,this.phase=es(String(e.id))%1e3/100,this.emoji=e.avatar,this.color=e.color,this.isMe=t,this.group=new he,this.rig=new he,this.group.add(this.rig);let i=j(e.color,{roughness:.75}),s=j(new pe(e.color).lerp(new pe("#ffffff"),.45).getStyle(),{roughness:.85}),r=j(new pe(e.color).multiplyScalar(.6).getStyle(),{roughness:.8});this.body=new ce(new Si(.28,.42,8,16),i),this.body.position.y=.61,this.rig.add(this.body),this.shadow=pp(.95),this.group.add(this.shadow);let o=en(.2,s,0,.55,.15,16);if(o.scale.set(1,1.25,.55),this.rig.add(o),this.feet=[-1,1].map(a=>{let c=en(.09,r,a*.13,.08,.06,12);return c.scale.set(1,.7,1.4),this.rig.add(c),c}),this.arms=[-1,1].map(a=>{let c=new he;c.position.set(a*.29,.82,0);let l=new ce(new Si(.06,.22,4,8),i);return l.position.y=-.15,c.add(l),c.rotation.z=a*.25,this.rig.add(c),c}),this.head=or(ci(e.avatar),.82),this.head.position.y=1.38,this.rig.add(this.head),t){let a=new ce(new Xs(.42,.5,40),new Rt({color:new pe(e.color).multiplyScalar(1.6),transparent:!0,opacity:.85,depthWrite:!1}));a.rotation.x=-Math.PI/2,a.position.y=.02,this.group.add(a),this.ring=a}this.items={drink:null,snack:null},this.steam=[];for(let a=0;a<3;a++){let c=or(rr(),.1,{opacity:0});c.material.color.set("#ffffff"),c.visible=!1,this.rig.add(c),this.steam.push({s:c,p:a/3})}this.pos=new I(e.x,0,e.z),this.target=this.pos.clone(),this.yaw=Math.random()*Math.PI*2,this.state="idle",this.seat=null,this.pendingSeat=null,this.hop=null,this.walkPhase=0,this.jump=0,this.sipPhase=Math.random()*10,this.bubble=null,this.group.position.copy(this.pos),this.group.rotation.y=this.yaw,fp(this.group)}get position(){return this.group.position}moveTo(e,t){this.pendingSeat=null,(this.state==="sitting"||this.state==="hopIn")&&this.standUp(),this.target.set(e,0,t),this.state!=="hopOut"&&(this.state="walk")}sitAt(e,t=!1){if(this.pendingSeat=e,t){this.seat=e,this.pendingSeat=null,this.pos.copy(e.approach),this.state="sitting",this.yaw=e.rot,this.applySeatPose(1);return}(this.state==="sitting"||this.state==="hopIn")&&this.standUp(),this.target.copy(e.approach),this.state!=="hopOut"&&(this.state="walk")}drive(e,t,i){let s=e-this.pos.x,r=t-this.pos.z;s*s+r*r>1e-8&&(this.yaw=Vr(this.yaw,Math.atan2(s,r),.3)),this.pos.set(e,0,t),this.target.copy(this.pos),this.state=i?"walk":"idle",this.linger=0}standUp(){this.seat&&(this.hop={from:this.group.position.clone(),to:this.seat.approach.clone(),t:0,dur:.3},this.pos.copy(this.seat.approach),this.seat=null,this.state="hopOut")}applySeatPose(e){let t=this.seat,i=new I().lerpVectors(t.approach,t.pos,e);i.y=xt.lerp(0,t.pos.y-MA,e)+Math.sin(e*Math.PI)*.25,this.group.position.copy(i),this.group.rotation.y=this.yaw;for(let[s,r]of this.feet.entries())r.position.z=xt.lerp(.06,.32,e),r.position.y=xt.lerp(.08,.2,e),r.position.x=(s?1:-1)*.13}say(e){let t=performance.now();this.bubble&&t-this.bubble.born<3e3&&this.bubble.chars.length<5?(this.bubble.chars.push(e),this.bubble.born=t):(this.clearBubble(),this.bubble={chars:[e],born:t,sprite:null});let{tex:i,aspect:s}=Ry(this.bubble.chars.join(""));this.bubble.sprite?(this.bubble.sprite.material.map.dispose(),this.bubble.sprite.material.map=i):(this.bubble.sprite=or(i,1,{depthTest:!1}),this.bubble.sprite.renderOrder=30,this.rig.add(this.bubble.sprite)),this.bubble.aspect=s,this.jump=1}clearBubble(){this.bubble&&(this.bubble.sprite&&(this.rig.remove(this.bubble.sprite),this.bubble.sprite.material.map.dispose(),this.bubble.sprite.material.dispose()),this.bubble=null)}setItem(e,t,i){this.removeItem(e);let s=or(ci(t),.34);s.position.set(e==="drink"?.36:-.36,.62,.22),this.rig.add(s),this.items[e]={sprite:s,item:t,at:i??Date.now(),hot:!!nr[t]?.hot,pop:0}}removeItem(e){let t=this.items[e];t&&(this.rig.remove(t.sprite),t.sprite.material.dispose(),this.items[e]=null)}setReading(e){if(this.reading=!!e,e&&!this.book){let t=j("#6b3a2a",{roughness:.6}),i=j("#f3ead6",{roughness:.9}),s=new he;for(let r of[-1,1]){let o=new he;o.add(Ce(.16,.012,.2,t,r*.08,0,0,.004)),o.add(Ce(.15,.012,.19,i,r*.075,.01,0,.003)),o.rotation.z=r*-.25,s.add(o)}s.position.set(0,.68,.3),s.rotation.x=-.9,this.rig.add(s),this.book=s,this.readIcon=or(ci("\u{1F4D6}"),.3),this.readIcon.position.set(0,1.95,0),this.rig.add(this.readIcon)}this.book&&(this.book.visible=this.readIcon.visible=this.reading)}handPosition(e,t=new I){return t.set(e==="drink"?.36:-.36,.62,.22),this.rig.localToWorld(t)}update(e,t){if(this.state==="hopOut"){this.hop.t+=e/this.hop.dur;let o=Math.min(1,this.hop.t);this.group.position.lerpVectors(this.hop.from,this.hop.to,o),this.group.position.y=this.hop.from.y*(1-o)+Math.sin(o*Math.PI)*.25;for(let a of this.feet)a.position.z=.06,a.position.y=.08;o>=1&&(this.group.position.y=0,this.state=this.pendingSeat||this.target.distanceTo(this.pos)>.05?"walk":"idle")}else if(this.state==="walk"){let o=this.target,a=o.x-this.pos.x,c=o.z-this.pos.z,l=Math.hypot(a,c),h=bA*(l>1.2?1.5:1)*e;l<=h?(this.pos.copy(o),this.pendingSeat?(this.seat=this.pendingSeat,this.pendingSeat=null,this.hop={t:0},this.state="hopIn"):(this.linger=(this.linger||0)+e,this.linger>.3&&(this.state="idle",this.linger=0))):(this.linger=0,this.pos.x+=a/l*h,this.pos.z+=c/l*h,this.yaw=Vr(this.yaw,Math.atan2(a,c),Math.min(1,e*10))),this.walkPhase+=e*11,this.group.position.set(this.pos.x,Math.abs(Math.sin(this.walkPhase))*.07,this.pos.z),this.group.rotation.y=this.yaw,this.feet[0].position.z=.06+Math.sin(this.walkPhase)*.12,this.feet[1].position.z=.06-Math.sin(this.walkPhase)*.12;for(let u of this.feet)u.position.y=.08;this.arms[0].rotation.x=-Math.sin(this.walkPhase)*.5,this.arms[1].rotation.x=Math.sin(this.walkPhase)*.5,this.rig.rotation.z=Math.sin(this.walkPhase)*.04}else if(this.state==="hopIn"){this.hop.t+=e/.35;let o=Math.min(1,this.hop.t);this.yaw=Vr(this.yaw,this.seat.rot,Math.min(1,e*14)),this.applySeatPose(o),o>=1&&(this.yaw=this.seat.rot,this.state="sitting")}else if(this.state==="sitting")this.applySeatPose(1);else{this.group.position.set(this.pos.x,0,this.pos.z);for(let o of this.feet)o.position.z=.06,o.position.y=.08}if(this.state!=="walk"){this.rig.rotation.z*=.9;for(let o of this.arms)o.rotation.x*=.85}let i=this.seat&&(this.state==="sitting"||this.state==="hopIn")?this.seat.pos.y+.01:.012;this.shadow.position.y=i-this.group.position.y,this.body.scale.y=1+Math.sin(t*2.2+this.phase)*.02,this.jump=Math.max(0,this.jump-e*3),this.rig.position.y=Math.sin((1-this.jump)*Math.PI)*this.jump*.18,this.head.position.y=1.38+Math.sin(t*2.2+this.phase)*.012,this.sipPhase+=e;let s=this.sipPhase%7;for(let o of["drink","snack"]){let a=this.items[o],c=this.arms[o==="drink"?1:0];if(!a)continue;a.pop=Math.min(1,a.pop+e*3);let l=o==="drink"?s<1.2?Math.sin(s/1.2*Math.PI):0:s>3.5&&s<4.5?Math.sin((s-3.5)/1*Math.PI):0,h=o==="drink"?1:-1;a.sprite.position.set(h*(.36-l*.22),.62+l*.5,.22+l*.1);let u=Math.min(1,(Date.now()-a.at)/iu[o]),d=.34*Qy(a.pop)*(o==="snack"?1-u*.55:1);a.sprite.scale.set(d,d,1),c.rotation.x=-.9-l*.9}if(this.reading){for(let o of this.arms)o.rotation.x=-1.15;this.readIcon.position.y=1.95+Math.sin(t*1.8+this.phase)*.04}let r=this.items.drink;for(let o of this.steam){if(o.s.visible=!!(r&&r.hot),!o.s.visible)continue;o.p=(o.p+e*.6)%1,o.s.position.set(r.sprite.position.x+Math.sin(t*3+o.p*6)*.03,r.sprite.position.y+.15+o.p*.35,r.sprite.position.z);let a=.05+o.p*.12;o.s.scale.set(a,a,1),o.s.material.opacity=Math.sin(o.p*Math.PI)*.35}if(this.bubble){let o=(performance.now()-this.bubble.born)/1e3;if(o>5.5)this.clearBubble();else{let a=this.bubble.sprite,l=.5*Qy(Math.min(1,o/.25));a.scale.set(l*this.bubble.aspect,l,1),a.position.y=2.05+Math.min(o,1)*.05,a.material.opacity=o>4.5?1-(o-4.5):1}}this.ring&&(this.ring.material.opacity=.6+Math.sin(t*3)*.25)}dispose(){this.clearBubble(),this.group.traverse(e=>{e.geometry&&!e.geometry.userData.shared&&e.geometry.dispose(),e.material&&!e.material.userData.shared&&e.material.dispose()})}};function ex(n){let e=document.createElement("canvas");e.width=128,e.height=96;let t=e.getContext("2d");if(t.fillStyle="#1d2733",t.beginPath(),t.roundRect(4,4,120,88,22),t.fill(),t.strokeStyle="#7ff3e1",t.fillStyle="#7ff3e1",t.lineWidth=7,t.lineCap="round",n)for(let s of[40,88])t.beginPath(),t.arc(s,48,12,Math.PI*1.1,Math.PI*1.9),t.stroke();else for(let s of[40,88])t.beginPath(),t.ellipse(s,42,8,11,0,0,Math.PI*2),t.fill();t.beginPath(),t.arc(64,60,12,Math.PI*.15,Math.PI*.85),t.stroke(),t.fillStyle="rgba(255,140,170,0.6)",t.beginPath(),t.arc(22,64,7,0,Math.PI*2),t.arc(106,64,7,0,Math.PI*2),t.fill();let i=new Zt(e);return i.colorSpace=bt,i}var _u=class{constructor(e,t){this.info=e,this.fx=t,this.group=new he;let i=j("#f4f1ea",{roughness:.35}),s=j("#2a9d8f",{roughness:.5}),r=new he;this.rig=r,this.group.add(r);let o=new ce(new Si(.26,.3,8,16),i);o.position.y=.72,r.add(o),this.group.add(pp(.9)),r.add(Ce(.56,.06,.4,s,0,.92,0,.03));let a=Ce(.56,.42,.44,i,0,1.3,0,.12);r.add(a),this.faces=[ex(!1),ex(!0)],this.screen=new ce(new Ut(.44,.33),new Rt({map:this.faces[0]})),this.screen.position.set(0,1.3,.225),r.add(this.screen),r.add(en(.012,s,0,1.6,0,6));let c=new ce(new Rn(.012,.012,.18,6),s);c.position.y=1.6,r.add(c),this.bulb=en(.045,new Rt({color:new pe("#ff7aa2").multiplyScalar(3)}),0,1.71,0,10),r.add(this.bulb);let l=new ce(new Xs(.15,.3,32),new Rt({color:new pe("#7ff3e1").multiplyScalar(1.5),transparent:!0,opacity:.45,depthWrite:!1}));l.rotation.x=-Math.PI/2,l.position.y=.03,this.group.add(l);let h=new he;h.position.set(.3,.95,.3);let u=new ce(new Rn(.2,.2,.025,24),j("#c9a66b",{metalness:.6,roughness:.3}));h.add(u),r.add(h),this.tray=h,this.trayItem=or(ci("\u2615"),.3),this.trayItem.position.y=.17,this.trayItem.visible=!1,h.add(this.trayItem),this.pos=e.home.clone(),this.yaw=e.homeYaw,this.queue=[],this.task=null,this.path=[],this.state="idle",this.timer=0,this.group.position.copy(this.pos),fp(this.group)}enqueue(e){this.queue.push(e)}cancelFor(e){this.queue=this.queue.filter(t=>t.id!==e),this.task&&this.task.id===e&&(this.task.cancelled=!0)}setFace(e){this.screen.material.map=this.faces[e?1:0]}goHome(){this.path=[this.info.via[1],this.info.via[0],this.info.home].map(e=>e.clone()),this.state="returning"}update(e,t,i,s){this.rig.position.y=.06+Math.sin(t*2.4)*.04,this.bulb.visible=Math.sin(t*4)>-.3,(this.state==="idle"||this.state==="returning")&&this.queue.length&&(this.task=this.queue.shift(),this.trayItem.material.map=ci(this.task.item),this.trayItem.visible=!1,this.timer=0,this.state=this.pos.distanceTo(this.info.home)<.3?"brewing":"delivering",this.state==="delivering"&&(this.trayItem.visible=!0,this.path=[]));let r=null;if(this.state==="brewing")this.timer+=e,this.yaw=Vr(this.yaw,this.info.homeYaw+Math.sin(this.timer*18)*.15,Math.min(1,e*10)),this.timer>1.1&&(this.trayItem.visible=!0,this.state="delivering",this.path=[this.info.via[0].clone(),this.info.via[1].clone()]);else if(this.state==="delivering"){let o=i.get(this.task.id);if(!o||this.task.cancelled)this.trayItem.visible=!1,this.task=null,this.goHome();else if(this.path.length)r=this.path[0];else{let a=o.position,c=new I(this.pos.x-a.x,0,this.pos.z-a.z);c.length()<.95?(this.state="handoff",this.timer=0,this.setFace(!0)):r=new I(a.x,0,a.z).addScaledVector(c.normalize(),.8)}}else if(this.state==="handoff"){this.timer+=e;let o=i.get(this.task.id);if(o){let a=o.position;this.yaw=Vr(this.yaw,Math.atan2(a.x-this.pos.x,a.z-this.pos.z),Math.min(1,e*8));let c=Math.min(1,this.timer/.45),l=this.tray.localToWorld(new I(0,.17,0)),h=o.handPosition(this.task.kind),u=l.lerp(h,c);u.y+=Math.sin(c*Math.PI)*.4,this.trayItem.position.copy(this.tray.worldToLocal(u))}this.timer>.45&&(this.trayItem.visible=!1,this.trayItem.position.set(0,.17,0),o&&!this.task.cancelled&&(s(this.task),this.fx.burst("\u2728",o.position.clone().setY(1.9),2)),this.task=null,this.state="pause",this.timer=0)}else this.state==="pause"?(this.timer+=e,this.timer>.6&&(this.setFace(!1),this.queue.length?this.state="idle":this.goHome())):this.state==="returning"?this.path.length?r=this.path[0]:this.state="idle":this.state==="idle"&&(this.yaw=Vr(this.yaw,this.info.homeYaw+Math.sin(t*.3)*.5,Math.min(1,e*2)));if(r){let o=r.x-this.pos.x,a=r.z-this.pos.z,c=Math.hypot(o,a),l=3*e;c<=l?(this.pos.set(r.x,0,r.z),this.path.length&&this.path[0]===r&&this.path.shift()):(this.pos.x+=o/c*l,this.pos.z+=a/c*l,this.yaw=Vr(this.yaw,Math.atan2(o,a),Math.min(1,e*8))),this.rig.rotation.x=.12}else this.rig.rotation.x*=.9;this.group.position.set(this.pos.x,0,this.pos.z),this.group.rotation.y=this.yaw}dispose(){this.faces.forEach(e=>e.dispose()),this.group.traverse(e=>{e.geometry&&!e.geometry.userData.shared&&e.geometry.dispose(),e.material&&!e.material.userData.shared&&e.material.dispose()})}},vu=class{constructor(e){this.door=e,this.group=new he,this.rig=new he,this.group.add(this.rig),this.group.visible=!1;let t=j("#2c3550",{roughness:.7}),i=j("#f7f3ec",{roughness:.8}),s=new ce(new Si(.25,.36,8,16),t);s.position.y=.56,this.rig.add(s),this.group.add(pp(.9));let r=new ce(new Fa(.36,.42,20,1,!0),t);r.position.y=.3,this.rig.add(r);let o=Ce(.3,.42,.04,i,0,.46,.25,.02);this.rig.add(o),this.rig.add(Ce(.34,.05,.3,i,0,.85,.02,.02)),this.head=or(ci("\u{1F42D}"),.74),this.head.position.y=1.24,this.rig.add(this.head);let a=new ce(new qi(.17,.035,8,20,Math.PI),i);a.position.set(0,1.5,.05),this.rig.add(a);let c=new he;c.position.set(0,.62,.36);let l=j("#b08452",{roughness:.95,side:Ct});c.add(new ce(new Rn(.17,.13,.14,16,1,!0),l)),c.add(He(.13,.13,.01,l,0,-.07,0,16));let h=new ce(new qi(.16,.012,6,20,Math.PI),l);c.add(h),this.rig.add(c),this.basket=c,this.carried=[],this.plan=null,fp(this.group)}run(e,{onPick:t}={}){if(!e)return;this.plan=e,this.t=0,this.done=new Set,this.onPick=t;for(let s of this.carried)this.basket.remove(s);this.carried=[],this.group.visible=!0;let i=e.stops[0];this.group.position.set(i.x,0,i.z)}update(e,t){let i=this.plan,s=0;if(i){this.t+=e;let r=this.t;if(r>=i.duration)this.plan=null,this.group.visible=!1;else{let o=i.stops,a=o.findIndex(u=>r<u.at+u.wait);a<0&&(a=o.length-1);let c=o[a],l=!1;if(r<c.at&&a>0){let u=o[a-1],d=u.at+u.wait,f=(r-d)/Math.max(.001,c.at-d);this.group.position.set(u.x+(c.x-u.x)*f,0,u.z+(c.z-u.z)*f),this.group.rotation.y=Math.atan2(c.x-u.x,c.z-u.z),l=!0}else this.done.has(a)||(this.done.add(a),this.arrive(c));let h=!l&&c.kind!=="door"&&c.kind!=="exit"?Math.sin(Math.min(1,(r-c.at)/c.wait)*Math.PI):0;this.rig.rotation.x=h*.5,this.rig.position.y=l?Math.abs(Math.sin(t*9))*.05:0,this.rig.rotation.z=l?Math.sin(t*9)*.05:0,s=Math.max(1-Math.abs(r-.5)/1.4,1-Math.abs(r-(i.duration-.6))/1.4,0)}}this.door&&(this.door.pivot.rotation.y=xt.lerp(this.door.pivot.rotation.y,-1.2*Math.min(1,s*1.6),Math.min(1,e*6)))}arrive(e){if(e.kind==="pick")for(let t of e.ids){this.onPick?.(t);let i=Ce(.16,.04,.22,j(["#6b2d24","#2f4a3a","#8a5a34","#2c3550"][this.carried.length%4]),0,.02+this.carried.length*.042,0,.008);i.rotation.y=this.carried.length*.4,this.basket.add(i),this.carried.push(i)}else if(e.kind==="shelve")for(let t=0;t<e.ids.length;t++){let i=this.carried.pop();i&&this.basket.remove(i)}}dispose(){this.group.traverse(e=>{e.geometry&&!e.geometry.userData.shared&&e.geometry.dispose(),e.material&&!e.material.userData.shared&&e.material.dispose()})}};var bu=n=>440*2**((n-69)/12);function Mu(n,e,t){let i=Math.floor(n.sampleRate*e),s=n.createBuffer(2,i,n.sampleRate);for(let r=0;r<2;r++)t(s.getChannelData(r),n.sampleRate);return s}function tx(n){let e=0;for(let t=0;t<n.length;t++)e=(e+.02*(Math.random()*2-1))/1.02,n[t]=e*3.5}function mp(n){let e=0,t=0,i=0,s=0,r=0,o=0,a=0;for(let c=0;c<n.length;c++){let l=Math.random()*2-1;e=.99886*e+l*.0555179,t=.99332*t+l*.0750759,i=.969*i+l*.153852,s=.8665*s+l*.3104856,r=.55*r+l*.5329522,o=-.7616*o-l*.016898,n[c]=(e+t+i+s+r+o+a+l*.5362)*.11,a=l*.115926}}var wu=class{constructor(){this.ctx=null,this.volume=.6,this.muted=!1,this.session=null}ensure(){if(!this.ctx){let e=new AudioContext;this.ctx=e,this.master=e.createGain();let t=e.createDynamicsCompressor();t.threshold.value=-14,t.ratio.value=3,this.master.connect(t).connect(e.destination),this.applyVolume(),this.reverb=e.createConvolver(),this.reverb.buffer=Mu(e,3,(i,s)=>{for(let r=0;r<i.length;r++)i[r]=(Math.random()*2-1)*(1-r/i.length)**2.6*Math.exp(-r/(s*.9))}),this.reverbOut=e.createGain(),this.reverbOut.gain.value=.35,this.reverb.connect(this.reverbOut).connect(this.master),this.whiteBuf=Mu(e,1,i=>{for(let s=0;s<i.length;s++)i[s]=Math.random()*2-1}),this.crackleBuf=Mu(e,5,(i,s)=>{for(let r=0;r<i.length;r++)if(i[r]=(Math.random()*2-1)*.012,Math.random()<3/s*6){let o=(Math.random()*.5+.2)*(Math.random()<.5?-1:1);for(let a=0;a<40&&r+a<i.length;a++)i[r+a]+=o*Math.exp(-a/6)}})}this.ctx.state==="suspended"&&this.ctx.resume()}setVolume(e){this.volume=e,this.applyVolume()}setMuted(e){this.muted=e,this.applyVolume()}applyVolume(){if(!this.master)return;let e=this.muted?0:this.volume;this.master.gain.setTargetAtTime(e*e*.9,this.ctx.currentTime,.1)}play(e,t){this.ensure(),this.stop();let i=this.ctx,s=i.createGain();s.gain.setValueAtTime(0,i.currentTime),s.gain.linearRampToValueAtTime(1,i.currentTime+2.5),s.connect(this.master);let r=i.createGain();r.gain.value=.9;let o=i.createBiquadFilter();o.type="lowpass",o.frequency.value=t.tone,o.Q.value=.5;let a=i.createWaveShaper(),c=new Float32Array(1024);for(let m=0;m<1024;m++){let p=m/512-1;c[m]=Math.tanh(p*1.6)/Math.tanh(1.6)}a.curve=c,r.connect(a).connect(o).connect(s);let l=i.createGain();l.gain.value=.5,l.connect(this.reverb);let h=i.createOscillator(),u=i.createGain();h.frequency.value=.15,u.gain.value=t.tone*.12,h.connect(u).connect(o.frequency),h.start();let d={roomId:e,cfg:t,out:s,music:r,send:l,nodes:[h],timers:[],seed:es(e),start:i.currentTime+.15,nextStep:0,bars:new Map};this.session=d;let f=i.createBufferSource();f.buffer=this.crackleBuf,f.loop=!0;let g=i.createGain();g.gain.value=.22;let x=i.createBiquadFilter();x.type="highpass",x.frequency.value=900,f.connect(x).connect(g).connect(s),f.start(),d.nodes.push(f),this.ambience(d,t.ambience),d.timers.push(setInterval(()=>this.schedule(d),50)),this.schedule(d)}stop(){let e=this.session;if(!e)return;this.session=null,e.timers.forEach(clearInterval),e.timers.forEach(clearTimeout);let t=this.ctx.currentTime;e.out.gain.cancelScheduledValues(t),e.out.gain.setValueAtTime(e.out.gain.value,t),e.out.gain.linearRampToValueAtTime(0,t+.8),setTimeout(()=>{for(let i of e.nodes)try{i.stop()}catch{}e.out.disconnect()},1e3)}schedule(e){if(this.session!==e)return;let t=60/e.cfg.bpm/4,i=this.ctx.currentTime,s=i+(document.hidden?1.5:.3);for(e.start+e.nextStep*t<i-.2&&(e.nextStep=Math.ceil((i-e.start)/t));e.start+e.nextStep*t<s;){let r=e.nextStep++,o=r%2?e.cfg.swing*t:0,a=e.start+r*t+o;a>i-.01&&this.playStep(e,r,Math.max(a,i),t)}}bar(e,t){let i=e.bars.get(t);if(i)return i;let s=_n(e.seed^Math.imul(t+1,2654435761)),r=e.cfg,o=Math.floor(t/8)%4,a=r.progression[t%r.progression.length];if(i={section:o,chord:a,chordHits:[[0,14]].concat(s()<.5?[[10,5]]:s()<.5?[[6,3]]:[]),kick:o===1||o===2?r.kick.concat(s()<.3?[14]:[]):o===3&&t%2?[0]:[],snare:o===1||o===2?[4,12].concat(s()<.2?[15]:[]):[],hats:o===0?[]:[0,2,4,6,8,10,12,14].concat(s()<.3?[7,15]:[]),hatVel:Array.from({length:16},()=>.5+s()*.5),bass:o===0?[]:[[0,6,a.bass]].concat(s()<.6?[[s()<.5?8:10,4,a.bass+(s()<.5?7:12)]]:[]),lead:[]},o>=2||o===1&&t%4===3){let c=Math.floor(s()*r.scale.length);for(let l=0;l<16;l+=2)s()<r.density&&(c=Math.max(0,Math.min(r.scale.length-1,c+Math.floor(s()*5)-2)),i.lead.push([l,2+Math.floor(s()*3)*2,r.scale[c],.6+s()*.4]))}return e.bars.set(t,i),e.bars.size>8&&e.bars.delete(e.bars.keys().next().value),i}playStep(e,t,i,s){let r=Math.floor(t/16),o=t%16,a=this.bar(e,r);for(let[c,l]of a.chordHits)c===o&&this.keys(e,i,a.chord.notes,l*s,c===0?.8:.5);a.kick.includes(o)&&this.kick(e,i),a.snare.includes(o)&&this.snare(e,i,o===15?.3:.8),a.hats.includes(o)&&this.hat(e,i,a.hatVel[o]*(o%4===2?1:.6));for(let[c,l,h]of a.bass)c===o&&this.bass(e,i,h,l*s);for(let[c,l,h,u]of a.lead)c===o&&this.lead(e,i,h,l*s,u)}env(e,t,i,s,r,o,a,c){e.gain.setValueAtTime(1e-4,t),e.gain.linearRampToValueAtTime(i,t+s),e.gain.setTargetAtTime(i*o,t+s,r),e.gain.setValueAtTime(i*o,a),e.gain.setTargetAtTime(1e-4,a,c)}keys(e,t,i,s,r){let o=this.ctx;i.forEach((a,c)=>{let l=t+c*.012,h=o.createGain();this.env(h,l,.07*r,.015,.4,.45,l+s,.35),h.connect(e.music),h.connect(e.send);for(let[u,d,f,g]of[["sine",1,1,0],["triangle",1,.35,6],["sine",2,.12,0]]){let x=o.createOscillator();x.type=u,x.frequency.value=bu(a)*d,x.detune.value=g+(Math.random()-.5)*6;let m=o.createGain();m.gain.value=f,x.connect(m).connect(h),x.start(l),x.stop(l+s+1.8)}})}bass(e,t,i,s){let r=this.ctx,o=r.createGain();this.env(o,t,.22,.01,.25,.6,t+s,.08);let a=r.createBiquadFilter();a.type="lowpass",a.frequency.value=420,o.connect(a).connect(e.music);let c=r.createOscillator();c.type="sine",c.frequency.value=bu(i);let l=r.createOscillator();l.type="triangle",l.frequency.value=bu(i);let h=r.createGain();h.gain.value=.3,c.connect(o),l.connect(h).connect(o);for(let u of[c,l])u.start(t),u.stop(t+s+.6)}lead(e,t,i,s,r){let o=this.ctx,a=e.cfg.lead,c=o.createGain();c.connect(e.music),c.connect(e.send);let l=bu(i),h={keys:[["sine",1,1],["sine",3,.08]],pluck:[["triangle",1,1],["sine",2,.2]],bell:[["sine",1,1],["sine",2.76,.25],["sine",5.4,.08]],marimba:[["sine",1,1],["sine",4,.25]]}[a]||[["sine",1,1]],u={keys:.6,pluck:.25,bell:.9,marimba:.18}[a]??.4,d=.06*r;this.env(c,t,d,.006,u,a==="keys"?.3:.05,t+s,.3);let f=c;if(a==="pluck"){let g=o.createBiquadFilter();g.type="lowpass",g.frequency.setValueAtTime(3500,t),g.frequency.exponentialRampToValueAtTime(700,t+.3),g.connect(c),f=g}for(let[g,x,m]of h){let p=o.createOscillator();p.type=g,p.frequency.value=l*x;let y=o.createGain();y.gain.value=m,p.connect(y).connect(f),p.start(t),p.stop(t+s+2)}}kick(e,t){let i=this.ctx,s=i.createOscillator(),r=i.createGain();s.frequency.setValueAtTime(110,t),s.frequency.exponentialRampToValueAtTime(42,t+.12),r.gain.setValueAtTime(1e-4,t),r.gain.linearRampToValueAtTime(.55,t+.004),r.gain.exponentialRampToValueAtTime(1e-4,t+.38),s.connect(r).connect(e.music),s.start(t),s.stop(t+.4)}noiseHit(e,t,{type:i,freq:s,q:r=1,peak:o,decay:a}){let c=this.ctx,l=c.createBufferSource();l.buffer=this.whiteBuf;let h=c.createBiquadFilter();h.type=i,h.frequency.value=s,h.Q.value=r;let u=c.createGain();u.gain.setValueAtTime(1e-4,t),u.gain.linearRampToValueAtTime(o,t+.003),u.gain.exponentialRampToValueAtTime(1e-4,t+a),l.connect(h).connect(u).connect(e.music),l.start(t,Math.random()*.5),l.stop(t+a+.05)}snare(e,t,i){this.noiseHit(e,t,{type:"bandpass",freq:1700,q:.7,peak:.22*i,decay:.2});let s=this.ctx,r=s.createOscillator(),o=s.createGain();r.frequency.setValueAtTime(190,t),r.frequency.exponentialRampToValueAtTime(120,t+.08),o.gain.setValueAtTime(.12*i,t),o.gain.exponentialRampToValueAtTime(1e-4,t+.12),r.connect(o).connect(e.music),r.start(t),r.stop(t+.15)}hat(e,t,i){this.noiseHit(e,t,{type:"highpass",freq:7e3,q:.5,peak:.05*i,decay:.045})}loopNoise(e,t,i,s){let r=this.ctx,o=r.createBufferSource();o.buffer=Mu(r,i,t),o.loop=!0;let a=o;for(let c of s)a=a.connect(c);a.connect(e.out),o.start(),e.nodes.push(o)}filter(e,t,i=.7){let s=this.ctx.createBiquadFilter();return s.type=e,s.frequency.value=t,s.Q.value=i,s}gain(e){let t=this.ctx.createGain();return t.gain.value=e,t}ambience(e,t){let i=this.ctx;if(t==="rain")this.loopNoise(e,mp,4,[this.filter("lowpass",2400),this.gain(.42)]),this.loopNoise(e,(s,r)=>{for(let o=0;o<s.length;o++)if(s[o]=0,Math.random()<140/r)for(let a=0;a<60&&o+a<s.length;a++)s[o+a]+=(Math.random()*2-1)*.5*Math.exp(-a/10)},3,[this.filter("bandpass",3500,.6),this.gain(.25)]);else if(t==="fire")this.loopNoise(e,tx,5,[this.filter("lowpass",500),this.gain(.35)]),this.loopNoise(e,(s,r)=>{for(let o=0;o<s.length;o++)if(s[o]=0,Math.random()<9/r){let a=.3+Math.random()*.7,c=60+Math.random()*300;for(let l=0;l<c&&o+l<s.length;l++)s[o+l]+=(Math.random()*2-1)*a*Math.exp(-l/(c/5))}},6,[this.filter("bandpass",2200,.5),this.gain(.3)]);else if(t==="waves"){let s=this.filter("lowpass",700),r=this.gain(.2),o=i.createOscillator();o.frequency.value=.09;let a=this.gain(.18);o.connect(a).connect(r.gain),o.start(),e.nodes.push(o),this.loopNoise(e,tx,6,[s,r]);let c=this.gain(.04),l=this.gain(.04);o.connect(l).connect(c.gain),this.loopNoise(e,mp,4,[this.filter("bandpass",2500,.4),c])}else if(t==="birds"){this.loopNoise(e,mp,4,[this.filter("bandpass",900,.3),this.gain(.03)]);let s=()=>{if(this.session!==e)return;let r=i.currentTime+.05,o=2400+Math.random()*1800,a=2+Math.floor(Math.random()*4);for(let c=0;c<a;c++){let l=r+c*(.09+Math.random()*.05),h=i.createOscillator(),u=i.createGain();h.frequency.setValueAtTime(o,l),h.frequency.exponentialRampToValueAtTime(o*(1.3+Math.random()*.4),l+.05),h.frequency.exponentialRampToValueAtTime(o*.9,l+.08),u.gain.setValueAtTime(1e-4,l),u.gain.linearRampToValueAtTime(.025,l+.01),u.gain.exponentialRampToValueAtTime(1e-4,l+.09);let d=i.createStereoPanner();d.pan.value=Math.random()*2-1,h.connect(u).connect(d).connect(e.out),d.connect(this.reverb),h.start(l),h.stop(l+.1)}e.timers.push(setTimeout(s,2500+Math.random()*6e3))};e.timers.push(setTimeout(s,1500))}}};var Su=class extends EventTarget{constructor(){super(),this.ws=null,this.pendingJoin=null,this.connected=!1,this.connect()}connect(){let e=location.protocol==="https:"?"wss":"ws",t=new WebSocket(`${e}://${location.host}/ws`);this.ws=t,t.onopen=()=>{this.connected=!0,this.pendingJoin&&t.send(JSON.stringify(this.pendingJoin)),this.pendingJoin=null,this.dispatchEvent(new CustomEvent("open"))},t.onmessage=i=>{let s;try{s=JSON.parse(i.data)}catch{return}this.dispatchEvent(new CustomEvent(s.t,{detail:s}))},t.onclose=()=>{let i=this.connected;this.connected=!1,i&&this.dispatchEvent(new CustomEvent("close")),setTimeout(()=>this.connect(),1500)}}send(e){this.ws&&this.ws.readyState===WebSocket.OPEN?this.ws.send(JSON.stringify(e)):e.t==="join"&&(this.pendingJoin=e)}async counts(){let e=await(await fetch("api/rooms")).json();return Object.fromEntries(e.map(t=>[t.id,t.count]))}on(e,t){this.addEventListener(e,i=>t(i.detail))}};var vp=Object.freeze,ar=0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2fn,Rc=0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141n,hx=0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798n,ux=0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8n,wA=vp({p:ar,n:Rc,h:1n,a:0n,b:7n,Gx:hx,Gy:ux}),Li=32,nx=n=>n instanceof Uint8Array||ArrayBuffer.isView(n)&&n.constructor.name==="Uint8Array"&&n.BYTES_PER_ELEMENT===1,hi=(n,e,t="")=>{if(nx(n)&&(e===void 0||n.length===e))return n;let i=nx(n),s=e!==void 0?` of length ${e}`:"",r=i?`length=${n.length}`:`type=${typeof n}`,o=(t?`"${t}" `:"")+"expected Uint8Array"+s+", got "+r;throw i?new RangeError(o):new TypeError(o)},SA=n=>Uint8Array.from(n),TA=(n,e,t)=>SA(hi(n,t,e)),dx=(n,e)=>n.toString(16).padStart(e,"0"),fx=n=>{let e="";for(let t of hi(n))e+=dx(t,2);return e},px=n=>{let e="hex invalid";if(typeof n!="string")throw new TypeError(e);if(n.length%2||!/^[\da-f]*$/i.test(n))throw new RangeError(e);let t=new Uint8Array(n.length/2);for(let i=0,s=0;i<t.length;i++,s+=2){let r=n.charCodeAt(s),o=n.charCodeAt(s+1);t[i]=((r&15)+(r>>6)*9)*16+(o&15)+(o>>6)*9}return t},ix=()=>{let n=globalThis?.crypto?.subtle;if(n)return n;throw new Error("crypto.subtle must be defined, consider polyfill")},sa=(...n)=>{let e=0;for(let s of n)e+=hi(s).length;let t=new Uint8Array(e),i=0;for(let s of n)t.set(s,i),i+=s.length;return t},bp=(n=Li)=>{let e=globalThis?.crypto;if(typeof e?.getRandomValues!="function")throw new Error("crypto.getRandomValues must be defined, consider polyfill");return e.getRandomValues(new Uint8Array(n))},EA=BigInt,Cc=(n,e,t,i="bad number: out of range")=>{if(typeof n!="bigint")throw new TypeError(i);if(e<=n&&n<t)return n;throw new RangeError(i)},Oe=(n,e=ar)=>(n%=e)>=0n?n:e+n,Eu=n=>Oe(n,Rc),AA=(n,e)=>{if(n===0n)throw new Error("invert: expected non-zero number");if(e<=1n)throw new Error("invert: expected modulus > 1, got "+e);let t=Oe(n,e),i=e,s=0n,r=1n;for(;t!==0n;){let a=i/t,c=i-t*a,l=s-r*a;i=t,t=c,s=r,r=l}if(i!==1n)throw new Error("invert: does not exist");return Oe(s,e)},mx=n=>{let e=IA[n];if(typeof e!="function")throw new Error("hashes."+n+" not set");return e},sx=(n,e,t)=>hi(mx(n)(e,t),Li,"digest"),rx=async(n,e,t)=>hi(await mx(n)(e,t),Li,"digest");var gp=n=>{if(n instanceof cr)return n;throw new TypeError("Point expected")},yp="bad point: not on curve",gx=n=>Oe(Oe(n*n)*n+7n),ox=n=>Cc(n,0n,ar),Ec=n=>Cc(n,1n,ar),yx=n=>Cc(n,1n,Rc),Au=n=>!(n&1n),RA=n=>Uint8Array.of(Au(n)?2:3),xx=n=>{let e=gx(Ec(n)),t=1n;for(let i=e,s=(ar+1n)/4n;s>0n;s>>=1n)s&1n&&(t=t*i%ar),i=i*i%ar;if(Oe(t*t)!==e)throw new Error("sqrt invalid");return new cr(n,Au(t)?t:Oe(-t),1n)},cr=class n{static BASE;static ZERO;X;Y;Z;constructor(e,t,i){this.X=ox(e),this.Y=Ec(t),this.Z=ox(i),vp(this)}static CURVE(){return wA}static fromAffine(e){let{x:t,y:i}=e;return t===0n&&i===0n?Ac:new n(t,i,1n)}static fromBytes(e){hi(e);let t=e.length,i=e[0],s=Tu(e,1,33);try{if(t===33&&(i===2||i===3)){let r=xx(s);return i===3?r.negate():r}if(t===65&&i===4)return new n(s,Tu(e,33,65),1n).assertValidity()}catch{throw new Error(yp)}throw new Error(yp)}static fromHex(e){return n.fromBytes(px(e))}get x(){return this.toAffine().x}get y(){return this.toAffine().y}equals(e){let{X:t,Y:i,Z:s}=this,{X:r,Y:o,Z:a}=gp(e);return Oe(t*a)===Oe(r*s)&&Oe(i*a)===Oe(o*s)}is0(){return this.Z===0n}negate(){return new n(this.X,Oe(-this.Y),this.Z)}double(){return this.add(this)}add(e){let{X:t,Y:i,Z:s}=this,{X:r,Y:o,Z:a}=gp(e),c=0n,l=7n,h=0n,u=0n,d=0n,f=Oe(l*3n),g=Oe(t*r),x=Oe(i*o),m=Oe(s*a),p=Oe(t+i),y=Oe(r+o);p=Oe(p*y),y=Oe(g+x),p=Oe(p-y),y=Oe(t+s);let v=Oe(r+a);return y=Oe(y*v),v=Oe(g+m),y=Oe(y-v),v=Oe(i+s),h=Oe(o+a),v=Oe(v*h),h=Oe(x+m),v=Oe(v-h),d=Oe(c*y),h=Oe(f*m),d=Oe(h+d),h=Oe(x-d),d=Oe(x+d),u=Oe(h*d),x=Oe(g+g),x=Oe(x+g),m=Oe(c*m),y=Oe(f*y),x=Oe(x+m),m=Oe(g-m),m=Oe(c*m),y=Oe(y+m),g=Oe(x*y),u=Oe(u+g),g=Oe(v*y),h=Oe(p*h),h=Oe(h-g),g=Oe(p*x),d=Oe(v*d),d=Oe(d+g),new n(h,u,d)}subtract(e){return this.add(gp(e).negate())}multiply(e,t=!0){if(!t&&e===0n)return Ac;if(yx(e),e===1n)return this;if(this.equals(Wr))return BA(e).p;let i=Ac,s=Wr,r=this;for(let o=0;t?o<256:e>0n;o++)e&1n?i=i.add(r):t&&(s=s.add(r)),r=r.double(),e>>=1n;return i}multiplyUnsafe(e){return this.multiply(e,!1)}toAffine(){let{X:e,Y:t,Z:i}=this;if(i===0n)return{x:0n,y:0n};if(i===1n)return{x:e,y:t};let s=AA(i,ar);if(Oe(i*s)!==1n)throw new Error("inverse invalid");return{x:Oe(e*s),y:Oe(t*s)}}assertValidity(){let{x:e,y:t}=this.toAffine();if(Ec(e),Ec(t),Oe(t*t)!==gx(e))throw new Error(yp);return this}toBytes(e=!0){let{x:t,y:i}=this.assertValidity().toAffine(),s=As(t);return e?sa(RA(i),s):sa(Uint8Array.of(4),s,As(i))}toHex(e){return fx(this.toBytes(e))}},Wr=new cr(hx,ux,1n),Ac=new cr(0n,1n,0n);cr.BASE=Wr;cr.ZERO=Ac;var CA=(n,e,t)=>Wr.multiply(e,!1).add(n.multiply(t,!1)).assertValidity(),Xr=n=>EA("0x"+(fx(n)||"0")),Tu=(n,e,t)=>Xr(n.subarray(e,t)),As=n=>px(dx(Cc(n,0n,2n**256n),Li*2)),PA=n=>{let e=Xr(hi(n,Li,"secret key"));return Cc(e,1n,Rc,"invalid secret key: outside of range")};var ax="SHA-256",IA={hmacSha256Async:async(n,e)=>{let t=ix(),i=await t.importKey("raw",n,{name:"HMAC",hash:ax},!1,["sign"]);return new Uint8Array(await t.sign("HMAC",i,e))},hmacSha256:void 0,sha256Async:async n=>new Uint8Array(await ix().digest(ax,n)),sha256:void 0};var LA=n=>{if(n=n===void 0?bp(48):n,hi(n),n.length<48||n.length>1024)throw new RangeError("expected 48-1024b");let e=Oe(Xr(n),Rc-1n);return As(e+1n)},DA=n=>e=>{let t=LA(e);return{secretKey:t,publicKey:n(t)}};var _x=n=>Uint8Array.from("BIP0340/"+n,e=>e.charCodeAt(0)),xp=(n,...e)=>{let t=sx("sha256",_x(n));return sx("sha256",sa(t,t,...e))},_p=(n,...e)=>rx("sha256Async",_x(n)).then(t=>rx("sha256Async",sa(t,t,...e))),Mp=n=>{let e=PA(n),t=Wr.multiply(e),{x:i,y:s}=t.assertValidity().toAffine(),r=Au(s)?e:Eu(-e),o=As(i);return{d:r,px:o}},wp=n=>Eu(Xr(n)),vx=(...n)=>wp(xp("challenge",...n)),bx=async(...n)=>wp(await _p("challenge",...n)),Mx=n=>Mp(n).px,NA=DA(Mx),wx=(n,e,t)=>{let i=TA(n,"message"),{px:s,d:r}=Mp(e);return{m:i,px:s,d:r,a:hi(t,Li)}},Sx=n=>{let e=wp(n);if(e===0n)throw new Error("sign failed: k is zero");let{px:t,d:i}=Mp(As(e));return{rx:t,k:i}},Tx=(n,e,t,i)=>sa(e,As(Eu(n+t*i))),Ex="invalid signature produced",kA=(n,e,t=bp(Li))=>{let{m:i,px:s,d:r,a:o}=wx(n,e,t),a=As(r^Xr(xp("aux",o))),{rx:c,k:l}=Sx(xp("nonce",a,s,i)),h=Tx(l,c,vx(c,s,i),r);if(!Rx(h,i,s))throw new Error(Ex);return h},UA=async(n,e,t=bp(Li))=>{let{m:i,px:s,d:r,a:o}=wx(n,e,t),a=As(r^Xr(await _p("aux",o))),{rx:c,k:l}=Sx(await _p("nonce",a,s,i)),h=Tx(l,c,await bx(c,s,i),r);if(!await Cx(h,i,s))throw new Error(Ex);return h},OA=(n,e)=>n instanceof Promise?n.then(e):e(n),Ax=(n,e,t,i)=>{let s=hi(n,64,"signature"),r=hi(e,void 0,"message"),o=hi(t,Li,"publicKey"),a,c,l,h;try{let u=Xr(o);a=xx(u),c=Ec(Tu(s,0,Li)),l=yx(Tu(s,Li,64)),h=sa(As(c),o,r)}catch{return!1}return OA(i(h),u=>{try{let{x:d,y:f}=CA(a,l,Eu(-u)).toAffine();return!(!Au(f)||d!==c)}catch{return!1}})},Rx=(n,e,t)=>Ax(n,e,t,vx),Cx=async(n,e,t)=>Ax(n,e,t,bx),Sp=vp({keygen:NA,getPublicKey:Mx,sign:kA,verify:Rx,signAsync:UA,verifyAsync:Cx}),FA=()=>{let n=[],e=Wr,t=e;for(let i=0;i<33;i++){t=e,n.push(t);for(let s=1;s<128;s++)t=t.add(e),n.push(t);e=t.double()}return n},cx,lx=(n,e)=>{let t=e.negate();return n?t:e},BA=n=>{let e=cx||(cx=FA()),t=Ac,i=Wr;for(let s=0;s<33;s++){let r=Number(n&255n);n>>=8n,r>128&&(r-=256,n+=1n);let o=s*128,a=o+Math.abs(r)-1,c=s%2!==0,l=r<0;r===0?i=i.add(lx(c,e[o])):t=t.add(lx(l,e[a]))}if(n!==0n)throw new Error("invalid wnaf");return{p:t,f:i}};var{floor:Ep,min:zA,sin:HA}=Math,zt="Trystero",Ic=(n,e)=>Array(n).fill(void 0).map(e),GA="0123456789AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz",ti=n=>Ic(n,()=>GA[Ep(Math.random()*62)]??"").join(""),cn=ti(20),Yn=Promise.all.bind(Promise),Rp=typeof window<"u",{entries:ns,fromEntries:Cp,keys:Fn,values:ui}=Object,Yt=()=>{},Ru="candidate",Qe=n=>(n!==null&&clearTimeout(n),null),Ke=n=>new Error(`${zt}: ${n}`),Rs=(n,e)=>n instanceof Error&&n.message?n.message:typeof n=="string"&&n?n:ln(n??e),di=(n,e)=>n instanceof Error?n:Ke(Rs(n,e)),VA=new TextEncoder,WA=new TextDecoder,ni=n=>VA.encode(n),fi=n=>WA.decode(n),Cs=n=>n.reduce((e,t)=>e+t.toString(16).padStart(2,"0"),""),lr=(...n)=>n.join("@"),XA=(n,e)=>{let t=[...n],i=()=>{let r=HA(e++)*1e4;return r-Ep(r)},s=t.length;for(;s;){let r=Ep(i()*s--),o=t[s];t[s]=t[r],t[r]=o}return t},Pp=(n,e,t,i=!1)=>n.relayConfig?.urls||(i?XA(e,Cu(n.appId)):e).slice(0,n.relayConfig?.redundancy??t),ln=JSON.stringify,is=n=>{try{return JSON.parse(n)}catch{throw Ke(`failed to parse JSON: ${n}`)}},Cu=(n,e=Number.MAX_SAFE_INTEGER)=>n.split("").reduce((t,i)=>t+i.charCodeAt(0),0)%e,Px=3333,qA=6e4,Tp={},Pc=null,Ap=null,Ip=()=>{Pc||(Pc=new Promise(n=>{Ap=n}).finally(()=>{Ap=null,Pc=null}))},Lp=()=>{Ap?.()},Dp=(n,e,t)=>{let i={},s=!1,r=!1,o,a=Yt;i.isClosed=!1,i.ready=new Promise(l=>a=l);let c=()=>{if(i.isClosed)return;o=void 0,r=!1;let l=new WebSocket(n);l.onclose=()=>{if(i.isClosed||r)return;if(r=!0,Pc){Pc.then(c);return}let h=Tp[n]??=Px;o=setTimeout(c,Math.random()*h),Tp[n]=zA(h*2,qA)},l.onmessage=h=>e(String(h.data)),i.socket=l,i.url=l.url,l.onopen=()=>{let h=s;s=!0,a(i),Tp[n]=Px,h&&t?.()},i.send=h=>{l.readyState===1&&l.send(h)}};return i.close=()=>{i.isClosed=!0,o!==void 0&&(clearTimeout(o),o=void 0),i.socket.close()},c(),i};var Np=n=>{let e={},t=new WeakMap,i=o=>{let a=t.get(o);if(!a)throw Ke("relay bookkeeping missing registration for relay client");return a},s=()=>{let o={},a=c=>o[c]??={};return{forKey:a,forRelay:c=>a(i(c))}},r=(o,a)=>(e[o]=a,t.set(a,o),a);return{register:(o,a)=>{let c=e[o];return c||r(o,a())},keyOf:i,scoped:s,getSockets:()=>Cp(ns(e).flatMap(([o,a])=>{let c=n(a);return c?[[o,c]]:[]}))}},Ix=()=>{if(Rp){let n=new AbortController;return addEventListener("online",Lp,{signal:n.signal}),addEventListener("offline",Ip,{signal:n.signal}),()=>n.abort()}return Yt};var kp="AES-GCM",YA={},$A=n=>btoa(String.fromCharCode.apply(null,Array.from(new Uint8Array(n)))),jA=n=>{let e=atob(n);return new Uint8Array(e.length).map((t,i)=>e.charCodeAt(i)).buffer},qr=async(n,e)=>new Uint8Array(await crypto.subtle.digest(n,ni(e))),Ps=async n=>YA[n]??=Array.from(await qr("SHA-1",n)).map(e=>e.toString(36)).join(""),Lx=async(n,e,t)=>crypto.subtle.importKey("raw",await crypto.subtle.digest({name:"SHA-256"},ni(`${n}:${e}:${t}`)),{name:kp},!1,["encrypt","decrypt"]),Dx=async(n,e)=>Cs(await qr("SHA-256",`${zt}:${n}:${e}`)),Nx="$",kx=",",Ux=async(n,e)=>{let t=crypto.getRandomValues(new Uint8Array(16));return t.join(kx)+Nx+$A(await crypto.subtle.encrypt({name:kp,iv:t},await n,ni(e)))},Ox=async(n,e)=>{let[t,i]=e.split(Nx);return fi(await crypto.subtle.decrypt({name:kp,iv:new Uint8Array(t?.split(kx).map(Number)??[])},await n,jA(i??"")))};var KA=18e4,Fx=class{makeOffer;leased=new Map;destroyed=!1;constructor(n){this.makeOffer=n}claimLeased(n){let e=this.leased.get(n);e&&(Qe(e),this.leased.delete(n))}reclaimLeased(n){this.leased.has(n)&&(this.claimLeased(n),n.destroy())}checkout(n,e,t){let i=async(s=!1)=>{if(this.destroyed)throw Ke("room left while preparing offer");let r=this.makeOffer();try{let o=await t(r);if(this.destroyed)throw Ke("room left while preparing offer");return e?(this.leased.set(r,setTimeout(()=>{this.leased.delete(r),r.destroy()},KA)),{peer:r,offer:o,claim:()=>this.claimLeased(r),reclaim:()=>this.reclaimLeased(r)}):{peer:r,offer:o}}catch(o){if(r.destroy(),!s&&!this.destroyed)return i(!0);throw o}};return Yn(Ic(n,()=>i()))}getOffers(n,e){return this.checkout(n,!0,e)}destroy(){this.destroyed=!0,this.leased.forEach((n,e)=>{Qe(n),e.destroy()}),this.leased.clear()}};var Up=Ke("incorrect password for overlapping room"),Bx=(n,e,t)=>{let i=o=>qr("SHA-256",`${o}:${n}:${e}:${t}`).then(Cs),s=async(o,a,c)=>{if(!n)return;if(c){let h=ti(36);await o({__trystero_pw:"challenge",c:h});let{data:u}=await a();if(!u||typeof u!="object"||u.__trystero_pw!=="response"||typeof u.h!="string")throw Up;let d=await i(h);if(u.h!==d)throw Up;return}let{data:l}=await a();if(!l||typeof l!="object"||l.__trystero_pw!=="challenge"||typeof l.c!="string")throw Up;await o({__trystero_pw:"response",h:await i(l.c)})};return{run:s,compose:o=>n||o?async(a,c,l,h)=>{await s(c,l,h),await o?.(a,c,l,h)}:void 0}},ZA=n=>{let e=Rs(n,"unknown error");return e.startsWith("handshake ")?e:`handshake failed: ${e}`},zx=({onPeerHandshake:n,onHandshakeError:e,handshakeTimeoutMs:t,sendHandshakeData:i,sendHandshakeReady:s,onActivate:r,onFailure:o})=>{let a={},c=(u,d)=>{let f=a[u];!f||d&&f.peer!==d||f.isActive||!f.didLocalHandshakePass||!f.didReceiveRemoteReady||(f.isActive=!0,f.handshakeTimer=Qe(f.handshakeTimer),r(u,f.peer))},l=(u,d,f)=>{let g=a[u];if(!g||g.peer!==d)return;let x=ZA(f);e?.(u,x),o(u,d,Ke(x))},h=(u,d)=>{let f=a[u];!f||f.peer!==d||f.isActive||(f.didLocalHandshakePass=!0,s("",u).catch(g=>l(u,d,Ke(`failed sending handshake readiness: ${Rs(g,"unknown send failure")}`))),c(u,d))};return{addPeer:(u,d)=>{a[u]={peer:d,isActive:!1,didLocalHandshakePass:!1,didReceiveRemoteReady:!1,handshakeTimer:null,pendingHandshakePayloads:[],handshakeWaiters:[]}},clearPeer:(u,d)=>{let f=a[u];f&&(f.handshakeTimer=Qe(f.handshakeTimer),f.pendingHandshakePayloads.length=0,f.handshakeWaiters.splice(0).forEach(g=>g.reject(d)),delete a[u])},canReceiveFromPeer:(u,d)=>{let f=a[u];return!!(f&&(f.isActive||d))},start:(u,d)=>{let f=a[u];if(!f||f.peer!==d)return;f.handshakeTimer=setTimeout(()=>l(u,d,Ke(`handshake timed out after ${t}ms`)),t);let g=async(p,y)=>{await i(p,u,y)},x=()=>new Promise((p,y)=>{let v=a[u];if(!v||v.peer!==d){y(Ke("peer disconnected during handshake"));return}let _=v.pendingHandshakePayloads.shift();if(_){p(_);return}v.handshakeWaiters.push({resolve:p,reject:w=>y(w)})}),m=cn<u;Promise.resolve(n?.(u,g,x,m)).then(()=>h(u,d)).catch(p=>l(u,d,di(p,"handshake failed")))},receiveHandshakeData:(u,d,f)=>{let g=a[d];if(!g||g.isActive)return;let x=f===void 0?{data:u}:{data:u,metadata:f},m=g.handshakeWaiters.shift();if(m){m.resolve(x);return}if(g.pendingHandshakePayloads.length>=16){l(d,g.peer,Ke("too many pending handshake messages"));return}g.pendingHandshakePayloads.push(x)},receiveHandshakeReady:u=>{let d=a[u];!d||d.isActive||(d.didReceiveRemoteReady=!0,c(u))}}};var JA=15e3,QA=150,e2=5e3,Hx="icecandidate",Gx="icegatheringstatechange",t2="iceconnectionstatechange",Lc="offer",n2="answer",i2=/out of range/i,s2=128,r2=8192,Vx=n=>n.replace(/ (\S+\.local) (\d+) typ host/g," 127.0.0.1 $2 typ host"),Op=(n,{trickleIce:e,rtcConfig:t,rtcPolyfill:i,turnConfig:s,_test_only_mdnsHostFallbackToLoopback:r})=>{let o=new(i??RTCPeerConnection)({iceServers:Wx.concat(s??[]),...t}),a={},c=new Set,l=[],h=[],u=null,d=e!==!1,f=[],g=[],x,m=!1,p=!1,y=null,v=null,_=!1,w=G=>{x&&(x(G),x=void 0)},M=()=>v=Qe(v),R=()=>{_||(_=!0,c.forEach(G=>G()),u=Qe(u),h.length=0,M(),a.close?.())},b=G=>{G.type===Lc&&(w(G),!a.signal&&!o.remoteDescription)||(a.signal?a.signal(G):l.push(G))},T=G=>{let re=a.signal;a.signal=Ue=>{re?.(Ue),G(Ue)},l.length>0&&l.splice(0).forEach(Ue=>a.signal?.(Ue))},P=G=>r?Vx(G):G,U=G=>{if(!r||typeof G.candidate!="string")return G;let re=Vx(G.candidate);return re===G.candidate?G:{...G,candidate:re}},O=G=>({type:G.localDescription?.type??Lc,sdp:P(G.localDescription?.sdp??"")}),E=()=>{let G=o.remoteDescription?.sdp;return G?G.match(/a=ice-ufrag:([^\s]+)/)?.[1]??null:null},C=()=>(o.remoteDescription?.sdp?.match(/^m=/gm)??[]).length,D=G=>{if(!o.remoteDescription)return!1;let re=C();if(typeof G.sdpMLineIndex=="number"&&re>0&&G.sdpMLineIndex>=re)return!1;let Ue=E();return!(Ue&&G.usernameFragment&&G.usernameFragment!==Ue)},F=async G=>{try{return await o.addIceCandidate(G),!0}catch(re){if(re instanceof Error&&i2.test(re.message)&&typeof G.sdpMLineIndex=="number")return!1;throw re}},V=G=>{f.length>=s2&&f.shift(),f.push(G)},X=async()=>{if(!o.remoteDescription||f.length===0)return;let G=E(),re=f.splice(0),Ue=[];for(let Te of re)if(!(G&&Te.usernameFragment&&Te.usernameFragment!==G)){if(!D(Te)){Ue.push(Te);continue}await F(Te)||Ue.push(Te)}Ue.forEach(V)},N=async G=>{if(D(G)){await F(G)||V(G);return}V(G)},k=G=>{G.binaryType="arraybuffer",G.bufferedAmountLowThreshold=65535;let re=()=>{console.warn(`${zt}: invalid or excessive data before handler registration; disconnecting peer`),G.close(),o.close(),R()};G.onmessage=Ue=>{let Te=Ue.data;if(!_){if(!(Te instanceof ArrayBuffer)&&!ArrayBuffer.isView(Te)||Te.byteLength>16515){re();return}if(a.data)a.data(Te);else{if(h.length>=64){re();return}u||(u=setTimeout(re,1e4)),h.push(Te)}}},G.onopen=()=>a.connect?.(),G.onclose=R,G.onerror=({error:Ue})=>{_||Ue?.errorDetail==="sctp-failure"&&(Ue.sctpCauseCode===12||/^User-Initiated Abort\b/.test(Ue.message))||a.error?.(di(Ue,"data channel error"))}},q=t?.iceServers??Wx.concat(s??[]),le=G=>q.some(({urls:re})=>(Array.isArray(re)?re:[re]).some(Ue=>G.test(Ue))),ue=le(/^turns?:/i),Ae=!ue&&le(/^stuns?:/i),We=ue?/\btyp relay\b/:Ae?/\btyp (?:srflx|relay|prflx)\b/:/\btyp (?:host|srflx|relay|prflx)\b/,qe=async G=>(await new Promise(re=>{let Ue=null,Te=null,Xe=()=>{Qe(Ue),Qe(Te),G.removeEventListener(Gx,et),G.removeEventListener(Hx,_t),c.delete(Xe),re()},gt=(Ze="")=>{let ft=`${G.localDescription?.sdp??""}
${Ze}`;We.test(ft)&&(Qe(Te),Te=setTimeout(Xe,QA))},et=()=>{G.iceGatheringState==="complete"||_?Xe():gt()},_t=Ze=>{let{candidate:ft}=Ze;ft?gt(ft.candidate):Xe()};c.add(Xe),Ue=setTimeout(Xe,JA),G.addEventListener(Gx,et),G.addEventListener(Hx,_t),et()}),O(G)),J=async()=>{let G=d?O(o):await qe(o);return _||b(G),G};n?(y=o.createDataChannel("data"),k(y)):o.ondatachannel=({channel:G})=>{y=G,k(G)};let ne=async(G=!1)=>{if(o.connectionState==="closed"||!G&&(m||o.signalingState!=="stable")){o.connectionState==="closed"&&w();return}try{return m=!0,G&&(o.remoteDescription&&o.signalingState!=="stable"&&o.signalingState!=="closed"&&o.localDescription?.type===Lc&&await o.setLocalDescription({type:"rollback"}),typeof o.restartIce=="function"&&o.restartIce()),await o.setLocalDescription(G?await o.createOffer({iceRestart:!0}):void 0),await J()}catch(re){G||w(),a.error?.(di(re,"failed to create local offer"))}finally{m=!1}};o.onnegotiationneeded=async()=>ne(!1),o.onicecandidate=({candidate:G})=>{if(!d||!G)return;let re=U(typeof G.toJSON=="function"?G.toJSON():{candidate:G.candidate,sdpMid:G.sdpMid,sdpMLineIndex:G.sdpMLineIndex,usernameFragment:G.usernameFragment});b({type:Ru,sdp:JSON.stringify(re)})};let be=()=>{if(o.connectionState==="failed"||o.connectionState==="closed"||o.iceConnectionState==="failed"||o.iceConnectionState==="closed"){R();return}if(o.connectionState==="connected"||o.connectionState==="connecting"||o.iceConnectionState==="connected"||o.iceConnectionState==="completed"||o.iceConnectionState==="checking"){M();return}if(o.connectionState==="disconnected"||o.iceConnectionState==="disconnected"){v||(v=setTimeout(()=>{v=null,(o.connectionState==="disconnected"||o.iceConnectionState==="disconnected")&&R()},e2));return}};o.onconnectionstatechange=be,o.addEventListener(t2,be),o.ontrack=G=>{let re=G.streams[0];if(re){if(!a.track&&!a.stream){g.push({track:G.track,stream:re});return}a.track?.(G.track,re),a.stream?.(re)}};let Fe=n?new Promise(G=>{x=G}):Promise.resolve();return n&&queueMicrotask(()=>{!m&&o.signalingState==="stable"&&!o.localDescription&&o.connectionState!=="closed"&&o.onnegotiationneeded?.(new Event("negotiationneeded"))}),{connection:o,get channel(){return y},get isDead(){return o.connectionState==="closed"},getOffer:async(G=!1)=>{if(n)return G?ne(!0):x?Fe:o.localDescription?.type===Lc?d?O(o):qe(o):Fe},async signal(G){if(G.type==="candidate"){if(G.sdp.length>r2)return;try{let re=JSON.parse(G.sdp);re&&typeof re=="object"&&await N(U(re))}catch(re){a.error?.(di(re,"failed to parse remote candidate"))}return}if(!(y?.readyState==="open"&&!G.sdp?.includes("a=rtpmap")))try{let re={...G,sdp:P(G.sdp)};if(G.type===Lc){let Ue=m||o.signalingState!=="stable"&&!p;return Ue&&n?void 0:(Ue&&o.signalingState!=="stable"?await Yn([o.setLocalDescription({type:"rollback"}),o.setRemoteDescription(re)]):await o.setRemoteDescription(re),await X(),await o.setLocalDescription(),await J())}if(G.type===n2){p=!0;try{await o.setRemoteDescription(re),await X()}finally{p=!1}}}catch(re){a.error?.(di(re,"failed to apply remote signal"))}},sendData:G=>y?.send(G),destroy:()=>{M(),w(),y?.close(),o.close(),m=!1,p=!1,R()},setHandlers:G=>{let{signal:re,...Ue}=G;Object.assign(a,Ue),a.data&&h.length>0&&(u=Qe(u),h.splice(0).forEach(Te=>a.data?.(Te))),re&&T(re),(a.track||a.stream)&&g.length>0&&g.splice(0).forEach(({track:Te,stream:Xe})=>{a.track?.(Te,Xe),a.stream?.(Xe)})},addStream:G=>G.getTracks().forEach(re=>o.addTrack(re,G)),removeStream:G=>o.getSenders().filter(re=>re.track&&G.getTracks().includes(re.track)).forEach(re=>o.removeTrack(re)),addTrack:(G,re)=>o.addTrack(G,re),removeTrack:G=>{let re=o.getSenders().find(Ue=>Ue.track===G);re&&o.removeTrack(re)},replaceTrack:(G,re)=>{let Ue=o.getSenders().find(Te=>Te.track===G);if(Ue)return Ue.replaceTrack(re)}}},Wx=[...Ic(3,(n,e)=>`stun:stun${e||""}.l.google.com:19302`),"stun:stun.cloudflare.com:3478"].map(n=>({urls:n}));var o2=1024,a2=64,c2=128,l2=8,h2=new Uint8Array,u2=(n,e)=>{let t;try{t=n()}catch{return e(!1)}return typeof t=="boolean"?e(t):Promise.resolve(t).then(i=>e(i===!0),()=>e(!1))},Xx=(n,e,t)=>e===2?t?n.slice():n:e===1?is(fi(n)):fi(n),Yx=(n,e,t,i)=>{try{n.progress(e,t,i)}catch(s){console.error(`${zt} progress handler error:`,s)}},qx=(n,e,t,i)=>{Yx(n,1,t,i);try{n.receiver?.(e,t,i)}catch(s){console.error(`${zt} action handler error:`,s)}},$x=({fail:n,accept:e,refuse:t,maxReceiveBytes:i,chunkSize:s})=>{let r=new Map,o=new Map,a=new Set,c=new Map,l=0,h=0,u=0,d=!1,f=!1,g=E=>E.phase!=="released",x=E=>Math.min(i,E?.maxPayloadBytes??i),m=(E,C,D,F)=>{D?.reject(C),r.get(E.type)?.reject?.(E.peerId,E.metadata,C),F!==void 0&&t(E.peerId,F,C)},p=E=>{for(let C of Array.from(a))C.peerId===E&&(a.delete(C),a.add(C))},y=E=>{if(!g(E))return;E.phase="released",E.removeAbortListener?.(),E.timer=Qe(E.timer);let C=o.get(E.peerId);if(E.kind==="inline"){let D=C.inline.get(E.key);D.splice(D.indexOf(E),1),D.length||C.inline.delete(E.key),E.data=h2}else C.bulk.delete(E.id),a.delete(E),E.data=null,E.transfer==="receiving"&&(u-=E.size,C.active===E&&(C.active=null,p(E.peerId)),f=!0);C.count--,l--,C.count||o.delete(E.peerId),E.controller?.abort()},v=(E,C)=>{g(E)&&(y(E),m(E,C,E.scope,E.kind==="bulk"?E.id:void 0))},_=(E,C)=>{if(E.phase!=="pending")return E.phase==="ready";if(E.size>x(C))return v(E,"payload exceeds receiver size limit"),!1;let D=E.scope?E.scope.receive:C.receive;if(!D)return C.receiver?(E.phase="ready",!0):!1;if(h>=c2||(c.get(E.peerId)??0)>=l2)return v(E,"too many pending receive decisions"),!1;E.phase="deciding";let F=new AbortController;E.controller=F,h++,c.set(E.peerId,(c.get(E.peerId)??0)+1);let V=u2(()=>D({byteLength:E.size,peerId:E.peerId,signal:F.signal,...E.metadata===void 0?{}:{metadata:E.metadata}}),X=>{h--;let N=c.get(E.peerId)-1;return N?c.set(E.peerId,N):c.delete(E.peerId),g(E)?(X?E.phase="ready":v(E,"payload rejected by receiver"),X):!1});return typeof V=="boolean"?V:(V.then(()=>T()),!1)},w=(E,C,D)=>{let F;try{F=Xx(D,E.format,E.kind==="inline")}catch{y(E),n(E.peerId,"invalid action payload");return}y(E),qx(C,F,E.peerId,E.metadata)},M=E=>{let C=r.get(E.type);g(E)&&C&&_(E,C)&&C.receiver&&w(E,C,E.data)},R=E=>{let C=r.get(E.type);if(!g(E)||!C||!_(E,C)||!C.receiver)return;if(E.transfer==="receiving"){E.offset===E.size&&w(E,C,E.data);return}let D=o.get(E.peerId);!D.active&&u+E.size<=i&&(D.active=E,E.transfer="receiving",u+=E.size,E.lastSeen=Date.now(),a.delete(E),e(E.peerId,E.id))},b=(E,C)=>{let D=o.get(E)?.inline.get(C);for(;D?.[0];){let F=D[0];if(M(F),g(F))break}},T=()=>{if(d){f=!0;return}d=!0;try{do{f=!1;for(let E of a)R(E);for(let[E,C]of o){for(let D of C.bulk.values())D.offset===D.size&&R(D);for(let D of C.inline.keys())b(E,D)}}while(f)}finally{d=!1}},P=E=>{let C=o.get(E.peerId);if(l>=o2||(C?.count??0)>=a2)return m(E,"too many pending transfers",E.scope,E.kind==="bulk"?E.id:void 0),!1;if(C||(C={bulk:new Map,inline:new Map,active:null,count:0},o.set(E.peerId,C)),C.count++,l++,E.kind==="inline"){let F=C.inline.get(E.key)??[];F.push(E),C.inline.set(E.key,F)}else C.bulk.set(E.id,E),a.add(E);let D=()=>{let F=12e4-(Date.now()-E.lastSeen);F>0?E.timer=setTimeout(D,F):(v(E,"action transfer timed out"),T())};if(E.timer=setTimeout(D,12e4),E.scope){let{signal:F}=E.scope,V=()=>{v(E,"receive cancelled"),T()};if(F.addEventListener("abort",V,{once:!0}),E.removeAbortListener=()=>F.removeEventListener("abort",V),F.aborted)return V(),!1}return!0},U=(E,C)=>{let D=r.get(E.type),F=D?.receiveScope?.(E.peerId,E.metadata);return F===null||F?.signal.aborted?(C!==void 0&&t(E.peerId,C,"unexpected response"),null):E.size>x(D)?(m(E,"payload exceeds receiver size limit",F,C),null):{action:D,scope:F}},O=(E,C)=>({...E,...C?{scope:C}:{},phase:"pending",controller:null,lastSeen:Date.now(),timer:null});return{register:(E,C={})=>{let D={...C,receiver:null,receive:null,reject:null,progress:Yt};return r.set(E,D),{onMessage:F=>{D.receiver=F,T()},onReceive:F=>{D.receive=F,T()},onReject:F=>{D.reject=F},onProgress:F=>{D.progress=F}}},receiveInline:(E,C)=>{let D=U(E);if(!D)return;let{action:F,scope:V}=D,X=V?`${E.type}\0${V.key}`:E.type;if(F?.receiver&&!(V?V.receive:F.receive)&&!o.get(E.peerId)?.inline.has(X)){let k;try{k=Xx(C,E.format,!0)}catch{n(E.peerId,"invalid action payload");return}qx(F,k,E.peerId,E.metadata);return}let N={...O(E,V),kind:"inline",key:X,data:C};P(N)&&b(E.peerId,X)},receiveOffer:(E,C)=>{if(o.get(E.peerId)?.bulk.has(C)){n(E.peerId,"duplicate action offer");return}let D=U(E,C);if(!D)return;let F={...O(E,D.scope),kind:"bulk",id:C,transfer:"waiting",offset:0,data:null};P(F)&&T()},receiveChunk:(E,C,D,F)=>{let V=o.get(E),X=V?.bulk.get(C);if(!X)return;if(X.transfer!=="receiving"||D!==X.offset||!F.length||F.length!==Math.min(s,X.size-X.offset)){n(E,"invalid action chunk offset or length");return}try{X.data??=new Uint8Array(X.size)}catch{v(X,"unable to allocate receive buffer"),T();return}X.data.set(F,X.offset),X.offset+=F.length;let N=Date.now();X.lastSeen=N;for(let k of a)k.phase==="ready"&&r.get(k.type)?.receiver&&(k.lastSeen=N);X.offset===X.size?(R(X),g(X)&&V?.active===X&&(V.active=null,p(E)),T()):Yx(r.get(X.type),X.offset/X.size,E,X.metadata)},cancel:(E,C)=>{let D=o.get(E)?.bulk.get(C);D&&(y(D),D.scope?.reject("response cancelled by sender")),T()},clearPeer:E=>{let C=o.get(E);if(C){for(let D of C.bulk.values())y(D);for(let D of C.inline.values()){let F=[...D];for(let V of F)y(V)}}T()}}};var Gp=2,Iu=0,Lu=1,jx=2,Fp=3,Bp=4,Du=5,zp=36,Kx=48,hr=6,Nc=14,Hp=16384-Nc,d2=256*1024**2,Zx=1024**2,Jx="bufferedamountlow",Qx="close",e_="error",f2=1e4,Is=(n,e)=>{let t=Ke(e);return t.kind=n,t.name=n==="aborted"?"AbortError":t.name,t},Nu=n=>{if(n?.aborted)throw Is("aborted","operation aborted")},t_=(n,e,t=hr)=>{let i=new Uint8Array(t);return i[0]=Gp,i[1]=n,new DataView(i.buffer).setUint32(2,e),i},ra=Is,p2=(n,e,t=f2)=>n.readyState!=="open"||n.bufferedAmount<=n.bufferedAmountLowThreshold?Promise.resolve(n.readyState==="open"):new Promise(i=>{let s=!1,r=null,o=l=>{s||(s=!0,n.removeEventListener(Jx,a),n.removeEventListener(Qx,c),n.removeEventListener(e_,c),e?.removeEventListener("abort",c),Qe(r),i(l))},a=()=>o(!0),c=()=>o(!1);if(n.addEventListener(Jx,a),n.addEventListener(Qx,c),n.addEventListener(e_,c),e?.addEventListener("abort",c,{once:!0}),r=setTimeout(()=>o(!1),t),n.readyState!=="open"||e?.aborted){o(!1);return}n.bufferedAmount<=n.bufferedAmountLowThreshold&&o(!0)}),i_=({getPeer:n,getPeerIds:e,canReceiveFromPeer:t,onPeerError:i,throwIfAborted:s=Nu,maxReceiveBytes:r=d2})=>{if(!Number.isSafeInteger(r)||r<=0)throw Ke("maxReceiveBytes must be a positive safe integer");let o=new Map,a=new Map,c=new WeakSet,l=0,h=$x({fail:(m,p)=>d(m,p),accept:(m,p)=>f(m,p,Fp),refuse:(m,p,y)=>f(m,p,Bp,y),maxReceiveBytes:r,chunkSize:Hp}),u=m=>{for(let p of a.get(m)?.values()??[])p.fail(ra("disconnected","peer disconnected"));a.delete(m),h.clearPeer(m)},d=(m,p)=>{let y=n(m,!0);y&&!c.has(y)&&(c.add(y),console.warn(`${zt}: ${p}; disconnecting peer ${m}`),i(m,Ke(p)))},f=(m,p,y,v="")=>{let _=n(m,!0);if(!_)return;let w=ni(v).subarray(0,200),M=t_(y,p,hr+w.length);M.set(w,hr);try{if((_.channel?.bufferedAmount??0)>Zx)throw Ke("control send buffer is full");_.sendData(M)}catch{d(m,"unable to send action control")}};return{makeInternalAction:(m,p={})=>{let y={sendToPending:!!p.sendToPending,receiveWhilePending:!!p.receiveWhilePending,...p.maxPayloadBytes===void 0?{}:{maxPayloadBytes:p.maxPayloadBytes},...p.receiveScope?{receiveScope:p.receiveScope}:{}},v=o.get(m);if(v){if(v.options.sendToPending!==y.sendToPending||v.options.receiveWhilePending!==y.receiveWhilePending||v.options.receiveScope!==y.receiveScope||v.options.maxPayloadBytes!==y.maxPayloadBytes)throw Ke(`action type "${m}" cannot be redefined`);return v.action}let _=ni(m);if(!m||m.includes("\0")||_.length>32)throw Ke("action type must contain 1\u201332 UTF-8 bytes and no null characters");let w={options:y,action:{...h.register(m,y),send:async(M,R,b,T,P)=>{if(s(P),M===void 0)throw Ke("action data cannot be undefined");let U=M instanceof Blob,O=U||M instanceof ArrayBuffer||ArrayBuffer.isView(M),E=O?2:typeof M=="string"?0:1,C=U?M:M instanceof ArrayBuffer?new Uint8Array(M):ArrayBuffer.isView(M)?new Uint8Array(M.buffer,M.byteOffset,M.byteLength):ni(E===0?M:ln(M)),D=C instanceof Blob?C.size:C.byteLength,F=b===void 0?new Uint8Array:ni(ln(b));if(F.length>16336)throw Ke("action metadata is too large");let V=zp+F.length+D<=16384;!V&&O&&!(C instanceof Blob)&&(C=C.slice());let X=V?0:l++>>>0,N=V?zp:Kx,k=new Uint8Array(N+F.length+(V?D:0));k[0]=Gp,k[1]=(V?Iu:Lu)|E<<4,k.set(_,2);let q=new DataView(k.buffer);q.setUint16(34,F.length),V||(q.setUint32(36,X),q.setFloat64(40,D)),k.set(F,N),V&&k.set(C instanceof Blob?new Uint8Array(await C.arrayBuffer()):C,N+F.length);let le=R?Array.isArray(R)?R:[R]:e(y.sendToPending);await Yn([...new Set(le)].map(async ue=>{let Ae=n(ue,y.sendToPending);if(!Ae){console.warn(`${zt}: no peer with id ${ue} found`);return}let We=null,qe=()=>{if(We)throw We;if(s(P),n(ue,y.sendToPending)!==Ae||Ae.channel?.readyState==="closed")throw ra("disconnected","peer disconnected")},J=async Ze=>{qe();let ft=Ae.channel;if(ft&&(ft.readyState!=="open"||ft.bufferedAmount>ft.bufferedAmountLowThreshold)){if(!await p2(ft,P))throw s(P),ra("disconnected","data channel stopped draining");qe()}try{Ae.sendData(Ze)}catch{throw ra("disconnected","peer disconnected")}};if(V){await J(k),T?.(1,ue,b);return}let ne=!1,be=!1,Fe=Date.now(),G,re,Ue=new Promise((Ze,ft)=>{G=Ze,re=ft});Ue.catch(Yt);let Te=a.get(ue)??new Map;if(Te.has(X))throw Ke("action transmission id is still in use");a.set(ue,Te);let Xe=null,gt={accept:()=>!Xe||We?!1:(Xe=Qe(Xe),G(),!0),fail:(Ze,ft=!1)=>{ft&&(be=!0),We=Ze,re(Ze)},touch:()=>{Xe&&(Fe=Date.now())}};Te.set(X,gt);let et=()=>{let Ze=12e4-(Date.now()-Fe);Ze>0?Xe=setTimeout(et,Ze):gt.fail(ra("timeout","action offer timed out"))};Xe=setTimeout(et,12e4);let _t=()=>{try{s(P)}catch(Ze){gt.fail(Ze)}};P?.addEventListener("abort",_t,{once:!0});try{await J(k),ne=!0,await Ue;for(let Ze=0;Ze<D;Ze+=Hp){qe();let ft=Math.min(Hp,D-Ze),vt=t_(jx,X,Nc+ft);new DataView(vt.buffer).setFloat64(hr,Ze),vt.set(C instanceof Blob?new Uint8Array(await C.slice(Ze,Ze+ft).arrayBuffer()):C.subarray(Ze,Ze+ft),Nc),await J(vt);for(let Ge of Te.values())Ge.touch();T?.((Ze+ft)/D,ue,b)}qe()}catch(Ze){throw ne&&!be&&n(ue,!0)===Ae&&(!Ae.channel||Ae.channel.readyState==="open"&&(Ae.channel.bufferedAmount??0)<=Zx)&&f(ue,X,Du),Ze}finally{Xe=Qe(Xe),P?.removeEventListener("abort",_t),Te.delete(X),!Te.size&&a.get(ue)===Te&&a.delete(ue)}}))}}};return o.set(m,w),w.action},handleData:(m,p)=>{if(p.byteLength<2||p.byteLength>16384){d(m,"invalid action frame");return}let y=new Uint8Array(p);if(y[0]!==Gp){d(m,"incompatible action protocol version");return}let v=y[1]&15,_=y[1]>>>4,w=new DataView(y.buffer,y.byteOffset,y.byteLength);if(v>Du||_>2||v>Lu&&_!==0){d(m,"invalid action frame");return}if(v>=jx){if(y.length<hr||(v===Fp||v===Du)&&y.length!==hr||v===Bp&&y.length>206){d(m,"invalid action control");return}let D=w.getUint32(2);if(v===Fp){let F=a.get(m);if(F?.get(D)?.accept())for(let V of F.values())V.touch();return}if(v===Bp){a.get(m)?.get(D)?.fail(ra("rejected",fi(y.subarray(hr))),!0);return}v===Du?h.cancel(m,D):h.receiveChunk(m,D,y.length>=Nc?w.getFloat64(hr):NaN,y.subarray(Nc));return}let M=v===Iu?zp:Kx;if(y.length<M){d(m,"invalid action header");return}let R=fi(y.subarray(2,34)).replaceAll("\0",""),b=o.get(R);if(!t(m,!!b?.options.receiveWhilePending))return;let T=w.getUint16(34),P=M+T,U=v===Iu?y.length-P:w.getFloat64(40),O=v===Lu?w.getUint32(36):0;if(!R||P>y.length||!Number.isSafeInteger(U)||U<0||v===Lu&&(U===0||P!==y.length)){d(m,"invalid action proposal");return}let E;try{T&&(E=is(fi(y.subarray(M,P))))}catch{d(m,"invalid action metadata");return}let C={peerId:m,type:R,format:_,size:U,...E===void 0?{}:{metadata:E}};v===Iu?h.receiveInline(C,y.subarray(P)):h.receiveOffer(C,O)},clearPeer:u}};var s_=n=>n&&typeof n=="object"&&!Array.isArray(n)&&typeof n.r=="string"?n:null,ku=n=>{let e=s_(n);return e?{r:e.r,...Object.hasOwn(e,"m")?{m:e.m}:{}}:null},Vp=n=>{let e=s_(n);return e?{r:e.r,...typeof e.e=="string"?{e:e.e}:{}}:null},kc=(n,e)=>e===void 0?n:{...n,metadata:e},r_=({getPeer:n,getPeerIds:e,canReceiveFromPeer:t,onPeerError:i,maxReceiveBytes:s})=>{let r=Object.create(null),o={},a=new Map,c=i_({getPeer:n,getPeerIds:e,canReceiveFromPeer:t,onPeerError:i,...s===void 0?{}:{maxReceiveBytes:s}}),l=c.makeInternalAction,h=c.handleData,u=m=>{let p=o[m];p&&(Qe(p.timer),p.signal&&p.abortHandler&&p.signal.removeEventListener("abort",p.abortHandler),delete o[m],p.controller.abort())},d=(m,p)=>{ns(o).forEach(([y,v])=>{v.peerId===m&&(u(y),v.reject(p))})},f=(m,p)=>{c.clearPeer(m);let y=a.get(m);y&&(a.delete(m),y.forEach(v=>v.abort())),d(m,Is("disconnected",Rs(p,"peer disconnected")))},g=l("@_response",{receiveScope:(m,p)=>{let y=Vp(p),v=y&&o[y.r];if(!y||!v||v.peerId!==m)return null;let _=y.e===void 0?v.getReceive():null;return{key:y.r,signal:v.controller.signal,receive:_?w=>_({byteLength:w.byteLength,peerId:w.peerId,kind:"response",signal:w.signal}):null,reject:w=>{o[y.r]===v&&(u(y.r),v.reject(Is("rejected",w)))}}}});return g.onProgress((m,p,y)=>{let v=Vp(y),_=v&&o[v.r];_&&_.peerId===p&&v?.e===void 0&&_.getReceiveProgress()?.(m,{peerId:p})}),g.onMessage((m,p,y)=>{let v=Vp(y);if(!v)return;let _=o[v.r];if(!(!_||_.peerId!==p)){if(u(v.r),v.e!==void 0){_.reject(Is("rejected",v.e));return}_.resolve(m)}}),{makeAction:(m,p)=>{if(p&&"onRequest"in p&&p.kind!=="request")throw Ke('request actions must use kind: "request"');let y=p?.kind??"message",v=l(m),_=r[m];if(_){if(_.kind!==y)throw Ke(`action type "${m}" cannot be redefined`);return _.action}let w={kind:y,action:null,onReceive:p?.onReceive??null,onReceiveProgress:p?.onReceiveProgress??null},M=(E,C)=>E?(D,F)=>E(D,kc({peerId:F},C)):void 0,R=(E,C,D)=>{let F=w.kind==="request"?ku(D):null;w.onReceiveProgress?.(E,kc({peerId:C},F?F.m:D))},b=E=>{w.onReceive=E,v.onReceive(E?C=>{let D=y==="request"?ku(C.metadata):null;return E(kc({byteLength:C.byteLength,peerId:C.peerId,signal:C.signal,kind:y},D?D.m:C.metadata))}:null)};if(b(w.onReceive),v.onProgress(R),y==="message"){let E=p?.onMessage??null,C=(F,V,X)=>{let N=E;Promise.resolve().then(()=>N(F,kc({peerId:V},X))).catch(k=>console.error(`${zt} action handler error:`,k))},D={send:async(F,V={})=>{await v.send(F,V.target,V.metadata,M(V.onProgress,V.metadata),V.signal)},get onMessage(){return E},set onMessage(F){E=F,v.onMessage(F?C:null)},get onReceive(){return w.onReceive},set onReceive(F){b(F)},get onReceiveProgress(){return w.onReceiveProgress},set onReceiveProgress(F){w.onReceiveProgress=F}};return w.action=D,r[m]=w,v.onMessage(E?C:null),D}v.onReject((E,C,D)=>{let F=ku(C);F&&g.send(null,E,{r:F.r,e:D}).catch(Yt)});let T=p?.onRequest??null,P=(E,C,D)=>{let F=ku(D);if(!F)return;let V=T,X=new AbortController,N=a.get(C);N||(N=new Set,a.set(C,N)),N.add(X),Promise.resolve().then(async()=>{let k=await V(E,{...kc({peerId:C},F.m),signal:X.signal});if(k===void 0)throw Ke("request handler returned undefined");return k}).then(k=>g.send(k,C,{r:F.r}),k=>g.send(null,C,{r:F.r,e:Rs(k,"request failed").slice(0,512)})).catch(Yt).finally(()=>{let k=a.get(C);k?.delete(X),k&&!k.size&&a.delete(C),X.abort()})},U=async(E,C)=>{let{target:D,metadata:F,onProgress:V,signal:X,timeoutMs:N}=C;if(Nu(X),!n(D,!1))throw Is("disconnected",`no active peer with id ${D}`);let k=ti(20),q=new AbortController,le=new Promise((ue,Ae)=>{let We={controller:q,getReceive:()=>w.onReceive,getReceiveProgress:()=>w.onReceiveProgress,peerId:D,resolve:ue,reject:Ae,timer:null,...X===void 0?{}:{signal:X}},qe=()=>{u(k),Ae(Is("aborted","operation aborted"))};X&&(We.abortHandler=qe,X.addEventListener("abort",qe,{once:!0})),o[k]=We,N!==void 0&&(We.timer=setTimeout(()=>{u(k),We.reject(Is("timeout","request timed out"))},N))});try{let ue=v.send(E,D,F===void 0?{r:k}:{r:k,m:F},M(V,F),q.signal);return await Promise.race([le,ue.then(()=>le)])}finally{u(k)}},O={request:U,requestMany:async(E,C)=>{let{targets:D,onResult:F,...V}=C;return Nu(V.signal),await Yn(D.map(async X=>{try{let N={peerId:X,status:"fulfilled",value:await U(E,{...V,target:X})};return F?.(N),N}catch(N){let k=di(N,"request failed");if(k.kind==="aborted"||!k.kind)throw k;let q=k.kind==="timeout"?{peerId:X,status:"timeout"}:k.kind==="disconnected"?{peerId:X,status:"disconnected"}:{peerId:X,status:"rejected",error:k};return F?.(q),q}}))},get onRequest(){return T},set onRequest(E){T=E,v.onMessage(E?P:null)},get onReceive(){return w.onReceive},set onReceive(E){b(E)},get onReceiveProgress(){return w.onReceiveProgress},set onReceiveProgress(E){w.onReceiveProgress=E}};return w.action=O,r[m]=w,v.onMessage(T?P:null),O},makeInternalAction:l,handleData:h,clearPeer:f}};var o_=n=>n&&typeof n=="object"&&!Array.isArray(n)&&typeof n.k=="string"?{key:n.k,...typeof n.s=="string"?{streamId:n.s}:{},...typeof n.t=="string"?{trackId:n.t}:{},...Object.hasOwn(n,"m")?{metadata:n.m}:{}}:null,a_=n=>e=>{let t=n.get(e);return t||(t=ti(20),n.set(e,t)),t},Uu=()=>{let n=new WeakMap,e=new WeakMap,t=new Map,i=new Map,s=new Map,r=new Map,o=new WeakMap,a=new WeakMap;return{getStreamKey:a_(n),getTrackKey:a_(e),rememberRemoteStream:(c,l,h)=>{let u=o.get(l);u!==void 0&&t.get(u)===l&&t.delete(u),o.set(l,c),t.set(c,l),h&&i.set(h,l),l.getTracks?.().forEach(d=>{typeof d.id=="string"&&r.set(d.id,{track:d,stream:l})})},getRemoteStream:(c,l)=>t.get(c)??(l?i.get(l):void 0),rememberRemoteTrack:(c,l,h,u,d)=>{let f={track:l,stream:h},g=a.get(l);g!==void 0&&s.get(g)?.track===l&&s.delete(g),a.set(l,c),s.set(c,f),u&&r.set(u,f),d&&i.set(d,h)},getRemoteTrack:(c,l)=>s.get(c)??(l?r.get(l):void 0),hasRemoteMedia:()=>t.size>0||s.size>0,clearRemote:()=>{t.clear(),i.clear(),s.clear(),r.clear()}}},c_=({iterate:n,isActive:e,getSharedMediaPeer:t,onPeerError:i})=>{let s={},r={},o={},a=Uu(),c=x=>t(x)?.__trysteroMedia??(o[x]??=Uu()),l=(x,m,p,y)=>{let v=x[m]??=[];if(v.length>=64){console.warn(`${zt}: too many pending ${y} metadata messages`),i(m,Ke("too many pending media metadata messages"));return}v.push(p)},h=(x,m,p)=>{if(!x?.length)return;let y=m?x.findIndex(v=>{let _=p(v);return!_||_===m}):0;return y>=0?x.splice(y,1)[0]:void 0},u=(x,m,p,y)=>{e(x)&&(c(x).rememberRemoteStream(m,p,typeof p.id=="string"?p.id:void 0),g.onPeerStream?.(p,x,y))},d=(x,m,p,y,v)=>{e(x)&&(c(x).rememberRemoteTrack(m,p,y,typeof p.id=="string"?p.id:void 0,typeof y.id=="string"?y.id:void 0),g.onPeerTrack?.(p,y,x,v))},f=(x,m,p,y,v,_={})=>{let w={k:m,..._,...p===void 0?{}:{m:p}};return n(x,async(M,R)=>{await y(w,M),await v(R)})},g={addStream:(x,m,p)=>f(m.target,a.getStreamKey(x),m.metadata,p,y=>y.addStream(x),{s:x.id}),removeStream:(x,m)=>{n(m,(p,y)=>y.removeStream(x))},addTrack:(x,m,p,y)=>f(p.target,a.getTrackKey(x),p.metadata,y,v=>v.addTrack(x,m),{s:m.id,t:x.id}),removeTrack:(x,m)=>{n(m,(p,y)=>y.removeTrack(x))},replaceTrack:(x,m,p,y)=>f(p.target,a.getTrackKey(m),p.metadata,y,v=>v.replaceTrack(x,m),{t:x.id}),receiveStreamMeta:(x,m)=>{if(!e(m))return;let p=o_(x);if(!p)return;let y=c(m).getRemoteStream(p.key,p.streamId);if(y?.getTracks().length){u(m,p.key,y,p.metadata);return}l(s,m,p,"stream")},receiveTrackMeta:(x,m)=>{if(!e(m))return;let p=o_(x);if(!p)return;let y=c(m).getRemoteTrack(p.key,p.trackId);if(y&&y.track.readyState!=="ended"&&(!y.stream.getTracks||y.stream.getTracks().includes(y.track))){d(m,p.key,y.track,y.stream,p.metadata);return}l(r,m,p,"track")},receiveRemoteStream:(x,m)=>{if(!e(x))return;let p=h(s[x],typeof m.id=="string"?m.id:void 0,y=>y.streamId);p&&u(x,p.key,m,p.metadata)},receiveRemoteTrack:(x,m,p)=>{if(!e(x))return;let y=r[x],v=typeof m.id=="string"?m.id:void 0,_=typeof p.id=="string"?p.id:void 0,w=y&&v?y.findIndex(R=>R.trackId===v):-1,M=w>=0?y?.splice(w,1)[0]:h(y,_,R=>R.streamId);M&&d(x,M.key,m,p,M.metadata)},clearPeer:x=>{delete s[x],delete r[x],delete o[x]},onPeerStream:null,onPeerTrack:null};return g};var l_="beforeunload",m2=1e4,ur=n=>"@_"+n,Uc=new Set,h_=()=>Uc.forEach(n=>n()),g2=n=>(Uc.add(n),Uc.size===1&&addEventListener(l_,h_),()=>{Uc.delete(n),Uc.size||removeEventListener(l_,h_)}),u_=(n,e,t,{onPeerHandshake:i,onHandshakeError:s,handshakeTimeoutMs:r=m2,maxReceiveBytes:o,isPassive:a=!1,onBeforeLeave:c}={})=>{let l={},h={},u={},d={onPeerJoin:null,onPeerLeave:null},f=Yt,g=null,x=(N,k)=>(N?Array.isArray(N)?N:[N]:Fn(h)).flatMap(q=>{let le=h[q];return le?[Promise.resolve(k(q,le))]:(console.warn(`${zt}: no peer with id ${q} found`),[])}),m=(N,k,q)=>{let le=l[N];!le||k&&le!==k||(D.send("",N).catch(Yt),b(N,le,q))},p=(N,k)=>m(N,void 0,k),y=c_({onPeerError:p,iterate:(N,k)=>x(N,(q,le)=>k(q,le)),isActive:N=>!!h[N],getSharedMediaPeer:N=>l[N]??null}),v=r_({onPeerError:p,...o===void 0?{}:{maxReceiveBytes:o},getPeer:(N,k)=>(k?l:h)[N],getPeerIds:N=>Fn(N?l:h),canReceiveFromPeer:(N,k)=>X.canReceiveFromPeer(N,k)}),_=v.makeInternalAction,w=v.handleData,M=v.makeAction,R=(N,k=Ke("peer disconnected"))=>{let q=di(k,"peer disconnected");X.clearPeer(N,q),delete l[N],delete h[N],v.clearPeer(N,q),u[N]?.splice(0).forEach(le=>le.reject(q)),delete u[N],y.clearPeer(N)},b=(N,k,q)=>{let le=l[N];if(!le||k&&le!==k)return;let ue=!!h[N];R(N,q),le.destroy(),ue&&d.onPeerLeave?.(N),e(N)},T=()=>g??=(async()=>{c?.();let N=new AbortController;D.send("",void 0,void 0,void 0,N.signal).catch(Yt),await new Promise(k=>setTimeout(k,99)),N.abort();try{ns(l).forEach(([k,q])=>{q.destroy(),R(k,Ke("room left"))})}finally{try{f()}finally{t()}}})(),P=_(ur("ping")),U=_(ur("pong")),O=_(ur("signal")),E=_(ur("stream"),{maxPayloadBytes:65536}),C=_(ur("track"),{maxPayloadBytes:65536}),D=_(ur("leave"),{sendToPending:!0,receiveWhilePending:!0}),F=_(ur("hsdata"),{sendToPending:!0,receiveWhilePending:!0,maxPayloadBytes:65536}),V=_(ur("hsready"),{sendToPending:!0,receiveWhilePending:!0}),X=zx({...i===void 0?{}:{onPeerHandshake:i},...s===void 0?{}:{onHandshakeError:s},handshakeTimeoutMs:r,sendHandshakeData:F.send,sendHandshakeReady:V.send,onActivate:(N,k)=>{h[N]=k,k.setHandlers({signal:q=>{h[N]===k&&O.send(q,N).catch(Yt)}}),d.onPeerJoin?.(N)},onFailure:(N,k,q)=>m(N,k,q)});return P.onMessage((N,k)=>{U.send("",k).catch(Yt)}),U.onMessage((N,k)=>{let q=u[k];q?.shift()?.resolve(),q&&!q.length&&delete u[k]}),O.onMessage((N,k)=>{h[k]?.signal(N)}),E.onMessage((N,k)=>y.receiveStreamMeta(N,k)),C.onMessage((N,k)=>y.receiveTrackMeta(N,k)),D.onMessage((N,k)=>b(k,void 0,Ke("peer left room"))),F.onMessage((N,k,q)=>X.receiveHandshakeData(N,k,q)),V.onMessage((N,k)=>X.receiveHandshakeReady(k)),n((N,k)=>{let q=l[k];if(q){if(q===N)return;q.destroy(),R(k,Ke("peer replaced"))}l[k]=N,X.addPeer(k,N),N.setHandlers({data:le=>{l[k]===N&&w(k,le)},stream:le=>y.receiveRemoteStream(k,le),track:(le,ue)=>y.receiveRemoteTrack(k,le,ue),close:()=>b(k,N,Ke("peer disconnected")),error:le=>{console.error(`${zt} peer error:`,le),b(k,N,le)}}),X.start(k,N)}),Rp&&(f=g2(()=>T().catch(Yt))),{makeAction:M,leave:T,ping:async N=>{if(!h[N])throw Ke(`no active peer with id ${N}`);let k=Date.now();return await new Promise((q,le)=>{let ue=u[N]??=[],Ae=()=>{let qe=u[N];if(!qe)return;let J=qe.indexOf(We);J>-1&&qe.splice(J,1),qe.length||delete u[N]},We={resolve:()=>{Ae(),q()},reject:qe=>{Ae(),le(qe)}};ue.push(We),P.send("",N).catch(qe=>We.reject(di(qe,"peer disconnected")))}),Date.now()-k},isPassive:()=>a,getPeers:()=>Cp(ns(h).map(([N,k])=>[N,k.connection])),addStream:(N,k={})=>y.addStream(N,k,E.send),removeStream:(N,k={})=>{y.removeStream(N,k.target)},addTrack:(N,k,q={})=>y.addTrack(N,k,q,C.send),removeTrack:(N,k={})=>{y.removeTrack(N,k.target)},replaceTrack:(N,k,q={})=>y.replaceTrack(N,k,q,C.send),get onPeerJoin(){return d.onPeerJoin},set onPeerJoin(N){d.onPeerJoin=N,N&&Fn(h).forEach(k=>N(k))},get onPeerLeave(){return d.onPeerLeave},set onPeerLeave(N){d.onPeerLeave=N},get onPeerStream(){return y.onPeerStream},set onPeerStream(N){y.onPeerStream=N},get onPeerTrack(){return y.onPeerTrack},set onPeerTrack(N){y.onPeerTrack=N}}};var p_=1,m_=2,d_=(n,e)=>{let t=ni(n),i=new Uint8Array(3+t.byteLength+e.byteLength);return i[0]=p_,i[1]=t.byteLength>>>8&255,i[2]=t.byteLength&255,i.set(t,3),i.set(e,3+t.byteLength),i},y2=(n,e)=>{let t=ni(n),i=new Uint8Array(4+t.byteLength);return i[0]=m_,i[1]=Number(e),i[2]=t.byteLength>>>8&255,i[3]=t.byteLength&255,i.set(t,4),i},f_=(n,e)=>{if(n.byteLength<e+2)return null;let t=(n[e]??0)<<8|(n[e+1]??0),i=e+2+t;return t<=0||t>128||n.byteLength<i?null:{roomToken:fi(n.subarray(e+2,i)),headerSize:i}},x2=n=>{let e=new Uint8Array(n);if(e.byteLength<3||e.byteLength>16515)return null;if(e[0]===p_){let t=f_(e,1);return t?{type:"room",roomToken:t.roomToken,payload:e.subarray(t.headerSize).slice().buffer}:null}if(e[0]===m_){let t=f_(e,2);return t?{type:"presence",roomToken:t.roomToken,isPresent:e[1]===1}:null}return null},Ou=n=>{let{connection:e,channel:t}=n;return n.isDead||e.connectionState==="closed"||e.connectionState==="failed"||e.iceConnectionState==="closed"||e.iceConnectionState==="failed"||t?.readyState==="closing"||t?.readyState==="closed"},g_=n=>{if(Ou(n))return"stale";let{channel:e}=n;return!e||e.readyState!=="open"?"transient":"live"},y_=class{rooms=new Map;unclaimedDataTimers=new WeakMap;pendingDataTimers=new WeakMap;byApp={};registerRoom(n,e,t,i){let s=this.rooms.get(n)??new Map;if(s.has(e))throw Ke("room membership already registered");let r={token:null,tokenPromise:t,...i};s.set(e,r),this.rooms.set(n,s);let o=()=>this.rooms.get(n)?.get(e)===r,a=c=>{if(r.token)for(let l of ui(this.byApp[n]??{}))try{this.sendRoomPresence(l,r.token,c)}catch{}};return t.then(c=>{if(o()){r.token=c;for(let l of ui(this.byApp[n]??{}))l.remoteRoomTokens.has(c)&&this.attachRoom(n,e,r,l),this.discardUnboundData(l);o()&&r.active&&a(!0)}}),{connect:(c,l,h)=>{if(!o()){l.destroy();return}let u=this.reusable(n,c);u&&u.peer!==l&&l.destroy();let d=u??this.register(n,c,l,h);if(this.attachRoom(n,e,r,d),!u)for(let f of s.values())f.active&&f.token&&this.sendRoomPresence(d,f.token,!0)},reuse:c=>{if(!o())return!1;let l=this.reusable(n,c);return l?(this.attachRoom(n,e,r,l),!0):!1},setActive:c=>{!o()||r.active===c||(r.active=c,a(c))},leave:()=>{if(o()){s.delete(e),s.size||this.rooms.delete(n),a(!1);for(let c of ui(this.byApp[n]??{})){let l=c.bindings[e];l?.handlers.close?.(),l?.detach(),this.discardUnboundData(c)}}}}}owns(n,e,t){return this.byApp[n]?.[e]?.peer===t}reusable(n,e){let t=this.byApp[n]?.[e];if(t&&Ou(t.peer)){this.clear(n,e,{destroyPeer:!0});return}return t}attachRoom(n,e,t,i){if(this.rooms.get(n)?.get(e)!==t||i.isClosing||this.get(n,i.peerId)!==i)return;let{proxy:s,isNew:r}=this.bind(e,t.tokenPromise,i,{onDetach:()=>t.onDetach(i.peerId,i.peer)});r&&t.onPeer(s,i.peerId,i.peer)}get(n,e){return this.byApp[n]?.[e]}sendRoomPresence(n,e,t){n.isClosing||Ou(n.peer)||n.peer.sendData(y2(e,t))}clear(n,e,{destroyPeer:t}){let i=this.byApp[n],s=i?.[e];if(!s||s.isClosing)return;s.idleTimer=Qe(s.idleTimer),this.clearDataTimers(s),s.isClosing=!0,t&&!s.peer.isDead&&s.peer.destroy();let r=ui(s.bindings);s.bindings={},s.bindingsByToken={},s.controlRoomId=null,delete i[e],r.forEach(o=>{o.handlers.close?.(),o.pendingData.length=0,o.pendingSendData.length=0,o.pendingTracks.length=0}),s.media.clearRemote(),s.pendingDataByToken.clear(),s.remoteRoomTokens.clear(),Fn(i).length===0&&delete this.byApp[n]}register(n,e,t,i){let s=this.byApp[n]?.[e];if(s){if(s.idleTimer=Qe(s.idleTimer),s.peer===t)return s;this.clear(n,e,{destroyPeer:!0})}let r={appId:n,peerId:e,peer:t,bindings:{},bindingsByToken:{},pendingDataByToken:new Map,remoteRoomTokens:new Set,idleTimer:null,controlRoomId:null,streamOwners:new Map,trackOwners:new Map,media:Uu(),idleMs:i,isClosing:!1};(this.byApp[n]??={})[e]=r;let o=()=>{this.owns(n,e,t)&&this.clear(n,e,{destroyPeer:!0})};return t.setHandlers({data:a=>this.dispatchData(r,a),signal:a=>this.dispatchSignal(r,a),close:o,error:a=>{console.error(`${zt} peer error:`,a),o()},track:(a,c)=>this.dispatchTrack(r,a,c)}),r}bind(n,e,t,{onDetach:i}){let s=t.bindings[n];if(s)return t.idleTimer=Qe(t.idleTimer),{proxy:s.proxy,isNew:!1};let r={roomId:n,roomToken:null,roomTokenPromise:e,handlers:{},pendingData:[],pendingSendData:[],pendingTracks:[],detach:Yt,proxy:{}},o=()=>{if(t.bindings[n]!==r)return;let c=Fn(t.bindings).length===1&&(t.streamOwners.size>0||t.trackOwners.size>0||t.media.hasRemoteMedia());c||this.pruneRoomOwnership(t,n),delete t.bindings[n],r.roomToken&&t.bindingsByToken[r.roomToken]===r&&delete t.bindingsByToken[r.roomToken],t.controlRoomId===n&&(t.controlRoomId=Fn(t.bindings)[0]??null),this.discardUnboundData(t),i(),c?this.clear(t.appId,t.peerId,{destroyPeer:!0}):this.scheduleIdleTimer(t)},a={get connection(){return t.peer.connection},get channel(){return t.peer.channel},get isDead(){return t.peer.isDead},getOffer:c=>t.peer.getOffer(c),signal:c=>t.peer.signal(c),sendData:c=>{if(!r.roomToken){r.pendingSendData.push(c);return}t.peer.sendData(d_(r.roomToken,c))},destroy:()=>o(),setHandlers:c=>{Object.assign(r.handlers,c),this.flushBindingQueues(t,r)},addStream:c=>{let l=t.streamOwners.get(c)??new Set,h=l.size===0;l.add(n),t.streamOwners.set(c,l),h&&t.peer.addStream(c)},removeStream:c=>this.releaseStreamOwner(t,c,n),addTrack:(c,l)=>{let h=t.trackOwners.get(c)??{stream:l,rooms:new Set},u=h.rooms.size===0;return h.stream=l,h.rooms.add(n),t.trackOwners.set(c,h),u?t.peer.addTrack(c,l):t.peer.connection.getSenders().find(d=>d.track===c)??t.peer.addTrack(c,l)},removeTrack:c=>this.releaseTrackOwner(t,c,n),replaceTrack:async(c,l)=>{let h=t.trackOwners.get(c);if(await t.peer.replaceTrack(c,l),h&&t.trackOwners.get(c)===h){t.trackOwners.delete(c);let u=t.trackOwners.get(l)??{stream:h.stream,rooms:new Set};h.rooms.forEach(d=>u.rooms.add(d)),t.trackOwners.set(l,u)}},__trysteroMedia:t.media};return r.proxy=a,r.detach=o,t.bindings[n]=r,t.controlRoomId??=n,t.idleTimer=Qe(t.idleTimer),e.then(c=>{if(t.isClosing||t.bindings[n]!==r)return;r.roomToken=c,t.bindingsByToken[c]=r;let l=t.pendingDataByToken.get(c);l?.length&&(r.pendingData.push(...l),t.pendingDataByToken.delete(c));let h=r.pendingSendData.splice(0);Ou(t.peer)||h.forEach(u=>{try{t.peer.sendData(d_(c,u))}catch{}}),this.flushBindingQueues(t,r),this.discardUnboundData(t)}),{proxy:a,isNew:!0}}releaseStreamOwner(n,e,t){let i=n.streamOwners.get(e);i&&(i.delete(t),i.size===0&&(n.streamOwners.delete(e),n.peer.removeStream(e)))}releaseTrackOwner(n,e,t){let i=n.trackOwners.get(e);i&&(i.rooms.delete(t),i.rooms.size===0&&(n.trackOwners.delete(e),n.peer.removeTrack(e)))}pruneRoomOwnership(n,e){n.streamOwners.forEach((t,i)=>this.releaseStreamOwner(n,i,e)),n.trackOwners.forEach((t,i)=>this.releaseTrackOwner(n,i,e))}scheduleIdleTimer(n){n.isClosing||Fn(n.bindings).length>0||(n.idleTimer=Qe(n.idleTimer),n.idleTimer=setTimeout(()=>{let e=this.byApp[n.appId]?.[n.peerId];!e||Fn(e.bindings).length>0||this.clear(n.appId,n.peerId,{destroyPeer:!0})},n.idleMs))}getSignalBinding(n){if(n.controlRoomId){let t=n.bindings[n.controlRoomId];if(t?.handlers.signal)return t}let e=ui(n.bindings).find(t=>!!t.handlers.signal);return e?(n.controlRoomId=e.roomId,e):null}flushBindingQueues(n,e){let{handlers:t}=e;if(t.data&&e.pendingData.length>0){let i=e.pendingData.splice(0);this.syncDataTimers(n),i.forEach(s=>t.data?.(s))}else this.syncDataTimers(n);(t.track||t.stream)&&e.pendingTracks.length&&e.pendingTracks.splice(0).forEach(({track:i,stream:s})=>{t.track?.(i,s),t.stream?.(s)})}unclaimedBufferedFrameCount(n){let e=0;for(let t of n.pendingDataByToken.values())e+=t.length;return e}boundBufferedFrameCount(n){let e=0;for(let t of ui(n.bindings))e+=t.pendingData.length;return e}bufferedFrameCount(n){return this.unclaimedBufferedFrameCount(n)+this.boundBufferedFrameCount(n)}clearDataTimers(n){Qe(this.unclaimedDataTimers.get(n)),this.unclaimedDataTimers.delete(n),Qe(this.pendingDataTimers.get(n)),this.pendingDataTimers.delete(n)}syncDataTimers(n){if(n.isClosing){this.clearDataTimers(n);return}this.unclaimedBufferedFrameCount(n)===0?(Qe(this.unclaimedDataTimers.get(n)),this.unclaimedDataTimers.delete(n)):this.unclaimedDataTimers.has(n)||this.unclaimedDataTimers.set(n,setTimeout(()=>{this.unclaimedDataTimers.delete(n),n.pendingDataByToken.clear()},1e4)),this.boundBufferedFrameCount(n)===0?(Qe(this.pendingDataTimers.get(n)),this.pendingDataTimers.delete(n)):this.pendingDataTimers.has(n)||this.pendingDataTimers.set(n,setTimeout(()=>{this.pendingDataTimers.delete(n),this.boundBufferedFrameCount(n)>0&&this.failData(n,"room data handler timed out")},1e4))}canBindRoomToken(n,e){return ui(n.bindings).some(t=>!t.roomToken)||[...this.rooms.get(n.appId)?.values()??[]].some(t=>!t.token||t.token===e)}discardUnboundData(n){for(let e of n.pendingDataByToken.keys())this.canBindRoomToken(n,e)||n.pendingDataByToken.delete(e);this.syncDataTimers(n)}failData(n,e){console.warn(`${zt}: ${e}; disconnecting peer ${n.peerId}`),this.clear(n.appId,n.peerId,{destroyPeer:!0})}dispatchData(n,e){if(n.isClosing)return;let t=x2(e);if(!t){this.failData(n,"invalid or incompatible room frame");return}if(t.type==="presence"){if(t.isPresent){if(!n.remoteRoomTokens.has(t.roomToken)&&n.remoteRoomTokens.size>=64){this.failData(n,"too many advertised rooms");return}n.remoteRoomTokens.add(t.roomToken);for(let[s,r]of this.rooms.get(n.appId)??[])r.token===t.roomToken&&this.attachRoom(n.appId,s,r,n)}else{n.remoteRoomTokens.delete(t.roomToken),n.pendingDataByToken.delete(t.roomToken);let s=n.bindingsByToken[t.roomToken];s?.handlers.close?.(),s?.detach(),this.syncDataTimers(n)}return}let i=n.bindingsByToken[t.roomToken];if(!i){if(!this.canBindRoomToken(n,t.roomToken)||this.bufferedFrameCount(n)>=64)return;let s=n.pendingDataByToken.get(t.roomToken)??[];s.push(t.payload),n.pendingDataByToken.set(t.roomToken,s),this.syncDataTimers(n);return}if(i.handlers.data)i.handlers.data(t.payload);else{if(this.bufferedFrameCount(n)>=64){this.failData(n,"too much data waiting for a room handler");return}i.pendingData.push(t.payload),this.syncDataTimers(n)}}dispatchSignal(n,e){let t=this.getSignalBinding(n);t?t.handlers.signal?.(e):e.type==="offer"&&this.clear(n.appId,n.peerId,{destroyPeer:!0})}dispatchTrack(n,e,t){ui(n.bindings).forEach(i=>{if(i.handlers.track||i.handlers.stream){i.handlers.track?.(e,t),i.handlers.stream?.(t);return}i.pendingTracks.push({track:e,stream:t})})}};var x_=23333,_2=57333,v2=12,b2=7533,M2=23333,Oc="offer-placeholder",w2=["offer","answer","candidate"],__=n=>{if(typeof n=="string")try{let e=is(n);return e&&typeof e=="object"&&!Array.isArray(e)?e:null}catch{return null}return n&&typeof n=="object"&&!Array.isArray(n)?n:null},dr=(n,e)=>typeof n[e]=="string"&&n[e]?n[e]:void 0,v_=n=>!!(n&&typeof n=="object"&&typeof n.signal=="function"&&typeof n.destroy=="function"&&typeof n.setHandlers=="function"),b_=(n,e=!1)=>w2.some(t=>t in n&&(typeof n[t]!="string"||n[t]===""))||"peer"in n&&(e||n.peer!==void 0&&!v_(n.peer)),M_=n=>{let e=__(n);if(!e||b_(e,typeof n=="string"))return!1;let t=dr(e,"peerId");return!!(t&&t!==cn&&e.passive!==!0&&!dr(e,"answer")&&!dr(e,"candidate"))},S2=(n,e,t,i,s,r)=>{n.toCipher(e).then(o=>{n.isLeaving()||!r()||i(t,ln(s(o.sdp)))})},T2=()=>({offerPeer:null,offerId:null,offerSdp:null,offerInitPromise:null,offerAnswered:!1,offerRelays:[],offerSignalRelays:[],offerSignalBacklog:[],offerRelayTimers:[],offerExpiryTimer:null,connectedPeer:null,connectedPeerUnhealthySinceMs:null,answeringExpiryTimer:null,answeringPeer:null,answerSent:!1,answerReplay:null,connectionErrorReported:!1}),E2=n=>[...n.turnConfig??[],...n.rtcConfig?.iceServers??[]].some(({urls:e})=>(Array.isArray(e)?e:[e]).some(t=>/^turns?:/i.test(t))),A2=(n,e)=>`could not connect to peer ${n} after exchanging SDP; ${E2(e)?"check that your TURN server URLs and credentials are reachable by both peers":"configure TURN servers with turnConfig or rtcConfig.iceServers"}`,zu=(n,e,t)=>{n.isLeaving()||e.connectedPeer||e.connectionErrorReported||(e.connectionErrorReported=!0,n.onJoinError?.({error:A2(t,n.config),appId:n.appId,peerId:t,roomId:n.roomId}))},Bc=(n,e)=>n[e]??=T2(),Fu=new WeakMap,Hu=n=>{Fu.delete(n),n.answeringExpiryTimer=Qe(n.answeringExpiryTimer),n.answeringPeer=null,n.answerSent=!1,n.answerReplay=null},Fc=(n,e)=>{n.answeringPeer===e&&(Hu(n),n.connectedPeer!==e&&!e.isDead&&e.destroy())},w_=(n,e)=>{n.answeringPeer&&n.answeringPeer!==e&&!n.answeringPeer.isDead&&n.answeringPeer.destroy(),Hu(n),n.connectedPeer=e,n.connectedPeerUnhealthySinceMs=null},qp=(n,e)=>{n?.connectedPeer===e&&(n.connectedPeer=null,n.connectedPeerUnhealthySinceMs=null)},Bu=(n,e,t)=>{n.connectedPeer&&(n.connectedPeer.isDead||n.connectedPeer.destroy(),n.connectedPeer=null,n.connectedPeerUnhealthySinceMs=null)},Yp=(n,e)=>{n.offerRelayTimers[e]=Qe(n.offerRelayTimers[e]),n.offerRelays[e]&&(n.offerRelays[e]=void 0)},Wp=(n,e)=>{n?.offerRelays[e]===Oc&&Yp(n,e)},fr=n=>{Fu.delete(n),n.offerExpiryTimer=Qe(n.offerExpiryTimer),n.offerInitPromise=null,n.offerRelays.forEach((e,t)=>Yp(n,t)),n.offerRelays=[],n.offerSignalRelays=[],n.offerRelayTimers=[],n.offerSignalBacklog=[],n.offerPeer&&n.offerPeer!==n.connectedPeer&&(n.offerPeer.isDead||n.offerPeer.destroy()),n.offerPeer=null,n.offerId=null,n.offerSdp=null,n.offerAnswered=!1,n.connectionErrorReported=!1},R2=(n,e,t,i)=>{Qe(e.answeringExpiryTimer),e.answeringExpiryTimer=setTimeout(()=>{let s=n.peerStates[t];!s||s.connectedPeer||s.answeringPeer!==i||(s.answerSent&&zu(n,s,t),Fc(s,i),n.checkDeactivate())},M2)},Xp=(n,e,t,i=_2)=>{Qe(e.offerExpiryTimer);let s=e.offerId;e.offerExpiryTimer=setTimeout(()=>{let r=n.peerStates[t];!r||r.connectedPeer||r.offerId!==s||(r.offerAnswered&&zu(n,r,t),fr(r),n.checkDeactivate())},i)},S_=(n,e,t,i,s)=>{let r=()=>{e.offerPeer===i&&!e.connectedPeer&&(e.offerAnswered&&zu(n,e,t),fr(e)),n.disconnectPeer(i,t),n.checkDeactivate()};i.setHandlers({connect:()=>n.connectPeer(i,t),...s?{signal:s}:{},close:r,error:r})},C2=(n,e,t)=>{if(e.offerPeer&&e.offerId&&e.offerSdp)return Promise.resolve({peer:e.offerPeer,offer:e.offerSdp,offerId:e.offerId});if(e.offerInitPromise)return e.offerInitPromise;let s=(async()=>{let r;try{r=(await n.offerManager.checkout(1,!1,n.encryptOffer))[0]}catch(c){if(n.isLeaving()||e.offerInitPromise!==s)return null;throw c}if(!r)throw Ke("failed to allocate offer peer");let{peer:o,offer:a}=r;return n.isLeaving()||e.offerInitPromise!==s?(o.destroy(),null):(e.offerPeer=o,e.offerId=ti(v2),e.offerSdp=a,e.offerAnswered=!1,e.connectionErrorReported=!1,e.offerSignalBacklog=[],S_(n,e,t,o,c=>{e.offerPeer===o&&(e.offerSignalBacklog.push(c),e.offerSignalRelays.forEach(l=>l?.(c)))}),Xp(n,e,t),{peer:o,offer:a,offerId:e.offerId})})().finally(()=>{e.offerInitPromise===s&&(e.offerInitPromise=null)});return e.offerInitPromise=s},T_=async(n,e,t,i,s=0)=>{let r=n.peerStates[t];if(!r||r.connectedPeer||r.answeringPeer||r.offerAnswered){Wp(r,e);return}if(r.offerRelays[e]!==Oc)return;let[o,a]=await Yn([Ps(lr(n.rootTopicPlaintext,t)),C2(n,r,t)]);if(!a){Wp(r,e);return}if(n.isLeaving()){fr(r);return}if(r.connectedPeer||r.answeringPeer||r.offerAnswered||r.offerRelays[e]!==Oc){Wp(r,e);return}r.offerRelayTimers[e]=Qe(r.offerRelayTimers[e]),r.offerRelays[e]=!0,r.offerRelayTimers[e]=setTimeout(()=>{if(s>=2||n.isLeaving()||r.connectedPeer||r.answeringPeer||r.offerAnswered||r.offerPeer!==a.peer||r.offerId!==a.offerId){D2(n,t,e);return}r.offerRelays[e]=Oc,T_(n,e,t,i,s+1)},s===0&&n.announceIntervals[e]===void 0?2e3:(n.announceIntervals[e]??n.announceIntervalMs)*.9);let c=!1;r.offerSignalRelays[e]=l=>{c&&(n.isLeaving()||r.connectedPeer||r.offerPeer!==a.peer||r.offerId!==a.offerId||l.type!=="candidate"||S2(n,l,o,i,h=>({peerId:cn,offerId:a.offerId,candidate:h,...n.isPassive?{passive:!0}:{}}),()=>!r.connectedPeer&&r.offerPeer===a.peer&&r.offerId===a.offerId))},i(o,ln({peerId:cn,offerId:a.offerId,offer:a.offer,...n.isPassive?{passive:!0}:{}})),c=!0,r.offerSignalBacklog.forEach(l=>r.offerSignalRelays[e]?.(l))},P2=async(n,e,t,i,s,r)=>{let o=Bc(n.peerStates,t);if(o.answeringPeer||o.offerAnswered){let m=o.answerReplay,p=m?.lastSentAt[e];if(o.answeringPeer&&!o.answeringPeer.isDead&&m&&m.offer===i&&m.offerId===s&&(p===void 0||Date.now()-p>=1e3)){m.lastSentAt[e]=Date.now();let y=await Ps(lr(n.rootTopicPlaintext,t));if(!n.isLeaving()&&o.answerReplay===m&&!o.connectedPeer){let v=_=>r(y,_);m.relays[e]=v,m.messages.forEach(v)}}return}let a=!!(o.offerPeer||o.offerRelays.some(Boolean));if(a&&cn<t)return;a&&fr(o);let c=n.initPeer(!1,n.config),l={offer:i,offerId:s,messages:[],lastSentAt:[],relays:[]};l.lastSentAt[e]=Date.now(),o.answeringPeer=c,o.answerSent=!1,o.answerReplay=l,o.connectionErrorReported=!1,R2(n,o,t,c);let h=()=>{o.answeringPeer===c&&!o.connectedPeer&&o.answerSent&&zu(n,o,t),Fc(o,c),n.disconnectPeer(c,t),n.checkDeactivate()};c.setHandlers({connect:()=>n.connectPeer(c,t),close:h,error:h});let u;try{u=await n.toPlain({type:"offer",sdp:i})}catch{Fc(o,c),n.onJoinError?.({error:"incorrect room password when decrypting offer",appId:n.appId,peerId:t,roomId:n.roomId});return}if(c.isDead){Fc(o,c);return}let d=await Ps(lr(n.rootTopicPlaintext,t));if(n.isLeaving()||o.answerReplay!==l)return;l.relays[e]=m=>r(d,m);let f=[],g=!1,x=m=>{n.toCipher(m).then(p=>{if(n.isLeaving()||o.answeringPeer!==c||c.isDead)return;let y={peerId:cn};m.type==="answer"?(o.answerSent=!0,y.answer=p.sdp):y.candidate=p.sdp,s&&(y.offerId=s),n.isPassive&&(y.passive=!0);let v=ln(y),_=Date.now();l.messages.push(v),l.relays.forEach((w,M)=>{w&&(l.lastSentAt[M]=_,w(v))}),m.type==="answer"&&!g&&(g=!0,f.splice(0).forEach(x))})};c.setHandlers({signal:m=>{if(!(n.isLeaving()||o.answeringPeer!==c||c.isDead)&&!(m.type!=="answer"&&m.type!=="candidate")){if(m.type==="candidate"&&!g){f.push(m);return}x(m)}}}),await c.signal(u)},I2=async(n,e,t,i,s)=>{let r;try{r=await n.toPlain({type:Ru,sdp:t})}catch{return}let o=n.peerStates[e],a=i&&o?.offerPeer&&o.offerId===i?o.offerPeer:null,c=!i||o?.answerReplay?.offerId===i?o?.answeringPeer:null,l=!i&&o?.offerPeer?o.offerPeer:null,h=s&&!s.isDead?s:a??c??l;h&&!h.isDead&&h.signal(r)},L2=async(n,e,t,i,s)=>{let r;try{r=await n.toPlain({type:"answer",sdp:t})}catch{s&&(n.offerManager.reclaimLeased(s),s.isDead||s.destroy()),n.onJoinError?.({error:"incorrect room password when decrypting answer",appId:n.appId,peerId:e,roomId:n.roomId});return}if(s){let o=Bc(n.peerStates,e);if(n.offerManager.claimLeased(s),o.connectedPeer||o.offerAnswered||o.answeringPeer&&!o.answeringPeer.isDead&&cn>e){s.destroy();return}if(o.answeringPeer){let a=o.answeringPeer;Fc(o,a)}fr(o),o.offerPeer=s,o.offerId=i??null,o.offerAnswered=!0,Xp(n,o,e,x_),S_(n,o,e,s),s.signal(r)}else{let o=n.peerStates[e];if(!o||!o.offerPeer||o.offerAnswered||i&&o.offerId&&i!==o.offerId||o.offerPeer.isDead)return;o.offerAnswered=!0,Xp(n,o,e,x_),o.offerPeer.signal(r)}},D2=(n,e,t)=>{let i=n.peerStates[e];!i||i.connectedPeer||i.offerRelays[t]&&(Yp(i,t),n.checkDeactivate())},E_=n=>e=>async(t,i,s)=>{if(n.isLeaving())return;let r=__(i);if(!r||b_(r,typeof i=="string"))return;let o=dr(r,"peerId")??"",a=dr(r,"offer"),c=dr(r,"answer"),l=dr(r,"candidate"),h=dr(r,"offerId"),u=v_(r.peer)?r.peer:void 0,d=r.passive===!0;if(!o||o===cn)return;let[f,g]=await Yn([n.rootTopicP,n.selfTopicP]);if(n.isLeaving()||t!==f&&t!==g||n.isPassive&&d||(n.isPassive&&!n.isActive&&!c&&!l&&(n.isActive=!0,n.requeueAnnounce?.()),n.isPassive&&!n.isActive))return;let x=n.peerStates[o],m=x?.connectedPeer;if(m&&x){let p=g_(m);if(p==="live"){x.connectedPeerUnhealthySinceMs=null;return}if(p==="stale")Bu(x,o,"message-from-stale-peer");else{let y=Date.now(),v=x.connectedPeerUnhealthySinceMs??y;if(x.connectedPeerUnhealthySinceMs=v,y-v<b2)return;Bu(x,o,"message-from-prolonged-disconnect")}}if(!n.reusePeer(o)){if(o&&!a&&!c&&!l){let p=Bc(n.peerStates,o),y=cn<o;if(p.answeringPeer||p.connectedPeer||p.offerAnswered)return;if(!y&&!p.offerPeer){let v=Fu.get(p);v||(v=[],Fu.set(p,v));let _=v[e];if(_!==void 0&&Date.now()-_<1e3)return;v[e]=Date.now();let w=await Ps(lr(n.rootTopicPlaintext,o));!n.isLeaving()&&!p.connectedPeer&&!p.answeringPeer&&!p.offerAnswered&&s(w,ln({peerId:cn}));return}return p.offerRelays[e]?void 0:(p.offerRelays[e]=Oc,T_(n,e,o,s))}if(a)return P2(n,e,o,a,h,s);if(l)return I2(n,o,l,h,u);if(c)return L2(n,o,c,h,u)}};var Gu=5333,N2=[233,533,1333],A_=7533,k2=123333,$p=({init:n,subscribe:e,announce:t,deactivate:i})=>{let s={},r={},o=new y_,a=()=>ui(s).some(u=>Fn(u).length>0),c=!1,l=[],h=Yt;return(u,d,f)=>{if(!u)throw Ke("requires a config map as the first argument");if(f&&typeof f!="object")throw Ke("third argument must be a callbacks object");let{appId:g}=u,x=f?.onJoinError,m=f?.onPeerHandshake,p=f?.handshakeTimeoutMs;if(!g)throw Ke("config map is missing appId field");if(!d)throw Ke("roomId argument required");if(u.maxReceiveBytes!==void 0&&(!Number.isSafeInteger(u.maxReceiveBytes)||u.maxReceiveBytes<=0))throw Ke("maxReceiveBytes must be a positive safe integer");if(p!==void 0&&(!Number.isFinite(p)||p<=0))throw Ke("handshakeTimeoutMs must be a positive number");if(s[g]?.[d])return s[g][d];r[g]?.[d]?.(!0);let y=lr(zt,g,d),v=Ps(y),_=Ps(lr(y,cn)),w=Lx(u.password??"",g,d),M=Dx(g,d),R=u._test_only_sharedPeerIdleMs??k2,b=!1,T=Ge=>async B=>({type:B.type,sdp:await Ge(w,B.sdp)}),P=T(Ox),U=T(Ux),O=()=>Op(!0,u),E=!1,C=new Fx(O),D=async Ge=>{let B=await Ge.getOffer();if(!B||B.type!=="offer")throw Ke("failed to get offer for peer");return(await U(B)).sdp},F=(Ge,B)=>{vt.connect(B,Ge,R)},V=!1,X=()=>{k||!E||V||(V=!0,queueMicrotask(()=>{V=!1,b||Ae.requeueAnnounce?.()}))},N=(Ge,B)=>{if(b)return;let tt=Ae.peerStates[B];tt?.connectedPeer===Ge&&(Bu(tt,B,"close-event"),ue(),X())},k=!!u.passive,q,le=Yt,ue=()=>{if(!k||!Ae.isActive)return;let Ge=!1;ns(Ae.peerStates).forEach(([B,tt])=>{tt.connectedPeer||tt.answeringPeer||tt.offerInitPromise||tt.offerPeer||tt.offerRelays.some(Boolean)?Ge=!0:delete Ae.peerStates[B]}),Ge||(Ae.isActive=!1,q=Qe(q),Fe.forEach(Qe),Fe.length=0,le(),vt.setActive(!1))},Ae={appId:g,roomId:d,config:u,peerStates:{},rootTopicPlaintext:y,rootTopicP:v,selfTopicP:_,toPlain:P,toCipher:U,isLeaving:()=>b,isPassive:k,isActive:!k,onJoinError:x,offerManager:C,encryptOffer:D,initPeer:Op,connectPeer:F,disconnectPeer:N,reusePeer:Ge=>vt.reuse(Ge),checkDeactivate:ue,announceIntervals:[],announceIntervalMs:Gu},We={config:u,appId:g,roomId:d,isPassive:k},qe=E_(Ae);if(!c){let Ge=n(u);l=(Array.isArray(Ge)?Ge:[Ge]).map(B=>Promise.resolve(B)),c=!0,h=u.relayConfig?.manualReconnection?Yt:Ix()}let J=l.map(()=>Gu),ne=l.map(()=>0),be=l.map(()=>0),Fe=[],G=l.map(async(Ge,B)=>e(await Ge,await v,await _,qe(B),tt=>C.getOffers(tt,D),We));Yn([v,_]).then(([Ge,B])=>{if(b)return;let tt=async(at,L)=>{if(b||k&&!Ae.isActive)return;let S=k?{passive:!0}:void 0,W;try{W=await t(at,Ge,B,S,We),be[L]=0}catch(fe){if(b)return;let ee=be[L]??0;ee===0&&u.relayConfig?.warnOnRelayFailure!==!1&&console.warn(`${zt}: announce failed - ${Rs(fe,"")}`),be[L]=ee+1}if(b||k&&!Ae.isActive||W&&typeof W!="number"&&"stopAnnouncing"in W)return;typeof W=="number"?(Ae.announceIntervals[L]=W,J[L]=W):W&&(J[L]=W.nextAnnounceMs,E||=W.reannounceOnDisconnect===!0);let K=ne[L]??0;ne[L]=K+1;let Q=J[L]??Gu,de=N2[K]??(K===3&&typeof W=="object"?Gu:void 0);Fe[L]=setTimeout(()=>{tt(at,L)},typeof de=="number"?Math.min(Q,de):Q)};le=()=>{i&&l.forEach(async at=>{let L=await at;b||i(L,Ge,B,We)})},Ae.requeueAnnounce=()=>{Fe.forEach(Qe),Fe.length=0,q=Qe(q),vt.setActive(!0),q=setTimeout(ue,A_),l.forEach(async(at,L)=>{let S=await at;S&&!b&&(ne[L]=0,tt(S,L))})},G.forEach(async(at,L)=>{if(await at,b)return;let S=await l[L];S&&!b&&(!k||Ae.isActive)&&tt(S,L)})});let re=Yt,Ue=u.password??"",{compose:Te}=Bx(Ue,g,d),Xe=Te(m),gt=()=>{s[g]?.[d]===ft&&(delete s[g][d],Fn(s[g]).length===0&&delete s[g])},et=()=>{r[g]?.[d]===_t&&(delete r[g][d],Fn(r[g]).length===0&&delete r[g])},_t=(Ge=!1)=>{b||(b=!0,re=Yt,gt(),et(),vt.leave(),ns(Ae.peerStates).forEach(([B,tt])=>{tt.connectedPeer&&!tt.connectedPeer.isDead&&(o.owns(g,B,tt.connectedPeer)||tt.connectedPeer.destroy()),tt.answeringPeer&&!tt.answeringPeer.isDead&&tt.answeringPeer.destroy(),fr(tt),Hu(tt),tt.connectedPeer=null,tt.connectedPeerUnhealthySinceMs=null}),Fe.forEach(Qe),q=Qe(q),G.forEach(async B=>{(await B)()}),C.destroy(),!(Ge||a())&&(c=!1,h()))},Ze={...u.maxReceiveBytes===void 0?{}:{maxReceiveBytes:u.maxReceiveBytes},...Xe?{onPeerHandshake:Xe}:{},...p===void 0?{}:{handshakeTimeoutMs:p},isPassive:k,onBeforeLeave:()=>{gt(),(r[g]??={})[d]=_t},onHandshakeError:(Ge,B)=>x?.({error:B.replace(/^handshake failed: /,""),appId:g,peerId:Ge,roomId:d})};s[g]??={};let ft=u_(Ge=>re=Ge,Ge=>{if(b)return;let B=Ae.peerStates[Ge];B?.connectedPeer&&qp(B,B.connectedPeer),ue(),X()},()=>_t(!1),Ze),vt=o.registerRoom(g,d,M,{active:!k||Ae.isActive,onPeer:(Ge,B,tt)=>{let at=Bc(Ae.peerStates,B);w_(at,tt),k&&!Ae.isActive&&(Ae.isActive=!0,vt.setActive(!0),Ae.requeueAnnounce?Ae.requeueAnnounce():(q=Qe(q),q=setTimeout(ue,A_))),re(Ge,B),fr(at)},onDetach:(Ge,B)=>{qp(Ae.peerStates[Ge],B),ue()}});return s[g][d]=ft}};var U2=6e4,jp=n=>{if(!n)throw Ke("topic strategy missing room context");return n},zc=(n,e,t,i)=>({kind:e,appId:n.appId,roomId:n.roomId,rootTopic:t,selfTopic:i}),Kp=({steadyAnnounceIntervalMs:n=U2,reannounceOnDisconnect:e=!0,init:t,subscribeTopic:i,publishTopic:s,unpublishTopic:r})=>$p({init:t,subscribe:async(o,a,c,l,h,u)=>{let d=jp(u),f=(w,M)=>{s(o,w,M,zc(d,"signal",a,c))},g=null,x=!1,m=null,p=!1,y=w=>{x||(x=!0,w())},v=()=>(m||(m=Promise.resolve(i(o,c,(w,M)=>{p||l(w,M,f)},zc(d,"self",a,c))).then(w=>{g=w,p&&y(w)})),m);d.isPassive||await v();let _=await i(o,a,async(w,M)=>{p||(d.isPassive&&M_(M)&&await v(),p||await l(w,M,f))},zc(d,"root",a,c));return()=>{p=!0,g&&y(g),_()}},announce:async(o,a,c,l,h)=>{let u=jp(h),d=await s(o,a,ln({peerId:cn,...l}),zc(u,"announce",a,c));return typeof d=="number"||d!==void 0&&"stopAnnouncing"in d?d:{nextAnnounceMs:d?.nextAnnounceMs??n,reannounceOnDisconnect:d?.reannounceOnDisconnect??e}},...r?{deactivate:(o,a,c,l)=>{let h=jp(l);return r(o,a,zc(h,"announce",a,c))}}:{}});var Jp=Np(n=>n.socket),O2=5,C_="x",P_="EVENT",{secretKey:F2,publicKey:B2}=Sp.keygen(),z2=Cs(B2),H2={},R_=250,Yr=6e4,G2=9e5,Qp=5333,Hc=new WeakMap,Wu=Jp.scoped(),Zp=new WeakSet,V2=n=>{let e=Hc.get(n),t=Math.min(e?.delayMs?Math.max(Yr,e.delayMs*2):Yr,G2);return Hc.set(n,{delayMs:t,untilMs:Date.now()+t}),t},Gc=n=>{let e=Hc.get(n);if(!e)return 0;let t=e.untilMs-Date.now();return t>0?t:0},Vu=n=>({nextAnnounceMs:n}),W2={stopAnnouncing:!0},X2=n=>Zp.has(n)?!1:(Zp.add(n),Hc.delete(n),n.close?.(),!0),I_=()=>Math.floor(Date.now()/1e3),L_=n=>H2[n]??=Cu(n,1e4)+2e4,q2=async(n,e)=>{let t={kind:L_(n),tags:[[C_,n]],created_at:I_(),content:e,pubkey:z2},i=await qr("SHA-256",ln([0,t.pubkey,t.created_at,t.kind,t.tags,t.content]));return ln([P_,{...t,id:Cs(i),sig:Cs(await Sp.signAsync(i,F2))}])};var Di={},D_=n=>{n.flushWaiters.forEach(e=>e()),n.flushWaiters.clear()},Y2=(n,e,t)=>{let i=Di[n.url]??={subIds:[],topics:new Map,updateTimer:null,flushWaiters:new Set,retryTimer:null,retryMs:Qp,pendingEose:new Set,requestedAt:0};i.topics.set(e,t),N_(n,i)},$2=(n,e)=>{let t=Di[n.url];t&&(t.topics.delete(e),delete Wu.forRelay(n)[e],t.topics.size===0?(t.retryTimer!==null&&clearTimeout(t.retryTimer),t.updateTimer!==null&&(clearTimeout(t.updateTimer),t.updateTimer=null),D_(t),t.subIds.forEach(i=>n.send(ln(["CLOSE",i]))),delete Di[n.url]):N_(n,t))},N_=(n,e)=>{e.updateTimer===null&&(e.updateTimer=setTimeout(()=>{e.updateTimer=null;try{k_(n)}finally{D_(e)}},0))},j2=n=>{let e=Di[n.url];return!e||e.updateTimer===null?Promise.resolve():new Promise(t=>e.flushWaiters.add(t))},k_=n=>{let e=Di[n.url];if(!e||e.topics.size===0)return;let t=[...e.topics.keys()],i=[],s=I_();for(let r=0;r<t.length;r+=R_)i.push(t.slice(r,r+R_));for(;e.subIds.length>i.length;){let r=e.subIds.pop();r&&n.send(ln(["CLOSE",r]))}e.pendingEose.clear(),e.requestedAt=Date.now(),i.forEach((r,o)=>{let a=e.subIds[o]??=ti(64);e.pendingEose.add(a),n.send(ln(["REQ",a,{kinds:[...new Set(r.map(L_))],since:s,"#x":r}]))})},U_=n=>{let e=Di[n.url];if(e&&e.topics.size>0&&!n.isClosed){if(Gc(n)>0){B_(n,!0);return}e.retryTimer!==null&&(clearTimeout(e.retryTimer),e.retryTimer=null),k_(n),O_(n)}},O_=n=>{Object.entries(Wu.forRelay(n)).forEach(([e,t])=>{F_(n,e,t,!0)})},F_=async(n,e,t,i)=>{if(Zp.has(n)||n.isClosed)return i?W2:void 0;let s=Gc(n);if(s>0||n.socket.readyState!==1)return i?Vu(Math.max(Yr,s)):void 0;let r=await q2(e,i?ln({...is(t),nonce:ti(8)}):t);if(i&&!Di[n.url]?.topics.has(e))return Vu(Yr);if(Gc(n)>0||n.isClosed||n.socket.readyState!==1)return i?Vu(Yr):void 0;if(n.send(r),i)return Vu(Yr)},B_=(n,e)=>{let t=Di[n.url];if(!t||t.retryTimer!==null&&!e)return;t.retryTimer!==null&&clearTimeout(t.retryTimer);let i=e?Gc(n):t.retryMs;t.retryMs=Math.min(t.retryMs*2,Yr),t.retryTimer=setTimeout(()=>{t.retryTimer=null,U_(n)},Math.max(i,Qp))},z_=Kp({init:n=>Pp(n,K2,O2,!0).map(e=>{let t=Jp.register(e,()=>Dp(e,i=>{let[s,r,o,a]=is(i);if(s!==P_){let c=`${zt}: relay failure from ${t.url} - `,l=s==="CLOSED"&&typeof o=="string"?o:a,h=s==="OK"&&o===!1,u=(h||s==="CLOSED")&&l?.startsWith("rate-limited:"),d=h&&l?.startsWith("duplicate:"),f=l&&/^(blocked|restricted|auth-required|pow):/.test(l);if(s==="OK"&&o===!0&&Gc(t)===0&&Hc.delete(t),(h||s==="CLOSED")&&f&&!X2(t))return;if(u)V2(t);else if(s==="EOSE"){let g=Di[t.url];g?.pendingEose.delete(r)&&g.pendingEose.size===0&&(g.retryMs=Qp,g.retryTimer!==null&&(clearTimeout(g.retryTimer),g.retryTimer=null),Date.now()-g.requestedAt>=1e3&&O_(t))}s==="CLOSED"&&!f&&B_(t,!!u),!d&&n.relayConfig?.warnOnRelayFailure!==!1&&(s==="NOTICE"?console.warn(c+r):(h||s==="CLOSED")&&console.warn(c+l));return}if(o&&typeof o=="object"&&"content"in o){let c=Di[t.url];if(c?.subIds.includes(r)&&o.tags){let l=o.tags.find(h=>h[0]===C_);l?.[1]&&c.topics.get(l[1])?.(l[1],o.content)}}},()=>U_(t)));return t.ready}),subscribeTopic:(n,e,t,i)=>{let s=(o,a)=>{t(o,a)};Y2(n,e,s);let r=()=>{Di[n.url]?.topics.get(e)===s&&$2(n,e)};return i.kind==="root"?j2(n).then(()=>r):r},publishTopic:(n,e,t,{kind:i})=>{let s=typeof t=="string"?t:ln(t);return i==="announce"&&(Wu.forRelay(n)[e]=s),F_(n,e,s,i==="announce")},unpublishTopic:(n,e)=>{delete Wu.forRelay(n)[e]}}),oL=Jp.getSockets,K2=["0x-nostr-relay.fly.dev","bendernostur.duckdns.org:8443","cdn.satellite.earth","nos.lol","nostr.chaima.info","nostr.christiansass.de","nostr.rblb.it","nostr.red5d.dev","nostr.robosats.org","nostr.stakey.net","nostrcity-club.fly.dev","relay-dev.gulugulu.moe","relay.aarpia.com","relay.agentry.com","relay.bitmacro.cloud","relay.bullishbounty.com","relay.degmods.com","relay.flashapp.me","relay.grigic.org","relay.hackshed.dev","relay.kaleidoswap.com","relay.layer.systems","relay.nostr.blockhenge.com","relay.nostr.dev.br","relay.nostrmap.net","relay.novospes.com","relay.piazza.today","relay.routstr.com","testr.nymble.world"].map(n=>"wss://"+n);var J2="lounge.aykutkilic.github.io/v1",Q2=["wss://nos.lol","wss://relay.damus.io","wss://relay.primal.net","wss://nostr.mom","wss://offchain.pub","wss://0x-nostr-relay.fly.dev"],H_=new Set(nu),G_=new Set(er),V_=new Set(tr);function Vc(n,e,t){let i=n.size.w/2-.7,s=n.size.d/2-.7;return[Math.max(-i,Math.min(i,e)),Math.max(-s,Math.min(s,t))]}function em(n,e,t){let i=Date.now();return n.tokens=Math.min(t,n.tokens+(i-n.at)/1e3*e),n.at=i,n.tokens<1?!1:(n.tokens-=1,!0)}function eR(n){if(!n||typeof n!="object")return null;let e=Qi[n.room]?n.room:null,t={room:e,avatar:G_.has(n.avatar)?n.avatar:er[0],color:V_.has(n.color)?n.color:tr[0],x:0,z:0,seat:null,seatAt:0,drink:null,snack:null,reading:!1,books:[]};if(!e)return t;t.reading=n.reading===!0;let i=Qi[e],s=Zf(i);if(Array.isArray(n.books))for(let o of n.books.slice(0,4)){if(!o||!s.includes(o.id)||!["reading","left"].includes(o.mode)||!Number.isFinite(o.since))continue;let[a,c]=Number.isFinite(o.x)&&Number.isFinite(o.z)?Vc(i,o.x,o.z):[0,0];t.books.push({id:o.id,mode:o.mode,x:a,z:c,since:o.since})}Number.isFinite(n.x)&&Number.isFinite(n.z)&&([t.x,t.z]=Vc(i,n.x,n.z)),Kf(i,n.seat)&&(t.seat=n.seat,t.seatAt=Number.isFinite(n.seatAt)?n.seatAt:0);let r=ir(i);for(let o of["drink","snack"]){let a=n[o];a&&nr[a.item]?.kind===o&&r.includes(a.item)&&Number.isFinite(a.at)&&(t[o]={item:a.item,at:a.at})}return t}var Xu=class extends EventTarget{constructor(){super(),this.id=cn,this.me=null,this.peers=new Map,this.timers={drink:0,snack:0},this.emojiBucket={tokens:6,at:Date.now()},this.books=new Map,this.shelvedAt=new Map,this.collecting=new Set,this.maidRound=Math.floor(Date.now()/Jf),setInterval(()=>this.maidTick(),2e3),this.room=z_({appId:J2,maxReceiveBytes:4096,relayConfig:{urls:Q2}},"lounge"),this.stateAction=this.room.makeAction("state"),this.eventAction=this.room.makeAction("ev"),this.room.onPeerJoin=e=>{console.info("[lounge] peer connected",e),this.peerOf(e),this.me&&this.stateAction.send(this.me,{target:e})},this.room.onPeerLeave=e=>{console.info("[lounge] peer left",e);let t=this.peers.get(e);this.peers.delete(e),t?.state?.room&&t.state.room===this.me?.room&&(this.emit("left",{id:e}),this.deriveBooks())},this.stateAction.onMessage=(e,{peerId:t})=>this.onState(t,e),this.eventAction.onMessage=(e,{peerId:t})=>this.onEvent(t,e),queueMicrotask(()=>this.emit("open"))}emit(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t}))}on(e,t){this.addEventListener(e,i=>t(i.detail))}peerOf(e){let t=this.peers.get(e);return t||(t={state:null,emoji:{tokens:8,at:Date.now()},order:{tokens:3,at:Date.now()}},this.peers.set(e,t)),t}async counts(){let e={};for(let t of this.peers.values())t.state?.room&&(e[t.state.room]=(e[t.state.room]||0)+1);return this.me?.room&&(e[this.me.room]=(e[this.me.room]||0)+1),e}broadcast(){this.stateAction.send(this.me)}roommates(){return[...this.peers.entries()].filter(([,e])=>e.state?.room&&e.state.room===this.me?.room)}publicPeer(e,t){return{id:e,avatar:t.avatar,color:t.color,x:t.x,z:t.z,seat:t.seat,drink:t.drink,snack:t.snack,reading:t.reading}}send(e){let t=this.me?.room&&Qi[this.me.room];switch(e.t){case"join":{let i=Qi[e.room];if(!i)return this.emit("error",{code:"no-room"});if([...this.peers.values()].filter(a=>a.state?.room===e.room).length>=24)return this.emit("error",{code:"full"});this.clearItems();let[r,o]=Vc(i,(Math.random()-.5)*4,i.size.d/2-1.6-Math.random());this.me={room:e.room,avatar:G_.has(e.avatar)?e.avatar:er[0],color:V_.has(e.color)?e.color:tr[0],x:r,z:o,seat:null,seatAt:0,drink:null,snack:null,reading:!1,books:[]},this.broadcast(),this.books=new Map,this.deriveBooks(!0),this.emit("welcome",{id:this.id,room:e.room,peers:[this.publicPeer(this.id,this.me),...this.roommates().map(([a,c])=>this.publicPeer(a,c.state))],books:[...this.books.entries()].map(([a,c])=>({id:a,...c}))});break}case"leave":if(!this.me)return;this.clearItems(),this.me={...this.me,room:null,seat:null,drink:null,snack:null,reading:!1,books:[]},this.broadcast(),this.books=new Map;break;case"book":{if(!t||!Zf(t).includes(e.id))return;let i=Date.now(),s=this.me.books;if(e.mode==="reading"){let r=this.books.get(e.id);if(this.collecting.has(e.id)||r&&r.mode==="reading"&&r.by!==this.id)return this.emit("error",{code:"book-taken"});for(let o of s)o.mode==="reading"&&Object.assign(o,{mode:"left",x:this.me.x,z:this.me.z,since:i});this.me.books=s.filter(o=>o.id!==e.id).slice(-3),this.me.books.push({id:e.id,mode:"reading",x:this.me.x,z:this.me.z,since:i})}else if(e.mode==="left"){let r=s.find(o=>o.id===e.id);if(!r||!Number.isFinite(e.x)||!Number.isFinite(e.z))return;[r.x,r.z]=Vc(t,e.x,e.z),r.mode="left",r.since=i}else return;this.broadcast(),this.deriveBooks();break}case"move":{if(!t||!Number.isFinite(e.x)||!Number.isFinite(e.z))return;[this.me.x,this.me.z]=Vc(t,e.x,e.z),this.me.seat=null,this.broadcast(),this.emit("moved",{id:this.id,x:this.me.x,z:this.me.z});break}case"sit":{if(!t||!Kf(t,e.seat))return;if(this.roommates().some(([,i])=>i.state.seat===e.seat))return this.emit("error",{code:"seat-taken",seat:e.seat});this.me.seat=e.seat,this.me.seatAt=Date.now(),this.broadcast(),this.emit("sat",{id:this.id,seat:e.seat});break}case"reading":{let i=e.on===!0;if(!t||this.me.reading===i)return;this.me.reading=i,this.broadcast(),this.emit("reading",{id:this.id,on:i});break}case"emoji":{if(!t||!H_.has(e.e)||!em(this.emojiBucket,2,6))return;this.eventAction.send({t:"emoji",e:e.e}),this.emit("emoji",{id:this.id,e:e.e});break}case"order":{let i=nr[e.item];if(!t||!i||!ir(t).includes(e.item))return;let s=Date.now(),r=this.me[i.kind];if(r&&s-r.at<6e3)return this.emit("error",{code:"slow-down"});this.me[i.kind]={item:e.item,at:s},clearTimeout(this.timers[i.kind]),this.timers[i.kind]=setTimeout(()=>{!this.me||this.me[i.kind]?.at!==s||(this.me[i.kind]=null,this.broadcast(),this.emit("finished",{id:this.id,kind:i.kind}))},iu[i.kind]),this.eventAction.send({t:"order",item:e.item}),this.broadcast(),this.emit("order",{id:this.id,item:e.item,kind:i.kind,at:s});break}}}clearItems(){clearTimeout(this.timers.drink),clearTimeout(this.timers.snack)}onState(e,t){let i=eR(t);if(!i)return;let s=this.peerOf(e),r=s.state;s.state=i;let o=this.me?.room;if(!o)return;let a=r?.room===o,c=i.room===o;if(!a&&c){this.emit("joined",{peer:this.publicPeer(e,i)}),i.seat&&this.resolveSeat(e,i),this.deriveBooks();return}if(a&&!c){this.emit("left",{id:e}),this.deriveBooks();return}if(c){i.seat&&i.seat!==r.seat?(this.emit("sat",{id:e,seat:i.seat}),this.resolveSeat(e,i)):!i.seat&&(r.seat||i.x!==r.x||i.z!==r.z)&&this.emit("moved",{id:e,x:i.x,z:i.z});for(let l of["drink","snack"])r[l]&&!i[l]&&this.emit("finished",{id:e,kind:l});r.reading!==i.reading&&this.emit("reading",{id:e,on:i.reading}),this.deriveBooks()}}resolveSeat(e,t){if(!this.me.seat||this.me.seat!==t.seat||!(t.seatAt<this.me.seatAt||t.seatAt===this.me.seatAt&&e<this.id))return;let s=this.me.seat;this.me.seat=null,this.broadcast(),this.emit("error",{code:"seat-taken",seat:s})}deriveBooks(e=!1){let t=new Map;if(this.me?.room){let i=[[this.id,this.me],...this.roommates().map(([s,r])=>[s,r.state])];for(let[s,r]of i)for(let o of r.books||[]){if(o.since<=(this.shelvedAt.get(o.id)||0))continue;let a=t.get(o.id);(!a||o.mode==="reading"&&(a.mode!=="reading"||o.since<a.since)||o.mode==="left"&&a.mode==="left"&&o.since>a.since)&&t.set(o.id,{by:s,mode:o.mode,x:o.x,z:o.z,since:o.since})}}if(!e){for(let[i,s]of t){let r=this.books.get(i);(!r||r.by!==s.by||r.mode!==s.mode||r.x!==s.x||r.z!==s.z)&&this.emit("book",{id:i,...s})}for(let i of this.books.keys())t.has(i)||this.emit("book",{id:i,by:null,mode:null})}this.books=t}maidTick(){let e=Math.floor(Date.now()/Jf);if(e===this.maidRound||!this.me?.room)return;this.maidRound=e;let t=Date.now(),i=[...this.books.entries()].filter(([r,o])=>o.mode==="left"&&!this.collecting.has(r)&&t-o.since>_y).map(([r,o])=>({id:r,x:o.x,z:o.z})).sort((r,o)=>r.id<o.id?-1:1),s=ru(Qi[this.me.room],i);if(s){for(let r of i)this.collecting.add(r.id);this.emit("maid",{books:i}),setTimeout(()=>{let r=Date.now();for(let o of i)this.collecting.delete(o.id),this.shelvedAt.set(o.id,r);this.me?.books&&(this.me.books=this.me.books.filter(o=>!(o.mode==="left"&&i.some(a=>a.id===o.id))),this.broadcast()),this.deriveBooks()},s.duration*1e3)}}onEvent(e,t){let i=this.peerOf(e);if(!(!t||typeof t!="object"||!this.me?.room||i.state?.room!==this.me.room)){if(t.t==="emoji")H_.has(t.e)&&em(i.emoji,3,8)&&this.emit("emoji",{id:e,e:t.e});else if(t.t==="order"){let s=nr[t.item];s&&ir(Qi[this.me.room]).includes(t.item)&&em(i.order,.5,3)&&this.emit("order",{id:e,item:t.item,kind:s.kind,at:Date.now()})}}}};function qu(n){let e=new Map,t=new Map,i=n.clone();return W_(n,i,function(s,r){e.set(r,s),t.set(s,r)}),i.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),i}function W_(n,e,t){t(n,e);for(let i=0;i<n.children.length;i++)W_(n.children[i],e.children[i],t)}var Yu=class extends $i{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new am(t)}),this.register(function(t){return new cm(t)}),this.register(function(t){return new ym(t)}),this.register(function(t){return new xm(t)}),this.register(function(t){return new _m(t)}),this.register(function(t){return new hm(t)}),this.register(function(t){return new um(t)}),this.register(function(t){return new dm(t)}),this.register(function(t){return new fm(t)}),this.register(function(t){return new om(t)}),this.register(function(t){return new pm(t)}),this.register(function(t){return new lm(t)}),this.register(function(t){return new gm(t)}),this.register(function(t){return new mm(t)}),this.register(function(t){return new sm(t)}),this.register(function(t){return new $u(t,dt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new $u(t,dt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new vm(t)})}load(e,t,i,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=ws.extractUrlBase(e);o=ws.resolveURL(l,this.path)}else o=ws.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Bo(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===j_){try{o[dt.KHR_BINARY_GLTF]=new bm(e)}catch(u){s&&s(u);return}r=JSON.parse(o[dt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Rm(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case dt.KHR_MATERIALS_UNLIT:o[u]=new rm;break;case dt.KHR_DRACO_MESH_COMPRESSION:o[u]=new Mm(r,this.dracoLoader);break;case dt.KHR_TEXTURE_TRANSFORM:o[u]=new wm;break;case dt.KHR_MESH_QUANTIZATION:o[u]=new Sm;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(i,s)}parseAsync(e,t){let i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}};function tR(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}function tn(n,e,t){let i=n.json.materials[e];return i.extensions&&i.extensions[t]?i.extensions[t]:null}var dt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},sm=class{constructor(e){this.parser=e,this.name=dt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){let r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,s=t.cache.get(i);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new pe(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],kn);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Ir(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new xn(h),l.distance=u;break;case"spot":l=new sc(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),ss(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return i._getNodeRef(t.cache,a,c)})}},rm=class{constructor(){this.name=dt.KHR_MATERIALS_UNLIT}getMaterialType(){return Rt}extendParams(e,t,i){let s=[];e.color=new pe(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],kn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,bt))}return Promise.all(s)}},om=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=tn(this.parser,e,this.name);return i===null||i.emissiveStrength!==void 0&&(t.emissiveIntensity=i.emissiveStrength),Promise.resolve()}},am=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return tn(this.parser,e,this.name)!==null?yn:null}extendMaterialParams(e,t){let i=tn(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];if(i.clearcoatFactor!==void 0&&(t.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){let r=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new oe(r,r)}return Promise.all(s)}},cm=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return tn(this.parser,e,this.name)!==null?yn:null}extendMaterialParams(e,t){let i=tn(this.parser,e,this.name);return i===null||(t.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}},lm=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return tn(this.parser,e,this.name)!==null?yn:null}extendMaterialParams(e,t){let i=tn(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return i.iridescenceFactor!==void 0&&(t.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(t.iridescenceIOR=i.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),i.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(s)}},hm=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_SHEEN}getMaterialType(e){return tn(this.parser,e,this.name)!==null?yn:null}extendMaterialParams(e,t){let i=tn(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];if(t.sheenColor=new pe(0,0,0),t.sheenRoughness=0,t.sheen=1,i.sheenColorFactor!==void 0){let r=i.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],kn)}return i.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",i.sheenColorTexture,bt)),i.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(s)}},um=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return tn(this.parser,e,this.name)!==null?yn:null}extendMaterialParams(e,t){let i=tn(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return i.transmissionFactor!==void 0&&(t.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",i.transmissionTexture)),Promise.all(s)}},dm=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_VOLUME}getMaterialType(e){return tn(this.parser,e,this.name)!==null?yn:null}extendMaterialParams(e,t){let i=tn(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",i.thicknessTexture)),t.attenuationDistance=i.attenuationDistance||1/0;let r=i.attenuationColor||[1,1,1];return t.attenuationColor=new pe().setRGB(r[0],r[1],r[2],kn),Promise.all(s)}},fm=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_IOR}getMaterialType(e){return tn(this.parser,e,this.name)!==null?yn:null}extendMaterialParams(e,t){let i=tn(this.parser,e,this.name);return i===null||(t.ior=i.ior!==void 0?i.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},pm=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return tn(this.parser,e,this.name)!==null?yn:null}extendMaterialParams(e,t){let i=tn(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",i.specularTexture));let r=i.specularColorFactor||[1,1,1];return t.specularColor=new pe().setRGB(r[0],r[1],r[2],kn),i.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",i.specularColorTexture,bt)),Promise.all(s)}},mm=class{constructor(e){this.parser=e,this.name=dt.EXT_MATERIALS_BUMP}getMaterialType(e){return tn(this.parser,e,this.name)!==null?yn:null}extendMaterialParams(e,t){let i=tn(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",i.bumpTexture)),Promise.all(s)}},gm=class{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return tn(this.parser,e,this.name)!==null?yn:null}extendMaterialParams(e,t){let i=tn(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return i.anisotropyStrength!==void 0&&(t.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(t.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",i.anisotropyTexture)),Promise.all(s)}},ym=class{constructor(e){this.parser=e,this.name=dt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},xm=class{constructor(e){this.parser=e,this.name=dt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=i.textureLoader;if(a.uri){let l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return i.loadTextureImage(e,o.source,c)}},_m=class{constructor(e){this.parser=e,this.name=dt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=i.textureLoader;if(a.uri){let l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return i.loadTextureImage(e,o.source,c)}},$u=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},vm=class{constructor(e){this.name=dt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let s=t.meshes[i.mesh];for(let l of s.primitives)if(l.mode!==pi.TRIANGLES&&l.mode!==pi.TRIANGLE_STRIP&&l.mode!==pi.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=i.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let g of u){let x=new Ye,m=new I,p=new wt,y=new I(1,1,1),v=new wi(g.geometry,g.material,d);for(let w=0;w<d;w++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,w),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,w),c.SCALE&&y.fromBufferAttribute(c.SCALE,w),v.setMatrixAt(w,x.compose(m,p,y));let _=null;for(let w in c)if(w==="_COLOR_0"){let M=c[w];v.instanceColor=new ms(M.array,M.itemSize,M.normalized)}else if(w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"){if(_===null){let R=v.geometry;_=new yt,_.name=R.name;for(let b in R.attributes)_.setAttribute(b,R.attributes[b]);for(let b in R.morphAttributes)_.morphAttributes[b]=R.morphAttributes[b];R.index!==null&&_.setIndex(R.index),_.morphTargetsRelative=R.morphTargetsRelative;for(let b of R.groups)_.addGroup(b.start,b.count,b.materialIndex);R.boundingBox!==null&&(_.boundingBox=R.boundingBox.clone()),R.boundingSphere!==null&&(_.boundingSphere=R.boundingSphere.clone()),_.drawRange.start=R.drawRange.start,_.drawRange.count=R.drawRange.count,_.userData=Object.assign({},R.userData),v.geometry=_}let M=c[w];_.setAttribute(w,new ms(M.array,M.itemSize,M.normalized))}Bt.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),f.push(v)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},j_="glTF",Wc=12,X_={JSON:1313821514,BIN:5130562},bm=class{constructor(e){this.name=dt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Wc),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==j_)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Wc,r=new DataView(e,Wc),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===X_.JSON){let l=new Uint8Array(e,Wc+o,a);this.content=i.decode(l)}else if(c===X_.BIN){let l=Wc+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Mm=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=dt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=Em[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=Em[h]||h.toLowerCase();if(o[h]!==void 0){let d=i.accessors[e.attributes[h]],f=oa[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let g in f.attributes){let x=f.attributes[g],m=c[g];m!==void 0&&(x.normalized=m)}u(f)},a,l,kn,d)})})}},wm=class{constructor(){this.name=dt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let i=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*i,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*i,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Sm=class{constructor(){this.name=dt.KHR_MESH_QUANTIZATION}},ju=class extends Yi{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=s-t,u=(i-t)/h,d=u*u,f=d*u,g=e*l,x=g-l,m=-2*f+3*d,p=f-d,y=1-m,v=p-d+u;for(let _=0;_!==a;_++){let w=o[x+_+a],M=o[x+_+c]*h,R=o[g+_+a],b=o[g+_]*h;r[_]=y*w+v*M+m*R+p*b}return r}},nR=new wt,Tm=class extends ju{interpolate_(e,t,i,s){let r=super.interpolate_(e,t,i,s);return nR.fromArray(r).normalize().toArray(r),r}},pi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},oa={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},q_={9728:Kt,9729:Qt,9984:ah,9985:Wo,9986:Ur,9987:Ri},Y_={33071:oi,33648:To,10497:bi},tm={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Em={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},pr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},iR={CUBICSPLINE:void 0,LINEAR:Tr,STEP:Sr},nm={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function sR(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new st({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ji})),n.DefaultMaterial}function $r(n,e,t){for(let i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function ss(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function rR(n,e,t){let i=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);let o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(i){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):n.attributes.position;o.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):n.attributes.normal;a.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):n.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return i&&(n.morphAttributes.position=h),s&&(n.morphAttributes.normal=u),r&&(n.morphAttributes.color=d),n.morphTargetsRelative=!0,n})}function oR(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function aR(n){let e,t=n.extensions&&n.extensions[dt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+im(t.attributes):e=n.indices+":"+im(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+im(n.targets[i]);return e}function im(n){let e="",t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Am(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function cR(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var lR=new Ye,Rm=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new tR,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);s=i&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&o<98?this.textureLoader=new tc(this.options.manager):this.textureLoader=new rc(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Bo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return $r(r,a,s),ss(a,s),Promise.all(i._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let s=i.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let s=e(t[i]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){let i=e+":"+t,s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[dt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){i.load(ws.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){let t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=tm[s.type],a=oa[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new Xt(l,o,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=tm[s.type],l=oa[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=s.byteOffset||0,f=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,x,m;if(f&&f!==u){let p=Math.floor(d/f),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,v=t.cache.get(y);v||(x=new l(a,p*f,s.count*f/h),v=new Ar(x,f/h),t.cache.add(y,v)),m=new Gs(v,c,d%f/h,g)}else a===null?x=new l(s.count*c):x=new l(a,d,s.count*c),m=new Xt(x,c,g);if(s.sparse!==void 0){let p=tm.SCALAR,y=oa[s.sparse.indices.componentType],v=s.sparse.indices.byteOffset||0,_=s.sparse.values.byteOffset||0,w=new y(o[1],v,s.sparse.count*p),M=new l(o[2],_,s.sparse.count*c);a!==null&&(m=new Xt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,b=w.length;R<b;R++){let T=w[R];if(m.setX(T,M[R*c]),c>=2&&m.setY(T,M[R*c+1]),c>=3&&m.setZ(T,M[R*c+2]),c>=4&&m.setW(T,M[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=i.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){let s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return h.magFilter=q_[d.magFilter]||Qt,h.minFilter=q_[d.minFilter]||Ri,h.wrapS=Y_[d.wrapS]||bi,h.wrapT=Y_[d.wrapT]||bi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Kt&&h.minFilter!==Qt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=s.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=i.getDependency("bufferView",o.bufferView).then(function(u){l=!0;let d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(x){let m=new un(x);m.needsUpdate=!0,d(m)}),t.load(ws.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),ss(u,o),u.userData.mimeType=o.mimeType||cR(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,i,s){let r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[dt.KHR_TEXTURE_TRANSFORM]){let a=i.extensions!==void 0?i.extensions[dt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[dt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,i=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+i.uuid,c=this.cache.get(a);c||(c=new Xi,En.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,c.sizeAttenuation=!1,this.cache.add(a,c)),i=c}else if(e.isLine){let a="LineBasicMaterial:"+i.uuid,c=this.cache.get(a);c||(c=new Wi,En.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,this.cache.add(a,c)),i=c}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=i.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(i))),i=c}e.material=i}getMaterialType(){return st}loadMaterial(e){let t=this,i=this.json,s=this.extensions,r=i.materials[e],o,a={},c=r.extensions||{},l=[];if(c[dt.KHR_MATERIALS_UNLIT]){let u=s[dt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new pe(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],kn),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,bt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Ct);let h=r.alphaMode||nm.OPAQUE;if(h===nm.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===nm.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Rt&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new oe(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Rt&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Rt){let u=r.emissiveFactor;a.emissive=new pe().setRGB(u[0],u[1],u[2],kn)}return r.emissiveTexture!==void 0&&o!==Rt&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,bt)),Promise.all(l).then(function(){let u=new o(a);return r.name&&(u.name=r.name),ss(u,r),t.associations.set(u,{materials:e}),r.extensions&&$r(s,u,r),u})}createUniqueName(e){let t=Ft.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[dt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return $_(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],h=aR(l),u=s[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[dt.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=$_(new yt,l,t),l.mode===pi.TRIANGLE_STRIP?d=d.then(f=>op(f,mc)):l.mode===pi.TRIANGLE_FAN&&(d=d.then(f=>op(f,Yo))),s[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?sR(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let x=h[f],m=o[f],p,y=l[f];if(m.mode===pi.TRIANGLES||m.mode===pi.TRIANGLE_STRIP||m.mode===pi.TRIANGLE_FAN||m.mode===void 0){let v=r.isSkinnedMesh===!0,_=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");v&&_===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=v&&_?new Da(x,y):new ce(x,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(m.mode===pi.LINES)p=new ys(x,y);else if(m.mode===pi.LINE_STRIP)p=new gs(x,y);else if(m.mode===pi.LINE_LOOP)p=new ka(x,y);else if(m.mode===pi.POINTS)p=new xs(x,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&oR(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),ss(p,r),m.extensions&&$r(s,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&$r(s,u[0],r),u[0];let d=new he;r.extensions&&$r(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t,i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new rn(xt.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new Ys(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),ss(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){let r=s.pop(),o=s,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let d=new Ye;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Na(a,c)})}loadAnimation(e){let t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],g=s.samplers[f.sampler],x=f.target,m=x.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,y=s.parameters!==void 0?s.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",y)),l.push(g),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],x=u[3],m=u[4],p=[];for(let v=0,_=d.length;v<_;v++){let w=d[v],M=f[v],R=g[v],b=x[v],T=m[v];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();let P=i._createAnimationTracks(w,M,R,b,T);if(P)for(let U=0;U<P.length;U++)p.push(P[U])}let y=new ec(r,void 0,p);return ss(y,s),y})}createNodeMesh(e){let t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){let o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){let t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,h=a.length;l<h;l++)o.push(i.getDependency("node",a[l]));let c=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,lR)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,g=u[0];h.pivot=new I().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new Lo:l.length>1?h=new he:l.length===1?h=l[0]:h=new Bt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),ss(h,r),r.extensions&&$r(i,h,r),r.matrix!==void 0){let u=new Ye;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],s=this,r=new he;i.name&&(r.name=s.createUniqueName(i.name)),ss(r,i),i.extensions&&$r(t,r,i);let o=i.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++){let d=c[h];d.parent!==null?r.add(qu(d)):r.add(d)}let l=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof En||d instanceof un)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,i,s,r){let o=[],a=e.name?e.name:e.uuid,c=[];function l(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}pr[r.path]===pr.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(a);let h;switch(pr[r.path]){case pr.weights:h=vs;break;case pr.rotation:h=bs;break;case pr.translation:case pr.scale:h=qs;break;default:i.itemSize===1?h=vs:h=qs;break}let u=s.interpolation!==void 0?iR[s.interpolation]:Tr,d=this._getArrayFromAccessor(i);for(let f=0,g=c.length;f<g;f++){let x=new h(c[f]+"."+pr[r.path],t.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=Am(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let s=this instanceof bs?Tm:ju;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function hR(n,e,t){let i=e.attributes,s=new Un;if(i.POSITION!==void 0){let a=t.json.accessors[i.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new I(c[0],c[1],c[2]),new I(l[0],l[1],l[2])),a.normalized){let h=Am(oa[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new I,c=new I;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let x=Am(oa[d.componentType]);c.multiplyScalar(x)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;let o=new Gn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function $_(n,e,t){let i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){n.setAttribute(a,c)})}for(let o in i){let a=Em[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){let o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return ut.workingColorSpace!==kn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ut.workingColorSpace}" not supported.`),ss(n,e),hR(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?rR(n,e.targets,t):n})}var jr={scene:null,wait:[]};new Yu().load(new URL("../models/hand/Hand_Nails_R.gltf",import.meta.url).href,n=>{jr.scene=n.scene;for(let e of jr.wait.splice(0))e()},void 0,()=>{jr.wait.length=0});function Q_(n){jr.scene?n():jr.wait.push(n)}var uR=["Index","Middle","Ring","Little"].map(n=>["Proximal","Intermediate","Distal"].map(e=>`${n}_${e}_R`)),dR=["Thumb_Metacarpal_R","Thumb_Proximal_R","Thumb_Distal_R"],fR=[1.45,1.7,1.15],Ku={open:[[0,0],[0,0],[0,0]],fist:[[-.5,-.2],[-.42,.45],[0,.65]],pinch:[[-.6,-.4],[0,.8],[0,.4]],flat:[[-.25,-.6],[0,.2],[0,.2]]},K_=(n,e,t)=>Ku[n].map((i,s)=>[i[0]+(Ku[e][s][0]-i[0])*t,i[1]+(Ku[e][s][1]-i[1])*t]),Cm={hold:{fingers:[.42,.48,.52,.56],thumb:K_("open","flat",.85)},pinch:{fingers:[.45,.6,.8,.9],thumb:Ku.pinch},relaxed:{fingers:[.15,.18,.2,.24],thumb:K_("open","flat",.5)}},Pm=new I(-.026,0,-.058).multiplyScalar(.875),ev=new I(-.0383,.0247,-.106).multiplyScalar(.875),Z_=new on,J_=new wt;function tv(n){if(!jr.scene)return null;let e=qu(jr.scene);e.position.z=-.0272;let t=new he;t.add(e),t.scale.setScalar(.875);let i={};return e.traverse(s=>{s.isBone&&(i[s.name]=s,s.userData.rest=s.quaternion.clone()),s.isSkinnedMesh&&(s.material=n,s.frustumCulled=!1,s.castShadow=!1,s.receiveShadow=!1)}),{root:t,fingers:uR.map(s=>s.map(r=>i[r])),thumb:dR.map(s=>i[s])}}function nv(n,e,t=e,i=0){n.fingers.forEach((s,r)=>{let o=e.fingers[r]+(t.fingers[r]-e.fingers[r])*i;s.forEach((a,c)=>{a&&a.quaternion.copy(a.userData.rest).multiply(J_.setFromEuler(Z_.set(0,0,.06+o*fR[c])))})}),n.thumb.forEach((s,r)=>{if(!s)return;let o=e.thumb[r][0]+(t.thumb[r][0]-e.thumb[r][0])*i,a=e.thumb[r][1]+(t.thumb[r][1]-e.thumb[r][1])*i;s.quaternion.copy(s.userData.rest).multiply(J_.setFromEuler(Z_.set(o,0,a)))})}function iv(n){return new yn({color:n,roughness:.55,sheen:.6,sheenColor:new pe("#ff9a8a"),sheenRoughness:.5})}var Zu=["#f3cfb3","#e0ac8a","#c68863","#9a6440","#5e3a24"];var pR="lounge-suitcase",Im="books",Lm=new Map,sv=null;function mR(){return sv??=new Promise(n=>{try{let e=indexedDB.open(pR,1);e.onupgradeneeded=()=>e.result.createObjectStore(Im,{keyPath:"id"}),e.onsuccess=()=>n(e.result),e.onerror=()=>n(null)}catch{n(null)}}),sv}async function Dm(n,e){let t=await mR();return t?new Promise((i,s)=>{let r=t.transaction(Im,n),o=e(r.objectStore(Im));r.oncomplete=()=>i(o?.result??o),r.onerror=()=>s(r.error)}):e(null)}async function ov(){return[...await Dm("readonly",e=>e?e.getAll():[...Lm.values()])].sort((e,t)=>e.addedAt-t.addedAt)}async function av(n){await Dm("readwrite",e=>e?e.put(n):Lm.set(n.id,n))}async function cv(n){await Dm("readwrite",e=>e?e.delete(n):Lm.delete(n))}async function lv(n,e){if(n.lastPage=e,n.libraryId){try{localStorage.setItem(`lounge-lib-${n.libraryId}`,String(e))}catch{}return}await av(n)}var Ju=null,hv=()=>new URL("vendor/pdfjs/",document.baseURI).href;async function gR(){return Ju||(Ju=await import("./chunk-XMHCVTSF.js"),Ju.GlobalWorkerOptions.workerSrc=`${hv()}build/pdf.worker.min.mjs`),Ju}async function uv(n){let{getDocument:e}=await gR(),t=hv();return e({data:new Uint8Array(await n.arrayBuffer()),cMapUrl:`${t}cmaps/`,cMapPacked:!0,standardFontDataUrl:`${t}standard_fonts/`,wasmUrl:`${t}wasm/`,iccUrl:`${t}iccs/`})}var yR=n=>n.type==="application/pdf"||/\.pdf$/i.test(n.name);async function dv(n){let e=0;for(let t of n)if(yR(t))try{let i=await uv(t),s=await i.promise,r=(await s.getPage(1)).getViewport({scale:1}),o=t.name.replace(/\.pdf$/i,"").replace(/[_-]+/g," ").trim()||"Untitled";await av({id:crypto.randomUUID(),name:o,pages:s.numPages,pageW:r.width,pageH:r.height,leather:ip[es(o)%ip.length],lastPage:1,addedAt:Date.now(),blob:t}),i.destroy(),e++}catch(i){console.warn("[lounge] could not read PDF",t.name,i)}return e}var rv="#f6f0e1";async function fv(n){return n.catalog?_R(n):xR(n)}async function xR(n){let e=await uv(n.blob),t=await e.promise,i=new Map,s=async o=>{if(!i.has(o)){let a=(await t.getPage(o)).getViewport({scale:1});i.set(o,{w:a.width,h:a.height})}return i.get(o)},r=async(o,a)=>{let c=await t.getPage(o),l=c.getViewport({scale:a}),h=document.createElement("canvas");return h.width=Math.ceil(l.width),h.height=Math.ceil(l.height),await c.render({canvas:h,viewport:l}).promise,c.cleanup(),h};return pv(n,t.numPages,s,r,()=>e.destroy())}function _R(n){let e=n.catalog.build(),t=async s=>({w:e[s-1].w,h:e[s-1].h}),i=async(s,r)=>{let o=e[s-1],a=document.createElement("canvas");a.width=Math.ceil(o.w*r),a.height=Math.ceil(o.h*r);let c=a.getContext("2d");return c.fillStyle="#ffffff",c.fillRect(0,0,a.width,a.height),c.scale(r,r),o.draw(c),a};return pv(n,e.length,t,i,()=>{})}function pv(n,e,t,i,s){let r=a=>{let c=Math.max(1,Math.min(4,Math.ceil(a.w/n.pageW-.15))),l=Math.max(1,Math.min(4,Math.ceil(a.h/n.pageH-.15)));return{cols:c,rows:l,large:c*l>1}};async function o(a,c,{fit:l="page"}={}){let h=await t(a),u=c.width,d=c.height,f=await i(a,l==="page"?Math.min(u/h.w,d/h.h):u/h.w),g=c.getContext("2d");g.fillStyle=rv,g.fillRect(0,0,u,d);let x=(u-f.width)/2,m=(d-f.height)/2;g.globalCompositeOperation="multiply",g.drawImage(f,x,m),g.globalCompositeOperation="source-over";let p=r(h);if(l==="page"&&p.large){g.strokeStyle="rgba(90,70,40,0.35)",g.setLineDash([10,8]),g.lineWidth=3;for(let y=1;y<p.cols;y++)g.beginPath(),g.moveTo(x+f.width*y/p.cols,m),g.lineTo(x+f.width*y/p.cols,m+f.height),g.stroke();for(let y=1;y<p.rows;y++)g.beginPath(),g.moveTo(x,m+f.height*y/p.rows),g.lineTo(x+f.width,m+f.height*y/p.rows),g.stroke();g.setLineDash([]),g.font=`${Math.round(u*.09)}px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif`,g.textAlign="right",g.textBaseline="bottom",g.fillText("\u{1F5FA}\uFE0F",u-u*.04,d-d*.02)}}return{pages:e,size:t,folds:r,paper:rv,renderInto:o,async renderLarge(a,c){let l=await t(a),h=c/Math.max(l.w,l.h),u=document.createElement("canvas");return u.width=Math.round(l.w*h),u.height=Math.round(l.h*h),await o(a,u,{fit:"width"}),u},close:s}}function mv(n,e){let t=e.build(),i=1;try{i=Number(localStorage.getItem(`lounge-lib-${n}`))||1}catch{}return{id:`lib:${n}`,libraryId:n,catalog:e,name:e.title,pages:t.length,pageW:t[0].w,pageH:t[0].h,leather:e.leather,lastPage:i}}var vR=.25,aa=28,rs=n=>n<.5?2*n*n:1-(-2*n+2)**2/2,Ni=n=>Math.min(1,Math.max(0,n)),bR=(n,e,t)=>{let i=Ni((t-n)/(e-n));return i*i*(3-2*i)};function Qu(){return new st({roughness:.92,emissive:"#ffffff",emissiveIntensity:.2})}function mr(n,e){n.material.map=e,n.material.emissiveMap=e}var ed=new wt().setFromEuler(new on(.45,.42,.1,"YXZ")),gv=new wt().setFromEuler(new on(.9,.2,.35,"YXZ"));function MR(n,e,t){let i=new he;i.scale.x=n;let s=new he;i.add(s);let r={outer:i,wrist:s,side:n,rig:null,materials:[]},o=iv(t),a=new st({color:e,roughness:.8,side:Ct}),c=new st({color:"#f6f2ea",roughness:.85,side:Ct});r.materials.push(o,a,c);let l=new I(0,-.22,1).normalize(),h=new wt().setFromUnitVectors(new I(0,1,0),l),u=new ce(new Rn(.036,.042,.46,20,1,!0),a);u.quaternion.copy(h),u.position.copy(l).multiplyScalar(.27);let d=new ce(new Rn(.031,.034,.045,20,1,!0),c);return d.quaternion.copy(h),d.position.copy(l).multiplyScalar(.035),s.add(u,d),r.geometries=[u.geometry,d.geometry],Q_(()=>{r.rig=tv(o),r.rig&&s.add(r.rig.root)}),r}var td=class{constructor({camera:e,onClose:t,onChange:i}){this.camera=e,this.onClose=t,this.onChange=i,this.active=!1,this.rig=new he,this.rig.visible=!1,e.add(this.rig),this.lamp=new xn("#ffe3bd",0,2.2,1.6),this.lamp.position.set(.22,.3,.05),e.add(this.lamp),this.look=new oe,this.lookTarget=new oe,this.ray=new Lr}async open(e,{handColor:t,skinColor:i="#e0ac8a",eye:s,yaw:r}){if(!this.active){this.active=!0,this.closing=!1,this.book=e,this.eye=s.clone(),this.yaw=r,this.returnPos=this.camera.position.clone(),this.returnQuat=this.camera.quaternion.clone(),this.returnFov=this.camera.fov,this.camT=0,this.openT=0,this.zoom=.6,this.flip=null,this.sheet=null,this.textures=new Map,this.disposables=[];try{this.pdf=await fv(e)}catch(o){console.warn("[lounge] could not open book",o),this.active=!1,this.onClose?.(!1);return}this.pages=this.pdf.pages,this.build(t,i),this.spread=Math.min(Math.floor((e.lastPage||1)/2),Math.floor(this.pages/2)),this.showSpread(),this.rig.visible=!0}}close(){!this.active||this.closing||(this.sheet&&(this.sheet.dir=-1),this.closing=!0,this.closeT=0)}finish(){this.rig.visible=!1,this.lamp.intensity=0;for(let e of this.disposables)e.dispose();for(let e of this.textures.values())e.front.dispose(),e.back.dispose();this.sheet&&this.disposeSheet(),this.rig.clear(),this.pdf?.close(),this.pdf=null,this.active=!1,this.onClose?.(!0)}track(...e){return this.disposables.push(...e),e[0]}build(e,t){let i=this.book,s=vR,r=s*Math.min(1,Math.max(.5,i.pageW/i.pageH));this.W=r,this.H=s,this.thick=.004+.022*Math.min(1,this.pages/400);let o=new he;this.rig.add(o),this.holder=o;let a=new he;a.rotation.x=-.5,o.add(a),this.group=a;let c=this.track(au(i.leather)),l=this.track(i.catalog?.magazine?pu(i.catalog,512):ou(i.leather,i.name,r/s));this.endpaper=this.track(Py(i.pages));let h=this.track(Iy()),u=this.track(new Vt(r+.01,s+.014,.004)),d=this.track(new st({map:c,roughness:.6})),f=this.track(new st({map:l,roughness:.55})),g=this.track(new st({map:this.endpaper,roughness:.8})),x=this.track(new st({map:h,color:"#f3ead6",roughness:.95})),m=this.track(new Rt({visible:!1})),p=this.track(new Vt(1,1,1)),y=w=>{let M=new he,R=new ce(u,w>0?[d,d,d,d,g,d]:[d,d,d,d,g,f]);R.position.x=w*(r+.01)/2;let b=new ce(p,[x,x,x,x,m,x]);b.position.x=w*r/2,M.add(R,b);let T=this.track(new Ut(r,s,24,1)),P=T.attributes.position;for(let O=0;O<P.count;O++){let E=P.getX(O)+w*r/2,C=Math.abs(E)/r;P.setXYZ(O,E,P.getY(O),8e-4-.006*Math.exp(-C*10)+.003*C*(1-C))}T.computeVertexNormals();let U=new ce(T,this.track(Qu()));return M.add(U),{g:M,board:R,block:b,page:U}};this.left=y(-1),this.right=y(1),a.add(this.left.g,this.right.g);let v=new ce(this.track(new Rn(1,1,s+.014,16,1,!1,Math.PI/2,Math.PI)),d);v.rotation.z=0,this.spineMesh=v,a.add(v),this.flipGeo=this.track(new Ut(r,s,aa,1)),this.flipFront=new ce(this.flipGeo,this.track(Qu())),this.flipBack=new ce(this.flipGeo,this.track(Qu())),this.flipBack.material.side=qt,this.flipFront.visible=this.flipBack.visible=!1,a.add(this.flipFront,this.flipBack);let _=new ce(this.track(new Ut(.005,s*.62)),this.track(new st({color:"#9b1c2c",roughness:.5,side:Ct})));_.position.set(.005,-s*.25,.0025),_.rotation.z=.02,this.ribbon=_,a.add(_),this.hands=[-1,1].map(w=>{let M=MR(w,e,t);return this.track(...M.materials,...M.geometries),a.add(M.outer),M.rest=new I(w*(r+.018),-s*.16,-.004),M.wrist.quaternion.copy(ed),M}),this.layoutBlocks()}layoutBlocks(){let e=this.pages?Math.min(1,this.spread*2/this.pages):0,t=Math.max(8e-4,this.thick*e),i=Math.max(8e-4,this.thick*(1-e));for(let[r,o]of[[this.left,t],[this.right,i]])r.block.scale.set(this.W,this.H,o),r.block.position.z=-o/2,r.board.position.z=-o-.002,r.depth=o;let s=(t+i)/2+.004;this.spineMesh.scale.set(s,1,s),this.spineMesh.position.z=-s}pageTex(e,t=!1){if(e<1||e>this.pages)return this.endpaper;let i=this.textures.get(e);if(!i){let s=Math.round(Math.min(1536,Math.max(768,innerHeight*Math.min(devicePixelRatio,2)*.8))),r=document.createElement("canvas");r.height=s,r.width=Math.round(s*this.W/this.H);let o=r.getContext("2d");o.fillStyle=this.pdf.paper,o.fillRect(0,0,r.width,r.height);let a=new Zt(r),c=new Zt(r);for(let h of[a,c])h.colorSpace=bt,h.anisotropy=8;c.repeat.x=-1,c.offset.x=1,i={canvas:r,front:a,back:c,used:0},this.textures.set(e,i);let l=this.pdf;l.renderInto(e,r).then(()=>{this.pdf===l&&(a.needsUpdate=!0,c.needsUpdate=!0)}).catch(()=>{}),this.evict()}return i.used=performance.now(),t?i.back:i.front}evict(){if(this.textures.size<=12)return;let e=new Set([2,1,0,-1,3,4,5].map(i=>this.spread*2+i)),t=[...this.textures.entries()].filter(([i])=>!e.has(i)).sort((i,s)=>i[1].used-s[1].used);for(let[i,s]of t.slice(0,this.textures.size-12))s.front.dispose(),s.back.dispose(),this.textures.delete(i)}showSpread(){let e=this.spread;mr(this.left.page,this.pageTex(2*e)),mr(this.right.page,this.pageTex(2*e+1)),this.layoutBlocks();for(let t of[2*e+2,2*e+3,2*e-1,2*e-2])this.pageTex(t);this.ribbon.visible=e>0,clearTimeout(this.saveTimer),this.saveTimer=setTimeout(()=>lv(this.book,Math.min(this.pages,2*e+1)).catch(()=>{}),800),this.emitChange()}emitChange(){let e=this.spread,t=2*e,i=Math.min(this.pages,2*e+1),s=t>=1&&i>t?`${t}\u2013${i}`:`${t>=1?t:i}`;this.unfoldTarget().then(r=>{this.onChange?.({label:`${s} / ${this.pages}`,canPrev:e>0,canNext:2*e+1<this.pages,unfold:r?r.large?"\u{1F5FA}\uFE0F":"\u{1F50D}":null,unfolded:!!this.sheet})})}async unfoldTarget(){if(!this.pdf)return null;let e=[2*this.spread+1,2*this.spread].filter(i=>i>=1&&i<=this.pages),t=null;for(let i of e){let s=this.pdf.folds(await this.pdf.size(i));(!t||s.large&&!t.large)&&(t={n:i,...s})}return t}canTurn(e){return!this.pdf||this.sheet||this.closing||this.openT<.85?!1:e>0?2*this.spread+1<=this.pages:this.spread>0}startFlip(e,t){if(this.flip||!this.canTurn(e))return!1;let i=this.spread;return e>0?(mr(this.flipFront,this.pageTex(2*i+1)),mr(this.flipBack,this.pageTex(2*i+2,!0)),mr(this.right.page,this.pageTex(2*i+3))):(mr(this.flipFront,this.pageTex(2*i-1)),mr(this.flipBack,this.pageTex(2*i,!0)),mr(this.left.page,this.pageTex(2*i-2))),this.flip={dir:e,p:e>0?0:1,target:e>0?1:0,auto:t},this.flipFront.visible=this.flipBack.visible=!0,this.deformFlip(),!0}turn(e){this.startFlip(e,!0)}deformFlip(){let e=this.flip,t=this.W,i=Math.PI*e.p,s=-.95*Math.sin(i)*e.dir,r=this.flipGeo.attributes.position,o=aa+1,a=.0015+(e.p<.5?this.right.depth*0:0),c=0,l=0,h=[0],u=[0];for(let d=0;d<aa;d++){let f=(d+.5)/aa,g=Math.min(Math.PI,Math.max(0,i+s*f*f));c+=t/aa*Math.cos(g),l+=t/aa*Math.sin(g),h.push(c),u.push(l)}for(let d=0;d<2;d++)for(let f=0;f<o;f++){let g=d*o+f;r.setX(g,h[f]),r.setZ(g,u[f]+a)}r.needsUpdate=!0,this.flipGeo.computeVertexNormals(),this.flipCorner=new I(h[o-1],-this.H/2+.03,u[o-1]+a)}endFlip(){let e=this.flip,t=e.dir>0&&e.p>=1||e.dir<0&&e.p<=0;this.flip=null,this.flipFront.visible=this.flipBack.visible=!1,t&&(this.spread+=e.dir),this.showSpread()}async toggleUnfold(){if(this.sheet){this.sheet.dir=-1;return}if(this.flip||this.closing||!this.pdf)return;let e=await this.unfoldTarget();e&&this.unfold(e.n)}async unfold(e){let t=await this.pdf.size(e),i=this.pdf.folds(t),s=.42,r=2*s*Math.tan(xt.degToRad(this.camera.fov)/2),o=r*this.camera.aspect,a=Math.min(o*.88/t.w,r*.74/t.h),c=t.w*a,l=t.h*a,h=c/i.cols,u=l/i.rows,d=document.createElement("canvas");d.width=64,d.height=64,d.getContext("2d").fillStyle=this.pdf.paper,d.getContext("2d").fillRect(0,0,64,64);let f=new Zt(d);f.colorSpace=bt,f.anisotropy=8;let g=Math.min(4096,this.camera.userData.maxTexture||4096),x=this.pdf;x.renderLarge(e,g).then(b=>{let T=this.sheet;if(this.pdf!==x||!T||T.tex!==f)return;let P=new Zt(b);P.colorSpace=bt,P.anisotropy=8,T.front.map=T.front.emissiveMap=P,T.tex=P,f.dispose()}).catch(()=>{});let m=Qu();m.map=m.emissiveMap=f;let p=new st({color:this.pdf.paper,roughness:.95,side:qt}),y=new he,v=[];for(let b=0;b<i.rows;b++){let T=new he,P=[];for(let U=0;U<i.cols;U++){let O=new Ut(h,u),E=O.attributes.uv;for(let D=0;D<E.count;D++)E.setXY(D,(U+E.getX(D))/i.cols,1-(b+1-E.getY(D))/i.rows);let C=new he;C.add(new ce(O,m),new ce(O,p)),T.add(C),P.push(C)}y.add(T),v.push({group:T,panels:P})}this.rig.add(y);let _=e%2===1?this.right.page:this.left.page;this.rig.updateMatrixWorld(!0);let w=new I(e%2===1?this.W/2:-this.W/2,0,.004);_.parent.localToWorld(w),this.rig.worldToLocal(w);let M=new wt;this.group.getWorldQuaternion(M);let R=new wt;this.rig.getWorldQuaternion(R),M.premultiply(R.invert()),this.sheet={n:e,root:y,rows:v,cols:i.cols,rowsN:i.rows,w:h,h:u,SW:c,SH:l,tex:f,front:m,back:p,t:0,dir:1,anchor:w,q:M,s0:Math.min(this.W/h,this.H/u)*.95,D:s,zoom:1,pan:new oe,vw:o,vh:r},this.layoutSheet(),this.emitChange()}layoutSheet(){let e=this.sheet,t=e.t,i=rs(Ni(t/.3)),s=e.rowsN>1?rs(Ni((t-.25)/.35)):1,r=e.cols>1?rs(Ni((t-(e.rowsN>1?.55:.25))/(e.rowsN>1?.45:.6))):1,o=Math.PI*(1-s)*.985,a=Math.PI*(1-r)*.985,c=(1-Math.min(s,r))*.0012,l=[],h=[],u=[],d=0,f=0,g=0;for(let w=0;w<e.cols;w++)u.push(g),l.push(d+e.w/2*Math.cos(g)),h.push(f+e.w/2*Math.sin(g)),d+=e.w*Math.cos(g),f+=e.w*Math.sin(g),g=w%2===0?a:0;let x=l.map((w,M)=>[w-e.w/2*Math.cos(u[M]),w+e.w/2*Math.cos(u[M])]).flat(),m=(Math.min(...x)+Math.max(...x))/2,p=0;f=0,g=0;let y=[0];e.rows.forEach((w,M)=>{w.group.position.set(0,p,f),w.group.rotation.x=-g,p+=-e.h*Math.cos(g),f+=e.h*Math.sin(g),y.push(p),g=M%2===0?o:0,w.panels.forEach((R,b)=>{R.position.set(l[b]-m,-e.h/2,h[b]+(M*e.cols+b)*c),R.rotation.y=-u[b]})});let v=(Math.min(...y)+Math.max(...y))/2;for(let w of e.rows)w.group.position.y-=v;let _=new I(e.pan.x,e.pan.y+e.vh*.04,-e.D);e.root.position.lerpVectors(e.anchor,_,i),e.root.quaternion.slerpQuaternions(e.q,new wt,i),e.root.scale.setScalar(xt.lerp(e.s0,e.zoom,i)),e.handBlend=r*s}disposeSheet(){let e=this.sheet;this.rig.remove(e.root),e.root.traverse(t=>{t.geometry&&t.geometry.dispose()}),e.tex.dispose(),e.front.dispose(),e.back.dispose(),this.sheet=null}pageHit(e){let t=new oe(e.clientX/innerWidth*2-1,-(e.clientY/innerHeight)*2+1);this.ray.setFromCamera(t,this.camera);let i=this.ray.intersectObjects([this.left.page,this.right.page],!1)[0];return i?i.object===this.right.page?1:-1:0}pageWidthPx(){let e=new I(0,0,0),t=new I(this.W,0,0);return this.group.localToWorld(e).project(this.camera),this.group.localToWorld(t).project(this.camera),Math.max(60,Math.abs(t.x-e.x)*innerWidth*.5)}pointerDown(e){if(!this.active||this.closing)return;if(this.sheet){this.drag={kind:"pan",x:e.clientX,y:e.clientY};return}let t=this.pageHit(e);t&&(this.drag={kind:"page",dir:t,x0:e.clientX,started:!1,px:this.pageWidthPx(),t:e.timeStamp})}pointerMove(e){if(!this.active)return;let t=this.drag;if(!t){this.lookTarget.set((e.clientX/innerWidth*2-1)*-.16,(e.clientY/innerHeight*2-1)*-.08);return}if(t.kind==="pan"&&this.sheet){let s=this.sheet;s.pan.x+=(e.clientX-t.x)/innerWidth*s.vw,s.pan.y-=(e.clientY-t.y)/innerHeight*s.vh;let r=s.SW*s.zoom/2,o=s.SH*s.zoom/2;s.pan.x=xt.clamp(s.pan.x,-r,r),s.pan.y=xt.clamp(s.pan.y,-o,o),t.x=e.clientX,t.y=e.clientY;return}if(t.kind!=="page")return;let i=e.clientX-t.x0;if(!t.started&&Math.abs(i)>6&&(t.started=this.startFlip(t.dir,!1)),t.started&&this.flip){let s=Ni((t.dir>0?-i:i)/(t.px*1.6));this.flip.p=t.dir>0?s:1-s,this.deformFlip()}}pointerUp(e){let t=this.drag;if(this.drag=null,!(!t||!this.active||t.kind!=="page"))if(t.started&&this.flip){let s=(t.dir>0?this.flip.p:1-this.flip.p)>.3;this.flip.target=s===t.dir>0?1:0,this.flip.auto=!0}else!t.started&&e.timeStamp-t.t<500&&this.turn(t.dir)}doubleClick(e){if(!this.active||this.sheet||this.flip)return;let t=this.pageHit(e),i=t>0?2*this.spread+1:2*this.spread;t&&i>=1&&i<=this.pages&&this.unfold(i)}wheel(e){this.active&&(this.sheet&&this.sheet.t>=1?this.sheet.zoom=xt.clamp(this.sheet.zoom*1.0015**-e.deltaY,1,6):this.zoom=xt.clamp(this.zoom+e.deltaY*4e-4,.32,.7))}key(e){if(!this.active)return!1;if(e.key==="ArrowRight"||e.key==="PageDown"||e.key===" ")this.turn(1);else if(e.key==="ArrowLeft"||e.key==="PageUp")this.turn(-1);else if(e.key==="u"||e.key==="U")this.toggleUnfold();else if(e.key==="Escape")this.sheet?this.sheet.dir=-1:this.close();else return!1;return!0}update(e,t){if(!this.active)return;let i=this.camera;this.look.lerp(this.lookTarget,Math.min(1,e*4));let s=new wt().setFromEuler(new on(-.2+this.look.y,this.yaw+Math.PI+this.look.x,0,"YXZ"));if(!this.closing){this.camT=Math.min(1,this.camT+e/1.1);let h=rs(this.camT);i.position.lerpVectors(this.returnPos,this.eye,h),i.quaternion.slerpQuaternions(this.returnQuat,s,h),i.fov=xt.lerp(this.returnFov,42,h),i.updateProjectionMatrix()}if(!this.pdf)return;this.lamp.intensity=xt.lerp(this.lamp.intensity,this.closing?0:1.2,Math.min(1,e*3)),this.closing||(this.openT=Math.min(1,this.openT+(this.camT>.55?e/1:0)));let r=rs(this.openT),o=rs(Ni(this.camT*1.4));if(this.closing){this.closeT+=e,r=1-rs(Ni(this.closeT/.7)),o=1-rs(Ni((this.closeT-.55)/.5));let h=rs(Ni((this.closeT-.6)/1));if(i.position.lerpVectors(this.eye,this.returnPos,h),i.quaternion.slerpQuaternions(s,this.returnQuat,h),i.fov=xt.lerp(42,this.returnFov,h),i.updateProjectionMatrix(),this.closeT>1.65){this.finish();return}}this.left.g.rotation.y=Math.PI*(1-r)*.995,this.left.page.visible=r>.02;let a=Math.sin(t*1.3)*.004,c=this.sheet?rs(Ni(this.sheet.t*2))*.09:0;if(this.holder.position.set(0,-.012*(this.zoom/.6)-(1-o)*.35+a-c,-this.zoom),this.flip&&this.flip.auto){let h=this.flip,u=e/.6;h.p=h.target>h.p?Math.min(h.target,h.p+u):Math.max(h.target,h.p-u),this.deformFlip(),h.p===h.target&&this.endFlip()}if(this.sheet){let h=this.sheet;h.t=Ni(h.t+h.dir*e/1.6),this.layoutSheet(),h.dir<0&&h.t===0?(this.disposeSheet(),this.emitChange()):h.dir>0&&h.t===1&&!h.announced&&(h.announced=!0,this.emitChange())}let l=(h,u)=>h.set(h.x*u,h.y,h.z);for(let h of this.hands){let u=h.side,d=h.rest.clone();d.z+=(u>0?0:this.left.depth)*.5,u<0&&d.applyAxisAngle(new I(0,1,0),this.left.g.rotation.y),l(d,u);let f=d.sub(Pm.clone().applyQuaternion(ed)),g=ed.clone(),x=0;if(this.flip&&this.flipCorner&&Math.sign(this.flip.dir)===u){let m=u>0?this.flip.p:1-this.flip.p;x=Math.min(1,m*5)*(1-bR(.75,1,m));let y=l(this.flipCorner.clone(),u).sub(ev.clone().applyQuaternion(gv));f.lerp(y,x),g.slerp(gv,x)}if(this.sheet&&this.sheet.handBlend>0){let m=this.sheet,p=new I(u*m.SW/2+u*.01,-m.SH/2+.03,-.004);m.root.localToWorld(p),this.group.worldToLocal(p),l(p,u),f.lerp(p.sub(Pm.clone().applyQuaternion(ed)),m.handBlend)}h.wrist.position.lerp(f,Math.min(1,e*14)),h.wrist.quaternion.slerp(g,Math.min(1,e*12)),h.rig&&nv(h.rig,Cm.hold,Cm.pinch,x)}}};var nd=2.4,wR=9,SR=12,TR=1.9,Nm=1.45,ER=.62,km=70,AR=n=>n<.5?2*n*n:1-(-2*n+2)**2/2,Kr=(n,e)=>1-Math.exp(-n*e);function yv(n,e,t){let i=(e-n+Math.PI)%(Math.PI*2)-Math.PI;return i<-Math.PI&&(i+=Math.PI*2),n+i*t}var id=class{constructor(e){this.camera=e,this.active=!1,this.yaw=Math.PI,this.pitch=-.06,this.yawTarget=this.yaw,this.pitchTarget=this.pitch,this.keys=new Set,this.auto=null,this.pos=new oe,this.vel=new oe,this.eye=new I,this.eyeY=Nm,this.stride=0,this.blend=1,this.lastSeat=null,this.held={};for(let[t,i]of[["drink",.2],["snack",-.2]]){let s=new On(new An({transparent:!0,depthWrite:!1}));s.visible=!1,s.renderOrder=10,e.add(s),this.held[t]={sprite:s,x:i,item:null}}this.steam=Array.from({length:3},(t,i)=>{let s=new On(new An({map:rr(),transparent:!0,depthWrite:!1,opacity:0}));return s.visible=!1,e.add(s),{s,p:i/3}})}enter(e,t){this.active=!0,this.yaw=this.yawTarget=e,this.pitch=this.pitchTarget=-.06,this.auto=null,this.keys.clear(),this.vel.set(0,0),t&&(this.pos.set(t.pos.x,t.pos.z),this.eye.copy(this.eyeOf(t)),this.eyeY=this.eye.y),this.fromPos=this.camera.position.clone(),this.fromQuat=this.camera.quaternion.clone(),this.fromFov=this.camera.fov,this.blend=0,this.lastSeat=null}exit(){this.active=!1,this.keys.clear(),this.auto=null,this.vel.set(0,0);for(let e of Object.values(this.held))e.sprite.visible=!1;for(let e of this.steam)e.s.visible=!1}look(e,t){this.yawTarget-=e*.0045,this.pitchTarget=xt.clamp(this.pitchTarget-t*.0045,-1.25,1.1),this.lastSeat&&(this.lastSeat.turned=!0)}key(e,t){t?this.keys.add(e):this.keys.delete(e)}walkTo(e,t){this.auto=new oe(e,t)}eyeOf(e,t=new I){let i=e.seat,s=i&&e.state!=="hopOut"?i.pos.y+ER:Nm;return t.set(e.group.position.x,s,e.group.position.z)}free(e){return!e.seat&&!e.pendingSeat&&e.state!=="hopOut"&&e.state!=="hopIn"}update(e,t,i,s){if(!this.active||!i)return null;let r=this.keys,o=(r.has("KeyW")||r.has("ArrowUp")?1:0)-(r.has("KeyS")||r.has("ArrowDown")?1:0),a=(r.has("KeyD")?1:0)-(r.has("KeyA")?1:0),c=(r.has("ArrowLeft")||r.has("KeyQ")?1:0)-(r.has("ArrowRight")||r.has("KeyE")?1:0);this.yawTarget+=c*TR*e,c&&this.lastSeat&&(this.lastSeat.turned=!0);let l=o||a,h=null;if(!this.free(i))this.vel.set(0,0),this.pos.set(i.pos.x,i.pos.z),l&&(this.auto=null,h={standUp:!0});else{let _=new oe;if(l)this.auto=null,_.set(Math.sin(this.yaw)*o-Math.cos(this.yaw)*a,Math.cos(this.yaw)*o+Math.sin(this.yaw)*a),_.normalize().multiplyScalar(nd);else if(this.auto){let w=this.auto.clone().sub(this.pos),M=w.length();M<.06?this.auto=null:_.copy(w).normalize().multiplyScalar(Math.min(nd,M*2.2))}if(this.vel.lerp(_,Kr(_.lengthSq()>0?wR:SR,e)),this.vel.lengthSq()<1e-4&&_.lengthSq()===0&&this.vel.set(0,0),this.vel.lengthSq()>0){let[w,M]=s.resolve(this.pos.x+this.vel.x*e,this.pos.y+this.vel.y*e),R=Math.hypot(w-this.pos.x,M-this.pos.y);this.auto&&R<this.vel.length()*e*.15&&(this.auto=null,this.vel.set(0,0)),e>0&&this.vel.set((w-this.pos.x)/e,(M-this.pos.y)/e),this.pos.set(w,M),h={x:w,z:M,moving:this.vel.length()>.05}}}let u=i.seat;u&&i.state==="sitting"?(this.lastSeat?.id!==u.id&&(this.lastSeat={id:u.id,turned:!1}),this.lastSeat.turned||(this.yawTarget=yv(this.yawTarget,u.rot,Kr(4,e)),this.pitchTarget+=(-.12-this.pitchTarget)*Kr(4,e))):u||(this.lastSeat=null),this.yaw=yv(this.yaw,this.yawTarget,Kr(22,e)),this.pitch+=(this.pitchTarget-this.pitch)*Kr(22,e);let d=this.free(i),f=this.eyeOf(i),g=d?new I(this.pos.x,Nm,this.pos.y):f;this.eyeY+=(g.y-this.eyeY)*Kr(8,e),d?this.eye.set(g.x,0,g.z):this.eye.lerp(new I(g.x,0,g.z),Kr(10,e));let x=this.vel.length();this.stride+=x*e*2.6;let m=Math.sin(this.stride)*.022*Math.min(1,x/nd),p=new I(this.eye.x,this.eyeY+Math.abs(m)-.01*Math.min(1,x/nd),this.eye.z),y=new wt().setFromEuler(new on(this.pitch,this.yaw+Math.PI,m*.12,"YXZ")),v=this.camera;if(this.blend<1){this.blend=Math.min(1,this.blend+e/1.1);let _=AR(this.blend);v.position.lerpVectors(this.fromPos,p,_),v.quaternion.slerpQuaternions(this.fromQuat,y,_),v.fov=xt.lerp(this.fromFov,km,_),v.updateProjectionMatrix()}else v.position.copy(p),v.quaternion.copy(y),v.fov!==km&&(v.fov=km,v.updateProjectionMatrix());return this.updateHeld(e,t,i),h}updateHeld(e,t,i){let s=i.sipPhase%7;for(let[a,c]of Object.entries(this.held)){let l=i.items[a];if(c.sprite.visible=!!l,!l)continue;c.item!==l.item&&(c.sprite.material.map=ci(l.item),c.sprite.material.needsUpdate=!0,c.item=l.item);let h=a==="drink"?s<1.2?Math.sin(s/1.2*Math.PI):0:s>3.5&&s<4.5?Math.sin((s-3.5)*Math.PI):0,u=.1*(l.sprite.scale.x/.34);c.sprite.scale.set(u,u,1),c.sprite.position.set(c.x*(1-h*.6),-.16+h*.1+Math.sin(t*1.4)*.004,-.42+h*.1)}let r=i.items.drink,o=!!(r&&nr[r.item]?.hot);for(let a of this.steam){if(a.s.visible=o,!o)continue;a.p=(a.p+e*.5)%1;let c=this.held.drink.sprite.position;a.s.position.set(c.x+Math.sin(t*3+a.p*6)*.01,c.y+.05+a.p*.1,c.z);let l=.02+a.p*.04;a.s.scale.set(l,l,1),a.s.material.opacity=Math.sin(a.p*Math.PI)*.3}}};var Pe=n=>document.getElementById(n),ki={get(n,e){try{let t=localStorage.getItem(n);return t===null?e:JSON.parse(t)}catch{return e}},set(n,e){try{localStorage.setItem(n,JSON.stringify(e))}catch{}}},xv=n=>n[Math.floor(Math.random()*n.length)],Ev=["\u{1F44B}","\u{1F60A}","\u{1F602}","\u{1F970}","\u{1F44D}","\u{1F44F}","\u2764\uFE0F","\u2728","\u{1F3B6}","\u2615","\u{1F634}","\u{1F914}"],In=Pe("scene"),zn=new Zh({canvas:In,antialias:!0,powerPreference:"high-performance"});zn.setSize(innerWidth,innerHeight);zn.shadowMap.enabled=!0;zn.shadowMap.type=Dr;zn.shadowMap.autoUpdate=!1;zn.toneMapping=ac;var Pn={ratio:Math.min(devicePixelRatio,1.5),max:Math.min(devicePixelRatio,2),frames:0,time:0};zn.setPixelRatio(Pn.ratio);function CR(n){if(Pn.frames++,Pn.time+=n,Pn.time<1.5)return;let e=Pn.time/Pn.frames*1e3;Pn.frames=0,Pn.time=0;let t=Pn.ratio;e>24?t=Math.max(.75,Pn.ratio-.25):e<14&&Pn.ratio<Pn.max&&(t=Math.min(Pn.max,Pn.ratio+.25)),t!==Pn.ratio&&(Pn.ratio=t,zn.setPixelRatio(t),zn.setSize(innerWidth,innerHeight))}var Ui=new ps,Ln=new rn(40,innerWidth/innerHeight,.1,1200);Ln.userData.maxTexture=zn.capabilities.maxTextureSize;Ui.add(Ln);var $t=new tu(Ln,In);$t.enableDamping=!0;$t.dampingFactor=.08;$t.minDistance=5;$t.maxDistance=34;$t.minPolarAngle=.2;$t.maxPolarAngle=1.36;$t.screenSpacePanning=!1;$t.autoRotateSpeed=.35;addEventListener("resize",()=>{Ln.aspect=innerWidth/innerHeight,Ln.updateProjectionMatrix(),zn.setSize(innerWidth,innerHeight)});function Fm(){let n=innerWidth<innerHeight;Ln.position.set(11,n?17:11.5,n?22:15.5),$t.target.set(0,.6,0),$t.update()}var Bn=new ce(new Xs(.3,.38,36),new Rt({color:"#fff4e0",transparent:!0,opacity:.7,depthWrite:!1}));Bn.rotation.x=-Math.PI/2;Bn.renderOrder=5;Bn.visible=!1;Ui.add(Bn);var Jr=Bn.clone();Jr.material=Bn.material.clone();Jr.visible=!1;Ui.add(Jr);var Zr=1,PR=new URLSearchParams(location.search).get("net")||"p2p",St=PR==="p2p"?new Xu:new Su,yr=new wu,$n={avatar:er.includes(ki.get("avatar"))?ki.get("avatar"):xv(er),color:tr.includes(ki.get("color"))?ki.get("color"):xv(tr),skin:Zu.includes(ki.get("skin"))?ki.get("skin"):Zu[1]},te=null,ii=null,hd=Qi[location.hash.slice(1)]?location.hash.slice(1):su[0].id,cd=null,la="first",hn=new id(Ln);function IR(n){Ui.background=new pe(n.background),Ui.fog=new Pa(...n.fog),zn.toneMappingExposure=n.exposure}var LR=new Zo(zn);function Av(n){let e=Qi[n],t=ky[n],i=Zy(e,t);return Ui.add(i.root),IR(t),i.env=LR.fromScene(i.envScene,.04,.1,1e3),Ui.environment=i.env.texture,Ui.environmentIntensity=t.envIntensity??1,{room:e,theme:t,world:i}}var rd=null;function Rv(){let n=zn.compileAsync(Ui,Ln).catch(()=>{}).finally(()=>{rd===n&&(rd=null)});return rd=n,n}function Bm(n){n&&(Ui.remove(n.world.root),n.world.env?.dispose(),n.world.dispose())}function od(){Pe("youPreview").textContent=$n.avatar,Pe("youPreview").style.setProperty("--c",$n.color),Pe("avatarPicker").replaceChildren(...er.map(n=>{let e=document.createElement("button");return e.textContent=n,e.className=n===$n.avatar?"on":"",e.onclick=()=>{$n.avatar=n,ki.set("avatar",n),od()},e})),Pe("colorPicker").replaceChildren(...tr.map(n=>{let e=document.createElement("button");return e.style.background=n,e.className=n===$n.color?"on":"",e.setAttribute("aria-label",n),e.onclick=()=>{$n.color=n,ki.set("color",n),od()},e})),Pe("tonePicker").replaceChildren(...Zu.map((n,e)=>{let t=document.createElement("button");return t.textContent=["\u270B\u{1F3FB}","\u270B\u{1F3FC}","\u270B\u{1F3FD}","\u270B\u{1F3FE}","\u270B\u{1F3FF}"][e],t.className=n===$n.skin?"on":"",t.title="Your hands, when reading",t.onclick=()=>{$n.skin=n,ki.set("skin",n),od()},t}))}function Cv(n={}){Pe("roomList").replaceChildren(...su.map(e=>{let t=document.createElement("button");return t.className=`room-card room-${e.id}${e.id===hd?" selected":""}`,t.innerHTML=`
      <span class="room-emoji">${e.emoji}</span>
      <span class="room-text"><b>${e.name}</b><small>${e.tagline}</small></span>
      <span class="room-count">\u{1F464} ${n[e.id]??0}</span>
      <span class="room-go">\u279C</span>`,t.onmouseenter=()=>vv(e.id),t.onfocus=()=>vv(e.id),t.onclick=()=>DR(e.id),t}))}async function Pv(){if(!Pe("lobby").hidden)try{Cv(await St.counts())}catch{}}setInterval(Pv,3e3);var _v=0;function vv(n){clearTimeout(_v),_v=setTimeout(()=>{ii?.room.id===n||te||(hd=n,document.querySelectorAll(".room-card").forEach(e=>e.classList.toggle("selected",e.classList.contains(`room-${n}`))),Iv(n))},180)}var ad=0;function Iv(n){let e=++ad;requestAnimationFrame(()=>setTimeout(async()=>{e!==ad||te||(Bm(ii),ii=Av(n),Fm(),await Rv(),e===ad&&document.body.classList.add("scene-ready"))},0))}function Lv(){Pe("hud").hidden=!0,Pe("lobby").hidden=!1,cd=null,od(),Cv(),Pv(),ii||Iv(hd),Fm(),$t.autoRotate=!0,history.replaceState(null,"",location.pathname)}function DR(n){yr.ensure(),cd=n,document.body.classList.add("busy"),St.send({t:"join",room:n,avatar:$n.avatar,color:$n.color})}St.on("open",()=>{te&&St.send({t:"join",room:te.room.id,avatar:$n.avatar,color:$n.color})});St.on("close",()=>{te&&eo("\u{1F4E1}\u{1F4A4}")});St.on("welcome",n=>{if(document.body.classList.remove("busy"),te&&te.room.id===n.room){for(let t of[...te.books.keys()])Xc({id:t,mode:null});for(let t of n.books||[])Xc(t);for(let t of te.avatars.values())kv(t.id,!0);te.myId=n.id;for(let t of n.peers)Om(t,!0);la==="first"&&Oi()&&(Oi().group.visible=!1)}else{Nv();let t=ii?.room.id===n.room?ii:null;t||(ad++,Bm(ii),t=Av(n.room),Rv().then(()=>document.body.classList.add("scene-ready"))),ii=null,te={...t,avatars:new Map,seatOwners:new Map,fx:new yu(t.world.root),myId:n.id},t.world.waiter&&(te.waiter=new _u(t.world.waiter,te.fx),t.world.root.add(te.waiter.group)),te.books=new Map,te.leftMeshes=new Map,t.world.door&&(te.maid=new vu(t.world.door),t.world.root.add(te.maid.group)),$t.autoRotate=!1,OR(),yr.play(n.room,te.theme.music),history.replaceState(null,"",`#${n.room}`);for(let i of n.peers)Om(i,!0);for(let i of n.books||[])Xc(i);Dv(la)}Hm()});function Dv(n){la=n;let e=Oi();Pe("camBtn").textContent=n==="first"?"\u{1F3E0}":"\u{1F440}",Pe("camBtn").title=n==="first"?"Bird\u2019s-eye view":"First-person view",!(!te||Nt.active)&&(n==="first"?($t.enabled=!1,e&&(e.group.visible=!1),hn.enter(e?.seat?e.seat.rot:Math.atan2(-(e?.position.x??0),-(e?.position.z??1)),e)):(hn.exit(),e&&(e.group.visible=!0),$t.enabled=!0,Ln.fov=40,Ln.updateProjectionMatrix(),Fm()))}function Nv({keepWorld:n=!1}={}){if(!te)return null;let{room:e,theme:t,world:i}=te;for(let s of te.avatars.values())i.root.remove(s.group),s.dispose();te.fx.clear(),te.waiter&&(i.root.remove(te.waiter.group),te.waiter.dispose()),te.maid&&(i.root.remove(te.maid.group),te.maid.dispose());for(let s of[...te.books.keys()])Xc({id:s,mode:null});return te=null,n?{room:e,theme:t,world:i}:(Bm({world:i}),null)}function NR(){Ls=null,Yc=null,Nt.active&&Nt.finish(),hn.exit(),$t.enabled=!0,Ln.fov=40,Ln.updateProjectionMatrix(),St.send({t:"leave"}),yr.stop(),ii=Nv({keepWorld:!0}),ii&&(hd=ii.room.id),Qr(),Lv()}function Om(n,e=!1){if(!te||te.avatars.has(n.id))return;let t=new xu(n,{isMe:n.id===te.myId});te.avatars.set(n.id,t),te.world.root.add(t.group),n.seat&&te.world.seats.has(n.seat)&&(t.sitAt(te.world.seats.get(n.seat),!0),te.seatOwners.set(n.seat,n.id)),n.drink&&t.setItem("drink",n.drink.item,n.drink.at),n.snack&&t.setItem("snack",n.snack.item,n.snack.at),n.reading&&t.setReading(!0),e||(te.fx.burst("\u2728",t.position.clone().setY(1.6),3),zv(n.id,"\u{1F44B}",!0)),Hm()}function kv(n,e=!1){let t=te?.avatars.get(n);t&&(e||te.fx.burst("\u{1F4A8}",t.position.clone().setY(1),2),ha(n),te.waiter?.cancelFor(n),te.world.root.remove(t.group),t.dispose(),te.avatars.delete(n),Hm())}function ha(n){for(let[e,t]of te.seatOwners)t===n&&te.seatOwners.delete(e);n===te.myId&&(Pe("standBtn").hidden=!0)}var Oi=()=>te?.avatars.get(te.myId);St.on("joined",({peer:n})=>Om(n));St.on("left",({id:n})=>kv(n));St.on("moved",({id:n,x:e,z:t})=>{te&&(ha(n),n!==te.myId&&te.avatars.get(n)?.moveTo(e,t))});St.on("sat",({id:n,seat:e})=>{if(!te)return;let t=te.world.seats.get(e),i=te.avatars.get(n);!t||!i||(ha(n),te.seatOwners.set(e,n),i.sitAt(t),n===te.myId&&(Pe("standBtn").hidden=!1,hn.auto=null))});St.on("emoji",({id:n,e})=>{let t=te?.avatars.get(n);t&&(t.say(e),xy.has(e)&&te.fx.burst(e,t.position.clone().setY(t.group.position.y+1.6),3),zv(n,e))});St.on("order",n=>{te&&(te.waiter?.enqueue(n),n.id===te.myId&&Wm(`\u{1F916} ${n.item}`),te.waiter||Uv(n))});function Uv(n){let e=te?.avatars.get(n.id);e&&(e.setItem(n.kind,n.item,n.at),n.id===te.myId&&Wm(""))}St.on("reading",({id:n,on:e})=>te?.avatars.get(n)?.setReading(e));var Yc=null;function Xc({id:n,by:e,mode:t,x:i,z:s}){let r=te?.world.library.get(n);if(!r)return;t?te.books.set(n,{by:e,mode:t,x:i,z:s}):te.books.delete(n),r.mesh.visible=!t;let o=te.leftMeshes.get(n);t==="left"?(o||(o=$y(n),o.traverse(a=>{a.isMesh&&(a.userData.libraryBook=n,te.world.pickables.push(a))}),te.world.root.add(o),te.leftMeshes.set(n,o)),o.position.set(i,0,s),o.visible=!0):o&&(te.world.root.remove(o),o.traverse(a=>{if(!a.isMesh)return;let c=te.world.pickables.indexOf(a);c>=0&&te.world.pickables.splice(c,1),a.geometry.dispose();for(let l of[].concat(a.material))l.userData.shared||(l.map?.dispose(),l.dispose())}),te.leftMeshes.delete(n)),t==="reading"&&e===te.myId&&Yc===n&&(Yc=null,Fv(mv(n,Ss[n])))}function kR(n){if(te.books.get(n)?.mode==="reading"){eo("\u{1F4D6}\u274C");return}Yc=n,St.send({t:"book",id:n,mode:"reading"})}function zm(n){let e=Oi();if(!e)return;let t=e.seat,i=t?t.rot:e.yaw,s=t?t.pos:e.position,r=s.x-Math.cos(i)*(t?.62:.2)+Math.sin(i)*.25,o=s.z+Math.sin(i)*(t?.62:.2)+Math.cos(i)*.25;St.send({t:"book",id:n,mode:"left",x:r,z:o})}St.on("book",n=>Xc(n));St.on("maid",({books:n})=>{te?.maid&&te.maid.run(ru(te.room,n),{onPick:e=>{let t=te?.leftMeshes.get(e);t&&(t.visible=!1)}})});St.on("finished",({id:n,kind:e})=>{let t=te?.avatars.get(n);t&&(t.removeItem(e),te.fx.burst("\u2728",t.handPosition(e),1))});var UR={"seat-taken":"\u{1FA91}\u274C",full:"\u{1F6AA}\u{1F235}","slow-down":"\u23F3\u{1F642}","no-room":"\u2753","book-taken":"\u{1F4D6}\u274C"};St.on("error",({code:n,seat:e})=>{document.body.classList.remove("busy"),eo(UR[n]||"\u26A0\uFE0F"),n==="seat-taken"&&e&&Oi()?.seat?.id===e&&(Nt.active&&Nt.close(),Bv()),n==="seat-taken"&&Ls?.libraryId&&zm(Ls.libraryId),n==="seat-taken"&&(Ls=null),n==="book-taken"&&(Yc=null),n==="full"&&cd&&!te&&(cd=null)});function OR(){Pe("lobby").hidden=!0,Pe("hud").hidden=!1;let{room:n,theme:e}=te;Pe("roomBadge").textContent=`${n.emoji} ${n.name}`,Pe("nowPlaying").textContent=`\u{1F3B5} ${e.music.title}`,Pe("log").replaceChildren(),Pe("standBtn").hidden=!0,Wm(""),Pe("menuItems").replaceChildren(...ir(n).map(i=>{let s=document.createElement("button");return s.textContent=i,s.onclick=()=>{St.send({t:"order",item:i}),Qr()},s}));let t=Pe("hint");t.classList.remove("gone"),clearTimeout(t.timer),t.timer=setTimeout(()=>t.classList.add("gone"),9e3)}function Hm(){te&&(Pe("peopleCount").textContent=te.avatars.size)}function Gm(n){te&&St.send({t:"emoji",e:n})}Pe("emojiBar").replaceChildren(...Ev.map((n,e)=>{let t=document.createElement("button");return t.textContent=n,t.title=e<9?`${e+1}`:"",t.onclick=()=>Gm(n),t}),(()=>{let n=document.createElement("button");return n.className="more",n.textContent="\u2795",n.onclick=()=>Vm("emojiPanel"),n})());Pe("emojiGrid").replaceChildren(...nu.map(n=>{let e=document.createElement("button");return e.textContent=n,e.onclick=()=>Gm(n),e}));function Vm(n){let e=Pe(n),t=e.hidden;Qr(),e.hidden=!t}function Qr(){Pe("emojiPanel").hidden=!0,Pe("menuPanel").hidden=!0,Pe("suitcase").hidden=!0}Pe("menuBtn").onclick=()=>Vm("menuPanel");var Ls=null,Nt=new td({camera:Ln,onChange:n=>{Pe("pageLabel").textContent=n.label,Pe("prevPage").disabled=!n.canPrev||n.unfolded,Pe("nextPage").disabled=!n.canNext||n.unfolded,Pe("unfoldBtn").hidden=!n.unfold&&!n.unfolded,Pe("unfoldBtn").textContent=n.unfolded?"\u21A9\uFE0F":n.unfold},onClose:n=>{if(n||eo("\u{1F4C4}\u274C"),Nt.book?.libraryId&&te&&zm(Nt.book.libraryId),Pe("readerBar").hidden=!0,Pe("bagBtn").hidden=!1,$t.enabled=la==="overview",te){let e=Oi();e&&(e.group.visible=la==="overview"),Pe("standBtn").hidden=!e?.seat,St.send({t:"reading",on:!1})}}});async function ud(){let n=await ov();Pe("bookList").replaceChildren(...n.map(e=>{let t=document.createElement("button");t.className="book",t.style.setProperty("--leather",e.leather),t.title=e.name;let i=document.createElement("span");i.className="book-title",i.textContent=e.name;let s=document.createElement("span");s.className="book-meta",s.textContent=`${e.pages} p${e.lastPage>1?` \xB7 \u{1F516} ${e.lastPage}`:""}`;let r=document.createElement("span");return r.className="book-remove",r.textContent="\u2715",r.title="Take out of the suitcase",r.onclick=async o=>{o.stopPropagation(),await cv(e.id),ud()},t.append(i,s,r),t.onclick=()=>Fv(e),t})),Pe("suitcase").classList.toggle("empty",n.length===0)}async function Ov(n){if(!n?.length)return;Pe("suitcase").classList.add("busy");let e=await dv([...n]);Pe("suitcase").classList.remove("busy"),eo(e?`\u{1F4DA} +${e}`:"\u{1F4C4}\u274C"),Pe("suitcase").hidden||ud()}Pe("bagBtn").onclick=()=>{Vm("suitcase"),Pe("suitcase").hidden||ud()};Pe("pdfInput").onchange=async n=>{await Ov(n.target.files),n.target.value=""};addEventListener("dragover",n=>{te&&[...n.dataTransfer.types].includes("Files")&&n.preventDefault()});addEventListener("drop",async n=>{!te||!n.dataTransfer.files.length||(n.preventDefault(),Pe("suitcase").hidden=!1,await Ov(n.dataTransfer.files),ud())});var FR={armchair:0,sofa:1,loveseat:1};function BR(n){let e=null,t=1/0;for(let i of te.world.seats.values()){if(te.seatOwners.has(i.id))continue;let s=te.room.layout[i.index].type,r=(FR[s]??2)*100+i.pos.distanceTo(n.position);r<t&&(t=r,e=i)}return e}function Fv(n){Qr();let e=Oi();if(!e||Nt.active||(Ls=n,e.seat||e.pendingSeat))return;let t=BR(e);if(!t){n.libraryId&&zm(n.libraryId),Ls=null,eo("\u{1FA91}\u274C");return}St.send({t:"sit",seat:t.id})}function zR(n){let e=Oi(),t=e.seat,i=new I(Math.sin(t.rot),0,Math.cos(t.rot)),s=hn.eyeOf(e).addScaledVector(i,.06);document.activeElement?.blur?.(),hn.keys.clear(),$t.enabled=!1,Bn.visible=!1,e.group.visible=!1,Pe("readerBar").hidden=!1,Pe("standBtn").hidden=!0,Pe("bagBtn").hidden=!0,Pe("pageLabel").textContent="\u2026",Pe("unfoldBtn").hidden=!0,St.send({t:"reading",on:!0}),Nt.open(n,{handColor:$n.color,skinColor:$n.skin,eye:s,yaw:t.rot})}Pe("prevPage").onclick=()=>Nt.turn(-1);Pe("nextPage").onclick=()=>Nt.turn(1);Pe("unfoldBtn").onclick=()=>Nt.toggleUnfold();Pe("closeBook").onclick=()=>Nt.close();Pe("leaveBtn").onclick=NR;function Bv(){let n=Oi();if(!n?.seat)return;let e=n.seat.approach;St.send({t:"move",x:e.x,z:e.z}),n.moveTo(e.x,e.z),ha(te.myId)}Pe("standBtn").onclick=Bv;Pe("camBtn").onclick=()=>Dv(la==="first"?"overview":"first");var qc=Pe("volume");qc.value=ki.get("volume",.6);yr.setVolume(Number(qc.value));qc.oninput=()=>{yr.setVolume(Number(qc.value)),ki.set("volume",Number(qc.value))};Pe("muteBtn").onclick=()=>{yr.setMuted(!yr.muted),Pe("muteBtn").textContent=yr.muted?"\u{1F507}":"\u{1F50A}"};function zv(n,e,t=!1){let i=te?.avatars.get(n);if(!i)return;let s=document.createElement("div");s.className=t?"line arrival":"line";let r=document.createElement("span");r.className="who",r.textContent=i.emoji,r.style.setProperty("--c",i.color);let o=document.createElement("span");o.textContent=e,s.append(r,o);let a=Pe("log");for(a.append(s);a.children.length>7;)a.firstChild.remove()}function Wm(n){let e=Pe("status");e.textContent=n,e.hidden=!n}var bv=0;function eo(n){let e=Pe("toast");e.textContent=n,e.classList.add("show"),clearTimeout(bv),bv=setTimeout(()=>e.classList.remove("show"),1800)}addEventListener("keydown",n=>{let e=n.target instanceof HTMLInputElement&&n.target.type!=="file";if(!te||e)return;if(Nt.active&&Nt.key(n)){n.preventDefault();return}n.key==="Escape"&&Qr();let t=Number(n.key);t>=1&&t<=9&&Gm(Ev[t-1]),hn.active&&!Nt.active&&HR.has(n.code)&&(hn.key(n.code,!0),n.preventDefault())});var HR=new Set(["KeyW","KeyA","KeyS","KeyD","KeyQ","KeyE","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"]);addEventListener("keyup",n=>hn.key(n.code,!1));addEventListener("blur",()=>hn.keys.clear());var Mv=new Lr,wv=new oe,vn=null,ld=null;function Hv(n){if(!te)return null;wv.set(n.clientX/innerWidth*2-1,-(n.clientY/innerHeight)*2+1),Mv.setFromCamera(wv,Ln);for(let e of Mv.intersectObjects(te.world.pickables,!1))if(GR(e.object)){if(e.object.userData.libraryBook)return{kind:"library",id:e.object.userData.libraryBook,point:e.point};if(e.object.userData.furniture!==void 0){let t=VR(e.object.userData.furniture,e.point);return t?{kind:"seat",seat:t}:{kind:"taken",point:e.point}}if(e.object.userData.floor)return{kind:"floor",point:e.point}}return null}function GR(n){for(let e=n;e;e=e.parent)if(!e.visible)return!1;return!0}function VR(n,e){let t=null,i=1/0;for(let s of te.world.seats.values()){if(s.index!==n)continue;let r=te.seatOwners.get(s.id);if(r!==void 0&&r!==te.myId)continue;let o=(s.pos.x-e.x)**2+(s.pos.z-e.z)**2;o<i&&(i=o,t=s)}return t}In.addEventListener("pointerdown",n=>{if(Nt.active){Qr(),Nt.pointerDown(n);return}vn={x:n.clientX,y:n.clientY,lx:n.clientX,ly:n.clientY,t:n.timeStamp,drag:!1},hn.active&&In.setPointerCapture(n.pointerId)});In.addEventListener("pointermove",n=>{if(Nt.active){Nt.pointerMove(n);return}ld=n,!(!vn||!hn.active)&&(!vn.drag&&Math.hypot(n.clientX-vn.x,n.clientY-vn.y)>5&&(vn.drag=!0),vn.drag&&(hn.look(n.clientX-vn.lx,n.clientY-vn.ly),In.style.cursor="grabbing"),vn.lx=n.clientX,vn.ly=n.clientY)});In.addEventListener("dblclick",n=>Nt.doubleClick(n));In.addEventListener("wheel",n=>{Nt.active&&(n.preventDefault(),Nt.wheel(n))},{passive:!1});In.addEventListener("pointerleave",()=>{ld=null,Bn.visible=!1});In.addEventListener("pointerup",n=>{if(Nt.active){Nt.pointerUp(n);return}if(!vn)return;let e=Math.hypot(n.clientX-vn.x,n.clientY-vn.y),t=n.timeStamp-vn.t<1500,i=vn.drag;if(vn=null,In.style.cursor="",i||e>6||!t||!te)return;Qr();let s=Hv(n);if(!s)return;let r=Oi();if(s.kind==="library")hn.auto=null,kR(s.id);else if(s.kind==="seat"){if(r?.seat?.id===s.seat.id)return;hn.auto=null,St.send({t:"sit",seat:s.seat.id}),Sv(s.seat.pos)}else if(s.kind==="taken")eo("\u{1FA91}\u274C");else{let{hw:o,hd:a}=te.world.bounds,c=xt.clamp(s.point.x,-o,o),l=xt.clamp(s.point.z,-a,a);Sv(new I(c,0,l)),hn.active?hn.walkTo(c,l):(St.send({t:"move",x:c,z:l}),r?.moveTo(c,l),ha(te.myId))}});function Sv(n){Jr.position.set(n.x,n.y+.03,n.z),Zr=0}function WR(){if(!ld||!te||vn||Nt.active){Bn.visible=!1,In.style.cursor="";return}let n=Hv(ld);if(XR(n?.kind==="library"?n.id:null),!n){Bn.visible=!1,In.style.cursor="";return}if(n.kind==="library"){Bn.visible=!1,In.style.cursor="pointer";return}In.style.cursor=n.kind==="taken"?"not-allowed":"pointer";let e=n.kind==="seat"?n.seat.pos:n.point;Bn.visible=n.kind!=="taken",Bn.position.set(e.x,e.y+.03,e.z),Bn.material.color.set(n.kind==="seat"?"#ffd27a":"#fff4e0"),Bn.scale.setScalar(n.kind==="seat"?1.25:1)}var sd=null;function XR(n){if(sd===n)return;let e=(t,i)=>{let s=te?.world.library.get(t);s&&s.mesh.scale.setScalar(i);let r=te?.leftMeshes.get(t);r&&r.scale.setScalar(i)};sd&&e(sd,1),sd=n,n&&e(n,1.08),In.title=n?`${Ss[n].title} \xB7 ${Ss[n].magazine?"magazine":Ss[n].author}`:""}var Tv=performance.now(),ca=0,Um=0;function qR(n){ca+=n;let e=ca,t=te||ii;if(t&&t.world.update(n,e,Ln),te){for(let o of te.avatars.values())o.update(n,e);te.waiter?.update(n,e,te.avatars,Uv),te.maid?.update(n,e),te.fx.update(n);let i=Oi();hn.active&&!Nt.active&&i&&YR(hn.update(n,e,i,te.world),i),Ls&&i?.seat&&i.state==="sitting"&&(zR(Ls),Ls=null);let{hw:s,hd:r}=te.world.bounds;$t.target.x=xt.clamp($t.target.x,-s-2,s+2),$t.target.z=xt.clamp($t.target.z,-r-2,r+2),$t.target.y=xt.clamp($t.target.y,0,3),Um+=n,Um>.05&&(Um=0,WR())}Zr<1&&(Zr=Math.min(1,Zr+n*2.2),Jr.visible=Zr<1,Jr.scale.setScalar(.6+Zr*1.4),Jr.material.opacity=.9*(1-Zr)),Nt.active?Nt.update(n,ca):hn.active||$t.update(n)}var gr={walking:!1,at:0,x:0,z:0};function YR(n,e){if(n?.standUp){if(e.seat||e.pendingSeat||e.state==="hopIn"){let t=e.seat?e.seat.approach:e.pos;St.send({t:"move",x:t.x,z:t.z}),e.moveTo(t.x,t.z),ha(te.myId)}}else n?(e.drive(n.x,n.z,n.moving),gr.walking=!0,ca-gr.at>.1&&Math.hypot(n.x-gr.x,n.z-gr.z)>.03&&(St.send({t:"move",x:n.x,z:n.z}),Object.assign(gr,{at:ca,x:n.x,z:n.z}))):gr.walking&&(gr.walking=!1,St.send({t:"move",x:e.pos.x,z:e.pos.z}),Object.assign(gr,{at:ca,x:e.pos.x,z:e.pos.z}))}function Gv(n){requestAnimationFrame(Gv);let e=Math.min(.05,(n-Tv)/1e3);Tv=n,qR(e),CR(e);let t=(te||ii)?.world;rd||(t?.shadowsDirty&&(zn.shadowMap.needsUpdate=!0,t.shadowsDirty=!1),zn.render(Ui,Ln))}Lv();requestAnimationFrame(Gv);
