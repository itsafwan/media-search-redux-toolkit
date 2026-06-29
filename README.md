# Media Search — Redux Toolkit

A full-stack frontend app built with React, TypeScript, and Redux Toolkit that lets users search and browse Photos, Videos, and GIFs from multiple APIs in one place.

## How It Works

```
User searches → Redux state updates → API call fires → Results render in grid
```

## Key Features

* **Multi-Media Search:** Search Photos (Unsplash), Videos (Pexels), and GIFs (Giphy) from a single search bar.
* **Redux Toolkit State Management:** Global state handled via `createSlice` — search query, active tab, results, loading, and error states all in Redux store.
* **Collection System:** Save and remove media items to a personal collection, persisted via `localStorage`.
* **Toast Notifications:** Real-time feedback on add/remove actions using React Toastify.
* **Type-Safe Codebase:** Fully written in TypeScript — all API responses, Redux slices, and component props are properly typed.

## Tech Stack

| Layer | Technologies |
|-------|-------------|
| Frontend | React, TypeScript, Tailwind CSS |
| State Management | Redux Toolkit, React Redux |
| APIs | Unsplash, Pexels, Giphy |
| HTTP Client | Axios |
| Notifications | React Toastify |
| Routing | React Router DOM |
| Build Tool | Vite |

## ⚙️ Environment Variables

Create a `.env` file in the root:

```env
VITE_UNSPLASH_KEY=your_unsplash_api_key
VITE_PEXELS_KEY=your_pexels_api_key
VITE_GIPHY_KEY=your_giphy_api_key
```

Get your keys from:
- Unsplash: https://unsplash.com/developers
- Pexels: https://www.pexels.com/api
- Giphy: https://developers.giphy.com

## Redux Store Structure

| Slice | State |
|-------|-------|
| `search` | query, activeTab, results, loading, error |
| `collection` | saved media items (persisted in localStorage) |
