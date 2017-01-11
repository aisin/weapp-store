<template>
  <div class="app">
    <home></home>
    <router-view></router-view>
  </div>
</template>

<script>
import home from './views/Home';

export default {
  components: {
    home
  }
}
</script>


