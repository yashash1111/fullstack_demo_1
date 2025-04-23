import React from "react";


function StudentList({title,desc}){
     return(
        <div>
            <h1>Title:</h1>
            <h2 className="title">{title}</h2>
            <h1>Description:</h1>
            <h2 className="desc">{desc}</h2>
        </div>
     )
}

export default StudentList