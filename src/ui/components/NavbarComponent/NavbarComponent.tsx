import Vue from 'vue'

export default Vue.extend({
	name: 'NavbarComponent',

	data() {
		return {
			showLogin: false,
			isLoginValid: false,
			isLoggedIn: false,
			username: '',
			password: ''
		}
	},

	methods: {
		toggleLogin() {
			this.showLogin=!this.showLogin
		},

		login() {
			this.isLoggedIn = true
		},

		logout() {
			this.username = ''
			this.password = ''
			this.isLoggedIn = false
			this.showLogin = false
		}
	},

	render(): Vue.VNode {

		const renderLogged = () => {
			if (!this.isLoggedIn) {
				return (
					<div>
						Log In
						<v-btn icon onClick={this.toggleLogin}>
							<v-icon>account_circle</v-icon>
						</v-btn>
						<v-dialog
							v-model={this.showLogin}
							max-width={400}
						>
						<v-card tile>
							<v-container>
								<v-form v-model={this.isLoginValid}>
									<v-row>
										<v-col>
											<span style={{fontSize: '150%'}}>Log In</span>
											<v-text-field
												v-model={this.username}
												label={'Username'}
												required
											></v-text-field>
											<v-text-field
												v-model={this.password}
												type={'password'}
												label={'Password'}
												required
											></v-text-field>
											<v-btn block onClick={this.login}>Log In</v-btn>
											<br /><br />
											<v-btn block >Log In with Google</v-btn>
										</v-col>
									</v-row>
								</v-form>
							</v-container>
						</v-card>
						</v-dialog>
					</div>
				) 
			}
			return (
				<div>
					{this.username}
					<v-btn icon onClick={this.logout}>
						<v-icon>logout</v-icon>
					</v-btn>
				</div>
				
			)
		}
		
		return (
			<v-toolbar>
				<h2>ALeRCE Hunter</h2>
				<v-spacer></v-spacer>
				{renderLogged()}
			</v-toolbar>
		)
	}
})
