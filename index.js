function takeANumber(lineOfPeople, name){
  lineOfPeople.push(name)
  return `Welcome, ${name}. You are number ${lineOfPeople.length} in line.`
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length > 0){
    var firstP = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${firstP}.`
  }
  else{
      return "There is nobody waiting to be served!";
    }
}

function currentLine(currentLine){
  if(currentLine.length === 0){
    return 'The line is currently empty.'
  }
  var newArray = [];
  for(var j = 0; j < currentLine.length; j++){
    newArray.push(`${j+1}. ${currentLine[j]}`);
  }
  return "The line is currently: " + newArray.join(', ');
/*
  var j = 0;
  var newArray = [];
  if(currentLine.length > 0){
    newArray.push(`${j+1}. ${currentLine[j]}`);
    for(j = 1; j < currentLine.length; j++){
      newArray.push(` ${j+1}. ${currentLine[j]}`);
    }
    newArray.join(' ');
      return "The line is currently: " + newArray;
  }else{
    return 'The line is currently empty.'
  }*/
}
