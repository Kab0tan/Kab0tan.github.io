var navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.right = "0";
}
function hideMenu() {
    navLinks.style.right = "-200px";
}

window.onscroll = function () { scrollFunction() };


function scrollFunction() {
    const element = Array.from(document.getElementsByClassName("fixed-nav-bar"));
    const element_header = Array.from(document.getElementsByClassName("header"));
    const subnavbtn_js = Array.from(document.getElementsByClassName("subnavbtn"));
    const subnavbtn_jsArray = Array.from(subnavbtn_js);
    if (document.body.scrollTop > 650 || document.documentElement.scrollTop > 650) {
        // console.log("Oui c'est bon");
        // element[0].style.top = '-150px';
        // element_header[0].style.backgroundColor = "#rgba(0, 0, 204, 0.65);";
        element[0].style.backgroundColor = "hsl(0deg 0% 100% / 75%)";
        document.querySelectorAll(".subnavbtn, .subnavbtn-b").forEach(element => {
            element.classList.add("black-border");
          });
        subnavbtn_jsArray.forEach(element => {
              element.style.color = `black`;
            });
    } else {
        // element[0].style.top = '0';
        // element_header[0].style.backgroundColor = "#hsl(0deg 0% 100% / 75%)";
        element[0].style.backgroundColor = "rgba(0, 0, 204, 1)";
        document.querySelectorAll(".subnavbtn, .subnavbtn-b").forEach(element => {
            element.classList.remove("black-border");
          });
        subnavbtn_jsArray.forEach(element => {
            element.style.color = `white`;
          });
    }
}


/*-----color transition for a class, alternative------------*/
// const [red, green, blue] = [255, 255, 255]
// // const section1 = document.querySelector('.subnavbtn-b')
// const section2 = document.querySelectorAll('.subnavbtn')
// const section2Array = Array.from(section2);

// window.addEventListener('scroll', () => {
//   const y = 1 + (window.scrollY || window.pageYOffset) / 100
//   const [r, g, b] = [red/y, green/y, blue/y].map(Math.round)
// //   section1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`

//   section2Array.forEach(element => {
//   element.style.color = `rgb(${r}, ${g}, ${b})`;
// });
// })
/*-----------------------------------------------*/


// const showPageButtons = document.querySelectorAll("#page-link");
// const page = document.querySelector(".page-overlay");

// showPageButtons.forEach(function(showPageButton){
//   showPageButton.addEventListener("click", function() {
//     page.classList.add("temp");
//     setTimeout(function(){
//       page.classList.remove("temp");
//     },3000);
//   });
// })

// window.transitionToPage = function(href){
//       // page.style.transform = "translateY(0%)";
//       // page.classList.add("tempY");
//       page.style.visibility = "visible";
//       page.style.animation = "transitionIn 1s ease-in-out";
//       setTimeout(function(){
//         window.location.href = href;
//         // page.classList.remove("tempY");
//       },1000); 
// }

// document.addEventListener('DOMContentLoaded', function(event) {
//   // page.style.transform = "translateY(100%)";
//   page.style.animation = "transitionOut 1s ease-in-out";
//   // page.classList.remove("tempY");
// })


/*barba transition*/
const wipe = document.querySelector('.wipe-transition');
const TLAnim = new TimelineMax();

function delay(n) {
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n)
  })
}

barba.init({
  sync: true,
  transitions: [
    {
      async leave(){

        const done = this.async();

        TLAnim.to(wipe, {top: '0%', ease: "power2.out", duration: 0.5});

        await delay(500);
        done();
      },
      enter(){
        TLAnim
        .to(wipe, {top: '100%', ease:"power2.in", duration: 0.5})
        .set(wipe, {top: '-100%'})
      }
    }
  ]

})

/*scroll page of Y pixel*/
function scrollWin() {
  window.scrollBy(0, 600);
}

/*scroll to trigger animation for images*/
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);