<template>
  <div>
    <header-blue />
    <div class="columns has-text-centered">
      <div class="column">
        <h1 class="title">
          Task
          <strong>{{ statePage }}</strong>
        </h1>
      </div>
    </div>

    <task-card-list :tasks="tasksList" />
    <footer-blue />
  </div>
</template>

<script>
import TaskCardList from '../../../components/card/TaskCardList.vue'
import HeaderBlue from '../../../components/shared/HeaderBlue.vue'
import FooterBlue from '../../../components/shared/FooterBlue.vue'
import { JSONtoOptionState } from '../../../shared'
import { tasksListByState } from '../../../api'

export default {
  components: {
    TaskCardList,
    HeaderBlue,
    FooterBlue
  },
  asyncData (context) {
    return tasksListByState(context.route.params.id)
      .then((res) => {
        return {
          tasksList: res.tasks,
          statePage: JSONtoOptionState(context.route.params.id)
        }
      })
      .catch(e => console.log(e))
  },
  data () {
    return {
      tasks: []
    }
  },
  methods: {}
}
</script>

<style scoped>
</style>
