import { Icon } from '@iconify/react'
import React from 'react'
// import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='pb-5 bg-black'>
            <footer className="mb-8">
                <div className='grid lg:grid-cols-3 sm:grid-cols-1 w-5/6 mx-auto '>

                    {/* first coloum */}
                    <div className='mt-10'>
                        <h2 className='text-white text-2xl font-bold'>Our Awards</h2>
                        <p className='text-white mt-4'>Our Awards London is a megalopolis of people, ideas and frenetic energy. The capital and largest city of the United Kingdom.</p>
                        <div className='flex w-1/2 my-10'>
                            <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/awards.png" alt="" />
                        </div>
                    </div>

                    {/* secound coloum */}
                    <div className='mt-10 text-white'>
                        <h2 className='text-white text-2xl font-bold'>Contact Info</h2>
                        <div>
                            <p className='flex my-3 items-center '><Icon className='font-bold mx-3 text-3xl' icon="bi:phone-fill" /><span>1-567-124-44227</span> </p>
                            <p className='flex my-3 items-center '><Icon className='font-bold mx-3 text-3xl' icon="carbon:location-current" /><span>184 Main Street East Perl Habour 8007</span> </p>
                            <p className='flex my-3 items-center '><Icon className='font-bold mx-3 text-3xl' icon="emojione-monotone:alarm-clock" /><span>Mon - Sat 8.00 - 18.00 Sunday CLOSED</span> </p>
                        </div>
                        <div className='flex'>
                            <Icon className='font-bold text-3xl mx-2' icon="logos:facebook" />
                            <Icon className='font-bold text-3xl mx-2' icon="logos:twitter" />
                            <Icon className='font-bold text-3xl mx-2' icon="logos:youtube" />
                            <Icon className='font-bold text-3xl mx-2' icon="logos:pinterest" />
                            <Icon className='font-bold text-3xl mx-2' icon="line-md:instagram" />
                        </div>
                    </div>


                    {/* third coloum */}
                    <div className='mt-10'>
                        <h2 className='text-white text-2xl font-bold'>Recent Trips</h2>

                        <div className='grid grid-cols-3 w-11/12 mx-auto gap-2 mt-5'>
                            <img className='rounded' src="https://live.staticflickr.com/8688/28760131762_e4a64b20c4_q.jpg" alt="" />
                            <img className='rounded' src="https://live.staticflickr.com/7519/27308262031_a6ebf0572e_q.jpg" alt="" />
                            <img className='rounded' src="https://live.staticflickr.com/7160/27287965356_60355f51d7_q.jpg" alt="" />
                            <img className='rounded' src="https://live.staticflickr.com/7365/27138570412_d25002a5c9_q.jpg" alt="" />
                            <img className='rounded' src="https://live.staticflickr.com/7543/26520497604_1df03a02bc_q.jpg" alt="" />
                            <img className='rounded' src="https://live.staticflickr.com/7502/27012097142_f1511b67bc_q.jpg" alt="" />
                        </div>

                    </div>
                </div>



                <div className='my-20'>
                    <hr className='border-white' />
                    <p className='text-white font-serif text-xl my-20 text-center'>© Copyright Grand Tour Theme Demo - Theme by ThemeGoods</p>
                </div>

            </footer>
        </div>
    )
}

export default Footer