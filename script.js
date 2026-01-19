// Password Check
function checkPassword() {
  const pass = document.getElementById("password").value;
  if (pass === "mannuu17") {
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("content").style.display = "block";
  } else {
    document.getElementById("error").innerText = "Wrong password 😢";
  }
}

// Countdown
const targetDate = new Date("January 23, 2026 00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = targetDate - now;

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  document.getElementById("countdown").innerHTML =
    `⏳ ${d} days ${h} hrs ${m} min ${s} sec to your birthday 💗`;
}, 1000);

// Cake
function cutCake() {
  const cake = document.getElementById("cake");
  cake.classList.add("cut");
  document.getElementById("cakeText").innerText =
    "Cake cut 🎉 for my Mannuu 💗";
}

// Music
function toggleMusic() {
  const music = document.getElementById("bgMusic");
  music.paused ? music.play() : music.pause();
}
