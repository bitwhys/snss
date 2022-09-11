// This entire file should be copied and included in your own project, wrapping
// your React app in the ThemeProvider exported at the bottom of the file.
// ------------------------------------------------------------------------- */
import * as React from "react"
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles"

import { CssBaseline, GlobalStyles } from "@mui/material"
import { Shadows } from "@mui/material/styles/shadows"

// -------------------------------
// TypeScript Module Augmentation
// -------------------------------
declare module "@mui/material/styles" {
  interface TypographyVariants {
    xs: number | string
    sm: number | string
    md: number | string
    lg: number | string
    xl: number | string
    "2xl": number | string
    "3xl": number | string
    "4xl": number | string
    "5xl": number | string
    "6xl": number | string
    "7xl": number | string
  }
  interface TypographyVariantsOptions {
    xs?: number | string
    sm?: number | string
    md?: number | string
    lg?: number | string
    xl?: number | string
    "2xl"?: number | string
    "3xl"?: number | string
    "4xl"?: number | string
    "5xl"?: number | string
    "6xl"?: number | string
    "7xl"?: number | string
  }
}
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    // add simple numeric font sizes similar to how Styled System used them
    xs: true
    sm: true
    md: true
    lg: true
    xl: true
    "2xl": true
    "3xl": true
    "4xl": true
    "5xl": true
    "6xl": true
    "7xl": true
    // disable some unused variant types
    body1: false
    body2: false
    caption: false
    overline: false
    // reduce total definitions for headers so they aren't overused
    h5: false
    h6: false
  }
}

declare module "@mui/material/styles/createPalette" {
  interface ColorRange {
    50: string
    100: string
    200: string
    300: string
    400: string
    500: string
    600: string
    700: string
    800: string
    900: string
  }
  interface PaletteOptions {
    yellow: ColorRange
    green: ColorRange
    red: ColorRange
    fuchsia: ColorRange
    violet: ColorRange
    blue: ColorRange
    gray: ColorRange
  }
  interface PaletteColor extends ColorRange {
    // add an additional less opaque color for various cases like hovers
    subtle?: string
  }
  interface Palette {
    yellow: ColorRange
    green: ColorRange
    red: ColorRange
    fuchsia: ColorRange
    violet: ColorRange
    blue: ColorRange
    gray: ColorRange
  }
}

// -------------------------------
// Define some custom JSX elements
// -------------------------------
const radioCheckedIcon = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2ZM13.7071 8.70711C14.0976 8.31658 14.0976 7.68342 13.7071 7.29289C13.3166 6.90237 12.6834 6.90237 12.2929 7.29289L9 10.5858L7.70711 9.29289C7.31658 8.90237 6.68342 8.90237 6.29289 9.29289C5.90237 9.68342 5.90237 10.3166 6.29289 10.7071L8.29289 12.7071C8.68342 13.0976 9.31658 13.0976 9.70711 12.7071L13.7071 8.70711Z"
      fill="currentColor"
    />
  </svg>
)
const radioUncheckedIcon = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="2.5"
      y="2.5"
      width="15"
      height="15"
      rx="7.5"
      stroke="currentColor"
    />
  </svg>
)

const checkboxIcon = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="2.5"
      y="2.5"
      width="15"
      height="15"
      rx="2.5"
      stroke="currentColor"
      strokeWidth={1.25}
    />
  </svg>
)
const checkboxIndeterminateIcon = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 2C3.34315 2 2 3.34315 2 5V15C2 16.6569 3.34315 18 5 18H15C16.6569 18 18 16.6569 18 15V5C18 3.34315 16.6569 2 15 2H5ZM7 9C6.44772 9 6 9.44772 6 10C6 10.5523 6.44772 11 7 11H13C13.5523 11 14 10.5523 14 10C14 9.44772 13.5523 9 13 9H7Z"
      fill="currentColor"
    />
  </svg>
)
const checkboxCheckedIcon = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 2C3.34315 2 2 3.34315 2 5V15C2 16.6569 3.34315 18 5 18H15C16.6569 18 18 16.6569 18 15V5C18 3.34315 16.6569 2 15 2H5ZM13.7071 8.70711C14.0976 8.31658 14.0976 7.68342 13.7071 7.29289C13.3166 6.90237 12.6834 6.90237 12.2929 7.29289L9 10.5858L7.70711 9.29289C7.31658 8.90237 6.68342 8.90237 6.29289 9.29289C5.90237 9.68342 5.90237 10.3166 6.29289 10.7071L8.29289 12.7071C8.68342 13.0976 9.31658 13.0976 9.70711 12.7071L13.7071 8.70711Z"
      fill="currentColor"
    />
  </svg>
)

// -------------------------------
// Define shared tokens/constants
// -------------------------------
const primaryColorScale = {
  50: "hsl(214, 100%, 97%)",
  100: "hsl(214, 95%, 93%)",
  200: "hsl(213, 97%, 87%)",
  300: "hsl(213, 96%, 78%)",
  400: "hsl(213, 94%, 68%)",
  500: "hsl(217, 91%, 60%)",
  600: "hsl(221, 84%, 54%)",
  700: "hsl(224, 76%, 48%)",
  800: "hsl(226, 71%, 40%)",
  900: "hsl(226, 65%, 34%)",
  main: "hsl(221, 84%, 54%)",
  contrastText: "hsl(210, 20%, 98%)",
  subtle: "hsla(217, 83%, 70%, 0.1)",
}
const yellowColorScale = {
  50: "hsl(55, 92%, 95%)",
  100: "hsl(55, 97%, 88%)",
  200: "hsl(53, 98%, 77%)",
  300: "hsl(50, 98%, 64%)",
  400: "hsl(48, 96%, 53%)",
  500: "hsl(45, 93%, 47%)",
  600: "hsl(41, 96%, 40%)",
  700: "hsl(35, 92%, 33%)",
  800: "hsl(32, 81%, 29%)",
  900: "hsl(28, 73%, 26%)",
}
const greenColorScale = {
  50: "hsl(152, 81%, 96%)",
  100: "hsl(149, 80%, 90%)",
  200: "hsl(152, 76%, 80%)",
  300: "hsl(156, 72%, 67%)",
  400: "hsl(158, 64%, 52%)",
  500: "hsl(160, 84%, 39%)",
  600: "hsl(161, 94%, 30%)",
  700: "hsl(163, 94%, 24%)",
  800: "hsl(163, 88%, 20%)",
  900: "hsl(164, 86%, 16%)",
}
const redColorScale = {
  50: "hsl(0, 86%, 97%)",
  100: "hsl(0, 93%, 94%)",
  200: "hsl(0, 96%, 89%)",
  300: "hsl(0, 94%, 82%)",
  400: "hsl(0, 91%, 71%)",
  500: "hsl(0, 84%, 60%)",
  600: "hsl(0, 72%, 51%)",
  700: "hsl(0, 74%, 42%)",
  800: "hsl(0, 70%, 35%)",
  900: "hsl(0, 63%, 31%)",
  main: "hsl(0, 72%, 51%)",
}
const fuchsiaColorScale = {
  50: "hsl(289, 100%, 98%)",
  100: "hsl(287, 100%, 95%)",
  200: "hsl(288, 96%, 91%)",
  300: "hsl(291, 93%, 83%)",
  400: "hsl(292, 91%, 73%)",
  500: "hsl(292, 84%, 61%)",
  600: "hsl(293, 69%, 49%)",
  700: "hsl(295, 72%, 40%)",
  800: "hsl(295, 70%, 33%)",
  900: "hsl(297, 64%, 28%)",
}
const violetColorScale = {
  50: "hsl(250, 100%, 98%)",
  100: "hsl(251, 91%, 95%)",
  200: "hsl(251, 95%, 92%)",
  300: "hsl(253, 95%, 85%)",
  400: "hsl(255, 92%, 76%)",
  500: "hsl(258, 90%, 66%)",
  600: "hsl(262, 83%, 58%)",
  700: "hsl(263, 70%, 50%)",
  800: "hsl(263, 69%, 42%)",
  900: "hsl(264, 67%, 35%)",
}
const blueColorScale = {
  50: "hsl(204, 100%, 97%)",
  100: "hsl(204, 94%, 94%)",
  200: "hsl(201, 94%, 86%)",
  300: "hsl(199, 95%, 74%)",
  400: "hsl(198, 93%, 60%)",
  500: "hsl(199, 89%, 48%)",
  600: "hsl(200, 98%, 39%)",
  700: "hsl(201, 96%, 32%)",
  800: "hsl(201, 90%, 27%)",
  900: "hsl(202, 80%, 24%)",
}
const grayColorScale = {
  50: "hsl(210, 20%, 98%)",
  100: "hsl(218, 14%, 96%)",
  200: "hsl(218, 13%, 90%)",
  300: "hsl(217, 12%, 84%)",
  400: "hsl(218, 11%, 65%)",
  500: "hsl(220, 10%, 46%)",
  600: "hsl(216, 14%, 34%)",
  700: "hsl(217, 18%, 26%)",
  800: "hsl(215, 27%, 17%)",
  900: "hsl(218, 39%, 10%)",
  main: "hsl(216, 14%, 34%)",
  subtle: "hsla(220, 21%, 94%, 0.5)",
}
const typographySizesRem = {
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "1.875rem",
  "4xl": "2.25rem",
  "5xl": "3rem",
  "6xl": "3.75rem",
  "7xl": "4.5rem",
} as const
// create the typography scale in pixels based on a 16px base font size
const typographySizesPx = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  "2xl": 24,
  "3xl": 30,
  "4xl": 36,
  "5xl": 48,
  "6xl": 60,
  "7xl": 72,
} as const
type TypographySizes = keyof typeof typographySizesPx

// -------------------------------
// Step 1: Define theme tokens
// -------------------------------
let customTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1200,
      xl: 1920,
    },
  },
  palette: {
    background: {
      default: "hsla(210, 20%, 99%, 1)",
      paper: "#fff",
    },
    // built in MUI color scales
    primary: primaryColorScale,
    secondary: grayColorScale,
    success: greenColorScale,
    warning: yellowColorScale,
    error: redColorScale,
    // custom color scales
    yellow: yellowColorScale,
    green: greenColorScale,
    red: redColorScale,
    fuchsia: fuchsiaColorScale,
    violet: violetColorScale,
    blue: blueColorScale,
    gray: grayColorScale,
  },
  shape: {
    borderRadius: 6,
  },
  // overwrite the shadows since 25 is way too many options, use softer shadows so they don't get overdone
  shadows: [
    "none",
    "0 1px 2px 0 rgb(0 0 0 / 0.05)", // border-like
    "0 1px 3px rgb(44 42 38 / 7%), 0 4px 16px rgb(44 42 38 / 6%)", // xs
    "0 1px 4px rgb(44 42 38 / 7%), 0 4px 24px rgb(44 42 38 / 7%)", // sm
    "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)", // md
    "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)", // lg
    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)", // xl
    "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  ] as Shadows,
  transitions: {
    duration: {
      // for micro interactions
      short: 150,
      // basic (default) timing
      standard: 200,
      // for complex animations
      complex: 300,
    },
  },
  // allow styling individual fontSizes in a component with the fontSize prop: "xs", "sm", "md", etc.
  typography: {
    fontSize: 14,
    ...typographySizesRem,
    // use Inter, and then the default MacOS font stack
    fontFamily: [
      "Sora",
      '"Inter"',
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    h1: {
      fontSize: "2rem",
      fontWeight: 700,
      lineHeight: 78 / 70,
    },
    h2: {
      fontSize: "1.25rem",
      fontWeight: 600,
      lineHeight: 44 / 36,
    },
    h3: {
      fontSize: "1rem",
      fontWeight: 600,
      lineHeight: 44 / 36,
      letterSpacing: 0,
    },
    h4: {
      fontSize: "0.75rem",
      lineHeight: 42 / 28,
      letterSpacing: 0,
    },
  },
})

const borderRadiusInPx = Number(customTheme.shape.borderRadius)

// step 2 to use custom theme values:
customTheme = createTheme(customTheme, {
  components: {
    MuiAccordion: {
      defaultProps: {
        disableGutters: true,
      },
      styleOverrides: {
        root: {
          borderStyle: "none",
          background: customTheme.palette.background.default,
          "&:not(:last-child)": {
            borderBottom: 0,
          },
          "&:before": {
            opacity: "1 !important",
            background: customTheme.palette.gray["200"],
          },
          "&.Mui-expanded": {
            margin: 0,
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          padding: 0,
          fontWeight: 500,
          "&.Mui-expanded": {
            color: customTheme.palette.primary["700"],
          },
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          color: customTheme.palette.gray["600"],
          "p:not(:last-child)": {
            marginBottom: customTheme.spacing(1),
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          // flatten the app bar by default
          boxShadow: customTheme.shadows[0],
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        inputRoot: {
          // eyeballed to match other inputs
          paddingBottom: `6px !important `,
          paddingLeft: `12px !important `,
          paddingRight: `32px !important `,
          paddingTop: `6px !important `,
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        // remove the infamous Material Design button ripple
        disableRipple: true,
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: ({ ownerState }: { ownerState: any }) => ({
          ...((ownerState.variant === "contained" ||
            ownerState.variant === "outlined") && {
            boxShadow: customTheme.shadows[1],
          }),
          ...(ownerState.variant === "contained" &&
            ownerState.color === "primary" && {
              transition: customTheme.transitions.create(`all`),
              fontWeight: 600,
              "&:hover": {
                filter: "contrast(1.1)",
              },
            }),
          ...(ownerState.variant === "contained" &&
            ownerState.color === "secondary" && {
              backgroundColor: customTheme.palette.primary["100"],
              color: customTheme.palette.primary["500"],
              transition: customTheme.transitions.create(`all`),
              fontWeight: 600,
              "&:hover": {
                filter: "contrast(0.9)",
                backgroundColor: customTheme.palette.primary["100"],
              },
            }),
          ...(ownerState.variant === "outlined" &&
            ownerState.color === "secondary" && {
              background: customTheme.palette.background.paper,
              borderColor: customTheme.palette.gray["300"],
              "&:hover": {
                background: customTheme.palette.background.paper,
                borderColor: customTheme.palette.gray["400"],
              },
            }),
          cursor: "pointer",
          borderRadius: borderRadiusInPx * 1.25,
          textTransform: "inherit",
          letterSpacing: 0.2,
        }),
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          background: customTheme.palette.gray["100"],
          justifyContent: "flex-end",
          color: customTheme.palette.gray["500"],
          transition: customTheme.transitions.create("background"),
          fontWeight: "500",
          "&:hover": {
            background: customTheme.palette.gray["50"],
          },
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: customTheme.spacing(2),
          "&:last-child": {
            paddingBottom: customTheme.spacing(2),
          },
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        title: {
          fontSize: customTheme.typography.xl,
          fontWeight: "500",
          color: customTheme.palette.gray["700"],
        },
        action: {
          alignSelf: "center",
          marginRight: 0,
          fontSize: customTheme.typography.sm,
          color: customTheme.palette.gray["500"],
        },
      },
    },
    MuiCheckbox: {
      defaultProps: {
        icon: checkboxIcon,
        indeterminateIcon: checkboxIndeterminateIcon,
        checkedIcon: checkboxCheckedIcon,
      },
      styleOverrides: {
        root: {
          borderRadius: borderRadiusInPx,
        },
      },
    },
    MuiChip: {
      variants: [
        {
          props: { variant: "inverted" },
          style: {
            color: customTheme.palette.primary["500"],
            fontWeight: "500",
            transition: customTheme.transitions.create(`all`),
            background: customTheme.palette.primary["50"],
            "&:hover": {
              color: customTheme.palette.primary["600"],
              background: customTheme.palette.primary["100"],
            },
          },
        },
      ],
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: false,
      },
      styleOverrides: {
        root: {
          maxWidth: 1380,
        },
      },
    },
    MuiDataGrid: {
      defaultProps: {
        componentsProps: {
          filterPanel: {
            filterFormProps: {
              valueInputProps: {
                InputComponentProps: {
                  label: "",
                  variant: "filled",
                  hiddenLabel: true,
                },
              },
            },
            sx: {
              "& .MuiDataGrid-filterForm": {
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                gap: 1,
              },
              "& .MuiDataGrid-filterFormValueInput": { minWidth: 200 },
            },
          },
        },
      },
      styleOverrides: {
        root: {
          background: customTheme.palette.background.paper,
          "& .MuiDataGrid-cell--textRight": {
            fontVariantNumeric: "tabular-nums",
            letterSpacing: "-0.05em",
          },
        },
        row: {
          backgroundColor: customTheme.palette.background.paper,
        },
        columnsContainer: {
          backgroundColor: customTheme.palette.gray["100"],
          borderTopLeftRadius: customTheme.shape.borderRadius,
          borderTopRightRadius: customTheme.shape.borderRadius,
        },
        columnHeaders: {
          backgroundColor: customTheme.palette.gray["100"],
          // important is necessary here since these values get inlined and there is no other way to beat out their specificity
          minHeight: "48px !important",
          maxHeight: "48px !important",
        },
        virtualScroller: {
          marginTop: "48px !important",
        },
        footerContainer: {
          marginTop: "-8px !important",
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: borderRadiusInPx * 2,
          padding: customTheme.spacing(3),
        },
      },
    },
    MuiIconButton: {
      defaultProps: {
        size: "small",
      },
      styleOverrides: {
        root: {
          borderRadius: borderRadiusInPx * 1.5,
        },
      },
    },
    MuiInputBase: {
      defaultProps: {
        size: "small",
      },
      styleOverrides: {
        root: {
          backgroundColor: customTheme.palette.background.paper,
          boxShadow: `${customTheme.shadows[1]}`,
          borderRadius: borderRadiusInPx,
          borderColor: customTheme.palette.gray["300"],
          borderWidth: 1,
          borderStyle: "solid",
        },
      },
    },
    MuiFormControl: {
      defaultProps: {
        variant: "filled",
      },
      styleOverrides: {
        root: {
          borderColor: customTheme.palette.gray["300"],
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: customTheme.typography.sm,
          fontWeight: "600",
          color: customTheme.palette.gray["600"],
          "&.Mui-focused": {
            color: "inherit !important",
          },
        },
      },
    },
    MuiFilledInput: {
      defaultProps: {
        hiddenLabel: true,
        disableUnderline: true,
      },
      styleOverrides: {
        root: {
          backgroundColor: customTheme.palette.background.paper,
          borderRadius: borderRadiusInPx,
          "&.Mui-focused": {
            backgroundColor: customTheme.palette.background.paper,
            borderColor: customTheme.palette.primary["400"],
          },
          "&:hover:not(.Mui-disabled)": {
            backgroundColor: customTheme.palette.background.paper,
          },
          "&.Mui-disabled": {
            backgroundColor: customTheme.palette.gray["100"],
          },
        },
      },
    },
    MuiGridFilterForm: {
      styleOverrides: {
        closeIcon: {
          minWidth: 30,
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          ".MuiListItemText-primary": {
            fontWeight: "500",
            color: customTheme.palette.gray["700"],
          },
        },
      },
    },
    MuiMenu: {
      defaultProps: {
        elevation: 2,
      },
      styleOverrides: {
        list: {
          paddingTop: 0,
          paddingBottom: 0,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          paddingTop: customTheme.spacing(0.75),
          paddingBottom: customTheme.spacing(0.75),
          "&:hover": {
            backgroundColor: customTheme.palette.secondary["subtle"],
          },
          "&:focus": {
            backgroundColor: customTheme.palette.secondary["subtle"],
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: customTheme.palette.gray["300"],
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          borderColor: customTheme.palette.gray["200"],
          borderWidth: 1,
          borderStyle: "solid",
        },
      },
    },
    MuiRadio: {
      defaultProps: {
        icon: radioUncheckedIcon,
        checkedIcon: radioCheckedIcon,
      },
    },
    MuiNativeSelect: {
      defaultProps: {
        variant: "filled",
      },
      styleOverrides: {
        root: {
          borderColor: customTheme.palette.gray["300"],
          borderRadius: borderRadiusInPx,
        },
        select: {
          minWidth: 100,
          borderRadius: borderRadiusInPx,
          "&:focus": {
            borderRadius: borderRadiusInPx,
            backgroundColor: customTheme.palette.background.paper,
          },
        },
      },
    },
    MuiSelect: {
      defaultProps: {
        variant: "filled",
      },
      styleOverrides: {
        root: {
          borderColor: customTheme.palette.gray["300"],
          borderRadius: borderRadiusInPx,
        },
        select: {
          minWidth: 100,
          borderRadius: borderRadiusInPx,
          "&:focus": {
            backgroundColor: customTheme.palette.background.paper,
          },
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 42,
          height: 26,
          padding: 0,
          "& .MuiSwitch-switchBase": {
            padding: 0,
            margin: 2,
            transitionDuration: "200ms",
            "&.Mui-checked": {
              transform: "translateX(16px)",
              color: customTheme.palette.background.paper,
              "& + .MuiSwitch-track": {
                backgroundColor: customTheme.palette.green["600"],
                opacity: 1,
                border: 0,
              },
              "&.Mui-disabled + .MuiSwitch-track": {
                opacity: 0.5,
              },
            },
            "&.Mui-focusVisible .MuiSwitch-thumb": {
              color: customTheme.palette.green["500"],
              border: `6px solid ${customTheme.palette.background.paper}`,
            },
            "&.Mui-disabled .MuiSwitch-thumb": {
              color: customTheme.palette.grey[100],
            },
            "&.Mui-disabled + .MuiSwitch-track": {
              opacity: 0.7,
            },
          },
          "& .MuiSwitch-thumb": {
            boxSizing: "border-box",
            width: 22,
            height: 22,
          },
          "& .MuiSwitch-track": {
            borderRadius: 26 / 2,
            backgroundColor: customTheme.palette.background.default,
            opacity: 1,
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "none",
          paddingLeft: 0,
          paddingRight: 0,
          minWidth: 60,
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        flexContainer: {
          gap: customTheme.spacing(4),
        },
      },
    },
    MuiTooltip: {
      defaultProps: {
        arrow: true,
      },
      styleOverrides: {
        tooltip: {
          background: customTheme.palette.gray["800"],
        },
        arrow: {
          color: customTheme.palette.gray["800"],
        },
      },
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          background: customTheme.palette.background.paper,
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          gap: 6,
          textTransform: "inherit",
          "&.Mui-selected": {
            color: customTheme.palette.primary["500"],
            fontWeight: 700,
          },
          "&.Mui-disabled": {
            color: customTheme.palette.gray["300"],
          },
        },
        sizeSmall: {
          fontSize: customTheme.typography.sm,
          fontWeight: 600,
          paddingTop: customTheme.spacing(0.5),
          paddingBottom: customTheme.spacing(0.55),
          paddingLeft: customTheme.spacing(2),
          paddingRight: customTheme.spacing(2),
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: ({
                 ownerState,
               }: {
          ownerState: {
            sx: { fontSize: TypographySizes }
          }
        }) => {
          let tracking: number | string = "inherit"
          const sizeToken: TypographySizes | undefined =
            ownerState?.sx?.fontSize
          if (sizeToken in typographySizesPx) {
            const pixelSize = typographySizesPx[ownerState.sx.fontSize]
            if (typeof pixelSize === "number") {
              // automatically apply suggest dynamic tracking based on recommendations for Inter:
              // https://rsms.me/inter/dynmetrics/
              const a = -0.0223
              const b = 0.185
              const c = -0.1745
              tracking = `${a + b * Math.E ** (c * pixelSize)}em`
            }
          }
          return {
            color: customTheme.palette.gray["800"],
            lineHeight: tracking,
          }
        },
      },
    },
  },
})

export { customTheme }

// -------------------------------
// Lastly, create a Theme Provider
// -------------------------------
export default function ThemeProvider({
                                        children,
                                      }: {
  children: React.ReactNode
}) {
  const theme = customTheme

  return (
    <MuiThemeProvider theme={theme}>
      {/* Set global MUI styles */}
      <GlobalStyles
        styles={{
          "*, *::before, *::after": {
            boxSizing: "border-box",
          },
          html: {
            minHeight: "100vh",
          },
          body: {
            minHeight: "100vh",
          },
          ".Mui-focusVisible": {
            boxShadow: `0 0 0 3px ${theme.palette.secondary["subtle"]} !important`,
          },
          ".MuiTablePagination-select": {
            paddingBottom: `1px !important`,
          },
        }}
      />
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}
