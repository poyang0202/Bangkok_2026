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
    title: "古城 & 河岸一日",
    subtitle: "大皇宮、玉佛寺、臥佛寺、鄭王廟、唐人街",
    items: [
      {
        time: "09:00",
        title: "曼谷大皇宮 + 玉佛寺",
        category: "景點",
        hours: "08:30-15:30",
        transport: "🚕 飯店搭車約 20-30 分鐘",
        must: [
          { name: "玉佛寺正殿(禁止拍照)", note: "泰國最高規格佛寺" },
          { name: "節基皇宮 Chakri Maha Prasat", note: "拉瑪五世建造的歐泰混合建築" },
        ],
        note: "服裝規定嚴格:不可穿短褲、無袖上衣、拖鞋,建議長褲/長裙,現場有租借罩衫服務但會排隊。門票約 500 泰銖。",
        map: "https://www.google.com/maps/search/?api=1&query=Grand+Palace+Bangkok",
      },
      {
        time: "10:30",
        title: "泰服體驗(拍照)",
        category: "體驗",
        transport: "🚶 大皇宮周邊步行可達,多間租借店",
        note: "大皇宮附近有很多泰服出租店,租借 2-3 小時方案即可,建議先拍照再去下一個景點,避免中午太熱。",
      },
      {
        time: "12:00",
        title: "午餐 - 古城區周邊小吃",
        category: "餐飲",
        note: "可參考店家頁『Baan Kuay Tiew Ruathong 船麵一條街』或古城周邊路邊攤。",
      },
      {
        time: "13:30",
        title: "臥佛寺 Wat Pho",
        category: "景點",
        hours: "08:00-18:30",
        transport: "🚶 距大皇宮步行約 10 分鐘",
        must: [{ name: "巨型臥佛", note: "全長 46 公尺的鎏金臥佛,泰式按摩發源地" }],
        note: "寺內有正宗泰式按摩館,若時間許可可以安排一場腳底按摩。",
        map: "https://www.google.com/maps/search/?api=1&query=Wat+Pho+Bangkok",
      },
      {
        time: "15:00",
        title: "渡輪過河 → 鄭王廟 Wat Arun",
        category: "景點",
        hours: "08:00-18:00",
        transport: "⛴️ Tha Tien 碼頭搭渡輪,約 5 分鐘,單程 4 泰銖",
        note: "傍晚前的順光時段拍照最美,也可以等到接近日落再過去拍剪影。",
        map: "https://www.google.com/maps/search/?api=1&query=Wat+Arun+Bangkok",
      },
      {
        time: "17:30",
        title: "唐人街(耀華力路)覓食 + 逛街",
        category: "景點",
        transport: "🚕 車程約 20 分鐘 / 🚇 地鐵至華藍蓬站步行",
        note: "傍晚後路邊攤陸續開張,推薦提早來卡位吃船麵、海鮮粥,晚上霓虹招牌很好拍。",
        map: "https://www.google.com/maps/search/?api=1&query=Yaowarat+Road+Bangkok",
      },
      {
        time: "19:30",
        title: "晚餐 - 唐人街街邊小吃",
        category: "餐飲",
        note: "可參考店家頁『ākho at SongWat』『Mother Roaster Talat Noi』一帶。",
      },
    ],
  },
  {
    date: "2026-09-26",
    weekday: "週六",
    title: "恰圖恰週末市集",
    subtitle: "全泰國最大市集,趁週末開放把握機會",
    items: [
      {
        time: "09:00",
        title: "恰圖恰週末市集 Chatuchak Weekend Market",
        category: "景點",
        hours: "週六日 09:00-18:00(週五夜間為批發市場)",
        transport: "🚇 地鐵至 Kamphaeng Phet 站 / BTS 至 Mo Chit 站",
        must: [
          { name: "服飾與選物攤位", note: "早上人潮較少,建議開門就到" },
          { name: "泰式小吃區", note: "芒果糯米飯、椰子冰淇淋不可錯過" },
        ],
        note: "佔地超大、動線複雜,建議先看好分區地圖。9-11點左右較涼爽,中午後非常悶熱,注意補水。",
        map: "https://www.google.com/maps/search/?api=1&query=Chatuchak+Weekend+Market",
      },
      {
        time: "12:30",
        title: "午餐 - 市集內小吃",
        category: "餐飲",
        note: "市集內熟食區選擇很多,建議少量多樣品嚐。",
      },
      {
        time: "14:30",
        title: "回飯店午休、避開最熱時段",
        category: "自由",
        note: "曼谷下午通常悶熱,建議安排回飯店游泳池或休息,傍晚再出門。",
      },
      {
        time: "17:00",
        title: "BigC 超市採買",
        category: "購物",
        hours: "多為 09:00-22:00",
        transport: "🚕 依飯店位置搭車或步行",
        note: "採買零食、泡麵、青草藥膏、乳液等伴手禮的好地方,建議晚餐前先去,行李箱留空間裝戰利品。",
        map: "https://www.google.com/maps/search/?api=1&query=Big+C+Bangkok",
      },
      {
        time: "19:00",
        title: "晚餐",
        category: "餐飲",
        note: "可參考店家頁鄰近 BigC 的餐廳選項。",
      },
    ],
  },
  {
    date: "2026-09-27",
    weekday: "週日",
    title: "河岸新地標",
    subtitle: "Iconsiam + 昭披耶河遊船",
    items: [
      {
        time: "09:00",
        title: "睡到自然醒、悠閒早餐",
        category: "自由",
        note: "這天行程較鬆,不用急著出門,補足前兩天的體力。",
      },
      {
        time: "10:30",
        title: "Iconsiam 暹羅天地",
        category: "購物",
        hours: "10:00-22:00",
        transport: "⛴️ 多數飯店可搭免費接駁船至 Iconsiam 碼頭,或 BTS 至 Charoen Nakhon 站轉接駁船",
        must: [
          { name: "SookSiam", note: "地下樓層的泰國 77 府文化市集,適合買伴手禮" },
          { name: "河景觀景平台", note: "面河的落地窗景觀非常適合拍照" },
        ],
        note: "商場非常大,建議先鎖定幾個想去的樓層,不用每層都逛。",
        map: "https://www.google.com/maps/search/?api=1&query=Iconsiam+Bangkok",
      },
      {
        time: "12:30",
        title: "午餐 - Iconsiam 內用餐",
        category: "餐飲",
        note: "SookSiam 美食區或樓上餐廳皆可,選擇非常多。",
      },
      {
        time: "16:30",
        title: "昭披耶河遊船",
        category: "體驗",
        transport: "⛴️ 多數碼頭皆可搭乘觀光船或晚餐遊船",
        note: "可選擇單純交通船體驗河岸風光,或加購有晚餐與現場音樂的遊船行程,建議提前上網訂位。",
        map: "https://www.google.com/maps/search/?api=1&query=Chao+Phraya+River+Cruise+Bangkok",
      },
      {
        time: "19:00",
        title: "晚餐(可併入遊船行程)",
        category: "餐飲",
        note: "若未選擇晚餐遊船,可下船後在碼頭周邊覓食。",
      },
    ],
  },
  {
    date: "2026-09-28",
    weekday: "週一",
    title: "市中心購物日",
    subtitle: "四面佛、暹羅廣場、Siam Paragon、Central World",
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
