import React from 'react'

import { AppProductReviewArticle } from 'components'


const AppProductReviewArticles = ({ reviews }) => {
    return (
        <section className="reviews-articles">
            {
                reviews && 
                    reviews.map(review => {
                        return (
                            <AppProductReviewArticle 
                                key={review._id}  
                                review={review} 
                            />
                        )
                    })
            }
        </section>
    )
}

export default AppProductReviewArticles 
