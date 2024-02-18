import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateUser(){

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [age, setAge] = useState()
    const [city, setCity] = useState()
    const [occupation, setOccupation] = useState()
    const [salarygrade, setSalarygrade] = useState()
    const [username, setUsername] = useState()

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/create', { name, email, age, city, occupation, salarygrade, username })
            .then(res => {
                console.log(res);
                navigate ('/')
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={handleSubmit}>
                    <h2>Add User</h2>
                    <div className="mb-2">
                        <label htmlFor="">Name</label>
                        <input
                            type = "text"
                            placeholder="Enter Name"
                            className="form-control"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Email</label>
                        <input
                            type = "text"
                            placeholder="Enter Email"
                            className="form-control"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Age</label>
                        <input
                            type = "text"
                            placeholder="Enter Age"
                            className="form-control"
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">City</label>
                        <input
                            type = "text"
                            placeholder="Enter City"
                            className="form-control"
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Occupation</label>
                        <input
                            type = "text"
                            placeholder="Enter Occupation"
                            className="form-control"
                            onChange={(e) => setOccupation(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Salary Grade</label>
                        <input
                            type = "text"
                            placeholder="Enter Salary Grade"
                            className="form-control"
                            onChange={(e) => setSalarygrade(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Username</label>
                        <input
                            type = "text"
                            placeholder="Enter Username"
                            className="form-control"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-success">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CreateUser;