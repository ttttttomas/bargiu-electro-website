import {Roboto, Open_Sans} from "next/font/google";

export const roboto = Roboto({
  weight: ["100", "200", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const openSans = Open_Sans({
  weight: ["300", "400", "500", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});
