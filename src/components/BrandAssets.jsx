import React from 'react';
import '../styles/BrandAssets.css';

const assets = [
    {
        label: 'Кепка',
        src: './assets/photo_2025-05-25_14-55-40.jpg',
    },
    {
        label: 'Фасад здания',
        src: './assets/photo_2025-05-25_14-55-37.jpg',
    },
    {
        label: 'Визитка',
        src: './assets/визитка.jpg',
    },
    {
        label: 'Блокнот',
        src: './assets/photo_2025-05-25_14-55-29.jpg',
    },
    {
        label: 'Футболка',
        src: './assets/photo_2025-05-25_14-55-25.jpg',
    },
    {
        label: 'Фирменный бланк',
        src: './assets/бланк.jpg',
    },
    {
        label: 'Логотип',
        src: './assets/photo_2025-05-25_14-55-11.jpg',
    },
    {
        label: 'Конверт',
        src: './assets/конверт.jpg',
    },
    {
        label: 'Кружка',
        src: './assets/photo_2025-05-25_14-54-07.jpg',
    },
];

export default function BrandAssets() {
    return (
        <section className="brand-assets">
            <h2>Фирменные принадлежности</h2>
            <div className="asset-grid">
                {assets.map(({ label, src }, i) => (
                    <div key={i} className="asset-card">
                        <div className="asset-image-wrapper">
                            <img src={src} alt={label} className="asset-image" />
                        </div>
                        <p className="asset-label">{label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
