import {Card} from "react-bootstrap";
import './Prediction.css';
import { useLocation } from "react-router-dom";
import MapsModal from "../GoogleMap/mapsModal";
import { useEffect, useState } from "react";

const Prediction = (props) => {
  const location = useLocation();
  const [result, setResut] = useState(null)

  useEffect(() => {
    if(location.state.data){
      setResut(location.state.data)
    }
  }, [])

  return (
    <div className='my-container'>
      <div className="result-container">
        <div className='prediction-container mb-5'>
          <div style={{backgroundImage:`url(${result && result.image})`, minWidth:"299px", minHeight:"250px"}} className="rounded result-image ml-lg-5" alt="Result Image" />
          <Card className='text-result'>
            <h1>Result:</h1>
            {result && result.result == '[ True]' ? <h3> We highly recommened you to see a doctor </h3> :  <h3> Our diagnosis has concluded that a consultation is not necessary.</h3>}
            <a href={`https://www.google.com/search?q=${'skin-cancer'}`} className="mt-3" target="_blank">Google Search for skin cancer</a>
          </Card>
        </div>
        <MapsModal />
      </div>
    </div>
  );
};

export default Prediction;
