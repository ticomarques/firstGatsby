import { createGlobalStyle } from 'styled-components';

export const cssVars = {
    colorPrimary: '#55c57a',
    colorPrimaryLight: '#7ed56f',
    colorPrimaryDark: '#28b485',

    colorSecondaryLight: '#ffb900',
    colorSecondaryDark: '#ff7730',

    colorTertiaryLight: '#2998ff',
    colorTertiaryDark: '#5643fa',

    colorGreyLight1: '#f7f7f7',
    colorGreyLight2: '#eee',
    
    colorGreyDark: '#777',
    colorGreyDark2: '#999',
    colorGreyDark3: '#333',

    colorWhite: '#fff',
    colorBlack: '#000',

    defaultFontSize: '1.4rem',
    SmallTitleFontSize: '1.8rem',
    MediumTitleFontSize: '2.2rem',
    BigTitleFontSize: '3rem',
    XBigTitleFontSize: '4rem',

    gridWidth: '114rem',
    gutterVertical: '8rem',
    gutterVerticalSmall: '6rem',
    gutterHorizontal: '6rem',

    phone: 'max-width: 37.5em',
    tabPort: 'max-width: 56.25em',
    tabLand: 'max-width: 75em',
    bigDesktop: 'min-width: 112.5em'
}

const GlobalStyle = createGlobalStyle`

// MEDIA QUERY MANAGER
/*
- phone (0 - 600px)      : Phone
- tabPort (600 - 900px)  : Tablet portrait
- tabLand (900 - 1200px) : Tablet landscape
- regular css            : [1200 - 1800] is where our normal styles apply
- bigDesktop (1800px +)  : Big desktop

Usage: @media only screen and () - paramentro pode ser um dos acima
*/

.clearfix {
    &::after {
        content: "";
        display: table;
        clear: both;
    }
}

.absCenter {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
*,
*::after,
*::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}
html {
    font-size: 62.5%; //1 rem = 10px; 10px/16px = 62.5%

    @media only screen and (${cssVars.tabLand}) { // < 1200
        font-size: 56.25%; //1 rem = 9px, 9/16 = 50%
    }
    @media only screen and (${cssVars.tabPort}) { // < 900
        font-size: 50%; //1 rem = 8px, 8/16 = 50%
    }
    @media only screen and (${cssVars.bigDesktop}) {
        font-size: 75%; //1rem = 12, 12/16
    }
}
body {
    box-sizing: border-box;

    @media only screen and (${cssVars.tabPort}) {
        padding: 0;
    }
}
::selection {
    background-color: ${cssVars.colorPrimary};
    color: ${cssVars.colorWhite};
}
h1 {
    font-size: ${cssVars.XBigTitleFontSize};
}
h2 {
    font-size: ${cssVars.BigTitleFontSize};
}
h3 {
    font-size: ${cssVars.MediumTitleFontSize};
}
p {
    font-size: ${cssVars.SmallTitleFontSize};
}
footer {
    clear: both;
    padding: 20px;
    position: absolute;
    bottom: 0;
    width:100%;
    background:rebeccapurple;
    color: white;
}
.row {
    max-width: ${cssVars.gridWidth};
    margin: 0 auto;

    &:not(:last-child){
        margin-bottom: ${cssVars.gutterVertical};

        @media only screen and (${cssVars.tabPort}) {
            margin-bottom: ${cssVars.gutterVerticalSmall};
        }
    }

    @media only screen and (${cssVars.tabPort}) {
        max-width: 50rem;
        padding: 0 3rem;
    }

    clear:both;

    .col {
        float: left;

        &:not(:last-child) {
            margin-right: ${cssVars.gutterHorizontal};

            @media only screen and (${cssVars.tabPort}) {
                margin-right: 0;
                margin-bottom: ${cssVars.gutterVerticalSmall};
            }
        }
        @media only screen and (${cssVars.tabPort}) {
            width: 100% !important;
        }
    }
    .col-1-of-2 {
        width: calc((100% - ${cssVars.gutterHorizontal}) / 2);
        
    }
    .col-1-of-3 {
        width: calc((100% - 2 * ${cssVars.gutterHorizontal}) / 3);
    }
    .col-2-of-3 {
        width: calc(2 * ((100% - 2 * ${cssVars.gutterHorizontal}) / 3) + ${cssVars.gutterHorizontal});
    }
    .col-1-of-4 {
        width: calc((100% - 3 * ${cssVars.gutterHorizontal}) / 4);
    }
    .col-2-of-4 {
        width: calc(2 * ((100% - 3 * ${cssVars.gutterHorizontal}) / 4) + ${cssVars.gutterHorizontal});
    }
    .col-3-of-4 {
        width: calc(3 * ((100% - 3 * ${cssVars.gutterHorizontal}) / 4) + 2 * ${cssVars.gutterHorizontal});
    }
}`;

export default GlobalStyle;