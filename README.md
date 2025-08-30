# Sticky Notes App 📌

A lightweight sticky notes app built with **React**, **TypeScript**, **Vite**, **Zustand**, and **Tailwind CSS**.  
Notes can be added, dragged, resized, colored, and deleted by dropping them onto the trash zone.  
All notes are persisted in **localStorage** so they remain after refresh.

This project emphasizes clean architecture and usability.  
State is centralized in a single store with typed actions, components are small and focused, and rendering is optimized with narrow selectors.

---

## 🚀 Getting Started

### Prerequisites

-   [Node.js](https://nodejs.org/) (v18 or later recommended)
-   [pnpm](https://pnpm.io/) (or npm / yarn, but `pnpm` is used in this project)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/moonjuicy/sticky-notes.git
cd sticky-notes-app
```

2. **Install dependencies**

```bash
pnpm install
```

3. **Start the development server**

```bash
pnpm dev
```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the app running.

### Available Scripts

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Run linting
pnpm lint
```

---

## 🎯 Features

-   **Create Notes**: Click the "Add Note" button to create new sticky notes
-   **Drag & Drop**: Move notes around the screen by dragging them
-   **Resize**: Resize notes by dragging the bottom-right corner
-   **Edit Content**: Click on notes to edit title and content
-   **Color Coding**: Each note has a unique color theme
-   **Delete**: Drag notes to the trash zone (bottom-right corner) to delete them
-   **Persistent Storage**: Notes are saved in localStorage and persist between sessions
-   **Z-Index Management**: Clicking on a note brings it to the front

---

## 🛠️ Tech Stack

-   **React 19** - UI library
-   **TypeScript** - Type safety
-   **Vite** - Build tool and dev server
-   **Zustand** - State management
-   **Tailwind CSS** - Styling
-   **React RND** - Draggable and resizable components
-   **React Icons** - Icon library

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
