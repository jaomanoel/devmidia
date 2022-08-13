import React from "react";

const Main = (props) => {
    return (
       <>
            <div className="noticias">
                <h2>{props.title}</h2>
                
                <h3>#{props.category}</h3>

                <div>
                    <p>
                        {props.content}
                    </p>
                </div>

                <a href="#">Acessar</a>
            </div>
       </>
    )
}

export default Main;