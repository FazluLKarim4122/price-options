import { LineChart as LChart, Line,XAxis,YAxis } from 'recharts';

const LineChart = () => {
    const mathLineChart=[
        { "id": 1, "name": "Alice", "math": 85 },
        { "id": 2, "name": "Bob", "math": 72 },
        { "id": 3, "name": "Charlie", "math": 90 },
        { "id": 4, "name": "David", "math": 68 },
        { "id": 5, "name": "Emily", "math": 95 },
        { "id": 6, "name": "Frank", "math": 78 },
        { "id": 7, "name": "Grace", "math": 88 },
        { "id": 8, "name": "Hannah", "math": 81 },
        { "id": 9, "name": "Isaac", "math": 92 },
        { "id": 10, "name": "Jane", "math": 75 }
      ]
      
    return (
        <div>
            <LChart width={400} height={400} data={mathLineChart}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis dataKey={'math'}></YAxis>
            <Line type="monotone" dataKey="math" stroke="#8884d8" />
            </LChart>
        </div>
    );
};

export default LineChart;