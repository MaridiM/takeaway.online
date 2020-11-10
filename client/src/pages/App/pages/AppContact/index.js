import React from 'react'

import { AppRightAside, AppContactForm} from 'modules'
import { Logo } from 'components'

const AppContact = () => {
    return (
        <section className="contact-page">
            <section className="content">
                <AppContactForm />
                <section className="about">
                    <Logo />
                    <section>
                        <h2>О Нас</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore magni voluptatum fuga hic eos debitis beatae asperiores magnam aut tenetur aspernatur perspiciatis quidem mollitia similique voluptatem expedita cumque, corporis
                            natus aliquid provident, sit minus tempora? Blanditiis, ipsum? Cumque, ad optio! </p><strong>Take Away</strong>
                    </section>
                </section>
            </section>

            <AppRightAside />

        </section>
    )
}

export default AppContact
