const getClock = () => {   
    const date = new Date();
    const yy = String(date.getFullYear()).padStart(2, "0");
    const mm = String(date.getMonth()+1).padStart(2, "0");
    const dd = String(date.getDay()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");

    document.querySelector("h2#clock");
    clock.innerText = `${yy}-${mm}-${dd} ${hours}:${minutes}:${seconds}`;
}

const initClock = () => {
    console.log('init clock');
    setInterval(getClock,1000);

}

initClock();