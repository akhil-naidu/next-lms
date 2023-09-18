import { alpha } from '@mui/material/styles';
import { alertClasses } from '@mui/material/Alert';

// ----------------------------------------------------------------------

const COLORS = ['info', 'success', 'warning', 'error'];

// ----------------------------------------------------------------------

export function alert(theme) {
  const isLight = theme.palette.mode === 'light';

  const rootStyles = (ownerState) => {
    const standardVariant = ownerState.variant === 'standard';

    const filledVariant = ownerState.variant === 'filled';

    const outlinedVariant = ownerState.variant === 'outlined';

    const colorStyle = COLORS.map((color) => ({
      ...(ownerState.severity === color && {
        // STANDARD
        ...(standardVariant && {
          color: theme.palette[color][isLight ? 'darker' : 'lighter'],
          backgroundColor: theme.palette[color][isLight ? 'lighter' : 'darker'],
          [`& .${alertClasses.icon}`]: {
            color: theme.palette[color][isLight ? 'main' : 'light'],
          },
        }),
        // FILLED
        ...(filledVariant && {
          color: theme.palette[color].contrastText,
          backgroundColor: theme.palette[color].main,
        }),
        // OUTLINED
        ...(outlinedVariant && {
          backgroundColor: alpha(theme.palette[color].main, 0.08),
          color: theme.palette[color][isLight ? 'dark' : 'light'],
          border: `solid 1px ${alpha(theme.palette[color].main, 0.16)}`,
          [`& .${alertClasses.icon}`]: {
            color: theme.palette[color].main,
          },
        }),
      }),
    }));

    return [...colorStyle];
  };

  return {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => rootStyles(ownerState),
        icon: {
          opacity: 1,
        },
      },
    },
    MuiAlertTitle: {
      styleOverrides: {
        root: {
          marginBottom: theme.spacing(0.5),
          fontWeight: theme.typography.fontWeightSemiBold,
        },
      },
    },
  };
}
