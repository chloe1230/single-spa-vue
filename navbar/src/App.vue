<template>
  <b-navbar type="is-white">
    <template #brand>
      <b-navbar-item
        tag="router-link"
        :to="{ path: '/' }"
      >
        <img
          src="@/assets/travel.png"
          alt="Soul Disney"
        >
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item
        v-for="nav in navbarItems"
        :key="nav.value"
        tag="router-link"
        :to="isCurrentPage(nav.path) ? '' : { path: nav.path }"
        :active="isCurrentPage(nav.path)"
      >
        {{ nav.name }}
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>

export default {
  name: 'Navbar',
  data () {
    return {
      navbarItems: [
        {
          name: 'App1',
          value: 'app1',
          path: '/app1'
        },
        {
          name: 'App2',
          value: 'app2',
          path: '/app2'
        }
      ]
    }
  },
  methods: {
    isCurrentPage (path) {
      return this.$route.path === path
    }
  },
}
</script>

<style>
.main_container {
  margin: 50px 0;
}
.card_main {
  cursor: pointer;
}
.card_footer {
  padding: 15px;
  text-align: center;
  font-weight: 500;
  font-size: 18px;
}
</style>
