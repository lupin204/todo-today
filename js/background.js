/**
 * Free Images by "Pixabay"
 * https://pixabay.com/
 */
const bgImages = [
    'milky-way-1845068_960_720_11zon.png',
    'sky-5114501_960_720_11zon.png',
    'space-1721695_960_720_11zon.png',
    'stars-1654074_960_720_11zon.png',
    //'tree-3358468_960_720_11zon.png',
];

const initBackground = () => {
    console.log('init background');

    const rnd = Math.floor(Math.random() * bgImages.length);
    document.body.style.backgroundImage = `url('img/${bgImages[rnd]}')`;
}

initBackground();
