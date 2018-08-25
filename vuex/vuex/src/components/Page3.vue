<template>
    <div>
        <h2>我是第一个页面</h2>
        <button @click="discountPrice">价格减半</button>
        <p>
          <input placeholder="请输入新的名字" v-model="input_value" class="input_name" />
          <button v-on:click="changeGoodsName">修改商品名字</button>
        </p>
        <ul class="ul_list">
          <li v-for="item in goodsPriceDoubble">
            <p class="name">商品：{{item.name}}</p>
            <p class="price">价格：￥{{item.price}}</p>
          </li>
        </ul>
    </div>
</template>
<script>
export default {
  data() {
    return {
      input_value: ''
    };
  },
  // 计算属性
  computed: {
    list() {
      // 获取store中的数据
      return this.$store.state.goodsList;
    },
    goodsPriceDoubble() {
      return this.$store.getters.goodsPriceDoubble;
    }
  },
  methods: {
    // 商品价格减半
    // discountPrice: function() {
    //   this.$store.commit("goodsPriceDiscount");
    // },
    // 修改商品名字
    // changeGoodsName: function() {
    //   this.$store.commit("changeName", this.input_value);
    // },
    // 修改商品名字
    changeGoodsName: function() {
      // 载荷方式
      //this.$store.dispatch('actionsChangeName',this.input_value);
      // 对象方式
      this.$store.dispatch({
        type: "actionsChangeName",
        payload: this.input_value
      });
    },
    // 同步商品价格减半
    discountPrice: function() {
      this.$store.dispatch("disCount");
    },
    // 异步商品价格减半
    discountPriceAsync: function() {
      this.$store.dispatch("disCountAsync");
    }
  }
};
</script>
