declare module "embla-carousel-autoplay" {
  import { EmblaCarouselType } from "embla-carousel";

  export default function Autoplay(options?: {
    delay?: number;
    stopOnInteraction?: boolean;
    root?: HTMLElement | null;
    active?: boolean;
  }): (embla: EmblaCarouselType) => void;
}
