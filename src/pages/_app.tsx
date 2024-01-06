import '@/assets/styles/global.scss';
import { theme } from '@/theme/palette';
import { ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';

//NEXT FONT OPTIMIZATION
import { iranSans } from '@/utils/fontsConfig';
import { useCallback, useEffect, useState } from 'react';
import MemberAndLoginCheckModal from '@/components/basicComponents/memberCheckModal';
import { usePathname } from 'next/navigation';
import { checkTokenValidation } from '@/utils/appServices';
import LoginModal from '@/components/loginModal';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style
        jsx
        global
      >{`
        html:root {
          --font-iranSans: ${iranSans.style.fontFamily};
        }
      `}</style>
      <ThemeProvider theme={theme}>
        <Component
          {...pageProps}
        />
      </ThemeProvider>
    </>
  );
}
