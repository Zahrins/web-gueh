import React from 'react';
import { IoMdColorFilter } from "react-icons/io";

export default function Report() {
  return(
    <div style={{ marginLeft: '90px' }} className="dashboard">
      <h4>Report Sales</h4>
      <div className="nav-report">
      <div className="date-custom">
      <div>
        <p>start date</p>
        <input type="date"/>
      </div>
      <div>
        <p>end date</p>
        <input type="date"/>
      </div>
      </div>
      <div className="button-filter">
        <input type='text'/>
        <IoMdColorFilter />
      </div>
      </div>
      <table className="product-table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Cashier</th>
                            <th>Customer</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                            <td>78</td>
                            <td>ayak</td>
                            <td>tarissa</td>
                            <td>$79.47</td>
                    </tbody>
                    <tbody>
                            <td>78</td>
                            <td>ayak</td>
                            <td>tarissa</td>
                            <td>$79.47</td>
                    </tbody>
                    <tbody>
                            <td>78</td>
                            <td>ayak</td>
                            <td>tarissa</td>
                            <td>$79.47</td>
                    </tbody>
                    <tbody>
                            <td>78</td>
                            <td>ayak</td>
                            <td>tarissa</td>
                            <td>$79.47</td>
                    </tbody>
                    <tbody>
                            <td>78</td>
                            <td>ayak</td>
                            <td>tarissa</td>
                            <td>$79.47</td>
                    </tbody>
                    <tbody>
                            <td>78</td>
                            <td>ayak</td>
                            <td>tarissa</td>
                            <td>$79.47</td>
                    </tbody>
                    <tbody>
                            <td>78</td>
                            <td>ayak</td>
                            <td>tarissa</td>
                            <td>$79.47</td>
                    </tbody>
                    <tbody className="add-report">
                            <td>add    </td>
                            <td>    </td>
                            <td>    </td>
                            <td>    </td>
                    </tbody>
      </table>
    </div>
  )
}