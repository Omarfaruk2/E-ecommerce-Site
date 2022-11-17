
import React, { useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import "./Banner.css"

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper"



const Banner = () => {
    return (
        <div>
            <Swiper
                spaceBetween={60}
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="hero min-h-screen pt-5 opacity-90" style={{ backgroundImage: `url("https://img.freepik.com/free-photo/sideways-man-working-roof-with-drill_23-2148748771.jpg?w=740&t=st=1668664037~exp=1668664637~hmac=de8673abd6c78df8c46c8f5a11927a3cb91bd7f1a004d7a028223dc674d5c78a")` }}>

                        <div className="grid grid-cols-2 w-11/12 mx-auto h-full">

                            <div className=" mt-32 text-left">
                                <p
                                    data-aos="fade-right"
                                    data-aos-easing="linear"
                                    data-aos-duration="1500"
                                    className="">Consetetur Adipiscing</p>
                                <p
                                    data-aos="fade-left"
                                    data-aos-easing="linear"
                                    data-aos-duration="1500"
                                    className="text-4xl font-bold">TRUSTED TRAVEL AGENCY</p>
                                <p
                                    data-aos="fade-left"
                                    data-aos-easing="linear"
                                    data-aos-duration="1500"
                                    className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quisquam ullam quibusdam ea esse doloribus impedit magni doloremque laudantium praesentium?</p>
                                <button
                                    data-aos="fade-right"
                                    data-aos-easing="linear"
                                    data-aos-duration="1500"
                                    className="btn btn-primary text-white rounded-lg">Contact Us</button>
                            </div>

                            <div>
                                {/* <p className="span-1">Consetetur Adipiscing</p>
                                <button className="btn btn-success">Button</button> */}
                            </div>

                            <div>
                                {/* <p className="span-1">Consetetur Adipiscing</p>
                                <button className="btn btn-success">Button</button> */}
                            </div>
                        </div>

                    </div>
                    {/* GET EXCLUSIVE TOUR */}
                </SwiperSlide>
                <SwiperSlide>

                    <div className="hero min-h-screen pt-5" style={{ backgroundImage: `url("https://img.freepik.com/premium-photo/business-building-teamwork-people-concept-group-engineer-architects-hardhats-with-blueprint-construction-site_522218-26.jpg?w=740")` }}>

                        <div className="grid grid-cols-2 w-11/12 mx-auto h-full">
                            <div className=" mt-32 text-left">
                                <p
                                    data-aos="fade-left"
                                    data-aos-easing="linear"
                                    data-aos-duration="1500"
                                    className="">Consetetur Adipiscing</p>
                                <p
                                    data-aos="fade-right"
                                    data-aos-easing="linear"
                                    data-aos-duration="1500"
                                    className="text-4xl font-bold">GET EXCLUSIVE TOUR</p>
                                <p
                                    data-aos="fade-right"
                                    data-aos-easing="linear"
                                    data-aos-duration="1500"
                                    className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quisquam ullam quibusdam ea esse doloribus impedit magni doloremque laudantium praesentium?</p>
                                <button className="btn btn-primary text-white rounded-lg">Contact Us</button>
                            </div>

                            <div>
                                {/* <p className="span-1">Consetetur Adipiscing</p>
                                <button className="btn btn-success">Button</button> */}
                            </div>

                            <div>
                                {/* <p className="span-1">Consetetur Adipiscing</p>
                                <button className="btn btn-success">Button</button> */}
                            </div>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero min-h-screen pt-5" style={{ backgroundImage: `url("https://img.freepik.com/free-photo/close-up-men-work-with-laptop_23-2148921389.jpg?size=626&ext=jpg")` }}>

                        <div className="grid grid-cols-2 w-11/12 mx-auto h-full">
                            <div className=" mt-32 text-left">
                                <p
                                    data-aos="fade-right"
                                    data-aos-easing="linear"
                                    data-aos-duration="1500"
                                    className="">Consetetur Adipiscing</p>
                                <p
                                    data-aos="fade-right"
                                    data-aos-easing="linear"
                                    data-aos-duration="1500"
                                    className="text-4xl font-bold">Best TOUR AGENCY</p>
                                <p
                                    data-aos="fade-lefthttps://img.freepik.com/free-photo/cherry-blossoms-spring-chureito-pagoda-fuji-mountain-japan_335224-177.jpg?size=626&ext=jpg&ga=GA1.2.1198299981.1652771125"
                                    data-aos-easing="linear"
                                    data-aos-duration="1500"
                                    className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quisquam ullam quibusdam ea esse doloribus impedit magni doloremque laudantium praesentium?</p>
                                <button className="btn btn-primary text-white rounded-lg">Contact Us</button>
                            </div>

                            <div>
                                {/* <p className="span-1">Consetetur Adipiscing</p>
                                <button className="btn btn-success">Button</button> */}
                            </div>

                            <div>
                                {/* <p className="span-1">Consetetur Adipiscing</p>
                                <button className="btn btn-success">Button</button> */}
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default Banner






















    // import React from 'react'

    // const Banner = () => {

    //     return (
    //         <div>

    //         </div>



    // < div className = ' w-full z-10 top-0' >
    //     <div className="hero min-h-screen pt-5" style={{ backgroundImage: `url("https://img.freepik.com/free-photo/beautiful-view-greenery-bridge-forest-perfect-background_181624-17827.jpg?w=740&t=st=1663268985~exp=1663269585~hmac=a76a7ed55b3d18ec209e997de052baa93ad977b01a88655288aac5ecb2c20ba4")` }}>
    //         <div className="hero-overlay bg-opacity-10"></div>
    //     <div>
//         //             <h2 className='text-white font-extrabold text-5xl'>Where do you want to go?</h2>
//         //             <p className='text-white mt-3 text-center font-bold'>Trips, experiences, and places. All in one service. </p>

//         //         </div>
//         //     </div>
//         // </>
//     )
// }

// export default Banner