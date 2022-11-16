import React, {useEffect, useState} from 'react'



const App = () => {

  const[backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("http://localhost:4000/api").then(
      response => response.json()
    ).then(
      data=> {
        setBackendData(data)
      }
    )
  },[])


  return (
    <div>
      {(typeof backendData.names === 'undefined') ? (
        <p>Loading...</p>
      ):(
        backendData.names.map((name, i)=>(
          <p key={i}>{name}</p>
        ))
      )}
    </div>
  )
}

export default App