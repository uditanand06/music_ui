import Light2 from './light2'
import Light from './lights'
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FidgetSpinner } from 'react-loader-spinner'

const Section2 = () => {
  const [loading,setLoading] = useState(false);
  const { register, handleSubmit } = useForm();
  const [genre,setGenre] = useState("none");

  useEffect(() => {  },[loading]);

  const onSubmit = async (data) => {
    setLoading(true)
    const formData = new FormData();
    formData.append("audioFile", data.file[0]);
    console.log(formData)

    const res = await fetch("http://localhost:3000/api/test", {
        method: "POST",
        body: formData,
    }).then((res) =>{res.json();setGenre(res.genre); } );
    setLoading(false);
  };


  return (
    <>
      {
        loading?
        <>
            <div className=" grid justify-center items-center h-screen w-screen">
                <FidgetSpinner
                    visible={true}
                    height="150"
                    width="150"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper"
                    ballColors={['#ff0000', '#00ff00', '#0000ff']}
                    backgroundColor="#db2777"
                />
            </div>
        
        </> :
        <section className='pt-[110px] space-y-[44px] relative'>
          <div className='absolute top-[20%]  left-0'><Light2/></div>
          <div className='bg-[rgba(217,217,217,0.08)] font-normal text-[48px] rounded-[50px] w-1/2 text-center py-4'>Classifying <span className='text-primary'>Music</span> Just Got <span className='text-primary'>Easier!</span></div>
          <div className='font-light text-[32px] text-[#eee] ml-12'>Just drop your music file here and we will tell you the genre</div>
          <div className='h-[200px] w-[663px] rounded-[24px] bg-[rgba(217,217,217,0.22)] mx-auto py-4 center'>
              <div>
                  <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-between items-center space-y-5">
                      <input className="input shadow-md  border-pink-500 px-4 py-2 rounded-2xl border-2 text-lg text-center bg-gradient-to-r from-fuchsia-600 to-pink-600 text-transparent bg-clip-text" type="file" {...register("file")} />
                      <button className='blueBtn mx-auto  w-[226px] h-[55px] font-medium text-[20px] active:shadow-md transtion'>Analyze</button>
                      <input type="submit" className="hidden"/>
                  </form>
              </div>
          </div>
          {/* <div className='blueBtn mx-auto  w-[226px] h-[55px] font-medium text-[20px]'>Analyze</div> */}
          <div className='bg-[rgba(217,217,217,0.08)] font-normal text-[32px] rounded-[50px] w-[35%] text-center py-4'>The Genre of your music is :</div>
          <div className='h-[72px] w-[244px] bg-[rgba(97,0,148,0.5)] rounded-[50px] center mx-auto text-[36px] font-bold'>{genre}</div>
          <div className='absolute bottom-0 right-0 '>
            <Light/>
          </div>
        </section> 
        }
    </>
  )
}

export default Section2