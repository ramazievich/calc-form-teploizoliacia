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
 * Для чекбокса
 * показ формы расчета теплоизоляции для каркасной стены
 * @function [showStoneWallItems] добавляет класс hidden к чекбоксу
 * @param {remove} - удаляет класс hidden у формы
 * @param {check}  - переменная к классу для чекбокса
 * @param {add}  - добавляет hidden к форме
 * @function [clearAllFormStoneWall] функция сброса всех данных в заполненых полях когда checkbox снят
 * @function [clearAllFormStoneWindow] функция сброса всех данных в заполненых полях когда checkbox снят
 * @function [clearAllFormStoneDoor] функция сброса всех данных в заполненых полях когда checkbox снят
 */

let checkboxStoneWall = document.getElementById('check-stone_wall');
checkboxStoneWall.addEventListener('click', clearAllFormStoneWall);

function showStoneWallItems(check) {
	check = document.getElementById("check-stone_wall");
	if (check.checked) {
		document.getElementById("stone_wall__all_wrp-id").classList.remove("hidden");
	} else {
		document.getElementById("stone_wall__all_wrp-id").classList.add("hidden");
		clearAllFormStoneWall();
		clearAllFormStoneWindow();
		clearAllFormStoneDoor();

		funcStenaStoneWindow();
		perimeterStoneWindow();
		sumPerimetersStoneWindow();
		sumAreasStoneWindow();	

		funcStenaStoneWall();
		perimeterStoneWall();
		sumPerimetersStoneWall();
		sumAreasStoneWall();

		funcStenaStoneDoor();
		perimeterStoneDoor();
		sumPerimetersStoneDoor();
		sumAreasStoneDoor();
	}
}
function clearAllFormStoneWall() {
	let form = document.getElementById('stone_wall_wrp');
	let inputs = form.getElementsByTagName('input');
	for (let input of inputs)
		input.value = '';
}

function clearAllFormStoneWindow() {
	let form = document.getElementById('stone_window_wrp');
	let inputs = form.getElementsByTagName('input');
	for (let input of inputs)
		input.value = '';
}

function clearAllFormStoneDoor() {
	let form = document.getElementById('stone_door_wrp');
	let inputs = form.getElementsByTagName('input');
	for (let input of inputs)
		input.value = '';
}

/**
 * Для чекбокса
 * показ формы расчета теплоизоляции для перегородок
 * @function [showPeregorWallItems] добавляет класс hidden к чекбоксу
 * @param {remove} - удаляет класс hidden у формы
 * @param {check}  - переменная к классу для чекбокса
 * @param {add}  - добавляет hidden к форме
 * @function [clearAllFormPeregorWall] функция сброса всех данных в заполненых полях когда checkbox снят
 * @function [clearAllFormPeregorWindow] функция сброса всех данных в заполненых полях когда checkbox снят
 * @function [clearAllFormPeregorDoor] функция сброса всех данных в заполненых полях когда checkbox снят
 */

let checkboxPeregorWall = document.getElementById('check-peregor_wall');
checkboxPeregorWall.addEventListener('click', clearAllFormPeregorWall);

function showPeregorWallItems(check) {
	check = document.getElementById("check-peregor_wall");
	if (check.checked) {
		document.getElementById("peregor_wall__all_wrp-id").classList.remove("hidden");
	} else {
		document.getElementById("peregor_wall__all_wrp-id").classList.add("hidden");
		clearAllFormPeregorWall();
		clearAllFormPeregorWindow();
		clearAllFormPeregorDoor();

		funcStenaPeregorWindow();
		perimeterPeregorWindow();
		sumPerimetersPeregorWindow();
		sumAreasPeregorWindow();	

		funcStenaPeregorWall();
		perimeterPeregorWall();
		sumPerimetersPeregorWall();
		sumAreasPeregorWall();

		funcStenaPeregorDoor();
		perimeterPeregorDoor();
		sumPerimetersPeregorDoor();
		sumAreasPeregorDoor();
	}
}
function clearAllFormPeregorWall() {
	let form = document.getElementById('peregor_wall_wrp');
	let inputs = form.getElementsByTagName('input');
	for (let input of inputs)
		input.value = '';
}

function clearAllFormPeregorWindow() {
	let form = document.getElementById('peregor_window_wrp');
	let inputs = form.getElementsByTagName('input');
	for (let input of inputs)
		input.value = '';
}

function clearAllFormPeregorDoor() {
	let form = document.getElementById('peregor_door_wrp');
	let inputs = form.getElementsByTagName('input');
	for (let input of inputs)
		input.value = '';
}

/**
 * Для чекбокса
 * показ формы расчета теплоизоляции для деревянных перекрытий
 * @function [showPerekritWoodItems] добавляет класс hidden к чекбоксу
 * @param {remove} - удаляет класс hidden у формы
 * @param {check}  - переменная к классу для чекбокса
 * @param {add}  - добавляет hidden к форме
 * @function [clearAllFormPerekritWood] функция сброса всех данных в заполненых полях когда checkbox снят
 */

let checkboxPerekritWood = document.getElementById('check-perekrit_wood');
checkboxPerekritWood.addEventListener('click', clearAllFormPerekritWood);

function showPerekritWoodItems(check) {
	check = document.getElementById("check-perekrit_wood");
	if (check.checked) {
		document.getElementById("perekrit_wood__all_wrp-id").classList.remove("hidden");
		document.getElementById("img__perekrit_wood_color-id").classList.remove("hidden");
		document.getElementById("img__perekrit_wood-id").classList.add("hidden");
	} else {
		document.getElementById("perekrit_wood__all_wrp-id").classList.add("hidden");
		document.getElementById("img__perekrit_wood_color-id").classList.add("hidden");
		document.getElementById("img__perekrit_wood-id").classList.remove("hidden");
		clearAllFormPerekritWood();
		clearAllFormPerekritWood();
		clearAllFormPerekritWood();

		funcPerekritWood();
		sumAreasPerekritWood();
	}
}
function clearAllFormPerekritWood() {
	let form = document.getElementById('perekrit_wood_wrp');
	let inputs = form.getElementsByTagName('input');
	for (let input of inputs)
		input.value = '';
}

/**
 * Для чекбокса
 * показ формы расчета теплоизоляции для бетонных перекрытий
 * @function [showPerekritStone] добавляет класс hidden к чекбоксу
 * @param {remove} - удаляет класс hidden у формы
 * @param {check}  - переменная к классу для чекбокса
 * @param {add}  - добавляет hidden к форме
 * @function [clearAllFormPerekritStone] функция сброса всех данных в заполненых полях когда checkbox снят
 */

let checkboxPerekritStone = document.getElementById('check-perekrit_stone');
checkboxPerekritStone.addEventListener('click', clearAllFormPerekritStone);

function showPerekritStoneItems(check) {
	check = document.getElementById("check-perekrit_stone");
	if (check.checked) {
		document.getElementById("perekrit_stone__all_wrp-id").classList.remove("hidden");
		document.getElementById("img__perekrit_stone_color-id").classList.remove("hidden");
		document.getElementById("img__perekrit_stone-id").classList.add("hidden");
	} else {
		document.getElementById("perekrit_stone__all_wrp-id").classList.add("hidden");
		document.getElementById("img__perekrit_stone_color-id").classList.add("hidden");
		document.getElementById("img__perekrit_stone-id").classList.remove("hidden");
		clearAllFormPerekritStone();
		clearAllFormPerekritStone();
		clearAllFormPerekritStone();

		funcPerekritStone();
		sumAreasPerekritStone();
	}
}
function clearAllFormPerekritStone() {
	let form = document.getElementById('perekrit_stone_wrp');
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
 * @function [perimeterStoneWall] Функция подсчета периметра слойной стены для одной формы
 * @param {allFormsStoneWall} form переменная для формы подсчета площади стен
 * @param {number} dlina - поле ввода длины стен
 * @param {number} result - результат подсчета
 */
function perimeterStoneWall() {
	for (let i = 0, max = allFormsStoneWall.length; i < max; i++) {
		let form = allFormsStoneWall[i];
		let dlina = Number(form.querySelector(".stone_wall__length").value);
		dlina = parseFloat(dlina);
		let result = dlina;
		form.querySelector(".stone_wall__perimeter").value = result;
	}
}

/**
 * @function [perimeterPeregorWall] Функция подсчета периметра перегородки для одной формы
 * @param {allFormsPeregorWall} form переменная для формы подсчета площади стен
 * @param {number} dlina - поле ввода длины стен
 * @param {number} result - результат подсчета
 */
function perimeterPeregorWall() {
	for (let i = 0, max = allFormsPeregorWall.length; i < max; i++) {
		let form = allFormsPeregorWall[i];
		let dlina = Number(form.querySelector(".peregor_wall__length").value);
		dlina = parseFloat(dlina);
		let result = dlina;
		form.querySelector(".peregor_wall__perimeter").value = result;
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
 * @function [perimeterStoneWindow] Функция подсчета ширины окна слойной стены для одной формы
 * @param {formStoneWindow} form переменная для формы подсчета площади стен
 * @param {number} dlina - поле ввода длины стен
 * @param {number} result - результат подсчета
*/
function perimeterStoneWindow() {
	for (let i = 0, max = formStoneWindow.length; i < max; i++) {
		let form = formStoneWindow[i];
		let shirina = Number(form.querySelector(".stone_window__length").value);
		shirina = parseFloat(shirina);
		let result = shirina;
		form.querySelector(".stone_window__perimeter").value = result;
	}
} 

/**
 * @function [perimeterPeregorWindow] Функция подсчета ширины окна перегородки для одной формы
 * @param {formPeregorWindow} form переменная для формы подсчета площади стен
 * @param {number} dlina - поле ввода длины стен
 * @param {number} result - результат подсчета
*/
function perimeterPeregorWindow() {
	for (let i = 0, max = formPeregorWindow.length; i < max; i++) {
		let form = formPeregorWindow[i];
		let shirina = Number(form.querySelector(".peregor_window__length").value);
		shirina = parseFloat(shirina);
		let result = shirina;
		form.querySelector(".peregor_window__perimeter").value = result;
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
 * @function [perimeterStoneDoor] Функция подсчета ширины двери слойной стены для одной формы
 * @param {formStoneDoor} form переменная для формы подсчета площади стен
 * @param {number} dlina - поле ввода длины стен
 * @param {number} result - результат подсчета
*/
function perimeterStoneDoor() {
	for (let i = 0, max = formStoneDoor.length; i < max; i++) {
		let form = formStoneDoor[i];
		let shirina = Number(form.querySelector(".stone_door__length").value);
		shirina = parseFloat(shirina);
		let result = shirina;
		form.querySelector(".stone_door__perimeter").value = result;
	}
} 


/**
 * @function [perimeterPeregorDoor] Функция подсчета ширины двери перегородки для одной формы
 * @param {formPeregorDoor} form переменная для формы подсчета площади стен
 * @param {number} dlina - поле ввода длины стен
 * @param {number} result - результат подсчета
*/
function perimeterPeregorDoor() {
	for (let i = 0, max = formPeregorDoor.length; i < max; i++) {
		let form = formPeregorDoor[i];
		let shirina = Number(form.querySelector(".peregor_door__length").value);
		shirina = parseFloat(shirina);
		let result = shirina;
		form.querySelector(".peregor_door__perimeter").value = result;
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
 * @function [sumPerimetersStoneWall] Функция подсчета всех периметров слойных стен со всех форм
 * @param {number} perim - переменная для поля периметра из формы
 * @param {forEach} function (el) - перебор полей периметра по всем формам
 * @param {number} sum - складываем все поля периметра из всех созданных форм
 */
function sumPerimetersStoneWall() {
	let perim = document.getElementsByClassName("stone_wall__perimeter");
	let sum = 0;
	[].forEach.call(perim, function (el) {
		sum += parseFloat(el.value);
		console.log(sum);
	});
	document.getElementById("stone_wall__perimeter-all-id").value = sum;
}

/**
 * @function [sumPerimetersPeregorWall] Функция подсчета всех периметров перегородок со всех форм
 * @param {number} perim - переменная для поля периметра из формы
 * @param {forEach} function (el) - перебор полей периметра по всем формам
 * @param {number} sum - складываем все поля периметра из всех созданных форм
 */
function sumPerimetersPeregorWall() {
	let perim = document.getElementsByClassName("peregor_wall__perimeter");
	let sum = 0;
	[].forEach.call(perim, function (el) {
		sum += parseFloat(el.value);
		console.log(sum);
	});
	document.getElementById("peregor_wall__perimeter-all-id").value = sum;
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
 * @function [sumPerimetersStoneWindow] Функция подсчета всех ширин окон в слойных стенах со всех форм
 * @param {number} perim - переменная для поля периметра из формы
 * @param {forEach} function (el) - перебор полей периметра по всем формам
 * @param {number} sum - складываем все поля периметра из всех созданных форм
 */
function sumPerimetersStoneWindow() {
	let perim = document.getElementsByClassName("stone_window__perimeter");
	let sum = 0;
	[].forEach.call(perim, function (el) {
		sum += parseFloat(el.value);
		console.log(sum);
	});
	document.getElementById("stone_window__perimeter-all-id").value = sum;
}

/**
 * @function [sumPerimetersPeregorWindow] Функция подсчета всех ширин окон в перегородках со всех форм
 * @param {number} perim - переменная для поля периметра из формы
 * @param {forEach} function (el) - перебор полей периметра по всем формам
 * @param {number} sum - складываем все поля периметра из всех созданных форм
 */
function sumPerimetersPeregorWindow() {
	let perim = document.getElementsByClassName("peregor_window__perimeter");
	let sum = 0;
	[].forEach.call(perim, function (el) {
		sum += parseFloat(el.value);
		console.log(sum);
	});
	document.getElementById("peregor_window__perimeter-all-id").value = sum;
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
 * @function [sumPerimetersStoneDoor] Функция подсчета всех ширин дверей в слойных стенах со всех форм
 * @param {number} perim - переменная для поля периметра из формы
 * @param {forEach} function (el) - перебор полей периметра по всем формам
 * @param {number} sum - складываем все поля периметра из всех созданных форм
 */
function sumPerimetersStoneDoor() {
	let perim = document.getElementsByClassName("stone_door__perimeter");
	let sum = 0;
	[].forEach.call(perim, function (el) {
		sum += parseFloat(el.value);
		console.log(sum);
	});
	document.getElementById("stone_door__perimeter-all-id").value = sum;
}

/**
 * @function [sumPerimetersPeregorDoor] Функция подсчета всех ширин дверей в перегородках со всех форм
 * @param {number} perim - переменная для поля периметра из формы
 * @param {forEach} function (el) - перебор полей периметра по всем формам
 * @param {number} sum - складываем все поля периметра из всех созданных форм
 */
function sumPerimetersPeregorDoor() {
	let perim = document.getElementsByClassName("peregor_door__perimeter");
	let sum = 0;
	[].forEach.call(perim, function (el) {
		sum += parseFloat(el.value);
		console.log(sum);
	});
	document.getElementById("peregor_door__perimeter-all-id").value = sum;
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
 * @function [funcStenaStoneWall] Функция подсчета площади слойной стены для одной формы
 * @param {allFormsStoneWall} allFormsStoneWall переменная для формы подсчета площади стен
 * @param {number} dlina - поле ввода длины стены
 * @param {number} visota - поле ввода высоты стены
 * @param {number} result - результат подсчета
 */
let allFormsStoneWall = document.querySelectorAll(".stone_wall__form");
console.log(allFormsStoneWall);

function funcStenaStoneWall() {
	allFormsStoneWall = document.querySelectorAll(".stone_wall__form");
	for (let i = 0, max = allFormsStoneWall.length; i < max; i++) {
		let form = allFormsStoneWall[i];
		let dlina = Number(form.querySelector(".stone_wall__length").value);
		dlina = parseFloat(dlina);
		let visota = Number(form.querySelector(".stone_wall__height").value);
		visota = parseFloat(visota);
		let result = (dlina * visota);
		form.querySelector(".stone_wall__result").value = result.toFixed(2);
	}
}

/**
 * @function [funcStenaPeregorWall] Функция подсчета площади перегородки для одной формы
 * @param {allFormsPeregorWall} allFormsPeregorWall переменная для формы подсчета площади стен
 * @param {number} dlina - поле ввода длины стены
 * @param {number} visota - поле ввода высоты стены
 * @param {number} result - результат подсчета
 */
let allFormsPeregorWall = document.querySelectorAll(".peregor_wall__form");
console.log(allFormsPeregorWall);

function funcStenaPeregorWall() {
	allFormsPeregorWall = document.querySelectorAll(".peregor_wall__form");
	for (let i = 0, max = allFormsPeregorWall.length; i < max; i++) {
		let form = allFormsPeregorWall[i];
		let dlina = Number(form.querySelector(".peregor_wall__length").value);
		dlina = parseFloat(dlina);
		let visota = Number(form.querySelector(".peregor_wall__height").value);
		visota = parseFloat(visota);
		let result = (dlina * visota);
		form.querySelector(".peregor_wall__result").value = result.toFixed(2);
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
 * @function [funcStenaStoneWindow] Функция подсчета площади окна для одной формы в разделе слойная стена 
 * @param {formStoneWindow} formStoneWindow переменная для формы подсчета площади окна
 * @param {number} dlina - поле ввода длины стены
 * @param {number} visota - поле ввода высоты стены
 * @param {number} result - результат подсчета
 */
let formStoneWindow = document.querySelectorAll(".stone_window__form");
console.log(formStoneWindow);

function funcStenaStoneWindow() {
	formStoneWindow = document.querySelectorAll(".stone_window__form");
	for (let i = 0, max = formStoneWindow.length; i < max; i++) {
		let form = formStoneWindow[i];
		let dlina = Number(form.querySelector(".stone_window__length").value);
		dlina = parseFloat(dlina);
		let visota = Number(form.querySelector(".stone_window__height").value);
		visota = parseFloat(visota);
		let result = (dlina * visota);
		form.querySelector(".stone_window__result").value = result.toFixed(2);
	}
}

/**
 * @function [funcStenaPeregorWindow] Функция подсчета площади окна для одной формы в разделе перегородки 
 * @param {formPeregorWindow} formPeregorWindow переменная для формы подсчета площади окна
 * @param {number} dlina - поле ввода длины стены
 * @param {number} visota - поле ввода высоты стены
 * @param {number} result - результат подсчета
 */
let formPeregorWindow = document.querySelectorAll(".peregor_window__form");
console.log(formPeregorWindow);

function funcStenaPeregorWindow() {
	formPeregorWindow = document.querySelectorAll(".peregor_window__form");
	for (let i = 0, max = formPeregorWindow.length; i < max; i++) {
		let form = formPeregorWindow[i];
		let dlina = Number(form.querySelector(".peregor_window__length").value);
		dlina = parseFloat(dlina);
		let visota = Number(form.querySelector(".peregor_window__height").value);
		visota = parseFloat(visota);
		let result = (dlina * visota);
		form.querySelector(".peregor_window__result").value = result.toFixed(2);
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
 * @function [funcStenaStoneDoor] Функция подсчета площади дверей для одной формы в разделе слойная стена 
 * @param {formStoneDoor} formStoneDoor переменная для формы подсчета площади окна
 * @param {number} dlina - поле ввода длины стены
 * @param {number} visota - поле ввода высоты стены
 * @param {number} result - результат подсчета
 */
let formStoneDoor = document.querySelectorAll(".stone_door__form");
console.log(formStoneDoor);

function funcStenaStoneDoor() {
	formStoneDoor = document.querySelectorAll(".stone_door__form");
	for (let i = 0, max = formStoneDoor.length; i < max; i++) {
		let form = formStoneDoor[i];
		let dlina = Number(form.querySelector(".stone_door__length").value);
		dlina = parseFloat(dlina);
		let visota = Number(form.querySelector(".stone_door__height").value);
		visota = parseFloat(visota);
		let result = (dlina * visota);
		form.querySelector(".stone_door__result").value = result.toFixed(2);
	}
}

/**
 * @function [funcStenaPeregorDoor] Функция подсчета площади дверей для одной формы в разделе перегородки
 * @param {formPeregorDoor} formPeregorDoor переменная для формы подсчета площади окна
 * @param {number} dlina - поле ввода длины стены
 * @param {number} visota - поле ввода высоты стены
 * @param {number} result - результат подсчета
 */
let formPeregorDoor = document.querySelectorAll(".peregor_door__form");
console.log(formPeregorDoor);

function funcStenaPeregorDoor() {
	formPeregorDoor = document.querySelectorAll(".peregor_door__form");
	for (let i = 0, max = formPeregorDoor.length; i < max; i++) {
		let form = formPeregorDoor[i];
		let dlina = Number(form.querySelector(".peregor_door__length").value);
		dlina = parseFloat(dlina);
		let visota = Number(form.querySelector(".peregor_door__height").value);
		visota = parseFloat(visota);
		let result = (dlina * visota);
		form.querySelector(".peregor_door__result").value = result.toFixed(2);
	}
}

/**
 * @function [funcPerekritWood] Функция подсчета площади дерев. перекрытия для одной формы
 * @param {formPerekritWood} formPerekritWood переменная для формы подсчета площади дер. перекрытия
 * @param {number} dlina - поле ввода длины стены
 * @param {number} shirina - поле ввода высоты стены
 * @param {number} result - результат подсчета
 */
let formPerekritWood = document.querySelectorAll(".perekrit_wood__form");
console.log(formPerekritWood);

function funcPerekritWood() {
	formPerekritWood = document.querySelectorAll(".perekrit_wood__form");
	for (let i = 0, max = formPerekritWood.length; i < max; i++) {
		let form = formPerekritWood[i];
		let dlina = Number(form.querySelector(".perekrit_wood__length").value);
		dlina = parseFloat(dlina);
		let shirina = Number(form.querySelector(".perekrit_wood__width").value);
		shirina = parseFloat(shirina);
		let result = (dlina * shirina);
		form.querySelector(".perekrit_wood__result").value = result.toFixed(2);
	}
}


/**
 * @function [funcPerekritStone] Функция подсчета площади бетонных перекрытия для одной формы
 * @param {formPerekritStone} formPerekritStone переменная для формы подсчета площади бетонных перекрытия
 * @param {number} dlina - поле ввода длины стены
 * @param {number} shirina - поле ввода высоты стены
 * @param {number} result - результат подсчета
 */
let formPerekritStone = document.querySelectorAll(".perekrit_stone__form");
console.log(formPerekritStone);

function funcPerekritStone() {
	formPerekritStone = document.querySelectorAll(".perekrit_stone__form");
	for (let i = 0, max = formPerekritStone.length; i < max; i++) {
		let form = formPerekritStone[i];
		let dlina = Number(form.querySelector(".perekrit_stone__length").value);
		dlina = parseFloat(dlina);
		let shirina = Number(form.querySelector(".perekrit_stone__width").value);
		shirina = parseFloat(shirina);
		let result = (dlina * shirina);
		form.querySelector(".perekrit_stone__result").value = result.toFixed(2);
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
 * @function [sumAreasStoneWall] функция для сумирования всех площадей слойных стен со всех форм
 * @param {number} areas - переменная поля с площадью стены
 * @param [function (el)] - функция перебора и сумирования всех полученных площадей из всех форм
 * @param {number} sum - сумма всех площадей после сложения
 */
function sumAreasStoneWall() {
	let areas = document.getElementsByClassName("stone_wall__result");
	let sum = 0;
	[].forEach.call(areas, function (el) {
		sum += parseFloat(el.value);
		console.log(sum);
	});
	document.getElementById("stone_wall__area-all2-id").value = sum;
}

/**
 * @function [sumAreasPeregorWall] функция для сумирования всех площадей перегородок со всех форм
 * @param {number} areas - переменная поля с площадью стены
 * @param [function (el)] - функция перебора и сумирования всех полученных площадей из всех форм
 * @param {number} sum - сумма всех площадей после сложения
 */
function sumAreasPeregorWall() {
	let areas = document.getElementsByClassName("peregor_wall__result");
	let sum = 0;
	[].forEach.call(areas, function (el) {
		sum += parseFloat(el.value);
		console.log(sum);
	});
	document.getElementById("peregor_wall__area-all2-id").value = sum;
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
 * @function [sumAreasStoneWindow] функция для сумирования всех площадей окон со всех форм слойных стен
 * @param {number} areas - переменная поля с площадью стены
 * @param [function (el)] - функция перебора и сумирования всех полученных площадей из всех форм
 * @param {number} sum - сумма всех площадей после сложения
 */
function sumAreasStoneWindow() {
	let areas = document.getElementsByClassName("stone_window__result");
	let sum = 0;
	[].forEach.call(areas, function (el) {
		sum += parseFloat(el.value);
		console.log(sum);
	});
	document.getElementById("stone_window__area-all2-id").value = sum;
}

/**
 * @function [sumAreasPeregorWindow] функция для сумирования всех площадей окон со всех форм перегородок
 * @param {number} areas - переменная поля с площадью стены
 * @param [function (el)] - функция перебора и сумирования всех полученных площадей из всех форм
 * @param {number} sum - сумма всех площадей после сложения
 */
function sumAreasPeregorWindow() {
	let areas = document.getElementsByClassName("peregor_window__result");
	let sum = 0;
	[].forEach.call(areas, function (el) {
		sum += parseFloat(el.value);
		console.log(sum);
	});
	document.getElementById("peregor_window__area-all2-id").value = sum;
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
 * @function [sumAreasStoneDoor] функция для сумирования всех площадей дверей со всех форм слойных стен
 * @param {number} areas - переменная поля с площадью стены
 * @param [function (el)] - функция перебора и сумирования всех полученных площадей из всех форм
 * @param {number} sum - сумма всех площадей после сложения
 */
function sumAreasStoneDoor() {
	let areas = document.getElementsByClassName("stone_door__result");
	let sum = 0;
	[].forEach.call(areas, function (el) {
		sum += parseFloat(el.value);
		console.log(sum);
	});
	document.getElementById("stone_door__area-all2-id").value = sum;
}


/**
 * @function [sumAreasPeregorDoor] функция для сумирования всех площадей дверей со всех форм перегородок
 * @param {number} areas - переменная поля с площадью стены
 * @param [function (el)] - функция перебора и сумирования всех полученных площадей из всех форм
 * @param {number} sum - сумма всех площадей после сложения
 */
function sumAreasPeregorDoor() {
	let areas = document.getElementsByClassName("peregor_door__result");
	let sum = 0;
	[].forEach.call(areas, function (el) {
		sum += parseFloat(el.value);
		console.log(sum);
	});
	document.getElementById("peregor_door__area-all2-id").value = sum;
}

/**
 * @function [sumAreasPerekritWood] функция для сумирования всех площадей дер. перекрытий со всех форм
 * @param {number} areas - переменная поля с площадью стены
 * @param [function (el)] - функция перебора и сумирования всех полученных площадей из всех форм
 * @param {number} sum - сумма всех площадей после сложения
 */
function sumAreasPerekritWood() {
	let areas = document.getElementsByClassName("perekrit_wood__result");
	let sum = 0;
	[].forEach.call(areas, function (el) {
		sum += parseFloat(el.value);
		console.log(sum);
	});
	document.getElementById("perekrit_wood__area-all2-id").value = sum;
}


/**
 * @function [sumAreasPerekritStone] функция для сумирования всех площадей бетон. перекрытий со всех форм
 * @param {number} areas - переменная поля с площадью стены
 * @param [function (el)] - функция перебора и сумирования всех полученных площадей из всех форм
 * @param {number} sum - сумма всех площадей после сложения
 */
function sumAreasPerekritStone() {
	let areas = document.getElementsByClassName("perekrit_stone__result");
	let sum = 0;
	[].forEach.call(areas, function (el) {
		sum += parseFloat(el.value);
		console.log(sum);
	});
	document.getElementById("perekrit_stone__area-all2-id").value = sum;
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
 * Кнопка добавления новой формы для стен в разделе слойные стены
 * @param {nodeStone} nodeStone - переменная для всей формы
 * @param {cloneNode} newClonedNode - получаем форму и клонируем ее
 * @param {newFormStoneStenaId} newFormStoneStenaId - добавляем новую форму
 * @function [copyFormStoneWall] - Функция копирования формы для слойных стен
 */
let newFormStoneStenaId = 1;
let nodeStone = document.getElementById("stone_wall__form-id").cloneNode(true);

// document.querySelector(".add-form").addEventListener("click", function () {
$(document).on('click', '.add-form', function () {
	let newClonedNode = nodeStone.cloneNode(true);
	document.querySelector("#stone_wall_wrp").appendChild(newClonedNode);
	newClonedNode.id = "stone_wall__form-id-" + newFormStoneStenaId;
	newClonedNode.querySelector(".stone_wall__length").name = 'data[Стены][' + newFormStoneStenaId + '][Длина]';
	newClonedNode.querySelector(".stone_wall__length").value = '';
	newClonedNode.querySelector(".stone_wall__height").name = 'data[Стены][' + newFormStoneStenaId + '][Высота]';
	newClonedNode.querySelector(".stone_wall__height").value = '';
	newFormStoneStenaId++;
	funcStenaStoneWall();
	perimeterStoneWall();
	sumPerimetersStoneWall();
	sumAreasStoneWall();	
});

function copyFormStoneWall(el) {
	let articleDiv = el.parentElement;
	let newArticleDiv = articleDiv.cloneNode(true);
	document.querySelector("#stone_wall_wrp").appendChild(newArticleDiv);
	newArticleDiv.id = "stone_wall__form-id-" + newFormStoneStenaId;
	newArticleDiv.querySelector(".stone_wall__length").name = 'data[Стены][' + newFormStoneStenaId + '][Длина]';
	newArticleDiv.querySelector(".stone_wall__height").name = 'data[Стены][' + newFormStoneStenaId + '][Высота]';
	newFormStoneStenaId++;
	funcStenaStoneWall();
	perimeterStoneWall();
	sumPerimetersStoneWall();
	sumAreasStoneWall();	
}


/**
 * Кнопка добавления новой формы для стен в разделе перегородки
 * @param {nodePeregor} nodePeregor - переменная для всей формы
 * @param {cloneNode} newClonedNode - получаем форму и клонируем ее
 * @param {newFormPeregorStenaId} newFormPeregorStenaId - добавляем новую форму
 * @function [copyFormPeregorWall] - Функция копирования формы для перегородок
 */
let newFormPeregorStenaId = 1;
let nodePeregor = document.getElementById("peregor_wall__form-id").cloneNode(true);

// document.querySelector(".add-form").addEventListener("click", function () {
$(document).on('click', '.add-form', function () {
	let newClonedNode = nodePeregor.cloneNode(true);
	document.querySelector("#peregor_wall_wrp").appendChild(newClonedNode);
	newClonedNode.id = "peregor_wall__form-id-" + newFormPeregorStenaId;
	newClonedNode.querySelector(".peregor_wall__length").name = 'data[Перегородки][' + newFormPeregorStenaId + '][Длина]';
	newClonedNode.querySelector(".peregor_wall__length").value = '';
	newClonedNode.querySelector(".peregor_wall__height").name = 'data[Перегородки][' + newFormPeregorStenaId + '][Высота]';
	newClonedNode.querySelector(".peregor_wall__height").value = '';
	newFormPeregorStenaId++;
	funcStenaPeregorWall();
	perimeterPeregorWall();
	sumPerimetersPeregorWall();
	sumAreasPeregorWall();	
});

function copyFormPeregorWall(el) {
	let articleDiv = el.parentElement;
	let newArticleDiv = articleDiv.cloneNode(true);
	document.querySelector("#peregor_wall_wrp").appendChild(newArticleDiv);
	newArticleDiv.id = "peregor_wall__form-id-" + newFormPeregorStenaId;
	newArticleDiv.querySelector(".peregor_wall__length").name = 'data[Перегородки][' + newFormPeregorStenaId + '][Длина]';
	newArticleDiv.querySelector(".peregor_wall__height").name = 'data[Перегородки][' + newFormPeregorStenaId + '][Высота]';
	newFormPeregorStenaId++;
	funcStenaPeregorWall();
	perimeterPeregorWall();
	sumPerimetersPeregorWall();
	sumAreasPeregorWall();	
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
 * Кнопка добавления новой формы для окон в разделе слойные стены
 * @param {nodeStoneWindow} nodeStoneWindow - переменная для всей формы
 * @param {cloneNode} newClonedNode - получаем форму и клонируем ее
 * @param {newFormStoneWindowId} newFormStoneWindowId - добавляем новую форму
 * @function [copyFormStoneWindow] - Функция копирования формы окон для слоистой стены
 */
let newFormStoneWindowId = 1;
let nodeStoneWindow = document.getElementById("stone_window__form-id").cloneNode(true);

// document.querySelector(".add-form").addEventListener("click", function () {
$(document).on('click', '.add-form__stone_window', function () {
	let newClonedNode = nodeStoneWindow.cloneNode(true);
	document.querySelector("#stone_window_wrp").appendChild(newClonedNode);
	newClonedNode.id = "stone_window__form-id-" + newFormStoneWindowId;
	newClonedNode.querySelector(".stone_window__length").name = 'data[Окна][' + newFormStoneWindowId + '][Ширина]';
	newClonedNode.querySelector(".stone_window__length").value = '';
	newClonedNode.querySelector(".stone_window__height").name = 'data[Окна][' + newFormStoneWindowId + '][Высота]';
	newClonedNode.querySelector(".stone_window__height").value = '';
	newFormStoneWindowId++;
	funcStenaStoneWindow();
	perimeterStoneWindow();
	sumPerimetersStoneWindow();
	sumAreasStoneWindow();	
});

function copyFormStoneWindow(el) {
	let articleDiv = el.parentElement;
	let newArticleDiv = articleDiv.cloneNode(true);
	document.querySelector("#stone_window_wrp").appendChild(newArticleDiv);
	newArticleDiv.id = "stone_window__form-id-" + newFormStoneWindowId;
	newArticleDiv.querySelector(".stone_window__length").name = 'data[Окна][' + newFormStoneWindowId + '][Ширина]';
	newArticleDiv.querySelector(".stone_window__height").name = 'data[Окна][' + newFormStoneWindowId + '][Высота]';
	newFormStoneWindowId++;
	funcStenaStoneWindow();
	perimeterStoneWindow();
	sumPerimetersStoneWindow();
	sumAreasStoneWindow();	
}


/**
 * Кнопка добавления новой формы для окон в разделе перегородки
 * @param {nodePeregorWindow} nodePeregorWindow - переменная для всей формы
 * @param {cloneNode} newClonedNode - получаем форму и клонируем ее
 * @param {newFormPeregorWindowId} newFormPeregorWindowId - добавляем новую форму
 * @function [copyFormPeregorWindow] - Функция копирования формы окон для перегородок
 */
let newFormPeregorWindowId = 1;
let nodePeregorWindow = document.getElementById("peregor_window__form-id").cloneNode(true);

// document.querySelector(".add-form").addEventListener("click", function () {
$(document).on('click', '.add-form__peregor_window', function () {
	let newClonedNode = nodePeregorWindow.cloneNode(true);
	document.querySelector("#peregor_window_wrp").appendChild(newClonedNode);
	newClonedNode.id = "peregor_window__form-id-" + newFormPeregorWindowId;
	newClonedNode.querySelector(".peregor_window__length").name = 'data[Окна][' + newFormPeregorWindowId + '][Ширина]';
	newClonedNode.querySelector(".peregor_window__length").value = '';
	newClonedNode.querySelector(".peregor_window__height").name = 'data[Окна][' + newFormPeregorWindowId + '][Высота]';
	newClonedNode.querySelector(".peregor_window__height").value = '';
	newFormPeregorWindowId++;
	funcStenaPeregorWindow();
	perimeterPeregorWindow();
	sumPerimetersPeregorWindow();
	sumAreasPeregorWindow();	
});

function copyFormPeregorWindow(el) {
	let articleDiv = el.parentElement;
	let newArticleDiv = articleDiv.cloneNode(true);
	document.querySelector("#peregor_window_wrp").appendChild(newArticleDiv);
	newArticleDiv.id = "peregor_window__form-id-" + newFormPeregorWindowId;
	newArticleDiv.querySelector(".peregor_window__length").name = 'data[Окна][' + newFormPeregorWindowId + '][Ширина]';
	newArticleDiv.querySelector(".peregor_window__height").name = 'data[Окна][' + newFormPeregorWindowId + '][Высота]';
	newFormPeregorWindowId++;
	funcStenaPeregorWindow();
	perimeterPeregorWindow();
	sumPerimetersPeregorWindow();
	sumAreasPeregorWindow();	
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
 * Кнопка добавления новой формы для дверей в разделе слойные стены
 * @param {nodeStoneDoor} nodeStoneDoor - переменная для всей формы
 * @param {cloneNode} newClonedNode - получаем форму и клонируем ее
 * @param {newFormStoneDoorId} newFormStoneDoorId - добавляем новую форму
 * @function [copyFormStoneDoor] - Функция копирования формы дверей для слойных стен
 */
let newFormStoneDoorId = 1;
let nodeStoneDoor = document.getElementById("stone_door__form-id").cloneNode(true);

// document.querySelector(".add-form").addEventListener("click", function () {
$(document).on('click', '.add-form__stone_door', function () {
	let newClonedNode = nodeStoneDoor.cloneNode(true);
	document.querySelector("#stone_door_wrp").appendChild(newClonedNode);
	newClonedNode.id = "stone_door__form-id-" + newFormStoneDoorId;
	newClonedNode.querySelector(".stone_door__length").name = 'data[Двери][' + newFormStoneDoorId + '][Ширина]';
	newClonedNode.querySelector(".stone_door__length").value = '';
	newClonedNode.querySelector(".stone_door__height").name = 'data[Двери][' + newFormStoneDoorId + '][Высота]';
	newClonedNode.querySelector(".stone_door__height").value = '';
	newFormStoneDoorId++;
	funcStenaStoneDoor();
	perimeterStoneDoor();
	sumPerimetersStoneDoor();
	sumAreasStoneDoor();	
});

function copyFormStoneDoor(el) {
	let articleDiv = el.parentElement;
	let newArticleDiv = articleDiv.cloneNode(true);
	document.querySelector("#stone_door_wrp").appendChild(newArticleDiv);
	newArticleDiv.id = "stone_door__form-id-" + newFormStoneDoorId;
	newArticleDiv.querySelector(".stone_door__length").name = 'data[Двери][' + newFormStoneDoorId + '][Ширина]';
	newArticleDiv.querySelector(".stone_door__height").name = 'data[Двери][' + newFormStoneDoorId + '][Высота]';
	newFormStoneDoorId++;
	funcStenaStoneDoor();
	perimeterStoneDoor();
	sumPerimetersStoneDoor();
	sumAreasStoneDoor();	
}


/**
 * Кнопка добавления новой формы для дверей в разделе перегородки
 * @param {nodePeregorDoor} nodePeregorDoor - переменная для всей формы
 * @param {cloneNode} newClonedNode - получаем форму и клонируем ее
 * @param {newFormPeregorDoorId} newFormPeregorDoorId - добавляем новую форму
 * @function [copyFormPeregorDoor] - Функция копирования формы дверей для перегородок
 */
let newFormPeregorDoorId = 1;
let nodePeregorDoor = document.getElementById("peregor_door__form-id").cloneNode(true);

// document.querySelector(".add-form").addEventListener("click", function () {
$(document).on('click', '.add-form__peregor_door', function () {
	let newClonedNode = nodePeregorDoor.cloneNode(true);
	document.querySelector("#peregor_door_wrp").appendChild(newClonedNode);
	newClonedNode.id = "peregor_door__form-id-" + newFormPeregorDoorId;
	newClonedNode.querySelector(".peregor_door__length").name = 'data[Двери][' + newFormPeregorDoorId + '][Ширина]';
	newClonedNode.querySelector(".peregor_door__length").value = '';
	newClonedNode.querySelector(".peregor_door__height").name = 'data[Двери][' + newFormPeregorDoorId + '][Высота]';
	newClonedNode.querySelector(".peregor_door__height").value = '';
	newFormPeregorDoorId++;
	funcStenaPeregorDoor();
	perimeterPeregorDoor();
	sumPerimetersPeregorDoor();
	sumAreasPeregorDoor();	
});

function copyFormPeregorDoor(el) {
	let articleDiv = el.parentElement;
	let newArticleDiv = articleDiv.cloneNode(true);
	document.querySelector("#peregor_door_wrp").appendChild(newArticleDiv);
	newArticleDiv.id = "peregor_door__form-id-" + newFormPeregorDoorId;
	newArticleDiv.querySelector(".peregor_door__length").name = 'data[Двери][' + newFormPeregorDoorId + '][Ширина]';
	newArticleDiv.querySelector(".peregor_door__height").name = 'data[Двери][' + newFormPeregorDoorId + '][Высота]';
	newFormPeregorDoorId++;
	funcStenaPeregorDoor();
	perimeterPeregorDoor();
	sumPerimetersPeregorDoor();
	sumAreasPeregorDoor();		
}

/**
 * Кнопка добавления новой формы для деревянных перекрытий
 * @param {nodePerekritWood} nodePerekritWood - переменная для всей формы
 * @param {cloneNode} newClonedNode - получаем форму и клонируем ее
 * @param {newFormPerekritWoodId} newFormPerekritWoodId - добавляем новую форму
 * @function [copyFormPerekritWood] - Функция копирования формы деревянноое перекрытие
 */
let newFormPerekritWoodId = 1;
let nodePerekritWood = document.getElementById("perekrit_wood__form-id").cloneNode(true);

// document.querySelector(".add-form").addEventListener("click", function () {
$(document).on('click', '.add-form__perekrit_wood', function () {
	let newClonedNode = nodePerekritWood.cloneNode(true);
	document.querySelector("#perekrit_wood_wrp").appendChild(newClonedNode);
	newClonedNode.id = "perekrit_wood__form-id-" + newFormPerekritWoodId;
	newClonedNode.querySelector(".perekrit_wood__length").name = 'data[Деревянные перекрытия][' + newFormPerekritWoodId + '][Длина]';
	newClonedNode.querySelector(".perekrit_wood__length").value = '';
	newClonedNode.querySelector(".perekrit_wood__width").name = 'data[Деревянные перекрытия][' + newFormPerekritWoodId + '][Ширина]';
	newClonedNode.querySelector(".perekrit_wood__width").value = '';
	newFormPerekritWoodId++;
	funcPerekritWood();
	sumAreasPerekritWood();	
});

function copyFormPerekritWood(el) {
	let articleDiv = el.parentElement;
	let newArticleDiv = articleDiv.cloneNode(true);
	document.querySelector("#perekrit_wood_wrp").appendChild(newArticleDiv);
	newArticleDiv.id = "perekrit_wood__form-id-" + newFormPerekritWoodId;
	newArticleDiv.querySelector(".perekrit_wood__length").name = 'data[Деревянные перекрытия][' + newFormPerekritWoodId + '][Длина]';
	newArticleDiv.querySelector(".perekrit_wood__width").name = 'data[Деревянные перекрытия][' + newFormPerekritWoodId + '][Ширина]';
	newFormPerekritWoodId++;
	funcPerekritWood();
	sumAreasPerekritWood();		
}


/**
 * Кнопка добавления новой формы для бетонных перекрытий
 * @param {nodePerekritStone} nodePerekritStone - переменная для всей формы
 * @param {cloneNode} newClonedNode - получаем форму и клонируем ее
 * @param {newFormPerekritStoneId} newFormPerekritStoneId - добавляем новую форму
 * @function [copyFormPerekritStone] - Функция копирования формы бетонное перекрытие
 */
let newFormPerekritStoneId = 1;
let nodePerekritStone = document.getElementById("perekrit_stone__form-id").cloneNode(true);

// document.querySelector(".add-form").addEventListener("click", function () {
$(document).on('click', '.add-form__perekrit_stone', function () {
	let newClonedNode = nodePerekritStone.cloneNode(true);
	document.querySelector("#perekrit_stone_wrp").appendChild(newClonedNode);
	newClonedNode.id = "perekrit_stone__form-id-" + newFormPerekritStoneId;
	newClonedNode.querySelector(".perekrit_stone__length").name = 'data[Бетонные перекрытия][' + newFormPerekritWoodId + '][Длина]';
	newClonedNode.querySelector(".perekrit_stone__length").value = '';
	newClonedNode.querySelector(".perekrit_stone__width").name = 'data[Бетонные перекрытия][' + newFormPerekritWoodId + '][Ширина]';
	newClonedNode.querySelector(".perekrit_stone__width").value = '';
	newFormPerekritStoneId++;
	funcPerekritStone();
	sumAreasPerekritStone();	
});

function copyFormPerekritStone(el) {
	let articleDiv = el.parentElement;
	let newArticleDiv = articleDiv.cloneNode(true);
	document.querySelector("#perekrit_stone_wrp").appendChild(newArticleDiv);
	newArticleDiv.id = "perekrit_stone__form-id-" + newFormPerekritStoneId;
	newArticleDiv.querySelector(".perekrit_stone__length").name = 'data[Бетонные перекрытия][' + newFormPerekritStoneId + '][Длина]';
	newArticleDiv.querySelector(".perekrit_stone__width").name = 'data[Бетонные перекрытия][' + newFormPerekritStoneId + '][Ширина]';
	newFormPerekritStoneId++;
	funcPerekritStone();
	sumAreasPerekritStone();		
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
 * @function [deleteFormStoneWall] Функция удаления формы стена для слойных стен
 * @param {forms} forms - переменная для всей формы
 * @param {remove} remove - удаляем форму
 * @function [sumPerimetersStoneWall] вызываем функцию подсчета всех периметров со всех форм для стен
 * @function [sumAreas] вызываем функцию подсчета всех площадей со всех форм для стен
 */
function deleteFormStoneWall(btn) {
	let forms = document.getElementsByClassName('stone_wall__form');
	if (forms.length > 1) {
		btn.parentElement.remove();
		sumPerimetersStoneWall();
		sumAreasStoneWall();
	}
}


/**
 * @function [deleteFormPeregorWall] Функция удаления формы стена для перегородок
 * @param {forms} forms - переменная для всей формы
 * @param {remove} remove - удаляем форму
 * @function [sumPerimetersPeregorWall] вызываем функцию подсчета всех периметров со всех форм для стен
 * @function [sumAreas] вызываем функцию подсчета всех площадей со всех форм для стен
 */
function deleteFormPeregorWall(btn) {
	let forms = document.getElementsByClassName('peregor_wall__form');
	if (forms.length > 1) {
		btn.parentElement.remove();
		sumPerimetersPeregorWall();
		sumAreasPeregorWall();
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
 * @function [deleteFormStoneWindow] Функция удаления формы для окон в слойных стенах
 * @param {forms} forms - переменная для всей формы
 * @param {remove} remove - удаляем форму
 * @function [sumPerimetersStoneWindow] вызываем функцию подсчета всех периметров со всех форм для стен
 * @function [sumAreas] вызываем функцию подсчета всех площадей со всех форм для стен
 */
function deleteFormStoneWindow(btn) {
	let forms = document.getElementsByClassName('stone_window__form');
	if (forms.length > 0) {
		btn.parentElement.remove();
		sumPerimetersStoneWindow();
		sumAreasStoneWindow();
		document.querySelector(".stone_window_wrp").classList.remove("hidden");
		document.querySelector(".add-form__stone_window").classList.add("hidden");
		document.querySelector(".show-form__stone_window").classList.remove("hidden");		
	}
}



/**
 * @function [deleteFormPeregorWindow] Функция удаления формы для окон в перегородках
 * @param {forms} forms - переменная для всей формы
 * @param {remove} remove - удаляем форму
 * @function [sumPerimetersPeregorWindow] вызываем функцию подсчета всех периметров со всех форм для стен
 * @function [sumAreas] вызываем функцию подсчета всех площадей со всех форм для стен
 */
function deleteFormPeregorWindow(btn) {
	let forms = document.getElementsByClassName('peregor_window__form');
	if (forms.length > 0) {
		btn.parentElement.remove();
		sumPerimetersPeregorWindow();
		sumAreasPeregorWindow();
		document.querySelector(".peregor_window_wrp").classList.remove("hidden");
		document.querySelector(".add-form__peregor_window").classList.add("hidden");
		document.querySelector(".show-form__peregor_window").classList.remove("hidden");		
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
 * @function [deleteFormStoneDoor] Функция удаления формы для дверей в слойных стенах
 * @param {forms} forms - переменная для всей формы
 * @param {remove} remove - удаляем форму
 * @function [sumPerimetersStoneDoor] вызываем функцию подсчета всех периметров со всех форм для стен
 * @function [sumAreas] вызываем функцию подсчета всех площадей со всех форм для стен
 */
function deleteFormStoneDoor(btn) {
	let forms = document.getElementsByClassName('stone_door__form');
	if (forms.length > 0) {
		btn.parentElement.remove();
		sumPerimetersStoneDoor();
		sumAreasStoneDoor();
		document.querySelector(".stone_door_wrp").classList.remove("hidden");
		document.querySelector(".add-form__stone_door").classList.add("hidden");
		document.querySelector(".show-form__stone_door").classList.remove("hidden");		
	}
}


/**
 * @function [deleteFormPeregorDoor] Функция удаления формы для дверей в перегородках
 * @param {forms} forms - переменная для всей формы
 * @param {remove} remove - удаляем форму
 * @function [sumPerimetersPeregorDoor] вызываем функцию подсчета всех периметров со всех форм для стен
 * @function [sumAreas] вызываем функцию подсчета всех площадей со всех форм для стен
 */
function deleteFormPeregorDoor(btn) {
	let forms = document.getElementsByClassName('peregor_door__form');
	if (forms.length > 0) {
		btn.parentElement.remove();
		sumPerimetersPeregorDoor();
		sumAreasPeregorDoor();
		document.querySelector(".peregor_door_wrp").classList.remove("hidden");
		document.querySelector(".add-form__peregor_door").classList.add("hidden");
		document.querySelector(".show-form__peregor_door").classList.remove("hidden");		
	}
}


/**
 * @function [deleteFormPerekritWood] Функция удаления формы для деревянных перекрытий
 * @param {forms} forms - переменная для всей формы
 * @param {remove} remove - удаляем форму
 * @function [sumPerimetersPerekritWood] вызываем функцию подсчета всех периметров со всех форм для дерев. перекрытий
 * @function [sumAreas] вызываем функцию подсчета всех площадей со всех форм для дерев. перекрытий
 */
function deleteFormPerekritWood(btn) {
	let forms = document.getElementsByClassName('perekrit_wood__form');
	if (forms.length > 1) {
		btn.parentElement.remove();
		sumAreasPerekritWood();
		document.querySelector(".perekrit_wood_wrp").classList.remove("hidden");
	}
}


/**
 * @function [deleteFormPerekritStone] Функция удаления формы для бетонных перекрытий
 * @param {forms} forms - переменная для всей формы
 * @param {remove} remove - удаляем форму
 * @function [sumPerimetersPerekritStone] вызываем функцию подсчета всех периметров со всех форм для бетон. перекрытий
 * @function [sumAreas] вызываем функцию подсчета всех площадей со всех форм для бетон. перекрытий
 */
function deleteFormPerekritStone(btn) {
	let forms = document.getElementsByClassName('perekrit_stone__form');
	if (forms.length > 1) {
		btn.parentElement.remove();
		sumAreasPerekritStone();
		document.querySelector(".perekrit_stone_wrp").classList.remove("hidden");
	}
}


/**
 * Кнопка показа формы для количества окон в разделе каркасные стены
 * @param {remove} - удаляет класс hidden у формы
 * @param {add} - добавляет класс hidden у формы
 */
// document.querySelector(".show-form-windows").addEventListener("click", function () {
	$(document).on('click', '.show-form__karkas_window', function () {
		document.querySelector(".karkas_window_wrp").classList.remove("hidden");
		document.querySelector(".add-form__karkas_window").classList.remove("hidden");
		document.querySelector(".show-form__karkas_window").classList.add("hidden");
	});


/**
 * Кнопка показа формы для количества окон в разделе слойные стены
 * @param {remove} - удаляет класс hidden у формы
 * @param {add} - добавляет класс hidden у формы
 */
// document.querySelector(".show-form-windows").addEventListener("click", function () {
	$(document).on('click', '.show-form__stone_window', function () {
		document.querySelector(".stone_window_wrp").classList.remove("hidden");
		document.querySelector(".add-form__stone_window").classList.remove("hidden");
		document.querySelector(".show-form__stone_window").classList.add("hidden");
	});	


/**
 * Кнопка показа формы для количества окон в разделе перегородки
 * @param {remove} - удаляет класс hidden у формы
 * @param {add} - добавляет класс hidden у формы
 */
// document.querySelector(".show-form-windows").addEventListener("click", function () {
	$(document).on('click', '.show-form__peregor_window', function () {
		document.querySelector(".peregor_window_wrp").classList.remove("hidden");
		document.querySelector(".add-form__peregor_window").classList.remove("hidden");
		document.querySelector(".show-form__peregor_window").classList.add("hidden");
	});		


/**
 * Кнопка показа формы для количества дверей в разделе каркасные стены
 * @param {remove} - удаляет класс hidden у формы
 * @param {add} - добавляет класс hidden у формы
 */
// document.querySelector(".show-form-windows").addEventListener("click", function () {
	$(document).on('click', '.show-form__karkas_door', function () {
		document.querySelector(".karkas_door_wrp").classList.remove("hidden");
		document.querySelector(".add-form__karkas_door").classList.remove("hidden");
		document.querySelector(".show-form__karkas_door").classList.add("hidden");
	});	


/**
 * Кнопка показа формы для количества дверей в разделе слойные стены
 * @param {remove} - удаляет класс hidden у формы
 * @param {add} - добавляет класс hidden у формы
 */
// document.querySelector(".show-form-windows").addEventListener("click", function () {
	$(document).on('click', '.show-form__stone_door', function () {
		document.querySelector(".stone_door_wrp").classList.remove("hidden");
		document.querySelector(".add-form__stone_door").classList.remove("hidden");
		document.querySelector(".show-form__stone_door").classList.add("hidden");
	});		


/**
 * Кнопка показа формы для количества дверей в разделе перегородки
 * @param {remove} - удаляет класс hidden у формы
 * @param {add} - добавляет класс hidden у формы
 */
// document.querySelector(".show-form-windows").addEventListener("click", function () {
	$(document).on('click', '.show-form__peregor_door', function () {
		document.querySelector(".peregor_door_wrp").classList.remove("hidden");
		document.querySelector(".add-form__peregor_door").classList.remove("hidden");
		document.querySelector(".show-form__peregor_door").classList.add("hidden");
	});		










































