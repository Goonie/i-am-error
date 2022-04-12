interface SpriteData {
  name: string;
  width: number;
  height: number;
  palette: Record<number, string>;
  imageData: number[][];
}

export { SpriteData };
