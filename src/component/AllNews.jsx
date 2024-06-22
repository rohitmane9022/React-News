import { useEffect, useState } from "react"

const AllNews = ({items}) => {
  
  const [favorate,setfavorate]= useState([])

  const handleFavorate=(data)=>{
    setfavorate(pre=> {
      const isFavorate= pre.some(item=> item.id===data.id)
      console.log(isFavorate)
      if(isFavorate){
        return pre.filter(item=> item.id !== data.id)
      }
      else{
        return [...pre,data]
      }
    })
    
  }

  useEffect(()=>{
    localStorage.setItem("Favorate", JSON.stringify(favorate))
  },[favorate])

  const isFavorate = (id) => {
    return favorate.some((item) => item.id === id);
  };
  

  return (
    <main  className="flex flex-wrap items-end" >
    {items?.map(item=>(
      <div key={item.id} className="mt-10 border-2 border-gray-400 rounded-xl mx-auto  overflow-hidden w-96">
      <div>
      {item.urlToImage ? (
          <img src={item.urlToImage} className="w-full h-56" alt={item.title} />
        ) : (
          <div className="w-full h-56 flex items-center justify-center bg-gray-200 text-gray-500">
            No Image Available
          </div>
        )}
      </div>
      <div className="px-4 py-2 gap-3 flex flex-col justify-evenly my-3">
        <div>{item.author?(
          <h2 className=" text-xl font-semibold">{item.author}</h2>
        ):(
          <h2 className=" text-xl font-semibold">{item.name}</h2>
        )}
          </div>
      <div>
        {item.title?(
          <p className="text-base ">{item.title}</p>
        ):(
          <p className="text-base ">{item.description}</p>
        )}
      </div>
     
      <button className="px-4 py-2 bg-blue-500 rounded-md text-white font-semibold ">
      <a className="" href={item.url} target="_black">Read More</a></button>
      <button className="px-4 py-2 bg-blue-500 rounded-md text-white font-semibold" onClick={()=>handleFavorate(item)}>
      <a className="" target="_black">{isFavorate(item.id) ? "Remove Favorite" : "Add Favorite"}</a></button>
      </div>
      </div>
      
    ))}
    </main>
  )
}

export default AllNews