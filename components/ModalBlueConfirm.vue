<template>
  <div>
    <div class="modal-card" style="width: auto">
      <header class="modal-card-head">
        <p class="modal-card-title">
          Successo!
        </p>
      </header>
      <section class="modal-card-body">
        <p>
          Torna alla home page
        </p>
      </section>
      <footer class="modal-card-foot">
        <nuxt-link to="/">
          <button class="button is-info" type="button" @click="$parent.close()">
            Home
          </button>
        </nuxt-link>
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
