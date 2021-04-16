import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.locale('zh-cn')
dayjs.extend(relativeTime)

const wordDate = function (timestamp) {
  return dayjs(timestamp).fromNow()
}

const formatDate = function (timestamp) {
  return dayjs(timestamp).format('YYYY-MM-DD HH:mm:ss')
}
const timeFix = function () {
  const time = new Date()
  const hour = time.getHours()
  return hour < 9 ? '早上好' : hour <= 11 ? '上午好' : hour <= 13 ? '中午好' : hour < 20 ? '下午好' : '晚上好'
}

export { wordDate, formatDate, timeFix }
