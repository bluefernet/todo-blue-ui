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
            <!--task-card
              :title="asyncTask.title"
              :description="asyncTask.description"
              :date="asyncTask.date"
            / -->
            <task-card-list
              :tasks="asyncTasks"
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
import TaskCardList from '../components/TaskCardList.vue'
import FooterBlue from '../components/FooterBlue.vue'

export default {
  components: {
    TaskCard,
    TaskCardList,
    HeaderBlue,
    FooterBlue
  },
  asyncData () {
    console.log('asyncTask')
    return axios
      .get(
        process.env.EXTERNAL_API_URL +
          '/v1/tasks'
      )
      .then((res) => {
        console.log('!!!!!!!!!!!!!!!!!' + res.data.task)
        console.log('res.data.task.title ' + res.data.task.title)
        console.log('res.data.task.id ' + res.data.task.id)

        return {
          asyncTasks: res.data.tasks
        }
      })
      .catch(e => console.log(e))
  },
  data () {
    return {
      taskArray: [
        {
          title: 'titolo 1',
          description: 'descrizione 1',
          date: '2020-01-01'
        },
        {
          title: 'titolo 2',
          description: 'descrizione 2',
          date: '2020-02-02'
        }
      ],
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
      console.log(asyncTasks)
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
