// Create a custom split string prototype

String.prototype.split = function customSplit(str, separator, limit) {
    if (!(separator instanceof RegExp)) {
      return str.split(separator, limit);
    }
  
    const result = [];
    let match, lastIndex = 0;
  
    while ((match = separator.exec(str)) !== null) {
      result.push(str.slice(lastIndex, match.index), ...match.slice(1));
      lastIndex = match.index + match[0].length;
  
      if (limit && result.length / 2 >= limit) break;
    }
  
    result.push(str.slice(lastIndex));
  
    return result;
  }