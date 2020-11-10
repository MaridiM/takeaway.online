import React from 'react'
import { Button } from 'components'

const AdminProductInfo = ({ product, showModalSuccess, showModalEditProduct, showInfoProduct }) => {
    const { _id, title, img, ingridients, price, text, discount, category } = product

    console.log(category)

    return (
        <section className="admin-product-info">
            <div className="admin-product-info__wrapper">
                <header className="admin-product-info__header">
                    <h4 className="admin-product-info__header-title">Прдукт № <span>{_id ? _id.slice(0, 8) : '00000000' }</span></h4>
                </header>
                <div className="admin-product-info__body">
                    <div className="admin-product-info__body-img">
                        <img src={ img } alt={ title } />
                    </div>
                    


                    <div className="admin-product-info__body-info">
                        <h5 className="admin-product-info__body-info-title">{ title }</h5>
                       <ul>
                            <li>{ text }</li>
                            <li>{ ingridients }</li>
                            <li>Категория: <span>{ category[1] }</span></li>
                            <li>Цена: <span>{ price.count }{ price.currency[0] }</span></li>
                            <li>Скидка: <span>{ discount.count || 0 }{ discount.type || "%" }</span></li>
                       </ul>
                    </div>
                </div>
                <footer className="admin-product-info__footer">
                    <div className="admin-product-info__footer-btns">
                        <Button 
                            className="btn-nav"
                            clickAction={() => showModalEditProduct(_id)}
                            >
                            <i className="far fa-edit"></i>
                        </Button>
                        <Button 
                            className="btn-nav"
                            clickAction={() => showModalSuccess(_id, false)}
                            >
                            <i className="fas fa-trash"></i>
                        </Button>
                        <Button 
                            className="btn-nav"
                            clickAction={() => showInfoProduct(false)}
                            >
                            <i className="fas fa-times"></i>
                        </Button>
                    </div>
                </footer>
            </div>
        </section>
    );
};


export default AdminProductInfo;
