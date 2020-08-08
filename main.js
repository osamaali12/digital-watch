
// var count = 0;
// var interval;

// function timer(){
//     count ++;
//     console.log(count);
// }
// interval= setInterval(timer, 1000)

// setTimeout(function(){
//     clearInterval(interval)
// },5000)


// function timeout(){
//     console.log("running ....");
// }
// setTimeout(timeout, 3000)


function clock(){
    var hours= document.getElementById('hours');
    var minutes = document.getElementById('minutes');
    var seconds = document.getElementById('seconds');
    var date = document.getElementById('date');
    var month = document.getElementById('month');
    var year= document.getElementById('year');

    var h= new Date().getHours();
    var m= new Date().getMinutes();
    var s= new Date().getSeconds();
    var d= new Date().getDate();
    var t= new Date().getMonth();
    var y= new Date().getFullYear();

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    date.innerHTML = d;
    month.innerHTML = t;
    year.innerHTML = y;
}

var interval = setInterval (clock,1000);