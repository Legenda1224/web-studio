function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.burger-menu_button', '.burger-menu_lines');
    let links = menu.find('.burger-menu_link');
    let overlay = menu.find('.burger-menu_overlay');
    
    button.on('click', (e) => {
      e.preventDefault();
      toggleMenu();
    });
    
    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());
    
    function toggleMenu(){
      menu.toggleClass('burger-menu_active');
      
      if (menu.hasClass('burger-menu_active')) {
        $('body').css('overlow', 'hidden');
      } else {
        $('body').css('overlow', 'visible');
      }
    }
  }
  
burgerMenu('.burger-menu');


window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})



function onEntry(entry) {
    entry.forEach(change => {
    if (change.isIntersecting) {
    change.target.classList.add('element-show');
    }
    });
  }
  
  let options = {
    threshold: [0.3] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.scroll');
  
  for (let elm of elements) {
    observer.observe(elm);
  }


  let options2 = {
    threshold: [0.2] };
  let observer2 = new IntersectionObserver(onEntry, options2);
  let elements2 = document.querySelectorAll('.scroll2');
  
  for (let elm of elements2) {
    observer2.observe(elm);
  }

  let options3 = {
    threshold: [0] };
  let observer3 = new IntersectionObserver(onEntry, options3);
  let elements3 = document.querySelectorAll('.scroll3');
  
  for (let elm of elements3) {
    observer3.observe(elm);
  }

  let options4 = {
    threshold: [0.2] };
  let observer4 = new IntersectionObserver(onEntry, options4);
  let elements4 = document.querySelectorAll('.scroll4');
  
  for (let elm of elements4) {
    observer4.observe(elm);
  
  }

