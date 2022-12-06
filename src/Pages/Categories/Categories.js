import React from 'react'
import { useQuery } from 'react-query'
import Loadding from '../Share/Loadding'
import Singlecatagori from './Singlecatagori'

const Categories = () => {


    const { isLoading, error, data: catagorio, refetch } = useQuery(['repoDatdfa'], () =>
        fetch('https://e-commarce-server.onrender.com/catagorilist').then(res =>
            res.json()
        )
    )
    if (isLoading) {
        <Loadding />
    }
    refetch()






    return (
        <div className='my-20'>
            <h2 className='text-center font-bold text-4xl'>Categories</h2>

            <div className='grid lg:grid-cols-5 sm:grid-cols-2 gap-y-10 lg:w-11/12 mx-auto'>

                {
                    catagorio?.map((singlecatagori, index) =>
                        <Singlecatagori
                            singlecatagori={singlecatagori}
                            key={index}
                        />
                    )
                }


            </div>


        </div>
    )
}

export default Categories