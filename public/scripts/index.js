import { test } from './sample';

function onLoad() {
    console.log('Ready to party!');
    test();
}

window.addEventListener('load', onLoad, false);