import Vue from 'vue'

/**
 * description: el-scrollbar 滚动条滚动指令
 * directive-name: roll
 * @param el: 指令所绑定的元素，可以用来直接操作 DOM
 * @param distance 偏移距离 px/number 注：0 顶部 -1 底部，其余按照实际值，超过边界滚到底部
 * @param time 过渡时间 ms/number
 * @param flag 是否开启滚动 boolean
 */
Vue.directive('roll', function (el, { arg: { distance, time, flag } }) {
  if (
    distance !== null &&
    time !== null &&
    flag
  ) {
    const wrap = el.querySelector('.el-scrollbar__wrap')
    // 滚动条最大偏移距离
    const maxDistance = wrap.scrollHeight - wrap.clientHeight
    // 处理边界
    distance = (distance < 0 || distance > maxDistance) ? maxDistance : distance
    // 每帧需要偏移的距离 默认60fps/s 偏移量向上取整
    const _distance = Math.ceil(Math.abs(wrap.scrollTop - distance) * 1000 / time / 60)
    // 初始偏移量
    const initScrollTop = wrap.scrollTop
    // 执行动画
    const keyframe = () => {
      if (initScrollTop - distance > 0) wrap.scrollTop -= _distance
      else wrap.scrollTop = wrap.scrollTop + _distance
      // 判断中止条件
      if (Math.abs(wrap.scrollTop - distance) > _distance) requestAnimationFrame(keyframe)
      else wrap.scrollTop = distance
    }
    keyframe()
  }
})
