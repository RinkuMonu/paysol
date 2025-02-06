import React from 'react'
import './kyc.css'

export default function AadharCard() {
  return (
    <>
        <section className='container pt-4'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='aadhar_card_details'>
                        <div className='row'>
                            <div className='col-md-3 mb-3'> 
                                <div className='aadhar_box'>
                                <i class="bi bi-copy"></i>
                                    <h3>Aadhar Name</h3>
                                    <p>User Name</p>
                                </div>
                            </div>
                            <div className='col-md-3 mb-3'> 
                                <div className='aadhar_box'>
                                <i class="bi bi-copy"></i>
                                    <h3>Aadhar Number</h3>
                                    <p>1234 1234 1234 1234</p>
                                </div>
                            </div>
                            <div className='col-md-3 mb-3'> 
                                <div className='aadhar_box'>
                                <i class="bi bi-copy"></i>
                                    <h3>DOB</h3>
                                    <p>DD/MM/YYYY</p>
                                </div>
                            </div>
                            <div className='col-md-3 mb-3'> 
                                <div className='aadhar_box'>
                                <i class="bi bi-copy"></i>
                                    <h3>Gender</h3>
                                    <p>Female</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

        </section>
    </>
  )
}
