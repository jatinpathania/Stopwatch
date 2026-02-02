# ⏱️ Advanced Stopwatch Application

A modern, feature-rich stopwatch application built with React and Vite. This application provides precise time tracking with lap timing, theme switching, and keyboard shortcuts for seamless user experience.

## 🌟 Features

### Core Functionality
- **Precise Timing** - Accurate timer with 10-millisecond precision
- **Start/Stop Controls** - Easy-to-use buttons to control the timer
- **Reset Function** - Quickly reset the timer back to 00:00:00.00
- **Real-time Display** - Large, easy-to-read digital display

### Advanced Features
- 📍 **Lap Timing** - Record multiple lap times while the stopwatch is running
- 🏆 **Best Lap Tracking** - Automatically identifies and highlights your fastest lap
- 📊 **Statistics** - View total number of laps and best lap time at a glance
- 📋 **Lap History** - Complete scrollable list of all recorded laps with individual and total times
- 🌙 **Dark/Light Theme** - Toggle between professional light and dark themes
- ⌨️ **Keyboard Shortcuts** - Control the stopwatch with intuitive keyboard commands

### Design & UX
- 🎨 **Modern UI** - Beautiful gradient backgrounds and glassmorphic design elements
- ✨ **Smooth Animations** - Pulse effects, bouncing badges, and smooth transitions
- 📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile devices
- 🎯 **Intuitive Interface** - Clear visual feedback and disabled state handling

## 🎮 How to Use

### Mouse/Touch Controls
1. **Start** - Click the green "Start" button to begin timing
2. **Stop** - Click the red "Stop" button to pause the timer
3. **Lap** - Click the orange "Lap" button to record a lap time while running
4. **Reset** - Click the blue "Reset" button to clear the timer and all laps
5. **Theme Toggle** - Click the moon/sun icon in the top-right to switch themes
6. **Clear Laps** - Use the "Clear" button in the lap history section to remove all lap records

### Keyboard Shortcuts
| Shortcut | Action |
|----------|--------|
| `Space` | Start/Stop timer |
| `L` | Record a lap |
| `R` | Reset timer and laps |

## 🚀 Quick Start

### Prerequisites
- Node.js 16.x or higher
- npm or yarn package manager

### Installation

1. **Clone or navigate to the project directory:**
```bash
cd Stopwatch
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the development server:**
```bash
npm run dev
```

4. **Open your browser:**
Navigate to `http://localhost:5173` (or the URL shown in your terminal)

### Build for Production
```bash
npm run build
```

The optimized build will be created in the `dist` folder.

## 🛠️ Technology Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Pure CSS3 with advanced features
  - CSS Gradients
  - Flexbox Layout
  - CSS Animations & Transitions
  - Media Queries for Responsiveness
  - Backdrop Filter Effects
- **Development**: ES6+ JavaScript

## 📦 Project Structure

```
Stopwatch/
├── src/
│   ├── App.jsx           # Main component with stopwatch logic
│   ├── App.css           # Advanced styling with animations
│   ├── main.jsx          # React entry point
│   ├── index.css         # Global styles
│   └── assets/           # Static assets
├── public/               # Public files
├── index.html            # HTML entry point
├── package.json          # Dependencies and scripts
└── vite.config.js        # Vite configuration
```

## 💡 Key Features Explained

### Lap Timing System
- Record lap times without stopping the main timer
- Each lap shows:
  - **Lap #**: Sequential lap number
  - **Lap Time**: Duration of the specific lap
  - **Total Time**: Total elapsed time since start
- Best lap is automatically highlighted with a 🏆 badge

### Theme System
- **Light Theme**: Purple gradient background, white display
- **Dark Theme**: Deep blue/purple gradient background, light text
- Theme preference persists during your session
- Smooth transitions when switching themes

### Responsive Design
- Desktop: Full-size display with optimized layout
- Tablet: Adjusted button sizes and spacing
- Mobile: Vertical layout with touch-friendly controls


## ✅ Features Checklist

- [x] Basic timer functionality (start, stop, reset)
- [x] Lap timing with history
- [x] Best lap tracking
- [x] Dark/Light theme toggle
- [x] Keyboard shortcuts
- [x] Responsive design
- [x] Advanced CSS animations
- [x] Statistics display
- [x] Modern UI/UX
- [x] Smooth transitions

## 📝 Notes

- The stopwatch updates every 10 milliseconds for precise timing
- Lap records persist during the current session but are cleared on reset
- All functionality works offline - no internet connection required
- The application uses React hooks for state management

## 🔮 Future Enhancement Ideas

- [ ] Save stopwatch history to local storage
- [ ] Export lap times as CSV
- [ ] Sound notifications
- [ ] Custom themes
- [ ] Multiple simultaneous timers
- [ ] Stopwatch sharing feature

## 📄 License

This project is open source and available for personal and educational use.

## 👨‍💻 Author

Created with ❤️ by Jatin as a modern stopwatch application.

---

**Enjoy your advanced stopwatch! ⏱️✨**
