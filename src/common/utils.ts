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

export function getLinearBackground(color: number[]): any {
    const style = {
        background: `linear-gradient(to bottom right,
                            rgba(${color[0]},${color[1]},${color[2]},${color[3]}),
                            rgba(255, 233, 23, 0.2))`,
    };

    return style;
}
