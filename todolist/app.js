const input = document.querySelector("input");
const ul = document.querySelector("ul");
const refresh = document.querySelector(".fa-sync-alt");

let unChecked = true; ///---------flag for tracking/////

input.addEventListener("change", (e) => {
  const li = document.createElement("li");
  const inputValue = input.value;

  li.innerHTML = ` <i class="far fa-circle"></i>
            <p>${inputValue.toUpperCase()}</p>
            <i class="fas fa-trash-alt"></i>`;

  if (input.value) {
    ul.append(li);
    input.value = "";
  }
});
// -------------------------refresh/removing everything----------------
refresh.addEventListener("click", (e) => {
  ul.innerHTML = "";

  // for (let value of values) {
  //   console.log(ul.childNodes[value]);
  //   ul.childNodes.nodel.remove();
  // }
  // ul.children[0].remove();
  // ul.childNodes.remove();
});

///--------------------------using event delegation ------------------------

ul.addEventListener("click", (e) => {
  if (e.target.className === "fas fa-trash-alt") {
    e.target.parentElement.remove();
  } else if (
    ///------------------checking because of toggling class------------------

    e.target.className === "far fa-circle" ||
    e.target.className === "far fa-check-circle"
  ) {
    if (unChecked) {
      e.target.className = "far fa-check-circle";
      unChecked = false;
    } else {
      e.target.className = "far fa-circle";
      unChecked = true;
    }
    e.target.nextElementSibling.classList.toggle("line-through");
  }
});
