"use client";
import React, { useEffect, useMemo, useState } from "react";
import { SwiperProps } from "../../types/swiperProps";
import Image from "next/image";
import DetailImgModal from "./DetailImgModal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { showModal } from "@/features/detailImageModal/detailImageModalSlice";

const Swiper = ({ images }: SwiperProps) => {
  const [startIndex, setStartIndex] = useState(0);
  const [currentLastIndex, setCurrentLastIndex] = useState(3);
  const [updateArr, setUpdateArr] = useState<string[]>([]);
  const [prevDisabled, setPrevDisabled] = useState(false);
  const [lastDisabled, setLastDisabled] = useState(false);

  const imageArr = useMemo(() => images, [images]);
  const lastIndex = imageArr.length;

  const isVisible = useSelector(
    (state: RootState) => state.detailImgModal.isVisible
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const newArr = imageArr.slice(startIndex, currentLastIndex);
    setUpdateArr(newArr);
  }, [startIndex, currentLastIndex, imageArr]);

  useEffect(() => {
    setPrevDisabled(startIndex <= 0);
    setLastDisabled(currentLastIndex >= imageArr.length);
  }, [startIndex, currentLastIndex, imageArr]);

  const prevPaging = () => {
    if (startIndex <= 0) return;
    setStartIndex((prev) => prev - 1);
    setCurrentLastIndex((prev) => prev - 1);
  };

  const lastPaging = () => {
    if (currentLastIndex >= lastIndex) return;
    setStartIndex((prev) => prev + 1);
    setCurrentLastIndex((prev) => prev + 1);
  };

  return (
    <div className="w-full h-44 flex justify-center items-center gap-4">
      {isVisible && <DetailImgModal />}
      <span
        onClick={prevPaging}
        className={`text-3xl select-none ${
          prevDisabled ? "text-gray-400" : "cursor-pointer"
        }`}
      >
        ◀
      </span>
      {updateArr.map((img, index) => (
        <Image
          onClick={() => dispatch(showModal(img))}
          src={img}
          alt="이미지"
          key={index}
          width={260}
          height={176}
          className="w-1/4 h-44 rounded-xl cursor-pointer object-cover"
        />
      ))}
      <span
        onClick={lastPaging}
        className={`text-3xl select-none ${
          lastDisabled ? "text-gray-400" : "cursor-pointer"
        }`}
      >
        ▶
      </span>
    </div>
  );
};

export default Swiper;
