// This is the follow up code taught by the per herald from scrimba trying to imptome my javascrip coding skills
let myLeads = [];
const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')
const ulEl = document.getElementById('ul-ele')
const deleteBtn = document.getElementById('delete-btn')
const saveTabBtn = document.getElementById('savetab-btn')
const myLeadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (myLeadsFromLocalStorage){
    myLeads = myLeadsFromLocalStorage
    render(myLeads)
}


saveTabBtn.addEventListener("click", function() {

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)

    })
})

function render(clients){
    let listItems = ""
    for(let i = 0; i< clients.length; i++){
        listItems += `
        <li>
        <a target='_blank' href='${clients[i]}'> 
        ${clients[i]} 
        </a>
        </li>`
    }

    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("click", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)

})
