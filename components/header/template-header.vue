<template>
  <header class="c-header">
    <b-navbar :toggleable="isToggleable" type="light" variant="light" fixed="top">
      <b-container>
        <b-navbar-brand href="/">
          {{ innerTitle }}
        </b-navbar-brand>

        <b-navbar-toggle target="navbar-toggle-collapse" class="navbar-toggler">
          <template #default="{ expanded }">
            <span class="navbar-toggler-icon" :is-expanded="expanded" />
          </template>
        </b-navbar-toggle>

        <b-collapse id="navbar-toggle-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item
              v-for="(item, index) in menus"
              :key="index"
              :to="item.url"
              exact
            >
              {{ item.label }}
            </b-nav-item>

            <b-nav-form class="ml-lg-5">
              <b-form-input size="sm" class="mr-sm-2" placeholder="Search global..." />
            </b-nav-form>
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto d-none d-lg-flex">
            <b-nav-item
              to="/notification"
              exact
            >
              <span class="material-icons">
                notifications
              </span>
            </b-nav-item>

            <b-nav-item
              to="/account"
              exact
            >
              Jhon Doe
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </header>
</template>

<script src="./header.js"></script>
