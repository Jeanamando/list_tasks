import Image from 'next/image'
import { title } from 'process'

export default function Home() {
  
  return (
    <section className='bg-zinc-950 flex min-h-screen items-center justify-center '>
      <div className='bg-[#374151] h-250 w-4/12'>
        <h1 className='text-white p-2 flex text-center text-2xl'>Task List</h1>
          <div className='flex flex-row'>
            <input className='flex gap-1' type="text" placeholder='New task...' />
            <input className='p-2' type="submit" value="Save" />
          </div>
          <h2 className='text-white text-base p-2'>Tasks</h2>
        <div className='flex-row'>
          <input type="text" value="My task" />
            <div>
              <button>Edit</button>
              <button>Delete</button>
            </div> 
        </div>
        
      </div>
    </section>
  )
}
