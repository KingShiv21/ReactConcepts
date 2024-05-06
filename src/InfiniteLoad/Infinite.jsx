import React, { useEffect } from 'react'
import { useState } from 'react'
import Loading from './Loading'

const Infinite = () => {

    const [memes, setMemes] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const callApi = async () => {

        try {
            setIsLoading(true)
            const data = await fetch("https://meme-api.com/gimme/20")
            const res = await data.json()
            setIsLoading(false)
            setMemes((datas) => [...datas, ...res.memes])
        } catch (error) {
            console.log(error);
        }

    }


    const handleScroll = () => {
        if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
            callApi()
        }
    }

    useEffect(() => {
        callApi()
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll")
    }, [])


    return (
        <div>
memes
            {
                memes?.map((res) => {
                    return(
                        <>
                        <h3>{res.title}</h3>
                        <h6 style={{marginBottom:"2rem"}}>{res.author}</h6>
                        
                        </>
                    )
                })
            }
            {isLoading && <Loading />}
        </div>
    )
}

export default Infinite
