import { useState } from 'react'
import './App.scss'
import Header from './components/Header/Header.jsx'
import Article from './components/Article/Article.jsx'

const article = {
  title: "The Future of Artificial Intelligence",
  author: "Aiden Thompson",
  date: new Date(2023, 8, 8),
  views: 980544,
  likes: 22479
}

function App() {

  const avatar = {
    classesArray: ['header__avatar'],
    src: './src/assets/images/Mohan-muruge.jpg'
  }

  return (
    <>
      <Header avatar={avatar}/>
      <main>
        <Article article={article}></Article>
        <section>section2</section>
      </main>

    </>
  )
}

export default App