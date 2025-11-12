document.querySelector("#quizForm").addEventListener("submit", checkAnswers);

function checkAnswers(event) {
  event.preventDefault(); // stop form refresh

  let score = 0;

  // Get answers
  const q1 = document.querySelector('input[name="q1"]:checked')?.value;
  const q2 = document.querySelector('input[name="q2"]:checked')?.value;
  const q3 = document.querySelector('input[name="q3"]:checked')?.value;
  const q4 = document.querySelector('input[name="q4"]:checked')?.value;
  const q5 = document.querySelector('input[name="q5"]').value.trim();
  const q6 = document.querySelector('input[name="q6"]').value.trim().toLowerCase();
    const q7 = document.querySelector('input[name="q7"]').value;

  // Check each
  if (q1 === "b") score++;
  if (q2 === "c") score++;
  if (q3 === "true") score++;
  if (q4 === "false") score++;
  if (q5 == "80") score++;
  if (q6.includes("strength")) score++;
  const correctColor = "#808080"; // gray body molds
  if (q7.toLowerCase() === correctColor) score++;

  const result = document.querySelector("#result");
  result.innerHTML = `You scored <strong>${score}</strong> out of 7!`;

  if (score === 7) {
    result.innerHTML += "<br>🔥 You're a true Physical: 100 champion!";
  } else if (score >= 4) {
    result.innerHTML += "<br>💪 Not bad! Keep training.";
  } else {
    result.innerHTML += "<br>😅 Better hit the gym and rewatch the show!";
  }
}
