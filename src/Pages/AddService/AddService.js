import React, { useState } from 'react';

const AddService = () => {
    const [user, setUser] = useState({});
    const handleServiceSubmit = event =>{
        event.preventDefault();
        console.log(user)

        fetch('https://food-delevery-server-servoce.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                alert('User added successfully')
                event.target.reset();
            }
        })
    }

    const handleBlur = event =>{
        const field = event.target.name;
        const value = event.target.value;
        const newUser = {...user}
        newUser[field] = value;
        setUser(newUser)
    }
    return (
        <div className='p-20 my-10 w-1/2 bg-slate-300 mx-auto'>
            <form onSubmit={handleServiceSubmit} >

            <input onBlur={handleBlur} required name='title' type="text" placeholder="Type here"  className="input input-bordered input-error w-full max-w-xs my-4" />
            <br />
            <input onBlur={handleBlur} required name='img' type="text" placeholder="Type here" className="input input-bordered input-error w-full max-w-xs mb-4" />
            <br />
            <input onBlur={handleBlur} required name='price' type="number" placeholder="Type here" className="input input-bordered input-error w-full max-w-xs mb-4" />
            <br />
            <textarea onBlur={handleBlur} required name='description' className="textarea w-full max-w-xs textarea-error mb-4" placeholder="Bio"></textarea>
            <button className='w-full max-w-xs btn btn-outline btn-accent' type="submit">Add Service</button>
            </form>
        </div>
    );
};

export default AddService;