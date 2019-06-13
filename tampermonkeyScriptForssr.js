// ==UserScript==
// @name         ssr
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.youneed.win/free-ssr
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let items = document.querySelectorAll("#post-box > div > section > div > table > tbody > tr");
    let ssrLinkList = [];
    for (let i = 1; i < items.length; i++) {
        ssrLinkList.push(items[i].children[0].children[0].href);
    }
    ssrLinkList = ssrLinkList.join('\n');
    var button = document.createElement("input"); //创建一个input对象（提示框按钮）
    button.setAttribute("type", "button");
    button.setAttribute("value", "下载");
    button.style.width = "60px";
    button.style.align = "center";
    button.style.marginLeft = "250px";
    button.style.marginBottom = "10px";
    button.style.background = "#b46300";
    button.style.border = "1px solid " + "#b46300";//52
    button.style.color = "white";
    var x = document.querySelector(".context");
    x.appendChild(button);
    button.onclick = download("ssr.txt", ssrLinkList);

    function download (filename, content, contentType) {
        if (!contentType) contentType = 'application/octet-stream';
        var a = document.createElement('a');
        var blob = new Blob([content], { 'type': contentType });
        a.href = window.URL.createObjectURL(blob);
        a.download = filename;
        a.click();
    }

})();
