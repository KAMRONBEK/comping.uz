import { FC, ReactNode } from "react";
import { useSwiper } from "swiper/react";

interface SwiperButtonNextProps {
  children: ReactNode;
  className?: string;
}

export const SwiperButtonNext: FC<SwiperButtonNextProps> = ({
  children,
  className,
}) => {
  const swiper = useSwiper();
  return (
    <button
      className={className}
      onClick={() => swiper.slideNext()}
      style={{
        background: "rgba(14, 14, 14, 0.32)",
      }}
    >
      {children}
    </button>
  );
};
