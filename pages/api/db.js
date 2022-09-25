const mongoose = require('mongoose')

const url = `mongodb+srv://patelpreet0812:nJVmHPPemigwCsYX@cluster0.35tjs3u.mongodb.net/?retryWrites=true&w=majority`;

const connectionParams={
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    })


//     import { Collection, Cursor, Db, MongoClient } from 'mongodb';
// import { textChangeRangeIsUnchanged } from 'typescript';
// import util from 'util';

// interface result<type> {
// 	result: string;
// 	code: string;
// 	data?: type;
// }

// interface dbListOptions {
// 	getFullData?: boolean;
// }
// interface dbListData {
// 	databases: { name: string; sizeOnDisk: bigint; empty: boolean }[];
// 	totalSize: bigint;
// 	ok: bigint;
// }

// interface colListOptions {
// 	getFullData?: boolean;
// }

// class db {
// 	mongoUrl: string = 'mongodb://127.0.0.1:27017/?retryWrites=true&w=majority';

// 	mongoOptions: object = { useNewUrlParser: true, useUnifiedTopology: true };

// 	mongoClient: MongoClient = new MongoClient(
// 		this.mongoUrl,
// 		this.mongoOptions
// 	);

// 	cursorDatabase?: Db;

// 	cursorCollection?: Collection;

// 	cursor?: Cursor;

// 	constructor(database?: string, collection?: string) {
// 		if (database) {
// 			const client = this.mongoClient;
// 			client.connect().then(() => {
// 				this.cursorDatabase = client.db(database);
// 				if (collection) {
// 					this.cursorDatabase.collection(
// 						collection,
// 						{ strict: true },
// 						(err, col) => {
// 							this.cursorCollection = col;
// 							client.close();
// 						}
// 					);
// 				}
// 			});
// 		}
// 	}

// 	async connect() {
// 		if (!this.mongoClient.isConnected()) {
// 			console.log(this.mongoClient.isConnected())
// 			await this.mongoClient.connect();
// 			console.log("Connected")
// 		}
// 	}

// 	async close() {
// 		if (this.mongoClient.isConnected()) {
// 			console.log(this.mongoClient.isConnected())
// 			await this.mongoClient.close();
// 			console.log("Disconnected")
// 		}
// 	}

// 	async listDatabases(options: dbListOptions = {}) {
// 		const client = this.mongoClient;
// 		let result: result<any>;
// 		try {
// 			console.log("Pre-Pre-Connect")
// 			await this.connect();
// 			console.log("Post-Connect")
// 			const data: dbListData = await client
// 				.db('admin')
// 				.admin()
// 				.listDatabases();
// 			result = {
// 				result: 'SUCCESS',
// 				code: 'GOT DATABASES',
// 				data,
// 			};
// 		} catch (error) {
// 			return { result: 'ERROR', code: error };
// 		} finally {
// 			console.log("Pre-Pre-Disconnect")
// 			await this.close();
// 			console.log("Post-Disconnect")
// 		}
// 		result ||= { result: 'ERROR', code: 'UNKNOWN ERROR' };
// 		if (!options.getFullData && result.data) {
// 			if (!Array.isArray(result.data)) {
// 				result.data = Array.from(
// 					result.data.databases,
// 					(obj: { name: string }) => obj.name
// 				);
// 			}
// 		}
// 		return result;
// 	}

// 	get databases() {
// 		return this.listDatabases();
// 	}

// 	async setDatabase(dbName: string, options: colListOptions = {}) {
// 		const client = this.mongoClient;
// 		let result: result<Collection[]>;
// 		try {
// 			console.log("Pre-Pre-Connect")
// 			await this.connect();
// 			console.log("Post-Connect")
// 			this.cursorDatabase = client.db(dbName);
// 			const colListResult: result<Collection[]> =
// 				await this.listCollections();
// 			const data: Collection[] | undefined = await colListResult.data;
// 			result = data
// 				? {
// 					result: 'SUCCESS',
// 					code: 'SET DATABASE AND GOT COLLECTIONS',
// 					data,
// 				  }
// 				: {
// 					result: 'ERROR',
// 					code: 'COULD NOT GET COLLECTIONS',
// 				  };
// 		} catch (error) {
// 			return { result: 'ERROR', code: error };
// 		} finally {
// 			console.log("Pre-Pre-Disconnect")
// 			await this.close();
// 			console.log("Post-Disconnect")
// 		}
// 		result ||= { result: 'ERROR', code: 'UNKNOWN ERROR' };
// 		if (result.data?.length === 0) {
// 			result = { result: 'WARN', code: 'DATABASE EMPTY', data: [] };
// 		}
// 		return result;
// 	}

// 	async listCollections(options: colListOptions = {}, dbName?: string) {
// 		const client = this.mongoClient;
// 		let result: result<any>;
// 		try {
// 			const database: Db | undefined = dbName
// 				? client.db(dbName)
// 				: this.cursorDatabase;
// 			if (database) {
// 				console.log("Pre-Pre-Connect")
// 				await this.connect();
// 				console.log("Post-Connect")
// 				const data: Collection[] = await database.collections();
// 				result = {
// 					result: 'SUCCESS',
// 					code: 'GOT COLLECTIONS',
// 					data,
// 				};
// 			} else {
// 				result = { result: 'ERROR', code: 'NO DATABASE PROVIDED' };
// 			}
// 		} catch (error) {
// 			console.dir(error);
// 		} finally {
// 			console.log("Pre-Pre-Disconnect")
// 			await this.close();
// 			console.log("Post-Disconnect")
// 		}
// 		result ||= { result: 'ERROR', code: 'UNKNOWN ERROR' };
// 		if (!options.getFullData && result.data) {
// 			if (!Array.isArray(result.data)) {
// 				result.data = Array.from(
// 					result.data.databases,
// 					(obj: { name: string }) => obj.name
// 				);
// 			}
// 		}
// 		return result;
// 	}
// }

// export default db;
// export { result, dbListData };

// (async function () {
// 	const testdb = await new db();
// 	const databases: result<dbListData> = await testdb.listDatabases();
// 	console.log(util.inspect(databases, true, 3));
// 	const collections: result<Collection[]> = await testdb.setDatabase('storage');
// 	console.log(util.inspect(collections, true, 2));
// })();