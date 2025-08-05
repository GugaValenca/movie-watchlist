# Movie Watchlist 🎬

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)

A modern and elegant movie tracking application built with React, featuring a cinematic theme and advanced filtering capabilities.

## Features ✨

- **Add Movies**: Easily add movies with title and genre selection
- **Track Progress**: Mark movies as watched or unwatched with visual indicators
- **Smart Filtering**: Filter by status (All, To Watch, Watched) and genre
- **Movie Management**: Remove movies from your collection
- **Real-time Statistics**: View counts for total, watched, and unwatched movies
- **Data Persistence**: Your movie list is automatically saved in browser storage
- **Cinema Theme**: Elegant dark theme with golden accents and red highlights
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Glassmorphism effects and hover animations
- **Genre Selection**: Choose from 20+ popular movie genres with quick-select tags

## Screenshots 📸

![Movie Watchlist Preview](https://via.placeholder.com/800x600/1a1a2e/ffd700?text=Movie+Watchlist+App)

## Installation 🚀

1. Clone the repository:
```bash
git clone https://github.com/GugaValenca/movie-watchlist.git
```

2. Navigate to the project directory:
```bash
cd movie-watchlist
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm start
```

5. Open your browser and navigate to `http://localhost:3000`

## Usage 💡

### Adding Movies
1. Enter the movie title in the input field (required)
2. Select a genre from the dropdown or use quick-select buttons
3. Click "Add Movie" or press Enter
4. The movie appears in your watchlist with "To Watch" status

### Managing Your Collection
- **Mark as Watched**: Check the checkbox next to any movie
- **Filter Movies**: Use the filter buttons to view specific categories
- **Filter by Genre**: Click "Filter by Genre" to narrow by specific genres
- **Remove Movies**: Click the × button on any movie card
- **View Statistics**: Check the stats cards at the top for your progress

## Project Structure 🏗️

```
movie-watchlist/
├── public/
├── src/
│   ├── components/
│   │   ├── Header/
│   │   ├── Stats/
│   │   ├── MovieForm/
│   │   ├── FilterButtons/
│   │   ├── MovieList/
│   │   ├── MovieCard/
│   │   ├── EmptyState/
│   │   └── Footer/
│   ├── hooks/
│   │   └── useMovies.js
│   ├── utils/
│   │   ├── movieUtils.js
│   │   └── genres.js
│   ├── App.js
│   └── App.css
├── package.json
└── README.md
```

## Key Components 🎯

### Custom Hooks
- **`useMovies()`** - Manages movie CRUD operations, statistics, and localStorage integration

### Components
- **MovieCard** - Individual movie display with actions and status
- **FilterButtons** - Advanced filtering with genre support
- **Stats** - Real-time statistics with animated counters
- **MovieForm** - Intelligent form with genre selection and validation

## Technologies Used 🛠️

- **React 18** - Modern functional components with hooks
- **JavaScript ES6+** - Arrow functions, destructuring, template literals
- **CSS3** - Advanced styling with gradients, glassmorphism, and animations
- **HTML5** - Semantic markup for accessibility
- **Local Storage API** - Client-side data persistence
- **Create React App** - Zero-configuration build setup

## Design Features 🎨

### Cinema Theme
- **Color Palette**: Deep blues, golden accents, and cinema red
- **Typography**: Clean, modern fonts with appropriate hierarchy
- **Lighting Effects**: Subtle gradients and glow effects
- **Glassmorphism**: Translucent elements with backdrop blur

### Responsive Design
- **Desktop**: Full-featured layout with multi-column grids
- **Tablet**: Optimized spacing and touch-friendly buttons
- **Mobile**: Single-column layout with collapsible elements

## Contributing 🤝

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License 📄

This project is licensed under the MIT License.

## Contact 📬

**Gustavo Valença**

[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/GugaValenca)
[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/gustavo-valen%C3%A7a-4172b3260/)
[![Instagram](https://img.shields.io/badge/Instagram-%23E4405F.svg?style=for-the-badge&logo=Instagram&logoColor=white)](https://www.instagram.com/gugatampa)
[![Twitch](https://img.shields.io/badge/Twitch-%239146FF.svg?style=for-the-badge&logo=Twitch&logoColor=white)](https://www.twitch.tv/gugatampa)
[![Discord](https://img.shields.io/badge/Discord-%235865F2.svg?style=for-the-badge&logo=discord&logoColor=white)](https://discord.com/invite/3QQyR5whBZ)

---

⭐ **If you found this project helpful, please give it a star!**
