console.log("Hello");
let wordsArray = ["apple", "appa", "banana", "cherry", "mango", "orange", "strawberry", "watermelon"];
const wordsArrayCopy = [...wordsArray];
const input = document.querySelector("input");
input.addEventListener("keydown", findCloseResults)

function findCloseResults(event) {
    event?.stopPropagation();
    let search = event?.target?.value;
    console.log(search)
    if (search) {
        wordsArray = wordsArrayCopy.filter((single) => {
            if (single?.substring(0, search.length) === search) return single;
        })
    }
    else {
        return [];
    }
    console.log(wordsArray);
}