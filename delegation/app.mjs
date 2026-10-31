const container = document.querySelector(".container");
const pizzaDetails = document.querySelector("#pizza-details");

function showPizza(pizzaId) {
  pizzaDetails.querySelectorAll("[id]").forEach((pizza) => {
    pizza.hidden = true;
  });

  document.getElementById(pizzaId).hidden = false;
}

function addClass(currentButton) {
  container.querySelectorAll("button").forEach((button) => {
    button.classList.remove("btn-primary");
    button.classList.add("btn-outline-primary");
    
  });
  currentButton.classList.remove("btn-outline-primary");
  currentButton.classList.add("btn-primary");
}

container.addEventListener("click", (event) => {
  const button = event.target.closest("button");

  if (!button || !container.contains(button)) {
    return;
  }

  addClass(button);
  showPizza(button.dataset.pizza);
});
