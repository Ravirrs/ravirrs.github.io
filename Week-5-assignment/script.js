let hexCodeButton = document.getElementById("btn");
let body = document.getElementById("overview");
let rgbCodeButton = document.getElementById("btn1");
let hslCodeButton = document.getElementById("btn2");
let gradientButton = document.getElementById("btn3");
let colorNameLabel = document.getElementById("color-name");

//hex code
hexCodeButton.addEventListener("click", function() {
    body.style.background = "none";
    const hex = "abcdef0123456789";
    let hexCode = "";
    for (let i = 0; i < 6; i++) {
        hexCode += hex[Math.floor(Math.random() * hex.length)];
    }
    console.log("Hex Code Generated = #"+hexCode); //string concatenation
    body.style.backgroundColor = "#"+hexCode;
    updateColorDetails("#"+hexCode);
});

//rgb code
rgbCodeButton.addEventListener("click", function() {
    body.style.background = "none";
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    console.log("RGB Code Generated = rgb("+r+", "+g+", "+b+")");
    body.style.backgroundColor = "rgb("+r+", "+g+", "+b+")";
    updateColorDetails("rgb("+r+", "+g+", "+b+")");
});

//hsl code
hslCodeButton.addEventListener("click", function() {
    body.style.background = "none";
    let h = Math.floor(Math.random() * 361);
    let s = Math.floor(Math.random() * 101);
    let l = Math.floor(Math.random() * 101);
    console.log("HSL Code Generated = hsl("+h+", "+s+"%, "+l+"%)");
    body.style.backgroundColor = "hsl("+h+", "+s+"%, "+l+"%)";
    updateColorDetails("hsl("+h+", "+s+"%, "+l+"%)");
});

//gradient code
gradientButton.addEventListener("click", function() {
    const gradientDirection = ["to right", "to left", "to top", "to bottom","to top right", "to top left", "to bottom right", "to bottom left"];
    let gradDirection = gradientDirection[Math.floor(Math.random() * gradientDirection.length)];
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let r1 = Math.floor(Math.random() * 256);
    let g1 = Math.floor(Math.random() * 256);
    let b1 = Math.floor(Math.random() * 256);
    console.log("Gradient Code Generated = rgb("+r+", "+g+", "+b+"), rgb("+r1+", "+g1+", "+b1+") "+gradDirection);
    body.style.background = "linear-gradient("+gradDirection+", rgb("+r+", "+g+", "+b+") 0%, rgb("+r1+", "+g1+", "+b1+") 100% )";
    updateColorDetails(("rgb("+r+", "+g+", "+b+"), rgb("+r1+", "+g1+", "+b1+") "), 1);
});

function updateColorDetails(col, t = 0) {
    colorNameLabel.classList.add("border-white");
    colorNameLabel.classList.add("hover:bg-yellow-600");
    colorNameLabel.innerHTML = col;
    colorNameLabel.classList.remove("bg-gray-200");
    colorNameLabel.classList.add("bg-yellow-500");
    colorNameLabel.classList.remove("w-[20rem]");
    colorNameLabel.classList.add("w-[15rem]");
    if (t != 0) { 
        // if gradient is clicked
        colorNameLabel.classList.remove("w-[15rem]");
        colorNameLabel.classList.add("w-[20rem]");
    }
}