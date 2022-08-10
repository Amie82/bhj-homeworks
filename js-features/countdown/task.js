//const timer = 59;//
const status = document.getElementById('status');

const timerID = function() {
    const timer = document.getElementById('timer');
    if(timer.textContent === 0){
        clearInterval;
        return alert('Вы победили в конкурсе!');
        
    }
     return timer.textContent -= 1;
}
setInterval(timerID, 1000);