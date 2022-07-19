import React, { useState } from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import Navbar from '@/Components/Navbar';
import { Inertia } from '@inertiajs/inertia';


export default function Editwebhoax(props) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [isNotif, setIsNotif] = useState(false)

    const handleSubmit = () =>{
        const data = {
           id:props.mywebhoax.id, title, description, category
        }
        Inertia.post('/webhoax/update', data)
        setTitle('')
        setDescription('')
        setCategory('')
        setIsNotif(true)
    }

    console.log('edit:', props)
    return (
        <div className='min-h-screen bg-slate-50 justify-center'>
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
                    <div className='p-4'>
                        <div  className="card w-full lg:w-96 shadow-xl mr-2 lg:flex-row justify-center">
                            <div className="justify-center"><p>Edit Berita</p></div>
                        <div className="card-body">
                        <input type="text" placeholder="Judul" className="input input-bordered input-primary w-full "onChange={(title) => setTitle(title.target.value)} defaultValue={props.mywebhoax.title} />
                        <input type="text" placeholder="Deskripsi" className="input input-bordered input-primary w-full "onChange={(description) => setDescription(description.target.value)} defaultValue={props.mywebhoax.description} />
                        <input type="text" placeholder="Kategori" className="input input-bordered input-primary w-full "onChange={(category) => setCategory(category.target.value)}defaultValue={props.mywebhoax.category} />
                    <button className='btn btn-primary m-4'onClick={() => handleSubmit()}>UPDATE</button>
                    </div>
                        </div>
                        </div>
                        </div>  
                
    
    )
} 