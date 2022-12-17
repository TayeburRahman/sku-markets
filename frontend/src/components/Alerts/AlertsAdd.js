import { useState } from 'react';
import { Button } from '../../../node_modules/@mui/material/index';
import './alert.css';

import OpenModalAddAlerts from './OpenModalAddAlerts';
const AlertsAdd = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);

    return (
        <>
            <div class="container-width">
                <div class="row">
                    <div class="col-md-12">
                        <p class="fw-3">SKUs Signals, Stock and Price Alerts</p>
                    </div>
                </div>
            </div>
            <div class="top-ranked">
                <div class="container-width">
                    <div class="row">
                        <div class="col-sm-2 col-sm-12 col-md-12 col-lg-12">
                            <div class="col-12">
                                <div class="card">
                                    <div class="row table-style ">
                                        <div class="text-bold d-flex flex-column flex-lg-row table-header">
                                            <div class=" text-bold d-flex w-sm-100 w-md-25">
                                                {/* <!-- <i class="fa-solid fa-magnifying-glass"></i>
									<a href="//">Search SKU</a> --> */}
                                                <div
                                                    class="input-group p-1 sm-bottom background d-flex justify-content-center"
                                                    style={{
                                                        maxwidth: '350px',
                                                        borderRadius: '3px',
                                                    }}
                                                >
                                                    <div class="input-group-prepend">
                                                        <span
                                                            class="input-group-text"
                                                            id="basic-addon1"
                                                            style={{
                                                                height: '35px',
                                                                background:
                                                                    '#0052FF',
                                                            }}
                                                        >
                                                            <i class="fa-solid fa-magnifying-glass"></i>
                                                        </span>
                                                    </div>
                                                    <input
                                                        type="text"
                                                        class="form-control alerts-search"
                                                        placeholder="Search SKU"
                                                        aria-label="Username"
                                                        aria-describedby="basic-addon1"
                                                        style={{
                                                            maxWidth: '300px',
                                                            height: '35px',
                                                            width: '60%',
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-center">
                                                <div
                                                    class="export "
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#standard-modal"
                                                    style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                    }}
                                                >
                                                    <Button
                                                        className="text-black "
                                                        style={{
                                                            fontSize: '12px',
                                                            textTransform:
                                                                'capitalize',
                                                        }}
                                                        onClick={handleOpen}
                                                    >
                                                        {' '}
                                                        New Alert
                                                    </Button>
                                                    <OpenModalAddAlerts
                                                        open={open}
                                                        setOpen={setOpen}
                                                    />
                                                </div>

                                                <div
                                                    class="export d-flex ms-2"
                                                    style={{
                                                        alignItems: 'center',
                                                    }}
                                                >
                                                    <button>
                                                        <i
                                                            class="fa-solid fa-cloud-arrow-up "
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#standard-import"
                                                        ></i>{' '}
                                                        <span
                                                            className="text-black "
                                                            style={{
                                                                fontSize:
                                                                    '12px',
                                                                textTransform:
                                                                    'capitalize',
                                                            }}
                                                        >
                                                            Import
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>

                                            <div
                                                id="standard-import"
                                                class="modal fade"
                                                tabindex="-1"
                                                role="dialog"
                                                aria-labelledby="standard-modalLabel"
                                                aria-hidden="true"
                                            >
                                                <div class="modal-dialog">
                                                    <div class="modal-content import-content">
                                                        <div class="modal-header">
                                                            <h4
                                                                class="modal-title rate-red"
                                                                id="standard-modalLabel"
                                                            >
                                                                Please make sure
                                                                there are no
                                                                duplicate rows
                                                            </h4>
                                                            <button
                                                                type="button"
                                                                class="btn-close"
                                                                data-bs-dismiss="modal"
                                                                aria-hidden="true"
                                                            ></button>
                                                        </div>
                                                        <div class="modal-body import-body">
                                                            <form
                                                                action="/"
                                                                method="post"
                                                                class="dropzone"
                                                                id="myAwesomeDropzone"
                                                                data-plugin="dropzone"
                                                                data-previews-container="#file-previews"
                                                                data-upload-preview-template="#uploadPreviewTemplate"
                                                            >
                                                                <div class="fallback">
                                                                    <input
                                                                        name="file"
                                                                        type="file"
                                                                        multiple
                                                                    />
                                                                </div>

                                                                <div class="dz-message needsclick">
                                                                    <i class="h1 text-muted ri-upload-cloud-2-line"></i>
                                                                    <h3>
                                                                        Drop
                                                                        files
                                                                        here or
                                                                        click to
                                                                        upload.
                                                                    </h3>
                                                                    <span class="text-muted font-13">
                                                                        (This is
                                                                        just a
                                                                        demo
                                                                        dropzone.
                                                                        Selected
                                                                        files
                                                                        are
                                                                        <strong>
                                                                            not
                                                                        </strong>{' '}
                                                                        actually
                                                                        uploaded.)
                                                                    </span>
                                                                </div>
                                                            </form>

                                                            <div
                                                                class="dropzone-previews mt-3"
                                                                id="file-previews"
                                                            ></div>

                                                            <div
                                                                class="d-none"
                                                                id="uploadPreviewTemplate"
                                                            >
                                                                <div class="card mt-1 mb-0 shadow-none border">
                                                                    <div class="p-2">
                                                                        <div class="row align-items-center">
                                                                            <div class="col-auto">
                                                                                <img
                                                                                    data-dz-thumbnail
                                                                                    src="#"
                                                                                    class="avatar-sm rounded bg-light"
                                                                                    alt=""
                                                                                />
                                                                            </div>
                                                                            <div class="col ps-0">
                                                                                <a
                                                                                    href="javascript:void(0);"
                                                                                    class="text-muted fw-bold"
                                                                                    data-dz-name
                                                                                ></a>
                                                                                <p
                                                                                    class="mb-0"
                                                                                    data-dz-size
                                                                                ></p>
                                                                            </div>
                                                                            <div class="col-auto">
                                                                                <a
                                                                                    href=""
                                                                                    class="btn btn-link btn-lg text-muted"
                                                                                    data-dz-remove
                                                                                >
                                                                                    <i class="ri-close-line"></i>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="modal-footer">
                                                            <a
                                                                target="_blank"
                                                                href="https://docs.google.com/spreadsheets/d/1hXrZqdrPc1MQ1kFdXlTrVVsguXEc8-cIo7MYQUuQDfw/edit#gid=0"
                                                                rel="noreferrer"
                                                            >
                                                                <span
                                                                    class="d-flex"
                                                                    style={{
                                                                        marginRight:
                                                                            '145px !important',
                                                                    }}
                                                                >
                                                                    Download
                                                                    Template
                                                                </span>
                                                            </a>
                                                            <button
                                                                type="button"
                                                                class="btn btn-primary"
                                                            >
                                                                Import
                                                            </button>
                                                            <button
                                                                type="button"
                                                                class="btn btn-light"
                                                                data-bs-dismiss="modal"
                                                            >
                                                                Close
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card-body">
                                        <div className="">
                                            <div>
                                                <div class="table-responsive">
                                                    <table class="table alert-Table">
                                                        <thead className="fs-6 fw-bold text-black">
                                                            <tr className="alert-table-row newrow">
                                                                <th
                                                                    scope="col"
                                                                    className="text-align-center alerthead"
                                                                >
                                                                    SKU
                                                                </th>
                                                                <th
                                                                    className="alerthead"
                                                                    scope="col"
                                                                >
                                                                    Notification
                                                                    Target{' '}
                                                                </th>
                                                                <th
                                                                    className="alerthead"
                                                                    scope="col"
                                                                >
                                                                    Marketplace
                                                                </th>
                                                                <th
                                                                    className="alerthead"
                                                                    scope="col"
                                                                >
                                                                    Stores{' '}
                                                                </th>
                                                                <th
                                                                    className="alerthead"
                                                                    scope="col"
                                                                >
                                                                    Rate
                                                                </th>
                                                                <th
                                                                    className="alerthead"
                                                                    scope="col"
                                                                >
                                                                    Rank
                                                                </th>
                                                                <th
                                                                    className="alerthead"
                                                                    scope="col"
                                                                >
                                                                    Fulfilment
                                                                    Type{' '}
                                                                </th>
                                                                <th
                                                                    className="alerthead"
                                                                    scope="col"
                                                                >
                                                                    SKU Status{' '}
                                                                </th>
                                                                <th
                                                                    className="alerthead"
                                                                    scope="col"
                                                                >
                                                                    Buybox Sale
                                                                    Price{' '}
                                                                </th>
                                                                <th
                                                                    className="alerthead"
                                                                    scope="col"
                                                                >
                                                                    Comment
                                                                </th>
                                                                <th
                                                                    className="alerthead"
                                                                    scope="col"
                                                                >
                                                                    Notify Via{' '}
                                                                </th>
                                                                <th
                                                                    className="alerthead"
                                                                    scope="col"
                                                                >
                                                                    Active
                                                                    Status{' '}
                                                                </th>
                                                                <th
                                                                    className="alerthead"
                                                                    scope="col"
                                                                >
                                                                    Actions
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr></tr>
                                                            <tr></tr>
                                                            <tr></tr>
                                                        </tbody>
                                                        <div className="bg-light ND">
                                                            <td className="py-1 px-2">
                                                                No Data
                                                                Available
                                                            </td>
                                                        </div>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AlertsAdd;
