//= components/datepicker.min.js
//= components/jquery.timepicker.min.js

//date
$('.filter__menu-input').datepicker();
$('.meet-date').datepicker();

//date
$('.meet-time').timepicker({
    timeFormat: 'H:mm',
    interval: 1,
    minTime: '0',
    maxTime: '23:59',
    startTime: '00:00',
});