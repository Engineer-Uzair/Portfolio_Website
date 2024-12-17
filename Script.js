let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onclick = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('actiive')
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

document.addEventListener('keydown', function(event) {
    // Disable F12
    if (event.key === 'F12') {
        event.preventDefault();
        return false;
    }
    
    // Disable Ctrl+Shift+I (Dev Tools)
    if (event.ctrlKey && event.shiftKey && event.key === 'I') {
        event.preventDefault();
        return false;
    }
    
    // Disable Ctrl+Shift+J (Console)
    if (event.ctrlKey && event.shiftKey && event.key === 'J') {
        event.preventDefault();
        return false;
    }
    
    // Disable Ctrl+Shift+C (Inspect)
    if (event.ctrlKey && event.shiftKey && event.key === 'C') {
        event.preventDefault();
        return false;
    }
    
    // Disable Ctrl+U (View Source)
    if (event.ctrlKey && event.key === 'U') {
        event.preventDefault();
        return false;
    }
    
    // Disable Ctrl+Shift+K (Console in Firefox)
    if (event.ctrlKey && event.shiftKey && event.key === 'K') {
        event.preventDefault();
        return false;
    }
  
    // Disable Ctrl+Shift+I (Dev Tools)
    if (event.ctrlKey && event.shiftKey && event.key === 'i') {
        event.preventDefault();
        return false;
    }
    
    // Disable Ctrl+Shift+J (Console)
    if (event.ctrlKey && event.shiftKey && event.key === 'j') {
        event.preventDefault();
        return false;
    }
    
    // Disable Ctrl+Shift+C (Inspect)
    if (event.ctrlKey && event.shiftKey && event.key === 'c') {
        event.preventDefault();
        return false;
    }
    
    // Disable Ctrl+U (View Source)
    if (event.ctrlKey && event.key === 'u') {
        event.preventDefault();
        return false;
    }
    
    // Disable Ctrl+Shift+K (Console in Firefox)
    if (event.ctrlKey && event.shiftKey && event.key === 'k') {
        event.preventDefault();
        return false;
    }
  
  });
  
     // Disable right-click context menu
     document.addEventListener('contextmenu', function(event) {
      event.preventDefault();
      return false;
    });
