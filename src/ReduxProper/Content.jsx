import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteGame, getGames } from './Actions/Home/gamesDataActtions'
import toast, { Toaster } from 'react-hot-toast'

const Content = () => {
  const dispatch = useDispatch()
  const gamesData = useSelector(store => store.gamesData.data) 
  const isLoading = useSelector(store => store.gamesData.loading)
  const error = useSelector(store => store.gamesData.error)
  const warning = useSelector(store => store.gamesData.warning)
  const success = useSelector(store => store.gamesData.success)


  if (error) {
    alert(error)
  }

  if (warning) {
    toast.error(warning)
  }
  
  if (success) {
    toast.success(success)
  }

  const deleteHandler = (gameId) =>{
    dispatch(deleteGame({gameId}))
  }


  useEffect(()=>{
    dispatch(getGames())
  },[])

  return (
    <>
    <Toaster/>
    <div>
      games
    </div>
    <div>
     {
      isLoading ? <>
      <h1>....Loading data</h1>
      </>
      :
      gamesData?.map((res)=>{
        return(
          <>
          <div style={{display:"flex" , gap:10}}>
            <h4>{res.id}---{res.open_time}-{res.close_time}</h4> <button 
            onClick={()=>{deleteHandler(res.id)}}
            style={{backgroundColor:"red"}}>delete</button>
            </div>
          </>
        )
      })
     }
    </div>
    </>
  )
}

export default Content
