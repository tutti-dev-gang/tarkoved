import {
    Caliber9x18PM,
    Caliber762x25TT,
    Caliber9x19PARA,
    Caliber9x21,
    Caliber1143x23ACP,
    Caliber9x33R,
    Caliber57x28,
    Caliber46x30,
    Caliber545x39,
    Caliber556x45NATO,
    Caliber762x35,
    Caliber762x39,
    Caliber366TKM,
    Caliber9x39,
    Caliber68x51,
    Caliber762x51,
    Caliber762x54R,
    Caliber127x55,
    Caliber86x70,
    Caliber12g,
    Caliber20g,
    Caliber23x75,
    Caliber40x46,
} from "../Components/Ammos/Paths";

const caliberMap = [
    { name: "9x18 mm", component: <Caliber9x18PM />, id: "Caliber9x18PM" },
    {
        name: "7.62x25 mm",
        component: <Caliber762x25TT />,
        id: "Caliber762x25TT",
    },
    { name: "9x19 mm", component: <Caliber9x19PARA />, id: "Caliber9x19PARA" },
    { name: "9x21 mm", component: <Caliber9x21 />, id: "Caliber9x21" },
    {
        name: ".45 ACP",
        component: <Caliber1143x23ACP />,
        id: "Caliber1143x23ACP",
    },
    { name: ".357 Magnum", component: <Caliber9x33R />, id: "Caliber9x33R" },
    { name: "5.7x28 mm", component: <Caliber57x28 />, id: "Caliber57x28" },
    { name: "4.6x30 mm", component: <Caliber46x30 />, id: "Caliber46x30" },
    { name: "5.45x39 mm", component: <Caliber545x39 />, id: "Caliber545x39" },
    {
        name: "5.56x45 mm",
        component: <Caliber556x45NATO />,
        id: "Caliber556x45NATO",
    },
    {
        name: ".300 Blackout",
        component: <Caliber762x35 />,
        id: "Caliber762x35",
    },
    { name: "7.62x39 mm", component: <Caliber762x39 />, id: "Caliber762x39" },
    { name: ".366", component: <Caliber366TKM />, id: "Caliber366TKM" },
    { name: "9x39 mm", component: <Caliber9x39 />, id: "Caliber9x39" },
    { name: "6.8x51 mm", component: <Caliber68x51 />, id: "Caliber68x51" },
    { name: "12.7x55 mm", component: <Caliber127x55 />, id: "Caliber127x55" },
    { name: "7.62x51 mm", component: <Caliber762x51 />, id: "Caliber762x51" },
    { name: "7.62x54R", component: <Caliber762x54R />, id: "Caliber762x54R" },
    {
        name: ".338 Lapua Magnum",
        component: <Caliber86x70 />,
        id: "Caliber86x70",
    },
    { name: "12 Gauge", component: <Caliber12g />, id: "Caliber12g" },
    { name: "20 Gauge", component: <Caliber20g />, id: "Caliber20g" },
    { name: "23x75 mm", component: <Caliber23x75 />, id: "Caliber23x75" },
    { name: "40x46 mm", component: <Caliber40x46 />, id: "Caliber40x46" },
];

export const caliberArrayWithSplit = () => {
    return caliberMap;
};
