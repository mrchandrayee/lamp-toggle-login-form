const scene = document.querySelector(".scene");
const lampToggle = document.getElementById("lampToggle");
const loginForm = document.getElementById("loginForm");
const formMessage = document.getElementById("formMessage");

function setLamp(isOn) {
  scene.classList.toggle("is-off", !isOn);
  lampToggle.setAttribute("aria-pressed", String(isOn));
  lampToggle.setAttribute("aria-label", isOn ? "Turn lamp off" : "Turn lamp on");
}

lampToggle.addEventListener("click", () => {
  setLamp(scene.classList.contains("is-off"));
});

loginForm.addEventListener("submit", event => {
  event.preventDefault();
  if (!loginForm.reportValidity()) return;
  formMessage.textContent = "Demo only — connect your authentication API.";
});

// Start with the lamp on, as in the illuminated frames of the recording.
setLamp(true);
