<template>
  <div class="header-container">
    <header class="header">
      <a href="#"><img src="../assets/logo.svg"></a>
      <nav class="header__nav nav">
        <ul class="nav__list">
          <li class="nav__item"><router-link
            to="/"
            class="nav__link"
          >
            Форма
          </router-link></li>
          <li class="nav__item">
            <router-link
            to="/preview"
            class="nav__link"
          >
            Превью
            </router-link></li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style>
  .header-container {
    width: 1366px;
    margin: 0 auto;
  }
  .header {
    display: flex;
    column-gap: 432px;
    align-items: center;
    padding: 22px 51px;
  }
  .nav__list {
    display: flex;
    column-gap: 24px;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .nav__link {
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    text-decoration: none;
    color: rgba(17, 17, 17, 0.48);
  }
</style>
