import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// 'public/map' 경로를 정확히 지정합니다. 경로는 실제 구조에 맞게 조정해야 합니다.
const mapsDirPath = path.join(__dirname, 'public');
const result = {};

fs.readdirSync(mapsDirPath).forEach(map => {
  const mapPath = path.join(mapsDirPath, map);
  if (fs.statSync(mapPath).isDirectory()) {
    result[map] = {};
    fs.readdirSync(mapPath).forEach(team => {
      const teamPath = path.join(mapPath, team);
      if (fs.statSync(teamPath).isDirectory()) {
        result[map][team] = {}; // 객체로 초기화합니다.
        fs.readdirSync(teamPath).forEach(target => {
          const targetPath = path.join(teamPath, target);
          if (fs.statSync(targetPath).isDirectory()) {
            // 각 타겟 폴더 안의 숫자 폴더 개수를 세어 객체에 저장합니다.
            const targetFoldersCount = fs.readdirSync(targetPath).filter(folder => {
              const folderPath = path.join(targetPath, folder);
              return fs.statSync(folderPath).isDirectory();
            }).length;
            result[map][team][target] = targetFoldersCount; // 객체에 폴더 개수를 저장합니다.
          }
        });
      }
    });
  }
});

const outputPath = path.join(__dirname, 'src', 'assets', 'lineUpData.json');
fs.writeFileSync(outputPath, JSON.stringify(result, null, 2), 'utf-8');
console.log('Maps data JSON has been generated successfully.');
