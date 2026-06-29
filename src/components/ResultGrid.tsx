import { useDispatch, useSelector } from 'react-redux'
import { fetchPhotos, fetchVideos, fetchGIFs } from '../api/mediaApi'
import { setLoading, setError, setResults } from '../redux/features/searchSlice'
import { useEffect } from 'react'
import ResultCard from './ResultCard'
import type { RootState } from '../redux/store'

interface UnsplashPhoto {
  id: string
  alt_description: string
  urls: { small: string; full: string }
  links: { html: string }
}

interface PexelsVideo {
  id: number
  image: string
  url: string
  user: { name: string }
  video_files: { link: string }[]
}

interface GiphyGif {
  id: string
  title: string
  url: string
  images: {
    fixed_height: { url: string }
    original: { url: string }
  }
}

const ResultGrid = () => {

  const dispatch = useDispatch()
  const { query, activeTab, results, loading, error } = useSelector((store: RootState) => store.search)

  useEffect(function () {
    if (!query) return
    const getData = async () => {
      try {
        dispatch(setLoading())
        let data = []
        if (activeTab === 'photos') {
          const response = await fetchPhotos(query)
          data = response.results.map((item: UnsplashPhoto) => ({
            id: item.id,
            type: 'photo',
            title: item.alt_description,
            thumbnail: item.urls.small,
            src: item.urls.full,
            url: item.links.html
          }))
        }
        if (activeTab === 'videos') {
          const response = await fetchVideos(query)
          data = response.videos.map((item: PexelsVideo) => ({
            id: item.id,
            type: 'video',
            title: item.user.name || 'video',
            thumbnail: item.image,
            src: item.video_files[0].link,
            url: item.url
          }))
        }
        if (activeTab === 'gifs') {
          const response = await fetchGIFs(query)
          data = response.data.map((item: GiphyGif) => ({
            id: item.id,
            title: item.title || 'GIF',
            type: 'gifs',
            thumbnail: item.images.fixed_height.url,
            src: item.images.original.url,
            url: item.url
          }))
        }
        dispatch(setResults(data))

      } catch (err) {
        dispatch(setError(err instanceof Error ? err.message : 'Something went wrong'))
      }
    }
    getData()
  }, [query, activeTab, dispatch])

  if (error) return <h1>Error</h1>
  if (loading) return <h1>Loading...</h1>

  return (
    <div className='flex justify-between w-full flex-wrap gap-6 overflow-auto px-10'>
      {results.map((item, idx) => {
        return <div key={idx}>
          <ResultCard item={item} />
        </div>
      })}
    </div>
  )
}

export default ResultGrid