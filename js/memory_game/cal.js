class memoryGame {
    constructor(size) {
        this.size = size;
        this.blinkCount = 1;
        this.score = 0;
        this.highScore = 0;
        this.blinkArr = [];
        this.clickArr = [];
    }

    setHighScore(val) {
        localStorage.setItem('highScore', val);
    }

    getHighScore() {
        return JSON.parse(localStorage.getItem('highScore'));
    }

    updateScoreOnView() {
        document.querySelector('.score').innerHTML = this.score;
        document.querySelector('.highScore').innerHTML = this.highScore;
    }

    updateScore() {
        this.score++;
        this.highScore = this.score > this.highScore ? this.score : this.highScore;
        this.setHighScore(this.highScore);
        this.updateScoreOnView();
    }

    resetGame() {
        this.score = 0;
        this.blinkArr = [];
        this.clickArr = [];
        this.blinkCount = 1;
        this.updateScoreOnView();
        document.querySelector('.start-btn').style.pointerEvents = '';
        document.querySelector('.start-btn').style.opacity = '1';
    }

    validateUserInput(e, i) {
        let valid = false;
        this.clickArr.push(i);
        let curIdx = this.clickArr.length - 1;
        let boxList = document.querySelectorAll('.box');
        if(this.clickArr[curIdx] == this.blinkArr[curIdx]) {      
            boxList[i].style.backgroundColor = 'green';
            valid = true;
        } else {
            boxList[i].style.backgroundColor = 'red';
            boxList.forEach(box => box.classList.add('shake'))
            this.resetGame();
        }
        setTimeout(() => {
            boxList.forEach(box => box.classList.remove('shake'))
            boxList[i].style.backgroundColor = 'white'
        }, 300);
        if(valid && this.clickArr.length == this.blinkCount) {
            this.updateScore();

            this.blinkArr = [];
            this.clickArr = [];
            this.blinkCount++;
            this.generateBlinkArr();
        }
    }

    generateBlinkArr() {
        this.blinkArr = [];
        for(var i = 0; i < this.blinkCount; i++) {
            let num = Math.floor(Math.random() * this.size);
            this.blinkArr.push(num);
        }
        let curIdx = 0;
        let boxes = document.querySelectorAll('.box')
        let int = setInterval(() => {
            if(curIdx >= this.blinkCount) {
                clearInterval(int);
            } else {
                let idx = this.blinkArr[curIdx];
                boxes[idx].style.backgroundColor = 'blue';
                setTimeout(() => boxes.forEach(box => box.style.backgroundColor = 'white'), 500)
                curIdx++;
            }
        }, 700);
    }

    startGame() {
        this.resetGame();
        document.querySelector('.start-btn').style.pointerEvents = 'none';
        document.querySelector('.start-btn').style.opacity = '0.5';
        this.generateBlinkArr();
    }

    createBoxLayout() {
        let holder = document.createDocumentFragment();
        [...Array(this.size)].forEach((el, i) => {
            let node = document.createElement('DIV');
            node.className = 'box';
            node.addEventListener('click', (e) => this.validateUserInput(e, i));
            holder.appendChild(node);
        })
        document.querySelector('.boxs-container').appendChild(holder);
    }

    init() {
        this.createBoxLayout();
        document.querySelector('.start-btn').addEventListener('click', this.startGame.bind(this));
        this.highScore = this.getHighScore() || 0;
        this.updateScoreOnView();
    }
}

let obj = new memoryGame(5);
obj.init();