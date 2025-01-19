# Shadcn Admin Panel Template with using vite+react

A modern and customizable admin panel template built with **Vite**, **React**, and **Shadcn UI**. This project provides a ready-to-use foundation for creating beautiful and scalable dashboards and admin interfaces.

---

## Features
- **Vite** for lightning-fast development.
- **React** for dynamic UI components.
- **Shadcn UI** for beautifully styled components.
- Responsive design for desktop and mobile.
- Built-in sidebar navigation.
- Collapsible menu items.

---

## Getting Started

### Prerequisites
Make sure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/divy6122000/react-shadcn-admin-panel-template.git
   cd shadcn-admin-panel-template
   ```

2. **Install dependencies:**
   Using npm:
   ```bash
   npm install
   ```
   Or using yarn:
   ```bash
   yarn install
   ```

3. **Run the development server:**
   Using npm:
   ```bash
   npm run dev
   ```
   Or using yarn:
   ```bash
   yarn dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173` to view the project.

---

## Usage
This template is designed for customization. Update the `navItems` array to add or remove menu items in the sidebar:

```javascript
const navItems = [
    { title: "Home", url: "/home", icon: Home, items: [] },
    { title: "Inbox", url: "/inbox", icon: Inbox, items: [] },
];
```

Use any Shadcn UI component to enhance your project as needed. Visit the [Shadcn UI documentation](https://ui.shadcn.com/docs) for more component options and customization guides.

---

## File Structure
```
shadcn-admin-panel-template/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── layouts/
│   │   └── ui/
│   │       ├── AppSidebar.jsx
│   │       ├── Header.jsx
│   │       ├── KBDActions.jsx
│   │       ├── mode-toggle.jsx
│   │       ├── RenderResults.jsx
│   │       ├── ResultItems.jsx
│   │       └── theme-provider.jsx
│   ├── hooks/
│   │   └── use-mobile.jsx
│   ├── lib/
│   │   └── utils.js
│   ├── pages/
│   │   ├── auth/
│   │   └── Home.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── components.json
├── eslint.config.js
├── index.html
├── package.json
└── README.md

```

---

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any features or bug fixes.

---

## License
This project is open-source and available under the [MIT License](./LICENSE).

---

## Author
Created by [Daxesh Modi](https://github.com/divy6122000/). Feel free to reach out for collaboration or suggestions!

---

