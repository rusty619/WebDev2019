function romanToArabic(romanNum)
{
    var arabicNum = charToInt(romanNum.charAt(0));
    var curr, prev;

    for(var i = 1; i < romanNum.length;i++)
    {
        curr = charToInt(romanNum.charAt(i));
        prev = charToInt(romanNum.charAt(i-1));
        if(curr <= prev)
          arabicNum += curr;
        else  
          arabicNum += curr-2*prev;
    }
    return arabicNum;
}

function charToInt(x)
{
    switch(x)  {
       case 'I': return 1;
       case 'V': return 5;
       case 'X': return 10;
       case 'L': return 50;
       case 'C': return 100;
       case 'D': return 500;
       case 'M': return 1000;
       default: return -1;
    }
}

console.log(romanToArabic("DC"));