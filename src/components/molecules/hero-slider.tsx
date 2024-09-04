import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

function HeroSlider() {
  return (
    <Carousel
      className="w-full rounded-xl"
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent className="rounded-xl">
        {Array.from({ length: 4 }).map((_, index) => (
          <CarouselItem key={index} className="rounded-xl">
            <div className="rounded-xl">
              <img
                src={`public/img/imgae-hero-${index}.webp`}
                alt="hero-slider"
                className="rounded-xl h-[600px] max-h-[600px] w-full object-cover"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default HeroSlider;
