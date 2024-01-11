document.addEventListener("DOMContentLoaded", function() {
  
    let button = document.getElementById('RGB');
  
    button.addEventListener('click', function() {
      toggleStyles(button);
    });
    
    

    function toggleStyles(element) {
      let stylesApplied = element.classList.contains('styles-applied');
  
      if (!stylesApplied) {
        applyStyles(element);
        element.textContent = 'Turn me back';

      } else {
        resetStyles(element);
        element.textContent = 'Turn me into RGB';

      }
    }
  
    function applyStyles(element) {
      element.style.padding = '0.6em 2em';
      element.style.border = 'none';
      element.style.outline = 'none';
      element.style.color = 'rgb(255, 255, 255)';
      element.style.background = '#111';
      element.style.cursor = 'pointer';
      element.style.position = 'relative';
      element.style.zIndex = '0';
      element.style.borderRadius = '10px';
      element.style.userSelect = 'none';
      element.style.WebkitUserSelect = 'none';
      element.style.touchAction = 'manipulation';
      element.style.margin = '10px';
  
      element.addEventListener('mousedown', function() {
        element.style.transform = 'translateY(2px)';
        element.style.boxShadow = '0 0 0 transparent';
      });
  
      let beforeElement = document.createElement('div');
      beforeElement.className = 'before-element';
      element.appendChild(beforeElement);
  
      element.classList.add('styles-applied');
    }
  
    function resetStyles(element) {
      element.removeAttribute('style');
  
      element.removeEventListener('mousedown', function() {
        element.style.transform = 'translateY(2px)';
        element.style.boxShadow = '0 0 0 transparent';
      });
  
      let beforeElement = element.querySelector('.before-element');
      if (beforeElement) {
        element.removeChild(beforeElement);
      }
  
      element.classList.remove('styles-applied');
    }
  });
  

  let hover = document.getElementById('hover-button');
  hover.addEventListener('click', function() {
    toggleStyles(hover);
  });

  hover.addEventListener('mouseover', function() {
    hover.style.transform = 'scale(1.05)';
  });

  hover.addEventListener('mouseout', function() {
    hover.style.transform = 'scale(1)';
  });