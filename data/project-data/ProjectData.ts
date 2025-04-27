import { ProjectDataType } from "@/types/projectDataType";

export const projectData: ProjectDataType = {
  sellweb: {
    mainColor: "#DB2777",
    link: "https://github.com/Hyun-EG/SP-sellweb",
    title: "Sell Web (셀웹)",
    description:
      "Next.js API Routes를 활용한 서버리스 아키텍처 기반의 풀스택 프로젝트입니다. 결제 모듈과 외부 라이브러리 연동, OAuth 기반 인증 및 쿠키 관리, Tailwind CSS를 활용한 UI 구현, 기획부터 Figma 디자인까지 전 과정을 2人에서 경험하며 실전 중심의 역량 강화를 목표로 진행했습니다.",
    date: "2025.01.07 ~ 진행중",
    team: "FE 2명",
    images: [
      "/images/projects/sellweb/image-login.webp",
      "/images/projects/sellweb/image-signup.webp",
      "/images/projects/sellweb/image-temp.webp",
      "/images/projects/sellweb/image-temp-detail.webp",
      "/images/projects/sellweb/image-ask.webp",
      "/images/projects/sellweb/image-admin-project.webp",
      "/images/projects/sellweb/image-admin.webp",
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
    link: "https://github.com/Hyun-EG/final-project-ad-queue-AI",
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
        skill: "Redux-toolkit",
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
    link: "https://github.com/Hyun-EG/mini-project-aircnc",
    title: "Aircnc",
    description:
      "에어비엔비를 레퍼런스로 참고하여 제작한 커스텀 에어씨엔씨입니다. 선택한 지역의 근처 숙소 예약 기능 제공합니다.",
    date: "2024.06.17 ~ 2024.07.07",
    team: "FE 3명 BE 4명",
    images: [
      "/images/projects/aircnc/image-home.webp",
      "/images/projects/aircnc/image-login.webp",
      "/images/projects/aircnc/image-sign-up.webp",
      "/images/projects/aircnc/image-searching.webp",
      "/images/projects/aircnc/image-reser.webp",
      "/images/projects/aircnc/image-reser-list.webp",
      "/images/projects/aircnc/image-wish.webp",
    ],
    keyFeatures: [
      "로그인 / 회원가입",
      "설정한 지역 기반 근처 숙소 제공",
      "현위치 기반 근처 숙소 제공",
      "숙소 예약기능, 구매내역, 위시리스트",
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
          "컴포넌트 기반 UI 라이브러리로, 재사용성과 유지보수가 뛰어난 인터페이스를 구축했습니다.",
      },
      {
        skill: "Redux-toolkit",
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
      {
        skill: "Zod",
        content:
          "스키마 기반의 데이터 유효성 검증 라이브러리로, 폼 입력 및 API 응답 데이터를 타입 안전하게 검증하고 처리했습니다.",
      },
    ],

    contribution: [
      {
        title: "지도 기반 위치 서비스 구현",
        content: ["Geolocation API로 사용자 현위치를 추적하고 근처 숙소 제공"],
      },
      {
        title: "카카오 맵 마커 및 상세정보 커스텀",
        content: [
          "카카오 맵의 마커 색상과 정보창 스타일을 커스터마이징하여 브랜드 톤에 맞는 시각적 요소로 구성하고, 사용자에게 직관적인 위치 정보를 제공했습니다.",
        ],
      },
      {
        title: "UI 커스터마이징 및 반응형 설계",
        content: [
          "React Calendar를 활용해 커스텀 캘린더 UI를 구성하고, 미디어 쿼리 기반 반응형 레이아웃으로 다양한 디바이스에 최적화된 화면을 구현했습니다.",
          "화면 크기에 따라 헤더와 네비게이션의 동작을 유동적으로 설정하여 사용자 경험을 개선했습니다.",
        ],
      },
      {
        title: "숙소 리스트 렌더링 최적화",
        content: [
          "지도 마커 렌더링과 동시에 발생하는 성능 저하를 방지하기 위해, 숙소 데이터를 10개씩 불러오는 무한 스크롤 방식으로 최적화했습니다.",
        ],
      },
    ],
  },
  devtube: {
    mainColor: "#F90103",
    link: "https://github.com/Hyun-EG/TP-devtube",
    title: "Devtube",
    description:
      "유튜브 크리에이터를 위한 채널 관리 플랫폼입니다. 시스템 오류로 인한 정정 신청, 문의 접수는 물론 스케줄 관리와 수익 내역 확인 기능을 제공합니다.",
    date: "2024.05.27 ~ 2024.06.09",
    team: "FE 4명",
    images: [
      "/images/projects/devtube/image-login.webp",
      "/images/projects/devtube/image-sign-up.webp",
      "/images/projects/devtube/image-find-id.webp",
      "/images/projects/devtube/image-find-password.webp",
      "/images/projects/devtube/image-dashboard.webp",
      "/images/projects/devtube/image-request.webp",
      "/images/projects/devtube/image-calendar.webp",
      "/images/projects/devtube/image-revenue-list.webp",
    ],
    keyFeatures: [
      "로그인 / 회원가입 / 아이디 찾기 / 비밀번호 찾기",
      "채널 정보 수정",
      "스케줄 관리",
      "문의 기능",
      "수익 내역 시각화",
    ],
    skills: [
      {
        skill: "Vite",
        content:
          "빠른 번들링과 핫 리로딩을 지원하는 프론트엔드 빌드 도구로, 개발 환경을 빠르게 구성할 수 있습니다.",
      },
      {
        skill: "React",
        content:
          "자바스크립트 기반의 UI 라이브러리로, 컴포넌트 단위의 재사용 가능한 인터페이스를 구성할 수 있습니다.",
      },
      {
        skill: "Firebase",
        content:
          "구글에서 제공하는 백엔드 서비스 플랫폼으로, 인증, 데이터베이스, 스토리지 등을 쉽게 연동할 수 있습니다.",
      },
      {
        skill: "Redux Toolkit",
        content:
          "리덕스 상태 관리를 더 쉽고 효율적으로 구성할 수 있게 도와주는 공식 도구 모음입니다.",
      },
      {
        skill: "Sass",
        content:
          "CSS 전처리기로, 변수, 중첩, 믹스인 등 코드 재사용성과 가독성을 높이는 기능을 제공합니다.",
      },
    ],
    contribution: [
      {
        title: "Firebase를 활용한 인증 기능 구현",
        content: [
          "Firebase Authentication을 활용하여 회원가입, 로그인, 아이디/비밀번호 찾기 기능을 구현",
          "에러 처리 및 입력값 유효성 검사를 통해 안정적인 사용자 경험 제공",
        ],
      },
      {
        title: "공통 레이아웃 구성 및 사이드바/헤더 구현",
        content: [
          "프로젝트 전체에 공통으로 적용되는 사이드바 및 헤더 컴포넌트를 설계 및 구현",
        ],
      },
      {
        title: "대시보드 내 커스텀 미니 캘린더 기능 구현",
        content: [
          "외부 캘린더 라이브러리를 사용하지 않고 직접 캘린더 로직 및 UI를 구현",
          "스케줄 데이터를 연동하여 빠른 주간 일정 확인 가능하도록 개발",
        ],
      },
      {
        title: "react-youtube를 활용한 채널 콘텐츠 연동",
        content: [
          "react-youtube 라이브러리를 활용하여 유튜브 채널 영상 출력 기능 구현",
          "API를 통해 채널 ID 기반 영상 데이터를 받아와 출력",
        ],
      },
      {
        title: "채널 정보 수정 기능 구현",
        content: [
          "사용자가 자신의 유튜브 채널 정보를 수정할 수 있는 UI 및 로직을 구현",
          "입력값 변경 후 저장 기능과 관련 에러 처리 포함",
        ],
      },
    ],
  },
  intranet: {
    mainColor: "#ED234B",
    link: "https://github.com/Hyun-EG/TP-fastcampus-intranet",
    title: "Intranet",
    description:
      "부트캠프 수강생들이 출석 시스템에서 겪는 불편함을 해소하고자 만든 토이 프로젝트입니다. 수강생 입장에서 ‘이런 서비스가 있으면 좋겠다’는 마음으로 기획하고 제작한 컨셉 기반의 웹 애플리케이션입니다.",
    date: "2024.04.08 ~ 2024.04.21",
    team: "FE 4명",
    images: [
      "/images/projects/intranet/image-login.webp",
      "/images/projects/intranet/image-sign-up.webp",
      "/images/projects/intranet/image-home.webp",
      "/images/projects/intranet/image-mypage.webp",
      "/images/projects/intranet/image-time-off-list.webp",
      "/images/projects/intranet/image-notice.webp",
      "/images/projects/intranet/image-resource-list.webp",
    ],
    keyFeatures: [
      "로그인 / 회원가입",
      "입실 / 퇴실 기능",
      "개인정보 수정",
      "휴가 / 조퇴 / 외출 신청 기능",
      "공지사항 및 자료실",
    ],
    skills: [
      {
        skill: "Vite",
        content:
          "빠른 번들링과 핫 리로딩을 지원하는 프론트엔드 빌드 도구로, 개발 환경의 생산성과 속도를 높일 수 있습니다.",
      },
      {
        skill: "React",
        content:
          "컴포넌트 기반의 UI 라이브러리로, 재사용 가능한 인터페이스 구현과 상태 관리를 효율적으로 할 수 있습니다.",
      },
      {
        skill: "Firebase",
        content:
          "인증, 데이터베이스, 스토리지 등 다양한 백엔드 기능을 제공하는 플랫폼으로, 빠르게 서버 기능을 구축할 수 있습니다.",
      },
      {
        skill: "Sass",
        content:
          "CSS 전처리기로, 중첩, 변수, 믹스인 등을 활용해 더 구조적이고 재사용성 높은 스타일을 작성할 수 있습니다.",
      },
    ],
    contribution: [
      {
        title: "사이드바 구현 및 현재 위치 표시",
        content: [
          "사이드바 컴포넌트 구현",
          "옆에 슬라이드바를 추가하여 애니메이션 효과로 현위치 표시",
        ],
      },
      {
        title: "공지사항 기능 구현 및 디테일 페이지 추가",
        content: [
          "공지사항 목록을 구현하고, 각 공지사항 클릭 시 디테일 페이지로 이동하는 기능 구현",
        ],
      },
      {
        title: "자료실 스와이퍼 기능 구현",
        content: [
          "Swiper 라이브러리를 사용하여 다양한 자료를 손쉽게 탐색할 수 있도록 개발",
        ],
      },
    ],
  },
};
