const text = document.querySelector(`.text`);
const btn = document.querySelector(`.btn`);
const results = document.querySelector(`.results`);
const result = document.querySelector(`.result`);

btn.addEventListener("click", () => {
  if (!text.value) {
    alert("You must to write");
  } else {
    results.innerHTML += ` <div class="result">
            <i class="fa-regular fa-square"></i>
        <p>${text.value}</p>
        <i class="fa-sharp fa-solid fa-trash-can"></i>
        </div>`;

    text.value = "";
  }
});

text.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    btn.click();
  }
});

results.addEventListener("click", function (e) {
  if (e.target.classList.contains("fa-trash-can")) {
    e.target.parentElement.remove();
  } else if (e.target.classList.contains(`fa-square`)) {
    e.target.parentElement.style.backgroundColor = ` darkolivegreen`;
    e.target.classList.remove(`fa-square`, `fa-regular`);
    e.target.classList.add(`fa-check`, `fa-solid`);
    results.style.backgroundcolor = "yellow";
  } else if (e.target.classList.contains("fa-check")) {
    e.target.parentElement.style.backgroundColor = `white`;
    e.target.classList.add(`fa-square`, `fa-regular`);
    e.target.classList.remove(`fa-check`, `fa-solid`);
  }
});
