import React, { useState, useEffect } from 'react';
import './History.css';
import axiosInstance from '../../components/services/AxiosInstance';

function History() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const userId = localStorage.getItem("id");

    // API Call Function
    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await axiosInstance.get(`payment/user/report?userId=${userId}`);
            console.log("resss...", response.data);
            setData(response.data.data); // ✅ Only set the actual array
            setLoading(false);
        } catch (error) {
            setError(error.message || "Something went wrong");
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <section className='history-section'>
                <div className='container'>
                    <div className='row'>
                        <div className="main-content">
                            <div className="top-area hero-section-content text-center">
                                <h5 className="sub-heading animBottomIn fw-semibold">
                                    Payments History
                                </h5>
                                <h1 className="top-section-heading ft55 animBottomIn AO3 Blue_Heading">
                                    View all Financial History
                                </h1>
                                <p className="cmnFtLh animBottomIn text-black">
                                    Track all your expenses at one place
                                </p>
                                <ul className="nolisttype px-md-0">
                                    <li className="d-md-flex px-3">
                                        <img alt="icon" className='colort me-1' src="/assets/check-2.webp" width="25" height="25" loading="lazy" />
                                        <div className='text-black fs-6 align-self-center'>Save time</div>
                                    </li>
                                    <li className="d-md-flex px-3">
                                        <img alt="icon" className='colort me-1' src="/assets/check-2.webp" width="25" height="25" loading="lazy" />
                                        <div className='text-black fs-6 align-self-center'>Save money</div>
                                    </li>
                                    <li className="d-md-flex px-3">
                                        <img alt="icon" className='colort me-1' src="/assets/check-2.webp" width="25" height="25" loading="lazy" />
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
                                    <thead>
                                        <tr>
                                            <th className="fw-bold">Date</th>
                                            <th className="fw-bold">Description</th>
                                            <th className="fw-bold" colSpan={2}>Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {loading ? (
                                            <tr>
                                                <td colSpan="4">Loading...</td>
                                            </tr>
                                        ) : error ? (
                                            <tr>
                                                <td colSpan="4">Error: {error}</td>
                                            </tr>
                                        ) : data.length === 0 ? (
                                            <tr>
                                                <td colSpan="4">No history found.</td>
                                            </tr>
                                        ) : (
                                            data.map((item) => {
                                                const dateObject = new Date(item.createdAt);
                                                const formattedDate = dateObject.toLocaleString('en-US', {
                                                    timeZone: 'Asia/Kolkata',
                                                    month: 'short',
                                                    day: '2-digit',
                                                    year: 'numeric',
                                                    hour: 'numeric',
                                                    minute: '2-digit',
                                                    hour12: true
                                                }).replace(',', '');

                                                return (
                                                    <tr key={item._id}>
                                                        <td className="fs-6">{formattedDate}</td>
                                                        <td className="fs-6 fund-td">
                                                            Fund transfer
                                                            <p>Transaction Id: {item.reference}</p>
                                                        </td>
                                                        <td className="fs-6">
                                                            <span className='tred me-2'>{item.type === "PayIn" ?  (item.status === "Approved"? "Paid :" : "Pending :" ) : "Received:"}</span>
                                                            ₹ {item.amount}
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn InvoiceBtn">Invoice</button>
                                                        </td>
                                                    </tr>
                                                );
                                            })
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default History;
