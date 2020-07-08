// home animation
function startDiscovery() {
    document.getElementById("discoverText").style.color = "#D96D55";
    document.getElementById("svg4536").style.fill = "#D96D55";
}

function normalDiscovery(){
    if (hasBeenClicked) {
        document.getElementById("svg4536").style.fill = "#D96D55";
    }
    else {
        document.getElementById("discoverText").style.color = "#F2C8A2";
        document.getElementById("svg4536").style.fill = "#F2C8A2";
    }
}

function fadeOutEffect(id) {
    var fadeTarget = document.getElementById(id);
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 200);
}

let hasBeenClicked = false;
let animate;
let bottom=100;
function Discovery(){
    hasBeenClicked = true;
    document.getElementById("discoverText").style.visibility = "hidden";
    $("h2").slideUp({duration: 900});
    $("h1").slideUp({duration: 600});
    setTimeout(function(){ 
        fadeOutEffect("banner");}, 1000);
    setTimeout(function(){
        window.location.href = "carousel/index.html";}, 2000);
    
    
}


// Check if navigation bar is open or closed

// Initialize: navigation bar is closed
let toogleNavStatus = false;

// Anonymous function
let toggleNav = function(){
    /* Grab the object identied with the class name nav-sidebar 
    from the index.html*/
    let getSidebar = document.querySelector(".nav-sidebar");
    // Grab unordered list and title (span)
    let getSidebarUl = document.querySelector(".nav-sidebar ul");
    let getSidebarTitle = document.querySelector(".nav-sidebar span");
    // Grab all anchor tags and put them in an array (SelectorAll)
    let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");

    if ( toogleNavStatus === false) {
        // Change css style
        getSidebar.style.visibility = "visible";
        getSidebarUl.style.visibility = "visible";
        getSidebar.style.width = "150px";
        getSidebarTitle.style.opacity = "0.5";

        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++){
            getSidebarLinks[i].style.opacity = "1";
        }

        toogleNavStatus = true;
    }  
    else if (toogleNavStatus === true) {
        // Change css style
        getSidebar.style.width = "0px";
        getSidebarTitle.style.opacity = "0";
        getSidebar.style.visibility = "hidden";

        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++){
            getSidebarLinks[i].style.opacity = "0";
        }

        getSidebarUl.style.visibility = "hidden";

        console.log(toogleNavStatus);
        toogleNavStatus = false;
    }  

}





