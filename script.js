var slider1 = document.getElementById("sliderRange1");
var output1 = document.getElementById("value1");
var slider2 = document.getElementById("sliderRange2");
var output2 = document.getElementById("value2");
var slider3 = document.getElementById("sliderRange3");
var output3 = document.getElementById("value3");
var slider4 = document.getElementById("sliderRange4");
var output4 = document.getElementById("value4");
var slider5 = document.getElementById("sliderRange5");
var output5 = document.getElementById("value5");
var slider6 = document.getElementById("sliderRange6");
var output6 = document.getElementById("value6");

output1.innerHTML = slider1.value;
output2.innerHTML = slider2.value;
output3.innerHTML = slider3.value;
output4.innerHTML = slider4.value;
output5.innerHTML = slider5.value;
output6.innerHTML = slider6.value;

slider1.oninput = function() {
    output1.innerHTML = slider1.value;
    document.body.style.setProperty('--slider1', slider1.value);
}
slider2.oninput = function() {
    output2.innerHTML = slider2.value;
    document.body.style.setProperty('--slider2', slider2.value);
}
slider3.oninput = function() {
    output3.innerHTML = slider3.value;
    document.body.style.setProperty('--slider3', slider3.value);
}
slider4.oninput = function() {
    output4.innerHTML = slider4.value;
    document.body.style.setProperty('--slider4', slider4.value);
}
slider5.oninput = function() {
    output5.innerHTML = slider5.value;
    document.body.style.setProperty('--slider5', slider5.value);
}
slider6.oninput = function() {
    output6.innerHTML = slider6.value;
    document.body.style.setProperty('--slider6', slider6.value);
}
