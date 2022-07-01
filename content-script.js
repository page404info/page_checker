//добавляем обработчик на получение сообщений
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(
    sender.tab
      ? "from a content script:" + sender.tab.url
      : "from the extension"
  );
  if (request.greeting == "showHeaders") {
    userShowHeaders();
  } else if (request.greeting == "showTables") {
    userShowTables();
  } else if (request.greeting == "showButtons") {
    userShowButtons();
  } else if (request.greeting == "showInputs") {
    userShowInputs();
  } else if (request.greeting == "showLinks") {
    userShowLinks();
  } else if (request.greeting == "disableImages") {
    userDisableImages();
  } else if (request.greeting == "disableInnerStyle") {
    userDisableInnerStyle();
  } else if (request.greeting == "disableOuterStyle") {
    userDisableOuterStyle();
  } else if (request.greeting == "getText") {
    userGetText();
  } else if (request.greeting == "editText") {
    userEditText();
  } else if (request.greeting == "selectAll") {
    userSelectAll();
  }

  //отправляем ответ
  sendResponse({ farewell: "goodbye" });
});

function userShowHeaders() {
  let colors = new Array(
    "pink",
    "orange",
    "yellow",
    "aquamarine",
    "lightskyblue",
    "plum"
  );
  let count = 0;

  for (let i = 1; i <= 6; i++) {
    let items = document.getElementsByTagName("h" + i);
    for (let j = 0; j < items.length; j++) {
      let item = items[j];
      let attr = item.style;
      attr.background = colors[i - 1];
      attr.border = "1px solid black";
      item.innerHTML = "h" + i + "= " + item.innerHTML;
      count++;
    }
  }

  if (count > 0) {
    alert("headers = " + count);
  } else {
    alert("headers not found");
  }
}

function userShowTables() {
  let color = "aqua";
  let items = document.getElementsByTagName("th");

  if (items.length > 0) {
    for (let i = 0; i < items.length; i++) {
      let item = items[i];
      let attr = item.style;
      attr.background = color;
      attr.border = "1px solid black";
      item.innerHTML = "th= " + " " + item.innerHTML;
    }
    alert("table is present");
  } else {
    alert("table not found");
  }
}

function userShowButtons() {
  let color = "lightgreen";
  let count = 0;
  let items = document.getElementsByTagName("button");

  if (items.length > 0) {
    for (let i = 0; i < items.length; i++) {
      let item = items[i];
      item.className = "v-btn";
      let attr = item.style;
      attr.background = color;
      item.innerHTML = "btn= " + " " + item.innerHTML;
      count++;
    }
    alert("tag 'button' = " + count);
  } else {
    alert("tag 'button' not found");
  }
}

function userShowInputs() {
  let color = "salmon";
  let count = 0;

  let inputs = document.getElementsByTagName("input");
  if (inputs.length > 0) {
    for (let i = 0; i < inputs.length; i++) {
      let input = inputs[i];
      let attr = input.style;
      attr.background = color;
      input.innerHTML;
      count++;
    }
  }

  let textareas = document.getElementsByTagName("textarea");
  if (textareas.length > 0) {
    for (i = 0; i < textareas.length; i++) {
      let textarea = textareas[i];
      let attr = textarea.style;
      attr.background = color;
      textarea.innerHTML;
      count++;
    }
  }

  let selects = document.getElementsByTagName("select");
  if (selects.length > 0) {
    for (i = 0; i < selects.length; i++) {
      let select = selects[i];
      let attr = select.style;
      attr.background = color;
      select.innerHTML;
      count++;
    }
  }

  if (count > 0) {
    alert("input field = " + count);
  } else {
    alert("input field not found");
  }
}

function userShowLinks() {
  let color = "Yellow";
  let count = 0;
  let items = document.getElementsByTagName("a");

  if (items.length > 0) {
    for (let i = 0; i < items.length; i++) {
      let item = items[i];
      let attr = item.style;
      attr.background = color;
      attr.border = "1px solid red";
      item.innerHTML;
      count++;
    }
    alert("tag 'a' = " + count);
  } else {
    alert("tag 'a' not found");
  }
}

function userDisableImages() {
  let count = 0;
  let items = document.getElementsByTagName("img");
  if (items.length > 0) {
    for (let i = 0; i < items.length; i++) {
      let item = items[i];
      item.src = "javascript:void(0)";
      item.style.border = "1rem dotted red";
      item.innerHTML = "img= " + " " + item.innerHTML;
      count++;
    }
    alert("tag 'img' is blocked = " + count);
  } else {
    alert("tag 'img' not found");
  }
}

function userDisableInnerStyle() {
  let items = document.getElementsByTagName("style");
  if (items.length > 0) {
    for (let i = 0; i < items.length; i++) {
      let item = items[i];
      item.disabled = true;
      item.innerHTML;
    }
    alert("tag 'style' is blocked");
  } else {
    alert("tag 'style' not found");
  }
}

function userDisableOuterStyle() {
  let items = document.getElementsByTagName("link");
  if (items.length > 0) {
    for (let i = 0; i < items.length; i++) {
      let item = items[i];
      item.href = "javascript:void(0)";
      item.innerHTML;
    }
    alert("tag 'link' is blocked");
  } else {
    alert("tag 'link' not found");
  }
}

function userGetText() {
  let body = document.querySelector("body");
  console.log(body.innerText);
  alert("open CONSOLE (F12)");
}

function userEditText() {
  let body = document.querySelectorAll(
    "h1, h2, h3, h4, h5, h6, p, button, a, span, td, tr, div"
  );

  let aTags = document.getElementsByTagName("a");
  if (aTags.length > 0) {
    for (let i = 0; i < aTags.length; i++) {
      let aTag = aTags[i];
      aTag.href = "javascript:void(0)";
      aTag.innerHTML;
    }
  }

  function recursy(arr) {
    for (let i = 0; i < arr.length; i++) {
      arr[i].contentEditable = "true";
      arr[i].innerHTML;
    }
  }

  recursy(body);
  alert("text editor ON");
}

function userSelectAll() {
  userShowHeaders();
  userShowTables();
  userShowButtons();
  userShowInputs();
  userShowLinks();
  userDisableImages();
  userDisableInnerStyle();
  userDisableOuterStyle();
}
