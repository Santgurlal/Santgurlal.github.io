(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,99739,e=>{var t=e.i(43476),a=e.i(71645),o=e.i(59136),r=e.i(45545),i=e.i(69293);let n="/living/waterfar/",l=e=>new Promise((t,a)=>{let o=new Image;o.onload=()=>t(o),o.onerror=a,o.src=e});e.s(["default",0,function(){let e=(0,a.useRef)(null);return(0,a.useEffect)(()=>{let t=e.current;if(!t||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let a=0,o=!1,c=!0,s=()=>{};return(async()=>{let[e,f]=await Promise.all([l(n+"base.webp"),l(n+"detail.webp"),Promise.resolve(null)]);if(o)return;let m=()=>{let e=document.createElement("canvas");return e.width=380,e.height=157,[e,e.getContext("2d",{willReadFrequently:!0})]},[,p]=m();p.drawImage(e,0,0);let d=p.getImageData(0,0,380,157).data,[,u]=m();u.drawImage(f,0,0);let h=u.getImageData(0,0,380,157).data,[v,g]=m(),w=g.createImageData(380,157);for(let e=0;e<d.length;e+=4)w.data[e]=d[e],w.data[e+1]=d[e+1],w.data[e+2]=d[e+2],w.data[e+3]=255;g.putImageData(w,0,0);let[,x]=m();x.filter="blur(20px)",x.drawImage(v,0,0),x.filter="none";let T=x.getImageData(0,0,380,157),E=(e,t,a)=>{let o=Math.min(1,Math.max(0,(a-e)/(t-e)));return o*o*(3-2*o)};for(let e=0;e<d.length;e+=4){let t=915+(e/4/380|0)+.5;T.data[e+3]=d[e+3]*(1-E(r.r-r.i,r.r+r.i,t))}let[R,b]=m(),P=b.createImageData(380,157);for(let e=0;e<d.length;e+=4){let t=(.3*(d[e]+(h[e]-128)*2)+.55*(d[e+1]+(h[e+1]-128)*2)+.15*(d[e+2]+(h[e+2]-128)*2))/255;P.data[e]=Math.max(0,Math.min(255,(t-.45)/.3*255)),P.data[e+1]=d[e+3],P.data[e+2]=Math.max(0,Math.min(255,(t-.62)/.2*255)),P.data[e+3]=255}b.putImageData(P,0,0);let[,A]=m();A.filter="blur(4px)",A.drawImage(R,0,0),A.filter="none";let _=A.getImageData(0,0,380,157),[,I]=m();I.putImageData(P,0,0);let S=I.getImageData(0,0,380,157).data;for(let e=0;e<d.length;e+=4){let t=_.data[e+1]/255;_.data[e+1]=Math.max(0,Math.min(255,(t-.5)*510)),_.data[e+3]=S[e+2],_.data[e+2]=0}let D=t.getContext("webgl",{premultipliedAlpha:!0,alpha:!0,antialias:!1});if(!D)return;let y=(e,t)=>{let a=D.createShader(e);if(D.shaderSource(a,t),D.compileShader(a),!D.getShaderParameter(a,D.COMPILE_STATUS))throw Error(D.getShaderInfoLog(a)||"sh");return a},L=D.createProgram();D.attachShader(L,y(D.VERTEX_SHADER,i.I)),D.attachShader(L,y(D.FRAGMENT_SHADER,i.A)),D.linkProgram(L),D.useProgram(L);let U=D.createBuffer();D.bindBuffer(D.ARRAY_BUFFER,U),D.bufferData(D.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),D.STATIC_DRAW);let M=D.getAttribLocation(L,"a");D.enableVertexAttribArray(M),D.vertexAttribPointer(M,2,D.FLOAT,!1,0,0);let F=(e,t,a)=>{let o=D.createTexture();D.activeTexture(D.TEXTURE0+e),D.bindTexture(D.TEXTURE_2D,o),D.texParameteri(D.TEXTURE_2D,D.TEXTURE_MIN_FILTER,D.LINEAR),D.texParameteri(D.TEXTURE_2D,D.TEXTURE_MAG_FILTER,D.LINEAR),D.texParameteri(D.TEXTURE_2D,D.TEXTURE_WRAP_S,D.CLAMP_TO_EDGE),D.texParameteri(D.TEXTURE_2D,D.TEXTURE_WRAP_T,D.CLAMP_TO_EDGE),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),D.texImage2D(D.TEXTURE_2D,0,D.RGBA,D.RGBA,D.UNSIGNED_BYTE,t),D.uniform1i(D.getUniformLocation(L,a),e)};F(0,T,"uG"),F(1,_,"uM"),D.uniform4f(D.getUniformLocation(L,"uBox"),1090,915,380,157),D.uniform2f(D.getUniformLocation(L,"uO"),r.R[0],r.R[1]),D.uniform4f(D.getUniformLocation(L,"uS"),r.H,r.q,r.C,600),D.uniform2f(D.getUniformLocation(L,"uSeam"),-1,0),D.uniform2f(D.getUniformLocation(L,"uK"),1.6,1.3);let k=D.getUniformLocation(L,"uT"),q=()=>{let e=t.getBoundingClientRect(),a=Math.min(window.devicePixelRatio||1,1.5),o=Math.max(1,Math.round(e.width*a)),r=Math.max(1,Math.round(e.height*a));(t.width!==o||t.height!==r)&&(t.width=o,t.height=r,D.viewport(0,0,o,r))};q();let B=performance.now(),C=e=>{if(a=0,o||!c||document.hidden)return;a=requestAnimationFrame(C);let r=performance.now();q();let i=window.__lvT;D.uniform1f(k,(i??(e-B)/1e3)%3600),D.drawArrays(D.TRIANGLES,0,3),t.dataset.ms=(performance.now()-r).toFixed(2)};a=requestAnimationFrame(C);let G=()=>{a||!c||document.hidden||(a=requestAnimationFrame(C))},X=new IntersectionObserver(([e])=>{c=e.isIntersecting,G()});X.observe(t),document.addEventListener("visibilitychange",G),s=()=>{X.disconnect(),document.removeEventListener("visibilitychange",G)}})().catch(e=>console.error("waterfar",e)),()=>{o=!0,cancelAnimationFrame(a),s()}},[]),(0,t.jsx)("canvas",{ref:e,className:"lv-waterfar",style:(0,o.f)(1090,915,380,157),"aria-hidden":!0})}])},59136,e=>{let t=(e,t)=>`${(e/t*100).toFixed(4)}%`;e.s(["f",0,function(e,a,o,r){let i={position:"absolute",left:t(e,2752),top:t(a,1536)};return void 0!==o&&(i.width=t(o,2752)),void 0!==r&&(i.height=t(r,1536)),i}])},45545,69293,e=>{e.s(["R",0,[1290,935],"C",0,.4,"i",0,22,"r",0,1050,"H",0,8,"q",0,.075],45545);let t=`precision highp float;
varying vec2 v;
uniform sampler2D uG,uM,uF,uR;
uniform float uT;
uniform vec4 uBox,uS;
uniform vec2 uO,uSeam,uK;
vec2 h22(vec2 p){p=vec2(dot(p,vec2(127.1,311.7)),dot(p,vec2(269.5,183.3)));return fract(sin(p)*43758.5453)*2.-1.;}
float h21(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+45.32);return fract(p.x*p.y);}
float gn(vec2 p){vec2 i=floor(p),f=fract(p);vec2 u=f*f*f*(f*(f*6.-15.)+10.);   // gradient noise, -1..1-ish
  return mix(mix(dot(h22(i),f),dot(h22(i+vec2(1,0)),f-vec2(1,0)),u.x),
             mix(dot(h22(i+vec2(0,1)),f-vec2(0,1)),dot(h22(i+vec2(1,1)),f-vec2(1,1)),u.x),u.y);}
const mat2 RT=mat2(.8,.6,-.6,.8);
float fbm(vec2 p){return gn(p)*.6+gn(RT*p*2.07+3.1)*.3+gn(RT*RT*p*4.13+7.7)*.15;}
// domain-warped water pattern, 0..1
float wpat(vec2 q,float s){vec2 w=vec2(gn(q*.45+s),gn(q*.45+s+5.2));return fbm(q+w*1.1)*.5+.5;}
void main(){
  vec2 uv=v; vec2 p=uBox.xy+uv*uBox.zw;
  vec4 g=texture2D(uG,uv);
  float seam=uSeam.x<0.?1.:smoothstep(uSeam.x-uSeam.y,uSeam.x+uSeam.y,p.y);
  float a=g.a*seam;
  vec4 rk=texture2D(uR,uv);
  float wet=rk.r*seam*(1.-g.a);
  if(a<.004&&wet<.004){gl_FragColor=vec4(0.);return;}
  float persp=clamp(.45+(p.y-uO.y)/420.,.3,2.)*uK.x;
  float sc=1./(15.*persp);                          // ~15 px features near the bridge, larger toward the viewer
  vec2 q=p*sc;
  const float P=1.6;
  float n=gn(p*.008)*.5+.5;
  float t1=fract(uT/P+n), t2=fract(uT/P+n+.5);
  float w=abs(1.-2.*t1);
  vec4 res=vec4(0.);
  if(a>=.004){
    vec4 m=texture2D(uM,uv);
    float rapid=m.r, dist=m.g, sw=m.b, core=m.a;
    float inner=smoothstep(.04,.12,dist);                 // ~1-3 px off rocks: no foam rim / halo
    vec2 d=texture2D(uF,uv).rg*2.-1.;
    float spd=max(0.,uS.x+uS.y*(p.y-uO.y))*(uS.z+(1.-uS.z)*rapid)*uK.y;
    vec2 F=d*spd*sc;
    float c1=floor(uT/P+n), c2=floor(uT/P+n+.5);
    vec2 a1=q-F*t1*P+vec2(3.1,1.7)*c1, a2=q-F*t2*P+vec2(5.3,2.9)*c2+17.;
    float rip=mix(wpat(a1,0.),wpat(a2,0.),w);
    float fn=mix(wpat(a1*1.9+4.,9.),wpat(a2*1.9+4.,9.),w);
    vec3 gc=g.rgb; float L=dot(gc,vec3(.3,.55,.15));
    vec3 deep=vec3(.035,.14,.24), mid=vec3(.06,.42,.55), glow=vec3(.32,.86,.92);
    vec3 pal=mix(mix(deep,mid,smoothstep(.1,.38,L)),glow,smoothstep(.38,.75,L));
    vec3 col=mix(gc,pal,.45);
    col*=1.-.28*(1.-rapid)*smoothstep(.4,1.,dist);          // deep pools darker
    float calm=1.-rapid;
    float rr=(rip-.5)*(1.-.55*calm);                          // pools calm
    col+=vec3(.10,.30,.32)*smoothstep(.0,.25,rr)*(.45+.55*rapid)-col*.25*smoothstep(.0,-.25,rr);
    // white water: soft-thresholded warped noise, brightest on the painted white water, painterly rim
    float wv=(fn-.5)*1.6+rapid*.55+core*.4-.62;
    float foam=smoothstep(-.12,.16,wv);
    float rim=smoothstep(-.2,-.06,wv)*(1.-smoothstep(-.06,.06,wv));
    float edge=1.-smoothstep(.0,.18+.1*rapid,dist);
    float ef=smoothstep(.3,.75,fn+edge*.55-.2)*edge;
    float swv=sw*smoothstep(.45,.85,fn*.8+.2*sin(dot(p,d)*.35/persp-uT*.5));
    foam=clamp(max(foam,max(ef*.4,swv*.8)),0.,1.)*inner;
    vec3 fc=mix(vec3(.6,.85,.92),vec3(.93,.99,1.),smoothstep(.25,.9,foam))*(.82+.28*rip);
    col=mix(col,fc,foam*.92);
    col+=vec3(.2,.45,.5)*rim*.2*(1.-foam)*inner;
    col*=.82+.18*inner;                                     // darker waterline against rock
    a*=smoothstep(.0,.03,dist);
    vec2 gq=a1*1.3;
    float sp=h21(floor(gq)+floor(uT*2.+h21(floor(gq))*9.));
    float gl=step(.993,sp)*smoothstep(.45,.0,length(fract(gq)-.5))*(.35+.65*smoothstep(.3,.8,L+rip*.3));
    col+=vec3(.8,.93,1.)*gl*.35*(1.-foam*.6);
    res=vec4(clamp(col,0.,1.)*a,a);
  }
  if(wet>=.004){
    // thin film sliding down the rock's slope; lapping foam at the waterline; moist twinkling specular
    vec2 sd=rk.gb*2.-1.;
    float fs=(10.+18.*rk.r)*sc;                              // film speed, faster on the front boulder
    vec2 b1=q*1.6-sd*fs*t1*P+vec2(1.3,7.1)*floor(uT/P+n), b2=q*1.6-sd*fs*t2*P+vec2(4.1,2.3)*floor(uT/P+n+.5)+11.;
    float film=mix(wpat(b1,3.),wpat(b2,3.),w);
    float sheen=smoothstep(.55,.85,film)*wet;
    float lap=rk.a*smoothstep(.4,.75,film+.25*sin(uT*1.7+p.x*.05))*wet;
    float sp=h21(floor(b1*2.2)+floor(uT*1.5+h21(floor(b1*2.2))*7.));
    float tw=step(.9875,sp)*smoothstep(.45,.0,length(fract(b1*2.2)-.5))*wet;
    vec3 add=vec3(.35,.65,.75)*sheen*.18+vec3(.85,.96,1.)*lap*.16+vec3(.9,.97,1.)*tw*.4;
    float dark=.12*wet*(1.-sheen);                           // wet rock is slightly darker
    // front-centre boulder: thin sheet of water pouring over its lip, white fringe where it breaks
    float front=smoothstep(.6,.85,rk.r);
    float sheet=pow(rk.a,.6)*front;
    if(sheet>.002){
      vec2 c1=q*vec2(2.6,1.)-vec2(0.,sc*26.*t1*P)+vec2(2.,5.)*floor(uT/P+n), c2=q*vec2(2.6,1.)-vec2(0.,sc*26.*t2*P)+vec2(7.,1.)*floor(uT/P+n+.5)+13.;
      float st=mix(wpat(c1,6.),wpat(c2,6.),w);
      vec3 sc_=mix(vec3(.12,.45,.55),vec3(.55,.9,.95),smoothstep(.45,.8,st));
      float body=smoothstep(.25,.6,rk.a)*(.55+.3*st);
      float fringe=smoothstep(.12,.3,rk.a)*(1.-smoothstep(.3,.5,rk.a))*smoothstep(.35,.65,st+.15);
      vec3 sh=mix(sc_,vec3(.92,.98,1.),fringe);
      float sa=clamp((body*.55+fringe*.2)*front,0.,.6);
      res=vec4(res.rgb*(1.-sa)+sh*sa,res.a*(1.-sa)+sa);
    }
    res+=vec4(add,dark);
  }
  gl_FragColor=res;
}`;e.s(["A",0,t,"I",0,"attribute vec2 a;varying vec2 v;void main(){v=vec2(a.x*.5+.5,.5-a.y*.5);gl_Position=vec4(a,0.,1.);}"],69293)}])})();