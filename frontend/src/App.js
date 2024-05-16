import "./App.css"
import React, { useState, useEffect } from "react"
import data from "./db.json"

function App() {
  const [omens, setOmens] = useState(data)
  useEffect(() => {}, [])

  return (
    <div>
      <nav className="navbar primC">
        <div className="container-fluid">
          <span className="navbar-brand mb-2 h1 text-white">Omen Tracker</span>
        </div>
      </nav>
      <div className="body">
        <div className="mt-5">
          <button type="button" className="btn primC text-white">
            Add new Omen
          </button>
        </div>
        <h2 className="text-center mt-5">Omens</h2>
        {omens.map((o, i) => (
          <div className="card mb-3" key={i}>
            {console.log(o)}
            <div className="row g-0">
              <div className="col-md-4">
                <img src={o.img} className="card-img-top" alt="add image" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{o.animal}</h5>
                  <p className="card-text">{o.meaning}</p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      Last seen: {o.datesSeen[0].date}
                    </small>
                    <br></br>
                    <small className="text-body-secondary">
                      {o.datesSeen.addContext}
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
