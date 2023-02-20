import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from 'next/head';

class Template extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Head>
                    <title>Blog Test</title>
                </Head>
                <Header></Header>
                <main>{this.props.children}</main>
                <Footer></Footer>    
            </React.Fragment>
            // <div>{this.props.children}</div>
        );
    }
}

export default Template;