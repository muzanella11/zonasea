<template>
  <div class="l-default">
    <!-- Begin Header -->
    <kal-header :is-toggleable="isShownMobile" />
    <!-- End Header -->

    <!-- Begin Main -->
    <nuxt />
    <!-- End Main -->

    <!-- Begin Footer -->
    <kal-footer />
    <!-- End Footer -->
  </div>
</template>

<script>
import KalHeader from '~/components/header/template-header.vue'
import KalFooter from '~/components/footer/template-footer.vue'

export default {
  components: {
    KalHeader,
    KalFooter
  },

  data () {
    return {
      isShownMobile: false,
      innerWidth: 0
    }
  },

  mounted () {
    this.init()
  },

  methods: {
    init () {
      this.innerWidth = window.innerWidth

      this.setIsShownMobile()

      window.addEventListener('resize', () => {
        this.innerWidth = window.innerWidth

        this.setIsShownMobile()
      })
    },

    setIsShownMobile () {
      this.isShownMobile = this.innerWidth <= (1200 - 1)
    }
  }
}
</script>
