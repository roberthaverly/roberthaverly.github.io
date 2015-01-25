/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'only-tip2',
                            type: 'image',
                            rect: ['363px', '627px', '93px', '61px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"only-tip2.png",'0px','0px']
                        },
                        {
                            id: 'charger-wo-tip',
                            type: 'image',
                            rect: ['170px', '616px', '476px', '438px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"charger-wo-tip.png",'0px','0px']
                        },
                        {
                            id: 'iphone6-med-case',
                            type: 'image',
                            rect: ['158px', '-997px', '483px', '968px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"iphone6-med-case.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '800px', '600px'],
                            overflow: 'hidden',
                            fill: ["rgba(75,51,91,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 2429,
                    autoPlay: true,
                    data: [
                        [
                            "eid4",
                            "location",
                            0,
                            1000,
                            "easeOutBounce",
                            "${charger-wo-tip}",
                            [[408.36, 835, 0, 0, 0, 0,0],[408.64, 537.38, 0, 0, 0, 0,297.63]]
                        ],
                        [
                            "eid7",
                            "location",
                            1500,
                            0,
                            "easeOutExpo",
                            "${charger-wo-tip}",
                            [[408.64, 537.38, 0, 0, 0, 0,0],[408.64, 537.38, 0, 0, 0, 0,0]]
                        ],
                        [
                            "eid10",
                            "location",
                            2250,
                            0,
                            "easeOutQuart",
                            "${charger-wo-tip}",
                            [[408.64, 537.38, 0, 0, 0, 0,0],[408.64, 537.38, 0, 0, 0, 0,0]]
                        ],
                        [
                            "eid16",
                            "location",
                            1000,
                            500,
                            "easeOutQuart",
                            "${only-tip2}",
                            [[409.5, 657.5, 0, 0, 0, 0,0],[409.5, 351.5, 0, 0, 0, 0,306]]
                        ],
                        [
                            "eid8",
                            "location",
                            1500,
                            166,
                            "easeOutQuart",
                            "${iphone6-med-case}",
                            [[399.5, -512.99, 0, 0, 0, 0,0],[399.5, -153.79, 0, 0, 0, 0,359.2]]
                        ],
                        [
                            "eid9",
                            "location",
                            1666,
                            584,
                            "easeOutBack",
                            "${iphone6-med-case}",
                            [[399.5, -153.79, 0, 0, 0, 0,0],[399.5, -119, 0, 0, 0, 0,34.79]]
                        ],
                        [
                            "eid13",
                            "location",
                            2250,
                            179,
                            "easeOutQuart",
                            "${iphone6-med-case}",
                            [[399.5, -119, 0, 0, 0, 0,0],[399.5, -103, 0, 0, 0, 0,16]]
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-62303129");
