const hours = document.querySelector('.h'),
    minutes = document.querySelector('.m'),
    seconds = document.querySelector('.s'),
    hoursNumber = document.querySelector('.hours'),
    minutesNumber = document.querySelector('.minutes');

function clock() {
    let hour = new Date().getHours(),
        min = new Date().getMinutes(),
        sec = new Date().getSeconds();
    hours.style.transform = `rotate(${hour * 30}deg)`
    minutes.style.transform = `rotate(${min * 6}deg)`
    seconds.style.transform = `rotate(${sec * 6}deg)`
    hoursNumber.innerHTML = hour < 10 ? '0' + hour : hour
    minutesNumber.innerHTML = min < 10 ? '0' + min : min

    setTimeout(() => {
        clock()
    }, 1000);
}
clock()


let link = document.querySelectorAll('.tabsItem'),
    tabs = document.querySelectorAll('.tabsContentItem')
for (let i = 0; i < link.length; i++) {
    const el = link[i];
    el.addEventListener('click', function () {
        link.forEach((e, i) => {
            e.classList.remove('active')
            tabs[i].classList.remove('active')
        })
        tabs[i].classList.add('active')
        this.classList.add('active')
    })
}


const hrs = document.querySelector('.stopwatch__hours'),
    min = document.querySelector('.stopwatch__minutes'),
    sec = document.querySelector('.stopwatch__seconds');
//   Buttons
const button = document.querySelector('.stopwatch__btn');

button.addEventListener('click', () => {
    // clearInterval(interval)
    // interval = setInterval(startTimer, 10)
    clock2()
})


function clock2() {

    if (button.innerHTML == 'start') {
        button.innerHTML = 'STOP'
        start()
    } else if (button.innerHTML == 'STOP') {
        button.innerHTML = 'CLEAR'
    } else if (button.innerHTML == 'CLEAR') {
        button.innerHTML = 'start'
        sec.innerHTML = 0;
        min.innerHTML = 0;
        hrs.innerHTML = 0;
    }


}

function start() {

    if (button.innerHTML == 'STOP') {
        sec.innerHTML++
        let id = setTimeout(() => {
            if (sec.innerHTML >= 59) {

                sec.innerHTML = 0;
                min.innerHTML++;
            } else if (min.innerHTML >= 59) {
                min.innerHTML = 0;
                hrs.innerHTML++;
            }
            start()
        }, 1000);
    } else if (button.innerHTML == 'CLEAR') {
        clearTimeout(id);
    }



}