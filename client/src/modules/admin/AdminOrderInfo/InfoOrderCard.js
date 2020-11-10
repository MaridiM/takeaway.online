import React from 'react'

import { Button } from 'components'

const InfoOrderCard = ({ orderProduct }) => {
    const {
        orderNum,
        dateOrder,
        fullname,
        phone,
        email,
        address,
        price,
        orderCount,
        promo,
    } = orderProduct
    return (
        <div className="info-order-card">
            <div className="info-order-card__wrapper">
                <header className="info-order-card__header">
                    <span className="info-order-card__header-orderNum">№ {orderNum}</span>
                    <span className="info-order-card__header-dateOrder">{dateOrder}</span>
                </header>
                <div className="info-order-card__body">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td>Имя:</td>
                                <td>{fullname}</td>
                            </tr>
                            <tr>
                                <td>Телефон:</td>
                                <td>{phone}</td>
                            </tr>
                            <tr>
                                <td>E-Mail:</td>
                                <td>{email}</td>
                            </tr>
                            <tr>
                                <td>Адрес:</td>
                                <td>{address}</td>
                            </tr>
                            <tr>
                                <td>Сумма:</td>
                                <td>{price.count}{price.currency}</td>
                            </tr>
                            <tr>
                                <td>Количество:</td>
                                <td>{orderCount.count}{orderCount.type}</td>
                            </tr>
                            <tr>
                                <td>Промокод:</td>
                                <td>{promo || 'Не введен'} </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <footer className="info-order-card__footer">
                    <Button className="nav-btn"><i className="fas fa-check"></i></Button>
                    <Button className="nav-btn"><i className="fas fa-times"></i></Button>
                    <Button className="nav-btn"><i className="far fa-edit"></i></Button>
                    <Button className="nav-btn"><i className="fas fa-trash"></i></Button>
                </footer>
            </div>
        </div>
    )
}

export default InfoOrderCard
