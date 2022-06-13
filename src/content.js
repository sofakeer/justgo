// content.js

function getUrlParams(key) {
  var url = location.search.substr(1);
  if (url == "") {
    return false;
  }
  var paramsArr = url.split("&");
  for (var i = 0; i < paramsArr.length; i++) {
    var combina = paramsArr[i].split("=");
    if (combina[0] == key) {
      return combina[1];
    }
  }
  return false;
}

let url = location.href;
let newUrl = "";
if (
  url.indexOf("link.zhihu.com") != -1 ||
  url.indexOf("link.juejin.cn") != -1 ||
  url.indexOf("link.csdn.net") != -1
) {
  newUrl = decodeURIComponent(getUrlParams("target"));
} else if (url.indexOf("www.jianshu.com/go-wild") != -1) {
  newUrl = decodeURIComponent(getUrlParams("url"));
}
if (newUrl) {
  location.href = newUrl;
}

// alert("Hello from your Chrome extension!" + firstHref);

// content.js
// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   if (request.message === "clicked_browser_action") {
//     var firstHref = $("a[href^='http']").eq(0).attr("href");

//     console.log(firstHref);

//     // This line is new!
//     chrome.runtime.sendMessage({ message: "open_new_tab", url: firstHref });
//   }
// });
