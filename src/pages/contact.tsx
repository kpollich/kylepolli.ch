import React from 'react'
import styled from 'styled-components'

import { Layout } from '../components/Layout'

const Form = styled.form`
  margin-top: 4rem;
  max-width: 600px;

  > div {
    margin-bottom: 2rem;
  }

  label {
    display: block;
  }

  textarea {
    resize: vertical;
    width: 100%;
  }
`

enum formActions {
  changeField = 'CHANGE_FIELD',
  submit = 'SUBMIT',
  receiveResponse = 'RECEIVE_RESPONSE',
  error = 'ERROR'
}

interface FormAction {
  type: formActions
  payload?: any
}

interface ContactFormState {
  isSubmitting: boolean
  hasError: boolean
  didSucceed: boolean
  name: string
  email: string
  message: string
}

const initialState: ContactFormState = {
  isSubmitting: false,
  hasError: false,
  didSucceed: false,
  name: '',
  email: '',
  message: ''
}

function formReducer(
  state: ContactFormState,
  action: FormAction
): ContactFormState {
  switch (action.type) {
    case formActions.changeField:
      return { ...state, ...{ [action.payload.name]: action.payload.value } }
    case formActions.submit:
      return { ...state, isSubmitting: true, hasError: false }
    case formActions.receiveResponse:
      return {
        ...initialState,
        didSucceed: true
      }
    case formActions.error:
      return {
        ...state,
        isSubmitting: false,
        hasError: true
      }
  }
}

const ContactPage = () => {
  const [state, dispatch] = React.useReducer(formReducer, initialState)

  const handleChange = (e: any) => {
    dispatch({
      type: formActions.changeField,
      payload: { name: e.target.name, value: e.target.value }
    })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()

    dispatch({ type: formActions.submit })

    const encode = (data: any) => {
      return Object.keys(data)
        .map(
          key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
        )
        .join('&')
    }

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...state })
    })
      .then(() => {
        dispatch({ type: formActions.receiveResponse })
      })
      .catch(error => {
        console.error(error)
        dispatch({ type: formActions.error })
      })
  }

  return (
    <Layout>
      <h1>Contact</h1>

      <p>
        If you'd like to get in touch regarding an opportunity, or would just
        like to ask a question, I'm happy to respond to inquiries from this
        form.
      </p>

      <Form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <input name="bot-field" style={{ display: 'none' }} />

        <div>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            required
            value={state.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Your Email</label>
          <input
            type="email"
            name="email"
            required
            value={state.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Message</label>
          <textarea
            name="message"
            rows={10}
            required
            value={state.message}
            onChange={handleChange}
          />
        </div>

        {state.didSucceed && <p>Your inquiry has been received. Thank you.</p>}

        <div>
          <button type="submit">Send</button>
        </div>
      </Form>
    </Layout>
  )
}

export default ContactPage
