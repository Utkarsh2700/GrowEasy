"use client";
import React, { useState } from "react";
import BannerImgComp from "@/components/BannerImgComp";
import EditBannerTemplate from "@/components/EditBannerTemplate";
import banners from "../../data/adBanners.json";
import { AdBanner } from "@/types";
import Image from "next/image";

export const Home: React.FC = () => {
  const [adBanners, setAdBanners] = useState<AdBanner[]>(banners);
  const [editableBanner, setEditingBanner] = useState<AdBanner | null>(null);

  const handleEdit = (id: number) => {
    const banner = adBanners.find((b) => b.id === id);
    if (banner) {
      setEditingBanner(banner);
    }
  };
  const handleSave = (updatedBanner: AdBanner) => {
    setAdBanners(
      adBanners.map((b) => (b.id === updatedBanner.id ? updatedBanner : b))
    );
    setEditingBanner(null);
  };

  const handleClose = () => {
    setEditingBanner(null);
  };

  return (
    <div className="flex flex-wrap mx-72 my-4 items-center justify-center ">
      {adBanners.map((banner) => (
        <BannerImgComp
          key={banner.id}
          banner={banner}
          onEdit={handleEdit}
          flag={false}
        />
      ))}
      {editableBanner && (
        <EditBannerTemplate
          banners={banners}
          banner={editableBanner}
          onSave={handleSave}
          onClose={handleClose}
        />
      )}
    </div>
  );
};

export default Home;
