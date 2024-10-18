import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className="hidden md:flex flex-col w-64 bg-[#21a179] overflow-auto">
        <div className="flex items-center justify-center h-16 bg-[#21a179]">
          <span className="text-white text-l uppercase">
            <Link to="/">
            TENDO DOCUMENTATION </Link>
          </span>
        </div>
        <div className="flex flex-col scroll-smooth ">
          <ul className="flex-1 px-2 py-4 bg-[#21a179]">
            <li>
              <details class="group">
                <summary class="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                  <span class="flex text-white">
                    <span>Ops Dashboard</span>
                  </span>
                  <svg
                    class="w-5 h-5 text-white transition group-open:rotate-90"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    ></path>
                  </svg>
                </summary>

                <article class="px-4 pb-4">
                  <ul class="flex flex-col gap-2 pl-2 text-white text-sm">
                    <li>
                      <details class="group">
                        <summary class="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                          <span> Orders </span>
                          <svg
                            class="w-4 h-4 text-white transition group-open:rotate-90"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                            ></path>
                          </svg>
                        </summary>
                        <ul class="pl-2 my-4 space-y-4 text-xs">
                          <li>
                            <a href="/order">Orders</a>
                          </li>
                          <li>
                            <a href="/expressorders">Express Orders</a>
                          </li>
                          <li>
                            <a href="/offlineorders">Offline Orders</a>
                          </li>
                          <li>
                            <a href="/digitalorders">Digital Orders</a>
                          </li>
                        </ul>
                      </details>
                    </li>
                    <li>
                      <details class="group">
                        <summary class="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                          <span>
                            {" "}
                            <a href="/account"> Account</a>
                          </span>
                          <svg
                            class="w-4 h-4 text-white transition group-open:rotate-90"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                            ></path>
                          </svg>
                        </summary>
                        <ul class="pl-2 my-4 space-y-4 text-xs">
                          <li>
                            <a href="/account/reseller">Reseller</a>
                          </li>
                          <li>
                            <a href="/account/supplier">Supplier</a>
                          </li>
                          <li>
                            <a href="/account/shops">Shops</a>
                          </li>
                          <li>
                            <a href="/account/campaigns">Campaigns</a>
                          </li>
                        </ul>
                      </details>
                    </li>
                    <li>
                      <details class="group">
                        <summary class="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                          <span>Inventory</span>
                          <svg
                            class="w-4 h-4 text-white transition group-open:rotate-90"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                            ></path>
                          </svg>
                        </summary>
                        <ul class="pl-2 my-4 space-y-4 text-xs">
                          <li>
                            <a href="/inventory/products">Products</a>
                          </li>
                          <li>
                            <a href="/inventory/digital-products">Digital Products</a>
                          </li>
                          <li>
                            <a href="/inventory/discounts">Discounts</a>
                          </li>
                          <li>
                            <a href="/inventory/categories">Categories</a>
                          </li>
                          <li>
                            <a href="/inventory/collections">Collections</a>
                          </li>
                        </ul>
                      </details>
                    </li>
                    <li>
                      <details class="group">
                        <summary class="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                          <span>Marketing</span>
                          <svg
                            class="w-4 h-4 text-white transition group-open:rotate-90"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                            ></path>
                          </svg>
                        </summary>
                        <ul class="pl-2 my-4 space-y-4 text-xs">
                          <li>
                            <a href="/account/marketing">Marketing Notification</a>
                          </li>
                          <li>
                            <a href="/account/coupon">Coupon</a>
                          </li>
                          <li>
                            <a href="/account/appsection">App Section</a>
                          </li>
                          <li>
                            <a href="/account/producttemplate">Product Template</a>
                          </li>
                        </ul>
                      </details>
                    </li>
                    <li>
                      <details class="group">
                        <summary class="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                          <span>Location</span>
                          <svg
                            class="w-4 h-4 text-white transition group-open:rotate-90"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                            ></path>
                          </svg>
                        </summary>
                        <ul class="pl-2 my-4 space-y-4 text-xs">
                          <li>
                            <a href="location/delivery-location">Delivery Locations</a>
                          </li>
                          <li>
                            <a href="location/pickup-location">Pickup Location</a>
                          </li>
                        </ul>
                      </details>
                    </li>
                    <li>
                      <details class="group">
                        <summary class="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                          <span>Payment</span>
                          <svg
                            class="w-4 h-4 text-white transition group-open:rotate-90"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                            ></path>
                          </svg>
                        </summary>
                        <ul class="pl-2 my-4 space-y-4 text-xs">
                          <li>
                            <a href="/payment/forex">Forex Rates</a>
                          </li>
                          <li>
                            <a href="/payment/payouts">Payout requests</a>
                          </li>
                          <li>
                            <a href="/payment/payment-transactions">Payment Transactions</a>
                          </li>
                          <li>
                            <a href="/payment/profit-processing">Profit Processing</a>
                          </li>
                        </ul>
                      </details>
                    </li>
                    <li>
                      <details class="group">
                        <summary class="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                          <span>System</span>
                          <svg
                            class="w-4 h-4 text-white transition group-open:rotate-90"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                            ></path>
                          </svg>
                        </summary>
                        <ul class="pl-2 my-4 space-y-4 text-xs">
                          {/* <li>
                            <a href="/system/plugins">Plugins</a>
                          </li> */}
                          <li>
                            <a href="/system/config">Config</a>
                          </li>
                          {/* <li>
                            <a href="/system/status">System Status</a>
                          </li> */}
                        </ul>
                      </details>
                    </li>
                    <li>
                      <details class="group">
                        <summary class="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                          <span>HR Portal</span>
                          <svg
                            class="w-4 h-4 text-white transition group-open:rotate-90"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                            ></path>
                          </svg>
                        </summary>
                        <ul class="pl-2 my-4 space-y-4 text-xs">
                          <li>
                            <a href="/hr/employees">Manage Employees</a>
                          </li>
                         
                       
                        </ul>
                      </details>
                    </li>
                  </ul>
                </article>
              </details>
            </li>
          </ul>
        </div>
      </div>
  )
}

export default Sidebar
