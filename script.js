document.querySelector("#quizForm").addEventListener("submit", checkAnswers);

function checkAnswers(e) {
  e.preventDefault(); // stop page from refreshing

  let score = 0;
  const form = new FormData(document.querySelector("#quizForm"));

  // --- Multiple choice + math questions ---
  if (form.get("q1") === "b") score++;
  if (form.get("q2") === "c") score++;
  if (form.get("q3") === "true") score++;
  if (form.get("q4") === "false") score++;
  if (form.get("q5") === "80") score++;

  // --- Text answer ---
  const q6 = form.get("q6") || "";
  if (q6.toLowerCase().includes("strength")) score++;

  // --- Color question (simple gray check) ---
  const q7 = form.get("q7");
  const allowedGrays = [
    "#444444", "#555555", "#666666", "#777777",
    "#888888", "#999999", "#aaaaaa", "#bbbbbb",
    "#cccccc", "#dddddd"
  ];
  if (allowedGrays.includes(q7)) score++;

  // --- Show result ---
  const result = document.querySelector("#result");
  result.innerHTML = "You scored " + score + " out of 7!";

  if (score === 7) result.innerHTML += "<br>🔥 You're a true Physical: 100 champion!";
  else if (score >= 4) result.innerHTML += "<br>💪 Not bad! Keep training.";
  else result.innerHTML += "<br>😅 Better hit the gym and rewatch the show!";
}

