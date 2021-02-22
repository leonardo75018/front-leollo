import React from 'react'
import "./card.css"
import { useDrag, useDrop } from "react-dnd"


const Card = ({ data }) => {

    const [{ isDraggin }, dragRef] = useDrag({
        item: { type: "CARD" },
        collect: monitor => ({
            isDraggin: monitor.isDragging(),

        }),
    });





    return (
        <div ref={dragRef}  >
            {
                data.map(task => <div id="card-container"  >
                    <header>
                        <label color="#7151c1" htmlFor=""> </label>
                    </header>
                    <p>{task.text}</p>
                    <div className="image">
                        <img src="https://images.unsplash.com/photo-1578758837674-93ed0ab5fbab?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80" alt="image" />
                    </div>

                </div>)
            }

        </div>
    )
}

export default Card
