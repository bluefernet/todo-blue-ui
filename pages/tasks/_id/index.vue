<template>
  <task-post-page
    :task="task"
  />
</template>

<script>
import TaskPostPage from '../../../components/TaskPostPage.vue'

export default {
  components: {
    TaskPostPage
  },
  asyncData (context) {
    return axios
      .get(
        process.env.EXTERNAL_API_URL +
          '/v1/task/' +
          context.route.params.id
      )
      .then((res) => {
        return {
          task: res.data.task
        }
      })
      .catch(e => console.log(e))
  }
}
</script>

<style scoped>
</style>
