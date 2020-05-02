<template>
  <div>
    <div class="modal-card" style="width: auto">
      <header class="modal-card-head">
        <p class="modal-card-title">
          {{ title }}
        </p>
      </header>
      <section class="modal-card-body">
        <p>
          {{ message }}
        </p>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-danger" type="button" @click="$parent.close()">
          Annulla
        </button>
        <button class="button is-primary" @click="goToTasks">
          Conferma
        </button>
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
    }
  }
}
</script>
