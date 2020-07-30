import React from "react";
import "./styles.css";

function Home(){
    return (
        <div>
            <header className="header">
               
                <div className="toolbar">
                    <div>
                        <a href="/">Clube Seleto</a>
                        <input type="text"></input>
                    </div>

                    <div >
                        <button> Cadastrar </button>
                        <span>IMG1</span>
                        <span>IMG2</span>
                    </div>

                </div>

            </header>
            <div className="toolbar">
                </div>
            <main className="main">
                
                <div className="navbar"> 
                    navbar
                </div>  
                <div className="feed">
                    feed 
                </div>
            </main>
        </div>
    )

}
export default Home;