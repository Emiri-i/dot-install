(function(){
    'use strict';

    var likeComponent = Vue.extend({
        props: {
            message: {
                type:String,
                default:'Like'
            }
        },
        data: function() {
            return {
                count:0
            }
        },
        template:'<button @click="countUp">{{message}} {{ count }}</button>',
        methods: {
            countUp: function() {
                this.count ++;
                this.$emit('increment');
            }
        }
    });

    var app = new Vue({
        el: '#app',
        data: {
            total:0
        },
        components: {
            'like-component': likeComponent
        },
        methods: { 
            incrementTotal: function() {
            this.total ++;
            }
        }
    });

})();