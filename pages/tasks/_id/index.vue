<template>
  <task-post-page :task="editedTask" @TaskPostPageUpdate="pageUpdated" />
</template>

<script>
import axios from 'axios'
import TaskPostPage from '../../../components/TaskPostPage.vue'

export default {
  components: {
    TaskPostPage
  },
  asyncData (context) {
    console.log('context.route.params.id ' + context.route.params.id)
    return axios
      .get(process.env.EXTERNAL_API_URL + '/v1/task/' + context.route.params.id)
      .then((res) => {
        console.log('res.data.task ' + res.data.task)
        console.log('res.data.task ' + res.data.task.title)
        console.log('res.data.task pre ' + res.data.task.date)
        console.log('res.data.task ' + res.data.task.description)
        res.data.task.date = new Date(res.data.task.date)
        console.log('res.data.task post ' + res.data.task.date)
        console.log('res.data.task state ' + res.data.task.state)
        switch (res.data.task.state) {
          case 'DONE':
            res.data.task.state = 'Done'
            break
          case 'TODO':
            res.data.task.state = 'To do'
            break
          case 'DOING':
            res.data.task.state = 'Doing'
            break
          default:
            break
        }
        return {
          editedTask: res.data.task
        }
      })
      .catch(e => console.log(e))
  },
  data () {
  },
  methods: {
    pageUpdated () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
</style>
