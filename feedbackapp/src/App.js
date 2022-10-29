import React, { useState } from "react";
import "./App.css";
import FeedbackList from "./componentes/FeedbackList";
import Header from "./componentes/Header";
import FeedbackData from "./data/FeedbackData";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  
  const deleteFeedback = (id) => {
    if(window.confirm("Deseja mesmo apagar" )){
      setFeedback(feedback.filter((item) => item.id != id));
    }
  }
 
  return (
    <>
    <Header title='Feedback UI APP' bgColor="rgba(0,0,0,0.4)" textColor="#ff6a95"/>
      <div className="container">
        <FeedbackList data={feedback} handleDelete={deleteFeedback}/>
      </div>
    </>
  );
}

export default App;
