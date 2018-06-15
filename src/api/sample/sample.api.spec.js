import app from '../../app'
import request from 'supertest'

const testRequest = request(app)

describe('SampleApi tests', () => {
  it('It should response all samples with GET request', () => {
    return testRequest.get('/api?query={samples{name}}').then(response => {
      expect(response.statusCode).toBe(200)

      let body = response.body.data
      expect(body).not.toBeNull()
      expect(body.samples.length).toBeGreaterThan(0)
      expect(body.samples.length).toEqual(2)
    })
  })

  it('It should response all samples with POST request', () => {
    return testRequest.post('/api').send('query={samples{name,id}}').then(response => {
      expect(response.statusCode).toBe(200)

      let body = response.body.data
      expect(body).not.toBeNull()
      expect(body.samples.length).toBeGreaterThan(0)
      expect(body.samples.length).toEqual(2)
    })
  })

  it('It should response all samples by name keyword with GET request', () => {
    return testRequest.get('/api?query={samples(keyword:"ka"){name}}').then(response => {
      expect(response.statusCode).toBe(200)

      let body = response.body.data
      expect(body).not.toBeNull()
      expect(body.samples.length).toBeGreaterThan(0)
      expect(body.samples.length).toEqual(1)
    })
  })

  it('It should response all samples by name keyword with POST request', () => {
    return testRequest.post('/api').send('query={samples(keyword:"ka"){name}}').then(response => {
      expect(response.statusCode).toBe(200)

      let body = response.body.data
      expect(body).not.toBeNull()
      expect(body.samples.length).toBeGreaterThan(0)
      expect(body.samples.length).toEqual(1)
    })
  })
})
