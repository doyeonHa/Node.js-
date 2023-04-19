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
  
  // 해당 디렉토리가 존재하는지 유효성 검사
  if(!fs.existsSync(baseDir)) {
    console.error('폴더가 존재하지 않음');
    return;
  }

  const duplicatedDir = path.join(baseDir, 'duplicated');

  if(!fs.existsSync(duplicatedDir))
    fs.mkdirSync(duplicatedDir);
  
  // base폴더에 있는 모든 파일들 list
  const arrayOfFiles = getAllFiles(baseDir, []);
  
  // 중복된 파일들(절대경로) list
  const duplicatedFiles = [];
  
  // file : 파일의 절대경로(string)
  arrayOfFiles.forEach(function (file, idx){
    // 절대경로에서 파일이름만 추출
    const fileName = path.basename(file);

    // 같은 파일명을 가진 경로의 idx. 없으면 -1을 반환
    const duplicatedIdx = arrayOfFiles.findIndex(function(otherFile, otherIdx){
      if(otherIdx > idx && otherFile.includes(fileName))
        return true;
      else
        return false;
    });

    // 중복된 파일이 존재한다면
    if(duplicatedIdx > -1)
    {
      const duplicatedFile = arrayOfFiles[duplicatedIdx];

      duplicatedFiles.push(file);             
      duplicatedFiles.push(duplicatedFile);   // 중복된 파일의 절대경로
      
      // 중복된 파일을 duplacatedDir에 복사
      const destPath = path.join(duplicatedDir, fileName);
      fs.copyFile(file, destPath, (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(`${fileName}이(가) 중복되었습니다. ${destPath}에 복사되었습니다.`);
      });
    }
  });
  return duplicatedFiles;
}


// const files = getAllFiles(path.join(__dirname, 'base'), []);
// console.log(files.join('\n'));

const files = getDuplicated(path.join(__dirname, 'base'));
console.log(files.join('\n'));