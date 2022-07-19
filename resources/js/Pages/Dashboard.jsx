import React, { useState, useEffect } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Link, Head } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';

export default function Dashboard(props) {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [isNotif, setIsNotif] = useState(false)

    const handleSubmit = () =>{
        const data = {
            title, description, category
        }
        Inertia.post('/webhoax', data)
        setTitle('')
        setDescription('')
        setCategory('')
        setIsNotif(true)
    } 

    useEffect(()=>{
        if (!props.mywebhoax){
        Inertia.get('/webhoax')
        }
        console.log('data:', props)
        return;
    }, [])

    

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Tambah berita hoax baru</h2>}
        >
            <Head title="Dashboard" />

            
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {isNotif &&
                    <div className="alert alert-info shadow-lg">
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>{props.flash.message}</span>
                    </div>
                    </div> }

                <div className="p-4 justify-center mr-4 ">
                    <div className="p-2 justify-center ">
                        <input type="text" placeholder="Judul" className="input input-bordered input-primary w-full ml-1 mr-5"onChange={(title) => setTitle(title.target.value)} value={title} /></div>
                    <div className="p-2  justify-center ">
                        <input type="text" placeholder="Deskripsi" className="input input-bordered input-primary w-full ml-1 mr-5"onChange={(description) => setDescription(description.target.value)} value={description} /></div>
                    <div className="p-2  justify-center ">
                        <input type="text" placeholder="Kategori" className="input input-bordered input-primary w-full ml-1 mr-5"onChange={(category) => setCategory(category.target.value)}value={category} />
                    <button className='btn btn-primary m-1'onClick={() => handleSubmit()}>KIRIM</button>
                    </div>
                </div>
                </div>

                <div className="p-1 mr-8 lg:items-stretch flex-col lg:w-96 lg:flex-wrap flex justify-center "> 
                {props.mywebhoax && props.mywebhoax.length > 0 ? props.mywebhoax.map((webhoax, i)=>{
                    return(
                        <div key={i} className="card w-full lg:w-96 bg-base-100 shadow-xl m-5 flex-col lg:flex-row gap-6 lg:items-stretch lg:flex-wrap">
                        <div className="card-body">
                        <h2 className="card-title">
                        {webhoax.title}
                        <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>
                        {webhoax.description}
                        </p>
                        <div className="card-actions justify-end">
                        <div className="badge badge-inline">{webhoax.category}</div> 
                        <div className="badge badge-outline">
                        <Link href={route('edit.webhoax')} method="get"data={{id: webhoax.id}} as="button">edit</Link>
                        </div> 
                        <div className="badge badge-outline">
                        <Link href={route('delete.webhoax')} method="post"data={{id: webhoax.id}} as="button">hapus</Link>   
                        </div> 
                    
                        </div>
                        </div>
                        </div>  
                    )
                }): <p>berita kosong blm diisi</p>}
               
                </div>
           
        </Authenticated>
    );
}
