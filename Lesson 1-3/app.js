const app = Vue.createApp({
    //data, functions etc
    // template: '<h2> Template </h2>'
    data() {
        return {
            url: '', 
            showBooks: true, 
            books: [
                { title: 'name of the wind', author: 'patrick rothfuss', img: 'assets/1.jpeg', isFav: true },
                { title: 'the way of kings', author: 'brandon sanderson', img: 'assets/2.jpeg', isFav: false },
                { title: 'the final empire', author: 'brandon sanderson', img: 'assets/3.jpeg', isFav: true },
            ]
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        }
    }, 
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount("#app")


