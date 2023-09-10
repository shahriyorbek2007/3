let body = document.body;
let mode = localStorage.getItem("mode")
  ? localStorage.getItem("mode")
    : "light";
  if (localStorage.getItem("mode")) {
      if (mode === "light") {
        body.classList = "light";
      } else if (mode === "dark") {
        body.classList = "dark";
      }
  }
function changeMode() {
  if (mode === "light") {
      body.classList = "dark";
      mode = "dark"
    } else if (mode === "dark") {
        body.classList = "light";
        mode = "light"
    }
  localStorage.setItem("mode", mode)
}
