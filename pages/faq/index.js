import React from 'react';
import PageTitleArea from "../../components/Common/PageTitleArea";
import FaqAccordion from "../../components/Faq/FaqAccordion";
import Subscribe from "../../components/Common/Subscribe";

const FaqView = () => {

    const faqContent = [
        {
            id: '1',
            title: 'Кой може да използва Сиере ПОС?',
            text: 'За ресторанти, дискотеки, барове, кафенета.',
        },
        {
            id: '2',
            title: 'Как мога да запозчна да използвам Сиере ПОС?',
            text: '1. Попълнете регистрационната форма на Сиере ПОС.</br>2. Свалете POS приложението от Google Play.</br>3. Влезте в приложонието и следвайте инструкциите там',
        },
        {
            id: '3',
            title: 'Колко ще ми струва Сиере ПОС?',
            text: 'Можете да започнете с базовата ни ПОС услуга за 1лв/ден, без инсталационни такси. Сиере ПОС може да бъде използван от малки и големи заведения, като вие плащате само за онези услуги, които използвате. След това в зависимост от вашите нужди може да добавяте или спирате някой от нашите многобройни допълни услуги.',
        },
        {
            id: '4',
            title: 'Колко трудно ще ми е да се науча да използвам Сиере ПОС?',
            text: 'Няколко минути, наистина. Всички услуги на Сиере ПОС са направени да бъдат използвани лесно и интуитивно.',
        },
        {
            id: '5',
            title: 'Какво да правя ако имам въпроси за Сиере ПОС?',
            text: 'Винаги може да пишете на нашият съпорт на <a href="mailto:support@sierepos.com">support@sierepos.com</a>.',
        },
    ]

    return (
        <>
            <section>
                <PageTitleArea
                    pageTitle="Често задавани въпроси"
                />
            </section>
            <section>
                <FaqAccordion
                    faqContent={faqContent}
                />
            </section>
            <section>
                <Subscribe
                    title={'Винаги се опитваме да бъдем възможно най-добрата подкрепа за вашия бизнес'}
                    subtitle={'Попълнете кратката форма за връзка и ние ще се свържим с вас в първия удобен момент.'}
                />
            </section>
        </>
    );
}

export default FaqView;
