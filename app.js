var app = new Vue({
    el: "#app",
    data: {
        backgroundImg: './assets/background.jpg',
        counter:0,
        negativeAllowed: true,
    },
    methods: {
        increase() {
            this.counter += 1;
        },
        decrease() {
            if( this.negativeAllowed) {
                this.counter-= 1;
            } else {
                if(this.counter >=1) {
                    this.counter-= 1;
                } else {
                    this.counter = 0;
                }
            }
        },
        onClick() {
           this.negativeAllowed = !this.negativeAllowed;
           if(!this.negativeAllowed && this.counter < 0) {
               this.counter = 0;
           }
        },
    },
    computed: {
        isBtnDisabled() {
            return !this.negativeAllowed && this.counter <= 0;
        }
        
    }
})