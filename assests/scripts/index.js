// INITIALIZE ANIAMTE ON SCROLL
AOS.init()

// TESTIMONIAL SLIDER SWIPE
$('.count').each(function () {
  $(this)
    .prop('Counter', 0)
    .animate(
      {
        Counter: $(this).text(),
      },
      {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
          $(this).text(Math.ceil(now))
        },
      }
    )
})

// Toast on Form Submission
const toastTrigger = document.getElementById('toastBtn')
const toastLive = document.getElementById('toast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', function () {
    const toast = new bootstrap.Toast(toastLive)

    toast.show()
  })
}

// Initialize and add the map
function initMap() {
  // The location of excellentCoaching
  const excellentCoaching = { lat: 51.517865, lng: -0.143753 }
  // The map, centered at excellentCoaching
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: excellentCoaching,
  })
  // The marker, positioned at excellentCoaching
  const marker = new google.maps.Marker({
    position: excellentCoaching,
    map: map,
  })
}

// CLEAR INPUT FIELDS ON SUBMIT
const footerForm = document.querySelector('footer .btn')
const FormInput = document.querySelector('#newsletter')
footerForm.addEventListener('click', function (e) {
  e.preventDefault()

  FormInput.value = ''
})

const course_registration = document.querySelector('#course_registration')
const footerHeaderUnderline = document.querySelectorAll('footer .uLine_orange')

window.addEventListener('resize', function () {
  // REMOVE GUTTERS IN FORM SECTION ON MEDIUM SCREEN BELOW
  if (window.innerWidth < 992) {
    // console.log("yes");
    course_registration.classList.remove('g-5')
  } else {
    course_registration.classList.add('g-5')
  }

  // REMOVE ORANGE UNDERLINE IN FOOTER LINKS HEADERS FOR SMALL SCREENS
  if (window.innerWidth < 395) {
    // console.log("yes");
    footerHeaderUnderline.forEach(element => {
      element.style.textDecoration = 'none'
    })
  } else {
    footerHeaderUnderline.forEach(element => {
      element.style.textDecoration = '3px solid #ff6622 underline'
    })
  }
})

window.addEventListener('load', function () {
  // PRELOADER TIME-OUT
  setTimeout(function () {
    $('#ctn-preloader').addClass('loaded')
    $('body').removeClass('no-scroll-y')

    if ($('#ctn-preloader').hasClass('loaded')) {
      $('#preloader')
        .delay(300)
        .queue(function () {
          $(this).remove()
        })
    }
  }, 300)

  // REMOVE GUTTERS IN FORM SECTION ON MEDIUM SCREEN BELOW
  if (window.innerWidth < 992) {
    // console.log("yes");
    course_registration.classList.remove('g-5')
  } else {
    course_registration.classList.add('g-5')
  }

  // REMOVE ORANGE UNDERLINE IN FOOTER LINKS HEADERS FOR SMALL SCREENS
  // console.log(footerHeaderUnderline);
  if (window.innerWidth < 395 || window.innerWidth < 321) {
    // console.log("yes");
    footerHeaderUnderline.forEach(element => {
      element.style.textDecoration = 'none'
    })
  } else {
    footerHeaderUnderline.forEach(element => {
      element.style.textDecoration = '3px solid #ff6622 underline'
    })
  }
})

// window.addEventListener("resize", function () {
//     if (window.innerWidth < 395) {
//         // console.log("yes");
//         footerHeaderUnderline.forEach((element) => {
//             element.style.textDecoration = "none";
//         });
//     } else {
//         footerHeaderUnderline.forEach((element) => {
//             element.style.textDecoration = "3px solid #ff6622 underline";
//         });
//     }
// });

// PRE LOADER
// window.addEventListener("load", function () {
//     setTimeout(function () {
//         $("#ctn-preloader").addClass("loaded");
//         $("body").removeClass("no-scroll-y");

//         if ($("#ctn-preloader").hasClass("loaded")) {
//             $("#preloader")
//                 .delay(1000)
//                 .queue(function () {
//                     $(this).remove();
//                 });
//         }
//     }, 3000);
// });
// $(document).ready(function () {
//     setTimeout(function () {
//         $("#ctn-preloader").addClass("loaded");
//         $("body").removeClass("no-scroll-y");

//         if ($("#ctn-preloader").hasClass("loaded")) {
//             $("#preloader")
//                 .delay(1000)
//                 .queue(function () {
//                     $(this).remove();
//                 });
//         }
//     }, 3000);
// });

// GOOGLE MAP API
// let map;
// let marker;
// let geocoder;
// let responseDiv;
// let response;

// function initMap() {
//     map = new google.maps.Map(document.getElementById("map"), {
//         zoom: 8,
//         center: { /* lat: 51.517865, lng: -0.143753 */ lat: -34.397, lng: 150.644 },
//         mapTypeControl: false,
//     });
//     geocoder = new google.maps.Geocoder();

//     const inputText = document.createElement("input");

//     inputText.type = "text";
//     inputText.placeholder = "Enter a location";

//     const submitButton = document.createElement("input");

//     submitButton.type = "button";
//     submitButton.value = "Geocode";
//     submitButton.classList.add("button", "button-primary");

//     const clearButton = document.createElement("input");

//     clearButton.type = "button";
//     clearButton.value = "Clear";
//     clearButton.classList.add("button", "button-secondary");
//     response = document.createElement("pre");
//     response.id = "response";
//     response.innerText = "";
//     responseDiv = document.createElement("div");
//     responseDiv.id = "response-container";
//     responseDiv.appendChild(response);

//     const instructionsElement = document.createElement("p");

//     instructionsElement.id = "instructions";
//     instructionsElement.innerHTML = "<strong>Instructions</strong>: Enter an address in the textbox to geocode or click on the map to reverse geocode.";
//     map.controls[google.maps.ControlPosition.TOP_LEFT].push(inputText);
//     map.controls[google.maps.ControlPosition.TOP_LEFT].push(submitButton);
//     map.controls[google.maps.ControlPosition.TOP_LEFT].push(clearButton);
//     map.controls[google.maps.ControlPosition.LEFT_TOP].push(instructionsElement);
//     map.controls[google.maps.ControlPosition.LEFT_TOP].push(responseDiv);
//     marker = new google.maps.Marker({
//         map,
//     });
//     map.addListener("click", (e) => {
//         geocode({ location: e.latLng });
//     });
//     submitButton.addEventListener("click", () => geocode({ address: inputText.value }));
//     clearButton.addEventListener("click", () => {
//         clear();
//     });
//     clear();
// }

// function clear() {
//     marker.setMap(null);
//     responseDiv.style.display = "none";
// }

// function geocode(request) {
//     clear();
//     geocoder
//         .geocode(request)
//         .then((result) => {
//             const { results } = result;

//             map.setCenter(results[0].geometry.location);
//             marker.setPosition(results[0].geometry.location);
//             marker.setMap(map);
//             responseDiv.style.display = "block";
//             response.innerText = JSON.stringify(result, null, 2);
//             return results;
//         })
//         .catch((e) => {
//             alert("Geocode was not successful for the following reason: " + e);
//         });
// }

// New Map
// let map;

// function initMap() {
//     map = new google.maps.Map(document.getElementById("map"), {
//         center: { lat: 51.517865, lng: -0.143753 },
//         zoom: 8,
//     });
// }

// OFFSET TOP ON SCROLL
// $("#main").click(function () {
//     var headerHeight = 150;

//     $("html, body").animate(
//         {
//             scrollTop: $($.attr(this, "#main")).offset().top - headerHeight,
//         },
//         500
//     );
//     return false;
// });
