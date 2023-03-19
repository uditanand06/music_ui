import Light2 from './light2'
import Light from './lights'
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FidgetSpinner } from 'react-loader-spinner'
import { Chart } from "react-google-charts";
import axios from 'axios';

const Section2 = () => {
  const [loading,setLoading] = useState(false);
  const { register, handleSubmit } = useForm();
  const [genre,setGenre] = useState(["none"]);
  const [predictions,setPredictions] = useState();
  const [emotion, setEmotion] = useState();
  const [tags,setTags] = useState();
  const token="BQDXHJs3BKKQEWLGy_bnj-AD26XWE9hSl9596Y4cGVmIwXRppkKaiVaO0qd6QUSnKMu7-XjkN0u_O3jSX8pHoc8v9SWtGcACeV8LfgOS5W5F246Oqm8DrkNXS-kTdZNty7nuUHCGFgE39aKecscloTaFeW93o5P11H7NTdAfugEkUXvjibJ5yJfICXFjQW4zkldrLD_4oMUD7QgKldFpn_j9tsimZPEcfY-Vc5SttGfC7w1BW1vZSyQy_SgDEQQTDC2ZVVn5t-dky-VTeyw9irE9A_aJpK14BXnBod7DaUaMpdCIPqdANrk8kAgH1Fsj0-RpAOw"

  useEffect(() => {  },[loading]);

  const onSubmit = async (data) => {
    setLoading(true)
    try {
      const formData = new FormData();
      formData.append("audioFile", data.file[0]);
      console.log(formData)
      //const res = axios.post('http://localhost:5000/api/predict',formData);
      const res = await fetch("http://localhost:5000/api/predict", {
          method: "POST",
          body: formData,
      }).then((res) => res.json());
      console.log(res)
      calculateEmotion(res.valence,res.arousal)
      setGenre((res.genre).join(', '));
      setPredictions(res.predictions);

    } catch (error) {
      console.log(error.message)
    }
    setLoading(false);
  };


  const calculateEmotion = (valence,arousal) => {
        
        var angle_rad = Math.atan2(arousal,valence);
        var angle_deg = (180 * angle_rad) / Math.PI;
        if (angle_deg < 0) {
            angle_deg += 360;
        }
        console.log(valence, arousal, angle_rad, angle_deg);
    
        if (0 <= angle_deg && angle_deg < 30) {
            setEmotion("happy");
        } else if (30 <= angle_deg && angle_deg < 60) {
            setEmotion("delighted");
        } else if (60 <= angle_deg && angle_deg < 90) {
            setEmotion("excited");
        } else if (90 <= angle_deg && angle_deg < 120) {
            setEmotion("tense");
        } else if (120 <= angle_deg && angle_deg < 150) {
            setEmotion("angry");
        } else if (150 <= angle_deg && angle_deg < 180) {
            setEmotion("frustrated");
        } else if (180 <= angle_deg && angle_deg < 210) {
            setEmotion("depressed");
        } else if (210 <= angle_deg && angle_deg < 240) {
            setEmotion("bored");
        } else if (240 <= angle_deg && angle_deg < 270) {
            setEmotion("tired");
        } else if (270 <= angle_deg && angle_deg < 300) {
            setEmotion("calm");
        } else if (300 <= angle_deg && angle_deg < 330) {
            setEmotion("relaxed");
        } else if (330 <= angle_deg && angle_deg < 360) {
            setEmotion("content");
        }

  }

  const onSubmit1 = async (data) => {
    setLoading(true)
    try {
     
      console.log(data.musicid)
      var arrid=data.musicid.split("/");
      const data1 = await fetch(`https://api.spotify.com/v1/audio-features/${arrid.at(-1)}`, {
            method:"GET",
            headers: {
              'Accept': 'application/json',
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`,
                
            },
        }).then((res) => res.json())

        var valence=data1.valence
        var arousal=data1.danceability
        valence = (2 * valence) - 1;
        arousal = (2 * arousal) - 1;
        calculateEmotion(valence,arousal)
        
          console.log(data1)
    } catch (error) {
      console.log(error.message)
    }
    setLoading(false);
  };

//   const data = [
//   ["Genre", "Percentage"],
//   ["Pop", 10],
//   ["Reggae", 20],
//   ["Sufi", 30],
//   ["Trance", 40],
  
// ];



const options = {
  chart: {
    title: "Genre Classification",
    subtitle: "Percentage of each genre for the music provided",
  },
  colors: ["#610094"],
  
  backgroundColor: '#000',
  chartArea: {
    backgroundColor: {
      fill: '#000',
    },
  },
   
};

  return (
    <>
      {
        loading?
        <>
            <div className="grid justify-center items-center p-20">
                <FidgetSpinner
                    visible={true}
                    height="150"
                    width="150"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper"
                    ballColors={['#fff', '#fff', '#fff']}
                    backgroundColor="#610094"
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
          <div className='w-fit bg-[rgba(97,0,148,0.5)] rounded-[50px] center mx-auto text-[36px] font-bold capitalize px-4 py-2'>
          {/* {genre.map((user,i,arr) => (
            if(arr.length-1 == i)
            {
              <div className="ml-1">{user}, </div>
            }else{
              <div className="ml-1">{user}, </div>
            }

            
          ))} */}
          {genre}
          </div>
          {
            predictions?
            <div className='center'>
              <Chart
                className='mx-auto'
                chartType="Bar"
                width="75%"
                height="400px"
                data={predictions}
                options={options}
              />
            </div>
            :
            <>

            </>
          }

          <div>
              <form onSubmit={handleSubmit(onSubmit1)} className="flex flex-col justify-between items-center space-y-5">
                  <input className="input shadow-md  border-pink-500 px-4 py-2 rounded-2xl border-2 text-lg text-center bg-gradient-to-r from-fuchsia-600 to-pink-600 text-transparent bg-clip-text" type="text" {...register("musicid")} />
                  <button className='blueBtn mx-auto  w-[226px] h-[55px] font-medium text-[20px] active:shadow-md transtion'>Analyze</button>
                  <input type="submit" className="hidden"/>
              </form>
          </div>

          <div className='bg-[rgba(217,217,217,0.08)] font-normal text-[32px] rounded-[50px] w-[35%] text-center py-4'>The Emotion of your music is :</div>
          <div className='w-fit bg-[rgba(97,0,148,0.5)] rounded-[50px] center mx-auto text-[36px] font-bold capitalize px-4 py-2'>
          {emotion}
          </div>
          
          
          <div className='absolute bottom-0 right-0 '>
            <Light/>
          </div>
        </section> 
        }
    </>
  )
}

export default Section2