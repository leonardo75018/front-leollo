import React from 'react'
import "./list.css"
import { MdAdd } from "react-icons/md"

import Card from "../Card/Card"




const List = ({ data }) => {





    return (
        <div id="list-container">
            <header>
                <button type="button">
                    <MdAdd size={24} color="#fff" />
                </button>
            </header>

            <ul>
                <Card data={data} />

                {/* {data.cards.map(card => <Card key={card.id} data={card} />)} */}
            </ul>
        </div>
    )
}

export default List
