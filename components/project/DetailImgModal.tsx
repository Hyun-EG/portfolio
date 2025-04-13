import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { hideModal } from "@/features/detailImageModal/detailImageModalSlice";

const DetailImgModal = () => {
  const dispatch = useDispatch();
  const imageUrl = useSelector(
    (state: RootState) => state.detailImgModal.imageUrl
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="relative w-2/3 h-4/5 bg-white rounded-xl">
        <span
          onClick={() => dispatch(hideModal())}
          className="absolute flex justify-center items-center top-4 right-4 rounded-full w-10 h-10 bg-black text-white cursor-pointer z-10"
        >
          ✕
        </span>
        <Image
          src={imageUrl}
          alt="확대 이미지"
          fill
          className="object-contain rounded-xl"
        />
      </div>
    </div>
  );
};

export default DetailImgModal;
