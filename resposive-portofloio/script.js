const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const menu = document.querySelector('nav .container ul');

//show btn
menuBtn.addEventListener('click', () => {
    menu.style.display = 'block';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'inline-block';
}) 

//close btn
closeBtn.addEventListener('click', () => {
    menu.style.display = 'none';
    menuBtn.style.display = 'inline-block';
    closeBtn.style.display = 'none';
}) 


// utk show more tp eror
const navItems = menu.querySelector('li');

navItems.forEach(item => {
    const link  = item.querySelector('a');
    link.addEventListener('click', () => {
      link.classList.add('active');
    })
})

//skilss
// const skillItems = document.querySelector('section.sklls. skill');
// skillItems.forEach(skill => {
//     skill.querySelector('.head').addEventListener('click', () => {
//         skill.querySelector('.items'.classList.toggle('show-items'));
//     }) 
// })