<template>
  <div class="section">
    <header-blue />
    <br>
    <div class="section">
      <label class="label">Titolo</label>
      <b-input v-model="task.title" maxlength="100" />
      <label class="label">Descrizione</label>
      <b-input v-model="task.description" maxlength="500" type="textarea" />
      <label class="label">Stato</label>
      <div class="select">
        <select v-model="task.state" placeholder="Select a state">
          <option>To do</option>
          <option>Doing</option>
          <option>Done</option>
        </select>
      </div>
      <b-field label="Select a date">
        <b-datepicker
          v-model="task.date"
          :selected-date="task.date"
          :value="task.date"
          placeholder="Select a date..."
          icon="calendar-today"
          editable
        />
      </b-field>
    </div>
    <div class="section">
      <div class="level">
        <div class="level-left">
          <modal-delete-button :task="task" @deleteConfirmed="onCancel" />
          <modal-confirm-button :task="task" @updateConfirmed="onCancel" />
        </div>
        <div class="level-right">
          <nuxt-link to="/">
            <button class="button is-link">
              Home
            </button>
          </nuxt-link>
        </div>
      </div>
    </div>
    <footer-blue />
  </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
import HeaderBlue from '../components/HeaderBlue.vue'
import FooterBlue from '../components/FooterBlue.vue'
import ModalConfirmButton from '../components/ModalConfirmButton.vue'
import ModalDeleteButton from '../components/ModalDeleteButton.vue'

export default {
  components: {
    ModalConfirmButton,
    ModalDeleteButton,
    HeaderBlue,
    FooterBlue
  },
  props: {
    task: {
      type: Object,
      required: false
    }
  },
  data () {
    return {
      editedtask: this.task
        ? { ...this.task }
        : {
          title: 'Titolo di editedTask',
          description: 'descrzione di editedTask',
          state: 'To do',
          date: '2020/12/31'
        }
    }
  },
  methods: {
    onSave () {
      console.log('date taskPostPage pre ' + this.task.date)
      console.log('date taskPostPage Post ' + new Date(this.task.date))
      axios
        .post(
          process.env.EXTERNAL_API_URL + '/v1/tasks',
          qs.stringify(this.task)
        )
        .then((res) => {
          console.log(res.data) // TODO - VERIFICARE QUESTA PAGINA
        })
        .catch(e => console.log(e))
    },
    onCancel () {
      this.$emit('TaskPostPageUpdate')
      // this.$router.push('/') // TODO - DA GESTIRE CON LO STORE
    }
  }
}
</script>

<style scoped>
</style>
