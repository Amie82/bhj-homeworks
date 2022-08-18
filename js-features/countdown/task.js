//const timer = 59;//
const status = document.getElementById('status');
let timerIDStop= null;

const timerID = function() {
    const timer = document.getElementById('timer');
    if(timer.textContent === 0){
        timerIDStop = setInterval(timerID, 1000);
        clearInterval(timerIDStop);
        return alert('Вы победили в конкурсе!');
        
    }
     return timer.textContent -= 1;
}
setInterval(timerID, 1000);


/*const timerID = setInterval(){
    const timer = document.getElementById('timer');
    if(timer.textContent === 0){
        setTimeout(() => {clearInterval(timerID); alert('Вы победили в конкурсе!')});
                
    }
     return timer.textContent -= 1;
}

setInterval(timerID, 1000);
*/
