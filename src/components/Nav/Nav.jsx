import { Link } from "react-router-dom";

export function Nav({ navList }) {
  return (
    <>
      <nav className="header__menu">
        <ul className="header__nav">
          {navList.map(nav => {
            return (
              <li className="header__item" key={nav.id}>
                <Link className="header__link" to={nav.path}>
                  {nav.title}
                </Link>
              </li>
            )
          })}
        </ul>
        <button className="header__button button button--round button--green">
          <span className="button__text">Записаться</span>
        </button>
      </nav>

      <div className="header__burger">
        <label htmlFor="check">
          <input type="checkbox" id="check" />
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
    </>
  )
}