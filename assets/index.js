console.log("Hello");
let wordsArray = ["apple", "appa", "banana", "cherry", "mango", "orange", "strawberry", "watermelon"];
let resultBox = document.querySelector('.result-wrapper');
const wordsArrayCopy = [...wordsArray];
const input = document.querySelector("input");
input.addEventListener("keyup", findCloseResults);

function findCloseResults(event) {
    event?.stopPropagation();
    let search = event?.target?.value;
    console.log(search)
    if (search) {
        wordsArray = wordsArrayCopy.filter((single) => {
            if (single?.substring(0, search.length) === search) return single;
        })
    }
    while (resultBox?.hasChildNodes()) {
        resultBox.removeChild(resultBox.firstChild)
    }
    console.log(wordsArray);
    if (wordsArray?.length > 0) {

        for (let word of wordsArray) {
            let single = document.createElement('p');
            single.innerHTML = `<strong>${search}</strong>${word.substring(search.length)}`;
            resultBox.appendChild(single);
        }
        wordsArray = [];
    }

}