/* last update: 2023-05-22 */
/* For Suttanipata: add PTS gatha number */

const h5El = document.querySelectorAll('h5');
h5El.forEach(h => {
    let gatha = Number(h.innerText);

    if (gatha <= 163) gatha = gatha;
    else if (gatha == 164) gatha = '163A';
    else if (gatha == 165) gatha = '163B';
    else if (gatha <= 232) gatha -= 2;
    else if (gatha == 233) gatha = '231a-d';
    else if (gatha == 234) gatha = '231e-h';
    else if (gatha <= 459) gatha -= 3;
    else if (gatha == 460) gatha = '457a-b';
    else if (gatha == 461) gatha = '457c-f';
    else if (gatha == 462) gatha = '458a-c';
    else if (gatha == 463) gatha = '458d-e';
    else if (gatha <= 498) gatha -= 5;
    else if (gatha == 499) gatha = '494a-d';
    else if (gatha == 500) gatha = '494e-h';
    else if (gatha <= 767) gatha -= 6;
    else if (gatha == 768) gatha = '762a-d';
    else if (gatha == 769) gatha = '762ef-763ab';
    else if (gatha == 770) gatha = '763c-f';
    else gatha -= 7;

    const pts = ` <q>PTS ${gatha}</q>`;
    h.innerHTML += pts;
});