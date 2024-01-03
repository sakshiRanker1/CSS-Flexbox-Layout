function editWidget() {
    document.getElementById("widget-content").style.display = "none";
    document.getElementById("edit-form").style.display = "block";
  }

  document
    .getElementById("edit-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      var newContent = document.getElementById("edited-content").value;
      document.getElementById("widget-content").innerText = newContent;
      document.getElementById("widget-content").style.display = "block";
      document.getElementById("edit-form").style.display = "none";
    });