
let signDemo = document.querySelector('#neonText');

let neonTextOutput = "";

let neonTextBox = document.querySelector('#textBox');

// type text or upload image
let textButton = document.querySelector('#text');
let imgButton = document.querySelector('#logo');

// font options
let fontType = document.querySelectorAll('.fontFamily');
let fonts = ["Times New Roman", "arial", "calibri", "'Edu VIC WA NT Beginner', cursive"];

signDemo.style.fontFamily = fonts[3]; //sets it to the default font at the start
//selects the color option
fontType[3].style.color = "#f620fc";
fontType[3].style.boxShadow = "0 0 0.05em #fff, 0 0 0.2em #fe05e1, 0 0 0.6em #fe05e1";


//colors
let colorChoice = document.querySelectorAll('.neonColor');
let color = ["0 0 0.05em #fff, 0 0 0.2em #fff, 0 0 0.6em #fff", "0 0 0.05em red, 0 0 0.2em red, 0 0 0.6em red", "0 0 0.05em orange, 0 0 0.2em orange, 0 0 0.6em orange", "0 0 0.05em yellow, 0 0 0.2em yellow, 0 0 0.6em yellow", "0 0 0.05em #13e033, 0 0 0.2em #13e033, 0 0 0.6em #13e033", "0 0 0.05em #00c9ff, 0 0 0.2em #00c9ff, 0 0 0.6em #00c9ff", "0 0 0.05em #fff, 0 0 0.5em #fe05e1, 0 0 0.6em #fe05e1"];
signDemo.style.textShadow = color[6];
colorChoice[6].style.boxShadow = color[6];

// background options
let bgChoice = document.querySelectorAll('.thumbnail');
// let bgImage = document.getElementById('#backgroundImg');
// console.log(bgImage);


//updates neon sign to whats in the text box.
neonTextBox.addEventListener("keyup", function () {

  //makes a new line everytime enter key is hit
  neonTextOutput = neonTextBox.value.replaceAll("\n","<br>");
  //replaces spaces with invisible character so that gaps may be used in more ways
  neonTextOutput = neonTextOutput.replaceAll(" "," ");

  //if there's no text in textbox then set demo to "neon sign" so that it's not just a blank wall
  if (neonTextOutput == "") {
    neonTextOutput = "Neon Text";
  }

  //if there are too many characters give
  if (neonTextOutput.length > 50) {
    neonTextOutput = "Warning: <br> to many characters";
  }

  //makes changes to the neon text based on the text box
  signDemo.innerHTML = neonTextOutput;
});


// when text option is selected

// text selected
textButton.addEventListener("click",  function defult() {
  imgButton.style.color = "white";
  textButton.style.color = "#f03de1";
  imgButton.style.boxShadow = "none";
  textButton.style.boxShadow = "0 0 0.05em #fff, 0 0 0.2em #fe05e1, 0 0 0.6em #fe05e1";
});
//logo selected
imgButton.addEventListener("click", function() {
  textButton.style.color = "white";
  imgButton.style.color = "#f03de1";
  textButton.style.boxShadow = "none";
  imgButton.style.boxShadow = "0 0 0.05em #fff, 0 0 0.2em #fe05e1, 0 0 0.6em #fe05e1";
});
// Default option when browser is opened
imgButton.style.color = "white";
textButton.style.color = "#f03de1";
imgButton.style.boxShadow = "none";
textButton.style.boxShadow = "0 0 0.05em #fff, 0 0 0.2em #fe05e1, 0 0 0.6em #fe05e1";


// changes font
//for every font option in HTML add click function that...
for (let i = 0; i < fontType.length; i++) {
  fontType[i].addEventListener("click", function () {
    //...adds chosen font to neon sign demo
    signDemo.style.fontFamily = fonts[i];

    // turn every option to appear deselected
    for (let i = 0; i < fontType.length; i++) {
      fontType[i].style.color = "black";
      fontType[i].style.boxShadow = "none";
    }
    // add selected apearence to the option selected.
    fontType[i].style.color = "#f620fc";
    fontType[i].style.boxShadow = "0 0 0.05em #fff, 0 0 0.2em #fe05e1, 0 0 0.6em #fe05e1";
  });
}

for (let i = 0; i < colorChoice.length; i++) {
  colorChoice[i].addEventListener("click", function () {
    //...adds chosen font to neon sign demo
    signDemo.style.textShadow = color[i];

    // turn every option to appear deselected
    for (let i = 0; i < colorChoice.length; i++) {
      colorChoice[i].style.boxShadow = "none";
    }
    // add selected apearence to the option selected.
    colorChoice[i].style.boxShadow = color[i];
  });
}

for (let i = 0; i < bgChoice.length; i++) {

  bgChoice[i].addEventListener("click", function() {
    document.querySelector('#bgContainer').innerHTML = `<img id="backgroundImg" src="img/bg${i + 1}.jpg" alt="Living Room">`;
  })
}
