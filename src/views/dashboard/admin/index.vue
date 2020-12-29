<template>
  <div class="dashboard-editor-container">
    <!-- <github-corner class="github-corner" /> -->

    <!-- <panel-group @handleSetLineChartData="handleSetLineChartData" /> -->
    <div>
      <div>项目目录(未完，持续更新)
        <a href="https://github.com/miss-tree/Vue_element_admin" target="_blank" rel="noreferrer">
          <svg-icon icon-class="guide" />
          github地址
        </a>
      </div>
      <div id="main" style="width: 100%;min-height:700px;border: 1px solid #ccc;"></div>
      <!-- <img src="@/assets/Catalog.jpg" style="width:100%"/> -->
    </div>
    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <line-chart :chart-data="lineChartData" />
    </el-row>

    <el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <raddar-chart />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <pie-chart />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <bar-chart />
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="8">
      <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 12}" :xl="{span: 12}"
        style="padding-right:8px;margin-bottom:30px;">
        <!-- <transaction-table /> -->
      </el-col>
      <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}"
        style="margin-bottom:30px;">
        <!-- <todo-list /> -->
      </el-col>
      <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}"
        style="margin-bottom:30px;">
        <!-- <box-card /> -->
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import echarts from 'echarts'
  import GithubCorner from '@/components/GithubCorner'
  import PanelGroup from './components/PanelGroup'
  import LineChart from './components/LineChart'
  import RaddarChart from './components/RaddarChart'
  import PieChart from './components/PieChart'
  import BarChart from './components/BarChart'
  import TransactionTable from './components/TransactionTable'
  import TodoList from './components/TodoList'
  import BoxCard from './components/BoxCard'
  import listData from './json/list.json'

  const lineChartData = {
    newVisitis: {
      expectedData: [100, 120, 161, 134, 105, 160, 165],
      actualData: [120, 82, 91, 154, 162, 140, 145]
    },
    messages: {
      expectedData: [200, 192, 120, 144, 160, 130, 140],
      actualData: [180, 160, 151, 106, 145, 150, 130]
    },
    purchases: {
      expectedData: [80, 100, 121, 104, 105, 90, 100],
      actualData: [120, 90, 100, 138, 142, 130, 130]
    },
    shoppings: {
      expectedData: [130, 140, 141, 142, 145, 150, 160],
      actualData: [120, 82, 91, 154, 162, 140, 130]
    }
  }

  export default {
    name: 'DashboardAdmin',
    components: {
      GithubCorner,
      PanelGroup,
      LineChart,
      RaddarChart,
      PieChart,
      BarChart,
      TransactionTable,
      TodoList,
      BoxCard
    },
    data() {
      return {
        lineChartData: lineChartData.newVisitis
      }
    },
    mounted() {
      var myChart = echarts.init(document.getElementById('main'));
      myChart.showLoading();
      // $.get('./static/json/list.json', function (data) {
      myChart.hideLoading();
      echarts.util.each(listData.children, function (datum, index) {
        index % 2 === 0 && (datum.collapsed = true);
      });
      const option = {
        tooltip: {
          trigger: 'item',
          triggerOn: 'mousemove'
        },
        series: [{
          type: 'tree',
          data: [listData],
          top: '1%',
          left: '10%',
          bottom: '1%',
          right: '10%',
          roam: true,
          symbolSize: 7,
          label: {
            position: 'left',
            verticalAlign: 'middle',
            align: 'right',
            fontSize: 12
          },

          leaves: {
            label: {
              position: 'right',
              verticalAlign: 'middle',
              align: 'left'
            }
          },

          expandAndCollapse: true,
          initialTreeDepth: 2,
          animationDuration: 550,
          animationDurationUpdate: 750
        }]
      }
      myChart.setOption(option);
      let timer = setInterval(() => { //有点消耗性能
        myChart.resize()
      }, 1500)
      this.$once('hook:beforeDestroy', () => {
        clearInterval(timer)
      })
      // });
    },
    methods: {
      handleSetLineChartData(type) {
        this.lineChartData = lineChartData[type]
      }
    }
    // beforeDestroy() {
    //   clearInterval(timer)
    // }
  }

</script>

<style lang="scss" scoped>
  .dashboard-editor-container {
    padding: 0px 10px 32px 10px;
    // background-color: rgb(240, 242, 245);
    position: relative;

    /*.github-corner {
    position: absolute;
    top: 0px;
    border: 0;
    right: 0;
  }*/

    .chart-wrapper {
      background: #fff;
      padding: 16px 16px 0;
      margin-bottom: 32px;
    }
  }

  @media (max-width:1024px) {
    .chart-wrapper {
      padding: 8px;
    }
  }

</style>
