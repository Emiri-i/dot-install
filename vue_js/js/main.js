(function(){
    'use strict';

    //双方向データバインディング
    var vm = new Vue({
        el: '#app',
        data: {
            todos: [
                'task1',
                'task2',
                'task3'
            ]
        }
    });
})();