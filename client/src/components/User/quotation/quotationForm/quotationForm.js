import React from 'react'
import quotation from "../../../../assets/container.jpg"
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useFormik } from 'formik'
import * as Yup from "yup"
import "./quotationForm.css"
import axios from "axios"

const QuotationForm = () => {
    
    const formik = useFormik({
        initialValues : {
            fullnames:  "",
            email: "",
            telephone: "",
            city: "",
            company: "",
            country: "",
            message: ""
        },
        validationSchema: Yup.object().shape({
            fullnames : Yup.string()
                .required("This field is required")
                .min(5, "Minimum number allowed is 6")
                .max(100, "maximum characters allowed are 100"),
            email : Yup.string()
                .required("This field is required")
                .min(5, "Minimum characters allowed are 6")
                .max(100, "maximum characters allowed are 100"),
            telephone : Yup.string()
                .required("This field is required")
                .min(8, "Minimum characters allowed are 8")
                .max(30, "maximum characters allowed are 30"),
            city : Yup.string()
                .required("This field is required")
                .min(3, "Minimum characters allowed are 6")
                .max(100, "maximum characters allowed are 100"),
            company : Yup.string()
                .required("This field is required")
                .min(5, "Minimum characters allowed are 6")
                .max(100, "maximum characters allowed are 100"),
            country : Yup.string()
                .required("This field is required")
                .min(5, "Minimum characters allowed are 6")
                .max(200, "maximum characters allowed are 200"),
            message : Yup.string()
                .required("This field is required")
                .min(20, "Minimum characters allowed are 20")
                .max(2000, "maximum characters allowed are 2000"),
        }),
        onSubmit: (values) => {
            axios.post("http://localhost:8080/api/quotation", values)
                .then(console.log(values))
                .catch(err => console.log(err))
        }
    })

    return (
        <div className="quotation-form">
            <div className="quotation-form-content">
                <div className="quotation-left">
                    <img className="quotation-form-image" src={quotation} alt="Rhino jon gold shippment"/>
                </div>

                <form onSubmit={formik.handleSubmit} className="the-quotation-form">

                    <div className="quotation-small-inputs">
                        <div className="quotation-small-input-group">
                            <label>Fullnames</label>
                            <input type="text" placeholder="Your full names here..." name="fullnames" 
                                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.fullnames} required/>
                                {formik.touched.fullnames && formik.errors.fullnames ? (
                                    <div className="error">{formik.errors.fullnames}</div>
                                ) : null}
                        </div>
                        <div className="quotation-small-input-group">
                            <label>Email</label>
                            <input type="text" placeholder="Goods email here..." name="email" 
                                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} required/>
                                {formik.touched.email && formik.errors.email ? (
                                    <div className="error">{formik.errors.email}</div>
                                ) : null}
                        </div>
                    </div>
                    
                    <div className="quotation-small-inputs">
                        <div className="quotation-small-input-group">
                            <label>Telephone</label>
                            <input type="text" placeholder="Goods Destination" name="telephone" 
                                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.telephone} required/>
                                {formik.touched.telephone && formik.errors.telephone ? (
                                    <div className="error">{formik.errors.telephone}</div>
                                ) : null}                            
                        </div>
                        <div className="quotation-small-input-group">
                            <label>Company</label>
                            <input type="text" placeholder="company/Province/State number here..." name="company" 
                                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.company} required/>
                                {formik.touched.company && formik.errors.company ? (
                                    <div className="error">{formik.errors.company}</div>
                                ) : null}                            
                        </div>
                    </div>

                    <div className="quotation-small-inputs">
                        <div className="quotation-small-input-group">
                            <label>City</label>
                            <input type="text" placeholder="Departure date here..." name="city" 
                                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.city} required/>
                                {formik.touched.city && formik.errors.city ? (
                                    <div className="error">{formik.errors.city}</div>
                                ) : null}            
                        </div>

                        <div className="quotation-small-input-group">
                            <label>Country</label>
                            <input type="text" placeholder="Estimated Arrival date here..." name="country" 
                                onChange={formik.handleChange} onBlur={formik.handleBlur} value = {formik.values.country} required/>
                                {formik.touched.country && formik.errors.country ? (
                                    <div className="error">{formik.errors.country}</div>
                                ) : null}
                        </div>
                    </div>

                    <div className="contact-textarea">
                        <label>Message</label>
                        <textarea type="text" name="message" placeholder="Quote message here..." 
                            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.message} required/>
                            {formik.touched.message && formik.errors.message ? (
                                    <div className="error">{formik.errors.message}</div>
                                ) : null}
                    </div>

                    <br/>
                    <button type="submit">
                        Send <FontAwesomeIcon icon={faPaperPlane}/>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default QuotationForm
