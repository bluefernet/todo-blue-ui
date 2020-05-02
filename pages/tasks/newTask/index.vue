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
        <select v-model="task.state">
          <option value="TODO">
            To do
          </option>
          <option value="DOING">
            Doing
          </option>
          <option value="DONE">
            Done
          </option>
        </select>
      </div>
      <b-field label="Select a date">
        <b-datepicker v-model="task.date" :selected-date="task.date" placeholder="Select a date..." icon="calendar-today" editable />
      </b-field>
    </div>
    <div class="section">
      <div class="level">
        <div class="level-left">
          <div class="buttons">
            <button class="button is-danger" @click="onCancel">
              Annulla
            </button>
            <button class="button is-success" @click="onSave">
              Salva
            </button>
          </div>
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
import HeaderBlue from '../../../components/HeaderBlue.vue'
import FooterBlue from '../../../components/FooterBlue.vue'

export default {
  components: {
    HeaderBlue,
    FooterBlue
  },
  asyncData () {

  },
  data () {
    return {
      titolo: '',
      task: {
        title: '',
        description: '',
        state: '',
        date: new Date()
      }
    }
  },
  mounted () {
    this.task.date = new Date()
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
      this.$router.push('/')
    },
    onCancel () {
      this.$router.push('/') // TODO - VERIFICARE QUESTA PAGINA
    }

  }
}
</script>

<style scoped>
</style>
