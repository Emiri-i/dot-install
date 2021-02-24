(function(){
    'use strict';

    var likeComponent = Vue.extend({
        template:'<button>like</button>'
        // template:'<div><button>like</button><button>like</button></div>'
    });

    var app = new Vue({
        el: '#app',
        components: {
            'like-component': likeComponent
        }
    });

})();