import type { ComponentProps } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormControl, FormField, FormItem, FormLabel } from './form';
import { Textarea } from './textarea';

type Props = {
    name: string;
    label?: string;
} & ComponentProps<'textarea'>;

export const TextareaField = ({ name, label, ...props }: Props) => {
    const {
        control,
        formState: { isSubmitting },
    } = useFormContext();

    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className="w-full">
                    {label && <FormLabel>{label}</FormLabel>}

                    <FormControl>
                        <Textarea {...field} {...props} disabled={isSubmitting} />
                    </FormControl>
                </FormItem>
            )}
        />
    );
};
