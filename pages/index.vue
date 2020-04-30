<template>
  <div>
    <header-blue />
    <div class="section">
      <div class="columns is-centered">
        <div class="column is-one-third">
          <task-board-list
            :tasks="asyncTasks"
            :title-board="todoBoard"
            :color-class="todoStyleBoard"
          />
        </div>

        <div class="column is-one-third">
          <task-board-list
            :tasks="asyncTasks"
            :title-board="doingBoard"
            :color-class="doingStyleBoard"
          />
        </div>

        <div class="column is-one-third">
          <task-board-list
            :tasks="asyncTasks"
            :title-board="doneBoard"
            :color-class="doneStyleBoard"
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
    <footer-blue />
  </div>
</template>

<script>
import axios from 'axios'
import HeaderBlue from '../components/HeaderBlue.vue'
import FooterBlue from '../components/FooterBlue.vue'
import TaskBoardList from '../components/TaskBoardList.vue'

export default {
  components: {
    TaskBoardList,
    HeaderBlue,
    FooterBlue
  },
  asyncData () {
    console.log('asyncTask')
    return axios
      .get(process.env.EXTERNAL_API_URL + '/v1/tasks')
      .then((res) => {
        console.log('!!!!!!!!!!!!!!!!!' + res.data.tasks)

        return {
          asyncTasks: res.data.tasks
        }
      })
      .catch(e => console.log(e))
  },
  data () {
    return {
      todoStyleBoard: 'is-link',
      doingStyleBoard: 'is-warning',
      doneStyleBoard: 'is-success',
      todoBoard: 'TODO',
      doingBoard: 'DOING',
      doneBoard: 'DONE',
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
    boardItemShow () {
      alert('On click!')
    },
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
