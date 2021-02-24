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
            }]
            // todos: []
        },
        watch: {
            // todos: function() {
            //     localStorage.setItem('todos',JSON.stringify(this.todos));
            //     alert('Data saved');
            // }
            todos:  {
                handler: function() {
                    localStorage.setItem('todos',JSON.stringify(this.todos));
                    // alert('Data saved');
                },
                deep: true
            }
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
            },
            purge: function() {
                if(!confirm('delete finished?')){
                    return;
                }
                this.todos = this.remaining;
            }
        },
        computed: {
            remaining: function() {
                return this.todos.filter(function(todo) {
                        return !todo.isDone;
                    });                
            }
        }
    });
})();