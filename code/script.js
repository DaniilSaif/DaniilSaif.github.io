var app = new Vue({
    el: '#app',
    data: {
        mes: "",
        answer:'Робин Хобб',
        robin:false,
    },
    methods:{
    isTrue: function(){
        if(this.mes==='123'){
            this.robin = true;
            }
        }
    }
})
    