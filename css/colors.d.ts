import type { MainAndSupportColors as BaseCustomColors } from '@digdir/designsystemet-react/colors';

declare module '@digdir/designsystemet-react/colors' {
  export interface MainAndSupportColors extends BaseCustomColors {
    brand: never;
    support-purple: never;
    support-green: never;
    support-blue: never;
  }
}
