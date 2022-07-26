

let neonTextBox = document.querySelector('#textBox');
let fontType = document.querySelectorAll('.fontFamily');

let fonts = ["Times New Roman", "arial"];


for (let i = 0; i < fontType.length; i++) {
  fontType[i].addEventListener("click", function () {
    console.log("hello world");

    document.querySelector('#neonText').style.fontFamily = fonts[i];
    //remove class for all
    // cells[i - 1].classList.add('mouseHover2');
  });

}


neonTextBox.addEventListener("keyup", function () {
  document.querySelector('#neonText').innerHTML = neonTextBox.value;


});
