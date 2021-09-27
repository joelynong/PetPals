 // When the user clicks on the button, scroll to the top of the document

 mybutton = document.getElementById("myBtn1");
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }

    function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }


// When the user scrolls down 20px from the top of the document, show the button

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

document.querySelectorAll(".story-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("change");
    btn.nextElementSibling.classList.toggle("change");
  });
});



//function topFunction() {
//  document.body.scrollTop = 0;
//
//  document.documentElement.scrollTop = 0;
//}

