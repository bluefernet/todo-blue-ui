<template>
  <div>
    <header-blue />
    <div class="section">
      <div>
        <div class="tabs" @click="chooseTab">
          <ul>
            <li :class="{'is-active': tabIsActive}">
              <a>Todo</a>
            </li>
            <li>
              <a>Doing</a>
            </li>
            <li>
              <a>Done</a>
            </li>
          </ul>
        </div>
        <div class="columns">
          <div class="column">
            <task-card
              :title="loadedTask.title"
              :description="loadedTask.description"
              :date="loadedTask.date"
            />
          </div>
        </div>
      </div>

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
    </div>

    <footer-blue />
  </div>
</template>

<script>
import axios from 'axios'
import HeaderBlue from '../components/HeaderBlue.vue'
import TaskCard from '../components/TaskCard.vue'
import FooterBlue from '../components/FooterBlue.vue'

export default {
  components: {
    TaskCard,
    HeaderBlue,
    FooterBlue
  },
  asyncData () {
    console.log('asyncData')
    axios
      .get(
        process.env.EXTERNAL_API_URL +
            '/v1/task/' +
            '01E73GG7NWARDPYXARFXHN06S7' // Test
      )
      .then((res) => {
        console.log('!!!!!!!!!!!!!!!!!' + res.data.task)
        this.loadedTask = res.data.task
        return this.loadedTask
      })
      .catch(e => console.log(e))
  },
  data () {
    return {
      loadedTask: {},
      tabIsActive: 'true',
      dataPick: new Date(),
      element: '',
      tasks: {
        id: '01E70CK7AR9X6PT17QWV1YMK4V'
      }
    }
  },
  methods: {
    chooseTab (event) {
      console.log(event)
      this.tabIsActive = ''
    },
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
