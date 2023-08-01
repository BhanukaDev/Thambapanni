let days =1; // Total number of rooms
let rtot_ad_ch; // Total count of the adults and children

let valuesOfdeluxe1; 
let valuesOfdeluxe2 ;
let valuesOfdeluxe3;
let valuesOfdeluxe4;

let Deluxe_handInt;
let pDeluxe_handInt;
let Deluxe3_handInt;
let Deluxe4_handInt;

let d1r=0; 
let d2r=0;
let d3r=0;
let d4r=0;


let final_d1=0;
let final_d2=0;
let final_d3=0;
let final_d4=0;

let final_hand_d1=0;
let final_hand_d2=0;
let final_hand_d3=0;
let final_hand_d4=0;

let total_roomPrice;
let total_handlingFee;
let tot_rooms=0;
let full_cost;

let checkInInput=0;
let checkOutInput=0;

let cap1=document.getElementById("c1");
let cap2=document.getElementById("c2");
let cap3=document.getElementById("c3");
let cap4=document.getElementById("c4");


let no_adults; // Total number of adults
let no_children; // Total number of children

let Htag=""; // Hotel tag
let Htopic=""; // Hotel name

document.addEventListener("DOMContentLoaded", function() {
  console.log(checkOutInput);
    checkInInput = document.getElementById("check-in");
    checkOutInput = document.getElementById("check-out");

    // Function to update the minimum check-out date based on the selected check-in date
    function updateCheck_out() {
      let currentDate = new Date(checkInInput.value);
      let minCheckOutDate = new Date(currentDate);
      minCheckOutDate.setDate(minCheckOutDate.getDate() + 1);
      let check_outDate = minCheckOutDate.toISOString().slice(0, 10);
      checkOutInput.min = check_outDate;
    }

    // Set check-in date as the current day
    let today = new Date();
    let todayNew = today.toISOString().slice(0, 10);
    checkInInput.value = todayNew;
    checkInInput.min = todayNew; // Set the minimum date for check-in

    // When the check-in date is changed, update the minimum check-out date
    checkInInput.addEventListener("change", updateCheck_out);

    // When the page loads, set the initial minimum check-out date
    updateCheck_out();
  });

// Function to display hotel information on the hotel_review.html page
function displayHotelInfo() {
  // Get the stored hotel information from sessionStorage
  const storedHotelInfo = sessionStorage.getItem("selectedHotel");

  // Parse the stored hotel information back to an object
  const hotelInfo = JSON.parse(storedHotelInfo);

  // Check if hotelInfo is null or undefined
  if (!hotelInfo) {
    console.error("Hotel information not found in sessionStorage.");
    return;
  }

  // Store the hotelInfo in the global variable
  window.entire= hotelInfo;

  // Access the necessary HTML elements and set their content accordingly
  document.getElementById("hotelName").textContent = hotelInfo.topic;
  document.getElementById("hotelTag").textContent = hotelInfo.tag;
  document.getElementById("hotelDescription").textContent = hotelInfo.description;
  document.getElementById("hotelRatings").textContent = hotelInfo.ratings;
  document.getElementById("hotelPrice").textContent = hotelInfo.price;
  // Set the hotel name in the "Destination" label inside the form
  document.getElementById("destinationName").textContent = hotelInfo.topic;

  Htag=hotelInfo.tag;
  Htopic = hotelInfo.topic;

  // Set the image source
  const hotelImage = document.getElementById("hotelImage");
  hotelImage.src = hotelInfo.imageSrc; // Set the src attribute
  hotelImage.alt = hotelInfo.topic; // Set the alt attribute

  // Set the hotel price inside the table
  document.getElementById("roomPrice").textContent = hotelInfo.price;

  // Remove previously applied styles
  document.getElementById("hotelTag").classList.remove("couples-tag", "friends-tag", "family-tag");

 if(hotelInfo.tag ==="couples"){
  // Apply styles for "couples"
  document.getElementById("hotelTag").classList.add("couples-tag");
  // Creates classes for all the table headers
  classCreator('th',"couples_head");
  classCreator('td',"couples_des");
 }
 else if(hotelInfo.tag==="Friends"){
  // Apply styles for "friends"
  document.getElementById("hotelTag").classList.add("friends-tag");
  // Creates classes for all the table headers
  classCreator('th',"friends_head");
  classCreator('td',"friends_des");
 }
 else if(hotelInfo.tag==="Family"){
  // Apply styles for "family"
  document.getElementById("hotelTag").classList.add("family-tag");
 }
 

    // Disable the plus button for adults if the tag is "couples" and the current value is at the maximum
    if (hotelInfo.tag === "couples") {
      document.getElementById("adult_no").max = 2
      document.getElementById("adult_no").min = 2
    }
  

    // Disable the plus button for children if the tag is "couples" and the current value is at the maximum
    if (hotelInfo.tag === "couples") {
      document.getElementById("children_no").max = 0
      document.getElementById("children_no").min = 0
    }
  

    // Disable the plus button for rooms if the tag is "couples" and the current value is at the maximum
    if (hotelInfo.tag === "couples") {
      document.getElementById("room_no").max = 1
      document.getElementById("room_no").min = 1; // Set the minimum value for rooms
    }

    // Set deluxe room price
    const actualPriceInt = parseInt(hotelInfo.actualprice);


    // Calculates the prices of the rooms.
   const pDeluxeInt=priceCal(actualPriceInt,0.3);
   const Deluxe3Int=priceCal(actualPriceInt,0.6);
   const Deluxe4Int=priceCal(actualPriceInt,0.8);
 
   // Convert the actual price to a localized string format
   let actualPriceloc = actualPriceInt.toLocaleString("en-US");
   let pDeluxe = pDeluxeInt.toLocaleString("en-US"); 
   let Deluxe3 = Deluxe3Int.toLocaleString("en-US"); 
   let Deluxe4 = Deluxe4Int.toLocaleString("en-US"); 

   // Set the localized price as the text content of the element
   stringFlush("roomPrice",actualPriceloc);
    stringFlush("pDroomPrice",pDeluxe);
    stringFlush("d3roomPrice",Deluxe3);
    stringFlush("d4roomPrice",Deluxe4);

    //Calculates the handling fee of the rooms.
    Deluxe_handInt = hFeeCal(actualPriceInt);
    pDeluxe_handInt = hFeeCal(pDeluxeInt);
    Deluxe3_handInt = hFeeCal(Deluxe3Int);
    Deluxe4_handInt = hFeeCal(Deluxe4Int);

    // Convert the actual Handling fee to a localized string format
    let Deluxe_hand = Deluxe_handInt.toLocaleString("en-US");
    let pDeluxe_hand = pDeluxe_handInt.toLocaleString("en-US"); 
    let Deluxe3_hand = Deluxe3_handInt.toLocaleString("en-US"); 
    let Deluxe4_hand = Deluxe4_handInt.toLocaleString("en-US");

    // Set the localized handling fee as the text content of the element
    stringFlush("dhandlingFee",Deluxe_hand);
    stringFlush("d2handlingFee",pDeluxe_hand);
    stringFlush("d3handlingFee",Deluxe3_hand);
    stringFlush("d4handlingFee",Deluxe4_hand);
    
    // Adding the prices of the rooms to an array
    valuesOfdeluxe1 = room_options(actualPriceInt);
    valuesOfdeluxe2 = room_options(pDeluxeInt);
    valuesOfdeluxe3 = room_options(Deluxe3Int);
    valuesOfdeluxe4 = room_options(Deluxe4Int);

  // Formatting the values to add to select option of the table
    let locvaluesd1=localizeArray(valuesOfdeluxe1);
     let locvaluesd2=localizeArray(valuesOfdeluxe2);
     let locvaluesd3=localizeArray(valuesOfdeluxe3);
     let locvaluesd4=localizeArray(valuesOfdeluxe4);

   // Add the lists to the options in the table.
    addToSelect("d1options",locvaluesd1);
    addToSelect("d2options",locvaluesd2);
    addToSelect("d3options",locvaluesd3);
    addToSelect("d4options",locvaluesd4);


}
// To display the alert message when increasing or decreasing numbers.
function showAlert(message,place) {
    const alertDiv = document.querySelector(place);
    const alertText = alertDiv.querySelector("p");
    alertText.textContent = message;
  
    alertDiv.style.display = "block";
    setTimeout(function() {
      alertDiv.style.opacity = "0";
      setTimeout(function() {
        alertDiv.style.display = "none";
        alertDiv.style.opacity = "1";
      }, 1500);
    }, 4000); // Show the alert for 4 seconds
  }
  
  function plus() {
    let targetId = this.getAttribute("data-target");
    let input = document.getElementById(targetId);
    let num = +input.value; // Convert from string to number

    // Get the maximum value for the input
    let maxVal = parseInt(input.max);

    // Check if the current value is less than the maximum value
    if (num < maxVal) {
      num++;
      input.value = num;
    } else {
      showAlert(`Cannot increase the value beyond the maximum limit of ${maxVal}.`,".alert");
    }
  }

  function minus() {
    let targetId = this.getAttribute("data-target");
    let input = document.getElementById(targetId);
    let num = +input.value; // Convert from string to number

    // Get the minimum value for the input
    let minVal = parseInt(input.min);

    // Check if the current value is greater than the minimum value
    if (num > minVal) {
      num--;
      input.value = num;
    } else {
      showAlert(`Cannot decrease the value beyond the minimum limit of ${minVal}.`,".alert");
    }
  }

  let minusButtons = document.getElementsByClassName("minus");
  let plusButtons = document.getElementsByClassName("plus");

  for (let button of minusButtons) {
    button.addEventListener("click", minus);
  }

  for (let button of plusButtons) {
    button.addEventListener("click", plus);
  }


  // Close button in the alert message
  var close = document.getElementsByClassName("closebtn");
  var i;

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.opacity = "0";
      setTimeout(function() {
        div.style.display = "none";
        div.style.opacity = "1";
      }, 600);
    };
  }

  function totDays(date1, date2) {
    const oneDay = 1000 * 60 * 60 * 24; // Milliseconds in a day
    const diffInMs = Math.abs(date2 - date1);
    return Math.ceil(diffInMs / oneDay);
  }

  // Function to handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    unHide("dateOutput");

    let checkInDate = new Date(document.getElementById("check-in").value); // Get the checkin date
    let checkOutDate = new Date(document.getElementById("check-out").value); // Get the checkout date

    days = totDays(checkInDate, checkOutDate);
    console.log("Number of days:", days);
    document.getElementById("Totdays").innerHTML = days;
    
    // Get the total of adults, children and rooms.
    let no_rooms= document.getElementById("room_no").value;
    no_adults=document.getElementById("adult_no").value;
    no_children=document.getElementById("children_no").value;
    let tot_adult_child = +no_adults + (no_children/2)+0.1;
    rtot_ad_ch = Math.round(tot_adult_child); 
    
// This loop checks and displays the contents in the table. 

      if (cap1 && rtot_ad_ch ==1){
        hideTable("deluxe2");
        hideTable("deluxe3");
        hideTable("deluxe4");
        unHideTable("deluxe1");
      }
      else if(cap2 && rtot_ad_ch ==2){
        unHideTable("deluxe1");
        unHideTable("deluxe2");
        hideTable("deluxe3");
        hideTable("deluxe4");
      }
      else if (cap3 && rtot_ad_ch ==3){
        unHideTable("deluxe1");
        unHideTable("deluxe2");
        unHideTable("deluxe3");
        hideTable("deluxe4");

      }
      else if (cap4 && rtot_ad_ch ==4){
        unHideTable("deluxe1");
        unHideTable("deluxe2");
        unHideTable("deluxe4");
        hideTable("deluxe3");

      }
      else{
        unHideTable("deluxe1");
        unHideTable("deluxe2");
        unHideTable("deluxe3");
        unHideTable("deluxe4");

      }
      scrollToBottom();
  }


  // To hide the table rows
  function hideTable(variable){
    var w = document.getElementById(variable);
    w.style='visibility:collapse';
  }

  // To unhide the table rows
  function unHideTable(variable){
    var v = document.getElementById(variable);
    v.style='visibility:visible';
  }
  
// To hide the total no of days div.
  function Hide(variable) {
    var y = document.getElementById(variable);
    if(y!=null){
    y.style.display = "none";
    let days=0;
    document.getElementById("Totdays").innerHTML = days;
    }
  }
// To unhide the total no of days div.
  function unHide(variable) {
    var x = document.getElementById(variable);
    if(x!=null){
    x.style.display = "block";
    }
  }

  // Function to handle form reset
  function handleReset() {
    Hide("dateOutput"); // Hide the date output when the form is reset
    unHideTable("deluxe1");
    unHideTable("deluxe2");
    unHideTable("deluxe3");
    unHideTable("deluxe4");
    hideTable("total");

  }

  // A function to calculate the prices of the rooms
  function priceCal(price,multi){
   let sum =price + price*multi;
    let rsum= Math.round(sum); 
    return rsum;
    }

  // Function to calculate the handling fee
  function hFeeCal(price){
    let sum = price*0.01;
    let rsum= Math.round(sum); 
    return rsum;
  }

  // Function to calculate and store the room data in an array.
  function room_options(room) {
    const results=[];
    for (let i = 0; i <= 5; i++) {
        results.push(i*room);
    }
    return results;
}

  // Function to convert the prices of an array into localized string
  function localizeArray(value){
    let locarray=[];
    for(let i=0; i<value.length; i++){
      locarray.push(i+"  LKR "+ value[i].toLocaleString("en-US"));
    }
      return locarray;
    }

    // A function to flush the string values to the html page.
    function stringFlush(id,string){
      document.getElementById(id).textContent = `LKR ${string}`;
    }

    // Function to add the localized array values to the select optios.
    function addToSelect(option, myobj) {
      var select = document.getElementById(option);
      for (index in myobj) {
        select.options[select.options.length] = new Option(myobj[index], index);
      }
    
      // Add onchange event to the select element
      select.onchange = function () {
        getOption(option);
      }
    }
    

    function getOption(a1) {
      const index = document.getElementById(a1).selectedIndex;
      if(a1=="d1options"){
        final_d1 =valuesOfdeluxe1[index];
        final_hand_d1=Deluxe_handInt*index;
        d1r= index;
       
      }
      else if(a1=="d2options"){
        final_d2 =valuesOfdeluxe2[index];
        final_hand_d2=pDeluxe_handInt*index;
        d2r=index;
        
      }
      else if(a1=="d3options"){
        final_d3 =valuesOfdeluxe3[index];
        final_hand_d3=Deluxe3_handInt*index;
        d3r=index;
        
      }
      else if(a1=="d4options"){
        final_d4 =valuesOfdeluxe4[index];
        final_hand_d4=Deluxe4_handInt*index;
        d4r=index;
        
      }
      // The total of the rooms
      total_roomPrice = (final_d1+final_d2+final_d3+final_d4) *days;
      total_handlingFee = (final_hand_d1+final_hand_d2+final_hand_d3+final_hand_d4)*days;
      tot_rooms = d1r+d2r+d3r+d4r;
      full_cost = total_roomPrice+total_handlingFee;

      getRooms();

      document.getElementById("final_tot").textContent = `LKR ${total_roomPrice.toLocaleString("en-US")}`;
      document.getElementById("final_hand").textContent = `LKR ${total_handlingFee.toLocaleString("en-US")}`;
      document.getElementById("totrooms").textContent = tot_rooms;
      if (total_roomPrice !=0){
        unHideTable("total");
      }
      else{
        hideTable("total");
      }
    }
    



let delroom1="";
let delroom2="";
let delroom3="";
let delroom4="";
    
        //Function to get the room names.
        function getRooms(){
              if(d1r!=0){
                delroom1=(`Deluxe room * ${d1r}`); // Room information of Deluxe1
                console.log(delroom1);
              }
              if (d2r!=0){
                delroom2=(`Superior Double Room * ${d2r}`); // Room information of Deluxe2
                console.log(delroom2);
              }
              if (d3r!=0){
             delroom3=(`Deluxe Twin Room * ${d3r}`); // Room information of deluxe3
                console.log(delroom3);
              }
              if (d4r!=0){
               delroom4=(`Family Suite * ${d4r}`); // Room information of deluxe4
                console.log(delroom4);
              }
        }

    //Function to create classes for elements
    function classCreator(element,tag){
    const elements = document.querySelectorAll(element);
elements.forEach((element) => {
  element.classList.add(tag);
    })
  };
  function scrollToBottom()
  {
      var height = document.body.scrollHeight;
      window.scroll(0 , height);
  }

  // Add event listener to the form for submission
  document.querySelector(".hotel_form").addEventListener("submit", handleSubmit);

  // Add event listener to the form for reset
  document.querySelector(".hotel_form").addEventListener("reset", handleReset);

  function sendHotelInfo(event) {
    event.preventDefault();
  
    // Check if at least one room is selected
    if (tot_rooms === 0) {
      showAlert("Cannot proceed because you have not selected any room.", "#r_alert");
      return;
    }
  
    // Check if check-in and check-out dates are entered
    const checkInValue = document.getElementById("check-in").value;
    const checkOutValue = document.getElementById("check-out").value;
    if (!checkInValue || !checkOutValue) {
      showAlert("Please enter both Check-in and Check-out dates.", "#r_alert");
      return;
    }
  
    // Get the relevant hotel information from the form
    const hotel_reviewInfo = {
      check_in: checkInValue,
      check_out: checkOutValue,
      topicH: Htopic,
      no_of_adults: no_adults,
      no_of_children: no_children,
      no_of_days: days,
      no_of_rooms: tot_rooms,
      roomprice: total_roomPrice,
      taxfee: total_handlingFee,
      hot_tag: Htag,
      d1:delroom1,
      d2: delroom2,
      d3: delroom3,
      d4: delroom4,
      fullcost: full_cost,
    };

  
    // Store the hotel information in sessionStorage for access on the next page
    sessionStorage.setItem("reserveHotel", JSON.stringify(hotel_reviewInfo));
  
    // Navigate to the reserve.html page
    window.location.href = "reserve.html";
  }
  
  // Add event listener to the "Reserve" button for form submission
  document.getElementById("reserve").addEventListener("click", sendHotelInfo);
  

  // Call the function to display hotel information on page load
  displayHotelInfo();