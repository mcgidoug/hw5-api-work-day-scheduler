// global variables
let saveButton = $(".saveButton");
let currentTimeContainer = document.getElementById("currentTime");
let hourBlock = document.querySelectorAll("hourBlock");
// current time function in header
setInterval(() => {
  let today = moment().format("dddd MMMM Do YYYY");
  currentTimeContainer.innerHTML = today;
}, 1000);
//  call color block changer function
changeBlockColor();
//  function to change color of time-blocks
function changeBlockColor() {
  let hour = moment().hours();

  $(".hourBlock").each(function () {
    let currentHour = document.getElementsByClassName("currentTime");

    if (currentHour > hour) {
      $(this).addClass("future");
    } else if (currentHour === hour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("past");
    }
  });
}
// click save button to store appointment data
saveButton.on("click", function () {
  let text = document.getElementsByClassName("textAreaInput");
  let time = document.getElementsByClassName("currentTime");

  localStorage.setItem(text, time);
});
