/* This file is deprecated and will be removed in a future release. Use types.d.ts instead */
/* build: v1.6.1 */
import type {} from '@digdir/designsystemet/types';

// Augment types based on theme
declare module '@digdir/designsystemet/types' {
  export interface ColorDefinitions {
    main1: never;
    main2: never;
    support1: never;
    support2: never;
    support3: never;
    support4: never;
    neutral: never;
  }
  export interface SeverityColorDefinitions {
    info: never;
    success: never;
    warning: never;
    danger: never;
  }
}
