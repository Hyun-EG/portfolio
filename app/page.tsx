import IntroBox from "@/components/intro/IntroBox";
import ProfileBox from "@/components/profile/ProfileBox";
import ProjectBox from "@/components/project/ProjectBox";
import EduBox from "@/components/education/EduBox";
import OutroBox from "@/components/outro/OutroBox";
import Nav from "@/components/nav/NavBox";

export default function Home() {
  return (
    <>
      <Nav />
      <IntroBox />
      <ProfileBox />
      <ProjectBox />
      <EduBox />
      <OutroBox />
    </>
  );
}
