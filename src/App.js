import React, { Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Form from './components/Form';

function App() {

  //Definiendo la categoria
  const [catego, setCatego]= useState('');
  const [news, saveNews]= useState([]);

  useEffect(()=>{
    const getApi= async()=>{
      const url = `https://newsapi.org/v2/top-headlines?country=de&category=${catego}&apiKey=19d85ce8f91e46a0a8b5eff822c2e318`
      
      const res = await fetch(url);
      const news = await res.json();
      saveNews(news.articles)
   
    }
    getApi();
  },[catego])

return(
  <Fragment>
    <Header
       title = 'Noticias'
    />
    <div className="container white">
      <Form
      setCatego={setCatego}
      />
    </div>
  </Fragment>
  
)
}

export default App;