document.addEventListener('DOMContentLoaded', function () {
  // Get elements related to the hamburger menu
  var hamburger = document.querySelector('.hamburger');
  var navi = document.getElementById('navi');
  var menuLinks = document.querySelectorAll('#navi a');

  // Get Inview elements
  var slideLeftElements = document.querySelectorAll('.inview-slide-left');
  var slideRightElements = document.querySelectorAll('.inview-slide-right');
  var balloonElements = document.querySelectorAll('.inview-balloon');

  // Set up handling for hamburger menu click and menu link click
  if (hamburger) {
    hamburger.addEventListener('click', toggleHamburger);
  }

  if (menuLinks) {
    menuLinks.forEach(function (link) {
      link.addEventListener('click', toggleHamburger);
    });
  }

  // Add Inview processing
  addInViewEvent(slideLeftElements, 'slide-left');
  addInViewEvent(slideRightElements, 'slide-right');
  addInViewEvent(balloonElements, 'balloon');

  // Function to toggle visibility of the hamburger menu
  function toggleHamburger() {
    hamburger.classList.toggle('active');
    navi.classList.toggle('active');
  }

  // Common processing for Inview events
  function addInViewEvent(elements, className) {
    if (elements) {
      elements.forEach(function (element) {
        element.addEventListener('inview', function (event) {
          // If the element is in view, add the specified class
          if (event.detail.isInView) {
            element.classList.add(className);
          }
        });
      });
    }
  }
});
