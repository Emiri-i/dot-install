(function(){
    'use strict';

    //双方向データバインディング
    var vm = new Vue({
        el: '#app',
        data: {
            newItem:'',
            todos: [{
                title:'task 1',
                isDone:false
            },{
                title:'task 2',
                isDone:false
            },{
                title:'task 3',
                isDone:true
            }
        ]
        },
        methods: {
            addItem:function() {
                var item = {
                    title:this.newItem,
                    isDone:false
                };
                this.todos.push(item);
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