import React from 'react'
import { useState } from 'react'
import { MdAdd } from "react-icons/md"
import "./projects.css"
import api from "../../../service/api"
import { firebase } from "../../../service/firebase"






const Modal = ({ fetchProjects }) => {


    const [projectName, setProjectName] = useState("")
    const [error, setError] = useState("")
    const [fileUrl, setFileUrl] = useState(null)
    console.log(fileUrl)


    const onFileChange = async (e) => {
        const file = e.target.files[0]
        const storageRef = firebase.storage().ref()
        const fileRef = storageRef.child(file.name)
        await fileRef.put(file)
        setFileUrl(await fileRef.getDownloadURL())
    }


    const createProject = async (e) => {
        e.preventDefault()

        const projectData = { name: projectName }

        try {
            const response = await api.post("/create/project", projectData);
            fetchProjects()
            setError("")


        } catch (error) { setError(error.response.data.message) }

    }



    return (
        <div className="modal-container">
            <form onSubmit={createProject} >

                <button type="button"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                >
                    <MdAdd size={24} color="#fff" />
                </button>


                <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>

                            <div className="modal-body">

                                <div>
                                    <label htmlFor="formFile">Photo de profile</label>
                                    <input
                                        id="formFile"
                                        className="form-control"
                                        type="file"
                                        onChange={onFileChange}
                                        name="img"
                                    >
                                    </input>
                                </div>




                                <label htmlFor="exampleInputEmail1" className="form-label">Nom du  projet</label>
                                <input type="text"
                                    className="form-control mb-1"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    onChange={e => setProjectName(e.target.value)}
                                />
                                {error ? <span className="text-danger">  {error}  </span> : null}

                            </div>

                            <div className="modal-footer">

                                <button type="submit" className="btn btn-primary"  >Créer mon projet</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )

    // data-bs-dismiss="modal"
}


export default Modal
