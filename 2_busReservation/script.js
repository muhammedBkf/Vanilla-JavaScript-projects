const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const destination = document.getElementById("destination");
const count = document.getElementById("count");
const total = document.getElementById("total");
let ticketPrice = +document.getElementById("destination").value;

function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  const selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

destination.addEventListener("change", (e) => {
  ticketPrice = +e.target.value;
  updateSelectedCount();
});

container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
  }
  updateSelectedCount();
});
