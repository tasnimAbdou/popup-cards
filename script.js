var index = 0;
var timer;

slider();
function slider() {
    console.log(index)
    let slide = document.getElementsByClassName("img");
    let dot = document.getElementsByClassName("dot");
    for (let i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }
    for (i = 0; i < dot.length; i++) {
        dot[i].className = dot[i].className.replace(" active", "");
    }
    index++;
    if (index > slide.length) { index = 1 }
    slide[index - 1].style.display = "block";
    slide[index - 1].style.color = "red";

    dot[index - 1].className += " active";
    timer = setTimeout(slider, 3000);
}
function prev(n) {
    stopTransition();
    index += n;
    console.log(index);
    slider();
}

function selectSlide(n) {
    index = n;
    console.log(index)
    slider();
}
function stopTransition() {
    console.log("transition stop")
    clearTimeout(timer)
}