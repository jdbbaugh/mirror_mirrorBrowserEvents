

let messageInput = document.getElementById('message');
let art1 = document.getElementById('article1');
let art2 = document.getElementById('article2')

function hearMessage(event) {
    let typing = event.target.value;  
    art1.textContent = typing;
    art2.textContent = typing;   

};


messageInput.addEventListener('keyup', hearMessage)