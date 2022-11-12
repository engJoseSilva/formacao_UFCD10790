import React, { useEffect, useMemo, useState } from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { userContext } from "./context/userContext";
import "./App.css";
import { v4 as uuidv4} from 'uuid';
import FeedbackList from "./componentes/FeedbackList";
import FeedbackStats from "./componentes/FeedbackStats";
import Header from "./componentes/Header";
import FeedbackData from "./data/FeedbackData";
import FeedbackForm from "./componentes/FeedbackForm";
import Inicio from "./componentes/Pages/Inicio";
import Fim from "./componentes/Pages/Fim";
import Dashboard from "./componentes/Pages/Dashboard";

function App() {
  const [user, setUser] = useState(null);

  const value = useMemo(() => ({user, setUser}), [user, setUser]);
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
    {/* <Header title='Feedback UI APP' bgColor="rgba(0,0,0,0.4)" textColor="#ff6a95"/>
      <div className="container">
        <FeedbackForm handleAdd={handleAdd}/>
        <FeedbackStats data={feedback} />
        <FeedbackList data={feedback} handleDelete={deleteFeedback}/>
      </div> */}
      <BrowserRouter>
      <userContext.Provider value={value}>
      <Routes>
        <Route path="/" element={ <Inicio/>} />
        
      { user ? (
        <>
        <Route path="/dashboard" element={ <Dashboard/>} />
        <Route path="/logout" element={ <Fim/>} />
        </>
      ) : null
        
      }
        </Routes> 
        </userContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
