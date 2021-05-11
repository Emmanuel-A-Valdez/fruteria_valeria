//Initialize and add the map
function initMap() {
     // Your location
     const location = { lat: 23.20593, lng: -106.41821 };
     // Centered map on location
     const map = new google.maps.Map(document.querySelector('.map')
          , {
               zoom: 17,
               center: location
          });
     // The marker, positioned at location
     const marker = new google.maps.Marker({ position: location, map: map });
}


// Sticky menu background
window.addEventListener('scroll', function () {
     if (window.scrollY > 150) {
          document.querySelector('#navbar').style.opacity = 0.9;
     } else {
          document.querySelector('#navbar').style.opacity = 1;
     }
});

// Footer year
const date = new Date();
document.querySelector('.year').innerHTML = date.getFullYear();



// Smooth Scrolling code from JQuery CDN
$('#navbar a, .btn').on('click', function (event) {
     if (this.hash !== '') {
          event.preventDefault();

          const hash = this.hash;

          $('html, body').animate(
               {
                    scrollTop: $(hash).offset().top - 100
               },
               800
          );
     }
});

// Auto remove alert
setTimeout(function () {
     $('#message').dialog("close")
}, 5000);