import React from "react";
import bg from '../images/bg.jpg'

function Home () {
    return (
        <section className="home">
            <h1 className="homeheading">Welcome to a Fake One Piece Plush Store</h1>
            <img src={bg} alt='background'/>
        </section>
    )
}

export default Home;