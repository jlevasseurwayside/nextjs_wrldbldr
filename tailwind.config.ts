import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: [...fontFamily.sans],
      },
      colors: {
        "brand-earthy": "#A67440",
        "brand-blue": "#75D1F2",
        "brand-map": "#BFA36F",
      },
    },
  },
  plugins: [],
} satisfies Config;
