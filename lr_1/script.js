// ---------------------- #1
let name = "Андрій";

let ul = document.getElementById("nameList");

for (let letter of name) {
    let li = document.createElement("li");
    li.textContent = letter;

    li.addEventListener("mouseover", function() {
    alert("Ви навели на літеру: " + letter);
    });

    ul.appendChild(li);
}

// ------------------------- #2
let output = document.getElementById("output");

while (true) {

    let input = prompt("Введіть прізвище та ім’я (або натисніть 'Відміна' для виходу):");

    let p = document.createElement("p");
    p.textContent = input;
    output.appendChild(p);

    if (input === null) {
    break;
    }
}

// ------------------------------- #3
let surname = "Гупалюк";
let btn = document.getElementById("showBtn");
let container = document.getElementById("letters");

btn.addEventListener("click", function() {

if (container.innerHTML.trim() !== "") {
container.innerHTML = "";
return;
}

for (let letter of surname) {
let div = document.createElement("div");
div.className = "letter-block";
div.textContent = letter;

div.addEventListener("mouseover", function() {
    alert("Це літера " + letter);
});

container.appendChild(div);
}
});