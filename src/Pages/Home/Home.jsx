/* eslint-disable react/jsx-no-target-blank */
import { useEffect, useState } from 'react';
import '../../../css/Home.css'
import { getQuoteService } from '../../service/andruxnet';


function Home() {
  const colors = ["color-red", "color-green", "color-blue", "color-pink", "color-orange", "color-purple"];
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const [quotes, setQuotes] = useState([])

  const getQuotes = async () => {
    const res = await getQuoteService()
    setQuotes(res)
  };
  
  useEffect(() => {
    getQuotes();
  }, [])


  console.log(quotes)

  const changeColor = () => {
    getQuotes();
    const newIndex = (currentColorIndex + 1) % colors.length;
    setCurrentColorIndex(newIndex);
  };
 
  return (
    <div id="container" className={colors[currentColorIndex]}>
      <div id="quote-box">
        {quotes.map((item, index) => {
          return (
            <>
              <span key={item.author} id="text">
                <i className="fa fa-quote-left"></i>
                {item.quote}
              </span>

              <h2 key={index} id="author">
                <span>By</span>
                {"  "} {item.author}
              </h2>
            </>
          );
        })}

        <div id="footer-quote">
          <a
            target="_blank"
            id="tweet-quote"
            href="https://github.com/Ayo89/RadomQuoteMachine"
          >
            {" "}
            <i className="fab fa-github"></i>
          </a>
          <button
            className={colors[currentColorIndex]}
            id="new-quote"
            onClick={changeColor}
          >
            New quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home