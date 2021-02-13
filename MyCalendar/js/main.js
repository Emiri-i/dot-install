'use strict';

console.clear();
{
    const today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth();

    function getCalendarHead() {
        const dates = [];
        const d = new Date(year, month, 0).getDate();//先月の末日の日付
        const n = new Date(year, month, 1).getDay();//今月初日の曜日

        for (let i = 0; i < n; i++) {
            dates.unshift({
                date: d - i,
                isToday: false,
                isDisabled: true
            });
        }
        // console.log(dates);
        return dates;

    }


    function getCalendarBody() {
        const dates = [];
        const lastDate = new Date(year, month + 1, 0).getDate(); //今月の末日の日付

        for (let i = 1; i <= lastDate; i++) {
            dates.push({
                date: i,
                isToday: false,
                isDisabled: false
            });
        }
        if (year === today.getFullYear() && month === today.getMonth()) {
            dates[today.getDate() - 1].isToday = true;

        }
        return dates;
    }

    function getCalendarTail() {
        const dates = [];
        const lastDay = new Date(year, month + 1, 0).getDay();

        for (let i = 1; i < 7 - lastDay; i++) {
            dates.push({
                date: i,
                isToday: false,
                isDisabled: true
            });
        }
        // console.log(dates);
        return dates;
    }

    function clearCalendar() {
        const tbody = document.querySelector('tbody');
        while (tbody.firstChild) {
            tbody.removeChild(tbody.firstChild);
        }
    }

    function renderTitle() {
        const title = `${year}/${String(month + 1).padStart(2, '0')}`
        document.getElementById('title').textContent = title;
    }

    function renderWeeks() {
        const dates = [
            ...getCalendarHead(),
            ...getCalendarBody(),
            ...getCalendarTail()
        ];
        const weeks = [];
        const weekCounts = dates.length / 7;
        for (let i = 0; i < weekCounts; i++) {
            weeks.push(dates.splice(0, 7));
        }


        weeks.forEach((week) => {
            const tr = document.createElement('tr');
            week.forEach((date) => {
                const td = document.createElement('td');
                td.textContent = date.date;
                if (date.isToday) {
                    td.classList.add('today');
                }
                if (date.isDisabled) {
                    td.classList.add('disable');
                }
                tr.appendChild(td);
            });
            document.querySelector('tbody').appendChild(tr);
        });
    }

    function createCalendar() {
        clearCalendar();
        renderTitle();
        renderWeeks();
    }

    //前月をクリックしたとき
    document.getElementById('prev').addEventListener('click', () => {
        month--;
        if (month < 0) {
            year--;
            month = 11;
        }
        createCalendar();
    });

    //次月をクリックしたとき
    document.getElementById('next').addEventListener('click', () => {
        month++;
        if (month > 11) {
            year++;
            month = 0;
        }
        createCalendar();
    });

    //今日をクリックしたとき
    document.getElementById('today').addEventListener('click', () => {
        year = today.getFullYear();
        month = today.getMonth();        
        createCalendar();
    });

    createCalendar();

}