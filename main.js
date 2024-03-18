document.addEventListener("DOMContentLoaded", function() {
    const iconMenu = document.getElementById('icon-menu');
    const navigation = document.querySelector('.navigation');
    const overlay = document.querySelector('.overlay');
    const iconCloseMenu = document.getElementById('icon-menu-close');

    iconMenu.addEventListener('click', function() {
        // Afficher la navigation et l'overlay
        navigation.style.display = 'block';
        overlay.style.display = 'block';
      });

      iconCloseMenu.addEventListener('click', function() {
        // Cacher la navigation et l'overlay
        navigation.style.display = 'none';
        overlay.style.display = 'none';
      });
    });