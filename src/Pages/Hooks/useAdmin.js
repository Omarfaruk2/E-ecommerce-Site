import { useEffect, useState } from "react"


const useAdmin = user => {

    const [admin, setAdmin] = useState(false)
    const [adminLoading, setAdminLoading] = useState(true)
    useEffect(() => {

        const email = user?.email

        if (email) {
            fetch(`https://e-commarce-server.onrender.com/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    setAdmin(data.admin)
                    setAdminLoading(false)
                })
        }

    }, [user?.email])

    return [admin, adminLoading]
}

export default useAdmin