/*
 * DailyCost Localization
 * ----------------------
 * Chinese Traditional (Taiwan)
 *
 */

(function(app) {
	"use strict";

	app.addLanguage("zh-tw", {

		preference: {
			"currency": "TWD".split("_")
		},

		string: {
			"weekdays": "周日_周一_周二_周三_周四_周五_周六".split("_"),
			"weekdaysShort": "周日_周一_周二_周三_周四_周五_周六".split("_"),
			"pullText": "新增...|新增一...|新增一條...|新增一條開...|新增一條開銷...|新增一條開銷!".split("|"),
			// "formatMetaDate": 'MM[<span>]DD[</span>] [<span class="day">]ddd[</span>]',
			"formatMetaDate": '[<strong>]MM.DD[</strong>]',
			"formatSameMonthWeekScope1": '[<strong>]MM.DD[</strong>]',
			"formatSameMonthWeekScope2": '[<strong>]DD[</strong>]',

			"settings": "設定",
			"preferences": "使用偏好",
			"categories": "開銷類別",
			"wallpaper": "桌布",
			"general": "一般",
			"accountSettings": "帳號",
			"account": "我的 DailyCost 帳號",
			"sharing": "分享",
			"currency": "貨幣",
			"security": "安全",
			"feedback": "建議及反饋",
			"about": "關於",
			"tipsAndTricks": "使用秘籍",
			"preview": "預覽",
			"done": "完成",
			"submit": "提交",
			"restore": "還原",
			"default": "默認",
			"weekStart": "每週開始於",

			"data": "數據",
			"dataExportCSV": "郵件導出Excel文件(CSV)", // "通過Email導出CSV"
			"dataExportEmailSubject": "DailyCost數據備份",
			"dataExportEmailBody": "Keep it simple and elegant.",

			"date": "日期",
			"sum": "金額",
			"category": "類別",

			"entry": "記錄",
			"cost": "開銷",
			"earn": "收入",
			"balance": "總額",

			"favoriteCurrencies": "常用貨幣",
			"allCurrencies": "全部貨幣",

			"emptyCatlist": "喔，這裡還沒有任何記錄喔",

			"feedbackEmailSubject": "DailyCost反饋",

			"rollDays": "天數",
			"rollTotal": "開銷",
			"rollTotalSum": "總金額",

			"note": "附註",
			"createdOn": "紀錄於",

			"ratingsTitle": "給DailyCost評分",
			"ratingsDescriptions": "如果您喜歡DailyCost，現在就花點時間寫個評論吧！您的意見和建議會讓他變得更出色。",
			"ratingsButtons": "去評分,下次吧"
		},

		category: {
			"default":        "一般消费",
			"food":           "餐飲",
			"food-breakfast": "早餐",
			"food-lunch":     "午餐",
			"food-dinner":    "晚餐",
			"drinks":         "飲料",
			"groceries":      "水果零食",
			"shopping":       "購物",

			"personal":       "個人",
			"entertain":      "娛樂",
			"movies":         "電影",
			"social":         "社交",
			"transport":      "交通",

			"appstore":       "App Store",
			"mobile":         "手機通訊",
			"computer":       "電腦",
			"gifts":          "禮物",
			"housing":        "居家",

			"travel":         "旅遊",
			"tickets":        "門票",
			"books":          "書籍",
			"medical":        "醫療",
			"transfer":       "轉帳"
		},

		currency: {
			"AED": "阿联酋迪拉姆",
				"AFN": "Afghan Afghani",
				"ALL": "Albanian Lek",
				"AMD": "Armenian Dram",
				"ANG": "荷蘭盾",
				"AOA": "安哥拉寬扎",
			"ARS": "阿根廷比索",
			"AUD": "澳元",
				"AWG": "Aruban or Dutch Guilder",
				"AZN": "Azerbaijani New Manat",
				"BAM": "Bosnian Convertible Marka",
				"BBD": "Barbadian or Bajan Dollar",
				"BDT": "Bangladeshi Taka",
				"BGN": "Bulgarian Lev",
				"BHD": "Bahraini Dinar",
				"BIF": "蒲隆地法郎",
				"BMD": "百慕達元",
				"BND": "文莱元",
				"BOB": "Bolivian Boliviano",
			"BRL": "巴西雷亚尔",
				"BSD": "Bahamian Dollar",
				"BTN": "Bhutanese Ngultrum",
				"BWP": "Botswana Pula",
				"BYR": "Belarusian Ruble",
				"BZD": "Belizean Dollar",
			"CAD": "加元",
				"CDF": "Congolese Franc",
			"CHF": "瑞士法郎",
			"CLP": "智利比索",
			"CNY": "人民币",
				"COP": "Colombian Peso",
				"CRC": "Costa Rican Colon",
				"CUC": "Cuban Convertible Peso",
				"CUP": "Cuban Peso",
				"CVE": "Cape Verdean Escudo",
			"CZK": "捷克克朗",
				"DJF": "Djiboutian Franc",
			"DKK": "丹麦克朗",
				"DOP": "Dominican Peso",
				"DZD": "Algerian Dinar",
			"EGP": "埃及鎊",
				"ERN": "Eritrean Nakfa",
				"ETB": "Ethiopian Birr",
			"EUR": "欧元",
				"FJD": "Fijian Dollar",
				"FKP": "Falkland Island Pound",
			"GBP": "英鎊",
				"GEL": "Georgian Lari",
				"GGP": "Guernsey Pound",
				"GHS": "Ghanaian Cedi",
				"GIP": "Gibraltar Pound",
				"GMD": "Gambian Dalasi",
				"GNF": "Guinean Franc",
				"GTQ": "Guatemalan Quetzal",
				"GYD": "Guyanese Dollar",
			"HKD": "港元",
				"HNL": "Honduran Lempira",
				"HRK": "Croatian Kuna",
				"HTG": "Haitian Gourde",
			"HUF": "匈牙利福林",
			"IDR": "印尼盾",
			"ILS": "以色列新謝克爾",
				"IMP": "Isle of Man Pound",
			"INR": "印度盧比",
				"IQD": "Iraqi Dinar",
				"IRR": "Iranian Rial",
				"ISK": "Icelandic Krona",
				"JEP": "Jersey Pound",
				"JMD": "Jamaican Dollar",
				"JOD": "Jordanian Dinar",
			"JPY": "日元",
				"KES": "Kenyan Shilling",
				"KGS": "Kyrgyzstani Som",
				"KHR": "柬埔寨瑞爾",
				"KMF": "Comoran Franc",
				"KPW": "North Korean Won",
			"KRW": "韩元",
				"KWD": "Kuwaiti Dinar",
				"KYD": "Caymanian Dollar",
				"KZT": "Kazakhstani Tenge",
			"LAK": "寮國基普",
				"LBP": "Lebanese Pound",
				"LKR": "Sri Lankan Rupee",
				"LRD": "Liberian Dollar",
				"LSL": "Basotho Loti",
				"LTL": "Lithuanian Litas",
				"LVL": "Latvian Lat",
				"LYD": "Libyan Dinar",
				"MAD": "Moroccan Dirham",
				"MDL": "Moldovan Leu",
				"MGA": "Malagasy Ariary",
				"MKD": "Macedonian Denar",
				"MMK": "Burmese Kyat",
			"MNT": "Mongolian Tughrik",
				"MOP": "Macau Pataca",
				"MRO": "Mauritanian Ouguiya",
				"MUR": "Mauritian Rupee",
				"MVR": "Maldivian Rufiyaa",
				"MWK": "Malawian Kwacha",
			"MXN": "墨西哥比索",
			"MYR": "馬來西亞林吉特",
				"MZN": "Mozambican Metical",
				"NAD": "Namibian Dollar",
			"NGN": "奈及利亞奈拉",
				"NIO": "Nicaraguan Cordoba",
			"NOK": "挪威克朗",
				"NPR": "Nepalese Rupee",
			"NZD": "新西蘭元",
				"OMR": "Omani Rial",
				"PAB": "Panamanian Balboa",
				"PEN": "Peruvian Nuevo Sol",
				"PGK": "Papua New Guinean Kina",
			"PHP": "菲律賓比索",
				"PKR": "Pakistani Rupee",
			"PLN": "波蘭茲羅提",
				"PYG": "Paraguayan Guarani",
				"QAR": "Qatari Riyal",
				"RON": "Romanian New Leu",
				"RSD": "Serbian Dinar",
			"RUB": "俄羅斯盧布",
				"RWF": "Rwandan Franc",
			"SAR": "沙特里亞爾",
				"SBD": "Solomon Islander Dollar",
				"SCR": "Seychellois Rupee",
				"SDG": "Sudanese Pound",
			"SEK": "瑞典克朗",
			"SGD": "新加坡元",
				"SHP": "Saint Helenian Pound",
				"SLL": "Sierra Leonean Leone",
				"SOS": "Somali Shilling",
				"SPL": "Seborgan Luigino",
				"SRD": "Surinamese Dollar",
				"STD": "Sao Tomean Dobra",
				"SVC": "Salvadoran Colon",
				"SYP": "Syrian Pound",
				"SZL": "Swazi Lilangeni",
			"THB": "泰銖",
				"TJS": "Tajikistani Somoni",
				"TMT": "Turkmenistani Manat",
				"TND": "Tunisian Dinar",
				"TOP": "Tongan Pa'anga",
			"TRY": "土耳其里拉",
				"TTD": "Trinidadian Dollar",
				"TVD": "Tuvaluan Dollar",
			"TWD": "新臺幣",
				"TZS": "Tanzanian Shilling",
			"UAH": "烏克蘭格里夫納",
				"UGX": "Ugandan Shilling",
			"USD": "美元",
				"UYU": "Uruguayan Peso",
				"UZS": "Uzbekistani Som",
				"VEF": "Venezuelan Bolivar",
			"VND": "越南盾",
				"VUV": "Ni-Vanuatu Vatu",
				"WST": "Samoan Tala",
				"XAF": "Central African CFA Franc BEAC",
				"XAG": "Silver Ounce",
				"XAU": "Gold Ounce",
				"XCD": "East Caribbean Dollar",
				"XDR": "IMF Special Drawing Rights",
				"XOF": "CFA Franc",
				"XPD": "Palladium Ounce",
				"XPF": "CFP Franc",
				"XPT": "Platinum Ounce",
				"YER": "Yemeni Rial",
			"ZAR": "南非蘭特",
				"ZMW": "Zambian Kwacha",
				"ZWD": "Zimbabwean Dollar"
		}

	});

}(DAILYCOST || {}));
