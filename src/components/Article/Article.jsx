import { useState } from 'react'
import formatDate, {formatNumber} from '../globalFunctions';
import './Article.scss';
import likesIcon from '../../assets/images/likes.svg';
import viewsIcon from '../../assets/images/views.svg'

function ArticleMetadata(props) {
    const {author, date, views, likes} = props.metadata;
    return (
        <>
        <section className="article__metadata">
            <div className="article__metadata--left">
                <p className="article__author">{author}</p>
                <p className="article__date">{formatDate(date)}</p>
            </div>
            <div className="article__metadata--right">
                <span><img src={viewsIcon} className="article__metadata-icon"/><p className="article__views">{formatNumber(views)}</p></span>
                <span><img src={likesIcon} className="article__metadata-icon"/><p className="article__likes">{formatNumber(likes)}</p></span>
            </div>
        </section>
        </>
    )
}

function Article(props) {
    const { title, ...metadata } = props.article;
    return (
        <section>
        <article>
            <h1 className="article__title">{title}</h1>
            <ArticleMetadata metadata={metadata}/>

        </article>

        </section>
    )
}

export default Article