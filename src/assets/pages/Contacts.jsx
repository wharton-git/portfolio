import { Mail } from 'lucide-react'
import Box from '../components/tools/Box'
import { Phone } from 'lucide-react'
import { PinIcon } from 'lucide-react'
import { Locate } from 'lucide-react'
import { Navigation } from 'lucide-react'
import Cont from '../components/tools/Cont'
import { Children } from 'react'
import Section from '../components/tools/Section'
import Input from '../components/tools/Input'
import Textarea from '../components/tools/Textarea'
import Button from '../components/tools/Button'

const Contacts = () => {
    return (
        <Box>
            <div className="p-2 neu-sm dark:neu-dark-sm">

                <div className="container">
                    <header className='py-5'>
                        <p>Feel free to contact me to discuss potential projects or for any questions.</p>
                    </header>

                    <section className="contact-section felx-col space-y-5">
                        <div className="contact-info flex gap-3">
                            <Cont
                                icon={<Mail />}
                                children={"whartonaldrick@gmail.com"}
                            />

                            <Cont
                                icon={<Phone />}
                                children={"+261 38 57 390 44"}
                            />

                            <Cont
                                icon={<Locate />}
                                children={"Fianarantsoa, Madagascar"}
                            />

                        </div>
                        {/* <div className="social-links flex">
                            <h3>Follow me</h3>
                            <div className="social-icons">
                                <a href="#" title="Instagram">IG</a>
                                <a href="#" title="Twitter">X</a>
                            </div>
                        </div> */}

                        <Section className="contact-form">

                            <form className="flex-col items-center justify-center space-y-2 w-full" action="https://formspree.io/f/mnqyojzv" method="POST">

                                <div className=''>
                                    <label htmlFor="name">Full Name</label>
                                </div>
                                <div className='w-full'>
                                    <Input type={"text"} id={"name"} required={true} />
                                </div>
                                <div className=''>
                                    <label htmlFor="email">Email Address</label>
                                </div>
                                <div className='w-full'>
                                    <Input type={"email"} id={"email"} required={true} />
                                </div>

                                <div className=''>
                                    <label htmlFor="subject">Subject</label>
                                </div>
                                <div className='w-full'>
                                    <Input type={"text"} id={"subject"} required={true} />
                                </div>                                <div className=''>
                                    <label htmlFor="message">Message</label>
                                </div>
                                <div>
                                    <Textarea id={"message"} required={true} />
                                </div>
                                <div className='w-full pt-3 flex justify-end'>
                                    <Button>Send Message</Button>
                                </div>
                            </form>
                        </Section>
                    </section>

                    <footer className='py-5 text-center'>
                        <p>&copy; 2023 My Portfolio. All rights reserved.</p>
                    </footer>
                </div>

            </div>
        </Box>
    )
}

export default Contacts
