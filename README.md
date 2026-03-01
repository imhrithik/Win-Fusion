# Winfusion

A modern Windows 11-inspired web interface built with HTML, CSS, and JavaScript.

## Features

- Interactive Windows 11 UI simulation
- Responsive design with video background
- Smooth start menu animations
- Taskbar with clickable interaction
- Clean and minimal code structure

## Installation

1. Clone or download this repository
2. Create a `public/` folder and add your media files:
   - `video.webm` - Background video
   - `chromeicon.png` - Chrome icon
   - `taskbarright.png` - Taskbar right section
   - `icons.png` - Taskbar icons
   - `startmenu.png` - Start menu image

3. Open `index.html` in your browser

## Project Structure

```
Winfusion/
├── index.html       # Main HTML file
├── style.css        # Styling
├── script.js        # JavaScript functionality
├── public/          # Media files (images, videos)
├── LICENSE          # MIT License
└── README.md        # This file
```

## How It Works

- **Taskbar Click**: Click the taskbar to toggle the start menu animation
- **Video Background**: Responsive background video plays automatically
- **Icons**: Interactive chrome icon with hover effects

## Code Improvements

- ✅ Fixed malformed HTML structure
- ✅ Updated to modern JavaScript (querySelector instead of getElementsByClassName)
- ✅ Added error handling for missing DOM elements
- ✅ Improved CSS with hover effects and responsive layout
- ✅ Organized media files in dedicated `public/` folder

## Browser Support

- Chrome/Edge (Chromium-based)
- Firefox
- Safari
- Modern mobile browsers

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Credits

**Special thanks to [Code with Harry](https://www.youtube.com/CodeWithHarry)** for inspiring the approach to web development and code organization best practices.

## Contributing

Contributions are welcome! Feel free to fork, modify, and improve this project.

---

**Note**: Make sure all media files (images and videos) are placed in the `public/` folder before running the application.
