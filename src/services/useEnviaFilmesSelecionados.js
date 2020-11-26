import { useCallback, useState } from 'react'

import { http } from '../resources/http'
import URLS, { FILMES_BASE_URL } from '../resources/urls'

export default function useEnviaFilmesSelecionados({ filmesSelecionados }) {

  const [loading, setLoading] = useState(false)

  const enviaFilmesSelecionados = useCallback(
    async () => {
      setLoading(true)
      const url = URLS.ENVIA_FILMES(filmesSelecionados)
      try {
        const {data} = await http.post(url)
      } catch (e) {

      } finally {
        setLoading(false)
      }
    },
    []
  )

  return { loading, enviaFilmesSelecionados }
}