const pool = require("../config/connection");

class Venue {
	constructor(){
		this.pool = pool;
    }

    async addNew(apiId, name, lat, lon, address, phone){
        let query = `insert into venue(api_id, name, lat, lon, address, phone) values 
        ('${apiId}', '${name}', ${lat}, ${lon}, '${address}', '${phone}');`;
		try {
			await this.pool.query(query);
			return 1;
		}
		catch(error) {
			return error;
		}
    }

    async getDetails(venueId){
        let query = `select * from venue where id = ${venueId};`;
		try {
			let result = await this.pool.query(query);
			return result;
		}
		catch(error) {
			return error;
		}
    }

    async getAll(){
        let query = `select * from venue`;
		try {
			let result = await this.pool.query(query);
			return result;
		}
		catch(error) {
			return error;
		}
	}
	
	async update(venueId, apiId, name, lat, lon, address, phone){
		let query = `update venue 
					set api_id = ${apiId}, name = ${name}, lat = ${lat}, lon = ${lon}, address = ${address}, phone = ${phone}
					where id = ${venueId} `;
		try {
			await this.pool.query(query);
			return 1;
		}
		catch(error) {
			return error;
		}
	}
	
	async updateEvent(){
        let query = ``;
		try {
			await this.pool.query(query);
			return 1;
		}
		catch(error) {
			return error;
		}
    }
}