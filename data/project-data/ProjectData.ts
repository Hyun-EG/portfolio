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
    images: [
      "/images/projects/sellweb/home.PNG",
      "/images/projects/sellweb/login.PNG",
      "/images/projects/sellweb/signup.PNG",
    ],
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
      "해당 프로젝트는 뉴로플로우 측과 연계하여 진행한 기업연계 프로젝트입니다. AI 도입 이전 단계에서 기업 측이 전달한 요구사항을 바탕으로, 기획자, 디자이너, 프론트엔드, 백엔드 등 총 12인의 팀원이 협업하여 개발을 진행하였습니다. 회사 내부에서 사용할 예정인 웹앱 형태의 사이트로, 기존 수작업으로 이뤄지던 작업 배분을 자동화하고, 직원 관리 및 할당량을 시각화하여 대시보드에서 실시간으로 확인할 수 있는 기능을 제공합니다.",
    date: "2024.08.05 ~ 2024.09.20",
    team: "PM 3명 UI/UX 3명 FE 3명 BE 3명",
    images: [
      "/images/projects/karb/image-sign-up.webp",
      "/images/projects/karb/image-login.webp",
      "/images/projects/karb/image-find-id.webp",
      "/images/projects/karb/image-find-password.webp",
      "/images/projects/karb/image-dash-board.webp",
      "/images/projects/karb/image-same-ad.webp",
      "/images/projects/karb/image-same-ad-inspection.webp",
      "/images/projects/karb/image-sign-up-req.webp",
      "/images/projects/karb/image-member-Info.webp",
      "/images/projects/karb/image-task-assign.webp",
      "/images/projects/karb/image-worker-list.webp",
    ],
    keyFeatures: [
      "로그인 / 회원가입 / 아이디·비밀번호 찾기",
      "가입 승인 관리",
      "회원 정보 관리",
      "권한에 따라 관리자/직원용 네브바 및 대시보드 분기",
      "관리자: 직원별 할당량 그래프 시각화, 작업자 관리 및 회원 정보 관리 가능",
      "동일/지적 광고 목록 확인 및 심의 리뷰 추가·삭제",
      "동일 광고는 동일/비동일로 분류되어 표시",
      "직원별 작업 현황(완료/미완료/전체) 리스트 제공",
      "광고 자동 배정 기능",
    ],
    skills: [
      {
        skill: "Vite",
        content:
          "빠른 번들링과 개발 서버 구동을 지원하는 빌드 툴로, React와 함께 사용하여 개발 생산성을 높였습니다.",
      },
      {
        skill: "React",
        content:
          "자바스크립트 기반의 UI 라이브러리로, 컴포넌트 단위의 재사용 가능한 인터페이스를 구성할 수 있습니다.",
      },
      {
        skill: "Redux",
        content:
          "상태 관리를 위한 라이브러리로, 전역 상태를 효율적으로 관리하고 컴포넌트 간 데이터 흐름을 명확히 했습니다.",
      },
      {
        skill: "Typescript",
        content:
          "자바스크립트에 타입을 추가한 언어로, 컴파일 단계에서 오류를 방지하고 코드 안정성을 높입니다.",
      },
      {
        skill: "Netlify",
        content:
          "정적 웹사이트를 간편하게 배포할 수 있는 플랫폼으로, CI/CD 파이프라인을 자동화하여 배포 효율을 향상시켰습니다.",
      },
      {
        skill: "Sass",
        content:
          "CSS 전처리기로, 변수, 믹스인 등의 기능을 활용해 스타일을 더 구조적이고 유지보수하기 쉽게 구성했습니다.",
      },
      {
        skill: "Jira",
        content:
          "애자일 방식의 프로젝트 관리 도구로, 태스크 관리와 협업에 활용하여 일정과 작업 흐름을 체계적으로 관리했습니다.",
      },
      {
        skill: "Husky",
        content:
          "Git hook을 관리하기 위한 도구로, 커밋 전 코드 스타일 체크나 테스트 실행을 자동화하여 코드 품질을 유지했습니다.",
      },
    ],
    contribution: [
      {
        title: "UX 테스트 피드백 반영",
        content: [
          "PM 및 디자이너 팀에서 진행한 사용성 테스트 피드백을 바탕으로 회의를 진행하여 UI/UX 개선 사항 도출 및 기능 개선",
        ],
      },
      {
        title: "공통 레이아웃 구조 빠른 구현",
        content: [
          "팀원간 빠른 작업을 위해 헤더, 네브바, 콘텐츠 영역 등 핵심 레이아웃을 빠르게 구축",
          "로그인 권한에 따라 관리자/직원용 네브바를 동적으로 분기 처리",
        ],
      },
      {
        title: "대량의 광고 데이터에 의한 성능저하 이슈",
        content: [
          "Intersection Observer와 useRef를 활용한 무한 스크롤 방식 도입",
          "10개씩 데이터를 페칭하여 초기 렌더링 성능 및 사용자 체감 속도 개선",
        ],
      },
      {
        title: "라우트 단위 지연 로딩 적용",
        content: [
          "React.lazy와 Suspense를 활용하여 모든 라우트 컴포넌트를 지연 로딩",
          "초기 번들 사이즈를 줄이고, 페이지 진입 속도 향상 및 사용자 경험 개선",
        ],
      },
      {
        title: "가입 요청 관리 / 회원 관리",
        content: [
          "가입 승인/거절 처리, 승인된 회원만 자격 부여",
          "회원 정보 조회 및 삭제 기능",
        ],
      },
      {
        title: "Jira 연동을 통한 커밋 추적",
        content: [
          "Git 커밋 메시지에 Jira 커밋 번호를 포함시켜 커밋 내역이 Jira에 자동 반영되도록 연동.",
          "백엔드와 협업, PM 및 디자이너들이 실시간으로 진행 상황을 확인할 수 있도록 함",
        ],
      },
    ],
  },
  aircnc: {
    mainColor: "#FF385C",
    title: "Aircnc",
    description:
      "에어비엔비를 레퍼런스로 참고하여 제작한 커스텀 에어씨엔씨입니다. .지역 입력을 통한 근처 숙소 예약 기능 제공합니다",
    date: "2024.06.17 ~ 2024.07.07",
    team: "FE 3명 BE 4명",
    images: [
      "/images/projects/karb/image-sign-up.webp",
      "/images/projects/karb/image-login.webp",
      "/images/projects/karb/image-find-id.webp",
    ],
    keyFeatures: [""],
    skills: [
      {
        skill: "Vite",
        content:
          "빠른 번들링과 개발 서버 구동을 지원하는 빌드 툴로, React와 함께 사용하여 개발 생산성을 높였습니다.",
      },
      {
        skill: "React",
        content:
          "컴포넌트 기반 UI 라이브러리로, 재사용성과 유지보수가 뛰어난 인터페이스를 구축했습니다.",
      },
      {
        skill: "Redux",
        content:
          "전역 상태 관리를 통해 복잡한 상태 로직을 체계적으로 관리하고, 예측 가능한 데이터 흐름을 구현했습니다.",
      },
      {
        skill: "React-query",
        content:
          "서버 상태 관리를 위해 사용하였으며, 캐싱과 데이터 동기화를 통해 효율적인 비동기 처리 환경을 구축했습니다.",
      },
      {
        skill: "Styled-Components",
        content:
          "컴포넌트 단위로 스타일을 관리하여 유지보수를 용이하게 하고, 조건부 렌더링에 유연하게 대응했습니다.",
      },
      {
        skill: "Netlify",
        content:
          "정적 웹사이트를 손쉽게 배포하고, CI/CD 연동으로 빠르게 배포 사이클을 구축했습니다.",
      },
      {
        skill: "Husky",
        content:
          "Git hook 설정을 통해 커밋 전 lint 검사 및 포맷팅을 자동화하여 코드 일관성과 품질을 유지했습니다.",
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
    images: [
      "/images/projects/karb/image-sign-up.webp",
      "/images/projects/karb/image-login.webp",
      "/images/projects/karb/image-find-id.webp",
    ],
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
    images: [
      "/images/projects/karb/image-sign-up.webp",
      "/images/projects/karb/image-login.webp",
      "/images/projects/karb/image-find-id.webp",
    ],
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
    images: [
      "/images/projects/karb/image-sign-up.webp",
      "/images/projects/karb/image-login.webp",
      "/images/projects/karb/image-find-id.webp",
    ],
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
