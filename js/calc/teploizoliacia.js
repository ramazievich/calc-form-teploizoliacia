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
 * @function [clearAllFormKarkasWindow] функция сброса всех данных в заполненых полях когда checkbox снят
 * @function [clearAllFormKarkasDoor] функция сброса всех данных в заполненых полях когда checkbox снят
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
		clearAllFormKarkasWindow();
		clearAllFormKarkasDoor();

		funcStenaKarkasWindow();
		perimeterKarkasWindow();
		sumPerimetersKarkasWindow();
		sumAreasKarkasWindow();	

		funcStenaKarkasWall();
		perimeterKarkasWall();
		sumPerimetersKarkasWall();
		sumAreasKarkasWall();

		funcStenaKarkasDoor();
		perimeterKarkasDoor();
		sumPerimetersKarkasDoor();
		sumAreasKarkasDoor();
	}
}
function clearAllFormKarkasWall() {
	let form = document.getElementById('karkas_wall_wrp');
	let inputs = form.getElementsByTagName('input');
	for (let input of inputs)
		input.value = '';
}

function clearAllFormKarkasWindow() {
	let form = document.getElementById('karkas_window_wrp');
	let inputs = form.getElementsByTagName('input');
	for (let input of inputs)
		input.value = '';
}

function clearAllFormKarkasDoor() {
	let form = document.getElementById('karkas_door_wrp');
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
 * @function [perimeterKarkasWall] Функция подсчета периметра каркасной стены для одной формы
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
 * @function [perimeterKarkasWindow] Функция подсчета ширины окна каркасной стены для одной формы
 * @param {formKarkasWindow} form переменная для формы подсчета площади стен
 * @param {number} dlina - поле ввода длины стен
 * @param {number} result - результат подсчета
*/
function perimeterKarkasWindow() {
	for (let i = 0, max = formKarkasWindow.length; i < max; i++) {
		let form = formKarkasWindow[i];
		let shirina = Number(form.querySelector(".karkas_window__length").value);
		shirina = parseFloat(shirina);
		let result = shirina;
		form.querySelector(".karkas_window__perimeter").value = result;
	}
} 

/**
 * @function [perimeterKarkasDoor] Функция подсчета ширины двери каркасной стены для одной формы
 * @param {formKarkasDoor} form переменная для формы подсчета площади стен
 * @param {number} dlina - поле ввода длины стен
 * @param {number} result - результат подсчета
*/
function perimeterKarkasDoor() {
	for (let i = 0, max = formKarkasDoor.length; i < max; i++) {
		let form = formKarkasDoor[i];
		let shirina = Number(form.querySelector(".karkas_door__length").value);
		shirina = parseFloat(shirina);
		let result = shirina;
		form.querySelector(".karkas_door__perimeter").value = result;
	}
} 


/**
 * @function [sumPerimetersKarkasWall] Функция подсчета всех периметров каркасных стен со всех форм
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
 * @function [sumPerimetersKarkasWindow] Функция подсчета всех ширин окон в каркасных стенах со всех форм
 * @param {number} perim - переменная для поля периметра из формы
 * @param {forEach} function (el) - перебор полей периметра по всем формам
 * @param {number} sum - складываем все поля периметра из всех созданных форм
 */
function sumPerimetersKarkasWindow() {
	let perim = document.getElementsByClassName("karkas_window__perimeter");
	let sum = 0;
	[].forEach.call(perim, function (el) {
		sum += parseFloat(el.value);
		console.log(sum);
	});
	document.getElementById("karkas_window__perimeter-all-id").value = sum;
}


/**
 * @function [sumPerimetersKarkasDoor] Функция подсчета всех ширин дверей в каркасных стенах со всех форм
 * @param {number} perim - переменная для поля периметра из формы
 * @param {forEach} function (el) - перебор полей периметра по всем формам
 * @param {number} sum - складываем все поля периметра из всех созданных форм
 */
function sumPerimetersKarkasDoor() {
	let perim = document.getElementsByClassName("karkas_door__perimeter");
	let sum = 0;
	[].forEach.call(perim, function (el) {
		sum += parseFloat(el.value);
		console.log(sum);
	});
	document.getElementById("karkas_door__perimeter-all-id").value = sum;
}

/**
 * @function [funcStenaKarkasWall] Функция подсчета площади каркасной стены для одной формы
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
 * @function [funcStenaKarkasWindow] Функция подсчета площади окна для одной формы в разделе каркасная стена 
 * @param {formKarkasWindow} formKarkasWindow переменная для формы подсчета площади окна
 * @param {number} dlina - поле ввода длины стены
 * @param {number} visota - поле ввода высоты стены
 * @param {number} result - результат подсчета
 */
let formKarkasWindow = document.querySelectorAll(".karkas_window__form");
console.log(formKarkasWindow);

function funcStenaKarkasWindow() {
	formKarkasWindow = document.querySelectorAll(".karkas_window__form");
	for (let i = 0, max = formKarkasWindow.length; i < max; i++) {
		let form = formKarkasWindow[i];
		let dlina = Number(form.querySelector(".karkas_window__length").value);
		dlina = parseFloat(dlina);
		let visota = Number(form.querySelector(".karkas_window__height").value);
		visota = parseFloat(visota);
		let result = (dlina * visota);
		form.querySelector(".karkas_window__result").value = result.toFixed(2);
	}
}

/**
 * @function [funcStenaKarkasDoor] Функция подсчета площади дверей для одной формы в разделе каркасная стена 
 * @param {formKarkasDoor} formKarkasDoor переменная для формы подсчета площади окна
 * @param {number} dlina - поле ввода длины стены
 * @param {number} visota - поле ввода высоты стены
 * @param {number} result - результат подсчета
 */
let formKarkasDoor = document.querySelectorAll(".karkas_door__form");
console.log(formKarkasDoor);

function funcStenaKarkasDoor() {
	formKarkasDoor = document.querySelectorAll(".karkas_door__form");
	for (let i = 0, max = formKarkasDoor.length; i < max; i++) {
		let form = formKarkasDoor[i];
		let dlina = Number(form.querySelector(".karkas_door__length").value);
		dlina = parseFloat(dlina);
		let visota = Number(form.querySelector(".karkas_door__height").value);
		visota = parseFloat(visota);
		let result = (dlina * visota);
		form.querySelector(".karkas_door__result").value = result.toFixed(2);
	}
}

/**
 * @function [sumAreasKarkasWall] функция для сумирования всех площадей каркасных стен со всех форм
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
 * @function [sumAreasKarkasWindow] функция для сумирования всех площадей окон со всех форм каркасных стен
 * @param {number} areas - переменная поля с площадью стены
 * @param [function (el)] - функция перебора и сумирования всех полученных площадей из всех форм
 * @param {number} sum - сумма всех площадей после сложения
 */
function sumAreasKarkasWindow() {
	let areas = document.getElementsByClassName("karkas_window__result");
	let sum = 0;
	[].forEach.call(areas, function (el) {
		sum += parseFloat(el.value);
		console.log(sum);
	});
	document.getElementById("karkas_window__area-all2-id").value = sum;
}

/**
 * @function [sumAreasKarkasDoor] функция для сумирования всех площадей дверей со всех форм каркасных стен
 * @param {number} areas - переменная поля с площадью стены
 * @param [function (el)] - функция перебора и сумирования всех полученных площадей из всех форм
 * @param {number} sum - сумма всех площадей после сложения
 */
function sumAreasKarkasDoor() {
	let areas = document.getElementsByClassName("karkas_door__result");
	let sum = 0;
	[].forEach.call(areas, function (el) {
		sum += parseFloat(el.value);
		console.log(sum);
	});
	document.getElementById("karkas_door__area-all2-id").value = sum;
}

/**
 * Кнопка добавления новой формы для стен в разделе каркасные стены
 * @param {node} node - переменная для всей формы
 * @param {cloneNode} newClonedNode - получаем форму и клонируем ее
 * @param {newFormStenaId} newFormStenaId - добавляем новую форму
 * @function [copyFormKarkasWall] - Функция копирования формы для каркасных стен
 */
let newFormStenaId = 1;
let node = document.getElementById("karkas_wall__form-id").cloneNode(true);

// document.querySelector(".add-form").addEventListener("click", function () {
$(document).on('click', '.add-form', function () {
	let newClonedNode = node.cloneNode(true);
	document.querySelector("#karkas_wall_wrp").appendChild(newClonedNode);
	newClonedNode.id = "karkas_wall__form-id-" + newFormStenaId;
	newClonedNode.querySelector(".karkas_wall__length").name = 'data[Стены][' + newFormStenaId + '][Длина]';
	newClonedNode.querySelector(".karkas_wall__length").value = '';
	newClonedNode.querySelector(".karkas_wall__height").name = 'data[Стены][' + newFormStenaId + '][Высота]';
	newClonedNode.querySelector(".karkas_wall__height").value = '';
	newFormStenaId++;
	funcStenaKarkasWall();
	perimeterKarkasWall();
	sumPerimetersKarkasWall();
	sumAreasKarkasWall();	
});

function copyFormKarkasWall(el) {
	let articleDiv = el.parentElement;
	let newArticleDiv = articleDiv.cloneNode(true);
	document.querySelector("#karkas_wall_wrp").appendChild(newArticleDiv);
	newArticleDiv.id = "karkas_wall__form-id-" + newFormStenaId;
	newArticleDiv.querySelector(".karkas_wall__length").name = 'data[Стены][' + newFormStenaId + '][Длина]';
	newArticleDiv.querySelector(".karkas_wall__height").name = 'data[Стены][' + newFormStenaId + '][Высота]';
	newFormStenaId++;
	funcStenaKarkasWall();
	perimeterKarkasWall();
	sumPerimetersKarkasWall();
	sumAreasKarkasWall();	
}


/**
 * Кнопка добавления новой формы для окон в разделе каркасные стены
 * @param {nodeKarkasWindow} nodeKarkasWindow - переменная для всей формы
 * @param {cloneNode} newClonedNode - получаем форму и клонируем ее
 * @param {newFormKarkasWindowId} newFormKarkasWindowId - добавляем новую форму
 * @function [copyFormKarkasWindow] - Функция копирования формы окон для каркасных стен
 */
let newFormKarkasWindowId = 1;
let nodeKarkasWindow = document.getElementById("karkas_window__form-id").cloneNode(true);

// document.querySelector(".add-form").addEventListener("click", function () {
$(document).on('click', '.add-form__karkas_window', function () {
	let newClonedNode = nodeKarkasWindow.cloneNode(true);
	document.querySelector("#karkas_window_wrp").appendChild(newClonedNode);
	newClonedNode.id = "karkas_window__form-id-" + newFormKarkasWindowId;
	newClonedNode.querySelector(".karkas_window__length").name = 'data[Окна][' + newFormKarkasWindowId + '][Ширина]';
	newClonedNode.querySelector(".karkas_window__length").value = '';
	newClonedNode.querySelector(".karkas_window__height").name = 'data[Окна][' + newFormKarkasWindowId + '][Высота]';
	newClonedNode.querySelector(".karkas_window__height").value = '';
	newFormKarkasWindowId++;
	funcStenaKarkasWindow();
	perimeterKarkasWindow();
	sumPerimetersKarkasWindow();
	sumAreasKarkasWindow();	
});

function copyFormKarkasWindow(el) {
	let articleDiv = el.parentElement;
	let newArticleDiv = articleDiv.cloneNode(true);
	document.querySelector("#karkas_window_wrp").appendChild(newArticleDiv);
	newArticleDiv.id = "karkas_window__form-id-" + newFormKarkasWindowId;
	newArticleDiv.querySelector(".karkas_window__length").name = 'data[Окна][' + newFormKarkasWindowId + '][Ширина]';
	newArticleDiv.querySelector(".karkas_window__height").name = 'data[Окна][' + newFormKarkasWindowId + '][Высота]';
	newFormKarkasWindowId++;
	funcStenaKarkasWindow();
	perimeterKarkasWindow();
	sumPerimetersKarkasWindow();
	sumAreasKarkasWindow();	
}

/**
 * Кнопка добавления новой формы для дверей в разделе каркасные стены
 * @param {nodeKarkasDoor} nodeKarkasDoor - переменная для всей формы
 * @param {cloneNode} newClonedNode - получаем форму и клонируем ее
 * @param {newFormKarkasDoorId} newFormKarkasDoorId - добавляем новую форму
 * @function [copyFormKarkasDoor] - Функция копирования формы дверей для каркасных стен
 */
let newFormKarkasDoorId = 1;
let nodeKarkasDoor = document.getElementById("karkas_door__form-id").cloneNode(true);

// document.querySelector(".add-form").addEventListener("click", function () {
$(document).on('click', '.add-form__karkas_door', function () {
	let newClonedNode = nodeKarkasDoor.cloneNode(true);
	document.querySelector("#karkas_door_wrp").appendChild(newClonedNode);
	newClonedNode.id = "karkas_door__form-id-" + newFormKarkasDoorId;
	newClonedNode.querySelector(".karkas_door__length").name = 'data[Двери][' + newFormKarkasDoorId + '][Ширина]';
	newClonedNode.querySelector(".karkas_door__length").value = '';
	newClonedNode.querySelector(".karkas_door__height").name = 'data[Двери][' + newFormKarkasDoorId + '][Высота]';
	newClonedNode.querySelector(".karkas_door__height").value = '';
	newFormKarkasDoorId++;
	funcStenaKarkasDoor();
	perimeterKarkasDoor();
	sumPerimetersKarkasDoor();
	sumAreasKarkasDoor();	
});

function copyFormKarkasDoor(el) {
	let articleDiv = el.parentElement;
	let newArticleDiv = articleDiv.cloneNode(true);
	document.querySelector("#karkas_door_wrp").appendChild(newArticleDiv);
	newArticleDiv.id = "karkas_door__form-id-" + newFormKarkasDoorId;
	newArticleDiv.querySelector(".karkas_door__length").name = 'data[Двери][' + newFormKarkasDoorId + '][Ширина]';
	newArticleDiv.querySelector(".karkas_door__height").name = 'data[Двери][' + newFormKarkasDoorId + '][Высота]';
	newFormKarkasDoorId++;
	funcStenaKarkasDoor();
	perimeterKarkasDoor();
	sumPerimetersKarkasDoor();
	sumAreasKarkasDoor();	
}


/**
 * @function [deleteFormKarkasWall] Функция удаления формы стена для каркасных стен
 * @param {forms} forms - переменная для всей формы
 * @param {remove} remove - удаляем форму
 * @function [sumPerimetersKarkasWall] вызываем функцию подсчета всех периметров со всех форм для стен
 * @function [sumAreas] вызываем функцию подсчета всех площадей со всех форм для стен
 */
function deleteFormKarkasWall(btn) {
	let forms = document.getElementsByClassName('karkas_wall__form');
	if (forms.length > 1) {
		btn.parentElement.remove();
		sumPerimetersKarkasWall();
		sumAreasKarkasWall();
	}
}


/**
 * @function [deleteFormKarkasWindow] Функция удаления формы для окон в каркасных стенах
 * @param {forms} forms - переменная для всей формы
 * @param {remove} remove - удаляем форму
 * @function [sumPerimetersKarkasWindow] вызываем функцию подсчета всех периметров со всех форм для стен
 * @function [sumAreas] вызываем функцию подсчета всех площадей со всех форм для стен
 */
function deleteFormKarkasWindow(btn) {
	let forms = document.getElementsByClassName('karkas_window__form');
	if (forms.length > 0) {
		btn.parentElement.remove();
		sumPerimetersKarkasWindow();
		sumAreasKarkasWindow();
		document.querySelector(".karkas_window_wrp").classList.remove("hidden");
		document.querySelector(".add-form__karkas_window").classList.add("hidden");
		document.querySelector(".show-form__karkas_window").classList.remove("hidden");		
	}
}

/**
 * @function [deleteFormKarkasDoor] Функция удаления формы для дверей в каркасных стенах
 * @param {forms} forms - переменная для всей формы
 * @param {remove} remove - удаляем форму
 * @function [sumPerimetersKarkasDoor] вызываем функцию подсчета всех периметров со всех форм для стен
 * @function [sumAreas] вызываем функцию подсчета всех площадей со всех форм для стен
 */
function deleteFormKarkasDoor(btn) {
	let forms = document.getElementsByClassName('karkas_door__form');
	if (forms.length > 0) {
		btn.parentElement.remove();
		sumPerimetersKarkasDoor();
		sumAreasKarkasDoor();
		document.querySelector(".karkas_door_wrp").classList.remove("hidden");
		document.querySelector(".add-form__karkas_door").classList.add("hidden");
		document.querySelector(".show-form__karkas_door").classList.remove("hidden");		
	}
}


/**
 * Кнопка показа формы для количества окон в разделе каркасные стены
 * @param {remove} - удаляет класс hidden у формы
 * @function [remuveBtnWindow] remuveBtnWindow - добавляет класс hidden к кнопке показать форму
 */
// document.querySelector(".show-form-windows").addEventListener("click", function () {
	$(document).on('click', '.show-form__karkas_window', function () {
		document.querySelector(".karkas_window_wrp").classList.remove("hidden");
		document.querySelector(".add-form__karkas_window").classList.remove("hidden");
		document.querySelector(".show-form__karkas_window").classList.add("hidden");
	});

/**
 * Кнопка показа формы для количества дверей в разделе каркасные стены
 * @param {remove} - удаляет класс hidden у формы
 * @function [remuveBtnDoor] remuveBtnWindow - добавляет класс hidden к кнопке показать форму
 */
// document.querySelector(".show-form-windows").addEventListener("click", function () {
	$(document).on('click', '.show-form__karkas_door', function () {
		document.querySelector(".karkas_door_wrp").classList.remove("hidden");
		document.querySelector(".add-form__karkas_door").classList.remove("hidden");
		document.querySelector(".show-form__karkas_door").classList.add("hidden");
	});	
	















































