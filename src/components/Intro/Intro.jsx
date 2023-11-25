import person from '../../assets/images/person-wave.png';

export function Intro() {
  return (
  <div className="intro">
    <div className="intro__image">
      <img src={person} alt="Фото Александры" />
    </div>
    <div className="intro__heading">
      <div className="title title--hero-2">Врач-косметолог<br/>Александра Баранова</div>
      <div className="intro__description">
        <p>
          Подчеркну вашу естественную красоту инъекционными процедурами и составлю индивидуальный план по уходу за кожей.
        </p>
      </div>
      <div className="intro__action">
        <button type="button" className="button">Записаться</button>
        <button type="button" className="button button--transparent">Проверить запись</button>
      </div>
    </div>
  </div>
  )
}