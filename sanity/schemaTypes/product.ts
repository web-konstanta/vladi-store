import { defineType } from 'sanity'
import { v4 as uuidv4 } from 'uuid'

export const product = defineType({
	name: 'products',
	title: 'Товары',
	type: 'document',
	initialValue: () => ({
		id: uuidv4(),
	}),
	fields: [
		{
			name: 'id',
			type: 'string',
			title: 'ID',
			readOnly: true,
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'name',
			type: 'string',
			title: 'Название',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'description',
			type: 'text',
			title: 'Описание',
		},
		{
			name: 'image',
			type: 'image',
			title: 'Изображение',
			options: {
				hotspot: true,
			},
		},
	],
})
