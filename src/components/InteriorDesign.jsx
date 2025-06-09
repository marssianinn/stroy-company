import '../styles/InteriorDesign.css';


export default function InteriorDesign() {

    const img1 = "./assets/photo_2025-05-25_14-55-37.jpg"
    return (
        <section className="interior">
            <h2>Дизайн интерьера</h2>
            <p>
                Компания «Poyal» уделяет особое внимание внутреннему оформлению своих объектов. Интерьеры разрабатываются с учётом эргономики, современного дизайна и индивидуальных предпочтений клиента.
            </p>
            <div className="interior-image-wrapper">
                <img
                    src={img1}
                    alt="Дизайн интерьера здания Royal"
                />
            </div>
        </section>
    );
}
