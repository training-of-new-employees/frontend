import { paths } from '../../../utils/constants'

import logo from '../../../images/Landing/logo.svg'

export default function Header() {
  return (
    <header id='top' className="flex flex-row justify-between items-center px-[140px] py-3 bg-[#2F302E]">
      <a href={paths.main}>
        <img src={logo} alt="логотип" />
      </a>
      <nav className='flex gap-10'>
        <a href="/#about" className='text-base font-normal leading-normal text-white'>О нас</a>
        <a href="/#start" className='text-base font-normal leading-normal text-white'>Как начать</a>
        <a href="/#contacts" className='text-base font-normal leading-normal text-white'>Контакты</a>
      </nav>
      <div className='flex gap-10'>
        <a href={paths.login} className='px-[26px] py-[6px] border-2 rounded-xl border-white text-base font-normal leading-normal text-white'>Войти</a>
        <div className='flex w-[200px] h-10 text-center'>
          <a href={paths.registration} className='w-[200px] px-[19.5px] py-2 rounded-xl text-base font-normal leading-normal no-underline text-white bg-[#53772F] text-center'>Зарегистрироваться</a>
        </div>
      </div>
    </header>
  )
}
