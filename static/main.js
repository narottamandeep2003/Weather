let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let month = ["January", "February", "march", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let month2 = ["Jan", "Feb", "march", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]

let dmonth = document.getElementById('month')
let dyear = document.getElementById('year')
let date2 = document.getElementById('date2')
let time = document.getElementById('time')
let btn = document.getElementById('btn');
let search = document.getElementById('city')
setInterval(() => {
    let date = new Date()
    dmonth.innerText = month[date.getMonth()]
    dyear.innerText = date.getFullYear()
    date2.innerText = `${day[date.getDay()]},${month2[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`

    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    time.innerText = `${strTime}`
}, 1000);


