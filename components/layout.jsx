import { useState, useEffect } from "react"
import 'bootstrap-icons/font/bootstrap-icons.css'
import {motion, AnimatePresence} from 'framer-motion'
export const Layout = () => {
    const [menu, setMenu] = useState(true)
    const menubar = () => {
        setMenu(!menu)
    }
    return(
        <>
        <div>
            <header class='relative z-10 bg-gradient-to-r from-red-700 to-black h-fit'>
                <nav class='flex justify-between p-6 sm:text-[0.8rem] md:text-2xl lg:text-4xl text-center'>
                    <h3 class='text-white font-bold'>API<span class='text-green-700 '>testing</span></h3>
                    <ul class='flex text-white gap-x-10'>
                        <li class='hidden md:flex lg:flex'>About</li>
                        <li class='hidden md:flex lg:flex'>Support</li>
                        <li class='hidden md:flex lg:flex'>Contact</li>
                    </ul>
                    <div>
                        <div class='text-white text-2xl md:text-4xl md:hidden lg:hidden lg:text-5xl' onClick={menubar}>
                            {menu ? <i class="bi bi-list"></i> : <i class="bi bi-x-lg"></i>}
                        </div>
                    </div>
                </nav>
            </header>
            <div class='md:hidden lg:hidden w-full'>
                    <AnimatePresence>
                    {menu ? (
                     ''
                    ) : (
                           <motion.div
                           initial={{
                            y: 0,
                            zIndex:0,
                           }}
                           animate={{
                            y: [-500, 0],
                            zIndex:0,
                           }}
                           exit={{
                            y: [0, -500],
                            zIndex:0,
                           }}
                           transition={{
                            duration: 1,
                           }}
                           class='bg-red-500 h-fit w-full absolute ' >
                        <ul class='flex flex-col items-center gap-10 p-5  text-white'>
                            <div class='hover:bg-black w-full text-center cursor-pointer'>
                                <li class='p-1 md:hidden lg:hidden'>About</li>
                            </div >
                            <div class='hover:bg-black w-full text-center cursor-pointer'>
                                <li class='p-1 md:hidden lg:hidden'>Support</li>
                            </div >
                            <div class='hover:bg-black w-full text-center cursor-pointer'>
                                <li class='p-1 md:hidden lg:hidden'>Contact</li>
                            </div>                    </ul>
                    </motion.div>
                    )}
                    </AnimatePresence>   
                </div>
        </div>
        </>
    )
}