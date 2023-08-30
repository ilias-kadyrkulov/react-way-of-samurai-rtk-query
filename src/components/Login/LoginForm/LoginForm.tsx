import React, { FC } from 'react'
import { Field, Form, Formik } from 'formik'
import { useAppSelector } from '../../../hooks/redux'
import {
    LoginRequestType,
    useLoginMutation
} from '../../../services/auth.api'

export const LoginForm: FC = () => {
    const captchaUrl = useAppSelector((state) => state.authSlice.captchaUrl)

    const [login, {}] = useLoginMutation()

    const handleLogin = async (
        values: LoginRequestType,
        { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
    ) => {
        await login(values).then(() => setSubmitting(false))
    }

    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
                rememberMe: false,
                captcha: ''
            }}
            onSubmit={handleLogin}
        >
            {({ isSubmitting }) => (
                <Form>
                    <div>
                        <div>
                            <Field type="text" name="email" />
                        </div>
                        <div>
                            <Field type="password" name="password" />
                        </div>
                        <div>
                            <Field type="checkbox" name="rememberMe" />
                        </div>
                        {captchaUrl && <img src={captchaUrl} />}
                        {captchaUrl && <Field type="text" name="captcha" />}
                        <button type="submit" disabled={isSubmitting}>
                            Login
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}
