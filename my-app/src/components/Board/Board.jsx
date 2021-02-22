import React, { useEffect, useState } from 'react'
import "./board.css"
import { loadLists } from "../../service/ap2"

import api from "../../service/api"
import List from "../List/List"
import { useParams } from 'react-router';



const lists = loadLists();

const Board = () => {

    const { id } = useParams()
    const [tasks, setTasks] = useState([])



    const takeProject = async () => {
        try {
            const response = await api.get(`/find/task/${id}`);
            setTasks(response.data.projectTask)
        } catch (error) {
            console.log(error.response.data)
        }
    }

    useEffect(() => {
        takeProject()
    }, [])





    return (
        <div id="border-container">

            <List data={tasks} />
            <List data={tasks} />
            <List data={tasks} />


            {/* {lists.map(list => <List key={list.title} data={list} />)} */}

        </div>
    )
}

export default Board
