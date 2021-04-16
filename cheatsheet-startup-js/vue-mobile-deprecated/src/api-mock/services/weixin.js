import { mock } from '../utils'
import urls from '../../api'

mock.onPost(urls.TOKEN_URL).reply(config => {
})

mock.onGet(urls.JSAPI_URL).reply(200, {
  data: {}
})
