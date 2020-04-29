<template>
  <div>
    <header-blue />
    <br>
    <div class="section">
      <div class="container">
        <b-field label="Titolo">
          <b-input v-model="task.title" />
        </b-field>
        <b-field label="Descrizione">
          <b-input v-model="task.description" maxlength="500" type="textarea" />
        </b-field>
        <b-field label="Status">
          <b-select v-model="task.state" placeholder="Select a state">
            <option>Done</option>
            <option>Doing</option>
            <option>Done</option>
            <!--option v-for="state in states" :key="state.id" :value="state.id" >
              <p>
                {{ state }}
              </p>
            </ option-->
          </b-select>
        </b-field>
        <b-field label="Select a date">
          <b-datepicker
            v-model="dataPick"
            placeholder="Select a date..."
            icon="calendar-today"
            editable
          />
        </b-field>

        <button class="button" @click="visualizeData">
          Visualizza
        </button>
      </div>
      <div class="level">
        <div class="level-left">
          <div class="level-item has-text-centered">
            <button class="button is-primary">
              Salva
            </button>
          </div>
          <div class="level-item has-text-centered">
            <button class="button is-danger">
              Cancella
            </button>
          </div>
        </div>
      </div>
    </div>
    <footer-blue />
  </div>
</template>

<script>
import HeaderBlue from '../components/HeaderBlue.vue'
import FooterBlue from '../components/FooterBlue.vue'
export default {
  components: {
    HeaderBlue,
    FooterBlue
  },
  data () {
    return {
      titolo: '',
      task: {
        title: '',
        description: '',
        state: '',
        date: new Date(),
        dataPick: new Date()
      }
    }
  },
  methods: {
    visualizeData () {
      console.log('Titolo 1' + this.titolo)
      console.log('Titolo ' + this.task.title)
      console.log('Descrizione ' + this.task.description)
      console.log('this.state ' + this.task.state)

      alert(
        this.task.title +
          ' ' +
          this.task.description +
          ' ' +
          this.task.state +
          ' ' +
          this.task.dataPick +
          ' ' +
          this.task.date
      )
    }
  }
}
</script>

<style scoped>
</style>
