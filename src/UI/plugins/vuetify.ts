import Vue from 'vue'
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import Vuetify, {
	VApp,
	VAppBar,
	VContent,
	VContainer,
	VCol,
	VRow,
	VCard,
	VCardActions,
	VImg,
	VCardText,
	VCardTitle,
	VList,
	VListItem,
	VListItemTitle,
	VListItemSubtitle,
	VListItemContent,
	VListItemGroup,
	VListItemIcon,
	VIcon,
	VTextField,
	VForm,
	VBtn,
	VProgressCircular,
	VToolbar,
	VSelect,
	VDatePicker,
	VMenu,
	VDataTable,
	VSpacer,
	VDialog,
	colors
} from 'vuetify/lib'

Vue.use(Vuetify, {
	components: {
		VApp,
		VAppBar,
		VContent,
		VContainer,
		VCol,
		VRow,
		VCard,
		VCardActions,
		VImg,
		VCardText,
		VCardTitle,
		VList,
		VListItem,
		VListItemTitle,
		VListItemSubtitle,
		VListItemContent,
		VListItemGroup,
		VListItemIcon,
		VIcon,
		VTextField,
		VForm,
		VBtn,
		VProgressCircular,
		VToolbar,
		VSelect,
		VDatePicker,
		VMenu,
		VDataTable,
		VSpacer,
		VDialog
	}
})

export const vuetify = new Vuetify({
	theme:{
		themes: {
			light: {
				primary: colors.indigo.base,
				secondary: colors.indigo.darken4,
				accent: colors.indigo.lighten3
			},
			dark: {
				primary: colors.indigo.base,
				secondary: colors.indigo.darken4,
				accent: colors.indigo.lighten3
			},
		},
		dark: true
	}
})