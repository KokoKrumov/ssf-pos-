import React, { Component } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';
import Image from 'next/image'

const FaqAccordion = ({faqContent}) => {
    return (
        <section className="faq-area ptb-100 bg-color-f4f5fe">
            <div className="container-fluid">
                <div className={'row text-center mb-80'}>
                    <h2>Запознайте се със <span>Siere POS</span></h2>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="faq-accordion">
                            <Accordion allowZeroExpanded preExpanded={['1']}>
                                {faqContent.map(item => {
                                    const {id, title, text} = item
                                    return (
                                        <AccordionItem uuid={id} key={id}>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    <i className='bx bx-chevron-right'></i>
                                                    <span dangerouslySetInnerHTML={{__html: title}}/>
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p dangerouslySetInnerHTML={{__html: text}} />
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    )
                                })}

                            </Accordion>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="faq-image">
                            <Image
                                src="/images/siere-pos/happy-customer.jpg"
                                width="1920"
                                height="1280"
                                priority={true}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FaqAccordion;
