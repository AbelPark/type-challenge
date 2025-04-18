# TypeScript Type Challenges

이 프로젝트는 [type-challenges](https://github.com/type-challenges/type-challenges) 저장소에서 영감을 받아 TypeScript의 타입 시스템을 학습하고 연습하기 위한 환경입니다.

## 프로젝트 설정

1. 의존성 설치:
```bash
npm install
```

2. 새로운 타입 챌린지 생성:
```bash
npm run generate
```

## 프로젝트 구조

- `challenges/`: 난이도별 타입 챌린지
  - `easy/`: 쉬운 난이도 문제
  - `medium/`: 중간 난이도 문제
  - `hard/`: 어려운 난이도 문제
  - `extreme/`: 매우 어려운 난이도 문제
- `utils/`: 테스트에 사용되는 유틸리티 타입
- `scripts/`: 스크립트 파일

## 경로 별칭

이 프로젝트는 경로 별칭(`@`)을 사용합니다. 다음과 같이 모듈을 가져올 수 있습니다:

```typescript
// 절대 경로로 utils 가져오기
import { Equal, Expect } from '@/utils';
```

## 코드 검사 (ESLint)

이 프로젝트는 ESLint를 사용하여 코드 품질을 유지합니다. 다음 명령으로 코드 검사를 실행할 수 있습니다:

```bash
# 코드 검사 실행
npm run lint

# 코드 검사 및 자동 수정
npm run lint:fix
```

Type Challenge를 위해 일부 ESLint 규칙(`no-unused-vars`, `ban-types` 등)은 비활성화되어 있습니다.

## Git 설정

이 프로젝트는 기본적인 `.gitignore` 파일이 설정되어 있어 다음과 같은 파일이나 디렉토리는 Git 저장소에 포함되지 않습니다:

- `node_modules/`: 의존성 패키지
- 로그 파일 (`*.log`)
- 빌드 결과물 (`dist/`, `build/`)
- 환경 설정 파일 (`.env`, `.env.local` 등)
- 에디터 설정 파일 (`.vscode/`, `.idea/` 등)
- OS 관련 파일 (`.DS_Store`, `Thumbs.db` 등)
- TypeScript 컴파일러 임시 파일 (`*.tsbuildinfo`)

새 저장소로 초기화하려면:

```bash
git init
git add .
git commit -m "초기 커밋"
```

## 사용 방법

1. 문제 생성 후 `challenges/{난이도}/{문제명}/index.ts` 파일에서 문제를 해결합니다.
2. 타입을 구현하고 테스트 케이스를 통과시키세요.
3. 구현한 코드를 검증하려면 다음 명령을 실행하세요:
```bash
npm test
```

## 참고 자료

- [TypeScript 공식 문서](https://www.typescriptlang.org/docs/)
- [type-challenges 저장소](https://github.com/type-challenges/type-challenges)
- [TypeScript Playground](https://www.typescriptlang.org/play/) 