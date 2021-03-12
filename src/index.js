module.exports = function toReadable (number) {
    let mas = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    let mas2 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    let mas3 = [0, 0, 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  
    let strStart = String(number).split('');
    let strEnd = '';

    if (strStart.length === 1) {
        strEnd += mas[Number(strStart[0])];
        return strEnd;
    }

    if (strStart.length === 3) {
      strEnd += mas[Number(strStart[0])]; 
      if ((Number(strStart[strStart.length-2]) === 0 && Number(strStart[strStart.length-1]) === 0)) {
        strEnd +=  ' hundred';
        return strEnd;
      } else {
        strEnd +=  ' hundred ';
      }
    }    
  
    if (Number(strStart[strStart.length-2]) === 1) {
      strEnd += mas2[Number(strStart[strStart.length-1])];
      return strEnd;
    }

    if (Number(strStart[strStart.length-2]) === 0) {
      strEnd += mas[Number(strStart[strStart.length-1])];
      return strEnd;
    }

    if (Number(strStart[strStart.length-2]) > 1) {
      strEnd += mas3[Number(strStart[strStart.length-2])];
      if (Number(strStart[strStart.length-1]) === 0) {
        return strEnd;
      } else {
        strEnd += ' ' + mas[Number(strStart[strStart.length-1])];
      }    
    }
    return strEnd
  }