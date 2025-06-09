import '../styles/Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="header">
            <div className="header-content">
                <h1>Строительная компания «Royal»</h1>
                <nav className="header-nav">
                    <Link to="/">Главная</Link>
                    <Link to="/interior">Интерьеры</Link>
                </nav>
            </div>
        </header>
    );
}
