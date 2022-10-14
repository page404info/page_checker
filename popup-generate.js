var numberGenerate = document.getElementById("numberGenerate");
numberGenerate.addEventListener(
  "click",
  function (event) {
    let length = prompt("My number length is: ", 1);
    let result = "";
    for (let i = 0; i < length; i++) {
      result += Math.floor(Math.random() * 10);
    }
    alert(result);
  },
  false
);

var getLength = document.getElementById("getLength");
getLength.addEventListener(
  "click",
  function (event) {
    let text = prompt("Get length -> input text: ");
    alert(text.length);
  },
  false
);

var textEn = document.getElementById("textEn");
textEn.addEventListener(
  "click",
  function (event) {
    let length = prompt("Get text -> input length: ", 7);
    let result = "";
    for (let i = 0; i < length; i++) {
      result += String.fromCharCode(Math.random() * (123 - 97) + 97);
    }
    let resultText = result.charAt(0).toUpperCase() + result.slice(1);
    alert(resultText);
  },
  false
);

var abcEn = document.getElementById("abcEn");
abcEn.addEventListener(
  "click",
  function (event) {
    let result = "abcdefghijklmnopqrstuvwxyz";
    alert(result);
  },
  false
);

var textUk = document.getElementById("textUk");
textUk.addEventListener(
  "click",
  function (event) {
    let length = prompt("Get text -> input length: ", 7);
    let abc = "абвгґдеєжзиіїйклмнопрстуфхцчшщьюя'";
    let result = "";

    for (let i = 0; i < length; i++) {
      result += abc.charAt(Math.random() * 34);
    }
    let resultText = result.charAt(0).toUpperCase() + result.slice(1);
    alert(resultText);
  },
  false
);

var abcUk = document.getElementById("abcUk");
abcUk.addEventListener(
  "click",
  function (event) {
    let result = "абвгґдеєжзиіїйклмнопрстуфхцчшщьюя'";
    alert(result);
  },
  false
);

var textRu = document.getElementById("textRu");
textRu.addEventListener(
  "click",
  function (event) {
    let length = prompt("Get text -> input length: ", 7);
    let abc = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
    let result = "";

    for (let i = 0; i < length; i++) {
      result += abc.charAt(Math.random() * 34);
    }
    let resultText = result.charAt(0).toUpperCase() + result.slice(1);
    alert(resultText);
  },
  false
);

var abcRu = document.getElementById("abcRu");
abcRu.addEventListener(
  "click",
  function (event) {
    let result = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
    alert(result);
  },
  false
);

var specAbc = document.getElementById("specAbc");
specAbc.addEventListener(
  "click",
  function (event) {
    let result = "абвгґдеєжзиіїйклмнопрстуфхцчшщьюя'ёъыэ";
    alert(result);
  },
  false
);

var specSign = document.getElementById("specChar");
specSign.addEventListener(
  "click",
  function (event) {
    let result = "<!>'@\"#$;%:^&?.,*(){}[]\\|/ `~+-";
    alert(result);
  },
  false
);

var email = document.getElementById("email");
email.addEventListener(
  "click",
  function (event) {
    let length = prompt("Get email -> input length: ", 4);
    let result = "";
    for (let i = 0; i < length; i++) {
      result += String.fromCharCode(Math.random() * (123 - 97) + 97);
    }
    gmail = result + "@gmail.com";
    ukrNet = result + "@ukr.net";
    iUa = result + "@i.ua";
    uaFm = result + "@ua.fm";
    onlineUa = result + "@online.ua";
    mailRu = result + "@mail.ru";
    yandexRu = result + "@yandex.ru";
    alert(gmail + "   " + ukrNet + "   " + iUa + "   " + uaFm + "   " + onlineUa + "   " + mailRu + "   " + yandexRu);
  },
  false
);