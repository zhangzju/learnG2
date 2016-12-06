<template>
<div id="charts">
    <div ref="a" id="c1"></div>
</div>
</template>

<script>
import G2 from 'g2'
import PlotData from '../data/diamond.json'
export default {
  name: 'plot',
  data () {
    return {
      msg: 'Plot'
    }
  },
  mounted () {
    var Stat = G2.Stat;
    var chart = new G2.Chart({
    id: 'c1',
    width : 1000,
    height : 500,
    plotCfg: {
    margin: [20, 90, 60, 80]
    }
    }); // 创建图表

    chart.source(PlotData); // 载入数据源
    chart.coord('rect');
    chart.interval().position(Stat.summary.mean('cut*price')).color('cut'); // 使用图形语法绘制柱状图
    chart.render();
    }
}
</script>


<style scoped>

</style>
