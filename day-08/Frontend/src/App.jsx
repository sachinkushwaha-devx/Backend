import axios from "axios"
import React, { useState } from 'react'

const App = () => {

  const [notes, setNotes] = useState([
    { 
    title: "test title 1",
    description: " discription 1"
    },
     { 
    title: "test title 2",
    description: "test discription 2"
    },
     { 
    title: "test title 3",
    description: "test discription 3"
    },
     { 
    title: "test title 4",
    description: "test discription 4"
    },
]);

  axios.get("http://localhost:3000/api/notes")
  .then((res)=>{
  setNotes(res.data.notes)
  })

  return (
  
    <>
    <div className="notes">
      {
        notes.map(note=>{
        return <div className="note">
        <h1>{note.title}</h1>
        <p> {note.description} </p>
      </div>
        })
      }
    
    </div>
     </>
  )
}

export default App
