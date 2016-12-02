<template>
<div id="charts">
    <div ref="a" id="c1"></div>
</div>
</template>

<script>
import G2 from 'g2'
export default {
  name: 'line',
  data () {
    return {
      msg: 'Link'
    }
  },
  mounted () {
  var data = [
    {action: '访问', visitor: 500},
    {action: '浏览', visitor: 400},
    {action: '交互', visitor: 300},
    {action: '下单', visitor: 200},
    {action: '付款', visitor: 100}
    ];

    var chart = new G2.Chart({
    id: 'c1',
    width : 800,
    height : 400
    }); // 创建图表

    chart.source(data); // 载入数据源
    chart.interval().position('action*visitor').color('action'); // 使用图形语法绘制柱状图
    chart.render();
    }
}
</script>


<style scoped>

</style>
