import Vue, { PropOptions } from 'vue';

export default Vue.extend({
	name: 'StampComponent',

	props: {
		type: {
			type: String,
			required: true
		} as PropOptions<string>
	},

	methods: {
		makeUrl(oid: string, candid: string, type: string): string {
			return this.baseUrl
			+'oid='+oid
			+'&candid='+candid
			+'&format=png'
			+'&type='+type
		}
	},

	data() {
		return {
			baseUrl: 'https://avro.alerce.online/get_stamp?'
		}
	},

	render(): Vue.VNode {
		const renderStamp = (type: string) => {
			return (
				<v-card tile max-width='340'>
					<v-container>
					<v-row no-gutters>
						<v-col>
							<v-img
								src={
									this.makeUrl(
										this.$store.getters['selected/getCandidate'].oid,
										this.$store.getters['selected/getDetection'].candid,
										type
									)
								}
							>
						</v-img>
						</v-col>
					</v-row>
					
					<v-row no-gutters>
						<v-col>
							{type.charAt(0).toUpperCase() + type.slice(1)} stamp
						</v-col>
						<v-col>
								<v-btn block
									href={
										this.makeUrl(
											this.$store.getters['selected/getCandidate'].oid,
											this.$store.getters['selected/getDetection'].candid,
											type
										)
									}
								>
									Download
								</v-btn>
						</v-col>
					</v-row>
					</v-container>
				</v-card>
			)
		}
		return (
				<div>
					{ renderStamp(this.type) }
				</div>
			
		)
	}
})
