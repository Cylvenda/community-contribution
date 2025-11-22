import { type ReactNode } from 'react'
import { Controller, type ControllerProps, type FieldPath, type FieldValues } from 'react-hook-form'
import { Field, FieldLabel, FieldError } from '../ui/field'
import { Input } from '../ui/input'

type FormControlProps<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
    TTransformedValues = TFieldValues> = {
        name: TName,
        label: ReactNode,
        placeholder?: string,
        type?: string,
        control: ControllerProps<TFieldValues, TName, TTransformedValues>["control"]
    }

type FormBaseProps<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
    TTransformedValues = TFieldValues> =
    FormControlProps<TFieldValues, TName, TTransformedValues> & {
        children: (field: Parameters<ControllerProps<TFieldValues, TName,
            TTransformedValues>["render"]>[0]["field"] & {
                "aria-invalid": boolean,
                id: string,
            },
            inputProps?: { placeholder?: string; type?: string }
        ) => ReactNode
    }

type FormControlFunction = <TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
    TTransformedValues = TFieldValues>(
        props: FormControlProps<TFieldValues, TName, TTransformedValues>
    ) => ReactNode

function FormBase<TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
    TTransformedValues = TFieldValues>(
        { children, control, name, label, type, placeholder }: FormBaseProps<TFieldValues, TName, TTransformedValues>) {
    return (
        <Controller control={control}
            name={name}
            render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>{label}</FieldLabel>
                    {children(
                        {
                            ...field,
                            id: field.name,
                            "aria-invalid": fieldState.invalid
                        },
                        {
                            placeholder: placeholder,
                            type: type || "text"
                        }
                    )}
                    {fieldState.invalid && (<FieldError errors={[fieldState.error]} />)}
                </Field>
            )} />
    )

}

export const InputForm: FormControlFunction = props => {
    return <FormBase {...props}>{field => <Input {...field} />}</FormBase>
}


