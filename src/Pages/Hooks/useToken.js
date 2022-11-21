import { useEffect, useState } from 'react'

const useToken = user => {

    const [token, setToken] = useState("")

    useEffect(() => {

        const email = user?.user?.email
        const displayName = user?.user?.displayName

        const currentUser = { email: email, displayName: displayName }
        console.log(user?.user?.displayName, "dispalyname")


        if (email) {
            // console.log(currentUser, "currentUser")

            fetch(`http://localhost:5000/user/${email}`, {
                method: "PUT",
                headers: {
                    'content-type': "application/json"
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data, "data user inside token")
                    const accessToken = data.token
                    localStorage.setItem("accessToken", accessToken)
                    setToken(accessToken)
                })
        }


    }, [user?.user?.displayName, user?.user?.email])

    return [token]
}

export default useToken