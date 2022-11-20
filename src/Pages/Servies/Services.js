import { Icon } from '@iconify/react'
import React from 'react'

const Services = () => {
    return (
        <div>
            <h2 className='text-center text-5xl font-bold'>Service</h2>

            <div className='grid lg:grid-cols-3 sm:grid-cols-1 '>

                {/* 1 */}
                <div className="card lg:w-11/12 mx-auto bg-base-100 shadow-xl">
                    <div className="card-body ">
                        <Icon className='text-7xl text-center mx-auto' icon="material-symbols:inventory-2" />
                        <h2 className="card-title">Inventory management</h2>
                        <p>We help you maintain accurate recordkeeping and replenishment of inventory stored in multiple locations thanks to:</p>
                        <ul>

                            <li className='flex items-center '> <Icon icon="material-symbols:arrow-circle-right-rounded" inline={true} />
                                <span className='mx-1'> Advanced IoT-powered inventory tracking.</span>
                            </li>

                            <li className='flex items-center '> <Icon icon="material-symbols:arrow-circle-right-rounded" inline={true} />
                                <span className='mx-1'>
                                    Demand-driven inventory planning.
                                </span>
                            </li>

                            <li className='flex items-center '> <Icon icon="material-symbols:arrow-circle-right-rounded" inline={true} />
                                <span className='mx-1'>
                                    Rule-based inventory cataloging.
                                </span>
                            </li>

                            <li className='flex items-center '> <Icon icon="material-symbols:arrow-circle-right-rounded" inline={true} />
                                <span className='mx-1'>
                                    Automated purchase orders.
                                </span>
                            </li>

                            <li className='flex items-center '> <Icon icon="material-symbols:arrow-circle-right-rounded" inline={true} />
                                <span className='mx-1'>
                                    Inventory return management.
                                </span>
                            </li>


                        </ul>
                    </div>
                </div>

                {/* 2 */}
                <div className="card lg:w-11/12 mx-auto bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Inventory management</h2>
                        <p>We help you maintain accurate recordkeeping and replenishment of inventory stored in multiple locations thanks to:</p>
                    </div>
                </div>


            </div>










        </div>
    )
}
export default Services