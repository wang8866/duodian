<template>
  <div class="address-page">
    <search-for
      v-model="searchKey"
      clear
      :tipList="tips"
      @search="search"
      placeholder="小区、街道、大厦"
    >
    <template v-slot:tip="slotprops">
      <li class="tips-item">
        <h2>{{slotprops.item.name}}</h2>
        <p>{{slotprops.item.district}}</p>
      </li>
    </template>
    </search-for>
    <a class="current" href="javascript:;">
      <i class="iconfont icon-dizhiguanli"></i>
      <span @click="geolocation">定位当前的位置</span>
    </a>
    <popup-menu title="您附近的地址" :visible.sync="show">
      <li class="tips-item" v-for="(item, index) in pois" :key="index" @click="search(item)">
        <h2>{{item.name}}</h2>
        <p>{{item.address}}</p>
      </li>
    </popup-menu>
    <div class="hostory">
      <h2 class="title">历史地址</h2>
      <div class="hostory-list">
        <div v-for="(item, index) in userAddress" :key="index" class="list">
          <input
            type="checkbox"
            :checked="item.isDefault == 1"
            @change="selectAddress($event, item)"
          />
          <div class="text">
            <h3>{{item.name}}</h3>
            <p>{{item.phone}}</p>
            <p>{{item.address}}</p>
          </div>
        </div>
      </div>
    </div>
    <router-link to="/create/address" tag="button" class="add"><i class="iconfont icon-jiajianzujianjiahao"></i>新增地址</router-link>
  </div>
</template>

<script>
import AMap from 'AMap'
import map from '@/utils/map'
import { mapState } from 'vuex'

export default {
  name: 'address-index',
  data () {
    return {
      searchKey: '',
      tips: [],
      pois: [],
      show: false
    }
  },
  computed: {
    ...mapState('user', ['userAddress'])
  },
  watch: {
    searchKey () {
      this.fetchTipKey()
    }
  },
  methods: {
    fetchTipKey () {
      AMap.plugin('AMap.Autocomplete', () => {
        var autoOptions = {
          city: '全国'
        }
        var autoComplete = new AMap.Autocomplete(autoOptions)
        autoComplete.search(this.searchKey, (status, result) => {
          console.log(result)
          if (result !== 'NO_PARAMS') {
            this.tips = result.tips
          } else {
            this.tips = []
          }
        })
      })
    },
    search (item) {
      const address = {
        adcode: item.adcode,
        city: item.city,
        formattedAddress: item.name,
        district: item.district,
        ...item
      }
      this.$store.commit('user/SET_ADDERSS', address)
      this.$router.back()
      console.log(item)
    },
    geolocation () {
      this.$loading.show()
      map.geolocation().then(res => {
        this.show = true
        console.log(res)
        this.pois = res.pois
        this.$loading.hide()
      }).catch(() => {
        this.$message.error('定位失败')
      })
    },
    selectAddress (e, item) {
      this.$api.address.update(item.id, {
        isDefault: e.target.checked ? '1' : '0'
      }).then(() => {
        this.$store.dispatch('user/getUserAddress')
      })
      console.log(e.target.checked, item)
    }
  }
}
</script>

<style lang="scss" scoped>
.address-page {
  @include wh (100vw, 100vh);
  background-color: #f6f6f6;
  .tips-item {
    height: 80%;
    font-size: 28px;
    border-bottom: solid 1px #f0f0f0;
    padding: 20px 160px 20px 20px;
    box-sizing: border-box;
    h2 {
      color: #333;
      padding: 10px 0;
    }
    p {
      color: grey;
      padding: 0 0 10px;
    }
  }
  .current {
    @include wh (100%, 88px);
    background: #fff;
    margin-top: 20px;
    line-height: 88px;
    display: flex;
    align-items: center;
    padding: 0 30px;
    box-sizing: border-box;
    i {
      font-size: 45px;
      color: #999;
    }
    span {
      font-size: 28px;
      color: grey;
      margin-left: 10px;
    }
  }
  .add {
    @include wh (100%, 88px);
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: #fff;
    border: 0;
    font-size: 28px;
    color: #ff712b;
    i {
      font-size: 32px;
      margin-right: 14px;
    }
  }
  .hostory{
    padding-bottom: 88px;
    h2 {
      font-size: 24px;
      margin: 41px 21px 20px;
    }
    .hostory-list {
      background: #fff;
      .list {
        display: flex;
        border-bottom: 1px solid #eee;
        padding: 20px 10px;
        box-sizing: border-box;
        .text {
          margin-left: 15px;
          h3 {
            font-size: 35px;
            color: #333;
          }
          p {
            font-size: 30px;
            color: #666;
            &:nth-child(2) {
              padding: 10px 0;
            }
          }
        }
      }
    }
  }
}
</style>
