const questions = document.querySelectorAll('#header');


questions.forEach(function(question){
  question.addEventListener('click',function(e){
    question.classList.toggle('highlight');
    const dataContainer = question.parentElement.parentElement;
    const answer = dataContainer.querySelector('.answer');
    answer.classList.toggle('hidden');

  })
})