'use strict';
/**
 * Для чекбокса
 * показ формы расчета теплоизоляции для двухскатной крыши
 * @function [showDvuskatRoofItems] добавляет класс hidden к чекбоксу
 * @param {remove} - удаляет класс hidden у формы
 * @param {check}  - переменная к классу для чекбокса
 * @param {add}  - добавляет hidden к форме
 * @function [clearAllFormNotFronton] функция сброса всех данных в заполненых полях когда нет фронтонов и когда checkbox снят
 */

let checkboxNotFronton = document.getElementById('check-dvuskat_roof');
checkboxNotFronton.addEventListener('click', clearAllFormDvuskatRoof);

function showDvuskatRoofItems(check) {
	check = document.getElementById("check-dvuskat_roof");
	if (check.checked) {
		document.getElementById("dvuskat_roof_item_field").classList.remove("hidden");
		document.getElementById("img_dvuskat_roof_color-id").classList.remove("hidden");
		document.getElementById("img_dvuskat_roof_bw-id").classList.add("hidden");
	} else {
		document.getElementById("dvuskat_roof_item_field").classList.add("hidden");
		document.getElementById("img_dvuskat_roof_color-id").classList.add("hidden");
		document.getElementById("img_dvuskat_roof_bw-id").classList.remove("hidden");
		clearAllFormDvuskatRoof();
	}
}

function clearAllFormDvuskatRoof() {
	let form = document.getElementById('dvuskat_roof_item_field');
	let inputs = form.getElementsByTagName('input');
	for (let input of inputs)
		input.value = '';

}

/**
 * @function [deleteFormDvuskatRoof] Функция удаления формы для расчета теплоизоляции у двускатной крыши
 * @param {forms} forms - переменная для всей формы
 * @param {remove} remove - удаляем форму
 */
function deleteFormDvuskatRoof(btn) {
	let forms = document.getElementsByClassName('dvuskat_roof__form');
	if (forms.length > 1) {
		btn.parentElement.remove();
	}
}


/**
 * Кнопка добавления новой формы для расчета теплоизол. матер у двускатной крыши
 * @param {newClonedNode} newClonedNode - переменная для всей формы
 * @param {cloneNode} newClonedNode - получаем форму и клонируем ее
 * @param {newFormDvuskatRoof} newFormDvuskatRoofDvuskatRoof - добавляем новую форму
 * @function [copyFormDvuskatRoof] el - функция копирования формы
 */
let newFormDvuskatRoof = 1;
function copyFormDvuskatRoof(el) {
	let articleDiv = el.parentElement;
	let newArticleDiv = articleDiv.cloneNode(true);
	document.querySelector(".dvuskat_form_wrp").appendChild(newArticleDiv);
	newArticleDiv.id = "dvuskat_roof__form-id-" + newFormDvuskatRoof;
	newArticleDiv.name = "dvuskat_roof__form-id-" + newFormDvuskatRoof;
	newFormDvuskatRoof++;
}


/**
 * @function [sumAllSquareDvuskatRoof] Функция подсчета всех сумарных площадей карнизных свесов когда вальмовая или шатровая крыша
 */
function sumAllSquareDvuskatRoof() {
	let sum = 0;
	let sum_height = 0;
	$('.dvuskat_roof__form').each((i, el) => {
		sum += parseFloat($(el).find('.notfront-karnizsves-length').val()) * parseFloat($(el).find('.notfront-karnizsves-height').val());
		sum_height += parseFloat($(el).find('.notfront-karnizsves-height').val());
	});
	$('.notfront-karnizsves-sum-square-all').val(sum);
	$('.notfront-karnizsves-sum-height').val(sum_height);
}














































