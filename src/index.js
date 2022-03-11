import React from 'react'; // Usado para gerenciar os scripts react
import ReactDom from 'react-dom'; // Usado para gerenciar a render na DOM dos scripts React
import SearchBar from './components/search_bar';
import 'dotenv/config';
require('dotenv').config();


const api = process.env.API_YOUTUBE_KEY;
console.log(api);

//Create the jsx function

const App = () => {
    return ( 
    <div>
        <SearchBar />        
    </div>) 
};

// Render e add no DOM

ReactDom.render(<App />, document.querySelector('.container')); // Procura no DOM a tag Container (index.html
                                                                //) e insere


