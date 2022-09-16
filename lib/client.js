import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "7x133llw",
  dataset: "production",
  apiVersion: "2022-03-10",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

// Smart VS Themes that the colors change and adapt based on what you're doing.
// For example the color of a certain variable can change based on its type.
// AN engine to add animations to vs code it self, such as flashing alerts and even sounds/
