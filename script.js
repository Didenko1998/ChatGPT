const inputEl = document.getElementById("input-el")
const buttonEl = document.getElementById("button-el")
let myMessages = [""]
let chatM = document.getElementById("chat-main")


buttonEl.addEventListener("click", function(){
    myMessages.push(inputEl.value)
    inputEl.value = ""
        renderMessages()
        clear()
    })
    inputEl.addEventListener('keypress', function (enter) {
        var key = enter.which || enter.keyCode;
        if (key === 13) { 
            buttonEl.click();
        }
    });
function renderMessages() {
    for(let i = 0; i < myMessages.length; i++) {
        // chatM.textContent += " " + myMessages[i] + " " 
        chatM.innerHTML += "<li>" + myMessages[i] + "</li>"      
}
}
function clear() {
    myMessages = []
}

