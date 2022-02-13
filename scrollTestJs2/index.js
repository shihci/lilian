// parallax
var scene = document.getElementById("scene");
var parallaxInstance = new Parallax(scene);

//swiper
var keys = [
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune"
  ];
  var slider2 = new Swiper(".swiper-container", {
    // Optional parameters
    slidesPerView: "auto",
    spaceBetween: 150,
    centeredSlides: true,
    mousewheel: true,
    pagination: {
      el: ".planet-links",
      clickable: true,
      renderBullet: function(index, className) {
        return '<div class="' + className + '">' + keys[index] + "</div>";
      }
    }
  });