
    let table11 = document.querySelector('.grid-1');
    let table12 = document.querySelector('.grid-2');
    let table13 = document.querySelector('.grid-3');
    let table21 = document.querySelector('.grid-4');
    let table22 = document.querySelector('.grid-5');
    let table23 = document.querySelector('.grid-6');
    let table31 = document.querySelector('.grid-7');
    let table32 = document.querySelector('.grid-8');
    let table33 = document.querySelector('.grid-9');
    let check_all_filled = 0;
    let checked_table11 = 0;
    let checked_table12 = 0;
    let checked_table13 = 0;
    let checked_table21 = 0;
    let checked_table22 = 0;
    let checked_table23 = 0;
    let checked_table31 = 0;
    let checked_table32 = 0;
    let checked_table33 = 0;
    let checked_table = 0;
    var X = 0;
    let msgbox = document.querySelector('.msgbox');



    function makeMove1() {
        if (checked_table11 == 0 && checked_table == 0) {
            checked_table11 = 1;
            check_all_filled++;
            if (X == 0) {
                table11.innerHTML = 'X';
                X = 1;
                win();
            }
            else if (X == 1) {
                table11.innerHTML = 'O';
                X = 0;
                win();
            }

        }
    }
    function makeMove2() {
        if (checked_table12 == 0 && checked_table == 0) {
            checked_table12 = 1;
            check_all_filled++;
            if (X == 0) {
                table12.innerHTML = 'X';
                X = 1;
                win();
            }
            else if (X == 1) {
                table12.innerHTML = 'O';
                X = 0;
                win();
            }

        }
    }
    function makeMove3() {
        if (checked_table13 == 0 && checked_table == 0) {

            checked_table13 = 1;
            check_all_filled++;
            if (X == 0) {
                table13.innerHTML = 'X';
                X = 1;
                win();
            }
            else if (X == 1) {
                table13.innerHTML = 'O';
                X = 0;
                win();
            }
        }
    }
    function makeMove4() {
        if (checked_table21 == 0 && checked_table == 0) {
            checked_table21 = 1;
            check_all_filled++;
            if (X == 0) {
                table21.innerHTML = 'X';
                X = 1;
                win();
            }
            else if (X == 1) {
                table21.innerHTML = 'O';
                X = 0;
                win();
            }

        }
    }
    function makeMove5() {
        if (checked_table22 == 0 && checked_table == 0) {
            checked_table22 = 1;
            check_all_filled++;
            if (X == 0) {
                table22.innerHTML = 'X';
                X = 1;
                win();
            }
            else if (X == 1) {
                table22.innerHTML = 'O';
                X = 0;
                win();
            }

        }
    }
    function makeMove6() {
        if (checked_table23 == 0 && checked_table == 0) {
            checked_table23 = 1;
            check_all_filled++;
            if (X == 0) {
                table23.innerHTML = 'X';
                X = 1;
                win();
            }
            else if (X == 1) {
                table23.innerHTML = 'O';
                X = 0;
                win();
            }

        }
    }
    function makeMove7() {
        if (checked_table31 == 0 && checked_table == 0) {
            checked_table31 = 1;
            check_all_filled++;
            if (X == 0) {
                table31.innerHTML = 'X';
                X = 1;
                win();
            }
            else if (X == 1) {
                table31.innerHTML = 'O';
                X = 0;
                win();
            }

        }
    }
    function makeMove8() {
        if (checked_table32 == 0 && checked_table == 0) {
            checked_table32 = 1;
            check_all_filled++;
            if (X == 0) {
                table32.innerHTML = 'X';
                X = 1;
                win();
            }
            else if (X == 1) {
                table32.innerHTML = 'O';
                X = 0;
                win();
            }

        }
    }
    function makeMove9() {
        if (checked_table33 == 0 && checked_table == 0) {
            checked_table33 = 1;
            check_all_filled++;
            if (X == 0) {
                table33.innerHTML = 'X';
                X = 1;
                win();
            }
            else if (X == 1) {
                table33.innerHTML = 'O';
                X = 0;
                win();
            }

        }
    }

    function win() {



        if ((table11.innerHTML == 'X' && table12.innerHTML == 'X' && table13.innerHTML == 'X') || (table21.innerHTML == 'X' && table22.innerHTML == 'X' && table23.innerHTML == 'X') || (table31.innerHTML == 'X' && table32.innerHTML == 'X' && table33.innerHTML == 'X') || (table11.innerHTML == 'X' && table21.innerHTML == 'X' && table31.innerHTML == 'X') || (table12.innerHTML == 'X' && table22.innerHTML == 'X' && table32.innerHTML == 'X') || (table13.innerHTML == 'X' && table23.innerHTML == 'X' && table33.innerHTML == 'X') || (table11.innerHTML == 'X' && table22.innerHTML == 'X' && table33.innerHTML == 'X') || (table13.innerHTML == 'X' && table22.innerHTML == 'X' && table31.innerHTML == 'X')) {
            document.body.style.backgroundColor = 'pink';
            msgbox.style.display = 'flex';
            msgbox.innerHTML = 'X Wins, O Loses';
            checked_table = 1;
            window.setInterval('refresh()', 5000);

        }

        else if ((table11.innerHTML == 'O' && table12.innerHTML == 'O' && table13.innerHTML == 'O') || (table21.innerHTML == 'O' && table22.innerHTML == 'O' && table23.innerHTML == 'O') || (table31.innerHTML == 'O' && table32.innerHTML == 'O' && table33.innerHTML == 'O') || (table11.innerHTML == 'O' && table21.innerHTML == 'O' && table31.innerHTML == 'O') || (table12.innerHTML == 'O' && table22.innerHTML == 'O' && table32.innerHTML == 'O') || (table13.innerHTML == 'O' && table23.innerHTML == 'O' && table33.innerHTML == 'O') || (table11.innerHTML == 'O' && table22.innerHTML == 'O' && table33.innerHTML == 'O') || (table13.innerHTML == 'O' && table22.innerHTML == 'O' && table31.innerHTML == 'O')) {
            document.body.style.backgroundColor = 'lightblue';
            msgbox.style.display = 'flex';
            msgbox.innerHTML = 'O Wins, X Loses';
            checked_table = 1;
            window.setInterval('refresh()', 5000);
        }

        else if (check_all_filled == 9) {
            document.body.style.backgroundColor = 'red';
            msgbox.style.display = 'flex';
            msgbox.innerHTML = 'Draw';
            checked_table = 1;
            window.setInterval('refresh()', 5000);
        }
    }

    function refresh() {
        window.location.reload();
    }


