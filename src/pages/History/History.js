import React from 'react'
import './History.css'

function History() {
    return (
        <>
            <section className='history-section'>
                <div className='container'>
                    <div className='row'>
                        <div className="main-content ">
                            <div className="top-area hero-section-content text-center ">
                                <h5 className="sub-heading animBottomIn fw-semibold" >
                                    Payments History
                                </h5>
                                <h1 className="top-section-heading ft55 animBottomIn AO3 Blue_Heading" >View all Financial History
                                </h1>
                                <p className="cmnFtLh  animBottomIn text-black" >
                                    Track all your expenses at one place
                                </p>
                                <ul className="nolisttype px-md-0 ">
                                    <li className="d-md-flex px-3">
                                        <img alt="icon" className='colort me-1' src="/assets/check-2.webp" width="25" height="25" decoding="async" data-nimg="1" loading="lazy" />
                                        <div className='text-black fs-6 align-self-center'> Save time</div>
                                    </li>
                                    <li className="d-md-flex px-3">
                                        <img alt="icon" className='colort me-1' src="/assets/check-2.webp" width="25" height="25" decoding="async" data-nimg="1" loading="lazy" />
                                        <div className='text-black fs-6 align-self-center'>Save money</div>
                                    </li>
                                    <li className="d-md-flex px-3">
                                        <img alt="icon" className='colort me-1' src="/assets/check-2.webp" width="25" height="25" decoding="async" data-nimg="1" loading="lazy" />
                                        <div className='text-black fs-6 align-self-center'>Helps you grow</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='table-responsive'>
                                <table className="table tb-plain borderless">
                                    <thead >
                                        <tr>
                                            <th className="fw-bold">
                                                Date
                                            </th>
                                            <th className="fw-bold">Description
                                            </th>
                                            <th className="fw-bold" colSpan={2}>
                                                Amount
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody >
                                        <tr>
                                            <td className="fs-6">
                                                Dec 15, 2024 9:19PM
                                            </td>
                                            <td className="fs-6 fund-td">
                                                Fund transfer
                                                <p> Transaction Id: MBK1175323905</p>
                                            </td>
                                            <td className="fs-6">
                                                <span className='tred me-2'>Paid :</span> ₹ 5,000
                                            </td>
                                            <td className="">
                                                <button type="button" className="btn InvoiceBtn">Invoice</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="fs-6">
                                                Dec 15, 2024 9:19PM
                                            </td>
                                            <td className="fs-6 fund-td">
                                                Fund transfer
                                                <p> Transaction Id: MBK1175323905</p>
                                            </td>
                                            <td className="fs-6">
                                                <span className='tred me-2'>Paid :</span> ₹ 5,000
                                            </td>
                                            <td className="">
                                                <button type="button" className="btn InvoiceBtn">Invoice</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="fs-6">
                                                Dec 15, 2024 9:19PM
                                            </td>
                                            <td className="fs-6 fund-td">
                                                Fund transfer
                                                <p> Transaction Id: MBK1175323905</p>
                                            </td>
                                            <td className="fs-6">
                                                <span className='tred me-2'>Paid :</span> ₹ 5,000
                                            </td>
                                            <td className="">
                                                <button type="button" className="btn InvoiceBtn">Invoice</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default History
