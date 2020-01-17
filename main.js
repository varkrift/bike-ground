var header = new Vue({
  el: '#header',
data: {
  nameMain: 'Главная',
  nameComponents: 'О велосипедных компонентах',
}
});


let flagNav = true;
let nav = document.getElementById("nav").innerHTML;
let nav2 = document.getElementById("nav2").innerHTML;
let setContent = document.getElementById("setContent").innerHTML;
let frameContent = document.getElementById("frameContent").innerHTML;
let wheelContent = document.getElementById("wheelContent").innerHTML;
let transmissionContent = document.getElementById("transmissionContent").innerHTML;
let forkContent = document.getElementById("forkContent").innerHTML;
let changeComponentsContent = document.getElementById("changeComponentsContent").innerHTML;

function changeWindow(num) {
  if (num == 1) {
    document.getElementById("nav").innerHTML = nav;
    document.getElementById("nav").className = "nav";
    document.getElementById("setContent").innerHTML = setContent;
    flagNav = false;
  }
  if (num == 2) {
    document.getElementById("nav").innerHTML = nav2;
    document.getElementById("nav").className = "nav2";
    document.getElementById("setContent").innerHTML = changeComponentsContent;
  }
  if (num == 3) {
    document.getElementById("setContent").innerHTML = frameContent;
  }
  if (num == 4) {
    document.getElementById("setContent").innerHTML = wheelContent;
  }
  if (num == 5) {
    document.getElementById("setContent").innerHTML = transmissionContent;
  }
  if (num == 6) {
    document.getElementById("setContent").innerHTML = forkContent;
  }
}

function viewFrame() {
  let root = document.getElementById("view");
  root.innerHTML = "";
  let frameSize = document.getElementById('inputHeight').value;

  if (frameSize > 0 && frameSize <= 250) {

    if (frameSize > 0 && frameSize <= 155) {
      root.innerHTML += "Размер Вашей рамы: XS";
    }
    if (frameSize > 155 && frameSize <= 165) {
      root.innerHTML += "Размер Вашей рамы: S";
    }
    if (frameSize > 165 && frameSize <= 178) {
      root.innerHTML += "Размер Вашей рамы: M";
    }
    if (frameSize > 178 && frameSize <= 185) {
      root.innerHTML += "Размер Вашей рамы: L";
    }
    if (frameSize > 185 && frameSize <= 197) {
      root.innerHTML += "Размер Вашей рамы: XL";
    }
    if (frameSize > 197) {
      root.innerHTML += "Размер Вашей рамы: XXX";
    }
  } else {
    root.innerHTML += "Ошибка. Введите другое значение";
  }
}
