import "./App.css"
import React, { useState, useEffect } from "react"

const db = [
  {
    animal: "Dead Animal",
    meaning: "At war with yourself / not happy w/ current state of self",
    img: "img/dead.jpg",
    date: "01/01/2024",
    addContext: "",
  },
  {
    animal: "Beaver",
    meaning:
      "Need for focus, balance, and creativity in work/personal endeavours",
    img: "img/beaver.jpg",
    date: "01/01/2024",
    addContext: "",
  },
  {
    animal: "Otter",
    meaning:
      "Enjoy simple things in life, away from stress. Encourages you to find joy in simple things and serious ones. Symbolic of curiositym intelligence and social connection and inexhaustible energy.",
    img: "img/otter.jpg",
    date: "01/01/2024",
    addContext: "",
  },
  {
    animal: "2 Geese",
    meaning:
      "Togetherness and cooperation. We're stronger when we work together towards a common goal. Maintaining balance.",
    img: "img/geese.jpg",
    date: "01/01/2024",
    addContext: "",
  },
  {
    animal: "Chipmunk",
    meaning: "Something good is on its way to you. Prosperity and protection.",
    img: "img/chip.jpg",
    date: "01/01/2024",
    addContext: "",
  },
  {
    animal: "Squirrel",
    meaning:
      "Good luck- you're prepared for whats to come. De clutter, save for future.",
    img: "img/squirrel.jpg",
    date: "01/01/2024",
    addContext: "",
  },
  {
    animal: "Raccoon",
    meaning:
      "Ready to take a new path in life. May be a sign to keep a secret or investigate deception. Trust your judgement about someone, espcially if feeling sus. ",
    img: "img/racoon.jpg",
    date: "01/01/2024",
    addContext: "",
  },
  {
    animal: "Hawk",
    meaning:
      "Calm and balance your life. Mind is most likely working in overdrive, leaving you stressed and anxious. Wait for the right time to make a move, and when time is right do so with confidence. You're in control of your own life, your intution and decisions don't fail you. Learning lessons of universal connection and manifestation.",
    img: "img/hawk.jpg",
    date: "01/01/2024",
    addContext: "",
  },
  {
    animal: "Bald Eagle",
    meaning:
      "Gain perspective- look at things from diff pov. Wisdom comes in time. Dive headfirst into what you desire. Channel any unfair adv to be good. Uplift those around you who don't have same fortune. Be your authentic self.",
    img: "img/be.jpg",
    date: "01/01/2024",
    addContext: "",
  },
  {
    animal: "Dragonfly",
    meaning:
      "New beginnings, joy and happiness. self realizing and intuition, power and poise, change. Time to let go of past worries, spirit guides offering assistance, enjoy present. ",
    img: "img/df.jpg",
    date: "01/01/2024",
    addContext: "",
  },
  {
    animal: "Spiders",
    meaning: "Curiosity, wonder and growth.",
    img: "img/spider.jpg",
    date: "01/01/2024",
    addContext: "",
  },
  {
    animal: "Caterpillar",
    meaning: "Keep things to yourself, protect yourself. Don't overshare.",
    img: "img/catpill.jpg",
    date: "05/21/2024",
    addContext:
      "I was going through things w Alexa and wanted to tell her a lot about how I was feeling.",
  },
]

function App() {
  const [omens, setOmens] = useState([])
  const [updated, setUpdated] = useState(false)

  useEffect(() => {
    fetch("http://localhost:8080/omens")
      .then((res) => res.json())
      .then((data) => setOmens(data))
      .catch((err) => console.error(err))
  }, [updated])

  const handleSubmit = async (e) => {
    // Prevent the browser from reloading the page
    e.preventDefault()

    // Read the form data
    const form = e.target
    const formData = new FormData(form)
    //add date
    formData.append("date", new Date(Date.now()).toLocaleDateString())
    formData.append(
      "img",
      "https://hq2.recyclist.co/wp-content/uploads/sites/2/2022/05/deadanimals-1-300x300.png"
    )
    const formJson = Object.fromEntries(formData.entries())

    const res = await fetch("/omens", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formJson),
    })
      .then((res) => res.json())
      // .then((data) => console.log(data[0]))
      .then((data) => {
        let temp = omens
        temp.push(data[0])
        setOmens(temp)
      })
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
        {omens &&
          omens.map((o, i) => (
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
        {console.log(omens)}
      </div>
    </div>
  )
}

export default App
