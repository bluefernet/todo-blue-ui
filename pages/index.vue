<template>
  <div>
    <header-blue />
    <div class="container">
      <div class="columns">
        <div class="column is-one-third">
          <div class="box">
            <h1 class="title is-2">
              <strong>Inseriti</strong>
            </h1>
            <hr>
            <task-card />
            <hr>
            <task-card />
            <hr>
            <task-card />
          </div>
        </div>
        <div class="column is-one-third">
          <div class="box">
            <h1 class="title is-2">
              <strong>Elaborati</strong>
            </h1>
            <hr>
            <task-card />
          </div>
        </div>
        <div class="column is-one-third">
          <div class="box">
            <h1 class="title is-2">
              <strong>Chiusi</strong>
            </h1>
            <hr>
            <task-card />
            <hr>
            <task-card />
          </div>
        </div>
      </div>
      <div>
        <b-field label="Select a date">
          <b-datepicker
            v-model="dataPick"
            placeholder="Type or select a date..."
            icon="calendar-today"
            :selected-date="dataPick"
            editable
          />
        </b-field>
        <div>{{ dataPick }}</div>
        <button @click="visualizeData">
          Visualizza
        </button>
        <button class="button">
          <nuxt-link to="/tasks">
            go to tasks
          </nuxt-link>
        </button>
        <button class="button">
          <nuxt-link to="/tasks/newTask">
            go to new
          </nuxt-link>
        </button>
        <button @click="LinkId">
          Go to id
        </button>
      </div>
    </div>
    <footer-blue />
  </div>
</template>

<script>
import HeaderBlue from '../components/HeaderBlue.vue'
import TaskCard from '../components/TaskCard.vue'
import FooterBlue from '../components/FooterBlue.vue'

export default {
  components: {
    TaskCard,
    HeaderBlue,
    FooterBlue
  },
  data () {
    return {
      dataPick: new Date(),
      element: '',
      tasks: {
        id: '01E70CK7AR9X6PT17QWV1YMK4V'
      }
    }
  },
  methods: {
    visualizeData () {
      console.log('dataPick ' + this.dataPick)
      this.dataPick = new Date(Date.now())
    },
    LinkId () {
      console.log('id ' + this.tasks.id)
      this.$router.push({ path: '/tasks/' + this.tasks.id })
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
