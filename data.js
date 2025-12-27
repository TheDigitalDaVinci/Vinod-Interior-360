var APP_DATA = {
  "scenes": [
    {
      "id": "0-foyer",
      "name": "Foyer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.2500620634115407,
          "pitch": 0.06254294288761386,
          "rotation": 0,
          "target": "1-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-living",
      "name": "Living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9799918131288248,
          "pitch": 0.06521834148049699,
          "rotation": 0,
          "target": "0-foyer"
        },
        {
          "yaw": 0.6204118311068036,
          "pitch": 0.07945410433946165,
          "rotation": 0,
          "target": "3-pooja"
        },
        {
          "yaw": -0.14703199865689243,
          "pitch": 0.026038117467750865,
          "rotation": 0,
          "target": "5-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-passage",
      "name": "Passage",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6399450751407407,
          "pitch": 0.1703544787454785,
          "rotation": 0,
          "target": "0-foyer"
        },
        {
          "yaw": 1.9802451221633675,
          "pitch": 0.11913167580993189,
          "rotation": 0,
          "target": "4-stair"
        },
        {
          "yaw": 2.398216030264437,
          "pitch": -0.01758479214261044,
          "rotation": 1.5707963267948966,
          "target": "5-dining"
        },
        {
          "yaw": -1.4380368702936401,
          "pitch": 0.11291563640473612,
          "rotation": 0,
          "target": "3-pooja"
        },
        {
          "yaw": 1.479162353598574,
          "pitch": 0.15795482359911794,
          "rotation": 10.995574287564278,
          "target": "9-gf-master-bedroom"
        },
        {
          "yaw": 2.133704580861634,
          "pitch": 0.012645924753634574,
          "rotation": 7.853981633974483,
          "target": "11-gf-bedroom"
        },
        {
          "yaw": 1.7678610262993217,
          "pitch": 0.047835580369252284,
          "rotation": 0,
          "target": "14-upper-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-pooja",
      "name": "Pooja",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0089920411306164,
          "pitch": 0.07039570582283616,
          "rotation": 0,
          "target": "2-passage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-stair",
      "name": "Stair",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.3463575703308024,
          "pitch": 0.012166486239038932,
          "rotation": 0,
          "target": "11-gf-bedroom"
        },
        {
          "yaw": 2.805700131974997,
          "pitch": 0.037600346499246484,
          "rotation": 0,
          "target": "5-dining"
        },
        {
          "yaw": -3.0625214255761826,
          "pitch": 0.18634140176865444,
          "rotation": 0,
          "target": "2-passage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-dining",
      "name": "Dining",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7374563406125425,
          "pitch": 0.08569886282054995,
          "rotation": 0,
          "target": "9-gf-master-bedroom"
        },
        {
          "yaw": -0.3026962363405197,
          "pitch": -0.01941744808032908,
          "rotation": 0,
          "target": "7-kitchen"
        },
        {
          "yaw": -0.5153669631238458,
          "pitch": 0.17333222056055675,
          "rotation": 4.71238898038469,
          "target": "6-wash"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-wash",
      "name": "Wash",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.1723702631399746,
          "pitch": 0.1225242675888154,
          "rotation": 0,
          "target": "7-kitchen"
        },
        {
          "yaw": 2.968876085395398,
          "pitch": 0.15681804698240143,
          "rotation": 0,
          "target": "5-dining"
        },
        {
          "yaw": 2.339525035431162,
          "pitch": 0.12773951847913878,
          "rotation": 0,
          "target": "4-stair"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.6276632985825294,
          "pitch": 0.10110896404671976,
          "rotation": 0,
          "target": "6-wash"
        },
        {
          "yaw": -3.008711924593598,
          "pitch": -0.004504944655085552,
          "rotation": 0,
          "target": "5-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-work-area",
      "name": "Work Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.8043629783406274,
          "pitch": 0.3953484195107233,
          "rotation": 0,
          "target": "7-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-gf-master-bedroom",
      "name": "GF Master Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.02185494393422971,
        "pitch": -0.016716637551571267,
        "fov": 1.3911794189911846
      },
      "linkHotspots": [
        {
          "yaw": -0.02185494393422971,
          "pitch": -0.016716637551571267,
          "rotation": 0,
          "target": "10-gf-master-bedroom"
        },
        {
          "yaw": 2.788939606131043,
          "pitch": 0.028629823609790606,
          "rotation": 0,
          "target": "2-passage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-gf-master-bedroom",
      "name": "GF Master Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3911794189911846
      },
      "linkHotspots": [
        {
          "yaw": -0.008927864298531318,
          "pitch": 0.28445463538270666,
          "rotation": 0,
          "target": "9-gf-master-bedroom"
        },
        {
          "yaw": 0.06463853342145498,
          "pitch": 0.00222735906599425,
          "rotation": 0,
          "target": "2-passage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-gf-bedroom",
      "name": "GF Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 2.4484341625860173,
        "pitch": 0.02922005408695405,
        "fov": 1.3911794189911846
      },
      "linkHotspots": [
        {
          "yaw": 2.275249683099215,
          "pitch": 0.17506224309020268,
          "rotation": 0,
          "target": "12-gf-bedroom"
        },
        {
          "yaw": -0.2295079379841951,
          "pitch": 0.08197536460221322,
          "rotation": 0,
          "target": "2-passage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-gf-bedroom",
      "name": "GF Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 2.5874697188600937,
        "pitch": 0.009589810579623048,
        "fov": 1.3911794189911846
      },
      "linkHotspots": [
        {
          "yaw": 2.911391782969579,
          "pitch": 0.10956652276628809,
          "rotation": 0,
          "target": "11-gf-bedroom"
        },
        {
          "yaw": -2.996244561945895,
          "pitch": -0.0655864298365092,
          "rotation": 0.7853981633974483,
          "target": "2-passage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-ff-bedroom",
      "name": "FF Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.14361160795670713,
          "pitch": 0.018303753925980715,
          "rotation": 0,
          "target": "14-upper-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-upper-living",
      "name": "Upper Living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.192769334885476,
          "pitch": 0.1987603325091314,
          "rotation": 0,
          "target": "15-multipurpose-room"
        },
        {
          "yaw": 2.2309210339329226,
          "pitch": 0.19152668011373564,
          "rotation": 0,
          "target": "13-ff-bedroom"
        },
        {
          "yaw": 2.9163131815493326,
          "pitch": 0.2087697458115496,
          "rotation": 0,
          "target": "2-passage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-multipurpose-room",
      "name": "Multipurpose Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8145510700275622,
          "pitch": 0.06522049263896079,
          "rotation": 0,
          "target": "14-upper-living"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Vinod Residence",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
