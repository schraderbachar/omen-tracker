import "./App.css"
import React, { useState, useEffect } from "react"
import data from "./db.json"

function App() {
  const [omens, setOmens] = useState(data)

  useEffect(() => {}, [omens])

  const handleSubmit = (e) => {
    // Prevent the browser from reloading the page
    e.preventDefault()

    // Read the form data
    const form = e.target
    const formData = new FormData(form)
    //add date
    formData.append("date", new Date(Date.now()).toLocaleDateString())
    formData.append("img", "")

    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries())
    setOmens(...omens, { formJson })
    console.log(omens)
  }

  return (
    <div>
      <nav className="navbar primC">
        <div className="container-fluid">
          <span className="navbar-brand mb-2 h1 text-white">Omen Tracker</span>
        </div>
      </nav>
      <div className="body">
        <div className="mt-5">
          <button
            type="button"
            className="btn primC text-white"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Add new Omen
          </button>
          {/* modal */}
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Add new omen
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <form method="post" onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label className="form-label">Animal Name</label>
                      <input
                        name="animal"
                        className="form-control"
                        defaultValue=""
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Meaning</label>
                      <textarea
                        name="meaning"
                        className="form-control"
                        defaultValue=""
                        rows={4}
                        cols={40}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Context</label>
                      <textarea
                        name="addContext"
                        className="form-control"
                        defaultValue=""
                        rows={4}
                        cols={40}
                      />
                    </div>

                    <hr />
                    <button
                      type="submit"
                      className="btn primC text-white"
                      data-bs-dismiss="modal"
                    >
                      Add omen
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* end of modal */}
        </div>
        <h2 className="text-center mt-5">Omens</h2>
        {omens.map((o, i) => (
          <div className="card mb-3" key={i}>
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
                      Last seen: {o.date}
                    </small>
                    <br></br>
                    <small className="text-body-secondary">
                      {o.addContext}
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
