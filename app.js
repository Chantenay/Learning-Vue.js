const app = Vue.createApp({
    //data, functions etc
    // template: '<h2> Template </h2>'
    data() {
        return {
            showBooks: true, 
            title: 'The Final Empire', 
            author: 'Brandon',
            age: 45
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        }
    }
})

app.mount("#app")


