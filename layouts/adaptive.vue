<template>
  <div class="l-default">
    <adaptive-layout>
      <template slot="desktop">
        <!-- Begin Header -->
        <kal-header />
        <!-- End Header -->

        <!-- Begin Main -->
        <nuxt />
        <!-- End Main -->

        <!-- Begin Footer -->
        <kal-footer />
        <!-- End Footer -->
      </template>

      <template slot="mobile">
        <nuxt />
      </template>
    </adaptive-layout>
  </div>
</template>

<script>
import AdaptiveLayout from '~/layouts/adaptive-layout/template-adaptive-layout.vue'
import KalHeader from '~/components/header/template-header.vue'
import KalFooter from '~/components/footer/template-footer.vue'

export default {
  components: {
    AdaptiveLayout,
    KalHeader,
    KalFooter
  }
}
</script>
