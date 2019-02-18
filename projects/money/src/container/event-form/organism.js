import React from 'react';
import isForm from '../../lib/is-form';
import Form from 'design-system/lib/form';
import TextInput from 'design-system/lib/text-input';
import DatePicker from 'design-system/lib/datepicker';
import Link from 'design-system/lib/link';
import Button from 'design-system/lib/button';
import styles from './organism.css';


export default isForm(({ form }) => (
	<Form {...form}>
		<TextInput name="name" label="Name" {...form} />
		<DatePicker name="from" label="Von" {...form} />
		<DatePicker name="until" label="Bis" {...form} />

		<nav className={styles.navigation}>
			<Button type="submit" block disabled={form.isSubmitting}>
				{'Submit'}
			</Button>
		</nav>
	</Form>
));
