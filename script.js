const loader = document.getElementById("loader");
const video = document.getElementById("bgVideo");
const music = document.getElementById("bgMusic");
const soundBtn = document.getElementById("soundBtn");
const glow = document.getElementById("cursorGlow");
const particles = document.getElementById("particles");

function updateSoundIcon() {
  soundBtn.textContent = music.paused ? "🔇" : "🔊";
}

window.addEventListener("load", () => {
  setTimeout(() => loader.classList.add("hide"), 2300);
  music.volume = 0.45;
  music.load();

  // Autoplay may be blocked by the browser; clicking the button will still start it.
  music.play().catch(() => {
    updateSoundIcon();
  });
  updateSoundIcon();
});

music.addEventListener("play", updateSoundIcon);
music.addEventListener("pause", updateSoundIcon);
music.addEventListener("ended", updateSoundIcon);

soundBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  e.stopPropagation();

  if (music.paused) {
    try {
      music.volume = 0.45;
      await music.play();
    } catch (error) {
      console.error("Không thể phát nhạc:", error);
    }
  } else {
    music.pause();
  }

  updateSoundIcon();
});

document.addEventListener("mousemove", e => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

document.addEventListener("click", e => {
  for (let i = 0; i < 8; i++) {
    const s = document.createElement("span");
    s.className = "spark";
    s.style.left = e.clientX + "px";
    s.style.top = e.clientY + "px";
    const a = Math.random() * Math.PI * 2;
    const d = 25 + Math.random() * 55;
    s.style.setProperty("--x", Math.cos(a) * d + "px");
    s.style.setProperty("--y", Math.sin(a) * d + "px");
    particles.appendChild(s);
    setTimeout(() => s.remove(), 750);
  }
});
