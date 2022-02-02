<template>
  <div class="page-container preview">
    <h2 class="page-title">Персональные данные</h2>
    <p v-if="this.user.name" class="preview__user">{{this.user.name}}, {{this.user.age}}</p>
    <p v-else class="preview__user">Введите свои данные во вкладке Форма</p>

    <div v-if="this.children.length" class="preview__children-wrapper">
      <h2 class="page-title">Дети</h2>
      <p v-for="(child, index) in this.children" :key="index" class="preview__user preview__user--child">
        {{child.name}}, {{child.age}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Preview',
  data () {
    return {
      user: this.$store.getters.getUser,
      children: this.$store.getters.getChildren
    }
  }
}
</script>

<style>
  .preview__user {
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    color: #111111;
    margin-bottom: 60px;
  }
  .preview__user--child {
    background: #F1F1F1;
    border-radius: 5px;
    padding: 10px 20px;
    width: max-content;
    margin-bottom: 20px;
  }
</style>
