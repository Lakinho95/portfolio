import { useState } from 'react';
import BannerLayout from '../components/Common/BannerLayout';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { SiUpwork } from 'react-icons/si'
import { HiMail, HiUser } from 'react-icons/hi'
import { BsChatTextFill } from 'react-icons/bs'
import Fiverr_Icon from '../components/Fiverr_Icon';
import Footer from '../components/Footer';
import { Modal } from 'antd';
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react'

const Contact = () => {
    const [isOpen, setIsOpen] = useState(false)
    const form = useRef()
    const [formObject,setForm] = React.useState({
        from_name:"",
        from_mail:'',
        from_message:'',
    })
    
    function handleChange(e) {
        const {name, value, checked,type} = e.target
        console.log(formObject.porudzbina)
        setForm(prevState => {
            return {
                ...prevState,
                [name]:type === "checkbox"? checked:value,
            }
        })
    }

    function saljiMail(e) {
        e.preventDefault()
        setIsOpen(true)
        console.log("1")
        emailjs.sendForm('service_b2cncnk', 'template_uve4y23', form.current, 'JXVCd4yZcLPh287Sj')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        console.log("12")
        setForm(prevState => {
            return {
                    'from_name':"",
                    'from_mail':"",
                    'from_message':'',
            }
        })
        
    }

    return (
        <BannerLayout>
            <div className=" px-4 py-2">
                <div className="my-6 text-Snow flex flex-col gap-y-5">
                    <h1 className='text-lg font-bold'>Contact Information</h1>
                    <div className="flex flex-col md:flex-row items-center gap-5 text-xs">
                        <div className="card_stylings w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Country:</span>
                                <span className='text-LightGray md:text-sm'>Serbia</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>City:</span>
                                <span className='text-LightGray md:text-sm'>Belgrade</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Company:</span>
                                <span className='text-LightGray md:text-sm'>/</span>
                            </div>
                        </div>
                        <div className="card_stylings rounded-xl w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Email:</span>
                                <span className='text-LightGray text-sm'>lazarkanazir995@gmail.com</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Linkedin:</span>
                                <span className='text-LightGray text-sm'>Lazar Kanazir</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Phone:</span>
                                <span className='text-LightGray text-sm'>+381 (60) 0113335</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-16 w-full card_stylings text-xl sm:text-3xl flex gap-x-8 sm:gap-x-16 items-center justify-center text-Snow">
                    <a className='hover:scale-125 ease-in-out duration-700' href="" target='_blank' rel="noreferrer"><HiMail /></a>
                    <a className='hover:scale-125 ease-in-out duration-700' href="https://github.com/Lakinho95" target='_blank' rel="noreferrer"><FaGithub /></a>
                    <a className='hover:scale-125 ease-in-out duration-700' href="https://www.linkedin.com/in/lazar-kanazir-b341691a4/" target='_blank' rel="noreferrer"><FaLinkedin /></a>
                    <a className='hover:scale-125 ease-in-out duration-700 hidden sm:block' href="https://www.fiverr.com/lakinho95" target='_blank' rel="noreferrer"><Fiverr_Icon /></a>
                </div>


                <div className="my-12 w-full h-auto text-Snow">
                    <h1 className='text-lg font-bold'>Get In Touch</h1>
                    <div className="mt-4 py-8 px-8 bg-EveningBlack rounded-xl text-sm">
                        <form ref={form} onSubmit={saljiMail}>
                            <div className="flex flex-col w-full">
                                <div className="userIcon relative mb-6">
                                    <div id="icon" className="absolute inset-y-0 left-0 flex items-center pl-3 text-xl pointer-events-none">
                                        <HiUser />
                                    </div>
                                    <input type="text" name={"from_name"} value={formObject.from_name} onChange={handleChange} id="from_name" className="input_stylings" placeholder="Name" />
                                </div>
                            </div>

                            <div className="flex flex-col w-full">
                                <div className="mailIcon relative mb-6">
                                    <div id="icon" className="absolute inset-y-0 left-0 flex items-center text-xl pl-3 pointer-events-none">
                                        <HiMail />
                                    </div>
                                    <input type="text" name='from_mail' onChange={handleChange}
                value={formObject.from_mail} id="from_mail" className="input_stylings" placeholder="Email" />
                                </div>
                            </div>

                            <div className="flex flex-col w-full">
                                <div className="textIcon relative mb-6">
                                    <div id="icon" className="absolute top-3 left-0 flex items-center text-lg pl-3 pointer-events-none">
                                        <BsChatTextFill />
                                    </div>
                                    <textarea rows={6} cols={50} name="from_message" value={formObject.from_message} onChange={handleChange} id="from_message" className="input_stylings" placeholder="Message" />
                                </div>
                            </div>

                            <div className="my-4">
                                <button onClick={saljiMail} className="button"> SEND MESSAGE </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* success modal */}
            <Modal
                className='card_stylings backdrop-blur-3xl drop-shadow-2xl'
                // wrapClassName='bg-red-800'
                centered
                open={isOpen}
                footer={null}
                closable={false}
                onOk={() => setIsOpen(false)}
                onCancel={() => setIsOpen(false)}
            >
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-Green font-bold text-2xl'>Your message was successfully sent</h1>
                </div>
            </Modal>
            <Footer />
        </BannerLayout>

    )
}

export default Contact