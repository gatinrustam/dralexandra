import './Promotion.scss';
import klapp from '../../assets/images/klapp-transparent.png';

export function Promotion() {
  return (
    <div className="promotion">
      <div className="promotion__heading">
        <div className="promotion__title title title--hero-3">Тут будут акции</div>
        <div className="promotion__description">
          <p>Проверенные продукты, с которыми я работаю и рекоменую пациентам</p>
        </div>
        <button type="button" className="button button--blue">Посмотреть</button>
      </div>
      
      <div className="promotion__content">
        <img src={klapp} className="promotion__image"/>
      </div>
    </div>
  )
}