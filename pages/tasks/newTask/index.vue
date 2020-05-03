<template>
  <div>
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
            {{ todoOption }}
          </option>
          <option value="DOING">
            {{ doingOption }}
          </option>
          <option value="DONE">
            {{ doneOption }}
          </option>
        </select>
      </div>
      <b-field label="Data scadenza">
        <b-datepicker
          v-model="task.date"
          :selected-date="task.date"
          placeholder="Select a date..."
          icon="calendar-today"
          editable
        />
      </b-field>
    </div>
    <div class="section">
      <div class="level">
        <div class="level-left">
          <div class="field is-grouped">
            <nuxt-link to="/">
              <button class="button is-danger">
                Annulla
              </button>
            </nuxt-link>

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
    <div>
      <b-modal
        :active.sync="isConfirmModalActive"
        has-modal-card
        trap-focus
        :can-cancel="['x']"
        :destroy-on-hide="false"
        aria-role="dialog"
        aria-modal
      >
        <modal-confirm-form />
      </b-modal>
    </div>
    <footer-blue />
  </div>
</template>

<script>
import HeaderBlue from '../../../components/shared/HeaderBlue.vue'
import FooterBlue from '../../../components/shared/FooterBlue.vue'
import ModalConfirmForm from '../../../components/modal/ModalConfirmForm'
import { createTask } from '../../../api'

export default {
  components: {
    ModalConfirmForm,
    HeaderBlue,
    FooterBlue
  },
  asyncData () {},
  data () {
    return {
      todoOption: 'Inserito',
      doingOption: 'In elaborazione',
      doneOption: 'Completato',
      isConfirmModalActive: false,
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
      createTask(this.task)
      this.isConfirmModalActive = true
    },
    onCancel () {
      this.$router.push('/') // TODO - VERIFICARE QUESTA PAGINA
    }
  }
}
</script>

<style scoped>
</style>
