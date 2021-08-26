const app = Vue.createApp({
    //data, functions etc
    // template: '<h2> Template </h2>'
    data() {
        return {
            showBooks: true, 
            title: 'The Final Empire', 
            author: 'Brandon',
            age: 45, 
            x: 0, 
            y: 0
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data) {
            console.log(e, e.type)
            if (data) {
                console.log(data)
            }
        }, 
        handleMouseMove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
})

app.mount("#app")


