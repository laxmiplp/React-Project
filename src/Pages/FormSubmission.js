import { useState } from "react"
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const FormSubmission = () => {
    const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', contact: '', resume: '', url: '', selectedOptions: '', about: '', gender: '', subjects: { english: false, maths: false, social: false } })
    const [successMsg, setSuccessMsg] = useState('')
    const [errors, setErrorsMsg] = useState({})
    const navigate = useNavigate();

    const handleErrorMsg = (data) => {

        let errors = {}

        errors.firstName = !data.firstName
            ? 'First Name is required'
            : '';
        errors.lastName = !data.lastName ? 'Last Name is required' : ''

        errors.email = !data.email ? 'Email is required' : !/\S+@\S+\.\S+/.test(data.email) ? errors.email = 'Email Format is Invalid' : ''
        errors.contact = !data.contact ? errors.contact = "Contact is required" : !/^\d{10}$/.test(data.contact) ? errors.contact = 'Contact Number is Invalid' : ''
        const urlPattern = new RegExp(
            "^(https?:\\/\\/)?(www\\.)?([a-zA-Z0-9]{1}[a-zA-Z0-9-]{1,61}\\.[a-zA-Z]{2,})\\/?([a-zA-Z0-9#]+\\/?)*$"
        );
        errors.url = (!data.url)
            ? 'URL is required'
            : (!urlPattern.test(data.url))
                ? 'Invalid URL format'
                : '';
        errors.gender = !data.gender
            ? 'Please select a Gender option'
            : '';
        errors.subjects = (!data.subjects.english && !data.subjects.maths && !data.subjects.social)
            ? 'Please select at least one subject'
            : '';
        const allowedTypes = ['application/pdf', 'application/msword'];
        const maxFileSize = 5 * 1024 * 1024;
        if (!data.resume) {
            errors.resume = 'File is required';
        } else if (!allowedTypes.includes(data.resume.type)) {
            errors.resume = 'File type must be PDF or DOC';
        } else if (data.resume.size > maxFileSize) {
            errors.resume = 'File size must be less than 5MB';
        }
        errors.selectedOptions = !data.selectedOptions || data.selectedOptions === ""
            ? 'Please select an option from the dropdown'
            : '';
        errors.about = !data.about || data.about.trim() === ""
            ? 'Please fill out the About section'
            : '';
        return errors
    }
    const handleReset = () => {

        setFormData({ firstName: '', lastName: '', email: '', contact: '', resume: '', url: '', selectedOptions: '', about: '', gender: 'female', subjects: { english: true, maths: false, social: false } })
        setSuccessMsg('')
        setErrorsMsg({})
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form Data Before Validation:", formData); // Log form data

        const validate = handleErrorMsg(formData)
        console.log("Validation Results:", validate); // Log validation results

        setErrorsMsg(validate)
        console.log(validate)
        // setSuccessMsg(!validate
        //     ? " " : "Form Submitted Successfully!")


        console.log(successMsg, "Form Submitted")
        // if (Object.keys(validate).length === 0) {
        //     setSuccessMsg("Form Submitted Successfully!");
        // } else {
        //     setSuccessMsg('');
        // }
        // setSuccessMsg(Object.keys(validate).length === 0 ? "Form Submitted Successfully!" : '');
        // console.log("success message", successMsg)
        if (Object.keys(validate).length === 0) {
            setSuccessMsg("Form Submitted Successfully!");
            setErrorsMsg('')

        } else {
            setSuccessMsg('');

        }
    }


    const handleInputChange = (event) => {
        const { name, value, type, files, checked } = event.target
        if (type === 'checkbox') {
            setFormData((prev) => (
                {
                    ...prev, subjects: {
                        ...prev.subjects,
                        [name]: checked
                    }
                }
            )

            )
        } else if (type === 'file') {
            setFormData((prev) => (
                {
                    ...prev, resume: files[0]
                }
            ))

        } else {
            setFormData((prev) => (
                { ...prev, [name]: value }
            )

            )
        }
    }
    const handleNavigate = () => {
        navigate('/CreditCard');
    }
    const handleJokesPage = () => {
        navigate('/Jokes')
    }

    return (
        <>

            <div style={{ width: '40%', margin: 'auto' }}>
                <fieldset style={{ padding: '20px 25px' }}>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="firstName">
                            First Name*
                        </label><br />
                        <input style={{ width: '100%' }}
                            type="text"
                            name="firstName"
                            id="firstName"
                            placeholder="Enter First Name"
                            onChange={handleInputChange}
                            value={formData.firstName}

                            required
                        />
                        {errors.firstName && <span style={{ color: 'red' }}>{errors.firstName}</span>}
                        <br /><br />
                        <label htmlFor="lastName">
                            Last Name*
                        </label><br />
                        <input style={{ width: '100%' }}
                            type="text"
                            name="lastName"
                            id="lastName"
                            placeholder="Enter Last Name"
                            onChange={handleInputChange}
                            value={formData.lastName}
                            required
                        />
                        {errors.lastName && <span style={{ color: 'red' }}>{errors.lastName}</span>}

                        <br /><br />
                        <label htmlFor="email">
                            Email*
                        </label>
                        <input style={{ width: '100%' }}
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter Email"
                            onChange={handleInputChange}
                            value={formData.email}
                            required
                        />
                        {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}

                        <br /><br /> <label htmlFor="contact">
                            Contact Number*
                        </label>
                        <input style={{ width: '100%' }}
                            type="tel"
                            name="contact"
                            id="contact"
                            placeholder="Enter Contact Number"
                            onChange={handleInputChange}
                            value={formData.contact}
                            required
                        />
                        {errors.contact && <span style={{ color: 'red' }}>{errors.contact}</span>}

                        <br /> <br /><label htmlFor="url">
                            URL
                        </label>
                        <input style={{ width: '100%' }}
                            type="url"
                            name="url"
                            id="url"
                            placeholder="Enter URL"
                            onChange={handleInputChange}
                            value={formData.url}
                            required
                        />
                        {errors.url && <span style={{ color: 'red' }}>{errors.url}</span>}

                        <br /><br />


                        <label htmlFor="gender">
                            Gender:
                        </label>
                        <input
                            type="radio"
                            name="gender"
                            id="male"
                            value="male"
                            checked={formData.gender === 'male'}
                            onChange={handleInputChange}

                        />

                        <label htmlFor="male">Male</label>

                        <input
                            type="radio"
                            name="gender"
                            id="female"
                            value="female"
                            checked={formData.gender === 'female'}
                            onChange={handleInputChange}

                        />
                        <label htmlFor="female">Female</label>


                        <input
                            type="radio"
                            name="gender"
                            id="other"
                            value="other"
                            checked={formData.gender === 'other'}
                            onChange={handleInputChange}

                        />
                        <label htmlFor="other">Other</label>
                        {errors.gender && <span style={{ color: 'red' }}>{errors.gender}</span>}

                        <br /><br />
                        <label htmlFor="subjects">
                            Subject:
                        </label>
                        <input
                            type="checkbox"
                            name="english"
                            id="english"
                            checked={formData.subjects.english}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="english">English</label>


                        <input
                            type="checkbox"
                            name="maths"
                            id="maths"
                            checked={formData.subjects.maths}
                            onChange={handleInputChange}

                        />
                        <label htmlFor="maths">Maths</label>


                        <input
                            type="checkbox"
                            name="social"
                            id="social"
                            checked={formData.subjects.social}
                            onChange={handleInputChange}

                        />
                        <label htmlFor="social">Social</label>
                        {errors.subjects && <span style={{ color: 'red' }}>{errors.subjects}</span>}

                        <br /><br />

                        <label htmlFor="resume">Upload Resume*</label>
                        <input style={{ width: '100%' }}
                            type="file"
                            name="resume"
                            id="resume"
                            onChange={handleInputChange}
                            placeholder="Enter Upload Resume"
                            required
                        />
                        {errors.resume && <span style={{ color: 'red' }}>{errors.resume}</span>}

                        <br /><br />
                        <label>Select your choice:  </label>
                        <select style={{ width: '100%' }}
                            name="selectedOptions"
                            id="select"
                            value={formData.selectedOptions}
                            onChange={handleInputChange}

                        >

                            <option value="" disabled>
                                Select your Ans
                            </option>
                            <optgroup label="Beginers">
                                <option value="1">HTML</option>
                                <option value="2">CSS</option>
                                <option value="3">
                                    JavaScript
                                </option>
                            </optgroup>
                            <optgroup label="Advance">
                                <option value="4">React</option>
                                <option value="5">Node</option>
                                <option value="6">
                                    Express
                                </option>
                                <option value="7">
                                    MongoDB
                                </option>
                            </optgroup>
                        </select>
                        {errors.selectedOptions && <span style={{ color: 'red' }}>{errors.selectedOptions}</span>}

                        <br /><br />
                        <label htmlFor="about">About</label><br />
                        <textarea style={{ width: '100%' }}
                            name="about"
                            id="about"
                            cols="30"
                            rows="10"
                            onChange={handleInputChange}
                            placeholder="About your self"
                            value={formData.about}
                            required
                        ></textarea>
                        {errors.about && <span style={{ color: 'red' }}>{errors.about}</span>}

                        <br /><br />
                        <label>Submit Or Reset</label><br /><br />
                        <div style={{ display: 'flex', justifyContent: 'center', gap: 5 }}>
                            <button style={{ width: '100%' }}
                                type="reset"
                                value="reset"
                                onClick={handleReset}
                            >
                                Reset
                            </button>
                            <button style={{ width: '100%' }}
                                type="submit"
                                value="Submit"
                                onClick={handleSubmit}
                            >
                                Submit
                            </button>
                            <button style={{ width: '100%' }}
                                type="submit"
                                value="Submit"
                                onClick={handleNavigate}
                            >
                                Validator
                            </button>
                            <button style={{ width: '100%' }}
                                type="submit"
                                value="Submit"
                                onClick={handleJokesPage}
                            >
                                Jokes                            </button>
                        </div>
                    </form>
                </fieldset>
                {
                    successMsg && <h1>{successMsg}</h1>
                }

            </div>
        </>
    )

}
export default FormSubmission