<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>当前开发环境：{{ platform }}</h1>
    <div class="icon-test">
      <svg-icon style="color: #8fb300" icon-class="APICloud" />
      <span style="padding: 10px;">+</span>
      <svg-icon icon-class="vue" />
    </div>
    <div>APICloud + vue 快速开发 App</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      platform: process.env.VUE_APP_PLATFORM
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.icon-test {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
}
.icon-test .svg-icon {
  width: 45px;
  height: 45px;
}
</style>
