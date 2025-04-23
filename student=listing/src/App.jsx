import React from "react";
import './App.css'
import StudentList from "./components/Student";

function App(){
      const services = [
        {
          id:1,
          title:"Web Develpment",
          desc:"you are a web developer"
        },
        {
          id:2,
          title:"App Develpment",
          desc:"you are a App developer"
        },
        {
          id:3,
          title:"Frontend Develpment",
          desc:"you are a frontend developer"
        }
      ]

      return(
        <div className="container">
            <h1>Services</h1>
            <div className="div1">
            {services.map((service)=>(
              <div className="div2">
                <StudentList key={service.id} title={service.title} desc={service.desc}/>
              </div>
            ))}
            </div>
        </div>
      )
}

export default App