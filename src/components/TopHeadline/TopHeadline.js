import React, { useEffect, useState } from 'react';
import News from '../News/News';


const TopHeadline = () => {

    const [articles, setArticles] = useState([]);
    
    useEffect( () => {
        const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=d85d2df1fd544de78339af42a7ef6885';
        fetch(url)
        .then(res => res.json())
        .then(data => setArticles(data.articles))
    }, []);
    return (
        <div>
            <h1>Top Headline: {articles.length}</h1>
            {
                articles.map(article => <News article={article}></News>)
            }
        </div>
    );
};

export default TopHeadline;