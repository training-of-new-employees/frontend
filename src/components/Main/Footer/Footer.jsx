import planets1 from '../../../images/Landing/footerPlanets1.png'
import planets2 from '../../../images/Landing/footerPlanets2.png'

export default function Footer() {
  return (
    <footer className="flex justify-center py-[120px] bg-[#53772F] relative">
      <img src={planets1} alt="планеты" className='absolute top-[57px] left-[29px]'/>
      <img src={planets2} alt="планеты" className='absolute top-[57px] right-[29px]'/>
      <p className="text-base font-normal leading-normal text-white">© 2024 QuickOn team</p>
    </footer>
  )
}
