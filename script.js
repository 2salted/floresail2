var image1 = document.getElementById("heroImage");
var image2 = document.getElementById("heroImage2");
var image3 = document.getElementById("heroImage3");
var bigtxt = document.getElementById("bigtxt");
var currentImage = 1;
/*
function toggleImages() {
    if (currentImage === 1) {
        // Slide to the second image
        image1.style.opacity = 0;
        image2.style.opacity = 1;
        currentImage = 2;
    } else if (currentImage === 2) {
        // Slide to the third image
        image2.style.opacity = 0;
        image3.style.opacity = 1;
        currentImage = 3;
    } else {
        // Slide back to the first image and update text color to white
        image3.style.opacity = 0;
        image1.style.opacity = 1;
        currentImage = 1;
    }
}

setInterval(toggleImages, 10000); // Switch images every 10 seconds
*/

window.addEventListener("load", function () {
    setTimeout(function () {
      // Hide the preloader by setting its width to 100%
      document.querySelector("#loading-bar").style.width = "100%";
  
      // After a short delay, hide the preloader container
      setTimeout(function () {
        document.querySelector("#preloader").style.display = "none";
  
        // Your code to run after the preloader is done loading
        document.querySelector(".text-container").style.color = "#0d3b54";
        document.querySelector(".text-container").style.transform = "translate(-50%, -50%)";
  
        document.querySelectorAll("#smalltxt, #bigtxt, #undertxt").forEach(function (element, index) {
          setTimeout(function () {
            element.style.opacity = "1";
            element.style.transform = "translateX(0)";
          }, index * 200);
        });
  
        setTimeout(function () {
          document.querySelector("#button").style.opacity = "1";
          document.querySelector("#button").style.transform = "translateY(0)";
        }, 1000);
  
      }, 800); // Adjust the delay if needed
    }, 1200);
  });
  
function myFunction(x) {
    x.classList.toggle("change");

    // Toggle the mobile menu
    var mobileMenu = document.querySelector('.mobile-menu');
    if (mobileMenu.style.right === "" || mobileMenu.style.right === "-300px") {
        mobileMenu.style.right = "0";
    } else {
        mobileMenu.style.right = "-300px";
    }
}


function closeMobileMenu() {
    var mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.style.right = '-300px';

    // Restore the burger menu icon
    var burgerIcon = document.querySelector('.x-container');
    if (burgerIcon.classList.contains("change")) {
        burgerIcon.classList.remove("change");
    }
}

// Add this code to close the mobile menu when a menu item is clicked
var mobileMenuItems = document.querySelectorAll('.mobile-menu a');
mobileMenuItems.forEach(function (item) {
    item.addEventListener('click', closeMobileMenu);
});
