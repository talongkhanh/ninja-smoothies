<template>
  <div class="add container">
    <h2 class="center-align pink-text">Thêm Hàng Mới</h2>
    <form @submit.prevent="add">
      <div class="field">
        <label for="title">Tile:</label>
        <input autocomplete="off" type="text" name="title" id="title" v-model="title" />
      </div>
      <div v-for="(ing, index) in ingredients" :key="index">
        <label for="ingredient">Ingredient:</label>
        <input type="text" name="ingredient" id="ingredient" v-model="ingredients[index]" />
      </div>
      <div class="field">
        <label for="add-ingredient">Add an ingredient:</label>
        <input
          autocomplete="off"
          type="text"
          name="add-ingredient"
          id="add-ingredient"
          @keydown.tab.prevent="addIng"
          v-model="another"
        />
      </div>
      <div class="field center-align">
        <p class="red-text" v-if="feedback">{{ feedback }}</p>
        <button class="btn pink">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import slugify from "slugify";
import db from "@/firebase/init";
export default {
  name: "Add",
  data() {
    return {
      title: null,
      another: null,
      ingredients: [],
      feedback: null,
      slug: null,
    };
  },
  methods: {
    add() {
      let title = document.querySelector("#title");
      title.oninput = () => {
        this.feedback = null;
      };
      if (this.title) {
        if (this.ingredients.length === 0) {
          this.feedback = "Ingredients is not empty!";
        } else {
          this.feedback = null;
          this.slug = slugify(this.title, {
            lower: true,
            remove: /[$*_+~.()'"!\-:@]/g,
            replacement: "-",
          });
          db.collection("smoothies")
            .add({
              title: this.title,
              ingredients: this.ingredients,
              slug: this.slug,
            })
            .then(() => {
              this.$router.push({ name: "Index" });
            })
            .catch((err) => {
              console.log(err);
            });
        }
      } else {
        this.feedback = "You must enter a title!";
      }
    },
    addIng() {
      let ingredient = document.querySelector("#add-ingredient");
      ingredient.oninput = () => {
        this.feedback = null;
      };
      if (this.another) {
        this.ingredients.push(this.another);
        this.another = null;
        this.feedback = null;
      } else {
        this.feedback = "You must enter the value to add ingredient";
      }
    },
  },
};
</script>

<style scoped>
.add {
  max-width: 500px;
  margin-top: 60px;
}
.add h2 {
  font-size: 2em;
}
.add label {
  cursor: pointer;
}
.add .btn {
  margin-top: 20px;
}
</style>