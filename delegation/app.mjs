const container = document.querySelector(".container");
const pizzaDetails = document.querySelector("#pizza-details");

function showPizza(pizzaId) {
  pizzaDetails.querySelectorAll("[id]").forEach((pizza) => {
    pizza.hidden = true;
  });

  document.getElementById(pizzaId).hidden = false;
}

container.addEventListener("click", (event) => {
  const button = event.target.closest("button");

  if (!button || !container.contains(button)) {
    return;
  }

  showPizza(button.dataset.pizza);
});
