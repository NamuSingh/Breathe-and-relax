const container = document.querySelector('.container')
const text = document.querySelector('#text')

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

function breatheAnimation() {
    text.innerHTML = 'Breathe In !'
    container.className.remove('shrink');
    container.className.add('grow');

    setTimeout(() => {
        text.innerText = 'Hold'

        setTimeout(() => {
            text.innerText = 'Breathe Out !'
            container.className.remove('grow');
            container.className.add('shrink');
        }, holdTime);;

    }, breatheTime)
}

breatheAnimation();

setInterval(breatheAnimation, totalTime);