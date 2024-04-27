import axios from "axios"
import { useEffect, useState } from "react"

const RekomendasiAnime = () => {
    const [anime,setAnime] = useState([])
    const animeApi = import.meta.env.VITE_APP_ANIME_API

    useEffect(() => {
        axios.get(`${animeApi}/anime`)
        .then(res => {
            setAnime(res.data.data)
        }) 
        .catch((err) => {
            console.log(err)
        })
    },[])
  return (
    <div>
        <h1>Rekomendasi Anime 😽</h1>
        {
            anime.map((items) => (
                <div key={items.mal_id}>
                    <img src={items.images.jpg.image_url} alt="" />
                </div>
            ))
        }
      
    </div>
  )
}

export default RekomendasiAnime
