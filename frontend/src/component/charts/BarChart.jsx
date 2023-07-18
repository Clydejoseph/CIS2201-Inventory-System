import React from 'react'

import {Chart as ChartJS , BarElement ,CategoryScale , LinearScale ,Tooltip ,Legend} from 'chart.js'
import {Bar} from 'react-chartjs-2';
import { dataBarchart } from '../../dataExport/barChartdata';

ChartJS.register(BarElement ,CategoryScale , LinearScale ,Tooltip ,Legend)


function BarChart() {
    const weekly = ['monday','tuesday', 'thursday','friday','saturday' , 'sunday'];
    
    const data = {
        labels: weekly,
        // datasets:[
        //     {
        //         labels: 'system Unit',
        //         data: [3,6,9],
        //         backgroundColor: 'aqua',
        //         borderColor: 'black',
        //         borderWidth: 1, 
        //     }
        // ]
        datasets:dataBarchart
    }
    const options ={
        responsive:true
    }
    
    return (
        <div>
            <Bar
                data={data}
                options={options}
                
            >

            </Bar>
        </div>
    )
}

export default BarChart