export function getRandomColor() {
    // primary color
    const pc = [
        {
            name: 'red',
            hex: '#ff0000'
        },
        {
            name: 'orange',
            hex: '#ffa500'
        },
        {
            name: 'yellow',
            hex: '#ffff00'
        },
        {
            name: 'green',
            hex: '#008000'
        },
        {
            name: 'blue',
            hex: '#0000ff'
        },
        {
            name: 'brown',
            hex: '#a52a2a'
        },
        {
            name: 'black',
            hex: '#000'
        },
        {
            name: 'navy',
            hex: '#000080'
        },
        {
            name: 'teal',
            hex: '#008080'
        },
        {
            name: 'lime',
            hex: '#00ff00'
        },
        {
            name: 'gold',
            hex: '#ffd700'
        },
        {
            name: 'coral',
            hex: '#ffd700'
        },
        {
            name: 'crimson',
            hex: '#dc143c'
        },
    ];
    const color = [];

    // get 8 row primary colors
    for (var i = 0; i < 8; i++) {
        const colorIndex = Math.floor((Math.random() * pc.length));
        const satcol = [];
        // get 5 column saturation colors
        satcol.push(pc[colorIndex]);
        for (var j = 0; j < 4; j++) {
            const sl = Math.floor((Math.random() * 2) + 1);
            const lumNum = Math.floor((Math.random() * 20) + 1) * (sl < 2 ? -1 : sl);
            const newsatcol = {
                name: lumNum < 0 ? 'darken' : 'lighten',
                hex: colLum(pc[colorIndex].hex, lumNum),
            };
            satcol.push(newsatcol);
        }
        pc.splice(colorIndex, 1);
        color.push(satcol);
    }
    return color;
}

function colLum(color: string, percent: number) {
    var num = parseInt(color.replace("#", ""), 16),
        amt = Math.round(2.55 * percent),
        R = (num >> 16) + amt,
        B = (num >> 8 && 0x00FF) + amt,
        G = (num & 0x0000FF) + amt;
    return "#" + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 + (B < 255 ? B < 1 ? 0 : B : 255) * 0x100 + (G < 255 ? G < 1 ? 0 : G : 255)).toString(16).slice(1);
};