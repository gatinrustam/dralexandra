import './Header.scss';
import { Link } from "react-router-dom";
import { Nav } from "../Nav/Nav";

const navList = [
  {
    id: 1,
    path: 'about',
    title: 'Обо мне',
  },
  {
    id: 2,
    path: 'price',
    title: 'Услуги',
  },
  {
    id: 3,
    path: 'contact',
    title: 'Контакты',
  },
]

export function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <Link className="header__logo" to="/">
          dr. alexandra
        </Link>

        <Nav navList={navList} />
      </div>
    </header>
  );
}
