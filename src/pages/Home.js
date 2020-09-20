import React from 'react'
import Banner from '../components/Banner'
import Hero from '../components/Hero'
import { Link } from "react-router-dom"
export default function Home() {
    return (
        <Hero>
            <Banner title="luxurious rooms"
                subtitle="deluxe room starting at $299"
            >
                <Link to="/rooms" className="btn-primary">
                    our rooms
                </Link>
            </Banner>
        </Hero>
    )
}
