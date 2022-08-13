function compute()
{
    /**
     * * Computes the total amount of interest 
     */
    var principal = document.getElementById("principal").value;
    if (parseFloat(principal)<=0 || principal==''){
        alert("Enter a positive number")
        document.getElementById('principal').focus()
        return
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * rate * years / 100

    var year = new Date().getFullYear() + parseInt(years);

    var result = document.getElementById('result')

    result.innerHTML = `If you deposit ${getHighlighter(principal)},\<br>at an interest rate of ${getHighlighter(rate.toString() + '%')}.\<br>You will recieve an additional amount of ${getHighlighter(parseFloat(interest))},\<br>in the year ${getHighlighter(year)}`
}
        
function updateRate(){
    document.getElementById('rate_val').innerHTML = `${document.getElementById("rate").value}%`

}
function getHighlighter(text){
    return `<span class='highlighted'>${text}</span>`
}
