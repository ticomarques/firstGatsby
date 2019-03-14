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
    gutterHorizontal: '6rem'
}

const GlobalStyle = createGlobalStyle`

// MEDIA QUERY MANAGER
/*
0 - 600px:      Phone
600 - 900px:    Tablet portrait
900 - 1200px:   Tablet landscape
[1200 - 1800] is where our normal styles apply
1800px + :      Big desktop

$breakpoint arguement choices:
- phone
- tab-port
- tab-land
- big-desktop

ORDER: Base + typography > general layout + grid > page layout > components

1em = 16px
*/

@mixin respond($breakpoint) {
    @if $breakpoint == phone {
        @media only screen and (max-width: 37.5em) { @content };    //600px
    }
    @if $breakpoint == tab-port {
        @media only screen and (max-width: 56.25em) { @content };     //900px
    }
    @if $breakpoint == tab-land {
        @media only screen and (max-width: 75em) { @content };    //1200px
    }
    @if $breakpoint == big-desktop {
        @media only screen and (min-width: 112.5em) { @content };    //1800
    }
}

@mixin clearfix {
    &::after {
        content: "";
        display: table;
        clear: both;
    }
}

@mixin absCenter {
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
    // This defines what 1rem is
    font-size: 62.5%; //1 rem = 10px; 10px/16px = 62.5%

    @include respond(tab-land) { // width < 1200?
        font-size: 56.25%; //1 rem = 9px, 9/16 = 50%
    }

    @include respond(tab-port) { // width < 900?
        font-size: 50%; //1 rem = 8px, 8/16 = 50%
    }
    
    @include respond(big-desktop) {
        font-size: 75%; //1rem = 12, 12/16
    }
}
body {
    box-sizing: border-box;

    @include respond(tab-port) {
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
}




.row {
    max-width: ${cssVars.gridWidth};
    //max-width: 1140px;
    margin: 0 auto;

    &:not(:last-child){
        margin-bottom: ${cssVars.gutterVertical};

        @include respond(tab-port) {
            margin-bottom: ${cssVars.gutterVerticalSmall};
        }
    }

    @include respond(tab-port) {
        max-width: 50rem;
        padding: 0 3rem;
    }

    @include clearfix;

    [class^="col-"] {
        float: left;

        &:not(:last-child) {
            margin-right: ${cssVars.gutterHorizontal};

            @include respond(tab-port) {
                margin-right: 0;
                margin-bottom: ${cssVars.gutterVerticalSmall};
            }
        }

        @include respond(tab-port) {
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