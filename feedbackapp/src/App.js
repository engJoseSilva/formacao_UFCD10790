import React, { useEffect, useState } from "react";
import "./App.css";
import { v4 as uuidv4} from 'uuid';
import FeedbackList from "./componentes/FeedbackList";
import FeedbackStats from "./componentes/FeedbackStats";
import Header from "./componentes/Header";
import FeedbackData from "./data/FeedbackData";
import FeedbackForm from "./componentes/FeedbackForm";

function App() {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3002/feedback`)
    .then((response) => response.json())
    .then((data) => setFeedback(data))

  },[])
  
  const deleteFeedback = (id) => {
    if(window.confirm("Deseja mesmo apagar" )){
      setFeedback(feedback.filter((item) => item.id != id));
    }
  }

  const handleAdd = (newFeedback) => {
    newFeedback.id = uuidv4();
    console.log(newFeedback);
    setFeedback([newFeedback,...feedback])
  }
 
  return (
    <>
    <Header title='Feedback UI APP' bgColor="rgba(0,0,0,0.4)" textColor="#ff6a95"/>
      <div className="container">
        <FeedbackForm handleAdd={handleAdd}/>
        <FeedbackStats data={feedback} />
        <FeedbackList data={feedback} handleDelete={deleteFeedback}/>
      </div>
    </>
  );
}

export default App;
