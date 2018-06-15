import sampleService from './sample.service'
import logger from 'winston'

export default {
  all (parent, {keyword}) {
    logger.info('request to get all samples with keyword: %s', keyword)
    let body = sampleService.all(keyword)
    return body
  }
}
