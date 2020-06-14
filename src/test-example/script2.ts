export const getUsersPromise = () => {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => {
      return {
        username: data[0].username,
        users: data,
      }
    })
}

export const getUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/1')
  const data = await res.json()

  return {
    username: data.username,
    address: data.address,
  }
}

// console.log(getUsers())
