import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Button } from 'components'
import { showModalEditProduct, addProduct, editProduct } from 'store/actions'
import { store } from 'store'




const AdminAddProductModal = ({
    // showModalAddProduct,
    showModalEditProduct,
    editProductBool,
    addProductBool,
    product,
    value,
    values
}) => {
    const {
        title,
        text,
        ingridients,
        category,
        diskountCheck,
        discount,
        discountList,
        price,
        priceCurrency,
    } = value
    console.log(value)
    
    const handleChange = (e, name) => {
        console.log(e.target.value)
        // return values[name] = e.target.value
    }

    const handleSubmit = (id) => {
        store.dispatch(addProduct(id, values))
        editProductBool && store.dispatch(editProduct(id, values))
    }
    return (
        <div className="admin-product-modal__wrapper">
            <div className="admin-product-modal__window">
                <header className="admin-product-modal__header">
                    <h4>{!editProductBool ? 'Добавить товар' : 'Изменение товара'}</h4>
                </header>
                <div className="admin-product-modal__body">
                    <div className="admin-product-modal__body-img">
                        <div className="admin-product-modal__body-img-image">
                            {
                                (product.img && editProductBool)
                                    ? <img src={product.img} alt={product.title} />  
                                    : <i className="fas fa-upload"></i>
                            }
                        </div>
                        <input type="file" />
                    </div>
                    <div className="admin-product-modal__body-content" >
                        <input
                            name="title"
                            type="text"
                            placeholder="Название продукта"
                            value={title}
                            onChange={(e) => handleChange(e, 'title')}
                        />
                        <textarea
                            name="text"
                            placeholder="Описание"
                            value={text}
                            onChange={(e) => handleChange(e, 'text')}
                        ></textarea>
                        <textarea
                            name="ingridients"
                            value={ingridients}
                            placeholder="Ингридиенты"
                            onChange={(e) => handleChange(e, 'ingridients')}
                        ></textarea>

                        <div className="admin-product-modal__body-content-category">
                            <div className="admin-product-modal__body-content-input-category">
                                <label htmlFor='category'>Категория:</label> 
                                <input
                                    id='category'
                                    name="categoryList"
                                    list="categoryList"
                                    className="categoryTypeList"
                                    placeholder="Все"
                                    onChange={(e) => handleChange(e, 'category')}
                                />
                                <datalist id="categoryList">
                                {
                                    [
                                        ["Все", "all"],
                                        ["Нигири", "nigiri"],
                                        ["Роллы", "rolls"],
                                        ["Закуски", "starters"],
                                        ["Сашими", "sashimi"],
                                        ["Салаты", "salads"],
                                        ["Супы", "Soups"],
                                        ["Тартар", "tartars"],
                                        ["Wok", "wok"],
                                        ["Комбо", "combos"],
                                        ["Десерты", "deserts"],
                                        ["Напитки", "drinks"]
                                    ].map((data, index) => {
                                        return <option key={index} value={category || data[0] } />
                                    })
                                }
                                </datalist>
                            </div>
                        </div>
                        <div className="admin-product-modal__body-content-discount">
                            <div className="admin-product-modal__body-content-discount-input-group">
                                <label htmlFor="diskountCheck">Акция</label>
                                <input 
                                    id="diskountCheck"
                                    name='diskountCheck' 
                                    type="checkbox"
                                    checked={editProductBool ? diskountCheck : false}
                                    onChange={(e) => handleChange(e, 'diskountCheck')}                         
                                    />
                            </div>
                            <div className="admin-product-modal__body-content-discount-input-group-list">
                                <input
                                    name="discount"
                                    type="text"
                                    placeholder="Скидка"
                                    value={discount}
                                    onChange={(e) => handleChange(e, 'discount')}
                                />
                                <input
                                    name="discountList"
                                    list="discountList"
                                    className="discountTypeList"
                                    placeholder="%"
                                    onChange={(e) => handleChange(e, 'discountList')}
                                />
                                <datalist id="discountList">
                                    {
                                        ["%", "шт", "г"].map((data, index) => {
                                            return <option key={index} value={discountList || data} />
                                        })
                                    }
                                </datalist>
                            </div>
                        </div>
                        <div className="admin-product-modal__body-content-price">
                            <div className="admin-product-modal__body-content-input-price">
                                <input
                                    name="price"
                                    type="text"
                                    placeholder="Цена"
                                    value={price}
                                    onChange={(e) => handleChange(e, 'price')}
                                />
                                <input
                                    name="priceCurrency"
                                    list="priceCurrency"
                                    className="priceTypeList"
                                    placeholder="₴"
                                    onChange={(e) => handleChange(e, 'priceCurrency')}
                                    />
                                <datalist id="priceCurrency">
                                    {
                                        ["₴", "₽", "$", "€"].map((data, index) => {
                                            return <option key={index} value={priceCurrency || data} />
                                        })
                                    }
                                </datalist>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="admin-product-modal__footer">
                    <div className="btns">
                        {
                            addProductBool && <Button
                                className="nav-btn"
                                type='submit'
                                clickAction={handleSubmit}>
                                    Создать
                                </Button>
                        }
                        {
                            addProductBool && <Button
                                className="nav-btn"
                                // clickAction={() => showModalAddProduct()}
                                >
                                Отменить
                            </Button>
                        }
                        {editProductBool && <Button className="nav-btn"  type='submit' clickAction={() => handleSubmit(product._id)}>Сохранить</Button>}  
                        {editProductBool && <Button className="nav-btn" >Копировать</Button>}
                        {editProductBool && <Button
                            className="nav-btn"
                            clickAction={() => showModalEditProduct()}>
                            Отменить
                            </Button>
                        }
                    </div>
                </footer>
            </div>
        </div>
    );
};

AdminAddProductModal.defaultProps = {
    productImg: null,
    addProductBool: false,
    editProductBool: false,
    showModalEditProduct: () => {},
    product: {}
};

AdminAddProductModal.propTypes = {
    showModalEditProduct: PropTypes.func,
    productImg: PropTypes.string,
    addProductBool: PropTypes.bool,
    editProductBool: PropTypes.bool,
    product: PropTypes.object
};

const mapDispatchToProps = {
    showModalEditProduct,
}
const mapStateToProps = (state, ownProps) => ({
    editProductBool: state.admin.admin.editProductBool,
    addProductBool: state.admin.admin.addProductBool,
    product: state.admin.admin.product,
    value: state.admin.admin.value
})

export default connect(mapStateToProps, mapDispatchToProps)(AdminAddProductModal)


// const AdminAddProductModal = ({
//     // showModalAddProduct,
//     showModalEditProduct,
//     handleSubmit,
//     handleChange,
//     handleBlur,
//     touched,
//     values,
//     errors,
//     editProductBool,
//     addProductBool,
//     product
// }) => {
//     const { _id, img, title, text, ingridients, category, discount,  price } = product
//     console.log(product)

//     return (
//         <div className="admin-product-modal__wrapper">
//             <div className="admin-product-modal__window">
//                 <header className="admin-product-modal__header">
//                     <h4>{!editProductBool ? 'Добавить товар' : 'Изменение товара'}</h4>
//                 </header>
//                 <div className="admin-product-modal__body">
//                     <div className="admin-product-modal__body-img">
//                         <div className="admin-product-modal__body-img-image">
//                             {
//                                 (img && editProductBool)
//                                     ? <img src={img} alt={title} />  
//                                     : <i className="fas fa-upload"></i>
//                             }
//                         </div>
//                         <input type="file" />
//                         {/* <UploadImg name='productImg' /> */}
//                     </div>
//                     <div className="admin-product-modal__body-content" >
//                         <FormField
//                             name="title"
//                             type="text"
//                             placeholder="Название продукта"
//                             handleChange={handleChange}
//                             handleBlur={handleBlur}
//                             touched={touched}
//                             values={values}
//                             status={editProductBool}
//                             text={title}
//                             errors={errors}
//                         />
//                         <FormField
//                             name="text"
//                             placeholder="Описание"
//                             handleChange={handleChange}
//                             handleBlur={handleBlur}
//                             touched={touched}
//                             values={values}
//                             status={editProductBool}
//                             text={text}
//                             errors={errors}
//                             textarea
//                         />
//                         <FormField
//                             name="ingridients"
//                             placeholder="Ингридиенты"
//                             handleChange={handleChange}
//                             handleBlur={handleBlur}
//                             touched={touched}
//                             values={values}
//                             status={editProductBool}
//                             text={ingridients}
//                             errors={errors}
//                             textarea
//                         />

//                         <div className="admin-product-modal__body-content-category">
//                             <div className="admin-product-modal__body-content-input-category">
//                                 <label htmlFor='category'>Категория:</label> 
//                                 <input
//                                     id='category'
//                                     name="categoryList"
//                                     list="categoryList"
//                                     className="categoryTypeList"
//                                     placeholder="Все"
//                                     values={values}
//                                     onChange={handleChange}
//                                     touched={touched}
//                                     errors={errors} />
//                                 <datalist id="categoryList">
//                                     {
//                                         [
//                                             ["Все", "all"],
//                                             ["Нигири", "nigiri"],
//                                             ["Роллы", "rolls"],
//                                             ["Закуски", "starters"],
//                                             ["Сашими", "sashimi"],
//                                             ["Салаты", "salads"],
//                                             ["Супы", "Soups"],
//                                             ["Тартар", "tartars"],
//                                             ["Wok", "wok"],
//                                             ["Комбо", "combos"],
//                                             ["Десерты", "deserts"],
//                                             ["Напитки", "drinks"]
//                                         ].map((data, index) => {
//                                             let textCategory
//                                             if ( editProductBool && (data[1] === category[1])) {
//                                                textCategory = data[0]
//                                             }
//                                             return <option key={index} value={ textCategory || data[0] } />
//                                         })
//                                     }
//                                 </datalist>
//                             </div>
//                         </div>
//                         <div className="admin-product-modal__body-content-discount">
//                             <div className="admin-product-modal__body-content-discount-input-group">
//                                 <Checkbox 
//                                     name='diskountCheck' 
//                                     position='right'
//                                     onChange={handleChange}
//                                     checked={editProductBool ? discount.status ? discount.status : 0 : 0}                                  
//                                     >
//                                         Акция
//                                 </Checkbox>
//                             </div>
//                             <div className="admin-product-modal__body-content-discount-input-group-list">
//                                 <FormField
//                                     name="discount"
//                                     type="text"
//                                     placeholder="Скидка"
//                                     handleChange={handleChange}
//                                     handleBlur={handleBlur}
//                                     touched={touched}
//                                     values={values}
//                                     status={editProductBool}
//                                     text={(editProductBool && discount.status) ?  discount.count :  0}
//                                     errors={errors}
//                                 />
//                                 <input
//                                     name="discountList"
//                                     list="discountList"
//                                     className="discountTypeList"
//                                     placeholder="%"
//                                     values={values}
//                                     onChange={handleChange}
//                                 />
//                                 <datalist id="discountList">
//                                     {
//                                         ["%", "шт", "г"].map((data, index) => {
//                                             return <option key={index} value={data} />
//                                         })
//                                     }
//                                 </datalist>
//                             </div>
//                         </div>
//                         <div className="admin-product-modal__body-content-price">
//                             <div className="admin-product-modal__body-content-input-price">
//                                 <FormField
//                                     name="price"
//                                     type="text"
//                                     placeholder="Цена"
//                                     handleChange={handleChange}
//                                     handleBlur={handleBlur}
//                                     touched={touched}
//                                     values={values}
//                                     status={editProductBool}
//                                     text={(editProductBool && price.count > 0) ? price.count : 0  }
//                                     errors={errors}
//                                 />
//                                 <input
//                                     name="priceCurrency"
//                                     list="priceCurrency"
//                                     className="priceTypeList"
//                                     placeholder="₴"
//                                     values={values}
//                                     onChange={handleChange}
//                                     touched={touched}
//                                     errors={errors} />
//                                 <datalist id="priceCurrency">
//                                     {
//                                         ["₴", "₽", "$", "€"].map((data, index) => {
//                                             return <option key={index} value={data} />
//                                         })
//                                     }
//                                 </datalist>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <footer className="admin-product-modal__footer">
//                     <div className="btns">
//                         {
//                             addProductBool && <Button
//                                 className="nav-btn"
//                                 type='submit'
//                                 clickAction={handleSubmit}>
//                                 Создать
//                                 </Button>
//                         }
//                         {
//                             addProductBool && <Button
//                                 className="nav-btn"
//                                 // clickAction={() => showModalAddProduct()}
//                                 >
//                                 Отменить
//                             </Button>
//                         }
//                         {editProductBool && <Button className="nav-btn"  type='submit' clickAction={() => handleSubmit("test")}>Сохранить</Button>}  
//                         {editProductBool && <Button className="nav-btn" >Копировать</Button>}
//                         {editProductBool && <Button
//                             className="nav-btn"
//                             clickAction={() => showModalEditProduct()}>
//                             Отменить
//                             </Button>
//                         }
//                     </div>
//                 </footer>
//             </div>
//         </div>
//     );
// };

// AdminAddProductModal.defaultProps = {
//     productImg: null,
//     addProductBool: false,
//     editProductBool: false,
//     showModalEditProduct: () => {},
//     product: {}
// };

// AdminAddProductModal.propTypes = {
//     showModalEditProduct: PropTypes.func,
//     productImg: PropTypes.string,
//     addProductBool: PropTypes.bool,
//     editProductBool: PropTypes.bool,
//     product: PropTypes.object
// };

// const mapDispatchToProps = {
//     showModalEditProduct,
// }
// const mapStateToProps = (state, ownProps) => ({
//     editProductBool: state.admin.admin.editProductBool,
//     addProductBool: state.admin.admin.addProductBool,
//     product: state.admin.admin.product
// })
// export default withFormik({
//     enableReinitialize: true,
//     mapPropsToValues: () => {
//         return {
//             title: "",
//             text: "",
//             ingridients: "",
//             categoryList: "Все",
//             price: "",
//             priceCurrency: "₴",
//             diskountCheck: false,
//             discount: "",
//             discountList: "%"
//         }
//     },
//     validate: (values) => {
//         let errors = {};
//         validateForm({ values, errors });
//         return errors;
//     },
//     handleSubmit: (values) => {
//         console.log(values)
//         // store.dispatch(addProduct(values))
//         // store.dispatch(editProduct(values))
//     },
//     displayName: "AppOrderForm"
// })(connect(mapStateToProps, mapDispatchToProps)(AdminAddProductModal))