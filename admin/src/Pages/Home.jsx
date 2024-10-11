import React, { useState } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';

// Register chart.js modules
ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement, Title, Tooltip, Legend);

const Home = () => {
  const [ordersData, setOrdersData] = useState({
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Orders Placed',
        data: [50, 100, 75, 150, 125],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  });

  const [productsData, setProductsData] = useState({
    labels: ['DinnerWare', 'Decor Art', 'Ceramics', 'Gift Sets', 'Traditional'],
    datasets: [
      {
        label: 'Added Products',
        data: [30, 50, 40, 20, 10],
        backgroundColor: [
          '#ef476f',  // Color for DinnerWare
          '#ffd166',  // Color for Decor Art
          '#073b4c',  // Color for Ceramics
          '#06d6a0',  // Color for Gift Sets
          '#118ab2', // Color for Traditional
        ],
      },
    ],
  });

  const [userInteractionsData, setUserInteractionsData] = useState({
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'User Interactions',
        data: [120, 150, 180, 220, 170, 200, 210],
        backgroundColor: '#d90429)',
      },
    ],
  });

  return (
    <div className="dashboard">
      <h1 className="text-3xl font-bold text-center my-4 mb-10 font-serif">Welcome to Admin Panel</h1>
      
      <div className="charts grid grid-cols-1 md:grid-cols-2 gap-28 p-8">
        {/* Orders Graph */}
        <div className="chart-container" style={{ height: '400px' }}>
          <h2 className="text-xl font-semibold mb-4">Orders Placed</h2>
          <Bar 
            data={ordersData} 
            options={{ 
              responsive: true, 
              maintainAspectRatio: false 
            }} 
            height={400}  // Explicitly set chart height
          />
        </div>

        {/* Added Products Graph */}
        <div className="chart-container" style={{ height: '400px' }}>
          <h2 className="text-xl font-semibold mb-4">Added Products</h2>
          <Pie 
            data={productsData} 
            options={{ 
              responsive: true, 
              maintainAspectRatio: false 
            }} 
          />
        </div>

        {/* User Interactions Graph */}
        <div className="chart-container md:col-span-2" style={{ height: '400px' }}>
          <h2 className="text-xl font-semibold mb-4">User Interactions</h2>
          <Line 
            data={userInteractionsData} 
            options={{ 
              responsive: true, 
              maintainAspectRatio: false 
            }} 
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
