import { useState, useEffect } from "react"
import axios from 'axios'

export const Home = () => {
    const [url, setUrl] = useState('')
    const [data, setData] = useState([])
    const [key, setKey] = useState('')
    const [host, setHost] = useState('')

    const button = async(event) => {
        event.preventDefault()
        try {
            const response = await axios.get(url, {
                'key': (key),
                'url-host': (host)
            })
            console.log(response.data)
            const result = response.data
            if(!result){
                setData([])
            }else{
            setData([response.data]) 
            }   
        } catch(error){
            console.error('Error fetching data')
            setData([])
        }
    }


    return(
        <>
            <div class='flex flex-col gap-2'>
                <div class='text-center  text-black font-bold text-3xl mt-20 md:mt-25 lg:text-5xl'>
                    <h2>Test your API url here with APItesting</h2>
                </div>
                <div class='flex  text-black justify-center p-2 text-center gap-1 text-2xl md:text-3xl lg:text-4xl'>
                    <p>Kindly enter your URL </p>
                    <div class=' text-black rounded-full text-center p-1'><i class="bi bi-box-arrow-down"></i></div>
                </div>
            </div>

            <div class='pt-4 mb-2 text-center'>
                <div class='grid col-1 gap-2   justify-center '>
                 <input class=' border-2 border-red-700 rounded-3xl p-1.5 text-[0.8rem] md:w-100 md:p-2 lg:p-3 lg:text-[1.2rem]' type="search" name="" id="" value={url} onChange={(e) => setUrl(e.target.value)} placeholder='Enter your url'/>
                <input class=' border-2 border-red-700 rounded-3xl p-1.5 text-[0.8rem] md:w-100 md:p-2 lg:p-3 lg:text-[1.2rem]' type="search" name="" id="" value={key} onChange={(e) => setKey(e.target.value)} placeholder='Enter your key'/>
                <input class=' border-2 border-red-700 rounded-3xl p-1.5 text-[0.8rem] md:w-100 md:p-2 lg:p-3 lg:text-[1.2rem]' type="search" name="" id="" value={host} onChange={(e) => setHost(e.target.value)} placeholder='host name url.com'/>

                </div>
                <button onClick={button} disabled={!url.trim()} class='hover:bg-red-700 duration-700 bg-red-500 w-20 m-2 h-fit p-1 rounded-4xl text-white text-[1rem] md:text-2xl md:w-25 '>Request</button>
            </div>
            
            <div class='flex justify-center text-center w-full snap-x'>
                    <div class='bg-gradient-to-r bg-black via-gray-700 to-red-700 h-120 md:h-200 w-full flex justify-center text-center m-2 text-black'>
                        <div class='overflow-y-auto overflow-x-auto scroll-smooth bg-white h-110 md:h-190 md:w-210 lg:w-[90%] m-2 w-100 '>
                {data.map((item, index) => (
                    <div class=' text-center p-3'  key={index}>
                        <div class='text-[0.7rem] md:text-2xl lg:text-4xl'>{JSON.stringify(item)}</div>
                    </div>
                ))}
                </div>
                </div>               
            </div>
        </>
    )
}