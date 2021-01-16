function compute()
{
    var principal = document.getElementById("principal").value;
    if(principal <= 0)
    {
        alert('Enter a positive number');
        document.getElementById("principal").focus();
        return false;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var intrest = (principal*years*rate)/100
   //logic to get resultant year
    var d = new Date();
    var lyear = d.getFullYear() + Number(years);
    document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"</mark><br>at an intrest rate of <mark>"+rate+"%</mark><br>You will receive an amount of <mark>"+intrest+"</mark><br>in the year <mark>"+lyear+"</mark>";
    
}
function rangedisp()
{
    var rate = document.getElementById("rate").value;
    document.getElementById("ratesp").innerHTML = rate+'%';
}
        
