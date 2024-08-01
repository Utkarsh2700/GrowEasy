import React, { useRef, useState } from "react";
import { AdBanner } from "@/types";
import BannerImgComp from "./BannerImgComp";
import { RxCross2 } from "react-icons/rx";
import { FiUpload } from "react-icons/fi";
import Image from "next/image";

type EditBannerTemplateProps = {
  banner: AdBanner;
  onSave: (updateBanner: AdBanner) => void;
  onClose: () => void;
  banners: AdBanner[];
};
const EditBannerTemplate: React.FC<EditBannerTemplateProps> = ({
  banner,
  onSave,
  onClose,
  banners,
}) => {
  const [editableBanner, setEditableBanner] = useState(banner);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEditableBanner({ ...editableBanner, [name]: value });
  };
  const handleSave = () => {
    onSave(editableBanner);
  };

  const imageRef = useRef(null);
  const onImageClick = (url: string) => {
    setEditableBanner({ ...editableBanner, image: url });
  };

  return (
    <div className="sticky bottom-8 w-2/3 h-2/3 bg-[#fff] p-5 border-t text-black border-[#ddd] rounded-lg">
      <div className="top w-full flex justify-center">
        <label className="text-[#696969] absolute top-1 left-1" htmlFor="">
          Edit Banner
        </label>
        <BannerImgComp
          banner={editableBanner}
          onEdit={() => {}}
          className="w-3/4 h-full"
          flag={true}
        />
      </div>
      <div className="bottom w-full flex flex-col space-y-2">
        <label className="text-[#696969]" htmlFor="">
          Images
        </label>
        <div className="imgUpload flex overflow-x-scroll no-scrollbar">
          <div className="upload">
            <label htmlFor="img">
              <FiUpload
                fill="bg-[#696969]"
                size={65}
                className="rounded-full cursor-pointer"
              />
            </label>
            <input className="hidden" type="file" accept="image/*" id="img" />
          </div>
          <div className="images flex">
            {banners.map((bnr) => (
              <div className="image w-[110px] h-[110px]" key={bnr.id}>
                <Image
                  key={bnr.id}
                  className="w-[75px] h-[75px] rounded-full cursor-pointer mx-2"
                  src={`${bnr.image}`}
                  alt=""
                  onClick={() => onImageClick(bnr.image)}
                />
              </div>
            ))}
          </div>
        </div>

        <label className="text-[#696969]" htmlFor="">
          Title
        </label>
        <input
          name="title"
          value={editableBanner.title}
          onChange={handleChange}
          placeholder="Title"
          type="text"
        />
        <label className="text-[#696969]" htmlFor="">
          Description
        </label>
        <input
          type="text"
          name="description"
          value={editableBanner.description}
          onChange={handleChange}
          placeholder="Description"
        />
        <label className="text-[#696969]" htmlFor="">
          Button Text
        </label>
        <input
          name="cta"
          value={editableBanner.cta}
          onChange={handleChange}
          placeholder="CTA"
          type="text"
        />

        <button
          className="w-full bg-[#686fe9] hover:bg-[#8f92d4] rounded-lg py-2"
          onClick={handleSave}
        >
          Save
        </button>
        <button className="absolute top-4 right-3" onClick={onClose}>
          <RxCross2 />
        </button>
      </div>
    </div>
  );
};

export default EditBannerTemplate;
