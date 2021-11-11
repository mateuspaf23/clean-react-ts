import { HttpPostClient } from '../../protocols/http/http-post-client'
import { RemoteAuthentication } from './remote-authentication'

describe('RemoteAuthentication', () => {
  test('Call HTTP Post Client with the correct URL', async () => {
    // mock da classe
    class HttpPostClientSpy implements HttpPostClient {
      url?: string
      async post (url: string): Promise<void> {
        this.url = url
        return await Promise.resolve()
      }
    }

    const url = 'url'
    const httpPostClientSpy = new HttpPostClientSpy()

    // sut = system under test (objeto que está sendo testado)
    const sut = new RemoteAuthentication(url, httpPostClientSpy)
    await sut.auth()

    expect(httpPostClientSpy.url).toBe(url)
  })
})
