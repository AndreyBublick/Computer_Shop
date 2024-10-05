import React from 'react'
import { SidebarWithMiniWindow } from '../components/SidebarWithMiniWindow/SidebarWithMiniWindow.tsx'
import { CartContents } from '../components/CartContents/CartContents.tsx'
import { Header } from '../components/Header/Header.tsx'
import { Footer } from '../components/Footer/Footer.tsx'





export const Basket = () => {
    return <>
        <Header />

        <main>
            <div className='container'>
                <div className='wrapper'>
                    <SidebarWithMiniWindow>

                        <CartContents />
                        
                    </SidebarWithMiniWindow>



                </div>
            </div>
        </main>

        <Footer />
    </>


}


