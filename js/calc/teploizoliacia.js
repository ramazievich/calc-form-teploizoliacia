'use strict';



/**
 * Для чекбокса
 * показ формы расчета теплоизоляции для односкатной крыши
 * @function [showDvuskatRoofItems] добавляет класс hidden к чекбоксу
 * @param {remove} - удаляет класс hidden у формы
 * @param {check}  - переменная к классу для чекбокса
 * @param {add}  - добавляет hidden к форме
 * @function [clearAllFormOdnoskatRoof] функция сброса всех данных в заполненых полях когда checkbox снят
 */

let checkboxOdnoskatRoof = document.getElementById('check-odnoskat_roof');
checkboxOdnoskatRoof.addEventListener('click', clearAllFormOdnoskatRoof);

function showOdnoskatRoofItems(check) {
	check = document.getElementById("check-odnoskat_roof");
	if (check.checked) {
		document.getElementById("odnoskat_form_wrp").classList.remove("hidden");
		document.getElementById("img_odnoskat_roof_color-id").classList.remove("hidden");
		document.getElementById("img_odnoskat_roof_bw-id").classList.add("hidden");
	} else {
		document.getElementById("odnoskat_form_wrp").classList.add("hidden");
		document.getElementById("img_odnoskat_roof_color-id").classList.add("hidden");
		document.getElementById("img_odnoskat_roof_bw-id").classList.remove("hidden");
		clearAllFormOdnoskatRoof();
	}
}
function clearAllFormOdnoskatRoof() {
	let form = document.getElementById('odnoskat_form_wrp');
	let inputs = form.getElementsByTagName('input');
	for (let input of inputs)
		input.value = '';
}


/**
 * Для чекбокса
 * показ формы расчета теплоизоляции для двухскатной крыши
 * @function [showDvuskatRoofItems] добавляет класс hidden к чекбоксу
 * @param {remove} - удаляет класс hidden у формы
 * @param {check}  - переменная к классу для чекбокса
 * @param {add}  - добавляет hidden к форме
 * @function [clearAllFormDvuskatRoof] функция сброса всех данных в заполненых полях когда checkbox снят
 */

let checkboxDvuskatRoof = document.getElementById('check-dvuskat_roof');
checkboxDvuskatRoof.addEventListener('click', clearAllFormDvuskatRoof);

function showDvuskatRoofItems(check) {
	check = document.getElementById("check-dvuskat_roof");
	if (check.checked) {
		document.getElementById("dvuskat_form_wrp").classList.remove("hidden");
		document.getElementById("img_dvuskat_roof_color-id").classList.remove("hidden");
		document.getElementById("img_dvuskat_roof_bw-id").classList.add("hidden");
	} else {
		document.getElementById("dvuskat_form_wrp").classList.add("hidden");
		document.getElementById("img_dvuskat_roof_color-id").classList.add("hidden");
		document.getElementById("img_dvuskat_roof_bw-id").classList.remove("hidden");
		clearAllFormDvuskatRoof();
	}
}

function clearAllFormDvuskatRoof() {
	let form = document.getElementById('dvuskat_form_wrp');
	let inputs = form.getElementsByTagName('input');
	for (let input of inputs)
		input.value = '';
}

/**
 * Для чекбокса
 * показ формы расчета теплоизоляции для шатровой крыши
 * @function [showShatrRoofItems] добавляет класс hidden к чекбоксу
 * @param {remove} - удаляет класс hidden у формы
 * @param {check}  - переменная к классу для чекбокса
 * @param {add}  - добавляет hidden к форме
 * @function [clearAllFormShatrRoof] функция сброса всех данных в заполненых полях когда checkbox снят
 */

let checkboxShatrRoof = document.getElementById('check-shatr_roof');
checkboxShatrRoof.addEventListener('click', clearAllFormShatrRoof);

function showShatrRoofItems(check) {
	check = document.getElementById("check-shatr_roof");
	if (check.checked) {
		document.getElementById("shatr_form_wrp").classList.remove("hidden");
		document.getElementById("img_shatr_roof_color-id").classList.remove("hidden");
		document.getElementById("img_shatr_roof_bw-id").classList.add("hidden");
	} else {
		document.getElementById("shatr_form_wrp").classList.add("hidden");
		document.getElementById("img_shatr_roof_color-id").classList.add("hidden");
		document.getElementById("img_shatr_roof_bw-id").classList.remove("hidden");
		clearAllFormShatrRoof();
	}
}

function clearAllFormShatrRoof() {
	let form = document.getElementById('shatr_form_wrp');
	let inputs = form.getElementsByTagName('input');
	for (let input of inputs)
		input.value = '';
}

/**
 * Для чекбокса
 * показ формы расчета теплоизоляции для вальмовой крыши
 * @function [showValmRoofItems] добавляет класс hidden к чекбоксу
 * @param {remove} - удаляет класс hidden у формы
 * @param {check}  - переменная к классу для чекбокса
 * @param {add}  - добавляет hidden к форме
 * @function [clearAllFormValmRoof] функция сброса всех данных в заполненых полях когда checkbox снят
 */

let checkboxValmRoof = document.getElementById('check-valm_roof');
checkboxValmRoof.addEventListener('click', clearAllFormValmRoof);

function showValmRoofItems(check) {
	check = document.getElementById("check-valm_roof");
	if (check.checked) {
		document.getElementById("valm_form_wrp").classList.remove("hidden");
		document.getElementById("img_valm_roof_color-id").classList.remove("hidden");
		document.getElementById("img_valm_roof_bw-id").classList.add("hidden");
	} else {
		document.getElementById("valm_form_wrp").classList.add("hidden");
		document.getElementById("img_valm_roof_color-id").classList.add("hidden");
		document.getElementById("img_valm_roof_bw-id").classList.remove("hidden");
		clearAllFormValmRoof();
	}
}

function clearAllFormValmRoof() {
	let form = document.getElementById('valm_form_wrp');
	let inputs = form.getElementsByTagName('input');
	for (let input of inputs)
		input.value = '';
}

/**
 * Для чекбокса
 * показ формы расчета теплоизоляции для мансардной крыши
 * @function [showValmRoofItems] добавляет класс hidden к чекбоксу
 * @param {remove} - удаляет класс hidden у формы
 * @param {check}  - переменная к классу для чекбокса
 * @param {add}  - добавляет hidden к форме
 * @function [clearAllFormValmRoof] функция сброса всех данных в заполненых полях когда checkbox снят
 */

let checkboxMansardRoof = document.getElementById('check-mansard_roof');
checkboxMansardRoof.addEventListener('click', clearAllFormMansardRoof);

function showMansardRoofItems(check) {
	check = document.getElementById("check-mansard_roof");
	if (check.checked) {
		document.getElementById("mansard_form_wrp").classList.remove("hidden");
		document.getElementById("img_mansard_roof_color-id").classList.remove("hidden");
		document.getElementById("img_mansard_roof_bw-id").classList.add("hidden");
	} else {
		document.getElementById("mansard_form_wrp").classList.add("hidden");
		document.getElementById("img_mansard_roof_color-id").classList.add("hidden");
		document.getElementById("img_mansard_roof_bw-id").classList.remove("hidden");
		clearAllFormValmRoof();
	}
}

function clearAllFormMansardRoof() {
	let form = document.getElementById('mansard_form_wrp');
	let inputs = form.getElementsByTagName('input');
	for (let input of inputs)
		input.value = '';
}

/**
 * @function [sumAllSquareOdnoskatRoof] Функция подсчета площади односкатной крыши
 */
function sumAllSquareOdnoskatRoof() {
	let roof_block = document.querySelector('.roof');
	let form = document.getElementById('odnoskat_form_wrp');
	let dlina = Number(form.querySelector(".odnoskat_roof__length").value);
	let visota = Number(form.querySelector(".odnoskat_roof__height").value);	
	let result = (dlina * visota);
	roof_block.querySelector("#odnoskat_roof__sum_square-all-id").value = result.toFixed(2);	
}

/**
 * @function [sumAllSquareDvuskatRoof] Функция подсчета площади двускатной крыши
 */
function sumAllSquareDvuskatRoof() {
	let roof_block = document.querySelector('.roof');
	let form = document.getElementById('dvuskat_form_wrp');
	let dlina = Number(form.querySelector(".dvuskat_roof__length").value);
	let visota = Number(form.querySelector(".dvuskat_roof__height").value);	
	let result = (dlina * visota) * 2;
	roof_block.querySelector("#dvuskat_roof__sum_square-all-id").value = result.toFixed(2);
}

/**
 * @function [sumAllSquareDvuskatRoof] Функция подсчета площади шатровой крыши
 */
function sumAllSquareShatrRoof() {
	let roof_block = document.querySelector('.roof');
	let form = document.getElementById('shatr_form_wrp');
	let dlina_L1 = Number(form.querySelector(".shatr_roof__length").value);
	let dlina_L2 = Number(form.querySelector(".shatr_roof__length2").value);	
	let result = (dlina_L1 * dlina_L2) * 1.1;
	roof_block.querySelector("#shatr_roof__sum_square-all-id").value = result.toFixed(2);
}

/**
 * @function [sumAllSquareDvuskatRoof] Функция подсчета площади вальмовой крыши
 */
function sumAllSquareValmRoof() {
	let roof_block = document.querySelector('.roof');
	let form = document.getElementById('valm_form_wrp');
	let dlina_L1 = Number(form.querySelector(".valm_roof__length").value);
	let dlina_L2 = Number(form.querySelector(".valm_roof__length2").value);
	let dlina_L3 = Number(form.querySelector(".valm_roof__length3").value);
	let dlina_B = Number(form.querySelector(".valm_roof__length4").value);
	let L3_plus_L1_razd_na2 = (dlina_L3 + dlina_L1) / 2;/*L3+L1/2 */
	let b_Kvadrat = Math.pow(dlina_B, 2); /*B квадрат*/
	let koren_b_Kvadrat = Math.sqrt(b_Kvadrat);/*кореньиз B квадрат*/	
	let L1_minus_L3 = (dlina_L1 - dlina_L3);/* L1 минус L3*/
	let L1_minus_L3_kvadrat = Math.pow(L1_minus_L3, 2);/*квадрат из L1 минус L2*/
	let L1_minus_L3_umn_2 = 2 * (L1_minus_L3);
	let L1_minus_L3_obsh = L1_minus_L3_kvadrat / L1_minus_L3_umn_2;
	let L1_minus_L3_obsh_Kvadrat = Math.pow(L1_minus_L3_obsh, 2); /*B квадрат*/
	let s_Trapecia = (L3_plus_L1_razd_na2 * koren_b_Kvadrat - L1_minus_L3_obsh_Kvadrat) * 2;

	let odnaVtoraia_L2 = (dlina_L2 / 2);
	let kvadrat_odnaVtoraia_L2 = Math.pow(odnaVtoraia_L2, 2);
	let b_kv_min_kvadrat_odnaVtoraia_L2 = b_Kvadrat - kvadrat_odnaVtoraia_L2;
	let koren_B_kv_min_kvadrat_odnaVtoraia_L2 = Math.sqrt(b_kv_min_kvadrat_odnaVtoraia_L2);
	let s_Treugol = (koren_B_kv_min_kvadrat_odnaVtoraia_L2 * dlina_L2);

	let result = (s_Trapecia) + (s_Treugol);
	roof_block.querySelector("#valm_roof__sum_square-all-id").value = result.toFixed(2);
}

/**
 * @function [sumAllSquareDvuskatRoof] Функция подсчета площади мансардной крыши
 */
function sumAllSquareMansardRoof() {
	let roof_block = document.querySelector('.roof');
	let form = document.getElementById('mansard_form_wrp');
	let dlina = Number(form.querySelector(".mansard_roof__length").value);
	let visota1 = Number(form.querySelector(".mansard_roof__height1").value);
	let visota2 = Number(form.querySelector(".mansard_roof__height2").value);
	let result = ((visota1 * dlina) + (visota2 * dlina)) * 2;
	roof_block.querySelector("#mansard_roof__sum_square-all-id").value = result.toFixed(2);
}
















































