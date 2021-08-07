import React, { useEffect } from 'react'
import tmdb from './services/tmdb'

export default () => {

  useEffect(() => {
    const loadAll = async () => {
      let list = await tmdb.getHomeList()
      console.log(list);
    }
    loadAll()
  }, [])

  return(
    <div>
      Olá, Mundo!
    </div>
  )
}