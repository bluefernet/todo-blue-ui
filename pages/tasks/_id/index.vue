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
        <modal-confirm-form />
      </b-modal>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import TaskPostPage from "../../../components/TaskPostPage.vue";
import ModalConfirmForm from "../../../components/modal/ModalConfirmForm.vue";
import { JSONtoOptionState } from "../../../shared";
import { taskById } from "../../../api";

export default {
  components: {
    ModalConfirmForm,
    TaskPostPage
  },
  asyncData(context) {
    return taskById(context.route.params.id)
      .then(res => {
        return {
          editedTask: res
        };
      })
      .catch(e => console.log(e));
    /*    
    return axios
      .get(process.env.EXTERNAL_API_URL + '/v1/task/' + context.route.params.id)
      .then((res) => {
        res.data.task.date = new Date(res.data.task.date)
        res.data.task.state = JSONtoOptionState(res.data.task.state)
        return {
          editedTask: res.data.task
        }
      })
      .catch(e => console.log(e))
  */
  },
  data() {
    return {
      isConfirmModalActive: false
    };
  },
  methods: {
    pageUpdated() {
      this.isConfirmModalActive = true;
    }
  }
};
</script>

<style scoped>
</style>
