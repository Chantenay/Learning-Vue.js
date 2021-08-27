<template>
  <h1>{{title}}</h1>
  <p>Welcome</p>
  <div v-if="showModal">
    <Modal :header="header" :text="text" theme='sale' @close="toggleModal" /> 
  </div>
  <button @click="toggleModal">Open Modal</button>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: {
    Modal
  },
  data() {
    return {
      title: 'My First Vue App!',
      header: "Sign up for Giveaway!",
      text: "Get swag now", 
      showModal: false, 
    }
  }, 
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    },
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  h1 {
    border-bottom: 1px solid #ddd;
    display: inline-block;
    padding-bottom: 10px;
  }

  .modal.sale {
    background: crimson;
    color: white;
  }

  .modal.sale h1 {
    color: white;
  }

</style>
