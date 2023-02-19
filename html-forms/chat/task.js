const redBox = document.querySelector('.chat-widget');
const inputElement = document.getElementById('chat-widget__input');
const chatContainer = document.querySelector('.chat-widget__messages');
redBox.addEventListener('click', () => {
    if (!Array.from(redBox).includes('chat-widget_active')) {
      redBox.classList.add('chat-widget_active');
    }
  });







