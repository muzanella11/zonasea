<template>
  <div class="l-adaptive">
    <!-- Begin Desktop Version -->
    <div v-if="!isShownMobile" class="adaptive__desktop">
      <slot name="desktop" />
    </div>
    <!-- End Desktop Version -->

    <!-- Begin Mobile Version -->
    <div v-if="isShownMobile" class="adaptive__mobile">
      <slot name="mobile" />
    </div>
    <!-- End Mobile Version -->
  </div>
</template>

<script src="./adaptive-layout.js"></script>
