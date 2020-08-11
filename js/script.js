/**NAVBAR**/

window.onscroll = function () {
    FixTop();
    scrollFunction();
}

var nav = document.getElementById("nav")

var fixed = nav.offsetTop;

function FixTop() {
    if (window.pageYOffset > fixed){
        nav.classList.add("fixed-top");
    } else{
        nav.classList.remove("fixed-top");
    }
}

/**Back To Top**/

myButton = document.getElementById("BackToTop");

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
