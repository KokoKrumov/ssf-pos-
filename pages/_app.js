import '../styles/bootstrap.min.css'
import '../styles/animate.min.css'
import '../styles/boxicons.min.css'
import '../styles/style.css'
import '../styles/responsive.css'

import React, {useEffect, useState} from 'react'
import Loader from '../components/Shared/Loader'
import GoTop from '../components/Shared/GoTop'
import HeadUtil from "../components/Head/HeadUtil";
import Layout from "../components/Layout/Layout";
import { useRouter } from 'next/router'
import CustomLayout from "../components/Layout/CustomLayout";
import NoHFLayout from "../components/Layout/NoHFLayout";
import CookieConsent from "react-cookie-consent";

const MyApp = ({ Component, pageProps }) => {

    // Preloader
    const [loading, setLoading] = useState(true);
    const router = useRouter();

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

    const renderContent = () => {
        return (
            <>
                <HeadUtil
                    title='Siere POS'
                    description='Pos eco system for everyone.'
                    content='siere, pos, sierepos, saas, пос, Пос, ПОС, поС, Сиере, Сиерепос, СиереПос, Софтуер за заведения, Софтуер заведемия'
                />
                <Component {...pageProps} loading={loading}/>

                {/* Preloader */}
                <Loader loading={loading} />

                {/* Go Top Button */}
                <GoTop scrollStepInPx="100" delayInMs="10.50" /></>
        )
    }

    const renderLayout = () => {
        if(router.pathname !== '/login') {
            return (
                <CustomLayout>
                    {renderContent()}
                </CustomLayout>
            )
        } else {
           return (
               <NoHFLayout>
                   {renderContent()}
               </NoHFLayout>
           )
        }
    }

    return (
        <Layout>
            {renderLayout()}
            <CookieConsent
                buttonText="Приемам"
                style={{
                    background: "#217dbb",
                    alignItems: 'center',
                    justifyContent: 'center'
            }}
                contentStyle={{
                    flex: 'initial'
                }}
                buttonStyle={{ background: "#ff612f", color: "#ffffff", fontSize: "18px" }}
                debug={false}
            >Този сайт използва бизквитки (cookies)</CookieConsent>
        </Layout>

    );
}

export default MyApp;
