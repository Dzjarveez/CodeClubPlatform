import React from "react";

const Nav = () => {
    return (
      <nav className="nav">
        <div className="nav__link">
          <a href="">Профиль</a>
        </div>
        <div className="nav__link">
          <a href="">Новости</a>
        </div>
        <div className="nav__link">
          <a href="">Сообщения</a>
        </div>
        <div className="nav__link">
          <a href="">Настройки</a>
        </div>
        <div className="nav__link">
          <a href="">Выход</a>
        </div>
      </nav>
    );
}

export default Nav;