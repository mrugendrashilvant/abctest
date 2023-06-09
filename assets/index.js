let wordsArray = ["apple", "appa", "banana", "cherry", "mango", "orange", "strawberry", "watermelon"];
let resultBox = document.querySelector('.result-wrapper');
let toggleLabel = document.querySelector("#toggleLabel");
const switchTag = document.querySelector("#switch");
const wordsArrayCopy = [...wordsArray];
const input = document.querySelector("#searchInput");
let google = document.querySelector(".google");
let lightDisplay = true;
input.addEventListener("keyup", findCloseResults);
switchTag.addEventListener("change", toggleDisplay);
resultBox.style.display = "none";

let buttons = document.querySelectorAll("button")
// checkDisplay(lightDisplay);
// function checkDisplay(lightDisplay){
//     if(lightDisplay){
//         document.querySelector("body").className = "";
//         toggleLabel.innerHTML = `Light <i class="bi bi-brightness-high"></i>`
//     }
//     else{
//         document.querySelector("body").className = "body-dark";
//         toggleLabel.innerHTML = `Dark <i class="bi bi-moon-fill"></i>`
//     }
// }

function findCloseResults(event) {
    event?.stopPropagation();
    resultBox.style.display = "none";
    let search = event?.target?.value;
    if (search) {
        wordsArray = wordsArrayCopy.filter((single) => {
            if (single?.substring(0, search.length) === search) return single;
        })
    }
    while (resultBox?.hasChildNodes()) {
        resultBox.removeChild(resultBox.firstChild)
    }
    if (wordsArray?.length > 0) {

        for (let word of wordsArray) {
            let single = document.createElement('p');
            single.innerHTML = `<strong>${search}</strong>${word.substring(search.length)}`;
            single.className = "mb-1"
            resultBox.appendChild(single);
        }
        resultBox.style.display = "block";
        wordsArray = [];
    }

}

function toggleDisplay(event){
    event?.stopPropagation();
    lightDisplay = !lightDisplay;
    if(lightDisplay){
        document.querySelector("body").className = "";
        toggleLabel.innerHTML = `Light <i class="bi bi-brightness-high"></i>`;
        input.style.color = "#28282B";
        google.setAttribute("src", "./assets/images/google.png");
        resultBox.style.backgroundColor = "#f8f9fa"
        for(let button of buttons){
            button.style.color = "#3c4043";
            button.style.background = "#f8f9fa"
        }
    }
    else{
        document.querySelector("body").className = "body-dark";
        toggleLabel.innerHTML = `Dark <i class="bi bi-moon-fill"></i>`;
        input.style.color = "white";
        google.setAttribute("src", "./assets/images/google-dark.png");
        resultBox.style.backgroundColor = "#3c4043"
        for(let button of buttons){
            button.style.color = "#f8f9fa";
            button.style.background = "#3c4043"
        }
    }
}
