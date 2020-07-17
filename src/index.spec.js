const { filter } = require ('./filter');
const { map } = require ('./map');

const { groupBy } = require ('./notifications');

describe('Filter function', () => {
	test('Should filter array', () => {
		expect(filter([7, 2, 89, 3, 56, 34], function (item) {return item > 14})).toEqual([89, 56, 34]);
	})
})
	
describe('Map function', () => {
	test('Should map array', () => {
		expect(map([5, 2, 1, 56, 4], function(item) {return item * 2})).toEqual(([10, 4, 2, 112, 8]))
	})
})

describe('Notifications', () => {
	test('Should reduce array', () => {
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
			];
		expect(groupBy(tiger, 'Founded')).toEqual({
  '23.05.2019': [ 'Cool building', 'Shops opening', 'Art space' ],
  '25.05.2019': [ 'New building' ],
  '29.05.2019': [ 'Colored building' ]
}
)
	})
})