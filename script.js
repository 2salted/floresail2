var image1 = document.getElementById("heroImage");
var image2 = document.getElementById("heroImage2");
var isImage1Visible = true;

function toggleImages() {
    if (isImage1Visible) {
        image1.style.opacity = 0;
        image2.style.opacity = 1;
    } else {
        image1.style.opacity = 1;
        image2.style.opacity = 0;
    }
    
    isImage1Visible = !isImage1Visible;
}

setInterval(toggleImages, 10000); // Switch images every 5 seconds


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

