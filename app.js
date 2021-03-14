$(document).ready(function () {

	'use strict';

	var Urls = [
		{ "title": "Github", "url": "https://stackoverflow.com", "id": 4 },
		{ "title": "Github", "url": "https://nayeemdev.github.io/laravelbestpractices", "id": 3 },
		{ "title": "Github", "url": "https://nayeemdev.github.io/", "id": 2 },
		{ "title": "Hashnode", "url": "https://hashnode.com", "id": 1 }
	];
	// Initiate Local Storage
	function initLocalStorage() {
		chrome.storage.local.get('Urls', function (data) {
			if (typeof data.Urls === 'undefined') {
				chrome.storage.local.set({'Urls': Urls}, function() {
					console.log('Urls Saved');
				});
			} else {
				Urls = data.Urls;
			}
		});
	};
	initLocalStorage();

	/*-----------------------------------------------------------------
	  Dark and Light Mode Toggle
	-------------------------------------------------------------------*/
	$('.light').click(function () {
		$('head link[href="assets/styles/style-dark.css"]').attr('href', 'assets/styles/style-white.css');
	});
	$('.dark').click(function () {
		$('head link[href="assets/styles/style-white.css"]').attr('href', 'assets/styles/style-dark.css');
	});
	$('[data-toggle="tooltip"]').tooltip({
		trigger: 'hover'
	});

	/*-----------------------------------------------------------------
	Get Date And Time And Set to dateTime Div
	-------------------------------------------------------------------*/
	var today = new Date();
	var dd = String(today.getDate()).padStart(2, '0');
	var yyyy = today.getFullYear();
	var mm = today.toLocaleString('default', {
		month: 'long'
	});
	today = dd + ' ' + mm + ' ' + yyyy;

	$('.dateTime').html(today);

	/*-----------------------------------------------------------------
	 Default CRUD SECTION WITH LOCALSTORAGE
	-------------------------------------------------------------------*/

	function index(type) {
		initLocalStorage();

		if (type == 'Urls') {
			var urlList = '';
			$.each(Urls, function( index, value ) {
				urlList += `<li><a target="_blank" data-urlid="${value.id}" href="${value.url}"><img class="rounded" src="https://s2.googleusercontent.com/s2/favicons?domain=${value.url}" alt=""></a></li>`;
			});
			urlList += '<li data-toggle="tooltip" title="Add New Url" class="addUrl"><a><i class="fas fa-plus border border-primary rounded-circle p-1 text-primary"></i></a></li>';
			$('.header__social').html(urlList);
		} else if(type == 'Tasks') {
			console.log('else');
		}
	}
	index('Urls');
	function store(type, data) {
		initLocalStorage();
		// TODO: 
		// [] Check Localstorage
		// [] check type and set it in localstorage
	}

	function update(type, index, data) {
		initLocalStorage();
		// TODO: 
		// [] Check Localstorage
		// [] check type and set it in localstorage
	}

	function destroy(type, index, data) {
		initLocalStorage();
		// TODO: 
		// [] Check Localstorage
		// [] check type and set it in localstorage
	}

	// Timer
	function timer(time = 25) {
		// TODO:: 
		// set timer
		// Play Pause
	}

	//DEMO TODO WILL BE REMOVED 
	var todo = function () {
		$('.todo-list .todo-item input').click(function () {
			if ($(this).is(':checked')) {
				$(this).parent().parent().parent().toggleClass('complete');
			} else {
				$(this).parent().parent().parent().toggleClass('complete');
			}
		});

		$('.todo-nav .all-task').click(function () {
			$('.todo-list').removeClass('only-active');
			$('.todo-list').removeClass('only-complete');
			$('.todo-nav li.active').removeClass('active');
			$(this).addClass('active');
		});

		$('.todo-nav .active-task').click(function () {
			$('.todo-list').removeClass('only-complete');
			$('.todo-list').addClass('only-active');
			$('.todo-nav li.active').removeClass('active');
			$(this).addClass('active');
		});

		$('.todo-nav .completed-task').click(function () {
			$('.todo-list').removeClass('only-active');
			$('.todo-list').addClass('only-complete');
			$('.todo-nav li.active').removeClass('active');
			$(this).addClass('active');
		});

		$('#uniform-all-complete input').click(function () {
			if ($(this).is(':checked')) {
				$('.todo-item .checker span:not(.checked) input').click();
			} else {
				$('.todo-item .checker span.checked input').click();
			}
		});

		$('.remove-todo-item').click(function () {
			$(this).parent().remove();
		});
	};

	todo();

	$(".add-task").keypress(function (e) {
		if ((e.which == 13) && (!$(this).val().length == 0)) {
			$('<div class="todo-item"><div class="checker"><span class=""><input type="checkbox"></span></div> <span>' + $(this).val() + '</span> <a href="javascript:void(0);" class="float-right remove-todo-item"><i class="fas fa-trash-alt"></i></a></div>').insertBefore('.todo-list .todo-item:first-child');
			$(this).val('');
		} else if (e.which == 13) {
			alert('Please enter new task');
		}
		$(document).on('.todo-list .todo-item.added input').click(function () {
			if ($(this).is(':checked')) {
				$(this).parent().parent().parent().toggleClass('complete');
			} else {
				$(this).parent().parent().parent().toggleClass('complete');
			}
		});
		$('.todo-list .todo-item.added .remove-todo-item').click(function () {
			$(this).parent().remove();
		});
	});

});