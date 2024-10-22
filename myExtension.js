// BUTTONS USING AN EVENT LISTENER
let myData = [];
const input = document.getElementById("inputEl");
const inputBtn = document.getElementById("input-Btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-Btn");

const dataFromLocalStorage = JSON.parse(localStorage.getItem("myData"));
console.log(dataFromLocalStorage);
const tabBtn = document.getElementById("save-TabBtn");


// BUILDING A LOCAL STORAGE
if (dataFromLocalStorage) {
  myData  = dataFromLocalStorage;
  render(myData);
}

tabBtn.addEventListener("click", function () {
chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
  myData.push(tabs[0].url);
  localStorage.setItem("myData", JSON.stringify(myData));
  render(myData);
})  
})

function render(data) {
  let listItems = "";
  for (let i = 0; i < data.length; i++) {  
    listItems += `
    <li>
    <a target='_blank'  href='${data[i]}'>
    ${data[i]}
    </a>
    </li>  
    `;
  }
  ulEl.innerHTML = listItems;
}


deleteBtn.addEventListener("click", function () {
  localStorage.clear();
  myData = [];
  render(myData);
})

inputBtn.addEventListener("click", function () {
  myData.push(input.value);
  input.value = ""

  localStorage.setItem("myData", JSON.stringify(myData) )
  render(myData);
  console.log(localStorage.getItem("myData"))
});

// USING PARAMETERS AND ARGUMENTS IN JAVASCRIPT
const congratulator = document.getElementById("congrat-El");

function congratUser(greeting, name) {
  congratulator.textContent = `${greeting},  ${name} ${"You are learning"}` 
}
(congratUser("Congratulations", "Prosper"));

// ARRAYS AS PARMETERS
function getFirst(arr) {
  return arr[0];
}

console.log(getFirst(["Hello", "Hi", "Hurray"]))



// USING createElement() AND append() INSTEAD OF innnerHTML
// const li = document.createElement("li");
// li.textContent = myData[i];
// ulEl.append(li)

