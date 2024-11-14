import React, { useState } from "react";

// Define the shape of the Card's props
interface CardProps {
  pfp: string;
  name: string;
  date: string;
  stars: number;
  reviewText: string;
}

const CarouselCard: React.FC<CardProps> = ({
  pfp,
  name,
  date,
  stars,
  reviewText,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const CHARACTER_LIMIT = 135;

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const shouldTruncate = reviewText.length > CHARACTER_LIMIT;

  const displayText =
    isExpanded || !shouldTruncate
      ? reviewText
      : `${reviewText.slice(0, CHARACTER_LIMIT)}...`;

  return (
    <div className={`carousel-card ${isExpanded ? "expanded" : ""}`}>
      <div className="card-pfp-name-date-logo">
        <img className="pfp" src={pfp} />
        <div className="card-name-date-logo">
          <div className="card-name-date">
            <h3 className="card-name">{name}</h3>
            <p className="card-date">{date}</p>
          </div>
          {/* google logo */}
          <svg
            className="card-logo"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
            <path d="M1 1h22v22H1z" fill="none" />
          </svg>
        </div>
      </div>
      <div className="star-rating">
        {Array.from({ length: stars }).map((_, index) => (
          <img
            key={index}
            className="star-icon"
            src="./assets/googleStar.svg"
            alt="star"
          />
        ))}
      </div>
      <div className={`review-text ${isExpanded ? "expanded" : ""}`}>
        <p>{displayText}</p>
      </div>

      {shouldTruncate && (
        <button onClick={toggleReadMore} className="read-more-button">
          {isExpanded ? "Show Less" : "Read More"}
        </button>
      )}
    </div>
  );
};

export default CarouselCard;
