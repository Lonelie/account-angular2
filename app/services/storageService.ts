export class StorageService {
	saveJson(key: string, data: any) {
		localStorage.setItem(key, JSON.stringify(data));
	}

	loadJson(key: string) {
		let json = JSON.parse(localStorage.getItem(key));
		return json ? json : [];
	}
}