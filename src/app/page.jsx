'use client'
import Image from 'next/image'
import { title } from 'process'
import { useState, useEffect } from 'react'




export default function Home(){
 const [task, setTask]= useState("")
 const handleSubmit = (e) =>{
  e.preventDefault();
  //se estiver vazio return...não siga função
  if(!task) return;
  //Adicionar task
  
  const Addtask =(text)=>{
    const newTask = [{
      text,
      isCompleted: false
    }]
    setTask(newTask);
  }
  //limpar text
  setTask("")
 }
    

  return (
    <section className=' bg-zinc-950 flex min-h-screen items-center justify-center '>
      <div className='box-border m-0 rounded-[20px] bg-[#374151] h-2/5 w-[30em]'>
        <h1 className='text-neutral-300 p-2 flex text-center text-2xl'>To Do List</h1>
          <form onSubmit={handleSubmit} className='flex flex-row'>
            <input value={task} onChange={(e) => setTask(e.target.value)} className='flex w-[25em] ml-5 text-white p-0.5 outline-none rounded-2xl bg-[#1F2937] ' type="text" placeholder='New task...'/>
            <input onClick={() => setTask(task)} className='text-[#EC4899] bg-gradient-to-r from-[#EC4899] to-[#8B5Cf6] bg-clip-text text-transparent cursor-pointer transition-duration:0.4s;
            p-2 rounded-sm hover:opacity-0.8 active:opacity-0.6' type="submit" value="Save" />
          </form>
          
          <h2 className='text-neutral-200 text-xl p-4'>Tasks :</h2>

       {/*<div className='flex appearance-none text-center justify-between bg-[#111827] w-[22rem]  ml-5 rounded-2xl my-2 p-1.3'>
          <input className='outline-none ml-6 bg-transparent rounded-md' type="text" value="My task" />
            <div className='mr-5 p-1 flex'>
              <button className='hover:opacity-[0.8rem] active:opacity-[0.6rem] mr-4 text-[#EC4899] bg-gradient-to-r from-[#EC4899] to-[#8B5Cf6] bg-clip-text text-transparent '>Edit</button>
              <button className='text-[#dc143c]'>Delete</button>
            </div> 
        </div>
        <div className='flex appearance-none text-center justify-between bg-[#111827] w-[22rem]  ml-5 rounded-2xl my-2 p-1.3'>
          <input className='outline-none ml-6 bg-transparent rounded-md' type="text" value="My task 2" />
            <div className='mr-5 p-1 flex'>
              <button className='hover:opacity-[0.8rem] active:opacity-[0.6rem] mr-4 text-[#EC4899] bg-gradient-to-r from-[#EC4899] to-[#8B5Cf6] bg-clip-text text-transparent '>Edit</button>
              <button className='text-[#dc143c]'>Delete</button>
            </div>
        </div>*/}
      
        
      </div>
    </section>
  )
}

