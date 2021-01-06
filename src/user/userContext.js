import { createContext, useState, useContext } from 'react'

export const UserContext = createContext()

export function UserProvider(props) {

  const [user, setUser] = useState({
    name: '',
    email: '',
    loggedIn: false
  })

  return <UserContext.Provider value={{ user, setUser }}>{props.children}</UserContext.Provider>
}

export function useUser() {
  const context = useContext(UserContext)
  return context
}

