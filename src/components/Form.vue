<template>
  <div class="page-container">
    <form action="" class="form">
      <h2 class="page-title">Персональные данные</h2>
      <div class="form__input-wrapper">
        <label for="user-name">Имя</label>
        <input type="text" id="user-name" v-model="user_data.name">
      </div>
      <div class="form__input-wrapper">
        <label for="user-surname">Возраст</label>
        <input type="text" id="user-surname" v-model="user_data.age">
      </div>
      <div class="form__children-wrapper children">
        <div class="children__title-wrapper">
          <h2 class="page-title">Дети (макс. 5)</h2>
          <button v-if="children_data.length < 5" class="children__add-button" @click="addChild()">Добавить ребенка</button>
        </div>

        <div v-for="(child, index) in children_data" :key="index" class="children__data">
          <div class="form__input-wrapper">
            <label :for="`name__${index}`">Имя</label>
            <input type="text" :id="`name__${index}`" v-model="child.name">
          </div>
          <div class="form__input-wrapper">
            <label :for="`age__${index}`">Возраст</label>
            <input type="text" :id="`age__${index}`" v-model="child.age">
          </div>
          <button class="children__delete-button" @click="deleteChild(index)">Удалить</button>
        </div>
      </div>
      <button type="button" @click="saveData()" class="form__save-button">Сохранить</button>
    </form>

  </div>
</template>

<script>
export default {
  name: 'Form',
  data () {
    return {
      user_data: {
        name: '',
        age: ''
      },
      children_data: []
    }
  },
  mounted () {
    this.user_data = this.$store.getters.getUser
    this.children_data = this.$store.getters.getChildren
  },
  methods: {
    saveData () {
      this.$store.commit('setUser', this.user_data)
      this.$store.commit('setChildren', this.children_data)
    },
    addChild () {
      this.children_data.push({name: '', age: ''})
    },
    deleteChild (index) {
      this.children_data.splice(index, 1)
    }
  }
}
</script>

<style csope>
.form {
  margin-bottom: 136px;
}
.form__input-wrapper {
  padding: 8px 16px;
  display: flex;
  flex-direction: column;
  border: 1px solid #F1F1F1;
  border-radius: 4px;
  margin-bottom: 10px;
}
.form__input-wrapper label {
  color: rgba(17, 17, 17, 0.48);
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  margin-bottom: 2px;
}
.form__input-wrapper input {
  font-family: inherit;
  border: none;
  color: #111111;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
}
.children {
  margin-top: 33px;
}
.children__title-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 11px;
}
.children__add-button {
  position: relative;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: #01A7FD;
  background-color: white;
  border: 2px solid #01A7FD;
  box-sizing: border-box;
  border-radius: 100px;
  padding: 10px 20px;
  padding-left: 48px;
}
.children__add-button::before {
  position: absolute;
  content: "";
  width: 24px;
  height: 24px;
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: cover;
  mask-image: url("../assets/icon-plus.svg");
  background-color: #01A7FD;
  left: 10px;
}
.children__data {
  display: flex;
  column-gap: 18px;
  align-items: center;
}
.children__delete-button {
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: #01A7FD;
  border: none;
  background-color: white;
}
.form__save-button {
  margin-top: 30px;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: #FFFFFF;
  background: #01A7FD;
  border-radius: 100px;
  padding: 10px 20px;
  border: none;
}
</style>
