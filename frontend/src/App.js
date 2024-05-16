import "./App.css"
import React, { useState, useEffect } from "react"
import twoCrows from "./img/twoCrows.jpg"
import data from "./db.json"

function App() {
  const [omens, setOmens] = useState([data])

  useEffect(() => {}, [])

  return (
    <div>
      <nav className="navbar primC">
        <div className="container-fluid">
          <span className="navbar-brand mb-2 h1">Omen Tracker</span>
        </div>
      </nav>
      <div className="body">
        <h2 className="text-center mt-5">Omens</h2>
        {omens &&
          omens.length > 0 &&
          omens.map((o, i) => (
            <div className="card mb-3" key={i}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={twoCrows} className="card-img-top" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{o[i].animal}</h5>
                    <p className="card-text">{o[i].meaning}</p>
                    <p className="card-text">
                      <small className="text-body-secondary">
                        Last seen: {o[i].datesSeen[0].date}
                        {console.log(o[i])}
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default App
