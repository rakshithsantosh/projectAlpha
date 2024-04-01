import {useEffect } from "react"

export default function Compare() {
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
    for (let i=0;i<data.length;i++){
      document.getElementById('image1').src = data[a].imageUrls
    }
  }

  const showListingTwo = async (a) => {
    const res = await fetch('/api/listing/getData')
    const data = await res.json();
    for (let i=0;i<data.length;i++){
      document.getElementById('image2').src = data[a].imageUrls
    }
  }

  return (
    <div>
        <h1 className='font-bold text-sm sm:text-3xl flex items-center justify-center mt-5'>
            <span className='text-slate-500 mr-2'>Compare</span>
            <span className='text-slate-700'>Listing</span>
        </h1> 

        <div className="flex items-center justify-around mt-20 bg-light">
            <div className="flex items-center mx-auto">
                <span className="font bold text-2xl text-slate-500">Product</span>
                <span className="font bold text-2xl text-slate-700 mx-2">Select</span>
                <select className="mx-5" id="select1" onChange={(event) => showListingOne(event.target.value)}>
                        <option value='0'>--- Select Listing ---</option>
                </select>
                <select className="mx-5" id="select2" onChange={(event) => showListingTwo(event.target.value)}>
                        <option value='0'>--- Select Listing ---</option>
                </select>
            </div>
        </div>

        <div className="p-4 grid grid-cols-2 gap-8">
          <img className="" id='image1'src="" alt="" />
          <img className="" id='image2'src="" alt="" />
        </div>
    </div>
  )
}
