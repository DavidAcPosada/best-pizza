import {useTranslation} from "react-i18next";

import { ValidationsMessages } from 'lib/validations/interface'

const useValidationsMessages = (validationsSchema: (values: ValidationsMessages) => any) => {
  const { t } = useTranslation('validations')

  return validationsSchema({
    required: t('validations:required', 'Campo requerido'),
    emailInvalid: t('validations:email_invalid', 'Correo electrónico inválido'),
    onlyNumbers: t('validations:only_numbers', 'Sólo se permiten números')
  })
}

export default useValidationsMessages