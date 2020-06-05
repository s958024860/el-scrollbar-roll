<template>
  <div class="test">
    <el-row>
      <el-col :span="8">
        <el-input v-model="distance" placeholder="偏移距离">
          <template slot="append">px</template>
        </el-input>
      </el-col>
      <el-col :span="8">
        <el-input v-model="time" placeholder="滚动时间">
          <template slot="append">ms</template>
        </el-input>
      </el-col>
      <el-col :span="8">
        <el-button type="primary" @click="scroll">开始滚动</el-button>
        <el-button type="primary" @click="addCount">增加行数</el-button>
      </el-col>
    </el-row>
    <div style="margin-top: 20px; height: 300px;">
      <el-scrollbar
          ref="scrollbar"
          v-roll:[scrollData]="scrollData"
          style="height: 100%; background: #ffffff;"
          wrap-style="overflow-x: hidden;"
      >
        <ul>
          <li
              v-for="item in rowCount"
              :key="item"
          >{{ item }}你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好</li>
        </ul>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Test',
    data () {
      return {
        rowCount: 30,
        distance: null,
        time: null,
        // 滚动条支持事件
        scrollData: {
          distance: null, // 滚动距离
          time: null, // 动画时间
          flag: false, // 是否开启滚动
        },
      }
    },
    methods: {
      scroll () {
        const distance = Number(this.distance) || 0
        const time = Number(this.time) || 0
        this.scrollData = {
          flag: true,
          distance: distance,
          time: time
        }
      },
      async addCount () {
        this.scrollData.flag = false
        await this.$nextTick()
        this.rowCount++
      },
    },
  }
</script>

<style>
html,body {
  background: rgb(247, 247, 247);
}
.test {
  width: 50%;
  margin: 0 auto;
}
</style>
