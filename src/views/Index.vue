<template>
  <div class="index container">
    <div class="card" v-for="smt in smoothies" :key="smt.id">
      <div class="cart-content">
        <i class="material-icons delete" @click="deleteSmoothie(smt.id)">delete</i>
        <h3 class="pink-text">{{ smt.title }}</h3>
        <ul class="ingredients">
          <li v-for="(ing, index) in smt.ingredients" :key="index">
            <span class="chip grey lighten-1">{{ ing }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init";

export default {
  name: "Index",
  data() {
    return {
      smoothies: [],
    };
  },
  methods: {
    deleteSmoothie(id) {
      // delete doc from firebase
      db.collection("smoothies")
        .doc(id)
        .delete()
        .then(() => {
          // lọc card đã xóa khỏi giao diện
          this.smoothies = this.smoothies.filter((smt) => {
            return smt.id != id;
          });
        });
    },
  },
  created() {
    //fetch data
    db.collection("smoothies")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          let smoothie = doc.data();
          smoothie.id = doc.id;
          this.smoothies.push(smoothie);
        });
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@media (max-width: 1023px) {
  div.index {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 500px) {
  div.index {
    grid-template-columns: 1fr;
  }
  div.index h3 {
    font-size: 1.5em;
  }
}

.index {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  margin-top: 60px;
}

.index h3 {
  font-size: 1.7em;
  margin-top: 20px;
  text-align: center;
}

.index .ingredients {
  margin: 10px;
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
