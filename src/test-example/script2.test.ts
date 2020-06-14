import { getUsers } from './script2'

describe('test example - getUsers()', () => {
  it('calls jsonplaceholder to get users', async () => {
    // jest.setTimeout(30000)

    const data = await getUsers()

    expect(data.username).toBe('Bret')
    expect(data.address).toMatchObject({ city: 'Gwenborough' })
    expect.assertions(2)
  })

  it('returns username and users', async () => {
    global.fetch = jest.fn().mockReturnValue(
      Promise.resolve({
        json: () =>
          Promise.resolve({
            username: 'Mithu',
            address: {
              city: 'Cumilla',
            },
          }),
      }),
    )

    const data = await getUsers()

    expect(fetch.call.length).toBe(1)
    expect(data.username).toBe('Mithu')
    expect(data.address).toMatchObject({ city: 'Cumilla' })
    expect(fetch).toBeCalledWith('https://jsonplaceholder.typicode.com/users/1')
    expect.assertions(4)
  })
})
