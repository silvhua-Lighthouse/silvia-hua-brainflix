import { useState } from 'react'

import './Article.scss';

function ArticleMetadata(props) {
    return (
        <>
        <section>
            <div className="article__metadata--left">
                <p className="article__author">{props.author}</p>
            </div>
            <div className="article__metadata--right">

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