import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useFormik } from 'formik'
import * as Yup from "yup"
import React from 'react'
import golden from "../../../../assets/gold1.jpg"
import "../ProductQuotation.css"
// import axios from "axios"


const ProductQuotationForm = () => {

    const formik = useFormik({
        initialValues : {
            company:  "",
            fullnames: "",
            title: "",
            position: "",
            country: "",
            city: "",
            product : "",
            quantity: "",
            description: ""
        },
        validationSchema: Yup.object().shape({
            company : Yup.string()
                .required("This field is required")
                .min(3, "Minimum character allowed is 2")
                .max(100, "maximum characters allowed are 100"),
            fullnames : Yup.string()
                .required("This field is required")
                .min(6, "Minimum characters allowed are 6")
                .max(200, "maximum characters allowed are 200"),
            title : Yup.string()
                .required("This field is required"),
            position : Yup.string()
                .required("This field is required"),
                // .min(6, "Minimum characters allowed are 4")
                // .max(200, "maximum characters allowed are 200"),
            country : Yup.string()
                .required("This field is required")
                .min(4, "Minimum characters allowed are 4")
                .max(50, "maximum characters allowed are 50"),
            city : Yup.string()
                .required("This field is required")
                .min(4, "Minimum characters allowed are 4")
                .max(50, "maximum characters allowed are 50"),
            product : Yup.string()
                .required("This field is required")
                .min(6, "Minimum characters allowed are 6")
                .max(200, "maximum characters allowed are 200"),
            email : Yup.string()
                .required("This field is required")
                .min(6, "Minimum characters allowed are 6")
                .max(100, "maximum characters allowed are 100"),
            unit : Yup.string()
                .required("This field is required"),
            weight : Yup.number()
                .required("This field is required")
                .min(1, "Minimum product allowed allowed is 1")
                .max(2000000000, "maximum characters allowed are 2000000000"),
            description : Yup.string()
                .required("This field is required")
                .min(20, "Minimum characters allowed are 4")
                .max(2000, "maximum characters allowed are 200"),
        }),
        onSubmit: (values) => {
            // axios.post("http://localhost:8080/api/goods", values)
            //     .then(console.log(values))
            //     .catch(err => console.log(err))
            alert(JSON.stringify(values, null, 2))
        }
    })

    return (
        <div className="product-quotation-form">
            <div className="product-quotation-form-content">
                <div className="product-quotation-left">
                    <img className="product-quotation-form-image" src={golden} alt="Rhino jon gold shippment"/>
                </div>

                <form onSubmit={formik.handleSubmit} className="the-product-quotation-form">

                    <div className="product-quotation-small-inputs">
                        <div className="product-quotation-small-input-group">
                            <label>Your Title</label>
                                <select type="text" placeholder="Arrival city here..." name="title" 
                                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.title} required>
                                    <option value="mr" label="Mr." selected/>
                                    <option value="mrs" label="Mrs."/>
                                    <option value="miss" label="Miss."/>
                                </select>
                                {formik.touched.title && formik.errors.title ? (
                                    <div className="error">{formik.errors.title}</div>
                                ) : null}
                        </div>
                        <div className="product-quotation-small-input-group">
                            <label>Your Fullnames</label>
                            <input type="text" placeholder="Your fullnames here..." name="fullnames" 
                                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.fullnames} required/>
                                {formik.touched.fullnames && formik.errors.fullnames ? (
                                    <div className="error">{formik.errors.fullnames}</div>
                                ) : null}
                        </div>
                    </div>

                    <div className="product-quotation-small-inputs">
                        <div className="product-quotation-small-input-group">
                            <label>Your company</label>
                            <input type="text" placeholder="Your company name here..." name="company" 
                                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.company} required/>
                                {formik.touched.company && formik.errors.company ? (
                                    <div className="error">{formik.errors.company}</div>
                                ) : null}
                        </div>

                        <div className="product-quotation-small-input-group">
                            <label>Your position</label>
                            <input type="text" placeholder="Eg CEO, CTO, Manager, etc..." name="position" 
                                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.position} required/>
                                {formik.touched.position && formik.errors.position ? (
                                    <div className="error">{formik.errors.position}</div>
                                ) : null}
                        </div>
                    </div>

                    <div className="product-quotation-small-inputs">
                        <div className="product-quotation-small-input-group">
                            <label>Weight Unit</label>
                                <select type="text"  name="unit" 
                                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.unit} required>
                                    <option value="kilograms" label="Kilograms" selected/>
                                    <option value="pounds" label="pounds"/>
                                    <option value="grams" label="grams"/>
                                </select>
                                {formik.touched.unit && formik.errors.unit ? (
                                    <div className="error">{formik.errors.unit}</div>
                                ) : null}
                        </div>
                        <div className="product-quotation-small-input-group">
                            <label>Weight</label>
                            <input type="number" placeholder="The weight of the product..." name="weight" 
                                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.weight} required/>
                                {formik.touched.weight && formik.errors.weight ? (
                                    <div className="error">{formik.errors.weight}</div>
                                ) : null}
                        </div>
                    </div>
                    
                    <div className="product-quotation-small-inputs">
                        <div className="product-quotation-small-input-group">
                            <label>Country</label>
                            <input type="text" placeholder="What is your country..." name="country" 
                                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.country} required/>
                                {formik.touched.country && formik.errors.country ? (
                                    <div className="error">{formik.errors.country}</div>
                                ) : null}                            
                        </div>
                        <div className="product-quotation-small-input-group">
                            <label>City</label>
                            <input type="text" placeholder="What is your city..." name="city" 
                                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.city} required/>
                                {formik.touched.city && formik.errors.city ? (
                                    <div className="error">{formik.errors.city}</div>
                                ) : null}            
                        </div>
                    </div>

                    <div className="product-quotation-small-inputs">
                        <div className="product-quotation-small-input-group">
                            <label>Your Product</label>
                            <input type="text" placeholder="The product you want eg gold, metal, etc" name="product" 
                                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.product} required/>
                                {formik.touched.product && formik.errors.product ? (
                                    <div className="error">{formik.errors.product}</div>
                                ) : null}                            
                        </div>
                        <div className="product-quotation-small-input-group">
                            <label>Product Amount</label>
                            <input type="number" placeholder="Estimated Arrival date here..." name="quantity" 
                                onChange={formik.handleChange} onBlur={formik.handleBlur} value = {formik.values.quantity} required/>
                                {formik.touched.quantity && formik.errors.quantity ? (
                                    <div className="error">{formik.errors.quantity}</div>
                                ) : null}
                        </div>
                    </div>

                    <div className="contact-textarea">
                        <label>Description</label>
                        <textarea type="text" name="description" placeholder="Little descriptions eg weight, size, color, etc" 
                            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.description} required/>
                            {formik.touched.description && formik.errors.description ? (
                                    <div className="error">{formik.errors.description}</div>
                                ) : null}
                    </div>

                    <br/>
                    <button type="submit">
                        Submit <FontAwesomeIcon icon={faPaperPlane}/>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ProductQuotationForm