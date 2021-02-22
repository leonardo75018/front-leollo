import React, { useState, Fragment } from 'react'
import "./register.css"
import api from "../../service/api"






const Register = () => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)
    const [isRegister, setIsRegister] = useState(false)




    const dataProcess = e => {
        e.preventDefault()
        if (isRegister) { Register() }
        else { Login() }
    }


    const Login = async () => {
        const userData = { email: email, password: password }

        try {

            const response = await api.post("/login", userData);

            if (response.data.token) {
                localStorage.setItem("token", "Bearer" + " " + response.data.token)
                localStorage.setItem("user", JSON.stringify(response.data.user))
                api.defaults.headers.common['Authorization'] = response.data.token;
            }
            if (response.status === 200) { window.location.href = "/board" }

        } catch (error) { setError(error.response.data.error) }
    }



    const Register = async () => {
        const userData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        }



        try {
            const response = await api.post("/register", userData);
            setIsRegister(!isRegister)

        } catch (error) { setError(error.response.data.message) }


    }


    return (

        <div id="form-container">
            <h3 className="text-center">
                {
                    isRegister ? "créer votre compte " : "Login "
                }
            </h3>

            {error && (<div className="alert alert-danger">{error}</div>)}

            <form onSubmit={dataProcess} >
                {
                    isRegister ?
                        <Fragment>
                            <input
                                name="firstName"
                                type="text"
                                placeholder="votre prenom"
                                className="form-control mb-2"
                                onChange={e => setFirstName(e.target.value)}
                            />

                            <input
                                name="lastName"
                                type="text"
                                placeholder="votre nom"
                                className="form-control mb-2"
                                onChange={e => setLastName(e.target.value)}
                            />
                        </Fragment> : null
                }


                <input
                    name="email"
                    type="text"
                    placeholder="votre email"
                    className="form-control mb-2"
                    onChange={e => setEmail(e.target.value)}

                />

                <input
                    name="password"
                    type="password"
                    placeholder="votre password"
                    className="form-control mb-2"
                    onChange={e => setPassword(e.target.value)}
                />

                <div className="btn-container">
                    <button
                        className="btn btn-primary btn-block  mb-2"
                        type="submit"
                    >
                        {isRegister ? "Créer mon compte" : " connexion"}
                    </button>

                    <button
                        className="btn btn-sm btn-info btn-block"
                        type="button"
                        onClick={() => setIsRegister(!isRegister)}
                    >
                        {isRegister ? "vous avez un compte?" : "je souhaite créer un compte"}

                    </button>

                </div>
            </form>
        </div>
    )
}

export default Register
