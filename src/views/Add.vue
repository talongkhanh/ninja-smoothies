<template>
    <div class="add container">
        <h2 class="center-align green-text text-accent-3">Thêm Hàng Mới</h2>
        <form @submit.prevent="add">
            <div class="field">
                <label for="title">Tile:</label>
                <input type="text" name="title" id="title" v-model="title">
            </div>
            <div class="field">
                <label for="add-ingredient">Add an ingredient:</label>
                <input type="text" name="add-ingredient" id="add-ingredient">
            </div>
            <div class="field center-align">
                <button class="btn">Submit</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'Add',
        data() {
            return {
                title: null
            }
        },
        methods: {
            add() {
                console.log(this.title);
            }
        },
    }
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