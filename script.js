const loader=document.getElementById("loader");
const video=document.getElementById("bgVideo");
const soundBtn=document.getElementById("soundBtn");
const glow=document.getElementById("cursorGlow");
const particles=document.getElementById("particles");
window.addEventListener("load",()=>{setTimeout(()=>loader.classList.add("hide"),2300);});
soundBtn.addEventListener("click",()=>{video.muted=!video.muted;if(!video.muted)video.play().catch(()=>{});soundBtn.textContent=video.muted?"🔇":"🔊";});
document.addEventListener("mousemove",e=>{glow.style.left=e.clientX+"px";glow.style.top=e.clientY+"px";});
document.addEventListener("click",e=>{for(let i=0;i<8;i++){const s=document.createElement("span");s.className="spark";s.style.left=e.clientX+"px";s.style.top=e.clientY+"px";const a=Math.random()*Math.PI*2,d=25+Math.random()*55;s.style.setProperty("--x",Math.cos(a)*d+"px");s.style.setProperty("--y",Math.sin(a)*d+"px");particles.appendChild(s);setTimeout(()=>s.remove(),750);}});
