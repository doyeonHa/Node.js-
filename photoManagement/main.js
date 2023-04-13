const fs = require('fs');
const path = require('path');

// dirPath에 있는 모든 파일목록의 배열(하위경로까지)
function getAllFiles(dirPath, arrOfFiles) {
  // dirPath에 있는 모든 파일목록의 배열(하위경로는 불가)
  const files = fs.readdirSync(dirPath);

  files.forEach(function(file) {
    const destPath = path.join(dirPath, file);
    
    // 폴더(디렉토리)라면 해당 폴더에 있는 모든 파일목록들을 체크한다
    if(fs.statSync(destPath).isDirectory()) {
      getAllFiles(destPath, arrOfFiles);
    } else {
    // 파일이라면 파일목록에 추가
      arrOfFiles.push(destPath);
    }
  });

  return arrOfFiles;
}

function getDuplicated(baseDir) {
  // 디렉토리가 존재하는지 유효성 검사
  if (!fs.existsSync(baseDir)) {
    console.log('폴더가 존재하지 않음');
    return;
  }

  const duplicatedDir = path.join(baseDir, 'duplicated');
  if (!fs.existsSync(duplicatedDir))
    fs.mkdirSync(duplicatedDir);

    // base폴더에 있는 모든 파일들 list
    const arrOfFiles = getAllFiles(baseDir, []);

    // 중복된 파일들(절대경로)list
    const duplicatedFiles = [];
}

// const files = getAllFiles(path.join(__dirname, 'base'), []);
// console.log(arraayOfFiles.join('\n'));

getDuplicated(path.join(__dirname, 'base'));