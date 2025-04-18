// First 챌린지
// 배열(튜플)에서 첫 번째 요소를 반환하는 제네릭 First<T>를 구현하세요.

// 여기에 type 구현
type First<T extends any[]> = T extends [] ? never : T[0];

// 테스트 케이스
import { Equal, Expect } from '@/utils';

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>
];

// 사용되지 않는 변수 (ESLint에 의해 경고가 표시되어야 함)
const unusedVar = 'test'; 