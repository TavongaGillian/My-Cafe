const details = document.getElementById("details");
const orders = document.getElementById("orders");
const saveorder = document.querySelector("#saveorder");
const save = document.querySelector("#save");

function reserve() {
  details.style.background =
    "url(../img/pexels-anthony-133184.jpg) no-repeat center center";
  details.style.backgroundSize = "cover";
  orders.style.display = "none";

  if (details.style.display === "none") {
    details.style.display = "block";
  } else {
    details.style.display = "none";
  }
}

function onlineOrders() {
  orders.style.background =
    "url(../img/pexels-anthony-133184.jpg) no-repeat center center";
  orders.style.backgroundSize = "cover";
  details.style.display = "none";

  if (orders.style.display === "none") {
    orders.style.display = "block";
  } else {
    orders.style.display = "none";
  }
}
function saver() {
  details.style.display = "none";
  orders.style.display = "none";
}
