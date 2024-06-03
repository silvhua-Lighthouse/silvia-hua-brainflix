import { useState } from 'react'


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
    const { title, author, date, views, likes } = props.article;
    return (
        <>
        <article className="article">
            <h1 className="article__title">{title}</h1>
            {/* <ArticleMetadata /> */}

        </article>
        </>
    )
}

export default Article