// 41.289693,  74.623084 - Kyrgyzstan
//
ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
            center: [41.289693,  74.623084],
            zoom: 7.4
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаем геообъект с типом геометрии "Точка".
        myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [42.881152, 74.595921]
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: 'ГлавCтатКом',
                hintContent: '1234'
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#blackStretchyIcon',
            // Метку можно перемещать.
        }),
        myPieChart = new ymaps.Placemark([
            55.847, 37.6
        ], {
            // Данные для построения диаграммы.
            data: [
                {weight: 8, color: '#0E4779'},
                {weight: 6, color: '#1E98FF'},
                {weight: 4, color: '#82CDFF'}
            ],
            iconCaption: "Диаграмма"
        }, {
            // Зададим произвольный макет метки.
            iconLayout: 'default#pieChart',
            // Радиус диаграммы в пикселях.
            iconPieChartRadius: 30,
            // Радиус центральной части макета.
            iconPieChartCoreRadius: 10,
            // Стиль заливки центральной части.
            iconPieChartCoreFillStyle: '#ffffff',
            // Cтиль линий-разделителей секторов и внешней обводки диаграммы.
            iconPieChartStrokeStyle: '#ffffff',
            // Ширина линий-разделителей секторов и внешней обводки диаграммы.
            iconPieChartStrokeWidth: 3,
            // Максимальная ширина подписи метки.
            iconPieChartCaptionMaxWidth: 200
        });

    myMap.geoObjects
        .add(myGeoObject)
        .add(myPieChart)
        .add(new ymaps.Placemark([42.604287, 78.526266], {
            balloonContent: 'КАРАКОЛ<br>1234<br>Карымшакова15<br>(3922)71667'
        }, {
            preset: 'islands#dotIcon',
            iconColor: '#3caa3c'
        }))
        .add(new ymaps.Placemark([41.427985, 75.997545], {
            balloonContent: 'НАРЫН'
        }, {
            preset: 'islands#dotIcon',
            iconColor: '#3caa3c'
        }))
        .add(new ymaps.Placemark([42.830444, 75.301324], {
            balloonContent: '<strong>ЧУЙ</strong>'
        }, {
            preset: 'islands#dotIcon',
            iconColor: '#3caa3c'
        }))
        .add(new ymaps.Placemark([42.521140, 72.250330], {
            balloonContent: '<strong>ТАЛАС</strong>'
        }, {
            preset: 'islands#dotIcon',
            iconColor: '#3caa3c'
        }))
        .add(new ymaps.Placemark([40.517518, 72.805570], {
            balloonContent: '<strong>ОШ</strong>'
        }, {
            preset: 'islands#dotIcon',
            iconColor: '#3caa3c'
        }))
        .add(new ymaps.Placemark([40.060518, 70.819629], {
            balloonContent: ' <strong>БАТКЕН</strong>'
        }, {
            preset: 'islands#dotIcon',
            iconColor: '#3caa3c'
        }))
        .add(new ymaps.Placemark([40.938028, 72.993273], {
            balloonContent: '<strong>ЖАЛАЛ-АБАД</strong>',
            iconCaption: 'Очень длиннный, но невероятно интересный текст'
        }, {
            preset: 'islands#dotIcon',
            iconColor: '#3caa3c'
        }))
        .add(new ymaps.Placemark([55.790139, 37.814052], {
            balloonContent: 'цвет <strong>голубой</strong>',
            iconCaption: 'Очень длиннный, но невероятно интересный текст'
        }, {
            preset: 'islands#blueCircleDotIconWithCaption',
            iconCaptionMaxWidth: '50'
        }));
}

