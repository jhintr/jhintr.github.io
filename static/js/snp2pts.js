/* last update: 2024-11-08 */
/* For Suttanipata: add PTS gatha number */

const h4El = document.querySelectorAll('h4');
h4El.forEach(h => {
    const gatha = Number(h.innerText);

    let pts;
    if (gatha <= 163) pts = gatha;
    else if (gatha == 164) pts = '163A';
    else if (gatha == 165) pts = '163B';
    else if (gatha <= 232) pts = gatha - 2;
    else if (gatha == 233) pts = '231a-d';
    else if (gatha == 234) pts = '231e-h';
    else if (gatha <= 459) pts = gatha - 3;
    else if (gatha == 460) pts = '457a-b';
    else if (gatha == 461) pts = '457c-f';
    else if (gatha == 462) pts = '458a-c';
    else if (gatha == 463) pts = '458d-e';
    else if (gatha <= 498) pts = gatha - 5;
    else if (gatha == 499) pts = '494a-d';
    else if (gatha == 500) pts = '494e-h';
    else if (gatha <= 767) pts = gatha - 6;
    else if (gatha == 768) pts = '762a-d';
    else if (gatha == 769) pts = '762ef-763ab';
    else if (gatha == 770) pts = '763c-f';
    else gatha -= 7;

    if (gatha != pts)
        h.innerHTML += ` <q>PTS ${pts}</q>`;
});