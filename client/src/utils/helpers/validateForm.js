export default ({values, errors}) => {
    const rules = {
        fullname: value => {
            if (!value) {
                errors.fullname = "Укажите имя и фамилию";
            }
        },
        firstname: value => {
            if(!value) {
                errors.firstname = "Укажите имя"
            }
        },
        email: value => {
            if (!value) {
                errors.email = 'Введите E-Mail'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
                errors.email = 'Неверный E-Mail'
            }
        },
        address: value => {
            if (!value) {
                errors.address = 'Введите адрес'
            } 
        },
        text: value => {
            if (!value) {
                errors.text = 'Введите сообщение'
            } 
        },
        phone: value => {
            if (!value) {
                errors.phone = 'Введите номер телефона'
            } else if (!/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/i.test(value)) {
                errors.phone = 'Неверный номер телефона'
            }
        },
        password: value => {
            if (!value) {
                errors.password = 'Введите пароль'   
            } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(value)
            ) {
                errors.password = 'Слишком легкий пароль'
            }
        },
        password_2: value => {
            if (!value) {
                 errors.password_2 = 'Подтвердите пароль'
            } else if (value !==  values.password) {
                errors.password_2 = 'Пароли не совпадают'
            }
        },
        title: value => {
            if (!value) {
                errors.title = 'Введите название'
            } 
        },
        price: value => {
            if (!value) {
                errors.price = 'Введите цену'
            } 
        },
        discount: value => {
            if (values.diskountCheck && !value) {
                errors.discount = 'Введите скидку'
            } 
            if(!values.diskountCheck && value) {
                errors.discount = 'Включите скидку'
            }
        },
    }

    Object.keys(values).forEach(key => rules[key] && rules[key](values[key]))
}