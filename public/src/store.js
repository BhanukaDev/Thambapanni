let Container = [...document.querySelectorAll(".container1")];
let nxtBtn = [...document.querySelectorAll(".nxt-btn")];
let preBtn = [...document.querySelectorAll(".pre-btn")];

Container.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  // Scroll when clicking next and previous buttons
  nxtBtn[i].addEventListener("mouseenter" || "click", () => {
    item.scrollLeft += containerWidth;
  });

  preBtn[i].addEventListener("mouseenter" || "click", () => {
    item.scrollLeft -= containerWidth;
  });
});

// Function to show hotel information
function showHotelInformation(event, button) {
    event.preventDefault(); // Prevent the default link behavior

    // Get the container element that contains the clicked button
    const container = button.closest(".tiles");

    // Get the relevant hotel information from the container
    const hotelInfo = {
        tag: container.querySelector(".tag").innerText,
        topic: container.querySelector(".topic").innerText,
        description: container.querySelector(".description").innerText,
        ratings: container.querySelector(".ratings").innerText,
        price: container.querySelector(".price").innerText,
        actualprice: container.querySelector(".hiddenprice").innerText,
        imageSrc: container.querySelector(".d_images").src
    };

    // Check if the tag is "couples" and update the guest and room count accordingly
    if (hotelInfo.tag === "couples") {
        // Set the number of adults to 2
        hotelInfo.adults = 2;
        
        // Set the number of children to 0
        hotelInfo.children = 0;
        
        // Set the number of rooms to 1
        hotelInfo.rooms = 1;
    }

    // Store the hotel information in sessionStorage for access on the next page
    sessionStorage.setItem("selectedHotel", JSON.stringify(hotelInfo));

    // Navigate to the hotel_review.html page
    window.location.href = "hotel_review.html";
}


