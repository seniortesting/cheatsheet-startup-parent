import urls from '../../api'
import { mock } from '../utils'

mock.onPost(urls.FEEDBACK_URL)
  .reply(config => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([200, {
          code: 1000,
          data: {
            message: '提交成功'
          }
        }])
      }, 5000)
    })
  })
