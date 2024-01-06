import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as Profile } from '../../assets/profile.svg';
import './Header.css'

export const Header = () => {
  return (
    <div className="bg-1 text-white py-3 px-5 flex justify-between w-full">
        <div className=''>
              
        </div>
        
        <div className='flex items-center'>
            <Logo className='w-9 md:w-14' />
            <p className='heading'>Task Manager</p>
        </div>
        
        <div className='flex items-center justify-center'>
            <Profile className='w-5 md:w-8 cursor-pointer' />
        </div>
    </div>
  )
}
