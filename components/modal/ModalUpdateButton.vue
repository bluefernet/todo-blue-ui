<template>
  <div>
    <button class="button is-success" @click="isComponentModalActive = true">
      Aggiorna
    </button>

    <b-modal
      :active.sync="isComponentModalActive"
      has-modal-card
      trap-focus
      :can-cancel="['x']"
      :destroy-on-hide="false"
      aria-role="dialog"
      aria-modal
    >
      <modal-form v-bind="formProps" @modalForm="updateTask" />
    </b-modal>
  </div>
</template>

<script>
import ModalForm from '../modal/ModalForm'
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
        title: 'Conferma',
        message: 'Sei sicuro di voler aggiornare il Task?'
      }
    }
  },
  methods: {
    updateTask () {
      this.task.state = optionToJSONState(this.task.state)
      updateTask(this.task.id, this.task)
      this.$emit('updateConfirmed')
    }
  }
}
</script>
