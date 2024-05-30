document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM Loaded");
    
    const plus = document.getElementById('plus');
    const iconsContainer = document.getElementById('icons-container');
    const icons = document.querySelectorAll('.icon');
  
    let isOpen = false;
  
    console.log(plus, iconsContainer, icons);
  
    plus.addEventListener('click', () => {
      console.log("Plus clicked");
      
      if (!isOpen) {
        iconsContainer.classList.add('show');
        icons.forEach((icon, index) => {
            const angle = index * (360 / icons.length);
            const radius = 100; // Adjust this value to change the radius of the circle
            const x = radius * Math.cos(angle * Math.PI / 180);
            const y = radius * Math.sin(angle * Math.PI / 180);
            console.log(`Icon ${index + 1}: x=${x}, y=${y}`);
            icon.style.transform = `translate(${x}px, ${y}px)`;
          });
        isOpen = true;
      } else {
        iconsContainer.classList.remove('show');
        icons.forEach(icon => {
          icon.style.transform = 'translate(0, 0)';
        });
        isOpen = false;
      }
    });
  });
  