/*
 * DailyCost Localization
 *
 */

(function(app, undefined) {
	"use strict";

	app.addLanguage("en-us", {

		preference: {
			"currency": "USD".split("_")
		},

		string: {
			"weekdays": "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
			"weekdaysShort": "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
			"pullText": "New ...|New c...|New co...|New cos...|New cost...|New cost!".split("|"),
			"formatMetaDate": 'MM[<span>]DD[</span>] [<span class="day">]ddd[</span>]',

			"settings": "Settings",
			"preferences": "Preferences",
			"categories": "Categories",
			"wallpaper": "Wallpaper",
			"general": "General",
			"accountSettings": "Account",
			"account": "My Account",
			"sharing": "Sharing",
			"currency": "Currency",
			"security": "Security",
			"feedback": "Feedback",
			"about": "About",
			"tipsAndTricks": "Tips & Tricks",
			"preview": "Preview",
			"done": "Done",
			"submit": "Submit",
			"restore": "Restore",
			"default": "Default",
			"weekStart": "Week starts on",

			"data": "Data",
			"dataExportCSV": "Export CSV via Email",
			"dataExportEmailSubject": "DailyCost Data Backup",
			"dataExportEmailBody": "Keep it simple and elegant.",

			"date": "Date",
			"sum": "Sum",
			"category": "Category",

			"favoriteCurrencies": "My currencies",
			"allCurrencies": "All currencies",

			"emptyCatlist": "Ooops, there is no cost here yet",

			"feedbackEmailSubject": "DailyCost Feedback",

			"rollDays": "Days",
			"rollTotal": "Costs",
			"rollTotalSum": "Total",

			"note": "Note",
			"createdOn": "Created on",

			"ratingsTitle": "Rate DailyCost",
			"ratingsDescriptions": "If you enjoy using DailyCost, would you mind taking a moment to rate it? It won\'t take more than a minute. Thanks for your support!",
			"ratingsButtons": "Rate DailyCost,Later"
		},

		category: {
			"default":        "General",
			"food":           "Food",
			"food-breakfast": "Breakfast",
			"food-lunch":     "Lunch",
			"food-dinner":    "Dinner",
			"drinks":         "Drinks",
			"groceries":      "Groceries",
			"shopping":       "Shopping",

			"personal":       "Personal",
			"entertain":      "Entertain",
			"movies":         "Movies",
			"social":         "Social",
			"transport":      "Transport",

			"appstore":       "App Store",
			"mobile":         "Mobile",
			"computer":       "Computer",
			"gifts":          "Gifts",
			"housing":        "Housing",

			"travel":         "Travel",
			"tickets":        "Tickets",
			"books":          "Books",
			"medical":        "Medical",
			"transfer":       "Transfer"
		},

		currency: {
			"AED": "Emirati Dirham",
				"AFN": "Afghan Afghani",
				"ALL": "Albanian Lek",
				"AMD": "Armenian Dram",
				"ANG": "Dutch Guilder",
				"AOA": "Angolan Kwanza",
			"ARS": "Argentine Peso",
			"AUD": "Australian Dollar",
				"AWG": "Aruban or Dutch Guilder",
				"AZN": "Azerbaijani New Manat",
				"BAM": "Bosnian Convertible Marka",
				"BBD": "Barbadian or Bajan Dollar",
				"BDT": "Bangladeshi Taka",
				"BGN": "Bulgarian Lev",
				"BHD": "Bahraini Dinar",
				"BIF": "Burundian Franc",
				"BMD": "Bermudian Dollar",
				"BND": "Bruneian Dollar",
				"BOB": "Bolivian Boliviano",
			"BRL": "Brazilian Real",
				"BSD": "Bahamian Dollar",
				"BTN": "Bhutanese Ngultrum",
				"BWP": "Botswana Pula",
				"BYR": "Belarusian Ruble",
				"BZD": "Belizean Dollar",
			"CAD": "Canadian Dollar",
				"CDF": "Congolese Franc",
			"CHF": "Swiss Franc",
			"CLP": "Chilean Peso",
			"CNY": "Chinese Yuan Renminbi",
				"COP": "Colombian Peso",
				"CRC": "Costa Rican Colon",
				"CUC": "Cuban Convertible Peso",
				"CUP": "Cuban Peso",
				"CVE": "Cape Verdean Escudo",
			"CZK": "Czech Koruna",
				"DJF": "Djiboutian Franc",
			"DKK": "Danish Krone",
				"DOP": "Dominican Peso",
				"DZD": "Algerian Dinar",
			"EGP": "Egyptian Pound",
				"ERN": "Eritrean Nakfa",
				"ETB": "Ethiopian Birr",
			"EUR": "Euro",
				"FJD": "Fijian Dollar",
				"FKP": "Falkland Island Pound",
			"GBP": "British Pound",
				"GEL": "Georgian Lari",
				"GGP": "Guernsey Pound",
				"GHS": "Ghanaian Cedi",
				"GIP": "Gibraltar Pound",
				"GMD": "Gambian Dalasi",
				"GNF": "Guinean Franc",
				"GTQ": "Guatemalan Quetzal",
				"GYD": "Guyanese Dollar",
			"HKD": "Hong Kong Dollar",
				"HNL": "Honduran Lempira",
				"HRK": "Croatian Kuna",
				"HTG": "Haitian Gourde",
			"HUF": "Hungarian Forint",
			"IDR": "Indonesian Rupiah",
			"ILS": "Israeli New Shekel",
				"IMP": "Isle of Man Pound",
			"INR": "Indian Rupee",
				"IQD": "Iraqi Dinar",
				"IRR": "Iranian Rial",
				"ISK": "Icelandic Krona",
				"JEP": "Jersey Pound",
				"JMD": "Jamaican Dollar",
				"JOD": "Jordanian Dinar",
			"JPY": "Japanese Yen",
				"KES": "Kenyan Shilling",
				"KGS": "Kyrgyzstani Som",
				"KHR": "Cambodian Riel",
				"KMF": "Comoran Franc",
				"KPW": "North Korean Won",
			"KRW": "South Korean Won",
				"KWD": "Kuwaiti Dinar",
				"KYD": "Caymanian Dollar",
				"KZT": "Kazakhstani Tenge",
			"LAK": "Lao or Laotian Kip",
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
			"MXN": "Mexican Peso",
			"MYR": "Malaysian Ringgit",
				"MZN": "Mozambican Metical",
				"NAD": "Namibian Dollar",
			"NGN": "Nigerian Naira",
				"NIO": "Nicaraguan Cordoba",
			"NOK": "Norwegian Krone",
				"NPR": "Nepalese Rupee",
			"NZD": "New Zealand Dollar",
				"OMR": "Omani Rial",
				"PAB": "Panamanian Balboa",
				"PEN": "Peruvian Nuevo Sol",
				"PGK": "Papua New Guinean Kina",
			"PHP": "Philippine Peso",
				"PKR": "Pakistani Rupee",
			"PLN": "Polish Zloty",
				"PYG": "Paraguayan Guarani",
				"QAR": "Qatari Riyal",
				"RON": "Romanian New Leu",
				"RSD": "Serbian Dinar",
			"RUB": "Russian Ruble",
				"RWF": "Rwandan Franc",
			"SAR": "Saudi Arabian Riyal",
				"SBD": "Solomon Islander Dollar",
				"SCR": "Seychellois Rupee",
				"SDG": "Sudanese Pound",
			"SEK": "Swedish Krona",
			"SGD": "Singapore Dollar",
				"SHP": "Saint Helenian Pound",
				"SLL": "Sierra Leonean Leone",
				"SOS": "Somali Shilling",
				"SPL": "Seborgan Luigino",
				"SRD": "Surinamese Dollar",
				"STD": "Sao Tomean Dobra",
				"SVC": "Salvadoran Colon",
				"SYP": "Syrian Pound",
				"SZL": "Swazi Lilangeni",
			"THB": "Thai Baht",
				"TJS": "Tajikistani Somoni",
				"TMT": "Turkmenistani Manat",
				"TND": "Tunisian Dinar",
				"TOP": "Tongan Pa'anga",
			"TRY": "Turkish Lira",
				"TTD": "Trinidadian Dollar",
				"TVD": "Tuvaluan Dollar",
			"TWD": "Taiwan New Dollar",
				"TZS": "Tanzanian Shilling",
			"UAH": "Ukrainian Hryvna",
				"UGX": "Ugandan Shilling",
			"USD": "US Dollar",
				"UYU": "Uruguayan Peso",
				"UZS": "Uzbekistani Som",
				"VEF": "Venezuelan Bolivar",
			"VND": "Vietnamese Dong",
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
			"ZAR": "South African Rand",
				"ZMW": "Zambian Kwacha",
				"ZWD": "Zimbabwean Dollar"
		},

		tips: [
			{
				title: 'How to delete an item?',
				content: ''
			},
			{
				title: 'How do I track incomes?',
				content: ''
			},
			{
				title: 'How to view the beautiful charts?',
				content: ''
			},
			{
				title: 'Story behind DailyCost?',
				content: ''
			}
		],

		quotes: [
			'The future is full of secrets<br />The past can never keep'
		]
	});

}(DAILYCOST || {}));
