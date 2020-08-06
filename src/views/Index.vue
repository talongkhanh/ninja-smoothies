<template>
  <div class="index container">
    <div class="card" v-for="smt in smoothies" :key="smt.id">
      <div class="cart-content">
        <i class="material-icons delete" @click="deleteSmoothie(smt.id)">delete</i>
          <h3 class="pink-text">{{ smt.title }}</h3>
          <ul class="ingredients">
            <li v-for="(ing, index) in smt.ingredients" :key="index">
              <span class="chip">{{ ing }}</span>
            </li>
          </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      smoothies: [
        { title: 'Sinh Tố Lúa Mạch', slug: 'sinh-to-lua-mach', ingredients: ['Lúa Mạch', 'Men Bia'], id: '1' },
        { title: 'Gạo Lên Men', slug: 'gao-len-men', ingredients: ['Gạo', 'Men Rượu'], id: '2' },
      ]
    }
  },
  methods: {
    deleteSmoothie(id) {
      this.smoothies = this.smoothies.filter(smt => {
        return smt.id != id;
      })
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .index {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
    margin-top: 60px;
  }

  .index h3 {
    font-size: 1.8em;
    margin-top: 20px;
    text-align: center;
  }

  .index .ingredients {
    margin: 30px 30px;
  }
  .index .ingredients li {
    display: inline-block;
  }
  .index .delete {
    position: absolute;
    top: 4px;
    right: 4px;
    color: #aaa;
    cursor: pointer;
  } 
</style>
