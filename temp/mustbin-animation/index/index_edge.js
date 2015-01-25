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
                            id: 'phone',
                            type: 'image',
                            rect: ['360px', '332px', '757px', '1269px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"phone.png",'0px','0px']
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['140px', '69px', '1192px', '80px', 'auto', 'auto'],
                            text: "Send Private Messages",
                            align: "center",
                            font: ['Lucida Sans Unicode, Lucida Grande, sans-serif', [65, "px"], "rgba(0,0,0,1)", "100", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'TextCopy',
                            type: 'text',
                            rect: ['140px', '182px', '1192px', '80px', 'auto', 'auto'],
                            text: "Every conversation you have on Mustbin is behind a closed locked door. Even message notifications are obscured to maintain your privacy.",
                            align: "center",
                            font: ['Verdana, Geneva, sans-serif', [30, "px"], "rgba(0,0,0,1)", "100", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'text6',
                            type: 'image',
                            rect: ['483px', '2399px', '284px', '90px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"text6.png",'0px','0px']
                        },
                        {
                            id: 'text5',
                            type: 'image',
                            rect: ['483px', '2263px', '555px', '124px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"text5.png",'0px','0px']
                        },
                        {
                            id: 'text4',
                            type: 'image',
                            rect: ['483px', '2126px', '555px', '124px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"text4.png",'0px','0px']
                        },
                        {
                            id: 'text3',
                            type: 'image',
                            rect: ['483px', '2023px', '555px', '90px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"text3.png",'0px','0px']
                        },
                        {
                            id: 'text2',
                            type: 'image',
                            rect: ['483px', '1850px', '555px', '160px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"text2.png",'0px','0px']
                        },
                        {
                            id: 'text1',
                            type: 'image',
                            rect: ['483px', '1614px', '555px', '124px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"text1.png",'0px','0px']
                        },
                        {
                            id: 'date',
                            type: 'image',
                            rect: ['736px', '1632px', '302px', '26px', 'auto', 'auto'],
                            autoOrient: false,
                            fill: ["rgba(0,0,0,0)",im+"date.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1500px', '1600px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(217,217,217,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 3001.07421875,
                    autoPlay: true,
                    data: [
                        [
                            "eid28",
                            "location",
                            88,
                            2912,
                            "easeOutBounce",
                            "${text1}",
                            [[760.95, 1675.53, 0, 0, 0, 0,0],[760.06, 863, 0, 0, 0, 0,812.53]]
                        ],
                        [
                            "eid38",
                            "location",
                            406,
                            2587,
                            "easeOutBounce",
                            "${text6}",
                            [[625, 2444, 0, 0, 0, 0,0],[625, 1534, 0, 0, 0, 0,910]]
                        ],
                        [
                            "eid30",
                            "location",
                            132,
                            2869,
                            "easeOutBounce",
                            "${text2}",
                            [[760.95, 1930, 0, 0, 0, 0,0],[760.06, 1017, 0, 0, 0, 0,913]]
                        ],
                        [
                            "eid36",
                            "location",
                            323,
                            2672,
                            "easeOutBounce",
                            "${text5}",
                            [[760.5, 2325, 0, 0, 0, 0,0],[760.5, 1411, 0, 0, 0, 0,914]]
                        ],
                        [
                            "eid34",
                            "location",
                            250,
                            2745,
                            "easeOutBounce",
                            "${text4}",
                            [[760.5, 2188, 0, 0, 0, 0,0],[760.5, 1274, 0, 0, 0, 0,914]]
                        ],
                        [
                            "eid26",
                            "location",
                            52,
                            2948,
                            "easeOutBounce",
                            "${date}",
                            [[887, 1645.25, 0, 0, 0, 0,0],[887, 753.03, 0, 0, 0, 0,892.22]]
                        ],
                        [
                            "eid32",
                            "location",
                            194,
                            2806,
                            "easeOutBounce",
                            "${text3}",
                            [[760.95, 2068, 0, 0, 0, 0,0],[760.06, 1154, 0, 0, 0, 0,914]]
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-52970927");
