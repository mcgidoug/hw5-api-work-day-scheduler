//
let saveButton = $(".saveButton");

let currentTimeContainer = document.getElementById("currentTime");
// current time function
setInterval(() => {
  let today = moment().format("MMM Do, YYYY, h:mm:ss a");
  currentTimeContainer.innerHTML = today;
}, 1000);
