document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
  
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
  
      });
    });
  
  });
  // variables
  var btn = document.getElementById('submit');
 
  // emailInputFun gets the email value (Comes in as STRING value)
  btn.addEventListener('click', emailInputFun);

  function emailInputFun() {
   const ResultA = document.getElementById("emailInput").value;
   console.log(typeof ResultA);
   console.log(ResultA);
  }

  // passInputFun() gets the password value (Comes in as STRING value but we convert it to int) 
  btn.addEventListener('click', passInputFun);

  function passInputFun() {
    const ResultB = document.getElementById("data").value;
    // console.log( typeof parseInt(ResultB));
    console.log( typeof ResultB);
    console.log(ResultB);

  }

      // thisstops page from refreshing upon clicking SUBMIT (DELETE WHEN NO LONGER NEEDED)
      btn.addEventListener("click", function(event){
        event.preventDefault()
      });


