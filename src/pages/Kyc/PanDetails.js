import React from 'react'

export default function PanDetails() {
    return (
        <>
            <section className='container pt-4'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='aadhar_card_details'>
                            <div className='row'>
                                <div className='col-md-4 mb-3'>
                                    <div className='aadhar_box'>
                                        <i class="bi bi-copy"></i>
                                        <h3>Pan Number</h3>
                                        <p>1234 1234 1234</p>
                                    </div>
                                </div>
                                <div className='col-md-4 mb-3'>
                                    <div className='aadhar_box'>
                                        <i class="bi bi-copy"></i>
                                        <h3>Name</h3>
                                        <p>User Name</p>
                                    </div>
                                </div>
                                <div className='col-md-4 mb-3'>
                                    <div className='aadhar_box'>
                                        <i class="bi bi-copy"></i>
                                        <h3>Category</h3>
                                        <p>Individual</p>
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
