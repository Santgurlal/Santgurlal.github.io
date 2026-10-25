(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,64288,e=>{var t=e.i(43476),o=e.i(71645),a=e.i(45545),r=e.i(69293);let i=(e,t)=>`${(e/t*100).toFixed(4)}%`;e.s(["default",0,function(){let e=(0,o.useRef)(null);return(0,o.useEffect)(()=>{let t=e.current;if(!t||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let o=t.getContext("webgl",{premultipliedAlpha:!0,alpha:!0,antialias:!1});if(!o)return;let i=!1,c=0,n=!0,s=(e,t)=>{let a=o.createShader(e);return o.shaderSource(a,t),o.compileShader(a),o.getShaderParameter(a,o.COMPILE_STATUS)||console.error(o.getShaderInfoLog(a)),a},f=o.createProgram();o.attachShader(f,s(o.VERTEX_SHADER,r.I)),o.attachShader(f,s(o.FRAGMENT_SHADER,r.A)),o.bindAttribLocation(f,0,"a"),o.linkProgram(f),o.useProgram(f);let l=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,l),o.bufferData(o.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),o.STATIC_DRAW),o.enableVertexAttribArray(0),o.vertexAttribPointer(0,2,o.FLOAT,!1,0,0),o.uniform4f(o.getUniformLocation(f,"uBox"),536,938,1754,598),o.uniform2f(o.getUniformLocation(f,"uO"),a.R[0],a.R[1]),o.uniform4f(o.getUniformLocation(f,"uS"),a.H,a.q,a.C,0),o.uniform2f(o.getUniformLocation(f,"uSeam"),a.r,a.i),o.uniform2f(o.getUniformLocation(f,"uK"),1,1.5);let m=o.getUniformLocation(f,"uT"),p=0,u=(e,t,a)=>fetch("/living/water/"+e).then(e=>e.blob()).then(e=>createImageBitmap(e,{premultiplyAlpha:"none",colorSpaceConversion:"none"})).then(e=>{if(i)return;let r=o.createTexture();o.activeTexture(o.TEXTURE0+t),o.bindTexture(o.TEXTURE_2D,r),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.texImage2D(o.TEXTURE_2D,0,o.RGBA,o.RGBA,o.UNSIGNED_BYTE,e),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MAG_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),o.uniform1i(o.getUniformLocation(f,a),t),e.close?.(),4==++p&&(c=requestAnimationFrame(d))}),v=performance.now(),d=e=>{let a,r,s,f;if(c=0,i||!n||document.hidden)return;c=requestAnimationFrame(d);let l=performance.now();a=t.getBoundingClientRect(),r=Math.min(window.devicePixelRatio||1,1.5,1754/Math.max(1,a.width)),s=Math.max(1,Math.round(a.width*r)),f=Math.max(1,Math.round(a.height*r)),(t.width!==s||t.height!==f)&&(t.width=s,t.height=f,o.viewport(0,0,s,f));let p=window.__lvT;o.uniform1f(m,(p??(e-v)/1e3)%3600),o.drawArrays(o.TRIANGLE_STRIP,0,4),t.dataset.ms=(performance.now()-l).toFixed(2)},h=()=>{c||4!==p||!n||document.hidden||(c=requestAnimationFrame(d))};Promise.all([u("guide.webp",0,"uG"),u("map.png",1,"uM"),u("flow.png",2,"uF"),u("rock.png",3,"uR")]).catch(()=>{});let g=new IntersectionObserver(([e])=>{n=e.isIntersecting,h()});return g.observe(t),document.addEventListener("visibilitychange",h),()=>{i=!0,cancelAnimationFrame(c),g.disconnect(),document.removeEventListener("visibilitychange",h)}},[]),(0,t.jsx)("div",{className:"lv-water","aria-hidden":!0,style:{left:i(536,2752),top:i(938,1536),width:i(1754,2752),height:i(598,1536)},children:(0,t.jsx)("canvas",{ref:e,className:"lv-water__gl"})})}])},45545,69293,e=>{e.s(["R",0,[1290,935],"C",0,.4,"i",0,22,"r",0,1050,"H",0,8,"q",0,.075],45545);let t=`precision highp float;
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