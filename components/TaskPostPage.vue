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
          <option>{{ todoOption }}</option>
          <option>{{ doingOption }}</option>
          <option>{{ doneOption }}</option>
        </select>
      </div>
      <b-field label="Data scadenza">
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
          <div class="buttons">
            <modal-delete-button :task="task" @deleteConfirmed="onCancel" />
            <modal-update-button :task="task" @updateConfirmed="onCancel" />
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
import HeaderBlue from '../components/shared/HeaderBlue.vue'
import FooterBlue from '../components/shared/FooterBlue.vue'
import ModalUpdateButton from '../components/modal/ModalUpdateButton.vue'
import ModalDeleteButton from '../components/modal/ModalDeleteButton.vue'

export default {
  components: {
    ModalUpdateButton,
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
      todoOption: 'Inserito',
      doingOption: 'In elaborazione',
      doneOption: 'Completato',
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
    onCancel () {
      this.$emit('TaskPostPageUpdate')
    }
  }
}
</script>

<style scoped>
</style>
