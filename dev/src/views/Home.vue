<template>
  <div class="home">
    <wx-header></wx-header>
  </div>
</template>

<script>
import TopNotice from 'components/TopNotice';
import Header from 'components/Header';

export default {
  components: {
    TopNotice,
    wxHeader: Header
  }
};
</script>