<template>
  <div class="edit container">
    <h2>Sửa Dữ Liệu {{ this.$route.params.slug }}</h2>
  </div>
</template>

<script>
// import db from "@/firebase/init";

export default {
  name: "Edit",
  data() {
    return {};
  },
  create() {
    //   let ref = db.collection('smoothies').where()
  },
};
</script>

<style scoped>
.edit {
  text-align: center;
}
</style>