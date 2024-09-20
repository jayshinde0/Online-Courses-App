import logo from './logo.svg';
import './App.css';
import Navbar from "./component/Navbar"
import Filter from "./component/Filter"
import Cards from "./component/Cards"
import { apiUrl, filterData } from './data';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { FaTemperatureArrowDown } from 'react-icons/fa6';
import Spinner from './component/Spinner';
function App() {
  const [courses, setCourses] = useState(null);
  const [loading, setloading] = useState(true);
  const [category, setcategory] = useState(filterData[0].title);
  async function fetechData() {
    setloading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      //output ->
      setCourses(output.data);
    }
    catch (error) {
      toast.error("Network problem")
    }
    setloading(false);
  }
  useEffect(() => {
    fetechData();
  }, [])
  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <div>
        <Navbar></Navbar>
      </div>
      <div className="bg-bgDark2">
        <Filter
         category={category} setcategory={setcategory}
          filterData={filterData}></Filter>
      </div>
      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {
          loading ? (<Spinner></Spinner>) : (<Cards courses={courses}  category={category}></Cards>)
        }
      </div>
    </div>
  );
}
export default App;
