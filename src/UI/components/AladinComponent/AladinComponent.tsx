import Vue from 'vue';
import Aladin from '@alerce/components/components/misc/Aladin.vue';

import './AladinComponent.css'

export default Vue.extend({
	name: 'AladinComponent',

	async mounted() {
		console.log('mounted')
	},

	data() {
		return {
			selectedCandidate: this.$store.getters['selected/getCandidate']
		}
	},

	render(): Vue.VNode {

		return (
			<v-card tile>
				<v-container fluid>
					<Aladin
						v-model={this.selectedCandidate}
						objects={this.$store.getters['candidate/get']}
					/>
				</v-container>
			</v-card>
		)
	}
})