'use strict';

console.clear();
{
    const year = 2020;
    const month = 4;//5月

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
        // console.log(dates);
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

    function createCalendar() {
        const dates = [
            ...getCalendarHead(),
            ...getCalendarBody(),            
            ...getCalendarTail()
        ];
        console.log(dates);
    }

    createCalendar();

}