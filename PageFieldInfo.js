$(function() {

	$(document).on('change', '.has-pfi-info select:not(.asmSelect), .has-pfi-info input', function() {
		var $wrapper = $(this).closest('.has-pfi-info');
		var $parent = $(this).closest('.InputfieldContent');
		$parent.children('.pfi-option-info').remove();
		var is_select = $wrapper.hasClass('pfi-select');
		var $selected;
		if(is_select) {
			$selected = $(this).find(':selected');
		} else {
			$selected = $parent.find('input:checked');
		}
		var info_out = '';
		$selected.each(function() {
			var $info_element = is_select ? $(this) : $(this).parent('label');
			var info = $info_element.data('info');
			if(info) {
				if($wrapper.hasClass('pfi-multiple')) info = $info_element.text() + ': ' + info;
				info_out += '<div class="pfi-info-item">' + info + '</div>';
			}
		});
		$parent.append('<div class="pfi-option-info">' + info_out + '</div>');
	});

});