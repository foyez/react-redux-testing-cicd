const LINK: string = 'https://jsonplaceholder.typicode.com/users'

export const apiCall = () => fetch(LINK).then((res) => res.json())
