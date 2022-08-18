let shot = 0;
let bossShot = 0;
const killMoleElement = document.getElementById('dead');
const missElement = document.getElementById('lost');

for (let i = 1; i < 10; i++) {
    let targetHole = document.getElementById('hole' + i);
    targetHole.onclick = () => {
        if (targetHole.className.includes('hole_has-mole')) {
            shot += 1;
            document.getElementById('dead').textContent = shot;
            if (shot === 10) {
                alert('Вы победили!');
                return  clearStatistics();
            }
        }
        else {
            bossShot += 1;
            document.getElementById('lost').textContent = bossShot;
            if (bossShot === 5) {
                alert('Поражение((');
                return  clearStatistics();
            }
        }
    }  
}

function clearStatistics() {
    shot = 0;
    bossShot = 0;
    killMoleElement.textContent = `${shot}`;
    missElement.textContent = `${bossShot}`;
  }