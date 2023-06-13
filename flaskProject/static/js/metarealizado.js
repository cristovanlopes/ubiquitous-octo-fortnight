google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(function () {
    drawCharts(allData2023, '2023'); // Dados de 2023
    drawCharts(allData2022, '2022'); // Dados de 2022
    drawCharts(allData2021, '2021'); // Dados de 2021
});


var allData2023 = [
    [11355189, 11718061],
    [11896319, 11183848],
    [13589381, 11961338],
    [12237109, 12020019],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
];

var allData2022 = [
    [458903, 764104],
    [578244, 936292],
    [894502, 842509],
    [764802, 915710],
    [951331, 868602],
    [874921, 838912],
    [945740, 876192],
    [942662, 965432],
    [812401, 854302],
    [938402, 785302],
    [1078522, 663329],
    [843937, 865332]
];
var allData2021 = [
    [458903, 764104],
    [578244, 936292],
    [894502, 842509],
    [764802, 915710],
    [951331, 868602],
    [874921, 838912],
    [945740, 876192],
    [942662, 965432],
    [812401, 854302],
    [938402, 785302],
    [1078522, 663329],
    [843937, 865332]
];


var chartColors = [
    '#4c8be7',
    '#e8500b',
];

function drawCharts(dataSet, idSuffix) {
    var columnTitles = [
        'META',
        'REALIZADO',
    ];

    for (var i = 1; i <= columnTitles.length; i++) {
        drawIndividualChart(i, columnTitles[i - 1], dataSet, idSuffix);
    }
}

function drawIndividualChart(chartIndex, columnTitle, dataSet, idSuffix) {
    var data = google.visualization.arrayToDataTable([
        ['Month', columnTitle],
        ['Janeiro', dataSet[0][chartIndex - 1]],
        ['Fevereiro', dataSet[1][chartIndex - 1]],
        ['Março', dataSet[2][chartIndex - 1]],
        ['Abril', dataSet[3][chartIndex - 1]],
        ['Maio', dataSet[4][chartIndex - 1]],
        ['Junho', dataSet[5][chartIndex - 1]],
        ['Julho', dataSet[6][chartIndex - 1]],
        ['Agosto', dataSet[7][chartIndex - 1]],
        ['Setembro', dataSet[8][chartIndex - 1]],
        ['Outubro', dataSet[9][chartIndex - 1]],
        ['Novembro', dataSet[10][chartIndex - 1]],
        ['Dezembro', dataSet[11][chartIndex - 1]],
    ]);

    var view = new google.visualization.DataView(data);
    view.setColumns([
        0,
        1,
        {
            calc: function (dt, rowIndex) {
                return dt.getFormattedValue(rowIndex, 1);
            },
            type: 'string',
            role: 'annotation',
        },
    ]);




    var options = {
        curveType: 'function',
        colors: [chartColors[chartIndex % chartColors.length]],
        pointSize: 10,
        vAxis: {
            textPosition: 'none',
            gridlines: {
                color: 'transparent'  // adicione esta linha para remover as linhas de grade verticais
            }
        },
        hAxis: {
            textStyle: {
                color: '#FFFFFF',
                fontName: 'Arial',
                fontSize: 16,
                fontWeight: 'normal'
            },
            gridlines: {
                color: 'transparent'  // adicione esta linha para remover as linhas de grade horizontais
            }
        },
        backgroundColor: '#383838',
        legend: {position: 'none'},
    };
    var chart = new google.visualization.LineChart(
        document.getElementById('chart' + chartIndex + idSuffix)
    );
    chart.draw(view, options);
}
function createLegend(dataSet, id) {
    var legendDiv = document.getElementById(id);
    var columnTitles = [
        'META',
        'REALIZADO',
    ];
     var legendHtml = '<ul style="display: flex; flex-wrap: wrap; padding: 0;">';
    for (var i = 0; i < columnTitles.length; i++) {
        legendHtml += '<li style="list-style-type: none; margin-right: 20px;"><span style="color:' + chartColors[i % chartColors.length] +
            '">&#9679;</span> ' + columnTitles[i] + '</li>';
    }
    legendHtml += '</ul>';
    legendDiv.innerHTML = legendHtml;
}

// Chamar a função quando os gráficos são desenhados
google.charts.setOnLoadCallback(function () {
    drawCharts(allData2023, '2023'); // Dados de 2023
    drawCharts(allData2022, '2022'); // Dados de 2022
    drawCharts(allData2021, '2021'); // Dados de 2022
    createLegend(allData2023, 'legend2023'); // Cria a legenda para 2023
});