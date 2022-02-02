<template>
  <div class="footer">
    <footer>
      <p><a class="footer__link" href="#">{{msg}}</a></p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      msg: 'all rights reserved'
    }
  }
}
</script>

<style>
  .footer {
    text-align: center;
    padding: 30px;
    background-color: #FAFAFA;
    box-shadow: 0px 1px 0px rgba(17, 17, 17, 0.1);
  }
  .footer__link {
    text-decoration: none;
    font-weight: normal;
    font-size: 13px;
    line-height: 16px;
    color: #000000;
  }
</style>
