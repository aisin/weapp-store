<template>
  <div class="site-header">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <h1>小程序应用商店</h1>
          <div class="desc">聚合最新、最实用的微信小程序<br><span class="hide">共收录了 xxx 个小程序</span></div>
          <form class="hide" role="search">
            <div class="form-group">
              <input type="text" class="form-control search clearable" placeholder="搜索小程序，例如：腾讯视频">
              <i class="fa fa-search"></i>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.site-header{
  position: relative;
  text-align: center;
  background: linear-gradient(90deg,#3502b1 10%,#d2185c 90%);
  color: #fff;
  margin-bottom: 0;
  padding: 30px 0;
}
.site-header .desc{
  font-size: 22px;
  font-weight: 200;
  margin-top: 20px;
  margin-bottom: 15px;
}
.site-header .desc span{
  font-size: 14px;
}
.site-header .form-group{
  position: relative;
  margin-top: 40px;
}
.site-header .search{
  border: 2px solid #6551b3;
  -webkit-box-shadow: none;
  box-shadow: none;
  font-size: 16px;
  padding: 13px 30px;
  border-radius: 0;
  height: auto;
  text-align: center;
}
.site-header .fa{
  position: absolute;
  right: 25px;
  top: 15px;
  color: #eee;
  font-size: 24px;
}
@media screen and (min-width: 768px) {
  .site-header h1{
    font-size: 48px;
    text-shadow: -5px 5px 0 rgba(0, 0, 0, .1);
  }
}
</style>