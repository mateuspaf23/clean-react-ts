import { HttpPostClientSpy } from '../../tests/mocks/mock-http-client'
import { RemoteAuthentication } from './remote-authentication'

describe('RemoteAuthentication', () => {
  test('Call HTTP Post Client with the correct URL', async () => {
    const url = 'url'
    const httpPostClientSpy = new HttpPostClientSpy()

    // sut = system under test (objeto que está sendo testado)
    const sut = new RemoteAuthentication(url, httpPostClientSpy)
    await sut.auth()

    expect(httpPostClientSpy.url).toBe(url)
  })
})
