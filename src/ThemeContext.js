import { createContext } from "react";

// const [theme, setTheme] = useState("darkblue")

const ThemeContext = createContext("black", () => {});

export default ThemeContext;
