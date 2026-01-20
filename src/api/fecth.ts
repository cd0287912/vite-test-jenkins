// fetch 请求公共方法
export async function fetchRequest<T>(url: string, options?: RequestInit): Promise<T> {
  const baseUrl = import.meta.env.VITE_BASEURL
  url = baseUrl + url
  const fetchOptions: RequestInit = {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers
    }
  }
  const response = await fetch(url, fetchOptions)
  const data = await response.json()
  if (data.code !== 0) {
    throw new Error(data.message)
  }
  return data as T
}