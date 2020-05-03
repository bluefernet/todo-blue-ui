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
            :visualizza-tutti="allTodoTask"
          />
        </div>

        <div class="column is-one-third">
          <task-board-list
            :tasks="asyncDoingTasks"
            :title-board="doingBoard"
            :color-class="doingStyleBoard"
            :visualizza-tutti="allDoingTask"
          />
        </div>

        <div class="column is-one-third">
          <task-board-list
            :tasks="asyncDoneTasks"
            :title-board="doneBoard"
            :color-class="doneStyleBoard"
            :visualizza-tutti="allDoneTask"
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
import HeaderBlue from '../components/shared/HeaderBlue.vue'
import FooterBlue from '../components/shared/FooterBlue.vue'
import TaskBoardList from '../components/board/TaskBoardList.vue'
import { allTasks } from '../api'
import { boardItemNumber } from '../shared'

export default {
  watchQuery: true,
  components: {
    TaskBoardList,
    HeaderBlue,
    FooterBlue
  },
  asyncData () {
    return allTasks(boardItemNumber) // _pageSize --> Elements for Board
      .then((res) => {
        return {
          asyncTodoTasks: res.todo,
          asyncDoingTasks: res.doing,
          asyncDoneTasks: res.done,
          allTodoTask: !(res.todo.length < boardItemNumber),
          allDoingTask: !(res.doing.length < boardItemNumber),
          allDoneTask: !(res.done.length < boardItemNumber)
        }
      })
      .catch(e => console.log(e))
  },
  data () {
    return {
      todoStyleBoard: 'is-link',
      doingStyleBoard: 'is-warning',
      doneStyleBoard: 'is-success',
      todoBoard: 'Inserito',
      doingBoard: 'In elaborazione',
      doneBoard: 'Completato'
    }
  },
  methods: {}
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
