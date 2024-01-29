import arrow from '../../../images/Landing/arrow.svg'
import ellipse from '../../../images/Landing/ellipse.png'
import star1 from '../../../images/Landing/star1.png'
import star2 from '../../../images/Landing/star2.png'

export default function Contacts() {
  
  return (
    <>
      <section id="contacts" className="flex px-[140px] pt-[120px] pb-[14px] bg-[#2F302E] relative">
        <img src={star1} alt="звездочка" className='absolute top-[31px] right-[41px]'/>
        <img src={star1} alt="звездочка" className='absolute top-[187px] right-[142px]'/>
        <img src={star2} alt="звездочка" className='absolute left-[87px] bottom-0'/>
        <div className='flex gap-[124px]'>
          <div className='flex flex-col gap-3 max-w-[421px]'>
            <h3 className='exo text-[48px] font-medium leading-[110%] text-white'>
              Нужна помощь?
            </h3>
            <p className='text-base font-normal leading-normal text-white'>
              Подскажем как создать первый курс, ответим на вопросы о продукте, поможем решить возникшие проблемы. Команда QuickOn всегда на связи!
            </p>
          </div>
          <div className="flex flex-col items-center px-10 pb-10 pt-5 gap-5 bg-[#53772F] rounded-3xl">
            <h3 className="exo text-[40px] font-semibold leading-[110%] text-white">Свяжитесь с нами</h3>
            <div className="flex flex-col items-center gap-3">
              <div className="px-[18px] pt-[10px] pb-2 w-[435px] bg-white rounded-xl">
                <p className="text-[#A4A4A4] leading-[120%] text-base font-normal">Телефон</p>
                <a href="tel:+79811195024" className="text-[#2F302E] text-xl font-normal leading-normal">8 981 119 50 24</a>
              </div>
              <div className="px-[18px] pt-[10px] pb-2 w-[435px] bg-white rounded-xl">
                <p className="text-[#A4A4A4] leading-[120%] text-base font-normal">E-mail</p>
                <a href="mailto:help@quick-on.ru" className="text-[#2F302E] text-xl font-normal leading-normal">help@quick-on.ru</a>
              </div>
              <div className="px-[18px] pt-[10px] pb-2 w-[435px] bg-white rounded-xl">
                <p className="text-[#A4A4A4] leading-[120%] text-base font-normal">Telegram</p>
                <a href="tel:+79811195024" className="text-[#2F302E] text-xl font-normal leading-normal">@Quick_On</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='bg-[#2F302E] flex justify-end items-end relative w-full h-[190px]'>
        <img src={ellipse} alt="эллипс" className='absolute'/>
        <img src={star2} alt="звездочка" className='absolute left-[168px] top-0'/>
        <a href="/#top" className='text-transparent z-10 pr-3 pb-[-12px] text-0'>1<img src={arrow} alt="" className='z-10'/></a>
      </div>
    </>
  )
}
