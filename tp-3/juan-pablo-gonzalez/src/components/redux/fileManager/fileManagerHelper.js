import moment from 'moment';

export function calcFileSize(bytes) {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes === 0) return '0 Bytes';
  let i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10); // this line calculates how much times can we divide the size in 1024 to check the unit to use
  i = i > sizes.length - 1 ? sizes.length - 1 : i;
  return `${Math.round(bytes / (1024 ** i), 2)} ${sizes[i]}`;
}

export function processFiles(filesList) {
  const result = {};
  let totalFilesSize = 0;
  result.files = filesList.map((file) => {
    const dateDiff = `${moment.duration(new Date() - new Date(file.ModifyDate)).humanize()} ago`;
    const expiresDate = file.ExpireDate.split('T')[0].split('-');
    const parsedFile = { };
    parsedFile.key = file.Id;
    parsedFile.name = file.FileName;
    parsedFile.folder = file.FolderName;
    parsedFile.modified = dateDiff;
    parsedFile.status = 'sync'; // TBD
    parsedFile.size = calcFileSize(file.FileSize);
    totalFilesSize += file.FileSize;
    parsedFile.expires = `${expiresDate[1]}/${expiresDate[2]}/${expiresDate[0]}`;
    return parsedFile;
  });
  result.totalFilesSize = calcFileSize(totalFilesSize);

  return result;
}
