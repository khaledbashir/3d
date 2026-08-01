(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=1e3,t=1001,n=1002,r=1003,i=1004,a=1005,o=1006,s=1007,c=1008,l=1009,u=1010,d=1011,f=1012,p=1013,m=1014,h=1015,g=1016,_=1017,v=1018,y=1020,b=35902,x=35899,S=1021,C=1022,w=1023,T=1026,E=1027,D=1028,ee=1029,O=1030,k=1031,te=1033,A=33776,j=33777,ne=33778,re=33779,M=35840,ie=35841,ae=35842,oe=35843,se=36196,N=37492,ce=37496,le=37488,P=37489,ue=37490,de=37491,fe=37808,pe=37809,me=37810,he=37811,ge=37812,_e=37813,ve=37814,ye=37815,be=37816,xe=37817,Se=37818,Ce=37819,we=37820,Te=37821,Ee=36492,De=36494,Oe=36495,ke=36283,Ae=36284,F=36285,je=36286,Me=2300,Ne=2301,I=2302,Pe=2303,L=2400,R=2401,Fe=2402,Ie=3200,Le=`srgb`,Re=`srgb-linear`,ze=`linear`,Be=`srgb`,Ve=7680,He=35044,Ue=2e3;function We(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ge(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Ke(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function qe(){let e=Ke(`canvas`);return e.style.display=`block`,e}var Je={},Ye=null;function Xe(...e){let t=`THREE.`+e.shift();Ye?Ye(`log`,t,...e):console.log(t,...e)}function Ze(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function z(...e){e=Ze(e);let t=`THREE.`+e.shift();if(Ye)Ye(`warn`,t,...e);else{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function B(...e){e=Ze(e);let t=`THREE.`+e.shift();if(Ye)Ye(`error`,t,...e);else{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Qe(...e){let t=e.join(` `);t in Je||(Je[t]=!0,z(...e))}function $e(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var et={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},tt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},nt=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),rt=1234567,it=Math.PI/180,at=180/Math.PI;function ot(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(nt[e&255]+nt[e>>8&255]+nt[e>>16&255]+nt[e>>24&255]+`-`+nt[t&255]+nt[t>>8&255]+`-`+nt[t>>16&15|64]+nt[t>>24&255]+`-`+nt[n&63|128]+nt[n>>8&255]+`-`+nt[n>>16&255]+nt[n>>24&255]+nt[r&255]+nt[r>>8&255]+nt[r>>16&255]+nt[r>>24&255]).toLowerCase()}function V(e,t,n){return Math.max(t,Math.min(n,e))}function st(e,t){return(e%t+t)%t}function ct(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function lt(e,t,n){return e===t?0:(n-e)/(t-e)}function ut(e,t,n){return(1-n)*e+n*t}function dt(e,t,n,r){return ut(e,t,1-Math.exp(-n*r))}function ft(e,t=1){return t-Math.abs(st(e,t*2)-t)}function pt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function mt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function ht(e,t){return e+Math.floor(Math.random()*(t-e+1))}function gt(e,t){return e+Math.random()*(t-e)}function _t(e){return e*(.5-Math.random())}function vt(e){e!==void 0&&(rt=e);let t=rt+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function yt(e){return e*it}function bt(e){return e*at}function xt(e){return(e&e-1)==0&&e!==0}function St(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Ct(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function wt(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:z(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Tt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`Invalid component type.`)}}function Et(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`Invalid component type.`)}}var H={DEG2RAD:it,RAD2DEG:at,generateUUID:ot,clamp:V,euclideanModulo:st,mapLinear:ct,inverseLerp:lt,lerp:ut,damp:dt,pingpong:ft,smoothstep:pt,smootherstep:mt,randInt:ht,randFloat:gt,randFloatSpread:_t,seededRandom:vt,degToRad:yt,radToDeg:bt,isPowerOfTwo:xt,ceilPowerOfTwo:St,floorPowerOfTwo:Ct,setQuaternionFromProperEuler:wt,normalize:Et,denormalize:Tt},U=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=V(this.x,e.x,t.x),this.y=V(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=V(this.x,e,t),this.y=V(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(V(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(V(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Dt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:z(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(V(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},W=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(kt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(kt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=V(this.x,e.x,t.x),this.y=V(this.y,e.y,t.y),this.z=V(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=V(this.x,e,t),this.y=V(this.y,e,t),this.z=V(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(V(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ot.copy(this).projectOnVector(e),this.sub(Ot)}reflect(e){return this.sub(Ot.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(V(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ot=new W,kt=new Dt,G=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(At.makeScale(e,t)),this}rotate(e){return this.premultiply(At.makeRotation(-e)),this}translate(e,t){return this.premultiply(At.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},At=new G,jt=new G().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mt=new G().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Nt(){let e={enabled:!0,workingColorSpace:Re,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=Ft(e.r),e.g=Ft(e.g),e.b=Ft(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=It(e.r),e.g=It(e.g),e.b=It(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?ze:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return Qe(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return Qe(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Re]:{primaries:t,whitePoint:r,transfer:ze,toXYZ:jt,fromXYZ:Mt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Le},outputColorSpaceConfig:{drawingBufferColorSpace:Le}},[Le]:{primaries:t,whitePoint:r,transfer:Be,toXYZ:jt,fromXYZ:Mt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Le}}}),e}var Pt=Nt();function Ft(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function It(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Lt,Rt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Lt===void 0&&(Lt=Ke(`canvas`)),Lt.width=e.width,Lt.height=e.height;let t=Lt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Lt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Ke(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Ft(i[e]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Ft(t[e]/255)*255):t[e]=Ft(t[e]);return{data:t,width:e.width,height:e.height}}else return z(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},zt=0,Bt=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,`id`,{value:zt++}),this.uuid=ot(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Vt(r[t].image)):e.push(Vt(r[t]))}else e=Vt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Vt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Rt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(z(`Texture: Unable to serialize Texture.`),{})}var Ht=0,Ut=new W,Wt=class r extends tt{constructor(e=r.DEFAULT_IMAGE,n=r.DEFAULT_MAPPING,i=t,a=t,s=o,u=c,d=w,f=l,p=r.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,`id`,{value:Ht++}),this.uuid=ot(),this.name=``,this.source=new Bt(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new U(0,0),this.repeat=new U(1,1),this.center=new U(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new G,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ut).x}get height(){return this.source.getSize(Ut).y}get depth(){return this.source.getSize(Ut).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){z(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){z(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(r){if(this.mapping!==300)return r;if(r.applyMatrix3(this.matrix),r.x<0||r.x>1)switch(this.wrapS){case e:r.x-=Math.floor(r.x);break;case t:r.x=r.x<0?0:1;break;case n:Math.abs(Math.floor(r.x)%2)===1?r.x=Math.ceil(r.x)-r.x:r.x-=Math.floor(r.x);break}if(r.y<0||r.y>1)switch(this.wrapT){case e:r.y-=Math.floor(r.y);break;case t:r.y=r.y<0?0:1;break;case n:Math.abs(Math.floor(r.y)%2)===1?r.y=Math.ceil(r.y)-r.y:r.y-=Math.floor(r.y);break}return this.flipY&&(r.y=1-r.y),r}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Wt.DEFAULT_IMAGE=null,Wt.DEFAULT_MAPPING=300,Wt.DEFAULT_ANISOTROPY=1;var Gt=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=V(this.x,e.x,t.x),this.y=V(this.y,e.y,t.y),this.z=V(this.z,e.z,t.z),this.w=V(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=V(this.x,e,t),this.y=V(this.y,e,t),this.z=V(this.z,e,t),this.w=V(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(V(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Kt=class extends tt{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:o,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Gt(0,0,e,t),this.scissorTest=!1,this.viewport=new Gt(0,0,e,t),this.textures=[];let r=new Wt({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:o,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Bt(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:`dispose`})}},qt=class extends Kt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Jt=class extends Wt{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Yt=class extends Wt{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Xt=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Zt.setFromMatrixColumn(e,0).length(),i=1/Zt.setFromMatrixColumn(e,1).length(),a=1/Zt.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($t,e,en)}lookAt(e,t,n){let r=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),tn.crossVectors(n,rn),tn.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),tn.crossVectors(n,rn)),tn.normalize(),nn.crossVectors(rn,tn),r[0]=tn.x,r[4]=nn.x,r[8]=rn.x,r[1]=tn.y,r[5]=nn.y,r[9]=rn.y,r[2]=tn.z,r[6]=nn.z,r[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],ee=r[13],O=r[2],k=r[6],te=r[10],A=r[14],j=r[3],ne=r[7],re=r[11],M=r[15];return i[0]=a*x+o*T+s*O+c*j,i[4]=a*S+o*E+s*k+c*ne,i[8]=a*C+o*D+s*te+c*re,i[12]=a*w+o*ee+s*A+c*M,i[1]=l*x+u*T+d*O+f*j,i[5]=l*S+u*E+d*k+f*ne,i[9]=l*C+u*D+d*te+f*re,i[13]=l*w+u*ee+d*A+f*M,i[2]=p*x+m*T+h*O+g*j,i[6]=p*S+m*E+h*k+g*ne,i[10]=p*C+m*D+h*te+g*re,i[14]=p*w+m*ee+h*A+g*M,i[3]=_*x+v*T+y*O+b*j,i[7]=_*S+v*E+y*k+b*ne,i[11]=_*C+v*D+y*te+b*re,i[15]=_*w+v*ee+y*A+b*M,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,ee=d*g-f*h,O=_*ee-v*D+y*E+b*T-x*w+S*C;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/O;return e[0]=(o*ee-s*D+c*E)*k,e[1]=(r*D-n*ee-i*E)*k,e[2]=(m*S-h*x+g*b)*k,e[3]=(d*x-u*S-f*b)*k,e[4]=(s*T-a*ee-c*w)*k,e[5]=(t*ee-r*T+i*w)*k,e[6]=(h*y-p*S-g*v)*k,e[7]=(l*S-d*y+f*v)*k,e[8]=(a*D-o*T+c*C)*k,e[9]=(n*T-t*D-i*C)*k,e[10]=(p*x-m*y+g*_)*k,e[11]=(u*y-l*x-f*_)*k,e[12]=(o*w-a*E-s*C)*k,e[13]=(t*E-n*w+r*C)*k,e[14]=(m*v-p*b-h*_)*k,e[15]=(l*b-u*v+d*_)*k,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinant();if(i===0)return n.set(1,1,1),t.identity(),this;let a=Zt.set(r[0],r[1],r[2]).length(),o=Zt.set(r[4],r[5],r[6]).length(),s=Zt.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Qt.copy(this);let c=1/a,l=1/o,u=1/s;return Qt.elements[0]*=c,Qt.elements[1]*=c,Qt.elements[2]*=c,Qt.elements[4]*=l,Qt.elements[5]*=l,Qt.elements[6]*=l,Qt.elements[8]*=u,Qt.elements[9]*=u,Qt.elements[10]*=u,t.setFromRotationMatrix(Qt),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Ue,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Ue,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Zt=new W,Qt=new Xt,$t=new W(0,0,0),en=new W(1,1,1),tn=new W,nn=new W,rn=new W,an=new Xt,on=new Dt,sn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(V(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-V(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(V(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-V(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(V(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-V(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:z(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return an.makeRotationFromQuaternion(e),this.setFromRotationMatrix(an,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return on.setFromEuler(this),this.setFromQuaternion(on,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};sn.DEFAULT_ORDER=`XYZ`;var cn=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},ln=0,un=new W,dn=new Dt,fn=new Xt,pn=new W,mn=new W,hn=new W,gn=new Dt,_n=new W(1,0,0),vn=new W(0,1,0),yn=new W(0,0,1),bn={type:`added`},xn={type:`removed`},Sn={type:`childadded`,child:null},Cn={type:`childremoved`,child:null},wn=class e extends tt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,`id`,{value:ln++}),this.uuid=ot(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new W,n=new sn,r=new Dt,i=new W(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Xt},normalMatrix:{value:new G}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return dn.setFromAxisAngle(e,t),this.quaternion.multiply(dn),this}rotateOnWorldAxis(e,t){return dn.setFromAxisAngle(e,t),this.quaternion.premultiply(dn),this}rotateX(e){return this.rotateOnAxis(_n,e)}rotateY(e){return this.rotateOnAxis(vn,e)}rotateZ(e){return this.rotateOnAxis(yn,e)}translateOnAxis(e,t){return un.copy(e).applyQuaternion(this.quaternion),this.position.add(un.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_n,e)}translateY(e){return this.translateOnAxis(vn,e)}translateZ(e){return this.translateOnAxis(yn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?pn.copy(e):pn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),mn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt(mn,pn,this.up):fn.lookAt(pn,mn,this.up),this.quaternion.setFromRotationMatrix(fn),r&&(fn.extractRotation(r.matrixWorld),dn.setFromRotationMatrix(fn),this.quaternion.premultiply(dn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(B(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bn),Sn.child=e,this.dispatchEvent(Sn),Sn.child=null):B(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xn),Cn.child=e,this.dispatchEvent(Cn),Cn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(fn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bn),Sn.child=e,this.dispatchEvent(Sn),Sn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mn,e,hn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mn,gn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let e=this.children;for(let t=0,n=e.length;t<n;t++)e[t].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material);if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};wn.DEFAULT_UP=new W(0,1,0),wn.DEFAULT_MATRIX_AUTO_UPDATE=!0,wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var K=class extends wn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Tn={type:`move`},En=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new K,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new K,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new K,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position),s=.02,l=.005;c.inputState.pinching&&o>s+l?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=s-l&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Tn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new K;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Dn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},On={h:0,s:0,l:0},kn={h:0,s:0,l:0};function An(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var q=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Le){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Pt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Pt.workingColorSpace){if(e=st(e,1),t=V(t,0,1),n=V(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=An(i,r,e+1/3),this.g=An(i,r,e),this.b=An(i,r,e-1/3)}return Pt.colorSpaceToWorking(this,r),this}setStyle(e,t=Le){function n(t){t!==void 0&&parseFloat(t)<1&&z(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:z(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);z(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Le){let n=Dn[e.toLowerCase()];return n===void 0?z(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ft(e.r),this.g=Ft(e.g),this.b=Ft(e.b),this}copyLinearToSRGB(e){return this.r=It(e.r),this.g=It(e.g),this.b=It(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Le){return Pt.workingToColorSpace(jn.copy(this),e),Math.round(V(jn.r*255,0,255))*65536+Math.round(V(jn.g*255,0,255))*256+Math.round(V(jn.b*255,0,255))}getHexString(e=Le){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Pt.workingColorSpace){Pt.workingToColorSpace(jn.copy(this),t);let n=jn.r,r=jn.g,i=jn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4;break}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Pt.workingColorSpace){return Pt.workingToColorSpace(jn.copy(this),t),e.r=jn.r,e.g=jn.g,e.b=jn.b,e}getStyle(e=Le){Pt.workingToColorSpace(jn.copy(this),e);let t=jn.r,n=jn.g,r=jn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(On),this.setHSL(On.h+e,On.s+t,On.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(On),e.getHSL(kn);let n=ut(On.h,kn.h,t),r=ut(On.s,kn.s,t),i=ut(On.l,kn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},jn=new q;q.NAMES=Dn;var Mn=class e{constructor(e,t=25e-5){this.isFogExp2=!0,this.name=``,this.color=new q(e),this.density=t}clone(){return new e(this.color,this.density)}toJSON(){return{type:`FogExp2`,name:this.name,color:this.color.getHex(),density:this.density}}},Nn=class extends wn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sn,this.environmentIntensity=1,this.environmentRotation=new sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Pn=new W,Fn=new W,In=new W,Ln=new W,Rn=new W,zn=new W,Bn=new W,Vn=new W,Hn=new W,Un=new W,Wn=new Gt,Gn=new Gt,Kn=new Gt,qn=class e{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Pn.subVectors(e,t),r.cross(Pn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Pn.subVectors(r,t),Fn.subVectors(n,t),In.subVectors(e,t);let a=Pn.dot(Pn),o=Pn.dot(Fn),s=Pn.dot(In),c=Fn.dot(Fn),l=Fn.dot(In),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Ln)===null?!1:Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Ln)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Ln.x),s.addScaledVector(a,Ln.y),s.addScaledVector(o,Ln.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Wn.setScalar(0),Gn.setScalar(0),Kn.setScalar(0),Wn.fromBufferAttribute(e,t),Gn.fromBufferAttribute(e,n),Kn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Wn,i.x),a.addScaledVector(Gn,i.y),a.addScaledVector(Kn,i.z),a}static isFrontFacing(e,t,n,r){return Pn.subVectors(n,t),Fn.subVectors(e,t),Pn.cross(Fn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),Pn.cross(Fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Rn.subVectors(r,n),zn.subVectors(i,n),Vn.subVectors(e,n);let s=Rn.dot(Vn),c=zn.dot(Vn);if(s<=0&&c<=0)return t.copy(n);Hn.subVectors(e,r);let l=Rn.dot(Hn),u=zn.dot(Hn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Rn,a);Un.subVectors(e,i);let f=Rn.dot(Un),p=zn.dot(Un);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(zn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Bn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Bn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Rn,a).addScaledVector(zn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Jn=class{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Xn):Xn.fromBufferAttribute(r,t),Xn.applyMatrix4(e.matrixWorld),this.expandByPoint(Xn);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Zn.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Zn.copy(e.boundingBox)),Zn.applyMatrix4(e.matrixWorld),this.union(Zn)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ir),ar.subVectors(this.max,ir),Qn.subVectors(e.a,ir),$n.subVectors(e.b,ir),er.subVectors(e.c,ir),tr.subVectors($n,Qn),nr.subVectors(er,$n),rr.subVectors(Qn,er);let t=[0,-tr.z,tr.y,0,-nr.z,nr.y,0,-rr.z,rr.y,tr.z,0,-tr.x,nr.z,0,-nr.x,rr.z,0,-rr.x,-tr.y,tr.x,0,-nr.y,nr.x,0,-rr.y,rr.x,0];return!cr(t,Qn,$n,er,ar)||(t=[1,0,0,0,1,0,0,0,1],!cr(t,Qn,$n,er,ar))?!1:(or.crossVectors(tr,nr),t=[or.x,or.y,or.z],cr(t,Qn,$n,er,ar))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Yn=[new W,new W,new W,new W,new W,new W,new W,new W],Xn=new W,Zn=new Jn,Qn=new W,$n=new W,er=new W,tr=new W,nr=new W,rr=new W,ir=new W,ar=new W,or=new W,sr=new W;function cr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){sr.fromArray(e,a);let o=i.x*Math.abs(sr.x)+i.y*Math.abs(sr.y)+i.z*Math.abs(sr.z),s=t.dot(sr),c=n.dot(sr),l=r.dot(sr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var lr=new W,ur=new U,dr=0,fr=class extends tt{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,`id`,{value:dr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=He,this.updateRanges=[],this.gpuType=h,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ur.fromBufferAttribute(this,t),ur.applyMatrix3(e),this.setXY(t,ur.x,ur.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)lr.fromBufferAttribute(this,t),lr.applyMatrix3(e),this.setXYZ(t,lr.x,lr.y,lr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)lr.fromBufferAttribute(this,t),lr.applyMatrix4(e),this.setXYZ(t,lr.x,lr.y,lr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)lr.fromBufferAttribute(this,t),lr.applyNormalMatrix(e),this.setXYZ(t,lr.x,lr.y,lr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)lr.fromBufferAttribute(this,t),lr.transformDirection(e),this.setXYZ(t,lr.x,lr.y,lr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Tt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Tt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Tt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Tt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Tt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),r=Et(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),r=Et(r,this.array),i=Et(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:`dispose`})}},pr=class extends fr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},mr=class extends fr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},hr=class extends fr{constructor(e,t,n){super(new Float32Array(e),t,n)}},gr=new Jn,_r=new W,vr=new W,yr=class{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?gr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_r.subVectors(e,this.center);let t=_r.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(_r,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_r.copy(e.center).add(vr)),this.expandByPoint(_r.copy(e.center).sub(vr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},br=0,xr=new Xt,Sr=new wn,Cr=new W,wr=new Jn,Tr=new Jn,Er=new W,Dr=class e extends tt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,`id`,{value:br++}),this.uuid=ot(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(We(e)?mr:pr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new G().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xr.makeRotationFromQuaternion(e),this.applyMatrix4(xr),this}rotateX(e){return xr.makeRotationX(e),this.applyMatrix4(xr),this}rotateY(e){return xr.makeRotationY(e),this.applyMatrix4(xr),this}rotateZ(e){return xr.makeRotationZ(e),this.applyMatrix4(xr),this}translate(e,t,n){return xr.makeTranslation(e,t,n),this.applyMatrix4(xr),this}scale(e,t,n){return xr.makeScale(e,t,n),this.applyMatrix4(xr),this}lookAt(e){return Sr.lookAt(e),Sr.updateMatrix(),this.applyMatrix4(Sr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cr).negate(),this.translate(Cr.x,Cr.y,Cr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new hr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&z(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){B(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];wr.setFromBufferAttribute(n),this.morphTargetsRelative?(Er.addVectors(this.boundingBox.min,wr.min),this.boundingBox.expandByPoint(Er),Er.addVectors(this.boundingBox.max,wr.max),this.boundingBox.expandByPoint(Er)):(this.boundingBox.expandByPoint(wr.min),this.boundingBox.expandByPoint(wr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&B(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){B(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new W,1/0);return}if(e){let n=this.boundingSphere.center;if(wr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Tr.setFromBufferAttribute(n),this.morphTargetsRelative?(Er.addVectors(wr.min,Tr.min),wr.expandByPoint(Er),Er.addVectors(wr.max,Tr.max),wr.expandByPoint(Er)):(wr.expandByPoint(Tr.min),wr.expandByPoint(Tr.max))}wr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Er.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Er));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Er.fromBufferAttribute(a,t),o&&(Cr.fromBufferAttribute(e,t),Er.add(Cr)),r=Math.max(r,n.distanceToSquared(Er))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&B(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){B(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv;this.hasAttribute(`tangent`)===!1&&this.setAttribute(`tangent`,new fr(new Float32Array(4*n.count),4));let a=this.getAttribute(`tangent`),o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new W,s[e]=new W;let c=new W,l=new W,u=new W,d=new U,f=new U,p=new U,m=new W,h=new W;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new W,y=new W,b=new W,x=new W;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0)n=new fr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new W,i=new W,a=new W,o=new W,s=new W,c=new W,l=new W,u=new W;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Er.fromBufferAttribute(e,t),Er.normalize(),e.setXYZ(t,Er.x,Er.y,Er.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new fr(a,r,i)}if(this.index===null)return z(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:`dispose`})}},Or=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=He,this.updateRanges=[],this.version=0,this.uuid=ot()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ot()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ot()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},kr=new W,Ar=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)kr.fromBufferAttribute(this,t),kr.applyMatrix4(e),this.setXYZ(t,kr.x,kr.y,kr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kr.fromBufferAttribute(this,t),kr.applyNormalMatrix(e),this.setXYZ(t,kr.x,kr.y,kr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kr.fromBufferAttribute(this,t),kr.transformDirection(e),this.setXYZ(t,kr.x,kr.y,kr.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Tt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Et(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Tt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Tt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Tt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Tt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),r=Et(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),r=Et(r,this.array),i=Et(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){Xe(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new fr(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Xe(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},jr=0,Mr=class extends tt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,`id`,{value:jr++}),this.uuid=ot(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new q(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ve,this.stencilZFail=Ve,this.stencilZPass=Ve,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){z(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){z(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Nr=class extends Mr{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new q(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Pr,Fr=new W,Ir=new W,Lr=new W,Rr=new U,zr=new U,Br=new Xt,Vr=new W,Hr=new W,Ur=new W,Wr=new U,Gr=new U,Kr=new U,qr=class extends wn{constructor(e=new Nr){if(super(),this.isSprite=!0,this.type=`Sprite`,Pr===void 0){Pr=new Dr;let e=new Or(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);Pr.setIndex([0,1,2,0,2,3]),Pr.setAttribute(`position`,new Ar(e,3,0,!1)),Pr.setAttribute(`uv`,new Ar(e,2,3,!1))}this.geometry=Pr,this.material=e,this.center=new U(.5,.5),this.count=1}raycast(e,t){e.camera===null&&B(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),Ir.setFromMatrixScale(this.matrixWorld),Br.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Lr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ir.multiplyScalar(-Lr.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;Jr(Vr.set(-.5,-.5,0),Lr,a,Ir,r,i),Jr(Hr.set(.5,-.5,0),Lr,a,Ir,r,i),Jr(Ur.set(.5,.5,0),Lr,a,Ir,r,i),Wr.set(0,0),Gr.set(1,0),Kr.set(1,1);let o=e.ray.intersectTriangle(Vr,Hr,Ur,!1,Fr);if(o===null&&(Jr(Hr.set(-.5,.5,0),Lr,a,Ir,r,i),Gr.set(0,1),o=e.ray.intersectTriangle(Vr,Ur,Hr,!1,Fr),o===null))return;let s=e.ray.origin.distanceTo(Fr);s<e.near||s>e.far||t.push({distance:s,point:Fr.clone(),uv:qn.getInterpolation(Fr,Vr,Hr,Ur,Wr,Gr,Kr,new U),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Jr(e,t,n,r,i,a){Rr.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?zr.copy(Rr):(zr.x=a*Rr.x-i*Rr.y,zr.y=i*Rr.x+a*Rr.y),e.copy(t),e.x+=zr.x,e.y+=zr.y,e.applyMatrix4(Br)}var Yr=new W,Xr=new W,Zr=new W,Qr=new W,$r=new W,ei=new W,ti=new W,ni=class{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Yr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yr.copy(this.origin).addScaledVector(this.direction,t),Yr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Xr.copy(e).add(t).multiplyScalar(.5),Zr.copy(t).sub(e).normalize(),Qr.copy(this.origin).sub(Xr);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Zr),o=Qr.dot(this.direction),s=-Qr.dot(Zr),c=Qr.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0)if(u=a*s-o,d=a*o-s,p=i*l,u>=0)if(d>=-p)if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c);else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Xr).addScaledVector(Zr,d),f}intersectSphere(e,t){Yr.subVectors(e.center,this.origin);let n=Yr.dot(this.direction),r=Yr.dot(Yr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Yr)!==null}intersectTriangle(e,t,n,r,i){$r.subVectors(t,e),ei.subVectors(n,e),ti.crossVectors($r,ei);let a=this.direction.dot(ti),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Qr.subVectors(this.origin,e);let s=o*this.direction.dot(ei.crossVectors(Qr,ei));if(s<0)return null;let c=o*this.direction.dot($r.cross(Qr));if(c<0||s+c>a)return null;let l=-o*Qr.dot(ti);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ri=class extends Mr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new q(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ii=new Xt,ai=new ni,oi=new yr,si=new W,ci=new W,li=new W,ui=new W,di=new W,fi=new W,pi=new W,mi=new W,J=class extends wn{constructor(e=new Dr,t=new ri){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){fi.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(di.fromBufferAttribute(s,e),a?fi.addScaledVector(di,r):fi.addScaledVector(di.sub(t),r))}t.add(fi)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),oi.copy(n.boundingSphere),oi.applyMatrix4(i),ai.copy(e.ray).recast(e.near),!(oi.containsPoint(ai.origin)===!1&&(ai.intersectSphere(oi,si)===null||ai.origin.distanceToSquared(si)>(e.far-e.near)**2))&&(ii.copy(i).invert(),ai.copy(e.ray).applyMatrix4(ii),!(n.boundingBox!==null&&ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ai)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null)if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=gi(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=gi(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}else if(s!==void 0)if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=gi(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=gi(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}};function hi(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;mi.copy(s),mi.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(mi);return l<n.near||l>n.far?null:{distance:l,point:mi.clone(),object:e}}function gi(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,ci),e.getVertexPosition(c,li),e.getVertexPosition(l,ui);let u=hi(e,t,n,r,ci,li,ui,pi);if(u){let e=new W;qn.getBarycoord(pi,ci,li,ui,e),i&&(u.uv=qn.getInterpolatedAttribute(i,s,c,l,e,new U)),a&&(u.uv1=qn.getInterpolatedAttribute(a,s,c,l,e,new U)),o&&(u.normal=qn.getInterpolatedAttribute(o,s,c,l,e,new W),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new W,materialIndex:0};qn.getNormal(ci,li,ui,t.normal),u.face=t,u.barycoord=e}return u}var _i=class extends Wt{constructor(e=null,t=1,n=1,i,a,o,s,c,l=r,u=r,d,f){super(null,o,s,c,l,u,i,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},vi=class extends fr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},yi=new Xt,bi=new Xt,xi=[],Si=new Jn,Ci=new Xt,wi=new J,Ti=new yr,Ei=class extends J{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new vi(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,Ci)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Jn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,yi),Si.copy(e.boundingBox).applyMatrix4(yi),this.boundingBox.union(Si)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new yr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,yi),Ti.copy(e.boundingSphere).applyMatrix4(yi),this.boundingSphere.union(Ti)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(wi.geometry=this.geometry,wi.material=this.material,wi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ti.copy(this.boundingSphere),Ti.applyMatrix4(n),e.ray.intersectsSphere(Ti)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,yi),bi.multiplyMatrices(n,yi),wi.matrixWorld=bi,wi.raycast(e,xi);for(let e=0,n=xi.length;e<n;e++){let n=xi[e];n.instanceId=i,n.object=this,t.push(n)}xi.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new vi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new _i(new Float32Array(r*this.count),r,this.count,D,h));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:`dispose`}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Di=new W,Oi=new W,ki=new G,Ai=class{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Di.subVectors(n,t).cross(Oi.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Di),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ki.getNormalMatrix(e),r=this.coplanarPoint(Di).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ji=new yr,Mi=new U(.5,.5),Ni=new W,Pi=class{constructor(e=new Ai,t=new Ai,n=new Ai,r=new Ai,i=new Ai,a=new Ai){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ue,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ji)}intersectsSprite(e){return ji.center.set(0,0,0),ji.radius=.7071067811865476+Mi.distanceTo(e.center),ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Ni.x=r.normal.x>0?e.max.x:e.min.x,Ni.y=r.normal.y>0?e.max.y:e.min.y,Ni.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ni)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Fi=class extends Mr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new q(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ii=new W,Li=new W,Ri=new Xt,zi=new ni,Bi=new yr,Vi=new W,Hi=new W,Ui=class extends wn{constructor(e=new Dr,t=new Fi){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)Ii.fromBufferAttribute(t,e-1),Li.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=Ii.distanceTo(Li);e.setAttribute(`lineDistance`,new hr(n,1))}else z(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bi.copy(n.boundingSphere),Bi.applyMatrix4(r),Bi.radius+=i,e.ray.intersectsSphere(Bi)===!1)return;Ri.copy(r).invert(),zi.copy(e.ray).applyMatrix4(Ri);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=Wi(this,e,zi,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=Wi(this,e,zi,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=Wi(this,e,zi,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=Wi(this,e,zi,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Wi(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(Ii.fromBufferAttribute(s,i),Li.fromBufferAttribute(s,a),n.distanceSqToSegment(Ii,Li,Vi,Hi)>r)return;Vi.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(Vi);if(!(c<t.near||c>t.far))return{distance:c,point:Hi.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var Gi=new W,Ki=new W,qi=class extends Ui{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)Gi.fromBufferAttribute(t,e),Ki.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+Gi.distanceTo(Ki);e.setAttribute(`lineDistance`,new hr(n,1))}else z(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},Ji=class extends Mr{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new q(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Yi=new Xt,Xi=new ni,Zi=new yr,Qi=new W,$i=class extends wn{constructor(e=new Dr,t=new Ji){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zi.copy(n.boundingSphere),Zi.applyMatrix4(r),Zi.radius+=i,e.ray.intersectsSphere(Zi)===!1)return;Yi.copy(r).invert(),Xi.copy(e.ray).applyMatrix4(Yi);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);Qi.fromBufferAttribute(l,n),ea(Qi,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)Qi.fromBufferAttribute(l,a),ea(Qi,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function ea(e,t,n,r,i,a,o){let s=Xi.distanceSqToPoint(e);if(s<n){let n=new W;Xi.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var ta=class extends Wt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},na=class extends Wt{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ra=class extends Wt{constructor(e,t,n=m,i,a,o,s=r,c=r,l,u=T,d=1){if(u!==1026&&u!==1027)throw Error(`DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},i,a,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Bt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ia=class extends ra{constructor(e,t=m,n=301,i,a,o=r,s=r,c,l=T){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,a,o,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},aa=class extends Wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Y=class e extends Dr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new hr(c,3)),this.setAttribute(`normal`,new hr(l,3)),this.setAttribute(`uv`,new hr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new W;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},oa=class e extends Dr{constructor(e=1,t=1,n=4,r=8,i=1){super(),this.type=`CapsuleGeometry`,this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:i},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),i=Math.max(1,Math.floor(i));let a=[],o=[],s=[],c=[],l=t/2,u=Math.PI/2*e,d=t,f=2*u+d,p=n*2+i,m=r+1,h=new W,g=new W;for(let _=0;_<=p;_++){let v=0,y=0,b=0,x=0;if(_<=n){let t=_/n,r=t*Math.PI/2;y=-l-e*Math.cos(r),b=e*Math.sin(r),x=-e*Math.cos(r),v=t*u}else if(_<=n+i){let r=(_-n)/i;y=-l+r*t,b=e,x=0,v=u+r*d}else{let t=(_-n-i)/n,r=t*Math.PI/2;y=l+e*Math.sin(r),b=e*Math.cos(r),x=e*Math.sin(r),v=u+d+t*u}let S=Math.max(0,Math.min(1,v/f)),C=0;_===0?C=.5/r:_===p&&(C=-.5/r);for(let e=0;e<=r;e++){let t=e/r,n=t*Math.PI*2,i=Math.sin(n),a=Math.cos(n);g.x=-b*a,g.y=y,g.z=b*i,o.push(g.x,g.y,g.z),h.set(-b*a,x,b*i),h.normalize(),s.push(h.x,h.y,h.z),c.push(t+C,S)}if(_>0){let e=(_-1)*m;for(let t=0;t<r;t++){let n=e+t,r=e+t+1,i=_*m+t,o=_*m+t+1;a.push(n,r,i),a.push(r,o,i)}}}this.setIndex(a),this.setAttribute(`position`,new hr(o,3)),this.setAttribute(`normal`,new hr(s,3)),this.setAttribute(`uv`,new hr(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},sa=class e extends Dr{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new W,l=new U;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new hr(a,3)),this.setAttribute(`normal`,new hr(o,3)),this.setAttribute(`uv`,new hr(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ca=class e extends Dr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new hr(u,3)),this.setAttribute(`normal`,new hr(d,3)),this.setAttribute(`uv`,new hr(f,2));function _(){let a=new W,_=new W,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new U,m=new W,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},la=class e extends ca{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ua=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){z(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new U:new W);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new W,r=[],i=[],a=[],o=new W,s=new Xt;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new W)}i[0]=new W,a[0]=new W;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(V(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(V(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},da=class extends ua{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new U){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},fa=class extends da{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function pa(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var ma=new W,ha=new W,ga=new pa,_a=new pa,va=new pa,ya=class extends ua{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new W){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(ha.subVectors(r[0],r[1]).add(r[0]),c=ha);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(ma.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=ma),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),ga.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),_a.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),va.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(ga.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),_a.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),va.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(ga.calc(s),_a.calc(s),va.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new W().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ba(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function xa(e,t){let n=1-e;return n*n*t}function Sa(e,t){return 2*(1-e)*e*t}function Ca(e,t){return e*e*t}function wa(e,t,n,r){return xa(e,t)+Sa(e,n)+Ca(e,r)}function Ta(e,t){let n=1-e;return n*n*n*t}function Ea(e,t){let n=1-e;return 3*n*n*e*t}function Da(e,t){return 3*(1-e)*e*e*t}function Oa(e,t){return e*e*e*t}function ka(e,t,n,r,i){return Ta(e,t)+Ea(e,n)+Da(e,r)+Oa(e,i)}var Aa=class extends ua{constructor(e=new U,t=new U,n=new U,r=new U){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new U){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(ka(e,r.x,i.x,a.x,o.x),ka(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ja=class extends ua{constructor(e=new W,t=new W,n=new W,r=new W){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new W){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(ka(e,r.x,i.x,a.x,o.x),ka(e,r.y,i.y,a.y,o.y),ka(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ma=class extends ua{constructor(e=new U,t=new U){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new U){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Na=class extends ua{constructor(e=new W,t=new W){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new W){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new W){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Pa=class extends ua{constructor(e=new U,t=new U,n=new U){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new U){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(wa(e,r.x,i.x,a.x),wa(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fa=class extends ua{constructor(e=new W,t=new W,n=new W){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new W){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(wa(e,r.x,i.x,a.x),wa(e,r.y,i.y,a.y),wa(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ia=class extends ua{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new U){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(ba(o,s.x,c.x,l.x,u.x),ba(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new U().fromArray(n))}return this}},La=Object.freeze({__proto__:null,ArcCurve:fa,CatmullRomCurve3:ya,CubicBezierCurve:Aa,CubicBezierCurve3:ja,EllipseCurve:da,LineCurve:Ma,LineCurve3:Na,QuadraticBezierCurve:Pa,QuadraticBezierCurve3:Fa,SplineCurve:Ia}),Ra=class extends ua{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new La[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new La[n.type]().fromJSON(n))}return this}},za=class extends Ra{constructor(e){super(),this.type=`Path`,this.currentPoint=new U,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ma(this.currentPoint.clone(),new U(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new Pa(this.currentPoint.clone(),new U(e,t),new U(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new Aa(this.currentPoint.clone(),new U(e,t),new U(n,r),new U(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new Ia([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new da(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ba=class extends za{constructor(e){super(e),this.uuid=ot(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new za().fromJSON(n))}return this}};function Va(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=Ha(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=Ya(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return Wa(a,o,n,s,c,l,0),o}function Ha(e,t,n,r,i){let a;if(i===bo(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=_o(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=_o(i/r|0,e[i],e[i+1],a);return a&&co(a,a.next)&&(vo(a),a=a.next),a}function Ua(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(co(n,n.next)||so(n.prev,n,n.next)===0)){if(vo(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function Wa(e,t,n,r,i,a,o){if(!e)return;!o&&a&&eo(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?Ka(e,r,i,a):Ga(e)){t.push(c.i,e.i,l.i),vo(e),e=l.next,s=l.next;continue}if(e=l,e===s){o?o===1?(e=qa(Ua(e),t),Wa(e,t,n,r,i,a,2)):o===2&&Ja(e,t,n,r,i,a):Wa(Ua(e),t,n,r,i,a,1);break}}}function Ga(e){let t=e.prev,n=e,r=e.next;if(so(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&ao(i,s,a,c,o,l,m.x,m.y)&&so(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Ka(e,t,n,r){let i=e.prev,a=e,o=e.next;if(so(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=no(p,m,t,n,r),v=no(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&ao(s,u,c,d,l,f,y.x,y.y)&&so(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&ao(s,u,c,d,l,f,b.x,b.y)&&so(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&ao(s,u,c,d,l,f,y.x,y.y)&&so(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&ao(s,u,c,d,l,f,b.x,b.y)&&so(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function qa(e,t){let n=e;do{let r=n.prev,i=n.next.next;!co(r,i)&&lo(r,n,n.next,i)&&mo(r,i)&&mo(i,r)&&(t.push(r.i,n.i,i.i),vo(n),vo(n.next),n=e=i),n=n.next}while(n!==e);return Ua(n)}function Ja(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&oo(o,e)){let s=go(o,e);o=Ua(o,o.next),s=Ua(s,s.next),Wa(o,t,n,r,i,a,0),Wa(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function Ya(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=Ha(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(ro(o))}i.sort(Xa);for(let e=0;e<i.length;e++)n=Za(i[e],n);return n}function Xa(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function Za(e,t){let n=Qa(e,t);if(!n)return t;let r=go(n,e);return Ua(r,r.next),Ua(n,n.next)}function Qa(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(co(e,n))return n;do{if(co(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&io(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);mo(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&$a(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function $a(e,t){return so(e.prev,e,t.prev)<0&&so(t.next,e,e.next)<0}function eo(e,t,n,r){let i=e;do i.z===0&&(i.z=no(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,to(i)}function to(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function no(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function ro(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function io(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function ao(e,t,n,r,i,a,o,s){return!(e===o&&t===s)&&io(e,t,n,r,i,a,o,s)}function oo(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!po(e,t)&&(mo(e,t)&&mo(t,e)&&ho(e,t)&&(so(e.prev,e,t.prev)||so(e,t.prev,t))||co(e,t)&&so(e.prev,e,e.next)>0&&so(t.prev,t,t.next)>0)}function so(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function co(e,t){return e.x===t.x&&e.y===t.y}function lo(e,t,n,r){let i=fo(so(e,t,n)),a=fo(so(e,t,r)),o=fo(so(n,r,e)),s=fo(so(n,r,t));return!!(i!==a&&o!==s||i===0&&uo(e,n,t)||a===0&&uo(e,r,t)||o===0&&uo(n,e,r)||s===0&&uo(n,t,r))}function uo(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function fo(e){return e>0?1:e<0?-1:0}function po(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&lo(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function mo(e,t){return so(e.prev,e,e.next)<0?so(e,t,e.next)>=0&&so(e,e.prev,t)>=0:so(e,t,e.prev)<0||so(e,e.next,t)<0}function ho(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function go(e,t){let n=yo(e.i,e.x,e.y),r=yo(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function _o(e,t,n,r){let i=yo(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function vo(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function yo(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function bo(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var xo=class{static triangulate(e,t,n=2){return Va(e,t,n)}},So=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];Co(e),wo(n,e);let a=e.length;t.forEach(Co);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,wo(n,t[e]);let o=xo.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function Co(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function wo(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var To=class e extends Dr{constructor(e=new Ba([new U(.5,.5),new U(-.5,.5),new U(-.5,-.5),new U(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new hr(r,3)),this.setAttribute(`uv`,new hr(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0?!0:t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?Eo:t.UVGenerator,g,_=!1,v,y,b,x;if(m){g=m.getSpacedPoints(s),_=!0,l=!1;let e=m.isCatmullRomCurve3?m.closed:!1;v=m.computeFrenetFrames(s,e),y=new W,b=new W,x=new W}l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!So.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];So.isClockWise(t)&&(w[e]=t.reverse())}}function T(e){let t=1e-10;t*t;let n=e[0];for(let t=1;t<=e.length;t++){let r=t%e.length,i=e[r],a=i.x-n.x,o=i.y-n.y,s=a*a+o*o,c=Math.max(Math.abs(i.x),Math.abs(i.y),Math.abs(n.x),Math.abs(n.y));if(s<=10000000000000001e-36*c*c){e.splice(r,1),t--;continue}n=i}}T(C),w.forEach(T);let E=w.length,D=C;for(let e=0;e<E;e++){let t=w[e];C=C.concat(t)}function ee(e,t,n){return t||B(`ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let O=C.length;function k(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new U(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new U(r/a,i/a)}let te=[];for(let e=0,t=D.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),te[e]=k(D[e],D[n],D[r]);let A=[],j,ne=te.concat();for(let e=0,t=E;e<t;e++){let t=w[e];j=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),j[e]=k(t[e],t[r],t[i]);A.push(j),ne=ne.concat(j)}let re;if(p===0)re=So.triangulateShape(D,w);else{let e=[],t=[];for(let n=0;n<p;n++){let r=n/p,i=u*Math.cos(r*Math.PI/2),a=d*Math.sin(r*Math.PI/2)+f;for(let t=0,n=D.length;t<n;t++){let n=ee(D[t],te[t],a);N(n.x,n.y,-i),r===0&&e.push(n)}for(let e=0,n=E;e<n;e++){let n=w[e];j=A[e];let o=[];for(let e=0,t=n.length;e<t;e++){let t=ee(n[e],j[e],a);N(t.x,t.y,-i),r===0&&o.push(t)}r===0&&t.push(o)}}re=So.triangulateShape(e,t)}let M=re.length,ie=d+f;for(let e=0;e<O;e++){let t=l?ee(C[e],ne[e],ie):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),N(x.x,x.y,x.z)):N(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<O;t++){let n=l?ee(C[t],ne[t],ie):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),N(x.x,x.y,x.z)):N(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=D.length;e<t;e++){let t=ee(D[e],te[e],r);N(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];j=A[e];for(let e=0,i=t.length;e<i;e++){let i=ee(t[e],j[e],r);_?N(i.x,i.y+g[s-1].y,g[s-1].x+n):N(i.x,i.y,c+n)}}}ae(),oe();function ae(){let e=r.length/3;if(l){let e=0,t=O*e;for(let e=0;e<M;e++){let n=re[e];ce(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=O*e;for(let e=0;e<M;e++){let n=re[e];ce(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<M;e++){let t=re[e];ce(t[2],t[1],t[0])}for(let e=0;e<M;e++){let t=re[e];ce(t[0]+O*s,t[1]+O*s,t[2]+O*s)}}n.addGroup(e,r.length/3-e,0)}function oe(){let e=r.length/3,t=0;se(D,t),t+=D.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];se(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function se(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=O*e,a=O*(e+1);le(t+r+n,t+i+n,t+i+a,t+r+a)}}}function N(e,t,n){a.push(e),a.push(t),a.push(n)}function ce(e,t,i){P(e),P(t),P(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);ue(o[0]),ue(o[1]),ue(o[2])}function le(e,t,i,a){P(e),P(t),P(a),P(t),P(i),P(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);ue(s[0]),ue(s[1]),ue(s[3]),ue(s[1]),ue(s[2]),ue(s[3])}function P(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function ue(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Do(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new La[i.type]().fromJSON(i)),new e(r,t.options)}},Eo={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new U(a,o),new U(s,c),new U(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new U(o,1-c),new U(l,1-d),new U(f,1-m),new U(h,1-_)]:[new U(s,1-c),new U(u,1-d),new U(p,1-m),new U(g,1-_)]}};function Do(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var Oo=class e extends Dr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new hr(p,3)),this.setAttribute(`normal`,new hr(m,3)),this.setAttribute(`uv`,new hr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},ko=class e extends Dr{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new W,p=new U;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new hr(s,3)),this.setAttribute(`normal`,new hr(c,3)),this.setAttribute(`uv`,new hr(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Ao=class e extends Dr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new W,d=new W,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=0;f===0&&a===0?v=.5/t:f===n&&s===Math.PI&&(v=-.5/t);for(let n=0;n<=t;n++){let s=n/t;u.x=-e*Math.cos(r+s*i)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(r+s*i)*Math.sin(a+_*o),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(s+v,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new hr(p,3)),this.setAttribute(`normal`,new hr(m,3)),this.setAttribute(`uv`,new hr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},jo=class e extends Dr{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new W,f=new W,p=new W;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new hr(c,3)),this.setAttribute(`normal`,new hr(l,3)),this.setAttribute(`uv`,new hr(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},Mo=class e extends Dr{constructor(e=new Fa(new W(-1,-1,0),new W(-1,1,0),new W(1,1,0)),t=64,n=1,r=8,i=!1){super(),this.type=`TubeGeometry`,this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:i};let a=e.computeFrenetFrames(t,i);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new W,s=new W,c=new U,l=new W,u=[],d=[],f=[],p=[];m(),this.setIndex(p),this.setAttribute(`position`,new hr(u,3)),this.setAttribute(`normal`,new hr(d,3)),this.setAttribute(`uv`,new hr(f,2));function m(){for(let e=0;e<t;e++)h(e);h(i===!1?t:0),_(),g()}function h(i){l=e.getPointAt(i/t,l);let c=a.normals[i],f=a.binormals[i];for(let e=0;e<=r;e++){let t=e/r*Math.PI*2,i=Math.sin(t),a=-Math.cos(t);s.x=a*c.x+i*f.x,s.y=a*c.y+i*f.y,s.z=a*c.z+i*f.z,s.normalize(),d.push(s.x,s.y,s.z),o.x=l.x+n*s.x,o.y=l.y+n*s.y,o.z=l.z+n*s.z,u.push(o.x,o.y,o.z)}}function g(){for(let e=1;e<=t;e++)for(let t=1;t<=r;t++){let n=(r+1)*(e-1)+(t-1),i=(r+1)*e+(t-1),a=(r+1)*e+t,o=(r+1)*(e-1)+t;p.push(n,i,o),p.push(i,a,o)}}function _(){for(let e=0;e<=t;e++)for(let n=0;n<=r;n++)c.x=e/t,c.y=n/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(t){return new e(new La[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function No(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Fo(i))i.isRenderTargetTexture?(z(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i))if(Fo(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice();else t[n][r]=i}}return t}function Po(e){let t={};for(let n=0;n<e.length;n++){let r=No(e[n]);for(let e in r)t[e]=r[e]}return t}function Fo(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Io(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Lo(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Pt.workingColorSpace}var Ro={clone:No,merge:Po},zo=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bo=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Vo=class extends Mr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zo,this.fragmentShader=Bo,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=No(e.uniforms),this.uniformsGroups=Io(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ho=class extends Vo{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},X=class extends Mr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new q(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new q(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new U(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Uo=class extends X{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:``,PHYSICAL:``},this.type=`MeshPhysicalMaterial`,this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new U(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,`reflectivity`,{get:function(){return V(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new q(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new q(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new q(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:``,PHYSICAL:``},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Wo=class extends Mr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Ie,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Go=class extends Mr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ko(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}var qo=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`call to abstract method`)}intervalChanged_(){}},Jo=class extends qo{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:L,endingEnd:L}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case R:i=e,o=2*t-n;break;case Fe:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case R:a=e,s=2*n-t;break;case Fe:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Yo=class extends qo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Xo=class extends qo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Zo=class extends qo{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.settings||this.DefaultSettings_,u=l.inTangents,d=l.outTangents;if(!u||!d){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let f=o*2,p=e-1;for(let l=0;l!==o;++l){let o=a[c+l],m=a[s+l],h=p*f+l*2,g=d[h],_=d[h+1],v=e*f+l*2,y=u[v],b=u[v+1],x=(n-t)/(r-t),S,C,w,T,E;for(let e=0;e<8;e++){S=x*x,C=S*x,w=1-x,T=w*w,E=T*w;let e=E*t+3*T*x*g+3*w*S*y+C*r-n;if(Math.abs(e)<1e-10)break;let i=3*T*(g-t)+6*w*x*(y-g)+3*S*(r-y);if(Math.abs(i)<1e-10)break;x-=e/i,x=Math.max(0,Math.min(1,x))}i[l]=E*o+3*T*x*_+3*w*S*b+C*m}return i}},Qo=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Ko(t,this.TimeBufferType),this.values=Ko(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ko(e.times,Array),values:Ko(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Xo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Yo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Jo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Zo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case Me:t=this.InterpolantFactoryMethodDiscrete;break;case Ne:t=this.InterpolantFactoryMethodLinear;break;case I:t=this.InterpolantFactoryMethodSmooth;break;case Pe:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t);return z(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Me;case this.InterpolantFactoryMethodLinear:return Ne;case this.InterpolantFactoryMethodSmooth:return I;case this.InterpolantFactoryMethodBezier:return Pe}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(B(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(B(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){B(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){B(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Ge(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){B(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===I,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0]))if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Qo.prototype.ValueTypeName=``,Qo.prototype.TimeBufferType=Float32Array,Qo.prototype.ValueBufferType=Float32Array,Qo.prototype.DefaultInterpolation=Ne;var $o=class extends Qo{constructor(e,t,n){super(e,t,n)}};$o.prototype.ValueTypeName=`bool`,$o.prototype.ValueBufferType=Array,$o.prototype.DefaultInterpolation=Me,$o.prototype.InterpolantFactoryMethodLinear=void 0,$o.prototype.InterpolantFactoryMethodSmooth=void 0;var es=class extends Qo{constructor(e,t,n,r){super(e,t,n,r)}};es.prototype.ValueTypeName=`color`;var ts=class extends Qo{constructor(e,t,n,r){super(e,t,n,r)}};ts.prototype.ValueTypeName=`number`;var ns=class extends qo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Dt.slerpFlat(i,0,a,c-o,a,c,s);return i}},rs=class extends Qo{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new ns(this.times,this.values,this.getValueSize(),e)}};rs.prototype.ValueTypeName=`quaternion`,rs.prototype.InterpolantFactoryMethodSmooth=void 0;var is=class extends Qo{constructor(e,t,n){super(e,t,n)}};is.prototype.ValueTypeName=`string`,is.prototype.ValueBufferType=Array,is.prototype.DefaultInterpolation=Me,is.prototype.InterpolantFactoryMethodLinear=void 0,is.prototype.InterpolantFactoryMethodSmooth=void 0;var as=class extends Qo{constructor(e,t,n,r){super(e,t,n,r)}};as.prototype.ValueTypeName=`vector`;var os={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(ss(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!ss(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function ss(e){try{let t=e.slice(e.indexOf(`:`)+1);return new URL(t).protocol===`blob:`}catch{return!1}}var cs=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||=new AbortController,this._abortController}},ls=class{constructor(e){this.manager=e===void 0?cs:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ls.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var us=new WeakMap,ds=class extends ls{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=os.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);else{let e=us.get(a);e===void 0&&(e=[],us.set(a,e)),e.push({onLoad:t,onError:r})}return a}let o=Ke(`img`);function s(){l(),t&&t(this);let n=us.get(this)||[];for(let e=0;e<n.length;e++){let t=n[e];t.onLoad&&t.onLoad(this)}us.delete(this),i.manager.itemEnd(e)}function c(t){l(),r&&r(t),os.remove(`image:${e}`);let n=us.get(this)||[];for(let e=0;e<n.length;e++){let r=n[e];r.onError&&r.onError(t)}us.delete(this),i.manager.itemError(e),i.manager.itemEnd(e)}function l(){o.removeEventListener(`load`,s,!1),o.removeEventListener(`error`,c,!1)}return o.addEventListener(`load`,s,!1),o.addEventListener(`error`,c,!1),e.slice(0,5)!==`data:`&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),os.add(`image:${e}`,o),i.manager.itemStart(e),o.src=e,o}},fs=class extends ls{constructor(e){super(e)}load(e,t,n,r){let i=new Wt,a=new ds(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(e){i.image=e,i.needsUpdate=!0,t!==void 0&&t(i)},n,r),i}},ps=class extends wn{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new q(e),this.intensity=t}dispose(){this.dispatchEvent({type:`dispose`})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ms=class extends ps{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new q(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},hs=new Xt,gs=new W,_s=new W,vs=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new U(512,512),this.mapType=l,this.map=null,this.mapPass=null,this.matrix=new Xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pi,this._frameExtents=new U(1,1),this._viewportCount=1,this._viewports=[new Gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;gs.setFromMatrixPosition(e.matrixWorld),t.position.copy(gs),_s.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_s),t.updateMatrixWorld(),hs.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hs,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===2001||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(hs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ys=new W,bs=new Dt,xs=new W,Ss=class extends wn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Xt,this.projectionMatrix=new Xt,this.projectionMatrixInverse=new Xt,this.coordinateSystem=Ue,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ys,bs,xs),xs.x===1&&xs.y===1&&xs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ys,bs,xs.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(ys,bs,xs),xs.x===1&&xs.y===1&&xs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ys,bs,xs.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Cs=new W,ws=new U,Ts=new U,Es=class extends Ss{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=at*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(it*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return at*2*Math.atan(Math.tan(it*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Cs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Cs.x,Cs.y).multiplyScalar(-e/Cs.z),Cs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Cs.x,Cs.y).multiplyScalar(-e/Cs.z)}getViewSize(e,t){return this.getViewBounds(e,ws,Ts),t.subVectors(Ts,ws)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(it*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ds=class extends vs{constructor(){super(new Es(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=at*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,i=e.distance||t.far;(n!==t.fov||r!==t.aspect||i!==t.far)&&(t.fov=n,t.aspect=r,t.far=i,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Os=class extends ps{constructor(e,t,n=0,r=Math.PI/3,i=0,a=2){super(e,t),this.isSpotLight=!0,this.type=`SpotLight`,this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.target=new wn,this.distance=n,this.angle=r,this.penumbra=i,this.decay=a,this.map=null,this.shadow=new Ds}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},ks=class extends vs{constructor(){super(new Es(90,1,.5,500)),this.isPointLightShadow=!0}},As=class extends ps{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new ks}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},js=class extends Ss{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ms=class extends vs{constructor(){super(new js(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ns=class extends ps{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.target=new wn,this.shadow=new Ms}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Ps=-90,Fs=1,Is=class extends wn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Es(Ps,Fs,e,t);r.layers=this.layers,this.add(r);let i=new Es(Ps,Fs,e,t);i.layers=this.layers,this.add(i);let a=new Es(Ps,Fs,e,t);a.layers=this.layers,this.add(a);let o=new Es(Ps,Fs,e,t);o.layers=this.layers,this.add(o);let s=new Es(Ps,Fs,e,t);s.layers=this.layers,this.add(s);let c=new Es(Ps,Fs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Ls=class extends Es{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Rs=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=zs.bind(this),e.addEventListener(`visibilitychange`,this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener(`visibilitychange`,this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e===void 0?performance.now():e)-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function zs(){this._document.hidden===!1&&this.reset()}var Bs=`\\[\\]\\.:\\/`,Vs=RegExp(`[`+Bs+`]`,`g`),Hs=`[^`+Bs+`]`,Us=`[^`+Bs.replace(`\\.`,``)+`]`,Ws=`((?:WC+[\\/:])*)`.replace(`WC`,Hs),Gs=`(WCOD+)?`.replace(`WCOD`,Us),Ks=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Hs),qs=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Hs),Js=RegExp(`^`+Ws+Gs+Ks+qs+`$`),Ys=[`material`,`materials`,`bones`,`map`],Xs=class{constructor(e,t,n){let r=n||Zs.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Zs=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Vs,``)}static parseTrackName(e){let t=Js.exec(e);if(t===null)throw Error(`PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Ys.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){z(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){B(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){B(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){B(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){B(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){B(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){B(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){B(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;B(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){B(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){B(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Zs.Composite=Xs,Zs.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Zs.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Zs.prototype.GetterByBindingType=[Zs.prototype._getValue_direct,Zs.prototype._getValue_array,Zs.prototype._getValue_arrayElement,Zs.prototype._getValue_toArray],Zs.prototype.SetterByBindingTypeAndVersioning=[[Zs.prototype._setValue_direct,Zs.prototype._setValue_direct_setNeedsUpdate,Zs.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Zs.prototype._setValue_array,Zs.prototype._setValue_array_setNeedsUpdate,Zs.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Zs.prototype._setValue_arrayElement,Zs.prototype._setValue_arrayElement_setNeedsUpdate,Zs.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Zs.prototype._setValue_fromArray,Zs.prototype._setValue_fromArray_setNeedsUpdate,Zs.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}};function Qs(e,t,n,r){let i=$s(r);switch(n){case S:return e*t;case D:return e*t/i.components*i.byteLength;case ee:return e*t/i.components*i.byteLength;case O:return e*t*2/i.components*i.byteLength;case k:return e*t*2/i.components*i.byteLength;case C:return e*t*3/i.components*i.byteLength;case w:return e*t*4/i.components*i.byteLength;case te:return e*t*4/i.components*i.byteLength;case A:case j:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ne:case re:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ie:case oe:return Math.max(e,16)*Math.max(t,8)/4;case M:case ae:return Math.max(e,8)*Math.max(t,8)/2;case se:case N:case le:case P:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ce:case ue:case de:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case fe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case pe:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case me:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case he:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case ge:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case _e:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case ve:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case ye:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case be:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case xe:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Se:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Ce:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case we:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Te:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Ee:case De:case Oe:return Math.ceil(e/4)*Math.ceil(t/4)*16;case ke:case Ae:return Math.ceil(e/4)*Math.ceil(t/4)*8;case F:case je:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function $s(e){switch(e){case l:case u:return{byteLength:1,components:1};case f:case d:case g:return{byteLength:2,components:1};case _:case v:return{byteLength:2,components:4};case m:case p:case h:return{byteLength:4,components:1};case b:case x:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`184`}})),typeof window<`u`&&(window.__THREE__?z(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`184`);function ec(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function tc(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Z={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
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
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,common:`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
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
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
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
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
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
}`,lights_fragment_begin:`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
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
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
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
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
}`,distance_vert:`#define DISTANCE
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
}`,distance_frag:`#define DISTANCE
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
void main () {
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
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
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
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
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
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},Q={common:{diffuse:{value:new q(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new G},alphaMap:{value:null},alphaMapTransform:{value:new G},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new G}},envmap:{envMap:{value:null},envMapRotation:{value:new G},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new G}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new G}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new G},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new G},normalScale:{value:new U(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new G},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new G}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new G}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new G}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new q(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new W},probesMax:{value:new W},probesResolution:{value:new W}},points:{diffuse:{value:new q(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new G},alphaTest:{value:0},uvTransform:{value:new G}},sprite:{diffuse:{value:new q(16777215)},opacity:{value:1},center:{value:new U(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new G},alphaMap:{value:null},alphaMapTransform:{value:new G},alphaTest:{value:0}}},nc={basic:{uniforms:Po([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.fog]),vertexShader:Z.meshbasic_vert,fragmentShader:Z.meshbasic_frag},lambert:{uniforms:Po([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,Q.lights,{emissive:{value:new q(0)},envMapIntensity:{value:1}}]),vertexShader:Z.meshlambert_vert,fragmentShader:Z.meshlambert_frag},phong:{uniforms:Po([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,Q.lights,{emissive:{value:new q(0)},specular:{value:new q(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Z.meshphong_vert,fragmentShader:Z.meshphong_frag},standard:{uniforms:Po([Q.common,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.roughnessmap,Q.metalnessmap,Q.fog,Q.lights,{emissive:{value:new q(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Z.meshphysical_vert,fragmentShader:Z.meshphysical_frag},toon:{uniforms:Po([Q.common,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.gradientmap,Q.fog,Q.lights,{emissive:{value:new q(0)}}]),vertexShader:Z.meshtoon_vert,fragmentShader:Z.meshtoon_frag},matcap:{uniforms:Po([Q.common,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,{matcap:{value:null}}]),vertexShader:Z.meshmatcap_vert,fragmentShader:Z.meshmatcap_frag},points:{uniforms:Po([Q.points,Q.fog]),vertexShader:Z.points_vert,fragmentShader:Z.points_frag},dashed:{uniforms:Po([Q.common,Q.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Z.linedashed_vert,fragmentShader:Z.linedashed_frag},depth:{uniforms:Po([Q.common,Q.displacementmap]),vertexShader:Z.depth_vert,fragmentShader:Z.depth_frag},normal:{uniforms:Po([Q.common,Q.bumpmap,Q.normalmap,Q.displacementmap,{opacity:{value:1}}]),vertexShader:Z.meshnormal_vert,fragmentShader:Z.meshnormal_frag},sprite:{uniforms:Po([Q.sprite,Q.fog]),vertexShader:Z.sprite_vert,fragmentShader:Z.sprite_frag},background:{uniforms:{uvTransform:{value:new G},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Z.background_vert,fragmentShader:Z.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new G}},vertexShader:Z.backgroundCube_vert,fragmentShader:Z.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Z.cube_vert,fragmentShader:Z.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Z.equirect_vert,fragmentShader:Z.equirect_frag},distance:{uniforms:Po([Q.common,Q.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Z.distance_vert,fragmentShader:Z.distance_frag},shadow:{uniforms:Po([Q.lights,Q.fog,{color:{value:new q(0)},opacity:{value:1}}]),vertexShader:Z.shadow_vert,fragmentShader:Z.shadow_frag}};nc.physical={uniforms:Po([nc.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new G},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new G},clearcoatNormalScale:{value:new U(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new G},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new G},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new G},sheen:{value:0},sheenColor:{value:new q(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new G},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new G},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new G},transmissionSamplerSize:{value:new U},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new G},attenuationDistance:{value:0},attenuationColor:{value:new q(0)},specularColor:{value:new q(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new G},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new G},anisotropyVector:{value:new U},anisotropyMap:{value:null},anisotropyMapTransform:{value:new G}}]),vertexShader:Z.meshphysical_vert,fragmentShader:Z.meshphysical_frag};var rc={r:0,b:0,g:0},ic=new Xt,ac=new G;ac.set(-1,0,0,0,1,0,0,0,1);function oc(e,t,n,r,i,a){let o=new q(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new J(new Y(1,1,1),new Vo({name:`BackgroundCubeMaterial`,uniforms:No(nc.backgroundCube.uniforms),vertexShader:nc.backgroundCube.vertexShader,fragmentShader:nc.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,`envMap`,{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(ic.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(ac),l.material.toneMapped=Pt.getTransfer(i.colorSpace)!==Be,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new J(new Oo(2,2),new Vo({name:`BackgroundMaterial`,uniforms:No(nc.background.uniforms),vertexShader:nc.background.vertexShader,fragmentShader:nc.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,`map`,{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Pt.getTransfer(i.colorSpace)!==Be,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(rc,Lo(e)),n.buffers.color.setClear(rc.r,rc.g,rc.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function sc(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function cc(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function lc(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return!(t!==1023&&r.convert(t)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!i)}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(z(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&z(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function uc(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Ai,s=new G,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var dc=4,fc=[.125,.215,.35,.446,.526,.582],pc=20,mc=256,hc=new js,gc=new q,_c=null,vc=0,yc=0,bc=!1,xc=new W,Sc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=xc}=i;_c=this._renderer.getRenderTarget(),vc=this._renderer.getActiveCubeFace(),yc=this._renderer.getActiveMipmapLevel(),bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Oc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(_c,vc,yc),this._renderer.xr.enabled=bc,e.scissorTest=!1,Tc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_c=this._renderer.getRenderTarget(),vc=this._renderer.getActiveCubeFace(),yc=this._renderer.getActiveMipmapLevel(),bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:o,minFilter:o,generateMipmaps:!1,type:g,format:w,colorSpace:Re,depthBuffer:!1},r=wc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wc(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Cc(r)),this._blurMaterial=Dc(r,e,t),this._ggxMaterial=Ec(r,e,t)}return r}_compileMaterial(e){let t=new J(new Dr,e);this._renderer.compile(t,hc)}_sceneToCubeUV(e,t,n,r,i){let a=new Es(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(gc),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new J(new Y,new ri({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(gc),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Tc(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=kc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Oc());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Tc(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,hc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(0+c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-dc?n-d+dc:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Tc(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,hc),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Tc(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,hc)}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&B(`blur direction must be either latitudinal or longitudinal!`);let l=this._lodMeshes[r];l.material=c;let u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/(2*pc-1),p=i/f,m=isFinite(i)?1+Math.floor(3*p):pc;m>pc&&z(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${pc}`);let h=[],g=0;for(let e=0;e<pc;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];Tc(t,3*v*(r>_-dc?r-_+dc:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,hc)}};function Cc(e){let t=[],n=[],r=[],i=e,a=e-dc+1+fc.length;for(let o=0;o<a;o++){let a=2**i;t.push(a);let s=1/a;o>e-dc?s=fc[o-e+dc-1]:o===0&&(s=0),n.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new Dr;h.setAttribute(`position`,new fr(f,3)),h.setAttribute(`uv`,new fr(p,2)),h.setAttribute(`faceIndex`,new fr(m,1)),r.push(new J(h,null)),i>dc&&i--}return{lodMeshes:r,sizeLods:t,sigmas:n}}function wc(e,t,n){let r=new qt(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Tc(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Ec(e,t,n){return new Vo({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:mc,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ac(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Dc(e,t,n){let r=new Float32Array(pc),i=new W(0,1,0);return new Vo({name:`SphericalGaussianBlur`,defines:{n:pc,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Oc(){return new Vo({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Ac(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function kc(){return new Vo({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ac(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var jc=class extends qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ta(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Y(5,5,5),i=new Vo({name:`CubemapFromEquirect`,uniforms:No(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new J(r,i),s=t.minFilter;return t.minFilter===1008&&(t.minFilter=o),new Is(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function Mc(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304)if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}else{let r=n.image;if(r&&r.height>0){let i=new jc(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}else return null}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Sc(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Sc(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Nc(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Qe(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Pc(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?mr:pr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Fc(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Ic(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:B(`WebGLInfo: Unknown draw mode:`,r);break}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Lc(e,t,n){let r=new WeakMap,i=new Gt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let g=new Float32Array(p*m*4*u),_=new Jt(g,p,m,u);_.type=h,_.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),g[d+s+0]=i.x,g[d+s+1]=i.y,g[d+s+2]=i.z,g[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),g[d+s+4]=i.x,g[d+s+5]=i.y,g[d+s+6]=i.z,g[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),g[d+s+8]=i.x,g[d+s+9]=i.y,g[d+s+10]=i.z,g[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new U(p,m)},r.set(o,d);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Rc(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var zc={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Bc(e,t,n,r,i){let a=new qt(t,n,{type:e,depthBuffer:r,stencilBuffer:i,depthTexture:r?new ra(t,n):void 0}),o=new qt(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}),s=new Dr;s.setAttribute(`position`,new hr([-1,3,0,-1,-1,0,3,-1,0],3)),s.setAttribute(`uv`,new hr([0,2,0,0,2,0],2));let c=new Ho({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),l=new J(s,c),u=new js(-1,1,1,-1,0,1),d=null,f=null,p=!1,m,h=null,_=[],v=!1;this.setSize=function(e,t){a.setSize(e,t),o.setSize(e,t);for(let n=0;n<_.length;n++){let r=_[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){_=e,v=_.length>0&&_[0].isRenderPass===!0;let t=a.width,n=a.height;for(let e=0;e<_.length;e++){let r=_[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(p||e.toneMapping===0&&_.length===0)return!1;if(h=t,t!==null){let e=t.width,n=t.height;(a.width!==e||a.height!==n)&&this.setSize(e,n)}return v===!1&&e.setRenderTarget(a),m=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return v},this.end=function(e,t){e.toneMapping=m,p=!0;let n=a,r=o;for(let i=0;i<_.length;i++){let a=_[i];if(a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1)){let e=n;n=r,r=e}}if(d!==e.outputColorSpace||f!==e.toneMapping){d=e.outputColorSpace,f=e.toneMapping,c.defines={},Pt.getTransfer(d)===`srgb`&&(c.defines.SRGB_TRANSFER=``);let t=zc[f];t&&(c.defines[t]=``),c.needsUpdate=!0}c.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(h),e.render(l,u),h=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),s.dispose(),c.dispose()}}var Vc=new Wt,Hc=new ra(1,1),Uc=new Jt,Wc=new Yt,Gc=new ta,Kc=[],qc=[],Jc=new Float32Array(16),Yc=new Float32Array(9),Xc=new Float32Array(4);function Zc(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Kc[i];if(a===void 0&&(a=new Float32Array(i),Kc[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Qc(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function $c(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function el(e,t){let n=qc[t];n===void 0&&(n=new Int32Array(t),qc[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function tl(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function nl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Qc(n,t))return;e.uniform2fv(this.addr,t),$c(n,t)}}function rl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Qc(n,t))return;e.uniform3fv(this.addr,t),$c(n,t)}}function il(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Qc(n,t))return;e.uniform4fv(this.addr,t),$c(n,t)}}function al(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Qc(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),$c(n,t)}else{if(Qc(n,r))return;Xc.set(r),e.uniformMatrix2fv(this.addr,!1,Xc),$c(n,r)}}function ol(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Qc(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),$c(n,t)}else{if(Qc(n,r))return;Yc.set(r),e.uniformMatrix3fv(this.addr,!1,Yc),$c(n,r)}}function sl(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Qc(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),$c(n,t)}else{if(Qc(n,r))return;Jc.set(r),e.uniformMatrix4fv(this.addr,!1,Jc),$c(n,r)}}function cl(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function ll(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Qc(n,t))return;e.uniform2iv(this.addr,t),$c(n,t)}}function ul(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Qc(n,t))return;e.uniform3iv(this.addr,t),$c(n,t)}}function dl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Qc(n,t))return;e.uniform4iv(this.addr,t),$c(n,t)}}function fl(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function pl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Qc(n,t))return;e.uniform2uiv(this.addr,t),$c(n,t)}}function ml(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Qc(n,t))return;e.uniform3uiv(this.addr,t),$c(n,t)}}function hl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Qc(n,t))return;e.uniform4uiv(this.addr,t),$c(n,t)}}function gl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Hc.compareFunction=n.isReversedDepthBuffer()?518:515,a=Hc):a=Vc,n.setTexture2D(t||a,i)}function _l(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Wc,i)}function vl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Gc,i)}function yl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Uc,i)}function bl(e){switch(e){case 5126:return tl;case 35664:return nl;case 35665:return rl;case 35666:return il;case 35674:return al;case 35675:return ol;case 35676:return sl;case 5124:case 35670:return cl;case 35667:case 35671:return ll;case 35668:case 35672:return ul;case 35669:case 35673:return dl;case 5125:return fl;case 36294:return pl;case 36295:return ml;case 36296:return hl;case 35678:case 36198:case 36298:case 36306:case 35682:return gl;case 35679:case 36299:case 36307:return _l;case 35680:case 36300:case 36308:case 36293:return vl;case 36289:case 36303:case 36311:case 36292:return yl}}function xl(e,t){e.uniform1fv(this.addr,t)}function Sl(e,t){let n=Zc(t,this.size,2);e.uniform2fv(this.addr,n)}function Cl(e,t){let n=Zc(t,this.size,3);e.uniform3fv(this.addr,n)}function wl(e,t){let n=Zc(t,this.size,4);e.uniform4fv(this.addr,n)}function Tl(e,t){let n=Zc(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function El(e,t){let n=Zc(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Dl(e,t){let n=Zc(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Ol(e,t){e.uniform1iv(this.addr,t)}function kl(e,t){e.uniform2iv(this.addr,t)}function Al(e,t){e.uniform3iv(this.addr,t)}function jl(e,t){e.uniform4iv(this.addr,t)}function Ml(e,t){e.uniform1uiv(this.addr,t)}function Nl(e,t){e.uniform2uiv(this.addr,t)}function Pl(e,t){e.uniform3uiv(this.addr,t)}function Fl(e,t){e.uniform4uiv(this.addr,t)}function Il(e,t,n){let r=this.cache,i=t.length,a=el(n,i);Qc(r,a)||(e.uniform1iv(this.addr,a),$c(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Hc:Vc;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Ll(e,t,n){let r=this.cache,i=t.length,a=el(n,i);Qc(r,a)||(e.uniform1iv(this.addr,a),$c(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Wc,a[e])}function Rl(e,t,n){let r=this.cache,i=t.length,a=el(n,i);Qc(r,a)||(e.uniform1iv(this.addr,a),$c(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Gc,a[e])}function zl(e,t,n){let r=this.cache,i=t.length,a=el(n,i);Qc(r,a)||(e.uniform1iv(this.addr,a),$c(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Uc,a[e])}function Bl(e){switch(e){case 5126:return xl;case 35664:return Sl;case 35665:return Cl;case 35666:return wl;case 35674:return Tl;case 35675:return El;case 35676:return Dl;case 5124:case 35670:return Ol;case 35667:case 35671:return kl;case 35668:case 35672:return Al;case 35669:case 35673:return jl;case 5125:return Ml;case 36294:return Nl;case 36295:return Pl;case 36296:return Fl;case 35678:case 36198:case 36298:case 36306:case 35682:return Il;case 35679:case 36299:case 36307:return Ll;case 35680:case 36300:case 36308:case 36293:return Rl;case 36289:case 36303:case 36311:case 36292:return zl}}var Vl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=bl(t.type)}},Hl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Bl(t.type)}},Ul=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Wl=/(\w+)(\])?(\[|\.)?/g;function Gl(e,t){e.seq.push(t),e.map[t.id]=t}function Kl(e,t,n){let r=e.name,i=r.length;for(Wl.lastIndex=0;;){let a=Wl.exec(r),o=Wl.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Gl(n,l===void 0?new Vl(s,e,t):new Hl(s,e,t));break}else{let e=n.map[s];e===void 0&&(e=new Ul(s),Gl(n,e)),n=e}}}var ql=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Kl(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Jl(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Yl=37297,Xl=0;function Zl(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Ql=new G;function $l(e){Pt._getMatrix(Ql,Pt.workingColorSpace,e);let t=`mat3( ${Ql.elements.map(e=>e.toFixed(4))} )`;switch(Pt.getTransfer(e)){case ze:return[t,`LinearTransferOETF`];case Be:return[t,`sRGBTransferOETF`];default:return z(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function eu(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Zl(e.getShaderSource(t),r)}else return i}function tu(e,t){let n=$l(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var nu={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function ru(e,t){let n=nu[t];return n===void 0?(z(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var iu=new W;function au(){return Pt.getLuminanceCoefficients(iu),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${iu.x.toFixed(4)}, ${iu.y.toFixed(4)}, ${iu.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function ou(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(lu).join(`
`)}function su(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function cu(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function lu(e){return e!==``}function uu(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function du(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var fu=/^[ \t]*#include +<([\w\d./]+)>/gm;function pu(e){return e.replace(fu,hu)}var mu=new Map;function hu(e,t){let n=Z[t];if(n===void 0){let e=mu.get(t);if(e!==void 0)n=Z[e],z(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`Can not resolve #include <`+t+`>`)}return pu(n)}var gu=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _u(e){return e.replace(gu,vu)}function vu(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function yu(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var bu={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function xu(e){return bu[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Su={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Cu(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:Su[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var wu={302:`ENVMAP_MODE_REFRACTION`};function Tu(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:wu[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Eu={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Du(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Eu[e.combine]||`ENVMAP_BLENDING_NONE`}function Ou(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function ku(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=xu(n),l=Cu(n),u=Tu(n),d=Du(n),f=Ou(n),p=ou(n),m=su(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(lu).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(lu).join(`
`),_.length>0&&(_+=`
`)):(g=[yu(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(lu).join(`
`),_=[yu(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Z.tonemapping_pars_fragment,n.toneMapping===0?``:ru(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Z.colorspace_pars_fragment,tu(`linearToOutputTexel`,n.outputColorSpace),au(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(lu).join(`
`)),o=pu(o),o=uu(o,n),o=du(o,n),s=pu(s),s=uu(s,n),s=du(s,n),o=_u(o),s=_u(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Jl(i,i.VERTEX_SHADER,y),S=Jl(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.morphTargets===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1)if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=eu(i,x,`vertex`),n=eu(i,S,`fragment`);B(`THREE.WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}else o===``?(s===``||c===``)&&(u=!1):z(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new ql(i,h),T=cu(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Yl)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Xl++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Au=0,ju=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),i=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Mu(e),t.set(e,n)),n}},Mu=class{constructor(e){this.id=Au++,this.code=e,this.usedTimes=0}};function Nu(e){return e===1030||e===37490||e===36285}function Pu(e,t,n,r,i,a){let o=new cn,s=new ju,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&z(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,ee,O,k;if(C){let e=nc[C];D=e.vertexShader,ee=e.fragmentShader}else D=i.vertexShader,ee=i.fragmentShader,s.update(i),O=s.getVertexShaderID(i),k=s.getFragmentShaderID(i);let te=e.getRenderTarget(),A=e.state.buffers.depth.getReversed(),j=h.isInstancedMesh===!0,ne=h.isBatchedMesh===!0,re=!!i.map,M=!!i.matcap,ie=!!x,ae=!!i.aoMap,oe=!!i.lightMap,se=!!i.bumpMap,N=!!i.normalMap,ce=!!i.displacementMap,le=!!i.emissiveMap,P=!!i.metalnessMap,ue=!!i.roughnessMap,de=i.anisotropy>0,fe=i.clearcoat>0,pe=i.dispersion>0,me=i.iridescence>0,he=i.sheen>0,ge=i.transmission>0,_e=de&&!!i.anisotropyMap,ve=fe&&!!i.clearcoatMap,ye=fe&&!!i.clearcoatNormalMap,be=fe&&!!i.clearcoatRoughnessMap,xe=me&&!!i.iridescenceMap,Se=me&&!!i.iridescenceThicknessMap,Ce=he&&!!i.sheenColorMap,we=he&&!!i.sheenRoughnessMap,Te=!!i.specularMap,Ee=!!i.specularColorMap,De=!!i.specularIntensityMap,Oe=ge&&!!i.transmissionMap,ke=ge&&!!i.thicknessMap,Ae=!!i.gradientMap,F=!!i.alphaMap,je=i.alphaTest>0,Me=!!i.alphaHash,Ne=!!i.extensions,I=0;i.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(I=e.toneMapping);let Pe={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:ee,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:ne,batchingColor:ne&&h._colorsTexture!==null,instancing:j,instancingColor:j&&h.instanceColor!==null,instancingMorph:j&&h.morphTexture!==null,outputColorSpace:te===null?e.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Pt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:re,matcap:M,envMap:ie,envMapMode:ie&&x.mapping,envMapCubeUVHeight:S,aoMap:ae,lightMap:oe,bumpMap:se,normalMap:N,displacementMap:ce,emissiveMap:le,normalMapObjectSpace:N&&i.normalMapType===1,normalMapTangentSpace:N&&i.normalMapType===0,packedNormalMap:N&&i.normalMapType===0&&Nu(i.normalMap.format),metalnessMap:P,roughnessMap:ue,anisotropy:de,anisotropyMap:_e,clearcoat:fe,clearcoatMap:ve,clearcoatNormalMap:ye,clearcoatRoughnessMap:be,dispersion:pe,iridescence:me,iridescenceMap:xe,iridescenceThicknessMap:Se,sheen:he,sheenColorMap:Ce,sheenRoughnessMap:we,specularMap:Te,specularColorMap:Ee,specularIntensityMap:De,transmission:ge,transmissionMap:Oe,thicknessMap:ke,gradientMap:Ae,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:F,alphaTest:je,alphaHash:Me,combine:i.combine,mapUv:re&&m(i.map.channel),aoMapUv:ae&&m(i.aoMap.channel),lightMapUv:oe&&m(i.lightMap.channel),bumpMapUv:se&&m(i.bumpMap.channel),normalMapUv:N&&m(i.normalMap.channel),displacementMapUv:ce&&m(i.displacementMap.channel),emissiveMapUv:le&&m(i.emissiveMap.channel),metalnessMapUv:P&&m(i.metalnessMap.channel),roughnessMapUv:ue&&m(i.roughnessMap.channel),anisotropyMapUv:_e&&m(i.anisotropyMap.channel),clearcoatMapUv:ve&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:ye&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:we&&m(i.sheenRoughnessMap.channel),specularMapUv:Te&&m(i.specularMap.channel),specularColorMapUv:Ee&&m(i.specularColorMap.channel),specularIntensityMapUv:De&&m(i.specularIntensityMap.channel),transmissionMapUv:Oe&&m(i.transmissionMap.channel),thicknessMapUv:ke&&m(i.thicknessMap.channel),alphaMapUv:F&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(N||de),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(re||F),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&N===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:A,skinning:h.isSkinnedMesh===!0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:I,decodeVideoTexture:re&&i.map.isVideoTexture===!0&&Pt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:le&&i.emissiveMap.isVideoTexture===!0&&Pt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Ne&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Ne&&i.extensions.multiDraw===!0||ne)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Pe.vertexUv1s=c.has(1),Pe.vertexUv2s=c.has(2),Pe.vertexUv3s=c.has(3),c.clear(),Pe}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=nc[t];n=Ro.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new ku(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function Fu(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Iu(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Lu(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Ru(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Iu),r.length>1&&r.sort(t||Lu),i.length>1&&i.sort(t||Lu)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function zu(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Ru,e.set(t,[i])):n>=r.length?(i=new Ru,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Bu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new W,color:new q};break;case`SpotLight`:n={position:new W,direction:new W,color:new q,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new W,color:new q,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new W,skyColor:new q,groundColor:new q};break;case`RectAreaLight`:n={color:new q,position:new W,halfWidth:new W,halfHeight:new W};break}return e[t.id]=n,n}}}function Vu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new U};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new U};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new U,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var Hu=0;function Uu(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Wu(e){let t=new Bu,n=Vu(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new W);let i=new W,a=new Xt,o=new Xt;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort(Uu);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=null;if(y.shadow&&y.shadow.map&&(C=y.shadow.map.texture.format===1030?y.shadow.map.texture:y.shadow.map.depthTexture||y.shadow.map.texture),y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(y.width*.5,0,0),e.halfHeight.set(0,y.height*.5,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Q.LTC_FLOAT_1,r.rectAreaLTC2=Q.LTC_FLOAT_2):(r.rectAreaLTC1=Q.LTC_HALF_1,r.rectAreaLTC2=Q.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=Hu++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function Gu(e){let t=new Wu(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Ku(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Gu(e),t.set(n,[a])):r>=i.length?(a=new Gu(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var qu=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ju=`uniform sampler2D shadow_pass;
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
}`,Yu=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],Xu=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],Zu=new Xt,Qu=new W,$u=new W;function ed(e,t,n){let i=new Pi,a=new U,s=new U,c=new Gt,l=new Wo,u=new Go,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},_=new Vo({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new U},radius:{value:4}},vertexShader:qu,fragmentShader:Ju}),v=_.clone();v.defines.HORIZONTAL_PASS=1;let y=new Dr;y.setAttribute(`position`,new fr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new J(y,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,l){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(z(`WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.state;_.setBlending(0),_.buffers.depth.getReversed()===!0?_.buffers.color.setClear(0,0,0,0):_.buffers.color.setClear(1,1,1,1),_.buffers.depth.setTest(!0),_.setScissorTest(!1);let v=S!==this.type;v&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){z(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;a.copy(p.mapSize);let y=p.getFrameExtents();a.multiply(y),s.copy(p.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(s.x=Math.floor(f/y.x),a.x=s.x*y.x,p.mapSize.x=s.x),a.y>f&&(s.y=Math.floor(f/y.y),a.y=s.y*y.y,p.mapSize.y=s.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||v===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){z(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new qt(a.x,a.y,{format:O,type:g,minFilter:o,magFilter:o,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new ra(a.x,a.y,h),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=T,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r}else d.isPointLight?(p.map=new jc(a.x),p.map.depthTexture=new ia(a.x,m)):(p.map=new qt(a.x,a.y),p.map.depthTexture=new ra(a.x,a.y,m)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=T,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=o,p.map.depthTexture.magFilter=o):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r);p.camera.updateProjectionMatrix()}let x=p.map.isWebGLCubeRenderTarget?6:1;for(let t=0;t<x;t++){if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);c.set(s.x*n.x,s.y*n.y,s.x*n.z,s.y*n.w),_.viewport(c)}if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Qu.setFromMatrixPosition(d.matrixWorld),e.position.copy(Qu),$u.copy(e.position),$u.add(Yu[t]),e.up.copy(Xu[t]),e.lookAt($u),e.updateMatrixWorld(),n.makeTranslation(-Qu.x,-Qu.y,-Qu.z),Zu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(Zu,e.coordinateSystem,e.reversedDepth)}else p.updateMatrices(d);i=p.getFrustum(),E(n,l,p.camera,d,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,l),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let i=t.update(b);_.defines.VSM_SAMPLES!==n.blurSamples&&(_.defines.VSM_SAMPLES=n.blurSamples,v.defines.VSM_SAMPLES=n.blurSamples,_.needsUpdate=!0,v.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new qt(a.x,a.y,{format:O,type:g})),_.uniforms.shadow_pass.value=n.map.depthTexture,_.uniforms.resolution.value=n.mapSize,_.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,_,b,null),v.uniforms.shadow_pass.value=n.mapPass.texture,v.uniforms.resolution.value=n.mapSize,v.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,v,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,D)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function E(n,r,a,o,s){if(n.visible===!1)return;if(n.layers.test(r.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||i.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let i=t.update(n),c=n.material;if(Array.isArray(c)){let t=i.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,s);n.onBeforeShadow(e,n,r,a,i,t,u),e.renderBufferDirect(a,null,i,t,n,u),n.onAfterShadow(e,n,r,a,i,t,u)}}}else if(c.visible){let t=w(n,c,o,s);n.onBeforeShadow(e,n,r,a,i,t,null),e.renderBufferDirect(a,null,i,t,n,null),n.onAfterShadow(e,n,r,a,i,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)E(c[e],r,a,o,s)}function D(e){e.target.removeEventListener(`dispose`,D);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function td(e,t){function n(){let t=!1,n=new Gt,r=null,i=new Gt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?P(e.DEPTH_TEST):ue(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=et[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?P(e.STENCIL_TEST):ue(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new q(0,0,0),T=0,E=!1,D=null,ee=null,O=null,k=null,te=null,A=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,ne=0,re=e.getParameter(e.VERSION);re.indexOf(`WebGL`)===-1?re.indexOf(`OpenGL ES`)!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),j=ne>=2):(ne=parseFloat(/^WebGL (\d)/.exec(re)[1]),j=ne>=1);let M=null,ie={},ae=e.getParameter(e.SCISSOR_BOX),oe=e.getParameter(e.VIEWPORT),se=new Gt().fromArray(ae),N=new Gt().fromArray(oe);function ce(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let le={};le[e.TEXTURE_2D]=ce(e.TEXTURE_2D,e.TEXTURE_2D,1),le[e.TEXTURE_CUBE_MAP]=ce(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[e.TEXTURE_2D_ARRAY]=ce(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),le[e.TEXTURE_3D]=ce(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),P(e.DEPTH_TEST),o.setFunc(3),ve(!1),ye(1),P(e.CULL_FACE),ge(0);function P(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function ue(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function de(t,n){return f[t]===n?!1:(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function fe(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function pe(t){return h===t?!1:(e.useProgram(t),h=t,!0)}let me={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};me[103]=e.MIN,me[104]=e.MAX;let he={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ge(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(ue(e.BLEND),g=!1);return}if(g===!1&&(P(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:B(`WebGLState: Invalid blending: `,t);break}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:B(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:B(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:B(`WebGLState: Invalid blending: `,t);break}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(me[n],me[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(he[r],he[i],he[o],he[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function _e(t,n){t.side===2?ue(e.CULL_FACE):P(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ve(r),t.blending===1&&t.transparent===!1?ge(0):ge(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),xe(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?P(e.SAMPLE_ALPHA_TO_COVERAGE):ue(e.SAMPLE_ALPHA_TO_COVERAGE)}function ve(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function ye(t){t===0?ue(e.CULL_FACE):(P(e.CULL_FACE),t!==ee&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),ee=t}function be(t){t!==O&&(j&&e.lineWidth(t),O=t)}function xe(t,n,r){t?(P(e.POLYGON_OFFSET_FILL),(k!==n||te!==r)&&(k=n,te=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):ue(e.POLYGON_OFFSET_FILL)}function Se(t){t?P(e.SCISSOR_TEST):ue(e.SCISSOR_TEST)}function Ce(t){t===void 0&&(t=e.TEXTURE0+A-1),M!==t&&(e.activeTexture(t),M=t)}function we(t,n,r){r===void 0&&(r=M===null?e.TEXTURE0+A-1:M);let i=ie[r];i===void 0&&(i={type:void 0,texture:void 0},ie[r]=i),(i.type!==t||i.texture!==n)&&(M!==r&&(e.activeTexture(r),M=r),e.bindTexture(t,n||le[t]),i.type=t,i.texture=n)}function Te(){let t=ie[M];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Ee(){try{e.compressedTexImage2D(...arguments)}catch(e){B(`WebGLState:`,e)}}function De(){try{e.compressedTexImage3D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Oe(){try{e.texSubImage2D(...arguments)}catch(e){B(`WebGLState:`,e)}}function ke(){try{e.texSubImage3D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Ae(){try{e.compressedTexSubImage2D(...arguments)}catch(e){B(`WebGLState:`,e)}}function F(){try{e.compressedTexSubImage3D(...arguments)}catch(e){B(`WebGLState:`,e)}}function je(){try{e.texStorage2D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Me(){try{e.texStorage3D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Ne(){try{e.texImage2D(...arguments)}catch(e){B(`WebGLState:`,e)}}function I(){try{e.texImage3D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Pe(t){return d[t]===void 0?e.getParameter(t):d[t]}function L(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function R(t){se.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),se.copy(t))}function Fe(t){N.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),N.copy(t))}function Ie(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Le(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Re(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},M=null,ie={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new q(0,0,0),T=0,E=!1,D=null,ee=null,O=null,k=null,te=null,se.set(0,0,e.canvas.width,e.canvas.height),N.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:P,disable:ue,bindFramebuffer:de,drawBuffers:fe,useProgram:pe,setBlending:ge,setMaterial:_e,setFlipSided:ve,setCullFace:ye,setLineWidth:be,setPolygonOffset:xe,setScissorTest:Se,activeTexture:Ce,bindTexture:we,unbindTexture:Te,compressedTexImage2D:Ee,compressedTexImage3D:De,texImage2D:Ne,texImage3D:I,pixelStorei:L,getParameter:Pe,updateUBOMapping:Ie,uniformBlockBinding:Le,texStorage2D:je,texStorage3D:Me,texSubImage2D:Oe,texSubImage3D:ke,compressedTexSubImage2D:Ae,compressedTexSubImage3D:F,scissor:R,viewport:Fe,reset:Re}}function nd(l,u,d,f,p,m,h){let g=u.has(`WEBGL_multisampled_render_to_texture`)?u.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new U,y=new WeakMap,b=new Set,x,S=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):Ke(`canvas`)}function T(e,t,n){let r=1,i=Pe(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1)if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=w(n,a));let o=t?w(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),z(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}else return`data`in e&&z(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e;return e}function D(e){return e.generateMipmaps}function ee(e){l.generateMipmap(e)}function O(e){return e.isWebGLCubeRenderTarget?l.TEXTURE_CUBE_MAP:e.isWebGL3DRenderTarget?l.TEXTURE_3D:e.isWebGLArrayRenderTarget||e.isCompressedArrayTexture?l.TEXTURE_2D_ARRAY:l.TEXTURE_2D}function k(e,t,n,r,i,a=!1){if(e!==null){if(l[e]!==void 0)return l[e];z(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+e+`'`)}let o;r&&(o=u.get(`EXT_texture_norm16`),o||z(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let s=t;if(t===l.RED&&(n===l.FLOAT&&(s=l.R32F),n===l.HALF_FLOAT&&(s=l.R16F),n===l.UNSIGNED_BYTE&&(s=l.R8),n===l.UNSIGNED_SHORT&&o&&(s=o.R16_EXT),n===l.SHORT&&o&&(s=o.R16_SNORM_EXT)),t===l.RED_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.R8UI),n===l.UNSIGNED_SHORT&&(s=l.R16UI),n===l.UNSIGNED_INT&&(s=l.R32UI),n===l.BYTE&&(s=l.R8I),n===l.SHORT&&(s=l.R16I),n===l.INT&&(s=l.R32I)),t===l.RG&&(n===l.FLOAT&&(s=l.RG32F),n===l.HALF_FLOAT&&(s=l.RG16F),n===l.UNSIGNED_BYTE&&(s=l.RG8),n===l.UNSIGNED_SHORT&&o&&(s=o.RG16_EXT),n===l.SHORT&&o&&(s=o.RG16_SNORM_EXT)),t===l.RG_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RG8UI),n===l.UNSIGNED_SHORT&&(s=l.RG16UI),n===l.UNSIGNED_INT&&(s=l.RG32UI),n===l.BYTE&&(s=l.RG8I),n===l.SHORT&&(s=l.RG16I),n===l.INT&&(s=l.RG32I)),t===l.RGB_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGB8UI),n===l.UNSIGNED_SHORT&&(s=l.RGB16UI),n===l.UNSIGNED_INT&&(s=l.RGB32UI),n===l.BYTE&&(s=l.RGB8I),n===l.SHORT&&(s=l.RGB16I),n===l.INT&&(s=l.RGB32I)),t===l.RGBA_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGBA8UI),n===l.UNSIGNED_SHORT&&(s=l.RGBA16UI),n===l.UNSIGNED_INT&&(s=l.RGBA32UI),n===l.BYTE&&(s=l.RGBA8I),n===l.SHORT&&(s=l.RGBA16I),n===l.INT&&(s=l.RGBA32I)),t===l.RGB&&(n===l.UNSIGNED_SHORT&&o&&(s=o.RGB16_EXT),n===l.SHORT&&o&&(s=o.RGB16_SNORM_EXT),n===l.UNSIGNED_INT_5_9_9_9_REV&&(s=l.RGB9_E5),n===l.UNSIGNED_INT_10F_11F_11F_REV&&(s=l.R11F_G11F_B10F)),t===l.RGBA){let e=a?ze:Pt.getTransfer(i);n===l.FLOAT&&(s=l.RGBA32F),n===l.HALF_FLOAT&&(s=l.RGBA16F),n===l.UNSIGNED_BYTE&&(s=e===`srgb`?l.SRGB8_ALPHA8:l.RGBA8),n===l.UNSIGNED_SHORT&&o&&(s=o.RGBA16_EXT),n===l.SHORT&&o&&(s=o.RGBA16_SNORM_EXT),n===l.UNSIGNED_SHORT_4_4_4_4&&(s=l.RGBA4),n===l.UNSIGNED_SHORT_5_5_5_1&&(s=l.RGB5_A1)}return(s===l.R16F||s===l.R32F||s===l.RG16F||s===l.RG32F||s===l.RGBA16F||s===l.RGBA32F)&&u.get(`EXT_color_buffer_float`),s}function te(e,t){let n;return e?t===null||t===1014||t===1020?n=l.DEPTH24_STENCIL8:t===1015?n=l.DEPTH32F_STENCIL8:t===1012&&(n=l.DEPTH24_STENCIL8,z(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):t===null||t===1014||t===1020?n=l.DEPTH_COMPONENT24:t===1015?n=l.DEPTH_COMPONENT32F:t===1012&&(n=l.DEPTH_COMPONENT16),n}function A(e,t){return D(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function j(e){let t=e.target;t.removeEventListener(`dispose`,j),re(t),t.isVideoTexture&&y.delete(t),t.isHTMLTexture&&b.delete(t)}function ne(e){let t=e.target;t.removeEventListener(`dispose`,ne),ie(t)}function re(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&M(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function M(e){let t=f.get(e);l.deleteTexture(t.__webglTexture);let n=e.source,r=S.get(n);delete r[t.__cacheKey],h.memory.textures--}function ie(e){let t=f.get(e);if(e.depthTexture&&(e.depthTexture.dispose(),f.remove(e.depthTexture)),e.isWebGLCubeRenderTarget)for(let e=0;e<6;e++){if(Array.isArray(t.__webglFramebuffer[e]))for(let n=0;n<t.__webglFramebuffer[e].length;n++)l.deleteFramebuffer(t.__webglFramebuffer[e][n]);else l.deleteFramebuffer(t.__webglFramebuffer[e]);t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer[e])}else{if(Array.isArray(t.__webglFramebuffer))for(let e=0;e<t.__webglFramebuffer.length;e++)l.deleteFramebuffer(t.__webglFramebuffer[e]);else l.deleteFramebuffer(t.__webglFramebuffer);if(t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer),t.__webglMultisampledFramebuffer&&l.deleteFramebuffer(t.__webglMultisampledFramebuffer),t.__webglColorRenderbuffer)for(let e=0;e<t.__webglColorRenderbuffer.length;e++)t.__webglColorRenderbuffer[e]&&l.deleteRenderbuffer(t.__webglColorRenderbuffer[e]);t.__webglDepthRenderbuffer&&l.deleteRenderbuffer(t.__webglDepthRenderbuffer)}let n=e.textures;for(let e=0,t=n.length;e<t;e++){let t=f.get(n[e]);t.__webglTexture&&(l.deleteTexture(t.__webglTexture),h.memory.textures--),f.remove(n[e])}f.remove(e)}let ae=0;function oe(){ae=0}function se(){return ae}function N(e){ae=e}function ce(){let e=ae;return e>=p.maxTextures&&z(`WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+p.maxTextures),ae+=1,e}function le(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function P(e,t){let n=f.get(e);if(e.isVideoTexture&&Ne(e),e.isRenderTargetTexture===!1&&e.isExternalTexture!==!0&&e.version>0&&n.__version!==e.version){let r=e.image;if(r===null)z(`WebGLRenderer: Texture marked for update but no image data found.`);else if(r.complete===!1)z(`WebGLRenderer: Texture marked for update but image is incomplete`);else{be(n,e,t);return}}else e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null);d.bindTexture(l.TEXTURE_2D,n.__webglTexture,l.TEXTURE0+t)}function ue(e,t){let n=f.get(e);if(e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version){be(n,e,t);return}else e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null);d.bindTexture(l.TEXTURE_2D_ARRAY,n.__webglTexture,l.TEXTURE0+t)}function de(e,t){let n=f.get(e);if(e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version){be(n,e,t);return}d.bindTexture(l.TEXTURE_3D,n.__webglTexture,l.TEXTURE0+t)}function fe(e,t){let n=f.get(e);if(e.isCubeDepthTexture!==!0&&e.version>0&&n.__version!==e.version){xe(n,e,t);return}d.bindTexture(l.TEXTURE_CUBE_MAP,n.__webglTexture,l.TEXTURE0+t)}let pe={[e]:l.REPEAT,[t]:l.CLAMP_TO_EDGE,[n]:l.MIRRORED_REPEAT},me={[r]:l.NEAREST,[i]:l.NEAREST_MIPMAP_NEAREST,[a]:l.NEAREST_MIPMAP_LINEAR,[o]:l.LINEAR,[s]:l.LINEAR_MIPMAP_NEAREST,[c]:l.LINEAR_MIPMAP_LINEAR},he={512:l.NEVER,519:l.ALWAYS,513:l.LESS,515:l.LEQUAL,514:l.EQUAL,518:l.GEQUAL,516:l.GREATER,517:l.NOTEQUAL};function ge(e,t){if(t.type===1015&&u.has(`OES_texture_float_linear`)===!1&&(t.magFilter===1006||t.magFilter===1007||t.magFilter===1005||t.magFilter===1008||t.minFilter===1006||t.minFilter===1007||t.minFilter===1005||t.minFilter===1008)&&z(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),l.texParameteri(e,l.TEXTURE_WRAP_S,pe[t.wrapS]),l.texParameteri(e,l.TEXTURE_WRAP_T,pe[t.wrapT]),(e===l.TEXTURE_3D||e===l.TEXTURE_2D_ARRAY)&&l.texParameteri(e,l.TEXTURE_WRAP_R,pe[t.wrapR]),l.texParameteri(e,l.TEXTURE_MAG_FILTER,me[t.magFilter]),l.texParameteri(e,l.TEXTURE_MIN_FILTER,me[t.minFilter]),t.compareFunction&&(l.texParameteri(e,l.TEXTURE_COMPARE_MODE,l.COMPARE_REF_TO_TEXTURE),l.texParameteri(e,l.TEXTURE_COMPARE_FUNC,he[t.compareFunction])),u.has(`EXT_texture_filter_anisotropic`)===!0){if(t.magFilter===1003||t.minFilter!==1005&&t.minFilter!==1008||t.type===1015&&u.has(`OES_texture_float_linear`)===!1)return;if(t.anisotropy>1||f.get(t).__currentAnisotropy){let n=u.get(`EXT_texture_filter_anisotropic`);l.texParameterf(e,n.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(t.anisotropy,p.getMaxAnisotropy())),f.get(t).__currentAnisotropy=t.anisotropy}}}function _e(e,t){let n=!1;e.__webglInit===void 0&&(e.__webglInit=!0,t.addEventListener(`dispose`,j));let r=t.source,i=S.get(r);i===void 0&&(i={},S.set(r,i));let a=le(t);if(a!==e.__cacheKey){i[a]===void 0&&(i[a]={texture:l.createTexture(),usedTimes:0},h.memory.textures++,n=!0),i[a].usedTimes++;let r=i[e.__cacheKey];r!==void 0&&(i[e.__cacheKey].usedTimes--,r.usedTimes===0&&M(t)),e.__cacheKey=a,e.__webglTexture=i[a].texture}return n}function ve(e,t,n){return Math.floor(Math.floor(e/n)/t)}function ye(e,t,n,r){let i=e.updateRanges;if(i.length===0)d.texSubImage2D(l.TEXTURE_2D,0,0,0,t.width,t.height,n,r,t.data);else{i.sort((e,t)=>e.start-t.start);let a=0;for(let e=1;e<i.length;e++){let n=i[a],r=i[e],o=n.start+n.count,s=ve(r.start,t.width,4),c=ve(n.start,t.width,4);r.start<=o+1&&s===c&&ve(r.start+r.count-1,t.width,4)===s?n.count=Math.max(n.count,r.start+r.count-n.start):(++a,i[a]=r)}i.length=a+1;let o=d.getParameter(l.UNPACK_ROW_LENGTH),s=d.getParameter(l.UNPACK_SKIP_PIXELS),c=d.getParameter(l.UNPACK_SKIP_ROWS);d.pixelStorei(l.UNPACK_ROW_LENGTH,t.width);for(let e=0,a=i.length;e<a;e++){let a=i[e],o=Math.floor(a.start/4),s=Math.ceil(a.count/4),c=o%t.width,u=Math.floor(o/t.width),f=s;d.pixelStorei(l.UNPACK_SKIP_PIXELS,c),d.pixelStorei(l.UNPACK_SKIP_ROWS,u),d.texSubImage2D(l.TEXTURE_2D,0,c,u,f,1,n,r,t.data)}e.clearUpdateRanges(),d.pixelStorei(l.UNPACK_ROW_LENGTH,o),d.pixelStorei(l.UNPACK_SKIP_PIXELS,s),d.pixelStorei(l.UNPACK_SKIP_ROWS,c)}}function be(e,t,n){let r=l.TEXTURE_2D;(t.isDataArrayTexture||t.isCompressedArrayTexture)&&(r=l.TEXTURE_2D_ARRAY),t.isData3DTexture&&(r=l.TEXTURE_3D);let i=_e(e,t),a=t.source;d.bindTexture(r,e.__webglTexture,l.TEXTURE0+n);let o=f.get(a);if(a.version!==o.__version||i===!0){if(d.activeTexture(l.TEXTURE0+n),!(typeof ImageBitmap<`u`&&t.image instanceof ImageBitmap)){let e=Pt.getPrimaries(Pt.workingColorSpace),n=t.colorSpace===``?null:Pt.getPrimaries(t.colorSpace),r=t.colorSpace===``||e===n?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,r)}d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment);let e=T(t.image,!1,p.maxTextureSize);e=I(t,e);let s=m.convert(t.format,t.colorSpace),c=m.convert(t.type),u=k(t.internalFormat,s,c,t.normalized,t.colorSpace,t.isVideoTexture);ge(r,t);let f,h=t.mipmaps,g=t.isVideoTexture!==!0,_=o.__version===void 0||i===!0,v=a.dataReady,y=A(t,e);if(t.isDepthTexture)u=te(t.format===E,t.type),_&&(g?d.texStorage2D(l.TEXTURE_2D,1,u,e.width,e.height):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,null));else if(t.isDataTexture)if(h.length>0){g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data);t.generateMipmaps=!1}else g?(_&&d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height),v&&ye(t,e,s,c)):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,e.data);else if(t.isCompressedTexture)if(t.isCompressedArrayTexture){g&&_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,h[0].width,h[0].height,e.depth);for(let n=0,r=h.length;n<r;n++)if(f=h[n],t.format!==1023)if(s!==null)if(g){if(v)if(t.layerUpdates.size>0){let e=Qs(f.width,f.height,t.format,t.type);for(let r of t.layerUpdates){let t=f.data.subarray(r*e/f.data.BYTES_PER_ELEMENT,(r+1)*e/f.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,r,f.width,f.height,1,s,t)}t.clearLayerUpdates()}else d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,f.data)}else d.compressedTexImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,f.data,0,0);else z(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`);else g?v&&d.texSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,c,f.data):d.texImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,s,c,f.data)}else{g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,n=h.length;e<n;e++)f=h[e],t.format===1023?g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data):s===null?z(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&d.compressedTexSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,f.data):d.compressedTexImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,f.data)}else if(t.isDataArrayTexture)if(g){if(_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,e.width,e.height,e.depth),v)if(t.layerUpdates.size>0){let n=Qs(e.width,e.height,t.format,t.type);for(let r of t.layerUpdates){let t=e.data.subarray(r*n/e.data.BYTES_PER_ELEMENT,(r+1)*n/e.data.BYTES_PER_ELEMENT);d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,r,e.width,e.height,1,s,c,t)}t.clearLayerUpdates()}else d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)}else d.texImage3D(l.TEXTURE_2D_ARRAY,0,u,e.width,e.height,e.depth,0,s,c,e.data);else if(t.isData3DTexture)g?(_&&d.texStorage3D(l.TEXTURE_3D,y,u,e.width,e.height,e.depth),v&&d.texSubImage3D(l.TEXTURE_3D,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)):d.texImage3D(l.TEXTURE_3D,0,u,e.width,e.height,e.depth,0,s,c,e.data);else if(t.isFramebufferTexture){if(_)if(g)d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height);else{let t=e.width,n=e.height;for(let e=0;e<y;e++)d.texImage2D(l.TEXTURE_2D,e,u,t,n,0,s,c,null),t>>=1,n>>=1}}else if(t.isHTMLTexture){if(`texElementImage2D`in l){let n=l.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),e.parentNode!==n){n.appendChild(e),b.add(t),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}let r=l.RGBA,i=l.RGBA,a=l.UNSIGNED_BYTE;l.texElementImage2D(l.TEXTURE_2D,0,r,i,a,e),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MIN_FILTER,l.LINEAR),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_S,l.CLAMP_TO_EDGE),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_T,l.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let e=Pe(h[0]);d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height)}for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,s,c,f):d.texImage2D(l.TEXTURE_2D,e,u,s,c,f);t.generateMipmaps=!1}else if(g){if(_){let t=Pe(e);d.texStorage2D(l.TEXTURE_2D,y,u,t.width,t.height)}v&&d.texSubImage2D(l.TEXTURE_2D,0,0,0,s,c,e)}else d.texImage2D(l.TEXTURE_2D,0,u,s,c,e);D(t)&&ee(r),o.__version=a.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function xe(e,t,n){if(t.image.length!==6)return;let r=_e(e,t),i=t.source;d.bindTexture(l.TEXTURE_CUBE_MAP,e.__webglTexture,l.TEXTURE0+n);let a=f.get(i);if(i.version!==a.__version||r===!0){d.activeTexture(l.TEXTURE0+n);let e=Pt.getPrimaries(Pt.workingColorSpace),o=t.colorSpace===``?null:Pt.getPrimaries(t.colorSpace),s=t.colorSpace===``||e===o?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,s);let c=t.isCompressedTexture||t.image[0].isCompressedTexture,u=t.image[0]&&t.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!c&&!u?f[e]=T(t.image[e],!0,p.maxCubemapSize):f[e]=u?t.image[e].image:t.image[e],f[e]=I(t,f[e]);let h=f[0],g=m.convert(t.format,t.colorSpace),_=m.convert(t.type),v=k(t.internalFormat,g,_,t.normalized,t.colorSpace),y=t.isVideoTexture!==!0,b=a.__version===void 0||r===!0,x=i.dataReady,S=A(t,h);ge(l.TEXTURE_CUBE_MAP,t);let C;if(c){y&&b&&d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let e=0;e<6;e++){C=f[e].mipmaps;for(let n=0;n<C.length;n++){let r=C[n];t.format===1023?y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,_,r.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,g,_,r.data):g===null?z(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,r.data):d.compressedTexImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,r.data)}}}else{if(C=t.mipmaps,y&&b){C.length>0&&S++;let e=Pe(f[0]);d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,e.width,e.height)}for(let e=0;e<6;e++)if(u){y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,f[e].width,f[e].height,g,_,f[e].data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,f[e].width,f[e].height,0,g,_,f[e].data);for(let t=0;t<C.length;t++){let n=C[t].image[e].image;y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,n.width,n.height,g,_,n.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,n.width,n.height,0,g,_,n.data)}}else{y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,g,_,f[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,g,_,f[e]);for(let t=0;t<C.length;t++){let n=C[t];y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,g,_,n.image[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,g,_,n.image[e])}}}D(t)&&ee(l.TEXTURE_CUBE_MAP),a.__version=i.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function Se(e,t,n,r,i,a){let o=m.convert(n.format,n.colorSpace),s=m.convert(n.type),c=k(n.internalFormat,o,s,n.normalized,n.colorSpace),u=f.get(t),p=f.get(n);if(p.__renderTarget=t,!u.__hasExternalTextures){let e=Math.max(1,t.width>>a),n=Math.max(1,t.height>>a);i===l.TEXTURE_3D||i===l.TEXTURE_2D_ARRAY?d.texImage3D(i,a,c,e,n,t.depth,0,o,s,null):d.texImage2D(i,a,c,e,n,0,o,s,null)}d.bindFramebuffer(l.FRAMEBUFFER,e),Me(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,r,i,p.__webglTexture,0,je(t)):(i===l.TEXTURE_2D||i>=l.TEXTURE_CUBE_MAP_POSITIVE_X&&i<=l.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&l.framebufferTexture2D(l.FRAMEBUFFER,r,i,p.__webglTexture,a),d.bindFramebuffer(l.FRAMEBUFFER,null)}function Ce(e,t,n){if(l.bindRenderbuffer(l.RENDERBUFFER,e),t.depthBuffer){let r=t.depthTexture,i=r&&r.isDepthTexture?r.type:null,a=te(t.stencilBuffer,i),o=t.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;Me(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,je(t),a,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,je(t),a,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,a,t.width,t.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,o,l.RENDERBUFFER,e)}else{let e=t.textures;for(let r=0;r<e.length;r++){let i=e[r],a=m.convert(i.format,i.colorSpace),o=m.convert(i.type),s=k(i.internalFormat,a,o,i.normalized,i.colorSpace);Me(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,je(t),s,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,je(t),s,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,s,t.width,t.height)}}l.bindRenderbuffer(l.RENDERBUFFER,null)}function we(e,t,n){let r=t.isWebGLCubeRenderTarget===!0;if(d.bindFramebuffer(l.FRAMEBUFFER,e),!(t.depthTexture&&t.depthTexture.isDepthTexture))throw Error(`renderTarget.depthTexture must be an instance of THREE.DepthTexture`);let i=f.get(t.depthTexture);if(i.__renderTarget=t,(!i.__webglTexture||t.depthTexture.image.width!==t.width||t.depthTexture.image.height!==t.height)&&(t.depthTexture.image.width=t.width,t.depthTexture.image.height=t.height,t.depthTexture.needsUpdate=!0),r){if(i.__webglInit===void 0&&(i.__webglInit=!0,t.depthTexture.addEventListener(`dispose`,j)),i.__webglTexture===void 0){i.__webglTexture=l.createTexture(),d.bindTexture(l.TEXTURE_CUBE_MAP,i.__webglTexture),ge(l.TEXTURE_CUBE_MAP,t.depthTexture);let e=m.convert(t.depthTexture.format),n=m.convert(t.depthTexture.type),r;t.depthTexture.format===1026?r=l.DEPTH_COMPONENT24:t.depthTexture.format===1027&&(r=l.DEPTH24_STENCIL8);for(let i=0;i<6;i++)l.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,r,t.width,t.height,0,e,n,null)}}else P(t.depthTexture,0);let a=i.__webglTexture,o=je(t),s=r?l.TEXTURE_CUBE_MAP_POSITIVE_X+n:l.TEXTURE_2D,c=t.depthTexture.format===1027?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;if(t.depthTexture.format===1026)Me(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,c,s,a,0,o):l.framebufferTexture2D(l.FRAMEBUFFER,c,s,a,0);else if(t.depthTexture.format===1027)Me(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,c,s,a,0,o):l.framebufferTexture2D(l.FRAMEBUFFER,c,s,a,0);else throw Error(`Unknown depthTexture format`)}function Te(e){let t=f.get(e),n=e.isWebGLCubeRenderTarget===!0;if(t.__boundDepthTexture!==e.depthTexture){let n=e.depthTexture;if(t.__depthDisposeCallback&&t.__depthDisposeCallback(),n){let e=()=>{delete t.__boundDepthTexture,delete t.__depthDisposeCallback,n.removeEventListener(`dispose`,e)};n.addEventListener(`dispose`,e),t.__depthDisposeCallback=e}t.__boundDepthTexture=n}if(e.depthTexture&&!t.__autoAllocateDepthBuffer)if(n)for(let n=0;n<6;n++)we(t.__webglFramebuffer[n],e,n);else{let n=e.texture.mipmaps;n&&n.length>0?we(t.__webglFramebuffer[0],e,0):we(t.__webglFramebuffer,e,0)}else if(n){t.__webglDepthbuffer=[];for(let n=0;n<6;n++)if(d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[n]),t.__webglDepthbuffer[n]===void 0)t.__webglDepthbuffer[n]=l.createRenderbuffer(),Ce(t.__webglDepthbuffer[n],e,!1);else{let r=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,i=t.__webglDepthbuffer[n];l.bindRenderbuffer(l.RENDERBUFFER,i),l.framebufferRenderbuffer(l.FRAMEBUFFER,r,l.RENDERBUFFER,i)}}else{let n=e.texture.mipmaps;if(n&&n.length>0?d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[0]):d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer),t.__webglDepthbuffer===void 0)t.__webglDepthbuffer=l.createRenderbuffer(),Ce(t.__webglDepthbuffer,e,!1);else{let n=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,r=t.__webglDepthbuffer;l.bindRenderbuffer(l.RENDERBUFFER,r),l.framebufferRenderbuffer(l.FRAMEBUFFER,n,l.RENDERBUFFER,r)}}d.bindFramebuffer(l.FRAMEBUFFER,null)}function Ee(e,t,n){let r=f.get(e);t!==void 0&&Se(r.__webglFramebuffer,e,e.texture,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,0),n!==void 0&&Te(e)}function De(e){let t=e.texture,n=f.get(e),r=f.get(t);e.addEventListener(`dispose`,ne);let i=e.textures,a=e.isWebGLCubeRenderTarget===!0,o=i.length>1;if(o||(r.__webglTexture===void 0&&(r.__webglTexture=l.createTexture()),r.__version=t.version,h.memory.textures++),a){n.__webglFramebuffer=[];for(let e=0;e<6;e++)if(t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer[e]=[];for(let r=0;r<t.mipmaps.length;r++)n.__webglFramebuffer[e][r]=l.createFramebuffer()}else n.__webglFramebuffer[e]=l.createFramebuffer()}else{if(t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer=[];for(let e=0;e<t.mipmaps.length;e++)n.__webglFramebuffer[e]=l.createFramebuffer()}else n.__webglFramebuffer=l.createFramebuffer();if(o)for(let e=0,t=i.length;e<t;e++){let t=f.get(i[e]);t.__webglTexture===void 0&&(t.__webglTexture=l.createTexture(),h.memory.textures++)}if(e.samples>0&&Me(e)===!1){n.__webglMultisampledFramebuffer=l.createFramebuffer(),n.__webglColorRenderbuffer=[],d.bindFramebuffer(l.FRAMEBUFFER,n.__webglMultisampledFramebuffer);for(let t=0;t<i.length;t++){let r=i[t];n.__webglColorRenderbuffer[t]=l.createRenderbuffer(),l.bindRenderbuffer(l.RENDERBUFFER,n.__webglColorRenderbuffer[t]);let a=m.convert(r.format,r.colorSpace),o=m.convert(r.type),s=k(r.internalFormat,a,o,r.normalized,r.colorSpace,e.isXRRenderTarget===!0),c=je(e);l.renderbufferStorageMultisample(l.RENDERBUFFER,c,s,e.width,e.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+t,l.RENDERBUFFER,n.__webglColorRenderbuffer[t])}l.bindRenderbuffer(l.RENDERBUFFER,null),e.depthBuffer&&(n.__webglDepthRenderbuffer=l.createRenderbuffer(),Ce(n.__webglDepthRenderbuffer,e,!0)),d.bindFramebuffer(l.FRAMEBUFFER,null)}}if(a){d.bindTexture(l.TEXTURE_CUBE_MAP,r.__webglTexture),ge(l.TEXTURE_CUBE_MAP,t);for(let r=0;r<6;r++)if(t.mipmaps&&t.mipmaps.length>0)for(let i=0;i<t.mipmaps.length;i++)Se(n.__webglFramebuffer[r][i],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,i);else Se(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,0);D(t)&&ee(l.TEXTURE_CUBE_MAP),d.unbindTexture()}else if(o){for(let t=0,r=i.length;t<r;t++){let r=i[t],a=f.get(r),o=l.TEXTURE_2D;(e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(o=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(o,a.__webglTexture),ge(o,r),Se(n.__webglFramebuffer,e,r,l.COLOR_ATTACHMENT0+t,o,0),D(r)&&ee(o)}d.unbindTexture()}else{let i=l.TEXTURE_2D;if((e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(i=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(i,r.__webglTexture),ge(i,t),t.mipmaps&&t.mipmaps.length>0)for(let r=0;r<t.mipmaps.length;r++)Se(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,i,r);else Se(n.__webglFramebuffer,e,t,l.COLOR_ATTACHMENT0,i,0);D(t)&&ee(i),d.unbindTexture()}e.depthBuffer&&Te(e)}function Oe(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(D(r)){let t=O(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),ee(t),d.unbindTexture()}}}let ke=[],Ae=[];function F(e){if(e.samples>0){if(Me(e)===!1){let t=e.textures,n=e.width,r=e.height,i=l.COLOR_BUFFER_BIT,a=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,o=f.get(e),s=t.length>1;if(s)for(let e=0;e<t.length;e++)d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,null),d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,null,0);d.bindFramebuffer(l.READ_FRAMEBUFFER,o.__webglMultisampledFramebuffer);let c=e.texture.mipmaps;c&&c.length>0?d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer[0]):d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer);for(let c=0;c<t.length;c++){if(e.resolveDepthBuffer&&(e.depthBuffer&&(i|=l.DEPTH_BUFFER_BIT),e.stencilBuffer&&e.resolveStencilBuffer&&(i|=l.STENCIL_BUFFER_BIT)),s){l.framebufferRenderbuffer(l.READ_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.RENDERBUFFER,o.__webglColorRenderbuffer[c]);let e=f.get(t[c]).__webglTexture;l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,e,0)}l.blitFramebuffer(0,0,n,r,0,0,n,r,i,l.NEAREST),_===!0&&(ke.length=0,Ae.length=0,ke.push(l.COLOR_ATTACHMENT0+c),e.depthBuffer&&e.resolveDepthBuffer===!1&&(ke.push(a),Ae.push(a),l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,Ae)),l.invalidateFramebuffer(l.READ_FRAMEBUFFER,ke))}if(d.bindFramebuffer(l.READ_FRAMEBUFFER,null),d.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),s)for(let e=0;e<t.length;e++){d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,o.__webglColorRenderbuffer[e]);let n=f.get(t[e]).__webglTexture;d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,n,0)}d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglMultisampledFramebuffer)}else if(e.depthBuffer&&e.resolveDepthBuffer===!1&&_){let t=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,[t])}}}function je(e){return Math.min(p.maxSamples,e.samples)}function Me(e){let t=f.get(e);return e.samples>0&&u.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function Ne(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function I(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Pt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&z(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):B(`WebGLTextures: Unsupported texture color space:`,n)),t}function Pe(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=ce,this.resetTextureUnits=oe,this.getTextureUnits=se,this.setTextureUnits=N,this.setTexture2D=P,this.setTexture2DArray=ue,this.setTexture3D=de,this.setTextureCube=fe,this.rebindTextures=Ee,this.setupRenderTarget=De,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=F,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Me,this.isReversedDepthBuffer=function(){return d.buffers.depth.getReversed()}}function rd(e,t){function n(n,r=``){let i,a=Pt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(a===`srgb`)if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491)if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var id=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ad=`
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

}`,od=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new aa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Vo({vertexShader:id,fragmentShader:ad,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new J(new Oo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},sd=class extends tt{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,u=null,d=null,f=null,p=null,h=null,g=typeof XRWebGLBinding<`u`,_=new od,v={},b=t.getContextAttributes(),x=null,S=null,C=[],D=[],ee=new U,O=null,k=new Es;k.viewport=new Gt;let te=new Es;te.viewport=new Gt;let A=[k,te],j=new Ls,ne=null,re=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new En,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new En,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new En,C[e]=t),t.getHandSpace()};function M(e){let t=D.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ie(){r.removeEventListener(`select`,M),r.removeEventListener(`selectstart`,M),r.removeEventListener(`selectend`,M),r.removeEventListener(`squeeze`,M),r.removeEventListener(`squeezestart`,M),r.removeEventListener(`squeezeend`,M),r.removeEventListener(`end`,ie),r.removeEventListener(`inputsourceschange`,ae);for(let e=0;e<C.length;e++){let t=D[e];t!==null&&(D[e]=null,C[e].disconnect(t))}ne=null,re=null,_.reset();for(let e in v)delete v[e];e.setRenderTarget(x),p=null,f=null,d=null,r=null,S=null,de.stop(),n.isPresenting=!1,e.setPixelRatio(O),e.setSize(ee.width,ee.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&z(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&z(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return h},this.getSession=function(){return r},this.setSession=async function(u){if(r=u,r!==null){if(x=e.getRenderTarget(),r.addEventListener(`select`,M),r.addEventListener(`selectstart`,M),r.addEventListener(`selectend`,M),r.addEventListener(`squeeze`,M),r.addEventListener(`squeezestart`,M),r.addEventListener(`squeezeend`,M),r.addEventListener(`end`,ie),r.addEventListener(`inputsourceschange`,ae),b.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(ee),g&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;b.depth&&(o=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=b.stencil?E:T,a=b.stencil?y:m);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=this.getBinding(),f=d.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new qt(f.textureWidth,f.textureHeight,{format:w,type:l,depthTexture:new ra(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new qt(p.framebufferWidth,p.framebufferHeight,{format:w,type:l,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),de.setContext(r),de.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ae(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=D.indexOf(n);r>=0&&(D[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=D.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=D.length){D.push(n),r=e;break}else if(D[e]===null){D[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}let oe=new W,se=new W;function N(e,t,n){oe.setFromMatrixPosition(t.matrixWorld),se.setFromMatrixPosition(n.matrixWorld);let r=oe.distanceTo(se),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ce(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),j.near=te.near=k.near=t,j.far=te.far=k.far=n,(ne!==j.near||re!==j.far)&&(r.updateRenderState({depthNear:j.near,depthFar:j.far}),ne=j.near,re=j.far),j.layers.mask=e.layers.mask|6,k.layers.mask=j.layers.mask&-5,te.layers.mask=j.layers.mask&-3;let i=e.parent,a=j.cameras;ce(j,i);for(let e=0;e<a.length;e++)ce(a[e],i);a.length===2?N(j,k,te):j.projectionMatrix.copy(k.projectionMatrix),le(e,j,i)};function le(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=at*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(f===null&&p===null))return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(j)},this.getCameraTexture=function(e){return v[e]};let P=null;function ue(t,i){if(u=i.getViewerPose(c||a),h=i,u!==null){let t=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==j.cameras.length&&(j.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=d.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=A[n];o===void 0&&(o=new Es,o.layers.enable(n),o.viewport=new Gt,A[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(j.matrix.copy(o.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),i===!0&&j.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&g){d=n.getBinding();let e=d.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&g){e.state.unbindTexture(),d=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new aa,v[n]=e);let t=d.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=D[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}P&&P(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),h=null}let de=new ec;de.setAnimationLoop(ue),this.setAnimationLoop=function(e){P=e},this.dispose=function(){}}},cd=new Xt,ld=new G;ld.set(-1,0,0,0,1,0,0,0,1);function ud(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Lo(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(cd.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(ld),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function dd(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(m(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return B(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let t=0,n=r.length;t<n;t++){let n=Array.isArray(r[t])?r[t]:[r[t]];for(let r=0,i=n.length;r<i;r++){let i=n[r];if(p(i,t,r,a)===!0){let t=i.__offset,n=Array.isArray(i.value)?i.value:[i.value],r=0;for(let a=0;a<n.length;a++){let o=n[a],s=h(o);typeof o==`number`||typeof o==`boolean`?(i.__data[0]=o,e.bufferSubData(e.UNIFORM_BUFFER,t+r,i.__data)):o.isMatrix3?(i.__data[0]=o.elements[0],i.__data[1]=o.elements[1],i.__data[2]=o.elements[2],i.__data[3]=0,i.__data[4]=o.elements[3],i.__data[5]=o.elements[4],i.__data[6]=o.elements[5],i.__data[7]=0,i.__data[8]=o.elements[6],i.__data[9]=o.elements[7],i.__data[10]=o.elements[8],i.__data[11]=0):ArrayBuffer.isView(o)?i.__data.set(new o.constructor(o.buffer,o.byteOffset,i.__data.length)):(o.toArray(i.__data,r),r+=s.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,t,i.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return typeof i==`number`||typeof i==`boolean`?r[a]=i:ArrayBuffer.isView(i)?r[a]=i.slice():r[a]=i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=h(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?z(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):z(`WebGLRenderer: Unsupported uniform value type.`,e),t}function g(t){let n=t.target;n.removeEventListener(`dispose`,g);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:_}}var fd=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),pd=null;function md(){return pd===null&&(pd=new _i(fd,16,16,O,g),pd.name=`DFG_LUT`,pd.minFilter=o,pd.magFilter=o,pd.wrapS=t,pd.wrapT=t,pd.generateMipmaps=!1,pd.needsUpdate=!0),pd}var hd=class{constructor(e={}){let{canvas:t=qe(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:u=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:b=l}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);x=n.getContextAttributes().alpha}else x=a;let S=b,C=new Set([te,k,ee]),w=new Set([l,m,f,y,_,v]),T=new Uint32Array(4),E=new Int32Array(4),D=new W,O=null,A=null,j=[],ne=[],re=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,ie=!1,ae=null;this._outputColorSpace=Le;let oe=0,se=0,N=null,ce=-1,le=null,P=new Gt,ue=new Gt,de=null,fe=new q(0),pe=0,me=t.width,he=t.height,ge=1,_e=null,ve=null,ye=new Gt(0,0,me,he),be=new Gt(0,0,me,he),xe=!1,Se=new Pi,Ce=!1,we=!1,Te=new Xt,Ee=new W,De=new Gt,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ke=!1;function Ae(){return N===null?ge:1}let F=n;function je(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:p};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r184`),t.addEventListener(`webglcontextlost`,at,!1),t.addEventListener(`webglcontextrestored`,ot,!1),t.addEventListener(`webglcontextcreationerror`,V,!1),F===null){let t=`webgl2`;if(F=je(t,e),F===null)throw je(t)?Error(`Error creating WebGL context with your selected attributes.`):Error(`Error creating WebGL context.`)}}catch(e){throw B(`WebGLRenderer: `+e.message),e}let Me,Ne,I,Pe,L,R,Fe,Ie,Re,ze,Be,Ve,He,We,Ge,Ke,Je,Ye,Ze,Qe,et,tt,nt;function rt(){Me=new Nc(F),Me.init(),et=new rd(F,Me),Ne=new lc(F,Me,e,et),I=new td(F,Me),Ne.reversedDepthBuffer&&h&&I.buffers.depth.setReversed(!0),Pe=new Ic(F),L=new Fu,R=new nd(F,Me,I,L,Ne,et,Pe),Fe=new Mc(M),Ie=new tc(F),tt=new sc(F,Ie),Re=new Pc(F,Ie,Pe,tt),ze=new Rc(F,Re,Ie,tt,Pe),Ye=new Lc(F,Ne,R),Ge=new uc(L),Be=new Pu(M,Fe,Me,Ne,tt,Ge),Ve=new ud(M,L),He=new zu,We=new Ku(Me),Je=new oc(M,Fe,I,ze,x,s),Ke=new ed(M,ze,Ne),nt=new dd(F,Pe,Ne,I),Ze=new cc(F,Me,Pe),Qe=new Fc(F,Me,Pe),Pe.programs=Be.programs,M.capabilities=Ne,M.extensions=Me,M.properties=L,M.renderLists=He,M.shadowMap=Ke,M.state=I,M.info=Pe}rt(),S!==1009&&(re=new Bc(S,t.width,t.height,r,i));let it=new sd(M,F);this.xr=it,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let e=Me.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Me.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(e){e!==void 0&&(ge=e,this.setSize(me,he,!1))},this.getSize=function(e){return e.set(me,he)},this.setSize=function(e,n,r=!0){if(it.isPresenting){z(`WebGLRenderer: Can't change size while VR device is presenting.`);return}me=e,he=n,t.width=Math.floor(e*ge),t.height=Math.floor(n*ge),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),re!==null&&re.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(me*ge,he*ge).floor()},this.setDrawingBufferSize=function(e,n,r){me=e,he=n,ge=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(S===1009){B(`THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){z(`THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}re.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(P)},this.getViewport=function(e){return e.copy(ye)},this.setViewport=function(e,t,n,r){e.isVector4?ye.set(e.x,e.y,e.z,e.w):ye.set(e,t,n,r),I.viewport(P.copy(ye).multiplyScalar(ge).round())},this.getScissor=function(e){return e.copy(be)},this.setScissor=function(e,t,n,r){e.isVector4?be.set(e.x,e.y,e.z,e.w):be.set(e,t,n,r),I.scissor(ue.copy(be).multiplyScalar(ge).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(e){I.setScissorTest(xe=e)},this.setOpaqueSort=function(e){_e=e},this.setTransparentSort=function(e){ve=e},this.getClearColor=function(e){return e.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor(...arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(N!==null){let t=N.texture.format;e=C.has(t)}if(e){let e=N.texture.type,t=w.has(e),n=Je.getClearColor(),r=Je.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,F.clearBufferuiv(F.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,F.clearBufferiv(F.COLOR,0,E))}else r|=F.COLOR_BUFFER_BIT}t&&(r|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&F.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),ae=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,at,!1),t.removeEventListener(`webglcontextrestored`,ot,!1),t.removeEventListener(`webglcontextcreationerror`,V,!1),Je.dispose(),He.dispose(),We.dispose(),L.dispose(),Fe.dispose(),ze.dispose(),tt.dispose(),nt.dispose(),Be.dispose(),it.dispose(),it.removeEventListener(`sessionstart`,pt),it.removeEventListener(`sessionend`,mt),ht.stop()};function at(e){e.preventDefault(),Xe(`WebGLRenderer: Context Lost.`),ie=!0}function ot(){Xe(`WebGLRenderer: Context Restored.`),ie=!1;let e=Pe.autoReset,t=Ke.enabled,n=Ke.autoUpdate,r=Ke.needsUpdate,i=Ke.type;rt(),Pe.autoReset=e,Ke.enabled=t,Ke.autoUpdate=n,Ke.needsUpdate=r,Ke.type=i}function V(e){B(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function st(e){let t=e.target;t.removeEventListener(`dispose`,st),ct(t)}function ct(e){lt(e),L.remove(e)}function lt(e){let t=L.get(e).programs;t!==void 0&&(t.forEach(function(e){Be.releaseProgram(e)}),e.isShaderMaterial&&Be.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Oe);let o=i.isMesh&&i.matrixWorld.determinant()<0,s=Tt(e,t,n,r,i);I.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Re.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;tt.setup(i,r,s,n,c);let h,g=Ze;if(c!==null&&(h=Ie.get(c),g=Qe,g.setIndex(h)),i.isMesh)r.wireframe===!0?(I.setLineWidth(r.wireframeLinewidth*Ae()),g.setMode(F.LINES)):g.setMode(F.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),I.setLineWidth(e*Ae()),i.isLineSegments?g.setMode(F.LINES):i.isLineLoop?g.setMode(F.LINE_LOOP):g.setMode(F.LINE_STRIP)}else i.isPoints?g.setMode(F.POINTS):i.isSprite&&g.setMode(F.TRIANGLES);if(i.isBatchedMesh)if(Me.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ie.get(c).bytesPerElement:1,o=L.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(F,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function ut(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,xt(e,t,n),e.side=0,e.needsUpdate=!0,xt(e,t,n),e.side=2):xt(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),A=We.get(n),A.init(t),ne.push(A),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(A.pushLight(e),e.castShadow&&A.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(A.pushLight(e),e.castShadow&&A.pushShadow(e))}),A.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t)if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];ut(a,n,e),r.add(a)}else ut(t,n,e),r.add(t)}),A=ne.pop(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){L.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}Me.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let dt=null;function ft(e){dt&&dt(e)}function pt(){ht.stop()}function mt(){ht.start()}let ht=new ec;ht.setAnimationLoop(ft),typeof self<`u`&&ht.setContext(self),this.setAnimationLoop=function(e){dt=e,it.setAnimationLoop(e),e===null?ht.stop():ht.start()},it.addEventListener(`sessionstart`,pt),it.addEventListener(`sessionend`,mt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){B(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(ie===!0)return;ae!==null&&ae.renderStart(e,t);let n=it.enabled===!0&&it.isPresenting===!0,r=re!==null&&(N===null||n)&&re.begin(M,N);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(re===null||re.isCompositing()===!1)&&(it.cameraAutoUpdate===!0&&it.updateCamera(t),t=it.getCamera()),e.isScene===!0&&e.onBeforeRender(M,e,t,N),A=We.get(e,ne.length),A.init(t),A.state.textureUnits=R.getTextureUnits(),ne.push(A),Te.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),Se.setFromProjectionMatrix(Te,Ue,t.reversedDepth),we=this.localClippingEnabled,Ce=Ge.init(this.clippingPlanes,we),O=He.get(e,j.length),O.init(),j.push(O),it.enabled===!0&&it.isPresenting===!0){let e=M.xr.getDepthSensingMesh();e!==null&&gt(e,t,-1/0,M.sortObjects)}gt(e,t,0,M.sortObjects),O.finish(),M.sortObjects===!0&&O.sort(_e,ve),ke=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,ke&&Je.addToRenderList(O,e),this.info.render.frame++,Ce===!0&&Ge.beginShadows();let i=A.state.shadowsArray;if(Ke.render(i,e,t),Ce===!0&&Ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),(r&&re.hasRenderPass())===!1){let n=O.opaque,r=O.transmissive;if(A.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];vt(n,r,e,a)}ke&&Je.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];_t(O,e,n,n.viewport)}}else r.length>0&&vt(n,r,e,t),ke&&Je.render(e),_t(O,e,t)}N!==null&&se===0&&(R.updateMultisampleRenderTarget(N),R.updateRenderTargetMipmap(N)),r&&re.end(M),e.isScene===!0&&e.onAfterRender(M,e,t),tt.resetDefaultState(),ce=-1,le=null,ne.pop(),ne.length>0?(A=ne[ne.length-1],R.setTextureUnits(A.state.textureUnits),Ce===!0&&Ge.setGlobalState(M.clippingPlanes,A.state.camera)):A=null,j.pop(),O=j.length>0?j[j.length-1]:null,ae!==null&&ae.renderEnd()};function gt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)A.pushLightProbeGrid(e);else if(e.isLight)A.pushLight(e),e.castShadow&&A.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||Se.intersectsSprite(e)){r&&De.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Te);let t=ze.update(e),i=e.material;i.visible&&O.push(e,t,i,n,De.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||Se.intersectsObject(e))){let t=ze.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),De.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),De.copy(e.boundingSphere.center)),De.applyMatrix4(e.matrixWorld).applyMatrix4(Te)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&O.push(e,t,s,n,De.z,o)}}else i.visible&&O.push(e,t,i,n,De.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)gt(i[e],t,n,r)}function _t(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;A.setupLightsView(n),Ce===!0&&Ge.setGlobalState(M.clippingPlanes,n),r&&I.viewport(P.copy(r)),i.length>0&&yt(i,t,n),a.length>0&&yt(a,t,n),o.length>0&&yt(o,t,n),I.buffers.depth.setTest(!0),I.buffers.depth.setMask(!0),I.buffers.color.setMask(!0),I.setPolygonOffset(!1)}function vt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[r.id]===void 0){let e=Me.has(`EXT_color_buffer_half_float`)||Me.has(`EXT_color_buffer_float`);A.state.transmissionRenderTarget[r.id]=new qt(1,1,{generateMipmaps:!0,type:e?g:l,minFilter:c,samples:Math.max(4,Ne.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Pt.workingColorSpace})}let a=A.state.transmissionRenderTarget[r.id],o=r.viewport||P;a.setSize(o.z*M.transmissionResolutionScale,o.w*M.transmissionResolutionScale);let s=M.getRenderTarget(),u=M.getActiveCubeFace(),d=M.getActiveMipmapLevel();M.setRenderTarget(a),M.getClearColor(fe),pe=M.getClearAlpha(),pe<1&&M.setClearColor(16777215,.5),M.clear(),ke&&Je.render(n);let f=M.toneMapping;M.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),A.setupLightsView(r),Ce===!0&&Ge.setGlobalState(M.clippingPlanes,r),yt(e,n,r),R.updateMultisampleRenderTarget(a),R.updateRenderTargetMipmap(a),Me.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,bt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(R.updateMultisampleRenderTarget(a),R.updateRenderTargetMipmap(a))}M.setRenderTarget(s,u,d),M.setClearColor(fe,pe),p!==void 0&&(r.viewport=p),M.toneMapping=f}function yt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&bt(o,t,n,s,l,c)}}function bt(e,t,n,r,i,a){e.onBeforeRender(M,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(M,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,M.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,M.renderBufferDirect(n,t,r,i,e,a),i.side=2):M.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(M,t,n,r,i,a)}function xt(e,t,n){t.isScene!==!0&&(t=Oe);let r=L.get(e),i=A.state.lights,a=A.state.shadowsArray,o=i.state.version,s=Be.getParameters(e,i.state,a,t,n,A.state.lightProbeGridArray),c=Be.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Fe.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,st),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Ct(e,s),d}else s.uniforms=Be.getUniforms(e),ae!==null&&e.isNodeMaterial&&ae.build(e,n,s),e.onBeforeCompile(s,M),d=Be.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ge.uniform),Ct(e,s),r.needsLights=H(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=A.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function St(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=ql.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Ct(e,t){let n=L.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function wt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];D.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(D))return n}return null}function Tt(e,t,n,r,i){t.isScene!==!0&&(t=Oe),R.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=N===null?M.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Pt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Fe.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(h=M.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=L.get(r),y=A.state.lights;if(Ce===!0&&(we===!0||e!==le)){let t=e===le&&r.id===ce;Ge.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ge.numPlanes||v.numIntersection!==Ge.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=A.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=xt(r,t,i),ae&&r.isNodeMaterial&&ae.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(I.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==ce&&(ce=r.id,C=!0),v.needsLights){let e=wt(A.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||le!==e){I.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(F,`projectionMatrix`,e.projectionMatrix),T.setValue(F,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(F,Ee.setFromMatrixPosition(e.matrixWorld)),Ne.logarithmicDepthBuffer&&T.setValue(F,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(F,`isOrthographic`,e.isOrthographicCamera===!0),le!==e&&(le=e,C=!0,w=!0)}if(v.needsLights&&(y.state.directionalShadowMap.length>0&&T.setValue(F,`directionalShadowMap`,y.state.directionalShadowMap,R),y.state.spotShadowMap.length>0&&T.setValue(F,`spotShadowMap`,y.state.spotShadowMap,R),y.state.pointShadowMap.length>0&&T.setValue(F,`pointShadowMap`,y.state.pointShadowMap,R)),i.isSkinnedMesh){T.setOptional(F,i,`bindMatrix`),T.setOptional(F,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(F,`boneTexture`,e.boneTexture,R))}i.isBatchedMesh&&(T.setOptional(F,i,`batchingTexture`),T.setValue(F,`batchingTexture`,i._matricesTexture,R),T.setOptional(F,i,`batchingIdTexture`),T.setValue(F,`batchingIdTexture`,i._indirectTexture,R),T.setOptional(F,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(F,`batchingColorTexture`,i._colorsTexture,R));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&Ye.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(F,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=md()),C){if(T.setValue(F,`toneMappingExposure`,M.toneMappingExposure),v.needsLights&&Et(E,w),a&&r.fog===!0&&Ve.refreshFogUniforms(E,a),Ve.refreshMaterialUniforms(E,r,ge,he,A.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}ql.upload(F,St(v),E,R)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(ql.upload(F,St(v),E,R),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(F,`center`,i.center),T.setValue(F,`modelViewMatrix`,i.modelViewMatrix),T.setValue(F,`normalMatrix`,i.normalMatrix),T.setValue(F,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];nt.update(n,x),nt.bind(n,x)}}return x}function Et(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function H(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return oe},this.getActiveMipmapLevel=function(){return se},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(e,t,n){let r=L.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),L.get(e.texture).__webglTexture=t,L.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=L.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0};let U=F.createFramebuffer();this.setRenderTarget=function(e,t=0,n=0){N=e,oe=t,se=n;let r=null,i=!1,a=!1;if(e){let o=L.get(e);if(o.__useDefaultFramebuffer!==void 0){I.bindFramebuffer(F.FRAMEBUFFER,o.__webglFramebuffer),P.copy(e.viewport),ue.copy(e.scissor),de=e.scissorTest,I.viewport(P),I.scissor(ue),I.setScissorTest(de),ce=-1;return}else if(o.__webglFramebuffer===void 0)R.setupRenderTarget(e);else if(o.__hasExternalTextures)R.rebindTextures(e,L.get(e.texture).__webglTexture,L.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&L.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.`);R.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=L.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&R.useMultisampledRTT(e)===!1?L.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,P.copy(e.viewport),ue.copy(e.scissor),de=e.scissorTest}else P.copy(ye).multiplyScalar(ge).floor(),ue.copy(be).multiplyScalar(ge).floor(),de=xe;if(n!==0&&(r=U),I.bindFramebuffer(F.FRAMEBUFFER,r)&&I.drawBuffers(e,r),I.viewport(P),I.scissor(ue),I.setScissorTest(de),i){let r=L.get(e.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=L.get(e.textures[t]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=L.get(e.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,t.__webglTexture,n)}ce=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){B(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=L.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){I.bindFramebuffer(F.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;if(e.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+s),!Ne.textureFormatReadable(c)){B(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!Ne.textureTypeReadable(l)){B(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&F.readPixels(t,n,r,i,et.convert(c),et.convert(l),a)}finally{let e=N===null?null:L.get(N).__webglFramebuffer;I.bindFramebuffer(F.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=L.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c)if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){I.bindFramebuffer(F.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;if(e.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+s),!Ne.textureFormatReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!Ne.textureTypeReadable(u))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let d=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,d),F.bufferData(F.PIXEL_PACK_BUFFER,a.byteLength,F.STREAM_READ),F.readPixels(t,n,r,i,et.convert(l),et.convert(u),0);let f=N===null?null:L.get(N).__webglFramebuffer;I.bindFramebuffer(F.FRAMEBUFFER,f);let p=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await $e(F,p,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,d),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,a),F.deleteBuffer(d),F.deleteSync(p),a}else throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;R.setTexture2D(e,0),F.copyTexSubImage2D(F.TEXTURE_2D,n,0,0,o,s,i,a),I.unbindTexture()};let Dt=F.createFramebuffer(),Ot=F.createFramebuffer();this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=et.convert(t.format),_=et.convert(t.type),v;t.isData3DTexture?(R.setTexture3D(t,0),v=F.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(R.setTexture2DArray(t,0),v=F.TEXTURE_2D_ARRAY):(R.setTexture2D(t,0),v=F.TEXTURE_2D),I.activeTexture(F.TEXTURE0),I.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,t.flipY),I.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),I.pixelStorei(F.UNPACK_ALIGNMENT,t.unpackAlignment);let y=I.getParameter(F.UNPACK_ROW_LENGTH),b=I.getParameter(F.UNPACK_IMAGE_HEIGHT),x=I.getParameter(F.UNPACK_SKIP_PIXELS),S=I.getParameter(F.UNPACK_SKIP_ROWS),C=I.getParameter(F.UNPACK_SKIP_IMAGES);I.pixelStorei(F.UNPACK_ROW_LENGTH,h.width),I.pixelStorei(F.UNPACK_IMAGE_HEIGHT,h.height),I.pixelStorei(F.UNPACK_SKIP_PIXELS,l),I.pixelStorei(F.UNPACK_SKIP_ROWS,u),I.pixelStorei(F.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=L.get(e),r=L.get(t),h=L.get(n.__renderTarget),g=L.get(r.__renderTarget);I.bindFramebuffer(F.READ_FRAMEBUFFER,h.__webglFramebuffer),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,L.get(e).__webglTexture,i,d+n),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,L.get(t).__webglTexture,a,m+n)),F.blitFramebuffer(l,u,o,s,f,p,o,s,F.DEPTH_BUFFER_BIT,F.NEAREST);I.bindFramebuffer(F.READ_FRAMEBUFFER,null),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||L.has(e)){let n=L.get(e),r=L.get(t);I.bindFramebuffer(F.READ_FRAMEBUFFER,Dt),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ot);for(let e=0;e<c;e++)w?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,n.__webglTexture,i),T?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,r.__webglTexture,a),i===0?T?F.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):F.copyTexSubImage2D(v,a,f,p,l,u,o,s):F.blitFramebuffer(l,u,o,s,f,p,o,s,F.COLOR_BUFFER_BIT,F.NEAREST);I.bindFramebuffer(F.READ_FRAMEBUFFER,null),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?F.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?F.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):F.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):F.texSubImage2D(F.TEXTURE_2D,a,f,p,o,s,g,_,h);I.pixelStorei(F.UNPACK_ROW_LENGTH,y),I.pixelStorei(F.UNPACK_IMAGE_HEIGHT,b),I.pixelStorei(F.UNPACK_SKIP_PIXELS,x),I.pixelStorei(F.UNPACK_SKIP_ROWS,S),I.pixelStorei(F.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&F.generateMipmap(v),I.unbindTexture()},this.initRenderTarget=function(e){L.get(e).__webglFramebuffer===void 0&&R.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?R.setTextureCube(e,0):e.isData3DTexture?R.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?R.setTexture2DArray(e,0):R.setTexture2D(e,0),I.unbindTexture()},this.resetState=function(){oe=0,se=0,N=null,I.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Ue}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Pt._getUnpackColorSpace()}};function gd(e){return`/venue-os/${e.replace(/^\/+/,``)}`}var _d=class{renderer;frameTimes=new Float32Array(180);cursor=0;filled=0;accumulator=0;reportCooldown=0;cached;constructor(e){this.renderer=e,this.cached=this.captureRenderer(60,16.67,60)}update(e){let t=e*1e3;if(this.frameTimes[this.cursor]=t,this.cursor=(this.cursor+1)%this.frameTimes.length,this.filled=Math.min(this.filled+1,this.frameTimes.length),this.accumulator+=t,this.reportCooldown+=e,this.reportCooldown>=.5&&this.filled>0){let e=Array.from(this.frameTimes.subarray(0,this.filled));e.sort((e,t)=>e-t);let t=this.accumulator/Math.max(this.filled,1),n=e[Math.min(e.length-1,Math.floor(e.length*.99))]||t;this.cached=this.captureRenderer(Math.round(1e3/Math.max(t,.01)),Number(t.toFixed(2)),Math.round(1e3/Math.max(n,.01))),this.reportCooldown=0,this.accumulator=0,this.filled=0,this.cursor=0}return this.cached}get snapshot(){return this.cached}captureRenderer(e,t,n){let r=this.renderer.info;return{fps:e,frameMs:t,onePercentLowFps:n,calls:r.render.calls,triangles:r.render.triangles,points:r.render.points,lines:r.render.lines,geometries:r.memory.geometries,textures:r.memory.textures,samples:this.filled}}},vd=class{update;render;frameId=0;lastTime=0;running=!1;constructor(e,t){this.update=e,this.render=t}start(){this.running||(this.running=!0,this.lastTime=performance.now(),this.frameId=requestAnimationFrame(this.tick))}stop(){this.running=!1,cancelAnimationFrame(this.frameId)}tick=e=>{if(!this.running)return;let t=Math.max(0,Math.min((e-this.lastTime)/1e3,.05));this.lastTime=e,this.update(t,e/1e3),this.render(),this.frameId=requestAnimationFrame(this.tick)}},yd={performance:{preset:`performance`,maxDpr:1,shadowMapSize:512,shadowEnabled:!1,particleScale:.35,worldDetail:.55,postProcessing:!1,bloomStrength:0,fogDetail:.4},balanced:{preset:`balanced`,maxDpr:1.25,shadowMapSize:1024,shadowEnabled:!0,particleScale:.65,worldDetail:.78,postProcessing:!0,bloomStrength:.35,fogDetail:.7},high:{preset:`high`,maxDpr:1.6,shadowMapSize:2048,shadowEnabled:!0,particleScale:1,worldDetail:1,postProcessing:!0,bloomStrength:.55,fogDetail:1},cinematic:{preset:`cinematic`,maxDpr:2,shadowMapSize:4096,shadowEnabled:!0,particleScale:1.4,worldDetail:1.25,postProcessing:!0,bloomStrength:.72,fogDetail:1.25}},bd=class extends EventTarget{renderer;current;constructor(e){super(),this.renderer=e;let t=localStorage.getItem(`anc-arena-quality`),n=t&&yd[t]?t:this.detectPreset();this.current={...yd[n]},this.applyRendererSettings()}get profile(){return this.current}setPreset(e){return this.current={...yd[e]},localStorage.setItem(`anc-arena-quality`,e),this.applyRendererSettings(),this.dispatchEvent(new CustomEvent(`change`,{detail:this.current})),this.current}getPresets(){return Object.values(yd).map(e=>({...e}))}detectPreset(){let e=this.renderer.getContext(),t=e.getExtension(`WEBGL_debug_renderer_info`),n=String(t?e.getParameter(t.UNMASKED_RENDERER_WEBGL):e.getParameter(e.RENDERER));if(/swiftshader|llvmpipe|software/i.test(n))return`performance`;let r=navigator.hardwareConcurrency||4,i=navigator.deviceMemory||4;return matchMedia(`(pointer: coarse)`).matches||window.innerWidth<800||r<=4||i<=4?`performance`:r>=12&&i>=8?`high`:`balanced`}applyRendererSettings(){this.renderer.shadowMap.enabled=this.current.shadowEnabled,this.renderer.shadowMap.type=this.current.preset===`cinematic`?2:1,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,this.current.maxDpr))}};function xd(e){let t=new hd({canvas:e,antialias:!0,alpha:!1,powerPreference:`high-performance`,preserveDrawingBuffer:navigator.webdriver});return t.outputColorSpace=Le,t.toneMapping=4,t.toneMappingExposure=1.05,t.shadowMap.enabled=!0,t.shadowMap.type=2,t.shadowMap.autoUpdate=!0,t.sortObjects=!0,t}var Sd={master:.82,sfx:.86,ui:.6,ambience:.52},Cd={emergency:{emergency:.78,arena:0,energy:0},recovering:{emergency:.58,arena:.1,energy:.05},powered:{emergency:.22,arena:.55,energy:.18},finale:{emergency:.08,arena:.92,energy:.56}},wd=class{context=null;buses=null;ambience=null;buffers=new Map;sources=new Set;cleanup=[];volumes;poweredArenaUrl;unlockPromise=null;ambienceStage=`emergency`;ambienceRequested=!1;paused=!1;muted=!1;disposed=!1;shotVariant=0;footstepVariant=0;lastShotTime=-1/0;lastFootstepTime=-1/0;constructor(e={}){this.poweredArenaUrl=e.poweredArenaUrl??gd(`assets/audio/arena-powered-ambience.mp3`),this.volumes={master:Md(e.masterVolume??Sd.master,0,1),sfx:Md(e.sfxVolume??Sd.sfx,0,1),ui:Md(e.uiVolume??Sd.ui,0,1),ambience:Md(e.ambienceVolume??Sd.ambience,0,1)},e.autoUnlock!==!1&&typeof window<`u`&&this.bindGestureUnlock(window),typeof document<`u`&&this.bindVisibilityPause()}bindGestureUnlock(e){let t=!0,n=()=>{t&&this.unlock().then(e=>{e&&r()})},r=()=>{t&&(t=!1,e.removeEventListener(`pointerdown`,n),e.removeEventListener(`keydown`,n),e.removeEventListener(`touchstart`,n))};return e.addEventListener(`pointerdown`,n,{passive:!0}),e.addEventListener(`keydown`,n),e.addEventListener(`touchstart`,n,{passive:!0}),this.cleanup.push(r),r}async unlock(){if(this.disposed)return!1;if(this.context?.state===`running`)return!0;if(this.unlockPromise)return this.unlockPromise;this.unlockPromise=this.initializeAudio();let e=await this.unlockPromise;return this.unlockPromise=null,e}getSnapshot(){return{unlocked:this.context?.state===`running`,paused:this.paused,muted:this.muted,ambienceStage:this.ambienceStage,volumes:{...this.volumes}}}setVolume(e,t){this.volumes[e]=Md(t,0,1);let n=this.buses?.[e];!n||!(n instanceof GainNode)||n.gain.setTargetAtTime(this.muted&&e===`master`?0:this.volumes[e],this.now(),.025)}setMuted(e){this.muted=e;let t=this.buses?.master;t&&t.gain.setTargetAtTime(e?0:this.volumes.master,this.now(),.02)}toggleMuted(){return this.setMuted(!this.muted),this.muted}async setPaused(e){this.paused=e,this.context&&(e&&this.context.state===`running`?await this.context.suspend():!e&&this.context.state===`suspended`&&await this.context.resume())}startArenaAmbience(e=`emergency`){this.ambienceRequested=!0,this.ambienceStage=e,!(!this.context||!this.buses)&&(this.ambience||=this.createAmbienceLayers(),this.applyAmbienceStage(e,.8))}setArenaEnergy(e,t=2.2){this.ambienceStage=e,this.ambienceRequested=!0,!(!this.context||!this.buses)&&(this.ambience||=this.createAmbienceLayers(),this.applyAmbienceStage(e,t),e===`powered`&&this.ledPowerOn(),e===`finale`&&(this.systemOnline(),this.duck(.72,1.1)))}stopArenaAmbience(e=.35){this.ambienceRequested=!1;let t=this.ambience;if(!t||!this.context)return;let n=this.now();for(let r of[t.emergencyGain,t.arenaGain,t.energyGain])r.gain.cancelScheduledValues(n),r.gain.setValueAtTime(r.gain.value,n),r.gain.linearRampToValueAtTime(0,n+Math.max(.02,e));let r=n+Math.max(.02,e)+.05;for(let e of t.sources)this.safeStop(e,r);this.ambience=null}playWeaponShot(e=`rifle`,t=1){if(!this.readyContext()||!this.buses)return;let n=this.now(),r=e===`smg`?.045:e===`rifle`?.065:.1;if(n-this.lastShotTime<r)return;this.lastShotTime=n,this.shotVariant=(this.shotVariant+1)%4;let i=Md(t,.15,1.2),a=kd(e),o=.94+this.shotVariant*.025+Math.random()*.015;this.noiseBurst({when:n,duration:a.crackDuration,gain:a.crackGain*i,highpass:a.highpass*o,lowpass:a.lowpass*o,destination:this.buses.sfx,reverb:.09}),this.tone({when:n,duration:a.bodyDuration,frequency:a.bodyFrequency*o,endFrequency:Math.max(42,a.bodyFrequency*.28),gain:a.bodyGain*i,type:`triangle`,destination:this.buses.sfx}),this.noiseBurst({when:n+.012,duration:a.tailDuration,gain:a.tailGain*i,highpass:360,lowpass:2600,destination:this.buses.sfx,attack:.005,reverb:.44}),this.mechanicalClick(n+a.mechanicalDelay,a.mechanicalGain*i,0),this.duck(.82,.15)}playEnemyShot(e=0,t=1,n=`rifle`){let r=this.readyContext();if(!r||!this.buses)return;let i=this.now(),a=r.createStereoPanner(),o=r.createGain();a.pan.value=Md(e,-1,1),o.gain.value=.7/Math.max(1,t*.55),a.connect(o).connect(this.buses.sfx);let s=kd(n);this.noiseBurst({when:i,duration:s.crackDuration*1.4,gain:s.crackGain,highpass:500,lowpass:Math.max(1200,s.lowpass/Math.max(1,t*.3)),destination:a,reverb:Md(.3+t*.07,.3,.8)}),this.tone({when:i,duration:.2,frequency:s.bodyFrequency*.75,endFrequency:48,gain:s.bodyGain*.7,type:`sine`,destination:a})}reload(e=!1){if(!this.readyContext())return;let t=this.now();this.mechanicalClick(t,.19,-.14),this.noiseBurst({when:t+.17,duration:.085,gain:.12,highpass:700,lowpass:3200,destination:this.buses?.sfx,attack:.005}),this.mechanicalClick(t+.36,.24,.11),e&&this.mechanicalClick(t+.58,.3,.03)}impact(e=`concrete`,t=1,n=0){let r=this.readyContext();if(!r||!this.buses)return;let i=this.now(),a=r.createStereoPanner();a.pan.value=Md(n,-1,1),a.connect(this.buses.sfx);let o=Md(t,.1,1.25),s=Ad(e);this.noiseBurst({when:i,duration:s.duration,gain:s.gain*o,highpass:s.highpass,lowpass:s.lowpass,destination:a,reverb:s.reverb}),s.frequency>0&&this.tone({when:i,duration:s.duration*1.3,frequency:s.frequency,endFrequency:s.frequency*.45,gain:s.gain*.48*o,type:e===`metal`?`triangle`:`sine`,destination:a})}explosion(e=1,t=0){let n=this.readyContext();if(!n||!this.buses)return;let r=this.now(),i=n.createStereoPanner();i.pan.value=Md(t,-1,1),i.connect(this.buses.sfx);let a=Md(e,.2,1.35);this.noiseBurst({when:r,duration:.16,gain:.82*a,highpass:35,lowpass:1300,destination:i,attack:.002,reverb:.42}),this.noiseBurst({when:r+.035,duration:1.2,gain:.38*a,highpass:55,lowpass:780,destination:i,attack:.015,reverb:.78}),this.tone({when:r,duration:.72,frequency:96,endFrequency:31,gain:.7*a,type:`sine`,destination:i}),this.duck(.38,.9)}hitConfirm(e=`body`){if(!this.readyContext()||!this.buses)return;let t=this.now(),n=e===`armor`?1260:e===`kill`?720:980;this.tone({when:t,duration:.055,frequency:n,endFrequency:n*.82,gain:.12,type:`square`,destination:this.buses.ui}),e===`kill`&&this.tone({when:t+.055,duration:.11,frequency:980,endFrequency:1460,gain:.09,type:`sine`,destination:this.buses.ui})}uiHover(){!this.readyContext()||!this.buses||this.tone({when:this.now(),duration:.028,frequency:950,endFrequency:1180,gain:.025,type:`sine`,destination:this.buses.ui})}uiConfirm(){if(!this.readyContext()||!this.buses)return;let e=this.now();this.tone({when:e,duration:.055,frequency:520,endFrequency:720,gain:.055,type:`triangle`,destination:this.buses.ui}),this.mechanicalClick(e,.045,0,this.buses.ui)}uiError(){if(!this.readyContext()||!this.buses)return;let e=this.now();this.tone({when:e,duration:.12,frequency:230,endFrequency:145,gain:.075,type:`sawtooth`,destination:this.buses.ui}),this.tone({when:e+.13,duration:.09,frequency:180,endFrequency:115,gain:.05,type:`square`,destination:this.buses.ui})}footstep(e=`concrete`,t=1,n=0){let r=this.readyContext();if(!r||!this.buses)return;let i=this.now();if(i-this.lastFootstepTime<.12)return;this.lastFootstepTime=i,this.footstepVariant=(this.footstepVariant+1)%4;let a=.9+this.footstepVariant*.055,o=r.createStereoPanner();o.pan.value=Md(n,-1,1),o.connect(this.buses.sfx);let s=jd(e);this.noiseBurst({when:i,duration:s.duration,gain:s.gain*Md(t,.2,1.2),highpass:s.highpass*a,lowpass:s.lowpass*a,destination:o,attack:.008,reverb:.15}),this.tone({when:i,duration:.09,frequency:s.body*a,endFrequency:44,gain:.055*t,type:`sine`,destination:o})}diagnosticScan(e=1){if(!this.readyContext()||!this.buses)return;let t=this.now(),n=Md(e,.2,1);for(let e=0;e<5;e+=1)this.tone({when:t+e*.075,duration:.045,frequency:580+e*170,endFrequency:640+e*190,gain:.035*n,type:`sine`,destination:this.buses.ui});this.noiseBurst({when:t,duration:.42,gain:.025,highpass:3500,lowpass:8500,destination:this.buses.ui,attack:.04})}repairPulse(e=.5){if(!this.readyContext()||!this.buses)return;let t=this.now(),n=240+Md(e,0,1)*340;this.mechanicalClick(t,.08,-.05),this.tone({when:t+.025,duration:.14,frequency:n,endFrequency:n*1.35,gain:.055,type:`triangle`,destination:this.buses.ui})}ledPowerOn(){if(!this.readyContext()||!this.buses)return;let e=this.now();this.tone({when:e,duration:1.15,frequency:42,endFrequency:88,gain:.22,type:`sine`,destination:this.buses.sfx});for(let t=0;t<7;t+=1){let n=310+t*92;this.tone({when:e+.12+t*.055,duration:.24,frequency:n,endFrequency:n*1.22,gain:.025+t*.004,type:`triangle`,destination:this.buses.ui})}this.noiseBurst({when:e+.08,duration:.7,gain:.055,highpass:1200,lowpass:5400,destination:this.buses.sfx,attack:.12,reverb:.45})}systemOnline(){if(!this.readyContext()||!this.buses)return;let e=this.buses.ui,t=this.now();[220,330,440,554,660].forEach((n,r)=>{this.tone({when:t+r*.095,duration:.72,frequency:n,endFrequency:n*1.01,gain:.055,type:`sine`,destination:e})})}duck(e=.5,t=.5){let n=this.buses?.ambienceDuck;if(!n)return;let r=this.now(),i=Md(e,.1,1);n.gain.cancelScheduledValues(r),n.gain.setValueAtTime(n.gain.value,r),n.gain.exponentialRampToValueAtTime(i,r+.018),n.gain.exponentialRampToValueAtTime(1,r+Math.max(.06,t))}restart(){let e=this.ambienceRequested;this.stopAllSources(),this.ambience=null,this.lastShotTime=-1/0,this.lastFootstepTime=-1/0,e&&this.context?.state===`running`&&this.startArenaAmbience(this.ambienceStage)}dispose(){if(!this.disposed){this.disposed=!0,this.stopAllSources();for(let e of this.cleanup)e();this.cleanup.length=0,this.buffers.clear(),this.context?.close(),this.context=null,this.buses=null,this.ambience=null}}async initializeAudio(){let e=Td();return e?(this.context||(this.context=new e({latencyHint:`interactive`}),this.buses=this.createBuses(this.context),this.buildNoiseBuffers(this.context),this.loadBuffer(`powered-arena`,this.poweredArenaUrl).then(()=>{this.ambience&&!this.ambience.arenaSource&&this.attachPoweredArenaSource(this.ambience)})),this.context.state!==`running`&&await this.context.resume(),this.ambienceRequested&&!this.ambience&&this.startArenaAmbience(this.ambienceStage),this.context.state===`running`):!1}createBuses(e){let t=e.createGain(),n=e.createGain(),r=e.createGain(),i=e.createGain(),a=e.createGain(),o=e.createDynamicsCompressor(),s=e.createConvolver(),c=e.createGain();return t.gain.value=this.muted?0:this.volumes.master,n.gain.value=this.volumes.sfx,r.gain.value=this.volumes.ui,i.gain.value=this.volumes.ambience,a.gain.value=1,o.threshold.value=-16,o.knee.value=14,o.ratio.value=5,o.attack.value=.003,o.release.value=.18,s.buffer=Od(e,1.8,2.7),c.gain.value=.24,n.connect(t),r.connect(t),i.connect(a).connect(t),s.connect(c).connect(t),t.connect(o).connect(e.destination),{master:t,sfx:n,ui:r,ambience:i,ambienceDuck:a,compressor:o,reverb:s,reverbReturn:c}}buildNoiseBuffers(e){for(let t=0;t<4;t+=1)this.buffers.set(`noise-${t}`,Ed(e,2.2,t*7919+23));this.buffers.set(`rain`,Dd(e,5.6))}async loadBuffer(e,t){let n=this.context;if(!n||this.buffers.has(e))return this.buffers.has(e);try{let r=await fetch(t);if(!r.ok)return!1;let i=await n.decodeAudioData(await r.arrayBuffer());return this.disposed?!1:(this.buffers.set(e,i),!0)}catch{return!1}}createAmbienceLayers(){let e=this.context,t=this.buses;if(!e||!t)throw Error(`Audio must be unlocked before creating ambience.`);let n=e.createGain(),r=e.createGain(),i=e.createGain();n.gain.value=0,r.gain.value=0,i.gain.value=0,n.connect(t.ambience),r.connect(t.ambience),i.connect(t.ambience);let a={sources:[],emergencyGain:n,arenaGain:r,energyGain:i,arenaSource:null},o=e.createBufferSource(),s=e.createBiquadFilter(),c=e.createGain();o.buffer=this.buffers.get(`rain`)??null,o.loop=!0,o.playbackRate.value=.88,s.type=`bandpass`,s.frequency.value=2900,s.Q.value=.34,c.gain.value=.15,o.connect(s).connect(c).connect(n),this.startTracked(o),a.sources.push(o);let l=e.createOscillator(),u=e.createBiquadFilter(),d=e.createGain();l.type=`sawtooth`,l.frequency.value=44,l.detune.value=-7,u.type=`lowpass`,u.frequency.value=190,u.Q.value=.8,d.gain.value=.07,l.connect(u).connect(d).connect(n),this.startTracked(l),a.sources.push(l);let f=e.createOscillator(),p=e.createGain(),m=e.createOscillator(),h=e.createGain();f.type=`sine`,f.frequency.value=118,p.gain.value=.005,m.type=`sine`,m.frequency.value=.28,h.gain.value=.005,m.connect(h).connect(p.gain),f.connect(p).connect(n),this.startTracked(f),this.startTracked(m),a.sources.push(f,m);let g=e.createOscillator(),_=e.createOscillator(),v=e.createBiquadFilter(),y=e.createOscillator(),b=e.createGain();return g.type=`sine`,g.frequency.value=55,_.type=`triangle`,_.frequency.value=82.5,v.type=`lowpass`,v.frequency.value=680,y.frequency.value=.11,b.gain.value=180,y.connect(b).connect(v.frequency),g.connect(v),_.connect(v),v.connect(i),this.startTracked(g),this.startTracked(_),this.startTracked(y),a.sources.push(g,_,y),this.attachPoweredArenaSource(a),a}attachPoweredArenaSource(e){let t=this.context,n=this.buffers.get(`powered-arena`);if(!t||!n||e.arenaSource)return;let r=t.createBufferSource(),i=t.createBiquadFilter();r.buffer=n,r.loop=!0,i.type=`highpass`,i.frequency.value=72,r.connect(i).connect(e.arenaGain),this.startTracked(r),e.sources.push(r),e.arenaSource=r}applyAmbienceStage(e,t){let n=this.ambience;if(!n)return;let r=Cd[e],i=this.now(),a=Math.max(.05,t);this.rampGain(n.emergencyGain.gain,r.emergency,i,a),this.rampGain(n.arenaGain.gain,r.arena,i,a),this.rampGain(n.energyGain.gain,r.energy,i,a)}rampGain(e,t,n,r){e.cancelScheduledValues(n),e.setValueAtTime(e.value,n),e.linearRampToValueAtTime(t,n+r)}tone(e){let t=this.context;if(!t||!e.destination)return;let n=t.createOscillator(),r=t.createGain(),i=e.when,a=i+e.duration;n.type=e.type,n.frequency.setValueAtTime(Math.max(20,e.frequency),i),n.frequency.exponentialRampToValueAtTime(Math.max(20,e.endFrequency),a),r.gain.setValueAtTime(1e-4,i),r.gain.exponentialRampToValueAtTime(Math.max(2e-4,e.gain),i+Math.min(.012,e.duration*.2)),r.gain.exponentialRampToValueAtTime(1e-4,a),n.connect(r).connect(e.destination),this.startTracked(n,i,a+.02)}noiseBurst(e){let t=this.context;if(!t||!e.destination)return;let n=t.createBufferSource(),r=t.createBiquadFilter(),i=t.createBiquadFilter(),a=t.createGain(),o=e.when,s=o+e.duration;if(n.buffer=this.buffers.get(`noise-${Math.floor(Math.random()*4)}`)??null,n.playbackRate.value=.9+Math.random()*.2,r.type=`highpass`,r.frequency.value=e.highpass,i.type=`lowpass`,i.frequency.value=e.lowpass,a.gain.setValueAtTime(1e-4,o),a.gain.exponentialRampToValueAtTime(Math.max(2e-4,e.gain),o+(e.attack??.002)),a.gain.exponentialRampToValueAtTime(1e-4,s),n.connect(r).connect(i).connect(a).connect(e.destination),e.reverb&&this.buses){let n=t.createGain();n.gain.value=e.reverb,a.connect(n).connect(this.buses.reverb)}this.startTracked(n,o,s+.02)}mechanicalClick(e,t,n,r){let i=this.context,a=r??this.buses?.sfx;if(!i||!a)return;let o=i.createStereoPanner();o.pan.value=Md(n,-1,1),o.connect(a),this.noiseBurst({when:e,duration:.032,gain:t,highpass:2100,lowpass:9200,destination:o,attack:.001,reverb:.08}),this.tone({when:e,duration:.027,frequency:1320,endFrequency:860,gain:t*.42,type:`square`,destination:o})}startTracked(e,t=this.now(),n){this.sources.add(e),e.addEventListener(`ended`,()=>this.sources.delete(e),{once:!0}),e.start(t),n!==void 0&&e.stop(n)}safeStop(e,t=0){try{e.stop(t)}catch{}t<=this.now()&&this.sources.delete(e)}stopAllSources(){for(let e of[...this.sources])this.safeStop(e);this.sources.clear()}readyContext(){return!this.context||this.context.state!==`running`||this.paused||this.disposed?null:this.context}now(){return this.context?.currentTime??0}bindVisibilityPause(){let e=()=>{document.hidden&&this.context?.state===`running`&&this.context.suspend().catch(()=>void 0),!document.hidden&&!this.paused&&this.context?.state===`suspended`&&this.context.resume().catch(()=>void 0)};document.addEventListener(`visibilitychange`,e),this.cleanup.push(()=>document.removeEventListener(`visibilitychange`,e))}};function Td(){return typeof window>`u`?null:window.AudioContext??window.webkitAudioContext??null}function Ed(e,t,n){let r=Math.ceil(e.sampleRate*t),i=e.createBuffer(1,r,e.sampleRate),a=i.getChannelData(0),o=n>>>0;for(let e=0;e<r;e+=1)o=o*1664525+1013904223>>>0,a[e]=o/4294967295*2-1;return i}function Dd(e,t){let n=Math.ceil(e.sampleRate*t),r=e.createBuffer(2,n,e.sampleRate);for(let e=0;e<2;e+=1){let t=r.getChannelData(e),i=0;for(let e=0;e<n;e+=1){let n=Math.random()*2-1;i=i*.84+n*.16;let r=Math.random()>.9991?(Math.random()*2-1)*.8:0;t[e]=Md(i*.6+n*.12+r,-1,1)}}return r}function Od(e,t,n){let r=Math.ceil(e.sampleRate*t),i=e.createBuffer(2,r,e.sampleRate);for(let e=0;e<2;e+=1){let t=i.getChannelData(e);for(let e=0;e<r;e+=1){let i=(1-e/r)**n;t[e]=(Math.random()*2-1)*i}}return i}function kd(e){return e===`smg`?{crackDuration:.065,crackGain:.35,highpass:640,lowpass:9800,bodyDuration:.11,bodyFrequency:138,bodyGain:.22,tailDuration:.18,tailGain:.09,mechanicalDelay:.042,mechanicalGain:.11}:e===`pistol`?{crackDuration:.08,crackGain:.44,highpass:520,lowpass:10500,bodyDuration:.16,bodyFrequency:116,bodyGain:.3,tailDuration:.28,tailGain:.12,mechanicalDelay:.075,mechanicalGain:.15}:e===`shotgun`?{crackDuration:.15,crackGain:.75,highpass:170,lowpass:7600,bodyDuration:.33,bodyFrequency:76,bodyGain:.68,tailDuration:.65,tailGain:.3,mechanicalDelay:.23,mechanicalGain:.26}:{crackDuration:.085,crackGain:.5,highpass:420,lowpass:9600,bodyDuration:.19,bodyFrequency:104,bodyGain:.41,tailDuration:.4,tailGain:.17,mechanicalDelay:.082,mechanicalGain:.15}}function Ad(e){return e===`metal`?{duration:.18,gain:.28,highpass:700,lowpass:9400,frequency:1280,reverb:.54}:e===`glass`?{duration:.26,gain:.24,highpass:1900,lowpass:12e3,frequency:2400,reverb:.48}:e===`armor`?{duration:.13,gain:.34,highpass:420,lowpass:6600,frequency:420,reverb:.26}:e===`flesh`?{duration:.09,gain:.2,highpass:80,lowpass:1200,frequency:72,reverb:.08}:{duration:.2,gain:.28,highpass:110,lowpass:3400,frequency:98,reverb:.38}}function jd(e){return e===`metal`?{duration:.11,gain:.16,highpass:480,lowpass:6800,body:170}:e===`gravel`?{duration:.18,gain:.13,highpass:850,lowpass:5200,body:76}:{duration:.12,gain:.14,highpass:140,lowpass:2400,body:92}}function Md(e,t,n){return Math.min(n,Math.max(t,Number.isFinite(e)?e:t))}function Nd(e){let t=e>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967295)}function Pd(e){let t=document.createElement(`canvas`);t.width=e,t.height=e;let n=t.getContext(`2d`);if(!n)throw Error(`Canvas 2D is required for procedural visual textures.`);return[t,n]}function Fd(n,r=!0){let i=new na(n);return i.colorSpace=Le,i.wrapS=r?e:t,i.wrapT=r?e:t,i.minFilter=c,i.magFilter=o,i.generateMipmaps=!0,i.needsUpdate=!0,i}function Id(e,t,n,r,i){let a=Nd(n),o=e.getImageData(0,0,t,t);for(let e=0;e<o.data.length;e+=4){let t=Math.floor((a()-.5)*r);o.data[e]=Math.max(0,Math.min(255,o.data[e]+t)),o.data[e+1]=Math.max(0,Math.min(255,o.data[e+1]+t)),o.data[e+2]=Math.max(0,Math.min(255,o.data[e+2]+t)),o.data[e+3]=Math.max(o.data[e+3],Math.floor(i*255))}e.putImageData(o,0,0)}function Ld(e=512){let[t,n]=Pd(e);n.fillStyle=`#777a75`,n.fillRect(0,0,e,e),Id(n,e,12648430,42,1);let r=Nd(9073519);for(let t=0;t<e*.7;t+=1){let t=.4+r()*2.1;n.fillStyle=r()>.45?`rgba(25,28,27,.14)`:`rgba(235,238,225,.09)`,n.beginPath(),n.arc(r()*e,r()*e,t,0,Math.PI*2),n.fill()}n.lineCap=`round`;for(let t=0;t<7;t+=1){let t=r()*e,i=r()*e;n.strokeStyle=`rgba(23,26,25,.22)`,n.lineWidth=.7+r(),n.beginPath(),n.moveTo(t,i);for(let e=0;e<5;e+=1)t+=(r()-.5)*42,i+=(r()-.5)*42,n.lineTo(t,i);n.stroke()}return Fd(t)}function Rd(e=512){let[t,n]=Pd(e);n.fillStyle=`#303535`,n.fillRect(0,0,e,e),Id(n,e,1906701335,48,1);let r=Nd(10044586);for(let t=0;t<e*2.1;t+=1){let t=Math.floor(65+r()*80);n.fillStyle=`rgba(${t},${t+2},${t},${.08+r()*.15})`,n.fillRect(r()*e,r()*e,.7+r()*2.2,.7+r()*2.2)}return n.strokeStyle=`rgba(4,8,9,.32)`,n.lineWidth=1.2,n.beginPath(),n.moveTo(0,e*.66),n.bezierCurveTo(e*.24,e*.57,e*.6,e*.82,e,e*.7),n.stroke(),Fd(t)}function zd(e=512){let[t,n]=Pd(e),r=n.createLinearGradient(0,0,e,0);r.addColorStop(0,`#495157`),r.addColorStop(.28,`#697278`),r.addColorStop(.52,`#3f474d`),r.addColorStop(.72,`#747b7e`),r.addColorStop(1,`#42494d`),n.fillStyle=r,n.fillRect(0,0,e,e);let i=Nd(360161);for(let t=0;t<e;t+=2)n.strokeStyle=`rgba(235,245,247,${.018+i()*.045})`,n.beginPath(),n.moveTo(0,t+i()),n.lineTo(e,t+i()),n.stroke();for(let t=0;t<48;t+=1){let t=i()*e,r=i()*e;n.strokeStyle=i()>.5?`rgba(245,248,245,.12)`:`rgba(15,18,20,.15)`,n.lineWidth=.5,n.beginPath(),n.moveTo(r,t),n.lineTo(Math.min(e,r+14+i()*100),t+(i()-.5)*3),n.stroke()}return Fd(t)}function Bd(e=512){let[t,n]=Pd(e);n.fillStyle=`#667168`,n.fillRect(0,0,e,e),Id(n,e,9474192,24,1);let r=Nd(3377390);for(let t=0;t<170;t+=1){let t=1+r()*8;n.strokeStyle=r()>.22?`rgba(25,28,27,.27)`:`rgba(198,202,194,.16)`,n.lineWidth=.5+r()*1.4,n.beginPath(),n.moveTo(r()*e,r()*e),n.lineTo(r()*e,r()*e+t),n.stroke()}return Fd(t)}function Vd(e=256){let[t,n]=Pd(e);n.fillStyle=`#d6a72d`,n.fillRect(0,0,e,e),n.save(),n.rotate(-Math.PI/4),n.fillStyle=`#171b1c`;for(let t=-e*1.5;t<e*1.8;t+=58)n.fillRect(t,-e,28,e*3);return n.restore(),Id(n,e,14332177,20,1),Fd(t)}function Hd(e=`rgba(255,245,205,1)`,t=`rgba(255,130,28,0)`,n=128){let[r,i]=Pd(n),a=i.createRadialGradient(n/2,n/2,0,n/2,n/2,n/2);return a.addColorStop(0,e),a.addColorStop(.18,e),a.addColorStop(1,t),i.fillStyle=a,i.fillRect(0,0,n,n),Fd(r,!1)}function Ud(e=256){let[t,n]=Pd(e),r=Nd(790741);n.clearRect(0,0,e,e);for(let t=0;t<34;t+=1){let t=e*(.15+r()*.7),i=e*(.25+r()*.5),a=e*(.08+r()*.2),o=n.createRadialGradient(t,i,0,t,i,a);o.addColorStop(0,`rgba(211,220,220,.17)`),o.addColorStop(.55,`rgba(175,188,190,.08)`),o.addColorStop(1,`rgba(145,158,162,0)`),n.fillStyle=o,n.fillRect(t-a,i-a,a*2,a*2)}return Fd(t,!1)}function Wd(t,n,r){return t.wrapS=e,t.wrapT=e,t.repeat.set(n,r),t}function Gd(e){return Math.sin(e*91.173+17.131)*.5+.5}var Kd=class{root=new K;diagnostics;rainPositions;rainVelocity;rain;mistTexture=Ud();moteTexture=Hd(`rgba(95,181,255,.8)`,`rgba(10,82,239,0)`,64);mist=[];motes;rainIntensity=.35;showProgress=0;constructor(e={}){this.root.name=`anc.atmosphere`;let t=e.rainDrops??460,n=e.mistCards??14,r=e.dustMotes??120,i=new Dr;this.rainPositions=new Float32Array(t*2*3),this.rainVelocity=new Float32Array(t);for(let e=0;e<t;e+=1)this.resetDrop(e,!0);i.setAttribute(`position`,new fr(this.rainPositions,3));let a=new Fi({color:`#8eb8cb`,transparent:!0,opacity:.23,depthWrite:!1,blending:1,toneMapped:!1});this.rain=new qi(i,a),this.rain.name=`atmosphere.batched-rain`,this.rain.frustumCulled=!1,this.root.add(this.rain);for(let e=0;e<n;e+=1){let t=new qr(new Nr({map:this.mistTexture,color:e%3==0?`#6d8295`:`#82939a`,transparent:!0,opacity:.07+e%4*.012,depthWrite:!1,fog:!0}));t.name=`atmosphere.field-mist-card`,t.position.set(-25+Gd(e)*50,1.2+Gd(e+9)*5.5,-55+Gd(e+19)*64);let n=11+Gd(e+31)*17;t.scale.set(n,n*.42,1),t.userData.drift=.08+Gd(e+44)*.14,this.mist.push(t),this.root.add(t)}let o=new Dr,s=new Float32Array(r*3),c=new Float32Array(r*3);for(let e=0;e<r;e+=1){s[e*3]=-8+Gd(e+52)*16,s[e*3+1]=.2+Gd(e+91)*5.8,s[e*3+2]=11+Gd(e+122)*44;let t=new q(e%7==0?`#00aeef`:`#8997a3`);c[e*3]=t.r,c[e*3+1]=t.g,c[e*3+2]=t.b}o.setAttribute(`position`,new fr(s,3)),o.setAttribute(`color`,new fr(c,3));let l=new Ji({map:this.moteTexture,color:`#ffffff`,vertexColors:!0,transparent:!0,opacity:.34,size:.07,sizeAttenuation:!0,depthWrite:!1,blending:2,toneMapped:!1});this.motes=new $i(o,l),this.motes.name=`atmosphere.tunnel-motes`,this.root.add(this.motes),this.diagnostics={rainSegments:t,mistCards:n,motes:r}}setRainIntensity(e){this.rainIntensity=H.clamp(e,0,1)}setShowProgress(e){this.showProgress=H.clamp(e,0,1)}update(e,t,n){let r=this.rainPositions,i=this.rainVelocity.length;for(let t=0;t<i;t+=1){let i=t*6;r[i+1]-=this.rainVelocity[t]*e,r[i+4]-=this.rainVelocity[t]*e,r[i]+=e*.65,r[i+3]+=e*.65,r[i+1]<.05&&this.resetDrop(t,!1,n)}this.rain.geometry.getAttribute(`position`).needsUpdate=!0,this.rain.material.opacity=this.rainIntensity*.34,this.rain.visible=this.rainIntensity>.01;for(let n=0;n<this.mist.length;n+=1){let r=this.mist[n];r.position.x+=Number(r.userData.drift)*e,r.position.y+=Math.sin(t*.19+n)*e*.035,r.position.x>31&&(r.position.x=-31);let i=r.material;i.opacity=(.045+n%4*.012)*(1-this.showProgress*.3)}let a=this.motes.geometry.getAttribute(`position`);for(let n=0;n<a.count;n+=1){let r=a.getY(n)+e*(.025+n%5*.009);a.setY(n,r>6?.1:r),a.setX(n,a.getX(n)+Math.sin(t*.35+n)*e*.012)}a.needsUpdate=!0,this.motes.material.opacity=.24+(1-this.showProgress)*.16}dispose(){this.rain.geometry.dispose(),this.rain.material.dispose(),this.motes.geometry.dispose(),this.motes.material.dispose(),this.mistTexture.dispose(),this.moteTexture.dispose();for(let e of this.mist)e.material.dispose()}resetDrop(e,t,n=new W(0,0,-22)){let r=e*6,i=n.x-31+Gd(e+(t?3:performance.now()*.001))*62,a=t?Gd(e+14)*24:18+Gd(e+performance.now()*.002)*7,o=n.z-38+Gd(e+27)*76,s=.18+Gd(e+39)*.5;this.rainPositions[r]=i,this.rainPositions[r+1]=a,this.rainPositions[r+2]=o,this.rainPositions[r+3]=i-.04,this.rainPositions[r+4]=a+s,this.rainPositions[r+5]=o+.02,this.rainVelocity[e]=13+Gd(e+58)*11}};function qd(e={}){return new Kd(e)}function Jd(e,t,n=!1){let r=0,i=0,a=0,o=0,s=0,c=new Set,l=new Set;return t.traverse(e=>{if(r+=1,e instanceof ps&&(o+=1),e instanceof Ei&&(a+=1),!(e instanceof J||e instanceof $i||e instanceof Ui))return;i+=1,`castShadow`in e&&e.castShadow&&(s+=1);let t=e.geometry;c.add(t.uuid);let n=Array.isArray(e.material)?e.material:[e.material];for(let e of n)l.add(e.uuid)}),{renderer:{calls:e.info.render.calls,triangles:e.info.render.triangles,points:e.info.render.points,lines:e.info.render.lines,geometries:e.info.memory.geometries,textures:e.info.memory.textures},scene:{objects:r,meshes:i,instancedMeshes:a,lights:o,uniqueMaterials:l.size,uniqueGeometries:c.size,shadowCasters:s},quality:{pixelRatio:e.getPixelRatio(),shadowMapEnabled:e.shadowMap.enabled,postProcessing:n}}}function Yd(e,t=1.75){e.outputColorSpace=Le,e.toneMapping=4,e.toneMappingExposure=1.1,e.shadowMap.enabled=!0,e.shadowMap.type=2,e.setPixelRatio(Math.min(window.devicePixelRatio||1,t))}var Xd=class{scene;root=new K;sky;hemisphere;key;fill;tunnelFill;skyUniforms={time:{value:0},showProgress:{value:0}};showProgress;constructor(e,t={}){this.scene=e,this.root.name=`anc.lighting-rig`,this.showProgress=H.clamp(t.showProgress??0,0,1),e.background=new q(`#07101d`),e.fog=new Mn(`#111924`,.0085),this.hemisphere=new ms(`#b6c4d2`,`#1d2226`,.78),this.hemisphere.name=`lighting.hemisphere`,this.root.add(this.hemisphere),this.key=new Ns(`#edf2f5`,2.3),this.key.name=`lighting.moon-key`,this.key.position.set(-28,38,24),this.key.castShadow=!0,this.key.shadow.mapSize.set(t.shadowMapSize??2048,t.shadowMapSize??2048),this.key.shadow.camera.near=4,this.key.shadow.camera.far=100,this.key.shadow.camera.left=-48,this.key.shadow.camera.right=48,this.key.shadow.camera.top=55,this.key.shadow.camera.bottom=-45,this.key.shadow.bias=-18e-5,this.key.shadow.normalBias=.025,this.root.add(this.key),this.fill=new Ns(`#8ca8bf`,.58),this.fill.name=`lighting.anc-rim-fill`,this.fill.position.set(25,14,-45),this.root.add(this.fill),this.tunnelFill=new As(`#d99c72`,130,44,1.55),this.tunnelFill.name=`lighting.tunnel-fill`,this.tunnelFill.position.set(0,4.8,34),this.root.add(this.tunnelFill);let n=new Vo({name:`mat.sky.venue-night`,side:1,depthWrite:!1,fog:!1,uniforms:this.skyUniforms,vertexShader:`
        varying vec3 vWorld;
        void main() {
          vec4 world = modelMatrix * vec4(position, 1.0);
          vWorld = normalize(world.xyz);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        precision highp float;
        varying vec3 vWorld;
        uniform float time;
        uniform float showProgress;
        float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        float noise(vec2 p) {
          vec2 i = floor(p); vec2 f = fract(p); f = f*f*(3.0-2.0*f);
          return mix(mix(hash(i), hash(i+vec2(1.,0.)), f.x), mix(hash(i+vec2(0.,1.)), hash(i+vec2(1.,1.)), f.x), f.y);
        }
        void main() {
          float horizon = smoothstep(-.12, .52, vWorld.y);
          vec3 low = mix(vec3(.016,.028,.055), vec3(.02,.055,.13), showProgress);
          vec3 high = mix(vec3(.008,.016,.035), vec3(.008,.025,.075), showProgress);
          float cloud = noise(vWorld.xz * 4.2 + vec2(time * .004, 0.0)) * .16;
          vec3 color = mix(low, high, horizon) + cloud * vec3(.08,.1,.14) * (1.0-horizon*.5);
          float glow = pow(max(0.0, 1.0 - abs(vWorld.y - .02) * 5.0), 3.0);
          color += glow * mix(vec3(.14,.09,.06), vec3(.02,.12,.28), showProgress) * .36;
          gl_FragColor = vec4(color, 1.0);
        }
      `});this.sky=new J(new Ao(180,40,20),n),this.sky.name=`venue.authored-sky-dome`,this.sky.frustumCulled=!1,this.root.add(this.sky),e.add(this.root),this.applyProgress()}setShowProgress(e){this.showProgress=H.clamp(e,0,1),this.applyProgress()}update(e,t){this.skyUniforms.time.value=e,this.skyUniforms.showProgress.value=this.showProgress,t&&this.sky.position.copy(t),this.fill.intensity=H.lerp(.35,1.08,this.showProgress)*(.94+Math.sin(e*.18)*.06)}dispose(){this.scene.remove(this.root),this.sky.geometry.dispose(),this.sky.material.dispose(),this.key.dispose(),this.fill.dispose(),this.tunnelFill.dispose(),this.hemisphere.dispose()}applyProgress(){let e=H.smoothstep(this.showProgress,.45,1);this.hemisphere.intensity=H.lerp(.72,1.02,e),this.key.intensity=H.lerp(1.6,2.55,e),this.fill.color.set(`#8ca8bf`).lerp(new q(`#9fbce7`),e),this.tunnelFill.intensity=H.lerp(130,72,this.showProgress),this.tunnelFill.color.set(`#d99c72`).lerp(new q(`#b8daf0`),this.showProgress);let t=this.scene.fog;t instanceof Mn&&(t.color.set(`#111924`).lerp(new q(`#101b2d`),e),t.density=H.lerp(.0085,.0068,e))}};function Zd(e,t={}){return new Xd(e,t)}var Qd=class{textures={concrete:Ld(),asphalt:Rd(),brushedSteel:zd(),paintedMetal:Bd(),hazard:Vd()};concrete=new X({name:`mat.concrete.weathered`,color:`#a4a6a0`,map:Wd(this.textures.concrete,2,2),roughness:.9,metalness:0});concreteDark=new X({name:`mat.concrete.damp`,color:`#5e6562`,map:this.textures.concrete,roughness:.96,metalness:0});asphalt=new X({name:`mat.asphalt.wet`,color:`#454b4b`,map:Wd(this.textures.asphalt,8,12),roughness:.74,metalness:.04});steel=new X({name:`mat.steel.brushed`,color:`#8b969b`,map:Wd(this.textures.brushedSteel,2,4),roughness:.32,metalness:.86});paintedSteel=new X({name:`mat.steel.naval-painted`,color:`#7c8581`,map:Wd(this.textures.paintedMetal,2,2),roughness:.62,metalness:.42});gunmetal=new X({name:`mat.gunmetal`,color:`#7f898d`,map:this.textures.brushedSteel,roughness:.24,metalness:.91});polymer=new X({name:`mat.weapon.polymer`,color:`#2a3234`,roughness:.78,metalness:.02});weaponTan=new X({name:`mat.weapon.fde`,color:`#8a8169`,roughness:.58,metalness:.18});rubber=new X({name:`mat.rubber`,color:`#101414`,roughness:.94,metalness:0});hazard=new X({name:`mat.hazard-stripe`,color:`#ffffff`,map:Wd(this.textures.hazard,2,1),roughness:.59,metalness:.25});warningPaint=new X({name:`mat.warning-paint`,color:`#d9a534`,roughness:.55,metalness:.18});safetyRed=new X({name:`mat.safety-red`,color:`#923b31`,roughness:.57,metalness:.22});lens=new Uo({name:`mat.optic-lens`,color:`#1d4650`,roughness:.06,metalness:.08,transmission:.2,thickness:.04,clearcoat:1,clearcoatRoughness:.04,transparent:!0,opacity:.76});water=new Uo({name:`mat.ocean.steel-blue`,color:`#284d5a`,roughness:.19,metalness:.08,clearcoat:.72,clearcoatRoughness:.24,transparent:!0,opacity:.92});glass=new Uo({name:`mat.architecture.glass`,color:`#40636b`,roughness:.12,metalness:.16,transmission:.22,transparent:!0,opacity:.7,clearcoat:.7});emissiveAmber=new X({name:`mat.signal.amber`,color:`#2b1b08`,emissive:`#ff9d2e`,emissiveIntensity:5.4,roughness:.34,metalness:.22});emissiveCyan=new X({name:`mat.signal.cyan`,color:`#0b2225`,emissive:`#52cdd0`,emissiveIntensity:3.2,roughness:.3,metalness:.12});ancBlue=new X({name:`mat.anc.primary-blue`,color:`#0a52ef`,emissive:`#0a52ef`,emissiveIntensity:.26,roughness:.33,metalness:.28});ancCyan=new X({name:`mat.anc.cyan`,color:`#00aeef`,emissive:`#00aeef`,emissiveIntensity:.82,roughness:.27,metalness:.2});ancBright=new X({name:`mat.anc.bright-blue`,color:`#4f86ff`,emissive:`#4f86ff`,emissiveIntensity:.48,roughness:.31,metalness:.18});workLight=new X({name:`mat.practical.neutral-worklight`,color:`#c8cfcb`,emissive:`#dce8e4`,emissiveIntensity:.72,roughness:.3,metalness:.08});decalDark=new ri({name:`mat.decal.dark`,color:`#121718`,transparent:!0,opacity:.78,polygonOffset:!0,polygonOffsetFactor:-2,depthWrite:!1});decalLight=new ri({name:`mat.decal.light`,color:`#d7ddd8`,transparent:!0,opacity:.72,polygonOffset:!0,polygonOffsetFactor:-2,depthWrite:!1});materials=[this.concrete,this.concreteDark,this.asphalt,this.steel,this.paintedSteel,this.gunmetal,this.polymer,this.weaponTan,this.rubber,this.hazard,this.warningPaint,this.safetyRed,this.lens,this.water,this.glass,this.emissiveAmber,this.emissiveCyan,this.ancBlue,this.ancCyan,this.ancBright,this.workLight,this.decalDark,this.decalLight];configureForRenderer(e){let t=Math.min(8,e.capabilities.getMaxAnisotropy());for(let e of Object.values(this.textures))e.anisotropy=t,e.needsUpdate=!0}dispose(){for(let e of this.materials)e.dispose();for(let e of Object.values(this.textures))e.dispose()}},$d={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},ef=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},tf=new js(-1,1,1,-1,0,1),nf=new class extends Dr{constructor(){super(),this.setAttribute(`position`,new hr([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new hr([0,2,0,0,2,0],2))}},rf=class{constructor(e){this._mesh=new J(nf,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,tf)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},af=class extends ef{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Vo?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ro.clone(e.uniforms),this.material=new Vo({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new rf(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},of=class extends ef{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},sf=class extends ef{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},cf=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new U);this._width=n.width,this._height=n.height,t=new qt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:g}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new af($d),this.copyPass.material.blending=0,this.timer=new Rs}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}of!==void 0&&(r instanceof of?n=!0:r instanceof sf&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new U);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},lf={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`},uf=class extends ef{constructor(){super(),this.isOutputPass=!0,this.uniforms=Ro.clone(lf.uniforms),this.material=new Ho({name:lf.name,uniforms:this.uniforms,vertexShader:lf.vertexShader,fragmentShader:lf.fragmentShader}),this._fsQuad=new rf(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Pt.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},df=class extends ef{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new q}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},ff={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new q(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`},pf=class e extends ef{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new U(256,256):new U(e.x,e.y),this.clearColor=new q(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new qt(i,a,{type:g}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new qt(i,a,{type:g});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new qt(i,a,{type:g});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),i=Math.round(i/2),a=Math.round(a/2)}let o=ff;this.highPassUniforms=Ro.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Vo({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let s=[6,10,14,18,22];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(s[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new U(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new W(1,1,1),new W(1,1,1),new W(1,1,1),new W(1,1,1),new W(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ro.clone($d.uniforms),this.blendMaterial=new Vo({uniforms:this.copyUniforms,vertexShader:$d.vertexShader,fragmentShader:$d.fragmentShader,premultipliedAlpha:!0,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new q,this._oldClearAlpha=1,this._basic=new ri,this._fsQuad=new rf(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new U(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);return new Vo({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new U(.5,.5)},direction:{value:new U(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Vo({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};pf.BlurDirectionX=new U(1,0),pf.BlurDirectionY=new U(0,1);var mf={name:`AncVenueGrade`,uniforms:{tDiffuse:{value:null},grainTime:{value:0},effectAmount:{value:1}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    precision highp float;
    uniform sampler2D tDiffuse;
    uniform float grainTime;
    uniform float effectAmount;
    varying vec2 vUv;
    float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898,78.233))) * 43758.5453); }
    void main() {
      vec4 source = texture2D(tDiffuse, vUv);
      float vignette = smoothstep(.9, .22, distance(vUv, vec2(.5)));
      float grain = (hash(vUv * vec2(1319.0, 739.0) + grainTime) - .5) * .022;
      vec3 color = source.rgb;
      color = mix(color, color * vec3(1.015, 1.005, .985), .22 * effectAmount);
      color *= mix(1.0, .93 + vignette * .07, effectAmount);
      color += grain * effectAmount * .55;
      gl_FragColor = vec4(color, source.a);
    }
  `},hf=class{renderer;scene;camera;composer;bloomPass;gradePass;postProcessing;maxDpr;width=1;height=1;constructor(e,t,n,r={}){this.renderer=e,this.scene=t,this.camera=n;let i=r.quality??`balanced`;this.maxDpr=r.maxDpr??(i===`mobile`?1.25:i===`high`?2:1.6),this.postProcessing=r.bloom??i!==`mobile`,this.composer=new cf(e),this.composer.addPass(new df(t,n)),this.bloomPass=new pf(new U(1,1),Math.min(r.bloomStrength??(i===`high`?.36:.24),.4),.3,1.15),this.bloomPass.enabled=this.postProcessing,this.composer.addPass(this.bloomPass),this.gradePass=new af(mf),this.gradePass.uniforms.effectAmount.value=i===`mobile`?.55:1,this.composer.addPass(this.gradePass),this.composer.addPass(new uf),e.setPixelRatio(Math.min(window.devicePixelRatio||1,this.maxDpr))}resize(e,t){let n=Math.max(1,Math.floor(e)),r=Math.max(1,Math.floor(t));if(n===this.width&&r===this.height)return;this.width=n,this.height=r;let i=Math.min(window.devicePixelRatio||1,this.maxDpr);this.renderer.setPixelRatio(i),this.renderer.setSize(n,r,!1),this.composer.setPixelRatio(i),this.composer.setSize(n,r)}render(e,t){if(!this.postProcessing){this.renderer.render(this.scene,this.camera);return}this.gradePass.uniforms.grainTime.value=t%1e3,this.composer.render(e)}dispose(){this.composer.dispose(),this.bloomPass.dispose(),this.gradePass.dispose()}};function gf(e,t,n,r={}){return new hf(e,t,n,r)}var _f=class{gravity;points;positions;colors;velocities;lives;durations;cursor=0;constructor(e,t,n,r,i=1){this.gravity=n;let a=new Dr;this.positions=new Float32Array(e*3),this.colors=new Float32Array(e*3),this.lives=new Float32Array(e),this.durations=new Float32Array(e),this.velocities=Array.from({length:e},()=>new W);for(let t=0;t<e;t+=1)this.hide(t);a.setAttribute(`position`,new fr(this.positions,3)),a.setAttribute(`color`,new fr(this.colors,3));let o=new Ji({size:t,sizeAttenuation:!0,vertexColors:!0,transparent:!0,opacity:r,depthWrite:!1,blending:i,toneMapped:!1});this.points=new $i(a,o),this.points.name=`vfx.particle-pool`,this.points.frustumCulled=!1}spawn(e,t,n,r){let i=this.cursor;this.cursor=(this.cursor+1)%this.lives.length,this.positions[i*3]=e.x,this.positions[i*3+1]=e.y,this.positions[i*3+2]=e.z,this.velocities[i].copy(t),yf.set(n),this.colors[i*3]=yf.r,this.colors[i*3+1]=yf.g,this.colors[i*3+2]=yf.b,this.lives[i]=r,this.durations[i]=r}update(e){for(let t=0;t<this.lives.length;t+=1){if(this.lives[t]<=0)continue;if(this.lives[t]-=e,this.lives[t]<=0){this.hide(t);continue}let n=this.velocities[t];n.y-=this.gravity*e;let r=t*3;this.positions[r]+=n.x*e,this.positions[r+1]+=n.y*e,this.positions[r+2]+=n.z*e;let i=H.clamp(this.lives[t]/Math.max(.001,this.durations[t]),0,1);this.colors[r]*=.94+i*.06,this.colors[r+1]*=.94+i*.06,this.colors[r+2]*=.94+i*.06}this.points.geometry.getAttribute(`position`).needsUpdate=!0,this.points.geometry.getAttribute(`color`).needsUpdate=!0}dispose(){this.points.geometry.dispose(),this.points.material.dispose()}hide(e){this.positions[e*3]=0,this.positions[e*3+1]=-9999,this.positions[e*3+2]=0,this.lives[e]=0}},vf=class{root=new K;diagnostics;flashTexture=Hd();dustTexture=Hd(`rgba(190,186,168,.76)`,`rgba(110,105,96,0)`);flashes=[];tracers=[];rings=[];sparks=new _f(240,.047,11.2,.96,2);dust=new _f(180,.18,1.35,.42,1);casings=[];hitCue=new K;hitCueMaterial;tracerCursor=0;ringCursor=0;flashCursor=0;casingCursor=0;hitCueLife=0;constructor(e={}){this.root.name=`anc.vfx-root`,this.root.add(this.sparks.points,this.dust.points),this.createFlashPool(8),this.createTracerPool(e.maxTracers??28),this.createRingPool(e.maxImpactRings??24),this.createCasingPool(18),this.hitCue.name=`vfx.hit-confirm-overlay`,this.hitCue.position.set(0,0,-.42),this.hitCue.visible=!1,this.hitCueMaterial=new ri({color:`#76dcff`,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,toneMapped:!1});for(let e=0;e<4;e+=1){let t=new J(new Oo(.018,.0022),this.hitCueMaterial);t.rotation.z=e*Math.PI/2+Math.PI/4,t.position.set(Math.cos(t.rotation.z)*.016,Math.sin(t.rotation.z)*.016,0),this.hitCue.add(t)}e.attachHitCueTo&&e.attachHitCueTo.add(this.hitCue),this.diagnostics={tracerPool:this.tracers.length,ringPool:this.rings.length,sparkPool:240,dustPool:180}}attachHitCue(e){e.add(this.hitCue)}triggerMuzzle(e,t,n=1){let r=this.flashes[this.flashCursor];this.flashCursor=(this.flashCursor+1)%this.flashes.length,r.life=.048,r.duration=.048,r.object.visible=!0,r.object.position.copy(e).addScaledVector(t,.035),r.object.scale.setScalar(.45*n),r.object.lookAt(Cf.copy(e).add(t));for(let n=0;n<4;n+=1)xf.copy(t).multiplyScalar(4+Math.random()*4),xf.x+=(Math.random()-.5)*1.5,xf.y+=(Math.random()-.5)*1.5,xf.z+=(Math.random()-.5)*1.5,this.sparks.spawn(e,xf,n%2==0?`#ffe8a3`:`#ff8b32`,.09+Math.random()*.08)}triggerTracer(e,t,n=`#8fe8ff`){let r=this.tracers[this.tracerCursor];this.tracerCursor=(this.tracerCursor+1)%this.tracers.length;let i=bf.copy(t).sub(e),a=Math.max(.01,i.length());r.mesh.position.copy(e).add(t).multiplyScalar(.5),r.mesh.scale.set(1,a,1),r.mesh.quaternion.setFromUnitVectors(wf,i.normalize()),r.mesh.material.color.set(n),r.mesh.material.opacity=.88,r.mesh.visible=!0,r.life=.075,r.duration=.075}triggerImpact(e,t,n=`concrete`,r=1){let i=this.rings[this.ringCursor];this.ringCursor=(this.ringCursor+1)%this.rings.length,i.mesh.visible=!0,i.mesh.position.copy(e).addScaledVector(t,.015),i.mesh.quaternion.setFromUnitVectors(Tf,t),i.mesh.material.color.set(n===`metal`?`#75dfff`:n===`ground`?`#d4c3a0`:`#e4ddc8`),i.mesh.material.opacity=.72,i.mesh.scale.setScalar(.08*r),i.life=.28,i.duration=.28,i.startScale=.08*r,i.endScale=.46*r;let a=n===`metal`?13:5,o=n===`metal`?2:12;for(let r=0;r<a;r+=1)xf.copy(t).multiplyScalar(1.5+Math.random()*4.5),xf.x+=(Math.random()-.5)*3.8,xf.y+=Math.random()*2.2,xf.z+=(Math.random()-.5)*3.8,this.sparks.spawn(e,xf,n===`metal`?`#92e8ff`:`#e8d39f`,.2+Math.random()*.35);for(let r=0;r<o;r+=1)xf.copy(t).multiplyScalar(.2+Math.random()*.9),xf.x+=(Math.random()-.5)*.7,xf.y+=.2+Math.random()*.8,xf.z+=(Math.random()-.5)*.7,this.dust.spawn(e,xf,n===`ground`?`#8c8370`:`#b5b0a2`,.48+Math.random()*.55)}triggerExplosion(e,t=2.2){let n=Math.min(3,this.rings.length);for(let r=0;r<n;r+=1){let n=this.rings[(this.ringCursor+r)%this.rings.length];n.mesh.visible=!0,n.mesh.position.copy(e).add(new W(0,.08+r*.05,0)),n.mesh.rotation.set(-Math.PI/2,0,r*.7),n.mesh.material.color.set(r===0?`#ffffff`:r===1?`#0a52ef`:`#00aeef`),n.mesh.material.opacity=.78-r*.16,n.life=.52+r*.12,n.duration=n.life,n.startScale=.25+r*.2,n.endScale=t*(1+r*.35)}this.ringCursor=(this.ringCursor+n)%this.rings.length;for(let t=0;t<55;t+=1)xf.set((Math.random()-.5)*9,2+Math.random()*8,(Math.random()-.5)*9),this.sparks.spawn(e,xf,t%4==0?`#4f86ff`:`#ffb45a`,.45+Math.random()*.75);for(let t=0;t<28;t+=1)xf.set((Math.random()-.5)*3.5,.5+Math.random()*2.7,(Math.random()-.5)*3.5),this.dust.spawn(e,xf,`#777d80`,.9+Math.random()*1.2)}triggerRepairPulse(e,t){this.triggerTracer(e,t,`#00aeef`),this.triggerImpact(t,bf.copy(e).sub(t).normalize(),`metal`,.68);for(let n=0;n<16;n+=1){let r=n/15;Sf.copy(e).lerp(t,r),xf.set((Math.random()-.5)*.2,.08+Math.random()*.2,(Math.random()-.5)*.2),this.sparks.spawn(Sf,xf,n%2==0?`#00aeef`:`#4f86ff`,.25+Math.random()*.35)}}triggerHitConfirm(e=!0){this.hitCueLife=e?.18:.1,this.hitCueMaterial.color.set(e?`#76dcff`:`#f4b84a`),this.hitCueMaterial.opacity=.95,this.hitCue.visible=!0,this.hitCue.scale.setScalar(e?1:1.4)}ejectCasing(e,t){let n=this.casings[this.casingCursor];this.casingCursor=(this.casingCursor+1)%this.casings.length,n.object.visible=!0,n.object.position.copy(e),n.velocity.copy(t).multiplyScalar(1.4+Math.random()).add(new W(0,1.1+Math.random(),0)),n.spin.set(5+Math.random()*8,7+Math.random()*11,4+Math.random()*6),n.life=1.15,n.duration=1.15}update(e){for(let t of this.flashes){if(t.life<=0)continue;t.life-=e;let n=H.clamp(t.life/t.duration,0,1);t.object.scale.multiplyScalar(.86),t.object.visible=n>0}for(let t of this.tracers){if(t.life<=0)continue;t.life-=e;let n=H.clamp(t.life/t.duration,0,1);t.mesh.material.opacity=n*.88,t.mesh.visible=n>0}for(let t of this.rings){if(t.life<=0)continue;t.life-=e;let n=1-H.clamp(t.life/t.duration,0,1);t.mesh.scale.setScalar(H.lerp(t.startScale,t.endScale,1-(1-n)**3)),t.mesh.material.opacity=(1-n)*.72,t.mesh.visible=n<1}for(let t of this.casings)t.life<=0||(t.life-=e,t.velocity.y-=8.6*e,t.object.position.addScaledVector(t.velocity,e),t.object.rotation.x+=t.spin.x*e,t.object.rotation.y+=t.spin.y*e,t.object.rotation.z+=t.spin.z*e,(t.life<=0||t.object.position.y<-.2)&&(t.object.visible=!1));if(this.hitCueLife>0){this.hitCueLife-=e;let t=H.clamp(this.hitCueLife/.18,0,1);this.hitCueMaterial.opacity=t,this.hitCue.scale.lerp(Ef.setScalar(.72),1-Math.exp(-18*e)),this.hitCue.visible=t>0}this.sparks.update(e),this.dust.update(e)}dispose(){this.flashTexture.dispose(),this.dustTexture.dispose(),this.sparks.dispose(),this.dust.dispose(),this.hitCueMaterial.dispose();for(let e of this.hitCue.children)e instanceof J&&e.geometry.dispose();for(let e of this.flashes)e.object.traverse(e=>{if(!(e instanceof J||e instanceof qr))return;e.geometry?.dispose();let t=e.material;Array.isArray(t)?t.forEach(e=>e.dispose()):t.dispose()});for(let e of this.tracers)e.mesh.geometry.dispose(),e.mesh.material.dispose();for(let e of this.rings)e.mesh.geometry.dispose(),e.mesh.material.dispose();for(let e of this.casings)if(e.object instanceof J){e.object.geometry.dispose();let t=e.object.material;Array.isArray(t)?t.forEach(e=>e.dispose()):t.dispose()}}createFlashPool(e){for(let t=0;t<e;t+=1){let e=new K;e.name=`vfx.muzzle-flash`;let n=new qr(new Nr({map:this.flashTexture,color:t%2==0?`#ffcf72`:`#8fdcff`,transparent:!0,opacity:.95,blending:2,depthWrite:!1,toneMapped:!1}));n.scale.set(.34,.34,.34),e.add(n);let r=new ri({color:`#ffbb52`,transparent:!0,opacity:.72,blending:2,depthWrite:!1,side:2,toneMapped:!1}),i=new J(new la(.105,.52,7,1,!0),r);i.rotation.x=-Math.PI/2,i.position.z=-.25,e.add(i),e.visible=!1,this.flashes.push({object:e,life:0,duration:.048}),this.root.add(e)}}createTracerPool(e){for(let t=0;t<e;t+=1){let e=new ri({color:`#8fe8ff`,transparent:!0,opacity:0,blending:2,depthWrite:!1,toneMapped:!1}),t=new J(new ca(.009,.003,1,5,1,!0),e);t.name=`vfx.tracer`,t.visible=!1,this.tracers.push({object:t,mesh:t,life:0,duration:.075}),this.root.add(t)}}createRingPool(e){for(let t=0;t<e;t+=1){let e=new ri({color:`#dce8e4`,transparent:!0,opacity:0,blending:2,depthWrite:!1,side:2,toneMapped:!1}),t=new J(new ko(.7,1,28),e);t.name=`vfx.impact-ring`,t.visible=!1,this.rings.push({object:t,mesh:t,life:0,duration:.28,startScale:.08,endScale:.46}),this.root.add(t)}}createCasingPool(e){for(let t=0;t<e;t+=1){let e=new X({color:`#a6853c`,roughness:.31,metalness:.88}),t=new J(new ca(.018,.022,.085,8),e);t.name=`vfx.shell-casing`,t.visible=!1,this.casings.push({object:t,velocity:new W,spin:new W,life:0,duration:1.15}),this.root.add(t)}}},yf=new q,bf=new W,xf=new W,Sf=new W,Cf=new W,wf=new W(0,1,0),Tf=new W(0,0,1),Ef=new W;function Df(e={}){return new vf(e)}function Of(e,t,n){let r=new Ba,i=e/2,a=t/2;r.moveTo(-i*.92,-a),r.lineTo(i*.74,-a),r.lineTo(i,-a*.5),r.lineTo(i*.92,a*.64),r.lineTo(i*.45,a),r.lineTo(-i*.72,a*.92),r.lineTo(-i,a*.32),r.closePath();let o=new To(r,{depth:n,bevelEnabled:!0,bevelSegments:2,bevelSize:.018,bevelThickness:.014,curveSegments:2});return o.center(),o}function kf(){let e=new Ba;e.moveTo(-.095,.22),e.lineTo(.095,.22),e.lineTo(.12,-.2),e.quadraticCurveTo(.15,-.43,.04,-.6),e.lineTo(-.11,-.57),e.quadraticCurveTo(-.03,-.37,-.07,-.18),e.closePath();let t=new To(e,{depth:.23,bevelEnabled:!0,bevelSegments:2,bevelSize:.012,bevelThickness:.01});return t.center(),t}function Af(e,t,n,r=16){let i=new J(new ca(e,e,t,r),n);return i.rotation.x=Math.PI/2,i}function jf(e,t,n,r){return H.lerp(e,t,1-Math.exp(-n*r))}var Mf=class{root=new K;muzzleSocket=new wn;ejectionSocket=new wn;scannerSocket=new wn;diagnostics;materials;ownsMaterials;weapon=new K;bolt=new K;magazine=new K;chargingHandle=new K;scannerPulseMaterial;reticleMaterial;muzzleGlow;ownedGeometries=new Set;ownedMaterials=new Set;hipPosition=new W(.275,-.29,-.82);adsPosition=new W(.002,-.2,-.65);sprintPosition=new W(.33,-.4,-.7);sideSign;recoil=0;recoilRoll=0;adsBlend=0;sprintBlend=0;reloadTime=-1;shotIndex=0;muzzleTime=0;constructor(e={}){this.materials=e.materials??new Qd,this.ownsMaterials=e.materials===void 0,this.sideSign=e.handedness===`left`?-1:1,this.root.name=`viewmodel.anc-field-rifle-root`,this.root.position.copy(this.hipPosition),this.root.scale.setScalar(e.scale??.42),this.weapon.name=`viewmodel.anc-field-rifle`,this.root.add(this.weapon),this.reticleMaterial=new ri({name:`mat.viewmodel.reticle`,color:`#4f86ff`,transparent:!0,opacity:.94,depthTest:!1,depthWrite:!1}),this.ownedMaterials.add(this.reticleMaterial),this.buildReceiver(),this.buildHandguardAndBarrel(),this.buildStockAndGrip(),this.buildMagazine(),this.buildOptic(),this.buildSpecialistModule(),this.buildHands(),this.buildSockets();let t=new As(`#ffe0bd`,.9,4,1.3);t.name=`viewmodel.warm-key`,t.position.set(-.42*this.sideSign,.65,.15),this.root.add(t);let n=new As(`#7fb9db`,.42,3.5,1.4);n.name=`viewmodel.cool-rim`,n.position.set(.58*this.sideSign,.16,-.9),this.root.add(n),this.muzzleGlow=new As(`#ffae52`,0,2.6,2),this.muzzleGlow.name=`viewmodel.muzzle-practical`,this.muzzleSocket.add(this.muzzleGlow),this.scannerPulseMaterial=this.materials.ancCyan.clone(),this.scannerPulseMaterial.name=`mat.viewmodel.scanner-pulse`,this.ownedMaterials.add(this.scannerPulseMaterial);let r=new J(new ko(.028,.039,20),this.scannerPulseMaterial);this.ownedGeometries.add(r.geometry),r.name=`viewmodel.scanner-status-ring`,r.position.set(-.115*this.sideSign,.05,-.92),r.rotation.y=this.sideSign*Math.PI/2,this.weapon.add(r);let i=0,a=new Set,o=new Set;this.root.traverse(e=>{if(!(e instanceof J))return;i+=1,a.add(e.geometry);let t=Array.isArray(e.material)?e.material:[e.material];for(let e of t)o.add(e)}),this.diagnostics={meshes:i,materials:o.size,geometries:a.size}}get reloadStage(){return this.reloadTime<0?`idle`:this.reloadTime<.42?`release`:this.reloadTime<1.22?`insert`:`charge`}fire(e=1){if(this.reloadTime>=0)return this.getMuzzlePose();this.shotIndex+=1;let t=Math.sin(this.shotIndex*14.217)*.25;return this.recoil=Math.min(1,this.recoil+.72*e),this.recoilRoll+=t*.045*e,this.muzzleTime=.052,this.muzzleGlow.intensity=8.5*e,this.getMuzzlePose()}reload(){return this.reloadTime>=0?!1:(this.reloadTime=0,!0)}cancelReload(){this.reloadTime=-1}update(e,t,n={}){let r=n.aiming??!1,i=n.sprinting??!1,a=H.clamp((n.moveSpeed??0)/6,0,1.5);this.adsBlend=jf(this.adsBlend,r&&!i?1:0,13.5,e),this.sprintBlend=jf(this.sprintBlend,+!!i,9.5,e),this.recoil=jf(this.recoil,0,17,e),this.recoilRoll=jf(this.recoilRoll,0,14,e),this.muzzleTime=Math.max(0,this.muzzleTime-e),this.muzzleGlow.intensity=this.muzzleTime>0?7.5*(this.muzzleTime/.052):0;let o=this.hipPosition.clone().lerp(this.adsPosition,this.adsBlend).lerp(this.sprintPosition,this.sprintBlend);o.x*=this.sideSign;let s=7.5+a*4.8,c=(.0025+a*.012)*(1-this.adsBlend*.76);o.x+=Math.sin(t*s)*c*this.sideSign,o.y+=Math.abs(Math.cos(t*s))*c*-.8,o.z+=this.recoil*.058,this.root.position.lerp(o,1-Math.exp(-20*e));let l=H.clamp(n.lookDeltaX??0,-1,1)*-.017,u=H.clamp(n.lookDeltaY??0,-1,1)*-.012;this.root.rotation.x=jf(this.root.rotation.x,u+this.recoil*.065+this.sprintBlend*-.42,18,e),this.root.rotation.y=jf(this.root.rotation.y,l+this.sprintBlend*-.31*this.sideSign,18,e),this.root.rotation.z=jf(this.root.rotation.z,this.recoilRoll+this.sprintBlend*-.23*this.sideSign,16,e),this.bolt.position.z=H.lerp(0,.075,Math.min(1,this.recoil*2.5)),this.scannerPulseMaterial.emissiveIntensity=1.25+Math.sin(t*3.4)*.45,this.reticleMaterial.opacity=H.lerp(.2,.96,this.adsBlend),this.reloadTime>=0?(this.reloadTime+=e,this.animateReload(this.reloadTime),this.reloadTime>=1.72&&(this.reloadTime=-1)):(this.magazine.position.set(0,0,0),this.magazine.rotation.set(0,0,0),this.chargingHandle.position.z=0,this.weapon.position.set(0,0,0),this.weapon.rotation.set(0,0,0))}getMuzzlePose(e={position:new W,direction:new W}){return this.muzzleSocket.updateWorldMatrix(!0,!1),this.muzzleSocket.getWorldPosition(e.position),this.muzzleSocket.getWorldQuaternion(Nf),e.direction.set(0,0,-1).applyQuaternion(Nf).normalize(),e}getEjectionPosition(e=new W){return this.ejectionSocket.updateWorldMatrix(!0,!1),this.ejectionSocket.getWorldPosition(e)}dispose(){for(let e of this.ownedGeometries)e.dispose();for(let e of this.ownedMaterials)e.dispose();this.ownsMaterials&&this.materials.dispose()}buildReceiver(){let e=new J(Of(.31,.24,.58),this.materials.gunmetal);this.ownedGeometries.add(e.geometry),e.name=`viewmodel.receiver.upper`,e.position.set(0,.01,-.34),e.castShadow=!0,this.weapon.add(e);let t=new J(Of(.29,.24,.34),this.materials.weaponTan);this.ownedGeometries.add(t.geometry),t.name=`viewmodel.receiver.lower`,t.position.set(0,-.12,-.2),t.rotation.z=.025*this.sideSign,t.castShadow=!0,this.weapon.add(t);let n=new J(new Oo(.24,.09),this.materials.decalDark);this.ownedGeometries.add(n.geometry),n.name=`viewmodel.receiver.ejection-port`,n.rotation.y=-Math.PI/2,n.position.set(.158*this.sideSign,.035,-.35),this.weapon.add(n);let r=new J(new Y(.012,.068,.19),this.materials.steel);this.ownedGeometries.add(r.geometry),r.position.set(.164*this.sideSign,.035,-.34),this.bolt.name=`viewmodel.bolt-carrier`,this.bolt.add(r),this.weapon.add(this.bolt);let i=new J(new Y(.3,.036,.08),this.materials.gunmetal);this.ownedGeometries.add(i.geometry),this.chargingHandle.name=`viewmodel.charging-handle`,this.chargingHandle.position.set(0,.145,-.13),this.chargingHandle.add(i),this.weapon.add(this.chargingHandle);let a=new ca(.016,.016,.018,10);this.ownedGeometries.add(a);for(let e of[-.15,-.28,-.43]){let t=new J(a,this.materials.steel);t.name=`viewmodel.receiver-pin`,t.rotation.z=Math.PI/2,t.position.set(.159*this.sideSign,-.085,e),this.weapon.add(t)}let o=new J(new ca(.024,.024,.024,12),this.materials.safetyRed);this.ownedGeometries.add(o.geometry),o.rotation.z=Math.PI/2,o.position.set(.166*this.sideSign,-.03,-.17),this.weapon.add(o)}buildHandguardAndBarrel(){let e=new J(Of(.3,.25,.66),this.materials.weaponTan);this.ownedGeometries.add(e.geometry),e.name=`viewmodel.handguard`,e.position.set(0,.02,-.94),e.castShadow=!0,this.weapon.add(e);let t=Af(.027,.74,this.materials.gunmetal,18);this.ownedGeometries.add(t.geometry),t.name=`viewmodel.barrel`,t.position.set(0,.015,-1.55),t.castShadow=!0,this.weapon.add(t);let n=Af(.056,.19,this.materials.gunmetal,20);this.ownedGeometries.add(n.geometry),n.name=`viewmodel.muzzle-brake`,n.position.set(0,.015,-1.94),this.weapon.add(n);for(let e of[-1.89,-1.94,-1.99]){let t=new J(new jo(.058,.008,6,18),this.materials.steel);this.ownedGeometries.add(t.geometry),t.position.set(0,.015,e),this.weapon.add(t)}let r=new Y(.014,.048,.145);this.ownedGeometries.add(r);for(let e of[-1,1])for(let t=0;t<4;t+=1){let n=new J(r,this.materials.decalDark);n.position.set(e*.153,.02,-.76-t*.145),this.weapon.add(n)}let i=new Y(.18,.018,.042);this.ownedGeometries.add(i);for(let e=0;e<15;e+=1){let t=new J(i,this.materials.gunmetal);t.name=`viewmodel.picatinny-segment`,t.position.set(0,.158,-.4-e*.08),this.weapon.add(t)}let a=new J(new Y(.15,.12,.13),this.materials.gunmetal);this.ownedGeometries.add(a.geometry),a.position.set(0,.015,-1.35),this.weapon.add(a);let o=new K;o.name=`viewmodel.front-sight`,o.position.set(0,.16,-1.36);for(let e of[-1,1]){let t=new J(new Y(.025,.13,.035),this.materials.gunmetal);this.ownedGeometries.add(t.geometry),t.position.x=e*.045,o.add(t)}let s=new J(new Y(.014,.085,.018),this.materials.decalDark);this.ownedGeometries.add(s.geometry),o.add(s),this.weapon.add(o)}buildStockAndGrip(){let e=new J(Of(.31,.28,.49),this.materials.polymer);this.ownedGeometries.add(e.geometry),e.name=`viewmodel.stock`,e.position.set(0,-.18,.02),e.rotation.x=-.05,e.scale.set(.76,.54,.68),this.weapon.add(e);let t=new J(Of(.32,.32,.075),this.materials.rubber);this.ownedGeometries.add(t.geometry),t.position.set(0,-.24,.2),t.scale.set(.72,.46,.62),this.weapon.add(t);let n=new J(Of(.18,.38,.22),this.materials.polymer);this.ownedGeometries.add(n.geometry),n.name=`viewmodel.pistol-grip`,n.position.set(0,-.34,-.045),n.rotation.x=-.2,this.weapon.add(n);for(let e=0;e<5;e+=1){let t=new J(new Y(.185,.018,.018),this.materials.rubber);this.ownedGeometries.add(t.geometry),t.position.set(0,-.24-e*.055,.075-e*.008),this.weapon.add(t)}let r=new J(new jo(.09,.012,6,22,Math.PI*1.25),this.materials.gunmetal);this.ownedGeometries.add(r.geometry),r.rotation.z=1.92,r.rotation.y=Math.PI/2,r.position.set(0,-.19,-.16),this.weapon.add(r)}buildMagazine(){let e=new J(kf(),this.materials.paintedSteel);this.ownedGeometries.add(e.geometry),e.name=`viewmodel.magazine.body`,e.rotation.y=Math.PI/2,e.rotation.z=-.035*this.sideSign,this.magazine.position.set(0,-.26,-.27),this.magazine.scale.setScalar(.82),this.magazine.add(e);for(let e=0;e<6;e+=1){let t=new J(new Y(.24,.018,.025),this.materials.steel);this.ownedGeometries.add(t.geometry),t.position.set(0,-.02-e*.075,.03+e*.01),this.magazine.add(t)}let t=new J(new Y(.28,.055,.18),this.materials.rubber);this.ownedGeometries.add(t.geometry),t.position.set(0,-.54,.055),this.magazine.add(t),this.weapon.add(this.magazine)}buildOptic(){let e=new K;e.name=`viewmodel.optic`,e.position.set(0,.245,-.53);let t=Af(.11,.31,this.materials.gunmetal,24);this.ownedGeometries.add(t.geometry),t.position.z=0,e.add(t);for(let t of[-.16,.16]){let n=new J(new jo(.112,.018,8,28),this.materials.steel);this.ownedGeometries.add(n.geometry),n.position.z=t,e.add(n)}let n=new J(new sa(.094,32),this.materials.lens);this.ownedGeometries.add(n.geometry),n.position.z=.166,e.add(n);let r=new Y(.08,.11,.06);this.ownedGeometries.add(r);for(let t of[-.1,.1]){let n=new J(r,this.materials.gunmetal);n.position.set(0,-.135,t),e.add(n)}let i=new J(new ca(.038,.038,.045,16),this.materials.warningPaint);this.ownedGeometries.add(i.geometry),i.position.set(.12*this.sideSign,.015,-.03),i.rotation.z=Math.PI/2,e.add(i);let a=new K;a.name=`viewmodel.optic.reticle`,a.position.set(0,0,-.171);let o=new J(new ko(.025,.029,32),this.reticleMaterial);this.ownedGeometries.add(o.geometry),a.add(o);for(let[e,t]of[[.065,.003],[.003,.065]]){let n=new J(new Oo(e,t),this.reticleMaterial);this.ownedGeometries.add(n.geometry),a.add(n)}e.add(a),this.weapon.add(e)}buildSpecialistModule(){let e=new K;e.name=`viewmodel.anc-field-diagnostic-module`,e.position.set(-.19*this.sideSign,.035,-.89);let t=new J(Of(.16,.13,.29),this.materials.polymer);this.ownedGeometries.add(t.geometry),t.rotation.y=Math.PI/2,e.add(t);let n=new J(new Oo(.19,.075),this.materials.ancBlue);this.ownedGeometries.add(n.geometry),n.rotation.y=this.sideSign*Math.PI/2,n.position.x=-.087*this.sideSign,e.add(n);let r=Af(.018,.23,this.materials.ancCyan,12);this.ownedGeometries.add(r.geometry),r.position.set(0,.03,-.21),e.add(r),this.weapon.add(e)}buildHands(){let e=new X({name:`mat.viewmodel.technical-glove`,color:`#202a32`,roughness:.9,metalness:.01});this.ownedMaterials.add(e);let t=new oa(.105,.18,5,10);this.ownedGeometries.add(t);let n=new J(t,e);n.name=`viewmodel.hand.support`,n.position.set(-.02*this.sideSign,-.19,-.92),n.rotation.set(Math.PI/2,.08,.35*this.sideSign),this.weapon.add(n);let r=new J(t,e);r.name=`viewmodel.hand.grip`,r.position.set(.03*this.sideSign,-.41,-.12),r.rotation.set(.12,0,-.13*this.sideSign),r.scale.setScalar(.78),this.weapon.add(r);let i=new ca(.09,.11,.3,10);this.ownedGeometries.add(i);for(let[t,n,r,a]of[[-.02*this.sideSign,-.31,-.82,1.34],[.03*this.sideSign,-.58,-.14,.05]]){let o=new J(i,e);o.position.set(t,n,r),o.rotation.x=a,r<0&&o.scale.setScalar(.74),this.weapon.add(o)}let a=new J(new Oo(.095,.025),this.materials.ancBright);this.ownedGeometries.add(a.geometry),a.position.set(-.02*this.sideSign,-.218,-1.027),a.rotation.x=-.3,this.weapon.add(a)}buildSockets(){this.muzzleSocket.name=`viewmodel.socket.muzzle`,this.muzzleSocket.position.set(0,.015,-2.055),this.weapon.add(this.muzzleSocket),this.ejectionSocket.name=`viewmodel.socket.ejection`,this.ejectionSocket.position.set(.18*this.sideSign,.04,-.34),this.weapon.add(this.ejectionSocket),this.scannerSocket.name=`viewmodel.socket.scanner`,this.scannerSocket.position.set(-.21*this.sideSign,.065,-1.12),this.weapon.add(this.scannerSocket)}animateReload(e){let t=H.smoothstep(e,.08,.42),n=H.smoothstep(e,.58,1.18),r=H.smoothstep(e,1.18,1.42),i=t*(1-n);this.magazine.position.set(.12*this.sideSign*i,-.58*i,.14*i),this.magazine.rotation.set(.3*i,0,-.46*this.sideSign*i);let a=H.smoothstep(e,1.37,1.48)*(1-H.smoothstep(e,1.48,1.66));this.chargingHandle.position.z=a*.13,this.weapon.rotation.z=Math.sin(Math.min(1,e/1.25)*Math.PI)*-.19*this.sideSign*(1-r),this.weapon.position.y=-Math.sin(Math.min(1,e/1.42)*Math.PI)*.08}},Nf=new Dt;function Pf(e={}){return new Mf(e)}function Ff(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new Dr,l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let e in d.morphAttributes){if(!i.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;o[e]===void 0&&(o[e]=[]),o[e].push(d.morphAttributes[e])}if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=If(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=If(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function If(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new fr(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}function Lf(e){let t=e>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967295)}function Rf(e,t){let n=document.createElement(`canvas`);n.width=e,n.height=t;let r=n.getContext(`2d`);if(!r)throw Error(`Canvas 2D is required for stadium surface textures.`);return[n,r]}function zf(e,n=Le){let r=new na(e);return r.colorSpace=n,r.wrapS=t,r.wrapT=t,r.minFilter=c,r.magFilter=o,r.generateMipmaps=!0,r.needsUpdate=!0,r}function Bf(e=34,t=74){let n=1024,r=2048,[i,a]=Rf(n,r),o=.55,s=n/e,c=r/t,l=o*c,u=53.3*o*s,d=120*l;n/2;let f=r/2,p=512-u/2,m=512+u/2,h=f-d/2,g=f+d/2,_=h+10*l,v=g-10*l;a.fillStyle=`#15291b`,a.fillRect(0,0,n,r),a.fillStyle=`#1e4426`,a.fillRect(p,h,u,d);for(let e=0;e<20;e+=1)e%2!=0&&(a.fillStyle=`rgba(255,255,255,0.055)`,a.fillRect(p,_+e*5*l,u,5*l));let y=Lf(8330781);for(let e=0;e<15e3;e+=1){let e=y()*n,t=y()*r,i=e>p&&e<m&&t>h&&t<g;a.fillStyle=y()>.62?`rgba(214,236,205,${i?.045:.03})`:`rgba(6,18,9,${i?.075:.06})`,a.fillRect(e,t,1.1,2.6+y()*3.4)}for(let e=0;e<2600;e+=1){let e=_+y()*(v-_),t=512+(y()-.5)*u*.34;a.fillStyle=`rgba(58,72,40,0.05)`,a.fillRect(t,e,2.2,3.2)}let b=e=>{a.fillStyle=`#0d2f8f`,a.fillRect(p,e,u,10*l),a.fillStyle=`rgba(6,14,44,0.35)`;for(let t=0;t<900;t+=1)a.fillRect(p+y()*u,e+y()*10*l,1.4,2.8)};b(h),b(v);let x=(e,t,n,r,i=.92)=>{a.fillStyle=`rgba(238,244,240,${i})`,a.fillRect(e,t,n,r)},S=2*o*s;x(p-S,h-S,u+S*2,S,.5),x(p-S,g,u+S*2,S,.5),x(p-S,h-S,S,d+S*2,.5),x(m,h-S,S,d+S*2,.5);let C=Math.max(2.4,l*.115);x(p,h,C*1.5,d),x(m-C*1.5,h,C*1.5,d),x(p,h,u,C*1.5),x(p,g-C*1.5,u,C*1.5),x(p,_-C,u,C*2),x(p,v-C,u,C*2);for(let e=5;e<100;e+=5){let t=_+e*l;x(p+C,t-C/2,u-C*2,C)}let w=3.1*o*s,T=.66*o*s;for(let e=1;e<100;e+=1){if(e%5==0)continue;let t=_+e*l;x(512-w-T,t-C/2,T,C,.8),x(512+w,t-C/2,T,C,.8),x(p+C*2,t-C/2,T,C,.72),x(m-C*2-T,t-C/2,T,C,.72)}let E=2*o*c;a.textAlign=`center`,a.textBaseline=`middle`;let D=(e,t,n,r,i)=>{let o=e===50?`50`:`${e/10}0`;if(a.save(),a.translate(n,t),a.rotate(r),a.fillStyle=`rgba(238,244,240,0.88)`,a.font=`700 ${E}px 'Arial Narrow', Arial, sans-serif`,a.fillText(o.split(``).join(` `),0,0),e!==50){let e=i?-E*.92:E*.92;a.beginPath(),a.moveTo(e,0),a.lineTo(e+(i?E*.3:-E*.3),-E*.17),a.lineTo(e+(i?E*.3:-E*.3),E*.17),a.closePath(),a.fill()}a.restore()},ee=8*o*s;for(let e=10;e<=90;e+=10){let t=e<=50?e:100-e,n=_+e*l;D(t,n,p+ee,Math.PI/2,e<50),D(t,n,m-ee,-Math.PI/2,e<50)}a.strokeStyle=`rgba(238,244,240,0.6)`,a.lineWidth=C,a.beginPath(),a.arc(512,f,4.2*o*s,0,Math.PI*2),a.stroke();let O=zf(i);O.anisotropy=8;let[k,te]=Rf(256,512);te.fillStyle=`#e8e8e8`,te.fillRect(0,0,256,512),te.drawImage(i,0,0,256,512);let A=te.getImageData(0,0,256,512);for(let e=0;e<A.data.length;e+=4){let t=(A.data[e]+A.data[e+1]+A.data[e+2])/3,n=248-Math.min(70,Math.max(0,t-60)*.55);A.data[e]=n,A.data[e+1]=n,A.data[e+2]=n,A.data[e+3]=255}return te.putImageData(A,0,0),{map:O,roughnessMap:zf(k,``),worldWidth:e,worldLength:t,stampEndZoneLogos:e=>{if(!e.naturalWidth)return;let t=26*o*s,n=t*(e.naturalHeight/e.naturalWidth),r=(r,i)=>{a.save(),a.translate(512,r),i&&a.rotate(Math.PI),a.globalAlpha=.9,a.drawImage(e,-t/2,-n/2,t,n),a.restore()};r(h+5*l,!1),r(g-5*l,!0),a.globalAlpha=1,O.needsUpdate=!0}}}function Vf(e,t){let n=1024,[r,i]=Rf(n,512);i.fillStyle=`#f4f6f8`,i.fillRect(0,0,n,512),i.fillStyle=`rgba(190,196,205,0.5)`;for(let e=0;e<512;e+=4)i.fillRect(0,e,n,1);for(let e=0;e<n;e+=4)i.fillRect(e,0,1,512);i.fillStyle=`rgba(96,104,116,0.55)`;let a=n/(e*2),o=512/(t*2);for(let e=a;e<n;e+=a)i.fillRect(Math.round(e),0,1,512);for(let e=o;e<512;e+=o)i.fillRect(0,Math.round(e),n,1);i.fillStyle=`rgba(40,46,56,0.85)`;for(let t=1;t<e;t+=1)i.fillRect(Math.round(t*n/e),0,2,512);for(let e=1;e<t;e+=1)i.fillRect(0,Math.round(e*512/t),n,2);let s=zf(r);return s.anisotropy=8,s}function Hf(t=26,n=20962){let r=2048,[i,a]=Rf(r,128),[o,s]=Rf(r,128),c=Lf(n);a.fillStyle=`#0c1219`,a.fillRect(0,0,r,128),s.fillStyle=`#000000`,s.fillRect(0,0,r,128);let l=r/t;for(let e=0;e<t;e+=1){let t=e*l,n=c(),r=a.createLinearGradient(0,8,0,118);if(r.addColorStop(0,`#232f3d`),r.addColorStop(.45,`#141d28`),r.addColorStop(1,`#0a0f16`),a.fillStyle=r,a.fillRect(t+3,8,l-6,110),n>.42){s.fillStyle=n>.8?`rgba(255,214,158,0.85)`:`rgba(255,196,132,0.5)`,s.fillRect(t+6,14,l-12,98),s.fillStyle=`rgba(20,12,4,0.55)`;for(let e=0;e<3;e+=1)c()>.55&&s.fillRect(t+6+(l-12)*(.18+c()*.6),18,4+c()*10,90)}a.fillStyle=`#2c3540`,a.fillRect(t,0,3,128)}a.fillStyle=`#39424c`,a.fillRect(0,0,r,7),a.fillRect(0,119,r,9);let u=zf(i);u.wrapS=e;let d=zf(o);return d.wrapS=e,{map:u,emissiveMap:d}}function Uf(e,t,n=`#0A52EF`){let[r,i]=Rf(512,128);i.fillStyle=`#10151b`,i.fillRect(0,0,512,128),i.strokeStyle=`rgba(255,255,255,0.22)`,i.lineWidth=3,i.strokeRect(4,4,504,120),i.fillStyle=n,i.fillRect(14,16,8,96),i.fillStyle=`#eef3f8`,i.font=`700 44px "Arial Narrow", Arial, sans-serif`,i.textBaseline=`middle`,i.fillText(e,40,46),i.fillStyle=`rgba(214,226,238,0.62)`,i.font=`500 24px monospace`,i.fillText(t,41,94);let a=zf(r);return a.anisotropy=4,a}function Wf(e=128){let[t,n]=Rf(e,e),r=n.createRadialGradient(e/2,e/2,e*.05,e/2,e/2,e/2);return r.addColorStop(0,`rgba(0,0,0,0.52)`),r.addColorStop(.55,`rgba(0,0,0,0.3)`),r.addColorStop(1,`rgba(0,0,0,0)`),n.fillStyle=r,n.fillRect(0,0,e,e),zf(t)}function Gf(){let[t,n]=Rf(128,512);n.fillStyle=`#8b8e88`,n.fillRect(0,0,128,512);let r=Lf(41310);for(let e=0;e<900;e+=1)n.fillStyle=r()>.5?`rgba(30,33,31,0.16)`:`rgba(226,229,222,0.1)`,n.fillRect(r()*128,r()*512,1.5,1.5);for(let e=0;e<512;e+=24)n.fillStyle=`rgba(240,214,80,0.5)`,n.fillRect(0,e,128,3),n.fillStyle=`rgba(20,22,20,0.4)`,n.fillRect(0,e+3,128,2);let i=zf(t);return i.wrapT=e,i}var Kf={blue:new q(`#0A52EF`),cyan:new q(`#00AEEF`),bright:new q(`#4F86FF`),emergency:new q(`#c74834`),dark:new q(`#070b12`)};function qf(e,t,n,r=.08){let i=new Ba,a=e/2,o=t/2,s=Math.min(r,a,o);i.moveTo(-a+s,-o),i.lineTo(a-s,-o),i.quadraticCurveTo(a,-o,a,-o+s),i.lineTo(a,o-s),i.quadraticCurveTo(a,o,a-s,o),i.lineTo(-a+s,o),i.quadraticCurveTo(-a,o,-a,o-s),i.lineTo(-a,-o+s),i.quadraticCurveTo(-a,-o,-a+s,-o);let c=new To(i,{depth:n,bevelEnabled:!0,bevelSegments:2,bevelSize:Math.min(n*.22,r*.38),bevelThickness:Math.min(n*.18,r*.3),curveSegments:3});return c.center(),c}function Jf(e,t,n,r,i=8){let a=e.clone().add(t).multiplyScalar(.5),o=t.clone().sub(e),s=new J(new ca(n,n,o.length(),i),r);return s.position.copy(a),s.quaternion.setFromUnitVectors(new W(0,1,0),o.normalize()),s}function Yf(e,t,n,r){return e.compose(t,new Dt().setFromEuler(n),r)}function Xf(e){let t=new Ba;t.moveTo(0,0),t.lineTo(13,0),t.lineTo(13,8.4);for(let e=9;e>=0;--e){let n=2+e*1.08,r=.65+e*.76;t.lineTo(n,r+.58),t.lineTo(n,r)}t.closePath();let n=new To(t,{depth:e,bevelEnabled:!1,curveSegments:1});return n.translate(0,0,-e/2),n}function Zf(e){let t=new Ba;t.moveTo(0,0),t.lineTo(7.6,0),t.lineTo(7.6,6.3);for(let e=4;e>=0;--e){let n=.85+e*1.16,r=.6+e*.98;t.lineTo(n,r+.7),t.lineTo(n,r)}t.closePath();let n=new To(t,{depth:e,bevelEnabled:!1,curveSegments:1});return n.translate(0,0,-e/2),n}function Qf(){let e=new Ba;e.moveTo(-.2,0),e.lineTo(.2,0),e.lineTo(.2,.27),e.quadraticCurveTo(.2,.4,.075,.415),e.lineTo(.062,.445),e.absarc(0,.53,.095,-Math.PI*.32,Math.PI*1.32,!1),e.lineTo(-.062,.445),e.lineTo(-.075,.415),e.quadraticCurveTo(-.2,.4,-.2,.27),e.closePath();let t=new To(e,{depth:.17,bevelEnabled:!1,curveSegments:4});return t.translate(0,0,-.085),t}function $f(){let e=new Ba;e.moveTo(-.22,-.08),e.lineTo(.22,-.08),e.lineTo(.22,.07),e.lineTo(.11,.11),e.lineTo(.11,.36),e.quadraticCurveTo(0,.43,-.11,.36),e.lineTo(-.11,.11),e.lineTo(-.22,.07),e.closePath();let t=new To(e,{depth:.34,bevelEnabled:!1,curveSegments:3});return t.center(),t}var ep=class{root=new K;interactionAnchor=new wn;uniforms={time:{value:0},recovery:{value:0},emergency:{value:1}};screenMaterial;logoMaterial;indicatorMaterial;looseModule;ownedGeometries=[];constructor(e,t){this.root.name=`anc.damaged-led-cabinet`,this.screenMaterial=new Vo({name:`mat.led-cabinet.pixel-damage`,uniforms:this.uniforms,transparent:!1,depthWrite:!0,vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        precision highp float;
        varying vec2 vUv;
        uniform float time;
        uniform float recovery;
        uniform float emergency;

        float hash(vec2 p) {
          return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
        }

        void main() {
          vec2 moduleGrid = vec2(24.0, 14.0);
          vec2 cell = floor(vUv * moduleGrid);
          vec2 pixelUv = fract(vUv * moduleGrid);
          float deadSeed = hash(cell);
          float recovered = smoothstep(deadSeed - .1, deadSeed + .16, recovery);
          float moduleAlive = mix(step(.74, deadSeed), 1.0, recovered);
          float pixelMask = smoothstep(.22, .03, length(pixelUv - .5));
          float scan = .78 + .22 * sin((vUv.y * 760.0) + time * 18.0);
          float glitchBand = step(.93, hash(vec2(floor(time * 13.0), floor(vUv.y * 18.0))));
          float glitch = glitchBand * (1.0 - recovery) * sin(vUv.x * 91.0 + time * 32.0);
          vec3 failureColor = mix(vec3(.24, .012, .004), vec3(1.0, .16, .035), pixelMask);
          vec3 brandBlue = vec3(.039, .322, .937);
          vec3 brandCyan = vec3(0.0, .682, .937);
          vec3 showColor = mix(brandBlue, brandCyan, smoothstep(.1, .9, vUv.x + .12 * sin(time + vUv.y * 5.0)));
          vec3 color = mix(failureColor, showColor, recovery);
          color *= (.12 + pixelMask * scan) * moduleAlive;
          color += abs(glitch) * vec3(.7, .85, 1.0);
          color += emergency * (1.0 - recovery) * .035 * sin(time * 9.0);
          gl_FragColor = vec4(color, 1.0);
        }
      `});let n=qf(3.9,2.45,.32,.14),r=new Oo(3.52,2.04,1,1),i=new Y(.48,.055,.08),a=new Y(.38,.25,.12);this.ownedGeometries.push(n,r,i,a);let o=new J(n,e.gunmetal);o.castShadow=!0,o.receiveShadow=!0,this.root.add(o);let s=new J(r,this.screenMaterial);s.position.z=.175,this.root.add(s),this.logoMaterial=new ri({name:`mat.anc.cabinet-logo`,map:t,transparent:!0,opacity:0,color:`#ffffff`,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2});let c=new J(new Oo(2.55,.655),this.logoMaterial);this.ownedGeometries.push(c.geometry),c.position.set(0,.02,.183),this.root.add(c);for(let t=0;t<5;t+=1){let n=new J(i,e.decalDark);n.position.set(-1.55+t*.78,-1.09,.18),this.root.add(n)}this.looseModule=new J(a,e.gunmetal),this.looseModule.position.set(1.45,-.74,.3),this.looseModule.rotation.z=-.17,this.looseModule.castShadow=!0,this.root.add(this.looseModule),this.indicatorMaterial=e.emissiveAmber.clone(),this.indicatorMaterial.name=`mat.cabinet.service-indicator`;let l=new J(new ca(.045,.045,.025,12),this.indicatorMaterial);this.ownedGeometries.push(l.geometry),l.rotation.x=Math.PI/2,l.position.set(-1.72,-1.08,.21),this.root.add(l);let u=new J(new Mo(new ya([new W(1.5,-.9,0),new W(1.7,-1.5,.2),new W(1.1,-1.85,.28),new W(.7,-1.9,.52)]),18,.035,6,!1),e.rubber);this.ownedGeometries.push(u.geometry),u.castShadow=!0,this.root.add(u);let d=e.decalDark;for(let[e,t]of[[-.7,.75],[-.15,.55],[.5,.65]]){let n=new J(new Oo(t,.018),d);this.ownedGeometries.push(n.geometry),n.position.set(.92,.46,.188),n.rotation.z=e,this.root.add(n)}this.interactionAnchor.name=`anc.cabinet.repair-interaction`,this.interactionAnchor.position.set(0,0,1.25),this.root.add(this.interactionAnchor)}update(e,t){let n=H.clamp(t,0,1);this.uniforms.time.value=e,this.uniforms.recovery.value=n,this.uniforms.emergency.value=1-n,this.logoMaterial.opacity=H.smoothstep(n,.76,.98),this.indicatorMaterial.emissive.copy(n>.72?Kf.cyan:Kf.emergency),this.indicatorMaterial.color.copy(n>.72?Kf.cyan:Kf.emergency).multiplyScalar(.35),this.indicatorMaterial.emissiveIntensity=2.8+Math.sin(e*(n>.7?3:11))*1.4,this.looseModule.rotation.z=H.lerp(-.17,0,H.smoothstep(n,.35,.65)),this.looseModule.position.z=H.lerp(.3,.18,H.smoothstep(n,.35,.65))}dispose(){this.screenMaterial.dispose(),this.logoMaterial.dispose(),this.indicatorMaterial.dispose();for(let e of this.ownedGeometries)e.dispose()}},tp=class{root=new K;collision=[];spawns=[];objectiveAnchors={};diagnostics;ledCabinet;materials;ownsMaterials;logoTexture;ownedTextures=new Set;ownedMaterials=new Set;ownedGeometries=new Set;emergencyLights=[];workLights=[];showLights=[];revealLight;displayMaterials=[];logoMaterials=[];displaySurfaces=new Map;displaySignalOverrides=new Map;animatedFans=[];layerCounts={play:0,near:0,mid:0,far:0,motion:0};fieldSurface;instanceBatches=new Map;contactShadowMaterial;contactShadowGeometry;seatPlasticMaterial;fieldPaddingMaterial;showProgress;repairElapsed=-1;constructor(e={}){this.materials=e.materials??new Qd,this.ownsMaterials=e.materials===void 0,this.showProgress=H.clamp(e.initialShowProgress??0,0,1),this.root.name=`anc.stage-1-venue`,this.logoTexture=new fs().load(e.logoUrl??gd(`assets/brand/anc-white.png`),e=>{e.colorSpace=Le,e.anisotropy=8}),this.logoTexture.colorSpace=Le,this.buildPlayingSurface(),this.buildServiceTunnel(),this.buildTechnicalBay(),this.buildBowl(),this.buildBroadcastInfrastructure(),this.buildScoreboards(),this.buildFarStructure(),this.buildLightingPracticals(),this.ledCabinet=new ep(this.materials,this.logoTexture),this.ledCabinet.root.position.set(4.6,2.3,17.4),this.ledCabinet.root.rotation.y=-.18,this.root.add(this.ledCabinet.root),this.markLayer(this.ledCabinet.root,`near`);for(let[e,t]of[[3.35,17.62],[5.85,17.17]]){let n=Jf(new W(e,0,t),new W(e,1.12,t),.07,this.materials.steel,8);n.name=`venue.cabinet-stand-leg`,n.castShadow=!0,this.root.add(n),this.markLayer(n,`near`)}this.contactShadow(4.6,17.4,4.6,1.6,.021),this.finalizeInstanceBatches(),this.mergeStaticMeshes(),this.objectiveAnchors.ledRepair=this.ledCabinet.interactionAnchor,this.addCollision(`damaged-led-cabinet`,new W(4.6,2.3,17.4),new W(4.2,4.8,.8),`metal`,`high`),this.spawns.push({id:`service-entry`,position:new W(0,1.7,49),yaw:Math.PI,team:`blue`},{id:`loading-left`,position:new W(-5.8,1.7,25),yaw:Math.PI*.82,team:`blue`},{id:`field-opposite`,position:new W(0,1.7,-51),yaw:0,team:`red`},{id:`sideline-neutral`,position:new W(20,1.7,-20),yaw:-Math.PI/2,team:`neutral`});let t=this.countObjects();this.diagnostics={authoredMeshes:t.meshes,instancedMeshes:t.instancedMeshes,instances:t.instances,collisionBoxes:this.collision.length,spawnPoints:this.spawns.length,layers:{...this.layerCounts}},this.applyShowProgress(this.showProgress,0)}get phase(){return this.showProgress<.18?`emergency`:this.showProgress<.48?`isolated`:this.showProgress<.92?`synchronizing`:`show`}get repairProgress(){return this.showProgress}beginRepairSequence(){this.repairElapsed=0}setShowProgress(e){this.repairElapsed=-1,this.showProgress=H.clamp(e,0,1),this.applyShowProgress(this.showProgress,0)}get displayIds(){return Object.freeze(Array.from(this.displaySurfaces.keys()))}setDisplaySignalState(e,t){return this.displaySurfaces.has(e)?(t===`live`?this.displaySignalOverrides.delete(e):this.displaySignalOverrides.set(e,t),!0):!1}getDisplaySignalState(e){return this.displaySurfaces.has(e)?this.displaySignalOverrides.get(e)??`live`:null}resetDisplaySignalStates(){this.displaySignalOverrides.clear()}update(e,t,n){this.repairElapsed>=0&&(this.repairElapsed+=e,this.showProgress=H.smoothstep(this.repairElapsed/10.5,0,1),this.showProgress>=1&&(this.repairElapsed=-1)),this.applyShowProgress(this.showProgress,t),this.ledCabinet.update(t,this.showProgress);for(let t=0;t<this.animatedFans.length;t+=1)this.animatedFans[t].rotation.z+=e*(1.2+t*.07);if(n){let e=n.z>33?.62:1;for(let t of this.showLights)t.intensity*=H.lerp(.98,1,e)}}dispose(){this.ledCabinet.dispose(),this.logoTexture.dispose();for(let e of this.ownedTextures)e.dispose();for(let e of this.ownedGeometries)e.dispose();for(let e of this.ownedMaterials)e.dispose();this.ownsMaterials&&this.materials.dispose()}buildPlayingSurface(){let e=this.mesh(new Y(15.4,.35,43),this.materials.concreteDark,new W(0,-.17,34.5),`play`,`venue.tunnel-floor`);e.receiveShadow=!0,this.fieldSurface=Bf(48,74),this.ownedTextures.add(this.fieldSurface.map),this.ownedTextures.add(this.fieldSurface.roughnessMap);let t=new X({name:`mat.field.turf-painted`,map:this.fieldSurface.map,roughnessMap:this.fieldSurface.roughnessMap,roughness:.95,metalness:0});this.ownedMaterials.add(t);let n=this.mesh(new Oo(48,74,1,1),t,new W(0,0,-22),`play`,`venue.field`);n.rotation.x=-Math.PI/2,n.receiveShadow=!0;let r=new Image;r.onload=()=>this.fieldSurface?.stampEndZoneLogos(r),r.src=gd(`assets/brand/anc-white.png`);let i=this.mesh(new Y(56,.28,4),this.materials.asphalt,new W(0,-.125,13),`play`,`venue.service-apron`);i.receiveShadow=!0;for(let e of[-6.2,6.2]){let t=this.mesh(new Y(.14,.025,35),this.materials.warningPaint,new W(e,.025,35),`play`,`venue.tunnel-guidance-line`);t.receiveShadow=!0}this.buildFieldLevelDetail()}buildFieldLevelDetail(){for(let[e,t]of[[11,1],[-55,-1]]){let n=new K;n.name=`venue.goal-post`;let r=Jf(new W(0,0,e+t*1.7),new W(0,1.85,e),.11,this.materials.warningPaint,10);r.castShadow=!0;let i=Jf(new W(-1.71,1.85,e),new W(1.71,1.85,e),.07,this.materials.warningPaint,8);i.castShadow=!0,n.add(r,i);for(let t of[-1.71,1.71])n.add(Jf(new W(t,1.85,e),new W(t,6.4,e),.05,this.materials.warningPaint,8));this.root.add(n),this.markLayer(n,`play`,4),this.contactShadow(0,e+t*.85,2.2,2.2,.024)}let e=new Y(.11,.42,.11),t=new X({name:`mat.field.pylon`,color:`#ff5a1f`,roughness:.62,metalness:0});this.ownedMaterials.add(t);for(let n of[11,5.5,-49.5,-55])for(let r of[-14.66,14.66])this.batchInstance(`venue.field-pylon`,e,t,ap.compose(new W(r,.21,n),op,sp),`play`);let n=new Y(.52,.09,11),r=new Y(.07,.44,11),i=new Y(.5,.5,.1);this.ownedGeometries.add(n),this.ownedGeometries.add(r);for(let e of[-1,1])for(let t of[-31.5,-12.5]){let a=new K;a.name=`venue.team-bench`,a.position.set(e*17.6,0,t);let o=new J(n,this.materials.paintedSteel);o.position.y=.52,o.castShadow=!0;let s=new J(r,this.fieldPadding);s.position.set(e*.28,.82,0),a.add(o,s);for(let n of[-5.1,0,5.1])this.batchInstance(`venue.team-bench-leg`,i,this.materials.steel,ap.compose(new W(e*17.6,.26,t+n),op,sp),`play`);this.root.add(a),this.markLayer(a,`play`,2),this.addCollision(`team-bench-${e}-${t}`,a.position.clone().setY(.5),new W(.8,1,11),`metal`,`low`),this.contactShadow(e*17.6,t,1.6,11.6,.022)}let a=new Y(1.35,.85,.85),o=new ca(.11,.11,.07,10);this.ownedGeometries.add(a),this.ownedGeometries.add(o);for(let[e,t,n]of[[-17.4,1.6,.35],[17.8,-45.8,-.2]]){let r=new K;r.name=`venue.equipment-cart`,r.position.set(e,0,t),r.rotation.y=n;let i=new J(a,this.materials.polymer);i.position.y=.62,i.castShadow=!0,r.add(i);let s=new J(new Y(.5,.1,.06),this.materials.warningPaint);this.ownedGeometries.add(s.geometry),s.position.set(0,.72,.46),r.add(s);for(let[e,t]of[[-.5,-.32],[.5,-.32],[-.5,.32],[.5,.32]]){let n=new J(o,this.materials.rubber);n.rotation.x=Math.PI/2,n.position.set(e,.11,t),r.add(n)}this.root.add(r),this.markLayer(r,`play`,6),this.contactShadow(e,t,2,1.5,.021)}for(let[e,t,n]of[[-19.6,12.6,Math.PI*.78],[20,-57.4,-Math.PI*.22]]){let r=new K;r.name=`venue.camera-platform`,r.position.set(e,0,t),r.rotation.y=n;let i=new J(new Y(2.1,.12,2.1),this.materials.gunmetal);this.ownedGeometries.add(i.geometry),i.position.y=2.3,i.castShadow=!0,r.add(i);for(let[e,t]of[[-.9,-.9],[.9,-.9],[-.9,.9],[.9,.9]])r.add(Jf(new W(e,0,t),new W(e,2.24,t),.06,this.materials.steel,8));for(let e of[-1,1])r.add(Jf(new W(e*1,3.3,-1),new W(e*1,3.3,1),.03,this.materials.steel,6));r.add(Jf(new W(-1,3.3,-1),new W(1,3.3,-1),.03,this.materials.steel,6));let a=new J(new Y(.62,.4,.42),this.materials.polymer);this.ownedGeometries.add(a.geometry),a.position.set(0,2.85,.2),r.add(a);let o=new J(new ca(.1,.13,.34,12),this.materials.lens);this.ownedGeometries.add(o.geometry),o.rotation.x=Math.PI/2,o.position.set(0,2.85,.56),r.add(o),this.root.add(r),this.markLayer(r,`play`,10),this.contactShadow(e,t,2.8,2.8,.023)}}buildServiceTunnel(){let e=this.mesh(new Y(15.4,.3,45),this.materials.concreteDark,new W(0,6.35,34),`near`,`venue.tunnel-ceiling`);e.castShadow=!0,e.receiveShadow=!0;for(let e of[-8.05,8.05]){let t=this.mesh(new Y(.65,6.2,45),this.materials.concrete,new W(e,3.05,34),`near`,`venue.tunnel-wall`);t.castShadow=!0,t.receiveShadow=!0,this.addCollision(`tunnel-wall-${e}`,t.position,new W(.65,6.2,45),`concrete`,`wall`)}let t=new Y(.09,3.5,3.62);this.ownedGeometries.add(t);let n=new Ei(t,this.materials.paintedSteel,18);n.name=`venue.tunnel-wall-panels.instanced`,n.receiveShadow=!0;let r=new Xt,i=0;for(let e of[-1,1])for(let t=0;t<9;t+=1)Yf(r,new W(e*7.69,2.56,51-t*4.5),new sn,new W(1,1,1)),n.setMatrixAt(i,r),n.setColorAt(i,new q(t%3==0?`#929a96`:`#737d79`)),i+=1;n.instanceMatrix.needsUpdate=!0,n.instanceColor&&(n.instanceColor.needsUpdate=!0),this.root.add(n),this.markLayer(n,`near`);let a=new ca(.07,.07,42,8);this.ownedGeometries.add(a);for(let e of[-1,1]){let t=new J(a,this.materials.warningPaint);t.name=`venue.tunnel-crash-rail`,t.rotation.x=Math.PI/2,t.position.set(e*7.42,1.02,34.2),t.castShadow=!0,this.root.add(t),this.markLayer(t,`near`)}let o=this.materials.steel;for(let e=0;e<10;e+=1){let t=53-e*4.5,n=new K;n.name=`venue.tunnel-rib.${e}`;let r=Jf(new W(-7.65,0,t),new W(-7.65,6.2,t),.11,o,8),i=Jf(new W(7.65,0,t),new W(7.65,6.2,t),.11,o,8),a=Jf(new W(-7.65,6.2,t),new W(7.65,6.2,t),.11,o,8);n.add(r,i,a),this.root.add(n),this.markLayer(n,`near`,3)}let s=[this.materials.steel,this.materials.gunmetal,this.materials.warningPaint];for(let e=0;e<5;e+=1){let t=-6.9+e*.3,n=new ya([new W(t,4.7+e*.14,55),new W(t+.06,4.67+e*.14,39),new W(t-.08,4.72+e*.14,22),new W(t+.12,4.58+e*.14,12)]);this.mesh(new Mo(n,48,.045+e%2*.018,6,!1),s[e%s.length],new W,`near`,`venue.overhead-service-conduit`)}let c=new Y(2.4,.045,.22);this.ownedGeometries.add(c);for(let e=0;e<9;e+=1){let t=new J(c,this.materials.workLight);t.position.set(0,6.03,51-e*4.5),this.root.add(t),this.markLayer(t,`near`)}for(let e of[-1,1]){let t=Jf(new W(e*7.45,.4,11.8),new W(e*4.8,6,11.8),.17,this.materials.warningPaint,10);t.name=`venue.tunnel-reveal-brace`,t.castShadow=!0,this.root.add(t),this.markLayer(t,`near`)}this.buildAncOperationsGate();let l=this.createBrandDisplay(5.4,1.45,`TUNNEL BRAND HEADER`);l.position.set(0,4.55,11.35),this.root.add(l),this.markLayer(l,`near`,3)}buildAncOperationsGate(){let e=new K;e.name=`venue.anc-field-operations-gate`,e.position.z=39.4;let t=qf(9.2,1.18,.24,.1),n=new Y(.18,5.35,.22),r=new Y(9.45,.075,.08);this.ownedGeometries.add(t),this.ownedGeometries.add(n),this.ownedGeometries.add(r);let i=new J(t,this.materials.gunmetal);i.position.set(0,5.12,0),i.castShadow=!0,e.add(i);for(let t of[-4.62,4.62]){let r=new J(n,this.materials.paintedSteel);r.position.set(t,2.55,.03),r.castShadow=!0,e.add(r)}let a=new J(r,this.materials.ancBlue);a.position.set(0,4.55,.16),e.add(a);let o=new Oo(2.65,.68),s=new ri({map:this.logoTexture,transparent:!0,depthWrite:!1,toneMapped:!1});this.ownedGeometries.add(o),this.ownedMaterials.add(s);let c=new J(o,s);c.position.set(-2.72,5.16,.31),e.add(c);let l=this.createOperationsLabelTexture(`VENUE TECHNOLOGY`,`FIELD OPERATIONS // RECOVERY ROUTE`),u=new Oo(4.65,.78),d=new ri({map:l,transparent:!0,depthWrite:!1,toneMapped:!1});this.ownedGeometries.add(u),this.ownedMaterials.add(d);let f=new J(u,d);f.position.set(2.03,5.11,.315),e.add(f);for(let[t,n,r]of[[-7.66,`ANC DISPLAY CONTROL`,`PROCESSOR · FIBER · CABINET NETWORK`],[7.66,`ANC VENUE SERVICES`,`FIELD OPERATIONS · EVENT SUPPORT`]]){let i=this.createOperationsLabelTexture(n,r),a=new Oo(3.7,1.18),o=new ri({map:i,toneMapped:!1});this.ownedGeometries.add(a),this.ownedMaterials.add(o);let s=new J(a,o);s.position.set(t,3.25,t<0?5.3:-4.9),s.rotation.y=t<0?Math.PI/2:-Math.PI/2,e.add(s)}this.root.add(e),this.markLayer(e,`near`,10)}createOperationsLabelTexture(e,t){let n=document.createElement(`canvas`);n.width=1024,n.height=256;let r=n.getContext(`2d`);if(!r)throw Error(`Unable to create ANC operations label texture.`);r.fillStyle=`#002C73`,r.fillRect(0,0,n.width,n.height),r.fillStyle=`#0A52EF`,r.fillRect(0,0,22,n.height),r.fillStyle=`#03B8FF`,r.fillRect(48,42,82,8),r.fillStyle=`#FFFFFF`,r.font=`700 58px Arial, sans-serif`,r.fillText(e,48,132),r.fillStyle=`rgba(255,255,255,.68)`,r.font=`500 24px monospace`,r.fillText(t,50,188),r.strokeStyle=`rgba(255,255,255,.16)`,r.strokeRect(38,28,954,198);let i=new na(n);return i.colorSpace=Le,i.anisotropy=8,this.ownedTextures.add(i),i}buildTechnicalBay(){let e=qf(1.25,2.55,.82,.1),t=new Y(1.01,.16,.05),n=new Y(.035,.035,.025);this.ownedGeometries.add(e),this.ownedGeometries.add(t),this.ownedGeometries.add(n);let r=[[-6.85,1.28,20,`RENDER A-01`,`PRIMARY OUT 01-02 · 4TB`],[-6.85,1.28,23.1,`RENDER A-02`,`DEDICATED BACKUP · SYNC`],[-6.85,1.28,26.2,`MATRIX 16×16`,`IN 01-08 · GENLOCK TRI-LEVEL`],[6.85,1.28,22.2,`UI-A / UI-B`,`CONTENT LIBRARY · 2×8TB`],[6.85,1.28,25.3,`FIBER / KVM`,`RISER 01 · SCORING RS-232`]],i=new Oo(1.05,.26);this.ownedGeometries.add(i);for(let a=0;a<r.length;a+=1){let[o,s,c,l,u]=r[a],d=this.mesh(e,this.materials.paintedSteel,new W(o,s,c),`near`,`venue.technical-rack`);d.rotation.y=o<0?Math.PI/2:-Math.PI/2,d.castShadow=!0;for(let e=0;e<10;e+=1){let r=new J(t,e%4==0?this.materials.ancBlue:this.materials.polymer);r.position.set(0,-.96+e*.205,.432),d.add(r);let i=new J(n,e%3==0?this.materials.ancCyan:this.materials.emissiveAmber);i.position.set(.37,-.96+e*.205,.465),d.add(i)}let f=Uf(l,u);this.ownedTextures.add(f);let p=new ri({map:f,toneMapped:!1});this.ownedMaterials.add(p);let m=new J(i,p);m.position.set(0,1.16,.46),d.add(m),this.addCollision(`technical-rack-${a}`,d.position,new W(.9,2.6,1.3),`metal`,`high`),this.contactShadow(o,c,1.9,1.4,.022)}let a=qf(1.65,.78,.76,.12),o=new Y(1.72,.055,.82);this.ownedGeometries.add(a),this.ownedGeometries.add(o);let s=[[-4.4,.44,31.2,.08],[-2.5,.44,28.7,-.13],[5.3,.44,30,.19],[4.8,.44,35.2,-.07],[-5.1,1.24,31.2,.08],[6.1,.44,42,.24]];for(let e=0;e<s.length;e+=1){let[t,n,r,i]=s[e],c=new K;c.name=`venue.flight-case.${e}`,c.position.set(t,n,r),c.rotation.y=i;let l=new J(a,this.materials.polymer);l.castShadow=!0,c.add(l);for(let e of[-.38,.38]){let t=new J(o,this.materials.steel);t.position.y=e,c.add(t)}let u=new J(new Y(.24,.2,.05),this.materials.warningPaint);this.ownedGeometries.add(u.geometry),u.position.set(0,0,.405),c.add(u),this.root.add(c),this.markLayer(c,`near`,4),this.addCollision(`flight-case-${e}`,c.position,new W(1.8,.9,.9),`metal`,`low`),this.contactShadow(t,r,2.2,1.25,.021)}for(let e=0;e<8;e+=1){let t=26+e*2.1,n=new ya([new W(-6.2,.06,t),new W(-2.6,.045,t+.6),new W(1.2,.05,t-.45),new W(5.9,.06,t+.25)]);this.mesh(new Mo(n,30,.018+e%3*.008,5,!1),e%4==0?this.materials.ancBlue:this.materials.rubber,new W,`near`,`venue.floor-cable`)}}buildBowl(){let e=Xf(68);this.ownedGeometries.add(e);let t=this.mesh(e,this.materials.concrete,new W(-25,0,-22),`mid`,`venue.seating-tier.left`);t.scale.x=-1,t.castShadow=!0,t.receiveShadow=!0;let n=this.mesh(e,this.materials.concrete,new W(25,0,-22),`mid`,`venue.seating-tier.right`);n.castShadow=!0,n.receiveShadow=!0,this.addCollision(`seating-left`,new W(-31.5,4.2,-22),new W(13,8.4,68),`concrete`,`wall`),this.addCollision(`seating-right`,new W(31.5,4.2,-22),new W(13,8.4,68),`concrete`,`wall`);let r=Zf(68);this.ownedGeometries.add(r);for(let e of[-1,1]){let t=new J(r,this.materials.concrete);t.name=`venue.seating-tier.upper.${e<0?`left`:`right`}`,t.position.set(e*38.6,11.45,-22),e<0&&(t.scale.x=-1),t.castShadow=!0,t.receiveShadow=!0,this.root.add(t),this.markLayer(t,`mid`),this.addCollision(`seating-upper-${e}`,new W(e*42.4,14.5,-22),new W(8,6.4,68),`concrete`,`wall`)}let i=$f();this.ownedGeometries.add(i);let a=new Set([3,11,19,27,35,43]),o=e=>-53.5+e*1.47,s=[],c=[],l=[],u=[],d=[],f=[],p=[new q(`#1d47b8`),new q(`#16357f`),new q(`#0f2a66`),new q(`#3f6fe0`)],m=[new q(`#2b2f38`),new q(`#3d3a33`),new q(`#20242c`),new q(`#43302e`),new q(`#33415c`),new q(`#514a3f`)],h=(e,t,n,r,i)=>{for(let h=0;h<44;h+=1){if(a.has(h))continue;let g=o(h),_=e<0?Math.PI/2:-Math.PI/2;s.push(new W(e*t,n,g)),c.push(_);let v=(i*31+h*7)%29==0?3:(i+Math.floor(h/8))%3;l.push(p[v]),(i*13+h*29+(e<0?7:0))%10<r&&(u.push(new W(e*t,n+.14,g)),d.push(_),f.push(m[(i*7+h*3+ +(e<0))%m.length]))}};for(let e of[-1,1]){for(let t=0;t<10;t+=1)h(e,27.05+t*1.08,.83+t*.76,3,t);for(let t=0;t<5;t+=1)h(e,39.5+t*1.16,12.4+t*.98,2,t+10)}let g=new Ei(i,this.seatPlastic,s.length);g.name=`venue.seats.instanced`,g.castShadow=!1,g.receiveShadow=!0;let _=new Xt;for(let e=0;e<s.length;e+=1)Yf(_,s[e],new sn(0,c[e],0),new W(.94,.94,.94)),g.setMatrixAt(e,_),g.setColorAt(e,l[e]);g.instanceMatrix.needsUpdate=!0,g.instanceColor&&(g.instanceColor.needsUpdate=!0),this.root.add(g),this.markLayer(g,`mid`);let v=Qf();this.ownedGeometries.add(v);let y=new X({name:`mat.crowd.silhouette`,color:`#ffffff`,roughness:.92,metalness:0});this.ownedMaterials.add(y);let b=new Ei(v,y,u.length);b.name=`venue.crowd.instanced`;for(let e=0;e<u.length;e+=1)Yf(_,u[e],new sn(0,d[e],0),new W(1,1,1)),b.setMatrixAt(e,_),b.setColorAt(e,f[e]);b.instanceMatrix.needsUpdate=!0,b.instanceColor&&(b.instanceColor.needsUpdate=!0),this.root.add(b),this.markLayer(b,`mid`);let x=Gf();this.ownedTextures.add(x);let S=new X({name:`mat.bowl.aisle-tread`,map:x,roughness:.88,metalness:0});this.ownedMaterials.add(S);let C=new Y(1.08,.24,1.18);this.ownedGeometries.add(C);let w=Array.from(a.values()),T=new Ei(C,S,w.length*2*15);T.name=`venue.aisle-treads.instanced`;let E=0;for(let e of[-1,1])for(let t of w){let n=o(t);for(let t=0;t<10;t+=1)Yf(_,new W(e*(27.55+t*1.08),1.33+t*.76,n),new sn,new W(1,1,1)),T.setMatrixAt(E,_),E+=1;for(let t=0;t<5;t+=1)Yf(_,new W(e*(40.03+t*1.16),12.89+t*.98,n),new sn,new W(1.07,1.08,1)),T.setMatrixAt(E,_),E+=1}T.instanceMatrix.needsUpdate=!0,this.root.add(T),this.markLayer(T,`mid`);let D=new ca(.03,.03,Math.hypot(10.4,7.1),6);for(let e of[-1,1]){let t=new Dt().setFromUnitVectors(cp,new W(e*10.4,7.1,0).normalize());for(let n of w){let r=o(n);this.batchInstance(`venue.aisle-handrail`,D,this.materials.steel,ap.compose(new W(e*32.4,5.9,r),t,sp),`mid`)}}let ee=new Y(3.2,2.1,2.3),O=new Oo(2.1,1.7),k=new ri({name:`mat.bowl.vomitory-void`,color:`#04070c`});this.ownedMaterials.add(k);for(let e of[-1,1]){let t=new Dt().setFromEuler(new sn(0,e<0?Math.PI/2:-Math.PI/2,0));for(let n of[11,35]){let r=o(n);this.batchInstance(`venue.vomitory-housing`,ee,this.materials.concreteDark,ap.compose(new W(e*30.7,3.25,r),op,sp),`mid`,!0),this.batchInstance(`venue.vomitory-mouth`,O,k,ap.compose(new W(e*29.05,3.3,r),t,sp),`mid`)}}let te=Hf(30);this.ownedTextures.add(te.map),this.ownedTextures.add(te.emissiveMap);let A=new X({name:`mat.bowl.suite-glazing`,map:te.map,emissiveMap:te.emissiveMap,emissive:`#ffffff`,emissiveIntensity:.8,roughness:.35,metalness:.3});this.ownedMaterials.add(A);let j=new Oo(68,2.6);this.ownedGeometries.add(j);let ne=new Y(.34,.5,.3);this.ownedGeometries.add(ne);for(let e of[-1,1]){let t=new J(j,A);t.name=`venue.suite-band`,t.position.set(e*38.45,10.35,-22),t.rotation.y=e<0?Math.PI/2:-Math.PI/2,this.root.add(t),this.markLayer(t,`mid`);let n=this.mesh(new Y(.5,1.6,68),this.materials.paintedSteel,new W(e*38.3,8.35,-22),`mid`,`venue.suite-fascia`);n.castShadow=!0;let r=this.createBrandDisplay(45,.85,e<0?`RIBBON WEST`:`RIBBON EAST`,{columns:45,rows:1});r.position.set(e*37.95,8.45,-22),r.rotation.y=e<0?Math.PI/2:-Math.PI/2,this.root.add(r),this.markLayer(r,`mid`,3);for(let t=0;t<7;t+=1)this.batchInstance(`venue.ribbon-mount`,ne,this.materials.steel,ap.compose(new W(e*38.18,7.95,-52+t*10),op,sp),`mid`);let i=Jf(new W(e*38.75,12.35,-56),new W(e*38.75,12.35,12),.04,this.materials.steel,6);i.name=`venue.upper-deck-rail`,this.root.add(i),this.markLayer(i,`mid`)}let re=new Y(.3,1.12,68);this.ownedGeometries.add(re);for(let e of[-1,1]){let t=new J(re,this.fieldPadding);t.name=`venue.field-wall-padding`,t.position.set(e*24.72,.56,-22),t.castShadow=!0,t.receiveShadow=!0,this.root.add(t),this.markLayer(t,`mid`)}let M=new ca(.045,.045,68,6);this.ownedGeometries.add(M);for(let e of[-1,1]){let t=new J(M,this.materials.steel);t.rotation.x=Math.PI/2,t.position.set(e*24.6,1.32,-22),this.root.add(t),this.markLayer(t,`mid`)}}buildBroadcastInfrastructure(){for(let e of[-1,1]){let t=e*31.8,n=this.mesh(new Y(2.2,.22,48),this.materials.gunmetal,new W(t,10.2,-22),`far`,`venue.broadcast-catwalk`);n.castShadow=!0;let r=new ca(.035,.035,48,6);this.ownedGeometries.add(r);for(let e of[-.92,.92]){let n=new J(r,this.materials.steel);n.rotation.x=Math.PI/2,n.position.set(t+e,11.05,-22),this.root.add(n),this.markLayer(n,`far`)}for(let n=-44;n<=0;n+=4)this.batchInstance(`venue.catwalk-post`,lp,this.materials.steel,ap.compose(new W(t-e*.92,10.72,n),op,sp),`far`)}let e=new W(0,16,-22),t=5.2,n=[];for(let r=0;r<8;r+=1){let i=r/8*Math.PI*2;n.push(new W(Math.cos(i)*t,e.y,e.z+Math.sin(i)*t))}for(let e=0;e<n.length;e+=1){let t=n[e],r=n[(e+1)%n.length],i=Jf(t,r,.08,this.materials.steel,8);this.root.add(i),this.markLayer(i,`far`);let a=Jf(t,new W(t.x*1.3,25,t.z),.025,this.materials.gunmetal,6);this.root.add(a),this.markLayer(a,`far`)}let r=qf(1.8,1.2,1.1,.18);this.ownedGeometries.add(r);for(let e of[new W(-31.8,11.2,-10),new W(31.8,11.2,-33)]){let t=this.mesh(r,this.materials.paintedSteel,e,`far`,`venue.broadcast-camera-pod`),n=new J(new ca(.18,.24,.42,16),this.materials.lens);this.ownedGeometries.add(n.geometry),n.rotation.z=Math.PI/2,n.position.x=e.x>0?-.8:.8,t.add(n)}}buildScoreboards(){let e=new K;e.name=`venue.center-hung-display`,e.position.set(0,13.2,-22);let t=new J(new ca(2.9,2.9,3.9,8),this.materials.gunmetal);this.ownedGeometries.add(t.geometry),t.castShadow=!0,e.add(t);for(let t=0;t<4;t+=1){let n=this.createBrandDisplay(4.6,2.45,`CENTER HUNG ${t}`,{columns:8,rows:4}),r=t*Math.PI/2;n.position.set(Math.sin(r)*3,0,Math.cos(r)*3),n.rotation.y=r,e.add(n)}let n=new J(new jo(3.1,.09,8,40),this.materials.steel);this.ownedGeometries.add(n.geometry),n.rotation.x=Math.PI/2,n.position.y=-2.1,e.add(n);let r=new J(new ca(2.55,2.55,.12,8),this.materials.gunmetal);this.ownedGeometries.add(r.geometry),r.position.y=-2.02,e.add(r),this.root.add(e),this.markLayer(e,`far`,16);for(let e=0;e<4;e+=1){let t=e*Math.PI/2+Math.PI/4,n=Jf(new W(Math.cos(t)*4.6,16,-22+Math.sin(t)*4.6),new W(Math.cos(t)*2.4,15.05,-22+Math.sin(t)*2.4),.06,this.materials.steel,6);n.name=`venue.center-hung-drop-strut`,this.root.add(n),this.markLayer(n,`far`)}let i=this.createBrandDisplay(16,6.4,`END ZONE SCOREBOARD`,{columns:10,rows:4});i.position.set(0,15.8,-58.5),this.root.add(i),this.markLayer(i,`far`,3);let a=this.mesh(new Y(16.3,6.6,.85),this.materials.paintedSteel,new W(0,15.8,-59.25),`far`,`venue.main-board-cabinet-rack`);a.castShadow=!0;let o=new Y(1.7,.5,.07);for(let e=0;e<6;e+=1)this.batchInstance(`venue.main-board-cooling`,o,this.materials.rubber,ap.compose(new W(-6.4+e*2.56,18.5,-59.7),op,sp),`far`);for(let e of[-6.6,6.6]){let t=Jf(new W(e,7.2,-58.9),new W(e,19.5,-58.9),.26,this.materials.steel,10);t.castShadow=!0,this.root.add(t),this.markLayer(t,`far`);let n=Jf(new W(e,8.1,-58.9),new W(e*.42,12.15,-58.9),.09,this.materials.steel,8);this.root.add(n),this.markLayer(n,`far`)}let s=Jf(new W(-6.9,19.5,-58.9),new W(6.9,19.5,-58.9),.17,this.materials.steel,8);s.castShadow=!0,this.root.add(s),this.markLayer(s,`far`);let c=this.mesh(new Y(15.6,.14,1.1),this.materials.gunmetal,new W(0,12.2,-59.15),`far`,`venue.main-board-catwalk`);c.castShadow=!0;let l=Jf(new W(-7.7,13.15,-59.62),new W(7.7,13.15,-59.62),.035,this.materials.steel,6);this.root.add(l),this.markLayer(l,`far`);let u=new ca(.03,.03,.95,6);for(let e=0;e<5;e+=1)this.batchInstance(`venue.main-board-rail-post`,u,this.materials.steel,ap.compose(new W(-7.4+e*3.7,12.72,-59.62),op,sp),`far`);let d=new ca(.025,.025,.5,6),f=new Dt().setFromEuler(new sn(0,0,Math.PI/2));for(let e of[-.25,.25]){let t=Jf(new W(7.15+e,7.3,-59.55),new W(7.15+e,12.15,-59.55),.035,this.materials.steel,6);this.root.add(t),this.markLayer(t,`far`)}for(let e=0;e<9;e+=1)this.batchInstance(`venue.main-board-ladder-rung`,d,this.materials.steel,ap.compose(new W(7.15,7.6+e*.52,-59.55),f,sp),`far`);let p=this.mesh(qf(1.5,2,.7,.08),this.materials.paintedSteel,new W(8.5,1.02,-57.4),`far`,`venue.display-processor-cabinet`);p.castShadow=!0;let m=Uf(`DISPLAY PROCESSOR A`,`660 PRO · 12 PORT · FIBER RISER 01`);this.ownedTextures.add(m);let h=new ri({map:m,toneMapped:!1});this.ownedMaterials.add(h);let g=new J(new Oo(1.16,.29),h);this.ownedGeometries.add(g.geometry),g.position.set(8.5,1.68,-57.04),this.root.add(g),this.markLayer(g,`far`);let _=new J(new Y(.09,.09,.04),this.materials.emissiveCyan);this.ownedGeometries.add(_.geometry),_.position.set(9,1.3,-57.04),this.root.add(_),this.markLayer(_,`far`);let v=new J(new Mo(new ya([new W(8.2,1.9,-57.7),new W(7.4,3.4,-58.4),new W(6.7,6.8,-58.85),new W(6.6,9.5,-58.9)]),20,.05,6,!1),this.materials.rubber);this.ownedGeometries.add(v.geometry),v.name=`venue.main-board-signal-riser`,this.root.add(v),this.markLayer(v,`far`),this.contactShadow(8.5,-57.4,2.4,1.8,.024)}buildFarStructure(){let e=this.materials.paintedSteel;for(let t of[-1,1])for(let n=0;n<7;n+=1){let r=-55+n*11,i=Jf(new W(t*38,7.8,r),new W(t*45,19.5,r),.16,e,10);i.castShadow=!0,this.root.add(i),this.markLayer(i,`far`)}let t=new ca(.35,.55,25,8);this.ownedGeometries.add(t);let n=new sa(.18,12),r=new wn,i=new Xt;for(let[e,a]of[[-43,-48],[43,-48],[-43,1],[43,1]]){let o=this.mesh(t,this.materials.steel,new W(e,12.5,a),`far`,`venue.light-tower`);o.castShadow=!0,r.position.set(e,24.8,a),r.lookAt(0,0,-22),r.updateMatrix();let s=this.mesh(new Y(3.5,1.7,.16),this.materials.paintedSteel,new W(e,24.8,a),`far`,`venue.flood-bank-plate`);s.quaternion.copy(r.quaternion),s.translateZ(-.1);for(let e=0;e<3;e+=1)for(let t=0;t<7;t+=1)i.makeTranslation((t-3)*.46,(e-1)*.45,.02),this.batchInstance(`venue.flood-bank-lamp`,n,this.materials.ancBright,ap.copy(r.matrix).multiply(i),`far`)}let a=new Y(9.5,.2,80);this.ownedGeometries.add(a);for(let e of[-1,1]){let t=new J(a,this.materials.gunmetal);t.name=`venue.roof-canopy`,t.position.set(e*43.8,18.9,-22),t.rotation.z=-e*.16,t.castShadow=!0,this.root.add(t),this.markLayer(t,`far`);let n=Jf(new W(e*39.4,19.55,-60),new W(e*39.4,19.55,16),.14,this.materials.paintedSteel,8);n.name=`venue.roof-edge-beam`,this.root.add(n),this.markLayer(n,`far`)}let o=this.mesh(new Y(100,14,1.2),this.materials.concreteDark,new W(0,7,-63.5),`far`,`venue.north-enclosure-wall`);o.receiveShadow=!0;let s=this.mesh(new Y(100,.5,.3),this.materials.paintedSteel,new W(0,13.6,-62.85),`far`,`venue.north-enclosure-parapet`);s.castShadow=!0;let c=new ri({color:`#c2ccd9`,map:this.createCityWindowTexture(),fog:!0});this.ownedMaterials.add(c);let l=new Y(1,1,1);this.ownedGeometries.add(l);let u=new Ei(l,c,46);u.name=`venue.far-city-silhouette`;let d=new Xt;for(let e=0;e<46;e+=1){let t=-84+e*3.9+e*13%5*.6,n=6+e*17%23*.6+(e%6==0?7:0),r=-82-e*11%19,i=2.6+e%4*.9;Yf(d,new W(t,n/2,r),new sn(0,(e*29%7-3)*.055,0),new W(i,n,2.6+e%3)),u.setMatrixAt(e,d)}u.instanceMatrix.needsUpdate=!0,this.root.add(u),this.markLayer(u,`far`)}createCityWindowTexture(){let e=document.createElement(`canvas`);e.width=128,e.height=256;let t=e.getContext(`2d`);if(!t)throw Error(`Unable to create skyline window texture.`);t.fillStyle=`#0b1220`,t.fillRect(0,0,128,256);let n=40503,r=()=>(n=n*1664525+1013904223>>>0,n/4294967295);for(let e=8;e<250;e+=9)for(let n=6;n<122;n+=8){let i=r();i>.6&&(t.fillStyle=i>.92?`rgba(255,222,170,0.85)`:i>.78?`rgba(210,225,245,0.5)`:`rgba(140,170,205,0.32)`,t.fillRect(n,e,4.6,5.2))}let i=new na(e);return i.colorSpace=Le,this.ownedTextures.add(i),i}buildLightingPracticals(){for(let e=0;e<3;e+=1){let t=47-e*13.4,n=new As(Kf.emergency,2.2,13,1.8);n.name=`venue.emergency-practical`,n.position.set(e%2==0?-6.8:6.8,4.8,t),this.emergencyLights.push(n),this.root.add(n),this.markLayer(n,`near`)}for(let e=0;e<4;e+=1){let t=new As(`#dce8e4`,30,18,1.55);t.name=`venue.tunnel-worklight`,t.position.set(0,5.65,49-e*11.8),t.castShadow=!1,this.workLights.push(t),this.root.add(t),this.markLayer(t,`near`)}this.revealLight=new As(`#a9c2cf`,190,48,1.5),this.revealLight.name=`venue.bowl-reveal-fill`,this.revealLight.position.set(0,8.5,7.5),this.revealLight.castShadow=!1,this.root.add(this.revealLight),this.markLayer(this.revealLight,`mid`);for(let[e,t]of[[-43,-48],[43,-48],[-43,1],[43,1]]){let n=new Os(`#eef4f8`,0,95,.52,.55,1.15);n.name=`venue.show-spot`,n.position.set(e,24.6,t),n.target.position.set(Math.sign(e)*9,0,t<-20?-36:-8),n.castShadow=!1,this.showLights.push(n),this.root.add(n,n.target),this.markLayer(n,`motion`)}let e=new Y(.08,.85,.055);this.ownedGeometries.add(e);for(let t=0;t<4;t+=1){let n=new K;n.name=`venue.ventilation-fan`,n.position.set(t%2==0?-7.68:7.68,4.2,45-t*8.5),n.rotation.y=t%2==0?Math.PI/2:-Math.PI/2;for(let t=0;t<5;t+=1){let r=new J(e,this.materials.steel);r.rotation.z=t/5*Math.PI*2,r.position.y=Math.sin(r.rotation.z)*.42,r.position.x=Math.cos(r.rotation.z)*.42,n.add(r)}this.animatedFans.push(n),this.root.add(n),this.markLayer(n,`motion`,5)}}createBrandDisplay(e,t,n,r){let i=new K,a=n.toLowerCase().replaceAll(` `,`-`);i.name=`venue.display.${a}`;let o=qf(e+.28,t+.28,.26,Math.min(.14,t*.08)),s=new Oo(e,t),c=272/1060,l=Math.min(e*.34,t*.62/c),u=new Oo(l,l*c);this.ownedGeometries.add(o),this.ownedGeometries.add(s),this.ownedGeometries.add(u);let d=new J(o,this.materials.gunmetal);d.castShadow=!0,i.add(d);let f=new X({name:`mat.display.${n}`,color:`#061b46`,emissive:`#0a52ef`,emissiveIntensity:0,roughness:.38,metalness:.05});if(r){let e=Vf(r.columns,r.rows);this.ownedTextures.add(e),f.map=e,f.emissiveMap=e}this.displayMaterials.push(f),this.ownedMaterials.add(f);let p=new J(s,f);p.position.z=.142,i.add(p);let m=new ri({name:`mat.logo.${n}`,map:this.logoTexture,color:`#ffffff`,transparent:!0,opacity:0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2});this.logoMaterials.push(m),this.ownedMaterials.add(m);let h=new J(u,m);h.position.z=.149,i.add(h);let g=new ri({color:`#4f86ff`,transparent:!0,opacity:.15,depthWrite:!1});this.ownedMaterials.add(g);let _=[];for(let n=0;n<5;n+=1){let r=new Oo(e*.95,.012);r.translate(0,-t*.35+n*t*.17,0),_.push(r)}let v=Ff(_,!1);for(let e of _)e.dispose();if(v){this.ownedGeometries.add(v);let e=new J(v,g);e.position.z=.151,i.add(e)}return this.displaySurfaces.set(a,{id:a,display:f,logo:m,scan:g}),i}batchInstance(e,t,n,r,i,a=!1){let o=this.instanceBatches.get(e);o||(this.ownedGeometries.add(t),o={geometry:t,material:n,matrices:[],layer:i,castShadow:a},this.instanceBatches.set(e,o)),o.matrices.push(r.clone())}finalizeInstanceBatches(){for(let[e,t]of this.instanceBatches){let n=new Ei(t.geometry,t.material,t.matrices.length);n.name=`${e}.instanced`,n.castShadow=t.castShadow;for(let e=0;e<t.matrices.length;e+=1)n.setMatrixAt(e,t.matrices[e]);n.instanceMatrix.needsUpdate=!0,e===`venue.contact-shadow`&&(n.renderOrder=1),this.root.add(n),this.markLayer(n,t.layer,t.matrices.length)}this.instanceBatches.clear()}mergeStaticMeshes(){let e=new Set([this.materials.steel,this.materials.paintedSteel,this.materials.gunmetal,this.materials.concrete,this.materials.concreteDark,this.materials.rubber,this.materials.polymer,this.materials.warningPaint,this.materials.asphalt,this.materials.ancBlue,this.materials.ancCyan,this.materials.ancBright,this.materials.workLight,this.materials.emissiveAmber,this.fieldPadding]),t=new Set([this.ledCabinet.root,...this.animatedFans]),n=e=>{for(let n=e;n;n=n.parent)if(t.has(n))return!0;return!1};this.root.updateMatrixWorld(!0);let r=new Map,i=[];this.root.traverse(t=>{if(!(t instanceof J)||t instanceof Ei)return;let a=t.material;if(!e.has(a)||n(t)||t.matrixWorld.determinant()<0)return;let o=t.geometry.index?t.geometry.toNonIndexed():t.geometry.clone();o.applyMatrix4(t.matrixWorld);for(let e of Object.keys(o.attributes))e!==`position`&&e!==`normal`&&e!==`uv`&&o.deleteAttribute(e);let s=r.get(a);s||(s=[],r.set(a,s)),s.push(o),i.push(t)});for(let e of i)e.removeFromParent();for(let[e,t]of r){let n=Ff(t,!1);for(let e of t)e.dispose();if(!n)continue;this.ownedGeometries.add(n);let r=new J(n,e);r.name=`venue.merged-static.${e.name}`,r.castShadow=!0,r.receiveShadow=!0,this.root.add(r)}}contactShadow(e,t,n,r,i=.02){if(!this.contactShadowMaterial||!this.contactShadowGeometry){let e=Wf();this.ownedTextures.add(e),this.contactShadowMaterial=new ri({name:`mat.contact-shadow`,map:e,transparent:!0,depthWrite:!1,opacity:.8}),this.ownedMaterials.add(this.contactShadowMaterial),this.contactShadowGeometry=new Oo(1,1)}this.batchInstance(`venue.contact-shadow`,this.contactShadowGeometry,this.contactShadowMaterial,ap.compose(new W(e,i,t),new Dt().setFromEuler(new sn(-Math.PI/2,0,0)),new W(n,r,1)),`near`)}get fieldPadding(){return this.fieldPaddingMaterial||(this.fieldPaddingMaterial=new X({name:`mat.field.padded-vinyl`,color:`#123a9e`,roughness:.82,metalness:0}),this.ownedMaterials.add(this.fieldPaddingMaterial)),this.fieldPaddingMaterial}get seatPlastic(){return this.seatPlasticMaterial||(this.seatPlasticMaterial=new X({name:`mat.seat.stadium-plastic`,color:`#ffffff`,roughness:.62,metalness:.04}),this.ownedMaterials.add(this.seatPlasticMaterial)),this.seatPlasticMaterial}mesh(e,t,n,r,i){this.ownedGeometries.add(e);let a=new J(e,t);return a.name=i,a.position.copy(n),a.userData.visualLayer=r,this.root.add(a),this.markLayer(a,r),a}addCollision(e,t,n,r,i){let a=n.clone().multiplyScalar(.5);this.collision.push({id:e,bounds:new Jn(t.clone().sub(a),t.clone().add(a)),surface:r,coverHeight:i})}markLayer(e,t,n=1){e.userData.visualLayer=t,this.layerCounts[t]+=n}applyShowProgress(e,t){let n=H.smoothstep(e,.12,.38),r=H.smoothstep(e,.38,.84),i=H.smoothstep(e,.72,1);for(let e=0;e<this.emergencyLights.length;e+=1){let r=Math.sin(t*15+e*2.17)>.36?1:.42,i=e%3==0?Kf.emergency:np;this.emergencyLights[e].intensity=H.lerp(46*r,18,n),this.emergencyLights[e].color.copy(i).lerp(rp,n)}for(let e=0;e<this.workLights.length;e+=1){let r=.92+Math.sin(t*.7+e)*.08;this.workLights[e].intensity=H.lerp(24,38,n)*r,this.workLights[e].color.copy(rp).lerp(ip,i*.45)}this.revealLight&&(this.revealLight.intensity=H.lerp(190,245,r));for(let n=0;n<this.displayMaterials.length;n+=1){let a=n/Math.max(1,this.displayMaterials.length)*.23,o=H.smoothstep(r,a,Math.min(1,a+.42)),s=e<.82&&Math.sin(t*23+n*1.7)>.78?.2:1,c=this.displayMaterials[n];c.emissiveIntensity=o*3.2*s,c.emissive.copy(Kf.blue).lerp(Kf.cyan,i*.44),c.color.copy(Kf.dark).lerp(Kf.blue,o*.42),this.logoMaterials[n].opacity=H.smoothstep(o,.48,.94)*.85}for(let[e,n]of this.displaySignalOverrides){let r=this.displaySurfaces.get(e);r&&this.applyDisplaySignalOverride(r,n,t)}for(let e=0;e<this.showLights.length;e+=1){let n=this.showLights[e],r=.96+Math.sin(t*.6+e*1.3)*.04;n.intensity=i*300*r,n.target.position.x=Math.sign(n.position.x)*9,n.target.position.z=n.position.z<-20?-36:-8,n.target.updateMatrixWorld()}}applyDisplaySignalOverride(e,t,n){if(t===`offline`){let t=.5+Math.sin(n*7.5)*.5;e.display.color.set(`#02040a`),e.display.emissive.set(`#8d190d`),e.display.emissiveIntensity=.025+t*.035,e.logo.opacity=0,e.scan.color.set(`#d2442f`),e.scan.opacity=.035+t*.02;return}if(t===`degraded`){let t=Math.sin(n*19.5)>.15;e.display.color.set(t?`#07193a`:`#02040a`),e.display.emissive.set(t?`#0a52ef`:`#c74834`),e.display.emissiveIntensity=t?1.15:.08,e.logo.opacity=t?.5:.04,e.scan.color.set(`#ff9b6d`),e.scan.opacity=t?.12:.035;return}let r=.5+Math.sin(n*4.8)*.5;e.display.color.set(`#061127`).lerp(Kf.blue,r*.18),e.display.emissive.set(`#0a52ef`).lerp(Kf.cyan,r),e.display.emissiveIntensity=.35+r*1.45,e.logo.opacity=.15+r*.35,e.scan.color.copy(Kf.cyan),e.scan.opacity=.12+r*.2}countObjects(){let e=0,t=0,n=0;return this.root.traverse(r=>{r instanceof Ei?(t+=1,n+=r.count):r instanceof J&&(e+=1)}),{meshes:e,instancedMeshes:t,instances:n}}},np=new q(`#e7a66f`),rp=new q(`#dce8e4`),ip=new q(`#b7d2df`),ap=new Xt,op=new Dt,sp=new W(1,1,1),cp=new W(0,1,0),lp=new ca(.035,.035,1.55,6);function up(e={}){return new tp(e)}var dp=`jackson-2026-07-02`,fp=`SYSTEM DESIGN BASIS · REV 02 JUL 2026`,pp=3840,mp=2160,hp=[4,8,16,24,32,48],gp=Object.freeze({id:`live-event-01`,name:`Championship Main Board`,sportsVenue:!0,screens:[{id:`end-zone-scoreboard`,name:`North Main Board`,pixelWidth:7680,pixelHeight:1e3,physicalWidthFt:120}]});function _p(e,t){return Math.max(1,Math.ceil(e/pp))*Math.max(1,Math.ceil(t/mp))}function vp(e){if(e.screens.length===0)throw Error(`A control-system topology requires at least one screen.`);let t=[`Verify server pricing against the current 15-day hardware window.`,`LiveSync licensing is excluded from this operating drill and remains a human-review item.`],n=e.screens.map(e=>{let n=Math.max(1,e.pixelWidth)*Math.max(1,e.pixelHeight),r=_p(e.pixelWidth,e.pixelHeight),i=e.liveVideo===!0,a=!i&&(e.pixelWidth>7680||r>2),o=i?`capture-card`:a?`dual-gpu`:`standard`,s=Math.max(1,Math.ceil(r/(a?4:2))),c=s,l=Math.max(1,Math.ceil(n/65e4)),u=l<=6?`660 Pro`:l<=16?`4K class`:`8-series / design review`,d=e.physicalWidthFt?Math.max(1,Math.ceil(e.physicalWidthFt/150)):1,f=Math.max(1,Math.ceil(l/6));return a&&t.push(`${e.name}: dual-GPU trigger must be confirmed for the final system design.`),i&&t.push(`${e.name}: confirm CC versus 12G-SDI capture format.`),e.physicalWidthFt||t.push(`${e.name}: physical width is missing; closet count is provisional.`),{screenId:e.id,screenName:e.name,pixelWidth:e.pixelWidth,pixelHeight:e.pixelHeight,pixels:n,outputs:r,renderPrimaries:s,renderBackups:c,renderServers:s+c,storageTier:yp(n),serverVariant:o,matrixInputsPerServer:a?4:2,processorPorts:l,processorClass:u,closets:d,fiberConverterPairs:f}}),r=n.reduce((e,t)=>e+t.renderServers,0),i=2+r,a=4+n.reduce((e,t)=>e+t.renderServers*t.matrixInputsPerServer,0),o=bp(a),s=Math.max(1,Math.ceil(e.screens.length/5)),c=Math.max(1,Math.ceil(i/12));return o===null&&t.push(`Required matrix exceeds 48×48 and must go to system design review.`),e.sportsVenue&&t.push(`RS-232 scoring intake uses Jackson's provisional quantity of two.`),Object.freeze({ruleVersion:dp,job:e,screens:Object.freeze(n),uiServers:2,renderServers:r,totalServers:i,audioElements:i,scoringInputs:e.sportsVenue?2:0,workstations:s,racks:c,networkSwitches:Math.max(3,c),matrixInputs:a,matrixSize:o,kvmTransmitters:2,kvmReceivers:s,kvmManagementAppliances:1,gpiTriggers:1,integrationWeeks:c,reviewFlags:Object.freeze(t)})}function yp(e){let t=pp*mp;return e<=t?`4TB`:e<=t*2?`6TB`:`8TB`}function bp(e){return hp.find(t=>t>e)??null}var xp=[`dashboard`,`deck`,`campaign`];function Sp(e,t,n={}){let r=(n.generatedAt??new Date).toISOString(),i=t.screens[0];if(!i)throw Error(`Venue Story output requires at least one configured screen.`);let a=`ANC-${t.job.id}-${e.phase}-V${e.version}`.toUpperCase(),o=n.logoSrc??gd(`assets/brand/anc-blue.png`),s=Dp(e,t),c=s.flatMap(n=>xp.map(i=>{let s=Op(n,i,e,t,a,r,o);return Object.freeze({id:`${n.id}-${i}`,perspective:n.id,format:i,title:`${n.label} ${Ip(i)}`,description:Fp(n,i),filename:`anc-${t.job.id}-${n.id}-${i}.html`,mimeType:`text/html`,content:s,bytes:zp(s)})})),l=Mp(s,e,t,a,r,o),u=Object.freeze({id:`venue-story-package`,perspective:`executive`,format:`deck`,title:`ANC Venue Story Master Package`,description:`One evidence-bound package containing all four perspectives and all twelve outputs.`,filename:`anc-${t.job.id}-venue-story-package.html`,mimeType:`text/html`,content:l,bytes:zp(l)}),d=Object.freeze({schema:`anc.venue-story-package.v1`,packageId:a,generatedAt:r,dataClass:`SIMULATION`,sourceRule:t.ruleVersion,venue:t.job.name,snapshot:Object.freeze({version:e.version,phase:e.phase,incidentId:e.incidentId,incidentSeconds:Bp(e.incidentSeconds,2),screen:i.screenName,screenState:e.mainBoard,primaryRender:e.primaryRender,backupRender:e.backupRender,matrixRoute:e.matrixRoute,proofOfPlay:e.proofOfPlay,venueReadiness:e.venueReadiness,uptimePercent:e.uptimePercent,exposureAtRisk:e.exposureAtRisk,revenueProtected:e.revenueProtected}),topology:Object.freeze({totalServers:t.totalServers,renderServers:t.renderServers,matrixInputs:t.matrixInputs,matrixSize:t.matrixSize,processorPorts:i.processorPorts,audioElements:t.audioElements}),evidence:Object.freeze(e.logs.map(e=>Object.freeze({time:e.time,vertical:e.vertical,message:e.message}))),artifacts:Object.freeze(c.map(e=>Object.freeze({id:e.id,perspective:e.perspective,format:e.format,filename:e.filename,bytes:e.bytes})))});return Object.freeze({id:a,generatedAt:r,dataClass:`SIMULATION`,snapshotVersion:e.version,artifacts:Object.freeze(c),bundle:u,manifest:d,manifestFilename:`anc-${t.job.id}-manifest.json`})}function Cp(e){let t=URL.createObjectURL(new Blob([e.content],{type:e.mimeType}));window.open(t,`_blank`,`noopener,noreferrer`)||Rp(e.filename,e.content,e.mimeType),window.setTimeout(()=>URL.revokeObjectURL(t),3e4)}function wp(e){Rp(e.filename,e.content,e.mimeType)}function Tp(e){Rp(e.manifestFilename,`${JSON.stringify(e.manifest,null,2)}\n`,`application/json`)}async function Ep(e){let t=await fetch(e);if(!t.ok)throw Error(`Unable to load branded output asset: ${t.status}`);let n=await t.blob();return new Promise((e,t)=>{let r=new FileReader;r.onerror=()=>t(r.error??Error(`Unable to encode branded output asset.`)),r.onload=()=>e(String(r.result)),r.readAsDataURL(n)})}function Dp(e,t){let n=t.screens[0],r=e.revenueProtected>0?`${Vp(e.revenueProtected)} protected`:e.exposureAtRisk>0?`${Vp(e.exposureAtRisk)} at risk`:`${Vp(184e3)} contracted`,i=e.phase===`recovered`?`Contained remotely in ${Hp(e.incidentSeconds)}`:e.incidentId?`${e.incidentId} · ${e.phase.toUpperCase()}`:`No open incident`;return Object.freeze([Object.freeze({id:`technology`,label:`Technology`,accent:`#03b8ff`,outputName:`Signal Resilience System`,thesis:`A ${t.totalServers}-server control system keeps ${n.screenName} addressable through a dedicated 1:1 backup path.`,campaignLine:`THE SCREEN IS NOT THE SYSTEM. THE RESILIENCE BEHIND IT IS.`,facts:Object.freeze([{label:`Signal route`,value:e.matrixRoute,note:`${t.matrixInputs} inputs into a ${t.matrixSize}×${t.matrixSize} matrix`},{label:`Render pair`,value:`${e.primaryRender.toUpperCase()} / ${e.backupRender.toUpperCase()}`,note:`${n.renderPrimaries} primary + ${n.renderBackups} dedicated backup`},{label:`Pixel load`,value:n.pixels.toLocaleString(`en-US`),note:`${n.pixelWidth} × ${n.pixelHeight} across ${n.outputs} outputs`},{label:`Proof signal`,value:e.proofOfPlay,note:e.phase===`recovered`?`Backup locked at 59.94 Hz`:`Frame-lock state follows the simulation`}])}),Object.freeze({id:`services`,label:`Venue Services`,accent:`#58e8bb`,outputName:`Event Response Command`,thesis:`The same system event becomes an accountable service workflow with a clock, an owner, a recovery path, and an evidence trail.`,campaignLine:`WHEN THE SIGNAL DROPS, THE RESPONSE IS ALREADY MOVING.`,facts:Object.freeze([{label:`Incident`,value:e.incidentId??`SYSTEM ARMED`,note:i},{label:`Recovery clock`,value:Hp(e.incidentSeconds),note:e.phase===`recovered`?`Remote containment complete`:`Simulation clock active`},{label:`Field posture`,value:e.phase===`recovered`?`DEFERRED`:`READY`,note:e.phase===`recovered`?`Remote recovery succeeded; follow-up after doors`:`North service apron`},{label:`Venue ready`,value:`${e.venueReadiness}%`,note:`${e.uptimePercent.toFixed(2)}% modeled uptime`}])}),Object.freeze({id:`media`,label:`Media & Sponsorship`,accent:`#ffb85c`,outputName:`Campaign Delivery Proof`,thesis:`Physical display inventory becomes measurable media: contracted value, delivery state, and proof-of-play tied to the operating signal.`,campaignLine:`A BRAND MOMENT IS ONLY REAL WHEN THE VENUE CAN PROVE IT PLAYED.`,facts:Object.freeze([{label:`Campaign`,value:`24-017`,note:`Championship Partner Takeover`},{label:`Contracted value`,value:`$184,000`,note:r},{label:`Active inventory`,value:e.mainBoard===`online`?`8 / 8`:`7 / 8`,note:`Main board + center hung + east/west ribbons`},{label:`Proof of play`,value:e.proofOfPlay,note:e.mainBoard===`online`?`North Main Board online`:`North Main Board interrupted`}])}),Object.freeze({id:`executive`,label:`Executive`,accent:`#8fa8ff`,outputName:`Venue Story Command Brief`,thesis:`One physical screen is simultaneously infrastructure, an operational responsibility, and contracted media inventory.`,campaignLine:`ONE VENUE. ONE OPERATING TRUTH. EVERY TEAM MOVES TOGETHER.`,facts:Object.freeze([{label:`Venue state`,value:`${e.venueReadiness}% READY`,note:Lp(e.phase)},{label:`Technology`,value:e.mainBoard===`online`?`SYSTEMS HEALTHY`:`FAILOVER ACTIVE`,note:`${e.uptimePercent.toFixed(2)}% modeled uptime`},{label:`Services`,value:e.phase===`recovered`?`CONTAINED REMOTELY`:e.incidentId?`INCIDENT ACTIVE`:`TEAM READY`,note:i},{label:`Media`,value:r.toUpperCase(),note:`${e.proofOfPlay} proof-of-play`}])})])}function Op(e,t,n,r,i,a,o){let s=`${e.label} ${Ip(t)}`,c=t===`dashboard`?kp(e,n):t===`campaign`?jp(e,n):Ap(e,n,r);return Pp(s,e.accent,i,a,o,c)}function kp(e,t){return`
    <main class="artifact artifact-dashboard">
      ${Np(e,`LIVE DASHBOARD SNAPSHOT`,t)}
      <section class="metric-grid">${e.facts.map((e,t)=>`
        <article class="metric"><span>0${t+1}</span><small>${$(e.label)}</small><strong>${$(e.value)}</strong><p>${$(e.note)}</p></article>
      `).join(``)}</section>
      <section class="evidence"><div><small>SHARED OPERATING STATE</small><strong>${$(Lp(t.phase))}</strong></div><p>${$(e.thesis)}</p></section>
    </main>`}function Ap(e,t,n){return`
    <main class="artifact artifact-deck">
      ${Np(e,`VENUE STORY DECK`,t)}
      <section class="slide slide-hero"><span>01 / THE TRUTH</span><h2>${$(e.thesis)}</h2><i></i></section>
      <section class="slide"><span>02 / THE SYSTEM</span><h3>${$(e.outputName)}</h3><div class="metric-grid compact">${e.facts.map(e=>`<article class="metric"><small>${$(e.label)}</small><strong>${$(e.value)}</strong><p>${$(e.note)}</p></article>`).join(``)}</div></section>
      <section class="slide"><span>03 / THE EVIDENCE</span><ol class="timeline">${t.logs.map(e=>`<li><time>${$(e.time)}</time><b>${$(e.vertical)}</b><p>${$(e.message)}</p></li>`).join(``)}</ol></section>
      <section class="slide slide-close"><span>04 / THE OUTCOME</span><h2>${$(e.campaignLine)}</h2><p>${$(fp)} · ${$(n.job.name)} simulation snapshot V${t.version}</p></section>
    </main>`}function jp(e,t){return`
    <main class="artifact artifact-campaign">
      ${Np(e,`CAMPAIGN OUTPUT`,t)}
      <section class="campaign-card">
        <div class="campaign-index">ANC / ${$(e.label.toUpperCase())}</div>
        <h2>${$(e.campaignLine)}</h2>
        <p>${$(e.thesis)}</p>
        <div class="campaign-facts">${e.facts.slice(0,3).map(e=>`<span><small>${$(e.label)}</small><b>${$(e.value)}</b></span>`).join(``)}</div>
        <footer><b>${$(e.outputName)}</b><span>SIMULATION STORY / ${$(t.phase.toUpperCase())}</span></footer>
      </section>
      <section class="caption"><small>CAMPAIGN CAPTION</small><p>${$(e.campaignLine)} ${$(e.thesis)} This output was generated from the same frozen venue-state evidence used by Technology, Services, Media, and Executive leadership.</p></section>
    </main>`}function Mp(e,t,n,r,i,a){return Pp(`ANC Venue Story Master Package`,`#03b8ff`,r,i,a,`
    <main class="artifact bundle">
      <header class="artifact-head bundle-head"><div><img src="${Up(a)}" alt="ANC" /><small>VENUE STORY MASTER PACKAGE</small></div><span>12 EVIDENCE-BOUND OUTPUTS</span></header>
      <section class="bundle-hero"><small>ONE VENUE / FOUR PERSPECTIVES / ONE OPERATING TRUTH</small><h1>THE VENUE<br />BECOMES THE STORY.</h1><p>Technology, Services, Media, and Executive outputs generated from snapshot V${t.version} of the same ${$(n.job.name)} simulation.</p></section>
      ${e.map((e,t)=>`
        <section class="bundle-perspective" style="--accent:${e.accent}">
          <header><span>0${t+1}</span><div><small>${$(e.label.toUpperCase())}</small><h2>${$(e.outputName)}</h2></div></header>
          <p>${$(e.thesis)}</p>
          <div class="metric-grid compact">${e.facts.map(e=>`<article class="metric"><small>${$(e.label)}</small><strong>${$(e.value)}</strong><p>${$(e.note)}</p></article>`).join(``)}</div>
          <blockquote>${$(e.campaignLine)}</blockquote>
          <footer>DASHBOARD SNAPSHOT · VENUE STORY DECK · CAMPAIGN OUTPUT</footer>
        </section>`).join(``)}
      <section class="bundle-evidence"><small>EVIDENCE CHAIN</small><ol class="timeline">${t.logs.map(e=>`<li><time>${$(e.time)}</time><b>${$(e.vertical)}</b><p>${$(e.message)}</p></li>`).join(``)}</ol></section>
    </main>`)}function Np(e,t,n){return`<header class="artifact-head"><div><small>${$(t)}</small><h1>${$(e.outputName)}</h1></div><span>${$(n.phase.toUpperCase())} / V${n.version}</span></header>`}function Pp(e,t,n,r,i,a){return`<!doctype html>
<html lang="en"><head><meta charset="utf-8" /><meta name="viewport" content="width=device-width,initial-scale=1" />
<title>${$(e)} · ANC Venue Story</title>
<style>
:root{--accent:${t};--ink:#030817;--panel:#071126;--line:rgba(125,167,219,.22);--text:#edf6ff;--muted:#8094ad}*{box-sizing:border-box}html{background:var(--ink);color:var(--text);font-family:Arial,Helvetica,sans-serif}body{margin:0;background:radial-gradient(circle at 80% 0,rgba(10,82,239,.18),transparent 32%),linear-gradient(rgba(255,255,255,.018) 1px,transparent 1px),var(--ink);background-size:auto,42px 42px;min-height:100vh}.doc-brand{width:min(1180px,calc(100% - 42px));margin:0 auto;padding-top:24px}.doc-brand img{display:block;width:112px;height:auto}.package-meta{position:fixed;z-index:5;right:18px;bottom:14px;color:var(--muted);font:9px/1.4 monospace;letter-spacing:.08em;text-align:right}.artifact{width:min(1180px,calc(100% - 42px));margin:auto;padding:24px 0 80px}.artifact-head{display:flex;align-items:flex-end;justify-content:space-between;gap:24px;padding:0 0 22px;border-bottom:1px solid var(--line)}.artifact-head div{display:grid;gap:8px}.artifact-head img{width:130px;height:auto;margin-bottom:12px}.artifact-head small,.artifact-head span,.slide>span,.caption small,.bundle-hero small,.bundle-perspective small,.bundle-evidence>small{color:var(--accent);font:700 10px/1 monospace;letter-spacing:.16em}.artifact-head h1{margin:0;font:800 clamp(34px,6vw,76px)/.86 'Arial Narrow',Arial,sans-serif;letter-spacing:-.045em;text-transform:uppercase}.artifact-head>span{padding:9px 11px;border:1px solid var(--line);color:var(--muted);white-space:nowrap}.metric-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;margin-top:28px;background:var(--line)}.metric{position:relative;min-height:190px;padding:24px 20px;background:var(--panel)}.metric>span{position:absolute;right:14px;top:12px;color:rgba(255,255,255,.12);font:800 28px/1 monospace}.metric small{display:block;color:var(--muted);font:700 9px/1 monospace;letter-spacing:.12em;text-transform:uppercase}.metric strong{display:block;margin-top:38px;color:var(--text);font:800 clamp(18px,2.6vw,34px)/.95 'Arial Narrow',Arial,sans-serif;text-transform:uppercase}.metric p{margin:12px 0 0;color:#a9bad0;font-size:12px;line-height:1.45}.evidence{display:grid;grid-template-columns:.55fr 1.45fr;gap:1px;margin-top:1px;background:var(--line)}.evidence>*{margin:0;padding:24px;background:#050d20}.evidence small{display:block;color:var(--muted);font:700 9px/1 monospace;letter-spacing:.12em}.evidence strong{display:block;margin-top:10px;color:var(--accent);font:800 19px/1 monospace}.evidence p{color:#cad7e7;line-height:1.6}.slide{min-height:66vh;padding:54px 0;border-bottom:1px solid var(--line)}.slide h2{max-width:980px;margin:68px 0 0;font:800 clamp(42px,7vw,92px)/.9 'Arial Narrow',Arial,sans-serif;letter-spacing:-.05em;text-transform:uppercase}.slide h3{margin:20px 0;font:800 clamp(30px,4vw,56px)/.9 'Arial Narrow',Arial,sans-serif;text-transform:uppercase}.slide-hero i{display:block;width:120px;height:6px;margin-top:36px;background:var(--accent)}.compact{grid-template-columns:repeat(2,1fr)}.compact .metric{min-height:155px}.compact .metric strong{margin-top:25px}.timeline{display:grid;gap:1px;margin:24px 0 0;padding:0;background:var(--line);list-style:none}.timeline li{display:grid;grid-template-columns:70px 80px 1fr;gap:16px;align-items:center;padding:15px 17px;background:var(--panel)}.timeline time,.timeline b{font:700 10px/1 monospace}.timeline b{color:var(--accent)}.timeline p{margin:0;color:#bccade;font-size:13px;line-height:1.4}.slide-close p{color:var(--muted);font:11px/1.5 monospace}.campaign-card{position:relative;min-height:650px;margin-top:28px;padding:54px;overflow:hidden;background:radial-gradient(circle at 80% 12%,color-mix(in srgb,var(--accent) 72%,transparent),transparent 28%),linear-gradient(135deg,#0a52ef,#03112a 62%);box-shadow:0 32px 80px rgba(0,0,0,.35)}.campaign-card:after{content:'';position:absolute;inset:0;opacity:.18;background-image:radial-gradient(circle,#fff 0 1px,transparent 1.2px);background-size:11px 11px;mask-image:linear-gradient(90deg,transparent,#000)}.campaign-card>*{position:relative;z-index:1}.campaign-index{font:700 11px/1 monospace;letter-spacing:.16em}.campaign-card h2{max-width:900px;margin:110px 0 22px;font:800 clamp(48px,8vw,108px)/.83 'Arial Narrow',Arial,sans-serif;letter-spacing:-.055em}.campaign-card>p{max-width:720px;color:#dce8f6;font-size:18px;line-height:1.5}.campaign-facts{display:flex;flex-wrap:wrap;gap:28px;margin-top:52px}.campaign-facts span{display:grid;gap:7px;padding-left:12px;border-left:3px solid var(--accent)}.campaign-facts small{font:700 8px/1 monospace;letter-spacing:.12em}.campaign-facts b{font:800 17px/1 monospace}.campaign-card footer{display:flex;justify-content:space-between;position:absolute;left:54px;right:54px;bottom:44px;font:700 9px/1 monospace;letter-spacing:.12em}.caption{padding:28px;border:1px solid var(--line);background:var(--panel)}.caption p{margin:12px 0 0;color:#c4d2e2;line-height:1.6}.bundle-head img{display:block}.bundle-hero{padding:80px 0 70px}.bundle-hero h1{margin:20px 0;font:800 clamp(62px,10vw,144px)/.78 'Arial Narrow',Arial,sans-serif;letter-spacing:-.06em}.bundle-hero p{max-width:700px;color:#bdcce0;font-size:17px;line-height:1.6}.bundle-perspective{margin:0 0 34px;padding:32px;border:1px solid var(--line);border-top:4px solid var(--accent);background:rgba(7,17,38,.88)}.bundle-perspective>header{display:flex;align-items:center;gap:18px}.bundle-perspective>header>span{color:var(--accent);font:800 42px/1 monospace}.bundle-perspective h2{margin:5px 0 0;font:800 40px/.9 'Arial Narrow',Arial,sans-serif;text-transform:uppercase}.bundle-perspective>p{max-width:850px;color:#c2d0e1;line-height:1.55}.bundle-perspective blockquote{margin:24px 0 0;padding:20px;border-left:4px solid var(--accent);font:800 28px/1 'Arial Narrow',Arial,sans-serif;text-transform:uppercase}.bundle-perspective footer{margin-top:24px;color:var(--muted);font:700 9px/1 monospace;letter-spacing:.12em}.bundle-evidence{padding-top:36px}
@media(max-width:700px){.artifact{width:min(100% - 24px,1180px);padding-top:18px}.artifact-head{align-items:flex-start;flex-direction:column}.artifact-head h1{font-size:38px}.metric-grid,.compact{grid-template-columns:1fr 1fr}.metric{min-height:140px;padding:17px 14px}.metric strong{font-size:20px}.evidence{grid-template-columns:1fr}.slide{min-height:auto;padding:40px 0}.campaign-card{min-height:620px;padding:28px}.campaign-card h2{margin-top:88px;font-size:48px}.campaign-card footer{left:28px;right:28px;bottom:28px;gap:18px}.timeline li{grid-template-columns:48px 62px 1fr;gap:8px}.bundle-perspective{padding:20px}.bundle-perspective h2{font-size:28px}.package-meta{position:static;padding:0 12px 14px}}
@media print{body{background:#fff;color:#071126}.package-meta{position:static;color:#455}.artifact{width:100%;padding:0}.slide{min-height:95vh;break-after:page}.campaign-card{break-inside:avoid}.bundle-perspective{break-inside:avoid}}
</style></head><body><div class="doc-brand"><img src="${Up(i)}" alt="ANC" /></div>${a}<div class="package-meta">${$(n)}<br />SIMULATION DATA · ${$(r)}<br />${$(fp)}</div></body></html>`}function Fp(e,t){return t===`dashboard`?`Frozen ${e.label} operating dashboard with shared-state evidence.`:t===`deck`?`Four-scene ${e.label} venue story deck built from the incident timeline.`:`${e.label} campaign concept and caption grounded in the same venue snapshot.`}function Ip(e){return e===`dashboard`?`Dashboard Snapshot`:e===`deck`?`Venue Story Deck`:`Campaign Output`}function Lp(e){return e===`ready`?`Systems armed and synchronized`:e===`incident`?`Primary signal loss active`:e===`diagnosed`?`Failure isolated; backup ready`:e===`rerouting`?`Backup route validating`:e===`recovered`?`Signal restored; value protected`:`Venue release blocked`}function Rp(e,t,n){let r=URL.createObjectURL(new Blob([t],{type:n})),i=document.createElement(`a`);i.href=r,i.download=e,i.style.display=`none`,document.body.append(i),i.click(),i.remove(),window.setTimeout(()=>URL.revokeObjectURL(r),1e3)}function zp(e){return new TextEncoder().encode(e).byteLength}function Bp(e,t){let n=10**t;return Math.round(e*n)/n}function Vp(e){return new Intl.NumberFormat(`en-US`,{style:`currency`,currency:`USD`,maximumFractionDigits:0}).format(e)}function Hp(e){let t=Math.max(0,Math.floor(e));return`${Math.floor(t/60).toString().padStart(2,`0`)}:${(t%60).toString().padStart(2,`0`)}`}function $(e){return e.replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#039;`})[e]??e)}function Up(e){return $(e).replace(/`/g,`&#096;`)}var Wp=[{id:`technology`,label:`Technology`,short:`TECH`},{id:`services`,label:`Venue Services`,short:`SERVICE`},{id:`media`,label:`Media & Sponsorship`,short:`MEDIA`},{id:`executive`,label:`Executive`,short:`EXEC`}],Gp=class{element;topology;actions;lastRenderKey=``;lastTelemetryKey=``;activeCamera=`venue`;muted=!1;forgeOpen=!1;forgeBuilding=!1;forgeError=``;storyPackage=null;lastSnapshot=null;constructor(e){this.topology=e.topology,this.actions=e.actions,this.element=document.createElement(`div`),this.element.className=`crt-root`,this.element.setAttribute(`aria-label`,`ANC Venue Twin control room`),this.element.addEventListener(`click`,this.handleClick),this.element.addEventListener(`pointerover`,this.handlePointerOver),window.addEventListener(`keydown`,this.handleKeyDown),e.mount.replaceChildren(this.element)}render(e,t=!1){this.lastSnapshot=e;let n=[e.phase,e.perspective,this.activeCamera,this.muted,this.forgeOpen,this.forgeBuilding,this.storyPackage?.id??`unbuilt`,this.forgeError].join(`:`);if(this.element.dataset.phase=e.phase,this.element.dataset.perspective=e.perspective,document.body.dataset.twinPhase=e.phase,!t&&n===this.lastRenderKey){this.refreshTelemetry(e);return}this.lastRenderKey=n,this.lastTelemetryKey=``,this.element.innerHTML=`
      <header class="crt-header">
        <div class="crt-brand">
          <img src="${gd(`assets/brand/anc-white.png`)}" alt="ANC" />
          <span></span>
          <div><b>VENUE TWIN</b><small>CONTROL SYSTEM · LIVE EVENT 01</small></div>
          <em class="crt-sim-class" title="Training fixture — all telemetry is simulation data">TRAINING SIM</em>
        </div>
        <div class="crt-event-clock" aria-label="Time until doors open">
          <small>DOORS OPEN</small><strong>${xm(e.doorsInSeconds)}</strong>
        </div>
        <div class="crt-header-status ${bm(e.phase)}">
          <i></i><span>${ym(e.phase)}</span>
        </div>
        <button class="crt-icon-button crt-forge-launch" data-action="open-forge" aria-label="Open Output Forge">
          <i></i><span>OUTPUT FORGE</span>
        </button>
        <button class="crt-icon-button" data-action="toggle-mute" aria-label="${this.muted?`Unmute audio`:`Mute audio`}" aria-pressed="${this.muted}">
          ${this.muted?`MUTED`:`AUDIO`}
        </button>
      </header>

      <section class="crt-world-label" aria-label="Three-dimensional venue view">
        <div class="crt-world-kicker"><i></i> LIVE VENUE MODEL</div>
        <h1>NORTH BOWL<br /><span>MAIN BOARD</span></h1>
        <div class="crt-world-signal ${_m(e.mainBoard)}">
          <i></i><span>SCREEN OUTPUT</span><strong>${vm(e.mainBoard)}</strong>
        </div>
      </section>

      <div class="crt-camera-controls" aria-label="Venue camera views">
        ${gm(`venue`,`01`,`Venue`,this.activeCamera)}
        ${gm(`main-board`,`02`,`Main board`,this.activeCamera)}
        ${gm(`signal-bay`,`03`,`Signal bay`,this.activeCamera)}
      </div>

      <section class="crt-venue-metrics" aria-label="Live venue status">
        <div><small>UPTIME</small><strong>${e.uptimePercent.toFixed(2)}<span>%</span></strong></div>
        <div><small>SHOW READY</small><strong>${e.venueReadiness}<span>%</span></strong></div>
        <div class="${e.exposureAtRisk>0?`is-critical`:`is-positive`}"><small>${e.exposureAtRisk>0?`EXPOSURE AT RISK`:`REVENUE PROTECTED`}</small><strong>${Sm(e.exposureAtRisk||e.revenueProtected)}</strong></div>
      </section>

      <aside class="crt-console">
        <nav class="crt-perspectives" role="tablist" aria-label="ANC vertical perspectives">
          ${Wp.map(t=>`
            <button role="tab" data-action="perspective" data-perspective="${t.id}" aria-selected="${e.perspective===t.id}">
              <small>${t.short}</small><span>${t.label}</span>
            </button>
          `).join(``)}
        </nav>

        ${om(e)}

        <div class="crt-console-body">
          ${tm(e,this.topology)}
        </div>

        <footer class="crt-action-dock">
          <div class="crt-action-copy">
            <small>NEXT AUTHORIZED ACTION</small>
            <strong>${cm(e.phase)}</strong>
          </div>
          ${sm(e)}
        </footer>
      </aside>

      <section class="crt-event-log" aria-label="Cross-vertical event log">
        <header><span>LIVE EVENT LOG</span><b>${e.incidentId??`SYSTEM ARMED`}</b></header>
        <ol>
          ${e.logs.slice(0,4).map(e=>`
            <li class="is-${e.tone}"><time>${e.time}</time><b>${e.vertical}</b><span>${e.message}</span></li>
          `).join(``)}
        </ol>
      </section>

      ${this.forgeOpen?Kp(e,this.storyPackage,this.forgeBuilding,this.forgeError):``}
    `,this.refreshTelemetry(e)}refreshTelemetry(e){let t=Math.round(e.rerouteProgress*100),n=[Math.floor(e.doorsInSeconds),Math.floor(e.incidentSeconds),t,e.uptimePercent,e.venueReadiness,e.exposureAtRisk,e.revenueProtected].join(`:`);if(n!==this.lastTelemetryKey&&(this.lastTelemetryKey=n,mm(this.element,`.crt-event-clock strong`,xm(e.doorsInSeconds)),hm(this.element,`.crt-venue-metrics > div:nth-child(1) strong`,`${e.uptimePercent.toFixed(2)}<span>%</span>`),hm(this.element,`.crt-venue-metrics > div:nth-child(2) strong`,`${e.venueReadiness}<span>%</span>`),mm(this.element,`.crt-venue-metrics > div:nth-child(3) strong`,Sm(e.exposureAtRisk||e.revenueProtected)),mm(this.element,`.crt-service-clock strong`,xm(e.incidentSeconds)),(e.phase===`incident`||e.phase===`diagnosed`||e.phase===`rerouting`)&&(mm(this.element,`.crt-incident-banner > span`,xm(e.incidentSeconds)),mm(this.element,`.crt-campaign-frame.is-interrupted .crt-proof-status > span`,`INTERRUPTION · ${xm(e.incidentSeconds)}`)),e.phase===`rerouting`)){mm(this.element,`.crt-progress strong`,`${t}%`);let e=this.element.querySelector(`.crt-progress > i span`);e&&(e.style.width=`${t}%`),mm(this.element,`.crt-primary-action b`,`${t}%`)}}destroy(){this.element.removeEventListener(`click`,this.handleClick),this.element.removeEventListener(`pointerover`,this.handlePointerOver),window.removeEventListener(`keydown`,this.handleKeyDown),this.element.remove()}handleClick=e=>{let t=e.target instanceof Element?e.target.closest(`[data-action]`):null;if(!t)return;let n=t.dataset.action;if(n===`start-incident`&&this.actions.onStartIncident(),n===`diagnose`&&this.actions.onDiagnose(),n===`route-backup`&&this.actions.onRouteBackup(),n===`restart`&&this.actions.onRestart(),n===`perspective`){let e=t.dataset.perspective;e&&Wp.some(t=>t.id===e)&&this.actions.onPerspective(e)}if(n===`camera`){let e=t.dataset.camera;e&&[`venue`,`main-board`,`signal-bay`].includes(e)&&(this.activeCamera=e,this.actions.onCamera(e))}if(n===`toggle-mute`&&(this.muted=this.actions.onToggleMute()),n===`open-forge`&&(this.forgeOpen=!0,this.forgeError=``,this.lastSnapshot&&this.render(this.lastSnapshot,!0)),n===`close-forge`&&(this.forgeOpen=!1,this.lastSnapshot&&this.render(this.lastSnapshot,!0)),n===`build-story-package`&&this.buildStoryPackage(),n===`open-artifact`){let e=this.storyPackage?.artifacts.find(e=>e.id===t.dataset.artifactId);e&&Cp(e)}if(n===`download-artifact`){let e=this.storyPackage?.artifacts.find(e=>e.id===t.dataset.artifactId);e&&wp(e)}n===`open-bundle`&&this.storyPackage&&Cp(this.storyPackage.bundle),n===`download-bundle`&&this.storyPackage&&wp(this.storyPackage.bundle),n===`download-manifest`&&this.storyPackage&&Tp(this.storyPackage),this.lastRenderKey=``};handlePointerOver=e=>{!(e.target instanceof Element)||!e.target.closest(`button`)||this.actions.onHover?.()};handleKeyDown=e=>{e.key!==`Escape`||!this.forgeOpen||!this.lastSnapshot||(this.forgeOpen=!1,this.render(this.lastSnapshot,!0))};async buildStoryPackage(){if(this.forgeBuilding||!this.lastSnapshot)return;let e=this.lastSnapshot;this.forgeBuilding=!0,this.forgeError=``,this.render(e,!0);try{this.storyPackage=await this.actions.onBuildStoryPackage(e)}catch(e){this.forgeError=e instanceof Error?e.message:`Output package generation failed.`}finally{this.forgeBuilding=!1,this.render(this.lastSnapshot??e,!0)}}};function Kp(e,t,n,r){let i=t?`<span class="is-forged"><i></i> PACKAGE FORGED</span>`:`<span><i></i> SNAPSHOT READY</span>`;return`
    <section class="crt-forge" role="dialog" aria-modal="true" aria-labelledby="crt-forge-title">
      <div class="crt-forge-noise"></div>
      <header class="crt-forge-header">
        <div class="crt-forge-brand"><img src="${gd(`assets/brand/anc-white.png`)}" alt="ANC" /><span>VENUE OS / OUTPUT FORGE</span></div>
        ${i}
        <button data-action="close-forge" aria-label="Close Output Forge">CLOSE <b>×</b></button>
      </header>
      <div class="crt-forge-scroll">
        <section class="crt-forge-hero">
          <div>
            <small>ONE OPERATING TRUTH / MULTIPLE WEAPONS</small>
            <h2 id="crt-forge-title">ONE INCIDENT.<br /><span>TWELVE OUTPUTS.</span></h2>
          </div>
          <p>Freeze the current venue state and forge a live dashboard, a venue story deck, and a campaign output for every ANC perspective.</p>
        </section>

        <section class="crt-forge-snapshot" aria-label="Output evidence snapshot">
          <div><small>DATA CLASS</small><strong>SIMULATION</strong><span>Training fixture · no live claims</span></div>
          <div><small>SNAPSHOT</small><strong>V${t?.snapshotVersion??e.version}</strong><span>${em(t?.id??`LIVE-${e.phase.toUpperCase()}`)}</span></div>
          <div><small>VENUE STATE</small><strong>${e.venueReadiness}% READY</strong><span>${em(ym(e.phase))}</span></div>
          <div><small>EVIDENCE</small><strong>${e.logs.length} EVENTS</strong><span>${em(e.incidentId??`SYSTEM ARMED`)}</span></div>
          <div><small>DESIGN BASIS</small><strong>REV 02 JUL 2026</strong><span>${t?`Built ${em(Yp(t.generatedAt))}`:`Frozen at build time`}</span></div>
        </section>

        ${r?`<div class="crt-forge-error" role="alert"><b>FORGE BLOCKED</b><span>${em(r)}</span></div>`:``}

        ${t?qp(t):`
          <section class="crt-forge-armed">
            <div class="crt-forge-crosshair"><i></i><b>12</b><span>ARTIFACTS<br />QUEUED</span></div>
            <div><small>READY TO COMPOSE</small><h3>FREEZE THE VENUE STATE AND COMPOSE THE DELIVERABLE SET FOR ALL FOUR PERSPECTIVES.</h3><p>No invented claims. Every output carries the snapshot ID, simulation classification, system topology, event trail, proof state, and design-basis revision.</p></div>
            <button class="crt-forge-trigger" data-action="build-story-package" ${n?`disabled`:``}>
              <span>${n?`COMPOSING OUTPUT PACKAGE`:`BUILD ALL 12 OUTPUTS`}</span><b>${n?`···`:`→`}</b>
            </button>
          </section>`}
      </div>
    </section>`}function qp(e){return`
    <section class="crt-forge-package">
      <header>
        <div><small>WORK PACKAGE</small><h3>${em(e.id)}</h3><time>${em(Yp(e.generatedAt))} · SIMULATION DATA CLASS</time></div>
        <span>12 EVIDENCE-BOUND ARTIFACTS</span>
      </header>
      <div class="crt-forge-perspectives">
        ${[`technology`,`services`,`media`,`executive`].map((t,n)=>{let r=e.artifacts.filter(e=>e.perspective===t);return`<article class="crt-forge-perspective is-${t}">
            <header><b>0${n+1}</b><div><small>${Zp(t).toUpperCase()}</small><strong>${Qp(t)}</strong></div><span>3 OUTPUTS</span></header>
            <div class="crt-forge-artifacts">${r.map(e=>Jp(e)).join(``)}</div>
          </article>`}).join(``)}
      </div>
      <footer class="crt-forge-delivery">
        <div><small>MASTER DELIVERY</small><strong>SELF-CONTAINED VENUE STORY PACKAGE</strong><span>${em(e.bundle.filename)} · ${$p(e.bundle.bytes)} · HTML · print/PDF ready</span></div>
        <button data-action="open-bundle"><span>OPEN MASTER</span><b>↗</b></button>
        <button data-action="download-bundle"><span>DOWNLOAD PACKAGE</span><b>↓</b></button>
        <button data-action="download-manifest"><span>EVIDENCE MANIFEST</span><b>{ }</b></button>
      </footer>
    </section>`}function Jp(e){return`<div class="crt-forge-artifact">
    <button data-action="open-artifact" data-artifact-id="${e.id}" aria-label="Open ${Xp(e.format)}">
      <span>${Xp(e.format)}</span>
      <small class="crt-artifact-file">${em(e.filename)}</small>
      <small>${$p(e.bytes)} · HTML · READY</small>
    </button>
    <button data-action="download-artifact" data-artifact-id="${e.id}" aria-label="Download ${Xp(e.format)}">↓</button>
  </div>`}function Yp(e){let t=new Date(e);return Number.isNaN(t.getTime())?e:`${t.toISOString().slice(0,16).replace(`T`,` `)} UTC`}function Xp(e){return e===`dashboard`?`DASHBOARD`:e===`deck`?`STORY DECK`:`CAMPAIGN`}function Zp(e){return e===`services`?`Venue Services`:e===`media`?`Media & Sponsorship`:e===`executive`?`Executive`:`Technology`}function Qp(e){return e===`services`?`EVENT RESPONSE COMMAND`:e===`media`?`CAMPAIGN DELIVERY PROOF`:e===`executive`?`VENUE STORY COMMAND`:`SIGNAL RESILIENCE SYSTEM`}function $p(e){return`${Math.max(1,Math.round(e/1024))} KB`}function em(e){return e.replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#039;`})[e]??e)}function tm(e,t){return e.perspective===`services`?rm(e):e.perspective===`media`?im(e):e.perspective===`executive`?am(e):nm(e,t)}function nm(e,t){let n=t.screens[0];return`
    <section class="crt-view crt-technology" role="tabpanel">
      <header class="crt-view-heading">
        <div><small>TECHNOLOGY PERSPECTIVE</small><h2>LIVE SIGNAL TOPOLOGY</h2></div>
        <span>${fp}</span>
      </header>
      <div class="crt-signal-path" aria-label="Primary and backup server path to the main board">
        ${um(`UI-A / UI-B`,`CONTENT LIBRARY`,`online`,`2 × 8TB`)}
        <i class="crt-path-link is-live"></i>
        <div class="crt-render-pair">
          ${um(`RENDER A-01`,`PRIMARY OUTPUT`,e.primaryRender,`${n.storageTier} · ${n.outputs} OUT`)}
          ${um(`RENDER A-02`,`DEDICATED BACKUP`,e.backupRender,`${n.storageTier} · SYNC`)}
        </div>
        <i class="crt-path-link ${e.matrixRoute===`UNROUTED`?`is-fault`:e.phase===`rerouting`?`is-routing`:`is-live`}"></i>
        ${um(`MATRIX ${t.matrixSize}×${t.matrixSize}`,e.matrixRoute,e.matrixRoute===`UNROUTED`?`offline`:e.phase===`rerouting`?`routing`:`online`,`IN 01–0${t.matrixInputs} · OUT 05`)}
        <i class="crt-path-link ${_m(e.mainBoard)}"></i>
        ${um(`NORTH MAIN BOARD`,`${n.pixels.toLocaleString(`en-US`)} PIXELS`,e.mainBoard,`${n.pixelWidth} × ${n.pixelHeight}`)}
      </div>
      <dl class="crt-rule-strip">
        <div><dt>OUTPUT FORMAT</dt><dd>3840 × 2160 · 59.94 HZ</dd></div>
        <div><dt>FRAME SYNC</dt><dd>${lm(e.phase)}</dd></div>
        <div><dt>REDUNDANCY</dt><dd>1:1 DEDICATED</dd></div>
        <div><dt>PROCESSOR</dt><dd>${n.processorPorts} PORTS · ${n.processorClass}</dd></div>
        <div><dt>AUDIO</dt><dd>${t.audioElements} DANTE ELEMENTS</dd></div>
        <div><dt>EDID</dt><dd>LOCKED PROFILE · UHD-1</dd></div>
      </dl>
      ${e.phase===`rerouting`?pm(e.rerouteProgress,`FRAME-SYNC VALIDATION`):``}
    </section>
  `}function rm(e){let t=e.incidentId!==null&&e.phase!==`ready`;return`
    <section class="crt-view crt-services" role="tabpanel">
      <header class="crt-view-heading">
        <div><small>VENUE SERVICES PERSPECTIVE</small><h2>EVENT RESPONSE</h2></div>
        <span>${t?e.incidentId:`NO OPEN INCIDENTS`}</span>
      </header>
      <div class="crt-service-clock ${t&&e.phase!==`recovered`?`is-running`:``}">
        <small>REMOTE RECOVERY CLOCK</small>
        <strong>${xm(e.incidentSeconds)}</strong>
        <span>${e.phase===`recovered`?`CONTAINED`:t?`SLA ACTIVE`:`STANDBY`}</span>
      </div>
      <ol class="crt-response-steps">
        ${dm(`01`,`Incident automatically created`,t,!1)}
        ${dm(`02`,`Signal path diagnosed`,[`diagnosed`,`rerouting`,`recovered`].includes(e.phase),e.phase===`incident`)}
        ${dm(`03`,`Remote failover authorized`,[`rerouting`,`recovered`].includes(e.phase),e.phase===`diagnosed`)}
        ${dm(`04`,`Proof-of-play confirmed`,e.phase===`recovered`,e.phase===`rerouting`)}
        ${dm(`05`,`Field follow-up after doors`,e.phase===`recovered`,!1)}
      </ol>
      <div class="crt-dispatch-note">
        <i></i><div><small>FIELD DISPATCH</small><strong>${e.phase===`recovered`?`DEFERRED — REMOTE RECOVERY SUCCESSFUL`:t?`TEAM HELD AT NORTH SERVICE APRON`:`CREW READY`}</strong></div>
      </div>
    </section>
  `}function im(e){let t=e.phase===`recovered`||e.phase===`ready`;return`
    <section class="crt-view crt-media" role="tabpanel">
      <header class="crt-view-heading">
        <div><small>MEDIA & SPONSORSHIP PERSPECTIVE</small><h2>CHAMPIONSHIP TAKEOVER</h2></div>
        <span>CAMPAIGN 24-017</span>
      </header>
      <div class="crt-campaign-frame ${t?`is-delivered`:`is-interrupted`}">
        <div class="crt-campaign-art"><span>ANC</span><b>PARTNER<br />TAKEOVER</b><i></i></div>
        <div class="crt-proof-status">
          <small>PROOF OF PLAY</small>
          <strong>${e.proofOfPlay}</strong>
          <span>${t?`FRAME LOCK · 59.94 HZ`:`INTERRUPTION · ${xm(e.incidentSeconds)}`}</span>
        </div>
      </div>
      <div class="crt-inventory-map">
        ${fm(`MAIN BOARD`,e.mainBoard)}
        ${fm(`CENTER HUNG`,`online`)}
        ${fm(`EAST RIBBON`,`online`)}
        ${fm(`WEST RIBBON`,`online`)}
      </div>
      <dl class="crt-media-value">
        <div><dt>CONTRACTED VALUE</dt><dd>$184,000</dd></div>
        <div><dt>ACTIVE INVENTORY</dt><dd>${t?`8 / 8`:`7 / 8`}</dd></div>
        <div><dt>DELIVERY STATE</dt><dd>${t?`PROTECTED`:`AT RISK`}</dd></div>
      </dl>
    </section>
  `}function am(e){let t=e.revenueProtected>0;return`
    <section class="crt-view crt-executive" role="tabpanel">
      <header class="crt-view-heading">
        <div><small>EXECUTIVE PERSPECTIVE</small><h2>ONE VENUE. THREE OUTCOMES.</h2></div>
        <span>LIVE COMMAND</span>
      </header>
      <div class="crt-readiness-gauge" style="--readiness:${e.venueReadiness}">
        <div><strong>${e.venueReadiness}</strong><span>%</span><small>VENUE READY</small></div>
      </div>
      <div class="crt-outcome-grid">
        <article><i class="is-tech"></i><small>TECHNOLOGY</small><strong>${e.mainBoard===`online`?`SYSTEMS HEALTHY`:`FAILOVER ACTIVE`}</strong><span>${e.uptimePercent.toFixed(2)}% network uptime</span></article>
        <article><i class="is-service"></i><small>VENUE SERVICES</small><strong>${e.phase===`recovered`?`CONTAINED REMOTELY`:e.incidentId?`INCIDENT ACTIVE`:`TEAM READY`}</strong><span>${e.incidentId??`No open incidents`}</span></article>
        <article><i class="is-media"></i><small>MEDIA</small><strong>${t?`$184K PROTECTED`:e.exposureAtRisk>0?`$184K AT RISK`:`DELIVERY VERIFIED`}</strong><span>${e.proofOfPlay} proof-of-play</span></article>
      </div>
      <p class="crt-executive-line">The same physical screen is infrastructure, an operational responsibility, and contracted media inventory—at the same time.</p>
    </section>
  `}function om(e){return e.phase===`ready`?`<div class="crt-incident-banner is-ready"><i></i><div><small>SYSTEM ARMED</small><strong>Primary and dedicated backup paths synchronized</strong></div><span>READY</span></div>`:e.phase===`recovered`?`<div class="crt-incident-banner is-recovered"><i></i><div><small>${e.incidentId} CONTAINED</small><strong>Partner takeover restored through Backup A-02</strong></div><span>${xm(e.incidentSeconds)}</span></div>`:e.phase===`failed`?`<div class="crt-incident-banner is-critical"><i></i><div><small>VENUE RELEASE BLOCKED</small><strong>Recovery window expired before signal restoration</strong></div><span>FAILED</span></div>`:`<div class="crt-incident-banner is-critical"><i></i><div><small>${e.incidentId} · CRITICAL SIGNAL LOSS</small><strong>North Main Board primary render path offline</strong></div><span>${xm(e.incidentSeconds)}</span></div>`}function sm(e){return e.canDiagnose?`<button class="crt-primary-action" data-action="diagnose"><span>RUN PATH DIAGNOSTIC</span><b>01</b></button>`:e.canReroute?`<button class="crt-primary-action" data-action="route-backup"><span>ROUTE BACKUP A-02</span><b>02</b></button>`:e.phase===`rerouting`?`<button class="crt-primary-action" disabled><span>VALIDATING FRAME SYNC</span><b>${Math.round(e.rerouteProgress*100)}%</b></button>`:e.canRestart?`<button class="crt-primary-action" data-action="restart"><span>RESET INCIDENT DRILL</span><b>↻</b></button>`:`<button class="crt-primary-action" data-action="start-incident"><span>START INCIDENT DRILL</span><b>▶</b></button>`}function cm(e){return e===`incident`?`Identify the failed signal component`:e===`diagnosed`?`Authorize the dedicated backup route`:e===`rerouting`?`Hold for frame lock and proof-of-play`:e===`recovered`?`Review the cross-vertical outcome`:e===`failed`?`Reset the drill and recover faster`:`Inject a primary render-path failure`}function lm(e){return e===`rerouting`?`REVALIDATING LOCK`:e===`incident`||e===`diagnosed`||e===`failed`?`FREE-RUN · PATH DOWN`:`GENLOCK · TRI-LEVEL`}function um(e,t,n,r){return`<article class="crt-signal-node ${_m(n)}"><header><i></i><span>${vm(n)}</span></header><strong>${e}</strong><small>${t}</small><b>${r}</b></article>`}function dm(e,t,n,r){return`<li class="${n?`is-complete`:r?`is-active`:``}"><b>${e}</b><span>${t}</span><i>${n?`COMPLETE`:r?`ACTIVE`:`PENDING`}</i></li>`}function fm(e,t){return`<div class="${_m(t)}"><i></i><span>${e}</span><b>${vm(t)}</b></div>`}function pm(e,t){return`<div class="crt-progress"><div><small>${t}</small><strong>${Math.round(e*100)}%</strong></div><i><span style="width:${Math.round(e*100)}%"></span></i></div>`}function mm(e,t,n){let r=e.querySelector(t);r&&r.textContent!==n&&(r.textContent=n)}function hm(e,t,n){let r=e.querySelector(t);r&&r.innerHTML!==n&&(r.innerHTML=n)}function gm(e,t,n,r){return`<button data-action="camera" data-camera="${e}" aria-pressed="${e===r}"><b>${t}</b><span>${n}</span></button>`}function _m(e){return e===`online`?`is-online`:e===`standby`?`is-standby`:e===`routing`?`is-routing`:`is-offline`}function vm(e){return e===`online`?`ONLINE`:e===`standby`?`STANDBY`:e===`routing`?`ROUTING`:`SIGNAL LOST`}function ym(e){return e===`ready`?`SYSTEM READY`:e===`incident`?`INCIDENT ACTIVE`:e===`diagnosed`?`FAILURE ISOLATED`:e===`rerouting`?`BACKUP ROUTING`:e===`recovered`?`VENUE SHOW-READY`:`RECOVERY FAILED`}function bm(e){return e===`ready`||e===`recovered`?`is-online`:e===`rerouting`||e===`diagnosed`?`is-routing`:`is-offline`}function xm(e){let t=Math.max(0,Math.floor(e));return`${Math.floor(t/60).toString().padStart(2,`0`)}:${(t%60).toString().padStart(2,`0`)}`}function Sm(e){return`$${Math.round(e).toLocaleString(`en-US`)}`}var Cm=184e3,wm=75,Tm=2.8,Em=class{topology;phase=`ready`;perspective=`technology`;elapsedSeconds=0;incidentSeconds=0;rerouteElapsed=0;doorsInSeconds=2520;version=0;nextLogId=1;logs=[];constructor(e){this.topology=e,this.addLog(`SYSTEM`,`neutral`,`Venue twin armed · system design basis rev 02 Jul 2026.`),this.addLog(`TECH`,`success`,`${e.totalServers} servers and ${e.matrixSize??`design-review`}×${e.matrixSize??`design-review`} matrix verified.`)}update(e){let t=Number.isFinite(e)?Math.max(0,Math.min(e,5)):0;this.elapsedSeconds+=t,this.doorsInSeconds=Math.max(0,this.doorsInSeconds-t);let n=Math.floor(this.incidentSeconds);return(this.phase===`incident`||this.phase===`diagnosed`||this.phase===`rerouting`)&&(this.incidentSeconds+=t,this.phase===`rerouting`?(this.rerouteElapsed+=t,this.rerouteElapsed>=Tm&&this.completeReroute()):this.incidentSeconds>=wm&&this.failDrill()),Math.floor(this.incidentSeconds)!==n&&(this.version+=1),this.version>0}startIncident(){return this.phase===`ready`||this.phase===`recovered`||this.phase===`failed`?(this.phase=`incident`,this.incidentSeconds=0,this.rerouteElapsed=0,this.logs.length=0,this.addLog(`MEDIA`,`critical`,`Championship partner takeover interrupted on North Main Board.`),this.addLog(`SYSTEM`,`critical`,`Render A-01 heartbeat lost. Output path removed from matrix.`),this.addLog(`SERVICE`,`warning`,`Incident VS-2048 opened automatically. Response clock started.`),this.bump(),!0):!1}runDiagnostics(){return this.phase===`incident`?(this.phase=`diagnosed`,this.addLog(`TECH`,`success`,`Diagnostic complete: UI pair healthy, backup A-02 synchronized and ready.`),this.addLog(`SYSTEM`,`warning`,`Recommended action: route Backup A-02 to matrix input 05.`),this.bump(),!0):!1}routeBackup(){return this.phase===`diagnosed`?(this.phase=`rerouting`,this.rerouteElapsed=0,this.addLog(`TECH`,`warning`,`Matrix route change authorized. Frame-sync validation running.`),this.bump(),!0):!1}setPerspective(e){return e===this.perspective?!1:(this.perspective=e,this.bump(),!0)}restart(){this.phase=`ready`,this.incidentSeconds=0,this.rerouteElapsed=0,this.logs.length=0,this.addLog(`SYSTEM`,`neutral`,`Incident drill reset. Primary route restored and venue twin re-armed.`),this.bump()}getSnapshot(){let e=this.phase===`incident`||this.phase===`diagnosed`||this.phase===`rerouting`,t=this.phase===`recovered`,n=this.phase===`failed`,r=Math.min(36,this.incidentSeconds*.72),i=this.phase===`rerouting`?Math.min(1,this.rerouteElapsed/Tm):+!!t;return{version:this.version,phase:this.phase,perspective:this.perspective,elapsedSeconds:this.elapsedSeconds,incidentSeconds:this.incidentSeconds,rerouteProgress:i,doorsInSeconds:this.doorsInSeconds,primaryRender:e||n?`offline`:`online`,backupRender:this.phase===`rerouting`?`routing`:t?`online`:`standby`,matrixRoute:this.phase===`rerouting`?`UNROUTED`:t?`BACKUP A-02`:e||n?`UNROUTED`:`PRIMARY A-01`,mainBoard:this.phase===`rerouting`?`routing`:e||n?`offline`:`online`,proofOfPlay:this.phase===`rerouting`?`RECOVERING`:e||n?`INTERRUPTED`:`VERIFIED`,venueReadiness:n?42:t?100:Math.max(60,Math.round(96-r)),uptimePercent:Number(Math.max(98.5,99.98-this.incidentSeconds*.008).toFixed(2)),exposureAtRisk:e||n?Cm:0,revenueProtected:t?Cm:0,incidentId:e||n||t?`VS-2048`:null,canDiagnose:this.phase===`incident`,canReroute:this.phase===`diagnosed`,canRestart:t||n,logs:Object.freeze(this.logs.slice())}}completeReroute(){this.phase===`rerouting`&&(this.phase=`recovered`,this.rerouteElapsed=Tm,this.addLog(`TECH`,`success`,`Backup A-02 locked. Matrix output 05 restored at 59.94 Hz.`),this.addLog(`MEDIA`,`success`,`Partner takeover resumed. Proof-of-play verification passed.`),this.addLog(`SERVICE`,`success`,`VS-2048 contained remotely. Field follow-up queued after doors.`),this.bump())}failDrill(){(this.phase===`incident`||this.phase===`diagnosed`)&&(this.phase=`failed`,this.addLog(`SYSTEM`,`critical`,`Recovery window expired. Venue release blocked.`),this.bump())}addLog(e,t,n){this.logs.unshift({id:this.nextLogId++,time:Dm(this.elapsedSeconds),vertical:e,tone:t,message:n}),this.logs.length>8&&(this.logs.length=8)}bump(){this.version+=1}};function Dm(e){let t=Math.max(0,Math.floor(e));return`${Math.floor(t/60).toString().padStart(2,`0`)}:${(t%60).toString().padStart(2,`0`)}`}var Om={venue:{position:[31,19,26],target:[0,7.4,-24],fov:57},"main-board":{position:[0,13.5,-28],target:[0,15.2,-58.5],fov:53},"signal-bay":{position:[-4.6,3.4,29],target:[4.9,2.1,18.4],fov:52}},km=class{canvas;renderer;scene=new Nn;camera=new Es(57,1,.08,260);quality;profiler;materials;world;lighting;atmosphere;pipeline;audio=new wd({ambienceVolume:.42,uiVolume:.66,sfxVolume:.72});topology=vp(gp);simulation=new Em(this.topology);dashboard;loop;cameraFromPosition=new W;cameraToPosition=new W;cameraFromTarget=new W;cameraToTarget=new W;cameraTarget=new W;cameraFromFov=57;cameraToFov=57;cameraTransition=1;elapsed=0;diagnosticsCooldown=0;diagnosticsPhase=``;lastRealtimeSeconds=0;lastSnapshot;lastVisualDiagnostics;outputLogoDataUrl=null;disposed=!1;constructor(e,t){this.canvas=e,this.renderer=xd(e),Yd(this.renderer),this.quality=new bd(this.renderer),this.materials=new Qd,this.materials.configureForRenderer(this.renderer),this.world=up({materials:this.materials,initialShowProgress:1}),this.lighting=Zd(this.scene,{showProgress:1,shadowMapSize:this.quality.profile.shadowMapSize}),this.atmosphere=qd({rainDrops:Math.round(300*this.quality.profile.particleScale),mistCards:Math.max(7,Math.round(11*this.quality.profile.worldDetail)),dustMotes:Math.round(70*this.quality.profile.particleScale)}),this.atmosphere.setRainIntensity(.16),this.atmosphere.setShowProgress(1),this.scene.add(this.world.root,this.atmosphere.root,this.camera);let n=this.quality.profile.preset===`performance`?`mobile`:this.quality.profile.preset===`balanced`?`balanced`:`high`;this.pipeline=gf(this.renderer,this.scene,this.camera,{quality:n,bloom:this.quality.profile.postProcessing,bloomStrength:Math.min(.38,this.quality.profile.bloomStrength),maxDpr:this.quality.profile.maxDpr}),this.profiler=new _d(this.renderer),this.lastVisualDiagnostics=Jd(this.renderer,this.scene,this.pipeline.postProcessing),this.lastSnapshot=this.simulation.getSnapshot(),this.dashboard=new Gp({mount:t,topology:this.topology,actions:{onStartIncident:()=>this.handleStartIncident(),onDiagnose:()=>this.handleDiagnose(),onRouteBackup:()=>this.handleRouteBackup(),onRestart:()=>this.handleRestart(),onPerspective:e=>{this.simulation.setPerspective(e)&&this.renderDashboard(!0),this.audio.uiConfirm()},onCamera:e=>{this.setCamera(e),this.audio.uiConfirm()},onToggleMute:()=>this.audio.toggleMuted(),onBuildStoryPackage:e=>this.buildStoryPackage(e),onHover:()=>this.audio.uiHover()}}),this.setCamera(`venue`,!0),this.world.resetDisplaySignalStates(),this.audio.startArenaAmbience(`powered`),this.loop=new vd((e,t)=>this.update(e,t),()=>this.render()),this.resize(),this.renderDashboard(!0),this.hideBootScreen(),this.publishDiagnostics()}start(){this.loop.start()}dispose(){this.disposed||(this.disposed=!0,this.loop.stop(),this.dashboard.destroy(),this.audio.dispose(),this.atmosphere.dispose(),this.lighting.dispose(),this.world.dispose(),this.pipeline.dispose(),this.materials.dispose(),this.renderer.dispose(),window.__THREE_GAME_DIAGNOSTICS__=void 0,document.body.classList.remove(`is-control-room`),delete document.body.dataset.twinPhase)}update(e,t){let n=Math.min(e,.05),r=this.lastRealtimeSeconds===0?n:Math.max(0,Math.min(t-this.lastRealtimeSeconds,1));this.lastRealtimeSeconds=t,this.elapsed+=n,this.simulation.update(r),this.lastSnapshot=this.simulation.getSnapshot(),this.updateCamera(n),this.world.update(n,this.elapsed,this.camera.position),this.lighting.update(this.elapsed,this.camera.position),this.atmosphere.update(n,this.elapsed,this.camera.position),this.profiler.update(n),this.resize(),this.renderDashboard(),this.diagnosticsCooldown+=n,this.diagnosticsCooldown>=.75&&(this.diagnosticsCooldown=0,this.lastVisualDiagnostics=Jd(this.renderer,this.scene,this.pipeline.postProcessing),this.publishDiagnostics())}render(){this.pipeline.render(1/60,this.elapsed)}handleStartIncident(){this.simulation.startIncident()&&(this.world.setDisplaySignalState(`end-zone-scoreboard`,`offline`),this.audio.uiError(),this.audio.setArenaEnergy(`emergency`,.45),this.setCamera(`main-board`),this.renderDashboard(!0))}handleDiagnose(){this.simulation.runDiagnostics()&&(this.world.setDisplaySignalState(`end-zone-scoreboard`,`degraded`),this.audio.diagnosticScan(.96),this.setCamera(`signal-bay`),this.renderDashboard(!0))}handleRouteBackup(){this.simulation.routeBackup()&&(this.world.setDisplaySignalState(`end-zone-scoreboard`,`rerouting`),this.audio.repairPulse(.65),this.setCamera(`main-board`),this.renderDashboard(!0))}handleRestart(){this.simulation.restart(),this.world.resetDisplaySignalStates(),this.world.setShowProgress(1),this.lighting.setShowProgress(1),this.atmosphere.setShowProgress(1),this.audio.restart(),this.audio.setArenaEnergy(`powered`,.5),this.audio.uiConfirm(),this.setCamera(`venue`),this.renderDashboard(!0)}async buildStoryPackage(e){this.outputLogoDataUrl||=await Ep(gd(`assets/brand/anc-blue.png`)),this.audio.diagnosticScan(.88);let t=Sp(e,this.topology,{logoSrc:this.outputLogoDataUrl});return this.audio.uiConfirm(),t}applyCompletionEffects(){this.lastSnapshot.phase===`recovered`&&this.world.getDisplaySignalState(`end-zone-scoreboard`)!==`live`&&(this.world.setDisplaySignalState(`end-zone-scoreboard`,`live`),this.world.setShowProgress(1),this.lighting.setShowProgress(1),this.atmosphere.setShowProgress(1),this.audio.setArenaEnergy(`finale`,.75),this.setCamera(`venue`))}renderDashboard(e=!1){this.applyCompletionEffects(),this.dashboard.render(this.lastSnapshot,e),this.lastSnapshot.phase!==this.diagnosticsPhase&&this.publishDiagnostics()}setCamera(e,t=!1){let n=Om[e];this.cameraFromPosition.copy(this.camera.position),this.cameraToPosition.fromArray(n.position),this.cameraFromTarget.copy(this.cameraTarget),this.cameraToTarget.fromArray(n.target),this.cameraFromFov=this.camera.fov,this.cameraToFov=n.fov,this.cameraTransition=+!!t,t&&(this.camera.position.copy(this.cameraToPosition),this.cameraTarget.copy(this.cameraToTarget),this.camera.fov=this.cameraToFov,this.camera.updateProjectionMatrix(),this.camera.lookAt(this.cameraTarget))}updateCamera(e){this.cameraTransition<1&&(this.cameraTransition=Math.min(1,this.cameraTransition+e/1.15));let t=this.cameraTransition,n=t*t*(3-2*t);this.camera.position.lerpVectors(this.cameraFromPosition,this.cameraToPosition,n),this.cameraTarget.lerpVectors(this.cameraFromTarget,this.cameraToTarget,n),this.camera.fov=H.lerp(this.cameraFromFov,this.cameraToFov,n),this.camera.updateProjectionMatrix(),this.camera.lookAt(this.cameraTarget)}resize(){let e=Math.max(1,Math.floor(this.canvas.clientWidth)),t=Math.max(1,Math.floor(this.canvas.clientHeight)),n=Math.floor(e*Math.min(devicePixelRatio||1,this.quality.profile.maxDpr)),r=Math.floor(t*Math.min(devicePixelRatio||1,this.quality.profile.maxDpr));this.canvas.width===n&&this.canvas.height===r||(this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.pipeline.resize(e,t))}publishDiagnostics(){let e=this.profiler.snapshot,t=this.renderer.domElement;window.__THREE_GAME_DIAGNOSTICS__={frame:Math.floor(this.elapsed*60),elapsed:this.elapsed,score:this.lastSnapshot.revenueProtected,targetScore:184e3,complete:this.lastSnapshot.phase===`recovered`,mode:`control-room`,phase:this.lastSnapshot.phase,player:{position:{x:this.camera.position.x,y:this.camera.position.y,z:this.camera.position.z},speed:0,health:this.lastSnapshot.venueReadiness},weapon:{},enemies:[],renderer:{...this.lastVisualDiagnostics.renderer,fps:e.fps,frameMs:e.frameMs,onePercentLowFps:e.onePercentLowFps},scene:this.lastVisualDiagnostics.scene,world:{...this.world.diagnostics,mainBoardSignal:this.world.getDisplaySignalState(`end-zone-scoreboard`),topology:{ruleVersion:this.topology.ruleVersion,totalServers:this.topology.totalServers,matrixSize:this.topology.matrixSize}},quality:this.lastVisualDiagnostics.quality,canvas:{clientWidth:t.clientWidth,clientHeight:t.clientHeight,width:t.width,height:t.height,dpr:this.renderer.getPixelRatio()},venueTwin:this.lastSnapshot},this.diagnosticsPhase=this.lastSnapshot.phase}hideBootScreen(){let e=document.querySelector(`#boot-screen`),t=e?.querySelector(`small`);t&&(t.textContent=`VENUE TWIN ONLINE`),requestAnimationFrame(()=>e?.classList.add(`is-hidden`))}},Am=class{surface;keys=new Set;move=new U;look=new U;touchMove=new U;touchLook={id:null,lastX:0,lastY:0};touchMoveState={id:null,originX:0,originY:0};mouseFire=!1;mouseAim=!1;jumpPressed=!1;reloadPressed=!1;interactPressed=!1;meleePressed=!1;pausePressed=!1;touchInteract=!1;gamepadJumpHeld=!1;gamepadReloadHeld=!1;gamepadPauseHeld=!1;touchButtons=[];constructor(e){this.surface=e,e.tabIndex=0,e.addEventListener(`click`,this.onClick),e.addEventListener(`contextmenu`,this.onContextMenu),e.addEventListener(`mousedown`,this.onMouseDown),window.addEventListener(`mouseup`,this.onMouseUp),window.addEventListener(`mousemove`,this.onMouseMove),window.addEventListener(`keydown`,this.onKeyDown),window.addEventListener(`keyup`,this.onKeyUp),window.addEventListener(`blur`,this.resetHeldInputs),document.addEventListener(`visibilitychange`,this.onVisibilityChange),e.addEventListener(`pointerdown`,this.onTouchDown,{passive:!1}),e.addEventListener(`pointermove`,this.onTouchMove,{passive:!1}),e.addEventListener(`pointerup`,this.onTouchUp,{passive:!1}),e.addEventListener(`pointercancel`,this.onTouchUp,{passive:!1}),window.addEventListener(`game-intent`,this.onGameIntent),document.querySelectorAll(`[data-game-action]`).forEach(e=>{e.addEventListener(`pointerdown`,this.onTouchButtonDown),e.addEventListener(`pointerup`,this.onTouchButtonUp),e.addEventListener(`pointercancel`,this.onTouchButtonUp),this.touchButtons.push(e)})}sample(){this.move.set(0,0),(this.keys.has(`KeyA`)||this.keys.has(`ArrowLeft`))&&--this.move.x,(this.keys.has(`KeyD`)||this.keys.has(`ArrowRight`))&&(this.move.x+=1),(this.keys.has(`KeyW`)||this.keys.has(`ArrowUp`))&&(this.move.y+=1),(this.keys.has(`KeyS`)||this.keys.has(`ArrowDown`))&&--this.move.y,this.move.add(this.touchMove);let e=navigator.getGamepads?.()[0]??null;if(e){let t=e=>Math.abs(e)<.14?0:e;this.move.x+=t(e.axes[0]??0),this.move.y-=t(e.axes[1]??0),this.look.x+=t(e.axes[2]??0)*18,this.look.y+=t(e.axes[3]??0)*18;let n=!!e.buttons[0]?.pressed,r=!!e.buttons[2]?.pressed,i=!!e.buttons[9]?.pressed;n&&!this.gamepadJumpHeld&&(this.jumpPressed=!0),r&&!this.gamepadReloadHeld&&(this.reloadPressed=!0),i&&!this.gamepadPauseHeld&&(this.pausePressed=!0),this.gamepadJumpHeld=n,this.gamepadReloadHeld=r,this.gamepadPauseHeld=i}this.move.lengthSq()>1&&this.move.normalize();let t={move:this.move.clone(),look:this.look.clone(),fire:this.mouseFire||this.keys.has(`Enter`)||!!e?.buttons[7]?.pressed,aim:this.mouseAim||this.keys.has(`KeyQ`)||!!e?.buttons[6]?.pressed,sprint:this.keys.has(`ShiftLeft`)||this.keys.has(`ShiftRight`)||!!e?.buttons[10]?.pressed,crouch:this.keys.has(`ControlLeft`)||this.keys.has(`ControlRight`)||this.keys.has(`KeyC`),jumpPressed:this.jumpPressed,reloadPressed:this.reloadPressed,interactPressed:this.interactPressed||!!e?.buttons[3]?.pressed,interact:this.keys.has(`KeyE`)||this.touchInteract||!!e?.buttons[3]?.pressed,meleePressed:this.meleePressed,pausePressed:this.pausePressed,pointerLocked:document.pointerLockElement===this.surface};return this.look.set(0,0),this.jumpPressed=!1,this.reloadPressed=!1,this.interactPressed=!1,this.meleePressed=!1,this.pausePressed=!1,t}requestPointerLock(){document.pointerLockElement!==this.surface&&this.surface.requestPointerLock?.(),this.surface.focus({preventScroll:!0})}dispose(){this.surface.removeEventListener(`click`,this.onClick),this.surface.removeEventListener(`contextmenu`,this.onContextMenu),this.surface.removeEventListener(`mousedown`,this.onMouseDown),window.removeEventListener(`mouseup`,this.onMouseUp),window.removeEventListener(`mousemove`,this.onMouseMove),window.removeEventListener(`keydown`,this.onKeyDown),window.removeEventListener(`keyup`,this.onKeyUp),window.removeEventListener(`blur`,this.resetHeldInputs),document.removeEventListener(`visibilitychange`,this.onVisibilityChange),this.surface.removeEventListener(`pointerdown`,this.onTouchDown),this.surface.removeEventListener(`pointermove`,this.onTouchMove),this.surface.removeEventListener(`pointerup`,this.onTouchUp),this.surface.removeEventListener(`pointercancel`,this.onTouchUp),window.removeEventListener(`game-intent`,this.onGameIntent);for(let e of this.touchButtons)e.removeEventListener(`pointerdown`,this.onTouchButtonDown),e.removeEventListener(`pointerup`,this.onTouchButtonUp),e.removeEventListener(`pointercancel`,this.onTouchButtonUp)}onClick=()=>this.requestPointerLock();onContextMenu=e=>e.preventDefault();onMouseDown=e=>{e.button===0&&(this.mouseFire=!0),e.button===2&&(this.mouseAim=!0)};onMouseUp=e=>{e.button===0&&(this.mouseFire=!1),e.button===2&&(this.mouseAim=!1)};onMouseMove=e=>{document.pointerLockElement===this.surface&&(this.look.x+=e.movementX,this.look.y+=e.movementY)};onKeyDown=e=>{[`Space`,`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`].includes(e.code)&&e.preventDefault(),e.repeat||(e.code===`Space`&&(this.jumpPressed=!0),e.code===`KeyR`&&(this.reloadPressed=!0),e.code===`KeyE`&&(this.interactPressed=!0),(e.code===`KeyV`||e.code===`KeyF`)&&(this.meleePressed=!0),(e.code===`Escape`||e.code===`KeyP`)&&(this.pausePressed=!0)),this.keys.add(e.code)};onKeyUp=e=>this.keys.delete(e.code);onTouchDown=e=>{if(!(e.pointerType!==`touch`&&!matchMedia(`(pointer: coarse)`).matches)){e.preventDefault(),e.clientX<window.innerWidth*.48&&this.touchMoveState.id===null?(this.touchMoveState.id=e.pointerId,this.touchMoveState.originX=e.clientX,this.touchMoveState.originY=e.clientY):this.touchLook.id===null&&(this.touchLook.id=e.pointerId,this.touchLook.lastX=e.clientX,this.touchLook.lastY=e.clientY);try{this.surface.setPointerCapture(e.pointerId)}catch{}}};onTouchMove=e=>{e.pointerType!==`touch`&&!matchMedia(`(pointer: coarse)`).matches||(e.preventDefault(),e.pointerId===this.touchMoveState.id?(this.touchMove.set(H.clamp((e.clientX-this.touchMoveState.originX)/54,-1,1),H.clamp((this.touchMoveState.originY-e.clientY)/54,-1,1)),this.touchMove.lengthSq()>1&&this.touchMove.normalize()):e.pointerId===this.touchLook.id&&(this.look.x+=(e.clientX-this.touchLook.lastX)*1.4,this.look.y+=(e.clientY-this.touchLook.lastY)*1.4,this.touchLook.lastX=e.clientX,this.touchLook.lastY=e.clientY))};onTouchUp=e=>{e.pointerType!==`touch`&&!matchMedia(`(pointer: coarse)`).matches||(e.preventDefault(),e.pointerId===this.touchMoveState.id&&(this.touchMoveState.id=null,this.touchMove.set(0,0)),e.pointerId===this.touchLook.id&&(this.touchLook.id=null))};onGameIntent=e=>{let{action:t,active:n=!0}=e.detail;t===`fire`&&(this.mouseFire=n),t===`aim`&&(this.mouseAim=n),t===`jump`&&n&&(this.jumpPressed=!0),t===`reload`&&n&&(this.reloadPressed=!0),t===`interact`&&(this.touchInteract=n,n&&(this.interactPressed=!0)),t===`pause`&&n&&(this.pausePressed=!0)};onTouchButtonDown=e=>{e.preventDefault(),e.stopPropagation();let t=e.currentTarget.dataset.gameAction;t&&this.applyTouchAction(t,!0)};onTouchButtonUp=e=>{e.preventDefault(),e.stopPropagation();let t=e.currentTarget.dataset.gameAction;t&&this.applyTouchAction(t,!1)};applyTouchAction(e,t){e===`fire`&&(this.mouseFire=t),e===`aim`&&(this.mouseAim=t),e===`interact`&&(this.touchInteract=t,t&&(this.interactPressed=!0))}onVisibilityChange=()=>{document.hidden&&this.resetHeldInputs()};resetHeldInputs=()=>{this.keys.clear(),this.mouseFire=!1,this.mouseAim=!1,this.touchMove.set(0,0),this.touchMoveState.id=null,this.touchLook.id=null,this.touchInteract=!1}},jm=Object.freeze([{label:`Branch power verified`,durationSeconds:.65,intensity:.1},{label:`Processor input locked`,durationSeconds:.75,intensity:.24},{label:`Fiber/data restored`,durationSeconds:.9,intensity:.42},{label:`Receiving-card cascade verified`,durationSeconds:1.05,intensity:.68},{label:`Content output validated`,durationSeconds:1.15,intensity:1}]);function Mm(e=`field-level-north-service-wall`){return{displayId:e,name:`North Field-Level Service Wall`,type:`field-level`,pixelPitchMm:3.9,location:`North service apron / field-level display bay`,sourceInput:{status:`nominal`,sourceLabel:`Program A`,connector:`BNC`,transport:`3G-SDI`,format:`1080p`,frameRateHz:59.94,locked:!0},processorOutput:{status:`degraded`,outputLabel:`North service wall / output 1`,canvasWidth:1920,canvasHeight:1080,frameRateHz:59.94,frameSyncLocked:!1},fiberDistribution:{status:`critical`,activePath:`A`,pathA:{label:`A`,status:`critical`,linkState:`down`,receiveLevelDbm:-18.7},pathB:{label:`B`,status:`nominal`,linkState:`standby`,receiveLevelDbm:-7.4}},receiveCardCascade:{status:`critical`,onlineCabinets:30,totalCabinets:32,firstFaultCabinet:`NW-14`,inputLinkLocked:!1,outputLinkLocked:!1},cabinetFaults:[{cabinet:`NW-14`,component:`receiving-card`,faultCode:`RX-LINK-DOWN`,severity:`critical`,detail:`Receiving-card input is not locked to fiber path A.`},{cabinet:`NW-14`,component:`data-jumper`,faultCode:`CASCADE-OUT-DOWN`,severity:`critical`,detail:`Data cascade output to downstream cabinet NW-15 is unavailable.`},{cabinet:`NW-15`,component:`power-supply`,faultCode:`PSU-5V-LOW`,severity:`advisory`,detail:`PSU-2 output is below the nominal 5.0 VDC rail.`}],thermal:{status:`nominal`,sensor:`NW-14 receiving-card onboard sensor`,measuredC:47.8,warningThresholdC:65,criticalThresholdC:75},scanConfidence:.96,signal:{status:`nominal`,protocol:`3G-SDI`,input:`Program A`,packetLossPercent:0},power:{status:`advisory`,feed:`PDU-B / branch 07`,loadPercent:78,redundancyOnline:!0,branchInput:{sensor:`PDU-B branch 07 line input`,measuredVac:208.2,nominalVac:208},psuOutput:{sensor:`NW-15 PSU-2 DC output rail`,cabinet:`NW-15`,measuredVdc:4.74,nominalVdc:5}},processor:{status:`degraded`,model:`Primary LED processor`,firmware:`Production release`,frameSyncLocked:!1},moduleFailures:[{cabinet:`NW-15`,module:`R04-C01`,fault:`Under-voltage blanking from PSU-2`},{cabinet:`NW-15`,module:`R04-C02`,fault:`Under-voltage blanking from PSU-2`}],temperatureC:47.8,voltage:4.74,confidence:.96,recommendedAction:`Verify PDU-B branch 07 at 208 VAC, transfer processor output to fiber path B, reseat the NW-14 receiving-card data jumper, verify 5.0 VDC at NW-15 PSU-2, then validate cascade and frame lock.`}}var Nm=Object.freeze({waves:[{id:`infrastructure-defense`,enemyCount:5,archetype:`arena-intruder`,spawnIntervalSeconds:.75,intermissionSeconds:0}],displayDiagnostic:Mm(),revealDurationSeconds:2.8,scanDurationSeconds:2.4,repairDurationSeconds:4.5,interactionDecayPerSecond:.2,activationStages:jm,executiveMode:!1,missionTimeLimitSeconds:300}),Pm=class{events;config;snapshot;checkpoint;phaseTimer=0;spawnTimer=0;intermissionTimer=0;interactionActive=!1;activationStageElapsed=0;lastObjectiveCurrent=-1;lastObjectiveTarget=-1;constructor(e={},t){this.events=t,this.config={...Nm,...e,waves:e.waves??Nm.waves,displayDiagnostic:e.displayDiagnostic??Nm.displayDiagnostic,activationStages:e.activationStages??Nm.activationStages},this.snapshot={phase:`briefing`,checkpointId:`mission-start`,elapsedSeconds:0,remainingSeconds:this.config.missionTimeLimitSeconds??null,waveIndex:0,spawnedInWave:0,eliminatedEnemies:0,objectiveCurrent:0,objectiveTarget:1,interactionProgress:0,activationStage:-1,executiveMode:this.config.executiveMode??!1,combatEnabled:!1,retryAvailable:!1,failureReason:``},this.checkpoint={id:`mission-start`,phase:`tunnel`,elapsedSeconds:0,waveIndex:0,eliminatedEnemies:0}}start(){this.resetRuntime(),this.setPhase(`tunnel`),this.captureCheckpoint(`tunnel-entry`)}enterSeatingBowl(){this.snapshot.phase===`tunnel`&&(this.setPhase(`reveal`),this.phaseTimer=this.config.revealDurationSeconds,this.captureCheckpoint(`seating-bowl-reveal`))}update(e,t,n){if(this.snapshot.phase===`briefing`||this.snapshot.phase===`complete`||this.snapshot.phase===`failed`)return;let r=Math.min(Math.max(e,0),.1);if(this.snapshot.elapsedSeconds+=r,this.snapshot.remainingSeconds!==null&&(this.snapshot.remainingSeconds=Math.max(0,this.snapshot.remainingSeconds-r),this.snapshot.remainingSeconds===0)){this.fail(`Recovery window expired.`);return}this.snapshot.phase===`reveal`?(this.phaseTimer=Math.max(0,this.phaseTimer-r),this.phaseTimer===0&&(this.snapshot.executiveMode||this.config.waves.length===0?this.beginScan():this.beginDefense())):this.snapshot.phase===`defend`?this.updateDefense(r,t):this.snapshot.phase===`scan`?this.updateScan(r,n):this.snapshot.phase===`repair`?this.updateRepair(r,n):this.snapshot.phase===`activation`&&this.updateActivation(r)}notifyEnemyKilled(){this.snapshot.phase===`defend`&&(this.snapshot.eliminatedEnemies+=1,this.updateObjective(this.snapshot.eliminatedEnemies,this.totalEnemyCount()))}fail(e){this.snapshot.phase===`complete`||this.snapshot.phase===`failed`||(this.snapshot.failureReason=e,this.snapshot.retryAvailable=!0,this.setPhase(`failed`),this.events?.emit(`mission:failed`,{reason:e,retryAvailable:!0}))}retryFromCheckpoint(){return this.snapshot.retryAvailable?(this.snapshot.elapsedSeconds=this.checkpoint.elapsedSeconds,this.snapshot.remainingSeconds=this.config.missionTimeLimitSeconds===void 0?null:Math.max(0,this.config.missionTimeLimitSeconds-this.snapshot.elapsedSeconds),this.snapshot.waveIndex=this.checkpoint.waveIndex,this.snapshot.eliminatedEnemies=this.checkpoint.eliminatedEnemies,this.snapshot.spawnedInWave=0,this.snapshot.interactionProgress=0,this.snapshot.activationStage=-1,this.snapshot.retryAvailable=!1,this.snapshot.failureReason=``,this.spawnTimer=0,this.intermissionTimer=0,this.interactionActive=!1,this.setPhase(this.checkpoint.phase),this.snapshot.phase===`defend`?this.beginCurrentWave():this.snapshot.phase===`scan`&&this.updateObjective(0,1,`Scan damaged ANC display`),!0):!1}setExecutiveMode(e){this.snapshot.executiveMode=e,e&&this.snapshot.phase===`defend`&&this.beginScan()}isCombatEnabled(){return this.snapshot.combatEnabled}getSnapshot(){return this.snapshot}getDisplayDiagnostic(){return this.config.displayDiagnostic}resetRuntime(){this.snapshot.phase=`briefing`,this.snapshot.checkpointId=`mission-start`,this.snapshot.elapsedSeconds=0,this.snapshot.remainingSeconds=this.config.missionTimeLimitSeconds??null,this.snapshot.waveIndex=0,this.snapshot.spawnedInWave=0,this.snapshot.eliminatedEnemies=0,this.snapshot.objectiveCurrent=0,this.snapshot.objectiveTarget=1,this.snapshot.interactionProgress=0,this.snapshot.activationStage=-1,this.snapshot.combatEnabled=!1,this.snapshot.retryAvailable=!1,this.snapshot.failureReason=``,this.phaseTimer=0,this.spawnTimer=0,this.intermissionTimer=0,this.interactionActive=!1,this.activationStageElapsed=0,this.lastObjectiveCurrent=-1,this.lastObjectiveTarget=-1}beginDefense(){this.setPhase(`defend`),this.snapshot.combatEnabled=!0,this.snapshot.waveIndex=0,this.snapshot.eliminatedEnemies=0,this.captureCheckpoint(`infrastructure-defense`),this.updateObjective(0,this.totalEnemyCount(),`Defend technical infrastructure`),this.beginCurrentWave()}beginCurrentWave(){let e=this.config.waves[this.snapshot.waveIndex];if(!e){this.beginScan();return}this.snapshot.spawnedInWave=0,this.spawnTimer=0,this.intermissionTimer=e.intermissionSeconds,this.events?.emit(`mission:wave-started`,{waveId:e.id,enemyCount:e.enemyCount})}updateDefense(e,t){let n=this.config.waves[this.snapshot.waveIndex];if(!n){this.beginScan();return}if(this.intermissionTimer>0){this.intermissionTimer=Math.max(0,this.intermissionTimer-e);return}if(this.snapshot.spawnedInWave<n.enemyCount){this.spawnTimer-=e,this.spawnTimer<=0&&(this.events?.emit(`mission:spawn-requested`,{waveId:n.id,enemyIndex:this.snapshot.spawnedInWave,archetype:n.archetype}),this.snapshot.spawnedInWave+=1,this.spawnTimer+=n.spawnIntervalSeconds);return}t>0||(this.snapshot.waveIndex+=1,this.snapshot.waveIndex>=this.config.waves.length?this.beginScan():this.beginCurrentWave())}beginScan(){this.snapshot.combatEnabled=!1,this.snapshot.interactionProgress=0,this.interactionActive=!1,this.setPhase(`scan`),this.captureCheckpoint(`display-diagnostics`),this.updateObjective(0,1,`Scan damaged ANC display`)}updateScan(e,t){t.interactHeld&&t.aimedAtDisplay&&t.withinInteractionRange?(this.interactionActive||(this.interactionActive=!0,this.events?.emit(`scanner:started`,{displayId:this.config.displayDiagnostic.displayId,requiredSeconds:this.config.scanDurationSeconds})),this.snapshot.interactionProgress=Math.min(1,this.snapshot.interactionProgress+e/this.config.scanDurationSeconds),this.events?.emit(`scanner:progress`,{displayId:this.config.displayDiagnostic.displayId,progress:this.snapshot.interactionProgress}),this.snapshot.interactionProgress>=1&&(this.events?.emit(`scanner:completed`,{diagnostic:this.config.displayDiagnostic}),this.setPhase(`repair`),this.snapshot.interactionProgress=0,this.interactionActive=!1,this.updateObjective(0,1,`Hold to repair display signal path`))):(this.interactionActive=!1,this.snapshot.interactionProgress=Math.max(0,this.snapshot.interactionProgress-this.config.interactionDecayPerSecond*e))}updateRepair(e,t){t.interactHeld&&t.aimedAtDisplay&&t.withinInteractionRange?(this.interactionActive||(this.interactionActive=!0,this.events?.emit(`repair:started`,{displayId:this.config.displayDiagnostic.displayId,requiredSeconds:this.config.repairDurationSeconds})),this.snapshot.interactionProgress=Math.min(1,this.snapshot.interactionProgress+e/this.config.repairDurationSeconds),this.events?.emit(`repair:progress`,{displayId:this.config.displayDiagnostic.displayId,progress:this.snapshot.interactionProgress}),this.snapshot.interactionProgress>=1&&(this.events?.emit(`repair:completed`,{displayId:this.config.displayDiagnostic.displayId}),this.beginActivation())):this.interactionActive&&(this.interactionActive=!1,this.events?.emit(`repair:interrupted`,{displayId:this.config.displayDiagnostic.displayId,retainedProgress:this.snapshot.interactionProgress}))}beginActivation(){this.setPhase(`activation`),this.snapshot.interactionProgress=0,this.snapshot.activationStage=0,this.activationStageElapsed=0,this.emitActivationStage(),this.updateObjective(0,this.config.activationStages.length,`Restore display activation sequence`)}updateActivation(e){let t=this.config.activationStages[this.snapshot.activationStage];if(!t){this.complete();return}this.activationStageElapsed+=e,this.snapshot.interactionProgress=Math.min(1,this.activationStageElapsed/Math.max(t.durationSeconds,.001)),!(this.activationStageElapsed<t.durationSeconds)&&(this.snapshot.activationStage+=1,this.activationStageElapsed=0,this.updateObjective(this.snapshot.activationStage,this.config.activationStages.length,`Restore display activation sequence`),this.snapshot.activationStage>=this.config.activationStages.length?this.complete():this.emitActivationStage())}emitActivationStage(){let e=this.config.activationStages[this.snapshot.activationStage];e&&this.events?.emit(`display:activation-stage`,{displayId:this.config.displayDiagnostic.displayId,stage:this.snapshot.activationStage,stageCount:this.config.activationStages.length,label:e.label,intensity:e.intensity})}complete(){this.snapshot.combatEnabled=!1,this.snapshot.interactionProgress=1,this.setPhase(`complete`),this.events?.emit(`display:activated`,{displayId:this.config.displayDiagnostic.displayId}),this.events?.emit(`mission:completed`,{elapsedSeconds:this.snapshot.elapsedSeconds})}captureCheckpoint(e){this.snapshot.checkpointId=e,this.checkpoint={id:e,phase:this.snapshot.phase,elapsedSeconds:this.snapshot.elapsedSeconds,waveIndex:this.snapshot.waveIndex,eliminatedEnemies:this.snapshot.eliminatedEnemies},this.events?.emit(`mission:checkpoint`,{checkpointId:e,phase:this.snapshot.phase})}updateObjective(e,t,n){this.snapshot.objectiveCurrent=e,this.snapshot.objectiveTarget=t,!(e===this.lastObjectiveCurrent&&t===this.lastObjectiveTarget&&!n)&&(this.lastObjectiveCurrent=e,this.lastObjectiveTarget=t,this.events?.emit(`mission:objective`,{label:n??this.objectiveLabel(),current:e,target:t}))}objectiveLabel(){return this.snapshot.phase===`defend`?`Defend technical infrastructure`:this.snapshot.phase===`scan`?`Scan damaged ANC display`:this.snapshot.phase===`repair`?`Hold to repair display signal path`:this.snapshot.phase===`activation`?`Restore display activation sequence`:`Reach the seating bowl`}setPhase(e){if(e===this.snapshot.phase)return;let t=this.snapshot.phase;this.snapshot.phase=e,e!==`defend`&&(this.snapshot.combatEnabled=!1),this.events?.emit(`mission:phase`,{previous:t,current:e})}totalEnemyCount(){let e=0;for(let t of this.config.waves)e+=t.enemyCount;return e}},Fm=1e-8;function Im(e,t,n,r,i){let a=0,o=r,s=0,c=0;for(let r=0;r<3;r+=1){let i=r===0?e.x:r===1?e.y:e.z,l=r===0?t.x:r===1?t.y:t.z,u=r===0?n.min.x:r===1?n.min.y:n.min.z,d=r===0?n.max.x:r===1?n.max.y:n.max.z;if(Math.abs(l)<Fm){if(i<u||i>d)return!1;continue}let f=1/l,p=(u-i)*f,m=(d-i)*f,h=-Math.sign(l);if(p>m){let e=p;p=m,m=e}if(p>a&&(a=p,s=r,c=h),o=Math.min(o,m),a>o)return!1}return o<0||a>r?!1:(i.distance=Math.max(a,0),i.point.copy(t).multiplyScalar(i.distance).add(e),i.normal.set(0,0,0),s===0?i.normal.x=c:s===1?i.normal.y=c:i.normal.z=c,!0)}function Lm(e,t){return 1-Math.exp(-e*t)}var Rm=1e-4;function zm(){return{grounded:!1,hitCeiling:!1,contacts:0,blockedX:!1,blockedZ:!1}}function Bm(){return{colliderId:``,material:``,distance:1/0,point:new W,normal:new W}}var Vm=class{engine=`custom-authored-aabb`;fixedTimestepRecommended=1/120;colliders=[];scratchHit=Bm();scratchDirection=new W;floorY;characterContacts=0;raycasts=0;constructor(e=0){this.floorY=e}setFloorHeight(e){this.floorY=e}addAabb(e){if(e.min.x>e.max.x||e.min.y>e.max.y||e.min.z>e.max.z)throw Error(`Invalid AABB for collider "${e.id}".`);if(this.colliders.some(t=>t.id===e.id))throw Error(`Duplicate collider id "${e.id}".`);let t={id:e.id,bounds:new Jn(e.min.clone(),e.max.clone()),movementBlocking:e.movementBlocking??!0,bulletBlocking:e.bulletBlocking??!0,material:e.material??`concrete`,enabled:!0};return this.colliders.push(t),t}removeAabb(e){let t=this.colliders.findIndex(t=>t.id===e);return t<0?!1:(this.colliders.splice(t,1),!0)}getCollider(e){return this.colliders.find(t=>t.id===e)}getColliders(){return this.colliders}canOccupy(e,t){if(e.y<this.floorY-Rm)return!1;let n=e.x-t.radius,r=e.x+t.radius,i=e.y,a=e.y+t.height,o=e.z-t.radius,s=e.z+t.radius;for(let e of this.colliders)if(!(!e.enabled||!e.movementBlocking)&&this.overlaps(n,r,i,a,o,s,e.bounds))return!1;return!0}moveCharacter(e,t,n,r){return r.grounded=!1,r.hitCeiling=!1,r.contacts=0,r.blockedX=!1,r.blockedZ=!1,this.moveHorizontalAxis(e,t.x,n,0,r),this.moveHorizontalAxis(e,t.z,n,2,r),this.moveVertical(e,t.y,n,r),e.y<=this.floorY+Rm&&(e.y=this.floorY,r.grounded=!0),this.characterContacts+=r.contacts,r}raycast(e,t,n,r,i=`bullet`){this.raycasts+=1;let a=n,o=!1;for(let n of this.colliders)n.enabled&&(i===`bullet`&&!n.bulletBlocking||i===`visibility`&&!n.bulletBlocking||Im(e,t,n.bounds,a,this.scratchHit)&&(a=this.scratchHit.distance,r.colliderId=n.id,r.material=n.material,r.distance=a,r.point.copy(this.scratchHit.point),r.normal.copy(this.scratchHit.normal),o=!0));return o}lineOfSight(e,t){this.scratchDirection.copy(t).sub(e);let n=this.scratchDirection.length();return n<=Rm?!0:(this.scratchDirection.multiplyScalar(1/n),!this.raycast(e,this.scratchDirection,n-Rm,this.scratchHit,`visibility`))}resetDiagnostics(){this.characterContacts=0,this.raycasts=0}getDiagnostics(e){return e.colliderCount=this.colliders.length,e.characterContacts=this.characterContacts,e.raycasts=this.raycasts,e}moveHorizontalAxis(e,t,n,r,i){if(!(Math.abs(t)<=2**-52)){r===0?e.x+=t:e.z+=t;for(let a of this.colliders){if(!a.enabled||!a.movementBlocking)continue;let o=a.bounds;this.characterOverlaps(e,n,o)&&(r===0?(e.x=t>0?o.min.x-n.radius-Rm:o.max.x+n.radius+Rm,i.blockedX=!0):(e.z=t>0?o.min.z-n.radius-Rm:o.max.z+n.radius+Rm,i.blockedZ=!0),i.contacts+=1)}}}moveVertical(e,t,n,r){let i=e.y;e.y+=t,e.y<this.floorY&&(e.y=this.floorY,r.grounded=!0,r.contacts+=1);for(let a of this.colliders){if(!a.enabled||!a.movementBlocking)continue;let o=a.bounds;if(!this.horizontalOverlap(e,n.radius,o))continue;let s=i+n.height,c=e.y+n.height;t>0&&s<=o.min.y+Rm&&c>=o.min.y?(e.y=o.min.y-n.height-Rm,r.hitCeiling=!0,r.contacts+=1):t<=0&&i>=o.max.y-Rm&&e.y<=o.max.y&&(e.y=o.max.y+Rm,r.grounded=!0,r.contacts+=1)}}characterOverlaps(e,t,n){return this.overlaps(e.x-t.radius,e.x+t.radius,e.y,e.y+t.height,e.z-t.radius,e.z+t.radius,n)}horizontalOverlap(e,t,n){return e.x+t>n.min.x+Rm&&e.x-t<n.max.x-Rm&&e.z+t>n.min.z+Rm&&e.z-t<n.max.z-Rm}overlaps(e,t,n,r,i,a,o){return t>o.min.x+Rm&&e<o.max.x-Rm&&r>o.min.y+Rm&&n<o.max.y-Rm&&a>o.min.z+Rm&&i<o.max.z-Rm}},Hm=class{state;constructor(e=2135587861){this.state=e>>>0||1}reset(e){this.state=e>>>0||1}nextUint(){let e=this.state;return e^=e<<13,e^=e>>>17,e^=e<<5,this.state=e>>>0,this.state}next(){return this.nextUint()/4294967296}signed(){return this.next()*2-1}range(e,t){return e+(t-e)*this.next()}chance(e){return this.next()<e}},Um=class{onDestroyed;events;faction=`neutral`;bounds;id;maximumHealth;explosive;explosionRadius;explosionDamage;debrisCount;health;destroyed=!1;rayHit={distance:0,point:new W,normal:new W};constructor(e,t,n){this.onDestroyed=t,this.events=n,this.id=e.id,this.maximumHealth=Math.max(1,e.maximumHealth),this.health=this.maximumHealth,this.explosive=e.explosive??!1,this.explosionRadius=e.explosionRadius??5.5,this.explosionDamage=e.explosionDamage??90,this.debrisCount=e.debrisCount??9,this.bounds=new Jn(e.center.clone().sub(e.halfExtents),e.center.clone().add(e.halfExtents))}get enabled(){return!this.destroyed}raycast(e,t,n,r){return this.destroyed||!Im(e,t,this.bounds,n,this.rayHit)?!1:(r.targetId=this.id,r.faction=this.faction,r.distance=this.rayHit.distance,r.point.copy(this.rayHit.point),r.normal.copy(this.rayHit.normal),r.hitZone=`structure`,r.damageMultiplier=1,r.target=this,!0)}applyDamage(e){if(this.destroyed||e.amount<=0)return 0;let t=Math.min(this.health,e.amount);return this.health-=t,this.events?.emit(`prop:damaged`,{propId:this.id,amount:t,remainingHealth:this.health}),this.health<=0&&(this.destroyed=!0,this.events?.emit(`prop:destroyed`,{propId:this.id,explosive:this.explosive}),this.onDestroyed(this,e.sourceId)),t}getWorldCenter(e){return this.bounds.getCenter(e)}reset(){this.health=this.maximumHealth,this.destroyed=!1}},Wm=class{events;props=[];debris=[];explosions=[];random;center=new W;targetCenter=new W;direction=new W;displacement=new W;debrisRayHit=Bm();damageRequest={amount:0,sourceId:``,kind:`explosive`,hitZone:`body`,point:new W,direction:new W};constructor(e=221978965,t=128,n){this.events=n,this.random=new Hm(e);for(let e=0;e<t;e+=1)this.debris.push({index:e,active:!1,position:new W,velocity:new W,rotation:new W,angularVelocity:new W,remainingSeconds:0,scale:1})}addProp(e){if(this.props.some(t=>t.id===e.id))throw Error(`Duplicate destructible prop id "${e.id}".`);let t=new Um(e,(e,t)=>{this.onPropDestroyed(e,t)},this.events);return this.props.push(t),t}update(e,t,n,r,i){this.resolveExplosions(n,r,i),this.updateDebris(Math.min(Math.max(e,0),.05),t)}getProps(){return this.props}getDebris(){return this.debris}reset(){for(let e of this.props)e.reset();for(let e of this.debris)e.active=!1;this.explosions.length=0}getDiagnostics(e){let t=0,n=0;for(let e of this.props)e.enabled&&(t+=1);for(let e of this.debris)e.active&&(n+=1);return e.intactProps=t,e.activeDebris=n,e.queuedExplosions=this.explosions.length,e}onPropDestroyed(e,t){e.getWorldCenter(this.center),this.spawnDebris(this.center,e.debrisCount,e.explosive?1.5:1),e.explosive&&(this.explosions.push({propId:e.id,position:this.center.clone(),radius:e.explosionRadius,damage:e.explosionDamage}),this.events?.emit(`prop:exploded`,{propId:e.id,radius:e.explosionRadius,damage:e.explosionDamage,position:{x:this.center.x,y:this.center.y,z:this.center.z}}))}resolveExplosions(e,t,n){let r=0;for(;r<this.explosions.length;){let i=this.explosions[r];r+=1;for(let t of e){if(!t.enabled||t.id===i.propId)continue;t.getWorldCenter(this.targetCenter),this.direction.copy(this.targetCenter).sub(i.position);let e=this.direction.length();if(e>=i.radius)continue;let n=1-e/i.radius;this.damageRequest.amount=i.damage*n,this.damageRequest.sourceId=i.propId,this.damageRequest.hitZone=t.faction===`hostile`?`body`:`structure`,this.damageRequest.point.copy(this.targetCenter),this.damageRequest.direction.copy(this.direction).normalize(),t.applyDamage(this.damageRequest)}let a=this.direction.copy(t).sub(i.position).length();a<i.radius&&n(i.damage*(1-a/i.radius),i.propId,`explosive`)}r>0&&this.explosions.splice(0,r)}spawnDebris(e,t,n){let r=0;for(let i of this.debris)if(!i.active&&(i.active=!0,i.position.copy(e),i.velocity.set(this.random.signed()*4.5*n,this.random.range(2.5,7.5)*n,this.random.signed()*4.5*n),i.rotation.set(this.random.next()*Math.PI,this.random.next()*Math.PI,this.random.next()*Math.PI),i.angularVelocity.set(this.random.signed()*8,this.random.signed()*8,this.random.signed()*8),i.remainingSeconds=this.random.range(2.8,5.5),i.scale=this.random.range(.06,.2),r+=1,r>=t))break}updateDebris(e,t){for(let n of this.debris){if(!n.active)continue;if(n.remainingSeconds-=e,n.remainingSeconds<=0){n.active=!1;continue}n.velocity.y-=16*e,this.displacement.copy(n.velocity).multiplyScalar(e);let r=this.displacement.length();if(r>1e-4)if(this.direction.copy(this.displacement).multiplyScalar(1/r),t.raycast(n.position,this.direction,r+n.scale,this.debrisRayHit)){n.position.copy(this.debrisRayHit.point).addScaledVector(this.debrisRayHit.normal,n.scale);let e=n.velocity.dot(this.debrisRayHit.normal);e<0&&n.velocity.addScaledVector(this.debrisRayHit.normal,-e*1.35),n.velocity.multiplyScalar(.58),n.angularVelocity.multiplyScalar(.78)}else n.position.add(this.displacement);n.position.y<n.scale&&(n.position.y=n.scale,n.velocity.y=Math.abs(n.velocity.y)*.32,n.velocity.x*=.7,n.velocity.z*=.7),n.rotation.addScaledVector(n.angularVelocity,e)}}},Gm=Object.freeze({maximumHealth:100,patrolSpeed:1.65,alertSpeed:3.5,strafeSpeed:2.7,acceleration:9,detectionRange:32,disengageRange:45,preferredRange:13,minimumRange:6,fieldOfViewCosine:-.15,alertMemorySeconds:4.5,attackIntervalSeconds:1.35,burstShots:3,burstShotIntervalSeconds:.105,attackDamage:8,baseAccuracy:.64,accuracyFalloffPerMeter:.011,radius:.34,height:1.72,headHeight:1.5,deathLifetimeSeconds:2.2}),Km=class{events;faction=`hostile`;position=new W;velocity=new W;id;archetype;config;patrolPoints;state=`patrol`;health;yaw=0;deathAge=0;random;dimensions;moveResult=zm();desiredVelocity=new W;displacement=new W;toPlayer=new W;toWaypoint=new W;eyePosition=new W;forward=new W;strafe=new W;bodyBounds=new Jn;headBounds=new Jn;rayHit={distance:0,point:new W,normal:new W};patrolIndex=0;alertMemory=0;attackCooldown=0;burstRemaining=0;burstCooldown=0;strafeDirection=1;strafeChangeCooldown=0;suppression=0;constructor(e,t,n){this.events=n,this.id=e.id,this.archetype=e.archetype??`security-raider`,this.config={...Gm,...e.config},this.position.copy(e.position),this.yaw=e.yaw??0,this.health=this.config.maximumHealth,this.patrolPoints=(e.patrolPoints??[]).map(e=>e.clone()),this.random=new Hm(t),this.dimensions={radius:this.config.radius,height:this.config.height},this.updateBounds()}get enabled(){return this.state!==`dead`}update(e,t){let n=Math.min(Math.max(e,0),.05);if(this.state===`dead`){this.deathAge+=n,this.velocity.multiplyScalar(Math.max(0,1-n*5));return}this.attackCooldown=Math.max(0,this.attackCooldown-n),this.burstCooldown=Math.max(0,this.burstCooldown-n),this.strafeChangeCooldown=Math.max(0,this.strafeChangeCooldown-n),this.suppression=Math.max(0,this.suppression-n),this.toPlayer.copy(t.playerPosition).sub(this.position),this.toPlayer.y=0;let r=this.toPlayer.length(),i=t.playerAlive&&this.canSeePlayer(t,r);i?this.alertMemory=this.config.alertMemorySeconds:this.alertMemory=Math.max(0,this.alertMemory-n),!t.playerAlive||this.alertMemory<=0&&r>this.config.disengageRange?(this.setState(`patrol`),this.updatePatrol(n,t.collision)):this.burstRemaining>0?(this.setState(`attack`),this.updateBurst(t,r,i),this.updateFacing(n,t.playerPosition)):i&&this.attackCooldown<=0&&r<=this.config.detectionRange?(this.beginBurst(),this.updateBurst(t,r,i),this.updateFacing(n,t.playerPosition)):i&&r<=this.config.preferredRange*1.25?(this.setState(`strafe`),this.updateCoverStrafe(n,t.collision,r),this.updateFacing(n,t.playerPosition)):(this.setState(`alert`),this.updateApproach(n,t.collision,r),this.updateFacing(n,t.playerPosition)),this.updateBounds()}raycast(e,t,n,r){if(!this.enabled)return!1;let i=!1,a=n;return Im(e,t,this.headBounds,a,this.rayHit)&&(a=this.rayHit.distance,r.hitZone=`head`,r.damageMultiplier=1,r.point.copy(this.rayHit.point),r.normal.copy(this.rayHit.normal),i=!0),Im(e,t,this.bodyBounds,a,this.rayHit)&&(a=this.rayHit.distance,r.hitZone=`body`,r.damageMultiplier=1,r.point.copy(this.rayHit.point),r.normal.copy(this.rayHit.normal),i=!0),i?(r.targetId=this.id,r.faction=this.faction,r.distance=a,r.target=this,!0):!1}applyDamage(e){if(!this.enabled||e.amount<=0)return 0;let t=Math.min(this.health,e.amount);return this.health-=t,this.suppression=1.4,this.alertMemory=this.config.alertMemorySeconds,this.events?.emit(`actor:damaged`,{actorId:this.id,sourceId:e.sourceId,amount:t,remainingHealth:this.health,kind:e.kind}),this.health<=0&&(this.setState(`dead`),this.velocity.set(0,0,0),this.events?.emit(`actor:killed`,{actorId:this.id,sourceId:e.sourceId,kind:e.kind})),t}getWorldCenter(e){return e.copy(this.position).setY(this.position.y+this.config.height*.52)}isReadyForRemoval(){return this.state===`dead`&&this.deathAge>=this.config.deathLifetimeSeconds}canSeePlayer(e,t){return t>this.config.detectionRange||(this.forward.set(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),t>.001&&this.forward.dot(this.toPlayer)/t<this.config.fieldOfViewCosine&&this.alertMemory<=0)?!1:(this.eyePosition.copy(this.position).addScaledVector(wn.DEFAULT_UP,this.config.headHeight),e.collision.lineOfSight(this.eyePosition,e.playerEyePosition))}updatePatrol(e,t){if(this.patrolPoints.length===0){this.desiredVelocity.set(0,0,0),this.integrateMovement(e,t);return}let n=this.patrolPoints[this.patrolIndex];this.toWaypoint.copy(n).sub(this.position),this.toWaypoint.y=0,this.toWaypoint.lengthSq()<.25&&(this.patrolIndex=(this.patrolIndex+1)%this.patrolPoints.length,this.toWaypoint.copy(this.patrolPoints[this.patrolIndex]).sub(this.position).setY(0)),this.desiredVelocity.copy(this.toWaypoint).normalize().multiplyScalar(this.config.patrolSpeed),this.integrateMovement(e,t),this.updateFacingFromVelocity(e)}updateApproach(e,t,n){if(n<=.001)this.desiredVelocity.set(0,0,0);else{let e=n<this.config.minimumRange?-1:1;this.desiredVelocity.copy(this.toPlayer).multiplyScalar(e*this.config.alertSpeed/n)}this.integrateMovement(e,t)}updateCoverStrafe(e,t,n){if(this.strafeChangeCooldown<=0&&(this.strafeDirection=this.random.chance(.5)?1:-1,this.strafeChangeCooldown=this.random.range(.75,1.6)),n<=.001)this.desiredVelocity.set(0,0,0);else{this.strafe.set(-this.toPlayer.z/n,0,this.toPlayer.x/n);let e=n<this.config.minimumRange?-.6:n>this.config.preferredRange?.35:0;this.desiredVelocity.copy(this.strafe).multiplyScalar(this.config.strafeSpeed*this.strafeDirection*(this.suppression>0?1.3:1)).addScaledVector(this.toPlayer,e/Math.max(n,.001))}this.integrateMovement(e,t),(this.moveResult.blockedX||this.moveResult.blockedZ)&&(this.strafeDirection*=-1,this.strafeChangeCooldown=.45)}beginBurst(){this.burstRemaining=this.config.burstShots,this.burstCooldown=0,this.attackCooldown=this.config.attackIntervalSeconds,this.setState(`attack`)}updateBurst(e,t,n){if(this.desiredVelocity.set(0,0,0),this.velocity.multiplyScalar(.72),this.burstRemaining<=0||this.burstCooldown>0)return;let r=t*this.config.accuracyFalloffPerMeter,i=this.suppression>0?.2:0,a=H.clamp(this.config.baseAccuracy-r-i,.08,.92),o=n&&this.random.chance(a),s=o?this.config.attackDamage:0;o&&e.applyPlayerDamage(s,this.id),this.events?.emit(`enemy:shot`,{enemyId:this.id,hit:o,damage:s}),--this.burstRemaining,this.burstCooldown=this.config.burstShotIntervalSeconds}integrateMovement(e,t){let n=Lm(this.config.acceleration,e);this.velocity.x=H.lerp(this.velocity.x,this.desiredVelocity.x,n),this.velocity.z=H.lerp(this.velocity.z,this.desiredVelocity.z,n),this.velocity.y=-.5,this.displacement.copy(this.velocity).multiplyScalar(e),t.moveCharacter(this.position,this.displacement,this.dimensions,this.moveResult),this.moveResult.blockedX&&(this.velocity.x=0),this.moveResult.blockedZ&&(this.velocity.z=0),this.velocity.y=0}updateFacing(e,t){this.toWaypoint.copy(t).sub(this.position);let n=Math.atan2(-this.toWaypoint.x,-this.toWaypoint.z);this.yaw=this.rotateAngle(this.yaw,n,Lm(11,e))}updateFacingFromVelocity(e){if(this.velocity.lengthSq()<.001)return;let t=Math.atan2(-this.velocity.x,-this.velocity.z);this.yaw=this.rotateAngle(this.yaw,t,Lm(7,e))}rotateAngle(e,t,n){return e+Math.atan2(Math.sin(t-e),Math.cos(t-e))*n}setState(e){if(e===this.state)return;let t=this.state;this.state=e,this.events?.emit(`enemy:state`,{enemyId:this.id,previous:t,current:e})}updateBounds(){let e=this.config.radius;this.bodyBounds.min.set(this.position.x-e,this.position.y,this.position.z-e),this.bodyBounds.max.set(this.position.x+e,this.position.y+this.config.headHeight-.01,this.position.z+e);let t=e*.72;this.headBounds.min.set(this.position.x-t,this.position.y+this.config.headHeight,this.position.z-t),this.headBounds.max.set(this.position.x+t,this.position.y+this.config.height,this.position.z+t)}},qm=class{seed;events;enemies=[];spawnSerial=0;constructor(e,t){this.seed=e,this.events=t}spawn(e){if(this.enemies.some(t=>t.id===e.id))throw Error(`Duplicate enemy id "${e.id}".`);let t=new Km(e,this.seed+this.spawnSerial*2654435769>>>0,this.events);return this.spawnSerial+=1,this.enemies.push(t),t}update(e,t){for(let n of this.enemies)n.update(e,t)}getEnemies(){return this.enemies}getById(e){return this.enemies.find(t=>t.id===e)}clear(){this.enemies.length=0,this.spawnSerial=0}getDiagnostics(e){let t=0,n=0;for(let e of this.enemies)e.enabled&&(t+=1),e.state!==`patrol`&&e.state!==`dead`&&(n+=1);return e.alive=t,e.total=this.enemies.length,e.alerted=n,e}},Jm=Object.freeze({walkSpeed:5.2,sprintSpeed:7.65,crouchSpeed:2.75,adsSpeedMultiplier:.72,groundAcceleration:28,airAcceleration:7.5,groundFriction:18,gravity:24,jumpSpeed:7.1,coyoteSeconds:.11,jumpBufferSeconds:.12,standingHeight:1.78,crouchedHeight:1.18,radius:.34,standingEyeHeight:1.66,crouchedEyeHeight:1.04,crouchResponse:15,lookSensitivity:.0022,adsLookMultiplier:.72,minimumPitch:-1.48,maximumPitch:1.48,staminaDrainPerSecond:.22,staminaRecoveryPerSecond:.16,sprintRecoveryThreshold:.2});function Ym(){return{moveForward:0,moveRight:0,lookDeltaX:0,lookDeltaY:0,jumpPressed:!1,crouchHeld:!1,sprintHeld:!1,adsHeld:!1,fireHeld:!1,firePressed:!1,reloadPressed:!1,interactHeld:!1,retryPressed:!1}}var Xm=class{events;position=new W;velocity=new W;state;tuning;dimensions;movement=new W;displacement=new W;standingTestPosition=new W;moveResult=zm();coyoteRemaining=0;jumpBufferRemaining=0;sprintLocked=!1;wasGrounded=!0;previousVerticalSpeed=0;constructor(e={},t){this.events=t,this.tuning={...Jm,...e},this.dimensions={radius:this.tuning.radius,height:this.tuning.standingHeight},this.state={grounded:!0,crouched:!1,sprinting:!1,ads:!1,stamina:1,yaw:0,pitch:0,colliderHeight:this.tuning.standingHeight,eyeHeight:this.tuning.standingEyeHeight}}reset(e,t=0,n=0){this.position.copy(e),this.velocity.set(0,0,0),this.state.grounded=!0,this.state.crouched=!1,this.state.sprinting=!1,this.state.ads=!1,this.state.stamina=1,this.state.yaw=t,this.state.pitch=H.clamp(n,this.tuning.minimumPitch,this.tuning.maximumPitch),this.state.colliderHeight=this.tuning.standingHeight,this.state.eyeHeight=this.tuning.standingEyeHeight,this.dimensions.height=this.tuning.standingHeight,this.coyoteRemaining=0,this.jumpBufferRemaining=0,this.sprintLocked=!1,this.wasGrounded=!0,this.previousVerticalSpeed=0}update(e,t,n){let r=Math.min(Math.max(e,0),.05);this.applyLook(t),this.state.ads=t.adsHeld,t.jumpPressed?this.jumpBufferRemaining=this.tuning.jumpBufferSeconds:this.jumpBufferRemaining=Math.max(0,this.jumpBufferRemaining-r),this.state.grounded?this.coyoteRemaining=this.tuning.coyoteSeconds:this.coyoteRemaining=Math.max(0,this.coyoteRemaining-r),this.updateStance(r,t.crouchHeld,n),this.updateSprint(r,t),this.updateHorizontal(r,t),this.jumpBufferRemaining>0&&this.coyoteRemaining>0&&!this.state.crouched&&(this.velocity.y=this.tuning.jumpSpeed,this.state.grounded=!1,this.jumpBufferRemaining=0,this.coyoteRemaining=0,this.events?.emit(`controller:jumped`,{position:{x:this.position.x,y:this.position.y,z:this.position.z}})),this.previousVerticalSpeed=this.velocity.y,this.velocity.y-=this.tuning.gravity*r,this.displacement.copy(this.velocity).multiplyScalar(r),n.moveCharacter(this.position,this.displacement,this.dimensions,this.moveResult),this.moveResult.blockedX&&(this.velocity.x=0),this.moveResult.blockedZ&&(this.velocity.z=0),this.moveResult.hitCeiling&&this.velocity.y>0&&(this.velocity.y=0),this.moveResult.grounded&&this.velocity.y<0&&(this.velocity.y=0),this.state.grounded=this.moveResult.grounded,!this.wasGrounded&&this.state.grounded&&this.events?.emit(`controller:landed`,{position:{x:this.position.x,y:this.position.y,z:this.position.z},impactSpeed:Math.max(0,-this.previousVerticalSpeed)}),this.wasGrounded=this.state.grounded}getEyePosition(e){return e.copy(this.position).addScaledVector(wn.DEFAULT_UP,this.state.eyeHeight)}getViewDirection(e){let t=Math.cos(this.state.pitch);return e.set(-Math.sin(this.state.yaw)*t,Math.sin(this.state.pitch),-Math.cos(this.state.yaw)*t)}getHorizontalSpeed(){return Math.hypot(this.velocity.x,this.velocity.z)}applyViewKick(e,t){this.state.pitch=H.clamp(this.state.pitch+e,this.tuning.minimumPitch,this.tuning.maximumPitch),this.state.yaw+=t}applyLook(e){let t=e.adsHeld?this.tuning.adsLookMultiplier:1;this.state.yaw-=e.lookDeltaX*this.tuning.lookSensitivity*t,this.state.pitch=H.clamp(this.state.pitch-e.lookDeltaY*this.tuning.lookSensitivity*t,this.tuning.minimumPitch,this.tuning.maximumPitch)}updateStance(e,t,n){let r=t;!r&&this.state.crouched&&(this.standingTestPosition.copy(this.position),this.dimensions.height=this.tuning.standingHeight,r=!n.canOccupy(this.standingTestPosition,this.dimensions)),r!==this.state.crouched&&(this.state.crouched=r,this.events?.emit(`controller:stance`,{crouched:r}));let i=Lm(this.tuning.crouchResponse,e),a=r?this.tuning.crouchedHeight:this.tuning.standingHeight,o=r?this.tuning.crouchedEyeHeight:this.tuning.standingEyeHeight;this.state.colliderHeight=H.lerp(this.state.colliderHeight,a,i),this.state.eyeHeight=H.lerp(this.state.eyeHeight,o,i),this.dimensions.height=this.state.colliderHeight}updateSprint(e,t){this.state.stamina<=0&&(this.sprintLocked=!0),this.state.stamina>=this.tuning.sprintRecoveryThreshold&&(this.sprintLocked=!1);let n=t.sprintHeld&&t.moveForward>.2&&!this.state.crouched&&!t.adsHeld&&this.state.grounded&&!this.sprintLocked;n?this.state.stamina=Math.max(0,this.state.stamina-this.tuning.staminaDrainPerSecond*e):this.state.stamina=Math.min(1,this.state.stamina+this.tuning.staminaRecoveryPerSecond*e),n!==this.state.sprinting&&(this.state.sprinting=n,this.events?.emit(`controller:sprint`,{sprinting:n}))}updateHorizontal(e,t){let n=H.clamp(t.moveForward,-1,1),r=H.clamp(t.moveRight,-1,1),i=Math.hypot(n,r);i>1&&(n/=i,r/=i);let a=Math.sin(this.state.yaw),o=Math.cos(this.state.yaw);this.movement.set(-a*n+o*r,0,-o*n-a*r);let s=this.tuning.walkSpeed;this.state.sprinting?s=this.tuning.sprintSpeed:this.state.crouched&&(s=this.tuning.crouchSpeed),this.state.ads&&(s*=this.tuning.adsSpeedMultiplier),this.movement.multiplyScalar(s);let c=Lm(this.state.grounded?this.tuning.groundAcceleration:this.tuning.airAcceleration,e);if(i>.001)this.velocity.x=H.lerp(this.velocity.x,this.movement.x,c),this.velocity.z=H.lerp(this.velocity.z,this.movement.z,c);else if(this.state.grounded){let t=Lm(this.tuning.groundFriction,e);this.velocity.x=H.lerp(this.velocity.x,0,t),this.velocity.z=H.lerp(this.velocity.z,0,t)}}},Zm=class{listeners=new Map;on(e,t){let n=this.listeners.get(e);n||(n=new Set,this.listeners.set(e,n));let r=t;return n.add(r),()=>n?.delete(r)}once(e,t){let n=this.on(e,e=>{n(),t(e)});return n}emit(e,t){let n=this.listeners.get(e);if(n)for(let e of n)e(t)}clear(e){e?this.listeners.delete(e):this.listeners.clear()}},Qm=Object.freeze({id:`player-rifle`,damage:31,headshotMultiplier:1.55,roundsPerMinute:720,magazineSize:30,startingReserveAmmo:120,reloadSeconds:1.82,maximumRange:180,hipSpreadRadians:.012,adsSpreadRadians:.0024,movementSpreadRadians:.008,recoilPitchRadians:.0065,recoilYawRadians:.0032,recoilRecovery:15,heatPerShot:.115,heatRecovery:1.6,maximumHeatSpreadRadians:.009,automatic:!0});function $m(){return{targetId:``,faction:`neutral`,distance:1/0,point:new W,normal:new W,hitZone:`body`,damageMultiplier:1,target:null}}var eh=class{events;config;state;frameResult={fired:!1,hit:!1,targetId:null,damage:0,recoilPitch:0,recoilYaw:0};random;shotDirection=new W;right=new W;up=new W;worldUp=new W(0,1,0);worldRight=new W(1,0,0);targetHit=$m();bestHit=$m();worldHit=Bm();damageRequest={amount:0,sourceId:``,kind:`ballistic`,hitZone:`body`,point:new W,direction:new W};constructor(e={},t=1470611678,n){this.events=n,this.config={...Qm,...e},this.state={ammoInMagazine:this.config.magazineSize,reserveAmmo:this.config.startingReserveAmmo,cooldownSeconds:0,reloadSeconds:0,heat:0,recoilPitch:0,recoilYaw:0,shotIndex:0},this.random=new Hm(t)}reset(e=1470611678){this.state.ammoInMagazine=this.config.magazineSize,this.state.reserveAmmo=this.config.startingReserveAmmo,this.state.cooldownSeconds=0,this.state.reloadSeconds=0,this.state.heat=0,this.state.recoilPitch=0,this.state.recoilYaw=0,this.state.shotIndex=0,this.random.reset(e),this.resetFrameResult()}update(e,t,n,r,i,a){let o=Math.min(Math.max(e,0),.1);this.resetFrameResult(),this.state.cooldownSeconds=Math.max(0,this.state.cooldownSeconds-o),this.state.heat=Math.max(0,this.state.heat-this.config.heatRecovery*o);let s=Lm(this.config.recoilRecovery,o);return this.state.recoilPitch=H.lerp(this.state.recoilPitch,0,s),this.state.recoilYaw=H.lerp(this.state.recoilYaw,0,s),this.state.reloadSeconds>0?(this.state.reloadSeconds=Math.max(0,this.state.reloadSeconds-o),this.state.reloadSeconds===0&&this.finishReload(),this.frameResult):t.reloadPressed&&this.canReload()?(this.beginReload(),this.frameResult):!(this.config.automatic?t.fireHeld:t.firePressed)||this.state.cooldownSeconds>0?this.frameResult:this.state.ammoInMagazine<=0?(this.events?.emit(`weapon:dry`,{weaponId:this.config.id}),this.canReload()&&this.beginReload(),this.state.cooldownSeconds=.16,this.frameResult):(this.fire(n,r,t,i,a),this.frameResult)}cancelReload(){this.state.reloadSeconds=0}getCurrentSpread(e){return(e.ads?this.config.adsSpreadRadians:this.config.hipSpreadRadians)+H.clamp(e.movement01,0,1)*this.config.movementSpreadRadians+this.state.heat*this.config.maximumHeatSpreadRadians}fire(e,t,n,r,i){--this.state.ammoInMagazine,this.state.shotIndex+=1,this.state.cooldownSeconds+=60/this.config.roundsPerMinute,this.state.heat=Math.min(1,this.state.heat+this.config.heatPerShot);let a=this.config.recoilPitchRadians*(.82+this.random.next()*.36),o=this.config.recoilYawRadians*this.random.signed();this.state.recoilPitch+=a,this.state.recoilYaw+=o,this.applySpread(t,this.getCurrentSpread(n)),this.frameResult.fired=!0,this.frameResult.recoilPitch=a,this.frameResult.recoilYaw=o,this.events?.emit(`weapon:fired`,{weaponId:this.config.id,shotIndex:this.state.shotIndex,ammoInMagazine:this.state.ammoInMagazine,origin:{x:e.x,y:e.y,z:e.z},direction:{x:this.shotDirection.x,y:this.shotDirection.y,z:this.shotDirection.z},recoilPitch:a,recoilYaw:o});let s=this.config.maximumRange,c=i.raycast(e,this.shotDirection,s,this.worldHit,`bullet`);c&&(s=this.worldHit.distance),this.bestHit.target=null;for(let t of r)!t.enabled||t.faction===`player`||(this.targetHit.distance=s,this.targetHit.target=null,t.raycast(e,this.shotDirection,s,this.targetHit)&&(this.targetHit.distance>=s||(s=this.targetHit.distance,this.copyHit(this.bestHit,this.targetHit))));let l=this.bestHit.target;if(l){let e=this.bestHit.hitZone===`head`?this.config.headshotMultiplier:1;this.damageRequest.amount=this.config.damage*this.bestHit.damageMultiplier*e,this.damageRequest.sourceId=this.config.id,this.damageRequest.kind=`ballistic`,this.damageRequest.hitZone=this.bestHit.hitZone,this.damageRequest.point.copy(this.bestHit.point),this.damageRequest.direction.copy(this.shotDirection);let t=l.applyDamage(this.damageRequest);this.frameResult.hit=t>0,this.frameResult.targetId=this.bestHit.targetId,this.frameResult.damage=t,t>0&&this.events?.emit(`weapon:hit`,{weaponId:this.config.id,targetId:this.bestHit.targetId,hitZone:this.bestHit.hitZone,damage:t,point:{x:this.bestHit.point.x,y:this.bestHit.point.y,z:this.bestHit.point.z}})}else c&&this.events?.emit(`feedback:vfx`,{cue:`impact-${this.worldHit.material}`,position:{x:this.worldHit.point.x,y:this.worldHit.point.y,z:this.worldHit.point.z},intensity:1});this.state.ammoInMagazine===0&&this.state.reserveAmmo>0&&this.beginReload()}applySpread(e,t){this.shotDirection.copy(e).normalize();let n=Math.abs(this.shotDirection.y)>.98?this.worldRight:this.worldUp;this.right.crossVectors(this.shotDirection,n).normalize(),this.up.crossVectors(this.right,this.shotDirection).normalize();let r=Math.sqrt(this.random.next())*Math.tan(t),i=this.random.next()*Math.PI*2;this.shotDirection.addScaledVector(this.right,Math.cos(i)*r).addScaledVector(this.up,Math.sin(i)*r).normalize()}canReload(){return this.state.ammoInMagazine<this.config.magazineSize&&this.state.reserveAmmo>0}beginReload(){!this.canReload()||this.state.reloadSeconds>0||(this.state.reloadSeconds=this.config.reloadSeconds,this.events?.emit(`weapon:reload-started`,{weaponId:this.config.id,duration:this.config.reloadSeconds}))}finishReload(){let e=this.config.magazineSize-this.state.ammoInMagazine,t=Math.min(e,this.state.reserveAmmo);this.state.ammoInMagazine+=t,this.state.reserveAmmo-=t,this.events?.emit(`weapon:reloaded`,{weaponId:this.config.id,ammoInMagazine:this.state.ammoInMagazine,reserveAmmo:this.state.reserveAmmo})}resetFrameResult(){this.frameResult.fired=!1,this.frameResult.hit=!1,this.frameResult.targetId=null,this.frameResult.damage=0,this.frameResult.recoilPitch=0,this.frameResult.recoilYaw=0}copyHit(e,t){e.targetId=t.targetId,e.faction=t.faction,e.distance=t.distance,e.point.copy(t.point),e.normal.copy(t.normal),e.hitZone=t.hitZone,e.damageMultiplier=t.damageMultiplier,e.target=t.target}},th={interactHeld:!1,aimedAtDisplay:!1,withinInteractionRange:!1},nh=class{events;collision;controller;weapon;enemies;destruction;mission;maximumPlayerHealth;playerHealth;fixedTimestep;maximumFrameDelta;seed;eyePosition=new W;viewDirection=new W;respawnPosition=new W;targets=[];bufferedInput=Ym();stepInput=Ym();weaponInput={fireHeld:!1,firePressed:!1,reloadPressed:!1,ads:!1,movement01:0};interaction={...th};enemyContext;enemyDiagnostics={alive:0,total:0,alerted:0};destructionDiagnostics={intactProps:0,activeDebris:0,queuedExplosions:0};collisionDiagnostics={colliderCount:0,characterContacts:0,raycasts:0};diagnostics;updateResult={fixedSteps:0,alpha:0,droppedSeconds:0};accumulator=0;pendingLookX=0;pendingLookY=0;pendingJump=!1;pendingFirePressed=!1;pendingReload=!1;pendingRetry=!1;frame=0;totalFixedSteps=0;droppedSeconds=0;constructor(e={}){this.seed=e.seed??85630481,this.fixedTimestep=e.fixedTimestep??1/120,this.maximumFrameDelta=e.maximumFrameDelta??.1,this.maximumPlayerHealth=e.maximumPlayerHealth??100,this.playerHealth=this.maximumPlayerHealth,this.events=new Zm,this.collision=new Vm(0),this.controller=new Xm(e.controller,this.events),this.weapon=new eh(e.weapon,this.seed^11017985,this.events),this.enemies=new qm(this.seed^7465125,this.events),this.destruction=new Wm(this.seed^13855521,e.maximumDebris,this.events),this.mission=new Pm(e.mission,this.events),this.respawnPosition.copy(e.playerSpawn??new W(0,0,0)),this.controller.reset(this.respawnPosition),this.enemyContext={playerPosition:this.controller.position,playerEyePosition:this.eyePosition,playerAlive:!0,collision:this.collision,applyPlayerDamage:(e,t)=>this.applyPlayerDamage(e,t)},this.diagnostics=this.createDiagnostics(),this.events.on(`actor:killed`,({actorId:e})=>{this.enemies.getById(e)&&this.mission.notifyEnemyKilled()})}start(){this.mission.start()}addObstacle(e){this.collision.addAabb(e)}spawnEnemy(e){this.assertUniqueTargetId(e.id);let t=this.enemies.spawn(e);return this.targets.push(t),t}addDestructible(e){this.assertUniqueTargetId(e.id);let t=this.destruction.addProp(e);return this.targets.push(t),t}setCheckpointRespawn(e){this.respawnPosition.copy(e)}update(e,t,n=th){this.frame+=1,this.collision.resetDiagnostics(),this.bufferFrameInput(t,n);let r=Math.max(0,e),i=Math.min(r,this.maximumFrameDelta);this.droppedSeconds+=r-i,this.accumulator+=i;let a=0;for(;this.accumulator>=this.fixedTimestep;)this.consumeStepInput(),this.fixedUpdate(this.fixedTimestep),this.accumulator-=this.fixedTimestep,a+=1,this.totalFixedSteps+=1;return this.updateDiagnostics(),this.updateResult.fixedSteps=a,this.updateResult.alpha=this.accumulator/this.fixedTimestep,this.updateResult.droppedSeconds=this.droppedSeconds,this.updateResult}applyPlayerDamage(e,t,n=`ballistic`){if(e<=0||this.playerHealth<=0||!this.mission.isCombatEnabled()||this.mission.getSnapshot().executiveMode)return 0;let r=Math.min(this.playerHealth,e);return this.playerHealth-=r,this.events.emit(`actor:damaged`,{actorId:`player`,sourceId:t,amount:r,remainingHealth:this.playerHealth,kind:n}),this.playerHealth<=0&&(this.events.emit(`actor:killed`,{actorId:`player`,sourceId:t,kind:n}),this.mission.fail(`Operator incapacitated while defending the infrastructure.`)),r}retry(){return this.mission.retryFromCheckpoint()?(this.playerHealth=this.maximumPlayerHealth,this.controller.reset(this.respawnPosition),this.weapon.reset(this.seed^11017985),this.enemies.clear(),this.destruction.reset(),this.rebuildTargetRegistry(),this.pendingJump=!1,this.pendingFirePressed=!1,this.pendingReload=!1,this.pendingRetry=!1,!0):!1}getTargets(){return this.targets}getDiagnostics(){return this.diagnostics}fixedUpdate(e){if(this.stepInput.retryPressed&&this.mission.getSnapshot().phase===`failed`){this.retry();return}if(this.controller.update(e,this.stepInput,this.collision),this.controller.getEyePosition(this.eyePosition),this.controller.getViewDirection(this.viewDirection),this.enemies.getDiagnostics(this.enemyDiagnostics),this.mission.update(e,this.enemyDiagnostics.alive,this.interaction),this.mission.isCombatEnabled()&&this.playerHealth>0){this.enemyContext.playerAlive=!0,this.enemies.update(e,this.enemyContext),this.weaponInput.fireHeld=this.stepInput.fireHeld,this.weaponInput.firePressed=this.stepInput.firePressed,this.weaponInput.reloadPressed=this.stepInput.reloadPressed,this.weaponInput.ads=this.stepInput.adsHeld,this.weaponInput.movement01=H.clamp(this.controller.getHorizontalSpeed()/this.controller.tuning.sprintSpeed,0,1);let t=this.weapon.update(e,this.weaponInput,this.eyePosition,this.viewDirection,this.targets,this.collision);t.fired&&this.controller.applyViewKick(t.recoilPitch,t.recoilYaw)}else this.weaponInput.fireHeld=!1,this.weaponInput.firePressed=!1,this.weaponInput.reloadPressed=this.stepInput.reloadPressed,this.weaponInput.ads=this.stepInput.adsHeld,this.weaponInput.movement01=0,this.weapon.update(e,this.weaponInput,this.eyePosition,this.viewDirection,this.targets,this.collision);this.destruction.update(e,this.collision,this.targets,this.controller.position,(e,t,n)=>this.applyPlayerDamage(e,t,n))}bufferFrameInput(e,t){this.bufferedInput.moveForward=e.moveForward,this.bufferedInput.moveRight=e.moveRight,this.bufferedInput.crouchHeld=e.crouchHeld,this.bufferedInput.sprintHeld=e.sprintHeld,this.bufferedInput.adsHeld=e.adsHeld,this.bufferedInput.fireHeld=e.fireHeld,this.bufferedInput.interactHeld=e.interactHeld,this.pendingLookX+=e.lookDeltaX,this.pendingLookY+=e.lookDeltaY,this.pendingJump||=e.jumpPressed,this.pendingFirePressed||=e.firePressed,this.pendingReload||=e.reloadPressed,this.pendingRetry||=e.retryPressed,this.interaction.interactHeld=t.interactHeld,this.interaction.aimedAtDisplay=t.aimedAtDisplay,this.interaction.withinInteractionRange=t.withinInteractionRange}consumeStepInput(){Object.assign(this.stepInput,this.bufferedInput),this.stepInput.lookDeltaX=this.pendingLookX,this.stepInput.lookDeltaY=this.pendingLookY,this.stepInput.jumpPressed=this.pendingJump,this.stepInput.firePressed=this.pendingFirePressed,this.stepInput.reloadPressed=this.pendingReload,this.stepInput.retryPressed=this.pendingRetry,this.pendingLookX=0,this.pendingLookY=0,this.pendingJump=!1,this.pendingFirePressed=!1,this.pendingReload=!1,this.pendingRetry=!1}rebuildTargetRegistry(){this.targets.length=0;for(let e of this.destruction.getProps())this.targets.push(e);for(let e of this.enemies.getEnemies())this.targets.push(e)}assertUniqueTargetId(e){if(this.targets.some(t=>t.id===e))throw Error(`Duplicate combat target id "${e}".`)}updateDiagnostics(){this.enemies.getDiagnostics(this.enemyDiagnostics),this.destruction.getDiagnostics(this.destructionDiagnostics),this.collision.getDiagnostics(this.collisionDiagnostics);let e=this.mission.getSnapshot(),t=this.diagnostics.player;t.position.x=this.controller.position.x,t.position.y=this.controller.position.y,t.position.z=this.controller.position.z,t.velocity.x=this.controller.velocity.x,t.velocity.y=this.controller.velocity.y,t.velocity.z=this.controller.velocity.z,t.grounded=this.controller.state.grounded,t.crouched=this.controller.state.crouched,t.sprinting=this.controller.state.sprinting,t.ads=this.controller.state.ads,t.health=this.playerHealth,t.stamina=this.controller.state.stamina,this.diagnostics.frame=this.frame,this.diagnostics.fixedSteps=this.totalFixedSteps,this.diagnostics.droppedSeconds=this.droppedSeconds,this.diagnostics.weapon.ammoInMagazine=this.weapon.state.ammoInMagazine,this.diagnostics.weapon.reserveAmmo=this.weapon.state.reserveAmmo,this.diagnostics.weapon.cooldownSeconds=this.weapon.state.cooldownSeconds,this.diagnostics.weapon.reloadSeconds=this.weapon.state.reloadSeconds,this.diagnostics.weapon.spreadRadians=this.weapon.getCurrentSpread(this.weaponInput),this.diagnostics.enemies.alive=this.enemyDiagnostics.alive,this.diagnostics.enemies.total=this.enemyDiagnostics.total,this.diagnostics.enemies.alerted=this.enemyDiagnostics.alerted,this.diagnostics.destruction.intactProps=this.destructionDiagnostics.intactProps,this.diagnostics.destruction.activeDebris=this.destructionDiagnostics.activeDebris,this.diagnostics.destruction.queuedExplosions=this.destructionDiagnostics.queuedExplosions,this.diagnostics.mission.phase=e.phase,this.diagnostics.mission.checkpointId=e.checkpointId,this.diagnostics.mission.waveIndex=e.waveIndex,this.diagnostics.mission.objectiveCurrent=e.objectiveCurrent,this.diagnostics.mission.objectiveTarget=e.objectiveTarget,this.diagnostics.mission.interactionProgress=e.interactionProgress,this.diagnostics.mission.executiveMode=e.executiveMode,this.diagnostics.collision.colliders=this.collisionDiagnostics.colliderCount,this.diagnostics.collision.characterContacts=this.collisionDiagnostics.characterContacts,this.diagnostics.collision.raycasts=this.collisionDiagnostics.raycasts}createDiagnostics(){return{frame:0,fixedSteps:0,droppedSeconds:0,player:{position:{x:0,y:0,z:0},velocity:{x:0,y:0,z:0},grounded:!0,crouched:!1,sprinting:!1,ads:!1,health:this.playerHealth,stamina:1},weapon:{ammoInMagazine:this.weapon.state.ammoInMagazine,reserveAmmo:this.weapon.state.reserveAmmo,cooldownSeconds:0,reloadSeconds:0,spreadRadians:0},enemies:{alive:0,total:0,alerted:0},destruction:{intactProps:0,activeDebris:0,queuedExplosions:0},mission:{phase:`briefing`,checkpointId:`mission-start`,waveIndex:0,objectiveCurrent:0,objectiveTarget:1,interactionProgress:0,executiveMode:this.mission.getSnapshot().executiveMode},collision:{colliders:0,characterContacts:0,raycasts:0}}}},rh=`blacksite-tactical-hud-styles`,ih=String.raw`
:root {
  --th-safe-top: max(18px, env(safe-area-inset-top));
  --th-safe-right: max(22px, env(safe-area-inset-right));
  --th-safe-bottom: max(20px, env(safe-area-inset-bottom));
  --th-safe-left: max(22px, env(safe-area-inset-left));
  --th-white: #edf3ee;
  --th-dim: #aab5ad;
  --th-muted: #6c7971;
  --th-ink: #07101f;
  --th-panel: rgba(10, 15, 28, 0.8);
  --th-panel-hard: rgba(7, 12, 24, 0.95);
  --th-line: rgba(220, 234, 224, 0.24);
  --th-line-hot: rgba(220, 234, 224, 0.62);
  --th-accent: #00aeef;
  --th-accent-dim: #0a52ef;
  --th-objective: #4f86ff;
  --th-danger: #ff4d3f;
  --th-armor: #78b9d4;
  --th-font: Bahnschrift, "Arial Narrow", "Roboto Condensed", "Segoe UI", sans-serif;
  --th-mono: "IBM Plex Mono", "Roboto Mono", Consolas, monospace;
}

.th-root,
.th-root * {
  box-sizing: border-box;
}

.th-root {
  position: fixed;
  inset: 0;
  z-index: 50;
  overflow: hidden;
  color: var(--th-white);
  font-family: var(--th-font);
  font-synthesis: none;
  pointer-events: none;
  user-select: none;
  -webkit-font-smoothing: antialiased;
  text-rendering: geometricPrecision;
  container-type: size;
}

.th-root[hidden],
.th-hidden {
  display: none !important;
}

.th-vignette,
.th-scanlines,
.th-damage-wash {
  position: absolute;
  inset: 0;
}

.th-vignette {
  background:
    linear-gradient(90deg, rgba(0, 0, 0, 0.18), transparent 17%, transparent 83%, rgba(0, 0, 0, 0.18)),
    linear-gradient(0deg, rgba(0, 0, 0, 0.22), transparent 16%, transparent 88%, rgba(0, 0, 0, 0.12));
  opacity: 0.62;
}

.th-scanlines {
  background: repeating-linear-gradient(0deg, rgba(255,255,255,0.014) 0, rgba(255,255,255,0.014) 1px, transparent 1px, transparent 4px);
  mix-blend-mode: overlay;
  opacity: 0.24;
}

.th-damage-wash {
  background: radial-gradient(circle, transparent 32%, rgba(185, 20, 11, 0.22) 82%, rgba(138, 9, 4, 0.52));
  opacity: 0;
  transition: opacity 100ms linear;
}

.th-root[data-critical="true"] .th-damage-wash {
  opacity: 0.48;
  animation: th-critical 1.25s ease-in-out infinite;
}

.th-upper-left,
.th-upper-right,
.th-lower-left,
.th-lower-right {
  position: absolute;
  z-index: 2;
}

.th-upper-left {
  top: var(--th-safe-top);
  left: var(--th-safe-left);
  width: min(390px, calc(100vw - 44px));
}

.th-brand-lockup {
  display: flex;
  height: 22px;
  align-items: center;
  gap: 9px;
  margin: 0 0 7px 3px;
  color: rgba(237,243,238,.72);
  font: 8px/1 var(--th-mono);
  letter-spacing: .16em;
  text-transform: uppercase;
}

.th-brand-lockup img {
  display: block;
  width: 70px;
  height: auto;
  filter: drop-shadow(0 1px 4px rgba(0,0,0,.55));
}

.th-upper-right {
  top: var(--th-safe-top);
  right: var(--th-safe-right);
  display: flex;
  align-items: flex-start;
  gap: 14px;
}

.th-lower-left {
  left: var(--th-safe-left);
  bottom: var(--th-safe-bottom);
  width: min(338px, calc(100vw - 44px));
}

.th-lower-right {
  right: var(--th-safe-right);
  bottom: var(--th-safe-bottom);
}

.th-eyebrow {
  color: var(--th-dim);
  font-family: var(--th-mono);
  font-size: 9px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: .18em;
  text-transform: uppercase;
}

.th-objective {
  position: relative;
  width: 100%;
  min-height: 73px;
  padding: 11px 18px 12px 15px;
  border-left: 3px solid var(--th-objective);
  background: linear-gradient(90deg, rgba(6, 9, 8, .88), rgba(7, 10, 9, .66) 68%, transparent);
  filter: drop-shadow(0 8px 14px rgba(0,0,0,.28));
  clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 0 100%);
}

.th-objective::before {
  content: "";
  position: absolute;
  top: 0;
  right: 18px;
  left: 0;
  height: 1px;
  background: linear-gradient(90deg, var(--th-objective), var(--th-line), transparent);
}

.th-objective-row,
.th-vital-labels,
.th-ammo-row,
.th-menu-heading,
.th-setting-line,
.th-modal-actions,
.th-match-stats {
  display: flex;
  align-items: center;
}

.th-objective-row {
  justify-content: space-between;
  gap: 12px;
  margin-top: 6px;
}

.th-objective-title {
  min-width: 0;
  overflow: hidden;
  color: var(--th-white);
  font-size: clamp(15px, 1.3vw, 19px);
  font-weight: 720;
  line-height: 1.05;
  letter-spacing: .025em;
  text-overflow: ellipsis;
  text-transform: uppercase;
  white-space: nowrap;
}

.th-objective-distance {
  flex: 0 0 auto;
  color: var(--th-objective);
  font-family: var(--th-mono);
  font-size: 12px;
  font-variant-numeric: tabular-nums;
}

.th-objective-detail {
  margin-top: 4px;
  overflow: hidden;
  color: var(--th-dim);
  font-size: 10px;
  line-height: 1.15;
  letter-spacing: .08em;
  text-overflow: ellipsis;
  text-transform: uppercase;
  white-space: nowrap;
}

.th-objective-track {
  position: relative;
  height: 3px;
  margin-top: 10px;
  overflow: hidden;
  background: rgba(255,255,255,.14);
}

.th-objective-fill {
  width: 0;
  height: 100%;
  background: linear-gradient(90deg, var(--th-objective), #f6dd8b);
  box-shadow: 0 0 12px rgba(233,185,73,.42);
  transition: width 260ms cubic-bezier(.2,.8,.2,1);
}

.th-radar-wrap {
  position: relative;
  width: 152px;
  height: 152px;
  padding: 8px;
  border: 1px solid var(--th-line);
  border-radius: 50%;
  background: rgba(4, 8, 7, .64);
  box-shadow: inset 0 0 24px rgba(0,0,0,.68), 0 8px 24px rgba(0,0,0,.22);
}

.th-radar {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border: 1px solid rgba(197,240,92,.32);
  border-radius: 50%;
  background:
    linear-gradient(rgba(197,240,92,.055) 1px, transparent 1px),
    linear-gradient(90deg, rgba(197,240,92,.055) 1px, transparent 1px),
    radial-gradient(circle, transparent 23%, rgba(197,240,92,.13) 24%, transparent 25%, transparent 48%, rgba(197,240,92,.1) 49%, transparent 50%),
    radial-gradient(circle at 50% 50%, rgba(87,111,57,.19), rgba(4,8,7,.94));
  background-size: 18px 18px, 18px 18px, 100% 100%, 100% 100%;
}

.th-radar::after {
  content: "";
  position: absolute;
  inset: -50%;
  background: conic-gradient(from 0deg, transparent 0 325deg, rgba(197,240,92,.18) 345deg, rgba(197,240,92,.52));
  animation: th-sweep 3.8s linear infinite;
  transform-origin: center;
}

.th-radar-player {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 3;
  width: 0;
  height: 0;
  border-right: 5px solid transparent;
  border-bottom: 12px solid var(--th-white);
  border-left: 5px solid transparent;
  filter: drop-shadow(0 0 5px rgba(255,255,255,.62));
  transform: translate(-50%, -60%);
  transform-origin: 50% 60%;
}

.th-radar-contact {
  position: absolute;
  z-index: 4;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--contact-color, var(--th-danger));
  box-shadow: 0 0 8px var(--contact-color, var(--th-danger));
  transform: translate(-50%, -50%);
}

.th-radar-contact[data-kind="objective"] {
  width: 7px;
  height: 7px;
  border-radius: 0;
  transform: translate(-50%, -50%) rotate(45deg);
}

.th-radar-bearing {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 5;
  color: var(--th-dim);
  font-family: var(--th-mono);
  font-size: 8px;
  letter-spacing: .08em;
  transform: translate(-50%, 82px);
}

.th-killfeed {
  width: min(370px, 36vw);
  min-width: 250px;
  margin-top: 3px;
}

.th-killfeed-entry {
  display: flex;
  justify-content: flex-end;
  gap: 7px;
  min-height: 22px;
  margin-bottom: 4px;
  padding: 4px 7px 4px 13px;
  overflow: hidden;
  background: linear-gradient(90deg, transparent, rgba(5,8,7,.74) 28%);
  color: var(--th-dim);
  font-family: var(--th-mono);
  font-size: 10px;
  letter-spacing: .03em;
  animation: th-feed-in 220ms ease-out both;
  white-space: nowrap;
}

.th-killfeed-entry strong {
  color: var(--th-white);
  font-weight: 700;
}

.th-killfeed-entry .th-foe {
  color: #ff766b;
}

.th-weapon {
  position: relative;
  min-width: 260px;
  padding: 9px 13px 8px 20px;
  border-right: 3px solid var(--th-accent);
  background: linear-gradient(270deg, rgba(6, 9, 8, .9), rgba(6, 9, 8, .55) 72%, transparent);
  text-align: right;
  filter: drop-shadow(0 8px 14px rgba(0,0,0,.28));
  clip-path: polygon(14px 0, 100% 0, 100% 100%, 0 100%, 0 14px);
}

.th-weapon-label {
  color: var(--th-dim);
  font-family: var(--th-mono);
  font-size: 9px;
  letter-spacing: .16em;
  text-transform: uppercase;
}

.th-ammo-row {
  justify-content: flex-end;
  height: 50px;
  font-family: var(--th-mono);
  font-variant-numeric: tabular-nums;
}

.th-ammo-current {
  min-width: 3ch;
  color: var(--th-white);
  font-size: clamp(38px, 4vw, 50px);
  font-weight: 650;
  line-height: 1;
  letter-spacing: -.08em;
}

.th-ammo-divider {
  width: 1px;
  height: 30px;
  margin: 0 11px;
  background: linear-gradient(transparent, var(--th-line-hot), transparent);
  transform: rotate(15deg);
}

.th-ammo-reserve {
  min-width: 3ch;
  color: var(--th-dim);
  font-size: 17px;
  line-height: 1;
}

.th-fire-mode {
  display: inline-flex;
  gap: 2px;
  margin-right: 9px;
  vertical-align: middle;
}

.th-fire-mode i {
  width: 3px;
  height: 8px;
  background: var(--th-accent);
  transform: skewX(-18deg);
}

.th-vitals {
  position: relative;
  padding: 10px 13px 11px;
  border-left: 3px solid var(--th-white);
  background: linear-gradient(90deg, rgba(6,9,8,.9), rgba(6,9,8,.5) 72%, transparent);
  clip-path: polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 0 100%);
}

.th-vital-labels {
  justify-content: space-between;
  min-height: 15px;
}

.th-vital-value {
  min-width: 4ch;
  color: var(--th-white);
  font-family: var(--th-mono);
  font-size: 12px;
  font-variant-numeric: tabular-nums;
  text-align: right;
}

.th-meter {
  position: relative;
  height: 7px;
  margin-top: 5px;
  overflow: hidden;
  background: rgba(230,240,233,.13);
}

.th-meter::after {
  content: "";
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(90deg, transparent 0, transparent calc(10% - 1px), rgba(5,8,7,.9) calc(10% - 1px), rgba(5,8,7,.9) 10%);
}

.th-meter-fill {
  width: 100%;
  height: 100%;
  background: var(--th-white);
  transition: width 180ms ease-out, background-color 180ms linear;
}

.th-meter--armor {
  height: 4px;
  margin-top: 6px;
}

.th-meter--armor .th-meter-fill {
  background: var(--th-armor);
}

.th-root[data-critical="true"] .th-meter:not(.th-meter--armor) .th-meter-fill {
  background: var(--th-danger);
}

.th-crosshair {
  --spread: 9px;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 8;
  width: 0;
  height: 0;
  color: rgba(238,244,239,.92);
  filter: drop-shadow(0 1px 1px rgba(0,0,0,.8));
}

.th-crosshair i {
  position: absolute;
  display: block;
  width: 8px;
  height: 1px;
  background: currentColor;
  transition: transform 90ms linear;
}

.th-crosshair i:nth-child(1) { transform: translate(calc(-100% - var(--spread)), 0); }
.th-crosshair i:nth-child(2) { transform: translate(var(--spread), 0); }
.th-crosshair i:nth-child(3) { transform: translate(-4px, calc(-100% - var(--spread))) rotate(90deg); }
.th-crosshair i:nth-child(4) { transform: translate(-4px, var(--spread)) rotate(90deg); }
.th-crosshair[data-hostile="true"] { color: #ff6559; }

.th-hitmarker {
  --hm-size: 13px;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 9;
  width: 44px;
  height: 44px;
  opacity: 0;
  transform: translate(-50%, -50%);
}

.th-hitmarker i {
  position: absolute;
  top: 50%;
  left: 50%;
  width: var(--hm-size);
  height: 2px;
  background: var(--th-white);
  box-shadow: 0 1px 2px #000;
  transform-origin: 0 50%;
}

.th-hitmarker i:nth-child(1) { transform: rotate(45deg) translateX(7px); }
.th-hitmarker i:nth-child(2) { transform: rotate(135deg) translateX(7px); }
.th-hitmarker i:nth-child(3) { transform: rotate(225deg) translateX(7px); }
.th-hitmarker i:nth-child(4) { transform: rotate(315deg) translateX(7px); }
.th-hitmarker[data-kind="armor"] i { background: var(--th-armor); }
.th-hitmarker[data-kind="kill"] i { background: var(--th-danger); }
.th-hitmarker.th-active { animation: th-hitmarker 190ms ease-out both; }

.th-kill-confirm {
  position: absolute;
  top: calc(50% + 35px);
  left: 50%;
  z-index: 8;
  color: var(--th-white);
  font-family: var(--th-mono);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .16em;
  opacity: 0;
  text-shadow: 0 1px 4px #000;
  text-transform: uppercase;
  transform: translateX(-50%);
}

.th-kill-confirm.th-active { animation: th-confirm 850ms ease-out both; }

.th-interact {
  position: absolute;
  top: calc(50% + 72px);
  left: 50%;
  z-index: 6;
  display: grid;
  grid-template-columns: 38px auto;
  align-items: center;
  min-width: 196px;
  min-height: 45px;
  padding: 5px 13px 5px 5px;
  border-left: 2px solid var(--th-accent);
  background: rgba(5,8,7,.82);
  box-shadow: 0 8px 24px rgba(0,0,0,.3);
  transform: translateX(-50%);
}

.th-interact-key {
  display: grid;
  width: 32px;
  height: 32px;
  place-items: center;
  border: 1px solid var(--th-line-hot);
  color: var(--th-white);
  font-family: var(--th-mono);
  font-size: 12px;
  font-weight: 800;
}

.th-interact-copy {
  min-width: 0;
  padding-left: 9px;
}

.th-interact-action {
  color: var(--th-accent);
  font-size: 9px;
  letter-spacing: .14em;
  text-transform: uppercase;
}

.th-interact-label {
  max-width: 240px;
  overflow: hidden;
  font-size: 12px;
  font-weight: 700;
  text-overflow: ellipsis;
  text-transform: uppercase;
  white-space: nowrap;
}

.th-interact-progress {
  grid-column: 1 / -1;
  width: 100%;
  height: 2px;
  margin-top: 4px;
  background: rgba(255,255,255,.12);
}

.th-interact-progress span {
  display: block;
  width: 0;
  height: 100%;
  background: var(--th-accent);
}

.th-damage-directions {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 5;
  width: min(54vmin, 580px);
  aspect-ratio: 1;
  transform: translate(-50%, -50%);
}

.th-damage-arrow {
  position: absolute;
  top: 0;
  left: 50%;
  width: 68px;
  height: 14px;
  opacity: 0;
  background: linear-gradient(90deg, transparent, rgba(255,77,63,.92), transparent);
  clip-path: polygon(0 100%, 50% 0, 100% 100%, 75% 72%, 50% 35%, 25% 72%);
  transform: translateX(-50%);
  transform-origin: 50% calc(27vmin);
}

.th-damage-arrow.th-active { animation: th-damage-arrow 1s ease-out both; }

.th-center-banner {
  position: absolute;
  top: 15%;
  left: 50%;
  z-index: 5;
  min-width: min(470px, 90vw);
  padding: 9px 46px 11px;
  overflow: hidden;
  background: linear-gradient(90deg, transparent, rgba(6,9,8,.82) 18%, rgba(6,9,8,.82) 82%, transparent);
  opacity: 0;
  text-align: center;
  transform: translate(-50%, -8px);
}

.th-center-banner::before,
.th-center-banner::after {
  content: "";
  position: absolute;
  top: 0;
  width: 35%;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--th-accent));
}
.th-center-banner::before { left: 15%; }
.th-center-banner::after { right: 15%; transform: scaleX(-1); }
.th-center-banner.th-active { animation: th-banner 3.4s ease both; }

.th-banner-kicker {
  color: var(--th-accent);
  font-family: var(--th-mono);
  font-size: 9px;
  letter-spacing: .24em;
  text-transform: uppercase;
}

.th-banner-title {
  margin-top: 3px;
  font-size: clamp(19px, 2.2vw, 28px);
  font-weight: 800;
  letter-spacing: .12em;
  line-height: 1;
  text-transform: uppercase;
}

.th-banner-detail {
  margin-top: 5px;
  color: var(--th-dim);
  font-size: 10px;
  letter-spacing: .11em;
  text-transform: uppercase;
}

.th-onboarding {
  position: absolute;
  bottom: max(28px, calc(env(safe-area-inset-bottom) + 20px));
  left: 50%;
  z-index: 6;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 8px 13px;
  border-top: 1px solid var(--th-line);
  background: linear-gradient(90deg, transparent, rgba(5,8,7,.78) 12%, rgba(5,8,7,.78) 88%, transparent);
  color: var(--th-dim);
  font-family: var(--th-mono);
  font-size: 9px;
  letter-spacing: .09em;
  opacity: 1;
  text-transform: uppercase;
  transform: translateX(-50%);
  transition: opacity 420ms ease, transform 420ms ease;
}

.th-onboarding.th-dismissed {
  opacity: 0;
  transform: translate(-50%, 8px);
}

.th-key {
  display: inline-grid;
  min-width: 21px;
  height: 21px;
  margin-right: 5px;
  padding: 0 5px;
  place-items: center;
  border: 1px solid var(--th-line-hot);
  color: var(--th-white);
  font-size: 9px;
  font-weight: 800;
}

.th-modal-layer {
  position: absolute;
  inset: 0;
  z-index: 30;
  display: grid;
  place-items: center;
  padding: var(--th-safe-top) var(--th-safe-right) var(--th-safe-bottom) var(--th-safe-left);
  background:
    radial-gradient(circle at 52% 45%, transparent 0, rgba(2,4,3,.24) 40%, rgba(2,4,3,.84) 100%),
    rgba(3,6,5,.52);
  opacity: 0;
  pointer-events: none;
  transition: opacity 180ms ease-out;
}

.th-modal-layer[data-open="true"] {
  opacity: 1;
  pointer-events: auto;
}

.th-menu {
  position: relative;
  width: min(480px, calc(100vw - 36px));
  max-height: calc(100vh - 48px);
  overflow: auto;
  padding: 26px 30px 28px;
  border: 1px solid var(--th-line);
  border-left: 4px solid var(--th-accent);
  background:
    linear-gradient(135deg, rgba(255,255,255,.03), transparent 28%),
    var(--th-panel-hard);
  box-shadow: 0 24px 80px rgba(0,0,0,.66);
  clip-path: polygon(0 0, calc(100% - 27px) 0, 100% 27px, 100% 100%, 0 100%);
}

.th-menu::after {
  content: "";
  position: absolute;
  top: 7px;
  right: 8px;
  width: 12px;
  height: 12px;
  border-top: 1px solid var(--th-line-hot);
  border-right: 1px solid var(--th-line-hot);
}

.th-menu-heading {
  justify-content: space-between;
  gap: 14px;
  margin-bottom: 24px;
}

.th-menu-title {
  margin: 3px 0 0;
  font-size: clamp(26px, 5vw, 40px);
  font-weight: 780;
  line-height: .92;
  letter-spacing: .04em;
  text-transform: uppercase;
}

.th-menu-code {
  color: var(--th-muted);
  font-family: var(--th-mono);
  font-size: 9px;
  text-align: right;
}

.th-menu-actions {
  display: grid;
  gap: 7px;
}

.th-button {
  position: relative;
  display: flex;
  width: 100%;
  min-height: 46px;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  border: 1px solid rgba(230,240,233,.16);
  border-radius: 0;
  color: var(--th-white);
  background: rgba(255,255,255,.035);
  font: 700 13px/1 var(--th-font);
  letter-spacing: .09em;
  text-align: left;
  text-transform: uppercase;
  cursor: pointer;
  transition: color 100ms linear, background 100ms linear, border-color 100ms linear, transform 80ms ease;
}

.th-button::after {
  content: attr(data-index);
  color: var(--th-muted);
  font: 9px/1 var(--th-mono);
}

.th-button:hover,
.th-button:focus-visible {
  border-color: var(--th-accent);
  color: var(--th-ink);
  background: var(--th-accent);
  outline: none;
}

.th-button:active {
  transform: translateX(3px);
}

.th-button:disabled {
  border-color: rgba(255,255,255,.08);
  color: var(--th-muted);
  background: rgba(255,255,255,.02);
  cursor: not-allowed;
}

.th-button--danger:hover,
.th-button--danger:focus-visible {
  border-color: var(--th-danger);
  color: var(--th-white);
  background: var(--th-danger);
}

.th-settings {
  display: grid;
  gap: 15px;
}

.th-setting-line {
  display: grid;
  grid-template-columns: minmax(120px, 1fr) minmax(140px, 1.35fr) 48px;
  min-height: 44px;
  align-items: center;
  gap: 12px;
}

.th-setting-label {
  color: var(--th-dim);
  font-size: 11px;
  letter-spacing: .08em;
  text-transform: uppercase;
}

.th-setting-value {
  min-width: 4ch;
  color: var(--th-white);
  font-family: var(--th-mono);
  font-size: 10px;
  font-variant-numeric: tabular-nums;
  text-align: right;
}

.th-range {
  width: 100%;
  height: 44px;
  margin: 0;
  accent-color: var(--th-accent);
  cursor: pointer;
}

.th-toggle {
  position: relative;
  width: 48px;
  height: 44px;
  border: 1px solid var(--th-line-hot);
  background: rgba(255,255,255,.05);
  cursor: pointer;
}

.th-toggle::after {
  content: "";
  position: absolute;
  top: 11px;
  left: 5px;
  width: 20px;
  height: 20px;
  background: var(--th-muted);
  transition: transform 130ms ease, background 130ms linear;
}

.th-toggle[aria-checked="true"]::after {
  background: var(--th-accent);
  transform: translateX(18px);
}

.th-settings-footer {
  display: flex;
  gap: 8px;
  margin-top: 24px;
}

.th-settings-footer .th-button {
  flex: 1 1 0;
}

.th-end-state {
  text-align: center;
}

.th-end-kicker {
  color: var(--th-accent);
  font-family: var(--th-mono);
  font-size: 10px;
  letter-spacing: .26em;
  text-transform: uppercase;
}

.th-end-state[data-outcome="failure"] .th-end-kicker {
  color: var(--th-danger);
}

.th-end-title {
  margin: 8px 0 6px;
  font-size: clamp(36px, 8vw, 64px);
  font-weight: 820;
  line-height: .88;
  letter-spacing: .04em;
  text-transform: uppercase;
}

.th-end-detail {
  color: var(--th-dim);
  font-size: 11px;
  letter-spacing: .08em;
  text-transform: uppercase;
}

.th-match-stats {
  justify-content: center;
  gap: 1px;
  margin: 25px 0;
}

.th-match-stat {
  min-width: 96px;
  padding: 10px;
  background: rgba(255,255,255,.045);
}

.th-match-stat span {
  display: block;
  color: var(--th-muted);
  font-family: var(--th-mono);
  font-size: 8px;
  letter-spacing: .12em;
  text-transform: uppercase;
}

.th-match-stat strong {
  display: block;
  min-width: 4ch;
  margin-top: 4px;
  color: var(--th-white);
  font-family: var(--th-mono);
  font-size: 19px;
  font-variant-numeric: tabular-nums;
}

.th-toast-region {
  position: absolute;
  right: var(--th-safe-right);
  bottom: 110px;
  z-index: 12;
  display: grid;
  justify-items: end;
  gap: 5px;
}

.th-toast {
  max-width: min(360px, calc(100vw - 36px));
  padding: 8px 11px;
  border-right: 2px solid var(--th-accent);
  background: rgba(6,9,8,.86);
  color: var(--th-white);
  font: 10px/1.25 var(--th-mono);
  letter-spacing: .05em;
  animation: th-toast 2.8s ease both;
  text-transform: uppercase;
}

.th-toast[data-tone="error"] { border-color: var(--th-danger); }

.th-scanner {
  position: absolute;
  top: 50%;
  right: var(--th-safe-right);
  z-index: 4;
  width: min(344px, calc(100vw - 40px));
  border: 1px solid rgba(79,134,255,.42);
  border-right: 3px solid var(--th-accent);
  background: linear-gradient(135deg, rgba(10,82,239,.1), transparent 42%), var(--th-panel);
  box-shadow: 0 18px 50px rgba(0,0,0,.42);
  opacity: 0;
  pointer-events: none;
  transform: translate(18px, -50%);
  transition: opacity 180ms ease, transform 220ms cubic-bezier(.2,.8,.2,1);
  clip-path: polygon(16px 0, 100% 0, 100% 100%, 0 100%, 0 16px);
}

.th-scanner[data-open="true"] {
  opacity: 1;
  transform: translate(0, -50%);
}

.th-scanner-head {
  position: relative;
  display: flex;
  min-height: 54px;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 10px 13px;
  border-bottom: 1px solid rgba(79,134,255,.26);
  overflow: hidden;
}

.th-scanner-head::after {
  content: "";
  position: absolute;
  inset: 0 auto 0 -30%;
  width: 25%;
  background: linear-gradient(90deg, transparent, rgba(0,174,239,.2), transparent);
  animation: th-scanner-pass 2.1s ease-in-out infinite;
}

.th-scanner-title {
  margin-top: 4px;
  overflow: hidden;
  font-size: 16px;
  font-weight: 760;
  letter-spacing: .05em;
  text-overflow: ellipsis;
  text-transform: uppercase;
  white-space: nowrap;
}

.th-device-state {
  flex: 0 0 auto;
  padding: 4px 7px;
  border: 1px solid currentColor;
  color: var(--th-danger);
  font: 8px/1 var(--th-mono);
  letter-spacing: .14em;
  text-transform: uppercase;
}

.th-device-state[data-state="online"] {
  color: var(--th-accent);
  box-shadow: 0 0 13px rgba(0,174,239,.2);
}

.th-scanner-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1px;
  padding: 1px 0;
  background: rgba(79,134,255,.13);
}

.th-scan-field {
  min-width: 0;
  min-height: 42px;
  padding: 7px 10px;
  background: rgba(7,12,24,.91);
}

.th-scan-field span,
.th-repair-label span {
  display: block;
  color: #8491a9;
  font: 8px/1 var(--th-mono);
  letter-spacing: .11em;
  text-transform: uppercase;
}

.th-scan-field strong {
  display: block;
  margin-top: 5px;
  overflow: hidden;
  color: var(--th-white);
  font: 11px/1 var(--th-mono);
  font-variant-numeric: tabular-nums;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.th-scan-field strong[data-alert="true"] {
  color: #ff766b;
}

.th-scanner-fault {
  padding: 11px 12px 12px;
  border-top: 1px solid rgba(79,134,255,.22);
}

.th-fault-confidence {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
  color: var(--th-white);
  font: 11px/1 var(--th-mono);
  font-variant-numeric: tabular-nums;
}

.th-confidence-track,
.th-repair-track {
  height: 3px;
  margin-top: 7px;
  overflow: hidden;
  background: rgba(255,255,255,.12);
}

.th-confidence-fill,
.th-repair-fill {
  display: block;
  width: 0;
  height: 100%;
  background: linear-gradient(90deg, #0a52ef, #00aeef);
  box-shadow: 0 0 10px rgba(0,174,239,.44);
  transition: width 220ms ease-out;
}

.th-recommendation {
  margin-top: 9px;
  padding: 8px 9px;
  border-left: 2px solid var(--th-objective);
  background: rgba(79,134,255,.08);
  color: #cbd6e7;
  font-size: 10px;
  line-height: 1.28;
  letter-spacing: .04em;
  text-transform: uppercase;
}

.th-repair-progress {
  padding: 10px 12px 12px;
  border-top: 1px solid rgba(79,134,255,.22);
}

.th-repair-label {
  display: flex;
  justify-content: space-between;
}

.th-repair-label strong {
  min-width: 4ch;
  color: var(--th-accent);
  font: 11px/1 var(--th-mono);
  font-variant-numeric: tabular-nums;
  text-align: right;
}

.th-scanner[data-state="online"] {
  border-color: rgba(0,174,239,.62);
  box-shadow: 0 0 60px rgba(0,174,239,.13), 0 18px 50px rgba(0,0,0,.42);
}

.th-scanner[data-state="online"] .th-repair-fill,
.th-scanner[data-state="online"] .th-confidence-fill {
  background: linear-gradient(90deg, #0a52ef, #00aeef, #edf3ee);
}

.th-demo-chip {
  position: absolute;
  top: auto;
  bottom: var(--th-safe-bottom);
  left: 50%;
  z-index: 7;
  display: none;
  padding: 5px 9px;
  border: 1px solid rgba(0,174,239,.58);
  background: rgba(10,15,28,.76);
  color: var(--th-accent);
  font: 8px/1 var(--th-mono);
  letter-spacing: .18em;
  text-transform: uppercase;
  transform: translateX(-50%);
}

.th-root[data-demo="true"] .th-demo-chip { display: block; }

.th-root[data-demo="true"] .th-upper-right,
.th-root[data-demo="true"] .th-killfeed,
.th-root[data-demo="true"] .th-lower-left,
.th-root[data-demo="true"] .th-lower-right,
.th-root[data-demo="true"] .th-crosshair,
.th-root[data-demo="true"] .th-hitmarker,
.th-root[data-demo="true"] .th-damage-directions,
.th-root[data-demo="true"] .th-interact,
.th-root[data-demo="true"] .th-onboarding {
  display: none;
}

.th-root[data-demo="true"] .th-upper-left { width: min(460px, calc(100vw - 44px)); }
.th-root[data-demo="true"] .th-scanner { width: min(390px, calc(100vw - 40px)); }

.th-cinematic-bars::before,
.th-cinematic-bars::after {
  content: "";
  position: absolute;
  right: 0;
  left: 0;
  z-index: 28;
  height: 0;
  background: #03060c;
  transition: height 420ms cubic-bezier(.2,.8,.2,1);
}
.th-cinematic-bars::before { top: 0; }
.th-cinematic-bars::after { bottom: 0; }
.th-root[data-cinematic="true"] .th-cinematic-bars::before,
.th-root[data-cinematic="true"] .th-cinematic-bars::after { height: 8.5vh; }
.th-root[data-cinematic="true"] .th-upper-left,
.th-root[data-cinematic="true"] .th-upper-right,
.th-root[data-cinematic="true"] .th-lower-left,
.th-root[data-cinematic="true"] .th-lower-right,
.th-root[data-cinematic="true"] .th-scanner,
.th-root[data-cinematic="true"] .th-crosshair,
.th-root[data-cinematic="true"] .th-interact,
.th-root[data-cinematic="true"] .th-onboarding { opacity: 0; }

@keyframes th-scanner-pass {
  0%, 20% { transform: translateX(0); opacity: 0; }
  38% { opacity: 1; }
  70%, 100% { transform: translateX(650%); opacity: 0; }
}

@keyframes th-sweep { to { transform: rotate(360deg); } }
@keyframes th-critical { 50% { opacity: .28; } }
@keyframes th-feed-in { from { opacity: 0; transform: translateX(12px); } }
@keyframes th-hitmarker {
  0% { opacity: 0; transform: translate(-50%,-50%) scale(1.45); }
  28% { opacity: 1; transform: translate(-50%,-50%) scale(.92); }
  100% { opacity: 0; transform: translate(-50%,-50%) scale(1); }
}
@keyframes th-confirm {
  0% { opacity: 0; transform: translate(-50%,5px); }
  14%, 62% { opacity: 1; transform: translate(-50%,0); }
  100% { opacity: 0; transform: translate(-50%,-6px); }
}
@keyframes th-damage-arrow {
  0% { opacity: 0; filter: blur(3px); }
  12% { opacity: 1; filter: blur(0); }
  100% { opacity: 0; }
}
@keyframes th-banner {
  0% { opacity: 0; transform: translate(-50%,-8px) scaleX(.8); }
  9%, 78% { opacity: 1; transform: translate(-50%,0) scaleX(1); }
  100% { opacity: 0; transform: translate(-50%,-3px) scaleX(1.04); }
}
@keyframes th-toast {
  0% { opacity: 0; transform: translateX(12px); }
  8%, 80% { opacity: 1; transform: translateX(0); }
  100% { opacity: 0; transform: translateX(7px); }
}

@media (max-width: 820px) {
  :root {
    --th-safe-right: max(12px, env(safe-area-inset-right));
    --th-safe-left: max(12px, env(safe-area-inset-left));
  }
  .th-upper-left { width: min(330px, 60vw); }
  .th-objective { min-height: 65px; padding: 9px 13px 10px; }
  .th-objective-detail { max-width: 260px; }
  .th-radar-wrap { width: 116px; height: 116px; }
  .th-radar-bearing { transform: translate(-50%, 63px); }
  .th-radar::after { animation-duration: 4.8s; }
  .th-killfeed { width: min(330px, 42vw); min-width: 190px; }
  .th-lower-left { width: min(270px, 45vw); }
  .th-weapon { min-width: 220px; }
  .th-ammo-current { font-size: 38px; }
  .th-onboarding { gap: 11px; max-width: calc(100vw - 24px); white-space: nowrap; }
}

@media (max-width: 560px), (max-height: 470px) {
  .th-upper-left { width: calc(100vw - 150px); min-width: 175px; }
  .th-objective { min-height: 53px; padding: 7px 11px 8px; }
  .th-objective-title { font-size: 13px; }
  .th-objective-detail { display: none; }
  .th-objective-track { margin-top: 7px; }
  .th-radar-wrap { width: 92px; height: 92px; padding: 6px; }
  .th-radar-bearing { display: none; }
  .th-killfeed { display: none; }
  .th-lower-left { width: min(220px, 52vw); }
  .th-vitals { padding: 7px 9px 8px; }
  .th-weapon { min-width: 155px; padding: 6px 10px 5px 14px; }
  .th-weapon-label { max-width: 146px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .th-ammo-row { height: 38px; }
  .th-ammo-current { font-size: 31px; }
  .th-ammo-reserve { font-size: 14px; }
  .th-ammo-divider { height: 23px; margin: 0 8px; }
  .th-onboarding { display: none; }
  .th-center-banner { top: 11%; min-width: 76vw; padding-right: 18px; padding-left: 18px; }
  .th-banner-title { font-size: 17px; }
  .th-interact { top: calc(50% + 60px); min-width: 165px; }
  .th-menu { padding: 20px 20px 22px; }
  .th-menu-heading { margin-bottom: 16px; }
  .th-setting-line { grid-template-columns: 95px minmax(100px, 1fr) 48px; gap: 7px; }
  .th-match-stat { min-width: 78px; }
  .th-scanner { top: auto; right: var(--th-safe-right); bottom: 83px; width: min(300px, calc(100vw - 24px)); transform: translate(12px, 12px); }
  .th-scanner[data-open="true"] { transform: translate(0, 0); }
  .th-scanner-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .th-scanner-head { min-height: 45px; padding: 7px 9px; }
  .th-scan-field { min-height: 36px; padding: 5px 7px; }
  .th-scanner-fault { padding: 8px; }
  .th-root:has(.th-scanner[data-open="true"]) .th-interact { display: none; }
}

@media (prefers-reduced-motion: reduce) {
  .th-root *,
  .th-root *::before,
  .th-root *::after {
    animation-duration: 1ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 1ms !important;
  }
}
`;function ah(e=document){if(e.getElementById(`blacksite-tactical-hud-styles`))return()=>void 0;let t=e.createElement(`style`);return t.id=rh,t.textContent=ih,e.head.append(t),()=>t.remove()}var oh={health:100,maxHealth:100,armor:75,maxArmor:100,ammo:30,reserveAmmo:180,magazineSize:30,weaponLabel:`ANC-R7 Service Rifle`,fireMode:`AUTO`,objective:{zone:`Venue / North Concourse`,label:`Restore ribbon display network`,detail:`Locate and repair the failed processor chain`,progress:0,distanceMeters:42},headingDegrees:0,radarContacts:[],hostileInSight:!1,crosshairSpread:9},sh={diagnostics:{kicker:`Recovery protocol 01`,title:`System diagnostics`,detail:`Scanning signal, power and module health`},repair:{kicker:`Recovery protocol 02`,title:`Field repair active`,detail:`Replace failed modules and restore processor link`},power:{kicker:`Recovery protocol 03`,title:`Display power restored`,detail:`Running luminance and voltage verification`},sync:{kicker:`Final venue sync`,title:`Bringing every screen online`,detail:`Scoreboard · Ribbon · Fascia · Field level`},live:{kicker:`ANC arena recovery`,title:`Venue fully operational`,detail:`All display zones reporting live signal`}},ch=class{element;documentRef;onIntent;onPresentationModeChange;audio;removeStyles;timers=new Set;cleanup=[];elements;state;presentationMode=`gameplay`;paused=!1;onboardingDismissed=!1;constructor(e={}){let t=e.mount??document.body;this.documentRef=t.ownerDocument,this.onIntent=e.onIntent,this.onPresentationModeChange=e.onPresentationModeChange,this.audio=e.audio,this.state=dh(oh,e.initialState??{}),this.removeStyles=ah(this.documentRef),this.element=this.documentRef.createElement(`div`),this.element.className=`th-root`,this.element.setAttribute(`role`,`presentation`),this.element.innerHTML=uh(),t.append(this.element),this.elements=lh(this.element),this.bindUi(),this.render(),this.setPresentationMode(`gameplay`);let n=e.autoDismissOnboardingMs??9e3;n>0&&this.schedule(()=>this.dismissOnboarding(),n)}update(e){this.state=dh(this.state,e),this.render()}setObjective(e){this.update({objective:{...this.state.objective,...e}})}showHitmarker(e=`body`){_h(this.elements.hitmarker,`th-active`),this.elements.hitmarker.dataset.kind=e,e===`kill`&&(this.elements.killConfirm.textContent=`Threat neutralized`,_h(this.elements.killConfirm,`th-active`))}showKillConfirmation(e=`Threat neutralized`){this.elements.killConfirm.textContent=e,_h(this.elements.killConfirm,`th-active`)}showDamageDirection(e,t=1){let n=fh(t,.2,1);this.elements.damageArrow.style.transform=`translateX(-50%) rotate(${e}deg)`,this.elements.damageArrow.style.opacity=String(n),_h(this.elements.damageArrow,`th-active`),this.elements.damageWash.style.opacity=String(n*.38),this.schedule(()=>{this.elements.damageWash.style.opacity=``},340)}setCrosshairSpread(e,t=this.state.hostileInSight){this.state.crosshairSpread=fh(e,3,30),this.state.hostileInSight=t,this.elements.crosshair.style.setProperty(`--spread`,`${this.state.crosshairSpread}px`),this.elements.crosshair.dataset.hostile=String(t)}showInteract(e){if(this.elements.interact.classList.toggle(`th-hidden`,e===null),!e)return;this.elements.interactKey.textContent=e.key,this.elements.interactAction.textContent=e.action,this.elements.interactLabel.textContent=e.label;let t=fh(e.holdProgress??0,0,1);this.elements.interactProgress.style.width=`${t*100}%`,this.elements.interactProgress.parentElement?.classList.toggle(`th-hidden`,e.holdProgress===void 0)}addKillfeed(e){let t=this.documentRef.createElement(`div`);t.className=`th-killfeed-entry`,t.dataset.id=e.id??vh(`feed`);let n=this.documentRef.createElement(`strong`);n.textContent=e.actor;let r=this.documentRef.createElement(`span`);r.textContent=e.method??`•`;let i=this.documentRef.createElement(`strong`);for(i.className=e.friendly?``:`th-foe`,i.textContent=e.target,t.append(n,r,i),this.elements.killfeed.prepend(t);this.elements.killfeed.children.length>5;)this.elements.killfeed.lastElementChild?.remove();this.schedule(()=>t.remove(),5800)}showStatusBanner(e,t=``,n=`Field status`){this.elements.bannerKicker.textContent=n,this.elements.bannerTitle.textContent=e,this.elements.bannerDetail.textContent=t,_h(this.elements.banner,`th-active`),this.announce(`${e}. ${t}`)}showWaveBanner(e,t=`Secure the venue zone`){this.showStatusBanner(`Wave ${Math.max(1,Math.floor(e))}`,t,`Hostile activity`)}showRestorationStage(e){let t=sh[e];this.showStatusBanner(t.title,t.detail,t.kicker),this.element.dispatchEvent(new CustomEvent(`anc:restoration-stage`,{detail:e}))}setDeviceScan(e){if(this.elements.scanner.dataset.open=String(e!==null),!e)return;this.elements.scanner.dataset.state=e.state,this.elements.deviceName.textContent=e.displayName,this.elements.deviceType.textContent=e.type,this.elements.pixelPitch.textContent=e.pixelPitch,this.elements.signal.textContent=e.signal,this.elements.power.textContent=e.power,this.elements.processor.textContent=e.processor,this.elements.moduleFailures.textContent=String(Math.max(0,Math.floor(e.moduleFailures))),this.elements.temperature.textContent=`${e.temperatureC.toFixed(1)}°C`,this.elements.voltage.textContent=`${e.voltage.toFixed(1)}V`,this.elements.recommendation.textContent=e.recommendedRepair;let t=fh(e.faultConfidence,0,1),n=fh(e.repairProgress,0,1);this.elements.faultConfidence.textContent=`${Math.round(t*100)}%`,this.elements.confidenceFill.style.width=`${t*100}%`,this.elements.repairValue.textContent=`${Math.round(n*100)}%`,this.elements.repairFill.style.width=`${n*100}%`;let r=e.state===`online`?`Online`:e.state;this.elements.deviceState.textContent=r,this.elements.deviceState.dataset.state=e.state,this.elements.signal.dataset.alert=String(e.state!==`online`&&/lost|fail|offline/i.test(e.signal)),this.elements.power.dataset.alert=String(e.state!==`online`&&/lost|fail|offline|low/i.test(e.power)),this.elements.processor.dataset.alert=String(e.state!==`online`&&/lost|fail|offline|fault/i.test(e.processor)),this.elements.moduleFailures.dataset.alert=String(e.moduleFailures>0),e.state===`online`&&this.announce(`${e.displayName} is online.`)}setPresentationMode(e){this.presentationMode=e,this.element.dataset.demo=String(e===`executive`),this.element.dataset.cinematic=String(e===`cinematic`),this.onPresentationModeChange?.(e),this.element.dispatchEvent(new CustomEvent(`anc:presentation-mode`,{detail:e}))}getPresentationMode(){return this.presentationMode}setCinematic(e){this.setPresentationMode(e?`cinematic`:`gameplay`)}showPause(){this.paused=!0,this.openModal(`pause`)}showSettings(){this.openModal(`settings`)}closeModal(){this.elements.modalLayer.dataset.open=`false`,this.elements.pauseMenu.classList.add(`th-hidden`),this.elements.settingsMenu.classList.add(`th-hidden`),this.elements.endMenu.classList.add(`th-hidden`)}showMissionEnd(e,t={}){this.paused=!0,this.openModal(`end`),this.elements.endMenu.dataset.outcome=e,this.elements.endKicker.textContent=e===`success`?`Recovery complete`:`Recovery interrupted`,this.elements.endTitle.textContent=t.title??(e===`success`?`Arena online`:`Mission failed`),this.elements.endDetail.textContent=t.detail??(e===`success`?`Venue systems synchronized and event ready`:`The venue remains in emergency operation`),this.elements.endTime.textContent=gh(t.elapsedSeconds??0),this.elements.endRepaired.textContent=String(Math.max(0,Math.floor(t.repaired??0))).padStart(2,`0`),this.elements.endAccuracy.textContent=`${Math.round(fh(t.accuracy??0,0,1)*100)}%`,this.elements.endPrimary.textContent=e===`success`?`Continue`:`Retry mission`,this.elements.endPrimary.dataset.action=e===`success`?`continue`:`retry`,this.audio?.[e===`success`?`uiConfirm`:`uiError`]()}setVisible(e){this.element.hidden=!e}setOnboardingVisible(e){this.onboardingDismissed=!e,this.elements.onboarding.classList.toggle(`th-dismissed`,!e),this.elements.onboarding.setAttribute(`aria-hidden`,String(!e))}dismissOnboarding(){this.onboardingDismissed||(this.setOnboardingVisible(!1),this.schedule(()=>this.elements.onboarding.classList.add(`th-hidden`),450))}showToast(e,t=`info`){let n=this.documentRef.createElement(`div`);n.className=`th-toast`,n.dataset.tone=t,n.textContent=e,this.elements.toasts.append(n),this.schedule(()=>n.remove(),2900)}destroy(){for(let e of this.timers)window.clearTimeout(e);this.timers.clear();for(let e of this.cleanup)e();this.cleanup.length=0,this.element.remove(),this.removeStyles()}render(){let e=this.state,t=ph(e.health,e.maxHealth),n=ph(e.armor,e.maxArmor),r=fh(e.objective.progress,0,1);this.element.dataset.critical=String(t<=.25),this.elements.healthValue.textContent=`${Math.ceil(Math.max(0,e.health))}`.padStart(3,`0`),this.elements.armorValue.textContent=`${Math.ceil(Math.max(0,e.armor))}`.padStart(3,`0`),this.elements.healthFill.style.width=`${t*100}%`,this.elements.armorFill.style.width=`${n*100}%`,this.elements.ammo.textContent=`${Math.max(0,Math.floor(e.ammo))}`.padStart(2,`0`),this.elements.reserveAmmo.textContent=`${Math.max(0,Math.floor(e.reserveAmmo))}`.padStart(3,`0`),this.elements.weaponLabel.textContent=e.weaponLabel,this.elements.fireModeLabel.textContent=e.fireMode,this.elements.objectiveZone.textContent=e.objective.zone,this.elements.objectiveTitle.textContent=e.objective.label,this.elements.objectiveDetail.textContent=e.objective.detail,this.elements.objectiveFill.style.width=`${r*100}%`,this.elements.objectiveDistance.textContent=e.objective.distanceMeters===void 0?`${Math.round(r*100)}%`:`${Math.max(0,Math.round(e.objective.distanceMeters))}M`,this.elements.radarPlayer.style.transform=`translate(-50%, -60%) rotate(${e.headingDegrees}deg)`,this.elements.radarBearing.textContent=mh(e.headingDegrees),this.setCrosshairSpread(e.crosshairSpread,e.hostileInSight),this.renderRadarContacts(e.radarContacts)}renderRadarContacts(e){this.elements.radarContacts.replaceChildren();let t=this.documentRef.createDocumentFragment();for(let n of e.slice(0,24)){let e=this.documentRef.createElement(`i`);e.className=`th-radar-contact`,e.dataset.id=n.id,e.dataset.kind=n.kind,e.style.left=`${50+fh(n.x,-1,1)*46}%`,e.style.top=`${50+fh(n.y,-1,1)*46}%`,e.style.opacity=String(fh(n.intensity??1,.2,1)),e.style.setProperty(`--contact-color`,hh(n.kind)),t.append(e)}this.elements.radarContacts.append(t)}bindUi(){let e=e=>{let t=e.target.closest(`button`);!t||t.disabled||t.dataset.hovered===`true`||(t.dataset.hovered=`true`,this.audio?.uiHover())},t=e=>{e.target.closest(`button`)?.removeAttribute(`data-hovered`)},n=e=>{let t=e.target.closest(`button[data-action]`);!t||t.disabled||this.handleAction(t.dataset.action??``)},r=e=>{let t=e.target,n=t.dataset.setting;if(!n)return;let r=Number(t.value),i=this.element.querySelector(`[data-value-for="${n}"]`);i&&(i.textContent=`${Math.round(r*100)}`),this.onIntent?.({type:`setting`,name:n,value:r})},i=e=>{e instanceof KeyboardEvent&&!/^(Key[WASD]|Arrow|Space|Shift|Mouse)/.test(e.code)||this.dismissOnboarding()};this.element.addEventListener(`pointerover`,e),this.element.addEventListener(`pointerout`,t),this.element.addEventListener(`click`,n),this.element.addEventListener(`input`,r),window.addEventListener(`keydown`,i),window.addEventListener(`pointerdown`,i),this.cleanup.push(()=>this.element.removeEventListener(`pointerover`,e),()=>this.element.removeEventListener(`pointerout`,t),()=>this.element.removeEventListener(`click`,n),()=>this.element.removeEventListener(`input`,r),()=>window.removeEventListener(`keydown`,i),()=>window.removeEventListener(`pointerdown`,i))}handleAction(e){if(e===`resume`)this.paused=!1,this.closeModal(),this.onIntent?.({type:`resume`});else if(e===`settings`)this.showSettings(),this.onIntent?.({type:`settings`});else if(e===`back`)this.paused?this.showPause():this.closeModal(),this.onIntent?.({type:`back`});else if(e===`restart`||e===`quit`||e===`retry`||e===`continue`)this.onIntent?.({type:e});else if(e===`mute`||e===`reducedMotion`){let t=this.element.querySelector(`[data-action="${e}"]`);if(!t)return;let n=t.getAttribute(`aria-checked`)!==`true`;t.setAttribute(`aria-checked`,String(n)),this.onIntent?.({type:`setting`,name:e===`mute`?`mute`:`reducedMotion`,value:n})}else{this.audio?.uiError();return}this.audio?.uiConfirm()}openModal(e){this.elements.modalLayer.dataset.open=`true`,this.elements.pauseMenu.classList.toggle(`th-hidden`,e!==`pause`),this.elements.settingsMenu.classList.toggle(`th-hidden`,e!==`settings`),this.elements.endMenu.classList.toggle(`th-hidden`,e!==`end`),this.schedule(()=>{(e===`pause`?this.elements.pauseMenu:e===`settings`?this.elements.settingsMenu:this.elements.endMenu).querySelector(`button`)?.focus({preventScroll:!0})},30)}announce(e){this.elements.announcer.textContent=``,this.schedule(()=>{this.elements.announcer.textContent=e},20)}schedule(e,t){let n=window.setTimeout(()=>{this.timers.delete(n),e()},t);this.timers.add(n)}};function lh(e){let t=t=>{let n=e.querySelector(t);if(!n)throw Error(`Tactical HUD template is missing ${t}`);return n};return{objectiveZone:t(`[data-hud="objective-zone"]`),objectiveTitle:t(`[data-hud="objective-title"]`),objectiveDetail:t(`[data-hud="objective-detail"]`),objectiveDistance:t(`[data-hud="objective-distance"]`),objectiveFill:t(`[data-hud="objective-fill"]`),radarPlayer:t(`[data-hud="radar-player"]`),radarBearing:t(`[data-hud="radar-bearing"]`),radarContacts:t(`[data-hud="radar-contacts"]`),killfeed:t(`[data-hud="killfeed"]`),healthValue:t(`[data-hud="health-value"]`),armorValue:t(`[data-hud="armor-value"]`),healthFill:t(`[data-hud="health-fill"]`),armorFill:t(`[data-hud="armor-fill"]`),weaponLabel:t(`[data-hud="weapon-label"]`),fireModeLabel:t(`[data-hud="fire-mode-label"]`),ammo:t(`[data-hud="ammo"]`),reserveAmmo:t(`[data-hud="reserve-ammo"]`),crosshair:t(`[data-hud="crosshair"]`),hitmarker:t(`[data-hud="hitmarker"]`),killConfirm:t(`[data-hud="kill-confirm"]`),damageArrow:t(`[data-hud="damage-arrow"]`),damageWash:t(`[data-hud="damage-wash"]`),interact:t(`[data-hud="interact"]`),interactKey:t(`[data-hud="interact-key"]`),interactAction:t(`[data-hud="interact-action"]`),interactLabel:t(`[data-hud="interact-label"]`),interactProgress:t(`[data-hud="interact-progress"]`),banner:t(`[data-hud="banner"]`),bannerKicker:t(`[data-hud="banner-kicker"]`),bannerTitle:t(`[data-hud="banner-title"]`),bannerDetail:t(`[data-hud="banner-detail"]`),onboarding:t(`[data-hud="onboarding"]`),modalLayer:t(`[data-hud="modal-layer"]`),pauseMenu:t(`[data-hud="pause-menu"]`),settingsMenu:t(`[data-hud="settings-menu"]`),endMenu:t(`[data-hud="end-menu"]`),endKicker:t(`[data-hud="end-kicker"]`),endTitle:t(`[data-hud="end-title"]`),endDetail:t(`[data-hud="end-detail"]`),endTime:t(`[data-hud="end-time"]`),endRepaired:t(`[data-hud="end-repaired"]`),endAccuracy:t(`[data-hud="end-accuracy"]`),endPrimary:t(`[data-hud="end-primary"]`),toasts:t(`[data-hud="toasts"]`),announcer:t(`[data-hud="announcer"]`),scanner:t(`[data-hud="scanner"]`),deviceName:t(`[data-hud="device-name"]`),deviceType:t(`[data-hud="device-type"]`),pixelPitch:t(`[data-hud="pixel-pitch"]`),signal:t(`[data-hud="signal"]`),power:t(`[data-hud="power"]`),processor:t(`[data-hud="processor"]`),moduleFailures:t(`[data-hud="module-failures"]`),temperature:t(`[data-hud="temperature"]`),voltage:t(`[data-hud="voltage"]`),deviceState:t(`[data-hud="device-state"]`),faultConfidence:t(`[data-hud="fault-confidence"]`),confidenceFill:t(`[data-hud="confidence-fill"]`),recommendation:t(`[data-hud="recommendation"]`),repairValue:t(`[data-hud="repair-value"]`),repairFill:t(`[data-hud="repair-fill"]`)}}function uh(){return`
    <div class="th-vignette"></div><div class="th-scanlines"></div><div class="th-damage-wash" data-hud="damage-wash"></div>
    <div class="th-cinematic-bars"></div>
    <div class="th-demo-chip">Executive walkthrough · Live recovery telemetry</div>
    <section class="th-upper-left" aria-label="Current objective">
      <div class="th-brand-lockup"><img src="${gd(`assets/brand/anc-white.png`)}" alt="ANC"><span>Arena Recovery Unit</span></div>
      <div class="th-objective">
        <div class="th-eyebrow" data-hud="objective-zone"></div>
        <div class="th-objective-row"><strong class="th-objective-title" data-hud="objective-title"></strong><span class="th-objective-distance" data-hud="objective-distance"></span></div>
        <div class="th-objective-detail" data-hud="objective-detail"></div>
        <div class="th-objective-track"><div class="th-objective-fill" data-hud="objective-fill"></div></div>
      </div>
    </section>
    <section class="th-upper-right" aria-label="Tactical radar and activity">
      <div class="th-killfeed" data-hud="killfeed" aria-live="polite"></div>
      <div class="th-radar-wrap"><div class="th-radar"><div data-hud="radar-contacts"></div><i class="th-radar-player" data-hud="radar-player"></i></div><span class="th-radar-bearing" data-hud="radar-bearing">N 000</span></div>
    </section>
    <section class="th-lower-left" aria-label="Health and armor">
      <div class="th-vitals"><div class="th-vital-labels"><span class="th-eyebrow">Operator condition</span><span><b class="th-vital-value" data-hud="health-value">100</b> <i class="th-eyebrow">HP</i></span></div><div class="th-meter"><div class="th-meter-fill" data-hud="health-fill"></div></div><div class="th-vital-labels"><span class="th-eyebrow">Armor</span><b class="th-vital-value" data-hud="armor-value">075</b></div><div class="th-meter th-meter--armor"><div class="th-meter-fill" data-hud="armor-fill"></div></div></div>
    </section>
    <section class="th-lower-right" aria-label="Weapon and ammunition">
      <div class="th-weapon"><div class="th-weapon-label" data-hud="weapon-label"></div><div class="th-ammo-row"><span class="th-fire-mode"><i></i><i></i><i></i></span><span class="th-eyebrow" data-hud="fire-mode-label">AUTO</span><strong class="th-ammo-current" data-hud="ammo">30</strong><i class="th-ammo-divider"></i><span class="th-ammo-reserve" data-hud="reserve-ammo">180</span></div></div>
    </section>
    <div class="th-crosshair" data-hud="crosshair"><i></i><i></i><i></i><i></i></div>
    <div class="th-hitmarker" data-hud="hitmarker"><i></i><i></i><i></i><i></i></div><div class="th-kill-confirm" data-hud="kill-confirm">Threat neutralized</div>
    <div class="th-damage-directions"><i class="th-damage-arrow" data-hud="damage-arrow"></i></div>
    <div class="th-interact th-hidden" data-hud="interact"><kbd class="th-interact-key" data-hud="interact-key">E</kbd><div class="th-interact-copy"><div class="th-interact-action" data-hud="interact-action">Repair</div><div class="th-interact-label" data-hud="interact-label">Display controller</div></div><div class="th-interact-progress th-hidden"><span data-hud="interact-progress"></span></div></div>
    <div class="th-center-banner" data-hud="banner"><div class="th-banner-kicker" data-hud="banner-kicker"></div><div class="th-banner-title" data-hud="banner-title"></div><div class="th-banner-detail" data-hud="banner-detail"></div></div>
    <div class="th-onboarding" data-hud="onboarding"><span><kbd class="th-key">WASD</kbd> Move</span><span><kbd class="th-key">LMB</kbd> Fire</span><span><kbd class="th-key">E</kbd> Diagnose / Repair</span><span><kbd class="th-key">ESC</kbd> Pause</span></div>
    <aside class="th-scanner" data-hud="scanner" data-open="false" aria-label="Display diagnostics">
      <div class="th-scanner-head"><div><div class="th-eyebrow">ANC technical scanner</div><div class="th-scanner-title" data-hud="device-name">North ribbon 04</div></div><span class="th-device-state" data-hud="device-state">Offline</span></div>
      <div class="th-scanner-grid">
        <div class="th-scan-field"><span>Display type</span><strong data-hud="device-type">Ribbon board</strong></div><div class="th-scan-field"><span>Pixel pitch</span><strong data-hud="pixel-pitch">10 mm</strong></div>
        <div class="th-scan-field"><span>Signal</span><strong data-hud="signal">No input</strong></div><div class="th-scan-field"><span>Power</span><strong data-hud="power">Standby</strong></div>
        <div class="th-scan-field"><span>Processor</span><strong data-hud="processor">Fault</strong></div><div class="th-scan-field"><span>Module failures</span><strong data-hud="module-failures">03</strong></div>
        <div class="th-scan-field"><span>Card thermal</span><strong data-hud="temperature">47.8°C</strong></div><div class="th-scan-field"><span>PSU output</span><strong data-hud="voltage">4.74V</strong></div>
      </div>
      <div class="th-scanner-fault"><div class="th-eyebrow">Scan confidence</div><div class="th-fault-confidence"><span>Receive-card cascade fault</span><strong data-hud="fault-confidence">96%</strong></div><div class="th-confidence-track"><span class="th-confidence-fill" data-hud="confidence-fill"></span></div><div class="th-recommendation" data-hud="recommendation">Transfer fiber path and restore cabinet data cascade.</div></div>
      <div class="th-repair-progress"><div class="th-repair-label"><span>Repair sequence</span><strong data-hud="repair-value">0%</strong></div><div class="th-repair-track"><span class="th-repair-fill" data-hud="repair-fill"></span></div></div>
    </aside>
    <div class="th-toast-region" data-hud="toasts" aria-live="polite"></div>
    <div class="th-modal-layer" data-hud="modal-layer" data-open="false">
      <section class="th-menu" data-hud="pause-menu" aria-label="Pause menu"><header class="th-menu-heading"><div><div class="th-eyebrow">ANC Arena Recovery</div><h1 class="th-menu-title">Paused</h1></div><span class="th-menu-code">OPS // 07<br>LOCAL SESSION</span></header><div class="th-menu-actions"><button class="th-button" data-action="resume" data-index="01">Resume operation</button><button class="th-button" data-action="settings" data-index="02">Settings</button><button class="th-button" data-action="restart" data-index="03">Restart mission</button><button class="th-button th-button--danger" data-action="quit" data-index="04">Exit operation</button></div></section>
      <section class="th-menu th-hidden" data-hud="settings-menu" aria-label="Settings"><header class="th-menu-heading"><div><div class="th-eyebrow">System configuration</div><h1 class="th-menu-title">Settings</h1></div><span class="th-menu-code">AUDIO / ACCESS</span></header><div class="th-settings"><label class="th-setting-line"><span class="th-setting-label">Master volume</span><input class="th-range" type="range" min="0" max="1" step="0.01" value="0.8" data-setting="masterVolume"><output class="th-setting-value" data-value-for="masterVolume">80</output></label><label class="th-setting-line"><span class="th-setting-label">Combat SFX</span><input class="th-range" type="range" min="0" max="1" step="0.01" value="0.85" data-setting="sfxVolume"><output class="th-setting-value" data-value-for="sfxVolume">85</output></label><label class="th-setting-line"><span class="th-setting-label">Venue ambience</span><input class="th-range" type="range" min="0" max="1" step="0.01" value="0.55" data-setting="ambienceVolume"><output class="th-setting-value" data-value-for="ambienceVolume">55</output></label><div class="th-setting-line"><span class="th-setting-label">Mute all</span><span></span><button class="th-toggle" aria-label="Mute all audio" aria-checked="false" data-action="mute"></button></div><div class="th-setting-line"><span class="th-setting-label">Reduced motion</span><span></span><button class="th-toggle" aria-label="Use reduced interface motion" aria-checked="false" data-action="reducedMotion"></button></div></div><div class="th-settings-footer"><button class="th-button" data-action="back" data-index="ESC">Back</button></div></section>
      <section class="th-menu th-end-state th-hidden" data-hud="end-menu" data-outcome="success" aria-label="Mission result"><div class="th-end-kicker" data-hud="end-kicker">Recovery complete</div><h1 class="th-end-title" data-hud="end-title">Arena online</h1><div class="th-end-detail" data-hud="end-detail">Venue systems synchronized and event ready</div><div class="th-match-stats"><div class="th-match-stat"><span>Operation time</span><strong data-hud="end-time">00:00</strong></div><div class="th-match-stat"><span>Systems repaired</span><strong data-hud="end-repaired">00</strong></div><div class="th-match-stat"><span>Accuracy</span><strong data-hud="end-accuracy">0%</strong></div></div><div class="th-modal-actions"><button class="th-button" data-hud="end-primary" data-action="continue" data-index="01">Continue</button></div></section>
    </div>
    <div class="th-hidden" data-hud="announcer" aria-live="assertive"></div>
  `}function dh(e,t){return{...e,...t,objective:{...e.objective,...t.objective},radarContacts:t.radarContacts?[...t.radarContacts]:e.radarContacts}}function fh(e,t,n){return Math.min(n,Math.max(t,Number.isFinite(e)?e:t))}function ph(e,t){return t>0?fh(e/t,0,1):0}function mh(e){let t=(e%360+360)%360,n=[`N`,`NE`,`E`,`SE`,`S`,`SW`,`W`,`NW`];return`${n[Math.round(t/45)%n.length]} ${Math.round(t).toString().padStart(3,`0`)}`}function hh(e){return e===`friendly`?`#00aeef`:e===`objective`?`#4f86ff`:`#ff4d3f`}function gh(e){let t=Math.max(0,Math.floor(e));return`${Math.floor(t/60).toString().padStart(2,`0`)}:${(t%60).toString().padStart(2,`0`)}`}function _h(e,t){e.classList.remove(t),e.offsetWidth,e.classList.add(t)}function vh(e){return`${e}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,7)}`}var yh=class{audio;hud;onIntent;constructor(e={}){this.onIntent=e.onIntent,this.audio=new wd(e.audio),this.hud=new ch({...e.hud,mount:e.mount,audio:this.audio,onIntent:e=>this.handleIntent(e)})}async setPaused(e){await this.audio.setPaused(e),e?this.hud.showPause():this.hud.closeModal()}restart(){this.audio.restart(),this.hud.closeModal(),this.hud.setOnboardingVisible(!0)}destroy(){this.hud.destroy(),this.audio.dispose()}handleIntent(e){e.type===`setting`&&(e.name===`mute`&&typeof e.value==`boolean`&&this.audio.setMuted(e.value),e.name===`masterVolume`&&typeof e.value==`number`&&this.audio.setVolume(`master`,e.value),e.name===`sfxVolume`&&typeof e.value==`number`&&this.audio.setVolume(`sfx`,e.value),e.name===`ambienceVolume`&&typeof e.value==`number`&&this.audio.setVolume(`ambience`,e.value)),e.type===`resume`&&this.audio.setPaused(!1),(e.type===`restart`||e.type===`retry`)&&this.restart(),this.onIntent?.(e)}};gd(`assets/audio/arena-powered-ambience.mp3`);var bh=[{time:0,position:[0,1.7,23],target:[0,1.8,8],fov:56,label:`Service tunnel — systems offline`},{time:6,position:[-7,2.4,8],target:[0,2.5,-9],fov:62,label:`Arena reveal — emergency power`},{time:13,position:[7,3.1,1],target:[0,3.5,-17],fov:68,label:`ANC display network — diagnostics`},{time:21,position:[0,8.5,-1],target:[0,2,-18],fov:72,label:`Bowl synchronization`},{time:31,position:[-12,4.5,-16],target:[0,5,-22],fov:64,label:`The venue comes alive`}],xh=class{camera;elapsed=0;active=!1;target=new W;fromPosition=new W;toPosition=new W;fromTarget=new W;toTarget=new W;constructor(e){this.camera=e}start(){this.elapsed=0,this.active=!0}stop(){this.active=!1}get isActive(){return this.active}get duration(){return bh[bh.length-1].time+6}update(e){if(!this.active)return null;this.elapsed=Math.min(this.elapsed+e,this.duration);let t=Math.min(bh.length-2,this.findBeat(this.elapsed)),n=bh[t],r=bh[t+1],i=Math.max(r.time-n.time,.001),a=H.clamp((this.elapsed-n.time)/i,0,1),o=a*a*(3-2*a);return this.fromPosition.fromArray(n.position),this.toPosition.fromArray(r.position),this.fromTarget.fromArray(n.target),this.toTarget.fromArray(r.target),this.camera.position.copy(this.fromPosition).lerp(this.toPosition,o),this.target.copy(this.fromTarget).lerp(this.toTarget,o),this.camera.fov=H.lerp(n.fov,r.fov,o),this.camera.updateProjectionMatrix(),this.camera.lookAt(this.target),this.elapsed>=this.duration&&(this.active=!1),{progress:this.elapsed/this.duration,beat:a>.55?r.label:n.label}}findBeat(e){for(let t=0;t<bh.length-1;t+=1)if(e>=bh[t].time&&e<bh[t+1].time)return t;return bh.length-2}},Sh={mission:{mode:`mission`,combatEnabled:!0,guidedCamera:!1,autoAdvanceInteractions:!1,showTechnologyHotspots:!1,cinematicBars:!1},executive:{mode:`executive`,combatEnabled:!1,guidedCamera:!1,autoAdvanceInteractions:!1,showTechnologyHotspots:!0,cinematicBars:!1},cinematic:{mode:`cinematic`,combatEnabled:!1,guidedCamera:!0,autoAdvanceInteractions:!0,showTechnologyHotspots:!0,cinematicBars:!0}};function Ch(e=window.location){let t=new URLSearchParams(e.search).get(`mode`);return{...Sh[t&&t in Sh?t:`mission`]}}var wh=new Xt,Th=new Dt,Eh=new W,Dh=new sn,Oh=class{root=new K;rigs=new Map;armor=new X({color:`#222a30`,roughness:.66,metalness:.48});armorSecondary=new X({color:`#10151a`,roughness:.8,metalness:.3});fabric=new X({color:`#343735`,roughness:.96,metalness:0});danger=new X({color:`#7f1f19`,emissive:`#9e241c`,emissiveIntensity:.9,roughness:.55});visor=new Uo({color:`#e17841`,emissive:`#ff4f28`,emissiveIntensity:1.5,roughness:.18,metalness:.45,clearcoat:1});weaponMaterial=new X({color:`#0b0e10`,roughness:.4,metalness:.82});constructor(){this.root.name=`actors.hostiles`}sync(e,t,n){let r=new Set;for(let i of e){r.add(i.id);let e=this.rigs.get(i.id);e||(e=this.createRig(i.id,this.rigs.size),this.rigs.set(i.id,e),this.root.add(e.root)),this.updateRig(e,i,t,n)}for(let[e,t]of this.rigs)t.root.visible=r.has(e)}flashHit(e){let t=this.rigs.get(e);if(!t)return;let n=t.hitShell.material;n.opacity=.7}dispose(){this.root.traverse(e=>{e instanceof J&&(e.geometry.dispose(),e.material.name.startsWith(`actor.hit`)&&e.material.dispose())}),this.armor.dispose(),this.armorSecondary.dispose(),this.fabric.dispose(),this.danger.dispose(),this.visor.dispose(),this.weaponMaterial.dispose()}createRig(e,t){let n=new K;n.name=`hostile.${e}`;let r=new K;r.position.y=1.08,n.add(r);let i=new J(new oa(.29,.48,5,10),this.fabric);i.rotation.z=Math.PI/2,i.scale.set(1,1.08,.72),r.add(i);let a=new J(new Y(.62,.46,.22,2,2,1),this.armor);a.position.set(0,.1,-.07),r.add(a);let o=new J(new To(this.armorPlateShape(),{depth:.045,bevelEnabled:!0,bevelSize:.025,bevelThickness:.018,bevelSegments:2}),this.armorSecondary);o.scale.setScalar(.72),o.position.set(0,-.04,-.17),r.add(o);let s=new J(new Y(.16,.035,.018),this.danger);s.position.set(t%2?-.16:.16,.18,-.31),r.add(s);let c=new K;c.position.y=.54,r.add(c);let l=new J(new Ao(.215,16,10),this.armor);l.scale.set(1,.92,1.08),c.add(l);let u=new J(new Y(.34,.105,.055),this.visor);u.position.set(0,.02,-.205),c.add(u);let d=new J(new ca(.045,.055,.11,10),this.danger);d.rotation.z=Math.PI/2,d.position.set(t%2?-.22:.22,.09,-.02),c.add(d);let f=this.createLimb(.11,.52,this.fabric,this.armor,`arm.left`),p=this.createLimb(.11,.52,this.fabric,this.armor,`arm.right`);f.position.set(-.39,.12,0),p.position.set(.39,.12,0),f.rotation.z=.14,p.rotation.z=-.14,r.add(f,p);let m=this.createLimb(.14,.69,this.fabric,this.armorSecondary,`leg.left`),h=this.createLimb(.14,.69,this.fabric,this.armorSecondary,`leg.right`);m.position.set(-.19,.58,0),h.position.set(.19,.58,0),n.add(m,h);let g=new K;g.name=`weapon`,g.position.set(.17,.14,-.48),g.rotation.set(.08,-.08,-.12);let _=new J(new Y(.16,.16,.68),this.weaponMaterial);g.add(_);let v=new J(new ca(.025,.025,.62,10),this.weaponMaterial);v.rotation.x=Math.PI/2,v.position.z=-.56,g.add(v),r.add(g);let y=new J(new Y(.44,.58,.2),this.armorSecondary);y.position.set(0,.08,.24),r.add(y);for(let e of[-.14,.14]){let t=new J(new ca(.055,.055,.46,10),this.armor);t.position.set(e,.04,.37),r.add(t)}let b=new J(new sa(.44,24),new ri({color:`#000`,transparent:!0,opacity:.38,depthWrite:!1}));b.rotation.x=-Math.PI/2,b.position.y=.012,n.add(b);let x=new ri({name:`actor.hit.${e}`,color:`#ffffff`,transparent:!0,opacity:0,blending:2,depthWrite:!1}),S=new J(new oa(.44,.72,4,10),x);return S.position.y=1.08,n.add(S),n.traverse(e=>{e instanceof J&&(e.castShadow=!0)}),b.castShadow=!1,{root:n,torso:r,head:c,leftArm:f,rightArm:p,leftLeg:m,rightLeg:h,weapon:g,hitShell:S,lastHealth:100}}createLimb(e,t,n,r,i){let a=new K;a.name=i;let o=new J(new oa(e,t,4,8),n);o.position.y=-t*.48,a.add(o);let s=new J(new Y(e*2.35,e*1.45,e*2.5),r);return s.position.set(0,-t*.12,-e*.3),a.add(s),a}armorPlateShape(){let e=new Ba;return e.moveTo(-.32,.24),e.lineTo(.32,.24),e.lineTo(.26,-.22),e.lineTo(0,-.34),e.lineTo(-.26,-.22),e.closePath(),e}updateRig(e,t,n,r){e.root.position.copy(t.position),e.root.rotation.y=t.yaw;let i=Math.hypot(t.velocity.x,t.velocity.z),a=r*(5.4+i*1.15)+Number(t.id.replace(/\D/g,``))*.7,o=Math.min(.72,i*.16);e.leftLeg.rotation.x=Math.sin(a)*o,e.rightLeg.rotation.x=-Math.sin(a)*o,e.leftArm.rotation.x=-Math.sin(a)*o*.55-(t.state===`attack`?.8:.25),e.rightArm.rotation.x=Math.sin(a)*o*.55-(t.state===`attack`?.9:.35),e.torso.position.y=1.08+Math.abs(Math.sin(a*2))*i*.006,e.torso.rotation.z=H.lerp(e.torso.rotation.z,t.state===`strafe`?Math.sin(a*.3)*.08:0,1-Math.exp(-8*n)),e.head.rotation.y=t.state===`patrol`?Math.sin(r*.8)*.24:0,e.weapon.position.z=-.48+(t.state===`attack`?Math.sin(r*54)*.006:0);let s=e.hitShell.material;s.opacity=Math.max(0,s.opacity-n*5.8),t.health<e.lastHealth&&(s.opacity=.72),e.lastHealth=t.health,t.state===`dead`?(e.root.rotation.z=H.lerp(e.root.rotation.z,-Math.PI*.48,1-Math.exp(-4.8*n)),e.root.position.y=Math.max(.38,e.root.position.y)):e.root.rotation.z=0}},kh=class{runtime;root=new K;definitions;propMeshes=new Map;debrisMesh;constructor(e){this.runtime=e,this.root.name=`actors.destructibles`,this.definitions=[{id:`pdu-cell-a`,maximumHealth:55,explosive:!0,explosionRadius:5.2,explosionDamage:74,debrisCount:24,center:new W(-4.65,.85,25.15),halfExtents:new W(.55,.85,.55),bounds:new Jn(new W(-5.2,0,24.6),new W(-4.1,1.7,25.7))},{id:`field-case-a`,maximumHealth:80,explosive:!1,explosionRadius:0,explosionDamage:0,debrisCount:14,center:new W(4.9,.45,29),halfExtents:new W(.8,.45,.6),bounds:new Jn(new W(4.1,0,28.4),new W(5.7,.9,29.6))}],this.createPowerCell(this.definitions[0]),this.createEquipmentCase(this.definitions[1]),this.debrisMesh=new Ei(new Y(1,1,1),new X({color:`#2a3034`,roughness:.72,metalness:.58}),this.runtime.destruction.getDebris().length),this.debrisMesh.name=`destruction.debris-pool`,this.debrisMesh.castShadow=!0,this.debrisMesh.count=0,this.root.add(this.debrisMesh)}sync(){for(let e of this.runtime.destruction.getProps()){let t=this.propMeshes.get(e.id);t&&(t.visible=e.enabled)}let e=0;for(let t of this.runtime.destruction.getDebris())t.active&&(Th.setFromEuler(Dh.set(t.rotation.x,t.rotation.y,t.rotation.z)),Eh.setScalar(t.scale),wh.compose(t.position,Th,Eh),this.debrisMesh.setMatrixAt(e,wh),e+=1);this.debrisMesh.count=e,this.debrisMesh.instanceMatrix.needsUpdate=!0}dispose(){this.root.traverse(e=>{if(!(e instanceof J))return;e.geometry.dispose();let t=Array.isArray(e.material)?e.material:[e.material];for(let e of t)e.dispose()})}createPowerCell(e){let t=new K;t.name=e.id;let n=e.bounds.getCenter(new W);t.position.copy(n);let r=new J(new ca(.42,.48,1.55,20),new X({color:`#4c555a`,roughness:.48,metalness:.7}));t.add(r);for(let e of[-.55,.55]){let n=new J(new jo(.5,.045,8,22),new X({color:`#161b1f`,roughness:.52,metalness:.85}));n.rotation.x=Math.PI/2,n.position.y=e,t.add(n)}let i=new J(new Oo(.42,.2),new ri({color:`#ff5137`}));i.position.set(0,.18,-.44),t.add(i),this.propMeshes.set(e.id,t),this.root.add(t)}createEquipmentCase(e){let t=new K;t.name=e.id;let n=e.bounds.getCenter(new W);t.position.copy(n);let r=new J(new Y(1.55,.78,1.1,3,2,2),new X({color:`#181f24`,roughness:.74,metalness:.3}));t.add(r);for(let e of[-.69,.69])for(let n of[-.32,.32]){let r=new J(new Y(.12,.12,1.14),new X({color:`#707b80`,roughness:.36,metalness:.88}));r.position.set(e,n,0),t.add(r)}let i=new J(new Oo(.7,.18),new ri({color:`#0a52ef`}));i.position.set(0,0,-.556),t.add(i),this.propMeshes.set(e.id,t),this.root.add(t)}},Ah=new W(0,.02,47.2),jh=[new W(-4.8,.02,31),new W(4.9,.02,28),new W(-6.2,.02,22),new W(6.1,.02,20),new W(.4,.02,13.5)],Mh=class{canvas;renderer;scene=new Nn;camera=new Es(61,1,.04,240);input;quality;profiler;materials;world;lighting;atmosphere;vfx;rifle;pipeline;runtime;actors=new Oh;destructibles;presentation;mode=Ch();cinematic;loop;fpsIntent=Ym();eye=new W;view=new W;objective=new W;toObjective=new W;effectPosition=new W;effectDirection=new W;effectEnd=new W;cameraRight=new W;radarContacts=[];elapsed=0;paused=!0;revealTriggered=!1;previousFire=!1;hudCooldown=0;footstepDistance=0;lastPosition=Ah.clone();lastRepairFx=-1;shotsFired=0;shotsHit=0;completionShown=!1;constructor(e){this.canvas=e,this.renderer=xd(e),Yd(this.renderer),this.quality=new bd(this.renderer);let t=new URLSearchParams(location.search).get(`quality`);t&&[`performance`,`balanced`,`high`,`cinematic`].includes(t)?this.quality.setPreset(t):this.mode.mode===`cinematic`&&this.quality.setPreset(`cinematic`),this.materials=new Qd,this.materials.configureForRenderer(this.renderer),this.world=up({materials:this.materials}),this.lighting=Zd(this.scene,{shadowMapSize:this.quality.profile.shadowMapSize}),this.atmosphere=qd({rainDrops:Math.round(460*this.quality.profile.particleScale),mistCards:Math.max(6,Math.round(14*this.quality.profile.worldDetail)),dustMotes:Math.round(120*this.quality.profile.particleScale)}),this.vfx=Df({attachHitCueTo:this.camera}),this.rifle=Pf({materials:this.materials}),this.scene.add(this.world.root,this.atmosphere.root,this.vfx.root,this.camera,this.actors.root),this.camera.add(this.rifle.root),this.configurePerformanceFallback(),this.runtime=new nh({playerSpawn:Ah,mission:{executiveMode:!this.mode.combatEnabled}}),this.destructibles=new kh(this.runtime),this.scene.add(this.destructibles.root),this.installWorldCollision(),this.installDestructibles(),this.installGameplayEvents();let n=document.querySelector(`#game-ui`)??document.body;this.presentation=new yh({mount:n,hud:{autoDismissOnboardingMs:this.mode.mode===`mission`?9e3:2800},onIntent:e=>this.handleHudIntent(e)}),this.presentation.hud.setPresentationMode(this.mode.mode===`mission`?`gameplay`:this.mode.mode),this.presentation.audio.startArenaAmbience(`emergency`);let r=this.quality.profile.preset===`performance`?`mobile`:this.quality.profile.preset===`balanced`?`balanced`:`high`;this.pipeline=gf(this.renderer,this.scene,this.camera,{quality:r,bloom:this.quality.profile.postProcessing,bloomStrength:this.quality.profile.bloomStrength,maxDpr:this.quality.profile.maxDpr}),this.profiler=new _d(this.renderer),this.cinematic=new xh(this.camera),this.mode.guidedCamera&&(this.cinematic.start(),this.rifle.root.visible=!1),this.input=new Am(e),this.camera.rotation.order=`YXZ`,this.runtime.start(),this.lastPosition.copy(this.runtime.controller.position),this.loop=new vd(e=>this.update(e),()=>this.render()),this.resize(),this.hideBootScreen(),this.publishDiagnostics()}start(){this.loop.start()}beginOperation(e){if(this.paused=!1,this.mode.guidedCamera||this.input.requestPointerLock(),e){document.body.dataset.operator=e.id,this.presentation.hud.showStatusBanner(`${e.name} // ${e.roleLabel}`,e.missionTitle,e.specialty);return}this.presentation.hud.showStatusBanner(`ANC field operation active`,`Restore the display network before doors open`,`Venue technology // Live recovery`)}dispose(){this.loop.stop(),this.input.dispose(),this.presentation.destroy(),this.runtime.events.clear(),this.actors.dispose(),this.destructibles.dispose(),this.rifle.dispose(),this.vfx.dispose(),this.atmosphere.dispose(),this.lighting.dispose(),this.world.dispose(),this.pipeline.dispose(),this.materials.dispose(),this.renderer.dispose(),window.__THREE_GAME_DIAGNOSTICS__=void 0}update(e){let t=Math.min(e,.05);this.elapsed+=t;let n=this.input.sample();if(n.pausePressed&&!this.mode.guidedCamera&&this.setPaused(!this.paused),!this.paused){this.fpsIntent.moveForward=n.move.y,this.fpsIntent.moveRight=n.move.x,this.fpsIntent.lookDeltaX=n.look.x,this.fpsIntent.lookDeltaY=n.look.y,this.fpsIntent.jumpPressed=n.jumpPressed,this.fpsIntent.crouchHeld=n.crouch,this.fpsIntent.sprintHeld=n.sprint,this.fpsIntent.adsHeld=n.aim,this.fpsIntent.fireHeld=n.fire,this.fpsIntent.firePressed=n.fire&&!this.previousFire,this.fpsIntent.reloadPressed=n.reloadPressed,this.fpsIntent.interactHeld=n.interact,this.fpsIntent.retryPressed=!1,this.previousFire=n.fire;let e=this.readDisplayInteraction(n.interact),r=this.runtime.mission.getSnapshot().phase;this.mode.autoAdvanceInteractions&&(r===`scan`||r===`repair`)&&(e.interactHeld=!0,e.aimedAtDisplay=!0,e.withinInteractionRange=!0),this.runtime.update(t,this.fpsIntent,e),this.triggerRevealIfNeeded(),this.updateCamera(n.look.x,n.look.y,t),this.updateFootsteps(),this.updateWorldProgress(),this.actors.sync(this.runtime.enemies.getEnemies(),t,this.elapsed),this.destructibles.sync()}this.world.update(t,this.elapsed,this.camera.position),this.lighting.update(this.elapsed,this.camera.position),this.atmosphere.update(t,this.elapsed,this.camera.position),this.vfx.update(t),this.profiler.update(t),this.updateHud(t),this.resize(),this.publishDiagnostics()}render(){this.pipeline.render(1/60,this.elapsed)}updateCamera(e,t,n){if(this.mode.guidedCamera){let e=this.cinematic.update(n);e&&this.presentation.hud.setObjective({zone:`ANC // Guided venue tour`,label:e.beat,detail:`Real-time cinematic capture mode`,progress:e.progress});return}this.runtime.controller.getEyePosition(this.eye),this.camera.position.copy(this.eye),this.camera.rotation.set(this.runtime.controller.state.pitch,this.runtime.controller.state.yaw,0,`YXZ`);let r=this.runtime.controller.state.ads?45:this.runtime.controller.state.sprinting?66:61;this.camera.fov=H.lerp(this.camera.fov,r,1-Math.exp(-10*n)),this.camera.updateProjectionMatrix(),this.rifle.update(n,this.elapsed,{moveSpeed:this.runtime.controller.getHorizontalSpeed(),lookDeltaX:e*.035,lookDeltaY:t*.035,aiming:this.runtime.controller.state.ads,sprinting:this.runtime.controller.state.sprinting,grounded:this.runtime.controller.state.grounded})}readDisplayInteraction(e){this.world.objectiveAnchors.ledRepair.getWorldPosition(this.objective),this.runtime.controller.getEyePosition(this.eye),this.runtime.controller.getViewDirection(this.view),this.toObjective.copy(this.objective).sub(this.eye);let t=this.toObjective.length();return{interactHeld:e,aimedAtDisplay:t>.001&&this.toObjective.multiplyScalar(1/t).dot(this.view)>.89,withinInteractionRange:t<4.2}}triggerRevealIfNeeded(){this.revealTriggered||(this.runtime.controller.position.z<39.5||this.mode.guidedCamera&&this.elapsed>1.2)&&(this.revealTriggered=!0,this.runtime.mission.enterSeatingBowl(),this.presentation.hud.showStatusBanner(`Arena bowl compromised`,`Secure ANC infrastructure before diagnostics`,`Venue systems takeover`))}updateWorldProgress(){let e=this.runtime.mission.getSnapshot(),t=0;if(e.phase===`scan`&&(t=.06+e.interactionProgress*.08),e.phase===`repair`&&(t=.14+e.interactionProgress*.18),e.phase===`activation`){let n=this.runtime.mission.config.activationStages.length;t=.32+(e.activationStage+e.interactionProgress)/n*.68}e.phase===`complete`&&(t=1),this.world.setShowProgress(t),this.lighting.setShowProgress(t),this.atmosphere.setShowProgress(t)}updateFootsteps(){let e=this.runtime.controller.position,t=e.distanceTo(this.lastPosition);this.footstepDistance+=t,this.lastPosition.copy(e);let n=this.runtime.controller.state.sprinting?1.45:1.85;this.runtime.controller.state.grounded&&this.footstepDistance>=n&&(this.footstepDistance=0,this.presentation.audio.footstep(e.z>18?`concrete`:`metal`,this.runtime.controller.state.sprinting?1:.72))}updateHud(e){if(this.hudCooldown-=e,this.hudCooldown>0)return;this.hudCooldown=.075;let t=this.runtime.getDiagnostics(),n=this.runtime.mission.getSnapshot(),r=this.missionObjective(n.phase),i=this.world.objectiveAnchors.ledRepair.getWorldPosition(this.objective),a=this.runtime.controller.position.distanceTo(i);this.buildRadar(),this.presentation.hud.update({health:this.runtime.playerHealth,maxHealth:this.runtime.maximumPlayerHealth,armor:72,maxArmor:100,ammo:t.weapon.ammoInMagazine,reserveAmmo:t.weapon.reserveAmmo,magazineSize:this.runtime.weapon.config.magazineSize,weaponLabel:`ANC-R7 Field Systems Carbine`,fireMode:`AUTO`,headingDegrees:H.euclideanModulo(H.radToDeg(this.runtime.controller.state.yaw),360),radarContacts:this.radarContacts,hostileInSight:!1,crosshairSpread:4+t.weapon.spreadRadians*540,objective:{zone:r.zone,label:r.label,detail:r.detail,progress:r.progress,distanceMeters:n.phase===`defend`?void 0:a}}),n.phase===`scan`||n.phase===`repair`||n.phase===`activation`||n.phase===`complete`?this.presentation.hud.setDeviceScan(this.buildDeviceScan()):this.presentation.hud.setDeviceScan(null);let o=this.readDisplayInteraction(!1);(n.phase===`scan`||n.phase===`repair`)&&o.withinInteractionRange&&o.aimedAtDisplay?this.presentation.hud.showInteract({key:`E`,action:n.phase===`scan`?`HOLD TO SCAN`:`HOLD TO REPAIR`,label:`ANC North Field-Level Service Wall · NW-14 path`,holdProgress:n.interactionProgress}):this.presentation.hud.showInteract(null)}missionObjective(e){let t=this.runtime.mission.getSnapshot();return e===`tunnel`?{zone:`Event Level / Service Tunnel`,label:`Reach the arena bowl`,detail:`Follow the ANC display service route`,progress:H.clamp((47.2-this.runtime.controller.position.z)/8,0,1)}:e===`reveal`?{zone:`Lower Bowl / North Vomitory`,label:`Assess venue takeover`,detail:`Emergency operation only · main displays offline`,progress:.15}:e===`defend`?{zone:`Display Infrastructure Bay`,label:`Defend technical infrastructure`,detail:`${t.eliminatedEnemies} of ${t.objectiveTarget} threats neutralized`,progress:t.eliminatedEnemies/Math.max(1,t.objectiveTarget)}:e===`scan`?{zone:`North Field Level / Service Wall`,label:`Diagnose display failure`,detail:`Trace source, fiber, cabinet power and receive-card cascade`,progress:t.interactionProgress}:e===`repair`?{zone:`North Field Level / Service Wall`,label:`Restore processor signal path`,detail:`Transfer fiber, reseat the data jumper and verify 5 VDC`,progress:t.interactionProgress}:e===`activation`?{zone:`Venue Network / All Display Zones`,label:`Synchronize the building`,detail:this.runtime.mission.config.activationStages[t.activationStage]?.label??`Final signal verification`,progress:(t.activationStage+t.interactionProgress)/this.runtime.mission.config.activationStages.length}:e===`complete`?{zone:`ANC Venue Control`,label:`Arena fully operational`,detail:`Every display zone live and synchronized`,progress:1}:e===`failed`?{zone:`Recovery interrupted`,label:`Operator down`,detail:`Retry from the last secure checkpoint`,progress:0}:{zone:`ANC Field Operations`,label:`Arena Recovery`,detail:`Initializing mission systems`,progress:0}}buildDeviceScan(){let e=this.runtime.mission.getDisplayDiagnostic(),t=this.runtime.mission.getSnapshot(),n=t.phase===`scan`?`diagnosing`:t.phase===`repair`?`repairing`:t.phase===`activation`?`syncing`:t.phase===`complete`?`online`:`offline`;return{displayName:e.name,type:`${e.type.toUpperCase()} LED DISPLAY`,pixelPitch:`${e.pixelPitchMm.toFixed(1)} MM`,signal:n===`online`?`LOCKED · ${e.sourceInput.transport} · PATH B`:`PATH ${e.fiberDistribution.activePath} ${e.fiberDistribution.pathA.linkState.toUpperCase()} · ${e.sourceInput.transport}`,power:n===`online`?`${e.power.branchInput.nominalVac} VAC · ${e.power.psuOutput.nominalVdc.toFixed(1)} VDC`:`${e.power.branchInput.measuredVac.toFixed(1)} VAC · ${e.power.psuOutput.measuredVdc.toFixed(2)} VDC`,processor:n===`online`?`${e.processorOutput.canvasWidth}×${e.processorOutput.canvasHeight} · ${e.processorOutput.frameRateHz.toFixed(2)} HZ LOCKED`:`${e.receiveCardCascade.onlineCabinets}/${e.receiveCardCascade.totalCabinets} CABINETS · CASCADE OPEN`,moduleFailures:n===`online`?0:e.cabinetFaults.length,temperatureC:n===`online`?38.6:e.thermal.measuredC,voltage:n===`online`?e.power.psuOutput.nominalVdc:e.power.psuOutput.measuredVdc,faultConfidence:e.scanConfidence,recommendedRepair:n===`online`?`System restored. Continue synchronized venue monitoring.`:e.recommendedAction,repairProgress:t.phase===`complete`?1:t.interactionProgress,state:n}}buildRadar(){this.radarContacts.length=0;let e=this.runtime.controller.position,t=this.runtime.controller.state.yaw,n=Math.sin(-t),r=Math.cos(-t);for(let t of this.runtime.enemies.getEnemies()){if(!t.enabled)continue;let i=t.position.x-e.x,a=t.position.z-e.z;this.radarContacts.push({id:t.id,x:H.clamp((i*r-a*n)/25,-1,1),y:H.clamp((i*n+a*r)/25,-1,1),kind:`hostile`})}let i=this.objective.x-e.x,a=this.objective.z-e.z;this.radarContacts.push({id:`anc-display`,x:H.clamp((i*r-a*n)/25,-1,1),y:H.clamp((i*n+a*r)/25,-1,1),kind:`objective`})}installWorldCollision(){for(let e of this.world.collision)this.runtime.addObstacle({id:e.id,min:e.bounds.min,max:e.bounds.max,material:e.surface})}installDestructibles(){for(let e of this.destructibles.definitions)this.runtime.addDestructible(e),this.runtime.addObstacle({id:e.id,min:e.bounds.min,max:e.bounds.max,material:`metal`})}installGameplayEvents(){this.runtime.events.on(`mission:spawn-requested`,({enemyIndex:e,archetype:t})=>{let n=jh[e%jh.length].clone();this.runtime.spawnEnemy({id:`hostile-${e+1}`,position:n,archetype:t,yaw:0}),this.presentation.hud.showWaveBanner(1,`Protect the ANC display infrastructure`)}),this.runtime.events.on(`weapon:fired`,({direction:e})=>{this.shotsFired+=1;let t=this.rifle.fire();this.effectDirection.set(e.x,e.y,e.z),this.effectEnd.copy(t.position).addScaledVector(this.effectDirection,62),this.vfx.triggerMuzzle(t.position,t.direction),this.vfx.triggerTracer(t.position,this.effectEnd),this.cameraRight.set(1,0,0).applyQuaternion(this.camera.quaternion),this.vfx.ejectCasing(this.rifle.getEjectionPosition(this.effectPosition),this.cameraRight),this.presentation.audio.playWeaponShot(`rifle`)}),this.runtime.events.on(`weapon:reload-started`,()=>{this.rifle.reload(),this.presentation.audio.reload()}),this.runtime.events.on(`weapon:hit`,({targetId:e,point:t,hitZone:n})=>{this.shotsHit+=1,this.effectPosition.set(t.x,t.y,t.z),this.runtime.controller.getViewDirection(this.effectDirection).multiplyScalar(-1),this.vfx.triggerImpact(this.effectPosition,this.effectDirection,e.startsWith(`hostile`)?`soft`:`metal`,.9),this.vfx.triggerHitConfirm(!0),this.presentation.hud.showHitmarker(n===`head`?`armor`:`body`),this.presentation.audio.hitConfirm(n===`head`?`armor`:`body`),this.actors.flashHit(e)}),this.runtime.events.on(`feedback:vfx`,({cue:e,position:t})=>{this.effectPosition.set(t.x,t.y,t.z),this.runtime.controller.getViewDirection(this.effectDirection).multiplyScalar(-1);let n=e.includes(`metal`)?`metal`:e.includes(`ground`)?`ground`:`concrete`;this.vfx.triggerImpact(this.effectPosition,this.effectDirection,n),this.presentation.audio.impact(n===`metal`?`metal`:`concrete`)}),this.runtime.events.on(`enemy:shot`,({enemyId:e,hit:t})=>{let n=this.runtime.enemies.getById(e),r=n?n.position.x-this.runtime.controller.position.x:0,i=n?n.position.z-this.runtime.controller.position.z:-10,a=Math.hypot(r,i);if(this.presentation.audio.playEnemyShot(H.clamp(r/Math.max(a,1),-1,1),a),t){let e=Math.atan2(r,-i)-this.runtime.controller.state.yaw;this.presentation.hud.showDamageDirection(H.radToDeg(e),.9)}}),this.runtime.events.on(`actor:killed`,({actorId:e})=>{e!==`player`&&(this.presentation.hud.showHitmarker(`kill`),this.presentation.hud.addKillfeed({actor:`FIELD SPECIALIST`,target:e.toUpperCase(),method:`ANC-R7`}),this.presentation.audio.hitConfirm(`kill`))}),this.runtime.events.on(`prop:destroyed`,({propId:e})=>{let t=this.runtime.collision.getCollider(e);t&&(t.enabled=!1)}),this.runtime.events.on(`prop:exploded`,({position:e,radius:t})=>{this.effectPosition.set(e.x,e.y,e.z),this.vfx.triggerExplosion(this.effectPosition,t),this.presentation.audio.explosion()}),this.runtime.events.on(`scanner:started`,()=>{this.presentation.hud.showRestorationStage(`diagnostics`),this.presentation.audio.diagnosticScan()}),this.runtime.events.on(`repair:started`,()=>{this.presentation.hud.showRestorationStage(`repair`),this.presentation.audio.setArenaEnergy(`recovering`)}),this.runtime.events.on(`repair:progress`,({progress:e})=>{if(this.elapsed-this.lastRepairFx<.32)return;this.lastRepairFx=this.elapsed;let t=this.rifle.scannerSocket.getWorldPosition(this.effectPosition),n=this.world.objectiveAnchors.ledRepair.getWorldPosition(this.effectEnd);this.vfx.triggerRepairPulse(t,n),this.presentation.audio.repairPulse(e)}),this.runtime.events.on(`repair:completed`,()=>{this.presentation.hud.showRestorationStage(`power`),this.presentation.audio.ledPowerOn()}),this.runtime.events.on(`display:activation-stage`,({stage:e,stageCount:t})=>{let n=e>=t-1?`sync`:e<=0?`power`:`sync`;this.presentation.hud.showRestorationStage(n),this.presentation.audio.setArenaEnergy(e>=t-1?`powered`:`recovering`)}),this.runtime.events.on(`mission:failed`,({reason:e})=>{this.presentation.hud.showMissionEnd(`failure`,{title:`Recovery interrupted`,detail:e,elapsedSeconds:this.runtime.mission.getSnapshot().elapsedSeconds,repaired:0,accuracy:this.accuracy()})}),this.runtime.events.on(`mission:completed`,({elapsedSeconds:e})=>{this.presentation.hud.showRestorationStage(`live`),this.presentation.audio.setArenaEnergy(`finale`),this.presentation.hud.showStatusBanner(`The venue is live`,`Music, lighting, video and every display zone are synchronized`,`ANC Arena Recovery`),window.setTimeout(()=>{this.completionShown||this.mode.guidedCamera||(this.completionShown=!0,this.presentation.hud.showMissionEnd(`success`,{title:`Arena online`,detail:`ANC makes the entire venue come alive.`,elapsedSeconds:e,repaired:1,accuracy:this.accuracy()}))},4200)})}handleHudIntent(e){e.type===`resume`&&this.setPaused(!1),(e.type===`restart`||e.type===`retry`)&&location.reload(),e.type===`continue`&&(this.presentation.hud.closeModal(),this.presentation.hud.setCinematic(!0),this.rifle.root.visible=!1,this.cinematic.start(),this.paused=!1)}setPaused(e){this.paused=e,this.presentation.setPaused(e),e||this.presentation.hud.closeModal()}resize(){let e=Math.max(1,this.canvas.clientWidth),t=Math.max(1,this.canvas.clientHeight);this.camera.aspect!==e/t&&(this.camera.aspect=e/t,this.camera.updateProjectionMatrix()),this.pipeline.resize(e,t)}hideBootScreen(){requestAnimationFrame(()=>document.querySelector(`#boot-screen`)?.classList.add(`is-hidden`))}configurePerformanceFallback(){if(this.quality.profile.preset!==`performance`)return;this.camera.far=95,this.camera.updateProjectionMatrix(),this.atmosphere.root.visible=!1;for(let e of this.world.root.children){let t=e.userData.visualLayer;(t===`far`||t===`mid`||t===`motion`)&&(e.visible=!1)}let e=0;this.world.root.traverse(t=>{t instanceof As&&(e+=1,e%2==0&&(t.visible=!1))})}accuracy(){return this.shotsFired>0?this.shotsHit/this.shotsFired:1}publishDiagnostics(){let e=this.runtime.getDiagnostics(),t=Jd(this.renderer,this.scene,this.pipeline.postProcessing),n=this.profiler.snapshot;window.__THREE_GAME_DIAGNOSTICS__={frame:e.frame,elapsed:this.elapsed,score:e.mission.objectiveCurrent,targetScore:e.mission.objectiveTarget,complete:e.mission.phase===`complete`,mode:this.mode.mode,phase:e.mission.phase,player:{position:e.player.position,speed:Math.hypot(e.player.velocity.x,e.player.velocity.z),health:e.player.health},weapon:e.weapon,enemies:e.enemies,renderer:{...t.renderer,fps:n.fps,frameMs:n.frameMs,onePercentLowFps:n.onePercentLowFps},scene:t.scene,world:this.world.diagnostics,quality:{preset:this.quality.profile.preset,...t.quality},canvas:{clientWidth:this.canvas.clientWidth,clientHeight:this.canvas.clientHeight,width:this.canvas.width,height:this.canvas.height,dpr:this.renderer.getPixelRatio()}}}},Nh=(e,t,n)=>({label:e,system:t,successState:n}),Ph=[{id:`jerry-cifarelli-jr`,name:`Jerry Cifarelli Jr.`,title:`Chief Executive Officer`,portrait:gd(`assets/team/jerry-cifarelli-jr.webp`),division:`executive-command`,roleLabel:`COMMAND`,specialty:`Venue systems strategy and growth`,profile:`Leads ANC’s core business, multimedia strategy, partner revenue, and long-term growth.`,missions:[{id:`executive-venue-recovery`,title:`Command the Venue Recovery`,location:`ANC Network Command`,briefing:`Lead Technology, Venue Services, and Media through one coordinated recovery before the championship doors open.`,objectives:[Nh(`Set recovery priority`,`EXECUTIVE COMMAND`,`Critical path authorized`),Nh(`Unify all three verticals`,`DIVISION NETWORK`,`Teams synchronized`),Nh(`Authorize the live show`,`MASTER CONTROL`,`Venue released for doors`)]},{id:`executive-growth-route`,title:`The Next Venue Standard`,location:`Toyota Center Upgrade Network`,briefing:`Turn a major display upgrade into a repeatable ANC operating model for the next generation of partner venues.`,objectives:[Nh(`Review the upgrade map`,`MULTIMEDIA STRATEGY`,`Growth route identified`),Nh(`Protect partner outcomes`,`PARTNER NETWORK`,`Engagement secured`),Nh(`Approve the standard`,`EXECUTIVE COMMAND`,`Model ready to scale`)]}]},{id:`jireh-billings`,name:`Jireh Billings`,title:`President, Venue Partnerships`,portrait:gd(`assets/team/jireh-billings.webp`),division:`venue-partnerships`,roleLabel:`VENUE PARTNERSHIPS`,specialty:`Technology integration and partnership growth`,profile:`Leads venue technology initiatives, business development, and integrated partnerships across ANC’s three verticals.`,missions:[{id:`partnership-integration-lock`,title:`Lock the Venue Partnership`,location:`Kia Center Technology Network`,briefing:`Trace the technology upgrade, prove the building-wide impact, and align the complete ANC partnership before showtime.`,objectives:[Nh(`Map the technology upgrade`,`VENUE INTEGRATION`,`Display scope confirmed`),Nh(`Connect the three verticals`,`PARTNERSHIP GRID`,`Joint plan synchronized`),Nh(`Secure the activation route`,`BUSINESS DEVELOPMENT`,`Partnership path approved`)]},{id:`partnership-center-hung`,title:`Center-Hung Expansion`,location:`Toyota Center`,briefing:`Turn the new center-hung display into a complete venue partnership spanning technology, service, and live activation.`,objectives:[Nh(`Validate the display package`,`TECHNOLOGY`,`Upgrade scope verified`),Nh(`Build the service route`,`VENUE SERVICES`,`Support plan online`),Nh(`Unlock partner value`,`INTEGRATED PARTNERSHIP`,`Activation package complete`)]}]},{id:`joseph-occhipinti`,name:`Joseph Occhipinti`,title:`President, Operations & Venue Services`,portrait:gd(`assets/team/joseph-occhipinti.webp`),division:`operations-services`,roleLabel:`VENUE OPERATIONS`,specialty:`Control rooms, field teams, and deployment execution`,profile:`Directs control-room operations, field technicians, project deployment, venue services, and ANC’s software platform.`,missions:[{id:`operations-control-room-blackout`,title:`Control Room Blackout`,location:`Arena Service Network`,briefing:`Deploy the field team, restore the processor and fiber path, and return the building’s display network to live control.`,objectives:[Nh(`Reach display control`,`FIELD OPERATIONS`,`Service route secured`),Nh(`Restore signal and power`,`DISPLAY NETWORK`,`Cabinet cascade verified`),Nh(`Return the venue to live control`,`CONTROL ROOM`,`Show systems operational`)]},{id:`operations-deployment-closeout`,title:`Deployment Closeout`,location:`Rocket Arena`,briefing:`Clear every field blocker, validate the installed technology, and close the project with the venue fully supported.`,objectives:[Nh(`Dispatch the field team`,`VENUE SERVICES`,`Crew assignments live`),Nh(`Validate installed systems`,`PROJECT DEPLOYMENT`,`Hardware accepted`),Nh(`Complete operational handoff`,`ENTERPRISE SERVICES`,`Venue support active`)]}]},{id:`john-obropta`,name:`John Obropta`,title:`President, Media & Sponsorships`,portrait:gd(`assets/team/john-obropta.webp`),division:`media-sponsorships`,roleLabel:`MEDIA & SPONSORSHIPS`,specialty:`TV-visible media and sponsor activation`,profile:`Leads ANC’s media portfolio, home-plate and TV-visible signage, brand consulting, and sponsorship partnerships.`,missions:[{id:`media-inventory-takeover`,title:`Own the Broadcast Moment`,location:`Championship Broadcast Grid`,briefing:`Recover every TV-visible display, protect contracted inventory, and synchronize the sponsor takeover for the live broadcast.`,objectives:[Nh(`Audit visible inventory`,`MEDIA NETWORK`,`Placements accounted for`),Nh(`Restore sponsor rotations`,`SHOW CONTROL`,`Creative synchronized`),Nh(`Verify the broadcast frame`,`TV-VISIBLE SYSTEMS`,`Partner exposure protected`)]},{id:`media-home-plate`,title:`Home Plate Live`,location:`Major League Ballpark`,briefing:`Bring ANC’s legacy home-plate signage network online and deliver a clean, brand-safe broadcast rotation.`,objectives:[Nh(`Recover the sign network`,`HOME PLATE LED`,`Display path online`),Nh(`Validate brand creative`,`BRAND CONSULTING`,`Content approved`),Nh(`Release the media rotation`,`SPONSORSHIP CONTROL`,`Inventory live on air`)]}]},{id:`kirsten-savage`,name:`Kirsten Savage`,title:`Chief of Staff`,portrait:gd(`assets/team/kirsten-savage.webp`),division:`strategy-coordination`,roleLabel:`STRATEGY`,specialty:`Strategic initiatives and partner coordination`,profile:`Leads strategic initiatives and key partner relationships while coordinating directly with ANC’s CEO.`,missions:[{id:`strategy-doors-open`,title:`Doors-Open Command`,location:`Executive Operations Grid`,briefing:`Find the blockers across every team, sequence the executive priorities, and get the venue ready before the public arrives.`,objectives:[Nh(`Surface critical blockers`,`STRATEGY GRID`,`Priority list locked`),Nh(`Coordinate team owners`,`EXECUTIVE OPERATIONS`,`Actions assigned`),Nh(`Clear doors-open status`,`PARTNER COMMAND`,`Venue release approved`)]},{id:`strategy-partner-priority`,title:`Partner Priority One`,location:`Gainbridge Fieldhouse`,briefing:`Protect a key venue relationship by aligning the recovery plan, leadership decisions, and final partner handoff.`,objectives:[Nh(`Confirm partner priority`,`RELATIONSHIP DESK`,`Outcome defined`),Nh(`Sequence the initiative`,`STRATEGIC OPERATIONS`,`Decision path clear`),Nh(`Deliver the handoff`,`EXECUTIVE COMMAND`,`Partner brief complete`)]}]},{id:`steven-myrick`,name:`Steven Myrick`,title:`Chief People Officer`,portrait:gd(`assets/team/steven-myrick.webp`),division:`people-operations`,roleLabel:`PEOPLE OPERATIONS`,specialty:`Field-team readiness and employee experience`,profile:`Cultivates ANC’s company culture and employee experience while supporting people across all three business verticals.`,missions:[{id:`people-field-crew-rally`,title:`Rally the Field Crew`,location:`Venue Personnel Network`,briefing:`Account for every operator, reopen safe service routes, and get the cross-functional field crew ready for the live event.`,objectives:[Nh(`Locate the field teams`,`CREW NETWORK`,`Personnel accounted for`),Nh(`Restore safe service routes`,`EMPLOYEE EXPERIENCE`,`Access paths cleared`),Nh(`Ready all three verticals`,`PEOPLE OPERATIONS`,`Teams show-ready`)]},{id:`people-all-hands`,title:`All Hands Online`,location:`ANC Operations Campus`,briefing:`Restore the internal communications grid and reconnect every team before the final venue recovery push.`,objectives:[Nh(`Recover team communications`,`PEOPLE NETWORK`,`Channels restored`),Nh(`Match skills to incidents`,`CREW DISPATCH`,`Specialists assigned`),Nh(`Launch the final push`,`ALL-HANDS COMMAND`,`Organization aligned`)]}]}];function Fh(e){return Ph.find(t=>t.id===e)}var Ih=`anc-team-select-styles`,Lh=new WeakMap,Rh=String.raw`
:root {
  --ats-navy: #0a0f1c;
  --ats-navy-deep: #040813;
  --ats-blue: #0a52ef;
  --ats-cyan: #00aeef;
  --ats-soft-blue: #4f86ff;
  --ats-white: #f5f8ff;
  --ats-text: #d6e0f0;
  --ats-muted: #8492aa;
  --ats-line: rgba(143, 174, 223, 0.24);
  --ats-line-hot: rgba(0, 174, 239, 0.72);
  --ats-font: Bahnschrift, "Arial Narrow", "Roboto Condensed", "Segoe UI", sans-serif;
  --ats-mono: "IBM Plex Mono", "Roboto Mono", Consolas, monospace;
}

.ats-root,
.ats-root * {
  box-sizing: border-box;
}

.ats-root {
  position: fixed;
  inset: 0;
  z-index: 90;
  overflow: hidden;
  color: var(--ats-white);
  background: var(--ats-navy-deep);
  font-family: var(--ats-font);
  font-synthesis: none;
  -webkit-font-smoothing: antialiased;
  text-rendering: geometricPrecision;
  isolation: isolate;
  opacity: 0;
  transition: opacity 260ms ease-out;
}

.ats-root[hidden] {
  display: none !important;
}

.ats-root[data-visible="true"] {
  opacity: 1;
}

.ats-backdrop,
.ats-backdrop-shade,
.ats-grid,
.ats-grain {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.ats-backdrop {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 24%;
  opacity: .18;
  filter: saturate(.48) contrast(1.15) blur(14px);
  transform: scale(1.08);
  transition: opacity 350ms ease, filter 350ms ease;
}

.ats-backdrop-shade {
  background:
    linear-gradient(90deg, rgba(4,8,19,.95) 0%, rgba(4,8,19,.7) 42%, rgba(4,8,19,.92) 100%),
    linear-gradient(0deg, rgba(4,8,19,.98) 0%, transparent 36%, rgba(4,8,19,.72) 100%),
    radial-gradient(circle at 64% 34%, rgba(10,82,239,.24), transparent 33%);
}

.ats-grid {
  opacity: .22;
  background-image:
    linear-gradient(rgba(79,134,255,.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(79,134,255,.08) 1px, transparent 1px);
  background-size: 58px 58px;
  mask-image: linear-gradient(90deg, transparent, #000 28%, #000 78%, transparent);
}

.ats-grain {
  opacity: .12;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.32'/%3E%3C/svg%3E");
  mix-blend-mode: soft-light;
}

.ats-shell {
  position: relative;
  z-index: 2;
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-rows: auto minmax(0, 1fr) auto;
  padding:
    max(22px, env(safe-area-inset-top))
    max(28px, env(safe-area-inset-right))
    max(22px, env(safe-area-inset-bottom))
    max(28px, env(safe-area-inset-left));
}

.ats-header {
  display: flex;
  min-height: 60px;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
}

.ats-brand {
  display: flex;
  align-items: center;
  gap: 14px;
}

.ats-brand img {
  display: block;
  width: clamp(72px, 7vw, 110px);
  height: auto;
  filter: drop-shadow(0 2px 8px rgba(0,0,0,.55));
}

.ats-brand-rule {
  width: 1px;
  height: 28px;
  background: linear-gradient(transparent, var(--ats-cyan), transparent);
}

.ats-kicker,
.ats-status,
.ats-section-label,
.ats-card-index,
.ats-role,
.ats-detail-label,
.ats-help,
.ats-cta-meta {
  font-family: var(--ats-mono);
  text-transform: uppercase;
}

.ats-kicker {
  color: var(--ats-muted);
  font-size: 9px;
  letter-spacing: .2em;
  line-height: 1.25;
}

.ats-brand-copy strong {
  display: block;
  margin-top: 4px;
  font-size: 13px;
  letter-spacing: .1em;
  line-height: 1;
  text-transform: uppercase;
}

.ats-status {
  display: flex;
  align-items: center;
  gap: 8px;
  padding-top: 5px;
  color: var(--ats-muted);
  font-size: 9px;
  letter-spacing: .14em;
}

.ats-status::before {
  content: "";
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--ats-cyan);
  box-shadow: 0 0 12px rgba(0,174,239,.72);
}

.ats-content {
  display: grid;
  min-height: 0;
  grid-template-columns: minmax(0, 1fr) minmax(300px, 29vw);
  align-items: stretch;
  gap: clamp(22px, 3.2vw, 54px);
  padding: clamp(18px, 3vh, 34px) 0 clamp(16px, 2.4vh, 28px);
}

.ats-roster-region {
  display: grid;
  min-width: 0;
  min-height: 0;
  grid-template-rows: auto minmax(0, 1fr);
}

.ats-roster-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 15px;
  padding-left: 2px;
}

.ats-title {
  margin: 4px 0 0;
  color: var(--ats-white);
  font-size: clamp(28px, 3.4vw, 52px);
  font-weight: 760;
  line-height: .94;
  letter-spacing: .015em;
  text-transform: uppercase;
}

.ats-title span {
  color: var(--ats-cyan);
}

.ats-section-label {
  color: var(--ats-soft-blue);
  font-size: 9px;
  letter-spacing: .18em;
}

.ats-nav {
  display: flex;
  flex: 0 0 auto;
  gap: 7px;
}

.ats-nav-button {
  display: grid;
  width: 48px;
  height: 48px;
  place-items: center;
  border: 1px solid var(--ats-line);
  border-radius: 0;
  color: var(--ats-text);
  background: rgba(10,15,28,.68);
  font: 20px/1 var(--ats-font);
  cursor: pointer;
  transition: color 100ms linear, border-color 100ms linear, background 100ms linear, transform 80ms ease;
}

.ats-nav-button:hover,
.ats-nav-button:focus-visible {
  border-color: var(--ats-cyan);
  color: var(--ats-white);
  background: rgba(0,174,239,.13);
  outline: none;
}

.ats-nav-button:active {
  transform: scale(.94);
}

.ats-cards {
  display: grid;
  min-height: 0;
  grid-auto-columns: minmax(176px, 1fr);
  grid-auto-flow: column;
  gap: clamp(8px, 1vw, 16px);
  overflow-x: auto;
  overflow-y: hidden;
  padding: 5px 4px 12px 2px;
  scrollbar-color: var(--ats-blue) rgba(255,255,255,.06);
  scrollbar-width: thin;
  scroll-padding-inline: 2px;
  scroll-snap-type: x proximity;
  touch-action: pan-x;
}

.ats-cards::-webkit-scrollbar { height: 3px; }
.ats-cards::-webkit-scrollbar-track { background: rgba(255,255,255,.06); }
.ats-cards::-webkit-scrollbar-thumb { background: var(--ats-blue); }

.ats-card {
  position: relative;
  min-width: 0;
  min-height: 270px;
  overflow: hidden;
  border: 1px solid rgba(143,174,223,.19);
  border-radius: 0;
  color: var(--ats-white);
  background: #091224;
  box-shadow: 0 18px 32px rgba(0,0,0,.3);
  cursor: pointer;
  scroll-snap-align: center;
  text-align: left;
  transform: translateY(0);
  transition: border-color 160ms linear, box-shadow 160ms linear, transform 180ms cubic-bezier(.2,.8,.2,1), filter 180ms linear;
  clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 0 100%);
}

.ats-card::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 2;
  border-left: 2px solid transparent;
  background:
    linear-gradient(0deg, rgba(4,8,19,.98) 0%, rgba(4,8,19,.72) 29%, transparent 62%),
    linear-gradient(120deg, rgba(10,82,239,.16), transparent 38%);
  pointer-events: none;
  transition: border-color 160ms linear;
}

.ats-card::after {
  content: "";
  position: absolute;
  top: 0;
  right: 18px;
  left: 0;
  z-index: 3;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--ats-line), transparent);
}

.ats-card:hover {
  border-color: rgba(79,134,255,.68);
  filter: brightness(1.08);
  transform: translateY(-3px);
}

.ats-card:focus-visible {
  border-color: var(--ats-white);
  outline: 2px solid var(--ats-cyan);
  outline-offset: 2px;
}

.ats-card[aria-pressed="true"] {
  border-color: var(--ats-cyan);
  box-shadow: 0 0 0 1px rgba(0,174,239,.22), 0 20px 45px rgba(0,0,0,.46), 0 0 30px rgba(10,82,239,.12);
  transform: translateY(-5px);
}

.ats-card[aria-pressed="true"]::before {
  border-left-color: var(--ats-cyan);
}

.ats-card-portrait {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 22%;
  filter: saturate(.76) contrast(1.06);
  transform: scale(1.015);
  transition: filter 180ms linear, transform 300ms ease;
}

.ats-card:hover .ats-card-portrait,
.ats-card[aria-pressed="true"] .ats-card-portrait {
  filter: saturate(1) contrast(1.04);
  transform: scale(1.045);
}

.ats-card[data-image-error="true"] .ats-card-portrait {
  opacity: .18;
}

.ats-card-index {
  position: absolute;
  top: 12px;
  left: 12px;
  z-index: 4;
  display: grid;
  min-width: 32px;
  height: 22px;
  place-items: center;
  padding: 0 6px;
  border: 1px solid rgba(255,255,255,.34);
  color: var(--ats-text);
  background: rgba(4,8,19,.65);
  font-size: 8px;
  letter-spacing: .12em;
}

.ats-card-copy {
  position: absolute;
  right: 14px;
  bottom: 15px;
  left: 14px;
  z-index: 4;
  min-width: 0;
}

.ats-role {
  display: block;
  overflow: hidden;
  color: var(--ats-cyan);
  font-size: 8px;
  letter-spacing: .15em;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.ats-card-name {
  display: -webkit-box;
  margin-top: 6px;
  overflow: hidden;
  font-size: clamp(19px, 1.75vw, 28px);
  font-weight: 760;
  letter-spacing: .025em;
  line-height: .95;
  text-transform: uppercase;
  white-space: normal;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.ats-card-title {
  display: block;
  margin-top: 6px;
  overflow: hidden;
  color: var(--ats-muted);
  font-family: var(--ats-mono);
  font-size: 8px;
  letter-spacing: .07em;
  text-overflow: ellipsis;
  text-transform: uppercase;
  white-space: nowrap;
}

.ats-empty {
  display: grid;
  min-height: 270px;
  place-items: center;
  border: 1px dashed var(--ats-line);
  color: var(--ats-muted);
  font: 10px/1.5 var(--ats-mono);
  letter-spacing: .16em;
  text-align: center;
  text-transform: uppercase;
}

.ats-detail {
  position: relative;
  display: grid;
  min-height: 0;
  align-content: end;
  padding: clamp(24px, 3vw, 42px);
  border: 1px solid var(--ats-line);
  border-right: 3px solid var(--ats-cyan);
  overflow: hidden;
  background:
    linear-gradient(145deg, rgba(10,82,239,.12), transparent 38%),
    rgba(6,11,24,.86);
  box-shadow: 0 22px 70px rgba(0,0,0,.44);
  clip-path: polygon(20px 0, 100% 0, 100% 100%, 0 100%, 0 20px);
}

.ats-detail::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--ats-soft-blue), var(--ats-cyan));
}

.ats-detail-watermark {
  position: absolute;
  top: 18px;
  right: 18px;
  color: rgba(79,134,255,.13);
  font: 700 clamp(52px, 7vw, 96px)/1 var(--ats-mono);
  letter-spacing: -.08em;
}

.ats-detail-name {
  position: relative;
  margin: 10px 0 0;
  font-size: clamp(34px, 4.2vw, 64px);
  font-weight: 800;
  letter-spacing: .01em;
  line-height: .86;
  text-transform: uppercase;
  overflow-wrap: anywhere;
}

.ats-detail-title {
  position: relative;
  margin-top: 10px;
  color: var(--ats-soft-blue);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: .12em;
  line-height: 1.25;
  text-transform: uppercase;
}

.ats-detail-block {
  position: relative;
  margin-top: clamp(18px, 3vh, 30px);
  padding-top: 13px;
  border-top: 1px solid var(--ats-line);
}

.ats-detail-label {
  color: var(--ats-muted);
  font-size: 8px;
  letter-spacing: .18em;
}

.ats-specialty,
.ats-mission {
  margin-top: 7px;
  color: var(--ats-text);
  font-size: clamp(12px, 1.15vw, 15px);
  line-height: 1.42;
}

.ats-specialty {
  color: var(--ats-white);
  font-weight: 700;
  letter-spacing: .04em;
  text-transform: uppercase;
}

.ats-footer {
  display: grid;
  min-height: 60px;
  grid-template-columns: minmax(0, 1fr) minmax(300px, 29vw);
  align-items: end;
  gap: clamp(22px, 3.2vw, 54px);
  border-top: 1px solid var(--ats-line);
  padding-top: 13px;
}

.ats-help {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 13px;
  color: var(--ats-muted);
  font-size: 8px;
  letter-spacing: .1em;
}

.ats-key {
  display: inline-grid;
  min-width: 27px;
  height: 27px;
  margin-right: 5px;
  padding: 0 6px;
  place-items: center;
  border: 1px solid rgba(255,255,255,.32);
  color: var(--ats-white);
  background: rgba(255,255,255,.035);
  font: 8px/1 var(--ats-mono);
}

.ats-cta {
  position: relative;
  display: grid;
  width: 100%;
  min-height: 58px;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: 14px;
  padding: 0 18px 0 21px;
  border: 1px solid var(--ats-cyan);
  border-radius: 0;
  overflow: hidden;
  color: var(--ats-navy-deep);
  background: linear-gradient(100deg, var(--ats-blue), var(--ats-cyan));
  box-shadow: 0 0 26px rgba(0,174,239,.17);
  font: 800 14px/1 var(--ats-font);
  letter-spacing: .08em;
  text-align: left;
  text-transform: uppercase;
  cursor: pointer;
  transition: filter 120ms linear, transform 80ms ease, box-shadow 120ms linear;
}

.ats-cta::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(110deg, transparent 15%, rgba(255,255,255,.28) 45%, transparent 72%);
  transform: translateX(-110%);
  transition: transform 320ms ease;
}

.ats-cta:hover::before,
.ats-cta:focus-visible::before {
  transform: translateX(110%);
}

.ats-cta:hover,
.ats-cta:focus-visible {
  box-shadow: 0 0 36px rgba(0,174,239,.34);
  filter: brightness(1.1);
  outline: 2px solid var(--ats-white);
  outline-offset: 2px;
}

.ats-cta:active {
  transform: translateY(2px);
}

.ats-cta:disabled {
  border-color: var(--ats-line);
  color: var(--ats-muted);
  background: rgba(255,255,255,.04);
  box-shadow: none;
  cursor: not-allowed;
}

.ats-cta-meta {
  position: relative;
  font-size: 8px;
  font-weight: 700;
  letter-spacing: .12em;
}

.ats-announcer {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}

@media (max-width: 900px) {
  .ats-shell {
    padding-right: max(16px, env(safe-area-inset-right));
    padding-left: max(16px, env(safe-area-inset-left));
  }
  .ats-content {
    grid-template-columns: minmax(0, 1fr) minmax(260px, 34vw);
    gap: 16px;
  }
  .ats-footer {
    grid-template-columns: minmax(0, 1fr) minmax(260px, 34vw);
    gap: 16px;
  }
  .ats-cards { grid-auto-columns: minmax(158px, 1fr); }
  .ats-detail { padding: 22px; }
}

@media (max-width: 680px), (max-height: 580px) {
  .ats-shell {
    grid-template-rows: auto minmax(0, 1fr) auto;
    padding-top: max(14px, env(safe-area-inset-top));
    padding-bottom: max(12px, env(safe-area-inset-bottom));
  }
  .ats-header { min-height: 45px; }
  .ats-brand-copy strong { display: none; }
  .ats-brand-rule { height: 22px; }
  .ats-status { display: none; }
  .ats-content {
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: minmax(260px, 1fr) auto;
    gap: 10px;
    padding: 10px 0;
    overflow-y: auto;
  }
  .ats-roster-heading { margin-bottom: 8px; }
  .ats-title { font-size: clamp(25px, 8vw, 38px); }
  .ats-cards {
    min-height: 260px;
    grid-auto-columns: minmax(156px, 52vw);
    padding-bottom: 6px;
  }
  .ats-card { min-height: 250px; }
  .ats-detail {
    min-height: 220px;
    padding: 18px 20px;
  }
  .ats-detail-name { font-size: clamp(31px, 10vw, 47px); }
  .ats-detail-block { margin-top: 13px; }
  .ats-footer {
    grid-template-columns: minmax(0, 1fr);
    min-height: 58px;
    padding-top: 9px;
  }
  .ats-help { display: none; }
  .ats-cta { min-height: 52px; }
}

@media (max-height: 500px) and (orientation: landscape) {
  .ats-shell { padding-top: 10px; padding-bottom: 10px; }
  .ats-header { min-height: 38px; }
  .ats-brand img { width: 66px; }
  .ats-content {
    grid-template-columns: minmax(0, 1fr) minmax(245px, 34vw);
    grid-template-rows: minmax(0, 1fr);
    padding: 6px 0;
  }
  .ats-roster-heading { margin-bottom: 5px; }
  .ats-title { font-size: 24px; }
  .ats-card { min-height: 190px; }
  .ats-cards { min-height: 190px; }
  .ats-detail { min-height: 0; padding: 15px 18px; }
  .ats-detail-name { font-size: 32px; }
  .ats-detail-block { margin-top: 10px; padding-top: 8px; }
  .ats-mission { max-height: 3em; overflow: hidden; }
  .ats-footer {
    grid-template-columns: minmax(0, 1fr) minmax(245px, 34vw);
    min-height: 48px;
    padding-top: 6px;
  }
  .ats-cta { min-height: 46px; }
}

@media (prefers-reduced-motion: reduce) {
  .ats-root,
  .ats-root *,
  .ats-root *::before,
  .ats-root *::after {
    scroll-behavior: auto !important;
    transition-duration: 1ms !important;
    animation-duration: 1ms !important;
  }
}
`;function zh(e=document){let t=Lh.get(e)??0;Lh.set(e,t+1);let n=e.getElementById(Ih);n||(n=e.createElement(`style`),n.id=Ih,n.textContent=Rh,e.head.append(n));let r=!1;return()=>{if(r)return;r=!0;let t=Math.max(0,(Lh.get(e)??1)-1);t===0?(Lh.delete(e),e.getElementById(Ih)?.remove()):Lh.set(e,t)}}var Bh=class{element;documentRef;onSelect;elements;cleanup=[];roster=[];selectedId=null;removeStyles=null;previousFocus=null;hideTimer=0;disposed=!1;intendedVisible;constructor(e){this.documentRef=e.document??e.mount?.ownerDocument??document,this.onSelect=e.onSelect,this.intendedVisible=e.visible??!0,this.element=this.documentRef.createElement(`div`),this.element.className=`ats-root`,this.element.hidden=!0,this.element.dataset.visible=`false`,this.element.tabIndex=-1,this.element.setAttribute(`role`,`dialog`),this.element.setAttribute(`aria-modal`,`true`),this.element.setAttribute(`aria-labelledby`,`ats-heading`),this.element.setAttribute(`aria-label`,e.ariaLabel??`ANC team character selection`),this.element.innerHTML=Hh(),this.elements=Vh(this.element),this.bindEvents(),this.setRoster(e.roster,e.initialId),e.mount&&this.mount(e.mount)}mount(e=this.documentRef.body){if(this.assertUsable(),e.ownerDocument!==this.documentRef)throw Error(`TeamSelect must be mounted in the document used to construct it.`);this.element.parentElement!==e&&e.append(this.element),this.removeStyles||=zh(this.documentRef),this.intendedVisible&&this.show()}show(){this.assertUsable(),this.intendedVisible=!0,this.element.isConnected||this.mount(this.documentRef.body),this.hideTimer&&=(this.documentRef.defaultView?.clearTimeout(this.hideTimer),0),this.previousFocus=this.documentRef.activeElement instanceof HTMLElement?this.documentRef.activeElement:null,this.element.hidden=!1,this.documentRef.defaultView?.requestAnimationFrame(()=>{this.disposed||(this.element.dataset.visible=`true`,this.focusSelectedCard())})}hide(){this.disposed||(this.intendedVisible=!1,this.element.dataset.visible=`false`,this.hideTimer&&this.documentRef.defaultView?.clearTimeout(this.hideTimer),this.hideTimer=this.documentRef.defaultView?.setTimeout(()=>{this.hideTimer=0,this.intendedVisible||(this.element.hidden=!0)},280)??0,this.previousFocus?.isConnected&&this.previousFocus.focus({preventScroll:!0}),this.previousFocus=null)}isVisible(){return!this.element.hidden&&this.element.dataset.visible===`true`}setRoster(e,t){this.assertUsable(),this.roster=Uh(e).map(e=>({...e}));let n=t??this.selectedId;this.selectedId=n&&this.roster.some(e=>e.id===n)?n:this.roster[0]?.id??null,this.renderRoster(),this.renderSelection()}select(e,t=!1){return this.assertUsable(),this.roster.some(t=>t.id===e)?(this.selectedId=e,this.renderSelection(),t&&this.focusSelectedCard(),!0):!1}selectNext(e=!0){this.moveSelection(1,e)}selectPrevious(e=!0){this.moveSelection(-1,e)}getSelected(){let e=this.selectedMember();return e?{...e}:null}deploy(){this.assertUsable();let e=this.selectedMember();return e?(this.elements.deploy.dataset.state=`confirmed`,this.announce(`Deploying as ${e.name}.`),this.onSelect({...e}),this.documentRef.defaultView?.setTimeout(()=>{this.disposed||delete this.elements.deploy.dataset.state},240),!0):!1}dispose(){if(!this.disposed){this.disposed=!0,this.hideTimer&&this.documentRef.defaultView?.clearTimeout(this.hideTimer);for(let e of this.cleanup)e();this.cleanup.length=0,this.element.remove(),this.removeStyles?.(),this.removeStyles=null,this.roster=[],this.selectedId=null}}renderRoster(){if(this.elements.cards.replaceChildren(),this.elements.count.textContent=`${this.roster.length.toString().padStart(2,`0`)} OPERATORS ONLINE`,this.roster.length===0){let e=this.documentRef.createElement(`div`);e.className=`ats-empty`,e.textContent=`No field operators are currently available.`,this.elements.cards.append(e);return}let e=this.documentRef.createDocumentFragment();this.roster.forEach((t,n)=>{let r=this.documentRef.createElement(`button`);r.type=`button`,r.className=`ats-card`,r.dataset.memberId=t.id,r.setAttribute(`aria-pressed`,String(t.id===this.selectedId)),r.setAttribute(`aria-label`,`${t.name}, ${t.title}, ${t.roleLabel}`),r.tabIndex=t.id===this.selectedId?0:-1;let i=this.documentRef.createElement(`img`);i.className=`ats-card-portrait`,i.src=t.portrait,i.alt=``,i.decoding=`async`,i.draggable=!1,i.addEventListener(`error`,()=>{r.dataset.imageError=`true`},{once:!0});let a=this.documentRef.createElement(`span`);a.className=`ats-card-index`,a.textContent=String(n+1).padStart(2,`0`);let o=this.documentRef.createElement(`span`);o.className=`ats-card-copy`;let s=this.documentRef.createElement(`span`);s.className=`ats-role`,s.textContent=t.roleLabel;let c=this.documentRef.createElement(`strong`);c.className=`ats-card-name`,c.textContent=t.name;let l=this.documentRef.createElement(`span`);l.className=`ats-card-title`,l.textContent=t.title,o.append(s,c,l),r.append(i,a,o),r.addEventListener(`focus`,()=>{this.selectedId!==t.id&&this.select(t.id)}),e.append(r)}),this.elements.cards.append(e)}renderSelection(){let e=this.selectedMember(),t=this.elements.cards.querySelectorAll(`.ats-card`);for(let n of t){let t=n.dataset.memberId===e?.id;n.setAttribute(`aria-pressed`,String(t)),n.tabIndex=t?0:-1}if(!e){this.elements.backdrop.removeAttribute(`src`),this.elements.backdrop.alt=``,this.elements.detailIndex.textContent=`--`,this.elements.detailRole.textContent=`ROSTER UNAVAILABLE`,this.elements.detailName.textContent=`NO OPERATOR`,this.elements.detailTitle.textContent=`Awaiting field assignment`,this.elements.detailSpecialty.textContent=`No specialty data`,this.elements.detailMission.textContent=`Mission preview is unavailable until an operator joins the roster.`,this.elements.deployLabel.textContent=`DEPLOYMENT UNAVAILABLE`,this.elements.deploy.disabled=!0;return}let n=this.roster.findIndex(t=>t.id===e.id);this.elements.backdrop.src=e.portrait,this.elements.backdrop.alt=``,this.elements.detailIndex.textContent=String(n+1).padStart(2,`0`),this.elements.detailRole.textContent=e.roleLabel,this.elements.detailName.textContent=e.name,this.elements.detailTitle.textContent=e.title,this.elements.detailSpecialty.textContent=e.specialty,this.elements.detailMission.textContent=e.missionPreview,this.elements.deployLabel.textContent=`DEPLOY AS ${Wh(e.name).toUpperCase()}`,this.elements.deploy.disabled=!1,this.announce(`${e.name} selected. ${e.roleLabel}. ${e.specialty}`),this.cardForId(e.id)?.scrollIntoView({behavior:Gh(this.documentRef)?`auto`:`smooth`,block:`nearest`,inline:`center`})}bindEvents(){let e=e=>{let t=e.target,n=t.closest(`.ats-card[data-member-id]`);if(n?.dataset.memberId){this.select(n.dataset.memberId,!0);return}let r=t.closest(`[data-action]`)?.dataset.action;r===`previous`&&this.selectPrevious(),r===`next`&&this.selectNext(),r===`deploy`&&this.deploy()},t=e=>{if(e.key===`ArrowLeft`||e.key===`ArrowUp`){e.preventDefault(),this.selectPrevious();return}if(e.key===`ArrowRight`||e.key===`ArrowDown`){e.preventDefault(),this.selectNext();return}if(e.key===`Home`&&this.roster[0]){e.preventDefault(),this.select(this.roster[0].id,!0);return}if(e.key===`End`&&this.roster.at(-1)){e.preventDefault(),this.select(this.roster.at(-1).id,!0);return}e.key===`Tab`&&this.trapFocus(e)};this.element.addEventListener(`click`,e),this.element.addEventListener(`keydown`,t),this.cleanup.push(()=>this.element.removeEventListener(`click`,e),()=>this.element.removeEventListener(`keydown`,t))}moveSelection(e,t){if(this.roster.length===0)return;let n=(Math.max(0,this.roster.findIndex(e=>e.id===this.selectedId))+e+this.roster.length)%this.roster.length;this.select(this.roster[n].id,t)}focusSelectedCard(){this.isVisible()&&((this.selectedId?this.cardForId(this.selectedId):null)??this.elements.deploy).focus({preventScroll:!0})}cardForId(e){return[...this.elements.cards.querySelectorAll(`.ats-card`)].find(t=>t.dataset.memberId===e)??null}selectedMember(){return this.roster.find(e=>e.id===this.selectedId)??null}trapFocus(e){let t=[...this.element.querySelectorAll(`button:not(:disabled), [tabindex="0"]`)].filter(e=>e.getClientRects().length>0);if(t.length===0)return;let n=t[0],r=t[t.length-1];e.shiftKey&&this.documentRef.activeElement===n?(e.preventDefault(),r.focus()):!e.shiftKey&&this.documentRef.activeElement===r&&(e.preventDefault(),n.focus())}announce(e){this.elements.announcer.textContent=``,this.documentRef.defaultView?.setTimeout(()=>{this.disposed||(this.elements.announcer.textContent=e)},20)}assertUsable(){if(this.disposed)throw Error(`TeamSelect has already been disposed.`)}};function Vh(e){let t=t=>{let n=e.querySelector(t);if(!n)throw Error(`TeamSelect template is missing ${t}`);return n};return{backdrop:t(`[data-team-select="backdrop"]`),cards:t(`[data-team-select="cards"]`),count:t(`[data-team-select="count"]`),detailIndex:t(`[data-team-select="detail-index"]`),detailRole:t(`[data-team-select="detail-role"]`),detailName:t(`[data-team-select="detail-name"]`),detailTitle:t(`[data-team-select="detail-title"]`),detailSpecialty:t(`[data-team-select="detail-specialty"]`),detailMission:t(`[data-team-select="detail-mission"]`),deploy:t(`[data-action="deploy"]`),deployLabel:t(`[data-team-select="deploy-label"]`),announcer:t(`[data-team-select="announcer"]`)}}function Hh(){return`
    <img class="ats-backdrop" data-team-select="backdrop" alt="">
    <div class="ats-backdrop-shade"></div><div class="ats-grid"></div><div class="ats-grain"></div>
    <div class="ats-shell">
      <header class="ats-header">
        <div class="ats-brand"><img src="${gd(`assets/brand/anc-white.png`)}" alt="ANC"><i class="ats-brand-rule"></i><div class="ats-brand-copy"><span class="ats-kicker">Arena Recovery Command</span><strong>Field Operations Division</strong></div></div>
        <div class="ats-status" data-team-select="count">00 OPERATORS ONLINE</div>
      </header>
      <main class="ats-content">
        <section class="ats-roster-region" aria-labelledby="ats-heading">
          <div class="ats-roster-heading"><div><div class="ats-section-label">Mission roster // Select operator</div><h1 class="ats-title" id="ats-heading">Choose your <span>team</span></h1></div><nav class="ats-nav" aria-label="Roster navigation"><button class="ats-nav-button" type="button" data-action="previous" aria-label="Previous operator">‹</button><button class="ats-nav-button" type="button" data-action="next" aria-label="Next operator">›</button></nav></div>
          <div class="ats-cards" data-team-select="cards" role="group" aria-label="Available operators"></div>
        </section>
        <aside class="ats-detail" aria-label="Selected operator details">
          <span class="ats-detail-watermark" data-team-select="detail-index">--</span>
          <div class="ats-detail-label" data-team-select="detail-role">ROSTER UNAVAILABLE</div>
          <h2 class="ats-detail-name" data-team-select="detail-name">NO OPERATOR</h2>
          <div class="ats-detail-title" data-team-select="detail-title">Awaiting field assignment</div>
          <div class="ats-detail-block"><div class="ats-detail-label">Operational specialty</div><div class="ats-specialty" data-team-select="detail-specialty">No specialty data</div></div>
          <div class="ats-detail-block"><div class="ats-detail-label">Mission preview</div><div class="ats-mission" data-team-select="detail-mission">Mission preview unavailable.</div></div>
        </aside>
      </main>
      <footer class="ats-footer">
        <div class="ats-help"><span><kbd class="ats-key">← →</kbd> Navigate</span><span><kbd class="ats-key">TAB</kbd> Focus</span><span><kbd class="ats-key">ENTER</kbd> Confirm deployment</span></div>
        <button class="ats-cta" type="button" data-action="deploy" disabled><span data-team-select="deploy-label">DEPLOYMENT UNAVAILABLE</span><span class="ats-cta-meta">Ready // ↵</span></button>
      </footer>
    </div>
    <div class="ats-announcer" data-team-select="announcer" aria-live="polite"></div>
  `}function Uh(e){let t=new Set;for(let n of e){if(!n.id.trim())throw Error(`Every TeamSelect roster member requires a non-empty id.`);if(t.has(n.id))throw Error(`Duplicate TeamSelect roster id: ${n.id}`);if(t.add(n.id),!n.name.trim())throw Error(`TeamSelect roster member ${n.id} requires a name.`);if(!n.portrait.trim())throw Error(`TeamSelect roster member ${n.id} requires a portrait URL.`)}return e}function Wh(e){return e.trim().split(/\s+/)[0]||`OPERATOR`}function Gh(e){return e.defaultView?.matchMedia(`(prefers-reduced-motion: reduce)`).matches??!1}var Kh=document.querySelector(`#game-canvas`);if(!Kh)throw Error(`Missing #game-canvas element.`);var qh=new URLSearchParams(location.search).get(`mode`);qh===`control-room`||qh===`venue-twin`?Jh(Kh):Yh(Kh);function Jh(e){document.body.classList.remove(`is-pre-operation`),document.body.classList.add(`is-control-room`),document.title=`ANC // VENUE TWIN`,e.setAttribute(`aria-label`,`ANC Venue Twin live three-dimensional arena view`),document.querySelector(`#anc-briefing`)?.remove(),document.querySelector(`#touch-controls`)?.remove();let t=new km(e,document.querySelector(`#game-ui`)??document.body);return t.start(),()=>t.dispose()}function Yh(e){let t=new Mh(e);t.start();let n=document.querySelector(`#anc-briefing`),r=document.querySelector(`#enter-operation`),i=null,a=new Bh({roster:Ph.map(e=>({id:e.id,name:e.name,title:e.title,portrait:e.portrait,roleLabel:e.roleLabel,specialty:e.specialty,missionPreview:e.missions[0].briefing})),mount:document.body,initialId:new URLSearchParams(location.search).get(`operator`)??Ph[0].id,onSelect:e=>{let t=Fh(e.id);t&&(i=t,Xh(t),a.hide(),window.setTimeout(()=>n?.classList.remove(`is-awaiting-operator`),240))}}),o=()=>{let e=i?.missions[0];t.beginOperation(i&&e?{id:i.id,name:i.name,title:i.title,roleLabel:i.roleLabel,specialty:i.specialty,missionTitle:e.title}:void 0),n?.classList.add(`is-closing`),window.setTimeout(()=>document.body.classList.remove(`is-pre-operation`),520),window.setTimeout(()=>n?.remove(),760)};return r?.addEventListener(`click`,o),()=>{r?.removeEventListener(`click`,o),a.dispose(),t.dispose()}}function Xh(e){let t=e.missions[0],n=document.querySelector(`#briefing-division`),r=document.querySelector(`#briefing-incident`),i=document.querySelector(`#briefing-kicker`),a=document.querySelector(`#briefing-copy`),o=document.querySelector(`#enter-operation-label`),s=document.querySelector(`#briefing-contract`),c=document.querySelector(`.th-brand-lockup span`),l=document.querySelectorAll(`#briefing-objectives li`);n&&(n.textContent=e.roleLabel),r&&(r.textContent=`CONTRACT 01`),i&&(i.replaceChildren(),i.append(document.createElement(`i`),document.createTextNode(` ${t.location.toUpperCase()} // LIVE RECOVERY`))),a&&(a.textContent=`${e.name} // ${e.title}. ${t.briefing}`),o&&(o.textContent=`DEPLOY AS ${e.name.split(/\s+/)[0].toUpperCase()}`),s&&(s.textContent=t.title.toUpperCase()),c&&(c.textContent=`${e.name} // ${e.roleLabel}`),l.forEach((e,n)=>{let r=t.objectives[n];if(!r)return;e.classList.toggle(`is-active`,n===0);let i=e.querySelector(`span`),a=e.querySelector(`strong`);i&&(i.textContent=r.system),a&&(a.textContent=r.label)})}