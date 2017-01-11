<template>
  <div class="app-lists">
    <div class="container">
      <div class="row">
        <div v-for="(item, index) in appList" @mouseover="showQR(index, $event)" @mouseleave="hideQR(index, $event)" class="app-item col-sm-6 col-md-4 col-lg-3">
          <div class="con">
            <div class="logo">
              <img :src="imgUrl(item.logoUrl)" alt="">
            </div>
            <div class="detail">
              <div class="name">{{ item.name }}</div>
              <div class="cat"><span>类别：</span>{{ item.tags[0] }}</div>
              <div class="intro"><span>简介：</span>{{ item.sum }}</div>
              <div class="author"><span>发布：</span>{{ item.author }}</div>
            </div>
            <div class="qr-con">
              <div class="qr">
                <img :src="imgUrl(item.qrUrl)" alt="">
              </div>
              <div class="tips">微信扫一扫，打开小程序</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { AppMap } from '../config.data.js';

export default {
  data() {
    return {
      appList: [],
      isShow: false
    };
  },
  created: function() {
    // let id = this.$route.query.id;
    this.init();
  },
  methods: {
    init: function() {
      this.appList = AppMap;
    },
    imgUrl: function(url) {
      return '//img.cmcmcdn.com/' + url;
    },
    showQR: function(index, event) {
      let item = event.currentTarget;
      let qr = item.getElementsByClassName('qr-con')[0];
      qr.style.display = 'block';
    },
    hideQR: function() {
      let item = event.currentTarget;
      let qr = item.getElementsByClassName('qr-con')[0];
      qr.style.display = 'none';
    }
  }
};
</script>

<style scoped>
.app-lists{
  margin-top: 10px;
}
.app-item{
  padding: 8px;
  position: relative;
}
.app-item .con{
  display: flex;  
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 8px;
  position: relative;
  height: 130px;
  overflow: hidden;
}
.app-item .logo img{
  width: 60px;
  height: 60px;
  border-radius: 4px;
}
.app-item .detail{
  font-size: 12px;
  color: #bababa;
  line-height: 1.6em;
  padding-left: 8px;
}
.app-item .detail span{
  color: #888;
}
.app-item .detail .name{
  margin-bottom: 6px;
  font-size: 16px;
  font-weight: bold;
  color: #16a085;
}
.app-item .qr-con{
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .8);
  position: absolute;
  left: 0;
  top: 0;
  padding: 8px;
  border-radius: 4px;
  display: none;
}
.app-item .qr-con img{
  width: 80px;
  height: 80px;
}
.app-item .qr-con .tips{
  position: absolute;
  color: #fff;
  top: 40px;
  left: 110px;
}
</style>