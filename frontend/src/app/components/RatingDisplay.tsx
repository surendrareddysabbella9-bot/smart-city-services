import { Star } from "lucide-react";

interface RatingDisplayProps {
  rating: number;
  maxRating?: number;
  size?: number;
  showNumber?: boolean;
  reviewCount?: number;
}

export function RatingDisplay({
  rating,
  maxRating = 5,
  size = 18,
  showNumber = true,
  reviewCount,
}: RatingDisplayProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1">
        {[...Array(maxRating)].map((_, index) => {
          const starValue = index + 1;
          const isFilled = starValue <= Math.floor(rating);
          const isHalfFilled =
            starValue === Math.ceil(rating) && rating % 1 !== 0;

          return (
            <Star
              key={index}
              size={size}
              className={
                isFilled
                  ? "text-yellow-500 fill-yellow-500"
                  : isHalfFilled
                  ? "text-yellow-500 fill-yellow-300"
                  : "text-gray-300"
              }
            />
          );
        })}
      </div>
      {showNumber && (
        <div className="flex items-center gap-1">
          <span className="font-semibold">{rating.toFixed(1)}</span>
          {reviewCount !== undefined && (
            <span className="text-sm text-gray-500">({reviewCount})</span>
          )}
        </div>
      )}
    </div>
  );
}
