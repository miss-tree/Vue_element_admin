<template>
  <div class="wrapper">
    <div class="Table" v-cloak id="top">
      <div class="TableRow" v-for="el in rowRist" :key="el.id">
        <a class="RowLeft" @click="goAnchor('#'+el.id)">{{el.name}}</a>
        <!-- <span class="RowRight">{{el.explain}}</span> -->
      </div>
    </div>
    <back-top />
  </div>
</template>

<script>
  export default {
    name: 'TitleList',
    props: {
      rowRist: {
        type: Array,
        default: () => []
      },
    },
    components: {
      backTop: () => import('@/components/BackToTop/index')
    },
    data() {
      return {

      };
    },
    methods: {
      goAnchor(selector) {
        // var anchor = this.$el.querySelector(selector) // 参数为要跳转到的元素id
        var anchor = document.querySelector(selector) // 参数为要跳转到的元素id
        document.body.scrollTop = anchor.offsetTop; // chrome
        document.documentElement.scrollTop = anchor.offsetTop; // firefox
      }
    }
  };

</script>
<style lang="scss" scoped>
  .Table {
    border: 1px solid #ccc;
    width: 100%;
  }

  .Table .TableRow {
    width: 100%;
  }

  .Table .TableRow+.TableRow {
    border-top: 1px solid #ccc;
  }

  .Table .TableRow:nth-child(2n) {
    background: #F5F5F5;
  }

  .TableRow .RowLeft,
  .RowRight {
    display: inline-block;
  }

  .TableRow .RowLeft {
    text-align: left;
    padding: 0 20px;
    // width: 200px;
    height: 30px;
    line-height: 30px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    // border-right: 1px solid #ccc;
    vertical-align: middle;
  }

  .TableRow .RowRight {
    padding-left: 20px;
  }

</style>
