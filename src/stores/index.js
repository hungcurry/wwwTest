// AddCount
import { CountStore } from './useCountStore.js';
// Fetch axios
import { FetchStore } from './useFetchStore.js';
// windows position
import { PositionStore } from './usePositionStore.js';
// swiper
import { SwiperStore } from './useSwiperStore.js';
// Product
import { ProductStore } from './useProductStore.js';
import { DetailStore } from './useProductDetailStore.js';
// Cart
import { CartStore } from './useCartStore.js';
// modal
import { ModalStore } from './useModalStore.js';
// user
import { UserStore } from './useUserStore.js';
import { SignStore } from './useSignStore.js';

export const useCountStore = CountStore;
export const useFetchStore = FetchStore;
export const usePositionStore = PositionStore;
export const useSwiperStore = SwiperStore;
export const useProductStore = ProductStore;
export const useDetailStore = DetailStore;
export const useCartStore = CartStore;
export const useModalStore = ModalStore;
export const useUserStore = UserStore;
export const useSignStore = SignStore;
