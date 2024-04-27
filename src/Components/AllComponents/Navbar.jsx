import { useState } from "react"
import Search from "./Search"
import Side from "./Side"

const Navbar = () => {
    const [mode,setMode] = useState(false)
    const [side,setSide] = useState(false)

    const handleMode = () => {
        setMode(!mode)
    }
    console.log(mode)

    const handleSide = () => {
        setSide(!side)
    }
  return (
    <div className=" z-50 top-0 fixed  bg-indigo-400 w-full h-20">
        <div className=" justify-between flex p-5">
            <h1 className=" text-2xl font-bold">NandaAnimeList</h1>

        <div className=" flex space-x-5 md:flex hidden">            
            <Search/>
           <button onClick={handleMode}><img src="night.svg" alt="night" className=" w-7" /></button> 
            <button className=" font-bold text-xl">Login</button>
        </div>
        <button onClick={handleSide} className=" md:hidden flex"><img className=" w-8" src="list.svg" alt="" /></button>    
        </div>

     {
        side && <Side/>
     }
        
    
    </div>
  )
}

export default Navbar
