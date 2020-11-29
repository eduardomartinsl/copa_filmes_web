import { useState } from 'react'

import { http } from '../resources/http'
import { FILMES_BASE_URL } from '../resources/urls'

export default function useBuscaFilmes() {

  const [listaFilmes, setListaFilmes] = useState([])
  const [loading, setLoading] = useState(false)

  useState(
    async () => {
      setLoading(true)
      const url = FILMES_BASE_URL
      try {
        const { data } = await http.get(url)
        console.log(`Resultado da requisição: ${JSON.stringify(data)}`)
        setListaFilmes(data)
      } catch (e) {

      } finally {
        setLoading(false)
      }
    },
    [listaFilmes]
  )

  return { listaFilmes, loading }
}