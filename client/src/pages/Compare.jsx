import {useEffect ,useState} from "react"
import {
  FaBath,
  FaBed,
  FaChair,
  FaParking,
  FaMapMarkerAlt,
} from 'react-icons/fa';

export default function Compare() {
  const [showOne, setShowOne] = useState(false);
  const [showTwo, setShowTwo] = useState(false);
  useEffect(()=>{
    handleOptions()
  })
  
  const handleOptions = async () => {
    const res = await fetch('/api/listing/getData')
    const data = await res.json();
    for (let i=0;i<data.length;i++){
      const option = data[i].name
      document.getElementById('select1').innerHTML += `
      <option value='${i}'>${option}</option>
      `
      document.getElementById('select2').innerHTML += `
      <option value='${i}'>${option}</option>
      `
    }
  }

  const showListingOne = async (a) => {
    const res = await fetch('/api/listing/getData')
    const data = await res.json();
    document.getElementById('image1').src = data[a].imageUrls
    document.getElementById('descriptionOne').innerHTML = data[a].description
    setShowOne(true)
    if(data[a].bedrooms>1){
      document.getElementById('bedOne').innerHTML = `${data[a].bedrooms} beds`
    }
    else{
      document.getElementById('bedOne').innerHTML = `${data[a].bedrooms} bed`
    }
    if(data[a].bathrooms>1){
      document.getElementById('bathOne').innerHTML = `${data[a].bathrooms} baths`
    }
    else{
      document.getElementById('bathOne').innerHTML = `${data[a].bathrooms} bath`
    }
    if(data[a].parking){
      document.getElementById('parkingOne').innerHTML = `Parking spot`
    }
    else{
      document.getElementById('parkingOne').innerHTML = `No Parking`
    }
    if(data[a].furnished){
      document.getElementById('furnishedOne').innerHTML = `Furnished`
    }
    else{
      document.getElementById('furnishedOne').innerHTML = `UnFurnished`
    }
    document.getElementById('addressOne').innerHTML = `${data[a].address}`
  }

  const showListingTwo = async (a) => {
    const res = await fetch('/api/listing/getData')
    const data = await res.json();
    document.getElementById('image2').src = data[a].imageUrls
    document.getElementById('descriptionTwo').innerHTML = data[a].description
    setShowTwo(true)
    if(data[a].bedrooms>1){
      document.getElementById('bedTwo').innerHTML = `${data[a].bedrooms} beds`
    }
    else{
      document.getElementById('bedTwo').innerHTML = `${data[a].bedrooms} bed`
    }
    if(data[a].bathrooms>1){
      document.getElementById('bathTwo').innerHTML = `${data[a].bathrooms} baths`
    }
    else{
      document.getElementById('bathTwo').innerHTML = `${data[a].bathrooms} bath`
    }
    if(data[a].parking){
      document.getElementById('parkingTwo').innerHTML = `Parking spot`
    }
    else{
      document.getElementById('parkingTwo').innerHTML = `No Parking`
    }
    if(data[a].furnished){
      document.getElementById('furnishedTwo').innerHTML = `Furnished`
    }
    else{
      document.getElementById('furnishedTwo').innerHTML = `UnFurnished`
    }
    document.getElementById('addressTwo').innerHTML = `${data[a].address}`
  }

  return (
    <div>
        <h1 className='font-bold text-sm sm:text-3xl flex items-center justify-center mt-5'>
            <span className='text-slate-500 mr-2'>Compare</span>
            <span className='text-slate-700'>Listing</span>
        </h1> 

        <div className="flex items-center justify-around mt-20 bg-light">
            <div className="flex items-center mx-auto">
                <span className="font-bold text-2xl text-slate-500">Product</span>
                <span className="font-bold text-2xl text-slate-700 mx-2">Select</span>
                <select className="mx-5" id="select1" onChange={(event) => showListingOne(event.target.value)}>
                        <option value='0'>--- Select Listing ---</option>
                </select>
                <select className="mx-5" id="select2" onChange={(event) => showListingTwo(event.target.value)}>
                        <option value='0'>--- Select Listing ---</option>
                </select>
            </div>
        </div>

        <div className="p-4 grid grid-cols-2 gap-8">
          <img className="rounded-lg" id='image1'src="" alt="" />
          <img className="rounded-lg" id='image2'src="" alt="" />
        </div>

        
        <div className="p-4 grid grid-cols-2 gap-8">
          <div className="flex flex-col justify-center items-center">
            <p id="descriptionOne" className="text-xl"></p>
            <li className='flex items-center mt-5 mb-5 gap-1 whitespace-nowrap '>
             {showOne? <FaMapMarkerAlt className='text-green-700 mx-2' />:''}
            <div id="addressOne" className="text-xl"></div>
            </li>
            <li className='flex items-center gap-1 whitespace-nowrap '>
                {showOne ? <FaBed className='text-lg' />:''}
                <div id='bedOne'></div>
            </li>
            <li className='flex items-center gap-1 whitespace-nowrap '>
                {showOne ? <FaBath className='text-lg' />:''}
                <div id='bathOne'></div>
            </li>
            <li className='flex items-center gap-1 whitespace-nowrap '>
                {showOne ? <FaParking className='text-lg' />:''}
                <div id='parkingOne'></div>
            </li>
            <li className='flex items-center gap-1 whitespace-nowrap '>
                {showOne ? <FaChair className='text-lg' />:''}
                <div id='furnishedOne'></div>
            </li>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p id="descriptionTwo" className="text-xl"></p>
            <li className='flex items-center mt-5 mb-5 gap-1 whitespace-nowrap '>
             {showOne? <FaMapMarkerAlt className='text-green-700 mx-2' />:''}
            <div id="addressTwo" className="text-xl "></div>
            </li>
            <li className='flex items-center gap-1 whitespace-nowrap '>
                {showTwo ? <FaBed className='text-lg' />:''}
                <div id='bedTwo'></div>
            </li>
            <li className='flex items-center gap-1 whitespace-nowrap '>
                {showTwo ? <FaBath className='text-lg' />:''}
                <div id='bathTwo'></div>
            </li>
            <li className='flex items-center gap-1 whitespace-nowrap '>
                {showTwo ? <FaParking className='text-lg' />:''}
                <div id='parkingTwo'></div>
            </li>
            <li className='flex items-center gap-1 whitespace-nowrap '>
                {showTwo ? <FaChair className='text-lg' />:''}
                <div id='furnishedTwo'></div>
            </li>
          </div>
        </div>
    </div>
  )
}
