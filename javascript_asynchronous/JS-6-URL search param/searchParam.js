function doSearch() {
  const ajax = new XMLHttpRequest();

  const param = new URLSearchParams();
  param.append("search", document.getElementById("search").value);

  ajax.open(
    "GET",
    `https://01j4b1vgsw7vpk1804drsehsv000-d501d2caf29eeedc36b4.requestinspector.com?${param.toString()}}`
  );

  ajax.onload = function () {
    const response = document.getElementById("response");
    response.innerHTML = ajax.responseText;
  };

  ajax.send();
}

document.getElementById("search-btn").onclick = doSearch;
