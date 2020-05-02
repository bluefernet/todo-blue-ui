<template>
  <div>
    <task-post-page :task="editedTask" @TaskPostPageUpdate="pageUpdated" />

    <div>
      <b-modal
        :active.sync="isConfirmModalActive"
        has-modal-card
        trap-focus
        :destroy-on-hide="false"
        aria-role="dialog"
        aria-modal
      >
        <modal-blue-confirm />
      </b-modal>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import TaskPostPage from '../../../components/TaskPostPage.vue'
import ModalBlueConfirm from '../../../components/ModalBlueConfirm.vue'

export default {
  components: {
    ModalBlueConfirm,
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
    return {
      isConfirmModalActive: false
    }
  },
  methods: {
    pageUpdated () {
      this.isConfirmModalActive = true
    }
  }
}
</script>

<style scoped>
</style>
