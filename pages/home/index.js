import React from 'react';
import MainBanner from '../../components/DigitalMarketing/MainBanner';
import Features from '../../components/Features/Features';
import CompanyIntroVideo from '../../components/DigitalMarketing/CompanyIntroVideo';
import FeaturedService from "../../components/Features/FeaturedService";
import Subscribe from "../../components/Common/Subscribe";
import ServiceLeftImageStyle from "../../components/Features/ServiceLeftImageStyle";
import ServiceRightImageStyle from "../../components/Features/ServiceRightImageStyle";

const HomeView = () => {

    const ecosystemContent = [
        {
            id: '1',
            title: 'ПОС',
            image: '/images/siere/siere_pos_home_page.jpg',
            link: '/',
            bullets: [
                {
                    id: '1',
                    text: 'Създавайте поръчки и ги изпращайте автоматично към кухнята директно от вашият Андроид Таблет.'
                },
                {
                    id: '2',
                    text: 'Разделяйте сметки по тип плащане и продукти. Давайте възможност на вашите клиенти да избират как и кога да плащат.'
                },
                {
                    id: '3',
                    text: 'Лесно персонализирайте вида на поръчките, чрез различните видове поръчки.'
                },
                {
                    id: '4',
                    text: 'Сменяйте лесно и сигурно потребителят изполващ ПОС устройството, за постигане на по -добра проследимост на персонала, чрез уникалнен потребителски идентификатор.'
                },
            ]
        },
        {
            id: '2',
            title: 'Кухня / Бар / Сервитьор',
            image: '/images/siere/siere_all.jpg',
            link: '/',
            bullets: [
                {
                    id: '1',
                    text: 'Прозрачна и мигновенна комуникация между отделните подразделения на вашата локация.'
                },
                {
                    id: '2',
                    text: 'Вашият сервитьори винаги ще имат реалната информация за менюто с което разполагате.'
                },
                {
                    id: '3',
                    text: 'Поръчките са подредени за да бъдат обработени максимално бързо.'
                },
                {
                    id: '4',
                    text: 'Подобрява времето необходимо за обработване на един клиент, като улеснява работата на вашите служители.'
                },
            ]
        },
        {
            id: '3',
            title: 'Менажирайте от всякъде своята облачно базирана ПОС система',
            image: '/images/siere/Admin_Analytics.png',
            link: '/',
            description: 'Независимо дали сте у дома, на път или в офиса, Сиере ПОС Ви помага да менажирате целият си бизнес.',
            bullets: [
                {
                    id: '1',
                    text: 'Менажирайте ресторанта си от всякъде с облачно базираната Сиере ПОС система. Отваряйте нови локации на вашият бизнес с една лесно скалираща система.'
                },
                {
                    id: '2',
                    text: 'Открийте лесно, специализирани анализи за поведението на всяка една ваша локация.'
                },
                {
                    id: '3',
                    text: 'Сменяйтe лесно и сигурно потребителят изполващ ПОС устройството, за постигане на по -добра проследимост на персонала, чрез уникалнен потребителски идентификатор.'
                },
            ]
        },
    ]

    return (
        <>
            <MainBanner/>
            <Features/>
            {/*<section className="services-area bg-f4f6fc ptb-100">*/}
            {/*    <div className="container">*/}
            {/*        <div className="section-title">*/}
            {/*            <h2 className="mb-2">*/}
            {/*                Екосистема. Обединяваме целия ви бизнес*/}
            {/*            </h2>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    {ecosystemContent.map(item => {*/}
            {/*        return item.id % 2 !== 0*/}
            {/*            ? <ServiceLeftImageStyle key={item.id} content={item}/>*/}
            {/*            : <ServiceRightImageStyle key={item.id} content={item}/>*/}
            {/*    })}*/}
            {/*</section>*/}
            <FeaturedService/>
            <CompanyIntroVideo/>
            <Subscribe
                title={'Готови ли сте да оптимизирате процеса на управление на вашия бизнес?'}
                subtitle={'Попълнете кратката форма за връзка и ние ще се свържим с вас в първия удобен момент.'}
            />
        </>
    );
}

export default HomeView;
