import { Celestial } from 'd3-celestial';
import Vue from 'vue';

require('d3-celestial/celestial.css');
require('d3-celestial/celestial.js');

const celestial = Celestial();

export default Vue.extend({
	name: 'CelestialMapComponent',

	async mounted() {
		const selectedPoint = {
			type: 'FeatureCollection',
			features: [
				{
					type: 'Feature',
					id: this.$store.getters['selected/getDetection'].candid,
					properties: {
						name: this.$store.getters['selected/getDetection'].candid,
						type: 'sn'
					},
					geometry: {
						type: 'Point',
						coordinates: [
							this.$store.getters['selected/getDetection'].ra,
							this.$store.getters['selected/getDetection'].dec
						]
					}
				}
			]
		}
		
		const config = {
			width: 310,
			controls: false,
			datapath: 'https://ofrohn.github.io/data/',
			planets:  {
				show: false
			},
			stars: {
				show: false
			},
			dsos: {
				show: false,
				limit: 30
			},
			constellations: {
				show: false,
				names: false,
				lines: false,
				bounds: false
			},
			transform: 'equatorial',
			background: {
				fill: '#8778d2',
				opacity: 1
			},
			mw:{
				show: true,
				style: {
					fill: '#ffffff',
					opacity: 0.3
				}
			},
			lines: {
				graticule: {
					show: true,
					stroke: '#cccccc',
					width: 0.6,
					opacity: 0.8,
					lon: {
						pos: ['center'],
						fill: '#eee',
						font: '9px Helvetica, Arial, sans-serif'
					},
					lat: {
						pos: ['center'],
						fill: '#eee',
						font: '9px Helvetica, Arial, sans-serif'
					}
				}
			}
		};

		celestial.add({
			type: 'raw',
			callback: function () {
				const dsn = celestial.getData(selectedPoint, config.transform);
				celestial.container.selectAll('.sn')
					.data(dsn.features)
					.enter().append('path')
					.attr('class', 'sn')
					.attr('id', (d: any) => (d.id));
				celestial.redraw();
			},
			redraw: function() {
				celestial.container.selectAll('.sn').each(function(d: any) {
					const pt = celestial.mapProjection(d.geometry.coordinates);
					celestial.setStyle({
						stroke: '#534B8C',
						width: 3,
						fill: 'rgba(255, 204, 255, 0.8)'
					});
					celestial.context.beginPath();
					celestial.context.arc(pt[0], pt[1], 4, 0, 2 * Math.PI);
					celestial.context.closePath();
					celestial.context.stroke();
					celestial.context.fill();
				})
			}
		});

		celestial.display(config);
	},

	render(): Vue.VNode {

		return (
			<v-card tile max-width='340'>
				<v-container fluid>
					<div id='celestial-map'></div>
				</v-container>
			</v-card>
		)
	}
})