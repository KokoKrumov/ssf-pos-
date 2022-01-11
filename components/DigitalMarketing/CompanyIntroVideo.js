import React from 'react'

const CompanyIntroVideo = () => {

    const options = [
        {
            icon: 'bx bxs-badge-check',
            title: 'Обработване на поръчки',
            text:'Възможност за единични или общи отстъпки.'
        },
        {
            icon: 'bx bxs-badge-check',
            title: 'Меню',
            text:'Виртуално меню което се ъпдейтва в реално време.'
        },
        {
            icon: 'bx bxs-badge-check',
            title: 'Безжична комуникация',
            text:'Няма нужда от плетеница от кабели, всички устройства комуникират безжично.'
        },
        {
            icon: 'bx bxs-badge-check',
            title: 'Управление работният ден.',
            text: 'Отваряне и затваряне на смяна. Служебни суми. Статистика за текущата смяна.'
        },
        {
            icon: 'bx bxs-badge-check',
            title: 'Складова наличност',
            text: 'Количество на продуктите. Промяна на складовите наличности в реално време.'
        },
        {
            icon: 'bx bxs-badge-check',
            title: 'Статистики',
            text: 'Информация за поведението на вашето заведение, представена в удобен и приятен за използване вид.'
        },
    ]

    return (
        <>
            <div className="company-preview-area__siere">
                <div className="container">
                    <div className="row justify-content-between">
                        {options.map((option, index) => {
                            const {icon, title, text} = option;
                            return (
                                <div key={index} className="col-sm-6 company-preview-area__siere__card-wrap">
                                    <div className="company-preview-area__card">
                                        <h3
                                            className="company-preview-area__card-title">
                                            <i className={icon}></i>
                                            <span  className='company-preview-area__card-title__text'>
                                                {title}
                                            </span>
                                        </h3>
                                        <p className={'company-preview-area__card-text'}>
                                            {text}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CompanyIntroVideo
