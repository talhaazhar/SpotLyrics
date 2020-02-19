import { ICacheObject } from './Interfaces';
import { defaultCacheExpiry } from './constants';

export function buildQuery(data: Object): string {
    if (typeof data === 'string') return data;

    var query: string[] = [];
    for (var key in data) {
        if (data.hasOwnProperty(key)) {
            query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
        }
    }

    return query.join('&');
}

export function getLinearBackground(color: number[]): any {
    const style = {
        background: `linear-gradient(to bottom right,
                            rgba(${color[0]},${color[1]},${color[2]},${color[3]}),
                            rgba(255, 233, 23, 0.2))`,
    };

    return style;
}

export function cachedFetch(url: string, expiry: number = defaultCacheExpiry) {
    let cacheKey = url;
    let cached: string = localStorage.getItem(cacheKey);
    let cacheObject: ICacheObject = JSON.parse(cached);
    let whenCached: number = cacheObject.fetchTime;

    if (cacheObject !== null && whenCached !== null) {
        let age = (Date.now() - whenCached) / 1000;
        if (age < expiry) {
            return Promise.resolve(cacheObject);
        } else {
            localStorage.removeItem(cacheKey);
            localStorage.removeItem(cacheKey + ':ts');
        }
    }
}
