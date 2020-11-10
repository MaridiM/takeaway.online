import React from 'react'

const Info = ({ data }) => {
    const { address, email, phone, fullname, price } = data
    return (
        <section className='order-success__info'>
            <ul className='order-success__info-description'>
                <li>{ fullname }</li>
                <li>{ phone }</li>
                <li>{ email }</li>
                <li>{ address }</li>
            </ul>
            <ul className='order-success__info-price'>
                <li>
                    { price.count }
                    { price.currency[0] }
                </li>
            </ul>
        </section>
    )
}

export default Info
