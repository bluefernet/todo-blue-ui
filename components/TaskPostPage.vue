<template>
  <div class="section">
    <header-blue />
    <br>

    <div class="section">
      <label class="label">Titolo</label>
      <input v-model="editedTask.title" class="input">
      <label class="label">Descrizione</label>
      <input v-model="editedTask.description" class="input" maxlength="500" type="textarea">
      <label class="label">Stato</label>
      <div class="select">
        <select>
          <option>Select dropdown</option>
          <option>With options</option>
        </select>
      </div>
      <select v-model="editedTask.state" placeholder="Select a state">
        <option>Done</option>
        <option>Doing</option>
        <option>Done</option>
      </select>
      <b-field label="Select a date">
        <b-datepicker v-model="editedTask.dataPick" :selected-date="editedTask.dataPick" placeholder="Select a date..." icon="calendar-today" editable />
      </b-field>

      <button class="button" @click="visualizeData">
        Visualizza
      </button>
    </div>
    <div class="sectiom">
      <button class="button is-primary" @click="onSave">
        Salva
      </button>
      <button class="button is-danger" @click="onCancel">
        Cancella
      </button>
    </div>
    <footer-blue />
  </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
import HeaderBlue from '../components/HeaderBlue.vue'
import FooterBlue from '../components/FooterBlue.vue'

export default {
  components: {
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
      titolo: '',
      editedtask: this.task ? { ...this.task }
        : {
          title: '',
          description: '',
          state: '',
          dataPick: ''
        }
    }
  },
  mounted () {
    this.task.dataPick = new Date()
  },
  methods: {
    onSave () {
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
      this.$router.push('/') // TODO - VERIFICARE QUESTA PAGINA
    },
    visualizeData () {
      console.log('Titolo 1' + this.titolo)
      console.log('Titolo ' + this.task.title)
      console.log('Descrizione ' + this.task.description)
      console.log('this.state ' + this.task.state)
      console.log('this.state ' + this.task.dataPick)
    }
  }
}
</script>

<style scoped>
</style>
