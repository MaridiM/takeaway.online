import React from 'react'

const AppContactForm = () => {
    return (
        <section className="contact-form">
            <h2>Задать вопрос</h2>
            <form action="#">
                <input type="text" name="fullname" id="full_name" required placeholder="Ф.И.О" />
                <input type="email" name="email" id="email" required placeholder="E-Mail" />
                <input type="tel" name="phone" id="phone" required placeholder="Номер телефона" />
                <textarea rows="10" cols="30" required placeholder="Ваше сообщение"></textarea>
                <input type="submit" value="Отправить" />
            </form>
        </section>
    )
}

export default AppContactForm