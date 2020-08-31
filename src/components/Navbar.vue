<template>
  <div class="navbar">
    <nav class="nav-extended grey darken-4">
      <div class="nav-content">
        <router-link :to="{ name: 'Index' }">
          <span class="nav-title">Tiên Vương Tiệm Tạp Hóa</span>
        </router-link>
        <i class="btn-floating btn-large halfway-fab pink">
          <router-link :to="{ name: 'Add' }">
            <i class="material-icons">add</i>
          </router-link>
        </i>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar nav {
  padding-left: 20px;
}
</style>
