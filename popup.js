//цепляем обработку нажатия на кнопку в виджете
document.getElementById("showHeaders").addEventListener(
  "click",
  function () {
    //выбираем активную вкладку
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      //отправляем сообщение на страницу
      chrome.tabs.sendMessage(
        tabs[0].id,
        { greeting: "showHeaders" },
        function (response) {
          console.log(response);
        }
      );
    });
  },
  false
);

document.getElementById("showTables").addEventListener(
  "click",
  function () {
    //выбираем активную вкладку
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      //отправляем сообщение на страницу
      chrome.tabs.sendMessage(
        tabs[0].id,
        { greeting: "showTables" },
        function (response) {
          console.log(response);
        }
      );
    });
  },
  false
);

document.getElementById("showButtons").addEventListener(
  "click",
  function () {
    //выбираем активную вкладку
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      //отправляем сообщение на страницу
      chrome.tabs.sendMessage(
        tabs[0].id,
        { greeting: "showButtons" },
        function (response) {
          console.log(response);
        }
      );
    });
  },
  false
);

document.getElementById("showInputs").addEventListener(
  "click",
  function () {
    //выбираем активную вкладку
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      //отправляем сообщение на страницу
      chrome.tabs.sendMessage(
        tabs[0].id,
        { greeting: "showInputs" },
        function (response) {
          console.log(response);
        }
      );
    });
  },
  false
);

document.getElementById("showLinks").addEventListener(
  "click",
  function () {
    //выбираем активную вкладку
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      //отправляем сообщение на страницу
      chrome.tabs.sendMessage(
        tabs[0].id,
        { greeting: "showLinks" },
        function (response) {
          console.log(response);
        }
      );
    });
  },
  false
);

document.getElementById("disableImages").addEventListener(
  "click",
  function () {
    //выбираем активную вкладку
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      //отправляем сообщение на страницу
      chrome.tabs.sendMessage(
        tabs[0].id,
        { greeting: "disableImages" },
        function (response) {
          console.log(response);
        }
      );
    });
  },
  false
);

document.getElementById("disableInnerStyle").addEventListener(
  "click",
  function () {
    //выбираем активную вкладку
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      //отправляем сообщение на страницу
      chrome.tabs.sendMessage(
        tabs[0].id,
        { greeting: "disableInnerStyle" },
        function (response) {
          console.log(response);
        }
      );
    });
  },
  false
);

document.getElementById("disableOuterStyle").addEventListener(
  "click",
  function () {
    //выбираем активную вкладку
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      //отправляем сообщение на страницу
      chrome.tabs.sendMessage(
        tabs[0].id,
        { greeting: "disableOuterStyle" },
        function (response) {
          console.log(response);
        }
      );
    });
  },
  false
);

document.getElementById("getText").addEventListener(
  "click",
  function () {
    //выбираем активную вкладку
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      //отправляем сообщение на страницу
      chrome.tabs.sendMessage(
        tabs[0].id,
        { greeting: "getText" },
        function (response) {
          console.log(response);
        }
      );
    });
  },
  false
);

document.getElementById("getInfo").addEventListener(
  "click",
  function () {
    //выбираем активную вкладку
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      //отправляем сообщение на страницу
      chrome.tabs.sendMessage(
        tabs[0].id,
        { greeting: "getInfo" },
        function (response) {
          console.log(response);
        }
      );
    });
  },
  false
);

document.getElementById("editText").addEventListener(
  "click",
  function () {
    //выбираем активную вкладку
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      //отправляем сообщение на страницу
      chrome.tabs.sendMessage(
        tabs[0].id,
        { greeting: "editText" },
        function (response) {
          console.log(response);
        }
      );
    });
  },
  false
);

document.getElementById("selectAll").addEventListener(
  "click",
  function () {
    //выбираем активную вкладку
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      //отправляем сообщение на страницу
      chrome.tabs.sendMessage(
        tabs[0].id,
        { greeting: "selectAll" },
        function (response) {
          console.log(response);
        }
      );
    });
  },
  false
);
