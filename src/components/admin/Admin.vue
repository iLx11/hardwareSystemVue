<template>
  <section class="constructor">
    <div class="bg"></div>
    <div :class="{ construction: true, pageStop: pageStopc, pageMaxWidth: pageMaxWidth }" :style="{height: cheight}">
      <!-- 页面头部 -->
      <Header @address="address" @status="status" @client="client"></Header>
      <!-- 页面内容 -->
      <Content ref="content"></Content>
    </div>
  </section>
</template>

<script>
import Header from './Header.vue'
import Content from './Content.vue'

export default {
  data: function () {
    return {
      pageStopc: false,
      pageMaxWidth: false,
      cheight: ''
    }
  },
  components: {
    Header,
    Content
  },
  mounted () {
    const that = this
    const clientW = document.documentElement.clientWidth
    const clientH = document.documentElement.clientHeight
    this.resize(clientW)
    if (clientH > 800) {
      this.cheight = '80%'
    }
    window.onresize = function () {
      const clientWidth = document.documentElement.clientWidth
      that.resize(clientWidth)
    }
    console.log(this.$refs.content.$refs.mqtt.messBox)
  },
  methods: {
    address (e) {
      this.$refs.content.$refs.mqtt.MQTTAdress = e
    },
    status (e) {
      this.$refs.content.$refs.mqtt.MQTTStatus = e
    },
    client (e) {
      this.$refs.content.$refs.mqtt.MQTTClient = e
    },
    resize (clientW) {
      if (clientW < 900) {
        this.pageStopc = true
      } else {
        this.pageStopc = false
      }
      if (clientW > 1350) {
        this.pageMaxWidth = true
      } else {
        this.pageMaxWidth = false
      }
    }
  }
}
</script>

<style lang="less">
.constructor {
  width: auto;
  height: auto;
  .bg {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    /*background: rgba(243, 246, 253, 1.0);*/
    background: url('../../assets/img/bg.png');
  }
  /*页面结构*/
  .construction {
    width: 97%;
    height: 90%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
  }
  .pageStop {
    width: 900px !important;
    left: 0 !important;
    transform: translate(0, -50%) !important;
  }
  .pageMaxWidth {
    width: 1350px !important;
    height: 80%;
    left: 50% !important;
    transform: translate(-50%, -50%) !important;
  }
}
</style>
