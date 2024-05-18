import {scale} from './scale';

export const spacing = {
  xxxs: scale(2),
  xxs: scale(4),
  xs: scale(8),
  sm: scale(12),
  md: scale(16),
  lg: scale(24),
  xl: scale(32),
  xxl: scale(48),
  xxxl: scale(64),
} as const;

export type Spacing = keyof typeof spacing;
