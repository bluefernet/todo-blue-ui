<template>
  <div>
    <button class="button is-success" @click="isComponentModalActive = true">
      Conferma
    </button>

    <b-modal
      :active.sync="isComponentModalActive"
      has-modal-card
      trap-focus
      :destroy-on-hide="false"
      aria-role="dialog"
      aria-modal
    >
      <modal-form v-bind="formProps" @modalForm="updateTask" />
    </b-modal>
  </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
import ModalForm from '../components/modal/ModalForm.vue'
export default {
  components: {
    ModalForm
  },
  props: {
    task: {
      type: Object,
      required: false,
      default () {
        return {
          title: 'Titolo di prova',
          description: 'descrzione di prova',
          state: 'done',
          date: '2020/01/01'
        }
      }
    }
  },
  data () {
    return {
      isComponentModalActive: false,
      formProps: {
        title: 'Conferma',
        message: 'Sei sicuro di voler aggiornare il Task?'
      }
    }
  },
  methods: {
    updateTask () {
      switch (this.task.state) {
        case 'Done':
          this.task.state = 'DONE'
          break
        case 'To do':
          this.task.state = 'TODO'
          break
        case 'Doing':
          this.task.state = 'DOING'
          break
        default:
          break
      }

      axios
        .put(
          process.env.EXTERNAL_API_URL + '/v1/task/' + this.task.id,
          qs.stringify(this.task)
        )
        .then((res) => {
          console.log(res.data) // TODO - VERIFICARE QUESTA PAGINA
        })
        .catch(e => console.log(e))
      this.$emit('updateConfirmed') // TODO - DA GESTIRE CON LO STORE
    }
  }
}
</script>
