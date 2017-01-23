var progress = document.querySelectorAll('.c-progress');

[].forEach.call(progress, function(el) {
	el.classList.add('c-progress--start');
	setTimeout(function() {
        el.classList.remove('c-progress--start');
        el.classList.add('c-progress--anim');
    }, 10);
});
