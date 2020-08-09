<template>
  <div class="navbar">
    <nav class="nav-extended green darken-1">
      <div class="nav-content">
          <router-link :to="{ name: 'Index' }">
              <span class="nav-title">Tiên Vương Tiệm Tạp Hóa</span>
          </router-link>
          <a href="" class="btn-floating btn-large halfway-fab light-green accent-3">
              <router-link :to="{ name: 'Add' }">
                  <i class="material-icons">add</i>
              </router-link>
          </a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .navbar nav {
    padding-left: 20px;
  }
</style>
