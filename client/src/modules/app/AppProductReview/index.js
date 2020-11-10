import React from 'react'

import { AppProductAddReview } from 'components'
import { AppProductReviewArticles } from 'modules'

const AppProductReview = ({ addReview, search, addProductReview, product }) => {
    const { _id, img, reviews, title } = product
    return (
        <section className="review-content">
            <div className="img">
                <img src={ img } alt={ title } />
            </div>
            <section className="description">
            { (search === '?add-review' &&  addReview) && 
                <AppProductAddReview 
                    id={_id}
                    addProductReview={addProductReview}
                /> 
            }
            <AppProductReviewArticles reviews={reviews} />  
 
            </section>
        </section>
    )
}

export default AppProductReview 
