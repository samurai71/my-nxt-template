/* eslint-disable no-console */
'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

/**
 * Description placeholder
 *
 * @type {*}
 */
const formSchema = z.object({
  name: z.string().min(2),
  phone: z.string().optional(),
  email: z.string(),
  comment: z.string(),
})

/**
 * Description placeholder
 *
 * @export
 * @returns {*}
 */
export default function MyForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // eslint-disable-next-line no-undef
      console.log(values)
      toast(
        <pre className="mt-2 w-85 rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      )
    } catch (error) {
      // eslint-disable-next-line no-undef
      console.error('Form submission error', error)
      toast.error('Failed to submit the form. Please try again.')
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto max-w-3xl space-y-8 py-10"
      >
        <Field>
          <FieldLabel htmlFor="name">Name</FieldLabel>
          <Input id="name" placeholder="John Doe" {...form.register('name')} />
          <FieldDescription>This is your name</FieldDescription>
          <FieldError>{form.formState.errors.name?.message}</FieldError>
        </Field>
        <Field>
          <FieldLabel htmlFor="phone">Phone number</FieldLabel>
          <Input
            id="phone"
            placeholder="Placeholder"
            {...form.register('phone')}
          />
          <FieldDescription>Enter your phone number.</FieldDescription>
          <FieldError>{form.formState.errors.phone?.message}</FieldError>
        </Field>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            placeholder="anyone@email.com"
            {...form.register('email')}
          />
          <FieldDescription>This is your email</FieldDescription>
          <FieldError>{form.formState.errors.email?.message}</FieldError>
        </Field>
        <Field>
          <FieldLabel htmlFor="comment">Comment/Feedback</FieldLabel>
          <Textarea
            id="comment"
            placeholder="Comment/Feedback"
            {...form.register('comment')}
          />
          <FieldDescription>Your comment or feedback</FieldDescription>
          <FieldError>{form.formState.errors.comment?.message}</FieldError>
        </Field>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
