interface TE {
  statusCode: number
  message: string
}

export default function useApi<T>(url: string, options = {}) {
  const config = useRuntimeConfig()
  return useFetch<T, TE>(url, {
    baseURL: config.public.apiBase,
    watch: false,
    immediate: !['POST', 'PUT', 'PATCH', 'DELETE'].includes(options?.method),
    // headers: {
    //   'Authorization': `Bearer {access_token}`
    // },
    ...options
  })
}