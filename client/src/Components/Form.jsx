import React, { useState } from 'react';
import { fetchUsers , createUser } from '../utils/HandleApi';
import toast from "react-hot-toast";
import UserDetails from './UserDetails';

function Form() {
    const [name , setName ] = useState("");
    const [email , setEmail ] = useState("");


    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = await createUser(name , email);
        if (data.success) {
            toast.success(data.message); 
            <UserDetails />
            fetchUsers();
        } else {
            console.log(data.message);
            toast.error(data.message);
        }
        setName("");
        setEmail("");
    }

    const handleChangeName = (event) => {
        setName(event.target.value)
       
    }
    const handleChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <section className='text-gray-600 body-font relative'>
                    <div className="container px-5 py-8 mx-auto">
                        <div className="flex flex-col text-center w-full mb-6">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                                Create User
                            </h1>
                        </div>
                        <div className="lg:w-1/2 md:w-2/3 mx-auto">
                            <div className="flex flex-wrap -m-2">
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                                        <input type="text" id="name" placeholder="Name" name="name" 
                                        className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' 
                                        value={name} 
                                        onChange={handleChangeName} />
                                    </div>  
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                        <input type="text" id="email" placeholder="Email" name="email" 
                                        className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' 
                                        value={email} 
                                        onChange={handleChangeEmail} />
                                    </div>  
                                </div>
                                <div className="p-2 w-full">
                                    <button type='submit' className='flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
                                        Submit
                                    </button>
                                </div>
                            </div>  
                        </div>
                    </div>
                </section>
            </form>
        </div>
    )
}



export default Form;










