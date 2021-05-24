import { Detection } from '@/Classes/Detection/Entity/detection.types';
import Vue, { PropOptions } from 'vue';

export default Vue.extend({
	name: 'SummaryComponent',

	props: {
		detection: {
			type: Object,
			required: true
		} as PropOptions<Detection>
	},
	methods: { },
	data() { return { } }, 

	render(): Vue.VNode {

		return (
			<v-card tile>
				<v-container fluid>
					<span style={{fontSize: '110%'}}>
						CandID: {this.detection.candid}
					</span><br />
					<span style={{fontSize: '90%'}}>
						Band: {
							(this.detection.fid===1)
								?<span style={{color:'green'}}>g</span>
								:<span style={{color:'red'}}>r</span>
							}
					</span><br /><br />
					<span style={{fontSize: '75%'}}>
						<v-row>
							<v-col>
								MJD: {this.detection.mjd}<br />
								RA: {this.detection.ra}<br />
								DEC: {this.detection.dec}<br />
							</v-col>
							<v-col>
								Distance: {this.detection.distnr} arcsec<br />
								Magnitude: {this.detection.magpsf}
							</v-col>
						</v-row>
						<br /><br />
					</span>

				</v-container>
			</v-card>
		)
	}
})
