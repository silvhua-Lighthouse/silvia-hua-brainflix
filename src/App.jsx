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

  return (
    <>
      <Header />
      <Article article={article}></Article>

    </>
  )
}

export default App
