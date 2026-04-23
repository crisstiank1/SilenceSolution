export interface MediaItem {
  id?: string;
  type: 'image' | 'video';
  src: string;
  poster?: string;
  title?: string;
  alt?: string;
}
