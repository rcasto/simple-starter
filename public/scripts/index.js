/*
    This file represents the entry point for all javascript within the project
    Of course you can choose to create multiple bundles with rollup, but that is beyound
    the scope of this project template

    Simply edit this file to your needs and get going, the contents now are simply
    here as an example of how modules are connected together from this entry point
    file
*/
import { test } from './sample';

function onLoad() {
    console.log('Ready to party!');
    test();
}

window.addEventListener('load', onLoad, false);