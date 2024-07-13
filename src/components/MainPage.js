import React from 'react'
import Navbar from './Navbar'
import FirstPage from './FirstPage'
import SecondPage from './SecondPage'
import ThirdPage from './ThirdPage'
import FourthPage from './FourthPage'
import FifthPage from './FifthPage'
import Footer from './Footer'
import CardPage from './CardPage'

export default function MainPage() {
    return (
        <>
            <Navbar />
            <FirstPage />
            <CardPage/>
            <SecondPage />
            <ThirdPage />
            <FourthPage />
            <FifthPage />
            <Footer />
        </>
    )
}
