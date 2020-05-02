<template>
  <div>
    <header-blue />
    <div class="section">
      <div class="columns is-centered">
        <div class="column is-one-third">
          <task-board-list
            :tasks="asyncTodoTasks"
            :title-board="todoBoard"
            :color-class="todoStyleBoard"
            :visualizza-tutti="allTask"
          />
        </div>

        <div class="column is-one-third">
          <task-board-list
            :tasks="asyncDoingTasks"
            :title-board="doingBoard"
            :color-class="doingStyleBoard"
            :visualizza-tutti="allTask"
          />
        </div>

        <div class="column is-one-third">
          <task-board-list
            :tasks="asyncDoneTasks"
            :title-board="doneBoard"
            :color-class="doneStyleBoard"
            :visualizza-tutti="allTask"
          />
        </div>
      </div>

      <div class="section">
        <nuxt-link to="/tasks/newTask">
          <button class="button is-info">
            Nuovo Task
          </button>
        </nuxt-link>
      </div>
    </div>
    <footer-blue />
  </div>
</template>

<script>
import axios from 'axios'
import HeaderBlue from '../components/shared/HeaderBlue.vue'
import FooterBlue from '../components/shared/FooterBlue.vue'
import TaskBoardList from '../components/board/TaskBoardList.vue'

export default {
  watchQuery: true,
  components: {
    TaskBoardList,
    HeaderBlue,
    FooterBlue
  },
  asyncData () {
    return axios
      .get(process.env.EXTERNAL_API_URL + '/v1/tasks')
      .then((res) => {
        const asyncTasksTodo = []
        const asyncTasksDoing = []
        const asyncTasksDone = []
        res.data.tasks.forEach((task) => {
          switch (task.state) {
            case 'TODO':
              asyncTasksTodo.push(task)
              break
            case 'DOING':
              asyncTasksDoing.push(task)
              break
            case 'DONE':
              asyncTasksDone.push(task)
              break
            default:
              break
          }
        })
        return {
          asyncTodoTasks: asyncTasksTodo,
          asyncDoingTasks: asyncTasksDoing,
          asyncDoneTasks: asyncTasksDone,
          // asyncTasks: res.data.tasks,
          allTask: res.data.totalSize > 5
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
