import {Link, useParams, useNavigate} from "react-router-dom";
import React, {useState, useEffect} from 'react'
import axios from "axios";

function Users() {
    const { id } = useParams()

    const [data, setData] = useState ([])
    const [searchTerm, setSearchTerm] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:3001/')
            .then(res => {
                console.log(res);
                setData(res.data);
            })
            .catch(err => console.log(err)) 
    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/deleteuser/' + id)
            .then(res => {
                console.log(res)
                navigate('/');
                window.location.reload();
            }).catch (err => console.log(err));
    }

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    }

    const filteredData = data.filter((user) => {
        return (
            user.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    });

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
            <input
                    type="text"
                    placeholder="Search users by name..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="form-control mb-3"
                />
                <Link to="/create" className="btn btn-success btn-sm">
                    Add +
                </Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>City</th>
                            <th>Occupation</th>
                            <th>Salary Grade</th>
                            <th>Username</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((user, index) => {
                            return (
                                <tr key={index}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.age}</td>
                                    <td>{user.city}</td>
                                    <td>{user.occupation}</td>
                                    <td>{user.salarygrade}</td>
                                    <td>{user.username}</td>
                                    <td>
                                        <Link to={`/edit/${user._id}`} className="btn btn-sm btn-success me-2">Update</Link>
                                        <button onClick={() => handleDelete(user._id)} className="btn btn-sm btn-danger">Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Users;