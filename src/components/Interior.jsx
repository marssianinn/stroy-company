import React from 'react';
import '../styles/Interior.css';

const sections = [
    {
        title: 'Зал для ожидания',
        text: 'В комнате для ожиданий обустроено все для клиентов. В ней есть, что нужно: диван с удобными подушками, аквариум для стрессопереносимости, также есть решетка ввиде орнамента листвы, было применено для большей передачи стиль природы – бионики. Между переговорной и залом ожиданием установлено перегородка для визуального деления зон, так как в левой части зала для ожидания находится отдельная переговорная комната. На стене креплен картина с морскими примесями, со светодиодными лампами, и растения которая стала неотъемлемой частью того же стиля. Еще, важным преимуществом является большие окна в левой части помещения, это визуально делает зал большим и просторным, флора дает ощущения присутствии природы, что очень важно для современного человека, так как этот участок здания находится в центре Бишкека и мало флоры рядом со зданием.',
        image: 'assets/img/interior3.jpg' // например: изображение ожидания
    },
    {
        title: 'Кафетерий для сотрудников',
        text: 'В кафетерии установлены диваны, настенная платформа с металлическими элементами, с разными масштабными прямоугольниками с декоративными растениями. Кафетерий находится рядом с лестницей на 2-ой этаж, и с холлом который ведет к ресепшн. Обустроен так, чтобы сотрудникам данной компании было уютно. Кафетерий не только играет роль как местом для питания, но и служит для работы в удобной им обстановке. Цвета были выбраны нейтральные. Детально, более холодные цвета преобладают в этой части интерьера.',
        image: 'assets/img/interior2.jpg' // image: '/img/cafeteria.jpg'
    },
    {
        title: 'Главный холл',
        text: 'Главный холл. В этой части здания объединяются: Отдел продаж, Отдел маркетинга, Бухгалтерия, Конференц-зал, Переговорный большой, Переговорный малый. Открытые белые и красные цвета преобладают, потому что логотип компании основан на этих цветах, и было решено, что эти цвета будут ключевыми. Все оконные вставки исполнены большими, от пола до потолка, рамки в цвете красный, и снаружи, и внутри каждого отделения. Исключением только служит бухгалтерия. Пол выполнен из отражающего, глянцевого камня.',
        image: 'assets/img/interior7.jpg' // image: '/img/main-hall.jpg'
    },
    {
        title: 'Переговорный',
        text: 'Это помещение устроен для переговоров между клиентом и компанией, также между партнерами. Для получения информации в размере 100, имеются все необходимые условия и техника: маркерная доска, проектор, HD дисплей телевизор и при необходимости ноутбук. Круглый стол сделан из кленового дерева, с красными гранями, что делает интерьер динамичным. Также этот дизайн придуман исходя из стиля бионика (круглые изгибы, натуральные материалы, невесомость предметов).',
        image: 'assets/img/interior1.jpg' // image: '/img/meeting.jpg'
    },
    {
        title: 'Lounge zone',
        text: 'Лаундж зона является местом, неким уютом, где человек может получить ощущения покоя, даже в рабочее время. В наше дни, все индустриальные страны перешли на новый уровень, на новый стэп, где разрушаются стереотипы: «как должен вести себя сотрудник в рабочее время». В этих передовых странах, также имеют место быть респит эрия и зона для неформального общения.',
        image: 'assets/img/interior6.jpg' // image: '/img/lounge.jpg'
    },
    {
        title: 'Общий вид офиса',
        text: 'Визуализация офисного пространства с разделением рабочих зон, мебели и конструктивных элементов в Archicad. Показана продуманная планировка и взаимодействие отделов внутри общего холла.',
        image: 'assets/img/interior5.jpg' // image: '/img/overview.jpg'
    }
];


export default function Interior() {
    return (
        <main className="interior-page">
            <h1>Дизайн интерьеров и пространства компании</h1>
            {sections.map((section, index) => (
                <div className="interior-section" key={index}>
                    <img src={section.image} alt={section.title} className="interior-image" />
                    <div className="interior-text">
                        <h2>{section.title}</h2>
                        <p>{section.text}</p>
                    </div>
                </div>
            ))}
        </main>
    );
}