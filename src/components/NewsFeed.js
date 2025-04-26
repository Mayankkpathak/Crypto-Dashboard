import { useEffect, useState } from 'react';
import axios from 'axios';

const NewsFeed = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_RAPID_API_KEY; // Load API key from environment variable

    if (!apiKey) {
      console.error("API key is missing! Check your .env file.");
      return; // Prevent API call if no key
    }

    const options = {
      method: 'GET',
      url: 'https://crypto-news-live3.p.rapidapi.com/news',
      headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'crypto-news-live3.p.rapidapi.com',
      },
    };

    axios.request(options)
      .then((response) => {
        console.log(response.data);
        setArticles(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

  }, []);

  const first7Articles = articles?.slice(0, 7);

  return (
    <div className="news-feed">
      <h2>News Feed</h2>
      {first7Articles?.map((article, _index) => (
        <div key={_index}>
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            <p>{article.title}</p>
          </a>
        </div>
      ))}
    </div>
  );
}

export default NewsFeed;
