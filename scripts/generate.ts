import * as fs from 'fs';
import * as path from 'path';
import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

type Difficulty = 'easy' | 'medium' | 'hard' | 'extreme';

async function generateChallenge() {
  const difficulty = await new Promise<Difficulty>((resolve) => {
    rl.question('난이도를 선택하세요 (easy, medium, hard, extreme): ', (answer) => {
      if (['easy', 'medium', 'hard', 'extreme'].includes(answer)) {
        resolve(answer as Difficulty);
      } else {
        console.log('유효하지 않은 난이도입니다. easy, medium, hard, extreme 중에서 선택하세요.');
        process.exit(1);
      }
    });
  });

  const challengeName = await new Promise<string>((resolve) => {
    rl.question('과제 이름을 입력하세요: ', (answer) => {
      resolve(answer.replace(/\s+/g, '-').toLowerCase());
    });
  });

  const directory = path.join(process.cwd(), 'challenges', difficulty, challengeName);
  
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
  }

  // 템플릿 파일 생성
  const templateContent = `
// ${challengeName} 챌린지
// 작업할 타입을 구현하세요.

// 여기에 type 구현
type MyType = any;

// 테스트 케이스
import { Equal, Expect, NotEqual, ExpectFalse, ExpectTrue } from '@/utils';

type cases = [
  Expect<Equal<MyType, any>>,
];

// @ts-expect-error
type error = MyType;
`;

  fs.writeFileSync(path.join(directory, 'index.ts'), templateContent.trim());
  
  console.log(`${difficulty} 난이도의 "${challengeName}" 챌린지가 생성되었습니다!`);
  console.log(`파일 위치: ${path.join(directory, 'index.ts')}`);
  
  rl.close();
}

generateChallenge().catch(console.error); 