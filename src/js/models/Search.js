import axios from 'axios';
// https://www.food2fork.com/api/search
// 1966420a4f6ccb68ad55ad72df44fb99 key1
// c3e079bc3700b469cdb76eea467535d2 key2
export default class Search {
	constructor(query) {
		this.query = query;
	}
	async getResults() {
		const key = 'c3e079bc3700b469cdb76eea467535d2';
		try {
			const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
			this.result = res.data.recipes;
		} catch (err) {
			alert(err);
		}
	}
}
