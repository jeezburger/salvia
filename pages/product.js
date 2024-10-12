import React from 'react';
import Head from 'next/head';
import '/app/globals.css';
import GlareCardDemo from '@/components/product';

const Product = () => {
    return (
        <div>
            <Head>
                <title>Salvia</title>
                <meta name="" content="" />
            </Head>

            <GlareCardDemo />
        </div>
    );
};

export default Product;
