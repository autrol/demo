<template>
    <div>
        <h2>我是第二个页面</h2>
        <ul class="ul_list page2">
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
      items: [
        {
          name: "赣州橙子",
          price: "8.8"
        },
        {
          name: "新疆哈密瓜",
          price: "2.0"
        },
        {
          name: "山东大枣",
          price: "3.2"
        },
        {
          name: "阳澄湖大闸蟹",
          price: "10.0"
        }
      ]
    };
  },
  computed: {
    goodsPriceDoubble() {
      return this.$store.getters.goodsPriceDoubble;
    }
  }
};
</script>
