const homeScoreBoardEl = document.getElementById("homeScoreboard");
const guestScoreBoardEl = document.getElementById("guestScoreboard");

let homescore = 0;
function HomeincbyOne() {
  homeScoreBoardEl.textContent = homescore += 1;
}
function HomeincbyTwo() {
  homeScoreBoardEl.textContent = homescore += 2;
}
function HomeincbyThree() {
  homeScoreBoardEl.textContent = homescore += 3;
}

let guestscore = 0;
function GuestincbyOne() {
  guestScoreBoardEl.textContent = guestscore += 1;
}
function GuestincbyTwo() {
  guestScoreBoardEl.textContent = guestscore += 2;
}
function GuestincbyThree() {
  guestScoreBoardEl.textContent = guestscore += 3;
}

function Reset() {
  homescore = 0;
  guestscore = 0;
  homeScoreBoardEl.textContent = 0;
  guestScoreBoardEl.textContent = 0;
}
