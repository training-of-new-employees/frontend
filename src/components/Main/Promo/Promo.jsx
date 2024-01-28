import { paths } from "../../../utils/constants"
import cards from '../../../images/Landing/cards.png'


export default function Promo() {
  return (
    <section className="flex pl-[140px] pt-[65px] pb-[92px] bg-[#2F302E] rounded-b-[200px] gap-[80px]">
      <div className="flex flex-col gap-[28px] max-w-[512px] pt-[35px] pb-[40px]">
        <h1 className="exo text-[54px] text-white leading-[120%] font-medium max-w-[512px]">Онлайн обучение новых сотрудников </h1>
        <p className="text-xl text-white leading-normal font-normal max-w-[430px]">Создайте систему онбординга и обучения для сотрудников вашей компании</p>
        <a href={paths.registration} className="py-[14px] rounded-xl bg-[#53772F] max-w-[260px] text-center text-white leading-normal font-normal text-base">Попробовать бесплатно</a>
      </div>
      <div className="relative w-[580px]">
        <img src={cards} alt="карточки" className="w-[591px]"/>
      </div>
    </section>
  )
}
