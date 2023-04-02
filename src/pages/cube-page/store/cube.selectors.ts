// import { ArrayUtils } from '@lentau/lu/common/core/shared';
// import { createFeatureSelector, createSelector } from '@ngrx/store';
// import { YandexMapSettings } from '@lentau/lu/common/address/shared';
// import {
//   CartAddressPopover,
//   CategoryInfo,
//   ISplitDeliveryMessages,
//   PageInfo,
//   SeoInterface,
//   SeoItem,
//   SiteSettings,
//   SiteSettingsList,
// } from '@lentau/lu/common/core/shared';
// import { SidebarTypesEnum, SiteSettingsEnum } from '@lentau/lu/common/app-wide/shared';
// import { State } from '@lentau/lu/common/core/shared';
// import { getSettingsWeb } from '@lentau/lu/common/core/shared';

// import { storeFeatureKey } from './app-wide.reducers';
// import { AppWideStateProps } from '../shared/interfaces';

// export interface AppWithAppWideState extends State {
//   [storeFeatureKey]: AppWideStateProps;
// }

// export const selectFeature = createFeatureSelector<AppWithAppWideState, AppWideStateProps>(storeFeatureKey);

// export const selectMobileMenuIsOpen = createSelector(
//   selectFeature,
//   (state: AppWideStateProps): AppWideStateProps['mobileMenuState']['isOpen'] => state.mobileMenuState.isOpen
// );

// export const selectMobileMenuPath = createSelector(
//   selectFeature,
//   (state: AppWideStateProps): AppWideStateProps['mobileMenuState']['path'] => state.mobileMenuState.path
// );

// export const selectMobileCatalogPath = createSelector(
//   selectFeature,
//   (state: AppWideStateProps): AppWideStateProps['mobileMenuState']['path'] => state.mobileCatalogState.path
// );

// export const selectSidebarSortBy = createSelector(
//   selectFeature,
//   (state: AppWideStateProps): AppWideStateProps['sidebar']['sortBy'] => state.sidebar.sortBy
// );

// export const selectIsCartSideBarType = createSelector(
//   selectFeature,
//   (state: AppWideStateProps): boolean => state.sidebar.type === SidebarTypesEnum.CART
// );

// const getSettingsByType = (settings: SiteSettings[], settingName): SiteSettings =>
//   ArrayUtils.isValidArrayData(settings) ? settings.find((setting) => setting.Name === settingName) : null;

// export const selectYandexSettings = createSelector(selectFeature, (state: AppWideStateProps): YandexMapSettings => {
//   if (!state.siteSettings.data) {
//     return null;
//   }

//   const yandexMapKeySettings = getSettingsByType(state.siteSettings.data, SiteSettingsEnum.YANDEX_MAP_KEY);
//   const yandexMapUrlSettings = getSettingsByType(state.siteSettings.data, SiteSettingsEnum.YANDEX_MAP_URL);

//   return {
//     apiKey: yandexMapKeySettings ? yandexMapKeySettings.Value : '',
//     url: yandexMapUrlSettings ? yandexMapUrlSettings.Value : '',
//   };
// });
// export const selectSiteSettingsList = createSelector(
//   selectFeature,
//   (state: AppWideStateProps): SiteSettings[] => state.siteSettings.data
// );
// export const selectSplitDeliveryMessagesSettings = createSelector(
//   selectFeature,
//   (state: AppWideStateProps): ISplitDeliveryMessages => state.siteSettings.splitDeliveryMessages
// );

// export const selectFullSiteSettings = createSelector(
//   selectFeature,
//   (state: AppWideStateProps): SiteSettingsList => ({
//     SiteSettingsList: state.siteSettings.data,
//     SplitDeliveryMessages: state.siteSettings.splitDeliveryMessages,
//   })
// );
// export const selectCartAddressPopover = createSelector(
//   selectSplitDeliveryMessagesSettings,
//   (splitDeliveryMessages: ISplitDeliveryMessages): CartAddressPopover => splitDeliveryMessages?.CartAddressPopover
// );

// export const selectSiteSettingsByType = createSelector(
//   selectFeature,
//   (state: AppWideStateProps, props: { settingName: SiteSettingsEnum }): SiteSettings =>
//     getSettingsByType(state.siteSettings.data, props.settingName)
// );

// export const selectSiteSettingsMethod = createSelector(
//   selectFeature,
//   (state: AppWideStateProps, props: { settingName: SiteSettingsEnum }): boolean =>
//     getSettingsWeb(state.siteSettings.data, props.settingName)
// );

// export const selectPageInfo = createSelector(
//   selectFeature,
//   (state: AppWideStateProps): PageInfo => state.pageInfo.data
// );
// export const selectPageInfoSEO = createSelector(
//   selectFeature,
//   (state: AppWideStateProps): SeoInterface => state.pageInfo.data.Info
// );

// export const selectPageSEO = createSelector(selectFeature, (state: AppWideStateProps): SeoItem => state.data.Seo);

// export const selectMainCategories = createSelector(
//   selectFeature,
//   (state: AppWideStateProps): CategoryInfo[] => state.data.MainpageLinks
// );
