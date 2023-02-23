import product1 from '@/assets/images/Product/product-1.jpg';
import product2 from '@/assets/images/Product/product-2.jpg';
import product3 from '@/assets/images/Product/product-3.jpg';
import product4 from '@/assets/images/Product/product-4.jpg';
import product5 from '@/assets/images/Product/product-5.jpg';
import product6 from '@/assets/images/Product/product-6.jpg';
import product7 from '@/assets/images/Product/product-7.jpg';
import product8 from '@/assets/images/Product/product-8.jpg';
import product9 from '@/assets/images/Product/product-9.jpg';
import product10 from '@/assets/images/Product/product-10.jpg';
import product11 from '@/assets/images/Product/product-11.jpg';
import product12 from '@/assets/images/Product/product-12.jpg';
import product13 from '@/assets/images/Product/product-13.jpg';
import product14 from '@/assets/images/Product/product-14.jpg';
import product15 from '@/assets/images/Product/product-15.jpg';

export const ProductStore = defineStore('product', () => {
  const listObj = reactive({
    '/': [
      {
        id: 222,
        name: '2023 鏡幻像',
        src: `${product1}`,
        price: '899',
        text: '一個關於創新設計的展覽，它展示了各種以鏡像為主題的作品。展覽包括了多種不同類型的作品，讓參觀者能夠通過不同的方式了解和體驗鏡像的主題。',
        firstDate: ['03', 'JUN'],
        lastDate: ['15', 'OCT'],
      },
      {
        id: 555,
        name: '探索古文明世界',
        src: `${product2}`,
        price: '799',
        text: '關於古代文明的展覽，它展示了世界各地不同時期的古代文明的遺產和文物。展覽包括了許多來自世界各地的文物，如陶器、石器、金屬器、鑲嵌品等。',
        firstDate: ['07', 'FEB'],
        lastDate: ['1', 'NOV'],
      },
      {
        id: 443,
        name: 'COLOR RUN路跑',
        src: `${product3}`,
        price: '1999',
        text: 'Color Run是一項體驗式的路跑活動，它的特點是在比賽過程中會有彩色粉末撒在選手身上，為比賽增添了許多趣味性和美感。通常，Color Run比賽的路程約5公里，參賽者可以在完成比賽後參加彩色派對。',
        firstDate: ['10', 'AUG'],
        lastDate: ['12', 'AUG'],
      },
    ],
    Music: [
      {
        id: 77,
        name: '2023紫色派對',
        src: `${product4}`,
        price: '899',
        text: '以紫色為主題的音樂演出活動。通常是由一位或多位知名歌手或樂隊舉行。演唱會的主題是以紫色為中心，在燈光、服裝、道具等方面都會現出紫色的元素。',
        firstDate: ['03', 'APR'],
        lastDate: ['06', 'APR'],
      },
      {
        id: 85,
        name: '古典提琴音樂會',
        src: `${product5}`,
        price: '2999',
        text: '古典提琴是一種弦樂器，由四根弦和一個拾音器組成。它是由意大利工匠於16世紀開始製造，並在17世紀普及於歐洲各地。古典提琴是現代小提琴的原型，並且在古典音樂中起到重要的作用。',
        firstDate: ['07', 'SEP'],
        lastDate: ['10', 'SEP'],
      },
      {
        id: 93,
        name: '文文大師鋼琴獨秀',
        src: `${product6}`,
        price: '3999',
        text: '"文文大師鋼琴獨秀" 是一個專門以文文大師為主角的鋼琴獨奏會。文文大師是一位著名的鋼琴家，以其高超的演奏技巧和獨特的表現風格而聞名。',
        firstDate: ['10', 'NOV'],
        lastDate: ['15', 'NOV'],
      },
    ],
    Design: [
      {
        id: 286,
        name: '2023 台味設計展',
        src: `${product7}`,
        price: '699',
        text: '一年一度的台味設計展由經濟部工業局主辦、台灣創意設計中心執行，每年，針對在地生活、文化及產業發展特色，運用設計思考詮釋新時代的意涵，並以展覽呈現在地設計。',
        firstDate: ['01', 'JUN'],
        lastDate: ['31', 'OCT'],
      },
      {
        id: 419,
        name: '光影設計展',
        src: `${product8}`,
        price: '780',
        text: '這是一個專屬於設計系畢業生的展覽，沒有華麗的名號、沒有浮誇的獎賞。讓我們用作品與理念，去碰撞真實世界裡的各種問題，創造更多美好的人事物。讓這個地球、這個世界變成每一個人心目中的理想鄉。',
        firstDate: ['03', 'FEB'],
        lastDate: ['11', 'NOV'],
      },
      {
        id: 300,
        name: '高雄設計節',
        src: `${product9}`,
        price: '2999',
        text: '設計大高雄究竟是怎麼一回事？在這「設計」詞彙有點氾濫的年代，或許我們也搞不清楚究竟誰被誰設計了，設計生活？還是被生活設計？而當高雄這座城市建設硬體已相當程度完備時，文化軟實力又該如何輸出？',
        firstDate: ['12', 'AUG'],
        lastDate: ['12', 'DEC'],
      },
    ],
    Food: [
      {
        id: 666,
        name: '楓燒肉餐劵',
        src: `${product10}`,
        price: '799',
        text: '楓燒肉餐廳是一家以楓燒肉 牛排為主題的餐廳。楓燒肉是一道以韓國式烤肉為基礎，添加了多種韓國香料和調味料的烤肉。',
        firstDate: ['03', 'JUN'],
        lastDate: ['31', 'OCT'],
      },
      {
        id: 155,
        name: '肥胖子漢堡餐劵',
        src: `${product11}`,
        price: '380',
        text: '這是一個一家以提供大口味漢堡著稱的餐廳。餐廳的漢堡主要以牛肉、羊肉、雞肉和素食主題為主，並搭配各種不同的配菜和調味料，提供給客人多樣化的選擇。',
        firstDate: ['01', 'FEB'],
        lastDate: ['15', 'NOV'],
      },
      {
        id: 333,
        name: '輕蔬果主義餐劵',
        src: `${product12}`,
        price: '999',
        text: '輕蔬果主義餐廳究竟是怎麼一回事？是一家以提供健康、環保、素食主義餐點為主題的餐廳。餐廳的菜單主要由新鮮蔬果、全穀類、豆類、豆製品等組成，提供給客人健康、環保、素食的選擇。',
        firstDate: ['12', 'AUG'],
        lastDate: ['23', 'DEC'],
      },
    ],
    Movie: [
      {
        id: 789,
        name: '變形金剛第三集',
        src: `${product13}`,
        price: '499',
        text: '變形金剛第三集是一部科幻動作電影。故事主要講述了變形金剛和他們的對手，邪惡的Decepticons之間的激烈戰鬥。',
        firstDate: ['01', 'JUN'],
        lastDate: ['17', 'OCT'],
      },
      {
        id: 238,
        name: '鋼鐵人',
        src: `${product14}`,
        price: '499',
        text: '鋼鐵人是美國漫威漫畫公司出版的超級英雄漫畫，主角是企業家及科學家托尼·史塔克，他在一次的實驗失敗中嚴重受傷，為了活下去他發明了一套鋼鐵戰甲來保護自己，並成為超級英雄鋼鐵人。',
        firstDate: ['01', 'FEB'],
        lastDate: ['25', 'NOV'],
      },
      {
        id: 245,
        name: '蝙蝠俠崛起',
        src: `${product15}`,
        price: '499',
        text: '故事講述了蝙蝠俠/布魯斯·韋恩在哥譚市面臨經濟和社會危機的同時，面對內心的遺憾和恐懼，以及新敵人猛禽/哈維爾·貝爾與猛禽組織的威脅。',
        firstDate: ['01', 'AUG'],
        lastDate: ['23', 'DEC'],
      },
    ],
  });
  return {
    listObj,
  };
});
