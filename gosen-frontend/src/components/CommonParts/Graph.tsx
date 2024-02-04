import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { GraphDataList } from '../types';

const Graph = (props:{graphData: GraphDataList}) => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top' as const,
            labels: {
                color: '#fafafa',
            }
          },
          title: {
            display: true,
            //text: 'Chart.js Line Chart',
          },
        },
        scales: {
            x: {
                grid: {
                    color: 'rgba(255,255,255,0.5)',
                },
                ticks: {
                    color: 'rgba(255,255,255,0.5)',
                    fontSize: 14
                }
            },
            y: {
                grid: {
                    color: 'rgba(255,255,255,0.5)',
                },
                ticks: {
                    color: 'rgba(255,255,255,0.5)',
                    fontSize: 14
                }
            }
        }
    };
      
    const data = {
        labels: props.graphData.dateList,
        datasets: [
            {
                label: 'Dataset 1',
                data: [0,1,2,3,4,5,6],
                borderColor: 'rgb(0, 255, 0)',
                backgroundColor: 'rgba(0, 255, 0, 0.5)',
            },
        ],
    };
    return(
        <div>
            <Line options={options} data={data} />
        </div>
    );
}

export default Graph;