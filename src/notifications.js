const notifications = [
 {
  date: '31/07/2019',
  msg: 'Hello'
 },
 {
  date: '23/03/2023',
  msg: 'Bye'
 },
 {
  date: '31/07/2019',
  msg: 'Hello'
 },
 {
  date: '31/07/2019',
  msg: 'Bonjour'
 },
 {
  date: '08/01/2006',
  msg: 'Opel'
 },
 {
  date: '31/07/2019',
  msg: 'Bro'
 },
 {
  date: '31/07/2019',
  msg: 'Super'
 },
 {
  date: '31/07/2019',
  msg: 'Super'
 },
];

function groupBy (arr, property) {
	return arr.reduce(function (acc, item) {
	const key = item[property];

	if (!acc[key]) {
		acc[key] = [];
	}

	acc[key].push(item.msg);

	return acc;
}, {})
}

const groupByDate = groupBy(notifications, 'date');

console.log('Group by date: ', groupByDate);


const tiger = [
				{
					Founded: '23.05.2019',
					msg: 'Cool building'
				},
				{
					Founded: '25.05.2019',
					msg: 'New building'
				},
				{
					Founded: '29.05.2019',
					msg: 'Colored building'
				},
				{
					Founded: '23.05.2019',
					msg: 'Shops opening'
				},
				{
					Founded: '23.05.2019',
					msg: 'Art space'
				},
			]
const lion = groupBy(tiger, 'Founded');
console.log(lion)

module.exports = { groupBy };
