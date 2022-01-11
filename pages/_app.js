import '../styles/bootstrap.min.css'
import '../styles/animate.min.css'
import '../styles/boxicons.min.css'
// import 'react-accessible-accordion/dist/fancy-example.css'
// import '../node_modules/react-modal-video/css/modal-video.min.css'
import '../styles/style.css'
import '../styles/responsive.css'

import React, {useEffect, useState} from 'react'
import App from 'next/app'
import { useRouter } from 'next/router'
import Loader from '../components/Shared/Loader'
import GoTop from '../components/Shared/GoTop'
import HeadUtil from "../components/Head/HeadUtil";
import Layout from "../components/Layout/Layout";

const MyApp = ({ Component, pageProps }) => {

    // Preloader
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        let timerHandle = setTimeout(() =>
            setLoading(false), 2000
        );
        return function cleanup() {
            if (timerHandle) {
                clearTimeout(timerHandle);
                timerHandle = 0;
            }
        };
    })

    return (
        <Layout>
            <HeadUtil
                title='Siere POS'
                description='Pos eco system for everyone.'
                content='siere, pos, sierepos, saas, пос, Пос, ПОС, поС, Сиере, Сиерепос, СиереПос, Софтуер за заведения, Софтуер заведемия'
            />
            <Component {...pageProps}  loading={loading}/>

            {/* Preloader */}
            <Loader loading={loading} />

            {/* Go Top Button */}
            <GoTop scrollStepInPx="100" delayInMs="10.50" />

        </Layout>
    );
}

export default MyApp;
