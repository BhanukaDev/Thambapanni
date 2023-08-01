let cname = document.getElementById("card_name");
let address = document.getElementById("address");
let email = document.getElementById("email");
let cnum = document.getElementById("card_number");
let cexpire = document.getElementById("expiry_date");
let cvv = document.getElementById("cvv");
let ctype = document.getElementById("card_type");

// Function to display hotel review information on the reserve.html page
function displayHotelInfo() {
  // Get the stored hotel information from sessionStorage
  const storedHotelInfo = sessionStorage.getItem("reserveHotel");

  // Parse the stored hotel information back to an object
  const hotelInfo = JSON.parse(storedHotelInfo);

  // Check if hotelInfo is null or undefined
  if (!hotelInfo) {
    console.error("Hotel information not found in sessionStorage.");
    return;
  }

  // Access the necessary HTML elements and set their content accordingly
  document.getElementById("check_in").textContent = hotelInfo.check_in;
  document.getElementById("check_out").textContent = hotelInfo.check_out;
  document.getElementById("destinationName").textContent = hotelInfo.topicH;
  document.getElementById("adult_no").textContent = hotelInfo.no_of_adults;
  document.getElementById("children_no").textContent = hotelInfo.no_of_children;
  document.getElementById("Totdays").textContent = hotelInfo.no_of_days;
  document.getElementById("totrooms").textContent = hotelInfo.no_of_rooms;
  document.getElementById("tag").textContent = hotelInfo.hot_tag;

  let total_rprice=hotelInfo.roomprice;
  let total_tax=hotelInfo.taxfee;
  let total_cost =hotelInfo.fullcost;

  document.getElementById("final_tot").textContent = total_rprice.toLocaleString("en-US");
  document.getElementById("final_hand").textContent = total_tax.toLocaleString("en-US");
  document.getElementById("fcost").textContent=total_cost.toLocaleString("en-US");

  let room1det=hotelInfo.d1; // Room 1 details
  let room2det=hotelInfo.d2; // room 2 details
  let room3det=hotelInfo.d3; // Room 3 details
  let room4det=hotelInfo.d4; // Room 4 details

  // Checks whether the variables are not empty. If not, display the values.
  if (room1det.length != 0) {
    document.getElementById("room1Details").textContent = room1det+" | ";
  }
  if (room2det.length != 0) {
    document.getElementById("room2Details").textContent = room2det+" | ";
  }
  if (room3det.length != 0) {
    document.getElementById("room3Details").textContent = room3det+" | ";
  }
  if (room4det.length != 0) {
    document.getElementById("room4Details").textContent = room4det+" | ";
  }

  // Set the pattern to allow only numbers (0-9) for the CVV
  cnum.pattern = "[0-9]*";
  // Set the pattern to allow only numbers (0-9) for the CVV
  cvv.pattern = "[0-9]*";
}

// UnHide function
function unHide(element){
  let w = document.getElementById(element);
    w.style='display:block';
}
// Hide function
function hide(element){
  let u = document.getElementById(element);
    u.style='display:none';
}

document.addEventListener('DOMContentLoaded', function () {
  // Call the function to display hotel information on page load
  displayHotelInfo();

  let proceedBtn = document.getElementById("proceed");
  let submitBtn = document.getElementById("submitBtn");

  proceedBtn.addEventListener('click', function () {
    let cont = document.getElementById("con");
    cont.classList.add("move");
    unHide("c1");
  });

  submitBtn.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission for demonstration purposes



    // Validation checks for each input field
    if (cname.value === "") {
      unHide("cardNameError");
    } else {
      hide("cardNameError");
    }

    if (address.value === "") {
      unHide("addressError");
    } else {
      hide("addressError");
    }

    if (email.value === "" || !email.value.includes("@") || !email.value.includes(".com")) {
      unHide("emailError");
    } else {
      hide("emailError");
    }

    if (cnum.value === "" || cnum.value.length < 12) {
      unHide("cardNumberError");
    } else {
      hide("cardNumberError");
    }

    if (cexpire.value === "") {
      unHide("cardExpiryError");
    } else {
      hide("cardExpiryError");
    }

    if (cvv.value === "" || cvv.value.length < 3) {
      unHide("cvvError");
    } else {
      hide("cvvError");
    }

    if (ctype.value === "") {
      unHide("cardTypeError");
    } else {
      hide("cardTypeError");
    }
    // If there are no errors, display the popup
    if (!hasErrors()) {
      unHide("popup");}
  });

  function hasErrors() {
    // Perform your validation checks here.
    // Return true if there are any errors, otherwise, return false.
  
    // For example:
    // Check if any of the error elements are visible (displayed) after validation.
    // If any error message is visible, return true (indicating errors).
    if (document.getElementById("cardNameError").style.display === "block" ||
        document.getElementById("addressError").style.display === "block" ||
        document.getElementById("emailError").style.display === "block" ||
        document.getElementById("cardNumberError").style.display === "block" ||
        document.getElementById("cardExpiryError").style.display === "block" ||
        document.getElementById("cvvError").style.display === "block" ||
        document.getElementById("cardTypeError").style.display === "block") {
      return true;
    }
  
    // Return false if no errors are found.
    return false;
  }

  // Add event listeners to input fields to hide error messages on user input
  cname.addEventListener('input', function () {
    hide("cardNameError");
  });

  address.addEventListener('input', function () {
    hide("addressError");
  });

  email.addEventListener('input', function () {
    hide("emailError");
  });

  cnum.addEventListener('input', function () {
    this.value = this.value.replace(/\D/g, ''); // Replace non-numeric characters
    hide("cardNumberError");
  });

  cexpire.addEventListener('input', function () {
    hide("cardExpiryError");
  });

  cvv.addEventListener('input', function () {
    this.value = this.value.replace(/\D/g, ''); // Replace non-numeric characters
    hide("cvvError");
  });

  ctype.addEventListener('input', function () {
    hide("cardTypeError");
  });
});