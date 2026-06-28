import axios from 'axios'

const UNSPLASH_KEY = import.meta.env.UNSPLASH_KEY as string
const PEXELS_KEY = import.meta.env.PEXELS_KEY as string
const GIPHY_KEY = import.meta.env.GIPHY_KEY as string

export async function fetchPhotos(query: string, page: number = 1, per_page: number = 20) {
  const res = await axios.get('https://api.unsplash.com/search/photos', {
    params: { query, page, per_page },
    headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` } 
  })
  return res.data
}

export async function fetchVideos(query: string, per_page: number = 15) {
  const res = await axios.get('https://api.pexels.com/videos/search', {
    params: { query, per_page },
    headers: { Authorization: PEXELS_KEY }
  })
  return res.data
}

export async function fetchGIFs(query: string, limit: number = 20) {
  const res = await axios.get('https://api.giphy.com/v1/gifs/search', {
    params: { q: query, api_key: GIPHY_KEY, limit }
  })
  return res.data
}