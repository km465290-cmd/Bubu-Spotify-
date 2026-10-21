const C={
 name:"Bubuu", from:"Duduu",
 cover:"Advance 🎈❤️<br>Happiest<br><span class='em'>💙❤️‍🔥♥️💖🧡❤️🎈</span><br>Birthday 🎂🎂<br>Maharani<br><span class='em'>💓❣️❤️‍🔥🧡🎈❤️🥰💟💖</span>", title:"Bubuu's Birthday Mix",
 date:"2026-12-09T00:00:00",
 lyrics:["Advance happiest birthday babyyyyyy","Your eyes make my soul calm","Your voice makes my heart calm","You make me calm","I love youuuuuuuu ❤️","- Duduu"],
 reasons:[["Your smile","It fixes my whole day."],["Your voice","I could listen to it forever."],["Your care","You notice the smallest things."],["Your laugh","My favourite sound ever."],["Your eyes","My soul goes calm."],["You","Just you, always you."]],
 photos:[["1.jpg","babyy"],["2.jpg","sweety"],["3.jpg","hotty"],["4.jpg","cutie"],["5.jpg","i love you 😘"]],
 endTitle:"End of the playlist, start of something new",
 end:["This is the end of the surprise, but the start of your new life, a new beginning.","I hope every dream of yours comes true.","Love youu ❤️"],
 endSign:"Your husband"
};
const T=[["Happy Birthday, "+C.name,"lyrics","3:21"],["Reasons I Love You","reasons","2:48"],["Our photos to my babyyyyyy ❤️","photos","3:05"],["New Beginning","end","4:12"]];
const $=id=>document.getElementById(id);
$("cvTitle").innerHTML=C.cover;$("plTitle").textContent=C.title;
$("plSub").textContent="Made for "+C.name+" by "+C.from+" • "+T.length+" songs";
$("vPl").textContent=C.title;$("back").textContent="← Home";$("mArt").textContent=C.from;
const au=$("au");let timer,cdT,cur=-1;
$("tracks").innerHTML=T.map((t,i)=>`<li data-i="${i}"><span class="n">${i+1}</span><div class="t"><b>${t[0]}</b><small>${C.from}</small></div><span class="d">${t[2]}</span></li>`).join("");
document.querySelectorAll("#tracks li").forEach(li=>li.onclick=()=>open(+li.dataset.i));
function setPlay(){$("mPlay").textContent=au.paused?"▶":"❚❚";$("bigPlay").textContent=au.paused?"▶":"❚❚"}
function toggle(){au.paused?au.play().catch(()=>{}):au.pause();setTimeout(setPlay,50)}
$("mPlay").onclick=toggle;$("bigPlay").onclick=()=>{if(au.paused)toggle();if(cur<0)open(0)};
au.ontimeupdate=()=>{$("bar").firstChild.style.width=(au.currentTime%180)/1.8+"%"};
$("back").onclick=()=>{$("view").classList.remove("open");clearInterval(timer);clearInterval(cdT)};
function open(i){
 cur=i;clearInterval(timer);clearInterval(cdT);
 document.querySelectorAll("#tracks li").forEach((l,k)=>l.classList.toggle("on",k==i));
 $("mTitle").textContent=T[i][0];$("vTitle").textContent=T[i][0];
 if(au.paused)au.play().catch(()=>{});setTimeout(setPlay,80);
 const b=$("vBody"),k=T[i][1];
 if(k=="lyrics"){b.innerHTML='<div class="lyr">'+C.lyrics.map((l,x)=>`<p style="animation-delay:${x*.3}s">${l}</p>`).join("")+"</div>"}b.onclick=null;
 if(k=="reasons")b.innerHTML=C.reasons.map((r,x)=>`<div class="card" style="animation-delay:${x*.12}s"><b>${r[0]}</b>${r[1]}</div>`).join("");
 if(k=="photos")b.innerHTML='<div class="gal">'+C.photos.map(p=>`<figure><img src="photos/${p[0]}" onerror="this.style.opacity=.2"><figcaption>${p[1]}</figcaption></figure>`).join("")+"</div>";
 if(k=="count"){
  b.innerHTML='<div class="cd"><div><b id="d">0</b><span>DAYS</span></div><div><b id="h">0</b><span>HOURS</span></div><div><b id="m">0</b><span>MINS</span></div><div><b id="s">0</b><span>SECS</span></div></div><p class="msg" style="margin-top:22px">Advance happiest birthday goluuuu ♥️</p>';
  const tick=()=>{let t=Math.max(0,new Date(C.date)-new Date())/1000;
   $("d").textContent=Math.floor(t/86400);$("h").textContent=Math.floor(t%86400/3600);
   $("m").textContent=Math.floor(t%3600/60);$("s").textContent=Math.floor(t%60)};
  tick();cdT=setInterval(tick,1000);
 }
 if(k=="end"){$("vTitle").textContent=C.endTitle;
  b.innerHTML=C.end.map(x=>`<p class="msg">${x}</p>`).join("")+`<p class="sign">${C.endSign}</p>`}
 b.insertAdjacentHTML("beforeend",'<button class="homebtn" id="homeBtn">← Back to home</button>');
 $("homeBtn").onclick=()=>$("back").click();
 $("view").scrollTop=0;window.scrollTo(0,0);$("view").classList.add("open");
}

/* tiny floating hearts everywhere */
(function(){
 const box=document.createElement("div");box.id="hearts";document.body.appendChild(box);
 const cols=["#FFD0B8","#FFB3C1","#FF8FA3","#FFE5D9"];
 for(let i=0;i<18;i++){
  const h=document.createElement("span");h.textContent=i%3?"♥":"♡";
  h.style.left=Math.random()*100+"%";
  h.style.fontSize=(7+Math.random()*10)+"px";
  h.style.color=cols[i%cols.length];
  h.style.animationDuration=(14+Math.random()*14)+"s";
  h.style.animationDelay=(-Math.random()*20)+"s";
  box.appendChild(h);
 }
 document.addEventListener("click",e=>{
  for(let i=0;i<6;i++){
   const p=document.createElement("span");p.className="pop";p.textContent="♥";
   p.style.left=e.clientX+"px";p.style.top=e.clientY+"px";
   p.style.setProperty("--x",(Math.random()*80-40)+"px");
   p.style.setProperty("--y",(-30-Math.random()*60)+"px");
   p.style.color=cols[i%cols.length];
   document.body.appendChild(p);setTimeout(()=>p.remove(),900);
  }
 });
})();

(function(){
 const tick=()=>{let t=Math.max(0,new Date(C.date)-new Date())/1000;
  $("hd").textContent=Math.floor(t/86400);$("hh").textContent=Math.floor(t%86400/3600);
  $("hm").textContent=Math.floor(t%3600/60);$("hs").textContent=Math.floor(t%60)};
 tick();setInterval(tick,1000);
})();

/* ===== Bubuu Wrapped: edit the slides here ===== */
(function(){
 const W=[
  {bg:"#FFD0B8",fg:"#155F67",k:"Bubuu Wrapped 2026",big:"You,<br>Maharani",s:"Tap to see your year 💓"},
  {bg:"#155F67",fg:"#FFD0B8",k:"You made me smile",big:"1,000,000+",s:"times this year. I stopped counting 🥰"},
  {bg:"#FF8FA3",fg:"#4a0d20",k:"Your top 5 things",list:["Your smile","Your voice","Your eyes","Your care","Just you"]},
  {bg:"#FFD0B8",fg:"#155F67",k:"Minutes I spent thinking about you",big:"525,600",s:"That's every single minute of the year 💭"},
  {bg:"#155F67",fg:"#FFD0B8",k:"You are in the top",big:"0.01%",s:"of every girl in the world. Rank #1 for me 👑"},
  {bg:"#FFB3C1",fg:"#155F67",k:"Your listening personality",big:"The<br>Maharani",s:"Calm. Caring. Cute. Mine. ❤️"},
  {bg:"#155F67",fg:"#FFD0B8",k:"Wrapped 2026, done",big:"Love<br>you",s:"Advance happiest birthday babyyy ❤️<br>Duduu",end:true}
 ];
 const el=document.createElement("div");el.id="wrapped";
 el.innerHTML='<div class="wbars"></div><button class="wx">✕</button><div class="wl"></div><div class="wr"></div><div class="wslide"></div>';
 document.body.appendChild(el);
 const bars=el.querySelector(".wbars"),sl=el.querySelector(".wslide");
 bars.innerHTML=W.map(()=>"<i><u></u></i>").join("");
 let i=0,tm;
 function close(){clearTimeout(tm);el.classList.remove("on")}
 function show(n){
  if(n<0)n=0;
  if(n>=W.length){close();return}
  i=n;clearTimeout(tm);
  const s=W[n];
  el.style.background=s.bg;el.style.color=s.fg;
  sl.innerHTML="<small>"+s.k+"</small>"+(s.big?"<h2>"+s.big+"</h2>":"")+
   (s.list?"<ol>"+s.list.map(x=>"<li>"+x+"</li>").join("")+"</ol>":"")+
   (s.s?"<p>"+s.s+"</p>":"")+(s.end?'<button class="wend" id="wend">← Back to home</button>':"");
  sl.style.animation="none";void sl.offsetWidth;sl.style.animation="";
  [...bars.children].forEach((b,k)=>{const u=b.firstChild;u.style.transition="none";u.style.width=k<n?"100%":"0";u.style.background=s.fg});
  const cur=bars.children[n].firstChild;void cur.offsetWidth;cur.style.transition="width 5s linear";cur.style.width="100%";
  if(s.end)document.getElementById("wend").onclick=close;else tm=setTimeout(()=>show(n+1),5000);
 }
 el.querySelector(".wl").onclick=()=>show(i-1);
 el.querySelector(".wr").onclick=()=>show(i+1);
 el.querySelector(".wx").onclick=close;
 document.getElementById("wrapBtn").onclick=()=>{el.classList.add("on");show(0);if(au.paused)au.play().catch(()=>{});setTimeout(setPlay,80)};
})();
