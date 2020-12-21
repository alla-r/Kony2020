import { getUser } from './service.js';
import { getZodiac, getCompatibility } from './table.js';

document.querySelector('.add-new-couple').addEventListener('click', e => {
    document.querySelector('.output').innerHTML = '';
    users.length = 0;
    getUser(setUser, '?gender=female');
    getUser(setUser, '?gender=male');

    document.querySelector('.percent').classList = 'percent d-block';
});

const users = [];
const images = [...document.querySelectorAll('.images img')];

const icons = ['♈','♉','♊','♋','♌','♍','♎','♏','♐','♑','♒','♓'];
const iconsCont = [...document.querySelectorAll('.icon')];

function setUser(user){
    users.push(user);
    if(users.length == 2){
        users.forEach(({ picture }, i) => images[i].src = picture.large);
        iconsCont.forEach( (container, i) => container.innerHTML = icons[getZodiac(users[i]).id]);
        console.log(getCompatibility(users));
    }
}

const btnList = [...document.querySelectorAll('.btn-percent span')];

btnList.forEach( btn => {
    btn.addEventListener('click', e => {
        const id = e.target.parentNode.id.slice(1);
        const compatibility = getCompatibility(users).split('%')[0];

        document.querySelector('.percent').classList = 'percent d-none';

        if (compare(id, compatibility)) {
            document.querySelector('.output').innerHTML = `You win!!! This couple's compatibility is ${compatibility}`;
        } else {
            document.querySelector('.output').innerHTML = `You lose. This couple's compatibility is ${compatibility}`;
        }
    });
});

function compare ( id, compatibility ) {
    switch (true) {
        case id == 60 && compatibility >= 60 && compatibility <= 69:
        case id == 70 && compatibility >= 70 && compatibility <= 79:
        case id == 80 && compatibility >= 80 && compatibility <= 89:
        case id == 90 && compatibility >= 90 && compatibility <= 99:
        case id == 100 && compatibility == 100:
            return true;
        default:
            return false;
    }
}