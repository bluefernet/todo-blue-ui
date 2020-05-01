<template>
  <section>
    <button
      class="button is-primary is-medium"
      @click="isComponentModalActive = true"
    >
      Launch component modal
    </button>

    <b-modal
      :active.sync="isComponentModalActive"
      has-modal-card
      trap-focus
      :destroy-on-hide="false"
      aria-role="dialog"
      aria-modal
    >
      <modal-blue-form v-bind="formProps" />
    </b-modal>
  </section>
</template>

<script>
import ModalBlueForm from '../components/ModalBlueForm'
export default {
  components: {
    ModalBlueForm
  },
  data () {
    return {
      isComponentModalActive: false,
      formProps: {
        email: 'evan@you.com',
        password: 'testing'
      }
    }
  }
}
</script>
