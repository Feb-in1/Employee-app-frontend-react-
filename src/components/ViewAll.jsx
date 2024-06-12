import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import axios from 'axios'

const ViewAll = () => {
    const [data, changeData] = useState(
        []
    )
    const fetchData=()=>{
        axios.get("http://localhost:8080/ViewAll").then(
            (response)=>{
                console.log(response.data)
                changeData(response.data)
            }
        ).catch(
            (error)=>{
                console.log()
            }
        ).finally()
        
    }
    useEffect(() => { fetchData() }, [])
    return (
        <div>
            <Nav/>

<div class="container mt-5">
                <div class="row g-3">


                    <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">





                        <table class="table table-dark table-striped table-hover">

                            <thead>
                                <tr>

                                    <th scope="col">Employee ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Designation</th>
                                    <th scope="col">Salary</th>

                                </tr>
                            </thead>
                            <tbody>

                                {
                                    data.map(
                                        (value, index) => {
                                            return <tr>

                                                <td>{value.id}</td>
                                                <td>{value.name}</td>
                                                <td>{value.desg}</td>
                                                <td>{value.sal}</td>

                                            </tr>
                                        }
                                    )
                                }
















                            </tbody>
                        </table>





                    </div>
                </div>





            </div>
        </div>
    )
}
export default ViewAll





    