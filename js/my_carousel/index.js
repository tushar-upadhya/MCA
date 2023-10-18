let images = ["https://source.unsplash.com/random?landscape,mountain",
"https://source.unsplash.com/random?landscape,cars",
"https://source.unsplash.com/random?landscape,night",
"https://source.unsplash.com/random?landscape,city",
"https://source.unsplash.com/random?landscape,stars",
"https://source.unsplash.com/random?landscape,dessert"];


var slider = document.querySelectorAll('.slider')[0];
var btns = document.querySelectorAll('.slideButtons')[0];
var show = null;
(function() {//initial rendering of all slides and buttons
    var holder = document.createDocumentFragment();
    btns.addEventListener('click', changeSlideOnBtnClick);
    images.forEach((img, i) => {
        let div = document.createElement('div');
        div.className = 'slide'
        var imgEl = `<img src="${img}" alt="" width="100%" height="100%">`
        div.innerHTML = imgEl;
        holder.appendChild(div);

        var btn = document.createElement('button');
        if(i == 0) btn.id = 'active';
        btn.className = 'action-button';
        btn.setAttribute('data-id', i)
        btns.appendChild(btn);
    })
    slider.appendChild(holder);
   // slideShow();//for setting the slide show, to stop the slide show click on any icon below the image
})()


var slides = document.querySelectorAll('.slide');
var num = 0;

function updateTransform(val) {
    slides.forEach(slide => {slide.style.transform = `translateX(${val}%)`})
}

function changeSlideOnBtnClick(evt) {//change slide directly on bottom button click
    clearInterval(show);
    if(evt.target.dataset.id) {
        num = parseInt(evt.target.dataset.id);
        let val = -(num*100);
        updateButton();
        updateTransform(val);
    }
}

function updateButton() {
    btns.childNodes.forEach(bt => {
        bt.id = '';
        if(bt.dataset.id == num) bt.id = 'active'
    });
}

function prevPic() {
    let val;
    if(num == 0) {
        num = slides.length-1;
    } else {
        num--; 
    }
    val = -(num*100);
    updateButton();
    updateTransform(val);
}

function nextPic() {
    let val;
    if(num+1 == slides.length) {
        num = 0
    } else {
        num++;
    }
    val = -(num*100);
    updateButton();
    updateTransform(val); 
}

function slideShow() {
    show = setInterval(() => nextPic(), 1500);
}