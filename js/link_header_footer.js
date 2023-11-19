function loadHTML(url, elementId) {
    fetch(url)
      .then(response => response.text())
      .then(data => {
        document.getElementById(elementId).innerHTML = data;
      });
  }
  
  function loadCSS(url) {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = url;
    document.head.appendChild(link);
  }
  
  function loadJS(url){
    var srcipt = document.createElement("script");
    srcipt.src = url;
    document.head.appendChild(script);
  }
  loadHTML("./header.html", "header");
  loadHTML("./footer.html", "footer");
  loadCSS("./css/header.css");
  loadCSS("./css/footer.css");
  loadJS("./js/header.js");