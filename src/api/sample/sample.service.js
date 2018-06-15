import SampleInteractor from '../../core/interactor/sample.interactor'

class SampleService {
  constructor () {
    this.interactor = new SampleInteractor()
  }
  all (keyword) {
    if (keyword) {
      return this.interactor.getAllByName(keyword)
    }
    return this.interactor.getAll()
  }
}

export default new SampleService()
