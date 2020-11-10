import React from 'react';

const ModalFilter = ({ openModalFilter }) => {
    return (
        <div className='modalWindow'>
            <i 
                className="fas fa-times" 
                onClick={openModalFilter}
            ></i>
            <h5 className='modalWindow__title'>Фильтровать по:</h5>
            <div className='modalWindow__input-group-checkbox'>
                <input id='price' type='checkbox' />
                <label htmlFor='price'> цене</label>
            </div>
            <div className='modalWindow__input-group'>
                <label htmlFor="product">Продукту: </label>
                <input list="productList" id="product" name="product"  placeholder="Все"/>
                <datalist id="productList">
                    <option value="Все" />
                    <option value="Тунец" />
                    <option value="Лосось" />
                    <option value="Офощной" />
                    <option value="Угрорь" />
                </datalist>
            </div>
        </div>
    );
};


export default ModalFilter;
