export const getBasePath = () => {
  return process.env.NODE_ENV === "production" ? "/bioearthx" : "";
};

export const getImagePath = (src: string) => {
  const basePath = getBasePath();
  // Remove leading slash from src if it exists to avoid double slashes
  const cleanSrc = src.startsWith('/') ? src.slice(1) : src;
  return `${basePath}/${cleanSrc}`;
};