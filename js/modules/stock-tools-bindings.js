/**
 * Events generator for Stock tools
 *
 * (c) 2009-2018 Paweł Fus
 *
 * License: www.highcharts.com/license
 */
'use strict';
import H from '../parts/Globals.js';

var addEvent = H.addEvent,
    doc = H.doc,
    objectEach = H.objectEach,
    PREFIX = 'highcharts-';

// TO DO:
// Consider this directly in setOptions();
// or apply H.setOptions({ bindings: H.toolbar.proto.features })
H.Toolbar.prototype.features = {
    'segment': {
        start: function (e) {
            var x = this.chart.xAxis[0].toValue(e.chartX),
                y = this.chart.yAxis[0].toValue(e.chartY);

            this.currentAnnotation = this.chart.addAnnotation({
                type: 'crooked-line',
                typeOptions: {
                    points: [{
                        x: x,
                        y: y
                    }, {
                        x: x,
                        y: y
                    }]
                }
            });
        },
        steps: [
            function (e) {
                var chart = this.chart,
                    options = this.currentAnnotation.options.typeOptions,
                    x = chart.xAxis[0].toValue(e.chartX),
                    y = chart.yAxis[0].toValue(e.chartY);

                this.currentAnnotation.update({
                    typeOptions: {
                        points: [
                            options.points[0],
                            {
                                x: x,
                                y: y
                            }
                        ]
                    }
                });

                this.currentAnnotation.setControlPointsVisibility(true);
            }
        ]
    },
    'arrow-segment': {
        start: function (e) {
            var x = this.chart.xAxis[0].toValue(e.chartX),
                y = this.chart.yAxis[0].toValue(e.chartY);

            this.currentAnnotation = this.chart.addAnnotation({
                type: 'crooked-line',
                typeOptions: {
                    line: {
                        markerEnd: 'arrow'
                    },
                    points: [{
                        x: x,
                        y: y
                    }, {
                        x: x,
                        y: y
                    }]
                }
            });
        },
        steps: [
            function (e) {
                var chart = this.chart,
                    options = this.currentAnnotation.options.typeOptions,
                    x = chart.xAxis[0].toValue(e.chartX),
                    y = chart.yAxis[0].toValue(e.chartY);

                this.currentAnnotation.update({
                    typeOptions: {
                        points: [
                            options.points[0],
                            {
                                x: x,
                                y: y
                            }
                        ]
                    }
                });

                this.currentAnnotation.setControlPointsVisibility(true);
            }
        ]
    },
    'ray': {
        start: function (e) {
            var x = this.chart.xAxis[0].toValue(e.chartX),
                y = this.chart.yAxis[0].toValue(e.chartY);

            this.currentAnnotation = this.chart.addAnnotation({
                type: 'infinity-line',
                typeOptions: {
                    type: 'ray',
                    points: [{
                        x: x,
                        y: y
                    }, {
                        x: x,
                        y: y
                    }]
                }
            });
        },
        steps: [
            function (e) {
                var chart = this.chart,
                    options = this.currentAnnotation.options.typeOptions,
                    x = chart.xAxis[0].toValue(e.chartX),
                    y = chart.yAxis[0].toValue(e.chartY);

                this.currentAnnotation.update({
                    typeOptions: {
                        points: [
                            options.points[0],
                            {
                                x: x,
                                y: y
                            }
                        ]
                    }
                });

                this.currentAnnotation.setControlPointsVisibility(true);
            }
        ]
    },
    'arrow-ray': {
        start: function (e) {
            var x = this.chart.xAxis[0].toValue(e.chartX),
                y = this.chart.yAxis[0].toValue(e.chartY);

            this.currentAnnotation = this.chart.addAnnotation({
                type: 'infinity-line',
                typeOptions: {
                    type: 'ray',
                    line: {
                        markerEnd: 'arrow'
                    },
                    points: [{
                        x: x,
                        y: y
                    }, {
                        x: x,
                        y: y
                    }]
                }
            });
        },
        steps: [
            function (e) {
                var chart = this.chart,
                    options = this.currentAnnotation.options.typeOptions,
                    x = chart.xAxis[0].toValue(e.chartX),
                    y = chart.yAxis[0].toValue(e.chartY);

                this.currentAnnotation.update({
                    typeOptions: {
                        points: [
                            options.points[0],
                            {
                                x: x,
                                y: y
                            }
                        ]
                    }
                });

                this.currentAnnotation.setControlPointsVisibility(true);
            }
        ]
    },
    'infinity-line': {
        start: function (e) {
            var x = this.chart.xAxis[0].toValue(e.chartX),
                y = this.chart.yAxis[0].toValue(e.chartY);

            this.currentAnnotation = this.chart.addAnnotation({
                type: 'infinity-line',
                typeOptions: {
                    type: 'line',
                    points: [{
                        x: x,
                        y: y
                    }, {
                        x: x,
                        y: y
                    }]
                }
            });
        },
        steps: [
            function (e) {
                var chart = this.chart,
                    options = this.currentAnnotation.options.typeOptions,
                    x = chart.xAxis[0].toValue(e.chartX),
                    y = chart.yAxis[0].toValue(e.chartY);

                this.currentAnnotation.update({
                    typeOptions: {
                        points: [
                            options.points[0],
                            {
                                x: x,
                                y: y
                            }
                        ]
                    }
                });

                this.currentAnnotation.setControlPointsVisibility(true);
            }
        ]
    },
    'arrow-infinity-line': {
        start: function (e) {
            var x = this.chart.xAxis[0].toValue(e.chartX),
                y = this.chart.yAxis[0].toValue(e.chartY);

            this.currentAnnotation = this.chart.addAnnotation({
                type: 'infinity-line',
                typeOptions: {
                    type: 'line',
                    line: {
                        markerEnd: 'arrow'
                    },
                    points: [{
                        x: x,
                        y: y
                    }, {
                        x: x,
                        y: y
                    }]
                }
            });
        },
        steps: [
            function (e) {
                var chart = this.chart,
                    options = this.currentAnnotation.options.typeOptions,
                    x = chart.xAxis[0].toValue(e.chartX),
                    y = chart.yAxis[0].toValue(e.chartY);

                this.currentAnnotation.update({
                    typeOptions: {
                        points: [
                            options.points[0],
                            {
                                x: x,
                                y: y
                            }
                        ]
                    }
                });

                this.currentAnnotation.setControlPointsVisibility(true);
            }
        ]
    },
    'horizontal-line': {
        start: function (e) {
            var x = this.chart.xAxis[0].toValue(e.chartX),
                y = this.chart.yAxis[0].toValue(e.chartY);

            this.currentAnnotation = this.chart.addAnnotation({
                type: 'infinity-line',
                typeOptions: {
                    type: 'line',
                    points: [{
                        x: x,
                        y: y
                    }, {
                        x: x,
                        y: y
                    }]
                }
            });
        },
        steps: [
            function (e) {
                var chart = this.chart,
                    options = this.currentAnnotation.options.typeOptions,
                    y = chart.yAxis[0].toValue(e.chartY);

                this.currentAnnotation.update({
                    typeOptions: {
                        points: [
                            options.points[0],
                            {
                                x: options.points[0].x,
                                y: y
                            }
                        ]
                    }
                });

                this.currentAnnotation.setControlPointsVisibility(true);
            }
        ]
    },
    'vertical-line': {
        start: function (e) {
            var x = this.chart.xAxis[0].toValue(e.chartX),
                y = this.chart.yAxis[0].toValue(e.chartY);

            this.currentAnnotation = this.chart.addAnnotation({
                type: 'infinity-line',
                typeOptions: {
                    type: 'line',
                    points: [{
                        x: x,
                        y: y
                    }, {
                        x: x,
                        y: y
                    }]
                }
            });
        },
        steps: [
            function (e) {
                var chart = this.chart,
                    options = this.currentAnnotation.options.typeOptions,
                    x = chart.xAxis[0].toValue(e.chartX);

                this.currentAnnotation.update({
                    typeOptions: {
                        points: [
                            options.points[0],
                            {
                                x: x,
                                y: options.points[0].y
                            }
                        ]
                    }
                });

                this.currentAnnotation.setControlPointsVisibility(true);
            }
        ]
    },
    'crooked-line': {
        start: function () {

        }
    },
    'vertical-arrows': {
        start: function () {

        }
    },
    'measure': {
        start: function (e) {
            var chart = this.chart,
                x = chart.xAxis[0].toValue(e.chartX),
                y = chart.yAxis[0].toValue(e.chartY),
                options = {
                    type: 'measure',
                    typeOptions: {
                        point: {
                            x: x,
                            y: y
                        },
                        xAxis: 0,
                        yAxis: 0,
                        background: {
                            width: 300,
                            height: 150
                        }
                        /* formatter: function () {
                            return 'custom min: ' + this.min +
                                '<br>custom max: ' + this.max;
                        }*/
                    },
                    events: {
                        click: function () {
                            this.cpVisibility = !this.cpVisibility;
                            this.setControlPointsVisibility(this.cpVisibility);
                        }
                    }
                };

            if (!this.currentAnnotation) {
                this.currentAnnotation = chart.addAnnotation(options);
            }
        },
        end: function () { }
    },
    'fibonacci': {
        start: function (e) {
            var x = this.chart.xAxis[0].toValue(e.chartX),
                y = this.chart.yAxis[0].toValue(e.chartY);

            this.currentAnnotation = this.chart.addAnnotation({
                type: 'fibonacci',
                typeOptions: {
                    points: [{
                        x: x,
                        y: y
                    }, {
                        x: x,
                        y: y
                    }]
                },
                events: {
                    click: function () {
                        this.cpVisibility = !this.cpVisibility;
                        this.setControlPointsVisibility(this.cpVisibility);
                    }
                }
            });
        },
        steps: [
            function (e) {
                var options = this.currentAnnotation.options.typeOptions,
                    x = this.chart.xAxis[0].toValue(e.chartX),
                    y = this.chart.yAxis[0].toValue(e.chartY);

                this.currentAnnotation.update({
                    typeOptions: {
                        points: [
                            options.points[0],
                            {
                                x: x,
                                y: y
                            }
                        ]
                    }
                });
                this.currentAnnotation.setControlPointsVisibility(true);
            }
        ]
    },
    'parallel-channel': {
        start: function (e) {
            var x = this.chart.xAxis[0].toValue(e.chartX),
                y = this.chart.yAxis[0].toValue(e.chartY);

            this.currentAnnotation = this.chart.addAnnotation({
                type: 'tunnel',
                typeOptions: {
                    points: [{
                        x: x,
                        y: y
                    }, {
                        x: x,
                        y: y
                    }]
                }
            });
        },
        steps: [
            function (e) {
                var options = this.currentAnnotation.options.typeOptions,
                    x = this.chart.xAxis[0].toValue(e.chartX),
                    y = this.chart.yAxis[0].toValue(e.chartY);

                this.currentAnnotation.update({
                    typeOptions: {
                        points: [
                            options.points[0],
                            {
                                x: x,
                                y: y
                            }
                        ]
                    }
                });
                this.currentAnnotation.setControlPointsVisibility(true);
            }
        ]
    },
    'pitchfork': {
        start: function (e) {
            var x = this.chart.xAxis[0].toValue(e.chartX),
                y = this.chart.yAxis[0].toValue(e.chartY);

            this.currentAnnotation = this.chart.addAnnotation({
                type: 'pitchfork',
                typeOptions: {
                    points: [{
                        x: x,
                        y: y,
                        controlPoint: {
                            style: {
                                fill: 'red'
                            }
                        }
                    }, {
                        x: x,
                        y: y
                    }, {
                        x: x,
                        y: y
                    }],
                    innerBackground: {
                        fill: 'rgba(100, 170, 255, 0.8)'
                    }
                },
                events: {
                    click: function () {
                        this.cpVisibility = !this.cpVisibility;
                        this.setControlPointsVisibility(this.cpVisibility);
                    }
                },
                shapeOptions: {
                    strokeWidth: 2
                }
            });
        },
        steps: [
            function (e) {
                var options = this.currentAnnotation.options.typeOptions,
                    x = this.chart.xAxis[0].toValue(e.chartX),
                    y = this.chart.yAxis[0].toValue(e.chartY);

                this.currentAnnotation.update({
                    typeOptions: {
                        points: [
                            options.points[0],
                            {
                                x: x,
                                y: y
                            },
                            {
                                x: x,
                                y: y
                            }
                        ]
                    }
                });
                this.currentAnnotation.setControlPointsVisibility(true);
            },
            function (e) {
                var options = this.currentAnnotation.options.typeOptions,
                    x = this.chart.xAxis[0].toValue(e.chartX),
                    y = this.chart.yAxis[0].toValue(e.chartY);

                this.currentAnnotation.update({
                    typeOptions: {
                        points: [
                            options.points[0],
                            options.points[1],
                            {
                                x: x,
                                y: y
                            }
                        ]
                    }
                });
                this.currentAnnotation.setControlPointsVisibility(true);
            }
        ]
    },
    'circle': {
        start: function () {

        }
    },
    'rect': {
        start: function () {

        }
    },
    'simple-text': {
        start: function () {

        }
    },
    'flag': {
        start: function () {

        }
    },
    'zoom-in': {
        start: function () {

        }
    },
    'zoom-out': {
        start: function () {

        }
    },
    'full-screen': {
        start: function () {

        }
    },
    'horizontal-price': {
        start: function () {

        }
    },
    'indicators': {
        start: function () {

        }
    },
    'show-hide-all': {
        start: function () {

        }
    },
    'save-chart': {
        start: function () {

        }
    }
};

addEvent(H.Toolbar, 'afterInit', function () {
    var toolbar = this;
    objectEach(toolbar.features, function (events, className) {
        var element = doc.getElementsByClassName(PREFIX + className)[0];
        if (element) {
            addEvent(
                element,
                'click',
                function (e) {
                    toolbar.selectedButton = events;

                    // we have two objects with the same class,
                    // so need to trigger one event (main button)
                    e.stopPropagation();


                    this.className += ' active';
                }
            );
        }
    });
});

addEvent(H.Chart, 'load', function () {
    var toolbar = this.stockToolbar;

    if (toolbar) {
        addEvent(this, 'click', function (e) {
            var selectedButton = toolbar.selectedButton;

            if (!selectedButton) {
                return;
            }

            if (!toolbar.nextEvent) {
                // Call init method:
                selectedButton.start.call(toolbar, e);

                // If steps exists (e.g. Annotations), bind them:
                if (selectedButton.steps) {
                    toolbar.stepIndex = 0;
                    toolbar.steps = true;
                    toolbar.mouseMoveEvent = toolbar.nextEvent =
                        selectedButton.steps[toolbar.stepIndex];
                } else {
                    toolbar.steps = false;
                    toolbar.selectedButton = null;
                    // First click is also the last one:
                    if (selectedButton.end) {
                        selectedButton.end.call(toolbar, e);
                    }
                }
            } else {

                toolbar.nextEvent.call(toolbar, e);

                if (toolbar.steps) {

                    toolbar.stepIndex++;

                    if (selectedButton.steps[toolbar.stepIndex]) {
                        // If we have more steps, bind them one by one:
                        toolbar.mouseMoveEvent = toolbar.nextEvent =
                            selectedButton.steps[toolbar.stepIndex];
                    } else {

                        // That was the last step, call end():
                        if (selectedButton.end) {
                            selectedButton.end.call(toolbar, e);
                        }
                        toolbar.nextEvent = false;
                        toolbar.mouseMoveEvent = false;
                        toolbar.selectedButton = null;
                        // toolbar.deselectButton();
                    }
                }
            }
        });
        addEvent(this.container, 'mousemove', function (e) {
            if (toolbar.mouseMoveEvent) {
                toolbar.mouseMoveEvent.call(toolbar, e);
            }
        });
    }
});
