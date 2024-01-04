let sliderimg = document.querySelectorAll(".slider-img")
console.log(sliderimg);
let count = 0;
function slider() {
    for (let index = 0; index < sliderimg.length; index++) {
        sliderimg[index].style.display = "none";
    }
    if (count >= sliderimg.length) {
        count = 0;
    }
    sliderimg[count].style.display = "block";
    count++
    console.log(count);
    setTimeout(slider,2000)
}
slider();
