function quickSort(list: number[], start_index: number, end_index: number) {
	if (start_index < end_index) {
		var part = partition(list, start_index, end_index);
		quickSort(list, start_index, part - 1);
		quickSort(list, part + 1, end_index);
	}
}

function partition(list: number[], start_index: number, end_index: number) {
	var pivot = list[end_index];
	var i = (start_index - 1);
	var temp = 0;

	for (var j = start_index; j < end_index; j++) {
		if (list[j] < pivot) {
			i++;
			temp = list[i];
			list[i] = list[j];
			list[j] = temp;
		}
	}
	temp = list[i + 1];
	list[i + 1] = list[end_index];
	list[end_index] = temp;
	return (i + 1);

}

var list = [1,2,423,1,23,214,5345,13,1235,346474,0];
console.log(list.toString());
quickSort(list, 0, list.length - 1);
console.log(list.toString());