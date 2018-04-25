const DEFAULT_RED_PLAYERS_LOCATION = [
    {x: 1334835.2740264672, y: -4650313.671862999, z: 4142196.788770844},
    {x: 1334834.4816037307, y: -4650316.138359212, z: 4142194.291900026},
    {x: 1334834.085234359, y: -4650318.491170774, z: 4142191.7950271457},
    {x: 1334830.0629525336, y: -4650318.666144483, z: 4142192.8874177057},
    {x: 1334831.0534023098, y: -4650316.142808431, z: 4142195.384289451},
    {x: 1334831.1033030932, y: -4650313.329685247, z: 4142198.5053795143},
    {x: 1334826.3260237859, y: -4650313.861310141, z: 4142199.441715043},
    {x: 1334825.7316281735, y: -4650316.27096483, z: 4142196.944843863},
    {x: 1334824.9887911638, y: -4650318.163466611, z: 4142195.0721902447}
];
const DEFAULT_BULE_PLAYERS_LOCATION = [
    {x: 1334707.402766984, y: -4650470.696881106, z: 4142062.6058186884},
    {x: 1334704.8240537788, y: -4650473.99787801, z: 4142059.749838493},
    {x: 1334703.456823169, y: -4650477.926682375, z: 4142055.8059373545},
    {x: 1334707.9410915608, y: -4650478.361410317, z: 4142053.8858105997},
    {x: 1334710.0145478025, y: -4650474.7093603015, z: 4142057.295021929},
    {x: 1334713.0482733473, y: -4650471.02766568, z: 4142060.42992677},
    {x: 1334716.3077490276, y: -4650473.57078664, z: 4142056.55048194},
    {x: 1334714.1222865707, y: -4650477.957733333, z: 4142052.357545288},
    {x: 1334715.2685987365, y: -4650480.26404036, z: 4142049.4185688836}
];
const TERRAIN_PLAYERS_LOCATION = [
    {x: -1371108.6511167218, y: -5508684.080096612, z: 2901825.449865087},
    {x: -1371208.6511167218, y: -5508750.080096612, z: 2901890.449865087}
];
const TERRAIN_BLUE_PLAYERS_LOCATION = [
    {
        x: -1369565.3036881653,
        y: -5507136.9754613,
        z: 2901658.283858001
    },
    {
        x: -1369570.1353829224,
        y: -5507171.181247014,
        z: 2901591.5321211037
    },
    {
        x: -1369588.9463938125,
        y: -5507241.810500512,
        z: 2901449.552537427
    },
    {
        x: -1369614.8954136989,
        y: -5507346.06289308,
        z: 2901240.819390444
    },
    {
        x: -1369674.103004125,
        y: -5507416.186801937,
        z: 2901080.826808953
    },
    {
        x: -1369839.980493063,
        y: -5507372.1136607705,
        z: 2901086.1394548593
    },
    {
        x: -1369805.192325213,
        y: -5507296.479048961,
        z: 2901245.072535468
    },
    {
        x: -1369763.6963060952,
        y: -5507218.574615471,
        z: 2901411.419694552
    },
    {
        x: -1369742.9106629314,
        y: -5507140.008732602,
        z: 2901569.2904620506
    },
    {
        x: -1369730.2618054324,
        y: -5507089.201271886,
        z: 2901671.005713632
    }
];
const TERRAIN_RED_PLAYERS_LOCATION = [
    {
        x: -1370928.0516166824,
        y: -5506864.201740475,
        z: 2901533.286632484
    },
    {
        x: -1370820.8788756763,
        y: -5506887.508420062,
        z: 2901539.645003599
    },
    {
        x: -1370817.9932461733,
        y: -5506944.987896854,
        z: 2901432.6355435695
    },
    {
        x: -1370926.8934575806,
        y: -5506908.8877765965,
        z: 2901449.5860757157
    },
    {
        x: -1370960.0859294806,
        y: -5506997.84534568,
        z: 2901266.290496972
    },
    {
        x: -1370774.8390610975,
        y: -5507047.891151168,
        z: 2901258.8766463194
    },
    {
        x: -1370795.5031922425,
        y: -5507106.245974979,
        z: 2901139.1504113227
    },
    {
        x: -1370907.7794763648,
        y: -5507070.431507142,
        z: 2901153.982241741
    },
    {
        x: -1370942.1748353215,
        y: -5507130.4234470595,
        z: 2901024.7177875903
    },
    {
        x: -1370751.9004108135,
        y: -5507226.670294487,
        z: 2900932.538811889
    }
];

const TERRAIN_BLUE_AUSTRALIA_PLAYERS_LOCATION = [
    {
        x: -3784533.0763200424,
        y: 4352337.309966199,
        z: -2713938.3600269267
    },
    {
        x: -3784471.9466647357,
        y: 4352237.853708652,
        z: -2714181.4501332296
    },
    {
        x: -3784302.949598055,
        y: 4352087.722051506,
        z: -2714654.5873938655
    },
    {
        x: -3785207.807638046,
        y: 4351137.047382527,
        z: -2714915.209483764
    },
    {
        x: -3785222.7668975918,
        y: 4351571.11989613,
        z: -2714203.3429902145
    },
    {
        x: -3784834.164335143,
        y: 4351871.013334743,
        z: -2714264.0264569866
    },
    {
        x: -3784895.4386495897,
        y: 4352065.732681642,
        z: -2713869.009606738
    },
    {
        x: -3784714.156674273,
        y: 4352501.3689567875,
        z: -2713426.1384636867
    },
    {
        x: -3784296.394875098,
        y: 4352709.3831492225,
        z: -2713673.4511159565
    },
    {
        x: -3784041.3392553343,
        y: 4352489.682669184,
        z: -2714376.679286466
    }
];
const TERRAIN_RED_AUSTRALIA_PLAYERS_LOCATION = [
    {
        x: -3788533.125894025,
        y: 4349646.161288939,
        z: -2712680.0644996963
    },
    {
        x: -3788553.785768263,
        y: 4349238.398879718,
        z: -2713300.752083654
    },
    {
        x: -3788534.075790721,
        y: 4348879.332606961,
        z: -2713899.7049529594
    },
    {
        x: -3789112.8279461926,
        y: 4348454.217498182,
        z: -2713773.756987286
    },
    {
        x: -3789616.494509854,
        y: 4348228.05478698,
        z: -2713435.1113165873
    },
    {
        x: -3789948.7044260832,
        y: 4348265.755650509,
        z: -2712914.167943472
    },
    {
        x: -3789389.9975822223,
        y: 4348779.828466183,
        z: -2712870.9106981168
    },
    {
        x: -3789089.7984087686,
        y: 4349210.347207009,
        z: -2712601.85462741
    },
    {
        x: -3789172.5549258227,
        y: 4349312.684907127,
        z: -2712324.0296694343
    },
    {
        x: -3789617.676432229,
        y: 4349033.931950977,
        z: -2712150.2909701727
    }
];
const TERRAIN_BLUE_NEWZEALAND_PLAYERS_LOCATION = [
    {
        x: -4362699.096650911,
        y: 978287.8871871365,
        z: -4533423.796477115
    },
    {
        x: -4362412.383002722,
        y: 978157.5475435611,
        z: -4533725.783018605
    },
    {
        x: -4362456.392253295,
        y: 978192.4650192378,
        z: -4533676.236525954
    },
    {
        x: -4362501.346167632,
        y: 978198.1130136377,
        z: -4533632.059023046
    },
    {
        x: -4362497.773836667,
        y: 978310.7928869146,
        z: -4533611.322466191
    },
    {
        x: -4362439.845246144,
        y: 978320.8216878343,
        z: -4533664.5411553215
    },
    {
        x: -4362378.957884669,
        y: 978392.4571513039,
        z: -4533707.380825424
    },
    {
        x: -4362429.761283799,
        y: 978422.2539783791,
        z: -4533652.436585047
    },
    {
        x: -4362522.6738466825,
        y: 978338.4174616557,
        z: -4533581.60119695
    },
    {
        x: -4362479.461749994,
        y: 978258.7093754351,
        z: -4533639.988902315
    },
];
const TERRAIN_RED_NEWZEALAND_PLAYERS_LOCATION = [
    {
        x: -4360408.699942398, y: 1014144.4723072614, z: -4527782.3914699545
    },
    {
        x: -4363085.850292428,
        y: 978057.9061197415,
        z: -4533103.362115431
    },
    {
        x: -4363149.475562996,
        y: 978011.4746500204,
        z: -4533052.483094645
    },
    {
        x: -4363155.66549028,
        y: 977897.963851344,
        z: -4533070.8897470245
    },
    {
        x: -4363085.5977595765,
        y: 977771.408946267,
        z: -4533164.994676424
    },
    {
        x: -4362957.340943826,
        y: 977803.241932305,
        z: -4533280.789474482
    },
    {
        x: -4362867.984873063,
        y: 977912.834348684,
        z: -4533342.7297311155
    },
    {
        x: -4362931.907571737,
        y: 977977.9386571206,
        z: -4533267.671120174
    },
    {
        x: -4362979.468589133,
        y: 977977.2326391822,
        z: -4533222.354435274
    },
    {
        x: -4363003.463502875,
        y: 978097.4413273678,
        z: -4533173.653648724
    }
];
export const TerrainLocation = {
    URBAN_BLUE: DEFAULT_BULE_PLAYERS_LOCATION,
    URBAN_RED: DEFAULT_RED_PLAYERS_LOCATION,
    MOUNTAIN_BLUE: TERRAIN_BLUE_PLAYERS_LOCATION,
    MOUNTAIN_RED: TERRAIN_RED_PLAYERS_LOCATION,
    AUSTRALIA_BLUE: TERRAIN_BLUE_AUSTRALIA_PLAYERS_LOCATION,
    AUSTRALIA_RED: TERRAIN_RED_AUSTRALIA_PLAYERS_LOCATION,
    NEWZEALAND_BLUE: TERRAIN_BLUE_NEWZEALAND_PLAYERS_LOCATION,
    NEWZEALAND_RED: TERRAIN_RED_NEWZEALAND_PLAYERS_LOCATION
};

export enum TerrainType {
    URBAN = "URBAN",
    MOUNTAIN = "MOUNTAIN",
    AUSTRALIA = "AUSTRALIA",
    NEWZEALAND = "NEWZEALAND",
}
