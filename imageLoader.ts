export default function imageLoader({ src, width, quality }: { src: string; width: number; quality?: number }) {
  const isProd = process.env.NODE_ENV === "production";
  const basePath = isProd ? "/bioearthx" : "";
  
  return `${basePath}${src}?w=${width}&q=${quality || 75}`;
}