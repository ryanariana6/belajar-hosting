import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2';

const ListHero = () => {
    const [Heros, setHeros] = useState([]);
    
    useEffect(() =>{
        getHeros();
    },[]);

    const getHeros = async () => {
        const response = await axios.get('http://localhost:5000/heros');
        setHeros(response.data);
    };

    const deleteHero = async (heroId) => { 
        await axios.delete(`http://localhost:5000/heros/${heroId}`);
        setHeros();
    };

    const deleteProses  = async (heroId) => {
        try {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                if (result.isConfirmed) {
                    deleteHero(heroId);
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                }
            })
        } catch (error) {
            
        }
    };
    return (
    <div className="py-4">
        <h1 className="title"> Hero </h1>
        <h2 className="subtitle"> List Of Hero </h2>
        <Link to="/admin/heros/add" className="button is-primary mb-2"> Add New </Link>
        <table className="table is-striped is-fullwidth">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Title</th>
                    <th>Images</th>
                    <th>keterangan</th>
                    <th>Created By</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {Heros.map((heros, index) => (
                <tr key={heros.uuid}>
                    <td>{index + 1}</td>
                    <td>{heros.name}</td>
                    <td><img src={`http://localhost:5000/images/imgHero/${heros.image}`} alt="No images" width="200" height="300"/></td>
                    <td><details>{heros.kether}</details></td>
                    <td>{heros.admin.name}</td>
                    <td>
                        <Link to={`/admin/heros/edit/${heros.id}`} className="button is-small is-info">Edit</Link>
                        <button onClick={()=> deleteProses(heros.id)} className="button is-small is-danger">Hapus</button>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
    );
};

export default ListHero;