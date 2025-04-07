const Nav = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <div
      className={`z-10 left-0 w-80 h-screen px-8 py-12 flex flex-col gap-2 text-center bg-bgGrey text-big font-bold z-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <span
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        className="cursor-pointer"
      >
        Intro
      </span>
      <span className="cursor-pointer">Profile</span>
      <span className="cursor-pointer">Project</span>
      <span className="cursor-pointer">Education</span>
    </div>
  );
};

export default Nav;
