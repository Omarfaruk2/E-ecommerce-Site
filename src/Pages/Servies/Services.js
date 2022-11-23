import { Icon } from '@iconify/react'
import React from 'react'

const Services = () => {
    return (
        <div>

            <div className='mt-16'>

                <div>
                    <h1 className='text-center text-black font-bold text-3xl'>OUR SERVICES</h1>
                </div>

                <div className='grid lg:grid-cols-3 sm:grid-cols-1  mx-auto w-5/6 mt-10'>


                    <div
                        data-aos="fade-up"
                        data-aos-duration="3000"
                        className="card mx-2 shadow-xl pt-3">
                        <div className="card-body">
                            <div className='text-center mx-auto'>
                                <p className='text-center mx-auto'>
                                    <Icon className='text-8xl inline p-3 
                hover:bg-primary hover:text-white
                rounded-bl-lg text-green-400' icon="tabler:brand-angular" /></p>
                                <p className='text-2xl'>Rail Booking</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sollicitudin lobortis turpis, sit amet aliquet metus.</p>
                            </div>
                        </div>
                    </div>

                    {/* 2 */}
                    <div
                        data-aos="fade-up"
                        data-aos-duration="3000"
                        className="card mx-2 shadow-xl pt-3">
                        <div className="card-body">
                            <div className='text-center mx-auto'>
                                <p className='text-center mx-auto'><Icon className='text-8xl inline p-3 
                hover:bg-primary hover:text-white
                rounded-bl-lg text-green-400'icon="mdi:account-payment" /></p>
                                <p className='text-2xl'>Scqure Payment</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sollicitudin lobortis turpis, sit amet aliquet metus.</p>
                            </div>
                        </div>
                    </div>


                    {/* 3 */}
                    <div
                        data-aos="fade-up"
                        data-aos-duration="3000"
                        className="card mx-2 shadow-xl pt-3">
                        <div className="card-body">
                            <div className='text-center mx-auto'>
                                <p className='text-center mx-auto'><Icon className='text-8xl inline p-3 
                hover:bg-primary hover:text-white
                rounded-bl-lg text-green-400'  icon="ic:round-flight" /></p>
                                <p className='text-2xl'>Flight Shipping</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sollicitudin lobortis turpis, sit amet aliquet metus.</p>
                            </div>
                        </div>
                    </div>


                    {/* 4 */}
                    <div
                        data-aos="fade-up"
                        data-aos-duration="3000"
                        className="card mx-2 shadow-xl pt-3">
                        <div className="card-body">
                            <div className='text-center mx-auto'>
                                <p className='text-center mx-auto'><Icon className='text-8xl inline p-3
                hover:bg-primary hover:text-white
                rounded-bl-lg text-green-400'   icon="fontisto:ticket-alt" /></p>
                                <p className='text-2xl'>Return Shipping</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sollicitudin lobortis turpis, sit amet aliquet metus.</p>
                            </div>
                        </div>
                    </div>

                    {/* 5 */}
                    <div
                        data-aos="fade-up"
                        data-aos-duration="3000"
                        className="card mx-2 shadow-xl pt-3">
                        <div className="card-body">
                            <div className='text-center mx-auto'>
                                <p className='text-center mx-auto'><Icon className='text-8xl inline p-3
                hover:bprimary hover:text-white
                rounded-bl-lg text-green-400'   icon="bxs:ship" /></p>
                                <p className='text-2xl'>Ship Shipping</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sollicitudin lobortis turpis, sit amet aliquet metus.</p>
                            </div>
                        </div>
                    </div>

                    {/* 6 */}
                    <div
                        data-aos="fade-up"
                        data-aos-duration="3000"
                        className="card mx-2 shadow-xl pt-3">
                        <div className="card-body">
                            <div className='text-center mx-auto'>
                                <p className='text-center mx-auto'><Icon className='text-8xl inline p-3 
                hover:bg-primary hover:text-white
                rounded text-green-400'   icon="fluent:building-home-24-filled" /></p>
                                <p className='text-2xl'>Free Home Delivery</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sollicitudin lobortis turpis, sit amet aliquet metus.</p>
                            </div>
                        </div>
                    </div>




                </div>


            </div>



        </div>
    )
}
export default Services