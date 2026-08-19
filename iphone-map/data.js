/*!
 * iPhone 用户量世界地图 —— 数据集
 * ---------------------------------------------------------------
 * 每个国家/地区的 iPhone 活跃用户量并没有官方公开数字，本数据集用
 * 一个公开可复现的模型估算：
 *
 *     iPhone 用户数 ≈ 人口 × 智能手机普及率 × iOS 设备份额
 *
 * · pop  人口（百万），联合国 2024/2025 年前后口径
 * · pen  智能手机普及率（智能手机用户 / 总人口），综合 GSMA Intelligence、
 *        Newzoo、DataReportal 2024–2025 年数据
 * · ios  iOS 在移动操作系统中的份额，取 StatCounter 2025 年前后的国家级
 *        月度均值（部分小国用相邻市场推断）
 *
 * 因此所有数字都是**量级估算**，用于横向比较国家之间的相对规模，
 * 不应当作精确统计引用。要更新数据，直接改下面的 pop / pen / ios 即可，
 * 页面会自动重新计算面积与排名。
 *
 * 字段：n 中文名 · e 英文名 · i ISO 3166-1 二位码（用于生成国旗）
 *      lat/lon 地理中心 · r 区域 · pop/pen/ios 见上
 */
window.IPHONE_DATA = {
  updated: "2025 年口径估算",
  countries: [
    /* ---------- 北美 ---------- */
    { n: "美国",       e: "United States",  i: "US", lat:  39.5, lon:  -98.5, r: "北美",   pop: 342,  pen: 0.86, ios: 0.575 },
    { n: "加拿大",     e: "Canada",         i: "CA", lat:  56.1, lon: -106.3, r: "北美",   pop: 41,   pen: 0.85, ios: 0.58  },
    { n: "墨西哥",     e: "Mexico",         i: "MX", lat:  23.6, lon: -102.5, r: "拉美",   pop: 129,  pen: 0.72, ios: 0.26  },

    /* ---------- 拉美 ---------- */
    { n: "巴西",       e: "Brazil",         i: "BR", lat: -14.2, lon:  -51.9, r: "拉美",   pop: 213,  pen: 0.83, ios: 0.18  },
    { n: "阿根廷",     e: "Argentina",      i: "AR", lat: -38.4, lon:  -63.6, r: "拉美",   pop: 46,   pen: 0.82, ios: 0.13  },
    { n: "哥伦比亚",   e: "Colombia",       i: "CO", lat:   4.6, lon:  -74.3, r: "拉美",   pop: 53,   pen: 0.75, ios: 0.12  },
    { n: "智利",       e: "Chile",          i: "CL", lat: -35.7, lon:  -71.5, r: "拉美",   pop: 19.6, pen: 0.85, ios: 0.22  },
    { n: "秘鲁",       e: "Peru",           i: "PE", lat:  -9.2, lon:  -75.0, r: "拉美",   pop: 34,   pen: 0.72, ios: 0.12  },
    { n: "厄瓜多尔",   e: "Ecuador",        i: "EC", lat:  -1.8, lon:  -78.2, r: "拉美",   pop: 18,   pen: 0.70, ios: 0.14  },
    { n: "委内瑞拉",   e: "Venezuela",      i: "VE", lat:   6.4, lon:  -66.6, r: "拉美",   pop: 28,   pen: 0.60, ios: 0.12  },
    { n: "乌拉圭",     e: "Uruguay",        i: "UY", lat: -32.5, lon:  -55.8, r: "拉美",   pop: 3.4,  pen: 0.85, ios: 0.30  },
    { n: "玻利维亚",   e: "Bolivia",        i: "BO", lat: -16.3, lon:  -63.6, r: "拉美",   pop: 12.4, pen: 0.60, ios: 0.08  },
    { n: "危地马拉",   e: "Guatemala",      i: "GT", lat:  15.8, lon:  -90.2, r: "拉美",   pop: 18,   pen: 0.60, ios: 0.12  },
    { n: "多米尼加",   e: "Dominican Rep.", i: "DO", lat:  18.7, lon:  -70.2, r: "拉美",   pop: 11.3, pen: 0.65, ios: 0.15  },
    { n: "哥斯达黎加", e: "Costa Rica",     i: "CR", lat:   9.7, lon:  -83.8, r: "拉美",   pop: 5.2,  pen: 0.75, ios: 0.25  },
    { n: "巴拿马",     e: "Panama",         i: "PA", lat:   8.5, lon:  -80.1, r: "拉美",   pop: 4.5,  pen: 0.70, ios: 0.30  },

    /* ---------- 欧洲 ---------- */
    { n: "英国",       e: "United Kingdom", i: "GB", lat:  54.0, lon:   -2.6, r: "欧洲",   pop: 68.5, pen: 0.88, ios: 0.52  },
    { n: "德国",       e: "Germany",        i: "DE", lat:  51.2, lon:   10.5, r: "欧洲",   pop: 84.5, pen: 0.86, ios: 0.37  },
    { n: "法国",       e: "France",         i: "FR", lat:  46.6, lon:    2.2, r: "欧洲",   pop: 68.5, pen: 0.86, ios: 0.35  },
    { n: "意大利",     e: "Italy",          i: "IT", lat:  42.5, lon:   12.6, r: "欧洲",   pop: 58.9, pen: 0.85, ios: 0.32  },
    { n: "西班牙",     e: "Spain",          i: "ES", lat:  40.2, lon:   -3.7, r: "欧洲",   pop: 48.4, pen: 0.88, ios: 0.26  },
    { n: "俄罗斯",     e: "Russia",         i: "RU", lat:  61.5, lon:   90.0, r: "欧洲",   pop: 144,  pen: 0.80, ios: 0.30  },
    { n: "荷兰",       e: "Netherlands",    i: "NL", lat:  52.3, lon:    5.3, r: "欧洲",   pop: 17.9, pen: 0.90, ios: 0.55  },
    { n: "波兰",       e: "Poland",         i: "PL", lat:  52.0, lon:   19.1, r: "欧洲",   pop: 37.6, pen: 0.85, ios: 0.20  },
    { n: "瑞典",       e: "Sweden",         i: "SE", lat:  60.1, lon:   16.6, r: "欧洲",   pop: 10.6, pen: 0.90, ios: 0.52  },
    { n: "比利时",     e: "Belgium",        i: "BE", lat:  50.6, lon:    4.5, r: "欧洲",   pop: 11.8, pen: 0.88, ios: 0.42  },
    { n: "瑞士",       e: "Switzerland",    i: "CH", lat:  46.8, lon:    8.2, r: "欧洲",   pop: 8.9,  pen: 0.90, ios: 0.58  },
    { n: "奥地利",     e: "Austria",        i: "AT", lat:  47.6, lon:   14.5, r: "欧洲",   pop: 9.2,  pen: 0.87, ios: 0.40  },
    { n: "丹麦",       e: "Denmark",        i: "DK", lat:  56.3, lon:    9.5, r: "欧洲",   pop: 6.0,  pen: 0.90, ios: 0.62  },
    { n: "挪威",       e: "Norway",         i: "NO", lat:  61.0, lon:    8.5, r: "欧洲",   pop: 5.6,  pen: 0.90, ios: 0.56  },
    { n: "芬兰",       e: "Finland",        i: "FI", lat:  63.0, lon:   25.7, r: "欧洲",   pop: 5.6,  pen: 0.90, ios: 0.40  },
    { n: "爱尔兰",     e: "Ireland",        i: "IE", lat:  53.4, lon:   -8.2, r: "欧洲",   pop: 5.3,  pen: 0.88, ios: 0.55  },
    { n: "葡萄牙",     e: "Portugal",       i: "PT", lat:  39.4, lon:   -8.2, r: "欧洲",   pop: 10.6, pen: 0.85, ios: 0.27  },
    { n: "希腊",       e: "Greece",         i: "GR", lat:  39.1, lon:   21.8, r: "欧洲",   pop: 10.4, pen: 0.85, ios: 0.25  },
    { n: "捷克",       e: "Czechia",        i: "CZ", lat:  49.8, lon:   15.5, r: "欧洲",   pop: 10.9, pen: 0.85, ios: 0.25  },
    { n: "罗马尼亚",   e: "Romania",        i: "RO", lat:  45.9, lon:   24.9, r: "欧洲",   pop: 19.0, pen: 0.82, ios: 0.20  },
    { n: "匈牙利",     e: "Hungary",        i: "HU", lat:  47.2, lon:   19.5, r: "欧洲",   pop: 9.6,  pen: 0.83, ios: 0.20  },
    { n: "乌克兰",     e: "Ukraine",        i: "UA", lat:  48.4, lon:   31.2, r: "欧洲",   pop: 37,   pen: 0.78, ios: 0.20  },
    { n: "塞尔维亚",   e: "Serbia",         i: "RS", lat:  44.0, lon:   21.0, r: "欧洲",   pop: 6.6,  pen: 0.80, ios: 0.20  },
    { n: "保加利亚",   e: "Bulgaria",       i: "BG", lat:  42.7, lon:   25.5, r: "欧洲",   pop: 6.4,  pen: 0.80, ios: 0.20  },
    { n: "克罗地亚",   e: "Croatia",        i: "HR", lat:  45.1, lon:   16.2, r: "欧洲",   pop: 3.9,  pen: 0.85, ios: 0.25  },
    { n: "斯洛伐克",   e: "Slovakia",       i: "SK", lat:  48.7, lon:   19.7, r: "欧洲",   pop: 5.4,  pen: 0.85, ios: 0.22  },
    { n: "白俄罗斯",   e: "Belarus",        i: "BY", lat:  53.7, lon:   28.0, r: "欧洲",   pop: 9.2,  pen: 0.80, ios: 0.12  },
    { n: "冰岛",       e: "Iceland",        i: "IS", lat:  64.9, lon:  -19.0, r: "欧洲",   pop: 0.39, pen: 0.95, ios: 0.60  },

    /* ---------- 中东 ---------- */
    { n: "土耳其",     e: "Türkiye",        i: "TR", lat:  39.0, lon:   35.2, r: "中东",   pop: 86,   pen: 0.82, ios: 0.20  },
    { n: "沙特阿拉伯", e: "Saudi Arabia",   i: "SA", lat:  23.9, lon:   45.1, r: "中东",   pop: 34,   pen: 0.90, ios: 0.42  },
    { n: "阿联酋",     e: "UAE",            i: "AE", lat:  23.9, lon:   54.6, r: "中东",   pop: 10.2, pen: 0.95, ios: 0.42  },
    { n: "以色列",     e: "Israel",         i: "IL", lat:  31.0, lon:   34.9, r: "中东",   pop: 9.8,  pen: 0.90, ios: 0.45  },
    { n: "卡塔尔",     e: "Qatar",          i: "QA", lat:  25.4, lon:   51.2, r: "中东",   pop: 3.0,  pen: 0.95, ios: 0.45  },
    { n: "科威特",     e: "Kuwait",         i: "KW", lat:  29.3, lon:   47.5, r: "中东",   pop: 4.3,  pen: 0.95, ios: 0.45  },
    { n: "伊拉克",     e: "Iraq",           i: "IQ", lat:  33.2, lon:   43.7, r: "中东",   pop: 46,   pen: 0.70, ios: 0.15  },
    { n: "伊朗",       e: "Iran",           i: "IR", lat:  32.4, lon:   53.7, r: "中东",   pop: 89,   pen: 0.78, ios: 0.10  },
    { n: "约旦",       e: "Jordan",         i: "JO", lat:  30.6, lon:   36.2, r: "中东",   pop: 11.3, pen: 0.80, ios: 0.20  },
    { n: "黎巴嫩",     e: "Lebanon",        i: "LB", lat:  33.9, lon:   35.9, r: "中东",   pop: 5.4,  pen: 0.80, ios: 0.25  },

    /* ---------- 亚太 ---------- */
    { n: "中国大陆",   e: "China",          i: "CN", lat:  35.9, lon:  104.2, r: "亚太",   pop: 1410, pen: 0.75, ios: 0.25  },
    { n: "印度",       e: "India",          i: "IN", lat:  22.0, lon:   79.0, r: "亚太",   pop: 1440, pen: 0.52, ios: 0.045 },
    { n: "日本",       e: "Japan",          i: "JP", lat:  36.2, lon:  138.3, r: "亚太",   pop: 123,  pen: 0.82, ios: 0.68  },
    { n: "韩国",       e: "South Korea",    i: "KR", lat:  36.4, lon:  127.8, r: "亚太",   pop: 51.7, pen: 0.95, ios: 0.27  },
    { n: "印度尼西亚", e: "Indonesia",      i: "ID", lat:  -2.0, lon:  118.0, r: "亚太",   pop: 281,  pen: 0.66, ios: 0.12  },
    { n: "越南",       e: "Vietnam",        i: "VN", lat:  15.5, lon:  107.5, r: "亚太",   pop: 100,  pen: 0.75, ios: 0.25  },
    { n: "泰国",       e: "Thailand",       i: "TH", lat:  15.9, lon:  101.0, r: "亚太",   pop: 71.7, pen: 0.80, ios: 0.28  },
    { n: "菲律宾",     e: "Philippines",    i: "PH", lat:  12.9, lon:  122.8, r: "亚太",   pop: 116,  pen: 0.70, ios: 0.15  },
    { n: "马来西亚",   e: "Malaysia",       i: "MY", lat:   3.6, lon:  102.0, r: "亚太",   pop: 34.6, pen: 0.85, ios: 0.25  },
    { n: "新加坡",     e: "Singapore",      i: "SG", lat:   0.6, lon:  104.4, r: "亚太",   pop: 6.0,  pen: 0.95, ios: 0.55  },
    { n: "中国香港",   e: "Hong Kong",      i: "HK", lat:  22.4, lon:  114.5, r: "亚太",   pop: 7.5,  pen: 0.92, ios: 0.55  },
    { n: "中国台湾",   e: "Taiwan",         i: "TW", lat:  23.7, lon:  121.2, r: "亚太",   pop: 23.4, pen: 0.90, ios: 0.50  },
    { n: "巴基斯坦",   e: "Pakistan",       i: "PK", lat:  30.4, lon:   69.3, r: "亚太",   pop: 245,  pen: 0.40, ios: 0.03  },
    { n: "孟加拉国",   e: "Bangladesh",     i: "BD", lat:  23.7, lon:   90.4, r: "亚太",   pop: 173,  pen: 0.42, ios: 0.03  },
    { n: "哈萨克斯坦", e: "Kazakhstan",     i: "KZ", lat:  48.0, lon:   66.9, r: "亚太",   pop: 20,   pen: 0.80, ios: 0.25  },
    { n: "乌兹别克斯坦", e: "Uzbekistan",   i: "UZ", lat:  41.4, lon:   64.6, r: "亚太",   pop: 36,   pen: 0.70, ios: 0.08  },
    { n: "斯里兰卡",   e: "Sri Lanka",      i: "LK", lat:   7.9, lon:   80.8, r: "亚太",   pop: 22,   pen: 0.55, ios: 0.07  },
    { n: "缅甸",       e: "Myanmar",        i: "MM", lat:  21.9, lon:   96.0, r: "亚太",   pop: 54,   pen: 0.55, ios: 0.06  },
    { n: "柬埔寨",     e: "Cambodia",       i: "KH", lat:  12.6, lon:  105.0, r: "亚太",   pop: 17,   pen: 0.60, ios: 0.12  },
    { n: "尼泊尔",     e: "Nepal",          i: "NP", lat:  28.4, lon:   84.1, r: "亚太",   pop: 30,   pen: 0.55, ios: 0.05  },

    /* ---------- 大洋洲 ---------- */
    { n: "澳大利亚",   e: "Australia",      i: "AU", lat: -25.3, lon:  133.8, r: "大洋洲", pop: 27,   pen: 0.88, ios: 0.56  },
    { n: "新西兰",     e: "New Zealand",    i: "NZ", lat: -41.0, lon:  173.0, r: "大洋洲", pop: 5.3,  pen: 0.88, ios: 0.55  },

    /* ---------- 非洲 ---------- */
    { n: "尼日利亚",   e: "Nigeria",        i: "NG", lat:   9.1, lon:    8.7, r: "非洲",   pop: 230,  pen: 0.42, ios: 0.09  },
    { n: "南非",       e: "South Africa",   i: "ZA", lat: -30.6, lon:   24.9, r: "非洲",   pop: 63,   pen: 0.75, ios: 0.17  },
    { n: "埃及",       e: "Egypt",          i: "EG", lat:  26.8, lon:   30.8, r: "非洲",   pop: 114,  pen: 0.70, ios: 0.12  },
    { n: "摩洛哥",     e: "Morocco",        i: "MA", lat:  31.8, lon:   -7.1, r: "非洲",   pop: 38,   pen: 0.75, ios: 0.13  },
    { n: "阿尔及利亚", e: "Algeria",        i: "DZ", lat:  28.0, lon:    1.7, r: "非洲",   pop: 46,   pen: 0.70, ios: 0.09  },
    { n: "肯尼亚",     e: "Kenya",          i: "KE", lat:  -0.5, lon:   37.9, r: "非洲",   pop: 56,   pen: 0.50, ios: 0.07  },
    { n: "加纳",       e: "Ghana",          i: "GH", lat:   7.9, lon:   -1.0, r: "非洲",   pop: 34,   pen: 0.50, ios: 0.09  },
    { n: "埃塞俄比亚", e: "Ethiopia",       i: "ET", lat:   9.1, lon:   40.5, r: "非洲",   pop: 128,  pen: 0.30, ios: 0.03  },
    { n: "坦桑尼亚",   e: "Tanzania",       i: "TZ", lat:  -6.4, lon:   34.9, r: "非洲",   pop: 68,   pen: 0.40, ios: 0.04  },
    { n: "突尼斯",     e: "Tunisia",        i: "TN", lat:  33.9, lon:    9.5, r: "非洲",   pop: 12.2, pen: 0.75, ios: 0.15  },
    { n: "安哥拉",     e: "Angola",         i: "AO", lat: -11.2, lon:   17.9, r: "非洲",   pop: 37,   pen: 0.40, ios: 0.05  },
    { n: "科特迪瓦",   e: "Côte d'Ivoire",  i: "CI", lat:   7.5, lon:   -5.5, r: "非洲",   pop: 31,   pen: 0.45, ios: 0.06  },
    { n: "喀麦隆",     e: "Cameroon",       i: "CM", lat:   5.4, lon:   12.4, r: "非洲",   pop: 29,   pen: 0.40, ios: 0.05  }
  ]
};
