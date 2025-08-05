# 🎬 Movie Watchlist

> A modern and elegant movie tracking application built with React, featuring a cinematic theme and advanced filtering capabilities.

## 📸 Preview

![Movie Watchlist Preview](https://via.placeholder.com/800x600/1a1a2e/ffd700?text=Movie+Watchlist+App)

*A sophisticated movie management interface with cinema-inspired design*

## ✨ Features

### Core Functionality
- 🎭 **Add Movies** - Easily add movies with title and genre selection
- ✅ **Track Progress** - Mark movies as watched or unwatched with visual indicators
- 🔍 **Smart Filtering** - Filter by status (All, To Watch, Watched) and genre
- 🗑️ **Movie Management** - Remove movies from your collection
- 📊 **Real-time Statistics** - View counts for total, watched, and unwatched movies
- 💾 **Data Persistence** - Your movie list is automatically saved in browser storage

### User Experience
- 🎨 **Cinema Theme** - Elegant dark theme with golden accents and red highlights
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- ⚡ **Smooth Animations** - Glassmorphism effects and hover animations
- 🎯 **Genre Selection** - Choose from 20+ popular movie genres with quick-select tags
- 🏷️ **Visual Badges** - Clear status indicators for completed movies
- ⌨️ **Keyboard Support** - Press Enter to quickly add movies

### Advanced Features
- 🎬 **Genre Library** - Comprehensive selection of movie genres with emoji icons
- 🔄 **Combined Filters** - Filter by both status and genre simultaneously
- 📅 **Date Tracking** - See when each movie was added to your list
- 🎪 **Custom Genres** - Add custom genres beyond the predefined options

## 🛠️ Technologies Used

### Frontend
- **React 18** - Modern functional components with hooks
- **JavaScript ES6+** - Arrow functions, destructuring, template literals
- **CSS3** - Advanced styling with gradients, glassmorphism, and animations
- **HTML5** - Semantic markup for accessibility

### Development & Tools
- **Create React App** - Zero-configuration build setup
- **Local Storage API** - Client-side data persistence
- **Custom Hooks** - Reusable state logic with `useMovies` hook
- **Component Architecture** - Modular and organized file structure

## 🏗️ Project Structure

```
movie-watchlist/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── Header/
│   │   ├── Stats/
│   │   ├── MovieForm/
│   │   ├── FilterButtons/
│   │   ├── MovieList/
│   │   ├── MovieCard/
│   │   ├── EmptyState/
│   │   └── Footer/
│   ├── hooks/               # Custom React hooks
│   │   └── useMovies.js
│   ├── utils/               # Helper functions and constants
│   │   ├── movieUtils.js
│   │   └── genres.js
│   ├── App.js              # Main application component
│   └── App.css             # Global styles and theme
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/GugaValenca/movie-watchlist.git
   cd movie-watchlist
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production
```bash
npm run build
```

## 💡 Usage Guide

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

### Filtering Options
- **All Movies**: Shows your complete collection
- **To Watch**: Movies you haven't watched yet
- **Watched**: Movies you've completed
- **By Genre**: Additional filtering by movie genre

## 🎯 Key Components

### Custom Hooks
- **`useMovies()`** - Manages movie CRUD operations, statistics, and localStorage integration

### Utility Functions
- **Movie Management** - Add, edit, delete, and filter operations
- **Genre System** - 20+ predefined genres with emoji icons
- **Local Storage** - Persistent data with error handling

### Component Highlights
- **MovieCard** - Individual movie display with actions and status
- **FilterButtons** - Advanced filtering with genre support
- **Stats** - Real-time statistics with animated counters
- **MovieForm** - Intelligent form with genre selection and validation

## 🎨 Design Features

### Cinema Theme
- **Color Palette**: Deep blues, golden accents, and cinema red
- **Typography**: Clean, modern fonts with appropriate hierarchy
- **Lighting Effects**: Subtle gradients and glow effects
- **Glassmorphism**: Translucent elements with backdrop blur

### Responsive Design
- **Desktop**: Full-featured layout with multi-column grids
- **Tablet**: Optimized spacing and touch-friendly buttons
- **Mobile**: Single-column layout with collapsible elements

## 🔧 Performance Optimizations

- **Efficient Re-rendering** - Proper dependency arrays and state management
- **Optimized Filtering** - Fast array operations for large collections
- **Lazy Loading** - Components load only when needed
- **Memory Management** - Proper cleanup and effect dependencies

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Gustavo Valença**

- 💻 **GitHub**: [@GugaValenca](https://github.com/GugaValenca)
- 💼 **LinkedIn**: [Gustavo Valença](https://www.linkedin.com/in/gustavo-valen%C3%A7a-4172b3260/)
- 📸 **Instagram**: [@gugatampa](https://www.instagram.com/gugatampa)
- 🎮 **Twitch**: [gugatampa](https://www.twitch.tv/gugatampa)
- 💬 **Discord**: [Join Community](https://discord.com/invite/3QQyR5whBZ)

## 🙏 Acknowledgments

- React team for the amazing framework
- Create React App for the development setup
- Movie industry for inspiration
- Cinema design principles and aesthetics

---

⭐ **If you found this project helpful, please give it a star!**
