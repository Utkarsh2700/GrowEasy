import React from "react";
import { AdBanner } from "@/types";
import { FaPen } from "react-icons/fa6";

type BannerImageCompProps = {
  banner: AdBanner;
  onEdit: (id: number) => void;
  className?: string;
  flag: boolean;
};
const defaultClassName = "w-[50%] h-full";
const BannerImgComp: React.FC<BannerImageCompProps> = ({
  banner,
  onEdit,
  className,
  flag,
}) => {
  return (
    <div className={className || defaultClassName}>
      {banner.isOpposite ? (
        <div
          style={{
            position: "relative",
            height: "300px",
            width: "100%",
            backgroundImage: `url(${banner.image}),  url(${banner.background})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: `${banner.bgPos}`,
            backgroundSize: `${banner.bgSize}`,
            backgroundBlendMode: "color-burn",
            padding: "1rem",
            color: `${banner.text}`,
          }}
        >
          <h2 className="text-2xl font-bold py-12">{banner.title}</h2>
          <p
            className={`text-${banner.size} font-${banner.weight}  w-[${banner.width}%] py-4`}
            style={{ width: `${banner.width}` }}
          >
            {banner.description}
          </p>
          <button>{banner.cta}</button>
          <button
            className="absolute top-2 right-3"
            onClick={() => onEdit(banner.id)}
          >
            <FaPen />
          </button>
        </div>
      ) : (
        <div
          style={{
            position: "relative",
            height: "300px",
            width: "100%",
            backgroundImage: `url(${banner.background}),  url(${banner.image})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: `${banner.bgPos}`,
            backgroundSize: `${banner.bgSize}`,
            padding: "1rem",
            color: `${banner.text}`,
          }}
        >
          <h2 className="text-2xl font-bold py-12">{banner.title}</h2>
          <p
            className={`text-${banner.size} font-${banner.weight}  w-${banner.width} py-4`}
            style={{ width: `${banner.width}` }}
          >
            {banner.description}
          </p>
          <button className="absolute left-8">{banner.cta}</button>
          {flag ? (
            <button
              className="absolute top-3 right-4 hidden"
              onClick={() => onEdit(banner.id)}
            >
              <FaPen></FaPen>
            </button>
          ) : (
            <button
              className="absolute top-3 right-4"
              onClick={() => onEdit(banner.id)}
            >
              <FaPen></FaPen>
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default BannerImgComp;
