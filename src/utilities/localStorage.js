const sessionItem = 'fake-blog-app-session'

// return user from local storage
export const getUser = () => {
  const session = localStorage.getItem(sessionItem)
  if (session) {
    return JSON.parse(session)
  } else {
    return null
  }
}

// set  user to local storage
export const setSession = (session) => {
  localStorage.setItem(sessionItem, JSON.stringify(session))
}

// remove  user from local storage
export const removeSession = () => {
  localStorage.removeItem(sessionItem)
}
