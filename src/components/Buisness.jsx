import axios from "axios";
import React,{useEffect, useState} from "react";  
import { json } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
// process.env.API_KEY 

export const Business = () => {  
    const [news, setNew] = useState([]);
    
    const [loading, setLoading] = useState(false)

    let getNews=async()=>{

        try {
            const res = await axios.get(`https://newsapi.org/v2/top-headlines/sources?category=business&apiKey=7d2209163e5a4832a121a9e1a561a9dd`)
 
            setNew(res.data.sources);
    
            
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
            {loading? <ClipLoader color="#d7204b"
                loading={loading} 
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"
                 
              />:news?.map((newOne)=>(
                <div className="homeSMdiv">
                    <img className="img" src={!newOne.urlToImage?"https://static.news.bitcoin.com/wp-content/uploads/2021/09/crypto-market-values-nosedive-amid-global-market-meltdown-widening-default-risks.jpg":newOne.urlToImage}></img>
                    <h3>{newOne.name}</h3> 
                    <p>{newOne.description}</p> 
                </div>
            ))
              }
             
        </div> 
            </>
        
    )
};
 
