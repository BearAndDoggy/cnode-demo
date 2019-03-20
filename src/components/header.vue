<template>
  <div class="header">
      <img src="../assets/cnodejs_light.svg" alt="">
      <ul>
        <li><a href="">首页</a></li>
        <li><a href="">新手入门</a></li>
        <li><a href="">API</a></li>
        <li><a href="">关于</a></li>
        <li><a href="">注册</a></li>
        <li><a href="">登录</a></li>
      </ul>
  </div>
</template>
<script>
export default {
  name: 'cnode_header',
}
</script>
<style scoped>
  * {
    margin: 0;padding: 0;
  }
  .header {
    display: flex;
    justify-content: space-between;
    background: #444;
    align-items: center;
  }
  img {
    max-height: 28px;
    margin-left: 78px;
    padding-top: 8px;
    padding-bottom: 15px;
  }
  ul {
    display: flex;
    list-style: none;
    color: rgb(204, 204, 204);
    margin-right: 85px;
  }
  li {
    font-size: 13px;
    padding: 0 15px;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
</style>
