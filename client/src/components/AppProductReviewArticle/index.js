import React, { useState } from 'react'
import { Button } from 'components'


const AppProductReviewArticle = ({review}) => {
    const { pubdate, author, text } = review

    const [fullReview, setFullReview] = useState(false)

    const showFullReview = () => {
        setFullReview(!fullReview)
    }

    return (
        <article className="item" style={ fullReview ? {minHeight: 'auto', overflow: 'initial'} : null }>
            <div className="author">
                <span>{ author }</span>
                <time pubdate={pubdate} dateTime={pubdate}>{ pubdate }</time>
            </div>
            <hr />
            <p 
                className="review-text" 
                style={fullReview ? {height: 'auto', overflow: 'initial'} : null }
                >
                { text }
            </p>
            <hr />
            <Button clickAction={() => showFullReview()}>Подробнее</Button>
        </article>
    )
}

export default AppProductReviewArticle 
