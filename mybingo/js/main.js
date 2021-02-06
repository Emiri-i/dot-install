'use strict';

{

    //列を作成
    function createColum(col) {
        // const source = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
        const source = [];
        for (let i = 0; i < 15; i++) {
            source[i] = i + 1 + 15 * col;
        }

        const column = [];

        for (let i = 0; i < 5; i++) {
            column[i] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
        }
        return column;
    }
    //すべての列を作成
    function createColumns() {

        const columns = [];
        for(let column = 0; column < 5; column++) {
            columns[column] = createColum(column);
        }
        columns[2][2] = 'FREE'
        return columns;
    } 
    
    // //行と列を反転する
    // function createBingo(){
    //     const bingo = [];
    //     for(let row = 0; row < 5; row++) {
    //         bingo[row] = [];
    //         for(let col = 0; col < 5; col++) {
    //             bingo[row][col] = columns[col][row];
    
    //         }
    //     }
    //     return bingo;
    // }

    //ページに反映
    function renderBingo(bingo) {
        
        for(let row = 0; row < 5; row++) {
            const tr = document.createElement('tr');
            for(let col= 0; col < 5; col++) {
                const td = document.createElement('td');
                td.textContent = bingo[col][row];
                tr.appendChild(td);
            }
            document.querySelector('tBody').appendChild(tr);
    
        }
    }    

    const columns = createColumns();
    // const bingo = createBingo(columns);
    renderBingo(columns);


}