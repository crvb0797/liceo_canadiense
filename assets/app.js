/* NAVBAR */
const bt_menu = document.querySelector("#btn_menu");
const nav = document.querySelector("#nav");
const bg_menu = document.querySelector("#back_menu");

bt_menu.addEventListener("click", mostrar_menu);
bg_menu.addEventListener("click", ocultar_menu);

function mostrar_menu(){
    nav.style.right = "0px";
    bg_menu.style.display = "block"
}

function ocultar_menu(){
    nav.style.right = "-500px";
    bg_menu.style.display = "none"
}

/* Animación de contador */
const counters = document.querySelectorAll('.counter');
const speed = 500; // The lower the slower

counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;

		// Lower inc to slow and higher to slow
		const inc = target / speed;

		// Check if target is reached
		if (count < target) {
			// Add inc to count and output in counter
			counter.innerText = count + inc;
			// Call function every ms
			setTimeout(updateCount, 1);
		} else {
			counter.innerText = target;
		}
	};

	updateCount();
});

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}