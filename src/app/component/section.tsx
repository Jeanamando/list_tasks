import Image from 'next/image'
import Input from './input'
import Task from './task'
import Button from './button'



export default function Section() {
    return (
        <section className=' flex min-h-screen justify-center items-center  border-white outline flex-col  text-gray-300 '>
            <div><h1 className='text-[2.5em]'>To Do List</h1>
                <div className='flex-row'>
                    <Input /><Button />
                </div>
                <h2 className='text-[1.8em]'>Tasks:</h2>
                <div>
                    <Task>{""}</Task>
                </div>
            </div>
        </section>
    )   
}
