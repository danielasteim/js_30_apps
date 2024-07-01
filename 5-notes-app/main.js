const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
    let div = document.createElement("div");
    div.className = "note-container";
    let inputBox = document.createElement("p");
    let span = document.createElement("button");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    span.innerHTML = "&#9746";
    span.className = "btn2";
    div.appendChild(inputBox);
    div.appendChild(span);
    notesContainer.appendChild(div);
    
})

notesContainer.addEventListener("click", function (e) {
    if (e.target.className === "btn2") {
        e.target.parentElement.remove();
        updateStorage();
    } else if (e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function () {
                updateStorage();
            }
        })
    }
})


document.addEventListener("keydown", event => {
    if (event.key === "enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})
showNotes();
