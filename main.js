let input = document.querySelector('.input'),
    btn = document.querySelector('.btn'),
    time = document.querySelector('.time'),
    gameZone = document.querySelector('.game__zone'),
    score = 0,
    gameTime = 0,
    interval = 0;

btn.addEventListener('click', () => {
    if (input.value > 4) {
        gameTime = input.value
        input.value = ''
        gameZone.innerHTML = ''
        score = 0
        startGame()
    } else {
        alert('Нужно ввести минимум 5 секунд')
    }
})

gameZone.addEventListener('click', (event) => {
    if (event.target.classList.contains('ball')) {
        score++
        event.target.remove()
        createBall()
    }
})

function startGame() {
    time.innerHTML = gameTime
    interval = setInterval(decreaseTime, 1000)
    createBall()
}

function decreaseTime() {
    if (gameTime == 1) {
        time.innerHTML = 0
        endGame()
    } else {
        time.innerHTML = --gameTime
    }
}

function endGame() {
    gameZone.innerHTML = `<h2>Вы набрали ${score} баллов</h2>`
    clearInterval(interval)
}

function createBall() {
    let ball = document.createElement('div')
    ball.classList.add('ball')

    let size = random(20, 100)
    ball.style.width = size + 'px'
    ball.style.height = size + 'px'
    ball.style.background = getRandomColor()
    ball.style.position = 'absolute'

// юез добавления 'px' выдаст ошибку

    let randooom = random(1, 7)
    switch (randooom) {
        case 1: ball.style.clipPath = 'circle(50%)'; break
        case 2: ball.style.clipPath = 'polygon(50% 0%, 0% 100%, 100% 100%)'; break
        case 3: ball.style.clipPath = 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'; break
        case 4: ball.style.clipPath = 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'; break
        case 5: ball.style.clipPath = 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'; break
        case 6: ball.style.clipPath = 'polygon(50% 0%, 0% 100%, 100% 100%, 100% 0%)'; break 
        case 7: ball.style.clipPath = 'polygon(0% 0%, 100% 0%, 50% 100%)'; break 
    }
    //clipPath - обрезка элемента до заданной формы.
    let coor = gameZone.getBoundingClientRect()
    ball.style.left = random(0, coor.width - size) + 'px'
    ball.style.top = random(0, coor.height - size) + 'px'

    gameZone.append(ball)
}

function getRandomColor() {
    let letters = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

function random(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min)
}
