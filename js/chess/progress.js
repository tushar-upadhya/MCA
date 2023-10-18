class ChessBoard {
    constructor() {
    }

    getRowCol(id) {
        id = id.split('-');
        return [parseInt(id[0]), parseInt(id[1])]
    }

    getDiagonalsMap(row, col) {
        let i = row, j = col, hash = {};
        while(i >= 0 && j >= 0) {
            let str = i+'-'+j;
            hash[str] = 1;
            i--; j--;
        }
        i = row, j = col;
        while(i >= 0 && j < 8) {
            let str = i+'-'+j;
            hash[str] = 1;
            i--; j++;
        }
        i = row, j = col;
        while(i < 8 && j >= 0) {
            let str = i+'-'+j;
            hash[str] = 1;
            i++; j--;
        }
        i = row, j = col;
        while(i < 8 && j < 8) {
            let str = i+'-'+j;
            hash[str] = 1;
            i++; j++;
        }
        return hash;
    }

    showMoves(e) {
        if(e.target.tagName == 'TD') {
            let [row, col] = this.getRowCol(e.target.id);
            let hash = this.getDiagonalsMap(row, col);
            let cells = document.querySelectorAll('.chess-cell');

            cells.forEach(cell => {
                let id = cell.id;
                if(hash[id]) {
                    cell.classList.add('highlighted');
                } else {
                    cell.classList.remove('highlighted');
                }
            })
        }
    }

    createChessBoard() {
       let table = document.createElement('TABLE');
       let html = '';
       table.addEventListener('click', this.showMoves.bind(this));
       for(var i = 0; i < 8; i++) {
            html += `<tr>`;
            for(var j = 0; j < 8; j++) {
                if((i+j)%2 !== 0) {
                    html += `<td class='chess-cell dark-cell' id=${i +'-'+ j}></td>`
                } else {
                    html += `<td class='chess-cell' id=${i +'-'+ j}></td>`
                }
                
            }
            html += '</tr>'
       }
       table.innerHTML = html;
       let cont = document.querySelector('.chess-board');
       cont.appendChild(table);
    }

    init() {
        this.createChessBoard();
    }
}

let obj = new ChessBoard();
obj.init();