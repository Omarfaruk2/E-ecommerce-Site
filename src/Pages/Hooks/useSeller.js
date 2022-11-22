import { useEffect, useState } from "react"


const useSeller = user => {

    const [seller, setSeller] = useState(false)
    const [sellerLoading, setSellerLoading] = useState(true)
    useEffect(() => {

        const email = user?.email

        if (email) {
            fetch(`http://localhost:5000/seller/${email}`)
                .then(res => res.json())
                .then(data => {
                    setSeller(data.seller)
                    setSellerLoading(false)
                })
        }

    }, [user?.email])

    return [seller, sellerLoading]
}

export default useSeller

