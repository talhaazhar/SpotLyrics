export function buildQuery(data: Object): string {

    if (typeof (data) === 'string') return data;

    var query: string[] = [];
	for (var key in data) {
		if (data.hasOwnProperty(key)) {
			query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
		}
	}

    return query.join('&');
};
