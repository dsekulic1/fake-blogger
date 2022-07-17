const users = [
  { id: 1, username: 'user', password: 'user', role: 'ROLE_USER' },
  { id: 2, username: 'admin', password: 'admin', role: 'ROLE_ADMIN' },
]

const login = async (params) => {
  // here we call api to login but instead we will simulate login
  // return await basicPost(loginUrl, values)
  let filteredUsers = users.filter((user) => {
    return (
      user.username === params.username && user.password === params.password
    )
  })

  if (filteredUsers.length) {
    // if login details are valid return user details and fake jwt token
    let user = filteredUsers[0]
    return {
      id: user.id,
      username: user.username,
      role: user.role,
    }
  } else {
    throw new Error('Username or password is not valid!')
  }
}

export const userApi = { login }
