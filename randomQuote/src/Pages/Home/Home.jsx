import { useEffect, useState } from 'react';
import '../../../css/Home.css'
import { getQuoteService } from '../../service/andruxnet';


function Home() {
  const colors = ["color-red", "color-green", "color-blue"];
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
                <span>By</span>{"  "} {item.author}
              </h2>
            </>
          );
        })}

        <div id="footer-quote">
          <a id="tweet-quote" href="#">
            <div
              style={{ width: "20px", height: "20px", background: "magenta" }}
            ></div>
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