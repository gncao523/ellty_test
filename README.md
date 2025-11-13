# Ellty UI

A React + Vite application featuring an interactive checkbox selection interface for page management.

## Features

- **Interactive Checkbox Selection**: Select/deselect pages with custom-styled checkboxes
- **Smart Hover Effects**: Hover effects are automatically disabled after user interaction for a cleaner UX
- **Responsive Design**: Mobile-friendly layout that adapts to different screen sizes
- **Custom Styling**: Modern UI with Montserrat font and custom checkbox design

## Tech Stack

- **React 19.2.0** - UI library
- **Vite 7.2.2** - Build tool and dev server
- **ESLint** - Code linting

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

Create a production build:
```bash
npm run build
```

### Preview

Preview the production build:
```bash
npm run preview
```

### Linting

Run ESLint to check code quality:
```bash
npm run lint
```

## Project Structure

```
ellty_test/
├── src/
│   ├── App.jsx          # Main application component
│   ├── App.css          # Application styles
│   ├── index.css        # Global styles and font definitions
│   └── main.jsx         # Application entry point
├── public/              # Static assets
└── dist/                # Production build output
```

## Features in Detail

### Checkbox Behavior

- Click any row to toggle the checkbox state
- Once a checkbox is interacted with, hover effects are permanently disabled
- Checkboxes maintain their checked/unchecked state
- Custom blue checkmark appears when checked

### Styling

- Uses Montserrat Regular font for typography
- Custom checkbox design with rounded corners
- Smooth transitions and hover states
- Responsive breakpoints for mobile devices

## License

Private project
