const app = Vue.createApp({
    //data, functions etc
    // template: '<h2> Template </h2>'
    data() {
        return {
            title: 'The Final Empire', 
            author: 'Brandon',
            age: 45
        }
    },
    methods: {
        changeTitle(title) {
            this.title = title
        }
    }
})

app.mount("#app")


