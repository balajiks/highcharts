import PluginHandler from '../../../../code/es-modules/Dashboards/PluginHandler.js';
import Dashboards from '../../../../code/es-modules/masters/dashboards.src.js';
import Highcharts from '../../../../code/es-modules/masters/highcharts.src.js';
import HighchartsPlugin from '../../../../code/es-modules/Dashboards/Plugins/HighchartsPlugin.js';

HighchartsPlugin.custom.connectHighcharts(Highcharts);
PluginHandler.addPlugin(HighchartsPlugin);

const board = Dashboards.board('container', {
    dataPool: {
        connectors: [{
            id: 'connector-1',
            type: 'CSV',
            options: {
                csv: `$GME,$AMC,$NOK
                    4,5,6
                    1,5,2
                    41,23,2`,
                firstRowAsNames: true
            }
        }]
    },
    gui: {
        enabled: true,
        layouts: [{
            rows: [{
                cells: [{
                    id: 'dashboard-col-0'
                }, {
                    id: 'dashboard-col-1'
                }]
            }]
        }]
    },
    components: [{
        cell: 'dashboard-col-0',
        type: 'Highcharts',
        chartOptions: {
            series: [{
                name: 'Series from options',
                data: [1, 2, 3, 4]
            }],
            chart: {
                animation: false,
                type: 'column',
                zoomType: 'x',
                panning: {
                    enabled: true
                },
                panKey: 'shift'
            },
            xAxis: [{
                minRange: 1,
                startOnTick: false,
                endOnTick: false
            }],
            accessibility: {
                keyboardNavigation: {
                    seriesNavigation: {
                        mode: 'serialize'
                    }
                }
            }
        },
        events: {},
        connector: {
            id: 'connector-1'
        },
        sync: {
            extremes: true
        }
    }, {
        cell: 'dashboard-col-1',
        type: 'Highcharts',
        chartOptions: {
            type: 'column',
            series: [{
                name: 'Series from options',
                data: [1, 2, 3, 4]
            }],
            chart: {
                animation: false,
                zoomType: 'x',
                zoomBySingleTouch: true
            },
            xAxis: [{
                minRange: 1
            }]
        },
        events: {},
        connector: {
            name: 'connector-1'
        },
        sync: {
            extremes: true
        }
    }]
}, true);

window.addEventListener('resize', e => {
    board.mountedComponents.forEach(({ component }) => {
        component.resize();
    });
});

board.mountedComponents.forEach(({ component }) => {
    console.log(component);
});
