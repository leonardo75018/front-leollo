import React, { useState } from 'react'
import "./home.css"
import Projects from "../Projects/Projects"
import Modal from '../Projects/Modal'
import api from "../../../service/api"
import { useEffect } from 'react'




const Home = () => {

    const user = JSON.parse(localStorage.getItem('user'));
    const [projects, setProjects] = useState([])



    const fetchProjects = async () => {
        try {
            const response = await api.get("/find/project/1");
            setProjects(response.data.userProject)

        } catch (error) { console.log(error.response.data) }
    }

    useEffect(() => {
        fetchProjects()
    }, [])


    const deleteProject = async (id) => {
        try {
            const response = await api.post(`/delete/project/${id}`);
            fetchProjects()
        } catch (error) { console.log(error.response) }
    }







    return (
        <div className="home-container">
            <div className="space">
                <Modal fetchProjects={fetchProjects} />
            </div>

            <div className="late"></div>
            <Projects projects={projects} deleteProject={deleteProject} />

        </div>
    )
}

export default Home
