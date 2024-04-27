import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Test = () => {
    const [populer,setPopuler] = useState([])
    const [error,setError] = useState("")
    const populerApi = import.meta.env.VITE_APP_ANIME_API
    useEffect(() => {
        axios.get(`${populerApi}/top/anime`)
        .then(res => {
            setPopuler(res.data.data)
        }) 
        .catch((err) => {
            setError("Data anime gagal di ambil" + err)
        })
    },[])

    console.log(error)
  return (
    <div className=" mt-32 p-5 space-y-10">
     <div className=" flex justify-between">
        <h1 className="text-4xl text-white font-bold">Popular Anime 🔥</h1>
        |<Link to="/listAnime"><h1 className="text-xl text-white font-bold underline">Lihat Semua</h1></Link>
        </div>   
      <div className=" grid justify-center items-center">        
     <div  className=" grid md:gap-10 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
    {
        populer.length == 0 ? (
              <h1 className=" text-white text-5xl font-bold">Loading...</h1>

        ) : (
            populer.slice(0,8).map((items) => (
                <div key={items.mal_id} className=" text-white space-y-3" >
                    <img src={items.images.jpg.image_url} alt="anime" className=" hover:scale-105 transform duration-200 rounded-lg h-96 w-80 lg:h-64 lg:w-60" />
                <div className=" space-y-2">                    
                    <p className=" text-xl  lg:text-sm ">{items.title}</p>
                    <p className=" text-xl  lg:text-sm ">Total Episodes {items.episodes}</p>
                    <p className=" text-xl  lg:text-sm ">Type : {items.type}</p>
                </div>    
                </div>
            ))
        )
        }
        </div>  
        
      </div>   
        </div> 
  )
}

export default Test
