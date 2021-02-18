(function(){
    'use strict';

    //双方向データバインディング
    var vm = new Vue({
        el: '#app',
        data: {
            newItem:'',
            todos: [
                'task1',
                'task2',
                'task3'
            ]
        },
        methods: {
            // addItem:function(e) {
            //     e.preventDefault();
            //     this.todos.push(this.newItem);
            // }
            addItem:function() {
                this.todos.push(this.newItem);
                this.newItem='';
            },
            deletItem:function(index) {
                if(confirm('are you sure?')) {
                    this.todos.splice(index,1);
                }
            }
        }
    });
})();