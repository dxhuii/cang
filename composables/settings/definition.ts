import { DEFAULT_FONT_SIZE } from '~/constants'

export type FontSize = string

// Temporary type for backward compatibility
export type OldFontSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type ColorMode = 'light' | 'dark' | 'system'

export interface PreferencesSettings {
  hideAltIndicatorOnPosts: boolean
  hideBoostCount: boolean
  hideReplyCount: boolean
  hideFavoriteCount: boolean
  hideFollowerCount: boolean
  hideTranslation: boolean
  hideUsernameEmojis: boolean
  hideAccountHoverCard: boolean
  hideNews: boolean
  grayscaleMode: boolean
  enableAutoplay: boolean
  enableDataSaving: boolean
  enablePinchToZoom: boolean
  useStarFavoriteIcon: boolean
  experimentalVirtualScroller: boolean
  experimentalGitHubCards: boolean
  experimentalUserPicker: boolean
}

export interface UserSettings {
  preferences: Partial<PreferencesSettings>
  colorMode?: ColorMode
  fontSize: FontSize
  themeColors?: ThemeColors
}

export interface ThemeColors {
  '--theme-color-name': string

  '--c-primary': string
  '--c-primary-active': string
  '--c-primary-light': string
  '--c-primary-fade': string
  '--c-dark-primary': string
  '--c-dark-primary-active': string
  '--c-dark-primary-light': string
  '--c-dark-primary-fade': string

  '--rgb-primary': string
  '--rgb-dark-primary': string
}

export const DEFAULT__PREFERENCES_SETTINGS: PreferencesSettings = {
  hideAltIndicatorOnPosts: false,
  hideBoostCount: false,
  hideReplyCount: false,
  hideFavoriteCount: false,
  hideFollowerCount: false,
  hideTranslation: false,
  hideUsernameEmojis: false,
  hideAccountHoverCard: false,
  hideNews: false,
  grayscaleMode: false,
  enableAutoplay: true,
  enableDataSaving: false,
  enablePinchToZoom: false,
  useStarFavoriteIcon: false,
  experimentalVirtualScroller: true,
  experimentalGitHubCards: true,
  experimentalUserPicker: true
}

export function getDefaultUserSettings(): UserSettings {
  return {
    fontSize: DEFAULT_FONT_SIZE,
    preferences: DEFAULT__PREFERENCES_SETTINGS
  }
}
