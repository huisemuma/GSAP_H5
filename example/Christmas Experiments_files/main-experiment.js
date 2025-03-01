(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Experiments, experiments;

Experiments = require("experiments/Experiments");

experiments = new Experiments();



},{"experiments/Experiments":5}],2:[function(require,module,exports){
module.exports={
    "idx": 24,
    "experiments": [
        {
            "idx": 1,
            "isAvailable": true,
            "author": "Guillaume Gouessan",
            "bio": "Interactive Developer @hellohikimori",
            "title": "Polar",
            "subtitle": "",
            "desc": "Hop aboard the Polar Express. Travel through windy plains covered in snow, enter the tunnel to switch from Polar to Solar.",
            "site": "https://twitter.com/superguigui",
            "isWebGL": true,
            "isMobile": false,
            "msgTwitter":"Polar a beautiful experiments by @superguigui #christmasxp",
            "msgFacebook":"Polar a beautiful experiments by @superguigui #christmasxp",
            "details": [
                {
                    "title": "controls",
                    "desc": "Click and drag to clear the window"
                },
                {
                    "title": "Github",
                    "desc": "<a href='https://github.com/superguigui/polar' target='_blank'>Check the source here!</a>"
                }
            ]
        },
        {
            "idx": 2,
            "isAvailable": true,
            "author": "Felix Turner",
            "bio": "Developer @ Airtight Interactive",
            "title": "Winter Rush",
            "subtitle": "",
            "desc": "Collect the crystals before the dawn comes! Try it on Mobile.",
            "site": "https://twitter.com/felixturner",
            "isWebGL": true,
            "isMobile": true,
            "msgTwitter":"Discover Winter Rush a #webgl game by @felixturner! #christmasxp",
            "msgFacebook":"Discover Winter Rush a #webgl game by @felixturner! #christmasxp",
            "details": [
                {
                    "title": "controls",
                    "desc": "Use arrow keys or tap to move left and right."
                }
            ]
        },
        {
            "idx": 3,
            "isAvailable": true,
            "author": "Nathan Gordon",
            "bio": "Creative Developer @utlranoir",
            "title": "The Cheeky Orphan",
            "subtitle": "",
            "desc": "It's early christmas morning, and Dion is far too excited to sleep. Direct him quietly so he can be the first to open his presents. Stay out of the light and watch for toys!",
            "site": "https://twitter.com/gordonnl",
            "isWebGL": true,
            "isMobile": false,
            "msgTwitter":"Back to your childhood with the Cheeky Orphan. An interactive piece crafted by @gordonnl #christmasxp #day3",
            "msgFacebook":"Back to your childhood with the Cheeky Orphan. An interactive piece crafted by @gordonnl #christmasxp #day3. We all did it, right ? ;D",
            "details": [
                {
                    "title": "controls",
                    "desc": "Move your mouse to control the speed and direction."
                },
                {
                    "title": "song",
                    "desc": "made by <a href='https://anposttv-lisahannigan.bandcamp.com/', target='_blank'>LISA HANNIGAN</a>"
                }
            ]
        },
        {
            "idx": 4,
            "isAvailable": true,
            "author": "David Rosser",
            "bio": "Programmer and artist @HiReSLondon",
            "title": "Kreepy Krampus",
            "subtitle": "",
            "desc": "A webgl game inspired by <a href='http://en.wikipedia.org/wiki/Krampus' target='_blank'>a christmas fairytale from alpine countries</a>, make it to midnight to save yourself from the clutches of Krampus.",
            "site": "http://twitter.com/davidpaulrosser",
            "isWebGL": true,
            "isMobile": false,
            "msgTwitter":"Discover Kreepy Krampus, a #webgl game based on a christmas fairytale from alpine countries by @davidpaulrosser! #christmasxp #day4",
            "msgFacebook":"Kreepy Krampus an interactive christmas experiment based on a christmas fairytale!",
            "details": [
                {
                    "title": "controls",
                    "desc": "Click on the skulls when they're highlighted."
                },
                {
                    "title": "Source",
                    "desc":"<a href='https://github.com/IVXVIXVIII/kreepy-krampus' target='_blank'>Github source</a>"
                }
            ]
        },
        {
            "idx": 5,
            "isAvailable": true,
            "author": "Bruno Simon",
            "bio": "Developer @AgenceUzik & teacher at @Hetic",
            "title": "Santa Workout",
            "subtitle": "",
            "desc": "Get Santa to the end as fast as possible. Don't lose too many elves to be a good Santa ;)",
            "site": "http://bruno-simon.com",
            "isWebGL": true,
            "isMobile": false,
            "msgTwitter":"Santa Workout, a super funny little #webgl game by @bruno_simon for @christmasxp, enjoy!",
            "msgFacebook":"Santa Workout, a super funny little game for christmasexperiments, enjoy!",
            "details": [
                {
                    "title": "controls",
                    "desc": "Click on the screen to make santa move. The elves will follow."
                },
                {
                    "title": "Source",
                    "desc":"<a href='https://github.com/brunosimon/christmas-experiment-2014' target='_blank'>Github source</a>"
                }

            ]
        },
        {
            "idx": 6,
            "isAvailable": true,
            "author": "Hector Arellano",
            "bio": "-",
            "title": "Christmas Star",
            "subtitle": "",
            "desc": "Simple simulation of a christmas star explosion, rendering using a ray tracer in real time.",
            "site": "https://twitter.com/hector_arellano",
            "isWebGL": true,
            "isMobile": false,
            "msgTwitter":"Simple simulation of a christmas star explosion by @hector_arellano for @christmasxp #raytracer #realtime #webgl",
            "msgFacebook":"Check this simulation of a christmas star explosion by @hector_arellano #raytracer #realtime #webgl #geeks",
            "details": [
                {
                    "title": "controls",
                    "desc": "Play with the parameters & click on the restart button to see the new simulation"
                }
            ]
        },
        {
            "idx": 7,
            "isAvailable": true,
            "author": "Michael Anthony",
            "bio": "Interactive Director at @active_theory",
            "title": "Finding Home",
            "subtitle": "",
            "desc": "An interactive journey through land and sky",
            "site": "http://twitter.com/michaeltheory",
            "isWebGL": true,
            "isMobile": true,
            "msgTwitter":"Finding Home, a beautiful interactive journey through land and sky by @active_theory for @christmas",
            "msgFacebook":"Finding Home, a beautiful interactive journey through land and sky made with love by Active Theory",
            "details": [
                {
                    "title": "controls",
                    "desc": "Move your mouse or touch to interact"
                },{
                    "title":"song",
                    "desc":"Tycho - Awake"
                }
            ]
        },
        {
            "idx": 8,
            "isAvailable": true,
            "author": "Lin Yi-Wen",
            "bio": "Coder. Father.",
            "title": "Blow",
            "subtitle": "",
            "desc": "Blow the gold.",
            "site": "https://twitter.com/yiwen_lin",
            "isWebGL": true,
            "isMobile": false,
            "msgTwitter":"Blow the gold, a beautiful experiments by @yiwen_lin for @christmasxp",
            "msgFacebook":"Blow the gold, a beautiful experiments by the artist Lin Yi-Wen",
            "details": [
                {
                    "title": "controls",
                    "desc": "Activate your microphone or press the space bar"
                },
                {
                    "title": "Source",
                    "desc": "<a href='https://github.com/yiwenl/Christmas_Experiment_2014' target='_blank'>Github source</a>"
                }
                
            ]
        },
        {
            "idx": 9,
            "isAvailable": true,
            "author": "oosmoxiecode",
            "bio": "-",
            "title": "Replicate",
            "subtitle": "",
            "desc": "Well.. this started out as some snowy-forest-using-billboards-test. Then sidetracked to some kinda music visualization for the song \"jaHer\" by \"Skinny Puppy\". ",
            "site": "#",
            "isWebGL": true,
            "isMobile": false,
            "msgTwitter":"Replicate. A trippy music visualization by @oosmoxiecode for @christmasxp",
            "msgFacebook":"Replicate. A trippy music visualization by oosmoxiecode for #christmasxp #day9",
            "details": [
                {
                    "title": "music",
                    "desc": "jaHer by Skinny Puppy"
                }
            ]
        },
        {
            "idx": 10,
            "isAvailable": true,
            "author": "Silvio Paganini",
            "bio": "Brain-fuck @unit9 ",
            "title": "PIXMAS",
            "subtitle": "",
            "desc": "Explode your Xmas heros.",
            "site": "https://twitter.com/silviopaganini",
            "isWebGL": true,
            "isMobile": true,
            "msgTwitter":"Pixmax, explode your xmas heros by @silviopaganini for @christmasxp",
            "msgFacebook":"Pixmax, explode your xmas heros by @silviopaganini for @christmasxp",
            "details": [
                {
                    "title": "controls",
                    "desc": "Move your mouse or use your gyro to control the camera and click/tap to explode"
                },
                {
                    "title": "Source",
                    "desc": "<a href='https://github.com/silviopaganini/xmas' target='_blank'>Github source</a>"
                }
            ]
        },
        {
            "idx": 11,
            "isAvailable": true,
            "author": "Mat Groves",
            "bio": "Co-founder of @goodboydigital and creator of pixi.js",
            "title": "Pixilights",
            "subtitle": "",
            "desc": "Presents are more dangerous than you think! A game made in 2d using pixi.js",
            "site": "https://twitter.com/Doormat23",
            "isWebGL": true,
            "isMobile": true,
            "msgTwitter":"Pixilights, a super cute game by @Doormat23 for @christmasxp #pixijs",
            "msgFacebook":"Pixilights, a super cute game to feel the christmas spirit! #christmasxp #day11",
            "details": [
                {
                    "title": "controls",
                    "desc": "Move your mouse to move and avoid the presents!"
                }
            ]
        },
        {
            "idx": 12,
            "isAvailable": true,
            "author": "Damien Mortini",
            "bio": "Freelance intern",
            "title": "Christmas Quest",
            "subtitle": "",
            "desc": "Follow the light to find all the gifts and discover the real magic of Christmas!",
            "site": "https://twitter.com/dmmn_",
            "isWebGL": true,
            "isMobile": false,
            "msgTwitter":"Christmas Quest, an epileptic santa quest by @dmmn_ for @christmasxp",
            "msgFacebook":"Discover Christmas Quest, an epileptic santa quest by Damien Mortini #day12",
            "details": [
                {
                    "title": "controls",
                    "desc": "Move with your keyboard arrows"
                }
            ]
        },
        {
            "idx": 13,
            "isAvailable": true,
            "author": "William Mapan",
            "bio": "Coding and plopping stuff",
            "title": "Sunset gift",
            "subtitle": "",
            "desc": "An exploration of Santa's gift dimension. Help him to catch those cheeky gifts.",
            "site": "https://twitter.com/williamapan",
            "isWebGL": true,
            "isMobile": false,
            "msgTwitter":"",
            "msgFacebook":"",
            "details": [
                {
                    "title": "controls",
                    "desc": "Hit your space bar / screen to move forward"
                }
            ]
        },
        {
            "idx": 14,
            "isAvailable": true,
            "author": "Matt DesLauriers",
            "bio": "Creative Developer @Jam3",
            "title": "hot cocoa",
            "subtitle": "",
            "desc": "",
            "site": "https://twitter.com/mattdesl",
            "isWebGL": true,
            "isMobile": false,
            "msgTwitter":"Hot cocoa by @mattdesl for @christmasxp ",
            "msgFacebook":"Hot cocoa, a pretty #christmasxp",
            "details": [
                {
                    "title": "controls",
                    "desc": "tap the Earth to find some hot cocoa"
                }
            ]
        },
        {
            "idx": 15,
            "isAvailable": true,
            "author": "FZFS",
            "bio": "-",
            "title": "NorthPole",
            "subtitle": "",
            "desc": "Travel to the North Pole and enjoy a lyric journey through time... Yes, there is seasons now in NorthPole. Damn climat change.",
            "site": "https://twitter.com/florianzumbrunn",
            "isWebGL": true,
            "isMobile": false,
            "msgTwitter":"Yes, there is seasons now in NorthPole.. Damn you climat change...",
            "msgFacebook":"Yes, there is seasons now in NorthPole.. Damn you climat change...",
            "details": [
                {
                    "title": "Drag the screen",
                    "desc": "And travel through time."
                }
            ]
        },
        {
            "idx": 16,
            "isAvailable": true,
            "author": "eiji muroichi",
            "bio": "Visual Designer & Technologist @prty_ny",
            "title": "The Little Match Girl",
            "subtitle": "",
            "desc": "An interactive version of a classic story, The Little Match Girl. <http://en.wikipedia.org/wiki/The_Little_Match_Girl>.",
            "site": "http://eiji.muroichi.info/",
            "isWebGL": true,
            "isMobile": false,
            "msgTwitter":"Discover an interactive version of a classic story, The Little Match Girl by @muroicci for @christmasxp",
            "msgFacebook":"Discover an interactive version of a classic story, The Little Match Girl made by Eiji Muroicci",
            "details": [
                {
                    "title": "controls",
                    "desc": "Click the little match girl to strike a match. Blow to your microphone to blow it out."
                }
            ]
        },
        {
            "idx": 17,
            "isAvailable": true,
            "author": "Nicolas Barradeau",
            "bio": "I do graphics.",
            "title": "Harriet",
            "subtitle": "",
            "desc": "I wanted to create a vintage toy generator which turned into a vintage plane generator. <a href='http://en.wikipedia.org/wiki/Harriet_Quimby' target='_blank'>\"Harriet\"</a> is a tribute to Harriet Quimby, the first US woman pilot. now you can follow her around some famous landmarks of the world.",
            "site": "http://barradeau.com/blog/?page_id=6",
            "isWebGL": true,
            "isMobile": false,
            "msgTwitter":"",
            "msgFacebook":"",
            "details": [
                {
                    "title": "controls",
                    "desc": "spin the plane or use the arrows to regenerate. click / tap the arrow at the bottom of the screen to fly around the world or come back to the plane view. there's no way to control the plane & it's still very buggy, sorry about that..."
                },
                {
                    "title": "links",
                    "desc": "blog post : <a href='http://barradeau.com/blog/?p=428' target='_blank'>http://barradeau.com/blog/?p=428</a><br/>Source: <a href='https://github.com/nicoptere/harriet' target='_blank'>Github source</a>"
                }
            ]
        },
        {
            "idx": 18,
            "isAvailable": true,
            "author": "David Li",
            "bio": "-",
            "title": "Snowdrops",
            "subtitle": "",
            "desc": "A tranquil winter scene.",
            "site": "http://david.li",
            "isWebGL": true,
            "isMobile": false,
            "msgTwitter":"Discover this quiet winter scene by @daviddotli for @christmasxp #webgl",
            "msgFacebook":"Discover this quiet winter scene by David.li",
            "details": [
                {
                    "title": "controls",
                    "desc": "Drag to rotate the camera"
                }
            ]
        },
        {
            "idx": 19,
            "isAvailable": true,
            "author": "David Ronai",
            "bio": "Initiator of the project & digital crafter",
            "title": "Golem",
            "subtitle": "",
            "desc": "I love fantasy, and during the winter i was drawing a lot of Golem in my childhood. Here it's my dynamic ice golem made by code :).< Physics is made with oimojs.",
            "site": "https://twitter.com/Makio64",
            "isWebGL": true,
            "isMobile": true,
            "msgTwitter":"Golem, a poetic experiment by @makio64 for @christmasxp #oimojs #webgl",
            "msgFacebook":"Golem a poetic web experiment whitch invite you to met the golem..",
            "details": [
                {
                    "title": "Music",
                    "desc": "Le jardinier celeste by Hirundo°"
                }
            ]
        },
        {
            "idx": 20,
            "isAvailable": true,
            "author": "Grgrdvrt",
            "bio": "-",
            "title": "(de)generative snowman",
            "subtitle": "",
            "desc": "Building a snowman with the \"Diffusion Limited Aggregation\" algorithm.",
            "site": "https://twitter.com/grgrdvrt",
            "isWebGL": true,
            "isMobile": false,
            "msgTwitter":"(de)generative snowman by @grgrdvrt",
            "msgFacebook":"(de)generative snowman by @grgrdvrt",
            "details": [
                {
                    "title": "controls",
                    "desc": "Click"
                }
            ]
        },
        {
            "idx": 21,
            "isAvailable": true,
            "author": "Is-real / Emil Karlsson",
            "bio": "Creative Technologist & fan of all the artists involved in this project. / Motion designer @ b-reel nyc.",
            "title": "boXmas",
            "subtitle": "",
            "desc": "boXmas is a game where the objective is to throw stuff in to boxes. Don't miss!",
            "site": "https://twitter.com/is__real",
            "isWebGL": true,
            "isMobile": false,
            "msgTwitter":"Prepare your gifts with boXmas by @is__real & @sejnulla for @christmasxp!",
            "msgFacebook":"boXmas, prepare your gifts with this xmas game!",
            "details": [
                {
                    "title": "controls",
                    "desc": "Aim by rotating around the scene with your mouse. Hold down spacebar to throw. The longer you hold the further you throw. Toggle the 'hints' for help. Music: Christmas Holidays by Akashic Records"
                }
            ]
        },
        {
            "idx": 22,
            "isAvailable": true,
            "author": "Edan Kwan",
            "bio": "Author of penis.js and vagina.js. Editor of asshole.io",
            "title": "Christmas card to everyone",
            "subtitle": "",
            "desc": "Christmas Card to Everyone is a page that you can share your love to everyone!",
            "site": "https://twitter.com/edankwan",
            "isWebGL": true,
            "isMobile": false,
            "msgTwitter":"It is not too late to send a Christmas card! Cum spread you love to your friends before Christmas!",
            "msgFacebook":"It is not too late to send a Christmas card! Cum spread you love to your friends before Christmas!",
            "details": [
                {
                    "title": "controls",
                    "desc": "Follow the instruction mate!"
                },
                {
                    "title": "Source",
                    "desc": "<a href='https://github.com/edankwan/christmas-card-to-everyone' target='_blank'>Github source</a>"
                }
            ]
        },
        {
            "idx": 23,
            "isAvailable": true,
            "author": "Bartek",
            "bio": "I like to code.",
            "title": "Postcard",
            "subtitle": "",
            "desc": "This experiment is inspired by lenticular postcards. Face detection made with <a href='http://inspirit.github.io/jsfeat/'>jsfeat</a> by @insprit. The 3d scene is full generated with code and based on a custom engine called <a href='https://github.com/drojdjou/squareroot.js/tree/brandnew/html/src' target='_blank'>SQR</a>",
            "site": "https://twitter.com/bartekd",
            "isWebGL": true,
            "isMobile": false,
            "msgTwitter":"A relaxing postcard generated in code by @bartekd for @christmasxp",
            "msgFacebook":"A relaxing postcard generated in code by @bartekd for @christmasxp",
            "details": [
                {
                    "title": "Relax",
                    "desc": "Seriously, just relax :)"
                }
            ]
        },
        {
            "idx": 24,
            "isAvailable": true,
            "author": "Cabibbo / Spite",
            "bio": "Long Live Synesthesia",
            "title": "B E Y O N D",
            "subtitle": "",
            "desc": "A digital crystallography experience for you all",
            "site": "https://twitter.com/Cabbibo",
            "isWebGL": true,
            "isMobile": false,
            "msgTwitter":"",
            "msgFacebook":"",
            "details": [
                {
                    "title": "controls",
                    "desc": "Sit back and relax. Then send your own card!"
                },
                {
                    "title": "Source",
                    "desc": "<a href='http://github.com/cabbibo/beyond/' target='_blank'>Github source</a>"
                }
            ]
        }
    ],
    "artists": [
        {
            "idx": 1,
            "author": "Guillaume Gouessan",
            "bio": "Interactive Developer @hellohikimori",
            "site": "https://twitter.com/superguigui",
            "preview": "1.png"
        },
        {
            "idx": 2,
            "author": "Felix Turner",
            "bio": "Developer @ Airtight Interactive",
            "site": "https://twitter.com/felixturner",
            "preview": "2.png"
        },
        {
            "idx": 3,
            "author": "Nathan Gordon",
            "bio": "Creative Developer @utlranoir",
            "site": "https://twitter.com/gordonnl",
            "preview": "3.png"
        },
        {
            "idx": 4,
            "author": "David Rosser",
            "bio": "Programmer and artist @HiReSLondon",
            "site": "http://twitter.com/davidpaulrosser",
            "preview": "4.png"
        },
        {
            "idx": 5,
            "author": "Bruno Simon",
            "bio": "Developer @AgenceUzik & teacher at @Hetic",
            "site": "http://bruno-simon.com",
            "preview": "5.png"
        },
        {
            "idx": 6,
            "author": "Hector Arellano",
            "bio": "-",
            "site": "https://twitter.com/hector_arellano",
            "preview": "6.png"
        },
        {
            "idx": 7,
            "author": "Michael Anthony",
            "bio": "Interactive Director at @active_theory",
            "site": "http://twitter.com/michaeltheory",
            "preview": "7.png"
        },
        {
            "idx": 8,
            "author": "Lin Yi-Wen",
            "bio": "Coder. Father.",
            "site": "https://twitter.com/yiwen_lin",
            "preview": "8.png"
        },
        {
            "idx": 9,
            "author": "oosmoxiecode",
            "bio": "-",
            "site": "https://twitter.com/oosmoxiecode",
            "preview": "9.png"
        },
        {
            "idx": 10,
            "author": "Silvio Paganini",
            "bio": "Brain-fuck @unit9 ",
            "site": "https://twitter.com/silviopaganini",
            "preview": "16.png"
        },
        {
            "idx": 11,
            "author": "Mat Groves",
            "bio": "Co-founder of @goodboydigital and creator of pixi.js",
            "site": "https://twitter.com/Doormat23",
            "preview": "12.png"
        }, 
        {
            "idx": 12,
            "author": "Damien Mortini",
            "bio": "Freelance intern",
            "site": "https://twitter.com/dmmn_",
            "preview": "11.png"
        },
        {
            "idx": 13,
            "author": "William Mapan",
            "bio": "Coding and plopping stuff",
            "site": "https://twitter.com/williamapan",
            "preview": "13.png"
        },
        {
            "idx": 14,
            "author": "Matt DesLauriers",
            "bio": "Creative Developer @Jam3",
            "site": "https://twitter.com/mattdesl",
            "preview": "14.png"
        },
        {
            "idx": 15,
            "author": "Floz",
            "bio": "-",
            "site": "https://twitter.com/florianzumbrunn",
            "preview": "15a.png"
        },
        {
            "idx": 15,
            "author": "FilsDeGraphiste",
            "bio": "-",
            "site": "https://twitter.com/filsdegraphiste",
            "preview": "15b.png"
        },
        {
            "idx": 16,
            "author": "eiji muroichi",
            "bio": "Visual Designer & Technologist @prty_ny",
            "site": "http://eiji.muroichi.info/",
            "preview": "10.png"
        },
        
        {
            "idx": 17,
            "author": "Nicolas Barradeau",
            "bio": "I code graphics",
            "site": "http://barradeau.com/blog/?page_id=6",
            "preview": "17.png"
        },
        {
            "idx": 18,
            "author": "David Li",
            "bio": "-",
            "site": "http://david.li",
            "preview": "18.png"
        },
        {
            "idx": 19,
            "author": "David Ronai",
            "bio": "Initiator of the project & digital crafter",
            "site": "https://twitter.com/Makio64",
            "preview": "19.png"
        },
        {
            "idx": 20,
            "author": "Grgrdvrt",
            "bio": "-",
            "site": "https://twitter.com/grgrdvrt",
            "preview": "20.png"
        },
        {
            "idx": 21,
            "author": "Is_real",
            "bio": "Creative Technologist & fan of all the artist involved in this project.",
            "site": "https://twitter.com/is__real",
            "preview": "21-a.png"
        },
        {
            "idx": 21,
            "author": "Emil Karlsson",
            "bio": "Motion designer @ b-reel nyc.",
            "site": "https://emilkarlsson.se",
            "preview": "21-b.png"
        },
        {
            "idx": 22,
            "author": "Edan Kwan",
            "bio": "Author of penis.js and vagina.js. Editor of asshole.io",
            "site": "https://twitter.com/edankwan",
            "preview": "22.png"
        },
        {
            "idx": 23,
            "author": "Bartek",
            "bio": "I like to code.",
            "site": "https://twitter.com/bartekd",
            "preview": "23.png"
        },
        {
            "idx": 24,
            "author": "Cabibbo",
            "bio": "Long Live Synesthesia",
            "site": "https://twitter.com/Cabbibo",
            "preview": "24a.png"
        },
        {
            "idx": 24,
            "author": "Spite",
            "bio": "Working since the last century to bring new ideas to the web",
            "site": "https://twitter.com/thespite",
            "preview": "24b.png"
        }
    ]
}

},{}],3:[function(require,module,exports){
var Interactions;

Interactions = (function() {
  function Interactions() {
    this._downs = {};
    this._moves = {};
    this._ups = {};
    this._clicks = {};
    this._mouseleaves = {};
    this._interactions = [this._downs, this._moves, this._ups, this._clicks];
    this.isTouchDevice = "ontouchstart" in window || "onmsgesturechange" in window;
  }

  Interactions.prototype.on = function(elt, action, cb) {
    var evt, isTouchDevice, obj, proxy;
    evt = this._getEvent(action);
    if (evt === "") {
      return;
    }
    obj = this._getObj(action);
    if (!obj[elt]) {
      obj[elt] = [];
    }
    isTouchDevice = this.isTouchDevice;
    proxy = function(e) {
      var touch;
      if (isTouchDevice) {
        touch = e.touches[0];
        if (touch) {
          e.x = touch.clientX;
          e.y = touch.clientY;
        }
      } else {
        e.x = e.clientX;
        e.y = e.clientY;
      }
      return cb.call(this, e);
    };
    obj[elt].push({
      cb: cb,
      proxy: proxy
    });
    return elt.addEventListener(evt, proxy, false);
  };

  Interactions.prototype.off = function(elt, action, cb) {
    var data, datas, evt, obj, result, _i, _len;
    evt = this._getEvent(action);
    if (evt === "") {
      return;
    }
    obj = this._getObj(action);
    if (!obj[elt]) {
      return;
    }
    datas = obj[elt];
    if (cb) {
      result = this._find(cb, datas);
      if (!result) {
        return;
      }
      elt.removeEventListener(evt, result.data.proxy, false);
      datas.splice(result.idx, 1);
    } else {
      for (_i = 0, _len = datas.length; _i < _len; _i++) {
        data = datas[_i];
        elt.removeEventListener(evt, data.proxy, false);
      }
      obj[elt] = [];
    }
  };

  Interactions.prototype.dispose = function(elt) {
    var interaction, _i, _len, _ref;
    _ref = this._interactions;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      interaction = _ref[_i];
      if (interaction[elt]) {
        interaction[elt] = null;
        delete interaction[elt];
      }
    }
  };

  Interactions.prototype._getEvent = function(action) {
    var evt;
    evt = "";
    if (this.isTouchDevice) {
      switch (action) {
        case "down":
          evt = "touchstart";
          break;
        case "move":
          evt = "touchmove";
          break;
        case "up":
          evt = "touchend";
          break;
        case "click":
          evt = "touchstart";
          break;
        case "mouseleave":
          evt = "mouseleave";
      }
    } else {
      switch (action) {
        case "down":
          evt = "mousedown";
          break;
        case "move":
          evt = "mousemove";
          break;
        case "up":
          evt = "mouseup";
          break;
        case "click":
          evt = "click";
          break;
        case "mouseleave":
          evt = "mouseleave";
      }
    }
    return evt;
  };

  Interactions.prototype._getObj = function(action) {
    var obj;
    return obj = this["_" + action + "s"];
  };

  Interactions.prototype._find = function(cb, datas) {
    var data, idx, _i, _len;
    for (idx = _i = 0, _len = datas.length; _i < _len; idx = ++_i) {
      data = datas[idx];
      if (data.cb === cb) {
        return {
          data: data,
          idx: idx
        };
      }
    }
    return null;
  };

  return Interactions;

})();

module.exports = new Interactions;



},{}],4:[function(require,module,exports){
var WebGLDetector;

WebGLDetector = (function() {
  function WebGLDetector() {
    this._canvasDetector = document.createElement("canvas");
    this._isAvailable = true;
  }

  WebGLDetector.prototype._check = function() {
    var e;
    try {
      return !!window.WebGLRenderingContext && (this._canvasDetector.getContext("webgl") || this._canvasDetector.getContext("experimental-webgl"));
    } catch (_error) {
      e = _error;
      return false;
    }
  };

  WebGLDetector.prototype.isAvailable = function() {
    return this._isAvailable;
  };

  return WebGLDetector;

})();

module.exports = new WebGLDetector;



},{}],5:[function(require,module,exports){
var Experiments, Infos, Menu, Share, XP, datas,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Menu = require("experiments/Menu");

XP = require("experiments/XP");

Infos = require("experiments/Infos");

Share = require("experiments/Share");

datas = require("data.json").experiments;

Experiments = (function() {
  function Experiments() {
    this._showPage = __bind(this._showPage, this);
    this._xp = null;
    this._infos = new Infos();
    this._menu = new Menu();
    this._share = new Share();
    this.currentXpId = -1;
    page("/experiments/", this._showPage);
    page("/experiments/:id", this._showPage);
    page("/2014/experiments/", this._showPage);
    page("/2014/experiments/:id", this._showPage);
    page("/2014_/experiments/", this._showPage);
    page("/2014_/experiments/:id", this._showPage);
    page();
  }

  Experiments.prototype._showPage = function(data) {
    var hash_value;
    console.log(data);
    if (!data.params.id || data.params.id < 1 || data.params.id > 24) {
      page("/experiments/1");
      return;
    }
    hash_value = data.canonicalPath.match("#(.*)");
    if (this.currentXpId === data.params.id) {
      if (hash_value) {
        this._xp.iframe.src = this._xp.baseSource + '#' + hash_value;
      }
      return;
    }
    this.currentXpId = data.params.id;
    return this._showXP(data.params.id, hash_value);
  };

  Experiments.prototype._showXP = function(idx) {
    var data;
    data = datas[idx - 1];
    this._share.update(data);
    this._infos.update(data);
    this._menu.update(idx);
    if (this._xp) {
      this._xp.hide();
      this._xp = new XP(data);
      return this._xp.show(true);
    } else {
      this._xp = new XP(data);
      return this._xp.show();
    }
  };

  Experiments.prototype._show404 = function() {};

  return Experiments;

})();

module.exports = Experiments;



},{"data.json":2,"experiments/Infos":6,"experiments/Menu":7,"experiments/Share":9,"experiments/XP":10}],6:[function(require,module,exports){
var Infos, interactions,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

interactions = require("common/interactions");

Infos = (function() {
  function Infos() {
    this._onClose = __bind(this._onClose, this);
    this._onOpen = __bind(this._onOpen, this);
    this._dom = document.querySelector(".infos");
    this._domLayer = document.querySelector(".infos-layer");
    this._domBtOpen = document.querySelector(".experiment-nav-entry--infos");
    this._domBtClose = this._dom.querySelector(".bt-close-holder");
    interactions.on(this._domBtOpen, "click", this._onOpen);
    interactions.on(this._domBtClose, "click", this._onClose);
    interactions.on(this._dom, "mouseleave", this._onClose);
    this._domIdx = document.querySelector(".infos-idx");
    this._domTitle = document.querySelector(".infos-title");
    this._domAuthor = document.querySelector(".infos-author");
    this._domSubtitle = document.querySelector(".infos-subtitle");
    this._domDesc = document.querySelector(".infos-desc");
    this._domParts = document.querySelector(".infos-parts");
    this._domExperiment = document.querySelector(".experiment-holder");
  }

  Infos.prototype._onOpen = function(e) {
    e.preventDefault();
    return this.show();
  };

  Infos.prototype._onClose = function(e) {
    e.preventDefault();
    return this.hide();
  };

  Infos.prototype.update = function(data) {
    var detail, dom, domDesc, domTitle, fragment, _i, _len, _ref;
    if (data.idx < 10) {
      this._domIdx.innerHTML = "0" + data.idx;
    } else {
      this._domIdx.innerHTML = data.idx;
    }
    this._domTitle.innerHTML = data.title;
    this._domAuthor.innerHTML = data.author;
    this._domAuthor.href = data.site;
    this._domSubtitle.innerHTML = data.subtitle;
    this._domDesc.innerHTML = data.desc;
    while (this._domParts.firstChild) {
      this._domParts.removeChild(this._domParts.firstChild);
    }
    fragment = document.createDocumentFragment();
    _ref = data.details;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      detail = _ref[_i];
      dom = document.createElement("li");
      domTitle = document.createElement("h3");
      domTitle.innerHTML = detail.title;
      dom.appendChild(domTitle);
      domDesc = document.createElement("span");
      domDesc.innerHTML = detail.desc;
      dom.appendChild(domDesc);
      fragment.appendChild(dom);
    }
    return this._domParts.appendChild(fragment);
  };

  Infos.prototype.show = function() {
    TweenLite.to(this._dom, .5, {
      css: {
        x: 360,
        force3D: true
      },
      ease: Cubic.easeInOut
    });
    TweenLite.to(this._domExperiment, .5, {
      css: {
        x: 230,
        force3D: true
      },
      ease: Cubic.easeInOut
    });
    return TweenLite.to(this._domLayer, .5, {
      css: {
        autoAlpha: .5,
        force3D: true
      },
      ease: Cubic.easeInOut
    });
  };

  Infos.prototype.hide = function() {
    TweenLite.to(this._dom, .5, {
      css: {
        x: 0,
        force3D: true
      },
      ease: Cubic.easeInOut
    });
    TweenLite.to(this._domExperiment, .5, {
      css: {
        x: 0,
        force3D: true
      },
      ease: Cubic.easeInOut
    });
    return TweenLite.to(this._domLayer, .5, {
      css: {
        autoAlpha: 0,
        force3D: true
      },
      ease: Cubic.easeInOut
    });
  };

  return Infos;

})();

module.exports = Infos;



},{"common/interactions":3}],7:[function(require,module,exports){
var Menu, Preview, interactions,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

interactions = require("common/interactions");

Preview = require("experiments/Preview");

Menu = (function() {
  function Menu() {
    this._onOut = __bind(this._onOut, this);
    this._onOver = __bind(this._onOver, this);
    this._onClick = __bind(this._onClick, this);
    var domItem, _i, _len, _ref;
    this._preview = new Preview;
    this._domCnt = document.querySelector(".menu");
    this._domItems = document.querySelectorAll(".menu-item");
    this._domItemActivated = document.querySelector(".menu-item-activated");
    _ref = this._domItems;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      domItem = _ref[_i];
      interactions.on(domItem, "click", this._onClick);
      domItem.addEventListener("mouseenter", this._onOver, false);
      domItem.addEventListener("mouseleave", this._onOut, false);
    }
  }

  Menu.prototype._onClick = function(e) {
    var idx;
    e.preventDefault();
    idx = this._indexOf(e.currentTarget);
    if (idx === -1) {
      page("/experiments/404");
      return;
    }
    page("/experiments/" + (idx + 1));
    return this._preview.hide();
  };

  Menu.prototype._onOver = function(e) {
    this._preview.update(this._indexOf(e.currentTarget));
    return this._preview.show();
  };

  Menu.prototype._onOut = function(e) {
    return this._preview.hide();
  };

  Menu.prototype.update = function(idx) {
    if (this._domSelected) {
      this._domSelected.classList.remove("activated");
    }
    this._domSelected = this._domItems[idx - 1].querySelector("a");
    this._domSelected.classList.add("activated");
    this._domCnt.removeChild(this._domItemActivated);
    return this._domCnt.insertBefore(this._domItemActivated, this._domItems[idx - 1]);
  };

  Menu.prototype._indexOf = function(target) {
    var domItem, i, _i, _len, _ref;
    _ref = this._domItems;
    for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
      domItem = _ref[i];
      if (domItem === target) {
        return i;
      }
    }
    return -1;
  };

  return Menu;

})();

module.exports = Menu;



},{"common/interactions":3,"experiments/Preview":8}],8:[function(require,module,exports){
var Preview, datas,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

datas = require("data.json").experiments;

Preview = (function() {
  function Preview() {
    this._onPreviewLoaded = __bind(this._onPreviewLoaded, this);
    this._dom = document.querySelector(".preview");
    this._domTitle = this._dom.querySelector(".preview-title");
    this._domAuthor = this._dom.querySelector(".preview-author");
    this._domImage = this._dom.querySelector(".preview-image");
  }

  Preview.prototype.update = function(idx) {
    var data;
    data = datas[idx];
    this._domTitle.innerHTML = data.isAvailable ? data.title : "NOT RELEASED YET";
    this._domAuthor.innerHTML = data.author;
    return this._url = "/img/experiments/" + (idx + 1) + "/preview.png";
  };

  Preview.prototype._onPreviewLoaded = function() {
    console.log("yo");
    return this._domImage.src = this._url;
  };

  Preview.prototype.show = function() {
    return TweenLite.to(this._dom, .5, {
      css: {
        autoAlpha: 1
      },
      ease: Cubic.easeInOut
    });
  };

  Preview.prototype.hide = function() {
    return TweenLite.to(this._dom, .5, {
      css: {
        autoAlpha: 0
      },
      ease: Cubic.easeInOut
    });
  };

  return Preview;

})();

module.exports = Preview;



},{"data.json":2}],9:[function(require,module,exports){
var Share, interactions,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

interactions = require("common/interactions");

Share = (function() {
  function Share() {
    this._onTwitter = __bind(this._onTwitter, this);
    this._onFB = __bind(this._onFB, this);
    var dom, _i, _j, _len, _len1, _ref, _ref1;
    this._domShareFb = document.querySelectorAll(".share--fb");
    this._domShareTwitter = document.querySelectorAll(".share--twitter");
    _ref = this._domShareFb;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      dom = _ref[_i];
      interactions.on(dom, "click", this._onFB);
    }
    _ref1 = this._domShareTwitter;
    for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
      dom = _ref1[_j];
      interactions.on(dom, "click", this._onTwitter);
    }
    return;
  }

  Share.prototype.update = function(_data) {
    this._data = _data;
  };

  Share.prototype._onFB = function(e) {
    e.preventDefault();
    if (!this._data) {
      this._data = {};
      this._data.idx = 1;
    }
    return FB.ui({
      method: 'feed',
      name: "Christmas Experiments - 2014",
      caption: this._data.title,
      desc: this._data.desc,
      link: "http://christmasexperiments.com/",
      picture: "http://christmasexperiments.com/experiments/xps/" + this._data.idx + "/share.jpg"
    }, function(response) {});
  };

  Share.prototype._onTwitter = function(e) {
    var url;
    e.preventDefault();
    if (!this._data) {
      this._data = {};
      this._data.idx = 1;
    }
    url = "https://twitter.com/share?";
    url += "text=" + encodeURIComponent(this._data.msgTwitter);
    url += "&url=" + encodeURIComponent("http://christmasexperiments.com/experiments/" + this._data.idx + "/");
    return this._openPopup(url);
  };

  Share.prototype._openPopup = function(url) {
    return window.open(url, "", "top=100, left=200, width=600, height = 500");
  };

  return Share;

})();

module.exports = Share;



},{"common/interactions":3}],10:[function(require,module,exports){
var XP, webGLDetector;

webGLDetector = require("common/webGLDetector");

XP = (function() {
  function XP(_data, _hashValue) {
    this._data = _data;
    this._hashValue = _hashValue;
    this._domCnt = document.querySelector(".experiment-holder");
    this._createXP();
    window.onresize = (function(_this) {
      return function() {
        var h, w;
        w = window.innerWidth;
        h = window.innerHeight;
        if (w > 640) {
          w -= 40;
        }
        if (isMobile.apple.device) {
          w -= 1;
          h -= 2;
        }
        _this.iframe.style.height = h + 'px';
        _this.iframe.style.width = w + 'px';
        _this.iframe.contentWindow.innerWidth = w;
        _this.iframe.contentWindow.innerHeight = h;
        _this.iframe.contentWindow.resizeTo(w, h);
      };
    })(this);
  }

  XP.prototype._createXP = function() {
    document.win;
    this._domXP = document.createElement("div");
    this._domXP.classList.add("experiment-entry");
    if (this._data.isAvailable) {
      return this._createIframe();
    } else {
      return this._createNotReleased();
    }
  };

  XP.prototype._createIframe = function() {
    this.iframe = document.createElement("iframe");
    if (isMobile.apple.device) {
      console.log(isMobile.apple.device.device);
      this.iframe.addEventListener('load', function(event) {
        this.iframe.contentWindow.innerWidth -= 1;
        return this.iframe.contentWindow.innerHeight -= 2;
      });
    }
    this.baseSource = "./xps/" + this._data.idx + "/";
    if (this._hashValue) {
      this.iframe.src = this.baseSource + "#" + this._hashValue;
    } else {
      this.iframe.src = this.baseSource;
    }
    return this._domXP.appendChild(this.iframe);
  };

  XP.prototype._createNoWebGL = function() {
    var dom;
    dom = document.querySelector(".error.no-webgl").cloneNode(true);
    dom.classList.add("visible");
    return this._domXP.appendChild(dom);
  };

  XP.prototype._createNotReleased = function() {
    var dom;
    dom = document.querySelector(".not-released").cloneNode(true);
    dom.classList.add("visible");
    dom.querySelector(".not-released-author").innerHTML = this._data.author;
    return this._domXP.appendChild(dom);
  };

  XP.prototype.show = function(animated) {
    if (animated == null) {
      animated = false;
    }
    if (!animated) {
      return this._domCnt.appendChild(this._domXP);
    } else {
      TweenLite.set(this._domXP, {
        css: {
          x: -document.body.offsetWidth,
          force3D: true
        }
      });
      TweenLite.to(this._domXP, .6, {
        css: {
          x: 0,
          force3D: true
        },
        ease: Cubic.easeInOut
      });
      return this._domCnt.appendChild(this._domXP);
    }
  };

  XP.prototype.hide = function() {
    return TweenLite.to(this._domXP, .6, {
      css: {
        x: document.body.offsetWidth,
        force3D: true
      },
      ease: Cubic.easeInOut,
      onComplete: (function(_this) {
        return function() {
          return _this._domCnt.removeChild(_this._domXP);
        };
      })(this)
    });
  };

  return XP;

})();

module.exports = XP;



},{"common/webGLDetector":4}]},{},[1])