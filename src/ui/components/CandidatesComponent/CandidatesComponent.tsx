import { Candidate } from '@/Classes/Candidate/Entity/candidate.types';
import Vue, { PropOptions } from 'vue';

export default Vue.extend({
	name: 'CandidatesComponent',

	props: {
		candidates: {
			type: Array,
			required: true
		} as PropOptions<Candidate[]>
	},

	data () {
		return {
			isLoggedIn: false,
			selectedCandidate: '',
			headers: [
				{ text: 'ObjectID', sortable: false, value: 'oid'},
				{ text: 'N° of Detections', sortable: false, value: 'ndet' },
				{ text: 'Probability', sortable: false, value: 'probability' },
				{ text: 'Actions', sortable: false, value: 'actions' }
			]
		}
	},

	methods: {
		async selectCandidate(cand: Candidate) {
			await this.$store.dispatch('selected/deselect');
			await this.$store.dispatch('selected/setCandidate', cand);
			await this.$store.dispatch('detection/getDetections', this.$store.getters['selected/getCandidate'].oid);
			await this.$store.dispatch('selected/setDetection', this.$store.getters['detection/getFirst']);
		},

		rowClicked(row: Candidate) {
			this.selectedCandidate = row.oid;
			this.selectCandidate(row);
		},

		keyPressed(e: KeyboardEvent) {
			const index = this.candidates.map((x) => (x.oid)).indexOf(this.selectedCandidate);
			if (e.key=='ArrowUp' && index > 0) {
				this.selectedCandidate = this.candidates[index-1].oid;
				this.selectCandidate(this.candidates.filter(a => a.oid === this.selectedCandidate)[0]);

			}
			else if (e.key=='ArrowDown' && index < 9) {
				this.selectedCandidate = this.candidates[index+1].oid;
				this.selectCandidate(this.candidates.filter(a => a.oid === this.selectedCandidate)[0]);
			}
		}
	},

	created() {
		window.addEventListener('keydown', this.keyPressed);
	},

	destroyed() {
		window.removeEventListener('keydown', this.keyPressed);
	},

	mounted() {
		this.selectedCandidate = this.candidates[0].oid;
	},

	render(): Vue.VNode {
		const renderTable = () => {
			return (
				<v-data-table

					headers={this.headers}
					items={this.candidates}
					item-key={'oid'}
					scopedSlots={
						{
							'item': (item: Record<string, any>) => (
								<tr
									style={this.selectedCandidate===item.item.oid?
										{
											color: 'black',
											backgroundColor: 'white'
										}:{}
									}
									on={{
										click: (): void => {
											this.rowClicked(item.item)
										},
									}}
								>
									<td>{item.item.oid}</td>
									<td>{item.item.ndet}</td>
									<td>{item.item.probability}</td>
									<td>
										<v-btn icon>
											<v-icon
												color={this.selectedCandidate===item.item.oid?'black':''}
												disabled={this.isLoggedIn?false:true}
											>
												clear
											</v-icon>
										</v-btn>
										<v-btn icon>
											<v-icon
												color={this.selectedCandidate===item.item.oid?'black':''}
												disabled={this.isLoggedIn?false:true}
											>
												done
											</v-icon>
										</v-btn>
									</td>
								</tr>
							)
						}
					}
				>
				</v-data-table>
			)
		}

		return (
			<div>
			<v-card tile>
				{ renderTable() }
			</v-card>
			</div>
		)
	}
})
