# TypeScript Type Challenges

[type-challenges](https://github.com/type-challenges/type-challenges) 문제 풀이 저장용 프로젝트

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

## 코드 검사 (ESLint)

```bash
# 코드 검사 실행
npm run lint

# 코드 검사 및 자동 수정
npm run lint:fix
```

Type Challenge를 위해 일부 ESLint 규칙(`no-unused-vars`, `ban-types` 등)은 비활성화


1. 문제 생성 후 `challenges/{난이도}/{문제명}/index.ts` 파일에서 문제를 해결
2. 타입을 구현하고 테스트 케이스를 통과시키기
3. 구현한 코드를 검증하려면 다음 명령을 실행
```bash
npm test
```

## 참고 자료

- [TypeScript 공식 문서](https://www.typescriptlang.org/docs/)
- [type-challenges 저장소](https://github.com/type-challenges/type-challenges)
- [TypeScript Playground](https://www.typescriptlang.org/play/) 