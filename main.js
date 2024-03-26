import data from './data.json' assert { type: 'json' };

let bgColors = [
    'hsl(15, 100%, 70%)',
    'hsl(195, 74%, 62%)',
    'hsl(348, 100%, 68%)',
    'hsl(145, 58%, 55%)',
    'hsl(264, 64%, 52%)',
    'hsl(43, 84%, 65%)',

]

let dailyArray = data.map((element) => element.timeframes.daily);
let weeklyArray = data.map((element) => element.timeframes.weekly);
let monthlyArray = data.map((element) => element.timeframes.monthly);

let daily = document.querySelector('#daily');
let weekly = document.querySelector('#weekly');
let monthly = document.querySelector('#monthly');

let secondSection = document.querySelector('.second-section');

drawElement(dailyArray);

daily.addEventListener('click', () => {
    drawElement(dailyArray);
})

weekly.addEventListener('click', () => {
    drawElement(weeklyArray);
})

monthly.addEventListener('click', () => {
    drawElement(monthlyArray);
})


function drawElement(array) {
        secondSection.innerHTML = '';
        array.forEach((element, index) => {

            let title = data[index].title;
            let tittleToLowerCase = title.toLowerCase();

            if (tittleToLowerCase == 'self care') {
                tittleToLowerCase = 'self-care';
            }

        secondSection.innerHTML += 
        `<div class="card" style="background-color: ${bgColors[index]};">
        <div class="card__background">
          <img class="card__image" src="./images/icon-${tittleToLowerCase}.svg" alt="Work">
        </div>
        <div class="card__details">
          <div class="card__activity">
            <p class="card__title">${title}</p>
            <img src="images/icon-ellipsis.svg" alt="">
          </div>
          <div class="card__time">
            <p class="card__hours">${element.current}hrs</p>
            <p class="card__previous">Previous - ${element.previous}hrs</p>
          </div>
        </div>
      </div>`
    })
}