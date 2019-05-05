<template>
  <div id="app">
    <a-row type="flex" justify="space-around" align="middle">
      <a-col :xs="24" :sm="24" :lg="15" :xl="17" class="bg-img"></a-col>
      <a-col :xs="24" :sm="24" :lg="9" :xl="7" class="height-50">
        <transition name="fade">
          <router-view></router-view>
        </transition>
      </a-col>
    </a-row>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.ant-row-flex {
  height: 100vh;
}

.bg-img {
  height: 100vh;
  background: url('https://images.pexels.com/photos/1120344/pexels-photo-1120344.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
  background-size: cover;
}

@media only screen and (max-width: 992px) {
  .bg-img {
    height: 30vh;
    background-position: center;
  }
  .ant-row-flex-middle {
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
  }
}

/* different techniques for iPad screening */
@media only screen and (min-device-width: 481px) and (max-device-width: 1024px) and (orientation:portrait) {
  .ant-col-lg-9, .ant-col-lg-15 {
    width: 100%;
  }
  .bg-img {
    height: 50vh;
    background-position: center;
  }
  .ant-row-flex-middle {
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
  }
}

/* ----------- Retina Screens ----------- */
@media screen
  and (min-device-width: 1200px)
  and (max-device-width: 1600px)
  and (-webkit-min-device-pixel-ratio: 2)
  and (min-resolution: 192dpi) {
    .ant-col-lg-9, .ant-col-lg-15 {
      width: 100%;
    }
    .bg-img {
      height: 50vh;
      background-position: center;
    }
    .ant-row-flex-middle {
      -webkit-box-align: start;
      -ms-flex-align: start;
      align-items: flex-start;
    }
}

</style>
