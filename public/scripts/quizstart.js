function startQuiz() {
  const welcomeContent = document.getElementById('welcomeContent');
  const quizContent = document.getElementById('quizContent');
  const qNo = document.getElementById('qNo');

  quizContent.style.display = 'flex';

  welcomeContent.style.left = '-100%';
  //welcomeContent.style.visibility = 'false';
  welcomeContent.style.margin = '0px';
  setTimeout(function () {
    quizContent.style.right = '0%';
    welcomeContent.style.display = 'none';
    qNo.style.display = 'inherit';
    setMap();
  }, 500);

  startQuizSetup();
}

//setMap();

function setMap() {
  const mainLand = document.getElementsByClassName('mainLand')[0];
  const beach = document.getElementsByClassName('beach')[0];
  const seablob = document.getElementsByClassName('seaBlob')[0];

  mainLand.style.width = '250px';
  beach.style.width = '300px';
  seablob.style.width = '820px';
}
