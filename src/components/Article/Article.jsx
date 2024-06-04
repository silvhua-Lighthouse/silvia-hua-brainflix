import { useState } from 'react'
import formatDate from '../globalFunctions';
import './Article.scss';

function ArticleMetadata(props) {
    const {author, date, views, likes} = props.metadata;
    console.log('metadata props', author, date)
    return (
        <>
        <section className="article__metadata">
            <div className="article__metadata--left">
                <p className="article__author">{author}</p>
                <p className="article__date">{formatDate(date)}</p>
            </div>
            <div className="article__metadata--right">
                <p className="article__views">{views}</p>
                <p className="article__likes">{likes}</p>
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