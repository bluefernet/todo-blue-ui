<template>
  <div>
    <button class="button is-danger" @click="isComponentModalActive = true">
      Cancella
    </button>

    <b-modal
      :active.sync="isComponentModalActive"
      has-modal-card
      trap-focus
      :destroy-on-hide="false"
      aria-role="dialog"
      aria-modal
    >
      <modal-form v-bind="formProps" @modalForm="deleteTask" />
    </b-modal>
  </div>
</template>

<script>
import ModalForm from '../modal/ModalForm.vue'
import { optionToJSONState } from '../../shared'
import { updateTask } from '../../api'

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
        title: 'Elimina',
        message: 'Sei sicuro di voler eliminare il task?'
      }
    }
  },
  methods: {
    deleteTask () {
      this.task.deleted = true
      this.task.state = optionToJSONState(this.task.state)
      updateTask(this.task.id, this.task)
      /*
      axios
        .put(
          process.env.EXTERNAL_API_URL + '/v1/task/' + this.task.id,
          qs.stringify(this.task)
        )
        .then((res) => {
          console.log(res.data) // TODO - VERIFICARE QUESTA PAGINA
        })
        .catch(e => console.log(e))
*/

      this.$emit('deleteConfirmed') // TODO - DA GESTIRE CON LO STORE
    }
  }
}
</script>
