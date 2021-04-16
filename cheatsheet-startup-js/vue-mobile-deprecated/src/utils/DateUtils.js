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

export { wordDate, formatDate }
