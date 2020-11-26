import {useCallback, useState} from 'react'

import { http } from '../resources/http'
import {FILMES_BASE_URL} from '../resources/urls'

export default function useBuscaFilmes(){
  
  const[listaFilmes, setListaFilmes] = useState([])
  const[loading, setLoading] = useState(false)

  const carregaFilmes = useCallback(
    async () => {
      setLoading(true)
      const url = FILMES_BASE_URL
      try{
        const {data} = await http.get(url)
        setListaFilmes(data)
      }catch(e){

      }finally{
        setLoading(false)
      }
    },
    []
  )

  return {listaFilmes, loading, carregaFilmes}
}