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
import axios from 'axios'
import TaskCardList from '../../../components/TaskCardList.vue'
import HeaderBlue from '../../../components/HeaderBlue.vue'
import FooterBlue from '../../../components/FooterBlue.vue'
export default {
  components: {
    TaskCardList,
    HeaderBlue,
    FooterBlue
  },
  asyncData (context) {
    console.log(' tasksList ' + context.route.params.id)
    return axios
      .get(
        process.env.EXTERNAL_API_URL +
          '/v1/tasksState/' +
          context.route.params.id
      )
      .then((res) => {
        console.log(res.data) // TODO - VERIFICARE QUESTA PAGINA
        return {
          tasksList: res.data.tasks,
          statePage: context.route.params.id
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
