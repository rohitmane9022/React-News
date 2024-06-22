import { useState } from "react"
import { useDispatch } from "react-redux"
import { fetchCategoryData, fetchNewsData } from '../Reducer/NeswapiSlice'

const Header = () => {
  const dispatch = useDispatch()
  const [filterValue, setFilterValue] = useState("All")

  const handleFilterChange = (event) => {
    const value = event.target.value
    setFilterValue(value)
    

    if (value === "All") {
      dispatch(fetchNewsData())
    } else {
      dispatch(fetchCategoryData(value))
    }
  }

  return (
    <header className="flex justify-between mt-10">
      <div>
        <h2 className="text-2xl font-semibold">News by Rohit</h2>
      </div>
      {/* <div>
        <input type="text" placeholder="Search" className="text-xl border-2 border-gray-400 p-2 rounded-md" />
      </div> */}
      <div className="flex items-center gap-2">
        <p>Filter by</p>
        <select className="bg-white border-2 border-black" value={filterValue} onChange={handleFilterChange}>
          <option value="All">All</option>
          <option value="business">Business</option>
          <option value="technology">Technology</option>
          <option value="entertainment">Entertainment</option>
        </select>
      </div>
    </header>
  )
}

export default Header
