export const projects: {
  title: string
  description?: string
  links: { title: string; href: string; meta: string }[]
  imageFolder: string
}[] = [
  {
    title: 'What’s wrong with the “traffic circles” in Taiwan?',
    description:
      'I clustered millions of official accident records to recreate what failed at each roundabout, so we can build more "roundabouts", less "traffic circles".',
    links: [
      {
        title:
          '〈全台圓環體檢〉數據幕後：兩塊鳳梨酥＋機器學習演算法，如何幫我們從219萬筆交通資料庫拆解圓環設計問題？',
        href: 'https://medium.com/twreporter/全台圓環體檢-數據幕後-兩塊鳳梨酥-機器學習演算法-如何幫我們從219萬筆交通資料庫拆解圓環設計問題-ff6d726e1843',
        meta: '2026/2/24',
      },
      {
        title:
          '【Data Reporter】全台圓環大體檢（上）：哪些圓環頻傳傷亡事故？癥結怎解？',
        href: 'https://www.twreporter.org/a/taiwan-roundabouts-reckoning-1',
        meta: '2025/12/24',
      },
      {
        title:
          '【Data Reporter】全台圓環大體檢（下）：從首座螺旋圓環誕生，看人本交通新設計如何落地',
        href: 'https://www.twreporter.org/a/taiwan-roundabouts-reckoning-2',
        meta: '2025/12/24',
      },
    ],
    imageFolder: 'roundabouts',
  },
  {
    title: `Tracking PLA drills and Taiwan's preparedness`,
    description:
      "We've collected millions of AIS records and years of PLA activities around Taiwan, helping us understand what’s happening around us during those mysterious drills.",
    links: [
      {
        title:
          '3年半第7次圍台軍演：歷來最嚴重海空交通干擾，反映中國哪些武嚇目的？',
        href: 'https://www.twreporter.org/a/china-military-exercises-2025-12',
        meta: '2025/12/30',
      },
      {
        title: '動態模擬「宏泰輪」詭跡：台、歐斷纜危機的中國陰影',
        href: 'https://www.youtube.com/watch?v=NXroXYzXLX0',
        meta: '2025/3/6',
      },
      {
        title:
          '漢光41號軍演現場觀察：從國土縱深防禦到國家團結，台灣的新版大戰略',
        href: 'https://www.twreporter.org/a/2025-han-kuang-exercise',
        meta: '2025/7/18',
      },
      {
        title:
          '漢光42號軍演現場觀察：新制14天教召，能讓後備軍人真正恢復戰力嗎？',
        href: 'https://www.twreporter.org/a/2026-han-kuang-exercise-and-reservist-training',
        meta: '2026/9/1',
      },
    ],
    imageFolder: 'military',
  },
  {
    title: `What makes a cheering song sounds "Taiwan"?`,
    description: `An experiment to use embedding models to understand music. We've created interactive components so that plays and visualize what changes in the music's groove affect the lisening experience.`,
    links: [
      {
        title:
          '【Data Reporter】從Team Taiwan「聽台灣」：以世界音樂資料庫鑑定台灣棒球音樂DNA',
        href: 'https://www.twreporter.org/a/data-reporter-2026-wbc-team-taiwan-cheering-songs-analysis',
        meta: '2026/3/6',
      },
    ],
    imageFolder: 'baseball-music',
  },
  {
    title: `Let's all commute more safely.`,
    description:
      'Paying closer attention to our day-to-day life, from newly built, "engineering feat" bridge to your local elemetary schools.',
    links: [
      {
        title:
          '【Data Reporter】你的孩子上學安全嗎？《報導者》全台國中小通學環境大體檢（上）',
        href: 'https://www.twreporter.org/a/data-reporter-school-zone-safety-1',
        meta: '2026/10/7',
      },
      {
        title:
          '【Data Reporter】獨家圖解：橋梁機車道實體分隔島拆除後，交通事故降低多少？',
        href: 'https://www.twreporter.org/a/rethinking-motorcycle-lane-safety-on-the-danjiang-bridge-2',
        meta: '2026/6/11',
      },
      {
        title: '改善通學區有多難：交通安全如何跨出圍牆、連結社區和居民？',
        href: 'https://www.twreporter.org/a/why-school-zones-fail-to-keep-children-safe',
        meta: '2026/10/7',
      },
      {
        title:
          '【Data Reporter】你的孩子上學安全嗎？《報導者》全台國中小通學環境大體檢（下）',
        href: 'https://www.twreporter.org/a/data-reporter-school-zone-safety-2',
        meta: '2026/10/7',
      },
    ],
    imageFolder: 'traffic',
  },
  {
    title: 'Crunching the numbers.',
    description: `Using extensive regex and pdf parsers to finagle local government budget documents, find out what the new fiscal law could do to the local government's fiscal independence. (This is before LLMs can actually read files and I'm still proud of my regex masterpiece.)`,
    links: [
      {
        title:
          '《財劃法》數據科普幕後，我們如何處理近四千頁AI看不懂的政府預算書？',
        href: 'https://medium.com/twreporter/財劃法-數據科普幕後-我們如何處理近四千頁ai看不懂的政府預算書-986d99185ef6',
        meta: '2025/3/7',
      },
      {
        title:
          '【Data Reporter】數據科普《財劃法》修法影響：地方財源增加，區域發展更均衡？為何學界喜憂參半？',
        href: 'https://www.twreporter.org/a/data-reporter-impacts-on-allocation-amendents',
        meta: '2025/1/14',
      },
      {
        title:
          '中央對地方補助變少？統籌分配款公式有誤？新版《財劃法》分配爭議分析',
        href: 'https://www.twreporter.org/a/allocation-amendments-controversy',
        meta: '2025/9/12',
      },
    ],
    imageFolder: 'fiscal',
  },
  {
    title: `What does your phone do that you don't know?`,
    description: `As a privacy conceus person myself, we've used mitmproxy to capture the network requests from three major mobile map apps, including Chinese "AMAP", to know what tracking information each is sending?`,
    links: [
      {
        title:
          '報導者實測：從台北街頭到中國伺服器…「高德地圖」有什麼資安疑慮？',
        href: 'https://www.youtube.com/watch?v=wH_H9OC0qAc',
        meta: '2026/7/7',
      },
      {
        title:
          '中國「高德地圖」跨境定位風險：每3秒回傳位置資訊、暗藏可追溯使用者代碼',
        href: 'https://www.twreporter.org/a/national-security-data-privacy-china-amap-cross-border-tracking',
        meta: '2026/6/26',
      },
      {
        title:
          '【Data Reporter】從台北街頭到中國伺服器，《報導者》實測「高德地圖」如何蒐集使用者資料',
        href: 'https://www.twreporter.org/a/data-reporter-china-amap',
        meta: '2026/6/26',
      },
    ],
    imageFolder: 'amap',
  },
  {
    title: 'Investigating “remote upstream” rivers.',
    description:
      '(not git repos) Mapping potential drinking water intakes pollution by spatial cross-matching river, nearby factories and past penalty records.',
    links: [
      {
        title: '你家喝的自來水從哪來？乾淨嗎？從基隆嚴重油汙事件開始的全台調查',
        href: 'https://www.youtube.com/watch?v=OFPd7Cj8XQE',
        meta: '2026/7/3',
      },
      {
        title:
          '【Data Reporter】互動式地圖揭10大風險流域：全台59處取水口上游疑未設保護區、汙染工廠逾300家',
        href: 'https://www.twreporter.org/a/data-reporter-tracking-pollution-sources-of-drinking-water',
        meta: '2026/7/2',
      },
      {
        title:
          '高雄人不喝自來水？上游劃設全台最大保護區，高屏溪仍陷水質信任危機',
        href: 'https://www.twreporter.org/a/tracking-pollution-sources-of-drinking-water-kaohsiung',
        meta: '2026/7/2',
      },
      {
        title:
          '基隆河取水口違法排汙非個案，上游遍布汙染工廠成50萬人飲用水未爆彈',
        href: 'https://www.twreporter.org/a/tracking-pollution-sources-of-drinking-water-keelung',
        meta: '2026/7/2',
      },
      {
        title: '護國群山下，爭一口乾淨水：新竹居民長年監測，訴求鳳山溪劃保護區',
        href: 'https://www.twreporter.org/a/tracking-pollution-sources-of-drinking-water-hsinchu',
        meta: '2026/7/2',
      },
    ],
    imageFolder: 'water-pollution',
  },
  {
    title: 'Disaster Response Toolkit for Taiwanese Citizens',
    description: `I've built iCanHelp app, a collection of helpful tools for disaster preparedness. Built with full-stack Next.js with native bundles using Expo.js, during my time at Forward Alliance.`,
    links: [
      {
        title: 'iCanHelp App',
        href: 'https://app.icanhelp.tw',
        meta: 'App Store / Google Play',
      },
    ],
    imageFolder: 'icanhelp',
  },
  {
    title: 'Hackathon Project: Carbon Notebook',
    description: `We built a microservice that help people recognize their carbon footprint and how can they save more from their daily lives, which is also embeddable within Taipei's citizen app "Town Pass," in a 24 hour hackathon and won second place.`,
    links: [
      {
        title: 'taipei-doit/townpass2025-carbon-notebook',
        href: 'https://github.com/taipei-doit/townpass2025-carbon-notebook',
        meta: 'Github',
      },
    ],
    imageFolder: 'carbon-notebook',
  },
  {
    title: 'Understanding Taiwanese Local Politics.',
    description:
      'I helped visualize political phenomenon from political family network to village level maps for local election results.',
    links: [
      {
        title: '從林派到英系，陳明文「嘉義王」之路與派系接班隱憂',
        href: 'https://www.twreporter.org/a/2026-local-elections-chiayi',
        meta: '2026/6/3',
      },
      {
        title: '棄縣長、保議長、聽爸爸的話──彰化謝家「姊弟內鬥」的派系困局',
        href: 'https://www.twreporter.org/a/2026-local-elections-changhua',
        meta: '2026/6/3',
      },
      {
        title:
          '【Data Reporter】你家議員替你爭取哪些補助？各黨策略有何不同？六都議員提案全解析',
        href: 'https://www.twreporter.org/a/data-reporter-municipal-councils-observatory',
        meta: '2026/6/3',
      },
      {
        title: '【Data Reporter】7張圖表，看「第二波大罷免」各村里投票結果',
        href: 'https://www.twreporter.org/a/data-reporter-2025-823-recall-results',
        meta: '2025/8/24',
      },
      {
        title:
          '【Data Reporter】核電廠周遭村里「重啟核三」投票意向？近年3次核能公投民意變化？6張圖表與正反學者分析',
        href: 'https://www.twreporter.org/a/data-reporter-referendum-to-restart-maanshan-nuclear-power-plant',
        meta: '2025/8/24',
      },
      {
        title: '【Data Reporter】25張圖表，看「第一波大罷免」各村里投票結果',
        href: 'https://www.twreporter.org/a/data-reporter-2025-726-recall-results',
        meta: '2025/7/27',
      },
    ],
    imageFolder: 'politics',
  },
]
