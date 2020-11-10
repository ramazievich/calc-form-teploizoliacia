'use strict';


/**
 * Для чекбокса
 * показ формы расчета теплоизоляции для односкатной крыши
 * @function [showOdnoskatRoofItems] добавляет класс hidden к чекбоксу
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
 * @function [showMansardRoofItems] добавляет класс hidden к чекбоксу
 * @param {remove} - удаляет класс hidden у формы
 * @param {check}  - переменная к классу для чекбокса
 * @param {add}  - добавляет hidden к форме
 * @function [clearAllFormMansardRoof] функция сброса всех данных в заполненых полях когда checkbox снят
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
 * Для чекбокса
 * показ формы расчета теплоизоляции для каркасной стены
 * @function [showKarkasWallItems] добавляет класс hidden к чекбоксу
 * @param {remove} - удаляет класс hidden у формы
 * @param {check}  - переменная к классу для чекбокса
 * @param {add}  - добавляет hidden к форме
 * @function [clearAllFormKarkasWall] функция сброса всех данных в заполненых полях когда checkbox снят
 */

let checkboxKarkasWall = document.getElementById('check-karkas_wall');
checkboxKarkasWall.addEventListener('click', clearAllFormKarkasWall);

function showKarkasWallItems(check) {
	check = document.getElementById("check-karkas_wall");
	if (check.checked) {
		document.getElementById("karkas_wall__all_wrp-id").classList.remove("hidden");
	} else {
		document.getElementById("karkas_wall__all_wrp-id").classList.add("hidden");
		clearAllFormKarkasWall();
	}
}
function clearAllFormKarkasWall() {
	let form = document.getElementById('karkas_wall_wrp');
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

/**
 * @function [perimeterKarkasWall] Функция подсчета периметра стены для одной формы
 * @param {allForms} form переменная для формы подсчета площади стен
 * @param {number} dlina - поле ввода длины стен
 * @param {number} result - результат подсчета
 */
function perimeterKarkasWall() {
	for (let i = 0, max = allForms.length; i < max; i++) {
		let form = allForms[i];
		let dlina = Number(form.querySelector(".karkas_wall__length").value);
		dlina = parseFloat(dlina);
		let result = dlina;
		form.querySelector(".karkas_wall__perimeter").value = result;
	}
}


/**
 * @function [sumPerimetersKarkasWall] Функция подсчета всех периметров стен со всех форм
 * @param {number} perim - переменная для поля периметра из формы
 * @param {forEach} function (el) - перебор полей периметра по всем формам
 * @param {number} sum - складываем все поля периметра из всех созданных форм
 */
function sumPerimetersKarkasWall() {
	let perim = document.getElementsByClassName("karkas_wall__perimeter");
	let sum = 0;
	[].forEach.call(perim, function (el) {
		sum += parseFloat(el.value);
		console.log(sum);
	});
	document.getElementById("karkas_wall__perimeter-all-id").value = sum;
}

/**
 * @function [funcStenaKarkasWall] Функция подсчета площади стены для одной формы
 * @param {allForms} allForms переменная для формы подсчета площади стен
 * @param {number} dlina - поле ввода длины стены
 * @param {number} visota - поле ввода высоты стены
 * @param {number} result - результат подсчета
 */
let allForms = document.querySelectorAll(".karkas_wall__form");
console.log(allForms);

function funcStenaKarkasWall() {
	allForms = document.querySelectorAll(".karkas_wall__form");
	for (let i = 0, max = allForms.length; i < max; i++) {
		let form = allForms[i];
		let dlina = Number(form.querySelector(".karkas_wall__length").value);
		dlina = parseFloat(dlina);
		let visota = Number(form.querySelector(".karkas_wall__height").value);
		visota = parseFloat(visota);
		let result = (dlina * visota);
		form.querySelector(".karkas_wall__result").value = result.toFixed(2);
	}
}

/**
 * @function [sumAreasKarkasWall] функция для сумирования всех площадей стен со всех форм
 * @param {number} areas - переменная поля с площадью стены
 * @param [function (el)] - функция перебора и сумирования всех полученных площадей из всех форм
 * @param {number} sum - сумма всех площадей после сложения
 */
function sumAreasKarkasWall() {
	let areas = document.getElementsByClassName("karkas_wall__result");
	let sum = 0;
	[].forEach.call(areas, function (el) {
		sum += parseFloat(el.value);
		console.log(sum);
	});
	document.getElementById("karkas_wall__area-all2-id").value = sum;
}

/**
 * Кнопка добавления новой формы для стен в разделе стены
 * @param {node} node - переменная для всей формы
 * @param {cloneNode} newClonedNode - получаем форму и клонируем ее
 * @param {newFormStenaId} newFormStenaId - добавляем новую форму
 * @function [copyForm] el - функция копирования формы
 */
let newFormStenaId = 1;
let node = document.getElementById("karkas_wall__form-id").cloneNode(true);

// document.querySelector(".add-form").addEventListener("click", function () {
$(document).on('click', '.add-form', function () {
	let newClonedNode = node.cloneNode(true);
	document.querySelector(".karkas_wall").appendChild(newClonedNode);
	newClonedNode.id = "karkas_wall__form-id-" + newFormStenaId;
	newClonedNode.querySelector(".karkas_wall__length").name = 'data[Стены][' + newFormStenaId + '][Длина]';
	newClonedNode.querySelector(".karkas_wall__length").value = '';
	newClonedNode.querySelector(".karkas_wall__height").name = 'data[Стены][' + newFormStenaId + '][Высота]';
	newClonedNode.querySelector(".karkas_wall__height").value = '';
	funcStenaKarkasWall();
	newFormStenaId++;
});

function copyFormKarkasWall(el) {
	let articleDiv = el.parentElement;
	let newArticleDiv = articleDiv.cloneNode(true);
	document.querySelector(".karkas_wall").appendChild(newArticleDiv);
	newArticleDiv.id = "karkas_wall__form-id-" + newFormStenaId;
	newArticleDiv.querySelector(".karkas_wall__length").name = 'data[Стены][' + newFormStenaId + '][Длина]';
	newArticleDiv.querySelector(".karkas_wall__height").name = 'data[Стены][' + newFormStenaId + '][Высота]';
	funcStenaKarkasWall();
	newFormStenaId++;
}


/**
 * @function [deleteFormKarkasWall] Функция удаления формы для стен
 * @param {forms} forms - переменная для всей формы
 * @param {remove} remove - удаляем форму
 * @function [sumPerimetersKarkasWall] вызываем функцию подсчета всех периметров со всех форм для стен
 * @function [sumAreas] вызываем функцию подсчета всех площадей со всех форм для стен
 */
function deleteFormKarkasWall(btn) {
	let forms = document.getElementsByClassName('karkas_wall');
	if (forms.length > 1) {
		btn.parentElement.remove();
		sumPerimetersKarkasWall();
		sumAreasKarkasWall();
	}
}















































