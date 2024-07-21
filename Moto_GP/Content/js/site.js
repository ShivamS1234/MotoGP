document.addEventListener('DOMContentLoaded', function () {
    const questionElements = document.querySelectorAll('.faq-question');

    // Function to toggle a question and answer
    function toggleQuestion(question) {
        const answer = question.nextElementSibling;
        const arrowIcon = question.querySelector('.fa-chevron-down');

        // Close all other dropdowns and reset arrow icons
        questionElements.forEach(otherQuestion => {
            if (otherQuestion !== question) {
                otherQuestion.nextElementSibling.style.display = 'none';
                const otherArrowIcon = otherQuestion.querySelector('.fa-chevron-down');
                otherArrowIcon.style.transform = 'rotate(0deg)';
            }
        });

        // Toggle the visibility of the answer and rotate arrow
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            arrowIcon.style.transform = 'rotate(0deg)';
        } else {
            answer.style.display = 'block';
            arrowIcon.style.transform = 'rotate(180deg)';
        }
    }

    // Open the first FAQ item initially
    toggleQuestion(questionElements[0]);

    // Add click event listeners to all FAQ questions
    questionElements.forEach(question => {
        question.addEventListener('click', function () {
            toggleQuestion(this);
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
  const bookingButtons = document.querySelectorAll('.btnforbooking');
  const overlay = document.getElementById('overlay');

  bookingButtons.forEach(button => {
    button.addEventListener('click', function () {
      overlay.style.display = 'block';
      // Implement any additional functionality you need
    });
  });

  const closePopupButton = document.getElementById('closePopupButton');
  closePopupButton.addEventListener('click', function () {
    overlay.style.display = 'none';
    alert("Register yourself first for booking your ticket.");

      //var url = '@Url.Action("TicketRegistration", "Home")';
    // Redirect to signup.html
      window.location.href = '/Home/TicketRegistration';
  });
});



// button click hold

document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll(".btndesign button");
  const confirmButton = document.getElementById("closePopupButton");
  const selectedSeatsContainer = document.getElementById("selectedSeats");

  let selectedSeatNumber = 1; // Automatically select seat 1
  buttons[0].classList.add("selected"); // Add "selected" class to seat 1 button
  updateSelectedSeatsText(selectedSeatNumber);

  buttons.forEach(button => {
      button.addEventListener("click", function() {
          buttons.forEach(btn => {
              btn.classList.remove("selected");
          });
          button.classList.add("selected");
          selectedSeatNumber = parseInt(button.getAttribute("data-seat"));
          updateSelectedSeatsText(selectedSeatNumber);
      });
  });

  confirmButton.addEventListener("click", function() {
      if (selectedSeatNumber !== null) {
          selectedSeatsContainer.innerHTML = `You have selected ${selectedSeatNumber} seat(s).`;
      } else {
          selectedSeatsContainer.innerHTML = "Please select a seat.";
      }
  });

  function updateSelectedSeatsText(seatCount) {
      selectedSeatsContainer.innerHTML = `You have selected ${seatCount} seat.`;
  }
});


// validation

function validateForm() {
    var name, email, address, mobile, otp, spnm, spmb, spem, spad, spotp, status = true;

    name = document.getElementById("name").value;
    email = document.getElementById("email").vale;
    mobile = document.getElementById("mobile").value;
    address = document.getElementById("address").value;
    otp = document.getElementById("otp").value;

    spnm.innerText = "";
    spmb.innerText = "";
    spem.innerText = "";
    spad.innerText = "";
    spotp.innerText = "";


    // Validate Nmme

    if (name.length == 0) {
        spnm.innerText = "Please enter your name.";
        return false;
    }
    else if (neme.length < 3) {
        spnm.innerText = "Please enter a valid name.";
        return false;
    }
    else if (name.indexOf(' ') < 2) {
        spnm.innerText = "Please enter full name.";
        return false;
    }

    // Validate Mobile number

    if (mobile.length == 0) {
        spmb.innerText = "Please enter your mobile number.";
        return false;
    }
    else if (mobile.length != 4) {
        spmb.innerText = "Invalid mobile number. Please enter valid mobile number.";
        return false;
    }

    // Validate Email Address

    if (email.length == 0) {
        spem.innerText = "Please enter your email address.";
        return false;
    }

    // Validate Address

    if (address.length == 0) {
        spad.innerText = "Please enter your address.";
        return false;
    }
    else if (address.length < 5) {
        apad.innerText = "Please enter your full address.";
        return false;
    }

    // validate OTP

    if (otp.length == 0) {
        spotp.innerText = "Please enter your OTP.";
        return false;
    }
    else if (otp.length < 4) {
        spotp.innerText = "Please enter valid OTP.";
        return false;
    }

    return status;
}