function average(scores)
{
   var total = 0;
   var average = 0;
    for(var i = 0; i < scores.length;i++)
    {
       total += scores[i];
    }

    average = total/scores.length;
    return Math.round(average);
}

var scores = [90,98,89,100,100,86,94];
console.log(average(scores));

var scores2 = [40,65,77,82,80,54,73,63,95,49];
console.log(average(scores2));