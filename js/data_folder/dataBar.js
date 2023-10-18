class DataBar {
    constructor() {
        this.timer = null;
        this.dataList = [
            {
                'heading': "sample blaa",
                'display': false,
                'content': 'kjsdn cfjsbhrf rf hsurhvdfuhgjvni fgtbiudhri gvhiudrhjtgvdbudfghvbds fsdf kjsdn cfjsbhrf rf hsurhvdfuhgjvni fgtbiudhri gvhiudrhjtgvdbudfghvbds fsdf kjsdn cfjsbhrf rf hsurhvdfuhgjvni fgtbiudhri gvhiudrhjtgvdbudfghvbds fsdf kjsdn cfjsbhrf rf hsurhvdfuhgjvni fgtbiudhri gvhiudrhjtgvdbudfghvbds fsdf'
            },
            {
                'heading': "sample blaa 2",
                'display': false,
                'content': 'kjsdn cfjsbhrf rf hsurhvdfuhgjvni fgtbiudhri gvhiudrhjtgvdbudfghvbds fsdf kjsdn cfjsbhrf rf hsurhvdfuhgjvni fgtbiudhri gvhiudrhjtgvdbudfghvbds fsdf kjsdn cfjsbhrf rf hsurhvdfuhgjvni fgtbiudhri gvhiudrhjtgvdbudfghvbds fsdf kjsdn cfjsbhrf rf hsurhvdfuhgjvni fgtbiudhri gvhiudrhjtgvdbudfghvbds fsdf'
            },
            {
                'heading': "sample blaa 3",
                'display': false,
                'content': 'kjsdn cfjsbhrf rf hsurhvdfuhgjvni fgtbiudhri gvhiudrhjtgvdbudfghvbds fsdf kjsdn cfjsbhrf rf hsurhvdfuhgjvni fgtbiudhri gvhiudrhjtgvdbudfghvbds fsdf kjsdn cfjsbhrf rf hsurhvdfuhgjvni fgtbiudhri gvhiudrhjtgvdbudfghvbds fsdf kjsdn cfjsbhrf rf hsurhvdfuhgjvni fgtbiudhri gvhiudrhjtgvdbudfghvbds fsdf'
            },
            {
                'heading': "sample blaa 4",
                'display': false,
                'content': 'kjsdn cfjsbhrf rf hsurhvdfuhgjvni fgtbiudhri gvhiudrhjtgvdbudfghvbds fsdf kjsdn cfjsbhrf rf hsurhvdfuhgjvni fgtbiudhri gvhiudrhjtgvdbudfghvbds fsdf kjsdn cfjsbhrf rf hsurhvdfuhgjvni fgtbiudhri gvhiudrhjtgvdbudfghvbds fsdf kjsdn cfjsbhrf rf hsurhvdfuhgjvni fgtbiudhri gvhiudrhjtgvdbudfghvbds fsdf'
            },
            {
                'heading': "sample blaa 5",
                'display': false,
                'content': 'kjsdn cfjsbhrf rf hsurhvdfuhgjvni fgtbiudhri gvhiudrhjtgvdbudfghvbds fsdf kjsdn cfjsbhrf rf hsurhvdfuhgjvni fgtbiudhri gvhiudrhjtgvdbudfghvbds fsdf kjsdn cfjsbhrf rf hsurhvdfuhgjvni fgtbiudhri gvhiudrhjtgvdbudfghvbds fsdf kjsdn cfjsbhrf rf hsurhvdfuhgjvni fgtbiudhri gvhiudrhjtgvdbudfghvbds fsdf'
            }
        ]
    }

    toggleDataDisplay(i, e) {
        let bars = document.querySelectorAll('.data-container-box');
        bars.forEach((bar, idx) => {
            if(!bar.classList.contains('data-hidden') && idx !== i)
                bar.classList.add('data-hidden');
        })
            
        let cont = document.getElementById(i);
        let dataCont = cont.getElementsByClassName('data-container-box')[0];
        if(dataCont.classList.contains('data-hidden')) {
            e.target.innerHTML = '^';
            dataCont.classList.remove('data-hidden');
            //this.timer = setTimeout(() => dataCont.classList.add('data-hidden'), 5000);
        } else {
            if(this.timer) clearTimeout(this.timer);
            e.target.innerHTML = '#';
            dataCont.classList.add('data-hidden');
        }
    }

    createDataBarUI() {
        this.dataList.forEach((data,i) => {
            let div = document.createElement('DIV');
            div.className = 'data-container';
            div.id = i;
            div.innerHTML = `<div class="header-container"><h2>${data.heading}</h2><button class="data-display-btn">#</button></div>
                            <div class="data-container-box data-hidden"><label>${data.content}</label></div>`

            let btn = div.getElementsByClassName('data-display-btn')[0];
            btn.addEventListener('click', this.toggleDataDisplay.bind(this, i));

            let cont = document.querySelector('#data-bars');
            cont.appendChild(div);
        }) 
    }

    init() {
        this.createDataBarUI();
    }
}

let bar = new DataBar();
bar.init();