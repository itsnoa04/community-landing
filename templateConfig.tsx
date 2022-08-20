import ShadeGenerator, { Shade } from "shade-generator";

const options = {
  community: {
    name: "The Emulation Authority", // The name of the community
    tagline: "The Emulation Authority is a community of emulation enthusiasts.", // The description of the community
    description:
      "Magna sunt do non esse ullamco anim sunt sint deserunt consectetur exercitation elit. Aliqua enim amet occaecat culpa dolor dolore. Magna culpa sit irure aliqua nisi aliquip labore est amet laborum labore et ex. Pariatur qui aute laboris ipsum consequat excepteur consequat labore aliqua labore. Mollit elit aliqua est occaecat voluptate id id Lorem voluptate commodo aliqua. Enim eiusmod proident sit amet ipsum.", // Rules and information about the community
    logo: "https://i.ibb.co/Ms4hFcZ/Vector-1.png", // The logo of the community
    color: "#8C4BC5", // main color
    banner: {
      mobile: "", // The banner of the community for mobile [image or video]
      tablet: "", // The banner of the community for tablet [image or video]
      desktop: "", // The banner of the community for desktop [image or video]
      dynamic: "", // The banner of the community [React Component]
    },
  },
};

// Shade Generator Logic

export const colorMap: any = ShadeGenerator.hue(options?.community.color)
  .config({
    "10": 0.9,
    "20": 0.8,
    "30": 0.7,
    "40": 0.6,
    "50": 0.5,
    "60": 0.4,
    "70": 0.3,
    "80": 0.2,
    "90": 0.1,
    "100": 0,
    "200": 0.9,
    "300": 0.8,
    "400": 0.7,
    "500": 0.6,
    "600": 0.5,
    "700": 0.4,
    "800": 0.3,
    "900": 0.2,
    "1000": 0.1,
  })
  .shadesMap("hex");

export default options;
