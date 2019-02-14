import React from 'react';
import isForm from '../../lib/is-form';
import Form from 'design-system/lib/form';
import TextInput from 'design-system/lib/text-input';
import Link from 'design-system/lib/link';
import Button from 'design-system/lib/button';
import styles from './organism.css';

export default isForm(({ form }) => (
	<Form {...form}>
		<TextInput name="name" label="Name" {...form} />
		<TextInput name="email" label="Email" {...form} />
		<TextInput name="password" label="Password" {...form} />
		<nav className={styles.navigation}>
			<Button type="submit" disabled={form.isSubmitting} block>
				{ 'Sign up' }
			</Button>
		</nav>
	</Form>
));
