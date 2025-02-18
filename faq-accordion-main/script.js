// const plusIcon=document.querySelectorAll('.plusIcon');

// plusIcon.forEach(div=>{
//   div.addEventListener('click', () => {
//     const answer = div.nextElementSibling;
//     answer.classList.toggle('active');
//     })
// });

// const plusIcon=document.querySelector('.plusIcon');
// const minusIcon=document.querySelector('.minusIcon');
// const answer=document.querySelector('.answer');

// plusIcon.addEventListener('click',()=>{
// answer.classList.add('active');
// plusIcon.replaceChild(minusIcon);

// console.log('hiiii');
// });
// const plusIcon = document.querySelector('.plusIcon');
// const minusIcon = document.querySelector('.minusIcon');
// const answer = document.querySelector('.answer p');

// plusIcon.addEventListener('click', () => {
//   answer.classList.add('active');
//   plusIcon.style.display = 'block';
//   minusIcon.style.display = 'none';
//   console.log('Answer shown');
// });

// minusIcon.addEventListener('click', () => {
//   answer.classList.remove('active');
//   minusIcon.style.display = 'none';
//   plusIcon.style.display = 'block';

//   console.log('Answer hidden');
// });


// document.querySelectorAll('.item').forEach(item => {
//   const plusIcon = item.querySelector('.plusIcon');
//   const minusIcon = item.querySelector('.minusIcon');
//   const answer = item.querySelector('.answer p');

//   plusIcon.addEventListener('click', () => {
//     answer.style.display = 'block';
//     plusIcon.style.display = 'none';
//     minusIcon.style.display = 'block';
//     console.log('Answer shown');
//   });

//   minusIcon.addEventListener('click', () => {
//     answer.style.display = 'none';
//     minusIcon.style.display = 'none';
//     plusIcon.style.display = 'block';
//     console.log('Answer hidden');
//   });
// });



document.querySelectorAll('.item').forEach(item => {
  const question = item.querySelector('.question');

  question.addEventListener('click', () => {
    item.classList.toggle('active');
    console.log(item.classList.contains('active') ? 'Answer shown' : 'Answer hidden');
  });
});