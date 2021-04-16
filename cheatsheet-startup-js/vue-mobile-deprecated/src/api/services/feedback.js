import http from '../../plugins/axios'
import urls from '../index'

export default class Feedback {
  submitFeedback (data) {
    return http.post(urls.FEEDBACK_URL, data)
  }
}
