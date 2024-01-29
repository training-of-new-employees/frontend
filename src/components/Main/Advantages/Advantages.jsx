import vector from '../../../images/Landing/advantageVector.svg'
import star1 from '../../../images/Landing/star1.png'
import star2 from '../../../images/Landing/star2.png'
import rocket from '../../../images/Landing/rocket.png'

export default function Advantages() {
  return (
    <section id="about" className="py-[120px] flex flex-col items-center px-[209px] gap-[68px] relative">
      <img src={vector} alt="векторный рисунок" className='absolute top-[65px] left-[104px]'/>
      <img src={star1} alt="звездочка" className='absolute top-[103px] right-[113px]'/>
      <img src={star2} alt="звездочка" className='absolute top-[153px] right-[178px]'/>
      <h2 className="exo text-[40px] leading-[130%] font-medium text-black">Наши преимущества</h2>
      <div className='flex gap-5'>
        <div className='flex flex-col gap-5 w-[596px]'>
          <div className='flex flex-col p-10 gap-3 bg-white rounded-xl'>
            <h3 className='exo text-[32px] font-semibold leading-[130%] text-[#2F302E]'>Простой запуск онлайн-обучения</h3>
            <p className='text-base font-normal leading-normal text-[#2F302E]'>Запустите обучение и адаптацию сотрудников вашей компании всего за 1 день благодаря простому и понятному интерфейсу QuickOn. Платформа поможет быстро улучшить эффективность команды с помощью удобной системы обучения.</p>
          </div>
          <div className='flex flex-col p-10 gap-3 bg-white rounded-xl'>
            <h3 className='exo text-[32px] font-semibold leading-[130%] text-[#2F302E]'>Удобный конструктор курсов</h3>
            <p className='text-base font-normal leading-normal text-[#2F302E]'>Создавайте онлайн-курсы и программы адаптации, которые нужны именно вашей компании, без привлечения дополнительных специалистов и больших затрат.</p>
          </div>
        </div>
        <div className='flex flex-col p-10 gap-3 w-[408px] bg-white rounded-xl relative'>
          <img src={rocket} alt="ракета" className='absolute left-[108px] bottom-[-15px]'/>
          <h3 className='exo text-[32px] font-semibold leading-[130%] text-[#2F302E]'>Быстрая адаптация новичков</h3>
          <p className='text-base font-normal leading-normal text-[#2F302E]'>Новые сотрудники смогут учиться онлайн в удобное для них время. Обучение доступно 24/7, что позволяет сотрудникам планировать свое время с максимальной эффективностью.
Обучение через платформу QuickOn помогает новичкам быстрее включиться в работу и увеличить эффективность вашей команды.</p>
        </div>
      </div>
    </section>
  )
}
