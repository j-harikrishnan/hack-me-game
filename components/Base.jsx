import React from 'react';
import Head from "next/head";

import '../styles/style.css';

const seoTags = {
    "siteName": "HACK ME SecCon 2020 Cyber Awareness Game",
    "tagLine": "A cyber awareness game for SecCon 2020",
    "description": "HACK ME is a simple game of choices. The security of your home and office are in your hands, every small mistake has a big impact. This game helps you learn about the various attack vectors hackers use to exploit your day to day use devices and how you can protect against these attacks proactively."
};

const Base = ({ children, meta }) => {

    const title = `${meta && meta.title ? `${meta.title} |` : '' } ${seoTags.siteName} - ${seoTags.tagLine}`;
    const GoogleAnalyticsID = 'UA-180545520-1';

    return <React.Fragment>
        <Head>
            <title>{title}</title>
            <meta charSet='utf-8'/>
            <meta name='theme-color' content='#4A148C' />
            <meta httpEquiv='X-UA-Compatible' content='IE=edge'/>
            <meta name="description" content={meta && meta.description ? meta.description : seoTags.description} />
            <meta name="twitter:title" content={title} />
            <meta property="og:title" content={title} />
            {   meta && meta.image && <meta property="og:image" content={meta.image} /> }
            <meta name="viewport" content="width=device-width, minimum-scale=1, shrink-to-fit=no, initial-scale=1, user-scalable=no" />
            <link rel="stylesheet"
                  href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
                  integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
                  crossOrigin="anonymous"
            />
            <link rel="manifest" href="/manifest.json" />
            <link href='/images/icons/icon-32x32.png' rel='icon' type='image/png' sizes='16x16' />
            <link href='/images/icons/icon-32x32.png' rel='icon' type='image/png' sizes='32x32' />
            <link rel='apple-touch-icon' href='/images/icons/icon-512x512.png' />
            <script src="//twemoji.maxcdn.com/twemoji.min.js"></script>
            {   GoogleAnalyticsID &&
            <React.Fragment>
                <script async src={`https://www.googletagmanager.com/gtag/js?id=${GoogleAnalyticsID}`} />
                <script dangerouslySetInnerHTML={{
                    __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${GoogleAnalyticsID}');`
                }} />
            </React.Fragment>
            }
        </Head>
        <div className="app">
            <div>{children}</div>
        </div>
    </React.Fragment>
};

export default Base;