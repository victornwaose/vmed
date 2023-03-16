import React, { useState } from 'react'
import { Disclosure } from '@headlessui/react'
import { BiMinus } from 'react-icons/bi';
import { BsPlusLg } from 'react-icons/bs';

import { data2 } from "../../assets/data/TestimonialData";
import Faqhead from "../../assets/faqhead.png";
import Question from "../../assets/question.png";

const FAQ = () => {
    const [faqs, setFaqs] = useState(data2)
    return (
        <div className="w-[90%] ml-auto mr-auto mt-9">
            {/* image */}
            <div className='="w-[100%] h-auto'>
                <img src={Faqhead} />
            </div>
            {/* faq section */}
            <div className="mx-auto w-full md:w-[60%] h-auto  rounded-2xl bg-white p-2 text-lg">
                <div className="text-center w-full md:w-[57%] ml-auto mr-auto">
                    <h1 className='text-center text-lg md:text-xl mt-4 font-semibold'>You have got questions?</h1>
                    <h1 className='text-center text-lg md:text-xl font-semibold'>We have got the answers!</h1>
                    <p className="text-gray-500 text-sm  mb-4 leading-5">Everything you need to know about this app. Cant find the answer you are looking for? Please chat to our friendly team</p>
                </div>
                <div className="flex w-[80%] mr-auto ml-auto">
                    <img src={Question} alt="Question" className="w-[13%] h-auto mb-5" />
                    <div className="flex  flex-col ml-3">
                        <h1 className="text-lg font-semibold">F.A.Qs</h1>
                        <p className="text-gray-500 text-sm  mb-4">  Frequently  Asked Questions</p>
                    </div>
                </div>
                {faqs.map((faq) => (
                    <Disclosure key={faq.id}s>
                        {({ open }) => (
                            <>
                                <div >
                                    <Disclosure.Button className="flex w-[100%] md:w-[80%] mr-auto ml-auto justify-between rounded-lg bg-white mb-5 shadow-xl px-6 py-3 text-left font-normal ">
                                        <span className="text-base font-semibold">{faq.question}</span>
                                        {open ? <BiMinus /> : <BsPlusLg />}
                                    </Disclosure.Button>
                                    {open && (
                                        <Disclosure.Panel static className="text-gray-500 flex w-full justify-between -mt-7  w-[100%] md:w-[80%] mr-auto ml-auto bg-white shadow-xl rounded-lg px-4 py-6 mb-2 text-left text-sm font-medium">
                                            {faq.answer}
                                        </Disclosure.Panel>
                                    )}
                                </div>
                            </>
                        )}
                    </Disclosure>
                ))}
            </div>
        </div>
    )
}

export default FAQ
