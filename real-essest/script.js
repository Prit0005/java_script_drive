
// const wrapper = document.querySelector(".wrapper");
// const carousel = document.querySelector(".carousel");
// const firstCardWidth = carousel.querySelector(".card").offsetWidth;
// const arrowBtns = document.querySelectorAll(".wrapper i");
// const carouselChildrens = [...carousel.children];

// let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

// // Get the number of cards that can fit in the carousel at once
// let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// // Insert copies of the last few cards to beginning of carousel for infinite scrolling
// carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
//     carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
// });

// // Insert copies of the first few cards to end of carousel for infinite scrolling
// carouselChildrens.slice(0, cardPerView).forEach(card => {
//     carousel.insertAdjacentHTML("beforeend", card.outerHTML);
// });

// // Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
// carousel.classList.add("no-transition");
// carousel.scrollLeft = carousel.offsetWidth;
// carousel.classList.remove("no-transition");

// // Add event listeners for the arrow buttons to scroll the carousel left and right
// arrowBtns.forEach(btn => {
//     btn.addEventListener("click", () => {
//         carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
//     });
// });

// const dragStart = (e) => {
//     isDragging = true;
//     carousel.classList.add("dragging");
//     // Records the initial cursor and scroll position of the carousel
//     startX = e.pageX;
//     startScrollLeft = carousel.scrollLeft;
// }

// const dragging = (e) => {
//     if (!isDragging) return; // if isDragging is false return from here
//     // Updates the scroll position of the carousel based on the cursor movement
//     carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
// }

// const dragStop = () => {
//     isDragging = false;
//     carousel.classList.remove("dragging");
// }

// const infiniteScroll = () => {
//     // If the carousel is at the beginning, scroll to the end
//     if (carousel.scrollLeft === 0) {
//         carousel.classList.add("no-transition");
//         carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
//         carousel.classList.remove("no-transition");
//     }
//     // If the carousel is at the end, scroll to the beginning
//     else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
//         carousel.classList.add("no-transition");
//         carousel.scrollLeft = carousel.offsetWidth;
//         carousel.classList.remove("no-transition");
//     }

//     // Clear existing timeout & start autoplay if mouse is not hovering over carousel
//     clearTimeout(timeoutId);
//     if (!wrapper.matches(":hover")) autoPlay();
// }

// const autoPlay = () => {
//     if (window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
//     // Autoplay the carousel after every 2500 ms
//     timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
// }
// autoPlay();

// carousel.addEventListener("mousedown", dragStart);
// carousel.addEventListener("mousemove", dragging);
// document.addEventListener("mouseup", dragStop);
// carousel.addEventListener("scroll", infiniteScroll);
// wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
// wrapper.addEventListener("mouseleave", autoPlay);




// const wrapper1 = document.querySelector(".wrapper1");
// const carousel1 = document.querySelector(".carousel1");
// const firstCardWidth1 = carousel1.querySelector(".card").offsetWidth;
// const arrowBtns1 = document.querySelectorAll(".wrapper1 i");
// const carouselChildrens1 = [...carousel1.children];
// let isDragging1 = false, isAutoPlay1 = true, startX1, startScrollLeft1, timeoutId1;

// // Get the number of cards that can fit in the carousel at once
// let cardPerView1 = Math.round(carousel1.offsetWidth / firstCardWidth1);

// // Insert copies of the last few cards to the beginning of carousel for infinite scrolling
// carouselChildrens1.slice(-cardPerView1).reverse().forEach(card => {
//     carousel1.insertAdjacentHTML("afterbegin", card.outerHTML);
// });

// // Insert copies of the first few cards to the end of carousel for infinite scrolling
// carouselChildrens1.slice(0, cardPerView1).forEach(card => {
//     carousel1.insertAdjacentHTML("beforeend", card.outerHTML);
// });

// // Scroll the carousel at the appropriate position to hide the first few duplicate cards on Firefox
// carousel1.classList.add("no-transition");
// carousel1.scrollLeft = carousel1.offsetWidth;
// carousel1.classList.remove("no-transition");

// // Add event listeners for the arrow buttons to scroll the carousel left and right
// arrowBtns1.forEach(btn => {
//     btn.addEventListener("click", () => {
//         carousel1.scrollLeft += btn.id == "left" ? -firstCardWidth1 : firstCardWidth1;
//     });
// });

// const dragStart1 = (e) => {
//     isDragging1 = true;
//     carousel1.classList.add("dragging");
//     // Records the initial cursor and scroll position of the carousel
//     startX1 = e.pageX;
//     startScrollLeft1 = carousel1.scrollLeft;
// }

// const dragging1 = (e) => {
//     if (!isDragging1) return; // if isDragging1 is false return from here
//     // Updates the scroll position of the carousel based on the cursor movement
//     carousel1.scrollLeft = startScrollLeft1 - (e.pageX - startX1);
// }

// const dragStop1 = () => {
//     isDragging1 = false;
//     carousel1.classList.remove("dragging");
// }

// const infiniteScroll1 = () => {
//     // If the carousel is at the beginning, scroll to the end
//     if (carousel1.scrollLeft === 0) {
//         carousel1.classList.add("no-transition");
//         carousel1.scrollLeft = carousel1.scrollWidth - (2 * carousel1.offsetWidth);
//         carousel1.classList.remove("no-transition");
//     }
//     // If the carousel is at the end, scroll to the beginning
//     else if (Math.ceil(carousel1.scrollLeft) === carousel1.scrollWidth - carousel1.offsetWidth) {
//         carousel1.classList.add("no-transition");
//         carousel1.scrollLeft = carousel1.offsetWidth;
//         carousel1.classList.remove("no-transition");
//     }

//     // Clear the existing timeout & start autoplay if the mouse is not hovering over the carousel
//     clearTimeout(timeoutId1);
//     if (!wrapper1.matches(":hover")) autoPlay1();
// }

// const autoPlay1 = () => {
//     if (window.innerWidth < 800 || !isAutoPlay1) return; // Return if the window is smaller than 800 or isAutoPlay1 is false
//     // Autoplay the carousel after every 2500 ms
//     timeoutId1 = setTimeout(() => carousel1.scrollLeft += firstCardWidth1, 2500);
// }
// autoPlay1();

// carousel1.addEventListener("mousedown", dragStart1);
// carousel1.addEventListener("mousemove", dragging1);
// document.addEventListener("mouseup", dragStop1);
// carousel1.addEventListener("scroll", infiniteScroll1);
// wrapper1.addEventListener("mouseenter", () => clearTimeout(timeoutId1));
// wrapper1.addEventListener("mouseleave", autoPlay1);



// const wrapper2 = document.querySelector(".wrapper2");
// const carousel2 = document.querySelector(".carousel2");
// const firstCardWidth2 = carousel2.querySelector(".card").offsetWidth;
// const arrowBtns2 = document.querySelectorAll(".wrapper2 i");
// const carouselChildrens2 = [...carousel2.children];
// let isDragging2 = false, isAutoPlay2 = true, startX2, startScrollLeft2, timeoutId2;

// // Get the number of cards that can fit in the carousel at once
// let cardPerView2 = Math.round(carousel2.offsetWidth / firstCardWidth2);

// // Insert copies of the last few cards to the beginning of carousel for infinite scrolling
// carouselChildrens2.slice(-cardPerView2).reverse().forEach(card => {
//     carousel2.insertAdjacentHTML("afterbegin", card.outerHTML);
// });

// // Insert copies of the first few cards to the end of carousel for infinite scrolling
// carouselChildrens2.slice(0, cardPerView2).forEach(card => {
//     carousel2.insertAdjacentHTML("beforeend", card.outerHTML);
// });

// // Scroll the carousel at the appropriate position to hide the first few duplicate cards on Firefox
// carousel2.classList.add("no-transition");
// carousel2.scrollLeft = carousel2.offsetWidth;
// carousel2.classList.remove("no-transition");

// // Add event listeners for the arrow buttons to scroll the carousel left and right
// arrowBtns2.forEach(btn => {
//     btn.addEventListener("click", () => {
//         carousel2.scrollLeft += btn.id == "left" ? -firstCardWidth2 : firstCardWidth2;
//     });
// });

// const dragStart2 = (e) => {
//     isDragging2 = true;
//     carousel2.classList.add("dragging");
//     // Records the initial cursor and scroll position of the carousel
//     startX2 = e.pageX;
//     startScrollLeft2 = carousel2.scrollLeft;
// }

// const dragging2 = (e) => {
//     if (!isDragging2) return; // if isDragging2 is false return from here
//     // Updates the scroll position of the carousel based on the cursor movement
//     carousel2.scrollLeft = startScrollLeft2 - (e.pageX - startX2);
// }

// const dragStop2 = () => {
//     isDragging2 = false;
//     carousel2.classList.remove("dragging");
// }

// const infiniteScroll2 = () => {
//     // If the carousel is at the beginning, scroll to the end
//     if (carousel2.scrollLeft === 0) {
//         carousel2.classList.add("no-transition");
//         carousel2.scrollLeft = carousel2.scrollWidth - (2 * carousel2.offsetWidth);
//         carousel2.classList.remove("no-transition");
//     }
//     // If the carousel is at the end, scroll to the beginning
//     else if (Math.ceil(carousel2.scrollLeft) === carousel2.scrollWidth - carousel2.offsetWidth) {
//         carousel2.classList.add("no-transition");
//         carousel2.scrollLeft = carousel2.offsetWidth;
//         carousel2.classList.remove("no-transition");
//     }

//     // Clear the existing timeout & start autoplay if the mouse is not hovering over the carousel
//     clearTimeout(timeoutId2);
//     if (!wrapper2.matches(":hover")) autoPlay2();
// }

// const autoPlay2 = () => {
//     if (window.innerWidth < 800 || !isAutoPlay2) return; // Return if the window is smaller than 800 or isAutoPlay2 is false
//     // Autoplay the carousel after every 2500 ms
//     timeoutId2 = setTimeout(() => carousel2.scrollLeft += firstCardWidth2, 2500);
// }
// autoPlay2();

// carousel2.addEventListener("mousedown", dragStart2);
// carousel2.addEventListener("mousemove", dragging2);
// document.addEventListener("mouseup", dragStop2);
// carousel2.addEventListener("scroll", infiniteScroll2);
// wrapper2.addEventListener("mouseenter", () => clearTimeout(timeoutId2));
// wrapper2.addEventListener("mouseleave", autoPlay2);

function setupCarousel(wrapperSelector, carouselSelector) {
    const wrapper = document.querySelector(wrapperSelector);
    const carousel = document.querySelector(carouselSelector);
    const firstCardWidth = carousel.querySelector(".card").offsetWidth;
    const arrowBtns = document.querySelectorAll(`${wrapperSelector} i`);
    const carouselChildrens = [...carousel.children];

    let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

    let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

    carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
        carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
    });

    carouselChildrens.slice(0, cardPerView).forEach(card => {
        carousel.insertAdjacentHTML("beforeend", card.outerHTML);
    });

    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");

    arrowBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
        });
    });

    const dragStart = (e) => {
        isDragging = true;
        carousel.classList.add("dragging");
        startX = e.pageX;
        startScrollLeft = carousel.scrollLeft;
    };

    const dragging = (e) => {
        if (!isDragging) return;
        carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    };

    const dragStop = () => {
        isDragging = false;
        carousel.classList.remove("dragging");
    };

    const infiniteScroll = () => {
        if (carousel.scrollLeft === 0) {
            carousel.classList.add("no-transition");
            carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
            carousel.classList.remove("no-transition");
        } else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
            carousel.classList.add("no-transition");
            carousel.scrollLeft = carousel.offsetWidth;
            carousel.classList.remove("no-transition");
        }

        clearTimeout(timeoutId);
        if (!wrapper.matches(":hover")) autoPlay();
    };

    const autoPlay = () => {
        if (window.innerWidth < 800 || !isAutoPlay) return;
        timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
    };

    autoPlay();

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
    carousel.addEventListener("scroll", infiniteScroll);
    wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
    wrapper.addEventListener("mouseleave", autoPlay);
}

// Initialize carousels
setupCarousel(".wrapper", ".carousel");
setupCarousel(".wrapper1", ".carousel1");
setupCarousel(".wrapper2", ".carousel2");
