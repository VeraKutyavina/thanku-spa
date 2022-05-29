import React from 'react';
import * as Yup from 'yup';
import mapKeys from 'lodash/mapKeys';
import mapValues from 'lodash/mapValues';
import theme from 'public/theme';

import PasswordInput from 'components/shared/atoms/PaawordInput';
import Button from 'components/shared/atoms/Button';
import Arrow from 'public/images/icons/arrow.svg';
import { Formik, Field, ErrorMessage, Form as FormikForm, FormikProps } from 'formik';

import EmptyType from 'types/emptyType';

import {
  FormContentWrapper,
  FormContainer,
  FieldWrapper,
  FieldLabel,
  ErrorWrapper,
  InputField,
  FormActions,
  customButtonStyles
} from './styled';

// TODO: fix this types
type formType = {
  fields: any;
  submit: ({}) => void;
}

type FormProps = {
  form: formType;
};

const Form = ({ form } : FormProps) => {
  const { fields, submit } = form;

  const formByName = mapKeys(fields, 'name');
  const initialValues = mapValues(formByName, 'initialValue');
  const validationSchema = Yup.object().shape(mapValues(formByName, 'validationSchema'));

  return (
    <FormContentWrapper>
      <Formik enableReinitialize initialValues={initialValues} onSubmit={submit} validationSchema={validationSchema}>
        {({ isSubmitting, status, errors, touched } : FormikProps<EmptyType>) => (
          <FormikForm>
            <FormContainer>
              {fields.map((field, i) => {
                const { type, name, title, accept, onClick, onChange, onBlur } = field;

                const actions = Object.entries({ onClick, onChange, onBlur }).reduce(
                  (acc, [key, val]) => (val ? { ...acc, [key]: val } : { ...acc }),
                  {},
                );

                const hasError = !!(errors[name] && touched[name]);
                const isPasswordField = type === 'password';

                return (
                  <FieldWrapper key={`${name}${i}`}>
                    {title && <FieldLabel htmlFor={name}>{title}</FieldLabel>}
                    {isPasswordField ? (
                      <PasswordInput name={name} isSubmitting={isSubmitting} hasError={hasError} actions={actions} placeholder={undefined} />
                    ) : (
                      <InputField>
                        <Field
                          type="text"
                          name={name}
                          accept={accept}
                          id={name}
                          data-testid={name}
                          data-cy={name}
                          disabled={isSubmitting}
                          style={{ borderColor: hasError && theme.colors.red }}
                          {...actions}
                        />
                      </InputField>
                    )}

                    <ErrorMessage name={name}>{msg => <ErrorWrapper>{msg}</ErrorWrapper>}</ErrorMessage>
                  </FieldWrapper>
               );
              })}

              <FormActions>
                <Button customStyles={customButtonStyles} type="submit">
                    Продолжить
                  <Arrow />
                </Button>
              </FormActions>
            </FormContainer>

            {!!status && <ErrorWrapper>{status}</ErrorWrapper>}
          </FormikForm>
        )}
      </Formik>
    </FormContentWrapper>
  );
};

export default Form;