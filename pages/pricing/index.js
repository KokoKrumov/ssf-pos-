import React, {Component} from 'react';
import PageTitleArea from "../../components/Common/PageTitleArea";
import PricingContent from "../../components/Pricing/PricingContent";
import Subscribe from "../../components/Common/Subscribe";

const PricingView = () => {

    const priceContent = [
        {
            id: '1',
            name: 'Стандартен',
            subtitle: 'Подходящ за по-малки обекти',
            price: '1',
            link: '/',
            bullets: [
                {
                    id: '1',
                    text: 'Маркиране'
                },
                {
                    id: '2',
                    text: 'Складова наличност'
                },
                {
                    id: '3',
                    text: 'Административен панел - базов'
                },
                {
                    id: '4',
                    text: 'Засичане на каса'
                },
                {
                    id: '5',
                    text: 'Издаване на касови бележки'
                },
            ]
        },
        {
            id: '2',
            name: 'Динамичен',
            subtitle: 'Подходящ за за по-големи обекти, работещи целогодишно.',
            price: 'от 3',
            link: '/',
            bullets: [
                {
                    id: '1',
                    text: 'ПОС Система'
                },
                {
                    id: '2',
                    text: 'Административен панел'
                },
                {
                    id: '3',
                    text: 'Сервитьорско приложение'
                },
                {
                    id: '4',
                    text: 'Приложение кухня'
                },
                {
                    id: '5',
                    text: 'Приложение бар'
                },
                {
                    id: '6',
                    text: 'Разширена информация за локация'
                },
                {
                    id: '7',
                    text: 'Анализи'
                },
                {
                    id: '8',
                    text: 'Допълнително облачно пространство'
                },
                {
                    id: '9',
                    text: 'Изработка на меню'
                },
                {
                    id: '10',
                    text: 'Виртуално меню'
                },
                {
                    id: '11',
                    text: 'Складова наличност'
                },
                {
                    id: '12',
                    text: 'Засичане на каса'
                },
            ]
        },
    ]

    return (
        <>
            <section>
                <PageTitleArea
                    pageTitle="Цени"
                    pageDescription="Започнете с 1лв на ден."
                />
            </section>
            <section>
                <PricingContent
                    title={'Изберете ценови план'}
                    priceContent={priceContent}/>
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

export default PricingView;
