import axios from 'axios';

export function getPhotos(id, page) {
	const category = id ? `category=${id}` : '';

	return axios.get(
		`https://639feef024d74f9fe82a336f.mockapi.io/photos?page=${page}&limit=3&${category}`
	);
}
