"use client";
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {useState, useRef, useEffect} from 'react';
import emailjs from "@emailjs/browser"
import {useForm, SubmitHandler} from "react-hook-form"
import ReCAPTCHA from "react-google-recaptcha";
import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"
import {verifyCaptcha} from "../serverActions"
import {AlertCircle, Terminal} from "lucide-react";

interface IFormInput {
    fullname: string
    email: string
    subject: string
    message: string
    telephone: number
}

const ContactUs = () => {
    const [lastSubmissionTime, setLastSubmissionTime] = useState(null);
    const [submitDisabled, setSubmitDisabled] = useState(false);
    const [emailWasSent, setEmailWasSent] = useState({sentAction: false, successful: false});
    const recaptchaRef = useRef<ReCAPTCHA>(null);
    const [isVerified, setIsverified] = useState<boolean>(false);
    const {register, handleSubmit, watch, formState: {errors},} = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        // Validate the form using react-hook-form
        // const isValid = await formState.validateForm();
        console.log(errors, data, watch());
        // If the form is valid and the captcha is verified, send the email
        if (errors && isVerified) {
            sendEmail(data);
        }
    };
    const successAlert = () => {
        return (
            <Alert>
                <Terminal className="h-4 w-4"/>
                <AlertTitle>Great job!</AlertTitle>
                <AlertDescription>
                    Thank for contacting us, we will get in touch with you as soon as possible
                </AlertDescription>
            </Alert>
        )
    }

    const errorAlert = () => {
        return (
            <Alert variant="destructive">
                <AlertCircle className="h-4 w-4"/>
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                    Your message was not sent please try again !
                </AlertDescription>
            </Alert>
        )
    }

    async function handleCaptchaSubmission(token: string | null) {
        // Server function to verify captcha
        await verifyCaptcha(token)
            .then(() => setIsverified(true))
            .catch(() => setIsverified(false))
    }

    const sendEmail = (e) => {
        e.preventDefault()


        // Check if the minimum time interval has passed since the last submission
        if (lastSubmissionTime && Date.now() - lastSubmissionTime < 5000) {
            alert('Please wait before submitting the form again.');
            return;
        }


        // Update the last submission time
        setLastSubmissionTime(Date.now());

        // Disable the submit button for a short time to prevent rapid submissions
        setSubmitDisabled(true);

        if (isVerified) {

            emailjs
                .sendForm(
                    process.env.NEXT_PUBLIC_SERVICEID,
                    process.env.NEXT_PUBLIC_TEMPLATEID,
                    e.target,
                    process.env.NEXT_PUBLIC_PUBLICKEY
                )
                .then(
                    function (response) {
                        console.log('SUCCESS!', response.status, response.text);
                        setEmailWasSent(prevState => ({
                            ...prevState,
                            sentAction: true,
                            successful: true
                        }));
                    },
                    function (error) {
                        console.log('FAILED...', error);
                        setEmailWasSent(prevState => ({
                            ...prevState,
                            sentAction: true,
                            successful: false
                        }));
                    }
                );
        }

        // Re-enable the submit button after 5 seconds (adjust as needed)
        setTimeout(() => {
            setSubmitDisabled(false);
        }, 5000);
    };

    useEffect(() => {
        // Clean up the last submission time when the component unmounts
        return () => {
            setLastSubmissionTime(null);
        };
    }, []);

    const mysitekey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;


    return (
        <div>
            <div className='contact-location'>
                <div>
                    <h3>Cotonou Office Address:</h3>
                    <p>
                        Maison Mohammed Bashir lot: 07, Pk10, Sèmé Kpodji Bénin,<br/>
                        Cotonou Benin. +229 95 75 09 09
                    </p>
                </div>
                <div>
                    <h3>Lagos Office Address:</h3>
                    <p>
                        Pinnacle Court, 6 Ogedengbe Street, Apapa-Lagos, <br/>
                        Nigeria. +234 802 853 3333
                    </p>
                </div>
                <div>
                    <h3>Kaduna Office Address:</h3>
                    <p>
                        Suite 402-403 Bank of Industry, Muhammadu Buhari Way, Kaduna,<br/>
                        Nigeria. +234 805 360 0555
                    </p>
                </div>
                <div>
                    <h3>Abuja Office Address:</h3>
                    <p>
                        46, Parakou Street, off Aminu Kano Crescent, Flat 3, Wuse II,<br/>
                        Abuja Nigeria. +234 803 356 9559
                    </p>
                </div>
            </div>
            <div className="contact-form">
                <h2>Leave us a message</h2>
                <div className="mx-auto w-1/2">
                    {emailWasSent.sentAction && emailWasSent.successful && successAlert()}
                    {emailWasSent.sentAction && emailWasSent.successful === false && errorAlert()}
                </div>
                <form onSubmit={sendEmail} autoComplete="off">
                    <div className="w-full form-field">
                        <label htmlFor="fullname">Full name</label>
                        <input type="text" required id="fullname" name="form_name"/>
                    </div>
                    <div className="flex gap-6">
                        <div className="w-full md:w-1/2 form-field">

                            <label htmlFor="email">Email address</label>
                            <input type="email" required name="form_email" id="email"/>
                        </div>
                        <div className="w-full md:w-1/2 form-field">
                            <label htmlFor="telephone">Telephone</label>
                            <input type="telephone" name="form_phone"
                                   id="telephone"/>
                        </div>
                    </div>
                    <div className="w-full form-field">
                        <label htmlFor="subject">Subject of your message</label>
                        <input type="subject" required name="form_subject" id="subject"/>
                    </div>
                    <div className="w-full form-field">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" required id="message"/>
                    </div>
                    <div className="w-full form-field">
                        <ReCAPTCHA
                            sitekey={mysitekey}
                            ref={recaptchaRef}
                            onChange={handleCaptchaSubmission}
                        />
                    </div>
                    <div className="button mt-3">
                        <button type="submit" disabled={submitDisabled}>
                            Reach out to us
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactUs