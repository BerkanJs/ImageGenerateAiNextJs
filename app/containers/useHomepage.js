"use client"

import { useMemo,useState,useContext,createContext } from "react";

const HomePageContext=createContext();
export const HomePageProvider=({children})=>{
    const[prompt,setPrompt]=useState("");
    const[image,setImage]=useState(null);
    const[error,setError]=useState(null);
    const[isSubmitting,setSubmiting]=useState(false)
 
    const changePromt=(newPrompt)=>{
        setPrompt(newPrompt)
        window.scrollTo(0,0)
    }
    const generateImage= async()=>{
        try{
            setSubmiting(true)
            const response=await fetch("/api/generate",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({
                    prompt,
                }),
            })
            if(!response.ok) throw new Error('Failed to create')
            const generatedImage=await response.json()
            setImage(generateImage)
            setError(null)
            
        }
        catch(error){
            setError(error)
            throw new Error("Failed to generate")
        }
        setSubmiting(false)
        

    }
    const data= useMemo(
        ()=>({
            prompt,
            setPrompt,
            generateImage,
            changePromt,
            error,
            image,
            isSubmitting
            
        }),
        [prompt,error,image,isSubmitting]
    );
    return(
        <HomePageContext.Provider value={data} >{children}</HomePageContext.Provider>
    );
};

export const useHomePage=()=>{
    const context=useContext(HomePageContext);
    return context;
}