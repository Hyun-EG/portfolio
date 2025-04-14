// ProjectData.ts
import { ProjectDataType } from "@/types/projectDataType";

export const projectData: ProjectDataType = {
  sellweb: {
    mainColor: "#DB2777",
    title: "Sell Web (셀웹)",
    description:
      "Next.js API Routes를 활용한 서버리스 아키텍처 기반의 풀스택 프로젝트입니다. 결제 모듈과 외부 라이브러리 연동, OAuth 기반 인증 및 쿠키 관리, Tailwind CSS를 활용한 UI 구현, 기획부터 Figma 디자인까지 전 과정을 2人에서 경험하며 실전 중심의 역량 강화를 목표로 진행했습니다.",
    date: "2025.01.07 ~ 진행중",
    team: "FE 2명",
    images: {
      img1: "/images/projects/sellweb/home.PNG",
      img2: "/images/projects/sellweb/login.PNG",
      img3: "/images/projects/sellweb/signup.PNG",
    },
    keyFeatures: [
      "소셜 로그인 및 자체 인증 시스템 병행 (Naver SMTP 연동)",
      "템플릿 목록 및 결제 기능",
      "사용자 문의 / 공지 사항 / 구매 내역 / 찜 내역 / 마이 페이지",
      "페이지네이션, 무한스크롤링",
      "관리자 전용 페이지: 공지/문의관리, 템플릿 CRUD, 광고 관리, 인기 템플릿 차트 시각화",
    ],
    skills: [
      {
        skill: "React",
        content:
          "자바스크립트 기반의 UI 라이브러리로, 컴포넌트 단위의 재사용 가능한 인터페이스를 구성할 수 있습니다.",
      },
      {
        skill: "Next",
        content:
          "React 기반 프레임워크로, 서버사이드 렌더링과 정적 사이트 생성을 지원하여 SEO에 유리합니다.",
      },
      {
        skill: "Typescript",
        content:
          "자바스크립트에 타입을 추가한 언어로, 컴파일 단계에서 오류를 방지하고 코드 안정성을 높입니다.",
      },
      {
        skill: "TailwindCSS",
        content:
          "유틸리티 퍼스트 CSS 프레임워크로, 클래스 조합만으로 빠르게 반응형 UI를 구현할 수 있습니다.",
      },
      {
        skill: "MongoDB",
        content:
          "문서 지향 NoSQL 데이터베이스로, 유연한 스키마와 JSON 기반의 데이터 구조를 지원합니다.",
      },
      {
        skill: "Vercel",
        content:
          "정적 및 서버리스 웹 애플리케이션을 손쉽게 배포할 수 있는 플랫폼으로, Next.js에 최적화되어 있습니다.",
      },
      {
        skill: "PWA",
        content:
          "웹 앱을 네이티브 앱처럼 동작하게 하는 기술로, 오프라인 사용과 푸시 알림 등을 지원합니다.",
      },
    ],
    contribution: [
      {
        title: "프로젝트 기획 및 구성",
        content: [
          "외주 개발 플랫폼들을 참고하여 유사 서비스의 기능과 흐름을 분석",
          "채택된 요소 프로젝트에 반영",
        ],
      },
      {
        title: "디자인 시안 제작 및 UI 설계",
        content: [
          "Figma를 활용해 전체 디자인 시안을 총괄",
          "공통 컴포넌트를 분리하여 일관된 UI를 설계",
        ],
      },
      {
        title: "스키마 설계 중요 데이터 해시 처리",
        content: [
          "Mongoose 스키마 모델을 활용한 데이터 일관성 처리",
          "민감한 데이터 해시 처리 보안 강화",
        ],
      },
      {
        title: "네이버 SMTP 이메일 인증 구현",
        content: [
          "라이브러리 nodemailer 사용",
          "전송된 인증번호 DB 저장(해시처리, compare 일치비교) => 인증 성공 시 또는 일정 시간이 지나면 자동 삭제 처리",
        ],
      },
      {
        title: "사용자별 페이지 접근 제어",
        content: ["useAuth로 쿠키와 DB의 ID를 비교하여 접근 권한 부여"],
      },
      {
        title: "통합 관리자 페이지 구현",
        content: [
          "모달을 활용해 한 페이지에서 효율적으로 관리",
          "고객 문의내역 관리 미완료된 문의만 노출",
          "공지사항 및 프로젝트 템플릿 관리",
        ],
      },
    ],
  },
  karb: {
    mainColor: "#006597",
    title: "KARB (한국광고 심의기관)",
    description:
      "외주 개발 사기이슈가 많아서 미리 만들어놓고 파는 템플릿 사이트를 만들어봤습니다",
    date: "2024.08.05 ~ 2024.09.20",
    team: "PM 3명 UI/UX 3명 FE 3명 BE 3명",
    images: {
      img1: "/images/projects/sellweb/home.PNG",
      img2: "/images/projects/sellweb/login.PNG",
      img3: "/images/projects/sellweb/signup.PNG",
    },
    keyFeatures: [""],
    skills: [
      {
        skill: "React",
        content: "정말 열심히 했어요",
      },
    ],
    contribution: [
      {
        title: "디자인 시안 제작 및 UI 설계",
        content: [
          "Figma를 활용해 전체 디자인 시안을 총괄하고, 공통 컴포넌트를 분리하여 일관된 UI를 설계했습니다.",
        ],
      },
    ],
  },
  aircnc: {
    mainColor: "#FF385C",
    title: "Aircnc",
    description:
      "외주 개발 사기이슈가 많아서 미리 만들어놓고 파는 템플릿 사이트를 만들어봤습니다",
    date: "2024.06.17 ~ 2024.07.07",
    team: "FE 3명 BE 4명",
    images: {
      img1: "/images/projects/sellweb/home.PNG",
      img2: "/images/projects/sellweb/login.PNG",
      img3: "/images/projects/sellweb/signup.PNG",
    },
    keyFeatures: [""],
    skills: [
      {
        skill: "React",
        content: "정말 열심히 했어요",
      },
    ],
    contribution: [
      {
        title: "디자인 시안 제작 및 UI 설계",
        content: [
          "Figma를 활용해 전체 디자인 시안을 총괄하고, 공통 컴포넌트를 분리하여 일관된 UI를 설계했습니다.",
        ],
      },
    ],
  },
  devtube: {
    mainColor: "#F90103",
    title: "Devtube",
    description:
      "외주 개발 사기이슈가 많아서 미리 만들어놓고 파는 템플릿 사이트를 만들어봤습니다",
    date: "2024.05.27 ~ 2024.06.09",
    team: "FE 4명",
    images: {
      img1: "/images/projects/sellweb/home.PNG",
      img2: "/images/projects/sellweb/login.PNG",
      img3: "/images/projects/sellweb/signup.PNG",
    },
    keyFeatures: [""],
    skills: [
      {
        skill: "React",
        content: "정말 열심히 했어요",
      },
    ],
    contribution: [
      {
        title: "디자인 시안 제작 및 UI 설계",
        content: [
          "Figma를 활용해 전체 디자인 시안을 총괄하고, 공통 컴포넌트를 분리하여 일관된 UI를 설계했습니다.",
        ],
      },
    ],
  },
  intranet: {
    mainColor: "#ED234B",
    title: "Intranet",
    description:
      "외주 개발 사기이슈가 많아서 미리 만들어놓고 파는 템플릿 사이트를 만들어봤습니다",
    date: "2025/01/07 ~ 진행중",
    team: "FE 4명",
    images: {
      img1: "/images/projects/sellweb/home.PNG",
      img2: "/images/projects/sellweb/login.PNG",
      img3: "/images/projects/sellweb/signup.PNG",
    },
    keyFeatures: [""],
    skills: [
      {
        skill: "React",
        content: "정말 열심히 했어요",
      },
    ],
    contribution: [
      {
        title: "디자인 시안 제작 및 UI 설계",
        content: [
          "Figma를 활용해 전체 디자인 시안을 총괄하고, 공통 컴포넌트를 분리하여 일관된 UI를 설계했습니다.",
        ],
      },
    ],
  },
  ppoppis: {
    mainColor: "#020202",
    title: "PPOPPIS",
    description:
      "외주 개발 사기이슈가 많아서 미리 만들어놓고 파는 템플릿 사이트를 만들어봤습니다",
    date: "2025/03/30 ~ 진행중",
    team: "개인",
    images: {
      img1: "/images/projects/sellweb/home.PNG",
      img2: "/images/projects/sellweb/login.PNG",
      img3: "/images/projects/sellweb/signup.PNG",
    },
    keyFeatures: [""],
    skills: [
      {
        skill: "React",
        content: "정말 열심히 했어요",
      },
    ],
    contribution: [
      {
        title: "디자인 시안 제작 및 UI 설계",
        content: [
          "Figma를 활용해 전체 디자인 시안을 총괄하고, 공통 컴포넌트를 분리하여 일관된 UI를 설계했습니다.",
        ],
      },
    ],
  },
};
