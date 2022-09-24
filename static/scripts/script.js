// JavaScript Document
'use strict';
const submit = document.getElementById('submit');
const rate = document.getElementById('rate');
const thanks = document.getElementById('ta');

submit.onclick = () => {
	rate.style.display = 'none';
	thanks.style.display = 'block';
}

