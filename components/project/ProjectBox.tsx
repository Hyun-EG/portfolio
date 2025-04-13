"use client";

import TitleBox from "../common/TitleBox";
import Card from "./Card";
import imgAircnc from "../../public/images/image-aircnc.webp";
import imgDevtube from "../../public/images/image-devtube.webp";
import imgIntranet from "../../public/images/image-intranet.webp";
import imgKarb from "../../public/images/image-karb.webp";
import imgSellweb from "../../public/images/image-sellweb.webp";
import imgPpoppis from "../../public/images/image-ppoppis.webp";
import Badge from "../common/Badge";
import ProjectModal from "./ProjectModal";
import { useDispatch } from "react-redux";
import { setSelectedProject } from "../../features/selectedProject/selectedProjectSlice";

const ProjectBox = () => {
  const dispatch = useDispatch();

  const handleCardClick = (projectName: string) => {
    dispatch(setSelectedProject(projectName));
  };

  return (
    <div className="w-full min-h-screen pl-96 py-12 bg-bgBlack text-white">
      <TitleBox>PROJECTS</TitleBox>
      <ProjectModal />
      <div className="w-full flex flex-col px-12 py-4">
        <div className="flex flex-wrap gap-4">
          <Card
            projectImg={imgSellweb}
            projectName="Sellweb"
            projectDesc="웹 템플릿 판매 사이트입니다."
            badges={
              <div className="flex items-center gap-1">
                <Badge content="팀" color="blue" />
                <Badge content="사이드" color="sky" />
                <Badge content="FE" color="purple" />
              </div>
            }
            onClick={() => handleCardClick("sellweb")}
          />
          <Card
            projectImg={imgKarb}
            projectName="KARB (한국광고 심의기관)"
            projectDesc="광고심의사이트입니다."
            badges={
              <div className="flex items-center gap-1">
                <Badge content="팀" color="blue" />
                <Badge content="기업연계" color="sky" />
                <Badge content="PM UXUI Designer FE BE" color="purple" />
              </div>
            }
            onClick={() => handleCardClick("karb")}
          />
          <Card
            projectImg={imgAircnc}
            projectName="Aircnc"
            projectDesc="근처 숙박업소 예약사이트입니다."
            badges={
              <div className="flex items-center gap-1">
                <Badge content="팀" color="blue" />
                <Badge content="사이드" color="sky" />
                <Badge content="FE BE" color="purple" />
              </div>
            }
            onClick={() => handleCardClick("aircnc")}
          />
          <Card
            projectImg={imgDevtube}
            projectName="Devtube"
            projectDesc="youtube 스튜디오 사이트입니다."
            badges={
              <div className="flex items-center gap-1">
                <Badge content="팀" color="blue" />
                <Badge content="사이드" color="sky" />
                <Badge content="FE" color="purple" />
              </div>
            }
            onClick={() => handleCardClick("devtube")}
          />
          <Card
            projectImg={imgIntranet}
            projectName="Intranet"
            projectDesc="인트라넷 사이트입니다"
            badges={
              <div className="flex items-center gap-1">
                <Badge content="팀" color="blue" />
                <Badge content="토이" color="orange" />
                <Badge content="FE" color="purple" />
              </div>
            }
            onClick={() => handleCardClick("intranet")}
          />
          <Card
            projectImg={imgPpoppis}
            projectName="뽀삐스"
            projectDesc="저만의 쟈비스입니다."
            badges={
              <div className="flex items-center gap-1">
                <Badge content="개인" color="olive" />
                <Badge content="토이" color="orange" />
              </div>
            }
            onClick={() => handleCardClick("ppoppis")}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
