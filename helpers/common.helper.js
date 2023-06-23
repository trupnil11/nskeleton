
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
  function shuffleArray(array) {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }
  function calculateAverage(array) {
    if (array.length === 0) {
      return 0;
    }
    const sum = array.reduce((total, num) => total + num, 0);
    return sum / array.length;
  }
  function capitalizeString(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  function filterUniqueValues(array) {
    return [...new Set(array)];
  }
  function formatCurrency(number, decimalPlaces = 2, decimalSeparator = '.', thousandsSeparator = ',') {
    const fixedNumber = number.toFixed(decimalPlaces);
    const parts = fixedNumber.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSeparator);
    return parts.join(decimalSeparator);
  }
  function isEmptyArray(array) {
    return array.length === 0;
  }
  function getUniqueElements(array) {
    return Array.from(new Set(array));
  }
  function convertObjectToQueryParams(obj) {
    const queryParams = [];
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        queryParams.push(`${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`);
      }
    }
    return queryParams.join('&');
  }
  function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
  }
  function isEmptyOrBlankString(str) {
    return str.trim() === '';
  }
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  function isValidURL(url) {
    try {
      new URL(url);
      return true;
    } catch (error) {
      return false;
    }
  }
  function isPositiveNumber(num) {
    return num > 0;
  }
  function isInteger(num) {
    return Number.isInteger(num);
  }
  
export { 
    chunkArray,
    isValidObjectId,
    generateRandomString,
    paginateDocuments,
    getCurrentDateTimeWithTimezone,
    shuffleArray,
    calculateAverage,
    capitalizeString,
    filterUniqueValues,
    formatCurrency,
    isEmptyArray,
    getUniqueElements,
    convertObjectToQueryParams,
    calculateDistance,
    isEmptyOrBlankString,
    isValidEmail,
    isValidURL,
    isPositiveNumber,
    isInteger
    };