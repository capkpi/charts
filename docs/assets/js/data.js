import { SEC_IN_DAY, MONTH_NAMES_SHORT, clone, timestampToMidnight, timestampSec, addDays } from '../../../src/js/utils/date-utils';
import { getRandomBias } from '../../../src/js/utils/helpers';

// Composite Chart
// ================================================================================
const reportCountList = [152, 222, 199, 287, 534, 709,
	1179, 1256, 1632, 1856, 1850];

export const lineCompositeData = {
	labels: ["2007", "2008", "2009", "2010", "2011", "2012",
		"2013", "2014", "2015", "2016", "2017"],

	yMarkers: [
		{
			label: "Average 100 reports/month",
			value: 1200,
			options: { labelPos: 'left' }
		}
	],

	datasets: [{
		"name": "Events",
		"values": reportCountList
	}]
};


export const fireball_5_25 = [
	[4, 0, 3, 1, 1, 2, 1, 1, 1, 0, 1, 1],
	[2, 3, 3, 2, 1, 3, 0, 1, 2, 7, 10, 4],
	[5, 6, 2, 4, 0, 1, 4, 3, 0, 2, 0, 1],
	[0, 2, 6, 2, 1, 1, 2, 3, 6, 3, 7, 8],
	[6, 8, 7, 7, 4, 5, 6, 5, 22, 12, 10, 11],
	[7, 10, 11, 7, 3, 2, 7, 7, 11, 15, 22, 20],
	[13, 16, 21, 18, 19, 17, 12, 17, 31, 28, 25, 29],
	[24, 14, 21, 14, 11, 15, 19, 21, 41, 22, 32, 18],
	[31, 20, 30, 22, 14, 17, 21, 35, 27, 50, 117, 24],
	[32, 24, 21, 27, 11, 27, 43, 37, 44, 40, 48, 32],
	[31, 38, 36, 26, 23, 23, 25, 29, 26, 47, 61, 50],
];
export const fireball_2_5 = [
	[22, 6, 6, 9, 7, 8, 6, 14, 19, 10, 8, 20],
	[11, 13, 12, 8, 9, 11, 9, 13, 10, 22, 40, 24],
	[20, 13, 13, 19, 13, 10, 14, 13, 20, 18, 5, 9],
	[7, 13, 16, 19, 12, 11, 21, 27, 27, 24, 33, 33],
	[38, 25, 28, 22, 31, 21, 35, 42, 37, 32, 46, 53],
	[50, 33, 36, 34, 35, 28, 27, 52, 58, 59, 75, 69],
	[54, 67, 67, 45, 66, 51, 38, 64, 90, 113, 116, 87],
	[84, 52, 56, 51, 55, 46, 50, 87, 114, 83, 152, 93],
	[73, 58, 59, 63, 56, 51, 83, 140, 103, 115, 265, 89],
	[106, 95, 94, 71, 77, 75, 99, 136, 129, 154, 168, 156],
	[81, 102, 95, 72, 58, 91, 89, 122, 124, 135, 183, 171],
];
export const fireballOver25 = [
	// [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
	[1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
	[0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 2],
	[3, 2, 1, 3, 2, 0, 2, 2, 2, 3, 0, 1],
	[2, 3, 5, 2, 1, 3, 0, 2, 3, 5, 1, 4],
	[7, 4, 6, 1, 9, 2, 2, 2, 20, 9, 4, 9],
	[5, 6, 1, 2, 5, 4, 5, 5, 16, 9, 14, 9],
	[5, 4, 7, 5, 1, 5, 3, 3, 5, 7, 22, 2],
	[5, 13, 11, 6, 1, 7, 9, 8, 14, 17, 16, 3],
	[8, 9, 8, 6, 4, 8, 5, 6, 14, 11, 21, 12]
];

export const barCompositeData = {
	labels: MONTH_NAMES_SHORT,
	datasets: [
		{
			name: "Over 25 reports",
			values: fireballOver25[9],
		},
		{
			name: "5 to 25 reports",
			values: fireball_5_25[9],
		},
		{
			name: "2 to 5 reports",
			values: fireball_2_5[9]
		}
	]
};

// Demo Chart multitype Chart
// ================================================================================
export const typeData = {
	labels: ["12am-3am", "3am-6am", "6am-9am", "9am-12pm",
		"12pm-3pm", "3pm-6pm", "6pm-9pm", "9pm-12am"],

	yMarkers: [
		{
			label: "Marker",
			value: 43,
			options: { labelPos: 'left' }
			// type: 'dashed'
		}
	],

	yRegions: [
		{
			label: "Region",
			start: -10,
			end: 50,
			options: { labelPos: 'right' }
		},
	],

	datasets: [
		{
			name: "Some Data",
			values: [18, 40, 30, 35, 8, 52, 17, -4],
			axisPosition: 'right',
			chartType: 'bar'
		},
		{
			name: "Another Set",
			values: [30, 50, -10, 15, 18, 32, 27, 14],
			axisPosition: 'right',
			chartType: 'bar'
		},
		{
			name: "Yet Another",
			values: [15, 20, -3, -15, 58, 12, -17, 37],
			chartType: 'line'
		}
	]
};

export const trendsData = {
	labels: [1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976,
		1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986,
		1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996,
		1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006,
		2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016] ,
	datasets: [
		{
			values: [132.9, 150.0, 149.4, 148.0, 94.4, 97.6, 54.1, 49.2, 22.5, 18.4,
				39.3, 131.0, 220.1, 218.9, 198.9, 162.4, 91.0, 60.5, 20.6, 14.8,
				33.9, 123.0, 211.1, 191.8, 203.3, 133.0, 76.1, 44.9, 25.1, 11.6,
				28.9, 88.3, 136.3, 173.9, 170.4, 163.6, 99.3, 65.3, 45.8, 24.7,
				12.6, 4.2, 4.8, 24.9, 80.8, 84.5, 94.0, 113.3, 69.8, 39.8]
		}
	]
};

export const moonData = {
	names: ["Ganymede", "Callisto", "Io", "Europa"],
	masses: [14819000, 10759000, 8931900, 4800000],
	distances: [1070.412, 1882.709, 421.700, 671.034],
	diameters: [5262.4, 4820.6, 3637.4, 3121.6],
};

// const jupiterMoons = {
// 	'Ganymede': {
// 		mass: '14819000 x 10^16 kg',
// 		'semi-major-axis': '1070412 km',
// 		'diameter': '5262.4 km'
// 	},
// 	'Callisto': {
// 		mass: '10759000 x 10^16 kg',
// 		'semi-major-axis': '1882709 km',
// 		'diameter': '4820.6 km'
// 	},
// 	'Io': {
// 		mass: '8931900 x 10^16 kg',
// 		'semi-major-axis': '421700 km',
// 		'diameter': '3637.4 km'
// 	},
// 	'Europa': {
// 		mass: '4800000 x 10^16 kg',
// 		'semi-major-axis': '671034 km',
// 		'diameter': '3121.6 km'
// 	},
// };

// ================================================================================

let today = new Date();
let start = clone(today);
addDays(start, 4);
let end = clone(start);
start.setFullYear( start.getFullYear() - 2 );
end.setFullYear( end.getFullYear() - 1 );

export let dataPoints = {};

let startTs = timestampSec(start);
let endTs = timestampSec(end);

startTs = timestampToMidnight(startTs);
endTs = timestampToMidnight(endTs, true);

while (startTs < endTs) {
	dataPoints[parseInt(startTs)] = Math.floor(getRandomBias(0, 5, 0.2, 1));
	startTs += SEC_IN_DAY;
}

export const heatmapData = {
	dataPoints: dataPoints,
	start: start,
	end: end
};
