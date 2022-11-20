import React from 'react'
import Categories from '../Categories/Categories'
import Services from '../Servies/Services'
import Banner from './Banner'

const Home = () => {
    return (
        <div>
            <Banner />
            <Categories />
            <Services />
        </div>
    )
}

export default Home