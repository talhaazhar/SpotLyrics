import { Url } from 'url';

export interface ICacheObject {
    data: any;
    fetchTime: number;
}

export interface IBaseGenre {
    name: string;
    icon: Url;

    getCount(): number;
}

export interface IGetSongName {
    apikey: string;
    format: string;
    callback: string;
    q_track: string;
    quorum_factor: number;
}

export interface IResponse<T> {
    message: IMessage<T>;
}

export interface IMessage<T> {
    header: IHeader;
    body: T;
}

export interface IHeader {
    status_code: number;
    execute_time: number;
    available: number;
}

export interface IGetSongNameBody {
    track_list?: ITrackListEntity[] | null;
}

export interface ITrackListEntity {
    track: ITrack;
}

export interface ITrack {
    track_id: number;
    track_name: string;
    track_name_translation_list?: (ITrackNameTranslationListEntity | null)[] | null;
    track_rating: number;
    commontrack_id: number;
    instrumental: number;
    explicit: number;
    has_lyrics: number;
    has_subtitles: number;
    has_richsync: number;
    num_favourite: number;
    album_id: number;
    album_name: string;
    artist_id: number;
    artist_name: string;
    track_share_url: string;
    track_edit_url: string;
    restricted: number;
    updated_time: string;
    primary_genres: IPrimaryGenres;
}

export interface ITrackNameTranslationListEntity {
    track_name_translation: ITrackNameTranslation;
}

export interface ITrackNameTranslation {
    language: string;
    translation: string;
}

export interface IPrimaryGenres {
    music_genre_list?: (IMusicGenreListEntity | null)[] | null;
}

export interface IMusicGenreListEntity {
    music_genre: IMusicGenre;
}

export interface IMusicGenre {
    music_genre_id: number;
    music_genre_parent_id: number;
    music_genre_name: string;
    music_genre_name_extended: string;
    music_genre_vanity: string;
}
