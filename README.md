# Leica Project

Leica 스토어 관리 시스템 - React Frontend + Spring Boot Backend

## 📁 프로젝트 구조

```
Leica/
├── backend/           # Java/Spring Boot 백엔드
│   ├── src/
│   │   ├── main/      # 메인 소스 코드
│   │   └── test/      # 테스트 코드
│   ├── build.gradle   # Gradle 빌드 설정
│   └── gradlew        # Gradle Wrapper
├── frontend/          # React 프론트엔드
│   ├── src/           # React 소스 코드
│   │   ├── images/    # 상품 이미지 (프론트엔드에서 사용)
│   │   └── ...
│   ├── public/        # 정적 파일
│   ├── package.json   # Node.js 의존성
│   └── yarn.lock      # Yarn 잠금 파일
└── README.md          # 프로젝트 설명
```

## 🚀 실행 방법

### Backend (Spring Boot)
```bash
cd backend
./gradlew bootRun
```
- 서버: http://localhost:8080
- Swagger UI: http://localhost:8080/swagger-ui.html

### Frontend (React)
```bash
cd frontend
yarn install
yarn start
```
- 개발 서버: http://localhost:3000

## 🛠 기술 스택

### Backend
- Java 17
- Spring Boot 3.x
- MyBatis
- H2 Database
- Gradle

### Frontend
- React 19
- Styled Components
- Chart.js
- React Router
- Yarn

## 📊 주요 기능

- 대시보드 (매출, 주문, 고객 통계)
- 인기 제품 TOP 5 차트
- 최근 주문 관리
- 상품 이미지 관리 (프론트엔드에서 관리)

## 🖼️ 이미지 관리

- **위치**: `frontend/src/images/products/`
- **형식**: JPG, PNG, WebP
- **사용법**: React 컴포넌트에서 import하여 사용
- **예시**: `import leicaQ3 from '../images/products/leica-q3.jpg';`
