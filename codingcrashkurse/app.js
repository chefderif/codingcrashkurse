new Vue({
    el: '#app',
    data: {
        name: 'James',       
        lastName: "",
        firstName: "",
        fullName: this.lastName + " " + this.firstName,
        website: 'http://www.google.de'
    },
    methods: {
        sayHi: function(){
            return 'TEST  TEST';
        }
    }
});