
//Chunk arrays
function chunkArray(array, chunkSize) {
        const result = [];
        for (let i = 0; i < array.length; i += chunkSize) {
          result.push(array.slice(i, i + chunkSize));
        }
        return result;
      }
// Function to validate a MongoDB ObjectId
function isValidObjectId(id) {
    const objectIdRegex = /^[0-9a-fA-F]{24}$/;
    return objectIdRegex.test(id);
  }
// Function to generate a random alphanumeric string
function generateRandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
// Function to paginate an array of documents
function paginateDocuments(documents, page = 1, pageSize = 10) {
    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize;
    return documents.slice(startIndex, endIndex);
  }
  //currennt date and time according timezone

  function getCurrentDateTimeWithTimezone(timezone) {
    const currentDate = new Date();
    const timeZoneOffset = currentDate.getTimezoneOffset() / 60;
    const timeZoneSign = timeZoneOffset > 0 ? "-" : "+";
    const timeZoneHours = ("0" + Math.abs(timeZoneOffset)).slice(-2);
    const timeZoneMinutes = ("0" + (Math.abs(timeZoneOffset) % 1 * 60)).slice(-2);
    const year = currentDate.getFullYear();
    const month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
    const day = ("0" + currentDate.getDate()).slice(-2);
    const hours = ("0" + currentDate.getHours()).slice(-2);
    const minutes = ("0" + currentDate.getMinutes()).slice(-2);
    const seconds = ("0" + currentDate.getSeconds()).slice(-2);
    const formattedDate = `${year}-${month}-${day}`;
    const formattedTime = `${hours}:${minutes}:${seconds}`;
    const formattedTimeZone = `${timeZoneSign}${timeZoneHours}:${timeZoneMinutes}`;
    return `${formattedDate} ${formattedTime} ${formattedTimeZone} (${timezone})`;
  }

export { 
    chunkArray,
    isValidObjectId,
    generateRandomString,
    paginateDocuments,
    getCurrentDateTimeWithTimezone
    };