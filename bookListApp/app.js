const form = document.querySelector("form");
const tableBody = document.querySelector("tbody");
const input = document.querySelectorAll("input");
const p = document.querySelector("p");

function alert(str) {
  const span = document.createElement("span");
  span.innerHTML = `Book ${str}`;
  if (str === "Added") {
    span.classList.add("green");
  } else if (str === "Deleted") {
    span.classList.add("red");
  }

  if ((p.innerHTML = " ")) {
    p.append(span);
  }
  setTimeout(() => {
    span.remove();
  }, 2000);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const row = document.createElement("tr");
  const button = document.createElement("button");
  button.innerHTML = `<i class="fas fa-times"></i>`;
  for (let i = 0; i < input.length; i++) {
    const column = document.createElement("td");

    column.innerHTML = input[i].value;
    row.append(column);
  }
  row.append(button);
  tableBody.append(row);
  alert("Added");
});

// Delete book
tableBody.addEventListener("click", function (e) {
  if (e.target.className === "fas fa-times") {
    e.target.parentElement.parentElement.remove();
    alert("Deleted");
  }
});
