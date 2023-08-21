import dreamer from '/dreamer.jpg'
import alliwantisyou from '/alliwantisyou.jpg'
import funkandbass from '/funkandbass.jpg'
import orchid from '/orchid.jpg'
import unchained from '/unchained.jpg'
import yatuza from '/yatuza.jpg'
import unveiled from '/unveiled.jpg'

interface Release {
  id: string,
  soundcloudId: number,
  img: string
}

export const releases: Release[] = [
	{
		id: 'unveiled',
		soundcloudId: 1342565455,
		img: unveiled
	},
	{
		id: 'unchained',
		soundcloudId: 1196616841,
		img: unchained
	},
	{
		id: 'yatuza',
		img: yatuza,
		soundcloudId: 1567961161
	},
	{
		id: 'orchid',
		img: orchid,
		soundcloudId: 1554278137
	},
	{
		id: 'dreamer',
		img: dreamer,
		soundcloudId: 898183684
	},
	{
		id: 'alliwantisyou',
		img: alliwantisyou,
		soundcloudId: 863850649
	},
	{
		id: 'funkandbass',
		img: funkandbass,
		soundcloudId: 525481956
	}
]