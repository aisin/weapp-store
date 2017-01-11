<template>
  <div class="nav">
    <router-link v-for="item in navs" :to="{ name: 'lists', query: { id: 123 }}">{{ item.name }}</router-link>
  </div>
</template>

<script>
import { AppTagMap } from '../config.data.js';

export default {
  data() {
    return {
      navs: []
    };
  },
  created: function(){
    this.navs = AppTagMap;
  }
};
</script>

<style scoped>
.nav{
  background: #ebf3fb;
  padding: 20px;
  border-radius: 4px;
  font-size: 14px;
}
.nav a{
  display: inline-block;
  padding: 2px 5px;
  color: #2d84cc;
}
</style>