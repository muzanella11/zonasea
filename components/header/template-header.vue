<template>
  <header class="c-header">
    <b-navbar :toggleable="isToggleable" type="light" class="bg-white">
      <b-navbar-brand href="/">
        <img src="https://zonasea.com/images/logo.png" class="header__brand">
      </b-navbar-brand>

      <b-navbar-toggle target="navbar-toggle-collapse" class="navbar-toggler">
        <template #default="{ expanded }">
          <span class="navbar-toggler-icon" :is-expanded="expanded" />
        </template>
      </b-navbar-toggle>

      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item
            v-for="(item, index) in menus"
            :key="index"
            class="p-2 text-primary"
            @click="scrollTo(item.url)"
          >
            {{ item.label }}
          </b-nav-item>

          <b-nav-item>
            <button v-b-modal="'modalSignin'" class="btn btn-outline-primary pl-4 pr-4">
              Login
            </button>
          </b-nav-item>

          <b-nav-item>
            <button v-b-modal="'modalSignup'" class="btn btn-primary">
              Register
            </button>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <!-- Begin Modal -->
    <modal-signin />
    <modal-signup />
    <!-- End Modal -->
  </header>
</template>

<script src="./header.js"></script>
