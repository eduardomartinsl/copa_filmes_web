import { useCallback, useState } from 'react'

import { http } from '../resources/http'
import URLS from '../resources/urls'

export default function useEnviaFilmesSelecionados() {

  const [loading, setLoading] = useState(false)
  const [filmesVencedores, setFilmesVencedores] = useState()

  const enviaFilmesSelecionados = useCallback(
    async (params) => {
      console.log(params)
      setLoading(true)
      const url = URLS.CALCULA_FILMES_VENCEDORES()
      try {
        const { data } = await http.post(url, params)
        setFilmesVencedores(data['result'])
      } catch (e) {
        console.log(JSON.stringify(e))
      } finally {
        setLoading(false)
      }
    },
    []
  )

  return { enviaFilmesSelecionados, filmesVencedores, loading }
}