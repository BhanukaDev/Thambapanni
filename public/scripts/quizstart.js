function startQuiz() {
  const welcomeContent = document.getElementById('welcomeContent');
  const quizContent = document.getElementById('quizContent');

  setTimeout(function () {
    welcomeContent.style.display = 'none';
    quizContent.style.display = 'flex';
  }, 500);
}

function setQuizMap() {}
