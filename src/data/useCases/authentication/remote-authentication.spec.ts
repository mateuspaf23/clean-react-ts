import { HttpPostClientSpy } from '../../tests/mocks/mock-http-client'
import { RemoteAuthentication } from './remote-authentication'
import faker from 'faker'

interface SutTypes {
  sut: RemoteAuthentication
  httpPostClientSpy: HttpPostClientSpy
}

// Factory method do sut = system under test (objeto que está sendo testado)
const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy()
  const sut = new RemoteAuthentication(url, httpPostClientSpy)

  return {
    sut,
    httpPostClientSpy
  }
}

describe('RemoteAuthentication', () => {
  test('Call HTTP Post Client with the correct URL', async () => {
    const url = faker.internet.url()
    const { sut, httpPostClientSpy } = makeSut(url)

    await sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
