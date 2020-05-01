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
      <modal-blue-form v-bind="formProps" @modalForm="updateTask" />
    </b-modal>
  </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
import ModalBlueForm from '../components/ModalBlueForm'
export default {
  components: {
    ModalBlueForm
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
      console.log('Da inserire Toast!!!!')
      console.log(this.task)

      axios
        .put(
          process.env.EXTERNAL_API_URL + '/v1/task/' + this.task.id,
          qs.stringify(this.task)
        )
        .then((res) => {
          console.log(res.data) // TODO - VERIFICARE QUESTA PAGINA
        })
        .catch(e => console.log(e))
      this.$emit('updateConfirmed')
    }
  }
}
</script>
