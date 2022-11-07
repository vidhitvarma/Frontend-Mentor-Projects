const questions = document.querySelectorAll('#header');


questions.forEach(function(question){
  question.addEventListener('click',function(e){
    question.classList.toggle('highlight');
    const dataContainer = question.parentElement.parentElement;
    const arrow = dataContainer.querySelector('img');
    const answer = dataContainer.querySelector('.answer');
    arrow.classList.toggle('invert');
    answer.classList.toggle('hidden');
  })
})