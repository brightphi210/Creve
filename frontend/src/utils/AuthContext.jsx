

import { useContext, useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode"
const AuthContext = createContext();



export const AuthProvider = ({ children }) => {

    const navigate = useNavigate()
    let localstorage1 = localStorage.getItem('authToken') ? JSON.parse(localStorage.getItem('authToken')) : null;
    let localstorage2 = localStorage.getItem('authToken') ? jwt_decode(localStorage.getItem('authToken')) : null;
    const [authTokens, setAuthTokens] = useState(() => localstorage1)
    const [user, setUser] = useState(() => localstorage2)


    let [loading, setLoading] = useState(true)

    const url = "http://127.0.0.1:8000/auth/login/"
    const url2 = "http://127.0.0.1:8000/auth/refresh/"


    const loginUser = async (e) => {

        e.preventDefault()

        console.log("form submission")
        let response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 'email': e.target.email.value, 'password': e.target.password.value })
        })

        let data = await response.json()
        console.log('data:', data.access)

        
        if (response.status === 200) {
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authToken', JSON.stringify(data))
            navigate('/dashboard', { successMessage: 'Successfully logged in!' } )
            

        } else {
            alert("Something went wrong")
        }

    }

    const logoutUser = async (e) => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authToken')
        navigate('/', { state: { successMessage: 'Successfully logged Out !!' }})
    }


    const updateToken = async (e) => {
        console.log('updateToken called')
        let response = await fetch(url2, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 'refresh': authTokens.refresh })
        })

        let data = await response.json()
        console.log('data:', data)

        if (response.status === 200) {
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authToken', JSON.stringify(data))
        } else {
            logoutUser()
        }
    }

    // console.log(authTokens.access)

    const contextData = {
        user: user,
        loginUser: loginUser,
        logoutUser: logoutUser,
        authTokens: authTokens
    }

    

    useEffect(() => {

        let fourMinutes = 1000 * 60 * 4
        let interval = setInterval(() => {
            if (authTokens) {
                updateToken()
            }
        }, fourMinutes);

        return () => clearInterval(interval)

    }, [authTokens, loading])

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}

// export const useAuth = () => {
//     return useContext(AuthContext)
// }
export default AuthContext;

