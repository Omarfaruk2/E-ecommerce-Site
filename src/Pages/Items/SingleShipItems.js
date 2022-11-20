import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router'

const SingleShipItems = () => {

    const param = useParams()
    const { id, item } = param

    console.log(id, item)


    const { isLoading, error, data, refetch } = useQuery(['repoData'], () =>
        fetch(`http://localhost:5000/item/${item}/${id}`).then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <p>Loading</p>
    }

    const main = data[0]

    const { ProductName, img, price } = data[0]

    console.log(main)

    return (
        <div>
            <div className="card flex bg-base-100 shadow-xl">
                <figure><img src={img} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Price: ${price}</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleShipItems