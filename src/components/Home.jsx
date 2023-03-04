import axios from "axios";
import React,{useEffect, useState} from "react";  
import { json } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
process.env.API_KEY


export const Home = () => { 
    const [news, setNew] = useState([]);
    const [loading, setLoading] = useState(false)

    

    let getNews=async()=>{

        try {
            const res = await axios.get(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${API_KEY}`)

 
            setNew(res.data.articles);
    
            
        } catch (error) {
            console.log(error)
        }
        
    }


    useEffect(() => {
      getNews();
      setLoading(true );
      setTimeout(()=>{
        setLoading(false)
      }, 3000)
    }, [])
    
    
    return(
        <>
        <div className="home">
            {
                loading? <ClipLoader color="#d7204b"
                loading={loading} 
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"
                 
              />:news?.map((newOne)=>(
                <div className="homeSMdiv">
                    <img className="img" src={!newOne.urlToImage?"https://static.news.bitcoin.com/wp-content/uploads/2021/09/crypto-market-values-nosedive-amid-global-market-meltdown-widening-default-risks.jpg":newOne.urlToImage}></img>
                    <h3>{newOne.title}</h3>
                    <h4>Author : {newOne.author}</h4>
                    <p>Description : {newOne.description}</p>
                    <p>{newOne.publishedAt}</p>
                    {/* <p>Content : {newOne.content}</p> */}
                    <a rel="noreferrer" href= {newOne.url} target="_blank" className="btn btn-sm btn-dark">read more...</a>
                </div>
            ))
            } 
        </div> 
            </>
        
    )
};
 
