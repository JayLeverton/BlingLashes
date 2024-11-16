import React, { useState } from "react";
import CarouselCard from "./CarouselCard";

// Define the shape of a card
interface Testimonial {
  pfp: string;
  name: string;
  date: string;
  stars: number;
  reviewText: string;
}

// Define props for the Carousel component
interface CarouselProps {
  testimonials: Testimonial[];
}

const Carousel: React.FC<CarouselProps> = ({ testimonials }) => {
  // State to track the current slide index
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (currentIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="carousel">
      <button className="carousel-button" onClick={prevSlide}>
        ‹
      </button>
      <div className="carousel-container">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: "transform 0.5s ease",
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div className="carousel-slide" key={index}>
              <CarouselCard
                pfp={testimonial.pfp}
                name={testimonial.name}
                date={testimonial.date}
                stars={testimonial.stars}
                reviewText={testimonial.reviewText}
              />
            </div>
          ))}
        </div>
      </div>
      <button className="carousel-button" onClick={nextSlide}>
        ›
      </button>
    </div>
  );
};

export default Carousel;
