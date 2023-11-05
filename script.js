const doble4 = document.querySelector('.d4');
const doble6 = document.querySelector('.d6');
const el4 = document.querySelector('.el4');
const el42 = document.querySelector('.el4-2');
const el6 = document.querySelector('.el6');
const el62 = document.querySelector('.el6-2');

const el4C = document.querySelector('.el4C');
const el42C = document.querySelector('.el4-2C');
const el6C = document.querySelector('.el6C');
const el62C = document.querySelector('.el6-2C');


el4C.addEventListener('mouseenter', () => {
  el42.style.height = '0px';
  el42.addEventListener('transitionend', () => {
    el42.style.transition = 'none';
    el42.style.visibility = 'hidden';
    el42.style.height = '0px';
  });
  doble4.style.gap = '0px';
  el4.style.height = '100%';
  el4.addEventListener('transitionend', () => {
    el4.style.transition = '0.2s ease';
    el4.style.height = '100%';
    el4.style.visibility = 'visible';
  });
});

el4C.addEventListener('mouseout', () => {
  el42.style.visibility = 'visible';
  el42.style.transition = '0.2s ease';
  el42.style.height = 'calc(40% - 40px)';
  el42.addEventListener('transitionend', () => {
    el42.style.transition = '0.2s ease';
    el42.style.height = 'calc(40% - 40px)';
    el42.style.visibility = 'visible';
  });
  doble4.style.gap = '40px';
  el4.style.height = '60%';
  el4.addEventListener('transitionend', () => {
    el4.style.transition = '0.2s ease';
    el4.style.height = '60%';
    el4.style.visibility = 'visible';
  });
});



el42C.addEventListener('mouseenter', () => {
  el4.style.height = '0px';
  el4.addEventListener('transitionend', () => {
    el4.style.transition = 'none';
    el4.style.visibility = 'hidden';
    el4.style.height = '0px';
  });
  doble4.style.gap = '0px';
  el42.style.height = '100%';
  el42.addEventListener('transitionend', () => {
    el42.style.transition = '0.2s ease';
    el42.style.height = '100%';
    el42.style.visibility = 'visible';
  });
});

el42C.addEventListener('mouseout', () => {
  el4.style.visibility = 'visible';
  el4.style.transition = '0.2s ease';
  el4.style.height = '60%';
  el4.addEventListener('transitionend', () => {
    el4.style.transition = '0.2s ease';
    el4.style.height = '60%';
    el4.style.visibility = 'visible';
  });
  doble4.style.gap = '40px';
  el42.style.height = 'calc(40% - 40px)';
  el42.addEventListener('transitionend', () => {
    el42.style.transition = '0.2s ease';
    el42.style.height = 'calc(40% - 40px)';
    el42.style.visibility = 'visible';
  });
});











el6C.addEventListener('mouseenter', () => {
  el62.style.height = '0px';
  el62.addEventListener('transitionend', () => {
    el62.style.transition = 'none';
    el62.style.visibility = 'hidden';
    el62.style.height = '0px';
  });
  doble6.style.gap = '0px';
  doble6.style.paddingTop = '0px';
  el6.style.height = '100%';
  el6.addEventListener('transitionend', () => {
    el6.style.transition = '0.3s ease';
    el6.style.height = '100%';
    el6.style.visibility = 'visible';
  });
});

el6C.addEventListener('mouseout', () => {
  el62.style.visibility = 'visible';
  el62.style.transition = '0.3s ease';
  el62.style.height = 'calc(40% - 40px)';
  el62.addEventListener('transitionend', () => {
    el62.style.transition = '0.3s ease';
    el62.style.height = 'calc(40% - 40px)';
    el62.style.visibility = 'visible';
  });
  doble6.style.gap = '40px';
  doble6.style.paddingTop = '20%';
  el6.style.height = '60%';
  el6.addEventListener('transitionend', () => {
    el6.style.transition = '0.3s ease';
    el6.style.height = '60%';
    el6.style.visibility = 'visible';
  });
});



el62C.addEventListener('mouseenter', () => {
  el6.style.height = '0px';
  el6.addEventListener('transitionend', () => {
    el6.style.transition = 'none';
    el6.style.visibility = 'hidden';
    el6.style.height = '0px';
  });
  doble6.style.gap = '0px';
  doble6.style.paddingTop = '0px';
  el62.style.height = '100%';
  el62.addEventListener('transitionend', () => {
    el62.style.transition = '0.3s ease';
    el62.style.height = '100%';
    el62.style.visibility = 'visible';
  });
});

el62C.addEventListener('mouseout', () => {
  el6.style.visibility = 'visible';
  el6.style.transition = '0.3s ease';
  el6.style.height = '60%';
  el6.addEventListener('transitionend', () => {
    el6.style.transition = '0.3s ease';
    el6.style.height = '60%';
    el6.style.visibility = 'visible';
  });
  doble6.style.gap = '40px';
  doble6.style.paddingTop = '20%';
  el62.style.height = 'calc(40% - 40px)';
  el62.addEventListener('transitionend', () => {
    el62.style.transition = '0.3s ease';
    el62.style.height = 'calc(40% - 40px)';
    el62.style.visibility = 'visible';
  });
});



const cursorRounded = document.querySelector('.cursor');
const cursorPointed = document.querySelector('.ball');
const moveCursor = (e)=> {
  cursorRounded.style.transition = 'none';
  cursorPointed.style.transition = '0.1s ease';
  const mouseY = e.clientY -15;
  const mouseX = e.clientX -15;
  const mouseY2 = mouseY + 12;
  const mouseX2 = mouseX + 12;
  cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  cursorPointed.style.transform = `translate3d(${mouseX2}px, ${mouseY2}px, 0)`;
}
window.addEventListener('mousemove', moveCursor)
window.addEventListener('mouseout', () => {
  cursorRounded.style.transition = '1.1s ease';
  cursorPointed.style.transition = '1.1s ease';
  cursorRounded.style.transform = 'translateX(calc(50vw - 15px)) translateY(90vh)';
  cursorPointed.style.transform = 'translateX(calc(50vw - 3.5px)) translateY(calc(90vh + 11.5px))';
});


