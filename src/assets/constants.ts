export const ColorList: any[] = [
    {
        "color": "Bisque",
        "rgba": [255, 228, 196, 1]
    },
    {
        "color": "DarkTurquoise",
        "rgba": [0, 206, 209, 0.8]
    },
    {
        "color": "DarkSeaGreen",
        "rgba": [143, 188, 143, 0.8]
    },
    {
        "color": "MistyRose",
        "rgba": [255, 228, 225, 0.8]
    },
    {
        "color": "LightSalmon",
        "rgba": [255, 160, 122, 0.8]
    },
    {
        "color": "LightBlue",
        "rgba": [173, 216, 230, 0.8]
    },
    {
        "color": "LightSlateGrey",
        "rgba": [119, 136, 153, 0.8]
    },
    {
        "color": "PaleVioletRed",
        "rgba": [205, 104, 137, 0.8]
    },
    {
        "color": "Teal",
        "rgba": [0, 128, 128, 0.5]
    },
    {
        "color": "Coral",
        "rgba": [255, 127, 80, 0.8]
    },
];

export function getLinearBackground(color: number[]): any {
    const style = {
        'background': `linear-gradient(to bottom right,
                            rgba(${color[0]},${color[1]},${color[2]},${color[3]}),
                            rgba(255, 233, 23, 0.2))`
    };
    
    return style;
  }