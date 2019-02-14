import React from 'react';
import styles from './form.css';
import isForm from '../../../lib/is-form';
import Form from 'design-system/lib//form';
import NumberInput from 'design-system/lib//number-input';
import SelectInput from 'design-system/lib//select-input';
import Button from 'design-system/lib//button';

export default isForm(({ form, users }) => (
	<Form {...form} className={styles['input-wrapper']}>
		<SelectInput
			label="User"
			name="userId"
			options={users.map(({ id, name }) => ({ value: id, label: name }))}
			{...form}
		/>
		<NumberInput
			name="amount"
			label="Amount"
			{...form}
		/>
		<Button type="submit" block disabled={form.isSubmitting}>
			{ 'Submit' }
		</Button>
	</Form>
));
