const redBox = document.querySelector('.chat-widget');
redBox.onclick = () => redBox.classList.add('chat-widget_active');  
const inputField = document.querySelector('.chat-widget__input');
inputField.addEventListener('keypress', function(event){
    if (event.key === 'Enter' && inputField.value) {
        let timeStamp = new Date();
        messages.innerHTML += `
            <div class="message message_client">
                <div class="message__time">
                    ${addZero(timeStamp.getHours())}:${addZero(timeStamp.getMinutes())}
                </div>
                <div class="message__text">
                    ${inputField.value}
                </div>
            </div>
        `;
        inputField.value = null; 
        setTimeout(autoAnswer, 500);
    }
});