import Image from 'next/image'
import { title } from 'process'

export default function Home() {
  
  return (
    <section className=' bg-zinc-950 flex min-h-screen items-center justify-center '>
      <div className='box-border m-0 rounded-[20px] bg-[#374151] h-2/5 w-[30em]'>
        <h1 className='text-neutral-300 p-2 flex text-center text-2xl'>Task List</h1>
          <div className='flex flex-row'>
            <input className='flex  text-white p-0.5 outline-none rounded-2xl bg-[#1F2937] ' type="text" placeholder='New task...'/>
            <input className='text-[#EC4899] bg-gradient-to-r from-[#EC4899] to-[#8B5Cf6] bg-clip-text text-transparent cursor-pointer transition-duration:0.4s;
            p-2 rounded-sm hover:opacity-0.8 active:opacity-0.6' type="submit" value="Save" />
          </div>
          
          <h2 className='text-neutral-200 text-xl p-2'>Tasks</h2>

        <div className='flex appearance-none justify-between bg-[#111827] rounded-sm my-2 p-2'>
          <input className='outline-none bg-transparent rounded-md' type="text" value="My task" />
            <div>
              <button className='p-1'>Edit</button>
              <button>Delete</button>
            </div> 
        </div>
        
      </div>
    </section>
  )
}
