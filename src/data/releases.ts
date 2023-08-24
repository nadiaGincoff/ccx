import dreamer from '/dreamer.jpg'
import alliwantisyou from '/alliwantisyou.jpg'
import funkandbass from '/funkandbass.jpg'
import orchid from '/orchid.jpg'
import stronger from '/unchained.jpg'
import yatuza from '/yatuza.jpg'
import unveiled from '/unveiled.jpg'

interface Release {
  id: string,
  soundcloudId: number,
  img: string
	name: string
}

export const releases: Release[] = [
	{
		id: 'unveiled',
		soundcloudId: 1342565455,
		name: 'Unveiled',
		img: unveiled
	},
	{
		id: 'stronger',
		soundcloudId: 1196616841,
		name: 'Stronger',
		img: stronger
	},
	{
		id: 'yatuza',
		img: yatuza,
		name: 'Tactics',
		soundcloudId: 1567961161
	},
	{
		id: 'orchid',
		img: orchid,
		name: 'Orchid',
		soundcloudId: 1554278137
	},
	{
		id: 'dreamer',
		img: dreamer,
		name: 'Dreamer',
		soundcloudId: 898183684
	},
	{
		id: 'alliwantisyou',
		img: alliwantisyou,
		name: 'All I Want Is You',
		soundcloudId: 863850649
	},
	{
		id: 'funkandbass',
		img: funkandbass,
		name: 'Funk and Bass',
		soundcloudId: 525481956
	}
]