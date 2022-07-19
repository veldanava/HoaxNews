import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import Navbar from '@/Components/Navbar';
import Daftar from '@/Components/Webhoax/Daftar';
import Paginator from '@/Components/Webhoax/Paginator';
import Footer from '@/Components/Webhoax/Footer';

export default function Webhoax(props) {
    
    return (
        <div className='min-h-screen bg-slate-50 text-white text-1xl'>
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            <Footer />
            <div className='flex justify-center items-center flex-col gap-6 p-4 lg:flex-row lg:items-stretch lg:flex-wrap'>
            <Daftar webhoaxes={props.webhoaxes.data} />
            </div>
        <div className='flex justify-center items-center text-black'>
        <Paginator meta={props.webhoaxes.meta}/>
        
        
        </div>
        </div>
    )
} 