
var initCharts = $(function () {
    if ($(document).width() >= 600) {

        $('.chart').easyPieChart({
            //your configuration goes here
            animate: 2000,
            size: 170,
            trackColor: '#e5f9ff',
            scaleColor:	'#9966ff',
            barColor:'#00ff99',
            onStep: function (from, to, percent) {
                $(this.el).find('span').text(Math.round(percent) + ' %');
            }
        });
    }
    else {
        $('.chart').easyPieChart({
            //your configuration goes here
            animate: 2000,
            size: 350,
            trackColor: '#e5f9ff',
            scaleColor:	'#9966ff',
            barColor:'#00ff99',
            onStep: function (from, to, percent) {
                $(this.el).find('span').text(Math.round(percent) + ' %');
            }
        });
    }
});








