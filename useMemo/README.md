# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


UseMemo hook
a. Structure: 
1. use callback ftn
2. In call back ftn their are two parameters 
3. One is function that contain heavy calculation data. Which is not necessary for each event when page get rendered.
4. Second is dependency array on which the function is dependent for rendering.
5. As when page get loaded it will be executed once.
