<template>
  <div>
    <task-post-page :task="editedTask" @TaskPostPageUpdate="pageUpdated" />
    <div>
      <b-modal
        :active.sync="isConfirmModalActive"
        has-modal-card
        trap-focus
        :can-cancel="x"
        :destroy-on-hide="false"
        aria-role="dialog"
        aria-modal
      >
        <modal-confirm-form />
      </b-modal>
    </div>
  </div>
</template>

<script>
import TaskPostPage from '../../../components/TaskPostPage.vue'
import ModalConfirmForm from '../../../components/modal/ModalConfirmForm.vue'
import { taskById } from '../../../api'

export default {
  components: {
    ModalConfirmForm,
    TaskPostPage
  },
  asyncData (context) {
    return taskById(context.route.params.id)
      .then((res) => {
        return {
          editedTask: res
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
