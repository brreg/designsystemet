/* build: v1.7.3 */
import type {} from '@digdir/designsystemet/types';

// Augment types based on theme
declare module '@digdir/designsystemet/types' {
  export interface ColorDefinitions {
    main1: never;
    main2: never;
    main3: never;
    maintest: never;
    support1: never;
    support2: never;
    supporttest: never;
    neutral: never;
  }
  export interface SeverityColorDefinitions {
    info: never;
    success: never;
    warning: never;
    danger: never;
  }
}
