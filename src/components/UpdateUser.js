import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateUser() {
    const { id } = useParams()

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [age, setAge] = useState()
    const [city, setCity] = useState()
    const [occupation, setOccupation] = useState()
    const [salarygrade, setSalarygrade] = useState()
    const [username, setUsername] = useState()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3001/get/" + id);
                console.log(response);
                setName (response.data.name)
                setEmail (response.data.email)
                setAge (response.data.age)
                setCity (response.data.city)
                setOccupation (response.data.occupation)
                setSalarygrade (response.data.salarygrade)
                setUsername (response.data.username)
            } catch (err) {
                console.log (err)
            }
        }
        fetchData();
    }, [])

    const navigate = useNavigate()

    const handleUpdate = (e) => {
        e.preventDefault()
        axios.put ('http://localhost:3001/update/' + id, { name, email, age, city, occupation, salarygrade, username })
            .then(res => {
                console.log(res);
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    return(
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
            <form onSubmit={handleUpdate}>
                    <h2>Update User</h2>
                    <div className="mb-2">
                        <label htmlFor="">Name</label>
                        <input
                            type = "text"
                            placeholder="Enter Name"
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Email</label>
                        <input
                            type = "text"
                            placeholder="Enter Email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Age</label>
                        <input
                            type = "text"
                            placeholder="Enter Age"
                            className="form-control"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">City</label>
                        <input
                            type = "text"
                            placeholder="Enter City"
                            className="form-control"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Occupation</label>
                        <input
                            type = "text"
                            placeholder="Enter Occupation"
                            className="form-control"
                            value={occupation}
                            onChange={(e) => setOccupation(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Salary Grade</label>
                        <input
                            type = "text"
                            placeholder="Enter Salary Grade"
                            className="form-control"
                            value={salarygrade}
                            onChange={(e) => setSalarygrade(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Username</label>
                        <input
                            type = "text"
                            placeholder="Enter Username"
                            className="form-control"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-success">Update</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateUser;