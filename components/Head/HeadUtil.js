import React from 'react';
import Head from 'next/head'

const HeadUtil = ({title, description, content}) => {

    return (
        <Head>
            {
                title &&
                    <title>
                        {title}
                    </title>
            }
            {
                description &&
                    <meta
                        name='description'
                        content={description}
                    />
            }
            {
                content &&
                    <meta
                        name='description'
                        content={content}
                    />
            }
            <meta name="owner" content="SiereSoft"/>
            <meta name="author" content="SiereSoft"/>
            <meta name="rating" content="general"/>
            <meta name="audience" content="all"/>
            <meta name="robots" content="index, follow"/>
        </Head>
    );
}

export default HeadUtil;
