import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className='h-12 grid items-center bg-[#1b262a]'>
      <Link to='/'>
        <div className='ml-2 font-medium uppercase text-[#9b9e9d]'>
          Dynamic<span className='text-[#24bcca]'>Devs</span>
          <span className='ml-2 font-normal lowercase'>Challenge</span>
        </div>
      </Link>
    </header>
  )
}
