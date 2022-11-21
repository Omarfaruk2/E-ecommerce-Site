
import React from 'react'
import { HashLoader } from 'react-spinners'

const Loadding = () => {
    return (
        <div className='h-[50vh]'>
            {/* <FadeLoader className='mx-auto' color="#36d7b7" /> */}
            {/* <GridLoader className='mx-auto' color="#36d7b7" />
            <SyncLoader className='mx-auto' color="#36d7b7" /> */}
            <HashLoader className='mx-auto mt-20' color="#800080" />
        </div>
    )
}

export default Loadding