ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.794770, 49.125629],
            zoom: 14
        }, {
            searchControlProvider: 'yandex#search'
        }),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {}, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../img/point.svg',
            // Размеры метки.
            iconImageSize: [95, 119],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-42, -119]
        });


    myMap.geoObjects.add(myPlacemark);
});

$('body').on('click', 'a[data-modal], div[data-modal]:not(.modal)', (e) => {
    $('.modal').removeClass('active');
    $('.modals').addClass('active');
    $('.modal[data-modal="' + $(e.currentTarget).attr('data-modal') + '"]').addClass('active');
});

$('body').on('click', '.modal__close', () => {
    $('.modals').removeClass('active');
    $('.modal').removeClass('active');
});

$('body').on('click', '.modals', (e) => {
    if ($(e.target).is('.modals')) {
        $('.modals').removeClass('active');
        $('.modal').removeClass('active');
    }
});

$('body').on('click', '.tabs a', (e) => {
    $('.tabs a').removeClass('active');
    $('.tab').removeClass('active');
    $(e.currentTarget).addClass('active');
    $(`.tab[data-tab="${$(e.currentTarget).attr('data-tab')}"]`).addClass('active');
});