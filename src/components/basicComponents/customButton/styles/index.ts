import { useTheme } from '@mui/material';

const calcBtnHeight: (isVertical: boolean, size: string) => string = (
  isVertical,
  size
) => {
  if (isVertical) {
    if (size === 'small') {
      return '3.25rem';
    } else {
      //if (size === 'medium')
      return '4.875rem';
    }
  } else {
    if (size === 'small') {
      return '2rem';
    } else {
      //if (size === 'medium')
      return '2.75rem';
    }
  }
};

export default function useCustomButtonStyles(
  isVertical: boolean,
  color: 'primary' | 'secondary' | 'subtle',
  size: 'medium' | 'small',
  specialStyle: { [key: string]: string } | { [key: string]: {} } | undefined,
  text?: string
) {
  const theme = useTheme();

  const button = {
    display: 'flex',
    flexDirection: isVertical ? 'column' : 'row',
    borderRadius: '6px',
    color:color,
    fontSize: isVertical && size === 'small' ? '0.625rem' : '0.8125rem',
    lineHeight: isVertical && size === 'small' ? '1.25rem' : '1.75rem',
    fontFamily: 'var(--font-iranSans)',
    fontWeight: '700',
    height: calcBtnHeight(isVertical, size),
    px: size === 'small' ? '0.375rem' : '1rem',
    py: '0.625rem',
    gridAutoColumns: '1fr',
    gap: isVertical ? 0.25 : size === 'small' ? 0.5 : 1,
    '&.Mui-disabled': {
      backgroundColor: 'rgba(19, 97, 166, 0.5)',
      color: theme.palette.grey[500],
      '& svg': {
        '& path': {
          fill: theme.palette.common.black,
        },
      },
    },
    ...specialStyle,
  };

  const leftIconStyle = {
    width: size === 'medium' ? '1.375rem' : '1rem',
    height: size === 'medium' ? '1.375rem' : '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& svg': {
      width: size === 'medium' ? '0.9375rem' : '0.625rem',
      height: size === 'medium' ? '0.9375rem' : '0.625rem',
      '& path': {
        fill:
          color === 'subtle'
            ? isVertical || !text
              ? theme.palette.colorTokens.fgfg_2_rest
              : theme.palette.colorTokens.fgfg_brand_rest
            : theme.palette.colorTokens.fgfg_1_rest,
      },
    },
  };

  return { button, leftIconStyle };
}
