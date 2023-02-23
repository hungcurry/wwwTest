import love1 from '@/assets/images/Swiper/love-1.jpg';
import love2 from '@/assets/images/Swiper/love-2.jpg';
import love3 from '@/assets/images/Swiper/love-3.jpg';
import love4 from '@/assets/images/Swiper/love-4.jpg';
import love5 from '@/assets/images/Swiper/love-5.jpg';
import love6 from '@/assets/images/Swiper/love-6.jpg';
import love7 from '@/assets/images/Swiper/love-7.jpg';
import love8 from '@/assets/images/Swiper/love-8.jpg';
import love9 from '@/assets/images/Swiper/love-9.jpg';
export const SwiperStore = defineStore('swiper', () => {
  const listArr = reactive([
    {
      name: '2023 空間設計',
      src: `${love1}`,
      price: '699',
      date: '2023/02/25 ~ 2023/02/26',
    },
    {
      name: '蔬果主義餐劵',
      src: `${love2}`,
      price: '999',
      date: '2023/02/25 ~ 2023/02/26',
    },
    {
      name: '高雄設計節',
      src: `${love3}`,
      price: '2600',
      date: '2023/02/25 ~ 2023/02/26',
    },
    {
      name: '2023巡迴設計展',
      src: `${love4}`,
      price: '899',
      date: '2023/02/25 ~ 2023/02/26',
    },
    {
      name: '2023 鏡幻像世界',
      src: `${love5}`,
      price: '899',
      date: '2023/02/25 ~ 2023/02/26',
    },
    {
      name: '台南藝術畫廊',
      src: `${love6}`,
      price: '799',
      date: '2023/02/25 ~ 2023/02/26',
    },
    {
      name: '吉他心靈之旅',
      src: `${love7}`,
      price: '599',
      date: '2023/02/25 ~ 2023/02/26',
    },
    {
      name: '戰斧牛排下殺',
      src: `${love8}`,
      price: '1300',
      date: '2023/02/25 ~ 2023/02/26',
    },
    {
      name: '電影 鋼鐵人',
      src: `${love9}`,
      price: '540',
      date: '2023/02/25 ~ 2023/02/26',
    },
  ]);
  return {
    listArr,
  };
});
