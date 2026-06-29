import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type ActiveTab = 'photos' | 'videos' | 'gifs'

interface SearchResult {
  id: string | number
  [key: string]: unknown
}

interface SearchState {
  query: string
  activeTab: ActiveTab
  results: SearchResult[]
  loading: boolean
  error: string | null
}

const initialState: SearchState = {
  query: '',
  activeTab: 'photos',
  results: [],
  loading: false,
  error: null
}

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setQuery(state, action: PayloadAction<string>) {
      state.query = action.payload
    },
    setActiveTabs(state, action: PayloadAction<ActiveTab>) {
      state.activeTab = action.payload
    },
    setResults(state, action: PayloadAction<SearchResult[]>) {
      state.results = action.payload
      state.loading = false
    },
    setLoading(state) {
      state.loading = true
      state.error = null
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload
      state.loading = false
    },
    clearResults(state) {
      state.results = []
    }
  }
})

export const {
  setQuery,
  setActiveTabs,
  setError,
  setLoading,
  setResults,
  clearResults
} = searchSlice.actions

export default searchSlice.reducer