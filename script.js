const loader=document.getElementById("loader");
const video=document.getElementById("bgVideo");
const music=document.getElementById("bgMusic");
const soundBtn=document.getElementById("soundBtn");
const glow=document.getElementById("cursorGlow");
const particles=document.getElementById("particles");

window.addEventListener("load",()=>{
  setTimeout(()=>loader.classList.add("hide"),2300);
  music.volume=0.45;
  music.play().then(()=>{
    soundBtn.textContent="🔊";
  }).catch(()=>{
    soundBtn.textContent="🔇";
  });
});

soundBtn.addEventListener("click",async()=>{
  if(music.paused){
    try{
      await music.play();
      soundBtn.textContent="🔊";
    }catch(e){
      soundBtn.textContent="🔇";
    }
  }else{
    music.pause();
    soundBtn.textContent="🔇";
  }
});

document.addEventListener("mousemove",e=>{
  glow.style.left=e.clientX+"px";
  glow.style.top=e.clientY+"px";
});

document.addEventListener("click",e=>{
  for(let i=0;i<8;i++){
    const s=document.createElement("span");
    s.className="spark";
    s.style.left=e.clientX+"px";
    s.style.top=e.clientY+"px";
    const a=Math.random()*Math.PI*2,d=25+Math.random()*55;
    s.style.setProperty("--x",Math.cos(a)*d+"px");
    s.style.setProperty("--y",Math.sin(a)*d+"px");
    particles.appendChild(s);
    setTimeout(()=>s.remove(),750);
  }
});
