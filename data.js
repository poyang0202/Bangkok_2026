// ============================================================
// 曼谷 2026 旅遊資料檔
// 想要修改行程、餐廳、清單,只要改這個檔案就好,不用動 index.html
// ============================================================

const TRIP = {
  title: "曼谷 2026",
  city: "Bangkok, Thailand",
  lat: 13.7563,
  lon: 100.5018,
  timezone: "Asia/Bangkok",
  startDate: "2026-09-24",
  endDate: "2026-09-29",
};

// ---------- 每日行程 ----------
// type: "flight" | "temple" | "food" | "shop" | "activity" | "free"
const ITINERARY = [
  {
    date: "2026-09-24",
    weekday: "週四",
    title: "抵達曼谷",
    hours: "19:55-22:40",
    subtitle: "去程航班日,晚班機抵達,入住休息",
    items: [
      {
        time: "19:55",
        title: "去程航班起飛",
        category: "交通",
        transport: "✈️ 飛行時間約 2 小時 45 分",
        note: "建議提前 3 小時抵達機場辦理登機、托運行李。",
      },
      {
        time: "22:40",
        title: "抵達曼谷 BKK 蘇凡納布機場",
        category: "交通",
        transport: "入境審查 + 提領行李約需 40-60 分鐘",
        note: "抵達前記得先上網填寫泰國 TDAC 電子入境卡(Thailand Digital Arrival Card),入境會快很多。出關後可搭機場快線(ARL)或 Grab 前往市區飯店。",
        map: "https://www.google.com/maps/search/?api=1&query=Suvarnabhumi+Airport",
      },
      {
        time: "23:30",
        title: "抵達飯店、辦理入住、休息",
        category: "住宿",
        note: "第一天不安排行程,好好休息,養精蓄銳準備明天古城區踩點。",
      },
    ],
  },
  {
    date: "2026-09-25",
    weekday: "週五",
    title: "古廟巡禮+泰服體驗",
    subtitle: "鄭王廟、ICONSIAM暹羅天地","湄南河郵輪體驗"
    items: [
      {
        time: "08:00",
        title: "鄭王廟+泰服體驗",
        category: "景點",
        hours: "08:00-18:00",
        transport: "🚕 飯店搭車約 20-30 分鐘",
        must: [
          { name: "由數百萬片陶瓷與貝殼拼貼出的82公尺主塔", note: "泰國艾菲爾鐵塔之稱" },
        ],
        note: "服裝規定嚴格:不可穿短褲、無袖上衣、拖鞋,建議長褲/長裙,現場有租借罩衫服務但會排隊。門票約 200 泰銖。",
        map: "https://maps.app.goo.gl/NYwhhCeSak3TrxwYA",
      },
      {
        time: "12:00",
        title: "午餐 - 鄭王廟周邊小吃",
        category: "餐飲",
        note: "Free Style。",
      },
      {
        time: "14:00",
        title: "ICONSIAM暹羅天地",
        category: "景點",
        hours: "10:00-22:00",
        transport: " ⛴️鄭王廟搭渡輪10分中",
        must: [{ name: "Dear Tummy (G樓)", note: "HandyHerb酵素軟糖/便便軟糖、Siam's Royal 芒果乾(蜂蜜芒果、巧克力、萊姆酒)、Mungkorn船麵泡麵、Lays麵康口味、LADRACH巧克力、ICONCRAFT選物店(Hamblepie刺繡包)" }],
        map: "https://maps.app.goo.gl/YDtX3fuJjWkgvbjt7",
      },
      {
        time: "19:00",
        title: "湄南河遊輪體驗",
        category: "景點",
        hours: "08:00-18:00",
        transport: "⛴️ 在ICONSIAM上船",
        note: "昭披耶公主號 Chao Phraya Princess、大珍珠號 Grand Pearl、璀璨明珠號 Wonderful Pearl、白蘭花號 White Orchid。待確認",
        map: "https://www.google.com/maps/search/?api=1&query=Wat+Arun+Bangkok",
      },
    ],
  },
  {
    date: "2026-09-26",
    weekday: "週六",
    title: "皇宮巡禮+老城區漫遊",
    subtitle: "曼谷大皇宮,玉佛寺,老城區"
    items: [
      {
        time: "09:00",
        title: "曼谷大皇宮+玉佛寺",
        category: "景點",
        hours: "08:30-15:30",
        transport: "🚕飯店搭車20-30分鐘 ",
        must: [
          { name: "玉佛寺主殿", note: "必須拖鞋，主殿禁止拍照" },
        ],
        note: "服裝規定嚴格:不可穿短褲、無袖上衣、拖鞋,建議長褲/長裙,現場有租借罩衫服務但會排隊。,
        map: "https://maps.app.goo.gl/4bjD8nkMxyhvyoLW7",
      },
      {
        time: "12:00",
        title: "EmSphere Mall,
        category: "餐飲",
        note: "待查。",
      },
      {
        time: "17:00",
        title: "老城區小店",
        category: "自由",
        note: "待查。",
      },
    ],
  },
  {
    date: "2026-09-27",
    weekday: "週日",
    title: "恰圖恰周末市集 + 唐人街 + 人妖秀or泰拳體驗",
    subtitle: "洽圖恰周末市集 + BigC超市採買",
    items: [
      {
        time: "10:00",
        title: "恰圖恰周末市集",
        category: "景點",
        hours: "05:00-00:00",
        transport: "🚕飯店搭車20-30分鐘 ",
        note: "這天行程較鬆,不用急著出門,補足前兩天的體力。",
      },
      {
        time: "12:00",
        title: "午餐 - 恰圖恰周末市集內用餐",
        category: "餐飲",
        note: "待查。",
      },
      {
        time: "14:00",
        title: "曼谷新景點 - Café Amazon Experience Flagship Store Ari",
        category: "待訂",
        must: [{name: "Café Amazon Experience Flagship Store Ari", note:"6層樓美術館般咖啡廳"}],
      },      
      {
        time: "17:00",
        title: "晚餐",
        category: "餐飲",
        must: [{name: "Burapa Eastern Thai Cuisine & Bar by Sri Trat", note:"Central World附近"}],
      },
      {
        time: "19:00",
        title: "朱拉隆功夜市",
        category: "餐飲",
        note: "待查。",
      },
    ],
  },
  {
    date: "2026-09-28",
    weekday: "週一",
    title: "待排",
    subtitle: "待排",
    items: [
      {
        time: "09:00",
        title: "四面佛 Erawan Shrine",
        category: "景點",
        hours: "06:00-23:00,全年無休",
        transport: "🚇 BTS 至 Chit Lom 站,出站即達",
        note: "香火鼎盛的著名景點,現場可購買花環、香、蠟燭參拜,尊重當地信仰、輕聲細語。",
        map: "https://www.google.com/maps/search/?api=1&query=Erawan+Shrine+Bangkok",
      },
      {
        time: "10:00",
        title: "暹羅廣場 Siam Square",
        category: "購物",
        transport: "🚶 步行或一站 BTS",
        note: "年輕潮流小店聚集地,巷弄內有不少特色咖啡廳。",
        map: "https://www.google.com/maps/search/?api=1&query=Siam+Square+Bangkok",
      },
      {
        time: "12:00",
        title: "午餐 - Siam Paragon 美食街",
        category: "餐飲",
        note: "地下樓層 Gourmet Market / Food Hall 選擇眾多。",
      },
      {
        time: "13:30",
        title: "Siam Paragon",
        category: "購物",
        hours: "10:00-22:00",
        note: "國際精品、水族館、超市一次滿足,冷氣強,適合午後高溫時段停留。",
        map: "https://www.google.com/maps/search/?api=1&query=Siam+Paragon",
      },
      {
        time: "16:00",
        title: "Central World",
        category: "購物",
        hours: "10:00-22:00",
        transport: "🚶 步行約 10-15 分鐘,或搭一站 BTS 至 Chit Lom",
        note: "曼谷最大的購物中心之一,品牌齊全。",
        map: "https://www.google.com/maps/search/?api=1&query=CentralWorld+Bangkok",
      },
      {
        time: "18:00",
        title: "Central World Skywalk",
        category: "景點",
        note: "戶外空橋可俯瞰整個 Ratchaprasong 商圈,傍晚華燈初上時段最美。",
        map: "https://www.google.com/maps/search/?api=1&query=CentralWorld+Skywalk",
      },
      {
        time: "19:30",
        title: "晚餐 - 最後一晚,自由選擇",
        category: "餐飲",
        note: "建議挑一間清單裡還沒吃過、最想吃的口袋名單餐廳。",
      },
    ],
  },
  {
    date: "2026-09-29",
    weekday: "週二",
    title: "賦歸",
    subtitle: "回程航班,把握最後半天",
    items: [
      {
        time: "09:00",
        title: "飯店周邊最後採買 / 悠閒早餐",
        category: "自由",
        note: "回程航班 13:10,建議最晚 10:30 前出發前往機場,保留安檢與報到時間。",
      },
      {
        time: "10:30",
        title: "前往蘇凡納布機場",
        category: "交通",
        transport: "🚕 依飯店位置車程約 30-60 分鐘,請預留塞車緩衝",
      },
      {
        time: "13:10",
        title: "回程航班起飛",
        category: "交通",
        note: "18:00 抵達,結束六天五夜的曼谷之旅。",
      },
    ],
  },
];

// ---------- 店家清單 ----------
// hours / closed 若標示「請查看地圖」表示營業時間會變動,建議以 Google Map 上的即時資訊為準
const RESTAURANTS = [
  { name: "lay lao - Silom", category: "泰式料理", hours: "10:30-23:00", closed: "全年無休", map: "https://maps.app.goo.gl/m5aFSFoZ16w3C7geA?g_st=ic" },
  { name: "Lon Lon Local Diner", category: "Fusion / 泰式", hours: "午餐 11:30-14:30、晚餐 17:30-22:00", closed: "週日公休", map: "https://maps.app.goo.gl/g916EgR4ryAiNmBN9?g_st=ic" },
  { name: "Thong Smith Siamese Boat Noodles", category: "船麵", hours: "請查看地圖確認", closed: "請查看地圖確認", map: "https://maps.app.goo.gl/tENySkXFYDQYKL6Q9?g_st=ic" },
  { name: "Inter Restaurant", category: "泰式料理", hours: "請查看地圖確認", closed: "請查看地圖確認", map: "https://maps.app.goo.gl/o3E6XbBmoGVpwzSk9?g_st=ic" },
  { name: "Mae Varee 芒果糯米飯", category: "芒果糯米飯", hours: "請查看地圖確認", closed: "請查看地圖確認", map: "https://maps.app.goo.gl/aXNyb34uxs8khwZ18?g_st=ic" },
  { name: "Piccolo Vicolo Café", category: "咖啡廳", hours: "請查看地圖確認", closed: "請查看地圖確認", map: "https://maps.app.goo.gl/XPtm6xch6KZnhArS8?g_st=ic" },
  { name: "Groob Glace.bkk", category: "冰淇淋", hours: "請查看地圖確認", closed: "請查看地圖確認", map: "https://maps.app.goo.gl/vrD1LUaQReHgERxD6" },
  { name: "TumLubThai Khanom Krok", category: "點心", hours: "請查看地圖確認", closed: "請查看地圖確認", map: "https://maps.app.goo.gl/vrD1LUaQReHgERxD6" },
  { name: "Mother Roaster Talat Noi", category: "咖啡廳", hours: "請查看地圖確認", closed: "請查看地圖確認", map: "https://maps.app.goo.gl/vrD1LUaQReHgERxD6" },
  { name: "Vanich House", category: "選物店", hours: "請查看地圖確認", closed: "請查看地圖確認", map: "https://maps.app.goo.gl/12FtBjrxGLpYUvA5A" },
  { name: "松記沙嗲", category: "點心", hours: "請查看地圖確認", closed: "請查看地圖確認", map: "https://maps.app.goo.gl/MctLfgdKy7tipVZq9" },
  { name: "Rongsi Pochana Langsuan", category: "泰式料理", hours: "請查看地圖確認", closed: "請查看地圖確認", map: "https://maps.app.goo.gl/en2d6Mb1cUsBWVHK7" },
  { name: "Haroy - Hat Yai Fried Chicken", category: "炸雞飯糰", hours: "請查看地圖確認", closed: "請查看地圖確認", map: "https://maps.app.goo.gl/5LSCrA3xYVx2VS2t5" },
  { name: "Pork Satay Nai Song", category: "沙嗲", hours: "請查看地圖確認", closed: "請查看地圖確認", map: "https://maps.app.goo.gl/twyMUMGeE3BUFv7g7" },
  { name: "Elvis Suki", category: "烤扇貝 / 炒粿條", hours: "請查看地圖確認", closed: "請查看地圖確認", map: "https://maps.app.goo.gl/Fn8jtkDvo878Ms2T7" },
  { name: "Jimjoom99 Banthat Thong", category: "瓦煲火鍋", hours: "請查看地圖確認", closed: "請查看地圖確認", map: "https://maps.app.goo.gl/FCeyp4uHWhvPU83DA" },
  { name: "Here Hai (Siam Paragon 分店)", category: "蟹肉炒飯", hours: "請查看地圖確認", closed: "請查看地圖確認", map: "https://maps.app.goo.gl/PAtU5PGEUo1AvPiv8" },
  { name: "Baan Kuay Tiew Ruathong", category: "船麵一條街", hours: "請查看地圖確認", closed: "請查看地圖確認", map: "https://maps.app.goo.gl/25XRaa1xxpNjxK969" },
  { name: "Café Lom", category: "咖啡廳", hours: "請查看地圖確認", closed: "請查看地圖確認", map: "https://maps.app.goo.gl/rMM71BYC3456F3fx9" },
  { name: "ākho at SongWat", category: "點心", hours: "請查看地圖確認", closed: "請查看地圖確認", map: "https://maps.app.goo.gl/zvtieqsZDX7eMDkT6" },
  { name: "Burapa Eastern Thai Cuisine & Bar by Sri Trat", category: "泰式料理", hours: "請查看地圖確認", closed: "請查看地圖確認", map: "https://maps.app.goo.gl/NfbtBc2exC7ZKmbe8" },
];

// ---------- 打包 / 待辦清單 ----------
const CHECKLIST = [
  {
    section: "出發前準備",
    items: [
      { text: "護照效期需 6 個月以上", date: "出發前確認" },
      { text: "填寫泰國 TDAC 電子入境卡(出發前 3 天內可填)", date: "9/21-9/24" },
      { text: "訂購網卡 / eSIM 或確認漫遊方案", date: "出發前" },
      { text: "購買旅遊平安險 / 不便險", date: "出發前" },
      { text: "兌換泰銖現金", date: "出發前" },
      { text: "信用卡開通海外交易通知", date: "出發前" },
      { text: "確認飯店與航班電子憑證都已下載離線版", date: "出發前" },
      { text: "行李秤重,預留伴手禮空間", date: "出發前一天" },
    ],
  },
  {
    section: "隨身必備",
    items: [
      { text: "護照 + 護照影本(建議另存雲端一份)", area: "隨身" },
      { text: "萬用轉接頭 / 充電器 / 行動電源", area: "隨身" },
      { text: "常備藥品(腸胃藥、防蚊液、暈車藥)", area: "隨身" },
      { text: "防曬乳、太陽眼鏡、帽子", area: "隨身" },
      { text: "輕便雨具(9月為雨季,建議帶折疊傘或輕便雨衣)", area: "隨身" },
      { text: "拜訪寺廟用的薄長褲/罩衫(遮肩蓋膝)", area: "隨身" },
      { text: "好走的鞋子(市集/古城區走路量大)", area: "隨身" },
    ],
  },
  {
    section: "行程中提醒",
    items: [
      { text: "大皇宮 / 玉佛寺服裝規定:不可短褲、無袖、拖鞋", area: "古城區" },
      { text: "恰圖恰市集只在週六日開放,把握這兩天", area: "市集" },
      { text: "河岸區傍晚蚊蟲較多,可補擦防蚊液", area: "河岸" },
      { text: "BigC / 機場記得預留退稅單據(消費滿額可退稅)", area: "購物" },
    ],
  },
];

if (typeof module !== "undefined") {
  module.exports = { TRIP, ITINERARY, RESTAURANTS, CHECKLIST };
}
