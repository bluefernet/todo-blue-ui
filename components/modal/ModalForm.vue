<template>
  <div>
    <div class="modal-card" style="width: auto">
      <header class="modal-card-head">
        <p class="modal-card-title">
          {{ title }}
        </p>
      </header>
      <section class="modal-card-body">
        <p>{{ message }}</p>
      </section>
      <footer class="modal-card-foot">
        <div class="field is-grouped">
          <button class="button is-danger" type="button" @click="goBack">
            Annulla
          </button>
          <button class="button is-primary" @click="goToTasks">
            Conferma
          </button>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
      default: 'Modal Form Default'
    },
    message: {
      type: String,
      required: false,
      default: 'Modal Form - Messaggio di default'
    }
  },
  methods: {
    goToTasks () {
      this.$parent.close()
      this.$emit('modalForm')
    },
    goBack () {
      this.$parent.close()
    }
  }
}
</script>
