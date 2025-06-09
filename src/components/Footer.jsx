import { FaPhoneAlt, FaGlobe, FaEnvelope, FaMapMarkerAlt, FaUserTie } from 'react-icons/fa';
import '../styles/Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <p>
                <FaMapMarkerAlt className="icon" />
                г. Бишкек, ул. Архангельская, д. 205
            </p>
            <p>
                <FaPhoneAlt className="icon" />
                Тел: +996 312 54 55 56
            </p>
            <p>
                <FaGlobe className="icon" />
                Сайт: <a href="http://www.royal.com.kg" target="_blank" rel="noreferrer">www.royal.com.kg</a>
            </p>
            <p>
                <FaEnvelope className="icon" />
                Email: <a href="mailto:royal_stroy@bk.ru">royal_stroy@bk.ru</a>
            </p>
            <p>
                <FaUserTie className="icon" />
                Асанов К.К, генеральный директор
            </p>
        </footer>
    );
}