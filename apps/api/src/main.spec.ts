
jest.mock('./app/server', () => ({
  __esModule: true,
  default: {
    server: {
      listen: jest.fn(),
    },
    graphqlPath: '/graphql'
  }
}))

describe('Main runs the app/server', () => {
  // integration test
  it('should call the exported server listen method with a config object with correct port', () => {
    require('./main.ts')
    const MockApp = require('./app/server');

    expect(MockApp.default.server.listen).toHaveBeenCalledTimes(1)
    expect(MockApp.default.server.listen).toHaveBeenNthCalledWith(1, {port: 3333}, expect.any(Function))
  })

  afterAll(() => {
    jest.unmock('./app/server')
  })
})