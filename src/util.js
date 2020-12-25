import { v4 as uuidv4 } from 'uuid';

function chillHop() {
	return [
		{
			name: '',
			cover: '',
			artist: '',
			audio: '',
			color: '',
			id: uuidv4(),
			active: true
		},
		{
			name: '',
			cover: '',
			artist: '',
			audio: '',
			color: '',
			id: uuidv4(),
			active: false
		}
	]
}

export default chillHop;